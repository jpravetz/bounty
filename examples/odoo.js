!function(t){function e(l){if(a[l])return a[l].exports;var r=a[l]={exports:{},id:l,loaded:!1};return t[l].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var a={};return e.m=t,e.c=a,e.p="/",e(0)}([function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}var r=a(2),n=l(r);(0,n["default"])({el:".js-odoo",value:"£40,000,000"})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=function a(e){requestAnimationFrame(a),t(e)};return{start:function(){return e(0)}}}},function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e,a=t.el,l=t.value,r=(0,o.select)(a),u=window.getComputedStyle(r),g=parseInt(u.fontSize,10),_=1.35,m=(g*_-g)/2+g/10,b=g*_-m,x=1,M=100,j=0,w=g*_+m,P=(e=(e=(0,o.select)(a),o.append).call(e,"svg"),o.attr).call(e,"mask","url(#mask)"),O=o.append.call(P,"defs");v(O),y(O);var S=String(l).split(""),E=S.map(function(t,e){return isNaN(t)?{isDigit:!1,node:d(P,t,g),value:t,offset:{x:0,y:b}}:{isDigit:!0,id:e,node:s(P,g,_,e),filter:p(O,e),value:Number(t),offset:{x:0,y:b}}}),D=[],k=E.filter(function(t){return t.isDigit});console.log(E,k),k.forEach(function(t,e){var a=(f*i+t.value)*(g*_),l=(0,c["default"])({from:0,to:a,delay:(k.length-e)*M,step:function(e){var l;t.offset.y=b+e%(g*_*i),(l=t.node,o.attr).call(l,"transform","translate("+t.offset.x+", "+t.offset.y+")");var r=a/2,n=Math.abs(Math.abs(e-r)-r)/100;(l=(0,o.select)("#motionFilter-"+t.id+" .blurValues"),o.attr).call(l,"stdDeviation","0 "+n)}});D.push(l)});var C=function(t){j=0,E.forEach(function(t){var e=t.node.getBoundingClientRect(),a=e.width;t.offset.x=j,j+=a+x}),E.forEach(function(t){var e;(e=t.node,o.attr).call(e,"transform","translate("+t.offset.x+", "+t.offset.y+")")}),h(P,j,w),D.forEach(function(e){return e.update(t)})};(0,n["default"])(C).start()};var r=a(1),n=l(r),o=a(5),u=a(10),c=l(u),i=10,f=3,s=function(t,e,a,l){var r,n=[0,1,2,3,4,5,6,7,8,9,0],u=(r=o.append.call(t,"g"),o.attr).call(r,"id","digit-"+l);return n.forEach(function(t,r){var n;(n=(n=(n=(n=(n=o.append.call(u,"text"),o.attr).call(n,"y",-r*e*a),o.style).call(n,"fill","#fff"),o.style).call(n,"font-size",e+"px"),o.style).call(n,"filter","url(#motionFilter-"+l+")"),o.text).call(n,t)}),u},d=function(t,e,a){var l;return(l=(l=(l=o.append.call(t,"text"),o.style).call(l,"fill","#fff"),o.style).call(l,"font-size",a+"px"),o.text).call(l,e)},p=function(t,e){var a;return(a=(a=(a=(a=(a=(a=(a=o.append.call(t,"filter"),o.attr).call(a,"id","motionFilter-"+e),o.attr).call(a,"width","300%"),o.attr).call(a,"x","-100%"),o.append).call(a,"feGaussianBlur"),o.attr).call(a,"class","blurValues"),o.attr).call(a,"in","SourceGraphic"),o.attr).call(a,"stdDeviation","0 0")},v=function(t){var e;return(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=o.append.call(t,"linearGradient"),o.attr).call(e,"id","gradient"),o.attr).call(e,"x1","0%"),o.attr).call(e,"y1","0%"),o.attr).call(e,"x2","0%"),o.attr).call(e,"y2","100%"),o.append).call(e,"stop"),o.attr).call(e,"offset","0"),o.attr).call(e,"stop-color","white"),o.attr).call(e,"stop-opacity","0"),o.select).call(e,"#gradient"),o.append).call(e,"stop"),o.attr).call(e,"offset","0.2"),o.attr).call(e,"stop-color","white"),o.attr).call(e,"stop-opacity","1"),o.select).call(e,"#gradient"),o.append).call(e,"stop"),o.attr).call(e,"offset","0.8"),o.attr).call(e,"stop-color","white"),o.attr).call(e,"stop-opacity","1"),o.select).call(e,"#gradient"),o.append).call(e,"stop"),o.attr).call(e,"offset","1"),o.attr).call(e,"stop-color","white"),o.attr).call(e,"stop-opacity","0")},y=function(t){var e;return(e=(e=(e=(e=(e=(e=(e=o.append.call(t,"mask"),o.attr).call(e,"id","mask"),o.append).call(e,"rect"),o.attr).call(e,"x",0),o.attr).call(e,"y",0),o.attr).call(e,"width","100%"),o.attr).call(e,"height","100%"),o.attr).call(e,"fill","url(#gradient)")},h=function(t,e,a){var l;return(l=(l=(l=o.attr.call(t,"width",e),o.attr).call(l,"height",a),o.attr).call(l,"viewBox","0 0 "+e+" "+a),o.style).call(l,"overflow","hidden")}},function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=document.createElementNS(n["default"].svg,t);return this.appendChild(e),e};var r=a(6),n=l(r)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){return this.setAttribute(t,e),this}},function(t,e,a){"use strict";function l(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(7);Object.defineProperty(e,"select",{enumerable:!0,get:function(){return l(r)["default"]}});var n=a(3);Object.defineProperty(e,"append",{enumerable:!0,get:function(){return l(n)["default"]}});var o=a(4);Object.defineProperty(e,"attr",{enumerable:!0,get:function(){return l(o)["default"]}});var u=a(8);Object.defineProperty(e,"style",{enumerable:!0,get:function(){return l(u)["default"]}});var c=a(9);Object.defineProperty(e,"text",{enumerable:!0,get:function(){return l(c)["default"]}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={svg:"http://www.w3.org/2000/svg"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){return t===String(t)?document.querySelector(t):t}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){var a=arguments.length<=2||void 0===arguments[2]?"":arguments[2];return this.style.setProperty(t,e,a),this}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){return this.textContent=t,this}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2};e["default"]=function(t){var e=t.from,l=t.to,r=t.duration,n=void 0===r?3e3:r,o=t.delay,u=void 0===o?0:o,c=t.easing,i=void 0===c?a:c,f=t.start,s=void 0===f?function(t){return t}:f,d=t.step,p=void 0===d?function(t){return t}:d,v=t.end,y=void 0===v?function(t){return t}:v,h=e,g=0,_=!1,m=function(t){if(!_){g||(g=t,s(h));var a=Math.min(Math.max(t-g-u,0),n)/n;h=i(a)*(l-e)+e,p(h),1===a&&(_=!0,y(h))}};return{update:m}}}]);