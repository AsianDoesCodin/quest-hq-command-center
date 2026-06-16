(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const ke={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},$e=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),je="quest-hq-local-session",Wa="quest-hq-local-profile",Yt="quest-hq-job-cache-v2",Kt="quest-hq-task-cache-v1",Gt="quest-hq-file-cache-v1",Zt="quest-hq-drive-folder-cache-v1",Xt="quest-hq-team-cache-v1",ea="quest-hq-company-membership-cache-v1",Ie="quest-hq-company-form-cache-v1",bt="quest-hq-company-form-response-cache-v1",ta="quest-hq-finance-invoice-cache-v1",aa="quest-hq-finance-payment-cache-v1",ia="quest-hq-finance-expense-cache-v1",na="quest-hq-finance-vendor-cache-v1",gt="quest-hq-time-entry-cache-v1",vt="quest-hq-active-timer-v1",re="quest-hq-active-company",Ya="quest-hq-task-view",Ka="quest-hq-drive-view",yt="quest-hq-notification-cache-v1",st={developer:["*"],admin:["*"],owner:["*"],manager:["jobs.view","jobs.manage","tasks.view","tasks.manage","files.view","files.manage","forms.view","forms.manage","finance.view","team.view","clock.manage","approvals.manage","approvals.view","users.view","settings.view","billing.view","roles.view"],member:["jobs.view","tasks.view","tasks.manage","files.view","forms.view","time.track","approvals.view","users.view"]},nn=[["jobs.view","View jobs"],["jobs.manage","Create/edit jobs"],["tasks.view","View tasks"],["tasks.manage","Create/edit tasks"],["files.view","View files"],["files.manage","Upload/delete files"],["forms.view","View forms"],["forms.manage","Create/edit forms"],["crm.view","View CRM"],["finance.view","View finance"],["finance.manage","Create/edit finance"],["users.view","View users"],["users.manage","Invite/manage users"],["roles.view","View roles"],["roles.manage","Create/edit roles"],["billing.view","View billing"],["billing.manage","Manage subscription"],["settings.view","View settings"],["settings.manage","Manage settings"],["time.track","Track own time"],["clock.manage","Manage clock dashboard"],["approvals.view","View approvals"],["approvals.manage","Manage approvals"],["messages.view","View messages (planned)"],["messages.manage","Manage group chats (planned)"]],_t=[{id:"jobs",group:"Workspace",label:"Jobs",icon:"ti-briefcase",symbol:"q-symbol-jobs",status:"live",permission:"jobs.view"},{id:"tasks",group:"Workspace",label:"Tasks",icon:"ti-list-check",symbol:"q-symbol-tasks",status:"live",permission:"tasks.view"},{id:"files",group:"Workspace",label:"Files",icon:"ti-folder",symbol:"q-symbol-files",status:"live",permission:"files.view"},{id:"forms",group:"Workspace",label:"Forms",icon:"ti-clipboard-list",symbol:"q-symbol-forms",status:"live",permission:"forms.view"},{id:"analytics",group:"Workspace",label:"Analytics",icon:"ti-chart-bar",symbol:"q-symbol-analytics",status:"live",permission:"jobs.view"},{id:"crm",group:"Workspace",label:"CRM",icon:"ti-users-group",symbol:"q-symbol-crm",status:"live",permission:"crm.view"},{id:"tickets",group:"Workspace",label:"Tickets",icon:"ti-ticket",symbol:"q-symbol-tickets",status:"planned"},{id:"finance",group:"Workspace",label:"Finance",icon:"ti-receipt-dollar",symbol:"q-symbol-finance",status:"live",permission:"finance.view"},{id:"knowledge",group:"Workspace",label:"Knowledge Base",icon:"ti-books",symbol:"q-symbol-knowledge",status:"planned"},{id:"automations",group:"Workspace",label:"Automations",icon:"ti-automation",symbol:"q-symbol-automations",status:"planned"},{id:"templates",group:"Workspace",label:"Templates",icon:"ti-template",symbol:"q-symbol-templates",status:"planned"},{id:"users",group:"Company",label:"Users",icon:"ti-users",symbol:"q-symbol-users",status:"live",permission:"users.view"},{id:"messages",group:"Company",label:"Messages",icon:"ti-messages",symbol:"q-symbol-messages",status:"planned"},{id:"settings",group:"Company",label:"Settings",icon:"ti-settings",symbol:"q-symbol-settings",status:"live",permission:"settings.view"},{id:"team-chart",group:"Company",label:"Team chart",icon:"ti-hierarchy-3",symbol:"q-symbol-team-chart",status:"live",permission:"team.view"},{id:"time",group:"Operations",label:"My time",icon:"ti-clock",symbol:"q-symbol-time",status:"live",permission:"time.track"},{id:"approvals",group:"Operations",label:"Approvals",icon:"ti-user-check",symbol:"q-symbol-approvals",status:"live",permission:"approvals.view"},{id:"team-workload",group:"Operations",label:"Team workload",icon:"ti-users",symbol:"q-symbol-team-workload",status:"planned"},{id:"clock",group:"Operations",label:"Clock dashboard",icon:"ti-clock-hour-4",symbol:"q-symbol-clock",status:"live",permission:"clock.manage"}],sn={"/admin.html":"settings","/automations.html":"automations","/crm.html":"crm","/dashboards.html":"analytics","/files.html":"files","/finance.html":"finance","/forms.html":"forms","/jobs.html":"jobs","/knowledge.html":"knowledge","/templates.html":"templates","/tickets.html":"tickets"},Ue=["Lead","Site Review","Estimate","Approved","Active","Closed"],Ga=["pipeline","list","profile"],Qe=["todo","pending","hold","review","done"],ot=["critical","urgent","high","medium","low"],Za=["lead","bid","admin","invoicing","ar","meeting","web_dev"],on=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],sa=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],Ve=["Inspection","Client approval","Intake","Survey","Safety","Internal"],oa=["Draft","Published","Archived"],Xa=["Draft","Sent","Partially paid","Paid","Overdue","Void"],ei=["Pending","Approved","Paid","Rejected"],ti=["Active","On hold","Inactive"],ai=["ACH","Check","Card","Cash","Wire","Other"],ht=["Materials","Labor","Subcontractor","Permit","Equipment","Marketing","Software","Travel","Other"],Je=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],Be=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],ii=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],ni=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"],supervisor_id:""},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"],supervisor_id:"abraham"},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"],supervisor_id:"maya"},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"],supervisor_id:"abraham"},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"],supervisor_id:""}],si=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],oi=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:j(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:j(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:j(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:j(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:j(5),priority:"medium",urgency:"medium",status:"todo"}],ri=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],li=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",creator_id:"abraham",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",creator_id:"maya",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",creator_id:"noah",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",creator_id:"lumen-ops",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],ci=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],di=[{id:"vendor-roofing-materials",company_id:"roofing",name:"Valley Roofing Supply",contact_name:"Elena Ortiz",email:"orders@valleyroofingsupply.local",phone:"(480) 555-0190",category:"Materials",status:"Active",notes:"Primary tile, flashing, and underlayment vendor.",created_at:new Date(Date.now()-12096e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"vendor-roofing-dryin",company_id:"roofing",name:"Monsoon Dry-In Crew",contact_name:"R. Alvarez",email:"dispatch@monsoondryin.local",phone:"(602) 555-0144",category:"Subcontractor",status:"Active",notes:"Emergency dry-in support during storm calls.",created_at:new Date(Date.now()-10368e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"vendor-drafting-permits",company_id:"drafting",name:"Permit Runner AZ",contact_name:"Sofia Chen",email:"permits@runneraz.local",phone:"(602) 555-0171",category:"Permit",status:"Active",notes:"Permit filing support for drafting packets.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString()},{id:"vendor-lumen-software",company_id:"lumen",name:"Lumen SaaS Stack",contact_name:"Ops Billing",email:"billing@lumenstack.local",phone:"",category:"Software",status:"Active",notes:"Internal software subscriptions for client onboarding.",created_at:new Date(Date.now()-7776e5).toISOString(),updated_at:new Date(Date.now()-3456e5).toISOString()}],ui=[{id:"invoice-roofing-queen-creek",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",client_name:"Rosales Residence",invoice_number:"QR-1007",status:"Partially paid",issue_date:j(-10),due_date:j(5),subtotal:6800,tax:0,total:6800,notes:"Emergency leak repair billing with deposit received.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"invoice-roofing-mesa-storage",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",client_name:"Mesa Storage Partners",invoice_number:"QR-1008",status:"Sent",issue_date:j(-18),due_date:j(-2),subtotal:18400,tax:0,total:18400,notes:"Estimate packet sent to board for approval.",created_at:new Date(Date.now()-15552e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-drafting-horizon",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",client_name:"Horizon HVAC",invoice_number:"QD-2031",status:"Sent",issue_date:j(-7),due_date:j(14),subtotal:4200,tax:0,total:4200,notes:"Drafting permit package milestone invoice.",created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-lumen-onboarding",company_id:"lumen",job_id:"",client_name:"Lumen Internal Launch",invoice_number:"LM-3004",status:"Draft",issue_date:j(-3),due_date:j(27),subtotal:3200,tax:0,total:3200,notes:"Demo onboarding package used for finance workspace.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()}],pi=[{id:"payment-roofing-queen-creek-deposit",company_id:"roofing",invoice_id:"invoice-roofing-queen-creek",amount:2500,method:"ACH",received_at:j(-4),reference:"ACH-4421",notes:"Deposit received after dry-in visit.",created_at:new Date(Date.now()-3456e5).toISOString()},{id:"payment-drafting-horizon-retainer",company_id:"drafting",invoice_id:"invoice-drafting-horizon",amount:1e3,method:"Check",received_at:j(-1),reference:"CHK-117",notes:"Retainer collected before permit packet completion.",created_at:new Date(Date.now()-864e5).toISOString()}],mi=[{id:"expense-roofing-queen-creek-materials",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",vendor_id:"vendor-roofing-materials",category:"Materials",amount:1850,status:"Approved",spent_at:j(-6),notes:"Underlayment, flashing, and tile replacement materials.",created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-roofing-mesa-permit",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",vendor_id:"vendor-roofing-materials",category:"Permit",amount:620,status:"Pending",spent_at:j(-2),notes:"Permit and document prep allowance.",created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString()},{id:"expense-drafting-horizon-runner",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",vendor_id:"vendor-drafting-permits",category:"Permit",amount:480,status:"Approved",spent_at:j(-3),notes:"Permit runner package review.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-lumen-software-stack",company_id:"lumen",job_id:"",vendor_id:"vendor-lumen-software",category:"Software",amount:540,status:"Paid",spent_at:j(-5),notes:"Client onboarding software stack.",created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()}],fi=[{id:"notification-roofing-task-assigned",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"task.assigned",title:"Task assigned",body:"Abraham assigned Leak inspection photos to you.",href:"/company/roofing/tasks?job_id=roofing-leak&task_id=task-roofing-leak-1",source_type:"task",source_id:"task-roofing-leak-1",read_at:"",created_at:new Date(Date.now()-7*6e4).toISOString()},{id:"notification-roofing-task-priority",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"task.priority",title:"Task priority changed",body:"Shan set priority to Urgent on HOA board approval package.",href:"/company/roofing/tasks?job_id=roofing-mesa&task_id=task-roofing-mesa-1",source_type:"task",source_id:"task-roofing-mesa-1",read_at:"",created_at:new Date(Date.now()-19*6e4).toISOString()},{id:"notification-roofing-approval",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"approval.ready",title:"Approval needs review",body:"Estimate approval is waiting in the company review queue.",href:"/company/roofing/approvals",source_type:"form",source_id:"form-roofing-estimate-approval",read_at:new Date(Date.now()-5*6e4).toISOString(),created_at:new Date(Date.now()-44*6e4).toISOString()},{id:"notification-drafting-task-review",company_id:"drafting",recipient_profile_id:"basic-quest-user",type:"task.status",title:"Task moved to review",body:"Drawing package QA is ready for review.",href:"/company/drafting/tasks?job_id=drafting-package&task_id=task-drafting-package-1",source_type:"task",source_id:"task-drafting-package-1",read_at:"",created_at:new Date(Date.now()-63*6e4).toISOString()},{id:"notification-lumen-finance",company_id:"lumen",recipient_profile_id:"basic-quest-user",type:"finance.invoice",title:"Invoice drafted",body:"Lumen onboarding invoice is ready for payment tracking.",href:"/company/lumen/finance?invoice=invoice-lumen-onboarding",source_type:"invoice",source_id:"invoice-lumen-onboarding",read_at:"",created_at:new Date(Date.now()-92*6e4).toISOString()}],n={route:null,session:me(je,null),profileDraft:me(Wa,null),authReady:!1,authMode:"signin",jobs:M(Yt,ii).map(De),tasks:M(Kt,oi).map(qe),files:M(Gt,ri).map(Pe),driveFolders:M(Zt,[]).map(_a),forms:M(Ie,li).map(We),formResponses:M(bt,ci).map(ha),financeInvoices:M(ta,ui).map(xt),financePayments:M(aa,pi).map(Ot),financeExpenses:M(ia,mi).map(Tt),financeVendors:M(na,di).map(Et),notifications:M(yt,fi).map(Sa),timeEntries:me(gt,[]),activeTimer:me(vt,null),teamMembers:M(Xt,ni).map($a),memberships:M(ea,si),profiles:[],subscriptions:[],roles:[],rolePermissions:[],roleAssignments:[],resourceAcl:[],fieldPermissions:[],companyInvites:[],joinRequests:[],auditEvents:[],companies:Ri(Be.map(ze)),activeCompanyId:localStorage.getItem(re)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",selectedFinanceInvoiceId:"",selectedFinanceExpenseId:"",selectedFinanceVendorId:"",expandedFormIds:new Set,formStartTemplateId:"",formStartTab:"blank",query:"",fileQuery:"",formQuery:"",crmQuery:"",stageFilter:"all",crmStageFilter:"all",crmOwnerFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(Ya)||"table",driveFolder:"home",driveView:localStorage.getItem(Ka)||"list",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",authMessage:"",toast:null,toastTimer:null,modal:"",accountMenuOpen:!1,notificationMenuOpen:!1,rolePreview:null},$t=document.getElementById("app");let Lt=null;rn();function rn(){Fo(),window.addEventListener("popstate",u),document.addEventListener("click",Ys),document.addEventListener("submit",Zs),document.addEventListener("input",mo),document.addEventListener("change",fo),ln(),u()}async function ln(){if(n.session?.auth==="local-basic"){bi(),n.authReady=!0;return}const e=R();if(!e?.auth){n.authReady=!0,n.loginError="Supabase auth is unavailable in this browser session.";return}try{const{data:t}=await e.auth.getSession();await Te(t?.session||null),e.auth.onAuthStateChange((a,i)=>{Te(i||null).finally(()=>{n.dataLoaded=!1,u()})})}catch(t){n.loginError=t.message||"Unable to initialize Supabase auth."}finally{n.authReady=!0,u()}}async function Te(e){if(!e?.user){n.session=null,localStorage.removeItem(je);return}const t=await cn(e.user);n.session=pr(e,t),bn(),F(je,n.session)}async function cn(e){const t={id:e.id,email:e.email||"",full_name:e.user_metadata?.full_name||e.email||"Quest user",role:"member",role_label:"Member",member_id:"",company_ids:[],avatar_url:"",approved:!1,email_verified:!!e.email_confirmed_at},a=R();if(!a)return t;const i=await a.from("profiles").select("*").eq("id",e.id).maybeSingle();return i.error||!i.data?t:wa(i.data,t)}function u(){if(n.route=wt(),!n.authReady){pn();return}if(un(n.route)){S("/login?return_url="+encodeURIComponent(Ao()),{replace:!0});return}if(n.route.name==="login"){Ts();return}if(mn(),n.session?.auth==="supabase"&&n.dataLoaded&&!Fe().length){dn();return}const e=Mo(n.route);if(e){S(e,{replace:!0});return}Po(n.route),ki(n.route),n.route.params.get("account")==="profile"&&(n.modal="profile"),document.title=`${xo(n.route)} | ${D(p())} | Quest HQ`,$t.innerHTML=vn(n.route,yi(n.route))}function dn(){document.title="Company access pending | Quest HQ",$t.innerHTML=`
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
  `}function un(e){return e.name==="login"?!1:!n.session}function pn(){document.title="Loading | Quest HQ",$t.innerHTML=`
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Secure workspace</small></span>
        </div>
        ${v("Checking secure session...")}
      </section>
    </main>
  `}function mn(){n.dataLoaded||n.dataLoading||(n.dataLoading=!0,fn().catch(()=>{n.sync={label:"Local fallback",mode:"local"}}).finally(()=>{n.dataLoaded=!0,n.dataLoading=!1,V(),u()}))}async function fn(){if(n.session?.auth==="local-basic"){n.sync={label:"Demo mode",mode:"local"};return}const e=R();if(!e){n.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,i,s,r,l,c,m,f,b,h,N,I,z,Me,ue]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*"),e.from("profiles").select("*"),e.from("company_subscriptions").select("*"),e.from("roles").select("*").order("priority",{ascending:!1}),e.from("role_permissions").select("*"),e.from("user_role_assignments").select("*"),e.from("resource_acl").select("*"),e.from("field_permissions").select("*"),e.from("company_invites").select("*").order("created_at",{ascending:!1}),e.from("company_join_requests").select("*").order("created_at",{ascending:!1}),e.from("audit_events").select("*").order("created_at",{ascending:!1}).limit(100)]);let K=0;t.error||(n.companies=(t.data||[]).map(ze),K+=1),a.error||(n.jobs=(a.data||[]).map(De),K+=1),i.error||(n.tasks=(i.data||[]).map(qe),K+=1),s.error||(n.files=(s.data||[]).map(Pe),K+=1),r.error||(n.teamMembers=(r.data||[]).map($a),K+=1),l.error||(n.memberships=(l.data||[]).map(pt),K+=1),c.error||(n.profiles=(c.data||[]).map(an=>wa(an)),K+=1),m.error||(n.subscriptions=(m.data||[]).map(tr),K+=1),f.error||(n.roles=(f.data||[]).map(we),K+=1),b.error||(n.rolePermissions=(b.data||[]).map(Ht)),h.error||(n.roleAssignments=(h.data||[]).map(Ni)),N.error||(n.resourceAcl=(N.data||[]).map(ar)),I.error||(n.fieldPermissions=(I.data||[]).map(ir)),z.error||(n.companyInvites=(z.data||[]).map(mt)),Me.error||(n.joinRequests=(Me.data||[]).map(Li)),ue.error||(n.auditEvents=ue.data||[]),n.sync=K?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function R(){return!window.supabase||typeof window.supabase.createClient!="function"?null:(Lt||(Lt=window.supabase.createClient(ke.supabaseUrl,ke.supabaseKey)),Lt)}function bn(){n.jobs=[],n.tasks=[],n.files=[],n.driveFolders=[],n.forms=[],n.formResponses=[],n.financeInvoices=[],n.financePayments=[],n.financeExpenses=[],n.financeVendors=[],n.notifications=[],n.timeEntries=[],n.activeTimer=null,n.teamMembers=[],n.memberships=[],n.profiles=[],n.subscriptions=[],n.roles=[],n.rolePermissions=[],n.roleAssignments=[],n.resourceAcl=[],n.fieldPermissions=[],n.companyInvites=[],n.joinRequests=[],n.auditEvents=[],n.companies=[],n.sync={label:"Loading secure workspace...",mode:"loading"}}function bi(){n.jobs=M(Yt,ii).map(De),n.tasks=M(Kt,oi).map(qe),n.files=M(Gt,ri).map(Pe),n.driveFolders=M(Zt,[]).map(_a),n.forms=M(Ie,li).map(We),n.formResponses=M(bt,ci).map(ha),n.financeInvoices=M(ta,ui).map(xt),n.financePayments=M(aa,pi).map(Ot),n.financeExpenses=M(ia,mi).map(Tt),n.financeVendors=M(na,di).map(Et),n.notifications=M(yt,fi).map(Sa),n.timeEntries=me(gt,[]),n.activeTimer=me(vt,null),n.teamMembers=M(Xt,ni).map($a),n.memberships=M(ea,si),n.profiles=[],n.subscriptions=[],n.roles=[],n.rolePermissions=[],n.roleAssignments=[],n.resourceAcl=[],n.fieldPermissions=[],n.companyInvites=[],n.joinRequests=[],n.auditEvents=[],n.companies=Ri(Be.map(ze)),n.sync={label:"Demo mode",mode:"local"}}function gn(){return`
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
  `}function X(e,t="symbol-icon"){return`<svg class="${o(t)}" aria-hidden="true" focusable="false"><use href="#${o(e)}"></use></svg>`}function gi(e=n.route?.section||"jobs"){return _t.find(t=>t.id===e)?.symbol||"q-empty"}function vi(e){const t=String(e||"").toLowerCase();return t.includes("job")||t.includes("pipeline")?"q-symbol-jobs":t.includes("task")||t.includes("review")?"q-symbol-tasks":t.includes("file")?"q-symbol-files":t.includes("form")?"q-symbol-forms":t.includes("account")||t.includes("customer")||t.includes("member")||t.includes("user")||t.includes("lead")?"q-symbol-crm":t.includes("invoice")||t.includes("collected")||t.includes("expense")||t.includes("net")||t.includes("outstanding")?"q-symbol-finance":t.includes("time")||t.includes("today")||t.includes("days")||t.includes("timer")||t.includes("entries")?"q-symbol-clock":t.includes("approval")||t.includes("access")?"q-symbol-approvals":gi()}function vn(e,t){const a=$(),i=p(),s=mr(a);return`
    <div class="quest-app" data-route="${o(e.name)}">
      ${gn()}
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${g(d("jobs",{},i))}" data-router aria-label="Quest HQ workspace">
            ${X("q-logo","brand-symbol")}
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${o(ke.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            ${X("q-company")}
            <select data-company-switch aria-label="Active company">
              ${Ei().map(r=>`<option value="${o(r.id)}" ${r.id===i?"selected":""}>${o(It(r))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            ${X("q-search")}
            <input data-global-search value="${o(n.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${o(n.sync.mode)}" data-sync-state>${o(n.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          ${yn(i)}
          <div class="account-menu ${n.accountMenuOpen?"open":""}">
            <button class="avatar-button" type="button" data-action="toggle-account-menu" aria-label="Open account menu" aria-expanded="${n.accountMenuOpen?"true":"false"}">
              ${Ye(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${o(a.profile.full_name)}</strong>
              <span>${o(a.profile.role_label)} - ${o(D(i))}</span>
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
      ${hn(i)}
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${$n(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${Ns(e,a)}
    ${Ls()}
  `}function yn(e){const t=Qo(e),a=t.filter(i=>!i.read_at).length;return`
    <div class="notification-center ${n.notificationMenuOpen?"open":""}">
      <button class="icon-button notification-button" type="button" data-action="toggle-notifications" aria-label="Open notifications" aria-expanded="${n.notificationMenuOpen?"true":"false"}">
        <i class="ti ti-bell"></i>
        ${a?`<b>${o(String(Math.min(a,99)))}</b>`:""}
      </button>
      <div class="notification-popover" role="dialog" aria-label="Notifications">
        <div class="notification-head">
          <div><strong>Inbox</strong><span>${o(D(e))}</span></div>
          <button type="button" data-action="mark-all-notifications-read" ${a?"":"disabled"}>Mark all read</button>
        </div>
        <div class="notification-list">
          ${t.slice(0,12).map(i=>_n(i)).join("")||v(n.session?.auth==="supabase"?"No live notifications yet. Supabase inbox persistence comes after RLS.":"No notifications yet.")}
        </div>
      </div>
    </div>
  `}function _n(e){return`
    <button class="notification-item ${e.read_at?"read":"unread"}" type="button" data-action="open-notification" data-notification-id="${o(e.id)}">
      <span></span>
      <div>
        <small>${o(e.title)} - ${o(Hr(e.created_at))}</small>
        <strong>${o(e.body)}</strong>
      </div>
    </button>
  `}function hn(e){const t=jt(e);return t?`
    <div class="role-preview-banner" style="--role-color:${o(t.color)}">
      <span></span>
      <div>
        <strong>Viewing as ${o(t.name)}</strong>
        <small>Permission preview only. Your real account has not changed.</small>
      </div>
      <button class="btn" type="button" data-action="exit-role-preview"><i class="ti ti-eye-off"></i>Exit preview</button>
    </div>
  `:""}function $n(e){const t=p();return`
    <div class="company-card">
      <span class="company-card-symbol" style="--company-accent:${o(ce(t))}">${X("q-company")}</span>
      <div>
        <strong>${o(D(t))}</strong>
        <small>${o(Ft(t))} workspace</small>
      </div>
    </div>
    ${["Workspace","Company","Operations"].map(a=>wn(a,_t.filter(i=>i.group===a&&jn(i,t)).map(i=>i.status==="planned"?kn(i.symbol,i.label):Sn(e,d(i.id,{},t),i.symbol,i.label,Dn(i.id,t))))).join("")}
  `}function wn(e,t){return`
    <section class="side-group">
      <div class="side-label">${o(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function Sn(e,t,a,i,s=""){return`
    <a class="side-item ${Oo(e,t)?"active":""}" href="${g(t)}" data-router>
      ${X(a)}
      <span>${o(i)}</span>
      ${s!==""?`<b>${o(String(s))}</b>`:""}
    </a>
  `}function kn(e,t){return`
    <button class="side-item planned" type="button" disabled aria-disabled="true">
      ${X(e)}
      <span>${o(t)}</span>
      <b>Planned</b>
    </button>
  `}function jn(e,t=p()){return e.status==="planned"?!0:!ya(t)&&!["settings","users"].includes(e.id)?!1:ga(e.permission||`${e.id}.view`,t)}function Dn(e,t=p()){return e==="jobs"?E(t).length:e==="tasks"?W(t).length:e==="files"?be(t).length:e==="forms"?de(t).length:e==="crm"?Dt(t).length:e==="finance"?ve(t).length:e==="users"?le(t).length:e==="time"?qi(t).focus.length:e==="approvals"?Ci(t).length:e==="clock"&&qt(t)?"On":""}function ra(e,t){return`
    <nav class="tabbar compact-tabbar" aria-label="${o(e)}">
      ${t.map(([a,i,s])=>`<a class="${s?"active":""}" href="${g(a)}" data-router>${o(i)}</a>`).join("")}
    </nav>
  `}function yi(e){if(e.name==="command")return In(p());if(e.name!=="company")return Ea(e.name);const t=e.companyId,a=_t.find(i=>i.id===e.section);if(a?.status!=="planned"){if(!ya(t)&&!["settings","users"].includes(e.section))return qn(t);if(a?.permission&&!ga(a.permission,t))return Cn(t,a.permission)}return e.section==="jobs"?Mn(e,t):e.section==="tasks"?En(e,t):e.section==="files"?Un(e,t):e.section==="users"?es(e,t):e.section==="settings"?ss(e,t):e.section==="forms"?ds(t):e.section==="analytics"?Fn(e,t):e.section==="crm"?ws(e,t):e.section==="finance"?ks(e,t):e.section==="team-chart"?ns(t):e.section==="time"||e.section==="approvals"||e.section==="clock"?Ms(e,t):Ea(e.section)}function qn(e){return`
    ${B("Subscription required","This company workspace needs an active or trialing subscription before paid modules can open.",`
      <a class="btn btn-primary" href="${g(d("settings",{tab:"billing"},e))}" data-router><i class="ti ti-credit-card"></i>Billing</a>
    `)}
    <section class="panel">
      ${L([["Company",D(e)],["Subscription",Pi(e)],["Allowed area","Billing and settings remain available to owners/admins"]])}
    </section>
  `}function Cn(e,t){return`
    ${B("Access denied","Your role does not include the permission required for this module.",`
      <a class="btn" href="${g(d("settings",{tab:"roles"},e))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
    `)}
    <section class="panel">
      ${L([["Company",D(e)],["Required permission",t],["Your role",Ft(e)]])}
    </section>
  `}function In(e){const t=E(e),a=W(e),i=a.filter(r=>["critical","urgent"].includes(r.priority)),s=be(e);return`
    ${B("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${g(d("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${g(d("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    `)}
    ${fr([["Jobs",t.length],["Open tasks",a.filter(r=>r.status!=="done").length],["Urgent tasks",i.length],["Drive files",s.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${g(d("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(r=>Pt(r)).join("")||v("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${L([["Company",D(e)],["Visible users",le(e).length],["Auth mode","Supabase auth"],["RLS status","Ready for enforcement"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(r=>br(r)).join("")||v("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function Fn(e,t){const a=e.jobId?q(e.jobId):null,i=a?[a]:E(t),s=W(t).filter(b=>!a||b.project_id===a.id),r=be(t).filter(b=>!a||b.job_id===a.id),l=de(t).filter(b=>!a||b.linked_job_id===a.id),c=s.filter(b=>b.status!=="done"),m=s.filter(b=>b.status!=="done"&&b.due&&new Date(b.due)<Nt()),f=Z(i,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${o(a?a.name:D(t))}</span>
        </div>
        <label>
          <span>Job</span>
          <select data-analytics-job-filter>
            <option value="">All jobs</option>
            ${E(t).map(b=>`<option value="${o(b.id)}" ${a?.id===b.id?"selected":""}>${o(b.name)}</option>`).join("")}
          </select>
        </label>
        <a class="btn" href="${g(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      </section>
      <section class="analytics-grid">
        <article class="panel analytics-score">
          <span>Open work</span>
          <strong>${o(c.length)}</strong>
          <small>${o(m.length)} overdue / ${o(s.filter(b=>b.priority==="urgent"||b.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${o(y(f))}</strong>
          <small>${o(i.length)} visible job${i.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${o(r.length+l.length)}</strong>
          <small>${o(r.length)} files / ${o(l.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${o(Wr(s.filter(b=>b.status==="done").length,s.length))}</strong>
          <small>${o(s.filter(b=>b.status==="done").length)} done of ${o(s.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${i.map(b=>`
              <a class="analytics-row" href="${g(d("analytics",{job_id:b.id},t))}" data-router>
                <span><strong>${o(b.name)}</strong><small>${o(b.client_name||D(t))}</small></span>
                <span>${o(b.stage)}</span>
                <span>${o(Mt(b.id))}</span>
                <span>${o(ut(b.id))}</span>
                <span>${o(y(b.estimate_total))}</span>
              </a>
            `).join("")||v("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${Qe.map(b=>{const h=s.filter(N=>N.status===b).length;return`<div><span>${o(ne(b))}</span><b><i style="width:${o(tn(h,s.length))}%"></i></b><strong>${o(h)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${s.filter(b=>b.status!=="done").sort((b,h)=>Ce(h.priority)-Ce(b.priority)).slice(0,8).map(b=>Pt(b)).join("")||v("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function Mn(e,t){const a=To(e.params.get("tab")),i=fe();return`
    ${B("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${g(d("files",i?{job_id:i.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(Ue).map(s=>`<option value="${o(s)}" ${n.stageFilter===s?"selected":""}>${o(s==="all"?"All stages":s)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${i?o(i.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${Ga.map(s=>`<a class="${s===a?"active":""}" href="${g(d("jobs",{tab:s,...i?{job_id:i.id}:{}},t))}" data-router>${o(Eo(s))}</a>`).join("")}
    </nav>
    ${An(a,t,i)}
  `}function An(e,t,a){return e==="pipeline"?Ma(t):e==="list"?xn(t):e==="profile"?On(t,a):Ma(t)}function Ma(e){const t=Di(e);return`
    <section class="job-board">
      ${Ue.map(a=>{const i=t.filter(s=>s.stage===a);return`
          <article class="job-lane">
            <h2><span>${o(a)}</span><b>${i.length}</b></h2>
            ${i.map(s=>gr(s)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function xn(e){const t=Di(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===n.selectedJobId?"active":""}" type="button" data-select-job="${o(a.id)}">
            <span><strong>${o(a.name)}</strong><small>${o(a.client_name||"No client")} - ${o(a.site_address||"No address")}</small></span>
            <span>${o(a.stage)}</span>
            <span>${ka(a.priority)}</span>
            <span>${o(a.owner_name||"Unassigned")}</span>
            <span>${o(Mt(a.id))}</span>
            <span>${y(a.estimate_total)}</span>
          </button>
        `).join("")||v("No jobs match this view.")}
      </div>
    </section>
  `}function On(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${o(D(e))} - ${o(t.job_type)}</span>
          <h2>${o(t.name)}</h2>
          <p>${o(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${L([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",y(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${g(d("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${o(t.id)}">Edit job</button>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${et(d("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${Mt(t.id)} linked tasks`)}
          ${et(d("files",{job_id:t.id},e),"ti-folder","Files",`${ut(t.id)} files`)}
          ${et(d("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${et(d("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:v("Create a job to see the profile workspace.")}function Tn(e,t){const a=t||nr(e);return`
    <form class="job-editor" data-job-form>
      <input type="hidden" name="id" value="${o(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${k("Workspace name","name",a.name,!0)}
      ${P("Company","company_id",e,Ei().map(i=>[i.id,It(i)]))}
      ${k("Client","client_name",a.client_name)}
      ${k("Contact","contact_name",a.contact_name)}
      ${k("Account owner","owner_name",a.owner_name)}
      ${k("Job type","job_type",a.job_type||"Roofing")}
      ${P("Business status","stage",a.stage||"Lead",Ue.map(i=>[i,i]))}
      ${P("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(i=>[i,i]))}
      ${k("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${k("Invoice total","invoice_total",a.invoice_total||0,!1,"number")}
      ${k("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${oe("Scope","scope",a.scope,"span-2")}
      ${oe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${o(t.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function En(e,t){const a=e.jobId?q(e.jobId):null,i=Xo(t,a?.id);return`
    ${B(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${g(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${g(d("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${Pn(t,a)}
    <section class="task-layout task-layout-flat">
      <article class="panel task-main">
        ${n.taskView==="board"?Nn(t,i):Rn(t,i)}
      </article>
    </section>
  `}function Pn(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${E(e).map(i=>`<option value="${o(i.id)}" ${t?.id===i.id?"selected":""}>${o(i.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(Qe).map(i=>`<option value="${o(i)}" ${n.taskStatusFilter===i?"selected":""}>${o(i==="all"?"All statuses":ne(i))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(ot).map(i=>`<option value="${o(i)}" ${n.taskPriorityFilter===i?"selected":""}>${o(i==="all"?"All priorities":C(i))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${n.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${n.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function Rn(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===n.selectedTaskId?"active":""}" type="button" data-select-task="${o(a.id)}">
          <span><strong>${o(a.title)}</strong><small>${o(a.description||Ke(a.type))}</small></span>
          <span>${o(q(a.project_id)?.name||"Company task")}</span>
          <span>${o(J(a.assignee_id))}</span>
          <span>${Ui(a.priority)}</span>
          <span>${Qi(a.status)}</span>
          <span>${O(a.due)}</span>
        </button>
      `).join("")||v("No tasks match this workspace view.")}
    </div>
  `}function Nn(e,t){return`
    <div class="task-board">
      ${Qe.map(a=>{const i=t.filter(s=>s.status===a);return`
          <section class="task-column">
            <h2><span>${o(ne(a))}</span><b>${i.length}</b></h2>
            ${i.map(s=>`
              <button class="task-card priority-${o(s.priority)}" type="button" data-select-task="${o(s.id)}">
                <strong>${o(s.title)}</strong>
                <span>${o(q(s.project_id)?.name||D(e))}</span>
                <small>${o(J(s.assignee_id))} - ${O(s.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function Ln(e,t){return t?`
    <div class="section-head">
      <div><h2>${o(t.title)}</h2><p>${o(q(t.project_id)?.name||D(e))}</p></div>
      <a class="btn" href="${g(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${L([["Status",ne(t.status)],["Priority",C(t.priority)],["Type",Ke(t.type)],["Assignee",J(t.assignee_id)],["Due",O(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${o(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${v("No task selected.")}
    `}function Aa(e,t,a){const i=a||sr(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${o(a?i.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${k("Task title","title",i.title,!0)}
      ${P("Job","project_id",i.project_id||"",[["","Company-level task"]].concat(E(e).map(s=>[s.id,s.name])))}
      ${P("Status","status",i.status,Qe.map(s=>[s,ne(s)]))}
      ${P("Priority","priority",i.priority,ot.map(s=>[s,C(s)]))}
      ${P("Type","type",i.type,Za.map(s=>[s,Ke(s)]))}
      ${P("Assignee","assignee_id",i.assignee_id,le(e).map(s=>[s.id,J(s.id)]))}
      ${k("Due date","due",i.due||j(1),!0,"date")}
      ${oe("Description","description",i.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${o(a.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function Un(e,t){const a=e.params.get("folder")||n.driveFolder||"home";n.driveFolder=a;const i=e.jobId?q(e.jobId):null,s=Sr(t,a,i?.id||"");return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div class="drive-location">
            <span class="drive-logo"><i class="ti ti-folder"></i></span>
            <div>
              <strong>${o(i?i.name:"Company Drive")}</strong>
              <small>${o(i?`${i.client_name||D(t)} file workspace`:`${D(t)} file manager`)}</small>
            </div>
          </div>
          <label class="drive-search">
            <i class="ti ti-search"></i>
            <input data-file-search value="${o(n.fileQuery)}" placeholder="Search drive" />
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
                <a href="${g(d("files",{},t))}" data-router>${o(D(t))}</a>
                ${a!=="home"?wr(t,a,i):""}
                ${i?`<span>/</span><strong>${o(i.name)}</strong>`:""}
              </nav>
              <div class="drive-compact-controls">
                <div class="segmented" role="group" aria-label="Drive view">
                  <button class="${n.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Icons</button>
                  <button class="${n.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list-details"></i>Details</button>
                </div>
              </div>
            </section>
            ${Qn(t,a,i,s)}
          </div>
        </div>
      </section>
    </section>
  `}function Qn(e,t,a,i){const s=hr(e,t,a),r=s.map(c=>({kind:"folder",...c})).concat(i.map(c=>({kind:"file",file:c}))),l=a?a.name:t==="home"?"This folder":te(t);return`
    <section class="drive-section-title">
      <div><h3>${o(l)}</h3><span>${s.length} folder${s.length===1?"":"s"} / ${i.length} file${i.length===1?"":"s"}</span></div>
    </section>
    ${n.driveView==="list"?Vn(r):Jn(r)}
  `}function Vn(e){return`
    <div class="explorer-table" role="table" aria-label="File explorer">
      <div class="explorer-head" role="row">
        <span>Name</span>
        <span>Date modified</span>
        <span>Type</span>
        <span>Size</span>
      </div>
      ${e.map(t=>t.kind==="folder"?Hn(t):zn(t.file)).join("")||v("This folder is empty.")}
    </div>
  `}function Jn(e){return`
    <section class="drive-folder-grid explorer-grid">
      ${e.map(t=>t.kind==="folder"?Bn(t):Yn(t.file)).join("")||v("This folder is empty.")}
    </section>
  `}function Bn(e){return`
    <a class="drive-folder-card explorer-folder" href="${o(e.href)}" data-router>
      <span class="drive-folder-icon"><i class="ti ${o(e.icon||"ti-folder")}"></i></span>
      <strong>${o(e.name)}</strong>
      <em>${o(e.countLabel||"0 items")}</em>
    </a>
  `}function Hn(e){return`
    <a class="explorer-row folder-row-live" href="${o(e.href)}" data-router role="row">
      <span class="explorer-name"><span class="file-type folder"><i class="ti ${o(e.icon||"ti-folder")}"></i></span><strong>${o(e.name)}</strong></span>
      <span>${o(e.updatedLabel||"")}</span>
      <span>Folder</span>
      <span>${o(e.countLabel||"")}</span>
    </a>
  `}function zn(e){return`
    <button type="button" class="explorer-row ${e.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${o(e.id)}" role="row">
      <span class="explorer-name">${Wn(e)}<strong>${o(e.file_name)}</strong></span>
      <span>${O(e.updated_at||e.created_at)}</span>
      <span>${o(_e(e))}</span>
      <span>${Ca(e.size_bytes)}</span>
    </button>
  `}function Wn(e){return`
    <span class="file-type ${o(Da(e))}">
      <i class="ti ${o(Xi(e))}"></i>
      <small>${o(kr(e))}</small>
    </span>
  `}function Yn(e){return`
    <button type="button" class="file-card-live ${e.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${o(e.id)}">
      <span class="file-thumb">${qa(e)}</span>
      <strong>${o(e.file_name)}</strong>
      <span>${o(_e(e))} / ${Ca(e.size_bytes)}</span>
    </button>
  `}function Kn(e,t){return`
    <section class="file-viewer-layout">
      <div class="file-viewer-stage">
        ${Gn(e)}
      </div>
      <aside class="file-viewer-meta">
        <div class="file-open-head">
          ${qa(e)}
          <div>
            <strong>${o(e.file_name)}</strong>
            <span>${o(_e(e))} / ${Ca(e.size_bytes)}</span>
          </div>
        </div>
        <div class="file-detail-list">
          ${pe("Location",te(e.folder))}
          ${pe("Job",q(e.job_id)?.name||"Company shared")}
          ${pe("Uploaded by",e.uploaded_by_label||"Quest HQ")}
          ${pe("Modified",O(e.updated_at||e.created_at))}
          ${pe("Storage",e.object_path||"Metadata only")}
        </div>
        <div class="file-detail-actions">
          <button class="btn" type="button" data-action="download-file" data-file-id="${o(e.id)}"><i class="ti ti-download"></i>Download</button>
          <button class="btn danger" type="button" data-action="delete-file" data-file-id="${o(e.id)}"><i class="ti ti-trash"></i>Delete</button>
        </div>
      </aside>
    </section>
  `}function Gn(e){const t=Da(e);return e.signed_url&&t==="image"?`<img class="file-preview-media" src="${o(e.signed_url)}" alt="" />`:e.signed_url&&t==="pdf"?`<iframe class="file-preview-frame" src="${o(e.signed_url)}" title="${o(e.file_name)}"></iframe>`:e.signed_url&&t==="text"?`<iframe class="file-preview-frame text" src="${o(e.signed_url)}" title="${o(e.file_name)}"></iframe>`:["doc","sheet"].includes(t)&&e.signed_url?`<iframe class="file-preview-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.signed_url)}" title="${o(e.file_name)}"></iframe>`:`
    <div class="file-preview-empty">
      ${qa(e,!0)}
      <strong>${o(_e(e))} preview</strong>
      <p>${o(e.object_path?"Preview will load when a signed file URL is available.":"This is a metadata-only file record. Upload the actual file object to preview it here.")}</p>
      ${e.notes?`<pre>${o(e.notes)}</pre>`:""}
    </div>
  `}function Zn(){const e=p(),t=n.route||wt(),a=t.params.get("folder")||n.driveFolder||"home",i=t.jobId?q(t.jobId):null;return A("Drive","New folder",`
    <form class="compact-tool-form" data-folder-form>
      <label><span>Folder name</span><input name="name" placeholder="Folder name" required autofocus /></label>
      <input type="hidden" name="company_id" value="${o(e)}" />
      <input type="hidden" name="parent_key" value="${o(Bi(a,i))}" />
      <div class="file-upload-log">
        <strong>Location</strong>
        <span>${o(a==="home"?D(e):i?.name||te(a))}</span>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create folder</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"task-modal")}function Xn(){const e=p(),t=n.route?.params?.get("folder")||(n.driveFolder==="home"?"shared":n.driveFolder),a=n.route?.jobId||"";return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">${o(D(e))} Drive</div><h2 id="upload-title">Upload files</h2></div>
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
          ${k("Metadata-only file name","file_name","")}
          ${P("Folder","folder",t,Jr(e))}
          ${P("Job","job_id",a,[["","Company shared file"]].concat(E(e).map(i=>[i.id,i.name])))}
          ${P("Category","category",te(t),on.filter(i=>i!=="All categories").map(i=>[i,i]))}
          ${k("Uploaded by","uploaded_by_label",$().profile.full_name||"Quest HQ")}
          ${oe("Notes","notes","","span-2")}
          <div class="form-actions span-2">
            <button class="btn btn-primary" type="submit">Upload to drive</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
            <button class="btn" type="reset">Clear</button>
          </div>
          <div class="file-upload-log span-2">
            <strong>Upload target</strong>
            <span>${o(e)}/${o(a?`jobs/${a}`:t)}</span>
          </div>
        </form>
      </div>
    </div>
  `}function es(e,t){const a=Vo(t),i=["members","access"].includes(e.params.get("tab"))?e.params.get("tab"):"members",s=n.joinRequests.filter(l=>l.company_id===t&&l.status==="pending"),r=ga("users.manage",t);return`
    ${B("Users","Company members, roles, workers, and access context.",`
      <button class="btn btn-primary" type="button" data-action="open-invite-form" ${r?"":"disabled"}><i class="ti ti-user-plus"></i>Invite user</button>
      <a class="btn" href="${g(d("settings",{tab:"roles"},t))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
      <a class="btn" href="${g(d("settings",{tab:"access"},t))}" data-router><i class="ti ti-settings"></i>Access settings</a>
    `)}
    ${ra("Users sections",[[d("users",{tab:"members"},t),"Members",i==="members"],[d("users",{tab:"access"},t),"Access",i==="access"]])}
    ${i==="members"?`
      <section class="metric-grid operations-metrics">
        ${w("Active users",a.filter(l=>l.status==="active").length)}
        ${w("Pending",a.filter(l=>l.status!=="active").length+s.length)}
        ${w("Roles",ge(t).length)}
      </section>
      <section class="users-grid">
        ${a.map(l=>`
          <article class="user-card ${l.status!=="active"?"muted":""}">
            ${Ye({full_name:rt(l),email:l.email,avatar_url:l.avatar_url},"avatar")}
            <div>
              <strong>${o(rt(l))}</strong>
              <span>${o(_i(l))}</span>
              <small>${o(l.role_label)} / ${o(C(l.status))}</small>
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
          ${a.map(l=>ts(t,l,r)).join("")||v("No users assigned to this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head">
          <div><h2>Invites</h2><p>Copy a secure invite code or link for a specific email address.</p></div>
          <button class="btn btn-primary" type="button" data-action="open-invite-form" ${r?"":"disabled"}><i class="ti ti-user-plus"></i>Invite</button>
        </div>
        <div class="access-invite-list">
          ${Jo(t).map(l=>is(l,r)).join("")||v("No pending invites.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Approve requests into this company workspace or reject them.</p></div></div>
        <div class="access-request-list">
          ${s.map(l=>as(l,r)).join("")||v("No pending join requests.")}
        </div>
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Access model</h2><p>Membership is company-scoped; UI hiding is convenience, RLS is the real privacy layer.</p></div></div>
        ${L([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Supabase Auth + RLS"],["Your role",Ft(t)],["Can manage users",r?"Yes":"No"]])}
      </article>
    </section>
    `}
  `}function ts(e,t,a){const i=ge(e),s=t.role_id||Jt(e,t.role)||i[0]?.id||"";return`
    <article class="access-user-row">
      ${Ye({full_name:rt(t),email:t.email,avatar_url:t.avatar_url},"avatar")}
      <div class="access-user-main">
        <strong>${o(rt(t))}</strong>
        <span>${o(_i(t))} / ${o(C(t.status))}</span>
      </div>
      <form class="access-role-form" data-user-role-form>
        <input type="hidden" name="company_id" value="${o(e)}" />
        <input type="hidden" name="profile_id" value="${o(t.profile_id)}" />
        <select name="role_id" ${a&&t.profile_id?"":"disabled"}>
          ${i.map(r=>`<option value="${o(r.id)}" ${r.id===s?"selected":""}>${o(r.name)}</option>`).join("")}
        </select>
        <select name="membership_status" ${a&&t.profile_id?"":"disabled"}>
          ${["active","pending","disabled"].map(r=>`<option value="${o(r)}" ${r===t.status?"selected":""}>${o(C(r))}</option>`).join("")}
        </select>
        <button class="btn" type="submit" ${a&&t.profile_id?"":"disabled"}>Save</button>
      </form>
    </article>
  `}function as(e,t){const a=e.requested_email||da(e.profile_id)?.email||e.profile_id||"Requester";return`
    <article class="access-request-row">
      <div>
        <strong>${o(a)}</strong>
        <span>${o(e.message||"Access request")} / ${O(e.created_at)}</span>
      </div>
      <div>
        <button class="btn btn-primary" type="button" data-action="approve-join-request" data-request-id="${o(e.id)}" ${t?"":"disabled"}>Approve</button>
        <button class="btn danger" type="button" data-action="reject-join-request" data-request-id="${o(e.id)}" ${t?"":"disabled"}>Reject</button>
      </div>
    </article>
  `}function is(e,t){const a=He(e.company_id,e.role_id),i=e.expires_at&&Date.parse(e.expires_at)<Date.now();return`
    <article class="access-invite-row ${i?"muted":""}">
      <div>
        <strong>${o(e.email)}</strong>
        <span>${o(a?.name||"Member")} / ${i?"Expired":`Expires ${O(e.expires_at)}`}</span>
        ${e.token?`<code class="invite-code">${o(e.token)}</code>`:""}
      </div>
      <div>
        <button class="btn" type="button" data-action="copy-invite-code" data-invite-id="${o(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-key"></i>Copy code</button>
        <button class="btn" type="button" data-action="copy-invite-link" data-invite-id="${o(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-link"></i>Copy link</button>
        <button class="btn danger" type="button" data-action="revoke-invite" data-invite-id="${o(e.id)}" ${t?"":"disabled"}>Revoke</button>
      </div>
    </article>
  `}function rt(e){const t=String(e.name||"").trim(),a=String(e.email||"").trim();if(t&&!Wt(t))return t;if(a&&!Wt(a))return a.split("@")[0].replace(/[._-]+/g," ").replace(/\b\w/g,s=>s.toUpperCase());const i=String(e.role||"").toLowerCase();return i==="owner"?"Workspace owner":i==="admin"?"Workspace admin":i==="developer"?"Developer":`${e.role_label||"Workspace"} user`}function _i(e){const t=String(e.email||"").trim();if(t&&!Wt(t))return t;const a=String(e.profile_id||e.member_id||"").trim();return a?`ID ${Yr(a)}`:"No email on profile"}function ns(e){const t=le(e),a=t.filter(i=>!i.supervisor_id||!t.some(s=>s.id===i.supervisor_id));return`
    <section class="tool-page team-chart-page">
      ${B("Team chart","Reporting lines, roles, and company coverage for this workspace.",`
        <a class="btn" href="${g(d("users",{},e))}" data-router><i class="ti ti-users"></i>Users</a>
        <a class="btn btn-primary" href="${g(d("settings",{tab:"team"},e))}" data-router><i class="ti ti-settings"></i>Worker settings</a>
      `)}
      <section class="metric-grid operations-metrics">
        ${w("Members",t.length)}
        ${w("Leads",a.length)}
        ${w("Open tasks",W(e).filter(ua).length)}
        ${w("Active timer",qt(e)?"Yes":"No")}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Reporting chart</h2><p>Supervisor links are local/basic until Auth and RLS are restored.</p></div></div>
        <div class="team-tree">
          ${a.map(i=>hi(e,i,t)).join("")||v("No workers assigned.")}
        </div>
      </section>
    </section>
  `}function hi(e,t,a,i=0){const s=a.filter(r=>r.supervisor_id===t.id);return`
    <article class="team-node" style="--depth:${i}">
      <div class="team-node-card">
        ${Ye({full_name:t.full_name,avatar_url:t.avatar_url},"avatar")}
        <span><strong>${o(t.full_name)}</strong><small>${o(ct(e,t.id))}</small></span>
        <b>${W(e).filter(r=>r.assignee_id===t.id&&ua(r)).length} open</b>
      </div>
      ${s.length?`<div class="team-node-children">${s.map(r=>hi(e,r,a,i+1)).join("")}</div>`:""}
    </article>
  `}function ss(e,t){const a=Ct(t),i=["company","billing","roles","access","team"].includes(e.params.get("tab"))?e.params.get("tab"):"company";return`
    ${B("Settings","Company settings, roles, approvals, and admin controls.","")}
    ${ra("Settings sections",[[d("settings",{tab:"company"},t),"Company",i==="company"],[d("settings",{tab:"billing"},t),"Billing",i==="billing"],[d("settings",{tab:"roles"},t),"Roles",i==="roles"],[d("settings",{tab:"access"},t),"Access",i==="access"],[d("settings",{tab:"team"},t),"Workers",i==="team"]])}
    <section class="dashboard-grid compact-settings-grid">
      ${i==="company"?`
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${L([["Name",D(t)],["Company ID",t],["Color",a?.color||ce(t)],["Visible jobs",E(t).length]])}
      </article>
      `:""}
      ${i==="billing"?os(t):""}
      ${i==="roles"?rs(t):""}
      ${i==="access"?`
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Memberships, invites, and join requests.</p></div></div>
        ${L([["Auth switch","Enabled"],["Local login","Disabled"],["Isolation","Server-enforced when migration is applied"],["Memberships",String(n.memberships.filter(s=>s.company_id===t).length)],["Invites",String(n.companyInvites.filter(s=>s.company_id===t&&s.status==="pending").length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Hybrid onboarding queue for this company.</p></div></div>
        <div class="finance-compact-list">
          ${n.joinRequests.filter(s=>s.company_id===t).map(s=>Se(s.requested_email||s.profile_id,s.message||"Access request",C(s.status),s.created_at)).join("")||v("No pending company approvals.")}
        </div>
      </article>
      `:""}
      ${i==="team"?`
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${le(t).map(s=>`<div><strong>${o(s.full_name)}</strong><span>${o(ct(t,s.id))}</span></div>`).join("")||v("No workers assigned.")}
        </div>
      </article>
      `:""}
    </section>
  `}function os(e){const t=va(e);return`
    <article class="panel">
      <div class="section-head">
        <div><h2>Subscription</h2><p>$300/month company workspace billing gate.</p></div>
        <button class="btn btn-primary" type="button" data-action="start-checkout"><i class="ti ti-credit-card"></i>Start subscription</button>
      </div>
      ${L([["Plan","$300/month company workspace"],["Status",Pi(e)],["Stripe customer",t?.stripe_customer_id||"Not connected"],["Renewal / trial",t?.current_period_end||t?.trial_ends_at?O(t.current_period_end||t.trial_ends_at):"Pending"]])}
    </article>
    <article class="panel">
      <div class="section-head"><div><h2>Billing gate</h2><p>Paid modules remain available only for trialing, active, past_due, or grace status.</p></div></div>
      ${L([["Workspace access",ya(e)?"Allowed":"Suspended"],["Finance/files privacy","Requires Auth + RLS"],["Seat billing","Tracked later; not charged in v1"]])}
    </article>
  `}function rs(e){const t=ge(e),a=jt(e);return`
    <article class="panel span-2">
      <div class="section-head">
        <div><h2>Custom roles</h2><p>Discord-style roles for module, action, record, and field permissions.</p></div>
        <button class="btn btn-primary" type="button" data-action="open-role-form"><i class="ti ti-plus"></i>New role</button>
      </div>
      <div class="roles-list">
        ${t.map(i=>{const s=n.rolePermissions.filter(c=>c.role_id===i.id&&c.effect==="allow").length,r=n.roleAssignments.filter(c=>c.company_id===e&&c.role_id===i.id).length,l=a?.id===i.id;return`
            <article class="role-row" style="--role-color:${o(i.color)}">
              <span></span>
              <div><strong>${o(i.name)}</strong><small>${s||"All"} permissions / ${r} users / priority ${i.priority}</small></div>
              <div class="role-row-actions">
                <b>${i.is_system?"System":"Custom"}</b>
                <button class="btn" type="button" data-action="view-as-role" data-role-id="${o(i.id)}" ${l?"disabled":""}>
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
        ${n.fieldPermissions.filter(i=>i.company_id===e).map(i=>Se(i.field_key,i.resource_type,i.visibility,"")).join("")||v("No field permission overrides yet.")}
      </div>
    </article>
  `}function ls(e){return A("Settings","New role",`
    <form class="role-form" data-role-form>
      ${k("Role name","name","")}
      ${k("Color","color","#f0b23b",!1,"color")}
      ${k("Priority","priority","100",!1,"number")}
      <div class="permission-grid span-2">
        ${nn.map(([t,a])=>`
          <label><input type="checkbox" name="permissions" value="${o(t)}" /> <span>${o(a)}</span></label>
        `).join("")}
      </div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create role</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function cs(e){const t=ge(e).filter(i=>i.name.toLowerCase()!=="owner"),a=[["","Member"]].concat(t.map(i=>[i.id,i.name]));return A("Users","Invite user",`
    <form class="role-form" data-invite-form>
      <input type="hidden" name="company_id" value="${o(e)}" />
      ${k("Email","email","",!0,"email")}
      ${P("Role","role_id",Ho(e),a)}
      <div class="form-message span-2">Quest creates an invite code you can copy. Email delivery comes after the Resend/SMTP setup.</div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create invite code</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function ds(e){const t=jr(e),a=Re(e),i=n.formsTab==="builder"&&a?"builder":n.formsTab==="responses"?"responses":"library";return`
    <section class="tool-page forms-center">
      <div class="forms-command panel">
        <span class="sync-pill live"><i class="ti ti-device-floppy"></i>Local autosafe</span>
        <label>
          <span>Search</span>
          <input data-form-search value="${o(n.formQuery)}" placeholder="Find form, audience, or job" />
        </label>
        <button class="btn" type="button" data-action="open-forms-tools"><i class="ti ti-adjustments"></i>Tools</button>
        <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
      </div>
      ${i==="builder"?"":`
        <nav class="tabbar forms-tabs" aria-label="Forms workspace">
          ${["library","responses"].map(s=>`
            <button class="${i===s?"active":""}" type="button" data-action="set-forms-tab" data-tab="${o(s)}">${o(C(s))}</button>
          `).join("")}
        </nav>
      `}
      ${i==="library"?us(e,t,a):""}
      ${i==="builder"?ps(e,a):""}
      ${i==="responses"?$s(e,a):""}
    </section>
  `}function us(e,t,a){return`
    <section class="forms-home">
      <article class="forms-recent-panel panel">
        <div class="forms-panel-head">
          <div>
            <strong>Recent forms</strong>
            <span>${t.length} visible form${t.length===1?"":"s"} in ${o(D(e))}</span>
          </div>
        </div>
        <div class="forms-list forms-list-cards">
          ${t.map(i=>`
            <article class="form-card ${n.expandedFormIds.has(i.id)?"expanded":""} ${a?.id===i.id?"active":""}">
              <span class="form-card-top">
                <i class="ti ti-clipboard-list"></i>
              </span>
              <span class="form-card-main">
                <strong>${o(i.title)}</strong>
                <span>Created by ${o(Dr(i))}</span>
              </span>
              <button class="form-card-toggle" type="button" data-action="toggle-form-card" data-form-id="${o(i.id)}" aria-expanded="${n.expandedFormIds.has(i.id)?"true":"false"}">
                <i class="ti ${n.expandedFormIds.has(i.id)?"ti-chevron-up":"ti-chevron-down"}"></i>
                ${n.expandedFormIds.has(i.id)?"Less":"Details"}
              </button>
              <span class="form-card-meta">
                <small>${o(i.type)} / ${o(i.audience||"Internal")}</small>
                <small>${Wi(i)} questions</small>
                <em>${Rt(i.id).length} responses</em>
                <em>Updated ${O(i.updated_at)}</em>
                <em>${o(i.status)}</em>
              </span>
              ${n.expandedFormIds.has(i.id)?`
                <div class="form-card-detail">
                  <p>${o(i.description||"No description yet.")}</p>
                  <div class="form-actions">
                    <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${o(i.id)}"><i class="ti ti-pencil"></i>Open builder</button>
                    <button class="btn" type="button" data-action="open-form-preview" data-form-id="${o(i.id)}"><i class="ti ti-eye"></i>Preview</button>
                  </div>
                </div>
              `:""}
            </article>
          `).join("")||v("No forms match this company view.")}
        </div>
      </article>
    </section>
  `}function ps(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${v("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(n.formEditorTab)?n.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${o(a)}">
      ${ms(t,a)}
      ${a==="questions"?`
        ${fs(e,t)}
        ${bs(t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${gs(e,t)}
        </article>
      `:""}
      ${a==="responses"?vs(e,t):""}
    </section>
  `}function ms(e,t){const a=Rt(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${o(e.title)}</strong>
        <span>${o(e.status)} / ${Wi(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(i=>`
        <button class="${t===i?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${o(i)}">
          ${i==="questions"?'<i class="ti ti-list-details"></i>':i==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${o(C(i))}
        </button>
      `).join("")}
      <button class="btn" type="button" data-action="open-form-preview" data-form-id="${o(e.id)}"><i class="ti ti-eye"></i>Preview</button>
      <button class="btn" type="button" data-action="open-form-actions" data-form-id="${o(e.id)}"><i class="ti ti-share"></i>Share</button>
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${o(e.id)}">Save</button>
    </div>
  `}function fs(e,t){return`
    <article class="panel form-identity-panel gform-title-card">
      <div class="gform-accent-strip" style="--form-accent:${o(t.theme_color||ce(e))}"></div>
      ${xe("Form title","title",t.title,!0)}
      ${Yi("Form description","description",t.description)}
      <div class="forms-simple-meta">
        <span>${o(t.status)}</span>
        <span>${o(t.type)}</span>
        <span>${o(t.audience||"Internal")}</span>
        <span>${o(q(t.linked_job_id)?.name||"Company level")}</span>
        <span>${o(D(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">Settings</button>
        <button class="btn" type="button" data-action="open-form-preview" data-form-id="${o(t.id)}">Preview</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${o(t.id)}">Publish</button>
      </div>
    </article>
  `}function bs(e){return`
    <article class="question-workbench">
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${Je.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${o(t)}" title="${o(a)}" aria-label="Add ${o(a)} question"><i class="ti ${o(qr(t))}"></i></button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>ys(t,a)).join("")||v("Add the first question.")}
        </div>
      </div>
    </article>
  `}function gs(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${xe("Title","title",t.title,!0)}
      ${tt("Status","status",t.status,oa.map(a=>[a,a]))}
      ${Yi("Description","description",t.description)}
      ${tt("Type","type",t.type,Ve.map(a=>[a,a]))}
      ${xe("Audience","audience",t.audience)}
      ${tt("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(E(e).map(a=>[a.id,a.name])))}
      ${xe("Theme color","theme_color",t.theme_color||ce(e),!1,"color")}
      ${tt("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${xe("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${o(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${o(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${o(t.id)}">Delete</button>
    </div>
  `}function vs(e,t){const a=Rt(t.id),i=a[0]||null;return`
    <article class="panel response-list-panel forms-response-editor">
      <div class="section-head">
        <div><h2>Response inbox</h2><p>${a.length} captured response${a.length===1?"":"s"} for this form.</p></div>
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="questions"><i class="ti ti-list-details"></i>Questions</button>
      </div>
      <div class="response-list">
        ${a.map(s=>`
          <button type="button" class="response-card">
            <strong>${o(s.submitted_by||s.submitter_email||"Anonymous")}</strong>
            <span>${o(t.title)}</span>
            <small>${O(s.created_at)}</small>
          </button>
        `).join("")||v("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${i?Ki(i):v("No response selected.")}
    </aside>
  `}function ys(e,t){const a=Je.map(([i,s])=>`<option value="${o(i)}" ${e.type===i?"selected":""}>${o(s)}</option>`).join("");return`
    <article class="question-card ${n.selectedQuestionId===e.id?"active":""}" data-question-id="${o(e.id)}">
      <div class="question-card-head">
        <span>${t+1}</span>
        <select data-question-field="type">${a}</select>
        <div class="question-actions">
          <button type="button" data-action="move-question" data-direction="-1" data-question-id="${o(e.id)}"><i class="ti ti-arrow-up"></i></button>
          <button type="button" data-action="move-question" data-direction="1" data-question-id="${o(e.id)}"><i class="ti ti-arrow-down"></i></button>
          <button type="button" data-action="duplicate-question" data-question-id="${o(e.id)}"><i class="ti ti-copy"></i></button>
          <button type="button" data-action="delete-question" data-question-id="${o(e.id)}"><i class="ti ti-trash"></i></button>
        </div>
      </div>
      <label><span>Question</span><input data-question-field="label" value="${o(e.label)}" /></label>
      <label><span>Help text</span><input data-question-field="help" value="${o(e.help||"")}" /></label>
      <label class="check-row"><input type="checkbox" data-question-field="required" ${e.required?"checked":""} /> Required</label>
      ${Ne(e)?`
        <div class="question-options">
          ${(e.options||[]).map((i,s)=>`
            <label>
              <span>Option ${s+1}</span>
              <input data-question-option="${s}" value="${o(i)}" />
              <button type="button" data-action="remove-question-option" data-question-id="${o(e.id)}" data-option-index="${s}"><i class="ti ti-x"></i></button>
            </label>
          `).join("")}
          <button class="btn" type="button" data-action="add-question-option" data-question-id="${o(e.id)}"><i class="ti ti-plus"></i>Add option</button>
        </div>
      `:""}
    </article>
  `}function _s(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${o(t.id)}" style="--form-accent:${o(t.theme_color||ce(e))}">
      <div class="designed-form-header">
        <span>${o(D(e))}</span>
        <h2>${o(t.title)}</h2>
        <p>${o(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>hs(a)).join("")||v("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${o(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function hs(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?ae(e,`<textarea name="${o(t)}" rows="3" ${a}></textarea>`):e.type==="date"?ae(e,`<input name="${o(t)}" type="date" ${a} />`):e.type==="file"?ae(e,`<input name="${o(t)}" type="file" ${a} />`):e.type==="yesno"?ae(e,`<select name="${o(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?ae(e,`<input name="${o(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?ae(e,`<select name="${o(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(i=>`<option>${o(i)}</option>`).join("")}</select>`):e.type==="checkbox"?ae(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${o(t)}" type="checkbox" value="${o(i)}" /> ${o(i)}</label>`).join("")}</div>`):e.type==="multiple"?ae(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${o(t)}" type="radio" value="${o(i)}" ${a} /> ${o(i)}</label>`).join("")}</div>`):ae(e,`<input name="${o(t)}" ${a} />`)}function $s(e,t){const a=t?Rt(t.id):zi(e),i=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(s=>`
            <button type="button" class="response-card">
              <strong>${o(he(s.form_id)?.title||"Unknown form")}</strong>
              <span>${o(s.submitted_by||s.submitter_email||"Anonymous")}</span>
              <small>${O(s.created_at)}</small>
            </button>
          `).join("")||v("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${i?Ki(i):v("No response selected.")}
      </aside>
    </section>
  `}function ws(e,t){const a=Yo(t),i=Dt(t),s=W(t).filter(c=>c.status!=="done").length,r=Z(E(t),"estimate_total"),l=Go(t);return`
    <section class="tool-page crm-page">
      ${B("CRM","Customers, contacts, and follow-ups built from company jobs.",`
        <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add customer job</button>
      `)}
      <section class="metric-grid crm-metrics">
        ${w("Accounts",i.length)}
        ${w("Open jobs",E(t).filter(c=>c.stage!=="Closed").length)}
        ${w("Open tasks",s)}
        ${w("Pipeline value",y(r))}
      </section>
      <section class="crm-toolbar panel">
        <label>
          <span>Search</span>
          <input data-crm-search value="${o(n.crmQuery)}" placeholder="Find customer, contact, job, or address" />
        </label>
        <label>
          <span>Stage</span>
          <select data-crm-stage-filter>
            ${["all"].concat(Ue).map(c=>`<option value="${o(c)}" ${n.crmStageFilter===c?"selected":""}>${o(c==="all"?"All stages":c)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>Owner</span>
          <select data-crm-owner-filter>
            <option value="all" ${n.crmOwnerFilter==="all"?"selected":""}>All owners</option>
            ${l.map(c=>`<option value="${o(c)}" ${n.crmOwnerFilter===c?"selected":""}>${o(c)}</option>`).join("")}
          </select>
        </label>
      </section>
      <section class="panel crm-list-panel">
        <div class="section-head">
          <div><h2>Customers</h2><p>${a.length} visible account${a.length===1?"":"s"} in ${o(D(t))}</p></div>
        </div>
        <div class="data-table crm-table">
          <div class="table-head"><span>Account</span><span>Contact</span><span>Stage</span><span>Owner</span><span>Jobs</span><span>Value</span><span>Updated</span></div>
          ${a.map(c=>`
            <a class="table-row crm-account-row" href="${g(d("crm",{account:c.key},t))}" data-router>
              <span><strong>${o(c.name)}</strong><small>${o(c.subtitle)}</small></span>
              <span>${o(c.primaryContact)}</span>
              <span>${o(c.stage)}</span>
              <span>${o(c.owner)}</span>
              <span>${o(c.jobs.length)}</span>
              <span>${y(c.estimateTotal)}</span>
              <span>${O(c.updatedAt)}</span>
            </a>
          `).join("")||v("No CRM accounts match this view. Add a customer job to start the list.")}
        </div>
      </section>
    </section>
  `}function Ss(e,t){const a=Ko(e,t);if(!a)return A("CRM","Customer account",v("This customer is not visible in the current company view."));const i=a.latestJob,s=a.tasks.filter(r=>r.status!=="done");return A("CRM",a.name,`
    <div class="crm-account-modal">
      <section class="crm-modal-summary">
        <div class="section-head">
          <div>
            <h2>${o(a.name)}</h2>
            <p>${o(a.subtitle)}</p>
          </div>
          ${ka(a.priority)}
        </div>
        ${L([["Primary contact",a.primaryContact],["Owner",a.owner],["Current stage",a.stage],["Pipeline value",y(a.estimateTotal)],["Open tasks",String(s.length)],["Last updated",O(a.updatedAt)]])}
      </section>
      <section class="crm-rollup-grid">
        ${w("Jobs",a.jobs.length)}
        ${w("Files",a.fileCount)}
        ${w("Forms",a.formCount)}
        ${w("Tasks",a.tasks.length)}
      </section>
      <section class="crm-modal-actions">
        ${i?`<a class="btn btn-primary" href="${g(d("jobs",{tab:"profile",job_id:i.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
        ${i?`<a class="btn" href="${g(d("tasks",{job_id:i.id},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>`:""}
        ${i?`<a class="btn" href="${g(d("files",{job_id:i.id},e))}" data-router><i class="ti ti-folder"></i>Files</a>`:""}
        ${i?`<button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${o(i.id)}"><i class="ti ti-pencil"></i>Edit latest job</button>`:""}
        <button class="btn" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Linked jobs</h2><p>Customer workspaces connected to this account.</p></div></div>
        <div class="data-table crm-linked-jobs">
          <div class="table-head"><span>Job</span><span>Stage</span><span>Owner</span><span>Value</span></div>
          ${a.jobs.map(r=>`
            <a class="table-row" href="${g(d("jobs",{tab:"profile",job_id:r.id},e))}" data-router>
              <span><strong>${o(r.name)}</strong><small>${o(r.site_address||"No address")}</small></span>
              <span>${o(r.stage)}</span>
              <span>${o(r.owner_name||"Unassigned")}</span>
              <span>${y(r.estimate_total)}</span>
            </a>
          `).join("")||v("No linked jobs yet.")}
        </div>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Follow-ups</h2><p>Open tasks across linked jobs.</p></div></div>
        <div class="queue-list">
          ${s.slice(0,6).map(r=>Pt(r)).join("")||v("No open follow-ups for this customer.")}
        </div>
      </section>
    </div>
  `,"crm-modal")}function ks(e,t){const a=Ti(t),i=ve(t),s=Mi(t).slice().sort(Le("received_at")).slice(0,5),r=pa(t).slice().sort(Le("spent_at")).slice(0,5),l=ma(t).slice().sort((c,m)=>c.name.localeCompare(m.name)).slice(0,5);return`
    <section class="tool-page finance-page">
      ${B("Finance","Invoices, payments, expenses, vendors, and job-linked money in one company view.",`
        <button class="btn btn-primary" type="button" data-action="new-finance-invoice"><i class="ti ti-file-dollar"></i>New invoice</button>
        <button class="btn" type="button" data-action="new-finance-payment"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="new-finance-expense"><i class="ti ti-receipt"></i>Add expense</button>
        <button class="btn" type="button" data-action="new-finance-vendor"><i class="ti ti-building-store"></i>Add vendor</button>
        <a class="btn" href="${g(d("finance",{report:"summary"},t))}" data-router><i class="ti ti-report-analytics"></i>Reports</a>
      `)}
      <section class="metric-grid finance-metrics">
        ${w("Estimated pipeline",y(a.pipeline))}
        ${w("Invoiced",y(a.invoiced))}
        ${w("Collected",y(a.collected))}
        ${w("Outstanding",y(a.outstanding))}
        ${w("Expenses",y(a.expenses))}
        ${w("Net position",y(a.net))}
      </section>
      <section class="panel finance-aging">
        <div class="section-head"><div><h2>AR aging</h2><p>Outstanding invoice balance by due date.</p></div></div>
        <div class="finance-aging-grid">
          ${[["Current",a.aging.current],["1-30",a.aging.thirty],["31-60",a.aging.sixty],["61+",a.aging.overSixty]].map(([c,m])=>`<div><span>${o(c)}</span><strong>${y(m)}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel finance-invoice-panel">
        <div class="section-head"><div><h2>Invoices</h2><p>${i.length} billing record${i.length===1?"":"s"} for ${o(D(t))}</p></div></div>
        <div class="data-table finance-invoice-table">
          <div class="table-head"><span>Invoice</span><span>Status</span><span>Job</span><span>Due</span><span>Total</span><span>Paid</span><span>Balance</span></div>
          ${i.map(c=>`
            <a class="table-row" href="${g(d("finance",{invoice:c.id},t))}" data-router>
              <span><strong>${o(c.invoice_number)}</strong><small>${o(c.client_name||q(c.job_id)?.client_name||"No client")}</small></span>
              <span>${vr(Oi(c))}</span>
              <span>${o(q(c.job_id)?.name||"Company level")}</span>
              <span>${O(c.due_date)}</span>
              <span>${y(c.total)}</span>
              <span>${y(ba(c.id))}</span>
              <span>${y(se(c.id))}</span>
            </a>
          `).join("")||v("No invoices yet. Create one from a job or customer record.")}
        </div>
      </section>
      <section class="finance-secondary-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Recent payments</h2><p>Money received.</p></div></div>
          <div class="finance-compact-list">
            ${s.map(c=>Se(ye(c.invoice_id)?.invoice_number||"Payment",c.method,y(c.amount),c.received_at)).join("")||v("No payments recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Expenses</h2><p>Job and company costs.</p></div></div>
          <div class="finance-compact-list">
            ${r.map(c=>Se(Bt(c.vendor_id),c.category,y(c.amount),c.spent_at,d("finance",{expense:c.id},t))).join("")||v("No expenses recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Vendors</h2><p>Suppliers and subcontractors.</p></div></div>
          <div class="finance-compact-list">
            ${l.map(c=>Se(c.name,c.category,c.status,c.updated_at,d("finance",{vendor:c.id},t))).join("")||v("No vendors recorded.")}
          </div>
        </article>
      </section>
    </section>
  `}function js(e,t){return e.params.get("invoice")?Ds(t,e.params.get("invoice")):e.params.get("expense")?qs(t,e.params.get("expense")):e.params.get("vendor")?Cs(t,e.params.get("vendor")):e.params.get("report")==="summary"?Is(t):""}function Ds(e,t){const a=ye(t);if(!a||a.company_id!==e)return A("Finance","Invoice",v("Invoice not found."));const i=xi(a.id),s=q(a.job_id);return A("Finance",a.invoice_number,`
    <div class="finance-detail-modal">
      ${L([["Client",a.client_name||s?.client_name||"No client"],["Status",Oi(a)],["Job",s?.name||"Company level"],["Issued",O(a.issue_date)],["Due",O(a.due_date)],["Total",y(a.total)],["Collected",y(ba(a.id))],["Balance",y(se(a.id))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="new-finance-payment" data-invoice-id="${o(a.id)}"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="edit-finance-invoice" data-invoice-id="${o(a.id)}"><i class="ti ti-pencil"></i>Edit invoice</button>
        ${s?`<a class="btn" href="${g(d("jobs",{tab:"profile",job_id:s.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
      </div>
      <section class="finance-modal-section">
        <div class="section-head"><div><h2>Payments</h2><p>${i.length} payment${i.length===1?"":"s"} applied.</p></div></div>
        <div class="finance-compact-list">
          ${i.map(r=>Se(r.reference||r.method,r.method,y(r.amount),r.received_at)).join("")||v("No payments yet.")}
        </div>
      </section>
      ${a.notes?`<p class="finance-note">${o(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function qs(e,t){const a=Ai(t);if(!a||a.company_id!==e)return A("Finance","Expense",v("Expense not found."));const i=q(a.job_id);return A("Finance",`${Bt(a.vendor_id)} expense`,`
    <div class="finance-detail-modal">
      ${L([["Vendor",Bt(a.vendor_id)],["Category",a.category],["Status",a.status],["Job",i?.name||"Company level"],["Spent",O(a.spent_at)],["Amount",y(a.amount)]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-expense" data-expense-id="${o(a.id)}"><i class="ti ti-pencil"></i>Edit expense</button>
        ${i?`<a class="btn" href="${g(d("files",{job_id:i.id},e))}" data-router><i class="ti ti-folder"></i>Job files</a>`:""}
      </div>
      ${a.notes?`<p class="finance-note">${o(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function Cs(e,t){const a=fa(t);if(!a||a.company_id!==e)return A("Finance","Vendor",v("Vendor not found."));const i=pa(e).filter(s=>s.vendor_id===a.id);return A("Finance",a.name,`
    <div class="finance-detail-modal">
      ${L([["Contact",a.contact_name||"No contact"],["Email",a.email||"No email"],["Phone",a.phone||"No phone"],["Category",a.category],["Status",a.status],["Spend",y(Z(i,"amount"))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-vendor" data-vendor-id="${o(a.id)}"><i class="ti ti-pencil"></i>Edit vendor</button>
        <button class="btn" type="button" data-action="new-finance-expense" data-vendor-id="${o(a.id)}"><i class="ti ti-receipt"></i>Add expense</button>
      </div>
      ${a.notes?`<p class="finance-note">${o(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function Is(e){const t=Ti(e);return A("Finance","Summary report",`
    <div class="finance-report-modal">
      ${L([["Company",D(e)],["Estimated pipeline",y(t.pipeline)],["Invoiced",y(t.invoiced)],["Collected",y(t.collected)],["Outstanding",y(t.outstanding)],["Expenses",y(t.expenses)],["Net position",y(t.net)]])}
      <div class="finance-aging-grid">
        <div><span>Current</span><strong>${y(t.aging.current)}</strong></div>
        <div><span>1-30</span><strong>${y(t.aging.thirty)}</strong></div>
        <div><span>31-60</span><strong>${y(t.aging.sixty)}</strong></div>
        <div><span>61+</span><strong>${y(t.aging.overSixty)}</strong></div>
      </div>
    </div>
  `,"finance-modal")}function xa(e,t=null){const a=t||or(e);return A("Finance",t?"Edit invoice":"New invoice",`
    <form class="finance-form" data-finance-invoice-form>
      <input type="hidden" name="id" value="${o(a.id)}" />
      ${k("Invoice number","invoice_number",a.invoice_number,!0)}
      ${P("Linked job","job_id",a.job_id||"",[["","Company level"]].concat(E(e).map(i=>[i.id,i.name])))}
      ${k("Client","client_name",a.client_name,!0)}
      ${P("Status","status",a.status,Xa.map(i=>[i,i]))}
      ${k("Issue date","issue_date",a.issue_date,!1,"date")}
      ${k("Due date","due_date",a.due_date,!1,"date")}
      ${k("Subtotal","subtotal",a.subtotal,!1,"number")}
      ${k("Tax","tax",a.tax,!1,"number")}
      ${oe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save invoice</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Fs(e,t=""){const a=rr(e,t),i=ve(e).map(s=>[s.id,`${s.invoice_number} - ${s.client_name||q(s.job_id)?.client_name||"No client"}`]);return A("Finance","Record payment",`
    <form class="finance-form" data-finance-payment-form>
      ${P("Invoice","invoice_id",a.invoice_id,i.length?i:[["","Create an invoice first"]])}
      ${k("Amount","amount",a.amount,!0,"number")}
      ${P("Method","method",a.method,ai.map(s=>[s,s]))}
      ${k("Received","received_at",a.received_at,!1,"date")}
      ${k("Reference","reference",a.reference)}
      ${oe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save payment</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Oa(e,t=null,a=""){const i=t||lr(e,a),s=ma(e).map(r=>[r.id,r.name]);return A("Finance",t?"Edit expense":"Add expense",`
    <form class="finance-form" data-finance-expense-form>
      <input type="hidden" name="id" value="${o(i.id)}" />
      ${P("Vendor","vendor_id",i.vendor_id,s.length?s:[["","No vendor yet"]])}
      ${P("Linked job","job_id",i.job_id||"",[["","Company level"]].concat(E(e).map(r=>[r.id,r.name])))}
      ${P("Category","category",i.category,ht.map(r=>[r,r]))}
      ${P("Status","status",i.status,ei.map(r=>[r,r]))}
      ${k("Amount","amount",i.amount,!0,"number")}
      ${k("Spent date","spent_at",i.spent_at,!1,"date")}
      ${oe("Notes","notes",i.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save expense</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Ta(e,t=null){const a=t||cr(e);return A("Finance",t?"Edit vendor":"Add vendor",`
    <form class="finance-form" data-finance-vendor-form>
      <input type="hidden" name="id" value="${o(a.id)}" />
      ${k("Vendor name","name",a.name,!0)}
      ${k("Contact","contact_name",a.contact_name)}
      ${k("Email","email",a.email,!1,"email")}
      ${k("Phone","phone",a.phone)}
      ${P("Category","category",a.category,ht.map(i=>[i,i]))}
      ${P("Status","status",a.status,ti.map(i=>[i,i]))}
      ${oe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save vendor</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Ms(e,t){return e.section==="clock"?xs(t):e.section==="approvals"?Os(t):As(t)}function la(e,t){return`
    ${ra("Operations sections",[[d("time",{},e),"My time",t==="time"],[d("approvals",{},e),"Approvals",t==="approvals"],[d("clock",{},e),"Clock dashboard",t==="clock"]])}
  `}function As(e){const t=qi(e),a=qt(e);return`
    <section class="tool-page operations-page">
      ${B("My time","A compact personal work queue built from this company's tasks.",`
        <a class="btn" href="${g(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Open tasks</a>
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${la(e,"time")}
      <section class="metric-grid operations-metrics">
        ${w("Due today",t.dueToday.length)}
        ${w("Overdue",t.overdue.length)}
        ${w("Open work",t.open.length)}
        ${w("In review",t.review.length)}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel span-2">
          <div class="section-head"><div><h2>Today</h2><p>Due now, overdue, and highest priority work.</p></div></div>
          <div class="queue-list">
            ${t.focus.slice(0,8).map(i=>Pt(i)).join("")||v("No time-sensitive tasks for this company.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Workload</h2><p>Simple task-based time view.</p></div></div>
          ${L([["Company",D(e)],["Assigned to you",String(t.assignedToMe.length)],["Due this week",String(t.thisWeek.length)],["Completed",String(t.done.length)]])}
        </article>
      <article class="panel span-2">
          <div class="section-head"><div><h2>This week</h2><p>Upcoming task commitments.</p></div></div>
          <div class="data-table operations-table">
            <div class="table-head"><span>Task</span><span>Job</span><span>Owner</span><span>Due</span><span>Status</span></div>
            ${t.thisWeek.slice(0,8).map(i=>`
              <a class="table-row" href="${g(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},e))}" data-router>
                <span><strong>${o(i.title)}</strong><small>${o(i.description||Ke(i.type))}</small></span>
                <span>${o(q(i.project_id)?.name||"Company task")}</span>
                <span>${o(J(i.assignee_id))}</span>
                <span>${O(i.due)}</span>
                <span>${Qi(i.status)}</span>
              </a>
            `).join("")||v("No upcoming tasks this week.")}
          </div>
        </article>
      </section>
    </section>
  `}function xs(e){const t=Ii(e),a=qt(e),i=Nt().getTime(),s=i-6*864e5,r=Ua(e,i)+(a?Date.now()-Date.parse(a.started_at):0),l=Ua(e,s)+(a?Date.now()-Date.parse(a.started_at):0);return`
    <section class="tool-page operations-page clock-page">
      ${B("Clock dashboard","Local basic-mode clock tracking for the active company.",`
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${la(e,"clock")}
      <section class="metric-grid operations-metrics">
        ${w("Today",it(r))}
        ${w("Last 7 days",it(l))}
        ${w("Entries",t.length)}
        ${w("Status",a?"Clocked in":"Off clock")}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Active now</h2><p>Current local clock session.</p></div></div>
          ${a?L([["User",J(a.user_id)],["Started",Ha(a.started_at)],["Task",a.task_title||"General shift"],["Elapsed",it(Date.now()-Date.parse(a.started_at))]]):v("Nobody is clocked in on this device.")}
        </article>
        <article class="panel span-2">
          <div class="section-head"><div><h2>Recent entries</h2><p>Local time records for this company.</p></div></div>
          <div class="data-table clock-table">
            <div class="table-head"><span>Entry</span><span>User</span><span>Start</span><span>Duration</span></div>
            ${t.slice(0,10).map(c=>`
              <div class="table-row">
                <span><strong>${o(c.task_title||"General shift")}</strong><small>${o(c.notes||"Clock entry")}</small></span>
                <span>${o(J(c.user_id))}</span>
                <span>${Ha(c.started_at)}</span>
                <span>${it(c.duration_ms)}</span>
              </div>
            `).join("")||v("No clock entries yet.")}
          </div>
        </article>
      </section>
    </section>
  `}function Os(e){const t=Ci(e),a=t.filter(r=>r.type==="Form approval"),i=t.filter(r=>r.type==="Task review"),s=t.filter(r=>r.type==="Access request");return`
    <section class="tool-page operations-page">
      ${B("Approvals","Company review queue for forms, task handoffs, and access requests.",`
        <a class="btn" href="${g(d("forms",{},e))}" data-router><i class="ti ti-clipboard-list"></i>Forms</a>
        <a class="btn btn-primary" href="${g(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>
      `)}
      ${la(e,"approvals")}
      <section class="metric-grid operations-metrics">
        ${w("Open approvals",t.length)}
        ${w("Forms",a.length)}
        ${w("Task reviews",i.length)}
        ${w("Access",s.length)}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Approval queue</h2><p>One calm list instead of a heavy dashboard.</p></div></div>
        <div class="data-table approval-table">
          <div class="table-head"><span>Item</span><span>Type</span><span>Owner</span><span>Status</span><span>Updated</span></div>
          ${t.map(r=>`
            <a class="table-row" href="${g(r.href)}" data-router>
              <span><strong>${o(r.title)}</strong><small>${o(r.meta)}</small></span>
              <span>${o(r.type)}</span>
              <span>${o(r.owner)}</span>
              <span>${o(r.status)}</span>
              <span>${O(r.updatedAt)}</span>
            </a>
          `).join("")||v("No approvals need attention right now.")}
        </div>
      </section>
    </section>
  `}function Ea(e){return`
    ${B(C(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${v("Module data model pending.")}
    </section>
  `}function Ts(){document.title="Sign in | Quest HQ";const e=St(n.route.params.get("return_url")||g(d("jobs",{},x()))),t=String(n.route.params.get("invite")||"").trim();$t.innerHTML=`
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
            <button class="${n.authMode==="signin"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="signin">Sign in</button>
            <button class="${n.authMode==="register"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="register">${t?"Create account":"Create workspace"}</button>
            <button class="${n.authMode==="invite"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="invite">Invite code</button>
            <button class="${n.authMode==="request"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="request">Request access</button>
          </div>
          ${Ps(e)}
        `}
        ${Es(e)}
        
      </section>
    </main>
  `}function Es(e){return`
    <section class="demo-mode-box">
      <div>
        <strong>Demo mode</strong>
        <span>Local-only sample workspace. No Supabase database reads or writes.</span>
      </div>
      <button class="btn full" type="button" data-action="start-demo-mode" data-return-url="${o(e)}">Open demo mode</button>
    </section>
  `}function Ps(e){const t=String(n.route?.params?.get("invite")||"").trim();return n.authMode==="register"?`
      <form data-auth-register-form>
        <label>${t?"Name / username":"Full name"}<input name="full_name" autocomplete="name" required /></label>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="new-password" minlength="8" required /></label>
        ${t?"":'<label>Company workspace<input name="company_name" placeholder="Example Roofing LLC" required /></label>'}
        <input type="hidden" name="invite_token" value="${o(t)}" />
        <input type="hidden" name="return_url" value="${o(e)}" />
        <button class="btn btn-primary full" type="submit">${t?"Create account and join":"Create secure workspace"}</button>
        ${Ge(t?"The invite email must match this account email.":"Owner role, trial subscription, and workspace isolation are created automatically.")}
      </form>
    `:n.authMode==="invite"?`
      <form data-auth-invite-code-form>
        <label>Invite code<input name="invite_code" autocomplete="one-time-code" required placeholder="Paste the code from your admin" /></label>
        <input type="hidden" name="return_url" value="${o(e)}" />
        <button class="btn btn-primary full" type="submit">Continue with invite code</button>
        ${Ge("Invite codes are shared by your Owner/Admin. No email delivery required.")}
      </form>
    `:n.authMode==="request"?`
      <form data-auth-request-form>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="current-password" minlength="8" required /></label>
        <label>Company ID<input name="company_id" placeholder="company-workspace-id" required /></label>
        <label>Message<input name="message" placeholder="Tell the admin why you need access" /></label>
        <input type="hidden" name="return_url" value="${o(e)}" />
        <button class="btn btn-primary full" type="submit">Request company access</button>
        ${Ge("Requests stay pending until a company Owner/Admin approves them.")}
      </form>
    `:`
    <form data-auth-sign-in-form>
      <label>Email<input name="email" type="email" autocomplete="email" required /></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required /></label>
      <input type="hidden" name="invite_token" value="${o(t)}" />
      <input type="hidden" name="return_url" value="${o(e)}" />
      <button class="btn btn-primary full" type="submit">Sign in</button>
      ${Ge("Use the company workspace account your Owner/Admin invited.")}
    </form>
  `}function Ge(e){return n.loginError?`<div class="form-message error">${o(n.loginError)}</div>`:`<div class="form-message">${o(n.authMessage||e)}</div>`}function Rs(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${Ye(e,"avatar large")}
            <div><strong>${o(e.full_name)}</strong><span>${o(e.email)}</span></div>
          </div>
          <label>Display name<input name="full_name" value="${o(e.full_name)}" /></label>
          <label>Avatar URL<input name="avatar_url" value="${o(e.avatar_url||"")}" placeholder="https://..." /></label>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit">Save profile</button>
            <button class="btn" type="button" data-action="close-modal">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `}function Ns(e,t){if(n.modal==="profile")return Rs(t.profile);if(n.modal==="file-upload")return Xn();if(n.modal==="folder-new")return Zn();if(n.modal==="file-detail")return Vs(p());if(n.modal==="forms-tools")return Js(p());if(n.modal==="form-actions")return Ws(p(),Re(p()));if(n.modal==="form-new")return Bs(p());if(n.modal==="form-preview")return zs(p(),Re(p()));if(n.modal==="job-new")return Ut(p(),null);if(n.modal==="job-edit")return Ut(p(),fe());if(n.modal==="finance-invoice-new")return xa(p(),null);if(n.modal==="finance-invoice-edit")return xa(p(),ye(n.selectedFinanceInvoiceId));if(n.modal==="finance-payment-new")return Fs(p(),n.selectedFinanceInvoiceId);if(n.modal==="finance-expense-new")return Oa(p(),null,n.selectedFinanceVendorId);if(n.modal==="finance-expense-edit")return Oa(p(),Ai(n.selectedFinanceExpenseId));if(n.modal==="finance-vendor-new")return Ta(p(),null);if(n.modal==="finance-vendor-edit")return Ta(p(),fa(n.selectedFinanceVendorId));if(n.modal==="role-new")return ls(p());if(n.modal==="invite-new")return cs(p());if(e.name==="company"&&e.section==="crm"&&e.params.get("account"))return Ss(e.companyId,e.params.get("account"));if(e.name==="company"&&e.section==="finance"){const a=js(e,e.companyId);if(a)return a}return e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"?Ut(e.companyId,e.jobId?q(e.jobId):fe()):e.name==="company"&&e.section==="tasks"?Qs(e,e.companyId):""}function Ls(){return n.toast?`
    <div class="app-toast ${o(n.toast.mode||"local")}" role="status" aria-live="polite">
      <strong>${o(n.toast.title||"Quest HQ")}</strong>
      <span>${o(n.toast.message||"")}</span>
    </div>
  `:""}function Ze(e,t="local",a="Not available yet"){n.toastTimer&&clearTimeout(n.toastTimer),n.toast={title:a,message:e,mode:t},u(),n.toastTimer=setTimeout(()=>{n.toast=null,n.toastTimer=null,u()},4200)}function A(e,t,a,i=""){return`
    <div class="modal-overlay">
      <div class="modal-panel ${o(i)}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${o(e)}</div><h2>${o(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function Us(e,t,a){return`
    <div class="modal-overlay drawer-overlay">
      <aside class="modal-panel drawer-panel" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${o(e)}</div><h2>${o(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </aside>
    </div>
  `}function Ut(e,t){return A("Jobs",t?"Edit job":"Create job",Tn(e,t),"wide-modal")}function Qs(e,t){const a=e.jobId?q(e.jobId):null,i=e.params.get("task_id")||"",s=i?kt(i):null;return e.params.get("new")==="1"?A("Tasks","New task",Aa(t,a,null),"task-modal"):e.params.get("edit")==="1"&&s?A("Tasks","Edit task",Aa(t,a,s),"task-modal"):s?Us("Task detail",s.title,Ln(t,s)):""}function Vs(e){const t=n.selectedFileId?n.files.find(a=>a.id===n.selectedFileId):null;return t?A("Open file",t.file_name,Kn(t),"file-viewer-modal"):""}function Js(e){return A("Forms","Tools",`
    <div class="compact-tool-form">
      <label>
        <span>Type filter</span>
        <select data-form-type-filter>
          <option value="all" ${n.formTypeFilter==="all"?"selected":""}>All types</option>
          ${Ve.map(t=>`<option value="${o(t)}" ${n.formTypeFilter===t?"selected":""}>${o(t)}</option>`).join("")}
        </select>
      </label>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
      <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
    </div>
  `)}function Bs(e){const t=n.formStartTab==="templates"?"templates":"blank",a=Oe(),i=t==="templates"&&(a.find(m=>m.id===n.formStartTemplateId)||a[0])||null,s=i?.title||"",r=i?.description||"",l=i?.type||"Internal",c=i?.questions||[{type:"short",label:"First question",required:!1,options:[]}];return A("Forms","New form builder",`
    <form class="new-form-modal builder-create-modal" data-new-form-form>
      <input type="hidden" name="template_id" value="${o(i?.id||"")}" />
      <div class="form-start-tabs" role="tablist" aria-label="New form start type">
        <button class="${t==="blank"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="blank"><i class="ti ti-clipboard-plus"></i>Blank</button>
        <button class="${t==="templates"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="templates"><i class="ti ti-template"></i>Templates</button>
      </div>
      ${t==="templates"?`
        <div class="new-form-template-grid">
          ${a.map(m=>`
            <button class="${i?.id===m.id?"active":""}" type="button" data-action="select-form-start-template" data-template-id="${o(m.id)}">
              <span><i class="ti ti-template"></i></span>
              <strong>${o(m.title)}</strong>
              <small>${o(m.type)} / ${m.questions.length} questions</small>
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
            <div class="gform-accent-strip" style="--form-accent:${o(ce(e))}"></div>
            <label><span>Form title</span><input name="title" value="${o(s)}" placeholder="Untitled form" required /></label>
            <label><span>Form description</span><textarea name="description" rows="3" placeholder="What should people know before filling this out?">${o(r)}</textarea></label>
          </article>
          <div class="new-form-question-list">
            ${c.map((m,f)=>Hs(m,f)).join("")}
          </div>
        </section>
        <aside class="panel new-form-settings-card">
          <div class="section-head"><div><h2>Setup</h2><p>${i?o(i.title):"Blank starter"}</p></div></div>
          <div class="new-form-grid">
            <label><span>Type</span><select name="type">${Ve.map(m=>`<option value="${o(m)}" ${m===l?"selected":""}>${o(m)}</option>`).join("")}</select></label>
            <label><span>Audience</span><input name="audience" value="Internal" /></label>
            <label><span>Linked job</span><select name="linked_job_id"><option value="">Company level</option>${E(e).map(m=>`<option value="${o(m.id)}" ${n.route?.jobId===m.id?"selected":""}>${o(m.name)}</option>`).join("")}</select></label>
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
  `,"form-create-modal builder-modal")}function Hs(e,t){const a=Ne(e)?`
    <div class="starter-options">
      ${(e.options||["Option 1","Option 2"]).map(i=>`<span>${o(i)}</span>`).join("")}
    </div>
  `:"";return`
    <article class="question-card starter-question-card">
      <div class="question-card-head">
        <span>${t+1}</span>
        <strong>${o(Cr(e.type))}</strong>
      </div>
      <label><span>Question</span><input value="${o(e.label||"Untitled question")}" readonly /></label>
      ${e.help?`<small>${o(e.help)}</small>`:""}
      ${a}
      <label class="check-row"><input type="checkbox" ${e.required?"checked":""} disabled /> Required</label>
    </article>
  `}function zs(e,t){return t?A("Forms","Preview form",`
    <div class="form-preview-modal-body">
      ${_s(e,t)}
    </div>
  `,"form-preview-modal"):A("Forms","Preview form",v("Choose a form first."))}function Ws(e,t){return t?A("Forms","Manage form",`
    <div class="forms-summary-share compact">
      <strong>Shareable preview URL</strong>
      <input readonly value="${o(`${window.location.origin}${g(d("forms",{form_id:t.id},e))}`)}" />
      <button class="btn" type="button" data-action="copy-form-link" data-form-id="${o(t.id)}">Copy link</button>
    </div>
    <div class="modal-action-grid">
      <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${o(t.id)}"><i class="ti ti-edit"></i>Edit builder</button>
      <button class="btn" type="button" data-action="duplicate-form" data-form-id="${o(t.id)}"><i class="ti ti-copy"></i>Duplicate</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${o(t.id)}"><i class="ti ti-world-upload"></i>Publish</button>
      <button class="btn" type="button" data-action="archive-form" data-form-id="${o(t.id)}"><i class="ti ti-archive"></i>Archive</button>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export library</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${o(t.id)}"><i class="ti ti-trash"></i>Delete</button>
    </div>
  `):A("Forms","Manage form",v("Choose a form first."))}function Ys(e){const t=n.accountMenuOpen&&!e.target.closest(".account-menu"),a=n.notificationMenuOpen&&!e.target.closest(".notification-center");t&&(n.accountMenuOpen=!1),a&&(n.notificationMenuOpen=!1);const i=e.target.closest("[data-action]");if(i){Ks(e,i);return}const s=e.target.closest("[data-select-job]");if(s){e.preventDefault(),Lo(s.dataset.selectJob);return}const r=e.target.closest("[data-select-task]");if(r){e.preventDefault(),Uo(r.dataset.selectTask);return}const l=e.target.closest("a[href][data-router]");if(!l){(t||a)&&u();return}l.target||l.hasAttribute("download")||(e.preventDefault(),S(l.getAttribute("href")))}function Ks(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),n.dataLoaded=!1,n.sync={label:"Refreshing...",mode:"loading"},u();return}if(a==="sign-out"){e.preventDefault(),n.accountMenuOpen=!1,Xs();return}if(a==="toggle-account-menu"){e.preventDefault(),n.accountMenuOpen=!n.accountMenuOpen,n.notificationMenuOpen=!1,u();return}if(a==="toggle-notifications"){e.preventDefault(),n.notificationMenuOpen=!n.notificationMenuOpen,n.accountMenuOpen=!1,u();return}if(a==="mark-all-notifications-read"){e.preventDefault(),yr(p()),u();return}if(a==="open-notification"){e.preventDefault(),_r(t.dataset.notificationId),u();return}if(a==="verify-email"){e.preventDefault(),n.accountMenuOpen=!1,Ze("Email verification is not implemented yet. Account access is not blocked right now.","local");return}if(a==="start-demo-mode"){e.preventDefault(),$i(t.dataset.returnUrl||"");return}if(a==="set-auth-mode"){e.preventDefault(),n.authMode=["signin","register","invite","request"].includes(t.dataset.authMode)?t.dataset.authMode:"signin",n.loginError="",n.authMessage="",u();return}if(a==="open-profile"){e.preventDefault(),n.accountMenuOpen=!1,n.modal="profile",u();return}if(a==="open-role-form"){e.preventDefault(),n.modal="role-new",u();return}if(a==="view-as-role"){e.preventDefault();const i=p(),s=He(i,t.dataset.roleId);if(!s){Ze("That role is no longer available.","local","Role preview");return}n.rolePreview={company_id:i,role_id:s.id},Ze(`Viewing the workspace as ${s.name}.`,"local","Role preview");return}if(a==="exit-role-preview"){e.preventDefault(),n.rolePreview=null,Ze("Role preview ended.","live","Role preview");return}if(a==="open-invite-form"){e.preventDefault(),n.modal="invite-new",u();return}if(a==="copy-invite-link"){e.preventDefault(),lo(t.dataset.inviteId);return}if(a==="copy-invite-code"){e.preventDefault(),co(t.dataset.inviteId);return}if(a==="revoke-invite"){e.preventDefault(),uo(t.dataset.inviteId);return}if(a==="approve-join-request"){e.preventDefault(),Pa(t.dataset.requestId,"approved");return}if(a==="reject-join-request"){e.preventDefault(),Pa(t.dataset.requestId,"rejected");return}if(a==="start-checkout"){e.preventDefault(),so();return}if(a==="open-file-upload"){e.preventDefault(),n.modal="file-upload",u();return}if(a==="open-folder-form"){e.preventDefault(),n.modal="folder-new",u();return}if(a==="open-job-form"){e.preventDefault();const i=t.dataset.jobId||"";i&&(n.selectedJobId=i),n.modal=t.dataset.mode==="edit"?"job-edit":"job-new",u();return}if(a==="open-forms-tools"){e.preventDefault(),n.modal="forms-tools",u();return}if(a==="open-form-actions"){e.preventDefault(),at(t.dataset.formId,!1),n.modal="form-actions",u();return}if(a==="open-form-preview"){e.preventDefault(),at(t.dataset.formId,!1),n.modal="form-preview",u();return}if(a==="set-form-start-tab"){e.preventDefault(),n.formStartTab=t.dataset.tab==="templates"?"templates":"blank",n.formStartTab==="blank"&&(n.formStartTemplateId=""),n.formStartTab==="templates"&&!n.formStartTemplateId&&(n.formStartTemplateId=Oe()[0]?.id||""),u();return}if(a==="select-form-start-template"){e.preventDefault(),n.formStartTab="templates",n.formStartTemplateId=t.dataset.templateId||Oe()[0]?.id||"",u();return}if(a==="close-modal"){e.preventDefault(),Gs();return}if(a==="set-task-view"){e.preventDefault(),n.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(Ya,n.taskView),u();return}if(a==="set-drive-view"){e.preventDefault(),n.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(Ka,n.driveView),u();return}if(a==="clock-in"){e.preventDefault(),Zo(p(),t.dataset.taskId||n.route?.params?.get("task_id")||"");return}if(a==="clock-out"){e.preventDefault(),Fi();return}if(a==="select-file"){e.preventDefault(),n.selectedFileId=t.dataset.fileId||"",n.modal="file-detail",u();return}if(a==="download-file"){e.preventDefault(),jo(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),Do(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),n.formsTab=t.dataset.tab==="responses"?"responses":"library",u();return}if(a==="set-form-editor-tab"){e.preventDefault(),n.formEditorTab=t.dataset.tab||"questions",u();return}if(a==="new-form"){e.preventDefault(),n.formStartTemplateId=t.dataset.templateId||"",n.formStartTab=t.dataset.startTab==="templates"||n.formStartTemplateId?"templates":"blank",n.formStartTab==="templates"&&!n.formStartTemplateId&&(n.formStartTemplateId=Oe()[0]?.id||""),n.modal="form-new",u();return}if(a==="select-form"){e.preventDefault(),at(t.dataset.formId);return}if(a==="toggle-form-card"){e.preventDefault();const i=t.dataset.formId||"";n.expandedFormIds.has(i)?n.expandedFormIds.delete(i):n.expandedFormIds.add(i),u();return}if(a==="edit-form"){e.preventDefault(),at(t.dataset.formId,!1),n.formsTab="builder",n.formEditorTab="questions",n.modal="",u();return}if(a==="save-form"){e.preventDefault(),H("Form saved locally"),u();return}if(a==="publish-form"){e.preventDefault(),Ba(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),Ba(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),Ar(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),xr(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),Or(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),Tr(p());return}if(a==="new-finance-invoice"){e.preventDefault(),n.selectedFinanceInvoiceId="",n.modal="finance-invoice-new",u();return}if(a==="edit-finance-invoice"){e.preventDefault(),n.selectedFinanceInvoiceId=t.dataset.invoiceId||"",n.modal="finance-invoice-edit",u();return}if(a==="new-finance-payment"){e.preventDefault(),n.selectedFinanceInvoiceId=t.dataset.invoiceId||n.route?.params?.get("invoice")||"",n.modal="finance-payment-new",u();return}if(a==="new-finance-expense"){e.preventDefault(),n.selectedFinanceExpenseId="",n.selectedFinanceVendorId=t.dataset.vendorId||"",n.modal="finance-expense-new",u();return}if(a==="edit-finance-expense"){e.preventDefault(),n.selectedFinanceExpenseId=t.dataset.expenseId||"",n.modal="finance-expense-edit",u();return}if(a==="new-finance-vendor"){e.preventDefault(),n.selectedFinanceVendorId="",n.modal="finance-vendor-new",u();return}if(a==="edit-finance-vendor"){e.preventDefault(),n.selectedFinanceVendorId=t.dataset.vendorId||"",n.modal="finance-vendor-edit",u();return}if(a==="add-question"){e.preventDefault(),Er(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),Pr(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),Rr(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),Nr(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),Lr(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),Ur(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),go(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),yo(t.dataset.taskId))}function Gs(){const e=n.route||wt();if(n.modal="",n.formStartTemplateId="",n.formStartTab="blank",n.selectedFinanceInvoiceId="",n.selectedFinanceExpenseId="",n.selectedFinanceVendorId="",e.name==="company"&&e.section==="tasks"&&(e.params.get("new")||e.params.get("edit")||e.params.get("task_id"))){S(d("tasks",e.jobId?{job_id:e.jobId}:{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"){const t=e.jobId?q(e.jobId):fe();S(d("jobs",{tab:t?"profile":"pipeline",...t?{job_id:t.id}:{}},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="crm"&&e.params.get("account")){S(d("crm",{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="finance"&&(e.params.get("invoice")||e.params.get("expense")||e.params.get("vendor")||e.params.get("report"))){S(d("finance",{},e.companyId),{replace:!0});return}u()}function Zs(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===ke.localUsername&&String(t.password||"")===ke.localPassword)){n.loginError="Invalid temporary credentials.",u();return}n.loginError="",$i(t.return_url||g(d("jobs",{},x())));return}if(e.target.matches("[data-auth-sign-in-form]")){e.preventDefault(),eo(e.target);return}if(e.target.matches("[data-auth-register-form]")){e.preventDefault(),ao(e.target);return}if(e.target.matches("[data-auth-invite-code-form]")){e.preventDefault(),to(e.target);return}if(e.target.matches("[data-auth-request-form]")){e.preventDefault(),no(e.target);return}if(e.target.matches("[data-company-create-form]")){e.preventDefault(),io(e.target);return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...$().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};F(Wa,a),n.profileDraft=a,n.session={...$(),profile:a},F(je,n.session),n.modal="",u();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),bo(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),vo(e.target);return}if(e.target.matches("[data-new-form-form]")){e.preventDefault(),Mr(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),_o(e.target);return}if(e.target.matches("[data-folder-form]")){e.preventDefault(),ho(e.target);return}if(e.target.matches("[data-finance-invoice-form]")){e.preventDefault(),$o(e.target);return}if(e.target.matches("[data-finance-payment-form]")){e.preventDefault(),wo(e.target);return}if(e.target.matches("[data-finance-expense-form]")){e.preventDefault(),So(e.target);return}if(e.target.matches("[data-finance-vendor-form]")){e.preventDefault(),ko(e.target);return}if(e.target.matches("[data-role-form]")){e.preventDefault(),oo(e.target);return}if(e.target.matches("[data-invite-form]")){e.preventDefault(),ro(e.target);return}if(e.target.matches("[data-user-role-form]")){e.preventDefault(),po(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),Qr(e.target))}async function Xs(){if(n.session?.auth==="supabase"){const e=R();e?.auth&&await e.auth.signOut()}localStorage.removeItem(je),n.session=null,n.dataLoaded=!1,S("/login",{replace:!0})}function $i(e=""){n.loginError="",n.authMessage="",n.session=zt(),bi(),n.activeCompanyId=p(),localStorage.setItem(re,n.activeCompanyId),F(je,n.session),n.dataLoaded=!1,n.dataLoading=!1,S(St(e||g(d("jobs",{},p()))),{replace:!0})}async function eo(e){const t=Object.fromEntries(new FormData(e).entries()),a=R();if(!a?.auth){n.loginError="Supabase auth is unavailable.",u();return}n.loginError="",n.authMessage="Signing in...",u();const i=await a.auth.signInWithPassword({email:String(t.email||"").trim(),password:String(t.password||"")});if(i.error){n.loginError=i.error.message||"Unable to sign in.",n.authMessage="",u();return}if(await Te(i.data.session),t.invite_token){await wi(t.invite_token,t.return_url);return}n.authMessage="",n.dataLoaded=!1,S(St(t.return_url||g(d("jobs",{},x()))),{replace:!0})}function to(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.invite_code||"").trim();if(!a){n.loginError="Invite code is required.",u();return}n.loginError="",n.authMessage="",n.authMode="register";const i=new URLSearchParams({invite:a}),s=St(t.return_url||"");s&&i.set("return_url",s),S(`/login?${i.toString()}`,{replace:!0})}async function ao(e){const t=Object.fromEntries(new FormData(e).entries()),a=R();if(!a?.auth){n.loginError="Supabase auth is unavailable.",u();return}const i=String(t.email||"").trim(),s=String(t.password||""),r=String(t.full_name||"").trim(),l=String(t.invite_token||"").trim(),c=String(t.company_name||"").trim();if(!i||!s||!r||!l&&!c){n.loginError=l?"Name, email, and password are required.":"Name, email, password, and company workspace are required.",u();return}n.loginError="",n.authMessage=l?"Creating account and accepting invite...":"Creating secure workspace...",u();const m=await a.auth.signUp({email:i,password:s,options:{data:{full_name:r}}});if(m.error){n.loginError=m.error.message||"Unable to create account.",n.authMessage="",u();return}let f=m.data.session;if(!f){const h=await a.auth.signInWithPassword({email:i,password:s});if(h.error){n.loginError="Account created. Please sign in to finish workspace setup.",n.authMode="signin",n.authMessage="",u();return}f=h.data.session}if(await Te(f),l){await wi(l,t.return_url);return}const b=await a.rpc("create_company_workspace",{company_name:c});if(b.error){n.loginError=b.error.message||"Account created, but workspace setup failed.",n.authMessage="",u();return}n.activeCompanyId=_(b.data||x()),localStorage.setItem(re,n.activeCompanyId),n.dataLoaded=!1,n.authMessage="",S(d("settings",{tab:"billing"},n.activeCompanyId),{replace:!0})}async function io(e){const t=Object.fromEntries(new FormData(e).entries()),a=R(),i=String(t.company_name||"").trim();if(!a||!i){n.loginError="Company workspace name is required.",u();return}const s=await a.rpc("create_company_workspace",{company_name:i});if(s.error){n.loginError=s.error.message||"Workspace setup failed.",u();return}n.activeCompanyId=_(s.data||x()),localStorage.setItem(re,n.activeCompanyId),n.dataLoaded=!1,S(d("settings",{tab:"billing"},n.activeCompanyId),{replace:!0})}async function no(e){const t=Object.fromEntries(new FormData(e).entries()),a=R();if(!a?.auth){n.loginError="Supabase auth is unavailable.",u();return}const i=String(t.email||"").trim(),s=String(t.password||""),r=_(t.company_id||"");n.loginError="",n.authMessage="Submitting access request...",u();const l=await a.auth.signInWithPassword({email:i,password:s});if(l.error){n.loginError=l.error.message||"Sign in first to request access.",n.authMessage="",u();return}await Te(l.data.session);const c=await a.rpc("request_company_access",{target_company_id:r,request_message:String(t.message||"").trim()||null});if(c.error){n.loginError=c.error.message||"Unable to request access.",n.authMessage="",u();return}n.authMessage="Access request sent. An Owner/Admin must approve it.",n.loginError="",n.authMode="signin",u()}async function so(){const e=p();n.sync={label:"Opening billing...",mode:"loading"},u();try{const t=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json",...$().access_token?{Authorization:`Bearer ${$().access_token}`}:{}},body:JSON.stringify({company_id:e,return_url:`${window.location.origin}${g(d("settings",{tab:"billing"},e))}`})}),a=await t.json().catch(()=>({}));if(!t.ok||!a.url)throw new Error(a.error||"Billing is not configured yet.");window.location.href=a.url}catch(t){n.sync={label:t.message||"Billing unavailable",mode:"local"},u()}}async function oo(e){const t=p(),a=new FormData(e),i=we({id:crypto.randomUUID(),company_id:t,name:a.get("name"),color:a.get("color")||"#f0b23b",priority:a.get("priority")||100,is_system:!1,created_by:$().profile.id}),s=a.getAll("permissions").map(l=>String(l||"")).filter(Boolean),r=R();if(n.session?.auth==="supabase"&&r){const l=await r.from("roles").insert(i).select().single();if(l.error){n.sync={label:l.error.message||"Role save failed",mode:"local"},u();return}const c=we(l.data),m=s.map(f=>({role_id:c.id,permission_key:f,effect:"allow"}));m.length&&await r.from("role_permissions").insert(m),n.roles.unshift(c),n.rolePermissions=m.concat(n.rolePermissions).map(Ht),n.sync={label:"Role saved",mode:"live"}}else n.roles.unshift(i),n.rolePermissions=s.map(l=>Ht({role_id:i.id,permission_key:l,effect:"allow"})).concat(n.rolePermissions),n.sync={label:"Role saved locally",mode:"local"};n.modal="",u()}async function ro(e){const t=new FormData(e),a=_(t.get("company_id")||p()),i=String(t.get("email")||"").trim().toLowerCase(),s=String(t.get("role_id")||"").trim();if(!i){n.sync={label:"Invite email is required",mode:"local"},u();return}const r=mt({id:crypto.randomUUID(),company_id:a,email:i,role_id:Fa(s)?s:"",token:zo(),status:"pending",invited_by:$().profile.id,expires_at:new Date(Date.now()+336*60*60*1e3).toISOString(),created_at:new Date().toISOString()}),l=R();if(n.session?.auth==="supabase"&&l){const c={company_id:r.company_id,email:r.email,role_id:r.role_id||null,token:r.token,status:"pending",invited_by:$().profile.id},m=await l.from("company_invites").insert(c).select().single();if(m.error){n.sync={label:m.error.message||"Invite save failed",mode:"local"},u();return}n.companyInvites.unshift(mt(m.data)),n.sync={label:"Invite code created. Copy it for the new user.",mode:"live"}}else n.companyInvites.unshift(r),n.sync={label:"Invite code created locally",mode:"local"};Y("access.invite","Invite code created",`${Q()} created an invite code for ${r.email}.`,d("settings",{tab:"access"},r.company_id),"invite",r.id,r.company_id),n.modal="",u()}async function wi(e,t=""){const a=R();if(!a){n.loginError="Supabase auth is unavailable.",n.authMessage="",u();return}n.authMessage="Accepting workspace invite...",u();const i=await a.rpc("accept_company_invite",{invite_token:String(e||"").trim()});if(i.error){n.loginError=i.error.message||"Unable to accept invite.",n.authMessage="",u();return}const s=_(i.data||x());n.activeCompanyId=s,localStorage.setItem(re,s),n.authMessage="",n.loginError="",n.dataLoaded=!1,S(d("jobs",{},s),{replace:!0})}async function lo(e){const t=n.companyInvites.find(a=>a.id===e);if(!t?.token){n.sync={label:"Invite link is unavailable",mode:"local"},u();return}try{await navigator.clipboard.writeText(Wo(t)),n.sync={label:"Invite link copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}u()}async function co(e){const t=n.companyInvites.find(a=>a.id===e);if(!t?.token){n.sync={label:"Invite code is unavailable",mode:"local"},u();return}try{await navigator.clipboard.writeText(t.token),n.sync={label:"Invite code copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}u()}async function uo(e){const t=n.companyInvites.find(i=>i.id===e);if(!t)return;const a=R();if(n.session?.auth==="supabase"&&a){const i=await a.from("company_invites").update({status:"revoked",updated_at:new Date().toISOString()}).eq("id",t.id);if(i.error){n.sync={label:i.error.message||"Invite revoke failed",mode:"local"},u();return}n.sync={label:"Invite revoked",mode:"live"}}else n.sync={label:"Invite revoked locally",mode:"local"};n.companyInvites=n.companyInvites.map(i=>i.id===t.id?mt({...i,status:"revoked"}):i),Y("access.invite","Invite revoked",`${Q()} revoked the invite for ${t.email}.`,d("settings",{tab:"access"},t.company_id),"invite",t.id,t.company_id),V(),u()}async function po(e){const t=new FormData(e),a=_(t.get("company_id")||p()),i=String(t.get("profile_id")||"").trim(),s=String(t.get("role_id")||"").trim(),r=["active","pending","disabled"].includes(String(t.get("membership_status")))?String(t.get("membership_status")):"active",l=He(a,s);if(!i||!l){n.sync={label:"Select a user and role",mode:"local"},u();return}const c=pt({company_id:a,profile_id:i,role:ji(l),status:r}),m=Ni({company_id:a,profile_id:i,role_id:l.id,assigned_by:$().profile.id}),f=R();if(n.session?.auth==="supabase"&&f){const b=Fa(l.id),h=await f.from("company_memberships").upsert(Si(c),{onConflict:"company_id,profile_id"}).select().single();if(h.error){n.sync={label:h.error.message||"Access update failed",mode:"local"},u();return}if(b){await f.from("user_role_assignments").delete().eq("company_id",a).eq("profile_id",i);const N=await f.from("user_role_assignments").insert(m);if(N.error){n.sync={label:N.error.message||"Role assignment failed",mode:"local"},u();return}}lt(pt(h.data||c)),b&&La(m),n.sync={label:b?"User access saved":"Membership saved; create a role to assign permissions",mode:"live"}}else lt(c),La(m),n.sync={label:"User access saved locally",mode:"local"};Y("access.role","User access updated",`${Q()} set ${er(i)} to ${l.name} / ${C(r)}.`,d("settings",{tab:"access"},a),"membership",i,a),u()}async function Pa(e,t){const a=n.joinRequests.find(l=>l.id===e);if(!a||!["approved","rejected"].includes(t))return;const i=R(),s=Li({...a,status:t}),r=pt({company_id:a.company_id,profile_id:a.profile_id,role:"member",status:t==="approved"?"active":"disabled"});if(n.session?.auth==="supabase"&&i){if(t==="approved"){const c=await i.from("company_memberships").upsert(Si(r),{onConflict:"company_id,profile_id"});if(c.error){n.sync={label:c.error.message||"Approval failed",mode:"local"},u();return}}const l=await i.from("company_join_requests").update({status:t,reviewed_by:$().profile.id,updated_at:new Date().toISOString()}).eq("id",a.id);if(l.error){n.sync={label:l.error.message||"Request update failed",mode:"local"},u();return}t==="approved"&&lt(r),n.sync={label:t==="approved"?"Access approved":"Request rejected",mode:"live"}}else t==="approved"&&lt(r),n.sync={label:t==="approved"?"Access approved locally":"Request rejected locally",mode:"local"};n.joinRequests=n.joinRequests.map(l=>l.id===a.id?s:l),Y("access.request",t==="approved"?"Access approved":"Access rejected",`${Q()} ${t==="approved"?"approved":"rejected"} ${a.requested_email||"a join request"}.`,d("settings",{tab:"access"},a.company_id),"join_request",a.id,a.company_id),V(),u()}function mo(e){if(e.target.matches("[data-global-search]")){n.query=e.target.value,Xe();return}if(e.target.matches("[data-file-search]")){n.fileQuery=e.target.value,Xe();return}if(e.target.matches("[data-form-search]")){n.formQuery=e.target.value,Xe();return}if(e.target.matches("[data-crm-search]")){n.crmQuery=e.target.value,Xe();return}if(e.target.matches("[data-form-field]")){Gi(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Zi(e.target)}function fo(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||x();Ro(t);return}if(e.target.matches("[data-stage-filter]")){n.stageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-stage-filter]")){n.crmStageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-owner-filter]")){n.crmOwnerFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-status-filter]")){n.taskStatusFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-priority-filter]")){n.taskPriorityFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;S(d("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;S(d("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){n.fileCategoryFilter=e.target.value||"All categories",u();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=n.route?.jobId||"";S(d("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;S(d("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){n.formTypeFilter=e.target.value||"all",u();return}if(e.target.matches("[data-form-field]")){Gi(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Zi(e.target)}async function bo(e){const t=De(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.invoice_total=Number(t.invoice_total||0),t.updated_at=new Date().toISOString();const a=n.jobs.some(s=>s.id===t.id),i=R();if(i){const s=a?await i.from("jobs").update(t).eq("id",t.id).select().single():await i.from("jobs").insert(t).select().single();if(!s.error&&s.data){Qt(De(s.data)),n.sync={label:"Quest Supabase live",mode:"live"},n.modal="",S(d("jobs",{tab:"profile",job_id:s.data.id},t.company_id),{replace:!0});return}n.sync={label:"Saved locally",mode:"local"}}Qt(t),n.modal="",S(d("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function go(e){if(!e)return;const t=p(),a=R();a&&await a.from("jobs").delete().eq("id",e),n.jobs=n.jobs.filter(i=>i.id!==e),n.selectedJobId=E(t)[0]?.id||"",n.modal="",V(),S(d("jobs",{tab:"list"},t),{replace:!0})}async function vo(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),i=qe({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:$().profile.member_id||le(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),s=kt(i.id),r=!!s,l=R();if(l){const c=dr(i),m=r?await l.from("tasks").update(c).eq("id",i.id).select().single():await l.from("tasks").insert(c).select().single();if(!m.error&&m.data){const f=qe(m.data);Ra(f),Va(f,s),n.sync={label:"Quest Supabase live",mode:"live"},n.modal="",S(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0});return}n.sync={label:"Task saved locally",mode:"local"}}Ra(i),Va(i,s),n.modal="",S(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0})}async function yo(e){if(!e)return;const t=p(),a=R();a&&await a.from("tasks").delete().eq("id",e),n.tasks=n.tasks.filter(i=>i.id!==e),n.selectedTaskId="",n.modal="",V(),S(d("tasks",{},t),{replace:!0})}async function _o(e){const t=p(),a=new FormData(e),i=Object.fromEntries(a.entries()),s=Array.from(e.elements.files?.files||[]),r=String(i.file_name||"").trim(),l=s.length?s:r?[null]:[];if(!l.length){n.sync={label:"Choose a file or enter a file name",mode:"local"},u();return}const c=R();let m=0;for(const f of l){const b=crypto.randomUUID(),h=f?.name||r,N=String(i.folder||"shared"),I=`${t}/${i.job_id?`jobs/${i.job_id}`:N}/${b}-${Ia(h)}`;let z=!1;c&&f&&(z=!(await c.storage.from("quest-job-files").upload(I,f,{cacheControl:"3600",upsert:!1,contentType:f.type||"application/octet-stream"})).error);const Me=Pe({id:b,company_id:t,job_id:i.job_id||"",folder:N,file_name:h,mime_type:f?.type||"application/octet-stream",size_bytes:f?.size||Number(i.size_bytes||0),category:i.category||te(N),notes:i.notes||"",uploaded_by_label:i.uploaded_by_label||$().profile.full_name,bucket_id:"quest-job-files",object_path:z||!f?I:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(c){const ue=await c.from("job_files").insert(ur(Me)).select().single();if(!ue.error&&ue.data){Na(Pe(ue.data)),m+=1;continue}z&&await c.storage.from("quest-job-files").remove([I])}Na(Me)}n.sync=m===l.length?{label:"Quest Supabase live",mode:"live"}:{label:m?"Some files saved locally":"File record saved locally",mode:m?"loading":"local"},Y("file.added",l.length>1?"Files added":"File added",`${Q()} added ${l.length} file${l.length===1?"":"s"} to ${te(i.folder||"shared")}.`,d("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),"file",i.job_id||"",t),n.modal="",S(d("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),{replace:!0})}function ho(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.name||"").trim();if(!a){n.sync={label:"Folder name is required",mode:"local"},u();return}const i=_a({id:`folder-${crypto.randomUUID()}`,company_id:p(),name:a,parent_key:t.parent_key||"home",created_by_label:$().profile.full_name||"Quest HQ",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.driveFolders.unshift(i),n.modal="",n.sync={label:"Folder created locally",mode:"local"},Y("file.folder","Folder created",`${Q()} created ${i.name}.`,d("files",{folder:i.id},i.company_id),"folder",i.id,i.company_id),V(),u()}function $o(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=q(t.job_id),s=String(t.id||"").trim()?ye(String(t.id).trim()):null,r=xt({...t,id:String(t.id||"").trim()||`invoice-${crypto.randomUUID()}`,company_id:a,client_name:String(t.client_name||i?.client_name||"").trim(),total:T(t.subtotal)+T(t.tax),updated_at:new Date().toISOString()});qo(r),s?.job_id&&s.job_id!==r.job_id&&Vt(s.job_id),Vt(r.job_id),n.modal="",n.sync={label:"Finance saved locally",mode:"local"},Y("finance.invoice",s?"Invoice updated":"Invoice created",`${Q()} ${s?"updated":"created"} ${r.invoice_number}.`,d("finance",{invoice:r.id},a),"invoice",r.id,a),S(d("finance",{invoice:r.id},a),{replace:!0})}function wo(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=ye(t.invoice_id);if(!i||i.company_id!==a){n.sync={label:"Create an invoice before recording a payment",mode:"local"},u();return}const s=Ot({...t,id:`payment-${crypto.randomUUID()}`,company_id:a,created_at:new Date().toISOString()});n.financePayments.unshift(s),i.status=se(i.id)<=0?"Paid":"Partially paid",i.updated_at=new Date().toISOString(),Vt(i.job_id),V(),n.modal="",n.sync={label:"Payment recorded locally",mode:"local"},Y("finance.payment","Payment recorded",`${Q()} recorded ${y(s.amount)} for ${i.invoice_number}.`,d("finance",{invoice:s.invoice_id},a),"payment",s.id,a),S(d("finance",s.invoice_id?{invoice:s.invoice_id}:{},a),{replace:!0})}function So(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=Tt({...t,id:String(t.id||"").trim()||`expense-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});Co(i),n.modal="",n.sync={label:"Expense saved locally",mode:"local"},Y("finance.expense","Expense saved",`${Q()} saved a ${y(i.amount)} ${i.category} expense.`,d("finance",{expense:i.id},a),"expense",i.id,a),S(d("finance",{expense:i.id},a),{replace:!0})}function ko(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=Et({...t,id:String(t.id||"").trim()||`vendor-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});Io(i),n.modal="",n.sync={label:"Vendor saved locally",mode:"local"},Y("finance.vendor","Vendor saved",`${Q()} saved vendor ${i.name}.`,d("finance",{vendor:i.id},a),"vendor",i.id,a),S(d("finance",{vendor:i.id},a),{replace:!0})}async function jo(e){const t=n.files.find(s=>s.id===e);if(!t?.object_path){n.sync={label:"No stored object for this file",mode:"local"},u();return}const a=R();if(!a)return;const i=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(i.error||!i.data?.signedUrl){n.sync={label:"Download failed",mode:"local"},u();return}window.open(i.data.signedUrl,"_blank","noopener,noreferrer")}async function Do(e){const t=n.files.find(i=>i.id===e);if(!t)return;const a=R();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),n.files=n.files.filter(i=>i.id!==e),n.selectedFileId="",n.modal="",V(),u()}function Qt(e){const t=n.jobs.findIndex(a=>a.id===e.id);t>=0?n.jobs[t]=e:n.jobs.unshift(e),n.selectedJobId=e.id,V()}function Ra(e){const t=n.tasks.findIndex(a=>a.id===e.id);t>=0?n.tasks[t]=e:n.tasks.unshift(e),n.selectedTaskId=e.id,V()}function Na(e){const t=n.files.findIndex(a=>a.id===e.id);t>=0?n.files[t]=e:n.files.unshift(e),V()}function qo(e){const t=n.financeInvoices.findIndex(a=>a.id===e.id);t>=0?n.financeInvoices[t]=e:n.financeInvoices.unshift(e),V()}function Co(e){const t=n.financeExpenses.findIndex(a=>a.id===e.id);t>=0?n.financeExpenses[t]=e:n.financeExpenses.unshift(e),V()}function Io(e){const t=n.financeVendors.findIndex(a=>a.id===e.id);t>=0?n.financeVendors[t]=e:n.financeVendors.unshift(e),V()}function lt(e){const t=n.memberships.findIndex(a=>a.company_id===e.company_id&&a.profile_id===e.profile_id);t>=0?n.memberships[t]=e:n.memberships.unshift(e),V()}function La(e){n.roleAssignments=n.roleAssignments.filter(t=>t.company_id!==e.company_id||t.profile_id!==e.profile_id),e.role_id&&n.roleAssignments.unshift(e)}function Si(e){return{company_id:e.company_id,profile_id:e.profile_id,role:e.role,status:e.status}}function Vt(e){if(!e)return;const t=q(e);t&&(t.invoice_total=Z(ve(t.company_id).filter(a=>a.job_id===e),"total"),t.updated_at=new Date().toISOString(),Qt(t))}function Xe(){const e=document.getElementById("workspace");e&&(ki(n.route),e.innerHTML=yi(n.route))}function wt(){const e=ca(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const i=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:i,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function Fo(){const e=ca(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||nt(t.get("job_id")||t.get("project_id"))||localStorage.getItem(re)||x(),i=Object.fromEntries(Object.entries(sn).map(([l,c])=>[l,d(c,{},a)]));Object.assign(i,{"/index.html":d("jobs",{},a),"/command.html":d("jobs",{},a),"/login.html":"/login"});let s=i[e];if(e==="/jobs"){const l=t.get("tab");l==="tasks"?s=d("tasks",G(t,["job_id","task_id","new","edit"]),a):l==="files"?s=d("files",G(t,["job_id","folder"]),a):l==="forms"?s=d("forms",G(t,["job_id"]),a):l==="analytics"?s=d("analytics",G(t,["job_id"]),a):s=d("jobs",G(t,["job_id","tab"]),a)}if(e==="/files"&&(s=d("files",G(t,["job_id","folder"]),a)),e==="/forms"&&(s=d("forms",G(t,["job_id"]),a)),e==="/analytics"&&(s=d("analytics",G(t,["job_id"]),a)),e==="/crm"&&(s=d("crm",G(t,["account"]),a)),e==="/finance"&&(s=d("finance",G(t,["invoice","expense","vendor","report"]),a)),e==="/admin"&&(s=d("settings",{},a)),e==="/time"&&(s=d("time",{},a)),e==="/team"&&(s=d("team-chart",{},a)),e==="/team-chart"&&(s=d("team-chart",{},a)),e==="/approvals"&&(s=d("approvals",{},a)),e==="/clock"&&(s=d("clock",{},a)),e==="/task-management.html"){const l=t.get("project_id")||t.get("job_id")||"";s=d("tasks",l?{job_id:l}:{},nt(l)||a)}const r=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(r){const l=decodeURIComponent(r[1]);s=d("tasks",{job_id:l},nt(l)||a)}s&&window.history.replaceState({},"",g(s))}function Mo(e){if(e.name!=="company")return"";const t=Fe();if(n.session?.auth==="supabase"&&!t.length)return null;if(!t.includes(e.companyId))return d(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||x());if(!_t.map(s=>s.id).includes(e.section))return d("jobs",{},e.companyId);const i=e.jobId?nt(e.jobId):"";return i&&i!==e.companyId&&t.includes(i)?d(e.section,Object.fromEntries(e.params.entries()),i):""}function ca(){let e=window.location.pathname||"/";return $e&&e.startsWith($e)&&(e=e.slice($e.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function g(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),i=t.startsWith("/")?t:"/"+t;return`${$e}${i}${a?`?${a}`:""}`||"/"}function S(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith($e+"/")||$e===""&&e.startsWith("/")?e:g(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),u()}function Ao(){return`${ca()}${window.location.search}`}function St(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?g(d("jobs",{},x())):`${t.pathname}${t.search}`}catch{return g(d("jobs",{},x()))}}function d(e="jobs",t={},a=p()){const i=new URLSearchParams(t);for(const[s,r]of[...i.entries()])(r==null||r==="")&&i.delete(s);return`/company/${encodeURIComponent(_(a||x()))}/${e}${i.toString()?`?${i.toString()}`:""}`}function xo(e){return e.name==="company"?C(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":C(e.name||"Workspace")}function Oo(e,t){const[a]=t.split("?"),i=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!i||e.name!=="company"?!1:e.companyId===decodeURIComponent(i[1])&&e.section===i[2]}function To(e){return Ga.includes(e)?e:"pipeline"}function Eo(e){return{pipeline:"Pipeline",list:"List",profile:"Profile"}[e]||e}function Po(e){const t=e.companyId||n.activeCompanyId||x(),a=Fe();n.activeCompanyId=a.includes(t)?t:a[0]||x(),localStorage.setItem(re,n.activeCompanyId)}function ki(e){const t=p();e.jobId&&E(t).some(i=>i.id===e.jobId)&&(n.selectedJobId=e.jobId),(!n.selectedJobId||!E(t).some(i=>i.id===n.selectedJobId))&&(n.selectedJobId=E(t)[0]?.id||"");const a=e.params.get("task_id");a&&W(t).some(i=>i.id===a)&&(n.selectedTaskId=a),e.section!=="tasks"&&(n.selectedTaskId=""),n.driveFolder=e.params.get("folder")||"home"}function Ro(e){const t=Fe(),a=_(e),i=t.includes(a)?a:t[0]||x();n.activeCompanyId=i,localStorage.setItem(re,i),No();const s=n.route||wt(),r=s.name==="company"?s.section:"jobs";S(d(r,{},i))}function No(){n.modal="",n.selectedJobId="",n.selectedTaskId="",n.selectedFileId="",n.selectedFormId="",n.selectedQuestionId="",n.selectedFinanceInvoiceId="",n.selectedFinanceExpenseId="",n.selectedFinanceVendorId="",n.query="",n.fileQuery="",n.formQuery="",n.crmQuery="",n.stageFilter="all",n.crmStageFilter="all",n.crmOwnerFilter="all",n.taskStatusFilter="all",n.taskPriorityFilter="all",n.fileCategoryFilter="All categories",n.formTypeFilter="all",n.formsTab="library",n.driveFolder="home"}function Lo(e){const t=q(e);t&&(n.selectedJobId=e,S(d("jobs",{tab:"profile",job_id:e},t.company_id)))}function Uo(e){const t=kt(e);t&&(n.selectedTaskId=e,S(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function fe(){return q(n.selectedJobId)||E(p())[0]||null}function q(e){return n.jobs.find(t=>t.id===e)||null}function kt(e){return n.tasks.find(t=>t.id===e)||null}function E(e=p()){return n.jobs.filter(t=>t.company_id===e)}function W(e=p()){return n.tasks.filter(t=>t.company_id===e)}function Qo(e=p()){const t=$().profile.id;return n.notifications.filter(a=>a.company_id===e&&a.recipient_profile_id===t).sort((a,i)=>Date.parse(i.created_at||0)-Date.parse(a.created_at||0))}function be(e=p()){return n.files.filter(t=>t.company_id===e)}function Ee(e=p()){return n.driveFolders.filter(t=>t.company_id===e)}function le(e=p()){return n.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function Vo(e=p()){const t=new Map;le(e).forEach(i=>{t.set(i.id,{profile_id:"",member_id:i.id,name:i.full_name||i.name,email:i.email,avatar_url:i.avatar_url,role:ct(e,i.id).toLowerCase(),role_label:ct(e,i.id),role_id:"",status:i.active?"active":"disabled"})}),n.memberships.filter(i=>i.company_id===e).forEach(i=>{const s=da(i.profile_id),r=i.member_id?n.teamMembers.find(f=>f.id===i.member_id):null,l=n.roleAssignments.find(f=>f.company_id===e&&f.profile_id===i.profile_id),c=l?He(e,l.role_id):null,m=i.profile_id||i.member_id;t.set(m,{profile_id:i.profile_id,member_id:i.member_id,name:s?.full_name||r?.full_name||s?.email||r?.name||m||"User",email:s?.email||r?.email||"",avatar_url:s?.avatar_url||r?.avatar_url||"",role:i.role,role_label:c?.name||C(i.role),role_id:l?.role_id||Jt(e,i.role),status:i.status||"active"})});const a=$().profile;if(n.session?.auth==="supabase"&&a?.id&&!t.has(a.id)){const i=dt(e,a.id);i&&t.set(a.id,{profile_id:a.id,member_id:a.member_id||"",name:a.full_name||a.email,email:a.email,avatar_url:a.avatar_url,role:i.role,role_label:C(i.role),role_id:Jt(e,i.role),status:i.status||"active"})}return[...t.values()].sort((i,s)=>(i.status==="active"?0:1)-(s.status==="active"?0:1)||i.name.localeCompare(s.name))}function Jo(e=p()){return n.companyInvites.filter(t=>t.company_id===e&&t.status==="pending").sort((t,a)=>Date.parse(a.created_at||0)-Date.parse(t.created_at||0))}function ge(e=p()){const t=n.roles.filter(a=>a.company_id===e);return t.length?t.sort((a,i)=>i.priority-a.priority||a.name.localeCompare(i.name)):[we({id:`owner-${e}`,company_id:e,name:"Owner",color:"#f0b23b",priority:1e3,is_system:!0}),we({id:`admin-${e}`,company_id:e,name:"Admin",color:"#60a5fa",priority:800,is_system:!0}),we({id:`staff-${e}`,company_id:e,name:"Staff",color:"#15803d",priority:100,is_system:!0})]}function He(e,t){return ge(e).find(a=>a.id===t)||null}function jt(e=p()){return!n.rolePreview||n.rolePreview.company_id!==e?null:He(e,n.rolePreview.role_id)}function Bo(e,t){if(!t)return!0;const a=String(e?.name||"").toLowerCase();if(["owner","admin","developer"].includes(a))return!0;const i=n.rolePermissions.filter(l=>l.role_id===e?.id);if(i.some(l=>(l.permission_key===t||l.permission_key==="*")&&l.effect==="deny"))return!1;if(i.some(l=>(l.permission_key===t||l.permission_key==="*")&&l.effect==="allow"))return!0;if(i.length)return!1;const s=ji(e),r=st[s]||st.member;return r.includes("*")||r.includes(t)}function Jt(e,t){const a=String(t||"").toLowerCase();return ge(e).find(i=>i.name.toLowerCase()===a||i.id.toLowerCase()===a)?.id||""}function Ho(e=p()){const t=ge(e).filter(a=>a.name.toLowerCase()!=="owner");return t.find(a=>a.name.toLowerCase()==="staff")?.id||t.find(a=>a.name.toLowerCase()==="member")?.id||t[0]?.id||""}function zo(){const e=new Uint8Array(8);return crypto.getRandomValues(e),`QH-${Array.from(e,t=>t.toString(36).padStart(2,"0")).join("").toUpperCase()}`}function Wo(e){const t=new URL(g("/login"),window.location.origin);return t.searchParams.set("invite",e.token),t.toString()}function ji(e){const t=String(e?.name||"").toLowerCase().replace(/\s+/g,"_");return["owner","member","worker","sales","supervisor","admin","developer","construction_supervisor"].includes(t)?t:"member"}function da(e){return n.profiles.find(t=>t.id===e)||($().profile.id===e?$().profile:null)}function Di(e=p()){const t=n.query.trim().toLowerCase();return E(e).filter(a=>n.stageFilter!=="all"&&a.stage!==n.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,D(a.company_id)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function Dt(e=p()){const t=new Map;return E(e).forEach(a=>{const i=String(a.client_name||"").trim()||"Unassigned customer",s=`account-${Ia(i.toLowerCase())}`;t.has(s)||t.set(s,{key:s,name:i,jobs:[]}),t.get(s).jobs.push(a)}),Array.from(t.values()).map(a=>{const i=a.jobs.slice().sort((I,z)=>Date.parse(z.updated_at||z.created_at||0)-Date.parse(I.updated_at||I.created_at||0)),s=i[0]||null,r=i.map(I=>I.id),l=W(e).filter(I=>r.includes(I.project_id)),c=de(e).filter(I=>r.includes(I.linked_job_id)),m=be(e).filter(I=>r.includes(I.job_id)),f=ee(i.map(I=>I.contact_name)),b=ee(i.map(I=>I.owner_name)),h=ee(i.map(I=>I.site_address)),N=i.map(I=>I.priority||"Medium").sort((I,z)=>Ce(z)-Ce(I))[0]||"Medium";return{...a,jobs:i,tasks:l,latestJob:s,contacts:f,owners:b,addresses:h,forms:c,files:m,primaryContact:f[0]||"No contact",owner:b[0]||"Unassigned",stage:s?.stage||"Lead",priority:N,estimateTotal:Z(i,"estimate_total"),fileCount:m.length,formCount:c.length,updatedAt:s?.updated_at||s?.created_at||new Date().toISOString(),subtitle:h[0]||`${i.length} linked job${i.length===1?"":"s"}`}}).sort((a,i)=>Date.parse(i.updatedAt||0)-Date.parse(a.updatedAt||0))}function Yo(e=p()){const t=n.crmQuery.trim().toLowerCase();return Dt(e).filter(a=>n.crmStageFilter!=="all"&&!a.jobs.some(i=>i.stage===n.crmStageFilter)||n.crmOwnerFilter!=="all"&&!a.owners.includes(n.crmOwnerFilter)?!1:t?[a.name,a.primaryContact,a.owner,a.stage,...a.addresses,...a.contacts,...a.jobs.map(i=>i.name)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function Ko(e,t){return Dt(e).find(a=>a.key===t)||null}function Go(e=p()){return ee(E(e).map(t=>t.owner_name)).sort((t,a)=>t.localeCompare(a))}function qi(e=p()){const t=$().profile.member_id||"",a=W(e).slice().sort(Qa),i=a.filter(ua),s=i.filter(h=>h.due===j(0)),r=i.filter(h=>za(h.due)<0),l=i.filter(h=>{const N=za(h.due);return N>=0&&N<=7}),c=i.filter(h=>h.assignee_id===t),m=i.filter(h=>["review","pending"].includes(h.status)),f=a.filter(h=>h.status==="done"),b=ee(r.concat(s,c,m,l).map(h=>h.id)).map(h=>a.find(N=>N.id===h)).filter(Boolean).sort(Qa);return{tasks:a,open:i,dueToday:s,overdue:r,thisWeek:l,assignedToMe:c,review:m,done:f,focus:b}}function Ci(e=p()){const t=de(e).filter(s=>(s.require_approval||s.type==="Client approval")&&!["Archived","Closed","Approved"].includes(s.status)).map(s=>({id:`form:${s.id}`,title:s.title,meta:q(s.linked_job_id)?.name||s.description||"Company form",type:"Form approval",owner:J(s.creator_id),status:s.status,updatedAt:s.updated_at||s.created_at,href:d("forms",{form_id:s.id},e)})),a=W(e).filter(s=>["review","pending"].includes(s.status)).map(s=>({id:`task:${s.id}`,title:s.title,meta:q(s.project_id)?.name||s.description||"Company task",type:"Task review",owner:J(s.assignee_id),status:ne(s.status),updatedAt:s.updated_at||s.due,href:d("tasks",{...s.project_id?{job_id:s.project_id}:{},task_id:s.id},e)})),i=n.memberships.filter(s=>s.company_id===e&&s.status!=="active").map(s=>({id:`access:${s.profile_id||s.member_id}`,title:J(s.member_id||s.profile_id),meta:`${C(s.role)} access request`,type:"Access request",owner:"Quest admin",status:C(s.status),updatedAt:new Date().toISOString(),href:d("settings",{tab:"access"},e)}));return t.concat(a,i).sort((s,r)=>Date.parse(r.updatedAt||0)-Date.parse(s.updatedAt||0))}function qt(e=p()){const t=n.activeTimer;return!t||t.company_id!==e?null:t}function Ii(e=p()){return n.timeEntries.filter(t=>t.company_id===e).sort((t,a)=>Date.parse(a.started_at||0)-Date.parse(t.started_at||0))}function Ua(e=p(),t=0){return Ii(e).filter(a=>Date.parse(a.started_at||0)>=t).reduce((a,i)=>a+T(i.duration_ms),0)}function Zo(e=p(),t=""){n.activeTimer&&Fi(!1);const a=t?kt(t):null;n.activeTimer={id:`timer-${crypto.randomUUID()}`,company_id:e,user_id:$().profile.member_id||$().profile.id,task_id:a?.company_id===e?a.id:"",task_title:a?.company_id===e?a.title:"",started_at:new Date().toISOString()},Vi(),n.sync={label:"Clock started locally",mode:"local"},u()}function Fi(e=!0){const t=n.activeTimer;if(!t)return;const a=new Date().toISOString(),i=Math.max(0,Date.parse(a)-Date.parse(t.started_at||a));n.timeEntries.unshift({id:`time-${crypto.randomUUID()}`,company_id:t.company_id,user_id:t.user_id,task_id:t.task_id||"",task_title:t.task_title||"",started_at:t.started_at,ended_at:a,duration_ms:i,notes:t.task_title?"Task timer":"General shift"}),n.activeTimer=null,Vi(),n.sync={label:"Clock stopped locally",mode:"local"},e&&u()}function ua(e){return e.status!=="done"}function Qa(e,t){const a=Date.parse(e.due||0)-Date.parse(t.due||0);return a||Ce(t.priority)-Ce(e.priority)}function ve(e=p()){return n.financeInvoices.filter(t=>t.company_id===e).sort(Le("updated_at"))}function Mi(e=p()){return n.financePayments.filter(t=>t.company_id===e)}function pa(e=p()){return n.financeExpenses.filter(t=>t.company_id===e).sort(Le("updated_at"))}function ma(e=p()){return n.financeVendors.filter(t=>t.company_id===e)}function ye(e){return n.financeInvoices.find(t=>t.id===e)||null}function Ai(e){return n.financeExpenses.find(t=>t.id===e)||null}function fa(e){return n.financeVendors.find(t=>t.id===e)||null}function Bt(e){return fa(e)?.name||"No vendor"}function xi(e){return n.financePayments.filter(t=>t.invoice_id===e).sort(Le("received_at"))}function ba(e){return Z(xi(e),"amount")}function se(e){const t=ye(e);return Math.max(0,T(t?.total)-ba(e))}function Oi(e){const t=se(e.id);return t<=0&&T(e.total)>0?"Paid":t<T(e.total)?"Partially paid":e.status==="Sent"&&en(e.due_date)>0?"Overdue":e.status}function Ti(e=p()){const t=ve(e),a=Mi(e),i=pa(e).filter(c=>["Approved","Paid"].includes(c.status)),s={current:0,thirty:0,sixty:0,overSixty:0};t.forEach(c=>{const m=se(c.id);if(!m)return;const f=en(c.due_date);f<=0?s.current+=m:f<=30?s.thirty+=m:f<=60?s.sixty+=m:s.overSixty+=m});const r=Z(a,"amount"),l=Z(i,"amount");return{pipeline:Z(E(e),"estimate_total"),invoiced:Z(t,"total"),collected:r,outstanding:t.reduce((c,m)=>c+se(m.id),0),expenses:l,net:r-l,aging:s}}function Xo(e=p(),t=""){const a=n.query.trim().toLowerCase();return W(e).filter(i=>t&&i.project_id!==t||n.taskStatusFilter!=="all"&&i.status!==n.taskStatusFilter||n.taskPriorityFilter!=="all"&&i.priority!==n.taskPriorityFilter?!1:a?[i.title,i.description,Ke(i.type),J(i.assignee_id),q(i.project_id)?.name].some(s=>String(s||"").toLowerCase().includes(a)):!0)}function Ei(){const e=Fe();return n.companies.filter(t=>e.includes(t.id))}function ga(e,t=p()){if(!e)return!0;const a=jt(t);if(a)return Bo(a,e);const i=$().profile;if(n.session?.auth==="supabase"){const l=dt(t,i.id);if(!l||l.status!=="active")return!1;if(["owner","developer"].includes(String(l.role).toLowerCase()))return!0;const c=n.roleAssignments.filter(f=>f.company_id===t&&f.profile_id===i.id).map(f=>f.role_id),m=n.rolePermissions.filter(f=>c.includes(f.role_id));if(m.some(f=>(f.permission_key===e||f.permission_key==="*")&&f.effect==="deny"))return!1;if(m.some(f=>(f.permission_key===e||f.permission_key==="*")&&f.effect==="allow"))return!0}const s=String(dt(t,i.id)?.role||i.role||"member").toLowerCase(),r=st[s]||st.member;return r.includes("*")||r.includes(e)}function Fe(){const e=$().profile,t=n.companies.map(s=>s.id);if(n.session?.auth==="supabase"){const s=n.memberships.filter(r=>r.profile_id===e.id&&r.status==="active").map(r=>_(r.company_id));return ee(s).filter(r=>t.includes(r))}if(["developer","admin"].includes(e.role))return ee(t.length?t:Be.map(s=>_(s.id)));const a=n.memberships.filter(s=>s.profile_id===e.id&&s.status!=="disabled").map(s=>_(s.company_id)),i=a.length?a:e.company_ids||[];return ee(i.map(_)).filter(s=>t.includes(s))}function p(){const e=Fe();return e.includes(n.activeCompanyId)?n.activeCompanyId:e[0]||n.activeCompanyId||x()}function x(){return _(Be[0].id)}function Ct(e){const t=_(e);return n.companies.find(a=>a.id===t)||Be.map(ze).find(a=>a.id===t)||null}function D(e){const t=Ct(e);return t?It(t):e||"Company"}function It(e){return e.short_name||e.label||e.name||e.id}function ce(e){return Ct(e)?.color||"#f0b23b"}function nt(e){return _(n.jobs.find(t=>t.id===e)?.company_id||"")}function Ft(e){const t=jt(e);if(t)return`Preview: ${t.name}`;const a=$().profile;return n.session?.auth!=="supabase"&&["developer","admin"].includes(a.role)?C(a.role):C(dt(e,a.id)?.role||a.role||"member")}function ct(e,t){const a=n.memberships.find(i=>i.company_id===e&&(i.member_id===t||i.profile_id===t));return C(a?.role||"member")}function dt(e,t){return n.memberships.find(a=>a.company_id===e&&a.profile_id===t)||null}function va(e=p()){return n.subscriptions.find(t=>t.company_id===e)||null}function ya(e=p()){if(n.session?.auth!=="supabase")return!0;const t=va(e);return!!(!t||["trialing","active","past_due","grace"].includes(t.status)||t.grace_ends_at&&Date.parse(t.grace_ends_at)>Date.now())}function Pi(e=p()){const t=va(e);return t?t.status==="trialing"?`Trial - ${O(t.trial_ends_at)}`:t.status==="active"?"Active subscription":t.status==="past_due"?"Past due grace":t.status==="grace"?`Grace - ${O(t.grace_ends_at)}`:C(t.status):n.session?.auth==="supabase"?"Trial pending":"Demo mode"}function J(e){const t=n.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function er(e){const t=da(e);return t?.full_name||t?.email||J(e)}function Mt(e){return n.tasks.filter(t=>t.project_id===e).length}function ut(e){return n.files.filter(t=>t.job_id===e).length}function _(e){return{"quest-roofing":"roofing","quest-drafting":"drafting"}[String(e||"").trim()]||String(e||"").trim()}function Ri(e){const t=new Map;return e.map(ze).forEach(a=>{!a.id||t.has(a.id)||t.set(a.id,a)}),Array.from(t.values())}function ze(e){return{id:_(e.id||""),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function De(e){return{id:String(e.id||""),company_id:_(e.company_id||x()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:Ue.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:T(e.estimate_total),invoice_total:T(e.invoice_total),task_count:T(e.task_count),file_count:T(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function qe(e){const t=ot.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=Qe.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:Za.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:_(e.company_id||x()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||j(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:ot.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function Pe(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:_(e.company_id||x()),job_id:String(e.job_id||""),folder:String(e.folder||Br(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:T(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function _a(e){return{id:String(e.id||`folder-${crypto.randomUUID()}`),company_id:_(e.company_id||x()),name:String(e.name||"New folder").trim()||"New folder",parent_key:String(e.parent_key||"home"),created_by_label:String(e.created_by_label||"Quest HQ"),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function We(e){const t=Array.isArray(e.questions)?e.questions.map(At):[],a=Ve.includes(e.type)?e.type:"Internal",i=oa.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:_(e.company_id||x()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:i,audience:String(e.audience||"Internal").trim(),creator_id:String(e.creator_id||e.created_by||e.created_by_id||""),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function At(e){const t=Je.some(([i])=>i===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(i=>String(i||"").trim()).filter(Boolean):[]};return Ne(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function ha(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:_(e.company_id||x()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function xt(e){const t=T(e.subtotal),a=T(e.tax),i=T(e.total)||t+a;return{id:String(e.id||`invoice-${crypto.randomUUID()}`),company_id:_(e.company_id||x()),job_id:String(e.job_id||""),client_name:String(e.client_name||"").trim(),invoice_number:String(e.invoice_number||`INV-${Date.now()}`).trim(),status:Xa.includes(e.status)?e.status:"Draft",issue_date:String(e.issue_date||j(0)).slice(0,10),due_date:String(e.due_date||j(30)).slice(0,10),subtotal:t,tax:a,total:i,notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ot(e){return{id:String(e.id||`payment-${crypto.randomUUID()}`),company_id:_(e.company_id||x()),invoice_id:String(e.invoice_id||""),amount:T(e.amount),method:ai.includes(e.method)?e.method:"ACH",received_at:String(e.received_at||j(0)).slice(0,10),reference:String(e.reference||"").trim(),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString()}}function Tt(e){return{id:String(e.id||`expense-${crypto.randomUUID()}`),company_id:_(e.company_id||x()),job_id:String(e.job_id||""),vendor_id:String(e.vendor_id||""),category:ht.includes(e.category)?e.category:"Other",amount:T(e.amount),status:ei.includes(e.status)?e.status:"Pending",spent_at:String(e.spent_at||j(0)).slice(0,10),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Et(e){return{id:String(e.id||`vendor-${crypto.randomUUID()}`),company_id:_(e.company_id||x()),name:String(e.name||"New vendor").trim()||"New vendor",contact_name:String(e.contact_name||"").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),category:ht.includes(e.category)?e.category:"Other",status:ti.includes(e.status)?e.status:"Active",notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function $a(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,supervisor_id:String(e.supervisor_id||e.manager_id||""),company_ids:Array.isArray(e.company_ids)?ee(e.company_ids.map(_)):[]}}function pt(e){return{company_id:_(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function tr(e){return{company_id:_(e.company_id||""),status:String(e.status||"trialing"),plan_code:String(e.plan_code||"quest_company_300"),amount_cents:T(e.amount_cents||3e4),currency:String(e.currency||"usd"),stripe_customer_id:String(e.stripe_customer_id||""),stripe_subscription_id:String(e.stripe_subscription_id||""),current_period_end:e.current_period_end||"",trial_ends_at:e.trial_ends_at||"",grace_ends_at:e.grace_ends_at||""}}function we(e){return{id:String(e.id||""),company_id:_(e.company_id||""),name:String(e.name||"Role").trim()||"Role",color:String(e.color||"#f0b23b"),priority:T(e.priority),is_system:e.is_system===!0,created_by:String(e.created_by||"")}}function Ht(e){return{role_id:String(e.role_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function Ni(e){return{company_id:_(e.company_id||""),profile_id:String(e.profile_id||""),role_id:String(e.role_id||""),assigned_by:String(e.assigned_by||"")}}function ar(e){return{id:String(e.id||""),company_id:_(e.company_id||""),resource_type:String(e.resource_type||""),resource_id:String(e.resource_id||""),principal_type:String(e.principal_type||""),principal_id:String(e.principal_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function ir(e){return{id:String(e.id||""),company_id:_(e.company_id||""),resource_type:String(e.resource_type||""),field_key:String(e.field_key||""),role_id:String(e.role_id||""),visibility:["visible","masked","hidden"].includes(e.visibility)?e.visibility:"visible",editable:e.editable!==!1}}function mt(e){return{id:String(e.id||""),company_id:_(e.company_id||""),email:String(e.email||""),role_id:String(e.role_id||""),token:String(e.token||""),status:String(e.status||"pending"),expires_at:e.expires_at||"",invited_by:String(e.invited_by||""),accepted_by:String(e.accepted_by||""),created_at:e.created_at||""}}function Li(e){return{id:String(e.id||""),company_id:_(e.company_id||""),profile_id:String(e.profile_id||""),requested_email:String(e.requested_email||""),status:String(e.status||"pending"),message:String(e.message||""),reviewed_by:String(e.reviewed_by||""),created_at:e.created_at||""}}function nr(e=p()){return De({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function sr(e=p(),t=""){return qe({id:"",title:"",company_id:e,project_id:t,assignee_id:le(e)[0]?.id||"abraham",creator_id:$().profile.member_id||"abraham",due:j(1),priority:"medium",status:"todo",type:"admin"})}function or(e=p()){const t=fe();return xt({id:"",company_id:e,job_id:t?.company_id===e?t.id:"",client_name:t?.company_id===e?t.client_name:"",invoice_number:zr(e),status:"Draft",issue_date:j(0),due_date:j(30),subtotal:t?.company_id===e?t.estimate_total:0,tax:0,notes:""})}function rr(e=p(),t=""){const a=t?ye(t):ve(e).find(s=>se(s.id)>0),i=a?.company_id===e?a:null;return Ot({id:"",company_id:e,invoice_id:i?.id||"",amount:i?se(i.id):0,method:"ACH",received_at:j(0),reference:"",notes:""})}function lr(e=p(),t=""){return Tt({id:"",company_id:e,job_id:fe()?.company_id===e?fe().id:"",vendor_id:t||ma(e)[0]?.id||"",category:"Materials",status:"Pending",amount:0,spent_at:j(0),notes:""})}function cr(e=p()){return Et({id:"",company_id:e,name:"",category:"Materials",status:"Active"})}function dr(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function ur(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function $(){return n.session?n.session.auth==="supabase"?n.session:{...n.session,profile:{...zt().profile,...n.session.profile||{},...n.profileDraft||{}}}:zt()}function pr(e,t){const a=!!(e.user.email_confirmed_at||e.user.confirmed_at);return{auth:"supabase",access_token:e.access_token,refresh_token:e.refresh_token,user:{id:e.user.id,email:e.user.email||"",email_confirmed_at:e.user.email_confirmed_at||e.user.confirmed_at||"",email_verified:a},profile:wa(t||{},{id:e.user.id,email:e.user.email||"",full_name:e.user.user_metadata?.full_name||e.user.email||"Quest user",role:"member",member_id:"",company_ids:[],avatar_url:"",email_verified:a})}}function zt(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",email_verified:!0,...n.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:ke.localUsername,email:e.email},profile:e}}function wa(e,t={}){const a=String(e.role||t.role||"member").toLowerCase(),i=typeof e.email_verified=="boolean"?e.email_verified:t.email_verified===!0;return{id:String(e.id||t.id||""),email:String(e.email||t.email||""),full_name:String(e.full_name||t.full_name||e.email||t.email||"Quest user"),role:a,role_label:C(a),member_id:String(e.member_id||t.member_id||""),company_ids:Array.isArray(e.company_ids)?ee(e.company_ids.map(_)):t.company_ids||[],avatar_url:String(e.avatar_url||t.avatar_url||""),approved:e.approved!==!1,email_verified:i,supervisor_id:String(e.supervisor_id||t.supervisor_id||"")}}function Sa(e){return{id:String(e.id||`notification-${crypto.randomUUID()}`),company_id:_(e.company_id||""),recipient_profile_id:String(e.recipient_profile_id||"basic-quest-user"),type:String(e.type||"general"),title:String(e.title||"Notification"),body:String(e.body||""),href:String(e.href||""),source_type:String(e.source_type||""),source_id:String(e.source_id||""),read_at:String(e.read_at||""),created_at:String(e.created_at||new Date().toISOString())}}function mr(e=$()){return e.auth!=="supabase"?!0:e.user?.email_verified===!0||!!e.user?.email_confirmed_at||e.profile?.email_verified===!0}function B(e,t,a=""){const i=gi();return`
    <section class="workspace-head">
      <div class="head-copy">
        <span class="head-symbol">${X(i)}</span>
        <div>
          <div class="context-line"><span>${o(D(p()))}</span><b>${o(Ft(p()))}</b></div>
          <h1>${o(e)}</h1>
          <p>${o(t)}</p>
        </div>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function fr(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric">${X(vi(t),"metric-symbol")}<span>${o(t)}</span><strong>${o(a)}</strong></article>`).join("")}</section>`}function br(e){return`
    <button class="queue-row" type="button" data-select-job="${o(e.id)}">
      <span><strong>${o(e.name)}</strong><small>${o(e.client_name||D(e.company_id))}</small></span>
      ${ka(e.priority)}
      <b>${o(e.stage)}</b>
    </button>
  `}function Pt(e){return`
    <button class="queue-row" type="button" data-select-task="${o(e.id)}">
      <span><strong>${o(e.title)}</strong><small>${o(q(e.project_id)?.name||D(e.company_id))}</small></span>
      ${Ui(e.priority)}
      <b>${o(ne(e.status))}</b>
    </button>
  `}function gr(e){return`
    <button class="job-card priority-${o(e.priority.toLowerCase())} ${e.id===n.selectedJobId?"active":""}" type="button" data-select-job="${o(e.id)}">
      <strong>${o(e.name)}</strong>
      <span>${o(e.client_name||"No client")}</span>
      <small>${o(D(e.company_id))} - ${o(e.owner_name||"Unassigned")}</small>
      <em>${o(Mt(e.id))} tasks</em>
    </button>
  `}function et(e,t,a,i){return`
    <a class="mini-link" href="${g(e)}" data-router>
      <i class="ti ${o(t)}"></i>
      <span><strong>${o(a)}</strong><small>${o(i)}</small></span>
    </a>
  `}function L(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${o(t)}</span><strong>${o(a)}</strong></div>`).join("")}</div>`}function k(e,t,a="",i=!1,s="text",r=""){return`<label class="${o(r)}"><span>${o(e)}</span><input name="${o(t)}" type="${o(s)}" value="${o(a)}" ${i?"required":""} /></label>`}function oe(e,t,a="",i=""){return`<label class="${o(i)}"><span>${o(e)}</span><textarea name="${o(t)}" rows="4">${o(a)}</textarea></label>`}function P(e,t,a,i){return`
    <label><span>${o(e)}</span><select name="${o(t)}">
      ${i.map(([s,r])=>`<option value="${o(s)}" ${String(s)===String(a)?"selected":""}>${o(r)}</option>`).join("")}
    </select></label>
  `}function ka(e){return`<span class="priority ${o(String(e).toLowerCase())}">${o(e)}</span>`}function Ui(e){return`<span class="priority ${o(e)}">${o(C(e))}</span>`}function Qi(e){return`<span class="status-pill ${o(e)}">${o(ne(e))}</span>`}function vr(e){return`<span class="finance-status ${o(Ia(e))}">${o(e)}</span>`}function Ye(e,t){if(e.avatar_url)return`<span class="${o(t)}"><img src="${o(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${o(t)}">${o(a)}</span>`}function v(e){return`<div class="empty-state">${X("q-empty","empty-symbol")}<span>${o(e)}</span></div>`}function G(e,t){const a={};return t.forEach(i=>{const s=e.get(i);s&&(a[i]=s)}),a}function V(){n.session?.auth!=="supabase"&&(F(Yt,n.jobs),F(Kt,n.tasks),F(Gt,n.files),F(Zt,n.driveFolders),F(Ie,n.forms),F(bt,n.formResponses),F(ta,n.financeInvoices),F(aa,n.financePayments),F(ia,n.financeExpenses),F(na,n.financeVendors),F(gt,n.timeEntries),F(vt,n.activeTimer),F(Xt,n.teamMembers),F(ea,n.memberships),F(yt,n.notifications))}function Vi(){n.session?.auth!=="supabase"&&(F(gt,n.timeEntries),F(vt,n.activeTimer))}function ja(){n.session?.auth!=="supabase"&&F(yt,n.notifications)}function Ji(){return n.session?.auth!=="supabase"}function Ae(e){if(!Ji())return null;const t=Sa({id:`notification-${crypto.randomUUID()}`,company_id:p(),recipient_profile_id:$().profile.id,created_at:new Date().toISOString(),...e});return n.notifications=[t].concat(n.notifications.filter(a=>a.id!==t.id)).slice(0,100),ja(),t}function yr(e=p()){const t=new Date().toISOString(),a=$().profile.id;n.notifications=n.notifications.map(i=>i.company_id===e&&i.recipient_profile_id===a&&!i.read_at?{...i,read_at:t}:i),ja()}function _r(e){const t=n.notifications.find(a=>a.id===e);t&&(n.notifications=n.notifications.map(a=>a.id===t.id?{...a,read_at:a.read_at||new Date().toISOString()}:a),n.notificationMenuOpen=!1,ja(),t.href&&S(t.href))}function Va(e,t=null){if(!Ji())return;const a=d("tasks",{...e.project_id?{job_id:e.project_id}:{},task_id:e.id},e.company_id),i=J(e.assignee_id);if(!t){Ae({company_id:e.company_id,type:"task.assigned",title:"Task assigned",body:`${Q()} assigned ${e.title} to ${i}.`,href:a,source_type:"task",source_id:e.id});return}t.assignee_id!==e.assignee_id&&Ae({company_id:e.company_id,type:"task.assigned",title:"Task reassigned",body:`${Q()} reassigned ${e.title} to ${i}.`,href:a,source_type:"task",source_id:e.id}),t.priority!==e.priority&&Ae({company_id:e.company_id,type:"task.priority",title:"Task priority changed",body:`${Q()} set priority to ${C(e.priority)} on ${e.title}.`,href:a,source_type:"task",source_id:e.id}),t.status!==e.status&&Ae({company_id:e.company_id,type:"task.status",title:"Task status changed",body:`${Q()} moved ${e.title} to ${ne(e.status)}.`,href:a,source_type:"task",source_id:e.id})}function Y(e,t,a,i,s="",r="",l=p()){Ae({company_id:l,type:e,title:t,body:a,href:i,source_type:s,source_id:r})}function Q(){return $().profile.full_name||$().profile.email||"Quest HQ"}function w(e,t,a=""){return`<article class="metric">${X(vi(e),"metric-symbol")}<span>${o(e)}</span><strong>${o(t)}</strong>${a?`<small>${o(a)}</small>`:""}</article>`}function pe(e,t){return`<div><strong>${o(e)}</strong><span>${o(t)}</span></div>`}function Se(e,t,a,i,s=""){const r=`
    <span><strong>${o(e)}</strong><small>${o(t||"Finance record")}</small></span>
    <b>${o(a)}</b>
    <em>${O(i)}</em>
  `;return s?`<a class="finance-compact-row" href="${g(s)}" data-router>${r}</a>`:`<div class="finance-compact-row">${r}</div>`}function Ja(e,t){const a=be(e);return t==="jobs"?a.filter(i=>i.job_id).length:a.filter(i=>i.folder===t).length}function Bi(e="home",t=null){return t?.id?`job:${t.id}`:e||"home"}function hr(e,t="home",a=null){const i=Bi(t,a),s=Ee(e).filter(r=>r.parent_key===i).map(r=>$r(e,r));return a?s:t==="home"?sa.map(([l,c,m,f])=>({id:l,name:c,caption:m,icon:f,href:g(d("files",{folder:l},e)),countLabel:`${Ja(e,l)} file${Ja(e,l)===1?"":"s"}`,updatedLabel:""})).concat(s):t==="jobs"?E(e).map(l=>({id:`job:${l.id}`,name:l.name,caption:l.client_name||D(e),icon:"ti-folder",href:g(d("files",{folder:"jobs",job_id:l.id},e)),countLabel:`${ut(l.id)} file${ut(l.id)===1?"":"s"}`,updatedLabel:O(l.updated_at)})).concat(s):s}function $r(e,t){const a=Ee(e).filter(r=>r.parent_key===t.id).length,i=be(e).filter(r=>r.folder===t.id).length,s=a+i;return{id:t.id,name:t.name,caption:"Custom folder",icon:"ti-folder",href:g(d("files",{folder:t.id},e)),countLabel:`${s} item${s===1?"":"s"}`,updatedLabel:O(t.updated_at)}}function wr(e,t,a=null){if(a)return`<span>/</span><a href="${g(d("files",{folder:"jobs"},e))}" data-router>Jobs</a>`;const i=Ee(e).find(m=>m.id===t);if(!i)return`<span>/</span><strong>${o(te(t))}</strong>`;const s=[];let r=i;const l=new Set;for(;r&&!l.has(r.id);)l.add(r.id),s.unshift(r),r=Ee(e).find(m=>m.id===r.parent_key);return`${i.parent_key&&!i.parent_key.startsWith("folder-")&&i.parent_key!=="home"?`<span>/</span><a href="${g(d("files",{folder:i.parent_key},e))}" data-router>${o(te(i.parent_key))}</a>`:""}${s.map((m,f)=>`<span>/</span>${f===s.length-1?`<strong>${o(m.name)}</strong>`:`<a href="${g(d("files",{folder:m.id},e))}" data-router>${o(m.name)}</a>`}`).join("")}`}function Sr(e=p(),t="home",a=""){const i=(n.fileQuery||n.query||"").trim().toLowerCase(),s=n.fileCategoryFilter;let r=be(e);return a?r=r.filter(l=>l.job_id===a):t&&t!=="home"&&(t==="jobs"?r=r.filter(l=>l.job_id):r=r.filter(l=>l.folder===t)),s&&s!=="All categories"&&(r=r.filter(l=>String(l.category||te(l.folder)).toLowerCase()===s.toLowerCase())),i&&(r=r.filter(l=>[l.file_name,l.category,l.uploaded_by_label,l.notes,l.object_path,q(l.job_id)?.name].some(c=>String(c||"").toLowerCase().includes(i)))),r.sort((l,c)=>new Date(c.created_at||0)-new Date(l.created_at||0))}function _e(e){const t=String(e.mime_type||"").toLowerCase(),a=Hi(e);return t.includes("pdf")||a==="pdf"?"PDF":t.includes("image")||["png","jpg","jpeg","gif","webp","svg"].includes(a)?"Image":t.includes("zip")||["zip","rar","7z"].includes(a)?"Archive":t.includes("spreadsheet")||t.includes("excel")||["xls","xlsx","csv"].includes(a)?"Excel":t.includes("word")||["doc","docx"].includes(a)?"Word":t.includes("text")||["txt","md","json","csv","log"].includes(a)?"Text":t.includes("presentation")||["ppt","pptx"].includes(a)?"PowerPoint":a?a.toUpperCase():te(e.folder)}function Da(e){const t=_e(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="excel"?"sheet":t==="text"?"text":["word","powerpoint"].includes(t)?"doc":t==="archive"?"zip":"doc"}function Hi(e){return String(e.file_name||"").split(".").pop()?.toLowerCase()||""}function qa(e,t=!1){const a=Xi(e);return e.signed_url?`<img src="${o(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${o(Da(e))} ${t?"large":""}"><i class="ti ${o(a)}"></i></span>`}function kr(e){const t=_e(e),a=Hi(e);return t==="Image"?a&&a.length<=4?a.toUpperCase():"IMG":t==="Archive"?a&&a.length<=3?a.toUpperCase():"ZIP":t==="Excel"?a==="csv"?"CSV":"XLS":t==="Word"?"DOC":t==="PowerPoint"?"PPT":t==="Text"?a&&a.length<=4?a.toUpperCase():"TXT":t.length<=4?t.toUpperCase():(a||"FILE").slice(0,4).toUpperCase()}function de(e=p()){return n.forms.filter(t=>t.company_id===e)}function jr(e=p()){const t=n.formQuery.trim().toLowerCase(),a=n.route?.jobId||"";return de(e).filter(i=>a&&i.linked_job_id!==a||n.formTypeFilter!=="all"&&i.type!==n.formTypeFilter?!1:t?[i.title,i.description,i.type,i.status,i.audience,q(i.linked_job_id)?.name].some(s=>String(s||"").toLowerCase().includes(t)):!0)}function Re(e=p()){const t=n.route?.jobId||"",a=de(e).filter(r=>!t||r.linked_job_id===t),i=n.route?.params?.get("form_id")||"";if(i&&a.some(r=>r.id===i)&&(n.selectedFormId=i),!a.length)return n.selectedFormId="",n.selectedQuestionId="",null;let s=a.find(r=>r.id===n.selectedFormId)||a[0];return n.selectedFormId=s.id,(!n.selectedQuestionId||!s.questions.some(r=>r.id===n.selectedQuestionId))&&(n.selectedQuestionId=s.questions[0]?.id||""),s}function he(e){return n.forms.find(t=>t.id===e)||null}function ie(){return he(n.selectedFormId)||Re(p())}function zi(e=p()){return n.formResponses.filter(t=>t.company_id===e)}function Rt(e){return n.formResponses.filter(t=>t.form_id===e)}function Wi(e){return Array.isArray(e?.questions)?e.questions.length:0}function Dr(e){const t=String(e?.creator_id||""),a=$().profile;return t?t&&(t===a.member_id||t===a.id)?a.full_name||"Quest Basic Mode":J(t):e?.created_by_label||a.full_name||"Quest HQ"}function xe(e,t,a="",i=!1,s="text"){return`<label><span>${o(e)}</span><input data-form-field="${o(t)}" type="${o(s)}" value="${o(a)}" ${i?"required":""} /></label>`}function Yi(e,t,a=""){return`<label><span>${o(e)}</span><textarea data-form-field="${o(t)}" rows="3">${o(a)}</textarea></label>`}function tt(e,t,a,i){return`
    <label><span>${o(e)}</span><select data-form-field="${o(t)}">
      ${i.map(([s,r])=>`<option value="${o(s)}" ${String(s)===String(a)?"selected":""}>${o(r)}</option>`).join("")}
    </select></label>
  `}function Ne(e){return["multiple","checkbox","dropdown"].includes(e.type)}function qr(e){return{short:"ti-letter-t",paragraph:"ti-align-left",multiple:"ti-circle-dot",checkbox:"ti-checkbox",dropdown:"ti-select",date:"ti-calendar",rating:"ti-star",yesno:"ti-circle-check",file:"ti-paperclip"}[e]||"ti-plus"}function Cr(e){return Je.find(([t])=>t===e)?.[1]||C(e||"Question")}function ae(e,t){return`
    <div class="response-question">
      <label>
        <span>${o(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${o(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function Ki(e){const t=he(e.form_id),a=Object.entries(e.answers||{}).map(([i,s])=>{const r=t?.questions.find(c=>c.id===i),l=Array.isArray(s)?s.join(", "):s;return pe(r?.label||i,l||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${o(t?.title||"Response")}</h2><p>${o(e.submitted_by||e.submitter_email||"Anonymous")} / ${O(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||pe("Response","No answers captured.")}</div>
  `}function Oe(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[U("short","Inspection address"),U("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),U("paragraph","Recommended scope"),U("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[U("short","Client name"),U("yesno","Approved to proceed?"),U("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[U("short","Request title"),U("dropdown","Priority",["Low","Medium","High","Urgent"]),U("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[U("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),U("yesno","Weather safe?"),U("paragraph","Safety notes")]}]}function Ir(e=p()){return We({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:n.route?.jobId||"",theme_color:ce(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[U("short","First question")]})}function U(e="short",t="Untitled question",a=[]){return At({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function Fr(e,t={}){const a=Ir(e),i=We({...a,...t,id:t.id||`form-${crypto.randomUUID()}`,company_id:e,questions:(t.questions||a.questions).map(s=>At(s)),created_at:t.created_at||new Date().toISOString(),updated_at:new Date().toISOString()});return n.forms.unshift(i),n.selectedFormId=i.id,n.selectedQuestionId=i.questions[0]?.id||"",n.formsTab="builder",n.formEditorTab="questions",n.modal="",n.formStartTemplateId="",n.formStartTab="blank",H("New form created"),u(),i}function Mr(e){const t=Object.fromEntries(new FormData(e).entries()),a=t.template_id?Oe().find(l=>l.id===t.template_id):null,i=String(t.title||a?.title||"Untitled form").trim()||"Untitled form",s=String(t.description||a?.description||"").trim(),r=a?a.questions.map(l=>({...ft(l),id:`q-${crypto.randomUUID()}`})):[U("short","First question")];Fr(p(),{title:i,description:s,type:Ve.includes(t.type)?t.type:a?.type||"Internal",audience:String(t.audience||"Internal").trim()||"Internal",creator_id:$().profile.member_id||$().profile.id||"basic-quest-user",linked_job_id:String(t.linked_job_id||""),theme_color:ce(p()),background:"clean",submit_label:String(t.submit_label||"Submit").trim()||"Submit",collect_email:t.collect_email==="on",require_approval:t.require_approval==="on",questions:r})}function at(e,t=!0){const a=he(e);a&&(n.selectedFormId=a.id,n.selectedQuestionId=a.questions[0]?.id||"",t&&u())}function H(e="Forms saved locally"){const t=ie();t&&(t.updated_at=new Date().toISOString()),F(Ie,n.forms),F(bt,n.formResponses),n.sync={label:e,mode:"live"}}function Ba(e,t){const a=he(e||n.selectedFormId);a&&(a.status=oa.includes(t)?t:"Draft",n.selectedFormId=a.id,H(`${a.status} locally`),u())}function Ar(e){const t=he(e||n.selectedFormId);if(!t)return;const a=We({...ft(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(i=>({...ft(i),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.forms.unshift(a),n.selectedFormId=a.id,n.selectedQuestionId=a.questions[0]?.id||"",H("Form duplicated"),u()}function xr(e){const t=e||n.selectedFormId;t&&(n.forms=n.forms.filter(a=>a.id!==t),n.formResponses=n.formResponses.filter(a=>a.form_id!==t),n.selectedFormId=de(p())[0]?.id||"",n.selectedQuestionId=Re(p())?.questions[0]?.id||"",n.modal="",H("Form deleted locally"),u())}async function Or(e){const t=e||n.selectedFormId,a=`${window.location.origin}${g(d("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),n.sync={label:"Form link copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}u()}function Tr(e){const t=JSON.stringify({company_id:e,forms:de(e),responses:zi(e)},null,2);Vr(`${e}-forms-export.json`,t,"application/json")}function Gi(e){const t=ie();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),F(Ie,n.forms))}function Zi(e){const t=ie(),a=e.closest("[data-question-id]"),i=t?.questions.find(s=>s.id===a?.dataset.questionId);if(!(!t||!i)){if(n.selectedQuestionId=i.id,e.matches("[data-question-option]")){const s=Number(e.dataset.questionOption);i.options[s]=e.value}else{const s=e.dataset.questionField;if(s==="required")i.required=e.checked;else if(s==="type"){i.type=e.value,Ne(i)&&!i.options.length&&(i.options=["Option 1","Option 2"]),Ne(i)||(i.options=[]),H("Question updated"),u();return}else s&&(i[s]=e.value)}t.updated_at=new Date().toISOString(),F(Ie,n.forms)}}function Er(e="multiple"){const t=ie();if(!t)return;const a=U(e,Je.find(([i])=>i===e)?.[1]||"New question");t.questions.push(a),n.selectedQuestionId=a.id,H("Question added"),u()}function Pr(e){const t=ie(),a=t?.questions.find(r=>r.id===e);if(!t||!a)return;const i=t.questions.findIndex(r=>r.id===e),s=At({...ft(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(i+1,0,s),n.selectedQuestionId=s.id,H("Question duplicated"),u()}function Rr(e){const t=ie();t&&(t.questions=t.questions.filter(a=>a.id!==e),n.selectedQuestionId=t.questions[0]?.id||"",H("Question deleted"),u())}function Nr(e,t){const a=ie();if(!a||!t)return;const i=a.questions.findIndex(l=>l.id===e),s=i+t;if(i<0||s<0||s>=a.questions.length)return;const[r]=a.questions.splice(i,1);a.questions.splice(s,0,r),n.selectedQuestionId=e,H("Question moved"),u()}function Lr(e){const a=ie()?.questions.find(i=>i.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),H("Option added"),u())}function Ur(e,t){const i=ie()?.questions.find(s=>s.id===e);!i||t<0||(i.options.splice(t,1),i.options.length||i.options.push("Option 1"),H("Option removed"),u())}function Qr(e){const t=he(e.dataset.formId);if(!t)return;const a=new FormData(e),i={};t.questions.forEach(s=>{const r=`answer:${s.id}`,l=a.getAll(r).filter(c=>c instanceof File?c.name:String(c||"").trim());i[s.id]=l.length>1?l.map(c=>c instanceof File?c.name:c):l[0]instanceof File?l[0].name:l[0]||""}),n.formResponses.unshift(ha({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||$().profile.full_name||"Preview submitter"),answers:i,created_at:new Date().toISOString()})),n.formsTab="responses",n.modal="",H("Preview response saved"),Y(t.require_approval?"approval.form":"form.response",t.require_approval?"Form approval ready":"Form response saved",`${Q()} saved a response for ${t.title}.`,d("forms",{form_id:t.id,tab:"responses"},t.company_id),"form_response",t.id,t.company_id),u()}function Vr(e,t,a="text/plain"){const i=new Blob([t],{type:a}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=e,r.click(),URL.revokeObjectURL(s)}function ft(e){return JSON.parse(JSON.stringify(e))}function ee(e){return Array.from(new Set(e.map(t=>String(t||"").trim()).filter(Boolean)))}function ne(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||C(e)}function Ke(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||C(e)}function te(e){return sa.find(([t])=>t===e)?.[1]||n.driveFolders.find(t=>t.id===e)?.name||C(e||"Shared")}function Jr(e=p()){return sa.map(([t,a])=>[t,a]).concat(Ee(e).map(t=>[t.id,t.name]))}function Br(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Xi(e){const t=_e(e);return t==="Image"?"ti-photo":t==="PDF"?"ti-file-type-pdf":t==="Archive"?"ti-file-zip":t==="Excel"?"ti-file-spreadsheet":t==="Word"?"ti-file-type-doc":t==="PowerPoint"?"ti-file-type-ppt":t==="Text"?"ti-file-text":"ti-file-description"}function C(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function j(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function O(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function Ha(e){if(!e)return"No time";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(t)}function Hr(e){const t=new Date(e);if(!e||Number.isNaN(t.getTime()))return"just now";const a=Math.max(0,Math.floor((Date.now()-t.getTime())/1e3));if(a<45)return"just now";const i=Math.floor(a/60);if(i<60)return`${i}m ago`;const s=Math.floor(i/60);if(s<24)return`${s}h ago`;const r=Math.floor(s/24);return r<7?`${r}d ago`:O(e)}function it(e){const t=Math.max(0,Math.floor(T(e)/1e3)),a=Math.floor(t/3600),i=Math.floor(t%3600/60);return a?`${a}h ${String(i).padStart(2,"0")}m`:`${i}m`}function Ca(e){const t=T(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**i).toFixed(i?1:0)} ${a[i]}`}function Le(e){return(t,a)=>Date.parse(a[e]||a.updated_at||a.created_at||0)-Date.parse(t[e]||t.updated_at||t.created_at||0)}function en(e){if(!e)return 0;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?0:Math.floor((Nt().getTime()-t.getTime())/864e5)}function za(e){if(!e)return 999;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?999:Math.floor((t.getTime()-Nt().getTime())/864e5)}function zr(e=p()){const t=(It(Ct(e)||{short_name:e})||e||"QH").replace(/[^a-z]/gi,"").slice(0,2).toUpperCase()||"QH",a=ve(e).length+1;return`${t}-${String(1e3+a)}`}function Nt(){const e=new Date;return e.setHours(0,0,0,0),e}function Wr(e,t){return`${tn(e,t)}%`}function tn(e,t){const a=T(t);return a?Math.max(0,Math.min(100,Math.round(T(e)/a*100))):0}function Ce(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function Ia(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function Z(e,t){return e.reduce((a,i)=>a+T(i[t]),0)}function T(e){const t=Number(e);return Number.isFinite(t)?t:0}function Fa(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||""))}function Wt(e){const t=String(e||"").trim();return Fa(t)||/^[0-9a-f]{8,}$/i.test(t)||/^user[_-]?[0-9a-f-]{8,}$/i.test(t)}function Yr(e){const t=String(e||"").trim();return t?t.slice(0,8):""}function y(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(T(e))}function me(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function M(e,t){const a=me(e,t);return Array.isArray(a)&&a.length?a:t}function F(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function o(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
