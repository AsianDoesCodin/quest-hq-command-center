(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const M={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},Y=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),me="quest-hq-local-session",st="quest-hq-local-profile",nt="quest-hq-job-cache-v2",ot="quest-hq-task-cache-v1",rt="quest-hq-file-cache-v1",lt="quest-hq-team-cache-v1",dt="quest-hq-company-membership-cache-v1",ae="quest-hq-company-form-cache-v1",Re="quest-hq-company-form-response-cache-v1",we="quest-hq-active-company",ct="quest-hq-task-view",pt="quest-hq-drive-view",ut="quest-hq-drive-filter",Se=["Lead","Site Review","Estimate","Approved","Active","Closed"],mt=["pipeline","list","profile","editor"],ie=["todo","pending","hold","review","done"],fe=["critical","urgent","high","medium","low"],ft=["lead","bid","admin","invoicing","ar","meeting","web_dev"],bt=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],gt=[["my-drive","My Drive","ti-folder"],["recent","Recent","ti-clock"],["images","Images","ti-photo"],["documents","Documents","ti-file-description"]],ke=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],Ue=["Inspection","Client approval","Intake","Survey","Safety","Internal"],Ee=["Draft","Published","Archived"],je=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],se=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],Mt=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],Jt=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"]},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"]},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"]},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"]},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"]}],xt=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],zt=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:U(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:U(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:U(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:U(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:U(5),priority:"medium",urgency:"medium",status:"todo"}],Ht=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],Bt=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],Vt=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],n={route:null,session:Oe(me,null),profileDraft:Oe(st,null),jobs:N(nt,Mt).map(ee),tasks:N(ot,zt).map(te),files:N(rt,Ht).map(be),forms:N(ae,Bt).map(Ie),formResponses:N(Re,Vt).map(qt),teamMembers:N(lt,Jt).map(It),memberships:N(dt,xt),companies:se,activeCompanyId:localStorage.getItem(we)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",query:"",fileQuery:"",formQuery:"",stageFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(ct)||"table",driveFolder:"home",driveView:localStorage.getItem(pt)||"grid",driveFilter:localStorage.getItem(ut)||"my-drive",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",modal:""},yt=document.getElementById("app");Wt();function Wt(){za(),window.addEventListener("popstate",m),document.addEventListener("click",La),document.addEventListener("submit",Pa),document.addEventListener("input",Oa),document.addEventListener("change",Ra),m()}function m(){if(n.route=vt(),Kt(n.route)){y("/login?return_url="+encodeURIComponent(Ba()),{replace:!0});return}if(n.route.name==="login"){Fa();return}Yt();const e=Ha(n.route);if(e){y(e,{replace:!0});return}Ga(n.route),$t(n.route),n.route.params.get("account")==="profile"&&(n.modal="profile"),document.title=`${Va(n.route)} | ${g(p())} | Quest HQ`,yt.innerHTML=Zt(n.route,ht(n.route))}function Kt(e){return e.name==="login"?!1:!n.session}function Yt(){n.dataLoaded||n.dataLoading||(n.dataLoading=!0,Gt().catch(()=>{n.sync={label:"Local fallback",mode:"local"}}).finally(()=>{n.dataLoaded=!0,n.dataLoading=!1,B(),m()}))}async function Gt(){const e=E();if(!e){n.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,i,o,r,d]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*")]);let c=0;t.error||(n.companies=t.data?.length?t.data.map(ai):se,c+=1),a.error||(a.data?.length&&(n.jobs=a.data.map(ee)),c+=1),i.error||(i.data?.length&&(n.tasks=i.data.map(te)),c+=1),o.error||(o.data?.length&&(n.files=o.data.map(be)),c+=1),r.error||(r.data?.length&&(n.teamMembers=r.data.map(It)),c+=1),d.error||(d.data?.length&&(n.memberships=d.data.map(ii)),c+=1),n.sync=c?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function E(){return!window.supabase||typeof window.supabase.createClient!="function"?null:window.supabase.createClient(M.supabaseUrl,M.supabaseKey)}function Zt(e,t){const a=A(),i=p();return`
    <div class="quest-app" data-route="${s(e.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${f(l("jobs",{},i))}" data-router aria-label="Quest HQ workspace">
            <i class="ti ti-bolt"></i>
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${s(M.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            <i class="ti ti-building"></i>
            <select data-company-switch aria-label="Active company">
              ${kt().map(o=>`<option value="${s(o.id)}" ${o.id===i?"selected":""}>${s(Me(o))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            <i class="ti ti-search" aria-hidden="true"></i>
            <input data-global-search value="${s(n.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${s(n.sync.mode)}" data-sync-state>${s(n.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          <a class="btn btn-primary" href="${f(l("tasks",{new:"1"},i))}" data-router><i class="ti ti-plus"></i>New task</a>
          <div class="account-menu">
            <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open Quest profile">
              ${Be(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${s(a.profile.full_name)}</strong>
              <span>${s(a.profile.role_label)} - ${s(g(i))}</span>
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${Xt(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${n.modal==="profile"?Aa(a.profile):""}
    ${n.modal==="file-upload"?ya():""}
  `}function Xt(e){const t=p(),a=h(t),i=J(t),o=ne(t),r=Z(t),d=z(t);return`
    <div class="company-card">
      <span style="background:${s(G(t))}"></span>
      <strong>${s(g(t))}</strong>
      <small>${s(Je(t))} workspace</small>
    </div>
    ${Ae("Workspace",[L(e,l("jobs",{},t),"ti-briefcase","Jobs",a.length),L(e,l("tasks",{},t),"ti-list-check","Tasks",i.length),L(e,l("files",{},t),"ti-folder","Files",o.length),L(e,l("forms",{},t),"ti-clipboard-list","Forms",r.length),L(e,l("analytics",{},t),"ti-chart-bar","Analytics")])}
    ${Ae("Company",[L(e,l("users",{},t),"ti-users","Users",d.length),L(e,l("settings",{},t),"ti-settings","Settings")])}
    ${Ae("Operations",[L(e,l("time",{},t),"ti-clock","My time","3.3h"),L(e,l("approvals",{},t),"ti-user-check","Approvals",0)])}
  `}function Ae(e,t){return`
    <section class="side-group">
      <div class="side-label">${s(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function L(e,t,a,i,o=""){return`
    <a class="side-item ${Wa(e,t)?"active":""}" href="${f(t)}" data-router>
      <i class="ti ${s(a)}"></i>
      <span>${s(i)}</span>
      ${o!==""?`<b>${s(String(o))}</b>`:""}
    </a>
  `}function ht(e){if(e.name==="command")return ea(p());if(e.name!=="company")return Ye(e.name);const t=e.companyId;return e.section==="jobs"?aa(e,t):e.section==="tasks"?ra(e,t):e.section==="files"?ma(e,t):e.section==="users"?ha(t):e.section==="settings"?va(t):e.section==="forms"?_a(t):e.section==="analytics"?ta(e,t):e.section==="time"||e.section==="approvals"?Ca(e.section,t):Ye(e.section)}function ea(e){const t=h(e),a=J(e),i=a.filter(r=>["critical","urgent"].includes(r.priority)),o=ne(e);return`
    ${H("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${f(l("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${f(l("tasks",{new:"1"},e))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${li([["Jobs",t.length],["Open tasks",a.filter(r=>r.status!=="done").length],["Urgent tasks",i.length],["Drive files",o.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${f(l("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(r=>He(r)).join("")||b("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${x([["Company",g(e)],["Visible users",z(e).length],["Auth mode","Local basic gate"],["RLS status","Prepared, not enforced"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(r=>di(r)).join("")||b("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function ta(e,t){const a=e.jobId?_(e.jobId):null,i=a?[a]:h(t),o=J(t).filter(u=>!a||u.project_id===a.id),r=ne(t).filter(u=>!a||u.job_id===a.id),d=Z(t).filter(u=>!a||u.linked_job_id===a.id),c=o.filter(u=>u.status!=="done"),D=o.filter(u=>u.status!=="done"&&u.due&&new Date(u.due)<Ri()),j=Nt(i,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${s(a?a.name:g(t))}</span>
        </div>
        <label>
          <span>Job</span>
          <select data-analytics-job-filter>
            <option value="">All jobs</option>
            ${h(t).map(u=>`<option value="${s(u.id)}" ${a?.id===u.id?"selected":""}>${s(u.name)}</option>`).join("")}
          </select>
        </label>
        <a class="btn" href="${f(l("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      </section>
      <section class="analytics-grid">
        <article class="panel analytics-score">
          <span>Open work</span>
          <strong>${s(c.length)}</strong>
          <small>${s(D.length)} overdue / ${s(o.filter(u=>u.priority==="urgent"||u.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${s($e(j))}</strong>
          <small>${s(i.length)} visible job${i.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${s(r.length+d.length)}</strong>
          <small>${s(r.length)} files / ${s(d.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${s(Ui(o.filter(u=>u.status==="done").length,o.length))}</strong>
          <small>${s(o.filter(u=>u.status==="done").length)} done of ${s(o.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${i.map(u=>`
              <a class="analytics-row" href="${f(l("analytics",{job_id:u.id},t))}" data-router>
                <span><strong>${s(u.name)}</strong><small>${s(u.client_name||g(t))}</small></span>
                <span>${s(u.stage)}</span>
                <span>${s(qe(u.id))}</span>
                <span>${s(xe(u.id))}</span>
                <span>${s($e(u.estimate_total))}</span>
              </a>
            `).join("")||b("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${ie.map(u=>{const Q=o.filter(X=>X.status===u).length;return`<div><span>${s(W(u))}</span><b><i style="width:${s(Qt(Q,o.length))}%"></i></b><strong>${s(Q)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${o.filter(u=>u.status!=="done").sort((u,Q)=>it(Q.priority)-it(u.priority)).slice(0,8).map(u=>He(u)).join("")||b("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function aa(e,t){const a=Ka(e.params.get("tab")),i=ti();return`
    ${H("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${f(l("files",i?{job_id:i.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <a class="btn btn-primary" href="${f(l("jobs",{tab:"editor",...i?{job_id:i.id}:{}},t))}" data-router><i class="ti ti-plus"></i>Add job</a>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(Se).map(o=>`<option value="${s(o)}" ${n.stageFilter===o?"selected":""}>${s(o==="all"?"All stages":o)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${i?s(i.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${mt.map(o=>`<a class="${o===a?"active":""}" href="${f(l("jobs",{tab:o,...i?{job_id:i.id}:{}},t))}" data-router>${s(Ya(o))}</a>`).join("")}
    </nav>
    ${ia(a,t,i)}
  `}function ia(e,t,a){return e==="pipeline"?Ke(t):e==="list"?sa(t):e==="profile"?na(t,a):e==="editor"?oa(t,a):Ke(t)}function Ke(e){const t=St(e);return`
    <section class="job-board">
      ${Se.map(a=>{const i=t.filter(o=>o.stage===a);return`
          <article class="job-lane">
            <h2><span>${s(a)}</span><b>${i.length}</b></h2>
            ${i.map(o=>ci(o)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function sa(e){const t=St(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===n.selectedJobId?"active":""}" type="button" data-select-job="${s(a.id)}">
            <span><strong>${s(a.name)}</strong><small>${s(a.client_name||"No client")} - ${s(a.site_address||"No address")}</small></span>
            <span>${s(a.stage)}</span>
            <span>${Dt(a.priority)}</span>
            <span>${s(a.owner_name||"Unassigned")}</span>
            <span>${s(qe(a.id))}</span>
            <span>${$e(a.estimate_total)}</span>
          </button>
        `).join("")||b("No jobs match this view.")}
      </div>
    </section>
  `}function na(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${s(g(e))} - ${s(t.job_type)}</span>
          <h2>${s(t.name)}</h2>
          <p>${s(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${x([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",$e(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${f(l("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <a class="btn" href="${f(l("jobs",{tab:"editor",job_id:t.id},e))}" data-router>Edit job</a>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${de(l("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${qe(t.id)} linked tasks`)}
          ${de(l("files",{job_id:t.id},e),"ti-folder","Files",`${xe(t.id)} files`)}
          ${de(l("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${de(l("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:b("Create a job to see the profile workspace.")}function oa(e,t){const a=t||si(e);return`
    <form class="panel job-editor" data-job-form>
      <input type="hidden" name="id" value="${s(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${q("Workspace name","name",a.name,!0)}
      ${I("Company","company_id",e,kt().map(i=>[i.id,Me(i)]))}
      ${q("Client","client_name",a.client_name)}
      ${q("Contact","contact_name",a.contact_name)}
      ${q("Account owner","owner_name",a.owner_name)}
      ${q("Job type","job_type",a.job_type||"Roofing")}
      ${I("Business status","stage",a.stage||"Lead",Se.map(i=>[i,i]))}
      ${I("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(i=>[i,i]))}
      ${q("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${q("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${ge("Scope","scope",a.scope,"span-2")}
      ${ge("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${s(t.id)}">Delete</button>`:""}
      </div>
    </form>
  `}function ra(e,t){const a=e.jobId?_(e.jobId):null,i=e.params.get("task_id")||n.selectedTaskId,o=i?wt(i):et(t,a?.id)[0]||null,r=e.params.get("new")==="1"||e.params.get("edit")==="1",d=et(t,a?.id);return`
    ${H(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${f(l("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${f(l("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${la(t,a)}
    <section class="task-layout ${r?"editing":""}">
      <article class="panel task-main">
        ${n.taskView==="board"?ca(t,d):da(t,d)}
      </article>
      <aside class="panel detail-panel">
        ${r?ua(t,a,e.params.get("edit")==="1"?o:null):pa(t,o)}
      </aside>
    </section>
  `}function la(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${h(e).map(i=>`<option value="${s(i.id)}" ${t?.id===i.id?"selected":""}>${s(i.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(ie).map(i=>`<option value="${s(i)}" ${n.taskStatusFilter===i?"selected":""}>${s(i==="all"?"All statuses":W(i))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(fe).map(i=>`<option value="${s(i)}" ${n.taskPriorityFilter===i?"selected":""}>${s(i==="all"?"All priorities":S(i))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${n.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${n.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function da(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===n.selectedTaskId?"active":""}" type="button" data-select-task="${s(a.id)}">
          <span><strong>${s(a.title)}</strong><small>${s(a.description||De(a.type))}</small></span>
          <span>${s(_(a.project_id)?.name||"Company task")}</span>
          <span>${s(re(a.assignee_id))}</span>
          <span>${Ct(a.priority)}</span>
          <span>${pi(a.status)}</span>
          <span>${K(a.due)}</span>
        </button>
      `).join("")||b("No tasks match this workspace view.")}
    </div>
  `}function ca(e,t){return`
    <div class="task-board">
      ${ie.map(a=>{const i=t.filter(o=>o.status===a);return`
          <section class="task-column">
            <h2><span>${s(W(a))}</span><b>${i.length}</b></h2>
            ${i.map(o=>`
              <button class="task-card priority-${s(o.priority)}" type="button" data-select-task="${s(o.id)}">
                <strong>${s(o.title)}</strong>
                <span>${s(_(o.project_id)?.name||g(e))}</span>
                <small>${s(re(o.assignee_id))} - ${K(o.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function pa(e,t){return t?`
    <div class="section-head">
      <div><h2>${s(t.title)}</h2><p>${s(_(t.project_id)?.name||g(e))}</p></div>
      <a class="btn" href="${f(l("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${x([["Status",W(t.status)],["Priority",S(t.priority)],["Type",De(t.type)],["Assignee",re(t.assignee_id)],["Due",K(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${s(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${b("No task selected.")}
    `}function ua(e,t,a){const i=a||ni(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${s(a?i.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${q("Task title","title",i.title,!0)}
      ${I("Job","project_id",i.project_id||"",[["","Company-level task"]].concat(h(e).map(o=>[o.id,o.name])))}
      ${I("Status","status",i.status,ie.map(o=>[o,W(o)]))}
      ${I("Priority","priority",i.priority,fe.map(o=>[o,S(o)]))}
      ${I("Type","type",i.type,ft.map(o=>[o,De(o)]))}
      ${I("Assignee","assignee_id",i.assignee_id,z(e).map(o=>[o.id,re(o.id)]))}
      ${q("Due date","due",i.due||U(1),!0,"date")}
      ${ge("Description","description",i.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${s(a.id)}">Delete</button>`:""}
        <a class="btn" href="${f(l("tasks",{...i.project_id?{job_id:i.project_id}:{}},e))}" data-router>Cancel</a>
      </div>
    </form>
  `}function ma(e,t){const a=e.params.get("folder")||n.driveFolder||"home",i=e.jobId?_(e.jobId):null,o=Ft(t,a,i?.id||""),r=bi(o),d=fi(t);return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div>
            <h2>${s(i?i.name:"Company Drive")}</h2>
            <p>${s(i?`${i.client_name||g(t)} file workspace`:"Company folders, shared files, job packets, photos, and forms.")}</p>
          </div>
          <label class="drive-search">
            <i class="ti ti-search"></i>
            <input data-file-search value="${s(n.fileQuery)}" placeholder="Search drive" />
          </label>
          <div class="drive-actions">
            <button class="btn" type="button" data-action="open-file-upload"><i class="ti ti-upload"></i>Upload</button>
            <a class="btn btn-primary" href="${f(l("jobs",{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
            <button class="btn" type="button" data-action="refresh-data"><i class="ti ti-refresh"></i>Refresh</button>
          </div>
        </header>
        <div class="drive-shell">
          <aside class="drive-rail">
            ${gt.map(([c,D,j])=>ui(c,D,j)).join("")}
            <div class="drive-rail-block">
              <span>Job folder</span>
              <select data-file-job-filter>
                <option value="">All jobs</option>
                ${h(t).map(c=>`<option value="${s(c.id)}" ${i?.id===c.id?"selected":""}>${s(c.name)}</option>`).join("")}
              </select>
            </div>
            <div class="drive-capacity">
              <span>${_e(d.bytes)} of 1 GB</span>
              <b><i style="width:${s(String(Math.min(100,Math.round(d.bytes/1073741824*100))))}%"></i></b>
            </div>
          </aside>
          <div class="drive-main">
            <section class="file-toolbar">
              <label>
                <span>Folder</span>
                <select data-file-folder-filter>
                  <option value="home" ${a==="home"?"selected":""}>Home</option>
                  ${ke.map(([c,D])=>`<option value="${s(c)}" ${a===c?"selected":""}>${s(D)}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Category</span>
                <select data-file-category-filter>
                  ${bt.map(c=>`<option value="${s(c)}" ${n.fileCategoryFilter===c?"selected":""}>${s(c)}</option>`).join("")}
                </select>
              </label>
              <nav class="breadcrumbs" aria-label="Drive location">
                <a href="${f(l("files",{},t))}" data-router>${s(g(t))}</a>
                ${a!=="home"?`<span>/</span><a href="${f(l("files",{folder:a},t))}" data-router>${s(F(a))}</a>`:""}
                ${i?`<span>/</span><strong>${s(i.name)}</strong>`:""}
              </nav>
              <div class="segmented" role="group" aria-label="Drive view">
                <button class="${n.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Grid</button>
                <button class="${n.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list"></i>List</button>
              </div>
            </section>
            ${a==="home"&&n.driveFilter==="my-drive"&&!i?fa(t):""}
            ${ba(t,o)}
          </div>
          <aside class="drive-details">
            ${ga(r,t)}
          </aside>
        </div>
      </section>
    </section>
  `}function fa(e){const t=h(e);return`
    <section class="drive-section-title">
      <div><h3>Company folders</h3><span>Folders are scoped to ${s(g(e))}</span></div>
    </section>
    <section class="drive-folder-grid">
      ${ke.map(([a,i,o,r])=>`
        <a class="drive-folder-card" href="${f(l("files",{folder:a},e))}" data-router>
          <span class="drive-folder-icon"><i class="ti ${s(r)}"></i></span>
          <strong>${s(i)}</strong>
          <small>${s(o)}</small>
          <em>${s(Ft(e,a).length)} files</em>
        </a>
      `).join("")}
    </section>
    <section class="drive-section-title recent-title">
      <div><h3>Job folders</h3><span>Each job has a linked drive folder.</span></div>
    </section>
    <section class="drive-folder-grid">
      ${t.map(a=>`
        <a class="drive-folder-card" href="${f(l("files",{folder:"jobs",job_id:a.id},e))}" data-router>
          <span class="drive-folder-icon"><i class="ti ti-folder"></i></span>
          <strong>${s(a.name)}</strong>
          <small>${s(a.client_name||g(e))}</small>
          <em>${xe(a.id)} files</em>
        </a>
      `).join("")||b("Create a job workspace to get its file folder.")}
    </section>
  `}function ba(e,t){const a=n.driveFilter==="my-drive"?"Files":mi();return`
    <section class="drive-section-title recent-title">
      <div><h3>${s(a)}</h3><span>${t.length} visible file${t.length===1?"":"s"}</span></div>
    </section>
    ${n.driveView==="list"?`
      <div class="file-table-live">
        ${t.map(i=>`
          <button type="button" class="file-row-live ${i.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(i.id)}">
            <span class="file-type ${s(Lt(i))}">${s(At(i).slice(0,3).toUpperCase())}</span>
            <strong>${s(i.file_name)}<span>${s(i.notes||i.object_path||F(i.folder))}</span></strong>
            <span>${s(i.category||F(i.folder))}</span>
            <span>${s(_(i.job_id)?.name||"Company shared")}</span>
            <span>${_e(i.size_bytes)}</span>
          </button>
        `).join("")||b("No files match this Drive view.")}
      </div>
    `:`
      <div class="file-grid-live">
        ${t.map(i=>`
          <button type="button" class="file-card-live ${i.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(i.id)}">
            <span class="file-thumb">${Tt(i)}</span>
            <strong>${s(i.file_name)}</strong>
            <span>${s(i.category||F(i.folder))} / ${_e(i.size_bytes)}</span>
          </button>
        `).join("")||b("No files match this Drive view.")}
      </div>
    `}
  `}function ga(e,t){return e?`
    <div class="file-detail-preview">${Tt(e,!0)}</div>
    <h3>${s(e.file_name)}</h3>
    <p>${s(e.notes||_(e.job_id)?.name||F(e.folder))}</p>
    <div class="file-detail-list">
      ${R("Category",e.category||F(e.folder))}
      ${R("Job",_(e.job_id)?.name||"Company shared")}
      ${R("Uploaded by",e.uploaded_by_label||"Quest HQ")}
      ${R("Uploaded",K(e.created_at))}
      ${R("Size",_e(e.size_bytes))}
      ${R("Storage path",e.object_path||"Metadata only")}
    </div>
    <div class="file-detail-actions">
      <button class="btn" type="button" data-action="download-file" data-file-id="${s(e.id)}"><i class="ti ti-download"></i>Download</button>
      <button class="btn danger" type="button" data-action="delete-file" data-file-id="${s(e.id)}"><i class="ti ti-trash"></i>Delete</button>
    </div>
  `:`
      <div class="file-detail-preview"><span class="file-doc-icon"><i class="ti ti-folder-open"></i></span></div>
      <h3>${s(g(t))} Drive</h3>
      <p>Pick a file to see metadata, job context, storage path, and actions.</p>
    `}function ya(){const e=p(),t=n.driveFolder==="home"?"shared":n.driveFolder;return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">Company Drive</div><h2 id="upload-title">Upload files</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="file-upload-panel" data-file-form>
          <div class="file-policy-note span-2">
            <strong>Company-scoped storage</strong>
            <span>Files are written under the active company. If Supabase Storage is blocked by policy, Quest keeps the file record locally instead of losing the entry.</span>
          </div>
          <label class="span-2">
            <span>Files</span>
            <input name="files" type="file" multiple />
          </label>
          ${q("Metadata-only file name","file_name","")}
          ${I("Folder","folder",t,ke.map(([a,i])=>[a,i]))}
          ${I("Job","job_id",n.route?.jobId||"",[["","Company shared file"]].concat(h(e).map(a=>[a.id,a.name])))}
          ${I("Category","category",F(t),bt.filter(a=>a!=="All categories").map(a=>[a,a]))}
          ${q("Uploaded by","uploaded_by_label",A().profile.full_name||"Quest HQ")}
          ${ge("Notes","notes","","span-2")}
          <div class="form-actions span-2">
            <button class="btn btn-primary" type="submit">Upload to drive</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `}function ha(e){const t=z(e);return`
    ${H("Users","Company members, roles, workers, and access context.",`
      <a class="btn btn-primary" href="${f(l("settings",{},e))}" data-router><i class="ti ti-settings"></i>Settings</a>
    `)}
    <section class="users-grid">
      ${t.map(a=>`
        <article class="user-card">
          ${Be({full_name:a.full_name,avatar_url:a.avatar_url},"avatar")}
          <div>
            <strong>${s(a.full_name)}</strong>
            <span>${s(a.email)}</span>
            <small>${s(jt(e,a.id))}</small>
          </div>
        </article>
      `).join("")||b("No users assigned to this company yet.")}
    </section>
    <section class="panel top-gap">
      <div class="section-head"><div><h2>Membership model</h2><p>company_memberships is the canonical table; legacy company_ids remain as backfill fields.</p></div></div>
      ${x([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Client-filtered only while auth is disabled"],["Active role",Je(e)]])}
    </section>
  `}function va(e){const t=Ne(e);return`
    ${H("Settings","Company settings, roles, approvals, and admin controls.","")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${x([["Name",g(e)],["Company ID",e],["Color",t?.color||G(e)],["Visible jobs",h(e).length]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Prepared for Supabase Auth and RLS.</p></div></div>
        ${x([["Auth switch","Disabled"],["Local login","Enabled"],["Isolation","Client-filtered only"],["Memberships",String(n.memberships.filter(a=>a.company_id===e).length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Approvals</h2><p>Quest-owned access approval queue.</p></div></div>
        ${b("No pending company approvals.")}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${z(e).map(a=>`<div><strong>${s(a.full_name)}</strong><span>${s(jt(e,a.id))}</span></div>`).join("")||b("No workers assigned.")}
        </div>
      </article>
    </section>
  `}function _a(e){const t=gi(e),a=Ve(e);return`
    <section class="tool-page forms-center">
      <div class="forms-command panel">
        <span class="sync-pill live"><i class="ti ti-device-floppy"></i>Local autosafe</span>
        <label>
          <span>Search</span>
          <input data-form-search value="${s(n.formQuery)}" placeholder="Find form, audience, or job" />
        </label>
        <label>
          <span>Type</span>
          <select data-form-type-filter>
            <option value="all" ${n.formTypeFilter==="all"?"selected":""}>All types</option>
            ${Ue.map(i=>`<option value="${s(i)}" ${n.formTypeFilter===i?"selected":""}>${s(i)}</option>`).join("")}
          </select>
        </label>
        <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
        <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
      </div>
      <nav class="tabbar forms-tabs" aria-label="Forms workspace">
        ${["library","builder","responses","templates"].map(i=>`
          <button class="${n.formsTab===i?"active":""}" type="button" data-action="set-forms-tab" data-tab="${s(i)}">${s(S(i))}</button>
        `).join("")}
      </nav>
      ${n.formsTab==="library"?$a(e,t,a):""}
      ${n.formsTab==="builder"?Sa(e,a):""}
      ${n.formsTab==="responses"?Ia(e,a):""}
      ${n.formsTab==="templates"?Da():""}
    </section>
  `}function $a(e,t,a){return`
    <section class="forms-library-grid">
      <article class="forms-library-panel panel">
        <div class="forms-list">
          ${t.map(i=>`
            <button class="form-card ${a?.id===i.id?"active":""}" type="button" data-action="select-form" data-form-id="${s(i.id)}">
              <strong>${s(i.title)}</strong>
              <span>${s(i.description||"No description yet.")}</span>
              <small>${s(i.type)} / ${s(i.status)} / ${ye(i)} questions</small>
            </button>
          `).join("")||b("No forms match this company view.")}
        </div>
      </article>
      <aside class="forms-summary panel">
        ${a?wa(e,a):b("Create a form or choose a template.")}
      </aside>
    </section>
  `}function wa(e,t){const a=Ot(t.id),i=_(t.linked_job_id);return`
    <div class="forms-summary-head">
      <div>
        <h2>${s(t.title)}</h2>
        <p>${s(t.description||"No description yet.")}</p>
      </div>
      <span>${s(t.status)}</span>
    </div>
    <div class="forms-simple-meta">
      <span>${s(t.type)}</span>
      <span>${s(t.audience||"Internal")}</span>
      <span>${s(i?.name||"Company level")}</span>
      <span>${ye(t)} questions</span>
      <span>${a.length} responses</span>
    </div>
    <div class="summary-pill-grid">
      ${Te("Updated",K(t.updated_at),"Last edit")}
      ${Te("Approval",t.require_approval?"Required":"Not required","Review flow")}
      ${Te("Email",t.collect_email?"Collected":"Optional","Submitter identity")}
    </div>
    <div class="forms-summary-share">
      <strong>Shareable preview URL</strong>
      <input readonly value="${s(`${window.location.origin}${f(l("forms",{form_id:t.id},e))}`)}" />
      <div class="form-actions">
        <button class="btn" type="button" data-action="copy-form-link" data-form-id="${s(t.id)}">Copy</button>
        <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${s(t.id)}">Edit</button>
      </div>
    </div>
    <div class="forms-summary-actions">
      <button class="btn" type="button" data-action="duplicate-form" data-form-id="${s(t.id)}"><i class="ti ti-copy"></i>Duplicate</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}"><i class="ti ti-world-upload"></i>Publish</button>
      <button class="btn" type="button" data-action="archive-form" data-form-id="${s(t.id)}"><i class="ti ti-archive"></i>Archive</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${s(t.id)}"><i class="ti ti-trash"></i>Delete</button>
    </div>
  `}function Sa(e,t){return t?`
    <section class="forms-builder-grid">
      <aside class="panel form-settings-panel">
        <div class="section-head"><div><h2>Settings</h2><p>${s(t.status)} / ${s(t.type)}</p></div></div>
        ${ce("Title","title",t.title,!0)}
        ${yi("Description","description",t.description)}
        ${pe("Type","type",t.type,Ue.map(a=>[a,a]))}
        ${pe("Status","status",t.status,Ee.map(a=>[a,a]))}
        ${ce("Audience","audience",t.audience)}
        ${pe("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(h(e).map(a=>[a.id,a.name])))}
        ${ce("Theme color","theme_color",t.theme_color||G(e),!1,"color")}
        ${pe("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
        ${ce("Submit button","submit_label",t.submit_label||"Submit")}
        <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
        <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
        <div class="form-actions">
          <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(t.id)}">Save</button>
          <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
        </div>
      </aside>
      <article class="panel question-workbench">
        <div class="section-head">
          <div><h2>Questions</h2><p>${ye(t)} question${ye(t)===1?"":"s"}</p></div>
          <div class="question-add-menu">
            ${je.slice(0,5).map(([a,i])=>`<button class="btn" type="button" data-action="add-question" data-question-type="${s(a)}">${s(i)}</button>`).join("")}
          </div>
        </div>
        <div class="question-list">
          ${t.questions.map((a,i)=>ka(a,i)).join("")||b("Add the first question.")}
        </div>
      </article>
      <aside class="panel forms-preview-panel">
        <div class="section-head"><div><h2>Preview</h2><p>Submits into the local company response queue.</p></div></div>
        ${ja(e,t)}
      </aside>
    </section>
  `:`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${b("Create a form or choose a template to open the builder.")}
      </section>
    `}function ka(e,t){const a=je.map(([i,o])=>`<option value="${s(i)}" ${e.type===i?"selected":""}>${s(o)}</option>`).join("");return`
    <article class="question-card ${n.selectedQuestionId===e.id?"active":""}" data-question-id="${s(e.id)}">
      <div class="question-card-head">
        <span>${t+1}</span>
        <select data-question-field="type">${a}</select>
        <div class="question-actions">
          <button type="button" data-action="move-question" data-direction="-1" data-question-id="${s(e.id)}"><i class="ti ti-arrow-up"></i></button>
          <button type="button" data-action="move-question" data-direction="1" data-question-id="${s(e.id)}"><i class="ti ti-arrow-down"></i></button>
          <button type="button" data-action="duplicate-question" data-question-id="${s(e.id)}"><i class="ti ti-copy"></i></button>
          <button type="button" data-action="delete-question" data-question-id="${s(e.id)}"><i class="ti ti-trash"></i></button>
        </div>
      </div>
      <label><span>Question</span><input data-question-field="label" value="${s(e.label)}" /></label>
      <label><span>Help text</span><input data-question-field="help" value="${s(e.help||"")}" /></label>
      <label class="check-row"><input type="checkbox" data-question-field="required" ${e.required?"checked":""} /> Required</label>
      ${he(e)?`
        <div class="question-options">
          ${(e.options||[]).map((i,o)=>`
            <label>
              <span>Option ${o+1}</span>
              <input data-question-option="${o}" value="${s(i)}" />
              <button type="button" data-action="remove-question-option" data-question-id="${s(e.id)}" data-option-index="${o}"><i class="ti ti-x"></i></button>
            </label>
          `).join("")}
          <button class="btn" type="button" data-action="add-question-option" data-question-id="${s(e.id)}"><i class="ti ti-plus"></i>Add option</button>
        </div>
      `:""}
    </article>
  `}function ja(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${s(t.id)}" style="--form-accent:${s(t.theme_color||G(e))}">
      <div class="designed-form-header">
        <span>${s(g(e))}</span>
        <h2>${s(t.title)}</h2>
        <p>${s(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>qa(a)).join("")||b("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${s(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function qa(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?T(e,`<textarea name="${s(t)}" rows="3" ${a}></textarea>`):e.type==="date"?T(e,`<input name="${s(t)}" type="date" ${a} />`):e.type==="file"?T(e,`<input name="${s(t)}" type="file" ${a} />`):e.type==="yesno"?T(e,`<select name="${s(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?T(e,`<input name="${s(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?T(e,`<select name="${s(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(i=>`<option>${s(i)}</option>`).join("")}</select>`):e.type==="checkbox"?T(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${s(t)}" type="checkbox" value="${s(i)}" /> ${s(i)}</label>`).join("")}</div>`):e.type==="multiple"?T(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${s(t)}" type="radio" value="${s(i)}" ${a} /> ${s(i)}</label>`).join("")}</div>`):T(e,`<input name="${s(t)}" ${a} />`)}function Ia(e,t){const a=t?Ot(t.id):Pt(e),i=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(o=>`
            <button type="button" class="response-card">
              <strong>${s(V(o.form_id)?.title||"Unknown form")}</strong>
              <span>${s(o.submitted_by||o.submitter_email||"Anonymous")}</span>
              <small>${K(o.created_at)}</small>
            </button>
          `).join("")||b("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${i?hi(i):b("No response selected.")}
      </aside>
    </section>
  `}function Da(e){return`
    <section class="forms-template-grid">
      ${Rt().map(t=>`
        <article class="template-card panel">
          <strong>${s(t.title)}</strong>
          <p>${s(t.description)}</p>
          <div class="forms-simple-meta">
            <span>${s(t.type)}</span>
            <span>${t.questions.length} questions</span>
          </div>
          <button class="btn btn-primary" type="button" data-action="use-form-template" data-template-id="${s(t.id)}">Use template</button>
        </article>
      `).join("")}
    </section>
  `}function Ca(e,t){const a={time:["My time","Personal time and shift context inside the company workspace."],approvals:["Approvals","Company access approvals and role requests."]},[i,o]=a[e]||a.time;return`
    ${H(i,o,"")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Summary</h2><p>Quest-owned operational surface.</p></div></div>
        ${x([["Company",g(t)],["Visible jobs",h(t).length],["Open tasks",J(t).filter(r=>r.status!=="done").length],["Mode","Local basic mode"]])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Workload queue</h2><p>Sorted by active company and urgency.</p></div></div>
        <div class="queue-list">${J(t).slice(0,8).map(r=>He(r)).join("")||b("No tasks found.")}</div>
      </article>
    </section>
  `}function Ye(e){return`
    ${H(S(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${b("Module data model pending.")}
    </section>
  `}function Fa(){document.title="Sign in | Quest HQ";const e=_t(n.route.params.get("return_url")||f(l("jobs",{},v())));yt.innerHTML=`
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
          <label>Username<input name="username" value="${s(M.localUsername)}" autocomplete="username" /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" /></label>
          <input type="hidden" name="return_url" value="${s(e)}" />
          <button class="btn btn-primary full" type="submit">Sign in</button>
          ${n.loginError?`<div class="form-message error">${s(n.loginError)}</div>`:'<div class="form-message">Temporary credentials: lumen123 / lumen123</div>'}
        </form>
      </section>
    </main>
  `}function Aa(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${Be(e,"avatar large")}
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
  `}function La(e){const t=e.target.closest("[data-action]");if(t){Ta(e,t);return}const a=e.target.closest("[data-select-job]");if(a){e.preventDefault(),Xa(a.dataset.selectJob);return}const i=e.target.closest("[data-select-task]");if(i){e.preventDefault(),ei(i.dataset.selectTask);return}const o=e.target.closest("a[href][data-router]");o&&(o.target||o.hasAttribute("download")||(e.preventDefault(),y(o.getAttribute("href"))))}function Ta(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),n.dataLoaded=!1,n.sync={label:"Refreshing...",mode:"loading"},m();return}if(a==="sign-out"){e.preventDefault(),localStorage.removeItem(me),n.session=null,y("/login",{replace:!0});return}if(a==="open-profile"){e.preventDefault(),n.modal="profile",m();return}if(a==="open-file-upload"){e.preventDefault(),n.modal="file-upload",m();return}if(a==="close-modal"){e.preventDefault(),n.modal="",m();return}if(a==="set-task-view"){e.preventDefault(),n.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(ct,n.taskView),m();return}if(a==="set-drive-view"){e.preventDefault(),n.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(pt,n.driveView),m();return}if(a==="set-drive-filter"){e.preventDefault(),n.driveFilter=t.dataset.filter||"my-drive",localStorage.setItem(ut,n.driveFilter),n.selectedFileId="",m();return}if(a==="select-file"){e.preventDefault(),n.selectedFileId=t.dataset.fileId||"",m();return}if(a==="download-file"){e.preventDefault(),Ja(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),xa(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),n.formsTab=t.dataset.tab||"library",m();return}if(a==="new-form"){e.preventDefault(),_i(p());return}if(a==="select-form"){e.preventDefault(),tt(t.dataset.formId);return}if(a==="edit-form"){e.preventDefault(),tt(t.dataset.formId),n.formsTab="builder",m();return}if(a==="save-form"){e.preventDefault(),k("Form saved locally"),m();return}if(a==="publish-form"){e.preventDefault(),at(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),at(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),$i(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),wi(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),Si(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),ki(p());return}if(a==="use-form-template"){e.preventDefault(),ji(p(),t.dataset.templateId);return}if(a==="add-question"){e.preventDefault(),qi(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),Ii(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),Di(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),Ci(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),Fi(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),Ai(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),Ea(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),Na(t.dataset.taskId))}function Pa(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===M.localUsername&&String(t.password||"")===M.localPassword)){n.loginError="Invalid temporary credentials.",m();return}n.loginError="",n.session=Pe(),w(me,n.session),y(_t(t.return_url||f(l("jobs",{},v()))),{replace:!0});return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...A().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};w(st,a),n.profileDraft=a,n.session={...A(),profile:a},w(me,n.session),n.modal="",m();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),Ua(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),Qa(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),Ma(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),Li(e.target))}function Oa(e){if(e.target.matches("[data-global-search]")){n.query=e.target.value,Le();return}if(e.target.matches("[data-file-search]")){n.fileQuery=e.target.value,Le();return}if(e.target.matches("[data-form-search]")){n.formQuery=e.target.value,Le();return}if(e.target.matches("[data-form-field]")){Ut(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Et(e.target)}function Ra(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||v();Za(t);return}if(e.target.matches("[data-stage-filter]")){n.stageFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-status-filter]")){n.taskStatusFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-priority-filter]")){n.taskPriorityFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;y(l("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;y(l("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){n.fileCategoryFilter=e.target.value||"All categories",m();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=n.route?.jobId||"";y(l("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;y(l("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){n.formTypeFilter=e.target.value||"all",m();return}if(e.target.matches("[data-form-field]")){Ut(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Et(e.target)}async function Ua(e){const t=ee(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.updated_at=new Date().toISOString();const a=n.jobs.some(o=>o.id===t.id),i=E();if(i){const o=a?await i.from("jobs").update(t).eq("id",t.id).select().single():await i.from("jobs").insert(t).select().single();if(!o.error&&o.data){Ge(ee(o.data)),n.sync={label:"Quest Supabase live",mode:"live"},y(l("jobs",{tab:"profile",job_id:o.data.id},t.company_id),{replace:!0});return}n.sync={label:"Saved locally",mode:"local"}}Ge(t),y(l("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function Ea(e){if(!e)return;const t=p(),a=E();a&&await a.from("jobs").delete().eq("id",e),n.jobs=n.jobs.filter(i=>i.id!==e),n.selectedJobId=h(t)[0]?.id||"",B(),y(l("jobs",{tab:"list"},t),{replace:!0})}async function Qa(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),i=te({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:A().profile.member_id||z(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),o=n.tasks.some(d=>d.id===i.id),r=E();if(r){const d=oi(i),c=o?await r.from("tasks").update(d).eq("id",i.id).select().single():await r.from("tasks").insert(d).select().single();if(!c.error&&c.data){Ze(te(c.data)),n.sync={label:"Quest Supabase live",mode:"live"},y(l("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0});return}n.sync={label:"Task saved locally",mode:"local"}}Ze(i),y(l("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0})}async function Na(e){if(!e)return;const t=p(),a=E();a&&await a.from("tasks").delete().eq("id",e),n.tasks=n.tasks.filter(i=>i.id!==e),n.selectedTaskId="",B(),y(l("tasks",{},t),{replace:!0})}async function Ma(e){const t=p(),a=new FormData(e),i=Object.fromEntries(a.entries()),o=Array.from(e.elements.files?.files||[]),r=String(i.file_name||"").trim(),d=o.length?o:r?[null]:[];if(!d.length){n.sync={label:"Choose a file or enter a file name",mode:"local"},m();return}const c=E();let D=0;for(const j of d){const u=crypto.randomUUID(),Q=j?.name||r,X=String(i.folder||"shared"),Ce=`${t}/${i.job_id?`jobs/${i.job_id}`:X}/${u}-${Ei(Q)}`;let Fe=!1;c&&j&&(Fe=!(await c.storage.from("quest-job-files").upload(Ce,j,{cacheControl:"3600",upsert:!1,contentType:j.type||"application/octet-stream"})).error);const We=be({id:u,company_id:t,job_id:i.job_id||"",folder:X,file_name:Q,mime_type:j?.type||"application/octet-stream",size_bytes:j?.size||Number(i.size_bytes||0),category:i.category||F(X),notes:i.notes||"",uploaded_by_label:i.uploaded_by_label||A().profile.full_name,bucket_id:"quest-job-files",object_path:Fe||!j?Ce:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(c){const le=await c.from("job_files").insert(ri(We)).select().single();if(!le.error&&le.data){Xe(be(le.data)),D+=1;continue}Fe&&await c.storage.from("quest-job-files").remove([Ce])}Xe(We)}n.sync=D===d.length?{label:"Quest Supabase live",mode:"live"}:{label:D?"Some files saved locally":"File record saved locally",mode:D?"loading":"local"},n.modal="",y(l("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),{replace:!0})}async function Ja(e){const t=n.files.find(o=>o.id===e);if(!t?.object_path){n.sync={label:"No stored object for this file",mode:"local"},m();return}const a=E();if(!a)return;const i=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(i.error||!i.data?.signedUrl){n.sync={label:"Download failed",mode:"local"},m();return}window.open(i.data.signedUrl,"_blank","noopener,noreferrer")}async function xa(e){const t=n.files.find(i=>i.id===e);if(!t)return;const a=E();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),n.files=n.files.filter(i=>i.id!==e),n.selectedFileId="",B(),m()}function Ge(e){const t=n.jobs.findIndex(a=>a.id===e.id);t>=0?n.jobs[t]=e:n.jobs.unshift(e),n.selectedJobId=e.id,B()}function Ze(e){const t=n.tasks.findIndex(a=>a.id===e.id);t>=0?n.tasks[t]=e:n.tasks.unshift(e),n.selectedTaskId=e.id,B()}function Xe(e){const t=n.files.findIndex(a=>a.id===e.id);t>=0?n.files[t]=e:n.files.unshift(e),B()}function Le(){const e=document.getElementById("workspace");e&&($t(n.route),e.innerHTML=ht(n.route))}function vt(){const e=Qe(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const i=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:i,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function za(){const e=Qe(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||ue(t.get("job_id")||t.get("project_id"))||localStorage.getItem(we)||v();let o={"/index.html":l("jobs",{},a),"/command.html":l("jobs",{},a),"/admin.html":l("settings",{},a),"/automations.html":l("settings",{},a),"/crm.html":l("users",{},a),"/dashboards.html":l("analytics",{},a),"/files.html":l("files",{},a),"/finance.html":l("analytics",{},a),"/forms.html":l("forms",{},a),"/jobs.html":l("jobs",{},a),"/knowledge.html":l("files",{folder:"shared"},a),"/login.html":"/login","/templates.html":l("forms",{},a),"/tickets.html":l("tasks",{},a)}[e];if(e==="/jobs"){const d=t.get("tab");d==="tasks"?o=l("tasks",O(t,["job_id","task_id","new","edit"]),a):d==="files"?o=l("files",O(t,["job_id","folder"]),a):d==="forms"?o=l("forms",O(t,["job_id"]),a):d==="analytics"?o=l("analytics",O(t,["job_id"]),a):o=l("jobs",O(t,["job_id","tab"]),a)}if(e==="/files"&&(o=l("files",O(t,["job_id","folder"]),a)),e==="/forms"&&(o=l("forms",O(t,["job_id"]),a)),e==="/analytics"&&(o=l("analytics",O(t,["job_id"]),a)),e==="/admin"&&(o=l("settings",{},a)),e==="/time"&&(o=l("time",{},a)),e==="/team"&&(o=l("users",{},a)),e==="/approvals"&&(o=l("approvals",{},a)),e==="/clock"&&(o=l("settings",{},a)),e==="/task-management.html"){const d=t.get("project_id")||t.get("job_id")||"";o=l("tasks",d?{job_id:d}:{},ue(d)||a)}const r=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(r){const d=decodeURIComponent(r[1]);o=l("tasks",{job_id:d},ue(d)||a)}o&&window.history.replaceState({},"",f(o))}function Ha(e){if(e.name!=="company")return"";const t=oe();if(!t.includes(e.companyId))return l(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||v());if(!["jobs","tasks","files","forms","analytics","users","settings","time","approvals"].includes(e.section))return l("jobs",{},e.companyId);const i=e.jobId?ue(e.jobId):"";return i&&i!==e.companyId&&t.includes(i)?l(e.section,Object.fromEntries(e.params.entries()),i):""}function Qe(){let e=window.location.pathname||"/";return Y&&e.startsWith(Y)&&(e=e.slice(Y.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function f(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),i=t.startsWith("/")?t:"/"+t;return`${Y}${i}${a?`?${a}`:""}`||"/"}function y(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(Y+"/")||Y===""&&e.startsWith("/")?e:f(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),m()}function Ba(){return`${Qe()}${window.location.search}`}function _t(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?f(l("jobs",{},v())):`${t.pathname}${t.search}`}catch{return f(l("jobs",{},v()))}}function l(e="jobs",t={},a=p()){const i=new URLSearchParams(t);for(const[o,r]of[...i.entries()])(r==null||r==="")&&i.delete(o);return`/company/${encodeURIComponent(a||v())}/${e}${i.toString()?`?${i.toString()}`:""}`}function Va(e){return e.name==="company"?S(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":S(e.name||"Workspace")}function Wa(e,t){const[a]=t.split("?"),i=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!i||e.name!=="company"?!1:e.companyId===decodeURIComponent(i[1])&&e.section===i[2]}function Ka(e){return mt.includes(e)?e:"pipeline"}function Ya(e){return{pipeline:"Pipeline",list:"List",profile:"Profile",editor:"Editor"}[e]||e}function Ga(e){const t=e.companyId||n.activeCompanyId||v(),a=oe();n.activeCompanyId=a.includes(t)?t:a[0]||v(),localStorage.setItem(we,n.activeCompanyId)}function $t(e){const t=p();e.jobId&&h(t).some(i=>i.id===e.jobId)&&(n.selectedJobId=e.jobId),(!n.selectedJobId||!h(t).some(i=>i.id===n.selectedJobId))&&(n.selectedJobId=h(t)[0]?.id||"");const a=e.params.get("task_id");a&&J(t).some(i=>i.id===a)&&(n.selectedTaskId=a),e.section!=="tasks"&&(n.selectedTaskId=""),n.driveFolder=e.params.get("folder")||"home"}function Za(e){const t=oe(),a=t.includes(e)?e:t[0]||v();n.activeCompanyId=a,localStorage.setItem(we,a);const i=n.route||vt(),o=i.name==="company"?i.section:"jobs";y(l(o,{},a))}function Xa(e){const t=_(e);t&&(n.selectedJobId=e,y(l("jobs",{tab:"profile",job_id:e},t.company_id)))}function ei(e){const t=wt(e);t&&(n.selectedTaskId=e,y(l("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function ti(){return _(n.selectedJobId)||h(p())[0]||null}function _(e){return n.jobs.find(t=>t.id===e)||null}function wt(e){return n.tasks.find(t=>t.id===e)||null}function h(e=p()){return n.jobs.filter(t=>t.company_id===e)}function J(e=p()){return n.tasks.filter(t=>t.company_id===e)}function ne(e=p()){return n.files.filter(t=>t.company_id===e)}function z(e=p()){return n.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function St(e=p()){const t=n.query.trim().toLowerCase();return h(e).filter(a=>n.stageFilter!=="all"&&a.stage!==n.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,g(a.company_id)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function et(e=p(),t=""){const a=n.query.trim().toLowerCase();return J(e).filter(i=>t&&i.project_id!==t||n.taskStatusFilter!=="all"&&i.status!==n.taskStatusFilter||n.taskPriorityFilter!=="all"&&i.priority!==n.taskPriorityFilter?!1:a?[i.title,i.description,De(i.type),re(i.assignee_id),_(i.project_id)?.name].some(o=>String(o||"").toLowerCase().includes(a)):!0)}function kt(){const e=oe();return n.companies.filter(t=>e.includes(t.id))}function oe(){const e=A().profile,t=n.companies.map(o=>o.id);if(["developer","admin"].includes(e.role))return t.length?t:se.map(o=>o.id);const a=n.memberships.filter(o=>o.profile_id===e.id&&o.status!=="disabled").map(o=>o.company_id);return(a.length?a:e.company_ids||[]).filter(o=>t.includes(o))}function p(){const e=oe();return e.includes(n.activeCompanyId)?n.activeCompanyId:e[0]||v()}function v(){return se[0].id}function Ne(e){return n.companies.find(t=>t.id===e)||se.find(t=>t.id===e)||null}function g(e){const t=Ne(e);return t?Me(t):e||"Company"}function Me(e){return e.short_name||e.label||e.name||e.id}function G(e){return Ne(e)?.color||"#f0b23b"}function ue(e){return n.jobs.find(t=>t.id===e)?.company_id||""}function Je(e){const t=A().profile;return["developer","admin"].includes(t.role)?S(t.role):S(n.memberships.find(a=>a.company_id===e&&a.profile_id===t.id)?.role||t.role||"member")}function jt(e,t){const a=n.memberships.find(i=>i.company_id===e&&(i.member_id===t||i.profile_id===t));return S(a?.role||"member")}function re(e){const t=n.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function qe(e){return n.tasks.filter(t=>t.project_id===e).length}function xe(e){return n.files.filter(t=>t.job_id===e).length}function ai(e){return{id:String(e.id||"").trim(),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function ee(e){return{id:String(e.id||""),company_id:String(e.company_id||v()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:Se.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:C(e.estimate_total),invoice_total:C(e.invoice_total),task_count:C(e.task_count),file_count:C(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function te(e){const t=fe.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=ie.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:ft.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:String(e.company_id||v()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||U(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:fe.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function be(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:String(e.company_id||v()),job_id:String(e.job_id||""),folder:String(e.folder||Pi(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:C(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ie(e){const t=Array.isArray(e.questions)?e.questions.map(ze):[],a=Ue.includes(e.type)?e.type:"Internal",i=Ee.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:String(e.company_id||v()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:i,audience:String(e.audience||"Internal").trim(),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function ze(e){const t=je.some(([i])=>i===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(i=>String(i||"").trim()).filter(Boolean):[]};return he(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function qt(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:String(e.company_id||v()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function It(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,company_ids:Array.isArray(e.company_ids)?e.company_ids:[]}}function ii(e){return{company_id:String(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function si(e=p()){return ee({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function ni(e=p(),t=""){return te({id:"",title:"",company_id:e,project_id:t,assignee_id:z(e)[0]?.id||"abraham",creator_id:A().profile.member_id||"abraham",due:U(1),priority:"medium",status:"todo",type:"admin"})}function oi(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function ri(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function A(){return n.session?{...n.session,profile:{...Pe().profile,...n.session.profile||{},...n.profileDraft||{}}}:Pe()}function Pe(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",...n.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:M.localUsername,email:e.email},profile:e}}function H(e,t,a=""){return`
    <section class="workspace-head">
      <div>
        <div class="context-line"><span>${s(g(p()))}</span><b>${s(Je(p()))}</b></div>
        <h1>${s(e)}</h1>
        <p>${s(t)}</p>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function li(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric"><span>${s(t)}</span><strong>${s(a)}</strong></article>`).join("")}</section>`}function di(e){return`
    <button class="queue-row" type="button" data-select-job="${s(e.id)}">
      <span><strong>${s(e.name)}</strong><small>${s(e.client_name||g(e.company_id))}</small></span>
      ${Dt(e.priority)}
      <b>${s(e.stage)}</b>
    </button>
  `}function He(e){return`
    <button class="queue-row" type="button" data-select-task="${s(e.id)}">
      <span><strong>${s(e.title)}</strong><small>${s(_(e.project_id)?.name||g(e.company_id))}</small></span>
      ${Ct(e.priority)}
      <b>${s(W(e.status))}</b>
    </button>
  `}function ci(e){return`
    <button class="job-card priority-${s(e.priority.toLowerCase())} ${e.id===n.selectedJobId?"active":""}" type="button" data-select-job="${s(e.id)}">
      <strong>${s(e.name)}</strong>
      <span>${s(e.client_name||"No client")}</span>
      <small>${s(g(e.company_id))} - ${s(e.owner_name||"Unassigned")}</small>
      <em>${s(qe(e.id))} tasks</em>
    </button>
  `}function de(e,t,a,i){return`
    <a class="mini-link" href="${f(e)}" data-router>
      <i class="ti ${s(t)}"></i>
      <span><strong>${s(a)}</strong><small>${s(i)}</small></span>
    </a>
  `}function x(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${s(t)}</span><strong>${s(a)}</strong></div>`).join("")}</div>`}function q(e,t,a="",i=!1,o="text",r=""){return`<label class="${s(r)}"><span>${s(e)}</span><input name="${s(t)}" type="${s(o)}" value="${s(a)}" ${i?"required":""} /></label>`}function ge(e,t,a="",i=""){return`<label class="${s(i)}"><span>${s(e)}</span><textarea name="${s(t)}" rows="4">${s(a)}</textarea></label>`}function I(e,t,a,i){return`
    <label><span>${s(e)}</span><select name="${s(t)}">
      ${i.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function Dt(e){return`<span class="priority ${s(String(e).toLowerCase())}">${s(e)}</span>`}function Ct(e){return`<span class="priority ${s(e)}">${s(S(e))}</span>`}function pi(e){return`<span class="status-pill ${s(e)}">${s(W(e))}</span>`}function Be(e,t){if(e.avatar_url)return`<span class="${s(t)}"><img src="${s(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${s(t)}">${s(a)}</span>`}function b(e){return`<div class="empty-state">${s(e)}</div>`}function O(e,t){const a={};return t.forEach(i=>{const o=e.get(i);o&&(a[i]=o)}),a}function B(){w(nt,n.jobs),w(ot,n.tasks),w(rt,n.files),w(ae,n.forms),w(Re,n.formResponses),w(lt,n.teamMembers),w(dt,n.memberships)}function Te(e,t,a=""){return`<article class="metric"><span>${s(e)}</span><strong>${s(t)}</strong>${a?`<small>${s(a)}</small>`:""}</article>`}function R(e,t){return`<div><strong>${s(e)}</strong><span>${s(t)}</span></div>`}function ui(e,t,a){return`
    <button class="${n.driveFilter===e?"active":""}" type="button" data-action="set-drive-filter" data-filter="${s(e)}">
      <i class="ti ${s(a)}"></i>
      <span>${s(t)}</span>
    </button>
  `}function mi(){return gt.find(([e])=>e===n.driveFilter)?.[1]||"My Drive"}function fi(e=p()){const t=ne(e);return{count:t.length,bytes:Nt(t,"size_bytes")}}function bi(e){const t=e||[],a=t.find(i=>i.id===n.selectedFileId)||t[0]||null;return n.selectedFileId=a?.id||"",a}function Ft(e=p(),t="home",a=""){const i=(n.fileQuery||n.query||"").trim().toLowerCase(),o=n.fileCategoryFilter;let r=ne(e);return a?r=r.filter(d=>d.job_id===a):n.driveFilter==="images"?r=r.filter(d=>d.mime_type.includes("image")||d.folder==="photos"):n.driveFilter==="documents"?r=r.filter(d=>!d.mime_type.includes("image")&&d.folder!=="photos"):t&&t!=="home"&&(t==="jobs"?r=r.filter(d=>d.job_id):r=r.filter(d=>d.folder===t)),o&&o!=="All categories"&&(r=r.filter(d=>String(d.category||F(d.folder)).toLowerCase()===o.toLowerCase())),i&&(r=r.filter(d=>[d.file_name,d.category,d.uploaded_by_label,d.notes,d.object_path,_(d.job_id)?.name].some(c=>String(c||"").toLowerCase().includes(i)))),r.sort((d,c)=>new Date(c.created_at||0)-new Date(d.created_at||0))}function At(e){const t=String(e.mime_type||"").toLowerCase();return t.includes("pdf")?"PDF":t.includes("image")?"Image":t.includes("zip")?"Zip":t.includes("spreadsheet")||t.includes("excel")?"Sheet":t.includes("word")||t.includes("document")?"Doc":F(e.folder)}function Lt(e){const t=At(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="sheet"?"sheet":"doc"}function Tt(e,t=!1){const a=Oi(e);return e.signed_url?`<img src="${s(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${s(Lt(e))} ${t?"large":""}"><i class="ti ${s(a)}"></i></span>`}function Z(e=p()){return n.forms.filter(t=>t.company_id===e)}function gi(e=p()){const t=n.formQuery.trim().toLowerCase(),a=n.route?.jobId||"";return Z(e).filter(i=>a&&i.linked_job_id!==a||n.formTypeFilter!=="all"&&i.type!==n.formTypeFilter?!1:t?[i.title,i.description,i.type,i.status,i.audience,_(i.linked_job_id)?.name].some(o=>String(o||"").toLowerCase().includes(t)):!0)}function Ve(e=p()){const t=n.route?.jobId||"",a=Z(e).filter(r=>!t||r.linked_job_id===t),i=n.route?.params?.get("form_id")||"";if(i&&a.some(r=>r.id===i)&&(n.selectedFormId=i),!a.length)return n.selectedFormId="",n.selectedQuestionId="",null;let o=a.find(r=>r.id===n.selectedFormId)||a[0];return n.selectedFormId=o.id,(!n.selectedQuestionId||!o.questions.some(r=>r.id===n.selectedQuestionId))&&(n.selectedQuestionId=o.questions[0]?.id||""),o}function V(e){return n.forms.find(t=>t.id===e)||null}function P(){return V(n.selectedFormId)||Ve(p())}function Pt(e=p()){return n.formResponses.filter(t=>t.company_id===e)}function Ot(e){return n.formResponses.filter(t=>t.form_id===e)}function ye(e){return Array.isArray(e?.questions)?e.questions.length:0}function ce(e,t,a="",i=!1,o="text"){return`<label><span>${s(e)}</span><input data-form-field="${s(t)}" type="${s(o)}" value="${s(a)}" ${i?"required":""} /></label>`}function yi(e,t,a=""){return`<label><span>${s(e)}</span><textarea data-form-field="${s(t)}" rows="3">${s(a)}</textarea></label>`}function pe(e,t,a,i){return`
    <label><span>${s(e)}</span><select data-form-field="${s(t)}">
      ${i.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function he(e){return["multiple","checkbox","dropdown"].includes(e.type)}function T(e,t){return`
    <div class="response-question">
      <label>
        <span>${s(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${s(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function hi(e){const t=V(e.form_id),a=Object.entries(e.answers||{}).map(([i,o])=>{const r=t?.questions.find(c=>c.id===i),d=Array.isArray(o)?o.join(", "):o;return R(r?.label||i,d||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${s(t?.title||"Response")}</h2><p>${s(e.submitted_by||e.submitter_email||"Anonymous")} / ${K(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||R("Response","No answers captured.")}</div>
  `}function Rt(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[$("short","Inspection address"),$("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),$("paragraph","Recommended scope"),$("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[$("short","Client name"),$("yesno","Approved to proceed?"),$("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[$("short","Request title"),$("dropdown","Priority",["Low","Medium","High","Urgent"]),$("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[$("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),$("yesno","Weather safe?"),$("paragraph","Safety notes")]}]}function vi(e=p()){return Ie({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:n.route?.jobId||"",theme_color:G(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[$("short","First question")]})}function $(e="short",t="Untitled question",a=[]){return ze({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function _i(e){const t=vi(e);n.forms.unshift(t),n.selectedFormId=t.id,n.selectedQuestionId=t.questions[0]?.id||"",n.formsTab="builder",k("New form created"),m()}function tt(e){const t=V(e);t&&(n.selectedFormId=t.id,n.selectedQuestionId=t.questions[0]?.id||"",m())}function k(e="Forms saved locally"){const t=P();t&&(t.updated_at=new Date().toISOString()),w(ae,n.forms),w(Re,n.formResponses),n.sync={label:e,mode:"live"}}function at(e,t){const a=V(e||n.selectedFormId);a&&(a.status=Ee.includes(t)?t:"Draft",n.selectedFormId=a.id,k(`${a.status} locally`),m())}function $i(e){const t=V(e||n.selectedFormId);if(!t)return;const a=Ie({...ve(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(i=>({...ve(i),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.forms.unshift(a),n.selectedFormId=a.id,n.selectedQuestionId=a.questions[0]?.id||"",k("Form duplicated"),m()}function wi(e){const t=e||n.selectedFormId;t&&(n.forms=n.forms.filter(a=>a.id!==t),n.formResponses=n.formResponses.filter(a=>a.form_id!==t),n.selectedFormId=Z(p())[0]?.id||"",n.selectedQuestionId=Ve(p())?.questions[0]?.id||"",k("Form deleted locally"),m())}async function Si(e){const t=e||n.selectedFormId,a=`${window.location.origin}${f(l("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),n.sync={label:"Form link copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}m()}function ki(e){const t=JSON.stringify({company_id:e,forms:Z(e),responses:Pt(e)},null,2);Ti(`${e}-forms-export.json`,t,"application/json")}function ji(e,t){const a=Rt().find(o=>o.id===t);if(!a)return;const i=Ie({...a,id:`form-${crypto.randomUUID()}`,company_id:e,status:"Draft",audience:"Internal",linked_job_id:n.route?.jobId||"",theme_color:G(e),background:"clean",submit_label:"Submit",questions:a.questions.map(o=>({...ve(o),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.forms.unshift(i),n.selectedFormId=i.id,n.selectedQuestionId=i.questions[0]?.id||"",n.formsTab="builder",k("Template added"),m()}function Ut(e){const t=P();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),w(ae,n.forms))}function Et(e){const t=P(),a=e.closest("[data-question-id]"),i=t?.questions.find(o=>o.id===a?.dataset.questionId);if(!(!t||!i)){if(n.selectedQuestionId=i.id,e.matches("[data-question-option]")){const o=Number(e.dataset.questionOption);i.options[o]=e.value}else{const o=e.dataset.questionField;if(o==="required")i.required=e.checked;else if(o==="type"){i.type=e.value,he(i)&&!i.options.length&&(i.options=["Option 1","Option 2"]),he(i)||(i.options=[]),k("Question updated"),m();return}else o&&(i[o]=e.value)}t.updated_at=new Date().toISOString(),w(ae,n.forms)}}function qi(e="multiple"){const t=P();if(!t)return;const a=$(e,je.find(([i])=>i===e)?.[1]||"New question");t.questions.push(a),n.selectedQuestionId=a.id,k("Question added"),m()}function Ii(e){const t=P(),a=t?.questions.find(r=>r.id===e);if(!t||!a)return;const i=t.questions.findIndex(r=>r.id===e),o=ze({...ve(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(i+1,0,o),n.selectedQuestionId=o.id,k("Question duplicated"),m()}function Di(e){const t=P();t&&(t.questions=t.questions.filter(a=>a.id!==e),n.selectedQuestionId=t.questions[0]?.id||"",k("Question deleted"),m())}function Ci(e,t){const a=P();if(!a||!t)return;const i=a.questions.findIndex(d=>d.id===e),o=i+t;if(i<0||o<0||o>=a.questions.length)return;const[r]=a.questions.splice(i,1);a.questions.splice(o,0,r),n.selectedQuestionId=e,k("Question moved"),m()}function Fi(e){const a=P()?.questions.find(i=>i.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),k("Option added"),m())}function Ai(e,t){const i=P()?.questions.find(o=>o.id===e);!i||t<0||(i.options.splice(t,1),i.options.length||i.options.push("Option 1"),k("Option removed"),m())}function Li(e){const t=V(e.dataset.formId);if(!t)return;const a=new FormData(e),i={};t.questions.forEach(o=>{const r=`answer:${o.id}`,d=a.getAll(r).filter(c=>c instanceof File?c.name:String(c||"").trim());i[o.id]=d.length>1?d.map(c=>c instanceof File?c.name:c):d[0]instanceof File?d[0].name:d[0]||""}),n.formResponses.unshift(qt({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||A().profile.full_name||"Preview submitter"),answers:i,created_at:new Date().toISOString()})),n.formsTab="responses",k("Preview response saved"),m()}function Ti(e,t,a="text/plain"){const i=new Blob([t],{type:a}),o=URL.createObjectURL(i),r=document.createElement("a");r.href=o,r.download=e,r.click(),URL.revokeObjectURL(o)}function ve(e){return JSON.parse(JSON.stringify(e))}function W(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||S(e)}function De(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||S(e)}function F(e){return ke.find(([t])=>t===e)?.[1]||S(e||"Shared")}function Pi(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Oi(e){return e.mime_type.includes("image")?"ti-photo":e.mime_type.includes("pdf")?"ti-file-type-pdf":e.mime_type.includes("zip")?"ti-file-zip":"ti-file-description"}function S(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function U(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function K(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function _e(e){const t=C(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**i).toFixed(i?1:0)} ${a[i]}`}function Ri(){const e=new Date;return e.setHours(0,0,0,0),e}function Ui(e,t){return`${Qt(e,t)}%`}function Qt(e,t){const a=C(t);return a?Math.max(0,Math.min(100,Math.round(C(e)/a*100))):0}function it(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function Ei(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function Nt(e,t){return e.reduce((a,i)=>a+C(i[t]),0)}function C(e){const t=Number(e);return Number.isFinite(t)?t:0}function $e(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(C(e))}function Oe(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function N(e,t){const a=Oe(e,t);return Array.isArray(a)&&a.length?a:t}function w(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
