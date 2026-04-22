import{b as z,d as j}from"./chunk-LRNSHDN3.js";import{a as S}from"./chunk-DPVRPHZI.js";import{Ca as h,Da as b,Fa as I,Ga as k,J as y,La as i,Ma as n,N as v,Oa as f,Pa as T,Ra as g,S as u,Sa as l,T as _,Xa as R,Ya as o,Za as s,_a as C,bb as O,c as w,da as p,kb as F,oa as d,wa as U}from"./chunk-BF7GPN7I.js";var $="LWaHgHmKBoNruPachKQphbeHlHEeKNIxmUTqxKiL",G="https://auth.modelbest.cn:10443/api/oauth2/authorize",J="/api/oauth2/token",Q="/api/oauth2/userinfo";function H(){return`${window.location.origin}/admin`}var x={pkceVerifier:"vype_pkce_verifier",pkceState:"vype_pkce_state",userInfo:"vype_user_info"},M=(()=>{class e{constructor(){this.isAuthenticated=p(!1),this.userId=p(null),this.userName=p(null),this.checkSession()}login(){return w(this,null,function*(){let{verifier:t,challenge:a}=yield this.generatePKCE(),r=this.generateRandomString(32);localStorage.setItem(x.pkceVerifier,t),localStorage.setItem(x.pkceState,r);let m=new URLSearchParams({client_id:$,redirect_uri:H(),response_type:"code",state:r,code_challenge:a,code_challenge_method:"S256"});window.location.href=`${G}?${m.toString()}`})}handleCallback(t,a){return w(this,null,function*(){let r=localStorage.getItem(x.pkceState);if(a!==r)throw new Error("Invalid state parameter");let m=localStorage.getItem(x.pkceVerifier);if(!m)throw new Error("PKCE verifier not found");localStorage.removeItem(x.pkceVerifier),localStorage.removeItem(x.pkceState);let A=yield fetch(J,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"authorization_code",client_id:$,code:t,redirect_uri:H(),code_verifier:m}).toString()});if(!A.ok){let q=yield A.text();throw new Error(`Token exchange failed: ${q}`)}let N=(yield A.json()).access_token;if(!N)throw new Error("No access token in response");let V=yield fetch(Q,{method:"GET",headers:{Authorization:`Bearer ${N}`}});if(!V.ok)throw new Error("Failed to fetch user info");let E=yield V.json(),P=E.data?.user_id??E.user_id??"unknown",L=E.data?.full_name??E.full_name??E.email??P,B={userId:P,userName:L};localStorage.setItem(x.userInfo,JSON.stringify(B)),this.isAuthenticated.set(!0),this.userId.set(P),this.userName.set(L)})}logout(){localStorage.removeItem(x.userInfo),this.isAuthenticated.set(!1),this.userId.set(null),this.userName.set(null)}checkSession(){let t=localStorage.getItem(x.userInfo);if(!t){this.isAuthenticated.set(!1),this.userId.set(null),this.userName.set(null);return}try{let a=JSON.parse(t);this.isAuthenticated.set(!0),this.userId.set(a.userId??null),this.userName.set(a.userName??null)}catch(a){this.isAuthenticated.set(!1),this.userId.set(null),this.userName.set(null)}}generatePKCE(){return w(this,null,function*(){let t=this.generateRandomString(64),r=new TextEncoder().encode(t),m=yield crypto.subtle.digest("SHA-256",r);return{verifier:t,challenge:this.base64UrlEncode(new Uint8Array(m))}})}generateRandomString(t){let a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=new Uint8Array(t);return crypto.getRandomValues(r),Array.from(r,m=>a[m%a.length]).join("")}base64UrlEncode(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var W=(()=>{class e{constructor(){this.authService=v(M)}isAdmin(){return this.authService.userId()==="quzhongming"}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var D=(e,c)=>c.id;function Y(e,c){if(e&1){let t=f();i(0,"div",1)(1,"h1",2),o(2),n(),i(3,"p",3),o(4),n(),i(5,"button",4),g("click",function(){u(t);let r=l();return _(r.login())}),o(6),n()()}if(e&2){let t=l();d(2),s(t.l.adminTitle()),d(2),s(t.l.adminSignIn()),d(2),C(" ",t.l.adminSignInBtn()," ")}}function Z(e,c){if(e&1){let t=f();i(0,"div",1)(1,"h1",2),o(2,"Insufficient permissions"),n(),i(3,"p",3),o(4),n(),i(5,"button",5),g("click",function(){u(t);let r=l();return _(r.goHome())}),o(6),n()()}if(e&2){let t=l();d(4),s(t.l.adminInsufficient()),d(2),C(" ",t.l.adminBackHome()," ")}}function X(e,c){if(e&1){let t=f();i(0,"button",14),g("click",function(){let r=u(t).$implicit,m=l(2);return _(m.setTab(r.id))}),o(1),n()}if(e&2){let t=c.$implicit,a=l(2);R("active",a.activeTab()===t.id),d(),C(" ",t.label," ")}}function tt(e,c){if(e&1&&(i(0,"tr")(1,"td"),o(2),n(),i(3,"td"),o(4),n(),i(5,"td"),o(6),n(),i(7,"td"),o(8),n()()),e&2){let t=c.$implicit;d(2),s(t.id),d(2),s(t.devices),d(2),s(t.created),d(2),s(t.updated)}}function et(e,c){e&1&&(i(0,"tr")(1,"td",18),o(2,"No data"),n()())}function nt(e,c){if(e&1){let t=f();i(0,"section",13)(1,"div",15)(2,"button",4),g("click",function(){u(t);let r=l(2);return _(r.loadUsers())}),o(3," Load "),n()(),i(4,"div",16)(5,"table",17)(6,"thead")(7,"tr")(8,"th"),o(9,"ID"),n(),i(10,"th"),o(11,"Devices"),n(),i(12,"th"),o(13,"Created"),n(),i(14,"th"),o(15,"Updated"),n()()(),i(16,"tbody"),I(17,tt,9,4,"tr",null,D,!1,et,3,0,"tr"),n()()()()}if(e&2){let t=l(2);d(17),k(t.users())}}function it(e,c){if(e&1&&(i(0,"tr")(1,"td"),o(2),n(),i(3,"td"),o(4),n(),i(5,"td"),o(6),n(),i(7,"td"),o(8),n()()),e&2){let t=c.$implicit;d(2),s(t.id),d(2),s(t.clientId),d(2),s(t.platform),d(2),s(t.owner)}}function ot(e,c){e&1&&(i(0,"tr")(1,"td",18),o(2,"No data"),n()())}function at(e,c){if(e&1){let t=f();i(0,"section",13)(1,"div",15)(2,"input",19),g("input",function(r){u(t);let m=l(2);return _(m.ownerFilter.set(r.target.value))}),n(),i(3,"button",4),g("click",function(){u(t);let r=l(2);return _(r.loadDevices())}),o(4," Load "),n()(),i(5,"div",16)(6,"table",17)(7,"thead")(8,"tr")(9,"th"),o(10,"ID"),n(),i(11,"th"),o(12,"Client ID"),n(),i(13,"th"),o(14,"Platform"),n(),i(15,"th"),o(16,"Owner"),n()()(),i(17,"tbody"),I(18,it,9,4,"tr",null,D,!1,ot,3,0,"tr"),n()()()()}if(e&2){let t=l(2);d(2),T("value",t.ownerFilter()),d(16),k(t.devices())}}function rt(e,c){if(e&1&&(i(0,"div",21)(1,"div",23)(2,"span",24),o(3,"Used"),n(),i(4,"span",25),o(5),n()(),i(6,"div",23)(7,"span",24),o(8,"Limit"),n(),i(9,"span",25),o(10),n()(),i(11,"div",23)(12,"span",24),o(13,"Window"),n(),i(14,"span",25),o(15),n()()()),e&2){let t=c;d(5),s(t.used),d(5),s(t.limit),d(5),s(t.window)}}function dt(e,c){e&1&&(i(0,"p",22),o(1,"Enter client ID and click Lookup."),n())}function ct(e,c){if(e&1){let t=f();i(0,"section",13)(1,"div",15)(2,"input",20),g("input",function(r){u(t);let m=l(2);return _(m.clientIdLookup.set(r.target.value))}),n(),i(3,"button",4),g("click",function(){u(t);let r=l(2);return _(r.lookupUsage())}),o(4," Lookup "),n()(),h(5,rt,16,3,"div",21)(6,dt,2,0,"p",22),n()}if(e&2){let t,a=l(2);d(2),T("value",a.clientIdLookup()),d(3),b((t=a.usageData())?5:6,t)}}function lt(e,c){if(e&1){let t=f();i(0,"header",6)(1,"div",7)(2,"h1",8),o(3),n(),i(4,"span",9),o(5),n()(),i(6,"button",5),g("click",function(){u(t);let r=l();return _(r.logout())}),o(7),n()(),i(8,"nav",10),I(9,X,2,3,"button",11,D),n(),i(11,"div",12),h(12,nt,20,1,"section",13),h(13,at,21,2,"section",13),h(14,ct,7,2,"section",13),n()}if(e&2){let t=l();d(3),s(t.l.adminTitle()),d(2),s(t.authService.userName()),d(2),C(" ",t.l.adminLogout()," "),d(2),k(t.tabs),d(3),b(t.activeTab()==="users"?12:-1),d(),b(t.activeTab()==="devices"?13:-1),d(),b(t.activeTab()==="usage"?14:-1)}}var It=(()=>{class e{constructor(){this.authService=v(M),this.permissionService=v(W),this.route=v(z),this.router=v(j),this.l=S.Web,this.activeTab=p("users"),this.users=p([]),this.devices=p([]),this.usageData=p(null),this.ownerFilter=p(""),this.clientIdLookup=p(""),this.isAuthenticated=O(()=>this.authService.isAuthenticated()),this.isAdmin=O(()=>this.permissionService.isAdmin()),this.tabs=[{id:"users",label:S.Web.adminTabUsers()},{id:"devices",label:S.Web.adminTabDevices()},{id:"usage",label:S.Web.adminTabUsage()}]}ngOnInit(){this.authService.checkSession(),this.route.queryParams.subscribe(t=>{let a=t.code,r=t.state;a&&r&&this.authService.handleCallback(a,r).catch(m=>{console.error("OAuth callback failed:",m)})})}login(){this.authService.login()}logout(){this.authService.logout()}goHome(){this.router.navigate(["/"])}setTab(t){this.activeTab.set(t)}loadUsers(){this.users.set([])}loadDevices(){this.devices.set([])}lookupUsage(){this.usageData.set(null)}static{this.\u0275fac=function(a){return new(a||e)}}static{this.\u0275cmp=U({type:e,selectors:[["vype-admin"]],decls:4,vars:1,consts:[[1,"admin-page"],[1,"auth-gate"],[1,"gate-title"],[1,"gate-desc"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"],[1,"admin-header"],[1,"header-title"],[1,"page-title"],[1,"user-badge"],[1,"tab-nav"],[1,"tab-btn",3,"active"],[1,"tab-content"],[1,"tab-panel"],[1,"tab-btn",3,"click"],[1,"panel-actions"],[1,"table-wrap"],[1,"data-table"],["colspan","4",1,"empty-cell"],["type","text","placeholder","Filter by owner",1,"filter-input",3,"input","value"],["type","text","placeholder","Client ID",1,"filter-input",3,"input","value"],[1,"usage-result"],[1,"usage-placeholder"],[1,"usage-row"],[1,"usage-label"],[1,"usage-value"]],template:function(a,r){a&1&&(i(0,"div",0),h(1,Y,7,3,"div",1)(2,Z,7,2,"div",1)(3,lt,15,6),n()),a&2&&(d(),b(r.isAuthenticated()?r.isAdmin()?3:2:1))},dependencies:[F],styles:[`[_nghost-%COMP%] {
    display: block;
}

.admin-page[_ngcontent-%COMP%] {
    max-width: 960px;
    margin: 0 auto;
    padding: 32px 24px;
}



.auth-gate[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 320px;
    text-align: center;
}

.gate-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 8px;
}

.gate-desc[_ngcontent-%COMP%] {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0 0 24px;
}



.admin-header[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--surface-border);
}

.page-title[_ngcontent-%COMP%] {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.user-badge[_ngcontent-%COMP%] {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin-left: 12px;
}



.tab-nav[_ngcontent-%COMP%] {
    display: flex;
    gap: 4px;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--surface-border);
}

.tab-btn[_ngcontent-%COMP%] {
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 10px 16px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 0.15s ease, border-color 0.15s ease;
}

.tab-btn[_ngcontent-%COMP%]:hover {
    color: var(--text-primary);
}

.tab-btn.active[_ngcontent-%COMP%] {
    color: var(--brand-primary);
    border-bottom-color: var(--brand-primary);
}



.tab-content[_ngcontent-%COMP%] {
    background: var(--surface-primary);
    border: 1px solid var(--surface-border);
    border-radius: 8px;
    padding: 20px;
}

.tab-panel[_ngcontent-%COMP%] {
    min-height: 200px;
}

.panel-actions[_ngcontent-%COMP%] {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 16px;
}

.filter-input[_ngcontent-%COMP%] {
    font-family: inherit;
    font-size: 0.875rem;
    padding: 8px 12px;
    background: var(--surface-bg);
    border: 1px solid var(--surface-border);
    border-radius: 6px;
    color: var(--text-primary);
    min-width: 200px;
}

.filter-input[_ngcontent-%COMP%]::placeholder {
    color: var(--text-tertiary);
}

.filter-input[_ngcontent-%COMP%]:focus {
    outline: none;
    border-color: var(--brand-primary);
}



.btn[_ngcontent-%COMP%] {
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: opacity 0.15s ease;
}

.btn[_ngcontent-%COMP%]:hover {
    opacity: 0.9;
}

.btn-primary[_ngcontent-%COMP%] {
    background: var(--brand-primary);
    color: var(--surface-bg);
}

.btn-secondary[_ngcontent-%COMP%] {
    background: var(--surface-elevated);
    color: var(--text-primary);
    border: 1px solid var(--surface-border);
}



.table-wrap[_ngcontent-%COMP%] {
    overflow-x: auto;
}

.data-table[_ngcontent-%COMP%] {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8125rem;
}

.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], 
.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid var(--surface-border);
}

.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
    font-weight: 600;
    color: var(--text-secondary);
    background: var(--surface-bg);
}

.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
    color: var(--text-primary);
}

.empty-cell[_ngcontent-%COMP%] {
    color: var(--text-tertiary);
    text-align: center;
    padding: 24px;
}



.usage-result[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
}

.usage-row[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    background: var(--surface-bg);
    border-radius: 6px;
    font-size: 0.875rem;
}

.usage-label[_ngcontent-%COMP%] {
    color: var(--text-secondary);
}

.usage-value[_ngcontent-%COMP%] {
    color: var(--text-primary);
    font-weight: 500;
}

.usage-placeholder[_ngcontent-%COMP%] {
    font-size: 0.875rem;
    color: var(--text-tertiary);
    margin: 24px 0 0;
}`]})}}return e})();export{It as AdminComponent};
