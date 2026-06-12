import './styles.css';

const CONFIG = {
  buildId: 'Quest HQ Company Workspace v1',
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
const TASK_CACHE_KEY = 'quest-hq-task-cache-v1';
const FILE_CACHE_KEY = 'quest-hq-file-cache-v1';
const TEAM_CACHE_KEY = 'quest-hq-team-cache-v1';
const MEMBERSHIP_CACHE_KEY = 'quest-hq-company-membership-cache-v1';
const COMPANY_KEY = 'quest-hq-active-company';
const TASK_VIEW_KEY = 'quest-hq-task-view';
const DRIVE_VIEW_KEY = 'quest-hq-drive-view';

const STAGES = ['Lead', 'Site Review', 'Estimate', 'Approved', 'Active', 'Closed'];
const JOB_TABS = ['pipeline', 'list', 'profile', 'editor'];
const TASK_STATUSES = ['todo', 'pending', 'hold', 'review', 'done'];
const TASK_PRIORITIES = ['critical', 'urgent', 'high', 'medium', 'low'];
const TASK_TYPES = ['lead', 'bid', 'admin', 'invoicing', 'ar', 'meeting', 'web_dev'];
const DRIVE_FOLDERS = [
  ['jobs', 'Jobs', 'Job-linked folders and deliverables', 'ti-folders'],
  ['shared', 'Shared', 'Company-wide files', 'ti-folder-share'],
  ['forms', 'Forms', 'Completed forms and templates', 'ti-clipboard-list'],
  ['photos', 'Photos', 'Site photos and field media', 'ti-photo'],
  ['permits', 'Permits', 'Permit packets and approvals', 'ti-file-certificate'],
  ['contracts', 'Contracts', 'Signed agreements and estimates', 'ti-file-dollar'],
  ['archive', 'Archive', 'Closed or historical files', 'ti-archive'],
];

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
    task_count: 4,
    file_count: 5,
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
    task_count: 3,
    file_count: 4,
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
    task_count: 2,
    file_count: 3,
    updated_at: new Date(Date.now() - 172800000).toISOString(),
  },
];

const teamMembersFallback = [
  { id: 'abraham', name: 'Abraham', full_name: 'Abraham Flores', email: 'abraham@quest-hq.local', color: '#f0b23b', active: true, company_ids: ['roofing', 'drafting'] },
  { id: 'maya', name: 'Maya', full_name: 'Maya Rosales', email: 'maya@quest-hq.local', color: '#60a5fa', active: true, company_ids: ['roofing'] },
  { id: 'andre', name: 'Andre', full_name: 'Andre Lee', email: 'andre@quest-hq.local', color: '#f97316', active: true, company_ids: ['roofing'] },
  { id: 'noah', name: 'Noah', full_name: 'Noah Park', email: 'noah@quest-hq.local', color: '#a78bfa', active: true, company_ids: ['drafting'] },
  { id: 'lumen-ops', name: 'Lumen Ops', full_name: 'Lumen Operations', email: 'ops@lumen.local', color: '#7c3aed', active: true, company_ids: ['lumen'] },
];

const membershipsFallback = [
  { company_id: 'roofing', profile_id: 'basic-quest-user', role: 'developer', status: 'active' },
  { company_id: 'drafting', profile_id: 'basic-quest-user', role: 'developer', status: 'active' },
  { company_id: 'lumen', profile_id: 'basic-quest-user', role: 'developer', status: 'active' },
];

const tasksFallback = [
  {
    id: 'task-roofing-leak-1',
    title: 'Call client and confirm active leak area',
    description: 'Confirm access window, roof area, and whether temporary dry-in is still holding.',
    type: 'lead',
    company_id: 'roofing',
    project_id: '11111111-1111-4111-8111-111111111111',
    creator_id: 'abraham',
    assignee_id: 'maya',
    due: isoDate(0),
    priority: 'urgent',
    urgency: 'urgent',
    status: 'todo',
  },
  {
    id: 'task-roofing-leak-2',
    title: 'Upload inspection photos',
    description: 'Attach site photos to the company drive and tag the Queen Creek job folder.',
    type: 'admin',
    company_id: 'roofing',
    project_id: '11111111-1111-4111-8111-111111111111',
    creator_id: 'maya',
    assignee_id: 'andre',
    due: isoDate(1),
    priority: 'high',
    urgency: 'high',
    status: 'pending',
  },
  {
    id: 'task-roofing-mesa-1',
    title: 'Prepare repair estimate packet',
    description: 'Draft scope, estimate total, and permit notes for board review.',
    type: 'bid',
    company_id: 'roofing',
    project_id: '22222222-2222-4222-8222-222222222222',
    creator_id: 'abraham',
    assignee_id: 'maya',
    due: isoDate(3),
    priority: 'high',
    urgency: 'high',
    status: 'review',
  },
  {
    id: 'task-drafting-package-1',
    title: 'Request final measurements',
    description: 'Get latest field measurements before starting permit drawings.',
    type: 'admin',
    company_id: 'drafting',
    project_id: '33333333-3333-4333-8333-333333333333',
    creator_id: 'abraham',
    assignee_id: 'noah',
    due: isoDate(2),
    priority: 'medium',
    urgency: 'medium',
    status: 'hold',
  },
  {
    id: 'task-lumen-ops-1',
    title: 'Create client onboarding checklist',
    description: 'Internal Lumen setup task to prove company workspace isolation.',
    type: 'meeting',
    company_id: 'lumen',
    project_id: '',
    creator_id: 'abraham',
    assignee_id: 'lumen-ops',
    due: isoDate(5),
    priority: 'medium',
    urgency: 'medium',
    status: 'todo',
  },
];

const filesFallback = [
  {
    id: 'file-roofing-1',
    company_id: 'roofing',
    job_id: '11111111-1111-4111-8111-111111111111',
    folder: 'photos',
    file_name: 'queen-creek-leak-photos.zip',
    mime_type: 'application/zip',
    size_bytes: 18400000,
    category: 'Photos',
    uploaded_by_label: 'Maya Rosales',
    created_at: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'file-roofing-2',
    company_id: 'roofing',
    job_id: '22222222-2222-4222-8222-222222222222',
    folder: 'permits',
    file_name: 'mesa-storage-permit-notes.pdf',
    mime_type: 'application/pdf',
    size_bytes: 860000,
    category: 'Permits',
    uploaded_by_label: 'Andre Lee',
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 'file-drafting-1',
    company_id: 'drafting',
    job_id: '33333333-3333-4333-8333-333333333333',
    folder: 'contracts',
    file_name: 'horizon-hvac-drawing-agreement.pdf',
    mime_type: 'application/pdf',
    size_bytes: 420000,
    category: 'Contracts',
    uploaded_by_label: 'Noah Park',
    created_at: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: 'file-lumen-1',
    company_id: 'lumen',
    job_id: '',
    folder: 'shared',
    file_name: 'lumen-shared-brand-assets.zip',
    mime_type: 'application/zip',
    size_bytes: 3200000,
    category: 'Shared',
    uploaded_by_label: 'Lumen Operations',
    created_at: new Date(Date.now() - 259200000).toISOString(),
  },
];

const state = {
  route: null,
  session: readJson(SESSION_KEY, null),
  profileDraft: readJson(PROFILE_KEY, null),
  jobs: readJson(JOB_CACHE_KEY, jobsFallback).map(normalizeJob),
  tasks: readJson(TASK_CACHE_KEY, tasksFallback).map(normalizeTask),
  files: readJson(FILE_CACHE_KEY, filesFallback).map(normalizeFile),
  teamMembers: readJson(TEAM_CACHE_KEY, teamMembersFallback).map(normalizeTeamMember),
  memberships: readJson(MEMBERSHIP_CACHE_KEY, membershipsFallback),
  companies: companiesFallback,
  activeCompanyId: localStorage.getItem(COMPANY_KEY) || '',
  selectedJobId: '',
  selectedTaskId: '',
  query: '',
  stageFilter: 'all',
  taskStatusFilter: 'all',
  taskPriorityFilter: 'all',
  taskView: localStorage.getItem(TASK_VIEW_KEY) || 'table',
  driveFolder: 'home',
  driveView: localStorage.getItem(DRIVE_VIEW_KEY) || 'grid',
  sync: { label: 'Loading workspace...', mode: 'loading' },
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
  const redirect = routeRedirect(state.route);
  if (redirect) {
    navigate(redirect, { replace: true });
    return;
  }

  reconcileCompany(state.route);
  reconcileSelection(state.route);
  if (state.route.params.get('account') === 'profile') state.modal = 'profile';
  document.title = `${routeTitle(state.route)} | ${companyName(activeCompanyId())} | Quest HQ`;
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
      state.sync = { label: 'Local fallback', mode: 'local' };
    })
    .finally(() => {
      state.dataLoaded = true;
      state.dataLoading = false;
      persistAll();
      render();
    });
}

async function loadSupabaseData() {
  const client = createSupabaseClient();
  if (!client) {
    state.sync = { label: 'Supabase unavailable', mode: 'local' };
    return;
  }

  const [companiesResult, jobsResult, tasksResult, filesResult, teamResult, membershipsResult] = await Promise.all([
    client.from('companies').select('*').order('name', { ascending: true }),
    client.from('jobs').select('*').order('updated_at', { ascending: false }),
    client.from('tasks').select('*').order('updated_at', { ascending: false }),
    client.from('job_files').select('*').is('deleted_at', null).order('created_at', { ascending: false }),
    client.from('team_members').select('*').order('name', { ascending: true }),
    client.from('company_memberships').select('*'),
  ]);

  let liveTables = 0;
  if (!companiesResult.error) {
    state.companies = companiesResult.data?.length ? companiesResult.data.map(normalizeCompany) : companiesFallback;
    liveTables += 1;
  }
  if (!jobsResult.error) {
    state.jobs = (jobsResult.data || []).map(normalizeJob);
    liveTables += 1;
  }
  if (!tasksResult.error) {
    state.tasks = (tasksResult.data || []).map(normalizeTask);
    liveTables += 1;
  }
  if (!filesResult.error) {
    state.files = (filesResult.data || []).map(normalizeFile);
    liveTables += 1;
  }
  if (!teamResult.error) {
    state.teamMembers = (teamResult.data || []).map(normalizeTeamMember);
    liveTables += 1;
  }
  if (!membershipsResult.error) {
    state.memberships = (membershipsResult.data || []).map(normalizeMembership);
    liveTables += 1;
  }

  state.sync = liveTables ? { label: 'Quest Supabase live', mode: 'live' } : { label: 'Local fallback', mode: 'local' };
}

function createSupabaseClient() {
  if (!window.supabase || typeof window.supabase.createClient !== 'function') return null;
  return window.supabase.createClient(CONFIG.supabaseUrl, CONFIG.supabaseKey);
}

function shellTemplate(route, workspace) {
  const session = activeSession();
  const companyId = activeCompanyId();
  return `
    <div class="quest-app" data-route="${h(route.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${appHref(companyPath('jobs', {}, companyId))}" data-router aria-label="Quest HQ workspace">
            <i class="ti ti-bolt"></i>
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${h(CONFIG.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            <i class="ti ti-building"></i>
            <select data-company-switch aria-label="Active company">
              ${allowedCompanies().map((company) => `<option value="${h(company.id)}" ${company.id === companyId ? 'selected' : ''}>${h(companyLabel(company))}</option>`).join('')}
            </select>
          </label>
          <label class="global-search">
            <i class="ti ti-search" aria-hidden="true"></i>
            <input data-global-search value="${h(state.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${h(state.sync.mode)}" data-sync-state>${h(state.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          <a class="btn btn-primary" href="${appHref(companyPath('tasks', { new: '1' }, companyId))}" data-router><i class="ti ti-plus"></i>New task</a>
          <div class="account-menu">
            <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open Quest profile">
              ${renderAvatar(session.profile, 'avatar')}
            </button>
            <div class="account-popover">
              <strong>${h(session.profile.full_name)}</strong>
              <span>${h(session.profile.role_label)} - ${h(companyName(companyId))}</span>
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
    ${state.modal === 'file-upload' ? renderFileUploadModal() : ''}
  `;
}

function renderDeck(route) {
  const companyId = activeCompanyId();
  const jobs = companyJobs(companyId);
  const tasks = companyTasks(companyId);
  const files = companyFiles(companyId);
  const users = companyMembers(companyId);
  return `
    <div class="company-card">
      <span style="background:${h(companyColor(companyId))}"></span>
      <strong>${h(companyName(companyId))}</strong>
      <small>${h(roleForCompany(companyId))} workspace</small>
    </div>
    ${navGroup('Workspace', [
      navItem(route, companyPath('jobs', {}, companyId), 'ti-briefcase', 'Jobs', jobs.length),
      navItem(route, companyPath('tasks', {}, companyId), 'ti-list-check', 'Tasks', tasks.length),
      navItem(route, companyPath('files', {}, companyId), 'ti-folder', 'Files', files.length),
      navItem(route, companyPath('forms', {}, companyId), 'ti-clipboard-list', 'Forms'),
      navItem(route, companyPath('analytics', {}, companyId), 'ti-chart-bar', 'Dashboard'),
    ])}
    ${navGroup('Company', [
      navItem(route, companyPath('users', {}, companyId), 'ti-users', 'Users', users.length),
      navItem(route, companyPath('settings', {}, companyId), 'ti-settings', 'Settings'),
    ])}
    ${navGroup('Operations', [
      navItem(route, companyPath('time', {}, companyId), 'ti-clock', 'My time', '3.3h'),
      navItem(route, companyPath('approvals', {}, companyId), 'ti-user-check', 'Approvals', 0),
    ])}
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
  return `
    <a class="side-item ${active ? 'active' : ''}" href="${appHref(path)}" data-router>
      <i class="ti ${h(icon)}"></i>
      <span>${h(label)}</span>
      ${count !== '' ? `<b>${h(String(count))}</b>` : ''}
    </a>
  `;
}

function renderWorkspace(route) {
  if (route.name === 'command') return renderCompanyDashboard(activeCompanyId());
  if (route.name !== 'company') return renderPlannedPage(route.name);
  const companyId = route.companyId;
  if (route.section === 'jobs') return renderJobsPage(route, companyId);
  if (route.section === 'tasks') return renderTasksPage(route, companyId);
  if (route.section === 'files') return renderFilesPage(route, companyId);
  if (route.section === 'users') return renderUsersPage(companyId);
  if (route.section === 'settings') return renderSettingsPage(companyId);
  if (route.section === 'forms') return renderFormsPage(companyId);
  if (route.section === 'analytics') return renderCompanyDashboard(companyId);
  if (route.section === 'time' || route.section === 'approvals') return renderOperationsPage(route.section, companyId);
  return renderPlannedPage(route.section);
}

function renderCompanyDashboard(companyId) {
  const jobs = companyJobs(companyId);
  const tasks = companyTasks(companyId);
  const urgent = tasks.filter((task) => ['critical', 'urgent'].includes(task.priority));
  const files = companyFiles(companyId);
  return `
    ${workspaceHeader('Company dashboard', 'Live context for this company workspace.', `
      <a class="btn" href="${appHref(companyPath('files', {}, companyId))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${appHref(companyPath('tasks', { new: '1' }, companyId))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${metricGrid([
      ['Jobs', jobs.length],
      ['Open tasks', tasks.filter((task) => task.status !== 'done').length],
      ['Urgent tasks', urgent.length],
      ['Drive files', files.length],
    ])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${appHref(companyPath('tasks', {}, companyId))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${tasks.slice(0, 6).map((task) => taskQueueRow(task)).join('') || emptyState('No tasks in this company yet.')}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${contractRows([
          ['Company', companyName(companyId)],
          ['Visible users', companyMembers(companyId).length],
          ['Auth mode', CONFIG.questAuthEnabled ? 'Supabase auth' : 'Local basic gate'],
          ['RLS status', CONFIG.questAuthEnabled ? 'Ready for enforcement' : 'Prepared, not enforced'],
        ])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${jobs.slice(0, 8).map((job) => jobQueueRow(job)).join('') || emptyState('No jobs in this company yet.')}
        </div>
      </article>
    </section>
  `;
}

function renderJobsPage(route, companyId) {
  const tab = normalizeJobTab(route.params.get('tab'));
  const job = selectedJob();
  return `
    ${workspaceHeader('Jobs', 'Company job records, clients, scope, and linked work.', `
      <a class="btn" href="${appHref(companyPath('files', job ? { job_id: job.id } : {}, companyId))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <a class="btn btn-primary" href="${appHref(companyPath('jobs', { tab: 'editor', ...(job ? { job_id: job.id } : {}) }, companyId))}" data-router><i class="ti ti-plus"></i>Add job</a>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${['all'].concat(STAGES).map((stage) => `<option value="${h(stage)}" ${state.stageFilter === stage ? 'selected' : ''}>${h(stage === 'all' ? 'All stages' : stage)}</option>`).join('')}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${job ? h(job.name) : 'No job selected'}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${JOB_TABS.map((item) => `<a class="${item === tab ? 'active' : ''}" href="${appHref(companyPath('jobs', { tab: item, ...(job ? { job_id: job.id } : {}) }, companyId))}" data-router>${h(labelForTab(item))}</a>`).join('')}
    </nav>
    ${renderJobPanel(tab, companyId, job)}
  `;
}

function renderJobPanel(tab, companyId, job) {
  if (tab === 'pipeline') return renderPipeline(companyId);
  if (tab === 'list') return renderJobList(companyId);
  if (tab === 'profile') return renderJobProfile(companyId, job);
  if (tab === 'editor') return renderJobEditor(companyId, job);
  return renderPipeline(companyId);
}

function renderPipeline(companyId) {
  const visible = filteredJobs(companyId);
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

function renderJobList(companyId) {
  const rows = filteredJobs(companyId);
  return `
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${rows.length} visible job${rows.length === 1 ? '' : 's'}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${rows.map((job) => `
          <button class="table-row ${job.id === state.selectedJobId ? 'active' : ''}" type="button" data-select-job="${h(job.id)}">
            <span><strong>${h(job.name)}</strong><small>${h(job.client_name || 'No client')} - ${h(job.site_address || 'No address')}</small></span>
            <span>${h(job.stage)}</span>
            <span>${priorityPill(job.priority)}</span>
            <span>${h(job.owner_name || 'Unassigned')}</span>
            <span>${h(taskCountForJob(job.id))}</span>
            <span>${money(job.estimate_total)}</span>
          </button>
        `).join('') || emptyState('No jobs match this view.')}
      </div>
    </section>
  `;
}

function renderJobProfile(companyId, job) {
  if (!job) return emptyState('Create a job to see the profile workspace.');
  return `
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${h(companyName(companyId))} - ${h(job.job_type)}</span>
          <h2>${h(job.name)}</h2>
          <p>${h(job.scope || 'No scope written yet.')}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${contractRows([
          ['Client', job.client_name || 'No client'],
          ['Contact', job.contact_name || 'No contact'],
          ['Owner', job.owner_name || 'Unassigned'],
          ['Stage', job.stage],
          ['Priority', job.priority],
          ['Estimate', money(job.estimate_total)],
        ])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${appHref(companyPath('tasks', { job_id: job.id }, companyId))}" data-router>Open tasks</a>
          <a class="btn" href="${appHref(companyPath('jobs', { tab: 'editor', job_id: job.id }, companyId))}" data-router>Edit job</a>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${miniLink(companyPath('tasks', { job_id: job.id }, companyId), 'ti-list-check', 'Tasks', `${taskCountForJob(job.id)} linked tasks`)}
          ${miniLink(companyPath('files', { job_id: job.id }, companyId), 'ti-folder', 'Files', `${fileCountForJob(job.id)} files`)}
          ${miniLink(companyPath('forms', { job_id: job.id }, companyId), 'ti-clipboard-list', 'Forms', 'Inspections and surveys')}
          ${miniLink(companyPath('analytics', { job_id: job.id }, companyId), 'ti-chart-bar', 'Dashboard', 'Job health')}
        </div>
      </article>
    </section>
  `;
}

function renderJobEditor(companyId, job) {
  const edit = job || blankJob(companyId);
  return `
    <form class="panel job-editor" data-job-form>
      <input type="hidden" name="id" value="${h(edit.id || '')}" />
      <div class="section-head span-2">
        <div><h2>${job ? 'Edit job' : 'Create job'}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${field('Workspace name', 'name', edit.name, true)}
      ${selectField('Company', 'company_id', companyId, allowedCompanies().map((company) => [company.id, companyLabel(company)]))}
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
        <button class="btn btn-primary" type="submit">Save job</button>
        ${job ? `<button class="btn danger" type="button" data-action="delete-job" data-job-id="${h(job.id)}">Delete</button>` : ''}
      </div>
    </form>
  `;
}

function renderTasksPage(route, companyId) {
  const job = route.jobId ? jobById(route.jobId) : null;
  const taskId = route.params.get('task_id') || state.selectedTaskId;
  const task = taskId ? taskById(taskId) : filteredTasks(companyId, job?.id)[0] || null;
  const editing = route.params.get('new') === '1' || route.params.get('edit') === '1';
  const tasks = filteredTasks(companyId, job?.id);
  return `
    ${workspaceHeader(job ? `${job.name} tasks` : 'Tasks', 'Native Quest task execution backed by the company task table.', `
      <a class="btn" href="${appHref(companyPath('jobs', job ? { tab: 'profile', job_id: job.id } : {}, companyId))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${appHref(companyPath('tasks', { ...(job ? { job_id: job.id } : {}), new: '1' }, companyId))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${renderTaskToolbar(companyId, job)}
    <section class="task-layout ${editing ? 'editing' : ''}">
      <article class="panel task-main">
        ${state.taskView === 'board' ? renderTaskBoard(companyId, tasks) : renderTaskTable(companyId, tasks)}
      </article>
      <aside class="panel detail-panel">
        ${editing ? renderTaskForm(companyId, job, route.params.get('edit') === '1' ? task : null) : renderTaskDetail(companyId, task)}
      </aside>
    </section>
  `;
}

function renderTaskToolbar(companyId, job) {
  const jobs = companyJobs(companyId);
  return `
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${jobs.map((item) => `<option value="${h(item.id)}" ${job?.id === item.id ? 'selected' : ''}>${h(item.name)}</option>`).join('')}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${['all'].concat(TASK_STATUSES).map((status) => `<option value="${h(status)}" ${state.taskStatusFilter === status ? 'selected' : ''}>${h(status === 'all' ? 'All statuses' : statusLabel(status))}</option>`).join('')}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${['all'].concat(TASK_PRIORITIES).map((priority) => `<option value="${h(priority)}" ${state.taskPriorityFilter === priority ? 'selected' : ''}>${h(priority === 'all' ? 'All priorities' : titleCase(priority))}</option>`).join('')}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${state.taskView === 'table' ? 'active' : ''}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${state.taskView === 'board' ? 'active' : ''}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `;
}

function renderTaskTable(companyId, tasks) {
  return `
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${tasks.map((task) => `
        <button class="table-row ${task.id === state.selectedTaskId ? 'active' : ''}" type="button" data-select-task="${h(task.id)}">
          <span><strong>${h(task.title)}</strong><small>${h(task.description || taskTypeLabel(task.type))}</small></span>
          <span>${h(jobById(task.project_id)?.name || 'Company task')}</span>
          <span>${h(memberName(task.assignee_id))}</span>
          <span>${taskPriorityPill(task.priority)}</span>
          <span>${taskStatusPill(task.status)}</span>
          <span>${formatDate(task.due)}</span>
        </button>
      `).join('') || emptyState('No tasks match this workspace view.')}
    </div>
  `;
}

function renderTaskBoard(companyId, tasks) {
  return `
    <div class="task-board">
      ${TASK_STATUSES.map((status) => {
        const column = tasks.filter((task) => task.status === status);
        return `
          <section class="task-column">
            <h2><span>${h(statusLabel(status))}</span><b>${column.length}</b></h2>
            ${column.map((task) => `
              <button class="task-card priority-${h(task.priority)}" type="button" data-select-task="${h(task.id)}">
                <strong>${h(task.title)}</strong>
                <span>${h(jobById(task.project_id)?.name || companyName(companyId))}</span>
                <small>${h(memberName(task.assignee_id))} - ${formatDate(task.due)}</small>
              </button>
            `).join('') || `<div class="lane-empty">No tasks</div>`}
          </section>
        `;
      }).join('')}
    </div>
  `;
}

function renderTaskDetail(companyId, task) {
  if (!task) {
    return `
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${emptyState('No task selected.')}
    `;
  }
  return `
    <div class="section-head">
      <div><h2>${h(task.title)}</h2><p>${h(jobById(task.project_id)?.name || companyName(companyId))}</p></div>
      <a class="btn" href="${appHref(companyPath('tasks', { ...(task.project_id ? { job_id: task.project_id } : {}), task_id: task.id, edit: '1' }, companyId))}" data-router>Edit</a>
    </div>
    ${contractRows([
      ['Status', statusLabel(task.status)],
      ['Priority', titleCase(task.priority)],
      ['Type', taskTypeLabel(task.type)],
      ['Assignee', memberName(task.assignee_id)],
      ['Due', formatDate(task.due)],
      ['Company ID', task.company_id],
      ['Project ID', task.project_id || 'Company-level task'],
    ])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${h(task.description || 'No description yet.')}</p>
    </div>
  `;
}

function renderTaskForm(companyId, job, task) {
  const edit = task || blankTask(companyId, job?.id || '');
  return `
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${h(task ? edit.id : '')}" />
      <div class="section-head">
        <div><h2>${task ? 'Edit task' : 'New task'}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${field('Task title', 'title', edit.title, true)}
      ${selectField('Job', 'project_id', edit.project_id || '', [['', 'Company-level task']].concat(companyJobs(companyId).map((item) => [item.id, item.name])))}
      ${selectField('Status', 'status', edit.status, TASK_STATUSES.map((item) => [item, statusLabel(item)]))}
      ${selectField('Priority', 'priority', edit.priority, TASK_PRIORITIES.map((item) => [item, titleCase(item)]))}
      ${selectField('Type', 'type', edit.type, TASK_TYPES.map((item) => [item, taskTypeLabel(item)]))}
      ${selectField('Assignee', 'assignee_id', edit.assignee_id, companyMembers(companyId).map((item) => [item.id, memberName(item.id)]))}
      ${field('Due date', 'due', edit.due || isoDate(1), true, 'date')}
      ${textareaField('Description', 'description', edit.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${task ? `<button class="btn danger" type="button" data-action="delete-task" data-task-id="${h(task.id)}">Delete</button>` : ''}
        <a class="btn" href="${appHref(companyPath('tasks', { ...(edit.project_id ? { job_id: edit.project_id } : {}) }, companyId))}" data-router>Cancel</a>
      </div>
    </form>
  `;
}

function renderFilesPage(route, companyId) {
  const folder = route.params.get('folder') || state.driveFolder || 'home';
  const job = route.jobId ? jobById(route.jobId) : null;
  const files = filteredFiles(companyId, folder, job?.id);
  return `
    ${workspaceHeader(job ? `${job.name} files` : 'Company Drive', 'Company-scoped file manager for shared and job-linked documents.', `
      <button class="btn" type="button" data-action="open-file-upload"><i class="ti ti-upload"></i>Upload</button>
      <a class="btn btn-primary" href="${appHref(companyPath('jobs', {}, companyId))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
    `)}
    <section class="drive-toolbar">
      <nav class="breadcrumbs" aria-label="Drive location">
        <a href="${appHref(companyPath('files', {}, companyId))}" data-router>${h(companyName(companyId))}</a>
        ${folder !== 'home' ? `<span>/</span><a href="${appHref(companyPath('files', { folder }, companyId))}" data-router>${h(folderLabel(folder))}</a>` : ''}
        ${job ? `<span>/</span><strong>${h(job.name)}</strong>` : ''}
      </nav>
      <div class="segmented" role="group" aria-label="Drive view">
        <button class="${state.driveView === 'grid' ? 'active' : ''}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Grid</button>
        <button class="${state.driveView === 'list' ? 'active' : ''}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list"></i>List</button>
      </div>
    </section>
    ${folder === 'home' && !job ? renderDriveHome(companyId) : renderDriveFiles(companyId, files)}
  `;
}

function renderDriveHome(companyId) {
  const jobs = companyJobs(companyId);
  return `
    <section class="drive-grid">
      ${DRIVE_FOLDERS.map(([id, label, text, icon]) => `
        <a class="folder-tile" href="${appHref(companyPath('files', { folder: id }, companyId))}" data-router>
          <i class="ti ${h(icon)}"></i>
          <strong>${h(label)}</strong>
          <span>${h(text)}</span>
          <small>${h(filteredFiles(companyId, id).length)} files</small>
        </a>
      `).join('')}
    </section>
    <section class="panel top-gap">
      <div class="section-head"><div><h2>Job folders</h2><p>Each job keeps its files under the same company drive.</p></div></div>
      <div class="folder-grid">
        ${jobs.map((job) => `
          <a class="folder-card" href="${appHref(companyPath('files', { folder: 'jobs', job_id: job.id }, companyId))}" data-router>
            <i class="ti ti-folder"></i>
            <strong>${h(job.name)}</strong>
            <span>${h(job.client_name || companyName(companyId))}</span>
            <small>${fileCountForJob(job.id)} files</small>
          </a>
        `).join('') || emptyState('No job folders yet.')}
      </div>
    </section>
  `;
}

function renderDriveFiles(companyId, files) {
  if (state.driveView === 'list') {
    return `
      <section class="panel">
        <div class="data-table drive-list">
          <div class="table-head"><span>Name</span><span>Folder</span><span>Job</span><span>Owner</span><span>Size</span><span>Updated</span></div>
          ${files.map((file) => `
            <div class="table-row">
              <span><strong>${h(file.file_name)}</strong><small>${h(file.mime_type)}</small></span>
              <span>${h(folderLabel(file.folder))}</span>
              <span>${h(jobById(file.job_id)?.name || 'Company shared')}</span>
              <span>${h(file.uploaded_by_label || 'Quest HQ')}</span>
              <span>${formatBytes(file.size_bytes)}</span>
              <span>${formatDate(file.created_at)}</span>
            </div>
          `).join('') || emptyState('No files in this location yet.')}
        </div>
      </section>
    `;
  }
  return `
    <section class="drive-grid">
      ${files.map((file) => `
        <article class="file-card">
          <i class="ti ${h(fileIcon(file))}"></i>
          <strong>${h(file.file_name)}</strong>
          <span>${h(jobById(file.job_id)?.name || folderLabel(file.folder))}</span>
          <small>${formatBytes(file.size_bytes)} - ${formatDate(file.created_at)}</small>
        </article>
      `).join('') || emptyState('No files in this location yet.')}
    </section>
  `;
}

function renderFileUploadModal() {
  const companyId = activeCompanyId();
  return `
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">Company Drive</div><h2 id="upload-title">Upload entry</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-file-form>
          <div class="notice">This pass creates the company-scoped file record. Binary storage upload is the next wire-up step once auth/RLS is enabled.</div>
          ${field('File name', 'file_name', '', true)}
          ${selectField('Folder', 'folder', state.driveFolder === 'home' ? 'shared' : state.driveFolder, DRIVE_FOLDERS.map(([id, label]) => [id, label]))}
          ${selectField('Job', 'job_id', state.route?.jobId || '', [['', 'Company shared file']].concat(companyJobs(companyId).map((job) => [job.id, job.name])))}
          ${selectField('Category', 'category', 'Shared', DRIVE_FOLDERS.map(([id, label]) => [label, label]))}
          ${field('Size bytes', 'size_bytes', 0, false, 'number')}
          ${textareaField('Notes', 'notes', '')}
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Save file record</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderUsersPage(companyId) {
  const members = companyMembers(companyId);
  return `
    ${workspaceHeader('Users', 'Company members, roles, workers, and access context.', `
      <a class="btn btn-primary" href="${appHref(companyPath('settings', {}, companyId))}" data-router><i class="ti ti-settings"></i>Settings</a>
    `)}
    <section class="users-grid">
      ${members.map((member) => `
        <article class="user-card">
          ${renderAvatar({ full_name: member.full_name, avatar_url: member.avatar_url }, 'avatar')}
          <div>
            <strong>${h(member.full_name)}</strong>
            <span>${h(member.email)}</span>
            <small>${h(roleForMember(companyId, member.id))}</small>
          </div>
        </article>
      `).join('') || emptyState('No users assigned to this company yet.')}
    </section>
    <section class="panel top-gap">
      <div class="section-head"><div><h2>Membership model</h2><p>company_memberships is the canonical table; legacy company_ids remain as backfill fields.</p></div></div>
      ${contractRows([
        ['Tenant key', 'company_id on jobs, tasks, files, forms, users, settings'],
        ['Privacy status', CONFIG.questAuthEnabled ? 'RLS can enforce membership' : 'Client-filtered only while auth is disabled'],
        ['Active role', roleForCompany(companyId)],
      ])}
    </section>
  `;
}

function renderSettingsPage(companyId) {
  const company = companyById(companyId);
  return `
    ${workspaceHeader('Settings', 'Company settings, roles, approvals, and admin controls.', '')}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${contractRows([
          ['Name', companyName(companyId)],
          ['Company ID', companyId],
          ['Color', company?.color || companyColor(companyId)],
          ['Visible jobs', companyJobs(companyId).length],
        ])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Prepared for Supabase Auth and RLS.</p></div></div>
        ${contractRows([
          ['Auth switch', CONFIG.questAuthEnabled ? 'Enabled' : 'Disabled'],
          ['Local login', CONFIG.localLoginEnabled ? 'Enabled' : 'Disabled'],
          ['Isolation', CONFIG.questAuthEnabled ? 'Server-enforced' : 'Client-filtered only'],
          ['Memberships', String(state.memberships.filter((item) => item.company_id === companyId).length)],
        ])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Approvals</h2><p>Quest-owned access approval queue.</p></div></div>
        ${emptyState('No pending company approvals.')}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${companyMembers(companyId).map((member) => `<div><strong>${h(member.full_name)}</strong><span>${h(roleForMember(companyId, member.id))}</span></div>`).join('') || emptyState('No workers assigned.')}
        </div>
      </article>
    </section>
  `;
}

function renderFormsPage(companyId) {
  const templates = ['Inspection checklist', 'Client approval', 'Final walkthrough', 'Internal request intake', 'Safety form', 'Warranty handoff'];
  return `
    ${workspaceHeader('Forms', 'Company forms and survey response surfaces.', '')}
    <section class="forms-layout">
      <article class="panel">
        <div class="section-head"><div><h2>Template library</h2><p>Company-scoped templates ready for form table wiring.</p></div></div>
        <div class="card-grid">
          ${templates.map((title, index) => `<article class="mini-card"><strong>${h(title)}</strong><span>${index % 2 ? 'Draft' : 'Published'}</span><small>${h(companyName(companyId))}</small></article>`).join('')}
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Response queue</h2><p>Recent job-linked responses.</p></div></div>
        <div class="activity-list">
          ${companyJobs(companyId).slice(0, 4).map((job) => `<div><strong>${h(job.name)}</strong><span>Response workspace ready.</span></div>`).join('') || emptyState('No jobs available.')}
        </div>
      </aside>
    </section>
  `;
}

function renderOperationsPage(name, companyId) {
  const labels = {
    time: ['My time', 'Personal time and shift context inside the company workspace.'],
    approvals: ['Approvals', 'Company access approvals and role requests.'],
  };
  const [title, summary] = labels[name] || labels.time;
  return `
    ${workspaceHeader(title, summary, '')}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Summary</h2><p>Quest-owned operational surface.</p></div></div>
        ${contractRows([
          ['Company', companyName(companyId)],
          ['Visible jobs', companyJobs(companyId).length],
          ['Open tasks', companyTasks(companyId).filter((task) => task.status !== 'done').length],
          ['Mode', CONFIG.questAuthEnabled ? 'Supabase auth' : 'Local basic mode'],
        ])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Workload queue</h2><p>Sorted by active company and urgency.</p></div></div>
        <div class="queue-list">${companyTasks(companyId).slice(0, 8).map((task) => taskQueueRow(task)).join('') || emptyState('No tasks found.')}</div>
      </article>
    </section>
  `;
}

function renderPlannedPage(name) {
  return `
    ${workspaceHeader(titleCase(name || 'workspace'), 'This module will use the same company workspace shell when wired.', '')}
    <section class="panel">
      ${emptyState('Module data model pending.')}
    </section>
  `;
}

function renderLogin() {
  document.title = 'Sign in | Quest HQ';
  const returnUrl = safeReturnUrl(state.route.params.get('return_url') || appHref(companyPath('jobs', {}, defaultCompanyId())));
  app.innerHTML = `
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Company Workspace</small></span>
        </div>
        <div>
          <div class="eyebrow">Local access</div>
          <h1>Sign in to Quest HQ</h1>
          <p>Supabase auth is switched off while the company workspace foundation is stabilized.</p>
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

  const selectTask = event.target.closest('[data-select-task]');
  if (selectTask) {
    event.preventDefault();
    setSelectedTask(selectTask.dataset.selectTask);
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
  if (action === 'open-file-upload') {
    event.preventDefault();
    state.modal = 'file-upload';
    render();
    return;
  }
  if (action === 'close-modal') {
    event.preventDefault();
    state.modal = '';
    render();
    return;
  }
  if (action === 'set-task-view') {
    event.preventDefault();
    state.taskView = node.dataset.view === 'board' ? 'board' : 'table';
    localStorage.setItem(TASK_VIEW_KEY, state.taskView);
    render();
    return;
  }
  if (action === 'set-drive-view') {
    event.preventDefault();
    state.driveView = node.dataset.view === 'list' ? 'list' : 'grid';
    localStorage.setItem(DRIVE_VIEW_KEY, state.driveView);
    render();
    return;
  }
  if (action === 'delete-job') {
    event.preventDefault();
    deleteJob(node.dataset.jobId);
    return;
  }
  if (action === 'delete-task') {
    event.preventDefault();
    deleteTask(node.dataset.taskId);
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
    navigate(safeReturnUrl(form.return_url || appHref(companyPath('jobs', {}, defaultCompanyId()))), { replace: true });
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
    return;
  }

  if (event.target.matches('[data-task-form]')) {
    event.preventDefault();
    saveTask(event.target);
    return;
  }

  if (event.target.matches('[data-file-form]')) {
    event.preventDefault();
    saveFileRecord(event.target);
  }
}

function onDocumentInput(event) {
  if (event.target.matches('[data-global-search]')) {
    state.query = event.target.value;
    updateWorkspaceOnly();
  }
}

function onDocumentChange(event) {
  if (event.target.matches('[data-company-switch]')) {
    const nextCompanyId = event.target.value || defaultCompanyId();
    setActiveCompany(nextCompanyId);
    return;
  }
  if (event.target.matches('[data-stage-filter]')) {
    state.stageFilter = event.target.value || 'all';
    render();
    return;
  }
  if (event.target.matches('[data-task-status-filter]')) {
    state.taskStatusFilter = event.target.value || 'all';
    render();
    return;
  }
  if (event.target.matches('[data-task-priority-filter]')) {
    state.taskPriorityFilter = event.target.value || 'all';
    render();
    return;
  }
  if (event.target.matches('[data-task-job-filter]')) {
    const jobId = event.target.value;
    navigate(companyPath('tasks', jobId ? { job_id: jobId } : {}, activeCompanyId()));
  }
}

async function saveJob(form) {
  const payload = normalizeJob(Object.fromEntries(new FormData(form).entries()));
  payload.id = payload.id || crypto.randomUUID();
  payload.company_id = payload.company_id || activeCompanyId();
  payload.estimate_total = Number(payload.estimate_total || 0);
  payload.updated_at = new Date().toISOString();

  const existing = state.jobs.some((job) => job.id === payload.id);
  const client = createSupabaseClient();

  if (client) {
    const result = existing
      ? await client.from('jobs').update(payload).eq('id', payload.id).select().single()
      : await client.from('jobs').insert(payload).select().single();
    if (!result.error && result.data) {
      upsertJob(normalizeJob(result.data));
      state.sync = { label: 'Quest Supabase live', mode: 'live' };
      navigate(companyPath('jobs', { tab: 'profile', job_id: result.data.id }, payload.company_id), { replace: true });
      return;
    }
    state.sync = { label: 'Saved locally', mode: 'local' };
  }

  upsertJob(payload);
  navigate(companyPath('jobs', { tab: 'profile', job_id: payload.id }, payload.company_id), { replace: true });
}

async function deleteJob(id) {
  if (!id) return;
  const companyId = activeCompanyId();
  const client = createSupabaseClient();
  if (client) await client.from('jobs').delete().eq('id', id);
  state.jobs = state.jobs.filter((job) => job.id !== id);
  state.selectedJobId = companyJobs(companyId)[0]?.id || '';
  persistAll();
  navigate(companyPath('jobs', { tab: 'list' }, companyId), { replace: true });
}

async function saveTask(form) {
  const companyId = activeCompanyId();
  const formData = Object.fromEntries(new FormData(form).entries());
  const payload = normalizeTask({
    ...formData,
    id: String(formData.id || '').trim() || `task-${crypto.randomUUID()}`,
    company_id: companyId,
    creator_id: activeSession().profile.member_id || companyMembers(companyId)[0]?.id || 'abraham',
    urgency: formData.priority || 'medium',
    watchers: [],
    subtasks: [],
    activity: [],
    updated_at: new Date().toISOString(),
  });

  const existing = state.tasks.some((task) => task.id === payload.id);
  const client = createSupabaseClient();
  if (client) {
    const savePayload = taskPayload(payload);
    const result = existing
      ? await client.from('tasks').update(savePayload).eq('id', payload.id).select().single()
      : await client.from('tasks').insert(savePayload).select().single();
    if (!result.error && result.data) {
      upsertTask(normalizeTask(result.data));
      state.sync = { label: 'Quest Supabase live', mode: 'live' };
      navigate(companyPath('tasks', { ...(payload.project_id ? { job_id: payload.project_id } : {}), task_id: payload.id }, companyId), { replace: true });
      return;
    }
    state.sync = { label: 'Task saved locally', mode: 'local' };
  }

  upsertTask(payload);
  navigate(companyPath('tasks', { ...(payload.project_id ? { job_id: payload.project_id } : {}), task_id: payload.id }, companyId), { replace: true });
}

async function deleteTask(id) {
  if (!id) return;
  const companyId = activeCompanyId();
  const client = createSupabaseClient();
  if (client) await client.from('tasks').delete().eq('id', id);
  state.tasks = state.tasks.filter((task) => task.id !== id);
  state.selectedTaskId = '';
  persistAll();
  navigate(companyPath('tasks', {}, companyId), { replace: true });
}

async function saveFileRecord(form) {
  const companyId = activeCompanyId();
  const formData = Object.fromEntries(new FormData(form).entries());
  const payload = normalizeFile({
    id: crypto.randomUUID(),
    company_id: companyId,
    job_id: formData.job_id || '',
    folder: formData.folder || 'shared',
    file_name: formData.file_name,
    mime_type: 'application/octet-stream',
    size_bytes: Number(formData.size_bytes || 0),
    category: formData.category || folderLabel(formData.folder || 'shared'),
    notes: formData.notes || '',
    uploaded_by_label: activeSession().profile.full_name,
    bucket_id: 'quest-job-files',
    object_path: `${companyId}/${formData.folder || 'shared'}/${Date.now()}-${slugify(formData.file_name || 'file')}`,
    created_at: new Date().toISOString(),
  });

  const client = createSupabaseClient();
  if (client) {
    const result = await client.from('job_files').insert(filePayload(payload)).select().single();
    if (!result.error && result.data) {
      upsertFile(normalizeFile(result.data));
      state.sync = { label: 'Quest Supabase live', mode: 'live' };
      state.modal = '';
      navigate(companyPath('files', { folder: payload.folder, ...(payload.job_id ? { job_id: payload.job_id } : {}) }, companyId), { replace: true });
      return;
    }
    state.sync = { label: 'File record saved locally', mode: 'local' };
  }

  upsertFile(payload);
  state.modal = '';
  navigate(companyPath('files', { folder: payload.folder, ...(payload.job_id ? { job_id: payload.job_id } : {}) }, companyId), { replace: true });
}

function upsertJob(job) {
  const index = state.jobs.findIndex((item) => item.id === job.id);
  if (index >= 0) state.jobs[index] = job;
  else state.jobs.unshift(job);
  state.selectedJobId = job.id;
  persistAll();
}

function upsertTask(task) {
  const index = state.tasks.findIndex((item) => item.id === task.id);
  if (index >= 0) state.tasks[index] = task;
  else state.tasks.unshift(task);
  state.selectedTaskId = task.id;
  persistAll();
}

function upsertFile(file) {
  const index = state.files.findIndex((item) => item.id === file.id);
  if (index >= 0) state.files[index] = file;
  else state.files.unshift(file);
  persistAll();
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
  if (path === '/login') return { name: 'login', path, params, section: '', companyId: '', jobId: '' };
  if (path === '/' || path === '/command') return { name: 'command', path, params, section: 'dashboard', companyId: activeCompanyId(), jobId: params.get('job_id') || '' };
  const companyMatch = path.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);
  if (companyMatch) {
    const section = companyMatch[2] || 'jobs';
    return {
      name: 'company',
      path,
      params,
      companyId: decodeURIComponent(companyMatch[1]),
      section,
      jobId: params.get('job_id') || '',
    };
  }
  return { name: path.replace(/^\//, '') || 'command', path, params, section: '', companyId: activeCompanyId(), jobId: params.get('job_id') || '' };
}

function normalizeLegacyLocation() {
  const path = appPathname();
  const params = new URLSearchParams(window.location.search);
  const companyId = params.get('company_id') || params.get('company') || companyIdForJob(params.get('job_id') || params.get('project_id')) || localStorage.getItem(COMPANY_KEY) || defaultCompanyId();
  const map = {
    '/index.html': companyPath('jobs', {}, companyId),
    '/command.html': companyPath('jobs', {}, companyId),
    '/admin.html': companyPath('settings', {}, companyId),
    '/automations.html': companyPath('settings', {}, companyId),
    '/crm.html': companyPath('users', {}, companyId),
    '/dashboards.html': companyPath('analytics', {}, companyId),
    '/files.html': companyPath('files', {}, companyId),
    '/finance.html': companyPath('analytics', {}, companyId),
    '/forms.html': companyPath('forms', {}, companyId),
    '/jobs.html': companyPath('jobs', {}, companyId),
    '/knowledge.html': companyPath('files', { folder: 'shared' }, companyId),
    '/login.html': '/login',
    '/templates.html': companyPath('forms', {}, companyId),
    '/tickets.html': companyPath('tasks', {}, companyId),
  };

  let target = map[path];
  if (path === '/jobs') {
    const tab = params.get('tab');
    if (tab === 'tasks') target = companyPath('tasks', copyParams(params, ['job_id', 'task_id', 'new', 'edit']), companyId);
    else if (tab === 'files') target = companyPath('files', copyParams(params, ['job_id', 'folder']), companyId);
    else if (tab === 'forms') target = companyPath('forms', copyParams(params, ['job_id']), companyId);
    else if (tab === 'analytics') target = companyPath('analytics', copyParams(params, ['job_id']), companyId);
    else target = companyPath('jobs', copyParams(params, ['job_id', 'tab']), companyId);
  }
  if (path === '/files') target = companyPath('files', copyParams(params, ['job_id', 'folder']), companyId);
  if (path === '/forms') target = companyPath('forms', copyParams(params, ['job_id']), companyId);
  if (path === '/analytics') target = companyPath('analytics', copyParams(params, ['job_id']), companyId);
  if (path === '/admin') target = companyPath('settings', {}, companyId);
  if (path === '/time') target = companyPath('time', {}, companyId);
  if (path === '/team') target = companyPath('users', {}, companyId);
  if (path === '/approvals') target = companyPath('approvals', {}, companyId);
  if (path === '/clock') target = companyPath('settings', {}, companyId);
  if (path === '/task-management.html') {
    const jobId = params.get('project_id') || params.get('job_id') || '';
    target = companyPath('tasks', jobId ? { job_id: jobId } : {}, companyIdForJob(jobId) || companyId);
  }
  const jobTaskMatch = path.match(/^\/jobs\/([^/]+)\/tasks\/?$/);
  if (jobTaskMatch) {
    const jobId = decodeURIComponent(jobTaskMatch[1]);
    target = companyPath('tasks', { job_id: jobId }, companyIdForJob(jobId) || companyId);
  }

  if (!target) return;
  window.history.replaceState({}, '', appHref(target));
}

function routeRedirect(route) {
  if (route.name !== 'company') return '';
  const allowed = allowedCompanyIds();
  if (!allowed.includes(route.companyId)) {
    return companyPath(route.section || 'jobs', Object.fromEntries(route.params.entries()), allowed[0] || defaultCompanyId());
  }
  const validSections = ['jobs', 'tasks', 'files', 'forms', 'analytics', 'users', 'settings', 'time', 'approvals'];
  if (!validSections.includes(route.section)) return companyPath('jobs', {}, route.companyId);
  const jobCompanyId = route.jobId ? companyIdForJob(route.jobId) : '';
  if (jobCompanyId && jobCompanyId !== route.companyId && allowed.includes(jobCompanyId)) {
    return companyPath(route.section, Object.fromEntries(route.params.entries()), jobCompanyId);
  }
  return '';
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
  const href = /^https?:\/\//i.test(path) || path.startsWith(BASE_PATH + '/') || (BASE_PATH === '' && path.startsWith('/')) ? path : appHref(path);
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
    if (url.origin !== window.location.origin) return appHref(companyPath('jobs', {}, defaultCompanyId()));
    return `${url.pathname}${url.search}`;
  } catch {
    return appHref(companyPath('jobs', {}, defaultCompanyId()));
  }
}

function companyPath(section = 'jobs', params = {}, companyId = activeCompanyId()) {
  const search = new URLSearchParams(params);
  for (const [key, value] of [...search.entries()]) {
    if (value === undefined || value === null || value === '') search.delete(key);
  }
  return `/company/${encodeURIComponent(companyId || defaultCompanyId())}/${section}${search.toString() ? `?${search.toString()}` : ''}`;
}

function routeTitle(route) {
  if (route.name === 'company') return titleCase(route.section);
  if (route.name === 'command') return 'Company Dashboard';
  if (route.name === 'login') return 'Sign in';
  return titleCase(route.name || 'Workspace');
}

function isActiveNav(route, path) {
  const [targetPath] = path.split('?');
  const target = targetPath.match(/^\/company\/([^/]+)\/([^/]+)/);
  if (!target || route.name !== 'company') return false;
  return route.companyId === decodeURIComponent(target[1]) && route.section === target[2];
}

function normalizeJobTab(value) {
  return JOB_TABS.includes(value) ? value : 'pipeline';
}

function labelForTab(tab) {
  return {
    pipeline: 'Pipeline',
    list: 'List',
    profile: 'Profile',
    editor: 'Editor',
  }[tab] || tab;
}

function reconcileCompany(route) {
  const target = route.companyId || state.activeCompanyId || defaultCompanyId();
  const allowed = allowedCompanyIds();
  state.activeCompanyId = allowed.includes(target) ? target : allowed[0] || defaultCompanyId();
  localStorage.setItem(COMPANY_KEY, state.activeCompanyId);
}

function reconcileSelection(route) {
  const companyId = activeCompanyId();
  if (route.jobId && companyJobs(companyId).some((job) => job.id === route.jobId)) state.selectedJobId = route.jobId;
  if (!state.selectedJobId || !companyJobs(companyId).some((job) => job.id === state.selectedJobId)) {
    state.selectedJobId = companyJobs(companyId)[0]?.id || '';
  }
  const taskId = route.params.get('task_id');
  if (taskId && companyTasks(companyId).some((task) => task.id === taskId)) state.selectedTaskId = taskId;
  if (route.section !== 'tasks') state.selectedTaskId = '';
  state.driveFolder = route.params.get('folder') || 'home';
}

function setActiveCompany(companyId) {
  const allowed = allowedCompanyIds();
  const next = allowed.includes(companyId) ? companyId : allowed[0] || defaultCompanyId();
  state.activeCompanyId = next;
  localStorage.setItem(COMPANY_KEY, next);
  const route = state.route || getRoute();
  const section = route.name === 'company' ? route.section : 'jobs';
  navigate(companyPath(section, {}, next));
}

function setSelectedJob(id) {
  const job = jobById(id);
  if (!job) return;
  state.selectedJobId = id;
  navigate(companyPath('jobs', { tab: 'profile', job_id: id }, job.company_id));
}

function setSelectedTask(id) {
  const task = taskById(id);
  if (!task) return;
  state.selectedTaskId = id;
  navigate(companyPath('tasks', { ...(task.project_id ? { job_id: task.project_id } : {}), task_id: id }, task.company_id));
}

function selectedJob() {
  return jobById(state.selectedJobId) || companyJobs(activeCompanyId())[0] || null;
}

function jobById(id) {
  return state.jobs.find((job) => job.id === id) || null;
}

function taskById(id) {
  return state.tasks.find((task) => task.id === id) || null;
}

function companyJobs(companyId = activeCompanyId()) {
  return state.jobs.filter((job) => job.company_id === companyId);
}

function companyTasks(companyId = activeCompanyId()) {
  return state.tasks.filter((task) => task.company_id === companyId);
}

function companyFiles(companyId = activeCompanyId()) {
  return state.files.filter((file) => file.company_id === companyId);
}

function companyMembers(companyId = activeCompanyId()) {
  return state.teamMembers.filter((member) => Array.isArray(member.company_ids) && member.company_ids.includes(companyId));
}

function filteredJobs(companyId = activeCompanyId()) {
  const q = state.query.trim().toLowerCase();
  return companyJobs(companyId).filter((job) => {
    if (state.stageFilter !== 'all' && job.stage !== state.stageFilter) return false;
    if (!q) return true;
    return [job.name, job.client_name, job.contact_name, job.owner_name, job.site_address, job.job_type, companyName(job.company_id)]
      .some((value) => String(value || '').toLowerCase().includes(q));
  });
}

function filteredTasks(companyId = activeCompanyId(), jobId = '') {
  const q = state.query.trim().toLowerCase();
  return companyTasks(companyId).filter((task) => {
    if (jobId && task.project_id !== jobId) return false;
    if (state.taskStatusFilter !== 'all' && task.status !== state.taskStatusFilter) return false;
    if (state.taskPriorityFilter !== 'all' && task.priority !== state.taskPriorityFilter) return false;
    if (!q) return true;
    return [task.title, task.description, taskTypeLabel(task.type), memberName(task.assignee_id), jobById(task.project_id)?.name]
      .some((value) => String(value || '').toLowerCase().includes(q));
  });
}

function filteredFiles(companyId = activeCompanyId(), folder = 'home', jobId = '') {
  const q = state.query.trim().toLowerCase();
  return companyFiles(companyId).filter((file) => {
    if (jobId && file.job_id !== jobId) return false;
    if (!jobId && folder && folder !== 'home' && folder !== 'jobs' && file.folder !== folder) return false;
    if (!jobId && folder === 'jobs' && !file.job_id) return false;
    if (!q) return true;
    return [file.file_name, file.category, file.uploaded_by_label, jobById(file.job_id)?.name]
      .some((value) => String(value || '').toLowerCase().includes(q));
  });
}

function allowedCompanies() {
  const ids = allowedCompanyIds();
  return state.companies.filter((company) => ids.includes(company.id));
}

function allowedCompanyIds() {
  const profile = activeSession().profile;
  const allIds = state.companies.map((company) => company.id);
  if (['developer', 'admin'].includes(profile.role)) return allIds.length ? allIds : companiesFallback.map((company) => company.id);
  const membershipIds = state.memberships
    .filter((item) => item.profile_id === profile.id && item.status !== 'disabled')
    .map((item) => item.company_id);
  const ids = membershipIds.length ? membershipIds : profile.company_ids || [];
  return ids.filter((id) => allIds.includes(id));
}

function activeCompanyId() {
  const allowed = allowedCompanyIds();
  if (allowed.includes(state.activeCompanyId)) return state.activeCompanyId;
  return allowed[0] || defaultCompanyId();
}

function defaultCompanyId() {
  return companiesFallback[0].id;
}

function companyById(id) {
  return state.companies.find((item) => item.id === id) || companiesFallback.find((item) => item.id === id) || null;
}

function companyName(id) {
  const company = companyById(id);
  return company ? companyLabel(company) : id || 'Company';
}

function companyLabel(company) {
  return company.short_name || company.label || company.name || company.id;
}

function companyColor(id) {
  return companyById(id)?.color || '#f0b23b';
}

function companyIdForJob(jobId) {
  return state.jobs.find((job) => job.id === jobId)?.company_id || '';
}

function roleForCompany(companyId) {
  const profile = activeSession().profile;
  if (['developer', 'admin'].includes(profile.role)) return titleCase(profile.role);
  return titleCase(state.memberships.find((item) => item.company_id === companyId && item.profile_id === profile.id)?.role || profile.role || 'member');
}

function roleForMember(companyId, memberId) {
  const membership = state.memberships.find((item) => item.company_id === companyId && (item.member_id === memberId || item.profile_id === memberId));
  return titleCase(membership?.role || 'member');
}

function memberName(id) {
  const member = state.teamMembers.find((item) => item.id === id);
  return member?.full_name || member?.name || id || 'Unassigned';
}

function taskCountForJob(jobId) {
  return state.tasks.filter((task) => task.project_id === jobId).length;
}

function fileCountForJob(jobId) {
  return state.files.filter((file) => file.job_id === jobId).length;
}

function normalizeCompany(input) {
  return {
    id: String(input.id || '').trim(),
    name: String(input.name || input.short_name || input.id || '').trim(),
    short_name: String(input.short_name || input.label || input.name || input.id || '').trim(),
    color: String(input.color || '#f0b23b'),
    label: String(input.label || input.short_name || input.name || input.id || '').trim(),
  };
}

function normalizeJob(input) {
  return {
    id: String(input.id || ''),
    company_id: String(input.company_id || defaultCompanyId()),
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

function normalizeTask(input) {
  const priority = TASK_PRIORITIES.includes(String(input.priority || '').toLowerCase()) ? String(input.priority).toLowerCase() : 'medium';
  const status = TASK_STATUSES.includes(String(input.status || '').toLowerCase()) ? String(input.status).toLowerCase() : 'todo';
  return {
    id: String(input.id || ''),
    title: String(input.title || '').trim() || 'Untitled task',
    description: String(input.description || '').trim(),
    type: TASK_TYPES.includes(input.type) ? input.type : 'admin',
    label: input.label || null,
    bid_status: input.bid_status || null,
    company_id: String(input.company_id || defaultCompanyId()),
    creator_id: String(input.creator_id || 'abraham'),
    assignee_id: String(input.assignee_id || input.creator_id || 'abraham'),
    project_id: String(input.project_id || ''),
    due: String(input.due || isoDate(1)).slice(0, 10),
    due_time: input.due_time || null,
    reminder_at: input.reminder_at || null,
    priority,
    urgency: TASK_PRIORITIES.includes(String(input.urgency || '').toLowerCase()) ? String(input.urgency).toLowerCase() : priority,
    status,
    watchers: Array.isArray(input.watchers) ? input.watchers : [],
    subtasks: Array.isArray(input.subtasks) ? input.subtasks : [],
    activity: Array.isArray(input.activity) ? input.activity : [],
    cleared_at: input.cleared_at || null,
    created_at: input.created_at || new Date().toISOString(),
    updated_at: input.updated_at || new Date().toISOString(),
  };
}

function normalizeFile(input) {
  const category = String(input.category || input.folder || 'Shared');
  return {
    id: String(input.id || crypto.randomUUID()),
    company_id: String(input.company_id || defaultCompanyId()),
    job_id: String(input.job_id || ''),
    folder: String(input.folder || folderIdFromCategory(category)),
    file_name: String(input.file_name || input.name || 'Untitled file'),
    mime_type: String(input.mime_type || 'application/octet-stream'),
    size_bytes: number(input.size_bytes),
    category,
    bucket_id: input.bucket_id || 'quest-job-files',
    object_path: input.object_path || '',
    uploaded_by_label: String(input.uploaded_by_label || 'Quest HQ'),
    notes: String(input.notes || ''),
    created_at: input.created_at || new Date().toISOString(),
    updated_at: input.updated_at || input.created_at || new Date().toISOString(),
  };
}

function normalizeTeamMember(input) {
  return {
    id: String(input.id || ''),
    name: String(input.name || input.full_name || '').trim(),
    full_name: String(input.full_name || input.name || '').trim(),
    email: String(input.email || '').trim(),
    color: String(input.color || '#f0b23b'),
    avatar_url: String(input.avatar_url || ''),
    active: input.active !== false,
    company_ids: Array.isArray(input.company_ids) ? input.company_ids : [],
  };
}

function normalizeMembership(input) {
  return {
    company_id: String(input.company_id || ''),
    profile_id: String(input.profile_id || input.member_id || ''),
    member_id: input.member_id ? String(input.member_id) : '',
    role: String(input.role || 'member'),
    status: String(input.status || 'active'),
  };
}

function blankJob(companyId = activeCompanyId()) {
  return normalizeJob({
    id: '',
    company_id: companyId,
    name: '',
    stage: 'Lead',
    priority: 'Medium',
    job_type: 'Roofing',
  });
}

function blankTask(companyId = activeCompanyId(), jobId = '') {
  return normalizeTask({
    id: '',
    title: '',
    company_id: companyId,
    project_id: jobId,
    assignee_id: companyMembers(companyId)[0]?.id || 'abraham',
    creator_id: activeSession().profile.member_id || 'abraham',
    due: isoDate(1),
    priority: 'medium',
    status: 'todo',
    type: 'admin',
  });
}

function taskPayload(task) {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    type: task.type,
    label: task.label,
    bid_status: task.bid_status,
    company_id: task.company_id,
    creator_id: task.creator_id,
    assignee_id: task.assignee_id,
    project_id: task.project_id || null,
    due: task.due,
    due_time: task.due_time,
    reminder_at: task.reminder_at,
    priority: task.priority,
    urgency: task.urgency,
    status: task.status,
    watchers: task.watchers,
    subtasks: task.subtasks,
    activity: task.activity,
    cleared_at: task.cleared_at,
  };
}

function filePayload(file) {
  return {
    company_id: file.company_id,
    job_id: file.job_id || null,
    bucket_id: file.bucket_id,
    object_path: file.object_path,
    file_name: file.file_name,
    mime_type: file.mime_type,
    size_bytes: file.size_bytes,
    category: file.category,
    folder: file.folder,
    uploaded_by_label: file.uploaded_by_label,
    notes: file.notes,
  };
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
    member_id: 'abraham',
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

function workspaceHeader(title, summary, actions = '') {
  return `
    <section class="workspace-head">
      <div>
        <div class="context-line"><span>${h(companyName(activeCompanyId()))}</span><b>${h(roleForCompany(activeCompanyId()))}</b></div>
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

function taskQueueRow(task) {
  return `
    <button class="queue-row" type="button" data-select-task="${h(task.id)}">
      <span><strong>${h(task.title)}</strong><small>${h(jobById(task.project_id)?.name || companyName(task.company_id))}</small></span>
      ${taskPriorityPill(task.priority)}
      <b>${h(statusLabel(task.status))}</b>
    </button>
  `;
}

function jobCard(job) {
  return `
    <button class="job-card priority-${h(job.priority.toLowerCase())} ${job.id === state.selectedJobId ? 'active' : ''}" type="button" data-select-job="${h(job.id)}">
      <strong>${h(job.name)}</strong>
      <span>${h(job.client_name || 'No client')}</span>
      <small>${h(companyName(job.company_id))} - ${h(job.owner_name || 'Unassigned')}</small>
      <em>${h(taskCountForJob(job.id))} tasks</em>
    </button>
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

function field(label, name, value = '', required = false, type = 'text', className = '') {
  return `<label class="${h(className)}"><span>${h(label)}</span><input name="${h(name)}" type="${h(type)}" value="${h(value)}" ${required ? 'required' : ''} /></label>`;
}

function textareaField(label, name, value = '', className = '') {
  return `<label class="${h(className)}"><span>${h(label)}</span><textarea name="${h(name)}" rows="4">${h(value)}</textarea></label>`;
}

function selectField(label, name, value, options) {
  return `
    <label><span>${h(label)}</span><select name="${h(name)}">
      ${options.map(([id, text]) => `<option value="${h(id)}" ${String(id) === String(value) ? 'selected' : ''}>${h(text)}</option>`).join('')}
    </select></label>
  `;
}

function priorityPill(priority) {
  return `<span class="priority ${h(String(priority).toLowerCase())}">${h(priority)}</span>`;
}

function taskPriorityPill(priority) {
  return `<span class="priority ${h(priority)}">${h(titleCase(priority))}</span>`;
}

function taskStatusPill(status) {
  return `<span class="status-pill ${h(status)}">${h(statusLabel(status))}</span>`;
}

function renderAvatar(profile, className) {
  if (profile.avatar_url) return `<span class="${h(className)}"><img src="${h(profile.avatar_url)}" alt="" /></span>`;
  const initials = String(profile.full_name || profile.email || 'QB').trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'QB';
  return `<span class="${h(className)}">${h(initials)}</span>`;
}

function emptyState(text) {
  return `<div class="empty-state">${h(text)}</div>`;
}

function copyParams(params, keys) {
  const next = {};
  keys.forEach((key) => {
    const value = params.get(key);
    if (value) next[key] = value;
  });
  return next;
}

function persistAll() {
  writeJson(JOB_CACHE_KEY, state.jobs);
  writeJson(TASK_CACHE_KEY, state.tasks);
  writeJson(FILE_CACHE_KEY, state.files);
  writeJson(TEAM_CACHE_KEY, state.teamMembers);
  writeJson(MEMBERSHIP_CACHE_KEY, state.memberships);
}

function statusLabel(status) {
  return {
    todo: 'To do',
    pending: 'Pending',
    hold: 'On hold',
    review: 'Review',
    done: 'Done',
  }[status] || titleCase(status);
}

function taskTypeLabel(type) {
  return {
    lead: 'Lead',
    bid: 'Bid',
    admin: 'Admin',
    invoicing: 'Invoicing',
    ar: 'AR',
    meeting: 'Meeting',
    web_dev: 'Web dev',
  }[type] || titleCase(type);
}

function folderLabel(id) {
  return DRIVE_FOLDERS.find(([folderId]) => folderId === id)?.[1] || titleCase(id || 'Shared');
}

function folderIdFromCategory(category) {
  const lower = String(category || '').toLowerCase();
  if (lower.includes('photo')) return 'photos';
  if (lower.includes('permit')) return 'permits';
  if (lower.includes('contract')) return 'contracts';
  if (lower.includes('form')) return 'forms';
  if (lower.includes('archive')) return 'archive';
  return 'shared';
}

function fileIcon(file) {
  if (file.mime_type.includes('image')) return 'ti-photo';
  if (file.mime_type.includes('pdf')) return 'ti-file-type-pdf';
  if (file.mime_type.includes('zip')) return 'ti-file-zip';
  return 'ti-file-description';
}

function titleCase(value) {
  return String(value || '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function isoDate(offsetDays = 0) {
  const date = new Date(Date.now() + offsetDays * 86400000);
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return 'No date';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
}

function formatBytes(value) {
  const bytes = number(value);
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
}

function slugify(value) {
  return String(value || 'file').toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, '') || 'file';
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
