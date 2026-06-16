(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const we={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},_e=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),Se="quest-hq-local-session",Na="quest-hq-local-profile",Jt="quest-hq-job-cache-v2",Bt="quest-hq-task-cache-v1",Ht="quest-hq-file-cache-v1",zt="quest-hq-drive-folder-cache-v1",Wt="quest-hq-team-cache-v1",Yt="quest-hq-company-membership-cache-v1",Ce="quest-hq-company-form-cache-v1",pt="quest-hq-company-form-response-cache-v1",Kt="quest-hq-finance-invoice-cache-v1",Gt="quest-hq-finance-payment-cache-v1",Zt="quest-hq-finance-expense-cache-v1",Xt="quest-hq-finance-vendor-cache-v1",mt="quest-hq-time-entry-cache-v1",ft="quest-hq-active-timer-v1",ne="quest-hq-active-company",Ua="quest-hq-task-view",Qa="quest-hq-drive-view",at={developer:["*"],admin:["*"],owner:["*"],manager:["jobs.view","jobs.manage","tasks.view","tasks.manage","files.view","files.manage","forms.view","forms.manage","finance.view","team.view","clock.manage","approvals.manage","approvals.view","users.view","settings.view","billing.view","roles.view"],member:["jobs.view","tasks.view","tasks.manage","files.view","forms.view","time.track","approvals.view","users.view"]},Wi=[["jobs.view","View jobs"],["jobs.manage","Create/edit jobs"],["tasks.view","View tasks"],["tasks.manage","Create/edit tasks"],["files.view","View files"],["files.manage","Upload/delete files"],["forms.view","View forms"],["forms.manage","Create/edit forms"],["crm.view","View CRM"],["finance.view","View finance"],["finance.manage","Create/edit finance"],["users.view","View users"],["users.manage","Invite/manage users"],["roles.view","View roles"],["roles.manage","Create/edit roles"],["billing.view","View billing"],["billing.manage","Manage subscription"],["settings.view","View settings"],["settings.manage","Manage settings"],["time.track","Track own time"],["clock.manage","Manage clock dashboard"],["approvals.view","View approvals"],["approvals.manage","Manage approvals"],["messages.view","View messages (planned)"],["messages.manage","Manage group chats (planned)"]],bt=[{id:"jobs",group:"Workspace",label:"Jobs",icon:"ti-briefcase",symbol:"q-symbol-jobs",status:"live",permission:"jobs.view"},{id:"tasks",group:"Workspace",label:"Tasks",icon:"ti-list-check",symbol:"q-symbol-tasks",status:"live",permission:"tasks.view"},{id:"files",group:"Workspace",label:"Files",icon:"ti-folder",symbol:"q-symbol-files",status:"live",permission:"files.view"},{id:"forms",group:"Workspace",label:"Forms",icon:"ti-clipboard-list",symbol:"q-symbol-forms",status:"live",permission:"forms.view"},{id:"analytics",group:"Workspace",label:"Analytics",icon:"ti-chart-bar",symbol:"q-symbol-analytics",status:"live",permission:"jobs.view"},{id:"crm",group:"Workspace",label:"CRM",icon:"ti-users-group",symbol:"q-symbol-crm",status:"live",permission:"crm.view"},{id:"tickets",group:"Workspace",label:"Tickets",icon:"ti-ticket",symbol:"q-symbol-tickets",status:"planned"},{id:"finance",group:"Workspace",label:"Finance",icon:"ti-receipt-dollar",symbol:"q-symbol-finance",status:"live",permission:"finance.view"},{id:"knowledge",group:"Workspace",label:"Knowledge Base",icon:"ti-books",symbol:"q-symbol-knowledge",status:"planned"},{id:"automations",group:"Workspace",label:"Automations",icon:"ti-automation",symbol:"q-symbol-automations",status:"planned"},{id:"templates",group:"Workspace",label:"Templates",icon:"ti-template",symbol:"q-symbol-templates",status:"planned"},{id:"users",group:"Company",label:"Users",icon:"ti-users",symbol:"q-symbol-users",status:"live",permission:"users.view"},{id:"messages",group:"Company",label:"Messages",icon:"ti-messages",symbol:"q-symbol-messages",status:"planned"},{id:"settings",group:"Company",label:"Settings",icon:"ti-settings",symbol:"q-symbol-settings",status:"live",permission:"settings.view"},{id:"team-chart",group:"Company",label:"Team chart",icon:"ti-hierarchy-3",symbol:"q-symbol-team-chart",status:"live",permission:"team.view"},{id:"time",group:"Operations",label:"My time",icon:"ti-clock",symbol:"q-symbol-time",status:"live",permission:"time.track"},{id:"approvals",group:"Operations",label:"Approvals",icon:"ti-user-check",symbol:"q-symbol-approvals",status:"live",permission:"approvals.view"},{id:"team-workload",group:"Operations",label:"Team workload",icon:"ti-users",symbol:"q-symbol-team-workload",status:"planned"},{id:"clock",group:"Operations",label:"Clock dashboard",icon:"ti-clock-hour-4",symbol:"q-symbol-clock",status:"live",permission:"clock.manage"}],Yi={"/admin.html":"settings","/automations.html":"automations","/crm.html":"crm","/dashboards.html":"analytics","/files.html":"files","/finance.html":"finance","/forms.html":"forms","/jobs.html":"jobs","/knowledge.html":"knowledge","/templates.html":"templates","/tickets.html":"tickets"},Re=["Lead","Site Review","Estimate","Approved","Active","Closed"],Va=["pipeline","list","profile"],Le=["todo","pending","hold","review","done"],it=["critical","urgent","high","medium","low"],Ja=["lead","bid","admin","invoicing","ar","meeting","web_dev"],Ki=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],ea=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],Ne=["Inspection","Client approval","Intake","Survey","Safety","Internal"],ta=["Draft","Published","Archived"],Ba=["Draft","Sent","Partially paid","Paid","Overdue","Void"],Ha=["Pending","Approved","Paid","Rejected"],za=["Active","On hold","Inactive"],Wa=["ACH","Check","Card","Cash","Wire","Other"],gt=["Materials","Labor","Subcontractor","Permit","Equipment","Marketing","Software","Travel","Other"],Ue=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],Qe=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],Ya=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],Ka=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"],supervisor_id:""},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"],supervisor_id:"abraham"},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"],supervisor_id:"maya"},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"],supervisor_id:"abraham"},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"],supervisor_id:""}],Ga=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],Za=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:k(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:k(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:k(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:k(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:k(5),priority:"medium",urgency:"medium",status:"todo"}],Xa=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],ei=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",creator_id:"abraham",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",creator_id:"maya",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",creator_id:"noah",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",creator_id:"lumen-ops",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],ti=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],ai=[{id:"vendor-roofing-materials",company_id:"roofing",name:"Valley Roofing Supply",contact_name:"Elena Ortiz",email:"orders@valleyroofingsupply.local",phone:"(480) 555-0190",category:"Materials",status:"Active",notes:"Primary tile, flashing, and underlayment vendor.",created_at:new Date(Date.now()-12096e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"vendor-roofing-dryin",company_id:"roofing",name:"Monsoon Dry-In Crew",contact_name:"R. Alvarez",email:"dispatch@monsoondryin.local",phone:"(602) 555-0144",category:"Subcontractor",status:"Active",notes:"Emergency dry-in support during storm calls.",created_at:new Date(Date.now()-10368e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"vendor-drafting-permits",company_id:"drafting",name:"Permit Runner AZ",contact_name:"Sofia Chen",email:"permits@runneraz.local",phone:"(602) 555-0171",category:"Permit",status:"Active",notes:"Permit filing support for drafting packets.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString()},{id:"vendor-lumen-software",company_id:"lumen",name:"Lumen SaaS Stack",contact_name:"Ops Billing",email:"billing@lumenstack.local",phone:"",category:"Software",status:"Active",notes:"Internal software subscriptions for client onboarding.",created_at:new Date(Date.now()-7776e5).toISOString(),updated_at:new Date(Date.now()-3456e5).toISOString()}],ii=[{id:"invoice-roofing-queen-creek",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",client_name:"Rosales Residence",invoice_number:"QR-1007",status:"Partially paid",issue_date:k(-10),due_date:k(5),subtotal:6800,tax:0,total:6800,notes:"Emergency leak repair billing with deposit received.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"invoice-roofing-mesa-storage",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",client_name:"Mesa Storage Partners",invoice_number:"QR-1008",status:"Sent",issue_date:k(-18),due_date:k(-2),subtotal:18400,tax:0,total:18400,notes:"Estimate packet sent to board for approval.",created_at:new Date(Date.now()-15552e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-drafting-horizon",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",client_name:"Horizon HVAC",invoice_number:"QD-2031",status:"Sent",issue_date:k(-7),due_date:k(14),subtotal:4200,tax:0,total:4200,notes:"Drafting permit package milestone invoice.",created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-lumen-onboarding",company_id:"lumen",job_id:"",client_name:"Lumen Internal Launch",invoice_number:"LM-3004",status:"Draft",issue_date:k(-3),due_date:k(27),subtotal:3200,tax:0,total:3200,notes:"Demo onboarding package used for finance workspace.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()}],ni=[{id:"payment-roofing-queen-creek-deposit",company_id:"roofing",invoice_id:"invoice-roofing-queen-creek",amount:2500,method:"ACH",received_at:k(-4),reference:"ACH-4421",notes:"Deposit received after dry-in visit.",created_at:new Date(Date.now()-3456e5).toISOString()},{id:"payment-drafting-horizon-retainer",company_id:"drafting",invoice_id:"invoice-drafting-horizon",amount:1e3,method:"Check",received_at:k(-1),reference:"CHK-117",notes:"Retainer collected before permit packet completion.",created_at:new Date(Date.now()-864e5).toISOString()}],si=[{id:"expense-roofing-queen-creek-materials",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",vendor_id:"vendor-roofing-materials",category:"Materials",amount:1850,status:"Approved",spent_at:k(-6),notes:"Underlayment, flashing, and tile replacement materials.",created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-roofing-mesa-permit",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",vendor_id:"vendor-roofing-materials",category:"Permit",amount:620,status:"Pending",spent_at:k(-2),notes:"Permit and document prep allowance.",created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString()},{id:"expense-drafting-horizon-runner",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",vendor_id:"vendor-drafting-permits",category:"Permit",amount:480,status:"Approved",spent_at:k(-3),notes:"Permit runner package review.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-lumen-software-stack",company_id:"lumen",job_id:"",vendor_id:"vendor-lumen-software",category:"Software",amount:540,status:"Paid",spent_at:k(-5),notes:"Client onboarding software stack.",created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()}],i={route:null,session:ue(Se,null),profileDraft:ue(Na,null),authReady:!1,authMode:"signin",jobs:T(Jt,Ya).map(ke),tasks:T(Bt,Za).map(je),files:T(Ht,Xa).map(Te),driveFolders:T(zt,[]).map(fa),forms:T(Ce,ei).map(Be),formResponses:T(pt,ti).map(ba),financeInvoices:T(Kt,ii).map(qt),financePayments:T(Gt,ni).map(It),financeExpenses:T(Zt,si).map(Ft),financeVendors:T(Xt,ai).map(Mt),timeEntries:ue(mt,[]),activeTimer:ue(ft,null),teamMembers:T(Wt,Ka).map(ga),memberships:T(Yt,Ga),profiles:[],subscriptions:[],roles:[],rolePermissions:[],roleAssignments:[],resourceAcl:[],fieldPermissions:[],companyInvites:[],joinRequests:[],auditEvents:[],companies:Fi(Qe.map(Je)),activeCompanyId:localStorage.getItem(ne)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",selectedFinanceInvoiceId:"",selectedFinanceExpenseId:"",selectedFinanceVendorId:"",expandedFormIds:new Set,formStartTemplateId:"",formStartTab:"blank",query:"",fileQuery:"",formQuery:"",crmQuery:"",stageFilter:"all",crmStageFilter:"all",crmOwnerFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(Ua)||"table",driveFolder:"home",driveView:localStorage.getItem(Qa)||"list",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",authMessage:"",toast:null,toastTimer:null,modal:"",accountMenuOpen:!1,rolePreview:null},vt=document.getElementById("app");let Et=null;Gi();function Gi(){yr(),window.addEventListener("popstate",u),document.addEventListener("click",Rs),document.addEventListener("submit",Us),document.addEventListener("input",tr),document.addEventListener("change",ar),Zi(),u()}async function Zi(){if(i.session?.auth==="local-basic"){ri(),i.authReady=!0;return}const e=R();if(!e?.auth){i.authReady=!0,i.loginError="Supabase auth is unavailable in this browser session.";return}try{const{data:t}=await e.auth.getSession();await Ae(t?.session||null),e.auth.onAuthStateChange((a,n)=>{Ae(n||null).finally(()=>{i.dataLoaded=!1,u()})})}catch(t){i.loginError=t.message||"Unable to initialize Supabase auth."}finally{i.authReady=!0,u()}}async function Ae(e){if(!e?.user){i.session=null,localStorage.removeItem(Se);return}const t=await Xi(e.user);i.session=Zr(e,t),rn(),x(Se,i.session)}async function Xi(e){const t={id:e.id,email:e.email||"",full_name:e.user_metadata?.full_name||e.email||"Quest user",role:"member",role_label:"Member",member_id:"",company_ids:[],avatar_url:"",approved:!1,email_verified:!!e.email_confirmed_at},a=R();if(!a)return t;const n=await a.from("profiles").select("*").eq("id",e.id).maybeSingle();return n.error||!n.data?t:va(n.data,t)}function u(){if(i.route=yt(),!i.authReady){an();return}if(tn(i.route)){w("/login?return_url="+encodeURIComponent(hr()),{replace:!0});return}if(i.route.name==="login"){ks();return}if(nn(),i.session?.auth==="supabase"&&i.dataLoaded&&!qe().length){en();return}const e=_r(i.route);if(e){w(e,{replace:!0});return}jr(i.route),bi(i.route),i.route.params.get("account")==="profile"&&(i.modal="profile"),document.title=`${$r(i.route)} | ${j(p())} | Quest HQ`,vt.innerHTML=ln(i.route,ci(i.route))}function en(){document.title="Company access pending | Quest HQ",vt.innerHTML=`
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Access pending</small></span>
        </div>
        <div>
          <div class="eyebrow">Tenant security</div>
          <h1>No active company access</h1>
          <p>Your account exists, but you are not an active member of a company workspace yet. Create your own workspace or request access from an existing company.</p>
        </div>
        <form data-company-create-form>
          <label>Company workspace<input name="company_name" placeholder="Example Roofing LLC" required /></label>
          <button class="btn btn-primary full" type="submit">Create company workspace</button>
          <div class="form-message">You will become the Owner for this workspace.</div>
        </form>
        <button class="btn full" type="button" data-action="sign-out">Sign out</button>
      </section>
    </main>
  `}function tn(e){return e.name==="login"?!1:!i.session}function an(){document.title="Loading | Quest HQ",vt.innerHTML=`
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Secure workspace</small></span>
        </div>
        ${v("Checking secure session...")}
      </section>
    </main>
  `}function nn(){i.dataLoaded||i.dataLoading||(i.dataLoading=!0,sn().catch(()=>{i.sync={label:"Local fallback",mode:"local"}}).finally(()=>{i.dataLoaded=!0,i.dataLoading=!1,Q(),u()}))}async function sn(){if(i.session?.auth==="local-basic"){i.sync={label:"Demo mode",mode:"local"};return}const e=R();if(!e){i.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,n,s,o,l,c,m,b,f,y,L,q,H,Ie,ce]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*"),e.from("profiles").select("*"),e.from("company_subscriptions").select("*"),e.from("roles").select("*").order("priority",{ascending:!1}),e.from("role_permissions").select("*"),e.from("user_role_assignments").select("*"),e.from("resource_acl").select("*"),e.from("field_permissions").select("*"),e.from("company_invites").select("*").order("created_at",{ascending:!1}),e.from("company_join_requests").select("*").order("created_at",{ascending:!1}),e.from("audit_events").select("*").order("created_at",{ascending:!1}).limit(100)]);let W=0;t.error||(i.companies=(t.data||[]).map(Je),W+=1),a.error||(i.jobs=(a.data||[]).map(ke),W+=1),n.error||(i.tasks=(n.data||[]).map(je),W+=1),s.error||(i.files=(s.data||[]).map(Te),W+=1),o.error||(i.teamMembers=(o.data||[]).map(ga),W+=1),l.error||(i.memberships=(l.data||[]).map(ct),W+=1),c.error||(i.profiles=(c.data||[]).map(zi=>va(zi)),W+=1),m.error||(i.subscriptions=(m.data||[]).map(Ur),W+=1),b.error||(i.roles=(b.data||[]).map(he),W+=1),f.error||(i.rolePermissions=(f.data||[]).map(Ut)),y.error||(i.roleAssignments=(y.data||[]).map(Mi)),L.error||(i.resourceAcl=(L.data||[]).map(Qr)),q.error||(i.fieldPermissions=(q.data||[]).map(Vr)),H.error||(i.companyInvites=(H.data||[]).map(dt)),Ie.error||(i.joinRequests=(Ie.data||[]).map(Ai)),ce.error||(i.auditEvents=ce.data||[]),i.sync=W?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function R(){return!window.supabase||typeof window.supabase.createClient!="function"?null:(Et||(Et=window.supabase.createClient(we.supabaseUrl,we.supabaseKey)),Et)}function rn(){i.jobs=[],i.tasks=[],i.files=[],i.driveFolders=[],i.forms=[],i.formResponses=[],i.financeInvoices=[],i.financePayments=[],i.financeExpenses=[],i.financeVendors=[],i.timeEntries=[],i.activeTimer=null,i.teamMembers=[],i.memberships=[],i.profiles=[],i.subscriptions=[],i.roles=[],i.rolePermissions=[],i.roleAssignments=[],i.resourceAcl=[],i.fieldPermissions=[],i.companyInvites=[],i.joinRequests=[],i.auditEvents=[],i.companies=[],i.sync={label:"Loading secure workspace...",mode:"loading"}}function ri(){i.jobs=T(Jt,Ya).map(ke),i.tasks=T(Bt,Za).map(je),i.files=T(Ht,Xa).map(Te),i.driveFolders=T(zt,[]).map(fa),i.forms=T(Ce,ei).map(Be),i.formResponses=T(pt,ti).map(ba),i.financeInvoices=T(Kt,ii).map(qt),i.financePayments=T(Gt,ni).map(It),i.financeExpenses=T(Zt,si).map(Ft),i.financeVendors=T(Xt,ai).map(Mt),i.timeEntries=ue(mt,[]),i.activeTimer=ue(ft,null),i.teamMembers=T(Wt,Ka).map(ga),i.memberships=T(Yt,Ga),i.profiles=[],i.subscriptions=[],i.roles=[],i.rolePermissions=[],i.roleAssignments=[],i.resourceAcl=[],i.fieldPermissions=[],i.companyInvites=[],i.joinRequests=[],i.auditEvents=[],i.companies=Fi(Qe.map(Je)),i.sync={label:"Demo mode",mode:"local"}}function on(){return`
    <svg class="svg-sprite" aria-hidden="true" focusable="false">
      <symbol id="q-logo" viewBox="0 0 32 32">
        <path d="M4 25V12.8L16 5l12 7.8V25h-6.2v-9.2H10.2V25H4Z" />
        <path d="M10.2 15.8 16 11.9l5.8 3.9" />
        <path d="M12 21h8" />
      </symbol>
      <symbol id="q-company" viewBox="0 0 24 24">
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M8 20v-7h8v7" />
        <path d="M9 9h.1M12 8h.1M15 9h.1" />
      </symbol>
      <symbol id="q-search" viewBox="0 0 24 24">
        <circle cx="10.8" cy="10.8" r="6.3" />
        <path d="m16 16 4.3 4.3" />
      </symbol>
      <symbol id="q-empty" viewBox="0 0 24 24">
        <path d="M5 18.5V7.7L12 4l7 3.7v10.8" />
        <path d="M8 12h8M9.5 15h5" />
      </symbol>
      <symbol id="q-symbol-jobs" viewBox="0 0 24 24">
        <path d="M5 20V8h14v12H5Z" />
        <path d="M9 8V5h6v3M8 12h8M8 16h5" />
      </symbol>
      <symbol id="q-symbol-tasks" viewBox="0 0 24 24">
        <path d="M6 7h12M6 12h12M6 17h12" />
        <path d="m4 7 .9.9L6.4 6.4M4 12l.9.9 1.5-1.5M4 17l.9.9 1.5-1.5" />
      </symbol>
      <symbol id="q-symbol-files" viewBox="0 0 24 24">
        <path d="M4 19.5V6h6l2 2h8v11.5H4Z" />
        <path d="M4 10h16" />
      </symbol>
      <symbol id="q-symbol-forms" viewBox="0 0 24 24">
        <path d="M7 4h10v16H7V4Z" />
        <path d="M9.5 8h5M9.5 12h5M9.5 16h3" />
      </symbol>
      <symbol id="q-symbol-analytics" viewBox="0 0 24 24">
        <path d="M5 19V5" />
        <path d="M5 19h14" />
        <path d="M8 16v-4M12 16V8M16 16v-6" />
      </symbol>
      <symbol id="q-symbol-crm" viewBox="0 0 24 24">
        <circle cx="9" cy="9" r="3" />
        <path d="M3.8 19c.8-3 2.5-4.5 5.2-4.5s4.4 1.5 5.2 4.5" />
        <path d="M15.5 8.2a2.7 2.7 0 1 1 0 5.4M16.8 15.2c1.8.6 3 1.9 3.6 3.8" />
      </symbol>
      <symbol id="q-symbol-tickets" viewBox="0 0 24 24">
        <path d="M4 8.5h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4v-3Z" />
        <path d="M9 9v10" />
      </symbol>
      <symbol id="q-symbol-finance" viewBox="0 0 24 24">
        <path d="M6 4h12v16H6V4Z" />
        <path d="M9 8h6M9 12h6M9 16h3" />
        <path d="M15.5 14.5c0 1.4-1 2.5-3.2 2.5" />
      </symbol>
      <symbol id="q-symbol-knowledge" viewBox="0 0 24 24">
        <path d="M5 5.5c2.8-.8 5-.4 7 1.2 2-1.6 4.2-2 7-1.2V19c-2.8-.8-5-.4-7 1.2-2-1.6-4.2-2-7-1.2V5.5Z" />
        <path d="M12 6.7v13.5" />
      </symbol>
      <symbol id="q-symbol-automations" viewBox="0 0 24 24">
        <path d="M7 8a4 4 0 0 1 8 0c0 3-4 3.5-4 7" />
        <path d="M9 20h4M10 17h2M16.5 13.5l3 3M20 13l-3.5 3.5" />
      </symbol>
      <symbol id="q-symbol-templates" viewBox="0 0 24 24">
        <path d="M5 5h14v14H5V5Z" />
        <path d="M5 10h14M10 10v9" />
      </symbol>
      <symbol id="q-symbol-users" viewBox="0 0 24 24">
        <circle cx="8.5" cy="9" r="3" />
        <circle cx="16" cy="10" r="2.5" />
        <path d="M3.8 19c.8-3 2.3-4.5 4.7-4.5s3.9 1.5 4.7 4.5M13.4 15.3c2.6 0 4.2 1.2 4.8 3.7" />
      </symbol>
      <symbol id="q-symbol-messages" viewBox="0 0 24 24">
        <path d="M4.5 6.5h15v9.5h-8l-4.5 3v-3H4.5v-9.5Z" />
        <path d="M8 10h8M8 13h5" />
      </symbol>
      <symbol id="q-symbol-settings" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.8v2.4M12 17.8v2.4M4.9 6l1.7 1.7M17.4 16.3l1.7 1.7M3.8 12h2.4M17.8 12h2.4M4.9 18l1.7-1.7M17.4 7.7 19.1 6" />
      </symbol>
      <symbol id="q-symbol-team-chart" viewBox="0 0 24 24">
        <path d="M12 5v5M7 15v4M17 15v4M7 15h10M12 10h-5v5M12 10h5v5" />
        <circle cx="12" cy="4" r="2" />
        <circle cx="7" cy="20" r="2" />
        <circle cx="17" cy="20" r="2" />
      </symbol>
      <symbol id="q-symbol-time" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.5V12l3 2" />
      </symbol>
      <symbol id="q-symbol-approvals" viewBox="0 0 24 24">
        <path d="M5 12.5 9.2 17 19 7" />
        <path d="M5 5h14v14H5V5Z" />
      </symbol>
      <symbol id="q-symbol-team-workload" viewBox="0 0 24 24">
        <path d="M4 18c.7-2.7 2.1-4 4.2-4s3.5 1.3 4.2 4M12.5 18c.7-2.7 2.1-4 4.2-4s3.5 1.3 4.2 4" />
        <circle cx="8.2" cy="9" r="3" />
        <circle cx="16.7" cy="9" r="3" />
      </symbol>
      <symbol id="q-symbol-clock" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 6.8v5.4l3.7 2.1" />
        <path d="M5 4.8 3.5 6.3M19 4.8l1.5 1.5" />
      </symbol>
    </svg>
  `}function G(e,t="symbol-icon"){return`<svg class="${r(t)}" aria-hidden="true" focusable="false"><use href="#${r(e)}"></use></svg>`}function oi(e=i.route?.section||"jobs"){return bt.find(t=>t.id===e)?.symbol||"q-empty"}function li(e){const t=String(e||"").toLowerCase();return t.includes("job")||t.includes("pipeline")?"q-symbol-jobs":t.includes("task")||t.includes("review")?"q-symbol-tasks":t.includes("file")?"q-symbol-files":t.includes("form")?"q-symbol-forms":t.includes("account")||t.includes("customer")||t.includes("member")||t.includes("user")||t.includes("lead")?"q-symbol-crm":t.includes("invoice")||t.includes("collected")||t.includes("expense")||t.includes("net")||t.includes("outstanding")?"q-symbol-finance":t.includes("time")||t.includes("today")||t.includes("days")||t.includes("timer")||t.includes("entries")?"q-symbol-clock":t.includes("approval")||t.includes("access")?"q-symbol-approvals":oi()}function ln(e,t){const a=D(),n=p(),s=Xr(a);return`
    <div class="quest-app" data-route="${r(e.name)}">
      ${on()}
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${g(d("jobs",{},n))}" data-router aria-label="Quest HQ workspace">
            ${G("q-logo","brand-symbol")}
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${r(we.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            ${G("q-company")}
            <select data-company-switch aria-label="Active company">
              ${qi().map(o=>`<option value="${r(o.id)}" ${o.id===n?"selected":""}>${r(kt(o))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            ${G("q-search")}
            <input data-global-search value="${r(i.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${r(i.sync.mode)}" data-sync-state>${r(i.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          <div class="account-menu ${i.accountMenuOpen?"open":""}">
            <button class="avatar-button" type="button" data-action="toggle-account-menu" aria-label="Open account menu" aria-expanded="${i.accountMenuOpen?"true":"false"}">
              ${He(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${r(a.profile.full_name)}</strong>
              <span>${r(a.profile.role_label)} - ${r(j(n))}</span>
              ${s?"":`
                <div class="account-status warning">
                  <b>Email unverified</b>
                  <button type="button" data-action="verify-email">Click here to verify</button>
                </div>
              `}
              <button type="button" data-action="open-profile"><i class="ti ti-user-circle"></i>Profile</button>
              <button type="button" data-action="sign-out"><i class="ti ti-logout"></i>Sign out</button>
            </div>
          </div>
        </div>
      </header>
      ${cn(n)}
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${dn(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${qs(e,a)}
    ${Is()}
  `}function cn(e){const t=ht(e);return t?`
    <div class="role-preview-banner" style="--role-color:${r(t.color)}">
      <span></span>
      <div>
        <strong>Viewing as ${r(t.name)}</strong>
        <small>Permission preview only. Your real account has not changed.</small>
      </div>
      <button class="btn" type="button" data-action="exit-role-preview"><i class="ti ti-eye-off"></i>Exit preview</button>
    </div>
  `:""}function dn(e){const t=p();return`
    <div class="company-card">
      <span class="company-card-symbol" style="--company-accent:${r(re(t))}">${G("q-company")}</span>
      <div>
        <strong>${r(j(t))}</strong>
        <small>${r(jt(t))} workspace</small>
      </div>
    </div>
    ${["Workspace","Company","Operations"].map(a=>un(a,bt.filter(n=>n.group===a&&fn(n,t)).map(n=>n.status==="planned"?mn(n.symbol,n.label):pn(e,d(n.id,{},t),n.symbol,n.label,bn(n.id,t))))).join("")}
  `}function un(e,t){return`
    <section class="side-group">
      <div class="side-label">${r(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function pn(e,t,a,n,s=""){return`
    <a class="side-item ${wr(e,t)?"active":""}" href="${g(t)}" data-router>
      ${G(a)}
      <span>${r(n)}</span>
      ${s!==""?`<b>${r(String(s))}</b>`:""}
    </a>
  `}function mn(e,t){return`
    <button class="side-item planned" type="button" disabled aria-disabled="true">
      ${G(e)}
      <span>${r(t)}</span>
      <b>Planned</b>
    </button>
  `}function fn(e,t=p()){return e.status==="planned"?!0:!ma(t)&&!["settings","users"].includes(e.id)?!1:ua(e.permission||`${e.id}.view`,t)}function bn(e,t=p()){return e==="jobs"?O(t).length:e==="tasks"?z(t).length:e==="files"?me(t).length:e==="forms"?oe(t).length:e==="crm"?$t(t).length:e==="finance"?be(t).length:e==="users"?se(t).length:e==="time"?_i(t).focus.length:e==="approvals"?hi(t).length:e==="clock"&&wt(t)?"On":""}function aa(e,t){return`
    <nav class="tabbar compact-tabbar" aria-label="${r(e)}">
      ${t.map(([a,n,s])=>`<a class="${s?"active":""}" href="${g(a)}" data-router>${r(n)}</a>`).join("")}
    </nav>
  `}function ci(e){if(e.name==="command")return yn(p());if(e.name!=="company")return Ia(e.name);const t=e.companyId,a=bt.find(n=>n.id===e.section);if(a?.status!=="planned"){if(!ma(t)&&!["settings","users"].includes(e.section))return gn(t);if(a?.permission&&!ua(a.permission,t))return vn(t,a.permission)}return e.section==="jobs"?hn(e,t):e.section==="tasks"?jn(e,t):e.section==="files"?Fn(e,t):e.section==="users"?Vn(e,t):e.section==="settings"?Wn(e,t):e.section==="forms"?Xn(t):e.section==="analytics"?_n(e,t):e.section==="crm"?us(e,t):e.section==="finance"?ms(e,t):e.section==="team-chart"?zn(t):e.section==="time"||e.section==="approvals"||e.section==="clock"?hs(e,t):Ia(e.section)}function gn(e){return`
    ${V("Subscription required","This company workspace needs an active or trialing subscription before paid modules can open.",`
      <a class="btn btn-primary" href="${g(d("settings",{tab:"billing"},e))}" data-router><i class="ti ti-credit-card"></i>Billing</a>
    `)}
    <section class="panel">
      ${N([["Company",j(e)],["Subscription",Ii(e)],["Allowed area","Billing and settings remain available to owners/admins"]])}
    </section>
  `}function vn(e,t){return`
    ${V("Access denied","Your role does not include the permission required for this module.",`
      <a class="btn" href="${g(d("settings",{tab:"roles"},e))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
    `)}
    <section class="panel">
      ${N([["Company",j(e)],["Required permission",t],["Your role",jt(e)]])}
    </section>
  `}function yn(e){const t=O(e),a=z(e),n=a.filter(o=>["critical","urgent"].includes(o.priority)),s=me(e);return`
    ${V("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${g(d("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${g(d("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    `)}
    ${eo([["Jobs",t.length],["Open tasks",a.filter(o=>o.status!=="done").length],["Urgent tasks",n.length],["Drive files",s.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${g(d("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(o=>At(o)).join("")||v("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${N([["Company",j(e)],["Visible users",se(e).length],["Auth mode","Supabase auth"],["RLS status","Ready for enforcement"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(o=>to(o)).join("")||v("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function _n(e,t){const a=e.jobId?C(e.jobId):null,n=a?[a]:O(t),s=z(t).filter(f=>!a||f.project_id===a.id),o=me(t).filter(f=>!a||f.job_id===a.id),l=oe(t).filter(f=>!a||f.linked_job_id===a.id),c=s.filter(f=>f.status!=="done"),m=s.filter(f=>f.status!=="done"&&f.due&&new Date(f.due)<Tt()),b=K(n,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${r(a?a.name:j(t))}</span>
        </div>
        <label>
          <span>Job</span>
          <select data-analytics-job-filter>
            <option value="">All jobs</option>
            ${O(t).map(f=>`<option value="${r(f.id)}" ${a?.id===f.id?"selected":""}>${r(f.name)}</option>`).join("")}
          </select>
        </label>
        <a class="btn" href="${g(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      </section>
      <section class="analytics-grid">
        <article class="panel analytics-score">
          <span>Open work</span>
          <strong>${r(c.length)}</strong>
          <small>${r(m.length)} overdue / ${r(s.filter(f=>f.priority==="urgent"||f.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${r(_(b))}</strong>
          <small>${r(n.length)} visible job${n.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${r(o.length+l.length)}</strong>
          <small>${r(o.length)} files / ${r(l.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${r(Ao(s.filter(f=>f.status==="done").length,s.length))}</strong>
          <small>${r(s.filter(f=>f.status==="done").length)} done of ${r(s.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${n.map(f=>`
              <a class="analytics-row" href="${g(d("analytics",{job_id:f.id},t))}" data-router>
                <span><strong>${r(f.name)}</strong><small>${r(f.client_name||j(t))}</small></span>
                <span>${r(f.stage)}</span>
                <span>${r(Dt(f.id))}</span>
                <span>${r(lt(f.id))}</span>
                <span>${r(_(f.estimate_total))}</span>
              </a>
            `).join("")||v("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${Le.map(f=>{const y=s.filter(L=>L.status===f).length;return`<div><span>${r(le(f))}</span><b><i style="width:${r(Hi(y,s.length))}%"></i></b><strong>${r(y)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${s.filter(f=>f.status!=="done").sort((f,y)=>De(y.priority)-De(f.priority)).slice(0,8).map(f=>At(f)).join("")||v("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function hn(e,t){const a=Sr(e.params.get("tab")),n=pe();return`
    ${V("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${g(d("files",n?{job_id:n.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(Re).map(s=>`<option value="${r(s)}" ${i.stageFilter===s?"selected":""}>${r(s==="all"?"All stages":s)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${n?r(n.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${Va.map(s=>`<a class="${s===a?"active":""}" href="${g(d("jobs",{tab:s,...n?{job_id:n.id}:{}},t))}" data-router>${r(kr(s))}</a>`).join("")}
    </nav>
    ${$n(a,t,n)}
  `}function $n(e,t,a){return e==="pipeline"?ka(t):e==="list"?wn(t):e==="profile"?Sn(t,a):ka(t)}function ka(e){const t=yi(e);return`
    <section class="job-board">
      ${Re.map(a=>{const n=t.filter(s=>s.stage===a);return`
          <article class="job-lane">
            <h2><span>${r(a)}</span><b>${n.length}</b></h2>
            ${n.map(s=>ao(s)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function wn(e){const t=yi(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===i.selectedJobId?"active":""}" type="button" data-select-job="${r(a.id)}">
            <span><strong>${r(a.name)}</strong><small>${r(a.client_name||"No client")} - ${r(a.site_address||"No address")}</small></span>
            <span>${r(a.stage)}</span>
            <span>${ya(a.priority)}</span>
            <span>${r(a.owner_name||"Unassigned")}</span>
            <span>${r(Dt(a.id))}</span>
            <span>${_(a.estimate_total)}</span>
          </button>
        `).join("")||v("No jobs match this view.")}
      </div>
    </section>
  `}function Sn(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${r(j(e))} - ${r(t.job_type)}</span>
          <h2>${r(t.name)}</h2>
          <p>${r(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${N([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",_(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${g(d("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${r(t.id)}">Edit job</button>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${Ge(d("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${Dt(t.id)} linked tasks`)}
          ${Ge(d("files",{job_id:t.id},e),"ti-folder","Files",`${lt(t.id)} files`)}
          ${Ge(d("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${Ge(d("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:v("Create a job to see the profile workspace.")}function kn(e,t){const a=t||Jr(e);return`
    <form class="job-editor" data-job-form>
      <input type="hidden" name="id" value="${r(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${S("Workspace name","name",a.name,!0)}
      ${P("Company","company_id",e,qi().map(n=>[n.id,kt(n)]))}
      ${S("Client","client_name",a.client_name)}
      ${S("Contact","contact_name",a.contact_name)}
      ${S("Account owner","owner_name",a.owner_name)}
      ${S("Job type","job_type",a.job_type||"Roofing")}
      ${P("Business status","stage",a.stage||"Lead",Re.map(n=>[n,n]))}
      ${P("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(n=>[n,n]))}
      ${S("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${S("Invoice total","invoice_total",a.invoice_total||0,!1,"number")}
      ${S("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${ie("Scope","scope",a.scope,"span-2")}
      ${ie("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${r(t.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function jn(e,t){const a=e.jobId?C(e.jobId):null,n=Nr(t,a?.id);return`
    ${V(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${g(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${g(d("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${Dn(t,a)}
    <section class="task-layout task-layout-flat">
      <article class="panel task-main">
        ${i.taskView==="board"?qn(t,n):Cn(t,n)}
      </article>
    </section>
  `}function Dn(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${O(e).map(n=>`<option value="${r(n.id)}" ${t?.id===n.id?"selected":""}>${r(n.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(Le).map(n=>`<option value="${r(n)}" ${i.taskStatusFilter===n?"selected":""}>${r(n==="all"?"All statuses":le(n))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(it).map(n=>`<option value="${r(n)}" ${i.taskPriorityFilter===n?"selected":""}>${r(n==="all"?"All priorities":M(n))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${i.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${i.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function Cn(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===i.selectedTaskId?"active":""}" type="button" data-select-task="${r(a.id)}">
          <span><strong>${r(a.title)}</strong><small>${r(a.description||ze(a.type))}</small></span>
          <span>${r(C(a.project_id)?.name||"Company task")}</span>
          <span>${r(B(a.assignee_id))}</span>
          <span>${xi(a.priority)}</span>
          <span>${Ti(a.status)}</span>
          <span>${A(a.due)}</span>
        </button>
      `).join("")||v("No tasks match this workspace view.")}
    </div>
  `}function qn(e,t){return`
    <div class="task-board">
      ${Le.map(a=>{const n=t.filter(s=>s.status===a);return`
          <section class="task-column">
            <h2><span>${r(le(a))}</span><b>${n.length}</b></h2>
            ${n.map(s=>`
              <button class="task-card priority-${r(s.priority)}" type="button" data-select-task="${r(s.id)}">
                <strong>${r(s.title)}</strong>
                <span>${r(C(s.project_id)?.name||j(e))}</span>
                <small>${r(B(s.assignee_id))} - ${A(s.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function In(e,t){return t?`
    <div class="section-head">
      <div><h2>${r(t.title)}</h2><p>${r(C(t.project_id)?.name||j(e))}</p></div>
      <a class="btn" href="${g(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${N([["Status",le(t.status)],["Priority",M(t.priority)],["Type",ze(t.type)],["Assignee",B(t.assignee_id)],["Due",A(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${r(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${v("No task selected.")}
    `}function ja(e,t,a){const n=a||Br(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${r(a?n.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${S("Task title","title",n.title,!0)}
      ${P("Job","project_id",n.project_id||"",[["","Company-level task"]].concat(O(e).map(s=>[s.id,s.name])))}
      ${P("Status","status",n.status,Le.map(s=>[s,le(s)]))}
      ${P("Priority","priority",n.priority,it.map(s=>[s,M(s)]))}
      ${P("Type","type",n.type,Ja.map(s=>[s,ze(s)]))}
      ${P("Assignee","assignee_id",n.assignee_id,se(e).map(s=>[s.id,B(s.id)]))}
      ${S("Due date","due",n.due||k(1),!0,"date")}
      ${ie("Description","description",n.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${r(a.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function Fn(e,t){const a=e.params.get("folder")||i.driveFolder||"home";i.driveFolder=a;const n=e.jobId?C(e.jobId):null,s=oo(t,a,n?.id||"");return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div class="drive-location">
            <span class="drive-logo"><i class="ti ti-folder"></i></span>
            <div>
              <strong>${r(n?n.name:"Company Drive")}</strong>
              <small>${r(n?`${n.client_name||j(t)} file workspace`:`${j(t)} file manager`)}</small>
            </div>
          </div>
          <label class="drive-search">
            <i class="ti ti-search"></i>
            <input data-file-search value="${r(i.fileQuery)}" placeholder="Search drive" />
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
                <a href="${g(d("files",{},t))}" data-router>${r(j(t))}</a>
                ${a!=="home"?ro(t,a,n):""}
                ${n?`<span>/</span><strong>${r(n.name)}</strong>`:""}
              </nav>
              <div class="drive-compact-controls">
                <div class="segmented" role="group" aria-label="Drive view">
                  <button class="${i.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Icons</button>
                  <button class="${i.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list-details"></i>Details</button>
                </div>
              </div>
            </section>
            ${Mn(t,a,n,s)}
          </div>
        </div>
      </section>
    </section>
  `}function Mn(e,t,a,n){const s=no(e,t,a),o=s.map(c=>({kind:"folder",...c})).concat(n.map(c=>({kind:"file",file:c}))),l=a?a.name:t==="home"?"This folder":ee(t);return`
    <section class="drive-section-title">
      <div><h3>${r(l)}</h3><span>${s.length} folder${s.length===1?"":"s"} / ${n.length} file${n.length===1?"":"s"}</span></div>
    </section>
    ${i.driveView==="list"?An(o):xn(o)}
  `}function An(e){return`
    <div class="explorer-table" role="table" aria-label="File explorer">
      <div class="explorer-head" role="row">
        <span>Name</span>
        <span>Date modified</span>
        <span>Type</span>
        <span>Size</span>
      </div>
      ${e.map(t=>t.kind==="folder"?En(t):On(t.file)).join("")||v("This folder is empty.")}
    </div>
  `}function xn(e){return`
    <section class="drive-folder-grid explorer-grid">
      ${e.map(t=>t.kind==="folder"?Tn(t):Rn(t.file)).join("")||v("This folder is empty.")}
    </section>
  `}function Tn(e){return`
    <a class="drive-folder-card explorer-folder" href="${r(e.href)}" data-router>
      <span class="drive-folder-icon"><i class="ti ${r(e.icon||"ti-folder")}"></i></span>
      <strong>${r(e.name)}</strong>
      <em>${r(e.countLabel||"0 items")}</em>
    </a>
  `}function En(e){return`
    <a class="explorer-row folder-row-live" href="${r(e.href)}" data-router role="row">
      <span class="explorer-name"><span class="file-type folder"><i class="ti ${r(e.icon||"ti-folder")}"></i></span><strong>${r(e.name)}</strong></span>
      <span>${r(e.updatedLabel||"")}</span>
      <span>Folder</span>
      <span>${r(e.countLabel||"")}</span>
    </a>
  `}function On(e){return`
    <button type="button" class="explorer-row ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${r(e.id)}" role="row">
      <span class="explorer-name">${Pn(e)}<strong>${r(e.file_name)}</strong></span>
      <span>${A(e.updated_at||e.created_at)}</span>
      <span>${r(ve(e))}</span>
      <span>${$a(e.size_bytes)}</span>
    </button>
  `}function Pn(e){return`
    <span class="file-type ${r(_a(e))}">
      <i class="ti ${r(Ji(e))}"></i>
      <small>${r(lo(e))}</small>
    </span>
  `}function Rn(e){return`
    <button type="button" class="file-card-live ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${r(e.id)}">
      <span class="file-thumb">${ha(e)}</span>
      <strong>${r(e.file_name)}</strong>
      <span>${r(ve(e))} / ${$a(e.size_bytes)}</span>
    </button>
  `}function Ln(e,t){return`
    <section class="file-viewer-layout">
      <div class="file-viewer-stage">
        ${Nn(e)}
      </div>
      <aside class="file-viewer-meta">
        <div class="file-open-head">
          ${ha(e)}
          <div>
            <strong>${r(e.file_name)}</strong>
            <span>${r(ve(e))} / ${$a(e.size_bytes)}</span>
          </div>
        </div>
        <div class="file-detail-list">
          ${de("Location",ee(e.folder))}
          ${de("Job",C(e.job_id)?.name||"Company shared")}
          ${de("Uploaded by",e.uploaded_by_label||"Quest HQ")}
          ${de("Modified",A(e.updated_at||e.created_at))}
          ${de("Storage",e.object_path||"Metadata only")}
        </div>
        <div class="file-detail-actions">
          <button class="btn" type="button" data-action="download-file" data-file-id="${r(e.id)}"><i class="ti ti-download"></i>Download</button>
          <button class="btn danger" type="button" data-action="delete-file" data-file-id="${r(e.id)}"><i class="ti ti-trash"></i>Delete</button>
        </div>
      </aside>
    </section>
  `}function Nn(e){const t=_a(e);return e.signed_url&&t==="image"?`<img class="file-preview-media" src="${r(e.signed_url)}" alt="" />`:e.signed_url&&t==="pdf"?`<iframe class="file-preview-frame" src="${r(e.signed_url)}" title="${r(e.file_name)}"></iframe>`:e.signed_url&&t==="text"?`<iframe class="file-preview-frame text" src="${r(e.signed_url)}" title="${r(e.file_name)}"></iframe>`:["doc","sheet"].includes(t)&&e.signed_url?`<iframe class="file-preview-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.signed_url)}" title="${r(e.file_name)}"></iframe>`:`
    <div class="file-preview-empty">
      ${ha(e,!0)}
      <strong>${r(ve(e))} preview</strong>
      <p>${r(e.object_path?"Preview will load when a signed file URL is available.":"This is a metadata-only file record. Upload the actual file object to preview it here.")}</p>
      ${e.notes?`<pre>${r(e.notes)}</pre>`:""}
    </div>
  `}function Un(){const e=p(),t=i.route||yt(),a=t.params.get("folder")||i.driveFolder||"home",n=t.jobId?C(t.jobId):null;return I("Drive","New folder",`
    <form class="compact-tool-form" data-folder-form>
      <label><span>Folder name</span><input name="name" placeholder="Folder name" required autofocus /></label>
      <input type="hidden" name="company_id" value="${r(e)}" />
      <input type="hidden" name="parent_key" value="${r(Oi(a,n))}" />
      <div class="file-upload-log">
        <strong>Location</strong>
        <span>${r(a==="home"?j(e):n?.name||ee(a))}</span>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create folder</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"task-modal")}function Qn(){const e=p(),t=i.route?.params?.get("folder")||(i.driveFolder==="home"?"shared":i.driveFolder),a=i.route?.jobId||"";return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">${r(j(e))} Drive</div><h2 id="upload-title">Upload files</h2></div>
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
          ${S("Metadata-only file name","file_name","")}
          ${P("Folder","folder",t,Io(e))}
          ${P("Job","job_id",a,[["","Company shared file"]].concat(O(e).map(n=>[n.id,n.name])))}
          ${P("Category","category",ee(t),Ki.filter(n=>n!=="All categories").map(n=>[n,n]))}
          ${S("Uploaded by","uploaded_by_label",D().profile.full_name||"Quest HQ")}
          ${ie("Notes","notes","","span-2")}
          <div class="form-actions span-2">
            <button class="btn btn-primary" type="submit">Upload to drive</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
            <button class="btn" type="reset">Clear</button>
          </div>
          <div class="file-upload-log span-2">
            <strong>Upload target</strong>
            <span>${r(e)}/${r(a?`jobs/${a}`:t)}</span>
          </div>
        </form>
      </div>
    </div>
  `}function Vn(e,t){const a=Fr(t),n=["members","access"].includes(e.params.get("tab"))?e.params.get("tab"):"members",s=i.joinRequests.filter(l=>l.company_id===t&&l.status==="pending"),o=ua("users.manage",t);return`
    ${V("Users","Company members, roles, workers, and access context.",`
      <button class="btn btn-primary" type="button" data-action="open-invite-form" ${o?"":"disabled"}><i class="ti ti-user-plus"></i>Invite user</button>
      <a class="btn" href="${g(d("settings",{tab:"roles"},t))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
      <a class="btn" href="${g(d("settings",{tab:"access"},t))}" data-router><i class="ti ti-settings"></i>Access settings</a>
    `)}
    ${aa("Users sections",[[d("users",{tab:"members"},t),"Members",n==="members"],[d("users",{tab:"access"},t),"Access",n==="access"]])}
    ${n==="members"?`
      <section class="metric-grid operations-metrics">
        ${$("Active users",a.filter(l=>l.status==="active").length)}
        ${$("Pending",a.filter(l=>l.status!=="active").length+s.length)}
        ${$("Roles",fe(t).length)}
      </section>
      <section class="users-grid">
        ${a.map(l=>`
          <article class="user-card ${l.status!=="active"?"muted":""}">
            ${He({full_name:nt(l),email:l.email,avatar_url:l.avatar_url},"avatar")}
            <div>
              <strong>${r(nt(l))}</strong>
              <span>${r(di(l))}</span>
              <small>${r(l.role_label)} / ${r(M(l.status))}</small>
            </div>
          </article>
        `).join("")||v("No users assigned to this company yet.")}
      </section>
    `:`
    <section class="dashboard-grid compact-settings-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Member access</h2><p>Assign roles and confirm each user's company status.</p></div>
        </div>
        <div class="access-user-list">
          ${a.map(l=>Jn(t,l,o)).join("")||v("No users assigned to this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head">
          <div><h2>Invites</h2><p>Copy a secure invite code or link for a specific email address.</p></div>
          <button class="btn btn-primary" type="button" data-action="open-invite-form" ${o?"":"disabled"}><i class="ti ti-user-plus"></i>Invite</button>
        </div>
        <div class="access-invite-list">
          ${Mr(t).map(l=>Hn(l,o)).join("")||v("No pending invites.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Approve requests into this company workspace or reject them.</p></div></div>
        <div class="access-request-list">
          ${s.map(l=>Bn(l,o)).join("")||v("No pending join requests.")}
        </div>
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Access model</h2><p>Membership is company-scoped; UI hiding is convenience, RLS is the real privacy layer.</p></div></div>
        ${N([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Supabase Auth + RLS"],["Your role",jt(t)],["Can manage users",o?"Yes":"No"]])}
      </article>
    </section>
    `}
  `}function Jn(e,t,a){const n=fe(e),s=t.role_id||Lt(e,t.role)||n[0]?.id||"";return`
    <article class="access-user-row">
      ${He({full_name:nt(t),email:t.email,avatar_url:t.avatar_url},"avatar")}
      <div class="access-user-main">
        <strong>${r(nt(t))}</strong>
        <span>${r(di(t))} / ${r(M(t.status))}</span>
      </div>
      <form class="access-role-form" data-user-role-form>
        <input type="hidden" name="company_id" value="${r(e)}" />
        <input type="hidden" name="profile_id" value="${r(t.profile_id)}" />
        <select name="role_id" ${a&&t.profile_id?"":"disabled"}>
          ${n.map(o=>`<option value="${r(o.id)}" ${o.id===s?"selected":""}>${r(o.name)}</option>`).join("")}
        </select>
        <select name="membership_status" ${a&&t.profile_id?"":"disabled"}>
          ${["active","pending","disabled"].map(o=>`<option value="${r(o)}" ${o===t.status?"selected":""}>${r(M(o))}</option>`).join("")}
        </select>
        <button class="btn" type="submit" ${a&&t.profile_id?"":"disabled"}>Save</button>
      </form>
    </article>
  `}function Bn(e,t){const a=e.requested_email||vi(e.profile_id)?.email||e.profile_id||"Requester";return`
    <article class="access-request-row">
      <div>
        <strong>${r(a)}</strong>
        <span>${r(e.message||"Access request")} / ${A(e.created_at)}</span>
      </div>
      <div>
        <button class="btn btn-primary" type="button" data-action="approve-join-request" data-request-id="${r(e.id)}" ${t?"":"disabled"}>Approve</button>
        <button class="btn danger" type="button" data-action="reject-join-request" data-request-id="${r(e.id)}" ${t?"":"disabled"}>Reject</button>
      </div>
    </article>
  `}function Hn(e,t){const a=Ve(e.company_id,e.role_id),n=e.expires_at&&Date.parse(e.expires_at)<Date.now();return`
    <article class="access-invite-row ${n?"muted":""}">
      <div>
        <strong>${r(e.email)}</strong>
        <span>${r(a?.name||"Member")} / ${n?"Expired":`Expires ${A(e.expires_at)}`}</span>
        ${e.token?`<code class="invite-code">${r(e.token)}</code>`:""}
      </div>
      <div>
        <button class="btn" type="button" data-action="copy-invite-code" data-invite-id="${r(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-key"></i>Copy code</button>
        <button class="btn" type="button" data-action="copy-invite-link" data-invite-id="${r(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-link"></i>Copy link</button>
        <button class="btn danger" type="button" data-action="revoke-invite" data-invite-id="${r(e.id)}" ${t?"":"disabled"}>Revoke</button>
      </div>
    </article>
  `}function nt(e){const t=String(e.name||"").trim(),a=String(e.email||"").trim();if(t&&!Vt(t))return t;if(a&&!Vt(a))return a.split("@")[0].replace(/[._-]+/g," ").replace(/\b\w/g,s=>s.toUpperCase());const n=String(e.role||"").toLowerCase();return n==="owner"?"Workspace owner":n==="admin"?"Workspace admin":n==="developer"?"Developer":`${e.role_label||"Workspace"} user`}function di(e){const t=String(e.email||"").trim();if(t&&!Vt(t))return t;const a=String(e.profile_id||e.member_id||"").trim();return a?`ID ${xo(a)}`:"No email on profile"}function zn(e){const t=se(e),a=t.filter(n=>!n.supervisor_id||!t.some(s=>s.id===n.supervisor_id));return`
    <section class="tool-page team-chart-page">
      ${V("Team chart","Reporting lines, roles, and company coverage for this workspace.",`
        <a class="btn" href="${g(d("users",{},e))}" data-router><i class="ti ti-users"></i>Users</a>
        <a class="btn btn-primary" href="${g(d("settings",{tab:"team"},e))}" data-router><i class="ti ti-settings"></i>Worker settings</a>
      `)}
      <section class="metric-grid operations-metrics">
        ${$("Members",t.length)}
        ${$("Leads",a.length)}
        ${$("Open tasks",z(e).filter(ra).length)}
        ${$("Active timer",wt(e)?"Yes":"No")}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Reporting chart</h2><p>Supervisor links are local/basic until Auth and RLS are restored.</p></div></div>
        <div class="team-tree">
          ${a.map(n=>ui(e,n,t)).join("")||v("No workers assigned.")}
        </div>
      </section>
    </section>
  `}function ui(e,t,a,n=0){const s=a.filter(o=>o.supervisor_id===t.id);return`
    <article class="team-node" style="--depth:${n}">
      <div class="team-node-card">
        ${He({full_name:t.full_name,avatar_url:t.avatar_url},"avatar")}
        <span><strong>${r(t.full_name)}</strong><small>${r(rt(e,t.id))}</small></span>
        <b>${z(e).filter(o=>o.assignee_id===t.id&&ra(o)).length} open</b>
      </div>
      ${s.length?`<div class="team-node-children">${s.map(o=>ui(e,o,a,n+1)).join("")}</div>`:""}
    </article>
  `}function Wn(e,t){const a=St(t),n=["company","billing","roles","access","team"].includes(e.params.get("tab"))?e.params.get("tab"):"company";return`
    ${V("Settings","Company settings, roles, approvals, and admin controls.","")}
    ${aa("Settings sections",[[d("settings",{tab:"company"},t),"Company",n==="company"],[d("settings",{tab:"billing"},t),"Billing",n==="billing"],[d("settings",{tab:"roles"},t),"Roles",n==="roles"],[d("settings",{tab:"access"},t),"Access",n==="access"],[d("settings",{tab:"team"},t),"Workers",n==="team"]])}
    <section class="dashboard-grid compact-settings-grid">
      ${n==="company"?`
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${N([["Name",j(t)],["Company ID",t],["Color",a?.color||re(t)],["Visible jobs",O(t).length]])}
      </article>
      `:""}
      ${n==="billing"?Yn(t):""}
      ${n==="roles"?Kn(t):""}
      ${n==="access"?`
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Memberships, invites, and join requests.</p></div></div>
        ${N([["Auth switch","Enabled"],["Local login","Disabled"],["Isolation","Server-enforced when migration is applied"],["Memberships",String(i.memberships.filter(s=>s.company_id===t).length)],["Invites",String(i.companyInvites.filter(s=>s.company_id===t&&s.status==="pending").length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Hybrid onboarding queue for this company.</p></div></div>
        <div class="finance-compact-list">
          ${i.joinRequests.filter(s=>s.company_id===t).map(s=>$e(s.requested_email||s.profile_id,s.message||"Access request",M(s.status),s.created_at)).join("")||v("No pending company approvals.")}
        </div>
      </article>
      `:""}
      ${n==="team"?`
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${se(t).map(s=>`<div><strong>${r(s.full_name)}</strong><span>${r(rt(t,s.id))}</span></div>`).join("")||v("No workers assigned.")}
        </div>
      </article>
      `:""}
    </section>
  `}function Yn(e){const t=pa(e);return`
    <article class="panel">
      <div class="section-head">
        <div><h2>Subscription</h2><p>$300/month company workspace billing gate.</p></div>
        <button class="btn btn-primary" type="button" data-action="start-checkout"><i class="ti ti-credit-card"></i>Start subscription</button>
      </div>
      ${N([["Plan","$300/month company workspace"],["Status",Ii(e)],["Stripe customer",t?.stripe_customer_id||"Not connected"],["Renewal / trial",t?.current_period_end||t?.trial_ends_at?A(t.current_period_end||t.trial_ends_at):"Pending"]])}
    </article>
    <article class="panel">
      <div class="section-head"><div><h2>Billing gate</h2><p>Paid modules remain available only for trialing, active, past_due, or grace status.</p></div></div>
      ${N([["Workspace access",ma(e)?"Allowed":"Suspended"],["Finance/files privacy","Requires Auth + RLS"],["Seat billing","Tracked later; not charged in v1"]])}
    </article>
  `}function Kn(e){const t=fe(e),a=ht(e);return`
    <article class="panel span-2">
      <div class="section-head">
        <div><h2>Custom roles</h2><p>Discord-style roles for module, action, record, and field permissions.</p></div>
        <button class="btn btn-primary" type="button" data-action="open-role-form"><i class="ti ti-plus"></i>New role</button>
      </div>
      <div class="roles-list">
        ${t.map(n=>{const s=i.rolePermissions.filter(c=>c.role_id===n.id&&c.effect==="allow").length,o=i.roleAssignments.filter(c=>c.company_id===e&&c.role_id===n.id).length,l=a?.id===n.id;return`
            <article class="role-row" style="--role-color:${r(n.color)}">
              <span></span>
              <div><strong>${r(n.name)}</strong><small>${s||"All"} permissions / ${o} users / priority ${n.priority}</small></div>
              <div class="role-row-actions">
                <b>${n.is_system?"System":"Custom"}</b>
                <button class="btn" type="button" data-action="view-as-role" data-role-id="${r(n.id)}" ${l?"disabled":""}>
                  <i class="ti ${l?"ti-eye-check":"ti-eye"}"></i>${l?"Viewing":"View as role"}
                </button>
              </div>
            </article>
          `}).join("")||v("No custom roles yet.")}
      </div>
    </article>
    <article class="panel">
      <div class="section-head"><div><h2>Field controls</h2><p>Finance and sensitive field masking rules.</p></div></div>
      <div class="finance-compact-list">
        ${i.fieldPermissions.filter(n=>n.company_id===e).map(n=>$e(n.field_key,n.resource_type,n.visibility,"")).join("")||v("No field permission overrides yet.")}
      </div>
    </article>
  `}function Gn(e){return I("Settings","New role",`
    <form class="role-form" data-role-form>
      ${S("Role name","name","")}
      ${S("Color","color","#f0b23b",!1,"color")}
      ${S("Priority","priority","100",!1,"number")}
      <div class="permission-grid span-2">
        ${Wi.map(([t,a])=>`
          <label><input type="checkbox" name="permissions" value="${r(t)}" /> <span>${r(a)}</span></label>
        `).join("")}
      </div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create role</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function Zn(e){const t=fe(e).filter(n=>n.name.toLowerCase()!=="owner"),a=[["","Member"]].concat(t.map(n=>[n.id,n.name]));return I("Users","Invite user",`
    <form class="role-form" data-invite-form>
      <input type="hidden" name="company_id" value="${r(e)}" />
      ${S("Email","email","",!0,"email")}
      ${P("Role","role_id",xr(e),a)}
      <div class="form-message span-2">Quest creates an invite code you can copy. Email delivery comes after the Resend/SMTP setup.</div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create invite code</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function Xn(e){const t=co(e),a=Ee(e),n=i.formsTab==="builder"&&a?"builder":i.formsTab==="responses"?"responses":"library";return`
    <section class="tool-page forms-center">
      <div class="forms-command panel">
        <span class="sync-pill live"><i class="ti ti-device-floppy"></i>Local autosafe</span>
        <label>
          <span>Search</span>
          <input data-form-search value="${r(i.formQuery)}" placeholder="Find form, audience, or job" />
        </label>
        <button class="btn" type="button" data-action="open-forms-tools"><i class="ti ti-adjustments"></i>Tools</button>
        <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
      </div>
      ${n==="builder"?"":`
        <nav class="tabbar forms-tabs" aria-label="Forms workspace">
          ${["library","responses"].map(s=>`
            <button class="${n===s?"active":""}" type="button" data-action="set-forms-tab" data-tab="${r(s)}">${r(M(s))}</button>
          `).join("")}
        </nav>
      `}
      ${n==="library"?es(e,t,a):""}
      ${n==="builder"?ts(e,a):""}
      ${n==="responses"?ds(e,a):""}
    </section>
  `}function es(e,t,a){return`
    <section class="forms-home">
      <article class="forms-recent-panel panel">
        <div class="forms-panel-head">
          <div>
            <strong>Recent forms</strong>
            <span>${t.length} visible form${t.length===1?"":"s"} in ${r(j(e))}</span>
          </div>
        </div>
        <div class="forms-list forms-list-cards">
          ${t.map(n=>`
            <article class="form-card ${i.expandedFormIds.has(n.id)?"expanded":""} ${a?.id===n.id?"active":""}">
              <span class="form-card-top">
                <i class="ti ti-clipboard-list"></i>
              </span>
              <span class="form-card-main">
                <strong>${r(n.title)}</strong>
                <span>Created by ${r(uo(n))}</span>
              </span>
              <button class="form-card-toggle" type="button" data-action="toggle-form-card" data-form-id="${r(n.id)}" aria-expanded="${i.expandedFormIds.has(n.id)?"true":"false"}">
                <i class="ti ${i.expandedFormIds.has(n.id)?"ti-chevron-up":"ti-chevron-down"}"></i>
                ${i.expandedFormIds.has(n.id)?"Less":"Details"}
              </button>
              <span class="form-card-meta">
                <small>${r(n.type)} / ${r(n.audience||"Internal")}</small>
                <small>${Li(n)} questions</small>
                <em>${xt(n.id).length} responses</em>
                <em>Updated ${A(n.updated_at)}</em>
                <em>${r(n.status)}</em>
              </span>
              ${i.expandedFormIds.has(n.id)?`
                <div class="form-card-detail">
                  <p>${r(n.description||"No description yet.")}</p>
                  <div class="form-actions">
                    <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${r(n.id)}"><i class="ti ti-pencil"></i>Open builder</button>
                    <button class="btn" type="button" data-action="open-form-preview" data-form-id="${r(n.id)}"><i class="ti ti-eye"></i>Preview</button>
                  </div>
                </div>
              `:""}
            </article>
          `).join("")||v("No forms match this company view.")}
        </div>
      </article>
    </section>
  `}function ts(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${v("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(i.formEditorTab)?i.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${r(a)}">
      ${as(t,a)}
      ${a==="questions"?`
        ${is(e,t)}
        ${ns(t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${ss(e,t)}
        </article>
      `:""}
      ${a==="responses"?rs(e,t):""}
    </section>
  `}function as(e,t){const a=xt(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${r(e.title)}</strong>
        <span>${r(e.status)} / ${Li(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(n=>`
        <button class="${t===n?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${r(n)}">
          ${n==="questions"?'<i class="ti ti-list-details"></i>':n==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${r(M(n))}
        </button>
      `).join("")}
      <button class="btn" type="button" data-action="open-form-preview" data-form-id="${r(e.id)}"><i class="ti ti-eye"></i>Preview</button>
      <button class="btn" type="button" data-action="open-form-actions" data-form-id="${r(e.id)}"><i class="ti ti-share"></i>Share</button>
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${r(e.id)}">Save</button>
    </div>
  `}function is(e,t){return`
    <article class="panel form-identity-panel gform-title-card">
      <div class="gform-accent-strip" style="--form-accent:${r(t.theme_color||re(e))}"></div>
      ${Fe("Form title","title",t.title,!0)}
      ${Ni("Form description","description",t.description)}
      <div class="forms-simple-meta">
        <span>${r(t.status)}</span>
        <span>${r(t.type)}</span>
        <span>${r(t.audience||"Internal")}</span>
        <span>${r(C(t.linked_job_id)?.name||"Company level")}</span>
        <span>${r(j(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">Settings</button>
        <button class="btn" type="button" data-action="open-form-preview" data-form-id="${r(t.id)}">Preview</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${r(t.id)}">Publish</button>
      </div>
    </article>
  `}function ns(e){return`
    <article class="question-workbench">
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${Ue.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${r(t)}" title="${r(a)}" aria-label="Add ${r(a)} question"><i class="ti ${r(po(t))}"></i></button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>os(t,a)).join("")||v("Add the first question.")}
        </div>
      </div>
    </article>
  `}function ss(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${Fe("Title","title",t.title,!0)}
      ${Ze("Status","status",t.status,ta.map(a=>[a,a]))}
      ${Ni("Description","description",t.description)}
      ${Ze("Type","type",t.type,Ne.map(a=>[a,a]))}
      ${Fe("Audience","audience",t.audience)}
      ${Ze("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(O(e).map(a=>[a.id,a.name])))}
      ${Fe("Theme color","theme_color",t.theme_color||re(e),!1,"color")}
      ${Ze("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${Fe("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${r(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${r(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${r(t.id)}">Delete</button>
    </div>
  `}function rs(e,t){const a=xt(t.id),n=a[0]||null;return`
    <article class="panel response-list-panel forms-response-editor">
      <div class="section-head">
        <div><h2>Response inbox</h2><p>${a.length} captured response${a.length===1?"":"s"} for this form.</p></div>
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="questions"><i class="ti ti-list-details"></i>Questions</button>
      </div>
      <div class="response-list">
        ${a.map(s=>`
          <button type="button" class="response-card">
            <strong>${r(s.submitted_by||s.submitter_email||"Anonymous")}</strong>
            <span>${r(t.title)}</span>
            <small>${A(s.created_at)}</small>
          </button>
        `).join("")||v("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${n?Ui(n):v("No response selected.")}
    </aside>
  `}function os(e,t){const a=Ue.map(([n,s])=>`<option value="${r(n)}" ${e.type===n?"selected":""}>${r(s)}</option>`).join("");return`
    <article class="question-card ${i.selectedQuestionId===e.id?"active":""}" data-question-id="${r(e.id)}">
      <div class="question-card-head">
        <span>${t+1}</span>
        <select data-question-field="type">${a}</select>
        <div class="question-actions">
          <button type="button" data-action="move-question" data-direction="-1" data-question-id="${r(e.id)}"><i class="ti ti-arrow-up"></i></button>
          <button type="button" data-action="move-question" data-direction="1" data-question-id="${r(e.id)}"><i class="ti ti-arrow-down"></i></button>
          <button type="button" data-action="duplicate-question" data-question-id="${r(e.id)}"><i class="ti ti-copy"></i></button>
          <button type="button" data-action="delete-question" data-question-id="${r(e.id)}"><i class="ti ti-trash"></i></button>
        </div>
      </div>
      <label><span>Question</span><input data-question-field="label" value="${r(e.label)}" /></label>
      <label><span>Help text</span><input data-question-field="help" value="${r(e.help||"")}" /></label>
      <label class="check-row"><input type="checkbox" data-question-field="required" ${e.required?"checked":""} /> Required</label>
      ${Oe(e)?`
        <div class="question-options">
          ${(e.options||[]).map((n,s)=>`
            <label>
              <span>Option ${s+1}</span>
              <input data-question-option="${s}" value="${r(n)}" />
              <button type="button" data-action="remove-question-option" data-question-id="${r(e.id)}" data-option-index="${s}"><i class="ti ti-x"></i></button>
            </label>
          `).join("")}
          <button class="btn" type="button" data-action="add-question-option" data-question-id="${r(e.id)}"><i class="ti ti-plus"></i>Add option</button>
        </div>
      `:""}
    </article>
  `}function ls(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${r(t.id)}" style="--form-accent:${r(t.theme_color||re(e))}">
      <div class="designed-form-header">
        <span>${r(j(e))}</span>
        <h2>${r(t.title)}</h2>
        <p>${r(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>cs(a)).join("")||v("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${r(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function cs(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?X(e,`<textarea name="${r(t)}" rows="3" ${a}></textarea>`):e.type==="date"?X(e,`<input name="${r(t)}" type="date" ${a} />`):e.type==="file"?X(e,`<input name="${r(t)}" type="file" ${a} />`):e.type==="yesno"?X(e,`<select name="${r(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?X(e,`<input name="${r(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?X(e,`<select name="${r(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(n=>`<option>${r(n)}</option>`).join("")}</select>`):e.type==="checkbox"?X(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${r(t)}" type="checkbox" value="${r(n)}" /> ${r(n)}</label>`).join("")}</div>`):e.type==="multiple"?X(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${r(t)}" type="radio" value="${r(n)}" ${a} /> ${r(n)}</label>`).join("")}</div>`):X(e,`<input name="${r(t)}" ${a} />`)}function ds(e,t){const a=t?xt(t.id):Ri(e),n=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(s=>`
            <button type="button" class="response-card">
              <strong>${r(ye(s.form_id)?.title||"Unknown form")}</strong>
              <span>${r(s.submitted_by||s.submitter_email||"Anonymous")}</span>
              <small>${A(s.created_at)}</small>
            </button>
          `).join("")||v("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${n?Ui(n):v("No response selected.")}
      </aside>
    </section>
  `}function us(e,t){const a=Or(t),n=$t(t),s=z(t).filter(c=>c.status!=="done").length,o=K(O(t),"estimate_total"),l=Rr(t);return`
    <section class="tool-page crm-page">
      ${V("CRM","Customers, contacts, and follow-ups built from company jobs.",`
        <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add customer job</button>
      `)}
      <section class="metric-grid crm-metrics">
        ${$("Accounts",n.length)}
        ${$("Open jobs",O(t).filter(c=>c.stage!=="Closed").length)}
        ${$("Open tasks",s)}
        ${$("Pipeline value",_(o))}
      </section>
      <section class="crm-toolbar panel">
        <label>
          <span>Search</span>
          <input data-crm-search value="${r(i.crmQuery)}" placeholder="Find customer, contact, job, or address" />
        </label>
        <label>
          <span>Stage</span>
          <select data-crm-stage-filter>
            ${["all"].concat(Re).map(c=>`<option value="${r(c)}" ${i.crmStageFilter===c?"selected":""}>${r(c==="all"?"All stages":c)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>Owner</span>
          <select data-crm-owner-filter>
            <option value="all" ${i.crmOwnerFilter==="all"?"selected":""}>All owners</option>
            ${l.map(c=>`<option value="${r(c)}" ${i.crmOwnerFilter===c?"selected":""}>${r(c)}</option>`).join("")}
          </select>
        </label>
      </section>
      <section class="panel crm-list-panel">
        <div class="section-head">
          <div><h2>Customers</h2><p>${a.length} visible account${a.length===1?"":"s"} in ${r(j(t))}</p></div>
        </div>
        <div class="data-table crm-table">
          <div class="table-head"><span>Account</span><span>Contact</span><span>Stage</span><span>Owner</span><span>Jobs</span><span>Value</span><span>Updated</span></div>
          ${a.map(c=>`
            <a class="table-row crm-account-row" href="${g(d("crm",{account:c.key},t))}" data-router>
              <span><strong>${r(c.name)}</strong><small>${r(c.subtitle)}</small></span>
              <span>${r(c.primaryContact)}</span>
              <span>${r(c.stage)}</span>
              <span>${r(c.owner)}</span>
              <span>${r(c.jobs.length)}</span>
              <span>${_(c.estimateTotal)}</span>
              <span>${A(c.updatedAt)}</span>
            </a>
          `).join("")||v("No CRM accounts match this view. Add a customer job to start the list.")}
        </div>
      </section>
    </section>
  `}function ps(e,t){const a=Pr(e,t);if(!a)return I("CRM","Customer account",v("This customer is not visible in the current company view."));const n=a.latestJob,s=a.tasks.filter(o=>o.status!=="done");return I("CRM",a.name,`
    <div class="crm-account-modal">
      <section class="crm-modal-summary">
        <div class="section-head">
          <div>
            <h2>${r(a.name)}</h2>
            <p>${r(a.subtitle)}</p>
          </div>
          ${ya(a.priority)}
        </div>
        ${N([["Primary contact",a.primaryContact],["Owner",a.owner],["Current stage",a.stage],["Pipeline value",_(a.estimateTotal)],["Open tasks",String(s.length)],["Last updated",A(a.updatedAt)]])}
      </section>
      <section class="crm-rollup-grid">
        ${$("Jobs",a.jobs.length)}
        ${$("Files",a.fileCount)}
        ${$("Forms",a.formCount)}
        ${$("Tasks",a.tasks.length)}
      </section>
      <section class="crm-modal-actions">
        ${n?`<a class="btn btn-primary" href="${g(d("jobs",{tab:"profile",job_id:n.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
        ${n?`<a class="btn" href="${g(d("tasks",{job_id:n.id},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>`:""}
        ${n?`<a class="btn" href="${g(d("files",{job_id:n.id},e))}" data-router><i class="ti ti-folder"></i>Files</a>`:""}
        ${n?`<button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${r(n.id)}"><i class="ti ti-pencil"></i>Edit latest job</button>`:""}
        <button class="btn" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Linked jobs</h2><p>Customer workspaces connected to this account.</p></div></div>
        <div class="data-table crm-linked-jobs">
          <div class="table-head"><span>Job</span><span>Stage</span><span>Owner</span><span>Value</span></div>
          ${a.jobs.map(o=>`
            <a class="table-row" href="${g(d("jobs",{tab:"profile",job_id:o.id},e))}" data-router>
              <span><strong>${r(o.name)}</strong><small>${r(o.site_address||"No address")}</small></span>
              <span>${r(o.stage)}</span>
              <span>${r(o.owner_name||"Unassigned")}</span>
              <span>${_(o.estimate_total)}</span>
            </a>
          `).join("")||v("No linked jobs yet.")}
        </div>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Follow-ups</h2><p>Open tasks across linked jobs.</p></div></div>
        <div class="queue-list">
          ${s.slice(0,6).map(o=>At(o)).join("")||v("No open follow-ups for this customer.")}
        </div>
      </section>
    </div>
  `,"crm-modal")}function ms(e,t){const a=Ci(t),n=be(t),s=Si(t).slice().sort(Pe("received_at")).slice(0,5),o=oa(t).slice().sort(Pe("spent_at")).slice(0,5),l=la(t).slice().sort((c,m)=>c.name.localeCompare(m.name)).slice(0,5);return`
    <section class="tool-page finance-page">
      ${V("Finance","Invoices, payments, expenses, vendors, and job-linked money in one company view.",`
        <button class="btn btn-primary" type="button" data-action="new-finance-invoice"><i class="ti ti-file-dollar"></i>New invoice</button>
        <button class="btn" type="button" data-action="new-finance-payment"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="new-finance-expense"><i class="ti ti-receipt"></i>Add expense</button>
        <button class="btn" type="button" data-action="new-finance-vendor"><i class="ti ti-building-store"></i>Add vendor</button>
        <a class="btn" href="${g(d("finance",{report:"summary"},t))}" data-router><i class="ti ti-report-analytics"></i>Reports</a>
      `)}
      <section class="metric-grid finance-metrics">
        ${$("Estimated pipeline",_(a.pipeline))}
        ${$("Invoiced",_(a.invoiced))}
        ${$("Collected",_(a.collected))}
        ${$("Outstanding",_(a.outstanding))}
        ${$("Expenses",_(a.expenses))}
        ${$("Net position",_(a.net))}
      </section>
      <section class="panel finance-aging">
        <div class="section-head"><div><h2>AR aging</h2><p>Outstanding invoice balance by due date.</p></div></div>
        <div class="finance-aging-grid">
          ${[["Current",a.aging.current],["1-30",a.aging.thirty],["31-60",a.aging.sixty],["61+",a.aging.overSixty]].map(([c,m])=>`<div><span>${r(c)}</span><strong>${_(m)}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel finance-invoice-panel">
        <div class="section-head"><div><h2>Invoices</h2><p>${n.length} billing record${n.length===1?"":"s"} for ${r(j(t))}</p></div></div>
        <div class="data-table finance-invoice-table">
          <div class="table-head"><span>Invoice</span><span>Status</span><span>Job</span><span>Due</span><span>Total</span><span>Paid</span><span>Balance</span></div>
          ${n.map(c=>`
            <a class="table-row" href="${g(d("finance",{invoice:c.id},t))}" data-router>
              <span><strong>${r(c.invoice_number)}</strong><small>${r(c.client_name||C(c.job_id)?.client_name||"No client")}</small></span>
              <span>${io(Di(c))}</span>
              <span>${r(C(c.job_id)?.name||"Company level")}</span>
              <span>${A(c.due_date)}</span>
              <span>${_(c.total)}</span>
              <span>${_(da(c.id))}</span>
              <span>${_(ae(c.id))}</span>
            </a>
          `).join("")||v("No invoices yet. Create one from a job or customer record.")}
        </div>
      </section>
      <section class="finance-secondary-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Recent payments</h2><p>Money received.</p></div></div>
          <div class="finance-compact-list">
            ${s.map(c=>$e(ge(c.invoice_id)?.invoice_number||"Payment",c.method,_(c.amount),c.received_at)).join("")||v("No payments recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Expenses</h2><p>Job and company costs.</p></div></div>
          <div class="finance-compact-list">
            ${o.map(c=>$e(Nt(c.vendor_id),c.category,_(c.amount),c.spent_at,d("finance",{expense:c.id},t))).join("")||v("No expenses recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Vendors</h2><p>Suppliers and subcontractors.</p></div></div>
          <div class="finance-compact-list">
            ${l.map(c=>$e(c.name,c.category,c.status,c.updated_at,d("finance",{vendor:c.id},t))).join("")||v("No vendors recorded.")}
          </div>
        </article>
      </section>
    </section>
  `}function fs(e,t){return e.params.get("invoice")?bs(t,e.params.get("invoice")):e.params.get("expense")?gs(t,e.params.get("expense")):e.params.get("vendor")?vs(t,e.params.get("vendor")):e.params.get("report")==="summary"?ys(t):""}function bs(e,t){const a=ge(t);if(!a||a.company_id!==e)return I("Finance","Invoice",v("Invoice not found."));const n=ji(a.id),s=C(a.job_id);return I("Finance",a.invoice_number,`
    <div class="finance-detail-modal">
      ${N([["Client",a.client_name||s?.client_name||"No client"],["Status",Di(a)],["Job",s?.name||"Company level"],["Issued",A(a.issue_date)],["Due",A(a.due_date)],["Total",_(a.total)],["Collected",_(da(a.id))],["Balance",_(ae(a.id))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="new-finance-payment" data-invoice-id="${r(a.id)}"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="edit-finance-invoice" data-invoice-id="${r(a.id)}"><i class="ti ti-pencil"></i>Edit invoice</button>
        ${s?`<a class="btn" href="${g(d("jobs",{tab:"profile",job_id:s.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
      </div>
      <section class="finance-modal-section">
        <div class="section-head"><div><h2>Payments</h2><p>${n.length} payment${n.length===1?"":"s"} applied.</p></div></div>
        <div class="finance-compact-list">
          ${n.map(o=>$e(o.reference||o.method,o.method,_(o.amount),o.received_at)).join("")||v("No payments yet.")}
        </div>
      </section>
      ${a.notes?`<p class="finance-note">${r(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function gs(e,t){const a=ki(t);if(!a||a.company_id!==e)return I("Finance","Expense",v("Expense not found."));const n=C(a.job_id);return I("Finance",`${Nt(a.vendor_id)} expense`,`
    <div class="finance-detail-modal">
      ${N([["Vendor",Nt(a.vendor_id)],["Category",a.category],["Status",a.status],["Job",n?.name||"Company level"],["Spent",A(a.spent_at)],["Amount",_(a.amount)]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-expense" data-expense-id="${r(a.id)}"><i class="ti ti-pencil"></i>Edit expense</button>
        ${n?`<a class="btn" href="${g(d("files",{job_id:n.id},e))}" data-router><i class="ti ti-folder"></i>Job files</a>`:""}
      </div>
      ${a.notes?`<p class="finance-note">${r(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function vs(e,t){const a=ca(t);if(!a||a.company_id!==e)return I("Finance","Vendor",v("Vendor not found."));const n=oa(e).filter(s=>s.vendor_id===a.id);return I("Finance",a.name,`
    <div class="finance-detail-modal">
      ${N([["Contact",a.contact_name||"No contact"],["Email",a.email||"No email"],["Phone",a.phone||"No phone"],["Category",a.category],["Status",a.status],["Spend",_(K(n,"amount"))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-vendor" data-vendor-id="${r(a.id)}"><i class="ti ti-pencil"></i>Edit vendor</button>
        <button class="btn" type="button" data-action="new-finance-expense" data-vendor-id="${r(a.id)}"><i class="ti ti-receipt"></i>Add expense</button>
      </div>
      ${a.notes?`<p class="finance-note">${r(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function ys(e){const t=Ci(e);return I("Finance","Summary report",`
    <div class="finance-report-modal">
      ${N([["Company",j(e)],["Estimated pipeline",_(t.pipeline)],["Invoiced",_(t.invoiced)],["Collected",_(t.collected)],["Outstanding",_(t.outstanding)],["Expenses",_(t.expenses)],["Net position",_(t.net)]])}
      <div class="finance-aging-grid">
        <div><span>Current</span><strong>${_(t.aging.current)}</strong></div>
        <div><span>1-30</span><strong>${_(t.aging.thirty)}</strong></div>
        <div><span>31-60</span><strong>${_(t.aging.sixty)}</strong></div>
        <div><span>61+</span><strong>${_(t.aging.overSixty)}</strong></div>
      </div>
    </div>
  `,"finance-modal")}function Da(e,t=null){const a=t||Hr(e);return I("Finance",t?"Edit invoice":"New invoice",`
    <form class="finance-form" data-finance-invoice-form>
      <input type="hidden" name="id" value="${r(a.id)}" />
      ${S("Invoice number","invoice_number",a.invoice_number,!0)}
      ${P("Linked job","job_id",a.job_id||"",[["","Company level"]].concat(O(e).map(n=>[n.id,n.name])))}
      ${S("Client","client_name",a.client_name,!0)}
      ${P("Status","status",a.status,Ba.map(n=>[n,n]))}
      ${S("Issue date","issue_date",a.issue_date,!1,"date")}
      ${S("Due date","due_date",a.due_date,!1,"date")}
      ${S("Subtotal","subtotal",a.subtotal,!1,"number")}
      ${S("Tax","tax",a.tax,!1,"number")}
      ${ie("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save invoice</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function _s(e,t=""){const a=zr(e,t),n=be(e).map(s=>[s.id,`${s.invoice_number} - ${s.client_name||C(s.job_id)?.client_name||"No client"}`]);return I("Finance","Record payment",`
    <form class="finance-form" data-finance-payment-form>
      ${P("Invoice","invoice_id",a.invoice_id,n.length?n:[["","Create an invoice first"]])}
      ${S("Amount","amount",a.amount,!0,"number")}
      ${P("Method","method",a.method,Wa.map(s=>[s,s]))}
      ${S("Received","received_at",a.received_at,!1,"date")}
      ${S("Reference","reference",a.reference)}
      ${ie("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save payment</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Ca(e,t=null,a=""){const n=t||Wr(e,a),s=la(e).map(o=>[o.id,o.name]);return I("Finance",t?"Edit expense":"Add expense",`
    <form class="finance-form" data-finance-expense-form>
      <input type="hidden" name="id" value="${r(n.id)}" />
      ${P("Vendor","vendor_id",n.vendor_id,s.length?s:[["","No vendor yet"]])}
      ${P("Linked job","job_id",n.job_id||"",[["","Company level"]].concat(O(e).map(o=>[o.id,o.name])))}
      ${P("Category","category",n.category,gt.map(o=>[o,o]))}
      ${P("Status","status",n.status,Ha.map(o=>[o,o]))}
      ${S("Amount","amount",n.amount,!0,"number")}
      ${S("Spent date","spent_at",n.spent_at,!1,"date")}
      ${ie("Notes","notes",n.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save expense</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function qa(e,t=null){const a=t||Yr(e);return I("Finance",t?"Edit vendor":"Add vendor",`
    <form class="finance-form" data-finance-vendor-form>
      <input type="hidden" name="id" value="${r(a.id)}" />
      ${S("Vendor name","name",a.name,!0)}
      ${S("Contact","contact_name",a.contact_name)}
      ${S("Email","email",a.email,!1,"email")}
      ${S("Phone","phone",a.phone)}
      ${P("Category","category",a.category,gt.map(n=>[n,n]))}
      ${P("Status","status",a.status,za.map(n=>[n,n]))}
      ${ie("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save vendor</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function hs(e,t){return e.section==="clock"?ws(t):e.section==="approvals"?Ss(t):$s(t)}function ia(e,t){return`
    ${aa("Operations sections",[[d("time",{},e),"My time",t==="time"],[d("approvals",{},e),"Approvals",t==="approvals"],[d("clock",{},e),"Clock dashboard",t==="clock"]])}
  `}function $s(e){const t=_i(e),a=wt(e);return`
    <section class="tool-page operations-page">
      ${V("My time","A compact personal work queue built from this company's tasks.",`
        <a class="btn" href="${g(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Open tasks</a>
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${ia(e,"time")}
      <section class="metric-grid operations-metrics">
        ${$("Due today",t.dueToday.length)}
        ${$("Overdue",t.overdue.length)}
        ${$("Open work",t.open.length)}
        ${$("In review",t.review.length)}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel span-2">
          <div class="section-head"><div><h2>Today</h2><p>Due now, overdue, and highest priority work.</p></div></div>
          <div class="queue-list">
            ${t.focus.slice(0,8).map(n=>At(n)).join("")||v("No time-sensitive tasks for this company.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Workload</h2><p>Simple task-based time view.</p></div></div>
          ${N([["Company",j(e)],["Assigned to you",String(t.assignedToMe.length)],["Due this week",String(t.thisWeek.length)],["Completed",String(t.done.length)]])}
        </article>
      <article class="panel span-2">
          <div class="section-head"><div><h2>This week</h2><p>Upcoming task commitments.</p></div></div>
          <div class="data-table operations-table">
            <div class="table-head"><span>Task</span><span>Job</span><span>Owner</span><span>Due</span><span>Status</span></div>
            ${t.thisWeek.slice(0,8).map(n=>`
              <a class="table-row" href="${g(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},e))}" data-router>
                <span><strong>${r(n.title)}</strong><small>${r(n.description||ze(n.type))}</small></span>
                <span>${r(C(n.project_id)?.name||"Company task")}</span>
                <span>${r(B(n.assignee_id))}</span>
                <span>${A(n.due)}</span>
                <span>${Ti(n.status)}</span>
              </a>
            `).join("")||v("No upcoming tasks this week.")}
          </div>
        </article>
      </section>
    </section>
  `}function ws(e){const t=$i(e),a=wt(e),n=Tt().getTime(),s=n-6*864e5,o=Ta(e,n)+(a?Date.now()-Date.parse(a.started_at):0),l=Ta(e,s)+(a?Date.now()-Date.parse(a.started_at):0);return`
    <section class="tool-page operations-page clock-page">
      ${V("Clock dashboard","Local basic-mode clock tracking for the active company.",`
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${ia(e,"clock")}
      <section class="metric-grid operations-metrics">
        ${$("Today",et(o))}
        ${$("Last 7 days",et(l))}
        ${$("Entries",t.length)}
        ${$("Status",a?"Clocked in":"Off clock")}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Active now</h2><p>Current local clock session.</p></div></div>
          ${a?N([["User",B(a.user_id)],["Started",Ra(a.started_at)],["Task",a.task_title||"General shift"],["Elapsed",et(Date.now()-Date.parse(a.started_at))]]):v("Nobody is clocked in on this device.")}
        </article>
        <article class="panel span-2">
          <div class="section-head"><div><h2>Recent entries</h2><p>Local time records for this company.</p></div></div>
          <div class="data-table clock-table">
            <div class="table-head"><span>Entry</span><span>User</span><span>Start</span><span>Duration</span></div>
            ${t.slice(0,10).map(c=>`
              <div class="table-row">
                <span><strong>${r(c.task_title||"General shift")}</strong><small>${r(c.notes||"Clock entry")}</small></span>
                <span>${r(B(c.user_id))}</span>
                <span>${Ra(c.started_at)}</span>
                <span>${et(c.duration_ms)}</span>
              </div>
            `).join("")||v("No clock entries yet.")}
          </div>
        </article>
      </section>
    </section>
  `}function Ss(e){const t=hi(e),a=t.filter(o=>o.type==="Form approval"),n=t.filter(o=>o.type==="Task review"),s=t.filter(o=>o.type==="Access request");return`
    <section class="tool-page operations-page">
      ${V("Approvals","Company review queue for forms, task handoffs, and access requests.",`
        <a class="btn" href="${g(d("forms",{},e))}" data-router><i class="ti ti-clipboard-list"></i>Forms</a>
        <a class="btn btn-primary" href="${g(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>
      `)}
      ${ia(e,"approvals")}
      <section class="metric-grid operations-metrics">
        ${$("Open approvals",t.length)}
        ${$("Forms",a.length)}
        ${$("Task reviews",n.length)}
        ${$("Access",s.length)}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Approval queue</h2><p>One calm list instead of a heavy dashboard.</p></div></div>
        <div class="data-table approval-table">
          <div class="table-head"><span>Item</span><span>Type</span><span>Owner</span><span>Status</span><span>Updated</span></div>
          ${t.map(o=>`
            <a class="table-row" href="${g(o.href)}" data-router>
              <span><strong>${r(o.title)}</strong><small>${r(o.meta)}</small></span>
              <span>${r(o.type)}</span>
              <span>${r(o.owner)}</span>
              <span>${r(o.status)}</span>
              <span>${A(o.updatedAt)}</span>
            </a>
          `).join("")||v("No approvals need attention right now.")}
        </div>
      </section>
    </section>
  `}function Ia(e){return`
    ${V(M(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${v("Module data model pending.")}
    </section>
  `}function ks(){document.title="Sign in | Quest HQ";const e=_t(i.route.params.get("return_url")||g(d("jobs",{},F()))),t=String(i.route.params.get("invite")||"").trim();vt.innerHTML=`
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Secure company workspace</small></span>
        </div>
        <div>
          <div class="eyebrow">Tenant access</div>
          <h1>Sign in to Quest HQ</h1>
          <p>Each company workspace is isolated by Supabase Auth, memberships, subscription state, and role permissions.</p>
        </div>
        ${t?'<div class="invite-banner"><strong>Workspace invite</strong><span>Sign in or create an account with the invited email to join the company.</span></div>':""}
        ${`
          <div class="auth-mode-tabs">
            <button class="${i.authMode==="signin"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="signin">Sign in</button>
            <button class="${i.authMode==="register"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="register">${t?"Create account":"Create workspace"}</button>
            <button class="${i.authMode==="invite"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="invite">Invite code</button>
            <button class="${i.authMode==="request"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="request">Request access</button>
          </div>
          ${Ds(e)}
        `}
        ${js(e)}
        
      </section>
    </main>
  `}function js(e){return`
    <section class="demo-mode-box">
      <div>
        <strong>Demo mode</strong>
        <span>Local-only sample workspace. No Supabase database reads or writes.</span>
      </div>
      <button class="btn full" type="button" data-action="start-demo-mode" data-return-url="${r(e)}">Open demo mode</button>
    </section>
  `}function Ds(e){const t=String(i.route?.params?.get("invite")||"").trim();return i.authMode==="register"?`
      <form data-auth-register-form>
        <label>${t?"Name / username":"Full name"}<input name="full_name" autocomplete="name" required /></label>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="new-password" minlength="8" required /></label>
        ${t?"":'<label>Company workspace<input name="company_name" placeholder="Example Roofing LLC" required /></label>'}
        <input type="hidden" name="invite_token" value="${r(t)}" />
        <input type="hidden" name="return_url" value="${r(e)}" />
        <button class="btn btn-primary full" type="submit">${t?"Create account and join":"Create secure workspace"}</button>
        ${We(t?"The invite email must match this account email.":"Owner role, trial subscription, and workspace isolation are created automatically.")}
      </form>
    `:i.authMode==="invite"?`
      <form data-auth-invite-code-form>
        <label>Invite code<input name="invite_code" autocomplete="one-time-code" required placeholder="Paste the code from your admin" /></label>
        <input type="hidden" name="return_url" value="${r(e)}" />
        <button class="btn btn-primary full" type="submit">Continue with invite code</button>
        ${We("Invite codes are shared by your Owner/Admin. No email delivery required.")}
      </form>
    `:i.authMode==="request"?`
      <form data-auth-request-form>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="current-password" minlength="8" required /></label>
        <label>Company ID<input name="company_id" placeholder="company-workspace-id" required /></label>
        <label>Message<input name="message" placeholder="Tell the admin why you need access" /></label>
        <input type="hidden" name="return_url" value="${r(e)}" />
        <button class="btn btn-primary full" type="submit">Request company access</button>
        ${We("Requests stay pending until a company Owner/Admin approves them.")}
      </form>
    `:`
    <form data-auth-sign-in-form>
      <label>Email<input name="email" type="email" autocomplete="email" required /></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required /></label>
      <input type="hidden" name="invite_token" value="${r(t)}" />
      <input type="hidden" name="return_url" value="${r(e)}" />
      <button class="btn btn-primary full" type="submit">Sign in</button>
      ${We("Use the company workspace account your Owner/Admin invited.")}
    </form>
  `}function We(e){return i.loginError?`<div class="form-message error">${r(i.loginError)}</div>`:`<div class="form-message">${r(i.authMessage||e)}</div>`}function Cs(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${He(e,"avatar large")}
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
  `}function qs(e,t){if(i.modal==="profile")return Cs(t.profile);if(i.modal==="file-upload")return Qn();if(i.modal==="folder-new")return Un();if(i.modal==="file-detail")return As(p());if(i.modal==="forms-tools")return xs(p());if(i.modal==="form-actions")return Ps(p(),Ee(p()));if(i.modal==="form-new")return Ts(p());if(i.modal==="form-preview")return Os(p(),Ee(p()));if(i.modal==="job-new")return Ot(p(),null);if(i.modal==="job-edit")return Ot(p(),pe());if(i.modal==="finance-invoice-new")return Da(p(),null);if(i.modal==="finance-invoice-edit")return Da(p(),ge(i.selectedFinanceInvoiceId));if(i.modal==="finance-payment-new")return _s(p(),i.selectedFinanceInvoiceId);if(i.modal==="finance-expense-new")return Ca(p(),null,i.selectedFinanceVendorId);if(i.modal==="finance-expense-edit")return Ca(p(),ki(i.selectedFinanceExpenseId));if(i.modal==="finance-vendor-new")return qa(p(),null);if(i.modal==="finance-vendor-edit")return qa(p(),ca(i.selectedFinanceVendorId));if(i.modal==="role-new")return Gn(p());if(i.modal==="invite-new")return Zn(p());if(e.name==="company"&&e.section==="crm"&&e.params.get("account"))return ps(e.companyId,e.params.get("account"));if(e.name==="company"&&e.section==="finance"){const a=fs(e,e.companyId);if(a)return a}return e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"?Ot(e.companyId,e.jobId?C(e.jobId):pe()):e.name==="company"&&e.section==="tasks"?Ms(e,e.companyId):""}function Is(){return i.toast?`
    <div class="app-toast ${r(i.toast.mode||"local")}" role="status" aria-live="polite">
      <strong>${r(i.toast.title||"Quest HQ")}</strong>
      <span>${r(i.toast.message||"")}</span>
    </div>
  `:""}function Ye(e,t="local",a="Not available yet"){i.toastTimer&&clearTimeout(i.toastTimer),i.toast={title:a,message:e,mode:t},u(),i.toastTimer=setTimeout(()=>{i.toast=null,i.toastTimer=null,u()},4200)}function I(e,t,a,n=""){return`
    <div class="modal-overlay">
      <div class="modal-panel ${r(n)}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${r(e)}</div><h2>${r(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function Fs(e,t,a){return`
    <div class="modal-overlay drawer-overlay">
      <aside class="modal-panel drawer-panel" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${r(e)}</div><h2>${r(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </aside>
    </div>
  `}function Ot(e,t){return I("Jobs",t?"Edit job":"Create job",kn(e,t),"wide-modal")}function Ms(e,t){const a=e.jobId?C(e.jobId):null,n=e.params.get("task_id")||"",s=n?sa(n):null;return e.params.get("new")==="1"?I("Tasks","New task",ja(t,a,null),"task-modal"):e.params.get("edit")==="1"&&s?I("Tasks","Edit task",ja(t,a,s),"task-modal"):s?Fs("Task detail",s.title,In(t,s)):""}function As(e){const t=i.selectedFileId?i.files.find(a=>a.id===i.selectedFileId):null;return t?I("Open file",t.file_name,Ln(t),"file-viewer-modal"):""}function xs(e){return I("Forms","Tools",`
    <div class="compact-tool-form">
      <label>
        <span>Type filter</span>
        <select data-form-type-filter>
          <option value="all" ${i.formTypeFilter==="all"?"selected":""}>All types</option>
          ${Ne.map(t=>`<option value="${r(t)}" ${i.formTypeFilter===t?"selected":""}>${r(t)}</option>`).join("")}
        </select>
      </label>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
      <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
    </div>
  `)}function Ts(e){const t=i.formStartTab==="templates"?"templates":"blank",a=Me(),n=t==="templates"&&(a.find(m=>m.id===i.formStartTemplateId)||a[0])||null,s=n?.title||"",o=n?.description||"",l=n?.type||"Internal",c=n?.questions||[{type:"short",label:"First question",required:!1,options:[]}];return I("Forms","New form builder",`
    <form class="new-form-modal builder-create-modal" data-new-form-form>
      <input type="hidden" name="template_id" value="${r(n?.id||"")}" />
      <div class="form-start-tabs" role="tablist" aria-label="New form start type">
        <button class="${t==="blank"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="blank"><i class="ti ti-clipboard-plus"></i>Blank</button>
        <button class="${t==="templates"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="templates"><i class="ti ti-template"></i>Templates</button>
      </div>
      ${t==="templates"?`
        <div class="new-form-template-grid">
          ${a.map(m=>`
            <button class="${n?.id===m.id?"active":""}" type="button" data-action="select-form-start-template" data-template-id="${r(m.id)}">
              <span><i class="ti ti-template"></i></span>
              <strong>${r(m.title)}</strong>
              <small>${r(m.type)} / ${m.questions.length} questions</small>
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
            <div class="gform-accent-strip" style="--form-accent:${r(re(e))}"></div>
            <label><span>Form title</span><input name="title" value="${r(s)}" placeholder="Untitled form" required /></label>
            <label><span>Form description</span><textarea name="description" rows="3" placeholder="What should people know before filling this out?">${r(o)}</textarea></label>
          </article>
          <div class="new-form-question-list">
            ${c.map((m,b)=>Es(m,b)).join("")}
          </div>
        </section>
        <aside class="panel new-form-settings-card">
          <div class="section-head"><div><h2>Setup</h2><p>${n?r(n.title):"Blank starter"}</p></div></div>
          <div class="new-form-grid">
            <label><span>Type</span><select name="type">${Ne.map(m=>`<option value="${r(m)}" ${m===l?"selected":""}>${r(m)}</option>`).join("")}</select></label>
            <label><span>Audience</span><input name="audience" value="Internal" /></label>
            <label><span>Linked job</span><select name="linked_job_id"><option value="">Company level</option>${O(e).map(m=>`<option value="${r(m.id)}" ${i.route?.jobId===m.id?"selected":""}>${r(m.name)}</option>`).join("")}</select></label>
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
  `,"form-create-modal builder-modal")}function Es(e,t){const a=Oe(e)?`
    <div class="starter-options">
      ${(e.options||["Option 1","Option 2"]).map(n=>`<span>${r(n)}</span>`).join("")}
    </div>
  `:"";return`
    <article class="question-card starter-question-card">
      <div class="question-card-head">
        <span>${t+1}</span>
        <strong>${r(mo(e.type))}</strong>
      </div>
      <label><span>Question</span><input value="${r(e.label||"Untitled question")}" readonly /></label>
      ${e.help?`<small>${r(e.help)}</small>`:""}
      ${a}
      <label class="check-row"><input type="checkbox" ${e.required?"checked":""} disabled /> Required</label>
    </article>
  `}function Os(e,t){return t?I("Forms","Preview form",`
    <div class="form-preview-modal-body">
      ${ls(e,t)}
    </div>
  `,"form-preview-modal"):I("Forms","Preview form",v("Choose a form first."))}function Ps(e,t){return t?I("Forms","Manage form",`
    <div class="forms-summary-share compact">
      <strong>Shareable preview URL</strong>
      <input readonly value="${r(`${window.location.origin}${g(d("forms",{form_id:t.id},e))}`)}" />
      <button class="btn" type="button" data-action="copy-form-link" data-form-id="${r(t.id)}">Copy link</button>
    </div>
    <div class="modal-action-grid">
      <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${r(t.id)}"><i class="ti ti-edit"></i>Edit builder</button>
      <button class="btn" type="button" data-action="duplicate-form" data-form-id="${r(t.id)}"><i class="ti ti-copy"></i>Duplicate</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${r(t.id)}"><i class="ti ti-world-upload"></i>Publish</button>
      <button class="btn" type="button" data-action="archive-form" data-form-id="${r(t.id)}"><i class="ti ti-archive"></i>Archive</button>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export library</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${r(t.id)}"><i class="ti ti-trash"></i>Delete</button>
    </div>
  `):I("Forms","Manage form",v("Choose a form first."))}function Rs(e){const t=i.accountMenuOpen&&!e.target.closest(".account-menu");t&&(i.accountMenuOpen=!1);const a=e.target.closest("[data-action]");if(a){Ls(e,a);return}const n=e.target.closest("[data-select-job]");if(n){e.preventDefault(),qr(n.dataset.selectJob);return}const s=e.target.closest("[data-select-task]");if(s){e.preventDefault(),Ir(s.dataset.selectTask);return}const o=e.target.closest("a[href][data-router]");if(!o){t&&u();return}o.target||o.hasAttribute("download")||(e.preventDefault(),w(o.getAttribute("href")))}function Ls(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),i.dataLoaded=!1,i.sync={label:"Refreshing...",mode:"loading"},u();return}if(a==="sign-out"){e.preventDefault(),i.accountMenuOpen=!1,Qs();return}if(a==="toggle-account-menu"){e.preventDefault(),i.accountMenuOpen=!i.accountMenuOpen,u();return}if(a==="verify-email"){e.preventDefault(),i.accountMenuOpen=!1,Ye("Email verification is not implemented yet. Account access is not blocked right now.","local");return}if(a==="start-demo-mode"){e.preventDefault(),pi(t.dataset.returnUrl||"");return}if(a==="set-auth-mode"){e.preventDefault(),i.authMode=["signin","register","invite","request"].includes(t.dataset.authMode)?t.dataset.authMode:"signin",i.loginError="",i.authMessage="",u();return}if(a==="open-profile"){e.preventDefault(),i.accountMenuOpen=!1,i.modal="profile",u();return}if(a==="open-role-form"){e.preventDefault(),i.modal="role-new",u();return}if(a==="view-as-role"){e.preventDefault();const n=p(),s=Ve(n,t.dataset.roleId);if(!s){Ye("That role is no longer available.","local","Role preview");return}i.rolePreview={company_id:n,role_id:s.id},Ye(`Viewing the workspace as ${s.name}.`,"local","Role preview");return}if(a==="exit-role-preview"){e.preventDefault(),i.rolePreview=null,Ye("Role preview ended.","live","Role preview");return}if(a==="open-invite-form"){e.preventDefault(),i.modal="invite-new",u();return}if(a==="copy-invite-link"){e.preventDefault(),Gs(t.dataset.inviteId);return}if(a==="copy-invite-code"){e.preventDefault(),Zs(t.dataset.inviteId);return}if(a==="revoke-invite"){e.preventDefault(),Xs(t.dataset.inviteId);return}if(a==="approve-join-request"){e.preventDefault(),Fa(t.dataset.requestId,"approved");return}if(a==="reject-join-request"){e.preventDefault(),Fa(t.dataset.requestId,"rejected");return}if(a==="start-checkout"){e.preventDefault(),Ws();return}if(a==="open-file-upload"){e.preventDefault(),i.modal="file-upload",u();return}if(a==="open-folder-form"){e.preventDefault(),i.modal="folder-new",u();return}if(a==="open-job-form"){e.preventDefault();const n=t.dataset.jobId||"";n&&(i.selectedJobId=n),i.modal=t.dataset.mode==="edit"?"job-edit":"job-new",u();return}if(a==="open-forms-tools"){e.preventDefault(),i.modal="forms-tools",u();return}if(a==="open-form-actions"){e.preventDefault(),Xe(t.dataset.formId,!1),i.modal="form-actions",u();return}if(a==="open-form-preview"){e.preventDefault(),Xe(t.dataset.formId,!1),i.modal="form-preview",u();return}if(a==="set-form-start-tab"){e.preventDefault(),i.formStartTab=t.dataset.tab==="templates"?"templates":"blank",i.formStartTab==="blank"&&(i.formStartTemplateId=""),i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=Me()[0]?.id||""),u();return}if(a==="select-form-start-template"){e.preventDefault(),i.formStartTab="templates",i.formStartTemplateId=t.dataset.templateId||Me()[0]?.id||"",u();return}if(a==="close-modal"){e.preventDefault(),Ns();return}if(a==="set-task-view"){e.preventDefault(),i.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(Ua,i.taskView),u();return}if(a==="set-drive-view"){e.preventDefault(),i.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(Qa,i.driveView),u();return}if(a==="clock-in"){e.preventDefault(),Lr(p(),t.dataset.taskId||i.route?.params?.get("task_id")||"");return}if(a==="clock-out"){e.preventDefault(),wi();return}if(a==="select-file"){e.preventDefault(),i.selectedFileId=t.dataset.fileId||"",i.modal="file-detail",u();return}if(a==="download-file"){e.preventDefault(),mr(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),fr(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),i.formsTab=t.dataset.tab==="responses"?"responses":"library",u();return}if(a==="set-form-editor-tab"){e.preventDefault(),i.formEditorTab=t.dataset.tab||"questions",u();return}if(a==="new-form"){e.preventDefault(),i.formStartTemplateId=t.dataset.templateId||"",i.formStartTab=t.dataset.startTab==="templates"||i.formStartTemplateId?"templates":"blank",i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=Me()[0]?.id||""),i.modal="form-new",u();return}if(a==="select-form"){e.preventDefault(),Xe(t.dataset.formId);return}if(a==="toggle-form-card"){e.preventDefault();const n=t.dataset.formId||"";i.expandedFormIds.has(n)?i.expandedFormIds.delete(n):i.expandedFormIds.add(n),u();return}if(a==="edit-form"){e.preventDefault(),Xe(t.dataset.formId,!1),i.formsTab="builder",i.formEditorTab="questions",i.modal="",u();return}if(a==="save-form"){e.preventDefault(),J("Form saved locally"),u();return}if(a==="publish-form"){e.preventDefault(),Pa(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),Pa(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),vo(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),yo(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),_o(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),ho(p());return}if(a==="new-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId="",i.modal="finance-invoice-new",u();return}if(a==="edit-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||"",i.modal="finance-invoice-edit",u();return}if(a==="new-finance-payment"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||i.route?.params?.get("invoice")||"",i.modal="finance-payment-new",u();return}if(a==="new-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId="",i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-expense-new",u();return}if(a==="edit-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId=t.dataset.expenseId||"",i.modal="finance-expense-edit",u();return}if(a==="new-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId="",i.modal="finance-vendor-new",u();return}if(a==="edit-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-vendor-edit",u();return}if(a==="add-question"){e.preventDefault(),$o(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),wo(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),So(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),ko(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),jo(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),Do(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),nr(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),rr(t.dataset.taskId))}function Ns(){const e=i.route||yt();if(i.modal="",i.formStartTemplateId="",i.formStartTab="blank",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",e.name==="company"&&e.section==="tasks"&&(e.params.get("new")||e.params.get("edit")||e.params.get("task_id"))){w(d("tasks",e.jobId?{job_id:e.jobId}:{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"){const t=e.jobId?C(e.jobId):pe();w(d("jobs",{tab:t?"profile":"pipeline",...t?{job_id:t.id}:{}},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="crm"&&e.params.get("account")){w(d("crm",{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="finance"&&(e.params.get("invoice")||e.params.get("expense")||e.params.get("vendor")||e.params.get("report"))){w(d("finance",{},e.companyId),{replace:!0});return}u()}function Us(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===we.localUsername&&String(t.password||"")===we.localPassword)){i.loginError="Invalid temporary credentials.",u();return}i.loginError="",pi(t.return_url||g(d("jobs",{},F())));return}if(e.target.matches("[data-auth-sign-in-form]")){e.preventDefault(),Vs(e.target);return}if(e.target.matches("[data-auth-register-form]")){e.preventDefault(),Bs(e.target);return}if(e.target.matches("[data-auth-invite-code-form]")){e.preventDefault(),Js(e.target);return}if(e.target.matches("[data-auth-request-form]")){e.preventDefault(),zs(e.target);return}if(e.target.matches("[data-company-create-form]")){e.preventDefault(),Hs(e.target);return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...D().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};x(Na,a),i.profileDraft=a,i.session={...D(),profile:a},x(Se,i.session),i.modal="",u();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),ir(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),sr(e.target);return}if(e.target.matches("[data-new-form-form]")){e.preventDefault(),go(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),or(e.target);return}if(e.target.matches("[data-folder-form]")){e.preventDefault(),lr(e.target);return}if(e.target.matches("[data-finance-invoice-form]")){e.preventDefault(),cr(e.target);return}if(e.target.matches("[data-finance-payment-form]")){e.preventDefault(),dr(e.target);return}if(e.target.matches("[data-finance-expense-form]")){e.preventDefault(),ur(e.target);return}if(e.target.matches("[data-finance-vendor-form]")){e.preventDefault(),pr(e.target);return}if(e.target.matches("[data-role-form]")){e.preventDefault(),Ys(e.target);return}if(e.target.matches("[data-invite-form]")){e.preventDefault(),Ks(e.target);return}if(e.target.matches("[data-user-role-form]")){e.preventDefault(),er(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),Co(e.target))}async function Qs(){if(i.session?.auth==="supabase"){const e=R();e?.auth&&await e.auth.signOut()}localStorage.removeItem(Se),i.session=null,i.dataLoaded=!1,w("/login",{replace:!0})}function pi(e=""){i.loginError="",i.authMessage="",i.session=Qt(),ri(),i.activeCompanyId=p(),localStorage.setItem(ne,i.activeCompanyId),x(Se,i.session),i.dataLoaded=!1,i.dataLoading=!1,w(_t(e||g(d("jobs",{},p()))),{replace:!0})}async function Vs(e){const t=Object.fromEntries(new FormData(e).entries()),a=R();if(!a?.auth){i.loginError="Supabase auth is unavailable.",u();return}i.loginError="",i.authMessage="Signing in...",u();const n=await a.auth.signInWithPassword({email:String(t.email||"").trim(),password:String(t.password||"")});if(n.error){i.loginError=n.error.message||"Unable to sign in.",i.authMessage="",u();return}if(await Ae(n.data.session),t.invite_token){await mi(t.invite_token,t.return_url);return}i.authMessage="",i.dataLoaded=!1,w(_t(t.return_url||g(d("jobs",{},F()))),{replace:!0})}function Js(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.invite_code||"").trim();if(!a){i.loginError="Invite code is required.",u();return}i.loginError="",i.authMessage="",i.authMode="register";const n=new URLSearchParams({invite:a}),s=_t(t.return_url||"");s&&n.set("return_url",s),w(`/login?${n.toString()}`,{replace:!0})}async function Bs(e){const t=Object.fromEntries(new FormData(e).entries()),a=R();if(!a?.auth){i.loginError="Supabase auth is unavailable.",u();return}const n=String(t.email||"").trim(),s=String(t.password||""),o=String(t.full_name||"").trim(),l=String(t.invite_token||"").trim(),c=String(t.company_name||"").trim();if(!n||!s||!o||!l&&!c){i.loginError=l?"Name, email, and password are required.":"Name, email, password, and company workspace are required.",u();return}i.loginError="",i.authMessage=l?"Creating account and accepting invite...":"Creating secure workspace...",u();const m=await a.auth.signUp({email:n,password:s,options:{data:{full_name:o}}});if(m.error){i.loginError=m.error.message||"Unable to create account.",i.authMessage="",u();return}let b=m.data.session;if(!b){const y=await a.auth.signInWithPassword({email:n,password:s});if(y.error){i.loginError="Account created. Please sign in to finish workspace setup.",i.authMode="signin",i.authMessage="",u();return}b=y.data.session}if(await Ae(b),l){await mi(l,t.return_url);return}const f=await a.rpc("create_company_workspace",{company_name:c});if(f.error){i.loginError=f.error.message||"Account created, but workspace setup failed.",i.authMessage="",u();return}i.activeCompanyId=h(f.data||F()),localStorage.setItem(ne,i.activeCompanyId),i.dataLoaded=!1,i.authMessage="",w(d("settings",{tab:"billing"},i.activeCompanyId),{replace:!0})}async function Hs(e){const t=Object.fromEntries(new FormData(e).entries()),a=R(),n=String(t.company_name||"").trim();if(!a||!n){i.loginError="Company workspace name is required.",u();return}const s=await a.rpc("create_company_workspace",{company_name:n});if(s.error){i.loginError=s.error.message||"Workspace setup failed.",u();return}i.activeCompanyId=h(s.data||F()),localStorage.setItem(ne,i.activeCompanyId),i.dataLoaded=!1,w(d("settings",{tab:"billing"},i.activeCompanyId),{replace:!0})}async function zs(e){const t=Object.fromEntries(new FormData(e).entries()),a=R();if(!a?.auth){i.loginError="Supabase auth is unavailable.",u();return}const n=String(t.email||"").trim(),s=String(t.password||""),o=h(t.company_id||"");i.loginError="",i.authMessage="Submitting access request...",u();const l=await a.auth.signInWithPassword({email:n,password:s});if(l.error){i.loginError=l.error.message||"Sign in first to request access.",i.authMessage="",u();return}await Ae(l.data.session);const c=await a.rpc("request_company_access",{target_company_id:o,request_message:String(t.message||"").trim()||null});if(c.error){i.loginError=c.error.message||"Unable to request access.",i.authMessage="",u();return}i.authMessage="Access request sent. An Owner/Admin must approve it.",i.loginError="",i.authMode="signin",u()}async function Ws(){const e=p();i.sync={label:"Opening billing...",mode:"loading"},u();try{const t=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json",...D().access_token?{Authorization:`Bearer ${D().access_token}`}:{}},body:JSON.stringify({company_id:e,return_url:`${window.location.origin}${g(d("settings",{tab:"billing"},e))}`})}),a=await t.json().catch(()=>({}));if(!t.ok||!a.url)throw new Error(a.error||"Billing is not configured yet.");window.location.href=a.url}catch(t){i.sync={label:t.message||"Billing unavailable",mode:"local"},u()}}async function Ys(e){const t=p(),a=new FormData(e),n=he({id:crypto.randomUUID(),company_id:t,name:a.get("name"),color:a.get("color")||"#f0b23b",priority:a.get("priority")||100,is_system:!1,created_by:D().profile.id}),s=a.getAll("permissions").map(l=>String(l||"")).filter(Boolean),o=R();if(i.session?.auth==="supabase"&&o){const l=await o.from("roles").insert(n).select().single();if(l.error){i.sync={label:l.error.message||"Role save failed",mode:"local"},u();return}const c=he(l.data),m=s.map(b=>({role_id:c.id,permission_key:b,effect:"allow"}));m.length&&await o.from("role_permissions").insert(m),i.roles.unshift(c),i.rolePermissions=m.concat(i.rolePermissions).map(Ut),i.sync={label:"Role saved",mode:"live"}}else i.roles.unshift(n),i.rolePermissions=s.map(l=>Ut({role_id:n.id,permission_key:l,effect:"allow"})).concat(i.rolePermissions),i.sync={label:"Role saved locally",mode:"local"};i.modal="",u()}async function Ks(e){const t=new FormData(e),a=h(t.get("company_id")||p()),n=String(t.get("email")||"").trim().toLowerCase(),s=String(t.get("role_id")||"").trim();if(!n){i.sync={label:"Invite email is required",mode:"local"},u();return}const o=dt({id:crypto.randomUUID(),company_id:a,email:n,role_id:Sa(s)?s:"",token:Tr(),status:"pending",invited_by:D().profile.id,expires_at:new Date(Date.now()+336*60*60*1e3).toISOString(),created_at:new Date().toISOString()}),l=R();if(i.session?.auth==="supabase"&&l){const c={company_id:o.company_id,email:o.email,role_id:o.role_id||null,token:o.token,status:"pending",invited_by:D().profile.id},m=await l.from("company_invites").insert(c).select().single();if(m.error){i.sync={label:m.error.message||"Invite save failed",mode:"local"},u();return}i.companyInvites.unshift(dt(m.data)),i.sync={label:"Invite code created. Copy it for the new user.",mode:"live"}}else i.companyInvites.unshift(o),i.sync={label:"Invite code created locally",mode:"local"};i.modal="",u()}async function mi(e,t=""){const a=R();if(!a){i.loginError="Supabase auth is unavailable.",i.authMessage="",u();return}i.authMessage="Accepting workspace invite...",u();const n=await a.rpc("accept_company_invite",{invite_token:String(e||"").trim()});if(n.error){i.loginError=n.error.message||"Unable to accept invite.",i.authMessage="",u();return}const s=h(n.data||F());i.activeCompanyId=s,localStorage.setItem(ne,s),i.authMessage="",i.loginError="",i.dataLoaded=!1,w(d("jobs",{},s),{replace:!0})}async function Gs(e){const t=i.companyInvites.find(a=>a.id===e);if(!t?.token){i.sync={label:"Invite link is unavailable",mode:"local"},u();return}try{await navigator.clipboard.writeText(Er(t)),i.sync={label:"Invite link copied",mode:"live"}}catch{i.sync={label:"Copy failed",mode:"local"}}u()}async function Zs(e){const t=i.companyInvites.find(a=>a.id===e);if(!t?.token){i.sync={label:"Invite code is unavailable",mode:"local"},u();return}try{await navigator.clipboard.writeText(t.token),i.sync={label:"Invite code copied",mode:"live"}}catch{i.sync={label:"Copy failed",mode:"local"}}u()}async function Xs(e){const t=i.companyInvites.find(n=>n.id===e);if(!t)return;const a=R();if(i.session?.auth==="supabase"&&a){const n=await a.from("company_invites").update({status:"revoked",updated_at:new Date().toISOString()}).eq("id",t.id);if(n.error){i.sync={label:n.error.message||"Invite revoke failed",mode:"local"},u();return}i.sync={label:"Invite revoked",mode:"live"}}else i.sync={label:"Invite revoked locally",mode:"local"};i.companyInvites=i.companyInvites.map(n=>n.id===t.id?dt({...n,status:"revoked"}):n),Q(),u()}async function er(e){const t=new FormData(e),a=h(t.get("company_id")||p()),n=String(t.get("profile_id")||"").trim(),s=String(t.get("role_id")||"").trim(),o=["active","pending","disabled"].includes(String(t.get("membership_status")))?String(t.get("membership_status")):"active",l=Ve(a,s);if(!n||!l){i.sync={label:"Select a user and role",mode:"local"},u();return}const c=ct({company_id:a,profile_id:n,role:gi(l),status:o}),m=Mi({company_id:a,profile_id:n,role_id:l.id,assigned_by:D().profile.id}),b=R();if(i.session?.auth==="supabase"&&b){const f=Sa(l.id),y=await b.from("company_memberships").upsert(fi(c),{onConflict:"company_id,profile_id"}).select().single();if(y.error){i.sync={label:y.error.message||"Access update failed",mode:"local"},u();return}if(f){await b.from("user_role_assignments").delete().eq("company_id",a).eq("profile_id",n);const L=await b.from("user_role_assignments").insert(m);if(L.error){i.sync={label:L.error.message||"Role assignment failed",mode:"local"},u();return}}st(ct(y.data||c)),f&&xa(m),i.sync={label:f?"User access saved":"Membership saved; create a role to assign permissions",mode:"live"}}else st(c),xa(m),i.sync={label:"User access saved locally",mode:"local"};u()}async function Fa(e,t){const a=i.joinRequests.find(l=>l.id===e);if(!a||!["approved","rejected"].includes(t))return;const n=R(),s=Ai({...a,status:t}),o=ct({company_id:a.company_id,profile_id:a.profile_id,role:"member",status:t==="approved"?"active":"disabled"});if(i.session?.auth==="supabase"&&n){if(t==="approved"){const c=await n.from("company_memberships").upsert(fi(o),{onConflict:"company_id,profile_id"});if(c.error){i.sync={label:c.error.message||"Approval failed",mode:"local"},u();return}}const l=await n.from("company_join_requests").update({status:t,reviewed_by:D().profile.id,updated_at:new Date().toISOString()}).eq("id",a.id);if(l.error){i.sync={label:l.error.message||"Request update failed",mode:"local"},u();return}t==="approved"&&st(o),i.sync={label:t==="approved"?"Access approved":"Request rejected",mode:"live"}}else t==="approved"&&st(o),i.sync={label:t==="approved"?"Access approved locally":"Request rejected locally",mode:"local"};i.joinRequests=i.joinRequests.map(l=>l.id===a.id?s:l),Q(),u()}function tr(e){if(e.target.matches("[data-global-search]")){i.query=e.target.value,Ke();return}if(e.target.matches("[data-file-search]")){i.fileQuery=e.target.value,Ke();return}if(e.target.matches("[data-form-search]")){i.formQuery=e.target.value,Ke();return}if(e.target.matches("[data-crm-search]")){i.crmQuery=e.target.value,Ke();return}if(e.target.matches("[data-form-field]")){Qi(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Vi(e.target)}function ar(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||F();Dr(t);return}if(e.target.matches("[data-stage-filter]")){i.stageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-stage-filter]")){i.crmStageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-owner-filter]")){i.crmOwnerFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-status-filter]")){i.taskStatusFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-priority-filter]")){i.taskPriorityFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;w(d("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;w(d("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){i.fileCategoryFilter=e.target.value||"All categories",u();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=i.route?.jobId||"";w(d("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;w(d("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){i.formTypeFilter=e.target.value||"all",u();return}if(e.target.matches("[data-form-field]")){Qi(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Vi(e.target)}async function ir(e){const t=ke(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.invoice_total=Number(t.invoice_total||0),t.updated_at=new Date().toISOString();const a=i.jobs.some(s=>s.id===t.id),n=R();if(n){const s=a?await n.from("jobs").update(t).eq("id",t.id).select().single():await n.from("jobs").insert(t).select().single();if(!s.error&&s.data){Pt(ke(s.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",w(d("jobs",{tab:"profile",job_id:s.data.id},t.company_id),{replace:!0});return}i.sync={label:"Saved locally",mode:"local"}}Pt(t),i.modal="",w(d("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function nr(e){if(!e)return;const t=p(),a=R();a&&await a.from("jobs").delete().eq("id",e),i.jobs=i.jobs.filter(n=>n.id!==e),i.selectedJobId=O(t)[0]?.id||"",i.modal="",Q(),w(d("jobs",{tab:"list"},t),{replace:!0})}async function sr(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),n=je({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:D().profile.member_id||se(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),s=i.tasks.some(l=>l.id===n.id),o=R();if(o){const l=Kr(n),c=s?await o.from("tasks").update(l).eq("id",n.id).select().single():await o.from("tasks").insert(l).select().single();if(!c.error&&c.data){Ma(je(c.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",w(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0});return}i.sync={label:"Task saved locally",mode:"local"}}Ma(n),i.modal="",w(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0})}async function rr(e){if(!e)return;const t=p(),a=R();a&&await a.from("tasks").delete().eq("id",e),i.tasks=i.tasks.filter(n=>n.id!==e),i.selectedTaskId="",i.modal="",Q(),w(d("tasks",{},t),{replace:!0})}async function or(e){const t=p(),a=new FormData(e),n=Object.fromEntries(a.entries()),s=Array.from(e.elements.files?.files||[]),o=String(n.file_name||"").trim(),l=s.length?s:o?[null]:[];if(!l.length){i.sync={label:"Choose a file or enter a file name",mode:"local"},u();return}const c=R();let m=0;for(const b of l){const f=crypto.randomUUID(),y=b?.name||o,L=String(n.folder||"shared"),q=`${t}/${n.job_id?`jobs/${n.job_id}`:L}/${f}-${wa(y)}`;let H=!1;c&&b&&(H=!(await c.storage.from("quest-job-files").upload(q,b,{cacheControl:"3600",upsert:!1,contentType:b.type||"application/octet-stream"})).error);const Ie=Te({id:f,company_id:t,job_id:n.job_id||"",folder:L,file_name:y,mime_type:b?.type||"application/octet-stream",size_bytes:b?.size||Number(n.size_bytes||0),category:n.category||ee(L),notes:n.notes||"",uploaded_by_label:n.uploaded_by_label||D().profile.full_name,bucket_id:"quest-job-files",object_path:H||!b?q:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(c){const ce=await c.from("job_files").insert(Gr(Ie)).select().single();if(!ce.error&&ce.data){Aa(Te(ce.data)),m+=1;continue}H&&await c.storage.from("quest-job-files").remove([q])}Aa(Ie)}i.sync=m===l.length?{label:"Quest Supabase live",mode:"live"}:{label:m?"Some files saved locally":"File record saved locally",mode:m?"loading":"local"},i.modal="",w(d("files",{folder:n.folder||"shared",...n.job_id?{job_id:n.job_id}:{}},t),{replace:!0})}function lr(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.name||"").trim();if(!a){i.sync={label:"Folder name is required",mode:"local"},u();return}const n=fa({id:`folder-${crypto.randomUUID()}`,company_id:p(),name:a,parent_key:t.parent_key||"home",created_by_label:D().profile.full_name||"Quest HQ",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.driveFolders.unshift(n),i.modal="",i.sync={label:"Folder created locally",mode:"local"},Q(),u()}function cr(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=C(t.job_id),s=String(t.id||"").trim()?ge(String(t.id).trim()):null,o=qt({...t,id:String(t.id||"").trim()||`invoice-${crypto.randomUUID()}`,company_id:a,client_name:String(t.client_name||n?.client_name||"").trim(),total:E(t.subtotal)+E(t.tax),updated_at:new Date().toISOString()});br(o),s?.job_id&&s.job_id!==o.job_id&&Rt(s.job_id),Rt(o.job_id),i.modal="",i.sync={label:"Finance saved locally",mode:"local"},w(d("finance",{invoice:o.id},a),{replace:!0})}function dr(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=ge(t.invoice_id);if(!n||n.company_id!==a){i.sync={label:"Create an invoice before recording a payment",mode:"local"},u();return}const s=It({...t,id:`payment-${crypto.randomUUID()}`,company_id:a,created_at:new Date().toISOString()});i.financePayments.unshift(s),n.status=ae(n.id)<=0?"Paid":"Partially paid",n.updated_at=new Date().toISOString(),Rt(n.job_id),Q(),i.modal="",i.sync={label:"Payment recorded locally",mode:"local"},w(d("finance",s.invoice_id?{invoice:s.invoice_id}:{},a),{replace:!0})}function ur(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=Ft({...t,id:String(t.id||"").trim()||`expense-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});gr(n),i.modal="",i.sync={label:"Expense saved locally",mode:"local"},w(d("finance",{expense:n.id},a),{replace:!0})}function pr(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=Mt({...t,id:String(t.id||"").trim()||`vendor-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});vr(n),i.modal="",i.sync={label:"Vendor saved locally",mode:"local"},w(d("finance",{vendor:n.id},a),{replace:!0})}async function mr(e){const t=i.files.find(s=>s.id===e);if(!t?.object_path){i.sync={label:"No stored object for this file",mode:"local"},u();return}const a=R();if(!a)return;const n=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(n.error||!n.data?.signedUrl){i.sync={label:"Download failed",mode:"local"},u();return}window.open(n.data.signedUrl,"_blank","noopener,noreferrer")}async function fr(e){const t=i.files.find(n=>n.id===e);if(!t)return;const a=R();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),i.files=i.files.filter(n=>n.id!==e),i.selectedFileId="",i.modal="",Q(),u()}function Pt(e){const t=i.jobs.findIndex(a=>a.id===e.id);t>=0?i.jobs[t]=e:i.jobs.unshift(e),i.selectedJobId=e.id,Q()}function Ma(e){const t=i.tasks.findIndex(a=>a.id===e.id);t>=0?i.tasks[t]=e:i.tasks.unshift(e),i.selectedTaskId=e.id,Q()}function Aa(e){const t=i.files.findIndex(a=>a.id===e.id);t>=0?i.files[t]=e:i.files.unshift(e),Q()}function br(e){const t=i.financeInvoices.findIndex(a=>a.id===e.id);t>=0?i.financeInvoices[t]=e:i.financeInvoices.unshift(e),Q()}function gr(e){const t=i.financeExpenses.findIndex(a=>a.id===e.id);t>=0?i.financeExpenses[t]=e:i.financeExpenses.unshift(e),Q()}function vr(e){const t=i.financeVendors.findIndex(a=>a.id===e.id);t>=0?i.financeVendors[t]=e:i.financeVendors.unshift(e),Q()}function st(e){const t=i.memberships.findIndex(a=>a.company_id===e.company_id&&a.profile_id===e.profile_id);t>=0?i.memberships[t]=e:i.memberships.unshift(e),Q()}function xa(e){i.roleAssignments=i.roleAssignments.filter(t=>t.company_id!==e.company_id||t.profile_id!==e.profile_id),e.role_id&&i.roleAssignments.unshift(e)}function fi(e){return{company_id:e.company_id,profile_id:e.profile_id,role:e.role,status:e.status}}function Rt(e){if(!e)return;const t=C(e);t&&(t.invoice_total=K(be(t.company_id).filter(a=>a.job_id===e),"total"),t.updated_at=new Date().toISOString(),Pt(t))}function Ke(){const e=document.getElementById("workspace");e&&(bi(i.route),e.innerHTML=ci(i.route))}function yt(){const e=na(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const n=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:n,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function yr(){const e=na(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||tt(t.get("job_id")||t.get("project_id"))||localStorage.getItem(ne)||F(),n=Object.fromEntries(Object.entries(Yi).map(([l,c])=>[l,d(c,{},a)]));Object.assign(n,{"/index.html":d("jobs",{},a),"/command.html":d("jobs",{},a),"/login.html":"/login"});let s=n[e];if(e==="/jobs"){const l=t.get("tab");l==="tasks"?s=d("tasks",Y(t,["job_id","task_id","new","edit"]),a):l==="files"?s=d("files",Y(t,["job_id","folder"]),a):l==="forms"?s=d("forms",Y(t,["job_id"]),a):l==="analytics"?s=d("analytics",Y(t,["job_id"]),a):s=d("jobs",Y(t,["job_id","tab"]),a)}if(e==="/files"&&(s=d("files",Y(t,["job_id","folder"]),a)),e==="/forms"&&(s=d("forms",Y(t,["job_id"]),a)),e==="/analytics"&&(s=d("analytics",Y(t,["job_id"]),a)),e==="/crm"&&(s=d("crm",Y(t,["account"]),a)),e==="/finance"&&(s=d("finance",Y(t,["invoice","expense","vendor","report"]),a)),e==="/admin"&&(s=d("settings",{},a)),e==="/time"&&(s=d("time",{},a)),e==="/team"&&(s=d("team-chart",{},a)),e==="/team-chart"&&(s=d("team-chart",{},a)),e==="/approvals"&&(s=d("approvals",{},a)),e==="/clock"&&(s=d("clock",{},a)),e==="/task-management.html"){const l=t.get("project_id")||t.get("job_id")||"";s=d("tasks",l?{job_id:l}:{},tt(l)||a)}const o=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(o){const l=decodeURIComponent(o[1]);s=d("tasks",{job_id:l},tt(l)||a)}s&&window.history.replaceState({},"",g(s))}function _r(e){if(e.name!=="company")return"";const t=qe();if(i.session?.auth==="supabase"&&!t.length)return null;if(!t.includes(e.companyId))return d(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||F());if(!bt.map(s=>s.id).includes(e.section))return d("jobs",{},e.companyId);const n=e.jobId?tt(e.jobId):"";return n&&n!==e.companyId&&t.includes(n)?d(e.section,Object.fromEntries(e.params.entries()),n):""}function na(){let e=window.location.pathname||"/";return _e&&e.startsWith(_e)&&(e=e.slice(_e.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function g(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),n=t.startsWith("/")?t:"/"+t;return`${_e}${n}${a?`?${a}`:""}`||"/"}function w(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(_e+"/")||_e===""&&e.startsWith("/")?e:g(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),u()}function hr(){return`${na()}${window.location.search}`}function _t(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?g(d("jobs",{},F())):`${t.pathname}${t.search}`}catch{return g(d("jobs",{},F()))}}function d(e="jobs",t={},a=p()){const n=new URLSearchParams(t);for(const[s,o]of[...n.entries()])(o==null||o==="")&&n.delete(s);return`/company/${encodeURIComponent(h(a||F()))}/${e}${n.toString()?`?${n.toString()}`:""}`}function $r(e){return e.name==="company"?M(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":M(e.name||"Workspace")}function wr(e,t){const[a]=t.split("?"),n=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!n||e.name!=="company"?!1:e.companyId===decodeURIComponent(n[1])&&e.section===n[2]}function Sr(e){return Va.includes(e)?e:"pipeline"}function kr(e){return{pipeline:"Pipeline",list:"List",profile:"Profile"}[e]||e}function jr(e){const t=e.companyId||i.activeCompanyId||F(),a=qe();i.activeCompanyId=a.includes(t)?t:a[0]||F(),localStorage.setItem(ne,i.activeCompanyId)}function bi(e){const t=p();e.jobId&&O(t).some(n=>n.id===e.jobId)&&(i.selectedJobId=e.jobId),(!i.selectedJobId||!O(t).some(n=>n.id===i.selectedJobId))&&(i.selectedJobId=O(t)[0]?.id||"");const a=e.params.get("task_id");a&&z(t).some(n=>n.id===a)&&(i.selectedTaskId=a),e.section!=="tasks"&&(i.selectedTaskId=""),i.driveFolder=e.params.get("folder")||"home"}function Dr(e){const t=qe(),a=h(e),n=t.includes(a)?a:t[0]||F();i.activeCompanyId=n,localStorage.setItem(ne,n),Cr();const s=i.route||yt(),o=s.name==="company"?s.section:"jobs";w(d(o,{},n))}function Cr(){i.modal="",i.selectedJobId="",i.selectedTaskId="",i.selectedFileId="",i.selectedFormId="",i.selectedQuestionId="",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",i.query="",i.fileQuery="",i.formQuery="",i.crmQuery="",i.stageFilter="all",i.crmStageFilter="all",i.crmOwnerFilter="all",i.taskStatusFilter="all",i.taskPriorityFilter="all",i.fileCategoryFilter="All categories",i.formTypeFilter="all",i.formsTab="library",i.driveFolder="home"}function qr(e){const t=C(e);t&&(i.selectedJobId=e,w(d("jobs",{tab:"profile",job_id:e},t.company_id)))}function Ir(e){const t=sa(e);t&&(i.selectedTaskId=e,w(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function pe(){return C(i.selectedJobId)||O(p())[0]||null}function C(e){return i.jobs.find(t=>t.id===e)||null}function sa(e){return i.tasks.find(t=>t.id===e)||null}function O(e=p()){return i.jobs.filter(t=>t.company_id===e)}function z(e=p()){return i.tasks.filter(t=>t.company_id===e)}function me(e=p()){return i.files.filter(t=>t.company_id===e)}function xe(e=p()){return i.driveFolders.filter(t=>t.company_id===e)}function se(e=p()){return i.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function Fr(e=p()){const t=new Map;se(e).forEach(n=>{t.set(n.id,{profile_id:"",member_id:n.id,name:n.full_name||n.name,email:n.email,avatar_url:n.avatar_url,role:rt(e,n.id).toLowerCase(),role_label:rt(e,n.id),role_id:"",status:n.active?"active":"disabled"})}),i.memberships.filter(n=>n.company_id===e).forEach(n=>{const s=vi(n.profile_id),o=n.member_id?i.teamMembers.find(b=>b.id===n.member_id):null,l=i.roleAssignments.find(b=>b.company_id===e&&b.profile_id===n.profile_id),c=l?Ve(e,l.role_id):null,m=n.profile_id||n.member_id;t.set(m,{profile_id:n.profile_id,member_id:n.member_id,name:s?.full_name||o?.full_name||s?.email||o?.name||m||"User",email:s?.email||o?.email||"",avatar_url:s?.avatar_url||o?.avatar_url||"",role:n.role,role_label:c?.name||M(n.role),role_id:l?.role_id||Lt(e,n.role),status:n.status||"active"})});const a=D().profile;if(i.session?.auth==="supabase"&&a?.id&&!t.has(a.id)){const n=ot(e,a.id);n&&t.set(a.id,{profile_id:a.id,member_id:a.member_id||"",name:a.full_name||a.email,email:a.email,avatar_url:a.avatar_url,role:n.role,role_label:M(n.role),role_id:Lt(e,n.role),status:n.status||"active"})}return[...t.values()].sort((n,s)=>(n.status==="active"?0:1)-(s.status==="active"?0:1)||n.name.localeCompare(s.name))}function Mr(e=p()){return i.companyInvites.filter(t=>t.company_id===e&&t.status==="pending").sort((t,a)=>Date.parse(a.created_at||0)-Date.parse(t.created_at||0))}function fe(e=p()){const t=i.roles.filter(a=>a.company_id===e);return t.length?t.sort((a,n)=>n.priority-a.priority||a.name.localeCompare(n.name)):[he({id:`owner-${e}`,company_id:e,name:"Owner",color:"#f0b23b",priority:1e3,is_system:!0}),he({id:`admin-${e}`,company_id:e,name:"Admin",color:"#60a5fa",priority:800,is_system:!0}),he({id:`staff-${e}`,company_id:e,name:"Staff",color:"#15803d",priority:100,is_system:!0})]}function Ve(e,t){return fe(e).find(a=>a.id===t)||null}function ht(e=p()){return!i.rolePreview||i.rolePreview.company_id!==e?null:Ve(e,i.rolePreview.role_id)}function Ar(e,t){if(!t)return!0;const a=String(e?.name||"").toLowerCase();if(["owner","admin","developer"].includes(a))return!0;const n=i.rolePermissions.filter(l=>l.role_id===e?.id);if(n.some(l=>(l.permission_key===t||l.permission_key==="*")&&l.effect==="deny"))return!1;if(n.some(l=>(l.permission_key===t||l.permission_key==="*")&&l.effect==="allow"))return!0;if(n.length)return!1;const s=gi(e),o=at[s]||at.member;return o.includes("*")||o.includes(t)}function Lt(e,t){const a=String(t||"").toLowerCase();return fe(e).find(n=>n.name.toLowerCase()===a||n.id.toLowerCase()===a)?.id||""}function xr(e=p()){const t=fe(e).filter(a=>a.name.toLowerCase()!=="owner");return t.find(a=>a.name.toLowerCase()==="staff")?.id||t.find(a=>a.name.toLowerCase()==="member")?.id||t[0]?.id||""}function Tr(){const e=new Uint8Array(8);return crypto.getRandomValues(e),`QH-${Array.from(e,t=>t.toString(36).padStart(2,"0")).join("").toUpperCase()}`}function Er(e){const t=new URL(g("/login"),window.location.origin);return t.searchParams.set("invite",e.token),t.toString()}function gi(e){const t=String(e?.name||"").toLowerCase().replace(/\s+/g,"_");return["owner","member","worker","sales","supervisor","admin","developer","construction_supervisor"].includes(t)?t:"member"}function vi(e){return i.profiles.find(t=>t.id===e)||(D().profile.id===e?D().profile:null)}function yi(e=p()){const t=i.query.trim().toLowerCase();return O(e).filter(a=>i.stageFilter!=="all"&&a.stage!==i.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,j(a.company_id)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function $t(e=p()){const t=new Map;return O(e).forEach(a=>{const n=String(a.client_name||"").trim()||"Unassigned customer",s=`account-${wa(n.toLowerCase())}`;t.has(s)||t.set(s,{key:s,name:n,jobs:[]}),t.get(s).jobs.push(a)}),Array.from(t.values()).map(a=>{const n=a.jobs.slice().sort((q,H)=>Date.parse(H.updated_at||H.created_at||0)-Date.parse(q.updated_at||q.created_at||0)),s=n[0]||null,o=n.map(q=>q.id),l=z(e).filter(q=>o.includes(q.project_id)),c=oe(e).filter(q=>o.includes(q.linked_job_id)),m=me(e).filter(q=>o.includes(q.job_id)),b=Z(n.map(q=>q.contact_name)),f=Z(n.map(q=>q.owner_name)),y=Z(n.map(q=>q.site_address)),L=n.map(q=>q.priority||"Medium").sort((q,H)=>De(H)-De(q))[0]||"Medium";return{...a,jobs:n,tasks:l,latestJob:s,contacts:b,owners:f,addresses:y,forms:c,files:m,primaryContact:b[0]||"No contact",owner:f[0]||"Unassigned",stage:s?.stage||"Lead",priority:L,estimateTotal:K(n,"estimate_total"),fileCount:m.length,formCount:c.length,updatedAt:s?.updated_at||s?.created_at||new Date().toISOString(),subtitle:y[0]||`${n.length} linked job${n.length===1?"":"s"}`}}).sort((a,n)=>Date.parse(n.updatedAt||0)-Date.parse(a.updatedAt||0))}function Or(e=p()){const t=i.crmQuery.trim().toLowerCase();return $t(e).filter(a=>i.crmStageFilter!=="all"&&!a.jobs.some(n=>n.stage===i.crmStageFilter)||i.crmOwnerFilter!=="all"&&!a.owners.includes(i.crmOwnerFilter)?!1:t?[a.name,a.primaryContact,a.owner,a.stage,...a.addresses,...a.contacts,...a.jobs.map(n=>n.name)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function Pr(e,t){return $t(e).find(a=>a.key===t)||null}function Rr(e=p()){return Z(O(e).map(t=>t.owner_name)).sort((t,a)=>t.localeCompare(a))}function _i(e=p()){const t=D().profile.member_id||"",a=z(e).slice().sort(Ea),n=a.filter(ra),s=n.filter(y=>y.due===k(0)),o=n.filter(y=>La(y.due)<0),l=n.filter(y=>{const L=La(y.due);return L>=0&&L<=7}),c=n.filter(y=>y.assignee_id===t),m=n.filter(y=>["review","pending"].includes(y.status)),b=a.filter(y=>y.status==="done"),f=Z(o.concat(s,c,m,l).map(y=>y.id)).map(y=>a.find(L=>L.id===y)).filter(Boolean).sort(Ea);return{tasks:a,open:n,dueToday:s,overdue:o,thisWeek:l,assignedToMe:c,review:m,done:b,focus:f}}function hi(e=p()){const t=oe(e).filter(s=>(s.require_approval||s.type==="Client approval")&&!["Archived","Closed","Approved"].includes(s.status)).map(s=>({id:`form:${s.id}`,title:s.title,meta:C(s.linked_job_id)?.name||s.description||"Company form",type:"Form approval",owner:B(s.creator_id),status:s.status,updatedAt:s.updated_at||s.created_at,href:d("forms",{form_id:s.id},e)})),a=z(e).filter(s=>["review","pending"].includes(s.status)).map(s=>({id:`task:${s.id}`,title:s.title,meta:C(s.project_id)?.name||s.description||"Company task",type:"Task review",owner:B(s.assignee_id),status:le(s.status),updatedAt:s.updated_at||s.due,href:d("tasks",{...s.project_id?{job_id:s.project_id}:{},task_id:s.id},e)})),n=i.memberships.filter(s=>s.company_id===e&&s.status!=="active").map(s=>({id:`access:${s.profile_id||s.member_id}`,title:B(s.member_id||s.profile_id),meta:`${M(s.role)} access request`,type:"Access request",owner:"Quest admin",status:M(s.status),updatedAt:new Date().toISOString(),href:d("settings",{tab:"access"},e)}));return t.concat(a,n).sort((s,o)=>Date.parse(o.updatedAt||0)-Date.parse(s.updatedAt||0))}function wt(e=p()){const t=i.activeTimer;return!t||t.company_id!==e?null:t}function $i(e=p()){return i.timeEntries.filter(t=>t.company_id===e).sort((t,a)=>Date.parse(a.started_at||0)-Date.parse(t.started_at||0))}function Ta(e=p(),t=0){return $i(e).filter(a=>Date.parse(a.started_at||0)>=t).reduce((a,n)=>a+E(n.duration_ms),0)}function Lr(e=p(),t=""){i.activeTimer&&wi(!1);const a=t?sa(t):null;i.activeTimer={id:`timer-${crypto.randomUUID()}`,company_id:e,user_id:D().profile.member_id||D().profile.id,task_id:a?.company_id===e?a.id:"",task_title:a?.company_id===e?a.title:"",started_at:new Date().toISOString()},Ei(),i.sync={label:"Clock started locally",mode:"local"},u()}function wi(e=!0){const t=i.activeTimer;if(!t)return;const a=new Date().toISOString(),n=Math.max(0,Date.parse(a)-Date.parse(t.started_at||a));i.timeEntries.unshift({id:`time-${crypto.randomUUID()}`,company_id:t.company_id,user_id:t.user_id,task_id:t.task_id||"",task_title:t.task_title||"",started_at:t.started_at,ended_at:a,duration_ms:n,notes:t.task_title?"Task timer":"General shift"}),i.activeTimer=null,Ei(),i.sync={label:"Clock stopped locally",mode:"local"},e&&u()}function ra(e){return e.status!=="done"}function Ea(e,t){const a=Date.parse(e.due||0)-Date.parse(t.due||0);return a||De(t.priority)-De(e.priority)}function be(e=p()){return i.financeInvoices.filter(t=>t.company_id===e).sort(Pe("updated_at"))}function Si(e=p()){return i.financePayments.filter(t=>t.company_id===e)}function oa(e=p()){return i.financeExpenses.filter(t=>t.company_id===e).sort(Pe("updated_at"))}function la(e=p()){return i.financeVendors.filter(t=>t.company_id===e)}function ge(e){return i.financeInvoices.find(t=>t.id===e)||null}function ki(e){return i.financeExpenses.find(t=>t.id===e)||null}function ca(e){return i.financeVendors.find(t=>t.id===e)||null}function Nt(e){return ca(e)?.name||"No vendor"}function ji(e){return i.financePayments.filter(t=>t.invoice_id===e).sort(Pe("received_at"))}function da(e){return K(ji(e),"amount")}function ae(e){const t=ge(e);return Math.max(0,E(t?.total)-da(e))}function Di(e){const t=ae(e.id);return t<=0&&E(e.total)>0?"Paid":t<E(e.total)?"Partially paid":e.status==="Sent"&&Bi(e.due_date)>0?"Overdue":e.status}function Ci(e=p()){const t=be(e),a=Si(e),n=oa(e).filter(c=>["Approved","Paid"].includes(c.status)),s={current:0,thirty:0,sixty:0,overSixty:0};t.forEach(c=>{const m=ae(c.id);if(!m)return;const b=Bi(c.due_date);b<=0?s.current+=m:b<=30?s.thirty+=m:b<=60?s.sixty+=m:s.overSixty+=m});const o=K(a,"amount"),l=K(n,"amount");return{pipeline:K(O(e),"estimate_total"),invoiced:K(t,"total"),collected:o,outstanding:t.reduce((c,m)=>c+ae(m.id),0),expenses:l,net:o-l,aging:s}}function Nr(e=p(),t=""){const a=i.query.trim().toLowerCase();return z(e).filter(n=>t&&n.project_id!==t||i.taskStatusFilter!=="all"&&n.status!==i.taskStatusFilter||i.taskPriorityFilter!=="all"&&n.priority!==i.taskPriorityFilter?!1:a?[n.title,n.description,ze(n.type),B(n.assignee_id),C(n.project_id)?.name].some(s=>String(s||"").toLowerCase().includes(a)):!0)}function qi(){const e=qe();return i.companies.filter(t=>e.includes(t.id))}function ua(e,t=p()){if(!e)return!0;const a=ht(t);if(a)return Ar(a,e);const n=D().profile;if(i.session?.auth==="supabase"){const l=ot(t,n.id);if(!l||l.status!=="active")return!1;if(["owner","developer"].includes(String(l.role).toLowerCase()))return!0;const c=i.roleAssignments.filter(b=>b.company_id===t&&b.profile_id===n.id).map(b=>b.role_id),m=i.rolePermissions.filter(b=>c.includes(b.role_id));if(m.some(b=>(b.permission_key===e||b.permission_key==="*")&&b.effect==="deny"))return!1;if(m.some(b=>(b.permission_key===e||b.permission_key==="*")&&b.effect==="allow"))return!0}const s=String(ot(t,n.id)?.role||n.role||"member").toLowerCase(),o=at[s]||at.member;return o.includes("*")||o.includes(e)}function qe(){const e=D().profile,t=i.companies.map(s=>s.id);if(i.session?.auth==="supabase"){const s=i.memberships.filter(o=>o.profile_id===e.id&&o.status==="active").map(o=>h(o.company_id));return Z(s).filter(o=>t.includes(o))}if(["developer","admin"].includes(e.role))return Z(t.length?t:Qe.map(s=>h(s.id)));const a=i.memberships.filter(s=>s.profile_id===e.id&&s.status!=="disabled").map(s=>h(s.company_id)),n=a.length?a:e.company_ids||[];return Z(n.map(h)).filter(s=>t.includes(s))}function p(){const e=qe();return e.includes(i.activeCompanyId)?i.activeCompanyId:e[0]||i.activeCompanyId||F()}function F(){return h(Qe[0].id)}function St(e){const t=h(e);return i.companies.find(a=>a.id===t)||Qe.map(Je).find(a=>a.id===t)||null}function j(e){const t=St(e);return t?kt(t):e||"Company"}function kt(e){return e.short_name||e.label||e.name||e.id}function re(e){return St(e)?.color||"#f0b23b"}function tt(e){return h(i.jobs.find(t=>t.id===e)?.company_id||"")}function jt(e){const t=ht(e);if(t)return`Preview: ${t.name}`;const a=D().profile;return i.session?.auth!=="supabase"&&["developer","admin"].includes(a.role)?M(a.role):M(ot(e,a.id)?.role||a.role||"member")}function rt(e,t){const a=i.memberships.find(n=>n.company_id===e&&(n.member_id===t||n.profile_id===t));return M(a?.role||"member")}function ot(e,t){return i.memberships.find(a=>a.company_id===e&&a.profile_id===t)||null}function pa(e=p()){return i.subscriptions.find(t=>t.company_id===e)||null}function ma(e=p()){if(i.session?.auth!=="supabase")return!0;const t=pa(e);return!!(!t||["trialing","active","past_due","grace"].includes(t.status)||t.grace_ends_at&&Date.parse(t.grace_ends_at)>Date.now())}function Ii(e=p()){const t=pa(e);return t?t.status==="trialing"?`Trial - ${A(t.trial_ends_at)}`:t.status==="active"?"Active subscription":t.status==="past_due"?"Past due grace":t.status==="grace"?`Grace - ${A(t.grace_ends_at)}`:M(t.status):i.session?.auth==="supabase"?"Trial pending":"Demo mode"}function B(e){const t=i.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function Dt(e){return i.tasks.filter(t=>t.project_id===e).length}function lt(e){return i.files.filter(t=>t.job_id===e).length}function h(e){return{"quest-roofing":"roofing","quest-drafting":"drafting"}[String(e||"").trim()]||String(e||"").trim()}function Fi(e){const t=new Map;return e.map(Je).forEach(a=>{!a.id||t.has(a.id)||t.set(a.id,a)}),Array.from(t.values())}function Je(e){return{id:h(e.id||""),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function ke(e){return{id:String(e.id||""),company_id:h(e.company_id||F()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:Re.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:E(e.estimate_total),invoice_total:E(e.invoice_total),task_count:E(e.task_count),file_count:E(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function je(e){const t=it.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=Le.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:Ja.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:h(e.company_id||F()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||k(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:it.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function Te(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:h(e.company_id||F()),job_id:String(e.job_id||""),folder:String(e.folder||Fo(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:E(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function fa(e){return{id:String(e.id||`folder-${crypto.randomUUID()}`),company_id:h(e.company_id||F()),name:String(e.name||"New folder").trim()||"New folder",parent_key:String(e.parent_key||"home"),created_by_label:String(e.created_by_label||"Quest HQ"),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Be(e){const t=Array.isArray(e.questions)?e.questions.map(Ct):[],a=Ne.includes(e.type)?e.type:"Internal",n=ta.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:h(e.company_id||F()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:n,audience:String(e.audience||"Internal").trim(),creator_id:String(e.creator_id||e.created_by||e.created_by_id||""),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ct(e){const t=Ue.some(([n])=>n===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(n=>String(n||"").trim()).filter(Boolean):[]};return Oe(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function ba(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:h(e.company_id||F()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function qt(e){const t=E(e.subtotal),a=E(e.tax),n=E(e.total)||t+a;return{id:String(e.id||`invoice-${crypto.randomUUID()}`),company_id:h(e.company_id||F()),job_id:String(e.job_id||""),client_name:String(e.client_name||"").trim(),invoice_number:String(e.invoice_number||`INV-${Date.now()}`).trim(),status:Ba.includes(e.status)?e.status:"Draft",issue_date:String(e.issue_date||k(0)).slice(0,10),due_date:String(e.due_date||k(30)).slice(0,10),subtotal:t,tax:a,total:n,notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function It(e){return{id:String(e.id||`payment-${crypto.randomUUID()}`),company_id:h(e.company_id||F()),invoice_id:String(e.invoice_id||""),amount:E(e.amount),method:Wa.includes(e.method)?e.method:"ACH",received_at:String(e.received_at||k(0)).slice(0,10),reference:String(e.reference||"").trim(),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString()}}function Ft(e){return{id:String(e.id||`expense-${crypto.randomUUID()}`),company_id:h(e.company_id||F()),job_id:String(e.job_id||""),vendor_id:String(e.vendor_id||""),category:gt.includes(e.category)?e.category:"Other",amount:E(e.amount),status:Ha.includes(e.status)?e.status:"Pending",spent_at:String(e.spent_at||k(0)).slice(0,10),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Mt(e){return{id:String(e.id||`vendor-${crypto.randomUUID()}`),company_id:h(e.company_id||F()),name:String(e.name||"New vendor").trim()||"New vendor",contact_name:String(e.contact_name||"").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),category:gt.includes(e.category)?e.category:"Other",status:za.includes(e.status)?e.status:"Active",notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function ga(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,supervisor_id:String(e.supervisor_id||e.manager_id||""),company_ids:Array.isArray(e.company_ids)?Z(e.company_ids.map(h)):[]}}function ct(e){return{company_id:h(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function Ur(e){return{company_id:h(e.company_id||""),status:String(e.status||"trialing"),plan_code:String(e.plan_code||"quest_company_300"),amount_cents:E(e.amount_cents||3e4),currency:String(e.currency||"usd"),stripe_customer_id:String(e.stripe_customer_id||""),stripe_subscription_id:String(e.stripe_subscription_id||""),current_period_end:e.current_period_end||"",trial_ends_at:e.trial_ends_at||"",grace_ends_at:e.grace_ends_at||""}}function he(e){return{id:String(e.id||""),company_id:h(e.company_id||""),name:String(e.name||"Role").trim()||"Role",color:String(e.color||"#f0b23b"),priority:E(e.priority),is_system:e.is_system===!0,created_by:String(e.created_by||"")}}function Ut(e){return{role_id:String(e.role_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function Mi(e){return{company_id:h(e.company_id||""),profile_id:String(e.profile_id||""),role_id:String(e.role_id||""),assigned_by:String(e.assigned_by||"")}}function Qr(e){return{id:String(e.id||""),company_id:h(e.company_id||""),resource_type:String(e.resource_type||""),resource_id:String(e.resource_id||""),principal_type:String(e.principal_type||""),principal_id:String(e.principal_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function Vr(e){return{id:String(e.id||""),company_id:h(e.company_id||""),resource_type:String(e.resource_type||""),field_key:String(e.field_key||""),role_id:String(e.role_id||""),visibility:["visible","masked","hidden"].includes(e.visibility)?e.visibility:"visible",editable:e.editable!==!1}}function dt(e){return{id:String(e.id||""),company_id:h(e.company_id||""),email:String(e.email||""),role_id:String(e.role_id||""),token:String(e.token||""),status:String(e.status||"pending"),expires_at:e.expires_at||"",invited_by:String(e.invited_by||""),accepted_by:String(e.accepted_by||""),created_at:e.created_at||""}}function Ai(e){return{id:String(e.id||""),company_id:h(e.company_id||""),profile_id:String(e.profile_id||""),requested_email:String(e.requested_email||""),status:String(e.status||"pending"),message:String(e.message||""),reviewed_by:String(e.reviewed_by||""),created_at:e.created_at||""}}function Jr(e=p()){return ke({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function Br(e=p(),t=""){return je({id:"",title:"",company_id:e,project_id:t,assignee_id:se(e)[0]?.id||"abraham",creator_id:D().profile.member_id||"abraham",due:k(1),priority:"medium",status:"todo",type:"admin"})}function Hr(e=p()){const t=pe();return qt({id:"",company_id:e,job_id:t?.company_id===e?t.id:"",client_name:t?.company_id===e?t.client_name:"",invoice_number:Mo(e),status:"Draft",issue_date:k(0),due_date:k(30),subtotal:t?.company_id===e?t.estimate_total:0,tax:0,notes:""})}function zr(e=p(),t=""){const a=t?ge(t):be(e).find(s=>ae(s.id)>0),n=a?.company_id===e?a:null;return It({id:"",company_id:e,invoice_id:n?.id||"",amount:n?ae(n.id):0,method:"ACH",received_at:k(0),reference:"",notes:""})}function Wr(e=p(),t=""){return Ft({id:"",company_id:e,job_id:pe()?.company_id===e?pe().id:"",vendor_id:t||la(e)[0]?.id||"",category:"Materials",status:"Pending",amount:0,spent_at:k(0),notes:""})}function Yr(e=p()){return Mt({id:"",company_id:e,name:"",category:"Materials",status:"Active"})}function Kr(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function Gr(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function D(){return i.session?i.session.auth==="supabase"?i.session:{...i.session,profile:{...Qt().profile,...i.session.profile||{},...i.profileDraft||{}}}:Qt()}function Zr(e,t){const a=!!(e.user.email_confirmed_at||e.user.confirmed_at);return{auth:"supabase",access_token:e.access_token,refresh_token:e.refresh_token,user:{id:e.user.id,email:e.user.email||"",email_confirmed_at:e.user.email_confirmed_at||e.user.confirmed_at||"",email_verified:a},profile:va(t||{},{id:e.user.id,email:e.user.email||"",full_name:e.user.user_metadata?.full_name||e.user.email||"Quest user",role:"member",member_id:"",company_ids:[],avatar_url:"",email_verified:a})}}function Qt(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",email_verified:!0,...i.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:we.localUsername,email:e.email},profile:e}}function va(e,t={}){const a=String(e.role||t.role||"member").toLowerCase(),n=typeof e.email_verified=="boolean"?e.email_verified:t.email_verified===!0;return{id:String(e.id||t.id||""),email:String(e.email||t.email||""),full_name:String(e.full_name||t.full_name||e.email||t.email||"Quest user"),role:a,role_label:M(a),member_id:String(e.member_id||t.member_id||""),company_ids:Array.isArray(e.company_ids)?Z(e.company_ids.map(h)):t.company_ids||[],avatar_url:String(e.avatar_url||t.avatar_url||""),approved:e.approved!==!1,email_verified:n,supervisor_id:String(e.supervisor_id||t.supervisor_id||"")}}function Xr(e=D()){return e.auth!=="supabase"?!0:e.user?.email_verified===!0||!!e.user?.email_confirmed_at||e.profile?.email_verified===!0}function V(e,t,a=""){const n=oi();return`
    <section class="workspace-head">
      <div class="head-copy">
        <span class="head-symbol">${G(n)}</span>
        <div>
          <div class="context-line"><span>${r(j(p()))}</span><b>${r(jt(p()))}</b></div>
          <h1>${r(e)}</h1>
          <p>${r(t)}</p>
        </div>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function eo(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric">${G(li(t),"metric-symbol")}<span>${r(t)}</span><strong>${r(a)}</strong></article>`).join("")}</section>`}function to(e){return`
    <button class="queue-row" type="button" data-select-job="${r(e.id)}">
      <span><strong>${r(e.name)}</strong><small>${r(e.client_name||j(e.company_id))}</small></span>
      ${ya(e.priority)}
      <b>${r(e.stage)}</b>
    </button>
  `}function At(e){return`
    <button class="queue-row" type="button" data-select-task="${r(e.id)}">
      <span><strong>${r(e.title)}</strong><small>${r(C(e.project_id)?.name||j(e.company_id))}</small></span>
      ${xi(e.priority)}
      <b>${r(le(e.status))}</b>
    </button>
  `}function ao(e){return`
    <button class="job-card priority-${r(e.priority.toLowerCase())} ${e.id===i.selectedJobId?"active":""}" type="button" data-select-job="${r(e.id)}">
      <strong>${r(e.name)}</strong>
      <span>${r(e.client_name||"No client")}</span>
      <small>${r(j(e.company_id))} - ${r(e.owner_name||"Unassigned")}</small>
      <em>${r(Dt(e.id))} tasks</em>
    </button>
  `}function Ge(e,t,a,n){return`
    <a class="mini-link" href="${g(e)}" data-router>
      <i class="ti ${r(t)}"></i>
      <span><strong>${r(a)}</strong><small>${r(n)}</small></span>
    </a>
  `}function N(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${r(t)}</span><strong>${r(a)}</strong></div>`).join("")}</div>`}function S(e,t,a="",n=!1,s="text",o=""){return`<label class="${r(o)}"><span>${r(e)}</span><input name="${r(t)}" type="${r(s)}" value="${r(a)}" ${n?"required":""} /></label>`}function ie(e,t,a="",n=""){return`<label class="${r(n)}"><span>${r(e)}</span><textarea name="${r(t)}" rows="4">${r(a)}</textarea></label>`}function P(e,t,a,n){return`
    <label><span>${r(e)}</span><select name="${r(t)}">
      ${n.map(([s,o])=>`<option value="${r(s)}" ${String(s)===String(a)?"selected":""}>${r(o)}</option>`).join("")}
    </select></label>
  `}function ya(e){return`<span class="priority ${r(String(e).toLowerCase())}">${r(e)}</span>`}function xi(e){return`<span class="priority ${r(e)}">${r(M(e))}</span>`}function Ti(e){return`<span class="status-pill ${r(e)}">${r(le(e))}</span>`}function io(e){return`<span class="finance-status ${r(wa(e))}">${r(e)}</span>`}function He(e,t){if(e.avatar_url)return`<span class="${r(t)}"><img src="${r(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${r(t)}">${r(a)}</span>`}function v(e){return`<div class="empty-state">${G("q-empty","empty-symbol")}<span>${r(e)}</span></div>`}function Y(e,t){const a={};return t.forEach(n=>{const s=e.get(n);s&&(a[n]=s)}),a}function Q(){i.session?.auth!=="supabase"&&(x(Jt,i.jobs),x(Bt,i.tasks),x(Ht,i.files),x(zt,i.driveFolders),x(Ce,i.forms),x(pt,i.formResponses),x(Kt,i.financeInvoices),x(Gt,i.financePayments),x(Zt,i.financeExpenses),x(Xt,i.financeVendors),x(mt,i.timeEntries),x(ft,i.activeTimer),x(Wt,i.teamMembers),x(Yt,i.memberships))}function Ei(){i.session?.auth!=="supabase"&&(x(mt,i.timeEntries),x(ft,i.activeTimer))}function $(e,t,a=""){return`<article class="metric">${G(li(e),"metric-symbol")}<span>${r(e)}</span><strong>${r(t)}</strong>${a?`<small>${r(a)}</small>`:""}</article>`}function de(e,t){return`<div><strong>${r(e)}</strong><span>${r(t)}</span></div>`}function $e(e,t,a,n,s=""){const o=`
    <span><strong>${r(e)}</strong><small>${r(t||"Finance record")}</small></span>
    <b>${r(a)}</b>
    <em>${A(n)}</em>
  `;return s?`<a class="finance-compact-row" href="${g(s)}" data-router>${o}</a>`:`<div class="finance-compact-row">${o}</div>`}function Oa(e,t){const a=me(e);return t==="jobs"?a.filter(n=>n.job_id).length:a.filter(n=>n.folder===t).length}function Oi(e="home",t=null){return t?.id?`job:${t.id}`:e||"home"}function no(e,t="home",a=null){const n=Oi(t,a),s=xe(e).filter(o=>o.parent_key===n).map(o=>so(e,o));return a?s:t==="home"?ea.map(([l,c,m,b])=>({id:l,name:c,caption:m,icon:b,href:g(d("files",{folder:l},e)),countLabel:`${Oa(e,l)} file${Oa(e,l)===1?"":"s"}`,updatedLabel:""})).concat(s):t==="jobs"?O(e).map(l=>({id:`job:${l.id}`,name:l.name,caption:l.client_name||j(e),icon:"ti-folder",href:g(d("files",{folder:"jobs",job_id:l.id},e)),countLabel:`${lt(l.id)} file${lt(l.id)===1?"":"s"}`,updatedLabel:A(l.updated_at)})).concat(s):s}function so(e,t){const a=xe(e).filter(o=>o.parent_key===t.id).length,n=me(e).filter(o=>o.folder===t.id).length,s=a+n;return{id:t.id,name:t.name,caption:"Custom folder",icon:"ti-folder",href:g(d("files",{folder:t.id},e)),countLabel:`${s} item${s===1?"":"s"}`,updatedLabel:A(t.updated_at)}}function ro(e,t,a=null){if(a)return`<span>/</span><a href="${g(d("files",{folder:"jobs"},e))}" data-router>Jobs</a>`;const n=xe(e).find(m=>m.id===t);if(!n)return`<span>/</span><strong>${r(ee(t))}</strong>`;const s=[];let o=n;const l=new Set;for(;o&&!l.has(o.id);)l.add(o.id),s.unshift(o),o=xe(e).find(m=>m.id===o.parent_key);return`${n.parent_key&&!n.parent_key.startsWith("folder-")&&n.parent_key!=="home"?`<span>/</span><a href="${g(d("files",{folder:n.parent_key},e))}" data-router>${r(ee(n.parent_key))}</a>`:""}${s.map((m,b)=>`<span>/</span>${b===s.length-1?`<strong>${r(m.name)}</strong>`:`<a href="${g(d("files",{folder:m.id},e))}" data-router>${r(m.name)}</a>`}`).join("")}`}function oo(e=p(),t="home",a=""){const n=(i.fileQuery||i.query||"").trim().toLowerCase(),s=i.fileCategoryFilter;let o=me(e);return a?o=o.filter(l=>l.job_id===a):t&&t!=="home"&&(t==="jobs"?o=o.filter(l=>l.job_id):o=o.filter(l=>l.folder===t)),s&&s!=="All categories"&&(o=o.filter(l=>String(l.category||ee(l.folder)).toLowerCase()===s.toLowerCase())),n&&(o=o.filter(l=>[l.file_name,l.category,l.uploaded_by_label,l.notes,l.object_path,C(l.job_id)?.name].some(c=>String(c||"").toLowerCase().includes(n)))),o.sort((l,c)=>new Date(c.created_at||0)-new Date(l.created_at||0))}function ve(e){const t=String(e.mime_type||"").toLowerCase(),a=Pi(e);return t.includes("pdf")||a==="pdf"?"PDF":t.includes("image")||["png","jpg","jpeg","gif","webp","svg"].includes(a)?"Image":t.includes("zip")||["zip","rar","7z"].includes(a)?"Archive":t.includes("spreadsheet")||t.includes("excel")||["xls","xlsx","csv"].includes(a)?"Excel":t.includes("word")||["doc","docx"].includes(a)?"Word":t.includes("text")||["txt","md","json","csv","log"].includes(a)?"Text":t.includes("presentation")||["ppt","pptx"].includes(a)?"PowerPoint":a?a.toUpperCase():ee(e.folder)}function _a(e){const t=ve(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="excel"?"sheet":t==="text"?"text":["word","powerpoint"].includes(t)?"doc":t==="archive"?"zip":"doc"}function Pi(e){return String(e.file_name||"").split(".").pop()?.toLowerCase()||""}function ha(e,t=!1){const a=Ji(e);return e.signed_url?`<img src="${r(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${r(_a(e))} ${t?"large":""}"><i class="ti ${r(a)}"></i></span>`}function lo(e){const t=ve(e),a=Pi(e);return t==="Image"?a&&a.length<=4?a.toUpperCase():"IMG":t==="Archive"?a&&a.length<=3?a.toUpperCase():"ZIP":t==="Excel"?a==="csv"?"CSV":"XLS":t==="Word"?"DOC":t==="PowerPoint"?"PPT":t==="Text"?a&&a.length<=4?a.toUpperCase():"TXT":t.length<=4?t.toUpperCase():(a||"FILE").slice(0,4).toUpperCase()}function oe(e=p()){return i.forms.filter(t=>t.company_id===e)}function co(e=p()){const t=i.formQuery.trim().toLowerCase(),a=i.route?.jobId||"";return oe(e).filter(n=>a&&n.linked_job_id!==a||i.formTypeFilter!=="all"&&n.type!==i.formTypeFilter?!1:t?[n.title,n.description,n.type,n.status,n.audience,C(n.linked_job_id)?.name].some(s=>String(s||"").toLowerCase().includes(t)):!0)}function Ee(e=p()){const t=i.route?.jobId||"",a=oe(e).filter(o=>!t||o.linked_job_id===t),n=i.route?.params?.get("form_id")||"";if(n&&a.some(o=>o.id===n)&&(i.selectedFormId=n),!a.length)return i.selectedFormId="",i.selectedQuestionId="",null;let s=a.find(o=>o.id===i.selectedFormId)||a[0];return i.selectedFormId=s.id,(!i.selectedQuestionId||!s.questions.some(o=>o.id===i.selectedQuestionId))&&(i.selectedQuestionId=s.questions[0]?.id||""),s}function ye(e){return i.forms.find(t=>t.id===e)||null}function te(){return ye(i.selectedFormId)||Ee(p())}function Ri(e=p()){return i.formResponses.filter(t=>t.company_id===e)}function xt(e){return i.formResponses.filter(t=>t.form_id===e)}function Li(e){return Array.isArray(e?.questions)?e.questions.length:0}function uo(e){const t=String(e?.creator_id||""),a=D().profile;return t?t&&(t===a.member_id||t===a.id)?a.full_name||"Quest Basic Mode":B(t):e?.created_by_label||a.full_name||"Quest HQ"}function Fe(e,t,a="",n=!1,s="text"){return`<label><span>${r(e)}</span><input data-form-field="${r(t)}" type="${r(s)}" value="${r(a)}" ${n?"required":""} /></label>`}function Ni(e,t,a=""){return`<label><span>${r(e)}</span><textarea data-form-field="${r(t)}" rows="3">${r(a)}</textarea></label>`}function Ze(e,t,a,n){return`
    <label><span>${r(e)}</span><select data-form-field="${r(t)}">
      ${n.map(([s,o])=>`<option value="${r(s)}" ${String(s)===String(a)?"selected":""}>${r(o)}</option>`).join("")}
    </select></label>
  `}function Oe(e){return["multiple","checkbox","dropdown"].includes(e.type)}function po(e){return{short:"ti-letter-t",paragraph:"ti-align-left",multiple:"ti-circle-dot",checkbox:"ti-checkbox",dropdown:"ti-select",date:"ti-calendar",rating:"ti-star",yesno:"ti-circle-check",file:"ti-paperclip"}[e]||"ti-plus"}function mo(e){return Ue.find(([t])=>t===e)?.[1]||M(e||"Question")}function X(e,t){return`
    <div class="response-question">
      <label>
        <span>${r(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${r(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function Ui(e){const t=ye(e.form_id),a=Object.entries(e.answers||{}).map(([n,s])=>{const o=t?.questions.find(c=>c.id===n),l=Array.isArray(s)?s.join(", "):s;return de(o?.label||n,l||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${r(t?.title||"Response")}</h2><p>${r(e.submitted_by||e.submitter_email||"Anonymous")} / ${A(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||de("Response","No answers captured.")}</div>
  `}function Me(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[U("short","Inspection address"),U("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),U("paragraph","Recommended scope"),U("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[U("short","Client name"),U("yesno","Approved to proceed?"),U("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[U("short","Request title"),U("dropdown","Priority",["Low","Medium","High","Urgent"]),U("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[U("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),U("yesno","Weather safe?"),U("paragraph","Safety notes")]}]}function fo(e=p()){return Be({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:i.route?.jobId||"",theme_color:re(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[U("short","First question")]})}function U(e="short",t="Untitled question",a=[]){return Ct({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function bo(e,t={}){const a=fo(e),n=Be({...a,...t,id:t.id||`form-${crypto.randomUUID()}`,company_id:e,questions:(t.questions||a.questions).map(s=>Ct(s)),created_at:t.created_at||new Date().toISOString(),updated_at:new Date().toISOString()});return i.forms.unshift(n),i.selectedFormId=n.id,i.selectedQuestionId=n.questions[0]?.id||"",i.formsTab="builder",i.formEditorTab="questions",i.modal="",i.formStartTemplateId="",i.formStartTab="blank",J("New form created"),u(),n}function go(e){const t=Object.fromEntries(new FormData(e).entries()),a=t.template_id?Me().find(l=>l.id===t.template_id):null,n=String(t.title||a?.title||"Untitled form").trim()||"Untitled form",s=String(t.description||a?.description||"").trim(),o=a?a.questions.map(l=>({...ut(l),id:`q-${crypto.randomUUID()}`})):[U("short","First question")];bo(p(),{title:n,description:s,type:Ne.includes(t.type)?t.type:a?.type||"Internal",audience:String(t.audience||"Internal").trim()||"Internal",creator_id:D().profile.member_id||D().profile.id||"basic-quest-user",linked_job_id:String(t.linked_job_id||""),theme_color:re(p()),background:"clean",submit_label:String(t.submit_label||"Submit").trim()||"Submit",collect_email:t.collect_email==="on",require_approval:t.require_approval==="on",questions:o})}function Xe(e,t=!0){const a=ye(e);a&&(i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",t&&u())}function J(e="Forms saved locally"){const t=te();t&&(t.updated_at=new Date().toISOString()),x(Ce,i.forms),x(pt,i.formResponses),i.sync={label:e,mode:"live"}}function Pa(e,t){const a=ye(e||i.selectedFormId);a&&(a.status=ta.includes(t)?t:"Draft",i.selectedFormId=a.id,J(`${a.status} locally`),u())}function vo(e){const t=ye(e||i.selectedFormId);if(!t)return;const a=Be({...ut(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(n=>({...ut(n),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.forms.unshift(a),i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",J("Form duplicated"),u()}function yo(e){const t=e||i.selectedFormId;t&&(i.forms=i.forms.filter(a=>a.id!==t),i.formResponses=i.formResponses.filter(a=>a.form_id!==t),i.selectedFormId=oe(p())[0]?.id||"",i.selectedQuestionId=Ee(p())?.questions[0]?.id||"",i.modal="",J("Form deleted locally"),u())}async function _o(e){const t=e||i.selectedFormId,a=`${window.location.origin}${g(d("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),i.sync={label:"Form link copied",mode:"live"}}catch{i.sync={label:"Copy failed",mode:"local"}}u()}function ho(e){const t=JSON.stringify({company_id:e,forms:oe(e),responses:Ri(e)},null,2);qo(`${e}-forms-export.json`,t,"application/json")}function Qi(e){const t=te();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),x(Ce,i.forms))}function Vi(e){const t=te(),a=e.closest("[data-question-id]"),n=t?.questions.find(s=>s.id===a?.dataset.questionId);if(!(!t||!n)){if(i.selectedQuestionId=n.id,e.matches("[data-question-option]")){const s=Number(e.dataset.questionOption);n.options[s]=e.value}else{const s=e.dataset.questionField;if(s==="required")n.required=e.checked;else if(s==="type"){n.type=e.value,Oe(n)&&!n.options.length&&(n.options=["Option 1","Option 2"]),Oe(n)||(n.options=[]),J("Question updated"),u();return}else s&&(n[s]=e.value)}t.updated_at=new Date().toISOString(),x(Ce,i.forms)}}function $o(e="multiple"){const t=te();if(!t)return;const a=U(e,Ue.find(([n])=>n===e)?.[1]||"New question");t.questions.push(a),i.selectedQuestionId=a.id,J("Question added"),u()}function wo(e){const t=te(),a=t?.questions.find(o=>o.id===e);if(!t||!a)return;const n=t.questions.findIndex(o=>o.id===e),s=Ct({...ut(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(n+1,0,s),i.selectedQuestionId=s.id,J("Question duplicated"),u()}function So(e){const t=te();t&&(t.questions=t.questions.filter(a=>a.id!==e),i.selectedQuestionId=t.questions[0]?.id||"",J("Question deleted"),u())}function ko(e,t){const a=te();if(!a||!t)return;const n=a.questions.findIndex(l=>l.id===e),s=n+t;if(n<0||s<0||s>=a.questions.length)return;const[o]=a.questions.splice(n,1);a.questions.splice(s,0,o),i.selectedQuestionId=e,J("Question moved"),u()}function jo(e){const a=te()?.questions.find(n=>n.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),J("Option added"),u())}function Do(e,t){const n=te()?.questions.find(s=>s.id===e);!n||t<0||(n.options.splice(t,1),n.options.length||n.options.push("Option 1"),J("Option removed"),u())}function Co(e){const t=ye(e.dataset.formId);if(!t)return;const a=new FormData(e),n={};t.questions.forEach(s=>{const o=`answer:${s.id}`,l=a.getAll(o).filter(c=>c instanceof File?c.name:String(c||"").trim());n[s.id]=l.length>1?l.map(c=>c instanceof File?c.name:c):l[0]instanceof File?l[0].name:l[0]||""}),i.formResponses.unshift(ba({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||D().profile.full_name||"Preview submitter"),answers:n,created_at:new Date().toISOString()})),i.formsTab="responses",i.modal="",J("Preview response saved"),u()}function qo(e,t,a="text/plain"){const n=new Blob([t],{type:a}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,o.click(),URL.revokeObjectURL(s)}function ut(e){return JSON.parse(JSON.stringify(e))}function Z(e){return Array.from(new Set(e.map(t=>String(t||"").trim()).filter(Boolean)))}function le(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||M(e)}function ze(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||M(e)}function ee(e){return ea.find(([t])=>t===e)?.[1]||i.driveFolders.find(t=>t.id===e)?.name||M(e||"Shared")}function Io(e=p()){return ea.map(([t,a])=>[t,a]).concat(xe(e).map(t=>[t.id,t.name]))}function Fo(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Ji(e){const t=ve(e);return t==="Image"?"ti-photo":t==="PDF"?"ti-file-type-pdf":t==="Archive"?"ti-file-zip":t==="Excel"?"ti-file-spreadsheet":t==="Word"?"ti-file-type-doc":t==="PowerPoint"?"ti-file-type-ppt":t==="Text"?"ti-file-text":"ti-file-description"}function M(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function k(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function A(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function Ra(e){if(!e)return"No time";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(t)}function et(e){const t=Math.max(0,Math.floor(E(e)/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60);return a?`${a}h ${String(n).padStart(2,"0")}m`:`${n}m`}function $a(e){const t=E(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],n=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**n).toFixed(n?1:0)} ${a[n]}`}function Pe(e){return(t,a)=>Date.parse(a[e]||a.updated_at||a.created_at||0)-Date.parse(t[e]||t.updated_at||t.created_at||0)}function Bi(e){if(!e)return 0;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?0:Math.floor((Tt().getTime()-t.getTime())/864e5)}function La(e){if(!e)return 999;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?999:Math.floor((t.getTime()-Tt().getTime())/864e5)}function Mo(e=p()){const t=(kt(St(e)||{short_name:e})||e||"QH").replace(/[^a-z]/gi,"").slice(0,2).toUpperCase()||"QH",a=be(e).length+1;return`${t}-${String(1e3+a)}`}function Tt(){const e=new Date;return e.setHours(0,0,0,0),e}function Ao(e,t){return`${Hi(e,t)}%`}function Hi(e,t){const a=E(t);return a?Math.max(0,Math.min(100,Math.round(E(e)/a*100))):0}function De(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function wa(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function K(e,t){return e.reduce((a,n)=>a+E(n[t]),0)}function E(e){const t=Number(e);return Number.isFinite(t)?t:0}function Sa(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||""))}function Vt(e){const t=String(e||"").trim();return Sa(t)||/^[0-9a-f]{8,}$/i.test(t)||/^user[_-]?[0-9a-f-]{8,}$/i.test(t)}function xo(e){const t=String(e||"").trim();return t?t.slice(0,8):""}function _(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(E(e))}function ue(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function T(e,t){const a=ue(e,t);return Array.isArray(a)&&a.length?a:t}function x(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
