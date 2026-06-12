(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const J={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},Z=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),ye="quest-hq-local-session",lt="quest-hq-local-profile",dt="quest-hq-job-cache-v2",ct="quest-hq-task-cache-v1",pt="quest-hq-file-cache-v1",ut="quest-hq-team-cache-v1",mt="quest-hq-company-membership-cache-v1",de="quest-hq-company-form-cache-v1",Qe="quest-hq-company-form-response-cache-v1",je="quest-hq-active-company",ft="quest-hq-task-view",bt="quest-hq-drive-view",gt="quest-hq-drive-filter",qe=["Lead","Site Review","Estimate","Approved","Active","Closed"],ht=["pipeline","list","profile","editor"],ce=["todo","pending","hold","review","done"],ve=["critical","urgent","high","medium","low"],yt=["lead","bid","admin","invoicing","ar","meeting","web_dev"],vt=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],_t=[["my-drive","My Drive","ti-folder"],["recent","Recent","ti-clock"],["images","Images","ti-photo"],["documents","Documents","ti-file-description"]],X=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],De=["Inspection","Client approval","Intake","Survey","Safety","Internal"],Ne=["Draft","Published","Archived"],se=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],pe=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],Ht=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],Bt=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"]},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"]},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"]},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"]},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"]}],Vt=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],Wt=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:E(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:E(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:E(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:E(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:E(5),priority:"medium",urgency:"medium",status:"todo"}],Kt=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],Yt=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],Gt=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],n={route:null,session:Ue(ye,null),profileDraft:Ue(lt,null),jobs:M(dt,Ht).map(ne),tasks:M(ct,Wt).map(oe),files:M(pt,Kt).map(_e),forms:M(de,Yt).map(Ce),formResponses:M(Qe,Gt).map(Ft),teamMembers:M(ut,Bt).map(Tt),memberships:M(mt,Vt),companies:pe,activeCompanyId:localStorage.getItem(je)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",query:"",fileQuery:"",formQuery:"",stageFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(ft)||"table",driveFolder:"home",driveView:localStorage.getItem(bt)||"grid",driveFilter:localStorage.getItem(gt)||"my-drive",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",modal:""},$t=document.getElementById("app");Zt();function Zt(){Xa(),window.addEventListener("popstate",m),document.addEventListener("click",Ma),document.addEventListener("submit",xa),document.addEventListener("input",za),document.addEventListener("change",Ha),m()}function m(){if(n.route=St(),Xt(n.route)){y("/login?return_url="+encodeURIComponent(ti()),{replace:!0});return}if(n.route.name==="login"){Qa();return}ea();const e=ei(n.route);if(e){y(e,{replace:!0});return}oi(n.route),jt(n.route),n.route.params.get("account")==="profile"&&(n.modal="profile"),document.title=`${ai(n.route)} | ${b(p())} | Quest HQ`,$t.innerHTML=aa(n.route,wt(n.route))}function Xt(e){return e.name==="login"?!1:!n.session}function ea(){n.dataLoaded||n.dataLoading||(n.dataLoading=!0,ta().catch(()=>{n.sync={label:"Local fallback",mode:"local"}}).finally(()=>{n.dataLoaded=!0,n.dataLoading=!1,W(),m()}))}async function ta(){const e=U();if(!e){n.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,i,o,r,d]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*")]);let c=0;t.error||(n.companies=t.data?.length?t.data.map(pi):pe,c+=1),a.error||(a.data?.length&&(n.jobs=a.data.map(ne)),c+=1),i.error||(i.data?.length&&(n.tasks=i.data.map(oe)),c+=1),o.error||(o.data?.length&&(n.files=o.data.map(_e)),c+=1),r.error||(r.data?.length&&(n.teamMembers=r.data.map(Tt)),c+=1),d.error||(d.data?.length&&(n.memberships=d.data.map(ui)),c+=1),n.sync=c?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function U(){return!window.supabase||typeof window.supabase.createClient!="function"?null:window.supabase.createClient(J.supabaseUrl,J.supabaseKey)}function aa(e,t){const a=A(),i=p();return`
    <div class="quest-app" data-route="${s(e.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${f(l("jobs",{},i))}" data-router aria-label="Quest HQ workspace">
            <i class="ti ti-bolt"></i>
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${s(J.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            <i class="ti ti-building"></i>
            <select data-company-switch aria-label="Active company">
              ${It().map(o=>`<option value="${s(o.id)}" ${o.id===i?"selected":""}>${s(xe(o))}</option>`).join("")}
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
              ${We(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${s(a.profile.full_name)}</strong>
              <span>${s(a.profile.role_label)} - ${s(b(i))}</span>
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${ia(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${n.modal==="profile"?Na(a.profile):""}
    ${n.modal==="file-upload"?$a():""}
  `}function ia(e){const t=p(),a=h(t),i=x(t),o=H(t),r=te(t),d=B(t);return`
    <div class="company-card">
      <span style="background:${s(ee(t))}"></span>
      <strong>${s(b(t))}</strong>
      <small>${s(ze(t))} workspace</small>
    </div>
    ${Le("Workspace",[P(e,l("jobs",{},t),"ti-briefcase","Jobs",a.length),P(e,l("tasks",{},t),"ti-list-check","Tasks",i.length),P(e,l("files",{},t),"ti-folder","Files",o.length),P(e,l("forms",{},t),"ti-clipboard-list","Forms",r.length),P(e,l("analytics",{},t),"ti-chart-bar","Analytics")])}
    ${Le("Company",[P(e,l("users",{},t),"ti-users","Users",d.length),P(e,l("settings",{},t),"ti-settings","Settings")])}
    ${Le("Operations",[P(e,l("time",{},t),"ti-clock","My time","3.3h"),P(e,l("approvals",{},t),"ti-user-check","Approvals",0)])}
  `}function Le(e,t){return`
    <section class="side-group">
      <div class="side-label">${s(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function P(e,t,a,i,o=""){return`
    <a class="side-item ${ii(e,t)?"active":""}" href="${f(t)}" data-router>
      <i class="ti ${s(a)}"></i>
      <span>${s(i)}</span>
      ${o!==""?`<b>${s(String(o))}</b>`:""}
    </a>
  `}function wt(e){if(e.name==="command")return sa(p());if(e.name!=="company")return et(e.name);const t=e.companyId;return e.section==="jobs"?oa(e,t):e.section==="tasks"?pa(e,t):e.section==="files"?ha(e,t):e.section==="users"?wa(t):e.section==="settings"?Sa(t):e.section==="forms"?ka(t):e.section==="analytics"?na(e,t):e.section==="time"||e.section==="approvals"?Ua(e.section,t):et(e.section)}function sa(e){const t=h(e),a=x(e),i=a.filter(r=>["critical","urgent"].includes(r.priority)),o=H(e);return`
    ${V("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${f(l("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${f(l("tasks",{new:"1"},e))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${hi([["Jobs",t.length],["Open tasks",a.filter(r=>r.status!=="done").length],["Urgent tasks",i.length],["Drive files",o.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${f(l("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(r=>Ve(r)).join("")||g("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${z([["Company",b(e)],["Visible users",B(e).length],["Auth mode","Local basic gate"],["RLS status","Prepared, not enforced"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(r=>yi(r)).join("")||g("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function na(e,t){const a=e.jobId?_(e.jobId):null,i=a?[a]:h(t),o=x(t).filter(u=>!a||u.project_id===a.id),r=H(t).filter(u=>!a||u.job_id===a.id),d=te(t).filter(u=>!a||u.linked_job_id===a.id),c=o.filter(u=>u.status!=="done"),q=o.filter(u=>u.status!=="done"&&u.due&&new Date(u.due)<Bi()),j=zt(i,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${s(a?a.name:b(t))}</span>
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
          <small>${s(q.length)} overdue / ${s(o.filter(u=>u.priority==="urgent"||u.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${s(ke(j))}</strong>
          <small>${s(i.length)} visible job${i.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${s(r.length+d.length)}</strong>
          <small>${s(r.length)} files / ${s(d.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${s(Vi(o.filter(u=>u.status==="done").length,o.length))}</strong>
          <small>${s(o.filter(u=>u.status==="done").length)} done of ${s(o.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${i.map(u=>`
              <a class="analytics-row" href="${f(l("analytics",{job_id:u.id},t))}" data-router>
                <span><strong>${s(u.name)}</strong><small>${s(u.client_name||b(t))}</small></span>
                <span>${s(u.stage)}</span>
                <span>${s(Ie(u.id))}</span>
                <span>${s(He(u.id))}</span>
                <span>${s(ke(u.estimate_total))}</span>
              </a>
            `).join("")||g("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${ce.map(u=>{const N=o.filter(ae=>ae.status===u).length;return`<div><span>${s(Y(u))}</span><b><i style="width:${s(xt(N,o.length))}%"></i></b><strong>${s(N)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${o.filter(u=>u.status!=="done").sort((u,N)=>rt(N.priority)-rt(u.priority)).slice(0,8).map(u=>Ve(u)).join("")||g("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function oa(e,t){const a=si(e.params.get("tab")),i=ci();return`
    ${V("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${f(l("files",i?{job_id:i.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <a class="btn btn-primary" href="${f(l("jobs",{tab:"editor",...i?{job_id:i.id}:{}},t))}" data-router><i class="ti ti-plus"></i>Add job</a>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(qe).map(o=>`<option value="${s(o)}" ${n.stageFilter===o?"selected":""}>${s(o==="all"?"All stages":o)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${i?s(i.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${ht.map(o=>`<a class="${o===a?"active":""}" href="${f(l("jobs",{tab:o,...i?{job_id:i.id}:{}},t))}" data-router>${s(ni(o))}</a>`).join("")}
    </nav>
    ${ra(a,t,i)}
  `}function ra(e,t,a){return e==="pipeline"?Ze(t):e==="list"?la(t):e==="profile"?da(t,a):e==="editor"?ca(t,a):Ze(t)}function Ze(e){const t=Dt(e);return`
    <section class="job-board">
      ${qe.map(a=>{const i=t.filter(o=>o.stage===a);return`
          <article class="job-lane">
            <h2><span>${s(a)}</span><b>${i.length}</b></h2>
            ${i.map(o=>vi(o)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function la(e){const t=Dt(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===n.selectedJobId?"active":""}" type="button" data-select-job="${s(a.id)}">
            <span><strong>${s(a.name)}</strong><small>${s(a.client_name||"No client")} - ${s(a.site_address||"No address")}</small></span>
            <span>${s(a.stage)}</span>
            <span>${At(a.priority)}</span>
            <span>${s(a.owner_name||"Unassigned")}</span>
            <span>${s(Ie(a.id))}</span>
            <span>${ke(a.estimate_total)}</span>
          </button>
        `).join("")||g("No jobs match this view.")}
      </div>
    </section>
  `}function da(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${s(b(e))} - ${s(t.job_type)}</span>
          <h2>${s(t.name)}</h2>
          <p>${s(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${z([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",ke(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${f(l("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <a class="btn" href="${f(l("jobs",{tab:"editor",job_id:t.id},e))}" data-router>Edit job</a>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${be(l("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${Ie(t.id)} linked tasks`)}
          ${be(l("files",{job_id:t.id},e),"ti-folder","Files",`${He(t.id)} files`)}
          ${be(l("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${be(l("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:g("Create a job to see the profile workspace.")}function ca(e,t){const a=t||mi(e);return`
    <form class="panel job-editor" data-job-form>
      <input type="hidden" name="id" value="${s(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${I("Workspace name","name",a.name,!0)}
      ${C("Company","company_id",e,It().map(i=>[i.id,xe(i)]))}
      ${I("Client","client_name",a.client_name)}
      ${I("Contact","contact_name",a.contact_name)}
      ${I("Account owner","owner_name",a.owner_name)}
      ${I("Job type","job_type",a.job_type||"Roofing")}
      ${C("Business status","stage",a.stage||"Lead",qe.map(i=>[i,i]))}
      ${C("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(i=>[i,i]))}
      ${I("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${I("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${$e("Scope","scope",a.scope,"span-2")}
      ${$e("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${s(t.id)}">Delete</button>`:""}
      </div>
    </form>
  `}function pa(e,t){const a=e.jobId?_(e.jobId):null,i=e.params.get("task_id")||n.selectedTaskId,o=i?qt(i):st(t,a?.id)[0]||null,r=e.params.get("new")==="1"||e.params.get("edit")==="1",d=st(t,a?.id);return`
    ${V(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${f(l("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${f(l("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${ua(t,a)}
    <section class="task-layout ${r?"editing":""}">
      <article class="panel task-main">
        ${n.taskView==="board"?fa(t,d):ma(t,d)}
      </article>
      <aside class="panel detail-panel">
        ${r?ga(t,a,e.params.get("edit")==="1"?o:null):ba(t,o)}
      </aside>
    </section>
  `}function ua(e,t){return`
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
          ${["all"].concat(ce).map(i=>`<option value="${s(i)}" ${n.taskStatusFilter===i?"selected":""}>${s(i==="all"?"All statuses":Y(i))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(ve).map(i=>`<option value="${s(i)}" ${n.taskPriorityFilter===i?"selected":""}>${s(i==="all"?"All priorities":w(i))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${n.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${n.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function ma(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===n.selectedTaskId?"active":""}" type="button" data-select-task="${s(a.id)}">
          <span><strong>${s(a.title)}</strong><small>${s(a.description||Te(a.type))}</small></span>
          <span>${s(_(a.project_id)?.name||"Company task")}</span>
          <span>${s(me(a.assignee_id))}</span>
          <span>${Pt(a.priority)}</span>
          <span>${_i(a.status)}</span>
          <span>${Q(a.due)}</span>
        </button>
      `).join("")||g("No tasks match this workspace view.")}
    </div>
  `}function fa(e,t){return`
    <div class="task-board">
      ${ce.map(a=>{const i=t.filter(o=>o.status===a);return`
          <section class="task-column">
            <h2><span>${s(Y(a))}</span><b>${i.length}</b></h2>
            ${i.map(o=>`
              <button class="task-card priority-${s(o.priority)}" type="button" data-select-task="${s(o.id)}">
                <strong>${s(o.title)}</strong>
                <span>${s(_(o.project_id)?.name||b(e))}</span>
                <small>${s(me(o.assignee_id))} - ${Q(o.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function ba(e,t){return t?`
    <div class="section-head">
      <div><h2>${s(t.title)}</h2><p>${s(_(t.project_id)?.name||b(e))}</p></div>
      <a class="btn" href="${f(l("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${z([["Status",Y(t.status)],["Priority",w(t.priority)],["Type",Te(t.type)],["Assignee",me(t.assignee_id)],["Due",Q(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${s(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${g("No task selected.")}
    `}function ga(e,t,a){const i=a||fi(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${s(a?i.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${I("Task title","title",i.title,!0)}
      ${C("Job","project_id",i.project_id||"",[["","Company-level task"]].concat(h(e).map(o=>[o.id,o.name])))}
      ${C("Status","status",i.status,ce.map(o=>[o,Y(o)]))}
      ${C("Priority","priority",i.priority,ve.map(o=>[o,w(o)]))}
      ${C("Type","type",i.type,yt.map(o=>[o,Te(o)]))}
      ${C("Assignee","assignee_id",i.assignee_id,B(e).map(o=>[o.id,me(o.id)]))}
      ${I("Due date","due",i.due||E(1),!0,"date")}
      ${$e("Description","description",i.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${s(a.id)}">Delete</button>`:""}
        <a class="btn" href="${f(l("tasks",{...i.project_id?{job_id:i.project_id}:{}},e))}" data-router>Cancel</a>
      </div>
    </form>
  `}function ha(e,t){const a=e.params.get("folder")||n.driveFolder||"home";n.driveFolder=a;const i=e.jobId?_(e.jobId):null,o=Ke(t,a,i?.id||""),r=qi(o),d=ji(t);return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div class="drive-location">
            <span class="drive-logo"><i class="ti ti-folder"></i></span>
            <div>
              <strong>${s(i?i.name:"Company Drive")}</strong>
              <small>${s(i?`${i.client_name||b(t)} file workspace`:`${b(t)} file manager`)}</small>
            </div>
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
            <div class="drive-rail-section">
              <span>Drive</span>
              ${_t.map(([c,q,j])=>$i(c,q,j,Si(t,c))).join("")}
            </div>
            <div class="drive-rail-section">
              <span>Folders</span>
              ${X.map(([c,q,,j])=>`
                <a class="${a===c&&!i?"active":""}" href="${f(l("files",{folder:c},t))}" data-router>
                  <i class="ti ${s(j)}"></i>
                  <span>${s(q)}</span>
                  <b>${s(String(ki(t,c)))}</b>
                </a>
              `).join("")}
            </div>
            <div class="drive-rail-block">
              <span>Job folder</span>
              <select data-file-job-filter>
                <option value="">All jobs</option>
                ${h(t).map(c=>`<option value="${s(c.id)}" ${i?.id===c.id?"selected":""}>${s(c.name)}</option>`).join("")}
              </select>
            </div>
            <div class="drive-capacity">
              <span>${le(d.bytes)} of 1 GB</span>
              <b><i style="width:${s(String(Math.min(100,Math.round(d.bytes/1073741824*100))))}%"></i></b>
              <small>${d.count} file${d.count===1?"":"s"} in this company</small>
            </div>
          </aside>
          <div class="drive-main">
            <section class="file-toolbar">
              <label>
                <span>Folder</span>
                <select data-file-folder-filter>
                  <option value="home" ${a==="home"?"selected":""}>Home</option>
                  ${X.map(([c,q])=>`<option value="${s(c)}" ${a===c?"selected":""}>${s(q)}</option>`).join("")}
                </select>
              </label>
              <label>
                <span>Category</span>
                <select data-file-category-filter>
                  ${vt.map(c=>`<option value="${s(c)}" ${n.fileCategoryFilter===c?"selected":""}>${s(c)}</option>`).join("")}
                </select>
              </label>
              <nav class="breadcrumbs" aria-label="Drive location">
                <a href="${f(l("files",{},t))}" data-router>${s(b(t))}</a>
                ${a!=="home"?`<span>/</span><a href="${f(l("files",{folder:a},t))}" data-router>${s(F(a))}</a>`:""}
                ${i?`<span>/</span><strong>${s(i.name)}</strong>`:""}
              </nav>
              <div class="segmented" role="group" aria-label="Drive view">
                <button class="${n.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Grid</button>
                <button class="${n.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list"></i>List</button>
              </div>
            </section>
            <section class="drive-context-strip">
              ${ge("Scope",i?i.name:a==="home"?"All company files":F(a))}
              ${ge("Visible",`${o.length} file${o.length===1?"":"s"}`)}
              ${ge("Category",n.fileCategoryFilter)}
              ${ge("Storage",le(d.bytes))}
            </section>
            ${a==="home"&&n.driveFilter==="my-drive"&&!i?ya(t):""}
            ${va(t,o)}
          </div>
          <aside class="drive-details">
            ${_a(r,t)}
          </aside>
        </div>
      </section>
    </section>
  `}function ya(e){const t=h(e);return`
    <section class="drive-section-title">
      <div><h3>Company folders</h3><span>Folders are scoped to ${s(b(e))}</span></div>
      <button class="btn" type="button" data-action="open-file-upload"><i class="ti ti-upload"></i>Upload</button>
    </section>
    <section class="drive-folder-grid">
      ${X.map(([a,i,o,r])=>`
        <a class="drive-folder-card" href="${f(l("files",{folder:a},e))}" data-router>
          <span class="drive-folder-icon"><i class="ti ${s(r)}"></i></span>
          <strong>${s(i)}</strong>
          <small>${s(o)}</small>
          <em>${s(Ke(e,a).length)} files</em>
        </a>
      `).join("")}
    </section>
    <section class="drive-section-title recent-title">
      <div><h3>Job folders</h3><span>Each job has a linked drive folder.</span></div>
      <a class="btn" href="${f(l("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    </section>
    <section class="drive-folder-grid">
      ${t.map(a=>`
        <a class="drive-folder-card" href="${f(l("files",{folder:"jobs",job_id:a.id},e))}" data-router>
          <span class="drive-folder-icon"><i class="ti ti-folder"></i></span>
          <strong>${s(a.name)}</strong>
          <small>${s(a.client_name||b(e))}</small>
          <em>${He(a.id)} files</em>
        </a>
      `).join("")||g("Create a job workspace to get its file folder.")}
    </section>
  `}function va(e,t){const a=n.driveFilter==="my-drive"?"Files":wi();return`
    <section class="drive-section-title recent-title">
      <div><h3>${s(a)}</h3><span>${t.length} visible file${t.length===1?"":"s"}</span></div>
      <div class="drive-inline-actions">
        <button class="btn" type="button" data-action="open-file-upload"><i class="ti ti-plus"></i>New</button>
      </div>
    </section>
    ${n.driveView==="list"?`
      <div class="file-table-live">
        ${t.map(i=>`
          <button type="button" class="file-row-live ${i.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(i.id)}">
            <span class="file-type ${s(Ot(i))}">${s(Lt(i).slice(0,3).toUpperCase())}</span>
            <strong>${s(i.file_name)}<span>${s(i.notes||i.object_path||F(i.folder))}</span></strong>
            <span>${s(i.category||F(i.folder))}</span>
            <span>${s(_(i.job_id)?.name||"Company shared")}</span>
            <span>${le(i.size_bytes)}</span>
          </button>
        `).join("")||g("No files match this Drive view.")}
      </div>
    `:`
      <div class="file-grid-live">
        ${t.map(i=>`
          <button type="button" class="file-card-live ${i.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(i.id)}">
            <span class="file-thumb">${Rt(i)}</span>
            <strong>${s(i.file_name)}</strong>
            <span>${s(i.category||F(i.folder))} / ${le(i.size_bytes)}</span>
          </button>
        `).join("")||g("No files match this Drive view.")}
      </div>
    `}
  `}function _a(e,t){return e?`
    <div class="file-detail-preview">${Rt(e,!0)}</div>
    <h3>${s(e.file_name)}</h3>
    <p>${s(e.notes||_(e.job_id)?.name||F(e.folder))}</p>
    <div class="file-detail-list">
      ${D("Category",e.category||F(e.folder))}
      ${D("Job",_(e.job_id)?.name||"Company shared")}
      ${D("Uploaded by",e.uploaded_by_label||"Quest HQ")}
      ${D("Uploaded",Q(e.created_at))}
      ${D("Size",le(e.size_bytes))}
      ${D("Storage path",e.object_path||"Metadata only")}
    </div>
    <div class="file-detail-actions">
      <button class="btn" type="button" data-action="download-file" data-file-id="${s(e.id)}"><i class="ti ti-download"></i>Download</button>
      <button class="btn danger" type="button" data-action="delete-file" data-file-id="${s(e.id)}"><i class="ti ti-trash"></i>Delete</button>
    </div>
  `:`
      <div class="file-detail-preview"><span class="file-doc-icon"><i class="ti ti-folder-open"></i></span></div>
      <h3>${s(b(t))} Drive</h3>
      <p>Pick a file to see metadata, job context, storage path, and actions.</p>
      <div class="file-detail-list">
        ${D("Company folders",X.length)}
        ${D("Job folders",h(t).length)}
        ${D("Visible files",Ke(t,n.driveFolder).length)}
      </div>
    `}function $a(){const e=p(),t=n.route?.params?.get("folder")||(n.driveFolder==="home"?"shared":n.driveFolder),a=n.route?.jobId||"";return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">${s(b(e))} Drive</div><h2 id="upload-title">Upload files</h2></div>
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
          ${I("Metadata-only file name","file_name","")}
          ${C("Folder","folder",t,X.map(([i,o])=>[i,o]))}
          ${C("Job","job_id",a,[["","Company shared file"]].concat(h(e).map(i=>[i.id,i.name])))}
          ${C("Category","category",F(t),vt.filter(i=>i!=="All categories").map(i=>[i,i]))}
          ${I("Uploaded by","uploaded_by_label",A().profile.full_name||"Quest HQ")}
          ${$e("Notes","notes","","span-2")}
          <div class="form-actions span-2">
            <button class="btn btn-primary" type="submit">Upload to drive</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
            <button class="btn" type="reset">Clear</button>
          </div>
          <div class="file-upload-log span-2">
            <strong>Upload target</strong>
            <span>${s(e)}/${s(a?`jobs/${a}`:t)}</span>
          </div>
        </form>
      </div>
    </div>
  `}function wa(e){const t=B(e);return`
    ${V("Users","Company members, roles, workers, and access context.",`
      <a class="btn btn-primary" href="${f(l("settings",{},e))}" data-router><i class="ti ti-settings"></i>Settings</a>
    `)}
    <section class="users-grid">
      ${t.map(a=>`
        <article class="user-card">
          ${We({full_name:a.full_name,avatar_url:a.avatar_url},"avatar")}
          <div>
            <strong>${s(a.full_name)}</strong>
            <span>${s(a.email)}</span>
            <small>${s(Ct(e,a.id))}</small>
          </div>
        </article>
      `).join("")||g("No users assigned to this company yet.")}
    </section>
    <section class="panel top-gap">
      <div class="section-head"><div><h2>Membership model</h2><p>company_memberships is the canonical table; legacy company_ids remain as backfill fields.</p></div></div>
      ${z([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Client-filtered only while auth is disabled"],["Active role",ze(e)]])}
    </section>
  `}function Sa(e){const t=Je(e);return`
    ${V("Settings","Company settings, roles, approvals, and admin controls.","")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${z([["Name",b(e)],["Company ID",e],["Color",t?.color||ee(e)],["Visible jobs",h(e).length]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Prepared for Supabase Auth and RLS.</p></div></div>
        ${z([["Auth switch","Disabled"],["Local login","Enabled"],["Isolation","Client-filtered only"],["Memberships",String(n.memberships.filter(a=>a.company_id===e).length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Approvals</h2><p>Quest-owned access approval queue.</p></div></div>
        ${g("No pending company approvals.")}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${B(e).map(a=>`<div><strong>${s(a.full_name)}</strong><span>${s(Ct(e,a.id))}</span></div>`).join("")||g("No workers assigned.")}
        </div>
      </article>
    </section>
  `}function ka(e){const t=Di(e),a=Ye(e);return`
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
            ${De.map(i=>`<option value="${s(i)}" ${n.formTypeFilter===i?"selected":""}>${s(i)}</option>`).join("")}
          </select>
        </label>
        <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
        <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
      </div>
      <nav class="tabbar forms-tabs" aria-label="Forms workspace">
        ${["library","builder","responses","templates"].map(i=>`
          <button class="${n.formsTab===i?"active":""}" type="button" data-action="set-forms-tab" data-tab="${s(i)}">${s(w(i))}</button>
        `).join("")}
      </nav>
      ${n.formsTab==="library"?ja(e,t,a):""}
      ${n.formsTab==="builder"?Da(e,a):""}
      ${n.formsTab==="responses"?Ra(e,a):""}
      ${n.formsTab==="templates"?Ea():""}
    </section>
  `}function ja(e,t,a){return`
    <section class="forms-library-grid">
      <article class="forms-library-panel panel">
        <div class="forms-panel-head">
          <div>
            <strong>Company library</strong>
            <span>${t.length} visible form${t.length===1?"":"s"} in ${s(b(e))}</span>
          </div>
          <button class="btn" type="button" data-action="new-form"><i class="ti ti-plus"></i>Blank form</button>
        </div>
        <div class="forms-list">
          ${t.map(i=>`
            <button class="form-card ${a?.id===i.id?"active":""}" type="button" data-action="select-form" data-form-id="${s(i.id)}">
              <span class="form-card-top">
                <i class="ti ti-clipboard-list"></i>
                <b>${s(i.status)}</b>
              </span>
              <strong>${s(i.title)}</strong>
              <span>${s(i.description||"No description yet.")}</span>
              <small>${s(i.type)} / ${s(i.audience||"Internal")} / ${re(i)} questions</small>
            </button>
          `).join("")||g("No forms match this company view.")}
        </div>
      </article>
      <aside class="forms-summary panel">
        ${a?qa(e,a):g("Create a form or choose a template.")}
      </aside>
    </section>
  `}function qa(e,t){const a=Fe(t.id),i=_(t.linked_job_id);return`
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
      <span>${re(t)} questions</span>
      <span>${a.length} responses</span>
    </div>
    <div class="summary-pill-grid">
      ${Re("Updated",Q(t.updated_at),"Last edit")}
      ${Re("Approval",t.require_approval?"Required":"Not required","Review flow")}
      ${Re("Email",t.collect_email?"Collected":"Optional","Submitter identity")}
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
  `}function Da(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${g("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(n.formEditorTab)?n.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${s(a)}">
      ${Ia(t,a)}
      ${a==="questions"?`
        ${Ca(e,t)}
        ${Fa(t)}
        ${Xe(e,t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${Ta(e,t)}
        </article>
        ${Xe(e,t)}
      `:""}
      ${a==="responses"?Aa(e,t):""}
    </section>
  `}function Ia(e,t){const a=Fe(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${s(e.title)}</strong>
        <span>${s(e.status)} / ${re(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(i=>`
        <button class="${t===i?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${s(i)}">
          ${i==="questions"?'<i class="ti ti-list-details"></i>':i==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${s(w(i))}
        </button>
      `).join("")}
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(e.id)}">Save</button>
    </div>
  `}function Ca(e,t){return`
    <aside class="panel form-settings-panel form-identity-panel">
      <div class="section-head"><div><h2>Form setup</h2><p>${s(t.status)} / ${s(t.type)}</p></div></div>
      ${ie("Title","title",t.title,!0)}
      ${Ut("Description","description",t.description)}
      ${G("Type","type",t.type,De.map(a=>[a,a]))}
      ${G("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(h(e).map(a=>[a.id,a.name])))}
      <div class="forms-simple-meta">
        <span>${s(t.audience||"Internal")}</span>
        <span>${s(b(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">More settings</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      </div>
    </aside>
  `}function Fa(e){return`
    <article class="panel question-workbench">
      <div class="section-head">
        <div><h2>Questions</h2><p>${re(e)} question${re(e)===1?"":"s"}</p></div>
        <div class="question-add-menu compact">
          ${se.slice(0,5).map(([t,a])=>`<button class="btn" type="button" data-action="add-question" data-question-type="${s(t)}">${s(a)}</button>`).join("")}
        </div>
      </div>
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${se.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${s(t)}" title="${s(a)}">${s(Ii(t))}</button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>Pa(t,a)).join("")||g("Add the first question.")}
        </div>
      </div>
    </article>
  `}function Xe(e,t){return`
    <aside class="panel forms-preview-panel">
      <div class="section-head"><div><h2>Preview</h2><p>Submits into the local company response queue.</p></div></div>
      ${La(e,t)}
    </aside>
  `}function Ta(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${ie("Title","title",t.title,!0)}
      ${G("Status","status",t.status,Ne.map(a=>[a,a]))}
      ${Ut("Description","description",t.description)}
      ${G("Type","type",t.type,De.map(a=>[a,a]))}
      ${ie("Audience","audience",t.audience)}
      ${G("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(h(e).map(a=>[a.id,a.name])))}
      ${ie("Theme color","theme_color",t.theme_color||ee(e),!1,"color")}
      ${G("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${ie("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${s(t.id)}">Delete</button>
    </div>
  `}function Aa(e,t){const a=Fe(t.id),i=a[0]||null;return`
    <article class="panel response-list-panel forms-response-editor">
      <div class="section-head">
        <div><h2>Response inbox</h2><p>${a.length} captured response${a.length===1?"":"s"} for this form.</p></div>
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="questions"><i class="ti ti-list-details"></i>Questions</button>
      </div>
      <div class="response-list">
        ${a.map(o=>`
          <button type="button" class="response-card">
            <strong>${s(o.submitted_by||o.submitter_email||"Anonymous")}</strong>
            <span>${s(t.title)}</span>
            <small>${Q(o.created_at)}</small>
          </button>
        `).join("")||g("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${i?Qt(i):g("No response selected.")}
    </aside>
  `}function Pa(e,t){const a=se.map(([i,o])=>`<option value="${s(i)}" ${e.type===i?"selected":""}>${s(o)}</option>`).join("");return`
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
      ${we(e)?`
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
  `}function La(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${s(t.id)}" style="--form-accent:${s(t.theme_color||ee(e))}">
      <div class="designed-form-header">
        <span>${s(b(e))}</span>
        <h2>${s(t.title)}</h2>
        <p>${s(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>Oa(a)).join("")||g("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${s(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function Oa(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?L(e,`<textarea name="${s(t)}" rows="3" ${a}></textarea>`):e.type==="date"?L(e,`<input name="${s(t)}" type="date" ${a} />`):e.type==="file"?L(e,`<input name="${s(t)}" type="file" ${a} />`):e.type==="yesno"?L(e,`<select name="${s(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?L(e,`<input name="${s(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?L(e,`<select name="${s(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(i=>`<option>${s(i)}</option>`).join("")}</select>`):e.type==="checkbox"?L(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${s(t)}" type="checkbox" value="${s(i)}" /> ${s(i)}</label>`).join("")}</div>`):e.type==="multiple"?L(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${s(t)}" type="radio" value="${s(i)}" ${a} /> ${s(i)}</label>`).join("")}</div>`):L(e,`<input name="${s(t)}" ${a} />`)}function Ra(e,t){const a=t?Fe(t.id):Et(e),i=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(o=>`
            <button type="button" class="response-card">
              <strong>${s(K(o.form_id)?.title||"Unknown form")}</strong>
              <span>${s(o.submitted_by||o.submitter_email||"Anonymous")}</span>
              <small>${Q(o.created_at)}</small>
            </button>
          `).join("")||g("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${i?Qt(i):g("No response selected.")}
      </aside>
    </section>
  `}function Ea(e){return`
    <section class="forms-template-grid">
      ${Nt().map(t=>`
        <article class="template-card panel">
          <span class="template-icon"><i class="ti ti-template"></i></span>
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
  `}function Ua(e,t){const a={time:["My time","Personal time and shift context inside the company workspace."],approvals:["Approvals","Company access approvals and role requests."]},[i,o]=a[e]||a.time;return`
    ${V(i,o,"")}
    <section class="dashboard-grid">
      <article class="panel">
        <div class="section-head"><div><h2>Summary</h2><p>Quest-owned operational surface.</p></div></div>
        ${z([["Company",b(t)],["Visible jobs",h(t).length],["Open tasks",x(t).filter(r=>r.status!=="done").length],["Mode","Local basic mode"]])}
      </article>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Workload queue</h2><p>Sorted by active company and urgency.</p></div></div>
        <div class="queue-list">${x(t).slice(0,8).map(r=>Ve(r)).join("")||g("No tasks found.")}</div>
      </article>
    </section>
  `}function et(e){return`
    ${V(w(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${g("Module data model pending.")}
    </section>
  `}function Qa(){document.title="Sign in | Quest HQ";const e=kt(n.route.params.get("return_url")||f(l("jobs",{},v())));$t.innerHTML=`
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
          <label>Username<input name="username" value="${s(J.localUsername)}" autocomplete="username" /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" /></label>
          <input type="hidden" name="return_url" value="${s(e)}" />
          <button class="btn btn-primary full" type="submit">Sign in</button>
          ${n.loginError?`<div class="form-message error">${s(n.loginError)}</div>`:'<div class="form-message">Temporary credentials: lumen123 / lumen123</div>'}
        </form>
      </section>
    </main>
  `}function Na(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${We(e,"avatar large")}
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
  `}function Ma(e){const t=e.target.closest("[data-action]");if(t){Ja(e,t);return}const a=e.target.closest("[data-select-job]");if(a){e.preventDefault(),li(a.dataset.selectJob);return}const i=e.target.closest("[data-select-task]");if(i){e.preventDefault(),di(i.dataset.selectTask);return}const o=e.target.closest("a[href][data-router]");o&&(o.target||o.hasAttribute("download")||(e.preventDefault(),y(o.getAttribute("href"))))}function Ja(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),n.dataLoaded=!1,n.sync={label:"Refreshing...",mode:"loading"},m();return}if(a==="sign-out"){e.preventDefault(),localStorage.removeItem(ye),n.session=null,y("/login",{replace:!0});return}if(a==="open-profile"){e.preventDefault(),n.modal="profile",m();return}if(a==="open-file-upload"){e.preventDefault(),n.modal="file-upload",m();return}if(a==="close-modal"){e.preventDefault(),n.modal="",m();return}if(a==="set-task-view"){e.preventDefault(),n.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(ft,n.taskView),m();return}if(a==="set-drive-view"){e.preventDefault(),n.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(bt,n.driveView),m();return}if(a==="set-drive-filter"){e.preventDefault(),n.driveFilter=t.dataset.filter||"my-drive",localStorage.setItem(gt,n.driveFilter),n.selectedFileId="",m();return}if(a==="select-file"){e.preventDefault(),n.selectedFileId=t.dataset.fileId||"",m();return}if(a==="download-file"){e.preventDefault(),Ga(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),Za(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),n.formsTab=t.dataset.tab||"library",m();return}if(a==="set-form-editor-tab"){e.preventDefault(),n.formEditorTab=t.dataset.tab||"questions",m();return}if(a==="new-form"){e.preventDefault(),Fi(p());return}if(a==="select-form"){e.preventDefault(),nt(t.dataset.formId);return}if(a==="edit-form"){e.preventDefault(),nt(t.dataset.formId),n.formsTab="builder",n.formEditorTab="questions",m();return}if(a==="save-form"){e.preventDefault(),k("Form saved locally"),m();return}if(a==="publish-form"){e.preventDefault(),ot(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),ot(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),Ti(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),Ai(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),Pi(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),Li(p());return}if(a==="use-form-template"){e.preventDefault(),Oi(p(),t.dataset.templateId);return}if(a==="add-question"){e.preventDefault(),Ri(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),Ei(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),Ui(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),Qi(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),Ni(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),Mi(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),Va(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),Ka(t.dataset.taskId))}function xa(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===J.localUsername&&String(t.password||"")===J.localPassword)){n.loginError="Invalid temporary credentials.",m();return}n.loginError="",n.session=Ee(),S(ye,n.session),y(kt(t.return_url||f(l("jobs",{},v()))),{replace:!0});return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...A().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};S(lt,a),n.profileDraft=a,n.session={...A(),profile:a},S(ye,n.session),n.modal="",m();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),Ba(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),Wa(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),Ya(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),Ji(e.target))}function za(e){if(e.target.matches("[data-global-search]")){n.query=e.target.value,Oe();return}if(e.target.matches("[data-file-search]")){n.fileQuery=e.target.value,Oe();return}if(e.target.matches("[data-form-search]")){n.formQuery=e.target.value,Oe();return}if(e.target.matches("[data-form-field]")){Mt(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Jt(e.target)}function Ha(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||v();ri(t);return}if(e.target.matches("[data-stage-filter]")){n.stageFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-status-filter]")){n.taskStatusFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-priority-filter]")){n.taskPriorityFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;y(l("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;y(l("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){n.fileCategoryFilter=e.target.value||"All categories",m();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=n.route?.jobId||"";y(l("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;y(l("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){n.formTypeFilter=e.target.value||"all",m();return}if(e.target.matches("[data-form-field]")){Mt(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Jt(e.target)}async function Ba(e){const t=ne(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.updated_at=new Date().toISOString();const a=n.jobs.some(o=>o.id===t.id),i=U();if(i){const o=a?await i.from("jobs").update(t).eq("id",t.id).select().single():await i.from("jobs").insert(t).select().single();if(!o.error&&o.data){tt(ne(o.data)),n.sync={label:"Quest Supabase live",mode:"live"},y(l("jobs",{tab:"profile",job_id:o.data.id},t.company_id),{replace:!0});return}n.sync={label:"Saved locally",mode:"local"}}tt(t),y(l("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function Va(e){if(!e)return;const t=p(),a=U();a&&await a.from("jobs").delete().eq("id",e),n.jobs=n.jobs.filter(i=>i.id!==e),n.selectedJobId=h(t)[0]?.id||"",W(),y(l("jobs",{tab:"list"},t),{replace:!0})}async function Wa(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),i=oe({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:A().profile.member_id||B(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),o=n.tasks.some(d=>d.id===i.id),r=U();if(r){const d=bi(i),c=o?await r.from("tasks").update(d).eq("id",i.id).select().single():await r.from("tasks").insert(d).select().single();if(!c.error&&c.data){at(oe(c.data)),n.sync={label:"Quest Supabase live",mode:"live"},y(l("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0});return}n.sync={label:"Task saved locally",mode:"local"}}at(i),y(l("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0})}async function Ka(e){if(!e)return;const t=p(),a=U();a&&await a.from("tasks").delete().eq("id",e),n.tasks=n.tasks.filter(i=>i.id!==e),n.selectedTaskId="",W(),y(l("tasks",{},t),{replace:!0})}async function Ya(e){const t=p(),a=new FormData(e),i=Object.fromEntries(a.entries()),o=Array.from(e.elements.files?.files||[]),r=String(i.file_name||"").trim(),d=o.length?o:r?[null]:[];if(!d.length){n.sync={label:"Choose a file or enter a file name",mode:"local"},m();return}const c=U();let q=0;for(const j of d){const u=crypto.randomUUID(),N=j?.name||r,ae=String(i.folder||"shared"),Ae=`${t}/${i.job_id?`jobs/${i.job_id}`:ae}/${u}-${Wi(N)}`;let Pe=!1;c&&j&&(Pe=!(await c.storage.from("quest-job-files").upload(Ae,j,{cacheControl:"3600",upsert:!1,contentType:j.type||"application/octet-stream"})).error);const Ge=_e({id:u,company_id:t,job_id:i.job_id||"",folder:ae,file_name:N,mime_type:j?.type||"application/octet-stream",size_bytes:j?.size||Number(i.size_bytes||0),category:i.category||F(ae),notes:i.notes||"",uploaded_by_label:i.uploaded_by_label||A().profile.full_name,bucket_id:"quest-job-files",object_path:Pe||!j?Ae:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(c){const fe=await c.from("job_files").insert(gi(Ge)).select().single();if(!fe.error&&fe.data){it(_e(fe.data)),q+=1;continue}Pe&&await c.storage.from("quest-job-files").remove([Ae])}it(Ge)}n.sync=q===d.length?{label:"Quest Supabase live",mode:"live"}:{label:q?"Some files saved locally":"File record saved locally",mode:q?"loading":"local"},n.modal="",y(l("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),{replace:!0})}async function Ga(e){const t=n.files.find(o=>o.id===e);if(!t?.object_path){n.sync={label:"No stored object for this file",mode:"local"},m();return}const a=U();if(!a)return;const i=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(i.error||!i.data?.signedUrl){n.sync={label:"Download failed",mode:"local"},m();return}window.open(i.data.signedUrl,"_blank","noopener,noreferrer")}async function Za(e){const t=n.files.find(i=>i.id===e);if(!t)return;const a=U();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),n.files=n.files.filter(i=>i.id!==e),n.selectedFileId="",W(),m()}function tt(e){const t=n.jobs.findIndex(a=>a.id===e.id);t>=0?n.jobs[t]=e:n.jobs.unshift(e),n.selectedJobId=e.id,W()}function at(e){const t=n.tasks.findIndex(a=>a.id===e.id);t>=0?n.tasks[t]=e:n.tasks.unshift(e),n.selectedTaskId=e.id,W()}function it(e){const t=n.files.findIndex(a=>a.id===e.id);t>=0?n.files[t]=e:n.files.unshift(e),W()}function Oe(){const e=document.getElementById("workspace");e&&(jt(n.route),e.innerHTML=wt(n.route))}function St(){const e=Me(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const i=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:i,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function Xa(){const e=Me(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||he(t.get("job_id")||t.get("project_id"))||localStorage.getItem(je)||v();let o={"/index.html":l("jobs",{},a),"/command.html":l("jobs",{},a),"/admin.html":l("settings",{},a),"/automations.html":l("settings",{},a),"/crm.html":l("users",{},a),"/dashboards.html":l("analytics",{},a),"/files.html":l("files",{},a),"/finance.html":l("analytics",{},a),"/forms.html":l("forms",{},a),"/jobs.html":l("jobs",{},a),"/knowledge.html":l("files",{folder:"shared"},a),"/login.html":"/login","/templates.html":l("forms",{},a),"/tickets.html":l("tasks",{},a)}[e];if(e==="/jobs"){const d=t.get("tab");d==="tasks"?o=l("tasks",R(t,["job_id","task_id","new","edit"]),a):d==="files"?o=l("files",R(t,["job_id","folder"]),a):d==="forms"?o=l("forms",R(t,["job_id"]),a):d==="analytics"?o=l("analytics",R(t,["job_id"]),a):o=l("jobs",R(t,["job_id","tab"]),a)}if(e==="/files"&&(o=l("files",R(t,["job_id","folder"]),a)),e==="/forms"&&(o=l("forms",R(t,["job_id"]),a)),e==="/analytics"&&(o=l("analytics",R(t,["job_id"]),a)),e==="/admin"&&(o=l("settings",{},a)),e==="/time"&&(o=l("time",{},a)),e==="/team"&&(o=l("users",{},a)),e==="/approvals"&&(o=l("approvals",{},a)),e==="/clock"&&(o=l("settings",{},a)),e==="/task-management.html"){const d=t.get("project_id")||t.get("job_id")||"";o=l("tasks",d?{job_id:d}:{},he(d)||a)}const r=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(r){const d=decodeURIComponent(r[1]);o=l("tasks",{job_id:d},he(d)||a)}o&&window.history.replaceState({},"",f(o))}function ei(e){if(e.name!=="company")return"";const t=ue();if(!t.includes(e.companyId))return l(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||v());if(!["jobs","tasks","files","forms","analytics","users","settings","time","approvals"].includes(e.section))return l("jobs",{},e.companyId);const i=e.jobId?he(e.jobId):"";return i&&i!==e.companyId&&t.includes(i)?l(e.section,Object.fromEntries(e.params.entries()),i):""}function Me(){let e=window.location.pathname||"/";return Z&&e.startsWith(Z)&&(e=e.slice(Z.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function f(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),i=t.startsWith("/")?t:"/"+t;return`${Z}${i}${a?`?${a}`:""}`||"/"}function y(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(Z+"/")||Z===""&&e.startsWith("/")?e:f(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),m()}function ti(){return`${Me()}${window.location.search}`}function kt(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?f(l("jobs",{},v())):`${t.pathname}${t.search}`}catch{return f(l("jobs",{},v()))}}function l(e="jobs",t={},a=p()){const i=new URLSearchParams(t);for(const[o,r]of[...i.entries()])(r==null||r==="")&&i.delete(o);return`/company/${encodeURIComponent(a||v())}/${e}${i.toString()?`?${i.toString()}`:""}`}function ai(e){return e.name==="company"?w(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":w(e.name||"Workspace")}function ii(e,t){const[a]=t.split("?"),i=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!i||e.name!=="company"?!1:e.companyId===decodeURIComponent(i[1])&&e.section===i[2]}function si(e){return ht.includes(e)?e:"pipeline"}function ni(e){return{pipeline:"Pipeline",list:"List",profile:"Profile",editor:"Editor"}[e]||e}function oi(e){const t=e.companyId||n.activeCompanyId||v(),a=ue();n.activeCompanyId=a.includes(t)?t:a[0]||v(),localStorage.setItem(je,n.activeCompanyId)}function jt(e){const t=p();e.jobId&&h(t).some(i=>i.id===e.jobId)&&(n.selectedJobId=e.jobId),(!n.selectedJobId||!h(t).some(i=>i.id===n.selectedJobId))&&(n.selectedJobId=h(t)[0]?.id||"");const a=e.params.get("task_id");a&&x(t).some(i=>i.id===a)&&(n.selectedTaskId=a),e.section!=="tasks"&&(n.selectedTaskId=""),n.driveFolder=e.params.get("folder")||"home"}function ri(e){const t=ue(),a=t.includes(e)?e:t[0]||v();n.activeCompanyId=a,localStorage.setItem(je,a);const i=n.route||St(),o=i.name==="company"?i.section:"jobs";y(l(o,{},a))}function li(e){const t=_(e);t&&(n.selectedJobId=e,y(l("jobs",{tab:"profile",job_id:e},t.company_id)))}function di(e){const t=qt(e);t&&(n.selectedTaskId=e,y(l("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function ci(){return _(n.selectedJobId)||h(p())[0]||null}function _(e){return n.jobs.find(t=>t.id===e)||null}function qt(e){return n.tasks.find(t=>t.id===e)||null}function h(e=p()){return n.jobs.filter(t=>t.company_id===e)}function x(e=p()){return n.tasks.filter(t=>t.company_id===e)}function H(e=p()){return n.files.filter(t=>t.company_id===e)}function B(e=p()){return n.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function Dt(e=p()){const t=n.query.trim().toLowerCase();return h(e).filter(a=>n.stageFilter!=="all"&&a.stage!==n.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,b(a.company_id)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function st(e=p(),t=""){const a=n.query.trim().toLowerCase();return x(e).filter(i=>t&&i.project_id!==t||n.taskStatusFilter!=="all"&&i.status!==n.taskStatusFilter||n.taskPriorityFilter!=="all"&&i.priority!==n.taskPriorityFilter?!1:a?[i.title,i.description,Te(i.type),me(i.assignee_id),_(i.project_id)?.name].some(o=>String(o||"").toLowerCase().includes(a)):!0)}function It(){const e=ue();return n.companies.filter(t=>e.includes(t.id))}function ue(){const e=A().profile,t=n.companies.map(o=>o.id);if(["developer","admin"].includes(e.role))return t.length?t:pe.map(o=>o.id);const a=n.memberships.filter(o=>o.profile_id===e.id&&o.status!=="disabled").map(o=>o.company_id);return(a.length?a:e.company_ids||[]).filter(o=>t.includes(o))}function p(){const e=ue();return e.includes(n.activeCompanyId)?n.activeCompanyId:e[0]||v()}function v(){return pe[0].id}function Je(e){return n.companies.find(t=>t.id===e)||pe.find(t=>t.id===e)||null}function b(e){const t=Je(e);return t?xe(t):e||"Company"}function xe(e){return e.short_name||e.label||e.name||e.id}function ee(e){return Je(e)?.color||"#f0b23b"}function he(e){return n.jobs.find(t=>t.id===e)?.company_id||""}function ze(e){const t=A().profile;return["developer","admin"].includes(t.role)?w(t.role):w(n.memberships.find(a=>a.company_id===e&&a.profile_id===t.id)?.role||t.role||"member")}function Ct(e,t){const a=n.memberships.find(i=>i.company_id===e&&(i.member_id===t||i.profile_id===t));return w(a?.role||"member")}function me(e){const t=n.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function Ie(e){return n.tasks.filter(t=>t.project_id===e).length}function He(e){return n.files.filter(t=>t.job_id===e).length}function pi(e){return{id:String(e.id||"").trim(),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function ne(e){return{id:String(e.id||""),company_id:String(e.company_id||v()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:qe.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:T(e.estimate_total),invoice_total:T(e.invoice_total),task_count:T(e.task_count),file_count:T(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function oe(e){const t=ve.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=ce.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:yt.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:String(e.company_id||v()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||E(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:ve.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function _e(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:String(e.company_id||v()),job_id:String(e.job_id||""),folder:String(e.folder||zi(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:T(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ce(e){const t=Array.isArray(e.questions)?e.questions.map(Be):[],a=De.includes(e.type)?e.type:"Internal",i=Ne.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:String(e.company_id||v()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:i,audience:String(e.audience||"Internal").trim(),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Be(e){const t=se.some(([i])=>i===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(i=>String(i||"").trim()).filter(Boolean):[]};return we(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function Ft(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:String(e.company_id||v()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function Tt(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,company_ids:Array.isArray(e.company_ids)?e.company_ids:[]}}function ui(e){return{company_id:String(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function mi(e=p()){return ne({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function fi(e=p(),t=""){return oe({id:"",title:"",company_id:e,project_id:t,assignee_id:B(e)[0]?.id||"abraham",creator_id:A().profile.member_id||"abraham",due:E(1),priority:"medium",status:"todo",type:"admin"})}function bi(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function gi(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function A(){return n.session?{...n.session,profile:{...Ee().profile,...n.session.profile||{},...n.profileDraft||{}}}:Ee()}function Ee(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",...n.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:J.localUsername,email:e.email},profile:e}}function V(e,t,a=""){return`
    <section class="workspace-head">
      <div>
        <div class="context-line"><span>${s(b(p()))}</span><b>${s(ze(p()))}</b></div>
        <h1>${s(e)}</h1>
        <p>${s(t)}</p>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function hi(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric"><span>${s(t)}</span><strong>${s(a)}</strong></article>`).join("")}</section>`}function yi(e){return`
    <button class="queue-row" type="button" data-select-job="${s(e.id)}">
      <span><strong>${s(e.name)}</strong><small>${s(e.client_name||b(e.company_id))}</small></span>
      ${At(e.priority)}
      <b>${s(e.stage)}</b>
    </button>
  `}function Ve(e){return`
    <button class="queue-row" type="button" data-select-task="${s(e.id)}">
      <span><strong>${s(e.title)}</strong><small>${s(_(e.project_id)?.name||b(e.company_id))}</small></span>
      ${Pt(e.priority)}
      <b>${s(Y(e.status))}</b>
    </button>
  `}function vi(e){return`
    <button class="job-card priority-${s(e.priority.toLowerCase())} ${e.id===n.selectedJobId?"active":""}" type="button" data-select-job="${s(e.id)}">
      <strong>${s(e.name)}</strong>
      <span>${s(e.client_name||"No client")}</span>
      <small>${s(b(e.company_id))} - ${s(e.owner_name||"Unassigned")}</small>
      <em>${s(Ie(e.id))} tasks</em>
    </button>
  `}function be(e,t,a,i){return`
    <a class="mini-link" href="${f(e)}" data-router>
      <i class="ti ${s(t)}"></i>
      <span><strong>${s(a)}</strong><small>${s(i)}</small></span>
    </a>
  `}function z(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${s(t)}</span><strong>${s(a)}</strong></div>`).join("")}</div>`}function I(e,t,a="",i=!1,o="text",r=""){return`<label class="${s(r)}"><span>${s(e)}</span><input name="${s(t)}" type="${s(o)}" value="${s(a)}" ${i?"required":""} /></label>`}function $e(e,t,a="",i=""){return`<label class="${s(i)}"><span>${s(e)}</span><textarea name="${s(t)}" rows="4">${s(a)}</textarea></label>`}function C(e,t,a,i){return`
    <label><span>${s(e)}</span><select name="${s(t)}">
      ${i.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function At(e){return`<span class="priority ${s(String(e).toLowerCase())}">${s(e)}</span>`}function Pt(e){return`<span class="priority ${s(e)}">${s(w(e))}</span>`}function _i(e){return`<span class="status-pill ${s(e)}">${s(Y(e))}</span>`}function We(e,t){if(e.avatar_url)return`<span class="${s(t)}"><img src="${s(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${s(t)}">${s(a)}</span>`}function g(e){return`<div class="empty-state">${s(e)}</div>`}function R(e,t){const a={};return t.forEach(i=>{const o=e.get(i);o&&(a[i]=o)}),a}function W(){S(dt,n.jobs),S(ct,n.tasks),S(pt,n.files),S(de,n.forms),S(Qe,n.formResponses),S(ut,n.teamMembers),S(mt,n.memberships)}function Re(e,t,a=""){return`<article class="metric"><span>${s(e)}</span><strong>${s(t)}</strong>${a?`<small>${s(a)}</small>`:""}</article>`}function D(e,t){return`<div><strong>${s(e)}</strong><span>${s(t)}</span></div>`}function $i(e,t,a,i=""){return`
    <button class="${n.driveFilter===e?"active":""}" type="button" data-action="set-drive-filter" data-filter="${s(e)}">
      <i class="ti ${s(a)}"></i>
      <span>${s(t)}</span>
      ${i!==""?`<b>${s(String(i))}</b>`:""}
    </button>
  `}function wi(){return _t.find(([e])=>e===n.driveFilter)?.[1]||"My Drive"}function Si(e,t){const a=H(e);return t==="images"?a.filter(i=>i.mime_type.includes("image")||i.folder==="photos").length:t==="documents"?a.filter(i=>!i.mime_type.includes("image")&&i.folder!=="photos").length:a.length}function ki(e,t){const a=H(e);return t==="jobs"?a.filter(i=>i.job_id).length:a.filter(i=>i.folder===t).length}function ge(e,t){return`<span><b>${s(e)}</b>${s(t)}</span>`}function ji(e=p()){const t=H(e);return{count:t.length,bytes:zt(t,"size_bytes")}}function qi(e){const t=e||[],a=t.find(i=>i.id===n.selectedFileId)||t[0]||null;return n.selectedFileId=a?.id||"",a}function Ke(e=p(),t="home",a=""){const i=(n.fileQuery||n.query||"").trim().toLowerCase(),o=n.fileCategoryFilter;let r=H(e);return a?r=r.filter(d=>d.job_id===a):n.driveFilter==="images"?r=r.filter(d=>d.mime_type.includes("image")||d.folder==="photos"):n.driveFilter==="documents"?r=r.filter(d=>!d.mime_type.includes("image")&&d.folder!=="photos"):t&&t!=="home"&&(t==="jobs"?r=r.filter(d=>d.job_id):r=r.filter(d=>d.folder===t)),o&&o!=="All categories"&&(r=r.filter(d=>String(d.category||F(d.folder)).toLowerCase()===o.toLowerCase())),i&&(r=r.filter(d=>[d.file_name,d.category,d.uploaded_by_label,d.notes,d.object_path,_(d.job_id)?.name].some(c=>String(c||"").toLowerCase().includes(i)))),r.sort((d,c)=>new Date(c.created_at||0)-new Date(d.created_at||0))}function Lt(e){const t=String(e.mime_type||"").toLowerCase();return t.includes("pdf")?"PDF":t.includes("image")?"Image":t.includes("zip")?"Zip":t.includes("spreadsheet")||t.includes("excel")?"Sheet":t.includes("word")||t.includes("document")?"Doc":F(e.folder)}function Ot(e){const t=Lt(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="sheet"?"sheet":"doc"}function Rt(e,t=!1){const a=Hi(e);return e.signed_url?`<img src="${s(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${s(Ot(e))} ${t?"large":""}"><i class="ti ${s(a)}"></i></span>`}function te(e=p()){return n.forms.filter(t=>t.company_id===e)}function Di(e=p()){const t=n.formQuery.trim().toLowerCase(),a=n.route?.jobId||"";return te(e).filter(i=>a&&i.linked_job_id!==a||n.formTypeFilter!=="all"&&i.type!==n.formTypeFilter?!1:t?[i.title,i.description,i.type,i.status,i.audience,_(i.linked_job_id)?.name].some(o=>String(o||"").toLowerCase().includes(t)):!0)}function Ye(e=p()){const t=n.route?.jobId||"",a=te(e).filter(r=>!t||r.linked_job_id===t),i=n.route?.params?.get("form_id")||"";if(i&&a.some(r=>r.id===i)&&(n.selectedFormId=i),!a.length)return n.selectedFormId="",n.selectedQuestionId="",null;let o=a.find(r=>r.id===n.selectedFormId)||a[0];return n.selectedFormId=o.id,(!n.selectedQuestionId||!o.questions.some(r=>r.id===n.selectedQuestionId))&&(n.selectedQuestionId=o.questions[0]?.id||""),o}function K(e){return n.forms.find(t=>t.id===e)||null}function O(){return K(n.selectedFormId)||Ye(p())}function Et(e=p()){return n.formResponses.filter(t=>t.company_id===e)}function Fe(e){return n.formResponses.filter(t=>t.form_id===e)}function re(e){return Array.isArray(e?.questions)?e.questions.length:0}function ie(e,t,a="",i=!1,o="text"){return`<label><span>${s(e)}</span><input data-form-field="${s(t)}" type="${s(o)}" value="${s(a)}" ${i?"required":""} /></label>`}function Ut(e,t,a=""){return`<label><span>${s(e)}</span><textarea data-form-field="${s(t)}" rows="3">${s(a)}</textarea></label>`}function G(e,t,a,i){return`
    <label><span>${s(e)}</span><select data-form-field="${s(t)}">
      ${i.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function we(e){return["multiple","checkbox","dropdown"].includes(e.type)}function Ii(e){return{short:"T",paragraph:"P",multiple:"MC",checkbox:"CB",dropdown:"V",date:"D",rating:"*",yesno:"Y",file:"+"}[e]||"+"}function L(e,t){return`
    <div class="response-question">
      <label>
        <span>${s(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${s(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function Qt(e){const t=K(e.form_id),a=Object.entries(e.answers||{}).map(([i,o])=>{const r=t?.questions.find(c=>c.id===i),d=Array.isArray(o)?o.join(", "):o;return D(r?.label||i,d||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${s(t?.title||"Response")}</h2><p>${s(e.submitted_by||e.submitter_email||"Anonymous")} / ${Q(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||D("Response","No answers captured.")}</div>
  `}function Nt(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[$("short","Inspection address"),$("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),$("paragraph","Recommended scope"),$("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[$("short","Client name"),$("yesno","Approved to proceed?"),$("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[$("short","Request title"),$("dropdown","Priority",["Low","Medium","High","Urgent"]),$("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[$("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),$("yesno","Weather safe?"),$("paragraph","Safety notes")]}]}function Ci(e=p()){return Ce({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:n.route?.jobId||"",theme_color:ee(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[$("short","First question")]})}function $(e="short",t="Untitled question",a=[]){return Be({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function Fi(e){const t=Ci(e);n.forms.unshift(t),n.selectedFormId=t.id,n.selectedQuestionId=t.questions[0]?.id||"",n.formsTab="builder",n.formEditorTab="questions",k("New form created"),m()}function nt(e){const t=K(e);t&&(n.selectedFormId=t.id,n.selectedQuestionId=t.questions[0]?.id||"",m())}function k(e="Forms saved locally"){const t=O();t&&(t.updated_at=new Date().toISOString()),S(de,n.forms),S(Qe,n.formResponses),n.sync={label:e,mode:"live"}}function ot(e,t){const a=K(e||n.selectedFormId);a&&(a.status=Ne.includes(t)?t:"Draft",n.selectedFormId=a.id,k(`${a.status} locally`),m())}function Ti(e){const t=K(e||n.selectedFormId);if(!t)return;const a=Ce({...Se(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(i=>({...Se(i),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.forms.unshift(a),n.selectedFormId=a.id,n.selectedQuestionId=a.questions[0]?.id||"",k("Form duplicated"),m()}function Ai(e){const t=e||n.selectedFormId;t&&(n.forms=n.forms.filter(a=>a.id!==t),n.formResponses=n.formResponses.filter(a=>a.form_id!==t),n.selectedFormId=te(p())[0]?.id||"",n.selectedQuestionId=Ye(p())?.questions[0]?.id||"",k("Form deleted locally"),m())}async function Pi(e){const t=e||n.selectedFormId,a=`${window.location.origin}${f(l("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),n.sync={label:"Form link copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}m()}function Li(e){const t=JSON.stringify({company_id:e,forms:te(e),responses:Et(e)},null,2);xi(`${e}-forms-export.json`,t,"application/json")}function Oi(e,t){const a=Nt().find(o=>o.id===t);if(!a)return;const i=Ce({...a,id:`form-${crypto.randomUUID()}`,company_id:e,status:"Draft",audience:"Internal",linked_job_id:n.route?.jobId||"",theme_color:ee(e),background:"clean",submit_label:"Submit",questions:a.questions.map(o=>({...Se(o),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.forms.unshift(i),n.selectedFormId=i.id,n.selectedQuestionId=i.questions[0]?.id||"",n.formsTab="builder",n.formEditorTab="questions",k("Template added"),m()}function Mt(e){const t=O();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),S(de,n.forms))}function Jt(e){const t=O(),a=e.closest("[data-question-id]"),i=t?.questions.find(o=>o.id===a?.dataset.questionId);if(!(!t||!i)){if(n.selectedQuestionId=i.id,e.matches("[data-question-option]")){const o=Number(e.dataset.questionOption);i.options[o]=e.value}else{const o=e.dataset.questionField;if(o==="required")i.required=e.checked;else if(o==="type"){i.type=e.value,we(i)&&!i.options.length&&(i.options=["Option 1","Option 2"]),we(i)||(i.options=[]),k("Question updated"),m();return}else o&&(i[o]=e.value)}t.updated_at=new Date().toISOString(),S(de,n.forms)}}function Ri(e="multiple"){const t=O();if(!t)return;const a=$(e,se.find(([i])=>i===e)?.[1]||"New question");t.questions.push(a),n.selectedQuestionId=a.id,k("Question added"),m()}function Ei(e){const t=O(),a=t?.questions.find(r=>r.id===e);if(!t||!a)return;const i=t.questions.findIndex(r=>r.id===e),o=Be({...Se(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(i+1,0,o),n.selectedQuestionId=o.id,k("Question duplicated"),m()}function Ui(e){const t=O();t&&(t.questions=t.questions.filter(a=>a.id!==e),n.selectedQuestionId=t.questions[0]?.id||"",k("Question deleted"),m())}function Qi(e,t){const a=O();if(!a||!t)return;const i=a.questions.findIndex(d=>d.id===e),o=i+t;if(i<0||o<0||o>=a.questions.length)return;const[r]=a.questions.splice(i,1);a.questions.splice(o,0,r),n.selectedQuestionId=e,k("Question moved"),m()}function Ni(e){const a=O()?.questions.find(i=>i.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),k("Option added"),m())}function Mi(e,t){const i=O()?.questions.find(o=>o.id===e);!i||t<0||(i.options.splice(t,1),i.options.length||i.options.push("Option 1"),k("Option removed"),m())}function Ji(e){const t=K(e.dataset.formId);if(!t)return;const a=new FormData(e),i={};t.questions.forEach(o=>{const r=`answer:${o.id}`,d=a.getAll(r).filter(c=>c instanceof File?c.name:String(c||"").trim());i[o.id]=d.length>1?d.map(c=>c instanceof File?c.name:c):d[0]instanceof File?d[0].name:d[0]||""}),n.formResponses.unshift(Ft({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||A().profile.full_name||"Preview submitter"),answers:i,created_at:new Date().toISOString()})),n.formsTab="responses",k("Preview response saved"),m()}function xi(e,t,a="text/plain"){const i=new Blob([t],{type:a}),o=URL.createObjectURL(i),r=document.createElement("a");r.href=o,r.download=e,r.click(),URL.revokeObjectURL(o)}function Se(e){return JSON.parse(JSON.stringify(e))}function Y(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||w(e)}function Te(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||w(e)}function F(e){return X.find(([t])=>t===e)?.[1]||w(e||"Shared")}function zi(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Hi(e){return e.mime_type.includes("image")?"ti-photo":e.mime_type.includes("pdf")?"ti-file-type-pdf":e.mime_type.includes("zip")?"ti-file-zip":"ti-file-description"}function w(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function E(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function Q(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function le(e){const t=T(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**i).toFixed(i?1:0)} ${a[i]}`}function Bi(){const e=new Date;return e.setHours(0,0,0,0),e}function Vi(e,t){return`${xt(e,t)}%`}function xt(e,t){const a=T(t);return a?Math.max(0,Math.min(100,Math.round(T(e)/a*100))):0}function rt(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function Wi(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function zt(e,t){return e.reduce((a,i)=>a+T(i[t]),0)}function T(e){const t=Number(e);return Number.isFinite(t)?t:0}function ke(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(T(e))}function Ue(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function M(e,t){const a=Ue(e,t);return Array.isArray(a)&&a.length?a:t}function S(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
