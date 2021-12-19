(this.webpackJsonpdrumly=this.webpackJsonpdrumly||[]).push([[0],{22:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(11),s=a.n(n),i=(a(22),a(2)),o="CHANGE_TEMPO",u="SELECT_TRACK",l="PLAY_TOGGLE",d="LOAD_TRACK",m="UPDATE_TRACK",p="CHANGE_BARS_NUMBER",b="LOAD_DRUMPADS",f="CHANGE_DRUMSET",j=function(e){return{type:"UPDATE_TRACK",payload:{updatedTrack:e}}},h=a(0),O={changeTempo:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return t="+"===a?e+1:"-"===a?e-1:Number(e),{type:o,payload:{updatedValue:t}}}},k=Object(i.b)((function(e){return{tempo:e.state.tempo}}),O)((function(e){var t=function(t){e.tempo>=170||e.tempo<=40||e.changeTempo(e.tempo,t)};return Object(h.jsxs)("div",{className:"input tempo-input",children:[Object(h.jsx)("p",{children:"TEMPO"}),Object(h.jsxs)("div",{class:"tempo tempo-info",children:[Object(h.jsx)("span",{className:"change-btn",onClick:function(){return t("-")},children:"-"}),Object(h.jsxs)("span",{class:"tempo-value",children:[" ",e.tempo," bpm"]}),Object(h.jsx)("span",{className:"change-btn",onClick:function(){return t("+")},children:"+"})]}),Object(h.jsx)("div",{class:"slider-wrapper",children:Object(h.jsx)("input",{type:"range",min:"40",value:e.tempo,max:"170",step:"1",id:"tempo-slider",onChange:function(t){return function(t){e.changeTempo(t.target.value)}(t)}})})]})})),v=a(5),x={trackSelect:function(e){return{type:"SELECT_TRACK",payload:{index:e}}}},g=Object(i.b)((function(e){return{tracks:e.state.tracks,trackIndex:e.state.trackIndex}}),x)((function(e){var t=Object(r.useRef)(null),a=Object(r.useState)([]),c=Object(v.a)(a,2),n=c[0],s=c[1];return Object(r.useEffect)((function(){t.current.childNodes[e.trackIndex]&&t.current.childNodes[e.trackIndex].classList.add("active"),t.current.childNodes.forEach((function(t,a){a!==e.trackIndex&&t.classList.remove("active")}))}),[e.trackIndex]),Object(r.useEffect)((function(){s((function(){return e.tracks.map((function(t,a){return Object(h.jsx)("li",{className:"list-element track ".concat(0===a?"active":""),onClick:function(){return e.trackSelect(a)},children:Object(h.jsx)("div",{className:"element-wrapper",children:Object(h.jsx)("p",{children:t.trackName})})},t.trackName)}))})),e.trackSelect(0)}),[]),Object(h.jsxs)("div",{className:"input beat-select-section",children:["Select track",Object(h.jsx)("div",{className:"list-wrapper",children:Object(h.jsx)("ul",{className:"tracks-list",ref:t,children:n})})]})})),y=Object(i.b)((function(e){return{tracks:e.state.tracks,trackIndex:e.state.trackIndex}}))((function(e){var t=e.tracks,a=e.trackIndex;return Object(h.jsxs)("div",{className:"input bars-wrapper",children:[Object(h.jsx)("p",{className:"bars-label",children:"TRACK INFO"}),Object(h.jsx)("span",{className:"bars-info",children:Object(h.jsx)("span",{class:"track-name",children:t[a].trackName})}),Object(h.jsxs)("span",{className:"bars-info",children:["time: ",Object(h.jsx)("span",{class:"info-big",children:t[a].time})]}),Object(h.jsxs)("span",{className:"bars-info",children:[Object(h.jsx)("span",{class:"info-big",children:t[a].measure})," notes"]})]})})),N={changeDrumset:function(e){return{type:"CHANGE_DRUMSET",payload:{drumset:e}}}},w=Object(i.b)((function(e){return{drumset:e.state.drumset}}),N)((function(e){return Object(h.jsxs)("div",{className:"input drumset-input",children:["Drumset:",Object(h.jsxs)("select",{class:"drumset-select",onChange:function(t){e.changeDrumset(t.target.value)},children:[Object(h.jsx)("option",{class:"drumset-option",value:"acoustic-1",children:"Acoustic 1"}),Object(h.jsx)("option",{class:"drumset-option",value:"acoustic-2",children:"Acoustic 2"}),Object(h.jsx)("option",{class:"drumset-option",value:"electro-1",children:"Electro"})]})]})})),T={play:function(){return{type:"PLAY_TOGGLE",payload:{}}},clear:function(){return{type:"CLEAR",payload:{}}}},E=Object(i.b)((function(e){return{isPlaying:e.state.isPlaying}}),T)((function(e){return Object(h.jsxs)("div",{className:"input player-controller-input",children:["Player Controller",Object(h.jsx)("button",{onClick:function(){return e.play()},className:"controller-btn btn-play ".concat(e.isPlaying?"playing":null),children:e.isPlaying?"PAUSE":"PLAY"})]})})),C=function(){return Object(h.jsxs)("div",{className:"container menu-container",children:[Object(h.jsx)(E,{}),Object(h.jsx)(k,{}),Object(h.jsx)(y,{}),Object(h.jsx)(w,{}),Object(h.jsx)(g,{})]})},A={loadDrumPads:function(e){return{type:"LOAD_DRUMPADS",payload:{drumpads:e}}}},P=Object(i.b)((function(e){return{drumset:e.state.drumset}}),A)((function(e){var t=Object(r.useRef)(null),a=function(t){new Audio("/assets/".concat(e.drumset,"/").concat(t,".mp3")).play()};return Object(r.useEffect)((function(){var a=Array.prototype.slice.call(t.current.childNodes);e.loadDrumPads(a.reverse())}),[]),Object(h.jsx)("div",{className:"container drumset-container",children:Object(h.jsxs)("div",{className:"drumset",ref:t,children:[Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("kick")},src:"./assets/imgs/kick-pad.svg",className:"drumset-pad drumset-pad--kick"}),Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("floor")},src:"./assets/imgs/floor-tom-pad.svg",className:"drumset-pad drumset-pad--floor-tom"}),Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("tom2")},src:"./assets/imgs/tom-2-pad.svg",className:"drumset-pad drumset-pad--tom-2"}),Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("tom1")},src:"./assets/imgs/tom-1-pad.svg",className:"drumset-pad drumset-pad--tom-1"}),Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("snare")},src:"./assets/imgs/snare-pad.svg",className:"drumset-pad drumset-pad--snare"}),Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("hihat")},src:"./assets/imgs/hihat-pad.svg",className:"drumset-pad drumset-pad--hihat"}),Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("ride")},src:"./assets/imgs/ride-pad.svg",className:"drumset-pad drumset-pad--ride"}),Object(h.jsx)("img",{alt:"drum pad",onClick:function(){return a("crash")},src:"./assets/imgs/crash-pad.svg",className:"drumset-pad drumset-pad--crash"})]})})})),B=a(10),I=a.n(B),L=a(15);function R(e){var t=e.bar,a=e.navToBar,r=e.activeBarIndex,c=e.barIndex,n=e.trackLength;return Object(h.jsx)("li",{className:"bar-box ".concat(r===c?"active":""),id:t.id,onMouseDown:function(e){e.target.classList.contains("active")&&e.target.classList.remove("active"),a(t.order)},style:{width:100/n+"%"},children:Object(h.jsx)("p",{className:"number",draggable:!1,children:c+1})})}var S=a(8),D=a.n(S);var M={handleBarMod:function(){},updateTrack:j},_=Object(i.b)((function(e){return{customableTrack:e.state.customableTrack}}),M)((function(e){var t=e.innerRef,a=e.orderedTrack,r=e.navToBar,c=e.listRef,n=e.updateTrack,s=e.customableTrack,i=e.activeBarIndex,o=function(e){var t=D.a.cloneDeep(s);switch(e){case"multiply":if(t.length>=8)return;t.splice(i+1,0,{id:Math.floor(1e3*Math.random()),value:D.a.cloneDeep(t[i].value)});break;case"remove":if(t.length<=1)return;t.splice(i,1);break;case"clear":t[i].value=t[i].value.map((function(e){return e.map((function(){return 0}))}))}n(t)};return Object(h.jsxs)("div",{className:"change-order-section",ref:t,children:[Object(h.jsx)("button",{className:"arrow arrow-prev",onClick:function(){return r("-")},children:"\u2039"}),Object(h.jsxs)("div",{className:"wrapper control-wrapper",children:[Object(h.jsxs)("div",{className:"bar-control-section",children:[Object(h.jsx)("span",{className:"action-label",children:"Bar actions:"}),Object(h.jsxs)("span",{className:"action-btn btn-rm ".concat(s.length<=1?"disabled":null),onClick:function(){o("remove")},children:["remove ",Object(h.jsx)("i",{className:"fas fa-trash-alt"})]}),Object(h.jsxs)("span",{className:"action-btn btn-add ".concat(s.length>=8?"disabled":null),onClick:function(){o("multiply")},children:["copy ",Object(h.jsx)("i",{className:"fas fa-plus-square"})]}),Object(h.jsxs)("span",{className:"action-btn btn-clear",onClick:function(){o("clear")},children:["clear ",Object(h.jsx)("i",{className:"fas fa-eraser"})]})]}),Object(h.jsx)("ul",{className:"bars-order-list",ref:c,children:a.sort((function(e,t){return e.order-t.order})).map((function(e,t){return Object(h.jsx)(R,{bar:e,navToBar:r,activeBarIndex:i,barIndex:t,trackLength:s.length},t)}))})]}),Object(h.jsx)("button",{className:"arrow arrow-next",onClick:function(){return r("+")},children:"\u203a"})]})})),z=a(4),G=a(9);var K={updateTrack:j},U=Object(i.b)((function(e){return{customableTrack:e.state.customableTrack}}),K)((function(e){var t=e.value,a=e.indicator,r=e.updateTrack,c=e.customableTrack,n="";switch(t){case 1:n="ghost-note";break;case 2:n="regular";break;case 3:n="accent"}return Object(h.jsx)("div",{className:"note ".concat(n),onClick:function(e){return function(e){var t=e.target.id.split("-"),a=t[0],n=t[1],s=t[2],i=D.a.cloneDeep(c),o=i[a],u=Object(G.a)(o.value[n]),l=u[s]>=3?0:u[s]+1;u.splice(s,1,l),o.value.splice(n,1,u),i.splice(a,1,o),r(i)}(e)},id:a},a)}));function q(e){var t=e.bar,a=e.barIndex;return Object(h.jsxs)("div",{className:"bar bar-".concat(a),children:[Object(h.jsx)("p",{className:"bar-index",children:a+1}),t.value.map((function(e,t){return Object(h.jsx)("div",{className:"track track-".concat(t),children:e.map((function(e,r){return Object(h.jsx)(U,{value:e,indicator:"".concat(a,"-").concat(t,"-").concat(r)})}))},"".concat(a,"-").concat(t))}))]},a)}var F={loadCustomableTrack:function(e,t){var a=[];return e.track.forEach((function(e){a.push({value:e,id:Math.floor(1e3*Math.random())})})),{type:"LOAD_TRACK",payload:{updatedTrack:a}}},updateTrack:j},H=Object(i.b)((function(e){return{customableTrack:e.state.customableTrack,tracks:e.state.tracks,trackIndex:e.state.trackIndex,beatMeasures:e.state.beatMeasures,numOfBars:e.state.numOfBars,isPlaying:e.state.isPlaying,tempo:e.state.tempo,drumPads:e.state.drumPads,drumset:e.state.drumset,audioContext:e.state.audioContext}}),F)((function(e){var t,a=["crash","ride","hihat","snare","tom1","tom2","floor","kick"],c=e.tracks[e.trackIndex].track[0][0].length,n=function(e){return e.map((function(e,t){return{id:"".concat(e.id),order:t,value:e.value,isActive:t===u}}))},s=0,i=Object(r.useState)(0),o=Object(v.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(n(e.customableTrack)),m=Object(v.a)(d,2),p=m[0],b=m[1],f=Object(r.useState)(null),j=Object(v.a)(f,2),O=j[0],k=j[1],x=Object(r.useState)(80),g=Object(v.a)(x,2),y=g[0],N=g[1],w=Object(r.useState)(null),T=Object(v.a)(w,2),E=T[0],C=T[1],A=Object(r.useState)(e.beatMeasures[0]),P=Object(v.a)(A,2),B=P[0],R=P[1],S=Object(r.useRef)(null),D=Object(r.useState)(!1),M=Object(v.a)(D,2),G=M[0],K=M[1],U=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}(),F=Object(r.useState)(null),H=Object(v.a)(F,2),V=H[0],Y=H[1],J=Object(r.useRef)(null),X=Object(r.useRef)(null),W=Object(r.useRef)(null),$=Object(r.useRef)(null);Object(r.useEffect)((function(){ee(p,"effect"),$.current.childNodes.forEach((function(e,t){z.a.set(e,{x:"".concat(100*t,"%")})}))}),[p]),Object(r.useEffect)((function(){Q()}),[E]);var Q=function(){var t=u>0?u-1:p.length-1,a=u<p.length-1?u+1:0,r=X.current.childNodes;if(0!==r.length){var c=e.isPlaying?0:.5;1===r.length?z.a.to(r[0],{x:"0%",opacity:1,duration:c}):2===r.length?0===u?(z.a.to(r[0],{x:"0%",opacity:1,duration:c,pointerEvents:"all"}),z.a.to(r[1],{x:"100%",opacity:0,duration:c,pointerEvents:"none"})):(z.a.to(r[0],{x:"-100%",opacity:0,duration:c,pointerEvents:"none"}),z.a.to(r[1],{x:"0%",opacity:1,duration:c,pointerEvents:"all"})):r.forEach((function(e,r){switch(r){case t:z.a.to(e,{x:"-100%",opacity:0,duration:c});break;case u:z.a.to(e,{x:"0%",opacity:1,duration:c,pointerEvents:"all"});break;case a:z.a.to(e,{x:"100%",opacity:0,duration:c});break;default:z.a.to(e,{x:"0%",opacity:0,duration:c,pointerEvents:"none"})}}))}},Z=function(e){return!!/^-?\d+$/.test(e)},ee=function(e){var t=e.sort((function(e,t){return e.order-t.order})).map((function(e,t){return Object(h.jsx)(q,{bar:e,barIndex:t})}));C(t)},te=function(){var t=Object(L.a)(I.a.mark((function t(r,c,n){var s,i,o,u,l,d,m;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s="./assets/".concat(e.drumset,"/").concat(a[n],".mp3"),i=1===r?.05:2===r?.5:1.5,o=e.audioContext.createBufferSource(),u=e.audioContext.createGain(),t.next=6,fetch(s).then((function(e){return e.arrayBuffer()})).then((function(t){return e.audioContext.decodeAudioData(t)}));case 6:if(l=t.sent,o.buffer=l,u.gain.setValueAtTime(i,e.audioContext.currentTime),o.connect(u).connect(e.audioContext.destination),U){t.next=26;break}d=e.drumPads[n],m=z.a.timeline({autoAlpha:0,ease:"ease"}),t.t0=r,t.next=1===t.t0?16:2===t.t0?19:3===t.t0?22:25;break;case 16:return m.to(d,.1,{opacity:.6,scale:1.02}),m.to(d,.1,{opacity:.5,scale:1}),t.abrupt("break",26);case 19:return m.to(d,.1,{opacity:.8,scale:1.05}),m.to(d,.1,{opacity:.5,scale:1}),t.abrupt("break",26);case 22:return m.to(d,.1,{opacity:1,scale:1.1}),m.to(d,.1,{opacity:.5,scale:1}),t.abrupt("break",26);case 25:return t.abrupt("break",26);case 26:o.start(c);case 27:case"end":return t.stop()}}),t)})));return function(e,a,r){return t.apply(this,arguments)}}(),ae=function(){var t=Object(L.a)(I.a.mark((function t(){var a,r,n,i=arguments;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:0,n=p,s=0===s?e.audioContext.currentTime:s+y/c,"suspended"!==e.audioContext.state){t.next=7;break}return t.next=7,e.audioContext.resume();case 7:n[a].value.forEach((function(e,t){e.forEach((function(e,a){a===r&&0!==e&&te(e,s,t)}))}));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){Q()}),[u]),Object(r.useEffect)((function(){k(function(){var e=[];return e.push(Object(h.jsx)("div",{className:"bar bar--measure",children:B.count.map((function(e){return Object(h.jsx)("div",{className:"beat-measure ".concat(Z(e)?"highlight":""),children:e})}))})),e}()),b(n(e.customableTrack))}),[e.customableTrack]),Object(r.useEffect)((function(){N(60/e.tempo*4)}),[e.tempo]),Object(r.useEffect)((function(){e.loadCustomableTrack(e.tracks[e.trackIndex],e.numOfBars);var t=e.beatMeasures.find((function(t){var a=e.tracks[e.trackIndex];return t.time===a.time&&t.measure===a.measure}));R(t),l(0)}),[e.trackIndex]),Object(r.useEffect)((function(){S.current=z.a.fromTo(J.current,{x:"-100%"},{x:"0%",ease:"linear",repeat:1,paused:!0})}),[]);var re=function(a,r){var n=!(null==window.mozInnerScreenX);l(0),S.current.duration(n?1.05*y:y),S.current.play(),ae(0,a),t=setInterval((function(){var t;0===(a=a>=c-1?0:a+1)&&(Q(t=r),l(t),S.current.time(0),S.current.play()),ae(r,a),a===c-1&&(r=r>=e.numOfBars-1?0:r+1)}),1e3*y/c)};return Object(r.useEffect)((function(){ee(p,"effect")}),[p]),Object(r.useEffect)((function(){Q()}),[E]),Object(r.useEffect)((function(){if(S.current||(S.current=z.a.fromTo(J.current,{x:"-100%"},{x:"0%",ease:"linear",paused:!0})),J){e.isPlaying?re(0,0):(clearInterval(t),X.current.style.transform="unset",l(0),S.current.pause(0))}return function(){clearInterval(t)}}),[e.isPlaying]),Object(r.useEffect)((function(){Q()}),[u]),Object(r.useEffect)((function(){var t=function(e){V&&G&&(V.classList.add("dragged"),function(e){var t=e.clientX-$.current.getBoundingClientRect().x-V.getBoundingClientRect().width/2;z.a.to(V,0,{x:"".concat(t,"px")})}(e))},a=function(e){K(!0),e.target.classList.contains("bar-box")&&(Y(e.target),e.target.classList.add("dragged"))},r=function(e){K(!1),V&&(V.classList.remove("dragged"),Y(null),e.target.classList.contains("bar-box")?c(e.target,V):$.current.childNodes.forEach((function(e,t){z.a.to(e,.3,{x:"".concat(100*p[t].order,"%")})})))},c=function(t,a){var r=p.find((function(e){return e.id==a.id})),c=p.find((function(e){return e.id==t.id})),n=r.order,s=c.order;r.order=s,c.order=n,r.isActive=!1,c.isActive=!1,$.current.childNodes.forEach((function(e,t){z.a.to(e,.3,{x:"".concat(100*p[t].order,"%")})})),setTimeout((function(){var t=p.sort((function(e,t){return e.order-t.order}));l(r.order),b(t),ee(t),e.updateTrack(t)}),330)};return window.addEventListener("mousemove",t),window.addEventListener("mousedown",a),window.addEventListener("mouseup",r),function(){window.removeEventListener("mousemove",t),window.removeEventListener("mousedown",a),window.removeEventListener("mouseup",r)}}),[G,V]),Object(r.useEffect)((function(){e.numOfBars===u&&l(e.numOfBars-1)}),[e.numOfBars]),Object(h.jsxs)("div",{className:"container player-container ".concat(e.isPlaying?"playing":"paused"),children:[Object(h.jsx)(_,{listRef:$,innerRef:W,orderedTrack:p,navToBar:function(t){e.isPlaying||l("number"!==typeof t?"+"===t?u===e.numOfBars-1?0:u+1:0===u?e.numOfBars-1:u-1:t)},activeBarIndex:u}),Object(h.jsx)("div",{className:"progress-indicator",ref:J}),Object(h.jsx)("div",{className:"empty"}),Object(h.jsx)("div",{className:"beat-measure-wrapper wrapper",children:O}),Object(h.jsx)("div",{className:"tracks-labels-wrapper wrapper",children:["CR","RD","HH","SN","T-1","T-2","F-T","K"].map((function(e){return Object(h.jsx)("p",{className:"track-label",children:e})}))}),Object(h.jsx)("div",{className:"beat-wrapper wrapper ".concat(e.isPlaying?"":"smooth"),ref:X,children:E})]})})),V=a(6),Y=a(17),J=a(3),X={tempo:94,length:8,numOfBars:3,timeSignature:"4/4",drumset:"acoustic-1",drumPads:[],isPlaying:!1,audioContext:new AudioContext,tracks:[{trackName:"test",time:"4/4",measure:"8th",track:[[[2,0,0,0,0,0,0,0],[0,2,0,0,0,0,0,0],[0,0,3,0,0,0,0,0],[0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0],[0,0,0,0,0,2,0,0],[0,0,0,0,0,0,2,0],[0,0,0,0,0,0,0,3]],[[0,0,0,0,0,0,0,2],[0,0,0,0,0,0,2,0],[0,0,0,0,0,2,0,0],[0,0,0,0,2,0,0,0],[0,0,0,2,0,0,0,0],[0,0,2,0,0,0,0,0],[0,2,0,0,0,0,0,0],[2,0,0,0,0,0,0,0]]]},{trackName:"shuffle",time:"4/4",measure:"8th triplets",track:[[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,1,2,0,1,2,0,1,2,0,1],[0,0,0,2,0,0,0,0,0,2,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,2,0,0,0,0,0]]]},{trackName:"halftime shuffle",time:"4/4",measure:"8th triplets",track:[[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,1,2,0,1,2,0,1,2,0,1],[0,0,0,3,0,0,0,0,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,2,2,0,0,0,0,2]],[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,1,2,0,1,2,0,1,2,0,1],[0,0,0,0,0,0,3,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,2,0,0,0,0,0,0,0,2]]]},{trackName:"3/4 8th notes",time:"3/4",measure:"8th",track:[[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,2,0,0,2],[0,0,0,2,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[2,0,0,0,0,0]]]},{trackName:"3/4 16th notes",time:"3/4",measure:"16th",track:[[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2,2,2,2,2],[0,0,0,0,2,0,0,0,0,2,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,2,2,0,0,0]]]},{trackName:"linear beat",time:"4/4",measure:"8th",track:[[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,2,0,2,0,2,0,2],[0,0,2,0,0,0,2,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,0,0,0,2,0,0,0]]]},{trackName:"rock",time:"4/4",measure:"8th",track:[[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,2,2,2,2,2,2,2],[0,0,2,0,0,0,2,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[2,0,0,2,2,0,0,0]]]},{trackName:"linear beat v.2",time:"4/4",measure:"16th",track:[[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,2,0,0,1,2,0,2,0,0,2,0,0,2,0],[0,0,0,0,3,0,0,1,0,1,0,0,3,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0]]]},{trackName:"build up",time:"4/4",measure:"16th",track:[[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,1,0,2,0,1,0,2,0,1,0,2,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,1,1,2,0,1,1,2,0,1,1,2,0,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,1,2,1,2,2,1,2,2,1,1,1,2,1,1,1],[0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,0,0,2,0,2,2,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,1,2,1,2,2,1,2,2,1,2,2,3,3,3,3],[3,0,3,0,0,3,0,3,3,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]]},{trackName:"16th triplets",time:"4/4",measure:"16th triplets",track:[[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,3,1,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2,2,0,0,0,0,2]]]},{trackName:"16th triplets chop",time:"4/4",measure:"16th triplets",track:[[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0],[0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,3,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,3,3],[2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0,0,0,0]]]},{trackName:"3/4 8th notes triplets",time:"3/4",measure:"8th triplets",track:[[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,2,2,0,0,2,2,0,2],[0,0,0,0,2,0,0,2,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[2,0,0,2,0,0,0,0,0]]]},{trackName:"porcaro shuffle",time:"4/4",measure:"8th triplets",track:[[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,2,0,2,2,0,2,2,0,2],[0,1,0,0,1,0,3,1,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,0,0,0,2,0,0,0,2,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[2,0,2,2,0,2,2,0,2,2,0,2],[0,1,0,0,1,0,3,1,0,0,1,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,2,0,0,0,0,0,0,0,0,2]]]}],customableTrack:[],beatMeasures:[{time:"4/4",measure:"8th",count:["1","&","2","&","3","&","4","&"]},{time:"3/4",measure:"8th",count:["1","&","2","&","3","&"]},{time:"4/4",measure:"16th",count:["1","e","&","a","2","e","&","a","3","e","&","a","4","e","&","a"]},{time:"3/4",measure:"8th triplets",count:["1","trip","let","2","trip","let","3","trip","let"]},{time:"3/4",measure:"16th",count:["1","e","&","a","2","e","&","a","3","e","&","a"]},{time:"4/4",measure:"8th triplets",count:["1","trip","let","2","trip","let","3","trip","let","4","trip","let"]},{time:"4/4",measure:"16th triplets",count:["1","trip","let","&","trip","let","2","trip","let","&","trip","let","3","trip","let","&","trip","let","4","trip","let","&","trip","let"]}],trackIndex:0},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(J.a)(Object(J.a)({},e),{},{tempo:t.payload.updatedValue});case u:var a=t.payload.index;return Object(J.a)(Object(J.a)({},e),{},{trackIndex:a,numOfBars:e.tracks[a].track.length});case l:return Object(J.a)(Object(J.a)({},e),{},{isPlaying:!e.isPlaying});case d:return Object(J.a)(Object(J.a)({},e),{},{customableTrack:t.payload.updatedTrack});case m:return Object(J.a)(Object(J.a)({},e),{},{customableTrack:t.payload.updatedTrack,numOfBars:t.payload.updatedTrack.length});case p:var r=t.payload.direction;return Object(J.a)(Object(J.a)({},e),{},{numOfBars:"+"===r?e.numOfBars+1:e.numOfBars-1,customableTrack:"+"===r?[].concat(Object(G.a)(e.customableTrack),[e.tracks[e.trackIndex].track[0]]):e.customableTrack.slice(0,-1)});case b:return Object(J.a)(Object(J.a)({},e),{},{drumPads:Object(G.a)(t.payload.drumpads)});case f:return Object(J.a)(Object(J.a)({},e),{},{drumset:t.payload.drumset})}return e},$=Object(V.combineReducers)({state:W}),Q=Object(V.createStore)($,Object(Y.composeWithDevTools)());var Z=function(){return Object(h.jsx)(i.a,{store:Q,children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("div",{class:"rotate-device-info",children:Object(h.jsx)("p",{class:"rotate-txt",children:"Rotate device!"})}),Object(h.jsx)(C,{}),Object(h.jsx)(H,{}),Object(h.jsx)(P,{})]})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Z,{})}),document.getElementById("root")),ee()}},[[33,1,2]]]);
//# sourceMappingURL=main.bba79bb1.chunk.js.map