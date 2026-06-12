(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const w of r.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&i(w)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const v={buildId:"Quest HQ SPA Foundation v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},j=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),R="quest-hq-local-session",B="quest-hq-local-profile",z="quest-hq-job-cache-v2",k=["Lead","Site Review","Estimate","Approved","Active","Closed"],K=["pipeline","list","profile","tasks","files","forms","analytics","editor"],J=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],U=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:7,file_count:12,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:5,file_count:8,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-1728e5).toISOString()}],n={route:null,session:P(R,null),profileDraft:P(B,null),jobs:P(z,U).map(h),companies:J,selectedJobId:"",query:"",stageFilter:"all",sync:{label:"Loading jobs...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",modal:""},G=document.getElementById("app");oe();function oe(){De(),window.addEventListener("popstate",p),document.addEventListener("click",Je),document.addEventListener("submit",Pe),document.addEventListener("input",Qe),document.addEventListener("change",Ue),p()}function p(){if(n.route=F(),re(n.route)){m("/login?return_url="+encodeURIComponent(Me()),{replace:!0});return}if(n.route.name==="login"){Le();return}le(),ee(n.route),n.route.params.get("account")==="profile"&&(n.modal="profile"),document.title=`${Oe(n.route)} | Quest HQ`,G.innerHTML=de(n.route,Y(n.route))}function re(e){return e.name==="login"?!1:!n.session}function le(){n.dataLoaded||n.dataLoading||(n.dataLoading=!0,ce().catch(()=>{n.jobs=U.map(h),n.companies=J,n.sync={label:"Local fallback",mode:"local"}}).finally(()=>{n.dataLoaded=!0,n.dataLoading=!1,E(),p()}))}async function ce(){const e=A();if(!e){n.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a]=await Promise.all([e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("companies").select("*").order("name",{ascending:!0})]);if(t.error)throw t.error;n.jobs=(t.data||[]).map(h),n.jobs.length||(n.jobs=U.map(h)),!a.error&&a.data&&a.data.length&&(n.companies=a.data),n.sync={label:"Supabase live",mode:"live"}}function A(){return!window.supabase||typeof window.supabase.createClient!="function"?null:window.supabase.createClient(v.supabaseUrl,v.supabaseKey)}function de(e,t){const a=y();return`
    <div class="quest-app" data-route="${s(e.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${l("/command")}" data-router aria-label="Quest HQ Operations Command">
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
            <input data-global-search value="${s(n.query)}" placeholder="Search jobs, clients, owners, addresses" />
          </label>
          <span class="sync-pill ${s(n.sync.mode)}" data-sync-state>${s(n.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data"><i class="ti ti-refresh"></i>Refresh</button>
          <a class="btn btn-primary" href="${l("/jobs?tab=editor")}" data-router><i class="ti ti-plus"></i>Add Job</a>
          <div class="account-menu">
            <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open Quest profile">
              ${ie(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${s(a.profile.full_name)}</strong>
              <span>${s(a.profile.role_label)}</span>
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${pe(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${n.modal==="profile"?Re(a.profile):""}
  `}function pe(e){const t=n.jobs.length;return n.jobs.filter(a=>a.priority==="Urgent").length,`
    <div class="side-brand">
      <span class="side-mark">Q</span>
      <span><strong>Quest HQ</strong><small>${s(v.buildId)}</small></span>
    </div>
    ${C("Command",[c(e,"/command","ti-layout-dashboard","Operations command")])}
    ${C("Job Center",[c(e,"/jobs","ti-briefcase","Jobs",t),c(e,"/jobs?tab=tasks","ti-list-check","Task execution"),c(e,"/files","ti-folder","Files"),c(e,"/forms","ti-clipboard-list","Forms")])}
    ${C("Operations",[c(e,"/time","ti-clock","My time","3.3h"),c(e,"/team","ti-users","Team workload",n.jobs.length),c(e,"/approvals","ti-user-check","Approvals",0),c(e,"/clock","ti-clock-play","Clock dashboard",0)])}
    ${C("System",[c(e,"/analytics","ti-chart-bar","Analytics"),c(e,"/admin","ti-settings","Admin"),c(e,"/crm","ti-address-book","CRM","Planned"),c(e,"/finance","ti-receipt","Finance","Planned"),c(e,"/knowledge","ti-books","Knowledge","Planned"),c(e,"/automations","ti-route","Automations","Planned"),c(e,"/tickets","ti-ticket","Tickets","Planned"),c(e,"/templates","ti-template","Templates","Planned")])}
    <div class="deck-note">
      <strong>Boundary</strong>
      <span>Quest owns jobs, people, roles, files, forms, time, approvals, and admin. TaskManagement executes tasks only.</span>
    </div>
  `}function C(e,t){return`
    <section class="side-group">
      <div class="side-label">${s(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function c(e,t,a,i,o=""){const r=Ee(e,t),w=String(o).toLowerCase()==="planned";return`
    <a class="side-item ${r?"active":""} ${w?"planned":""}" href="${l(t)}" data-router>
      <i class="ti ${s(a)}"></i>
      <span>${s(i)}</span>
      ${o!==""?`<b>${s(String(o))}</b>`:""}
    </a>
  `}function Y(e){return e.name==="command"?me():e.name==="jobs"?ue(e):e.name==="files"?ke():e.name==="forms"?_e():e.name==="analytics"?we():e.name==="admin"?je():["time","team","approvals","clock"].includes(e.name)?Se(e.name):Ce(e.name)}function me(){const e=n.jobs.filter(i=>i.stage!=="Closed"),t=n.jobs.filter(i=>i.priority==="Urgent"),a=D();return`
    ${b("Operations Command","Single command surface for jobs, task execution, time, team workload, approvals, files, forms, and admin.",`
      <a class="btn btn-primary" href="${l("/jobs?tab=editor")}" data-router><i class="ti ti-plus"></i>Add Job</a>
    `)}
    ${O([["Active jobs",e.length],["Urgent work",t.length],["Linked tasks",f(n.jobs,"task_count")],["Pipeline value",N(f(n.jobs,"estimate_total"))]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority Job Queue</h2><p>Live job containers. Task execution opens inside this shell.</p></div>
          <a class="btn" href="${l("/jobs")}" data-router>Open Job Center</a>
        </div>
        <div class="queue-list">
          ${e.slice(0,6).map(i=>ne(i)).join("")||d("No active jobs found.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Task Handoff</h2><p>Job id feeds TaskManagement project_id.</p></div></div>
        ${a?_([["Selected job",a.name],["project_id",a.id],["Task runtime","Embedded tasks only"],["Standalone recovery","taskmanagement/app.html"]]):d("Create or select a job to scope task execution.")}
        <a class="btn btn-primary full" href="${l("/jobs?tab=tasks"+(a?`&job_id=${encodeURIComponent(a.id)}`:""))}" data-router>Open job tasks</a>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Operations Ownership</h2><p>These are Quest modules now, not embedded task sidebar items.</p></div></div>
        <div class="module-stack">
          ${u("/time","ti-clock","My time","Local shift surface")}
          ${u("/team","ti-users","Team workload","Supervisor view")}
          ${u("/approvals","ti-user-check","Approvals","Quest account access")}
          ${u("/clock","ti-clock-play","Clock dashboard","Admin clock review")}
        </div>
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Recent Operating Activity</h2><p>Derived from current job records until activity tables are wired into the shell.</p></div></div>
        <div class="activity-list">
          ${Ke().map(([i,o])=>`<div><strong>${s(i)}</strong><span>${s(o)}</span></div>`).join("")}
        </div>
      </article>
    </section>
  `}function ue(e){const t=X(e.tab),a=D();return`
    ${b("Job Center","The production shell for job records and job-scoped task execution.",`
      <button class="btn" type="button" data-action="refresh-data"><i class="ti ti-refresh"></i>Refresh</button>
      <a class="btn btn-primary" href="${l("/jobs?tab=editor"+(a?`&job_id=${encodeURIComponent(a.id)}`:""))}" data-router><i class="ti ti-plus"></i>Add Job</a>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(k).map(i=>`<option value="${s(i)}" ${n.stageFilter===i?"selected":""}>${s(i==="all"?"All business statuses":i)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${a?s(a.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job Center sections">
      ${K.map(i=>`<a class="${i===t?"active":""}" href="${l("/jobs?"+new URLSearchParams({tab:i,...a?{job_id:a.id}:{}}).toString())}" data-router>${s(qe(i))}</a>`).join("")}
    </nav>
    ${fe(t,a)}
  `}function fe(e,t){return e==="pipeline"?H():e==="list"?be():e==="profile"?ge(t):e==="tasks"?ve(t):e==="files"?he(t):e==="forms"?$e(t):e==="analytics"?V(t):e==="editor"?ye(t):H()}function H(){const e=ae();return`
    <section class="job-board">
      ${k.map(t=>{const a=e.filter(i=>i.stage===t);return`
          <article class="job-lane">
            <h2><span>${s(t)}</span><b>${a.length}</b></h2>
            ${a.map(i=>Be(i)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function be(){const e=ae();return`
    <section class="panel">
      <div class="section-head"><div><h2>Job List</h2><p>${e.length} visible job${e.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${e.map(t=>`
          <button class="table-row ${t.id===n.selectedJobId?"active":""}" type="button" data-select-job="${s(t.id)}">
            <span><strong>${s(t.name)}</strong><small>${s(t.client_name||"No client")} - ${s(t.site_address||"No address")}</small></span>
            <span>${s(t.stage)}</span>
            <span>${se(t.priority)}</span>
            <span>${s(t.owner_name||"Unassigned")}</span>
            <span>${s(t.task_count)}</span>
            <span>${N(t.estimate_total)}</span>
          </button>
        `).join("")||d("No jobs match this view.")}
      </div>
    </section>
  `}function ge(e){return e?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${s(S(e.company_id))} - ${s(e.job_type)}</span>
          <h2>${s(e.name)}</h2>
          <p>${s(e.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job Controls</h2><p>Quest owns the job context and handoff.</p></div></div>
        ${_([["Client",e.client_name||"No client"],["Contact",e.contact_name||"No contact"],["Owner",e.owner_name||"Unassigned"],["Stage",e.stage],["Priority",e.priority],["Estimate",N(e.estimate_total)],["Task project_id",e.id]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${l("/jobs?tab=tasks&job_id="+encodeURIComponent(e.id))}" data-router>Open tasks</a>
          <a class="btn" href="${l("/jobs?tab=editor&job_id="+encodeURIComponent(e.id))}" data-router>Edit job</a>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked Workspaces</h2><p>Files, forms, analytics, and task execution remain inside Job Center.</p></div></div>
        <div class="linked-grid">
          ${u("/jobs?tab=tasks&job_id="+encodeURIComponent(e.id),"ti-list-check","Tasks",`${e.task_count} linked tasks`)}
          ${u("/jobs?tab=files&job_id="+encodeURIComponent(e.id),"ti-folder","Files",`${e.file_count} files`)}
          ${u("/jobs?tab=forms&job_id="+encodeURIComponent(e.id),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${u("/jobs?tab=analytics&job_id="+encodeURIComponent(e.id),"ti-chart-bar","Analytics","Job health")}
        </div>
      </article>
    </section>
  `:d("Create a job to see the profile workspace.")}function ve(e){const t=W(e);return`
    <section class="task-runtime panel">
      <div class="runtime-head">
        <div>
          <div class="eyebrow">TaskManagement execution</div>
          <h2>${e?s(e.name):"All task work"}</h2>
          <p>${e?`Scoped through project_id ${s(e.id)}.`:"Select a job to scope TaskManagement to a project_id."}</p>
        </div>
        <div class="runtime-actions">
          <button class="btn" type="button" data-action="reload-task-frame"><i class="ti ti-refresh"></i>Reload</button>
          <a class="btn" href="${s(W(e,!1))}" target="_blank" rel="noreferrer">Open full view</a>
        </div>
      </div>
      <iframe title="Job-scoped TaskManagement" data-task-frame src="${s(t)}" loading="lazy" referrerpolicy="same-origin"></iframe>
    </section>
  `}function he(e){return e?`
    <section class="panel">
      <div class="section-head"><div><h2>${s(e.name)} Files</h2><p>Quest owns files and documents. TaskManagement stays focused on task execution.</p></div><a class="btn" href="${l("/files?job_id="+encodeURIComponent(e.id))}" data-router>Open File Center</a></div>
      <div class="file-grid">
        ${["Inspection photos","Permit packet","Client approval","Final walkthrough"].map((t,a)=>ze(t,e,a)).join("")}
      </div>
    </section>
  `:d("Select a job to inspect file context.")}function $e(e){return e?`
    <section class="panel">
      <div class="section-head"><div><h2>${s(e.name)} Forms</h2><p>Inspection and survey surfaces live in Quest, not inside the task iframe.</p></div><a class="btn" href="${l("/forms?job_id="+encodeURIComponent(e.id))}" data-router>Open Forms</a></div>
      <div class="card-grid">
        ${["Roof inspection checklist","Client approval form","Final walkthrough survey","Internal request intake"].map(t=>`
          <article class="mini-card"><strong>${s(t)}</strong><span>${s(e.name)}</span><small>Ready for module data wiring</small></article>
        `).join("")}
      </div>
    </section>
  `:d("Select a job to inspect form context.")}function V(e){const t=e?[e]:n.jobs;return`
    <section class="panel">
      <div class="section-head"><div><h2>${e?s(e.name):"Job"} Analytics</h2><p>Rollups from the Job Center record set.</p></div></div>
      ${O([["Jobs in scope",t.length],["Urgent",t.filter(a=>a.priority==="Urgent").length],["Tasks",f(t,"task_count")],["Files",f(t,"file_count")]])}
      <div class="stage-bars">
        ${k.map(a=>{const i=t.filter(r=>r.stage===a).length,o=t.length?Math.round(i/t.length*100):0;return`<div><span>${s(a)}</span><b><i style="width:${o}%"></i></b><strong>${i}</strong></div>`}).join("")}
      </div>
    </section>
  `}function ye(e){const t=e||We();return`
    <form class="panel job-editor" data-job-form>
      <input type="hidden" name="id" value="${s(t.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${e?"Edit Job Workspace":"Create Job Workspace"}</h2><p>Creates the business container that feeds files, forms, analytics, and TaskManagement project_id.</p></div>
      </div>
      ${g("Workspace name","name",t.name,!0)}
      ${I("Company","company_id",t.company_id||M(),n.companies.map(a=>[a.id,a.name||a.short_name||a.id]))}
      ${g("Client","client_name",t.client_name)}
      ${g("Contact","contact_name",t.contact_name)}
      ${g("Account owner","owner_name",t.owner_name)}
      ${g("Job type","job_type",t.job_type||"Roofing")}
      ${I("Business status","stage",t.stage||"Lead",k.map(a=>[a,a]))}
      ${I("Client urgency","priority",t.priority||"Medium",["Low","Medium","High","Urgent"].map(a=>[a,a]))}
      ${g("Estimate total","estimate_total",t.estimate_total||0,!1,"number")}
      ${g("Site address","site_address",t.site_address,!1,"text","span-2")}
      ${x("Scope","scope",t.scope,"span-2")}
      ${x("Notes","notes",t.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save Workspace</button>
        ${e?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${s(e.id)}">Delete</button>`:""}
      </div>
    </form>
  `}function ke(){const e=F().params.get("job_id"),t=e?te(e):D();return`
    ${b("File Center","Job-linked photos, permits, drawings, contracts, estimates, and closeout documents.",`
      <a class="btn" href="${l("/jobs?tab=files"+(t?`&job_id=${encodeURIComponent(t.id)}`:""))}" data-router>Open in Job Center</a>
    `)}
    ${O([["Files",f(n.jobs,"file_count")],["Jobs with files",n.jobs.filter(a=>a.file_count>0).length],["Photos",Math.max(0,f(n.jobs,"file_count")-5)],["Unlinked",0]])}
    <section class="file-layout">
      <article class="panel">
        <div class="section-head"><div><h2>Folders by Job</h2><p>Selecting a folder keeps the same shell and routes into job context.</p></div></div>
        <div class="folder-grid">
          ${n.jobs.map(a=>`
            <a class="folder-card ${t&&a.id===t.id?"active":""}" href="${l("/files?job_id="+encodeURIComponent(a.id))}" data-router>
              <i class="ti ti-folder"></i>
              <strong>${s(a.name)}</strong>
              <span>${s(S(a.company_id))}</span>
              <small>${s(a.file_count)} files</small>
            </a>
          `).join("")}
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>${t?s(t.name):"No job selected"}</h2><p>Selected file workspace</p></div></div>
        ${t?_([["Client",t.client_name||"No client"],["Files",t.file_count],["Storage bucket","quest-job-files"],["Task link",t.id]]):d("Select a job folder.")}
      </aside>
    </section>
  `}function _e(){const e=["Roof inspection checklist","Client approval form","Final walkthrough survey","Internal request intake","Safety tailgate form","Warranty handoff"];return`
    ${b("Forms & Surveys","Inspection, approval, intake, and response review owned by Quest HQ.",`
      <a class="btn" href="${l("/jobs?tab=forms")}" data-router>Open job forms</a>
    `)}
    <section class="forms-layout">
      <article class="panel">
        <div class="section-head"><div><h2>Template Library</h2><p>Form records are ready to wire to Supabase module tables.</p></div></div>
        <div class="card-grid">
          ${e.map((t,a)=>`<article class="mini-card"><strong>${s(t)}</strong><span>${a%2?"Draft":"Published"}</span><small>Quest HQ module</small></article>`).join("")}
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Response Center</h2><p>Recent survey and inspection responses.</p></div></div>
        <div class="activity-list">
          ${n.jobs.slice(0,4).map(t=>`<div><strong>${s(t.name)}</strong><span>Inspection response workspace ready.</span></div>`).join("")||d("No jobs available.")}
        </div>
      </aside>
    </section>
  `}function we(){return`
    ${b("Analytics","Central reporting for jobs, workload, task handoff, files, and operational health.","")}
    ${V(null)}
    <section class="dashboard-grid top-gap">
      <article class="panel">
        <div class="section-head"><div><h2>Module Health</h2><p>Production boundaries and readiness.</p></div></div>
        ${_([["Job Center","Live Supabase table"],["TaskManagement","Embedded task engine"],["Files","Quest-owned module"],["Forms","Quest-owned module"],["Auth","Local basic gate"]])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Pipeline Breakdown</h2><p>Jobs grouped by business status.</p></div></div>
        <div class="stage-bars">
          ${k.map(e=>{const t=n.jobs.filter(i=>i.stage===e).length,a=n.jobs.length?Math.round(t/n.jobs.length*100):0;return`<div><span>${s(e)}</span><b><i style="width:${a}%"></i></b><strong>${t}</strong></div>`}).join("")}
        </div>
      </article>
    </section>
  `}function je(){return`
    ${b("Admin","Quest-owned users, roles, companies, approvals, and access settings.","")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Companies</h2><p>Company context used by jobs and task scopes.</p></div></div>
        <div class="company-list">
          ${n.companies.map(e=>`<div><b style="background:${s(e.color||"#f0b23b")}"></b><strong>${s(e.name||e.id)}</strong><span>${s(e.id)}</span></div>`).join("")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Users & Roles</h2><p>Quest shell owns account role display while Supabase auth is disabled.</p></div></div>
        ${_([["Current user",y().profile.full_name],["Role",y().profile.role_label],["Companies",y().profile.company_ids.join(", ")],["Supabase auth","Disabled"]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Approvals</h2><p>Moved out of embedded TaskManagement.</p></div></div>
        ${d("No pending local approvals. Real approval rows wire here when Supabase auth is re-enabled.")}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Team Chart</h2><p>Org and workload surfaces belong in Quest HQ.</p></div></div>
        <div class="team-chart">
          <div><strong>Operations Lead</strong><span>Quest HQ</span></div>
          <div><strong>Roofing Supervisor</strong><span>${n.jobs.filter(e=>e.company_id==="roofing").length} jobs</span></div>
          <div><strong>Drafting Supervisor</strong><span>${n.jobs.filter(e=>e.company_id==="drafting").length} jobs</span></div>
          <div><strong>Lumen Lead</strong><span>${n.jobs.filter(e=>e.company_id==="lumen").length} jobs</span></div>
        </div>
      </article>
    </section>
  `}function Se(e){const t={time:["My Time","Personal time tracking belongs to Quest shell while task timers remain available in full TaskManagement recovery mode."],team:["Team Workload","Supervisor workload view by job, company, owner, and urgency."],approvals:["Approvals","Account approval and role assignment lives in Quest HQ."],clock:["Clock Dashboard","Admin clock review and exceptions live in Quest HQ."]},[a,i]=t[e]||t.time,o=n.jobs.filter(r=>r.priority==="Urgent");return`
    ${b(a,i,"")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Summary</h2><p>Quest-owned operational surface.</p></div></div>
        ${_([["Visible jobs",n.jobs.length],["Urgent jobs",o.length],["Linked tasks",f(n.jobs,"task_count")],["Mode","Local basic mode"]])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Workload Queue</h2><p>Sorted by urgency and recent updates.</p></div></div>
        <div class="queue-list">${n.jobs.slice(0,8).map(r=>ne(r)).join("")||d("No jobs found.")}</div>
      </article>
    </section>
  `}function Ce(e){const a={crm:"CRM",finance:"Finance",knowledge:"Knowledge Base",automations:"Automations",tickets:"Tickets",templates:"Templates"}[e]||"Workspace";return`
    ${b(a,`${a} now opens inside the same Quest shell. This module is intentionally empty until its real data model is approved.`,"")}
    <section class="panel">
      <div class="section-head"><div><h2>${s(a)} Workspace</h2><p>No duplicate shell, no separate app jump, no TaskManagement ownership leak.</p></div></div>
      ${d("Module data model pending. Navigation and shell integration are production-ready.")}
    </section>
  `}function Le(){document.title="Sign in | Quest HQ";const e=Z(n.route.params.get("return_url")||l("/command"));G.innerHTML=`
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
          <label>Username<input name="username" value="${s(v.localUsername)}" autocomplete="username" /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" /></label>
          <input type="hidden" name="return_url" value="${s(e)}" />
          <button class="btn btn-primary full" type="submit">Sign in</button>
          ${n.loginError?`<div class="form-message error">${s(n.loginError)}</div>`:'<div class="form-message">Temporary credentials: lumen123 / lumen123</div>'}
        </form>
      </section>
    </main>
  `}function Re(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${ie(e,"avatar large")}
            <div><strong>${s(e.full_name)}</strong><span>${s(e.email)}</span></div>
          </div>
          <label>Display name<input name="full_name" value="${s(e.full_name)}" /></label>
          <label>Avatar URL<input name="avatar_url" value="${s(e.avatar_url||"")}" placeholder="https://..." /></label>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Save profile</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `}function Je(e){const t=e.target.closest("[data-action]");if(t){Ie(e,t);return}const a=e.target.closest("[data-select-job]");if(a){e.preventDefault(),xe(a.dataset.selectJob);return}const i=e.target.closest("a[href][data-router]");i&&(i.target||i.hasAttribute("download")||(e.preventDefault(),m(i.getAttribute("href"))))}function Ie(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),n.dataLoaded=!1,n.sync={label:"Refreshing...",mode:"loading"},p();return}if(a==="sign-out"){e.preventDefault(),localStorage.removeItem(R),n.session=null,m("/login",{replace:!0});return}if(a==="open-profile"){e.preventDefault(),n.modal="profile",p();return}if(a==="close-modal"){if(e.preventDefault(),n.modal="",n.route&&n.route.params.get("account")==="profile"){const i=new URLSearchParams(n.route.params);i.delete("account");const o=i.toString();m(n.route.path+(o?`?${o}`:""),{replace:!0});return}p();return}if(a==="reload-task-frame"){e.preventDefault();const i=document.querySelector("[data-task-frame]");i&&(i.src=i.src);return}a==="delete-job"&&(e.preventDefault(),Fe(t.dataset.jobId))}function Pe(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===v.localUsername&&String(t.password||"")===v.localPassword)){n.loginError="Invalid temporary credentials.",p();return}n.loginError="",n.session=Q(),L(R,n.session),m(Z(t.return_url||l("/command")),{replace:!0});return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...y().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};L(B,a),n.profileDraft=a,n.session={...y(),profile:a},L(R,n.session),n.modal="",p();return}e.target.matches("[data-job-form]")&&(e.preventDefault(),Ae(e.target))}function Qe(e){e.target.matches("[data-global-search]")&&(n.query=e.target.value,Te())}function Ue(e){e.target.matches("[data-stage-filter]")&&(n.stageFilter=e.target.value||"all",p())}async function Ae(e){const t=h(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.estimate_total=Number(t.estimate_total||0),t.updated_at=new Date().toISOString();const a=n.jobs.some(o=>o.id===t.id),i=A();if(i){const o={...t},r=a?await i.from("jobs").update(o).eq("id",t.id).select().single():await i.from("jobs").insert(o).select().single();if(!r.error&&r.data){q(h(r.data)),n.sync={label:"Supabase live",mode:"live"},m("/jobs?tab=profile&job_id="+encodeURIComponent(r.data.id),{replace:!0});return}n.sync={label:"Saved locally",mode:"local"}}q(t),m("/jobs?tab=profile&job_id="+encodeURIComponent(t.id),{replace:!0})}async function Fe(e){if(!e)return;const t=A();t&&await t.from("jobs").delete().eq("id",e),n.jobs=n.jobs.filter(a=>a.id!==e),n.selectedJobId=n.jobs[0]?.id||"",E(),m("/jobs?tab=list",{replace:!0})}function q(e){const t=n.jobs.findIndex(a=>a.id===e.id);t>=0?n.jobs[t]=e:n.jobs.unshift(e),n.selectedJobId=e.id,E()}function Te(){const e=document.getElementById("workspace");e&&(ee(n.route),e.innerHTML=Y(n.route))}function F(){const e=T(),t=new URLSearchParams(window.location.search),a=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(a)return t.set("job_id",a[1]),t.set("tab","tasks"),{name:"jobs",path:e,params:t,tab:"tasks",jobId:a[1]};const o={"/":"command","/command":"command","/jobs":"jobs","/files":"files","/forms":"forms","/analytics":"analytics","/admin":"admin","/time":"time","/team":"team","/approvals":"approvals","/clock":"clock","/crm":"crm","/finance":"finance","/knowledge":"knowledge","/automations":"automations","/tickets":"tickets","/templates":"templates","/login":"login"}[e]||"command";return{name:o,path:e,params:t,tab:o==="jobs"?X(t.get("tab")):"",jobId:t.get("job_id")||""}}function De(){const e=T(),t=new URLSearchParams(window.location.search);let i={"/index.html":"/command","/admin.html":"/admin","/automations.html":"/automations","/crm.html":"/crm","/dashboards.html":"/analytics","/files.html":"/files","/finance.html":"/finance","/forms.html":"/forms","/jobs.html":"/jobs","/knowledge.html":"/knowledge","/login.html":"/login","/templates.html":"/templates","/tickets.html":"/tickets"}[e];if(e==="/task-management.html"&&(i="/jobs",t.set("tab","tasks"),t.has("project_id")&&!t.has("job_id")&&t.set("job_id",t.get("project_id")),t.delete("project_id")),!i)return;const o=t.toString();window.history.replaceState({},"",l(i+(o?`?${o}`:"")))}function T(){let e=window.location.pathname||"/";return j&&e.startsWith(j)&&(e=e.slice(j.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function l(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),i=t.startsWith("/")?t:"/"+t;return`${j}${i}${a?`?${a}`:""}`||"/"}function m(e,t={}){const a=e.startsWith(j||"/")?e:l(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),p()}function Me(){return`${T()}${window.location.search}`}function Z(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?l("/command"):`${t.pathname}${t.search}`}catch{return l("/command")}}function Oe(e){return{command:"Operations Command",jobs:"Job Center",files:"File Center",forms:"Forms & Surveys",analytics:"Analytics",admin:"Admin",time:"My Time",team:"Team Workload",approvals:"Approvals",clock:"Clock Dashboard",crm:"CRM",finance:"Finance",knowledge:"Knowledge Base",automations:"Automations",tickets:"Tickets",templates:"Templates",login:"Sign in"}[e.name]||"Operations Command"}function Ee(e,t){const[a,i=""]=t.split("?");if(a==="/jobs"&&e.name==="jobs"){const r=new URLSearchParams(i).get("tab");return r?e.tab===r:e.name==="jobs"&&!["tasks"].includes(e.tab)}const o=Ne(a);return e.name===o}function Ne(e){return He()[e]||"command"}function He(){return{"/command":"command","/jobs":"jobs","/files":"files","/forms":"forms","/analytics":"analytics","/admin":"admin","/time":"time","/team":"team","/approvals":"approvals","/clock":"clock","/crm":"crm","/finance":"finance","/knowledge":"knowledge","/automations":"automations","/tickets":"tickets","/templates":"templates"}}function X(e){return K.includes(e)?e:"pipeline"}function qe(e){return{pipeline:"Pipeline",list:"Job List",profile:"Profile",tasks:"Tasks",files:"Files",forms:"Forms",analytics:"Analytics",editor:"Editor"}[e]||e}function ee(e){e.jobId&&n.jobs.some(t=>t.id===e.jobId)&&(n.selectedJobId=e.jobId),(!n.selectedJobId||!n.jobs.some(t=>t.id===n.selectedJobId))&&(n.selectedJobId=n.jobs[0]?.id||"")}function xe(e){if(!n.jobs.some(i=>i.id===e))return;n.selectedJobId=e;const t=n.route||F(),a=t.name==="jobs"?t.tab:"profile";m("/jobs?"+new URLSearchParams({tab:a,job_id:e}).toString())}function D(){return te(n.selectedJobId)||n.jobs[0]||null}function te(e){return n.jobs.find(t=>t.id===e)||null}function ae(){const e=n.query.trim().toLowerCase();return n.jobs.filter(t=>n.stageFilter!=="all"&&t.stage!==n.stageFilter?!1:e?[t.name,t.client_name,t.contact_name,t.owner_name,t.site_address,t.job_type,S(t.company_id)].some(a=>String(a||"").toLowerCase().includes(e)):!0)}function h(e){return{id:String(e.id||""),company_id:String(e.company_id||M()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:k.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:$(e.estimate_total),invoice_total:$(e.invoice_total),task_count:$(e.task_count),file_count:$(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function We(){return h({id:"",company_id:M(),name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function M(){return n.companies[0]?.id||J[0].id}function S(e){const t=n.companies.find(a=>a.id===e)||J.find(a=>a.id===e);return t?t.short_name||t.name||t.id:e||"Company"}function y(){return n.session?{...n.session,profile:{...Q().profile,...n.session.profile||{},...n.profileDraft||{}}}:Q()}function Q(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",company_ids:["roofing","drafting","lumen"],avatar_url:"",...n.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:v.localUsername,email:e.email},profile:e}}function b(e,t,a=""){return`
    <section class="page-head">
      <div>
        <div class="eyebrow">Quest HQ</div>
        <h1>${s(e)}</h1>
        <p>${s(t)}</p>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function O(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric"><span>${s(t)}</span><strong>${s(a)}</strong></article>`).join("")}</section>`}function ne(e){return`
    <button class="queue-row" type="button" data-select-job="${s(e.id)}">
      <span><strong>${s(e.name)}</strong><small>${s(e.client_name||S(e.company_id))}</small></span>
      ${se(e.priority)}
      <b>${s(e.stage)}</b>
    </button>
  `}function Be(e){return`
    <button class="job-card priority-${s(e.priority.toLowerCase())} ${e.id===n.selectedJobId?"active":""}" type="button" data-select-job="${s(e.id)}">
      <strong>${s(e.name)}</strong>
      <span>${s(e.client_name||"No client")}</span>
      <small>${s(S(e.company_id))} - ${s(e.owner_name||"Unassigned")}</small>
      <em>${s(e.task_count)} tasks</em>
    </button>
  `}function ze(e,t,a){const i=["Photos","PDF","Drawing","Contract"];return`
    <article class="file-tile">
      <div><i class="ti ti-file-${a===0?"photo":"description"}"></i></div>
      <strong>${s(e)}</strong>
      <span>${s(i[a]||"Document")} - ${s(t.name)}</span>
    </article>
  `}function u(e,t,a,i){return`
    <a class="mini-link" href="${l(e)}" data-router>
      <i class="ti ${s(t)}"></i>
      <span><strong>${s(a)}</strong><small>${s(i)}</small></span>
    </a>
  `}function _(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${s(t)}</span><strong>${s(a)}</strong></div>`).join("")}</div>`}function Ke(){const e=n.jobs[0];return[["Supabase status",n.sync.mode==="live"?"Live jobs loaded from the Quest HQ project.":"Using local fallback job records."],["Priority review",`${n.jobs.find(t=>t.priority==="Urgent")?.name||e?.name||"No urgent job"} is first in the operations queue.`],["TaskManagement ready",`${f(n.jobs,"task_count")} linked tasks represented through project_id.`],["Shell ownership","Time, team workload, approvals, clock dashboard, profile, and roles render in Quest HQ."]]}function g(e,t,a="",i=!1,o="text",r=""){return`<label class="${s(r)}"><span>${s(e)}</span><input name="${s(t)}" type="${s(o)}" value="${s(a)}" ${i?"required":""} /></label>`}function x(e,t,a="",i=""){return`<label class="${s(i)}"><span>${s(e)}</span><textarea name="${s(t)}" rows="4">${s(a)}</textarea></label>`}function I(e,t,a,i){return`
    <label><span>${s(e)}</span><select name="${s(t)}">
      ${i.map(([o,r])=>`<option value="${s(o)}" ${o===a?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function se(e){return`<span class="priority ${s(e.toLowerCase())}">${s(e)}</span>`}function ie(e,t){if(e.avatar_url)return`<span class="${s(t)}"><img src="${s(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${s(t)}">${s(a)}</span>`}function d(e){return`<div class="empty-state">${s(e)}</div>`}function W(e,t=!0){const a=new URLSearchParams({return_url:window.location.href});return t&&a.set("embed","1"),e&&e.id&&a.set("project_id",e.id),`${l("/taskmanagement/app.html")}?${a.toString()}`}function E(){L(z,n.jobs)}function f(e,t){return e.reduce((a,i)=>a+$(i[t]),0)}function $(e){const t=Number(e);return Number.isFinite(t)?t:0}function N(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format($(e))}function P(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function L(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
