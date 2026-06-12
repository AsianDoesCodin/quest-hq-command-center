import './styles.css';

const CONFIG = {
  buildId: 'Quest HQ SPA Foundation v1',
  questAuthEnabled: false,
  localLoginEnabled: true,
  localUsername: 'lumen123',
  localPassword: 'lumen123',
  supabaseUrl: 'https://lpzotcznihwyyudxycmd.supabase.co',
  supabaseKey: 'sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07',
};

const BASE_PATH = new URL(import.meta.env.BASE_URL || '/', window.location.origin).pathname.replace(/\/$/, '');
const SESSION_KEY = 'quest-hq-local-session';
const PROFILE_KEY = 'quest-hq-local-profile';
const JOB_CACHE_KEY = 'quest-hq-job-cache-v2';
const STAGES = ['Lead', 'Site Review', 'Estimate', 'Approved', 'Active', 'Closed'];
const JOB_TABS = ['pipeline', 'list', 'profile', 'tasks', 'files', 'forms', 'analytics', 'editor'];

const companiesFallback = [
  { id: 'roofing', name: 'Quest Roofing', short_name: 'Roofing', color: '#f0b23b' },
  { id: 'drafting', name: 'Quest Drafting', short_name: 'Drafting', color: '#60a5fa' },
  { id: 'lumen', name: 'Lumen Marketing', short_name: 'Lumen', color: '#a78bfa' },
];

const jobsFallback = [
  {
    id: '11111111-1111-4111-8111-111111111111',
    company_id: 'roofing',
    name: 'Queen Creek Leak Follow-up',
    client_name: 'Rosales Residence',
    contact_name: 'Maya Rosales',
    site_address: 'Queen Creek, AZ',
    job_type: 'Roofing repair',
    stage: 'Active',
    priority: 'Urgent',
    owner_name: 'Andre Lee',
    scope: 'Emergency leak inspection, dry-in, and repair proposal.',
    notes: 'Client reported active leak after monsoon storm.',
    estimate_total: 6800,
    invoice_total: 0,
    task_count: 7,
    file_count: 12,
    updated_at: new Date().toISOString(),
  },
  {
    id: '22222222-2222-4222-8222-222222222222',
    company_id: 'roofing',
    name: 'Mesa Storage Roof Repair',
    client_name: 'Mesa Storage Partners',
    contact_name: 'D. Harris',
    site_address: 'Mesa, AZ',
    job_type: 'Commercial repair',
    stage: 'Estimate',
    priority: 'High',
    owner_name: 'Maya Rosales',
    scope: 'Inspect roof membrane, prepare repair estimate, and attach permit packet.',
    notes: 'Board wants estimate and permit notes before approval.',
    estimate_total: 18400,
    invoice_total: 0,
    task_count: 5,
    file_count: 8,
    updated_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '33333333-3333-4333-8333-333333333333',
    company_id: 'drafting',
    name: 'Drafting Permit Package',
    client_name: 'Horizon HVAC',
    contact_name: 'Noah Park',
    site_address: 'Chandler, AZ',
    job_type: 'Drafting',
    stage: 'Site Review',
    priority: 'Medium',
    owner_name: 'Noah Park',
    scope: 'Prepare drawing package and client approval form.',
    notes: 'Waiting on latest measurements.',
    estimate_total: 4200,
    invoice_total: 0,
    task_count: 3,
    file_count: 4,
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
];

const state = {
  route: null,
  session: readJson(SESSION_KEY, null),
  profileDraft: readJson(PROFILE_KEY, null),
  jobs: readJson(JOB_CACHE_KEY, jobsFallback).map(normalizeJob),
  companies: companiesFallback,
  selectedJobId: '',
  query: '',
  stageFilter: 'all',
  sync: { label: 'Loading jobs...', mode: 'loading' },
  dataLoaded: false,
  dataLoading: false,
  loginError: '',
  modal: '',
};

const app = document.getElementById('app');
init();

function init() {
  normalizeLegacyLocation();
  window.addEventListener('popstate', render);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('submit', onDocumentSubmit);
  document.addEventListener('input', onDocumentInput);
  document.addEventListener('change', onDocumentChange);
  render();
}

function render() {
  state.route = getRoute();

  if (needsLocalLogin(state.route)) {
    navigate('/login?return_url=' + encodeURIComponent(currentAppUrl()), { replace: true });
    return;
  }

  if (state.route.name === 'login') {
    renderLogin();
    return;
  }

  ensureDataLoad();
  reconcileSelection(state.route);
  if (state.route.params.get('account') === 'profile') state.modal = 'profile';
  document.title = `${routeTitle(state.route)} | Quest HQ`;
  app.innerHTML = shellTemplate(state.route, renderWorkspace(state.route));
}

function needsLocalLogin(route) {
  if (!CONFIG.localLoginEnabled) return false;
  if (route.name === 'login') return false;
  return !state.session;
}

function ensureDataLoad() {
  if (state.dataLoaded || state.dataLoading) return;
  state.dataLoading = true;
  loadSupabaseData()
    .catch(() => {
      state.jobs = jobsFallback.map(normalizeJob);
      state.companies = companiesFallback;
      state.sync = { label: 'Local fallback', mode: 'local' };
    })
    .finally(() => {
      state.dataLoaded = true;
      state.dataLoading = false;
      persistJobs();
      render();
    });
}

async function loadSupabaseData() {
  const client = createSupabaseClient();
  if (!client) {
    state.sync = { label: 'Supabase unavailable', mode: 'local' };
    return;
  }

  const [jobsResult, companiesResult] = await Promise.all([
    client.from('jobs').select('*').order('updated_at', { ascending: false }),
    client.from('companies').select('*').order('name', { ascending: true }),
  ]);

  if (jobsResult.error) throw jobsResult.error;
  state.jobs = (jobsResult.data || []).map(normalizeJob);
  if (!state.jobs.length) state.jobs = jobsFallback.map(normalizeJob);

  if (!companiesResult.error && companiesResult.data && companiesResult.data.length) {
    state.companies = companiesResult.data;
  }

  state.sync = { label: 'Supabase live', mode: 'live' };
}

function createSupabaseClient() {
  if (!window.supabase || typeof window.supabase.createClient !== 'function') return null;
  return window.supabase.createClient(CONFIG.supabaseUrl, CONFIG.supabaseKey);
}

function shellTemplate(route, workspace) {
  const session = activeSession();
  return `
    <div class="quest-app" data-route="${h(route.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${appHref('/command')}" data-router aria-label="Quest HQ Operations Command">
            <i class="ti ti-bolt"></i>
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">Operations Command</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="global-search">
            <i class="ti ti-search" aria-hidden="true"></i>
            <input data-global-search value="${h(state.query)}" placeholder="Search jobs, clients, owners, addresses" />
          </label>
          <span class="sync-pill ${h(state.sync.mode)}" data-sync-state>${h(state.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data"><i class="ti ti-refresh"></i>Refresh</button>
          <a class="btn btn-primary" href="${appHref('/jobs?tab=editor')}" data-router><i class="ti ti-plus"></i>Add Job</a>
          <div class="account-menu">
            <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open Quest profile">
              ${renderAvatar(session.profile, 'avatar')}
            </button>
            <div class="account-popover">
              <strong>${h(session.profile.full_name)}</strong>
              <span>${h(session.profile.role_label)}</span>
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${renderDeck(route)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${workspace}
        </main>
      </div>
    </div>
    ${state.modal === 'profile' ? renderProfileModal(session.profile) : ''}
  `;
}

function renderDeck(route) {
  const jobCount = state.jobs.length;
  const urgentCount = state.jobs.filter((job) => job.priority === 'Urgent').length;
  return `
    <div class="side-brand">
      <span class="side-mark">Q</span>
      <span><strong>Quest HQ</strong><small>${h(CONFIG.buildId)}</small></span>
    </div>
    ${navGroup('Command', [
      navItem(route, '/command', 'ti-layout-dashboard', 'Operations command'),
    ])}
    ${navGroup('Job Center', [
      navItem(route, '/jobs', 'ti-briefcase', 'Jobs', jobCount),
      navItem(route, '/jobs?tab=tasks', 'ti-list-check', 'Task execution'),
      navItem(route, '/files', 'ti-folder', 'Files'),
      navItem(route, '/forms', 'ti-clipboard-list', 'Forms'),
    ])}
    ${navGroup('Operations', [
      navItem(route, '/time', 'ti-clock', 'My time', '3.3h'),
      navItem(route, '/team', 'ti-users', 'Team workload', state.jobs.length),
      navItem(route, '/approvals', 'ti-user-check', 'Approvals', 0),
      navItem(route, '/clock', 'ti-clock-play', 'Clock dashboard', 0),
    ])}
    ${navGroup('System', [
      navItem(route, '/analytics', 'ti-chart-bar', 'Analytics'),
      navItem(route, '/admin', 'ti-settings', 'Admin'),
      navItem(route, '/crm', 'ti-address-book', 'CRM', 'Planned'),
      navItem(route, '/finance', 'ti-receipt', 'Finance', 'Planned'),
      navItem(route, '/knowledge', 'ti-books', 'Knowledge', 'Planned'),
      navItem(route, '/automations', 'ti-route', 'Automations', 'Planned'),
      navItem(route, '/tickets', 'ti-ticket', 'Tickets', 'Planned'),
      navItem(route, '/templates', 'ti-template', 'Templates', 'Planned'),
    ])}
    <div class="deck-note">
      <strong>Boundary</strong>
      <span>Quest owns jobs, people, roles, files, forms, time, approvals, and admin. TaskManagement executes tasks only.</span>
    </div>
  `;
}

function navGroup(label, items) {
  return `
    <section class="side-group">
      <div class="side-label">${h(label)}</div>
      <div class="side-items">${items.join('')}</div>
    </section>
  `;
}

function navItem(route, path, icon, label, count = '') {
  const active = isActiveNav(route, path);
  const planned = String(count).toLowerCase() === 'planned';
  return `
    <a class="side-item ${active ? 'active' : ''} ${planned ? 'planned' : ''}" href="${appHref(path)}" data-router>
      <i class="ti ${h(icon)}"></i>
      <span>${h(label)}</span>
      ${count !== '' ? `<b>${h(String(count))}</b>` : ''}
    </a>
  `;
}

function renderWorkspace(route) {
  if (route.name === 'command') return renderCommand();
  if (route.name === 'jobs') return renderJobCenter(route);
  if (route.name === 'files') return renderFilesPage();
  if (route.name === 'forms') return renderFormsPage();
  if (route.name === 'analytics') return renderAnalyticsPage();
  if (route.name === 'admin') return renderAdminPage();
  if (['time', 'team', 'approvals', 'clock'].includes(route.name)) return renderOperationsPage(route.name);
  return renderPlannedPage(route.name);
}

function renderCommand() {
  const active = state.jobs.filter((job) => job.stage !== 'Closed');
  const urgent = state.jobs.filter((job) => job.priority === 'Urgent');
  const selected = selectedJob();
  return `
    ${pageHead('Operations Command', 'Single command surface for jobs, task execution, time, team workload, approvals, files, forms, and admin.', `
      <a class="btn btn-primary" href="${appHref('/jobs?tab=editor')}" data-router><i class="ti ti-plus"></i>Add Job</a>
    `)}
    ${metricGrid([
      ['Active jobs', active.length],
      ['Urgent work', urgent.length],
      ['Linked tasks', sum(state.jobs, 'task_count')],
      ['Pipeline value', money(sum(state.jobs, 'estimate_total'))],
    ])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority Job Queue</h2><p>Live job containers. Task execution opens inside this shell.</p></div>
          <a class="btn" href="${appHref('/jobs')}" data-router>Open Job Center</a>
        </div>
        <div class="queue-list">
          ${active.slice(0, 6).map((job) => jobQueueRow(job)).join('') || emptyState('No active jobs found.')}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Task Handoff</h2><p>Job id feeds TaskManagement project_id.</p></div></div>
        ${selected ? contractRows([
          ['Selected job', selected.name],
          ['project_id', selected.id],
          ['Task runtime', 'Embedded tasks only'],
          ['Standalone recovery', 'taskmanagement/app.html'],
        ]) : emptyState('Create or select a job to scope task execution.')}
        <a class="btn btn-primary full" href="${appHref('/jobs?tab=tasks' + (selected ? `&job_id=${encodeURIComponent(selected.id)}` : ''))}" data-router>Open job tasks</a>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Operations Ownership</h2><p>These are Quest modules now, not embedded task sidebar items.</p></div></div>
        <div class="module-stack">
          ${miniLink('/time', 'ti-clock', 'My time', 'Local shift surface')}
          ${miniLink('/team', 'ti-users', 'Team workload', 'Supervisor view')}
          ${miniLink('/approvals', 'ti-user-check', 'Approvals', 'Quest account access')}
          ${miniLink('/clock', 'ti-clock-play', 'Clock dashboard', 'Admin clock review')}
        </div>
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Recent Operating Activity</h2><p>Derived from current job records until activity tables are wired into the shell.</p></div></div>
        <div class="activity-list">
          ${activityRows().map(([title, text]) => `<div><strong>${h(title)}</strong><span>${h(text)}</span></div>`).join('')}
        </div>
      </article>
    </section>
  `;
}

function renderJobCenter(route) {
  const tab = normalizeJobTab(route.tab);
  const job = selectedJob();
  return `
    ${pageHead('Job Center', 'The production shell for job records and job-scoped task execution.', `
      <button class="btn" type="button" data-action="refresh-data"><i class="ti ti-refresh"></i>Refresh</button>
      <a class="btn btn-primary" href="${appHref('/jobs?tab=editor' + (job ? `&job_id=${encodeURIComponent(job.id)}` : ''))}" data-router><i class="ti ti-plus"></i>Add Job</a>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${['all'].concat(STAGES).map((stage) => `<option value="${h(stage)}" ${state.stageFilter === stage ? 'selected' : ''}>${h(stage === 'all' ? 'All business statuses' : stage)}</option>`).join('')}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${job ? h(job.name) : 'No job selected'}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job Center sections">
      ${JOB_TABS.map((item) => `<a class="${item === tab ? 'active' : ''}" href="${appHref('/jobs?' + new URLSearchParams({ tab: item, ...(job ? { job_id: job.id } : {}) }).toString())}" data-router>${h(labelForTab(item))}</a>`).join('')}
    </nav>
    ${renderJobPanel(tab, job)}
  `;
}

function renderJobPanel(tab, job) {
  if (tab === 'pipeline') return renderPipeline();
  if (tab === 'list') return renderJobList();
  if (tab === 'profile') return renderJobProfile(job);
  if (tab === 'tasks') return renderTaskRuntime(job);
  if (tab === 'files') return renderJobFiles(job);
  if (tab === 'forms') return renderJobForms(job);
  if (tab === 'analytics') return renderJobAnalytics(job);
  if (tab === 'editor') return renderJobEditor(job);
  return renderPipeline();
}

function renderPipeline() {
  const visible = filteredJobs();
  return `
    <section class="job-board">
      ${STAGES.map((stage) => {
        const jobs = visible.filter((job) => job.stage === stage);
        return `
          <article class="job-lane">
            <h2><span>${h(stage)}</span><b>${jobs.length}</b></h2>
            ${jobs.map((job) => jobCard(job)).join('') || `<div class="lane-empty">No jobs</div>`}
          </article>
        `;
      }).join('')}
    </section>
  `;
}

function renderJobList() {
  const rows = filteredJobs();
  return `
    <section class="panel">
      <div class="section-head"><div><h2>Job List</h2><p>${rows.length} visible job${rows.length === 1 ? '' : 's'}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${rows.map((job) => `
          <button class="table-row ${job.id === state.selectedJobId ? 'active' : ''}" type="button" data-select-job="${h(job.id)}">
            <span><strong>${h(job.name)}</strong><small>${h(job.client_name || 'No client')} - ${h(job.site_address || 'No address')}</small></span>
            <span>${h(job.stage)}</span>
            <span>${priorityPill(job.priority)}</span>
            <span>${h(job.owner_name || 'Unassigned')}</span>
            <span>${h(job.task_count)}</span>
            <span>${money(job.estimate_total)}</span>
          </button>
        `).join('') || emptyState('No jobs match this view.')}
      </div>
    </section>
  `;
}

function renderJobProfile(job) {
  if (!job) return emptyState('Create a job to see the profile workspace.');
  return `
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${h(companyName(job.company_id))} - ${h(job.job_type)}</span>
          <h2>${h(job.name)}</h2>
          <p>${h(job.scope || 'No scope written yet.')}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job Controls</h2><p>Quest owns the job context and handoff.</p></div></div>
        ${contractRows([
          ['Client', job.client_name || 'No client'],
          ['Contact', job.contact_name || 'No contact'],
          ['Owner', job.owner_name || 'Unassigned'],
          ['Stage', job.stage],
          ['Priority', job.priority],
          ['Estimate', money(job.estimate_total)],
          ['Task project_id', job.id],
        ])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${appHref('/jobs?tab=tasks&job_id=' + encodeURIComponent(job.id))}" data-router>Open tasks</a>
          <a class="btn" href="${appHref('/jobs?tab=editor&job_id=' + encodeURIComponent(job.id))}" data-router>Edit job</a>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked Workspaces</h2><p>Files, forms, analytics, and task execution remain inside Job Center.</p></div></div>
        <div class="linked-grid">
          ${miniLink('/jobs?tab=tasks&job_id=' + encodeURIComponent(job.id), 'ti-list-check', 'Tasks', `${job.task_count} linked tasks`)}
          ${miniLink('/jobs?tab=files&job_id=' + encodeURIComponent(job.id), 'ti-folder', 'Files', `${job.file_count} files`)}
          ${miniLink('/jobs?tab=forms&job_id=' + encodeURIComponent(job.id), 'ti-clipboard-list', 'Forms', 'Inspections and surveys')}
          ${miniLink('/jobs?tab=analytics&job_id=' + encodeURIComponent(job.id), 'ti-chart-bar', 'Analytics', 'Job health')}
        </div>
      </article>
    </section>
  `;
}

function renderTaskRuntime(job) {
  const src = taskRuntimeUrl(job);
  return `
    <section class="task-runtime panel">
      <div class="runtime-head">
        <div>
          <div class="eyebrow">TaskManagement execution</div>
          <h2>${job ? h(job.name) : 'All task work'}</h2>
          <p>${job ? `Scoped through project_id ${h(job.id)}.` : 'Select a job to scope TaskManagement to a project_id.'}</p>
        </div>
        <div class="runtime-actions">
          <button class="btn" type="button" data-action="reload-task-frame"><i class="ti ti-refresh"></i>Reload</button>
          <a class="btn" href="${h(taskRuntimeUrl(job, false))}" target="_blank" rel="noreferrer">Open full view</a>
        </div>
      </div>
      <iframe title="Job-scoped TaskManagement" data-task-frame src="${h(src)}" loading="lazy" referrerpolicy="same-origin"></iframe>
    </section>
  `;
}

function renderJobFiles(job) {
  if (!job) return emptyState('Select a job to inspect file context.');
  return `
    <section class="panel">
      <div class="section-head"><div><h2>${h(job.name)} Files</h2><p>Quest owns files and documents. TaskManagement stays focused on task execution.</p></div><a class="btn" href="${appHref('/files?job_id=' + encodeURIComponent(job.id))}" data-router>Open File Center</a></div>
      <div class="file-grid">
        ${['Inspection photos', 'Permit packet', 'Client approval', 'Final walkthrough'].map((name, index) => fileTile(name, job, index)).join('')}
      </div>
    </section>
  `;
}

function renderJobForms(job) {
  if (!job) return emptyState('Select a job to inspect form context.');
  return `
    <section class="panel">
      <div class="section-head"><div><h2>${h(job.name)} Forms</h2><p>Inspection and survey surfaces live in Quest, not inside the task iframe.</p></div><a class="btn" href="${appHref('/forms?job_id=' + encodeURIComponent(job.id))}" data-router>Open Forms</a></div>
      <div class="card-grid">
        ${['Roof inspection checklist', 'Client approval form', 'Final walkthrough survey', 'Internal request intake'].map((title) => `
          <article class="mini-card"><strong>${h(title)}</strong><span>${h(job.name)}</span><small>Ready for module data wiring</small></article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderJobAnalytics(job) {
  const jobs = job ? [job] : state.jobs;
  return `
    <section class="panel">
      <div class="section-head"><div><h2>${job ? h(job.name) : 'Job'} Analytics</h2><p>Rollups from the Job Center record set.</p></div></div>
      ${metricGrid([
        ['Jobs in scope', jobs.length],
        ['Urgent', jobs.filter((item) => item.priority === 'Urgent').length],
        ['Tasks', sum(jobs, 'task_count')],
        ['Files', sum(jobs, 'file_count')],
      ])}
      <div class="stage-bars">
        ${STAGES.map((stage) => {
          const count = jobs.filter((item) => item.stage === stage).length;
          const pct = jobs.length ? Math.round((count / jobs.length) * 100) : 0;
          return `<div><span>${h(stage)}</span><b><i style="width:${pct}%"></i></b><strong>${count}</strong></div>`;
        }).join('')}
      </div>
    </section>
  `;
}

function renderJobEditor(job) {
  const edit = job || blankJob();
  return `
    <form class="panel job-editor" data-job-form>
      <input type="hidden" name="id" value="${h(edit.id || '')}" />
      <div class="section-head span-2">
        <div><h2>${job ? 'Edit Job Workspace' : 'Create Job Workspace'}</h2><p>Creates the business container that feeds files, forms, analytics, and TaskManagement project_id.</p></div>
      </div>
      ${field('Workspace name', 'name', edit.name, true)}
      ${selectField('Company', 'company_id', edit.company_id || firstCompanyId(), state.companies.map((company) => [company.id, company.name || company.short_name || company.id]))}
      ${field('Client', 'client_name', edit.client_name)}
      ${field('Contact', 'contact_name', edit.contact_name)}
      ${field('Account owner', 'owner_name', edit.owner_name)}
      ${field('Job type', 'job_type', edit.job_type || 'Roofing')}
      ${selectField('Business status', 'stage', edit.stage || 'Lead', STAGES.map((stage) => [stage, stage]))}
      ${selectField('Client urgency', 'priority', edit.priority || 'Medium', ['Low', 'Medium', 'High', 'Urgent'].map((item) => [item, item]))}
      ${field('Estimate total', 'estimate_total', edit.estimate_total || 0, false, 'number')}
      ${field('Site address', 'site_address', edit.site_address, false, 'text', 'span-2')}
      ${textareaField('Scope', 'scope', edit.scope, 'span-2')}
      ${textareaField('Notes', 'notes', edit.notes, 'span-2')}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save Workspace</button>
        ${job ? `<button class="btn danger" type="button" data-action="delete-job" data-job-id="${h(job.id)}">Delete</button>` : ''}
      </div>
    </form>
  `;
}

function renderFilesPage() {
  const requested = getRoute().params.get('job_id');
  const job = requested ? jobById(requested) : selectedJob();
  return `
    ${pageHead('File Center', 'Job-linked photos, permits, drawings, contracts, estimates, and closeout documents.', `
      <a class="btn" href="${appHref('/jobs?tab=files' + (job ? `&job_id=${encodeURIComponent(job.id)}` : ''))}" data-router>Open in Job Center</a>
    `)}
    ${metricGrid([
      ['Files', sum(state.jobs, 'file_count')],
      ['Jobs with files', state.jobs.filter((item) => item.file_count > 0).length],
      ['Photos', Math.max(0, sum(state.jobs, 'file_count') - 5)],
      ['Unlinked', 0],
    ])}
    <section class="file-layout">
      <article class="panel">
        <div class="section-head"><div><h2>Folders by Job</h2><p>Selecting a folder keeps the same shell and routes into job context.</p></div></div>
        <div class="folder-grid">
          ${state.jobs.map((item) => `
            <a class="folder-card ${job && item.id === job.id ? 'active' : ''}" href="${appHref('/files?job_id=' + encodeURIComponent(item.id))}" data-router>
              <i class="ti ti-folder"></i>
              <strong>${h(item.name)}</strong>
              <span>${h(companyName(item.company_id))}</span>
              <small>${h(item.file_count)} files</small>
            </a>
          `).join('')}
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>${job ? h(job.name) : 'No job selected'}</h2><p>Selected file workspace</p></div></div>
        ${job ? contractRows([
          ['Client', job.client_name || 'No client'],
          ['Files', job.file_count],
          ['Storage bucket', 'quest-job-files'],
          ['Task link', job.id],
        ]) : emptyState('Select a job folder.')}
      </aside>
    </section>
  `;
}

function renderFormsPage() {
  const templates = ['Roof inspection checklist', 'Client approval form', 'Final walkthrough survey', 'Internal request intake', 'Safety tailgate form', 'Warranty handoff'];
  return `
    ${pageHead('Forms & Surveys', 'Inspection, approval, intake, and response review owned by Quest HQ.', `
      <a class="btn" href="${appHref('/jobs?tab=forms')}" data-router>Open job forms</a>
    `)}
    <section class="forms-layout">
      <article class="panel">
        <div class="section-head"><div><h2>Template Library</h2><p>Form records are ready to wire to Supabase module tables.</p></div></div>
        <div class="card-grid">
          ${templates.map((title, index) => `<article class="mini-card"><strong>${h(title)}</strong><span>${index % 2 ? 'Draft' : 'Published'}</span><small>Quest HQ module</small></article>`).join('')}
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Response Center</h2><p>Recent survey and inspection responses.</p></div></div>
        <div class="activity-list">
          ${state.jobs.slice(0, 4).map((job) => `<div><strong>${h(job.name)}</strong><span>Inspection response workspace ready.</span></div>`).join('') || emptyState('No jobs available.')}
        </div>
      </aside>
    </section>
  `;
}

function renderAnalyticsPage() {
  return `
    ${pageHead('Analytics', 'Central reporting for jobs, workload, task handoff, files, and operational health.', '')}
    ${renderJobAnalytics(null)}
    <section class="dashboard-grid top-gap">
      <article class="panel">
        <div class="section-head"><div><h2>Module Health</h2><p>Production boundaries and readiness.</p></div></div>
        ${contractRows([
          ['Job Center', 'Live Supabase table'],
          ['TaskManagement', 'Embedded task engine'],
          ['Files', 'Quest-owned module'],
          ['Forms', 'Quest-owned module'],
          ['Auth', CONFIG.questAuthEnabled ? 'Supabase auth' : 'Local basic gate'],
        ])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Pipeline Breakdown</h2><p>Jobs grouped by business status.</p></div></div>
        <div class="stage-bars">
          ${STAGES.map((stage) => {
            const count = state.jobs.filter((job) => job.stage === stage).length;
            const pct = state.jobs.length ? Math.round((count / state.jobs.length) * 100) : 0;
            return `<div><span>${h(stage)}</span><b><i style="width:${pct}%"></i></b><strong>${count}</strong></div>`;
          }).join('')}
        </div>
      </article>
    </section>
  `;
}

function renderAdminPage() {
  return `
    ${pageHead('Admin', 'Quest-owned users, roles, companies, approvals, and access settings.', '')}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Companies</h2><p>Company context used by jobs and task scopes.</p></div></div>
        <div class="company-list">
          ${state.companies.map((company) => `<div><b style="background:${h(company.color || '#f0b23b')}"></b><strong>${h(company.name || company.id)}</strong><span>${h(company.id)}</span></div>`).join('')}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Users & Roles</h2><p>Quest shell owns account role display while Supabase auth is disabled.</p></div></div>
        ${contractRows([
          ['Current user', activeSession().profile.full_name],
          ['Role', activeSession().profile.role_label],
          ['Companies', activeSession().profile.company_ids.join(', ')],
          ['Supabase auth', CONFIG.questAuthEnabled ? 'Enabled' : 'Disabled'],
        ])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Approvals</h2><p>Moved out of embedded TaskManagement.</p></div></div>
        ${emptyState('No pending local approvals. Real approval rows wire here when Supabase auth is re-enabled.')}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Team Chart</h2><p>Org and workload surfaces belong in Quest HQ.</p></div></div>
        <div class="team-chart">
          <div><strong>Operations Lead</strong><span>Quest HQ</span></div>
          <div><strong>Roofing Supervisor</strong><span>${state.jobs.filter((job) => job.company_id === 'roofing').length} jobs</span></div>
          <div><strong>Drafting Supervisor</strong><span>${state.jobs.filter((job) => job.company_id === 'drafting').length} jobs</span></div>
          <div><strong>Lumen Lead</strong><span>${state.jobs.filter((job) => job.company_id === 'lumen').length} jobs</span></div>
        </div>
      </article>
    </section>
  `;
}

function renderOperationsPage(name) {
  const titles = {
    time: ['My Time', 'Personal time tracking belongs to Quest shell while task timers remain available in full TaskManagement recovery mode.'],
    team: ['Team Workload', 'Supervisor workload view by job, company, owner, and urgency.'],
    approvals: ['Approvals', 'Account approval and role assignment lives in Quest HQ.'],
    clock: ['Clock Dashboard', 'Admin clock review and exceptions live in Quest HQ.'],
  };
  const [title, summary] = titles[name] || titles.time;
  const urgent = state.jobs.filter((job) => job.priority === 'Urgent');
  return `
    ${pageHead(title, summary, '')}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Summary</h2><p>Quest-owned operational surface.</p></div></div>
        ${contractRows([
          ['Visible jobs', state.jobs.length],
          ['Urgent jobs', urgent.length],
          ['Linked tasks', sum(state.jobs, 'task_count')],
          ['Mode', CONFIG.questAuthEnabled ? 'Supabase auth' : 'Local basic mode'],
        ])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Workload Queue</h2><p>Sorted by urgency and recent updates.</p></div></div>
        <div class="queue-list">${state.jobs.slice(0, 8).map((job) => jobQueueRow(job)).join('') || emptyState('No jobs found.')}</div>
      </article>
    </section>
  `;
}

function renderPlannedPage(name) {
  const labels = {
    crm: 'CRM',
    finance: 'Finance',
    knowledge: 'Knowledge Base',
    automations: 'Automations',
    tickets: 'Tickets',
    templates: 'Templates',
  };
  const title = labels[name] || 'Workspace';
  return `
    ${pageHead(title, `${title} now opens inside the same Quest shell. This module is intentionally empty until its real data model is approved.`, '')}
    <section class="panel">
      <div class="section-head"><div><h2>${h(title)} Workspace</h2><p>No duplicate shell, no separate app jump, no TaskManagement ownership leak.</p></div></div>
      ${emptyState('Module data model pending. Navigation and shell integration are production-ready.')}
    </section>
  `;
}

function renderLogin() {
  document.title = 'Sign in | Quest HQ';
  const returnUrl = safeReturnUrl(state.route.params.get('return_url') || appHref('/command'));
  app.innerHTML = `
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Operations Command</small></span>
        </div>
        <div>
          <div class="eyebrow">Local access</div>
          <h1>Sign in to Quest HQ</h1>
          <p>Supabase auth is disabled while the app foundation is stabilized. Use the temporary local credentials.</p>
        </div>
        <form data-login-form>
          <label>Username<input name="username" value="${h(CONFIG.localUsername)}" autocomplete="username" /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" /></label>
          <input type="hidden" name="return_url" value="${h(returnUrl)}" />
          <button class="btn btn-primary full" type="submit">Sign in</button>
          ${state.loginError ? `<div class="form-message error">${h(state.loginError)}</div>` : `<div class="form-message">Temporary credentials: lumen123 / lumen123</div>`}
        </form>
      </section>
    </main>
  `;
}

function renderProfileModal(profile) {
  return `
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${renderAvatar(profile, 'avatar large')}
            <div><strong>${h(profile.full_name)}</strong><span>${h(profile.email)}</span></div>
          </div>
          <label>Display name<input name="full_name" value="${h(profile.full_name)}" /></label>
          <label>Avatar URL<input name="avatar_url" value="${h(profile.avatar_url || '')}" placeholder="https://..." /></label>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Save profile</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function onDocumentClick(event) {
  const action = event.target.closest('[data-action]');
  if (action) {
    handleAction(event, action);
    return;
  }

  const selectJob = event.target.closest('[data-select-job]');
  if (selectJob) {
    event.preventDefault();
    setSelectedJob(selectJob.dataset.selectJob);
    return;
  }

  const link = event.target.closest('a[href][data-router]');
  if (!link) return;
  if (link.target || link.hasAttribute('download')) return;
  event.preventDefault();
  navigate(link.getAttribute('href'));
}

function handleAction(event, node) {
  const action = node.dataset.action;
  if (action === 'refresh-data') {
    event.preventDefault();
    state.dataLoaded = false;
    state.sync = { label: 'Refreshing...', mode: 'loading' };
    render();
    return;
  }
  if (action === 'sign-out') {
    event.preventDefault();
    localStorage.removeItem(SESSION_KEY);
    state.session = null;
    navigate('/login', { replace: true });
    return;
  }
  if (action === 'open-profile') {
    event.preventDefault();
    state.modal = 'profile';
    render();
    return;
  }
  if (action === 'close-modal') {
    event.preventDefault();
    state.modal = '';
    if (state.route && state.route.params.get('account') === 'profile') {
      const params = new URLSearchParams(state.route.params);
      params.delete('account');
      const search = params.toString();
      navigate(state.route.path + (search ? `?${search}` : ''), { replace: true });
      return;
    }
    render();
    return;
  }
  if (action === 'reload-task-frame') {
    event.preventDefault();
    const frame = document.querySelector('[data-task-frame]');
    if (frame) frame.src = frame.src;
    return;
  }
  if (action === 'delete-job') {
    event.preventDefault();
    deleteJob(node.dataset.jobId);
  }
}

function onDocumentSubmit(event) {
  if (event.target.matches('[data-login-form]')) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.target).entries());
    const ok = String(form.username || '').trim() === CONFIG.localUsername && String(form.password || '') === CONFIG.localPassword;
    if (!ok) {
      state.loginError = 'Invalid temporary credentials.';
      render();
      return;
    }
    state.loginError = '';
    state.session = buildLocalSession();
    writeJson(SESSION_KEY, state.session);
    navigate(safeReturnUrl(form.return_url || appHref('/command')), { replace: true });
    return;
  }

  if (event.target.matches('[data-profile-form]')) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.target).entries());
    const next = {
      ...activeSession().profile,
      full_name: String(form.full_name || '').trim() || 'Quest Basic Mode',
      avatar_url: String(form.avatar_url || '').trim(),
    };
    writeJson(PROFILE_KEY, next);
    state.profileDraft = next;
    state.session = { ...activeSession(), profile: next };
    writeJson(SESSION_KEY, state.session);
    state.modal = '';
    render();
    return;
  }

  if (event.target.matches('[data-job-form]')) {
    event.preventDefault();
    saveJob(event.target);
  }
}

function onDocumentInput(event) {
  if (event.target.matches('[data-global-search]')) {
    state.query = event.target.value;
    updateWorkspaceOnly();
  }
}

function onDocumentChange(event) {
  if (event.target.matches('[data-stage-filter]')) {
    state.stageFilter = event.target.value || 'all';
    render();
  }
}

async function saveJob(form) {
  const payload = normalizeJob(Object.fromEntries(new FormData(form).entries()));
  payload.id = payload.id || crypto.randomUUID();
  payload.estimate_total = Number(payload.estimate_total || 0);
  payload.updated_at = new Date().toISOString();

  const existing = state.jobs.some((job) => job.id === payload.id);
  const client = createSupabaseClient();

  if (client) {
    const savePayload = { ...payload };
    const result = existing
      ? await client.from('jobs').update(savePayload).eq('id', payload.id).select().single()
      : await client.from('jobs').insert(savePayload).select().single();
    if (!result.error && result.data) {
      upsertJob(normalizeJob(result.data));
      state.sync = { label: 'Supabase live', mode: 'live' };
      navigate('/jobs?tab=profile&job_id=' + encodeURIComponent(result.data.id), { replace: true });
      return;
    }
    state.sync = { label: 'Saved locally', mode: 'local' };
  }

  upsertJob(payload);
  navigate('/jobs?tab=profile&job_id=' + encodeURIComponent(payload.id), { replace: true });
}

async function deleteJob(id) {
  if (!id) return;
  const client = createSupabaseClient();
  if (client) await client.from('jobs').delete().eq('id', id);
  state.jobs = state.jobs.filter((job) => job.id !== id);
  state.selectedJobId = state.jobs[0]?.id || '';
  persistJobs();
  navigate('/jobs?tab=list', { replace: true });
}

function upsertJob(job) {
  const index = state.jobs.findIndex((item) => item.id === job.id);
  if (index >= 0) state.jobs[index] = job;
  else state.jobs.unshift(job);
  state.selectedJobId = job.id;
  persistJobs();
}

function updateWorkspaceOnly() {
  const workspace = document.getElementById('workspace');
  if (!workspace) return;
  reconcileSelection(state.route);
  workspace.innerHTML = renderWorkspace(state.route);
}

function getRoute() {
  const path = appPathname();
  const params = new URLSearchParams(window.location.search);
  const jobTaskMatch = path.match(/^\/jobs\/([^/]+)\/tasks\/?$/);
  if (jobTaskMatch) {
    params.set('job_id', jobTaskMatch[1]);
    params.set('tab', 'tasks');
    return { name: 'jobs', path, params, tab: 'tasks', jobId: jobTaskMatch[1] };
  }
  const map = {
    '/': 'command',
    '/command': 'command',
    '/jobs': 'jobs',
    '/files': 'files',
    '/forms': 'forms',
    '/analytics': 'analytics',
    '/admin': 'admin',
    '/time': 'time',
    '/team': 'team',
    '/approvals': 'approvals',
    '/clock': 'clock',
    '/crm': 'crm',
    '/finance': 'finance',
    '/knowledge': 'knowledge',
    '/automations': 'automations',
    '/tickets': 'tickets',
    '/templates': 'templates',
    '/login': 'login',
  };
  const name = map[path] || 'command';
  return {
    name,
    path,
    params,
    tab: name === 'jobs' ? normalizeJobTab(params.get('tab')) : '',
    jobId: params.get('job_id') || '',
  };
}

function normalizeLegacyLocation() {
  const path = appPathname();
  const params = new URLSearchParams(window.location.search);
  const map = {
    '/index.html': '/command',
    '/admin.html': '/admin',
    '/automations.html': '/automations',
    '/crm.html': '/crm',
    '/dashboards.html': '/analytics',
    '/files.html': '/files',
    '/finance.html': '/finance',
    '/forms.html': '/forms',
    '/jobs.html': '/jobs',
    '/knowledge.html': '/knowledge',
    '/login.html': '/login',
    '/templates.html': '/templates',
    '/tickets.html': '/tickets',
  };
  let target = map[path];
  if (path === '/task-management.html') {
    target = '/jobs';
    params.set('tab', 'tasks');
    if (params.has('project_id') && !params.has('job_id')) params.set('job_id', params.get('project_id'));
    params.delete('project_id');
  }
  if (!target) return;
  const search = params.toString();
  window.history.replaceState({}, '', appHref(target + (search ? `?${search}` : '')));
}

function appPathname() {
  let path = window.location.pathname || '/';
  if (BASE_PATH && path.startsWith(BASE_PATH)) path = path.slice(BASE_PATH.length) || '/';
  if (!path.startsWith('/')) path = '/' + path;
  return path.replace(/\/+$/, '') || '/';
}

function appHref(path) {
  if (/^https?:\/\//i.test(path)) return path;
  const [rawPath, rawSearch = ''] = String(path || '/').split('?');
  const normalized = rawPath.startsWith('/') ? rawPath : '/' + rawPath;
  return `${BASE_PATH}${normalized}${rawSearch ? `?${rawSearch}` : ''}` || '/';
}

function navigate(path, options = {}) {
  const href = path.startsWith(BASE_PATH || '/') ? path : appHref(path);
  if (options.replace) window.history.replaceState({}, '', href);
  else window.history.pushState({}, '', href);
  render();
}

function currentAppUrl() {
  return `${appPathname()}${window.location.search}`;
}

function safeReturnUrl(value) {
  try {
    const url = new URL(value, window.location.origin);
    if (url.origin !== window.location.origin) return appHref('/command');
    return `${url.pathname}${url.search}`;
  } catch {
    return appHref('/command');
  }
}

function routeTitle(route) {
  const labels = {
    command: 'Operations Command',
    jobs: 'Job Center',
    files: 'File Center',
    forms: 'Forms & Surveys',
    analytics: 'Analytics',
    admin: 'Admin',
    time: 'My Time',
    team: 'Team Workload',
    approvals: 'Approvals',
    clock: 'Clock Dashboard',
    crm: 'CRM',
    finance: 'Finance',
    knowledge: 'Knowledge Base',
    automations: 'Automations',
    tickets: 'Tickets',
    templates: 'Templates',
    login: 'Sign in',
  };
  return labels[route.name] || 'Operations Command';
}

function isActiveNav(route, path) {
  const [targetPath, targetSearch = ''] = path.split('?');
  if (targetPath === '/jobs' && route.name === 'jobs') {
    const tab = new URLSearchParams(targetSearch).get('tab');
    if (!tab) return route.name === 'jobs' && !['tasks'].includes(route.tab);
    return route.tab === tab;
  }
  const targetRoute = getRouteNameFromPath(targetPath);
  return route.name === targetRoute;
}

function getRouteNameFromPath(path) {
  return getRouteNameMap()[path] || 'command';
}

function getRouteNameMap() {
  return {
    '/command': 'command',
    '/jobs': 'jobs',
    '/files': 'files',
    '/forms': 'forms',
    '/analytics': 'analytics',
    '/admin': 'admin',
    '/time': 'time',
    '/team': 'team',
    '/approvals': 'approvals',
    '/clock': 'clock',
    '/crm': 'crm',
    '/finance': 'finance',
    '/knowledge': 'knowledge',
    '/automations': 'automations',
    '/tickets': 'tickets',
    '/templates': 'templates',
  };
}

function normalizeJobTab(value) {
  return JOB_TABS.includes(value) ? value : 'pipeline';
}

function labelForTab(tab) {
  return {
    pipeline: 'Pipeline',
    list: 'Job List',
    profile: 'Profile',
    tasks: 'Tasks',
    files: 'Files',
    forms: 'Forms',
    analytics: 'Analytics',
    editor: 'Editor',
  }[tab] || tab;
}

function reconcileSelection(route) {
  if (route.jobId && state.jobs.some((job) => job.id === route.jobId)) {
    state.selectedJobId = route.jobId;
  }
  if (!state.selectedJobId || !state.jobs.some((job) => job.id === state.selectedJobId)) {
    state.selectedJobId = state.jobs[0]?.id || '';
  }
}

function setSelectedJob(id) {
  if (!state.jobs.some((job) => job.id === id)) return;
  state.selectedJobId = id;
  const route = state.route || getRoute();
  const tab = route.name === 'jobs' ? route.tab : 'profile';
  navigate('/jobs?' + new URLSearchParams({ tab, job_id: id }).toString());
}

function selectedJob() {
  return jobById(state.selectedJobId) || state.jobs[0] || null;
}

function jobById(id) {
  return state.jobs.find((job) => job.id === id) || null;
}

function filteredJobs() {
  const q = state.query.trim().toLowerCase();
  return state.jobs.filter((job) => {
    if (state.stageFilter !== 'all' && job.stage !== state.stageFilter) return false;
    if (!q) return true;
    return [job.name, job.client_name, job.contact_name, job.owner_name, job.site_address, job.job_type, companyName(job.company_id)]
      .some((value) => String(value || '').toLowerCase().includes(q));
  });
}

function normalizeJob(input) {
  return {
    id: String(input.id || ''),
    company_id: String(input.company_id || firstCompanyId()),
    name: String(input.name || '').trim() || 'Untitled Job',
    client_name: String(input.client_name || '').trim(),
    contact_name: String(input.contact_name || '').trim(),
    site_address: String(input.site_address || '').trim(),
    job_type: String(input.job_type || 'Roofing').trim(),
    stage: STAGES.includes(input.stage) ? input.stage : 'Lead',
    priority: ['Low', 'Medium', 'High', 'Urgent'].includes(input.priority) ? input.priority : 'Medium',
    owner_name: String(input.owner_name || '').trim(),
    scope: String(input.scope || '').trim(),
    notes: String(input.notes || '').trim(),
    estimate_total: number(input.estimate_total),
    invoice_total: number(input.invoice_total),
    task_count: number(input.task_count),
    file_count: number(input.file_count),
    created_at: input.created_at || new Date().toISOString(),
    updated_at: input.updated_at || new Date().toISOString(),
  };
}

function blankJob() {
  return normalizeJob({
    id: '',
    company_id: firstCompanyId(),
    name: '',
    stage: 'Lead',
    priority: 'Medium',
    job_type: 'Roofing',
  });
}

function firstCompanyId() {
  return state.companies[0]?.id || companiesFallback[0].id;
}

function companyName(id) {
  const company = state.companies.find((item) => item.id === id) || companiesFallback.find((item) => item.id === id);
  return company ? (company.short_name || company.name || company.id) : id || 'Company';
}

function activeSession() {
  if (state.session) {
    return {
      ...state.session,
      profile: {
        ...buildLocalSession().profile,
        ...(state.session.profile || {}),
        ...(state.profileDraft || {}),
      },
    };
  }
  return buildLocalSession();
}

function buildLocalSession() {
  const profile = {
    id: 'basic-quest-user',
    email: 'lumen123@quest-hq.local',
    full_name: 'Quest Basic Mode',
    role: 'developer',
    role_label: 'Developer',
    company_ids: ['roofing', 'drafting', 'lumen'],
    avatar_url: '',
    ...(state.profileDraft || {}),
  };
  return {
    auth: CONFIG.questAuthEnabled ? 'supabase' : 'local-basic',
    user: { id: profile.id, username: CONFIG.localUsername, email: profile.email },
    profile,
  };
}

function pageHead(title, summary, actions = '') {
  return `
    <section class="page-head">
      <div>
        <div class="eyebrow">Quest HQ</div>
        <h1>${h(title)}</h1>
        <p>${h(summary)}</p>
      </div>
      ${actions ? `<div class="head-actions">${actions}</div>` : ''}
    </section>
  `;
}

function metricGrid(items) {
  return `<section class="metric-grid">${items.map(([label, value]) => `<article class="metric"><span>${h(label)}</span><strong>${h(value)}</strong></article>`).join('')}</section>`;
}

function jobQueueRow(job) {
  return `
    <button class="queue-row" type="button" data-select-job="${h(job.id)}">
      <span><strong>${h(job.name)}</strong><small>${h(job.client_name || companyName(job.company_id))}</small></span>
      ${priorityPill(job.priority)}
      <b>${h(job.stage)}</b>
    </button>
  `;
}

function jobCard(job) {
  return `
    <button class="job-card priority-${h(job.priority.toLowerCase())} ${job.id === state.selectedJobId ? 'active' : ''}" type="button" data-select-job="${h(job.id)}">
      <strong>${h(job.name)}</strong>
      <span>${h(job.client_name || 'No client')}</span>
      <small>${h(companyName(job.company_id))} - ${h(job.owner_name || 'Unassigned')}</small>
      <em>${h(job.task_count)} tasks</em>
    </button>
  `;
}

function fileTile(name, job, index) {
  const types = ['Photos', 'PDF', 'Drawing', 'Contract'];
  return `
    <article class="file-tile">
      <div><i class="ti ti-file-${index === 0 ? 'photo' : 'description'}"></i></div>
      <strong>${h(name)}</strong>
      <span>${h(types[index] || 'Document')} - ${h(job.name)}</span>
    </article>
  `;
}

function miniLink(path, icon, title, text) {
  return `
    <a class="mini-link" href="${appHref(path)}" data-router>
      <i class="ti ${h(icon)}"></i>
      <span><strong>${h(title)}</strong><small>${h(text)}</small></span>
    </a>
  `;
}

function contractRows(rows) {
  return `<div class="contract-rows">${rows.map(([label, value]) => `<div><span>${h(label)}</span><strong>${h(value)}</strong></div>`).join('')}</div>`;
}

function activityRows() {
  const first = state.jobs[0];
  return [
    ['Supabase status', state.sync.mode === 'live' ? 'Live jobs loaded from the Quest HQ project.' : 'Using local fallback job records.'],
    ['Priority review', `${state.jobs.find((job) => job.priority === 'Urgent')?.name || first?.name || 'No urgent job'} is first in the operations queue.`],
    ['TaskManagement ready', `${sum(state.jobs, 'task_count')} linked tasks represented through project_id.`],
    ['Shell ownership', 'Time, team workload, approvals, clock dashboard, profile, and roles render in Quest HQ.'],
  ];
}

function field(label, name, value = '', required = false, type = 'text', className = '') {
  return `<label class="${h(className)}"><span>${h(label)}</span><input name="${h(name)}" type="${h(type)}" value="${h(value)}" ${required ? 'required' : ''} /></label>`;
}

function textareaField(label, name, value = '', className = '') {
  return `<label class="${h(className)}"><span>${h(label)}</span><textarea name="${h(name)}" rows="4">${h(value)}</textarea></label>`;
}

function selectField(label, name, value, options) {
  return `
    <label><span>${h(label)}</span><select name="${h(name)}">
      ${options.map(([id, text]) => `<option value="${h(id)}" ${id === value ? 'selected' : ''}>${h(text)}</option>`).join('')}
    </select></label>
  `;
}

function priorityPill(priority) {
  return `<span class="priority ${h(priority.toLowerCase())}">${h(priority)}</span>`;
}

function renderAvatar(profile, className) {
  if (profile.avatar_url) return `<span class="${h(className)}"><img src="${h(profile.avatar_url)}" alt="" /></span>`;
  const initials = String(profile.full_name || profile.email || 'QB').trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'QB';
  return `<span class="${h(className)}">${h(initials)}</span>`;
}

function emptyState(text) {
  return `<div class="empty-state">${h(text)}</div>`;
}

function taskRuntimeUrl(job, embedded = true) {
  const params = new URLSearchParams({ return_url: window.location.href });
  if (embedded) params.set('embed', '1');
  if (job && job.id) params.set('project_id', job.id);
  return `${appHref('/taskmanagement/app.html')}?${params.toString()}`;
}

function persistJobs() {
  writeJson(JOB_CACHE_KEY, state.jobs);
}

function sum(items, field) {
  return items.reduce((total, item) => total + number(item[field]), 0);
}

function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function money(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(number(value));
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* local persistence is best effort */
  }
}

function h(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
