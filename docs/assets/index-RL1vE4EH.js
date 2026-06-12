(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}})();const A={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},q=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),W="quest-hq-local-session",ve="quest-hq-local-profile",$e="quest-hq-job-cache-v2",we="quest-hq-task-cache-v1",ke="quest-hq-file-cache-v1",je="quest-hq-team-cache-v1",Se="quest-hq-company-membership-cache-v1",X="quest-hq-active-company",Ce="quest-hq-task-view",De="quest-hq-drive-view",ee=["Lead","Site Review","Estimate","Approved","Active","Closed"],Ie=["pipeline","list","profile","editor"],te=["todo","pending","hold","review","done"],V=["critical","urgent","high","medium","low"],Le=["lead","bid","admin","invoicing","ar","meeting","web_dev"],K=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],Q=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],We=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],Ve=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"]},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"]},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"]},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"]},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"]}],Ke=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],Ye=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:C(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:C(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:C(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:C(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:C(5),priority:"medium",urgency:"medium",status:"todo"}],Ge=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],s={route:null,session:L(W,null),profileDraft:L(ve,null),jobs:L($e,We).map(O),tasks:L(we,Ye).map(U),files:L(ke,Ge).map(Y),teamMembers:L(je,Ve).map(Qe),memberships:L(Se,Ke),companies:Q,activeCompanyId:localStorage.getItem(X)||"",selectedJobId:"",selectedTaskId:"",query:"",stageFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",taskView:localStorage.getItem(Ce)||"table",driveFolder:"home",driveView:localStorage.getItem(De)||"grid",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",modal:""},Pe=document.getElementById("app");Ze();function Ze(){Jt(),window.addEventListener("popstate",f),document.addEventListener("click",St),document.addEventListener("submit",Dt),document.addEventListener("input",It),document.addEventListener("change",Lt),f()}function f(){if(s.route=Fe(),Xe(s.route)){m("/login?return_url="+encodeURIComponent(Nt()),{replace:!0});return}if(s.route.name==="login"){kt();return}et();const e=Rt(s.route);if(e){m(e,{replace:!0});return}zt(s.route),qe(s.route),s.route.params.get("account")==="profile"&&(s.modal="profile"),document.title=`${Ot(s.route)} | ${u(c())} | Quest HQ`,Pe.innerHTML=at(s.route,Ae(s.route))}function Xe(e){return e.name==="login"?!1:!s.session}function et(){s.dataLoaded||s.dataLoading||(s.dataLoading=!0,tt().catch(()=>{s.sync={label:"Local fallback",mode:"local"}}).finally(()=>{s.dataLoaded=!0,s.dataLoading=!1,R(),f()}))}async function tt(){const e=J();if(!e){s.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,i,n,l,p]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*")]);let v=0;t.error||(s.companies=t.data?.length?t.data.map(Vt):Q,v+=1),a.error||(s.jobs=(a.data||[]).map(O),v+=1),i.error||(s.tasks=(i.data||[]).map(U),v+=1),n.error||(s.files=(n.data||[]).map(Y),v+=1),l.error||(s.teamMembers=(l.data||[]).map(Qe),v+=1),p.error||(s.memberships=(p.data||[]).map(Kt),v+=1),s.sync=v?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function J(){return!window.supabase||typeof window.supabase.createClient!="function"?null:window.supabase.createClient(A.supabaseUrl,A.supabaseKey)}function at(e,t){const a=I(),i=c();return`
    <div class="quest-app" data-route="${r(e.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${d(o("jobs",{},i))}" data-router aria-label="Quest HQ workspace">
            <i class="ti ti-bolt"></i>
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${r(A.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            <i class="ti ti-building"></i>
            <select data-company-switch aria-label="Active company">
              ${Ne().map(n=>`<option value="${r(n.id)}" ${n.id===i?"selected":""}>${r(le(n))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            <i class="ti ti-search" aria-hidden="true"></i>
            <input data-global-search value="${r(s.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${r(s.sync.mode)}" data-sync-state>${r(s.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          <a class="btn btn-primary" href="${d(o("tasks",{new:"1"},i))}" data-router><i class="ti ti-plus"></i>New task</a>
          <div class="account-menu">
            <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open Quest profile">
              ${pe(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${r(a.profile.full_name)}</strong>
              <span>${r(a.profile.role_label)} - ${r(u(i))}</span>
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${it(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${s.modal==="profile"?jt(a.profile):""}
    ${s.modal==="file-upload"?yt():""}
  `}function it(e){const t=c(),a=b(t),i=E(t),n=re(t),l=T(t);return`
    <div class="company-card">
      <span style="background:${r(Oe(t))}"></span>
      <strong>${r(u(t))}</strong>
      <small>${r(de(t))} workspace</small>
    </div>
    ${ie("Workspace",[k(e,o("jobs",{},t),"ti-briefcase","Jobs",a.length),k(e,o("tasks",{},t),"ti-list-check","Tasks",i.length),k(e,o("files",{},t),"ti-folder","Files",n.length),k(e,o("forms",{},t),"ti-clipboard-list","Forms"),k(e,o("analytics",{},t),"ti-chart-bar","Dashboard")])}
    ${ie("Company",[k(e,o("users",{},t),"ti-users","Users",l.length),k(e,o("settings",{},t),"ti-settings","Settings")])}
    ${ie("Operations",[k(e,o("time",{},t),"ti-clock","My time","3.3h"),k(e,o("approvals",{},t),"ti-user-check","Approvals",0)])}
  `}function ie(e,t){return`
    <section class="side-group">
      <div class="side-label">${r(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function k(e,t,a,i,n=""){return`
    <a class="side-item ${Ut(e,t)?"active":""}" href="${d(t)}" data-router>
      <i class="ti ${r(a)}"></i>
      <span>${r(i)}</span>
      ${n!==""?`<b>${r(String(n))}</b>`:""}
    </a>
  `}function Ae(e){if(e.name==="command")return me(c());if(e.name!=="company")return fe(e.name);const t=e.companyId;return e.section==="jobs"?st(e,t):e.section==="tasks"?dt(e,t):e.section==="files"?bt(e,t):e.section==="users"?ht(t):e.section==="settings"?vt(t):e.section==="forms"?$t(t):e.section==="analytics"?me(t):e.section==="time"||e.section==="approvals"?wt(e.section,t):fe(e.section)}function me(e){const t=b(e),a=E(e),i=a.filter(l=>["critical","urgent"].includes(l.priority)),n=re(e);return`
    ${j("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${d(o("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${d(o("tasks",{new:"1"},e))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${ea([["Jobs",t.length],["Open tasks",a.filter(l=>l.status!=="done").length],["Urgent tasks",i.length],["Drive files",n.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${d(o("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(l=>ze(l)).join("")||_("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${F([["Company",u(e)],["Visible users",T(e).length],["Auth mode","Local basic gate"],["RLS status","Prepared, not enforced"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(l=>ta(l)).join("")||_("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function st(e,t){const a=Mt(e.params.get("tab")),i=Wt();return`
    ${j("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${d(o("files",i?{job_id:i.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <a class="btn btn-primary" href="${d(o("jobs",{tab:"editor",...i?{job_id:i.id}:{}},t))}" data-router><i class="ti ti-plus"></i>Add job</a>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(ee).map(n=>`<option value="${r(n)}" ${s.stageFilter===n?"selected":""}>${r(n==="all"?"All stages":n)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${i?r(i.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${Ie.map(n=>`<a class="${n===a?"active":""}" href="${d(o("jobs",{tab:n,...i?{job_id:i.id}:{}},t))}" data-router>${r(Qt(n))}</a>`).join("")}
    </nav>
    ${nt(a,t,i)}
  `}function nt(e,t,a){return e==="pipeline"?ue(t):e==="list"?rt(t):e==="profile"?ot(t,a):e==="editor"?lt(t,a):ue(t)}function ue(e){const t=Je(e);return`
    <section class="job-board">
      ${ee.map(a=>{const i=t.filter(n=>n.stage===a);return`
          <article class="job-lane">
            <h2><span>${r(a)}</span><b>${i.length}</b></h2>
            ${i.map(n=>aa(n)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function rt(e){const t=Je(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===s.selectedJobId?"active":""}" type="button" data-select-job="${r(a.id)}">
            <span><strong>${r(a.name)}</strong><small>${r(a.client_name||"No client")} - ${r(a.site_address||"No address")}</small></span>
            <span>${r(a.stage)}</span>
            <span>${xe(a.priority)}</span>
            <span>${r(a.owner_name||"Unassigned")}</span>
            <span>${r(ce(a.id))}</span>
            <span>${Be(a.estimate_total)}</span>
          </button>
        `).join("")||_("No jobs match this view.")}
      </div>
    </section>
  `}function ot(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${r(u(e))} - ${r(t.job_type)}</span>
          <h2>${r(t.name)}</h2>
          <p>${r(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${F([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",Be(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${d(o("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <a class="btn" href="${d(o("jobs",{tab:"editor",job_id:t.id},e))}" data-router>Edit job</a>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${H(o("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${ce(t.id)} linked tasks`)}
          ${H(o("files",{job_id:t.id},e),"ti-folder","Files",`${Me(t.id)} files`)}
          ${H(o("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${H(o("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:_("Create a job to see the profile workspace.")}function lt(e,t){const a=t||Yt(e);return`
    <form class="panel job-editor" data-job-form>
      <input type="hidden" name="id" value="${r(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${$("Workspace name","name",a.name,!0)}
      ${w("Company","company_id",e,Ne().map(i=>[i.id,le(i)]))}
      ${$("Client","client_name",a.client_name)}
      ${$("Contact","contact_name",a.contact_name)}
      ${$("Account owner","owner_name",a.owner_name)}
      ${$("Job type","job_type",a.job_type||"Roofing")}
      ${w("Business status","stage",a.stage||"Lead",ee.map(i=>[i,i]))}
      ${w("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(i=>[i,i]))}
      ${$("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${$("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${G("Scope","scope",a.scope,"span-2")}
      ${G("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${r(t.id)}">Delete</button>`:""}
      </div>
    </form>
  `}function dt(e,t){const a=e.jobId?h(e.jobId):null,i=e.params.get("task_id")||s.selectedTaskId,n=i?Ee(i):ye(t,a?.id)[0]||null,l=e.params.get("new")==="1"||e.params.get("edit")==="1",p=ye(t,a?.id);return`
    ${j(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${d(o("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${d(o("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${ct(t,a)}
    <section class="task-layout ${l?"editing":""}">
      <article class="panel task-main">
        ${s.taskView==="board"?mt(t,p):pt(t,p)}
      </article>
      <aside class="panel detail-panel">
        ${l?ft(t,a,e.params.get("edit")==="1"?n:null):ut(t,n)}
      </aside>
    </section>
  `}function ct(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${b(e).map(i=>`<option value="${r(i.id)}" ${t?.id===i.id?"selected":""}>${r(i.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(te).map(i=>`<option value="${r(i)}" ${s.taskStatusFilter===i?"selected":""}>${r(i==="all"?"All statuses":N(i))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(V).map(i=>`<option value="${r(i)}" ${s.taskPriorityFilter===i?"selected":""}>${r(i==="all"?"All priorities":y(i))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${s.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${s.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function pt(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===s.selectedTaskId?"active":""}" type="button" data-select-task="${r(a.id)}">
          <span><strong>${r(a.title)}</strong><small>${r(a.description||ae(a.type))}</small></span>
          <span>${r(h(a.project_id)?.name||"Company task")}</span>
          <span>${r(x(a.assignee_id))}</span>
          <span>${He(a.priority)}</span>
          <span>${ia(a.status)}</span>
          <span>${M(a.due)}</span>
        </button>
      `).join("")||_("No tasks match this workspace view.")}
    </div>
  `}function mt(e,t){return`
    <div class="task-board">
      ${te.map(a=>{const i=t.filter(n=>n.status===a);return`
          <section class="task-column">
            <h2><span>${r(N(a))}</span><b>${i.length}</b></h2>
            ${i.map(n=>`
              <button class="task-card priority-${r(n.priority)}" type="button" data-select-task="${r(n.id)}">
                <strong>${r(n.title)}</strong>
                <span>${r(h(n.project_id)?.name||u(e))}</span>
                <small>${r(x(n.assignee_id))} - ${M(n.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function ut(e,t){return t?`
    <div class="section-head">
      <div><h2>${r(t.title)}</h2><p>${r(h(t.project_id)?.name||u(e))}</p></div>
      <a class="btn" href="${d(o("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${F([["Status",N(t.status)],["Priority",y(t.priority)],["Type",ae(t.type)],["Assignee",x(t.assignee_id)],["Due",M(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${r(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${_("No task selected.")}
    `}function ft(e,t,a){const i=a||Gt(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${r(a?i.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${$("Task title","title",i.title,!0)}
      ${w("Job","project_id",i.project_id||"",[["","Company-level task"]].concat(b(e).map(n=>[n.id,n.name])))}
      ${w("Status","status",i.status,te.map(n=>[n,N(n)]))}
      ${w("Priority","priority",i.priority,V.map(n=>[n,y(n)]))}
      ${w("Type","type",i.type,Le.map(n=>[n,ae(n)]))}
      ${w("Assignee","assignee_id",i.assignee_id,T(e).map(n=>[n.id,x(n.id)]))}
      ${$("Due date","due",i.due||C(1),!0,"date")}
      ${G("Description","description",i.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${r(a.id)}">Delete</button>`:""}
        <a class="btn" href="${d(o("tasks",{...i.project_id?{job_id:i.project_id}:{}},e))}" data-router>Cancel</a>
      </div>
    </form>
  `}function bt(e,t){const a=e.params.get("folder")||s.driveFolder||"home",i=e.jobId?h(e.jobId):null,n=Re(t,a,i?.id);return`
    ${j(i?`${i.name} files`:"Company Drive","Company-scoped file manager for shared and job-linked documents.",`
      <button class="btn" type="button" data-action="open-file-upload"><i class="ti ti-upload"></i>Upload</button>
      <a class="btn btn-primary" href="${d(o("jobs",{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
    `)}
    <section class="drive-toolbar">
      <nav class="breadcrumbs" aria-label="Drive location">
        <a href="${d(o("files",{},t))}" data-router>${r(u(t))}</a>
        ${a!=="home"?`<span>/</span><a href="${d(o("files",{folder:a},t))}" data-router>${r(Z(a))}</a>`:""}
        ${i?`<span>/</span><strong>${r(i.name)}</strong>`:""}
      </nav>
      <div class="segmented" role="group" aria-label="Drive view">
        <button class="${s.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Grid</button>
        <button class="${s.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list"></i>List</button>
      </div>
    </section>
    ${a==="home"&&!i?gt(t):_t(t,n)}
  `}function gt(e){const t=b(e);return`
    <section class="drive-grid">
      ${K.map(([a,i,n,l])=>`
        <a class="folder-tile" href="${d(o("files",{folder:a},e))}" data-router>
          <i class="ti ${r(l)}"></i>
          <strong>${r(i)}</strong>
          <span>${r(n)}</span>
          <small>${r(Re(e,a).length)} files</small>
        </a>
      `).join("")}
    </section>
    <section class="panel top-gap">
      <div class="section-head"><div><h2>Job folders</h2><p>Each job keeps its files under the same company drive.</p></div></div>
      <div class="folder-grid">
        ${t.map(a=>`
          <a class="folder-card" href="${d(o("files",{folder:"jobs",job_id:a.id},e))}" data-router>
            <i class="ti ti-folder"></i>
            <strong>${r(a.name)}</strong>
            <span>${r(a.client_name||u(e))}</span>
            <small>${Me(a.id)} files</small>
          </a>
        `).join("")||_("No job folders yet.")}
      </div>
    </section>
  `}function _t(e,t){return s.driveView==="list"?`
      <section class="panel">
        <div class="data-table drive-list">
          <div class="table-head"><span>Name</span><span>Folder</span><span>Job</span><span>Owner</span><span>Size</span><span>Updated</span></div>
          ${t.map(a=>`
            <div class="table-row">
              <span><strong>${r(a.file_name)}</strong><small>${r(a.mime_type)}</small></span>
              <span>${r(Z(a.folder))}</span>
              <span>${r(h(a.job_id)?.name||"Company shared")}</span>
              <span>${r(a.uploaded_by_label||"Quest HQ")}</span>
              <span>${he(a.size_bytes)}</span>
              <span>${M(a.created_at)}</span>
            </div>
          `).join("")||_("No files in this location yet.")}
        </div>
      </section>
    `:`
    <section class="drive-grid">
      ${t.map(a=>`
        <article class="file-card">
          <i class="ti ${r(na(a))}"></i>
          <strong>${r(a.file_name)}</strong>
          <span>${r(h(a.job_id)?.name||Z(a.folder))}</span>
          <small>${he(a.size_bytes)} - ${M(a.created_at)}</small>
        </article>
      `).join("")||_("No files in this location yet.")}
    </section>
  `}function yt(){const e=c();return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">Company Drive</div><h2 id="upload-title">Upload entry</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-file-form>
          <div class="notice">This pass creates the company-scoped file record. Binary storage upload is the next wire-up step once auth/RLS is enabled.</div>
          ${$("File name","file_name","",!0)}
          ${w("Folder","folder",s.driveFolder==="home"?"shared":s.driveFolder,K.map(([t,a])=>[t,a]))}
          ${w("Job","job_id",s.route?.jobId||"",[["","Company shared file"]].concat(b(e).map(t=>[t.id,t.name])))}
          ${w("Category","category","Shared",K.map(([t,a])=>[a,a]))}
          ${$("Size bytes","size_bytes",0,!1,"number")}
          ${G("Notes","notes","")}
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Save file record</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `}function ht(e){const t=T(e);return`
    ${j("Users","Company members, roles, workers, and access context.",`
      <a class="btn btn-primary" href="${d(o("settings",{},e))}" data-router><i class="ti ti-settings"></i>Settings</a>
    `)}
    <section class="users-grid">
      ${t.map(a=>`
        <article class="user-card">
          ${pe({full_name:a.full_name,avatar_url:a.avatar_url},"avatar")}
          <div>
            <strong>${r(a.full_name)}</strong>
            <span>${r(a.email)}</span>
            <small>${r(Ue(e,a.id))}</small>
          </div>
        </article>
      `).join("")||_("No users assigned to this company yet.")}
    </section>
    <section class="panel top-gap">
      <div class="section-head"><div><h2>Membership model</h2><p>company_memberships is the canonical table; legacy company_ids remain as backfill fields.</p></div></div>
      ${F([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Client-filtered only while auth is disabled"],["Active role",de(e)]])}
    </section>
  `}function vt(e){const t=oe(e);return`
    ${j("Settings","Company settings, roles, approvals, and admin controls.","")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${F([["Name",u(e)],["Company ID",e],["Color",t?.color||Oe(e)],["Visible jobs",b(e).length]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Prepared for Supabase Auth and RLS.</p></div></div>
        ${F([["Auth switch","Disabled"],["Local login","Enabled"],["Isolation","Client-filtered only"],["Memberships",String(s.memberships.filter(a=>a.company_id===e).length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Approvals</h2><p>Quest-owned access approval queue.</p></div></div>
        ${_("No pending company approvals.")}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${T(e).map(a=>`<div><strong>${r(a.full_name)}</strong><span>${r(Ue(e,a.id))}</span></div>`).join("")||_("No workers assigned.")}
        </div>
      </article>
    </section>
  `}function $t(e){const t=["Inspection checklist","Client approval","Final walkthrough","Internal request intake","Safety form","Warranty handoff"];return`
    ${j("Forms","Company forms and survey response surfaces.","")}
    <section class="forms-layout">
      <article class="panel">
        <div class="section-head"><div><h2>Template library</h2><p>Company-scoped templates ready for form table wiring.</p></div></div>
        <div class="card-grid">
          ${t.map((a,i)=>`<article class="mini-card"><strong>${r(a)}</strong><span>${i%2?"Draft":"Published"}</span><small>${r(u(e))}</small></article>`).join("")}
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Response queue</h2><p>Recent job-linked responses.</p></div></div>
        <div class="activity-list">
          ${b(e).slice(0,4).map(a=>`<div><strong>${r(a.name)}</strong><span>Response workspace ready.</span></div>`).join("")||_("No jobs available.")}
        </div>
      </aside>
    </section>
  `}function wt(e,t){const a={time:["My time","Personal time and shift context inside the company workspace."],approvals:["Approvals","Company access approvals and role requests."]},[i,n]=a[e]||a.time;return`
    ${j(i,n,"")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Summary</h2><p>Quest-owned operational surface.</p></div></div>
        ${F([["Company",u(t)],["Visible jobs",b(t).length],["Open tasks",E(t).filter(l=>l.status!=="done").length],["Mode","Local basic mode"]])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Workload queue</h2><p>Sorted by active company and urgency.</p></div></div>
        <div class="queue-list">${E(t).slice(0,8).map(l=>ze(l)).join("")||_("No tasks found.")}</div>
      </article>
    </section>
  `}function fe(e){return`
    ${j(y(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${_("Module data model pending.")}
    </section>
  `}function kt(){document.title="Sign in | Quest HQ";const e=Te(s.route.params.get("return_url")||d(o("jobs",{},g())));Pe.innerHTML=`
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
          <label>Username<input name="username" value="${r(A.localUsername)}" autocomplete="username" /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" /></label>
          <input type="hidden" name="return_url" value="${r(e)}" />
          <button class="btn btn-primary full" type="submit">Sign in</button>
          ${s.loginError?`<div class="form-message error">${r(s.loginError)}</div>`:'<div class="form-message">Temporary credentials: lumen123 / lumen123</div>'}
        </form>
      </section>
    </main>
  `}function jt(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${pe(e,"avatar large")}
            <div><strong>${r(e.full_name)}</strong><span>${r(e.email)}</span></div>
          </div>
          <label>Display name<input name="full_name" value="${r(e.full_name)}" /></label>
          <label>Avatar URL<input name="avatar_url" value="${r(e.avatar_url||"")}" placeholder="https://..." /></label>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Save profile</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `}function St(e){const t=e.target.closest("[data-action]");if(t){Ct(e,t);return}const a=e.target.closest("[data-select-job]");if(a){e.preventDefault(),Ht(a.dataset.selectJob);return}const i=e.target.closest("[data-select-task]");if(i){e.preventDefault(),Bt(i.dataset.selectTask);return}const n=e.target.closest("a[href][data-router]");n&&(n.target||n.hasAttribute("download")||(e.preventDefault(),m(n.getAttribute("href"))))}function Ct(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),s.dataLoaded=!1,s.sync={label:"Refreshing...",mode:"loading"},f();return}if(a==="sign-out"){e.preventDefault(),localStorage.removeItem(W),s.session=null,m("/login",{replace:!0});return}if(a==="open-profile"){e.preventDefault(),s.modal="profile",f();return}if(a==="open-file-upload"){e.preventDefault(),s.modal="file-upload",f();return}if(a==="close-modal"){e.preventDefault(),s.modal="",f();return}if(a==="set-task-view"){e.preventDefault(),s.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(Ce,s.taskView),f();return}if(a==="set-drive-view"){e.preventDefault(),s.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(De,s.driveView),f();return}if(a==="delete-job"){e.preventDefault(),At(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),Tt(t.dataset.taskId))}function Dt(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===A.localUsername&&String(t.password||"")===A.localPassword)){s.loginError="Invalid temporary credentials.",f();return}s.loginError="",s.session=se(),D(W,s.session),m(Te(t.return_url||d(o("jobs",{},g()))),{replace:!0});return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...I().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};D(ve,a),s.profileDraft=a,s.session={...I(),profile:a},D(W,s.session),s.modal="",f();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),Pt(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),Ft(e.target);return}e.target.matches("[data-file-form]")&&(e.preventDefault(),qt(e.target))}function It(e){e.target.matches("[data-global-search]")&&(s.query=e.target.value,Et())}function Lt(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||g();xt(t);return}if(e.target.matches("[data-stage-filter]")){s.stageFilter=e.target.value||"all",f();return}if(e.target.matches("[data-task-status-filter]")){s.taskStatusFilter=e.target.value||"all",f();return}if(e.target.matches("[data-task-priority-filter]")){s.taskPriorityFilter=e.target.value||"all",f();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;m(o("tasks",t?{job_id:t}:{},c()))}}async function Pt(e){const t=O(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||c(),t.estimate_total=Number(t.estimate_total||0),t.updated_at=new Date().toISOString();const a=s.jobs.some(n=>n.id===t.id),i=J();if(i){const n=a?await i.from("jobs").update(t).eq("id",t.id).select().single():await i.from("jobs").insert(t).select().single();if(!n.error&&n.data){be(O(n.data)),s.sync={label:"Quest Supabase live",mode:"live"},m(o("jobs",{tab:"profile",job_id:n.data.id},t.company_id),{replace:!0});return}s.sync={label:"Saved locally",mode:"local"}}be(t),m(o("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function At(e){if(!e)return;const t=c(),a=J();a&&await a.from("jobs").delete().eq("id",e),s.jobs=s.jobs.filter(i=>i.id!==e),s.selectedJobId=b(t)[0]?.id||"",R(),m(o("jobs",{tab:"list"},t),{replace:!0})}async function Ft(e){const t=c(),a=Object.fromEntries(new FormData(e).entries()),i=U({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:I().profile.member_id||T(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),n=s.tasks.some(p=>p.id===i.id),l=J();if(l){const p=Zt(i),v=n?await l.from("tasks").update(p).eq("id",i.id).select().single():await l.from("tasks").insert(p).select().single();if(!v.error&&v.data){ge(U(v.data)),s.sync={label:"Quest Supabase live",mode:"live"},m(o("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0});return}s.sync={label:"Task saved locally",mode:"local"}}ge(i),m(o("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0})}async function Tt(e){if(!e)return;const t=c(),a=J();a&&await a.from("tasks").delete().eq("id",e),s.tasks=s.tasks.filter(i=>i.id!==e),s.selectedTaskId="",R(),m(o("tasks",{},t),{replace:!0})}async function qt(e){const t=c(),a=Object.fromEntries(new FormData(e).entries()),i=Y({id:crypto.randomUUID(),company_id:t,job_id:a.job_id||"",folder:a.folder||"shared",file_name:a.file_name,mime_type:"application/octet-stream",size_bytes:Number(a.size_bytes||0),category:a.category||Z(a.folder||"shared"),notes:a.notes||"",uploaded_by_label:I().profile.full_name,bucket_id:"quest-job-files",object_path:`${t}/${a.folder||"shared"}/${Date.now()}-${ra(a.file_name||"file")}`,created_at:new Date().toISOString()}),n=J();if(n){const l=await n.from("job_files").insert(Xt(i)).select().single();if(!l.error&&l.data){_e(Y(l.data)),s.sync={label:"Quest Supabase live",mode:"live"},s.modal="",m(o("files",{folder:i.folder,...i.job_id?{job_id:i.job_id}:{}},t),{replace:!0});return}s.sync={label:"File record saved locally",mode:"local"}}_e(i),s.modal="",m(o("files",{folder:i.folder,...i.job_id?{job_id:i.job_id}:{}},t),{replace:!0})}function be(e){const t=s.jobs.findIndex(a=>a.id===e.id);t>=0?s.jobs[t]=e:s.jobs.unshift(e),s.selectedJobId=e.id,R()}function ge(e){const t=s.tasks.findIndex(a=>a.id===e.id);t>=0?s.tasks[t]=e:s.tasks.unshift(e),s.selectedTaskId=e.id,R()}function _e(e){const t=s.files.findIndex(a=>a.id===e.id);t>=0?s.files[t]=e:s.files.unshift(e),R()}function Et(){const e=document.getElementById("workspace");e&&(qe(s.route),e.innerHTML=Ae(s.route))}function Fe(){const e=ne(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:c(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const i=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:i,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:c(),jobId:t.get("job_id")||""}}function Jt(){const e=ne(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||B(t.get("job_id")||t.get("project_id"))||localStorage.getItem(X)||g();let n={"/index.html":o("jobs",{},a),"/command.html":o("jobs",{},a),"/admin.html":o("settings",{},a),"/automations.html":o("settings",{},a),"/crm.html":o("users",{},a),"/dashboards.html":o("analytics",{},a),"/files.html":o("files",{},a),"/finance.html":o("analytics",{},a),"/forms.html":o("forms",{},a),"/jobs.html":o("jobs",{},a),"/knowledge.html":o("files",{folder:"shared"},a),"/login.html":"/login","/templates.html":o("forms",{},a),"/tickets.html":o("tasks",{},a)}[e];if(e==="/jobs"){const p=t.get("tab");p==="tasks"?n=o("tasks",S(t,["job_id","task_id","new","edit"]),a):p==="files"?n=o("files",S(t,["job_id","folder"]),a):p==="forms"?n=o("forms",S(t,["job_id"]),a):p==="analytics"?n=o("analytics",S(t,["job_id"]),a):n=o("jobs",S(t,["job_id","tab"]),a)}if(e==="/files"&&(n=o("files",S(t,["job_id","folder"]),a)),e==="/forms"&&(n=o("forms",S(t,["job_id"]),a)),e==="/analytics"&&(n=o("analytics",S(t,["job_id"]),a)),e==="/admin"&&(n=o("settings",{},a)),e==="/time"&&(n=o("time",{},a)),e==="/team"&&(n=o("users",{},a)),e==="/approvals"&&(n=o("approvals",{},a)),e==="/clock"&&(n=o("settings",{},a)),e==="/task-management.html"){const p=t.get("project_id")||t.get("job_id")||"";n=o("tasks",p?{job_id:p}:{},B(p)||a)}const l=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(l){const p=decodeURIComponent(l[1]);n=o("tasks",{job_id:p},B(p)||a)}n&&window.history.replaceState({},"",d(n))}function Rt(e){if(e.name!=="company")return"";const t=z();if(!t.includes(e.companyId))return o(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||g());if(!["jobs","tasks","files","forms","analytics","users","settings","time","approvals"].includes(e.section))return o("jobs",{},e.companyId);const i=e.jobId?B(e.jobId):"";return i&&i!==e.companyId&&t.includes(i)?o(e.section,Object.fromEntries(e.params.entries()),i):""}function ne(){let e=window.location.pathname||"/";return q&&e.startsWith(q)&&(e=e.slice(q.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function d(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),i=t.startsWith("/")?t:"/"+t;return`${q}${i}${a?`?${a}`:""}`||"/"}function m(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(q+"/")||q===""&&e.startsWith("/")?e:d(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),f()}function Nt(){return`${ne()}${window.location.search}`}function Te(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?d(o("jobs",{},g())):`${t.pathname}${t.search}`}catch{return d(o("jobs",{},g()))}}function o(e="jobs",t={},a=c()){const i=new URLSearchParams(t);for(const[n,l]of[...i.entries()])(l==null||l==="")&&i.delete(n);return`/company/${encodeURIComponent(a||g())}/${e}${i.toString()?`?${i.toString()}`:""}`}function Ot(e){return e.name==="company"?y(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":y(e.name||"Workspace")}function Ut(e,t){const[a]=t.split("?"),i=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!i||e.name!=="company"?!1:e.companyId===decodeURIComponent(i[1])&&e.section===i[2]}function Mt(e){return Ie.includes(e)?e:"pipeline"}function Qt(e){return{pipeline:"Pipeline",list:"List",profile:"Profile",editor:"Editor"}[e]||e}function zt(e){const t=e.companyId||s.activeCompanyId||g(),a=z();s.activeCompanyId=a.includes(t)?t:a[0]||g(),localStorage.setItem(X,s.activeCompanyId)}function qe(e){const t=c();e.jobId&&b(t).some(i=>i.id===e.jobId)&&(s.selectedJobId=e.jobId),(!s.selectedJobId||!b(t).some(i=>i.id===s.selectedJobId))&&(s.selectedJobId=b(t)[0]?.id||"");const a=e.params.get("task_id");a&&E(t).some(i=>i.id===a)&&(s.selectedTaskId=a),e.section!=="tasks"&&(s.selectedTaskId=""),s.driveFolder=e.params.get("folder")||"home"}function xt(e){const t=z(),a=t.includes(e)?e:t[0]||g();s.activeCompanyId=a,localStorage.setItem(X,a);const i=s.route||Fe(),n=i.name==="company"?i.section:"jobs";m(o(n,{},a))}function Ht(e){const t=h(e);t&&(s.selectedJobId=e,m(o("jobs",{tab:"profile",job_id:e},t.company_id)))}function Bt(e){const t=Ee(e);t&&(s.selectedTaskId=e,m(o("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function Wt(){return h(s.selectedJobId)||b(c())[0]||null}function h(e){return s.jobs.find(t=>t.id===e)||null}function Ee(e){return s.tasks.find(t=>t.id===e)||null}function b(e=c()){return s.jobs.filter(t=>t.company_id===e)}function E(e=c()){return s.tasks.filter(t=>t.company_id===e)}function re(e=c()){return s.files.filter(t=>t.company_id===e)}function T(e=c()){return s.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function Je(e=c()){const t=s.query.trim().toLowerCase();return b(e).filter(a=>s.stageFilter!=="all"&&a.stage!==s.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,u(a.company_id)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function ye(e=c(),t=""){const a=s.query.trim().toLowerCase();return E(e).filter(i=>t&&i.project_id!==t||s.taskStatusFilter!=="all"&&i.status!==s.taskStatusFilter||s.taskPriorityFilter!=="all"&&i.priority!==s.taskPriorityFilter?!1:a?[i.title,i.description,ae(i.type),x(i.assignee_id),h(i.project_id)?.name].some(n=>String(n||"").toLowerCase().includes(a)):!0)}function Re(e=c(),t="home",a=""){const i=s.query.trim().toLowerCase();return re(e).filter(n=>a&&n.job_id!==a||!a&&t&&t!=="home"&&t!=="jobs"&&n.folder!==t||!a&&t==="jobs"&&!n.job_id?!1:i?[n.file_name,n.category,n.uploaded_by_label,h(n.job_id)?.name].some(l=>String(l||"").toLowerCase().includes(i)):!0)}function Ne(){const e=z();return s.companies.filter(t=>e.includes(t.id))}function z(){const e=I().profile,t=s.companies.map(n=>n.id);if(["developer","admin"].includes(e.role))return t.length?t:Q.map(n=>n.id);const a=s.memberships.filter(n=>n.profile_id===e.id&&n.status!=="disabled").map(n=>n.company_id);return(a.length?a:e.company_ids||[]).filter(n=>t.includes(n))}function c(){const e=z();return e.includes(s.activeCompanyId)?s.activeCompanyId:e[0]||g()}function g(){return Q[0].id}function oe(e){return s.companies.find(t=>t.id===e)||Q.find(t=>t.id===e)||null}function u(e){const t=oe(e);return t?le(t):e||"Company"}function le(e){return e.short_name||e.label||e.name||e.id}function Oe(e){return oe(e)?.color||"#f0b23b"}function B(e){return s.jobs.find(t=>t.id===e)?.company_id||""}function de(e){const t=I().profile;return["developer","admin"].includes(t.role)?y(t.role):y(s.memberships.find(a=>a.company_id===e&&a.profile_id===t.id)?.role||t.role||"member")}function Ue(e,t){const a=s.memberships.find(i=>i.company_id===e&&(i.member_id===t||i.profile_id===t));return y(a?.role||"member")}function x(e){const t=s.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function ce(e){return s.tasks.filter(t=>t.project_id===e).length}function Me(e){return s.files.filter(t=>t.job_id===e).length}function Vt(e){return{id:String(e.id||"").trim(),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function O(e){return{id:String(e.id||""),company_id:String(e.company_id||g()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:ee.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:P(e.estimate_total),invoice_total:P(e.invoice_total),task_count:P(e.task_count),file_count:P(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function U(e){const t=V.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=te.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:Le.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:String(e.company_id||g()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||C(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:V.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function Y(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:String(e.company_id||g()),job_id:String(e.job_id||""),folder:String(e.folder||sa(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:P(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Qe(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,company_ids:Array.isArray(e.company_ids)?e.company_ids:[]}}function Kt(e){return{company_id:String(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function Yt(e=c()){return O({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function Gt(e=c(),t=""){return U({id:"",title:"",company_id:e,project_id:t,assignee_id:T(e)[0]?.id||"abraham",creator_id:I().profile.member_id||"abraham",due:C(1),priority:"medium",status:"todo",type:"admin"})}function Zt(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function Xt(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function I(){return s.session?{...s.session,profile:{...se().profile,...s.session.profile||{},...s.profileDraft||{}}}:se()}function se(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",...s.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:A.localUsername,email:e.email},profile:e}}function j(e,t,a=""){return`
    <section class="workspace-head">
      <div>
        <div class="context-line"><span>${r(u(c()))}</span><b>${r(de(c()))}</b></div>
        <h1>${r(e)}</h1>
        <p>${r(t)}</p>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function ea(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric"><span>${r(t)}</span><strong>${r(a)}</strong></article>`).join("")}</section>`}function ta(e){return`
    <button class="queue-row" type="button" data-select-job="${r(e.id)}">
      <span><strong>${r(e.name)}</strong><small>${r(e.client_name||u(e.company_id))}</small></span>
      ${xe(e.priority)}
      <b>${r(e.stage)}</b>
    </button>
  `}function ze(e){return`
    <button class="queue-row" type="button" data-select-task="${r(e.id)}">
      <span><strong>${r(e.title)}</strong><small>${r(h(e.project_id)?.name||u(e.company_id))}</small></span>
      ${He(e.priority)}
      <b>${r(N(e.status))}</b>
    </button>
  `}function aa(e){return`
    <button class="job-card priority-${r(e.priority.toLowerCase())} ${e.id===s.selectedJobId?"active":""}" type="button" data-select-job="${r(e.id)}">
      <strong>${r(e.name)}</strong>
      <span>${r(e.client_name||"No client")}</span>
      <small>${r(u(e.company_id))} - ${r(e.owner_name||"Unassigned")}</small>
      <em>${r(ce(e.id))} tasks</em>
    </button>
  `}function H(e,t,a,i){return`
    <a class="mini-link" href="${d(e)}" data-router>
      <i class="ti ${r(t)}"></i>
      <span><strong>${r(a)}</strong><small>${r(i)}</small></span>
    </a>
  `}function F(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${r(t)}</span><strong>${r(a)}</strong></div>`).join("")}</div>`}function $(e,t,a="",i=!1,n="text",l=""){return`<label class="${r(l)}"><span>${r(e)}</span><input name="${r(t)}" type="${r(n)}" value="${r(a)}" ${i?"required":""} /></label>`}function G(e,t,a="",i=""){return`<label class="${r(i)}"><span>${r(e)}</span><textarea name="${r(t)}" rows="4">${r(a)}</textarea></label>`}function w(e,t,a,i){return`
    <label><span>${r(e)}</span><select name="${r(t)}">
      ${i.map(([n,l])=>`<option value="${r(n)}" ${String(n)===String(a)?"selected":""}>${r(l)}</option>`).join("")}
    </select></label>
  `}function xe(e){return`<span class="priority ${r(String(e).toLowerCase())}">${r(e)}</span>`}function He(e){return`<span class="priority ${r(e)}">${r(y(e))}</span>`}function ia(e){return`<span class="status-pill ${r(e)}">${r(N(e))}</span>`}function pe(e,t){if(e.avatar_url)return`<span class="${r(t)}"><img src="${r(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${r(t)}">${r(a)}</span>`}function _(e){return`<div class="empty-state">${r(e)}</div>`}function S(e,t){const a={};return t.forEach(i=>{const n=e.get(i);n&&(a[i]=n)}),a}function R(){D($e,s.jobs),D(we,s.tasks),D(ke,s.files),D(je,s.teamMembers),D(Se,s.memberships)}function N(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||y(e)}function ae(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||y(e)}function Z(e){return K.find(([t])=>t===e)?.[1]||y(e||"Shared")}function sa(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function na(e){return e.mime_type.includes("image")?"ti-photo":e.mime_type.includes("pdf")?"ti-file-type-pdf":e.mime_type.includes("zip")?"ti-file-zip":"ti-file-description"}function y(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function C(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function M(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function he(e){const t=P(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**i).toFixed(i?1:0)} ${a[i]}`}function ra(e){return String(e).toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function P(e){const t=Number(e);return Number.isFinite(t)?t:0}function Be(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(P(e))}function L(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function D(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
