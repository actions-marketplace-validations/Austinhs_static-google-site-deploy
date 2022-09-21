(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[970],{8970:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),a=t(7294),s=t(6483),o=t(2816),i=t.n(o);function l(e){var n=e.width,t=void 0===n?500:n,o=e.height,l=void 0===o?500:o,c=(0,a.useState)(0),u=c[0],d=c[1],h="The stories of the Blind Agarthian\u2019s origin were few and far between,\n\t\t\treplete with speculation and fantasy. Still, his name was known\n\t\t\tthroughout the world: Kupala.Kupala\u2019s mythical origin was rumored to\n\t\t\thave taken place deep in the belly of the underworld. His home, a\n\t\t\tdowntrodden hut, remained within the shrouded darkness and its twisting tunnels.\n\t\t\tThe young boy lived there alone. He would become both the leader and savior of\n\t\t\tAgartha.Lacking a memory of his early years, this child knew only obscurity and\n\t\t\tisolation. Born with defective eyes and an inability to speak, Agarthian society\n\t\t\tregarded him as a reject and lost cause. He was forgotten. After living beneath\n\t\t\tthe Earth\u2019s crust as a lone outcast, he sought answers. This curiosity brought\n\t\t\thim to the surface world, his only guidance a tugging feeling deep within his soul.\n\t\t\tUpon finally finding his way above ground, he wandered lush landscapes for six days\n\t\t\tunder heavy rainfall. On the morning of the seventh day, he stood atop a grassy\n\t\t\thilltop as the storm finally stalled. A sunbeam tore through the waning clouds.\n\t\t\tAs the sunlight touched his skin for the first time, Kupala\u2019s epiphany came upon him.\n\t\t\tA long exhale brought about a feeling he had never felt before.",p=[{name:"kupala",description:h},{name:"argarthian",description:h},{name:"songhai",description:h},{name:"atlantean",description:h},{name:"nubians",description:h},{name:"celts",description:h},{name:"egyptians",description:h},{name:"europeans",description:h},{name:"mongols",description:h}];return(0,r.jsx)(s.Z,{className:i().slider,activeIndex:u,onSelect:function(e){return d(e)},indicators:!1,interval:null,nextIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"".concat(i().nextIcon," carousel-control-next-icon")}),prevIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"".concat(i().prevIcon," carousel-control-prev-icon")}),children:p.map((function(e){var n="".concat(e.name," image");return(0,r.jsx)(s.Z.Item,{className:i().sliderItem,children:(0,r.jsxs)("div",{className:i().sliderItemContainer,children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["MONARCH :",e.name.toUpperCase()]}),(0,r.jsx)("p",{children:e.description})]}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"monarchs/kupala.jpg",style:{width:t,height:l},alt:n})})]})})}))})}var c=t(2971),u=t.n(c),d=t(2979);function h(){var e=(0,a.useState)("genesis"),n=e[0],t=e[1];return(0,r.jsxs)("div",{className:u().container,children:[(0,r.jsxs)("div",{className:u().sliderContainer,children:[(0,r.jsx)("div",{className:u().bloodlines,children:(0,r.jsx)("h1",{children:n.toUpperCase()})}),(0,r.jsx)("div",{className:u().monarchs,children:(0,r.jsx)(l,{})})]}),(0,r.jsx)("div",{className:u().bloodlineIcons,children:d.Vz.map((function(e,n){return(0,r.jsxs)("div",{tabIndex:n,role:"button",onClick:function(){return t(e)},children:[(0,r.jsx)("img",{src:"symbols/genesis.png",alt:"".concat(e," symbol"),style:{width:100,height:100}}),(0,r.jsx)("h3",{children:e.toUpperCase()})]})}))})]})}},2816:function(e){e.exports={sliderItemContainer:"DesktopMonarchSlider_sliderItemContainer__w9JCb",nextIcon:"DesktopMonarchSlider_nextIcon__pOWtf",prevIcon:"DesktopMonarchSlider_prevIcon__4SrjQ"}},2971:function(e){e.exports={container:"DesktopSliderController_container__awcqa",sliderContainer:"DesktopSliderController_sliderContainer__gnTk5",bloodlines:"DesktopSliderController_bloodlines__xEPr_",monarchs:"DesktopSliderController_monarchs__lFn8S",bloodlineIcons:"DesktopSliderController_bloodlineIcons__vNzeM"}},6483:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var r=t(8146),a=t(7294);var s=function(e,n){var t=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},o=t(2029),i=t(6454),l=t(6852),c=Math.pow(2,31)-1;function u(e,n,t){var r=t-Date.now();e.current=r<=c?setTimeout(n,r):setTimeout((function(){return u(e,n,t)}),c)}function d(){var e=(0,i.Z)(),n=(0,a.useRef)();return(0,l.Z)((function(){return clearTimeout(n.current)})),(0,a.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(t(),a<=c?n.current=setTimeout(r,a):u(n,r,Date.now()+a))},clear:t}}),[])}var h=t(3551),p=t(4184),m=t.n(p),v=t(5446),f=(0,t(6611).Z)("carousel-caption"),x=t(6792),g=t(5893);const b=a.forwardRef((({as:e="div",bsPrefix:n,className:t,...r},a)=>{const s=m()(t,(0,x.vE)(n,"carousel-item"));return(0,g.jsx)(e,{ref:a,...r,className:s})}));b.displayName="CarouselItem";var y=b;function w(e,n){let t=0;return a.Children.map(e,(e=>a.isValidElement(e)?n(e,t++):e))}var C=t(2646),k=t(4509),N=t(2785);const j={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,g.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,g.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};const I=a.forwardRef(((e,n)=>{const{as:t="div",bsPrefix:i,slide:l,fade:c,controls:u,indicators:p,indicatorLabels:f,activeIndex:b,onSelect:y,onSlide:j,onSlid:I,interval:S,keyboard:_,onKeyDown:E,pause:M,onMouseOver:T,onMouseOut:D,wrap:Z,touch:A,onTouchStart:$,onTouchMove:R,onTouchEnd:L,prevIcon:O,prevLabel:H,nextIcon:K,nextLabel:P,variant:U,className:V,children:z,...B}=(0,v.Ch)(e,{activeIndex:"onSelect"}),F=(0,x.vE)(i,"carousel"),X=(0,x.SC)(),q=(0,a.useRef)(null),[J,Q]=(0,a.useState)("next"),[W,G]=(0,a.useState)(!1),[Y,ee]=(0,a.useState)(!1),[ne,te]=(0,a.useState)(b||0);(0,a.useEffect)((()=>{Y||b===ne||(q.current?Q(q.current):Q((b||0)>ne?"next":"prev"),l&&ee(!0),te(b||0))}),[b,Y,ne,l]),(0,a.useEffect)((()=>{q.current&&(q.current=null)}));let re,ae=0;!function(e,n){let t=0;a.Children.forEach(e,(e=>{a.isValidElement(e)&&n(e,t++)}))}(z,((e,n)=>{++ae,n===b&&(re=e.props.interval)}));const se=(0,o.Z)(re),oe=(0,a.useCallback)((e=>{if(Y)return;let n=ne-1;if(n<0){if(!Z)return;n=ae-1}q.current="prev",null==y||y(n,e)}),[Y,ne,y,Z,ae]),ie=(0,r.Z)((e=>{if(Y)return;let n=ne+1;if(n>=ae){if(!Z)return;n=0}q.current="next",null==y||y(n,e)})),le=(0,a.useRef)();(0,a.useImperativeHandle)(n,(()=>({element:le.current,prev:oe,next:ie})));const ce=(0,r.Z)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(le.current)&&(X?oe():ie())})),ue="next"===J?"start":"end";s((()=>{l||(null==j||j(ne,ue),null==I||I(ne,ue))}),[ne]);const de=`${F}-item-${J}`,he=`${F}-item-${ue}`,pe=(0,a.useCallback)((e=>{(0,k.Z)(e),null==j||j(ne,ue)}),[j,ne,ue]),me=(0,a.useCallback)((()=>{ee(!1),null==I||I(ne,ue)}),[I,ne,ue]),ve=(0,a.useCallback)((e=>{if(_&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(X?ie(e):oe(e));case"ArrowRight":return e.preventDefault(),void(X?oe(e):ie(e))}null==E||E(e)}),[_,E,oe,ie,X]),fe=(0,a.useCallback)((e=>{"hover"===M&&G(!0),null==T||T(e)}),[M,T]),xe=(0,a.useCallback)((e=>{G(!1),null==D||D(e)}),[D]),ge=(0,a.useRef)(0),be=(0,a.useRef)(0),ye=d(),we=(0,a.useCallback)((e=>{ge.current=e.touches[0].clientX,be.current=0,"hover"===M&&G(!0),null==$||$(e)}),[M,$]),Ce=(0,a.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-ge.current,null==R||R(e)}),[R]),ke=(0,a.useCallback)((e=>{if(A){const n=be.current;Math.abs(n)>40&&(n>0?oe(e):ie(e))}"hover"===M&&ye.set((()=>{G(!1)}),S||void 0),null==L||L(e)}),[A,M,oe,ie,ye,S,L]),Ne=null!=S&&!W&&!Y,je=(0,a.useRef)();(0,a.useEffect)((()=>{var e,n;if(!Ne)return;const t=X?oe:ie;return je.current=window.setInterval(document.visibilityState?ce:t,null!=(e=null!=(n=se.current)?n:S)?e:void 0),()=>{null!==je.current&&clearInterval(je.current)}}),[Ne,oe,ie,se,S,ce,X]);const Ie=(0,a.useMemo)((()=>p&&Array.from({length:ae},((e,n)=>e=>{null==y||y(n,e)}))),[p,ae,y]);return(0,g.jsxs)(t,{ref:le,...B,onKeyDown:ve,onMouseOver:fe,onMouseOut:xe,onTouchStart:we,onTouchMove:Ce,onTouchEnd:ke,className:m()(V,F,l&&"slide",c&&`${F}-fade`,U&&`${F}-${U}`),children:[p&&(0,g.jsx)("div",{className:`${F}-indicators`,children:w(z,((e,n)=>(0,g.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=f&&f.length?f[n]:`Slide ${n+1}`,className:n===ne?"active":void 0,onClick:Ie?Ie[n]:void 0,"aria-current":n===ne},n)))}),(0,g.jsx)("div",{className:`${F}-inner`,children:w(z,((e,n)=>{const t=n===ne;return l?(0,g.jsx)(N.Z,{in:t,onEnter:t?pe:void 0,onEntered:t?me:void 0,addEndListener:C.Z,children:(n,r)=>a.cloneElement(e,{...r,className:m()(e.props.className,t&&"entered"!==n&&de,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&he)})}):a.cloneElement(e,{className:m()(e.props.className,t&&"active")})}))}),u&&(0,g.jsxs)(g.Fragment,{children:[(Z||0!==b)&&(0,g.jsxs)(h.Z,{className:`${F}-control-prev`,onClick:oe,children:[O,H&&(0,g.jsx)("span",{className:"visually-hidden",children:H})]}),(Z||b!==ae-1)&&(0,g.jsxs)(h.Z,{className:`${F}-control-next`,onClick:ie,children:[K,P&&(0,g.jsx)("span",{className:"visually-hidden",children:P})]})]})]})}));I.displayName="Carousel",I.defaultProps=j;var S=Object.assign(I,{Caption:f,Item:y})}}]);