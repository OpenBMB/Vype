import{a as P}from"./chunk-DPVRPHZI.js";import{$a as sn,C as fn,Ca as h,Da as g,Ea as Cn,Fa as an,G as nn,Ga as on,Ha as D,Ia as i,J as un,Ja as a,Ka as c,La as b,Ma as k,N as en,Na as Y,Oa as bn,Qa as rn,S as vn,Sa as m,T as yn,Ta as _n,U as f,Ua as wn,V as C,Va as Sn,Wa as dn,Xa as O,Ya as r,Za as l,_a as V,da as z,fa as tn,i as hn,kb as K,na as W,oa as o,ob as kn,s as Z,t as gn,u as B,w as xn,wa as G}from"./chunk-BF7GPN7I.js";var En=["waveform"];function Tn(t,d){if(t&1&&(b(0,"div",5)(1,"div",20),r(2),k(),b(3,"div",21),r(4),k()()),t&2){let n=m();o(2),l(n.instructionLine1),o(2),l(n.instructionLine2)}}function In(t,d){if(t&1&&(b(0,"span",6),r(1),k()),t&2){let n=m();o(),l(n.displayText)}}function Ln(t,d){if(t&1&&(b(0,"span",22),r(1),k()),t&2){let n=m();dn("--sweep-progress",n.sweepProgress),o(),l(n.displayText)}}function Dn(t,d){if(t&1&&(b(0,"span",24),r(1),k()),t&2){let n=d.$implicit;dn("opacity",n.opacity)("filter",n.blur>0?"blur("+n.blur+"px)":"none"),o(),l(n.char)}}function Hn(t,d){if(t&1&&(b(0,"span",8),an(1,Dn,2,5,"span",23,Cn),k()),t&2){let n=m();o(),on(n.lintChars)}}function zn(t,d){if(t&1&&(b(0,"span",25),r(1),k()),t&2){let n=m(2);o(),l(n.newWord)}}function Vn(t,d){if(t&1&&(b(0,"span",6),r(1),k(),h(2,zn,2,1,"span",25),Y(3,"span",26)),t&2){let n=m();o(),l(n.settledText),o(),g(n.newWord?2:-1)}}function Fn(t,d){if(t&1&&(b(0,"div",11)(1,"span",27),f(),b(2,"svg",28),Y(3,"line",29),k()(),C(),b(4,"span",30),r(5),k()()),t&2){let n=m();o(5),l(n.commandText)}}var mn=(()=>{class t{constructor(){this.state="idle",this.displayText="",this.settledText="",this.newWord="",this.commandText="",this.silenceRatio=0,this.sweepProgress=0,this.activeKey="",this.isSpeaking=!1,this.lintedText="",this.lintReveal=0,this.keyTriggerSymbol="R \u21E7",this.keyCommandSymbol="R \u2325",this.keyHintCommand="command",this.keyHintToEnd="to end",this.statusListening="Listening...",this.statusCommand="Command...",this.instructionLine1="",this.instructionLine2="",this.lintChars=[],this.animFrame=0,this.waveBuffer=new Float32Array(0),this.waveTarget=new Float32Array(0),this.waveInited=!1,this.warmupFactor=0,this.wasActive=!1,this.wavePhase=0,this.lastRawLevel=.5}ngAfterViewInit(){this.drawWaveform()}ngOnChanges(){let n=this.state==="dictating"||this.state==="command";n&&!this.wasActive&&(this.warmupFactor=0),this.wasActive=n,this.state==="linting"&&this.computeLintChars()}computeLintChars(){let n=[...this.lintedText],s=n.length;if(s===0){this.lintChars=[];return}let e=6,v=this.lintReveal*s;this.lintChars=n.map((w,p)=>{if(p<v-e)return{char:w,opacity:1,blur:0};if(p<v){let _=(v-p)/e;return{char:w,opacity:_,blur:4*(1-_)}}else return{char:w,opacity:.15,blur:0}})}ngOnDestroy(){cancelAnimationFrame(this.animFrame)}drawWaveform(){let n=this.waveformRef?.nativeElement;if(!n)return;let s=n.getContext("2d");if(!s)return;let e=window.devicePixelRatio||1,v=n.clientWidth,w=n.clientHeight;n.width=v*e,n.height=w*e,s.scale(e,e);let p=56,_=2.5,T=Math.max((v-p*_)/(p-1),1.5),$=1.25;this.waveBuffer=new Float32Array(p).fill(0),this.waveTarget=new Float32Array(p).fill(0),this.waveInited=!0;let F=()=>{s.clearRect(0,0,v,w);let H=this.state==="dictating"||this.state==="command",I=this.silenceRatio;if(H&&this.warmupFactor<1&&(this.warmupFactor=Math.min(1,this.warmupFactor+1/30)),this.wavePhase++,this.wavePhase%4===0)if(this.waveTarget.copyWithin(0,1),H&&this.isSpeaking){let y=(Math.random()-.5)*.5;this.lastRawLevel=Math.min(.85,Math.max(.05,this.lastRawLevel+y)),this.waveTarget[p-1]=this.lastRawLevel*this.warmupFactor}else H?(this.lastRawLevel*=.85,this.waveTarget[p-1]=this.lastRawLevel*this.warmupFactor*.15):(this.lastRawLevel=.3,this.waveTarget[p-1]=0);let q=.18;for(let y=0;y<p;y++)this.waveBuffer[y]+=(this.waveTarget[y]-this.waveBuffer[y])*q;for(let y=0;y<p;y++){let A=y*(_+T),x=this.waveBuffer[y],u=x>.01?3:2,L=w*.65,j=u+x*(L-u),Q=(w-j)/2,N=y/(p-1),S;if(I>0&&N<=I){let E=I*I,ln=Math.round(180+65*E),U=Math.round(160+-2*E),M=Math.round(50+-39*E),R=.5+.4*E;S=`rgba(${ln}, ${U}, ${M}, ${R})`}else this.state==="command"?S=`rgba(171, 107, 240, ${.3+x*.5})`:H?S=`rgba(59, 111, 240, ${.3+x*.5})`:S="rgba(161, 161, 170, 0.2)";s.beginPath(),s.roundRect(A,Q,_,j,$),s.fillStyle=S,s.fill()}this.animFrame=requestAnimationFrame(F)};F()}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=G({type:t,selectors:[["vype-overlay-demo"]],viewQuery:function(s,e){if(s&1&&_n(En,5),s&2){let v;wn(v=Sn())&&(e.waveformRef=v.first)}},inputs:{state:"state",displayText:"displayText",settledText:"settledText",newWord:"newWord",commandText:"commandText",silenceRatio:"silenceRatio",sweepProgress:"sweepProgress",activeKey:"activeKey",isSpeaking:"isSpeaking",lintedText:"lintedText",lintReveal:"lintReveal",keyTriggerSymbol:"keyTriggerSymbol",keyCommandSymbol:"keyCommandSymbol",keyHintCommand:"keyHintCommand",keyHintToEnd:"keyHintToEnd",statusListening:"statusListening",statusCommand:"statusCommand",instructionLine1:"instructionLine1",instructionLine2:"instructionLine2"},features:[tn],decls:27,vars:17,consts:[["waveform",""],[1,"overlay-panel"],[1,"overlay-bg"],[1,"overlay-frost"],[1,"transcript-area"],[1,"instruction"],[1,"transcript-text"],[1,"transcript-text","sweep-text",3,"--sweep-progress"],[1,"transcript-text","lint-reveal"],[1,"waveform"],[1,"bottom-region"],[1,"command-bar"],[1,"status-bar"],[1,"status-left"],[1,"status-dot"],[1,"status-label"],[1,"status-right"],[1,"hint-badge","cmd"],[1,"hint-text"],[1,"hint-badge","brand"],[1,"instruction-primary"],[1,"instruction-secondary"],[1,"transcript-text","sweep-text"],[1,"lint-char",3,"opacity","filter"],[1,"lint-char"],[1,"transcript-text","word-new"],["aria-hidden","true",1,"cursor-blink"],[1,"command-badge"],["width","10","height","10","viewBox","0 0 24 24","fill","none"],["x1","7","y1","19","x2","17","y2","5","stroke","white","stroke-width","2.5","stroke-linecap","round"],[1,"command-text"]],template:function(s,e){s&1&&(b(0,"div",1),Y(1,"div",2)(2,"div",3),b(3,"div",4),h(4,Tn,5,2,"div",5)(5,In,2,1,"span",6)(6,Ln,2,3,"span",7)(7,Hn,3,0,"span",8)(8,Vn,4,2),k(),Y(9,"canvas",9,0),b(11,"div",10),h(12,Fn,6,1,"div",11),b(13,"div",12)(14,"div",13),Y(15,"span",14),b(16,"span",15),r(17),k()(),b(18,"div",16)(19,"span",17),r(20),k(),b(21,"span",18),r(22),k(),b(23,"span",19),r(24),k(),b(25,"span",18),r(26),k()()()()()),s&2&&(O("panel-idle",e.state==="idle"),o(4),g(e.state==="idle"||e.state==="instruction"?4:e.state==="done"?5:e.state==="sweep"?6:e.state==="linting"?7:8),o(8),g(e.commandText?12:-1),o(2),O("command-mode",e.state==="command"),o(),O("command-dot",e.state==="command"),o(2),l(e.state==="command"?e.statusCommand:e.statusListening),o(2),O("active",e.activeKey==="command"),o(),l(e.keyCommandSymbol),o(2),l(e.keyHintCommand),o(),O("active",e.activeKey==="trigger"),o(),l(e.keyTriggerSymbol),o(2),l(e.keyHintToEnd))},dependencies:[K],styles:[`[_nghost-%COMP%] {
    display: block;
}

.overlay-panel[_ngcontent-%COMP%] {
    position: relative;
    width: 520px;
    height: 240px;
    border-radius: 16px;
    overflow: hidden;
    border: 0.5px solid rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(0, 0, 0, 0.04);
}




.overlay-bg[_ngcontent-%COMP%] {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: rgba(180, 185, 195, 0.35);
}

.overlay-frost[_ngcontent-%COMP%] {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: rgba(220, 222, 228, var(--opacity-frost, 0.55));
    backdrop-filter: blur(24px) saturate(1.4);
    -webkit-backdrop-filter: blur(24px) saturate(1.4);
}




.transcript-area[_ngcontent-%COMP%] {
    position: relative;
    z-index: 2;
    flex: 1;
    padding: 8px 20px;
    font-size: 15px;
    line-height: 22px;
    color: #1d1d1f;
    font-family: "SF Pro Rounded", -apple-system, BlinkMacSystemFont,
        "SF Pro Text", system-ui, sans-serif;
    overflow-y: auto;
}

.transcript-text[_ngcontent-%COMP%] {
    color: #1d1d1f;
    white-space: pre-wrap;
}

.cursor-blink[_ngcontent-%COMP%] {
    display: inline-block;
    width: 1.5px;
    height: 15px;
    background: #ab6bf0;
    margin-left: 1px;
    vertical-align: text-bottom;
    animation: _ngcontent-%COMP%_blink 1s step-end infinite;
}

@keyframes _ngcontent-%COMP%_blink {
    50% {
        opacity: 0;
    }
}




.instruction[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: 100%;
    text-align: center;
}

.instruction-primary[_ngcontent-%COMP%] {
    font-size: 13px;
    font-weight: 500;
    color: #52525b;
}

.instruction-secondary[_ngcontent-%COMP%] {
    font-size: 12px;
    font-weight: 400;
    color: #71717a;
}

.key-inline[_ngcontent-%COMP%] {
    display: inline-block;
    padding: 1px 4px;
    font-size: 11px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    vertical-align: baseline;
}




.waveform[_ngcontent-%COMP%] {
    position: relative;
    z-index: 2;
    width: calc(100% - 40px);
    height: 36px;
    margin: 4px 20px 2px;
    display: block;
    flex-shrink: 0;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
}




.bottom-region[_ngcontent-%COMP%] {
    position: relative;
    z-index: 2;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.03) 30%,
        rgba(0, 0, 0, 0.06) 100%
    );
    flex-shrink: 0;
}

.status-bar[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
}

.status-left[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(229, 72, 77, 0.15);
    padding: 3px 8px;
    border-radius: 3px;
}

.status-dot[_ngcontent-%COMP%] {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #e5484d;
    animation: _ngcontent-%COMP%_dot-pulse 1.5s ease-in-out infinite;
}

@keyframes _ngcontent-%COMP%_dot-pulse {
    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.15);
        opacity: 0.7;
    }
}

.status-label[_ngcontent-%COMP%] {
    font-size: 12px;
    font-weight: 500;
    color: #e5484d;
}

.status-right[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 5px;
}

.hint-badge[_ngcontent-%COMP%] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 6px;
    font-size: 10px;
    font-weight: 600;
    font-family: -apple-system, "SF Pro Text", system-ui, sans-serif;
    border-radius: 3px;
    letter-spacing: 0.02em;
    transition: transform 0.15s, box-shadow 0.15s;
}

.hint-badge.cmd[_ngcontent-%COMP%] {
    background: rgba(171, 107, 240, 0.18);
    color: #ab6bf0;
}

.hint-badge.brand[_ngcontent-%COMP%] {
    background: rgba(59, 111, 240, 0.15);
    color: #3b6ff0;
}

.hint-badge.active[_ngcontent-%COMP%] {
    transform: scale(1.12);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.hint-badge.cmd.active[_ngcontent-%COMP%] {
    background: rgba(171, 107, 240, 0.3);
}

.hint-badge.brand.active[_ngcontent-%COMP%] {
    background: rgba(59, 111, 240, 0.25);
}

.hint-text[_ngcontent-%COMP%] {
    font-size: 12px;
    font-weight: 400;
    color: #71717a;
}




.command-bar[_ngcontent-%COMP%] {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 20px 4px;
}

.command-badge[_ngcontent-%COMP%] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: #ab6bf0;
    border-radius: 3px;
    flex-shrink: 0;
}

.command-text[_ngcontent-%COMP%] {
    font-size: 12px;
    font-weight: 500;
    color: #ab6bf0;
    font-family: "SF Mono", "Menlo", monospace;
}

.command-mode[_ngcontent-%COMP%] {
    background: rgba(171, 107, 240, 0.18);
    border: 1px solid rgba(171, 107, 240, 0.4);
    border-radius: 6px;
    padding: 4px 12px;
}

.command-dot[_ngcontent-%COMP%] {
    background: #ab6bf0 !important;
}




.sweep-text[_ngcontent-%COMP%] {
    background: linear-gradient(
        90deg,
        rgba(245, 158, 11, 0.12) 0%,
        rgba(245, 158, 11, 0.25) calc(var(--sweep-progress, 0) * 100%),
        transparent calc(var(--sweep-progress, 0) * 100%)
    );
    border-radius: 4px;
    padding: 2px 0;
    transition: opacity 0.3s;
}




@keyframes _ngcontent-%COMP%_punch-in {
    0% {
        opacity: 0.25;
        filter: blur(3px);
        transform: scale(1.15);
    }

    100% {
        opacity: 1;
        filter: blur(0);
        transform: scale(1);
    }
}

.word-new[_ngcontent-%COMP%] {
    display: inline;
    animation: _ngcontent-%COMP%_punch-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}




.lint-reveal[_ngcontent-%COMP%] {
    white-space: pre-wrap;
}

.lint-char[_ngcontent-%COMP%] {
    display: inline;
    will-change: opacity, filter;
}`]})}}return t})();var An=(t,d)=>d.id;function Rn(t,d){t&1&&(i(0,"span",13),r(1,"/"),a())}function Bn(t,d){if(t&1){let n=bn();i(0,"span",12),rn("click",function(){let e=vn(n).$index,v=m();return yn(v.switchScenario(e))}),r(1),a(),h(2,Rn,2,0,"span",13)}if(t&2){let n=d.$implicit,s=d.$index,e=d.$count,v=m();O("breadcrumb-active",s===v.activeScenarioIndex),o(),l(n.label()),o(),g(s!==e-1?2:-1)}}function Wn(t,d){if(t&1&&(i(0,"span",18),r(1),a(),c(2,"span",17)),t&2){let n=m(2);o(),l(n.insertionTyped)}}function jn(t,d){t&1&&c(0,"span",17)}function Nn(t,d){if(t&1&&(i(0,"div",5)(1,"div",14)(2,"h2",15),r(3),a(),i(4,"div",16),h(5,Wn,3,1)(6,jn,1,0,"span",17),a()()()),t&2){let n=m();o(3),V(" ",n.l.demoSheetsContext()," "),o(2),g(n.insertionTyped?5:6)}}function Gn(t,d){if(t&1&&(i(0,"span",33),r(1),a(),c(2,"span",34)),t&2){let n=m(2);o(),l(n.insertionTyped)}}function Yn(t,d){if(t&1&&(i(0,"span",29),r(1),a()),t&2){let n=m(2);o(),l(n.l.insertionPlaceholder())}}function Kn(t,d){if(t&1&&(i(0,"div",6)(1,"div",19)(2,"span",20),r(3,"<"),a(),i(4,"span",21),r(5,"Anna"),a(),i(6,"span",22),r(7,"\xB7\xB7\xB7"),a()(),i(8,"div",23)(9,"div",24)(10,"div",25),r(11,"A"),a(),i(12,"div",26),r(13),a()()(),i(14,"div",27)(15,"div",28),h(16,Gn,3,1)(17,Yn,2,1,"span",29),a(),i(18,"span",30),f(),i(19,"svg",31),c(20,"path",32),a()()()()),t&2){let n=m();o(13),V(" ",n.l.demoWechatContext()," "),o(3),g(n.insertionTyped?16:17)}}function $n(t,d){if(t&1&&(i(0,"span",50),r(1),a(),c(2,"span",51)),t&2){let n=m(2);o(),l(n.insertionTyped)}}function qn(t,d){if(t&1&&(i(0,"span",49),r(1),a()),t&2){let n=m(2);o(),l(n.locale==="zh"?"\u7ED9\u667A\u80FD\u4F53\u53D1\u6D88\u606F\u2026":"Message the agent\u2026")}}function Qn(t,d){if(t&1&&(i(0,"div",7)(1,"div",35),f(),i(2,"svg",31),c(3,"path",36),a(),i(4,"svg",31),c(5,"circle",37)(6,"path",38),a(),i(7,"svg",31),c(8,"path",39),a()(),C(),i(9,"div",40)(10,"div",41)(11,"div",42)(12,"span",43),f(),i(13,"svg",44),c(14,"path",45),a()(),C(),i(15,"span",46),r(16),a()()(),i(17,"div",47)(18,"div",48),h(19,$n,3,1)(20,qn,2,1,"span",49),a()()()()),t&2){let n=m();o(16),V(" ",n.l.demoVscodeContext()," "),o(3),g(n.insertionTyped?19:20)}}function Un(t,d){if(t&1&&(i(0,"span",52),r(1," \u2014 "),a(),i(2,"span",53),r(3),a()),t&2){let n=m();o(3),l(n.calloutDesc)}}var Mn=(()=>{class t{constructor(){this.locale="",this.l=P.Web,this.buttonCommand=()=>P.Button.command(),this.buttonToEnd=()=>P.Button.toEnd(),this.overlayListening=()=>P.Overlay.listening(),this.overlayListeningForCommand=()=>P.Overlay.listeningForCommand(),this.instructionLine1=()=>P.Overlay.instructionDesktopLine1(this.l.keyTriggerSymbol()),this.instructionLine2=()=>P.Overlay.instructionDesktopLine2(this.l.keyTriggerSymbol(),this.l.keyCommandSymbol()),this.overlayState="idle",this.overlayText="",this.overlaySettled="",this.overlayNewWord="",this.overlayCommand="",this.overlaySilence=0,this.overlaySweep=0,this.overlayLintedText="",this.overlayLintReveal=0,this.overlayActiveKey="",this.overlayIsSpeaking=!1,this.triggerActive=!1,this.commandActive=!1,this.dictatePressed=!1,this.commandPressed=!1,this.calloutTitle="",this.calloutDesc="",this.calloutVisible=!1,this.stages=[],this.activeStageIndex=0,this.activeScenarioIndex=0,this.scenarioTabs=[],this.insertionText="",this.insertionTyped="",this.insertionSelected=!1,this.scenarioIndex=0}ngOnInit(){this.scenarioTabs=[{id:"sheets",label:()=>this.l.scenarioSheets()},{id:"wechat",label:()=>this.l.scenarioWechat()},{id:"vscode",label:()=>this.l.scenarioVscode()}],this.scheduleLoop()}ngOnChanges(n){n.locale&&!n.locale.firstChange&&this.restartCurrentScenario()}ngOnDestroy(){this.cancelTimeline()}cancelTimeline(){this.timelineSub?.unsubscribe(),this.pressTimerSub?.unsubscribe(),this.calloutTimerSub?.unsubscribe()}getScenarioSheets(){return{fillerText:this.l.demoSheetsFiller(),cleanText:this.l.demoSheetsClean(),continuationText:this.l.demoSheetsContinuation(),commandText:this.l.demoSheetsCommand(),commandResult:this.l.demoSheetsResult(),contextText:this.l.demoSheetsContext(),extraRounds:[{commandText:this.l.demoSheetsCommand2(),commandResult:this.l.demoSheetsResult2()}]}}getScenarioWeChat(){return{fillerText:this.l.demoWechatFiller(),cleanText:this.l.demoWechatClean(),continuationText:this.l.demoWechatContinuation(),commandText:this.l.demoWechatCommand(),commandResult:this.l.demoWechatResult(),contextText:this.l.demoWechatContext(),extraRounds:[{commandText:this.l.demoWechatCommand2(),commandResult:this.l.demoWechatResult2(),stageLabel:()=>this.l.stageTranslate(),calloutTitle:this.l.showcaseTranslateTitle(),calloutDesc:this.l.showcaseTranslateDesc()}]}}getScenarioVSCode(){return{fillerText:this.l.demoVscodeFiller(),cleanText:this.l.demoVscodeClean(),continuationText:this.l.demoVscodeContinuation(),commandText:this.l.demoVscodeCommand(),commandResult:this.l.demoVscodeResult()}}getScenarioByIndex(n){return n===0?this.getScenarioSheets():n===1?this.getScenarioWeChat():this.getScenarioVSCode()}switchScenario(n){n!==this.activeScenarioIndex&&(this.scenarioIndex=n,this.reset(),this.activeScenarioIndex=n,this.runTimeline(this.getScenarioByIndex(n)))}restartCurrentScenario(){this.scenarioIndex=this.activeScenarioIndex,this.reset(),this.runTimeline(this.getScenarioByIndex(this.activeScenarioIndex))}scheduleLoop(){this.reset(),this.activeScenarioIndex=this.scenarioIndex%3,this.runTimeline(this.getScenarioByIndex(this.activeScenarioIndex)),this.scenarioIndex++}reset(){this.cancelTimeline(),this.overlayState="idle",this.overlayText="",this.overlaySettled="",this.overlayNewWord="",this.overlayCommand="",this.overlaySilence=0,this.overlaySweep=0,this.overlayLintedText="",this.overlayLintReveal=0,this.overlayActiveKey="",this.overlayIsSpeaking=!1,this.triggerActive=!1,this.commandActive=!1,this.dictatePressed=!1,this.commandPressed=!1,this.calloutTitle="",this.calloutDesc="",this.calloutVisible=!1,this.stages=[],this.activeStageIndex=0,this.insertionText="",this.insertionTyped="",this.insertionSelected=!1}pressDictate(){this.dictatePressed=!0,this.pressTimerSub?.unsubscribe(),this.pressTimerSub=B(120).subscribe(()=>this.dictatePressed=!1)}pressCommand(){this.commandPressed=!0,this.pressTimerSub?.unsubscribe(),this.pressTimerSub=B(120).subscribe(()=>this.commandPressed=!1)}showCallout(n,s=""){this.calloutVisible=!1,this.calloutTimerSub?.unsubscribe(),this.calloutTimerSub=B(80).subscribe(()=>{this.calloutTitle=n,this.calloutDesc=s,this.calloutVisible=!0})}runTimeline(n){let s=n.preSelectedText?this.buildEditSteps(n):this.buildDictationSteps(n);this.timelineSub=Z(...s.map(e=>B(e.delay).pipe(nn(()=>e.fn())))).subscribe({complete:()=>this.scheduleLoop()})}buildEditSteps(n){let s=[],e=[],v=0,w=200,p=n.preSelectedText;s.push({delay:0,fn:()=>{this.insertionTyped=p}}),e.push({id:"select",label:()=>this.l.stageActivate(),startOffset:800}),s.push({delay:800,fn:()=>{this.stages=e,this.activeStageIndex=0,this.insertionSelected=!0,this.showCallout(this.l.showcaseEditTitle(),this.l.showcaseEditDesc())}}),s.push({delay:2e3,fn:()=>{this.triggerActive=!0,this.pressDictate(),this.overlayActiveKey="trigger",this.overlayState="command",this.overlayText=p,this.overlaySettled=p,this.overlayIsSpeaking=!1,this.insertionSelected=!1}}),e.push({id:"edit-command",label:()=>this.l.stageCommand(),startOffset:0});let _=e.length-1;s.push({delay:1500,fn:()=>{this.activeStageIndex=_,this.triggerActive=!1,this.overlayActiveKey="",this.overlayIsSpeaking=!0,this.commandActive=!0,this.pressCommand(),this.overlayActiveKey="command"}});let T=n.commandText.split(" ");for(let y=0;y<T.length;y++){let A=y+1;s.push({delay:y===0?500:400,fn:()=>{this.overlayCommand=T.slice(0,A).join(" ")}})}s.push({delay:1500,fn:()=>{this.commandActive=!1,this.overlayActiveKey="",this.overlayIsSpeaking=!1,this.overlayLintedText=n.commandResult,this.overlayLintReveal=0,this.overlayState="linting",this.overlayCommand=""}});let $=[...n.commandResult].length,F=Math.max(800,$/w*1e3),H=Math.ceil(F/16);for(let y=1;y<=H;y++){let A=this.easeInOut(y/H);s.push({delay:16,fn:()=>{this.overlayLintReveal=A}})}s.push({delay:400,fn:()=>{this.overlayText=n.commandResult,this.overlaySettled=n.commandResult,this.overlayLintedText="",this.overlayLintReveal=0,this.overlayState="dictating"}}),e.push({id:"commit",label:()=>this.l.stageCommit(),startOffset:0});let I=e.length-1;s.push({delay:2e3,fn:()=>{this.activeStageIndex=I,this.overlayIsSpeaking=!1,this.overlayNewWord="",this.triggerActive=!0,this.pressDictate(),this.overlayActiveKey="trigger",this.showCallout(this.l.showcaseCommitTitle(),this.l.showcaseCommitDesc())}}),s.push({delay:800,fn:()=>{this.triggerActive=!1,this.overlayActiveKey="",this.overlayState="done"}});let q=n.commandResult;return s.push({delay:1500,fn:()=>{this.overlayState="idle",this.insertionTyped=q}}),s.push({delay:3800,fn:()=>{}}),s}buildDictationSteps(n){let s=[],e=[],v=()=>300+Math.floor(Math.random()*150),p=n.extraRounds??[];n.contextText&&s.push({delay:0,fn:()=>{this.insertionTyped=n.contextText}}),e.push({id:"activate",label:()=>this.l.stageActivate(),startOffset:0}),s.push({delay:800,fn:()=>{this.stages=e,this.activeStageIndex=0,this.triggerActive=!0,this.pressDictate(),this.overlayActiveKey="trigger",this.overlayState="instruction",this.showCallout(this.l.showcaseHoldTitle(),this.l.showcaseHoldDesc())}}),e.push({id:"dictate",label:()=>this.l.stageDictate(),startOffset:0}),s.push({delay:2500,fn:()=>{this.activeStageIndex=1,this.triggerActive=!1,this.overlayActiveKey="",this.overlayState="dictating",this.overlayIsSpeaking=!0,this.showCallout(this.l.showcasePreviewTitle(),this.l.showcasePreviewDesc())}});let _=n.fillerText.split(" ");for(let x=0;x<_.length;x++){let u=x+1,L=x===0?300:v();s.push({delay:L,fn:()=>{this.overlaySettled=_.slice(0,u-1).join(" ")+(u>1?" ":""),this.overlayNewWord=_[u-1],this.overlayText=_.slice(0,u).join(" "),this.overlaySilence=0}})}e.push({id:"polish",label:()=>this.l.stagePolish(),startOffset:0}),s.push({delay:800,fn:()=>{this.activeStageIndex=2,this.overlayIsSpeaking=!1,this.overlayNewWord="",this.commandActive=!0,this.pressCommand(),this.overlayActiveKey="command",this.showCallout(this.l.showcasePolishTitle(),this.l.showcasePolishDesc())}}),s.push({delay:300,fn:()=>{this.commandActive=!1,this.overlayActiveKey="",this.overlayLintedText=n.cleanText,this.overlayLintReveal=0,this.overlayState="linting",this.overlaySilence=0}});let T=[...n.cleanText].length,$=Math.max(800,T/200*1e3),F=Math.ceil($/16);for(let x=1;x<=F;x++){let u=this.easeInOut(x/F);s.push({delay:16,fn:()=>{this.overlayLintReveal=u}})}s.push({delay:400,fn:()=>{this.overlayText=n.cleanText,this.overlaySettled=n.cleanText,this.overlayNewWord="",this.overlayLintedText="",this.overlayLintReveal=0,this.overlayState="dictating"}});let H=p.some(x=>!!x.continuationText);e.push({id:"continue",label:()=>H?this.l.stageContinue()+" 1":this.l.stageContinue(),startOffset:0}),s.push({delay:2e3,fn:()=>{this.activeStageIndex=3,this.overlayIsSpeaking=!0,this.showCallout(this.l.showcasePreviewTitle(),this.l.showcasePreviewDesc())}});let I=n.continuationText.split(" ");for(let x=0;x<I.length;x++){let u=x+1,L=v();s.push({delay:L,fn:()=>{this.overlaySettled=n.cleanText+`
`+I.slice(0,u-1).join(" ")+(u>1?" ":""),this.overlayNewWord=I[u-1],this.overlayText=n.cleanText+`
`+I.slice(0,u).join(" "),this.overlaySilence=0}})}if(!n.simple){let x=p.length>0;e.push({id:"command",label:()=>x?this.l.stageCommand()+" 1":this.l.stageCommand(),startOffset:0});let u=e.length-1;s.push({delay:600,fn:()=>{this.activeStageIndex=u,this.overlayNewWord="",this.commandActive=!0,this.pressCommand(),this.overlayActiveKey="command",this.overlayState="command",this.overlayIsSpeaking=!0,this.overlaySilence=0,this.showCallout(this.l.showcaseCommandsTitle(),this.l.showcaseCommandsDesc())}});let L=n.commandText.split(" ");for(let S=0;S<L.length;S++){let E=S+1;s.push({delay:S===0?800:400,fn:()=>{this.overlayCommand=L.slice(0,E).join(" ")}})}s.push({delay:1500,fn:()=>{this.commandActive=!1,this.overlayActiveKey="",this.overlayIsSpeaking=!1,this.overlayLintedText=n.commandResult,this.overlayLintReveal=0,this.overlayState="linting",this.overlayCommand=""}});let j=[...n.commandResult].length,Q=Math.max(300,j/200*1e3),N=Math.ceil(Q/16);for(let S=1;S<=N;S++){let E=this.easeInOut(S/N);s.push({delay:16,fn:()=>{this.overlayLintReveal=E}})}s.push({delay:400,fn:()=>{this.overlayText=n.commandResult,this.overlaySettled=n.commandResult,this.overlayNewWord="",this.overlayLintedText="",this.overlayLintReveal=0,this.overlayState="dictating"}}),s.push({delay:3e3,fn:()=>{}})}for(let x=0;x<p.length;x++){let u=p[x],L=u.stageLabel??(()=>this.l.stageCommand()+` ${x+2}`);if(u.continuationText){let M=u.continuationText.split(" "),R=()=>x===0&&!n.simple?n.commandResult:x>0?p[x-1].commandResult:n.commandResult;e.push({id:`continue-${x}`,label:()=>this.l.stageContinue()+` ${x+2}`,startOffset:0});let Pn=e.length-1;s.push({delay:0,fn:()=>{this.activeStageIndex=Pn,this.overlayIsSpeaking=!0,this.overlayState="dictating",this.showCallout(this.l.showcasePreviewTitle(),this.l.showcasePreviewDesc())}});for(let J=0;J<M.length;J++){let X=J+1;s.push({delay:J===0?300:v(),fn:()=>{let pn=R();this.overlaySettled=pn+`
`+M.slice(0,X-1).join(" ")+(X>1?" ":""),this.overlayNewWord=M[X-1],this.overlayText=pn+`
`+M.slice(0,X).join(" "),this.overlaySilence=0}})}s.push({delay:600,fn:()=>{}})}e.push({id:`round-${x}`,label:L,startOffset:0});let j=e.length-1,Q=u.calloutTitle??this.l.showcaseCommandsTitle(),N=u.calloutDesc??this.l.showcaseCommandsDesc();s.push({delay:0,fn:()=>{this.activeStageIndex=j,this.overlayNewWord="",this.commandActive=!0,this.pressCommand(),this.overlayActiveKey="command",this.overlayState="command",this.overlayIsSpeaking=!0,this.overlaySilence=0,this.showCallout(Q,N)}});let S=u.commandText.split(" ");for(let M=0;M<S.length;M++){let R=M+1;s.push({delay:M===0?800:400,fn:()=>{this.overlayCommand=S.slice(0,R).join(" ")}})}s.push({delay:1500,fn:()=>{this.commandActive=!1,this.overlayActiveKey="",this.overlayIsSpeaking=!1,this.overlayLintedText=u.commandResult,this.overlayLintReveal=0,this.overlayState="linting",this.overlayCommand=""}});let E=[...u.commandResult].length,ln=Math.max(300,E/200*1e3),U=Math.ceil(ln/16);for(let M=1;M<=U;M++){let R=this.easeInOut(M/U);s.push({delay:16,fn:()=>{this.overlayLintReveal=R}})}s.push({delay:400,fn:()=>{this.overlayText=u.commandResult,this.overlaySettled=u.commandResult,this.overlayNewWord="",this.overlayLintedText="",this.overlayLintReveal=0,this.overlayState="dictating"}}),s.push({delay:3e3,fn:()=>{}})}e.push({id:"commit",label:()=>this.l.stageCommit(),startOffset:0});let q=e.length-1;s.push({delay:0,fn:()=>{this.activeStageIndex=q,this.overlayIsSpeaking=!1,this.overlayNewWord="",this.triggerActive=!0,this.pressDictate(),this.overlayActiveKey="trigger",this.showCallout(this.l.showcaseCommitTitle(),this.l.showcaseCommitDesc())}}),s.push({delay:800,fn:()=>{this.triggerActive=!1,this.overlayActiveKey="",this.overlayState="done"}});let y=p.length>0?p[p.length-1].commandResult:n.commandResult,A=n.contextText?n.contextText+`
`:"";return s.push({delay:1500,fn:()=>{this.overlayState="idle",this.insertionTyped=A+y}}),s.push({delay:3800,fn:()=>{}}),s}easeInOut(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=G({type:t,selectors:[["vype-showcase"]],inputs:{locale:"locale"},features:[tn],decls:16,vars:32,consts:[[1,"showcase"],[1,"scenario-breadcrumb"],[1,"demo-area"],[1,"mock-app-window"],[1,"mock-app-body"],[1,"mock-doc"],[1,"mock-chat"],[1,"mock-agent"],[1,"mock-overlay-float"],[3,"state","displayText","settledText","newWord","commandText","silenceRatio","sweepProgress","lintedText","lintReveal","activeKey","isSpeaking","keyTriggerSymbol","keyCommandSymbol","keyHintCommand","keyHintToEnd","statusListening","statusCommand","instructionLine1","instructionLine2"],[1,"demo-caption"],[1,"caption-title"],[1,"breadcrumb-item",3,"click"],["aria-hidden","true",1,"breadcrumb-sep"],[1,"mock-doc-page"],[1,"mock-doc-title"],[1,"mock-doc-body"],[1,"mock-doc-cursor"],[1,"mock-doc-typed"],[1,"mock-chat-header"],[1,"mock-chat-back"],[1,"mock-chat-name"],[1,"mock-chat-more"],[1,"mock-chat-messages"],[1,"mock-msg","mock-msg-received"],[1,"mock-avatar"],[1,"mock-msg-bubble"],[1,"mock-chat-input"],[1,"mock-chat-field"],[1,"mock-chat-placeholder"],[1,"mock-chat-send"],["width","16","height","16","viewBox","0 0 24 24","fill","none"],["d","M2 21l21-9L2 3v7l15 2-15 2v7z","fill","currentColor"],[1,"mock-chat-typed"],[1,"mock-chat-cursor"],[1,"mock-agent-sidebar"],["d","M20 2H4a2 2 0 00-2 2v12a2 2 0 002 2h14l4 4V4a2 2 0 00-2-2z","stroke","currentColor","stroke-width","1.5"],["cx","11","cy","11","r","7","stroke","currentColor","stroke-width","1.5"],["d","M21 21l-4.35-4.35","stroke","currentColor","stroke-width","1.5","stroke-linecap","round"],["d","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z","stroke","currentColor","stroke-width","1.5","fill","none"],[1,"mock-agent-main"],[1,"mock-agent-messages"],[1,"mock-agent-msg"],[1,"mock-agent-avatar"],["width","14","height","14","viewBox","0 0 24 24","fill","none"],["d","M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4zm-6 18c0-3.31 2.69-6 6-6s6 2.69 6 6","stroke","currentColor","stroke-width","1.5","stroke-linecap","round"],[1,"mock-agent-bubble"],[1,"mock-agent-input"],[1,"mock-agent-field"],[1,"mock-agent-placeholder"],[1,"mock-agent-typed"],[1,"mock-agent-cursor"],[1,"caption-sep"],[1,"caption-desc"]],template:function(s,e){s&1&&(i(0,"div",0)(1,"nav",1),an(2,Bn,3,4,null,null,An),a(),i(4,"div",2)(5,"div",3)(6,"div",4),h(7,Nn,7,2,"div",5)(8,Kn,21,2,"div",6)(9,Qn,21,2,"div",7),a(),i(10,"div",8),c(11,"vype-overlay-demo",9),a()(),i(12,"div",10)(13,"span",11),r(14),a(),h(15,Un,4,1),a()()()),s&2&&(o(2),on(e.scenarioTabs),o(3),O("mock-doc-window",e.activeScenarioIndex===0)("mock-chat",e.activeScenarioIndex===1)("mock-agent",e.activeScenarioIndex===2),o(2),g(e.activeScenarioIndex===0?7:e.activeScenarioIndex===1?8:9),o(3),O("mock-overlay-hidden",e.overlayState==="idle"),o(),D("state",e.overlayState)("displayText",e.overlayText)("settledText",e.overlaySettled)("newWord",e.overlayNewWord)("commandText",e.overlayCommand)("silenceRatio",e.overlaySilence)("sweepProgress",e.overlaySweep)("lintedText",e.overlayLintedText)("lintReveal",e.overlayLintReveal)("activeKey",e.overlayActiveKey)("isSpeaking",e.overlayIsSpeaking)("keyTriggerSymbol",e.l.keyTriggerSymbol())("keyCommandSymbol",e.l.keyCommandSymbol())("keyHintCommand",e.buttonCommand())("keyHintToEnd",e.buttonToEnd())("statusListening",e.overlayListening())("statusCommand",e.overlayListeningForCommand())("instructionLine1",e.instructionLine1())("instructionLine2",e.instructionLine2()),o(),O("visible",e.calloutVisible),o(2),l(e.calloutTitle),o(),g(e.calloutDesc?15:-1))},dependencies:[K,mn],styles:[`[_nghost-%COMP%] {
    display: block;
}

.showcase[_ngcontent-%COMP%] {
    max-width: 680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
}




.scenario-breadcrumb[_ngcontent-%COMP%] {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.breadcrumb-item[_ngcontent-%COMP%] {
    font-size: clamp(20px, 3.5vw, 28px);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-tertiary, #c7c7cc);
    cursor: pointer;
    transition: color 0.3s ease;
    user-select: none;
}

.breadcrumb-item[_ngcontent-%COMP%]:hover {
    color: var(--text-secondary, #6e6e73);
}

.breadcrumb-item.breadcrumb-active[_ngcontent-%COMP%] {
    color: var(--text-primary, #1d1d1f);
}

.breadcrumb-sep[_ngcontent-%COMP%] {
    font-size: clamp(18px, 3vw, 24px);
    font-weight: 300;
    color: var(--surface-border, rgba(0, 0, 0, 0.15));
    user-select: none;
}




.demo-caption[_ngcontent-%COMP%] {
    text-align: center;
    padding: 10px 12px 0;
    font-size: 13px;
    line-height: 1.5;
    color: var(--text-secondary, #6e6e73);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.35s ease, transform 0.35s ease;
    min-height: 24px;
}

.demo-caption.visible[_ngcontent-%COMP%] {
    opacity: 1;
    transform: translateY(0);
}

.caption-title[_ngcontent-%COMP%] {
    font-weight: 600;
    color: var(--text-primary, #1d1d1f);
}

.caption-sep[_ngcontent-%COMP%] {
    color: var(--text-tertiary, #aaa);
}

.caption-desc[_ngcontent-%COMP%] {
    color: var(--text-secondary, #6e6e73);
}




.demo-area[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}




.mock-app-window[_ngcontent-%COMP%] {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);
    background: #fff;
    position: relative;
}

.mock-app-body[_ngcontent-%COMP%] {
    min-height: 340px;
    position: relative;
}

.mock-overlay-float[_ngcontent-%COMP%] {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%) scale(0.78);
    transform-origin: bottom center;
    z-index: 10;
    width: 92%;
    max-width: 520px;
    transition: opacity 0.3s ease;
    opacity: 1;
}

.mock-overlay-hidden[_ngcontent-%COMP%] {
    opacity: 0;
    pointer-events: none;
}




.mock-doc[_ngcontent-%COMP%] {
    display: flex;
    justify-content: center;
    min-height: 340px;
    background: #f0f0f0;
    padding: 20px 16px;
}

.mock-doc-page[_ngcontent-%COMP%] {
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    padding: 28px 32px;
    width: 100%;
    max-width: 520px;
}

.mock-doc-title[_ngcontent-%COMP%] {
    font-size: 18px;
    font-weight: 700;
    color: #1d1d1f;
    margin: 0 0 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e8e8e8;
}

.mock-doc-body[_ngcontent-%COMP%] {
    font-size: 13px;
    line-height: 1.7;
    color: #333;
    white-space: pre-wrap;
    word-break: break-word;
    min-height: 180px;
}

.mock-doc-typed[_ngcontent-%COMP%] {
    white-space: pre-wrap;
}

.mock-doc-cursor[_ngcontent-%COMP%] {
    display: inline-block;
    width: 1px;
    height: 16px;
    background: #1d1d1f;
    animation: _ngcontent-%COMP%_mock-blink 1s step-end infinite;
    vertical-align: text-bottom;
}




.mock-chat[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    min-height: 340px;
    background: #ebebeb;
}

.mock-chat-header[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    background: #ededed;
    border-bottom: 1px solid #d9d9d9;
    font-size: 13px;
    font-weight: 600;
    color: #333;
}

.mock-chat-back[_ngcontent-%COMP%] {
    font-size: 18px;
    color: #333;
    font-weight: 300;
    margin-right: 12px;
}

.mock-chat-name[_ngcontent-%COMP%] {
    flex: 1;
    text-align: center;
}

.mock-chat-more[_ngcontent-%COMP%] {
    color: #666;
    font-size: 18px;
    letter-spacing: -2px;
}

.mock-chat-messages[_ngcontent-%COMP%] {
    flex: 1;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    overflow: hidden;
}

.mock-msg[_ngcontent-%COMP%] {
    display: flex;
    gap: 8px;
    align-items: flex-start;
}

.mock-avatar[_ngcontent-%COMP%] {
    width: 32px;
    height: 32px;
    border-radius: 4px;
    background: #07c160;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.mock-msg-bubble[_ngcontent-%COMP%] {
    background: #fff;
    border-radius: 6px;
    padding: 10px 12px;
    font-size: 13px;
    line-height: 1.55;
    color: #333;
    max-width: 70%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
}

.mock-chat-input[_ngcontent-%COMP%] {
    border-top: 1px solid #d9d9d9;
    padding: 8px 12px;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    gap: 8px;
}

.mock-chat-field[_ngcontent-%COMP%] {
    flex: 1;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 13px;
    min-height: 22px;
    color: #333;
}

.mock-chat-typed[_ngcontent-%COMP%] {
    white-space: pre-wrap;
}

.mock-chat-cursor[_ngcontent-%COMP%] {
    display: inline-block;
    width: 1px;
    height: 15px;
    background: #07c160;
    animation: _ngcontent-%COMP%_mock-blink 1s step-end infinite;
    vertical-align: text-bottom;
}

.mock-chat-placeholder[_ngcontent-%COMP%] {
    color: #bbb;
    font-style: italic;
}

.mock-chat-send[_ngcontent-%COMP%] {
    color: #07c160;
    display: flex;
    align-items: center;
}




.mock-agent[_ngcontent-%COMP%] {
    display: flex;
    background: #fafafa;
    min-height: 340px;
}

.mock-agent-sidebar[_ngcontent-%COMP%] {
    width: 40px;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
    color: #999;
    border-right: 1px solid #e4e4e7;
}

.mock-agent-main[_ngcontent-%COMP%] {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.mock-agent-messages[_ngcontent-%COMP%] {
    flex: 1;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    overflow: hidden;
}

.mock-agent-msg[_ngcontent-%COMP%] {
    display: flex;
    gap: 8px;
    align-items: flex-start;
}

.mock-agent-avatar[_ngcontent-%COMP%] {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: linear-gradient(135deg, #6366f1, #3b6ff0);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.mock-agent-bubble[_ngcontent-%COMP%] {
    background: #fff;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    line-height: 1.55;
    color: #333;
    max-width: 80%;
}

.mock-agent-input[_ngcontent-%COMP%] {
    border-top: 1px solid #e4e4e7;
    padding: 10px 16px;
    background: #fff;
}

.mock-agent-field[_ngcontent-%COMP%] {
    background: #f4f4f5;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    min-height: 22px;
    color: #333;
}

.mock-agent-typed[_ngcontent-%COMP%] {
    white-space: pre-wrap;
}

.mock-agent-cursor[_ngcontent-%COMP%] {
    display: inline-block;
    width: 1px;
    height: 15px;
    background: #3b6ff0;
    animation: _ngcontent-%COMP%_mock-blink 1s step-end infinite;
    vertical-align: text-bottom;
}

.mock-agent-placeholder[_ngcontent-%COMP%] {
    color: #a1a1aa;
}

@keyframes _ngcontent-%COMP%_mock-blink {
    50% {
        opacity: 0;
    }
}




@media (max-width: 1000px) {
    .showcase[_ngcontent-%COMP%] {
        gap: 12px;
    }
}`]})}}return t})();var Jn="https://raw.githubusercontent.com/OpenBMB/Vype/main/release.json",On=(()=>{class t{constructor(){this.http=en(kn),this.dmgHref=z(""),this.dmgVersion=z(""),this.apkHref=z(""),this.apkVersion=z(""),this.msixHref=z(""),this.msixVersion=z(""),this.http.get(Jn).pipe(xn(()=>hn)).subscribe(n=>{this.apply(n.macos,this.dmgHref,this.dmgVersion),this.apply(n.android,this.apkHref,this.apkVersion),this.apply(n.windows,this.msixHref,this.msixVersion)})}apply(n,s,e){n&&(s.set(n.url),e.set(n.version))}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275prov=un({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Xn(t,d){t&1&&(i(0,"p",13),r(1," To "),i(2,"span",105),r(3,"type"),a(),r(4," talk is to live "),a())}function Zn(t,d){t&1&&(i(0,"p",13)(1,"span",105),r(2,"\u6253\u5B57"),a(),r(3,"\u8BF4\u8BDD\uFF0C\u5C31\u662F\u751F\u6D3B"),a())}function ne(t,d){if(t&1&&(i(0,"span",109),r(1),a()),t&2){let n=m(2);o(),l(n.dmgVersion())}}function ee(t,d){if(t&1&&(i(0,"div",16)(1,"a",106),f(),i(2,"svg",107),c(3,"path",108),a(),r(4," macOS "),h(5,ne,2,1,"span",109),a(),C(),i(6,"span",110),r(7),a()()),t&2){let n=m();o(),D("href",n.dmgHref(),W),o(4),g(n.dmgVersion()?5:-1),o(2),l(n.l.platformMacosReq())}}function te(t,d){if(t&1&&(i(0,"span",109),r(1),a()),t&2){let n=m(2);o(),l(n.apkVersion())}}function ie(t,d){if(t&1&&(i(0,"div",16)(1,"a",106),f(),i(2,"svg",107),c(3,"path",111),a(),r(4," Android "),h(5,te,2,1,"span",109),a(),C(),i(6,"span",110),r(7),a()()),t&2){let n=m();o(),O("hero-download-secondary",n.detectedOS==="unknown"),D("href",n.apkHref(),W),o(4),g(n.detectedOS==="android"&&n.apkVersion()?5:-1),o(2),l(n.l.platformAndroidReq())}}function ae(t,d){if(t&1&&(i(0,"span",109),r(1),a()),t&2){let n=m(2);o(),l(n.msixVersion())}}function oe(t,d){if(t&1&&(i(0,"div",16)(1,"a",106),f(),i(2,"svg",107),c(3,"path",112),a(),r(4," Windows "),h(5,ae,2,1,"span",109),a(),C(),i(6,"span",110),r(7),a()()),t&2){let n=m();o(),D("href",n.msixHref(),W),o(4),g(n.msixVersion()?5:-1),o(2),l(n.l.platformWindowsReq())}}function re(t,d){if(t&1&&(i(0,"div",16)(1,"span",113),f(),i(2,"svg",107),c(3,"path",108),a(),r(4," iOS "),a(),C(),i(5,"span",110),r(6),a()()),t&2){let n=m();o(6),sn("",n.l.platformIosReq()," \xB7 ",n.l.platformComingSoon())}}function se(t,d){if(t&1&&(i(0,"div",16)(1,"span",113),f(),i(2,"svg",107),c(3,"circle",114)(4,"circle",115),a(),r(5),a(),C(),i(6,"span",110),r(7),a()()),t&2){let n=m();o(5),V(" ",n.l.platformHarmony()," "),o(2),sn("",n.l.platformHarmonyReq()," \xB7 ",n.l.platformComingSoon())}}function le(t,d){if(t&1&&(i(0,"a",18),f(),i(1,"svg",116),c(2,"path",108),a(),r(3," macOS "),a()),t&2){let n=m();D("href",n.dmgHref(),W)}}function de(t,d){if(t&1&&(i(0,"a",18),f(),i(1,"svg",116),c(2,"path",111),a(),r(3," Android "),a()),t&2){let n=m();D("href",n.apkHref(),W)}}function ce(t,d){if(t&1&&(i(0,"a",18),f(),i(1,"svg",116),c(2,"path",112),a(),r(3," Windows "),a()),t&2){let n=m();D("href",n.msixHref(),W)}}function me(t,d){if(t&1&&(i(0,"span",19),f(),i(1,"svg",116),c(2,"path",108),a(),r(3),a()),t&2){let n=m();o(3),V(" iOS \xB7 ",n.l.platformComingSoon()," ")}}function pe(t,d){if(t&1&&(i(0,"span",19),f(),i(1,"svg",116),c(2,"circle",114)(3,"circle",115),a(),r(4),a()),t&2){let n=m();o(4),sn(" ",n.l.platformHarmony()," \xB7 ",n.l.platformComingSoon()," ")}}function he(t,d){if(t&1&&(i(0,"span",53),r(1),a()),t&2){let n=m();o(),l(n.asrNewWord)}}function ge(t,d){t&1&&c(0,"span",54)}function xe(t,d){t&1&&(i(0,"span",63),r(1,"Can we meet at 4pm at that Italian place?"),a())}function fe(t,d){t&1&&(i(0,"span",63),r(1,"\u6211\u4EEC\u56DB\u70B9\u5728\u90A3\u5BB6\u610F\u5927\u5229\u9910\u5385\u89C1\uFF1F"),a())}function ue(t,d){t&1&&(i(0,"span",63)(1,"strong"),r(2,"K\xF6nnen wir uns um 16 Uhr in dem italienischen Restaurant treffen?"),a()())}function ve(t,d){t&1&&(i(0,"span",63)(1,"strong"),r(2,"Can we meet at 4pm at that Italian place?"),a()())}function ye(t,d){t&1&&(i(0,"span",63),r(1,"hey Sarah wollte nur fragen ob das Design-Review am Donnerstag noch stattfindet und ob du brauchst dass ich irgendwas vorbereite"),a())}function Ce(t,d){t&1&&(i(0,"span",63),r(1,"hey Sarah just wanted to check if the design review is still on for Thursday and if you need me to prepare anything beforehand"),a())}function be(t,d){t&1&&(i(0,"span",63)(1,"strong"),r(2,"Hallo Sarah,"),a()(),i(3,"span",63),r(4,"wollte kurz nachfragen, ob das Design-Review am Donnerstag noch stattfindet. Falls du m\xF6chtest, dass ich etwas vorbereite, sag Bescheid."),a(),i(5,"span",63)(6,"strong"),r(7,"Viele Gr\xFC\xDFe"),a()())}function _e(t,d){t&1&&(i(0,"span",63)(1,"strong"),r(2,"Hi Sarah,"),a()(),i(3,"span",63),r(4,"Just wanted to check \u2014 is the design review still on for Thursday? Let me know if you need me to prepare anything beforehand."),a(),i(5,"span",63)(6,"strong"),r(7,"Best"),a()())}function we(t,d){t&1&&(i(0,"a",103),r(1,"\u4EACICP\u59072023004350\u53F7-1"),a())}function Se(){let t=navigator.userAgent;return/iPhone|iPad|iPod/.test(t)?"ios":/Android/.test(t)?"android":/HarmonyOS|OpenHarmony/.test(t)?"harmony":/Mac/.test(t)?"macos":/Win/.test(t)?"windows":"unknown"}var Je=(()=>{class t{constructor(){this.l=P.Web,this.rel=en(On),this.dmgHref=this.rel.dmgHref,this.dmgVersion=this.rel.dmgVersion,this.apkHref=this.rel.apkHref,this.apkVersion=this.rel.apkVersion,this.msixHref=this.rel.msixHref,this.msixVersion=this.rel.msixVersion,this.detectedOS="unknown",this.isCNDomain=window.location.hostname.endsWith(".cn"),this.locale=z("en"),this.asrPhase="text",this.asrSettled="",this.asrNewWord="",this.asrExampleIdx=0,this.asrExamples={en:["I think we should move the meeting to next week because half the team is out of office","Can you send me the monthly summary by end of day Thursday"],zh:["\u6211\u89C9\u5F97\u6211\u4EEC\u5E94\u8BE5\u628A\u4F1A\u8BAE\u632A\u5230\u4E0B\u5468\u56E0\u4E3A\u4E00\u534A\u7684\u4EBA\u4E0D\u5728\u529E\u516C\u5BA4","\u4F60\u80FD\u628A\u6708\u5EA6\u603B\u7ED3\u5728\u5468\u56DB\u4E0B\u73ED\u524D\u53D1\u7ED9\u6211\u5417"]}}ngOnInit(){this.detectedOS=Se();let n=localStorage.getItem("vype-locale");if(n==="zh"||n==="en")this.locale.set(n),P.setLanguage(n);else{let e=navigator.language.toLowerCase().startsWith("zh")?"zh":"en";this.locale.set(e),P.setLanguage(e)}this.startAsrAnimation()}ngOnDestroy(){this.asrSub?.unsubscribe()}startAsrAnimation(){this.asrSub?.unsubscribe(),this.asrSub=gn(()=>this.buildAsrCycle$()).pipe(fn()).subscribe()}buildAsrCycle$(){let n=this.locale(),s=this.asrExamples[n][this.asrExampleIdx++%2],e=n==="zh",v=e?[...s]:s.split(" "),w=e?"":" ",p=[];p.push({delay:800,fn:()=>{this.asrPhase="text",this.asrSettled="",this.asrNewWord=""}});for(let _=0;_<v.length;_++){let T=_;p.push({delay:e?150:280+Math.floor(Math.random()*80),fn:()=>{this.asrSettled=v.slice(0,T).join(w)+(T>0?w:""),this.asrNewWord=v[T]}})}return p.push({delay:100,fn:()=>{this.asrSettled=v.join(w),this.asrNewWord=""}}),p.push({delay:2500,fn:()=>{this.asrPhase="pause"}}),Z(...p.map(_=>B(_.delay).pipe(nn(()=>_.fn()))))}toggleLocale(n){n.stopPropagation();let s=this.locale()==="en"?"zh":"en";P.setLanguage(s),localStorage.setItem("vype-locale",s),this.locale.set(s)}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275cmp=G({type:t,selectors:[["vype-home"]],decls:215,vars:60,consts:[[1,"nav"],[1,"nav-brand"],["width","24","height","24","viewBox","0 0 1024 1024","fill","none",1,"nav-icon"],["cx","512","cy","512","r","512","fill","#3B6FF0"],["x","370","y","440","width","54","height","216","rx","27","fill","white","opacity","0.95"],["x","485","y","296","width","54","height","432","rx","27","fill","white","opacity","0.95"],["x","600","y","384","width","54","height","324","rx","27","fill","white","opacity","0.95"],[1,"nav-right"],[1,"locale-toggle",3,"click"],[1,"locale-opt"],[1,"locale-sep"],[1,"hero"],[1,"hero-headline"],[1,"hero-tagline"],[1,"hero-subtitle"],[1,"hero-cta"],[1,"hero-download-col"],[1,"hero-cta-other"],[1,"hero-other-link",3,"href"],[1,"hero-other-link","hero-other-disabled"],[1,"showcase-section"],[3,"locale"],[1,"problem"],[1,"section-heading"],[1,"problem-grid"],[1,"problem-card"],[1,"problem-icon"],["width","24","height","24","viewBox","0 0 24 24","fill","none"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z","fill","none","stroke","currentColor","stroke-width","1.5"],["x","4","y","4","width","16","height","16","rx","3","fill","none","stroke","currentColor","stroke-width","1.5"],["x1","7","y1","9","x2","17","y2","9","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","opacity","0.3"],["x1","7","y1","12","x2","14","y2","12","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","opacity","0.3"],["x1","7","y1","15","x2","11","y2","15","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","opacity","0.3"],["x1","4","y1","4","x2","20","y2","20","stroke","currentColor","stroke-width","2","stroke-linecap","round"],[1,"problem-title"],[1,"problem-desc"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z","fill","currentColor"],["d","M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z","fill","currentColor"],["cx","9","cy","10","r","1.2","fill","currentColor","opacity","0.5"],["cx","12","cy","10","r","1.2","fill","currentColor","opacity","0.5"],["cx","15","cy","10","r","1.2","fill","currentColor","opacity","0.5"],[1,"problem-solution"],[1,"features"],[1,"feature-list"],[1,"feature-row"],[1,"feature-text"],[1,"feature-title"],[1,"feature-desc"],[1,"feature-desc","feature-desc-secondary"],[1,"feature-visual"],[1,"visual-scene","visual-asr-demo"],[1,"asr-transcript","asr-transcript-visible"],[1,"asr-settled"],[1,"asr-new-word"],["aria-hidden","true",1,"asr-cursor"],[1,"visual-scene","visual-commands"],[1,"mock-command-example","cmd-ex-anim","cmd-ex-delay-0"],[1,"mock-bubble","mock-raw","mock-compact","cmd-step","cmd-step-delay-0"],[1,"mock-mic"],["width","14","height","14","viewBox","0 0 16 16","fill","none"],["x","2.5","y","5.5","width","2.5","height","5","rx","1.25","fill","currentColor"],["x","6.75","y","2","width","2.5","height","12","rx","1.25","fill","currentColor"],["x","11","y","3.5","width","2.5","height","9","rx","1.25","fill","currentColor"],[1,"mock-text"],[1,"mock-command-chip","cmd-step","cmd-step-delay-1"],[1,"mock-cmd-slash"],[1,"mock-cmd-label"],[1,"mock-bubble","mock-clean","mock-compact","cmd-step","cmd-step-delay-2"],[1,"mock-command-example","cmd-ex-anim","cmd-ex-delay-1"],[1,"mock-bubble","mock-raw","mock-compact","cmd-step","cmd-step-delay-3"],[1,"mock-command-chip","cmd-step","cmd-step-delay-4"],[1,"mock-bubble","mock-clean","mock-compact","mock-email","cmd-step","cmd-step-delay-5"],[1,"visual-scene","visual-hotwords"],[1,"hw-feed"],[1,"hw-feed-item","hw-feed-anim","hw-feed-delay-0"],[1,"hw-feed-icon","hw-feed-mic"],["width","10","height","10","viewBox","0 0 16 16","fill","none"],[1,"hw-feed-text"],[1,"hw-feed-item","hw-feed-cmd","hw-feed-anim","hw-feed-delay-1"],[1,"hw-feed-icon","hw-feed-slash"],[1,"hw-feed-item","hw-feed-anim","hw-feed-delay-2"],[1,"hw-feed-item","hw-feed-anim","hw-feed-delay-3"],[1,"hw-feed-item","hw-feed-cmd","hw-feed-anim","hw-feed-delay-4"],[1,"hw-learn-arrow"],["width","14","height","18","viewBox","0 0 14 18","fill","none"],["d","M7 1v13m0 0l-4-4m4 4l4-4","stroke","currentColor","stroke-width","1.5","stroke-linecap","round","stroke-linejoin","round"],[1,"hw-learn-label"],[1,"hw-cards-row"],[1,"hotwords-card","hw-card-appear","hw-card-delay-0"],[1,"hotwords-header"],["width","14","height","14","viewBox","0 0 24 24","fill","none"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z","fill","currentColor"],[1,"hotwords-tags"],[1,"hotword-tag","hw-tag-appear","hw-tag-delay-0"],[1,"hotword-tag","hw-tag-appear","hw-tag-delay-1"],[1,"hotword-tag","hw-tag-appear","hw-tag-delay-2"],[1,"hotwords-card","hw-card-appear","hw-card-delay-1"],["d","M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z","fill","currentColor"],[1,"hotwords-prefs"],[1,"pref-item","hw-tag-appear","hw-tag-delay-1"],[1,"pref-item","hw-tag-appear","hw-tag-delay-2"],[1,"footer"],[1,"footer-copyright"],["href","https://beian.miit.gov.cn/","target","_blank","rel","noopener noreferrer",1,"footer-icp"],[1,"footer-tagline"],[1,"struck"],[1,"hero-download-btn",3,"href"],["width","16","height","16","viewBox","0 0 24 24","fill","currentColor",1,"hero-btn-icon"],["d","M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"],[1,"hero-version"],[1,"hero-req"],["d","M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V7H6v11zM3.5 7C2.67 7 2 7.67 2 8.5v7c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-7C5 7.67 4.33 7 3.5 7zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 0c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12c0-2.12-1.1-3.98-2.77-5.04h.3zM10 5H9V4h1v1zm5 0h-1V4h1v1z"],["d","M3 12.5v-7L11.5 4v8.5H3zm9.5-9L21 2v10.5h-8.5V3.5zM3 13.5h8.5V22l-8.5-1.5V13.5zM12.5 13.5H21V22l-8.5-1.5V13.5z"],[1,"hero-download-btn","hero-download-disabled"],["cx","12","cy","12","r","10","fill","none","stroke","currentColor","stroke-width","2"],["cx","12","cy","12","r","4","fill","currentColor"],["width","12","height","12","viewBox","0 0 24 24","fill","currentColor"]],template:function(s,e){s&1&&(i(0,"nav",0)(1,"span",1),f(),i(2,"svg",2),c(3,"circle",3)(4,"rect",4)(5,"rect",5)(6,"rect",6),a(),r(7),a(),C(),i(8,"div",7)(9,"button",8),rn("click",function(w){return e.toggleLocale(w)}),i(10,"span",9),r(11,"EN"),a(),i(12,"span",10),r(13,"/"),a(),i(14,"span",9),r(15,"\u4E2D\u6587"),a()()()(),i(16,"section",11)(17,"h1",12),r(18),a(),h(19,Xn,5,0,"p",13)(20,Zn,4,0,"p",13),i(21,"p",14),r(22),a(),i(23,"div",15),h(24,ee,8,3,"div",16),h(25,ie,8,5,"div",16),h(26,oe,8,3,"div",16),h(27,re,7,2,"div",16),h(28,se,8,3,"div",16),a(),i(29,"div",17),h(30,le,4,1,"a",18),h(31,de,4,1,"a",18),h(32,ce,4,1,"a",18),h(33,me,4,1,"span",19),h(34,pe,5,2,"span",19),a()(),i(35,"section",20),c(36,"vype-showcase",21),a(),i(37,"section",22)(38,"h2",23),r(39),a(),i(40,"div",24)(41,"div",25)(42,"div",26),f(),i(43,"svg",27),c(44,"path",28)(45,"rect",29)(46,"line",30)(47,"line",31)(48,"line",32)(49,"line",33),a()(),C(),i(50,"h3",34),r(51),a(),i(52,"p",35),r(53),a()(),i(54,"div",25)(55,"div",26),f(),i(56,"svg",27),c(57,"path",36),a()(),C(),i(58,"h3",34),r(59),a(),i(60,"p",35),r(61),a()(),i(62,"div",25)(63,"div",26),f(),i(64,"svg",27),c(65,"path",37)(66,"circle",38)(67,"circle",39)(68,"circle",40),a()(),C(),i(69,"h3",34),r(70),a(),i(71,"p",35),r(72),a()()(),i(73,"p",41),r(74),a()(),i(75,"section",42)(76,"h2",23),r(77),a(),i(78,"div",43)(79,"div",44)(80,"div",45)(81,"h3",46),r(82),a(),i(83,"p",47),r(84),a(),i(85,"p",48),r(86),a()(),i(87,"div",49)(88,"div",50)(89,"div",51)(90,"span",52),r(91),a(),h(92,he,2,1,"span",53),h(93,ge,1,0,"span",54),a()()()(),i(94,"div",44)(95,"div",45)(96,"h3",46),r(97),a(),i(98,"p",47),r(99),a()(),i(100,"div",49)(101,"div",55)(102,"div",56)(103,"div",57)(104,"div",58),f(),i(105,"svg",59),c(106,"rect",60)(107,"rect",61)(108,"rect",62),a()(),h(109,xe,2,0,"span",63)(110,fe,2,0,"span",63),a(),C(),i(111,"div",64)(112,"span",65),r(113,"/"),a(),i(114,"span",66),r(115),a()(),i(116,"div",67),h(117,ue,3,0,"span",63)(118,ve,3,0,"span",63),a()(),i(119,"div",68)(120,"div",69)(121,"div",58),f(),i(122,"svg",59),c(123,"rect",60)(124,"rect",61)(125,"rect",62),a()(),h(126,ye,2,0,"span",63)(127,Ce,2,0,"span",63),a(),C(),i(128,"div",70)(129,"span",65),r(130,"/"),a(),i(131,"span",66),r(132),a()(),i(133,"div",71),h(134,be,8,0)(135,_e,8,0),a()()()()(),i(136,"div",44)(137,"div",45)(138,"h3",46),r(139),a(),i(140,"p",47),r(141),a()(),i(142,"div",49)(143,"div",72)(144,"div",73)(145,"div",74)(146,"span",75),f(),i(147,"svg",76),c(148,"rect",60)(149,"rect",61)(150,"rect",62),a()(),C(),i(151,"span",77),r(152),a()(),i(153,"div",78)(154,"span",79),r(155,"/"),a(),i(156,"span",77),r(157),a()(),i(158,"div",80)(159,"span",75),f(),i(160,"svg",76),c(161,"rect",60)(162,"rect",61)(163,"rect",62),a()(),C(),i(164,"span",77),r(165),a()(),i(166,"div",81)(167,"span",75),f(),i(168,"svg",76),c(169,"rect",60)(170,"rect",61)(171,"rect",62),a()(),C(),i(172,"span",77),r(173),a()(),i(174,"div",82)(175,"span",79),r(176,"/"),a(),i(177,"span",77),r(178),a()()(),i(179,"div",83),f(),i(180,"svg",84),c(181,"path",85),a(),C(),i(182,"span",86),r(183),a()(),i(184,"div",87)(185,"div",88)(186,"div",89),f(),i(187,"svg",90),c(188,"path",91),a(),C(),i(189,"span"),r(190),a()(),i(191,"div",92)(192,"span",93),r(193),a(),i(194,"span",94),r(195),a(),i(196,"span",95),r(197),a()()(),i(198,"div",96)(199,"div",89),f(),i(200,"svg",90),c(201,"path",97),a(),C(),i(202,"span"),r(203),a()(),i(204,"div",98)(205,"span",99),r(206),a(),i(207,"span",100),r(208),a()()()()()()()()(),i(209,"footer",101)(210,"span",102),r(211),a(),h(212,we,2,0,"a",103),i(213,"span",104),r(214),a()()),s&2&&(o(7),V(" ",e.locale()==="zh"?"\u58F0\u8F9E":"Vype"," "),o(3),O("active",e.locale()==="en"),o(4),O("active",e.locale()==="zh"),o(4),l(e.l.heroHeadline()),o(),g(e.locale()==="en"?19:20),o(3),l(e.l.heroSubtitle()),o(2),g(e.detectedOS==="macos"||e.detectedOS==="unknown"?24:-1),o(),g(e.detectedOS==="android"||e.detectedOS==="unknown"?25:-1),o(),g(e.detectedOS==="windows"?26:-1),o(),g(e.detectedOS==="ios"?27:-1),o(),g(e.detectedOS==="harmony"?28:-1),o(2),g(e.detectedOS!=="macos"&&e.detectedOS!=="unknown"?30:-1),o(),g(e.detectedOS!=="android"&&e.detectedOS!=="unknown"?31:-1),o(),g(e.detectedOS!=="windows"?32:-1),o(),g(e.detectedOS!=="ios"?33:-1),o(),g(e.detectedOS!=="harmony"?34:-1),o(2),D("locale",e.locale()),o(3),l(e.l.sectionProblem()),o(12),l(e.l.problemBlackboxTitle()),o(2),l(e.l.problemBlackboxDesc()),o(6),l(e.l.problemNoeditTitle()),o(2),l(e.l.problemNoeditDesc()),o(9),l(e.l.problemFillerTitle()),o(2),l(e.l.problemFillerDesc()),o(2),l(e.l.problemSolution()),o(3),l(e.l.sectionCore()),o(5),l(e.l.coreLivePreviewTitle()),o(2),l(e.l.coreLivePreviewDesc()),o(2),V(" ",e.l.coreAiLintingDesc()," "),o(5),l(e.asrSettled),o(),g(e.asrNewWord?92:-1),o(),g(e.asrPhase==="text"?93:-1),o(4),l(e.l.coreCommandsTitle()),o(2),l(e.l.coreCommandsDesc()),o(10),g(e.locale()==="en"?109:110),o(6),l(e.locale()==="en"?"translate to German":"\u7FFB\u8BD1\u6210\u82F1\u6587"),o(2),g(e.locale()==="en"?117:118),o(9),g(e.locale()==="en"?126:127),o(6),l(e.locale()==="en"?"format as email":"\u6574\u7406\u6210\u90AE\u4EF6\u683C\u5F0F"),o(2),g(e.locale()==="en"?134:135),o(5),l(e.l.coreHotwordsTitle()),o(2),l(e.l.coreHotwordsDesc()),o(11),l(e.locale()==="en"?'"\u2026grab a croissant and an a\xE7a\xED from Starbucks\u2026"':'"\u2026\u661F\u5DF4\u514B\u4E70\u4E2A\u62FF\u94C1\u548C\u53EF\u9882\u2026"'),o(5),l(e.locale()==="en"?"keep it casual":"\u8BED\u6C14\u8F7B\u677E\u4E00\u70B9"),o(8),l(e.locale()==="en"?'"\u2026the venue is 2.5 km away\u2026"':'"\u2026\u573A\u5730\u8DDD\u79BB\u4E24\u70B9\u4E94\u516C\u91CC\u2026"'),o(8),l(e.locale()==="en"?'"\u2026loved the Beyonc\xE9 concert last night\u2026"':'"\u2026\u6628\u665ABeyonc\xE9\u7684\u6F14\u5531\u4F1A\u592A\u68D2\u4E86\u2026"'),o(5),l(e.locale()==="en"?"use metric units":"\u4F7F\u7528\u516C\u5236\u5355\u4F4D"),o(5),l(e.locale()==="en"?"learned":"\u5DF2\u5B66\u4E60"),o(7),l(e.locale()==="en"?"Hot Words":"\u70ED\u8BCD"),o(3),l(e.locale()==="en"?"Beyonc\xE9":"\u661F\u5DF4\u514B"),o(2),l(e.locale()==="en"?"A\xE7a\xED":"\u62FF\u94C1"),o(2),l(e.locale()==="en"?"Croissant":"\u53EF\u9882"),o(6),l(e.locale()==="en"?"Preferences":"\u504F\u597D"),o(3),l(e.locale()==="en"?"Keep it casual":"\u8BED\u6C14\u8F7B\u677E\u968F\u610F"),o(2),l(e.locale()==="en"?"Metric units":"\u4F7F\u7528\u516C\u5236\u5355\u4F4D"),o(3),l(e.l.footerCopyright()),o(),g(e.isCNDomain?212:-1),o(2),l(e.l.footerTagline()))},dependencies:[K,Mn],styles:[`[_nghost-%COMP%] {
    display: block;
}




.nav[_ngcontent-%COMP%] {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    padding: 0 var(--space-xxxl, 32px);
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.nav-brand[_ngcontent-%COMP%] {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.nav-icon[_ngcontent-%COMP%] {
    flex-shrink: 0;
}

.nav-right[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 16px;
}




.locale-toggle[_ngcontent-%COMP%] {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 5px 10px;
    font-size: 13px;
    font-weight: 500;
    color: var(--text-tertiary, #a1a1aa);
    background: none;
    border: 1px solid var(--surface-border, rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;
}

.locale-toggle[_ngcontent-%COMP%]:hover {
    background: rgba(0, 0, 0, 0.04);
}

.locale-sep[_ngcontent-%COMP%] {
    color: var(--surface-border, rgba(0, 0, 0, 0.18));
    font-weight: 300;
    margin: 0 1px;
}

.locale-opt[_ngcontent-%COMP%] {
    transition: color 0.15s, font-weight 0.15s;
}

.locale-opt.active[_ngcontent-%COMP%] {
    color: var(--text-primary, #1d1d1f);
    font-weight: 600;
}




.hero[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 140px var(--space-xxxl, 32px) 48px;
}

.hero-headline[_ngcontent-%COMP%] {
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    max-width: 720px;
    margin-bottom: var(--space-md, 12px);
}

.hero-tagline[_ngcontent-%COMP%] {
    font-size: clamp(16px, 2.2vw, 22px);
    font-weight: 400;
    line-height: 1.4;
    color: var(--text-secondary, #6e6e73);
    max-width: 540px;
    margin: 0 0 var(--space-lg, 16px);
}

.struck[_ngcontent-%COMP%] {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    opacity: 0.5;
}

.hero-subtitle[_ngcontent-%COMP%] {
    font-size: clamp(14px, 1.8vw, 17px);
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-secondary, #6e6e73);
    max-width: 480px;
    margin: 0 0 var(--space-lg, 16px);
}

.hero-cta[_ngcontent-%COMP%] {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
}

.hero-download-col[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    flex: 1;
    min-width: 140px;
    max-width: 180px;
}

.hero-req[_ngcontent-%COMP%] {
    font-size: 11px;
    color: var(--text-tertiary, #a1a1aa);
    text-align: center;
}

.hero-download-disabled[_ngcontent-%COMP%] {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
}

.hero-download-btn[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 500;
    background: var(--brand-primary);
    color: var(--brand-on-primary);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, box-shadow 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    white-space: nowrap;
}

.hero-download-btn[_ngcontent-%COMP%]:hover {
    background: #0077ed;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.hero-download-secondary[_ngcontent-%COMP%] {
    background: var(--surface-primary, #fff);
    color: var(--text-primary, #1d1d1f);
    border: 1px solid var(--surface-border, rgba(0, 0, 0, 0.12));
}

.hero-download-secondary[_ngcontent-%COMP%]:hover {
    background: var(--surface-primary, #f5f5f7);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.hero-btn-icon[_ngcontent-%COMP%] {
    flex-shrink: 0;
}

.hero-version[_ngcontent-%COMP%] {
    font-size: 11px;
    font-weight: 400;
    opacity: 0.7;
}

.hero-cta-other[_ngcontent-%COMP%] {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.hero-other-link[_ngcontent-%COMP%] {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    color: var(--text-secondary, #6e6e73);
    text-decoration: none;
    transition: color 0.15s;
}

.hero-other-link[_ngcontent-%COMP%]:hover {
    color: var(--brand-primary);
}

.hero-other-disabled[_ngcontent-%COMP%] {
    opacity: 0.45;
    cursor: default;
    pointer-events: none;
}




.section-heading[_ngcontent-%COMP%] {
    font-size: clamp(24px, 4vw, 36px);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    text-align: center;
    margin: 0 0 var(--space-xxxl, 32px);
}




.showcase-section[_ngcontent-%COMP%] {
    padding: 0 var(--space-xxxl, 32px) 80px;
    max-width: 780px;
    margin: 0 auto;
}




.problem[_ngcontent-%COMP%] {
    max-width: 960px;
    margin: 0 auto;
    padding: 64px var(--space-xxxl, 32px) 48px;
    text-align: center;
}

.problem-grid[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: var(--space-xxxl, 32px);
}

.problem-card[_ngcontent-%COMP%] {
    text-align: left;
    padding: 24px;
    border-radius: 16px;
    background: linear-gradient(135deg, #faf5f5 0%, #f9f5f0 100%);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.problem-icon[_ngcontent-%COMP%] {
    color: #d4432f;
    margin-bottom: 14px;
    opacity: 0.75;
}

.problem-title[_ngcontent-%COMP%] {
    font-size: 16px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 8px;
    line-height: 1.35;
}

.problem-desc[_ngcontent-%COMP%] {
    font-size: 13px;
    color: var(--text-secondary, #6e6e73);
    line-height: 1.6;
    margin: 0;
}

.problem-solution[_ngcontent-%COMP%] {
    font-size: 17px;
    font-weight: 600;
    color: var(--brand-primary, #3b6ff0);
    margin: 0;
}

@media (max-width: 680px) {
    .problem-grid[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
    }
}




.features[_ngcontent-%COMP%] {
    max-width: 960px;
    margin: 0 auto;
    padding: 64px var(--space-xxxl, 32px);
}

.feature-list[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 56px;
}

.feature-row[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    align-items: center;
}

.feature-text[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.feature-title[_ngcontent-%COMP%] {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.3;
}

.feature-desc[_ngcontent-%COMP%] {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-secondary, #6e6e73);
    line-height: 1.6;
    margin: 0;
}




.feature-visual[_ngcontent-%COMP%] {
    border-radius: 16px;
    overflow: hidden;
}

.visual-scene[_ngcontent-%COMP%] {
    background: linear-gradient(135deg, #f8f9fc 0%, #f1f4f9 50%, #f6f4f2 100%);
    border-radius: 16px;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 200px;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.06);
}




.visual-asr-demo[_ngcontent-%COMP%] {
    padding: 32px 24px;
    gap: 0;
    background: linear-gradient(135deg, #f8f9fc 0%, #f1f4f9 50%, #f6f4f2 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
}

.asr-transcript[_ngcontent-%COMP%] {
    text-align: left;
    font-size: 15px;
    line-height: 1.6;
    color: var(--text-primary, #1d1d1f);
    min-height: 48px;
}

.asr-transcript-visible[_ngcontent-%COMP%] {
    opacity: 1;
}

.asr-settled[_ngcontent-%COMP%] {
    font-weight: 500;
}

.asr-new-word[_ngcontent-%COMP%] {
    font-weight: 500;
    animation: _ngcontent-%COMP%_asr-word-in 0.25s ease-out;
}

@keyframes _ngcontent-%COMP%_asr-word-in {
    from {
        opacity: 0;
        transform: translateY(4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.asr-cursor[_ngcontent-%COMP%] {
    display: inline-block;
    width: 1.5px;
    height: 16px;
    background: #3b6ff0;
    margin-left: 2px;
    vertical-align: text-bottom;
    animation: _ngcontent-%COMP%_asr-blink 1s step-end infinite;
}

@keyframes _ngcontent-%COMP%_asr-blink {
    50% {
        opacity: 0;
    }
}

.feature-desc-secondary[_ngcontent-%COMP%] {
    font-size: 13px;
    color: var(--text-tertiary, #a1a1aa);
}




.mock-bubble[_ngcontent-%COMP%] {
    background: #fff;
    border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 14px;
    line-height: 1.55;
    position: relative;
}

.mock-raw[_ngcontent-%COMP%] {
    padding-left: 40px;
}

.mock-mic[_ngcontent-%COMP%] {
    position: absolute;
    left: 12px;
    top: 14px;
    color: var(--text-tertiary, #a1a1aa);
}

.mock-text[_ngcontent-%COMP%] {
    color: var(--text-primary, #09090b);
}

.mock-clean[_ngcontent-%COMP%] {
    background: rgba(255, 255, 255, 0.95);
    border-left: 3px solid #3b6ff0;
}

.mock-clean[_ngcontent-%COMP%]   .mock-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
    font-weight: 600;
}




.mock-command-chip[_ngcontent-%COMP%] {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    background: rgba(59, 111, 240, 0.08);
    border: 1px solid rgba(59, 111, 240, 0.2);
    border-radius: 8px;
    align-self: flex-start;
}

.mock-cmd-slash[_ngcontent-%COMP%] {
    font-size: 12px;
    font-weight: 700;
    color: #3b6ff0;
    font-family: "SF Mono", "Menlo", "Consolas", monospace;
}

.mock-cmd-label[_ngcontent-%COMP%] {
    font-size: 12px;
    font-weight: 500;
    color: #3b6ff0;
    font-family: "SF Mono", "Menlo", "Consolas", monospace;
}




.visual-commands[_ngcontent-%COMP%] {
    gap: 16px;
}

.mock-command-example[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mock-compact[_ngcontent-%COMP%] {
    padding: 10px 14px 10px 36px;
    font-size: 12.5px;
    line-height: 1.5;
}

.mock-compact[_ngcontent-%COMP%]   .mock-mic[_ngcontent-%COMP%] {
    left: 10px;
    top: 10px;
}

.mock-email[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 14px;
}




.cmd-step[_ngcontent-%COMP%] {
    animation: _ngcontent-%COMP%_cmd-step-in 10s ease-in-out infinite;
}

.cmd-step-delay-0[_ngcontent-%COMP%] {
    animation-delay: 0s;
}
.cmd-step-delay-1[_ngcontent-%COMP%] {
    animation-delay: 0.6s;
}
.cmd-step-delay-2[_ngcontent-%COMP%] {
    animation-delay: 1.2s;
}
.cmd-step-delay-3[_ngcontent-%COMP%] {
    animation-delay: 2.4s;
}
.cmd-step-delay-4[_ngcontent-%COMP%] {
    animation-delay: 3s;
}
.cmd-step-delay-5[_ngcontent-%COMP%] {
    animation-delay: 3.6s;
}

@keyframes _ngcontent-%COMP%_cmd-step-in {
    0% {
        opacity: 0;
        transform: translateY(6px);
    }
    8% {
        opacity: 1;
        transform: translateY(0);
    }
    80% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-3px);
    }
}




.visual-hotwords[_ngcontent-%COMP%] {
    flex-direction: column;
    gap: 8px;
    padding: 16px 18px 20px;
    background: linear-gradient(135deg, #f8f9fc 0%, #f1f4f9 50%, #f6f4f2 100%);
    align-items: center;
}




.hw-feed[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
}

.hw-feed-item[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 7px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 11px;
    line-height: 1.4;
    color: #71717a;
    font-style: italic;
}

.hw-feed-cmd[_ngcontent-%COMP%] {
    font-style: normal;
    color: #3b6ff0;
    background: rgba(59, 111, 240, 0.04);
    border-color: rgba(59, 111, 240, 0.1);
}

.hw-feed-icon[_ngcontent-%COMP%] {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hw-feed-mic[_ngcontent-%COMP%] {
    color: #94a3b8;
}

.hw-feed-slash[_ngcontent-%COMP%] {
    font-weight: 700;
    font-size: 12px;
    font-style: normal;
    color: #3b6ff0;
}

.hw-feed-text[_ngcontent-%COMP%] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.hw-feed-anim[_ngcontent-%COMP%] {
    animation: _ngcontent-%COMP%_hw-feed-in 8s ease-in-out infinite;
}

.hw-feed-delay-0[_ngcontent-%COMP%] {
    animation-delay: 0s;
}
.hw-feed-delay-1[_ngcontent-%COMP%] {
    animation-delay: 0.3s;
}
.hw-feed-delay-2[_ngcontent-%COMP%] {
    animation-delay: 0.6s;
}
.hw-feed-delay-3[_ngcontent-%COMP%] {
    animation-delay: 0.9s;
}
.hw-feed-delay-4[_ngcontent-%COMP%] {
    animation-delay: 1.2s;
}

@keyframes _ngcontent-%COMP%_hw-feed-in {
    0% {
        opacity: 0;
        transform: translateY(4px);
    }
    10% {
        opacity: 1;
        transform: translateY(0);
    }
    85% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-2px);
    }
}




.hw-learn-arrow[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #94a3b8;
    animation: _ngcontent-%COMP%_hw-arrow-bounce 8s ease-in-out infinite;
    animation-delay: 1.5s;
}

.hw-learn-label[_ngcontent-%COMP%] {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #94a3b8;
}

@keyframes _ngcontent-%COMP%_hw-arrow-bounce {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(3px);
    }
}




.hw-cards-row[_ngcontent-%COMP%] {
    display: flex;
    gap: 8px;
    width: 100%;
}

.hotwords-card[_ngcontent-%COMP%] {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    padding: 10px 12px;
    flex: 1;
    box-sizing: border-box;
}

.hw-card-appear[_ngcontent-%COMP%] {
    animation: _ngcontent-%COMP%_hw-card-fade-in 8s ease-in-out infinite;
}

.hw-card-delay-0[_ngcontent-%COMP%] {
    animation-delay: 1.8s;
}
.hw-card-delay-1[_ngcontent-%COMP%] {
    animation-delay: 2.1s;
}

@keyframes _ngcontent-%COMP%_hw-card-fade-in {
    0% {
        opacity: 0.4;
        transform: translateY(4px);
    }
    15% {
        opacity: 1;
        transform: translateY(0);
    }
    85% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0.4;
        transform: translateY(4px);
    }
}

.hotwords-header[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 8px;
}

.hotwords-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    color: #3b6ff0;
}

.hotwords-tags[_ngcontent-%COMP%] {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.hotword-tag[_ngcontent-%COMP%] {
    display: inline-block;
    padding: 3px 8px;
    font-size: 11px;
    font-weight: 500;
    background: rgba(59, 111, 240, 0.08);
    color: #3b6ff0;
    border-radius: 12px;
}

.hw-tag-appear[_ngcontent-%COMP%] {
    animation: _ngcontent-%COMP%_hw-tag-pop 8s ease-in-out infinite;
}

.hw-tag-delay-0[_ngcontent-%COMP%] {
    animation-delay: 2s;
}
.hw-tag-delay-1[_ngcontent-%COMP%] {
    animation-delay: 2.3s;
}
.hw-tag-delay-2[_ngcontent-%COMP%] {
    animation-delay: 2.6s;
}

@keyframes _ngcontent-%COMP%_hw-tag-pop {
    0% {
        opacity: 0;
        transform: scale(0.85);
    }
    12% {
        opacity: 1;
        transform: scale(1.05);
    }
    18% {
        transform: scale(1);
    }
    82% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.85);
    }
}

.hotwords-prefs[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.pref-item[_ngcontent-%COMP%] {
    font-size: 11px;
    color: #52525b;
    border-left: 2px solid rgba(59, 111, 240, 0.25);
    padding-left: 7px;
}




.footer[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px var(--space-xxxl, 32px);
    border-top: 1px solid var(--surface-border, rgba(0, 0, 0, 0.08));
}

.footer-copyright[_ngcontent-%COMP%] {
    font-size: 13px;
    color: var(--text-tertiary, #aaa);
}

.footer-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 12px;
}

.footer-link[_ngcontent-%COMP%] {
    font-size: 13px;
    color: var(--text-secondary, #6e6e73);
    text-decoration: none;
    transition: color 0.15s;
}

.footer-link[_ngcontent-%COMP%]:hover {
    color: var(--brand-primary);
}

.footer-icp[_ngcontent-%COMP%] {
    font-size: 12px;
    color: var(--text-tertiary, #aaa);
    text-decoration: none;
    transition: color 0.15s;
}

.footer-icp[_ngcontent-%COMP%]:hover {
    color: var(--text-secondary, #6e6e73);
}

.footer-tagline[_ngcontent-%COMP%] {
    font-size: 13px;
    color: var(--text-secondary, #6e6e73);
}




@media (max-width: 680px) {
    .feature-row[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .hero-cta[_ngcontent-%COMP%] {
        flex-direction: column;
        align-items: center;
    }
}`]})}}return t})();export{Je as HomeComponent};
