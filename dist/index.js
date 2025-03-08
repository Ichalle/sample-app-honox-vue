var He=Object.defineProperty;var Xt=t=>{throw TypeError(t)};var Le=(t,e,r)=>e in t?He(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var d=(t,e,r)=>Le(t,typeof e!="symbol"?e+"":e,r),zt=(t,e,r)=>e.has(t)||Xt("Cannot "+r);var o=(t,e,r)=>(zt(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>e.has(t)?Xt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),f=(t,e,r,s)=>(zt(t,e,"write to private field"),s?s.call(t,r):e.set(t,r),r),m=(t,e,r)=>(zt(t,e,"access private method"),r);var Yt=(t,e,r,s)=>({set _(n){f(t,e,n,r)},get _(){return o(t,e,s)}});import{lstatSync as Me,createReadStream as Jt}from"fs";import{AsyncLocalStorage as ze}from"node:async_hooks";var ke=t=>{let e=t.filename;const r=t.defaultDocument||"index.html";return e.endsWith("/")?e=e.concat(r):e.match(/\.[a-zA-Z0-9_-]+$/)||(e=e.concat("/"+r)),ge({root:t.root,filename:e})},ge=t=>{let e=t.root||"",r=t.filename;if(/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(r))return;r=r.replace(/^\.?[\/\\]/,""),r=r.replace(/\\/,"/"),e=e.replace(/\/$/,"");let s=e?e+"/"+r:r;if(s=s.replace(/^\.?\//,""),!(e[0]!=="/"&&s[0]==="/"))return s},Ue=(t,e=We)=>{const r=/\.([a-zA-Z0-9]+?)$/,s=t.match(r);if(!s)return;let n=e[s[1]];return n&&n.startsWith("text")&&(n+="; charset=utf-8"),n},qe={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},We=qe,Be=/^\s*(?:text\/[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,Bt={br:".br",zstd:".zst",gzip:".gz"},Ke=Object.keys(Bt),Qt=t=>new ReadableStream({start(r){t.on("data",s=>{r.enqueue(s)}),t.on("end",()=>{r.close()})},cancel(){t.destroy()}}),Zt=t=>`./${t}`,kt=t=>{let e;try{e=Me(t)}catch{}return e},Ge=(t={root:""})=>async(e,r)=>{var A,w,E,x;if(e.finalized)return r();let s;try{s=t.path??decodeURIComponent(e.req.path)}catch{return await((A=t.onNotFound)==null?void 0:A.call(t,e.req.path,e)),r()}let n=ge({filename:t.rewriteRequestPath?t.rewriteRequestPath(s):s,root:t.root});if(n)n=Zt(n);else return r();let i=kt(n);if(i&&i.isDirectory()){if(n=ke({filename:t.rewriteRequestPath?t.rewriteRequestPath(s):s,root:t.root,defaultDocument:t.index??"index.html"}),n)n=Zt(n);else return r();i=kt(n)}if(!i)return await((w=t.onNotFound)==null?void 0:w.call(t,n,e)),r();await((E=t.onFound)==null?void 0:E.call(t,n,e));const c=Ue(n);if(e.header("Content-Type",c||"application/octet-stream"),t.precompressed&&(!c||Be.test(c))){const O=new Set((x=e.req.header("Accept-Encoding"))==null?void 0:x.split(",").map(y=>y.trim()));for(const y of Ke){if(!O.has(y))continue;const $=kt(n+Bt[y]);if($){e.header("Content-Encoding",y),e.header("Vary","Accept-Encoding",{append:!0}),i=$,n=n+Bt[y];break}}}const l=i.size;if(e.req.method=="HEAD"||e.req.method=="OPTIONS")return e.header("Content-Length",l.toString()),e.status(200),e.body(null);const a=e.req.header("range")||"";if(!a)return e.header("Content-Length",l.toString()),e.body(Qt(Jt(n)),200);e.header("Accept-Ranges","bytes"),e.header("Date",i.birthtime.toUTCString());const h=a.replace(/bytes=/,"").split("-",2),u=h[0]?parseInt(h[0],10):0;let p=h[1]?parseInt(h[1],10):i.size-1;l<p-u+1&&(p=l-1);const v=p-u+1,b=Jt(n,{start:u,end:p});return e.header("Content-Length",v.toString()),e.header("Content-Range",`bytes ${u}-${p}/${i.size}`),e.body(Qt(b),206)},te=(t,e,r)=>(s,n)=>{let i=-1;return c(0);async function c(l){if(l<=i)throw new Error("next() called multiple times");i=l;let a,h=!1,u;if(t[l]?(u=t[l][0][0],s.req.routeIndex=l):u=l===t.length&&n||void 0,u)try{a=await u(s,()=>c(l+1))}catch(p){if(p instanceof Error&&e)s.error=p,a=await e(p,s),h=!0;else throw p}else s.finalized===!1&&r&&(a=await r(s));return a&&(s.finalized===!1||h)&&(s.res=a),s}},Ve=async(t,e=Object.create(null))=>{const{all:r=!1,dot:s=!1}=e,i=(t instanceof be?t.raw.headers:t.headers).get("Content-Type");return i!=null&&i.startsWith("multipart/form-data")||i!=null&&i.startsWith("application/x-www-form-urlencoded")?Xe(t,{all:r,dot:s}):{}};async function Xe(t,e){const r=await t.formData();return r?Ye(r,e):{}}function Ye(t,e){const r=Object.create(null);return t.forEach((s,n)=>{e.all||n.endsWith("[]")?Je(r,n,s):r[n]=s}),e.dot&&Object.entries(r).forEach(([s,n])=>{s.includes(".")&&(Qe(r,s,n),delete r[s])}),r}var Je=(t,e,r)=>{t[e]!==void 0?Array.isArray(t[e])?t[e].push(r):t[e]=[t[e],r]:t[e]=r},Qe=(t,e,r)=>{let s=t;const n=e.split(".");n.forEach((i,c)=>{c===n.length-1?s[i]=r:((!s[i]||typeof s[i]!="object"||Array.isArray(s[i])||s[i]instanceof File)&&(s[i]=Object.create(null)),s=s[i])})},me=t=>{const e=t.split("/");return e[0]===""&&e.shift(),e},Ze=t=>{const{groups:e,path:r}=tr(t),s=me(r);return er(s,e)},tr=t=>{const e=[];return t=t.replace(/\{[^}]+\}/g,(r,s)=>{const n=`@${s}`;return e.push([n,r]),n}),{groups:e,path:t}},er=(t,e)=>{for(let r=e.length-1;r>=0;r--){const[s]=e[r];for(let n=t.length-1;n>=0;n--)if(t[n].includes(s)){t[n]=t[n].replace(s,e[r][1]);break}}return t},Nt={},ee=(t,e)=>{if(t==="*")return"*";const r=t.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){const s=`${t}#${e}`;return Nt[s]||(r[2]?Nt[s]=e&&e[0]!==":"&&e[0]!=="*"?[s,r[1],new RegExp(`^${r[2]}(?=/${e})`)]:[t,r[1],new RegExp(`^${r[2]}$`)]:Nt[s]=[t,r[1],!0]),Nt[s]}return null},ve=(t,e)=>{try{return e(t)}catch{return t.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return e(r)}catch{return r}})}},rr=t=>ve(t,decodeURI),xe=t=>{const e=t.url,r=e.indexOf("/",8);let s=r;for(;s<e.length;s++){const n=e.charCodeAt(s);if(n===37){const i=e.indexOf("?",s),c=e.slice(r,i===-1?void 0:i);return rr(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(n===63)break}return e.slice(r,s)},sr=t=>{const e=xe(t);return e.length>1&&e.at(-1)==="/"?e.slice(0,-1):e},vt=(t,e,...r)=>(r.length&&(e=vt(e,...r)),`${(t==null?void 0:t[0])==="/"?"":"/"}${t}${e==="/"?"":`${(t==null?void 0:t.at(-1))==="/"?"":"/"}${(e==null?void 0:e[0])==="/"?e.slice(1):e}`}`),ye=t=>{if(t.charCodeAt(t.length-1)!==63||!t.includes(":"))return null;const e=t.split("/"),r=[];let s="";return e.forEach(n=>{if(n!==""&&!/\:/.test(n))s+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){r.length===0&&s===""?r.push("/"):r.push(s);const i=n.replace("?","");s+="/"+i,r.push(s)}else s+="/"+n}),r.filter((n,i,c)=>c.indexOf(n)===i)},Ut=t=>/[%+]/.test(t)?(t.indexOf("+")!==-1&&(t=t.replace(/\+/g," ")),t.indexOf("%")!==-1?Ee(t):t):t,we=(t,e,r)=>{let s;if(!r&&e&&!/[%+]/.test(e)){let c=t.indexOf(`?${e}`,8);for(c===-1&&(c=t.indexOf(`&${e}`,8));c!==-1;){const l=t.charCodeAt(c+e.length+1);if(l===61){const a=c+e.length+2,h=t.indexOf("&",a);return Ut(t.slice(a,h===-1?void 0:h))}else if(l==38||isNaN(l))return"";c=t.indexOf(`&${e}`,c+1)}if(s=/[%+]/.test(t),!s)return}const n={};s??(s=/[%+]/.test(t));let i=t.indexOf("?",8);for(;i!==-1;){const c=t.indexOf("&",i+1);let l=t.indexOf("=",i);l>c&&c!==-1&&(l=-1);let a=t.slice(i+1,l===-1?c===-1?void 0:c:l);if(s&&(a=Ut(a)),i=c,a==="")continue;let h;l===-1?h="":(h=t.slice(l+1,c===-1?void 0:c),s&&(h=Ut(h))),r?(n[a]&&Array.isArray(n[a])||(n[a]=[]),n[a].push(h)):n[a]??(n[a]=h)}return e?n[e]:n},nr=we,ir=(t,e)=>we(t,e,!0),Ee=decodeURIComponent,re=t=>ve(t,Ee),xt,L,V,Re,Oe,Kt,Q,oe,be=(oe=class{constructor(t,e="/",r=[[]]){g(this,V);d(this,"raw");g(this,xt);g(this,L);d(this,"routeIndex",0);d(this,"path");d(this,"bodyCache",{});g(this,Q,t=>{const{bodyCache:e,raw:r}=this,s=e[t];if(s)return s;const n=Object.keys(e)[0];return n?e[n].then(i=>(n==="json"&&(i=JSON.stringify(i)),new Response(i)[t]())):e[t]=r[t]()});this.raw=t,this.path=e,f(this,L,r),f(this,xt,{})}param(t){return t?m(this,V,Re).call(this,t):m(this,V,Oe).call(this)}query(t){return nr(this.url,t)}queries(t){return ir(this.url,t)}header(t){if(t)return this.raw.headers.get(t)??void 0;const e={};return this.raw.headers.forEach((r,s)=>{e[s]=r}),e}async parseBody(t){var e;return(e=this.bodyCache).parsedBody??(e.parsedBody=await Ve(this,t))}json(){return o(this,Q).call(this,"json")}text(){return o(this,Q).call(this,"text")}arrayBuffer(){return o(this,Q).call(this,"arrayBuffer")}blob(){return o(this,Q).call(this,"blob")}formData(){return o(this,Q).call(this,"formData")}addValidatedData(t,e){o(this,xt)[t]=e}valid(t){return o(this,xt)[t]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return o(this,L)[0].map(([[,t]])=>t)}get routePath(){return o(this,L)[0].map(([[,t]])=>t)[this.routeIndex].path}},xt=new WeakMap,L=new WeakMap,V=new WeakSet,Re=function(t){const e=o(this,L)[0][this.routeIndex][1][t],r=m(this,V,Kt).call(this,e);return r?/\%/.test(r)?re(r):r:void 0},Oe=function(){const t={},e=Object.keys(o(this,L)[0][this.routeIndex][1]);for(const r of e){const s=m(this,V,Kt).call(this,o(this,L)[0][this.routeIndex][1][r]);s&&typeof s=="string"&&(t[r]=/\%/.test(s)?re(s):s)}return t},Kt=function(t){return o(this,L)[1]?o(this,L)[1][t]:t},Q=new WeakMap,oe),or={Stringify:1},je=async(t,e,r,s,n)=>{typeof t=="object"&&!(t instanceof String)&&(t instanceof Promise||(t=t.toString()),t instanceof Promise&&(t=await t));const i=t.callbacks;return i!=null&&i.length?(n?n[0]+=t:n=[t],Promise.all(i.map(l=>l({phase:e,buffer:n,context:s}))).then(l=>Promise.all(l.filter(Boolean).map(a=>je(a,e,!1,s,n))).then(()=>n[0]))):Promise.resolve(t)},ar="text/plain; charset=UTF-8",qt=(t,e={})=>{for(const r of Object.keys(e))t.set(r,e[r]);return t},St,Dt,U,lt,q,R,P,k,W,At,yt,wt,$t,It,N,F,ae,cr=(ae=class{constructor(t,e){g(this,N);g(this,St);g(this,Dt);d(this,"env",{});g(this,U);d(this,"finalized",!1);d(this,"error");g(this,lt,200);g(this,q);g(this,R);g(this,P);g(this,k);g(this,W,!0);g(this,At);g(this,yt);g(this,wt);g(this,$t);g(this,It);d(this,"render",(...t)=>(o(this,yt)??f(this,yt,e=>this.html(e)),o(this,yt).call(this,...t)));d(this,"setLayout",t=>f(this,At,t));d(this,"getLayout",()=>o(this,At));d(this,"setRenderer",t=>{f(this,yt,t)});d(this,"header",(t,e,r)=>{if(e===void 0){o(this,R)?o(this,R).delete(t):o(this,P)&&delete o(this,P)[t.toLocaleLowerCase()],this.finalized&&this.res.headers.delete(t);return}r!=null&&r.append?(o(this,R)||(f(this,W,!1),f(this,R,new Headers(o(this,P))),f(this,P,{})),o(this,R).append(t,e)):o(this,R)?o(this,R).set(t,e):(o(this,P)??f(this,P,{}),o(this,P)[t.toLowerCase()]=e),this.finalized&&(r!=null&&r.append?this.res.headers.append(t,e):this.res.headers.set(t,e))});d(this,"status",t=>{f(this,W,!1),f(this,lt,t)});d(this,"set",(t,e)=>{o(this,U)??f(this,U,new Map),o(this,U).set(t,e)});d(this,"get",t=>o(this,U)?o(this,U).get(t):void 0);d(this,"newResponse",(...t)=>m(this,N,F).call(this,...t));d(this,"body",(t,e,r)=>typeof e=="number"?m(this,N,F).call(this,t,e,r):m(this,N,F).call(this,t,e));d(this,"text",(t,e,r)=>{if(!o(this,P)){if(o(this,W)&&!r&&!e)return new Response(t);f(this,P,{})}return o(this,P)["content-type"]=ar,typeof e=="number"?m(this,N,F).call(this,t,e,r):m(this,N,F).call(this,t,e)});d(this,"json",(t,e,r)=>{const s=JSON.stringify(t);return o(this,P)??f(this,P,{}),o(this,P)["content-type"]="application/json",typeof e=="number"?m(this,N,F).call(this,s,e,r):m(this,N,F).call(this,s,e)});d(this,"html",(t,e,r)=>(o(this,P)??f(this,P,{}),o(this,P)["content-type"]="text/html; charset=UTF-8",typeof t=="object"?je(t,or.Stringify,!1,{}).then(s=>typeof e=="number"?m(this,N,F).call(this,s,e,r):m(this,N,F).call(this,s,e)):typeof e=="number"?m(this,N,F).call(this,t,e,r):m(this,N,F).call(this,t,e)));d(this,"redirect",(t,e)=>(o(this,R)??f(this,R,new Headers),o(this,R).set("Location",String(t)),this.newResponse(null,e??302)));d(this,"notFound",()=>(o(this,wt)??f(this,wt,()=>new Response),o(this,wt).call(this,this)));f(this,St,t),e&&(f(this,q,e.executionCtx),this.env=e.env,f(this,wt,e.notFoundHandler),f(this,It,e.path),f(this,$t,e.matchResult))}get req(){return o(this,Dt)??f(this,Dt,new be(o(this,St),o(this,It),o(this,$t))),o(this,Dt)}get event(){if(o(this,q)&&"respondWith"in o(this,q))return o(this,q);throw Error("This context has no FetchEvent")}get executionCtx(){if(o(this,q))return o(this,q);throw Error("This context has no ExecutionContext")}get res(){return f(this,W,!1),o(this,k)||f(this,k,new Response("404 Not Found",{status:404}))}set res(t){if(f(this,W,!1),o(this,k)&&t)try{for(const[e,r]of o(this,k).headers.entries())if(e!=="content-type")if(e==="set-cookie"){const s=o(this,k).headers.getSetCookie();t.headers.delete("set-cookie");for(const n of s)t.headers.append("set-cookie",n)}else t.headers.set(e,r)}catch(e){if(e instanceof TypeError&&e.message.includes("immutable")){this.res=new Response(t.body,{headers:t.headers,status:t.status});return}else throw e}f(this,k,t),this.finalized=!0}get var(){return o(this,U)?Object.fromEntries(o(this,U)):{}}},St=new WeakMap,Dt=new WeakMap,U=new WeakMap,lt=new WeakMap,q=new WeakMap,R=new WeakMap,P=new WeakMap,k=new WeakMap,W=new WeakMap,At=new WeakMap,yt=new WeakMap,wt=new WeakMap,$t=new WeakMap,It=new WeakMap,N=new WeakSet,F=function(t,e,r){if(o(this,W)&&!r&&!e&&o(this,lt)===200)return new Response(t,{headers:o(this,P)});if(e&&typeof e!="number"){const n=new Headers(e.headers);o(this,R)&&o(this,R).forEach((c,l)=>{l==="set-cookie"?n.append(l,c):n.set(l,c)});const i=qt(n,o(this,P));return new Response(t,{headers:i,status:e.status??o(this,lt)})}const s=typeof e=="number"?e:o(this,lt);o(this,P)??f(this,P,{}),o(this,R)??f(this,R,new Headers),qt(o(this,R),o(this,P)),o(this,k)&&(o(this,k).headers.forEach((n,i)=>{var c,l;i==="set-cookie"?(c=o(this,R))==null||c.append(i,n):(l=o(this,R))==null||l.set(i,n)}),qt(o(this,R),o(this,P))),r??(r={});for(const[n,i]of Object.entries(r))if(typeof i=="string")o(this,R).set(n,i);else{o(this,R).delete(n);for(const c of i)o(this,R).append(n,c)}return new Response(t,{status:s,headers:o(this,R)})},ae),S="ALL",hr="all",lr=["get","post","put","delete","options","patch"],Pe="Can not add a route since the matcher is already built.",Se=class extends Error{},ur="__COMPOSED_HANDLER",fr=t=>t.text("404 Not Found",404),se=(t,e)=>"getResponse"in t?t.getResponse():(console.error(t),e.text("Internal Server Error",500)),M,D,Ae,B,ct,_t,Ft,ce,De=(ce=class{constructor(e={}){g(this,D);d(this,"get");d(this,"post");d(this,"put");d(this,"delete");d(this,"options");d(this,"patch");d(this,"all");d(this,"on");d(this,"use");d(this,"router");d(this,"getPath");d(this,"_basePath","/");g(this,M,"/");d(this,"routes",[]);g(this,B,fr);d(this,"errorHandler",se);d(this,"onError",e=>(this.errorHandler=e,this));d(this,"notFound",e=>(f(this,B,e),this));d(this,"fetch",(e,...r)=>m(this,D,Ft).call(this,e,r[1],r[0],e.method));d(this,"request",(e,r,s,n)=>e instanceof Request?this.fetch(r?new Request(e,r):e,s,n):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${vt("/",e)}`,r),s,n)));d(this,"fire",()=>{addEventListener("fetch",e=>{e.respondWith(m(this,D,Ft).call(this,e.request,e,void 0,e.request.method))})});[...lr,hr].forEach(i=>{this[i]=(c,...l)=>(typeof c=="string"?f(this,M,c):m(this,D,ct).call(this,i,o(this,M),c),l.forEach(a=>{m(this,D,ct).call(this,i,o(this,M),a)}),this)}),this.on=(i,c,...l)=>{for(const a of[c].flat()){f(this,M,a);for(const h of[i].flat())l.map(u=>{m(this,D,ct).call(this,h.toUpperCase(),o(this,M),u)})}return this},this.use=(i,...c)=>(typeof i=="string"?f(this,M,i):(f(this,M,"*"),c.unshift(i)),c.forEach(l=>{m(this,D,ct).call(this,S,o(this,M),l)}),this);const{strict:s,...n}=e;Object.assign(this,n),this.getPath=s??!0?e.getPath??xe:sr}route(e,r){const s=this.basePath(e);return r.routes.map(n=>{var c;let i;r.errorHandler===se?i=n.handler:(i=async(l,a)=>(await te([],r.errorHandler)(l,()=>n.handler(l,a))).res,i[ur]=n.handler),m(c=s,D,ct).call(c,n.method,n.path,i)}),this}basePath(e){const r=m(this,D,Ae).call(this);return r._basePath=vt(this._basePath,e),r}mount(e,r,s){let n,i;s&&(typeof s=="function"?i=s:(i=s.optionHandler,n=s.replaceRequest));const c=i?a=>{const h=i(a);return Array.isArray(h)?h:[h]}:a=>{let h;try{h=a.executionCtx}catch{}return[a.env,h]};n||(n=(()=>{const a=vt(this._basePath,e),h=a==="/"?0:a.length;return u=>{const p=new URL(u.url);return p.pathname=p.pathname.slice(h)||"/",new Request(p,u)}})());const l=async(a,h)=>{const u=await r(n(a.req.raw),...c(a));if(u)return u;await h()};return m(this,D,ct).call(this,S,vt(e,"*"),l),this}},M=new WeakMap,D=new WeakSet,Ae=function(){const e=new De({router:this.router,getPath:this.getPath});return e.routes=this.routes,e},B=new WeakMap,ct=function(e,r,s){e=e.toUpperCase(),r=vt(this._basePath,r);const n={path:r,method:e,handler:s};this.router.add(e,r,[s,n]),this.routes.push(n)},_t=function(e,r){if(e instanceof Error)return this.errorHandler(e,r);throw e},Ft=function(e,r,s,n){if(n==="HEAD")return(async()=>new Response(null,await m(this,D,Ft).call(this,e,r,s,"GET")))();const i=this.getPath(e,{env:s}),c=this.router.match(n,i),l=new cr(e,{path:i,matchResult:c,env:s,executionCtx:r,notFoundHandler:o(this,B)});if(c[0].length===1){let h;try{h=c[0][0][0][0](l,async()=>{l.res=await o(this,B).call(this,l)})}catch(u){return m(this,D,_t).call(this,u,l)}return h instanceof Promise?h.then(u=>u||(l.finalized?l.res:o(this,B).call(this,l))).catch(u=>m(this,D,_t).call(this,u,l)):h??o(this,B).call(this,l)}const a=te(c[0],this.errorHandler,o(this,B));return(async()=>{try{const h=await a(l);if(!h.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return h.res}catch(h){return m(this,D,_t).call(this,h,l)}})()},ce),Lt="[^/]+",jt=".*",Pt="(?:|/.*)",Ot=Symbol(),dr=new Set(".\\+*[^]$()");function pr(t,e){return t.length===1?e.length===1?t<e?-1:1:-1:e.length===1||t===jt||t===Pt?1:e===jt||e===Pt?-1:t===Lt?1:e===Lt?-1:t.length===e.length?t<e?-1:1:e.length-t.length}var ut,ft,z,he,Gt=(he=class{constructor(){g(this,ut);g(this,ft);g(this,z,Object.create(null))}insert(e,r,s,n,i){if(e.length===0){if(o(this,ut)!==void 0)throw Ot;if(i)return;f(this,ut,r);return}const[c,...l]=e,a=c==="*"?l.length===0?["","",jt]:["","",Lt]:c==="/*"?["","",Pt]:c.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let h;if(a){const u=a[1];let p=a[2]||Lt;if(u&&a[2]&&(p=p.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(p)))throw Ot;if(h=o(this,z)[p],!h){if(Object.keys(o(this,z)).some(v=>v!==jt&&v!==Pt))throw Ot;if(i)return;h=o(this,z)[p]=new Gt,u!==""&&f(h,ft,n.varIndex++)}!i&&u!==""&&s.push([u,o(h,ft)])}else if(h=o(this,z)[c],!h){if(Object.keys(o(this,z)).some(u=>u.length>1&&u!==jt&&u!==Pt))throw Ot;if(i)return;h=o(this,z)[c]=new Gt}h.insert(l,r,s,n,i)}buildRegExpStr(){const r=Object.keys(o(this,z)).sort(pr).map(s=>{const n=o(this,z)[s];return(typeof o(n,ft)=="number"?`(${s})@${o(n,ft)}`:dr.has(s)?`\\${s}`:s)+n.buildRegExpStr()});return typeof o(this,ut)=="number"&&r.unshift(`#${o(this,ut)}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}},ut=new WeakMap,ft=new WeakMap,z=new WeakMap,he),Mt,Ct,le,gr=(le=class{constructor(){g(this,Mt,{varIndex:0});g(this,Ct,new Gt)}insert(t,e,r){const s=[],n=[];for(let c=0;;){let l=!1;if(t=t.replace(/\{[^}]+\}/g,a=>{const h=`@\\${c}`;return n[c]=[h,a],c++,l=!0,h}),!l)break}const i=t.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let c=n.length-1;c>=0;c--){const[l]=n[c];for(let a=i.length-1;a>=0;a--)if(i[a].indexOf(l)!==-1){i[a]=i[a].replace(l,n[c][1]);break}}return o(this,Ct).insert(i,e,s,o(this,Mt),r),s}buildRegExp(){let t=o(this,Ct).buildRegExpStr();if(t==="")return[/^$/,[],[]];let e=0;const r=[],s=[];return t=t.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,i,c)=>i!==void 0?(r[++e]=Number(i),"$()"):(c!==void 0&&(s[Number(c)]=++e),"")),[new RegExp(`^${t}`),r,s]}},Mt=new WeakMap,Ct=new WeakMap,le),$e=[],mr=[/^$/,[],Object.create(null)],Tt=Object.create(null);function Ie(t){return Tt[t]??(Tt[t]=new RegExp(t==="*"?"":`^${t.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,r)=>r?`\\${r}`:"(?:|/.*)")}$`))}function vr(){Tt=Object.create(null)}function xr(t){var h;const e=new gr,r=[];if(t.length===0)return mr;const s=t.map(u=>[!/\*|\/:/.test(u[0]),...u]).sort(([u,p],[v,b])=>u?1:v?-1:p.length-b.length),n=Object.create(null);for(let u=0,p=-1,v=s.length;u<v;u++){const[b,A,w]=s[u];b?n[A]=[w.map(([x])=>[x,Object.create(null)]),$e]:p++;let E;try{E=e.insert(A,p,b)}catch(x){throw x===Ot?new Se(A):x}b||(r[p]=w.map(([x,O])=>{const y=Object.create(null);for(O-=1;O>=0;O--){const[$,T]=E[O];y[$]=T}return[x,y]}))}const[i,c,l]=e.buildRegExp();for(let u=0,p=r.length;u<p;u++)for(let v=0,b=r[u].length;v<b;v++){const A=(h=r[u][v])==null?void 0:h[1];if(!A)continue;const w=Object.keys(A);for(let E=0,x=w.length;E<x;E++)A[w[E]]=l[A[w[E]]]}const a=[];for(const u in c)a[u]=r[c[u]];return[i,a,n]}function mt(t,e){if(t){for(const r of Object.keys(t).sort((s,n)=>n.length-s.length))if(Ie(r).test(e))return[...t[r]]}}var Z,tt,bt,Ce,Ne,ue,yr=(ue=class{constructor(){g(this,bt);d(this,"name","RegExpRouter");g(this,Z);g(this,tt);f(this,Z,{[S]:Object.create(null)}),f(this,tt,{[S]:Object.create(null)})}add(t,e,r){var l;const s=o(this,Z),n=o(this,tt);if(!s||!n)throw new Error(Pe);s[t]||[s,n].forEach(a=>{a[t]=Object.create(null),Object.keys(a[S]).forEach(h=>{a[t][h]=[...a[S][h]]})}),e==="/*"&&(e="*");const i=(e.match(/\/:/g)||[]).length;if(/\*$/.test(e)){const a=Ie(e);t===S?Object.keys(s).forEach(h=>{var u;(u=s[h])[e]||(u[e]=mt(s[h],e)||mt(s[S],e)||[])}):(l=s[t])[e]||(l[e]=mt(s[t],e)||mt(s[S],e)||[]),Object.keys(s).forEach(h=>{(t===S||t===h)&&Object.keys(s[h]).forEach(u=>{a.test(u)&&s[h][u].push([r,i])})}),Object.keys(n).forEach(h=>{(t===S||t===h)&&Object.keys(n[h]).forEach(u=>a.test(u)&&n[h][u].push([r,i]))});return}const c=ye(e)||[e];for(let a=0,h=c.length;a<h;a++){const u=c[a];Object.keys(n).forEach(p=>{var v;(t===S||t===p)&&((v=n[p])[u]||(v[u]=[...mt(s[p],u)||mt(s[S],u)||[]]),n[p][u].push([r,i-h+a+1]))})}}match(t,e){vr();const r=m(this,bt,Ce).call(this);return this.match=(s,n)=>{const i=r[s]||r[S],c=i[2][n];if(c)return c;const l=n.match(i[0]);if(!l)return[[],$e];const a=l.indexOf("",1);return[i[1][a],l]},this.match(t,e)}},Z=new WeakMap,tt=new WeakMap,bt=new WeakSet,Ce=function(){const t=Object.create(null);return Object.keys(o(this,tt)).concat(Object.keys(o(this,Z))).forEach(e=>{t[e]||(t[e]=m(this,bt,Ne).call(this,e))}),f(this,Z,f(this,tt,void 0)),t},Ne=function(t){const e=[];let r=t===S;return[o(this,Z),o(this,tt)].forEach(s=>{const n=s[t]?Object.keys(s[t]).map(i=>[i,s[t][i]]):[];n.length!==0?(r||(r=!0),e.push(...n)):t!==S&&e.push(...Object.keys(s[S]).map(i=>[i,s[S][i]]))}),r?xr(e):null},ue),et,K,fe,wr=(fe=class{constructor(t){d(this,"name","SmartRouter");g(this,et,[]);g(this,K,[]);f(this,et,t.routers)}add(t,e,r){if(!o(this,K))throw new Error(Pe);o(this,K).push([t,e,r])}match(t,e){if(!o(this,K))throw new Error("Fatal error");const r=o(this,et),s=o(this,K),n=r.length;let i=0,c;for(;i<n;i++){const l=r[i];try{for(let a=0,h=s.length;a<h;a++)l.add(...s[a]);c=l.match(t,e)}catch(a){if(a instanceof Se)continue;throw a}this.match=l.match.bind(l),f(this,et,[l]),f(this,K,void 0);break}if(i===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,c}get activeRouter(){if(o(this,K)||o(this,et).length!==1)throw new Error("No active router has been determined yet.");return o(this,et)[0]}},et=new WeakMap,K=new WeakMap,fe),Rt=Object.create(null),rt,C,dt,Et,I,G,ht,de,_e=(de=class{constructor(t,e,r){g(this,G);g(this,rt);g(this,C);g(this,dt);g(this,Et,0);g(this,I,Rt);if(f(this,C,r||Object.create(null)),f(this,rt,[]),t&&e){const s=Object.create(null);s[t]={handler:e,possibleKeys:[],score:0},f(this,rt,[s])}f(this,dt,[])}insert(t,e,r){f(this,Et,++Yt(this,Et)._);let s=this;const n=Ze(e),i=[];for(let a=0,h=n.length;a<h;a++){const u=n[a],p=n[a+1],v=ee(u,p),b=Array.isArray(v)?v[0]:u;if(Object.keys(o(s,C)).includes(b)){s=o(s,C)[b];const A=ee(u,p);A&&i.push(A[1]);continue}o(s,C)[b]=new _e,v&&(o(s,dt).push(v),i.push(v[1])),s=o(s,C)[b]}const c=Object.create(null),l={handler:r,possibleKeys:i.filter((a,h,u)=>u.indexOf(a)===h),score:o(this,Et)};return c[t]=l,o(s,rt).push(c),s}search(t,e){var l;const r=[];f(this,I,Rt);let n=[this];const i=me(e),c=[];for(let a=0,h=i.length;a<h;a++){const u=i[a],p=a===h-1,v=[];for(let b=0,A=n.length;b<A;b++){const w=n[b],E=o(w,C)[u];E&&(f(E,I,o(w,I)),p?(o(E,C)["*"]&&r.push(...m(this,G,ht).call(this,o(E,C)["*"],t,o(w,I))),r.push(...m(this,G,ht).call(this,E,t,o(w,I)))):v.push(E));for(let x=0,O=o(w,dt).length;x<O;x++){const y=o(w,dt)[x],$=o(w,I)===Rt?{}:{...o(w,I)};if(y==="*"){const j=o(w,C)["*"];j&&(r.push(...m(this,G,ht).call(this,j,t,o(w,I))),f(j,I,$),v.push(j));continue}if(u==="")continue;const[T,st,nt]=y,H=o(w,C)[T],_=i.slice(a).join("/");if(nt instanceof RegExp){const j=nt.exec(_);if(j){if($[st]=j[0],r.push(...m(this,G,ht).call(this,H,t,o(w,I),$)),Object.keys(o(H,C)).length){f(H,I,$);const it=((l=j[0].match(/\//))==null?void 0:l.length)??0;(c[it]||(c[it]=[])).push(H)}continue}}(nt===!0||nt.test(u))&&($[st]=u,p?(r.push(...m(this,G,ht).call(this,H,t,$,o(w,I))),o(H,C)["*"]&&r.push(...m(this,G,ht).call(this,o(H,C)["*"],t,$,o(w,I)))):(f(H,I,$),v.push(H)))}}n=v.concat(c.shift()??[])}return r.length>1&&r.sort((a,h)=>a.score-h.score),[r.map(({handler:a,params:h})=>[a,h])]}},rt=new WeakMap,C=new WeakMap,dt=new WeakMap,Et=new WeakMap,I=new WeakMap,G=new WeakSet,ht=function(t,e,r,s){const n=[];for(let i=0,c=o(t,rt).length;i<c;i++){const l=o(t,rt)[i],a=l[e]||l[S],h={};if(a!==void 0&&(a.params=Object.create(null),n.push(a),r!==Rt||s&&s!==Rt))for(let u=0,p=a.possibleKeys.length;u<p;u++){const v=a.possibleKeys[u],b=h[a.score];a.params[v]=s!=null&&s[v]&&!b?s[v]:r[v]??(s==null?void 0:s[v]),h[a.score]=!0}}return n},de),pt,pe,Er=(pe=class{constructor(){d(this,"name","TrieRouter");g(this,pt);f(this,pt,new _e)}add(t,e,r){const s=ye(e);if(s){for(let n=0,i=s.length;n<i;n++)o(this,pt).insert(t,s[n],r);return}o(this,pt).insert(t,e,r)}match(t,e){return o(this,pt).search(t,e)}},pt=new WeakMap,pe),Ht=class extends De{constructor(t={}){super(t),this.router=t.router??new wr({routers:[new yr,new Er]})}},br=t=>t;const gt="__importing_islands",Rr=new ze,ne=t=>(t=t.replace(/\.tsx?$/g,"").replace(/\.mdx?$/g,"").replace(/^\/?index$/,"/").replace(/\/index$/,"").replace(/\[\.{3}.+\]/,"*").replace(/\[(.+?)\]/g,":$1"),/^\//.test(t)?t:"/"+t),Wt=t=>{const e={};for(const[r,s]of Object.entries(t)){const n=r.split("/"),i=n.pop(),c=n.join("/");e[c]||(e[c]={}),i&&(e[c][i]=s)}for(const[r,s]of Object.entries(e)){const n=Object.entries(s).sort(([i],[c])=>i[0]==="["&&c[0]!=="["?1:i[0]!=="["&&c[0]==="["?-1:i.localeCompare(c));e[r]=Object.fromEntries(n)}return e},Or=t=>Object.keys(t).sort((r,s)=>{const n=r.split("/").length,i=s.split("/").length;return n-i||s.localeCompare(r)}).map(r=>({[r]:t[r]})),jr=t=>{const e={};for(const s of Object.keys(t)){const n=s.split("/");n.pop();const i=n.join("/");e[i]||(e[i]=[]),e[i].includes(s)||e[i].push(s)}const r=Object.keys(e).sort((s,n)=>n.length-s.length);for(const s of r)for(const n of r)if(n.startsWith(s)&&n!==s){const i=new Set([...e[n],...e[s]]);e[n]=[...i]}return e},Pr="_404.tsx",Sr="_error.tsx",Dr=["GET","POST","PUT","DELETE","OPTIONS","PATCH"],Ar=t=>{const e=t.root,r=new RegExp(`^${e}`),s=E=>ne(E.replace(r,"")),n=new Ht;n.use(async function(x,O){await Rr.run(x,()=>O())});const i=t.NOT_FOUND,c=Wt(i),l=t.ERROR,a=Wt(l),h=t.RENDERER,u=jr(h),p=t.MIDDLEWARE,v=t.ROUTES,b=Or(Wt(v)),A=(E,x)=>{let O=x[E]??[];const y=T=>(O=x[T.join("/")],O||(T.pop(),T.length&&y(T)),O??[]),$=E.split("/");return O=y($),O.sort((T,st)=>T.split("/").length-st.split("/").length),O},w={};for(const E of b)for(const[x,O]of Object.entries(E)){const y=new Ht;let $=!1;A(x,u).map(_=>{const j=h[_];j[gt]&&($=!0);const X=j.default;X&&y.all("*",X)});const st=Object.keys(p).find(_=>{const j=x.replaceAll("[","\\[").replace("]","\\]");return new RegExp(j+"/_middleware.tsx?").test(_)});if(st){const _=p[st];_.default&&y.use(..._.default)}for(const[_,j]of Object.entries(O)){const it=j[gt],X=br(async function(J,Te){J.set(gt,it?!0:$),await Te()}),Y=j.default,ot=ne(_);Y&&"fetch"in Y&&(y.use(X),y.route(ot,Y));for(const at of Dr){const J=j[at];J&&(y.on(at,ot,X),y.on(at,ot,...J))}Y&&Array.isArray(Y)&&(y.get(ot,X),y.get(ot,...Y)),typeof Y=="function"&&(y.get(ot,X),y.get(ot,async at=>{const J=await Y(at);return J instanceof Response?J:at.render(J,j)}))}const nt=Ir(x,a);nt&&(w[x]=nt);for(const[_,j]of Object.entries(w))new RegExp(`^${_}`).test(x)&&j&&y.onError(j);let H=s(x);n.route(H,y)}for(const E of b.reverse()){const x=Object.entries(E)[0][0],O=new Ht;$r(O,x,c);const y=s(x);n.route(y,O)}return n};function $r(t,e,r){for(const[s,n]of Object.entries(r))if(e===s){const i=n[Pr];if(i){const c=i.default;i[gt]&&t.use("*",(a,h)=>(a.set(gt,!0),h())),t.get("*",a=>(a.status(404),c(a)))}}}function Ir(t,e){for(const[r,s]of Object.entries(e))if(t===r){const n=s[Sr];if(n){const i=n.default;if(i)return async(l,a)=>{const h=n[gt];return h&&a.set(gt,h),a.status(500),i(l,a)}}}}const Cr=t=>Ar({root:"/app/routes",NOT_FOUND:Object.assign({}),ERROR:Object.assign({}),RENDERER:Object.assign({}),MIDDLEWARE:Object.assign({}),ROUTES:Object.assign({})}),Vt=Cr();Vt.get("/",t=>t.html(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Honox - Vue 3</title>
            <link rel="stylesheet" href="/static/style.css">
        </head>
        <body>
            <div id="app"></div>
            <script type="module" src="/static/main.js"><\/script>
        </body>
        </html>
     `));Vt.use("/static/*",Ge({root:"./dist"}));const ie=new Ht,Nr=Object.assign({"/app/server.ts":Vt});let Fe=!1;for(const[,t]of Object.entries(Nr))t&&(ie.route("/",t),ie.notFound(e=>{let r;try{r=e.executionCtx}catch{}return t.fetch(e.req.raw,e.env,r)}),Fe=!0);if(!Fe)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{ie as default};
//# sourceMappingURL=index.js.map
