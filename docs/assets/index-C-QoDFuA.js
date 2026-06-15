(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const le={buildId:"Quest HQ Company Workspace v1",localUsername:"lumen123",localPassword:"lumen123",supabaseUrl:"https://lpzotcznihwyyudxycmd.supabase.co",supabaseKey:"sb_publishable_Gd1aHMtItu-7daoq2YofeA_9wl1pQ07"},be=new URL("/quest-hq-command-center/",window.location.origin).pathname.replace(/\/$/,""),Ve="quest-hq-local-session",aa="quest-hq-local-profile",na="quest-hq-job-cache-v2",ia="quest-hq-task-cache-v1",sa="quest-hq-file-cache-v1",oa="quest-hq-drive-folder-cache-v1",ra="quest-hq-team-cache-v1",la="quest-hq-company-membership-cache-v1",Ce="quest-hq-company-form-cache-v1",ft="quest-hq-company-form-response-cache-v1",da="quest-hq-finance-invoice-cache-v1",ca="quest-hq-finance-payment-cache-v1",pa="quest-hq-finance-expense-cache-v1",ua="quest-hq-finance-vendor-cache-v1",bt="quest-hq-time-entry-cache-v1",gt="quest-hq-active-timer-v1",We="quest-hq-active-company",ma="quest-hq-task-view",fa="quest-hq-drive-view",Rt={developer:["*"],admin:["*"],manager:["jobs.manage","tasks.manage","files.manage","forms.manage","finance.view","team.view","clock.manage","approvals.manage","approvals.view","users.view","settings.view"],member:["jobs.view","tasks.manage","files.view","forms.view","time.track","approvals.view","users.view"]},vt=[{id:"jobs",group:"Workspace",label:"Jobs",icon:"ti-briefcase",symbol:"q-symbol-jobs",status:"live",permission:"jobs.view"},{id:"tasks",group:"Workspace",label:"Tasks",icon:"ti-list-check",symbol:"q-symbol-tasks",status:"live",permission:"tasks.manage"},{id:"files",group:"Workspace",label:"Files",icon:"ti-folder",symbol:"q-symbol-files",status:"live",permission:"files.view"},{id:"forms",group:"Workspace",label:"Forms",icon:"ti-clipboard-list",symbol:"q-symbol-forms",status:"live",permission:"forms.view"},{id:"analytics",group:"Workspace",label:"Analytics",icon:"ti-chart-bar",symbol:"q-symbol-analytics",status:"live",permission:"jobs.view"},{id:"crm",group:"Workspace",label:"CRM",icon:"ti-users-group",symbol:"q-symbol-crm",status:"live",permission:"jobs.view"},{id:"tickets",group:"Workspace",label:"Tickets",icon:"ti-ticket",symbol:"q-symbol-tickets",status:"planned"},{id:"finance",group:"Workspace",label:"Finance",icon:"ti-receipt-dollar",symbol:"q-symbol-finance",status:"live",permission:"finance.view"},{id:"knowledge",group:"Workspace",label:"Knowledge Base",icon:"ti-books",symbol:"q-symbol-knowledge",status:"planned"},{id:"automations",group:"Workspace",label:"Automations",icon:"ti-automation",symbol:"q-symbol-automations",status:"planned"},{id:"templates",group:"Workspace",label:"Templates",icon:"ti-template",symbol:"q-symbol-templates",status:"planned"},{id:"users",group:"Company",label:"Users",icon:"ti-users",symbol:"q-symbol-users",status:"live",permission:"users.view"},{id:"settings",group:"Company",label:"Settings",icon:"ti-settings",symbol:"q-symbol-settings",status:"live",permission:"settings.view"},{id:"team-chart",group:"Company",label:"Team chart",icon:"ti-hierarchy-3",symbol:"q-symbol-team-chart",status:"live",permission:"team.view"},{id:"time",group:"Operations",label:"My time",icon:"ti-clock",symbol:"q-symbol-time",status:"live",permission:"time.track"},{id:"approvals",group:"Operations",label:"Approvals",icon:"ti-user-check",symbol:"q-symbol-approvals",status:"live",permission:"approvals.view"},{id:"team-workload",group:"Operations",label:"Team workload",icon:"ti-users",symbol:"q-symbol-team-workload",status:"planned"},{id:"clock",group:"Operations",label:"Clock dashboard",icon:"ti-clock-hour-4",symbol:"q-symbol-clock",status:"live",permission:"clock.manage"}],an={"/admin.html":"settings","/automations.html":"automations","/crm.html":"crm","/dashboards.html":"analytics","/files.html":"files","/finance.html":"finance","/forms.html":"forms","/jobs.html":"jobs","/knowledge.html":"knowledge","/templates.html":"templates","/tickets.html":"tickets"},Ie=["Lead","Site Review","Estimate","Approved","Active","Closed"],ba=["pipeline","list","profile"],qe=["todo","pending","hold","review","done"],Je=["critical","urgent","high","medium","low"],ga=["lead","bid","admin","invoicing","ar","meeting","web_dev"],nn=["All categories","Shared","Jobs","Forms","Photos","Permits","Contracts","Archive"],yt=[["jobs","Jobs","Job-linked folders and deliverables","ti-folders"],["shared","Shared","Company-wide files","ti-folder-share"],["forms","Forms","Completed forms and templates","ti-clipboard-list"],["photos","Photos","Site photos and field media","ti-photo"],["permits","Permits","Permit packets and approvals","ti-file-certificate"],["contracts","Contracts","Signed agreements and estimates","ti-file-dollar"],["archive","Archive","Closed or historical files","ti-archive"]],xe=["Inspection","Client approval","Intake","Survey","Safety","Internal"],ht=["Draft","Published","Archived"],va=["Draft","Sent","Partially paid","Paid","Overdue","Void"],ya=["Pending","Approved","Paid","Rejected"],ha=["Active","On hold","Inactive"],_a=["ACH","Check","Card","Cash","Wire","Other"],Ke=["Materials","Labor","Subcontractor","Permit","Equipment","Marketing","Software","Travel","Other"],Te=[["short","Short answer"],["paragraph","Paragraph"],["multiple","Multiple choice"],["checkbox","Checkboxes"],["dropdown","Dropdown"],["date","Date"],["rating","Rating"],["yesno","Yes / No"],["file","File upload"]],ge=[{id:"roofing",name:"Quest Roofing",short_name:"Roofing",color:"#f0b23b"},{id:"drafting",name:"Quest Drafting",short_name:"Drafting",color:"#60a5fa"},{id:"lumen",name:"Lumen Marketing",short_name:"Lumen",color:"#a78bfa"}],sn=[{id:"11111111-1111-4111-8111-111111111111",company_id:"roofing",name:"Queen Creek Leak Follow-up",client_name:"Rosales Residence",contact_name:"Maya Rosales",site_address:"Queen Creek, AZ",job_type:"Roofing repair",stage:"Active",priority:"Urgent",owner_name:"Andre Lee",scope:"Emergency leak inspection, dry-in, and repair proposal.",notes:"Client reported active leak after monsoon storm.",estimate_total:6800,invoice_total:0,task_count:4,file_count:5,updated_at:new Date().toISOString()},{id:"22222222-2222-4222-8222-222222222222",company_id:"roofing",name:"Mesa Storage Roof Repair",client_name:"Mesa Storage Partners",contact_name:"D. Harris",site_address:"Mesa, AZ",job_type:"Commercial repair",stage:"Estimate",priority:"High",owner_name:"Maya Rosales",scope:"Inspect roof membrane, prepare repair estimate, and attach permit packet.",notes:"Board wants estimate and permit notes before approval.",estimate_total:18400,invoice_total:0,task_count:3,file_count:4,updated_at:new Date(Date.now()-864e5).toISOString()},{id:"33333333-3333-4333-8333-333333333333",company_id:"drafting",name:"Drafting Permit Package",client_name:"Horizon HVAC",contact_name:"Noah Park",site_address:"Chandler, AZ",job_type:"Drafting",stage:"Site Review",priority:"Medium",owner_name:"Noah Park",scope:"Prepare drawing package and client approval form.",notes:"Waiting on latest measurements.",estimate_total:4200,invoice_total:0,task_count:2,file_count:3,updated_at:new Date(Date.now()-1728e5).toISOString()}],on=[{id:"abraham",name:"Abraham",full_name:"Abraham Flores",email:"abraham@quest-hq.local",color:"#f0b23b",active:!0,company_ids:["roofing","drafting"],supervisor_id:""},{id:"maya",name:"Maya",full_name:"Maya Rosales",email:"maya@quest-hq.local",color:"#60a5fa",active:!0,company_ids:["roofing"],supervisor_id:"abraham"},{id:"andre",name:"Andre",full_name:"Andre Lee",email:"andre@quest-hq.local",color:"#f97316",active:!0,company_ids:["roofing"],supervisor_id:"maya"},{id:"noah",name:"Noah",full_name:"Noah Park",email:"noah@quest-hq.local",color:"#a78bfa",active:!0,company_ids:["drafting"],supervisor_id:"abraham"},{id:"lumen-ops",name:"Lumen Ops",full_name:"Lumen Operations",email:"ops@lumen.local",color:"#7c3aed",active:!0,company_ids:["lumen"],supervisor_id:""}],rn=[{company_id:"roofing",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"drafting",profile_id:"basic-quest-user",role:"developer",status:"active"},{company_id:"lumen",profile_id:"basic-quest-user",role:"developer",status:"active"}],ln=[{id:"task-roofing-leak-1",title:"Call client and confirm active leak area",description:"Confirm access window, roof area, and whether temporary dry-in is still holding.",type:"lead",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"abraham",assignee_id:"maya",due:y(0),priority:"urgent",urgency:"urgent",status:"todo"},{id:"task-roofing-leak-2",title:"Upload inspection photos",description:"Attach site photos to the company drive and tag the Queen Creek job folder.",type:"admin",company_id:"roofing",project_id:"11111111-1111-4111-8111-111111111111",creator_id:"maya",assignee_id:"andre",due:y(1),priority:"high",urgency:"high",status:"pending"},{id:"task-roofing-mesa-1",title:"Prepare repair estimate packet",description:"Draft scope, estimate total, and permit notes for board review.",type:"bid",company_id:"roofing",project_id:"22222222-2222-4222-8222-222222222222",creator_id:"abraham",assignee_id:"maya",due:y(3),priority:"high",urgency:"high",status:"review"},{id:"task-drafting-package-1",title:"Request final measurements",description:"Get latest field measurements before starting permit drawings.",type:"admin",company_id:"drafting",project_id:"33333333-3333-4333-8333-333333333333",creator_id:"abraham",assignee_id:"noah",due:y(2),priority:"medium",urgency:"medium",status:"hold"},{id:"task-lumen-ops-1",title:"Create client onboarding checklist",description:"Internal Lumen setup task to prove company workspace isolation.",type:"meeting",company_id:"lumen",project_id:"",creator_id:"abraham",assignee_id:"lumen-ops",due:y(5),priority:"medium",urgency:"medium",status:"todo"}],dn=[{id:"file-roofing-1",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",folder:"photos",file_name:"queen-creek-leak-photos.zip",mime_type:"application/zip",size_bytes:184e5,category:"Photos",uploaded_by_label:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString()},{id:"file-roofing-2",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",folder:"permits",file_name:"mesa-storage-permit-notes.pdf",mime_type:"application/pdf",size_bytes:86e4,category:"Permits",uploaded_by_label:"Andre Lee",created_at:new Date(Date.now()-864e5).toISOString()},{id:"file-drafting-1",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",folder:"contracts",file_name:"horizon-hvac-drawing-agreement.pdf",mime_type:"application/pdf",size_bytes:42e4,category:"Contracts",uploaded_by_label:"Noah Park",created_at:new Date(Date.now()-1728e5).toISOString()},{id:"file-lumen-1",company_id:"lumen",job_id:"",folder:"shared",file_name:"lumen-shared-brand-assets.zip",mime_type:"application/zip",size_bytes:32e5,category:"Shared",uploaded_by_label:"Lumen Operations",created_at:new Date(Date.now()-2592e5).toISOString()}],cn=[{id:"form-roofing-inspection",company_id:"roofing",title:"Roof Inspection Checklist",description:"Field checklist for leak calls, roof condition notes, photos, and repair recommendations.",type:"Inspection",status:"Published",audience:"Field team",creator_id:"abraham",linked_job_id:"11111111-1111-4111-8111-111111111111",theme_color:"#f0b23b",background:"paper",submit_label:"Submit inspection",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString(),questions:[{id:"q-roof-1",type:"short",label:"Inspection address",help:"Confirm the address before submitting.",required:!0},{id:"q-roof-2",type:"multiple",label:"Primary roof condition",help:"",required:!0,options:["Active leak","Storm damage","Aged underlayment","Maintenance issue"]},{id:"q-roof-3",type:"paragraph",label:"Recommended scope",help:"Write the repair or estimate recommendation.",required:!0},{id:"q-roof-4",type:"file",label:"Attach inspection photos",help:"Upload photos into the company drive after submit.",required:!1}]},{id:"form-roofing-estimate-approval",company_id:"roofing",title:"Estimate Approval",description:"Client-facing approval form for estimate review and signature follow-up.",type:"Client approval",status:"Draft",audience:"Client",creator_id:"maya",linked_job_id:"22222222-2222-4222-8222-222222222222",theme_color:"#f45d22",background:"clean",submit_label:"Approve estimate",collect_email:!0,require_approval:!0,created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString(),questions:[{id:"q-est-1",type:"short",label:"Client name",required:!0},{id:"q-est-2",type:"yesno",label:"Do you approve the attached estimate?",required:!0},{id:"q-est-3",type:"paragraph",label:"Questions or requested changes",required:!1}]},{id:"form-drafting-intake",company_id:"drafting",title:"Drafting Permit Intake",description:"Collect measurements, equipment details, and permit packet requirements.",type:"Intake",status:"Published",audience:"Client",creator_id:"noah",linked_job_id:"33333333-3333-4333-8333-333333333333",theme_color:"#60a5fa",background:"grid",submit_label:"Send intake",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString(),questions:[{id:"q-draft-1",type:"short",label:"Project address",required:!0},{id:"q-draft-2",type:"paragraph",label:"Permit notes",required:!1},{id:"q-draft-3",type:"date",label:"Needed by",required:!0}]},{id:"form-lumen-onboarding",company_id:"lumen",title:"Client Onboarding Intake",description:"Initial Lumen setup form for client goals, assets, users, and launch timing.",type:"Intake",status:"Draft",audience:"Client",creator_id:"lumen-ops",linked_job_id:"",theme_color:"#a78bfa",background:"clean",submit_label:"Submit onboarding",collect_email:!0,require_approval:!1,created_at:new Date(Date.now()-3456e5).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString(),questions:[{id:"q-lumen-1",type:"short",label:"Company name",required:!0},{id:"q-lumen-2",type:"checkbox",label:"Needed services",required:!0,options:["Website","SEO","Paid ads","CRM setup"]},{id:"q-lumen-3",type:"paragraph",label:"Launch goals",required:!1}]}],pn=[{id:"response-roofing-1",company_id:"roofing",form_id:"form-roofing-inspection",submitted_by:"Maya Rosales",created_at:new Date(Date.now()-36e5).toISOString(),answers:{"q-roof-1":"Queen Creek, AZ","q-roof-2":"Active leak","q-roof-3":"Dry-in held. Prepare repair estimate and photo packet."}}],un=[{id:"vendor-roofing-materials",company_id:"roofing",name:"Valley Roofing Supply",contact_name:"Elena Ortiz",email:"orders@valleyroofingsupply.local",phone:"(480) 555-0190",category:"Materials",status:"Active",notes:"Primary tile, flashing, and underlayment vendor.",created_at:new Date(Date.now()-12096e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"vendor-roofing-dryin",company_id:"roofing",name:"Monsoon Dry-In Crew",contact_name:"R. Alvarez",email:"dispatch@monsoondryin.local",phone:"(602) 555-0144",category:"Subcontractor",status:"Active",notes:"Emergency dry-in support during storm calls.",created_at:new Date(Date.now()-10368e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"vendor-drafting-permits",company_id:"drafting",name:"Permit Runner AZ",contact_name:"Sofia Chen",email:"permits@runneraz.local",phone:"(602) 555-0171",category:"Permit",status:"Active",notes:"Permit filing support for drafting packets.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-2592e5).toISOString()},{id:"vendor-lumen-software",company_id:"lumen",name:"Lumen SaaS Stack",contact_name:"Ops Billing",email:"billing@lumenstack.local",phone:"",category:"Software",status:"Active",notes:"Internal software subscriptions for client onboarding.",created_at:new Date(Date.now()-7776e5).toISOString(),updated_at:new Date(Date.now()-3456e5).toISOString()}],mn=[{id:"invoice-roofing-queen-creek",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",client_name:"Rosales Residence",invoice_number:"QR-1007",status:"Partially paid",issue_date:y(-10),due_date:y(5),subtotal:6800,tax:0,total:6800,notes:"Emergency leak repair billing with deposit received.",created_at:new Date(Date.now()-864e6).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"invoice-roofing-mesa-storage",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",client_name:"Mesa Storage Partners",invoice_number:"QR-1008",status:"Sent",issue_date:y(-18),due_date:y(-2),subtotal:18400,tax:0,total:18400,notes:"Estimate packet sent to board for approval.",created_at:new Date(Date.now()-15552e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-drafting-horizon",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",client_name:"Horizon HVAC",invoice_number:"QD-2031",status:"Sent",issue_date:y(-7),due_date:y(14),subtotal:4200,tax:0,total:4200,notes:"Drafting permit package milestone invoice.",created_at:new Date(Date.now()-6048e5).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()},{id:"invoice-lumen-onboarding",company_id:"lumen",job_id:"",client_name:"Lumen Internal Launch",invoice_number:"LM-3004",status:"Draft",issue_date:y(-3),due_date:y(27),subtotal:3200,tax:0,total:3200,notes:"Demo onboarding package used for finance workspace.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()}],fn=[{id:"payment-roofing-queen-creek-deposit",company_id:"roofing",invoice_id:"invoice-roofing-queen-creek",amount:2500,method:"ACH",received_at:y(-4),reference:"ACH-4421",notes:"Deposit received after dry-in visit.",created_at:new Date(Date.now()-3456e5).toISOString()},{id:"payment-drafting-horizon-retainer",company_id:"drafting",invoice_id:"invoice-drafting-horizon",amount:1e3,method:"Check",received_at:y(-1),reference:"CHK-117",notes:"Retainer collected before permit packet completion.",created_at:new Date(Date.now()-864e5).toISOString()}],bn=[{id:"expense-roofing-queen-creek-materials",company_id:"roofing",job_id:"11111111-1111-4111-8111-111111111111",vendor_id:"vendor-roofing-materials",category:"Materials",amount:1850,status:"Approved",spent_at:y(-6),notes:"Underlayment, flashing, and tile replacement materials.",created_at:new Date(Date.now()-5184e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-roofing-mesa-permit",company_id:"roofing",job_id:"22222222-2222-4222-8222-222222222222",vendor_id:"vendor-roofing-materials",category:"Permit",amount:620,status:"Pending",spent_at:y(-2),notes:"Permit and document prep allowance.",created_at:new Date(Date.now()-1728e5).toISOString(),updated_at:new Date(Date.now()-72e5).toISOString()},{id:"expense-drafting-horizon-runner",company_id:"drafting",job_id:"33333333-3333-4333-8333-333333333333",vendor_id:"vendor-drafting-permits",category:"Permit",amount:480,status:"Approved",spent_at:y(-3),notes:"Permit runner package review.",created_at:new Date(Date.now()-2592e5).toISOString(),updated_at:new Date(Date.now()-864e5).toISOString()},{id:"expense-lumen-software-stack",company_id:"lumen",job_id:"",vendor_id:"vendor-lumen-software",category:"Software",amount:540,status:"Paid",spent_at:y(-5),notes:"Client onboarding software stack.",created_at:new Date(Date.now()-432e6).toISOString(),updated_at:new Date(Date.now()-1728e5).toISOString()}],i={route:null,session:he(Ve,null),profileDraft:he(aa,null),jobs:R(na,sn).map(Se),tasks:R(ia,ln).map(ke),files:R(sa,dn).map(He),driveFolders:R(oa,[]).map(La),forms:R(Ce,cn).map(at),formResponses:R(ft,pn).map(Ua),financeInvoices:R(da,mn).map(xt),financePayments:R(ca,fn).map(Tt),financeExpenses:R(pa,bn).map(Ot),financeVendors:R(ua,un).map(At),timeEntries:he(bt,[]),activeTimer:he(gt,null),teamMembers:R(ra,on).map(Ra),memberships:R(la,rn),companies:ut(ge.map(we)),activeCompanyId:localStorage.getItem(We)||"",selectedJobId:"",selectedTaskId:"",selectedFileId:"",selectedFormId:"",selectedQuestionId:"",selectedFinanceInvoiceId:"",selectedFinanceExpenseId:"",selectedFinanceVendorId:"",expandedFormIds:new Set,formStartTemplateId:"",formStartTab:"blank",query:"",fileQuery:"",formQuery:"",crmQuery:"",stageFilter:"all",crmStageFilter:"all",crmOwnerFilter:"all",taskStatusFilter:"all",taskPriorityFilter:"all",fileCategoryFilter:"All categories",formTypeFilter:"all",formsTab:"library",formEditorTab:"questions",taskView:localStorage.getItem(ma)||"table",driveFolder:"home",driveView:localStorage.getItem(fa)||"list",sync:{label:"Loading workspace...",mode:"loading"},dataLoaded:!1,dataLoading:!1,loginError:"",modal:""},$a=document.getElementById("app");gn();function gn(){ss(),window.addEventListener("popstate",u),document.addEventListener("click",Ni),document.addEventListener("submit",Ri),document.addEventListener("input",Qi),document.addEventListener("change",Vi),u()}function u(){if(i.route=Ye(),vn(i.route)){S("/login?return_url="+encodeURIComponent(rs()),{replace:!0});return}if(i.route.name==="login"){Fi();return}yn();const e=os(i.route);if(e){S(e,{replace:!0});return}us(i.route),Fa(i.route),i.route.params.get("account")==="profile"&&(i.modal="profile"),document.title=`${ls(i.route)} | ${_(p())} | Quest HQ`,$a.innerHTML=$n(i.route,ka(i.route))}function vn(e){return e.name==="login"?!1:!i.session}function yn(){i.dataLoaded||i.dataLoading||(i.dataLoading=!0,hn().catch(()=>{i.sync={label:"Local fallback",mode:"local"}}).finally(()=>{i.dataLoaded=!0,i.dataLoading=!1,J(),u()}))}async function hn(){const e=ae();if(!e){i.sync={label:"Supabase unavailable",mode:"local"};return}const[t,a,n,o,r,c]=await Promise.all([e.from("companies").select("*").order("name",{ascending:!0}),e.from("jobs").select("*").order("updated_at",{ascending:!1}),e.from("tasks").select("*").order("updated_at",{ascending:!1}),e.from("job_files").select("*").is("deleted_at",null).order("created_at",{ascending:!1}),e.from("team_members").select("*").order("name",{ascending:!0}),e.from("company_memberships").select("*")]);let l=0;t.error||(i.companies=t.data?.length?ut(ge.concat(t.data).map(we)):ut(ge.map(we)),l+=1),a.error||(a.data?.length&&(i.jobs=a.data.map(Se)),l+=1),n.error||(n.data?.length&&(i.tasks=n.data.map(ke)),l+=1),o.error||(o.data?.length&&(i.files=o.data.map(He)),l+=1),r.error||(r.data?.length&&(i.teamMembers=r.data.map(Ra)),l+=1),c.error||(c.data?.length&&(i.memberships=c.data.map(Ss)),l+=1),i.sync=l?{label:"Quest Supabase live",mode:"live"}:{label:"Local fallback",mode:"local"}}function ae(){return!window.supabase||typeof window.supabase.createClient!="function"?null:window.supabase.createClient(le.supabaseUrl,le.supabaseKey)}function _n(){return`
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
  `}function W(e,t="symbol-icon"){return`<svg class="${s(t)}" aria-hidden="true" focusable="false"><use href="#${s(e)}"></use></svg>`}function wa(e=i.route?.section||"jobs"){return vt.find(t=>t.id===e)?.symbol||"q-empty"}function Sa(e){const t=String(e||"").toLowerCase();return t.includes("job")||t.includes("pipeline")?"q-symbol-jobs":t.includes("task")||t.includes("review")?"q-symbol-tasks":t.includes("file")?"q-symbol-files":t.includes("form")?"q-symbol-forms":t.includes("account")||t.includes("customer")||t.includes("member")||t.includes("user")||t.includes("lead")?"q-symbol-crm":t.includes("invoice")||t.includes("collected")||t.includes("expense")||t.includes("net")||t.includes("outstanding")?"q-symbol-finance":t.includes("time")||t.includes("today")||t.includes("days")||t.includes("timer")||t.includes("entries")?"q-symbol-clock":t.includes("approval")||t.includes("access")?"q-symbol-approvals":wa()}function $n(e,t){const a=E(),n=p();return`
    <div class="quest-app" data-route="${s(e.name)}">
      ${_n()}
      <header class="topbar">
        <div class="topbar-left">
          <a class="logo" href="${b(d("jobs",{},n))}" data-router aria-label="Quest HQ workspace">
            ${W("q-logo","brand-symbol")}
          </a>
          <div>
            <div class="brand-name">Quest HQ</div>
            <div class="brand-sub">${s(le.buildId)}</div>
          </div>
        </div>
        <div class="topbar-right">
          <label class="company-switch">
            ${W("q-company")}
            <select data-company-switch aria-label="Active company">
              ${Na().map(o=>`<option value="${s(o.id)}" ${o.id===n?"selected":""}>${s(et(o))}</option>`).join("")}
            </select>
          </label>
          <label class="global-search">
            ${W("q-search")}
            <input data-global-search value="${s(i.query)}" placeholder="Search this company" />
          </label>
          <span class="sync-pill ${s(i.sync.mode)}" data-sync-state>${s(i.sync.label)}</span>
          <button class="btn" type="button" data-action="refresh-data" title="Refresh workspace data"><i class="ti ti-refresh"></i></button>
          <div class="account-menu">
            <button class="avatar-button" type="button" data-action="open-profile" aria-label="Open Quest profile">
              ${st(a.profile,"avatar")}
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
          ${wn(e)}
        </aside>
        <main class="work-surface" id="workspace" tabindex="-1">
          ${t}
        </main>
      </div>
    </div>
    ${Ii(e,a)}
  `}function wn(e){const t=p();return`
    <div class="company-card">
      <span class="company-card-symbol" style="--company-accent:${s(ie(t))}">${W("q-company")}</span>
      <div>
        <strong>${s(_(t))}</strong>
        <small>${s(It(t))} workspace</small>
      </div>
    </div>
    ${["Workspace","Company","Operations"].map(a=>Sn(a,vt.filter(n=>n.group===a&&Dn(n,t)).map(n=>n.status==="planned"?jn(n.symbol,n.label):kn(e,d(n.id,{},t),n.symbol,n.label,Fn(n.id,t))))).join("")}
  `}function Sn(e,t){return`
    <section class="side-group">
      <div class="side-label">${s(e)}</div>
      <div class="side-items">${t.join("")}</div>
    </section>
  `}function kn(e,t,a,n,o=""){return`
    <a class="side-item ${ds(e,t)?"active":""}" href="${b(t)}" data-router>
      ${W(a)}
      <span>${s(n)}</span>
      ${o!==""?`<b>${s(String(o))}</b>`:""}
    </a>
  `}function jn(e,t){return`
    <button class="side-item planned" type="button" disabled aria-disabled="true">
      ${W(e)}
      <span>${s(t)}</span>
      <b>Planned</b>
    </button>
  `}function Dn(e,t=p()){return e.status==="planned"||ws(e.permission||`${e.id}.view`,t)}function Fn(e,t=p()){return e==="jobs"?F(t).length:e==="tasks"?B(t).length:e==="files"?ce(t).length:e==="forms"?se(t).length:e==="crm"?Ge(t).length:e==="finance"?pe(t).length:e==="users"?ne(t).length:e==="time"?Ia(t).focus.length:e==="approvals"?qa(t).length:e==="clock"&&Ze(t)?"On":""}function _t(e,t){return`
    <nav class="tabbar compact-tabbar" aria-label="${s(e)}">
      ${t.map(([a,n,o])=>`<a class="${o?"active":""}" href="${b(a)}" data-router>${s(n)}</a>`).join("")}
    </nav>
  `}function ka(e){if(e.name==="command")return Cn(p());if(e.name!=="company")return zt(e.name);const t=e.companyId;return e.section==="jobs"?qn(e,t):e.section==="tasks"?En(e,t):e.section==="files"?Un(e,t):e.section==="users"?Xn(e,t):e.section==="settings"?ti(e,t):e.section==="forms"?ai(t):e.section==="analytics"?In(e,t):e.section==="crm"?fi(e,t):e.section==="finance"?gi(e,t):e.section==="team-chart"?ei(t):e.section==="time"||e.section==="approvals"||e.section==="clock"?Si(e,t):zt(e.section)}function Cn(e){const t=F(e),a=B(e),n=a.filter(r=>["critical","urgent"].includes(r.priority)),o=ce(e);return`
    ${V("Company dashboard","Live context for this company workspace.",`
      <a class="btn" href="${b(d("files",{},e))}" data-router><i class="ti ti-folder"></i>Open drive</a>
      <a class="btn btn-primary" href="${b(d("jobs",{},e))}" data-router><i class="ti ti-briefcase"></i>Open jobs</a>
    `)}
    ${Ts([["Jobs",t.length],["Open tasks",a.filter(r=>r.status!=="done").length],["Urgent tasks",n.length],["Drive files",o.length]])}
    <section class="dashboard-grid">
      <article class="panel span-2">
        <div class="section-head">
          <div><h2>Priority work</h2><p>Tasks and jobs filtered by the active company.</p></div>
          <a class="btn" href="${b(d("tasks",{},e))}" data-router>Open tasks</a>
        </div>
        <div class="queue-list">
          ${a.slice(0,6).map(r=>it(r)).join("")||g("No tasks in this company yet.")}
        </div>
      </article>
      <article class="panel">
        <div class="section-head"><div><h2>Company scope</h2><p>Client-side filtering while auth is disabled.</p></div></div>
        ${N([["Company",_(e)],["Visible users",ne(e).length],["Auth mode","Local basic gate"],["RLS status","Prepared, not enforced"]])}
      </article>
      <article class="panel span-3">
        <div class="section-head"><div><h2>Job queue</h2><p>Workspace records without leaving the Quest shell.</p></div></div>
        <div class="queue-list">
          ${t.slice(0,8).map(r=>Os(r)).join("")||g("No jobs in this company yet.")}
        </div>
      </article>
    </section>
  `}function In(e,t){const a=e.jobId?$(e.jobId):null,n=a?[a]:F(t),o=B(t).filter(f=>!a||f.project_id===a.id),r=ce(t).filter(f=>!a||f.job_id===a.id),c=se(t).filter(f=>!a||f.linked_job_id===a.id),l=o.filter(f=>f.status!=="done"),m=o.filter(f=>f.status!=="done"&&f.due&&new Date(f.due)<rt()),j=z(n,"estimate_total");return`
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
          <strong>${s(co(o.filter(f=>f.status==="done").length,o.length))}</strong>
          <small>${s(o.filter(f=>f.status==="done").length)} done of ${s(o.length)}</small>
        </article>
        <article class="panel analytics-main">
          <div class="section-head"><div><h2>Job health</h2><p>Company-scoped operational summary.</p></div></div>
          <div class="analytics-table">
            <div class="analytics-row head"><span>Job</span><span>Stage</span><span>Tasks</span><span>Files</span><span>Value</span></div>
            ${n.map(f=>`
              <a class="analytics-row" href="${b(d("analytics",{job_id:f.id},t))}" data-router>
                <span><strong>${s(f.name)}</strong><small>${s(f.client_name||_(t))}</small></span>
                <span>${s(f.stage)}</span>
                <span>${s(tt(f.id))}</span>
                <span>${s(Be(f.id))}</span>
                <span>${s(v(f.estimate_total))}</span>
              </a>
            `).join("")||g("No jobs to analyze yet.")}
          </div>
        </article>
        <article class="panel analytics-side">
          <div class="section-head"><div><h2>Task status</h2><p>Breakdown for this scope.</p></div></div>
          <div class="stage-bars">
            ${qe.map(f=>{const k=o.filter(U=>U.status===f).length;return`<div><span>${s(oe(f))}</span><b><i style="width:${s(tn(k,o.length))}%"></i></b><strong>${s(k)}</strong></div>`}).join("")}
          </div>
        </article>
        <article class="panel span-3">
          <div class="section-head"><div><h2>Priority queue</h2><p>Highest risk tasks first.</p></div></div>
          <div class="queue-list">
            ${o.filter(f=>f.status!=="done").sort((f,k)=>ve(k.priority)-ve(f.priority)).slice(0,8).map(f=>it(f)).join("")||g("No open tasks in this scope.")}
          </div>
        </article>
      </section>
    </section>
  `}function qn(e,t){const a=cs(e.params.get("tab")),n=de();return`
    ${V("Jobs","Company job records, clients, scope, and linked work.",`
      <a class="btn" href="${b(d("files",n?{job_id:n.id}:{},t))}" data-router><i class="ti ti-folder"></i>Drive</a>
      <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add job</button>
    `)}
    <section class="job-toolbar">
      <label>
        <span>Stage</span>
        <select data-stage-filter>
          ${["all"].concat(Ie).map(o=>`<option value="${s(o)}" ${i.stageFilter===o?"selected":""}>${s(o==="all"?"All stages":o)}</option>`).join("")}
        </select>
      </label>
      <div class="selected-job-chip">
        <span>Selected job</span>
        <strong>${n?s(n.name):"No job selected"}</strong>
      </div>
    </section>
    <nav class="tabbar" aria-label="Job sections">
      ${ba.map(o=>`<a class="${o===a?"active":""}" href="${b(d("jobs",{tab:o,...n?{job_id:n.id}:{}},t))}" data-router>${s(ps(o))}</a>`).join("")}
    </nav>
    ${xn(a,t,n)}
  `}function xn(e,t,a){return e==="pipeline"?Qt(t):e==="list"?Tn(t):e==="profile"?On(t,a):Qt(t)}function Qt(e){const t=Ca(e);return`
    <section class="job-board">
      ${Ie.map(a=>{const n=t.filter(o=>o.stage===a);return`
          <article class="job-lane">
            <h2><span>${s(a)}</span><b>${n.length}</b></h2>
            ${n.map(o=>As(o)).join("")||'<div class="lane-empty">No jobs</div>'}
          </article>
        `}).join("")}
    </section>
  `}function Tn(e){const t=Ca(e);return`
    <section class="panel">
      <div class="section-head"><div><h2>Job list</h2><p>${t.length} visible job${t.length===1?"":"s"}</p></div></div>
      <div class="data-table jobs-table">
        <div class="table-head"><span>Job</span><span>Stage</span><span>Priority</span><span>Owner</span><span>Tasks</span><span>Value</span></div>
        ${t.map(a=>`
          <button class="table-row ${a.id===i.selectedJobId?"active":""}" type="button" data-select-job="${s(a.id)}">
            <span><strong>${s(a.name)}</strong><small>${s(a.client_name||"No client")} - ${s(a.site_address||"No address")}</small></span>
            <span>${s(a.stage)}</span>
            <span>${Et(a.priority)}</span>
            <span>${s(a.owner_name||"Unassigned")}</span>
            <span>${s(tt(a.id))}</span>
            <span>${v(a.estimate_total)}</span>
          </button>
        `).join("")||g("No jobs match this view.")}
      </div>
    </section>
  `}function On(e,t){return t?`
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
        ${N([["Client",t.client_name||"No client"],["Contact",t.contact_name||"No contact"],["Owner",t.owner_name||"Unassigned"],["Stage",t.stage],["Priority",t.priority],["Estimate",v(t.estimate_total)]])}
        <div class="button-grid">
          <a class="btn btn-primary" href="${b(d("tasks",{job_id:t.id},e))}" data-router>Open tasks</a>
          <button class="btn" type="button" data-action="open-job-form" data-mode="edit" data-job-id="${s(t.id)}">Edit job</button>
        </div>
      </aside>
      <article class="panel span-2">
        <div class="section-head"><div><h2>Linked workspace</h2><p>Native Quest modules scoped to this job.</p></div></div>
        <div class="linked-grid">
          ${Pe(d("tasks",{job_id:t.id},e),"ti-list-check","Tasks",`${tt(t.id)} linked tasks`)}
          ${Pe(d("files",{job_id:t.id},e),"ti-folder","Files",`${Be(t.id)} files`)}
          ${Pe(d("forms",{job_id:t.id},e),"ti-clipboard-list","Forms","Inspections and surveys")}
          ${Pe(d("analytics",{job_id:t.id},e),"ti-chart-bar","Dashboard","Job health")}
        </div>
      </article>
    </section>
  `:g("Create a job to see the profile workspace.")}function An(e,t){const a=t||ks(e);return`
    <form class="job-editor" data-job-form>
      <input type="hidden" name="id" value="${s(a.id||"")}" />
      <div class="section-head span-2">
        <div><h2>${t?"Edit job":"Create job"}</h2><p>Creates the company job container for tasks, files, forms, and reporting.</p></div>
      </div>
      ${w("Workspace name","name",a.name,!0)}
      ${T("Company","company_id",e,Na().map(n=>[n.id,et(n)]))}
      ${w("Client","client_name",a.client_name)}
      ${w("Contact","contact_name",a.contact_name)}
      ${w("Account owner","owner_name",a.owner_name)}
      ${w("Job type","job_type",a.job_type||"Roofing")}
      ${T("Business status","stage",a.stage||"Lead",Ie.map(n=>[n,n]))}
      ${T("Client urgency","priority",a.priority||"Medium",["Low","Medium","High","Urgent"].map(n=>[n,n]))}
      ${w("Estimate total","estimate_total",a.estimate_total||0,!1,"number")}
      ${w("Invoice total","invoice_total",a.invoice_total||0,!1,"number")}
      ${w("Site address","site_address",a.site_address,!1,"text","span-2")}
      ${te("Scope","scope",a.scope,"span-2")}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save job</button>
        ${t?`<button class="btn danger" type="button" data-action="delete-job" data-job-id="${s(t.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function En(e,t){const a=e.jobId?$(e.jobId):null,n=$s(t,a?.id);return`
    ${V(a?`${a.name} tasks`:"Tasks","Native Quest task execution backed by the company task table.",`
      <a class="btn" href="${b(d("jobs",a?{tab:"profile",job_id:a.id}:{},t))}" data-router><i class="ti ti-briefcase"></i>Jobs</a>
      <a class="btn btn-primary" href="${b(d("tasks",{...a?{job_id:a.id}:{},new:"1"},t))}" data-router><i class="ti ti-plus"></i>New task</a>
    `)}
    ${Mn(t,a)}
    <section class="task-layout task-layout-flat">
      <article class="panel task-main">
        ${i.taskView==="board"?Nn(t,n):Pn(t,n)}
      </article>
    </section>
  `}function Mn(e,t){return`
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
          ${["all"].concat(qe).map(n=>`<option value="${s(n)}" ${i.taskStatusFilter===n?"selected":""}>${s(n==="all"?"All statuses":oe(n))}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Priority</span>
        <select data-task-priority-filter>
          ${["all"].concat(Je).map(n=>`<option value="${s(n)}" ${i.taskPriorityFilter===n?"selected":""}>${s(n==="all"?"All priorities":M(n))}</option>`).join("")}
        </select>
      </label>
      <div class="segmented" role="group" aria-label="Task view">
        <button class="${i.taskView==="table"?"active":""}" type="button" data-action="set-task-view" data-view="table"><i class="ti ti-table"></i>Table</button>
        <button class="${i.taskView==="board"?"active":""}" type="button" data-action="set-task-view" data-view="board"><i class="ti ti-layout-kanban"></i>Board</button>
      </div>
    </section>
  `}function Pn(e,t){return`
    <div class="data-table task-table">
      <div class="table-head"><span>Task</span><span>Job</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due</span></div>
      ${t.map(a=>`
        <button class="table-row ${a.id===i.selectedTaskId?"active":""}" type="button" data-select-task="${s(a.id)}">
          <span><strong>${s(a.title)}</strong><small>${s(a.description||Ae(a.type))}</small></span>
          <span>${s($(a.project_id)?.name||"Company task")}</span>
          <span>${s(Q(a.assignee_id))}</span>
          <span>${Qa(a.priority)}</span>
          <span>${Va(a.status)}</span>
          <span>${A(a.due)}</span>
        </button>
      `).join("")||g("No tasks match this workspace view.")}
    </div>
  `}function Nn(e,t){return`
    <div class="task-board">
      ${qe.map(a=>{const n=t.filter(o=>o.status===a);return`
          <section class="task-column">
            <h2><span>${s(oe(a))}</span><b>${n.length}</b></h2>
            ${n.map(o=>`
              <button class="task-card priority-${s(o.priority)}" type="button" data-select-task="${s(o.id)}">
                <strong>${s(o.title)}</strong>
                <span>${s($(o.project_id)?.name||_(e))}</span>
                <small>${s(Q(o.assignee_id))} - ${A(o.due)}</small>
              </button>
            `).join("")||'<div class="lane-empty">No tasks</div>'}
          </section>
        `}).join("")}
    </div>
  `}function Ln(e,t){return t?`
    <div class="section-head">
      <div><h2>${s(t.title)}</h2><p>${s($(t.project_id)?.name||_(e))}</p></div>
      <a class="btn" href="${b(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:t.id,edit:"1"},e))}" data-router>Edit</a>
    </div>
    ${N([["Status",oe(t.status)],["Priority",M(t.priority)],["Type",Ae(t.type)],["Assignee",Q(t.assignee_id)],["Due",A(t.due)],["Company ID",t.company_id],["Project ID",t.project_id||"Company-level task"]])}
    <div class="detail-copy">
      <strong>Description</strong>
      <p>${s(t.description||"No description yet.")}</p>
    </div>
  `:`
      <div class="section-head"><div><h2>Task detail</h2><p>Select a task or create the first one.</p></div></div>
      ${g("No task selected.")}
    `}function Vt(e,t,a){const n=a||js(e,t?.id||"");return`
    <form class="task-form" data-task-form>
      <input type="hidden" name="id" value="${s(a?n.id:"")}" />
      <div class="section-head">
        <div><h2>${a?"Edit task":"New task"}</h2><p>Writes company_id and optional project_id directly to Quest tasks.</p></div>
      </div>
      ${w("Task title","title",n.title,!0)}
      ${T("Job","project_id",n.project_id||"",[["","Company-level task"]].concat(F(e).map(o=>[o.id,o.name])))}
      ${T("Status","status",n.status,qe.map(o=>[o,oe(o)]))}
      ${T("Priority","priority",n.priority,Je.map(o=>[o,M(o)]))}
      ${T("Type","type",n.type,ga.map(o=>[o,Ae(o)]))}
      ${T("Assignee","assignee_id",n.assignee_id,ne(e).map(o=>[o.id,Q(o.id)]))}
      ${w("Due date","due",n.due||y(1),!0,"date")}
      ${te("Description","description",n.description)}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Save task</button>
        ${a?`<button class="btn danger" type="button" data-action="delete-task" data-task-id="${s(a.id)}">Delete</button>`:""}
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `}function Un(e,t){const a=e.params.get("folder")||i.driveFolder||"home";i.driveFolder=a;const n=e.jobId?$(e.jobId):null,o=Ls(t,a,n?.id||"");return`
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
                <a href="${b(d("files",{},t))}" data-router>${s(_(t))}</a>
                ${a!=="home"?Ns(t,a,n):""}
                ${n?`<span>/</span><strong>${s(n.name)}</strong>`:""}
              </nav>
              <div class="drive-compact-controls">
                <div class="segmented" role="group" aria-label="Drive view">
                  <button class="${i.driveView==="grid"?"active":""}" type="button" data-action="set-drive-view" data-view="grid"><i class="ti ti-layout-grid"></i>Icons</button>
                  <button class="${i.driveView==="list"?"active":""}" type="button" data-action="set-drive-view" data-view="list"><i class="ti ti-list-details"></i>Details</button>
                </div>
              </div>
            </section>
            ${Rn(t,a,n,o)}
          </div>
        </div>
      </section>
    </section>
  `}function Rn(e,t,a,n){const o=Ms(e,t,a),r=o.map(l=>({kind:"folder",...l})).concat(n.map(l=>({kind:"file",file:l}))),c=a?a.name:t==="home"?"This folder":Y(t);return`
    <section class="drive-section-title">
      <div><h3>${s(c)}</h3><span>${o.length} folder${o.length===1?"":"s"} / ${n.length} file${n.length===1?"":"s"}</span></div>
    </section>
    ${i.driveView==="list"?Qn(r):Vn(r)}
  `}function Qn(e){return`
    <div class="explorer-table" role="table" aria-label="File explorer">
      <div class="explorer-head" role="row">
        <span>Name</span>
        <span>Date modified</span>
        <span>Type</span>
        <span>Size</span>
      </div>
      ${e.map(t=>t.kind==="folder"?Bn(t):Hn(t.file)).join("")||g("This folder is empty.")}
    </div>
  `}function Vn(e){return`
    <section class="drive-folder-grid explorer-grid">
      ${e.map(t=>t.kind==="folder"?Jn(t):Wn(t.file)).join("")||g("This folder is empty.")}
    </section>
  `}function Jn(e){return`
    <a class="drive-folder-card explorer-folder" href="${s(e.href)}" data-router>
      <span class="drive-folder-icon"><i class="ti ${s(e.icon||"ti-folder")}"></i></span>
      <strong>${s(e.name)}</strong>
      <em>${s(e.countLabel||"0 items")}</em>
    </a>
  `}function Bn(e){return`
    <a class="explorer-row folder-row-live" href="${s(e.href)}" data-router role="row">
      <span class="explorer-name"><span class="file-type folder"><i class="ti ${s(e.icon||"ti-folder")}"></i></span><strong>${s(e.name)}</strong></span>
      <span>${s(e.updatedLabel||"")}</span>
      <span>Folder</span>
      <span>${s(e.countLabel||"")}</span>
    </a>
  `}function Hn(e){return`
    <button type="button" class="explorer-row ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(e.id)}" role="row">
      <span class="explorer-name">${zn(e)}<strong>${s(e.file_name)}</strong></span>
      <span>${A(e.updated_at||e.created_at)}</span>
      <span>${s(me(e))}</span>
      <span>${Nt(e.size_bytes)}</span>
    </button>
  `}function zn(e){return`
    <span class="file-type ${s(Mt(e))}">
      <i class="ti ${s(Xa(e))}"></i>
      <small>${s(Us(e))}</small>
    </span>
  `}function Wn(e){return`
    <button type="button" class="file-card-live ${e.id===i.selectedFileId?"active":""}" data-action="select-file" data-file-id="${s(e.id)}">
      <span class="file-thumb">${Pt(e)}</span>
      <strong>${s(e.file_name)}</strong>
      <span>${s(me(e))} / ${Nt(e.size_bytes)}</span>
    </button>
  `}function Kn(e,t){return`
    <section class="file-viewer-layout">
      <div class="file-viewer-stage">
        ${Yn(e)}
      </div>
      <aside class="file-viewer-meta">
        <div class="file-open-head">
          ${Pt(e)}
          <div>
            <strong>${s(e.file_name)}</strong>
            <span>${s(me(e))} / ${Nt(e.size_bytes)}</span>
          </div>
        </div>
        <div class="file-detail-list">
          ${re("Location",Y(e.folder))}
          ${re("Job",$(e.job_id)?.name||"Company shared")}
          ${re("Uploaded by",e.uploaded_by_label||"Quest HQ")}
          ${re("Modified",A(e.updated_at||e.created_at))}
          ${re("Storage",e.object_path||"Metadata only")}
        </div>
        <div class="file-detail-actions">
          <button class="btn" type="button" data-action="download-file" data-file-id="${s(e.id)}"><i class="ti ti-download"></i>Download</button>
          <button class="btn danger" type="button" data-action="delete-file" data-file-id="${s(e.id)}"><i class="ti ti-trash"></i>Delete</button>
        </div>
      </aside>
    </section>
  `}function Yn(e){const t=Mt(e);return e.signed_url&&t==="image"?`<img class="file-preview-media" src="${s(e.signed_url)}" alt="" />`:e.signed_url&&t==="pdf"?`<iframe class="file-preview-frame" src="${s(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:e.signed_url&&t==="text"?`<iframe class="file-preview-frame text" src="${s(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:["doc","sheet"].includes(t)&&e.signed_url?`<iframe class="file-preview-frame" src="https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(e.signed_url)}" title="${s(e.file_name)}"></iframe>`:`
    <div class="file-preview-empty">
      ${Pt(e,!0)}
      <strong>${s(me(e))} preview</strong>
      <p>${s(e.object_path?"Preview will load when a signed file URL is available.":"This is a metadata-only file record. Upload the actual file object to preview it here.")}</p>
      ${e.notes?`<pre>${s(e.notes)}</pre>`:""}
    </div>
  `}function Gn(){const e=p(),t=i.route||Ye(),a=t.params.get("folder")||i.driveFolder||"home",n=t.jobId?$(t.jobId):null;return C("Drive","New folder",`
    <form class="compact-tool-form" data-folder-form>
      <label><span>Folder name</span><input name="name" placeholder="Folder name" required autofocus /></label>
      <input type="hidden" name="company_id" value="${s(e)}" />
      <input type="hidden" name="parent_key" value="${s(Ba(a,n))}" />
      <div class="file-upload-log">
        <strong>Location</strong>
        <span>${s(a==="home"?_(e):n?.name||Y(a))}</span>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">Create folder</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"task-modal")}function Zn(){const e=p(),t=i.route?.params?.get("folder")||(i.driveFolder==="home"?"shared":i.driveFolder),a=i.route?.jobId||"";return`
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
          ${w("Metadata-only file name","file_name","")}
          ${T("Folder","folder",t,oo(e))}
          ${T("Job","job_id",a,[["","Company shared file"]].concat(F(e).map(n=>[n.id,n.name])))}
          ${T("Category","category",Y(t),nn.filter(n=>n!=="All categories").map(n=>[n,n]))}
          ${w("Uploaded by","uploaded_by_label",E().profile.full_name||"Quest HQ")}
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
  `}function Xn(e,t){const a=ne(t),n=["members","access"].includes(e.params.get("tab"))?e.params.get("tab"):"members";return`
    ${V("Users","Company members, roles, workers, and access context.",`
      <a class="btn btn-primary" href="${b(d("settings",{},t))}" data-router><i class="ti ti-settings"></i>Settings</a>
    `)}
    ${_t("Users sections",[[d("users",{tab:"members"},t),"Members",n==="members"],[d("users",{tab:"access"},t),"Access model",n==="access"]])}
    ${n==="members"?`
      <section class="users-grid">
        ${a.map(o=>`
          <article class="user-card">
            ${st({full_name:o.full_name,avatar_url:o.avatar_url},"avatar")}
            <div>
              <strong>${s(o.full_name)}</strong>
              <span>${s(o.email)}</span>
              <small>${s(qt(t,o.id))}</small>
            </div>
          </article>
        `).join("")||g("No users assigned to this company yet.")}
      </section>
    `:`
    <section class="panel">
      <div class="section-head"><div><h2>Membership model</h2><p>company_memberships is the canonical table; legacy company_ids remain as backfill fields.</p></div></div>
      ${N([["Tenant key","company_id on jobs, tasks, files, forms, users, settings"],["Privacy status","Client-filtered only while auth is disabled"],["Active role",It(t)]])}
    </section>
    `}
  `}function ei(e){const t=ne(e),a=t.filter(n=>!n.supervisor_id||!t.some(o=>o.id===n.supervisor_id));return`
    <section class="tool-page team-chart-page">
      ${V("Team chart","Reporting lines, roles, and company coverage for this workspace.",`
        <a class="btn" href="${b(d("users",{},e))}" data-router><i class="ti ti-users"></i>Users</a>
        <a class="btn btn-primary" href="${b(d("settings",{tab:"team"},e))}" data-router><i class="ti ti-settings"></i>Worker settings</a>
      `)}
      <section class="metric-grid operations-metrics">
        ${h("Members",t.length)}
        ${h("Leads",a.length)}
        ${h("Open tasks",B(e).filter(kt).length)}
        ${h("Active timer",Ze(e)?"Yes":"No")}
      </section>
      <section class="panel">
        <div class="section-head"><div><h2>Reporting chart</h2><p>Supervisor links are local/basic until Auth and RLS are restored.</p></div></div>
        <div class="team-tree">
          ${a.map(n=>ja(e,n,t)).join("")||g("No workers assigned.")}
        </div>
      </section>
    </section>
  `}function ja(e,t,a,n=0){const o=a.filter(r=>r.supervisor_id===t.id);return`
    <article class="team-node" style="--depth:${n}">
      <div class="team-node-card">
        ${st({full_name:t.full_name,avatar_url:t.avatar_url},"avatar")}
        <span><strong>${s(t.full_name)}</strong><small>${s(qt(e,t.id))}</small></span>
        <b>${B(e).filter(r=>r.assignee_id===t.id&&kt(r)).length} open</b>
      </div>
      ${o.length?`<div class="team-node-children">${o.map(r=>ja(e,r,a,n+1)).join("")}</div>`:""}
    </article>
  `}function ti(e,t){const a=Xe(t),n=["company","access","team"].includes(e.params.get("tab"))?e.params.get("tab"):"company";return`
    ${V("Settings","Company settings, roles, approvals, and admin controls.","")}
    ${_t("Settings sections",[[d("settings",{tab:"company"},t),"Company",n==="company"],[d("settings",{tab:"access"},t),"Access",n==="access"],[d("settings",{tab:"team"},t),"Workers",n==="team"]])}
    <section class="dashboard-grid compact-settings-grid">
      ${n==="company"?`
      <article class="panel">
        <div class="section-head"><div><h2>Company</h2><p>Workspace identity.</p></div></div>
        ${N([["Name",_(t)],["Company ID",t],["Color",a?.color||ie(t)],["Visible jobs",F(t).length]])}
      </article>
      `:""}
      ${n==="access"?`
      <article class="panel">
        <div class="section-head"><div><h2>Access</h2><p>Prepared for Supabase Auth and RLS.</p></div></div>
        ${N([["Auth switch","Disabled"],["Local login","Enabled"],["Isolation","Client-filtered only"],["Memberships",String(i.memberships.filter(o=>o.company_id===t).length)]])}
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
          ${ne(t).map(o=>`<div><strong>${s(o.full_name)}</strong><span>${s(qt(t,o.id))}</span></div>`).join("")||g("No workers assigned.")}
        </div>
      </article>
      `:""}
    </section>
  `}function ai(e){const t=Rs(e),a=je(e),n=i.formsTab==="builder"&&a?"builder":i.formsTab==="responses"?"responses":"library";return`
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
            <button class="${n===o?"active":""}" type="button" data-action="set-forms-tab" data-tab="${s(o)}">${s(M(o))}</button>
          `).join("")}
        </nav>
      `}
      ${n==="library"?ni(e,t,a):""}
      ${n==="builder"?ii(e,a):""}
      ${n==="responses"?mi(e,a):""}
    </section>
  `}function ni(e,t,a){return`
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
                <span>Created by ${s(Qs(n))}</span>
              </span>
              <button class="form-card-toggle" type="button" data-action="toggle-form-card" data-form-id="${s(n.id)}" aria-expanded="${i.expandedFormIds.has(n.id)?"true":"false"}">
                <i class="ti ${i.expandedFormIds.has(n.id)?"ti-chevron-up":"ti-chevron-down"}"></i>
                ${i.expandedFormIds.has(n.id)?"Less":"Details"}
              </button>
              <span class="form-card-meta">
                <small>${s(n.type)} / ${s(n.audience||"Internal")}</small>
                <small>${Wa(n)} questions</small>
                <em>${ot(n.id).length} responses</em>
                <em>Updated ${A(n.updated_at)}</em>
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
  `}function ii(e,t){if(!t)return`
      <section class="panel">
        <div class="section-head"><div><h2>Builder</h2><p>No form selected yet.</p></div></div>
        ${g("Create a form or choose a template to open the builder.")}
      </section>
    `;const a=["questions","responses","settings"].includes(i.formEditorTab)?i.formEditorTab:"questions";return`
    <section class="forms-builder-grid gform-editor" data-form-editor-mode="${s(a)}">
      ${si(t,a)}
      ${a==="questions"?`
        ${oi(e,t)}
        ${ri(t)}
      `:""}
      ${a==="settings"?`
        <article class="panel form-settings-panel forms-settings-wide">
          ${li(e,t)}
        </article>
      `:""}
      ${a==="responses"?di(e,t):""}
    </section>
  `}function si(e,t){const a=ot(e.id);return`
    <div class="gform-editor-tabs panel" role="tablist" aria-label="Form editor sections">
      <div>
        <strong>${s(e.title)}</strong>
        <span>${s(e.status)} / ${Wa(e)} questions / ${a.length} responses</span>
      </div>
      ${["questions","responses","settings"].map(n=>`
        <button class="${t===n?"active":""}" type="button" data-action="set-form-editor-tab" data-tab="${s(n)}">
          ${n==="questions"?'<i class="ti ti-list-details"></i>':n==="responses"?'<i class="ti ti-inbox"></i>':'<i class="ti ti-settings"></i>'}
          ${s(M(n))}
        </button>
      `).join("")}
      <button class="btn" type="button" data-action="open-form-preview" data-form-id="${s(e.id)}"><i class="ti ti-eye"></i>Preview</button>
      <button class="btn" type="button" data-action="open-form-actions" data-form-id="${s(e.id)}"><i class="ti ti-share"></i>Share</button>
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(e.id)}">Save</button>
    </div>
  `}function oi(e,t){return`
    <article class="panel form-identity-panel gform-title-card">
      <div class="gform-accent-strip" style="--form-accent:${s(t.theme_color||ie(e))}"></div>
      ${ye("Form title","title",t.title,!0)}
      ${Ka("Form description","description",t.description)}
      <div class="forms-simple-meta">
        <span>${s(t.status)}</span>
        <span>${s(t.type)}</span>
        <span>${s(t.audience||"Internal")}</span>
        <span>${s($(t.linked_job_id)?.name||"Company level")}</span>
        <span>${s(_(e))}</span>
      </div>
      <div class="form-actions">
        <button class="btn" type="button" data-action="set-form-editor-tab" data-tab="settings">Settings</button>
        <button class="btn" type="button" data-action="open-form-preview" data-form-id="${s(t.id)}">Preview</button>
        <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      </div>
    </article>
  `}function ri(e){return`
    <article class="question-workbench">
      <div class="question-canvas">
        <div class="gform-floating-toolbar" aria-label="Builder tools">
          ${Te.map(([t,a])=>`<button type="button" data-action="add-question" data-question-type="${s(t)}" title="${s(a)}" aria-label="Add ${s(a)} question"><i class="ti ${s(Vs(t))}"></i></button>`).join("")}
        </div>
        <div class="question-list">
          ${e.questions.map((t,a)=>ci(t,a)).join("")||g("Add the first question.")}
        </div>
      </div>
    </article>
  `}function li(e,t){return`
    <div class="section-head"><div><h2>Settings</h2><p>Publishing, audience, theme, and response behavior.</p></div></div>
    <div class="forms-settings-grid">
      ${ye("Title","title",t.title,!0)}
      ${Ne("Status","status",t.status,ht.map(a=>[a,a]))}
      ${Ka("Description","description",t.description)}
      ${Ne("Type","type",t.type,xe.map(a=>[a,a]))}
      ${ye("Audience","audience",t.audience)}
      ${Ne("Linked job","linked_job_id",t.linked_job_id||"",[["","Company level"]].concat(F(e).map(a=>[a.id,a.name])))}
      ${ye("Theme color","theme_color",t.theme_color||ie(e),!1,"color")}
      ${Ne("Background","background",t.background||"clean",[["clean","Clean"],["paper","Paper"],["grid","Grid"],["dark","Dark"]])}
      ${ye("Submit button","submit_label",t.submit_label||"Submit")}
      <label class="check-row"><input type="checkbox" data-form-field="collect_email" ${t.collect_email?"checked":""} /> Collect email</label>
      <label class="check-row"><input type="checkbox" data-form-field="require_approval" ${t.require_approval?"checked":""} /> Require approval</label>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" type="button" data-action="save-form" data-form-id="${s(t.id)}">Save settings</button>
      <button class="btn" type="button" data-action="publish-form" data-form-id="${s(t.id)}">Publish</button>
      <button class="btn danger" type="button" data-action="delete-form" data-form-id="${s(t.id)}">Delete</button>
    </div>
  `}function di(e,t){const a=ot(t.id),n=a[0]||null;return`
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
            <small>${A(o.created_at)}</small>
          </button>
        `).join("")||g("No responses yet. Submit a preview response from the builder.")}
      </div>
    </article>
    <aside class="panel response-detail">
      ${n?Ya(n):g("No response selected.")}
    </aside>
  `}function ci(e,t){const a=Te.map(([n,o])=>`<option value="${s(n)}" ${e.type===n?"selected":""}>${s(o)}</option>`).join("");return`
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
  `}function pi(e,t){return`
    <form class="response-form" data-form-preview-response data-form-id="${s(t.id)}" style="--form-accent:${s(t.theme_color||ie(e))}">
      <div class="designed-form-header">
        <span>${s(_(e))}</span>
        <h2>${s(t.title)}</h2>
        <p>${s(t.description||"Preview this form before sending it out.")}</p>
      </div>
      ${t.collect_email?'<label><span>Email</span><input name="submitter_email" type="email" placeholder="name@example.com" /></label>':""}
      ${t.questions.map(a=>ui(a)).join("")||g("No questions yet.")}
      <div class="form-actions">
        <button class="btn btn-primary" type="submit">${s(t.submit_label||"Submit")}</button>
      </div>
    </form>
  `}function ui(e){const t=`answer:${e.id}`,a=e.required?"required":"";return e.type==="paragraph"?K(e,`<textarea name="${s(t)}" rows="3" ${a}></textarea>`):e.type==="date"?K(e,`<input name="${s(t)}" type="date" ${a} />`):e.type==="file"?K(e,`<input name="${s(t)}" type="file" ${a} />`):e.type==="yesno"?K(e,`<select name="${s(t)}" ${a}><option value="">Choose</option><option>Yes</option><option>No</option></select>`):e.type==="rating"?K(e,`<input name="${s(t)}" type="range" min="1" max="5" value="3" ${a} />`):e.type==="dropdown"?K(e,`<select name="${s(t)}" ${a}><option value="">Choose</option>${(e.options||[]).map(n=>`<option>${s(n)}</option>`).join("")}</select>`):e.type==="checkbox"?K(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${s(t)}" type="checkbox" value="${s(n)}" /> ${s(n)}</label>`).join("")}</div>`):e.type==="multiple"?K(e,`<div class="choice-stack">${(e.options||[]).map(n=>`<label><input name="${s(t)}" type="radio" value="${s(n)}" ${a} /> ${s(n)}</label>`).join("")}</div>`):K(e,`<input name="${s(t)}" ${a} />`)}function mi(e,t){const a=t?ot(t.id):za(e),n=a[0]||null;return`
    <section class="forms-response-grid">
      <article class="panel response-list-panel">
        <div class="section-head"><div><h2>Responses</h2><p>${a.length} response${a.length===1?"":"s"}</p></div></div>
        <div class="response-list">
          ${a.map(o=>`
            <button type="button" class="response-card">
              <strong>${s(fe(o.form_id)?.title||"Unknown form")}</strong>
              <span>${s(o.submitted_by||o.submitter_email||"Anonymous")}</span>
              <small>${A(o.created_at)}</small>
            </button>
          `).join("")||g("No responses yet. Submit a preview response from the builder.")}
        </div>
      </article>
      <aside class="panel response-detail">
        ${n?Ya(n):g("No response selected.")}
      </aside>
    </section>
  `}function fi(e,t){const a=vs(t),n=Ge(t),o=B(t).filter(l=>l.status!=="done").length,r=z(F(t),"estimate_total"),c=hs(t);return`
    <section class="tool-page crm-page">
      ${V("CRM","Customers, contacts, and follow-ups built from company jobs.",`
        <button class="btn btn-primary" type="button" data-action="open-job-form" data-mode="new"><i class="ti ti-plus"></i>Add customer job</button>
      `)}
      <section class="metric-grid crm-metrics">
        ${h("Accounts",n.length)}
        ${h("Open jobs",F(t).filter(l=>l.stage!=="Closed").length)}
        ${h("Open tasks",o)}
        ${h("Pipeline value",v(r))}
      </section>
      <section class="crm-toolbar panel">
        <label>
          <span>Search</span>
          <input data-crm-search value="${s(i.crmQuery)}" placeholder="Find customer, contact, job, or address" />
        </label>
        <label>
          <span>Stage</span>
          <select data-crm-stage-filter>
            ${["all"].concat(Ie).map(l=>`<option value="${s(l)}" ${i.crmStageFilter===l?"selected":""}>${s(l==="all"?"All stages":l)}</option>`).join("")}
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
          <div><h2>Customers</h2><p>${a.length} visible account${a.length===1?"":"s"} in ${s(_(t))}</p></div>
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
              <span>${A(l.updatedAt)}</span>
            </a>
          `).join("")||g("No CRM accounts match this view. Add a customer job to start the list.")}
        </div>
      </section>
    </section>
  `}function bi(e,t){const a=ys(e,t);if(!a)return C("CRM","Customer account",g("This customer is not visible in the current company view."));const n=a.latestJob,o=a.tasks.filter(r=>r.status!=="done");return C("CRM",a.name,`
    <div class="crm-account-modal">
      <section class="crm-modal-summary">
        <div class="section-head">
          <div>
            <h2>${s(a.name)}</h2>
            <p>${s(a.subtitle)}</p>
          </div>
          ${Et(a.priority)}
        </div>
        ${N([["Primary contact",a.primaryContact],["Owner",a.owner],["Current stage",a.stage],["Pipeline value",v(a.estimateTotal)],["Open tasks",String(o.length)],["Last updated",A(a.updatedAt)]])}
      </section>
      <section class="crm-rollup-grid">
        ${h("Jobs",a.jobs.length)}
        ${h("Files",a.fileCount)}
        ${h("Forms",a.formCount)}
        ${h("Tasks",a.tasks.length)}
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
          ${o.slice(0,6).map(r=>it(r)).join("")||g("No open follow-ups for this customer.")}
        </div>
      </section>
    </div>
  `,"crm-modal")}function gi(e,t){const a=Pa(t),n=pe(t),o=Oa(t).slice().sort(Fe("received_at")).slice(0,5),r=jt(t).slice().sort(Fe("spent_at")).slice(0,5),c=Dt(t).slice().sort((l,m)=>l.name.localeCompare(m.name)).slice(0,5);return`
    <section class="tool-page finance-page">
      ${V("Finance","Invoices, payments, expenses, vendors, and job-linked money in one company view.",`
        <button class="btn btn-primary" type="button" data-action="new-finance-invoice"><i class="ti ti-file-dollar"></i>New invoice</button>
        <button class="btn" type="button" data-action="new-finance-payment"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="new-finance-expense"><i class="ti ti-receipt"></i>Add expense</button>
        <button class="btn" type="button" data-action="new-finance-vendor"><i class="ti ti-building-store"></i>Add vendor</button>
        <a class="btn" href="${b(d("finance",{report:"summary"},t))}" data-router><i class="ti ti-report-analytics"></i>Reports</a>
      `)}
      <section class="metric-grid finance-metrics">
        ${h("Estimated pipeline",v(a.pipeline))}
        ${h("Invoiced",v(a.invoiced))}
        ${h("Collected",v(a.collected))}
        ${h("Outstanding",v(a.outstanding))}
        ${h("Expenses",v(a.expenses))}
        ${h("Net position",v(a.net))}
      </section>
      <section class="panel finance-aging">
        <div class="section-head"><div><h2>AR aging</h2><p>Outstanding invoice balance by due date.</p></div></div>
        <div class="finance-aging-grid">
          ${[["Current",a.aging.current],["1-30",a.aging.thirty],["31-60",a.aging.sixty],["61+",a.aging.overSixty]].map(([l,m])=>`<div><span>${s(l)}</span><strong>${v(m)}</strong></div>`).join("")}
        </div>
      </section>
      <section class="panel finance-invoice-panel">
        <div class="section-head"><div><h2>Invoices</h2><p>${n.length} billing record${n.length===1?"":"s"} for ${s(_(t))}</p></div></div>
        <div class="data-table finance-invoice-table">
          <div class="table-head"><span>Invoice</span><span>Status</span><span>Job</span><span>Due</span><span>Total</span><span>Paid</span><span>Balance</span></div>
          ${n.map(l=>`
            <a class="table-row" href="${b(d("finance",{invoice:l.id},t))}" data-router>
              <span><strong>${s(l.invoice_number)}</strong><small>${s(l.client_name||$(l.job_id)?.client_name||"No client")}</small></span>
              <span>${Es(Ma(l))}</span>
              <span>${s($(l.job_id)?.name||"Company level")}</span>
              <span>${A(l.due_date)}</span>
              <span>${v(l.total)}</span>
              <span>${v(Ct(l.id))}</span>
              <span>${v(ee(l.id))}</span>
            </a>
          `).join("")||g("No invoices yet. Create one from a job or customer record.")}
        </div>
      </section>
      <section class="finance-secondary-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Recent payments</h2><p>Money received.</p></div></div>
          <div class="finance-compact-list">
            ${o.map(l=>Qe(ue(l.invoice_id)?.invoice_number||"Payment",l.method,v(l.amount),l.received_at)).join("")||g("No payments recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Expenses</h2><p>Job and company costs.</p></div></div>
          <div class="finance-compact-list">
            ${r.map(l=>Qe(pt(l.vendor_id),l.category,v(l.amount),l.spent_at,d("finance",{expense:l.id},t))).join("")||g("No expenses recorded.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Vendors</h2><p>Suppliers and subcontractors.</p></div></div>
          <div class="finance-compact-list">
            ${c.map(l=>Qe(l.name,l.category,l.status,l.updated_at,d("finance",{vendor:l.id},t))).join("")||g("No vendors recorded.")}
          </div>
        </article>
      </section>
    </section>
  `}function vi(e,t){return e.params.get("invoice")?yi(t,e.params.get("invoice")):e.params.get("expense")?hi(t,e.params.get("expense")):e.params.get("vendor")?_i(t,e.params.get("vendor")):e.params.get("report")==="summary"?$i(t):""}function yi(e,t){const a=ue(t);if(!a||a.company_id!==e)return C("Finance","Invoice",g("Invoice not found."));const n=Ea(a.id),o=$(a.job_id);return C("Finance",a.invoice_number,`
    <div class="finance-detail-modal">
      ${N([["Client",a.client_name||o?.client_name||"No client"],["Status",Ma(a)],["Job",o?.name||"Company level"],["Issued",A(a.issue_date)],["Due",A(a.due_date)],["Total",v(a.total)],["Collected",v(Ct(a.id))],["Balance",v(ee(a.id))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="new-finance-payment" data-invoice-id="${s(a.id)}"><i class="ti ti-cash"></i>Record payment</button>
        <button class="btn" type="button" data-action="edit-finance-invoice" data-invoice-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit invoice</button>
        ${o?`<a class="btn" href="${b(d("jobs",{tab:"profile",job_id:o.id},e))}" data-router><i class="ti ti-briefcase"></i>Open job</a>`:""}
      </div>
      <section class="finance-modal-section">
        <div class="section-head"><div><h2>Payments</h2><p>${n.length} payment${n.length===1?"":"s"} applied.</p></div></div>
        <div class="finance-compact-list">
          ${n.map(r=>Qe(r.reference||r.method,r.method,v(r.amount),r.received_at)).join("")||g("No payments yet.")}
        </div>
      </section>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function hi(e,t){const a=Aa(t);if(!a||a.company_id!==e)return C("Finance","Expense",g("Expense not found."));const n=$(a.job_id);return C("Finance",`${pt(a.vendor_id)} expense`,`
    <div class="finance-detail-modal">
      ${N([["Vendor",pt(a.vendor_id)],["Category",a.category],["Status",a.status],["Job",n?.name||"Company level"],["Spent",A(a.spent_at)],["Amount",v(a.amount)]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-expense" data-expense-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit expense</button>
        ${n?`<a class="btn" href="${b(d("files",{job_id:n.id},e))}" data-router><i class="ti ti-folder"></i>Job files</a>`:""}
      </div>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function _i(e,t){const a=Ft(t);if(!a||a.company_id!==e)return C("Finance","Vendor",g("Vendor not found."));const n=jt(e).filter(o=>o.vendor_id===a.id);return C("Finance",a.name,`
    <div class="finance-detail-modal">
      ${N([["Contact",a.contact_name||"No contact"],["Email",a.email||"No email"],["Phone",a.phone||"No phone"],["Category",a.category],["Status",a.status],["Spend",v(z(n,"amount"))]])}
      <div class="finance-modal-actions">
        <button class="btn btn-primary" type="button" data-action="edit-finance-vendor" data-vendor-id="${s(a.id)}"><i class="ti ti-pencil"></i>Edit vendor</button>
        <button class="btn" type="button" data-action="new-finance-expense" data-vendor-id="${s(a.id)}"><i class="ti ti-receipt"></i>Add expense</button>
      </div>
      ${a.notes?`<p class="finance-note">${s(a.notes)}</p>`:""}
    </div>
  `,"finance-modal")}function $i(e){const t=Pa(e);return C("Finance","Summary report",`
    <div class="finance-report-modal">
      ${N([["Company",_(e)],["Estimated pipeline",v(t.pipeline)],["Invoiced",v(t.invoiced)],["Collected",v(t.collected)],["Outstanding",v(t.outstanding)],["Expenses",v(t.expenses)],["Net position",v(t.net)]])}
      <div class="finance-aging-grid">
        <div><span>Current</span><strong>${v(t.aging.current)}</strong></div>
        <div><span>1-30</span><strong>${v(t.aging.thirty)}</strong></div>
        <div><span>31-60</span><strong>${v(t.aging.sixty)}</strong></div>
        <div><span>61+</span><strong>${v(t.aging.overSixty)}</strong></div>
      </div>
    </div>
  `,"finance-modal")}function Jt(e,t=null){const a=t||Ds(e);return C("Finance",t?"Edit invoice":"New invoice",`
    <form class="finance-form" data-finance-invoice-form>
      <input type="hidden" name="id" value="${s(a.id)}" />
      ${w("Invoice number","invoice_number",a.invoice_number,!0)}
      ${T("Linked job","job_id",a.job_id||"",[["","Company level"]].concat(F(e).map(n=>[n.id,n.name])))}
      ${w("Client","client_name",a.client_name,!0)}
      ${T("Status","status",a.status,va.map(n=>[n,n]))}
      ${w("Issue date","issue_date",a.issue_date,!1,"date")}
      ${w("Due date","due_date",a.due_date,!1,"date")}
      ${w("Subtotal","subtotal",a.subtotal,!1,"number")}
      ${w("Tax","tax",a.tax,!1,"number")}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save invoice</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function wi(e,t=""){const a=Fs(e,t),n=pe(e).map(o=>[o.id,`${o.invoice_number} - ${o.client_name||$(o.job_id)?.client_name||"No client"}`]);return C("Finance","Record payment",`
    <form class="finance-form" data-finance-payment-form>
      ${T("Invoice","invoice_id",a.invoice_id,n.length?n:[["","Create an invoice first"]])}
      ${w("Amount","amount",a.amount,!0,"number")}
      ${T("Method","method",a.method,_a.map(o=>[o,o]))}
      ${w("Received","received_at",a.received_at,!1,"date")}
      ${w("Reference","reference",a.reference)}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save payment</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Bt(e,t=null,a=""){const n=t||Cs(e,a),o=Dt(e).map(r=>[r.id,r.name]);return C("Finance",t?"Edit expense":"Add expense",`
    <form class="finance-form" data-finance-expense-form>
      <input type="hidden" name="id" value="${s(n.id)}" />
      ${T("Vendor","vendor_id",n.vendor_id,o.length?o:[["","No vendor yet"]])}
      ${T("Linked job","job_id",n.job_id||"",[["","Company level"]].concat(F(e).map(r=>[r.id,r.name])))}
      ${T("Category","category",n.category,Ke.map(r=>[r,r]))}
      ${T("Status","status",n.status,ya.map(r=>[r,r]))}
      ${w("Amount","amount",n.amount,!0,"number")}
      ${w("Spent date","spent_at",n.spent_at,!1,"date")}
      ${te("Notes","notes",n.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save expense</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Ht(e,t=null){const a=t||Is(e);return C("Finance",t?"Edit vendor":"Add vendor",`
    <form class="finance-form" data-finance-vendor-form>
      <input type="hidden" name="id" value="${s(a.id)}" />
      ${w("Vendor name","name",a.name,!0)}
      ${w("Contact","contact_name",a.contact_name)}
      ${w("Email","email",a.email,!1,"email")}
      ${w("Phone","phone",a.phone)}
      ${T("Category","category",a.category,Ke.map(n=>[n,n]))}
      ${T("Status","status",a.status,ha.map(n=>[n,n]))}
      ${te("Notes","notes",a.notes,"span-2")}
      <div class="form-actions span-2">
        <button class="btn btn-primary" type="submit">Save vendor</button>
        <button class="btn" type="button" data-action="close-modal">Cancel</button>
      </div>
    </form>
  `,"finance-form-modal")}function Si(e,t){return e.section==="clock"?ji(t):e.section==="approvals"?Di(t):ki(t)}function $t(e,t){return`
    ${_t("Operations sections",[[d("time",{},e),"My time",t==="time"],[d("approvals",{},e),"Approvals",t==="approvals"],[d("clock",{},e),"Clock dashboard",t==="clock"]])}
  `}function ki(e){const t=Ia(e),a=Ze(e);return`
    <section class="tool-page operations-page">
      ${V("My time","A compact personal work queue built from this company's tasks.",`
        <a class="btn" href="${b(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Open tasks</a>
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${$t(e,"time")}
      <section class="metric-grid operations-metrics">
        ${h("Due today",t.dueToday.length)}
        ${h("Overdue",t.overdue.length)}
        ${h("Open work",t.open.length)}
        ${h("In review",t.review.length)}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel span-2">
          <div class="section-head"><div><h2>Today</h2><p>Due now, overdue, and highest priority work.</p></div></div>
          <div class="queue-list">
            ${t.focus.slice(0,8).map(n=>it(n)).join("")||g("No time-sensitive tasks for this company.")}
          </div>
        </article>
        <article class="panel">
          <div class="section-head"><div><h2>Workload</h2><p>Simple task-based time view.</p></div></div>
          ${N([["Company",_(e)],["Assigned to you",String(t.assignedToMe.length)],["Due this week",String(t.thisWeek.length)],["Completed",String(t.done.length)]])}
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
                <span>${A(n.due)}</span>
                <span>${Va(n.status)}</span>
              </a>
            `).join("")||g("No upcoming tasks this week.")}
          </div>
        </article>
      </section>
    </section>
  `}function ji(e){const t=xa(e),a=Ze(e),n=rt().getTime(),o=n-6*864e5,r=Yt(e,n)+(a?Date.now()-Date.parse(a.started_at):0),c=Yt(e,o)+(a?Date.now()-Date.parse(a.started_at):0);return`
    <section class="tool-page operations-page clock-page">
      ${V("Clock dashboard","Local basic-mode clock tracking for the active company.",`
        <button class="btn btn-primary" type="button" data-action="${a?"clock-out":"clock-in"}"><i class="ti ${a?"ti-player-stop-filled":"ti-player-play-filled"}"></i>${a?"Clock out":"Clock in"}</button>
      `)}
      ${$t(e,"clock")}
      <section class="metric-grid operations-metrics">
        ${h("Today",Ue(r))}
        ${h("Last 7 days",Ue(c))}
        ${h("Entries",t.length)}
        ${h("Status",a?"Clocked in":"Off clock")}
      </section>
      <section class="dashboard-grid operations-grid">
        <article class="panel">
          <div class="section-head"><div><h2>Active now</h2><p>Current local clock session.</p></div></div>
          ${a?N([["User",Q(a.user_id)],["Started",ea(a.started_at)],["Task",a.task_title||"General shift"],["Elapsed",Ue(Date.now()-Date.parse(a.started_at))]]):g("Nobody is clocked in on this device.")}
        </article>
        <article class="panel span-2">
          <div class="section-head"><div><h2>Recent entries</h2><p>Local time records for this company.</p></div></div>
          <div class="data-table clock-table">
            <div class="table-head"><span>Entry</span><span>User</span><span>Start</span><span>Duration</span></div>
            ${t.slice(0,10).map(l=>`
              <div class="table-row">
                <span><strong>${s(l.task_title||"General shift")}</strong><small>${s(l.notes||"Clock entry")}</small></span>
                <span>${s(Q(l.user_id))}</span>
                <span>${ea(l.started_at)}</span>
                <span>${Ue(l.duration_ms)}</span>
              </div>
            `).join("")||g("No clock entries yet.")}
          </div>
        </article>
      </section>
    </section>
  `}function Di(e){const t=qa(e),a=t.filter(r=>r.type==="Form approval"),n=t.filter(r=>r.type==="Task review"),o=t.filter(r=>r.type==="Access request");return`
    <section class="tool-page operations-page">
      ${V("Approvals","Company review queue for forms, task handoffs, and access requests.",`
        <a class="btn" href="${b(d("forms",{},e))}" data-router><i class="ti ti-clipboard-list"></i>Forms</a>
        <a class="btn btn-primary" href="${b(d("tasks",{},e))}" data-router><i class="ti ti-list-check"></i>Tasks</a>
      `)}
      ${$t(e,"approvals")}
      <section class="metric-grid operations-metrics">
        ${h("Open approvals",t.length)}
        ${h("Forms",a.length)}
        ${h("Task reviews",n.length)}
        ${h("Access",o.length)}
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
              <span>${A(r.updatedAt)}</span>
            </a>
          `).join("")||g("No approvals need attention right now.")}
        </div>
      </section>
    </section>
  `}function zt(e){return`
    ${V(M(e||"workspace"),"This module will use the same company workspace shell when wired.","")}
    <section class="panel">
      ${g("Module data model pending.")}
    </section>
  `}function Fi(){document.title="Sign in | Quest HQ";const e=Da(i.route.params.get("return_url")||b(d("jobs",{},x())));$a.innerHTML=`
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
  `}function Ci(e){return`
    <div class="modal-overlay">
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <div class="modal-head">
          <div><div class="eyebrow">Quest Account</div><h2 id="profile-title">Profile</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <form class="profile-form" data-profile-form>
          <div class="profile-preview">
            ${st(e,"avatar large")}
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
  `}function Ii(e,t){if(i.modal==="profile")return Ci(t.profile);if(i.modal==="file-upload")return Zn();if(i.modal==="folder-new")return Gn();if(i.modal==="file-detail")return Ti(p());if(i.modal==="forms-tools")return Oi(p());if(i.modal==="form-actions")return Pi(p(),je(p()));if(i.modal==="form-new")return Ai(p());if(i.modal==="form-preview")return Mi(p(),je(p()));if(i.modal==="job-new")return lt(p(),null);if(i.modal==="job-edit")return lt(p(),de());if(i.modal==="finance-invoice-new")return Jt(p(),null);if(i.modal==="finance-invoice-edit")return Jt(p(),ue(i.selectedFinanceInvoiceId));if(i.modal==="finance-payment-new")return wi(p(),i.selectedFinanceInvoiceId);if(i.modal==="finance-expense-new")return Bt(p(),null,i.selectedFinanceVendorId);if(i.modal==="finance-expense-edit")return Bt(p(),Aa(i.selectedFinanceExpenseId));if(i.modal==="finance-vendor-new")return Ht(p(),null);if(i.modal==="finance-vendor-edit")return Ht(p(),Ft(i.selectedFinanceVendorId));if(e.name==="company"&&e.section==="crm"&&e.params.get("account"))return bi(e.companyId,e.params.get("account"));if(e.name==="company"&&e.section==="finance"){const a=vi(e,e.companyId);if(a)return a}return e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"?lt(e.companyId,e.jobId?$(e.jobId):de()):e.name==="company"&&e.section==="tasks"?xi(e,e.companyId):""}function C(e,t,a,n=""){return`
    <div class="modal-overlay">
      <div class="modal-panel ${s(n)}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${s(e)}</div><h2>${s(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </div>
    </div>
  `}function qi(e,t,a){return`
    <div class="modal-overlay drawer-overlay">
      <aside class="modal-panel drawer-panel" role="dialog" aria-modal="true">
        <div class="modal-head">
          <div><div class="eyebrow">${s(e)}</div><h2>${s(t)}</h2></div>
          <button class="btn" type="button" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${a}</div>
      </aside>
    </div>
  `}function lt(e,t){return C("Jobs",t?"Edit job":"Create job",An(e,t),"wide-modal")}function xi(e,t){const a=e.jobId?$(e.jobId):null,n=e.params.get("task_id")||"",o=n?St(n):null;return e.params.get("new")==="1"?C("Tasks","New task",Vt(t,a,null),"task-modal"):e.params.get("edit")==="1"&&o?C("Tasks","Edit task",Vt(t,a,o),"task-modal"):o?qi("Task detail",o.title,Ln(t,o)):""}function Ti(e){const t=i.selectedFileId?i.files.find(a=>a.id===i.selectedFileId):null;return t?C("Open file",t.file_name,Kn(t),"file-viewer-modal"):""}function Oi(e){return C("Forms","Tools",`
    <div class="compact-tool-form">
      <label>
        <span>Type filter</span>
        <select data-form-type-filter>
          <option value="all" ${i.formTypeFilter==="all"?"selected":""}>All types</option>
          ${xe.map(t=>`<option value="${s(t)}" ${i.formTypeFilter===t?"selected":""}>${s(t)}</option>`).join("")}
        </select>
      </label>
      <button class="btn" type="button" data-action="export-forms"><i class="ti ti-download"></i>Export JSON</button>
      <button class="btn btn-primary" type="button" data-action="new-form"><i class="ti ti-plus"></i>New form</button>
    </div>
  `)}function Ai(e){const t=i.formStartTab==="templates"?"templates":"blank",a=_e(),n=t==="templates"&&(a.find(m=>m.id===i.formStartTemplateId)||a[0])||null,o=n?.title||"",r=n?.description||"",c=n?.type||"Internal",l=n?.questions||[{type:"short",label:"First question",required:!1,options:[]}];return C("Forms","New form builder",`
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
            <div class="gform-accent-strip" style="--form-accent:${s(ie(e))}"></div>
            <label><span>Form title</span><input name="title" value="${s(o)}" placeholder="Untitled form" required /></label>
            <label><span>Form description</span><textarea name="description" rows="3" placeholder="What should people know before filling this out?">${s(r)}</textarea></label>
          </article>
          <div class="new-form-question-list">
            ${l.map((m,j)=>Ei(m,j)).join("")}
          </div>
        </section>
        <aside class="panel new-form-settings-card">
          <div class="section-head"><div><h2>Setup</h2><p>${n?s(n.title):"Blank starter"}</p></div></div>
          <div class="new-form-grid">
            <label><span>Type</span><select name="type">${xe.map(m=>`<option value="${s(m)}" ${m===c?"selected":""}>${s(m)}</option>`).join("")}</select></label>
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
  `,"form-create-modal builder-modal")}function Ei(e,t){const a=De(e)?`
    <div class="starter-options">
      ${(e.options||["Option 1","Option 2"]).map(n=>`<span>${s(n)}</span>`).join("")}
    </div>
  `:"";return`
    <article class="question-card starter-question-card">
      <div class="question-card-head">
        <span>${t+1}</span>
        <strong>${s(Js(e.type))}</strong>
      </div>
      <label><span>Question</span><input value="${s(e.label||"Untitled question")}" readonly /></label>
      ${e.help?`<small>${s(e.help)}</small>`:""}
      ${a}
      <label class="check-row"><input type="checkbox" ${e.required?"checked":""} disabled /> Required</label>
    </article>
  `}function Mi(e,t){return t?C("Forms","Preview form",`
    <div class="form-preview-modal-body">
      ${pi(e,t)}
    </div>
  `,"form-preview-modal"):C("Forms","Preview form",g("Choose a form first."))}function Pi(e,t){return t?C("Forms","Manage form",`
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
  `):C("Forms","Manage form",g("Choose a form first."))}function Ni(e){const t=e.target.closest("[data-action]");if(t){Li(e,t);return}const a=e.target.closest("[data-select-job]");if(a){e.preventDefault(),bs(a.dataset.selectJob);return}const n=e.target.closest("[data-select-task]");if(n){e.preventDefault(),gs(n.dataset.selectTask);return}const o=e.target.closest("a[href][data-router]");o&&(o.target||o.hasAttribute("download")||(e.preventDefault(),S(o.getAttribute("href"))))}function Li(e,t){const a=t.dataset.action;if(a==="refresh-data"){e.preventDefault(),i.dataLoaded=!1,i.sync={label:"Refreshing...",mode:"loading"},u();return}if(a==="sign-out"){e.preventDefault(),localStorage.removeItem(Ve),i.session=null,S("/login",{replace:!0});return}if(a==="open-profile"){e.preventDefault(),i.modal="profile",u();return}if(a==="open-file-upload"){e.preventDefault(),i.modal="file-upload",u();return}if(a==="open-folder-form"){e.preventDefault(),i.modal="folder-new",u();return}if(a==="open-job-form"){e.preventDefault();const n=t.dataset.jobId||"";n&&(i.selectedJobId=n),i.modal=t.dataset.mode==="edit"?"job-edit":"job-new",u();return}if(a==="open-forms-tools"){e.preventDefault(),i.modal="forms-tools",u();return}if(a==="open-form-actions"){e.preventDefault(),Le(t.dataset.formId,!1),i.modal="form-actions",u();return}if(a==="open-form-preview"){e.preventDefault(),Le(t.dataset.formId,!1),i.modal="form-preview",u();return}if(a==="set-form-start-tab"){e.preventDefault(),i.formStartTab=t.dataset.tab==="templates"?"templates":"blank",i.formStartTab==="blank"&&(i.formStartTemplateId=""),i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=_e()[0]?.id||""),u();return}if(a==="select-form-start-template"){e.preventDefault(),i.formStartTab="templates",i.formStartTemplateId=t.dataset.templateId||_e()[0]?.id||"",u();return}if(a==="close-modal"){e.preventDefault(),Ui();return}if(a==="set-task-view"){e.preventDefault(),i.taskView=t.dataset.view==="board"?"board":"table",localStorage.setItem(ma,i.taskView),u();return}if(a==="set-drive-view"){e.preventDefault(),i.driveView=t.dataset.view==="list"?"list":"grid",localStorage.setItem(fa,i.driveView),u();return}if(a==="clock-in"){e.preventDefault(),_s(p(),t.dataset.taskId||i.route?.params?.get("task_id")||"");return}if(a==="clock-out"){e.preventDefault(),Ta();return}if(a==="select-file"){e.preventDefault(),i.selectedFileId=t.dataset.fileId||"",i.modal="file-detail",u();return}if(a==="download-file"){e.preventDefault(),es(t.dataset.fileId);return}if(a==="delete-file"){e.preventDefault(),ts(t.dataset.fileId);return}if(a==="set-forms-tab"){e.preventDefault(),i.formsTab=t.dataset.tab==="responses"?"responses":"library",u();return}if(a==="set-form-editor-tab"){e.preventDefault(),i.formEditorTab=t.dataset.tab||"questions",u();return}if(a==="new-form"){e.preventDefault(),i.formStartTemplateId=t.dataset.templateId||"",i.formStartTab=t.dataset.startTab==="templates"||i.formStartTemplateId?"templates":"blank",i.formStartTab==="templates"&&!i.formStartTemplateId&&(i.formStartTemplateId=_e()[0]?.id||""),i.modal="form-new",u();return}if(a==="select-form"){e.preventDefault(),Le(t.dataset.formId);return}if(a==="toggle-form-card"){e.preventDefault();const n=t.dataset.formId||"";i.expandedFormIds.has(n)?i.expandedFormIds.delete(n):i.expandedFormIds.add(n),u();return}if(a==="edit-form"){e.preventDefault(),Le(t.dataset.formId,!1),i.formsTab="builder",i.formEditorTab="questions",i.modal="",u();return}if(a==="save-form"){e.preventDefault(),L("Form saved locally"),u();return}if(a==="publish-form"){e.preventDefault(),Xt(t.dataset.formId,"Published");return}if(a==="archive-form"){e.preventDefault(),Xt(t.dataset.formId,"Archived");return}if(a==="duplicate-form"){e.preventDefault(),Ws(t.dataset.formId);return}if(a==="delete-form"){e.preventDefault(),Ks(t.dataset.formId);return}if(a==="copy-form-link"){e.preventDefault(),Ys(t.dataset.formId);return}if(a==="export-forms"){e.preventDefault(),Gs(p());return}if(a==="new-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId="",i.modal="finance-invoice-new",u();return}if(a==="edit-finance-invoice"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||"",i.modal="finance-invoice-edit",u();return}if(a==="new-finance-payment"){e.preventDefault(),i.selectedFinanceInvoiceId=t.dataset.invoiceId||i.route?.params?.get("invoice")||"",i.modal="finance-payment-new",u();return}if(a==="new-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId="",i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-expense-new",u();return}if(a==="edit-finance-expense"){e.preventDefault(),i.selectedFinanceExpenseId=t.dataset.expenseId||"",i.modal="finance-expense-edit",u();return}if(a==="new-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId="",i.modal="finance-vendor-new",u();return}if(a==="edit-finance-vendor"){e.preventDefault(),i.selectedFinanceVendorId=t.dataset.vendorId||"",i.modal="finance-vendor-edit",u();return}if(a==="add-question"){e.preventDefault(),Zs(t.dataset.questionType||"multiple");return}if(a==="duplicate-question"){e.preventDefault(),Xs(t.dataset.questionId);return}if(a==="delete-question"){e.preventDefault(),eo(t.dataset.questionId);return}if(a==="move-question"){e.preventDefault(),to(t.dataset.questionId,Number(t.dataset.direction||0));return}if(a==="add-question-option"){e.preventDefault(),ao(t.dataset.questionId);return}if(a==="remove-question-option"){e.preventDefault(),no(t.dataset.questionId,Number(t.dataset.optionIndex||-1));return}if(a==="delete-job"){e.preventDefault(),Bi(t.dataset.jobId);return}a==="delete-task"&&(e.preventDefault(),zi(t.dataset.taskId))}function Ui(){const e=i.route||Ye();if(i.modal="",i.formStartTemplateId="",i.formStartTab="blank",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",e.name==="company"&&e.section==="tasks"&&(e.params.get("new")||e.params.get("edit")||e.params.get("task_id"))){S(d("tasks",e.jobId?{job_id:e.jobId}:{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="jobs"&&e.params.get("tab")==="editor"){const t=e.jobId?$(e.jobId):de();S(d("jobs",{tab:t?"profile":"pipeline",...t?{job_id:t.id}:{}},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="crm"&&e.params.get("account")){S(d("crm",{},e.companyId),{replace:!0});return}if(e.name==="company"&&e.section==="finance"&&(e.params.get("invoice")||e.params.get("expense")||e.params.get("vendor")||e.params.get("report"))){S(d("finance",{},e.companyId),{replace:!0});return}u()}function Ri(e){if(e.target.matches("[data-login-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries());if(!(String(t.username||"").trim()===le.localUsername&&String(t.password||"")===le.localPassword)){i.loginError="Invalid temporary credentials.",u();return}i.loginError="",i.session=mt(),I(Ve,i.session),S(Da(t.return_url||b(d("jobs",{},x()))),{replace:!0});return}if(e.target.matches("[data-profile-form]")){e.preventDefault();const t=Object.fromEntries(new FormData(e.target).entries()),a={...E().profile,full_name:String(t.full_name||"").trim()||"Quest Basic Mode",avatar_url:String(t.avatar_url||"").trim()};I(aa,a),i.profileDraft=a,i.session={...E(),profile:a},I(Ve,i.session),i.modal="",u();return}if(e.target.matches("[data-job-form]")){e.preventDefault(),Ji(e.target);return}if(e.target.matches("[data-task-form]")){e.preventDefault(),Hi(e.target);return}if(e.target.matches("[data-new-form-form]")){e.preventDefault(),zs(e.target);return}if(e.target.matches("[data-file-form]")){e.preventDefault(),Wi(e.target);return}if(e.target.matches("[data-folder-form]")){e.preventDefault(),Ki(e.target);return}if(e.target.matches("[data-finance-invoice-form]")){e.preventDefault(),Yi(e.target);return}if(e.target.matches("[data-finance-payment-form]")){e.preventDefault(),Gi(e.target);return}if(e.target.matches("[data-finance-expense-form]")){e.preventDefault(),Zi(e.target);return}if(e.target.matches("[data-finance-vendor-form]")){e.preventDefault(),Xi(e.target);return}e.target.matches("[data-form-preview-response]")&&(e.preventDefault(),io(e.target))}function Qi(e){if(e.target.matches("[data-global-search]")){i.query=e.target.value,Me();return}if(e.target.matches("[data-file-search]")){i.fileQuery=e.target.value,Me();return}if(e.target.matches("[data-form-search]")){i.formQuery=e.target.value,Me();return}if(e.target.matches("[data-crm-search]")){i.crmQuery=e.target.value,Me();return}if(e.target.matches("[data-form-field]")){Ga(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Za(e.target)}function Vi(e){if(e.target.matches("[data-company-switch]")){const t=e.target.value||x();ms(t);return}if(e.target.matches("[data-stage-filter]")){i.stageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-stage-filter]")){i.crmStageFilter=e.target.value||"all",u();return}if(e.target.matches("[data-crm-owner-filter]")){i.crmOwnerFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-status-filter]")){i.taskStatusFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-priority-filter]")){i.taskPriorityFilter=e.target.value||"all",u();return}if(e.target.matches("[data-task-job-filter]")){const t=e.target.value;S(d("tasks",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-analytics-job-filter]")){const t=e.target.value;S(d("analytics",t?{job_id:t}:{},p()));return}if(e.target.matches("[data-file-category-filter]")){i.fileCategoryFilter=e.target.value||"All categories",u();return}if(e.target.matches("[data-file-folder-filter]")){const t=e.target.value==="home"?"":e.target.value,a=i.route?.jobId||"";S(d("files",{...t?{folder:t}:{},...a?{job_id:a}:{}},p()));return}if(e.target.matches("[data-file-job-filter]")){const t=e.target.value;S(d("files",{...t?{folder:"jobs",job_id:t}:{}},p()));return}if(e.target.matches("[data-form-type-filter]")){i.formTypeFilter=e.target.value||"all",u();return}if(e.target.matches("[data-form-field]")){Ga(e.target);return}(e.target.matches("[data-question-field]")||e.target.matches("[data-question-option]"))&&Za(e.target)}async function Ji(e){const t=Se(Object.fromEntries(new FormData(e).entries()));t.id=t.id||crypto.randomUUID(),t.company_id=t.company_id||p(),t.estimate_total=Number(t.estimate_total||0),t.invoice_total=Number(t.invoice_total||0),t.updated_at=new Date().toISOString();const a=i.jobs.some(o=>o.id===t.id),n=ae();if(n){const o=a?await n.from("jobs").update(t).eq("id",t.id).select().single():await n.from("jobs").insert(t).select().single();if(!o.error&&o.data){dt(Se(o.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",S(d("jobs",{tab:"profile",job_id:o.data.id},t.company_id),{replace:!0});return}i.sync={label:"Saved locally",mode:"local"}}dt(t),i.modal="",S(d("jobs",{tab:"profile",job_id:t.id},t.company_id),{replace:!0})}async function Bi(e){if(!e)return;const t=p(),a=ae();a&&await a.from("jobs").delete().eq("id",e),i.jobs=i.jobs.filter(n=>n.id!==e),i.selectedJobId=F(t)[0]?.id||"",i.modal="",J(),S(d("jobs",{tab:"list"},t),{replace:!0})}async function Hi(e){const t=p(),a=Object.fromEntries(new FormData(e).entries()),n=ke({...a,id:String(a.id||"").trim()||`task-${crypto.randomUUID()}`,company_id:t,creator_id:E().profile.member_id||ne(t)[0]?.id||"abraham",urgency:a.priority||"medium",watchers:[],subtasks:[],activity:[],updated_at:new Date().toISOString()}),o=i.tasks.some(c=>c.id===n.id),r=ae();if(r){const c=qs(n),l=o?await r.from("tasks").update(c).eq("id",n.id).select().single():await r.from("tasks").insert(c).select().single();if(!l.error&&l.data){Wt(ke(l.data)),i.sync={label:"Quest Supabase live",mode:"live"},i.modal="",S(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0});return}i.sync={label:"Task saved locally",mode:"local"}}Wt(n),i.modal="",S(d("tasks",{...n.project_id?{job_id:n.project_id}:{},task_id:n.id},t),{replace:!0})}async function zi(e){if(!e)return;const t=p(),a=ae();a&&await a.from("tasks").delete().eq("id",e),i.tasks=i.tasks.filter(n=>n.id!==e),i.selectedTaskId="",i.modal="",J(),S(d("tasks",{},t),{replace:!0})}async function Wi(e){const t=p(),a=new FormData(e),n=Object.fromEntries(a.entries()),o=Array.from(e.elements.files?.files||[]),r=String(n.file_name||"").trim(),c=o.length?o:r?[null]:[];if(!c.length){i.sync={label:"Choose a file or enter a file name",mode:"local"},u();return}const l=ae();let m=0;for(const j of c){const f=crypto.randomUUID(),k=j?.name||r,U=String(n.folder||"shared"),D=`${t}/${n.job_id?`jobs/${n.job_id}`:U}/${f}-${Lt(k)}`;let Z=!1;l&&j&&(Z=!(await l.storage.from("quest-job-files").upload(D,j,{cacheControl:"3600",upsert:!1,contentType:j.type||"application/octet-stream"})).error);const Ut=He({id:f,company_id:t,job_id:n.job_id||"",folder:U,file_name:k,mime_type:j?.type||"application/octet-stream",size_bytes:j?.size||Number(n.size_bytes||0),category:n.category||Y(U),notes:n.notes||"",uploaded_by_label:n.uploaded_by_label||E().profile.full_name,bucket_id:"quest-job-files",object_path:Z||!j?D:"",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});if(l){const Ee=await l.from("job_files").insert(xs(Ut)).select().single();if(!Ee.error&&Ee.data){Kt(He(Ee.data)),m+=1;continue}Z&&await l.storage.from("quest-job-files").remove([D])}Kt(Ut)}i.sync=m===c.length?{label:"Quest Supabase live",mode:"live"}:{label:m?"Some files saved locally":"File record saved locally",mode:m?"loading":"local"},i.modal="",S(d("files",{folder:n.folder||"shared",...n.job_id?{job_id:n.job_id}:{}},t),{replace:!0})}function Ki(e){const t=Object.fromEntries(new FormData(e).entries()),a=String(t.name||"").trim();if(!a){i.sync={label:"Folder name is required",mode:"local"},u();return}const n=La({id:`folder-${crypto.randomUUID()}`,company_id:p(),name:a,parent_key:t.parent_key||"home",created_by_label:E().profile.full_name||"Quest HQ",created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.driveFolders.unshift(n),i.modal="",i.sync={label:"Folder created locally",mode:"local"},J(),u()}function Yi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=$(t.job_id),o=String(t.id||"").trim()?ue(String(t.id).trim()):null,r=xt({...t,id:String(t.id||"").trim()||`invoice-${crypto.randomUUID()}`,company_id:a,client_name:String(t.client_name||n?.client_name||"").trim(),total:q(t.subtotal)+q(t.tax),updated_at:new Date().toISOString()});as(r),o?.job_id&&o.job_id!==r.job_id&&ct(o.job_id),ct(r.job_id),i.modal="",i.sync={label:"Finance saved locally",mode:"local"},S(d("finance",{invoice:r.id},a),{replace:!0})}function Gi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=ue(t.invoice_id);if(!n||n.company_id!==a){i.sync={label:"Create an invoice before recording a payment",mode:"local"},u();return}const o=Tt({...t,id:`payment-${crypto.randomUUID()}`,company_id:a,created_at:new Date().toISOString()});i.financePayments.unshift(o),n.status=ee(n.id)<=0?"Paid":"Partially paid",n.updated_at=new Date().toISOString(),ct(n.job_id),J(),i.modal="",i.sync={label:"Payment recorded locally",mode:"local"},S(d("finance",o.invoice_id?{invoice:o.invoice_id}:{},a),{replace:!0})}function Zi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=Ot({...t,id:String(t.id||"").trim()||`expense-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});ns(n),i.modal="",i.sync={label:"Expense saved locally",mode:"local"},S(d("finance",{expense:n.id},a),{replace:!0})}function Xi(e){const t=Object.fromEntries(new FormData(e).entries()),a=p(),n=At({...t,id:String(t.id||"").trim()||`vendor-${crypto.randomUUID()}`,company_id:a,updated_at:new Date().toISOString()});is(n),i.modal="",i.sync={label:"Vendor saved locally",mode:"local"},S(d("finance",{vendor:n.id},a),{replace:!0})}async function es(e){const t=i.files.find(o=>o.id===e);if(!t?.object_path){i.sync={label:"No stored object for this file",mode:"local"},u();return}const a=ae();if(!a)return;const n=await a.storage.from(t.bucket_id||"quest-job-files").createSignedUrl(t.object_path,3600,{download:t.file_name});if(n.error||!n.data?.signedUrl){i.sync={label:"Download failed",mode:"local"},u();return}window.open(n.data.signedUrl,"_blank","noopener,noreferrer")}async function ts(e){const t=i.files.find(n=>n.id===e);if(!t)return;const a=ae();a&&(t.object_path&&await a.storage.from(t.bucket_id||"quest-job-files").remove([t.object_path]),await a.from("job_files").update({deleted_at:new Date().toISOString()}).eq("id",e)),i.files=i.files.filter(n=>n.id!==e),i.selectedFileId="",i.modal="",J(),u()}function dt(e){const t=i.jobs.findIndex(a=>a.id===e.id);t>=0?i.jobs[t]=e:i.jobs.unshift(e),i.selectedJobId=e.id,J()}function Wt(e){const t=i.tasks.findIndex(a=>a.id===e.id);t>=0?i.tasks[t]=e:i.tasks.unshift(e),i.selectedTaskId=e.id,J()}function Kt(e){const t=i.files.findIndex(a=>a.id===e.id);t>=0?i.files[t]=e:i.files.unshift(e),J()}function as(e){const t=i.financeInvoices.findIndex(a=>a.id===e.id);t>=0?i.financeInvoices[t]=e:i.financeInvoices.unshift(e),J()}function ns(e){const t=i.financeExpenses.findIndex(a=>a.id===e.id);t>=0?i.financeExpenses[t]=e:i.financeExpenses.unshift(e),J()}function is(e){const t=i.financeVendors.findIndex(a=>a.id===e.id);t>=0?i.financeVendors[t]=e:i.financeVendors.unshift(e),J()}function ct(e){if(!e)return;const t=$(e);t&&(t.invoice_total=z(pe(t.company_id).filter(a=>a.job_id===e),"total"),t.updated_at=new Date().toISOString(),dt(t))}function Me(){const e=document.getElementById("workspace");e&&(Fa(i.route),e.innerHTML=ka(i.route))}function Ye(){const e=wt(),t=new URLSearchParams(window.location.search);if(e==="/login")return{name:"login",path:e,params:t,section:"",companyId:"",jobId:""};if(e==="/"||e==="/command")return{name:"command",path:e,params:t,section:"dashboard",companyId:p(),jobId:t.get("job_id")||""};const a=e.match(/^\/company\/([^/]+)(?:\/([^/]+))?\/?$/);if(a){const n=a[2]||"jobs";return{name:"company",path:e,params:t,companyId:decodeURIComponent(a[1]),section:n,jobId:t.get("job_id")||""}}return{name:e.replace(/^\//,"")||"command",path:e,params:t,section:"",companyId:p(),jobId:t.get("job_id")||""}}function ss(){const e=wt(),t=new URLSearchParams(window.location.search),a=t.get("company_id")||t.get("company")||Re(t.get("job_id")||t.get("project_id"))||localStorage.getItem(We)||x(),n=Object.fromEntries(Object.entries(an).map(([c,l])=>[c,d(l,{},a)]));Object.assign(n,{"/index.html":d("jobs",{},a),"/command.html":d("jobs",{},a),"/login.html":"/login"});let o=n[e];if(e==="/jobs"){const c=t.get("tab");c==="tasks"?o=d("tasks",H(t,["job_id","task_id","new","edit"]),a):c==="files"?o=d("files",H(t,["job_id","folder"]),a):c==="forms"?o=d("forms",H(t,["job_id"]),a):c==="analytics"?o=d("analytics",H(t,["job_id"]),a):o=d("jobs",H(t,["job_id","tab"]),a)}if(e==="/files"&&(o=d("files",H(t,["job_id","folder"]),a)),e==="/forms"&&(o=d("forms",H(t,["job_id"]),a)),e==="/analytics"&&(o=d("analytics",H(t,["job_id"]),a)),e==="/crm"&&(o=d("crm",H(t,["account"]),a)),e==="/finance"&&(o=d("finance",H(t,["invoice","expense","vendor","report"]),a)),e==="/admin"&&(o=d("settings",{},a)),e==="/time"&&(o=d("time",{},a)),e==="/team"&&(o=d("team-chart",{},a)),e==="/team-chart"&&(o=d("team-chart",{},a)),e==="/approvals"&&(o=d("approvals",{},a)),e==="/clock"&&(o=d("clock",{},a)),e==="/task-management.html"){const c=t.get("project_id")||t.get("job_id")||"";o=d("tasks",c?{job_id:c}:{},Re(c)||a)}const r=e.match(/^\/jobs\/([^/]+)\/tasks\/?$/);if(r){const c=decodeURIComponent(r[1]);o=d("tasks",{job_id:c},Re(c)||a)}o&&window.history.replaceState({},"",b(o))}function os(e){if(e.name!=="company")return"";const t=Oe();if(!t.includes(e.companyId))return d(e.section||"jobs",Object.fromEntries(e.params.entries()),t[0]||x());if(!vt.map(o=>o.id).includes(e.section))return d("jobs",{},e.companyId);const n=e.jobId?Re(e.jobId):"";return n&&n!==e.companyId&&t.includes(n)?d(e.section,Object.fromEntries(e.params.entries()),n):""}function wt(){let e=window.location.pathname||"/";return be&&e.startsWith(be)&&(e=e.slice(be.length)||"/"),e.startsWith("/")||(e="/"+e),e.replace(/\/+$/,"")||"/"}function b(e){if(/^https?:\/\//i.test(e))return e;const[t,a=""]=String(e||"/").split("?"),n=t.startsWith("/")?t:"/"+t;return`${be}${n}${a?`?${a}`:""}`||"/"}function S(e,t={}){const a=/^https?:\/\//i.test(e)||e.startsWith(be+"/")||be===""&&e.startsWith("/")?e:b(e);t.replace?window.history.replaceState({},"",a):window.history.pushState({},"",a),u()}function rs(){return`${wt()}${window.location.search}`}function Da(e){try{const t=new URL(e,window.location.origin);return t.origin!==window.location.origin?b(d("jobs",{},x())):`${t.pathname}${t.search}`}catch{return b(d("jobs",{},x()))}}function d(e="jobs",t={},a=p()){const n=new URLSearchParams(t);for(const[o,r]of[...n.entries()])(r==null||r==="")&&n.delete(o);return`/company/${encodeURIComponent(O(a||x()))}/${e}${n.toString()?`?${n.toString()}`:""}`}function ls(e){return e.name==="company"?M(e.section):e.name==="command"?"Company Dashboard":e.name==="login"?"Sign in":M(e.name||"Workspace")}function ds(e,t){const[a]=t.split("?"),n=a.match(/^\/company\/([^/]+)\/([^/]+)/);return!n||e.name!=="company"?!1:e.companyId===decodeURIComponent(n[1])&&e.section===n[2]}function cs(e){return ba.includes(e)?e:"pipeline"}function ps(e){return{pipeline:"Pipeline",list:"List",profile:"Profile"}[e]||e}function us(e){const t=e.companyId||i.activeCompanyId||x(),a=Oe();i.activeCompanyId=a.includes(t)?t:a[0]||x(),localStorage.setItem(We,i.activeCompanyId)}function Fa(e){const t=p();e.jobId&&F(t).some(n=>n.id===e.jobId)&&(i.selectedJobId=e.jobId),(!i.selectedJobId||!F(t).some(n=>n.id===i.selectedJobId))&&(i.selectedJobId=F(t)[0]?.id||"");const a=e.params.get("task_id");a&&B(t).some(n=>n.id===a)&&(i.selectedTaskId=a),e.section!=="tasks"&&(i.selectedTaskId=""),i.driveFolder=e.params.get("folder")||"home"}function ms(e){const t=Oe(),a=O(e),n=t.includes(a)?a:t[0]||x();i.activeCompanyId=n,localStorage.setItem(We,n),fs();const o=i.route||Ye(),r=o.name==="company"?o.section:"jobs";S(d(r,{},n))}function fs(){i.modal="",i.selectedJobId="",i.selectedTaskId="",i.selectedFileId="",i.selectedFormId="",i.selectedQuestionId="",i.selectedFinanceInvoiceId="",i.selectedFinanceExpenseId="",i.selectedFinanceVendorId="",i.query="",i.fileQuery="",i.formQuery="",i.crmQuery="",i.stageFilter="all",i.crmStageFilter="all",i.crmOwnerFilter="all",i.taskStatusFilter="all",i.taskPriorityFilter="all",i.fileCategoryFilter="All categories",i.formTypeFilter="all",i.formsTab="library",i.driveFolder="home"}function bs(e){const t=$(e);t&&(i.selectedJobId=e,S(d("jobs",{tab:"profile",job_id:e},t.company_id)))}function gs(e){const t=St(e);t&&(i.selectedTaskId=e,S(d("tasks",{...t.project_id?{job_id:t.project_id}:{},task_id:e},t.company_id)))}function de(){return $(i.selectedJobId)||F(p())[0]||null}function $(e){return i.jobs.find(t=>t.id===e)||null}function St(e){return i.tasks.find(t=>t.id===e)||null}function F(e=p()){return i.jobs.filter(t=>t.company_id===e)}function B(e=p()){return i.tasks.filter(t=>t.company_id===e)}function ce(e=p()){return i.files.filter(t=>t.company_id===e)}function $e(e=p()){return i.driveFolders.filter(t=>t.company_id===e)}function ne(e=p()){return i.teamMembers.filter(t=>Array.isArray(t.company_ids)&&t.company_ids.includes(e))}function Ca(e=p()){const t=i.query.trim().toLowerCase();return F(e).filter(a=>i.stageFilter!=="all"&&a.stage!==i.stageFilter?!1:t?[a.name,a.client_name,a.contact_name,a.owner_name,a.site_address,a.job_type,_(a.company_id)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function Ge(e=p()){const t=new Map;return F(e).forEach(a=>{const n=String(a.client_name||"").trim()||"Unassigned customer",o=`account-${Lt(n.toLowerCase())}`;t.has(o)||t.set(o,{key:o,name:n,jobs:[]}),t.get(o).jobs.push(a)}),Array.from(t.values()).map(a=>{const n=a.jobs.slice().sort((D,Z)=>Date.parse(Z.updated_at||Z.created_at||0)-Date.parse(D.updated_at||D.created_at||0)),o=n[0]||null,r=n.map(D=>D.id),c=B(e).filter(D=>r.includes(D.project_id)),l=se(e).filter(D=>r.includes(D.linked_job_id)),m=ce(e).filter(D=>r.includes(D.job_id)),j=X(n.map(D=>D.contact_name)),f=X(n.map(D=>D.owner_name)),k=X(n.map(D=>D.site_address)),U=n.map(D=>D.priority||"Medium").sort((D,Z)=>ve(Z)-ve(D))[0]||"Medium";return{...a,jobs:n,tasks:c,latestJob:o,contacts:j,owners:f,addresses:k,forms:l,files:m,primaryContact:j[0]||"No contact",owner:f[0]||"Unassigned",stage:o?.stage||"Lead",priority:U,estimateTotal:z(n,"estimate_total"),fileCount:m.length,formCount:l.length,updatedAt:o?.updated_at||o?.created_at||new Date().toISOString(),subtitle:k[0]||`${n.length} linked job${n.length===1?"":"s"}`}}).sort((a,n)=>Date.parse(n.updatedAt||0)-Date.parse(a.updatedAt||0))}function vs(e=p()){const t=i.crmQuery.trim().toLowerCase();return Ge(e).filter(a=>i.crmStageFilter!=="all"&&!a.jobs.some(n=>n.stage===i.crmStageFilter)||i.crmOwnerFilter!=="all"&&!a.owners.includes(i.crmOwnerFilter)?!1:t?[a.name,a.primaryContact,a.owner,a.stage,...a.addresses,...a.contacts,...a.jobs.map(n=>n.name)].some(n=>String(n||"").toLowerCase().includes(t)):!0)}function ys(e,t){return Ge(e).find(a=>a.key===t)||null}function hs(e=p()){return X(F(e).map(t=>t.owner_name)).sort((t,a)=>t.localeCompare(a))}function Ia(e=p()){const t=E().profile.member_id||"",a=B(e).slice().sort(Gt),n=a.filter(kt),o=n.filter(k=>k.due===y(0)),r=n.filter(k=>ta(k.due)<0),c=n.filter(k=>{const U=ta(k.due);return U>=0&&U<=7}),l=n.filter(k=>k.assignee_id===t),m=n.filter(k=>["review","pending"].includes(k.status)),j=a.filter(k=>k.status==="done"),f=X(r.concat(o,l,m,c).map(k=>k.id)).map(k=>a.find(U=>U.id===k)).filter(Boolean).sort(Gt);return{tasks:a,open:n,dueToday:o,overdue:r,thisWeek:c,assignedToMe:l,review:m,done:j,focus:f}}function qa(e=p()){const t=se(e).filter(o=>(o.require_approval||o.type==="Client approval")&&!["Archived","Closed","Approved"].includes(o.status)).map(o=>({id:`form:${o.id}`,title:o.title,meta:$(o.linked_job_id)?.name||o.description||"Company form",type:"Form approval",owner:Q(o.creator_id),status:o.status,updatedAt:o.updated_at||o.created_at,href:d("forms",{form_id:o.id},e)})),a=B(e).filter(o=>["review","pending"].includes(o.status)).map(o=>({id:`task:${o.id}`,title:o.title,meta:$(o.project_id)?.name||o.description||"Company task",type:"Task review",owner:Q(o.assignee_id),status:oe(o.status),updatedAt:o.updated_at||o.due,href:d("tasks",{...o.project_id?{job_id:o.project_id}:{},task_id:o.id},e)})),n=i.memberships.filter(o=>o.company_id===e&&o.status!=="active").map(o=>({id:`access:${o.profile_id||o.member_id}`,title:Q(o.member_id||o.profile_id),meta:`${M(o.role)} access request`,type:"Access request",owner:"Quest admin",status:M(o.status),updatedAt:new Date().toISOString(),href:d("settings",{tab:"access"},e)}));return t.concat(a,n).sort((o,r)=>Date.parse(r.updatedAt||0)-Date.parse(o.updatedAt||0))}function Ze(e=p()){const t=i.activeTimer;return!t||t.company_id!==e?null:t}function xa(e=p()){return i.timeEntries.filter(t=>t.company_id===e).sort((t,a)=>Date.parse(a.started_at||0)-Date.parse(t.started_at||0))}function Yt(e=p(),t=0){return xa(e).filter(a=>Date.parse(a.started_at||0)>=t).reduce((a,n)=>a+q(n.duration_ms),0)}function _s(e=p(),t=""){i.activeTimer&&Ta(!1);const a=t?St(t):null;i.activeTimer={id:`timer-${crypto.randomUUID()}`,company_id:e,user_id:E().profile.member_id||E().profile.id,task_id:a?.company_id===e?a.id:"",task_title:a?.company_id===e?a.title:"",started_at:new Date().toISOString()},Ja(),i.sync={label:"Clock started locally",mode:"local"},u()}function Ta(e=!0){const t=i.activeTimer;if(!t)return;const a=new Date().toISOString(),n=Math.max(0,Date.parse(a)-Date.parse(t.started_at||a));i.timeEntries.unshift({id:`time-${crypto.randomUUID()}`,company_id:t.company_id,user_id:t.user_id,task_id:t.task_id||"",task_title:t.task_title||"",started_at:t.started_at,ended_at:a,duration_ms:n,notes:t.task_title?"Task timer":"General shift"}),i.activeTimer=null,Ja(),i.sync={label:"Clock stopped locally",mode:"local"},e&&u()}function kt(e){return e.status!=="done"}function Gt(e,t){const a=Date.parse(e.due||0)-Date.parse(t.due||0);return a||ve(t.priority)-ve(e.priority)}function pe(e=p()){return i.financeInvoices.filter(t=>t.company_id===e).sort(Fe("updated_at"))}function Oa(e=p()){return i.financePayments.filter(t=>t.company_id===e)}function jt(e=p()){return i.financeExpenses.filter(t=>t.company_id===e).sort(Fe("updated_at"))}function Dt(e=p()){return i.financeVendors.filter(t=>t.company_id===e)}function ue(e){return i.financeInvoices.find(t=>t.id===e)||null}function Aa(e){return i.financeExpenses.find(t=>t.id===e)||null}function Ft(e){return i.financeVendors.find(t=>t.id===e)||null}function pt(e){return Ft(e)?.name||"No vendor"}function Ea(e){return i.financePayments.filter(t=>t.invoice_id===e).sort(Fe("received_at"))}function Ct(e){return z(Ea(e),"amount")}function ee(e){const t=ue(e);return Math.max(0,q(t?.total)-Ct(e))}function Ma(e){const t=ee(e.id);return t<=0&&q(e.total)>0?"Paid":t<q(e.total)?"Partially paid":e.status==="Sent"&&en(e.due_date)>0?"Overdue":e.status}function Pa(e=p()){const t=pe(e),a=Oa(e),n=jt(e).filter(l=>["Approved","Paid"].includes(l.status)),o={current:0,thirty:0,sixty:0,overSixty:0};t.forEach(l=>{const m=ee(l.id);if(!m)return;const j=en(l.due_date);j<=0?o.current+=m:j<=30?o.thirty+=m:j<=60?o.sixty+=m:o.overSixty+=m});const r=z(a,"amount"),c=z(n,"amount");return{pipeline:z(F(e),"estimate_total"),invoiced:z(t,"total"),collected:r,outstanding:t.reduce((l,m)=>l+ee(m.id),0),expenses:c,net:r-c,aging:o}}function $s(e=p(),t=""){const a=i.query.trim().toLowerCase();return B(e).filter(n=>t&&n.project_id!==t||i.taskStatusFilter!=="all"&&n.status!==i.taskStatusFilter||i.taskPriorityFilter!=="all"&&n.priority!==i.taskPriorityFilter?!1:a?[n.title,n.description,Ae(n.type),Q(n.assignee_id),$(n.project_id)?.name].some(o=>String(o||"").toLowerCase().includes(a)):!0)}function Na(){const e=Oe();return i.companies.filter(t=>e.includes(t.id))}function ws(e,t=p()){if(!e)return!0;const a=E().profile,n=String(i.memberships.find(r=>r.company_id===t&&r.profile_id===a.id&&r.status==="active")?.role||a.role||"member").toLowerCase(),o=Rt[n]||Rt.member;return o.includes("*")||o.includes(e)}function Oe(){const e=E().profile,t=i.companies.map(o=>o.id);if(["developer","admin"].includes(e.role))return X(t.length?t:ge.map(o=>O(o.id)));const a=i.memberships.filter(o=>o.profile_id===e.id&&o.status!=="disabled").map(o=>O(o.company_id)),n=a.length?a:e.company_ids||[];return X(n.map(O)).filter(o=>t.includes(o))}function p(){const e=Oe();return e.includes(i.activeCompanyId)?i.activeCompanyId:e[0]||x()}function x(){return O(ge[0].id)}function Xe(e){const t=O(e);return i.companies.find(a=>a.id===t)||ge.map(we).find(a=>a.id===t)||null}function _(e){const t=Xe(e);return t?et(t):e||"Company"}function et(e){return e.short_name||e.label||e.name||e.id}function ie(e){return Xe(e)?.color||"#f0b23b"}function Re(e){return O(i.jobs.find(t=>t.id===e)?.company_id||"")}function It(e){const t=E().profile;return["developer","admin"].includes(t.role)?M(t.role):M(i.memberships.find(a=>a.company_id===e&&a.profile_id===t.id)?.role||t.role||"member")}function qt(e,t){const a=i.memberships.find(n=>n.company_id===e&&(n.member_id===t||n.profile_id===t));return M(a?.role||"member")}function Q(e){const t=i.teamMembers.find(a=>a.id===e);return t?.full_name||t?.name||e||"Unassigned"}function tt(e){return i.tasks.filter(t=>t.project_id===e).length}function Be(e){return i.files.filter(t=>t.job_id===e).length}function O(e){return{"quest-roofing":"roofing","quest-drafting":"drafting"}[String(e||"").trim()]||String(e||"").trim()}function ut(e){const t=new Map;return e.map(we).forEach(a=>{!a.id||t.has(a.id)||t.set(a.id,a)}),Array.from(t.values())}function we(e){return{id:O(e.id||""),name:String(e.name||e.short_name||e.id||"").trim(),short_name:String(e.short_name||e.label||e.name||e.id||"").trim(),color:String(e.color||"#f0b23b"),label:String(e.label||e.short_name||e.name||e.id||"").trim()}}function Se(e){return{id:String(e.id||""),company_id:O(e.company_id||x()),name:String(e.name||"").trim()||"Untitled Job",client_name:String(e.client_name||"").trim(),contact_name:String(e.contact_name||"").trim(),site_address:String(e.site_address||"").trim(),job_type:String(e.job_type||"Roofing").trim(),stage:Ie.includes(e.stage)?e.stage:"Lead",priority:["Low","Medium","High","Urgent"].includes(e.priority)?e.priority:"Medium",owner_name:String(e.owner_name||"").trim(),scope:String(e.scope||"").trim(),notes:String(e.notes||"").trim(),estimate_total:q(e.estimate_total),invoice_total:q(e.invoice_total),task_count:q(e.task_count),file_count:q(e.file_count),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function ke(e){const t=Je.includes(String(e.priority||"").toLowerCase())?String(e.priority).toLowerCase():"medium",a=qe.includes(String(e.status||"").toLowerCase())?String(e.status).toLowerCase():"todo";return{id:String(e.id||""),title:String(e.title||"").trim()||"Untitled task",description:String(e.description||"").trim(),type:ga.includes(e.type)?e.type:"admin",label:e.label||null,bid_status:e.bid_status||null,company_id:O(e.company_id||x()),creator_id:String(e.creator_id||"abraham"),assignee_id:String(e.assignee_id||e.creator_id||"abraham"),project_id:String(e.project_id||""),due:String(e.due||y(1)).slice(0,10),due_time:e.due_time||null,reminder_at:e.reminder_at||null,priority:t,urgency:Je.includes(String(e.urgency||"").toLowerCase())?String(e.urgency).toLowerCase():t,status:a,watchers:Array.isArray(e.watchers)?e.watchers:[],subtasks:Array.isArray(e.subtasks)?e.subtasks:[],activity:Array.isArray(e.activity)?e.activity:[],cleared_at:e.cleared_at||null,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||new Date().toISOString()}}function He(e){const t=String(e.category||e.folder||"Shared");return{id:String(e.id||crypto.randomUUID()),company_id:O(e.company_id||x()),job_id:String(e.job_id||""),folder:String(e.folder||ro(t)),file_name:String(e.file_name||e.name||"Untitled file"),mime_type:String(e.mime_type||"application/octet-stream"),size_bytes:q(e.size_bytes),category:t,bucket_id:e.bucket_id||"quest-job-files",object_path:e.object_path||"",uploaded_by_label:String(e.uploaded_by_label||"Quest HQ"),notes:String(e.notes||""),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function La(e){return{id:String(e.id||`folder-${crypto.randomUUID()}`),company_id:O(e.company_id||x()),name:String(e.name||"New folder").trim()||"New folder",parent_key:String(e.parent_key||"home"),created_by_label:String(e.created_by_label||"Quest HQ"),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function at(e){const t=Array.isArray(e.questions)?e.questions.map(nt):[],a=xe.includes(e.type)?e.type:"Internal",n=ht.includes(e.status)?e.status:"Draft";return{id:String(e.id||`form-${crypto.randomUUID()}`),company_id:O(e.company_id||x()),title:String(e.title||"Untitled form").trim()||"Untitled form",description:String(e.description||"").trim(),type:a,status:n,audience:String(e.audience||"Internal").trim(),creator_id:String(e.creator_id||e.created_by||e.created_by_id||""),linked_job_id:String(e.linked_job_id||e.job_id||""),theme_color:String(e.theme_color||"#f0b23b"),background:String(e.background||"clean"),submit_label:String(e.submit_label||"Submit").trim()||"Submit",collect_email:e.collect_email!==!1,require_approval:e.require_approval===!0,questions:t,created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function nt(e){const t=Te.some(([n])=>n===e.type)?e.type:"short",a={id:String(e.id||`q-${crypto.randomUUID()}`),type:t,label:String(e.label||"Untitled question").trim()||"Untitled question",help:String(e.help||"").trim(),required:e.required===!0,options:Array.isArray(e.options)?e.options.map(n=>String(n||"").trim()).filter(Boolean):[]};return De(a)&&!a.options.length&&(a.options=["Option 1","Option 2"]),a}function Ua(e){return{id:String(e.id||`response-${crypto.randomUUID()}`),company_id:O(e.company_id||x()),form_id:String(e.form_id||e.formId||""),submitted_by:String(e.submitted_by||e.submitter_email||"Anonymous"),submitter_email:String(e.submitter_email||""),answers:e.answers&&typeof e.answers=="object"?e.answers:{},created_at:e.created_at||new Date().toISOString()}}function xt(e){const t=q(e.subtotal),a=q(e.tax),n=q(e.total)||t+a;return{id:String(e.id||`invoice-${crypto.randomUUID()}`),company_id:O(e.company_id||x()),job_id:String(e.job_id||""),client_name:String(e.client_name||"").trim(),invoice_number:String(e.invoice_number||`INV-${Date.now()}`).trim(),status:va.includes(e.status)?e.status:"Draft",issue_date:String(e.issue_date||y(0)).slice(0,10),due_date:String(e.due_date||y(30)).slice(0,10),subtotal:t,tax:a,total:n,notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Tt(e){return{id:String(e.id||`payment-${crypto.randomUUID()}`),company_id:O(e.company_id||x()),invoice_id:String(e.invoice_id||""),amount:q(e.amount),method:_a.includes(e.method)?e.method:"ACH",received_at:String(e.received_at||y(0)).slice(0,10),reference:String(e.reference||"").trim(),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString()}}function Ot(e){return{id:String(e.id||`expense-${crypto.randomUUID()}`),company_id:O(e.company_id||x()),job_id:String(e.job_id||""),vendor_id:String(e.vendor_id||""),category:Ke.includes(e.category)?e.category:"Other",amount:q(e.amount),status:ya.includes(e.status)?e.status:"Pending",spent_at:String(e.spent_at||y(0)).slice(0,10),notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function At(e){return{id:String(e.id||`vendor-${crypto.randomUUID()}`),company_id:O(e.company_id||x()),name:String(e.name||"New vendor").trim()||"New vendor",contact_name:String(e.contact_name||"").trim(),email:String(e.email||"").trim(),phone:String(e.phone||"").trim(),category:Ke.includes(e.category)?e.category:"Other",status:ha.includes(e.status)?e.status:"Active",notes:String(e.notes||"").trim(),created_at:e.created_at||new Date().toISOString(),updated_at:e.updated_at||e.created_at||new Date().toISOString()}}function Ra(e){return{id:String(e.id||""),name:String(e.name||e.full_name||"").trim(),full_name:String(e.full_name||e.name||"").trim(),email:String(e.email||"").trim(),color:String(e.color||"#f0b23b"),avatar_url:String(e.avatar_url||""),active:e.active!==!1,supervisor_id:String(e.supervisor_id||e.manager_id||""),company_ids:Array.isArray(e.company_ids)?X(e.company_ids.map(O)):[]}}function Ss(e){return{company_id:O(e.company_id||""),profile_id:String(e.profile_id||e.member_id||""),member_id:e.member_id?String(e.member_id):"",role:String(e.role||"member"),status:String(e.status||"active")}}function ks(e=p()){return Se({id:"",company_id:e,name:"",stage:"Lead",priority:"Medium",job_type:"Roofing"})}function js(e=p(),t=""){return ke({id:"",title:"",company_id:e,project_id:t,assignee_id:ne(e)[0]?.id||"abraham",creator_id:E().profile.member_id||"abraham",due:y(1),priority:"medium",status:"todo",type:"admin"})}function Ds(e=p()){const t=de();return xt({id:"",company_id:e,job_id:t?.company_id===e?t.id:"",client_name:t?.company_id===e?t.client_name:"",invoice_number:lo(e),status:"Draft",issue_date:y(0),due_date:y(30),subtotal:t?.company_id===e?t.estimate_total:0,tax:0,notes:""})}function Fs(e=p(),t=""){const a=t?ue(t):pe(e).find(o=>ee(o.id)>0),n=a?.company_id===e?a:null;return Tt({id:"",company_id:e,invoice_id:n?.id||"",amount:n?ee(n.id):0,method:"ACH",received_at:y(0),reference:"",notes:""})}function Cs(e=p(),t=""){return Ot({id:"",company_id:e,job_id:de()?.company_id===e?de().id:"",vendor_id:t||Dt(e)[0]?.id||"",category:"Materials",status:"Pending",amount:0,spent_at:y(0),notes:""})}function Is(e=p()){return At({id:"",company_id:e,name:"",category:"Materials",status:"Active"})}function qs(e){return{id:e.id,title:e.title,description:e.description,type:e.type,label:e.label,bid_status:e.bid_status,company_id:e.company_id,creator_id:e.creator_id,assignee_id:e.assignee_id,project_id:e.project_id||null,due:e.due,due_time:e.due_time,reminder_at:e.reminder_at,priority:e.priority,urgency:e.urgency,status:e.status,watchers:e.watchers,subtasks:e.subtasks,activity:e.activity,cleared_at:e.cleared_at}}function xs(e){return{company_id:e.company_id,job_id:e.job_id||null,bucket_id:e.bucket_id,object_path:e.object_path,file_name:e.file_name,mime_type:e.mime_type,size_bytes:e.size_bytes,category:e.category,folder:e.folder,uploaded_by_label:e.uploaded_by_label,notes:e.notes}}function E(){return i.session?{...i.session,profile:{...mt().profile,...i.session.profile||{},...i.profileDraft||{}}}:mt()}function mt(){const e={id:"basic-quest-user",email:"lumen123@quest-hq.local",full_name:"Quest Basic Mode",role:"developer",role_label:"Developer",member_id:"abraham",company_ids:["roofing","drafting","lumen"],avatar_url:"",...i.profileDraft||{}};return{auth:"local-basic",user:{id:e.id,username:le.localUsername,email:e.email},profile:e}}function V(e,t,a=""){const n=wa();return`
    <section class="workspace-head">
      <div class="head-copy">
        <span class="head-symbol">${W(n)}</span>
        <div>
          <div class="context-line"><span>${s(_(p()))}</span><b>${s(It(p()))}</b></div>
          <h1>${s(e)}</h1>
          <p>${s(t)}</p>
        </div>
      </div>
      ${a?`<div class="head-actions">${a}</div>`:""}
    </section>
  `}function Ts(e){return`<section class="metric-grid">${e.map(([t,a])=>`<article class="metric">${W(Sa(t),"metric-symbol")}<span>${s(t)}</span><strong>${s(a)}</strong></article>`).join("")}</section>`}function Os(e){return`
    <button class="queue-row" type="button" data-select-job="${s(e.id)}">
      <span><strong>${s(e.name)}</strong><small>${s(e.client_name||_(e.company_id))}</small></span>
      ${Et(e.priority)}
      <b>${s(e.stage)}</b>
    </button>
  `}function it(e){return`
    <button class="queue-row" type="button" data-select-task="${s(e.id)}">
      <span><strong>${s(e.title)}</strong><small>${s($(e.project_id)?.name||_(e.company_id))}</small></span>
      ${Qa(e.priority)}
      <b>${s(oe(e.status))}</b>
    </button>
  `}function As(e){return`
    <button class="job-card priority-${s(e.priority.toLowerCase())} ${e.id===i.selectedJobId?"active":""}" type="button" data-select-job="${s(e.id)}">
      <strong>${s(e.name)}</strong>
      <span>${s(e.client_name||"No client")}</span>
      <small>${s(_(e.company_id))} - ${s(e.owner_name||"Unassigned")}</small>
      <em>${s(tt(e.id))} tasks</em>
    </button>
  `}function Pe(e,t,a,n){return`
    <a class="mini-link" href="${b(e)}" data-router>
      <i class="ti ${s(t)}"></i>
      <span><strong>${s(a)}</strong><small>${s(n)}</small></span>
    </a>
  `}function N(e){return`<div class="contract-rows">${e.map(([t,a])=>`<div><span>${s(t)}</span><strong>${s(a)}</strong></div>`).join("")}</div>`}function w(e,t,a="",n=!1,o="text",r=""){return`<label class="${s(r)}"><span>${s(e)}</span><input name="${s(t)}" type="${s(o)}" value="${s(a)}" ${n?"required":""} /></label>`}function te(e,t,a="",n=""){return`<label class="${s(n)}"><span>${s(e)}</span><textarea name="${s(t)}" rows="4">${s(a)}</textarea></label>`}function T(e,t,a,n){return`
    <label><span>${s(e)}</span><select name="${s(t)}">
      ${n.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function Et(e){return`<span class="priority ${s(String(e).toLowerCase())}">${s(e)}</span>`}function Qa(e){return`<span class="priority ${s(e)}">${s(M(e))}</span>`}function Va(e){return`<span class="status-pill ${s(e)}">${s(oe(e))}</span>`}function Es(e){return`<span class="finance-status ${s(Lt(e))}">${s(e)}</span>`}function st(e,t){if(e.avatar_url)return`<span class="${s(t)}"><img src="${s(e.avatar_url)}" alt="" /></span>`;const a=String(e.full_name||e.email||"QB").trim().split(/\s+/).map(n=>n[0]).join("").slice(0,2).toUpperCase()||"QB";return`<span class="${s(t)}">${s(a)}</span>`}function g(e){return`<div class="empty-state">${W("q-empty","empty-symbol")}<span>${s(e)}</span></div>`}function H(e,t){const a={};return t.forEach(n=>{const o=e.get(n);o&&(a[n]=o)}),a}function J(){I(na,i.jobs),I(ia,i.tasks),I(sa,i.files),I(oa,i.driveFolders),I(Ce,i.forms),I(ft,i.formResponses),I(da,i.financeInvoices),I(ca,i.financePayments),I(pa,i.financeExpenses),I(ua,i.financeVendors),I(bt,i.timeEntries),I(gt,i.activeTimer),I(ra,i.teamMembers),I(la,i.memberships)}function Ja(){I(bt,i.timeEntries),I(gt,i.activeTimer)}function h(e,t,a=""){return`<article class="metric">${W(Sa(e),"metric-symbol")}<span>${s(e)}</span><strong>${s(t)}</strong>${a?`<small>${s(a)}</small>`:""}</article>`}function re(e,t){return`<div><strong>${s(e)}</strong><span>${s(t)}</span></div>`}function Qe(e,t,a,n,o=""){const r=`
    <span><strong>${s(e)}</strong><small>${s(t||"Finance record")}</small></span>
    <b>${s(a)}</b>
    <em>${A(n)}</em>
  `;return o?`<a class="finance-compact-row" href="${b(o)}" data-router>${r}</a>`:`<div class="finance-compact-row">${r}</div>`}function Zt(e,t){const a=ce(e);return t==="jobs"?a.filter(n=>n.job_id).length:a.filter(n=>n.folder===t).length}function Ba(e="home",t=null){return t?.id?`job:${t.id}`:e||"home"}function Ms(e,t="home",a=null){const n=Ba(t,a),o=$e(e).filter(r=>r.parent_key===n).map(r=>Ps(e,r));return a?o:t==="home"?yt.map(([c,l,m,j])=>({id:c,name:l,caption:m,icon:j,href:b(d("files",{folder:c},e)),countLabel:`${Zt(e,c)} file${Zt(e,c)===1?"":"s"}`,updatedLabel:""})).concat(o):t==="jobs"?F(e).map(c=>({id:`job:${c.id}`,name:c.name,caption:c.client_name||_(e),icon:"ti-folder",href:b(d("files",{folder:"jobs",job_id:c.id},e)),countLabel:`${Be(c.id)} file${Be(c.id)===1?"":"s"}`,updatedLabel:A(c.updated_at)})).concat(o):o}function Ps(e,t){const a=$e(e).filter(r=>r.parent_key===t.id).length,n=ce(e).filter(r=>r.folder===t.id).length,o=a+n;return{id:t.id,name:t.name,caption:"Custom folder",icon:"ti-folder",href:b(d("files",{folder:t.id},e)),countLabel:`${o} item${o===1?"":"s"}`,updatedLabel:A(t.updated_at)}}function Ns(e,t,a=null){if(a)return`<span>/</span><a href="${b(d("files",{folder:"jobs"},e))}" data-router>Jobs</a>`;const n=$e(e).find(m=>m.id===t);if(!n)return`<span>/</span><strong>${s(Y(t))}</strong>`;const o=[];let r=n;const c=new Set;for(;r&&!c.has(r.id);)c.add(r.id),o.unshift(r),r=$e(e).find(m=>m.id===r.parent_key);return`${n.parent_key&&!n.parent_key.startsWith("folder-")&&n.parent_key!=="home"?`<span>/</span><a href="${b(d("files",{folder:n.parent_key},e))}" data-router>${s(Y(n.parent_key))}</a>`:""}${o.map((m,j)=>`<span>/</span>${j===o.length-1?`<strong>${s(m.name)}</strong>`:`<a href="${b(d("files",{folder:m.id},e))}" data-router>${s(m.name)}</a>`}`).join("")}`}function Ls(e=p(),t="home",a=""){const n=(i.fileQuery||i.query||"").trim().toLowerCase(),o=i.fileCategoryFilter;let r=ce(e);return a?r=r.filter(c=>c.job_id===a):t&&t!=="home"&&(t==="jobs"?r=r.filter(c=>c.job_id):r=r.filter(c=>c.folder===t)),o&&o!=="All categories"&&(r=r.filter(c=>String(c.category||Y(c.folder)).toLowerCase()===o.toLowerCase())),n&&(r=r.filter(c=>[c.file_name,c.category,c.uploaded_by_label,c.notes,c.object_path,$(c.job_id)?.name].some(l=>String(l||"").toLowerCase().includes(n)))),r.sort((c,l)=>new Date(l.created_at||0)-new Date(c.created_at||0))}function me(e){const t=String(e.mime_type||"").toLowerCase(),a=Ha(e);return t.includes("pdf")||a==="pdf"?"PDF":t.includes("image")||["png","jpg","jpeg","gif","webp","svg"].includes(a)?"Image":t.includes("zip")||["zip","rar","7z"].includes(a)?"Archive":t.includes("spreadsheet")||t.includes("excel")||["xls","xlsx","csv"].includes(a)?"Excel":t.includes("word")||["doc","docx"].includes(a)?"Word":t.includes("text")||["txt","md","json","csv","log"].includes(a)?"Text":t.includes("presentation")||["ppt","pptx"].includes(a)?"PowerPoint":a?a.toUpperCase():Y(e.folder)}function Mt(e){const t=me(e).toLowerCase();return t==="pdf"?"pdf":t==="image"?"image":t==="excel"?"sheet":t==="text"?"text":["word","powerpoint"].includes(t)?"doc":t==="archive"?"zip":"doc"}function Ha(e){return String(e.file_name||"").split(".").pop()?.toLowerCase()||""}function Pt(e,t=!1){const a=Xa(e);return e.signed_url?`<img src="${s(e.signed_url)}" alt="" />`:`<span class="file-doc-icon ${s(Mt(e))} ${t?"large":""}"><i class="ti ${s(a)}"></i></span>`}function Us(e){const t=me(e),a=Ha(e);return t==="Image"?a&&a.length<=4?a.toUpperCase():"IMG":t==="Archive"?a&&a.length<=3?a.toUpperCase():"ZIP":t==="Excel"?a==="csv"?"CSV":"XLS":t==="Word"?"DOC":t==="PowerPoint"?"PPT":t==="Text"?a&&a.length<=4?a.toUpperCase():"TXT":t.length<=4?t.toUpperCase():(a||"FILE").slice(0,4).toUpperCase()}function se(e=p()){return i.forms.filter(t=>t.company_id===e)}function Rs(e=p()){const t=i.formQuery.trim().toLowerCase(),a=i.route?.jobId||"";return se(e).filter(n=>a&&n.linked_job_id!==a||i.formTypeFilter!=="all"&&n.type!==i.formTypeFilter?!1:t?[n.title,n.description,n.type,n.status,n.audience,$(n.linked_job_id)?.name].some(o=>String(o||"").toLowerCase().includes(t)):!0)}function je(e=p()){const t=i.route?.jobId||"",a=se(e).filter(r=>!t||r.linked_job_id===t),n=i.route?.params?.get("form_id")||"";if(n&&a.some(r=>r.id===n)&&(i.selectedFormId=n),!a.length)return i.selectedFormId="",i.selectedQuestionId="",null;let o=a.find(r=>r.id===i.selectedFormId)||a[0];return i.selectedFormId=o.id,(!i.selectedQuestionId||!o.questions.some(r=>r.id===i.selectedQuestionId))&&(i.selectedQuestionId=o.questions[0]?.id||""),o}function fe(e){return i.forms.find(t=>t.id===e)||null}function G(){return fe(i.selectedFormId)||je(p())}function za(e=p()){return i.formResponses.filter(t=>t.company_id===e)}function ot(e){return i.formResponses.filter(t=>t.form_id===e)}function Wa(e){return Array.isArray(e?.questions)?e.questions.length:0}function Qs(e){const t=String(e?.creator_id||""),a=E().profile;return t?t&&(t===a.member_id||t===a.id)?a.full_name||"Quest Basic Mode":Q(t):e?.created_by_label||a.full_name||"Quest HQ"}function ye(e,t,a="",n=!1,o="text"){return`<label><span>${s(e)}</span><input data-form-field="${s(t)}" type="${s(o)}" value="${s(a)}" ${n?"required":""} /></label>`}function Ka(e,t,a=""){return`<label><span>${s(e)}</span><textarea data-form-field="${s(t)}" rows="3">${s(a)}</textarea></label>`}function Ne(e,t,a,n){return`
    <label><span>${s(e)}</span><select data-form-field="${s(t)}">
      ${n.map(([o,r])=>`<option value="${s(o)}" ${String(o)===String(a)?"selected":""}>${s(r)}</option>`).join("")}
    </select></label>
  `}function De(e){return["multiple","checkbox","dropdown"].includes(e.type)}function Vs(e){return{short:"ti-letter-t",paragraph:"ti-align-left",multiple:"ti-circle-dot",checkbox:"ti-checkbox",dropdown:"ti-select",date:"ti-calendar",rating:"ti-star",yesno:"ti-circle-check",file:"ti-paperclip"}[e]||"ti-plus"}function Js(e){return Te.find(([t])=>t===e)?.[1]||M(e||"Question")}function K(e,t){return`
    <div class="response-question">
      <label>
        <span>${s(e.label)}${e.required?" *":""}</span>
        ${e.help?`<small>${s(e.help)}</small>`:""}
        ${t}
      </label>
    </div>
  `}function Ya(e){const t=fe(e.form_id),a=Object.entries(e.answers||{}).map(([n,o])=>{const r=t?.questions.find(l=>l.id===n),c=Array.isArray(o)?o.join(", "):o;return re(r?.label||n,c||"No answer")}).join("");return`
    <div class="response-detail-head">
      <div><h2>${s(t?.title||"Response")}</h2><p>${s(e.submitted_by||e.submitter_email||"Anonymous")} / ${A(e.created_at)}</p></div>
    </div>
    <div class="file-detail-list">${a||re("Response","No answers captured.")}</div>
  `}function _e(){return[{id:"roof-inspection",title:"Roof Inspection",description:"Leak source, condition, photo handoff, and recommended repair scope.",type:"Inspection",questions:[P("short","Inspection address"),P("multiple","Primary finding",["Active leak","Damaged flashing","Storm damage","Maintenance"]),P("paragraph","Recommended scope"),P("file","Photos")]},{id:"client-approval",title:"Client Approval",description:"Approval, client notes, signature follow-up, and change request capture.",type:"Client approval",questions:[P("short","Client name"),P("yesno","Approved to proceed?"),P("paragraph","Requested changes")]},{id:"service-intake",title:"Service Intake",description:"New request triage for company-level or job-linked work.",type:"Intake",questions:[P("short","Request title"),P("dropdown","Priority",["Low","Medium","High","Urgent"]),P("paragraph","Details")]},{id:"safety-check",title:"Safety Checklist",description:"Crew safety confirmation before field work starts.",type:"Safety",questions:[P("checkbox","PPE confirmed",["Harness","Ladder","Gloves","Eye protection"]),P("yesno","Weather safe?"),P("paragraph","Safety notes")]}]}function Bs(e=p()){return at({id:`form-${crypto.randomUUID()}`,company_id:e,title:"Untitled form",description:"",type:"Internal",status:"Draft",audience:"Internal",linked_job_id:i.route?.jobId||"",theme_color:ie(e),background:"clean",submit_label:"Submit",collect_email:!0,require_approval:!1,questions:[P("short","First question")]})}function P(e="short",t="Untitled question",a=[]){return nt({id:`q-${crypto.randomUUID()}`,type:e,label:t,required:!1,options:a})}function Hs(e,t={}){const a=Bs(e),n=at({...a,...t,id:t.id||`form-${crypto.randomUUID()}`,company_id:e,questions:(t.questions||a.questions).map(o=>nt(o)),created_at:t.created_at||new Date().toISOString(),updated_at:new Date().toISOString()});return i.forms.unshift(n),i.selectedFormId=n.id,i.selectedQuestionId=n.questions[0]?.id||"",i.formsTab="builder",i.formEditorTab="questions",i.modal="",i.formStartTemplateId="",i.formStartTab="blank",L("New form created"),u(),n}function zs(e){const t=Object.fromEntries(new FormData(e).entries()),a=t.template_id?_e().find(c=>c.id===t.template_id):null,n=String(t.title||a?.title||"Untitled form").trim()||"Untitled form",o=String(t.description||a?.description||"").trim(),r=a?a.questions.map(c=>({...ze(c),id:`q-${crypto.randomUUID()}`})):[P("short","First question")];Hs(p(),{title:n,description:o,type:xe.includes(t.type)?t.type:a?.type||"Internal",audience:String(t.audience||"Internal").trim()||"Internal",creator_id:E().profile.member_id||E().profile.id||"basic-quest-user",linked_job_id:String(t.linked_job_id||""),theme_color:ie(p()),background:"clean",submit_label:String(t.submit_label||"Submit").trim()||"Submit",collect_email:t.collect_email==="on",require_approval:t.require_approval==="on",questions:r})}function Le(e,t=!0){const a=fe(e);a&&(i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",t&&u())}function L(e="Forms saved locally"){const t=G();t&&(t.updated_at=new Date().toISOString()),I(Ce,i.forms),I(ft,i.formResponses),i.sync={label:e,mode:"live"}}function Xt(e,t){const a=fe(e||i.selectedFormId);a&&(a.status=ht.includes(t)?t:"Draft",i.selectedFormId=a.id,L(`${a.status} locally`),u())}function Ws(e){const t=fe(e||i.selectedFormId);if(!t)return;const a=at({...ze(t),id:`form-${crypto.randomUUID()}`,title:`${t.title} Copy`,status:"Draft",questions:t.questions.map(n=>({...ze(n),id:`q-${crypto.randomUUID()}`})),created_at:new Date().toISOString(),updated_at:new Date().toISOString()});i.forms.unshift(a),i.selectedFormId=a.id,i.selectedQuestionId=a.questions[0]?.id||"",L("Form duplicated"),u()}function Ks(e){const t=e||i.selectedFormId;t&&(i.forms=i.forms.filter(a=>a.id!==t),i.formResponses=i.formResponses.filter(a=>a.form_id!==t),i.selectedFormId=se(p())[0]?.id||"",i.selectedQuestionId=je(p())?.questions[0]?.id||"",i.modal="",L("Form deleted locally"),u())}async function Ys(e){const t=e||i.selectedFormId,a=`${window.location.origin}${b(d("forms",{form_id:t},p()))}`;try{await navigator.clipboard.writeText(a),i.sync={label:"Form link copied",mode:"live"}}catch{i.sync={label:"Copy failed",mode:"local"}}u()}function Gs(e){const t=JSON.stringify({company_id:e,forms:se(e),responses:za(e)},null,2);so(`${e}-forms-export.json`,t,"application/json")}function Ga(e){const t=G();if(!t)return;const a=e.dataset.formField;a&&(t[a]=e.type==="checkbox"?e.checked:e.value,t.updated_at=new Date().toISOString(),I(Ce,i.forms))}function Za(e){const t=G(),a=e.closest("[data-question-id]"),n=t?.questions.find(o=>o.id===a?.dataset.questionId);if(!(!t||!n)){if(i.selectedQuestionId=n.id,e.matches("[data-question-option]")){const o=Number(e.dataset.questionOption);n.options[o]=e.value}else{const o=e.dataset.questionField;if(o==="required")n.required=e.checked;else if(o==="type"){n.type=e.value,De(n)&&!n.options.length&&(n.options=["Option 1","Option 2"]),De(n)||(n.options=[]),L("Question updated"),u();return}else o&&(n[o]=e.value)}t.updated_at=new Date().toISOString(),I(Ce,i.forms)}}function Zs(e="multiple"){const t=G();if(!t)return;const a=P(e,Te.find(([n])=>n===e)?.[1]||"New question");t.questions.push(a),i.selectedQuestionId=a.id,L("Question added"),u()}function Xs(e){const t=G(),a=t?.questions.find(r=>r.id===e);if(!t||!a)return;const n=t.questions.findIndex(r=>r.id===e),o=nt({...ze(a),id:`q-${crypto.randomUUID()}`,label:`${a.label} Copy`});t.questions.splice(n+1,0,o),i.selectedQuestionId=o.id,L("Question duplicated"),u()}function eo(e){const t=G();t&&(t.questions=t.questions.filter(a=>a.id!==e),i.selectedQuestionId=t.questions[0]?.id||"",L("Question deleted"),u())}function to(e,t){const a=G();if(!a||!t)return;const n=a.questions.findIndex(c=>c.id===e),o=n+t;if(n<0||o<0||o>=a.questions.length)return;const[r]=a.questions.splice(n,1);a.questions.splice(o,0,r),i.selectedQuestionId=e,L("Question moved"),u()}function ao(e){const a=G()?.questions.find(n=>n.id===e);a&&(a.options=a.options||[],a.options.push(`Option ${a.options.length+1}`),L("Option added"),u())}function no(e,t){const n=G()?.questions.find(o=>o.id===e);!n||t<0||(n.options.splice(t,1),n.options.length||n.options.push("Option 1"),L("Option removed"),u())}function io(e){const t=fe(e.dataset.formId);if(!t)return;const a=new FormData(e),n={};t.questions.forEach(o=>{const r=`answer:${o.id}`,c=a.getAll(r).filter(l=>l instanceof File?l.name:String(l||"").trim());n[o.id]=c.length>1?c.map(l=>l instanceof File?l.name:l):c[0]instanceof File?c[0].name:c[0]||""}),i.formResponses.unshift(Ua({company_id:t.company_id,form_id:t.id,submitter_email:String(a.get("submitter_email")||""),submitted_by:String(a.get("submitter_email")||E().profile.full_name||"Preview submitter"),answers:n,created_at:new Date().toISOString()})),i.formsTab="responses",i.modal="",L("Preview response saved"),u()}function so(e,t,a="text/plain"){const n=new Blob([t],{type:a}),o=URL.createObjectURL(n),r=document.createElement("a");r.href=o,r.download=e,r.click(),URL.revokeObjectURL(o)}function ze(e){return JSON.parse(JSON.stringify(e))}function X(e){return Array.from(new Set(e.map(t=>String(t||"").trim()).filter(Boolean)))}function oe(e){return{todo:"To do",pending:"Pending",hold:"On hold",review:"Review",done:"Done"}[e]||M(e)}function Ae(e){return{lead:"Lead",bid:"Bid",admin:"Admin",invoicing:"Invoicing",ar:"AR",meeting:"Meeting",web_dev:"Web dev"}[e]||M(e)}function Y(e){return yt.find(([t])=>t===e)?.[1]||i.driveFolders.find(t=>t.id===e)?.name||M(e||"Shared")}function oo(e=p()){return yt.map(([t,a])=>[t,a]).concat($e(e).map(t=>[t.id,t.name]))}function ro(e){const t=String(e||"").toLowerCase();return t.includes("photo")?"photos":t.includes("permit")?"permits":t.includes("contract")?"contracts":t.includes("form")?"forms":t.includes("archive")?"archive":"shared"}function Xa(e){const t=me(e);return t==="Image"?"ti-photo":t==="PDF"?"ti-file-type-pdf":t==="Archive"?"ti-file-zip":t==="Excel"?"ti-file-spreadsheet":t==="Word"?"ti-file-type-doc":t==="PowerPoint"?"ti-file-type-ppt":t==="Text"?"ti-file-text":"ti-file-description"}function M(e){return String(e||"").replace(/[_-]+/g," ").replace(/\b\w/g,t=>t.toUpperCase())}function y(e=0){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function A(e){if(!e)return"No date";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)}function ea(e){if(!e)return"No time";const t=new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(t)}function Ue(e){const t=Math.max(0,Math.floor(q(e)/1e3)),a=Math.floor(t/3600),n=Math.floor(t%3600/60);return a?`${a}h ${String(n).padStart(2,"0")}m`:`${n}m`}function Nt(e){const t=q(e);if(!t)return"0 B";const a=["B","KB","MB","GB"],n=Math.min(Math.floor(Math.log(t)/Math.log(1024)),a.length-1);return`${(t/1024**n).toFixed(n?1:0)} ${a[n]}`}function Fe(e){return(t,a)=>Date.parse(a[e]||a.updated_at||a.created_at||0)-Date.parse(t[e]||t.updated_at||t.created_at||0)}function en(e){if(!e)return 0;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?0:Math.floor((rt().getTime()-t.getTime())/864e5)}function ta(e){if(!e)return 999;const t=new Date(`${String(e).slice(0,10)}T00:00:00`);return Number.isNaN(t.getTime())?999:Math.floor((t.getTime()-rt().getTime())/864e5)}function lo(e=p()){const t=(et(Xe(e)||{short_name:e})||e||"QH").replace(/[^a-z]/gi,"").slice(0,2).toUpperCase()||"QH",a=pe(e).length+1;return`${t}-${String(1e3+a)}`}function rt(){const e=new Date;return e.setHours(0,0,0,0),e}function co(e,t){return`${tn(e,t)}%`}function tn(e,t){const a=q(t);return a?Math.max(0,Math.min(100,Math.round(q(e)/a*100))):0}function ve(e){return{critical:5,urgent:4,high:3,medium:2,low:1}[String(e||"").toLowerCase()]||0}function Lt(e){return String(e||"file").toLowerCase().replace(/[^a-z0-9.]+/g,"-").replace(/^-+|-+$/g,"")||"file"}function z(e,t){return e.reduce((a,n)=>a+q(n[t]),0)}function q(e){const t=Number(e);return Number.isFinite(t)?t:0}function v(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(q(e))}function he(e,t){try{const a=localStorage.getItem(e);return a?JSON.parse(a):t}catch{return t}}function R(e,t){const a=he(e,t);return Array.isArray(a)&&a.length?a:t}function I(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
