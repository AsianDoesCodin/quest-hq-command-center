(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const re={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},fe=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),Qe="quest-hq-local-session",ea="quest-hq-local-profile",ta="quest-hq-job-cache-v2",aa="quest-hq-task-cache-v1",na="quest-hq-file-cache-v1",ia="quest-hq-drive-folder-cache-v1",sa="quest-hq-team-cache-v1",oa="quest-hq-company-membership-cache-v1",Fe="quest-hq-company-form-cache-v1",mt="quest-hq-company-form-response-cache-v1",ra="quest-hq-finance-invoice-cache-v1",la="quest-hq-finance-payment-cache-v1",da="quest-hq-finance-expense-cache-v1",ca="quest-hq-finance-vendor-cache-v1",ft="quest-hq-time-entry-cache-v1",bt="quest-hq-active-timer-v1",Be="quest-hq-active-company",pa="quest-hq-task-view",ua="quest-hq-drive-view",Ut={developer:["*"],admin:["*"],manager:["jobs.manage","tasks.manage","files.manage","forms.manage","finance.view","team.view","clock.manage","approvals.manage","approvals.view","users.view","settings.view"],member:["jobs.view","tasks.manage","files.view","forms.view","time.track","approvals.view","users.view"]},ma=[{id:"jobs",group:"Workspace",label:"Jobs",icon:"ti-briefcase",status:"live",permission:"jobs.view"},{id:"tasks",group:"Workspace",label:"Tasks",icon:"ti-list-check",status:"live",permission:"tasks.manage"},{id:"files",group:"Workspace",label:"Files",icon:"ti-folder",status:"live",permission:"files.view"},{id:"forms",group:"Workspace",label:"Forms",icon:"ti-clipboard-list",status:"live",permission:"forms.view"},{id:"analytics",group:"Workspace",label:"Analytics",icon:"ti-chart-bar",status:"live",permission:"jobs.view"},{id:"crm",group:"Workspace",label:"CRM",icon:"ti-users-group",status:"live",permission:"jobs.view"},{id:"tickets",group:"Workspace",label:"Tickets",icon:"ti-ticket",status:"planned"},{id:"finance",group:"Workspace",label:"Finance",icon:"ti-receipt-dollar",status:"live",permission:"finance.view"},{id:"knowledge",group:"Workspace",label:"Knowledge Base",icon:"ti-books",status:"planned"},{id:"automations",group:"Workspace",label:"Automations",icon:"ti-automation",status:"planned"},{id:"templates",group:"Workspace",label:"Templates",icon:"ti-template",status:"planned"},{id:"users",group:"Company",label:"Users",icon:"ti-users",status:"live",permission:"users.view"},{id:"settings",group:"Company",label:"Settings",icon:"ti-settings",status:"live",permission:"settings.view"},{id:"team-chart",group:"Company",label:"Team chart",icon:"ti-hierarchy-3",status:"live",permission:"team.view"},{id:"time",group:"Operations",label:"My time",icon:"ti-clock",status:"live",permission:"time.track"},{id:"approvals",group:"Operations",label:"Approvals",icon:"ti-user-check",status:"live",permission:"approvals.view"},{id:"team-workload",group:"Operations",label:"Team workload",icon:"ti-users",status:"planned"},{id:"clock",group:"Operations",label:"Clock dashboard",icon:"ti-clock-hour-4",status:"live",permission:"clock.manage"}],Xa={"/admin.html":"settings","/automations.html":"automations","/crm.html":"crm","/dashboards.html":"analytics","/files.html":"files","/finance.html":"finance","/forms.html":"forms","/jobs.html":"jobs","/knowledge.html":"knowledge","/templates.html":"templates","/tickets.html":"tickets"},Ce=["Lead","Site Review","Estimate","Approved","Active","Closed"],fa=["pipeline","list","profile"],Ie=["todo","pending","hold","review","done"],Je=["critical","urgent","high","medium","low"],ba=["lead","bid","admin","invoicing","ar","meeting","web_dev"],en=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],gt=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],qe=["Inspection","Client approval","Intake","Survey","Safety","Internal"],vt=["Draft","Published","Archived"],ga=["Draft","Sent","Partially paid","Paid","Overdue","Void"],va=["Pending","Approved","Paid","Rejected"],_a=["Active","On hold","Inactive"],ya=["ACH","Check","Card","Cash","Wire","Other"],We=["Materials","Labor","Subcontractor","Permit","Equipment","Marketing","Software","Travel","Other"],Te=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],be=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],tn=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],an=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"],supervisor_id:""},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"],supervisor_id:"abraham"},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"],supervisor_id:"maya"},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"],supervisor_id:"abraham"},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"],supervisor_id:""}],nn=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],sn=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:_(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:_(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:_(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:_(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:_(5),priority:"medium",urgency:"medium",status:"todo"}],on=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],rn=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",creator_id:"abraham",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",creator_id:"maya",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",creator_id:"noah",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",creator_id:"lumen-ops",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],ln=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],dn=[{id:"vendor-roofing-materials",company_id:"roofing",name:"Valley Roofing Supply",contact_name:"Elena Ortiz",email:"orders@valleyroofingsupply.local",phone:"(480) 555-0190",category:"Materials",status:"Active",notes:"Primary tile, flashing, and underlayment vendor.",created_at:new Date(Date.now()-12096e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"vendor-roofing-dryin",company_id:"roofing",name:"Monsoon Dry-In Crew",contact_name:"R. Alvarez",email:"dispatch@monsoondryin.local",phone:"(602) 555-0144",category:"Subcontractor",status:"Active",notes:"Emergency dry-in support during storm calls.",created_at:new Date(Date.now()-10368e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"vendor-drafting-permits",company_id:"drafting",name:"Permit Runner AZ",contact_name:"Sofia Chen",email:"permits@runneraz.local",phone:"(602) 555-0171",category:"Permit",status:"Active",notes:"Permit filing support for drafting packets.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString()},{id:"vendor-lumen-software",company_id:"lumen",name:"Lumen SaaS Stack",contact_name:"Ops Billing",email:"billing@lumenstack.local",phone:"",category:"Software",status:"Active",notes:"Internal software subscriptions for client onboarding.",created_at:new Date(Date.now()-7776e5).toISOString(),updated_at:new Date(Date.now()-3456e5).toISOString()}],cn=[{id:"invoice-roofing-queen-creek",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",client_name:"Rosales Residence",invoice_number:"QR-1007",status:"Partially paid",issue_date:_(-10),due_date:_(5),subtotal:6800,tax:0,total:6800,notes:"Emergency leak repair billing with deposit received.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"invoice-roofing-mesa-storage",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",client_name:"Mesa Storage Partners",invoice_number:"QR-1008",status:"Sent",issue_date:_(-18),due_date:_(-2),subtotal:18400,tax:0,total:18400,notes:"Estimate packet sent to board for approval.",created_at:new Date(Date.now()-15552e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-drafting-horizon",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",client_name:"Horizon HVAC",invoice_number:"QD-2031",status:"Sent",issue_date:_(-7),due_date:_(14),subtotal:4200,tax:0,total:4200,notes:"Drafting permit package milestone invoice.",created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-lumen-onboarding",company_id:"lumen",job_id:"",client_name:"Lumen Internal Launch",invoice_number:"LM-3004",status:"Draft",issue_date:_(-3),due_date:_(27),subtotal:3200,tax:0,total:3200,notes:"Demo onboarding package used for finance workspace.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()}],pn=[{id:"payment-roofing-queen-creek-deposit",company_id:"roofing",invoice_id:"invoice-roofing-queen-creek",amount:2500,method:"ACH",received_at:_(-4),reference:"ACH-4421",notes:"Deposit received after dry-in visit.",created_at:new Date(Date.now()-3456e5).toISOString()},{id:"payment-drafting-horizon-retainer",company_id:"drafting",invoice_id:"invoice-drafting-horizon",amount:1e3,method:"Check",received_at:_(-1),reference:"CHK-117",notes:"Retainer collected before permit packet completion.",created_at:new Date(Date.now()-864e5).toISOString()}],un=[{id:"expense-roofing-queen-creek-materials",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",vendor_id:"vendor-roofing-materials",category:"Materials",amount:1850,status:"Approved",spent_at:_(-6),notes:"Underlayment, flashing, and tile replacement materials.",created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-roofing-mesa-permit",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",vendor_id:"vendor-roofing-materials",category:"Permit",amount:620,status:"Pending",spent_at:_(-2),notes:"Permit and document prep allowance.",created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString()},{id:"expense-drafting-horizon-runner",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",vendor_id:"vendor-drafting-permits",category:"Permit",amount:480,status:"Approved",spent_at:_(-3),notes:"Permit runner package review.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-lumen-software-stack",company_id:"lumen",job_id:"",vendor_id:"vendor-lumen-software",category:"Software",amount:540,status:"Paid",spent_at:_(-5),notes:"Client onboarding software stack.",created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()}],i={route:null,session:_e(Qe,null),profileDraft:_e(ea,null),jobs:M(ta,tn).map(we),tasks:M(aa,sn).map(Se),files:M(na,on).map(ze),driveFolders:M(ia,[]).map(Pa),forms:M(Fe,rn).map(tt),formResponses:M(mt,ln).map(Na),financeInvoices:M(ra,cn).map(It),financePayments:M(la,pn).map(qt),financeExpenses:M(da,un).map(Tt),financeVendors:M(ca,dn).map(Ot),timeEntries:_e(ft,[]),activeTimer:_e(bt,null),teamMembers:M(sa,an).map(La),memberships:M(oa,nn),companies:pt(be.map($e)),activeCompanyId:localStorage.getItem(Be)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",selectedFinanceInvoiceId:"",selectedFinanceExpenseId:"",selectedFinanceVendorId:"",expandedFormIds:new Set,formStartTemplateId:"",formStartTab:"blank",query:"",fileQuery:"",formQuery:"",crmQuery:"",stageFilter:"all",crmStageFilter:"all",crmOwnerFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(pa)||"table",driveFolder:"home",driveView:localStorage.getItem(ua)||"list",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",modal:""},ha=document.getElementById("app");mn();function mn(){ts(),window.addEventListener("popstate",u),document.addEventListener("click",Ei),document.addEventListener("submit",Ni),document.addEventListener("input",Li),document.addEventListener("change",Ui),u()}function u(){if(i.route=Ke(),fn(i.route)){S("/login?return_url="+encodeURIComponent(ns()),{replace:!0});return}if(i.route.name==="login"){Si();return}bn();const e=as(i.route);if(e){S(e,{replace:!0});return}ls(i.route),ka(i.route),i.route.params.get("account")==="profile"&&(i.modal="profile"),document.title=`${is(i.route)} | ${h(p())} | Quest HQ`,ha.innerHTML=vn(i.route,$a(i.route))}function fn(e){return e.name==="login"?!1:!i.session}function bn(){i.dataLoaded||i.dataLoading||(i.dataLoading=!0,gn().catch(()=>{i.sync={label:"Local fallback",mode:"local"}}).finally(()=>{i.dataLoaded=!0,i.dataLoading=!1,V(),u()}))}async function gn(){const e=te();if(!e){i.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,n,o,r,c]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*")]);let l=0;t.error||(i.companies=t.data?.length?pt(be.concat(t.data).map($e)):pt(be.map($e)),l+=1),a.error||(a.data?.length&&(i.jobs=a.data.map(we)),l+=1),n.error||(n.data?.length&&(i.tasks=n.data.map(Se)),l+=1),o.error||(o.data?.length&&(i.files=o.data.map(ze)),l+=1),r.error||(r.data?.length&&(i.teamMembers=r.data.map(La)),l+=1),c.error||(c.data?.length&&(i.memberships=c.data.map(ys)),l+=1),i.sync=l?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function te(){return!window.supabase||typeof window.supabase.createClient!="function"?null:window.supabase.createClient(re.supabaseUrl,re.supabaseKey)}function vn(e,t){const a=x(),n=p();return`
    <div class="quest-app" data-route="${s(e.name)}">
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${b(d("jobs",{},n))}" data-router aria-label="Quest HQ workspace">
            <i class="ti ti-bolt"></i>
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${s(re.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            <i class="ti ti-building"></i>
            <select data-company-switch aria-label="Active company">
              ${xa().map(o=>`<option value="${s(o.id)}" ${o.id===n?"selected":""}>${s(Xe(o))}</option>`).join("")}
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
              ${it(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${s(a.profile.full_name)}</strong>
              <span>${s(a.profile.role_label)} - ${s(h(n))}</span>
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${_n(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${ji(e,a)}
  `}function _n(e){const t=p();return`
    <div class="company-card">
      <span style="background:${s(ne(t))}"></span>
      <strong>${s(h(t))}</strong>
      <small>${s(Ft(t))} workspace</small>
    </div>
    ${["Workspace","Company","Operations"].map(a=>yn(a,ma.filter(n=>n.group===a&&wn(n,t)).map(n=>n.status==="planned"?$n(n.icon,n.label):hn(e,d(n.id,{},t),n.icon,n.label,Sn(n.id,t))))).join("")}
  `}function yn(e,t){return`
    <section class="side-group">
      <div class="side-label">${s(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function hn(e,t,a,n,o=""){return`
    <a class="side-item ${ss(e,t)?"active":""}" href="${b(t)}" data-router>
      <i class="ti ${s(a)}"></i>
      <span>${s(n)}</span>
      ${o!==""?`<b>${s(String(o))}</b>`:""}
    </a>
  `}function $n(e,t){return`
    <button class="side-item planned" type="button" disabled aria-disabled="true">
      <i class="ti ${s(e)}"></i>
      <span>${s(t)}</span>
      <b>Planned</b>
    </button>
  `}function wn(e,t=p()){return e.status==="planned"||_s(e.permission||`${e.id}.view`,t)}function Sn(e,t=p()){return e==="jobs"?F(t).length:e==="tasks"?z(t).length:e==="files"?de(t).length:e==="forms"?ie(t).length:e==="crm"?Ye(t).length:e==="finance"?ce(t).length:e==="users"?ae(t).length:e==="time"?Da(t).focus.length:e==="approvals"?Fa(t).length:e==="clock"&&Ge(t)?"On":""}function _t(e,t){return`
    <nav class="tabbar compact-tabbar" aria-label="${s(e)}">
      ${t.map(([a,n,o])=>`<a class="${o?"active":""}" href="${b(a)}" data-router>${s(n)}</a>`).join("")}
    </nav>
  `}function $a(e){if(e.name==="command")return kn(p());if(e.name!=="company")return zt(e.name);const t=e.companyId;return e.section==="jobs"?Dn(e,t):e.section==="tasks"?Tn(e,t):e.section==="files"?Pn(e,t):e.section==="users"?Kn(e,t):e.section==="settings"?Gn(e,t):e.section==="forms"?Zn(t):e.section==="analytics"?jn(e,t):e.section==="crm"?ci(e,t):e.section==="finance"?ui(e,t):e.section==="team-chart"?Yn(t):e.section==="time"||e.section==="approvals"||e.section==="clock"?yi(e,t):zt(e.section)}function kn(e){const t=F(e),a=z(e),n=a.filter(r=>["critical","urgent"].includes(r.priority)),o=de(e);return`
    ${J("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${b(d("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${b(d("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    `)}
    ${Cs([["Jobs",t.length],["Open tasks",a.filter(r=>r.status!=="done").length],["Urgent tasks",n.length],["Drive files",o.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${b(d("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(r=>nt(r)).join("")||g("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${L([["Company",h(e)],["Visible users",ae(e).length],["Auth mode","Local basic gate"],["RLS status","Prepared, not enforced"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(r=>Is(r)).join("")||g("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function jn(e,t){const a=e.jobId?$(e.jobId):null,n=a?[a]:F(t),o=z(t).filter(f=>!a||f.project_id===a.id),r=de(t).filter(f=>!a||f.job_id===a.id),c=ie(t).filter(f=>!a||f.linked_job_id===a.id),l=o.filter(f=>f.status!=="done"),m=o.filter(f=>f.status!=="done"&&f.due&&new Date(f.due)<ot()),j=B(n,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${s(a?a.name:h(t))}</span>
        </div>
        <label>
          <span>Job</span>
          <select data-analytics-job-filter>
            <option value="">All jobs</option>
            ${F(t).map(f=>`<option value="${s(f.id)}" ${a?.id===f.id?"selected":""}>${s(f.name)}</option>`).join("")}
          </select>
        </label>
        <a class="btn" href="${b(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      </section>
      <section class="analytics-grid">
        <article class="panel analytics-score">
          <span>Open work</span>
          <strong>${s(l.length)}</strong>
          <small>${s(m.length)} overdue / ${s(o.filter(f=>f.priority==="urgent"||f.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${s(v(j))}</strong>
          <small>${s(n.length)} visible job${n.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${s(r.length+c.length)}</strong>
          <small>${s(r.length)} files / ${s(c.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${s(so(o.filter(f=>f.status==="done").length,o.length))}</strong>
          <small>${s(o.filter(f=>f.status==="done").length)} done of ${s(o.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${n.map(f=>`
              <a class="analytics-row" href="${b(d("analytics",{job_id:f.id},t))}" data-router>
                <span><strong>${s(f.name)}</strong><small>${s(f.client_name||h(t))}</small></span>
                <span>${s(f.stage)}</span>
                <span>${s(et(f.id))}</span>
                <span>${s(Ve(f.id))}</span>
                <span>${s(v(f.estimate_total))}</span>
              </a>
            `).join("")||g("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${Ie.map(f=>{const k=o.filter(R=>R.status===f).length;return`<div><span>${s(se(f))}</span><b><i style="width:${s(Za(k,o.length))}%"></i></b><strong>${s(k)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${o.filter(f=>f.status!=="done").sort((f,k)=>ge(k.priority)-ge(f.priority)).slice(0,8).map(f=>nt(f)).join("")||g("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function Dn(e,t){const a=os(e.params.get("tab")),n=le();return`
    ${J("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${b(d("files",n?{job_id:n.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
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
      ${fa.map(o=>`<a class="${o===a?"active":""}" href="${b(d("jobs",{tab:o,...n?{job_id:n.id}:{}},t))}" data-router>${s(rs(o))}</a>`).join("")}
    </nav>
    ${Fn(a,t,n)}
  `}function Fn(e,t,a){return e==="pipeline"?Rt(t):e==="list"?Cn(t):e==="profile"?In(t,a):Rt(t)}function Rt(e){const t=ja(e);return`
    <section class="job-board">
      ${Ce.map(a=>{const n=t.filter(o=>o.stage===a);return`
          <article class="job-lane">
            <h2><span>${s(a)}</span><b>${n.length}</b></h2>
            ${n.map(o=>qs(o)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function Cn(e){const t=ja(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===i.selectedJobId?"active":""}" type="button" data-select-job="${s(a.id)}">
            <span><strong>${s(a.name)}</strong><small>${s(a.client_name||"No client")} - ${s(a.site_address||"No address")}</small></span>
            <span>${s(a.stage)}</span>
            <span>${At(a.priority)}</span>
            <span>${s(a.owner_name||"Unassigned")}</span>
            <span>${s(et(a.id))}</span>
            <span>${v(a.estimate_total)}</span>
          </button>
        `).join("")||g("No jobs match this view.")}
      </div>
    </section>
  `}function In(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${s(h(e))} - ${s(t.job_type)}</span>
          <h2>${s(t.name)}</h2>
          <p>${s(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${L([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",v(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${b(d("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${s(t.id)}">Edit job</button>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${Pe(d("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${et(t.id)} linked tasks`)}
          ${Pe(d("files",{job_id:t.id},e),"ti-folder","Files",`${Ve(t.id)} files`)}
          ${Pe(d("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${Pe(d("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:g("Create a job to see the profile workspace.")}function qn(e,t){const a=t||hs(e);return`
    <form class="job-editor" data-job-form>
      <input type="hidden" name="id" value="${s(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${w("Workspace name","name",a.name,!0)}
      ${O("Company","company_id",e,xa().map(n=>[n.id,Xe(n)]))}
      ${w("Client","client_name",a.client_name)}
      ${w("Contact","contact_name",a.contact_name)}
      ${w("Account owner","owner_name",a.owner_name)}
      ${w("Job type","job_type",a.job_type||"Roofing")}
      ${O("Business status","stage",a.stage||"Lead",Ce.map(n=>[n,n]))}
      ${O("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(n=>[n,n]))}
      ${w("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${w("Invoice total","invoice_total",a.invoice_total||0,!1,"number")}
      ${w("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${ee("Scope","scope",a.scope,"span-2")}
      ${ee("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${s(t.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function Tn(e,t){const a=e.jobId?$(e.jobId):null,n=vs(t,a?.id);return`
    ${J(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${b(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${b(d("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${On(t,a)}
    <section class="task-layout task-layout-flat">
      <article class="panel task-main">
        ${i.taskView==="board"?En(t,n):An(t,n)}
      </article>
    </section>
  `}function On(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${F(e).map(n=>`<option value="${s(n.id)}" ${t?.id===n.id?"selected":""}>${s(n.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(Ie).map(n=>`<option value="${s(n)}" ${i.taskStatusFilter===n?"selected":""}>${s(n==="all"?"All statuses":se(n))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(Je).map(n=>`<option value="${s(n)}" ${i.taskPriorityFilter===n?"selected":""}>${s(n==="all"?"All priorities":P(n))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${i.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${i.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function An(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===i.selectedTaskId?"active":""}" type="button" data-select-task="${s(a.id)}">
          <span><strong>${s(a.title)}</strong><small>${s(a.description||Ae(a.type))}</small></span>
          <span>${s($(a.project_id)?.name||"Company task")}</span>
          <span>${s(Q(a.assignee_id))}</span>
          <span>${Ua(a.priority)}</span>
          <span>${Ra(a.status)}</span>
          <span>${E(a.due)}</span>
        </button>
      `).join("")||g("No tasks match this workspace view.")}
    </div>
  `}function En(e,t){return`
    <div class="task-board">
      ${Ie.map(a=>{const n=t.filter(o=>o.status===a);return`
          <section class="task-column">
            <h2><span>${s(se(a))}</span><b>${n.length}</b></h2>
            ${n.map(o=>`
              <button class="task-card priority-${s(o.priority)}" type="button" data-select-task="${s(o.id)}">
                <strong>${s(o.title)}</strong>
                <span>${s($(o.project_id)?.name||h(e))}</span>
                <small>${s(Q(o.assignee_id))} - ${E(o.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function xn(e,t){return t?`
    <div class="section-head">
      <div><h2>${s(t.title)}</h2><p>${s($(t.project_id)?.name||h(e))}</p></div>
      <a class="btn" href="${b(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${L([["Status",se(t.status)],["Priority",P(t.priority)],["Type",Ae(t.type)],["Assignee",Q(t.assignee_id)],["Due",E(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${s(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${g("No task selected.")}
    `}function Mt(e,t,a){const n=a||$s(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${s(a?n.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${w("Task title","title",n.title,!0)}
      ${O("Job","project_id",n.project_id||"",[["","Company-level task"]].concat(F(e).map(o=>[o.id,o.name])))}
      ${O("Status","status",n.status,Ie.map(o=>[o,se(o)]))}
      ${O("Priority","priority",n.priority,Je.map(o=>[o,P(o)]))}
      ${O("Type","type",n.type,ba.map(o=>[o,Ae(o)]))}
      ${O("Assignee","assignee_id",n.assignee_id,ae(e).map(o=>[o.id,Q(o.id)]))}
      ${w("Due date","due",n.due||_(1),!0,"date")}
      ${ee("Description","description",n.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${s(a.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function Pn(e,t){const a=e.params.get("folder")||i.driveFolder||"home";i.driveFolder=a;const n=e.jobId?$(e.jobId):null,o=xs(t,a,n?.id||"");return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div class="drive-location">
            <span class="drive-logo"><i class="ti ti-folder"></i></span>
            <div>
              <strong>${s(n?n.name:"Company Drive")}</strong>
              <small>${s(n?`${n.client_name||h(t)} file workspace`:`${h(t)} file manager`)}</small>
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
                <a href="${b(d("files",{},t))}" data-router>${s(h(t))}</a>
                ${a!=="home"?Es(t,a,n):""}
                ${n?`<span>/</span><strong>${s(n.name)}</strong>`:""}
              </nav>
              <div class="drive-compact-controls">
                <div class="segmented" role="group" aria-label="Drive view">
                  <button class="${i.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Icons</button>
                  <button class="${i.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list-details"></i>Details</button>
                </div>
              </div>
            </section>
            ${Nn(t,a,n,o)}
          </div>
        </div>
      </section>
    </section>
  `}function Nn(e,t,a,n){const o=Os(e,t,a),r=o.map(l=>({kind:"folder",...l})).concat(n.map(l=>({kind:"file",file:l}))),c=a?a.name:t==="home"?"This folder":K(t);return`
    <section class="drive-section-title">
      <div><h3>${s(c)}</h3><span>${o.length} folder${o.length===1?"":"s"} / ${n.length} file${n.length===1?"":"s"}</span></div>
    </section>
    ${i.driveView==="list"?Ln(r):Un(r)}
  `}function Ln(e){return`
    <div class="explorer-table" role="table" aria-label="File explorer">
      <div class="explorer-head" role="row">
        <span>Name</span>
        <span>Date modified</span>
        <span>Type</span>
        <span>Size</span>
      </div>
      ${e.map(t=>t.kind==="folder"?Mn(t):Qn(t.file)).join("")||g("This folder is empty.")}
    </div>
  `}function Un(e){return`
    <section class="drive-folder-grid explorer-grid">
      ${e.map(t=>t.kind==="folder"?Rn(t):Vn(t.file)).join("")||g("This folder is empty.")}
    </section>
  `}function Rn(e){return`
    <a class="drive-folder-card explorer-folder" href="${s(e.href)}" data-router>
      <span class="drive-folder-icon"><i class="ti ${s(e.icon||"ti-folder")}"></i></span>
      <strong>${s(e.name)}</strong>
      <em>${s(e.countLabel||"0 items")}</em>
    </a>
  `}function Mn(e){return`
    <a class="explorer-row folder-row-live" href="${s(e.href)}" data-router role="row">
      <span class="explorer-name"><span class="file-type folder"><i class="ti ${s(e.icon||"ti-folder")}"></i></span><strong>${s(e.name)}</strong></span>
      <span>${s(e.updatedLabel||"")}</span>
      <span>Folder</span>
      <span>${s(e.countLabel||"")}</span>
    </a>
  `}function Qn(e){return`
    <button type="button" class="explorer-row ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(e.id)}" role="row">
      <span class="explorer-name">${Jn(e)}<strong>${s(e.file_name)}</strong></span>
      <span>${E(e.updated_at||e.created_at)}</span>
      <span>${s(ue(e))}</span>
      <span>${Pt(e.size_bytes)}</span>
    </button>
  `}function Jn(e){return`
    <span class="file-type ${s(Et(e))}">
      <i class="ti ${s(Ya(e))}"></i>
      <small>${s(Ps(e))}</small>
    </span>
  `}function Vn(e){return`
    <button type="button" class="file-card-live ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(e.id)}">
      <span class="file-thumb">${xt(e)}</span>
      <strong>${s(e.file_name)}</strong>
      <span>${s(ue(e))} / ${Pt(e.size_bytes)}</span>
    </button>
  `}function zn(e,t){return`
    <section class="file-viewer-layout">
      <div class="file-viewer-stage">
        ${Hn(e)}
      </div>
      <aside class="file-viewer-meta">
        <div class="file-open-head">
          ${xt(e)}
          <div>
            <strong>${s(e.file_name)}</strong>
            <span>${s(ue(e))} / ${Pt(e.size_bytes)}</span>
          </div>
        </div>
        <div class="file-detail-list">
          ${oe("Location",K(e.folder))}
          ${oe("Job",$(e.job_id)?.name||"Company shared")}
          ${oe("Uploaded by",e.uploaded_by_label||"Quest HQ")}
          ${oe("Modified",E(e.updated_at||e.created_at))}
          ${oe("Storage",e.object_path||"Metadata only")}
        </div>
        <div class="file-detail-actions">
          <button class="btn" type="button" data-action="download-file" data-file-id="${s(e.id)}"><i class="ti ti-download"></i>Download</button>
          <button class="btn danger" type="button" data-action="delete-file" data-file-id="${s(e.id)}"><i class="ti ti-trash"></i>Delete</button>
        </div>
      </aside>
    </section>
  `}function Hn(e){const t=Et(e);return e.signed_url&&t==="image"?`<img class="file-preview-media" src="${s(e.signed_url)}" alt="" />`:e.signed_url&&t==="pdf"?`<iframe class="file-preview-frame" src="${s(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:e.signed_url&&t==="text"?`<iframe class="file-preview-frame text" src="${s(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:["doc","sheet"].includes(t)&&e.signed_url?`<iframe class="file-preview-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:`
    <div class="file-preview-empty">
      ${xt(e,!0)}
      <strong>${s(ue(e))} preview</strong>
      <p>${s(e.object_path?"Preview will load when a signed file URL is available.":"This is a metadata-only file record. Upload the actual file object to preview it here.")}</p>
      ${e.notes?`<pre>${s(e.notes)}</pre>`:""}
    </div>
  `}function Bn(){const e=p(),t=i.route||Ke(),a=t.params.get("folder")||i.driveFolder||"home",n=t.jobId?$(t.jobId):null;return C("Drive","New folder",`
    <form class="compact-tool-form" data-folder-form>
      <label><span>Folder name</span><input name="name" placeholder="Folder name" required autofocus /></label>
      <input type="hidden" name="company_id" value="${s(e)}" />
      <input type="hidden" name="parent_key" value="${s(Qa(a,n))}" />
      <div class="file-upload-log">
        <strong>Location</strong>
        <span>${s(a==="home"?h(e):n?.name||K(a))}</span>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create folder</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"task-modal")}function Wn(){const e=p(),t=i.route?.params?.get("folder")||(i.driveFolder==="home"?"shared":i.driveFolder),a=i.route?.jobId||"";return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">${s(h(e))} Drive</div><h2 id="upload-title">Upload files</h2></div>
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
          ${w("Metadata-only file name","file_name","")}
          ${O("Folder","folder",t,ao(e))}
          ${O("Job","job_id",a,[["","Company shared file"]].concat(F(e).map(n=>[n.id,n.name])))}
          ${O("Category","category",K(t),en.filter(n=>n!=="All categories").map(n=>[n,n]))}
          ${w("Uploaded by","uploaded_by_label",x().profile.full_name||"Quest HQ")}
          ${ee("Notes","notes","","span-2")}
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
  `}function Kn(e,t){const a=ae(t),n=["members","access"].includes(e.params.get("tab"))?e.params.get("tab"):"members";return`
    ${J("Users","Company members, roles, workers, and access context.",`
      <a class="btn btn-primary" href="${b(d("settings",{},t))}" data-router><i class="ti ti-settings"></i>Settings</a>
    `)}
    ${_t("Users sections",[[d("users",{tab:"members"},t),"Members",n==="members"],[d("users",{tab:"access"},t),"Access model",n==="access"]])}
    ${n==="members"?`
      <section class="users-grid">
        ${a.map(o=>`
          <article class="user-card">
            ${it({full_name:o.full_name,avatar_url:o.avatar_url},"avatar")}
            <div>
              <strong>${s(o.full_name)}</strong>
              <span>${s(o.email)}</span>
              <small>${s(Ct(t,o.id))}</small>
            </div>
          </article>
        `).join("")||g("No users assigned to this company yet.")}
      </section>
    `:`
    <section class="panel">
      <div class="section-head"><div><h2>Membership model</h2><p>company_memberships is the canonical table; legacy company_ids remain as backfill fields.</p></div></div>
      ${L([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Client-filtered only while auth is disabled"],["Active role",Ft(t)]])}
    </section>
    `}
  `}function Yn(e){const t=ae(e),a=t.filter(n=>!n.supervisor_id||!t.some(o=>o.id===n.supervisor_id));return`
    <section class="tool-page team-chart-page">
      ${J("Team chart","Reporting lines, roles, and company coverage for this workspace.",`
        <a class="btn" href="${b(d("users",{},e))}" data-router><i class="ti ti-users"></i>Users</a>
        <a class="btn btn-primary" href="${b(d("settings",{tab:"team"},e))}" data-router><i class="ti ti-settings"></i>Worker settings</a>
      `)}
      <section class="metric-grid operations-metrics">
        ${y("Members",t.length)}
        ${y("Leads",a.length)}
        ${y("Open tasks",z(e).filter(wt).length)}
        ${y("Active timer",Ge(e)?"Yes":"No")}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Reporting chart</h2><p>Supervisor links are local/basic until Auth and RLS are restored.</p></div></div>
        <div class="team-tree">
          ${a.map(n=>wa(e,n,t)).join("")||g("No workers assigned.")}
        </div>
      </section>
    </section>
  `}function wa(e,t,a,n=0){const o=a.filter(r=>r.supervisor_id===t.id);return`
    <article class="team-node" style="--depth:${n}">
      <div class="team-node-card">
        ${it({full_name:t.full_name,avatar_url:t.avatar_url},"avatar")}
        <span><strong>${s(t.full_name)}</strong><small>${s(Ct(e,t.id))}</small></span>
        <b>${z(e).filter(r=>r.assignee_id===t.id&&wt(r)).length} open</b>
      </div>
      ${o.length?`<div class="team-node-children">${o.map(r=>wa(e,r,a,n+1)).join("")}</div>`:""}
    </article>
  `}function Gn(e,t){const a=Ze(t),n=["company","access","team"].includes(e.params.get("tab"))?e.params.get("tab"):"company";return`
    ${J("Settings","Company settings, roles, approvals, and admin controls.","")}
    ${_t("Settings sections",[[d("settings",{tab:"company"},t),"Company",n==="company"],[d("settings",{tab:"access"},t),"Access",n==="access"],[d("settings",{tab:"team"},t),"Workers",n==="team"]])}
    <section class="dashboard-grid compact-settings-grid">
      ${n==="company"?`
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${L([["Name",h(t)],["Company ID",t],["Color",a?.color||ne(t)],["Visible jobs",F(t).length]])}
      </article>
      `:""}
      ${n==="access"?`
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Prepared for Supabase Auth and RLS.</p></div></div>
        ${L([["Auth switch","Disabled"],["Local login","Enabled"],["Isolation","Client-filtered only"],["Memberships",String(i.memberships.filter(o=>o.company_id===t).length)]])}
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
          ${ae(t).map(o=>`<div><strong>${s(o.full_name)}</strong><span>${s(Ct(t,o.id))}</span></div>`).join("")||g("No workers assigned.")}
        </div>
      </article>
      `:""}
    </section>
  `}function Zn(e){const t=Ns(e),a=ke(e),n=i.formsTab==="builder"&&a?"builder":i.formsTab==="responses"?"responses":"library";return`
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
            <button class="${n===o?"active":""}" type="button" data-action="set-forms-tab" data-tab="${s(o)}">${s(P(o))}</button>
          `).join("")}
        </nav>
      `}
      ${n==="library"?Xn(e,t,a):""}
      ${n==="builder"?ei(e,a):""}
      ${n==="responses"?di(e,a):""}
    </section>
  `}function Xn(e,t,a){return`
    <section class="forms-home">
      <article class="forms-recent-panel panel">
        <div class="forms-panel-head">
          <div>
            <strong>Recent forms</strong>
            <span>${t.length} visible form${t.length===1?"":"s"} in ${s(h(e))}</span>
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
                <span>Created by ${s(Ls(n))}</span>
              </span>
              <button class="form-card-toggle" type="button" data-action="toggle-form-card" data-form-id="${s(n.id)}" aria-expanded="${i.expandedFormIds.has(n.id)?"true":"false"}">
                <i class="ti ${i.expandedFormIds.has(n.id)?"ti-chevron-up":"ti-chevron-down"}"></i>
                ${i.expandedFormIds.has(n.id)?"Less":"Details"}
              </button>
              <span class="form-card-meta">
                <small>${s(n.type)} / ${s(n.audience||"Internal")}</small>
                <small>${za(n)} questions</small>
                <em>${st(n.id).length} responses</em>
                <em>Updated ${E(n.updated_at)}</em>
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
  `}function ei(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${g("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(i.formEditorTab)?i.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${s(a)}">
      ${ti(t,a)}
      ${a==="questions"?`
        ${ai(e,t)}
        ${ni(t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${ii(e,t)}
        </article>
      `:""}
      ${a==="responses"?si(e,t):""}
    </section>
  `}function ti(e,t){const a=st(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${s(e.title)}</strong>
        <span>${s(e.status)} / ${za(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(n=>`
        <button class="${t===n?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${s(n)}">
          ${n==="questions"?'<i class="ti ti-list-details"></i>':n==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${s(P(n))}
        </button>
      `).join("")}
      <button class="btn" type="button" data-action="open-form-preview" data-form-id="${s(e.id)}"><i class="ti ti-eye"></i>Preview</button>
      <button class="btn" type="button" data-action="open-form-actions" data-form-id="${s(e.id)}"><i class="ti ti-share"></i>Share</button>
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(e.id)}">Save</button>
    </div>
  `}function ai(e,t){return`
    <article class="panel form-identity-panel gform-title-card">
      <div class="gform-accent-strip" style="--form-accent:${s(t.theme_color||ne(e))}"></div>
      ${ve("Form title","title",t.title,!0)}
      ${Ha("Form description","description",t.description)}
      <div class="forms-simple-meta">
        <span>${s(t.status)}</span>
        <span>${s(t.type)}</span>
        <span>${s(t.audience||"Internal")}</span>
        <span>${s($(t.linked_job_id)?.name||"Company level")}</span>
        <span>${s(h(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">Settings</button>
        <button class="btn" type="button" data-action="open-form-preview" data-form-id="${s(t.id)}">Preview</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      </div>
    </article>
  `}function ni(e){return`
    <article class="question-workbench">
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${Te.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${s(t)}" title="${s(a)}" aria-label="Add ${s(a)} question"><i class="ti ${s(Us(t))}"></i></button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>oi(t,a)).join("")||g("Add the first question.")}
        </div>
      </div>
    </article>
  `}function ii(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${ve("Title","title",t.title,!0)}
      ${Ne("Status","status",t.status,vt.map(a=>[a,a]))}
      ${Ha("Description","description",t.description)}
      ${Ne("Type","type",t.type,qe.map(a=>[a,a]))}
      ${ve("Audience","audience",t.audience)}
      ${Ne("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(F(e).map(a=>[a.id,a.name])))}
      ${ve("Theme color","theme_color",t.theme_color||ne(e),!1,"color")}
      ${Ne("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${ve("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${s(t.id)}">Delete</button>
    </div>
  `}function si(e,t){const a=st(t.id),n=a[0]||null;return`
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
            <small>${E(o.created_at)}</small>
          </button>
        `).join("")||g("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${n?Ba(n):g("No response selected.")}
    </aside>
  `}function oi(e,t){const a=Te.map(([n,o])=>`<option value="${s(n)}" ${e.type===n?"selected":""}>${s(o)}</option>`).join("");return`
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
      ${je(e)?`
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
  `}function ri(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${s(t.id)}" style="--form-accent:${s(t.theme_color||ne(e))}">
      <div class="designed-form-header">
        <span>${s(h(e))}</span>
        <h2>${s(t.title)}</h2>
        <p>${s(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>li(a)).join("")||g("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${s(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function li(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?W(e,`<textarea name="${s(t)}" rows="3" ${a}></textarea>`):e.type==="date"?W(e,`<input name="${s(t)}" type="date" ${a} />`):e.type==="file"?W(e,`<input name="${s(t)}" type="file" ${a} />`):e.type==="yesno"?W(e,`<select name="${s(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?W(e,`<input name="${s(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?W(e,`<select name="${s(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(n=>`<option>${s(n)}</option>`).join("")}</select>`):e.type==="checkbox"?W(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${s(t)}" type="checkbox" value="${s(n)}" /> ${s(n)}</label>`).join("")}</div>`):e.type==="multiple"?W(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${s(t)}" type="radio" value="${s(n)}" ${a} /> ${s(n)}</label>`).join("")}</div>`):W(e,`<input name="${s(t)}" ${a} />`)}function di(e,t){const a=t?st(t.id):Va(e),n=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(o=>`
            <button type="button" class="response-card">
              <strong>${s(me(o.form_id)?.title||"Unknown form")}</strong>
              <span>${s(o.submitted_by||o.submitter_email||"Anonymous")}</span>
              <small>${E(o.created_at)}</small>
            </button>
          `).join("")||g("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${n?Ba(n):g("No response selected.")}
      </aside>
    </section>
  `}function ci(e,t){const a=ms(t),n=Ye(t),o=z(t).filter(l=>l.status!=="done").length,r=B(F(t),"estimate_total"),c=bs(t);return`
    <section class="tool-page crm-page">
      ${J("CRM","Customers, contacts, and follow-ups built from company jobs.",`
        <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add customer job</button>
      `)}
      <section class="metric-grid crm-metrics">
        ${y("Accounts",n.length)}
        ${y("Open jobs",F(t).filter(l=>l.stage!=="Closed").length)}
        ${y("Open tasks",o)}
        ${y("Pipeline value",v(r))}
      </section>
      <section class="crm-toolbar panel">
        <label>
          <span>Search</span>
          <input data-crm-search value="${s(i.crmQuery)}" placeholder="Find customer, contact, job, or address" />
        </label>
        <label>
          <span>Stage</span>
          <select data-crm-stage-filter>
            ${["all"].concat(Ce).map(l=>`<option value="${s(l)}" ${i.crmStageFilter===l?"selected":""}>${s(l==="all"?"All stages":l)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>Owner</span>
          <select data-crm-owner-filter>
            <option value="all" ${i.crmOwnerFilter==="all"?"selected":""}>All owners</option>
            ${c.map(l=>`<option value="${s(l)}" ${i.crmOwnerFilter===l?"selected":""}>${s(l)}</option>`).join("")}
          </select>
        </label>
      </section>
      <section class="panel crm-list-panel">
        <div class="section-head">
          <div><h2>Customers</h2><p>${a.length} visible account${a.length===1?"":"s"} in ${s(h(t))}</p></div>
        </div>
        <div class="data-table crm-table">
          <div class="table-head"><span>Account</span><span>Contact</span><span>Stage</span><span>Owner</span><span>Jobs</span><span>Value</span><span>Updated</span></div>
          ${a.map(l=>`
            <a class="table-row crm-account-row" href="${b(d("crm",{account:l.key},t))}" data-router>
              <span><strong>${s(l.name)}</strong><small>${s(l.subtitle)}</small></span>
              <span>${s(l.primaryContact)}</span>
              <span>${s(l.stage)}</span>
              <span>${s(l.owner)}</span>
              <span>${s(l.jobs.length)}</span>
              <span>${v(l.estimateTotal)}</span>
              <span>${E(l.updatedAt)}</span>
            </a>
          `).join("")||g("No CRM accounts match this view. Add a customer job to start the list.")}
        </div>
      </section>
    </section>
  `}function pi(e,t){const a=fs(e,t);if(!a)return C("CRM","Customer account",g("This customer is not visible in the current company view."));const n=a.latestJob,o=a.tasks.filter(r=>r.status!=="done");return C("CRM",a.name,`
    <div class="crm-account-modal">
      <section class="crm-modal-summary">
        <div class="section-head">
          <div>
            <h2>${s(a.name)}</h2>
            <p>${s(a.subtitle)}</p>
          </div>
          ${At(a.priority)}
        </div>
        ${L([["Primary contact",a.primaryContact],["Owner",a.owner],["Current stage",a.stage],["Pipeline value",v(a.estimateTotal)],["Open tasks",String(o.length)],["Last updated",E(a.updatedAt)]])}
      </section>
      <section class="crm-rollup-grid">
        ${y("Jobs",a.jobs.length)}
        ${y("Files",a.fileCount)}
        ${y("Forms",a.formCount)}
        ${y("Tasks",a.tasks.length)}
      </section>
      <section class="crm-modal-actions">
        ${n?`<a class="btn btn-primary" href="${b(d("jobs",{tab:"profile",job_id:n.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
        ${n?`<a class="btn" href="${b(d("tasks",{job_id:n.id},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>`:""}
        ${n?`<a class="btn" href="${b(d("files",{job_id:n.id},e))}" data-router><i class="ti ti-folder"></i>Files</a>`:""}
        ${n?`<button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${s(n.id)}"><i class="ti ti-pencil"></i>Edit latest job</button>`:""}
        <button class="btn" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Linked jobs</h2><p>Customer workspaces connected to this account.</p></div></div>
        <div class="data-table crm-linked-jobs">
          <div class="table-head"><span>Job</span><span>Stage</span><span>Owner</span><span>Value</span></div>
          ${a.jobs.map(r=>`
            <a class="table-row" href="${b(d("jobs",{tab:"profile",job_id:r.id},e))}" data-router>
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
          ${o.slice(0,6).map(r=>nt(r)).join("")||g("No open follow-ups for this customer.")}
        </div>
      </section>
    </div>
  `,"crm-modal")}function ui(e,t){const a=Ea(t),n=ce(t),o=qa(t).slice().sort(De("received_at")).slice(0,5),r=St(t).slice().sort(De("spent_at")).slice(0,5),c=kt(t).slice().sort((l,m)=>l.name.localeCompare(m.name)).slice(0,5);return`
    <section class="tool-page finance-page">
      ${J("Finance","Invoices, payments, expenses, vendors, and job-linked money in one company view.",`
        <button class="btn btn-primary" type="button" data-action="new-finance-invoice"><i class="ti ti-file-dollar"></i>New invoice</button>
        <button class="btn" type="button" data-action="new-finance-payment"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="new-finance-expense"><i class="ti ti-receipt"></i>Add expense</button>
        <button class="btn" type="button" data-action="new-finance-vendor"><i class="ti ti-building-store"></i>Add vendor</button>
        <a class="btn" href="${b(d("finance",{report:"summary"},t))}" data-router><i class="ti ti-report-analytics"></i>Reports</a>
      `)}
      <section class="metric-grid finance-metrics">
        ${y("Estimated pipeline",v(a.pipeline))}
        ${y("Invoiced",v(a.invoiced))}
        ${y("Collected",v(a.collected))}
        ${y("Outstanding",v(a.outstanding))}
        ${y("Expenses",v(a.expenses))}
        ${y("Net position",v(a.net))}
      </section>
      <section class="panel finance-aging">
        <div class="section-head"><div><h2>AR aging</h2><p>Outstanding invoice balance by due date.</p></div></div>
        <div class="finance-aging-grid">
          ${[["Current",a.aging.current],["1-30",a.aging.thirty],["31-60",a.aging.sixty],["61+",a.aging.overSixty]].map(([l,m])=>`<div><span>${s(l)}</span><strong>${v(m)}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel finance-invoice-panel">
        <div class="section-head"><div><h2>Invoices</h2><p>${n.length} billing record${n.length===1?"":"s"} for ${s(h(t))}</p></div></div>
        <div class="data-table finance-invoice-table">
          <div class="table-head"><span>Invoice</span><span>Status</span><span>Job</span><span>Due</span><span>Total</span><span>Paid</span><span>Balance</span></div>
          ${n.map(l=>`
            <a class="table-row" href="${b(d("finance",{invoice:l.id},t))}" data-router>
              <span><strong>${s(l.invoice_number)}</strong><small>${s(l.client_name||$(l.job_id)?.client_name||"No client")}</small></span>
              <span>${Ts(Aa(l))}</span>
              <span>${s($(l.job_id)?.name||"Company level")}</span>
              <span>${E(l.due_date)}</span>
              <span>${v(l.total)}</span>
              <span>${v(Dt(l.id))}</span>
              <span>${v(X(l.id))}</span>
            </a>
          `).join("")||g("No invoices yet. Create one from a job or customer record.")}
        </div>
      </section>
      <section class="finance-secondary-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Recent payments</h2><p>Money received.</p></div></div>
          <div class="finance-compact-list">
            ${o.map(l=>Me(pe(l.invoice_id)?.invoice_number||"Payment",l.method,v(l.amount),l.received_at)).join("")||g("No payments recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Expenses</h2><p>Job and company costs.</p></div></div>
          <div class="finance-compact-list">
            ${r.map(l=>Me(ct(l.vendor_id),l.category,v(l.amount),l.spent_at,d("finance",{expense:l.id},t))).join("")||g("No expenses recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Vendors</h2><p>Suppliers and subcontractors.</p></div></div>
          <div class="finance-compact-list">
            ${c.map(l=>Me(l.name,l.category,l.status,l.updated_at,d("finance",{vendor:l.id},t))).join("")||g("No vendors recorded.")}
          </div>
        </article>
      </section>
    </section>
  `}function mi(e,t){return e.params.get("invoice")?fi(t,e.params.get("invoice")):e.params.get("expense")?bi(t,e.params.get("expense")):e.params.get("vendor")?gi(t,e.params.get("vendor")):e.params.get("report")==="summary"?vi(t):""}function fi(e,t){const a=pe(t);if(!a||a.company_id!==e)return C("Finance","Invoice",g("Invoice not found."));const n=Oa(a.id),o=$(a.job_id);return C("Finance",a.invoice_number,`
    <div class="finance-detail-modal">
      ${L([["Client",a.client_name||o?.client_name||"No client"],["Status",Aa(a)],["Job",o?.name||"Company level"],["Issued",E(a.issue_date)],["Due",E(a.due_date)],["Total",v(a.total)],["Collected",v(Dt(a.id))],["Balance",v(X(a.id))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="new-finance-payment" data-invoice-id="${s(a.id)}"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="edit-finance-invoice" data-invoice-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit invoice</button>
        ${o?`<a class="btn" href="${b(d("jobs",{tab:"profile",job_id:o.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
      </div>
      <section class="finance-modal-section">
        <div class="section-head"><div><h2>Payments</h2><p>${n.length} payment${n.length===1?"":"s"} applied.</p></div></div>
        <div class="finance-compact-list">
          ${n.map(r=>Me(r.reference||r.method,r.method,v(r.amount),r.received_at)).join("")||g("No payments yet.")}
        </div>
      </section>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function bi(e,t){const a=Ta(t);if(!a||a.company_id!==e)return C("Finance","Expense",g("Expense not found."));const n=$(a.job_id);return C("Finance",`${ct(a.vendor_id)} expense`,`
    <div class="finance-detail-modal">
      ${L([["Vendor",ct(a.vendor_id)],["Category",a.category],["Status",a.status],["Job",n?.name||"Company level"],["Spent",E(a.spent_at)],["Amount",v(a.amount)]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-expense" data-expense-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit expense</button>
        ${n?`<a class="btn" href="${b(d("files",{job_id:n.id},e))}" data-router><i class="ti ti-folder"></i>Job files</a>`:""}
      </div>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function gi(e,t){const a=jt(t);if(!a||a.company_id!==e)return C("Finance","Vendor",g("Vendor not found."));const n=St(e).filter(o=>o.vendor_id===a.id);return C("Finance",a.name,`
    <div class="finance-detail-modal">
      ${L([["Contact",a.contact_name||"No contact"],["Email",a.email||"No email"],["Phone",a.phone||"No phone"],["Category",a.category],["Status",a.status],["Spend",v(B(n,"amount"))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-vendor" data-vendor-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit vendor</button>
        <button class="btn" type="button" data-action="new-finance-expense" data-vendor-id="${s(a.id)}"><i class="ti ti-receipt"></i>Add expense</button>
      </div>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function vi(e){const t=Ea(e);return C("Finance","Summary report",`
    <div class="finance-report-modal">
      ${L([["Company",h(e)],["Estimated pipeline",v(t.pipeline)],["Invoiced",v(t.invoiced)],["Collected",v(t.collected)],["Outstanding",v(t.outstanding)],["Expenses",v(t.expenses)],["Net position",v(t.net)]])}
      <div class="finance-aging-grid">
        <div><span>Current</span><strong>${v(t.aging.current)}</strong></div>
        <div><span>1-30</span><strong>${v(t.aging.thirty)}</strong></div>
        <div><span>31-60</span><strong>${v(t.aging.sixty)}</strong></div>
        <div><span>61+</span><strong>${v(t.aging.overSixty)}</strong></div>
      </div>
    </div>
  `,"finance-modal")}function Qt(e,t=null){const a=t||ws(e);return C("Finance",t?"Edit invoice":"New invoice",`
    <form class="finance-form" data-finance-invoice-form>
      <input type="hidden" name="id" value="${s(a.id)}" />
      ${w("Invoice number","invoice_number",a.invoice_number,!0)}
      ${O("Linked job","job_id",a.job_id||"",[["","Company level"]].concat(F(e).map(n=>[n.id,n.name])))}
      ${w("Client","client_name",a.client_name,!0)}
      ${O("Status","status",a.status,ga.map(n=>[n,n]))}
      ${w("Issue date","issue_date",a.issue_date,!1,"date")}
      ${w("Due date","due_date",a.due_date,!1,"date")}
      ${w("Subtotal","subtotal",a.subtotal,!1,"number")}
      ${w("Tax","tax",a.tax,!1,"number")}
      ${ee("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save invoice</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function _i(e,t=""){const a=Ss(e,t),n=ce(e).map(o=>[o.id,`${o.invoice_number} - ${o.client_name||$(o.job_id)?.client_name||"No client"}`]);return C("Finance","Record payment",`
    <form class="finance-form" data-finance-payment-form>
      ${O("Invoice","invoice_id",a.invoice_id,n.length?n:[["","Create an invoice first"]])}
      ${w("Amount","amount",a.amount,!0,"number")}
      ${O("Method","method",a.method,ya.map(o=>[o,o]))}
      ${w("Received","received_at",a.received_at,!1,"date")}
      ${w("Reference","reference",a.reference)}
      ${ee("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save payment</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Jt(e,t=null,a=""){const n=t||ks(e,a),o=kt(e).map(r=>[r.id,r.name]);return C("Finance",t?"Edit expense":"Add expense",`
    <form class="finance-form" data-finance-expense-form>
      <input type="hidden" name="id" value="${s(n.id)}" />
      ${O("Vendor","vendor_id",n.vendor_id,o.length?o:[["","No vendor yet"]])}
      ${O("Linked job","job_id",n.job_id||"",[["","Company level"]].concat(F(e).map(r=>[r.id,r.name])))}
      ${O("Category","category",n.category,We.map(r=>[r,r]))}
      ${O("Status","status",n.status,va.map(r=>[r,r]))}
      ${w("Amount","amount",n.amount,!0,"number")}
      ${w("Spent date","spent_at",n.spent_at,!1,"date")}
      ${ee("Notes","notes",n.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save expense</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Vt(e,t=null){const a=t||js(e);return C("Finance",t?"Edit vendor":"Add vendor",`
    <form class="finance-form" data-finance-vendor-form>
      <input type="hidden" name="id" value="${s(a.id)}" />
      ${w("Vendor name","name",a.name,!0)}
      ${w("Contact","contact_name",a.contact_name)}
      ${w("Email","email",a.email,!1,"email")}
      ${w("Phone","phone",a.phone)}
      ${O("Category","category",a.category,We.map(n=>[n,n]))}
      ${O("Status","status",a.status,_a.map(n=>[n,n]))}
      ${ee("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save vendor</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function yi(e,t){return e.section==="clock"?$i(t):e.section==="approvals"?wi(t):hi(t)}function yt(e,t){return`
    ${_t("Operations sections",[[d("time",{},e),"My time",t==="time"],[d("approvals",{},e),"Approvals",t==="approvals"],[d("clock",{},e),"Clock dashboard",t==="clock"]])}
  `}function hi(e){const t=Da(e),a=Ge(e);return`
    <section class="tool-page operations-page">
      ${J("My time","A compact personal work queue built from this company's tasks.",`
        <a class="btn" href="${b(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Open tasks</a>
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${yt(e,"time")}
      <section class="metric-grid operations-metrics">
        ${y("Due today",t.dueToday.length)}
        ${y("Overdue",t.overdue.length)}
        ${y("Open work",t.open.length)}
        ${y("In review",t.review.length)}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel span-2">
          <div class="section-head"><div><h2>Today</h2><p>Due now, overdue, and highest priority work.</p></div></div>
          <div class="queue-list">
            ${t.focus.slice(0,8).map(n=>nt(n)).join("")||g("No time-sensitive tasks for this company.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Workload</h2><p>Simple task-based time view.</p></div></div>
          ${L([["Company",h(e)],["Assigned to you",String(t.assignedToMe.length)],["Due this week",String(t.thisWeek.length)],["Completed",String(t.done.length)]])}
        </article>
      <article class="panel span-2">
          <div class="section-head"><div><h2>This week</h2><p>Upcoming task commitments.</p></div></div>
          <div class="data-table operations-table">
            <div class="table-head"><span>Task</span><span>Job</span><span>Owner</span><span>Due</span><span>Status</span></div>
            ${t.thisWeek.slice(0,8).map(n=>`
              <a class="table-row" href="${b(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},e))}" data-router>
                <span><strong>${s(n.title)}</strong><small>${s(n.description||Ae(n.type))}</small></span>
                <span>${s($(n.project_id)?.name||"Company task")}</span>
                <span>${s(Q(n.assignee_id))}</span>
                <span>${E(n.due)}</span>
                <span>${Ra(n.status)}</span>
              </a>
            `).join("")||g("No upcoming tasks this week.")}
          </div>
        </article>
      </section>
    </section>
  `}function $i(e){const t=Ca(e),a=Ge(e),n=ot().getTime(),o=n-6*864e5,r=Wt(e,n)+(a?Date.now()-Date.parse(a.started_at):0),c=Wt(e,o)+(a?Date.now()-Date.parse(a.started_at):0);return`
    <section class="tool-page operations-page clock-page">
      ${J("Clock dashboard","Local basic-mode clock tracking for the active company.",`
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${yt(e,"clock")}
      <section class="metric-grid operations-metrics">
        ${y("Today",Ue(r))}
        ${y("Last 7 days",Ue(c))}
        ${y("Entries",t.length)}
        ${y("Status",a?"Clocked in":"Off clock")}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Active now</h2><p>Current local clock session.</p></div></div>
          ${a?L([["User",Q(a.user_id)],["Started",Zt(a.started_at)],["Task",a.task_title||"General shift"],["Elapsed",Ue(Date.now()-Date.parse(a.started_at))]]):g("Nobody is clocked in on this device.")}
        </article>
        <article class="panel span-2">
          <div class="section-head"><div><h2>Recent entries</h2><p>Local time records for this company.</p></div></div>
          <div class="data-table clock-table">
            <div class="table-head"><span>Entry</span><span>User</span><span>Start</span><span>Duration</span></div>
            ${t.slice(0,10).map(l=>`
              <div class="table-row">
                <span><strong>${s(l.task_title||"General shift")}</strong><small>${s(l.notes||"Clock entry")}</small></span>
                <span>${s(Q(l.user_id))}</span>
                <span>${Zt(l.started_at)}</span>
                <span>${Ue(l.duration_ms)}</span>
              </div>
            `).join("")||g("No clock entries yet.")}
          </div>
        </article>
      </section>
    </section>
  `}function wi(e){const t=Fa(e),a=t.filter(r=>r.type==="Form approval"),n=t.filter(r=>r.type==="Task review"),o=t.filter(r=>r.type==="Access request");return`
    <section class="tool-page operations-page">
      ${J("Approvals","Company review queue for forms, task handoffs, and access requests.",`
        <a class="btn" href="${b(d("forms",{},e))}" data-router><i class="ti ti-clipboard-list"></i>Forms</a>
        <a class="btn btn-primary" href="${b(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>
      `)}
      ${yt(e,"approvals")}
      <section class="metric-grid operations-metrics">
        ${y("Open approvals",t.length)}
        ${y("Forms",a.length)}
        ${y("Task reviews",n.length)}
        ${y("Access",o.length)}
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
              <span>${E(r.updatedAt)}</span>
            </a>
          `).join("")||g("No approvals need attention right now.")}
        </div>
      </section>
    </section>
  `}function zt(e){return`
    ${J(P(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${g("Module data model pending.")}
    </section>
  `}function Si(){document.title="Sign in | Quest HQ";const e=Sa(i.route.params.get("return_url")||b(d("jobs",{},T())));ha.innerHTML=`
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
          <label>Username<input name="username" value="${s(re.localUsername)}" autocomplete="username" /></label>
          <label>Password<input name="password" type="password" autocomplete="current-password" /></label>
          <input type="hidden" name="return_url" value="${s(e)}" />
          <button class="btn btn-primary full" type="submit">Sign in</button>
          ${i.loginError?`<div class="form-message error">${s(i.loginError)}</div>`:'<div class="form-message">Temporary credentials: lumen123 / lumen123</div>'}
        </form>
      </section>
    </main>
  `}function ki(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${it(e,"avatar large")}
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
  `}function ji(e,t){if(i.modal==="profile")return ki(t.profile);if(i.modal==="file-upload")return Wn();if(i.modal==="folder-new")return Bn();if(i.modal==="file-detail")return Ci(p());if(i.modal==="forms-tools")return Ii(p());if(i.modal==="form-actions")return Ai(p(),ke(p()));if(i.modal==="form-new")return qi(p());if(i.modal==="form-preview")return Oi(p(),ke(p()));if(i.modal==="job-new")return rt(p(),null);if(i.modal==="job-edit")return rt(p(),le());if(i.modal==="finance-invoice-new")return Qt(p(),null);if(i.modal==="finance-invoice-edit")return Qt(p(),pe(i.selectedFinanceInvoiceId));if(i.modal==="finance-payment-new")return _i(p(),i.selectedFinanceInvoiceId);if(i.modal==="finance-expense-new")return Jt(p(),null,i.selectedFinanceVendorId);if(i.modal==="finance-expense-edit")return Jt(p(),Ta(i.selectedFinanceExpenseId));if(i.modal==="finance-vendor-new")return Vt(p(),null);if(i.modal==="finance-vendor-edit")return Vt(p(),jt(i.selectedFinanceVendorId));if(e.name==="company"&&e.section==="crm"&&e.params.get("account"))return pi(e.companyId,e.params.get("account"));if(e.name==="company"&&e.section==="finance"){const a=mi(e,e.companyId);if(a)return a}return e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"?rt(e.companyId,e.jobId?$(e.jobId):le()):e.name==="company"&&e.section==="tasks"?Fi(e,e.companyId):""}function C(e,t,a,n=""){return`
    <div class="modal-overlay">
      <div class="modal-panel ${s(n)}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${s(e)}</div><h2>${s(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function Di(e,t,a){return`
    <div class="modal-overlay drawer-overlay">
      <aside class="modal-panel drawer-panel" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${s(e)}</div><h2>${s(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </aside>
    </div>
  `}function rt(e,t){return C("Jobs",t?"Edit job":"Create job",qn(e,t),"wide-modal")}function Fi(e,t){const a=e.jobId?$(e.jobId):null,n=e.params.get("task_id")||"",o=n?$t(n):null;return e.params.get("new")==="1"?C("Tasks","New task",Mt(t,a,null),"task-modal"):e.params.get("edit")==="1"&&o?C("Tasks","Edit task",Mt(t,a,o),"task-modal"):o?Di("Task detail",o.title,xn(t,o)):""}function Ci(e){const t=i.selectedFileId?i.files.find(a=>a.id===i.selectedFileId):null;return t?C("Open file",t.file_name,zn(t),"file-viewer-modal"):""}function Ii(e){return C("Forms","Tools",`
    <div class="compact-tool-form">
      <label>
        <span>Type filter</span>
        <select data-form-type-filter>
          <option value="all" ${i.formTypeFilter==="all"?"selected":""}>All types</option>
          ${qe.map(t=>`<option value="${s(t)}" ${i.formTypeFilter===t?"selected":""}>${s(t)}</option>`).join("")}
        </select>
      </label>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
      <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
    </div>
  `)}function qi(e){const t=i.formStartTab==="templates"?"templates":"blank",a=ye(),n=t==="templates"&&(a.find(m=>m.id===i.formStartTemplateId)||a[0])||null,o=n?.title||"",r=n?.description||"",c=n?.type||"Internal",l=n?.questions||[{type:"short",label:"First question",required:!1,options:[]}];return C("Forms","New form builder",`
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
            ${l.map((m,j)=>Ti(m,j)).join("")}
          </div>
        </section>
        <aside class="panel new-form-settings-card">
          <div class="section-head"><div><h2>Setup</h2><p>${n?s(n.title):"Blank starter"}</p></div></div>
          <div class="new-form-grid">
            <label><span>Type</span><select name="type">${qe.map(m=>`<option value="${s(m)}" ${m===c?"selected":""}>${s(m)}</option>`).join("")}</select></label>
            <label><span>Audience</span><input name="audience" value="Internal" /></label>
            <label><span>Linked job</span><select name="linked_job_id"><option value="">Company level</option>${F(e).map(m=>`<option value="${s(m.id)}" ${i.route?.jobId===m.id?"selected":""}>${s(m.name)}</option>`).join("")}</select></label>
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
  `,"form-create-modal builder-modal")}function Ti(e,t){const a=je(e)?`
    <div class="starter-options">
      ${(e.options||["Option 1","Option 2"]).map(n=>`<span>${s(n)}</span>`).join("")}
    </div>
  `:"";return`
    <article class="question-card starter-question-card">
      <div class="question-card-head">
        <span>${t+1}</span>
        <strong>${s(Rs(e.type))}</strong>
      </div>
      <label><span>Question</span><input value="${s(e.label||"Untitled question")}" readonly /></label>
      ${e.help?`<small>${s(e.help)}</small>`:""}
      ${a}
      <label class="check-row"><input type="checkbox" ${e.required?"checked":""} disabled /> Required</label>
    </article>
  `}function Oi(e,t){return t?C("Forms","Preview form",`
    <div class="form-preview-modal-body">
      ${ri(e,t)}
    </div>
  `,"form-preview-modal"):C("Forms","Preview form",g("Choose a form first."))}function Ai(e,t){return t?C("Forms","Manage form",`
    <div class="forms-summary-share compact">
      <strong>Shareable preview URL</strong>
      <input readonly value="${s(`${window.location.origin}${b(d("forms",{form_id:t.id},e))}`)}" />
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
  `):C("Forms","Manage form",g("Choose a form first."))}function Ei(e){const t=e.target.closest("[data-action]");if(t){xi(e,t);return}const a=e.target.closest("[data-select-job]");if(a){e.preventDefault(),ps(a.dataset.selectJob);return}const n=e.target.closest("[data-select-task]");if(n){e.preventDefault(),us(n.dataset.selectTask);return}const o=e.target.closest("a[href][data-router]");o&&(o.target||o.hasAttribute("download")||(e.preventDefault(),S(o.getAttribute("href"))))}function xi(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),i.dataLoaded=!1,i.sync={label:"Refreshing...",mode:"loading"},u();return}if(a==="sign-out"){e.preventDefault(),localStorage.removeItem(Qe),i.session=null,S("/login",{replace:!0});return}if(a==="open-profile"){e.preventDefault(),i.modal="profile",u();return}if(a==="open-file-upload"){e.preventDefault(),i.modal="file-upload",u();return}if(a==="open-folder-form"){e.preventDefault(),i.modal="folder-new",u();return}if(a==="open-job-form"){e.preventDefault();const n=t.dataset.jobId||"";n&&(i.selectedJobId=n),i.modal=t.dataset.mode==="edit"?"job-edit":"job-new",u();return}if(a==="open-forms-tools"){e.preventDefault(),i.modal="forms-tools",u();return}if(a==="open-form-actions"){e.preventDefault(),Le(t.dataset.formId,!1),i.modal="form-actions",u();return}if(a==="open-form-preview"){e.preventDefault(),Le(t.dataset.formId,!1),i.modal="form-preview",u();return}if(a==="set-form-start-tab"){e.preventDefault(),i.formStartTab=t.dataset.tab==="templates"?"templates":"blank",i.formStartTab==="blank"&&(i.formStartTemplateId=""),i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=ye()[0]?.id||""),u();return}if(a==="select-form-start-template"){e.preventDefault(),i.formStartTab="templates",i.formStartTemplateId=t.dataset.templateId||ye()[0]?.id||"",u();return}if(a==="close-modal"){e.preventDefault(),Pi();return}if(a==="set-task-view"){e.preventDefault(),i.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(pa,i.taskView),u();return}if(a==="set-drive-view"){e.preventDefault(),i.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(ua,i.driveView),u();return}if(a==="clock-in"){e.preventDefault(),gs(p(),t.dataset.taskId||i.route?.params?.get("task_id")||"");return}if(a==="clock-out"){e.preventDefault(),Ia();return}if(a==="select-file"){e.preventDefault(),i.selectedFileId=t.dataset.fileId||"",i.modal="file-detail",u();return}if(a==="download-file"){e.preventDefault(),Yi(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),Gi(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),i.formsTab=t.dataset.tab==="responses"?"responses":"library",u();return}if(a==="set-form-editor-tab"){e.preventDefault(),i.formEditorTab=t.dataset.tab||"questions",u();return}if(a==="new-form"){e.preventDefault(),i.formStartTemplateId=t.dataset.templateId||"",i.formStartTab=t.dataset.startTab==="templates"||i.formStartTemplateId?"templates":"blank",i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=ye()[0]?.id||""),i.modal="form-new",u();return}if(a==="select-form"){e.preventDefault(),Le(t.dataset.formId);return}if(a==="toggle-form-card"){e.preventDefault();const n=t.dataset.formId||"";i.expandedFormIds.has(n)?i.expandedFormIds.delete(n):i.expandedFormIds.add(n),u();return}if(a==="edit-form"){e.preventDefault(),Le(t.dataset.formId,!1),i.formsTab="builder",i.formEditorTab="questions",i.modal="",u();return}if(a==="save-form"){e.preventDefault(),U("Form saved locally"),u();return}if(a==="publish-form"){e.preventDefault(),Gt(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),Gt(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),Vs(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),zs(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),Hs(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),Bs(p());return}if(a==="new-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId="",i.modal="finance-invoice-new",u();return}if(a==="edit-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||"",i.modal="finance-invoice-edit",u();return}if(a==="new-finance-payment"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||i.route?.params?.get("invoice")||"",i.modal="finance-payment-new",u();return}if(a==="new-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId="",i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-expense-new",u();return}if(a==="edit-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId=t.dataset.expenseId||"",i.modal="finance-expense-edit",u();return}if(a==="new-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId="",i.modal="finance-vendor-new",u();return}if(a==="edit-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-vendor-edit",u();return}if(a==="add-question"){e.preventDefault(),Ws(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),Ks(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),Ys(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),Gs(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),Zs(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),Xs(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),Mi(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),Ji(t.dataset.taskId))}function Pi(){const e=i.route||Ke();if(i.modal="",i.formStartTemplateId="",i.formStartTab="blank",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",e.name==="company"&&e.section==="tasks"&&(e.params.get("new")||e.params.get("edit")||e.params.get("task_id"))){S(d("tasks",e.jobId?{job_id:e.jobId}:{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"){const t=e.jobId?$(e.jobId):le();S(d("jobs",{tab:t?"profile":"pipeline",...t?{job_id:t.id}:{}},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="crm"&&e.params.get("account")){S(d("crm",{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="finance"&&(e.params.get("invoice")||e.params.get("expense")||e.params.get("vendor")||e.params.get("report"))){S(d("finance",{},e.companyId),{replace:!0});return}u()}function Ni(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===re.localUsername&&String(t.password||"")===re.localPassword)){i.loginError="Invalid temporary credentials.",u();return}i.loginError="",i.session=ut(),I(Qe,i.session),S(Sa(t.return_url||b(d("jobs",{},T()))),{replace:!0});return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...x().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};I(ea,a),i.profileDraft=a,i.session={...x(),profile:a},I(Qe,i.session),i.modal="",u();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),Ri(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),Qi(e.target);return}if(e.target.matches("[data-new-form-form]")){e.preventDefault(),Js(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),Vi(e.target);return}if(e.target.matches("[data-folder-form]")){e.preventDefault(),zi(e.target);return}if(e.target.matches("[data-finance-invoice-form]")){e.preventDefault(),Hi(e.target);return}if(e.target.matches("[data-finance-payment-form]")){e.preventDefault(),Bi(e.target);return}if(e.target.matches("[data-finance-expense-form]")){e.preventDefault(),Wi(e.target);return}if(e.target.matches("[data-finance-vendor-form]")){e.preventDefault(),Ki(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),eo(e.target))}function Li(e){if(e.target.matches("[data-global-search]")){i.query=e.target.value,xe();return}if(e.target.matches("[data-file-search]")){i.fileQuery=e.target.value,xe();return}if(e.target.matches("[data-form-search]")){i.formQuery=e.target.value,xe();return}if(e.target.matches("[data-crm-search]")){i.crmQuery=e.target.value,xe();return}if(e.target.matches("[data-form-field]")){Wa(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Ka(e.target)}function Ui(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||T();ds(t);return}if(e.target.matches("[data-stage-filter]")){i.stageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-stage-filter]")){i.crmStageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-owner-filter]")){i.crmOwnerFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-status-filter]")){i.taskStatusFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-priority-filter]")){i.taskPriorityFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;S(d("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;S(d("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){i.fileCategoryFilter=e.target.value||"All categories",u();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=i.route?.jobId||"";S(d("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;S(d("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){i.formTypeFilter=e.target.value||"all",u();return}if(e.target.matches("[data-form-field]")){Wa(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Ka(e.target)}async function Ri(e){const t=we(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.invoice_total=Number(t.invoice_total||0),t.updated_at=new Date().toISOString();const a=i.jobs.some(o=>o.id===t.id),n=te();if(n){const o=a?await n.from("jobs").update(t).eq("id",t.id).select().single():await n.from("jobs").insert(t).select().single();if(!o.error&&o.data){lt(we(o.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",S(d("jobs",{tab:"profile",job_id:o.data.id},t.company_id),{replace:!0});return}i.sync={label:"Saved locally",mode:"local"}}lt(t),i.modal="",S(d("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function Mi(e){if(!e)return;const t=p(),a=te();a&&await a.from("jobs").delete().eq("id",e),i.jobs=i.jobs.filter(n=>n.id!==e),i.selectedJobId=F(t)[0]?.id||"",i.modal="",V(),S(d("jobs",{tab:"list"},t),{replace:!0})}async function Qi(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),n=Se({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:x().profile.member_id||ae(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),o=i.tasks.some(c=>c.id===n.id),r=te();if(r){const c=Ds(n),l=o?await r.from("tasks").update(c).eq("id",n.id).select().single():await r.from("tasks").insert(c).select().single();if(!l.error&&l.data){Ht(Se(l.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",S(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0});return}i.sync={label:"Task saved locally",mode:"local"}}Ht(n),i.modal="",S(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0})}async function Ji(e){if(!e)return;const t=p(),a=te();a&&await a.from("tasks").delete().eq("id",e),i.tasks=i.tasks.filter(n=>n.id!==e),i.selectedTaskId="",i.modal="",V(),S(d("tasks",{},t),{replace:!0})}async function Vi(e){const t=p(),a=new FormData(e),n=Object.fromEntries(a.entries()),o=Array.from(e.elements.files?.files||[]),r=String(n.file_name||"").trim(),c=o.length?o:r?[null]:[];if(!c.length){i.sync={label:"Choose a file or enter a file name",mode:"local"},u();return}const l=te();let m=0;for(const j of c){const f=crypto.randomUUID(),k=j?.name||r,R=String(n.folder||"shared"),D=`${t}/${n.job_id?`jobs/${n.job_id}`:R}/${f}-${Nt(k)}`;let G=!1;l&&j&&(G=!(await l.storage.from("quest-job-files").upload(D,j,{cacheControl:"3600",upsert:!1,contentType:j.type||"application/octet-stream"})).error);const Lt=ze({id:f,company_id:t,job_id:n.job_id||"",folder:R,file_name:k,mime_type:j?.type||"application/octet-stream",size_bytes:j?.size||Number(n.size_bytes||0),category:n.category||K(R),notes:n.notes||"",uploaded_by_label:n.uploaded_by_label||x().profile.full_name,bucket_id:"quest-job-files",object_path:G||!j?D:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(l){const Ee=await l.from("job_files").insert(Fs(Lt)).select().single();if(!Ee.error&&Ee.data){Bt(ze(Ee.data)),m+=1;continue}G&&await l.storage.from("quest-job-files").remove([D])}Bt(Lt)}i.sync=m===c.length?{label:"Quest Supabase live",mode:"live"}:{label:m?"Some files saved locally":"File record saved locally",mode:m?"loading":"local"},i.modal="",S(d("files",{folder:n.folder||"shared",...n.job_id?{job_id:n.job_id}:{}},t),{replace:!0})}function zi(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.name||"").trim();if(!a){i.sync={label:"Folder name is required",mode:"local"},u();return}const n=Pa({id:`folder-${crypto.randomUUID()}`,company_id:p(),name:a,parent_key:t.parent_key||"home",created_by_label:x().profile.full_name||"Quest HQ",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.driveFolders.unshift(n),i.modal="",i.sync={label:"Folder created locally",mode:"local"},V(),u()}function Hi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=$(t.job_id),o=String(t.id||"").trim()?pe(String(t.id).trim()):null,r=It({...t,id:String(t.id||"").trim()||`invoice-${crypto.randomUUID()}`,company_id:a,client_name:String(t.client_name||n?.client_name||"").trim(),total:q(t.subtotal)+q(t.tax),updated_at:new Date().toISOString()});Zi(r),o?.job_id&&o.job_id!==r.job_id&&dt(o.job_id),dt(r.job_id),i.modal="",i.sync={label:"Finance saved locally",mode:"local"},S(d("finance",{invoice:r.id},a),{replace:!0})}function Bi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=pe(t.invoice_id);if(!n||n.company_id!==a){i.sync={label:"Create an invoice before recording a payment",mode:"local"},u();return}const o=qt({...t,id:`payment-${crypto.randomUUID()}`,company_id:a,created_at:new Date().toISOString()});i.financePayments.unshift(o),n.status=X(n.id)<=0?"Paid":"Partially paid",n.updated_at=new Date().toISOString(),dt(n.job_id),V(),i.modal="",i.sync={label:"Payment recorded locally",mode:"local"},S(d("finance",o.invoice_id?{invoice:o.invoice_id}:{},a),{replace:!0})}function Wi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=Tt({...t,id:String(t.id||"").trim()||`expense-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});Xi(n),i.modal="",i.sync={label:"Expense saved locally",mode:"local"},S(d("finance",{expense:n.id},a),{replace:!0})}function Ki(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=Ot({...t,id:String(t.id||"").trim()||`vendor-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});es(n),i.modal="",i.sync={label:"Vendor saved locally",mode:"local"},S(d("finance",{vendor:n.id},a),{replace:!0})}async function Yi(e){const t=i.files.find(o=>o.id===e);if(!t?.object_path){i.sync={label:"No stored object for this file",mode:"local"},u();return}const a=te();if(!a)return;const n=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(n.error||!n.data?.signedUrl){i.sync={label:"Download failed",mode:"local"},u();return}window.open(n.data.signedUrl,"_blank","noopener,noreferrer")}async function Gi(e){const t=i.files.find(n=>n.id===e);if(!t)return;const a=te();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),i.files=i.files.filter(n=>n.id!==e),i.selectedFileId="",i.modal="",V(),u()}function lt(e){const t=i.jobs.findIndex(a=>a.id===e.id);t>=0?i.jobs[t]=e:i.jobs.unshift(e),i.selectedJobId=e.id,V()}function Ht(e){const t=i.tasks.findIndex(a=>a.id===e.id);t>=0?i.tasks[t]=e:i.tasks.unshift(e),i.selectedTaskId=e.id,V()}function Bt(e){const t=i.files.findIndex(a=>a.id===e.id);t>=0?i.files[t]=e:i.files.unshift(e),V()}function Zi(e){const t=i.financeInvoices.findIndex(a=>a.id===e.id);t>=0?i.financeInvoices[t]=e:i.financeInvoices.unshift(e),V()}function Xi(e){const t=i.financeExpenses.findIndex(a=>a.id===e.id);t>=0?i.financeExpenses[t]=e:i.financeExpenses.unshift(e),V()}function es(e){const t=i.financeVendors.findIndex(a=>a.id===e.id);t>=0?i.financeVendors[t]=e:i.financeVendors.unshift(e),V()}function dt(e){if(!e)return;const t=$(e);t&&(t.invoice_total=B(ce(t.company_id).filter(a=>a.job_id===e),"total"),t.updated_at=new Date().toISOString(),lt(t))}function xe(){const e=document.getElementById("workspace");e&&(ka(i.route),e.innerHTML=$a(i.route))}function Ke(){const e=ht(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const n=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:n,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function ts(){const e=ht(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||Re(t.get("job_id")||t.get("project_id"))||localStorage.getItem(Be)||T(),n=Object.fromEntries(Object.entries(Xa).map(([c,l])=>[c,d(l,{},a)]));Object.assign(n,{"/index.html":d("jobs",{},a),"/command.html":d("jobs",{},a),"/login.html":"/login"});let o=n[e];if(e==="/jobs"){const c=t.get("tab");c==="tasks"?o=d("tasks",H(t,["job_id","task_id","new","edit"]),a):c==="files"?o=d("files",H(t,["job_id","folder"]),a):c==="forms"?o=d("forms",H(t,["job_id"]),a):c==="analytics"?o=d("analytics",H(t,["job_id"]),a):o=d("jobs",H(t,["job_id","tab"]),a)}if(e==="/files"&&(o=d("files",H(t,["job_id","folder"]),a)),e==="/forms"&&(o=d("forms",H(t,["job_id"]),a)),e==="/analytics"&&(o=d("analytics",H(t,["job_id"]),a)),e==="/crm"&&(o=d("crm",H(t,["account"]),a)),e==="/finance"&&(o=d("finance",H(t,["invoice","expense","vendor","report"]),a)),e==="/admin"&&(o=d("settings",{},a)),e==="/time"&&(o=d("time",{},a)),e==="/team"&&(o=d("team-chart",{},a)),e==="/team-chart"&&(o=d("team-chart",{},a)),e==="/approvals"&&(o=d("approvals",{},a)),e==="/clock"&&(o=d("clock",{},a)),e==="/task-management.html"){const c=t.get("project_id")||t.get("job_id")||"";o=d("tasks",c?{job_id:c}:{},Re(c)||a)}const r=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(r){const c=decodeURIComponent(r[1]);o=d("tasks",{job_id:c},Re(c)||a)}o&&window.history.replaceState({},"",b(o))}function as(e){if(e.name!=="company")return"";const t=Oe();if(!t.includes(e.companyId))return d(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||T());if(!ma.map(o=>o.id).includes(e.section))return d("jobs",{},e.companyId);const n=e.jobId?Re(e.jobId):"";return n&&n!==e.companyId&&t.includes(n)?d(e.section,Object.fromEntries(e.params.entries()),n):""}function ht(){let e=window.location.pathname||"/";return fe&&e.startsWith(fe)&&(e=e.slice(fe.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function b(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),n=t.startsWith("/")?t:"/"+t;return`${fe}${n}${a?`?${a}`:""}`||"/"}function S(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(fe+"/")||fe===""&&e.startsWith("/")?e:b(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),u()}function ns(){return`${ht()}${window.location.search}`}function Sa(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?b(d("jobs",{},T())):`${t.pathname}${t.search}`}catch{return b(d("jobs",{},T()))}}function d(e="jobs",t={},a=p()){const n=new URLSearchParams(t);for(const[o,r]of[...n.entries()])(r==null||r==="")&&n.delete(o);return`/company/${encodeURIComponent(A(a||T()))}/${e}${n.toString()?`?${n.toString()}`:""}`}function is(e){return e.name==="company"?P(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":P(e.name||"Workspace")}function ss(e,t){const[a]=t.split("?"),n=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!n||e.name!=="company"?!1:e.companyId===decodeURIComponent(n[1])&&e.section===n[2]}function os(e){return fa.includes(e)?e:"pipeline"}function rs(e){return{pipeline:"Pipeline",list:"List",profile:"Profile"}[e]||e}function ls(e){const t=e.companyId||i.activeCompanyId||T(),a=Oe();i.activeCompanyId=a.includes(t)?t:a[0]||T(),localStorage.setItem(Be,i.activeCompanyId)}function ka(e){const t=p();e.jobId&&F(t).some(n=>n.id===e.jobId)&&(i.selectedJobId=e.jobId),(!i.selectedJobId||!F(t).some(n=>n.id===i.selectedJobId))&&(i.selectedJobId=F(t)[0]?.id||"");const a=e.params.get("task_id");a&&z(t).some(n=>n.id===a)&&(i.selectedTaskId=a),e.section!=="tasks"&&(i.selectedTaskId=""),i.driveFolder=e.params.get("folder")||"home"}function ds(e){const t=Oe(),a=A(e),n=t.includes(a)?a:t[0]||T();i.activeCompanyId=n,localStorage.setItem(Be,n),cs();const o=i.route||Ke(),r=o.name==="company"?o.section:"jobs";S(d(r,{},n))}function cs(){i.modal="",i.selectedJobId="",i.selectedTaskId="",i.selectedFileId="",i.selectedFormId="",i.selectedQuestionId="",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",i.query="",i.fileQuery="",i.formQuery="",i.crmQuery="",i.stageFilter="all",i.crmStageFilter="all",i.crmOwnerFilter="all",i.taskStatusFilter="all",i.taskPriorityFilter="all",i.fileCategoryFilter="All categories",i.formTypeFilter="all",i.formsTab="library",i.driveFolder="home"}function ps(e){const t=$(e);t&&(i.selectedJobId=e,S(d("jobs",{tab:"profile",job_id:e},t.company_id)))}function us(e){const t=$t(e);t&&(i.selectedTaskId=e,S(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function le(){return $(i.selectedJobId)||F(p())[0]||null}function $(e){return i.jobs.find(t=>t.id===e)||null}function $t(e){return i.tasks.find(t=>t.id===e)||null}function F(e=p()){return i.jobs.filter(t=>t.company_id===e)}function z(e=p()){return i.tasks.filter(t=>t.company_id===e)}function de(e=p()){return i.files.filter(t=>t.company_id===e)}function he(e=p()){return i.driveFolders.filter(t=>t.company_id===e)}function ae(e=p()){return i.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function ja(e=p()){const t=i.query.trim().toLowerCase();return F(e).filter(a=>i.stageFilter!=="all"&&a.stage!==i.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,h(a.company_id)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function Ye(e=p()){const t=new Map;return F(e).forEach(a=>{const n=String(a.client_name||"").trim()||"Unassigned customer",o=`account-${Nt(n.toLowerCase())}`;t.has(o)||t.set(o,{key:o,name:n,jobs:[]}),t.get(o).jobs.push(a)}),Array.from(t.values()).map(a=>{const n=a.jobs.slice().sort((D,G)=>Date.parse(G.updated_at||G.created_at||0)-Date.parse(D.updated_at||D.created_at||0)),o=n[0]||null,r=n.map(D=>D.id),c=z(e).filter(D=>r.includes(D.project_id)),l=ie(e).filter(D=>r.includes(D.linked_job_id)),m=de(e).filter(D=>r.includes(D.job_id)),j=Z(n.map(D=>D.contact_name)),f=Z(n.map(D=>D.owner_name)),k=Z(n.map(D=>D.site_address)),R=n.map(D=>D.priority||"Medium").sort((D,G)=>ge(G)-ge(D))[0]||"Medium";return{...a,jobs:n,tasks:c,latestJob:o,contacts:j,owners:f,addresses:k,forms:l,files:m,primaryContact:j[0]||"No contact",owner:f[0]||"Unassigned",stage:o?.stage||"Lead",priority:R,estimateTotal:B(n,"estimate_total"),fileCount:m.length,formCount:l.length,updatedAt:o?.updated_at||o?.created_at||new Date().toISOString(),subtitle:k[0]||`${n.length} linked job${n.length===1?"":"s"}`}}).sort((a,n)=>Date.parse(n.updatedAt||0)-Date.parse(a.updatedAt||0))}function ms(e=p()){const t=i.crmQuery.trim().toLowerCase();return Ye(e).filter(a=>i.crmStageFilter!=="all"&&!a.jobs.some(n=>n.stage===i.crmStageFilter)||i.crmOwnerFilter!=="all"&&!a.owners.includes(i.crmOwnerFilter)?!1:t?[a.name,a.primaryContact,a.owner,a.stage,...a.addresses,...a.contacts,...a.jobs.map(n=>n.name)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function fs(e,t){return Ye(e).find(a=>a.key===t)||null}function bs(e=p()){return Z(F(e).map(t=>t.owner_name)).sort((t,a)=>t.localeCompare(a))}function Da(e=p()){const t=x().profile.member_id||"",a=z(e).slice().sort(Kt),n=a.filter(wt),o=n.filter(k=>k.due===_(0)),r=n.filter(k=>Xt(k.due)<0),c=n.filter(k=>{const R=Xt(k.due);return R>=0&&R<=7}),l=n.filter(k=>k.assignee_id===t),m=n.filter(k=>["review","pending"].includes(k.status)),j=a.filter(k=>k.status==="done"),f=Z(r.concat(o,l,m,c).map(k=>k.id)).map(k=>a.find(R=>R.id===k)).filter(Boolean).sort(Kt);return{tasks:a,open:n,dueToday:o,overdue:r,thisWeek:c,assignedToMe:l,review:m,done:j,focus:f}}function Fa(e=p()){const t=ie(e).filter(o=>(o.require_approval||o.type==="Client approval")&&!["Archived","Closed","Approved"].includes(o.status)).map(o=>({id:`form:${o.id}`,title:o.title,meta:$(o.linked_job_id)?.name||o.description||"Company form",type:"Form approval",owner:Q(o.creator_id),status:o.status,updatedAt:o.updated_at||o.created_at,href:d("forms",{form_id:o.id},e)})),a=z(e).filter(o=>["review","pending"].includes(o.status)).map(o=>({id:`task:${o.id}`,title:o.title,meta:$(o.project_id)?.name||o.description||"Company task",type:"Task review",owner:Q(o.assignee_id),status:se(o.status),updatedAt:o.updated_at||o.due,href:d("tasks",{...o.project_id?{job_id:o.project_id}:{},task_id:o.id},e)})),n=i.memberships.filter(o=>o.company_id===e&&o.status!=="active").map(o=>({id:`access:${o.profile_id||o.member_id}`,title:Q(o.member_id||o.profile_id),meta:`${P(o.role)} access request`,type:"Access request",owner:"Quest admin",status:P(o.status),updatedAt:new Date().toISOString(),href:d("settings",{tab:"access"},e)}));return t.concat(a,n).sort((o,r)=>Date.parse(r.updatedAt||0)-Date.parse(o.updatedAt||0))}function Ge(e=p()){const t=i.activeTimer;return!t||t.company_id!==e?null:t}function Ca(e=p()){return i.timeEntries.filter(t=>t.company_id===e).sort((t,a)=>Date.parse(a.started_at||0)-Date.parse(t.started_at||0))}function Wt(e=p(),t=0){return Ca(e).filter(a=>Date.parse(a.started_at||0)>=t).reduce((a,n)=>a+q(n.duration_ms),0)}function gs(e=p(),t=""){i.activeTimer&&Ia(!1);const a=t?$t(t):null;i.activeTimer={id:`timer-${crypto.randomUUID()}`,company_id:e,user_id:x().profile.member_id||x().profile.id,task_id:a?.company_id===e?a.id:"",task_title:a?.company_id===e?a.title:"",started_at:new Date().toISOString()},Ma(),i.sync={label:"Clock started locally",mode:"local"},u()}function Ia(e=!0){const t=i.activeTimer;if(!t)return;const a=new Date().toISOString(),n=Math.max(0,Date.parse(a)-Date.parse(t.started_at||a));i.timeEntries.unshift({id:`time-${crypto.randomUUID()}`,company_id:t.company_id,user_id:t.user_id,task_id:t.task_id||"",task_title:t.task_title||"",started_at:t.started_at,ended_at:a,duration_ms:n,notes:t.task_title?"Task timer":"General shift"}),i.activeTimer=null,Ma(),i.sync={label:"Clock stopped locally",mode:"local"},e&&u()}function wt(e){return e.status!=="done"}function Kt(e,t){const a=Date.parse(e.due||0)-Date.parse(t.due||0);return a||ge(t.priority)-ge(e.priority)}function ce(e=p()){return i.financeInvoices.filter(t=>t.company_id===e).sort(De("updated_at"))}function qa(e=p()){return i.financePayments.filter(t=>t.company_id===e)}function St(e=p()){return i.financeExpenses.filter(t=>t.company_id===e).sort(De("updated_at"))}function kt(e=p()){return i.financeVendors.filter(t=>t.company_id===e)}function pe(e){return i.financeInvoices.find(t=>t.id===e)||null}function Ta(e){return i.financeExpenses.find(t=>t.id===e)||null}function jt(e){return i.financeVendors.find(t=>t.id===e)||null}function ct(e){return jt(e)?.name||"No vendor"}function Oa(e){return i.financePayments.filter(t=>t.invoice_id===e).sort(De("received_at"))}function Dt(e){return B(Oa(e),"amount")}function X(e){const t=pe(e);return Math.max(0,q(t?.total)-Dt(e))}function Aa(e){const t=X(e.id);return t<=0&&q(e.total)>0?"Paid":t<q(e.total)?"Partially paid":e.status==="Sent"&&Ga(e.due_date)>0?"Overdue":e.status}function Ea(e=p()){const t=ce(e),a=qa(e),n=St(e).filter(l=>["Approved","Paid"].includes(l.status)),o={current:0,thirty:0,sixty:0,overSixty:0};t.forEach(l=>{const m=X(l.id);if(!m)return;const j=Ga(l.due_date);j<=0?o.current+=m:j<=30?o.thirty+=m:j<=60?o.sixty+=m:o.overSixty+=m});const r=B(a,"amount"),c=B(n,"amount");return{pipeline:B(F(e),"estimate_total"),invoiced:B(t,"total"),collected:r,outstanding:t.reduce((l,m)=>l+X(m.id),0),expenses:c,net:r-c,aging:o}}function vs(e=p(),t=""){const a=i.query.trim().toLowerCase();return z(e).filter(n=>t&&n.project_id!==t||i.taskStatusFilter!=="all"&&n.status!==i.taskStatusFilter||i.taskPriorityFilter!=="all"&&n.priority!==i.taskPriorityFilter?!1:a?[n.title,n.description,Ae(n.type),Q(n.assignee_id),$(n.project_id)?.name].some(o=>String(o||"").toLowerCase().includes(a)):!0)}function xa(){const e=Oe();return i.companies.filter(t=>e.includes(t.id))}function _s(e,t=p()){if(!e)return!0;const a=x().profile,n=String(i.memberships.find(r=>r.company_id===t&&r.profile_id===a.id&&r.status==="active")?.role||a.role||"member").toLowerCase(),o=Ut[n]||Ut.member;return o.includes("*")||o.includes(e)}function Oe(){const e=x().profile,t=i.companies.map(o=>o.id);if(["developer","admin"].includes(e.role))return Z(t.length?t:be.map(o=>A(o.id)));const a=i.memberships.filter(o=>o.profile_id===e.id&&o.status!=="disabled").map(o=>A(o.company_id)),n=a.length?a:e.company_ids||[];return Z(n.map(A)).filter(o=>t.includes(o))}function p(){const e=Oe();return e.includes(i.activeCompanyId)?i.activeCompanyId:e[0]||T()}function T(){return A(be[0].id)}function Ze(e){const t=A(e);return i.companies.find(a=>a.id===t)||be.map($e).find(a=>a.id===t)||null}function h(e){const t=Ze(e);return t?Xe(t):e||"Company"}function Xe(e){return e.short_name||e.label||e.name||e.id}function ne(e){return Ze(e)?.color||"#f0b23b"}function Re(e){return A(i.jobs.find(t=>t.id===e)?.company_id||"")}function Ft(e){const t=x().profile;return["developer","admin"].includes(t.role)?P(t.role):P(i.memberships.find(a=>a.company_id===e&&a.profile_id===t.id)?.role||t.role||"member")}function Ct(e,t){const a=i.memberships.find(n=>n.company_id===e&&(n.member_id===t||n.profile_id===t));return P(a?.role||"member")}function Q(e){const t=i.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function et(e){return i.tasks.filter(t=>t.project_id===e).length}function Ve(e){return i.files.filter(t=>t.job_id===e).length}function A(e){return{"quest-roofing":"roofing","quest-drafting":"drafting"}[String(e||"").trim()]||String(e||"").trim()}function pt(e){const t=new Map;return e.map($e).forEach(a=>{!a.id||t.has(a.id)||t.set(a.id,a)}),Array.from(t.values())}function $e(e){return{id:A(e.id||""),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function we(e){return{id:String(e.id||""),company_id:A(e.company_id||T()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:Ce.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:q(e.estimate_total),invoice_total:q(e.invoice_total),task_count:q(e.task_count),file_count:q(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function Se(e){const t=Je.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=Ie.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:ba.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:A(e.company_id||T()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||_(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:Je.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function ze(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:A(e.company_id||T()),job_id:String(e.job_id||""),folder:String(e.folder||no(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:q(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Pa(e){return{id:String(e.id||`folder-${crypto.randomUUID()}`),company_id:A(e.company_id||T()),name:String(e.name||"New folder").trim()||"New folder",parent_key:String(e.parent_key||"home"),created_by_label:String(e.created_by_label||"Quest HQ"),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function tt(e){const t=Array.isArray(e.questions)?e.questions.map(at):[],a=qe.includes(e.type)?e.type:"Internal",n=vt.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:A(e.company_id||T()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:n,audience:String(e.audience||"Internal").trim(),creator_id:String(e.creator_id||e.created_by||e.created_by_id||""),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function at(e){const t=Te.some(([n])=>n===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(n=>String(n||"").trim()).filter(Boolean):[]};return je(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function Na(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:A(e.company_id||T()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function It(e){const t=q(e.subtotal),a=q(e.tax),n=q(e.total)||t+a;return{id:String(e.id||`invoice-${crypto.randomUUID()}`),company_id:A(e.company_id||T()),job_id:String(e.job_id||""),client_name:String(e.client_name||"").trim(),invoice_number:String(e.invoice_number||`INV-${Date.now()}`).trim(),status:ga.includes(e.status)?e.status:"Draft",issue_date:String(e.issue_date||_(0)).slice(0,10),due_date:String(e.due_date||_(30)).slice(0,10),subtotal:t,tax:a,total:n,notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function qt(e){return{id:String(e.id||`payment-${crypto.randomUUID()}`),company_id:A(e.company_id||T()),invoice_id:String(e.invoice_id||""),amount:q(e.amount),method:ya.includes(e.method)?e.method:"ACH",received_at:String(e.received_at||_(0)).slice(0,10),reference:String(e.reference||"").trim(),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString()}}function Tt(e){return{id:String(e.id||`expense-${crypto.randomUUID()}`),company_id:A(e.company_id||T()),job_id:String(e.job_id||""),vendor_id:String(e.vendor_id||""),category:We.includes(e.category)?e.category:"Other",amount:q(e.amount),status:va.includes(e.status)?e.status:"Pending",spent_at:String(e.spent_at||_(0)).slice(0,10),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ot(e){return{id:String(e.id||`vendor-${crypto.randomUUID()}`),company_id:A(e.company_id||T()),name:String(e.name||"New vendor").trim()||"New vendor",contact_name:String(e.contact_name||"").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),category:We.includes(e.category)?e.category:"Other",status:_a.includes(e.status)?e.status:"Active",notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function La(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,supervisor_id:String(e.supervisor_id||e.manager_id||""),company_ids:Array.isArray(e.company_ids)?Z(e.company_ids.map(A)):[]}}function ys(e){return{company_id:A(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function hs(e=p()){return we({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function $s(e=p(),t=""){return Se({id:"",title:"",company_id:e,project_id:t,assignee_id:ae(e)[0]?.id||"abraham",creator_id:x().profile.member_id||"abraham",due:_(1),priority:"medium",status:"todo",type:"admin"})}function ws(e=p()){const t=le();return It({id:"",company_id:e,job_id:t?.company_id===e?t.id:"",client_name:t?.company_id===e?t.client_name:"",invoice_number:io(e),status:"Draft",issue_date:_(0),due_date:_(30),subtotal:t?.company_id===e?t.estimate_total:0,tax:0,notes:""})}function Ss(e=p(),t=""){const a=t?pe(t):ce(e).find(o=>X(o.id)>0),n=a?.company_id===e?a:null;return qt({id:"",company_id:e,invoice_id:n?.id||"",amount:n?X(n.id):0,method:"ACH",received_at:_(0),reference:"",notes:""})}function ks(e=p(),t=""){return Tt({id:"",company_id:e,job_id:le()?.company_id===e?le().id:"",vendor_id:t||kt(e)[0]?.id||"",category:"Materials",status:"Pending",amount:0,spent_at:_(0),notes:""})}function js(e=p()){return Ot({id:"",company_id:e,name:"",category:"Materials",status:"Active"})}function Ds(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function Fs(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function x(){return i.session?{...i.session,profile:{...ut().profile,...i.session.profile||{},...i.profileDraft||{}}}:ut()}function ut(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",...i.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:re.localUsername,email:e.email},profile:e}}function J(e,t,a=""){return`
    <section class="workspace-head">
      <div>
        <div class="context-line"><span>${s(h(p()))}</span><b>${s(Ft(p()))}</b></div>
        <h1>${s(e)}</h1>
        <p>${s(t)}</p>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function Cs(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric"><span>${s(t)}</span><strong>${s(a)}</strong></article>`).join("")}</section>`}function Is(e){return`
    <button class="queue-row" type="button" data-select-job="${s(e.id)}">
      <span><strong>${s(e.name)}</strong><small>${s(e.client_name||h(e.company_id))}</small></span>
      ${At(e.priority)}
      <b>${s(e.stage)}</b>
    </button>
  `}function nt(e){return`
    <button class="queue-row" type="button" data-select-task="${s(e.id)}">
      <span><strong>${s(e.title)}</strong><small>${s($(e.project_id)?.name||h(e.company_id))}</small></span>
      ${Ua(e.priority)}
      <b>${s(se(e.status))}</b>
    </button>
  `}function qs(e){return`
    <button class="job-card priority-${s(e.priority.toLowerCase())} ${e.id===i.selectedJobId?"active":""}" type="button" data-select-job="${s(e.id)}">
      <strong>${s(e.name)}</strong>
      <span>${s(e.client_name||"No client")}</span>
      <small>${s(h(e.company_id))} - ${s(e.owner_name||"Unassigned")}</small>
      <em>${s(et(e.id))} tasks</em>
    </button>
  `}function Pe(e,t,a,n){return`
    <a class="mini-link" href="${b(e)}" data-router>
      <i class="ti ${s(t)}"></i>
      <span><strong>${s(a)}</strong><small>${s(n)}</small></span>
    </a>
  `}function L(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${s(t)}</span><strong>${s(a)}</strong></div>`).join("")}</div>`}function w(e,t,a="",n=!1,o="text",r=""){return`<label class="${s(r)}"><span>${s(e)}</span><input name="${s(t)}" type="${s(o)}" value="${s(a)}" ${n?"required":""} /></label>`}function ee(e,t,a="",n=""){return`<label class="${s(n)}"><span>${s(e)}</span><textarea name="${s(t)}" rows="4">${s(a)}</textarea></label>`}function O(e,t,a,n){return`
    <label><span>${s(e)}</span><select name="${s(t)}">
      ${n.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function At(e){return`<span class="priority ${s(String(e).toLowerCase())}">${s(e)}</span>`}function Ua(e){return`<span class="priority ${s(e)}">${s(P(e))}</span>`}function Ra(e){return`<span class="status-pill ${s(e)}">${s(se(e))}</span>`}function Ts(e){return`<span class="finance-status ${s(Nt(e))}">${s(e)}</span>`}function it(e,t){if(e.avatar_url)return`<span class="${s(t)}"><img src="${s(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${s(t)}">${s(a)}</span>`}function g(e){return`<div class="empty-state">${s(e)}</div>`}function H(e,t){const a={};return t.forEach(n=>{const o=e.get(n);o&&(a[n]=o)}),a}function V(){I(ta,i.jobs),I(aa,i.tasks),I(na,i.files),I(ia,i.driveFolders),I(Fe,i.forms),I(mt,i.formResponses),I(ra,i.financeInvoices),I(la,i.financePayments),I(da,i.financeExpenses),I(ca,i.financeVendors),I(ft,i.timeEntries),I(bt,i.activeTimer),I(sa,i.teamMembers),I(oa,i.memberships)}function Ma(){I(ft,i.timeEntries),I(bt,i.activeTimer)}function y(e,t,a=""){return`<article class="metric"><span>${s(e)}</span><strong>${s(t)}</strong>${a?`<small>${s(a)}</small>`:""}</article>`}function oe(e,t){return`<div><strong>${s(e)}</strong><span>${s(t)}</span></div>`}function Me(e,t,a,n,o=""){const r=`
    <span><strong>${s(e)}</strong><small>${s(t||"Finance record")}</small></span>
    <b>${s(a)}</b>
    <em>${E(n)}</em>
  `;return o?`<a class="finance-compact-row" href="${b(o)}" data-router>${r}</a>`:`<div class="finance-compact-row">${r}</div>`}function Yt(e,t){const a=de(e);return t==="jobs"?a.filter(n=>n.job_id).length:a.filter(n=>n.folder===t).length}function Qa(e="home",t=null){return t?.id?`job:${t.id}`:e||"home"}function Os(e,t="home",a=null){const n=Qa(t,a),o=he(e).filter(r=>r.parent_key===n).map(r=>As(e,r));return a?o:t==="home"?gt.map(([c,l,m,j])=>({id:c,name:l,caption:m,icon:j,href:b(d("files",{folder:c},e)),countLabel:`${Yt(e,c)} file${Yt(e,c)===1?"":"s"}`,updatedLabel:""})).concat(o):t==="jobs"?F(e).map(c=>({id:`job:${c.id}`,name:c.name,caption:c.client_name||h(e),icon:"ti-folder",href:b(d("files",{folder:"jobs",job_id:c.id},e)),countLabel:`${Ve(c.id)} file${Ve(c.id)===1?"":"s"}`,updatedLabel:E(c.updated_at)})).concat(o):o}function As(e,t){const a=he(e).filter(r=>r.parent_key===t.id).length,n=de(e).filter(r=>r.folder===t.id).length,o=a+n;return{id:t.id,name:t.name,caption:"Custom folder",icon:"ti-folder",href:b(d("files",{folder:t.id},e)),countLabel:`${o} item${o===1?"":"s"}`,updatedLabel:E(t.updated_at)}}function Es(e,t,a=null){if(a)return`<span>/</span><a href="${b(d("files",{folder:"jobs"},e))}" data-router>Jobs</a>`;const n=he(e).find(m=>m.id===t);if(!n)return`<span>/</span><strong>${s(K(t))}</strong>`;const o=[];let r=n;const c=new Set;for(;r&&!c.has(r.id);)c.add(r.id),o.unshift(r),r=he(e).find(m=>m.id===r.parent_key);return`${n.parent_key&&!n.parent_key.startsWith("folder-")&&n.parent_key!=="home"?`<span>/</span><a href="${b(d("files",{folder:n.parent_key},e))}" data-router>${s(K(n.parent_key))}</a>`:""}${o.map((m,j)=>`<span>/</span>${j===o.length-1?`<strong>${s(m.name)}</strong>`:`<a href="${b(d("files",{folder:m.id},e))}" data-router>${s(m.name)}</a>`}`).join("")}`}function xs(e=p(),t="home",a=""){const n=(i.fileQuery||i.query||"").trim().toLowerCase(),o=i.fileCategoryFilter;let r=de(e);return a?r=r.filter(c=>c.job_id===a):t&&t!=="home"&&(t==="jobs"?r=r.filter(c=>c.job_id):r=r.filter(c=>c.folder===t)),o&&o!=="All categories"&&(r=r.filter(c=>String(c.category||K(c.folder)).toLowerCase()===o.toLowerCase())),n&&(r=r.filter(c=>[c.file_name,c.category,c.uploaded_by_label,c.notes,c.object_path,$(c.job_id)?.name].some(l=>String(l||"").toLowerCase().includes(n)))),r.sort((c,l)=>new Date(l.created_at||0)-new Date(c.created_at||0))}function ue(e){const t=String(e.mime_type||"").toLowerCase(),a=Ja(e);return t.includes("pdf")||a==="pdf"?"PDF":t.includes("image")||["png","jpg","jpeg","gif","webp","svg"].includes(a)?"Image":t.includes("zip")||["zip","rar","7z"].includes(a)?"Archive":t.includes("spreadsheet")||t.includes("excel")||["xls","xlsx","csv"].includes(a)?"Excel":t.includes("word")||["doc","docx"].includes(a)?"Word":t.includes("text")||["txt","md","json","csv","log"].includes(a)?"Text":t.includes("presentation")||["ppt","pptx"].includes(a)?"PowerPoint":a?a.toUpperCase():K(e.folder)}function Et(e){const t=ue(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="excel"?"sheet":t==="text"?"text":["word","powerpoint"].includes(t)?"doc":t==="archive"?"zip":"doc"}function Ja(e){return String(e.file_name||"").split(".").pop()?.toLowerCase()||""}function xt(e,t=!1){const a=Ya(e);return e.signed_url?`<img src="${s(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${s(Et(e))} ${t?"large":""}"><i class="ti ${s(a)}"></i></span>`}function Ps(e){const t=ue(e),a=Ja(e);return t==="Image"?a&&a.length<=4?a.toUpperCase():"IMG":t==="Archive"?a&&a.length<=3?a.toUpperCase():"ZIP":t==="Excel"?a==="csv"?"CSV":"XLS":t==="Word"?"DOC":t==="PowerPoint"?"PPT":t==="Text"?a&&a.length<=4?a.toUpperCase():"TXT":t.length<=4?t.toUpperCase():(a||"FILE").slice(0,4).toUpperCase()}function ie(e=p()){return i.forms.filter(t=>t.company_id===e)}function Ns(e=p()){const t=i.formQuery.trim().toLowerCase(),a=i.route?.jobId||"";return ie(e).filter(n=>a&&n.linked_job_id!==a||i.formTypeFilter!=="all"&&n.type!==i.formTypeFilter?!1:t?[n.title,n.description,n.type,n.status,n.audience,$(n.linked_job_id)?.name].some(o=>String(o||"").toLowerCase().includes(t)):!0)}function ke(e=p()){const t=i.route?.jobId||"",a=ie(e).filter(r=>!t||r.linked_job_id===t),n=i.route?.params?.get("form_id")||"";if(n&&a.some(r=>r.id===n)&&(i.selectedFormId=n),!a.length)return i.selectedFormId="",i.selectedQuestionId="",null;let o=a.find(r=>r.id===i.selectedFormId)||a[0];return i.selectedFormId=o.id,(!i.selectedQuestionId||!o.questions.some(r=>r.id===i.selectedQuestionId))&&(i.selectedQuestionId=o.questions[0]?.id||""),o}function me(e){return i.forms.find(t=>t.id===e)||null}function Y(){return me(i.selectedFormId)||ke(p())}function Va(e=p()){return i.formResponses.filter(t=>t.company_id===e)}function st(e){return i.formResponses.filter(t=>t.form_id===e)}function za(e){return Array.isArray(e?.questions)?e.questions.length:0}function Ls(e){const t=String(e?.creator_id||""),a=x().profile;return t?t&&(t===a.member_id||t===a.id)?a.full_name||"Quest Basic Mode":Q(t):e?.created_by_label||a.full_name||"Quest HQ"}function ve(e,t,a="",n=!1,o="text"){return`<label><span>${s(e)}</span><input data-form-field="${s(t)}" type="${s(o)}" value="${s(a)}" ${n?"required":""} /></label>`}function Ha(e,t,a=""){return`<label><span>${s(e)}</span><textarea data-form-field="${s(t)}" rows="3">${s(a)}</textarea></label>`}function Ne(e,t,a,n){return`
    <label><span>${s(e)}</span><select data-form-field="${s(t)}">
      ${n.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function je(e){return["multiple","checkbox","dropdown"].includes(e.type)}function Us(e){return{short:"ti-letter-t",paragraph:"ti-align-left",multiple:"ti-circle-dot",checkbox:"ti-checkbox",dropdown:"ti-select",date:"ti-calendar",rating:"ti-star",yesno:"ti-circle-check",file:"ti-paperclip"}[e]||"ti-plus"}function Rs(e){return Te.find(([t])=>t===e)?.[1]||P(e||"Question")}function W(e,t){return`
    <div class="response-question">
      <label>
        <span>${s(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${s(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function Ba(e){const t=me(e.form_id),a=Object.entries(e.answers||{}).map(([n,o])=>{const r=t?.questions.find(l=>l.id===n),c=Array.isArray(o)?o.join(", "):o;return oe(r?.label||n,c||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${s(t?.title||"Response")}</h2><p>${s(e.submitted_by||e.submitter_email||"Anonymous")} / ${E(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||oe("Response","No answers captured.")}</div>
  `}function ye(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[N("short","Inspection address"),N("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),N("paragraph","Recommended scope"),N("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[N("short","Client name"),N("yesno","Approved to proceed?"),N("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[N("short","Request title"),N("dropdown","Priority",["Low","Medium","High","Urgent"]),N("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[N("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),N("yesno","Weather safe?"),N("paragraph","Safety notes")]}]}function Ms(e=p()){return tt({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:i.route?.jobId||"",theme_color:ne(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[N("short","First question")]})}function N(e="short",t="Untitled question",a=[]){return at({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function Qs(e,t={}){const a=Ms(e),n=tt({...a,...t,id:t.id||`form-${crypto.randomUUID()}`,company_id:e,questions:(t.questions||a.questions).map(o=>at(o)),created_at:t.created_at||new Date().toISOString(),updated_at:new Date().toISOString()});return i.forms.unshift(n),i.selectedFormId=n.id,i.selectedQuestionId=n.questions[0]?.id||"",i.formsTab="builder",i.formEditorTab="questions",i.modal="",i.formStartTemplateId="",i.formStartTab="blank",U("New form created"),u(),n}function Js(e){const t=Object.fromEntries(new FormData(e).entries()),a=t.template_id?ye().find(c=>c.id===t.template_id):null,n=String(t.title||a?.title||"Untitled form").trim()||"Untitled form",o=String(t.description||a?.description||"").trim(),r=a?a.questions.map(c=>({...He(c),id:`q-${crypto.randomUUID()}`})):[N("short","First question")];Qs(p(),{title:n,description:o,type:qe.includes(t.type)?t.type:a?.type||"Internal",audience:String(t.audience||"Internal").trim()||"Internal",creator_id:x().profile.member_id||x().profile.id||"basic-quest-user",linked_job_id:String(t.linked_job_id||""),theme_color:ne(p()),background:"clean",submit_label:String(t.submit_label||"Submit").trim()||"Submit",collect_email:t.collect_email==="on",require_approval:t.require_approval==="on",questions:r})}function Le(e,t=!0){const a=me(e);a&&(i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",t&&u())}function U(e="Forms saved locally"){const t=Y();t&&(t.updated_at=new Date().toISOString()),I(Fe,i.forms),I(mt,i.formResponses),i.sync={label:e,mode:"live"}}function Gt(e,t){const a=me(e||i.selectedFormId);a&&(a.status=vt.includes(t)?t:"Draft",i.selectedFormId=a.id,U(`${a.status} locally`),u())}function Vs(e){const t=me(e||i.selectedFormId);if(!t)return;const a=tt({...He(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(n=>({...He(n),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.forms.unshift(a),i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",U("Form duplicated"),u()}function zs(e){const t=e||i.selectedFormId;t&&(i.forms=i.forms.filter(a=>a.id!==t),i.formResponses=i.formResponses.filter(a=>a.form_id!==t),i.selectedFormId=ie(p())[0]?.id||"",i.selectedQuestionId=ke(p())?.questions[0]?.id||"",i.modal="",U("Form deleted locally"),u())}async function Hs(e){const t=e||i.selectedFormId,a=`${window.location.origin}${b(d("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),i.sync={label:"Form link copied",mode:"live"}}catch{i.sync={label:"Copy failed",mode:"local"}}u()}function Bs(e){const t=JSON.stringify({company_id:e,forms:ie(e),responses:Va(e)},null,2);to(`${e}-forms-export.json`,t,"application/json")}function Wa(e){const t=Y();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),I(Fe,i.forms))}function Ka(e){const t=Y(),a=e.closest("[data-question-id]"),n=t?.questions.find(o=>o.id===a?.dataset.questionId);if(!(!t||!n)){if(i.selectedQuestionId=n.id,e.matches("[data-question-option]")){const o=Number(e.dataset.questionOption);n.options[o]=e.value}else{const o=e.dataset.questionField;if(o==="required")n.required=e.checked;else if(o==="type"){n.type=e.value,je(n)&&!n.options.length&&(n.options=["Option 1","Option 2"]),je(n)||(n.options=[]),U("Question updated"),u();return}else o&&(n[o]=e.value)}t.updated_at=new Date().toISOString(),I(Fe,i.forms)}}function Ws(e="multiple"){const t=Y();if(!t)return;const a=N(e,Te.find(([n])=>n===e)?.[1]||"New question");t.questions.push(a),i.selectedQuestionId=a.id,U("Question added"),u()}function Ks(e){const t=Y(),a=t?.questions.find(r=>r.id===e);if(!t||!a)return;const n=t.questions.findIndex(r=>r.id===e),o=at({...He(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(n+1,0,o),i.selectedQuestionId=o.id,U("Question duplicated"),u()}function Ys(e){const t=Y();t&&(t.questions=t.questions.filter(a=>a.id!==e),i.selectedQuestionId=t.questions[0]?.id||"",U("Question deleted"),u())}function Gs(e,t){const a=Y();if(!a||!t)return;const n=a.questions.findIndex(c=>c.id===e),o=n+t;if(n<0||o<0||o>=a.questions.length)return;const[r]=a.questions.splice(n,1);a.questions.splice(o,0,r),i.selectedQuestionId=e,U("Question moved"),u()}function Zs(e){const a=Y()?.questions.find(n=>n.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),U("Option added"),u())}function Xs(e,t){const n=Y()?.questions.find(o=>o.id===e);!n||t<0||(n.options.splice(t,1),n.options.length||n.options.push("Option 1"),U("Option removed"),u())}function eo(e){const t=me(e.dataset.formId);if(!t)return;const a=new FormData(e),n={};t.questions.forEach(o=>{const r=`answer:${o.id}`,c=a.getAll(r).filter(l=>l instanceof File?l.name:String(l||"").trim());n[o.id]=c.length>1?c.map(l=>l instanceof File?l.name:l):c[0]instanceof File?c[0].name:c[0]||""}),i.formResponses.unshift(Na({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||x().profile.full_name||"Preview submitter"),answers:n,created_at:new Date().toISOString()})),i.formsTab="responses",i.modal="",U("Preview response saved"),u()}function to(e,t,a="text/plain"){const n=new Blob([t],{type:a}),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=e,r.click(),URL.revokeObjectURL(o)}function He(e){return JSON.parse(JSON.stringify(e))}function Z(e){return Array.from(new Set(e.map(t=>String(t||"").trim()).filter(Boolean)))}function se(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||P(e)}function Ae(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||P(e)}function K(e){return gt.find(([t])=>t===e)?.[1]||i.driveFolders.find(t=>t.id===e)?.name||P(e||"Shared")}function ao(e=p()){return gt.map(([t,a])=>[t,a]).concat(he(e).map(t=>[t.id,t.name]))}function no(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Ya(e){const t=ue(e);return t==="Image"?"ti-photo":t==="PDF"?"ti-file-type-pdf":t==="Archive"?"ti-file-zip":t==="Excel"?"ti-file-spreadsheet":t==="Word"?"ti-file-type-doc":t==="PowerPoint"?"ti-file-type-ppt":t==="Text"?"ti-file-text":"ti-file-description"}function P(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function _(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function E(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function Zt(e){if(!e)return"No time";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(t)}function Ue(e){const t=Math.max(0,Math.floor(q(e)/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60);return a?`${a}h ${String(n).padStart(2,"0")}m`:`${n}m`}function Pt(e){const t=q(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],n=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**n).toFixed(n?1:0)} ${a[n]}`}function De(e){return(t,a)=>Date.parse(a[e]||a.updated_at||a.created_at||0)-Date.parse(t[e]||t.updated_at||t.created_at||0)}function Ga(e){if(!e)return 0;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?0:Math.floor((ot().getTime()-t.getTime())/864e5)}function Xt(e){if(!e)return 999;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?999:Math.floor((t.getTime()-ot().getTime())/864e5)}function io(e=p()){const t=(Xe(Ze(e)||{short_name:e})||e||"QH").replace(/[^a-z]/gi,"").slice(0,2).toUpperCase()||"QH",a=ce(e).length+1;return`${t}-${String(1e3+a)}`}function ot(){const e=new Date;return e.setHours(0,0,0,0),e}function so(e,t){return`${Za(e,t)}%`}function Za(e,t){const a=q(t);return a?Math.max(0,Math.min(100,Math.round(q(e)/a*100))):0}function ge(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function Nt(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function B(e,t){return e.reduce((a,n)=>a+q(n[t]),0)}function q(e){const t=Number(e);return Number.isFinite(t)?t:0}function v(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(q(e))}function _e(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function M(e,t){const a=_e(e,t);return Array.isArray(a)&&a.length?a:t}function I(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
