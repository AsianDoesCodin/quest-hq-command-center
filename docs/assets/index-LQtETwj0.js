(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const Pe={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},Oe=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),Ne="quest-hq-local-session",Ki="quest-hq-local-profile",qa="quest-hq-job-cache-v2",Ma="quest-hq-task-cache-v1",Aa="quest-hq-file-cache-v1",Fa="quest-hq-drive-folder-cache-v1",Ta="quest-hq-team-cache-v1",Ea="quest-hq-company-membership-cache-v1",Be="quest-hq-company-form-cache-v1",Ut="quest-hq-company-form-response-cache-v1",Oa="quest-hq-finance-invoice-cache-v1",xa="quest-hq-finance-payment-cache-v1",Ra="quest-hq-finance-expense-cache-v1",Pa="quest-hq-finance-vendor-cache-v1",Lt="quest-hq-time-entry-cache-v1",Qt="quest-hq-active-timer-v1",fe="quest-hq-active-company",Gi="quest-hq-task-view",Zi="quest-hq-drive-view",Vt="quest-hq-notification-cache-v1",Bt="quest-hq-message-conversation-cache-v1",Ht="quest-hq-message-access-cache-v1",Jt="quest-hq-message-cache-v1",zt="quest-hq-message-read-cache-v1",Wt="quest-hq-message-attachment-cache-v1",Yt="quest-hq-calendar-event-cache-v1",It={developer:["*"],admin:["*"],owner:["*"],manager:["jobs.view","jobs.manage","tasks.view","tasks.manage","files.view","files.manage","forms.view","forms.manage","finance.view","team.view","clock.manage","approvals.manage","approvals.view","calendar.view","calendar.manage","calendar.view_team","users.view","settings.view","billing.view","roles.view","messages.view","messages.send","messages.create_group","messages.manage_groups","messages.attach_files"],member:["jobs.view","tasks.view","tasks.manage","files.view","forms.view","time.track","approvals.view","calendar.view","users.view","messages.view","messages.send","messages.attach_files"]},hs=[["jobs.view","View jobs"],["jobs.manage","Create/edit jobs"],["tasks.view","View tasks"],["tasks.manage","Create/edit tasks"],["files.view","View files"],["files.manage","Upload/delete files"],["forms.view","View forms"],["forms.manage","Create/edit forms"],["crm.view","View CRM"],["finance.view","View finance"],["finance.manage","Create/edit finance"],["users.view","View users"],["users.manage","Invite/manage users"],["roles.view","View roles"],["roles.manage","Create/edit roles"],["billing.view","View billing"],["billing.manage","Manage subscription"],["settings.view","View settings"],["settings.manage","Manage settings"],["time.track","Track own time"],["clock.manage","Manage clock dashboard"],["approvals.view","View approvals"],["approvals.manage","Manage approvals"],["calendar.view","View calendar"],["calendar.manage","Create/edit calendar events"],["calendar.view_team","View team calendar"],["messages.view","View messages"],["messages.send","Send messages"],["messages.create_group","Create group chats"],["messages.manage_groups","Manage group chats"],["messages.attach_files","Attach files/images"],["messages.delete_own","Delete own messages"],["messages.delete_any","Delete any messages"],["messages.manage","Manage messages (compatibility)"]],$s={"messages.manage":["messages.manage_groups"],"messages.manage_groups":["messages.manage"]},ot=[{id:"jobs",group:"Workspace",label:"Jobs",icon:"ti-briefcase",symbol:"q-symbol-jobs",status:"live",permission:"jobs.view"},{id:"tasks",group:"Workspace",label:"Tasks",icon:"ti-list-check",symbol:"q-symbol-tasks",status:"live",permission:"tasks.view"},{id:"files",group:"Workspace",label:"Files",icon:"ti-folder",symbol:"q-symbol-files",status:"live",permission:"files.view"},{id:"forms",group:"Workspace",label:"Forms",icon:"ti-clipboard-list",symbol:"q-symbol-forms",status:"live",permission:"forms.view"},{id:"analytics",group:"Workspace",label:"Analytics",icon:"ti-chart-bar",symbol:"q-symbol-analytics",status:"live",permission:"jobs.view"},{id:"crm",group:"Workspace",label:"CRM",icon:"ti-users-group",symbol:"q-symbol-crm",status:"live",permission:"crm.view"},{id:"tickets",group:"Workspace",label:"Tickets",icon:"ti-ticket",symbol:"q-symbol-tickets",status:"planned"},{id:"finance",group:"Workspace",label:"Finance",icon:"ti-receipt-dollar",symbol:"q-symbol-finance",status:"live",permission:"finance.view"},{id:"knowledge",group:"Workspace",label:"Knowledge Base",icon:"ti-books",symbol:"q-symbol-knowledge",status:"planned"},{id:"automations",group:"Workspace",label:"Automations",icon:"ti-automation",symbol:"q-symbol-automations",status:"planned"},{id:"templates",group:"Workspace",label:"Templates",icon:"ti-template",symbol:"q-symbol-templates",status:"planned"},{id:"users",group:"Company",label:"Users",icon:"ti-users",symbol:"q-symbol-users",status:"live",permission:"users.view"},{id:"messages",group:"Company",label:"Messages",icon:"ti-messages",symbol:"q-symbol-messages",status:"live",permission:"messages.view"},{id:"settings",group:"Company",label:"Settings",icon:"ti-settings",symbol:"q-symbol-settings",status:"live",permission:"settings.view"},{id:"team-chart",group:"Company",label:"Team chart",icon:"ti-hierarchy-3",symbol:"q-symbol-team-chart",status:"live",permission:"team.view"},{id:"time",group:"Operations",label:"My time",icon:"ti-clock",symbol:"q-symbol-time",status:"live",permission:"time.track"},{id:"calendar",group:"Operations",label:"Calendar",icon:"ti-calendar",symbol:"q-symbol-calendar",status:"live",permission:"calendar.view"},{id:"approvals",group:"Operations",label:"Approvals",icon:"ti-user-check",symbol:"q-symbol-approvals",status:"live",permission:"approvals.view"},{id:"team-workload",group:"Operations",label:"Team workload",icon:"ti-users",symbol:"q-symbol-team-workload",status:"planned"},{id:"clock",group:"Operations",label:"Clock dashboard",icon:"ti-clock-hour-4",symbol:"q-symbol-clock",status:"live",permission:"clock.manage"}],ws={"/admin.html":"settings","/automations.html":"automations","/calendar.html":"calendar","/crm.html":"crm","/dashboards.html":"analytics","/files.html":"files","/finance.html":"finance","/forms.html":"forms","/jobs.html":"jobs","/knowledge.html":"knowledge","/messages.html":"messages","/templates.html":"templates","/tickets.html":"tickets"},lt=["Lead","Site Review","Estimate","Approved","Active","Closed"],Xi=["pipeline","list","profile"],ct=["todo","pending","hold","review","done"],qt=["critical","urgent","high","medium","low"],en=["lead","bid","admin","invoicing","ar","meeting","web_dev"],Kt=["Company event","Job visit / inspection","Estimate appointment","Install / field work","Internal meeting","Personal reminder"],Ss=["Task due","Invoice due","Approval","Time"].concat(Kt),ks=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],Na=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],dt=["Inspection","Client approval","Intake","Survey","Safety","Internal"],Ua=["Draft","Published","Archived"],tn=["Draft","Sent","Partially paid","Paid","Overdue","Void"],an=["Pending","Approved","Paid","Rejected"],nn=["Active","On hold","Inactive"],sn=["ACH","Check","Card","Cash","Wire","Other"],Gt=["Materials","Labor","Subcontractor","Permit","Equipment","Marketing","Software","Travel","Other"],La=["company","role","custom","direct"],mt=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],ut=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],rn=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],on=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"],supervisor_id:""},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"],supervisor_id:"abraham"},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"],supervisor_id:"maya"},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"],supervisor_id:"abraham"},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"],supervisor_id:""}],ln=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],cn=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:v(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:v(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:v(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:v(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:v(5),priority:"medium",urgency:"medium",status:"todo"}],dn=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],mn=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",creator_id:"abraham",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",creator_id:"maya",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",creator_id:"noah",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",creator_id:"lumen-ops",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],un=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],pn=[{id:"vendor-roofing-materials",company_id:"roofing",name:"Valley Roofing Supply",contact_name:"Elena Ortiz",email:"orders@valleyroofingsupply.local",phone:"(480) 555-0190",category:"Materials",status:"Active",notes:"Primary tile, flashing, and underlayment vendor.",created_at:new Date(Date.now()-12096e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"vendor-roofing-dryin",company_id:"roofing",name:"Monsoon Dry-In Crew",contact_name:"R. Alvarez",email:"dispatch@monsoondryin.local",phone:"(602) 555-0144",category:"Subcontractor",status:"Active",notes:"Emergency dry-in support during storm calls.",created_at:new Date(Date.now()-10368e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"vendor-drafting-permits",company_id:"drafting",name:"Permit Runner AZ",contact_name:"Sofia Chen",email:"permits@runneraz.local",phone:"(602) 555-0171",category:"Permit",status:"Active",notes:"Permit filing support for drafting packets.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString()},{id:"vendor-lumen-software",company_id:"lumen",name:"Lumen SaaS Stack",contact_name:"Ops Billing",email:"billing@lumenstack.local",phone:"",category:"Software",status:"Active",notes:"Internal software subscriptions for client onboarding.",created_at:new Date(Date.now()-7776e5).toISOString(),updated_at:new Date(Date.now()-3456e5).toISOString()}],fn=[{id:"invoice-roofing-queen-creek",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",client_name:"Rosales Residence",invoice_number:"QR-1007",status:"Partially paid",issue_date:v(-10),due_date:v(5),subtotal:6800,tax:0,total:6800,notes:"Emergency leak repair billing with deposit received.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"invoice-roofing-mesa-storage",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",client_name:"Mesa Storage Partners",invoice_number:"QR-1008",status:"Sent",issue_date:v(-18),due_date:v(-2),subtotal:18400,tax:0,total:18400,notes:"Estimate packet sent to board for approval.",created_at:new Date(Date.now()-15552e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-drafting-horizon",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",client_name:"Horizon HVAC",invoice_number:"QD-2031",status:"Sent",issue_date:v(-7),due_date:v(14),subtotal:4200,tax:0,total:4200,notes:"Drafting permit package milestone invoice.",created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-lumen-onboarding",company_id:"lumen",job_id:"",client_name:"Lumen Internal Launch",invoice_number:"LM-3004",status:"Draft",issue_date:v(-3),due_date:v(27),subtotal:3200,tax:0,total:3200,notes:"Demo onboarding package used for finance workspace.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()}],gn=[{id:"payment-roofing-queen-creek-deposit",company_id:"roofing",invoice_id:"invoice-roofing-queen-creek",amount:2500,method:"ACH",received_at:v(-4),reference:"ACH-4421",notes:"Deposit received after dry-in visit.",created_at:new Date(Date.now()-3456e5).toISOString()},{id:"payment-drafting-horizon-retainer",company_id:"drafting",invoice_id:"invoice-drafting-horizon",amount:1e3,method:"Check",received_at:v(-1),reference:"CHK-117",notes:"Retainer collected before permit packet completion.",created_at:new Date(Date.now()-864e5).toISOString()}],bn=[{id:"expense-roofing-queen-creek-materials",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",vendor_id:"vendor-roofing-materials",category:"Materials",amount:1850,status:"Approved",spent_at:v(-6),notes:"Underlayment, flashing, and tile replacement materials.",created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-roofing-mesa-permit",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",vendor_id:"vendor-roofing-materials",category:"Permit",amount:620,status:"Pending",spent_at:v(-2),notes:"Permit and document prep allowance.",created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString()},{id:"expense-drafting-horizon-runner",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",vendor_id:"vendor-drafting-permits",category:"Permit",amount:480,status:"Approved",spent_at:v(-3),notes:"Permit runner package review.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-lumen-software-stack",company_id:"lumen",job_id:"",vendor_id:"vendor-lumen-software",category:"Software",amount:540,status:"Paid",spent_at:v(-5),notes:"Client onboarding software stack.",created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()}],_n=[{id:"notification-roofing-task-assigned",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"task.assigned",title:"Task assigned",body:"Abraham assigned Leak inspection photos to you.",href:"/company/roofing/tasks?job_id=roofing-leak&task_id=task-roofing-leak-1",source_type:"task",source_id:"task-roofing-leak-1",read_at:"",created_at:new Date(Date.now()-7*6e4).toISOString()},{id:"notification-roofing-task-priority",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"task.priority",title:"Task priority changed",body:"Shan set priority to Urgent on HOA board approval package.",href:"/company/roofing/tasks?job_id=roofing-mesa&task_id=task-roofing-mesa-1",source_type:"task",source_id:"task-roofing-mesa-1",read_at:"",created_at:new Date(Date.now()-19*6e4).toISOString()},{id:"notification-roofing-approval",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"approval.ready",title:"Approval needs review",body:"Estimate approval is waiting in the company review queue.",href:"/company/roofing/approvals",source_type:"form",source_id:"form-roofing-estimate-approval",read_at:new Date(Date.now()-5*6e4).toISOString(),created_at:new Date(Date.now()-44*6e4).toISOString()},{id:"notification-drafting-task-review",company_id:"drafting",recipient_profile_id:"basic-quest-user",type:"task.status",title:"Task moved to review",body:"Drawing package QA is ready for review.",href:"/company/drafting/tasks?job_id=drafting-package&task_id=task-drafting-package-1",source_type:"task",source_id:"task-drafting-package-1",read_at:"",created_at:new Date(Date.now()-63*6e4).toISOString()},{id:"notification-lumen-finance",company_id:"lumen",recipient_profile_id:"basic-quest-user",type:"finance.invoice",title:"Invoice drafted",body:"Lumen onboarding invoice is ready for payment tracking.",href:"/company/lumen/finance?invoice=invoice-lumen-onboarding",source_type:"invoice",source_id:"invoice-lumen-onboarding",read_at:"",created_at:new Date(Date.now()-92*6e4).toISOString()}],Qa=[{id:"msg-conv-roofing-all",company_id:"roofing",title:"Roofing dispatch",type:"company",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-16*6e4).toISOString(),created_at:new Date(Date.now()-864e5).toISOString(),updated_at:new Date(Date.now()-16*6e4).toISOString()},{id:"msg-conv-roofing-crew",company_id:"roofing",title:"Roofing crew",type:"role",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-52*6e4).toISOString(),created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-52*6e4).toISOString()},{id:"msg-conv-roofing-direct-shan",company_id:"roofing",title:"Shan Kumar",type:"direct",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-8*6e4).toISOString(),created_at:new Date(Date.now()-36e5).toISOString(),updated_at:new Date(Date.now()-8*6e4).toISOString()},{id:"msg-conv-drafting-all",company_id:"drafting",title:"Drafting review",type:"company",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-74*6e4).toISOString(),created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-74*6e4).toISOString()},{id:"msg-conv-lumen-product",company_id:"lumen",title:"Lumen launch room",type:"custom",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-38*6e4).toISOString(),created_at:new Date(Date.now()-216e5).toISOString(),updated_at:new Date(Date.now()-38*6e4).toISOString()}],Va=[{id:"msg-access-roofing-all",conversation_id:"msg-conv-roofing-all",company_id:"roofing",target_type:"all_company",target_id:"all"},{id:"msg-access-roofing-crew-role",conversation_id:"msg-conv-roofing-crew",company_id:"roofing",target_type:"role",target_id:"staff-roofing"},{id:"msg-access-roofing-direct-basic",conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",target_type:"profile",target_id:"basic-quest-user"},{id:"msg-access-roofing-direct-shan",conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",target_type:"profile",target_id:"shan"},{id:"msg-access-drafting-all",conversation_id:"msg-conv-drafting-all",company_id:"drafting",target_type:"all_company",target_id:"all"},{id:"msg-access-lumen-basic",conversation_id:"msg-conv-lumen-product",company_id:"lumen",target_type:"profile",target_id:"basic-quest-user"},{id:"msg-access-lumen-role",conversation_id:"msg-conv-lumen-product",company_id:"lumen",target_type:"role",target_id:"admin-lumen"}],Ba=[{id:"msg-roofing-all-1",conversation_id:"msg-conv-roofing-all",company_id:"roofing",sender_profile_id:"abraham",body:"Morning check: Mesa HOA estimate needs photos before noon.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-48*6e4).toISOString(),updated_at:new Date(Date.now()-48*6e4).toISOString()},{id:"msg-roofing-all-2",conversation_id:"msg-conv-roofing-all",company_id:"roofing",sender_profile_id:"basic-quest-user",body:"Got it. I am linking the job files now.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-16*6e4).toISOString(),updated_at:new Date(Date.now()-16*6e4).toISOString()},{id:"msg-roofing-crew-1",conversation_id:"msg-conv-roofing-crew",company_id:"roofing",sender_profile_id:"shan",body:"@Joshua bring the permit packet when you head to Arroyo.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-52*6e4).toISOString(),updated_at:new Date(Date.now()-52*6e4).toISOString()},{id:"msg-roofing-direct-1",conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",sender_profile_id:"shan",body:"Can you confirm the roof access photo uploaded correctly?",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-8*6e4).toISOString(),updated_at:new Date(Date.now()-8*6e4).toISOString()},{id:"msg-drafting-all-1",conversation_id:"msg-conv-drafting-all",company_id:"drafting",sender_profile_id:"abraham",body:"Horizon package QA is ready. Please keep notes in this thread.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-74*6e4).toISOString(),updated_at:new Date(Date.now()-74*6e4).toISOString()},{id:"msg-lumen-product-1",conversation_id:"msg-conv-lumen-product",company_id:"lumen",sender_profile_id:"basic-quest-user",body:"Finance and CRM are live enough for internal walkthrough. Next focus is polish and permissions.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-38*6e4).toISOString(),updated_at:new Date(Date.now()-38*6e4).toISOString()}],Ha=[{id:"msg-attachment-roofing-photo",conversation_id:"msg-conv-roofing-crew",message_id:"msg-roofing-crew-1",company_id:"roofing",bucket_id:"quest-message-attachments",object_path:"",file_name:"roof-access-photo.jpg",mime_type:"image/jpeg",size_bytes:184e3,preview_url:"",created_at:new Date(Date.now()-52*6e4).toISOString()}],Ja=[{conversation_id:"msg-conv-roofing-all",company_id:"roofing",profile_id:"basic-quest-user",last_read_at:new Date(Date.now()-10*6e4).toISOString()},{conversation_id:"msg-conv-roofing-crew",company_id:"roofing",profile_id:"basic-quest-user",last_read_at:""},{conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",profile_id:"basic-quest-user",last_read_at:""},{conversation_id:"msg-conv-drafting-all",company_id:"drafting",profile_id:"basic-quest-user",last_read_at:""},{conversation_id:"msg-conv-lumen-product",company_id:"lumen",profile_id:"basic-quest-user",last_read_at:""}],yn=[{id:"calendar-roofing-install",company_id:"roofing",title:"East ridge install window",description:"Crew visit for install prep and materials check.",event_type:"Install / field work",starts_at:`${v(1)}T14:00:00.000Z`,ends_at:`${v(1)}T17:00:00.000Z`,all_day:!1,visibility:"company",linked_type:"job",linked_id:"job-east-ridge",assigned_profile_id:"abraham",created_by:"basic-quest-user"},{id:"calendar-roofing-estimate",company_id:"roofing",title:"Garage roof estimate",description:"Client walkthrough and estimate appointment.",event_type:"Estimate appointment",starts_at:`${v(3)}T16:00:00.000Z`,ends_at:`${v(3)}T17:00:00.000Z`,all_day:!1,visibility:"company",linked_type:"",linked_id:"",assigned_profile_id:"shan",created_by:"basic-quest-user"},{id:"calendar-drafting-review",company_id:"drafting",title:"Plan review block",description:"Drafting team review for active plan updates.",event_type:"Internal meeting",starts_at:`${v(2)}T15:00:00.000Z`,ends_at:`${v(2)}T15:45:00.000Z`,all_day:!1,visibility:"company",linked_type:"",linked_id:"",assigned_profile_id:"",created_by:"basic-quest-user"},{id:"calendar-lumen-product",company_id:"lumen",title:"Quest HQ product review",description:"Review workspace permissions, messages, and calendar flow.",event_type:"Company event",starts_at:`${v(4)}T18:00:00.000Z`,ends_at:`${v(4)}T19:00:00.000Z`,all_day:!1,visibility:"company",linked_type:"",linked_id:"",assigned_profile_id:"basic-quest-user",created_by:"basic-quest-user"}],n={route:null,session:$e(Ne,null),profileDraft:$e(Ki,null),authReady:!1,authMode:"signin",jobs:S(qa,rn).map(Ue),tasks:S(Ma,cn).map(Le),files:S(Aa,dn).map(tt),driveFolders:S(Fa,[]).map(ci),forms:S(Be,mn).map(yt),formResponses:S(Ut,un).map(di),financeInvoices:S(Oa,fn).map(ua),financePayments:S(xa,gn).map(pa),financeExpenses:S(Ra,bn).map(fa),financeVendors:S(Pa,pn).map(ga),notifications:S(Vt,_n).map(pi),messageConversations:S(Bt,Qa).map(ce),messageAccess:S(Ht,Va).map(Y),messages:S(Jt,Ba).map(ue),messageReads:S(zt,Ja).map(vt),messageAttachments:S(Wt,Ha).map(Se),calendarEvents:S(Yt,yn).map(Qe),timeEntries:$e(Lt,[]),activeTimer:$e(Qt,null),teamMembers:S(Ta,on).map(mi),memberships:S(Ea,ln),profiles:[],subscriptions:[],roles:[],rolePermissions:[],roleAssignments:[],resourceAcl:[],fieldPermissions:[],companyInvites:[],joinRequests:[],auditEvents:[],companies:Zn(ut.map(_t)),activeCompanyId:localStorage.getItem(fe)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",selectedFinanceInvoiceId:"",selectedFinanceExpenseId:"",selectedFinanceVendorId:"",selectedCalendarEventId:"",expandedFormIds:new Set,formStartTemplateId:"",formStartTab:"blank",query:"",fileQuery:"",formQuery:"",crmQuery:"",stageFilter:"all",crmStageFilter:"all",crmOwnerFilter:"all",messageQuery:"",messageFilter:"all",selectedConversationId:"",messageRealtimeChannel:null,messageRealtimeKey:"",calendarScope:"company",calendarView:"week",calendarQuery:"",calendarTypeFilter:"all",calendarCursorDate:v(0),taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(Gi)||"table",driveFolder:"home",driveView:localStorage.getItem(Zi)||"list",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",authMessage:"",toast:null,toastTimer:null,modal:"",accountMenuOpen:!1,notificationMenuOpen:!1,rolePreview:null},Zt=document.getElementById("app");let $a=null;Ds();function Ds(){Sl(),window.addEventListener("popstate",p),document.addEventListener("click",Eo),document.addEventListener("submit",Ro),document.addEventListener("input",rl),document.addEventListener("change",ol),Cs(),p()}async function Cs(){if(n.session?.auth==="local-basic"){vn(),n.authReady=!0;return}const e=E();if(!e?.auth){n.authReady=!0,n.loginError="Supabase auth is unavailable in this browser session.";return}try{const{data:t}=await e.auth.getSession();await Xe(t?.session||null),e.auth.onAuthStateChange((a,i)=>{Xe(i||null).finally(()=>{n.dataLoaded=!1,p()})})}catch(t){n.loginError=t.message||"Unable to initialize Supabase auth."}finally{n.authReady=!0,p()}}async function Xe(e){if(!e?.user){n.session=null,localStorage.removeItem(Ne);return}const t=await js(e.user);n.session=Oc(e,t),Ts(),w(Ne,n.session)}async function js(e){const t={id:e.id,email:e.email||"",full_name:e.user_metadata?.full_name||e.email||"Quest user",role:"member",role_label:"Member",member_id:"",company_ids:[],avatar_url:"",approved:!1,email_verified:!!e.email_confirmed_at},a=E();if(!a)return t;const i=await a.from("profiles").select("*").eq("id",e.id).maybeSingle();return i.error||!i.data?t:ui(i.data,t)}function p(){if(n.route=ea(),!n.authReady){Ms();return}if(qs(n.route)){C("/login?return_url="+encodeURIComponent(Dl()),{replace:!0});return}if(n.route.name==="login"){vo();return}if(As(),n.session?.auth==="supabase"&&n.dataLoaded&&!Ie().length){Is();return}const e=kl(n.route);if(e){C(e,{replace:!0});return}Ml(n.route),Fn(n.route),n.route.params.get("account")==="profile"&&(n.modal="profile"),document.title=`${Cl(n.route)} | ${F(u())} | Quest HQ`,Zt.innerHTML=Os(n.route,wn(n.route))}function Is(){document.title="Company access pending | Quest HQ",Zt.innerHTML=`
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
  `}function qs(e){return e.name==="login"?!1:!n.session}function Ms(){document.title="Loading | Quest HQ",Zt.innerHTML=`
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Secure workspace</small></span>
        </div>
        ${y("Checking secure session...")}
      </section>
    </main>
  `}function As(){n.dataLoaded||n.dataLoading||(n.dataLoading=!0,Fs().catch(()=>{n.sync={label:"Local fallback",mode:"local"}}).finally(()=>{n.dataLoaded=!0,n.dataLoading=!1,W(),p()}))}async function Fs(){if(n.session?.auth==="local-basic"){n.sync={label:"Demo mode",mode:"local"};return}const e=E();if(!e){n.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,i,s,o,l,c,m,b,f,I,V,T,ee,Ke,ve,wi,Si,ki,Di,Ci,ji]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*"),e.from("profiles").select("*"),e.from("company_subscriptions").select("*"),e.from("roles").select("*").order("priority",{ascending:!1}),e.from("role_permissions").select("*"),e.from("user_role_assignments").select("*"),e.from("resource_acl").select("*"),e.from("field_permissions").select("*"),e.from("company_invites").select("*").order("created_at",{ascending:!1}),e.from("company_join_requests").select("*").order("created_at",{ascending:!1}),e.from("audit_events").select("*").order("created_at",{ascending:!1}).limit(100),e.from("message_conversations").select("*").order("last_message_at",{ascending:!1}),e.from("message_conversation_access").select("*"),e.from("messages").select("*").order("created_at",{ascending:!0}).limit(500),e.from("message_attachments").select("*").order("created_at",{ascending:!0}).limit(500),e.from("message_reads").select("*"),e.from("calendar_events").select("*").order("starts_at",{ascending:!0})]);let ae=0;t.error||(n.companies=(t.data||[]).map(_t),ae+=1),a.error||(n.jobs=(a.data||[]).map(Ue),ae+=1),i.error||(n.tasks=(i.data||[]).map(Le),ae+=1),s.error||(n.files=(s.data||[]).map(tt),ae+=1),o.error||(n.teamMembers=(o.data||[]).map(mi),ae+=1),l.error||(n.memberships=(l.data||[]).map(Ot),ae+=1),c.error||(n.profiles=(c.data||[]).map(vs=>ui(vs)),ae+=1),m.error||(n.subscriptions=(m.data||[]).map(yc),ae+=1),b.error||(n.roles=(b.data||[]).map(xe),ae+=1),f.error||(n.rolePermissions=(f.data||[]).map(ja)),I.error||(n.roleAssignments=(I.data||[]).map(Xn)),V.error||(n.resourceAcl=(V.data||[]).map(vc)),T.error||(n.fieldPermissions=(T.data||[]).map(hc)),ee.error||(n.companyInvites=(ee.data||[]).map(xt)),Ke.error||(n.joinRequests=(Ke.data||[]).map(es)),ve.error||(n.auditEvents=ve.data||[]),wi.error||(n.messageConversations=(wi.data||[]).map(ce)),Si.error||(n.messageAccess=(Si.data||[]).map(Y)),ki.error||(n.messages=(ki.data||[]).map(ue)),Di.error||(n.messageAttachments=(Di.data||[]).map(Se)),Ci.error||(n.messageReads=(Ci.data||[]).map(vt)),ji.error||(n.calendarEvents=(ji.data||[]).map(Qe)),n.sync=ae?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function E(){return!window.supabase||typeof window.supabase.createClient!="function"?null:($a||($a=window.supabase.createClient(Pe.supabaseUrl,Pe.supabaseKey)),$a)}function Ts(){n.jobs=[],n.tasks=[],n.files=[],n.driveFolders=[],n.forms=[],n.formResponses=[],n.financeInvoices=[],n.financePayments=[],n.financeExpenses=[],n.financeVendors=[],n.notifications=[],n.messageConversations=[],n.messageAccess=[],n.messages=[],n.messageReads=[],n.messageAttachments=[],n.calendarEvents=[],n.timeEntries=[],n.activeTimer=null,n.teamMembers=[],n.memberships=[],n.profiles=[],n.subscriptions=[],n.roles=[],n.rolePermissions=[],n.roleAssignments=[],n.resourceAcl=[],n.fieldPermissions=[],n.companyInvites=[],n.joinRequests=[],n.auditEvents=[],n.companies=[],n.sync={label:"Loading secure workspace...",mode:"loading"}}function vn(){n.jobs=S(qa,rn).map(Ue),n.tasks=S(Ma,cn).map(Le),n.files=S(Aa,dn).map(tt),n.driveFolders=S(Fa,[]).map(ci),n.forms=S(Be,mn).map(yt),n.formResponses=S(Ut,un).map(di),n.financeInvoices=S(Oa,fn).map(ua),n.financePayments=S(xa,gn).map(pa),n.financeExpenses=S(Ra,bn).map(fa),n.financeVendors=S(Pa,pn).map(ga),n.notifications=S(Vt,_n).map(pi),n.messageConversations=S(Bt,Qa).map(ce),n.messageAccess=S(Ht,Va).map(Y),n.messages=S(Jt,Ba).map(ue),n.messageReads=S(zt,Ja).map(vt),n.messageAttachments=S(Wt,Ha).map(Se),n.calendarEvents=S(Yt,yn).map(Qe),n.timeEntries=$e(Lt,[]),n.activeTimer=$e(Qt,null),n.teamMembers=S(Ta,on).map(mi),n.memberships=S(Ea,ln),n.profiles=[],n.subscriptions=[],n.roles=[],n.rolePermissions=[],n.roleAssignments=[],n.resourceAcl=[],n.fieldPermissions=[],n.companyInvites=[],n.joinRequests=[],n.auditEvents=[],n.companies=Zn(ut.map(_t)),n.sync={label:"Demo mode",mode:"local"}}function Es(){return`
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
      <symbol id="q-symbol-company-chat" viewBox="0 0 24 24">
        <path d="M4 18V7l8-4 8 4v11" />
        <path d="M8 18v-6h8v6" />
        <path d="M6.5 21h11M8 8h.1M12 7h.1M16 8h.1" />
      </symbol>
      <symbol id="q-symbol-role-chat" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3.8 18c.8-3 2.2-4.5 4.2-4.5s3.4 1.5 4.2 4.5M13 14.5c2.8.1 4.5 1.6 5.2 4.5" />
      </symbol>
      <symbol id="q-symbol-direct-chat" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20c1-4 3.1-6 6.5-6s5.5 2 6.5 6" />
      </symbol>
      <symbol id="q-message-file" viewBox="0 0 24 24">
        <path d="M7 3.5h7l3 3V20H7V3.5Z" />
        <path d="M14 3.5V7h3M9.5 12h5M9.5 15h4" />
      </symbol>
      <symbol id="q-message-image" viewBox="0 0 24 24">
        <path d="M4.5 6h15v12h-15V6Z" />
        <circle cx="9" cy="10" r="1.4" />
        <path d="m6.8 16 3.6-3.5 2.3 2.1 2.1-2.7 2.8 4.1" />
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
      <symbol id="q-symbol-calendar" viewBox="0 0 24 24">
        <path d="M5 5.5h14v14H5v-14Z" />
        <path d="M8 3.5v4M16 3.5v4M5 9.5h14M8.5 13h2M13.5 13h2M8.5 16h2" />
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
  `}function K(e,t="symbol-icon"){return`<svg class="${r(t)}" aria-hidden="true" focusable="false"><use href="#${r(e)}"></use></svg>`}function hn(e=n.route?.section||"jobs"){return ot.find(t=>t.id===e)?.symbol||"q-empty"}function $n(e){const t=String(e||"").toLowerCase();return t.includes("job")||t.includes("pipeline")?"q-symbol-jobs":t.includes("task")||t.includes("review")?"q-symbol-tasks":t.includes("file")?"q-symbol-files":t.includes("form")?"q-symbol-forms":t.includes("account")||t.includes("customer")||t.includes("member")||t.includes("user")||t.includes("lead")?"q-symbol-crm":t.includes("invoice")||t.includes("collected")||t.includes("expense")||t.includes("net")||t.includes("outstanding")?"q-symbol-finance":t.includes("time")||t.includes("today")||t.includes("days")||t.includes("timer")||t.includes("entries")?"q-symbol-clock":t.includes("approval")||t.includes("access")?"q-symbol-approvals":hn()}function Os(e,t){const a=g(),i=u(),s=xc(a);return`
    <div class="quest-app" data-route="${r(e.name)}">
      ${Es()}
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${_(d("jobs",{},i))}" data-router aria-label="Quest HQ workspace">
            ${K("q-logo","brand-symbol")}
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${r(Pe.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            ${K("q-company")}
            <select data-company-switch aria-label="Active company">
              ${Yn().map(o=>`<option value="${r(o.id)}" ${o.id===i?"selected":""}>${r(la(o))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            ${K("q-search")}
            <input data-global-search value="${r(n.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${r(n.sync.mode)}" data-sync-state>${r(n.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          ${xs(i)}
          <div class="account-menu ${n.accountMenuOpen?"open":""}">
            <button class="avatar-button" type="button" data-action="toggle-account-menu" aria-label="Open account menu" aria-expanded="${n.accountMenuOpen?"true":"false"}">
              ${le(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${r(a.profile.full_name)}</strong>
              <span>${r(a.profile.role_label)} - ${r(F(i))}</span>
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
      ${Ps(i)}
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${Ns(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${So(e,a)}
    ${ko()}
  `}function xs(e){const t=Ol(e),a=t.filter(i=>!i.read_at).length;return`
    <div class="notification-center ${n.notificationMenuOpen?"open":""}">
      <button class="icon-button notification-button" type="button" data-action="toggle-notifications" aria-label="Open notifications" aria-expanded="${n.notificationMenuOpen?"true":"false"}">
        <i class="ti ti-bell"></i>
        ${a?`<b>${r(String(Math.min(a,99)))}</b>`:""}
      </button>
      <div class="notification-popover" role="dialog" aria-label="Notifications">
        <div class="notification-head">
          <div><strong>Inbox</strong><span>${r(F(e))}</span></div>
          <button type="button" data-action="mark-all-notifications-read" ${a?"":"disabled"}>Mark all read</button>
        </div>
        <div class="notification-list">
          ${t.slice(0,12).map(i=>Rs(i)).join("")||y(n.session?.auth==="supabase"?"No live notifications yet. Supabase inbox persistence comes after RLS.":"No notifications yet.")}
        </div>
      </div>
    </div>
  `}function Rs(e){return`
    <button class="notification-item ${e.read_at?"read":"unread"}" type="button" data-action="open-notification" data-notification-id="${r(e.id)}">
      <span></span>
      <div>
        <small>${r(e.title)} - ${r(va(e.created_at))}</small>
        <strong>${r(e.body)}</strong>
      </div>
    </button>
  `}function Ps(e){const t=sa(e);return t?`
    <div class="role-preview-banner" style="--role-color:${r(t.color)}">
      <span></span>
      <div>
        <strong>Viewing as ${r(t.name)}</strong>
        <small>Permission preview only. Your real account has not changed.</small>
      </div>
      <button class="btn" type="button" data-action="exit-role-preview"><i class="ti ti-eye-off"></i>Exit preview</button>
    </div>
  `:""}function Ns(e){const t=u();return`
    <div class="company-card">
      <span class="company-card-symbol" style="--company-accent:${r(_e(t))}">${K("q-company")}</span>
      <div>
        <strong>${r(F(t))}</strong>
        <small>${r(bt(t))} workspace</small>
      </div>
    </div>
    ${["Workspace","Company","Operations"].map(a=>Us(a,ot.filter(i=>i.group===a&&Vs(i,t)).map(i=>i.status==="planned"?Qs(i.symbol,i.label):Ls(e,d(i.id,{},t),i.symbol,i.label,Bs(i.id,t))))).join("")}
  `}function Us(e,t){return`
    <section class="side-group">
      <div class="side-label">${r(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function Ls(e,t,a,i,s=""){return`
    <a class="side-item ${jl(e,t)?"active":""}" href="${_(t)}" data-router>
      ${K(a)}
      <span>${r(i)}</span>
      ${s!==""?`<b>${r(String(s))}</b>`:""}
    </a>
  `}function Qs(e,t){return`
    <button class="side-item planned" type="button" disabled aria-disabled="true">
      ${K(e)}
      <span>${r(t)}</span>
      <b>Planned</b>
    </button>
  `}function Vs(e,t=u()){return e.status==="planned"?!0:!li(t)&&!["settings","users"].includes(e.id)?!1:A(e.permission||`${e.id}.view`,t)}function Bs(e,t=u()){return e==="jobs"?U(t).length:e==="tasks"?X(t).length:e==="files"?ke(t).length:e==="forms"?ye(t).length:e==="crm"?ra(t).length:e==="finance"?be(t).length:e==="users"?Ce(t).filter(a=>a.status==="active").length:e==="messages"?xl(t)||He(t).length:e==="calendar"?Ql(t).length:e==="time"?Ln(t).focus.length:e==="approvals"?ti(t).length:e==="clock"&&gt(t)?"On":""}function za(e,t){return`
    <nav class="tabbar compact-tabbar" aria-label="${r(e)}">
      ${t.map(([a,i,s])=>`<a class="${s?"active":""}" href="${_(a)}" data-router>${r(i)}</a>`).join("")}
    </nav>
  `}function wn(e){if(e.name==="command")return Ws(u());if(e.name!=="company")return Ti(e.name);const t=e.companyId;if(n.session?.auth==="supabase"&&!Ie().includes(t))return zs(t);const a=ot.find(i=>i.id===e.section);if(a?.status!=="planned"){if(!li(t)&&!["settings","users"].includes(e.section))return Hs(t);if(a?.permission&&!A(a.permission,t))return Js(t,a.permission)}return e.section==="jobs"?Ks(e,t):e.section==="tasks"?tr(e,t):e.section==="files"?rr(e,t):e.section==="users"?vr(e,t):e.section==="settings"?kr(e,t):e.section==="forms"?Mr(t):e.section==="analytics"?Ys(e,t):e.section==="crm"?Qr(e,t):e.section==="finance"?io(e,t):e.section==="messages"?Br(e,t):e.section==="team-chart"?Sr(t):e.section==="time"||e.section==="calendar"||e.section==="approvals"||e.section==="clock"?mo(e,t):Ti(e.section)}function Hs(e){return`
    ${J("Subscription required","This company workspace needs an active or trialing subscription before paid modules can open.",`
      <a class="btn btn-primary" href="${_(d("settings",{tab:"billing"},e))}" data-router><i class="ti ti-credit-card"></i>Billing</a>
    `)}
    <section class="panel">
      ${Q([["Company",F(e)],["Subscription",Gn(e)],["Allowed area","Billing and settings remain available to owners/admins"]])}
    </section>
  `}function Js(e,t){return`
    ${J("Access denied","Your role does not include the permission required for this module.",`
      <a class="btn" href="${_(d("settings",{tab:"roles"},e))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
    `)}
    <section class="panel">
      ${Q([["Company",F(e)],["Required permission",t],["Your role",bt(e)]])}
    </section>
  `}function zs(e){return`
    ${J("Company access denied","This workspace is not in your active company memberships.",`
      <a class="btn" href="${_(d("jobs",{},u()))}" data-router><i class="ti ti-building"></i>Your workspace</a>
      <a class="btn btn-primary" href="${_("/login?mode=request")}" data-router><i class="ti ti-user-plus"></i>Request access</a>
    `)}
    <section class="panel">
      ${Q([["Requested company",F(e)],["Access rule","Active company membership required"],["Your status",oe(e,g().profile.id)?.status?j(oe(e,g().profile.id).status):"No active membership"]])}
    </section>
  `}function Ws(e){const t=U(e),a=X(e),i=a.filter(o=>["critical","urgent"].includes(o.priority)),s=ke(e);return`
    ${J("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${_(d("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${_(d("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    `)}
    ${Rc([["Jobs",t.length],["Open tasks",a.filter(o=>o.status!=="done").length],["Urgent tasks",i.length],["Drive files",s.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${_(d("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(o=>ba(o)).join("")||y("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${Q([["Company",F(e)],["Visible users",De(e).length],["Auth mode","Supabase auth"],["RLS status","Ready for enforcement"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(o=>Pc(o)).join("")||y("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function Ys(e,t){const a=e.jobId?O(e.jobId):null,i=a?[a]:U(t),s=X(t).filter(f=>!a||f.project_id===a.id),o=ke(t).filter(f=>!a||f.job_id===a.id),l=ye(t).filter(f=>!a||f.linked_job_id===a.id),c=s.filter(f=>f.status!=="done"),m=s.filter(f=>f.status!=="done"&&f.due&&new Date(f.due)<ha()),b=ie(i,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${r(a?a.name:F(t))}</span>
        </div>
        <label>
          <span>Job</span>
          <select data-analytics-job-filter>
            <option value="">All jobs</option>
            ${U(t).map(f=>`<option value="${r(f.id)}" ${a?.id===f.id?"selected":""}>${r(f.name)}</option>`).join("")}
          </select>
        </label>
        <a class="btn" href="${_(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      </section>
      <section class="analytics-grid">
        <article class="panel analytics-score">
          <span>Open work</span>
          <strong>${r(c.length)}</strong>
          <small>${r(m.length)} overdue / ${r(s.filter(f=>f.priority==="urgent"||f.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${r($(b))}</strong>
          <small>${r(i.length)} visible job${i.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${r(o.length+l.length)}</strong>
          <small>${r(o.length)} files / ${r(l.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${r(qd(s.filter(f=>f.status==="done").length,s.length))}</strong>
          <small>${r(s.filter(f=>f.status==="done").length)} done of ${r(s.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${i.map(f=>`
              <a class="analytics-row" href="${_(d("analytics",{job_id:f.id},t))}" data-router>
                <span><strong>${r(f.name)}</strong><small>${r(f.client_name||F(t))}</small></span>
                <span>${r(f.stage)}</span>
                <span>${r(da(f.id))}</span>
                <span>${r(Et(f.id))}</span>
                <span>${r($(f.estimate_total))}</span>
              </a>
            `).join("")||y("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${ct.map(f=>{const I=s.filter(V=>V.status===f).length;return`<div><span>${r(me(f))}</span><b><i style="width:${r(_s(I,s.length))}%"></i></b><strong>${r(I)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${s.filter(f=>f.status!=="done").sort((f,I)=>Ve(I.priority)-Ve(f.priority)).slice(0,8).map(f=>ba(f)).join("")||y("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function Ks(e,t){const a=Il(e.params.get("tab")),i=we();return`
    ${J("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${_(d("files",i?{job_id:i.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(lt).map(s=>`<option value="${r(s)}" ${n.stageFilter===s?"selected":""}>${r(s==="all"?"All stages":s)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${i?r(i.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${Xi.map(s=>`<a class="${s===a?"active":""}" href="${_(d("jobs",{tab:s,...i?{job_id:i.id}:{}},t))}" data-router>${r(ql(s))}</a>`).join("")}
    </nav>
    ${Gs(a,t,i)}
  `}function Gs(e,t,a){return e==="pipeline"?Ii(t):e==="list"?Zs(t):e==="profile"?Xs(t,a):Ii(t)}function Ii(e){const t=Un(e);return`
    <section class="job-board">
      ${lt.map(a=>{const i=t.filter(s=>s.stage===a);return`
          <article class="job-lane">
            <h2><span>${r(a)}</span><b>${i.length}</b></h2>
            ${i.map(s=>Nc(s)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function Zs(e){const t=Un(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===n.selectedJobId?"active":""}" type="button" data-select-job="${r(a.id)}">
            <span><strong>${r(a.name)}</strong><small>${r(a.client_name||"No client")} - ${r(a.site_address||"No address")}</small></span>
            <span>${r(a.stage)}</span>
            <span>${fi(a.priority)}</span>
            <span>${r(a.owner_name||"Unassigned")}</span>
            <span>${r(da(a.id))}</span>
            <span>${$(a.estimate_total)}</span>
          </button>
        `).join("")||y("No jobs match this view.")}
      </div>
    </section>
  `}function Xs(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${r(F(e))} - ${r(t.job_type)}</span>
          <h2>${r(t.name)}</h2>
          <p>${r(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${Q([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",$(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${_(d("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${r(t.id)}">Edit job</button>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${wt(d("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${da(t.id)} linked tasks`)}
          ${wt(d("files",{job_id:t.id},e),"ti-folder","Files",`${Et(t.id)} files`)}
          ${wt(d("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${wt(d("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:y("Create a job to see the profile workspace.")}function er(e,t){const a=t||Cc(e);return`
    <form class="job-editor" data-job-form>
      <input type="hidden" name="id" value="${r(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${D("Workspace name","name",a.name,!0)}
      ${R("Company","company_id",e,Yn().map(i=>[i.id,la(i)]))}
      ${D("Client","client_name",a.client_name)}
      ${D("Contact","contact_name",a.contact_name)}
      ${D("Account owner","owner_name",a.owner_name)}
      ${D("Job type","job_type",a.job_type||"Roofing")}
      ${R("Business status","stage",a.stage||"Lead",lt.map(i=>[i,i]))}
      ${R("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(i=>[i,i]))}
      ${D("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${D("Invoice total","invoice_total",a.invoice_total||0,!1,"number")}
      ${D("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${pe("Scope","scope",a.scope,"span-2")}
      ${pe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${r(t.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function tr(e,t){const a=e.jobId?O(e.jobId):null,i=gc(t,a?.id);return`
    ${J(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${_(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${_(d("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${ar(t,a)}
    <section class="task-layout task-layout-flat">
      <article class="panel task-main">
        ${n.taskView==="board"?nr(t,i):ir(t,i)}
      </article>
    </section>
  `}function ar(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${U(e).map(i=>`<option value="${r(i.id)}" ${t?.id===i.id?"selected":""}>${r(i.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(ct).map(i=>`<option value="${r(i)}" ${n.taskStatusFilter===i?"selected":""}>${r(i==="all"?"All statuses":me(i))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(qt).map(i=>`<option value="${r(i)}" ${n.taskPriorityFilter===i?"selected":""}>${r(i==="all"?"All priorities":j(i))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${n.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${n.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function ir(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===n.selectedTaskId?"active":""}" type="button" data-select-task="${r(a.id)}">
          <span><strong>${r(a.title)}</strong><small>${r(a.description||Ye(a.type))}</small></span>
          <span>${r(O(a.project_id)?.name||"Company task")}</span>
          <span>${r(B(a.assignee_id))}</span>
          <span>${ts(a.priority)}</span>
          <span>${as(a.status)}</span>
          <span>${M(a.due)}</span>
        </button>
      `).join("")||y("No tasks match this workspace view.")}
    </div>
  `}function nr(e,t){return`
    <div class="task-board">
      ${ct.map(a=>{const i=t.filter(s=>s.status===a);return`
          <section class="task-column">
            <h2><span>${r(me(a))}</span><b>${i.length}</b></h2>
            ${i.map(s=>`
              <button class="task-card priority-${r(s.priority)}" type="button" data-select-task="${r(s.id)}">
                <strong>${r(s.title)}</strong>
                <span>${r(O(s.project_id)?.name||F(e))}</span>
                <small>${r(B(s.assignee_id))} - ${M(s.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function sr(e,t){return t?`
    <div class="section-head">
      <div><h2>${r(t.title)}</h2><p>${r(O(t.project_id)?.name||F(e))}</p></div>
      <a class="btn" href="${_(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${Q([["Status",me(t.status)],["Priority",j(t.priority)],["Type",Ye(t.type)],["Assignee",B(t.assignee_id)],["Due",M(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${r(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${y("No task selected.")}
    `}function qi(e,t,a){const i=a||jc(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${r(a?i.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${D("Task title","title",i.title,!0)}
      ${R("Job","project_id",i.project_id||"",[["","Company-level task"]].concat(U(e).map(s=>[s.id,s.name])))}
      ${R("Status","status",i.status,ct.map(s=>[s,me(s)]))}
      ${R("Priority","priority",i.priority,qt.map(s=>[s,j(s)]))}
      ${R("Type","type",i.type,en.map(s=>[s,Ye(s)]))}
      ${R("Assignee","assignee_id",i.assignee_id,De(e).map(s=>[s.id,B(s.id)]))}
      ${D("Due date","due",i.due||v(1),!0,"date")}
      ${pe("Description","description",i.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${r(a.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function rr(e,t){const a=e.params.get("folder")||n.driveFolder||"home";n.driveFolder=a;const i=e.jobId?O(e.jobId):null,s=sd(t,a,i?.id||"");return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div class="drive-location">
            <span class="drive-logo"><i class="ti ti-folder"></i></span>
            <div>
              <strong>${r(i?i.name:"Company Drive")}</strong>
              <small>${r(i?`${i.client_name||F(t)} file workspace`:`${F(t)} file manager`)}</small>
            </div>
          </div>
          <label class="drive-search">
            <i class="ti ti-search"></i>
            <input data-file-search value="${r(n.fileQuery)}" placeholder="Search drive" />
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
                <a href="${_(d("files",{},t))}" data-router>${r(F(t))}</a>
                ${a!=="home"?nd(t,a,i):""}
                ${i?`<span>/</span><strong>${r(i.name)}</strong>`:""}
              </nav>
              <div class="drive-compact-controls">
                <div class="segmented" role="group" aria-label="Drive view">
                  <button class="${n.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Icons</button>
                  <button class="${n.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list-details"></i>Details</button>
                </div>
              </div>
            </section>
            ${or(t,a,i,s)}
          </div>
        </div>
      </section>
    </section>
  `}function or(e,t,a,i){const s=ad(e,t,a),o=s.map(c=>({kind:"folder",...c})).concat(i.map(c=>({kind:"file",file:c}))),l=a?a.name:t==="home"?"This folder":se(t);return`
    <section class="drive-section-title">
      <div><h3>${r(l)}</h3><span>${s.length} folder${s.length===1?"":"s"} / ${i.length} file${i.length===1?"":"s"}</span></div>
    </section>
    ${n.driveView==="list"?lr(o):cr(o)}
  `}function lr(e){return`
    <div class="explorer-table" role="table" aria-label="File explorer">
      <div class="explorer-head" role="row">
        <span>Name</span>
        <span>Date modified</span>
        <span>Type</span>
        <span>Size</span>
      </div>
      ${e.map(t=>t.kind==="folder"?mr(t):ur(t.file)).join("")||y("This folder is empty.")}
    </div>
  `}function cr(e){return`
    <section class="drive-folder-grid explorer-grid">
      ${e.map(t=>t.kind==="folder"?dr(t):fr(t.file)).join("")||y("This folder is empty.")}
    </section>
  `}function dr(e){return`
    <a class="drive-folder-card explorer-folder" href="${r(e.href)}" data-router>
      <span class="drive-folder-icon"><i class="ti ${r(e.icon||"ti-folder")}"></i></span>
      <strong>${r(e.name)}</strong>
      <em>${r(e.countLabel||"0 items")}</em>
    </a>
  `}function mr(e){return`
    <a class="explorer-row folder-row-live" href="${r(e.href)}" data-router role="row">
      <span class="explorer-name"><span class="file-type folder"><i class="ti ${r(e.icon||"ti-folder")}"></i></span><strong>${r(e.name)}</strong></span>
      <span>${r(e.updatedLabel||"")}</span>
      <span>Folder</span>
      <span>${r(e.countLabel||"")}</span>
    </a>
  `}function ur(e){return`
    <button type="button" class="explorer-row ${e.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${r(e.id)}" role="row">
      <span class="explorer-name">${pr(e)}<strong>${r(e.file_name)}</strong></span>
      <span>${M(e.updated_at||e.created_at)}</span>
      <span>${r(Me(e))}</span>
      <span>${$i(e.size_bytes)}</span>
    </button>
  `}function pr(e){return`
    <span class="file-type ${r(vi(e))}">
      <i class="ti ${r(gs(e))}"></i>
      <small>${r(rd(e))}</small>
    </span>
  `}function fr(e){return`
    <button type="button" class="file-card-live ${e.id===n.selectedFileId?"active":""}" data-action="select-file" data-file-id="${r(e.id)}">
      <span class="file-thumb">${hi(e)}</span>
      <strong>${r(e.file_name)}</strong>
      <span>${r(Me(e))} / ${$i(e.size_bytes)}</span>
    </button>
  `}function gr(e,t){return`
    <section class="file-viewer-layout">
      <div class="file-viewer-stage">
        ${br(e)}
      </div>
      <aside class="file-viewer-meta">
        <div class="file-open-head">
          ${hi(e)}
          <div>
            <strong>${r(e.file_name)}</strong>
            <span>${r(Me(e))} / ${$i(e.size_bytes)}</span>
          </div>
        </div>
        <div class="file-detail-list">
          ${he("Location",se(e.folder))}
          ${he("Job",O(e.job_id)?.name||"Company shared")}
          ${he("Uploaded by",e.uploaded_by_label||"Quest HQ")}
          ${he("Modified",M(e.updated_at||e.created_at))}
          ${he("Storage",e.object_path||"Metadata only")}
        </div>
        <div class="file-detail-actions">
          <button class="btn" type="button" data-action="download-file" data-file-id="${r(e.id)}"><i class="ti ti-download"></i>Download</button>
          <button class="btn danger" type="button" data-action="delete-file" data-file-id="${r(e.id)}"><i class="ti ti-trash"></i>Delete</button>
        </div>
      </aside>
    </section>
  `}function br(e){const t=vi(e);return e.signed_url&&t==="image"?`<img class="file-preview-media" src="${r(e.signed_url)}" alt="" />`:e.signed_url&&t==="pdf"?`<iframe class="file-preview-frame" src="${r(e.signed_url)}" title="${r(e.file_name)}"></iframe>`:e.signed_url&&t==="text"?`<iframe class="file-preview-frame text" src="${r(e.signed_url)}" title="${r(e.file_name)}"></iframe>`:["doc","sheet"].includes(t)&&e.signed_url?`<iframe class="file-preview-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.signed_url)}" title="${r(e.file_name)}"></iframe>`:`
    <div class="file-preview-empty">
      ${hi(e,!0)}
      <strong>${r(Me(e))} preview</strong>
      <p>${r(e.object_path?"Preview will load when a signed file URL is available.":"This is a metadata-only file record. Upload the actual file object to preview it here.")}</p>
      ${e.notes?`<pre>${r(e.notes)}</pre>`:""}
    </div>
  `}function _r(){const e=u(),t=n.route||ea(),a=t.params.get("folder")||n.driveFolder||"home",i=t.jobId?O(t.jobId):null;return q("Drive","New folder",`
    <form class="compact-tool-form" data-folder-form>
      <label><span>Folder name</span><input name="name" placeholder="Folder name" required autofocus /></label>
      <input type="hidden" name="company_id" value="${r(e)}" />
      <input type="hidden" name="parent_key" value="${r(os(a,i))}" />
      <div class="file-upload-log">
        <strong>Location</strong>
        <span>${r(a==="home"?F(e):i?.name||se(a))}</span>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create folder</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"task-modal")}function yr(){const e=u(),t=n.route?.params?.get("folder")||(n.driveFolder==="home"?"shared":n.driveFolder),a=n.route?.jobId||"";return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">${r(F(e))} Drive</div><h2 id="upload-title">Upload files</h2></div>
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
          ${D("Metadata-only file name","file_name","")}
          ${R("Folder","folder",t,Cd(e))}
          ${R("Job","job_id",a,[["","Company shared file"]].concat(U(e).map(i=>[i.id,i.name])))}
          ${R("Category","category",se(t),ks.filter(i=>i!=="All categories").map(i=>[i,i]))}
          ${D("Uploaded by","uploaded_by_label",g().profile.full_name||"Quest HQ")}
          ${pe("Notes","notes","","span-2")}
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
  `}function vr(e,t){const a=Ce(t),i=["members","access"].includes(e.params.get("tab"))?e.params.get("tab"):"members",s=n.joinRequests.filter(m=>m.company_id===t&&m.status==="pending"),o=A("users.manage",t),l=a.filter(m=>m.status==="active"),c=a.filter(m=>m.status!=="active");return`
    ${J("Users","Company members, roles, workers, and access context.",`
      <button class="btn btn-primary" type="button" data-action="open-invite-form" ${o?"":"disabled"}><i class="ti ti-user-plus"></i>Invite user</button>
      <a class="btn" href="${_(d("settings",{tab:"roles"},t))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
      <a class="btn" href="${_(d("settings",{tab:"access"},t))}" data-router><i class="ti ti-settings"></i>Access settings</a>
    `)}
    ${za("Users sections",[[d("users",{tab:"members"},t),"Members",i==="members"],[d("users",{tab:"access"},t),"Access",i==="access"]])}
    ${i==="members"?`
      <section class="metric-grid operations-metrics">
        ${k("Active users",l.length)}
        ${k("Pending",a.filter(m=>m.status==="pending").length+s.length)}
        ${k("Disabled/left",c.filter(m=>m.status!=="pending").length)}
        ${k("Roles",ge(t).length)}
      </section>
      <section class="users-grid">
        ${a.map(m=>`
          <article class="user-card ${m.status!=="active"?"muted":""}">
            ${le({full_name:Mt(m),email:m.email,avatar_url:m.avatar_url},"avatar")}
            <div>
              <strong>${r(Mt(m))}</strong>
              <span>${r(Sn(m))}</span>
              <small>${r(m.role_label)} / ${r(j(m.status))}</small>
            </div>
          </article>
        `).join("")||y("No users assigned to this company yet.")}
      </section>
    `:`
    <section class="dashboard-grid compact-settings-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Member access</h2><p>Assign roles and confirm each user's company status.</p></div>
        </div>
        <div class="access-user-list">
          ${a.map(m=>hr(t,m,o)).join("")||y("No users assigned to this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head">
          <div><h2>Invites</h2><p>Copy a secure invite code or link for a specific email address.</p></div>
          <button class="btn btn-primary" type="button" data-action="open-invite-form" ${o?"":"disabled"}><i class="ti ti-user-plus"></i>Invite</button>
        </div>
        <div class="access-invite-list">
          ${sc(t).map(m=>wr(m,o)).join("")||y("No pending invites.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Approve requests into this company workspace or reject them.</p></div></div>
        <div class="access-request-list">
          ${s.map(m=>$r(m,o)).join("")||y("No pending join requests.")}
        </div>
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Access model</h2><p>Membership is company-scoped; UI hiding is convenience, RLS is the real privacy layer.</p></div></div>
        ${Q([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Supabase Auth + RLS"],["Your role",bt(t)],["Can manage users",o?"Yes":"No"]])}
      </article>
    </section>
    `}
  `}function hr(e,t,a){const i=ge(e),s=t.role_id||Ft(e,t.role)||i[0]?.id||"",o=t.profile_id&&Kn(e,t.profile_id),l=a&&t.profile_id&&!o;return`
    <article class="access-user-row ${t.status!=="active"?"muted":""}">
      ${le({full_name:Mt(t),email:t.email,avatar_url:t.avatar_url},"avatar")}
      <div class="access-user-main">
        <strong>${r(Mt(t))}</strong>
        <span>${r(Sn(t))} / ${r(j(t.status))}</span>
        ${o?'<small class="access-note">Last active Owner - promote another Owner before changing this access.</small>':""}
      </div>
      <form class="access-role-form" data-user-role-form>
        <input type="hidden" name="company_id" value="${r(e)}" />
        <input type="hidden" name="profile_id" value="${r(t.profile_id)}" />
        <select name="role_id" ${l?"":"disabled"}>
          ${i.map(c=>`<option value="${r(c.id)}" ${c.id===s?"selected":""}>${r(c.name)}</option>`).join("")}
        </select>
        <select name="membership_status" ${l?"":"disabled"}>
          ${["active","pending","disabled","left"].map(c=>`<option value="${r(c)}" ${c===t.status?"selected":""}>${r(j(c))}</option>`).join("")}
        </select>
        <button class="btn" type="submit" ${l?"":"disabled"}>Save</button>
      </form>
    </article>
  `}function $r(e,t){const a=e.requested_email||We(e.profile_id)?.email||e.profile_id||"Requester";return`
    <article class="access-request-row">
      <div>
        <strong>${r(a)}</strong>
        <span>${r(e.message||"Access request")} / ${M(e.created_at)}</span>
      </div>
      <div>
        <button class="btn btn-primary" type="button" data-action="approve-join-request" data-request-id="${r(e.id)}" ${t?"":"disabled"}>Approve</button>
        <button class="btn danger" type="button" data-action="reject-join-request" data-request-id="${r(e.id)}" ${t?"":"disabled"}>Reject</button>
      </div>
    </article>
  `}function wr(e,t){const a=ze(e.company_id,e.role_id),i=e.expires_at&&Date.parse(e.expires_at)<Date.now();return`
    <article class="access-invite-row ${i?"muted":""}">
      <div>
        <strong>${r(e.email)}</strong>
        <span>${r(a?.name||"Member")} / ${i?"Expired":`Expires ${M(e.expires_at)}`}</span>
        ${e.token?`<code class="invite-code">${r(e.token)}</code>`:""}
      </div>
      <div>
        <button class="btn" type="button" data-action="copy-invite-code" data-invite-id="${r(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-key"></i>Copy code</button>
        <button class="btn" type="button" data-action="copy-invite-link" data-invite-id="${r(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-link"></i>Copy link</button>
        <button class="btn danger" type="button" data-action="revoke-invite" data-invite-id="${r(e.id)}" ${t?"":"disabled"}>Revoke</button>
      </div>
    </article>
  `}function Mt(e){const t=String(e.name||"").trim(),a=String(e.email||"").trim();if(t&&!Nt(t))return t;if(a&&!Nt(a))return a.split("@")[0].replace(/[._-]+/g," ").replace(/\b\w/g,s=>s.toUpperCase());const i=String(e.role||"").toLowerCase();return i==="owner"?"Workspace owner":i==="admin"?"Workspace admin":i==="developer"?"Developer":`${e.role_label||"Workspace"} user`}function Sn(e){const t=String(e.email||"").trim();if(t&&!Nt(t))return t;const a=String(e.profile_id||e.member_id||"").trim();return a?`ID ${ys(a)}`:"No email on profile"}function Sr(e){const t=De(e),a=t.filter(i=>!i.supervisor_id||!t.some(s=>s.id===i.supervisor_id));return`
    <section class="tool-page team-chart-page">
      ${J("Team chart","Reporting lines, roles, and company coverage for this workspace.",`
        <a class="btn" href="${_(d("users",{},e))}" data-router><i class="ti ti-users"></i>Users</a>
        <a class="btn btn-primary" href="${_(d("settings",{tab:"team"},e))}" data-router><i class="ti ti-settings"></i>Worker settings</a>
      `)}
      <section class="metric-grid operations-metrics">
        ${k("Members",t.length)}
        ${k("Leads",a.length)}
        ${k("Open tasks",X(e).filter(ai).length)}
        ${k("Active timer",gt(e)?"Yes":"No")}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Reporting chart</h2><p>Supervisor links are local/basic until Auth and RLS are restored.</p></div></div>
        <div class="team-tree">
          ${a.map(i=>kn(e,i,t)).join("")||y("No workers assigned.")}
        </div>
      </section>
    </section>
  `}function kn(e,t,a,i=0){const s=a.filter(o=>o.supervisor_id===t.id);return`
    <article class="team-node" style="--depth:${i}">
      <div class="team-node-card">
        ${le({full_name:t.full_name,avatar_url:t.avatar_url},"avatar")}
        <span><strong>${r(t.full_name)}</strong><small>${r(Tt(e,t.id))}</small></span>
        <b>${X(e).filter(o=>o.assignee_id===t.id&&ai(o)).length} open</b>
      </div>
      ${s.length?`<div class="team-node-children">${s.map(o=>kn(e,o,a,i+1)).join("")}</div>`:""}
    </article>
  `}function kr(e,t){const a=oa(t),i=["company","billing","roles","access","team"].includes(e.params.get("tab"))?e.params.get("tab"):"company";return`
    ${J("Settings","Company settings, roles, approvals, and admin controls.","")}
    ${za("Settings sections",[[d("settings",{tab:"company"},t),"Company",i==="company"],[d("settings",{tab:"billing"},t),"Billing",i==="billing"],[d("settings",{tab:"roles"},t),"Roles",i==="roles"],[d("settings",{tab:"access"},t),"Access",i==="access"],[d("settings",{tab:"team"},t),"Workers",i==="team"]])}
    <section class="dashboard-grid compact-settings-grid">
      ${i==="company"?`
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${Q([["Name",F(t)],["Company ID",t],["Color",a?.color||_e(t)],["Visible jobs",U(t).length]])}
      </article>
      `:""}
      ${i==="billing"?Dr(t):""}
      ${i==="roles"?Cr(t):""}
      ${i==="access"?`
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Memberships, invites, and join requests.</p></div></div>
        ${Q([["Auth switch","Enabled"],["Local login","Disabled"],["Isolation","Server-enforced when migration is applied"],["Active memberships",String(n.memberships.filter(s=>s.company_id===t&&s.status==="active").length)],["Disabled/left",String(n.memberships.filter(s=>s.company_id===t&&["disabled","left"].includes(s.status)).length)],["Invites",String(n.companyInvites.filter(s=>s.company_id===t&&s.status==="pending").length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Hybrid onboarding queue for this company.</p></div></div>
        <div class="finance-compact-list">
          ${n.joinRequests.filter(s=>s.company_id===t).map(s=>Re(s.requested_email||s.profile_id,s.message||"Access request",j(s.status),s.created_at)).join("")||y("No pending company approvals.")}
        </div>
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Access history</h2><p>Recent membership, invite, and role changes for this company.</p></div></div>
        <div class="access-audit-list">
          ${rc(t).slice(0,8).map(oc).join("")||y("No access audit events yet.")}
        </div>
      </article>
      `:""}
      ${i==="team"?`
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${De(t).map(s=>`<div><strong>${r(s.full_name)}</strong><span>${r(Tt(t,s.id))}</span></div>`).join("")||y("No workers assigned.")}
        </div>
      </article>
      `:""}
    </section>
  `}function Dr(e){const t=oi(e);return`
    <article class="panel">
      <div class="section-head">
        <div><h2>Subscription</h2><p>$300/month company workspace billing gate.</p></div>
        <button class="btn btn-primary" type="button" data-action="start-checkout"><i class="ti ti-credit-card"></i>Start subscription</button>
      </div>
      ${Q([["Plan","$300/month company workspace"],["Status",Gn(e)],["Stripe customer",t?.stripe_customer_id||"Not connected"],["Renewal / trial",t?.current_period_end||t?.trial_ends_at?M(t.current_period_end||t.trial_ends_at):"Pending"]])}
    </article>
    <article class="panel">
      <div class="section-head"><div><h2>Billing gate</h2><p>Paid modules remain available only for trialing, active, past_due, or grace status.</p></div></div>
      ${Q([["Workspace access",li(e)?"Allowed":"Suspended"],["Finance/files privacy","Requires Auth + RLS"],["Seat billing","Tracked later; not charged in v1"]])}
    </article>
  `}function Cr(e){const t=ge(e),a=sa(e);return`
    <article class="panel span-2">
      <div class="section-head">
        <div><h2>Custom roles</h2><p>Discord-style roles for module, action, record, and field permissions.</p></div>
        <button class="btn btn-primary" type="button" data-action="open-role-form"><i class="ti ti-plus"></i>New role</button>
      </div>
      <div class="roles-list">
        ${t.map(i=>{const s=n.rolePermissions.filter(c=>c.role_id===i.id&&c.effect==="allow").length,o=n.roleAssignments.filter(c=>c.company_id===e&&c.role_id===i.id).length,l=a?.id===i.id;return`
            <article class="role-row" style="--role-color:${r(i.color)}">
              <span></span>
              <div><strong>${r(i.name)}</strong><small>${s||"All"} permissions / ${o} users / priority ${i.priority}</small></div>
              <div class="role-row-actions">
                <b>${i.is_system?"System":"Custom"}</b>
                <button class="btn" type="button" data-action="view-as-role" data-role-id="${r(i.id)}" ${l?"disabled":""}>
                  <i class="ti ${l?"ti-eye-check":"ti-eye"}"></i>${l?"Viewing":"View as role"}
                </button>
              </div>
            </article>
          `}).join("")||y("No custom roles yet.")}
      </div>
    </article>
    <article class="panel">
      ${a?jr(e,a):`
        <div class="section-head"><div><h2>Access preview</h2><p>Pick View as role to check sidebar, route, and action access.</p></div></div>
        ${y("No role preview selected.")}
      `}
    </article>
    <article class="panel span-3">
      <div class="section-head"><div><h2>Field controls</h2><p>Finance and sensitive field masking rules.</p></div></div>
      <div class="finance-compact-list">
        ${n.fieldPermissions.filter(i=>i.company_id===e).map(i=>Re(i.field_key,i.resource_type,i.visibility,"")).join("")||y("No field permission overrides yet.")}
      </div>
    </article>
  `}function jr(e,t){const a=ot.filter(o=>o.status==="live"),i=a.filter(o=>Da(t,o.permission||`${o.id}.view`)),s=a.filter(o=>!Da(t,o.permission||`${o.id}.view`));return`
    <div class="section-head">
      <div><h2>Access preview</h2><p>${r(t.name)} sees ${i.length} of ${a.length} live modules.</p></div>
      <button class="btn" type="button" data-action="exit-role-preview"><i class="ti ti-eye-off"></i>Exit preview</button>
    </div>
    ${Q([["Preview role",t.name],["Allowed modules",i.map(o=>o.label).join(", ")||"None"],["Hidden modules",s.map(o=>o.label).join(", ")||"None"]])}
  `}function Ir(e){return q("Settings","New role",`
    <form class="role-form" data-role-form>
      ${D("Role name","name","")}
      ${D("Color","color","#f0b23b",!1,"color")}
      ${D("Priority","priority","100",!1,"number")}
      <div class="permission-grid span-2">
        ${hs.map(([t,a])=>`
          <label><input type="checkbox" name="permissions" value="${r(t)}" /> <span>${r(a)}</span></label>
        `).join("")}
      </div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create role</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function qr(e){const t=ge(e).filter(i=>i.name.toLowerCase()!=="owner"),a=[["","Member"]].concat(t.map(i=>[i.id,i.name]));return q("Users","Invite user",`
    <form class="role-form" data-invite-form>
      <input type="hidden" name="company_id" value="${r(e)}" />
      ${D("Email","email","",!0,"email")}
      ${R("Role","role_id",lc(e),a)}
      <div class="form-message span-2">Quest creates an invite code you can copy. Email delivery comes after the Resend/SMTP setup.</div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create invite code</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function Mr(e){const t=od(e),a=it(e),i=n.formsTab==="builder"&&a?"builder":n.formsTab==="responses"?"responses":"library";return`
    <section class="tool-page forms-center">
      <div class="forms-command panel">
        <span class="sync-pill live"><i class="ti ti-device-floppy"></i>Local autosafe</span>
        <label>
          <span>Search</span>
          <input data-form-search value="${r(n.formQuery)}" placeholder="Find form, audience, or job" />
        </label>
        <button class="btn" type="button" data-action="open-forms-tools"><i class="ti ti-adjustments"></i>Tools</button>
        <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
      </div>
      ${i==="builder"?"":`
        <nav class="tabbar forms-tabs" aria-label="Forms workspace">
          ${["library","responses"].map(s=>`
            <button class="${i===s?"active":""}" type="button" data-action="set-forms-tab" data-tab="${r(s)}">${r(j(s))}</button>
          `).join("")}
        </nav>
      `}
      ${i==="library"?Ar(e,t,a):""}
      ${i==="builder"?Fr(e,a):""}
      ${i==="responses"?Lr(e,a):""}
    </section>
  `}function Ar(e,t,a){return`
    <section class="forms-home">
      <article class="forms-recent-panel panel">
        <div class="forms-panel-head">
          <div>
            <strong>Recent forms</strong>
            <span>${t.length} visible form${t.length===1?"":"s"} in ${r(F(e))}</span>
          </div>
        </div>
        <div class="forms-list forms-list-cards">
          ${t.map(i=>`
            <article class="form-card ${n.expandedFormIds.has(i.id)?"expanded":""} ${a?.id===i.id?"active":""}">
              <span class="form-card-top">
                <i class="ti ti-clipboard-list"></i>
              </span>
              <span class="form-card-main">
                <strong>${r(i.title)}</strong>
                <span>Created by ${r(ld(i))}</span>
              </span>
              <button class="form-card-toggle" type="button" data-action="toggle-form-card" data-form-id="${r(i.id)}" aria-expanded="${n.expandedFormIds.has(i.id)?"true":"false"}">
                <i class="ti ${n.expandedFormIds.has(i.id)?"ti-chevron-up":"ti-chevron-down"}"></i>
                ${n.expandedFormIds.has(i.id)?"Less":"Details"}
              </button>
              <span class="form-card-meta">
                <small>${r(i.type)} / ${r(i.audience||"Internal")}</small>
                <small>${ds(i)} questions</small>
                <em>${ya(i.id).length} responses</em>
                <em>Updated ${M(i.updated_at)}</em>
                <em>${r(i.status)}</em>
              </span>
              ${n.expandedFormIds.has(i.id)?`
                <div class="form-card-detail">
                  <p>${r(i.description||"No description yet.")}</p>
                  <div class="form-actions">
                    <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${r(i.id)}"><i class="ti ti-pencil"></i>Open builder</button>
                    <button class="btn" type="button" data-action="open-form-preview" data-form-id="${r(i.id)}"><i class="ti ti-eye"></i>Preview</button>
                  </div>
                </div>
              `:""}
            </article>
          `).join("")||y("No forms match this company view.")}
        </div>
      </article>
    </section>
  `}function Fr(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${y("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(n.formEditorTab)?n.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${r(a)}">
      ${Tr(t,a)}
      ${a==="questions"?`
        ${Er(e,t)}
        ${Or(t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${xr(e,t)}
        </article>
      `:""}
      ${a==="responses"?Rr(e,t):""}
    </section>
  `}function Tr(e,t){const a=ya(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${r(e.title)}</strong>
        <span>${r(e.status)} / ${ds(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(i=>`
        <button class="${t===i?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${r(i)}">
          ${i==="questions"?'<i class="ti ti-list-details"></i>':i==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${r(j(i))}
        </button>
      `).join("")}
      <button class="btn" type="button" data-action="open-form-preview" data-form-id="${r(e.id)}"><i class="ti ti-eye"></i>Preview</button>
      <button class="btn" type="button" data-action="open-form-actions" data-form-id="${r(e.id)}"><i class="ti ti-share"></i>Share</button>
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${r(e.id)}">Save</button>
    </div>
  `}function Er(e,t){return`
    <article class="panel form-identity-panel gform-title-card">
      <div class="gform-accent-strip" style="--form-accent:${r(t.theme_color||_e(e))}"></div>
      ${Ge("Form title","title",t.title,!0)}
      ${ms("Form description","description",t.description)}
      <div class="forms-simple-meta">
        <span>${r(t.status)}</span>
        <span>${r(t.type)}</span>
        <span>${r(t.audience||"Internal")}</span>
        <span>${r(O(t.linked_job_id)?.name||"Company level")}</span>
        <span>${r(F(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">Settings</button>
        <button class="btn" type="button" data-action="open-form-preview" data-form-id="${r(t.id)}">Preview</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${r(t.id)}">Publish</button>
      </div>
    </article>
  `}function Or(e){return`
    <article class="question-workbench">
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${mt.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${r(t)}" title="${r(a)}" aria-label="Add ${r(a)} question"><i class="ti ${r(cd(t))}"></i></button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>Pr(t,a)).join("")||y("Add the first question.")}
        </div>
      </div>
    </article>
  `}function xr(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${Ge("Title","title",t.title,!0)}
      ${St("Status","status",t.status,Ua.map(a=>[a,a]))}
      ${ms("Description","description",t.description)}
      ${St("Type","type",t.type,dt.map(a=>[a,a]))}
      ${Ge("Audience","audience",t.audience)}
      ${St("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(U(e).map(a=>[a.id,a.name])))}
      ${Ge("Theme color","theme_color",t.theme_color||_e(e),!1,"color")}
      ${St("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${Ge("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${r(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${r(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${r(t.id)}">Delete</button>
    </div>
  `}function Rr(e,t){const a=ya(t.id),i=a[0]||null;return`
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
            <small>${M(s.created_at)}</small>
          </button>
        `).join("")||y("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${i?us(i):y("No response selected.")}
    </aside>
  `}function Pr(e,t){const a=mt.map(([i,s])=>`<option value="${r(i)}" ${e.type===i?"selected":""}>${r(s)}</option>`).join("");return`
    <article class="question-card ${n.selectedQuestionId===e.id?"active":""}" data-question-id="${r(e.id)}">
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
      ${nt(e)?`
        <div class="question-options">
          ${(e.options||[]).map((i,s)=>`
            <label>
              <span>Option ${s+1}</span>
              <input data-question-option="${s}" value="${r(i)}" />
              <button type="button" data-action="remove-question-option" data-question-id="${r(e.id)}" data-option-index="${s}"><i class="ti ti-x"></i></button>
            </label>
          `).join("")}
          <button class="btn" type="button" data-action="add-question-option" data-question-id="${r(e.id)}"><i class="ti ti-plus"></i>Add option</button>
        </div>
      `:""}
    </article>
  `}function Nr(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${r(t.id)}" style="--form-accent:${r(t.theme_color||_e(e))}">
      <div class="designed-form-header">
        <span>${r(F(e))}</span>
        <h2>${r(t.title)}</h2>
        <p>${r(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>Ur(a)).join("")||y("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${r(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function Ur(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?re(e,`<textarea name="${r(t)}" rows="3" ${a}></textarea>`):e.type==="date"?re(e,`<input name="${r(t)}" type="date" ${a} />`):e.type==="file"?re(e,`<input name="${r(t)}" type="file" ${a} />`):e.type==="yesno"?re(e,`<select name="${r(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?re(e,`<input name="${r(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?re(e,`<select name="${r(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(i=>`<option>${r(i)}</option>`).join("")}</select>`):e.type==="checkbox"?re(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${r(t)}" type="checkbox" value="${r(i)}" /> ${r(i)}</label>`).join("")}</div>`):e.type==="multiple"?re(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${r(t)}" type="radio" value="${r(i)}" ${a} /> ${r(i)}</label>`).join("")}</div>`):re(e,`<input name="${r(t)}" ${a} />`)}function Lr(e,t){const a=t?ya(t.id):cs(e),i=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(s=>`
            <button type="button" class="response-card">
              <strong>${r(Ae(s.form_id)?.title||"Unknown form")}</strong>
              <span>${r(s.submitted_by||s.submitter_email||"Anonymous")}</span>
              <small>${M(s.created_at)}</small>
            </button>
          `).join("")||y("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${i?us(i):y("No response selected.")}
      </aside>
    </section>
  `}function Qr(e,t){const a=mc(t),i=ra(t),s=X(t).filter(c=>c.status!=="done").length,o=ie(U(t),"estimate_total"),l=pc(t);return`
    <section class="tool-page crm-page">
      ${J("CRM","Customers, contacts, and follow-ups built from company jobs.",`
        <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add customer job</button>
      `)}
      <section class="metric-grid crm-metrics">
        ${k("Accounts",i.length)}
        ${k("Open jobs",U(t).filter(c=>c.stage!=="Closed").length)}
        ${k("Open tasks",s)}
        ${k("Pipeline value",$(o))}
      </section>
      <section class="crm-toolbar panel">
        <label>
          <span>Search</span>
          <input data-crm-search value="${r(n.crmQuery)}" placeholder="Find customer, contact, job, or address" />
        </label>
        <label>
          <span>Stage</span>
          <select data-crm-stage-filter>
            ${["all"].concat(lt).map(c=>`<option value="${r(c)}" ${n.crmStageFilter===c?"selected":""}>${r(c==="all"?"All stages":c)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>Owner</span>
          <select data-crm-owner-filter>
            <option value="all" ${n.crmOwnerFilter==="all"?"selected":""}>All owners</option>
            ${l.map(c=>`<option value="${r(c)}" ${n.crmOwnerFilter===c?"selected":""}>${r(c)}</option>`).join("")}
          </select>
        </label>
      </section>
      <section class="panel crm-list-panel">
        <div class="section-head">
          <div><h2>Customers</h2><p>${a.length} visible account${a.length===1?"":"s"} in ${r(F(t))}</p></div>
        </div>
        <div class="data-table crm-table">
          <div class="table-head"><span>Account</span><span>Contact</span><span>Stage</span><span>Owner</span><span>Jobs</span><span>Value</span><span>Updated</span></div>
          ${a.map(c=>`
            <a class="table-row crm-account-row" href="${_(d("crm",{account:c.key},t))}" data-router>
              <span><strong>${r(c.name)}</strong><small>${r(c.subtitle)}</small></span>
              <span>${r(c.primaryContact)}</span>
              <span>${r(c.stage)}</span>
              <span>${r(c.owner)}</span>
              <span>${r(c.jobs.length)}</span>
              <span>${$(c.estimateTotal)}</span>
              <span>${M(c.updatedAt)}</span>
            </a>
          `).join("")||y("No CRM accounts match this view. Add a customer job to start the list.")}
        </div>
      </section>
    </section>
  `}function Vr(e,t){const a=uc(e,t);if(!a)return q("CRM","Customer account",y("This customer is not visible in the current company view."));const i=a.latestJob,s=a.tasks.filter(o=>o.status!=="done");return q("CRM",a.name,`
    <div class="crm-account-modal">
      <section class="crm-modal-summary">
        <div class="section-head">
          <div>
            <h2>${r(a.name)}</h2>
            <p>${r(a.subtitle)}</p>
          </div>
          ${fi(a.priority)}
        </div>
        ${Q([["Primary contact",a.primaryContact],["Owner",a.owner],["Current stage",a.stage],["Pipeline value",$(a.estimateTotal)],["Open tasks",String(s.length)],["Last updated",M(a.updatedAt)]])}
      </section>
      <section class="crm-rollup-grid">
        ${k("Jobs",a.jobs.length)}
        ${k("Files",a.fileCount)}
        ${k("Forms",a.formCount)}
        ${k("Tasks",a.tasks.length)}
      </section>
      <section class="crm-modal-actions">
        ${i?`<a class="btn btn-primary" href="${_(d("jobs",{tab:"profile",job_id:i.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
        ${i?`<a class="btn" href="${_(d("tasks",{job_id:i.id},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>`:""}
        ${i?`<a class="btn" href="${_(d("files",{job_id:i.id},e))}" data-router><i class="ti ti-folder"></i>Files</a>`:""}
        ${i?`<button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${r(i.id)}"><i class="ti ti-pencil"></i>Edit latest job</button>`:""}
        <button class="btn" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Linked jobs</h2><p>Customer workspaces connected to this account.</p></div></div>
        <div class="data-table crm-linked-jobs">
          <div class="table-head"><span>Job</span><span>Stage</span><span>Owner</span><span>Value</span></div>
          ${a.jobs.map(o=>`
            <a class="table-row" href="${_(d("jobs",{tab:"profile",job_id:o.id},e))}" data-router>
              <span><strong>${r(o.name)}</strong><small>${r(o.site_address||"No address")}</small></span>
              <span>${r(o.stage)}</span>
              <span>${r(o.owner_name||"Unassigned")}</span>
              <span>${$(o.estimate_total)}</span>
            </a>
          `).join("")||y("No linked jobs yet.")}
        </div>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Follow-ups</h2><p>Open tasks across linked jobs.</p></div></div>
        <div class="queue-list">
          ${s.slice(0,6).map(o=>ba(o)).join("")||y("No open follow-ups for this customer.")}
        </div>
      </section>
    </div>
  `,"crm-modal")}function Br(e,t){const a=He(t),i=Tn(t);i&&n.selectedConversationId!==i.id&&(n.selectedConversationId=i.id);const s=!!(i&&e.params.get("conversation"));return Yc(t,i?.id||""),i&&_a(i.id,!1),`
    <section class="tool-page messages-page ${s?"thread-open":""}">
      ${J("Messages","Company chats, role rooms, direct messages, and file sharing.",`
        <button class="btn btn-primary" type="button" data-action="new-message-group"><i class="ti ti-message-plus"></i>New group</button>
        <button class="btn" type="button" data-action="new-direct-message"><i class="ti ti-user-plus"></i>Direct message</button>
      `)}
      <section class="messages-shell">
        <aside class="messages-list-panel panel">
          <div class="messages-tools">
            <label>
              <span>Search</span>
              <input data-message-search value="${r(n.messageQuery)}" placeholder="Find chats or messages" />
            </label>
            <div class="segmented message-filter" role="group" aria-label="Message filters">
              ${["all","unread","company","role","custom","direct"].map(o=>`
                <button type="button" data-action="set-message-filter" data-filter="${r(o)}" class="${n.messageFilter===o?"active":""}">${r(o==="all"?"All":j(o))}</button>
              `).join("")}
            </div>
          </div>
          <div class="conversation-list">
            ${a.map(o=>Hr(o,t,i?.id===o.id)).join("")||y("No conversations match this view.")}
          </div>
        </aside>
        <main class="messages-thread-panel panel">
          ${i?Jr(t,i):Kr()}
        </main>
      </section>
      ${n.session?.auth==="local-basic"?Gr():""}
    </section>
  `}function Hr(e,t,a){const i=Je(e.id).at(-1),s=Ga(e.id);return`
    <a class="conversation-row ${a?"active":""}" href="${_(d("messages",{conversation:e.id},t))}" data-router>
      <span class="conversation-mark">${K(rs(e.type))}</span>
      <span>
        <strong>${r(e.title)}</strong>
        <small>${r(i?.body||_i(e)||"No messages yet")}</small>
      </span>
      <em>${i?va(i.created_at):""}</em>
      ${s?`<b>${s}</b>`:""}
    </a>
  `}function Jr(e,t){const a=Je(t.id),i=A("messages.send",e);return`
    <div class="thread-head">
      <a class="btn mobile-thread-back" href="${_(d("messages",{},e))}" data-router><i class="ti ti-arrow-left"></i>Chats</a>
      <div class="thread-title">
        <span>${K(rs(t.type))}</span>
        <div>
          <h2>${r(t.title)}</h2>
          <p>${r(_i(t))}</p>
        </div>
      </div>
      <div class="thread-actions">
        <button class="btn" type="button" data-action="message-search-results"><i class="ti ti-search"></i>Search</button>
        <button class="btn" type="button" data-action="message-details" data-conversation-id="${r(t.id)}"><i class="ti ti-info-circle"></i>Details</button>
        <button class="btn" type="button" data-action="manage-message-chat" data-conversation-id="${r(t.id)}" ${A("messages.manage_groups",e)||A("messages.manage",e)?"":"disabled"}><i class="ti ti-users"></i>Access</button>
      </div>
    </div>
    <div class="message-stream">
      ${a.map(s=>zr(s)).join("")||y("No messages yet. Start the thread with a short update.")}
    </div>
    ${i?Yr(t):y("Your role can view this chat but cannot send messages.")}
  `}function zr(e){const t=e.sender_profile_id===g().profile.id,a=Vc(e.sender_profile_id),i=Pl(e.id);return`
    <article class="message-bubble ${t?"own":""}">
      ${le(a,"avatar message-avatar")}
      <div class="message-card">
        <div class="message-meta">
          <strong>${r(a.full_name||a.email||ca(e.sender_profile_id))}</strong>
          <span>${va(e.created_at)}</span>
          ${t&&A("messages.delete_own",e.company_id)||A("messages.delete_any",e.company_id)?`<button type="button" data-action="delete-message" data-message-id="${r(e.id)}"><i class="ti ti-trash"></i></button>`:""}
        </div>
        ${e.body?`<p>${Jc(e.body)}</p>`:""}
        ${i.length?`<div class="message-attachments">${i.map(Wr).join("")}</div>`:""}
      </div>
    </article>
  `}function Wr(e){const t=e.mime_type.startsWith("image/");return`
    <button class="message-attachment" type="button" data-action="open-message-attachment" data-attachment-id="${r(e.id)}">
      ${e.preview_url&&t?`<img src="${r(e.preview_url)}" alt="" />`:K(t?"q-message-image":"q-message-file")}
      <span><strong>${r(e.file_name)}</strong><small>${r(zc(e.size_bytes))}</small></span>
    </button>
  `}function Yr(e){return`
    <form class="message-composer" data-message-form data-conversation-id="${r(e.id)}">
      <input name="body" placeholder="Message ${r(e.title)}" autocomplete="off" />
      <label class="icon-button message-attach-button" title="Attach file">
        <i class="ti ti-paperclip"></i>
        <input name="attachments" type="file" multiple ${A("messages.attach_files",e.company_id)?"":"disabled"} />
      </label>
      <button class="btn btn-primary" type="submit"><i class="ti ti-send"></i>Send</button>
    </form>
  `}function Kr(e){return`
    <div class="messages-empty-panel">
      ${K("q-symbol-messages")}
      <h2>No chat selected</h2>
      <p>Create a group chat, direct message a teammate, or pick a conversation from the list.</p>
      <div class="head-actions">
        <button class="btn btn-primary" type="button" data-action="new-message-group"><i class="ti ti-message-plus"></i>New group</button>
        <button class="btn" type="button" data-action="new-direct-message"><i class="ti ti-user-plus"></i>Direct message</button>
      </div>
    </div>
  `}function Gr(e){return`
    <div class="message-scenario">
      <button class="btn btn-primary" type="button" data-action="run-message-scenario"><i class="ti ti-sparkles"></i>Demo scenario</button>
      <button class="btn" type="button" data-action="reset-message-demo"><i class="ti ti-refresh"></i>Reset</button>
    </div>
  `}function Zr(e){const t=Ce(e);return q("Messages","New group chat",`
    <form class="message-modal-form" data-message-group-form>
      ${D("Chat name","title","",!0)}
      ${R("Type","type","custom",[["company","Company-wide"],["role","Role-based"],["custom","Custom group"]])}
      ${Dn(e,[])}
      ${Cn(t,[])}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create group</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"message-modal")}function Xr(e){const t=Ce(e).filter(a=>(a.profile_id||a.member_id)!==g().profile.id);return q("Messages","New direct message",`
    <form class="message-modal-form" data-direct-message-form>
      ${R("Person","profile_id",t[0]?.profile_id||t[0]?.member_id||"",t.map(a=>[a.profile_id||a.member_id,a.name]))}
      <label><span>First message</span><textarea name="body" rows="3" placeholder="Start with a short note"></textarea></label>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Start chat</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"message-modal")}function eo(e,t){const a=n.messageConversations.find(l=>l.id===t);if(!a)return q("Messages","Chat access",y("Conversation not found."));const i=Ka(a.id),s=i.filter(l=>l.target_type==="role").map(l=>l.target_id),o=i.filter(l=>l.target_type==="profile").map(l=>l.target_id);return q("Messages","Chat access",`
    <form class="message-modal-form" data-message-access-form data-conversation-id="${r(a.id)}">
      ${D("Chat name","title",a.title,!0)}
      ${R("Type","type",a.type,[["company","Company-wide"],["role","Role-based"],["custom","Custom group"],["direct","Direct message"]])}
      ${Dn(e,s)}
      ${Cn(Ce(e),o)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save access</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"message-modal")}function Dn(e,t=[]){const a=new Set(t);return`
    <section class="message-access-section">
      <div class="message-picker-head">
        <strong>Roles</strong>
        <small>Good for large crews. Access updates when role assignments change.</small>
      </div>
      <div class="message-role-grid">
        ${ge(e).map(i=>`
          <label class="message-role-option" style="--role-color:${r(i.color)}">
            <input type="checkbox" name="role_ids" value="${r(i.id)}" ${a.has(i.id)?"checked":""} />
            <span></span>
            <strong>${r(i.name)}</strong>
          </label>
        `).join("")}
      </div>
    </section>
  `}function Cn(e,t=[]){const a=new Set(t),i=e.slice().sort((s,o)=>Te(s).localeCompare(Te(o)));return`
    <section class="message-access-section">
      <div class="message-picker-head">
        <strong>People</strong>
        <small>${i.length} member${i.length===1?"":"s"} available. Search instead of scrolling huge teams.</small>
      </div>
      <label class="message-member-search">
        <span>Find person</span>
        <input data-message-access-filter placeholder="Search name, email, or role" />
      </label>
      <div class="message-picker-count" data-message-filter-count>${i.length} member${i.length===1?"":"s"}</div>
      <div class="message-selected-strip">
        ${i.filter(s=>a.has(s.profile_id||s.member_id)).slice(0,8).map(s=>`
          <span>${le(Hi(s),"avatar tiny-avatar")} ${r(Te(s))}</span>
        `).join("")||"<small>No individual people selected.</small>"}
      </div>
      <div class="message-people-list">
        ${i.map(s=>{const o=s.profile_id||s.member_id;return`
            <label class="message-person-row" data-message-person-row data-filter-text="${r([Te(s),s.email,s.role_label,s.role].join(" ").toLowerCase())}">
              <input type="checkbox" name="profile_ids" value="${r(o)}" ${a.has(o)?"checked":""} />
              ${le(Hi(s),"avatar message-person-avatar")}
              <span>
                <strong>${r(Te(s))}</strong>
                <small>${r(Bc(s))}</small>
              </span>
            </label>
          `}).join("")||y("No people available in this company yet.")}
      </div>
    </section>
  `}function to(e,t){const a=n.messageConversations.find(i=>i.id===t);return a?q("Messages",a.title,`
    ${Q([["Type",j(a.type)],["Access",_i(a)],["Messages",String(Je(a.id).length)],["Attachments",String(Rl(a.id).length)],["Last message",M(a.last_message_at)]])}
  `,"message-modal"):q("Messages","Chat details",y("Conversation not found."))}function ao(e){const t=n.messageQuery.trim().toLowerCase(),a=He(e).flatMap(i=>Je(i.id).filter(s=>!t||s.body.toLowerCase().includes(t)).map(s=>({conversation:i,message:s})));return q("Messages","Search results",`
    <div class="queue-list">
      ${a.slice(0,30).map(({conversation:i,message:s})=>`
        <a class="queue-row" href="${_(d("messages",{conversation:i.id},e))}" data-router>
          <span><strong>${r(i.title)}</strong><small>${r(s.body||"Attachment")}</small></span>
          <em>${va(s.created_at)}</em>
        </a>
      `).join("")||y("No matching messages. Type in the Messages search box first.")}
    </div>
  `,"message-modal")}function io(e,t){const a=Wn(t),i=be(t),s=Bn(t).slice().sort(st("received_at")).slice(0,5),o=ii(t).slice().sort(st("spent_at")).slice(0,5),l=ni(t).slice().sort((c,m)=>c.name.localeCompare(m.name)).slice(0,5);return`
    <section class="tool-page finance-page">
      ${J("Finance","Invoices, payments, expenses, vendors, and job-linked money in one company view.",`
        <button class="btn btn-primary" type="button" data-action="new-finance-invoice"><i class="ti ti-file-dollar"></i>New invoice</button>
        <button class="btn" type="button" data-action="new-finance-payment"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="new-finance-expense"><i class="ti ti-receipt"></i>Add expense</button>
        <button class="btn" type="button" data-action="new-finance-vendor"><i class="ti ti-building-store"></i>Add vendor</button>
        <a class="btn" href="${_(d("finance",{report:"summary"},t))}" data-router><i class="ti ti-report-analytics"></i>Reports</a>
      `)}
      <section class="metric-grid finance-metrics">
        ${k("Estimated pipeline",$(a.pipeline))}
        ${k("Invoiced",$(a.invoiced))}
        ${k("Collected",$(a.collected))}
        ${k("Outstanding",$(a.outstanding))}
        ${k("Expenses",$(a.expenses))}
        ${k("Net position",$(a.net))}
      </section>
      <section class="panel finance-aging">
        <div class="section-head"><div><h2>AR aging</h2><p>Outstanding invoice balance by due date.</p></div></div>
        <div class="finance-aging-grid">
          ${[["Current",a.aging.current],["1-30",a.aging.thirty],["31-60",a.aging.sixty],["61+",a.aging.overSixty]].map(([c,m])=>`<div><span>${r(c)}</span><strong>${$(m)}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel finance-invoice-panel">
        <div class="section-head"><div><h2>Invoices</h2><p>${i.length} billing record${i.length===1?"":"s"} for ${r(F(t))}</p></div></div>
        <div class="data-table finance-invoice-table">
          <div class="table-head"><span>Invoice</span><span>Status</span><span>Job</span><span>Due</span><span>Total</span><span>Paid</span><span>Balance</span></div>
          ${i.map(c=>`
            <a class="table-row" href="${_(d("finance",{invoice:c.id},t))}" data-router>
              <span><strong>${r(c.invoice_number)}</strong><small>${r(c.client_name||O(c.job_id)?.client_name||"No client")}</small></span>
              <span>${Uc(zn(c))}</span>
              <span>${r(O(c.job_id)?.name||"Company level")}</span>
              <span>${M(c.due_date)}</span>
              <span>${$(c.total)}</span>
              <span>${$(ri(c.id))}</span>
              <span>${$(ne(c.id))}</span>
            </a>
          `).join("")||y("No invoices yet. Create one from a job or customer record.")}
        </div>
      </section>
      <section class="finance-secondary-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Recent payments</h2><p>Money received.</p></div></div>
          <div class="finance-compact-list">
            ${s.map(c=>Re(je(c.invoice_id)?.invoice_number||"Payment",c.method,$(c.amount),c.received_at)).join("")||y("No payments recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Expenses</h2><p>Job and company costs.</p></div></div>
          <div class="finance-compact-list">
            ${o.map(c=>Re(Ca(c.vendor_id),c.category,$(c.amount),c.spent_at,d("finance",{expense:c.id},t))).join("")||y("No expenses recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Vendors</h2><p>Suppliers and subcontractors.</p></div></div>
          <div class="finance-compact-list">
            ${l.map(c=>Re(c.name,c.category,c.status,c.updated_at,d("finance",{vendor:c.id},t))).join("")||y("No vendors recorded.")}
          </div>
        </article>
      </section>
    </section>
  `}function no(e,t){return e.params.get("invoice")?so(t,e.params.get("invoice")):e.params.get("expense")?ro(t,e.params.get("expense")):e.params.get("vendor")?oo(t,e.params.get("vendor")):e.params.get("report")==="summary"?lo(t):""}function so(e,t){const a=je(t);if(!a||a.company_id!==e)return q("Finance","Invoice",y("Invoice not found."));const i=Jn(a.id),s=O(a.job_id);return q("Finance",a.invoice_number,`
    <div class="finance-detail-modal">
      ${Q([["Client",a.client_name||s?.client_name||"No client"],["Status",zn(a)],["Job",s?.name||"Company level"],["Issued",M(a.issue_date)],["Due",M(a.due_date)],["Total",$(a.total)],["Collected",$(ri(a.id))],["Balance",$(ne(a.id))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="new-finance-payment" data-invoice-id="${r(a.id)}"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="edit-finance-invoice" data-invoice-id="${r(a.id)}"><i class="ti ti-pencil"></i>Edit invoice</button>
        ${s?`<a class="btn" href="${_(d("jobs",{tab:"profile",job_id:s.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
      </div>
      <section class="finance-modal-section">
        <div class="section-head"><div><h2>Payments</h2><p>${i.length} payment${i.length===1?"":"s"} applied.</p></div></div>
        <div class="finance-compact-list">
          ${i.map(o=>Re(o.reference||o.method,o.method,$(o.amount),o.received_at)).join("")||y("No payments yet.")}
        </div>
      </section>
      ${a.notes?`<p class="finance-note">${r(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function ro(e,t){const a=Hn(t);if(!a||a.company_id!==e)return q("Finance","Expense",y("Expense not found."));const i=O(a.job_id);return q("Finance",`${Ca(a.vendor_id)} expense`,`
    <div class="finance-detail-modal">
      ${Q([["Vendor",Ca(a.vendor_id)],["Category",a.category],["Status",a.status],["Job",i?.name||"Company level"],["Spent",M(a.spent_at)],["Amount",$(a.amount)]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-expense" data-expense-id="${r(a.id)}"><i class="ti ti-pencil"></i>Edit expense</button>
        ${i?`<a class="btn" href="${_(d("files",{job_id:i.id},e))}" data-router><i class="ti ti-folder"></i>Job files</a>`:""}
      </div>
      ${a.notes?`<p class="finance-note">${r(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function oo(e,t){const a=si(t);if(!a||a.company_id!==e)return q("Finance","Vendor",y("Vendor not found."));const i=ii(e).filter(s=>s.vendor_id===a.id);return q("Finance",a.name,`
    <div class="finance-detail-modal">
      ${Q([["Contact",a.contact_name||"No contact"],["Email",a.email||"No email"],["Phone",a.phone||"No phone"],["Category",a.category],["Status",a.status],["Spend",$(ie(i,"amount"))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-vendor" data-vendor-id="${r(a.id)}"><i class="ti ti-pencil"></i>Edit vendor</button>
        <button class="btn" type="button" data-action="new-finance-expense" data-vendor-id="${r(a.id)}"><i class="ti ti-receipt"></i>Add expense</button>
      </div>
      ${a.notes?`<p class="finance-note">${r(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function lo(e){const t=Wn(e);return q("Finance","Summary report",`
    <div class="finance-report-modal">
      ${Q([["Company",F(e)],["Estimated pipeline",$(t.pipeline)],["Invoiced",$(t.invoiced)],["Collected",$(t.collected)],["Outstanding",$(t.outstanding)],["Expenses",$(t.expenses)],["Net position",$(t.net)]])}
      <div class="finance-aging-grid">
        <div><span>Current</span><strong>${$(t.aging.current)}</strong></div>
        <div><span>1-30</span><strong>${$(t.aging.thirty)}</strong></div>
        <div><span>31-60</span><strong>${$(t.aging.sixty)}</strong></div>
        <div><span>61+</span><strong>${$(t.aging.overSixty)}</strong></div>
      </div>
    </div>
  `,"finance-modal")}function Mi(e,t=null){const a=t||Ic(e);return q("Finance",t?"Edit invoice":"New invoice",`
    <form class="finance-form" data-finance-invoice-form>
      <input type="hidden" name="id" value="${r(a.id)}" />
      ${D("Invoice number","invoice_number",a.invoice_number,!0)}
      ${R("Linked job","job_id",a.job_id||"",[["","Company level"]].concat(U(e).map(i=>[i.id,i.name])))}
      ${D("Client","client_name",a.client_name,!0)}
      ${R("Status","status",a.status,tn.map(i=>[i,i]))}
      ${D("Issue date","issue_date",a.issue_date,!1,"date")}
      ${D("Due date","due_date",a.due_date,!1,"date")}
      ${D("Subtotal","subtotal",a.subtotal,!1,"number")}
      ${D("Tax","tax",a.tax,!1,"number")}
      ${pe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save invoice</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function co(e,t=""){const a=qc(e,t),i=be(e).map(s=>[s.id,`${s.invoice_number} - ${s.client_name||O(s.job_id)?.client_name||"No client"}`]);return q("Finance","Record payment",`
    <form class="finance-form" data-finance-payment-form>
      ${R("Invoice","invoice_id",a.invoice_id,i.length?i:[["","Create an invoice first"]])}
      ${D("Amount","amount",a.amount,!0,"number")}
      ${R("Method","method",a.method,sn.map(s=>[s,s]))}
      ${D("Received","received_at",a.received_at,!1,"date")}
      ${D("Reference","reference",a.reference)}
      ${pe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save payment</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Ai(e,t=null,a=""){const i=t||Mc(e,a),s=ni(e).map(o=>[o.id,o.name]);return q("Finance",t?"Edit expense":"Add expense",`
    <form class="finance-form" data-finance-expense-form>
      <input type="hidden" name="id" value="${r(i.id)}" />
      ${R("Vendor","vendor_id",i.vendor_id,s.length?s:[["","No vendor yet"]])}
      ${R("Linked job","job_id",i.job_id||"",[["","Company level"]].concat(U(e).map(o=>[o.id,o.name])))}
      ${R("Category","category",i.category,Gt.map(o=>[o,o]))}
      ${R("Status","status",i.status,an.map(o=>[o,o]))}
      ${D("Amount","amount",i.amount,!0,"number")}
      ${D("Spent date","spent_at",i.spent_at,!1,"date")}
      ${pe("Notes","notes",i.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save expense</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Fi(e,t=null){const a=t||Ac(e);return q("Finance",t?"Edit vendor":"Add vendor",`
    <form class="finance-form" data-finance-vendor-form>
      <input type="hidden" name="id" value="${r(a.id)}" />
      ${D("Vendor name","name",a.name,!0)}
      ${D("Contact","contact_name",a.contact_name)}
      ${D("Email","email",a.email,!1,"email")}
      ${D("Phone","phone",a.phone)}
      ${R("Category","category",a.category,Gt.map(i=>[i,i]))}
      ${R("Status","status",a.status,nn.map(i=>[i,i]))}
      ${pe("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save vendor</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function mo(e,t){return e.section==="clock"?_o(t):e.section==="calendar"?uo(e,t):e.section==="approvals"?yo(t):bo(t)}function Xt(e,t){return`
    ${za("Operations sections",[[d("time",{},e),"My time",t==="time"],[d("calendar",{},e),"Calendar",t==="calendar"],[d("approvals",{},e),"Approvals",t==="approvals"],[d("clock",{},e),"Clock dashboard",t==="clock"]])}
  `}function uo(e,t){const a=Ll(t),i=ia(t),s=a.filter(m=>m.dateKey===v(0)),o=i.filter(m=>m.mine),l=i.filter(m=>m.source!=="manual").length,c=A("calendar.manage",t);return`
    <section class="tool-page operations-page calendar-page">
      ${J("Calendar","Company schedule built from tasks, approvals, finance due dates, time context, and manual events.",`
        <button class="btn btn-primary" type="button" data-action="open-calendar-event-form"><i class="ti ti-calendar-plus"></i>New event</button>
      `)}
      ${Xt(t,"calendar")}
      <section class="metric-grid operations-metrics calendar-metrics">
        ${k("Today",s.length)}
        ${k("This week",Zl(a).length)}
        ${k("Mine",o.length)}
        ${k("From modules",l)}
      </section>
      <section class="workspace-toolbar calendar-toolbar">
        <div class="segmented" role="group" aria-label="Calendar scope">
          <button class="${n.calendarScope==="company"?"active":""}" type="button" data-action="set-calendar-scope" data-scope="company"><i class="ti ti-building"></i>Company</button>
          <button class="${n.calendarScope==="me"?"active":""}" type="button" data-action="set-calendar-scope" data-scope="me"><i class="ti ti-user"></i>Me</button>
        </div>
        <div class="segmented" role="group" aria-label="Calendar view">
          ${["month","week","list"].map(m=>`<button class="${n.calendarView===m?"active":""}" type="button" data-action="set-calendar-view" data-view="${r(m)}">${r(j(m))}</button>`).join("")}
        </div>
        <label class="wide-control">
          <span>Search</span>
          <input data-calendar-search value="${r(n.calendarQuery)}" placeholder="Find events, jobs, tasks, or people" />
        </label>
        <label>
          <span>Type</span>
          <select data-calendar-type-filter>
            <option value="all">All types</option>
            ${Ss.map(m=>`<option value="${r(m)}" ${n.calendarTypeFilter===m?"selected":""}>${r(m)}</option>`).join("")}
          </select>
        </label>
      </section>
      <section class="calendar-nav">
        <div>
          <button class="btn" type="button" data-action="calendar-prev"><i class="ti ti-chevron-left"></i></button>
          <button class="btn" type="button" data-action="calendar-today">Today</button>
          <button class="btn" type="button" data-action="calendar-next"><i class="ti ti-chevron-right"></i></button>
        </div>
        <strong>${r(tc())}</strong>
      </section>
      <section class="calendar-shell">
        <article class="panel calendar-main">
          ${n.calendarView==="month"?po(t,a):""}
          ${n.calendarView==="week"?fo(t,a):""}
          ${n.calendarView==="list"?go(t,a):""}
        </article>
        <aside class="panel calendar-agenda">
          <div class="section-head"><div><h2>Agenda</h2><p>Next events that match this view.</p></div></div>
          <div class="calendar-agenda-list">
            ${a.slice(0,9).map(In).join("")||y("No calendar items match this view.")}
          </div>
        </aside>
      </section>
      ${c?"":'<p class="small-note">Your role can view the calendar. Manual company events require calendar manage permission.</p>'}
    </section>
  `}function po(e,t){const a=ec(n.calendarCursorDate),i=new Date(`${n.calendarCursorDate}T00:00:00`).getMonth();return`
    <div class="calendar-grid calendar-month-grid">
      ${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(s=>`<div class="calendar-weekday">${s}</div>`).join("")}
      ${a.map(s=>{const o=xn(t,s.key);return`
          <div class="calendar-day ${s.month===i?"":"muted"} ${s.key===v(0)?"today":""}">
            <div class="calendar-day-head"><b>${s.label}</b><span>${o.length||""}</span></div>
            ${o.slice(0,3).map(jn).join("")}
            ${o.length>3?`<small class="calendar-more">+${o.length-3} more</small>`:""}
          </div>
        `}).join("")}
    </div>
  `}function fo(e,t){return`
    <div class="calendar-grid calendar-week-grid">
      ${Rn(n.calendarCursorDate).map(i=>{const s=xn(t,i.key);return`
          <div class="calendar-day ${i.key===v(0)?"today":""}">
            <div class="calendar-day-head"><b>${r(i.name)}</b><span>${r(i.shortDate)}</span></div>
            ${s.map(jn).join("")||'<small class="calendar-empty-day">Open</small>'}
          </div>
        `}).join("")}
    </div>
  `}function go(e,t){const a=ac(t);return`
    <div class="calendar-list">
      ${Object.entries(a).slice(0,18).map(([s,o])=>`
        <section class="calendar-list-day">
          <h3>${r(M(s))}</h3>
          ${o.map(In).join("")}
        </section>
      `).join("")||y("No scheduled work or events.")}
    </div>
  `}function jn(e){return`
    <button class="calendar-pill ${r(ic(e.type))}" type="button" data-action="open-calendar-event" data-event-id="${r(e.id)}">
      <span>${r(Pn(e))}</span>
      <strong>${r(e.title)}</strong>
    </button>
  `}function In(e){return`
    <button class="calendar-agenda-item" type="button" data-action="open-calendar-event" data-event-id="${r(e.id)}">
      <i class="ti ${r(nc(e.type))}"></i>
      <span><strong>${r(e.title)}</strong><small>${r(`${M(e.dateKey)} · ${Pn(e)} · ${e.type}`)}</small></span>
    </button>
  `}function bo(e){const t=Ln(e),a=gt(e);return`
    <section class="tool-page operations-page">
      ${J("My time","A compact personal work queue built from this company's tasks.",`
        <a class="btn" href="${_(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Open tasks</a>
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${Xt(e,"time")}
      <section class="metric-grid operations-metrics">
        ${k("Due today",t.dueToday.length)}
        ${k("Overdue",t.overdue.length)}
        ${k("Open work",t.open.length)}
        ${k("In review",t.review.length)}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel span-2">
          <div class="section-head"><div><h2>Today</h2><p>Due now, overdue, and highest priority work.</p></div></div>
          <div class="queue-list">
            ${t.focus.slice(0,8).map(i=>ba(i)).join("")||y("No time-sensitive tasks for this company.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Workload</h2><p>Simple task-based time view.</p></div></div>
          ${Q([["Company",F(e)],["Assigned to you",String(t.assignedToMe.length)],["Due this week",String(t.thisWeek.length)],["Completed",String(t.done.length)]])}
        </article>
      <article class="panel span-2">
          <div class="section-head"><div><h2>This week</h2><p>Upcoming task commitments.</p></div></div>
          <div class="data-table operations-table">
            <div class="table-head"><span>Task</span><span>Job</span><span>Owner</span><span>Due</span><span>Status</span></div>
            ${t.thisWeek.slice(0,8).map(i=>`
              <a class="table-row" href="${_(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},e))}" data-router>
                <span><strong>${r(i.title)}</strong><small>${r(i.description||Ye(i.type))}</small></span>
                <span>${r(O(i.project_id)?.name||"Company task")}</span>
                <span>${r(B(i.assignee_id))}</span>
                <span>${M(i.due)}</span>
                <span>${as(i.status)}</span>
              </a>
            `).join("")||y("No upcoming tasks this week.")}
          </div>
        </article>
      </section>
    </section>
  `}function _o(e){const t=Qn(e),a=gt(e),i=ha().getTime(),s=i-6*864e5,o=Ui(e,i)+(a?Date.now()-Date.parse(a.started_at):0),l=Ui(e,s)+(a?Date.now()-Date.parse(a.started_at):0);return`
    <section class="tool-page operations-page clock-page">
      ${J("Clock dashboard","Local basic-mode clock tracking for the active company.",`
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${Xt(e,"clock")}
      <section class="metric-grid operations-metrics">
        ${k("Today",Dt(o))}
        ${k("Last 7 days",Dt(l))}
        ${k("Entries",t.length)}
        ${k("Status",a?"Clocked in":"Off clock")}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Active now</h2><p>Current local clock session.</p></div></div>
          ${a?Q([["User",B(a.user_id)],["Started",Pt(a.started_at)],["Task",a.task_title||"General shift"],["Elapsed",Dt(Date.now()-Date.parse(a.started_at))]]):y("Nobody is clocked in on this device.")}
        </article>
        <article class="panel span-2">
          <div class="section-head"><div><h2>Recent entries</h2><p>Local time records for this company.</p></div></div>
          <div class="data-table clock-table">
            <div class="table-head"><span>Entry</span><span>User</span><span>Start</span><span>Duration</span></div>
            ${t.slice(0,10).map(c=>`
              <div class="table-row">
                <span><strong>${r(c.task_title||"General shift")}</strong><small>${r(c.notes||"Clock entry")}</small></span>
                <span>${r(B(c.user_id))}</span>
                <span>${Pt(c.started_at)}</span>
                <span>${Dt(c.duration_ms)}</span>
              </div>
            `).join("")||y("No clock entries yet.")}
          </div>
        </article>
      </section>
    </section>
  `}function yo(e){const t=ti(e),a=t.filter(o=>o.type==="Form approval"),i=t.filter(o=>o.type==="Task review"),s=t.filter(o=>o.type==="Access request");return`
    <section class="tool-page operations-page">
      ${J("Approvals","Company review queue for forms, task handoffs, and access requests.",`
        <a class="btn" href="${_(d("forms",{},e))}" data-router><i class="ti ti-clipboard-list"></i>Forms</a>
        <a class="btn btn-primary" href="${_(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>
      `)}
      ${Xt(e,"approvals")}
      <section class="metric-grid operations-metrics">
        ${k("Open approvals",t.length)}
        ${k("Forms",a.length)}
        ${k("Task reviews",i.length)}
        ${k("Access",s.length)}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Approval queue</h2><p>One calm list instead of a heavy dashboard.</p></div></div>
        <div class="data-table approval-table">
          <div class="table-head"><span>Item</span><span>Type</span><span>Owner</span><span>Status</span><span>Updated</span></div>
          ${t.map(o=>`
            <a class="table-row" href="${_(o.href)}" data-router>
              <span><strong>${r(o.title)}</strong><small>${r(o.meta)}</small></span>
              <span>${r(o.type)}</span>
              <span>${r(o.owner)}</span>
              <span>${r(o.status)}</span>
              <span>${M(o.updatedAt)}</span>
            </a>
          `).join("")||y("No approvals need attention right now.")}
        </div>
      </section>
    </section>
  `}function Ti(e){return`
    ${J(j(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${y("Module data model pending.")}
    </section>
  `}function vo(){document.title="Sign in | Quest HQ";const e=ta(n.route.params.get("return_url")||_(d("jobs",{},P()))),t=String(n.route.params.get("invite")||"").trim();Zt.innerHTML=`
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
          ${$o(e)}
        `}
        ${ho(e)}

      </section>
    </main>
  `}function ho(e){return`
    <section class="demo-mode-box">
      <div>
        <strong>Demo mode</strong>
        <span>Local-only sample workspace. No Supabase database reads or writes.</span>
      </div>
      <button class="btn full" type="button" data-action="start-demo-mode" data-return-url="${r(e)}">Open demo mode</button>
    </section>
  `}function $o(e){const t=String(n.route?.params?.get("invite")||"").trim();return n.authMode==="register"?`
      <form data-auth-register-form>
        <label>${t?"Name / username":"Full name"}<input name="full_name" autocomplete="name" required /></label>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="new-password" minlength="8" required /></label>
        ${t?"":'<label>Company workspace<input name="company_name" placeholder="Example Roofing LLC" required /></label>'}
        <input type="hidden" name="invite_token" value="${r(t)}" />
        <input type="hidden" name="return_url" value="${r(e)}" />
        <button class="btn btn-primary full" type="submit">${t?"Create account and join":"Create secure workspace"}</button>
        ${$t(t?"The invite email must match this account email.":"Owner role, trial subscription, and workspace isolation are created automatically.")}
      </form>
    `:n.authMode==="invite"?`
      <form data-auth-invite-code-form>
        <label>Invite code<input name="invite_code" autocomplete="one-time-code" required placeholder="Paste the code from your admin" /></label>
        <input type="hidden" name="return_url" value="${r(e)}" />
        <button class="btn btn-primary full" type="submit">Continue with invite code</button>
        ${$t("Invite codes are shared by your Owner/Admin. No email delivery required.")}
      </form>
    `:n.authMode==="request"?`
      <form data-auth-request-form>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="current-password" minlength="8" required /></label>
        <label>Company ID<input name="company_id" placeholder="company-workspace-id" required /></label>
        <label>Message<input name="message" placeholder="Tell the admin why you need access" /></label>
        <input type="hidden" name="return_url" value="${r(e)}" />
        <button class="btn btn-primary full" type="submit">Request company access</button>
        ${$t("Requests stay pending until a company Owner/Admin approves them.")}
      </form>
    `:`
    <form data-auth-sign-in-form>
      <label>Email<input name="email" type="email" autocomplete="email" required /></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required /></label>
      <input type="hidden" name="invite_token" value="${r(t)}" />
      <input type="hidden" name="return_url" value="${r(e)}" />
      <button class="btn btn-primary full" type="submit">Sign in</button>
      ${$t("Use the company workspace account your Owner/Admin invited.")}
    </form>
  `}function $t(e){return n.loginError?`<div class="form-message error">${r(n.loginError)}</div>`:`<div class="form-message">${r(n.authMessage||e)}</div>`}function wo(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${le(e,"avatar large")}
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
  `}function So(e,t){if(n.modal==="profile")return wo(t.profile);if(n.modal==="file-upload")return yr();if(n.modal==="folder-new")return _r();if(n.modal==="file-detail")return Io(u());if(n.modal==="forms-tools")return qo(u());if(n.modal==="form-actions")return To(u(),it(u()));if(n.modal==="form-new")return Mo(u());if(n.modal==="form-preview")return Fo(u(),it(u()));if(n.modal==="job-new")return wa(u(),null);if(n.modal==="job-edit")return wa(u(),we());if(n.modal==="finance-invoice-new")return Mi(u(),null);if(n.modal==="finance-invoice-edit")return Mi(u(),je(n.selectedFinanceInvoiceId));if(n.modal==="finance-payment-new")return co(u(),n.selectedFinanceInvoiceId);if(n.modal==="finance-expense-new")return Ai(u(),null,n.selectedFinanceVendorId);if(n.modal==="finance-expense-edit")return Ai(u(),Hn(n.selectedFinanceExpenseId));if(n.modal==="finance-vendor-new")return Fi(u(),null);if(n.modal==="finance-vendor-edit")return Fi(u(),si(n.selectedFinanceVendorId));if(n.modal==="role-new")return Ir(u());if(n.modal==="invite-new")return qr(u());if(n.modal==="message-group-new")return Zr(u());if(n.modal==="message-direct-new")return Xr(u());if(n.modal==="message-access")return eo(u(),n.selectedConversationId);if(n.modal==="message-details")return to(u(),n.selectedConversationId);if(n.modal==="message-search")return ao(u());if(n.modal==="calendar-event-detail")return jo(u());if(n.modal==="calendar-event-new")return Ei(u(),null);if(n.modal==="calendar-event-edit")return Ei(u(),ft(n.selectedCalendarEventId));if(e.name==="company"&&e.section==="crm"&&e.params.get("account"))return Vr(e.companyId,e.params.get("account"));if(e.name==="company"&&e.section==="finance"){const a=no(e,e.companyId);if(a)return a}return e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"?wa(e.companyId,e.jobId?O(e.jobId):we()):e.name==="company"&&e.section==="tasks"?Co(e,e.companyId):""}function ko(){return n.toast?`
    <div class="app-toast ${r(n.toast.mode||"local")}" role="status" aria-live="polite">
      <strong>${r(n.toast.title||"Quest HQ")}</strong>
      <span>${r(n.toast.message||"")}</span>
    </div>
  `:""}function x(e,t="local",a="Not available yet"){n.toastTimer&&clearTimeout(n.toastTimer),n.toast={title:a,message:e,mode:t},p(),n.toastTimer=setTimeout(()=>{n.toast=null,n.toastTimer=null,p()},4200)}function q(e,t,a,i=""){return`
    <div class="modal-overlay">
      <div class="modal-panel ${r(i)}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${r(e)}</div><h2>${r(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function Do(e,t,a){return`
    <div class="modal-overlay drawer-overlay">
      <aside class="modal-panel drawer-panel" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${r(e)}</div><h2>${r(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </aside>
    </div>
  `}function wa(e,t){return q("Jobs",t?"Edit job":"Create job",er(e,t),"wide-modal")}function Co(e,t){const a=e.jobId?O(e.jobId):null,i=e.params.get("task_id")||"",s=i?aa(i):null;return e.params.get("new")==="1"?q("Tasks","New task",qi(t,a,null),"task-modal"):e.params.get("edit")==="1"&&s?q("Tasks","Edit task",qi(t,a,s),"task-modal"):s?Do("Task detail",s.title,sr(t,s)):""}function jo(e){const t=Kl(n.selectedCalendarEventId,e);if(!t)return"";const a=t.source==="manual"?ft(t.sourceId):null,i=[t.href?`<a class="btn btn-primary" href="${_(t.href)}" data-router><i class="ti ti-arrow-right"></i>Open source</a>`:"",a&&t.editable?`<button class="btn" type="button" data-action="edit-calendar-event" data-event-id="${r(a.id)}"><i class="ti ti-pencil"></i>Edit</button>`:"",a&&t.editable?`<button class="btn danger" type="button" data-action="delete-calendar-event" data-event-id="${r(a.id)}"><i class="ti ti-trash"></i>Delete</button>`:""].filter(Boolean).join("");return q("Calendar",t.title,`
    <div class="calendar-detail">
      ${Q([["Type",t.type],["When",t.allDay?M(t.dateKey):`${Pt(t.startsAt)}${t.endsAt&&t.endsAt!==t.startsAt?` - ${Pt(t.endsAt)}`:""}`],["Assigned",t.owner||"Unassigned"],["Source",t.source==="manual"?"Manual event":j(t.source)],["Linked",t.linkLabel||"None"]])}
      ${t.description?`<p>${r(t.description)}</p>`:""}
      <div class="modal-actions">${i||'<span class="small-note">This derived item opens from its source module.</span>'}</div>
    </div>
  `,"calendar-modal")}function Ei(e,t){const a=t||Fc(e),i=a.linked_type==="job"?a.linked_id:"";return q("Calendar",t?"Edit event":"New event",`
    <form class="calendar-form" data-calendar-event-form>
      <input type="hidden" name="id" value="${r(t?.id||"")}" />
      ${D("Title","title",t?a.title:"",!0)}
      ${R("Type","event_type",a.event_type,Kt.map(s=>[s,s]))}
      ${D("Starts","starts_at",Vi(a.starts_at),!0,"datetime-local")}
      ${D("Ends","ends_at",Vi(a.ends_at||a.starts_at),!0,"datetime-local")}
      <label class="check-row"><input type="checkbox" name="all_day" ${a.all_day?"checked":""} /> All day</label>
      ${R("Visibility","visibility",a.visibility,[["company","Company"],["private","Private / assigned"]])}
      ${R("Assigned to","assigned_profile_id",a.assigned_profile_id,Lc(e))}
      ${R("Linked job","linked_job_id",i,[["","No linked job"]].concat(U(e).map(s=>[s.id,s.name])))}
      <label class="span-2">Description<textarea name="description" rows="4">${r(a.description)}</textarea></label>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save event</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"calendar-form-modal")}function Io(e){const t=n.selectedFileId?n.files.find(a=>a.id===n.selectedFileId):null;return t?q("Open file",t.file_name,gr(t),"file-viewer-modal"):""}function qo(e){return q("Forms","Tools",`
    <div class="compact-tool-form">
      <label>
        <span>Type filter</span>
        <select data-form-type-filter>
          <option value="all" ${n.formTypeFilter==="all"?"selected":""}>All types</option>
          ${dt.map(t=>`<option value="${r(t)}" ${n.formTypeFilter===t?"selected":""}>${r(t)}</option>`).join("")}
        </select>
      </label>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
      <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
    </div>
  `)}function Mo(e){const t=n.formStartTab==="templates"?"templates":"blank",a=Ze(),i=t==="templates"&&(a.find(m=>m.id===n.formStartTemplateId)||a[0])||null,s=i?.title||"",o=i?.description||"",l=i?.type||"Internal",c=i?.questions||[{type:"short",label:"First question",required:!1,options:[]}];return q("Forms","New form builder",`
    <form class="new-form-modal builder-create-modal" data-new-form-form>
      <input type="hidden" name="template_id" value="${r(i?.id||"")}" />
      <div class="form-start-tabs" role="tablist" aria-label="New form start type">
        <button class="${t==="blank"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="blank"><i class="ti ti-clipboard-plus"></i>Blank</button>
        <button class="${t==="templates"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="templates"><i class="ti ti-template"></i>Templates</button>
      </div>
      ${t==="templates"?`
        <div class="new-form-template-grid">
          ${a.map(m=>`
            <button class="${i?.id===m.id?"active":""}" type="button" data-action="select-form-start-template" data-template-id="${r(m.id)}">
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
            <div class="gform-accent-strip" style="--form-accent:${r(_e(e))}"></div>
            <label><span>Form title</span><input name="title" value="${r(s)}" placeholder="Untitled form" required /></label>
            <label><span>Form description</span><textarea name="description" rows="3" placeholder="What should people know before filling this out?">${r(o)}</textarea></label>
          </article>
          <div class="new-form-question-list">
            ${c.map((m,b)=>Ao(m,b)).join("")}
          </div>
        </section>
        <aside class="panel new-form-settings-card">
          <div class="section-head"><div><h2>Setup</h2><p>${i?r(i.title):"Blank starter"}</p></div></div>
          <div class="new-form-grid">
            <label><span>Type</span><select name="type">${dt.map(m=>`<option value="${r(m)}" ${m===l?"selected":""}>${r(m)}</option>`).join("")}</select></label>
            <label><span>Audience</span><input name="audience" value="Internal" /></label>
            <label><span>Linked job</span><select name="linked_job_id"><option value="">Company level</option>${U(e).map(m=>`<option value="${r(m.id)}" ${n.route?.jobId===m.id?"selected":""}>${r(m.name)}</option>`).join("")}</select></label>
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
  `,"form-create-modal builder-modal")}function Ao(e,t){const a=nt(e)?`
    <div class="starter-options">
      ${(e.options||["Option 1","Option 2"]).map(i=>`<span>${r(i)}</span>`).join("")}
    </div>
  `:"";return`
    <article class="question-card starter-question-card">
      <div class="question-card-head">
        <span>${t+1}</span>
        <strong>${r(dd(e.type))}</strong>
      </div>
      <label><span>Question</span><input value="${r(e.label||"Untitled question")}" readonly /></label>
      ${e.help?`<small>${r(e.help)}</small>`:""}
      ${a}
      <label class="check-row"><input type="checkbox" ${e.required?"checked":""} disabled /> Required</label>
    </article>
  `}function Fo(e,t){return t?q("Forms","Preview form",`
    <div class="form-preview-modal-body">
      ${Nr(e,t)}
    </div>
  `,"form-preview-modal"):q("Forms","Preview form",y("Choose a form first."))}function To(e,t){return t?q("Forms","Manage form",`
    <div class="forms-summary-share compact">
      <strong>Shareable preview URL</strong>
      <input readonly value="${r(`${window.location.origin}${_(d("forms",{form_id:t.id},e))}`)}" />
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
  `):q("Forms","Manage form",y("Choose a form first."))}function Eo(e){const t=n.accountMenuOpen&&!e.target.closest(".account-menu"),a=n.notificationMenuOpen&&!e.target.closest(".notification-center");t&&(n.accountMenuOpen=!1),a&&(n.notificationMenuOpen=!1);const i=e.target.closest("[data-action]");if(i){Oo(e,i);return}const s=e.target.closest("[data-select-job]");if(s){e.preventDefault(),Tl(s.dataset.selectJob);return}const o=e.target.closest("[data-select-task]");if(o){e.preventDefault(),El(o.dataset.selectTask);return}const l=e.target.closest("a[href][data-router]");if(!l){(t||a)&&p();return}l.target||l.hasAttribute("download")||(e.preventDefault(),C(l.getAttribute("href")))}function Oo(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),n.dataLoaded=!1,n.sync={label:"Refreshing...",mode:"loading"},p();return}if(a==="sign-out"){e.preventDefault(),n.accountMenuOpen=!1,Po();return}if(a==="toggle-account-menu"){e.preventDefault(),n.accountMenuOpen=!n.accountMenuOpen,n.notificationMenuOpen=!1,p();return}if(a==="toggle-notifications"){e.preventDefault(),n.notificationMenuOpen=!n.notificationMenuOpen,n.accountMenuOpen=!1,p();return}if(a==="mark-all-notifications-read"){e.preventDefault(),Xc(u()),p();return}if(a==="open-notification"){e.preventDefault(),ed(t.dataset.notificationId),p();return}if(a==="verify-email"){e.preventDefault(),n.accountMenuOpen=!1,x("Email verification is not implemented yet. Account access is not blocked right now.","local");return}if(a==="start-demo-mode"){e.preventDefault(),qn(t.dataset.returnUrl||"");return}if(a==="set-auth-mode"){e.preventDefault(),n.authMode=["signin","register","invite","request"].includes(t.dataset.authMode)?t.dataset.authMode:"signin",n.loginError="",n.authMessage="",p();return}if(a==="open-profile"){e.preventDefault(),n.accountMenuOpen=!1,n.modal="profile",p();return}if(a==="open-role-form"){e.preventDefault(),n.modal="role-new",p();return}if(a==="view-as-role"){e.preventDefault();const i=u(),s=ze(i,t.dataset.roleId);if(!s){x("That role is no longer available.","local","Role preview");return}n.rolePreview={company_id:i,role_id:s.id},x(`Viewing the workspace as ${s.name}.`,"local","Role preview");return}if(a==="exit-role-preview"){e.preventDefault(),n.rolePreview=null,x("Role preview ended.","live","Role preview");return}if(a==="open-invite-form"){e.preventDefault(),n.modal="invite-new",p();return}if(a==="new-message-group"){e.preventDefault(),n.modal="message-group-new",p();return}if(a==="new-direct-message"){e.preventDefault(),n.modal="message-direct-new",p();return}if(a==="manage-message-chat"){e.preventDefault(),n.selectedConversationId=t.dataset.conversationId||n.selectedConversationId,n.modal="message-access",p();return}if(a==="message-details"){e.preventDefault(),n.selectedConversationId=t.dataset.conversationId||n.selectedConversationId,n.modal="message-details",p();return}if(a==="message-search-results"){e.preventDefault(),n.modal="message-search",p();return}if(a==="set-message-filter"){e.preventDefault(),n.messageFilter=["all","unread",...La].includes(t.dataset.filter)?t.dataset.filter:"all",p();return}if(a==="delete-message"){e.preventDefault(),nl(t.dataset.messageId);return}if(a==="open-message-attachment"){e.preventDefault(),sl(t.dataset.attachmentId);return}if(a==="run-message-scenario"){e.preventDefault(),Kc(u());return}if(a==="reset-message-demo"){e.preventDefault(),Zc();return}if(a==="set-calendar-scope"){e.preventDefault(),n.calendarScope=t.dataset.scope==="me"?"me":"company",p();return}if(a==="set-calendar-view"){e.preventDefault(),n.calendarView=["month","week","list"].includes(t.dataset.view)?t.dataset.view:"week",p();return}if(a==="calendar-prev"){e.preventDefault(),Ni(-1),p();return}if(a==="calendar-next"){e.preventDefault(),Ni(1),p();return}if(a==="calendar-today"){e.preventDefault(),n.calendarCursorDate=v(0),p();return}if(a==="open-calendar-event"){e.preventDefault(),n.selectedCalendarEventId=t.dataset.eventId||"",n.modal="calendar-event-detail",p();return}if(a==="open-calendar-event-form"){if(e.preventDefault(),!A("calendar.manage",u())){x("Your role can view the calendar but cannot create company events.","local","Calendar");return}n.selectedCalendarEventId="",n.modal="calendar-event-new",p();return}if(a==="edit-calendar-event"){e.preventDefault();const i=ft(t.dataset.eventId);if(!i||!pt(i)){x("This event cannot be edited from Calendar.","local","Calendar");return}n.selectedCalendarEventId=i.id,n.modal="calendar-event-edit",p();return}if(a==="delete-calendar-event"){e.preventDefault(),al(t.dataset.eventId);return}if(a==="copy-invite-link"){e.preventDefault(),zo(t.dataset.inviteId);return}if(a==="copy-invite-code"){e.preventDefault(),Wo(t.dataset.inviteId);return}if(a==="revoke-invite"){e.preventDefault(),Yo(t.dataset.inviteId);return}if(a==="approve-join-request"){e.preventDefault(),Oi(t.dataset.requestId,"approved");return}if(a==="reject-join-request"){e.preventDefault(),Oi(t.dataset.requestId,"rejected");return}if(a==="start-checkout"){e.preventDefault(),Bo();return}if(a==="open-file-upload"){e.preventDefault(),n.modal="file-upload",p();return}if(a==="open-folder-form"){e.preventDefault(),n.modal="folder-new",p();return}if(a==="open-job-form"){e.preventDefault();const i=t.dataset.jobId||"";i&&(n.selectedJobId=i),n.modal=t.dataset.mode==="edit"?"job-edit":"job-new",p();return}if(a==="open-forms-tools"){e.preventDefault(),n.modal="forms-tools",p();return}if(a==="open-form-actions"){e.preventDefault(),kt(t.dataset.formId,!1),n.modal="form-actions",p();return}if(a==="open-form-preview"){e.preventDefault(),kt(t.dataset.formId,!1),n.modal="form-preview",p();return}if(a==="set-form-start-tab"){e.preventDefault(),n.formStartTab=t.dataset.tab==="templates"?"templates":"blank",n.formStartTab==="blank"&&(n.formStartTemplateId=""),n.formStartTab==="templates"&&!n.formStartTemplateId&&(n.formStartTemplateId=Ze()[0]?.id||""),p();return}if(a==="select-form-start-template"){e.preventDefault(),n.formStartTab="templates",n.formStartTemplateId=t.dataset.templateId||Ze()[0]?.id||"",p();return}if(a==="close-modal"){e.preventDefault(),xo();return}if(a==="set-task-view"){e.preventDefault(),n.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(Gi,n.taskView),p();return}if(a==="set-drive-view"){e.preventDefault(),n.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(Zi,n.driveView),p();return}if(a==="clock-in"){e.preventDefault(),fc(u(),t.dataset.taskId||n.route?.params?.get("task_id")||"");return}if(a==="clock-out"){e.preventDefault(),Vn();return}if(a==="select-file"){e.preventDefault(),n.selectedFileId=t.dataset.fileId||"",n.modal="file-detail",p();return}if(a==="download-file"){e.preventDefault(),yl(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),vl(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),n.formsTab=t.dataset.tab==="responses"?"responses":"library",p();return}if(a==="set-form-editor-tab"){e.preventDefault(),n.formEditorTab=t.dataset.tab||"questions",p();return}if(a==="new-form"){e.preventDefault(),n.formStartTemplateId=t.dataset.templateId||"",n.formStartTab=t.dataset.startTab==="templates"||n.formStartTemplateId?"templates":"blank",n.formStartTab==="templates"&&!n.formStartTemplateId&&(n.formStartTemplateId=Ze()[0]?.id||""),n.modal="form-new",p();return}if(a==="select-form"){e.preventDefault(),kt(t.dataset.formId);return}if(a==="toggle-form-card"){e.preventDefault();const i=t.dataset.formId||"";n.expandedFormIds.has(i)?n.expandedFormIds.delete(i):n.expandedFormIds.add(i),p();return}if(a==="edit-form"){e.preventDefault(),kt(t.dataset.formId,!1),n.formsTab="builder",n.formEditorTab="questions",n.modal="",p();return}if(a==="save-form"){e.preventDefault(),G("Form saved locally"),p();return}if(a==="publish-form"){e.preventDefault(),Wi(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),Wi(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),fd(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),gd(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),bd(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),_d(u());return}if(a==="new-finance-invoice"){e.preventDefault(),n.selectedFinanceInvoiceId="",n.modal="finance-invoice-new",p();return}if(a==="edit-finance-invoice"){e.preventDefault(),n.selectedFinanceInvoiceId=t.dataset.invoiceId||"",n.modal="finance-invoice-edit",p();return}if(a==="new-finance-payment"){e.preventDefault(),n.selectedFinanceInvoiceId=t.dataset.invoiceId||n.route?.params?.get("invoice")||"",n.modal="finance-payment-new",p();return}if(a==="new-finance-expense"){e.preventDefault(),n.selectedFinanceExpenseId="",n.selectedFinanceVendorId=t.dataset.vendorId||"",n.modal="finance-expense-new",p();return}if(a==="edit-finance-expense"){e.preventDefault(),n.selectedFinanceExpenseId=t.dataset.expenseId||"",n.modal="finance-expense-edit",p();return}if(a==="new-finance-vendor"){e.preventDefault(),n.selectedFinanceVendorId="",n.modal="finance-vendor-new",p();return}if(a==="edit-finance-vendor"){e.preventDefault(),n.selectedFinanceVendorId=t.dataset.vendorId||"",n.modal="finance-vendor-edit",p();return}if(a==="add-question"){e.preventDefault(),yd(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),vd(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),hd(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),$d(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),wd(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),Sd(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),cl(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),ml(t.dataset.taskId))}function xo(){const e=n.route||ea();if(n.modal="",n.formStartTemplateId="",n.formStartTab="blank",n.selectedFinanceInvoiceId="",n.selectedFinanceExpenseId="",n.selectedFinanceVendorId="",e.name==="company"&&e.section==="tasks"&&(e.params.get("new")||e.params.get("edit")||e.params.get("task_id"))){C(d("tasks",e.jobId?{job_id:e.jobId}:{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"){const t=e.jobId?O(e.jobId):we();C(d("jobs",{tab:t?"profile":"pipeline",...t?{job_id:t.id}:{}},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="crm"&&e.params.get("account")){C(d("crm",{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="finance"&&(e.params.get("invoice")||e.params.get("expense")||e.params.get("vendor")||e.params.get("report"))){C(d("finance",{},e.companyId),{replace:!0});return}p()}function Ro(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===Pe.localUsername&&String(t.password||"")===Pe.localPassword)){n.loginError="Invalid temporary credentials.",p();return}n.loginError="",qn(t.return_url||_(d("jobs",{},P())));return}if(e.target.matches("[data-auth-sign-in-form]")){e.preventDefault(),No(e.target);return}if(e.target.matches("[data-auth-register-form]")){e.preventDefault(),Lo(e.target);return}if(e.target.matches("[data-auth-invite-code-form]")){e.preventDefault(),Uo(e.target);return}if(e.target.matches("[data-auth-request-form]")){e.preventDefault(),Vo(e.target);return}if(e.target.matches("[data-company-create-form]")){e.preventDefault(),Qo(e.target);return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...g().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};w(Ki,a),n.profileDraft=a,n.session={...g(),profile:a},w(Ne,n.session),n.modal="",p();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),ll(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),dl(e.target);return}if(e.target.matches("[data-new-form-form]")){e.preventDefault(),pd(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),ul(e.target);return}if(e.target.matches("[data-folder-form]")){e.preventDefault(),pl(e.target);return}if(e.target.matches("[data-finance-invoice-form]")){e.preventDefault(),fl(e.target);return}if(e.target.matches("[data-finance-payment-form]")){e.preventDefault(),gl(e.target);return}if(e.target.matches("[data-finance-expense-form]")){e.preventDefault(),bl(e.target);return}if(e.target.matches("[data-finance-vendor-form]")){e.preventDefault(),_l(e.target);return}if(e.target.matches("[data-role-form]")){e.preventDefault(),Ho(e.target);return}if(e.target.matches("[data-invite-form]")){e.preventDefault(),Jo(e.target);return}if(e.target.matches("[data-message-group-form]")){e.preventDefault(),Go(e.target);return}if(e.target.matches("[data-direct-message-form]")){e.preventDefault(),Zo(e.target);return}if(e.target.matches("[data-message-access-form]")){e.preventDefault(),Xo(e.target);return}if(e.target.matches("[data-message-form]")){e.preventDefault(),el(e.target);return}if(e.target.matches("[data-calendar-event-form]")){e.preventDefault(),tl(e.target);return}if(e.target.matches("[data-user-role-form]")){e.preventDefault(),Ko(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),kd(e.target))}async function Po(){if(n.session?.auth==="supabase"){const e=E();e?.auth&&await e.auth.signOut()}localStorage.removeItem(Ne),n.session=null,n.dataLoaded=!1,C("/login",{replace:!0})}function qn(e=""){n.loginError="",n.authMessage="",n.session=Ia(),vn(),n.activeCompanyId=u(),localStorage.setItem(fe,n.activeCompanyId),w(Ne,n.session),n.dataLoaded=!1,n.dataLoading=!1,C(ta(e||_(d("jobs",{},u()))),{replace:!0})}async function No(e){const t=Object.fromEntries(new FormData(e).entries()),a=E();if(!a?.auth){n.loginError="Supabase auth is unavailable.",p();return}n.loginError="",n.authMessage="Signing in...",p();const i=await a.auth.signInWithPassword({email:String(t.email||"").trim(),password:String(t.password||"")});if(i.error){n.loginError=i.error.message||"Unable to sign in.",n.authMessage="",p();return}if(await Xe(i.data.session),t.invite_token){await Mn(t.invite_token,t.return_url);return}n.authMessage="",n.dataLoaded=!1,C(ta(t.return_url||_(d("jobs",{},P()))),{replace:!0})}function Uo(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.invite_code||"").trim();if(!a){n.loginError="Invite code is required.",p();return}n.loginError="",n.authMessage="",n.authMode="register";const i=new URLSearchParams({invite:a}),s=ta(t.return_url||"");s&&i.set("return_url",s),C(`/login?${i.toString()}`,{replace:!0})}async function Lo(e){const t=Object.fromEntries(new FormData(e).entries()),a=E();if(!a?.auth){n.loginError="Supabase auth is unavailable.",p();return}const i=String(t.email||"").trim(),s=String(t.password||""),o=String(t.full_name||"").trim(),l=String(t.invite_token||"").trim(),c=String(t.company_name||"").trim();if(!i||!s||!o||!l&&!c){n.loginError=l?"Name, email, and password are required.":"Name, email, password, and company workspace are required.",p();return}n.loginError="",n.authMessage=l?"Creating account and accepting invite...":"Creating secure workspace...",p();const m=await a.auth.signUp({email:i,password:s,options:{data:{full_name:o}}});if(m.error){n.loginError=m.error.message||"Unable to create account.",n.authMessage="",p();return}let b=m.data.session;if(!b){const I=await a.auth.signInWithPassword({email:i,password:s});if(I.error){n.loginError="Account created. Please sign in to finish workspace setup.",n.authMode="signin",n.authMessage="",p();return}b=I.data.session}if(await Xe(b),l){await Mn(l,t.return_url);return}const f=await a.rpc("create_company_workspace",{company_name:c});if(f.error){n.loginError=f.error.message||"Account created, but workspace setup failed.",n.authMessage="",p();return}n.activeCompanyId=h(f.data||P()),localStorage.setItem(fe,n.activeCompanyId),n.dataLoaded=!1,n.authMessage="",C(d("settings",{tab:"billing"},n.activeCompanyId),{replace:!0})}async function Qo(e){const t=Object.fromEntries(new FormData(e).entries()),a=E(),i=String(t.company_name||"").trim();if(!a||!i){n.loginError="Company workspace name is required.",p();return}const s=await a.rpc("create_company_workspace",{company_name:i});if(s.error){n.loginError=s.error.message||"Workspace setup failed.",p();return}n.activeCompanyId=h(s.data||P()),localStorage.setItem(fe,n.activeCompanyId),n.dataLoaded=!1,C(d("settings",{tab:"billing"},n.activeCompanyId),{replace:!0})}async function Vo(e){const t=Object.fromEntries(new FormData(e).entries()),a=E();if(!a?.auth){n.loginError="Supabase auth is unavailable.",p();return}const i=String(t.email||"").trim(),s=String(t.password||""),o=h(t.company_id||"");n.loginError="",n.authMessage="Submitting access request...",p();const l=await a.auth.signInWithPassword({email:i,password:s});if(l.error){n.loginError=l.error.message||"Sign in first to request access.",n.authMessage="",p();return}await Xe(l.data.session);const c=await a.rpc("request_company_access",{target_company_id:o,request_message:String(t.message||"").trim()||null});if(c.error){n.loginError=c.error.message||"Unable to request access.",n.authMessage="",p();return}n.authMessage="Access request sent. An Owner/Admin must approve it.",n.loginError="",n.authMode="signin",p()}async function Bo(){const e=u();n.sync={label:"Opening billing...",mode:"loading"},p();try{const t=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json",...g().access_token?{Authorization:`Bearer ${g().access_token}`}:{}},body:JSON.stringify({company_id:e,return_url:`${window.location.origin}${_(d("settings",{tab:"billing"},e))}`})}),a=await t.json().catch(()=>({}));if(!t.ok||!a.url)throw new Error(a.error||"Billing is not configured yet.");window.location.href=a.url}catch(t){n.sync={label:t.message||"Billing unavailable",mode:"local"},p()}}async function Ho(e){const t=u(),a=new FormData(e),i=xe({id:crypto.randomUUID(),company_id:t,name:a.get("name"),color:a.get("color")||"#f0b23b",priority:a.get("priority")||100,is_system:!1,created_by:g().profile.id}),s=a.getAll("permissions").map(l=>String(l||"")).filter(Boolean),o=E();if(n.session?.auth==="supabase"&&o){const l=await o.from("roles").insert(i).select().single();if(l.error){n.sync={label:l.error.message||"Role save failed",mode:"local"},p();return}const c=xe(l.data),m=s.map(b=>({role_id:c.id,permission_key:b,effect:"allow"}));m.length&&await o.from("role_permissions").insert(m),n.roles.unshift(c),n.rolePermissions=m.concat(n.rolePermissions).map(ja),n.sync={label:"Role saved",mode:"live"}}else n.roles.unshift(i),n.rolePermissions=s.map(l=>ja({role_id:i.id,permission_key:l,effect:"allow"})).concat(n.rolePermissions),n.sync={label:"Role saved locally",mode:"local"};n.modal="",p()}async function Jo(e){const t=new FormData(e),a=h(t.get("company_id")||u()),i=String(t.get("email")||"").trim().toLowerCase(),s=String(t.get("role_id")||"").trim();if(!i){n.sync={label:"Invite email is required",mode:"local"},p();return}const o=xt({id:crypto.randomUUID(),company_id:a,email:i,role_id:rt(s)?s:"",token:cc(),status:"pending",invited_by:g().profile.id,expires_at:new Date(Date.now()+336*60*60*1e3).toISOString(),created_at:new Date().toISOString()}),l=E();if(n.session?.auth==="supabase"&&l){const c={company_id:o.company_id,email:o.email,role_id:o.role_id||null,token:o.token,status:"pending",invited_by:g().profile.id},m=await l.from("company_invites").insert(c).select().single();if(m.error){n.sync={label:m.error.message||"Invite save failed",mode:"local"},p();return}n.companyInvites.unshift(xt(m.data)),await at(o.company_id,"invite.created","company_invite",m.data.id,{email:o.email},!0),n.sync={label:"Invite code created. Copy it for the new user.",mode:"live"}}else n.companyInvites.unshift(o),at(o.company_id,"invite.created","company_invite",o.id,{email:o.email}),n.sync={label:"Invite code created locally",mode:"local"};H("access.invite","Invite code created",`${L()} created an invite code for ${o.email}.`,d("settings",{tab:"access"},o.company_id),"invite",o.id,o.company_id),n.modal="",p()}async function Mn(e,t=""){const a=E();if(!a){n.loginError="Supabase auth is unavailable.",n.authMessage="",p();return}n.authMessage="Accepting workspace invite...",p();const i=await a.rpc("accept_company_invite",{invite_token:String(e||"").trim()});if(i.error){n.loginError=i.error.message||"Unable to accept invite.",n.authMessage="",p();return}const s=h(i.data||P());n.activeCompanyId=s,localStorage.setItem(fe,s),n.authMessage="",n.loginError="",n.dataLoaded=!1,C(d("jobs",{},s),{replace:!0})}async function zo(e){const t=n.companyInvites.find(a=>a.id===e);if(!t?.token){n.sync={label:"Invite link is unavailable",mode:"local"},p();return}try{await navigator.clipboard.writeText(dc(t)),n.sync={label:"Invite link copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}p()}async function Wo(e){const t=n.companyInvites.find(a=>a.id===e);if(!t?.token){n.sync={label:"Invite code is unavailable",mode:"local"},p();return}try{await navigator.clipboard.writeText(t.token),n.sync={label:"Invite code copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}p()}async function Yo(e){const t=n.companyInvites.find(i=>i.id===e);if(!t)return;const a=E();if(n.session?.auth==="supabase"&&a){const i=await a.rpc("revoke_company_invite",{target_invite_id:t.id});if(i.error){n.sync={label:i.error.message||"Invite revoke failed",mode:"local"},p();return}n.sync={label:"Invite revoked",mode:"live"}}else n.sync={label:"Invite revoked locally",mode:"local"};n.companyInvites=n.companyInvites.map(i=>i.id===t.id?xt({...i,status:"revoked"}):i),at(t.company_id,"invite.revoked","company_invite",t.id,{email:t.email}),H("access.invite","Invite revoked",`${L()} revoked the invite for ${t.email}.`,d("settings",{tab:"access"},t.company_id),"invite",t.id,t.company_id),W(),p()}async function Ko(e){const t=new FormData(e),a=h(t.get("company_id")||u()),i=String(t.get("profile_id")||"").trim(),s=String(t.get("role_id")||"").trim(),o=["active","pending","disabled","left"].includes(String(t.get("membership_status")))?String(t.get("membership_status")):"active",l=ze(a,s);if(!i||!l){n.sync={label:"Select a user and role",mode:"local"},p();return}const c=_c(a,i,l,o);if(c){n.sync={label:c,mode:"local"},p();return}const m=Ot({company_id:a,profile_id:i,role:ei(l),status:o}),b=oe(a,i),f=Xn({company_id:a,profile_id:i,role_id:l.id,assigned_by:g().profile.id}),I=E();if(n.session?.auth==="supabase"&&I){const V=rt(l.id),T=await I.rpc("update_company_member_access",{target_company_id:a,target_profile_id:i,target_role:m.role,target_role_id:V?l.id:null,target_status:o});if(T.error){n.sync={label:T.error.message||"Access update failed",mode:"local"},p();return}At(Ot(T.data||m)),V&&Pi(f),n.sync={label:V?"User access saved":"Membership saved; create a role to assign permissions",mode:"live"}}else At(m),Pi(f),n.sync={label:"User access saved locally",mode:"local"};H("access.role","User access updated",`${L()} set ${ca(i)} to ${l.name} / ${j(o)}.`,d("settings",{tab:"access"},a),"membership",i,a),at(a,td(b,m),"membership",i,{role:l.name,status:o}),p()}async function Oi(e,t){const a=n.joinRequests.find(l=>l.id===e);if(!a||!["approved","rejected"].includes(t))return;const i=E(),s=es({...a,status:t}),o=Ot({company_id:a.company_id,profile_id:a.profile_id,role:"member",status:t==="approved"?"active":"disabled"});if(n.session?.auth==="supabase"&&i){const l=await i.rpc("review_company_join_request",{target_request_id:a.id,decision:t,target_role_id:null});if(l.error){n.sync={label:l.error.message||"Request update failed",mode:"local"},p();return}t==="approved"&&At(o),n.sync={label:t==="approved"?"Access approved":"Request rejected",mode:"live"}}else t==="approved"&&At(o),n.sync={label:t==="approved"?"Access approved locally":"Request rejected locally",mode:"local"};n.joinRequests=n.joinRequests.map(l=>l.id===a.id?s:l),at(a.company_id,t==="approved"?"join.approved":"join.rejected","join_request",a.id,{email:a.requested_email}),H("access.request",t==="approved"?"Access approved":"Access rejected",`${L()} ${t==="approved"?"approved":"rejected"} ${a.requested_email||"a join request"}.`,d("settings",{tab:"access"},a.company_id),"join_request",a.id,a.company_id),W(),p()}async function Go(e){const t=u();if(!A("messages.create_group",t)){x("Your role cannot create group chats.","local","Messages");return}const a=new FormData(e),i=["company","role","custom"].includes(a.get("type"))?String(a.get("type")):"custom",s=ce({id:crypto.randomUUID(),company_id:t,title:String(a.get("title")||"").trim()||"New group chat",type:i,created_by:g().profile.id,last_message_at:new Date().toISOString(),created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),o=bi(a,s,i);!o.some(c=>c.target_type==="profile"&&c.target_id===g().profile.id)&&i!=="company"&&o.push(Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:s.id,target_type:"profile",target_id:g().profile.id})),await Wa(s,o)&&(n.selectedConversationId=s.id,n.modal="",H("message.group","Group chat created",`${L()} created ${s.title}.`,d("messages",{conversation:s.id},t),"message_conversation",s.id,t),C(d("messages",{conversation:s.id},t),{replace:!0}))}async function Zo(e){const t=u(),a=new FormData(e),i=String(a.get("profile_id")||"").trim();if(!i){x("Choose a person first.","local","Messages");return}const s=ce({id:crypto.randomUUID(),company_id:t,title:ca(i),type:"direct",created_by:g().profile.id,last_message_at:new Date().toISOString(),created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),o=[Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:s.id,target_type:"profile",target_id:g().profile.id}),Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:s.id,target_type:"profile",target_id:i})];if(!await Wa(s,o))return;n.selectedConversationId=s.id,n.modal="";const c=String(a.get("body")||"").trim();c&&await An(s,c,[]),H("message.direct","Direct message started",`${L()} started a direct message with ${s.title}.`,d("messages",{conversation:s.id},t),"message_conversation",s.id,t),C(d("messages",{conversation:s.id},t),{replace:!0})}async function Xo(e){const t=u();if(!A("messages.manage_groups",t)&&!A("messages.manage",t)){x("Your role cannot manage chat access.","local","Messages");return}const a=n.messageConversations.find(c=>c.id===e.dataset.conversationId);if(!a)return;const i=new FormData(e),s=ce({...a,title:String(i.get("title")||"").trim()||a.title,type:La.includes(i.get("type"))?String(i.get("type")):a.type,updated_at:new Date().toISOString()}),o=bi(i,s,s.type);s.type!=="company"&&!o.some(c=>c.target_type==="profile"&&c.target_id===g().profile.id)&&o.push(Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:s.id,target_type:"profile",target_id:g().profile.id})),await Wa(s,o,!0)&&(n.modal="",x("Chat access saved.",n.session?.auth==="supabase"?"live":"local","Messages"),p())}async function el(e){const t=n.messageConversations.find(o=>o.id===e.dataset.conversationId);if(!t)return;if(!A("messages.send",t.company_id)){x("Your role cannot send messages.","local","Messages");return}const a=new FormData(e),i=String(a.get("body")||"").trim(),s=Array.from(e.elements.attachments?.files||[]);if(!i&&!s.length){x("Type a message or attach a file.","local","Messages");return}if(s.length&&!A("messages.attach_files",t.company_id)){x("Your role cannot attach files.","local","Messages");return}await An(t,i,s),e.reset(),p()}async function tl(e){const t=u(),a=Object.fromEntries(new FormData(e).entries()),i=a.id?ft(String(a.id)):null;if(!i&&!A("calendar.manage",t)){x("Your role cannot create or edit calendar events.","local","Calendar");return}if(i&&!pt(i)){x("This event cannot be edited from Calendar.","local","Calendar");return}const s=String(a.linked_job_id||"").trim(),o=new Date().toISOString();let l=Qe({...i||{},id:i?.id||crypto.randomUUID(),company_id:t,title:String(a.title||"").trim()||"Calendar event",description:String(a.description||"").trim(),event_type:Kt.includes(a.event_type)?String(a.event_type):"Company event",starts_at:Bi(a.starts_at),ends_at:Bi(a.ends_at||a.starts_at),all_day:a.all_day==="on",visibility:a.visibility==="private"?"private":"company",linked_type:s?"job":"",linked_id:s,assigned_profile_id:String(a.assigned_profile_id||""),created_by:i?.created_by||g().profile.id,created_at:i?.created_at||o,updated_at:o});const c=E();if(n.session?.auth==="supabase"&&c){const m=kc(l);i&&delete m.id;const b=i?await c.from("calendar_events").update({...m,updated_at:o}).eq("id",i.id).select().single():await c.from("calendar_events").insert(m).select().single();if(b.error){x(b.error.message||"Calendar event save failed.","local","Calendar");return}l=Qe(b.data)}n.calendarEvents=[l].concat(n.calendarEvents.filter(m=>m.id!==l.id)),ns(),H("calendar.event",i?"Calendar event updated":"Calendar event created",`${L()} ${i?"updated":"created"} ${l.title}.`,d("calendar",{},t),"calendar_event",l.id,t),n.selectedCalendarEventId=`manual:${l.id}`,n.modal="calendar-event-detail",p()}async function al(e){const t=ft(e);if(!t||!pt(t)){x("This event cannot be deleted from Calendar.","local","Calendar");return}const a=E();if(n.session?.auth==="supabase"&&a){const i=await a.from("calendar_events").delete().eq("id",t.id);if(i.error){x(i.error.message||"Calendar event delete failed.","local","Calendar");return}}n.calendarEvents=n.calendarEvents.filter(i=>i.id!==t.id),ns(),H("calendar.event","Calendar event deleted",`${L()} deleted ${t.title}.`,d("calendar",{},t.company_id),"calendar_event",t.id,t.company_id),n.selectedCalendarEventId="",n.modal="",p()}async function An(e,t,a){const i=new Date().toISOString(),s=ue({id:crypto.randomUUID(),conversation_id:e.id,company_id:e.company_id,sender_profile_id:g().profile.id,body:t,message_type:a.length?"attachment":"text",created_at:i,updated_at:i}),o=E();let l=s;if(n.session?.auth==="supabase"&&o){const b=await o.from("messages").insert(wc(s)).select().single();if(b.error)return x(b.error.message||"Message send failed.","local","Messages"),null;l=ue(b.data)}n.messages=n.messages.concat(l);const c=await il(l,a),m={...e,last_message_at:l.created_at,updated_at:l.created_at};return n.messageConversations=n.messageConversations.map(b=>b.id===e.id?m:b),n.session?.auth==="supabase"&&o&&await o.from("message_conversations").update({last_message_at:l.created_at,updated_at:l.created_at}).eq("id",e.id),_a(e.id,!1),ss(m,l,c),qe(),l}async function il(e,t){const a=E(),i=[];for(const s of t){const o=crypto.randomUUID(),l=`${e.company_id}/${e.conversation_id}/${o}-${ht(s.name||"attachment")}`;let c="",m="";if(n.session?.auth==="supabase"&&a){const f=await a.storage.from("quest-message-attachments").upload(l,s,{cacheControl:"3600",upsert:!1,contentType:s.type||"application/octet-stream"});if(f.error){x(f.error.message||"Attachment upload failed.","local","Messages");continue}m=l}else s.type?.startsWith("image/")&&s.size<=22e4&&(c=await Wc(s));const b=Se({id:o,conversation_id:e.conversation_id,message_id:e.id,company_id:e.company_id,bucket_id:"quest-message-attachments",object_path:m,file_name:s.name||"attachment",mime_type:s.type||"application/octet-stream",size_bytes:s.size||0,preview_url:c,created_at:new Date().toISOString()});if(n.session?.auth==="supabase"&&a){const f=await a.from("message_attachments").insert(Sc(b)).select().single();if(f.error){x(f.error.message||"Attachment record failed.","local","Messages"),m&&await a.storage.from("quest-message-attachments").remove([m]);continue}i.push(Se(f.data))}else i.push(b)}return n.messageAttachments=n.messageAttachments.concat(i),i}async function Wa(e,t,a=!1){const i=E();if(n.session?.auth==="supabase"&&i){const s=a?await i.from("message_conversations").update(Qi(e)).eq("id",e.id).select().single():await i.from("message_conversations").insert(Qi(e)).select().single();if(s.error)return x(s.error.message||"Conversation save failed.","local","Messages"),!1;if(await i.from("message_conversation_access").delete().eq("conversation_id",e.id),t.length){const o=await i.from("message_conversation_access").insert(t.map($c));if(o.error)return x(o.error.message||"Conversation access save failed.","local","Messages"),!1}e=ce(s.data),n.sync={label:"Quest Supabase live",mode:"live"}}return n.messageConversations=[e].concat(n.messageConversations.filter(s=>s.id!==e.id)),n.messageAccess=t.concat(n.messageAccess.filter(s=>s.conversation_id!==e.id)),_a(e.id,!1),qe(),!0}async function nl(e){const t=n.messages.find(o=>o.id===e);if(!t)return;if(!(t.sender_profile_id===g().profile.id&&A("messages.delete_own",t.company_id)||A("messages.delete_any",t.company_id))){x("Your role cannot delete this message.","local","Messages");return}const i=new Date().toISOString(),s=E();if(n.session?.auth==="supabase"&&s){const o=await s.from("messages").update({deleted_at:i,updated_at:i}).eq("id",t.id);if(o.error){x(o.error.message||"Message delete failed.","local","Messages");return}}n.messages=n.messages.map(o=>o.id===t.id?{...o,deleted_at:i,updated_at:i}:o),qe(),p()}async function sl(e){const t=n.messageAttachments.find(i=>i.id===e);if(!t)return;if(t.preview_url){window.open(t.preview_url,"_blank","noopener,noreferrer");return}const a=E();if(n.session?.auth==="supabase"&&a&&t.object_path){const i=await a.storage.from(t.bucket_id||"quest-message-attachments").createSignedUrl(t.object_path,900,{download:t.file_name});if(!i.error&&i.data?.signedUrl){window.open(i.data.signedUrl,"_blank","noopener,noreferrer");return}}x("This demo attachment is metadata-only.","local","Messages")}function rl(e){if(e.target.matches("[data-global-search]")){n.query=e.target.value,Fe();return}if(e.target.matches("[data-file-search]")){n.fileQuery=e.target.value,Fe();return}if(e.target.matches("[data-form-search]")){n.formQuery=e.target.value,Fe();return}if(e.target.matches("[data-crm-search]")){n.crmQuery=e.target.value,Fe();return}if(e.target.matches("[data-message-search]")){n.messageQuery=e.target.value,Fe();return}if(e.target.matches("[data-calendar-search]")){n.calendarQuery=e.target.value,Fe();return}if(e.target.matches("[data-message-access-filter]")){Hc(e.target);return}if(e.target.matches("[data-form-field]")){ps(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&fs(e.target)}function ol(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||P();Al(t);return}if(e.target.matches("[data-stage-filter]")){n.stageFilter=e.target.value||"all",p();return}if(e.target.matches("[data-crm-stage-filter]")){n.crmStageFilter=e.target.value||"all",p();return}if(e.target.matches("[data-crm-owner-filter]")){n.crmOwnerFilter=e.target.value||"all",p();return}if(e.target.matches("[data-task-status-filter]")){n.taskStatusFilter=e.target.value||"all",p();return}if(e.target.matches("[data-task-priority-filter]")){n.taskPriorityFilter=e.target.value||"all",p();return}if(e.target.matches("[data-calendar-type-filter]")){n.calendarTypeFilter=e.target.value||"all",p();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;C(d("tasks",t?{job_id:t}:{},u()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;C(d("analytics",t?{job_id:t}:{},u()));return}if(e.target.matches("[data-file-category-filter]")){n.fileCategoryFilter=e.target.value||"All categories",p();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=n.route?.jobId||"";C(d("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},u()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;C(d("files",{...t?{folder:"jobs",job_id:t}:{}},u()));return}if(e.target.matches("[data-form-type-filter]")){n.formTypeFilter=e.target.value||"all",p();return}if(e.target.matches("[data-form-field]")){ps(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&fs(e.target)}async function ll(e){const t=Ue(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||u(),t.estimate_total=Number(t.estimate_total||0),t.invoice_total=Number(t.invoice_total||0),t.updated_at=new Date().toISOString();const a=n.jobs.some(s=>s.id===t.id),i=E();if(i){const s=a?await i.from("jobs").update(t).eq("id",t.id).select().single():await i.from("jobs").insert(t).select().single();if(!s.error&&s.data){Sa(Ue(s.data)),n.sync={label:"Quest Supabase live",mode:"live"},n.modal="",C(d("jobs",{tab:"profile",job_id:s.data.id},t.company_id),{replace:!0});return}n.sync={label:"Saved locally",mode:"local"}}Sa(t),n.modal="",C(d("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function cl(e){if(!e)return;const t=u(),a=E();a&&await a.from("jobs").delete().eq("id",e),n.jobs=n.jobs.filter(i=>i.id!==e),n.selectedJobId=U(t)[0]?.id||"",n.modal="",W(),C(d("jobs",{tab:"list"},t),{replace:!0})}async function dl(e){const t=u(),a=Object.fromEntries(new FormData(e).entries()),i=Le({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:g().profile.member_id||De(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),s=aa(i.id),o=!!s,l=E();if(l){const c=Tc(i),m=o?await l.from("tasks").update(c).eq("id",i.id).select().single():await l.from("tasks").insert(c).select().single();if(!m.error&&m.data){const b=Le(m.data);xi(b),Ji(b,s),n.sync={label:"Quest Supabase live",mode:"live"},n.modal="",C(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0});return}n.sync={label:"Task saved locally",mode:"local"}}xi(i),Ji(i,s),n.modal="",C(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0})}async function ml(e){if(!e)return;const t=u(),a=E();a&&await a.from("tasks").delete().eq("id",e),n.tasks=n.tasks.filter(i=>i.id!==e),n.selectedTaskId="",n.modal="",W(),C(d("tasks",{},t),{replace:!0})}async function ul(e){const t=u(),a=new FormData(e),i=Object.fromEntries(a.entries()),s=Array.from(e.elements.files?.files||[]),o=String(i.file_name||"").trim(),l=s.length?s:o?[null]:[];if(!l.length){n.sync={label:"Choose a file or enter a file name",mode:"local"},p();return}const c=E();let m=0;for(const b of l){const f=crypto.randomUUID(),I=b?.name||o,V=String(i.folder||"shared"),T=`${t}/${i.job_id?`jobs/${i.job_id}`:V}/${f}-${ht(I)}`;let ee=!1;c&&b&&(ee=!(await c.storage.from("quest-job-files").upload(T,b,{cacheControl:"3600",upsert:!1,contentType:b.type||"application/octet-stream"})).error);const Ke=tt({id:f,company_id:t,job_id:i.job_id||"",folder:V,file_name:I,mime_type:b?.type||"application/octet-stream",size_bytes:b?.size||Number(i.size_bytes||0),category:i.category||se(V),notes:i.notes||"",uploaded_by_label:i.uploaded_by_label||g().profile.full_name,bucket_id:"quest-job-files",object_path:ee||!b?T:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(c){const ve=await c.from("job_files").insert(Ec(Ke)).select().single();if(!ve.error&&ve.data){Ri(tt(ve.data)),m+=1;continue}ee&&await c.storage.from("quest-job-files").remove([T])}Ri(Ke)}n.sync=m===l.length?{label:"Quest Supabase live",mode:"live"}:{label:m?"Some files saved locally":"File record saved locally",mode:m?"loading":"local"},H("file.added",l.length>1?"Files added":"File added",`${L()} added ${l.length} file${l.length===1?"":"s"} to ${se(i.folder||"shared")}.`,d("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),"file",i.job_id||"",t),n.modal="",C(d("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),{replace:!0})}function pl(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.name||"").trim();if(!a){n.sync={label:"Folder name is required",mode:"local"},p();return}const i=ci({id:`folder-${crypto.randomUUID()}`,company_id:u(),name:a,parent_key:t.parent_key||"home",created_by_label:g().profile.full_name||"Quest HQ",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.driveFolders.unshift(i),n.modal="",n.sync={label:"Folder created locally",mode:"local"},H("file.folder","Folder created",`${L()} created ${i.name}.`,d("files",{folder:i.id},i.company_id),"folder",i.id,i.company_id),W(),p()}function fl(e){const t=Object.fromEntries(new FormData(e).entries()),a=u(),i=O(t.job_id),s=String(t.id||"").trim()?je(String(t.id).trim()):null,o=ua({...t,id:String(t.id||"").trim()||`invoice-${crypto.randomUUID()}`,company_id:a,client_name:String(t.client_name||i?.client_name||"").trim(),total:N(t.subtotal)+N(t.tax),updated_at:new Date().toISOString()});hl(o),s?.job_id&&s.job_id!==o.job_id&&ka(s.job_id),ka(o.job_id),n.modal="",n.sync={label:"Finance saved locally",mode:"local"},H("finance.invoice",s?"Invoice updated":"Invoice created",`${L()} ${s?"updated":"created"} ${o.invoice_number}.`,d("finance",{invoice:o.id},a),"invoice",o.id,a),C(d("finance",{invoice:o.id},a),{replace:!0})}function gl(e){const t=Object.fromEntries(new FormData(e).entries()),a=u(),i=je(t.invoice_id);if(!i||i.company_id!==a){n.sync={label:"Create an invoice before recording a payment",mode:"local"},p();return}const s=pa({...t,id:`payment-${crypto.randomUUID()}`,company_id:a,created_at:new Date().toISOString()});n.financePayments.unshift(s),i.status=ne(i.id)<=0?"Paid":"Partially paid",i.updated_at=new Date().toISOString(),ka(i.job_id),W(),n.modal="",n.sync={label:"Payment recorded locally",mode:"local"},H("finance.payment","Payment recorded",`${L()} recorded ${$(s.amount)} for ${i.invoice_number}.`,d("finance",{invoice:s.invoice_id},a),"payment",s.id,a),C(d("finance",s.invoice_id?{invoice:s.invoice_id}:{},a),{replace:!0})}function bl(e){const t=Object.fromEntries(new FormData(e).entries()),a=u(),i=fa({...t,id:String(t.id||"").trim()||`expense-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});$l(i),n.modal="",n.sync={label:"Expense saved locally",mode:"local"},H("finance.expense","Expense saved",`${L()} saved a ${$(i.amount)} ${i.category} expense.`,d("finance",{expense:i.id},a),"expense",i.id,a),C(d("finance",{expense:i.id},a),{replace:!0})}function _l(e){const t=Object.fromEntries(new FormData(e).entries()),a=u(),i=ga({...t,id:String(t.id||"").trim()||`vendor-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});wl(i),n.modal="",n.sync={label:"Vendor saved locally",mode:"local"},H("finance.vendor","Vendor saved",`${L()} saved vendor ${i.name}.`,d("finance",{vendor:i.id},a),"vendor",i.id,a),C(d("finance",{vendor:i.id},a),{replace:!0})}async function yl(e){const t=n.files.find(s=>s.id===e);if(!t?.object_path){n.sync={label:"No stored object for this file",mode:"local"},p();return}const a=E();if(!a)return;const i=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(i.error||!i.data?.signedUrl){n.sync={label:"Download failed",mode:"local"},p();return}window.open(i.data.signedUrl,"_blank","noopener,noreferrer")}async function vl(e){const t=n.files.find(i=>i.id===e);if(!t)return;const a=E();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),n.files=n.files.filter(i=>i.id!==e),n.selectedFileId="",n.modal="",W(),p()}function Sa(e){const t=n.jobs.findIndex(a=>a.id===e.id);t>=0?n.jobs[t]=e:n.jobs.unshift(e),n.selectedJobId=e.id,W()}function xi(e){const t=n.tasks.findIndex(a=>a.id===e.id);t>=0?n.tasks[t]=e:n.tasks.unshift(e),n.selectedTaskId=e.id,W()}function Ri(e){const t=n.files.findIndex(a=>a.id===e.id);t>=0?n.files[t]=e:n.files.unshift(e),W()}function hl(e){const t=n.financeInvoices.findIndex(a=>a.id===e.id);t>=0?n.financeInvoices[t]=e:n.financeInvoices.unshift(e),W()}function $l(e){const t=n.financeExpenses.findIndex(a=>a.id===e.id);t>=0?n.financeExpenses[t]=e:n.financeExpenses.unshift(e),W()}function wl(e){const t=n.financeVendors.findIndex(a=>a.id===e.id);t>=0?n.financeVendors[t]=e:n.financeVendors.unshift(e),W()}function At(e){const t=n.memberships.findIndex(a=>a.company_id===e.company_id&&a.profile_id===e.profile_id);t>=0?n.memberships[t]=e:n.memberships.unshift(e),W()}function Pi(e){n.roleAssignments=n.roleAssignments.filter(t=>t.company_id!==e.company_id||t.profile_id!==e.profile_id),e.role_id&&n.roleAssignments.unshift(e)}function ka(e){if(!e)return;const t=O(e);t&&(t.invoice_total=ie(be(t.company_id).filter(a=>a.job_id===e),"total"),t.updated_at=new Date().toISOString(),Sa(t))}function Fe(){const e=document.getElementById("workspace");e&&(Fn(n.route),e.innerHTML=wn(n.route))}function ea(){const e=Ya(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:u(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const i=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:i,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:u(),jobId:t.get("job_id")||""}}function Sl(){const e=Ya(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||Ct(t.get("job_id")||t.get("project_id"))||localStorage.getItem(fe)||P(),i=Object.fromEntries(Object.entries(ws).map(([l,c])=>[l,d(c,{},a)]));Object.assign(i,{"/index.html":d("jobs",{},a),"/command.html":d("jobs",{},a),"/login.html":"/login"});let s=i[e];if(e==="/jobs"){const l=t.get("tab");l==="tasks"?s=d("tasks",te(t,["job_id","task_id","new","edit"]),a):l==="files"?s=d("files",te(t,["job_id","folder"]),a):l==="forms"?s=d("forms",te(t,["job_id"]),a):l==="analytics"?s=d("analytics",te(t,["job_id"]),a):s=d("jobs",te(t,["job_id","tab"]),a)}if(e==="/files"&&(s=d("files",te(t,["job_id","folder"]),a)),e==="/forms"&&(s=d("forms",te(t,["job_id"]),a)),e==="/analytics"&&(s=d("analytics",te(t,["job_id"]),a)),e==="/crm"&&(s=d("crm",te(t,["account"]),a)),e==="/finance"&&(s=d("finance",te(t,["invoice","expense","vendor","report"]),a)),e==="/messages"&&(s=d("messages",te(t,["conversation"]),a)),e==="/calendar"&&(s=d("calendar",{},a)),e==="/admin"&&(s=d("settings",{},a)),e==="/time"&&(s=d("time",{},a)),e==="/team"&&(s=d("team-chart",{},a)),e==="/team-chart"&&(s=d("team-chart",{},a)),e==="/approvals"&&(s=d("approvals",{},a)),e==="/clock"&&(s=d("clock",{},a)),e==="/task-management.html"){const l=t.get("project_id")||t.get("job_id")||"";s=d("tasks",l?{job_id:l}:{},Ct(l)||a)}const o=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(o){const l=decodeURIComponent(o[1]);s=d("tasks",{job_id:l},Ct(l)||a)}s&&window.history.replaceState({},"",_(s))}function kl(e){if(e.name!=="company")return"";const t=Ie();if(n.session?.auth==="supabase"&&!t.length)return null;if(!t.includes(e.companyId))return n.session?.auth==="supabase"?"":d(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||P());if(!ot.map(s=>s.id).includes(e.section))return d("jobs",{},e.companyId);const i=e.jobId?Ct(e.jobId):"";return i&&i!==e.companyId&&t.includes(i)?d(e.section,Object.fromEntries(e.params.entries()),i):""}function Ya(){let e=window.location.pathname||"/";return Oe&&e.startsWith(Oe)&&(e=e.slice(Oe.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function _(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),i=t.startsWith("/")?t:"/"+t;return`${Oe}${i}${a?`?${a}`:""}`||"/"}function C(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(Oe+"/")||Oe===""&&e.startsWith("/")?e:_(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),p()}function Dl(){return`${Ya()}${window.location.search}`}function ta(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?_(d("jobs",{},P())):`${t.pathname}${t.search}`}catch{return _(d("jobs",{},P()))}}function d(e="jobs",t={},a=u()){const i=new URLSearchParams(t);for(const[s,o]of[...i.entries()])(o==null||o==="")&&i.delete(s);return`/company/${encodeURIComponent(h(a||P()))}/${e}${i.toString()?`?${i.toString()}`:""}`}function Cl(e){return e.name==="company"?j(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":j(e.name||"Workspace")}function jl(e,t){const[a]=t.split("?"),i=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!i||e.name!=="company"?!1:e.companyId===decodeURIComponent(i[1])&&e.section===i[2]}function Il(e){return Xi.includes(e)?e:"pipeline"}function ql(e){return{pipeline:"Pipeline",list:"List",profile:"Profile"}[e]||e}function Ml(e){const t=e.companyId||n.activeCompanyId||P(),a=Ie();n.activeCompanyId=a.includes(t)?t:a[0]||P(),localStorage.setItem(fe,n.activeCompanyId)}function Fn(e){const t=u();e.jobId&&U(t).some(i=>i.id===e.jobId)&&(n.selectedJobId=e.jobId),(!n.selectedJobId||!U(t).some(i=>i.id===n.selectedJobId))&&(n.selectedJobId=U(t)[0]?.id||"");const a=e.params.get("task_id");a&&X(t).some(i=>i.id===a)&&(n.selectedTaskId=a),e.section!=="tasks"&&(n.selectedTaskId=""),n.driveFolder=e.params.get("folder")||"home"}function Al(e){const t=Ie(),a=h(e),i=t.includes(a)?a:t[0]||P();n.activeCompanyId=i,localStorage.setItem(fe,i),Fl();const s=n.route||ea(),o=s.name==="company"?s.section:"jobs";C(d(o,{},i))}function Fl(){n.modal="",n.selectedJobId="",n.selectedTaskId="",n.selectedFileId="",n.selectedFormId="",n.selectedQuestionId="",n.selectedFinanceInvoiceId="",n.selectedFinanceExpenseId="",n.selectedFinanceVendorId="",n.selectedCalendarEventId="",n.query="",n.fileQuery="",n.formQuery="",n.crmQuery="",n.stageFilter="all",n.crmStageFilter="all",n.crmOwnerFilter="all",n.taskStatusFilter="all",n.taskPriorityFilter="all",n.calendarQuery="",n.calendarTypeFilter="all",n.calendarScope="company",n.fileCategoryFilter="All categories",n.formTypeFilter="all",n.formsTab="library",n.driveFolder="home"}function Tl(e){const t=O(e);t&&(n.selectedJobId=e,C(d("jobs",{tab:"profile",job_id:e},t.company_id)))}function El(e){const t=aa(e);t&&(n.selectedTaskId=e,C(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function we(){return O(n.selectedJobId)||U(u())[0]||null}function O(e){return n.jobs.find(t=>t.id===e)||null}function aa(e){return n.tasks.find(t=>t.id===e)||null}function U(e=u()){return n.jobs.filter(t=>t.company_id===e)}function X(e=u()){return n.tasks.filter(t=>t.company_id===e)}function Ol(e=u()){const t=g().profile.id;return n.notifications.filter(a=>a.company_id===e&&a.recipient_profile_id===t).sort((a,i)=>Date.parse(i.created_at||0)-Date.parse(a.created_at||0))}function He(e=u()){const t=n.messageQuery.trim().toLowerCase(),a=n.messageFilter||"all";return n.messageConversations.filter(i=>i.company_id===e&&Ul(i)).filter(i=>a==="all"||i.type===a||a==="unread"&&Ga(i.id)>0).filter(i=>{if(!t)return!0;const s=Je(i.id).some(o=>o.body.toLowerCase().includes(t));return i.title.toLowerCase().includes(t)||s}).sort((i,s)=>Date.parse(s.last_message_at||s.updated_at||s.created_at||0)-Date.parse(i.last_message_at||i.updated_at||i.created_at||0))}function xl(e=u()){return He(e).reduce((t,a)=>t+Ga(a.id),0)}function Tn(e=u()){const t=He(e),i=n.route?.params?.get("conversation")||""||n.selectedConversationId;return t.find(s=>s.id===i)||t[0]||null}function Je(e){return n.messages.filter(t=>t.conversation_id===e&&!t.deleted_at).sort((t,a)=>Date.parse(t.created_at||0)-Date.parse(a.created_at||0))}function Rl(e){return n.messageAttachments.filter(t=>t.conversation_id===e)}function Pl(e){return n.messageAttachments.filter(t=>t.message_id===e)}function Ka(e){return n.messageAccess.filter(t=>t.conversation_id===e)}function Nl(e,t=g().profile.id){return n.messageReads.find(a=>a.conversation_id===e&&a.profile_id===t)||null}function Ga(e,t=g().profile.id){const a=Date.parse(Nl(e,t)?.last_read_at||0);return Je(e).filter(i=>i.sender_profile_id!==t&&Date.parse(i.created_at||0)>a).length}function Ul(e){if(!e||!A("messages.view",e.company_id))return!1;const t=g().profile,a=Ka(e.id);if(e.type==="company"||a.some(o=>o.target_type==="all_company"))return!0;const i=new Set([t.id,t.member_id,t.email].filter(Boolean).map(String));if(a.some(o=>o.target_type==="profile"&&i.has(o.target_id)))return!0;const s=[Ft(e.company_id,bt(e.company_id)),...n.roleAssignments.filter(o=>o.company_id===e.company_id&&o.profile_id===t.id).map(o=>o.role_id)];return a.some(o=>o.target_type==="role"&&s.includes(o.target_id))}function ia(e=u()){const t=n.calendarEvents.filter(c=>c.company_id===e&&Wl(c)).map(Vl),a=X(e).filter(c=>c.due&&c.status!=="done").filter(c=>A("calendar.view_team",e)||En(c.assignee_id)||c.creator_id===g().profile.member_id).map(Bl),i=A("finance.view",e)?be(e).filter(c=>c.due_date&&ne(c.id)>0).map(Hl):[],s=ti(e).filter(c=>c.type!=="Access request"||A("users.manage",e)).map(c=>Jl(c,e)),o=gt(e),l=o&&(A("calendar.view_team",e)||na(o.user_id))?[zl(o)]:[];return t.concat(a,i,s,l).sort((c,m)=>Date.parse(c.startsAt||0)-Date.parse(m.startsAt||0))}function Ll(e=u()){const t=n.calendarQuery.trim().toLowerCase();return ia(e).filter(a=>n.calendarScope==="company"||a.mine).filter(a=>n.calendarTypeFilter==="all"||a.type===n.calendarTypeFilter).filter(a=>t?[a.title,a.description,a.type,a.owner,a.linkLabel].some(i=>String(i||"").toLowerCase().includes(t)):!0).filter(a=>n.calendarView==="list"||Xl(a))}function Ql(e=u()){const t=Date.now();return ia(e).filter(a=>Date.parse(a.endsAt||a.startsAt||0)>=t).slice(0,9)}function Vl(e){const t=e.linked_type==="job"?O(e.linked_id):null;return{id:`manual:${e.id}`,source:"manual",sourceId:e.id,companyId:e.company_id,title:e.title,description:e.description,type:e.event_type,startsAt:e.starts_at,endsAt:e.ends_at||e.starts_at,allDay:e.all_day,dateKey:On(e.starts_at),owner:Gl(e.assigned_profile_id||e.created_by),mine:na(e.assigned_profile_id)||e.created_by===g().profile.id,href:Yl(e),linkLabel:t?.name||"",editable:pt(e)}}function Bl(e){const t=e.due_time?`${e.due}T${e.due_time}:00`:`${e.due}T12:00:00`;return{id:`task:${e.id}`,source:"task",sourceId:e.id,companyId:e.company_id,title:e.title,description:e.description||Ye(e.type),type:"Task due",startsAt:t,endsAt:t,allDay:!e.due_time,dateKey:e.due,owner:B(e.assignee_id),mine:En(e.assignee_id),href:d("tasks",{...e.project_id?{job_id:e.project_id}:{},task_id:e.id},e.company_id),linkLabel:O(e.project_id)?.name||"Company task",editable:!1}}function Hl(e){return{id:`invoice:${e.id}`,source:"invoice",sourceId:e.id,companyId:e.company_id,title:`${e.invoice_number} due`,description:`${$(ne(e.id))} outstanding for ${e.client_name||"client"}.`,type:"Invoice due",startsAt:`${e.due_date}T12:00:00`,endsAt:`${e.due_date}T12:00:00`,allDay:!0,dateKey:e.due_date,owner:e.client_name||"Finance",mine:A("finance.view",e.company_id),href:d("finance",{invoice:e.id},e.company_id),linkLabel:e.client_name||"Finance",editable:!1}}function Jl(e,t=u()){const a=String(e.updatedAt||v(0)).slice(0,10);return{id:`approval:${e.id}`,source:"approval",sourceId:e.id,companyId:t,title:e.title,description:e.meta,type:"Approval",startsAt:`${a}T12:00:00`,endsAt:`${a}T12:00:00`,allDay:!0,dateKey:a,owner:e.owner,mine:!0,href:e.href,linkLabel:e.status,editable:!1}}function zl(e){const t=On(e.started_at);return{id:`timer:${e.id}`,source:"timer",sourceId:e.id,companyId:e.company_id,title:e.task_title||"Active timer",description:"Current clock session.",type:"Time",startsAt:e.started_at,endsAt:new Date().toISOString(),allDay:!1,dateKey:t,owner:B(e.user_id),mine:na(e.user_id),href:d("time",{},e.company_id),linkLabel:"My time",editable:!1}}function Wl(e){return!e||!A("calendar.view",e.company_id)?!1:e.visibility!=="private"?!0:A("calendar.view_team",e.company_id)||pt(e)||na(e.assigned_profile_id)}function pt(e){return e?A("calendar.manage",e.company_id)||e.created_by===g().profile.id:!1}function Yl(e){return e.linked_type==="job"&&e.linked_id&&A("jobs.view",e.company_id)?d("jobs",{tab:"profile",job_id:e.linked_id},e.company_id):e.linked_type==="task"&&e.linked_id&&A("tasks.view",e.company_id)?d("tasks",{task_id:e.linked_id},e.company_id):e.linked_type==="form"&&e.linked_id&&A("forms.view",e.company_id)?d("forms",{form_id:e.linked_id},e.company_id):e.linked_type==="invoice"&&e.linked_id&&A("finance.view",e.company_id)?d("finance",{invoice:e.linked_id},e.company_id):""}function Kl(e,t=u()){return ia(t).find(a=>a.id===e)||null}function ft(e){return n.calendarEvents.find(t=>t.id===e)||null}function En(e){return String(e||"")===String(g().profile.member_id||g().profile.id||"")}function na(e){const t=g().profile;return[t.id,t.member_id,t.email].filter(Boolean).map(String).includes(String(e||""))}function Gl(e){return e?We(e)?.full_name||B(e):"Unassigned"}function On(e){if(!e)return v(0);const t=new Date(e);return Number.isNaN(t.getTime())?String(e).slice(0,10):t.toISOString().slice(0,10)}function xn(e,t){return e.filter(a=>a.dateKey===t).sort((a,i)=>Date.parse(a.startsAt||0)-Date.parse(i.startsAt||0))}function Zl(e){const t=Za(new Date),a=new Date(t);return a.setDate(t.getDate()+7),e.filter(i=>{const s=Date.parse(i.startsAt||i.dateKey||0);return s>=t.getTime()&&s<a.getTime()})}function Xl(e){const t=new Date(`${e.dateKey}T00:00:00`);if(n.calendarView==="month"){const s=new Date(`${n.calendarCursorDate}T00:00:00`);return t.getFullYear()===s.getFullYear()&&t.getMonth()===s.getMonth()}const a=Za(new Date(`${n.calendarCursorDate}T00:00:00`)),i=new Date(a);return i.setDate(a.getDate()+7),t>=a&&t<i}function ec(e){const t=new Date(`${e}T00:00:00`),a=new Date(t.getFullYear(),t.getMonth(),1),i=new Date(a);return i.setDate(a.getDate()-a.getDay()),Array.from({length:42},(s,o)=>{const l=new Date(i);return l.setDate(i.getDate()+o),{key:Xa(l),label:String(l.getDate()),month:l.getMonth()}})}function Rn(e){const t=Za(new Date(`${e}T00:00:00`));return Array.from({length:7},(a,i)=>{const s=new Date(t);return s.setDate(t.getDate()+i),{key:Xa(s),name:new Intl.DateTimeFormat("en-US",{weekday:"short"}).format(s),shortDate:new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(s)}})}function tc(){const e=new Date(`${n.calendarCursorDate}T00:00:00`);if(n.calendarView==="month")return new Intl.DateTimeFormat("en-US",{month:"long",year:"numeric"}).format(e);if(n.calendarView==="week"){const t=Rn(n.calendarCursorDate);return`${M(t[0].key)} - ${M(t[6].key)}`}return"Upcoming"}function Za(e){const t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-t.getDay()),t}function Xa(e){const t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0");return`${t}-${a}-${i}`}function Ni(e){const t=new Date(`${n.calendarCursorDate}T00:00:00`);n.calendarView==="month"?t.setMonth(t.getMonth()+e):t.setDate(t.getDate()+e*7),n.calendarCursorDate=Xa(t)}function ac(e){return e.reduce((t,a)=>(t[a.dateKey]=t[a.dateKey]||[],t[a.dateKey].push(a),t),{})}function Pn(e){if(e.allDay)return"All day";const t=new Date(e.startsAt);return Number.isNaN(t.getTime())?"Timed":new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}).format(t)}function ic(e){return`calendar-type-${ht(e||"event")}`}function nc(e){return e==="Task due"?"ti-list-check":e==="Invoice due"?"ti-file-dollar":e==="Approval"?"ti-user-check":e==="Time"?"ti-clock":e.includes("Install")?"ti-hammer":e.includes("Estimate")?"ti-calendar-dollar":e.includes("Personal")?"ti-user":"ti-calendar-event"}function ke(e=u()){return n.files.filter(t=>t.company_id===e)}function et(e=u()){return n.driveFolders.filter(t=>t.company_id===e)}function De(e=u()){return n.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function Ce(e=u()){const t=new Map;De(e).forEach(i=>{t.set(i.id,{profile_id:"",member_id:i.id,name:i.full_name||i.name,email:i.email,avatar_url:i.avatar_url,role:Tt(e,i.id).toLowerCase(),role_label:Tt(e,i.id),role_id:"",status:i.active?"active":"disabled"})}),n.memberships.filter(i=>i.company_id===e).forEach(i=>{const s=We(i.profile_id),o=i.member_id?n.teamMembers.find(b=>b.id===i.member_id):null,l=n.roleAssignments.find(b=>b.company_id===e&&b.profile_id===i.profile_id),c=l?ze(e,l.role_id):null,m=i.profile_id||i.member_id;t.set(m,{profile_id:i.profile_id,member_id:i.member_id,name:s?.full_name||o?.full_name||s?.email||o?.name||m||"User",email:s?.email||o?.email||"",avatar_url:s?.avatar_url||o?.avatar_url||"",role:i.role,role_label:c?.name||j(i.role),role_id:l?.role_id||Ft(e,i.role),status:i.status||"active"})});const a=g().profile;if(n.session?.auth==="supabase"&&a?.id&&!t.has(a.id)){const i=oe(e,a.id);i&&t.set(a.id,{profile_id:a.id,member_id:a.member_id||"",name:a.full_name||a.email,email:a.email,avatar_url:a.avatar_url,role:i.role,role_label:j(i.role),role_id:Ft(e,i.role),status:i.status||"active"})}return[...t.values()].sort((i,s)=>(i.status==="active"?0:1)-(s.status==="active"?0:1)||i.name.localeCompare(s.name))}function sc(e=u()){return n.companyInvites.filter(t=>t.company_id===e&&t.status==="pending").sort((t,a)=>Date.parse(a.created_at||0)-Date.parse(t.created_at||0))}function rc(e=u()){return n.auditEvents.filter(t=>t.company_id===e).sort((t,a)=>Date.parse(a.created_at||0)-Date.parse(t.created_at||0))}function oc(e){const t=We(e.actor_profile_id),a=t?.full_name||t?.email||ys(e.actor_profile_id||"system");return`
    <article class="access-audit-row">
      ${le({full_name:a,email:t?.email||""},"avatar small")}
      <span>
        <strong>${r(j(String(e.event_type||"access.event").replace(/[._-]+/g," ")))}</strong>
        <small>${r(a)} / ${M(e.created_at)}</small>
      </span>
    </article>
  `}function ge(e=u()){const t=n.roles.filter(a=>a.company_id===e);return t.length?t.sort((a,i)=>i.priority-a.priority||a.name.localeCompare(i.name)):[xe({id:`owner-${e}`,company_id:e,name:"Owner",color:"#f0b23b",priority:1e3,is_system:!0}),xe({id:`admin-${e}`,company_id:e,name:"Admin",color:"#60a5fa",priority:800,is_system:!0}),xe({id:`staff-${e}`,company_id:e,name:"Staff",color:"#15803d",priority:100,is_system:!0})]}function ze(e,t){return ge(e).find(a=>a.id===t)||null}function sa(e=u()){return!n.rolePreview||n.rolePreview.company_id!==e?null:ze(e,n.rolePreview.role_id)}function Da(e,t){if(!t)return!0;const a=String(e?.name||"").toLowerCase();if(["owner","admin","developer"].includes(a))return!0;const i=Nn(t),s=n.rolePermissions.filter(c=>c.role_id===e?.id);if(s.some(c=>(i.includes(c.permission_key)||c.permission_key==="*")&&c.effect==="deny"))return!1;if(s.some(c=>(i.includes(c.permission_key)||c.permission_key==="*")&&c.effect==="allow"))return!0;if(s.length)return!1;const o=ei(e),l=It[o]||It.member;return l.includes("*")||i.some(c=>l.includes(c))}function Nn(e){return Z([e,...$s[e]||[]])}function Ft(e,t){const a=String(t||"").toLowerCase();return ge(e).find(i=>i.name.toLowerCase()===a||i.id.toLowerCase()===a)?.id||""}function lc(e=u()){const t=ge(e).filter(a=>a.name.toLowerCase()!=="owner");return t.find(a=>a.name.toLowerCase()==="staff")?.id||t.find(a=>a.name.toLowerCase()==="member")?.id||t[0]?.id||""}function cc(){const e=new Uint8Array(8);return crypto.getRandomValues(e),`QH-${Array.from(e,t=>t.toString(36).padStart(2,"0")).join("").toUpperCase()}`}function dc(e){const t=new URL(_("/login"),window.location.origin);return t.searchParams.set("invite",e.token),t.toString()}function ei(e){const t=String(e?.name||"").toLowerCase().replace(/\s+/g,"_");return["owner","member","worker","sales","supervisor","admin","developer","construction_supervisor"].includes(t)?t:"member"}function We(e){return n.profiles.find(t=>t.id===e)||(g().profile.id===e?g().profile:null)}function Un(e=u()){const t=n.query.trim().toLowerCase();return U(e).filter(a=>n.stageFilter!=="all"&&a.stage!==n.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,F(a.company_id)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function ra(e=u()){const t=new Map;return U(e).forEach(a=>{const i=String(a.client_name||"").trim()||"Unassigned customer",s=`account-${ht(i.toLowerCase())}`;t.has(s)||t.set(s,{key:s,name:i,jobs:[]}),t.get(s).jobs.push(a)}),Array.from(t.values()).map(a=>{const i=a.jobs.slice().sort((T,ee)=>Date.parse(ee.updated_at||ee.created_at||0)-Date.parse(T.updated_at||T.created_at||0)),s=i[0]||null,o=i.map(T=>T.id),l=X(e).filter(T=>o.includes(T.project_id)),c=ye(e).filter(T=>o.includes(T.linked_job_id)),m=ke(e).filter(T=>o.includes(T.job_id)),b=Z(i.map(T=>T.contact_name)),f=Z(i.map(T=>T.owner_name)),I=Z(i.map(T=>T.site_address)),V=i.map(T=>T.priority||"Medium").sort((T,ee)=>Ve(ee)-Ve(T))[0]||"Medium";return{...a,jobs:i,tasks:l,latestJob:s,contacts:b,owners:f,addresses:I,forms:c,files:m,primaryContact:b[0]||"No contact",owner:f[0]||"Unassigned",stage:s?.stage||"Lead",priority:V,estimateTotal:ie(i,"estimate_total"),fileCount:m.length,formCount:c.length,updatedAt:s?.updated_at||s?.created_at||new Date().toISOString(),subtitle:I[0]||`${i.length} linked job${i.length===1?"":"s"}`}}).sort((a,i)=>Date.parse(i.updatedAt||0)-Date.parse(a.updatedAt||0))}function mc(e=u()){const t=n.crmQuery.trim().toLowerCase();return ra(e).filter(a=>n.crmStageFilter!=="all"&&!a.jobs.some(i=>i.stage===n.crmStageFilter)||n.crmOwnerFilter!=="all"&&!a.owners.includes(n.crmOwnerFilter)?!1:t?[a.name,a.primaryContact,a.owner,a.stage,...a.addresses,...a.contacts,...a.jobs.map(i=>i.name)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function uc(e,t){return ra(e).find(a=>a.key===t)||null}function pc(e=u()){return Z(U(e).map(t=>t.owner_name)).sort((t,a)=>t.localeCompare(a))}function Ln(e=u()){const t=g().profile.member_id||"",a=X(e).slice().sort(Li),i=a.filter(ai),s=i.filter(I=>I.due===v(0)),o=i.filter(I=>Yi(I.due)<0),l=i.filter(I=>{const V=Yi(I.due);return V>=0&&V<=7}),c=i.filter(I=>I.assignee_id===t),m=i.filter(I=>["review","pending"].includes(I.status)),b=a.filter(I=>I.status==="done"),f=Z(o.concat(s,c,m,l).map(I=>I.id)).map(I=>a.find(V=>V.id===I)).filter(Boolean).sort(Li);return{tasks:a,open:i,dueToday:s,overdue:o,thisWeek:l,assignedToMe:c,review:m,done:b,focus:f}}function ti(e=u()){const t=ye(e).filter(s=>(s.require_approval||s.type==="Client approval")&&!["Archived","Closed","Approved"].includes(s.status)).map(s=>({id:`form:${s.id}`,title:s.title,meta:O(s.linked_job_id)?.name||s.description||"Company form",type:"Form approval",owner:B(s.creator_id),status:s.status,updatedAt:s.updated_at||s.created_at,href:d("forms",{form_id:s.id},e)})),a=X(e).filter(s=>["review","pending"].includes(s.status)).map(s=>({id:`task:${s.id}`,title:s.title,meta:O(s.project_id)?.name||s.description||"Company task",type:"Task review",owner:B(s.assignee_id),status:me(s.status),updatedAt:s.updated_at||s.due,href:d("tasks",{...s.project_id?{job_id:s.project_id}:{},task_id:s.id},e)})),i=n.memberships.filter(s=>s.company_id===e&&s.status!=="active").map(s=>({id:`access:${s.profile_id||s.member_id}`,title:B(s.member_id||s.profile_id),meta:`${j(s.role)} access request`,type:"Access request",owner:"Quest admin",status:j(s.status),updatedAt:new Date().toISOString(),href:d("settings",{tab:"access"},e)}));return t.concat(a,i).sort((s,o)=>Date.parse(o.updatedAt||0)-Date.parse(s.updatedAt||0))}function gt(e=u()){const t=n.activeTimer;return!t||t.company_id!==e?null:t}function Qn(e=u()){return n.timeEntries.filter(t=>t.company_id===e).sort((t,a)=>Date.parse(a.started_at||0)-Date.parse(t.started_at||0))}function Ui(e=u(),t=0){return Qn(e).filter(a=>Date.parse(a.started_at||0)>=t).reduce((a,i)=>a+N(i.duration_ms),0)}function fc(e=u(),t=""){n.activeTimer&&Vn(!1);const a=t?aa(t):null;n.activeTimer={id:`timer-${crypto.randomUUID()}`,company_id:e,user_id:g().profile.member_id||g().profile.id,task_id:a?.company_id===e?a.id:"",task_title:a?.company_id===e?a.title:"",started_at:new Date().toISOString()},is(),n.sync={label:"Clock started locally",mode:"local"},p()}function Vn(e=!0){const t=n.activeTimer;if(!t)return;const a=new Date().toISOString(),i=Math.max(0,Date.parse(a)-Date.parse(t.started_at||a));n.timeEntries.unshift({id:`time-${crypto.randomUUID()}`,company_id:t.company_id,user_id:t.user_id,task_id:t.task_id||"",task_title:t.task_title||"",started_at:t.started_at,ended_at:a,duration_ms:i,notes:t.task_title?"Task timer":"General shift"}),n.activeTimer=null,is(),n.sync={label:"Clock stopped locally",mode:"local"},e&&p()}function ai(e){return e.status!=="done"}function Li(e,t){const a=Date.parse(e.due||0)-Date.parse(t.due||0);return a||Ve(t.priority)-Ve(e.priority)}function be(e=u()){return n.financeInvoices.filter(t=>t.company_id===e).sort(st("updated_at"))}function Bn(e=u()){return n.financePayments.filter(t=>t.company_id===e)}function ii(e=u()){return n.financeExpenses.filter(t=>t.company_id===e).sort(st("updated_at"))}function ni(e=u()){return n.financeVendors.filter(t=>t.company_id===e)}function je(e){return n.financeInvoices.find(t=>t.id===e)||null}function Hn(e){return n.financeExpenses.find(t=>t.id===e)||null}function si(e){return n.financeVendors.find(t=>t.id===e)||null}function Ca(e){return si(e)?.name||"No vendor"}function Jn(e){return n.financePayments.filter(t=>t.invoice_id===e).sort(st("received_at"))}function ri(e){return ie(Jn(e),"amount")}function ne(e){const t=je(e);return Math.max(0,N(t?.total)-ri(e))}function zn(e){const t=ne(e.id);return t<=0&&N(e.total)>0?"Paid":t<N(e.total)?"Partially paid":e.status==="Sent"&&bs(e.due_date)>0?"Overdue":e.status}function Wn(e=u()){const t=be(e),a=Bn(e),i=ii(e).filter(c=>["Approved","Paid"].includes(c.status)),s={current:0,thirty:0,sixty:0,overSixty:0};t.forEach(c=>{const m=ne(c.id);if(!m)return;const b=bs(c.due_date);b<=0?s.current+=m:b<=30?s.thirty+=m:b<=60?s.sixty+=m:s.overSixty+=m});const o=ie(a,"amount"),l=ie(i,"amount");return{pipeline:ie(U(e),"estimate_total"),invoiced:ie(t,"total"),collected:o,outstanding:t.reduce((c,m)=>c+ne(m.id),0),expenses:l,net:o-l,aging:s}}function gc(e=u(),t=""){const a=n.query.trim().toLowerCase();return X(e).filter(i=>t&&i.project_id!==t||n.taskStatusFilter!=="all"&&i.status!==n.taskStatusFilter||n.taskPriorityFilter!=="all"&&i.priority!==n.taskPriorityFilter?!1:a?[i.title,i.description,Ye(i.type),B(i.assignee_id),O(i.project_id)?.name].some(s=>String(s||"").toLowerCase().includes(a)):!0)}function Yn(){const e=Ie();return n.companies.filter(t=>e.includes(t.id))}function A(e,t=u()){if(!e)return!0;const a=sa(t);if(a)return Da(a,e);const i=Nn(e),s=g().profile;if(n.session?.auth==="supabase"){const c=oe(t,s.id);if(!c||c.status!=="active")return!1;if(["owner","developer"].includes(String(c.role).toLowerCase()))return!0;const m=n.roleAssignments.filter(f=>f.company_id===t&&f.profile_id===s.id).map(f=>f.role_id),b=n.rolePermissions.filter(f=>m.includes(f.role_id));if(b.some(f=>(i.includes(f.permission_key)||f.permission_key==="*")&&f.effect==="deny"))return!1;if(b.some(f=>(i.includes(f.permission_key)||f.permission_key==="*")&&f.effect==="allow"))return!0}const o=String(oe(t,s.id)?.role||s.role||"member").toLowerCase(),l=It[o]||It.member;return l.includes("*")||i.some(c=>l.includes(c))}function Ie(){const e=g().profile,t=n.companies.map(s=>s.id);if(n.session?.auth==="supabase"){const s=n.memberships.filter(o=>o.profile_id===e.id&&o.status==="active").map(o=>h(o.company_id));return Z(s).filter(o=>t.includes(o))}if(["developer","admin"].includes(e.role))return Z(t.length?t:ut.map(s=>h(s.id)));const a=n.memberships.filter(s=>s.profile_id===e.id&&s.status==="active").map(s=>h(s.company_id)),i=a.length?a:e.company_ids||[];return Z(i.map(h)).filter(s=>t.includes(s))}function u(){const e=Ie();return e.includes(n.activeCompanyId)?n.activeCompanyId:e[0]||n.activeCompanyId||P()}function P(){return h(ut[0].id)}function oa(e){const t=h(e);return n.companies.find(a=>a.id===t)||ut.map(_t).find(a=>a.id===t)||null}function F(e){const t=oa(e);return t?la(t):e||"Company"}function la(e){return e.short_name||e.label||e.name||e.id}function _e(e){return oa(e)?.color||"#f0b23b"}function Ct(e){return h(n.jobs.find(t=>t.id===e)?.company_id||"")}function bt(e){const t=sa(e);if(t)return`Preview: ${t.name}`;const a=g().profile;return n.session?.auth!=="supabase"&&["developer","admin"].includes(a.role)?j(a.role):j(oe(e,a.id)?.role||a.role||"member")}function Tt(e,t){const a=n.memberships.find(i=>i.company_id===e&&(i.member_id===t||i.profile_id===t));return j(a?.role||"member")}function oe(e,t){return n.memberships.find(a=>a.company_id===e&&a.profile_id===t)||null}function bc(e=u()){return n.memberships.filter(t=>t.company_id===e&&t.role==="owner"&&t.status==="active")}function Kn(e,t){const a=bc(e);return a.length===1&&a[0].profile_id===t}function _c(e,t,a,i){const s=oe(e,t),o=ei(a);if(s?.role==="owner"&&s.status==="active"&&(o!=="owner"||i!=="active")&&Kn(e,t))return"Promote another active Owner before changing the last Owner.";const l=oe(e,g().profile.id),c=String(g().profile.role||"").toLowerCase();return(["owner","developer"].includes(s?.role)||["owner","developer"].includes(o))&&!["owner","developer"].includes(String(l?.role||c).toLowerCase())?"Only an Owner can change Owner or Developer access.":""}function oi(e=u()){return n.subscriptions.find(t=>t.company_id===e)||null}function li(e=u()){if(n.session?.auth!=="supabase")return!0;const t=oi(e);return!!(!t||["trialing","active","past_due","grace"].includes(t.status)||t.grace_ends_at&&Date.parse(t.grace_ends_at)>Date.now())}function Gn(e=u()){const t=oi(e);return t?t.status==="trialing"?`Trial - ${M(t.trial_ends_at)}`:t.status==="active"?"Active subscription":t.status==="past_due"?"Past due grace":t.status==="grace"?`Grace - ${M(t.grace_ends_at)}`:j(t.status):n.session?.auth==="supabase"?"Trial pending":"Demo mode"}function B(e){const t=n.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function ca(e){const t=We(e);return t?.full_name||t?.email||B(e)}function da(e){return n.tasks.filter(t=>t.project_id===e).length}function Et(e){return n.files.filter(t=>t.job_id===e).length}function h(e){return{"quest-roofing":"roofing","quest-drafting":"drafting"}[String(e||"").trim()]||String(e||"").trim()}function Zn(e){const t=new Map;return e.map(_t).forEach(a=>{!a.id||t.has(a.id)||t.set(a.id,a)}),Array.from(t.values())}function _t(e){return{id:h(e.id||""),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function Ue(e){return{id:String(e.id||""),company_id:h(e.company_id||P()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:lt.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:N(e.estimate_total),invoice_total:N(e.invoice_total),task_count:N(e.task_count),file_count:N(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function Le(e){const t=qt.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=ct.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:en.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:h(e.company_id||P()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||v(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:qt.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function tt(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:h(e.company_id||P()),job_id:String(e.job_id||""),folder:String(e.folder||jd(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:N(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function ci(e){return{id:String(e.id||`folder-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),name:String(e.name||"New folder").trim()||"New folder",parent_key:String(e.parent_key||"home"),created_by_label:String(e.created_by_label||"Quest HQ"),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function yt(e){const t=Array.isArray(e.questions)?e.questions.map(ma):[],a=dt.includes(e.type)?e.type:"Internal",i=Ua.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:i,audience:String(e.audience||"Internal").trim(),creator_id:String(e.creator_id||e.created_by||e.created_by_id||""),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function ma(e){const t=mt.some(([i])=>i===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(i=>String(i||"").trim()).filter(Boolean):[]};return nt(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function di(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function ua(e){const t=N(e.subtotal),a=N(e.tax),i=N(e.total)||t+a;return{id:String(e.id||`invoice-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),job_id:String(e.job_id||""),client_name:String(e.client_name||"").trim(),invoice_number:String(e.invoice_number||`INV-${Date.now()}`).trim(),status:tn.includes(e.status)?e.status:"Draft",issue_date:String(e.issue_date||v(0)).slice(0,10),due_date:String(e.due_date||v(30)).slice(0,10),subtotal:t,tax:a,total:i,notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function pa(e){return{id:String(e.id||`payment-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),invoice_id:String(e.invoice_id||""),amount:N(e.amount),method:sn.includes(e.method)?e.method:"ACH",received_at:String(e.received_at||v(0)).slice(0,10),reference:String(e.reference||"").trim(),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString()}}function fa(e){return{id:String(e.id||`expense-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),job_id:String(e.job_id||""),vendor_id:String(e.vendor_id||""),category:Gt.includes(e.category)?e.category:"Other",amount:N(e.amount),status:an.includes(e.status)?e.status:"Pending",spent_at:String(e.spent_at||v(0)).slice(0,10),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function ga(e){return{id:String(e.id||`vendor-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),name:String(e.name||"New vendor").trim()||"New vendor",contact_name:String(e.contact_name||"").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),category:Gt.includes(e.category)?e.category:"Other",status:nn.includes(e.status)?e.status:"Active",notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function mi(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,supervisor_id:String(e.supervisor_id||e.manager_id||""),company_ids:Array.isArray(e.company_ids)?Z(e.company_ids.map(h)):[]}}function Ot(e){const t=["active","pending","disabled","left"].includes(String(e.status))?String(e.status):"active";return{company_id:h(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:t,disabled_at:e.disabled_at||"",disabled_by:String(e.disabled_by||""),left_at:e.left_at||"",last_active_at:e.last_active_at||""}}function yc(e){return{company_id:h(e.company_id||""),status:String(e.status||"trialing"),plan_code:String(e.plan_code||"quest_company_300"),amount_cents:N(e.amount_cents||3e4),currency:String(e.currency||"usd"),stripe_customer_id:String(e.stripe_customer_id||""),stripe_subscription_id:String(e.stripe_subscription_id||""),current_period_end:e.current_period_end||"",trial_ends_at:e.trial_ends_at||"",grace_ends_at:e.grace_ends_at||""}}function xe(e){return{id:String(e.id||""),company_id:h(e.company_id||""),name:String(e.name||"Role").trim()||"Role",color:String(e.color||"#f0b23b"),priority:N(e.priority),is_system:e.is_system===!0,created_by:String(e.created_by||"")}}function ja(e){return{role_id:String(e.role_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function Xn(e){return{company_id:h(e.company_id||""),profile_id:String(e.profile_id||""),role_id:String(e.role_id||""),assigned_by:String(e.assigned_by||"")}}function vc(e){return{id:String(e.id||""),company_id:h(e.company_id||""),resource_type:String(e.resource_type||""),resource_id:String(e.resource_id||""),principal_type:String(e.principal_type||""),principal_id:String(e.principal_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function hc(e){return{id:String(e.id||""),company_id:h(e.company_id||""),resource_type:String(e.resource_type||""),field_key:String(e.field_key||""),role_id:String(e.role_id||""),visibility:["visible","masked","hidden"].includes(e.visibility)?e.visibility:"visible",editable:e.editable!==!1}}function xt(e){return{id:String(e.id||""),company_id:h(e.company_id||""),email:String(e.email||""),role_id:String(e.role_id||""),token:String(e.token||""),status:String(e.status||"pending"),expires_at:e.expires_at||"",invited_by:String(e.invited_by||""),accepted_by:String(e.accepted_by||""),created_at:e.created_at||""}}function es(e){return{id:String(e.id||""),company_id:h(e.company_id||""),profile_id:String(e.profile_id||""),requested_email:String(e.requested_email||""),status:String(e.status||"pending"),message:String(e.message||""),reviewed_by:String(e.reviewed_by||""),created_at:e.created_at||""}}function ce(e){return{id:String(e.id||""),company_id:h(e.company_id||""),title:String(e.title||"Messages").trim()||"Messages",type:La.includes(e.type)?e.type:"custom",created_by:String(e.created_by||""),last_message_at:e.last_message_at||e.updated_at||e.created_at||"",created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Y(e){return{id:String(e.id||""),conversation_id:String(e.conversation_id||""),company_id:h(e.company_id||""),target_type:["all_company","role","profile"].includes(e.target_type)?e.target_type:"profile",target_id:String(e.target_id||""),created_at:e.created_at||""}}function ue(e){return{id:String(e.id||""),conversation_id:String(e.conversation_id||""),company_id:h(e.company_id||""),sender_profile_id:String(e.sender_profile_id||e.created_by||""),body:String(e.body||""),message_type:String(e.message_type||"text"),deleted_at:e.deleted_at||"",created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Se(e){return{id:String(e.id||""),conversation_id:String(e.conversation_id||""),message_id:String(e.message_id||""),company_id:h(e.company_id||""),bucket_id:String(e.bucket_id||"quest-message-attachments"),object_path:String(e.object_path||""),file_name:String(e.file_name||"attachment"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:N(e.size_bytes),preview_url:String(e.preview_url||""),created_at:e.created_at||new Date().toISOString()}}function vt(e){return{conversation_id:String(e.conversation_id||""),company_id:h(e.company_id||""),profile_id:String(e.profile_id||""),last_read_at:e.last_read_at||"",updated_at:e.updated_at||e.last_read_at||""}}function Qe(e){const t=e.starts_at||new Date().toISOString(),a=Kt.includes(e.event_type)?e.event_type:"Company event",i=["company","private"].includes(e.visibility)?e.visibility:"company",s=["","job","task","form","invoice"].includes(e.linked_type)?e.linked_type:"";return{id:String(e.id||`calendar-${crypto.randomUUID()}`),company_id:h(e.company_id||P()),title:String(e.title||"Calendar event").trim()||"Calendar event",description:String(e.description||"").trim(),event_type:a,starts_at:t,ends_at:e.ends_at||t,all_day:e.all_day===!0||e.all_day==="true"||e.all_day==="on",visibility:i,linked_type:s,linked_id:String(e.linked_id||""),assigned_profile_id:String(e.assigned_profile_id||""),created_by:String(e.created_by||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Qi(e){return{id:e.id,company_id:e.company_id,title:e.title,type:e.type,created_by:e.created_by||g().profile.id,last_message_at:e.last_message_at||null}}function $c(e){return{conversation_id:e.conversation_id,company_id:e.company_id,target_type:e.target_type,target_id:e.target_id}}function wc(e){return{id:e.id,conversation_id:e.conversation_id,company_id:e.company_id,sender_profile_id:e.sender_profile_id,body:e.body,message_type:e.message_type,deleted_at:e.deleted_at||null}}function Sc(e){return{id:e.id,conversation_id:e.conversation_id,message_id:e.message_id,company_id:e.company_id,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes}}function kc(e){return{id:rt(e.id)?e.id:void 0,company_id:e.company_id,title:e.title,description:e.description,event_type:e.event_type,starts_at:e.starts_at,ends_at:e.ends_at||e.starts_at,all_day:e.all_day,visibility:e.visibility,linked_type:e.linked_type||"",linked_id:e.linked_id||"",assigned_profile_id:e.assigned_profile_id||"",created_by:rt(e.created_by)?e.created_by:g().profile.id}}function Dc(e){return{conversation_id:e.conversation_id,company_id:e.company_id,profile_id:e.profile_id,last_read_at:e.last_read_at||new Date().toISOString()}}function Cc(e=u()){return Ue({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function jc(e=u(),t=""){return Le({id:"",title:"",company_id:e,project_id:t,assignee_id:De(e)[0]?.id||"abraham",creator_id:g().profile.member_id||"abraham",due:v(1),priority:"medium",status:"todo",type:"admin"})}function Ic(e=u()){const t=we();return ua({id:"",company_id:e,job_id:t?.company_id===e?t.id:"",client_name:t?.company_id===e?t.client_name:"",invoice_number:Id(e),status:"Draft",issue_date:v(0),due_date:v(30),subtotal:t?.company_id===e?t.estimate_total:0,tax:0,notes:""})}function qc(e=u(),t=""){const a=t?je(t):be(e).find(s=>ne(s.id)>0),i=a?.company_id===e?a:null;return pa({id:"",company_id:e,invoice_id:i?.id||"",amount:i?ne(i.id):0,method:"ACH",received_at:v(0),reference:"",notes:""})}function Mc(e=u(),t=""){return fa({id:"",company_id:e,job_id:we()?.company_id===e?we().id:"",vendor_id:t||ni(e)[0]?.id||"",category:"Materials",status:"Pending",amount:0,spent_at:v(0),notes:""})}function Ac(e=u()){return ga({id:"",company_id:e,name:"",category:"Materials",status:"Active"})}function Fc(e=u()){const t=new Date;t.setHours(t.getHours()+1,0,0,0);const a=new Date(t);return a.setHours(t.getHours()+1),Qe({id:"",company_id:e,title:"",description:"",event_type:"Company event",starts_at:t.toISOString(),ends_at:a.toISOString(),all_day:!1,visibility:"company",linked_type:"",linked_id:"",assigned_profile_id:g().profile.member_id||g().profile.id,created_by:g().profile.id})}function Tc(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function Ec(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function g(){return n.session?n.session.auth==="supabase"?n.session:{...n.session,profile:{...Ia().profile,...n.session.profile||{},...n.profileDraft||{}}}:Ia()}function Oc(e,t){const a=!!(e.user.email_confirmed_at||e.user.confirmed_at);return{auth:"supabase",access_token:e.access_token,refresh_token:e.refresh_token,user:{id:e.user.id,email:e.user.email||"",email_confirmed_at:e.user.email_confirmed_at||e.user.confirmed_at||"",email_verified:a},profile:ui(t||{},{id:e.user.id,email:e.user.email||"",full_name:e.user.user_metadata?.full_name||e.user.email||"Quest user",role:"member",member_id:"",company_ids:[],avatar_url:"",email_verified:a})}}function Ia(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",email_verified:!0,...n.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:Pe.localUsername,email:e.email},profile:e}}function ui(e,t={}){const a=String(e.role||t.role||"member").toLowerCase(),i=typeof e.email_verified=="boolean"?e.email_verified:t.email_verified===!0;return{id:String(e.id||t.id||""),email:String(e.email||t.email||""),full_name:String(e.full_name||t.full_name||e.email||t.email||"Quest user"),role:a,role_label:j(a),member_id:String(e.member_id||t.member_id||""),company_ids:Array.isArray(e.company_ids)?Z(e.company_ids.map(h)):t.company_ids||[],avatar_url:String(e.avatar_url||t.avatar_url||""),approved:e.approved!==!1,email_verified:i,supervisor_id:String(e.supervisor_id||t.supervisor_id||"")}}function pi(e){return{id:String(e.id||`notification-${crypto.randomUUID()}`),company_id:h(e.company_id||""),recipient_profile_id:String(e.recipient_profile_id||"basic-quest-user"),type:String(e.type||"general"),title:String(e.title||"Notification"),body:String(e.body||""),href:String(e.href||""),source_type:String(e.source_type||""),source_id:String(e.source_id||""),read_at:String(e.read_at||""),created_at:String(e.created_at||new Date().toISOString())}}function xc(e=g()){return e.auth!=="supabase"?!0:e.user?.email_verified===!0||!!e.user?.email_confirmed_at||e.profile?.email_verified===!0}function J(e,t,a=""){const i=hn();return`
    <section class="workspace-head">
      <div class="head-copy">
        <span class="head-symbol">${K(i)}</span>
        <div>
          <div class="context-line"><span>${r(F(u()))}</span><b>${r(bt(u()))}</b></div>
          <h1>${r(e)}</h1>
          <p>${r(t)}</p>
        </div>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function Rc(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric">${K($n(t),"metric-symbol")}<span>${r(t)}</span><strong>${r(a)}</strong></article>`).join("")}</section>`}function Pc(e){return`
    <button class="queue-row" type="button" data-select-job="${r(e.id)}">
      <span><strong>${r(e.name)}</strong><small>${r(e.client_name||F(e.company_id))}</small></span>
      ${fi(e.priority)}
      <b>${r(e.stage)}</b>
    </button>
  `}function ba(e){return`
    <button class="queue-row" type="button" data-select-task="${r(e.id)}">
      <span><strong>${r(e.title)}</strong><small>${r(O(e.project_id)?.name||F(e.company_id))}</small></span>
      ${ts(e.priority)}
      <b>${r(me(e.status))}</b>
    </button>
  `}function Nc(e){return`
    <button class="job-card priority-${r(e.priority.toLowerCase())} ${e.id===n.selectedJobId?"active":""}" type="button" data-select-job="${r(e.id)}">
      <strong>${r(e.name)}</strong>
      <span>${r(e.client_name||"No client")}</span>
      <small>${r(F(e.company_id))} - ${r(e.owner_name||"Unassigned")}</small>
      <em>${r(da(e.id))} tasks</em>
    </button>
  `}function wt(e,t,a,i){return`
    <a class="mini-link" href="${_(e)}" data-router>
      <i class="ti ${r(t)}"></i>
      <span><strong>${r(a)}</strong><small>${r(i)}</small></span>
    </a>
  `}function Q(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${r(t)}</span><strong>${r(a)}</strong></div>`).join("")}</div>`}function D(e,t,a="",i=!1,s="text",o=""){return`<label class="${r(o)}"><span>${r(e)}</span><input name="${r(t)}" type="${r(s)}" value="${r(a)}" ${i?"required":""} /></label>`}function pe(e,t,a="",i=""){return`<label class="${r(i)}"><span>${r(e)}</span><textarea name="${r(t)}" rows="4">${r(a)}</textarea></label>`}function R(e,t,a,i){return`
    <label><span>${r(e)}</span><select name="${r(t)}">
      ${i.map(([s,o])=>`<option value="${r(s)}" ${String(s)===String(a)?"selected":""}>${r(o)}</option>`).join("")}
    </select></label>
  `}function fi(e){return`<span class="priority ${r(String(e).toLowerCase())}">${r(e)}</span>`}function ts(e){return`<span class="priority ${r(e)}">${r(j(e))}</span>`}function as(e){return`<span class="status-pill ${r(e)}">${r(me(e))}</span>`}function Uc(e){return`<span class="finance-status ${r(ht(e))}">${r(e)}</span>`}function le(e,t){if(e.avatar_url)return`<span class="${r(t)}"><img src="${r(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${r(t)}">${r(a)}</span>`}function Lc(e=u()){const t=Ce(e).filter(a=>a.status==="active").map(a=>[a.profile_id||a.member_id,a.name||a.email||a.member_id]);return[["","Unassigned"]].concat(t)}function Vi(e){const t=new Date(e||Date.now());if(Number.isNaN(t.getTime()))return"";const a=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return`${a}-${i}-${s}T${o}:${l}`}function Bi(e){const t=new Date(e||Date.now());return Number.isNaN(t.getTime())?new Date().toISOString():t.toISOString()}function y(e){return`<div class="empty-state">${K("q-empty","empty-symbol")}<span>${r(e)}</span></div>`}function te(e,t){const a={};return t.forEach(i=>{const s=e.get(i);s&&(a[i]=s)}),a}function W(){n.session?.auth!=="supabase"&&(w(qa,n.jobs),w(Ma,n.tasks),w(Aa,n.files),w(Fa,n.driveFolders),w(Be,n.forms),w(Ut,n.formResponses),w(Oa,n.financeInvoices),w(xa,n.financePayments),w(Ra,n.financeExpenses),w(Pa,n.financeVendors),w(Lt,n.timeEntries),w(Qt,n.activeTimer),w(Ta,n.teamMembers),w(Ea,n.memberships),w(Vt,n.notifications),w(Bt,n.messageConversations),w(Ht,n.messageAccess),w(Jt,n.messages),w(zt,n.messageReads),w(Wt,n.messageAttachments),w(Yt,n.calendarEvents))}function is(){n.session?.auth!=="supabase"&&(w(Lt,n.timeEntries),w(Qt,n.activeTimer))}function gi(){n.session?.auth!=="supabase"&&w(Vt,n.notifications)}function ns(){n.session?.auth!=="supabase"&&w(Yt,n.calendarEvents)}function qe(){n.session?.auth!=="supabase"&&(w(Bt,n.messageConversations),w(Ht,n.messageAccess),w(Jt,n.messages),w(zt,n.messageReads),w(Wt,n.messageAttachments))}function bi(e,t,a){if(a==="company")return[Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"all_company",target_id:"all"})];const i=[];return e.getAll("role_ids").forEach(s=>{s&&i.push(Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"role",target_id:s}))}),e.getAll("profile_ids").forEach(s=>{s&&i.push(Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"profile",target_id:s}))}),i.length?i:[Y({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"profile",target_id:g().profile.id})]}function _a(e,t=!0){if(!e)return;const a=n.messageConversations.find(l=>l.id===e);if(!a)return;const i=new Date().toISOString(),s=g().profile.id,o=vt({conversation_id:e,company_id:a.company_id,profile_id:s,last_read_at:i});if(n.messageReads=[o].concat(n.messageReads.filter(l=>l.conversation_id!==e||l.profile_id!==s)),qe(),t&&n.session?.auth==="supabase"){const l=E();l&&l.from("message_reads").upsert(Dc(o),{onConflict:"conversation_id,profile_id"})}}function ss(e,t,a=[]){if(!yi()||t.sender_profile_id!==g().profile.id)return;const i=d("messages",{conversation:e.id},e.company_id),s=Qc(t.body);e.type==="direct"&&H("message.direct","New direct message",`${L()} sent a direct message in ${e.title}.`,i,"message",t.id,e.company_id),s.forEach(o=>{Ee({company_id:e.company_id,recipient_profile_id:o,type:"message.mention",title:"Mentioned in chat",body:`${L()} mentioned you in ${e.title}.`,href:i,source_type:"message",source_id:t.id})}),a.length&&H("message.attachment","Attachment shared",`${L()} shared ${a.length} attachment${a.length===1?"":"s"} in ${e.title}.`,i,"message",t.id,e.company_id)}function Qc(e=""){const t=String(e||"").toLowerCase();return t.includes("@")?Ce(u()).filter(a=>t.includes(`@${String(a.name||"").split(/\s+/)[0].toLowerCase()}`)||t.includes(`@${String(a.name||"").toLowerCase()}`)).map(a=>a.profile_id||a.member_id).filter(Boolean):[]}function Vc(e){const t=We(e);if(t)return t;const a=n.teamMembers.find(i=>i.id===e);return{id:e,full_name:a?.full_name||a?.name||e||"Quest user",email:a?.email||"",avatar_url:a?.avatar_url||""}}function Te(e){const t=String(e?.name||"").trim();if(t&&!Nt(t))return t;const a=String(e?.email||"").trim();return a?a.split("@")[0]||a:"Workspace user"}function Bc(e){return Z([e?.email,e?.role_label||j(e?.role||""),j(e?.status||"")]).join(" / ")||"Company member"}function Hi(e){return{id:e?.profile_id||e?.member_id||"",full_name:Te(e),email:e?.email||"",avatar_url:e?.avatar_url||""}}function Hc(e){const t=String(e.value||"").trim().toLowerCase(),a=e.closest(".message-modal-form"),i=Array.from(a?.querySelectorAll("[data-message-person-row]")||[]);let s=0;i.forEach(l=>{const c=l.querySelector('input[type="checkbox"]')?.checked,m=!t||String(l.dataset.filterText||"").includes(t),b=c||m;l.hidden=!b,b&&(s+=1)});const o=a?.querySelector("[data-message-filter-count]");o&&(o.textContent=t?`${s} match${s===1?"":"es"}`:`${i.length} member${i.length===1?"":"s"}`)}function rs(e){return{company:"q-symbol-company-chat",role:"q-symbol-role-chat",custom:"q-symbol-messages",direct:"q-symbol-direct-chat"}[e]||"q-symbol-messages"}function _i(e){const t=Ka(e.id);if(e.type==="company"||t.some(s=>s.target_type==="all_company"))return"Everyone in this company";const a=t.filter(s=>s.target_type==="role").map(s=>ze(e.company_id,s.target_id)?.name||"Role"),i=t.filter(s=>s.target_type==="profile").map(s=>ca(s.target_id));return a.concat(i).slice(0,5).join(", ")||"Private chat"}function Jc(e){return r(e).replace(/(^|\s)@([\w.-]+)/g,"$1<strong>@$2</strong>")}function zc(e){const t=Number(e||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${Math.round(t/1024)} KB`:`${t} B`}function Wc(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>t(""),a.readAsDataURL(e)})}function Yc(e,t){const a=E();if(n.session?.auth!=="supabase"||!a?.channel||!t)return;const i=`${e}:${t}`;n.messageRealtimeKey!==i&&(n.messageRealtimeChannel&&a.removeChannel(n.messageRealtimeChannel),n.messageRealtimeKey=i,n.messageRealtimeChannel=a.channel(`quest-messages-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"messages",filter:`conversation_id=eq.${t}`},()=>{n.dataLoaded=!1,p()}).on("postgres_changes",{event:"*",schema:"public",table:"message_attachments",filter:`conversation_id=eq.${t}`},()=>{n.dataLoaded=!1,p()}).subscribe())}function Kc(e){const t=[()=>jt(e,"Crew weather delay","role","Manager posted a weather delay update.",!0),()=>jt(e,"Permit questions","custom","A permit packet PDF was shared.",!1,!0),()=>jt(e,"Shan Kumar","direct","Can you jump on this when you are back?",!0),()=>Gc(e,"@Joshua you were mentioned in the launch room.")],a=Math.floor(Math.random()*t.length);t[a]()}function jt(e,t,a,i,s=!1,o=!1){const l=new Date().toISOString(),c=ce({id:`msg-conv-${crypto.randomUUID()}`,company_id:e,title:t,type:a,created_by:"basic-quest-user",last_message_at:l,created_at:l,updated_at:l}),m=a==="direct"?[Y({id:`msg-access-${crypto.randomUUID()}`,company_id:e,conversation_id:c.id,target_type:"profile",target_id:"basic-quest-user"}),Y({id:`msg-access-${crypto.randomUUID()}`,company_id:e,conversation_id:c.id,target_type:"profile",target_id:"shan"})]:bi(new FormData,c,a==="role"?"role":"company");n.messageConversations.unshift(c),n.messageAccess=m.concat(n.messageAccess);const b=ue({id:`msg-${crypto.randomUUID()}`,conversation_id:c.id,company_id:e,sender_profile_id:s?"shan":"basic-quest-user",body:i,created_at:l,updated_at:l,message_type:o?"attachment":"text"});n.messages.push(b),o&&n.messageAttachments.push(Se({id:`msg-attachment-${crypto.randomUUID()}`,conversation_id:c.id,message_id:b.id,company_id:e,file_name:"permit-packet.pdf",mime_type:"application/pdf",size_bytes:42e4,created_at:l})),s||_a(c.id,!1),n.selectedConversationId=c.id,qe(),x("Demo message scenario added.","local","Messages"),C(d("messages",{conversation:c.id},e),{replace:!0})}function Gc(e,t){const a=Tn(e)||He(e)[0];if(!a)return jt(e,"Demo chat","company",t,!0);const i=new Date().toISOString(),s=ue({id:`msg-${crypto.randomUUID()}`,conversation_id:a.id,company_id:e,sender_profile_id:"shan",body:t,created_at:i,updated_at:i});n.messages.push(s),n.messageConversations=n.messageConversations.map(o=>o.id===a.id?{...o,last_message_at:i,updated_at:i}:o),ss(a,s,[]),qe(),x("Demo mention added.","local","Messages"),p()}function Zc(){n.messageConversations=Qa.map(ce),n.messageAccess=Va.map(Y),n.messages=Ba.map(ue),n.messageReads=Ja.map(vt),n.messageAttachments=Ha.map(Se),n.selectedConversationId="",qe(),x("Demo messages reset.","local","Messages"),p()}function yi(){return n.session?.auth!=="supabase"}function Ee(e){if(!yi())return null;const t=pi({id:`notification-${crypto.randomUUID()}`,company_id:u(),recipient_profile_id:g().profile.id,created_at:new Date().toISOString(),...e});return n.notifications=[t].concat(n.notifications.filter(a=>a.id!==t.id)).slice(0,100),gi(),t}function Xc(e=u()){const t=new Date().toISOString(),a=g().profile.id;n.notifications=n.notifications.map(i=>i.company_id===e&&i.recipient_profile_id===a&&!i.read_at?{...i,read_at:t}:i),gi()}function ed(e){const t=n.notifications.find(a=>a.id===e);t&&(n.notifications=n.notifications.map(a=>a.id===t.id?{...a,read_at:a.read_at||new Date().toISOString()}:a),n.notificationMenuOpen=!1,gi(),t.href&&C(t.href))}function Ji(e,t=null){if(!yi())return;const a=d("tasks",{...e.project_id?{job_id:e.project_id}:{},task_id:e.id},e.company_id),i=B(e.assignee_id);if(!t){Ee({company_id:e.company_id,type:"task.assigned",title:"Task assigned",body:`${L()} assigned ${e.title} to ${i}.`,href:a,source_type:"task",source_id:e.id});return}t.assignee_id!==e.assignee_id&&Ee({company_id:e.company_id,type:"task.assigned",title:"Task reassigned",body:`${L()} reassigned ${e.title} to ${i}.`,href:a,source_type:"task",source_id:e.id}),t.priority!==e.priority&&Ee({company_id:e.company_id,type:"task.priority",title:"Task priority changed",body:`${L()} set priority to ${j(e.priority)} on ${e.title}.`,href:a,source_type:"task",source_id:e.id}),t.status!==e.status&&Ee({company_id:e.company_id,type:"task.status",title:"Task status changed",body:`${L()} moved ${e.title} to ${me(e.status)}.`,href:a,source_type:"task",source_id:e.id})}function H(e,t,a,i,s="",o="",l=u()){Ee({company_id:l,type:e,title:t,body:a,href:i,source_type:s,source_id:o})}async function at(e,t,a,i,s={},o=!1){const l={id:`audit-${crypto.randomUUID()}`,company_id:e,actor_profile_id:g().profile.id,event_type:t,target_type:a,target_id:i,details:s,created_at:new Date().toISOString()};if(n.auditEvents.unshift(l),o&&n.session?.auth==="supabase"){const c=E();if(c)try{await c.from("audit_events").insert({company_id:e,actor_profile_id:g().profile.id,event_type:t,target_type:a,target_id:i,details:s})}catch{}}}function td(e,t){return t.status==="disabled"?"membership.disabled":t.status==="left"?"membership.left":e&&["disabled","left","pending"].includes(e.status)&&t.status==="active"?"membership.reactivated":e&&e.role!==t.role?"role.changed":"membership.updated"}function L(){return g().profile.full_name||g().profile.email||"Quest HQ"}function k(e,t,a=""){return`<article class="metric">${K($n(e),"metric-symbol")}<span>${r(e)}</span><strong>${r(t)}</strong>${a?`<small>${r(a)}</small>`:""}</article>`}function he(e,t){return`<div><strong>${r(e)}</strong><span>${r(t)}</span></div>`}function Re(e,t,a,i,s=""){const o=`
    <span><strong>${r(e)}</strong><small>${r(t||"Finance record")}</small></span>
    <b>${r(a)}</b>
    <em>${M(i)}</em>
  `;return s?`<a class="finance-compact-row" href="${_(s)}" data-router>${o}</a>`:`<div class="finance-compact-row">${o}</div>`}function zi(e,t){const a=ke(e);return t==="jobs"?a.filter(i=>i.job_id).length:a.filter(i=>i.folder===t).length}function os(e="home",t=null){return t?.id?`job:${t.id}`:e||"home"}function ad(e,t="home",a=null){const i=os(t,a),s=et(e).filter(o=>o.parent_key===i).map(o=>id(e,o));return a?s:t==="home"?Na.map(([l,c,m,b])=>({id:l,name:c,caption:m,icon:b,href:_(d("files",{folder:l},e)),countLabel:`${zi(e,l)} file${zi(e,l)===1?"":"s"}`,updatedLabel:""})).concat(s):t==="jobs"?U(e).map(l=>({id:`job:${l.id}`,name:l.name,caption:l.client_name||F(e),icon:"ti-folder",href:_(d("files",{folder:"jobs",job_id:l.id},e)),countLabel:`${Et(l.id)} file${Et(l.id)===1?"":"s"}`,updatedLabel:M(l.updated_at)})).concat(s):s}function id(e,t){const a=et(e).filter(o=>o.parent_key===t.id).length,i=ke(e).filter(o=>o.folder===t.id).length,s=a+i;return{id:t.id,name:t.name,caption:"Custom folder",icon:"ti-folder",href:_(d("files",{folder:t.id},e)),countLabel:`${s} item${s===1?"":"s"}`,updatedLabel:M(t.updated_at)}}function nd(e,t,a=null){if(a)return`<span>/</span><a href="${_(d("files",{folder:"jobs"},e))}" data-router>Jobs</a>`;const i=et(e).find(m=>m.id===t);if(!i)return`<span>/</span><strong>${r(se(t))}</strong>`;const s=[];let o=i;const l=new Set;for(;o&&!l.has(o.id);)l.add(o.id),s.unshift(o),o=et(e).find(m=>m.id===o.parent_key);return`${i.parent_key&&!i.parent_key.startsWith("folder-")&&i.parent_key!=="home"?`<span>/</span><a href="${_(d("files",{folder:i.parent_key},e))}" data-router>${r(se(i.parent_key))}</a>`:""}${s.map((m,b)=>`<span>/</span>${b===s.length-1?`<strong>${r(m.name)}</strong>`:`<a href="${_(d("files",{folder:m.id},e))}" data-router>${r(m.name)}</a>`}`).join("")}`}function sd(e=u(),t="home",a=""){const i=(n.fileQuery||n.query||"").trim().toLowerCase(),s=n.fileCategoryFilter;let o=ke(e);return a?o=o.filter(l=>l.job_id===a):t&&t!=="home"&&(t==="jobs"?o=o.filter(l=>l.job_id):o=o.filter(l=>l.folder===t)),s&&s!=="All categories"&&(o=o.filter(l=>String(l.category||se(l.folder)).toLowerCase()===s.toLowerCase())),i&&(o=o.filter(l=>[l.file_name,l.category,l.uploaded_by_label,l.notes,l.object_path,O(l.job_id)?.name].some(c=>String(c||"").toLowerCase().includes(i)))),o.sort((l,c)=>new Date(c.created_at||0)-new Date(l.created_at||0))}function Me(e){const t=String(e.mime_type||"").toLowerCase(),a=ls(e);return t.includes("pdf")||a==="pdf"?"PDF":t.includes("image")||["png","jpg","jpeg","gif","webp","svg"].includes(a)?"Image":t.includes("zip")||["zip","rar","7z"].includes(a)?"Archive":t.includes("spreadsheet")||t.includes("excel")||["xls","xlsx","csv"].includes(a)?"Excel":t.includes("word")||["doc","docx"].includes(a)?"Word":t.includes("text")||["txt","md","json","csv","log"].includes(a)?"Text":t.includes("presentation")||["ppt","pptx"].includes(a)?"PowerPoint":a?a.toUpperCase():se(e.folder)}function vi(e){const t=Me(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="excel"?"sheet":t==="text"?"text":["word","powerpoint"].includes(t)?"doc":t==="archive"?"zip":"doc"}function ls(e){return String(e.file_name||"").split(".").pop()?.toLowerCase()||""}function hi(e,t=!1){const a=gs(e);return e.signed_url?`<img src="${r(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${r(vi(e))} ${t?"large":""}"><i class="ti ${r(a)}"></i></span>`}function rd(e){const t=Me(e),a=ls(e);return t==="Image"?a&&a.length<=4?a.toUpperCase():"IMG":t==="Archive"?a&&a.length<=3?a.toUpperCase():"ZIP":t==="Excel"?a==="csv"?"CSV":"XLS":t==="Word"?"DOC":t==="PowerPoint"?"PPT":t==="Text"?a&&a.length<=4?a.toUpperCase():"TXT":t.length<=4?t.toUpperCase():(a||"FILE").slice(0,4).toUpperCase()}function ye(e=u()){return n.forms.filter(t=>t.company_id===e)}function od(e=u()){const t=n.formQuery.trim().toLowerCase(),a=n.route?.jobId||"";return ye(e).filter(i=>a&&i.linked_job_id!==a||n.formTypeFilter!=="all"&&i.type!==n.formTypeFilter?!1:t?[i.title,i.description,i.type,i.status,i.audience,O(i.linked_job_id)?.name].some(s=>String(s||"").toLowerCase().includes(t)):!0)}function it(e=u()){const t=n.route?.jobId||"",a=ye(e).filter(o=>!t||o.linked_job_id===t),i=n.route?.params?.get("form_id")||"";if(i&&a.some(o=>o.id===i)&&(n.selectedFormId=i),!a.length)return n.selectedFormId="",n.selectedQuestionId="",null;let s=a.find(o=>o.id===n.selectedFormId)||a[0];return n.selectedFormId=s.id,(!n.selectedQuestionId||!s.questions.some(o=>o.id===n.selectedQuestionId))&&(n.selectedQuestionId=s.questions[0]?.id||""),s}function Ae(e){return n.forms.find(t=>t.id===e)||null}function de(){return Ae(n.selectedFormId)||it(u())}function cs(e=u()){return n.formResponses.filter(t=>t.company_id===e)}function ya(e){return n.formResponses.filter(t=>t.form_id===e)}function ds(e){return Array.isArray(e?.questions)?e.questions.length:0}function ld(e){const t=String(e?.creator_id||""),a=g().profile;return t?t&&(t===a.member_id||t===a.id)?a.full_name||"Quest Basic Mode":B(t):e?.created_by_label||a.full_name||"Quest HQ"}function Ge(e,t,a="",i=!1,s="text"){return`<label><span>${r(e)}</span><input data-form-field="${r(t)}" type="${r(s)}" value="${r(a)}" ${i?"required":""} /></label>`}function ms(e,t,a=""){return`<label><span>${r(e)}</span><textarea data-form-field="${r(t)}" rows="3">${r(a)}</textarea></label>`}function St(e,t,a,i){return`
    <label><span>${r(e)}</span><select data-form-field="${r(t)}">
      ${i.map(([s,o])=>`<option value="${r(s)}" ${String(s)===String(a)?"selected":""}>${r(o)}</option>`).join("")}
    </select></label>
  `}function nt(e){return["multiple","checkbox","dropdown"].includes(e.type)}function cd(e){return{short:"ti-letter-t",paragraph:"ti-align-left",multiple:"ti-circle-dot",checkbox:"ti-checkbox",dropdown:"ti-select",date:"ti-calendar",rating:"ti-star",yesno:"ti-circle-check",file:"ti-paperclip"}[e]||"ti-plus"}function dd(e){return mt.find(([t])=>t===e)?.[1]||j(e||"Question")}function re(e,t){return`
    <div class="response-question">
      <label>
        <span>${r(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${r(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function us(e){const t=Ae(e.form_id),a=Object.entries(e.answers||{}).map(([i,s])=>{const o=t?.questions.find(c=>c.id===i),l=Array.isArray(s)?s.join(", "):s;return he(o?.label||i,l||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${r(t?.title||"Response")}</h2><p>${r(e.submitted_by||e.submitter_email||"Anonymous")} / ${M(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||he("Response","No answers captured.")}</div>
  `}function Ze(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[z("short","Inspection address"),z("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),z("paragraph","Recommended scope"),z("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[z("short","Client name"),z("yesno","Approved to proceed?"),z("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[z("short","Request title"),z("dropdown","Priority",["Low","Medium","High","Urgent"]),z("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[z("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),z("yesno","Weather safe?"),z("paragraph","Safety notes")]}]}function md(e=u()){return yt({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:n.route?.jobId||"",theme_color:_e(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[z("short","First question")]})}function z(e="short",t="Untitled question",a=[]){return ma({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function ud(e,t={}){const a=md(e),i=yt({...a,...t,id:t.id||`form-${crypto.randomUUID()}`,company_id:e,questions:(t.questions||a.questions).map(s=>ma(s)),created_at:t.created_at||new Date().toISOString(),updated_at:new Date().toISOString()});return n.forms.unshift(i),n.selectedFormId=i.id,n.selectedQuestionId=i.questions[0]?.id||"",n.formsTab="builder",n.formEditorTab="questions",n.modal="",n.formStartTemplateId="",n.formStartTab="blank",G("New form created"),p(),i}function pd(e){const t=Object.fromEntries(new FormData(e).entries()),a=t.template_id?Ze().find(l=>l.id===t.template_id):null,i=String(t.title||a?.title||"Untitled form").trim()||"Untitled form",s=String(t.description||a?.description||"").trim(),o=a?a.questions.map(l=>({...Rt(l),id:`q-${crypto.randomUUID()}`})):[z("short","First question")];ud(u(),{title:i,description:s,type:dt.includes(t.type)?t.type:a?.type||"Internal",audience:String(t.audience||"Internal").trim()||"Internal",creator_id:g().profile.member_id||g().profile.id||"basic-quest-user",linked_job_id:String(t.linked_job_id||""),theme_color:_e(u()),background:"clean",submit_label:String(t.submit_label||"Submit").trim()||"Submit",collect_email:t.collect_email==="on",require_approval:t.require_approval==="on",questions:o})}function kt(e,t=!0){const a=Ae(e);a&&(n.selectedFormId=a.id,n.selectedQuestionId=a.questions[0]?.id||"",t&&p())}function G(e="Forms saved locally"){const t=de();t&&(t.updated_at=new Date().toISOString()),w(Be,n.forms),w(Ut,n.formResponses),n.sync={label:e,mode:"live"}}function Wi(e,t){const a=Ae(e||n.selectedFormId);a&&(a.status=Ua.includes(t)?t:"Draft",n.selectedFormId=a.id,G(`${a.status} locally`),p())}function fd(e){const t=Ae(e||n.selectedFormId);if(!t)return;const a=yt({...Rt(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(i=>({...Rt(i),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});n.forms.unshift(a),n.selectedFormId=a.id,n.selectedQuestionId=a.questions[0]?.id||"",G("Form duplicated"),p()}function gd(e){const t=e||n.selectedFormId;t&&(n.forms=n.forms.filter(a=>a.id!==t),n.formResponses=n.formResponses.filter(a=>a.form_id!==t),n.selectedFormId=ye(u())[0]?.id||"",n.selectedQuestionId=it(u())?.questions[0]?.id||"",n.modal="",G("Form deleted locally"),p())}async function bd(e){const t=e||n.selectedFormId,a=`${window.location.origin}${_(d("forms",{form_id:t},u()))}`;try{await navigator.clipboard.writeText(a),n.sync={label:"Form link copied",mode:"live"}}catch{n.sync={label:"Copy failed",mode:"local"}}p()}function _d(e){const t=JSON.stringify({company_id:e,forms:ye(e),responses:cs(e)},null,2);Dd(`${e}-forms-export.json`,t,"application/json")}function ps(e){const t=de();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),w(Be,n.forms))}function fs(e){const t=de(),a=e.closest("[data-question-id]"),i=t?.questions.find(s=>s.id===a?.dataset.questionId);if(!(!t||!i)){if(n.selectedQuestionId=i.id,e.matches("[data-question-option]")){const s=Number(e.dataset.questionOption);i.options[s]=e.value}else{const s=e.dataset.questionField;if(s==="required")i.required=e.checked;else if(s==="type"){i.type=e.value,nt(i)&&!i.options.length&&(i.options=["Option 1","Option 2"]),nt(i)||(i.options=[]),G("Question updated"),p();return}else s&&(i[s]=e.value)}t.updated_at=new Date().toISOString(),w(Be,n.forms)}}function yd(e="multiple"){const t=de();if(!t)return;const a=z(e,mt.find(([i])=>i===e)?.[1]||"New question");t.questions.push(a),n.selectedQuestionId=a.id,G("Question added"),p()}function vd(e){const t=de(),a=t?.questions.find(o=>o.id===e);if(!t||!a)return;const i=t.questions.findIndex(o=>o.id===e),s=ma({...Rt(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(i+1,0,s),n.selectedQuestionId=s.id,G("Question duplicated"),p()}function hd(e){const t=de();t&&(t.questions=t.questions.filter(a=>a.id!==e),n.selectedQuestionId=t.questions[0]?.id||"",G("Question deleted"),p())}function $d(e,t){const a=de();if(!a||!t)return;const i=a.questions.findIndex(l=>l.id===e),s=i+t;if(i<0||s<0||s>=a.questions.length)return;const[o]=a.questions.splice(i,1);a.questions.splice(s,0,o),n.selectedQuestionId=e,G("Question moved"),p()}function wd(e){const a=de()?.questions.find(i=>i.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),G("Option added"),p())}function Sd(e,t){const i=de()?.questions.find(s=>s.id===e);!i||t<0||(i.options.splice(t,1),i.options.length||i.options.push("Option 1"),G("Option removed"),p())}function kd(e){const t=Ae(e.dataset.formId);if(!t)return;const a=new FormData(e),i={};t.questions.forEach(s=>{const o=`answer:${s.id}`,l=a.getAll(o).filter(c=>c instanceof File?c.name:String(c||"").trim());i[s.id]=l.length>1?l.map(c=>c instanceof File?c.name:c):l[0]instanceof File?l[0].name:l[0]||""}),n.formResponses.unshift(di({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||g().profile.full_name||"Preview submitter"),answers:i,created_at:new Date().toISOString()})),n.formsTab="responses",n.modal="",G("Preview response saved"),H(t.require_approval?"approval.form":"form.response",t.require_approval?"Form approval ready":"Form response saved",`${L()} saved a response for ${t.title}.`,d("forms",{form_id:t.id,tab:"responses"},t.company_id),"form_response",t.id,t.company_id),p()}function Dd(e,t,a="text/plain"){const i=new Blob([t],{type:a}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=e,o.click(),URL.revokeObjectURL(s)}function Rt(e){return JSON.parse(JSON.stringify(e))}function Z(e){return Array.from(new Set(e.map(t=>String(t||"").trim()).filter(Boolean)))}function me(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||j(e)}function Ye(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||j(e)}function se(e){return Na.find(([t])=>t===e)?.[1]||n.driveFolders.find(t=>t.id===e)?.name||j(e||"Shared")}function Cd(e=u()){return Na.map(([t,a])=>[t,a]).concat(et(e).map(t=>[t.id,t.name]))}function jd(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function gs(e){const t=Me(e);return t==="Image"?"ti-photo":t==="PDF"?"ti-file-type-pdf":t==="Archive"?"ti-file-zip":t==="Excel"?"ti-file-spreadsheet":t==="Word"?"ti-file-type-doc":t==="PowerPoint"?"ti-file-type-ppt":t==="Text"?"ti-file-text":"ti-file-description"}function j(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function v(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function M(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function Pt(e){if(!e)return"No time";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(t)}function va(e){const t=new Date(e);if(!e||Number.isNaN(t.getTime()))return"just now";const a=Math.max(0,Math.floor((Date.now()-t.getTime())/1e3));if(a<45)return"just now";const i=Math.floor(a/60);if(i<60)return`${i}m ago`;const s=Math.floor(i/60);if(s<24)return`${s}h ago`;const o=Math.floor(s/24);return o<7?`${o}d ago`:M(e)}function Dt(e){const t=Math.max(0,Math.floor(N(e)/1e3)),a=Math.floor(t/3600),i=Math.floor(t%3600/60);return a?`${a}h ${String(i).padStart(2,"0")}m`:`${i}m`}function $i(e){const t=N(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**i).toFixed(i?1:0)} ${a[i]}`}function st(e){return(t,a)=>Date.parse(a[e]||a.updated_at||a.created_at||0)-Date.parse(t[e]||t.updated_at||t.created_at||0)}function bs(e){if(!e)return 0;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?0:Math.floor((ha().getTime()-t.getTime())/864e5)}function Yi(e){if(!e)return 999;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?999:Math.floor((t.getTime()-ha().getTime())/864e5)}function Id(e=u()){const t=(la(oa(e)||{short_name:e})||e||"QH").replace(/[^a-z]/gi,"").slice(0,2).toUpperCase()||"QH",a=be(e).length+1;return`${t}-${String(1e3+a)}`}function ha(){const e=new Date;return e.setHours(0,0,0,0),e}function qd(e,t){return`${_s(e,t)}%`}function _s(e,t){const a=N(t);return a?Math.max(0,Math.min(100,Math.round(N(e)/a*100))):0}function Ve(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function ht(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function ie(e,t){return e.reduce((a,i)=>a+N(i[t]),0)}function N(e){const t=Number(e);return Number.isFinite(t)?t:0}function rt(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||""))}function Nt(e){const t=String(e||"").trim();return rt(t)||/^[0-9a-f]{8,}$/i.test(t)||/^user[_-]?[0-9a-f-]{8,}$/i.test(t)}function ys(e){const t=String(e||"").trim();return t?t.slice(0,8):""}function $(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(N(e))}function $e(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function S(e,t){const a=$e(e,t);return Array.isArray(a)&&a.length?a:t}function w(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
