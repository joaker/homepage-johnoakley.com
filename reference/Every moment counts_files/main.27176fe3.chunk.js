(this["webpackJsonpjohnoakley.com"]=this["webpackJsonpjohnoakley.com"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.06e73328.svg"},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(4),l=n.n(r),a=(n(15),n(16),n(17),n(2)),c=n(3);const s=document.body,d=new a.a({type:a.a.Types.svg,fullscreen:!0}).appendTo(s);let u,h,m=d.height/18;let f=-1;const g="Every\nMoment\nCounts".split("\n");let p=d.makeGroup(),k=(d.makeGroup(),d.makeGroup()),v=d.makeGroup(),y=d.makeGroup(),b=U(d,m,8),E=U(d,.5*m,4),w=U(d,.2*m,2);const S=function(e){let t=e.makeGroup();const n=e.height/6,o=e.makeCircle(0,0,n);return o.noStroke(),o.fill="black",t.add(o),u=e.makeCircle(0,0,n),u.stroke="#66b3ff",u.linewidth=6,u.fill="black",t.core=u,t.add(u),B(e),t}(d);S.translation.set(d.width/2,d.height/2),b.noStroke(),b.fill="rgb(255, 128, 0)",S.add(b),E.noStroke(),E.fill="white",S.add(E),w.noStroke(),w.fill="#66b3ff",S.add(w),p.add(S);const I=function(e){let t=e.makeGroup();const n=e.height/4;return h=e.makeCircle(0,0,n),h.stroke="rgba(255, 255, 255, 0)",h.linewidth=2,h.fill="rgba(255, 255, 255, 0)",t.interactiveCore=h,t.add(h),t}(d);function M(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M();const{hour:t,minute:n,second:o,millisecond:i}=e,r=t%12+n/60+o/60/60+i/60/60/1e3;return r}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M();const t=C(e);return t/12}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M();const{minute:t,second:n,millisecond:o}=e,i=t/60+n/60/60+o/60/60/1e3;return i}function F(){d.renderer.domElement.style.cursor="pointer",f=0,function(e){x();const t=.22*Math.min(e.width/4.5,e.height/4.5);A(e,g[0],t,-t),A(e,g[1],t,0),A(e,g[2],t,t);const n=setInterval(()=>{let e=!1;[...y.children].forEach(t=>{t.opacity+=.02,t.style.opacity>=.33&&(e=!0)}),e&&(clearInterval(n),y.forEach(e=>e.opacity=0))},100);k.add(y)}(d)}function L(){f=-1,d.renderer.domElement.style.cursor="default",clearInterval(null),x()}function T(){console.log("eclipse clicked"),window.open("mailto:john@johnoakley.com?Inquiries for JohnOakley=subject")}function x(){y&&([...y.children].forEach(e=>y.remove(e)),k.remove(y))}function A(e,t,n,o){const i={size:n,weight:"bold",family:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fill:"#66b3ff",opacity:0,"pointer-events":"none"},r=new a.a.Text(t,0,0,i);r.translation.set(e.width/2,e.height/2+o),y.add(r)}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M();const{second:t,millisecond:n}=e,o=t/60+n/60/1e3;return o}function B(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M();const n=e.height/6;if(!b||!E)return;const o=e.height/25,i=n+o,r=j(t);J(b,r,i);const l=G(t),a=e.height/35,c=n+a;J(E,l,c);const s=P(t),d=e.height/100,u=n+d;J(w,s,u)}function J(e,t,n){const o=n*Math.sin(t*c.a),i=-n*Math.cos(t*c.a);e.translation.set(o,i);const r=Math.atan2(-i,-o)-Math.PI/2;e.rotation=r}function U(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;var o=d.makePath(-t/n,0,t/n,0,0,t);return o}I.translation.set(d.width/2,d.height/2),v.add(I),d.update(),d.renderer.domElement.style.cursor="pointer",I._renderer.elem.addEventListener("mouseover",F),I._renderer.elem.addEventListener("mouseout",L),I._renderer.elem.addEventListener("click",T),d.bind("resize",(function(){S.translation.x=d.width/2,S.translation.y=d.height/2})).bind("update",(function(e){const t=M(),{second:n,millisecond:o}=t;if(u){const e=3e3,t=o+n%3*1e3,i=t/e,r=1-i,l=`rgba(100, 100, 100, ${t<e/2?i:r})`;u.fill=l}h&&(h.fill="rgba(255, 255, 255, 0)"),B(d,t)})).play();var _=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"}))};var z=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then(t=>{let{getCLS:n,getFID:o,getFCP:i,getLCP:r,getTTFB:l}=t;n(e),o(e),i(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(_,null))),z()},6:function(e,t,n){e.exports=n(18)}},[[6,1,2]]]);
//# sourceMappingURL=main.27176fe3.chunk.js.map