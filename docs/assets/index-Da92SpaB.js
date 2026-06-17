(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const xe={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},Fe=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),Ee="quest-hq-local-session",Ai="quest-hq-local-profile",_a="quest-hq-job-cache-v2",ya="quest-hq-task-cache-v1",va="quest-hq-file-cache-v1",ha="quest-hq-drive-folder-cache-v1",$a="quest-hq-team-cache-v1",wa="quest-hq-company-membership-cache-v1",Ne="quest-hq-company-form-cache-v1",Mt="quest-hq-company-form-response-cache-v1",Sa="quest-hq-finance-invoice-cache-v1",ka="quest-hq-finance-payment-cache-v1",Da="quest-hq-finance-expense-cache-v1",Ca="quest-hq-finance-vendor-cache-v1",Ft="quest-hq-time-entry-cache-v1",At="quest-hq-active-timer-v1",ue="quest-hq-active-company",Oi="quest-hq-task-view",xi="quest-hq-drive-view",Ot="quest-hq-notification-cache-v1",xt="quest-hq-message-conversation-cache-v1",Et="quest-hq-message-access-cache-v1",Tt="quest-hq-message-cache-v1",Rt="quest-hq-message-read-cache-v1",Pt="quest-hq-message-attachment-cache-v1",yt={developer:["*"],admin:["*"],owner:["*"],manager:["jobs.view","jobs.manage","tasks.view","tasks.manage","files.view","files.manage","forms.view","forms.manage","finance.view","team.view","clock.manage","approvals.manage","approvals.view","users.view","settings.view","billing.view","roles.view","messages.view","messages.send","messages.create_group","messages.manage_groups","messages.attach_files"],member:["jobs.view","tasks.view","tasks.manage","files.view","forms.view","time.track","approvals.view","users.view","messages.view","messages.send","messages.attach_files"]},zs=[["jobs.view","View jobs"],["jobs.manage","Create/edit jobs"],["tasks.view","View tasks"],["tasks.manage","Create/edit tasks"],["files.view","View files"],["files.manage","Upload/delete files"],["forms.view","View forms"],["forms.manage","Create/edit forms"],["crm.view","View CRM"],["finance.view","View finance"],["finance.manage","Create/edit finance"],["users.view","View users"],["users.manage","Invite/manage users"],["roles.view","View roles"],["roles.manage","Create/edit roles"],["billing.view","View billing"],["billing.manage","Manage subscription"],["settings.view","View settings"],["settings.manage","Manage settings"],["time.track","Track own time"],["clock.manage","Manage clock dashboard"],["approvals.view","View approvals"],["approvals.manage","Manage approvals"],["messages.view","View messages"],["messages.send","Send messages"],["messages.create_group","Create group chats"],["messages.manage_groups","Manage group chats"],["messages.attach_files","Attach files/images"],["messages.delete_own","Delete own messages"],["messages.delete_any","Delete any messages"],["messages.manage","Manage messages (compatibility)"]],Nt=[{id:"jobs",group:"Workspace",label:"Jobs",icon:"ti-briefcase",symbol:"q-symbol-jobs",status:"live",permission:"jobs.view"},{id:"tasks",group:"Workspace",label:"Tasks",icon:"ti-list-check",symbol:"q-symbol-tasks",status:"live",permission:"tasks.view"},{id:"files",group:"Workspace",label:"Files",icon:"ti-folder",symbol:"q-symbol-files",status:"live",permission:"files.view"},{id:"forms",group:"Workspace",label:"Forms",icon:"ti-clipboard-list",symbol:"q-symbol-forms",status:"live",permission:"forms.view"},{id:"analytics",group:"Workspace",label:"Analytics",icon:"ti-chart-bar",symbol:"q-symbol-analytics",status:"live",permission:"jobs.view"},{id:"crm",group:"Workspace",label:"CRM",icon:"ti-users-group",symbol:"q-symbol-crm",status:"live",permission:"crm.view"},{id:"tickets",group:"Workspace",label:"Tickets",icon:"ti-ticket",symbol:"q-symbol-tickets",status:"planned"},{id:"finance",group:"Workspace",label:"Finance",icon:"ti-receipt-dollar",symbol:"q-symbol-finance",status:"live",permission:"finance.view"},{id:"knowledge",group:"Workspace",label:"Knowledge Base",icon:"ti-books",symbol:"q-symbol-knowledge",status:"planned"},{id:"automations",group:"Workspace",label:"Automations",icon:"ti-automation",symbol:"q-symbol-automations",status:"planned"},{id:"templates",group:"Workspace",label:"Templates",icon:"ti-template",symbol:"q-symbol-templates",status:"planned"},{id:"users",group:"Company",label:"Users",icon:"ti-users",symbol:"q-symbol-users",status:"live",permission:"users.view"},{id:"messages",group:"Company",label:"Messages",icon:"ti-messages",symbol:"q-symbol-messages",status:"live",permission:"messages.view"},{id:"settings",group:"Company",label:"Settings",icon:"ti-settings",symbol:"q-symbol-settings",status:"live",permission:"settings.view"},{id:"team-chart",group:"Company",label:"Team chart",icon:"ti-hierarchy-3",symbol:"q-symbol-team-chart",status:"live",permission:"team.view"},{id:"time",group:"Operations",label:"My time",icon:"ti-clock",symbol:"q-symbol-time",status:"live",permission:"time.track"},{id:"approvals",group:"Operations",label:"Approvals",icon:"ti-user-check",symbol:"q-symbol-approvals",status:"live",permission:"approvals.view"},{id:"team-workload",group:"Operations",label:"Team workload",icon:"ti-users",symbol:"q-symbol-team-workload",status:"planned"},{id:"clock",group:"Operations",label:"Clock dashboard",icon:"ti-clock-hour-4",symbol:"q-symbol-clock",status:"live",permission:"clock.manage"}],Hs={"/admin.html":"settings","/automations.html":"automations","/crm.html":"crm","/dashboards.html":"analytics","/files.html":"files","/finance.html":"finance","/forms.html":"forms","/jobs.html":"jobs","/knowledge.html":"knowledge","/messages.html":"messages","/templates.html":"templates","/tickets.html":"tickets"},et=["Lead","Site Review","Estimate","Approved","Active","Closed"],Ei=["pipeline","list","profile"],tt=["todo","pending","hold","review","done"],vt=["critical","urgent","high","medium","low"],Ti=["lead","bid","admin","invoicing","ar","meeting","web_dev"],Ws=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],ja=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],at=["Inspection","Client approval","Intake","Survey","Safety","Internal"],qa=["Draft","Published","Archived"],Ri=["Draft","Sent","Partially paid","Paid","Overdue","Void"],Pi=["Pending","Approved","Paid","Rejected"],Ni=["Active","On hold","Inactive"],Ui=["ACH","Check","Card","Cash","Wire","Other"],Ut=["Materials","Labor","Subcontractor","Permit","Equipment","Marketing","Software","Travel","Other"],Ia=["company","role","custom","direct"],it=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],st=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],Li=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],Qi=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"],supervisor_id:""},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"],supervisor_id:"abraham"},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"],supervisor_id:"maya"},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"],supervisor_id:"abraham"},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"],supervisor_id:""}],Vi=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],Bi=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:I(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:I(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:I(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:I(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:I(5),priority:"medium",urgency:"medium",status:"todo"}],Ji=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],zi=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",creator_id:"abraham",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",creator_id:"maya",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",creator_id:"noah",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",creator_id:"lumen-ops",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],Hi=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],Wi=[{id:"vendor-roofing-materials",company_id:"roofing",name:"Valley Roofing Supply",contact_name:"Elena Ortiz",email:"orders@valleyroofingsupply.local",phone:"(480) 555-0190",category:"Materials",status:"Active",notes:"Primary tile, flashing, and underlayment vendor.",created_at:new Date(Date.now()-12096e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"vendor-roofing-dryin",company_id:"roofing",name:"Monsoon Dry-In Crew",contact_name:"R. Alvarez",email:"dispatch@monsoondryin.local",phone:"(602) 555-0144",category:"Subcontractor",status:"Active",notes:"Emergency dry-in support during storm calls.",created_at:new Date(Date.now()-10368e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"vendor-drafting-permits",company_id:"drafting",name:"Permit Runner AZ",contact_name:"Sofia Chen",email:"permits@runneraz.local",phone:"(602) 555-0171",category:"Permit",status:"Active",notes:"Permit filing support for drafting packets.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString()},{id:"vendor-lumen-software",company_id:"lumen",name:"Lumen SaaS Stack",contact_name:"Ops Billing",email:"billing@lumenstack.local",phone:"",category:"Software",status:"Active",notes:"Internal software subscriptions for client onboarding.",created_at:new Date(Date.now()-7776e5).toISOString(),updated_at:new Date(Date.now()-3456e5).toISOString()}],Yi=[{id:"invoice-roofing-queen-creek",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",client_name:"Rosales Residence",invoice_number:"QR-1007",status:"Partially paid",issue_date:I(-10),due_date:I(5),subtotal:6800,tax:0,total:6800,notes:"Emergency leak repair billing with deposit received.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"invoice-roofing-mesa-storage",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",client_name:"Mesa Storage Partners",invoice_number:"QR-1008",status:"Sent",issue_date:I(-18),due_date:I(-2),subtotal:18400,tax:0,total:18400,notes:"Estimate packet sent to board for approval.",created_at:new Date(Date.now()-15552e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-drafting-horizon",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",client_name:"Horizon HVAC",invoice_number:"QD-2031",status:"Sent",issue_date:I(-7),due_date:I(14),subtotal:4200,tax:0,total:4200,notes:"Drafting permit package milestone invoice.",created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-lumen-onboarding",company_id:"lumen",job_id:"",client_name:"Lumen Internal Launch",invoice_number:"LM-3004",status:"Draft",issue_date:I(-3),due_date:I(27),subtotal:3200,tax:0,total:3200,notes:"Demo onboarding package used for finance workspace.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()}],Ki=[{id:"payment-roofing-queen-creek-deposit",company_id:"roofing",invoice_id:"invoice-roofing-queen-creek",amount:2500,method:"ACH",received_at:I(-4),reference:"ACH-4421",notes:"Deposit received after dry-in visit.",created_at:new Date(Date.now()-3456e5).toISOString()},{id:"payment-drafting-horizon-retainer",company_id:"drafting",invoice_id:"invoice-drafting-horizon",amount:1e3,method:"Check",received_at:I(-1),reference:"CHK-117",notes:"Retainer collected before permit packet completion.",created_at:new Date(Date.now()-864e5).toISOString()}],Gi=[{id:"expense-roofing-queen-creek-materials",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",vendor_id:"vendor-roofing-materials",category:"Materials",amount:1850,status:"Approved",spent_at:I(-6),notes:"Underlayment, flashing, and tile replacement materials.",created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-roofing-mesa-permit",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",vendor_id:"vendor-roofing-materials",category:"Permit",amount:620,status:"Pending",spent_at:I(-2),notes:"Permit and document prep allowance.",created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString()},{id:"expense-drafting-horizon-runner",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",vendor_id:"vendor-drafting-permits",category:"Permit",amount:480,status:"Approved",spent_at:I(-3),notes:"Permit runner package review.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-lumen-software-stack",company_id:"lumen",job_id:"",vendor_id:"vendor-lumen-software",category:"Software",amount:540,status:"Paid",spent_at:I(-5),notes:"Client onboarding software stack.",created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()}],Zi=[{id:"notification-roofing-task-assigned",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"task.assigned",title:"Task assigned",body:"Abraham assigned Leak inspection photos to you.",href:"/company/roofing/tasks?job_id=roofing-leak&task_id=task-roofing-leak-1",source_type:"task",source_id:"task-roofing-leak-1",read_at:"",created_at:new Date(Date.now()-7*6e4).toISOString()},{id:"notification-roofing-task-priority",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"task.priority",title:"Task priority changed",body:"Shan set priority to Urgent on HOA board approval package.",href:"/company/roofing/tasks?job_id=roofing-mesa&task_id=task-roofing-mesa-1",source_type:"task",source_id:"task-roofing-mesa-1",read_at:"",created_at:new Date(Date.now()-19*6e4).toISOString()},{id:"notification-roofing-approval",company_id:"roofing",recipient_profile_id:"basic-quest-user",type:"approval.ready",title:"Approval needs review",body:"Estimate approval is waiting in the company review queue.",href:"/company/roofing/approvals",source_type:"form",source_id:"form-roofing-estimate-approval",read_at:new Date(Date.now()-5*6e4).toISOString(),created_at:new Date(Date.now()-44*6e4).toISOString()},{id:"notification-drafting-task-review",company_id:"drafting",recipient_profile_id:"basic-quest-user",type:"task.status",title:"Task moved to review",body:"Drawing package QA is ready for review.",href:"/company/drafting/tasks?job_id=drafting-package&task_id=task-drafting-package-1",source_type:"task",source_id:"task-drafting-package-1",read_at:"",created_at:new Date(Date.now()-63*6e4).toISOString()},{id:"notification-lumen-finance",company_id:"lumen",recipient_profile_id:"basic-quest-user",type:"finance.invoice",title:"Invoice drafted",body:"Lumen onboarding invoice is ready for payment tracking.",href:"/company/lumen/finance?invoice=invoice-lumen-onboarding",source_type:"invoice",source_id:"invoice-lumen-onboarding",read_at:"",created_at:new Date(Date.now()-92*6e4).toISOString()}],Ma=[{id:"msg-conv-roofing-all",company_id:"roofing",title:"Roofing dispatch",type:"company",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-16*6e4).toISOString(),created_at:new Date(Date.now()-864e5).toISOString(),updated_at:new Date(Date.now()-16*6e4).toISOString()},{id:"msg-conv-roofing-crew",company_id:"roofing",title:"Roofing crew",type:"role",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-52*6e4).toISOString(),created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-52*6e4).toISOString()},{id:"msg-conv-roofing-direct-shan",company_id:"roofing",title:"Shan Kumar",type:"direct",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-8*6e4).toISOString(),created_at:new Date(Date.now()-36e5).toISOString(),updated_at:new Date(Date.now()-8*6e4).toISOString()},{id:"msg-conv-drafting-all",company_id:"drafting",title:"Drafting review",type:"company",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-74*6e4).toISOString(),created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-74*6e4).toISOString()},{id:"msg-conv-lumen-product",company_id:"lumen",title:"Lumen launch room",type:"custom",created_by:"basic-quest-user",last_message_at:new Date(Date.now()-38*6e4).toISOString(),created_at:new Date(Date.now()-216e5).toISOString(),updated_at:new Date(Date.now()-38*6e4).toISOString()}],Fa=[{id:"msg-access-roofing-all",conversation_id:"msg-conv-roofing-all",company_id:"roofing",target_type:"all_company",target_id:"all"},{id:"msg-access-roofing-crew-role",conversation_id:"msg-conv-roofing-crew",company_id:"roofing",target_type:"role",target_id:"staff-roofing"},{id:"msg-access-roofing-direct-basic",conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",target_type:"profile",target_id:"basic-quest-user"},{id:"msg-access-roofing-direct-shan",conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",target_type:"profile",target_id:"shan"},{id:"msg-access-drafting-all",conversation_id:"msg-conv-drafting-all",company_id:"drafting",target_type:"all_company",target_id:"all"},{id:"msg-access-lumen-basic",conversation_id:"msg-conv-lumen-product",company_id:"lumen",target_type:"profile",target_id:"basic-quest-user"},{id:"msg-access-lumen-role",conversation_id:"msg-conv-lumen-product",company_id:"lumen",target_type:"role",target_id:"admin-lumen"}],Aa=[{id:"msg-roofing-all-1",conversation_id:"msg-conv-roofing-all",company_id:"roofing",sender_profile_id:"abraham",body:"Morning check: Mesa HOA estimate needs photos before noon.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-48*6e4).toISOString(),updated_at:new Date(Date.now()-48*6e4).toISOString()},{id:"msg-roofing-all-2",conversation_id:"msg-conv-roofing-all",company_id:"roofing",sender_profile_id:"basic-quest-user",body:"Got it. I am linking the job files now.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-16*6e4).toISOString(),updated_at:new Date(Date.now()-16*6e4).toISOString()},{id:"msg-roofing-crew-1",conversation_id:"msg-conv-roofing-crew",company_id:"roofing",sender_profile_id:"shan",body:"@Joshua bring the permit packet when you head to Arroyo.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-52*6e4).toISOString(),updated_at:new Date(Date.now()-52*6e4).toISOString()},{id:"msg-roofing-direct-1",conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",sender_profile_id:"shan",body:"Can you confirm the roof access photo uploaded correctly?",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-8*6e4).toISOString(),updated_at:new Date(Date.now()-8*6e4).toISOString()},{id:"msg-drafting-all-1",conversation_id:"msg-conv-drafting-all",company_id:"drafting",sender_profile_id:"abraham",body:"Horizon package QA is ready. Please keep notes in this thread.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-74*6e4).toISOString(),updated_at:new Date(Date.now()-74*6e4).toISOString()},{id:"msg-lumen-product-1",conversation_id:"msg-conv-lumen-product",company_id:"lumen",sender_profile_id:"basic-quest-user",body:"Finance and CRM are live enough for internal walkthrough. Next focus is polish and permissions.",message_type:"text",deleted_at:"",created_at:new Date(Date.now()-38*6e4).toISOString(),updated_at:new Date(Date.now()-38*6e4).toISOString()}],Oa=[{id:"msg-attachment-roofing-photo",conversation_id:"msg-conv-roofing-crew",message_id:"msg-roofing-crew-1",company_id:"roofing",bucket_id:"quest-message-attachments",object_path:"",file_name:"roof-access-photo.jpg",mime_type:"image/jpeg",size_bytes:184e3,preview_url:"",created_at:new Date(Date.now()-52*6e4).toISOString()}],xa=[{conversation_id:"msg-conv-roofing-all",company_id:"roofing",profile_id:"basic-quest-user",last_read_at:new Date(Date.now()-10*6e4).toISOString()},{conversation_id:"msg-conv-roofing-crew",company_id:"roofing",profile_id:"basic-quest-user",last_read_at:""},{conversation_id:"msg-conv-roofing-direct-shan",company_id:"roofing",profile_id:"basic-quest-user",last_read_at:""},{conversation_id:"msg-conv-drafting-all",company_id:"drafting",profile_id:"basic-quest-user",last_read_at:""},{conversation_id:"msg-conv-lumen-product",company_id:"lumen",profile_id:"basic-quest-user",last_read_at:""}],s={route:null,session:he(Ee,null),profileDraft:he(Ai,null),authReady:!1,authMode:"signin",jobs:S(_a,Li).map(Te),tasks:S(ya,Bi).map(Re),files:S(va,Ji).map(Ke),driveFolders:S(ha,[]).map(Wa),forms:S(Ne,zi).map(lt),formResponses:S(Mt,Hi).map(Ya),financeInvoices:S(Sa,Yi).map(ea),financePayments:S(ka,Ki).map(ta),financeExpenses:S(Da,Gi).map(aa),financeVendors:S(Ca,Wi).map(ia),notifications:S(Ot,Zi).map(Za),messageConversations:S(xt,Ma).map(oe),messageAccess:S(Et,Fa).map(W),messages:S(Tt,Aa).map(de),messageReads:S(Rt,xa).map(ct),messageAttachments:S(Pt,Oa).map(we),timeEntries:he(Ft,[]),activeTimer:he(At,null),teamMembers:S($a,Qi).map(Ka),memberships:S(wa,Vi),profiles:[],subscriptions:[],roles:[],rolePermissions:[],roleAssignments:[],resourceAcl:[],fieldPermissions:[],companyInvites:[],joinRequests:[],auditEvents:[],companies:Cs(st.map(rt)),activeCompanyId:localStorage.getItem(ue)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",selectedFinanceInvoiceId:"",selectedFinanceExpenseId:"",selectedFinanceVendorId:"",expandedFormIds:new Set,formStartTemplateId:"",formStartTab:"blank",query:"",fileQuery:"",formQuery:"",crmQuery:"",stageFilter:"all",crmStageFilter:"all",crmOwnerFilter:"all",messageQuery:"",messageFilter:"all",selectedConversationId:"",messageRealtimeChannel:null,messageRealtimeKey:"",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(Oi)||"table",driveFolder:"home",driveView:localStorage.getItem(xi)||"list",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",authMessage:"",toast:null,toastTimer:null,modal:"",accountMenuOpen:!1,notificationMenuOpen:!1,rolePreview:null},Lt=document.getElementById("app");let da=null;Ys();function Ys(){Nr(),window.addEventListener("popstate",m),document.addEventListener("click",Zo),document.addEventListener("submit",tr),document.addEventListener("input",wr),document.addEventListener("change",Sr),Ks(),m()}async function Ks(){if(s.session?.auth==="local-basic"){Xi(),s.authReady=!0;return}const e=A();if(!e?.auth){s.authReady=!0,s.loginError="Supabase auth is unavailable in this browser session.";return}try{const{data:t}=await e.auth.getSession();await We(t?.session||null),e.auth.onAuthStateChange((a,i)=>{We(i||null).finally(()=>{s.dataLoaded=!1,m()})})}catch(t){s.loginError=t.message||"Unable to initialize Supabase auth."}finally{s.authReady=!0,m()}}async function We(e){if(!e?.user){s.session=null,localStorage.removeItem(Ee);return}const t=await Gs(e.user);s.session=ql(e,t),sn(),w(Ee,s.session)}async function Gs(e){const t={id:e.id,email:e.email||"",full_name:e.user_metadata?.full_name||e.email||"Quest user",role:"member",role_label:"Member",member_id:"",company_ids:[],avatar_url:"",approved:!1,email_verified:!!e.email_confirmed_at},a=A();if(!a)return t;const i=await a.from("profiles").select("*").eq("id",e.id).maybeSingle();return i.error||!i.data?t:Ga(i.data,t)}function m(){if(s.route=Qt(),!s.authReady){en();return}if(Xs(s.route)){k("/login?return_url="+encodeURIComponent(Lr()),{replace:!0});return}if(s.route.name==="login"){Po();return}if(tn(),s.session?.auth==="supabase"&&s.dataLoaded&&!Ve().length){Zs();return}const e=Ur(s.route);if(e){k(e,{replace:!0});return}zr(s.route),ms(s.route),s.route.params.get("account")==="profile"&&(s.modal="profile"),document.title=`${Qr(s.route)} | ${M(p())} | Quest HQ`,Lt.innerHTML=on(s.route,as(s.route))}function Zs(){document.title="Company access pending | Quest HQ",Lt.innerHTML=`
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
  `}function Xs(e){return e.name==="login"?!1:!s.session}function en(){document.title="Loading | Quest HQ",Lt.innerHTML=`
    <main class="login-shell">
      <section class="login-panel">
        <div class="login-brand">
          <span class="side-mark">Q</span>
          <span><strong>Quest HQ</strong><small>Secure workspace</small></span>
        </div>
        ${_("Checking secure session...")}
      </section>
    </main>
  `}function tn(){s.dataLoaded||s.dataLoading||(s.dataLoading=!0,an().catch(()=>{s.sync={label:"Local fallback",mode:"local"}}).finally(()=>{s.dataLoaded=!0,s.dataLoading=!1,H(),m()}))}async function an(){if(s.session?.auth==="local-basic"){s.sync={label:"Demo mode",mode:"local"};return}const e=A();if(!e){s.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,i,n,r,l,c,u,f,g,$,L,O,Z,Be,ye,li,ci,di,mi,pi]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*"),e.from("profiles").select("*"),e.from("company_subscriptions").select("*"),e.from("roles").select("*").order("priority",{ascending:!1}),e.from("role_permissions").select("*"),e.from("user_role_assignments").select("*"),e.from("resource_acl").select("*"),e.from("field_permissions").select("*"),e.from("company_invites").select("*").order("created_at",{ascending:!1}),e.from("company_join_requests").select("*").order("created_at",{ascending:!1}),e.from("audit_events").select("*").order("created_at",{ascending:!1}).limit(100),e.from("message_conversations").select("*").order("last_message_at",{ascending:!1}),e.from("message_conversation_access").select("*"),e.from("messages").select("*").order("created_at",{ascending:!0}).limit(500),e.from("message_attachments").select("*").order("created_at",{ascending:!0}).limit(500),e.from("message_reads").select("*")]);let ae=0;t.error||(s.companies=(t.data||[]).map(rt),ae+=1),a.error||(s.jobs=(a.data||[]).map(Te),ae+=1),i.error||(s.tasks=(i.data||[]).map(Re),ae+=1),n.error||(s.files=(n.data||[]).map(Ke),ae+=1),r.error||(s.teamMembers=(r.data||[]).map(Ka),ae+=1),l.error||(s.memberships=(l.data||[]).map(Ct),ae+=1),c.error||(s.profiles=(c.data||[]).map(Js=>Ga(Js)),ae+=1),u.error||(s.subscriptions=(u.data||[]).map(ul),ae+=1),f.error||(s.roles=(f.data||[]).map(Ae),ae+=1),g.error||(s.rolePermissions=(g.data||[]).map(ga)),$.error||(s.roleAssignments=($.data||[]).map(js)),L.error||(s.resourceAcl=(L.data||[]).map(fl)),O.error||(s.fieldPermissions=(O.data||[]).map(gl)),Z.error||(s.companyInvites=(Z.data||[]).map(jt)),Be.error||(s.joinRequests=(Be.data||[]).map(qs)),ye.error||(s.auditEvents=ye.data||[]),li.error||(s.messageConversations=(li.data||[]).map(oe)),ci.error||(s.messageAccess=(ci.data||[]).map(W)),di.error||(s.messages=(di.data||[]).map(de)),mi.error||(s.messageAttachments=(mi.data||[]).map(we)),pi.error||(s.messageReads=(pi.data||[]).map(ct)),s.sync=ae?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function A(){return!window.supabase||typeof window.supabase.createClient!="function"?null:(da||(da=window.supabase.createClient(xe.supabaseUrl,xe.supabaseKey)),da)}function sn(){s.jobs=[],s.tasks=[],s.files=[],s.driveFolders=[],s.forms=[],s.formResponses=[],s.financeInvoices=[],s.financePayments=[],s.financeExpenses=[],s.financeVendors=[],s.notifications=[],s.messageConversations=[],s.messageAccess=[],s.messages=[],s.messageReads=[],s.messageAttachments=[],s.timeEntries=[],s.activeTimer=null,s.teamMembers=[],s.memberships=[],s.profiles=[],s.subscriptions=[],s.roles=[],s.rolePermissions=[],s.roleAssignments=[],s.resourceAcl=[],s.fieldPermissions=[],s.companyInvites=[],s.joinRequests=[],s.auditEvents=[],s.companies=[],s.sync={label:"Loading secure workspace...",mode:"loading"}}function Xi(){s.jobs=S(_a,Li).map(Te),s.tasks=S(ya,Bi).map(Re),s.files=S(va,Ji).map(Ke),s.driveFolders=S(ha,[]).map(Wa),s.forms=S(Ne,zi).map(lt),s.formResponses=S(Mt,Hi).map(Ya),s.financeInvoices=S(Sa,Yi).map(ea),s.financePayments=S(ka,Ki).map(ta),s.financeExpenses=S(Da,Gi).map(aa),s.financeVendors=S(Ca,Wi).map(ia),s.notifications=S(Ot,Zi).map(Za),s.messageConversations=S(xt,Ma).map(oe),s.messageAccess=S(Et,Fa).map(W),s.messages=S(Tt,Aa).map(de),s.messageReads=S(Rt,xa).map(ct),s.messageAttachments=S(Pt,Oa).map(we),s.timeEntries=he(Ft,[]),s.activeTimer=he(At,null),s.teamMembers=S($a,Qi).map(Ka),s.memberships=S(wa,Vi),s.profiles=[],s.subscriptions=[],s.roles=[],s.rolePermissions=[],s.roleAssignments=[],s.resourceAcl=[],s.fieldPermissions=[],s.companyInvites=[],s.joinRequests=[],s.auditEvents=[],s.companies=Cs(st.map(rt)),s.sync={label:"Demo mode",mode:"local"}}function nn(){return`
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
  `}function Y(e,t="symbol-icon"){return`<svg class="${o(t)}" aria-hidden="true" focusable="false"><use href="#${o(e)}"></use></svg>`}function es(e=s.route?.section||"jobs"){return Nt.find(t=>t.id===e)?.symbol||"q-empty"}function ts(e){const t=String(e||"").toLowerCase();return t.includes("job")||t.includes("pipeline")?"q-symbol-jobs":t.includes("task")||t.includes("review")?"q-symbol-tasks":t.includes("file")?"q-symbol-files":t.includes("form")?"q-symbol-forms":t.includes("account")||t.includes("customer")||t.includes("member")||t.includes("user")||t.includes("lead")?"q-symbol-crm":t.includes("invoice")||t.includes("collected")||t.includes("expense")||t.includes("net")||t.includes("outstanding")?"q-symbol-finance":t.includes("time")||t.includes("today")||t.includes("days")||t.includes("timer")||t.includes("entries")?"q-symbol-clock":t.includes("approval")||t.includes("access")?"q-symbol-approvals":es()}function on(e,t){const a=y(),i=p(),n=Il(a);return`
    <div class="quest-app" data-route="${o(e.name)}">
      ${nn()}
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${b(d("jobs",{},i))}" data-router aria-label="Quest HQ workspace">
            ${Y("q-logo","brand-symbol")}
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${o(xe.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            ${Y("q-company")}
            <select data-company-switch aria-label="Active company">
              ${ks().map(r=>`<option value="${o(r.id)}" ${r.id===i?"selected":""}>${o(Kt(r))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            ${Y("q-search")}
            <input data-global-search value="${o(s.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${o(s.sync.mode)}" data-sync-state>${o(s.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          ${rn(i)}
          <div class="account-menu ${s.accountMenuOpen?"open":""}">
            <button class="avatar-button" type="button" data-action="toggle-account-menu" aria-label="Open account menu" aria-expanded="${s.accountMenuOpen?"true":"false"}">
              ${pe(a.profile,"avatar")}
            </button>
            <div class="account-popover">
              <strong>${o(a.profile.full_name)}</strong>
              <span>${o(a.profile.role_label)} - ${o(M(i))}</span>
              ${n?"":`
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
      ${cn(i)}
      <div class="app-body">
        <aside class="deck" aria-label="Quest navigation">
          ${dn(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${Qo(e,a)}
    ${Vo()}
  `}function rn(e){const t=Gr(e),a=t.filter(i=>!i.read_at).length;return`
    <div class="notification-center ${s.notificationMenuOpen?"open":""}">
      <button class="icon-button notification-button" type="button" data-action="toggle-notifications" aria-label="Open notifications" aria-expanded="${s.notificationMenuOpen?"true":"false"}">
        <i class="ti ti-bell"></i>
        ${a?`<b>${o(String(Math.min(a,99)))}</b>`:""}
      </button>
      <div class="notification-popover" role="dialog" aria-label="Notifications">
        <div class="notification-head">
          <div><strong>Inbox</strong><span>${o(M(e))}</span></div>
          <button type="button" data-action="mark-all-notifications-read" ${a?"":"disabled"}>Mark all read</button>
        </div>
        <div class="notification-list">
          ${t.slice(0,12).map(i=>ln(i)).join("")||_(s.session?.auth==="supabase"?"No live notifications yet. Supabase inbox persistence comes after RLS.":"No notifications yet.")}
        </div>
      </div>
    </div>
  `}function ln(e){return`
    <button class="notification-item ${e.read_at?"read":"unread"}" type="button" data-action="open-notification" data-notification-id="${o(e.id)}">
      <span></span>
      <div>
        <small>${o(e.title)} - ${o(ra(e.created_at))}</small>
        <strong>${o(e.body)}</strong>
      </div>
    </button>
  `}function cn(e){const t=Jt(e);return t?`
    <div class="role-preview-banner" style="--role-color:${o(t.color)}">
      <span></span>
      <div>
        <strong>Viewing as ${o(t.name)}</strong>
        <small>Permission preview only. Your real account has not changed.</small>
      </div>
      <button class="btn" type="button" data-action="exit-role-preview"><i class="ti ti-eye-off"></i>Exit preview</button>
    </div>
  `:""}function dn(e){const t=p();return`
    <div class="company-card">
      <span class="company-card-symbol" style="--company-accent:${o(be(t))}">${Y("q-company")}</span>
      <div>
        <strong>${o(M(t))}</strong>
        <small>${o(ot(t))} workspace</small>
      </div>
    </div>
    ${["Workspace","Company","Operations"].map(a=>mn(a,Nt.filter(i=>i.group===a&&fn(i,t)).map(i=>i.status==="planned"?un(i.symbol,i.label):pn(e,d(i.id,{},t),i.symbol,i.label,gn(i.id,t))))).join("")}
  `}function mn(e,t){return`
    <section class="side-group">
      <div class="side-label">${o(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function pn(e,t,a,i,n=""){return`
    <a class="side-item ${Vr(e,t)?"active":""}" href="${b(t)}" data-router>
      ${Y(a)}
      <span>${o(i)}</span>
      ${n!==""?`<b>${o(String(n))}</b>`:""}
    </a>
  `}function un(e,t){return`
    <button class="side-item planned" type="button" disabled aria-disabled="true">
      ${Y(e)}
      <span>${o(t)}</span>
      <b>Planned</b>
    </button>
  `}function fn(e,t=p()){return e.status==="planned"?!0:!Ha(t)&&!["settings","users"].includes(e.id)?!1:V(e.permission||`${e.id}.view`,t)}function gn(e,t=p()){return e==="jobs"?P(t).length:e==="tasks"?te(t).length:e==="files"?Se(t).length:e==="forms"?_e(t).length:e==="crm"?Ht(t).length:e==="finance"?ke(t).length:e==="users"?fe(t).length:e==="messages"?Zr(t)||Ue(t).length:e==="time"?gs(t).focus.length:e==="approvals"?bs(t).length:e==="clock"&&Wt(t)?"On":""}function Ea(e,t){return`
    <nav class="tabbar compact-tabbar" aria-label="${o(e)}">
      ${t.map(([a,i,n])=>`<a class="${n?"active":""}" href="${b(a)}" data-router>${o(i)}</a>`).join("")}
    </nav>
  `}function as(e){if(e.name==="command")return yn(p());if(e.name!=="company")return yi(e.name);const t=e.companyId,a=Nt.find(i=>i.id===e.section);if(a?.status!=="planned"){if(!Ha(t)&&!["settings","users"].includes(e.section))return bn(t);if(a?.permission&&!V(a.permission,t))return _n(t,a.permission)}return e.section==="jobs"?hn(e,t):e.section==="tasks"?Dn(e,t):e.section==="files"?Mn(e,t):e.section==="users"?Vn(e,t):e.section==="settings"?Wn(e,t):e.section==="forms"?Xn(t):e.section==="analytics"?vn(e,t):e.section==="crm"?po(e,t):e.section==="finance"?jo(e,t):e.section==="messages"?fo(e,t):e.section==="team-chart"?Hn(t):e.section==="time"||e.section==="approvals"||e.section==="clock"?xo(e,t):yi(e.section)}function bn(e){return`
    ${z("Subscription required","This company workspace needs an active or trialing subscription before paid modules can open.",`
      <a class="btn btn-primary" href="${b(d("settings",{tab:"billing"},e))}" data-router><i class="ti ti-credit-card"></i>Billing</a>
    `)}
    <section class="panel">
      ${Q([["Company",M(e)],["Subscription",Ds(e)],["Allowed area","Billing and settings remain available to owners/admins"]])}
    </section>
  `}function _n(e,t){return`
    ${z("Access denied","Your role does not include the permission required for this module.",`
      <a class="btn" href="${b(d("settings",{tab:"roles"},e))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
    `)}
    <section class="panel">
      ${Q([["Company",M(e)],["Required permission",t],["Your role",ot(e)]])}
    </section>
  `}function yn(e){const t=P(e),a=te(e),i=a.filter(r=>["critical","urgent"].includes(r.priority)),n=Se(e);return`
    ${z("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${b(d("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${b(d("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    `)}
    ${Ml([["Jobs",t.length],["Open tasks",a.filter(r=>r.status!=="done").length],["Urgent tasks",i.length],["Drive files",n.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${b(d("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(r=>sa(r)).join("")||_("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${Q([["Company",M(e)],["Visible users",fe(e).length],["Auth mode","Supabase auth"],["RLS status","Ready for enforcement"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(r=>Fl(r)).join("")||_("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function vn(e,t){const a=e.jobId?F(e.jobId):null,i=a?[a]:P(t),n=te(t).filter(g=>!a||g.project_id===a.id),r=Se(t).filter(g=>!a||g.job_id===a.id),l=_e(t).filter(g=>!a||g.linked_job_id===a.id),c=n.filter(g=>g.status!=="done"),u=n.filter(g=>g.status!=="done"&&g.due&&new Date(g.due)<la()),f=ie(i,"estimate_total");return`
    <section class="analytics-workspace">
      <section class="analytics-toolbar panel">
        <div>
          <strong>Analytics</strong>
          <span>${o(a?a.name:M(t))}</span>
        </div>
        <label>
          <span>Job</span>
          <select data-analytics-job-filter>
            <option value="">All jobs</option>
            ${P(t).map(g=>`<option value="${o(g.id)}" ${a?.id===g.id?"selected":""}>${o(g.name)}</option>`).join("")}
          </select>
        </label>
        <a class="btn" href="${b(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      </section>
      <section class="analytics-grid">
        <article class="panel analytics-score">
          <span>Open work</span>
          <strong>${o(c.length)}</strong>
          <small>${o(u.length)} overdue / ${o(n.filter(g=>g.priority==="urgent"||g.priority==="critical").length)} urgent</small>
        </article>
        <article class="panel analytics-score">
          <span>Pipeline value</span>
          <strong>${o(h(f))}</strong>
          <small>${o(i.length)} visible job${i.length===1?"":"s"}</small>
        </article>
        <article class="panel analytics-score">
          <span>Drive and forms</span>
          <strong>${o(r.length+l.length)}</strong>
          <small>${o(r.length)} files / ${o(l.length)} forms</small>
        </article>
        <article class="panel analytics-score">
          <span>Completion</span>
          <strong>${o(hc(n.filter(g=>g.status==="done").length,n.length))}</strong>
          <small>${o(n.filter(g=>g.status==="done").length)} done of ${o(n.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${i.map(g=>`
              <a class="analytics-row" href="${b(d("analytics",{job_id:g.id},t))}" data-router>
                <span><strong>${o(g.name)}</strong><small>${o(g.client_name||M(t))}</small></span>
                <span>${o(g.stage)}</span>
                <span>${o(Zt(g.id))}</span>
                <span>${o(Dt(g.id))}</span>
                <span>${o(h(g.estimate_total))}</span>
              </a>
            `).join("")||_("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${tt.map(g=>{const $=n.filter(L=>L.status===g).length;return`<div><span>${o(le(g))}</span><b><i style="width:${o(Bs($,n.length))}%"></i></b><strong>${o($)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${n.filter(g=>g.status!=="done").sort((g,$)=>Pe($.priority)-Pe(g.priority)).slice(0,8).map(g=>sa(g)).join("")||_("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function hn(e,t){const a=Br(e.params.get("tab")),i=$e();return`
    ${z("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${b(d("files",i?{job_id:i.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(et).map(n=>`<option value="${o(n)}" ${s.stageFilter===n?"selected":""}>${o(n==="all"?"All stages":n)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${i?o(i.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${Ei.map(n=>`<a class="${n===a?"active":""}" href="${b(d("jobs",{tab:n,...i?{job_id:i.id}:{}},t))}" data-router>${o(Jr(n))}</a>`).join("")}
    </nav>
    ${$n(a,t,i)}
  `}function $n(e,t,a){return e==="pipeline"?ui(t):e==="list"?wn(t):e==="profile"?Sn(t,a):ui(t)}function ui(e){const t=fs(e);return`
    <section class="job-board">
      ${et.map(a=>{const i=t.filter(n=>n.stage===a);return`
          <article class="job-lane">
            <h2><span>${o(a)}</span><b>${i.length}</b></h2>
            ${i.map(n=>Al(n)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function wn(e){const t=fs(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===s.selectedJobId?"active":""}" type="button" data-select-job="${o(a.id)}">
            <span><strong>${o(a.name)}</strong><small>${o(a.client_name||"No client")} - ${o(a.site_address||"No address")}</small></span>
            <span>${o(a.stage)}</span>
            <span>${Xa(a.priority)}</span>
            <span>${o(a.owner_name||"Unassigned")}</span>
            <span>${o(Zt(a.id))}</span>
            <span>${h(a.estimate_total)}</span>
          </button>
        `).join("")||_("No jobs match this view.")}
      </div>
    </section>
  `}function Sn(e,t){return t?`
    <section class="profile-layout">
      <article class="panel job-profile-hero">
        <div class="hero-image"></div>
        <div class="hero-content">
          <span>${o(M(e))} - ${o(t.job_type)}</span>
          <h2>${o(t.name)}</h2>
          <p>${o(t.scope||"No scope written yet.")}</p>
        </div>
      </article>
      <aside class="panel">
        <div class="section-head"><div><h2>Job controls</h2><p>Job context feeds company tasks and drive folders.</p></div></div>
        ${Q([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",h(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${b(d("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${o(t.id)}">Edit job</button>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${pt(d("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${Zt(t.id)} linked tasks`)}
          ${pt(d("files",{job_id:t.id},e),"ti-folder","Files",`${Dt(t.id)} files`)}
          ${pt(d("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${pt(d("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:_("Create a job to see the profile workspace.")}function kn(e,t){const a=t||hl(e);return`
    <form class="job-editor" data-job-form>
      <input type="hidden" name="id" value="${o(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${D("Workspace name","name",a.name,!0)}
      ${T("Company","company_id",e,ks().map(i=>[i.id,Kt(i)]))}
      ${D("Client","client_name",a.client_name)}
      ${D("Contact","contact_name",a.contact_name)}
      ${D("Account owner","owner_name",a.owner_name)}
      ${D("Job type","job_type",a.job_type||"Roofing")}
      ${T("Business status","stage",a.stage||"Lead",et.map(i=>[i,i]))}
      ${T("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(i=>[i,i]))}
      ${D("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${D("Invoice total","invoice_total",a.invoice_total||0,!1,"number")}
      ${D("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${me("Scope","scope",a.scope,"span-2")}
      ${me("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${o(t.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function Dn(e,t){const a=e.jobId?F(e.jobId):null,i=pl(t,a?.id);return`
    ${z(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${b(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${b(d("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${Cn(t,a)}
    <section class="task-layout task-layout-flat">
      <article class="panel task-main">
        ${s.taskView==="board"?qn(t,i):jn(t,i)}
      </article>
    </section>
  `}function Cn(e,t){return`
    <section class="workspace-toolbar">
      <label>
        <span>Job</span>
        <select data-task-job-filter>
          <option value="">All jobs</option>
          ${P(e).map(i=>`<option value="${o(i.id)}" ${t?.id===i.id?"selected":""}>${o(i.name)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select data-task-status-filter>
          ${["all"].concat(tt).map(i=>`<option value="${o(i)}" ${s.taskStatusFilter===i?"selected":""}>${o(i==="all"?"All statuses":le(i))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(vt).map(i=>`<option value="${o(i)}" ${s.taskPriorityFilter===i?"selected":""}>${o(i==="all"?"All priorities":q(i))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${s.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${s.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function jn(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===s.selectedTaskId?"active":""}" type="button" data-select-task="${o(a.id)}">
          <span><strong>${o(a.title)}</strong><small>${o(a.description||dt(a.type))}</small></span>
          <span>${o(F(a.project_id)?.name||"Company task")}</span>
          <span>${o(K(a.assignee_id))}</span>
          <span>${Is(a.priority)}</span>
          <span>${Ms(a.status)}</span>
          <span>${x(a.due)}</span>
        </button>
      `).join("")||_("No tasks match this workspace view.")}
    </div>
  `}function qn(e,t){return`
    <div class="task-board">
      ${tt.map(a=>{const i=t.filter(n=>n.status===a);return`
          <section class="task-column">
            <h2><span>${o(le(a))}</span><b>${i.length}</b></h2>
            ${i.map(n=>`
              <button class="task-card priority-${o(n.priority)}" type="button" data-select-task="${o(n.id)}">
                <strong>${o(n.title)}</strong>
                <span>${o(F(n.project_id)?.name||M(e))}</span>
                <small>${o(K(n.assignee_id))} - ${x(n.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function In(e,t){return t?`
    <div class="section-head">
      <div><h2>${o(t.title)}</h2><p>${o(F(t.project_id)?.name||M(e))}</p></div>
      <a class="btn" href="${b(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${Q([["Status",le(t.status)],["Priority",q(t.priority)],["Type",dt(t.type)],["Assignee",K(t.assignee_id)],["Due",x(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${o(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${_("No task selected.")}
    `}function fi(e,t,a){const i=a||$l(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${o(a?i.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${D("Task title","title",i.title,!0)}
      ${T("Job","project_id",i.project_id||"",[["","Company-level task"]].concat(P(e).map(n=>[n.id,n.name])))}
      ${T("Status","status",i.status,tt.map(n=>[n,le(n)]))}
      ${T("Priority","priority",i.priority,vt.map(n=>[n,q(n)]))}
      ${T("Type","type",i.type,Ti.map(n=>[n,dt(n)]))}
      ${T("Assignee","assignee_id",i.assignee_id,fe(e).map(n=>[n.id,K(n.id)]))}
      ${D("Due date","due",i.due||I(1),!0,"date")}
      ${me("Description","description",i.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${o(a.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function Mn(e,t){const a=e.params.get("folder")||s.driveFolder||"home";s.driveFolder=a;const i=e.jobId?F(e.jobId):null,n=Kl(t,a,i?.id||"");return`
    <section class="tool-page drive-page">
      <section class="drive-app panel">
        <header class="drive-topbar">
          <div class="drive-location">
            <span class="drive-logo"><i class="ti ti-folder"></i></span>
            <div>
              <strong>${o(i?i.name:"Company Drive")}</strong>
              <small>${o(i?`${i.client_name||M(t)} file workspace`:`${M(t)} file manager`)}</small>
            </div>
          </div>
          <label class="drive-search">
            <i class="ti ti-search"></i>
            <input data-file-search value="${o(s.fileQuery)}" placeholder="Search drive" />
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
                <a href="${b(d("files",{},t))}" data-router>${o(M(t))}</a>
                ${a!=="home"?Yl(t,a,i):""}
                ${i?`<span>/</span><strong>${o(i.name)}</strong>`:""}
              </nav>
              <div class="drive-compact-controls">
                <div class="segmented" role="group" aria-label="Drive view">
                  <button class="${s.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Icons</button>
                  <button class="${s.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list-details"></i>Details</button>
                </div>
              </div>
            </section>
            ${Fn(t,a,i,n)}
          </div>
        </div>
      </section>
    </section>
  `}function Fn(e,t,a,i){const n=Hl(e,t,a),r=n.map(c=>({kind:"folder",...c})).concat(i.map(c=>({kind:"file",file:c}))),l=a?a.name:t==="home"?"This folder":se(t);return`
    <section class="drive-section-title">
      <div><h3>${o(l)}</h3><span>${n.length} folder${n.length===1?"":"s"} / ${i.length} file${i.length===1?"":"s"}</span></div>
    </section>
    ${s.driveView==="list"?An(r):On(r)}
  `}function An(e){return`
    <div class="explorer-table" role="table" aria-label="File explorer">
      <div class="explorer-head" role="row">
        <span>Name</span>
        <span>Date modified</span>
        <span>Type</span>
        <span>Size</span>
      </div>
      ${e.map(t=>t.kind==="folder"?En(t):Tn(t.file)).join("")||_("This folder is empty.")}
    </div>
  `}function On(e){return`
    <section class="drive-folder-grid explorer-grid">
      ${e.map(t=>t.kind==="folder"?xn(t):Pn(t.file)).join("")||_("This folder is empty.")}
    </section>
  `}function xn(e){return`
    <a class="drive-folder-card explorer-folder" href="${o(e.href)}" data-router>
      <span class="drive-folder-icon"><i class="ti ${o(e.icon||"ti-folder")}"></i></span>
      <strong>${o(e.name)}</strong>
      <em>${o(e.countLabel||"0 items")}</em>
    </a>
  `}function En(e){return`
    <a class="explorer-row folder-row-live" href="${o(e.href)}" data-router role="row">
      <span class="explorer-name"><span class="file-type folder"><i class="ti ${o(e.icon||"ti-folder")}"></i></span><strong>${o(e.name)}</strong></span>
      <span>${o(e.updatedLabel||"")}</span>
      <span>Folder</span>
      <span>${o(e.countLabel||"")}</span>
    </a>
  `}function Tn(e){return`
    <button type="button" class="explorer-row ${e.id===s.selectedFileId?"active":""}" data-action="select-file" data-file-id="${o(e.id)}" role="row">
      <span class="explorer-name">${Rn(e)}<strong>${o(e.file_name)}</strong></span>
      <span>${x(e.updated_at||e.created_at)}</span>
      <span>${o(je(e))}</span>
      <span>${oi(e.size_bytes)}</span>
    </button>
  `}function Rn(e){return`
    <span class="file-type ${o(si(e))}">
      <i class="ti ${o(Qs(e))}"></i>
      <small>${o(Gl(e))}</small>
    </span>
  `}function Pn(e){return`
    <button type="button" class="file-card-live ${e.id===s.selectedFileId?"active":""}" data-action="select-file" data-file-id="${o(e.id)}">
      <span class="file-thumb">${ni(e)}</span>
      <strong>${o(e.file_name)}</strong>
      <span>${o(je(e))} / ${oi(e.size_bytes)}</span>
    </button>
  `}function Nn(e,t){return`
    <section class="file-viewer-layout">
      <div class="file-viewer-stage">
        ${Un(e)}
      </div>
      <aside class="file-viewer-meta">
        <div class="file-open-head">
          ${ni(e)}
          <div>
            <strong>${o(e.file_name)}</strong>
            <span>${o(je(e))} / ${oi(e.size_bytes)}</span>
          </div>
        </div>
        <div class="file-detail-list">
          ${ve("Location",se(e.folder))}
          ${ve("Job",F(e.job_id)?.name||"Company shared")}
          ${ve("Uploaded by",e.uploaded_by_label||"Quest HQ")}
          ${ve("Modified",x(e.updated_at||e.created_at))}
          ${ve("Storage",e.object_path||"Metadata only")}
        </div>
        <div class="file-detail-actions">
          <button class="btn" type="button" data-action="download-file" data-file-id="${o(e.id)}"><i class="ti ti-download"></i>Download</button>
          <button class="btn danger" type="button" data-action="delete-file" data-file-id="${o(e.id)}"><i class="ti ti-trash"></i>Delete</button>
        </div>
      </aside>
    </section>
  `}function Un(e){const t=si(e);return e.signed_url&&t==="image"?`<img class="file-preview-media" src="${o(e.signed_url)}" alt="" />`:e.signed_url&&t==="pdf"?`<iframe class="file-preview-frame" src="${o(e.signed_url)}" title="${o(e.file_name)}"></iframe>`:e.signed_url&&t==="text"?`<iframe class="file-preview-frame text" src="${o(e.signed_url)}" title="${o(e.file_name)}"></iframe>`:["doc","sheet"].includes(t)&&e.signed_url?`<iframe class="file-preview-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.signed_url)}" title="${o(e.file_name)}"></iframe>`:`
    <div class="file-preview-empty">
      ${ni(e,!0)}
      <strong>${o(je(e))} preview</strong>
      <p>${o(e.object_path?"Preview will load when a signed file URL is available.":"This is a metadata-only file record. Upload the actual file object to preview it here.")}</p>
      ${e.notes?`<pre>${o(e.notes)}</pre>`:""}
    </div>
  `}function Ln(){const e=p(),t=s.route||Qt(),a=t.params.get("folder")||s.driveFolder||"home",i=t.jobId?F(t.jobId):null;return j("Drive","New folder",`
    <form class="compact-tool-form" data-folder-form>
      <label><span>Folder name</span><input name="name" placeholder="Folder name" required autofocus /></label>
      <input type="hidden" name="company_id" value="${o(e)}" />
      <input type="hidden" name="parent_key" value="${o(xs(a,i))}" />
      <div class="file-upload-log">
        <strong>Location</strong>
        <span>${o(a==="home"?M(e):i?.name||se(a))}</span>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create folder</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"task-modal")}function Qn(){const e=p(),t=s.route?.params?.get("folder")||(s.driveFolder==="home"?"shared":s.driveFolder),a=s.route?.jobId||"";return`
    <div class="modal-overlay">
      <div class="modal-panel file-modal-panel" role="dialog" aria-modal="true" aria-labelledby="upload-title">
        <div class="modal-head">
          <div><div class="eyebrow">${o(M(e))} Drive</div><h2 id="upload-title">Upload files</h2></div>
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
          ${T("Folder","folder",t,_c(e))}
          ${T("Job","job_id",a,[["","Company shared file"]].concat(P(e).map(i=>[i.id,i.name])))}
          ${T("Category","category",se(t),Ws.filter(i=>i!=="All categories").map(i=>[i,i]))}
          ${D("Uploaded by","uploaded_by_label",y().profile.full_name||"Quest HQ")}
          ${me("Notes","notes","","span-2")}
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
  `}function Vn(e,t){const a=nt(t),i=["members","access"].includes(e.params.get("tab"))?e.params.get("tab"):"members",n=s.joinRequests.filter(l=>l.company_id===t&&l.status==="pending"),r=V("users.manage",t);return`
    ${z("Users","Company members, roles, workers, and access context.",`
      <button class="btn btn-primary" type="button" data-action="open-invite-form" ${r?"":"disabled"}><i class="ti ti-user-plus"></i>Invite user</button>
      <a class="btn" href="${b(d("settings",{tab:"roles"},t))}" data-router><i class="ti ti-shield-lock"></i>Roles</a>
      <a class="btn" href="${b(d("settings",{tab:"access"},t))}" data-router><i class="ti ti-settings"></i>Access settings</a>
    `)}
    ${Ea("Users sections",[[d("users",{tab:"members"},t),"Members",i==="members"],[d("users",{tab:"access"},t),"Access",i==="access"]])}
    ${i==="members"?`
      <section class="metric-grid operations-metrics">
        ${C("Active users",a.filter(l=>l.status==="active").length)}
        ${C("Pending",a.filter(l=>l.status!=="active").length+n.length)}
        ${C("Roles",ge(t).length)}
      </section>
      <section class="users-grid">
        ${a.map(l=>`
          <article class="user-card ${l.status!=="active"?"muted":""}">
            ${pe({full_name:ht(l),email:l.email,avatar_url:l.avatar_url},"avatar")}
            <div>
              <strong>${o(ht(l))}</strong>
              <span>${o(is(l))}</span>
              <small>${o(l.role_label)} / ${o(q(l.status))}</small>
            </div>
          </article>
        `).join("")||_("No users assigned to this company yet.")}
      </section>
    `:`
    <section class="dashboard-grid compact-settings-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Member access</h2><p>Assign roles and confirm each user's company status.</p></div>
        </div>
        <div class="access-user-list">
          ${a.map(l=>Bn(t,l,r)).join("")||_("No users assigned to this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head">
          <div><h2>Invites</h2><p>Copy a secure invite code or link for a specific email address.</p></div>
          <button class="btn btn-primary" type="button" data-action="open-invite-form" ${r?"":"disabled"}><i class="ti ti-user-plus"></i>Invite</button>
        </div>
        <div class="access-invite-list">
          ${il(t).map(l=>zn(l,r)).join("")||_("No pending invites.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Approve requests into this company workspace or reject them.</p></div></div>
        <div class="access-request-list">
          ${n.map(l=>Jn(l,r)).join("")||_("No pending join requests.")}
        </div>
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Access model</h2><p>Membership is company-scoped; UI hiding is convenience, RLS is the real privacy layer.</p></div></div>
        ${Q([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Supabase Auth + RLS"],["Your role",ot(t)],["Can manage users",r?"Yes":"No"]])}
      </article>
    </section>
    `}
  `}function Bn(e,t,a){const i=ge(e),n=t.role_id||wt(e,t.role)||i[0]?.id||"";return`
    <article class="access-user-row">
      ${pe({full_name:ht(t),email:t.email,avatar_url:t.avatar_url},"avatar")}
      <div class="access-user-main">
        <strong>${o(ht(t))}</strong>
        <span>${o(is(t))} / ${o(q(t.status))}</span>
      </div>
      <form class="access-role-form" data-user-role-form>
        <input type="hidden" name="company_id" value="${o(e)}" />
        <input type="hidden" name="profile_id" value="${o(t.profile_id)}" />
        <select name="role_id" ${a&&t.profile_id?"":"disabled"}>
          ${i.map(r=>`<option value="${o(r.id)}" ${r.id===n?"selected":""}>${o(r.name)}</option>`).join("")}
        </select>
        <select name="membership_status" ${a&&t.profile_id?"":"disabled"}>
          ${["active","pending","disabled"].map(r=>`<option value="${o(r)}" ${r===t.status?"selected":""}>${o(q(r))}</option>`).join("")}
        </select>
        <button class="btn" type="submit" ${a&&t.profile_id?"":"disabled"}>Save</button>
      </form>
    </article>
  `}function Jn(e,t){const a=e.requested_email||zt(e.profile_id)?.email||e.profile_id||"Requester";return`
    <article class="access-request-row">
      <div>
        <strong>${o(a)}</strong>
        <span>${o(e.message||"Access request")} / ${x(e.created_at)}</span>
      </div>
      <div>
        <button class="btn btn-primary" type="button" data-action="approve-join-request" data-request-id="${o(e.id)}" ${t?"":"disabled"}>Approve</button>
        <button class="btn danger" type="button" data-action="reject-join-request" data-request-id="${o(e.id)}" ${t?"":"disabled"}>Reject</button>
      </div>
    </article>
  `}function zn(e,t){const a=Qe(e.company_id,e.role_id),i=e.expires_at&&Date.parse(e.expires_at)<Date.now();return`
    <article class="access-invite-row ${i?"muted":""}">
      <div>
        <strong>${o(e.email)}</strong>
        <span>${o(a?.name||"Member")} / ${i?"Expired":`Expires ${x(e.expires_at)}`}</span>
        ${e.token?`<code class="invite-code">${o(e.token)}</code>`:""}
      </div>
      <div>
        <button class="btn" type="button" data-action="copy-invite-code" data-invite-id="${o(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-key"></i>Copy code</button>
        <button class="btn" type="button" data-action="copy-invite-link" data-invite-id="${o(e.id)}" ${t&&e.token?"":"disabled"}><i class="ti ti-link"></i>Copy link</button>
        <button class="btn danger" type="button" data-action="revoke-invite" data-invite-id="${o(e.id)}" ${t?"":"disabled"}>Revoke</button>
      </div>
    </article>
  `}function ht(e){const t=String(e.name||"").trim(),a=String(e.email||"").trim();if(t&&!It(t))return t;if(a&&!It(a))return a.split("@")[0].replace(/[._-]+/g," ").replace(/\b\w/g,n=>n.toUpperCase());const i=String(e.role||"").toLowerCase();return i==="owner"?"Workspace owner":i==="admin"?"Workspace admin":i==="developer"?"Developer":`${e.role_label||"Workspace"} user`}function is(e){const t=String(e.email||"").trim();if(t&&!It(t))return t;const a=String(e.profile_id||e.member_id||"").trim();return a?`ID ${$c(a)}`:"No email on profile"}function Hn(e){const t=fe(e),a=t.filter(i=>!i.supervisor_id||!t.some(n=>n.id===i.supervisor_id));return`
    <section class="tool-page team-chart-page">
      ${z("Team chart","Reporting lines, roles, and company coverage for this workspace.",`
        <a class="btn" href="${b(d("users",{},e))}" data-router><i class="ti ti-users"></i>Users</a>
        <a class="btn btn-primary" href="${b(d("settings",{tab:"team"},e))}" data-router><i class="ti ti-settings"></i>Worker settings</a>
      `)}
      <section class="metric-grid operations-metrics">
        ${C("Members",t.length)}
        ${C("Leads",a.length)}
        ${C("Open tasks",te(e).filter(La).length)}
        ${C("Active timer",Wt(e)?"Yes":"No")}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Reporting chart</h2><p>Supervisor links are local/basic until Auth and RLS are restored.</p></div></div>
        <div class="team-tree">
          ${a.map(i=>ss(e,i,t)).join("")||_("No workers assigned.")}
        </div>
      </section>
    </section>
  `}function ss(e,t,a,i=0){const n=a.filter(r=>r.supervisor_id===t.id);return`
    <article class="team-node" style="--depth:${i}">
      <div class="team-node-card">
        ${pe({full_name:t.full_name,avatar_url:t.avatar_url},"avatar")}
        <span><strong>${o(t.full_name)}</strong><small>${o(St(e,t.id))}</small></span>
        <b>${te(e).filter(r=>r.assignee_id===t.id&&La(r)).length} open</b>
      </div>
      ${n.length?`<div class="team-node-children">${n.map(r=>ss(e,r,a,i+1)).join("")}</div>`:""}
    </article>
  `}function Wn(e,t){const a=Yt(t),i=["company","billing","roles","access","team"].includes(e.params.get("tab"))?e.params.get("tab"):"company";return`
    ${z("Settings","Company settings, roles, approvals, and admin controls.","")}
    ${Ea("Settings sections",[[d("settings",{tab:"company"},t),"Company",i==="company"],[d("settings",{tab:"billing"},t),"Billing",i==="billing"],[d("settings",{tab:"roles"},t),"Roles",i==="roles"],[d("settings",{tab:"access"},t),"Access",i==="access"],[d("settings",{tab:"team"},t),"Workers",i==="team"]])}
    <section class="dashboard-grid compact-settings-grid">
      ${i==="company"?`
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${Q([["Name",M(t)],["Company ID",t],["Color",a?.color||be(t)],["Visible jobs",P(t).length]])}
      </article>
      `:""}
      ${i==="billing"?Yn(t):""}
      ${i==="roles"?Kn(t):""}
      ${i==="access"?`
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Memberships, invites, and join requests.</p></div></div>
        ${Q([["Auth switch","Enabled"],["Local login","Disabled"],["Isolation","Server-enforced when migration is applied"],["Memberships",String(s.memberships.filter(n=>n.company_id===t).length)],["Invites",String(s.companyInvites.filter(n=>n.company_id===t&&n.status==="pending").length)]])}
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Join requests</h2><p>Hybrid onboarding queue for this company.</p></div></div>
        <div class="finance-compact-list">
          ${s.joinRequests.filter(n=>n.company_id===t).map(n=>Oe(n.requested_email||n.profile_id,n.message||"Access request",q(n.status),n.created_at)).join("")||_("No pending company approvals.")}
        </div>
      </article>
      `:""}
      ${i==="team"?`
      <article class="panel span-3">
        <div class="section-head"><div><h2>Workers and roles</h2><p>Company users stay here, not inside TaskManagement.</p></div></div>
        <div class="team-chart">
          ${fe(t).map(n=>`<div><strong>${o(n.full_name)}</strong><span>${o(St(t,n.id))}</span></div>`).join("")||_("No workers assigned.")}
        </div>
      </article>
      `:""}
    </section>
  `}function Yn(e){const t=za(e);return`
    <article class="panel">
      <div class="section-head">
        <div><h2>Subscription</h2><p>$300/month company workspace billing gate.</p></div>
        <button class="btn btn-primary" type="button" data-action="start-checkout"><i class="ti ti-credit-card"></i>Start subscription</button>
      </div>
      ${Q([["Plan","$300/month company workspace"],["Status",Ds(e)],["Stripe customer",t?.stripe_customer_id||"Not connected"],["Renewal / trial",t?.current_period_end||t?.trial_ends_at?x(t.current_period_end||t.trial_ends_at):"Pending"]])}
    </article>
    <article class="panel">
      <div class="section-head"><div><h2>Billing gate</h2><p>Paid modules remain available only for trialing, active, past_due, or grace status.</p></div></div>
      ${Q([["Workspace access",Ha(e)?"Allowed":"Suspended"],["Finance/files privacy","Requires Auth + RLS"],["Seat billing","Tracked later; not charged in v1"]])}
    </article>
  `}function Kn(e){const t=ge(e),a=Jt(e);return`
    <article class="panel span-2">
      <div class="section-head">
        <div><h2>Custom roles</h2><p>Discord-style roles for module, action, record, and field permissions.</p></div>
        <button class="btn btn-primary" type="button" data-action="open-role-form"><i class="ti ti-plus"></i>New role</button>
      </div>
      <div class="roles-list">
        ${t.map(i=>{const n=s.rolePermissions.filter(c=>c.role_id===i.id&&c.effect==="allow").length,r=s.roleAssignments.filter(c=>c.company_id===e&&c.role_id===i.id).length,l=a?.id===i.id;return`
            <article class="role-row" style="--role-color:${o(i.color)}">
              <span></span>
              <div><strong>${o(i.name)}</strong><small>${n||"All"} permissions / ${r} users / priority ${i.priority}</small></div>
              <div class="role-row-actions">
                <b>${i.is_system?"System":"Custom"}</b>
                <button class="btn" type="button" data-action="view-as-role" data-role-id="${o(i.id)}" ${l?"disabled":""}>
                  <i class="ti ${l?"ti-eye-check":"ti-eye"}"></i>${l?"Viewing":"View as role"}
                </button>
              </div>
            </article>
          `}).join("")||_("No custom roles yet.")}
      </div>
    </article>
    <article class="panel">
      <div class="section-head"><div><h2>Field controls</h2><p>Finance and sensitive field masking rules.</p></div></div>
      <div class="finance-compact-list">
        ${s.fieldPermissions.filter(i=>i.company_id===e).map(i=>Oe(i.field_key,i.resource_type,i.visibility,"")).join("")||_("No field permission overrides yet.")}
      </div>
    </article>
  `}function Gn(e){return j("Settings","New role",`
    <form class="role-form" data-role-form>
      ${D("Role name","name","")}
      ${D("Color","color","#f0b23b",!1,"color")}
      ${D("Priority","priority","100",!1,"number")}
      <div class="permission-grid span-2">
        ${zs.map(([t,a])=>`
          <label><input type="checkbox" name="permissions" value="${o(t)}" /> <span>${o(a)}</span></label>
        `).join("")}
      </div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create role</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function Zn(e){const t=ge(e).filter(i=>i.name.toLowerCase()!=="owner"),a=[["","Member"]].concat(t.map(i=>[i.id,i.name]));return j("Users","Invite user",`
    <form class="role-form" data-invite-form>
      <input type="hidden" name="company_id" value="${o(e)}" />
      ${D("Email","email","",!0,"email")}
      ${T("Role","role_id",nl(e),a)}
      <div class="form-message span-2">Quest creates an invite code you can copy. Email delivery comes after the Resend/SMTP setup.</div>
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Create invite code</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-modal")}function Xn(e){const t=Zl(e),a=Ge(e),i=s.formsTab==="builder"&&a?"builder":s.formsTab==="responses"?"responses":"library";return`
    <section class="tool-page forms-center">
      <div class="forms-command panel">
        <span class="sync-pill live"><i class="ti ti-device-floppy"></i>Local autosafe</span>
        <label>
          <span>Search</span>
          <input data-form-search value="${o(s.formQuery)}" placeholder="Find form, audience, or job" />
        </label>
        <button class="btn" type="button" data-action="open-forms-tools"><i class="ti ti-adjustments"></i>Tools</button>
        <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
      </div>
      ${i==="builder"?"":`
        <nav class="tabbar forms-tabs" aria-label="Forms workspace">
          ${["library","responses"].map(n=>`
            <button class="${i===n?"active":""}" type="button" data-action="set-forms-tab" data-tab="${o(n)}">${o(q(n))}</button>
          `).join("")}
        </nav>
      `}
      ${i==="library"?eo(e,t,a):""}
      ${i==="builder"?to(e,a):""}
      ${i==="responses"?mo(e,a):""}
    </section>
  `}function eo(e,t,a){return`
    <section class="forms-home">
      <article class="forms-recent-panel panel">
        <div class="forms-panel-head">
          <div>
            <strong>Recent forms</strong>
            <span>${t.length} visible form${t.length===1?"":"s"} in ${o(M(e))}</span>
          </div>
        </div>
        <div class="forms-list forms-list-cards">
          ${t.map(i=>`
            <article class="form-card ${s.expandedFormIds.has(i.id)?"expanded":""} ${a?.id===i.id?"active":""}">
              <span class="form-card-top">
                <i class="ti ti-clipboard-list"></i>
              </span>
              <span class="form-card-main">
                <strong>${o(i.title)}</strong>
                <span>Created by ${o(Xl(i))}</span>
              </span>
              <button class="form-card-toggle" type="button" data-action="toggle-form-card" data-form-id="${o(i.id)}" aria-expanded="${s.expandedFormIds.has(i.id)?"true":"false"}">
                <i class="ti ${s.expandedFormIds.has(i.id)?"ti-chevron-up":"ti-chevron-down"}"></i>
                ${s.expandedFormIds.has(i.id)?"Less":"Details"}
              </button>
              <span class="form-card-meta">
                <small>${o(i.type)} / ${o(i.audience||"Internal")}</small>
                <small>${Rs(i)} questions</small>
                <em>${oa(i.id).length} responses</em>
                <em>Updated ${x(i.updated_at)}</em>
                <em>${o(i.status)}</em>
              </span>
              ${s.expandedFormIds.has(i.id)?`
                <div class="form-card-detail">
                  <p>${o(i.description||"No description yet.")}</p>
                  <div class="form-actions">
                    <button class="btn btn-primary" type="button" data-action="edit-form" data-form-id="${o(i.id)}"><i class="ti ti-pencil"></i>Open builder</button>
                    <button class="btn" type="button" data-action="open-form-preview" data-form-id="${o(i.id)}"><i class="ti ti-eye"></i>Preview</button>
                  </div>
                </div>
              `:""}
            </article>
          `).join("")||_("No forms match this company view.")}
        </div>
      </article>
    </section>
  `}function to(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${_("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(s.formEditorTab)?s.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${o(a)}">
      ${ao(t,a)}
      ${a==="questions"?`
        ${io(e,t)}
        ${so(t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${no(e,t)}
        </article>
      `:""}
      ${a==="responses"?oo(e,t):""}
    </section>
  `}function ao(e,t){const a=oa(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${o(e.title)}</strong>
        <span>${o(e.status)} / ${Rs(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(i=>`
        <button class="${t===i?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${o(i)}">
          ${i==="questions"?'<i class="ti ti-list-details"></i>':i==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${o(q(i))}
        </button>
      `).join("")}
      <button class="btn" type="button" data-action="open-form-preview" data-form-id="${o(e.id)}"><i class="ti ti-eye"></i>Preview</button>
      <button class="btn" type="button" data-action="open-form-actions" data-form-id="${o(e.id)}"><i class="ti ti-share"></i>Share</button>
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${o(e.id)}">Save</button>
    </div>
  `}function io(e,t){return`
    <article class="panel form-identity-panel gform-title-card">
      <div class="gform-accent-strip" style="--form-accent:${o(t.theme_color||be(e))}"></div>
      ${ze("Form title","title",t.title,!0)}
      ${Ps("Form description","description",t.description)}
      <div class="forms-simple-meta">
        <span>${o(t.status)}</span>
        <span>${o(t.type)}</span>
        <span>${o(t.audience||"Internal")}</span>
        <span>${o(F(t.linked_job_id)?.name||"Company level")}</span>
        <span>${o(M(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">Settings</button>
        <button class="btn" type="button" data-action="open-form-preview" data-form-id="${o(t.id)}">Preview</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${o(t.id)}">Publish</button>
      </div>
    </article>
  `}function so(e){return`
    <article class="question-workbench">
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${it.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${o(t)}" title="${o(a)}" aria-label="Add ${o(a)} question"><i class="ti ${o(ec(t))}"></i></button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>ro(t,a)).join("")||_("Add the first question.")}
        </div>
      </div>
    </article>
  `}function no(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${ze("Title","title",t.title,!0)}
      ${ut("Status","status",t.status,qa.map(a=>[a,a]))}
      ${Ps("Description","description",t.description)}
      ${ut("Type","type",t.type,at.map(a=>[a,a]))}
      ${ze("Audience","audience",t.audience)}
      ${ut("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(P(e).map(a=>[a.id,a.name])))}
      ${ze("Theme color","theme_color",t.theme_color||be(e),!1,"color")}
      ${ut("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${ze("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${o(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${o(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${o(t.id)}">Delete</button>
    </div>
  `}function oo(e,t){const a=oa(t.id),i=a[0]||null;return`
    <article class="panel response-list-panel forms-response-editor">
      <div class="section-head">
        <div><h2>Response inbox</h2><p>${a.length} captured response${a.length===1?"":"s"} for this form.</p></div>
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="questions"><i class="ti ti-list-details"></i>Questions</button>
      </div>
      <div class="response-list">
        ${a.map(n=>`
          <button type="button" class="response-card">
            <strong>${o(n.submitted_by||n.submitter_email||"Anonymous")}</strong>
            <span>${o(t.title)}</span>
            <small>${x(n.created_at)}</small>
          </button>
        `).join("")||_("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${i?Ns(i):_("No response selected.")}
    </aside>
  `}function ro(e,t){const a=it.map(([i,n])=>`<option value="${o(i)}" ${e.type===i?"selected":""}>${o(n)}</option>`).join("");return`
    <article class="question-card ${s.selectedQuestionId===e.id?"active":""}" data-question-id="${o(e.id)}">
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
      ${Ze(e)?`
        <div class="question-options">
          ${(e.options||[]).map((i,n)=>`
            <label>
              <span>Option ${n+1}</span>
              <input data-question-option="${n}" value="${o(i)}" />
              <button type="button" data-action="remove-question-option" data-question-id="${o(e.id)}" data-option-index="${n}"><i class="ti ti-x"></i></button>
            </label>
          `).join("")}
          <button class="btn" type="button" data-action="add-question-option" data-question-id="${o(e.id)}"><i class="ti ti-plus"></i>Add option</button>
        </div>
      `:""}
    </article>
  `}function lo(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${o(t.id)}" style="--form-accent:${o(t.theme_color||be(e))}">
      <div class="designed-form-header">
        <span>${o(M(e))}</span>
        <h2>${o(t.title)}</h2>
        <p>${o(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>co(a)).join("")||_("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${o(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function co(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?ne(e,`<textarea name="${o(t)}" rows="3" ${a}></textarea>`):e.type==="date"?ne(e,`<input name="${o(t)}" type="date" ${a} />`):e.type==="file"?ne(e,`<input name="${o(t)}" type="file" ${a} />`):e.type==="yesno"?ne(e,`<select name="${o(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?ne(e,`<input name="${o(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?ne(e,`<select name="${o(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(i=>`<option>${o(i)}</option>`).join("")}</select>`):e.type==="checkbox"?ne(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${o(t)}" type="checkbox" value="${o(i)}" /> ${o(i)}</label>`).join("")}</div>`):e.type==="multiple"?ne(e,`<div class="choice-stack">${(e.options||[]).map(i=>`<label><input name="${o(t)}" type="radio" value="${o(i)}" ${a} /> ${o(i)}</label>`).join("")}</div>`):ne(e,`<input name="${o(t)}" ${a} />`)}function mo(e,t){const a=t?oa(t.id):Ts(e),i=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(n=>`
            <button type="button" class="response-card">
              <strong>${o(qe(n.form_id)?.title||"Unknown form")}</strong>
              <span>${o(n.submitted_by||n.submitter_email||"Anonymous")}</span>
              <small>${x(n.created_at)}</small>
            </button>
          `).join("")||_("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${i?Ns(i):_("No response selected.")}
      </aside>
    </section>
  `}function po(e,t){const a=ll(t),i=Ht(t),n=te(t).filter(c=>c.status!=="done").length,r=ie(P(t),"estimate_total"),l=dl(t);return`
    <section class="tool-page crm-page">
      ${z("CRM","Customers, contacts, and follow-ups built from company jobs.",`
        <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add customer job</button>
      `)}
      <section class="metric-grid crm-metrics">
        ${C("Accounts",i.length)}
        ${C("Open jobs",P(t).filter(c=>c.stage!=="Closed").length)}
        ${C("Open tasks",n)}
        ${C("Pipeline value",h(r))}
      </section>
      <section class="crm-toolbar panel">
        <label>
          <span>Search</span>
          <input data-crm-search value="${o(s.crmQuery)}" placeholder="Find customer, contact, job, or address" />
        </label>
        <label>
          <span>Stage</span>
          <select data-crm-stage-filter>
            ${["all"].concat(et).map(c=>`<option value="${o(c)}" ${s.crmStageFilter===c?"selected":""}>${o(c==="all"?"All stages":c)}</option>`).join("")}
          </select>
        </label>
        <label>
          <span>Owner</span>
          <select data-crm-owner-filter>
            <option value="all" ${s.crmOwnerFilter==="all"?"selected":""}>All owners</option>
            ${l.map(c=>`<option value="${o(c)}" ${s.crmOwnerFilter===c?"selected":""}>${o(c)}</option>`).join("")}
          </select>
        </label>
      </section>
      <section class="panel crm-list-panel">
        <div class="section-head">
          <div><h2>Customers</h2><p>${a.length} visible account${a.length===1?"":"s"} in ${o(M(t))}</p></div>
        </div>
        <div class="data-table crm-table">
          <div class="table-head"><span>Account</span><span>Contact</span><span>Stage</span><span>Owner</span><span>Jobs</span><span>Value</span><span>Updated</span></div>
          ${a.map(c=>`
            <a class="table-row crm-account-row" href="${b(d("crm",{account:c.key},t))}" data-router>
              <span><strong>${o(c.name)}</strong><small>${o(c.subtitle)}</small></span>
              <span>${o(c.primaryContact)}</span>
              <span>${o(c.stage)}</span>
              <span>${o(c.owner)}</span>
              <span>${o(c.jobs.length)}</span>
              <span>${h(c.estimateTotal)}</span>
              <span>${x(c.updatedAt)}</span>
            </a>
          `).join("")||_("No CRM accounts match this view. Add a customer job to start the list.")}
        </div>
      </section>
    </section>
  `}function uo(e,t){const a=cl(e,t);if(!a)return j("CRM","Customer account",_("This customer is not visible in the current company view."));const i=a.latestJob,n=a.tasks.filter(r=>r.status!=="done");return j("CRM",a.name,`
    <div class="crm-account-modal">
      <section class="crm-modal-summary">
        <div class="section-head">
          <div>
            <h2>${o(a.name)}</h2>
            <p>${o(a.subtitle)}</p>
          </div>
          ${Xa(a.priority)}
        </div>
        ${Q([["Primary contact",a.primaryContact],["Owner",a.owner],["Current stage",a.stage],["Pipeline value",h(a.estimateTotal)],["Open tasks",String(n.length)],["Last updated",x(a.updatedAt)]])}
      </section>
      <section class="crm-rollup-grid">
        ${C("Jobs",a.jobs.length)}
        ${C("Files",a.fileCount)}
        ${C("Forms",a.formCount)}
        ${C("Tasks",a.tasks.length)}
      </section>
      <section class="crm-modal-actions">
        ${i?`<a class="btn btn-primary" href="${b(d("jobs",{tab:"profile",job_id:i.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
        ${i?`<a class="btn" href="${b(d("tasks",{job_id:i.id},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>`:""}
        ${i?`<a class="btn" href="${b(d("files",{job_id:i.id},e))}" data-router><i class="ti ti-folder"></i>Files</a>`:""}
        ${i?`<button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${o(i.id)}"><i class="ti ti-pencil"></i>Edit latest job</button>`:""}
        <button class="btn" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Linked jobs</h2><p>Customer workspaces connected to this account.</p></div></div>
        <div class="data-table crm-linked-jobs">
          <div class="table-head"><span>Job</span><span>Stage</span><span>Owner</span><span>Value</span></div>
          ${a.jobs.map(r=>`
            <a class="table-row" href="${b(d("jobs",{tab:"profile",job_id:r.id},e))}" data-router>
              <span><strong>${o(r.name)}</strong><small>${o(r.site_address||"No address")}</small></span>
              <span>${o(r.stage)}</span>
              <span>${o(r.owner_name||"Unassigned")}</span>
              <span>${h(r.estimate_total)}</span>
            </a>
          `).join("")||_("No linked jobs yet.")}
        </div>
      </section>
      <section class="crm-modal-section">
        <div class="section-head"><div><h2>Follow-ups</h2><p>Open tasks across linked jobs.</p></div></div>
        <div class="queue-list">
          ${n.slice(0,6).map(r=>sa(r)).join("")||_("No open follow-ups for this customer.")}
        </div>
      </section>
    </div>
  `,"crm-modal")}function fo(e,t){const a=Ue(t),i=ps(t);i&&s.selectedConversationId!==i.id&&(s.selectedConversationId=i.id);const n=!!(i&&e.params.get("conversation"));return Ll(t,i?.id||""),i&&na(i.id,!1),`
    <section class="tool-page messages-page ${n?"thread-open":""}">
      ${z("Messages","Company chats, role rooms, direct messages, and file sharing.",`
        <button class="btn btn-primary" type="button" data-action="new-message-group"><i class="ti ti-message-plus"></i>New group</button>
        <button class="btn" type="button" data-action="new-direct-message"><i class="ti ti-user-plus"></i>Direct message</button>
      `)}
      <section class="messages-shell">
        <aside class="messages-list-panel panel">
          <div class="messages-tools">
            <label>
              <span>Search</span>
              <input data-message-search value="${o(s.messageQuery)}" placeholder="Find chats or messages" />
            </label>
            <div class="segmented message-filter" role="group" aria-label="Message filters">
              ${["all","unread","company","role","custom","direct"].map(r=>`
                <button type="button" data-action="set-message-filter" data-filter="${o(r)}" class="${s.messageFilter===r?"active":""}">${o(r==="all"?"All":q(r))}</button>
              `).join("")}
            </div>
          </div>
          <div class="conversation-list">
            ${a.map(r=>go(r,t,i?.id===r.id)).join("")||_("No conversations match this view.")}
          </div>
        </aside>
        <main class="messages-thread-panel panel">
          ${i?bo(t,i):ho()}
        </main>
      </section>
      ${s.session?.auth==="local-basic"?$o():""}
    </section>
  `}function go(e,t,a){const i=Le(e.id).at(-1),n=Ua(e.id);return`
    <a class="conversation-row ${a?"active":""}" href="${b(d("messages",{conversation:e.id},t))}" data-router>
      <span class="conversation-mark">${Y(Os(e.type))}</span>
      <span>
        <strong>${o(e.title)}</strong>
        <small>${o(i?.body||ai(e)||"No messages yet")}</small>
      </span>
      <em>${i?ra(i.created_at):""}</em>
      ${n?`<b>${n}</b>`:""}
    </a>
  `}function bo(e,t){const a=Le(t.id),i=V("messages.send",e);return`
    <div class="thread-head">
      <a class="btn mobile-thread-back" href="${b(d("messages",{},e))}" data-router><i class="ti ti-arrow-left"></i>Chats</a>
      <div class="thread-title">
        <span>${Y(Os(t.type))}</span>
        <div>
          <h2>${o(t.title)}</h2>
          <p>${o(ai(t))}</p>
        </div>
      </div>
      <div class="thread-actions">
        <button class="btn" type="button" data-action="message-search-results"><i class="ti ti-search"></i>Search</button>
        <button class="btn" type="button" data-action="message-details" data-conversation-id="${o(t.id)}"><i class="ti ti-info-circle"></i>Details</button>
        <button class="btn" type="button" data-action="manage-message-chat" data-conversation-id="${o(t.id)}" ${V("messages.manage_groups",e)||V("messages.manage",e)?"":"disabled"}><i class="ti ti-users"></i>Access</button>
      </div>
    </div>
    <div class="message-stream">
      ${a.map(n=>_o(n)).join("")||_("No messages yet. Start the thread with a short update.")}
    </div>
    ${i?vo(t):_("Your role can view this chat but cannot send messages.")}
  `}function _o(e){const t=e.sender_profile_id===y().profile.id,a=El(e.sender_profile_id),i=el(e.id);return`
    <article class="message-bubble ${t?"own":""}">
      ${pe(a,"avatar message-avatar")}
      <div class="message-card">
        <div class="message-meta">
          <strong>${o(a.full_name||a.email||Gt(e.sender_profile_id))}</strong>
          <span>${ra(e.created_at)}</span>
          ${t&&V("messages.delete_own",e.company_id)||V("messages.delete_any",e.company_id)?`<button type="button" data-action="delete-message" data-message-id="${o(e.id)}"><i class="ti ti-trash"></i></button>`:""}
        </div>
        ${e.body?`<p>${Pl(e.body)}</p>`:""}
        ${i.length?`<div class="message-attachments">${i.map(yo).join("")}</div>`:""}
      </div>
    </article>
  `}function yo(e){const t=e.mime_type.startsWith("image/");return`
    <button class="message-attachment" type="button" data-action="open-message-attachment" data-attachment-id="${o(e.id)}">
      ${e.preview_url&&t?`<img src="${o(e.preview_url)}" alt="" />`:Y(t?"q-message-image":"q-message-file")}
      <span><strong>${o(e.file_name)}</strong><small>${o(Nl(e.size_bytes))}</small></span>
    </button>
  `}function vo(e){return`
    <form class="message-composer" data-message-form data-conversation-id="${o(e.id)}">
      <input name="body" placeholder="Message ${o(e.title)}" autocomplete="off" />
      <label class="icon-button message-attach-button" title="Attach file">
        <i class="ti ti-paperclip"></i>
        <input name="attachments" type="file" multiple ${V("messages.attach_files",e.company_id)?"":"disabled"} />
      </label>
      <button class="btn btn-primary" type="submit"><i class="ti ti-send"></i>Send</button>
    </form>
  `}function ho(e){return`
    <div class="messages-empty-panel">
      ${Y("q-symbol-messages")}
      <h2>No chat selected</h2>
      <p>Create a group chat, direct message a teammate, or pick a conversation from the list.</p>
      <div class="head-actions">
        <button class="btn btn-primary" type="button" data-action="new-message-group"><i class="ti ti-message-plus"></i>New group</button>
        <button class="btn" type="button" data-action="new-direct-message"><i class="ti ti-user-plus"></i>Direct message</button>
      </div>
    </div>
  `}function $o(e){return`
    <div class="message-scenario">
      <button class="btn btn-primary" type="button" data-action="run-message-scenario"><i class="ti ti-sparkles"></i>Demo scenario</button>
      <button class="btn" type="button" data-action="reset-message-demo"><i class="ti ti-refresh"></i>Reset</button>
    </div>
  `}function wo(e){const t=nt(e);return j("Messages","New group chat",`
    <form class="message-modal-form" data-message-group-form>
      ${D("Chat name","title","",!0)}
      ${T("Type","type","custom",[["company","Company-wide"],["role","Role-based"],["custom","Custom group"]])}
      ${ns(e,[])}
      ${os(t,[])}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create group</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"message-modal")}function So(e){const t=nt(e).filter(a=>(a.profile_id||a.member_id)!==y().profile.id);return j("Messages","New direct message",`
    <form class="message-modal-form" data-direct-message-form>
      ${T("Person","profile_id",t[0]?.profile_id||t[0]?.member_id||"",t.map(a=>[a.profile_id||a.member_id,a.name]))}
      <label><span>First message</span><textarea name="body" rows="3" placeholder="Start with a short note"></textarea></label>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Start chat</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"message-modal")}function ko(e,t){const a=s.messageConversations.find(l=>l.id===t);if(!a)return j("Messages","Chat access",_("Conversation not found."));const i=Na(a.id),n=i.filter(l=>l.target_type==="role").map(l=>l.target_id),r=i.filter(l=>l.target_type==="profile").map(l=>l.target_id);return j("Messages","Chat access",`
    <form class="message-modal-form" data-message-access-form data-conversation-id="${o(a.id)}">
      ${D("Chat name","title",a.title,!0)}
      ${T("Type","type",a.type,[["company","Company-wide"],["role","Role-based"],["custom","Custom group"],["direct","Direct message"]])}
      ${ns(e,n)}
      ${os(nt(e),r)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save access</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"message-modal")}function ns(e,t=[]){const a=new Set(t);return`
    <section class="message-access-section">
      <div class="message-picker-head">
        <strong>Roles</strong>
        <small>Good for large crews. Access updates when role assignments change.</small>
      </div>
      <div class="message-role-grid">
        ${ge(e).map(i=>`
          <label class="message-role-option" style="--role-color:${o(i.color)}">
            <input type="checkbox" name="role_ids" value="${o(i.id)}" ${a.has(i.id)?"checked":""} />
            <span></span>
            <strong>${o(i.name)}</strong>
          </label>
        `).join("")}
      </div>
    </section>
  `}function os(e,t=[]){const a=new Set(t),i=e.slice().sort((n,r)=>Ie(n).localeCompare(Ie(r)));return`
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
        ${i.filter(n=>a.has(n.profile_id||n.member_id)).slice(0,8).map(n=>`
          <span>${pe(Ci(n),"avatar tiny-avatar")} ${o(Ie(n))}</span>
        `).join("")||"<small>No individual people selected.</small>"}
      </div>
      <div class="message-people-list">
        ${i.map(n=>{const r=n.profile_id||n.member_id;return`
            <label class="message-person-row" data-message-person-row data-filter-text="${o([Ie(n),n.email,n.role_label,n.role].join(" ").toLowerCase())}">
              <input type="checkbox" name="profile_ids" value="${o(r)}" ${a.has(r)?"checked":""} />
              ${pe(Ci(n),"avatar message-person-avatar")}
              <span>
                <strong>${o(Ie(n))}</strong>
                <small>${o(Tl(n))}</small>
              </span>
            </label>
          `}).join("")||_("No people available in this company yet.")}
      </div>
    </section>
  `}function Do(e,t){const a=s.messageConversations.find(i=>i.id===t);return a?j("Messages",a.title,`
    ${Q([["Type",q(a.type)],["Access",ai(a)],["Messages",String(Le(a.id).length)],["Attachments",String(Xr(a.id).length)],["Last message",x(a.last_message_at)]])}
  `,"message-modal"):j("Messages","Chat details",_("Conversation not found."))}function Co(e){const t=s.messageQuery.trim().toLowerCase(),a=Ue(e).flatMap(i=>Le(i.id).filter(n=>!t||n.body.toLowerCase().includes(t)).map(n=>({conversation:i,message:n})));return j("Messages","Search results",`
    <div class="queue-list">
      ${a.slice(0,30).map(({conversation:i,message:n})=>`
        <a class="queue-row" href="${b(d("messages",{conversation:i.id},e))}" data-router>
          <span><strong>${o(i.title)}</strong><small>${o(n.body||"Attachment")}</small></span>
          <em>${ra(n.created_at)}</em>
        </a>
      `).join("")||_("No matching messages. Type in the Messages search box first.")}
    </div>
  `,"message-modal")}function jo(e,t){const a=Ss(t),i=ke(t),n=vs(t).slice().sort(Xe("received_at")).slice(0,5),r=Qa(t).slice().sort(Xe("spent_at")).slice(0,5),l=Va(t).slice().sort((c,u)=>c.name.localeCompare(u.name)).slice(0,5);return`
    <section class="tool-page finance-page">
      ${z("Finance","Invoices, payments, expenses, vendors, and job-linked money in one company view.",`
        <button class="btn btn-primary" type="button" data-action="new-finance-invoice"><i class="ti ti-file-dollar"></i>New invoice</button>
        <button class="btn" type="button" data-action="new-finance-payment"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="new-finance-expense"><i class="ti ti-receipt"></i>Add expense</button>
        <button class="btn" type="button" data-action="new-finance-vendor"><i class="ti ti-building-store"></i>Add vendor</button>
        <a class="btn" href="${b(d("finance",{report:"summary"},t))}" data-router><i class="ti ti-report-analytics"></i>Reports</a>
      `)}
      <section class="metric-grid finance-metrics">
        ${C("Estimated pipeline",h(a.pipeline))}
        ${C("Invoiced",h(a.invoiced))}
        ${C("Collected",h(a.collected))}
        ${C("Outstanding",h(a.outstanding))}
        ${C("Expenses",h(a.expenses))}
        ${C("Net position",h(a.net))}
      </section>
      <section class="panel finance-aging">
        <div class="section-head"><div><h2>AR aging</h2><p>Outstanding invoice balance by due date.</p></div></div>
        <div class="finance-aging-grid">
          ${[["Current",a.aging.current],["1-30",a.aging.thirty],["31-60",a.aging.sixty],["61+",a.aging.overSixty]].map(([c,u])=>`<div><span>${o(c)}</span><strong>${h(u)}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel finance-invoice-panel">
        <div class="section-head"><div><h2>Invoices</h2><p>${i.length} billing record${i.length===1?"":"s"} for ${o(M(t))}</p></div></div>
        <div class="data-table finance-invoice-table">
          <div class="table-head"><span>Invoice</span><span>Status</span><span>Job</span><span>Due</span><span>Total</span><span>Paid</span><span>Balance</span></div>
          ${i.map(c=>`
            <a class="table-row" href="${b(d("finance",{invoice:c.id},t))}" data-router>
              <span><strong>${o(c.invoice_number)}</strong><small>${o(c.client_name||F(c.job_id)?.client_name||"No client")}</small></span>
              <span>${Ol(ws(c))}</span>
              <span>${o(F(c.job_id)?.name||"Company level")}</span>
              <span>${x(c.due_date)}</span>
              <span>${h(c.total)}</span>
              <span>${h(Ja(c.id))}</span>
              <span>${h(ce(c.id))}</span>
            </a>
          `).join("")||_("No invoices yet. Create one from a job or customer record.")}
        </div>
      </section>
      <section class="finance-secondary-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Recent payments</h2><p>Money received.</p></div></div>
          <div class="finance-compact-list">
            ${n.map(c=>Oe(De(c.invoice_id)?.invoice_number||"Payment",c.method,h(c.amount),c.received_at)).join("")||_("No payments recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Expenses</h2><p>Job and company costs.</p></div></div>
          <div class="finance-compact-list">
            ${r.map(c=>Oe(fa(c.vendor_id),c.category,h(c.amount),c.spent_at,d("finance",{expense:c.id},t))).join("")||_("No expenses recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Vendors</h2><p>Suppliers and subcontractors.</p></div></div>
          <div class="finance-compact-list">
            ${l.map(c=>Oe(c.name,c.category,c.status,c.updated_at,d("finance",{vendor:c.id},t))).join("")||_("No vendors recorded.")}
          </div>
        </article>
      </section>
    </section>
  `}function qo(e,t){return e.params.get("invoice")?Io(t,e.params.get("invoice")):e.params.get("expense")?Mo(t,e.params.get("expense")):e.params.get("vendor")?Fo(t,e.params.get("vendor")):e.params.get("report")==="summary"?Ao(t):""}function Io(e,t){const a=De(t);if(!a||a.company_id!==e)return j("Finance","Invoice",_("Invoice not found."));const i=$s(a.id),n=F(a.job_id);return j("Finance",a.invoice_number,`
    <div class="finance-detail-modal">
      ${Q([["Client",a.client_name||n?.client_name||"No client"],["Status",ws(a)],["Job",n?.name||"Company level"],["Issued",x(a.issue_date)],["Due",x(a.due_date)],["Total",h(a.total)],["Collected",h(Ja(a.id))],["Balance",h(ce(a.id))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="new-finance-payment" data-invoice-id="${o(a.id)}"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="edit-finance-invoice" data-invoice-id="${o(a.id)}"><i class="ti ti-pencil"></i>Edit invoice</button>
        ${n?`<a class="btn" href="${b(d("jobs",{tab:"profile",job_id:n.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
      </div>
      <section class="finance-modal-section">
        <div class="section-head"><div><h2>Payments</h2><p>${i.length} payment${i.length===1?"":"s"} applied.</p></div></div>
        <div class="finance-compact-list">
          ${i.map(r=>Oe(r.reference||r.method,r.method,h(r.amount),r.received_at)).join("")||_("No payments yet.")}
        </div>
      </section>
      ${a.notes?`<p class="finance-note">${o(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function Mo(e,t){const a=hs(t);if(!a||a.company_id!==e)return j("Finance","Expense",_("Expense not found."));const i=F(a.job_id);return j("Finance",`${fa(a.vendor_id)} expense`,`
    <div class="finance-detail-modal">
      ${Q([["Vendor",fa(a.vendor_id)],["Category",a.category],["Status",a.status],["Job",i?.name||"Company level"],["Spent",x(a.spent_at)],["Amount",h(a.amount)]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-expense" data-expense-id="${o(a.id)}"><i class="ti ti-pencil"></i>Edit expense</button>
        ${i?`<a class="btn" href="${b(d("files",{job_id:i.id},e))}" data-router><i class="ti ti-folder"></i>Job files</a>`:""}
      </div>
      ${a.notes?`<p class="finance-note">${o(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function Fo(e,t){const a=Ba(t);if(!a||a.company_id!==e)return j("Finance","Vendor",_("Vendor not found."));const i=Qa(e).filter(n=>n.vendor_id===a.id);return j("Finance",a.name,`
    <div class="finance-detail-modal">
      ${Q([["Contact",a.contact_name||"No contact"],["Email",a.email||"No email"],["Phone",a.phone||"No phone"],["Category",a.category],["Status",a.status],["Spend",h(ie(i,"amount"))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-vendor" data-vendor-id="${o(a.id)}"><i class="ti ti-pencil"></i>Edit vendor</button>
        <button class="btn" type="button" data-action="new-finance-expense" data-vendor-id="${o(a.id)}"><i class="ti ti-receipt"></i>Add expense</button>
      </div>
      ${a.notes?`<p class="finance-note">${o(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function Ao(e){const t=Ss(e);return j("Finance","Summary report",`
    <div class="finance-report-modal">
      ${Q([["Company",M(e)],["Estimated pipeline",h(t.pipeline)],["Invoiced",h(t.invoiced)],["Collected",h(t.collected)],["Outstanding",h(t.outstanding)],["Expenses",h(t.expenses)],["Net position",h(t.net)]])}
      <div class="finance-aging-grid">
        <div><span>Current</span><strong>${h(t.aging.current)}</strong></div>
        <div><span>1-30</span><strong>${h(t.aging.thirty)}</strong></div>
        <div><span>31-60</span><strong>${h(t.aging.sixty)}</strong></div>
        <div><span>61+</span><strong>${h(t.aging.overSixty)}</strong></div>
      </div>
    </div>
  `,"finance-modal")}function gi(e,t=null){const a=t||wl(e);return j("Finance",t?"Edit invoice":"New invoice",`
    <form class="finance-form" data-finance-invoice-form>
      <input type="hidden" name="id" value="${o(a.id)}" />
      ${D("Invoice number","invoice_number",a.invoice_number,!0)}
      ${T("Linked job","job_id",a.job_id||"",[["","Company level"]].concat(P(e).map(i=>[i.id,i.name])))}
      ${D("Client","client_name",a.client_name,!0)}
      ${T("Status","status",a.status,Ri.map(i=>[i,i]))}
      ${D("Issue date","issue_date",a.issue_date,!1,"date")}
      ${D("Due date","due_date",a.due_date,!1,"date")}
      ${D("Subtotal","subtotal",a.subtotal,!1,"number")}
      ${D("Tax","tax",a.tax,!1,"number")}
      ${me("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save invoice</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Oo(e,t=""){const a=Sl(e,t),i=ke(e).map(n=>[n.id,`${n.invoice_number} - ${n.client_name||F(n.job_id)?.client_name||"No client"}`]);return j("Finance","Record payment",`
    <form class="finance-form" data-finance-payment-form>
      ${T("Invoice","invoice_id",a.invoice_id,i.length?i:[["","Create an invoice first"]])}
      ${D("Amount","amount",a.amount,!0,"number")}
      ${T("Method","method",a.method,Ui.map(n=>[n,n]))}
      ${D("Received","received_at",a.received_at,!1,"date")}
      ${D("Reference","reference",a.reference)}
      ${me("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save payment</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function bi(e,t=null,a=""){const i=t||kl(e,a),n=Va(e).map(r=>[r.id,r.name]);return j("Finance",t?"Edit expense":"Add expense",`
    <form class="finance-form" data-finance-expense-form>
      <input type="hidden" name="id" value="${o(i.id)}" />
      ${T("Vendor","vendor_id",i.vendor_id,n.length?n:[["","No vendor yet"]])}
      ${T("Linked job","job_id",i.job_id||"",[["","Company level"]].concat(P(e).map(r=>[r.id,r.name])))}
      ${T("Category","category",i.category,Ut.map(r=>[r,r]))}
      ${T("Status","status",i.status,Pi.map(r=>[r,r]))}
      ${D("Amount","amount",i.amount,!0,"number")}
      ${D("Spent date","spent_at",i.spent_at,!1,"date")}
      ${me("Notes","notes",i.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save expense</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function _i(e,t=null){const a=t||Dl(e);return j("Finance",t?"Edit vendor":"Add vendor",`
    <form class="finance-form" data-finance-vendor-form>
      <input type="hidden" name="id" value="${o(a.id)}" />
      ${D("Vendor name","name",a.name,!0)}
      ${D("Contact","contact_name",a.contact_name)}
      ${D("Email","email",a.email,!1,"email")}
      ${D("Phone","phone",a.phone)}
      ${T("Category","category",a.category,Ut.map(i=>[i,i]))}
      ${T("Status","status",a.status,Ni.map(i=>[i,i]))}
      ${me("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save vendor</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function xo(e,t){return e.section==="clock"?To(t):e.section==="approvals"?Ro(t):Eo(t)}function Ta(e,t){return`
    ${Ea("Operations sections",[[d("time",{},e),"My time",t==="time"],[d("approvals",{},e),"Approvals",t==="approvals"],[d("clock",{},e),"Clock dashboard",t==="clock"]])}
  `}function Eo(e){const t=gs(e),a=Wt(e);return`
    <section class="tool-page operations-page">
      ${z("My time","A compact personal work queue built from this company's tasks.",`
        <a class="btn" href="${b(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Open tasks</a>
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${Ta(e,"time")}
      <section class="metric-grid operations-metrics">
        ${C("Due today",t.dueToday.length)}
        ${C("Overdue",t.overdue.length)}
        ${C("Open work",t.open.length)}
        ${C("In review",t.review.length)}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel span-2">
          <div class="section-head"><div><h2>Today</h2><p>Due now, overdue, and highest priority work.</p></div></div>
          <div class="queue-list">
            ${t.focus.slice(0,8).map(i=>sa(i)).join("")||_("No time-sensitive tasks for this company.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Workload</h2><p>Simple task-based time view.</p></div></div>
          ${Q([["Company",M(e)],["Assigned to you",String(t.assignedToMe.length)],["Due this week",String(t.thisWeek.length)],["Completed",String(t.done.length)]])}
        </article>
      <article class="panel span-2">
          <div class="section-head"><div><h2>This week</h2><p>Upcoming task commitments.</p></div></div>
          <div class="data-table operations-table">
            <div class="table-head"><span>Task</span><span>Job</span><span>Owner</span><span>Due</span><span>Status</span></div>
            ${t.thisWeek.slice(0,8).map(i=>`
              <a class="table-row" href="${b(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},e))}" data-router>
                <span><strong>${o(i.title)}</strong><small>${o(i.description||dt(i.type))}</small></span>
                <span>${o(F(i.project_id)?.name||"Company task")}</span>
                <span>${o(K(i.assignee_id))}</span>
                <span>${x(i.due)}</span>
                <span>${Ms(i.status)}</span>
              </a>
            `).join("")||_("No upcoming tasks this week.")}
          </div>
        </article>
      </section>
    </section>
  `}function To(e){const t=_s(e),a=Wt(e),i=la().getTime(),n=i-6*864e5,r=Si(e,i)+(a?Date.now()-Date.parse(a.started_at):0),l=Si(e,n)+(a?Date.now()-Date.parse(a.started_at):0);return`
    <section class="tool-page operations-page clock-page">
      ${z("Clock dashboard","Local basic-mode clock tracking for the active company.",`
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${Ta(e,"clock")}
      <section class="metric-grid operations-metrics">
        ${C("Today",gt(r))}
        ${C("Last 7 days",gt(l))}
        ${C("Entries",t.length)}
        ${C("Status",a?"Clocked in":"Off clock")}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Active now</h2><p>Current local clock session.</p></div></div>
          ${a?Q([["User",K(a.user_id)],["Started",Mi(a.started_at)],["Task",a.task_title||"General shift"],["Elapsed",gt(Date.now()-Date.parse(a.started_at))]]):_("Nobody is clocked in on this device.")}
        </article>
        <article class="panel span-2">
          <div class="section-head"><div><h2>Recent entries</h2><p>Local time records for this company.</p></div></div>
          <div class="data-table clock-table">
            <div class="table-head"><span>Entry</span><span>User</span><span>Start</span><span>Duration</span></div>
            ${t.slice(0,10).map(c=>`
              <div class="table-row">
                <span><strong>${o(c.task_title||"General shift")}</strong><small>${o(c.notes||"Clock entry")}</small></span>
                <span>${o(K(c.user_id))}</span>
                <span>${Mi(c.started_at)}</span>
                <span>${gt(c.duration_ms)}</span>
              </div>
            `).join("")||_("No clock entries yet.")}
          </div>
        </article>
      </section>
    </section>
  `}function Ro(e){const t=bs(e),a=t.filter(r=>r.type==="Form approval"),i=t.filter(r=>r.type==="Task review"),n=t.filter(r=>r.type==="Access request");return`
    <section class="tool-page operations-page">
      ${z("Approvals","Company review queue for forms, task handoffs, and access requests.",`
        <a class="btn" href="${b(d("forms",{},e))}" data-router><i class="ti ti-clipboard-list"></i>Forms</a>
        <a class="btn btn-primary" href="${b(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>
      `)}
      ${Ta(e,"approvals")}
      <section class="metric-grid operations-metrics">
        ${C("Open approvals",t.length)}
        ${C("Forms",a.length)}
        ${C("Task reviews",i.length)}
        ${C("Access",n.length)}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Approval queue</h2><p>One calm list instead of a heavy dashboard.</p></div></div>
        <div class="data-table approval-table">
          <div class="table-head"><span>Item</span><span>Type</span><span>Owner</span><span>Status</span><span>Updated</span></div>
          ${t.map(r=>`
            <a class="table-row" href="${b(r.href)}" data-router>
              <span><strong>${o(r.title)}</strong><small>${o(r.meta)}</small></span>
              <span>${o(r.type)}</span>
              <span>${o(r.owner)}</span>
              <span>${o(r.status)}</span>
              <span>${x(r.updatedAt)}</span>
            </a>
          `).join("")||_("No approvals need attention right now.")}
        </div>
      </section>
    </section>
  `}function yi(e){return`
    ${z(q(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${_("Module data model pending.")}
    </section>
  `}function Po(){document.title="Sign in | Quest HQ";const e=Vt(s.route.params.get("return_url")||b(d("jobs",{},E()))),t=String(s.route.params.get("invite")||"").trim();Lt.innerHTML=`
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
            <button class="${s.authMode==="signin"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="signin">Sign in</button>
            <button class="${s.authMode==="register"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="register">${t?"Create account":"Create workspace"}</button>
            <button class="${s.authMode==="invite"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="invite">Invite code</button>
            <button class="${s.authMode==="request"?"active":""}" type="button" data-action="set-auth-mode" data-auth-mode="request">Request access</button>
          </div>
          ${Uo(e)}
        `}
        ${No(e)}
        
      </section>
    </main>
  `}function No(e){return`
    <section class="demo-mode-box">
      <div>
        <strong>Demo mode</strong>
        <span>Local-only sample workspace. No Supabase database reads or writes.</span>
      </div>
      <button class="btn full" type="button" data-action="start-demo-mode" data-return-url="${o(e)}">Open demo mode</button>
    </section>
  `}function Uo(e){const t=String(s.route?.params?.get("invite")||"").trim();return s.authMode==="register"?`
      <form data-auth-register-form>
        <label>${t?"Name / username":"Full name"}<input name="full_name" autocomplete="name" required /></label>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="new-password" minlength="8" required /></label>
        ${t?"":'<label>Company workspace<input name="company_name" placeholder="Example Roofing LLC" required /></label>'}
        <input type="hidden" name="invite_token" value="${o(t)}" />
        <input type="hidden" name="return_url" value="${o(e)}" />
        <button class="btn btn-primary full" type="submit">${t?"Create account and join":"Create secure workspace"}</button>
        ${mt(t?"The invite email must match this account email.":"Owner role, trial subscription, and workspace isolation are created automatically.")}
      </form>
    `:s.authMode==="invite"?`
      <form data-auth-invite-code-form>
        <label>Invite code<input name="invite_code" autocomplete="one-time-code" required placeholder="Paste the code from your admin" /></label>
        <input type="hidden" name="return_url" value="${o(e)}" />
        <button class="btn btn-primary full" type="submit">Continue with invite code</button>
        ${mt("Invite codes are shared by your Owner/Admin. No email delivery required.")}
      </form>
    `:s.authMode==="request"?`
      <form data-auth-request-form>
        <label>Email<input name="email" type="email" autocomplete="email" required /></label>
        <label>Password<input name="password" type="password" autocomplete="current-password" minlength="8" required /></label>
        <label>Company ID<input name="company_id" placeholder="company-workspace-id" required /></label>
        <label>Message<input name="message" placeholder="Tell the admin why you need access" /></label>
        <input type="hidden" name="return_url" value="${o(e)}" />
        <button class="btn btn-primary full" type="submit">Request company access</button>
        ${mt("Requests stay pending until a company Owner/Admin approves them.")}
      </form>
    `:`
    <form data-auth-sign-in-form>
      <label>Email<input name="email" type="email" autocomplete="email" required /></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required /></label>
      <input type="hidden" name="invite_token" value="${o(t)}" />
      <input type="hidden" name="return_url" value="${o(e)}" />
      <button class="btn btn-primary full" type="submit">Sign in</button>
      ${mt("Use the company workspace account your Owner/Admin invited.")}
    </form>
  `}function mt(e){return s.loginError?`<div class="form-message error">${o(s.loginError)}</div>`:`<div class="form-message">${o(s.authMessage||e)}</div>`}function Lo(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${pe(e,"avatar large")}
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
  `}function Qo(e,t){if(s.modal==="profile")return Lo(t.profile);if(s.modal==="file-upload")return Qn();if(s.modal==="folder-new")return Ln();if(s.modal==="file-detail")return zo(p());if(s.modal==="forms-tools")return Ho(p());if(s.modal==="form-actions")return Go(p(),Ge(p()));if(s.modal==="form-new")return Wo(p());if(s.modal==="form-preview")return Ko(p(),Ge(p()));if(s.modal==="job-new")return ma(p(),null);if(s.modal==="job-edit")return ma(p(),$e());if(s.modal==="finance-invoice-new")return gi(p(),null);if(s.modal==="finance-invoice-edit")return gi(p(),De(s.selectedFinanceInvoiceId));if(s.modal==="finance-payment-new")return Oo(p(),s.selectedFinanceInvoiceId);if(s.modal==="finance-expense-new")return bi(p(),null,s.selectedFinanceVendorId);if(s.modal==="finance-expense-edit")return bi(p(),hs(s.selectedFinanceExpenseId));if(s.modal==="finance-vendor-new")return _i(p(),null);if(s.modal==="finance-vendor-edit")return _i(p(),Ba(s.selectedFinanceVendorId));if(s.modal==="role-new")return Gn(p());if(s.modal==="invite-new")return Zn(p());if(s.modal==="message-group-new")return wo(p());if(s.modal==="message-direct-new")return So(p());if(s.modal==="message-access")return ko(p(),s.selectedConversationId);if(s.modal==="message-details")return Do(p(),s.selectedConversationId);if(s.modal==="message-search")return Co(p());if(e.name==="company"&&e.section==="crm"&&e.params.get("account"))return uo(e.companyId,e.params.get("account"));if(e.name==="company"&&e.section==="finance"){const a=qo(e,e.companyId);if(a)return a}return e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"?ma(e.companyId,e.jobId?F(e.jobId):$e()):e.name==="company"&&e.section==="tasks"?Jo(e,e.companyId):""}function Vo(){return s.toast?`
    <div class="app-toast ${o(s.toast.mode||"local")}" role="status" aria-live="polite">
      <strong>${o(s.toast.title||"Quest HQ")}</strong>
      <span>${o(s.toast.message||"")}</span>
    </div>
  `:""}function N(e,t="local",a="Not available yet"){s.toastTimer&&clearTimeout(s.toastTimer),s.toast={title:a,message:e,mode:t},m(),s.toastTimer=setTimeout(()=>{s.toast=null,s.toastTimer=null,m()},4200)}function j(e,t,a,i=""){return`
    <div class="modal-overlay">
      <div class="modal-panel ${o(i)}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${o(e)}</div><h2>${o(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function Bo(e,t,a){return`
    <div class="modal-overlay drawer-overlay">
      <aside class="modal-panel drawer-panel" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${o(e)}</div><h2>${o(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </aside>
    </div>
  `}function ma(e,t){return j("Jobs",t?"Edit job":"Create job",kn(e,t),"wide-modal")}function Jo(e,t){const a=e.jobId?F(e.jobId):null,i=e.params.get("task_id")||"",n=i?Bt(i):null;return e.params.get("new")==="1"?j("Tasks","New task",fi(t,a,null),"task-modal"):e.params.get("edit")==="1"&&n?j("Tasks","Edit task",fi(t,a,n),"task-modal"):n?Bo("Task detail",n.title,In(t,n)):""}function zo(e){const t=s.selectedFileId?s.files.find(a=>a.id===s.selectedFileId):null;return t?j("Open file",t.file_name,Nn(t),"file-viewer-modal"):""}function Ho(e){return j("Forms","Tools",`
    <div class="compact-tool-form">
      <label>
        <span>Type filter</span>
        <select data-form-type-filter>
          <option value="all" ${s.formTypeFilter==="all"?"selected":""}>All types</option>
          ${at.map(t=>`<option value="${o(t)}" ${s.formTypeFilter===t?"selected":""}>${o(t)}</option>`).join("")}
        </select>
      </label>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
      <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
    </div>
  `)}function Wo(e){const t=s.formStartTab==="templates"?"templates":"blank",a=He(),i=t==="templates"&&(a.find(u=>u.id===s.formStartTemplateId)||a[0])||null,n=i?.title||"",r=i?.description||"",l=i?.type||"Internal",c=i?.questions||[{type:"short",label:"First question",required:!1,options:[]}];return j("Forms","New form builder",`
    <form class="new-form-modal builder-create-modal" data-new-form-form>
      <input type="hidden" name="template_id" value="${o(i?.id||"")}" />
      <div class="form-start-tabs" role="tablist" aria-label="New form start type">
        <button class="${t==="blank"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="blank"><i class="ti ti-clipboard-plus"></i>Blank</button>
        <button class="${t==="templates"?"active":""}" type="button" data-action="set-form-start-tab" data-tab="templates"><i class="ti ti-template"></i>Templates</button>
      </div>
      ${t==="templates"?`
        <div class="new-form-template-grid">
          ${a.map(u=>`
            <button class="${i?.id===u.id?"active":""}" type="button" data-action="select-form-start-template" data-template-id="${o(u.id)}">
              <span><i class="ti ti-template"></i></span>
              <strong>${o(u.title)}</strong>
              <small>${o(u.type)} / ${u.questions.length} questions</small>
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
            <div class="gform-accent-strip" style="--form-accent:${o(be(e))}"></div>
            <label><span>Form title</span><input name="title" value="${o(n)}" placeholder="Untitled form" required /></label>
            <label><span>Form description</span><textarea name="description" rows="3" placeholder="What should people know before filling this out?">${o(r)}</textarea></label>
          </article>
          <div class="new-form-question-list">
            ${c.map((u,f)=>Yo(u,f)).join("")}
          </div>
        </section>
        <aside class="panel new-form-settings-card">
          <div class="section-head"><div><h2>Setup</h2><p>${i?o(i.title):"Blank starter"}</p></div></div>
          <div class="new-form-grid">
            <label><span>Type</span><select name="type">${at.map(u=>`<option value="${o(u)}" ${u===l?"selected":""}>${o(u)}</option>`).join("")}</select></label>
            <label><span>Audience</span><input name="audience" value="Internal" /></label>
            <label><span>Linked job</span><select name="linked_job_id"><option value="">Company level</option>${P(e).map(u=>`<option value="${o(u.id)}" ${s.route?.jobId===u.id?"selected":""}>${o(u.name)}</option>`).join("")}</select></label>
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
  `,"form-create-modal builder-modal")}function Yo(e,t){const a=Ze(e)?`
    <div class="starter-options">
      ${(e.options||["Option 1","Option 2"]).map(i=>`<span>${o(i)}</span>`).join("")}
    </div>
  `:"";return`
    <article class="question-card starter-question-card">
      <div class="question-card-head">
        <span>${t+1}</span>
        <strong>${o(tc(e.type))}</strong>
      </div>
      <label><span>Question</span><input value="${o(e.label||"Untitled question")}" readonly /></label>
      ${e.help?`<small>${o(e.help)}</small>`:""}
      ${a}
      <label class="check-row"><input type="checkbox" ${e.required?"checked":""} disabled /> Required</label>
    </article>
  `}function Ko(e,t){return t?j("Forms","Preview form",`
    <div class="form-preview-modal-body">
      ${lo(e,t)}
    </div>
  `,"form-preview-modal"):j("Forms","Preview form",_("Choose a form first."))}function Go(e,t){return t?j("Forms","Manage form",`
    <div class="forms-summary-share compact">
      <strong>Shareable preview URL</strong>
      <input readonly value="${o(`${window.location.origin}${b(d("forms",{form_id:t.id},e))}`)}" />
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
  `):j("Forms","Manage form",_("Choose a form first."))}function Zo(e){const t=s.accountMenuOpen&&!e.target.closest(".account-menu"),a=s.notificationMenuOpen&&!e.target.closest(".notification-center");t&&(s.accountMenuOpen=!1),a&&(s.notificationMenuOpen=!1);const i=e.target.closest("[data-action]");if(i){Xo(e,i);return}const n=e.target.closest("[data-select-job]");if(n){e.preventDefault(),Yr(n.dataset.selectJob);return}const r=e.target.closest("[data-select-task]");if(r){e.preventDefault(),Kr(r.dataset.selectTask);return}const l=e.target.closest("a[href][data-router]");if(!l){(t||a)&&m();return}l.target||l.hasAttribute("download")||(e.preventDefault(),k(l.getAttribute("href")))}function Xo(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),s.dataLoaded=!1,s.sync={label:"Refreshing...",mode:"loading"},m();return}if(a==="sign-out"){e.preventDefault(),s.accountMenuOpen=!1,ar();return}if(a==="toggle-account-menu"){e.preventDefault(),s.accountMenuOpen=!s.accountMenuOpen,s.notificationMenuOpen=!1,m();return}if(a==="toggle-notifications"){e.preventDefault(),s.notificationMenuOpen=!s.notificationMenuOpen,s.accountMenuOpen=!1,m();return}if(a==="mark-all-notifications-read"){e.preventDefault(),Jl(p()),m();return}if(a==="open-notification"){e.preventDefault(),zl(t.dataset.notificationId),m();return}if(a==="verify-email"){e.preventDefault(),s.accountMenuOpen=!1,N("Email verification is not implemented yet. Account access is not blocked right now.","local");return}if(a==="start-demo-mode"){e.preventDefault(),rs(t.dataset.returnUrl||"");return}if(a==="set-auth-mode"){e.preventDefault(),s.authMode=["signin","register","invite","request"].includes(t.dataset.authMode)?t.dataset.authMode:"signin",s.loginError="",s.authMessage="",m();return}if(a==="open-profile"){e.preventDefault(),s.accountMenuOpen=!1,s.modal="profile",m();return}if(a==="open-role-form"){e.preventDefault(),s.modal="role-new",m();return}if(a==="view-as-role"){e.preventDefault();const i=p(),n=Qe(i,t.dataset.roleId);if(!n){N("That role is no longer available.","local","Role preview");return}s.rolePreview={company_id:i,role_id:n.id},N(`Viewing the workspace as ${n.name}.`,"local","Role preview");return}if(a==="exit-role-preview"){e.preventDefault(),s.rolePreview=null,N("Role preview ended.","live","Role preview");return}if(a==="open-invite-form"){e.preventDefault(),s.modal="invite-new",m();return}if(a==="new-message-group"){e.preventDefault(),s.modal="message-group-new",m();return}if(a==="new-direct-message"){e.preventDefault(),s.modal="message-direct-new",m();return}if(a==="manage-message-chat"){e.preventDefault(),s.selectedConversationId=t.dataset.conversationId||s.selectedConversationId,s.modal="message-access",m();return}if(a==="message-details"){e.preventDefault(),s.selectedConversationId=t.dataset.conversationId||s.selectedConversationId,s.modal="message-details",m();return}if(a==="message-search-results"){e.preventDefault(),s.modal="message-search",m();return}if(a==="set-message-filter"){e.preventDefault(),s.messageFilter=["all","unread",...Ia].includes(t.dataset.filter)?t.dataset.filter:"all",m();return}if(a==="delete-message"){e.preventDefault(),hr(t.dataset.messageId);return}if(a==="open-message-attachment"){e.preventDefault(),$r(t.dataset.attachmentId);return}if(a==="run-message-scenario"){e.preventDefault(),Ql(p());return}if(a==="reset-message-demo"){e.preventDefault(),Bl();return}if(a==="copy-invite-link"){e.preventDefault(),mr(t.dataset.inviteId);return}if(a==="copy-invite-code"){e.preventDefault(),pr(t.dataset.inviteId);return}if(a==="revoke-invite"){e.preventDefault(),ur(t.dataset.inviteId);return}if(a==="approve-join-request"){e.preventDefault(),vi(t.dataset.requestId,"approved");return}if(a==="reject-join-request"){e.preventDefault(),vi(t.dataset.requestId,"rejected");return}if(a==="start-checkout"){e.preventDefault(),lr();return}if(a==="open-file-upload"){e.preventDefault(),s.modal="file-upload",m();return}if(a==="open-folder-form"){e.preventDefault(),s.modal="folder-new",m();return}if(a==="open-job-form"){e.preventDefault();const i=t.dataset.jobId||"";i&&(s.selectedJobId=i),s.modal=t.dataset.mode==="edit"?"job-edit":"job-new",m();return}if(a==="open-forms-tools"){e.preventDefault(),s.modal="forms-tools",m();return}if(a==="open-form-actions"){e.preventDefault(),ft(t.dataset.formId,!1),s.modal="form-actions",m();return}if(a==="open-form-preview"){e.preventDefault(),ft(t.dataset.formId,!1),s.modal="form-preview",m();return}if(a==="set-form-start-tab"){e.preventDefault(),s.formStartTab=t.dataset.tab==="templates"?"templates":"blank",s.formStartTab==="blank"&&(s.formStartTemplateId=""),s.formStartTab==="templates"&&!s.formStartTemplateId&&(s.formStartTemplateId=He()[0]?.id||""),m();return}if(a==="select-form-start-template"){e.preventDefault(),s.formStartTab="templates",s.formStartTemplateId=t.dataset.templateId||He()[0]?.id||"",m();return}if(a==="close-modal"){e.preventDefault(),er();return}if(a==="set-task-view"){e.preventDefault(),s.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(Oi,s.taskView),m();return}if(a==="set-drive-view"){e.preventDefault(),s.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(xi,s.driveView),m();return}if(a==="clock-in"){e.preventDefault(),ml(p(),t.dataset.taskId||s.route?.params?.get("task_id")||"");return}if(a==="clock-out"){e.preventDefault(),ys();return}if(a==="select-file"){e.preventDefault(),s.selectedFileId=t.dataset.fileId||"",s.modal="file-detail",m();return}if(a==="download-file"){e.preventDefault(),xr(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),Er(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),s.formsTab=t.dataset.tab==="responses"?"responses":"library",m();return}if(a==="set-form-editor-tab"){e.preventDefault(),s.formEditorTab=t.dataset.tab||"questions",m();return}if(a==="new-form"){e.preventDefault(),s.formStartTemplateId=t.dataset.templateId||"",s.formStartTab=t.dataset.startTab==="templates"||s.formStartTemplateId?"templates":"blank",s.formStartTab==="templates"&&!s.formStartTemplateId&&(s.formStartTemplateId=He()[0]?.id||""),s.modal="form-new",m();return}if(a==="select-form"){e.preventDefault(),ft(t.dataset.formId);return}if(a==="toggle-form-card"){e.preventDefault();const i=t.dataset.formId||"";s.expandedFormIds.has(i)?s.expandedFormIds.delete(i):s.expandedFormIds.add(i),m();return}if(a==="edit-form"){e.preventDefault(),ft(t.dataset.formId,!1),s.formsTab="builder",s.formEditorTab="questions",s.modal="",m();return}if(a==="save-form"){e.preventDefault(),G("Form saved locally"),m();return}if(a==="publish-form"){e.preventDefault(),Ii(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),Ii(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),nc(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),oc(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),rc(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),lc(p());return}if(a==="new-finance-invoice"){e.preventDefault(),s.selectedFinanceInvoiceId="",s.modal="finance-invoice-new",m();return}if(a==="edit-finance-invoice"){e.preventDefault(),s.selectedFinanceInvoiceId=t.dataset.invoiceId||"",s.modal="finance-invoice-edit",m();return}if(a==="new-finance-payment"){e.preventDefault(),s.selectedFinanceInvoiceId=t.dataset.invoiceId||s.route?.params?.get("invoice")||"",s.modal="finance-payment-new",m();return}if(a==="new-finance-expense"){e.preventDefault(),s.selectedFinanceExpenseId="",s.selectedFinanceVendorId=t.dataset.vendorId||"",s.modal="finance-expense-new",m();return}if(a==="edit-finance-expense"){e.preventDefault(),s.selectedFinanceExpenseId=t.dataset.expenseId||"",s.modal="finance-expense-edit",m();return}if(a==="new-finance-vendor"){e.preventDefault(),s.selectedFinanceVendorId="",s.modal="finance-vendor-new",m();return}if(a==="edit-finance-vendor"){e.preventDefault(),s.selectedFinanceVendorId=t.dataset.vendorId||"",s.modal="finance-vendor-edit",m();return}if(a==="add-question"){e.preventDefault(),cc(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),dc(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),mc(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),pc(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),uc(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),fc(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),Dr(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),jr(t.dataset.taskId))}function er(){const e=s.route||Qt();if(s.modal="",s.formStartTemplateId="",s.formStartTab="blank",s.selectedFinanceInvoiceId="",s.selectedFinanceExpenseId="",s.selectedFinanceVendorId="",e.name==="company"&&e.section==="tasks"&&(e.params.get("new")||e.params.get("edit")||e.params.get("task_id"))){k(d("tasks",e.jobId?{job_id:e.jobId}:{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"){const t=e.jobId?F(e.jobId):$e();k(d("jobs",{tab:t?"profile":"pipeline",...t?{job_id:t.id}:{}},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="crm"&&e.params.get("account")){k(d("crm",{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="finance"&&(e.params.get("invoice")||e.params.get("expense")||e.params.get("vendor")||e.params.get("report"))){k(d("finance",{},e.companyId),{replace:!0});return}m()}function tr(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===xe.localUsername&&String(t.password||"")===xe.localPassword)){s.loginError="Invalid temporary credentials.",m();return}s.loginError="",rs(t.return_url||b(d("jobs",{},E())));return}if(e.target.matches("[data-auth-sign-in-form]")){e.preventDefault(),ir(e.target);return}if(e.target.matches("[data-auth-register-form]")){e.preventDefault(),nr(e.target);return}if(e.target.matches("[data-auth-invite-code-form]")){e.preventDefault(),sr(e.target);return}if(e.target.matches("[data-auth-request-form]")){e.preventDefault(),rr(e.target);return}if(e.target.matches("[data-company-create-form]")){e.preventDefault(),or(e.target);return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...y().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};w(Ai,a),s.profileDraft=a,s.session={...y(),profile:a},w(Ee,s.session),s.modal="",m();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),kr(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),Cr(e.target);return}if(e.target.matches("[data-new-form-form]")){e.preventDefault(),sc(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),qr(e.target);return}if(e.target.matches("[data-folder-form]")){e.preventDefault(),Ir(e.target);return}if(e.target.matches("[data-finance-invoice-form]")){e.preventDefault(),Mr(e.target);return}if(e.target.matches("[data-finance-payment-form]")){e.preventDefault(),Fr(e.target);return}if(e.target.matches("[data-finance-expense-form]")){e.preventDefault(),Ar(e.target);return}if(e.target.matches("[data-finance-vendor-form]")){e.preventDefault(),Or(e.target);return}if(e.target.matches("[data-role-form]")){e.preventDefault(),cr(e.target);return}if(e.target.matches("[data-invite-form]")){e.preventDefault(),dr(e.target);return}if(e.target.matches("[data-message-group-form]")){e.preventDefault(),gr(e.target);return}if(e.target.matches("[data-direct-message-form]")){e.preventDefault(),br(e.target);return}if(e.target.matches("[data-message-access-form]")){e.preventDefault(),_r(e.target);return}if(e.target.matches("[data-message-form]")){e.preventDefault(),yr(e.target);return}if(e.target.matches("[data-user-role-form]")){e.preventDefault(),fr(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),gc(e.target))}async function ar(){if(s.session?.auth==="supabase"){const e=A();e?.auth&&await e.auth.signOut()}localStorage.removeItem(Ee),s.session=null,s.dataLoaded=!1,k("/login",{replace:!0})}function rs(e=""){s.loginError="",s.authMessage="",s.session=ba(),Xi(),s.activeCompanyId=p(),localStorage.setItem(ue,s.activeCompanyId),w(Ee,s.session),s.dataLoaded=!1,s.dataLoading=!1,k(Vt(e||b(d("jobs",{},p()))),{replace:!0})}async function ir(e){const t=Object.fromEntries(new FormData(e).entries()),a=A();if(!a?.auth){s.loginError="Supabase auth is unavailable.",m();return}s.loginError="",s.authMessage="Signing in...",m();const i=await a.auth.signInWithPassword({email:String(t.email||"").trim(),password:String(t.password||"")});if(i.error){s.loginError=i.error.message||"Unable to sign in.",s.authMessage="",m();return}if(await We(i.data.session),t.invite_token){await ls(t.invite_token,t.return_url);return}s.authMessage="",s.dataLoaded=!1,k(Vt(t.return_url||b(d("jobs",{},E()))),{replace:!0})}function sr(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.invite_code||"").trim();if(!a){s.loginError="Invite code is required.",m();return}s.loginError="",s.authMessage="",s.authMode="register";const i=new URLSearchParams({invite:a}),n=Vt(t.return_url||"");n&&i.set("return_url",n),k(`/login?${i.toString()}`,{replace:!0})}async function nr(e){const t=Object.fromEntries(new FormData(e).entries()),a=A();if(!a?.auth){s.loginError="Supabase auth is unavailable.",m();return}const i=String(t.email||"").trim(),n=String(t.password||""),r=String(t.full_name||"").trim(),l=String(t.invite_token||"").trim(),c=String(t.company_name||"").trim();if(!i||!n||!r||!l&&!c){s.loginError=l?"Name, email, and password are required.":"Name, email, password, and company workspace are required.",m();return}s.loginError="",s.authMessage=l?"Creating account and accepting invite...":"Creating secure workspace...",m();const u=await a.auth.signUp({email:i,password:n,options:{data:{full_name:r}}});if(u.error){s.loginError=u.error.message||"Unable to create account.",s.authMessage="",m();return}let f=u.data.session;if(!f){const $=await a.auth.signInWithPassword({email:i,password:n});if($.error){s.loginError="Account created. Please sign in to finish workspace setup.",s.authMode="signin",s.authMessage="",m();return}f=$.data.session}if(await We(f),l){await ls(l,t.return_url);return}const g=await a.rpc("create_company_workspace",{company_name:c});if(g.error){s.loginError=g.error.message||"Account created, but workspace setup failed.",s.authMessage="",m();return}s.activeCompanyId=v(g.data||E()),localStorage.setItem(ue,s.activeCompanyId),s.dataLoaded=!1,s.authMessage="",k(d("settings",{tab:"billing"},s.activeCompanyId),{replace:!0})}async function or(e){const t=Object.fromEntries(new FormData(e).entries()),a=A(),i=String(t.company_name||"").trim();if(!a||!i){s.loginError="Company workspace name is required.",m();return}const n=await a.rpc("create_company_workspace",{company_name:i});if(n.error){s.loginError=n.error.message||"Workspace setup failed.",m();return}s.activeCompanyId=v(n.data||E()),localStorage.setItem(ue,s.activeCompanyId),s.dataLoaded=!1,k(d("settings",{tab:"billing"},s.activeCompanyId),{replace:!0})}async function rr(e){const t=Object.fromEntries(new FormData(e).entries()),a=A();if(!a?.auth){s.loginError="Supabase auth is unavailable.",m();return}const i=String(t.email||"").trim(),n=String(t.password||""),r=v(t.company_id||"");s.loginError="",s.authMessage="Submitting access request...",m();const l=await a.auth.signInWithPassword({email:i,password:n});if(l.error){s.loginError=l.error.message||"Sign in first to request access.",s.authMessage="",m();return}await We(l.data.session);const c=await a.rpc("request_company_access",{target_company_id:r,request_message:String(t.message||"").trim()||null});if(c.error){s.loginError=c.error.message||"Unable to request access.",s.authMessage="",m();return}s.authMessage="Access request sent. An Owner/Admin must approve it.",s.loginError="",s.authMode="signin",m()}async function lr(){const e=p();s.sync={label:"Opening billing...",mode:"loading"},m();try{const t=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json",...y().access_token?{Authorization:`Bearer ${y().access_token}`}:{}},body:JSON.stringify({company_id:e,return_url:`${window.location.origin}${b(d("settings",{tab:"billing"},e))}`})}),a=await t.json().catch(()=>({}));if(!t.ok||!a.url)throw new Error(a.error||"Billing is not configured yet.");window.location.href=a.url}catch(t){s.sync={label:t.message||"Billing unavailable",mode:"local"},m()}}async function cr(e){const t=p(),a=new FormData(e),i=Ae({id:crypto.randomUUID(),company_id:t,name:a.get("name"),color:a.get("color")||"#f0b23b",priority:a.get("priority")||100,is_system:!1,created_by:y().profile.id}),n=a.getAll("permissions").map(l=>String(l||"")).filter(Boolean),r=A();if(s.session?.auth==="supabase"&&r){const l=await r.from("roles").insert(i).select().single();if(l.error){s.sync={label:l.error.message||"Role save failed",mode:"local"},m();return}const c=Ae(l.data),u=n.map(f=>({role_id:c.id,permission_key:f,effect:"allow"}));u.length&&await r.from("role_permissions").insert(u),s.roles.unshift(c),s.rolePermissions=u.concat(s.rolePermissions).map(ga),s.sync={label:"Role saved",mode:"live"}}else s.roles.unshift(i),s.rolePermissions=n.map(l=>ga({role_id:i.id,permission_key:l,effect:"allow"})).concat(s.rolePermissions),s.sync={label:"Role saved locally",mode:"local"};s.modal="",m()}async function dr(e){const t=new FormData(e),a=v(t.get("company_id")||p()),i=String(t.get("email")||"").trim().toLowerCase(),n=String(t.get("role_id")||"").trim();if(!i){s.sync={label:"Invite email is required",mode:"local"},m();return}const r=jt({id:crypto.randomUUID(),company_id:a,email:i,role_id:ri(n)?n:"",token:ol(),status:"pending",invited_by:y().profile.id,expires_at:new Date(Date.now()+336*60*60*1e3).toISOString(),created_at:new Date().toISOString()}),l=A();if(s.session?.auth==="supabase"&&l){const c={company_id:r.company_id,email:r.email,role_id:r.role_id||null,token:r.token,status:"pending",invited_by:y().profile.id},u=await l.from("company_invites").insert(c).select().single();if(u.error){s.sync={label:u.error.message||"Invite save failed",mode:"local"},m();return}s.companyInvites.unshift(jt(u.data)),s.sync={label:"Invite code created. Copy it for the new user.",mode:"live"}}else s.companyInvites.unshift(r),s.sync={label:"Invite code created locally",mode:"local"};J("access.invite","Invite code created",`${U()} created an invite code for ${r.email}.`,d("settings",{tab:"access"},r.company_id),"invite",r.id,r.company_id),s.modal="",m()}async function ls(e,t=""){const a=A();if(!a){s.loginError="Supabase auth is unavailable.",s.authMessage="",m();return}s.authMessage="Accepting workspace invite...",m();const i=await a.rpc("accept_company_invite",{invite_token:String(e||"").trim()});if(i.error){s.loginError=i.error.message||"Unable to accept invite.",s.authMessage="",m();return}const n=v(i.data||E());s.activeCompanyId=n,localStorage.setItem(ue,n),s.authMessage="",s.loginError="",s.dataLoaded=!1,k(d("jobs",{},n),{replace:!0})}async function mr(e){const t=s.companyInvites.find(a=>a.id===e);if(!t?.token){s.sync={label:"Invite link is unavailable",mode:"local"},m();return}try{await navigator.clipboard.writeText(rl(t)),s.sync={label:"Invite link copied",mode:"live"}}catch{s.sync={label:"Copy failed",mode:"local"}}m()}async function pr(e){const t=s.companyInvites.find(a=>a.id===e);if(!t?.token){s.sync={label:"Invite code is unavailable",mode:"local"},m();return}try{await navigator.clipboard.writeText(t.token),s.sync={label:"Invite code copied",mode:"live"}}catch{s.sync={label:"Copy failed",mode:"local"}}m()}async function ur(e){const t=s.companyInvites.find(i=>i.id===e);if(!t)return;const a=A();if(s.session?.auth==="supabase"&&a){const i=await a.from("company_invites").update({status:"revoked",updated_at:new Date().toISOString()}).eq("id",t.id);if(i.error){s.sync={label:i.error.message||"Invite revoke failed",mode:"local"},m();return}s.sync={label:"Invite revoked",mode:"live"}}else s.sync={label:"Invite revoked locally",mode:"local"};s.companyInvites=s.companyInvites.map(i=>i.id===t.id?jt({...i,status:"revoked"}):i),J("access.invite","Invite revoked",`${U()} revoked the invite for ${t.email}.`,d("settings",{tab:"access"},t.company_id),"invite",t.id,t.company_id),H(),m()}async function fr(e){const t=new FormData(e),a=v(t.get("company_id")||p()),i=String(t.get("profile_id")||"").trim(),n=String(t.get("role_id")||"").trim(),r=["active","pending","disabled"].includes(String(t.get("membership_status")))?String(t.get("membership_status")):"active",l=Qe(a,n);if(!i||!l){s.sync={label:"Select a user and role",mode:"local"},m();return}const c=Ct({company_id:a,profile_id:i,role:us(l),status:r}),u=js({company_id:a,profile_id:i,role_id:l.id,assigned_by:y().profile.id}),f=A();if(s.session?.auth==="supabase"&&f){const g=ri(l.id),$=await f.from("company_memberships").upsert(ds(c),{onConflict:"company_id,profile_id"}).select().single();if($.error){s.sync={label:$.error.message||"Access update failed",mode:"local"},m();return}if(g){await f.from("user_role_assignments").delete().eq("company_id",a).eq("profile_id",i);const L=await f.from("user_role_assignments").insert(u);if(L.error){s.sync={label:L.error.message||"Role assignment failed",mode:"local"},m();return}}$t(Ct($.data||c)),g&&wi(u),s.sync={label:g?"User access saved":"Membership saved; create a role to assign permissions",mode:"live"}}else $t(c),wi(u),s.sync={label:"User access saved locally",mode:"local"};J("access.role","User access updated",`${U()} set ${Gt(i)} to ${l.name} / ${q(r)}.`,d("settings",{tab:"access"},a),"membership",i,a),m()}async function vi(e,t){const a=s.joinRequests.find(l=>l.id===e);if(!a||!["approved","rejected"].includes(t))return;const i=A(),n=qs({...a,status:t}),r=Ct({company_id:a.company_id,profile_id:a.profile_id,role:"member",status:t==="approved"?"active":"disabled"});if(s.session?.auth==="supabase"&&i){if(t==="approved"){const c=await i.from("company_memberships").upsert(ds(r),{onConflict:"company_id,profile_id"});if(c.error){s.sync={label:c.error.message||"Approval failed",mode:"local"},m();return}}const l=await i.from("company_join_requests").update({status:t,reviewed_by:y().profile.id,updated_at:new Date().toISOString()}).eq("id",a.id);if(l.error){s.sync={label:l.error.message||"Request update failed",mode:"local"},m();return}t==="approved"&&$t(r),s.sync={label:t==="approved"?"Access approved":"Request rejected",mode:"live"}}else t==="approved"&&$t(r),s.sync={label:t==="approved"?"Access approved locally":"Request rejected locally",mode:"local"};s.joinRequests=s.joinRequests.map(l=>l.id===a.id?n:l),J("access.request",t==="approved"?"Access approved":"Access rejected",`${U()} ${t==="approved"?"approved":"rejected"} ${a.requested_email||"a join request"}.`,d("settings",{tab:"access"},a.company_id),"join_request",a.id,a.company_id),H(),m()}async function gr(e){const t=p();if(!V("messages.create_group",t)){N("Your role cannot create group chats.","local","Messages");return}const a=new FormData(e),i=["company","role","custom"].includes(a.get("type"))?String(a.get("type")):"custom",n=oe({id:crypto.randomUUID(),company_id:t,title:String(a.get("title")||"").trim()||"New group chat",type:i,created_by:y().profile.id,last_message_at:new Date().toISOString(),created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),r=ti(a,n,i);!r.some(c=>c.target_type==="profile"&&c.target_id===y().profile.id)&&i!=="company"&&r.push(W({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:n.id,target_type:"profile",target_id:y().profile.id})),await Ra(n,r)&&(s.selectedConversationId=n.id,s.modal="",J("message.group","Group chat created",`${U()} created ${n.title}.`,d("messages",{conversation:n.id},t),"message_conversation",n.id,t),k(d("messages",{conversation:n.id},t),{replace:!0}))}async function br(e){const t=p(),a=new FormData(e),i=String(a.get("profile_id")||"").trim();if(!i){N("Choose a person first.","local","Messages");return}const n=oe({id:crypto.randomUUID(),company_id:t,title:Gt(i),type:"direct",created_by:y().profile.id,last_message_at:new Date().toISOString(),created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),r=[W({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:n.id,target_type:"profile",target_id:y().profile.id}),W({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:n.id,target_type:"profile",target_id:i})];if(!await Ra(n,r))return;s.selectedConversationId=n.id,s.modal="";const c=String(a.get("body")||"").trim();c&&await cs(n,c,[]),J("message.direct","Direct message started",`${U()} started a direct message with ${n.title}.`,d("messages",{conversation:n.id},t),"message_conversation",n.id,t),k(d("messages",{conversation:n.id},t),{replace:!0})}async function _r(e){const t=p();if(!V("messages.manage_groups",t)&&!V("messages.manage",t)){N("Your role cannot manage chat access.","local","Messages");return}const a=s.messageConversations.find(c=>c.id===e.dataset.conversationId);if(!a)return;const i=new FormData(e),n=oe({...a,title:String(i.get("title")||"").trim()||a.title,type:Ia.includes(i.get("type"))?String(i.get("type")):a.type,updated_at:new Date().toISOString()}),r=ti(i,n,n.type);n.type!=="company"&&!r.some(c=>c.target_type==="profile"&&c.target_id===y().profile.id)&&r.push(W({id:`msg-access-${crypto.randomUUID()}`,company_id:t,conversation_id:n.id,target_type:"profile",target_id:y().profile.id})),await Ra(n,r,!0)&&(s.modal="",N("Chat access saved.",s.session?.auth==="supabase"?"live":"local","Messages"),m())}async function yr(e){const t=s.messageConversations.find(r=>r.id===e.dataset.conversationId);if(!t)return;if(!V("messages.send",t.company_id)){N("Your role cannot send messages.","local","Messages");return}const a=new FormData(e),i=String(a.get("body")||"").trim(),n=Array.from(e.elements.attachments?.files||[]);if(!i&&!n.length){N("Type a message or attach a file.","local","Messages");return}if(n.length&&!V("messages.attach_files",t.company_id)){N("Your role cannot attach files.","local","Messages");return}await cs(t,i,n),e.reset(),m()}async function cs(e,t,a){const i=new Date().toISOString(),n=de({id:crypto.randomUUID(),conversation_id:e.id,company_id:e.company_id,sender_profile_id:y().profile.id,body:t,message_type:a.length?"attachment":"text",created_at:i,updated_at:i}),r=A();let l=n;if(s.session?.auth==="supabase"&&r){const f=await r.from("messages").insert(_l(n)).select().single();if(f.error)return N(f.error.message||"Message send failed.","local","Messages"),null;l=de(f.data)}s.messages=s.messages.concat(l);const c=await vr(l,a),u={...e,last_message_at:l.created_at,updated_at:l.created_at};return s.messageConversations=s.messageConversations.map(f=>f.id===e.id?u:f),s.session?.auth==="supabase"&&r&&await r.from("message_conversations").update({last_message_at:l.created_at,updated_at:l.created_at}).eq("id",e.id),na(e.id,!1),As(u,l,c),Ce(),l}async function vr(e,t){const a=A(),i=[];for(const n of t){const r=crypto.randomUUID(),l=`${e.company_id}/${e.conversation_id}/${r}-${ca(n.name||"attachment")}`;let c="",u="";if(s.session?.auth==="supabase"&&a){const g=await a.storage.from("quest-message-attachments").upload(l,n,{cacheControl:"3600",upsert:!1,contentType:n.type||"application/octet-stream"});if(g.error){N(g.error.message||"Attachment upload failed.","local","Messages");continue}u=l}else n.type?.startsWith("image/")&&n.size<=22e4&&(c=await Ul(n));const f=we({id:r,conversation_id:e.conversation_id,message_id:e.id,company_id:e.company_id,bucket_id:"quest-message-attachments",object_path:u,file_name:n.name||"attachment",mime_type:n.type||"application/octet-stream",size_bytes:n.size||0,preview_url:c,created_at:new Date().toISOString()});if(s.session?.auth==="supabase"&&a){const g=await a.from("message_attachments").insert(yl(f)).select().single();if(g.error){N(g.error.message||"Attachment record failed.","local","Messages"),u&&await a.storage.from("quest-message-attachments").remove([u]);continue}i.push(we(g.data))}else i.push(f)}return s.messageAttachments=s.messageAttachments.concat(i),i}async function Ra(e,t,a=!1){const i=A();if(s.session?.auth==="supabase"&&i){const n=a?await i.from("message_conversations").update(Di(e)).eq("id",e.id).select().single():await i.from("message_conversations").insert(Di(e)).select().single();if(n.error)return N(n.error.message||"Conversation save failed.","local","Messages"),!1;if(await i.from("message_conversation_access").delete().eq("conversation_id",e.id),t.length){const r=await i.from("message_conversation_access").insert(t.map(bl));if(r.error)return N(r.error.message||"Conversation access save failed.","local","Messages"),!1}e=oe(n.data),s.sync={label:"Quest Supabase live",mode:"live"}}return s.messageConversations=[e].concat(s.messageConversations.filter(n=>n.id!==e.id)),s.messageAccess=t.concat(s.messageAccess.filter(n=>n.conversation_id!==e.id)),na(e.id,!1),Ce(),!0}async function hr(e){const t=s.messages.find(r=>r.id===e);if(!t)return;if(!(t.sender_profile_id===y().profile.id&&V("messages.delete_own",t.company_id)||V("messages.delete_any",t.company_id))){N("Your role cannot delete this message.","local","Messages");return}const i=new Date().toISOString(),n=A();if(s.session?.auth==="supabase"&&n){const r=await n.from("messages").update({deleted_at:i,updated_at:i}).eq("id",t.id);if(r.error){N(r.error.message||"Message delete failed.","local","Messages");return}}s.messages=s.messages.map(r=>r.id===t.id?{...r,deleted_at:i,updated_at:i}:r),Ce(),m()}async function $r(e){const t=s.messageAttachments.find(i=>i.id===e);if(!t)return;if(t.preview_url){window.open(t.preview_url,"_blank","noopener,noreferrer");return}const a=A();if(s.session?.auth==="supabase"&&a&&t.object_path){const i=await a.storage.from(t.bucket_id||"quest-message-attachments").createSignedUrl(t.object_path,900,{download:t.file_name});if(!i.error&&i.data?.signedUrl){window.open(i.data.signedUrl,"_blank","noopener,noreferrer");return}}N("This demo attachment is metadata-only.","local","Messages")}function wr(e){if(e.target.matches("[data-global-search]")){s.query=e.target.value,Je();return}if(e.target.matches("[data-file-search]")){s.fileQuery=e.target.value,Je();return}if(e.target.matches("[data-form-search]")){s.formQuery=e.target.value,Je();return}if(e.target.matches("[data-crm-search]")){s.crmQuery=e.target.value,Je();return}if(e.target.matches("[data-message-search]")){s.messageQuery=e.target.value,Je();return}if(e.target.matches("[data-message-access-filter]")){Rl(e.target);return}if(e.target.matches("[data-form-field]")){Us(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Ls(e.target)}function Sr(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||E();Hr(t);return}if(e.target.matches("[data-stage-filter]")){s.stageFilter=e.target.value||"all",m();return}if(e.target.matches("[data-crm-stage-filter]")){s.crmStageFilter=e.target.value||"all",m();return}if(e.target.matches("[data-crm-owner-filter]")){s.crmOwnerFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-status-filter]")){s.taskStatusFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-priority-filter]")){s.taskPriorityFilter=e.target.value||"all",m();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;k(d("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;k(d("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){s.fileCategoryFilter=e.target.value||"All categories",m();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=s.route?.jobId||"";k(d("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;k(d("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){s.formTypeFilter=e.target.value||"all",m();return}if(e.target.matches("[data-form-field]")){Us(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Ls(e.target)}async function kr(e){const t=Te(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.invoice_total=Number(t.invoice_total||0),t.updated_at=new Date().toISOString();const a=s.jobs.some(n=>n.id===t.id),i=A();if(i){const n=a?await i.from("jobs").update(t).eq("id",t.id).select().single():await i.from("jobs").insert(t).select().single();if(!n.error&&n.data){pa(Te(n.data)),s.sync={label:"Quest Supabase live",mode:"live"},s.modal="",k(d("jobs",{tab:"profile",job_id:n.data.id},t.company_id),{replace:!0});return}s.sync={label:"Saved locally",mode:"local"}}pa(t),s.modal="",k(d("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function Dr(e){if(!e)return;const t=p(),a=A();a&&await a.from("jobs").delete().eq("id",e),s.jobs=s.jobs.filter(i=>i.id!==e),s.selectedJobId=P(t)[0]?.id||"",s.modal="",H(),k(d("jobs",{tab:"list"},t),{replace:!0})}async function Cr(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),i=Re({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:y().profile.member_id||fe(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),n=Bt(i.id),r=!!n,l=A();if(l){const c=Cl(i),u=r?await l.from("tasks").update(c).eq("id",i.id).select().single():await l.from("tasks").insert(c).select().single();if(!u.error&&u.data){const f=Re(u.data);hi(f),ji(f,n),s.sync={label:"Quest Supabase live",mode:"live"},s.modal="",k(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0});return}s.sync={label:"Task saved locally",mode:"local"}}hi(i),ji(i,n),s.modal="",k(d("tasks",{...i.project_id?{job_id:i.project_id}:{},task_id:i.id},t),{replace:!0})}async function jr(e){if(!e)return;const t=p(),a=A();a&&await a.from("tasks").delete().eq("id",e),s.tasks=s.tasks.filter(i=>i.id!==e),s.selectedTaskId="",s.modal="",H(),k(d("tasks",{},t),{replace:!0})}async function qr(e){const t=p(),a=new FormData(e),i=Object.fromEntries(a.entries()),n=Array.from(e.elements.files?.files||[]),r=String(i.file_name||"").trim(),l=n.length?n:r?[null]:[];if(!l.length){s.sync={label:"Choose a file or enter a file name",mode:"local"},m();return}const c=A();let u=0;for(const f of l){const g=crypto.randomUUID(),$=f?.name||r,L=String(i.folder||"shared"),O=`${t}/${i.job_id?`jobs/${i.job_id}`:L}/${g}-${ca($)}`;let Z=!1;c&&f&&(Z=!(await c.storage.from("quest-job-files").upload(O,f,{cacheControl:"3600",upsert:!1,contentType:f.type||"application/octet-stream"})).error);const Be=Ke({id:g,company_id:t,job_id:i.job_id||"",folder:L,file_name:$,mime_type:f?.type||"application/octet-stream",size_bytes:f?.size||Number(i.size_bytes||0),category:i.category||se(L),notes:i.notes||"",uploaded_by_label:i.uploaded_by_label||y().profile.full_name,bucket_id:"quest-job-files",object_path:Z||!f?O:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(c){const ye=await c.from("job_files").insert(jl(Be)).select().single();if(!ye.error&&ye.data){$i(Ke(ye.data)),u+=1;continue}Z&&await c.storage.from("quest-job-files").remove([O])}$i(Be)}s.sync=u===l.length?{label:"Quest Supabase live",mode:"live"}:{label:u?"Some files saved locally":"File record saved locally",mode:u?"loading":"local"},J("file.added",l.length>1?"Files added":"File added",`${U()} added ${l.length} file${l.length===1?"":"s"} to ${se(i.folder||"shared")}.`,d("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),"file",i.job_id||"",t),s.modal="",k(d("files",{folder:i.folder||"shared",...i.job_id?{job_id:i.job_id}:{}},t),{replace:!0})}function Ir(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.name||"").trim();if(!a){s.sync={label:"Folder name is required",mode:"local"},m();return}const i=Wa({id:`folder-${crypto.randomUUID()}`,company_id:p(),name:a,parent_key:t.parent_key||"home",created_by_label:y().profile.full_name||"Quest HQ",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});s.driveFolders.unshift(i),s.modal="",s.sync={label:"Folder created locally",mode:"local"},J("file.folder","Folder created",`${U()} created ${i.name}.`,d("files",{folder:i.id},i.company_id),"folder",i.id,i.company_id),H(),m()}function Mr(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=F(t.job_id),n=String(t.id||"").trim()?De(String(t.id).trim()):null,r=ea({...t,id:String(t.id||"").trim()||`invoice-${crypto.randomUUID()}`,company_id:a,client_name:String(t.client_name||i?.client_name||"").trim(),total:R(t.subtotal)+R(t.tax),updated_at:new Date().toISOString()});Tr(r),n?.job_id&&n.job_id!==r.job_id&&ua(n.job_id),ua(r.job_id),s.modal="",s.sync={label:"Finance saved locally",mode:"local"},J("finance.invoice",n?"Invoice updated":"Invoice created",`${U()} ${n?"updated":"created"} ${r.invoice_number}.`,d("finance",{invoice:r.id},a),"invoice",r.id,a),k(d("finance",{invoice:r.id},a),{replace:!0})}function Fr(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=De(t.invoice_id);if(!i||i.company_id!==a){s.sync={label:"Create an invoice before recording a payment",mode:"local"},m();return}const n=ta({...t,id:`payment-${crypto.randomUUID()}`,company_id:a,created_at:new Date().toISOString()});s.financePayments.unshift(n),i.status=ce(i.id)<=0?"Paid":"Partially paid",i.updated_at=new Date().toISOString(),ua(i.job_id),H(),s.modal="",s.sync={label:"Payment recorded locally",mode:"local"},J("finance.payment","Payment recorded",`${U()} recorded ${h(n.amount)} for ${i.invoice_number}.`,d("finance",{invoice:n.invoice_id},a),"payment",n.id,a),k(d("finance",n.invoice_id?{invoice:n.invoice_id}:{},a),{replace:!0})}function Ar(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=aa({...t,id:String(t.id||"").trim()||`expense-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});Rr(i),s.modal="",s.sync={label:"Expense saved locally",mode:"local"},J("finance.expense","Expense saved",`${U()} saved a ${h(i.amount)} ${i.category} expense.`,d("finance",{expense:i.id},a),"expense",i.id,a),k(d("finance",{expense:i.id},a),{replace:!0})}function Or(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),i=ia({...t,id:String(t.id||"").trim()||`vendor-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});Pr(i),s.modal="",s.sync={label:"Vendor saved locally",mode:"local"},J("finance.vendor","Vendor saved",`${U()} saved vendor ${i.name}.`,d("finance",{vendor:i.id},a),"vendor",i.id,a),k(d("finance",{vendor:i.id},a),{replace:!0})}async function xr(e){const t=s.files.find(n=>n.id===e);if(!t?.object_path){s.sync={label:"No stored object for this file",mode:"local"},m();return}const a=A();if(!a)return;const i=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(i.error||!i.data?.signedUrl){s.sync={label:"Download failed",mode:"local"},m();return}window.open(i.data.signedUrl,"_blank","noopener,noreferrer")}async function Er(e){const t=s.files.find(i=>i.id===e);if(!t)return;const a=A();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),s.files=s.files.filter(i=>i.id!==e),s.selectedFileId="",s.modal="",H(),m()}function pa(e){const t=s.jobs.findIndex(a=>a.id===e.id);t>=0?s.jobs[t]=e:s.jobs.unshift(e),s.selectedJobId=e.id,H()}function hi(e){const t=s.tasks.findIndex(a=>a.id===e.id);t>=0?s.tasks[t]=e:s.tasks.unshift(e),s.selectedTaskId=e.id,H()}function $i(e){const t=s.files.findIndex(a=>a.id===e.id);t>=0?s.files[t]=e:s.files.unshift(e),H()}function Tr(e){const t=s.financeInvoices.findIndex(a=>a.id===e.id);t>=0?s.financeInvoices[t]=e:s.financeInvoices.unshift(e),H()}function Rr(e){const t=s.financeExpenses.findIndex(a=>a.id===e.id);t>=0?s.financeExpenses[t]=e:s.financeExpenses.unshift(e),H()}function Pr(e){const t=s.financeVendors.findIndex(a=>a.id===e.id);t>=0?s.financeVendors[t]=e:s.financeVendors.unshift(e),H()}function $t(e){const t=s.memberships.findIndex(a=>a.company_id===e.company_id&&a.profile_id===e.profile_id);t>=0?s.memberships[t]=e:s.memberships.unshift(e),H()}function wi(e){s.roleAssignments=s.roleAssignments.filter(t=>t.company_id!==e.company_id||t.profile_id!==e.profile_id),e.role_id&&s.roleAssignments.unshift(e)}function ds(e){return{company_id:e.company_id,profile_id:e.profile_id,role:e.role,status:e.status}}function ua(e){if(!e)return;const t=F(e);t&&(t.invoice_total=ie(ke(t.company_id).filter(a=>a.job_id===e),"total"),t.updated_at=new Date().toISOString(),pa(t))}function Je(){const e=document.getElementById("workspace");e&&(ms(s.route),e.innerHTML=as(s.route))}function Qt(){const e=Pa(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const i=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:i,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function Nr(){const e=Pa(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||bt(t.get("job_id")||t.get("project_id"))||localStorage.getItem(ue)||E(),i=Object.fromEntries(Object.entries(Hs).map(([l,c])=>[l,d(c,{},a)]));Object.assign(i,{"/index.html":d("jobs",{},a),"/command.html":d("jobs",{},a),"/login.html":"/login"});let n=i[e];if(e==="/jobs"){const l=t.get("tab");l==="tasks"?n=d("tasks",X(t,["job_id","task_id","new","edit"]),a):l==="files"?n=d("files",X(t,["job_id","folder"]),a):l==="forms"?n=d("forms",X(t,["job_id"]),a):l==="analytics"?n=d("analytics",X(t,["job_id"]),a):n=d("jobs",X(t,["job_id","tab"]),a)}if(e==="/files"&&(n=d("files",X(t,["job_id","folder"]),a)),e==="/forms"&&(n=d("forms",X(t,["job_id"]),a)),e==="/analytics"&&(n=d("analytics",X(t,["job_id"]),a)),e==="/crm"&&(n=d("crm",X(t,["account"]),a)),e==="/finance"&&(n=d("finance",X(t,["invoice","expense","vendor","report"]),a)),e==="/messages"&&(n=d("messages",X(t,["conversation"]),a)),e==="/admin"&&(n=d("settings",{},a)),e==="/time"&&(n=d("time",{},a)),e==="/team"&&(n=d("team-chart",{},a)),e==="/team-chart"&&(n=d("team-chart",{},a)),e==="/approvals"&&(n=d("approvals",{},a)),e==="/clock"&&(n=d("clock",{},a)),e==="/task-management.html"){const l=t.get("project_id")||t.get("job_id")||"";n=d("tasks",l?{job_id:l}:{},bt(l)||a)}const r=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(r){const l=decodeURIComponent(r[1]);n=d("tasks",{job_id:l},bt(l)||a)}n&&window.history.replaceState({},"",b(n))}function Ur(e){if(e.name!=="company")return"";const t=Ve();if(s.session?.auth==="supabase"&&!t.length)return null;if(!t.includes(e.companyId))return d(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||E());if(!Nt.map(n=>n.id).includes(e.section))return d("jobs",{},e.companyId);const i=e.jobId?bt(e.jobId):"";return i&&i!==e.companyId&&t.includes(i)?d(e.section,Object.fromEntries(e.params.entries()),i):""}function Pa(){let e=window.location.pathname||"/";return Fe&&e.startsWith(Fe)&&(e=e.slice(Fe.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function b(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),i=t.startsWith("/")?t:"/"+t;return`${Fe}${i}${a?`?${a}`:""}`||"/"}function k(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(Fe+"/")||Fe===""&&e.startsWith("/")?e:b(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),m()}function Lr(){return`${Pa()}${window.location.search}`}function Vt(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?b(d("jobs",{},E())):`${t.pathname}${t.search}`}catch{return b(d("jobs",{},E()))}}function d(e="jobs",t={},a=p()){const i=new URLSearchParams(t);for(const[n,r]of[...i.entries()])(r==null||r==="")&&i.delete(n);return`/company/${encodeURIComponent(v(a||E()))}/${e}${i.toString()?`?${i.toString()}`:""}`}function Qr(e){return e.name==="company"?q(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":q(e.name||"Workspace")}function Vr(e,t){const[a]=t.split("?"),i=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!i||e.name!=="company"?!1:e.companyId===decodeURIComponent(i[1])&&e.section===i[2]}function Br(e){return Ei.includes(e)?e:"pipeline"}function Jr(e){return{pipeline:"Pipeline",list:"List",profile:"Profile"}[e]||e}function zr(e){const t=e.companyId||s.activeCompanyId||E(),a=Ve();s.activeCompanyId=a.includes(t)?t:a[0]||E(),localStorage.setItem(ue,s.activeCompanyId)}function ms(e){const t=p();e.jobId&&P(t).some(i=>i.id===e.jobId)&&(s.selectedJobId=e.jobId),(!s.selectedJobId||!P(t).some(i=>i.id===s.selectedJobId))&&(s.selectedJobId=P(t)[0]?.id||"");const a=e.params.get("task_id");a&&te(t).some(i=>i.id===a)&&(s.selectedTaskId=a),e.section!=="tasks"&&(s.selectedTaskId=""),s.driveFolder=e.params.get("folder")||"home"}function Hr(e){const t=Ve(),a=v(e),i=t.includes(a)?a:t[0]||E();s.activeCompanyId=i,localStorage.setItem(ue,i),Wr();const n=s.route||Qt(),r=n.name==="company"?n.section:"jobs";k(d(r,{},i))}function Wr(){s.modal="",s.selectedJobId="",s.selectedTaskId="",s.selectedFileId="",s.selectedFormId="",s.selectedQuestionId="",s.selectedFinanceInvoiceId="",s.selectedFinanceExpenseId="",s.selectedFinanceVendorId="",s.query="",s.fileQuery="",s.formQuery="",s.crmQuery="",s.stageFilter="all",s.crmStageFilter="all",s.crmOwnerFilter="all",s.taskStatusFilter="all",s.taskPriorityFilter="all",s.fileCategoryFilter="All categories",s.formTypeFilter="all",s.formsTab="library",s.driveFolder="home"}function Yr(e){const t=F(e);t&&(s.selectedJobId=e,k(d("jobs",{tab:"profile",job_id:e},t.company_id)))}function Kr(e){const t=Bt(e);t&&(s.selectedTaskId=e,k(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function $e(){return F(s.selectedJobId)||P(p())[0]||null}function F(e){return s.jobs.find(t=>t.id===e)||null}function Bt(e){return s.tasks.find(t=>t.id===e)||null}function P(e=p()){return s.jobs.filter(t=>t.company_id===e)}function te(e=p()){return s.tasks.filter(t=>t.company_id===e)}function Gr(e=p()){const t=y().profile.id;return s.notifications.filter(a=>a.company_id===e&&a.recipient_profile_id===t).sort((a,i)=>Date.parse(i.created_at||0)-Date.parse(a.created_at||0))}function Ue(e=p()){const t=s.messageQuery.trim().toLowerCase(),a=s.messageFilter||"all";return s.messageConversations.filter(i=>i.company_id===e&&al(i)).filter(i=>a==="all"||i.type===a||a==="unread"&&Ua(i.id)>0).filter(i=>{if(!t)return!0;const n=Le(i.id).some(r=>r.body.toLowerCase().includes(t));return i.title.toLowerCase().includes(t)||n}).sort((i,n)=>Date.parse(n.last_message_at||n.updated_at||n.created_at||0)-Date.parse(i.last_message_at||i.updated_at||i.created_at||0))}function Zr(e=p()){return Ue(e).reduce((t,a)=>t+Ua(a.id),0)}function ps(e=p()){const t=Ue(e),i=s.route?.params?.get("conversation")||""||s.selectedConversationId;return t.find(n=>n.id===i)||t[0]||null}function Le(e){return s.messages.filter(t=>t.conversation_id===e&&!t.deleted_at).sort((t,a)=>Date.parse(t.created_at||0)-Date.parse(a.created_at||0))}function Xr(e){return s.messageAttachments.filter(t=>t.conversation_id===e)}function el(e){return s.messageAttachments.filter(t=>t.message_id===e)}function Na(e){return s.messageAccess.filter(t=>t.conversation_id===e)}function tl(e,t=y().profile.id){return s.messageReads.find(a=>a.conversation_id===e&&a.profile_id===t)||null}function Ua(e,t=y().profile.id){const a=Date.parse(tl(e,t)?.last_read_at||0);return Le(e).filter(i=>i.sender_profile_id!==t&&Date.parse(i.created_at||0)>a).length}function al(e){if(!e||!V("messages.view",e.company_id))return!1;const t=y().profile,a=Na(e.id);if(e.type==="company"||a.some(r=>r.target_type==="all_company"))return!0;const i=new Set([t.id,t.member_id,t.email].filter(Boolean).map(String));if(a.some(r=>r.target_type==="profile"&&i.has(r.target_id)))return!0;const n=[wt(e.company_id,ot(e.company_id)),...s.roleAssignments.filter(r=>r.company_id===e.company_id&&r.profile_id===t.id).map(r=>r.role_id)];return a.some(r=>r.target_type==="role"&&n.includes(r.target_id))}function Se(e=p()){return s.files.filter(t=>t.company_id===e)}function Ye(e=p()){return s.driveFolders.filter(t=>t.company_id===e)}function fe(e=p()){return s.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function nt(e=p()){const t=new Map;fe(e).forEach(i=>{t.set(i.id,{profile_id:"",member_id:i.id,name:i.full_name||i.name,email:i.email,avatar_url:i.avatar_url,role:St(e,i.id).toLowerCase(),role_label:St(e,i.id),role_id:"",status:i.active?"active":"disabled"})}),s.memberships.filter(i=>i.company_id===e).forEach(i=>{const n=zt(i.profile_id),r=i.member_id?s.teamMembers.find(f=>f.id===i.member_id):null,l=s.roleAssignments.find(f=>f.company_id===e&&f.profile_id===i.profile_id),c=l?Qe(e,l.role_id):null,u=i.profile_id||i.member_id;t.set(u,{profile_id:i.profile_id,member_id:i.member_id,name:n?.full_name||r?.full_name||n?.email||r?.name||u||"User",email:n?.email||r?.email||"",avatar_url:n?.avatar_url||r?.avatar_url||"",role:i.role,role_label:c?.name||q(i.role),role_id:l?.role_id||wt(e,i.role),status:i.status||"active"})});const a=y().profile;if(s.session?.auth==="supabase"&&a?.id&&!t.has(a.id)){const i=kt(e,a.id);i&&t.set(a.id,{profile_id:a.id,member_id:a.member_id||"",name:a.full_name||a.email,email:a.email,avatar_url:a.avatar_url,role:i.role,role_label:q(i.role),role_id:wt(e,i.role),status:i.status||"active"})}return[...t.values()].sort((i,n)=>(i.status==="active"?0:1)-(n.status==="active"?0:1)||i.name.localeCompare(n.name))}function il(e=p()){return s.companyInvites.filter(t=>t.company_id===e&&t.status==="pending").sort((t,a)=>Date.parse(a.created_at||0)-Date.parse(t.created_at||0))}function ge(e=p()){const t=s.roles.filter(a=>a.company_id===e);return t.length?t.sort((a,i)=>i.priority-a.priority||a.name.localeCompare(i.name)):[Ae({id:`owner-${e}`,company_id:e,name:"Owner",color:"#f0b23b",priority:1e3,is_system:!0}),Ae({id:`admin-${e}`,company_id:e,name:"Admin",color:"#60a5fa",priority:800,is_system:!0}),Ae({id:`staff-${e}`,company_id:e,name:"Staff",color:"#15803d",priority:100,is_system:!0})]}function Qe(e,t){return ge(e).find(a=>a.id===t)||null}function Jt(e=p()){return!s.rolePreview||s.rolePreview.company_id!==e?null:Qe(e,s.rolePreview.role_id)}function sl(e,t){if(!t)return!0;const a=String(e?.name||"").toLowerCase();if(["owner","admin","developer"].includes(a))return!0;const i=s.rolePermissions.filter(l=>l.role_id===e?.id);if(i.some(l=>(l.permission_key===t||l.permission_key==="*")&&l.effect==="deny"))return!1;if(i.some(l=>(l.permission_key===t||l.permission_key==="*")&&l.effect==="allow"))return!0;if(i.length)return!1;const n=us(e),r=yt[n]||yt.member;return r.includes("*")||r.includes(t)}function wt(e,t){const a=String(t||"").toLowerCase();return ge(e).find(i=>i.name.toLowerCase()===a||i.id.toLowerCase()===a)?.id||""}function nl(e=p()){const t=ge(e).filter(a=>a.name.toLowerCase()!=="owner");return t.find(a=>a.name.toLowerCase()==="staff")?.id||t.find(a=>a.name.toLowerCase()==="member")?.id||t[0]?.id||""}function ol(){const e=new Uint8Array(8);return crypto.getRandomValues(e),`QH-${Array.from(e,t=>t.toString(36).padStart(2,"0")).join("").toUpperCase()}`}function rl(e){const t=new URL(b("/login"),window.location.origin);return t.searchParams.set("invite",e.token),t.toString()}function us(e){const t=String(e?.name||"").toLowerCase().replace(/\s+/g,"_");return["owner","member","worker","sales","supervisor","admin","developer","construction_supervisor"].includes(t)?t:"member"}function zt(e){return s.profiles.find(t=>t.id===e)||(y().profile.id===e?y().profile:null)}function fs(e=p()){const t=s.query.trim().toLowerCase();return P(e).filter(a=>s.stageFilter!=="all"&&a.stage!==s.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,M(a.company_id)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function Ht(e=p()){const t=new Map;return P(e).forEach(a=>{const i=String(a.client_name||"").trim()||"Unassigned customer",n=`account-${ca(i.toLowerCase())}`;t.has(n)||t.set(n,{key:n,name:i,jobs:[]}),t.get(n).jobs.push(a)}),Array.from(t.values()).map(a=>{const i=a.jobs.slice().sort((O,Z)=>Date.parse(Z.updated_at||Z.created_at||0)-Date.parse(O.updated_at||O.created_at||0)),n=i[0]||null,r=i.map(O=>O.id),l=te(e).filter(O=>r.includes(O.project_id)),c=_e(e).filter(O=>r.includes(O.linked_job_id)),u=Se(e).filter(O=>r.includes(O.job_id)),f=ee(i.map(O=>O.contact_name)),g=ee(i.map(O=>O.owner_name)),$=ee(i.map(O=>O.site_address)),L=i.map(O=>O.priority||"Medium").sort((O,Z)=>Pe(Z)-Pe(O))[0]||"Medium";return{...a,jobs:i,tasks:l,latestJob:n,contacts:f,owners:g,addresses:$,forms:c,files:u,primaryContact:f[0]||"No contact",owner:g[0]||"Unassigned",stage:n?.stage||"Lead",priority:L,estimateTotal:ie(i,"estimate_total"),fileCount:u.length,formCount:c.length,updatedAt:n?.updated_at||n?.created_at||new Date().toISOString(),subtitle:$[0]||`${i.length} linked job${i.length===1?"":"s"}`}}).sort((a,i)=>Date.parse(i.updatedAt||0)-Date.parse(a.updatedAt||0))}function ll(e=p()){const t=s.crmQuery.trim().toLowerCase();return Ht(e).filter(a=>s.crmStageFilter!=="all"&&!a.jobs.some(i=>i.stage===s.crmStageFilter)||s.crmOwnerFilter!=="all"&&!a.owners.includes(s.crmOwnerFilter)?!1:t?[a.name,a.primaryContact,a.owner,a.stage,...a.addresses,...a.contacts,...a.jobs.map(i=>i.name)].some(i=>String(i||"").toLowerCase().includes(t)):!0)}function cl(e,t){return Ht(e).find(a=>a.key===t)||null}function dl(e=p()){return ee(P(e).map(t=>t.owner_name)).sort((t,a)=>t.localeCompare(a))}function gs(e=p()){const t=y().profile.member_id||"",a=te(e).slice().sort(ki),i=a.filter(La),n=i.filter($=>$.due===I(0)),r=i.filter($=>Fi($.due)<0),l=i.filter($=>{const L=Fi($.due);return L>=0&&L<=7}),c=i.filter($=>$.assignee_id===t),u=i.filter($=>["review","pending"].includes($.status)),f=a.filter($=>$.status==="done"),g=ee(r.concat(n,c,u,l).map($=>$.id)).map($=>a.find(L=>L.id===$)).filter(Boolean).sort(ki);return{tasks:a,open:i,dueToday:n,overdue:r,thisWeek:l,assignedToMe:c,review:u,done:f,focus:g}}function bs(e=p()){const t=_e(e).filter(n=>(n.require_approval||n.type==="Client approval")&&!["Archived","Closed","Approved"].includes(n.status)).map(n=>({id:`form:${n.id}`,title:n.title,meta:F(n.linked_job_id)?.name||n.description||"Company form",type:"Form approval",owner:K(n.creator_id),status:n.status,updatedAt:n.updated_at||n.created_at,href:d("forms",{form_id:n.id},e)})),a=te(e).filter(n=>["review","pending"].includes(n.status)).map(n=>({id:`task:${n.id}`,title:n.title,meta:F(n.project_id)?.name||n.description||"Company task",type:"Task review",owner:K(n.assignee_id),status:le(n.status),updatedAt:n.updated_at||n.due,href:d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},e)})),i=s.memberships.filter(n=>n.company_id===e&&n.status!=="active").map(n=>({id:`access:${n.profile_id||n.member_id}`,title:K(n.member_id||n.profile_id),meta:`${q(n.role)} access request`,type:"Access request",owner:"Quest admin",status:q(n.status),updatedAt:new Date().toISOString(),href:d("settings",{tab:"access"},e)}));return t.concat(a,i).sort((n,r)=>Date.parse(r.updatedAt||0)-Date.parse(n.updatedAt||0))}function Wt(e=p()){const t=s.activeTimer;return!t||t.company_id!==e?null:t}function _s(e=p()){return s.timeEntries.filter(t=>t.company_id===e).sort((t,a)=>Date.parse(a.started_at||0)-Date.parse(t.started_at||0))}function Si(e=p(),t=0){return _s(e).filter(a=>Date.parse(a.started_at||0)>=t).reduce((a,i)=>a+R(i.duration_ms),0)}function ml(e=p(),t=""){s.activeTimer&&ys(!1);const a=t?Bt(t):null;s.activeTimer={id:`timer-${crypto.randomUUID()}`,company_id:e,user_id:y().profile.member_id||y().profile.id,task_id:a?.company_id===e?a.id:"",task_title:a?.company_id===e?a.title:"",started_at:new Date().toISOString()},Fs(),s.sync={label:"Clock started locally",mode:"local"},m()}function ys(e=!0){const t=s.activeTimer;if(!t)return;const a=new Date().toISOString(),i=Math.max(0,Date.parse(a)-Date.parse(t.started_at||a));s.timeEntries.unshift({id:`time-${crypto.randomUUID()}`,company_id:t.company_id,user_id:t.user_id,task_id:t.task_id||"",task_title:t.task_title||"",started_at:t.started_at,ended_at:a,duration_ms:i,notes:t.task_title?"Task timer":"General shift"}),s.activeTimer=null,Fs(),s.sync={label:"Clock stopped locally",mode:"local"},e&&m()}function La(e){return e.status!=="done"}function ki(e,t){const a=Date.parse(e.due||0)-Date.parse(t.due||0);return a||Pe(t.priority)-Pe(e.priority)}function ke(e=p()){return s.financeInvoices.filter(t=>t.company_id===e).sort(Xe("updated_at"))}function vs(e=p()){return s.financePayments.filter(t=>t.company_id===e)}function Qa(e=p()){return s.financeExpenses.filter(t=>t.company_id===e).sort(Xe("updated_at"))}function Va(e=p()){return s.financeVendors.filter(t=>t.company_id===e)}function De(e){return s.financeInvoices.find(t=>t.id===e)||null}function hs(e){return s.financeExpenses.find(t=>t.id===e)||null}function Ba(e){return s.financeVendors.find(t=>t.id===e)||null}function fa(e){return Ba(e)?.name||"No vendor"}function $s(e){return s.financePayments.filter(t=>t.invoice_id===e).sort(Xe("received_at"))}function Ja(e){return ie($s(e),"amount")}function ce(e){const t=De(e);return Math.max(0,R(t?.total)-Ja(e))}function ws(e){const t=ce(e.id);return t<=0&&R(e.total)>0?"Paid":t<R(e.total)?"Partially paid":e.status==="Sent"&&Vs(e.due_date)>0?"Overdue":e.status}function Ss(e=p()){const t=ke(e),a=vs(e),i=Qa(e).filter(c=>["Approved","Paid"].includes(c.status)),n={current:0,thirty:0,sixty:0,overSixty:0};t.forEach(c=>{const u=ce(c.id);if(!u)return;const f=Vs(c.due_date);f<=0?n.current+=u:f<=30?n.thirty+=u:f<=60?n.sixty+=u:n.overSixty+=u});const r=ie(a,"amount"),l=ie(i,"amount");return{pipeline:ie(P(e),"estimate_total"),invoiced:ie(t,"total"),collected:r,outstanding:t.reduce((c,u)=>c+ce(u.id),0),expenses:l,net:r-l,aging:n}}function pl(e=p(),t=""){const a=s.query.trim().toLowerCase();return te(e).filter(i=>t&&i.project_id!==t||s.taskStatusFilter!=="all"&&i.status!==s.taskStatusFilter||s.taskPriorityFilter!=="all"&&i.priority!==s.taskPriorityFilter?!1:a?[i.title,i.description,dt(i.type),K(i.assignee_id),F(i.project_id)?.name].some(n=>String(n||"").toLowerCase().includes(a)):!0)}function ks(){const e=Ve();return s.companies.filter(t=>e.includes(t.id))}function V(e,t=p()){if(!e)return!0;const a=Jt(t);if(a)return sl(a,e);const i=y().profile;if(s.session?.auth==="supabase"){const l=kt(t,i.id);if(!l||l.status!=="active")return!1;if(["owner","developer"].includes(String(l.role).toLowerCase()))return!0;const c=s.roleAssignments.filter(f=>f.company_id===t&&f.profile_id===i.id).map(f=>f.role_id),u=s.rolePermissions.filter(f=>c.includes(f.role_id));if(u.some(f=>(f.permission_key===e||f.permission_key==="*")&&f.effect==="deny"))return!1;if(u.some(f=>(f.permission_key===e||f.permission_key==="*")&&f.effect==="allow"))return!0}const n=String(kt(t,i.id)?.role||i.role||"member").toLowerCase(),r=yt[n]||yt.member;return r.includes("*")||r.includes(e)}function Ve(){const e=y().profile,t=s.companies.map(n=>n.id);if(s.session?.auth==="supabase"){const n=s.memberships.filter(r=>r.profile_id===e.id&&r.status==="active").map(r=>v(r.company_id));return ee(n).filter(r=>t.includes(r))}if(["developer","admin"].includes(e.role))return ee(t.length?t:st.map(n=>v(n.id)));const a=s.memberships.filter(n=>n.profile_id===e.id&&n.status!=="disabled").map(n=>v(n.company_id)),i=a.length?a:e.company_ids||[];return ee(i.map(v)).filter(n=>t.includes(n))}function p(){const e=Ve();return e.includes(s.activeCompanyId)?s.activeCompanyId:e[0]||s.activeCompanyId||E()}function E(){return v(st[0].id)}function Yt(e){const t=v(e);return s.companies.find(a=>a.id===t)||st.map(rt).find(a=>a.id===t)||null}function M(e){const t=Yt(e);return t?Kt(t):e||"Company"}function Kt(e){return e.short_name||e.label||e.name||e.id}function be(e){return Yt(e)?.color||"#f0b23b"}function bt(e){return v(s.jobs.find(t=>t.id===e)?.company_id||"")}function ot(e){const t=Jt(e);if(t)return`Preview: ${t.name}`;const a=y().profile;return s.session?.auth!=="supabase"&&["developer","admin"].includes(a.role)?q(a.role):q(kt(e,a.id)?.role||a.role||"member")}function St(e,t){const a=s.memberships.find(i=>i.company_id===e&&(i.member_id===t||i.profile_id===t));return q(a?.role||"member")}function kt(e,t){return s.memberships.find(a=>a.company_id===e&&a.profile_id===t)||null}function za(e=p()){return s.subscriptions.find(t=>t.company_id===e)||null}function Ha(e=p()){if(s.session?.auth!=="supabase")return!0;const t=za(e);return!!(!t||["trialing","active","past_due","grace"].includes(t.status)||t.grace_ends_at&&Date.parse(t.grace_ends_at)>Date.now())}function Ds(e=p()){const t=za(e);return t?t.status==="trialing"?`Trial - ${x(t.trial_ends_at)}`:t.status==="active"?"Active subscription":t.status==="past_due"?"Past due grace":t.status==="grace"?`Grace - ${x(t.grace_ends_at)}`:q(t.status):s.session?.auth==="supabase"?"Trial pending":"Demo mode"}function K(e){const t=s.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function Gt(e){const t=zt(e);return t?.full_name||t?.email||K(e)}function Zt(e){return s.tasks.filter(t=>t.project_id===e).length}function Dt(e){return s.files.filter(t=>t.job_id===e).length}function v(e){return{"quest-roofing":"roofing","quest-drafting":"drafting"}[String(e||"").trim()]||String(e||"").trim()}function Cs(e){const t=new Map;return e.map(rt).forEach(a=>{!a.id||t.has(a.id)||t.set(a.id,a)}),Array.from(t.values())}function rt(e){return{id:v(e.id||""),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function Te(e){return{id:String(e.id||""),company_id:v(e.company_id||E()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:et.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:R(e.estimate_total),invoice_total:R(e.invoice_total),task_count:R(e.task_count),file_count:R(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function Re(e){const t=vt.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=tt.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:Ti.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:v(e.company_id||E()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||I(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:vt.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function Ke(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:v(e.company_id||E()),job_id:String(e.job_id||""),folder:String(e.folder||yc(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:R(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Wa(e){return{id:String(e.id||`folder-${crypto.randomUUID()}`),company_id:v(e.company_id||E()),name:String(e.name||"New folder").trim()||"New folder",parent_key:String(e.parent_key||"home"),created_by_label:String(e.created_by_label||"Quest HQ"),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function lt(e){const t=Array.isArray(e.questions)?e.questions.map(Xt):[],a=at.includes(e.type)?e.type:"Internal",i=qa.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:v(e.company_id||E()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:i,audience:String(e.audience||"Internal").trim(),creator_id:String(e.creator_id||e.created_by||e.created_by_id||""),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Xt(e){const t=it.some(([i])=>i===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(i=>String(i||"").trim()).filter(Boolean):[]};return Ze(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function Ya(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:v(e.company_id||E()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function ea(e){const t=R(e.subtotal),a=R(e.tax),i=R(e.total)||t+a;return{id:String(e.id||`invoice-${crypto.randomUUID()}`),company_id:v(e.company_id||E()),job_id:String(e.job_id||""),client_name:String(e.client_name||"").trim(),invoice_number:String(e.invoice_number||`INV-${Date.now()}`).trim(),status:Ri.includes(e.status)?e.status:"Draft",issue_date:String(e.issue_date||I(0)).slice(0,10),due_date:String(e.due_date||I(30)).slice(0,10),subtotal:t,tax:a,total:i,notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function ta(e){return{id:String(e.id||`payment-${crypto.randomUUID()}`),company_id:v(e.company_id||E()),invoice_id:String(e.invoice_id||""),amount:R(e.amount),method:Ui.includes(e.method)?e.method:"ACH",received_at:String(e.received_at||I(0)).slice(0,10),reference:String(e.reference||"").trim(),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString()}}function aa(e){return{id:String(e.id||`expense-${crypto.randomUUID()}`),company_id:v(e.company_id||E()),job_id:String(e.job_id||""),vendor_id:String(e.vendor_id||""),category:Ut.includes(e.category)?e.category:"Other",amount:R(e.amount),status:Pi.includes(e.status)?e.status:"Pending",spent_at:String(e.spent_at||I(0)).slice(0,10),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function ia(e){return{id:String(e.id||`vendor-${crypto.randomUUID()}`),company_id:v(e.company_id||E()),name:String(e.name||"New vendor").trim()||"New vendor",contact_name:String(e.contact_name||"").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),category:Ut.includes(e.category)?e.category:"Other",status:Ni.includes(e.status)?e.status:"Active",notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ka(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,supervisor_id:String(e.supervisor_id||e.manager_id||""),company_ids:Array.isArray(e.company_ids)?ee(e.company_ids.map(v)):[]}}function Ct(e){return{company_id:v(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function ul(e){return{company_id:v(e.company_id||""),status:String(e.status||"trialing"),plan_code:String(e.plan_code||"quest_company_300"),amount_cents:R(e.amount_cents||3e4),currency:String(e.currency||"usd"),stripe_customer_id:String(e.stripe_customer_id||""),stripe_subscription_id:String(e.stripe_subscription_id||""),current_period_end:e.current_period_end||"",trial_ends_at:e.trial_ends_at||"",grace_ends_at:e.grace_ends_at||""}}function Ae(e){return{id:String(e.id||""),company_id:v(e.company_id||""),name:String(e.name||"Role").trim()||"Role",color:String(e.color||"#f0b23b"),priority:R(e.priority),is_system:e.is_system===!0,created_by:String(e.created_by||"")}}function ga(e){return{role_id:String(e.role_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function js(e){return{company_id:v(e.company_id||""),profile_id:String(e.profile_id||""),role_id:String(e.role_id||""),assigned_by:String(e.assigned_by||"")}}function fl(e){return{id:String(e.id||""),company_id:v(e.company_id||""),resource_type:String(e.resource_type||""),resource_id:String(e.resource_id||""),principal_type:String(e.principal_type||""),principal_id:String(e.principal_id||""),permission_key:String(e.permission_key||""),effect:String(e.effect||"allow")==="deny"?"deny":"allow"}}function gl(e){return{id:String(e.id||""),company_id:v(e.company_id||""),resource_type:String(e.resource_type||""),field_key:String(e.field_key||""),role_id:String(e.role_id||""),visibility:["visible","masked","hidden"].includes(e.visibility)?e.visibility:"visible",editable:e.editable!==!1}}function jt(e){return{id:String(e.id||""),company_id:v(e.company_id||""),email:String(e.email||""),role_id:String(e.role_id||""),token:String(e.token||""),status:String(e.status||"pending"),expires_at:e.expires_at||"",invited_by:String(e.invited_by||""),accepted_by:String(e.accepted_by||""),created_at:e.created_at||""}}function qs(e){return{id:String(e.id||""),company_id:v(e.company_id||""),profile_id:String(e.profile_id||""),requested_email:String(e.requested_email||""),status:String(e.status||"pending"),message:String(e.message||""),reviewed_by:String(e.reviewed_by||""),created_at:e.created_at||""}}function oe(e){return{id:String(e.id||""),company_id:v(e.company_id||""),title:String(e.title||"Messages").trim()||"Messages",type:Ia.includes(e.type)?e.type:"custom",created_by:String(e.created_by||""),last_message_at:e.last_message_at||e.updated_at||e.created_at||"",created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function W(e){return{id:String(e.id||""),conversation_id:String(e.conversation_id||""),company_id:v(e.company_id||""),target_type:["all_company","role","profile"].includes(e.target_type)?e.target_type:"profile",target_id:String(e.target_id||""),created_at:e.created_at||""}}function de(e){return{id:String(e.id||""),conversation_id:String(e.conversation_id||""),company_id:v(e.company_id||""),sender_profile_id:String(e.sender_profile_id||e.created_by||""),body:String(e.body||""),message_type:String(e.message_type||"text"),deleted_at:e.deleted_at||"",created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function we(e){return{id:String(e.id||""),conversation_id:String(e.conversation_id||""),message_id:String(e.message_id||""),company_id:v(e.company_id||""),bucket_id:String(e.bucket_id||"quest-message-attachments"),object_path:String(e.object_path||""),file_name:String(e.file_name||"attachment"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:R(e.size_bytes),preview_url:String(e.preview_url||""),created_at:e.created_at||new Date().toISOString()}}function ct(e){return{conversation_id:String(e.conversation_id||""),company_id:v(e.company_id||""),profile_id:String(e.profile_id||""),last_read_at:e.last_read_at||"",updated_at:e.updated_at||e.last_read_at||""}}function Di(e){return{id:e.id,company_id:e.company_id,title:e.title,type:e.type,created_by:e.created_by||y().profile.id,last_message_at:e.last_message_at||null}}function bl(e){return{conversation_id:e.conversation_id,company_id:e.company_id,target_type:e.target_type,target_id:e.target_id}}function _l(e){return{id:e.id,conversation_id:e.conversation_id,company_id:e.company_id,sender_profile_id:e.sender_profile_id,body:e.body,message_type:e.message_type,deleted_at:e.deleted_at||null}}function yl(e){return{id:e.id,conversation_id:e.conversation_id,message_id:e.message_id,company_id:e.company_id,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes}}function vl(e){return{conversation_id:e.conversation_id,company_id:e.company_id,profile_id:e.profile_id,last_read_at:e.last_read_at||new Date().toISOString()}}function hl(e=p()){return Te({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function $l(e=p(),t=""){return Re({id:"",title:"",company_id:e,project_id:t,assignee_id:fe(e)[0]?.id||"abraham",creator_id:y().profile.member_id||"abraham",due:I(1),priority:"medium",status:"todo",type:"admin"})}function wl(e=p()){const t=$e();return ea({id:"",company_id:e,job_id:t?.company_id===e?t.id:"",client_name:t?.company_id===e?t.client_name:"",invoice_number:vc(e),status:"Draft",issue_date:I(0),due_date:I(30),subtotal:t?.company_id===e?t.estimate_total:0,tax:0,notes:""})}function Sl(e=p(),t=""){const a=t?De(t):ke(e).find(n=>ce(n.id)>0),i=a?.company_id===e?a:null;return ta({id:"",company_id:e,invoice_id:i?.id||"",amount:i?ce(i.id):0,method:"ACH",received_at:I(0),reference:"",notes:""})}function kl(e=p(),t=""){return aa({id:"",company_id:e,job_id:$e()?.company_id===e?$e().id:"",vendor_id:t||Va(e)[0]?.id||"",category:"Materials",status:"Pending",amount:0,spent_at:I(0),notes:""})}function Dl(e=p()){return ia({id:"",company_id:e,name:"",category:"Materials",status:"Active"})}function Cl(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function jl(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function y(){return s.session?s.session.auth==="supabase"?s.session:{...s.session,profile:{...ba().profile,...s.session.profile||{},...s.profileDraft||{}}}:ba()}function ql(e,t){const a=!!(e.user.email_confirmed_at||e.user.confirmed_at);return{auth:"supabase",access_token:e.access_token,refresh_token:e.refresh_token,user:{id:e.user.id,email:e.user.email||"",email_confirmed_at:e.user.email_confirmed_at||e.user.confirmed_at||"",email_verified:a},profile:Ga(t||{},{id:e.user.id,email:e.user.email||"",full_name:e.user.user_metadata?.full_name||e.user.email||"Quest user",role:"member",member_id:"",company_ids:[],avatar_url:"",email_verified:a})}}function ba(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",email_verified:!0,...s.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:xe.localUsername,email:e.email},profile:e}}function Ga(e,t={}){const a=String(e.role||t.role||"member").toLowerCase(),i=typeof e.email_verified=="boolean"?e.email_verified:t.email_verified===!0;return{id:String(e.id||t.id||""),email:String(e.email||t.email||""),full_name:String(e.full_name||t.full_name||e.email||t.email||"Quest user"),role:a,role_label:q(a),member_id:String(e.member_id||t.member_id||""),company_ids:Array.isArray(e.company_ids)?ee(e.company_ids.map(v)):t.company_ids||[],avatar_url:String(e.avatar_url||t.avatar_url||""),approved:e.approved!==!1,email_verified:i,supervisor_id:String(e.supervisor_id||t.supervisor_id||"")}}function Za(e){return{id:String(e.id||`notification-${crypto.randomUUID()}`),company_id:v(e.company_id||""),recipient_profile_id:String(e.recipient_profile_id||"basic-quest-user"),type:String(e.type||"general"),title:String(e.title||"Notification"),body:String(e.body||""),href:String(e.href||""),source_type:String(e.source_type||""),source_id:String(e.source_id||""),read_at:String(e.read_at||""),created_at:String(e.created_at||new Date().toISOString())}}function Il(e=y()){return e.auth!=="supabase"?!0:e.user?.email_verified===!0||!!e.user?.email_confirmed_at||e.profile?.email_verified===!0}function z(e,t,a=""){const i=es();return`
    <section class="workspace-head">
      <div class="head-copy">
        <span class="head-symbol">${Y(i)}</span>
        <div>
          <div class="context-line"><span>${o(M(p()))}</span><b>${o(ot(p()))}</b></div>
          <h1>${o(e)}</h1>
          <p>${o(t)}</p>
        </div>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function Ml(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric">${Y(ts(t),"metric-symbol")}<span>${o(t)}</span><strong>${o(a)}</strong></article>`).join("")}</section>`}function Fl(e){return`
    <button class="queue-row" type="button" data-select-job="${o(e.id)}">
      <span><strong>${o(e.name)}</strong><small>${o(e.client_name||M(e.company_id))}</small></span>
      ${Xa(e.priority)}
      <b>${o(e.stage)}</b>
    </button>
  `}function sa(e){return`
    <button class="queue-row" type="button" data-select-task="${o(e.id)}">
      <span><strong>${o(e.title)}</strong><small>${o(F(e.project_id)?.name||M(e.company_id))}</small></span>
      ${Is(e.priority)}
      <b>${o(le(e.status))}</b>
    </button>
  `}function Al(e){return`
    <button class="job-card priority-${o(e.priority.toLowerCase())} ${e.id===s.selectedJobId?"active":""}" type="button" data-select-job="${o(e.id)}">
      <strong>${o(e.name)}</strong>
      <span>${o(e.client_name||"No client")}</span>
      <small>${o(M(e.company_id))} - ${o(e.owner_name||"Unassigned")}</small>
      <em>${o(Zt(e.id))} tasks</em>
    </button>
  `}function pt(e,t,a,i){return`
    <a class="mini-link" href="${b(e)}" data-router>
      <i class="ti ${o(t)}"></i>
      <span><strong>${o(a)}</strong><small>${o(i)}</small></span>
    </a>
  `}function Q(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${o(t)}</span><strong>${o(a)}</strong></div>`).join("")}</div>`}function D(e,t,a="",i=!1,n="text",r=""){return`<label class="${o(r)}"><span>${o(e)}</span><input name="${o(t)}" type="${o(n)}" value="${o(a)}" ${i?"required":""} /></label>`}function me(e,t,a="",i=""){return`<label class="${o(i)}"><span>${o(e)}</span><textarea name="${o(t)}" rows="4">${o(a)}</textarea></label>`}function T(e,t,a,i){return`
    <label><span>${o(e)}</span><select name="${o(t)}">
      ${i.map(([n,r])=>`<option value="${o(n)}" ${String(n)===String(a)?"selected":""}>${o(r)}</option>`).join("")}
    </select></label>
  `}function Xa(e){return`<span class="priority ${o(String(e).toLowerCase())}">${o(e)}</span>`}function Is(e){return`<span class="priority ${o(e)}">${o(q(e))}</span>`}function Ms(e){return`<span class="status-pill ${o(e)}">${o(le(e))}</span>`}function Ol(e){return`<span class="finance-status ${o(ca(e))}">${o(e)}</span>`}function pe(e,t){if(e.avatar_url)return`<span class="${o(t)}"><img src="${o(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(i=>i[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${o(t)}">${o(a)}</span>`}function _(e){return`<div class="empty-state">${Y("q-empty","empty-symbol")}<span>${o(e)}</span></div>`}function X(e,t){const a={};return t.forEach(i=>{const n=e.get(i);n&&(a[i]=n)}),a}function H(){s.session?.auth!=="supabase"&&(w(_a,s.jobs),w(ya,s.tasks),w(va,s.files),w(ha,s.driveFolders),w(Ne,s.forms),w(Mt,s.formResponses),w(Sa,s.financeInvoices),w(ka,s.financePayments),w(Da,s.financeExpenses),w(Ca,s.financeVendors),w(Ft,s.timeEntries),w(At,s.activeTimer),w($a,s.teamMembers),w(wa,s.memberships),w(Ot,s.notifications),w(xt,s.messageConversations),w(Et,s.messageAccess),w(Tt,s.messages),w(Rt,s.messageReads),w(Pt,s.messageAttachments))}function Fs(){s.session?.auth!=="supabase"&&(w(Ft,s.timeEntries),w(At,s.activeTimer))}function ei(){s.session?.auth!=="supabase"&&w(Ot,s.notifications)}function Ce(){s.session?.auth!=="supabase"&&(w(xt,s.messageConversations),w(Et,s.messageAccess),w(Tt,s.messages),w(Rt,s.messageReads),w(Pt,s.messageAttachments))}function ti(e,t,a){if(a==="company")return[W({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"all_company",target_id:"all"})];const i=[];return e.getAll("role_ids").forEach(n=>{n&&i.push(W({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"role",target_id:n}))}),e.getAll("profile_ids").forEach(n=>{n&&i.push(W({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"profile",target_id:n}))}),i.length?i:[W({id:`msg-access-${crypto.randomUUID()}`,company_id:t.company_id,conversation_id:t.id,target_type:"profile",target_id:y().profile.id})]}function na(e,t=!0){if(!e)return;const a=s.messageConversations.find(l=>l.id===e);if(!a)return;const i=new Date().toISOString(),n=y().profile.id,r=ct({conversation_id:e,company_id:a.company_id,profile_id:n,last_read_at:i});if(s.messageReads=[r].concat(s.messageReads.filter(l=>l.conversation_id!==e||l.profile_id!==n)),Ce(),t&&s.session?.auth==="supabase"){const l=A();l&&l.from("message_reads").upsert(vl(r),{onConflict:"conversation_id,profile_id"})}}function As(e,t,a=[]){if(!ii()||t.sender_profile_id!==y().profile.id)return;const i=d("messages",{conversation:e.id},e.company_id),n=xl(t.body);e.type==="direct"&&J("message.direct","New direct message",`${U()} sent a direct message in ${e.title}.`,i,"message",t.id,e.company_id),n.forEach(r=>{Me({company_id:e.company_id,recipient_profile_id:r,type:"message.mention",title:"Mentioned in chat",body:`${U()} mentioned you in ${e.title}.`,href:i,source_type:"message",source_id:t.id})}),a.length&&J("message.attachment","Attachment shared",`${U()} shared ${a.length} attachment${a.length===1?"":"s"} in ${e.title}.`,i,"message",t.id,e.company_id)}function xl(e=""){const t=String(e||"").toLowerCase();return t.includes("@")?nt(p()).filter(a=>t.includes(`@${String(a.name||"").split(/\s+/)[0].toLowerCase()}`)||t.includes(`@${String(a.name||"").toLowerCase()}`)).map(a=>a.profile_id||a.member_id).filter(Boolean):[]}function El(e){const t=zt(e);if(t)return t;const a=s.teamMembers.find(i=>i.id===e);return{id:e,full_name:a?.full_name||a?.name||e||"Quest user",email:a?.email||"",avatar_url:a?.avatar_url||""}}function Ie(e){const t=String(e?.name||"").trim();if(t&&!It(t))return t;const a=String(e?.email||"").trim();return a?a.split("@")[0]||a:"Workspace user"}function Tl(e){return ee([e?.email,e?.role_label||q(e?.role||""),q(e?.status||"")]).join(" / ")||"Company member"}function Ci(e){return{id:e?.profile_id||e?.member_id||"",full_name:Ie(e),email:e?.email||"",avatar_url:e?.avatar_url||""}}function Rl(e){const t=String(e.value||"").trim().toLowerCase(),a=e.closest(".message-modal-form"),i=Array.from(a?.querySelectorAll("[data-message-person-row]")||[]);let n=0;i.forEach(l=>{const c=l.querySelector('input[type="checkbox"]')?.checked,u=!t||String(l.dataset.filterText||"").includes(t),f=c||u;l.hidden=!f,f&&(n+=1)});const r=a?.querySelector("[data-message-filter-count]");r&&(r.textContent=t?`${n} match${n===1?"":"es"}`:`${i.length} member${i.length===1?"":"s"}`)}function Os(e){return{company:"q-symbol-company-chat",role:"q-symbol-role-chat",custom:"q-symbol-messages",direct:"q-symbol-direct-chat"}[e]||"q-symbol-messages"}function ai(e){const t=Na(e.id);if(e.type==="company"||t.some(n=>n.target_type==="all_company"))return"Everyone in this company";const a=t.filter(n=>n.target_type==="role").map(n=>Qe(e.company_id,n.target_id)?.name||"Role"),i=t.filter(n=>n.target_type==="profile").map(n=>Gt(n.target_id));return a.concat(i).slice(0,5).join(", ")||"Private chat"}function Pl(e){return o(e).replace(/(^|\s)@([\w.-]+)/g,"$1<strong>@$2</strong>")}function Nl(e){const t=Number(e||0);return t>=1024*1024?`${(t/1024/1024).toFixed(1)} MB`:t>=1024?`${Math.round(t/1024)} KB`:`${t} B`}function Ul(e){return new Promise(t=>{const a=new FileReader;a.onload=()=>t(String(a.result||"")),a.onerror=()=>t(""),a.readAsDataURL(e)})}function Ll(e,t){const a=A();if(s.session?.auth!=="supabase"||!a?.channel||!t)return;const i=`${e}:${t}`;s.messageRealtimeKey!==i&&(s.messageRealtimeChannel&&a.removeChannel(s.messageRealtimeChannel),s.messageRealtimeKey=i,s.messageRealtimeChannel=a.channel(`quest-messages-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"messages",filter:`conversation_id=eq.${t}`},()=>{s.dataLoaded=!1,m()}).on("postgres_changes",{event:"*",schema:"public",table:"message_attachments",filter:`conversation_id=eq.${t}`},()=>{s.dataLoaded=!1,m()}).subscribe())}function Ql(e){const t=[()=>_t(e,"Crew weather delay","role","Manager posted a weather delay update.",!0),()=>_t(e,"Permit questions","custom","A permit packet PDF was shared.",!1,!0),()=>_t(e,"Shan Kumar","direct","Can you jump on this when you are back?",!0),()=>Vl(e,"@Joshua you were mentioned in the launch room.")],a=Math.floor(Math.random()*t.length);t[a]()}function _t(e,t,a,i,n=!1,r=!1){const l=new Date().toISOString(),c=oe({id:`msg-conv-${crypto.randomUUID()}`,company_id:e,title:t,type:a,created_by:"basic-quest-user",last_message_at:l,created_at:l,updated_at:l}),u=a==="direct"?[W({id:`msg-access-${crypto.randomUUID()}`,company_id:e,conversation_id:c.id,target_type:"profile",target_id:"basic-quest-user"}),W({id:`msg-access-${crypto.randomUUID()}`,company_id:e,conversation_id:c.id,target_type:"profile",target_id:"shan"})]:ti(new FormData,c,a==="role"?"role":"company");s.messageConversations.unshift(c),s.messageAccess=u.concat(s.messageAccess);const f=de({id:`msg-${crypto.randomUUID()}`,conversation_id:c.id,company_id:e,sender_profile_id:n?"shan":"basic-quest-user",body:i,created_at:l,updated_at:l,message_type:r?"attachment":"text"});s.messages.push(f),r&&s.messageAttachments.push(we({id:`msg-attachment-${crypto.randomUUID()}`,conversation_id:c.id,message_id:f.id,company_id:e,file_name:"permit-packet.pdf",mime_type:"application/pdf",size_bytes:42e4,created_at:l})),n||na(c.id,!1),s.selectedConversationId=c.id,Ce(),N("Demo message scenario added.","local","Messages"),k(d("messages",{conversation:c.id},e),{replace:!0})}function Vl(e,t){const a=ps(e)||Ue(e)[0];if(!a)return _t(e,"Demo chat","company",t,!0);const i=new Date().toISOString(),n=de({id:`msg-${crypto.randomUUID()}`,conversation_id:a.id,company_id:e,sender_profile_id:"shan",body:t,created_at:i,updated_at:i});s.messages.push(n),s.messageConversations=s.messageConversations.map(r=>r.id===a.id?{...r,last_message_at:i,updated_at:i}:r),As(a,n,[]),Ce(),N("Demo mention added.","local","Messages"),m()}function Bl(){s.messageConversations=Ma.map(oe),s.messageAccess=Fa.map(W),s.messages=Aa.map(de),s.messageReads=xa.map(ct),s.messageAttachments=Oa.map(we),s.selectedConversationId="",Ce(),N("Demo messages reset.","local","Messages"),m()}function ii(){return s.session?.auth!=="supabase"}function Me(e){if(!ii())return null;const t=Za({id:`notification-${crypto.randomUUID()}`,company_id:p(),recipient_profile_id:y().profile.id,created_at:new Date().toISOString(),...e});return s.notifications=[t].concat(s.notifications.filter(a=>a.id!==t.id)).slice(0,100),ei(),t}function Jl(e=p()){const t=new Date().toISOString(),a=y().profile.id;s.notifications=s.notifications.map(i=>i.company_id===e&&i.recipient_profile_id===a&&!i.read_at?{...i,read_at:t}:i),ei()}function zl(e){const t=s.notifications.find(a=>a.id===e);t&&(s.notifications=s.notifications.map(a=>a.id===t.id?{...a,read_at:a.read_at||new Date().toISOString()}:a),s.notificationMenuOpen=!1,ei(),t.href&&k(t.href))}function ji(e,t=null){if(!ii())return;const a=d("tasks",{...e.project_id?{job_id:e.project_id}:{},task_id:e.id},e.company_id),i=K(e.assignee_id);if(!t){Me({company_id:e.company_id,type:"task.assigned",title:"Task assigned",body:`${U()} assigned ${e.title} to ${i}.`,href:a,source_type:"task",source_id:e.id});return}t.assignee_id!==e.assignee_id&&Me({company_id:e.company_id,type:"task.assigned",title:"Task reassigned",body:`${U()} reassigned ${e.title} to ${i}.`,href:a,source_type:"task",source_id:e.id}),t.priority!==e.priority&&Me({company_id:e.company_id,type:"task.priority",title:"Task priority changed",body:`${U()} set priority to ${q(e.priority)} on ${e.title}.`,href:a,source_type:"task",source_id:e.id}),t.status!==e.status&&Me({company_id:e.company_id,type:"task.status",title:"Task status changed",body:`${U()} moved ${e.title} to ${le(e.status)}.`,href:a,source_type:"task",source_id:e.id})}function J(e,t,a,i,n="",r="",l=p()){Me({company_id:l,type:e,title:t,body:a,href:i,source_type:n,source_id:r})}function U(){return y().profile.full_name||y().profile.email||"Quest HQ"}function C(e,t,a=""){return`<article class="metric">${Y(ts(e),"metric-symbol")}<span>${o(e)}</span><strong>${o(t)}</strong>${a?`<small>${o(a)}</small>`:""}</article>`}function ve(e,t){return`<div><strong>${o(e)}</strong><span>${o(t)}</span></div>`}function Oe(e,t,a,i,n=""){const r=`
    <span><strong>${o(e)}</strong><small>${o(t||"Finance record")}</small></span>
    <b>${o(a)}</b>
    <em>${x(i)}</em>
  `;return n?`<a class="finance-compact-row" href="${b(n)}" data-router>${r}</a>`:`<div class="finance-compact-row">${r}</div>`}function qi(e,t){const a=Se(e);return t==="jobs"?a.filter(i=>i.job_id).length:a.filter(i=>i.folder===t).length}function xs(e="home",t=null){return t?.id?`job:${t.id}`:e||"home"}function Hl(e,t="home",a=null){const i=xs(t,a),n=Ye(e).filter(r=>r.parent_key===i).map(r=>Wl(e,r));return a?n:t==="home"?ja.map(([l,c,u,f])=>({id:l,name:c,caption:u,icon:f,href:b(d("files",{folder:l},e)),countLabel:`${qi(e,l)} file${qi(e,l)===1?"":"s"}`,updatedLabel:""})).concat(n):t==="jobs"?P(e).map(l=>({id:`job:${l.id}`,name:l.name,caption:l.client_name||M(e),icon:"ti-folder",href:b(d("files",{folder:"jobs",job_id:l.id},e)),countLabel:`${Dt(l.id)} file${Dt(l.id)===1?"":"s"}`,updatedLabel:x(l.updated_at)})).concat(n):n}function Wl(e,t){const a=Ye(e).filter(r=>r.parent_key===t.id).length,i=Se(e).filter(r=>r.folder===t.id).length,n=a+i;return{id:t.id,name:t.name,caption:"Custom folder",icon:"ti-folder",href:b(d("files",{folder:t.id},e)),countLabel:`${n} item${n===1?"":"s"}`,updatedLabel:x(t.updated_at)}}function Yl(e,t,a=null){if(a)return`<span>/</span><a href="${b(d("files",{folder:"jobs"},e))}" data-router>Jobs</a>`;const i=Ye(e).find(u=>u.id===t);if(!i)return`<span>/</span><strong>${o(se(t))}</strong>`;const n=[];let r=i;const l=new Set;for(;r&&!l.has(r.id);)l.add(r.id),n.unshift(r),r=Ye(e).find(u=>u.id===r.parent_key);return`${i.parent_key&&!i.parent_key.startsWith("folder-")&&i.parent_key!=="home"?`<span>/</span><a href="${b(d("files",{folder:i.parent_key},e))}" data-router>${o(se(i.parent_key))}</a>`:""}${n.map((u,f)=>`<span>/</span>${f===n.length-1?`<strong>${o(u.name)}</strong>`:`<a href="${b(d("files",{folder:u.id},e))}" data-router>${o(u.name)}</a>`}`).join("")}`}function Kl(e=p(),t="home",a=""){const i=(s.fileQuery||s.query||"").trim().toLowerCase(),n=s.fileCategoryFilter;let r=Se(e);return a?r=r.filter(l=>l.job_id===a):t&&t!=="home"&&(t==="jobs"?r=r.filter(l=>l.job_id):r=r.filter(l=>l.folder===t)),n&&n!=="All categories"&&(r=r.filter(l=>String(l.category||se(l.folder)).toLowerCase()===n.toLowerCase())),i&&(r=r.filter(l=>[l.file_name,l.category,l.uploaded_by_label,l.notes,l.object_path,F(l.job_id)?.name].some(c=>String(c||"").toLowerCase().includes(i)))),r.sort((l,c)=>new Date(c.created_at||0)-new Date(l.created_at||0))}function je(e){const t=String(e.mime_type||"").toLowerCase(),a=Es(e);return t.includes("pdf")||a==="pdf"?"PDF":t.includes("image")||["png","jpg","jpeg","gif","webp","svg"].includes(a)?"Image":t.includes("zip")||["zip","rar","7z"].includes(a)?"Archive":t.includes("spreadsheet")||t.includes("excel")||["xls","xlsx","csv"].includes(a)?"Excel":t.includes("word")||["doc","docx"].includes(a)?"Word":t.includes("text")||["txt","md","json","csv","log"].includes(a)?"Text":t.includes("presentation")||["ppt","pptx"].includes(a)?"PowerPoint":a?a.toUpperCase():se(e.folder)}function si(e){const t=je(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="excel"?"sheet":t==="text"?"text":["word","powerpoint"].includes(t)?"doc":t==="archive"?"zip":"doc"}function Es(e){return String(e.file_name||"").split(".").pop()?.toLowerCase()||""}function ni(e,t=!1){const a=Qs(e);return e.signed_url?`<img src="${o(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${o(si(e))} ${t?"large":""}"><i class="ti ${o(a)}"></i></span>`}function Gl(e){const t=je(e),a=Es(e);return t==="Image"?a&&a.length<=4?a.toUpperCase():"IMG":t==="Archive"?a&&a.length<=3?a.toUpperCase():"ZIP":t==="Excel"?a==="csv"?"CSV":"XLS":t==="Word"?"DOC":t==="PowerPoint"?"PPT":t==="Text"?a&&a.length<=4?a.toUpperCase():"TXT":t.length<=4?t.toUpperCase():(a||"FILE").slice(0,4).toUpperCase()}function _e(e=p()){return s.forms.filter(t=>t.company_id===e)}function Zl(e=p()){const t=s.formQuery.trim().toLowerCase(),a=s.route?.jobId||"";return _e(e).filter(i=>a&&i.linked_job_id!==a||s.formTypeFilter!=="all"&&i.type!==s.formTypeFilter?!1:t?[i.title,i.description,i.type,i.status,i.audience,F(i.linked_job_id)?.name].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function Ge(e=p()){const t=s.route?.jobId||"",a=_e(e).filter(r=>!t||r.linked_job_id===t),i=s.route?.params?.get("form_id")||"";if(i&&a.some(r=>r.id===i)&&(s.selectedFormId=i),!a.length)return s.selectedFormId="",s.selectedQuestionId="",null;let n=a.find(r=>r.id===s.selectedFormId)||a[0];return s.selectedFormId=n.id,(!s.selectedQuestionId||!n.questions.some(r=>r.id===s.selectedQuestionId))&&(s.selectedQuestionId=n.questions[0]?.id||""),n}function qe(e){return s.forms.find(t=>t.id===e)||null}function re(){return qe(s.selectedFormId)||Ge(p())}function Ts(e=p()){return s.formResponses.filter(t=>t.company_id===e)}function oa(e){return s.formResponses.filter(t=>t.form_id===e)}function Rs(e){return Array.isArray(e?.questions)?e.questions.length:0}function Xl(e){const t=String(e?.creator_id||""),a=y().profile;return t?t&&(t===a.member_id||t===a.id)?a.full_name||"Quest Basic Mode":K(t):e?.created_by_label||a.full_name||"Quest HQ"}function ze(e,t,a="",i=!1,n="text"){return`<label><span>${o(e)}</span><input data-form-field="${o(t)}" type="${o(n)}" value="${o(a)}" ${i?"required":""} /></label>`}function Ps(e,t,a=""){return`<label><span>${o(e)}</span><textarea data-form-field="${o(t)}" rows="3">${o(a)}</textarea></label>`}function ut(e,t,a,i){return`
    <label><span>${o(e)}</span><select data-form-field="${o(t)}">
      ${i.map(([n,r])=>`<option value="${o(n)}" ${String(n)===String(a)?"selected":""}>${o(r)}</option>`).join("")}
    </select></label>
  `}function Ze(e){return["multiple","checkbox","dropdown"].includes(e.type)}function ec(e){return{short:"ti-letter-t",paragraph:"ti-align-left",multiple:"ti-circle-dot",checkbox:"ti-checkbox",dropdown:"ti-select",date:"ti-calendar",rating:"ti-star",yesno:"ti-circle-check",file:"ti-paperclip"}[e]||"ti-plus"}function tc(e){return it.find(([t])=>t===e)?.[1]||q(e||"Question")}function ne(e,t){return`
    <div class="response-question">
      <label>
        <span>${o(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${o(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function Ns(e){const t=qe(e.form_id),a=Object.entries(e.answers||{}).map(([i,n])=>{const r=t?.questions.find(c=>c.id===i),l=Array.isArray(n)?n.join(", "):n;return ve(r?.label||i,l||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${o(t?.title||"Response")}</h2><p>${o(e.submitted_by||e.submitter_email||"Anonymous")} / ${x(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||ve("Response","No answers captured.")}</div>
  `}function He(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[B("short","Inspection address"),B("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),B("paragraph","Recommended scope"),B("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[B("short","Client name"),B("yesno","Approved to proceed?"),B("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[B("short","Request title"),B("dropdown","Priority",["Low","Medium","High","Urgent"]),B("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[B("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),B("yesno","Weather safe?"),B("paragraph","Safety notes")]}]}function ac(e=p()){return lt({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:s.route?.jobId||"",theme_color:be(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[B("short","First question")]})}function B(e="short",t="Untitled question",a=[]){return Xt({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function ic(e,t={}){const a=ac(e),i=lt({...a,...t,id:t.id||`form-${crypto.randomUUID()}`,company_id:e,questions:(t.questions||a.questions).map(n=>Xt(n)),created_at:t.created_at||new Date().toISOString(),updated_at:new Date().toISOString()});return s.forms.unshift(i),s.selectedFormId=i.id,s.selectedQuestionId=i.questions[0]?.id||"",s.formsTab="builder",s.formEditorTab="questions",s.modal="",s.formStartTemplateId="",s.formStartTab="blank",G("New form created"),m(),i}function sc(e){const t=Object.fromEntries(new FormData(e).entries()),a=t.template_id?He().find(l=>l.id===t.template_id):null,i=String(t.title||a?.title||"Untitled form").trim()||"Untitled form",n=String(t.description||a?.description||"").trim(),r=a?a.questions.map(l=>({...qt(l),id:`q-${crypto.randomUUID()}`})):[B("short","First question")];ic(p(),{title:i,description:n,type:at.includes(t.type)?t.type:a?.type||"Internal",audience:String(t.audience||"Internal").trim()||"Internal",creator_id:y().profile.member_id||y().profile.id||"basic-quest-user",linked_job_id:String(t.linked_job_id||""),theme_color:be(p()),background:"clean",submit_label:String(t.submit_label||"Submit").trim()||"Submit",collect_email:t.collect_email==="on",require_approval:t.require_approval==="on",questions:r})}function ft(e,t=!0){const a=qe(e);a&&(s.selectedFormId=a.id,s.selectedQuestionId=a.questions[0]?.id||"",t&&m())}function G(e="Forms saved locally"){const t=re();t&&(t.updated_at=new Date().toISOString()),w(Ne,s.forms),w(Mt,s.formResponses),s.sync={label:e,mode:"live"}}function Ii(e,t){const a=qe(e||s.selectedFormId);a&&(a.status=qa.includes(t)?t:"Draft",s.selectedFormId=a.id,G(`${a.status} locally`),m())}function nc(e){const t=qe(e||s.selectedFormId);if(!t)return;const a=lt({...qt(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(i=>({...qt(i),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});s.forms.unshift(a),s.selectedFormId=a.id,s.selectedQuestionId=a.questions[0]?.id||"",G("Form duplicated"),m()}function oc(e){const t=e||s.selectedFormId;t&&(s.forms=s.forms.filter(a=>a.id!==t),s.formResponses=s.formResponses.filter(a=>a.form_id!==t),s.selectedFormId=_e(p())[0]?.id||"",s.selectedQuestionId=Ge(p())?.questions[0]?.id||"",s.modal="",G("Form deleted locally"),m())}async function rc(e){const t=e||s.selectedFormId,a=`${window.location.origin}${b(d("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),s.sync={label:"Form link copied",mode:"live"}}catch{s.sync={label:"Copy failed",mode:"local"}}m()}function lc(e){const t=JSON.stringify({company_id:e,forms:_e(e),responses:Ts(e)},null,2);bc(`${e}-forms-export.json`,t,"application/json")}function Us(e){const t=re();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),w(Ne,s.forms))}function Ls(e){const t=re(),a=e.closest("[data-question-id]"),i=t?.questions.find(n=>n.id===a?.dataset.questionId);if(!(!t||!i)){if(s.selectedQuestionId=i.id,e.matches("[data-question-option]")){const n=Number(e.dataset.questionOption);i.options[n]=e.value}else{const n=e.dataset.questionField;if(n==="required")i.required=e.checked;else if(n==="type"){i.type=e.value,Ze(i)&&!i.options.length&&(i.options=["Option 1","Option 2"]),Ze(i)||(i.options=[]),G("Question updated"),m();return}else n&&(i[n]=e.value)}t.updated_at=new Date().toISOString(),w(Ne,s.forms)}}function cc(e="multiple"){const t=re();if(!t)return;const a=B(e,it.find(([i])=>i===e)?.[1]||"New question");t.questions.push(a),s.selectedQuestionId=a.id,G("Question added"),m()}function dc(e){const t=re(),a=t?.questions.find(r=>r.id===e);if(!t||!a)return;const i=t.questions.findIndex(r=>r.id===e),n=Xt({...qt(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(i+1,0,n),s.selectedQuestionId=n.id,G("Question duplicated"),m()}function mc(e){const t=re();t&&(t.questions=t.questions.filter(a=>a.id!==e),s.selectedQuestionId=t.questions[0]?.id||"",G("Question deleted"),m())}function pc(e,t){const a=re();if(!a||!t)return;const i=a.questions.findIndex(l=>l.id===e),n=i+t;if(i<0||n<0||n>=a.questions.length)return;const[r]=a.questions.splice(i,1);a.questions.splice(n,0,r),s.selectedQuestionId=e,G("Question moved"),m()}function uc(e){const a=re()?.questions.find(i=>i.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),G("Option added"),m())}function fc(e,t){const i=re()?.questions.find(n=>n.id===e);!i||t<0||(i.options.splice(t,1),i.options.length||i.options.push("Option 1"),G("Option removed"),m())}function gc(e){const t=qe(e.dataset.formId);if(!t)return;const a=new FormData(e),i={};t.questions.forEach(n=>{const r=`answer:${n.id}`,l=a.getAll(r).filter(c=>c instanceof File?c.name:String(c||"").trim());i[n.id]=l.length>1?l.map(c=>c instanceof File?c.name:c):l[0]instanceof File?l[0].name:l[0]||""}),s.formResponses.unshift(Ya({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||y().profile.full_name||"Preview submitter"),answers:i,created_at:new Date().toISOString()})),s.formsTab="responses",s.modal="",G("Preview response saved"),J(t.require_approval?"approval.form":"form.response",t.require_approval?"Form approval ready":"Form response saved",`${U()} saved a response for ${t.title}.`,d("forms",{form_id:t.id,tab:"responses"},t.company_id),"form_response",t.id,t.company_id),m()}function bc(e,t,a="text/plain"){const i=new Blob([t],{type:a}),n=URL.createObjectURL(i),r=document.createElement("a");r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}function qt(e){return JSON.parse(JSON.stringify(e))}function ee(e){return Array.from(new Set(e.map(t=>String(t||"").trim()).filter(Boolean)))}function le(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||q(e)}function dt(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||q(e)}function se(e){return ja.find(([t])=>t===e)?.[1]||s.driveFolders.find(t=>t.id===e)?.name||q(e||"Shared")}function _c(e=p()){return ja.map(([t,a])=>[t,a]).concat(Ye(e).map(t=>[t.id,t.name]))}function yc(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Qs(e){const t=je(e);return t==="Image"?"ti-photo":t==="PDF"?"ti-file-type-pdf":t==="Archive"?"ti-file-zip":t==="Excel"?"ti-file-spreadsheet":t==="Word"?"ti-file-type-doc":t==="PowerPoint"?"ti-file-type-ppt":t==="Text"?"ti-file-text":"ti-file-description"}function q(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function I(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function x(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function Mi(e){if(!e)return"No time";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(t)}function ra(e){const t=new Date(e);if(!e||Number.isNaN(t.getTime()))return"just now";const a=Math.max(0,Math.floor((Date.now()-t.getTime())/1e3));if(a<45)return"just now";const i=Math.floor(a/60);if(i<60)return`${i}m ago`;const n=Math.floor(i/60);if(n<24)return`${n}h ago`;const r=Math.floor(n/24);return r<7?`${r}d ago`:x(e)}function gt(e){const t=Math.max(0,Math.floor(R(e)/1e3)),a=Math.floor(t/3600),i=Math.floor(t%3600/60);return a?`${a}h ${String(i).padStart(2,"0")}m`:`${i}m`}function oi(e){const t=R(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],i=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**i).toFixed(i?1:0)} ${a[i]}`}function Xe(e){return(t,a)=>Date.parse(a[e]||a.updated_at||a.created_at||0)-Date.parse(t[e]||t.updated_at||t.created_at||0)}function Vs(e){if(!e)return 0;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?0:Math.floor((la().getTime()-t.getTime())/864e5)}function Fi(e){if(!e)return 999;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?999:Math.floor((t.getTime()-la().getTime())/864e5)}function vc(e=p()){const t=(Kt(Yt(e)||{short_name:e})||e||"QH").replace(/[^a-z]/gi,"").slice(0,2).toUpperCase()||"QH",a=ke(e).length+1;return`${t}-${String(1e3+a)}`}function la(){const e=new Date;return e.setHours(0,0,0,0),e}function hc(e,t){return`${Bs(e,t)}%`}function Bs(e,t){const a=R(t);return a?Math.max(0,Math.min(100,Math.round(R(e)/a*100))):0}function Pe(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function ca(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function ie(e,t){return e.reduce((a,i)=>a+R(i[t]),0)}function R(e){const t=Number(e);return Number.isFinite(t)?t:0}function ri(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(e||""))}function It(e){const t=String(e||"").trim();return ri(t)||/^[0-9a-f]{8,}$/i.test(t)||/^user[_-]?[0-9a-f-]{8,}$/i.test(t)}function $c(e){const t=String(e||"").trim();return t?t.slice(0,8):""}function h(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(R(e))}function he(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function S(e,t){const a=he(e,t);return Array.isArray(a)&&a.length?a:t}function w(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function o(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
