(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const le={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},ge=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),Qe="quest-hq-local-session",Ht="quest-hq-local-profile",Bt="quest-hq-job-cache-v2",Wt="quest-hq-task-cache-v1",Kt="quest-hq-file-cache-v1",Yt="quest-hq-drive-folder-cache-v1",Gt="quest-hq-team-cache-v1",Zt="quest-hq-company-membership-cache-v1",Fe="quest-hq-company-form-cache-v1",ut="quest-hq-company-form-response-cache-v1",Xt="quest-hq-finance-invoice-cache-v1",ea="quest-hq-finance-payment-cache-v1",ta="quest-hq-finance-expense-cache-v1",aa="quest-hq-finance-vendor-cache-v1",Be="quest-hq-active-company",na="quest-hq-task-view",ia="quest-hq-drive-view",Ce=["Lead","Site Review","Estimate","Approved","Active","Closed"],sa=["pipeline","list","profile"],qe=["todo","pending","hold","review","done"],Je=["critical","urgent","high","medium","low"],oa=["lead","bid","admin","invoicing","ar","meeting","web_dev"],Ja=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],mt=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],Te=["Inspection","Client approval","Intake","Survey","Safety","Internal"],ft=["Draft","Published","Archived"],ra=["Draft","Sent","Partially paid","Paid","Overdue","Void"],la=["Pending","Approved","Paid","Rejected"],da=["Active","On hold","Inactive"],ca=["ACH","Check","Card","Cash","Wire","Other"],We=["Materials","Labor","Subcontractor","Permit","Equipment","Marketing","Software","Travel","Other"],Oe=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],ve=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],Va=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],za=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"]},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"]},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"]},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"]},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"]}],Ha=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],Ba=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:y(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:y(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:y(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:y(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:y(5),priority:"medium",urgency:"medium",status:"todo"}],Wa=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],Ka=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",creator_id:"abraham",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",creator_id:"maya",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",creator_id:"noah",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",creator_id:"lumen-ops",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],Ya=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],Ga=[{id:"vendor-roofing-materials",company_id:"roofing",name:"Valley Roofing Supply",contact_name:"Elena Ortiz",email:"orders@valleyroofingsupply.local",phone:"(480) 555-0190",category:"Materials",status:"Active",notes:"Primary tile, flashing, and underlayment vendor.",created_at:new Date(Date.now()-12096e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"vendor-roofing-dryin",company_id:"roofing",name:"Monsoon Dry-In Crew",contact_name:"R. Alvarez",email:"dispatch@monsoondryin.local",phone:"(602) 555-0144",category:"Subcontractor",status:"Active",notes:"Emergency dry-in support during storm calls.",created_at:new Date(Date.now()-10368e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"vendor-drafting-permits",company_id:"drafting",name:"Permit Runner AZ",contact_name:"Sofia Chen",email:"permits@runneraz.local",phone:"(602) 555-0171",category:"Permit",status:"Active",notes:"Permit filing support for drafting packets.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString()},{id:"vendor-lumen-software",company_id:"lumen",name:"Lumen SaaS Stack",contact_name:"Ops Billing",email:"billing@lumenstack.local",phone:"",category:"Software",status:"Active",notes:"Internal software subscriptions for client onboarding.",created_at:new Date(Date.now()-7776e5).toISOString(),updated_at:new Date(Date.now()-3456e5).toISOString()}],Za=[{id:"invoice-roofing-queen-creek",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",client_name:"Rosales Residence",invoice_number:"QR-1007",status:"Partially paid",issue_date:y(-10),due_date:y(5),subtotal:6800,tax:0,total:6800,notes:"Emergency leak repair billing with deposit received.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"invoice-roofing-mesa-storage",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",client_name:"Mesa Storage Partners",invoice_number:"QR-1008",status:"Sent",issue_date:y(-18),due_date:y(-2),subtotal:18400,tax:0,total:18400,notes:"Estimate packet sent to board for approval.",created_at:new Date(Date.now()-15552e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-drafting-horizon",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",client_name:"Horizon HVAC",invoice_number:"QD-2031",status:"Sent",issue_date:y(-7),due_date:y(14),subtotal:4200,tax:0,total:4200,notes:"Drafting permit package milestone invoice.",created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-lumen-onboarding",company_id:"lumen",job_id:"",client_name:"Lumen Internal Launch",invoice_number:"LM-3004",status:"Draft",issue_date:y(-3),due_date:y(27),subtotal:3200,tax:0,total:3200,notes:"Demo onboarding package used for finance workspace.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()}],Xa=[{id:"payment-roofing-queen-creek-deposit",company_id:"roofing",invoice_id:"invoice-roofing-queen-creek",amount:2500,method:"ACH",received_at:y(-4),reference:"ACH-4421",notes:"Deposit received after dry-in visit.",created_at:new Date(Date.now()-3456e5).toISOString()},{id:"payment-drafting-horizon-retainer",company_id:"drafting",invoice_id:"invoice-drafting-horizon",amount:1e3,method:"Check",received_at:y(-1),reference:"CHK-117",notes:"Retainer collected before permit packet completion.",created_at:new Date(Date.now()-864e5).toISOString()}],en=[{id:"expense-roofing-queen-creek-materials",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",vendor_id:"vendor-roofing-materials",category:"Materials",amount:1850,status:"Approved",spent_at:y(-6),notes:"Underlayment, flashing, and tile replacement materials.",created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-roofing-mesa-permit",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",vendor_id:"vendor-roofing-materials",category:"Permit",amount:620,status:"Pending",spent_at:y(-2),notes:"Permit and document prep allowance.",created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString()},{id:"expense-drafting-horizon-runner",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",vendor_id:"vendor-drafting-permits",category:"Permit",amount:480,status:"Approved",spent_at:y(-3),notes:"Permit runner package review.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-lumen-software-stack",company_id:"lumen",job_id:"",vendor_id:"vendor-lumen-software",category:"Software",amount:540,status:"Paid",spent_at:y(-5),notes:"Client onboarding software stack.",created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()}],i={route:null,session:pt(Qe,null),profileDraft:pt(Ht,null),jobs:R(Bt,Va).map(Se),tasks:R(Wt,Ba).map(ke),files:R(Kt,Wa).map(ze),driveFolders:R(Yt,[]).map(Ia),forms:R(Fe,Ka).map(et),formResponses:R(ut,Ya).map(Fa),financeInvoices:R(Xt,Za).map(wt),financePayments:R(ea,Xa).map(St),financeExpenses:R(ta,en).map(kt),financeVendors:R(aa,Ga).map(jt),teamMembers:R(Gt,za).map(Ca),memberships:R(Zt,Ha),companies:dt(ve.map(we)),activeCompanyId:localStorage.getItem(Be)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",selectedFinanceInvoiceId:"",selectedFinanceExpenseId:"",selectedFinanceVendorId:"",expandedFormIds:new Set,formStartTemplateId:"",formStartTab:"blank",query:"",fileQuery:"",formQuery:"",crmQuery:"",stageFilter:"all",crmStageFilter:"all",crmOwnerFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(na)||"table",driveFolder:"home",driveView:localStorage.getItem(ia)||"list",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",modal:""},pa=document.getElementById("app");tn();function tn(){Ni(),window.addEventListener("popstate",u),document.addEventListener("click",gi),document.addEventListener("submit",_i),document.addEventListener("input",hi),document.addEventListener("change",$i),u()}function u(){if(i.route=Ke(),an(i.route)){w("/login?return_url="+encodeURIComponent(Ui()),{replace:!0});return}if(i.route.name==="login"){si();return}nn();const e=Li(i.route);if(e){w(e,{replace:!0});return}Vi(i.route),ba(i.route),i.route.params.get("account")==="profile"&&(i.modal="profile"),document.title=`${Ri(i.route)} | ${_(p())} | Quest HQ`,pa.innerHTML=on(i.route,ua(i.route))}function an(e){return e.name==="login"?!1:!i.session}function nn(){i.dataLoaded||i.dataLoading||(i.dataLoading=!0,sn().catch(()=>{i.sync={label:"Local fallback",mode:"local"}}).finally(()=>{i.dataLoaded=!0,i.dataLoading=!1,Q(),u()}))}async function sn(){const e=ae();if(!e){i.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,n,o,r,c]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*")]);let d=0;t.error||(i.companies=t.data?.length?dt(ve.concat(t.data).map(we)):dt(ve.map(we)),d+=1),a.error||(a.data?.length&&(i.jobs=a.data.map(Se)),d+=1),n.error||(n.data?.length&&(i.tasks=n.data.map(ke)),d+=1),o.error||(o.data?.length&&(i.files=o.data.map(ze)),d+=1),r.error||(r.data?.length&&(i.teamMembers=r.data.map(Ca)),d+=1),c.error||(c.data?.length&&(i.memberships=c.data.map(es)),d+=1),i.sync=d?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function ae(){return!window.supabase||typeof window.supabase.createClient!="function"?null:window.supabase.createClient(le.supabaseUrl,le.supabaseKey)}function on(e,t){const a=N(),n=p();return`
    <div class="quest-app" data-route="${s(e.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${b(l("jobs",{},n))}" data-router aria-label="Quest HQ workspace">
            <i class="ti ti-bolt"></i>
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${s(le.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            <i class="ti ti-building"></i>
            <select data-company-switch aria-label="Active company">
              ${ja().map(o=>`<option value="${s(o.id)}" ${o.id===n?"selected":""}>${s(Ze(o))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            <i class="ti ti-search" aria-hidden="true"></i>
            <input data-global-search value="${s(i.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${s(i.sync.mode)}" data-sync-state>${s(i.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          <div class="account-menu">
            <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open Quest profile">
              ${It(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${s(a.profile.full_name)}</strong>
              <span>${s(a.profile.role_label)} - ${s(_(n))}</span>
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${rn(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${ri(e,a)}
  `}function rn(e){const t=p(),a=D(t),n=Y(t),o=ce(t),r=ie(t),c=Ye(t),d=ue(t),m=ya(t),S=_a(t),f=pe(t);return`
    <div class="company-card">
      <span style="background:${s(ne(t))}"></span>
      <strong>${s(_(t))}</strong>
      <small>${s($t(t))} workspace</small>
    </div>
    ${it("Workspace",[J(e,l("jobs",{},t),"ti-briefcase","Jobs",a.length),J(e,l("tasks",{},t),"ti-list-check","Tasks",n.length),J(e,l("files",{},t),"ti-folder","Files",o.length),J(e,l("forms",{},t),"ti-clipboard-list","Forms",r.length),J(e,l("analytics",{},t),"ti-chart-bar","Analytics"),J(e,l("crm",{},t),"ti-users-group","CRM",c.length),oe("ti-ticket","Tickets"),J(e,l("finance",{},t),"ti-receipt-dollar","Finance",d.length),oe("ti-books","Knowledge Base"),oe("ti-automation","Automations"),oe("ti-template","Templates")])}
    ${it("Company",[J(e,l("users",{},t),"ti-users","Users",f.length),J(e,l("settings",{},t),"ti-settings","Settings"),oe("ti-hierarchy-3","Team chart")])}
    ${it("Operations",[J(e,l("time",{},t),"ti-clock","My time",m.focus.length),J(e,l("approvals",{},t),"ti-user-check","Approvals",S.length),oe("ti-users","Team workload"),oe("ti-clock-hour-4","Clock dashboard")])}
  `}function it(e,t){return`
    <section class="side-group">
      <div class="side-label">${s(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function J(e,t,a,n,o=""){return`
    <a class="side-item ${Mi(e,t)?"active":""}" href="${b(t)}" data-router>
      <i class="ti ${s(a)}"></i>
      <span>${s(n)}</span>
      ${o!==""?`<b>${s(String(o))}</b>`:""}
    </a>
  `}function oe(e,t){return`
    <button class="side-item planned" type="button" disabled aria-disabled="true">
      <i class="ti ${s(e)}"></i>
      <span>${s(t)}</span>
      <b>Planned</b>
    </button>
  `}function bt(e,t){return`
    <nav class="tabbar compact-tabbar" aria-label="${s(e)}">
      ${t.map(([a,n,o])=>`<a class="${o?"active":""}" href="${b(a)}" data-router>${s(n)}</a>`).join("")}
    </nav>
  `}function ua(e){if(e.name==="command")return ln(p());if(e.name!=="company")return Ut(e.name);const t=e.companyId;return e.section==="jobs"?cn(e,t):e.section==="tasks"?bn(e,t):e.section==="files"?hn(e,t):e.section==="users"?xn(e,t):e.section==="settings"?An(e,t):e.section==="forms"?En(t):e.section==="analytics"?dn(e,t):e.section==="crm"?Bn(e,t):e.section==="finance"?Kn(e,t):e.section==="time"||e.section==="approvals"?ai(e,t):Ut(e.section)}function ln(e){const t=D(e),a=Y(e),n=a.filter(r=>["critical","urgent"].includes(r.priority)),o=ce(e);return`
    ${B("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${b(l("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${b(l("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    `)}
    ${ds([["Jobs",t.length],["Open tasks",a.filter(r=>r.status!=="done").length],["Urgent tasks",n.length],["Drive files",o.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${b(l("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(r=>at(r)).join("")||g("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${M([["Company",_(e)],["Visible users",pe(e).length],["Auth mode","Local basic gate"],["RLS status","Prepared, not enforced"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(r=>cs(r)).join("")||g("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function dn(e,t){const a=e.jobId?h(e.jobId):null,n=a?[a]:D(t),o=Y(t).filter(f=>!a||f.project_id===a.id),r=ce(t).filter(f=>!a||f.job_id===a.id),c=ie(t).filter(f=>!a||f.linked_job_id===a.id),d=o.filter(f=>f.status!=="done"),m=o.filter(f=>f.status!=="done"&&f.due&&new Date(f.due)<Tt()),S=z(n,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${s(a?a.name:_(t))}</span>
        </div>
        <label>
          <span>Job</span>
          <select data-analytics-job-filter>
            <option value="">All jobs</option>
            ${D(t).map(f=>`<option value="${s(f.id)}" ${a?.id===f.id?"selected":""}>${s(f.name)}</option>`).join("")}
          </select>
        </label>
        <a class="btn" href="${b(l("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      </section>
      <section class="analytics-grid">
        <article class="panel analytics-score">
          <span>Open work</span>
          <strong>${s(d.length)}</strong>
          <small>${s(m.length)} overdue / ${s(o.filter(f=>f.priority==="urgent"||f.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${s(v(S))}</strong>
          <small>${s(n.length)} visible job${n.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${s(r.length+c.length)}</strong>
          <small>${s(r.length)} files / ${s(c.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${s(Rs(o.filter(f=>f.status==="done").length,o.length))}</strong>
          <small>${s(o.filter(f=>f.status==="done").length)} done of ${s(o.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${n.map(f=>`
              <a class="analytics-row" href="${b(l("analytics",{job_id:f.id},t))}" data-router>
                <span><strong>${s(f.name)}</strong><small>${s(f.client_name||_(t))}</small></span>
                <span>${s(f.stage)}</span>
                <span>${s(Xe(f.id))}</span>
                <span>${s(Ve(f.id))}</span>
                <span>${s(v(f.estimate_total))}</span>
              </a>
            `).join("")||g("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${qe.map(f=>{const k=o.filter(U=>U.status===f).length;return`<div><span>${s(se(f))}</span><b><i style="width:${s(Qa(k,o.length))}%"></i></b><strong>${s(k)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${o.filter(f=>f.status!=="done").sort((f,k)=>ye(k.priority)-ye(f.priority)).slice(0,8).map(f=>at(f)).join("")||g("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function cn(e,t){const a=Qi(e.params.get("tab")),n=de();return`
    ${B("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${b(l("files",n?{job_id:n.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(Ce).map(o=>`<option value="${s(o)}" ${i.stageFilter===o?"selected":""}>${s(o==="all"?"All stages":o)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${n?s(n.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${sa.map(o=>`<a class="${o===a?"active":""}" href="${b(l("jobs",{tab:o,...n?{job_id:n.id}:{}},t))}" data-router>${s(Ji(o))}</a>`).join("")}
    </nav>
    ${pn(a,t,n)}
  `}function pn(e,t,a){return e==="pipeline"?At(t):e==="list"?un(t):e==="profile"?mn(t,a):At(t)}function At(e){const t=va(e);return`
    <section class="job-board">
      ${Ce.map(a=>{const n=t.filter(o=>o.stage===a);return`
          <article class="job-lane">
            <h2><span>${s(a)}</span><b>${n.length}</b></h2>
            ${n.map(o=>ps(o)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function un(e){const t=va(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===i.selectedJobId?"active":""}" type="button" data-select-job="${s(a.id)}">
            <span><strong>${s(a.name)}</strong><small>${s(a.client_name||"No client")} - ${s(a.site_address||"No address")}</small></span>
            <span>${s(a.stage)}</span>
            <span>${Dt(a.priority)}</span>
            <span>${s(a.owner_name||"Unassigned")}</span>
            <span>${s(Xe(a.id))}</span>
            <span>${v(a.estimate_total)}</span>
          </button>
        `).join("")||g("No jobs match this view.")}
      </div>
    </section>
  `}function mn(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${s(_(e))} - ${s(t.job_type)}</span>
          <h2>${s(t.name)}</h2>
          <p>${s(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${M([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",v(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${b(l("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${s(t.id)}">Edit job</button>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${Ne(l("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${Xe(t.id)} linked tasks`)}
          ${Ne(l("files",{job_id:t.id},e),"ti-folder","Files",`${Ve(t.id)} files`)}
          ${Ne(l("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${Ne(l("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:g("Create a job to see the profile workspace.")}function fn(e,t){const a=t||ts(e);return`
    <form class="job-editor" data-job-form>
      <input type="hidden" name="id" value="${s(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${$("Workspace name","name",a.name,!0)}
      ${q("Company","company_id",e,ja().map(n=>[n.id,Ze(n)]))}
      ${$("Client","client_name",a.client_name)}
      ${$("Contact","contact_name",a.contact_name)}
      ${$("Account owner","owner_name",a.owner_name)}
      ${$("Job type","job_type",a.job_type||"Roofing")}
      ${q("Business status","stage",a.stage||"Lead",Ce.map(n=>[n,n]))}
      ${q("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(n=>[n,n]))}
      ${$("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${$("Invoice total","invoice_total",a.invoice_total||0,!1,"number")}
      ${$("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${te("Scope","scope",a.scope,"span-2")}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${s(t.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function bn(e,t){const a=e.jobId?h(e.jobId):null,n=Xi(t,a?.id);return`
    ${B(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${b(l("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${b(l("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${gn(t,a)}
    <section class="task-layout task-layout-flat">
      <article class="panel task-main">
        ${i.taskView==="board"?yn(t,n):vn(t,n)}
      </article>
    </section>
  `}function gn(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${D(e).map(n=>`<option value="${s(n.id)}" ${t?.id===n.id?"selected":""}>${s(n.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(qe).map(n=>`<option value="${s(n)}" ${i.taskStatusFilter===n?"selected":""}>${s(n==="all"?"All statuses":se(n))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(Je).map(n=>`<option value="${s(n)}" ${i.taskPriorityFilter===n?"selected":""}>${s(n==="all"?"All priorities":E(n))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${i.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${i.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function vn(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===i.selectedTaskId?"active":""}" type="button" data-select-task="${s(a.id)}">
          <span><strong>${s(a.title)}</strong><small>${s(a.description||Ae(a.type))}</small></span>
          <span>${s(h(a.project_id)?.name||"Company task")}</span>
          <span>${s(H(a.assignee_id))}</span>
          <span>${qa(a.priority)}</span>
          <span>${Ta(a.status)}</span>
          <span>${x(a.due)}</span>
        </button>
      `).join("")||g("No tasks match this workspace view.")}
    </div>
  `}function yn(e,t){return`
    <div class="task-board">
      ${qe.map(a=>{const n=t.filter(o=>o.status===a);return`
          <section class="task-column">
            <h2><span>${s(se(a))}</span><b>${n.length}</b></h2>
            ${n.map(o=>`
              <button class="task-card priority-${s(o.priority)}" type="button" data-select-task="${s(o.id)}">
                <strong>${s(o.title)}</strong>
                <span>${s(h(o.project_id)?.name||_(e))}</span>
                <small>${s(H(o.assignee_id))} - ${x(o.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function _n(e,t){return t?`
    <div class="section-head">
      <div><h2>${s(t.title)}</h2><p>${s(h(t.project_id)?.name||_(e))}</p></div>
      <a class="btn" href="${b(l("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${M([["Status",se(t.status)],["Priority",E(t.priority)],["Type",Ae(t.type)],["Assignee",H(t.assignee_id)],["Due",x(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${s(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${g("No task selected.")}
    `}function Et(e,t,a){const n=a||as(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${s(a?n.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${$("Task title","title",n.title,!0)}
      ${q("Job","project_id",n.project_id||"",[["","Company-level task"]].concat(D(e).map(o=>[o.id,o.name])))}
      ${q("Status","status",n.status,qe.map(o=>[o,se(o)]))}
      ${q("Priority","priority",n.priority,Je.map(o=>[o,E(o)]))}
      ${q("Type","type",n.type,oa.map(o=>[o,Ae(o)]))}
      ${q("Assignee","assignee_id",n.assignee_id,pe(e).map(o=>[o.id,H(o.id)]))}
      ${$("Due date","due",n.due||y(1),!0,"date")}
      ${te("Description","description",n.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${s(a.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function hn(e,t){const a=e.params.get("folder")||i.driveFolder||"home";i.driveFolder=a;const n=e.jobId?h(e.jobId):null,o=gs(t,a,n?.id||"");return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div class="drive-location">
            <span class="drive-logo"><i class="ti ti-folder"></i></span>
            <div>
              <strong>${s(n?n.name:"Company Drive")}</strong>
              <small>${s(n?`${n.client_name||_(t)} file workspace`:`${_(t)} file manager`)}</small>
            </div>
          </div>
          <label class="drive-search">
            <i class="ti ti-search"></i>
            <input data-file-search value="${s(i.fileQuery)}" placeholder="Search drive" />
          </label>
          <div class="drive-actions">
            <button class="btn" type="button" data-action="open-folder-form"><i class="ti ti-folder-plus"></i>New folder</button>
            <button class="btn" type="button" data-action="open-file-upload"><i class="ti ti-upload"></i>Upload</button>
            <button class="btn icon-only" type="button" data-action="refresh-data" title="Refresh" aria-label="Refresh"><i class="ti ti-refresh"></i></button>
          </div>
        </header>
        <div class="drive-shell drive-shell-compact">
          <div class="drive-main">
            <section class="drive-crumb-row">
              <nav class="breadcrumbs" aria-label="Drive location">
                <a href="${b(l("files",{},t))}" data-router>${s(_(t))}</a>
                ${a!=="home"?bs(t,a,n):""}
                ${n?`<span>/</span><strong>${s(n.name)}</strong>`:""}
              </nav>
              <div class="drive-compact-controls">
                <div class="segmented" role="group" aria-label="Drive view">
                  <button class="${i.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Icons</button>
                  <button class="${i.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list-details"></i>Details</button>
                </div>
              </div>
            </section>
            ${$n(t,a,n,o)}
          </div>
        </div>
      </section>
    </section>
  `}function $n(e,t,a,n){const o=ms(e,t,a),r=o.map(d=>({kind:"folder",...d})).concat(n.map(d=>({kind:"file",file:d}))),c=a?a.name:t==="home"?"This folder":K(t);return`
    <section class="drive-section-title">
      <div><h3>${s(c)}</h3><span>${o.length} folder${o.length===1?"":"s"} / ${n.length} file${n.length===1?"":"s"}</span></div>
    </section>
    ${i.driveView==="list"?wn(r):Sn(r)}
  `}function wn(e){return`
    <div class="explorer-table" role="table" aria-label="File explorer">
      <div class="explorer-head" role="row">
        <span>Name</span>
        <span>Date modified</span>
        <span>Type</span>
        <span>Size</span>
      </div>
      ${e.map(t=>t.kind==="folder"?jn(t):Dn(t.file)).join("")||g("This folder is empty.")}
    </div>
  `}function Sn(e){return`
    <section class="drive-folder-grid explorer-grid">
      ${e.map(t=>t.kind==="folder"?kn(t):Fn(t.file)).join("")||g("This folder is empty.")}
    </section>
  `}function kn(e){return`
    <a class="drive-folder-card explorer-folder" href="${s(e.href)}" data-router>
      <span class="drive-folder-icon"><i class="ti ${s(e.icon||"ti-folder")}"></i></span>
      <strong>${s(e.name)}</strong>
      <em>${s(e.countLabel||"0 items")}</em>
    </a>
  `}function jn(e){return`
    <a class="explorer-row folder-row-live" href="${s(e.href)}" data-router role="row">
      <span class="explorer-name"><span class="file-type folder"><i class="ti ${s(e.icon||"ti-folder")}"></i></span><strong>${s(e.name)}</strong></span>
      <span>${s(e.updatedLabel||"")}</span>
      <span>Folder</span>
      <span>${s(e.countLabel||"")}</span>
    </a>
  `}function Dn(e){return`
    <button type="button" class="explorer-row ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(e.id)}" role="row">
      <span class="explorer-name">${In(e)}<strong>${s(e.file_name)}</strong></span>
      <span>${x(e.updated_at||e.created_at)}</span>
      <span>${s(fe(e))}</span>
      <span>${qt(e.size_bytes)}</span>
    </button>
  `}function In(e){return`
    <span class="file-type ${s(Ft(e))}">
      <i class="ti ${s(Ra(e))}"></i>
      <small>${s(vs(e))}</small>
    </span>
  `}function Fn(e){return`
    <button type="button" class="file-card-live ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(e.id)}">
      <span class="file-thumb">${Ct(e)}</span>
      <strong>${s(e.file_name)}</strong>
      <span>${s(fe(e))} / ${qt(e.size_bytes)}</span>
    </button>
  `}function Cn(e,t){return`
    <section class="file-viewer-layout">
      <div class="file-viewer-stage">
        ${qn(e)}
      </div>
      <aside class="file-viewer-meta">
        <div class="file-open-head">
          ${Ct(e)}
          <div>
            <strong>${s(e.file_name)}</strong>
            <span>${s(fe(e))} / ${qt(e.size_bytes)}</span>
          </div>
        </div>
        <div class="file-detail-list">
          ${re("Location",K(e.folder))}
          ${re("Job",h(e.job_id)?.name||"Company shared")}
          ${re("Uploaded by",e.uploaded_by_label||"Quest HQ")}
          ${re("Modified",x(e.updated_at||e.created_at))}
          ${re("Storage",e.object_path||"Metadata only")}
        </div>
        <div class="file-detail-actions">
          <button class="btn" type="button" data-action="download-file" data-file-id="${s(e.id)}"><i class="ti ti-download"></i>Download</button>
          <button class="btn danger" type="button" data-action="delete-file" data-file-id="${s(e.id)}"><i class="ti ti-trash"></i>Delete</button>
        </div>
      </aside>
    </section>
  `}function qn(e){const t=Ft(e);return e.signed_url&&t==="image"?`<img class="file-preview-media" src="${s(e.signed_url)}" alt="" />`:e.signed_url&&t==="pdf"?`<iframe class="file-preview-frame" src="${s(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:e.signed_url&&t==="text"?`<iframe class="file-preview-frame text" src="${s(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:["doc","sheet"].includes(t)&&e.signed_url?`<iframe class="file-preview-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:`
    <div class="file-preview-empty">
      ${Ct(e,!0)}
      <strong>${s(fe(e))} preview</strong>
      <p>${s(e.object_path?"Preview will load when a signed file URL is available.":"This is a metadata-only file record. Upload the actual file object to preview it here.")}</p>
      ${e.notes?`<pre>${s(e.notes)}</pre>`:""}
    </div>
  `}function Tn(){const e=p(),t=i.route||Ke(),a=t.params.get("folder")||i.driveFolder||"home",n=t.jobId?h(t.jobId):null;return I("Drive","New folder",`
    <form class="compact-tool-form" data-folder-form>
      <label><span>Folder name</span><input name="name" placeholder="Folder name" required autofocus /></label>
      <input type="hidden" name="company_id" value="${s(e)}" />
      <input type="hidden" name="parent_key" value="${s(Oa(a,n))}" />
      <div class="file-upload-log">
        <strong>Location</strong>
        <span>${s(a==="home"?_(e):n?.name||K(a))}</span>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create folder</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"task-modal")}function On(){const e=p(),t=i.route?.params?.get("folder")||(i.driveFolder==="home"?"shared":i.driveFolder),a=i.route?.jobId||"";return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">${s(_(e))} Drive</div><h2 id="upload-title">Upload files</h2></div>
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
          ${$("Metadata-only file name","file_name","")}
          ${q("Folder","folder",t,Ns(e))}
          ${q("Job","job_id",a,[["","Company shared file"]].concat(D(e).map(n=>[n.id,n.name])))}
          ${q("Category","category",K(t),Ja.filter(n=>n!=="All categories").map(n=>[n,n]))}
          ${$("Uploaded by","uploaded_by_label",N().profile.full_name||"Quest HQ")}
          ${te("Notes","notes","","span-2")}
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
  `}function xn(e,t){const a=pe(t),n=["members","access"].includes(e.params.get("tab"))?e.params.get("tab"):"members";return`
    ${B("Users","Company members, roles, workers, and access context.",`
      <a class="btn btn-primary" href="${b(l("settings",{},t))}" data-router><i class="ti ti-settings"></i>Settings</a>
    `)}
    ${bt("Users sections",[[l("users",{tab:"members"},t),"Members",n==="members"],[l("users",{tab:"access"},t),"Access model",n==="access"]])}
    ${n==="members"?`
      <section class="users-grid">
        ${a.map(o=>`
          <article class="user-card">
            ${It({full_name:o.full_name,avatar_url:o.avatar_url},"avatar")}
            <div>
              <strong>${s(o.full_name)}</strong>
              <span>${s(o.email)}</span>
              <small>${s(Da(t,o.id))}</small>
            </div>
          </article>
        `).join("")||g("No users assigned to this company yet.")}
      </section>
    `:`
    <section class="panel">
      <div class="section-head"><div><h2>Membership model</h2><p>company_memberships is the canonical table; legacy company_ids remain as backfill fields.</p></div></div>
      ${M([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Client-filtered only while auth is disabled"],["Active role",$t(t)]])}
    </section>
    `}
  `}function An(e,t){const a=Ge(t),n=["company","access","team"].includes(e.params.get("tab"))?e.params.get("tab"):"company";return`
    ${B("Settings","Company settings, roles, approvals, and admin controls.","")}
    ${bt("Settings sections",[[l("settings",{tab:"company"},t),"Company",n==="company"],[l("settings",{tab:"access"},t),"Access",n==="access"],[l("settings",{tab:"team"},t),"Workers",n==="team"]])}
    <section class="dashboard-grid compact-settings-grid">
      ${n==="company"?`
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${M([["Name",_(t)],["Company ID",t],["Color",a?.color||ne(t)],["Visible jobs",D(t).length]])}
      </article>
      `:""}
      ${n==="access"?`
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Prepared for Supabase Auth and RLS.</p></div></div>
        ${M([["Auth switch","Disabled"],["Local login","Enabled"],["Isolation","Client-filtered only"],["Memberships",String(i.memberships.filter(o=>o.company_id===t).length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Approvals</h2><p>Quest-owned access approval queue.</p></div></div>
        ${g("No pending company approvals.")}
      </article>
      `:""}
      ${n==="team"?`
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${pe(t).map(o=>`<div><strong>${s(o.full_name)}</strong><span>${s(Da(t,o.id))}</span></div>`).join("")||g("No workers assigned.")}
        </div>
      </article>
      `:""}
    </section>
  `}function En(e){const t=ys(e),a=je(e),n=i.formsTab==="builder"&&a?"builder":i.formsTab==="responses"?"responses":"library";return`
    <section class="tool-page forms-center">
      <div class="forms-command panel">
        <span class="sync-pill live"><i class="ti ti-device-floppy"></i>Local autosafe</span>
        <label>
          <span>Search</span>
          <input data-form-search value="${s(i.formQuery)}" placeholder="Find form, audience, or job" />
        </label>
        <button class="btn" type="button" data-action="open-forms-tools"><i class="ti ti-adjustments"></i>Tools</button>
        <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
      </div>
      ${n==="builder"?"":`
        <nav class="tabbar forms-tabs" aria-label="Forms workspace">
          ${["library","responses"].map(o=>`
            <button class="${n===o?"active":""}" type="button" data-action="set-forms-tab" data-tab="${s(o)}">${s(E(o))}</button>
          `).join("")}
        </nav>
      `}
      ${n==="library"?Pn(e,t,a):""}
      ${n==="builder"?Nn(e,a):""}
      ${n==="responses"?Hn(e,a):""}
    </section>
  `}function Pn(e,t,a){return`
    <section class="forms-home">
      <article class="forms-recent-panel panel">
        <div class="forms-panel-head">
          <div>
            <strong>Recent forms</strong>
            <span>${t.length} visible form${t.length===1?"":"s"} in ${s(_(e))}</span>
          </div>
        </div>
        <div class="forms-list forms-list-cards">
          ${t.map(n=>`
            <article class="form-card ${i.expandedFormIds.has(n.id)?"expanded":""} ${a?.id===n.id?"active":""}">
              <span class="form-card-top">
                <i class="ti ti-clipboard-list"></i>
              </span>
              <span class="form-card-main">
                <strong>${s(n.title)}</strong>
                <span>Created by ${s(_s(n))}</span>
              </span>
              <button class="form-card-toggle" type="button" data-action="toggle-form-card" data-form-id="${s(n.id)}" aria-expanded="${i.expandedFormIds.has(n.id)?"true":"false"}">
                <i class="ti ${i.expandedFormIds.has(n.id)?"ti-chevron-up":"ti-chevron-down"}"></i>
                ${i.expandedFormIds.has(n.id)?"Less":"Details"}
              </button>
              <span class="form-card-meta">
                <small>${s(n.type)} / ${s(n.audience||"Internal")}</small>
                <small>${Ea(n)} questions</small>
                <em>${nt(n.id).length} responses</em>
                <em>Updated ${x(n.updated_at)}</em>
                <em>${s(n.status)}</em>
              </span>
              ${i.expandedFormIds.has(n.id)?`
                <div class="form-card-detail">
                  <p>${s(n.description||"No description yet.")}</p>
                  <div class="form-actions">
                    <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${s(n.id)}"><i class="ti ti-pencil"></i>Open builder</button>
                    <button class="btn" type="button" data-action="open-form-preview" data-form-id="${s(n.id)}"><i class="ti ti-eye"></i>Preview</button>
                  </div>
                </div>
              `:""}
            </article>
          `).join("")||g("No forms match this company view.")}
        </div>
      </article>
    </section>
  `}function Nn(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${g("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(i.formEditorTab)?i.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${s(a)}">
      ${Ln(t,a)}
      ${a==="questions"?`
        ${Un(e,t)}
        ${Rn(t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${Mn(e,t)}
        </article>
      `:""}
      ${a==="responses"?Qn(e,t):""}
    </section>
  `}function Ln(e,t){const a=nt(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${s(e.title)}</strong>
        <span>${s(e.status)} / ${Ea(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(n=>`
        <button class="${t===n?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${s(n)}">
          ${n==="questions"?'<i class="ti ti-list-details"></i>':n==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${s(E(n))}
        </button>
      `).join("")}
      <button class="btn" type="button" data-action="open-form-preview" data-form-id="${s(e.id)}"><i class="ti ti-eye"></i>Preview</button>
      <button class="btn" type="button" data-action="open-form-actions" data-form-id="${s(e.id)}"><i class="ti ti-share"></i>Share</button>
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(e.id)}">Save</button>
    </div>
  `}function Un(e,t){return`
    <article class="panel form-identity-panel gform-title-card">
      <div class="gform-accent-strip" style="--form-accent:${s(t.theme_color||ne(e))}"></div>
      ${_e("Form title","title",t.title,!0)}
      ${Pa("Form description","description",t.description)}
      <div class="forms-simple-meta">
        <span>${s(t.status)}</span>
        <span>${s(t.type)}</span>
        <span>${s(t.audience||"Internal")}</span>
        <span>${s(h(t.linked_job_id)?.name||"Company level")}</span>
        <span>${s(_(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">Settings</button>
        <button class="btn" type="button" data-action="open-form-preview" data-form-id="${s(t.id)}">Preview</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      </div>
    </article>
  `}function Rn(e){return`
    <article class="question-workbench">
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${Oe.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${s(t)}" title="${s(a)}" aria-label="Add ${s(a)} question"><i class="ti ${s(hs(t))}"></i></button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>Jn(t,a)).join("")||g("Add the first question.")}
        </div>
      </div>
    </article>
  `}function Mn(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${_e("Title","title",t.title,!0)}
      ${Le("Status","status",t.status,ft.map(a=>[a,a]))}
      ${Pa("Description","description",t.description)}
      ${Le("Type","type",t.type,Te.map(a=>[a,a]))}
      ${_e("Audience","audience",t.audience)}
      ${Le("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(D(e).map(a=>[a.id,a.name])))}
      ${_e("Theme color","theme_color",t.theme_color||ne(e),!1,"color")}
      ${Le("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${_e("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${s(t.id)}">Delete</button>
    </div>
  `}function Qn(e,t){const a=nt(t.id),n=a[0]||null;return`
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
            <small>${x(o.created_at)}</small>
          </button>
        `).join("")||g("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${n?Na(n):g("No response selected.")}
    </aside>
  `}function Jn(e,t){const a=Oe.map(([n,o])=>`<option value="${s(n)}" ${e.type===n?"selected":""}>${s(o)}</option>`).join("");return`
    <article class="question-card ${i.selectedQuestionId===e.id?"active":""}" data-question-id="${s(e.id)}">
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
      ${De(e)?`
        <div class="question-options">
          ${(e.options||[]).map((n,o)=>`
            <label>
              <span>Option ${o+1}</span>
              <input data-question-option="${o}" value="${s(n)}" />
              <button type="button" data-action="remove-question-option" data-question-id="${s(e.id)}" data-option-index="${o}"><i class="ti ti-x"></i></button>
            </label>
          `).join("")}
          <button class="btn" type="button" data-action="add-question-option" data-question-id="${s(e.id)}"><i class="ti ti-plus"></i>Add option</button>
        </div>
      `:""}
    </article>
  `}function Vn(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${s(t.id)}" style="--form-accent:${s(t.theme_color||ne(e))}">
      <div class="designed-form-header">
        <span>${s(_(e))}</span>
        <h2>${s(t.title)}</h2>
        <p>${s(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>zn(a)).join("")||g("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${s(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function zn(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?W(e,`<textarea name="${s(t)}" rows="3" ${a}></textarea>`):e.type==="date"?W(e,`<input name="${s(t)}" type="date" ${a} />`):e.type==="file"?W(e,`<input name="${s(t)}" type="file" ${a} />`):e.type==="yesno"?W(e,`<select name="${s(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?W(e,`<input name="${s(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?W(e,`<select name="${s(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(n=>`<option>${s(n)}</option>`).join("")}</select>`):e.type==="checkbox"?W(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${s(t)}" type="checkbox" value="${s(n)}" /> ${s(n)}</label>`).join("")}</div>`):e.type==="multiple"?W(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${s(t)}" type="radio" value="${s(n)}" ${a} /> ${s(n)}</label>`).join("")}</div>`):W(e,`<input name="${s(t)}" ${a} />`)}function Hn(e,t){const a=t?nt(t.id):Aa(e),n=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(o=>`
            <button type="button" class="response-card">
              <strong>${s(be(o.form_id)?.title||"Unknown form")}</strong>
              <span>${s(o.submitted_by||o.submitter_email||"Anonymous")}</span>
              <small>${x(o.created_at)}</small>
            </button>
          `).join("")||g("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${n?Na(n):g("No response selected.")}
      </aside>
    </section>
  `}function Bn(e,t){const a=Ki(t),n=Ye(t),o=Y(t).filter(d=>d.status!=="done").length,r=z(D(t),"estimate_total"),c=Gi(t);return`
    <section class="tool-page crm-page">
      ${B("CRM","Customers, contacts, and follow-ups built from company jobs.",`
        <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add customer job</button>
      `)}
      <section class="metric-grid crm-metrics">
        ${F("Accounts",n.length)}
        ${F("Open jobs",D(t).filter(d=>d.stage!=="Closed").length)}
        ${F("Open tasks",o)}
        ${F("Pipeline value",v(r))}
      </section>
      <section class="crm-toolbar panel">
        <label>
          <span>Search</span>
          <input data-crm-search value="${s(i.crmQuery)}" placeholder="Find customer, contact, job, or address" />
        </label>
        <label>
          <span>Stage</span>
          <select data-crm-stage-filter>
            ${["all"].concat(Ce).map(d=>`<option value="${s(d)}" ${i.crmStageFilter===d?"selected":""}>${s(d==="all"?"All stages":d)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>Owner</span>
          <select data-crm-owner-filter>
            <option value="all" ${i.crmOwnerFilter==="all"?"selected":""}>All owners</option>
            ${c.map(d=>`<option value="${s(d)}" ${i.crmOwnerFilter===d?"selected":""}>${s(d)}</option>`).join("")}
          </select>
        </label>
      </section>
      <section class="panel crm-list-panel">
        <div class="section-head">
          <div><h2>Customers</h2><p>${a.length} visible account${a.length===1?"":"s"} in ${s(_(t))}</p></div>
        </div>
        <div class="data-table crm-table">
          <div class="table-head"><span>Account</span><span>Contact</span><span>Stage</span><span>Owner</span><span>Jobs</span><span>Value</span><span>Updated</span></div>
          ${a.map(d=>`
            <a class="table-row crm-account-row" href="${b(l("crm",{account:d.key},t))}" data-router>
              <span><strong>${s(d.name)}</strong><small>${s(d.subtitle)}</small></span>
              <span>${s(d.primaryContact)}</span>
              <span>${s(d.stage)}</span>
              <span>${s(d.owner)}</span>
              <span>${s(d.jobs.length)}</span>
              <span>${v(d.estimateTotal)}</span>
              <span>${x(d.updatedAt)}</span>
            </a>
          `).join("")||g("No CRM accounts match this view. Add a customer job to start the list.")}
        </div>
      </section>
    </section>
  `}function Wn(e,t){const a=Yi(e,t);if(!a)return I("CRM","Customer account",g("This customer is not visible in the current company view."));const n=a.latestJob,o=a.tasks.filter(r=>r.status!=="done");return I("CRM",a.name,`
    <div class="crm-account-modal">
      <section class="crm-modal-summary">
        <div class="section-head">
          <div>
            <h2>${s(a.name)}</h2>
            <p>${s(a.subtitle)}</p>
          </div>
          ${Dt(a.priority)}
        </div>
        ${M([["Primary contact",a.primaryContact],["Owner",a.owner],["Current stage",a.stage],["Pipeline value",v(a.estimateTotal)],["Open tasks",String(o.length)],["Last updated",x(a.updatedAt)]])}
      </section>
      <section class="crm-rollup-grid">
        ${F("Jobs",a.jobs.length)}
        ${F("Files",a.fileCount)}
        ${F("Forms",a.formCount)}
        ${F("Tasks",a.tasks.length)}
      </section>
      <section class="crm-modal-actions">
        ${n?`<a class="btn btn-primary" href="${b(l("jobs",{tab:"profile",job_id:n.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
        ${n?`<a class="btn" href="${b(l("tasks",{job_id:n.id},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>`:""}
        ${n?`<a class="btn" href="${b(l("files",{job_id:n.id},e))}" data-router><i class="ti ti-folder"></i>Files</a>`:""}
        ${n?`<button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${s(n.id)}"><i class="ti ti-pencil"></i>Edit latest job</button>`:""}
        <button class="btn" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Linked jobs</h2><p>Customer workspaces connected to this account.</p></div></div>
        <div class="data-table crm-linked-jobs">
          <div class="table-head"><span>Job</span><span>Stage</span><span>Owner</span><span>Value</span></div>
          ${a.jobs.map(r=>`
            <a class="table-row" href="${b(l("jobs",{tab:"profile",job_id:r.id},e))}" data-router>
              <span><strong>${s(r.name)}</strong><small>${s(r.site_address||"No address")}</small></span>
              <span>${s(r.stage)}</span>
              <span>${s(r.owner_name||"Unassigned")}</span>
              <span>${v(r.estimate_total)}</span>
            </a>
          `).join("")||g("No linked jobs yet.")}
        </div>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Follow-ups</h2><p>Open tasks across linked jobs.</p></div></div>
        <div class="queue-list">
          ${o.slice(0,6).map(r=>at(r)).join("")||g("No open follow-ups for this customer.")}
        </div>
      </section>
    </div>
  `,"crm-modal")}function Kn(e,t){const a=ka(t),n=ue(t),o=ha(t).slice().sort(Ie("received_at")).slice(0,5),r=vt(t).slice().sort(Ie("spent_at")).slice(0,5),c=yt(t).slice().sort((d,m)=>d.name.localeCompare(m.name)).slice(0,5);return`
    <section class="tool-page finance-page">
      ${B("Finance","Invoices, payments, expenses, vendors, and job-linked money in one company view.",`
        <button class="btn btn-primary" type="button" data-action="new-finance-invoice"><i class="ti ti-file-dollar"></i>New invoice</button>
        <button class="btn" type="button" data-action="new-finance-payment"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="new-finance-expense"><i class="ti ti-receipt"></i>Add expense</button>
        <button class="btn" type="button" data-action="new-finance-vendor"><i class="ti ti-building-store"></i>Add vendor</button>
        <a class="btn" href="${b(l("finance",{report:"summary"},t))}" data-router><i class="ti ti-report-analytics"></i>Reports</a>
      `)}
      <section class="metric-grid finance-metrics">
        ${F("Estimated pipeline",v(a.pipeline))}
        ${F("Invoiced",v(a.invoiced))}
        ${F("Collected",v(a.collected))}
        ${F("Outstanding",v(a.outstanding))}
        ${F("Expenses",v(a.expenses))}
        ${F("Net position",v(a.net))}
      </section>
      <section class="panel finance-aging">
        <div class="section-head"><div><h2>AR aging</h2><p>Outstanding invoice balance by due date.</p></div></div>
        <div class="finance-aging-grid">
          ${[["Current",a.aging.current],["1-30",a.aging.thirty],["31-60",a.aging.sixty],["61+",a.aging.overSixty]].map(([d,m])=>`<div><span>${s(d)}</span><strong>${v(m)}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel finance-invoice-panel">
        <div class="section-head"><div><h2>Invoices</h2><p>${n.length} billing record${n.length===1?"":"s"} for ${s(_(t))}</p></div></div>
        <div class="data-table finance-invoice-table">
          <div class="table-head"><span>Invoice</span><span>Status</span><span>Job</span><span>Due</span><span>Total</span><span>Paid</span><span>Balance</span></div>
          ${n.map(d=>`
            <a class="table-row" href="${b(l("finance",{invoice:d.id},t))}" data-router>
              <span><strong>${s(d.invoice_number)}</strong><small>${s(d.client_name||h(d.job_id)?.client_name||"No client")}</small></span>
              <span>${us(Sa(d))}</span>
              <span>${s(h(d.job_id)?.name||"Company level")}</span>
              <span>${x(d.due_date)}</span>
              <span>${v(d.total)}</span>
              <span>${v(ht(d.id))}</span>
              <span>${v(ee(d.id))}</span>
            </a>
          `).join("")||g("No invoices yet. Create one from a job or customer record.")}
        </div>
      </section>
      <section class="finance-secondary-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Recent payments</h2><p>Money received.</p></div></div>
          <div class="finance-compact-list">
            ${o.map(d=>Me(me(d.invoice_id)?.invoice_number||"Payment",d.method,v(d.amount),d.received_at)).join("")||g("No payments recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Expenses</h2><p>Job and company costs.</p></div></div>
          <div class="finance-compact-list">
            ${r.map(d=>Me(lt(d.vendor_id),d.category,v(d.amount),d.spent_at,l("finance",{expense:d.id},t))).join("")||g("No expenses recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Vendors</h2><p>Suppliers and subcontractors.</p></div></div>
          <div class="finance-compact-list">
            ${c.map(d=>Me(d.name,d.category,d.status,d.updated_at,l("finance",{vendor:d.id},t))).join("")||g("No vendors recorded.")}
          </div>
        </article>
      </section>
    </section>
  `}function Yn(e,t){return e.params.get("invoice")?Gn(t,e.params.get("invoice")):e.params.get("expense")?Zn(t,e.params.get("expense")):e.params.get("vendor")?Xn(t,e.params.get("vendor")):e.params.get("report")==="summary"?ei(t):""}function Gn(e,t){const a=me(t);if(!a||a.company_id!==e)return I("Finance","Invoice",g("Invoice not found."));const n=wa(a.id),o=h(a.job_id);return I("Finance",a.invoice_number,`
    <div class="finance-detail-modal">
      ${M([["Client",a.client_name||o?.client_name||"No client"],["Status",Sa(a)],["Job",o?.name||"Company level"],["Issued",x(a.issue_date)],["Due",x(a.due_date)],["Total",v(a.total)],["Collected",v(ht(a.id))],["Balance",v(ee(a.id))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="new-finance-payment" data-invoice-id="${s(a.id)}"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="edit-finance-invoice" data-invoice-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit invoice</button>
        ${o?`<a class="btn" href="${b(l("jobs",{tab:"profile",job_id:o.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
      </div>
      <section class="finance-modal-section">
        <div class="section-head"><div><h2>Payments</h2><p>${n.length} payment${n.length===1?"":"s"} applied.</p></div></div>
        <div class="finance-compact-list">
          ${n.map(r=>Me(r.reference||r.method,r.method,v(r.amount),r.received_at)).join("")||g("No payments yet.")}
        </div>
      </section>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function Zn(e,t){const a=$a(t);if(!a||a.company_id!==e)return I("Finance","Expense",g("Expense not found."));const n=h(a.job_id);return I("Finance",`${lt(a.vendor_id)} expense`,`
    <div class="finance-detail-modal">
      ${M([["Vendor",lt(a.vendor_id)],["Category",a.category],["Status",a.status],["Job",n?.name||"Company level"],["Spent",x(a.spent_at)],["Amount",v(a.amount)]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-expense" data-expense-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit expense</button>
        ${n?`<a class="btn" href="${b(l("files",{job_id:n.id},e))}" data-router><i class="ti ti-folder"></i>Job files</a>`:""}
      </div>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function Xn(e,t){const a=_t(t);if(!a||a.company_id!==e)return I("Finance","Vendor",g("Vendor not found."));const n=vt(e).filter(o=>o.vendor_id===a.id);return I("Finance",a.name,`
    <div class="finance-detail-modal">
      ${M([["Contact",a.contact_name||"No contact"],["Email",a.email||"No email"],["Phone",a.phone||"No phone"],["Category",a.category],["Status",a.status],["Spend",v(z(n,"amount"))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-vendor" data-vendor-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit vendor</button>
        <button class="btn" type="button" data-action="new-finance-expense" data-vendor-id="${s(a.id)}"><i class="ti ti-receipt"></i>Add expense</button>
      </div>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function ei(e){const t=ka(e);return I("Finance","Summary report",`
    <div class="finance-report-modal">
      ${M([["Company",_(e)],["Estimated pipeline",v(t.pipeline)],["Invoiced",v(t.invoiced)],["Collected",v(t.collected)],["Outstanding",v(t.outstanding)],["Expenses",v(t.expenses)],["Net position",v(t.net)]])}
      <div class="finance-aging-grid">
        <div><span>Current</span><strong>${v(t.aging.current)}</strong></div>
        <div><span>1-30</span><strong>${v(t.aging.thirty)}</strong></div>
        <div><span>31-60</span><strong>${v(t.aging.sixty)}</strong></div>
        <div><span>61+</span><strong>${v(t.aging.overSixty)}</strong></div>
      </div>
    </div>
  `,"finance-modal")}function Pt(e,t=null){const a=t||ns(e);return I("Finance",t?"Edit invoice":"New invoice",`
    <form class="finance-form" data-finance-invoice-form>
      <input type="hidden" name="id" value="${s(a.id)}" />
      ${$("Invoice number","invoice_number",a.invoice_number,!0)}
      ${q("Linked job","job_id",a.job_id||"",[["","Company level"]].concat(D(e).map(n=>[n.id,n.name])))}
      ${$("Client","client_name",a.client_name,!0)}
      ${q("Status","status",a.status,ra.map(n=>[n,n]))}
      ${$("Issue date","issue_date",a.issue_date,!1,"date")}
      ${$("Due date","due_date",a.due_date,!1,"date")}
      ${$("Subtotal","subtotal",a.subtotal,!1,"number")}
      ${$("Tax","tax",a.tax,!1,"number")}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save invoice</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function ti(e,t=""){const a=is(e,t),n=ue(e).map(o=>[o.id,`${o.invoice_number} - ${o.client_name||h(o.job_id)?.client_name||"No client"}`]);return I("Finance","Record payment",`
    <form class="finance-form" data-finance-payment-form>
      ${q("Invoice","invoice_id",a.invoice_id,n.length?n:[["","Create an invoice first"]])}
      ${$("Amount","amount",a.amount,!0,"number")}
      ${q("Method","method",a.method,ca.map(o=>[o,o]))}
      ${$("Received","received_at",a.received_at,!1,"date")}
      ${$("Reference","reference",a.reference)}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save payment</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Nt(e,t=null,a=""){const n=t||ss(e,a),o=yt(e).map(r=>[r.id,r.name]);return I("Finance",t?"Edit expense":"Add expense",`
    <form class="finance-form" data-finance-expense-form>
      <input type="hidden" name="id" value="${s(n.id)}" />
      ${q("Vendor","vendor_id",n.vendor_id,o.length?o:[["","No vendor yet"]])}
      ${q("Linked job","job_id",n.job_id||"",[["","Company level"]].concat(D(e).map(r=>[r.id,r.name])))}
      ${q("Category","category",n.category,We.map(r=>[r,r]))}
      ${q("Status","status",n.status,la.map(r=>[r,r]))}
      ${$("Amount","amount",n.amount,!0,"number")}
      ${$("Spent date","spent_at",n.spent_at,!1,"date")}
      ${te("Notes","notes",n.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save expense</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Lt(e,t=null){const a=t||os(e);return I("Finance",t?"Edit vendor":"Add vendor",`
    <form class="finance-form" data-finance-vendor-form>
      <input type="hidden" name="id" value="${s(a.id)}" />
      ${$("Vendor name","name",a.name,!0)}
      ${$("Contact","contact_name",a.contact_name)}
      ${$("Email","email",a.email,!1,"email")}
      ${$("Phone","phone",a.phone)}
      ${q("Category","category",a.category,We.map(n=>[n,n]))}
      ${q("Status","status",a.status,da.map(n=>[n,n]))}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save vendor</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function ai(e,t){return e.section==="approvals"?ii(t):ni(t)}function ma(e,t){return`
    ${bt("Operations sections",[[l("time",{},e),"My time",t==="time"],[l("approvals",{},e),"Approvals",t==="approvals"]])}
  `}function ni(e){const t=ya(e);return`
    <section class="tool-page operations-page">
      ${B("My time","A compact personal work queue built from this company's tasks.",`
        <a class="btn" href="${b(l("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Open tasks</a>
        <a class="btn btn-primary" href="${b(l("tasks",{new:"1"},e))}" data-router><i class="ti ti-plus"></i>New task</a>
      `)}
      ${ma(e,"time")}
      <section class="metric-grid operations-metrics">
        ${F("Due today",t.dueToday.length)}
        ${F("Overdue",t.overdue.length)}
        ${F("Open work",t.open.length)}
        ${F("In review",t.review.length)}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel span-2">
          <div class="section-head"><div><h2>Today</h2><p>Due now, overdue, and highest priority work.</p></div></div>
          <div class="queue-list">
            ${t.focus.slice(0,8).map(a=>at(a)).join("")||g("No time-sensitive tasks for this company.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Workload</h2><p>Simple task-based time view.</p></div></div>
          ${M([["Company",_(e)],["Assigned to you",String(t.assignedToMe.length)],["Due this week",String(t.thisWeek.length)],["Completed",String(t.done.length)]])}
        </article>
      <article class="panel span-2">
          <div class="section-head"><div><h2>This week</h2><p>Upcoming task commitments.</p></div></div>
          <div class="data-table operations-table">
            <div class="table-head"><span>Task</span><span>Job</span><span>Owner</span><span>Due</span><span>Status</span></div>
            ${t.thisWeek.slice(0,8).map(a=>`
              <a class="table-row" href="${b(l("tasks",{...a.project_id?{job_id:a.project_id}:{},task_id:a.id},e))}" data-router>
                <span><strong>${s(a.title)}</strong><small>${s(a.description||Ae(a.type))}</small></span>
                <span>${s(h(a.project_id)?.name||"Company task")}</span>
                <span>${s(H(a.assignee_id))}</span>
                <span>${x(a.due)}</span>
                <span>${Ta(a.status)}</span>
              </a>
            `).join("")||g("No upcoming tasks this week.")}
          </div>
        </article>
      </section>
    </section>
  `}function ii(e){const t=_a(e),a=t.filter(r=>r.type==="Form approval"),n=t.filter(r=>r.type==="Task review"),o=t.filter(r=>r.type==="Access request");return`
    <section class="tool-page operations-page">
      ${B("Approvals","Company review queue for forms, task handoffs, and access requests.",`
        <a class="btn" href="${b(l("forms",{},e))}" data-router><i class="ti ti-clipboard-list"></i>Forms</a>
        <a class="btn btn-primary" href="${b(l("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>
      `)}
      ${ma(e,"approvals")}
      <section class="metric-grid operations-metrics">
        ${F("Open approvals",t.length)}
        ${F("Forms",a.length)}
        ${F("Task reviews",n.length)}
        ${F("Access",o.length)}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Approval queue</h2><p>One calm list instead of a heavy dashboard.</p></div></div>
        <div class="data-table approval-table">
          <div class="table-head"><span>Item</span><span>Type</span><span>Owner</span><span>Status</span><span>Updated</span></div>
          ${t.map(r=>`
            <a class="table-row" href="${b(r.href)}" data-router>
              <span><strong>${s(r.title)}</strong><small>${s(r.meta)}</small></span>
              <span>${s(r.type)}</span>
              <span>${s(r.owner)}</span>
              <span>${s(r.status)}</span>
              <span>${x(r.updatedAt)}</span>
            </a>
          `).join("")||g("No approvals need attention right now.")}
        </div>
      </section>
    </section>
  `}function Ut(e){return`
    ${B(E(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${g("Module data model pending.")}
    </section>
  `}function si(){document.title="Sign in | Quest HQ";const e=fa(i.route.params.get("return_url")||b(l("jobs",{},C())));pa.innerHTML=`
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
          <label>Username<input name="username" value="${s(le.localUsername)}" autocomplete="username" /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" /></label>
          <input type="hidden" name="return_url" value="${s(e)}" />
          <button class="btn btn-primary full" type="submit">Sign in</button>
          ${i.loginError?`<div class="form-message error">${s(i.loginError)}</div>`:'<div class="form-message">Temporary credentials: lumen123 / lumen123</div>'}
        </form>
      </section>
    </main>
  `}function oi(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${It(e,"avatar large")}
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
  `}function ri(e,t){if(i.modal==="profile")return oi(t.profile);if(i.modal==="file-upload")return On();if(i.modal==="folder-new")return Tn();if(i.modal==="file-detail")return ci(p());if(i.modal==="forms-tools")return pi(p());if(i.modal==="form-actions")return bi(p(),je(p()));if(i.modal==="form-new")return ui(p());if(i.modal==="form-preview")return fi(p(),je(p()));if(i.modal==="job-new")return st(p(),null);if(i.modal==="job-edit")return st(p(),de());if(i.modal==="finance-invoice-new")return Pt(p(),null);if(i.modal==="finance-invoice-edit")return Pt(p(),me(i.selectedFinanceInvoiceId));if(i.modal==="finance-payment-new")return ti(p(),i.selectedFinanceInvoiceId);if(i.modal==="finance-expense-new")return Nt(p(),null,i.selectedFinanceVendorId);if(i.modal==="finance-expense-edit")return Nt(p(),$a(i.selectedFinanceExpenseId));if(i.modal==="finance-vendor-new")return Lt(p(),null);if(i.modal==="finance-vendor-edit")return Lt(p(),_t(i.selectedFinanceVendorId));if(e.name==="company"&&e.section==="crm"&&e.params.get("account"))return Wn(e.companyId,e.params.get("account"));if(e.name==="company"&&e.section==="finance"){const a=Yn(e,e.companyId);if(a)return a}return e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"?st(e.companyId,e.jobId?h(e.jobId):de()):e.name==="company"&&e.section==="tasks"?di(e,e.companyId):""}function I(e,t,a,n=""){return`
    <div class="modal-overlay">
      <div class="modal-panel ${s(n)}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${s(e)}</div><h2>${s(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function li(e,t,a){return`
    <div class="modal-overlay drawer-overlay">
      <aside class="modal-panel drawer-panel" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${s(e)}</div><h2>${s(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </aside>
    </div>
  `}function st(e,t){return I("Jobs",t?"Edit job":"Create job",fn(e,t),"wide-modal")}function di(e,t){const a=e.jobId?h(e.jobId):null,n=e.params.get("task_id")||"",o=n?ga(n):null;return e.params.get("new")==="1"?I("Tasks","New task",Et(t,a,null),"task-modal"):e.params.get("edit")==="1"&&o?I("Tasks","Edit task",Et(t,a,o),"task-modal"):o?li("Task detail",o.title,_n(t,o)):""}function ci(e){const t=i.selectedFileId?i.files.find(a=>a.id===i.selectedFileId):null;return t?I("Open file",t.file_name,Cn(t),"file-viewer-modal"):""}function pi(e){return I("Forms","Tools",`
    <div class="compact-tool-form">
      <label>
        <span>Type filter</span>
        <select data-form-type-filter>
          <option value="all" ${i.formTypeFilter==="all"?"selected":""}>All types</option>
          ${Te.map(t=>`<option value="${s(t)}" ${i.formTypeFilter===t?"selected":""}>${s(t)}</option>`).join("")}
        </select>
      </label>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
      <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
    </div>
  `)}function ui(e){const t=i.formStartTab==="templates"?"templates":"blank",a=he(),n=t==="templates"&&(a.find(m=>m.id===i.formStartTemplateId)||a[0])||null,o=n?.title||"",r=n?.description||"",c=n?.type||"Internal",d=n?.questions||[{type:"short",label:"First question",required:!1,options:[]}];return I("Forms","New form builder",`
    <form class="new-form-modal builder-create-modal" data-new-form-form>
      <input type="hidden" name="template_id" value="${s(n?.id||"")}" />
      <div class="form-start-tabs" role="tablist" aria-label="New form start type">
        <button class="${t==="blank"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="blank"><i class="ti ti-clipboard-plus"></i>Blank</button>
        <button class="${t==="templates"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="templates"><i class="ti ti-template"></i>Templates</button>
      </div>
      ${t==="templates"?`
        <div class="new-form-template-grid">
          ${a.map(m=>`
            <button class="${n?.id===m.id?"active":""}" type="button" data-action="select-form-start-template" data-template-id="${s(m.id)}">
              <span><i class="ti ti-template"></i></span>
              <strong>${s(m.title)}</strong>
              <small>${s(m.type)} / ${m.questions.length} questions</small>
            </button>
          `).join("")}
        </div>
      `:`
        <div class="new-form-start">
          <span><i class="ti ti-clipboard-plus"></i></span>
          <div>
            <strong>Blank form</strong>
            <small>Start with a title card and one short-answer question.</small>
          </div>
        </div>
      `}
      <div class="new-form-builder-grid">
        <section class="new-form-builder-main">
          <article class="panel gform-title-card new-form-title-card">
            <div class="gform-accent-strip" style="--form-accent:${s(ne(e))}"></div>
            <label><span>Form title</span><input name="title" value="${s(o)}" placeholder="Untitled form" required /></label>
            <label><span>Form description</span><textarea name="description" rows="3" placeholder="What should people know before filling this out?">${s(r)}</textarea></label>
          </article>
          <div class="new-form-question-list">
            ${d.map((m,S)=>mi(m,S)).join("")}
          </div>
        </section>
        <aside class="panel new-form-settings-card">
          <div class="section-head"><div><h2>Setup</h2><p>${n?s(n.title):"Blank starter"}</p></div></div>
          <div class="new-form-grid">
            <label><span>Type</span><select name="type">${Te.map(m=>`<option value="${s(m)}" ${m===c?"selected":""}>${s(m)}</option>`).join("")}</select></label>
            <label><span>Audience</span><input name="audience" value="Internal" /></label>
            <label><span>Linked job</span><select name="linked_job_id"><option value="">Company level</option>${D(e).map(m=>`<option value="${s(m.id)}" ${i.route?.jobId===m.id?"selected":""}>${s(m.name)}</option>`).join("")}</select></label>
            <label><span>Submit button</span><input name="submit_label" value="Submit" /></label>
          </div>
          <div class="new-form-checks">
            <label class="check-row"><input type="checkbox" name="collect_email" checked /> Collect email</label>
            <label class="check-row"><input type="checkbox" name="require_approval" /> Require approval</label>
          </div>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Create form</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </aside>
      </div>
    </form>
  `,"form-create-modal builder-modal")}function mi(e,t){const a=De(e)?`
    <div class="starter-options">
      ${(e.options||["Option 1","Option 2"]).map(n=>`<span>${s(n)}</span>`).join("")}
    </div>
  `:"";return`
    <article class="question-card starter-question-card">
      <div class="question-card-head">
        <span>${t+1}</span>
        <strong>${s($s(e.type))}</strong>
      </div>
      <label><span>Question</span><input value="${s(e.label||"Untitled question")}" readonly /></label>
      ${e.help?`<small>${s(e.help)}</small>`:""}
      ${a}
      <label class="check-row"><input type="checkbox" ${e.required?"checked":""} disabled /> Required</label>
    </article>
  `}function fi(e,t){return t?I("Forms","Preview form",`
    <div class="form-preview-modal-body">
      ${Vn(e,t)}
    </div>
  `,"form-preview-modal"):I("Forms","Preview form",g("Choose a form first."))}function bi(e,t){return t?I("Forms","Manage form",`
    <div class="forms-summary-share compact">
      <strong>Shareable preview URL</strong>
      <input readonly value="${s(`${window.location.origin}${b(l("forms",{form_id:t.id},e))}`)}" />
      <button class="btn" type="button" data-action="copy-form-link" data-form-id="${s(t.id)}">Copy link</button>
    </div>
    <div class="modal-action-grid">
      <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${s(t.id)}"><i class="ti ti-edit"></i>Edit builder</button>
      <button class="btn" type="button" data-action="duplicate-form" data-form-id="${s(t.id)}"><i class="ti ti-copy"></i>Duplicate</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}"><i class="ti ti-world-upload"></i>Publish</button>
      <button class="btn" type="button" data-action="archive-form" data-form-id="${s(t.id)}"><i class="ti ti-archive"></i>Archive</button>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export library</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${s(t.id)}"><i class="ti ti-trash"></i>Delete</button>
    </div>
  `):I("Forms","Manage form",g("Choose a form first."))}function gi(e){const t=e.target.closest("[data-action]");if(t){vi(e,t);return}const a=e.target.closest("[data-select-job]");if(a){e.preventDefault(),Bi(a.dataset.selectJob);return}const n=e.target.closest("[data-select-task]");if(n){e.preventDefault(),Wi(n.dataset.selectTask);return}const o=e.target.closest("a[href][data-router]");o&&(o.target||o.hasAttribute("download")||(e.preventDefault(),w(o.getAttribute("href"))))}function vi(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),i.dataLoaded=!1,i.sync={label:"Refreshing...",mode:"loading"},u();return}if(a==="sign-out"){e.preventDefault(),localStorage.removeItem(Qe),i.session=null,w("/login",{replace:!0});return}if(a==="open-profile"){e.preventDefault(),i.modal="profile",u();return}if(a==="open-file-upload"){e.preventDefault(),i.modal="file-upload",u();return}if(a==="open-folder-form"){e.preventDefault(),i.modal="folder-new",u();return}if(a==="open-job-form"){e.preventDefault();const n=t.dataset.jobId||"";n&&(i.selectedJobId=n),i.modal=t.dataset.mode==="edit"?"job-edit":"job-new",u();return}if(a==="open-forms-tools"){e.preventDefault(),i.modal="forms-tools",u();return}if(a==="open-form-actions"){e.preventDefault(),Ue(t.dataset.formId,!1),i.modal="form-actions",u();return}if(a==="open-form-preview"){e.preventDefault(),Ue(t.dataset.formId,!1),i.modal="form-preview",u();return}if(a==="set-form-start-tab"){e.preventDefault(),i.formStartTab=t.dataset.tab==="templates"?"templates":"blank",i.formStartTab==="blank"&&(i.formStartTemplateId=""),i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=he()[0]?.id||""),u();return}if(a==="select-form-start-template"){e.preventDefault(),i.formStartTab="templates",i.formStartTemplateId=t.dataset.templateId||he()[0]?.id||"",u();return}if(a==="close-modal"){e.preventDefault(),yi();return}if(a==="set-task-view"){e.preventDefault(),i.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(na,i.taskView),u();return}if(a==="set-drive-view"){e.preventDefault(),i.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(ia,i.driveView),u();return}if(a==="select-file"){e.preventDefault(),i.selectedFileId=t.dataset.fileId||"",i.modal="file-detail",u();return}if(a==="download-file"){e.preventDefault(),Oi(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),xi(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),i.formsTab=t.dataset.tab==="responses"?"responses":"library",u();return}if(a==="set-form-editor-tab"){e.preventDefault(),i.formEditorTab=t.dataset.tab||"questions",u();return}if(a==="new-form"){e.preventDefault(),i.formStartTemplateId=t.dataset.templateId||"",i.formStartTab=t.dataset.startTab==="templates"||i.formStartTemplateId?"templates":"blank",i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=he()[0]?.id||""),i.modal="form-new",u();return}if(a==="select-form"){e.preventDefault(),Ue(t.dataset.formId);return}if(a==="toggle-form-card"){e.preventDefault();const n=t.dataset.formId||"";i.expandedFormIds.has(n)?i.expandedFormIds.delete(n):i.expandedFormIds.add(n),u();return}if(a==="edit-form"){e.preventDefault(),Ue(t.dataset.formId,!1),i.formsTab="builder",i.formEditorTab="questions",i.modal="",u();return}if(a==="save-form"){e.preventDefault(),L("Form saved locally"),u();return}if(a==="publish-form"){e.preventDefault(),Vt(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),Vt(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),js(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),Ds(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),Is(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),Fs(p());return}if(a==="new-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId="",i.modal="finance-invoice-new",u();return}if(a==="edit-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||"",i.modal="finance-invoice-edit",u();return}if(a==="new-finance-payment"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||i.route?.params?.get("invoice")||"",i.modal="finance-payment-new",u();return}if(a==="new-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId="",i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-expense-new",u();return}if(a==="edit-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId=t.dataset.expenseId||"",i.modal="finance-expense-edit",u();return}if(a==="new-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId="",i.modal="finance-vendor-new",u();return}if(a==="edit-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-vendor-edit",u();return}if(a==="add-question"){e.preventDefault(),Cs(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),qs(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),Ts(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),Os(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),xs(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),As(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),Si(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),ji(t.dataset.taskId))}function yi(){const e=i.route||Ke();if(i.modal="",i.formStartTemplateId="",i.formStartTab="blank",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",e.name==="company"&&e.section==="tasks"&&(e.params.get("new")||e.params.get("edit")||e.params.get("task_id"))){w(l("tasks",e.jobId?{job_id:e.jobId}:{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"){const t=e.jobId?h(e.jobId):de();w(l("jobs",{tab:t?"profile":"pipeline",...t?{job_id:t.id}:{}},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="crm"&&e.params.get("account")){w(l("crm",{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="finance"&&(e.params.get("invoice")||e.params.get("expense")||e.params.get("vendor")||e.params.get("report"))){w(l("finance",{},e.companyId),{replace:!0});return}u()}function _i(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===le.localUsername&&String(t.password||"")===le.localPassword)){i.loginError="Invalid temporary credentials.",u();return}i.loginError="",i.session=ct(),A(Qe,i.session),w(fa(t.return_url||b(l("jobs",{},C()))),{replace:!0});return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...N().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};A(Ht,a),i.profileDraft=a,i.session={...N(),profile:a},A(Qe,i.session),i.modal="",u();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),wi(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),ki(e.target);return}if(e.target.matches("[data-new-form-form]")){e.preventDefault(),ks(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),Di(e.target);return}if(e.target.matches("[data-folder-form]")){e.preventDefault(),Ii(e.target);return}if(e.target.matches("[data-finance-invoice-form]")){e.preventDefault(),Fi(e.target);return}if(e.target.matches("[data-finance-payment-form]")){e.preventDefault(),Ci(e.target);return}if(e.target.matches("[data-finance-expense-form]")){e.preventDefault(),qi(e.target);return}if(e.target.matches("[data-finance-vendor-form]")){e.preventDefault(),Ti(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),Es(e.target))}function hi(e){if(e.target.matches("[data-global-search]")){i.query=e.target.value,Pe();return}if(e.target.matches("[data-file-search]")){i.fileQuery=e.target.value,Pe();return}if(e.target.matches("[data-form-search]")){i.formQuery=e.target.value,Pe();return}if(e.target.matches("[data-crm-search]")){i.crmQuery=e.target.value,Pe();return}if(e.target.matches("[data-form-field]")){La(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Ua(e.target)}function $i(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||C();zi(t);return}if(e.target.matches("[data-stage-filter]")){i.stageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-stage-filter]")){i.crmStageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-owner-filter]")){i.crmOwnerFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-status-filter]")){i.taskStatusFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-priority-filter]")){i.taskPriorityFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;w(l("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;w(l("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){i.fileCategoryFilter=e.target.value||"All categories",u();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=i.route?.jobId||"";w(l("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;w(l("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){i.formTypeFilter=e.target.value||"all",u();return}if(e.target.matches("[data-form-field]")){La(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Ua(e.target)}async function wi(e){const t=Se(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.invoice_total=Number(t.invoice_total||0),t.updated_at=new Date().toISOString();const a=i.jobs.some(o=>o.id===t.id),n=ae();if(n){const o=a?await n.from("jobs").update(t).eq("id",t.id).select().single():await n.from("jobs").insert(t).select().single();if(!o.error&&o.data){ot(Se(o.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",w(l("jobs",{tab:"profile",job_id:o.data.id},t.company_id),{replace:!0});return}i.sync={label:"Saved locally",mode:"local"}}ot(t),i.modal="",w(l("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function Si(e){if(!e)return;const t=p(),a=ae();a&&await a.from("jobs").delete().eq("id",e),i.jobs=i.jobs.filter(n=>n.id!==e),i.selectedJobId=D(t)[0]?.id||"",i.modal="",Q(),w(l("jobs",{tab:"list"},t),{replace:!0})}async function ki(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),n=ke({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:N().profile.member_id||pe(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),o=i.tasks.some(c=>c.id===n.id),r=ae();if(r){const c=rs(n),d=o?await r.from("tasks").update(c).eq("id",n.id).select().single():await r.from("tasks").insert(c).select().single();if(!d.error&&d.data){Rt(ke(d.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",w(l("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0});return}i.sync={label:"Task saved locally",mode:"local"}}Rt(n),i.modal="",w(l("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0})}async function ji(e){if(!e)return;const t=p(),a=ae();a&&await a.from("tasks").delete().eq("id",e),i.tasks=i.tasks.filter(n=>n.id!==e),i.selectedTaskId="",i.modal="",Q(),w(l("tasks",{},t),{replace:!0})}async function Di(e){const t=p(),a=new FormData(e),n=Object.fromEntries(a.entries()),o=Array.from(e.elements.files?.files||[]),r=String(n.file_name||"").trim(),c=o.length?o:r?[null]:[];if(!c.length){i.sync={label:"Choose a file or enter a file name",mode:"local"},u();return}const d=ae();let m=0;for(const S of c){const f=crypto.randomUUID(),k=S?.name||r,U=String(n.folder||"shared"),j=`${t}/${n.job_id?`jobs/${n.job_id}`:U}/${f}-${Ot(k)}`;let Z=!1;d&&S&&(Z=!(await d.storage.from("quest-job-files").upload(j,S,{cacheControl:"3600",upsert:!1,contentType:S.type||"application/octet-stream"})).error);const xt=ze({id:f,company_id:t,job_id:n.job_id||"",folder:U,file_name:k,mime_type:S?.type||"application/octet-stream",size_bytes:S?.size||Number(n.size_bytes||0),category:n.category||K(U),notes:n.notes||"",uploaded_by_label:n.uploaded_by_label||N().profile.full_name,bucket_id:"quest-job-files",object_path:Z||!S?j:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(d){const Ee=await d.from("job_files").insert(ls(xt)).select().single();if(!Ee.error&&Ee.data){Mt(ze(Ee.data)),m+=1;continue}Z&&await d.storage.from("quest-job-files").remove([j])}Mt(xt)}i.sync=m===c.length?{label:"Quest Supabase live",mode:"live"}:{label:m?"Some files saved locally":"File record saved locally",mode:m?"loading":"local"},i.modal="",w(l("files",{folder:n.folder||"shared",...n.job_id?{job_id:n.job_id}:{}},t),{replace:!0})}function Ii(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.name||"").trim();if(!a){i.sync={label:"Folder name is required",mode:"local"},u();return}const n=Ia({id:`folder-${crypto.randomUUID()}`,company_id:p(),name:a,parent_key:t.parent_key||"home",created_by_label:N().profile.full_name||"Quest HQ",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.driveFolders.unshift(n),i.modal="",i.sync={label:"Folder created locally",mode:"local"},Q(),u()}function Fi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=h(t.job_id),o=String(t.id||"").trim()?me(String(t.id).trim()):null,r=wt({...t,id:String(t.id||"").trim()||`invoice-${crypto.randomUUID()}`,company_id:a,client_name:String(t.client_name||n?.client_name||"").trim(),total:O(t.subtotal)+O(t.tax),updated_at:new Date().toISOString()});Ai(r),o?.job_id&&o.job_id!==r.job_id&&rt(o.job_id),rt(r.job_id),i.modal="",i.sync={label:"Finance saved locally",mode:"local"},w(l("finance",{invoice:r.id},a),{replace:!0})}function Ci(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=me(t.invoice_id);if(!n||n.company_id!==a){i.sync={label:"Create an invoice before recording a payment",mode:"local"},u();return}const o=St({...t,id:`payment-${crypto.randomUUID()}`,company_id:a,created_at:new Date().toISOString()});i.financePayments.unshift(o),n.status=ee(n.id)<=0?"Paid":"Partially paid",n.updated_at=new Date().toISOString(),rt(n.job_id),Q(),i.modal="",i.sync={label:"Payment recorded locally",mode:"local"},w(l("finance",o.invoice_id?{invoice:o.invoice_id}:{},a),{replace:!0})}function qi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=kt({...t,id:String(t.id||"").trim()||`expense-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});Ei(n),i.modal="",i.sync={label:"Expense saved locally",mode:"local"},w(l("finance",{expense:n.id},a),{replace:!0})}function Ti(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=jt({...t,id:String(t.id||"").trim()||`vendor-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});Pi(n),i.modal="",i.sync={label:"Vendor saved locally",mode:"local"},w(l("finance",{vendor:n.id},a),{replace:!0})}async function Oi(e){const t=i.files.find(o=>o.id===e);if(!t?.object_path){i.sync={label:"No stored object for this file",mode:"local"},u();return}const a=ae();if(!a)return;const n=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(n.error||!n.data?.signedUrl){i.sync={label:"Download failed",mode:"local"},u();return}window.open(n.data.signedUrl,"_blank","noopener,noreferrer")}async function xi(e){const t=i.files.find(n=>n.id===e);if(!t)return;const a=ae();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),i.files=i.files.filter(n=>n.id!==e),i.selectedFileId="",i.modal="",Q(),u()}function ot(e){const t=i.jobs.findIndex(a=>a.id===e.id);t>=0?i.jobs[t]=e:i.jobs.unshift(e),i.selectedJobId=e.id,Q()}function Rt(e){const t=i.tasks.findIndex(a=>a.id===e.id);t>=0?i.tasks[t]=e:i.tasks.unshift(e),i.selectedTaskId=e.id,Q()}function Mt(e){const t=i.files.findIndex(a=>a.id===e.id);t>=0?i.files[t]=e:i.files.unshift(e),Q()}function Ai(e){const t=i.financeInvoices.findIndex(a=>a.id===e.id);t>=0?i.financeInvoices[t]=e:i.financeInvoices.unshift(e),Q()}function Ei(e){const t=i.financeExpenses.findIndex(a=>a.id===e.id);t>=0?i.financeExpenses[t]=e:i.financeExpenses.unshift(e),Q()}function Pi(e){const t=i.financeVendors.findIndex(a=>a.id===e.id);t>=0?i.financeVendors[t]=e:i.financeVendors.unshift(e),Q()}function rt(e){if(!e)return;const t=h(e);t&&(t.invoice_total=z(ue(t.company_id).filter(a=>a.job_id===e),"total"),t.updated_at=new Date().toISOString(),ot(t))}function Pe(){const e=document.getElementById("workspace");e&&(ba(i.route),e.innerHTML=ua(i.route))}function Ke(){const e=gt(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const n=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:n,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function Ni(){const e=gt(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||Re(t.get("job_id")||t.get("project_id"))||localStorage.getItem(Be)||C();let o={"/index.html":l("jobs",{},a),"/command.html":l("jobs",{},a),"/admin.html":l("settings",{},a),"/automations.html":l("settings",{},a),"/crm.html":l("crm",{},a),"/dashboards.html":l("analytics",{},a),"/files.html":l("files",{},a),"/finance.html":l("finance",{},a),"/forms.html":l("forms",{},a),"/jobs.html":l("jobs",{},a),"/knowledge.html":l("files",{folder:"shared"},a),"/login.html":"/login","/templates.html":l("forms",{},a),"/tickets.html":l("tasks",{},a)}[e];if(e==="/jobs"){const c=t.get("tab");c==="tasks"?o=l("tasks",V(t,["job_id","task_id","new","edit"]),a):c==="files"?o=l("files",V(t,["job_id","folder"]),a):c==="forms"?o=l("forms",V(t,["job_id"]),a):c==="analytics"?o=l("analytics",V(t,["job_id"]),a):o=l("jobs",V(t,["job_id","tab"]),a)}if(e==="/files"&&(o=l("files",V(t,["job_id","folder"]),a)),e==="/forms"&&(o=l("forms",V(t,["job_id"]),a)),e==="/analytics"&&(o=l("analytics",V(t,["job_id"]),a)),e==="/crm"&&(o=l("crm",V(t,["account"]),a)),e==="/finance"&&(o=l("finance",V(t,["invoice","expense","vendor","report"]),a)),e==="/admin"&&(o=l("settings",{},a)),e==="/time"&&(o=l("time",{},a)),e==="/team"&&(o=l("users",{},a)),e==="/approvals"&&(o=l("approvals",{},a)),e==="/clock"&&(o=l("settings",{},a)),e==="/task-management.html"){const c=t.get("project_id")||t.get("job_id")||"";o=l("tasks",c?{job_id:c}:{},Re(c)||a)}const r=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(r){const c=decodeURIComponent(r[1]);o=l("tasks",{job_id:c},Re(c)||a)}o&&window.history.replaceState({},"",b(o))}function Li(e){if(e.name!=="company")return"";const t=xe();if(!t.includes(e.companyId))return l(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||C());if(!["jobs","tasks","files","forms","analytics","crm","finance","users","settings","time","approvals"].includes(e.section))return l("jobs",{},e.companyId);const n=e.jobId?Re(e.jobId):"";return n&&n!==e.companyId&&t.includes(n)?l(e.section,Object.fromEntries(e.params.entries()),n):""}function gt(){let e=window.location.pathname||"/";return ge&&e.startsWith(ge)&&(e=e.slice(ge.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function b(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),n=t.startsWith("/")?t:"/"+t;return`${ge}${n}${a?`?${a}`:""}`||"/"}function w(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(ge+"/")||ge===""&&e.startsWith("/")?e:b(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),u()}function Ui(){return`${gt()}${window.location.search}`}function fa(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?b(l("jobs",{},C())):`${t.pathname}${t.search}`}catch{return b(l("jobs",{},C()))}}function l(e="jobs",t={},a=p()){const n=new URLSearchParams(t);for(const[o,r]of[...n.entries()])(r==null||r==="")&&n.delete(o);return`/company/${encodeURIComponent(T(a||C()))}/${e}${n.toString()?`?${n.toString()}`:""}`}function Ri(e){return e.name==="company"?E(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":E(e.name||"Workspace")}function Mi(e,t){const[a]=t.split("?"),n=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!n||e.name!=="company"?!1:e.companyId===decodeURIComponent(n[1])&&e.section===n[2]}function Qi(e){return sa.includes(e)?e:"pipeline"}function Ji(e){return{pipeline:"Pipeline",list:"List",profile:"Profile"}[e]||e}function Vi(e){const t=e.companyId||i.activeCompanyId||C(),a=xe();i.activeCompanyId=a.includes(t)?t:a[0]||C(),localStorage.setItem(Be,i.activeCompanyId)}function ba(e){const t=p();e.jobId&&D(t).some(n=>n.id===e.jobId)&&(i.selectedJobId=e.jobId),(!i.selectedJobId||!D(t).some(n=>n.id===i.selectedJobId))&&(i.selectedJobId=D(t)[0]?.id||"");const a=e.params.get("task_id");a&&Y(t).some(n=>n.id===a)&&(i.selectedTaskId=a),e.section!=="tasks"&&(i.selectedTaskId=""),i.driveFolder=e.params.get("folder")||"home"}function zi(e){const t=xe(),a=T(e),n=t.includes(a)?a:t[0]||C();i.activeCompanyId=n,localStorage.setItem(Be,n),Hi();const o=i.route||Ke(),r=o.name==="company"?o.section:"jobs";w(l(r,{},n))}function Hi(){i.modal="",i.selectedJobId="",i.selectedTaskId="",i.selectedFileId="",i.selectedFormId="",i.selectedQuestionId="",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",i.query="",i.fileQuery="",i.formQuery="",i.crmQuery="",i.stageFilter="all",i.crmStageFilter="all",i.crmOwnerFilter="all",i.taskStatusFilter="all",i.taskPriorityFilter="all",i.fileCategoryFilter="All categories",i.formTypeFilter="all",i.formsTab="library",i.driveFolder="home"}function Bi(e){const t=h(e);t&&(i.selectedJobId=e,w(l("jobs",{tab:"profile",job_id:e},t.company_id)))}function Wi(e){const t=ga(e);t&&(i.selectedTaskId=e,w(l("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function de(){return h(i.selectedJobId)||D(p())[0]||null}function h(e){return i.jobs.find(t=>t.id===e)||null}function ga(e){return i.tasks.find(t=>t.id===e)||null}function D(e=p()){return i.jobs.filter(t=>t.company_id===e)}function Y(e=p()){return i.tasks.filter(t=>t.company_id===e)}function ce(e=p()){return i.files.filter(t=>t.company_id===e)}function $e(e=p()){return i.driveFolders.filter(t=>t.company_id===e)}function pe(e=p()){return i.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function va(e=p()){const t=i.query.trim().toLowerCase();return D(e).filter(a=>i.stageFilter!=="all"&&a.stage!==i.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,_(a.company_id)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function Ye(e=p()){const t=new Map;return D(e).forEach(a=>{const n=String(a.client_name||"").trim()||"Unassigned customer",o=`account-${Ot(n.toLowerCase())}`;t.has(o)||t.set(o,{key:o,name:n,jobs:[]}),t.get(o).jobs.push(a)}),Array.from(t.values()).map(a=>{const n=a.jobs.slice().sort((j,Z)=>Date.parse(Z.updated_at||Z.created_at||0)-Date.parse(j.updated_at||j.created_at||0)),o=n[0]||null,r=n.map(j=>j.id),c=Y(e).filter(j=>r.includes(j.project_id)),d=ie(e).filter(j=>r.includes(j.linked_job_id)),m=ce(e).filter(j=>r.includes(j.job_id)),S=X(n.map(j=>j.contact_name)),f=X(n.map(j=>j.owner_name)),k=X(n.map(j=>j.site_address)),U=n.map(j=>j.priority||"Medium").sort((j,Z)=>ye(Z)-ye(j))[0]||"Medium";return{...a,jobs:n,tasks:c,latestJob:o,contacts:S,owners:f,addresses:k,forms:d,files:m,primaryContact:S[0]||"No contact",owner:f[0]||"Unassigned",stage:o?.stage||"Lead",priority:U,estimateTotal:z(n,"estimate_total"),fileCount:m.length,formCount:d.length,updatedAt:o?.updated_at||o?.created_at||new Date().toISOString(),subtitle:k[0]||`${n.length} linked job${n.length===1?"":"s"}`}}).sort((a,n)=>Date.parse(n.updatedAt||0)-Date.parse(a.updatedAt||0))}function Ki(e=p()){const t=i.crmQuery.trim().toLowerCase();return Ye(e).filter(a=>i.crmStageFilter!=="all"&&!a.jobs.some(n=>n.stage===i.crmStageFilter)||i.crmOwnerFilter!=="all"&&!a.owners.includes(i.crmOwnerFilter)?!1:t?[a.name,a.primaryContact,a.owner,a.stage,...a.addresses,...a.contacts,...a.jobs.map(n=>n.name)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function Yi(e,t){return Ye(e).find(a=>a.key===t)||null}function Gi(e=p()){return X(D(e).map(t=>t.owner_name)).sort((t,a)=>t.localeCompare(a))}function ya(e=p()){const t=N().profile.member_id||"",a=Y(e).slice().sort(Qt),n=a.filter(Zi),o=n.filter(k=>k.due===y(0)),r=n.filter(k=>zt(k.due)<0),c=n.filter(k=>{const U=zt(k.due);return U>=0&&U<=7}),d=n.filter(k=>k.assignee_id===t),m=n.filter(k=>["review","pending"].includes(k.status)),S=a.filter(k=>k.status==="done"),f=X(r.concat(o,d,m,c).map(k=>k.id)).map(k=>a.find(U=>U.id===k)).filter(Boolean).sort(Qt);return{tasks:a,open:n,dueToday:o,overdue:r,thisWeek:c,assignedToMe:d,review:m,done:S,focus:f}}function _a(e=p()){const t=ie(e).filter(o=>(o.require_approval||o.type==="Client approval")&&!["Archived","Closed","Approved"].includes(o.status)).map(o=>({id:`form:${o.id}`,title:o.title,meta:h(o.linked_job_id)?.name||o.description||"Company form",type:"Form approval",owner:H(o.creator_id),status:o.status,updatedAt:o.updated_at||o.created_at,href:l("forms",{form_id:o.id},e)})),a=Y(e).filter(o=>["review","pending"].includes(o.status)).map(o=>({id:`task:${o.id}`,title:o.title,meta:h(o.project_id)?.name||o.description||"Company task",type:"Task review",owner:H(o.assignee_id),status:se(o.status),updatedAt:o.updated_at||o.due,href:l("tasks",{...o.project_id?{job_id:o.project_id}:{},task_id:o.id},e)})),n=i.memberships.filter(o=>o.company_id===e&&o.status!=="active").map(o=>({id:`access:${o.profile_id||o.member_id}`,title:H(o.member_id||o.profile_id),meta:`${E(o.role)} access request`,type:"Access request",owner:"Quest admin",status:E(o.status),updatedAt:new Date().toISOString(),href:l("settings",{tab:"access"},e)}));return t.concat(a,n).sort((o,r)=>Date.parse(r.updatedAt||0)-Date.parse(o.updatedAt||0))}function Zi(e){return e.status!=="done"}function Qt(e,t){const a=Date.parse(e.due||0)-Date.parse(t.due||0);return a||ye(t.priority)-ye(e.priority)}function ue(e=p()){return i.financeInvoices.filter(t=>t.company_id===e).sort(Ie("updated_at"))}function ha(e=p()){return i.financePayments.filter(t=>t.company_id===e)}function vt(e=p()){return i.financeExpenses.filter(t=>t.company_id===e).sort(Ie("updated_at"))}function yt(e=p()){return i.financeVendors.filter(t=>t.company_id===e)}function me(e){return i.financeInvoices.find(t=>t.id===e)||null}function $a(e){return i.financeExpenses.find(t=>t.id===e)||null}function _t(e){return i.financeVendors.find(t=>t.id===e)||null}function lt(e){return _t(e)?.name||"No vendor"}function wa(e){return i.financePayments.filter(t=>t.invoice_id===e).sort(Ie("received_at"))}function ht(e){return z(wa(e),"amount")}function ee(e){const t=me(e);return Math.max(0,O(t?.total)-ht(e))}function Sa(e){const t=ee(e.id);return t<=0&&O(e.total)>0?"Paid":t<O(e.total)?"Partially paid":e.status==="Sent"&&Ma(e.due_date)>0?"Overdue":e.status}function ka(e=p()){const t=ue(e),a=ha(e),n=vt(e).filter(d=>["Approved","Paid"].includes(d.status)),o={current:0,thirty:0,sixty:0,overSixty:0};t.forEach(d=>{const m=ee(d.id);if(!m)return;const S=Ma(d.due_date);S<=0?o.current+=m:S<=30?o.thirty+=m:S<=60?o.sixty+=m:o.overSixty+=m});const r=z(a,"amount"),c=z(n,"amount");return{pipeline:z(D(e),"estimate_total"),invoiced:z(t,"total"),collected:r,outstanding:t.reduce((d,m)=>d+ee(m.id),0),expenses:c,net:r-c,aging:o}}function Xi(e=p(),t=""){const a=i.query.trim().toLowerCase();return Y(e).filter(n=>t&&n.project_id!==t||i.taskStatusFilter!=="all"&&n.status!==i.taskStatusFilter||i.taskPriorityFilter!=="all"&&n.priority!==i.taskPriorityFilter?!1:a?[n.title,n.description,Ae(n.type),H(n.assignee_id),h(n.project_id)?.name].some(o=>String(o||"").toLowerCase().includes(a)):!0)}function ja(){const e=xe();return i.companies.filter(t=>e.includes(t.id))}function xe(){const e=N().profile,t=i.companies.map(o=>o.id);if(["developer","admin"].includes(e.role))return X(t.length?t:ve.map(o=>T(o.id)));const a=i.memberships.filter(o=>o.profile_id===e.id&&o.status!=="disabled").map(o=>T(o.company_id)),n=a.length?a:e.company_ids||[];return X(n.map(T)).filter(o=>t.includes(o))}function p(){const e=xe();return e.includes(i.activeCompanyId)?i.activeCompanyId:e[0]||C()}function C(){return T(ve[0].id)}function Ge(e){const t=T(e);return i.companies.find(a=>a.id===t)||ve.map(we).find(a=>a.id===t)||null}function _(e){const t=Ge(e);return t?Ze(t):e||"Company"}function Ze(e){return e.short_name||e.label||e.name||e.id}function ne(e){return Ge(e)?.color||"#f0b23b"}function Re(e){return T(i.jobs.find(t=>t.id===e)?.company_id||"")}function $t(e){const t=N().profile;return["developer","admin"].includes(t.role)?E(t.role):E(i.memberships.find(a=>a.company_id===e&&a.profile_id===t.id)?.role||t.role||"member")}function Da(e,t){const a=i.memberships.find(n=>n.company_id===e&&(n.member_id===t||n.profile_id===t));return E(a?.role||"member")}function H(e){const t=i.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function Xe(e){return i.tasks.filter(t=>t.project_id===e).length}function Ve(e){return i.files.filter(t=>t.job_id===e).length}function T(e){return{"quest-roofing":"roofing","quest-drafting":"drafting"}[String(e||"").trim()]||String(e||"").trim()}function dt(e){const t=new Map;return e.map(we).forEach(a=>{!a.id||t.has(a.id)||t.set(a.id,a)}),Array.from(t.values())}function we(e){return{id:T(e.id||""),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function Se(e){return{id:String(e.id||""),company_id:T(e.company_id||C()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:Ce.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:O(e.estimate_total),invoice_total:O(e.invoice_total),task_count:O(e.task_count),file_count:O(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function ke(e){const t=Je.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=qe.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:oa.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:T(e.company_id||C()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||y(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:Je.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function ze(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:T(e.company_id||C()),job_id:String(e.job_id||""),folder:String(e.folder||Ls(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:O(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ia(e){return{id:String(e.id||`folder-${crypto.randomUUID()}`),company_id:T(e.company_id||C()),name:String(e.name||"New folder").trim()||"New folder",parent_key:String(e.parent_key||"home"),created_by_label:String(e.created_by_label||"Quest HQ"),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function et(e){const t=Array.isArray(e.questions)?e.questions.map(tt):[],a=Te.includes(e.type)?e.type:"Internal",n=ft.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:T(e.company_id||C()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:n,audience:String(e.audience||"Internal").trim(),creator_id:String(e.creator_id||e.created_by||e.created_by_id||""),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function tt(e){const t=Oe.some(([n])=>n===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(n=>String(n||"").trim()).filter(Boolean):[]};return De(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function Fa(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:T(e.company_id||C()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function wt(e){const t=O(e.subtotal),a=O(e.tax),n=O(e.total)||t+a;return{id:String(e.id||`invoice-${crypto.randomUUID()}`),company_id:T(e.company_id||C()),job_id:String(e.job_id||""),client_name:String(e.client_name||"").trim(),invoice_number:String(e.invoice_number||`INV-${Date.now()}`).trim(),status:ra.includes(e.status)?e.status:"Draft",issue_date:String(e.issue_date||y(0)).slice(0,10),due_date:String(e.due_date||y(30)).slice(0,10),subtotal:t,tax:a,total:n,notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function St(e){return{id:String(e.id||`payment-${crypto.randomUUID()}`),company_id:T(e.company_id||C()),invoice_id:String(e.invoice_id||""),amount:O(e.amount),method:ca.includes(e.method)?e.method:"ACH",received_at:String(e.received_at||y(0)).slice(0,10),reference:String(e.reference||"").trim(),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString()}}function kt(e){return{id:String(e.id||`expense-${crypto.randomUUID()}`),company_id:T(e.company_id||C()),job_id:String(e.job_id||""),vendor_id:String(e.vendor_id||""),category:We.includes(e.category)?e.category:"Other",amount:O(e.amount),status:la.includes(e.status)?e.status:"Pending",spent_at:String(e.spent_at||y(0)).slice(0,10),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function jt(e){return{id:String(e.id||`vendor-${crypto.randomUUID()}`),company_id:T(e.company_id||C()),name:String(e.name||"New vendor").trim()||"New vendor",contact_name:String(e.contact_name||"").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),category:We.includes(e.category)?e.category:"Other",status:da.includes(e.status)?e.status:"Active",notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ca(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,company_ids:Array.isArray(e.company_ids)?X(e.company_ids.map(T)):[]}}function es(e){return{company_id:T(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function ts(e=p()){return Se({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function as(e=p(),t=""){return ke({id:"",title:"",company_id:e,project_id:t,assignee_id:pe(e)[0]?.id||"abraham",creator_id:N().profile.member_id||"abraham",due:y(1),priority:"medium",status:"todo",type:"admin"})}function ns(e=p()){const t=de();return wt({id:"",company_id:e,job_id:t?.company_id===e?t.id:"",client_name:t?.company_id===e?t.client_name:"",invoice_number:Us(e),status:"Draft",issue_date:y(0),due_date:y(30),subtotal:t?.company_id===e?t.estimate_total:0,tax:0,notes:""})}function is(e=p(),t=""){const a=t?me(t):ue(e).find(o=>ee(o.id)>0),n=a?.company_id===e?a:null;return St({id:"",company_id:e,invoice_id:n?.id||"",amount:n?ee(n.id):0,method:"ACH",received_at:y(0),reference:"",notes:""})}function ss(e=p(),t=""){return kt({id:"",company_id:e,job_id:de()?.company_id===e?de().id:"",vendor_id:t||yt(e)[0]?.id||"",category:"Materials",status:"Pending",amount:0,spent_at:y(0),notes:""})}function os(e=p()){return jt({id:"",company_id:e,name:"",category:"Materials",status:"Active"})}function rs(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function ls(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function N(){return i.session?{...i.session,profile:{...ct().profile,...i.session.profile||{},...i.profileDraft||{}}}:ct()}function ct(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",...i.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:le.localUsername,email:e.email},profile:e}}function B(e,t,a=""){return`
    <section class="workspace-head">
      <div>
        <div class="context-line"><span>${s(_(p()))}</span><b>${s($t(p()))}</b></div>
        <h1>${s(e)}</h1>
        <p>${s(t)}</p>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function ds(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric"><span>${s(t)}</span><strong>${s(a)}</strong></article>`).join("")}</section>`}function cs(e){return`
    <button class="queue-row" type="button" data-select-job="${s(e.id)}">
      <span><strong>${s(e.name)}</strong><small>${s(e.client_name||_(e.company_id))}</small></span>
      ${Dt(e.priority)}
      <b>${s(e.stage)}</b>
    </button>
  `}function at(e){return`
    <button class="queue-row" type="button" data-select-task="${s(e.id)}">
      <span><strong>${s(e.title)}</strong><small>${s(h(e.project_id)?.name||_(e.company_id))}</small></span>
      ${qa(e.priority)}
      <b>${s(se(e.status))}</b>
    </button>
  `}function ps(e){return`
    <button class="job-card priority-${s(e.priority.toLowerCase())} ${e.id===i.selectedJobId?"active":""}" type="button" data-select-job="${s(e.id)}">
      <strong>${s(e.name)}</strong>
      <span>${s(e.client_name||"No client")}</span>
      <small>${s(_(e.company_id))} - ${s(e.owner_name||"Unassigned")}</small>
      <em>${s(Xe(e.id))} tasks</em>
    </button>
  `}function Ne(e,t,a,n){return`
    <a class="mini-link" href="${b(e)}" data-router>
      <i class="ti ${s(t)}"></i>
      <span><strong>${s(a)}</strong><small>${s(n)}</small></span>
    </a>
  `}function M(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${s(t)}</span><strong>${s(a)}</strong></div>`).join("")}</div>`}function $(e,t,a="",n=!1,o="text",r=""){return`<label class="${s(r)}"><span>${s(e)}</span><input name="${s(t)}" type="${s(o)}" value="${s(a)}" ${n?"required":""} /></label>`}function te(e,t,a="",n=""){return`<label class="${s(n)}"><span>${s(e)}</span><textarea name="${s(t)}" rows="4">${s(a)}</textarea></label>`}function q(e,t,a,n){return`
    <label><span>${s(e)}</span><select name="${s(t)}">
      ${n.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function Dt(e){return`<span class="priority ${s(String(e).toLowerCase())}">${s(e)}</span>`}function qa(e){return`<span class="priority ${s(e)}">${s(E(e))}</span>`}function Ta(e){return`<span class="status-pill ${s(e)}">${s(se(e))}</span>`}function us(e){return`<span class="finance-status ${s(Ot(e))}">${s(e)}</span>`}function It(e,t){if(e.avatar_url)return`<span class="${s(t)}"><img src="${s(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${s(t)}">${s(a)}</span>`}function g(e){return`<div class="empty-state">${s(e)}</div>`}function V(e,t){const a={};return t.forEach(n=>{const o=e.get(n);o&&(a[n]=o)}),a}function Q(){A(Bt,i.jobs),A(Wt,i.tasks),A(Kt,i.files),A(Yt,i.driveFolders),A(Fe,i.forms),A(ut,i.formResponses),A(Xt,i.financeInvoices),A(ea,i.financePayments),A(ta,i.financeExpenses),A(aa,i.financeVendors),A(Gt,i.teamMembers),A(Zt,i.memberships)}function F(e,t,a=""){return`<article class="metric"><span>${s(e)}</span><strong>${s(t)}</strong>${a?`<small>${s(a)}</small>`:""}</article>`}function re(e,t){return`<div><strong>${s(e)}</strong><span>${s(t)}</span></div>`}function Me(e,t,a,n,o=""){const r=`
    <span><strong>${s(e)}</strong><small>${s(t||"Finance record")}</small></span>
    <b>${s(a)}</b>
    <em>${x(n)}</em>
  `;return o?`<a class="finance-compact-row" href="${b(o)}" data-router>${r}</a>`:`<div class="finance-compact-row">${r}</div>`}function Jt(e,t){const a=ce(e);return t==="jobs"?a.filter(n=>n.job_id).length:a.filter(n=>n.folder===t).length}function Oa(e="home",t=null){return t?.id?`job:${t.id}`:e||"home"}function ms(e,t="home",a=null){const n=Oa(t,a),o=$e(e).filter(r=>r.parent_key===n).map(r=>fs(e,r));return a?o:t==="home"?mt.map(([c,d,m,S])=>({id:c,name:d,caption:m,icon:S,href:b(l("files",{folder:c},e)),countLabel:`${Jt(e,c)} file${Jt(e,c)===1?"":"s"}`,updatedLabel:""})).concat(o):t==="jobs"?D(e).map(c=>({id:`job:${c.id}`,name:c.name,caption:c.client_name||_(e),icon:"ti-folder",href:b(l("files",{folder:"jobs",job_id:c.id},e)),countLabel:`${Ve(c.id)} file${Ve(c.id)===1?"":"s"}`,updatedLabel:x(c.updated_at)})).concat(o):o}function fs(e,t){const a=$e(e).filter(r=>r.parent_key===t.id).length,n=ce(e).filter(r=>r.folder===t.id).length,o=a+n;return{id:t.id,name:t.name,caption:"Custom folder",icon:"ti-folder",href:b(l("files",{folder:t.id},e)),countLabel:`${o} item${o===1?"":"s"}`,updatedLabel:x(t.updated_at)}}function bs(e,t,a=null){if(a)return`<span>/</span><a href="${b(l("files",{folder:"jobs"},e))}" data-router>Jobs</a>`;const n=$e(e).find(m=>m.id===t);if(!n)return`<span>/</span><strong>${s(K(t))}</strong>`;const o=[];let r=n;const c=new Set;for(;r&&!c.has(r.id);)c.add(r.id),o.unshift(r),r=$e(e).find(m=>m.id===r.parent_key);return`${n.parent_key&&!n.parent_key.startsWith("folder-")&&n.parent_key!=="home"?`<span>/</span><a href="${b(l("files",{folder:n.parent_key},e))}" data-router>${s(K(n.parent_key))}</a>`:""}${o.map((m,S)=>`<span>/</span>${S===o.length-1?`<strong>${s(m.name)}</strong>`:`<a href="${b(l("files",{folder:m.id},e))}" data-router>${s(m.name)}</a>`}`).join("")}`}function gs(e=p(),t="home",a=""){const n=(i.fileQuery||i.query||"").trim().toLowerCase(),o=i.fileCategoryFilter;let r=ce(e);return a?r=r.filter(c=>c.job_id===a):t&&t!=="home"&&(t==="jobs"?r=r.filter(c=>c.job_id):r=r.filter(c=>c.folder===t)),o&&o!=="All categories"&&(r=r.filter(c=>String(c.category||K(c.folder)).toLowerCase()===o.toLowerCase())),n&&(r=r.filter(c=>[c.file_name,c.category,c.uploaded_by_label,c.notes,c.object_path,h(c.job_id)?.name].some(d=>String(d||"").toLowerCase().includes(n)))),r.sort((c,d)=>new Date(d.created_at||0)-new Date(c.created_at||0))}function fe(e){const t=String(e.mime_type||"").toLowerCase(),a=xa(e);return t.includes("pdf")||a==="pdf"?"PDF":t.includes("image")||["png","jpg","jpeg","gif","webp","svg"].includes(a)?"Image":t.includes("zip")||["zip","rar","7z"].includes(a)?"Archive":t.includes("spreadsheet")||t.includes("excel")||["xls","xlsx","csv"].includes(a)?"Excel":t.includes("word")||["doc","docx"].includes(a)?"Word":t.includes("text")||["txt","md","json","csv","log"].includes(a)?"Text":t.includes("presentation")||["ppt","pptx"].includes(a)?"PowerPoint":a?a.toUpperCase():K(e.folder)}function Ft(e){const t=fe(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="excel"?"sheet":t==="text"?"text":["word","powerpoint"].includes(t)?"doc":t==="archive"?"zip":"doc"}function xa(e){return String(e.file_name||"").split(".").pop()?.toLowerCase()||""}function Ct(e,t=!1){const a=Ra(e);return e.signed_url?`<img src="${s(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${s(Ft(e))} ${t?"large":""}"><i class="ti ${s(a)}"></i></span>`}function vs(e){const t=fe(e),a=xa(e);return t==="Image"?a&&a.length<=4?a.toUpperCase():"IMG":t==="Archive"?a&&a.length<=3?a.toUpperCase():"ZIP":t==="Excel"?a==="csv"?"CSV":"XLS":t==="Word"?"DOC":t==="PowerPoint"?"PPT":t==="Text"?a&&a.length<=4?a.toUpperCase():"TXT":t.length<=4?t.toUpperCase():(a||"FILE").slice(0,4).toUpperCase()}function ie(e=p()){return i.forms.filter(t=>t.company_id===e)}function ys(e=p()){const t=i.formQuery.trim().toLowerCase(),a=i.route?.jobId||"";return ie(e).filter(n=>a&&n.linked_job_id!==a||i.formTypeFilter!=="all"&&n.type!==i.formTypeFilter?!1:t?[n.title,n.description,n.type,n.status,n.audience,h(n.linked_job_id)?.name].some(o=>String(o||"").toLowerCase().includes(t)):!0)}function je(e=p()){const t=i.route?.jobId||"",a=ie(e).filter(r=>!t||r.linked_job_id===t),n=i.route?.params?.get("form_id")||"";if(n&&a.some(r=>r.id===n)&&(i.selectedFormId=n),!a.length)return i.selectedFormId="",i.selectedQuestionId="",null;let o=a.find(r=>r.id===i.selectedFormId)||a[0];return i.selectedFormId=o.id,(!i.selectedQuestionId||!o.questions.some(r=>r.id===i.selectedQuestionId))&&(i.selectedQuestionId=o.questions[0]?.id||""),o}function be(e){return i.forms.find(t=>t.id===e)||null}function G(){return be(i.selectedFormId)||je(p())}function Aa(e=p()){return i.formResponses.filter(t=>t.company_id===e)}function nt(e){return i.formResponses.filter(t=>t.form_id===e)}function Ea(e){return Array.isArray(e?.questions)?e.questions.length:0}function _s(e){const t=String(e?.creator_id||""),a=N().profile;return t?t&&(t===a.member_id||t===a.id)?a.full_name||"Quest Basic Mode":H(t):e?.created_by_label||a.full_name||"Quest HQ"}function _e(e,t,a="",n=!1,o="text"){return`<label><span>${s(e)}</span><input data-form-field="${s(t)}" type="${s(o)}" value="${s(a)}" ${n?"required":""} /></label>`}function Pa(e,t,a=""){return`<label><span>${s(e)}</span><textarea data-form-field="${s(t)}" rows="3">${s(a)}</textarea></label>`}function Le(e,t,a,n){return`
    <label><span>${s(e)}</span><select data-form-field="${s(t)}">
      ${n.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function De(e){return["multiple","checkbox","dropdown"].includes(e.type)}function hs(e){return{short:"ti-letter-t",paragraph:"ti-align-left",multiple:"ti-circle-dot",checkbox:"ti-checkbox",dropdown:"ti-select",date:"ti-calendar",rating:"ti-star",yesno:"ti-circle-check",file:"ti-paperclip"}[e]||"ti-plus"}function $s(e){return Oe.find(([t])=>t===e)?.[1]||E(e||"Question")}function W(e,t){return`
    <div class="response-question">
      <label>
        <span>${s(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${s(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function Na(e){const t=be(e.form_id),a=Object.entries(e.answers||{}).map(([n,o])=>{const r=t?.questions.find(d=>d.id===n),c=Array.isArray(o)?o.join(", "):o;return re(r?.label||n,c||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${s(t?.title||"Response")}</h2><p>${s(e.submitted_by||e.submitter_email||"Anonymous")} / ${x(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||re("Response","No answers captured.")}</div>
  `}function he(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[P("short","Inspection address"),P("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),P("paragraph","Recommended scope"),P("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[P("short","Client name"),P("yesno","Approved to proceed?"),P("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[P("short","Request title"),P("dropdown","Priority",["Low","Medium","High","Urgent"]),P("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[P("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),P("yesno","Weather safe?"),P("paragraph","Safety notes")]}]}function ws(e=p()){return et({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:i.route?.jobId||"",theme_color:ne(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[P("short","First question")]})}function P(e="short",t="Untitled question",a=[]){return tt({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function Ss(e,t={}){const a=ws(e),n=et({...a,...t,id:t.id||`form-${crypto.randomUUID()}`,company_id:e,questions:(t.questions||a.questions).map(o=>tt(o)),created_at:t.created_at||new Date().toISOString(),updated_at:new Date().toISOString()});return i.forms.unshift(n),i.selectedFormId=n.id,i.selectedQuestionId=n.questions[0]?.id||"",i.formsTab="builder",i.formEditorTab="questions",i.modal="",i.formStartTemplateId="",i.formStartTab="blank",L("New form created"),u(),n}function ks(e){const t=Object.fromEntries(new FormData(e).entries()),a=t.template_id?he().find(c=>c.id===t.template_id):null,n=String(t.title||a?.title||"Untitled form").trim()||"Untitled form",o=String(t.description||a?.description||"").trim(),r=a?a.questions.map(c=>({...He(c),id:`q-${crypto.randomUUID()}`})):[P("short","First question")];Ss(p(),{title:n,description:o,type:Te.includes(t.type)?t.type:a?.type||"Internal",audience:String(t.audience||"Internal").trim()||"Internal",creator_id:N().profile.member_id||N().profile.id||"basic-quest-user",linked_job_id:String(t.linked_job_id||""),theme_color:ne(p()),background:"clean",submit_label:String(t.submit_label||"Submit").trim()||"Submit",collect_email:t.collect_email==="on",require_approval:t.require_approval==="on",questions:r})}function Ue(e,t=!0){const a=be(e);a&&(i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",t&&u())}function L(e="Forms saved locally"){const t=G();t&&(t.updated_at=new Date().toISOString()),A(Fe,i.forms),A(ut,i.formResponses),i.sync={label:e,mode:"live"}}function Vt(e,t){const a=be(e||i.selectedFormId);a&&(a.status=ft.includes(t)?t:"Draft",i.selectedFormId=a.id,L(`${a.status} locally`),u())}function js(e){const t=be(e||i.selectedFormId);if(!t)return;const a=et({...He(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(n=>({...He(n),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.forms.unshift(a),i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",L("Form duplicated"),u()}function Ds(e){const t=e||i.selectedFormId;t&&(i.forms=i.forms.filter(a=>a.id!==t),i.formResponses=i.formResponses.filter(a=>a.form_id!==t),i.selectedFormId=ie(p())[0]?.id||"",i.selectedQuestionId=je(p())?.questions[0]?.id||"",i.modal="",L("Form deleted locally"),u())}async function Is(e){const t=e||i.selectedFormId,a=`${window.location.origin}${b(l("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),i.sync={label:"Form link copied",mode:"live"}}catch{i.sync={label:"Copy failed",mode:"local"}}u()}function Fs(e){const t=JSON.stringify({company_id:e,forms:ie(e),responses:Aa(e)},null,2);Ps(`${e}-forms-export.json`,t,"application/json")}function La(e){const t=G();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),A(Fe,i.forms))}function Ua(e){const t=G(),a=e.closest("[data-question-id]"),n=t?.questions.find(o=>o.id===a?.dataset.questionId);if(!(!t||!n)){if(i.selectedQuestionId=n.id,e.matches("[data-question-option]")){const o=Number(e.dataset.questionOption);n.options[o]=e.value}else{const o=e.dataset.questionField;if(o==="required")n.required=e.checked;else if(o==="type"){n.type=e.value,De(n)&&!n.options.length&&(n.options=["Option 1","Option 2"]),De(n)||(n.options=[]),L("Question updated"),u();return}else o&&(n[o]=e.value)}t.updated_at=new Date().toISOString(),A(Fe,i.forms)}}function Cs(e="multiple"){const t=G();if(!t)return;const a=P(e,Oe.find(([n])=>n===e)?.[1]||"New question");t.questions.push(a),i.selectedQuestionId=a.id,L("Question added"),u()}function qs(e){const t=G(),a=t?.questions.find(r=>r.id===e);if(!t||!a)return;const n=t.questions.findIndex(r=>r.id===e),o=tt({...He(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(n+1,0,o),i.selectedQuestionId=o.id,L("Question duplicated"),u()}function Ts(e){const t=G();t&&(t.questions=t.questions.filter(a=>a.id!==e),i.selectedQuestionId=t.questions[0]?.id||"",L("Question deleted"),u())}function Os(e,t){const a=G();if(!a||!t)return;const n=a.questions.findIndex(c=>c.id===e),o=n+t;if(n<0||o<0||o>=a.questions.length)return;const[r]=a.questions.splice(n,1);a.questions.splice(o,0,r),i.selectedQuestionId=e,L("Question moved"),u()}function xs(e){const a=G()?.questions.find(n=>n.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),L("Option added"),u())}function As(e,t){const n=G()?.questions.find(o=>o.id===e);!n||t<0||(n.options.splice(t,1),n.options.length||n.options.push("Option 1"),L("Option removed"),u())}function Es(e){const t=be(e.dataset.formId);if(!t)return;const a=new FormData(e),n={};t.questions.forEach(o=>{const r=`answer:${o.id}`,c=a.getAll(r).filter(d=>d instanceof File?d.name:String(d||"").trim());n[o.id]=c.length>1?c.map(d=>d instanceof File?d.name:d):c[0]instanceof File?c[0].name:c[0]||""}),i.formResponses.unshift(Fa({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||N().profile.full_name||"Preview submitter"),answers:n,created_at:new Date().toISOString()})),i.formsTab="responses",i.modal="",L("Preview response saved"),u()}function Ps(e,t,a="text/plain"){const n=new Blob([t],{type:a}),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=e,r.click(),URL.revokeObjectURL(o)}function He(e){return JSON.parse(JSON.stringify(e))}function X(e){return Array.from(new Set(e.map(t=>String(t||"").trim()).filter(Boolean)))}function se(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||E(e)}function Ae(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||E(e)}function K(e){return mt.find(([t])=>t===e)?.[1]||i.driveFolders.find(t=>t.id===e)?.name||E(e||"Shared")}function Ns(e=p()){return mt.map(([t,a])=>[t,a]).concat($e(e).map(t=>[t.id,t.name]))}function Ls(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Ra(e){const t=fe(e);return t==="Image"?"ti-photo":t==="PDF"?"ti-file-type-pdf":t==="Archive"?"ti-file-zip":t==="Excel"?"ti-file-spreadsheet":t==="Word"?"ti-file-type-doc":t==="PowerPoint"?"ti-file-type-ppt":t==="Text"?"ti-file-text":"ti-file-description"}function E(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function y(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function x(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function qt(e){const t=O(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],n=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**n).toFixed(n?1:0)} ${a[n]}`}function Ie(e){return(t,a)=>Date.parse(a[e]||a.updated_at||a.created_at||0)-Date.parse(t[e]||t.updated_at||t.created_at||0)}function Ma(e){if(!e)return 0;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?0:Math.floor((Tt().getTime()-t.getTime())/864e5)}function zt(e){if(!e)return 999;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?999:Math.floor((t.getTime()-Tt().getTime())/864e5)}function Us(e=p()){const t=(Ze(Ge(e)||{short_name:e})||e||"QH").replace(/[^a-z]/gi,"").slice(0,2).toUpperCase()||"QH",a=ue(e).length+1;return`${t}-${String(1e3+a)}`}function Tt(){const e=new Date;return e.setHours(0,0,0,0),e}function Rs(e,t){return`${Qa(e,t)}%`}function Qa(e,t){const a=O(t);return a?Math.max(0,Math.min(100,Math.round(O(e)/a*100))):0}function ye(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function Ot(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function z(e,t){return e.reduce((a,n)=>a+O(n[t]),0)}function O(e){const t=Number(e);return Number.isFinite(t)?t:0}function v(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(O(e))}function pt(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function R(e,t){const a=pt(e,t);return Array.isArray(a)&&a.length?a:t}function A(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
