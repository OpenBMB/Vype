import{a as O,b as P,c as k}from"./chunk-FFWM3LXF.js";import{$ as y,F as n,G as e,H as h,I as _,K as p,L as d,R as o,S as E,V as S,X as w,ba as M,k as c,l as s,m,n as u,o as v,r as C,u as f,v as b,w as g,x}from"./chunk-4WBOMZCY.js";function z(t,l){}function A(t,l){if(t&1){let i=_();n(0,"div",1)(1,"h1",2),o(2,"Staff Portal"),e(),n(3,"p",3),o(4," Sign in with your company account to access enterprise downloads. "),e(),n(5,"button",4),p("click",function(){s(i);let r=d(2);return m(r.login())}),o(6,"Sign In"),e()()}}function T(t,l){if(t&1){let i=_();n(0,"div",13)(1,"div",15),u(),n(2,"svg",16),h(3,"path",17),e()(),v(),n(4,"div",18)(5,"h2",19),o(6,"Vype for iOS"),e(),n(7,"span",20),o(8,"Enterprise"),e(),n(9,"p",21),o(10," Distributed via Apple Enterprise Account. Install directly \u2014 no App Store required. "),e()(),n(11,"button",22),p("click",function(){s(i);let r=d(3);return m(r.downloadIos())}),u(),n(12,"svg",23),h(13,"path",24),e(),o(14," Download .ipa "),e()()}}function D(t,l){t&1&&(n(0,"div",14)(1,"p"),o(2,"No enterprise builds are available at this time."),e()())}function I(t,l){if(t&1){let i=_();n(0,"header",5)(1,"div",6)(2,"button",7),p("click",function(){s(i);let r=d(2);return m(r.goHome())}),o(3,"\u2190"),e(),n(4,"div",8)(5,"h1",9),o(6,"Enterprise Downloads"),e(),n(7,"span",10),o(8),e()()(),n(9,"button",11),p("click",function(){s(i);let r=d(2);return m(r.logout())}),o(10,"Logout"),e()(),n(11,"section",12),g(12,T,15,0,"div",13)(13,D,3,0,"div",14),e()}if(t&2){let i=d(2);f(8),E(i.authService.userName()),f(4),x(i.iosAvailable()?12:13)}}function H(t,l){if(t&1&&(n(0,"div",0),g(1,A,7,0,"div",1)(2,I,14,2),e()),t&2){let i=d();f(),x(i.isAuthenticated()?2:1)}}var J=(()=>{class t{constructor(){this.authService=c(O),this.configService=c(P),this.enterpriseService=c(k),this.route=c(y),this.router=c(M),this.enterpriseEnabled=this.configService.enterpriseEnabled,this.isAuthenticated=S(()=>this.authService.isAuthenticated()),this.iosAvailable=this.enterpriseService.iosAvailable,C(()=>{this.configService.loaded()&&!this.configService.enterpriseEnabled()&&this.router.navigate(["/"])})}ngOnInit(){this.authService.checkSession(),this.route.queryParams.subscribe(i=>{let a=i.code,r=i.state;a&&r&&this.authService.handleCallback(a,r).catch(V=>{console.error("OAuth callback failed:",V)})})}login(){this.authService.login()}logout(){this.authService.logout(),this.router.navigate(["/"])}goHome(){this.router.navigate(["/"])}downloadIos(){this.enterpriseService.downloadIos()}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=b({type:t,selectors:[["vype-staff"]],decls:2,vars:1,consts:[[1,"staff-page"],[1,"auth-gate"],[1,"gate-title"],[1,"gate-desc"],[1,"btn","btn-primary",3,"click"],[1,"staff-header"],[1,"header-left"],[1,"btn","btn-ghost",3,"click"],[1,"header-title"],[1,"page-title"],[1,"user-badge"],[1,"btn","btn-secondary",3,"click"],[1,"download-section"],[1,"download-card"],[1,"empty-state"],[1,"download-icon"],["width","40","height","40","viewBox","0 0 24 24","fill","currentColor"],["d","M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"],[1,"download-info"],[1,"download-name"],[1,"download-badge"],[1,"download-desc"],[1,"btn","btn-primary","btn-download",3,"click"],["width","16","height","16","viewBox","0 0 24 24","fill","currentColor"],["d","M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"]],template:function(a,r){a&1&&g(0,z,0,0)(1,H,3,1,"div",0),a&2&&x(r.enterpriseEnabled()?1:0)},dependencies:[w],styles:[`[_nghost-%COMP%] {
    display: block;
}

.staff-page[_ngcontent-%COMP%] {
    max-width: 640px;
    margin: 0 auto;
    padding: 48px 24px;
}



.auth-gate[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 360px;
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
    margin: 0 0 28px;
    max-width: 320px;
    line-height: 1.5;
}



.staff-header[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--surface-border);
}

.header-left[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 8px;
}

.page-title[_ngcontent-%COMP%] {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.user-badge[_ngcontent-%COMP%] {
    font-size: 0.8125rem;
    color: var(--text-secondary);
}



.download-section[_ngcontent-%COMP%] {
    margin-top: 8px;
}

.download-card[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 32px 24px;
    background: var(--surface-primary);
    border: 1px solid var(--surface-border);
    border-radius: 12px;
}

.download-icon[_ngcontent-%COMP%] {
    color: var(--text-secondary);
}

.download-info[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.download-name[_ngcontent-%COMP%] {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.download-badge[_ngcontent-%COMP%] {
    display: inline-block;
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 2px 8px;
    border-radius: 4px;
    background: var(--brand-primary);
    color: white;
}

.download-desc[_ngcontent-%COMP%] {
    font-size: 0.8125rem;
    color: var(--text-secondary);
    margin: 4px 0 0;
    max-width: 360px;
    line-height: 1.5;
}

.btn-download[_ngcontent-%COMP%] {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 24px;
    font-size: 0.9375rem;
}



.empty-state[_ngcontent-%COMP%] {
    text-align: center;
    padding: 48px 24px;
    color: var(--text-tertiary);
    font-size: 0.875rem;
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
    color: white;
}

.btn-secondary[_ngcontent-%COMP%] {
    background: var(--surface-elevated);
    color: var(--text-primary);
    border: 1px solid var(--surface-border);
}

.btn-ghost[_ngcontent-%COMP%] {
    background: transparent;
    color: var(--text-secondary);
    padding: 4px 8px;
    font-size: 1.125rem;
}

.btn-ghost[_ngcontent-%COMP%]:hover {
    color: var(--text-primary);
}`]})}}return t})();export{J as StaffComponent};
