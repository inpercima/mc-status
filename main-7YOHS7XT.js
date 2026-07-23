var QE=Object.defineProperty,JE=Object.defineProperties;var eC=Object.getOwnPropertyDescriptors;var Js=Object.getOwnPropertySymbols;var Jm=Object.prototype.hasOwnProperty,ep=Object.prototype.propertyIsEnumerable;var Qm=(e,n,t)=>n in e?QE(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,y=(e,n)=>{for(var t in n||={})Jm.call(n,t)&&Qm(e,t,n[t]);if(Js)for(var t of Js(n))ep.call(n,t)&&Qm(e,t,n[t]);return e},U=(e,n)=>JE(e,eC(n));var wd=(e,n)=>{var t={};for(var r in e)Jm.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Js)for(var r of Js(e))n.indexOf(r)<0&&ep.call(e,r)&&(t[r]=e[r]);return t};var Ke=null,ea=!1,Er=1,tC=null,xe=Symbol("SIGNAL");function R(e){let n=Ke;return Ke=e,n}function ta(){return Ke}var jn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Hn(e){if(ea)throw new Error("");if(Ke===null)return;Ke.consumerOnSignalRead(e);let n=Ke.producersTail;if(n!==void 0&&n.producer===e)return;let t,r=Ke.recomputing;if(r&&(t=n!==void 0?n.nextProducer:Ke.producers,t!==void 0&&t.producer===e)){Ke.producersTail=t,t.lastReadVersion=e.version,t.knownValidAtEpoch=Er;return}let i=e.consumersTail;if(i!==void 0&&i.consumer===Ke&&(!r||i.knownValidAtEpoch===Er))return;let o=vi(Ke),s={producer:e,consumer:Ke,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:Er,lastReadVersion:e.version,nextConsumer:void 0};Ke.producersTail=s,n!==void 0?n.nextProducer=s:Ke.producers=s,o&&ip(e,s)}function tp(){Er++}function Ir(e){if(!(vi(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Er)){if(!e.producerMustRecompute(e)&&!gi(e)){pi(e);return}e.producerRecomputeValue(e),pi(e)}}function Id(e){if(e.consumers===void 0)return;let n=ea;ea=!0;try{for(let t=e.consumers;t!==void 0;t=t.nextConsumer){let r=t.consumer;r.dirty||nC(r)}}finally{ea=n}}function xd(){return Ke?.consumerAllowSignalWrites!==!1}function nC(e){e.dirty=!0,Id(e),e.consumerMarkedDirty?.(e)}function pi(e){e.dirty=!1,e.lastCleanEpoch=Er}function bn(e){return e&&np(e),R(e)}function np(e){if(e.producersTail?.knownValidAtEpoch===Er){let n=e.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}e.producersTail=void 0,e.recomputing=!0}function Un(e,n){R(n),e&&rp(e)}function rp(e){e.recomputing=!1;let n=e.producersTail,t=n!==void 0?n.nextProducer:e.producers;if(t!==void 0){if(vi(e))do t=Md(t);while(t!==void 0);n!==void 0?n.nextProducer=void 0:e.producers=void 0}}function gi(e){for(let n=e.producers;n!==void 0;n=n.nextProducer){let t=n.producer,r=n.lastReadVersion;if(r!==t.version||(Ir(t),r!==t.version))return!0}return!1}function zn(e){if(vi(e)){let n=e.producers;for(;n!==void 0;)n=Md(n)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function ip(e,n){let t=e.consumersTail,r=vi(e);if(t!==void 0?(n.nextConsumer=t.nextConsumer,t.nextConsumer=n):(n.nextConsumer=void 0,e.consumers=n),n.prevConsumer=t,e.consumersTail=n,!r)for(let i=e.producers;i!==void 0;i=i.nextProducer)ip(i.producer,i)}function Md(e){let n=e.producer,t=e.nextProducer,r=e.nextConsumer,i=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!vi(n)){let o=n.producers;for(;o!==void 0;)o=Md(o)}return t}function vi(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function yo(e){tC?.(e)}function _o(e,n){return Object.is(e,n)}function bo(e,n){let t=Object.create(rC);t.computation=e,n!==void 0&&(t.equal=n);let r=()=>{if(Ir(t),Hn(t),t.value===nn)throw t.error;return t.value};return r[xe]=t,yo(t),r}var Cr=Symbol("UNSET"),wr=Symbol("COMPUTING"),nn=Symbol("ERRORED"),rC=U(y({},jn),{value:Cr,dirty:!0,error:null,equal:_o,kind:"computed",producerMustRecompute(e){return e.value===Cr||e.value===wr},producerRecomputeValue(e){if(e.value===wr)throw new Error("");let n=e.value;e.value=wr;let t=bn(e),r,i=!1;try{r=e.computation(),R(null),i=n!==Cr&&n!==nn&&r!==nn&&e.equal(n,r)}catch(o){r=nn,e.error=o}finally{Un(e,t)}if(i){e.value=n;return}e.value=r,e.version++}});function iC(){throw new Error}var op=iC;function sp(e){op(e)}function Sd(e){op=e}var oC=null;function Td(e,n){let t=Object.create(Do);t.value=e,n!==void 0&&(t.equal=n);let r=()=>ap(t);return r[xe]=t,yo(t),[r,s=>xr(t,s),s=>na(t,s)]}function ap(e){return Hn(e),e.value}function xr(e,n){xd()||sp(e),e.equal(e.value,n)||(e.value=n,sC(e))}function na(e,n){xd()||sp(e),xr(e,n(e.value))}var Do=U(y({},jn),{equal:_o,value:void 0,kind:"signal"});function sC(e){e.version++,tp(),Id(e),oC?.(e)}var Ad=U(y({},jn),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Nd(e){if(e.dirty=!1,e.version>0&&!gi(e))return;e.version++;let n=bn(e);try{e.cleanup(),e.fn()}finally{Un(e,n)}}var Rd;function ra(){return Rd}function rn(e){let n=Rd;return Rd=e,n}var lp=Symbol("NotFound");function yi(e){return e===lp||e?.name==="\u0275NotFound"}function Od(e,n,t){let r=Object.create(aC);r.source=e,r.computation=n,t!=null&&(r.equal=t);let o=()=>{if(Ir(r),Hn(r),r.value===nn)throw r.error;return r.value};return o[xe]=r,yo(r),o}function cp(e,n){Ir(e),xr(e,n),pi(e)}function dp(e,n){if(Ir(e),e.value===nn)throw e.error;na(e,n),pi(e)}var aC=U(y({},jn),{value:Cr,dirty:!0,error:null,equal:_o,kind:"linkedSignal",producerMustRecompute(e){return e.value===Cr||e.value===wr},producerRecomputeValue(e){if(e.value===wr)throw new Error("");let n=e.value;e.value=wr;let t=bn(e),r,i=!1;try{let o=e.source(),s=n!==Cr&&n!==nn,a=s?{source:e.sourceValue,value:n}:void 0;r=e.computation(o,a),e.sourceValue=o,R(null),i=s&&r!==nn&&e.equal(n,r)}catch(o){r=nn,e.error=o}finally{Un(e,t)}if(i){e.value=n;return}e.value=r,e.version++}});function up(e){let n=R(null);try{return e()}finally{R(n)}}function H(e){return typeof e=="function"}function ia(e){let t=e(r=>{Error.call(r),r.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var oa=ia(e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Mr(e,n){if(e){let t=e.indexOf(n);0<=t&&e.splice(t,1)}}var Z=class e{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:r}=this;if(H(r))try{r()}catch(o){n=o instanceof oa?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{fp(o)}catch(s){n=n??[],s instanceof oa?n=[...n,...s.errors]:n.push(s)}}if(n)throw new oa(n)}}add(n){var t;if(n&&n!==this)if(this.closed)fp(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}}_hasParent(n){let{_parentage:t}=this;return t===n||Array.isArray(t)&&t.includes(n)}_addParent(n){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n}_removeParent(n){let{_parentage:t}=this;t===n?this._parentage=null:Array.isArray(t)&&Mr(t,n)}remove(n){let{_finalizers:t}=this;t&&Mr(t,n),n instanceof e&&n._removeParent(this)}};Z.EMPTY=(()=>{let e=new Z;return e.closed=!0,e})();var kd=Z.EMPTY;function sa(e){return e instanceof Z||e&&"closed"in e&&H(e.remove)&&H(e.add)&&H(e.unsubscribe)}function fp(e){H(e)?e():e.unsubscribe()}var Ut={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var _i={setTimeout(e,n,...t){let{delegate:r}=_i;return r?.setTimeout?r.setTimeout(e,n,...t):setTimeout(e,n,...t)},clearTimeout(e){let{delegate:n}=_i;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function aa(e){_i.setTimeout(()=>{let{onUnhandledError:n}=Ut;if(n)n(e);else throw e})}function Eo(){}var hp=Fd("C",void 0,void 0);function mp(e){return Fd("E",void 0,e)}function pp(e){return Fd("N",e,void 0)}function Fd(e,n,t){return{kind:e,value:n,error:t}}var Sr=null;function bi(e){if(Ut.useDeprecatedSynchronousErrorHandling){let n=!Sr;if(n&&(Sr={errorThrown:!1,error:null}),e(),n){let{errorThrown:t,error:r}=Sr;if(Sr=null,t)throw r}}else e()}function gp(e){Ut.useDeprecatedSynchronousErrorHandling&&Sr&&(Sr.errorThrown=!0,Sr.error=e)}var Tr=class extends Z{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,sa(n)&&n.add(this)):this.destination=dC}static create(n,t,r){return new Dn(n,t,r)}next(n){this.isStopped?Ld(pp(n),this):this._next(n)}error(n){this.isStopped?Ld(mp(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Ld(hp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},lC=Function.prototype.bind;function Pd(e,n){return lC.call(e,n)}var Vd=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:t}=this;if(t.next)try{t.next(n)}catch(r){la(r)}}error(n){let{partialObserver:t}=this;if(t.error)try{t.error(n)}catch(r){la(r)}else la(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(t){la(t)}}},Dn=class extends Tr{constructor(n,t,r){super();let i;if(H(n)||!n)i={next:n??void 0,error:t??void 0,complete:r??void 0};else{let o;this&&Ut.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Pd(n.next,o),error:n.error&&Pd(n.error,o),complete:n.complete&&Pd(n.complete,o)}):i=n}this.destination=new Vd(i)}};function la(e){Ut.useDeprecatedSynchronousErrorHandling?gp(e):aa(e)}function cC(e){throw e}function Ld(e,n){let{onStoppedNotification:t}=Ut;t&&_i.setTimeout(()=>t(e,n))}var dC={closed:!0,next:Eo,error:cC,complete:Eo};var Di=typeof Symbol=="function"&&Symbol.observable||"@@observable";function zt(e){return e}function vp(e){return e.length===0?zt:e.length===1?e[0]:function(t){return e.reduce((r,i)=>i(r),t)}}var z=(()=>{class e{constructor(t){t&&(this._subscribe=t)}lift(t){let r=new e;return r.source=this,r.operator=t,r}subscribe(t,r,i){let o=fC(t)?t:new Dn(t,r,i);return bi(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(t){try{return this._subscribe(t)}catch(r){t.error(r)}}forEach(t,r){return r=yp(r),new r((i,o)=>{let s=new Dn({next:a=>{try{t(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:i});this.subscribe(s)})}_subscribe(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)}[Di](){return this}pipe(...t){return vp(t)(this)}toPromise(t){return t=yp(t),new t((r,i)=>{let o;this.subscribe(s=>o=s,s=>i(s),()=>r(o))})}}return e.create=n=>new e(n),e})();function yp(e){var n;return(n=e??Ut.Promise)!==null&&n!==void 0?n:Promise}function uC(e){return e&&H(e.next)&&H(e.error)&&H(e.complete)}function fC(e){return e&&e instanceof Tr||uC(e)&&sa(e)}function hC(e){return H(e?.lift)}function Y(e){return n=>{if(hC(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function X(e,n,t,r,i){return new Bd(e,n,t,r,i)}var Bd=class extends Tr{constructor(n,t,r,i,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=t?function(a){try{t(a)}catch(l){n.error(l)}}:super._next,this._error=i?function(a){try{i(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var _p=ia(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var E=(()=>{class e extends z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let r=new ca(this,this);return r.operator=t,r}_throwIfClosed(){if(this.closed)throw new _p}next(t){bi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let r of this.currentObservers)r.next(t)}})}error(t){bi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:r}=this;for(;r.length;)r.shift().error(t)}})}complete(){bi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:r,isStopped:i,observers:o}=this;return r||i?kd:(this.currentObservers=null,o.push(t),new Z(()=>{this.currentObservers=null,Mr(o,t)}))}_checkFinalizedStatuses(t){let{hasError:r,thrownError:i,isStopped:o}=this;r?t.error(i):o&&t.complete()}asObservable(){let t=new z;return t.source=this,t}}return e.create=(n,t)=>new ca(n,t),e})(),ca=class extends E{constructor(n,t){super(),this.destination=n,this.source=t}next(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.next)===null||r===void 0||r.call(t,n)}error(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.error)===null||r===void 0||r.call(t,n)}complete(){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||t===void 0||t.call(n)}_subscribe(n){var t,r;return(r=(t=this.source)===null||t===void 0?void 0:t.subscribe(n))!==null&&r!==void 0?r:kd}};var Ar=class extends E{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let t=super._subscribe(n);return!t.closed&&n.next(this._value),t}getValue(){let{hasError:n,thrownError:t,_value:r}=this;if(n)throw t;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var Co={now(){return(Co.delegate||Date).now()},delegate:void 0};var $n=class extends E{constructor(n=1/0,t=1/0,r=Co){super(),this._bufferSize=n,this._windowTime=t,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,t)}next(n){let{isStopped:t,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:s}=this;t||(r.push(n),!i&&r.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let t=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let s=0;s<o.length&&!n.closed;s+=r?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),t}_trimBuffer(){let{_bufferSize:n,_timestampProvider:t,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let s=t.now(),a=0;for(let l=1;l<r.length&&r[l]<=s;l+=2)a=l;a&&r.splice(0,a+1)}}};var da=class extends Z{constructor(n,t){super()}schedule(n,t=0){return this}};var wo={setInterval(e,n,...t){let{delegate:r}=wo;return r?.setInterval?r.setInterval(e,n,...t):setInterval(e,n,...t)},clearInterval(e){let{delegate:n}=wo;return(n?.clearInterval||clearInterval)(e)},delegate:void 0};var ua=class extends da{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,t)),this.pending=!0,this.delay=t,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,t),this}requestAsyncId(n,t,r=0){return wo.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,t,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return t;t!=null&&wo.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,t);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,Mr(r,this),n!=null&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}};var Ei=class e{constructor(n,t=e.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,r){return new this.schedulerActionCtor(this,n).schedule(r,t)}};Ei.now=Co.now;var fa=class extends Ei{constructor(n,t=Ei.now){super(n,t),this.actions=[],this._active=!1}flush(n){let{actions:t}=this;if(this._active){t.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=t.shift());if(this._active=!1,r){for(;n=t.shift();)n.unsubscribe();throw r}}};var Io=new fa(ua),bp=Io;var Nr=new z(e=>e.complete());function ha(e){return e&&H(e.schedule)}function jd(e){return e[e.length-1]}function ma(e){return H(jd(e))?e.pop():void 0}function on(e){return ha(jd(e))?e.pop():void 0}function Dp(e,n){return typeof jd(e)=="number"?e.pop():n}function Cp(e,n,t,r){function i(o){return o instanceof t?o:new t(function(s){s(o)})}return new(t||(t=Promise))(function(o,s){function a(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):i(d.value).then(a,l)}c((r=r.apply(e,n||[])).next())})}function Ep(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Rr(e){return this instanceof Rr?(this.v=e,this):new Rr(e)}function wp(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),i[Symbol.asyncIterator]=function(){return this},i;function s(h){return function(p){return Promise.resolve(p).then(h,f)}}function a(h,p){r[h]&&(i[h]=function(v){return new Promise(function(b,D){o.push([h,v,b,D])>1||l(h,v)})},p&&(i[h]=p(i[h])))}function l(h,p){try{c(r[h](p))}catch(v){m(o[0][3],v)}}function c(h){h.value instanceof Rr?Promise.resolve(h.value.v).then(d,f):m(o[0][2],h)}function d(h){l("next",h)}function f(h){l("throw",h)}function m(h,p){h(p),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Ip(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Ep=="function"?Ep(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(s){return new Promise(function(a,l){s=e[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var pa=e=>e&&typeof e.length=="number"&&typeof e!="function";function ga(e){return H(e?.then)}function va(e){return H(e[Di])}function ya(e){return Symbol.asyncIterator&&H(e?.[Symbol.asyncIterator])}function _a(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function mC(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var ba=mC();function Da(e){return H(e?.[ba])}function Ea(e){return wp(this,arguments,function*(){let t=e.getReader();try{for(;;){let{value:r,done:i}=yield Rr(t.read());if(i)return yield Rr(void 0);yield yield Rr(r)}}finally{t.releaseLock()}})}function Ca(e){return H(e?.getReader)}function le(e){if(e instanceof z)return e;if(e!=null){if(va(e))return pC(e);if(pa(e))return gC(e);if(ga(e))return vC(e);if(ya(e))return xp(e);if(Da(e))return yC(e);if(Ca(e))return _C(e)}throw _a(e)}function pC(e){return new z(n=>{let t=e[Di]();if(H(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function gC(e){return new z(n=>{for(let t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function vC(e){return new z(n=>{e.then(t=>{n.closed||(n.next(t),n.complete())},t=>n.error(t)).then(null,aa)})}function yC(e){return new z(n=>{for(let t of e)if(n.next(t),n.closed)return;n.complete()})}function xp(e){return new z(n=>{bC(e,n).catch(t=>n.error(t))})}function _C(e){return xp(Ea(e))}function bC(e,n){var t,r,i,o;return Cp(this,void 0,void 0,function*(){try{for(t=Ip(e);r=yield t.next(),!r.done;){let s=r.value;if(n.next(s),n.closed)return}}catch(s){i={error:s}}finally{try{r&&!r.done&&(o=t.return)&&(yield o.call(t))}finally{if(i)throw i.error}}n.complete()})}function rt(e,n,t,r=0,i=!1){let o=n.schedule(function(){t(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function wa(e,n=0){return Y((t,r)=>{t.subscribe(X(r,i=>rt(r,e,()=>r.next(i),n),()=>rt(r,e,()=>r.complete(),n),i=>rt(r,e,()=>r.error(i),n)))})}function Ia(e,n=0){return Y((t,r)=>{r.add(e.schedule(()=>t.subscribe(r),n))})}function Mp(e,n){return le(e).pipe(Ia(n),wa(n))}function Sp(e,n){return le(e).pipe(Ia(n),wa(n))}function Tp(e,n){return new z(t=>{let r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function Ap(e,n){return new z(t=>{let r;return rt(t,n,()=>{r=e[ba](),rt(t,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(s){t.error(s);return}o?t.complete():t.next(i)},0,!0)}),()=>H(r?.return)&&r.return()})}function xa(e,n){if(!e)throw new Error("Iterable cannot be null");return new z(t=>{rt(t,n,()=>{let r=e[Symbol.asyncIterator]();rt(t,n,()=>{r.next().then(i=>{i.done?t.complete():t.next(i.value)})},0,!0)})})}function Np(e,n){return xa(Ea(e),n)}function Rp(e,n){if(e!=null){if(va(e))return Mp(e,n);if(pa(e))return Tp(e,n);if(ga(e))return Sp(e,n);if(ya(e))return xa(e,n);if(Da(e))return Ap(e,n);if(Ca(e))return Np(e,n)}throw _a(e)}function Ct(e,n){return n?Rp(e,n):le(e)}function We(...e){let n=on(e);return Ct(e,n)}function Hd(e,n){let t=H(e)?e:()=>e,r=i=>i.error(t());return new z(n?i=>n.schedule(r,0,i):r)}function Op(e){return e instanceof Date&&!isNaN(e)}function ce(e,n){return Y((t,r)=>{let i=0;t.subscribe(X(r,o=>{r.next(e.call(n,o,i++))}))})}var{isArray:DC}=Array;function EC(e,n){return DC(n)?e(...n):e(n)}function Ma(e){return ce(n=>EC(e,n))}var{isArray:CC}=Array,{getPrototypeOf:wC,prototype:IC,keys:xC}=Object;function Sa(e){if(e.length===1){let n=e[0];if(CC(n))return{args:n,keys:null};if(MC(n)){let t=xC(n);return{args:t.map(r=>n[r]),keys:t}}}return{args:e,keys:null}}function MC(e){return e&&typeof e=="object"&&wC(e)===IC}function Ta(e,n){return e.reduce((t,r,i)=>(t[r]=n[i],t),{})}function Ud(...e){let n=on(e),t=ma(e),{args:r,keys:i}=Sa(e);if(r.length===0)return Ct([],n);let o=new z(SC(r,n,i?s=>Ta(i,s):zt));return t?o.pipe(Ma(t)):o}function SC(e,n,t=zt){return r=>{kp(n,()=>{let{length:i}=e,o=new Array(i),s=i,a=i;for(let l=0;l<i;l++)kp(n,()=>{let c=Ct(e[l],n),d=!1;c.subscribe(X(r,f=>{o[l]=f,d||(d=!0,a--),a||r.next(t(o.slice()))},()=>{--s||r.complete()}))},r)},r)}}function kp(e,n,t){e?rt(t,e,n):n()}function Fp(e,n,t,r,i,o,s,a){let l=[],c=0,d=0,f=!1,m=()=>{f&&!l.length&&!c&&n.complete()},h=v=>c<r?p(v):l.push(v),p=v=>{o&&n.next(v),c++;let b=!1;le(t(v,d++)).subscribe(X(n,D=>{i?.(D),o?h(D):n.next(D)},()=>{b=!0},void 0,()=>{if(b)try{for(c--;l.length&&c<r;){let D=l.shift();s?rt(n,s,()=>p(D)):p(D)}m()}catch(D){n.error(D)}}))};return e.subscribe(X(n,h,()=>{f=!0,m()})),()=>{a?.()}}function Ci(e,n,t=1/0){return H(n)?Ci((r,i)=>ce((o,s)=>n(r,o,i,s))(le(e(r,i))),t):(typeof n=="number"&&(t=n),Y((r,i)=>Fp(r,i,e,t)))}function Aa(e=1/0){return Ci(zt,e)}function Pp(){return Aa(1)}function wi(...e){return Pp()(Ct(e,on(e)))}function xo(e){return new z(n=>{le(e()).subscribe(n)})}function Mo(...e){let n=ma(e),{args:t,keys:r}=Sa(e),i=new z(o=>{let{length:s}=t;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let f=!1;le(t[d]).subscribe(X(o,m=>{f||(f=!0,c--),a[d]=m},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Ta(r,a):a),o.complete())}))}});return n?i.pipe(Ma(n)):i}function Lp(e=0,n,t=bp){let r=-1;return n!=null&&(ha(n)?t=n:r=n),new z(i=>{let o=Op(e)?+e-t.now():e;o<0&&(o=0);let s=0;return t.schedule(function(){i.closed||(i.next(s++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function En(...e){let n=on(e),t=Dp(e,1/0),r=e;return r.length?r.length===1?le(r[0]):Aa(t)(Ct(r,n)):Nr}function Ce(e,n){return Y((t,r)=>{let i=0;t.subscribe(X(r,o=>e.call(n,o,i++)&&r.next(o)))})}function Vp(e){return Y((n,t)=>{let r=!1,i=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,t.next(c)}s&&t.complete()},l=()=>{o=null,s&&t.complete()};n.subscribe(X(t,c=>{r=!0,i=c,o||le(e(c)).subscribe(o=X(t,a,l))},()=>{s=!0,(!r||!o||o.closed)&&t.complete()}))})}function Na(e,n=Io){return Vp(()=>Lp(e,n))}function Ra(e){return Y((n,t)=>{let r=null,i=!1,o;r=n.subscribe(X(t,void 0,void 0,s=>{o=le(e(s,Ra(e)(n))),r?(r.unsubscribe(),r=null,o.subscribe(t)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(t))})}function zd(e,n){return H(n)?Ci(e,n,1):Ci(e,1)}function So(e,n=Io){return Y((t,r)=>{let i=null,o=null,s=null,a=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=s+e,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}a()}t.subscribe(X(r,c=>{o=c,s=n.now(),i||(i=n.schedule(l,e),r.add(i))},()=>{a(),r.complete()},void 0,()=>{o=i=null}))})}function mt(e){return e<=0?()=>Nr:Y((n,t)=>{let r=0;n.subscribe(X(t,i=>{++r<=e&&(t.next(i),e<=r&&t.complete())}))})}function Oa(e,n=zt){return e=e??TC,Y((t,r)=>{let i,o=!0;t.subscribe(X(r,s=>{let a=n(s);(o||!e(i,a))&&(o=!1,i=a,r.next(s))}))})}function TC(e,n){return e===n}function To(e){return Y((n,t)=>{try{n.subscribe(t)}finally{t.add(e)}})}function ka(){return Y((e,n)=>{let t,r=!1;e.subscribe(X(n,i=>{let o=t;t=i,r&&n.next([o,i]),r=!0}))})}function Ao(e={}){let{connector:n=()=>new E,resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=e;return o=>{let s,a,l,c=0,d=!1,f=!1,m=()=>{a?.unsubscribe(),a=void 0},h=()=>{m(),s=l=void 0,d=f=!1},p=()=>{let v=s;h(),v?.unsubscribe()};return Y((v,b)=>{c++,!f&&!d&&m();let D=l=l??n();b.add(()=>{c--,c===0&&!f&&!d&&(a=$d(p,i))}),D.subscribe(b),!s&&c>0&&(s=new Dn({next:oe=>D.next(oe),error:oe=>{f=!0,m(),a=$d(h,t,oe),D.error(oe)},complete:()=>{d=!0,m(),a=$d(h,r),D.complete()}}),le(v).subscribe(s))})(o)}}function $d(e,n,...t){if(n===!0){e();return}if(n===!1)return;let r=new Dn({next:()=>{r.unsubscribe(),e()}});return le(n(...t)).subscribe(r)}function Fa(e,n,t){let r,i=!1;return e&&typeof e=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:t}=e:r=e??1/0,Ao({connector:()=>new $n(r,n,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function No(e){return Ce((n,t)=>e<=t)}function it(...e){let n=on(e);return Y((t,r)=>{(n?wi(e,t,n):wi(e,t)).subscribe(r)})}function Ii(e,n){return Y((t,r)=>{let i=null,o=0,s=!1,a=()=>s&&!i&&r.complete();t.subscribe(X(r,l=>{i?.unsubscribe();let c=0,d=o++;le(e(l,d)).subscribe(i=X(r,f=>r.next(n?n(l,f,d,c++):f),()=>{i=null,a()}))},()=>{s=!0,a()}))})}function wt(e){return Y((n,t)=>{le(e).subscribe(X(t,()=>t.complete(),Eo)),!t.closed&&n.subscribe(t)})}function Or(e,n,t){let r=H(e)||n||t?{next:e,error:n,complete:t}:e;return r?Y((i,o)=>{var s;(s=r.subscribe)===null||s===void 0||s.call(r);let a=!0;i.subscribe(X(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):zt}var Ua="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",_=class extends Error{code;constructor(n,t){super(qn(n,t)),this.code=n}};function AC(e){return`NG0${Math.abs(e)}`}function qn(e,n){return`${AC(e)}${n?": "+n:""}`}function se(e){for(let n in e)if(e[n]===se)return n;throw Error("")}function zp(e,n){for(let t in n)n.hasOwnProperty(t)&&!e.hasOwnProperty(t)&&(e[t]=n[t])}function za(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(za).join(", ")}]`;if(e==null)return""+e;let n=e.overriddenName||e.name;if(n)return`${n}`;let t=e.toString();if(t==null)return""+t;let r=t.indexOf(`
`);return r>=0?t.slice(0,r):t}function $a(e,n){return e?n?`${e} ${n}`:e:n||""}var NC=se({__forward_ref__:se});function $t(e){return e.__forward_ref__=$t,e}function Le(e){return ru(e)?e():e}function ru(e){return typeof e=="function"&&e.hasOwnProperty(NC)&&e.__forward_ref__===$t}function G(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function L(e){return{providers:e.providers||[],imports:e.imports||[]}}function Ga(e){return RC(e,Wa)}function RC(e,n){return e.hasOwnProperty(n)&&e[n]||null}function OC(e){let n=e?.[Wa]??null;return n||null}function Wd(e){return e&&e.hasOwnProperty(La)?e[La]:null}var Wa=se({\u0275prov:se}),La=se({\u0275inj:se}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,t){this._desc=n,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=G({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function iu(e){return e&&!!e.\u0275providers}var ou=se({\u0275cmp:se}),su=se({\u0275dir:se}),au=se({\u0275pipe:se});var Oo=se({\u0275fac:se}),Vr=se({__NG_ELEMENT_ID__:se}),Bp=se({__NG_ENV_ID__:se});function Yn(e){return lu(e,"@Component"),e[ou]||null}function qa(e){return lu(e,"@Directive"),e[su]||null}function $p(e){return lu(e,"@Pipe"),e[au]||null}function lu(e,n){if(e==null)throw new _(-919,!1)}function Lo(e){return typeof e=="string"?e:e==null?"":String(e)}var Gp=se({ngErrorCode:se}),kC=se({ngErrorMessage:se}),FC=se({ngTokenPath:se});function cu(e,n){return Wp("",-200,n)}function Ya(e,n){throw new _(-201,!1)}function Wp(e,n,t){let r=new _(n,e);return r[Gp]=n,r[kC]=e,t&&(r[FC]=t),r}function PC(e){return e[Gp]}var qd;function qp(){return qd}function Qe(e){let n=qd;return qd=e,n}function du(e,n,t){let r=Ga(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(t&8)return null;if(n!==void 0)return n;Ya(e,"")}var an=globalThis;var LC={},kr=LC,VC="__NG_DI_FLAG__",Yd=class{injector;constructor(n){this.injector=n}retrieve(n,t){let r=Fr(t)||0;try{return this.injector.get(n,r&8?null:kr,r)}catch(i){if(yi(i))return i;throw i}}};function BC(e,n=0){let t=ra();if(t===void 0)throw new _(-203,!1);if(t===null)return du(e,void 0,n);{let r=jC(n),i=t.retrieve(e,r);if(yi(i)){if(r.optional)return null;throw i}return i}}function S(e,n=0){return(qp()||BC)(Le(e),n)}function u(e,n){return S(e,Fr(n))}function Fr(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function jC(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function Zd(e){let n=[];for(let t=0;t<e.length;t++){let r=Le(e[t]);if(Array.isArray(r)){if(r.length===0)throw new _(900,!1);let i,o=0;for(let s=0;s<r.length;s++){let a=r[s],l=HC(a);typeof l=="number"?l===-1?i=a.token:o|=l:i=a}n.push(S(i,o))}else n.push(S(r))}return n}function HC(e){return e[VC]}function Gn(e,n){let t=e.hasOwnProperty(Oo);return t?e[Oo]:null}function Yp(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],o=n[r];if(t&&(i=t(i),o=t(o)),o!==i)return!1}return!0}function Zp(e){return e.flat(Number.POSITIVE_INFINITY)}function Za(e,n){e.forEach(t=>Array.isArray(t)?Za(t,n):n(t))}function uu(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function Vo(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function Xp(e,n){let t=[];for(let r=0;r<e;r++)t.push(n);return t}function Kp(e,n,t,r){let i=e.length;if(i==n)e.push(t,r);else if(i===1)e.push(r,e[0]),e[0]=t;else{for(i--,e.push(e[i-1],e[i]);i>n;){let o=i-2;e[i]=e[o],i--}e[n]=t,e[n+1]=r}}function Xa(e,n,t){let r=Si(e,n);return r>=0?e[r|1]=t:(r=~r,Kp(e,r,n,t)),r}function Ka(e,n){let t=Si(e,n);if(t>=0)return e[t|1]}function Si(e,n){return UC(e,n,1)}function UC(e,n,t){let r=0,i=e.length>>t;for(;i!==r;){let o=r+(i-r>>1),s=e[o<<t];if(n===s)return o<<t;s>n?i=o:r=o+1}return~(i<<t)}var Zn={},qe=[],Br=new g(""),Bo=new g("",-1),fu=new g(""),Mi=class{get(n,t=kr){if(t===kr){let i=Wp("",-201);throw i.name="\u0275NotFound",i}return t}};function Xn(e){return{\u0275providers:e}}function Qp(e){return Xn([{provide:Br,multi:!0,useValue:e}])}function Jp(...e){return{\u0275providers:hu(!0,e),\u0275fromNgModule:!0}}function hu(e,...n){let t=[],r=new Set,i,o=s=>{t.push(s)};return Za(n,s=>{let a=s;Va(a,o,[],r)&&(i||=[],i.push(a))}),i!==void 0&&eg(i,o),t}function eg(e,n){for(let t=0;t<e.length;t++){let{ngModule:r,providers:i}=e[t];mu(i,o=>{n(o,r)})}}function Va(e,n,t,r){if(e=Le(e),!e)return!1;let i=null,o=Wd(e),s=!o&&Yn(e);if(!o&&!s){let l=e.ngModule;if(o=Wd(l),o)i=l;else return!1}else{if(s&&!s.standalone)return!1;i=e}let a=r.has(i);if(s){if(a)return!1;if(r.add(i),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)Va(c,n,t,r)}}else if(o){if(o.imports!=null&&!a){r.add(i);let c;Za(o.imports,d=>{Va(d,n,t,r)&&(c||=[],c.push(d))}),c!==void 0&&eg(c,n)}if(!a){let c=Gn(i)||(()=>new i);n({provide:i,useFactory:c,deps:qe},i),n({provide:fu,useValue:i,multi:!0},i),n({provide:Br,useValue:()=>S(i),multi:!0},i)}let l=o.providers;if(l!=null&&!a){let c=e;mu(l,d=>{n(d,c)})}}else return!1;return i!==e&&e.providers!==void 0}function mu(e,n){for(let t of e)iu(t)&&(t=t.\u0275providers),Array.isArray(t)?mu(t,n):n(t)}var zC=se({provide:String,useValue:se});function tg(e){return e!==null&&typeof e=="object"&&zC in e}function $C(e){return!!(e&&e.useExisting)}function GC(e){return!!(e&&e.useFactory)}function Pr(e){return typeof e=="function"}function ng(e){return!!e.useClass}var jo=new g(""),Pa={},jp={},Gd;function Ti(){return Gd===void 0&&(Gd=new Mi),Gd}var Me=class{},Lr=class extends Me{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,t,r,i){super(),this.parent=t,this.source=r,this.scopes=i,Kd(n,s=>this.processProvider(s)),this.records.set(Bo,xi(void 0,this)),i.has("environment")&&this.records.set(Me,xi(void 0,this));let o=this.records.get(jo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(fu,qe,{self:!0}))}retrieve(n,t){let r=Fr(t)||0;try{return this.get(n,kr,r)}catch(i){if(yi(i))return i;throw i}}destroy(){Ro(this),this._destroyed=!0;let n=R(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of t)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),R(n)}}onDestroy(n){return Ro(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ro(this);let t=rn(this),r=Qe(void 0),i;try{return n()}finally{rn(t),Qe(r)}}get(n,t=kr,r){if(Ro(this),n.hasOwnProperty(Bp))return n[Bp](this);let i=Fr(r),o,s=rn(this),a=Qe(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=XC(n)&&Ga(n);d&&this.injectableDefInScope(d)?c=xi(Xd(n),Pa):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Ti():this.parent;return t=i&8&&t===kr?null:t,l.get(n,t)}catch(l){let c=PC(l);throw c===-200||c===-201?new _(c,null):l}finally{Qe(a),rn(s)}}resolveInjectorInitializers(){let n=R(null),t=rn(this),r=Qe(void 0),i;try{let o=this.get(Br,qe,{self:!0});for(let s of o)s()}finally{rn(t),Qe(r),R(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Le(n);let t=Pr(n)?n:Le(n&&n.provide),r=qC(n);if(!Pr(n)&&n.multi===!0){let i=this.records.get(t);i||(i=xi(void 0,Pa,!0),i.factory=()=>Zd(i.multi),this.records.set(t,i)),t=n,i.multi.push(n)}this.records.set(t,r)}hydrate(n,t,r){let i=R(null);try{if(t.value===jp)throw cu("");return t.value===Pa&&(t.value=jp,t.value=t.factory(void 0,r)),typeof t.value=="object"&&t.value&&ZC(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{R(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let t=Le(n.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(n){let t=this._onDestroyHooks.indexOf(n);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Xd(e){let n=Ga(e),t=n!==null?n.factory:Gn(e);if(t!==null)return t;if(e instanceof g)throw new _(-204,!1);if(e instanceof Function)return WC(e);throw new _(-204,!1)}function WC(e){if(e.length>0)throw new _(-204,!1);let t=OC(e);return t!==null?()=>t.factory(e):()=>new e}function qC(e){if(tg(e))return xi(void 0,e.useValue);{let n=pu(e);return xi(n,Pa)}}function pu(e,n,t){let r;if(Pr(e)){let i=Le(e);return Gn(i)||Xd(i)}else if(tg(e))r=()=>Le(e.useValue);else if(GC(e))r=()=>e.useFactory(...Zd(e.deps||[]));else if($C(e))r=(i,o)=>S(Le(e.useExisting),o!==void 0&&o&8?8:void 0);else{let i=Le(e&&(e.useClass||e.provide));if(YC(e))r=()=>new i(...Zd(e.deps));else return Gn(i)||Xd(i)}return r}function Ro(e){if(e.destroyed)throw new _(-205,!1)}function xi(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function YC(e){return!!e.deps}function ZC(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function XC(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function Kd(e,n){for(let t of e)Array.isArray(t)?Kd(t,n):t&&iu(t)?Kd(t.\u0275providers,n):n(t)}function Ai(e,n){let t;e instanceof Lr?(Ro(e),t=e):t=new Yd(e);let r,i=rn(t),o=Qe(void 0);try{return n()}finally{rn(i),Qe(o)}}function rg(){return qp()!==void 0||ra()!=null}var Gt=0,x=1,O=2,je=3,It=4,Ye=5,Ni=6,Ri=7,Ue=8,In=9,ln=10,ye=11,Oi=12,gu=13,Kn=14,ot=15,Qn=16,jr=17,cn=18,xn=19,vu=20,Cn=21,Qa=22,Wn=23,pt=24,Hr=25,Jn=26,be=27,ig=1;var er=7,Ho=8,Ur=9,ze=10;function Mn(e){return Array.isArray(e)&&typeof e[ig]=="object"}function xt(e){return Array.isArray(e)&&e[ig]===!0}function yu(e){return(e.flags&4)!==0}function Sn(e){return e.componentOffset>-1}function Uo(e){return(e.flags&1)===1}function Wt(e){return!!e.template}function ki(e){return(e[O]&512)!==0}function zr(e){return(e[O]&256)===256}var _u="svg",og="math";function Mt(e){for(;Array.isArray(e);)e=e[Gt];return e}function bu(e,n){return Mt(n[e])}function St(e,n){return Mt(n[e.index])}function Ja(e,n){return e.data[n]}function el(e,n){return e[n]}function zo(e,n,t,r){t>=e.data.length&&(e.data[t]=null,e.blueprint[t]=null),n[t]=r}function Tt(e,n){let t=n[e];return Mn(t)?t:t[Gt]}function sg(e){return(e[O]&4)===4}function tl(e){return(e[O]&128)===128}function ag(e){return xt(e[je])}function qt(e,n){return n==null?null:e[n]}function Du(e){e[jr]=0}function Eu(e){e[O]&1024||(e[O]|=1024,tl(e)&&$r(e))}function lg(e,n){for(;e>0;)n=n[Kn],e--;return n}function $o(e){return!!(e[O]&9216||e[pt]?.dirty)}function nl(e){e[ln].changeDetectionScheduler?.notify(8),e[O]&64&&(e[O]|=1024),$o(e)&&$r(e)}function $r(e){e[ln].changeDetectionScheduler?.notify(0);let n=wn(e);for(;n!==null&&!(n[O]&8192||(n[O]|=8192,!tl(n)));)n=wn(n)}function rl(e,n){if(zr(e))throw new _(911,!1);e[Cn]===null&&(e[Cn]=[]),e[Cn].push(n)}function cg(e,n){if(e[Cn]===null)return;let t=e[Cn].indexOf(n);t!==-1&&e[Cn].splice(t,1)}function wn(e){let n=e[je];return xt(n)?n[je]:n}function Cu(e){return e[Ri]??=[]}function wu(e){return e.cleanup??=[]}function dg(e,n,t,r){let i=Cu(n);i.push(t),e.firstCreatePass&&wu(e).push(r,i.length-1)}var j={lFrame:Eg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Qd=!1;function ug(){return j.lFrame.elementDepthCount}function fg(){j.lFrame.elementDepthCount++}function Iu(){j.lFrame.elementDepthCount--}function xu(){return j.bindingsEnabled}function Mu(){return j.skipHydrationRootTNode!==null}function Su(e){return j.skipHydrationRootTNode===e}function Tu(){j.skipHydrationRootTNode=null}function F(){return j.lFrame.lView}function he(){return j.lFrame.tView}function dn(e){return j.lFrame.contextLView=e,e[Ue]}function un(e){return j.lFrame.contextLView=null,e}function He(){let e=Au();for(;e!==null&&e.type===64;)e=e.parent;return e}function Au(){return j.lFrame.currentTNode}function hg(){let e=j.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}function Gr(e,n){let t=j.lFrame;t.currentTNode=e,t.isParent=n}function Nu(){return j.lFrame.isParent}function Ru(){j.lFrame.isParent=!1}function Ou(){return j.lFrame.contextLView}function ku(){return Qd}function ko(e){let n=Qd;return Qd=e,n}function mg(){let e=j.lFrame,n=e.bindingRootIndex;return n===-1&&(n=e.bindingRootIndex=e.tView.bindingStartIndex),n}function pg(){return j.lFrame.bindingIndex}function gg(e){return j.lFrame.bindingIndex=e}function Fi(){return j.lFrame.bindingIndex++}function il(e){let n=j.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function vg(){return j.lFrame.inI18n}function yg(e,n){let t=j.lFrame;t.bindingIndex=t.bindingRootIndex=e,ol(n)}function _g(){return j.lFrame.currentDirectiveIndex}function ol(e){j.lFrame.currentDirectiveIndex=e}function bg(e){let n=j.lFrame.currentDirectiveIndex;return n===-1?null:e[n]}function sl(){return j.lFrame.currentQueryIndex}function Go(e){j.lFrame.currentQueryIndex=e}function KC(e){let n=e[x];return n.type===2?n.declTNode:n.type===1?e[Ye]:null}function Fu(e,n,t){if(t&4){let i=n,o=e;for(;i=i.parent,i===null&&!(t&1);)if(i=KC(o),i===null||(o=o[Kn],i.type&10))break;if(i===null)return!1;n=i,e=o}let r=j.lFrame=Dg();return r.currentTNode=n,r.lView=e,!0}function al(e){let n=Dg(),t=e[x];j.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function Dg(){let e=j.lFrame,n=e===null?null:e.child;return n===null?Eg(e):n}function Eg(e){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=n),n}function Cg(){let e=j.lFrame;return j.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Pu=Cg;function ll(){let e=Cg();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function wg(e){return(j.lFrame.contextLView=lg(e,j.lFrame.contextLView))[Ue]}function fn(){return j.lFrame.selectedIndex}function tr(e){j.lFrame.selectedIndex=e}function Wo(){let e=j.lFrame;return Ja(e.tView,e.selectedIndex)}function cl(){j.lFrame.currentNamespace=_u}function Lu(){return j.lFrame.currentNamespace}var Ig=!0;function dl(){return Ig}function ul(e){Ig=e}function Jd(e,n=null,t=null,r){let i=xg(e,n,t,r);return i.resolveInjectorInitializers(),i}function xg(e,n=null,t=null,r,i=new Set){let o=[t||qe,Jp(e)],s;return new Lr(o,n||Ti(),s||null,i)}var k=class e{static THROW_IF_NOT_FOUND=kr;static NULL=new Mi;static create(n,t){if(Array.isArray(n))return Jd({name:""},t,n,"");{let r=n.name??"";return Jd({name:r},n.parent,n.providers,r)}}static \u0275prov=G({token:e,providedIn:"any",factory:()=>S(Bo)});static __NG_ELEMENT_ID__=-1},C=new g(""),Ze=(()=>{class e{static __NG_ELEMENT_ID__=QC;static __NG_ENV_ID__=t=>t}return e})(),Ba=class extends Ze{_lView;constructor(n){super(),this._lView=n}get destroyed(){return zr(this._lView)}onDestroy(n){let t=this._lView;return rl(t,n),()=>cg(t,n)}};function QC(){return new Ba(F())}var Mg=!1,Sg=new g(""),Wr=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ar(!1);debugTaskTracker=u(Sg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new z(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=G({token:e,providedIn:"root",factory:()=>new e})}return e})(),eu=class extends E{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,rg()&&(this.destroyRef=u(Ze,{optional:!0})??void 0,this.pendingTasks=u(Wr,{optional:!0})??void 0)}emit(n){let t=R(null);try{super.next(n)}finally{R(t)}}subscribe(n,t,r){let i=n,o=t||(()=>null),s=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:i,error:o,complete:s});return n instanceof Z&&n.add(a),a}wrapInTimeout(n){return t=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(t)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},J=eu;function ja(...e){}function Vu(e){let n,t;function r(){e=ja;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{e(),r()})),()=>r()}function Tg(e){return queueMicrotask(()=>e()),()=>{e=ja}}var Bu="isAngularZone",Fo=Bu+"_ID",JC=0,I=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new J(!1);onMicrotaskEmpty=new J(!1);onStable=new J(!1);onError=new J(!1);constructor(n){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Mg}=n;if(typeof Zone>"u")throw new _(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!i&&r,s.shouldCoalesceRunChangeDetection=i,s.callbackScheduled=!1,s.scheduleInRootZone=o,nw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Bu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new _(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new _(909,!1)}run(n,t,r){return this._inner.run(n,t,r)}runTask(n,t,r,i){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+i,n,ew,ja,ja);try{return o.runTask(s,t,r)}finally{o.cancelTask(s)}}runGuarded(n,t,r){return this._inner.runGuarded(n,t,r)}runOutsideAngular(n){return this._outer.run(n)}},ew={};function ju(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function tw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function n(){Vu(()=>{e.callbackScheduled=!1,tu(e),e.isCheckStableRunning=!0,ju(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{n()}):e._outer.run(()=>{n()}),tu(e)}function nw(e){let n=()=>{tw(e)},t=JC++;e._inner=e._inner.fork({name:"angular",properties:{[Bu]:!0,[Fo]:t,[Fo+t]:!0},onInvokeTask:(r,i,o,s,a,l)=>{if(rw(l))return r.invokeTask(o,s,a,l);try{return Hp(e),r.invokeTask(o,s,a,l)}finally{(e.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&n(),Up(e)}},onInvoke:(r,i,o,s,a,l,c)=>{try{return Hp(e),r.invoke(o,s,a,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!iw(l)&&n(),Up(e)}},onHasTask:(r,i,o,s)=>{r.hasTask(o,s),i===o&&(s.change=="microTask"?(e._hasPendingMicrotasks=s.microTask,tu(e),ju(e)):s.change=="macroTask"&&(e.hasPendingMacrotasks=s.macroTask))},onHandleError:(r,i,o,s)=>(r.handleError(o,s),e.runOutsideAngular(()=>e.onError.emit(s)),!1)})}function tu(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Hp(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Up(e){e._nesting--,ju(e)}var Po=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new J;onMicrotaskEmpty=new J;onStable=new J;onError=new J;run(n,t,r){return n.apply(t,r)}runGuarded(n,t,r){return n.apply(t,r)}runOutsideAngular(n){return n()}runTask(n,t,r,i){return n.apply(t,r)}};function rw(e){return Ag(e,"__ignore_ng_zone__")}function iw(e){return Ag(e,"__scheduler_tick__")}function Ag(e,n){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[n]===!0}var Je=class{_console=console;handleError(n){this._console.error("ERROR",n)}},Tn=new g("",{factory:()=>{let e=u(I),n=u(Me),t;return r=>{e.runOutsideAngular(()=>{n.destroyed&&!t?setTimeout(()=>{throw r}):(t??=n.get(Je),t.handleError(r))})}}}),Ng={provide:Br,useValue:()=>{let e=u(Je,{optional:!0})},multi:!0},ow=new g("",{factory:()=>{let e=u(C).defaultView;if(!e)return;let n=u(Tn),t=o=>{n(o.reason),o.preventDefault()},r=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{e.addEventListener("unhandledrejection",t),e.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),u(Ze).onDestroy(()=>{e.removeEventListener("error",r),e.removeEventListener("unhandledrejection",t)})}});function Hu(){return Xn([Qp(()=>{u(ow)})])}function K(e,n){let[t,r,i]=Td(e,n?.equal),o=t,s=o[xe];return o.set=r,o.update=i,o.asReadonly=qo.bind(o),o}function qo(){let e=this[xe];if(e.readonlyFn===void 0){let n=()=>this();n[xe]=e,e.readonlyFn=n}return e.readonlyFn}var nr=new g("",{factory:()=>sw}),sw="ng";var fl=new g(""),qr=new g("",{providedIn:"platform",factory:()=>"unknown"}),Yo=new g(""),rr=new g("",{factory:()=>u(C).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Pi=(()=>{class e{static \u0275prov=G({token:e,providedIn:"root",factory:()=>{let t=new e;return t.store=Rg(u(C),u(nr)),t}});store={};onSerializeCallbacks={};get(t,r){return this.store[t]!==void 0?this.store[t]:r}set(t,r){this.store[t]=r}remove(t){delete this.store[t]}hasKey(t){return this.store.hasOwnProperty(t)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(t,r){this.onSerializeCallbacks[t]=r}toJson(){for(let t in this.onSerializeCallbacks)if(this.onSerializeCallbacks.hasOwnProperty(t))try{this.store[t]=this.onSerializeCallbacks[t]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C").replace(/\//g,"\\u002F")}}return e})();function Rg(e,n){let t=e.getElementById(n+"-state");if(t?.tagName==="SCRIPT"&&t.textContent)try{return JSON.parse(t.textContent)}catch(r){console.warn("Exception while restoring TransferState for app "+n,r)}return{}}var Li=(()=>{class e{view;node;constructor(t,r){this.view=t,this.node=r}static __NG_ELEMENT_ID__=aw}return e})();function aw(){return new Li(F(),He())}var sn=class{},Zo=new g("",{factory:()=>!0});var Uu=new g(""),hl=(()=>{class e{static \u0275prov=G({token:e,providedIn:"root",factory:()=>new nu})}return e})(),nu=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let t=n.zone,r=this.queues.get(t);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let t=n.zone;this.queues.has(t)||this.queues.set(t,new Set);let r=this.queues.get(t);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[t,r]of this.queues)t===null?n||=this.flushQueue(r):n||=t.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let t=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,t=!0,r.run());return t}},Ha=class{[xe];constructor(n){this[xe]=n}destroy(){this[xe].destroy()}};function gt(e,n){let t=n?.injector??u(k),r=n?.manualCleanup!==!0?t.get(Ze):null,i,o=t.get(Li,null,{optional:!0}),s=t.get(sn);return o!==null?(i=dw(o.view,s,e),r instanceof Ba&&r._lView===o.view&&(r=null)):i=uw(e,t.get(hl),s),i.injector=t,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new Ha(i)}var Og=U(y({},Ad),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=ko(!1);try{Nd(this)}finally{ko(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=R(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],R(e)}}}),lw=U(y({},Og),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(zn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}}),cw=U(y({},Og),{consumerMarkedDirty(){this.view[O]|=8192,$r(this.view),this.notifier.notify(13)},destroy(){if(zn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[Wn]?.delete(this)}});function dw(e,n,t){let r=Object.create(cw);return r.view=e,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.fn=kg(r,t),e[Wn]??=new Set,e[Wn].add(r),r.consumerMarkedDirty(r),r}function uw(e,n,t){let r=Object.create(lw);return r.fn=kg(r,e),r.scheduler=n,r.notifier=t,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function kg(e,n){return()=>{n(t=>(e.cleanupFns??=[]).push(t))}}function At(e){return typeof e=="function"&&e[xe]!==void 0}var Vi=(()=>{class e{internalPendingTasks=u(Wr);scheduler=u(sn);errorHandler=u(Tn);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let r=this.add();try{t().catch(this.errorHandler).finally(r)}catch(i){this.errorHandler(i),r()}}static \u0275prov=G({token:e,providedIn:"root",factory:()=>new e})}return e})();function os(e){return{toString:e}.toString()}var Q=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(Q||{}),Dl=class{previousValue;currentValue;firstChange;constructor(n,t,r){this.previousValue=n,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}};function _v(e,n,t,r){n!==null?n.applyValueToInputSignal(n,r):e[t]=r}var bv=null,st=(()=>{bv=Fg;let e=()=>Fg;return e.ngInherit=!0,e})();function ww(){return bv}function Fg(e){return e.type.prototype.ngOnChanges&&(e.setInput=xw),Iw}function Iw(){let e=Dv(this),n=e?.current;if(n){let t=e.previous;if(t===Zn)e.previous=n;else for(let r in n)t[r]=n[r];e.current=null,this.ngOnChanges(n)}}function xw(e,n,t,r,i){let o=this.declaredInputs[r],s=Dv(e)||Mw(e,{previous:Zn,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new Dl(c&&c.currentValue,t,l===Zn),_v(e,n,i,t)}var Ju="__ngSimpleChanges__";function Dv(e){return Object.hasOwn(e,Ju)&&e[Ju]||null}function Mw(e,n){return e[Ju]=n}var Pg=[];var re=function(e,n=null,t){for(let r=0;r<Pg.length;r++){let i=Pg[r];i(e,n,t)}};function Sw(e,n,t){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let s=ww()(n);(t.preOrderHooks??=[]).push(e,s),(t.preOrderCheckHooks??=[]).push(e,s)}i&&(t.preOrderHooks??=[]).push(0-e,i),o&&((t.preOrderHooks??=[]).push(e,o),(t.preOrderCheckHooks??=[]).push(e,o))}function Ev(e,n){for(let t=n.directiveStart,r=n.directiveEnd;t<r;t++){let o=e.data[t].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(e.contentHooks??=[]).push(-t,s),a&&((e.contentHooks??=[]).push(t,a),(e.contentCheckHooks??=[]).push(t,a)),l&&(e.viewHooks??=[]).push(-t,l),c&&((e.viewHooks??=[]).push(t,c),(e.viewCheckHooks??=[]).push(t,c)),d!=null&&(e.destroyHooks??=[]).push(t,d)}}function vl(e,n,t){Cv(e,n,3,t)}function yl(e,n,t,r){(e[O]&3)===t&&Cv(e,n,t,r)}function zu(e,n){let t=e[O];(t&3)===n&&(t&=16383,t+=1,e[O]=t)}function Cv(e,n,t,r){let i=r!==void 0?e[jr]&65535:0,o=r??-1,s=n.length-1,a=0;for(let l=i;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],r!=null&&a>=r)break}else n[l]<0&&(e[jr]+=65536),(a<o||o==-1)&&(Tw(e,t,n,l),e[jr]=(e[jr]&4294901760)+l+2),l++}function Lg(e,n){re(Q.LifecycleHookStart,e,n);let t=R(null);try{n.call(e)}finally{R(t),re(Q.LifecycleHookEnd,e,n)}}function Tw(e,n,t,r){let i=t[r]<0,o=t[r+1],s=i?-t[r]:t[r],a=e[s];i?e[O]>>14<e[jr]>>16&&(e[O]&3)===n&&(e[O]+=16384,Lg(a,o)):Lg(a,o)}var ji=-1,Zr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,t,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=t,this.injectImpl=r}};function Aw(e){return(e.flags&8)!==0}function Nw(e){return(e.flags&16)!==0}function Rw(e,n,t){let r=0;for(;r<t.length;){let i=t[r];if(typeof i=="number"){if(i!==0)break;r++;let o=t[r++],s=t[r++],a=t[r++];e.setAttribute(n,s,a,o)}else{let o=i,s=t[++r];Ow(o)?e.setProperty(n,o,s):e.setAttribute(n,o,s),r++}}return r}function wv(e){return e===3||e===4||e===6}function Ow(e){return e.charCodeAt(0)===64}function Hi(e,n){if(!(n===null||n.length===0))if(e===null||e.length===0)e=n.slice();else{let t=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?t=i:t===0||(t===-1||t===2?Vg(e,t,i,null,n[++r]):Vg(e,t,i,null,null))}}return e}function Vg(e,n,t,r,i){let o=0,s=e.length;if(n===-1)s=-1;else for(;o<e.length;){let a=e[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<e.length;){let a=e[o];if(typeof a=="number")break;if(a===t){i!==null&&(e[o+1]=i);return}o++,i!==null&&o++}s!==-1&&(e.splice(s,0,n),o=s+1),e.splice(o++,0,t),i!==null&&e.splice(o++,0,i)}function Iv(e){return e!==ji}function El(e){return e&32767}function kw(e){return e>>16}function Cl(e,n){let t=kw(e),r=n;for(;t>0;)r=r[Kn],t--;return r}var ef=!0;function wl(e){let n=ef;return ef=e,n}var Fw=256,xv=Fw-1,Mv=5,Pw=0,hn={};function Lw(e,n,t){let r;typeof t=="string"?r=t.charCodeAt(0)||0:t.hasOwnProperty(Vr)&&(r=t[Vr]),r==null&&(r=t[Vr]=Pw++);let i=r&xv,o=1<<i;n.data[e+(i>>Mv)]|=o}function Il(e,n){let t=Sv(e,n);if(t!==-1)return t;let r=n[x];r.firstCreatePass&&(e.injectorIndex=n.length,$u(r.data,e),$u(n,null),$u(r.blueprint,null));let i=Nf(e,n),o=e.injectorIndex;if(Iv(i)){let s=El(i),a=Cl(i,n),l=a[x].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=i,o}function $u(e,n){e.push(0,0,0,0,0,0,0,0,n)}function Sv(e,n){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||n[e.injectorIndex+8]===null?-1:e.injectorIndex}function Nf(e,n){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let t=0,r=null,i=n;for(;i!==null;){if(r=Ov(i),r===null)return ji;if(t++,i=i[Kn],r.injectorIndex!==-1)return r.injectorIndex|t<<16}return ji}function tf(e,n,t){Lw(e,n,t)}function Vw(e,n){if(n==="class")return e.classes;if(n==="style")return e.styles;let t=e.attrs;if(t){let r=t.length,i=0;for(;i<r;){let o=t[i];if(wv(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof t[i]=="string";)i++;else{if(o===n)return t[i+1];i=i+2}}}return null}function Tv(e,n,t){if(t&8||e!==void 0)return e;Ya(n,"NodeInjector")}function Av(e,n,t,r){if(t&8&&r===void 0&&(r=null),(t&3)===0){let i=e[In],o=Qe(void 0);try{return i?i.get(n,r,t&8):du(n,r,t&8)}finally{Qe(o)}}return Tv(r,n,t)}function Nv(e,n,t,r=0,i){if(e!==null){if(n[O]&2048&&!(r&2)){let s=Uw(e,n,t,r,hn);if(s!==hn)return s}let o=Rv(e,n,t,r,hn);if(o!==hn)return o}return Av(n,t,r,i)}function Rv(e,n,t,r,i){let o=jw(t);if(typeof o=="function"){if(!Fu(n,e,r))return r&1?Tv(i,t,r):Av(n,t,r,i);try{let s;if(s=o(r),s==null&&!(r&8))Ya(t);else return s}finally{Pu()}}else if(typeof o=="number"){let s=null,a=Sv(e,n),l=ji,c=r&1?n[ot][Ye]:null;for((a===-1||r&4)&&(l=a===-1?Nf(e,n):n[a+8],l===ji||!jg(r,!1)?a=-1:(s=n[x],a=El(l),n=Cl(l,n)));a!==-1;){let d=n[x];if(Bg(o,a,d.data)){let f=Bw(a,n,t,s,r,c);if(f!==hn)return f}l=n[a+8],l!==ji&&jg(r,n[x].data[a+8]===c)&&Bg(o,a,n)?(s=d,a=El(l),n=Cl(l,n)):a=-1}}return i}function Bw(e,n,t,r,i,o){let s=n[x],a=s.data[e+8],l=r==null?Sn(a)&&ef:r!=s&&(a.type&3)!==0,c=i&1&&o===a,d=_l(a,s,t,l,c);return d!==null?es(n,s,d,a,i):hn}function _l(e,n,t,r,i){let o=e.providerIndexes,s=n.data,a=o&1048575,l=e.directiveStart,c=e.directiveEnd,d=o>>20,f=r?a:a+d,m=i?a+d:c;for(let h=f;h<m;h++){let p=s[h];if(h<l&&t===p||h>=l&&p.type===t)return h}if(i){let h=s[l];if(h&&Wt(h)&&h.type===t)return l}return null}function es(e,n,t,r,i){let o=e[t],s=n.data;if(o instanceof Zr){let a=o;if(a.resolving)throw cu("");let l=wl(a.canSeeViewProviders);a.resolving=!0;let c=s[t].type||s[t],d,f=a.injectImpl?Qe(a.injectImpl):null,m=Fu(e,r,0);try{o=e[t]=a.factory(void 0,i,s,e,r),n.firstCreatePass&&t>=r.directiveStart&&Sw(t,s[t],n)}finally{f!==null&&Qe(f),wl(l),a.resolving=!1,Pu()}}return o}function jw(e){if(typeof e=="string")return e.charCodeAt(0)||0;let n=e.hasOwnProperty(Vr)?e[Vr]:void 0;return typeof n=="number"?n>=0?n&xv:Hw:n}function Bg(e,n,t){let r=1<<e;return!!(t[n+(e>>Mv)]&r)}function jg(e,n){return!(e&2)&&!(e&1&&n)}var ir=class{_tNode;_lView;constructor(n,t){this._tNode=n,this._lView=t}get(n,t,r){return Nv(this._tNode,this._lView,n,Fr(r),t)}};function Hw(){return new ir(He(),F())}function yt(e){return os(()=>{let n=e.prototype.constructor,t=n[Oo]||nf(n),r=Object.prototype,i=Object.getPrototypeOf(e.prototype).constructor;for(;i&&i!==r;){let o=i[Oo]||nf(i);if(o&&o!==t)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function nf(e){return ru(e)?()=>{let n=nf(Le(e));return n&&n()}:Gn(e)}function Uw(e,n,t,r,i){let o=e,s=n;for(;o!==null&&s!==null&&s[O]&2048&&!ki(s);){let a=Rv(o,s,t,r|2,hn);if(a!==hn)return a;let l=o.parent;if(!l){let c=s[vu];if(c){let d=c.get(t,hn,r&-5);if(d!==hn)return d}l=Ov(s),s=s[Kn]}o=l}return i}function Ov(e){let n=e[x],t=n.type;return t===2?n.declTNode:t===1?e[Ye]:null}function Rf(e){return Vw(He(),e)}function w(e){return{token:e.token,providedIn:e.autoProvided===!1?null:"root",factory:e.factory,value:void 0}}function zw(){return Gi(He(),F())}function Gi(e,n){return new N(St(e,n))}var N=(()=>{class e{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=zw}return e})();function kv(e){return e instanceof N?e.nativeElement:e}function $w(){return this._results[Symbol.iterator]()}var An=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new E}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,t){return this._results.reduce(n,t)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,t){this.dirty=!1;let r=Zp(n);(this._changesDetected=!Yp(this._results,r,t))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=$w};function Fv(e){return(e.flags&128)===128}var Of=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(Of||{}),Pv=new Map,Gw=0;function Ww(){return Gw++}function qw(e){Pv.set(e[xn],e)}function rf(e){Pv.delete(e[xn])}var Hg="__ngContext__";function Ui(e,n){Mn(n)?(e[Hg]=n[xn],qw(n)):e[Hg]=n}function Lv(e){return Bv(e[Oi])}function Vv(e){return Bv(e[It])}function Bv(e){for(;e!==null&&!xt(e);)e=e[It];return e}var of;function kf(e){of=e}function jv(){if(of!==void 0)return of;if(typeof document<"u")return document;throw new _(210,!1)}var Hv=!1,Uv=new g("",{factory:()=>Hv});var Ug=new WeakMap;function Yw(e,n){if(e==null||typeof e!="object")return;let t=Ug.get(e);t||(t=new WeakSet,Ug.set(e,t)),t.add(n)}var Zw=(e,n,t,r)=>{};function Xw(e,n,t,r){Zw(e,n,t,r)}function Pl(e){return(e.flags&32)===32}var Kw=()=>null;function zv(e,n,t=!1){return Kw(e,n,t)}function $v(e,n){let t=e.contentQueries;if(t!==null){let r=R(null);try{for(let i=0;i<t.length;i+=2){let o=t[i],s=t[i+1];if(s!==-1){let a=e.data[s];Go(o),a.contentQueries(2,n[s],s)}}}finally{R(r)}}}function sf(e,n,t){Go(0);let r=R(null);try{n(e,t)}finally{R(r)}}function Gv(e,n,t){if(yu(n)){let r=R(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let s=i;s<o;s++){let a=e.data[s];if(a.contentQueries){let l=t[s];a.contentQueries(1,l,s)}}}finally{R(r)}}}var Xt=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(Xt||{});var ml;function Qw(){if(ml===void 0&&(ml=null,an.trustedTypes))try{ml=an.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return ml}function Ll(e){return Qw()?.createHTML(e)||e}var Nn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ua})`}},af=class extends Nn{getTypeName(){return"HTML"}},lf=class extends Nn{getTypeName(){return"Style"}},cf=class extends Nn{getTypeName(){return"Script"}},df=class extends Nn{getTypeName(){return"URL"}},uf=class extends Nn{getTypeName(){return"ResourceURL"}};function On(e){return e instanceof Nn?e.changingThisBreaksApplicationSecurity:e}function Jr(e,n){let t=Wv(e);if(t!=null&&t!==n){if(t==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${t} (see ${Ua})`)}return t===n}function Wv(e){return e instanceof Nn&&e.getTypeName()||null}function Ff(e){return new af(e)}function Pf(e){return new lf(e)}function Lf(e){return new cf(e)}function Vf(e){return new df(e)}function Bf(e){return new uf(e)}function Jw(e){let n=new hf(e);return e0()?new ff(n):n}var ff=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let t=new window.DOMParser().parseFromString(Ll(n),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(n):(t.firstChild?.remove(),t)}catch{return null}}},hf=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let t=this.inertDocument.createElement("template");return t.innerHTML=Ll(n),t}};function e0(){try{return!!new window.DOMParser().parseFromString(Ll(""),"text/html")}catch{return!1}}var t0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Vl(e){return e=String(e),e.match(t0)?e:"unsafe:"+e}function kn(e){let n={};for(let t of e.split(","))n[t]=!0;return n}function ss(...e){let n={};for(let t of e)for(let r in t)t.hasOwnProperty(r)&&(n[r]=!0);return n}var qv=kn("area,br,col,hr,img,wbr"),Yv=kn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Zv=kn("rp,rt"),n0=ss(Zv,Yv),r0=ss(Yv,kn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),i0=ss(Zv,kn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),zg=ss(qv,r0,i0,n0),Xv=kn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),o0=kn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),s0=kn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),a0=ss(Xv,o0,s0),l0=kn("script,style,template"),mf=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let t=n.firstChild,r=!0,i=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?r=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,r&&t.firstChild){i.push(t),t=u0(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=d0(t);if(o){t=o;break}t=i.pop()}}return this.buf.join("")}startElement(n){let t=$g(n).toLowerCase();if(!zg.hasOwnProperty(t))return this.sanitizedSomething=!0,!l0.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),s=o.name,a=s.toLowerCase();if(!a0.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;Xv[a]&&(l=Vl(l)),this.buf.push(" ",s,'="',Gg(l),'"')}return this.buf.push(">"),!0}endElement(n){let t=$g(n).toLowerCase();zg.hasOwnProperty(t)&&!qv.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(n){this.buf.push(Gg(n))}};function c0(e,n){return(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function d0(e){let n=e.nextSibling;if(n&&e!==n.previousSibling)throw Kv(n);return n}function u0(e){let n=e.firstChild;if(n&&c0(e,n))throw Kv(n);return n}function $g(e){let n=e.nodeName;return typeof n=="string"?n:"FORM"}function Kv(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var f0=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,h0=/([^\#-~ |!])/g;function Gg(e){return e.replace(/&/g,"&amp;").replace(f0,function(n){let t=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((t-55296)*1024+(r-56320)+65536)+";"}).replace(h0,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var pl;function jf(e,n){let t=null;try{pl=pl||Jw(e);let r=n?String(n):"";t=pl.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=t.innerHTML,t=pl.getInertBodyElement(r)}while(r!==o);let a=new mf().sanitizeChildren(Wg(t)||t);return Ll(a)}finally{if(t){let r=Wg(t)||t;for(;r.firstChild;)r.firstChild.remove()}}}function Wg(e){return"content"in e&&m0(e)?e.content:null}function m0(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function p0(e,n){return e.createText(n)}function g0(e,n,t){e.setValue(n,t)}function Qv(e,n,t){return e.createElement(n,t)}function xl(e,n,t,r,i){e.insertBefore(n,t,r,i)}function Jv(e,n,t){e.appendChild(n,t)}function qg(e,n,t,r,i){r!==null?xl(e,n,t,r,i):Jv(e,n,t)}function v0(e,n,t,r){e.removeChild(null,n,t,r)}function y0(e,n,t){e.setAttribute(n,"style",t)}function _0(e,n,t){t===""?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}function ey(e,n,t){let{mergedAttrs:r,classes:i,styles:o}=t;r!==null&&Rw(e,n,r),i!==null&&_0(e,n,i),o!==null&&y0(e,n,o)}var et=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e[e.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",e})(et||{});function b0(e,n,t){let r=e.length;for(;;){let i=e.indexOf(n,t);if(i===-1)return i;if(i===0||e.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||e.charCodeAt(i+o)<=32)return i}t=i+1}}var ty="ng-template";function D0(e,n,t,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&b0(n[i+1].toLowerCase(),t,0)!==-1)return!0}else if(Hf(e))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Hf(e){return e.type===4&&e.value!==ty}function E0(e,n,t){let r=e.type===4&&!t?ty:e.value;return n===r}function C0(e,n,t){let r=4,i=e.attrs,o=i!==null?x0(i):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!Yt(r)&&!Yt(l))return!1;if(s&&Yt(l))continue;s=!1,r=l|r&1;continue}if(!s)if(r&4){if(r=2|r&1,l!==""&&!E0(e,l,t)||l===""&&n.length===1){if(Yt(r))return!1;s=!0}}else if(r&8){if(i===null||!D0(e,i,l,t)){if(Yt(r))return!1;s=!0}}else{let c=n[++a],d=w0(l,i,Hf(e),t);if(d===-1){if(Yt(r))return!1;s=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(Yt(r))return!1;s=!0}}}}return Yt(r)||s}function Yt(e){return(e&1)===0}function w0(e,n,t,r){if(n===null)return-1;let i=0;if(r||!t){let o=!1;for(;i<n.length;){let s=n[i];if(s===e)return i;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++i];for(;typeof a=="string";)a=n[++i];continue}else{if(s===4)break;if(s===0){i+=4;continue}}i+=o?1:2}return-1}else return M0(n,e)}function ny(e,n,t=!1){for(let r=0;r<n.length;r++)if(C0(e,n[r],t))return!0;return!1}function I0(e){let n=e.attrs;if(n!=null){let t=n.indexOf(5);if((t&1)===0)return n[t+1]}return null}function x0(e){for(let n=0;n<e.length;n++){let t=e[n];if(wv(t))return n}return e.length}function M0(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){let r=e[t];if(typeof r=="number")return-1;if(r===n)return t;t++}return-1}function S0(e,n){e:for(let t=0;t<n.length;t++){let r=n[t];if(e.length===r.length){for(let i=0;i<e.length;i++)if(e[i]!==r[i])continue e;return!0}}return!1}function Yg(e,n){return e?":not("+n.trim()+")":n}function T0(e){let n=e[0],t=1,r=2,i="",o=!1;for(;t<e.length;){let s=e[t];if(typeof s=="string")if(r&2){let a=e[++t];i+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else r&8?i+="."+s:r&4&&(i+=" "+s);else i!==""&&!Yt(s)&&(n+=Yg(o,i),i=""),r=s,o=o||!Yt(r);t++}return i!==""&&(n+=Yg(o,i)),n}function A0(e){return e.map(T0).join(",")}function N0(e){let n=[],t=[],r=1,i=2;for(;r<e.length;){let o=e[r];if(typeof o=="string")i===2?o!==""&&n.push(o,e[++r]):i===8&&t.push(o);else{if(!Yt(i))break;i=o}r++}return t.length&&n.push(1,...t),n}var at={},mn=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(mn||{}),R0;function Uf(e,n){return R0(e,n)}var bB=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var pf=new WeakMap;function ry(e){return e?e[Kn]??e:null}var Ko=new WeakSet;function O0(e,n,t){let r=pf.get(e);if(!r||r.length===0)return;let i=n.parentNode,o=n.previousSibling,s=ry(t);for(let a=r.length-1;a>=0;a--){let{el:l,declarationView:c}=r[a],d=l.parentNode;l===n?(r.splice(a,1),Ko.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&l===o?(r.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&i&&d!==i&&(s===null||c===null||s===c)&&(r.splice(a,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function k0(e,n,t){let r=ry(t),i=pf.get(e);i?i.some(o=>o.el===n)||i.push({el:n,declarationView:r}):pf.set(e,[{el:n,declarationView:r}])}var Xr=new Set,Bl=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(Bl||{}),pn=new g(""),Zg=new Set;function Fn(e){Zg.has(e)||(Zg.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var jl=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=G({token:e,providedIn:"root",factory:()=>new e})}return e})(),zf=[0,1,2,3],$f=(()=>{class e{ngZone=u(I);scheduler=u(sn);errorHandler=u(Je,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(pn,{optional:!0})}execute(){let t=this.sequences.size>0;t&&re(Q.AfterRenderHooksStart),this.executing=!0;for(let r of zf)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&re(Q.AfterRenderHooksEnd)}register(t){let{view:r}=t;r!==void 0?((r[Hr]??=[]).push(t),$r(r),r[O]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,r){return r?r.run(Bl.AFTER_NEXT_RENDER,t):t()}static \u0275prov=G({token:e,providedIn:"root",factory:()=>new e})}return e})(),ts=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,t,r,i,o,s=null){this.impl=n,this.hooks=t,this.view=r,this.once=i,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Hr];n&&(this.view[Hr]=n.filter(t=>t!==this))}};function Nt(e,n){let t=n?.injector??u(k);return Fn("NgAfterNextRender"),P0(e,t,n,!0)}function F0(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function P0(e,n,t,r){let i=n.get(jl);i.impl??=n.get($f);let o=n.get(pn,null,{optional:!0}),s=t?.manualCleanup!==!0?n.get(Ze):null,a=n.get(Li,null,{optional:!0}),l=new ts(i.impl,F0(e),a?.view,r,s,o?.snapshot(null));return i.impl.register(l),l}var iy=new g("",{factory:()=>{let e=u(Me),n=new Set;return e.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:e}}});function oy(e,n,t){let r=e.get(iy);if(Array.isArray(n))for(let i of n)r.queue.add(i),t?.detachedLeaveAnimationFns?.push(i);else r.queue.add(n),t?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(e)}function L0(e,n){let t=e.get(iy);if(Array.isArray(n))for(let r of n)t.queue.delete(r);else t.queue.delete(n)}function V0(e,n){for(let[t,r]of n)oy(e,r.animateFns)}function Xg(e,n,t,r){let i=e?.[Jn]?.enter;n!==null&&i&&i.has(t.index)&&V0(r,i)}function Kg(e,n,t,r){try{t.get(Bo)}catch{return r(!1)}let i=e?.[Jn];i?.enter?.has(n.index)&&L0(t,i.enter.get(n.index).animateFns);let o=B0(e,n,i);if(o.size===0){let s=!1;if(e){let a=[];Hl(e,n,a),s=a.length>0}if(!s)return r(!1)}e&&Xr.add(e[xn]),oy(t,()=>j0(e,n,i||void 0,o,r),i||void 0)}function B0(e,n,t){let r=new Map,i=t?.leave;if(i&&i.has(n.index)&&r.set(n.index,i.get(n.index)),e&&i)for(let[o,s]of i){if(r.has(o))continue;let l=e[x].data[o].parent;for(;l;){if(l===n){r.set(o,s);break}l=l.parent}}return r}function j0(e,n,t,r,i){let o=[];if(t&&t.leave)for(let[s]of r){if(!t.leave.has(s))continue;let a=t.leave.get(s);for(let l of a.animateFns){let{promise:c}=l();o.push(c)}t.detachedLeaveAnimationFns=void 0}if(e&&Hl(e,n,o),o.length>0){let s=t||e?.[Jn];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),U0(e,s.running,i)}else Promise.allSettled(o).then(()=>{e&&Xr.delete(e[xn]),i(!0)})}else e&&Xr.delete(e[xn]),i(!1)}function Hl(e,n,t){if(n.type&12){let i=e[n.index];if(xt(i))for(let o=ze;o<i.length;o++){let s=i[o];s[x].type===2&&H0(s,t)}}let r=n.child;for(;r;)Hl(e,r,t),r=r.next}function H0(e,n){let t=e[Jn];if(t&&t.leave)for(let i of t.leave.values())for(let o of i.animateFns){let{promise:s}=o();n.push(s)}let r=e[x].firstChild;for(;r;)Hl(e,r,n),r=r.next}function U0(e,n,t){n.then(()=>{e[Jn]?.running===n&&(e[Jn].running=void 0,Xr.delete(e[xn])),t(!0)})}function Bi(e,n,t,r,i,o,s,a){if(i!=null){let l,c=!1;xt(i)?l=i:Mn(i)&&(c=!0,i=i[Gt]);let d=Mt(i);e===0&&r!==null?(Xg(a,r,o,t),s==null?Jv(n,r,d):xl(n,r,d,s||null,!0)):e===1&&r!==null?(Xg(a,r,o,t),xl(n,r,d,s||null,!0),O0(o,d,a)):e===2?(a?.[Jn]?.leave?.has(o.index)&&k0(o,d,a),Ko.delete(d),Kg(a,o,t,f=>{if(Ko.has(d)){Ko.delete(d);return}v0(n,d,c,f)})):e===3&&(Ko.delete(d),Kg(a,o,t,()=>{n.destroyNode(d)})),l!=null&&Q0(n,e,t,l,o,r,s)}}function z0(e,n){sy(e,n),n[Gt]=null,n[Ye]=null}function $0(e,n,t,r,i,o){r[Gt]=i,r[Ye]=n,Ul(e,r,t,1,i,o)}function sy(e,n){n[ln].changeDetectionScheduler?.notify(9),Ul(e,n,n[ye],2,null,null)}function G0(e){let n=e[Oi];if(!n)return Gu(e[x],e);for(;n;){let t=null;if(Mn(n))t=n[Oi];else{let r=n[ze];r&&(t=r)}if(!t){for(;n&&!n[It]&&n!==e;)Mn(n)&&Gu(n[x],n),n=n[je];n===null&&(n=e),Mn(n)&&Gu(n[x],n),t=n&&n[It]}n=t}}function Gf(e,n){let t=e[Ur],r=t.indexOf(n);t.splice(r,1)}function Wf(e,n){if(zr(n))return;let t=n[ye];t.destroyNode&&Ul(e,n,t,3,null,null),G0(n)}function Gu(e,n){if(zr(n))return;let t=R(null);try{n[O]&=-129,n[O]|=256,n[pt]&&zn(n[pt]),q0(e,n),W0(e,n),n[x].type===1&&n[ye].destroy();let r=n[Qn];if(r!==null&&xt(n[je])){r!==n[je]&&Gf(r,n);let i=n[cn];i!==null&&i.detachView(e)}rf(n)}finally{R(t)}}function W0(e,n){let t=e.cleanup,r=n[Ri];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let a=t[s+3];a>=0?r[a]():r[-a].unsubscribe(),s+=2}else{let a=r[t[s+1]];t[s].call(a)}r!==null&&(n[Ri]=null);let i=n[Cn];if(i!==null){n[Cn]=null;for(let s=0;s<i.length;s++){let a=i[s];a()}}let o=n[Wn];if(o!==null){n[Wn]=null;for(let s of o)s.destroy()}}function q0(e,n){let t;if(e!=null&&(t=e.destroyHooks)!=null)for(let r=0;r<t.length;r+=2){let i=n[t[r]];if(!(i instanceof Zr)){let o=t[r+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=i[o[s]],l=o[s+1];re(Q.LifecycleHookStart,a,l);try{l.call(a)}finally{re(Q.LifecycleHookEnd,a,l)}}else{re(Q.LifecycleHookStart,i,o);try{o.call(i)}finally{re(Q.LifecycleHookEnd,i,o)}}}}}function ay(e,n,t){return Y0(e,n.parent,t)}function Y0(e,n,t){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return t[Gt];if(Sn(r)){let{encapsulation:i}=e.data[r.directiveStart+r.componentOffset];if(i===Xt.None||i===Xt.Emulated)return null}return St(r,t)}function ly(e,n,t){return X0(e,n,t)}function Z0(e,n,t){return e.type&40?St(e,t):null}var X0=Z0,Qg;function qf(e,n,t,r){let i=ay(e,r,n),o=n[ye],s=r.parent||n[Ye],a=ly(s,r,n);if(i!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)qg(o,i,t[l],a,!1);else qg(o,i,t,a,!1);Qg!==void 0&&Qg(o,r,n,t,i)}function Qo(e,n){if(n!==null){let t=n.type;if(t&3)return St(n,e);if(t&4)return gf(-1,e[n.index]);if(t&8){let r=n.child;if(r!==null)return Qo(e,r);{let i=e[n.index];return xt(i)?gf(-1,i):Mt(i)}}else{if(t&128)return Qo(e,n.next);if(t&32)return Uf(n,e)()||Mt(e[n.index]);{let r=cy(e,n);if(r!==null){if(Array.isArray(r))return r[0];let i=wn(e[ot]);return Qo(i,r)}else return Qo(e,n.next)}}}return null}function cy(e,n){if(n!==null){let r=e[ot][Ye],i=n.projection;return r.projection[i]}return null}function gf(e,n){let t=ze+e+1;if(t<n.length){let r=n[t],i=r[x].firstChild;if(i!==null)return Qo(r,i)}return n[er]}function Yf(e,n,t,r,i,o,s){for(;t!=null;){let a=r[In];if(t.type===128){t=t.next;continue}let l=r[t.index],c=t.type;if(s&&n===0&&(l&&Ui(Mt(l),r),t.flags|=2),!Pl(t))if(c&8)Yf(e,n,t.child,r,i,o,!1),Bi(n,e,a,i,l,t,o,r);else if(c&32){let d=Uf(t,r),f;for(;f=d();)Bi(n,e,a,i,f,t,o,r);Bi(n,e,a,i,l,t,o,r)}else c&16?dy(e,n,r,t,i,o):Bi(n,e,a,i,l,t,o,r);t=s?t.projectionNext:t.next}}function Ul(e,n,t,r,i,o){Yf(t,r,e.firstChild,n,i,o,!1)}function K0(e,n,t){let r=n[ye],i=ay(e,t,n),o=t.parent||n[Ye],s=ly(o,t,n);dy(r,0,n,t,i,s)}function dy(e,n,t,r,i,o){let s=t[ot],l=s[Ye].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Bi(n,e,t[In],i,d,r,o,t)}else{let c=l,d=s[je];Fv(r)&&(c.flags|=128),Yf(e,n,c,d,i,o,!0)}}function Q0(e,n,t,r,i,o,s){let a=r[er],l=Mt(r);a!==l&&Bi(n,e,t,o,a,i,s);for(let c=ze;c<r.length;c++){let d=r[c];Ul(d[x],d,e,n,o,a)}}function J0(e,n,t,r,i){if(n)i?e.addClass(t,r):e.removeClass(t,r);else{let o=r.indexOf("-")===-1?void 0:mn.DashCase;i==null?e.removeStyle(t,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=mn.Important),e.setStyle(t,r,i,o))}}function Zf(e,n,t,r,i,o,s,a,l,c,d){let f=be+r,m=f+i,h=eI(f,m),p=typeof c=="function"?c():c;return h[x]={type:e,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:n,data:h.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:m,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:p,incompleteFirstPass:!1,ssrId:d}}function eI(e,n){let t=[];for(let r=0;r<n;r++)t.push(r<e?null:at);return t}function tI(e){let n=e.tView;return n===null||n.incompleteFirstPass?e.tView=Zf(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function Xf(e,n,t,r,i,o,s,a,l,c,d){let f=n.blueprint.slice();return f[Gt]=i,f[O]=r|4|128|8|64|1024,(c!==null||e&&e[O]&2048)&&(f[O]|=2048),Du(f),f[je]=f[Kn]=e,f[Ue]=t,f[ln]=s||e&&e[ln],f[ye]=a||e&&e[ye],f[In]=l||e&&e[In]||null,f[Ye]=o,f[xn]=Ww(),f[Ni]=d,f[vu]=c,f[ot]=n.type==2?e[ot]:f,f}function nI(e,n,t){let r=St(n,e),i=tI(t),o=e[ln].rendererFactory,s=Kf(e,Xf(e,i,null,uy(t),r,n,null,o.createRenderer(r,t),null,null,null));return e[n.index]=s}function uy(e){let n=16;return e.signals?n=4096:e.onPush&&(n=64),n}function fy(e,n,t,r){if(t===0)return-1;let i=n.length;for(let o=0;o<t;o++)n.push(r),e.blueprint.push(r),e.data.push(null);return i}function Kf(e,n){return e[Oi]?e[gu][It]=n:e[Oi]=n,e[gu]=n,n}function P(e=1){hy(he(),F(),fn()+e,!1)}function hy(e,n,t,r){if(!r)if((n[O]&3)===3){let o=e.preOrderCheckHooks;o!==null&&vl(n,o,t)}else{let o=e.preOrderHooks;o!==null&&yl(n,o,0,t)}tr(t)}var zl=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(zl||{});function Kr(e,n,t,r){let i=R(null);try{let[o,s,a]=e.inputs[t],l=null;(s&zl.SignalBased)!==0&&(l=n[o][xe]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):a!==null&&(r=a.call(n,r)),e.setInput!==null?e.setInput(n,l,r,t,o):_v(n,l,o,r)}finally{R(i)}}function my(e,n,t,r,i){let o=fn(),s=r&2;try{tr(-1),s&&n.length>be&&hy(e,n,be,!1);let a=s?Q.TemplateUpdateStart:Q.TemplateCreateStart;re(a,i,t),t(r,i)}finally{tr(o);let a=s?Q.TemplateUpdateEnd:Q.TemplateCreateEnd;re(a,i,t)}}function Qf(e,n,t){cI(e,n,t),(t.flags&64)===64&&dI(e,n,t)}function $l(e,n,t=St){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let s=r[o+1],a=s===-1?t(n,e):e[s];e[i++]=a}}}function rI(e,n,t,r){let o=r.get(Uv,Hv)||t===Xt.ShadowDom||t===Xt.ExperimentalIsolatedShadowDom,s=e.selectRootElement(n,o);return iI(s),s}function iI(e){oI(e)}var oI=()=>null;function sI(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function aI(e,n,t,r,i,o){let s=n[x];if(Jf(e,s,n,t,r)){Sn(e)&&lI(n,e.index);return}e.type&3&&(t=sI(t)),py(e,n,t,r,i,o)}function py(e,n,t,r,i,o){if(e.type&3){let s=St(e,n);r=o!=null?o(r,e.value||"",t):r,i.setProperty(s,t,r)}else e.type&12}function lI(e,n){let t=Tt(n,e);t[O]&16||(t[O]|=64)}function cI(e,n,t){let r=t.directiveStart,i=t.directiveEnd;Sn(t)&&nI(n,t,e.data[r+t.componentOffset]),e.firstCreatePass||Il(t,n);let o=t.initialInputs;for(let s=r;s<i;s++){let a=e.data[s],l=es(n,e,s,t);if(Ui(l,n),o!==null&&mI(n,s-r,l,a,t,o),Wt(a)){let c=Tt(t.index,n);c[Ue]=es(n,e,s,t)}}}function dI(e,n,t){let r=t.directiveStart,i=t.directiveEnd,o=t.index,s=_g();try{tr(o);for(let a=r;a<i;a++){let l=e.data[a],c=n[a];ol(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&uI(l,c)}}finally{tr(-1),ol(s)}}function uI(e,n){e.hostBindings!==null&&e.hostBindings(1,n)}function gy(e,n){let t=e.directiveRegistry,r=null;if(t)for(let i=0;i<t.length;i++){let o=t[i];ny(n,o.selectors,!1)&&(r??=[],Wt(o)?r.unshift(o):r.push(o))}return r}function fI(e,n,t,r,i,o){let s=St(e,n);hI(n[ye],s,o,e.value,t,r,i)}function hI(e,n,t,r,i,o,s){if(o==null)s?.(o,r||"",i),e.removeAttribute(n,i,t);else{let a=s==null?Lo(o):s(o,r||"",i);e.setAttribute(n,i,a,t)}}function mI(e,n,t,r,i,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];Kr(r,t,l,c)}}function vy(e,n,t,r,i){let o=be+t,s=n[x],a=i(s,n,e,r,t);n[o]=a,Gr(e,!0);let l=e.type===2;return l?(ey(n[ye],a,e),(ug()===0||Uo(e))&&Ui(a,n),fg()):Ui(a,n),dl()&&(!l||!Pl(e))&&qf(s,n,a,e),e}function yy(e){let n=e;return Nu()?Ru():(n=n.parent,Gr(n,!1)),n}function pI(e,n){let t=e[In];if(!t)return;let r;try{r=t.get(Tn,null)}catch{r=null}r?.(n)}function Jf(e,n,t,r,i){let o=e.inputs?.[r],s=e.hostDirectiveInputs?.[r],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],f=n.data[c];Kr(f,t[c],d,i),a=!0}if(o)for(let l of o){let c=t[l],d=n.data[l];Kr(d,c,r,i),a=!0}return a}function gI(e,n,t,r,i,o){let s=null,a=null,l=null,c=!1,d=e.directiveToIndex.get(r.type);if(typeof d=="number"?s=d:[s,a,l]=d,a!==null&&l!==null&&e.hostDirectiveInputs?.hasOwnProperty(i)){let f=e.hostDirectiveInputs[i];for(let m=0;m<f.length;m+=2){let h=f[m];if(h>=a&&h<=l){let p=n.data[h],v=f[m+1];Kr(p,t[h],v,o),c=!0}else if(h>l)break}}return s!==null&&r.inputs.hasOwnProperty(i)&&(Kr(r,t[s],i,o),c=!0),c}function vI(e,n){let t=Tt(n,e),r=t[x];yI(r,t);let i=t[Gt];i!==null&&t[Ni]===null&&(t[Ni]=zv(i,t[In])),re(Q.ComponentStart);try{eh(r,t,t[Ue])}finally{re(Q.ComponentEnd,t[Ue])}}function yI(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])}function eh(e,n,t){al(n);try{let r=e.viewQuery;r!==null&&sf(1,r,t);let i=e.template;i!==null&&my(e,n,i,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),n[cn]?.finishViewCreation(e),e.staticContentQueries&&$v(e,n),e.staticViewQueries&&sf(2,e.viewQuery,t);let o=e.components;o!==null&&_I(n,o)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{n[O]&=-5,ll()}}function _I(e,n){for(let t=0;t<n.length;t++)vI(e,n[t])}function th(e,n,t,r){let i=R(null);try{let o=n.tView,a=e[O]&4096?4096:16,l=Xf(e,o,t,a,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=e[n.index];l[Qn]=c;let d=e[cn];return d!==null&&(l[cn]=d.createEmbeddedView(o)),eh(o,l,t),l}finally{R(i)}}function Ml(e,n){return!n||n.firstChild===null||Fv(e)}function ns(e,n,t,r,i=!1){for(;t!==null;){if(t.type===128){t=i?t.projectionNext:t.next;continue}let o=n[t.index];o!==null&&r.push(Mt(o)),xt(o)&&_y(o,r);let s=t.type;if(s&8)ns(e,n,t.child,r);else if(s&32){let a=Uf(t,n),l;for(;l=a();)r.push(l)}else if(s&16){let a=cy(n,t);if(Array.isArray(a))r.push(...a);else{let l=wn(n[ot]);ns(l[x],l,a,r,!0)}}t=i?t.projectionNext:t.next}return r}function _y(e,n){for(let t=ze;t<e.length;t++){let r=e[t],i=r[x].firstChild;i!==null&&ns(r[x],r,i,n)}e[er]!==e[Gt]&&n.push(e[er])}function by(e){if(e[Hr]!==null){for(let n of e[Hr])n.impl.addSequence(n);e[Hr].length=0}}var Dy=[];function bI(e){return e[pt]??DI(e)}function DI(e){let n=Dy.pop()??Object.create(CI);return n.lView=e,n}function EI(e){e.lView[pt]!==e&&(e.lView=null,Dy.push(e))}var CI=U(y({},jn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{$r(e.lView)},consumerOnSignalRead(){this.lView[pt]=this}});function wI(e){let n=e[pt]??Object.create(II);return n.lView=e,n}var II=U(y({},jn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let n=wn(e.lView);for(;n&&!Ey(n[x]);)n=wn(n);n&&Eu(n)},consumerOnSignalRead(){this.lView[pt]=this}});function Ey(e){return e.type!==2}function Cy(e){if(e[Wn]===null)return;let n=!0;for(;n;){let t=!1;for(let r of e[Wn])r.dirty&&(t=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()));n=t&&!!(e[O]&8192)}}var xI=100;function wy(e,n=0){let r=e[ln].rendererFactory,i=!1;i||r.begin?.();try{MI(e,n)}finally{i||r.end?.()}}function MI(e,n){let t=ku();try{ko(!0),vf(e,n);let r=0;for(;$o(e);){if(r===xI)throw new _(103,!1);r++,vf(e,1)}}finally{ko(t)}}function SI(e,n,t,r){if(zr(n))return;let i=n[O],o=!1,s=!1;al(n);let a=!0,l=null,c=null;o||(Ey(e)?(c=bI(n),l=bn(c)):ta()===null?(a=!1,c=wI(n),l=bn(c)):n[pt]&&(zn(n[pt]),n[pt]=null));try{Du(n),gg(e.bindingStartIndex),t!==null&&my(e,n,t,2,r);let d=(i&3)===3;if(!o)if(d){let h=e.preOrderCheckHooks;h!==null&&vl(n,h,null)}else{let h=e.preOrderHooks;h!==null&&yl(n,h,0,null),zu(n,0)}if(s||TI(n),Cy(n),Iy(n,0),e.contentQueries!==null&&$v(e,n),!o)if(d){let h=e.contentCheckHooks;h!==null&&vl(n,h)}else{let h=e.contentHooks;h!==null&&yl(n,h,1),zu(n,1)}NI(e,n);let f=e.components;f!==null&&My(n,f,0);let m=e.viewQuery;if(m!==null&&sf(2,m,r),!o)if(d){let h=e.viewCheckHooks;h!==null&&vl(n,h)}else{let h=e.viewHooks;h!==null&&yl(n,h,2),zu(n,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),n[Qa]){for(let h of n[Qa])h();n[Qa]=null}o||(by(n),n[O]&=-73)}catch(d){throw o||$r(n),d}finally{c!==null&&(Un(c,l),a&&EI(c)),ll()}}function Iy(e,n){for(let t=Lv(e);t!==null;t=Vv(t))for(let r=ze;r<t.length;r++){let i=t[r];xy(i,n)}}function TI(e){for(let n=Lv(e);n!==null;n=Vv(n)){if(!(n[O]&2))continue;let t=n[Ur];for(let r=0;r<t.length;r++){let i=t[r];Eu(i)}}}function AI(e,n,t){re(Q.ComponentStart);let r=Tt(n,e);try{xy(r,t)}finally{re(Q.ComponentEnd,r[Ue])}}function xy(e,n){tl(e)&&vf(e,n)}function vf(e,n){let r=e[x],i=e[O],o=e[pt],s=!!(n===0&&i&16);if(s||=!!(i&64&&n===0),s||=!!(i&1024),s||=!!(o?.dirty&&gi(o)),s||=!1,o&&(o.dirty=!1),e[O]&=-9217,s)SI(r,e,r.template,e[Ue]);else if(i&8192){let a=R(null);try{Cy(e),Iy(e,1);let l=r.components;l!==null&&My(e,l,1),by(e)}finally{R(a)}}}function My(e,n,t){for(let r=0;r<n.length;r++)AI(e,n[r],t)}function NI(e,n){let t=e.hostBindingOpCodes;if(t!==null)try{for(let r=0;r<t.length;r++){let i=t[r];if(i<0)tr(~i);else{let o=i,s=t[++r],a=t[++r];yg(s,o);let l=n[o];re(Q.HostBindingsUpdateStart,l);try{a(2,l)}finally{re(Q.HostBindingsUpdateEnd,l)}}}}finally{tr(-1)}}function nh(e,n){let t=ku()?64:1088;for(e[ln].changeDetectionScheduler?.notify(n);e;){e[O]|=t;let r=wn(e);if(ki(e)&&!r)return e;e=r}return null}function Sy(e,n,t,r){return[e,!0,0,n,null,r,null,t,null,null]}function RI(e,n){let t=ze+n;if(t<e.length)return e[t]}function rh(e,n,t,r=!0){let i=n[x];if(kI(i,n,e,t),r){let s=gf(t,e),a=n[ye],l=a.parentNode(e[er]);l!==null&&$0(i,e[Ye],a,n,l,s)}let o=n[Ni];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function OI(e,n){let t=Sl(e,n);return t!==void 0&&Wf(t[x],t),t}function Sl(e,n){if(e.length<=ze)return;let t=ze+n,r=e[t];if(r){let i=r[Qn];i!==null&&i!==e&&Gf(i,r),n>0&&(e[t-1][It]=r[It]);let o=Vo(e,ze+n);z0(r[x],r);let s=o[cn];s!==null&&s.detachView(o[x]),r[je]=null,r[It]=null,r[O]&=-129}return r}function kI(e,n,t,r){let i=ze+r,o=t.length;r>0&&(t[i-1][It]=n),r<o-ze?(n[It]=t[i],uu(t,ze+r,n)):(t.push(n),n[It]=null),n[je]=t;let s=n[Qn];s!==null&&t!==s&&Ty(s,n);let a=n[cn];a!==null&&a.insertView(e),nl(n),n[O]|=128}function Ty(e,n){let t=e[Ur],r=n[je];if(Mn(r))e[O]|=2;else{let i=r[je][ot];n[ot]!==i&&(e[O]|=2)}t===null?e[Ur]=[n]:t.push(n)}var or=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,t=n[x];return ns(t,n,t.firstChild,[])}constructor(n,t){this._lView=n,this._cdRefInjectingView=t}get context(){return this._lView[Ue]}set context(n){this._lView[Ue]=n}get destroyed(){return zr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[je];if(xt(n)){let t=n[Ho],r=t?t.indexOf(this):-1;r>-1&&(Sl(n,r),Vo(t,r))}this._attachedToViewContainer=!1}Wf(this._lView[x],this._lView)}onDestroy(n){rl(this._lView,n)}markForCheck(){nh(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[O]&=-129}reattach(){nl(this._lView),this._lView[O]|=128}detectChanges(){this._lView[O]|=1024,wy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new _(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=ki(this._lView),t=this._lView[Qn];t!==null&&!n&&Gf(t,this._lView),sy(this._lView[x],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new _(902,!1);this._appRef=n;let t=ki(this._lView),r=this._lView[Qn];r!==null&&!t&&Ty(r,this._lView),nl(this._lView)}};var vt=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=FI;constructor(t,r,i){this._declarationLView=t,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,r){return this.createEmbeddedViewImpl(t,r)}createEmbeddedViewImpl(t,r,i){let o=th(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:r,dehydratedView:i});return new or(o)}}return e})();function FI(){return Gl(He(),F())}function Gl(e,n){return e.type&4?new vt(n,e,Gi(e,n)):null}function ei(e,n,t,r,i){let o=e.data[n];if(o===null)o=PI(e,n,t,r,i),vg()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=r,o.attrs=i;let s=hg();o.injectorIndex=s===null?-1:s.injectorIndex}return Gr(o,!0),o}function PI(e,n,t,r,i){let o=Au(),s=Nu(),a=s?o:o&&o.parent,l=e.data[n]=VI(e,a,t,n,r,i);return LI(e,l,o,s),l}function LI(e,n,t,r){e.firstChild===null&&(e.firstChild=n),t!==null&&(r?t.child==null&&n.parent!==null&&(t.child=n):t.next===null&&(t.next=n,n.prev=t))}function VI(e,n,t,r,i,o){let s=n?n.injectorIndex:-1,a=0;return Mu()&&(a|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:i,namespace:Lu(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var BI=()=>null,jI=()=>null;function yf(e,n){return BI(e,n)}function HI(e,n,t){return jI(e,n,t)}var Ay=class{},Ne=class{},De=(()=>{class e{destroyNode=null;static __NG_ELEMENT_ID__=()=>UI()}return e})();function UI(){let e=F(),n=He(),t=Tt(n.index,e);return(Mn(t)?t:e)[ye]}var Ny=(()=>{class e{static \u0275prov=G({token:e,providedIn:"root",factory:()=>null})}return e})();function Ry(e){return e.debugInfo?.className||e.type.name||null}var bl={},Tl=class{injector;parentInjector;constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,r){let i=this.injector.get(n,bl,r);return i!==bl||t===bl?i:this.parentInjector.get(n,t,r)}};function zI(e,n,t){return e[n]=t}function Rn(e,n,t){if(t===at)return!1;let r=e[n];return Object.is(r,t)?!1:(e[n]=t,!0)}function Oy(e,n,t,r){let i=Rn(e,n,t);return Rn(e,n+1,r)||i}function Yr(e,n,t){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&Yw(i,o);let s=Sn(e)?Tt(e.index,n):n;nh(s,5);let a=n[Ue],l=Jg(n,a,t,i),c=r.__ngNextListenerFn__;for(;c;)l=Jg(n,a,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function Jg(e,n,t,r){let i=R(null);try{return re(Q.OutputStart,n,t),t(r)!==!1}catch(o){return pI(e,o),!1}finally{re(Q.OutputEnd,n,t),R(i)}}function ih(e,n,t,r,i,o,s,a){let l=Uo(e),c=!1,d=null;if(!r&&l&&(d=GI(n,t,o,e.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let f=St(e,t),m=r?r(f):f;Xw(t,m,o,a),r||(a.__ngNativeEl__=f);let h=i.listen(m,o,a);if(!$I(o)){let p=r?v=>r(Mt(v[e.index])):e.index;ky(p,n,t,o,a,h,!1)}}return c}function $I(e){return e.startsWith("animation")||e.startsWith("transition")}function GI(e,n,t,r){let i=e.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let s=i[o];if(s===t&&i[o+1]===r){let a=n[Ri],l=i[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function ky(e,n,t,r,i,o,s){let a=n.firstCreatePass?wu(n):null,l=Cu(t),c=l.length;l.push(i,o),a&&a.push(r,e,c,(c+1)*(s?-1:1))}function ev(e,n,t,r,i){let o=null,s=null,a=null,l=!1,c=e.directiveToIndex.get(t.type);if(typeof c=="number"?o=c:[o,s,a]=c,s!==null&&a!==null&&e.hostDirectiveOutputs?.hasOwnProperty(r)){let d=e.hostDirectiveOutputs[r];for(let f=0;f<d.length;f+=2){let m=d[f];if(m>=s&&m<=a)l=!0,Al(e,n,m,d[f+1],r,i);else if(m>a)break}}return t.outputs.hasOwnProperty(r)&&(l=!0,Al(e,n,o,r,r,i)),l}function Al(e,n,t,r,i,o){let s=n[t],a=n[x],c=a.data[t].outputs[r],f=s[c].subscribe(o);ky(e.index,a,n,i,o,f,!0)}function Wl(){WI()}function WI(){let e=F(),n=he(),t=He();if(n.firstCreatePass&&YI(n,t),t.controlDirectiveIndex===-1)return;Fn("NgSignalForms");let r=e[t.controlDirectiveIndex];n.data[t.controlDirectiveIndex].controlDef.create(r,new Nl(e,n,t))}function ql(){qI()}function qI(){let e=F(),n=he(),t=Wo();if(t.controlDirectiveIndex===-1)return;let r=n.data[t.controlDirectiveIndex].controlDef,i=e[t.controlDirectiveIndex];r.update(i,new Nl(e,n,t))}var Nl=class{lView;tView;tNode;hasPassThrough;constructor(n,t,r){this.lView=n,this.tView=t,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return St(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,t){let r=this.tView.data[this.tNode.customControlIndex];ev(this.tNode,this.lView,r,n,Yr(this.tNode,this.lView,t))}listenToCustomControlModel(n){let t=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];ev(this.tNode,this.lView,r,t,Yr(this.tNode,this.lView,n))}listenToDom(n,t){ih(this.tNode,this.tView,this.lView,void 0,this.lView[ye],n,t,Yr(this.tNode,this.lView,t))}setInputOnDirectives(n,t){let r=this.tNode.inputs?.[n],i=this.tNode.hostDirectiveInputs?.[n];if(!r&&!i)return!1;let o=!1;if(r)for(let s of r){if(s===this.tNode.controlDirectiveIndex)continue;let a=this.tView.data[s],l=this.lView[s];Kr(a,l,n,t),o=!0}if(i)for(let s=0;s<i.length;s+=2){let a=i[s];if(a===this.tNode.controlDirectiveIndex)continue;let l=i[s+1],c=this.tView.data[a],d=this.lView[a];Kr(c,d,l,t),o=!0}return o}setCustomControlModelInput(n){let t=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";gI(this.tNode,this.tView,this.lView,t,r,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let t=this.tView.data[this.tNode.customControlIndex];return(t.signalFormsInputPresence??=this._buildCustomControlInputCache(t))[n]===!0}_buildCustomControlInputCache(n){let t={};for(let r in n.inputs)t[r]=!0;if(n.hostDirectives!==null){let r=[...n.hostDirectives];for(;r.length>0;){let i=r.shift();if(typeof i!="function"){for(let s in i.inputs)t[i.inputs[s]]=!0;let o=tv(i.directive);o!==null&&r.push(...o);continue}for(let o of i()){if(typeof o=="function")continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let l=o.inputs[a+1]||o.inputs[a];t[l]=!0}let s=tv(o.directive);s!==null&&r.push(...s)}}}return t}};function tv(e){return typeof e=="function"&&"\u0275dir"in e?e.\u0275dir.hostDirectives??null:null}function YI(e,n,t){for(let i=n.directiveStart;i<n.directiveEnd;i++)if(e.data[i].controlDef){n.controlDirectiveIndex=i;break}if(n.controlDirectiveIndex===-1)return;let r=e.data[n.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(n.inputs?.[r.passThroughInput]?.length??0)>1){n.flags|=4096;return}ZI(e,n)}function ZI(e,n){for(let t=n.directiveStart;t<n.directiveEnd;t++){let r=e.data[t];if(!(n.directiveToIndex&&!n.directiveToIndex.has(r.type))){if(nv(r,"value")){n.flags|=1024,n.customControlIndex=t;return}if(nv(r,"checked")){n.flags|=2048,n.customControlIndex=t;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let t=(r,i)=>{let o=n.hostDirectiveInputs[r],s=n.hostDirectiveOutputs[r+"Change"];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let l=o[a];for(let c=0;c<s.length;c+=2){let d=s[c];if(l===d)for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[m,h,p]=f;if(l>=h&&l<=p)return n.flags|=i,n.customControlIndex=m,!0}}}return!1};if(t("value",1024)||t("checked",2048))return}}function nv(e,n){return XI(e,n)&&KI(e,n+"Change")}function XI(e,n){return n in e.inputs}function KI(e,n){return n in e.outputs}var _f=Symbol("BINDING");var ti=new g("");function Rl(e,n,t){let r=t?e.styles:null,i=t?e.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)i=$a(i,a);else if(o==2){let l=a,c=n[++s];r=$a(r,l+": "+c+";")}}t?e.styles=r:e.stylesWithoutHost=r,t?e.classes=i:e.classesWithoutHost=i}function te(e,n=0){let t=F();if(t===null)return S(e,n);let r=He();return Nv(r,t,Le(e),n)}function oh(){let e="invalid";throw new Error(e)}function Fy(e,n,t,r,i){let o=r===null?null:{"":-1},s=i(e,t);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}ex(e,n,t,a,o,l,c)}o!==null&&r!==null&&QI(t,r,o)}function QI(e,n,t){let r=e.localNames=[];for(let i=0;i<n.length;i+=2){let o=t[n[i+1]];if(o==null)throw new _(-301,!1);r.push(n[i],o)}}function JI(e,n,t){n.componentOffset=t,(e.components??=[]).push(n.index)}function ex(e,n,t,r,i,o,s){let a=r.length,l=null;for(let m=0;m<a;m++){let h=r[m];l===null&&Wt(h)&&(l=h,JI(e,t,m)),tf(Il(t,n),e,h.type)}sx(t,e.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let m=0;m<a;m++){let h=r[m];h.providersResolver&&h.providersResolver(h)}let c=!1,d=!1,f=fy(e,n,a,null);a>0&&(t.directiveToIndex=new Map);for(let m=0;m<a;m++){let h=r[m];if(t.mergedAttrs=Hi(t.mergedAttrs,h.hostAttrs),nx(e,t,n,f,h),ox(f,h,i),s!==null&&s.has(h)){let[v,b]=s.get(h);t.directiveToIndex.set(h.type,[f,v+t.directiveStart,b+t.directiveStart])}else(o===null||!o.has(h))&&t.directiveToIndex.set(h.type,f);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let p=h.type.prototype;!c&&(p.ngOnChanges||p.ngOnInit||p.ngDoCheck)&&((e.preOrderHooks??=[]).push(t.index),c=!0),!d&&(p.ngOnChanges||p.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(t.index),d=!0),f++}tx(e,t,o)}function tx(e,n,t){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=e.data[r];if(t===null||!t.has(i))rv(0,n,i,r),rv(1,n,i,r),ov(n,r,!1);else{let o=t.get(i);iv(0,n,o,r),iv(1,n,o,r),ov(n,r,!0)}}}function rv(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s;e===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(r),Py(n,o)}}function iv(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(i.hasOwnProperty(o)){let s=i[o],a;e===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(r,o),Py(n,s)}}function Py(e,n){n==="class"?e.flags|=8:n==="style"&&(e.flags|=16)}function ov(e,n,t){let{attrs:r,inputs:i,hostDirectiveInputs:o}=e;if(r===null||!t&&i===null||t&&o===null||Hf(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let s=null,a=0;for(;a<r.length;){let l=r[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!t&&i.hasOwnProperty(l)){let c=i[l];for(let d of c)if(d===n){s??=[],s.push(l,r[a+1]);break}}else if(t&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],r[a+1]);break}}a+=2}e.initialInputs??=[],e.initialInputs.push(s)}function nx(e,n,t,r,i){e.data[r]=i;let o=i.factory||(i.factory=Gn(i.type,!0)),s=new Zr(o,Wt(i),te,null);e.blueprint[r]=s,t[r]=s,rx(e,n,r,fy(e,t,i.hostVars,at),i)}function rx(e,n,t,r,i){let o=i.hostBindings;if(o){let s=e.hostBindingOpCodes;s===null&&(s=e.hostBindingOpCodes=[]);let a=~n.index;ix(s)!=a&&s.push(a),s.push(t,r,o)}}function ix(e){let n=e.length;for(;n>0;){let t=e[--n];if(typeof t=="number"&&t<0)return t}return 0}function ox(e,n,t){if(t){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)t[n.exportAs[r]]=e;Wt(n)&&(t[""]=e)}}function sx(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function Ly(e,n,t,r,i,o,s,a){let l=n[x],c=l.consts,d=qt(c,s),f=ei(l,e,t,r,d);return o&&Fy(l,n,f,qt(c,a),i),f.mergedAttrs=Hi(f.mergedAttrs,f.attrs),f.attrs!==null&&Rl(f,f.attrs,!1),f.mergedAttrs!==null&&Rl(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Vy(e,n){Ev(e,n),yu(n)&&e.queries.elementEnd(n)}function ax(e,n,t,r,i,o){let s=n.consts,a=qt(s,i),l=ei(n,e,t,r,a);if(l.mergedAttrs=Hi(l.mergedAttrs,l.attrs),o!=null){let c=qt(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Rl(l,l.attrs,!1),l.mergedAttrs!==null&&Rl(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}var By=typeof ShadowRoot<"u",lx=typeof Document<"u";function cx(e){return Object.keys(e).map(n=>{let[t,r,i]=e[n],o={propName:t,templateName:n,isSignal:(r&zl.SignalBased)!==0};return i&&(o.transform=i),o})}function dx(e){return Object.keys(e).map(n=>({propName:e[n],templateName:n}))}function ux(e,n,t){let r=n instanceof Me?n:n?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new Tl(t,r):t}function fx(e){let n=e.get(Ne,null);if(n===null)throw new _(407,!1);let t=e.get(Ny,null),r=e.get(sn,null),i=e.get(pn,null,{optional:!0});return{rendererFactory:n,sanitizer:t,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function hx(e,n){let t=jy(e);return Qv(n,t,t==="svg"?_u:t==="math"?og:null)}function mx(e){if(e?.toLowerCase()==="script")throw new _(905,!1)}function jy(e){return(e.selectors[0][0]||"div").toLowerCase()}var zi=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=cx(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=dx(this.componentDef.outputs),this.cachedOutputs}constructor(n,t){this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=A0(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!t}create(n,t,r,i,o,s){re(Q.DynamicComponentStart);let a=R(null);try{let l=this.componentDef,c=ux(l,i||this.ngModule,n),d=fx(c),f=d.tracingService;return f&&f.componentCreate?f.componentCreate(Ry(l),()=>this.createComponentRef(d,c,t,r,o,s)):this.createComponentRef(d,c,t,r,o,s)}finally{R(a)}}createComponentRef(n,t,r,i,o,s){let a=this.componentDef,l=px(i,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=i?rI(c,i,a.encapsulation,t):hx(a,c);mx(d?.tagName);let f=t.get(ti,null),m=gx(d,()=>t.get(C,null)??jv());f&&f.addHost(m);let h=s?.some(sv)||o?.some(b=>typeof b!="function"&&b.bindings.some(sv)),p=Xf(null,l,null,512|uy(a),null,null,n,c,t,null,zv(d,t,!0));f&&By&&m instanceof ShadowRoot&&rl(p,()=>{f.removeHost(m)}),p[be]=d,al(p);let v=null;try{let b=Ly(be,p,2,"#host",()=>l.directiveRegistry,!0,0);ey(c,d,b),Ui(d,p),Qf(l,p,b),Gv(l,b,p),Vy(l,b),r!==void 0&&yx(b,this.ngContentSelectors,r),v=Tt(b.index,p),p[Ue]=v[Ue],eh(l,p,null)}catch(b){throw v!==null&&rf(v),rf(p),b}finally{re(Q.DynamicComponentEnd),ll()}return new Ol(this.componentType,p,!!h)}};function px(e,n,t,r){let i=e?["ng-version","22.0.8"]:N0(n.selectors[0]),o=null,s=null,a=0;if(t)for(let d of t)a+=d[_f].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(r)for(let d=0;d<r.length;d++){let f=r[d];if(typeof f!="function")for(let m of f.bindings){a+=m[_f].requiredVars;let h=d+1;m.create&&(m.targetIdx=h,(o??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let l=[n];if(r)for(let d of r){let f=typeof d=="function"?d:d.type,m=qa(f);l.push(m)}return Zf(0,null,vx(o,s),1,a,l,null,null,null,[i],null)}function gx(e,n){let t=e.getRootNode?.();return lx&&t instanceof Document?t.head:t&&By&&t instanceof ShadowRoot?t:n().head}function vx(e,n){return!e&&!n?null:t=>{if(t&1&&e)for(let r of e)r.create();if(t&2&&n)for(let r of n)r.update()}}function sv(e){let n=e[_f].kind;return n==="input"||n==="twoWay"}var Ol=class extends Ay{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,t,r){super(),this._rootLView=t,this._hasInputBindings=r,this._tNode=Ja(t[x],be),this.location=Gi(this._tNode,t),this.instance=Tt(this._tNode.index,t)[Ue],this.hostView=this.changeDetectorRef=new or(t,void 0),this.componentType=n}setInput(n,t){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),t))return;let i=this._rootLView,o=Jf(r,i[x],i,n,t);this.previousInputValues.set(n,t);let s=Tt(r.index,i);nh(s,1)}get injector(){return new ir(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function yx(e,n,t){let r=e.projection=[];for(let i=0;i<n.length;i++){let o=t[i];r.push(o!=null&&o.length?Array.from(o):null)}}var Rt=(()=>{class e{static __NG_ELEMENT_ID__=_x}return e})();function _x(){let e=He();return Hy(e,F())}var bf=class e extends Rt{_lContainer;_hostTNode;_hostLView;constructor(n,t,r){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=r}get element(){return Gi(this._hostTNode,this._hostLView)}get injector(){return new ir(this._hostTNode,this._hostLView)}get parentInjector(){let n=Nf(this._hostTNode,this._hostLView);if(Iv(n)){let t=Cl(n,this._hostLView),r=El(n),i=t[x].data[r+8];return new ir(i,t)}else return new ir(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let t=av(this._lContainer);return t!==null&&t[n]||null}get length(){return this._lContainer.length-ze}createEmbeddedView(n,t,r){let i,o;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector);let s=yf(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(t||{},o,s);return this.insertImpl(a,i,Ml(this._hostTNode,s)),a}createComponent(n,t,r,i,o,s,a){let l,c=t||{};l=c.index,r=c.injector,i=c.projectableNodes,o=c.environmentInjector||c.ngModuleRef,s=c.directives,a=c.bindings;let d=new zi(Yn(n)),f=r||this.parentInjector;if(!o&&d.ngModule==null){let D=this.parentInjector.get(Me,null);D&&(o=D)}let m=Yn(d.componentType??{}),h=yf(this._lContainer,m?.id??null),p=h?.firstChild??null,v=d.create(f,i,p,o,s,a);return this.insertImpl(v.hostView,l,Ml(this._hostTNode,h)),v}insert(n,t){return this.insertImpl(n,t,!0)}insertImpl(n,t,r){let i=n._lView;if(ag(i)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=i[je],c=new e(l,l[Ye],l[je]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(t),s=this._lContainer;return rh(s,i,o,r),n.attachToViewContainerRef(),uu(Wu(s),o,n),n}move(n,t){return this.insert(n,t)}indexOf(n){let t=av(this._lContainer);return t!==null?t.indexOf(n):-1}remove(n){let t=this._adjustIndex(n,-1),r=Sl(this._lContainer,t);r&&(Vo(Wu(this._lContainer),t),Wf(r[x],r))}detach(n){let t=this._adjustIndex(n,-1),r=Sl(this._lContainer,t);return r&&Vo(Wu(this._lContainer),t)!=null?new or(r):null}_adjustIndex(n,t=0){return n??this.length+t}};function av(e){return e[Ho]}function Wu(e){return e[Ho]||(e[Ho]=[])}function Hy(e,n){let t,r=n[e.index];return xt(r)?t=r:(t=Sy(r,n,null,e),n[e.index]=t,Kf(n,t)),Dx(t,n,e,r),new bf(t,e,n)}function bx(e,n){let t=e[ye],r=t.createComment(""),i=St(n,e),o=t.parentNode(i);return xl(t,o,r,t.nextSibling(i),!1),r}var Dx=wx,Ex=()=>!1;function Cx(e,n,t){return Ex(e,n,t)}function wx(e,n,t,r){if(e[er])return;let i;t.type&8?i=Mt(r):i=bx(n,t),e[er]=i}var Df=class e{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},Ef=class e{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let t=n.queries;if(t!==null){let r=n.contentQueries!==null?n.contentQueries[0]:t.length,i=[];for(let o=0;o<r;o++){let s=t.getByIndex(o),a=this.queries[s.indexInDeclarationView];i.push(a.clone())}return new e(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let t=0;t<this.queries.length;t++)ah(n,t).matches!==null&&this.queries[t].setDirty()}},kl=class{flags;read;predicate;constructor(n,t,r=null){this.flags=t,this.read=r,typeof n=="string"?this.predicate=Tx(n):this.predicate=n}},Cf=class e{queries;constructor(n=[]){this.queries=n}elementStart(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,t)}elementEnd(n){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(n)}embeddedTView(n){let t=null;for(let r=0;r<this.length;r++){let i=t!==null?t.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,t!==null?t.push(o):t=[o])}return t!==null?new e(t):null}template(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,t)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},wf=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,t=-1){this.metadata=n,this._declarationNodeIndex=t}elementStart(n,t){this.isApplyingToNode(t)&&this.matchTNode(n,t)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,t){this.elementStart(n,t)}embeddedTView(n,t){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,t),new e(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==t;)r=r.parent;return t===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,t){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,t,Ix(t,o)),this.matchTNodeWithReadOption(n,t,_l(t,n,o,!1,!1))}else r===vt?t.type&4&&this.matchTNodeWithReadOption(n,t,-1):this.matchTNodeWithReadOption(n,t,_l(t,n,r,!1,!1))}matchTNodeWithReadOption(n,t,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===N||i===Rt||i===vt&&t.type&4)this.addMatch(t.index,-2);else{let o=_l(t,n,i,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,r)}}addMatch(n,t){this.matches===null?this.matches=[n,t]:this.matches.push(n,t)}};function Ix(e,n){let t=e.localNames;if(t!==null){for(let r=0;r<t.length;r+=2)if(t[r]===n)return t[r+1]}return null}function xx(e,n){return e.type&11?Gi(e,n):e.type&4?Gl(e,n):null}function Mx(e,n,t,r){return t===-1?xx(n,e):t===-2?Sx(e,n,r):es(e,e[x],t,n)}function Sx(e,n,t){if(t===N)return Gi(n,e);if(t===vt)return Gl(n,e);if(t===Rt)return Hy(n,e)}function Uy(e,n,t,r){let i=n[cn].queries[r];if(i.matches===null){let o=e.data,s=t.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(Mx(n,d,s[l+1],t.metadata.read))}}i.matches=a}return i.matches}function If(e,n,t,r){let i=e.queries.getByIndex(t),o=i.matches;if(o!==null){let s=Uy(e,n,i,t);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)r.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let f=ze;f<d.length;f++){let m=d[f];m[Qn]===m[je]&&If(m[x],m,c,r)}if(d[Ur]!==null){let f=d[Ur];for(let m=0;m<f.length;m++){let h=f[m];If(h[x],h,c,r)}}}}}return r}function sh(e,n){return e[cn].queries[n].queryList}function zy(e,n,t){let r=new An((t&4)===4);return dg(e,n,r,r.destroy),(n[cn]??=new Ef).queries.push(new Df(r))-1}function $y(e,n,t){let r=he();return r.firstCreatePass&&(Wy(r,new kl(e,n,t),-1),(n&2)===2&&(r.staticViewQueries=!0)),zy(r,F(),n)}function Gy(e,n,t,r){let i=he();if(i.firstCreatePass){let o=He();Wy(i,new kl(n,t,r),o.index),Ax(i,e),(t&2)===2&&(i.staticContentQueries=!0)}return zy(i,F(),t)}function Tx(e){return e.split(",").map(n=>n.trim())}function Wy(e,n,t){e.queries===null&&(e.queries=new Cf),e.queries.track(new wf(n,t))}function Ax(e,n){let t=e.contentQueries||(e.contentQueries=[]),r=t.length?t[t.length-1]:-1;n!==r&&t.push(e.queries.length-1,n)}function ah(e,n){return e.queries.getByIndex(n)}function qy(e,n){let t=e[x],r=ah(t,n);return r.crossesNgTemplate?If(t,e,n,[]):Uy(t,e,r,n)}function Yy(e,n,t){let r,i=bo(()=>{r._dirtyCounter();let o=Nx(r,e);if(n&&o===void 0)throw new _(-951,!1);return o});return r=i[xe],r._dirtyCounter=K(0),r._flatValue=void 0,i}function lh(e){return Yy(!0,!1,e)}function ch(e){return Yy(!0,!0,e)}function Zy(e,n){let t=e[xe];t._lView=F(),t._queryIndex=n,t._queryList=sh(t._lView,n),t._queryList.onDirty(()=>t._dirtyCounter.update(r=>r+1))}function Nx(e,n){let t=e._lView,r=e._queryIndex;if(t===void 0||r===void 0||t[O]&4)return n?void 0:qe;let i=sh(t,r),o=qy(t,r);return i.reset(o,kv),n?i.first:i._changesDetected||e._flatValue===void 0?e._flatValue=i.toArray():e._flatValue}function ni(e){return!!e&&typeof e.then=="function"}function dh(e){return!!e&&typeof e.subscribe=="function"}var sr=class{};var rs=class extends sr{injector;instance=null;constructor(n){super();let t=new Lr([...n.providers,{provide:sr,useValue:this}],n.parent||Ti(),n.debugName,new Set(["environment"]));this.injector=t,n.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Xy(e,n,t=null){return new rs({providers:e,parent:n,debugName:t,runEnvironmentInitializers:!0}).injector}var Rx=(()=>{class e{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let r=hu(!1,t.type),i=r.length>0?Xy([r],this._injector,""):null;this.cachedInjectors.set(t,i)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=G({token:e,providedIn:"environment",factory:()=>new e(S(Me))})}return e})();function $(e){return os(()=>{let n=Ky(e),t=U(y({},n),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection!==Of.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(Rx).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||Xt.Emulated,styles:e.styles||qe,_:null,schemas:e.schemas||null,tView:null,id:""});n.standalone&&Fn("NgStandalone"),Qy(t);let r=e.dependencies;return t.directiveDefs=lv(r,Ox),t.pipeDefs=lv(r,$p),t.id=Px(t),t})}function Ox(e){return Yn(e)||qa(e)}function V(e){return os(()=>({type:e.type,bootstrap:e.bootstrap||qe,declarations:e.declarations||qe,imports:e.imports||qe,exports:e.exports||qe,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function kx(e,n){if(e==null)return Zn;let t={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],o,s,a,l;Array.isArray(i)?(a=i[0],o=i[1],s=i[2]??o,l=i[3]||null):(o=i,s=i,a=zl.None,l=null),t[o]=[r,a,l],n[o]=s}return t}function Fx(e){if(e==null)return Zn;let n={};for(let t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}function M(e){return os(()=>{let n=Ky(e);return Qy(n),n})}function uh(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone??!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function Ky(e){let n={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputConfig:e.inputs||Zn,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||qe,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:kx(e.inputs,n),outputs:Fx(e.outputs),debugInfo:null}}function Qy(e){e.features?.forEach(n=>n(e))}function lv(e,n){return e?()=>{let t=typeof e=="function"?e():e,r=[];for(let i of t){let o=n(i);o!==null&&r.push(o)}return r}:null}function Px(e){let n=0,t=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,t,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var Jy=new g("");var fh=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r});appInits=u(Jy,{optional:!0})??[];injector=u(k);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let i of this.appInits){let o=Ai(this.injector,i);if(ni(o))t.push(o);else if(dh(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});t.push(s)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(i=>{this.reject(i)}),t.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function hh(e){return n=>{n.controlDef={create:(t,r)=>{t?.\u0275ngControlCreate(r)},update:(t,r)=>{t?.\u0275ngControlUpdate?.(r)},passThroughInput:e}}}function mh(e){let n=t=>{let r=Array.isArray(e);t.hostDirectives===null?(t.resolveHostDirectives=Lx,t.hostDirectives=r?e.map(xf):[e]):r?t.hostDirectives.unshift(...e.map(xf)):t.hostDirectives.unshift(e)};return n.ngInherit=!0,n}function Lx(e){let n=[],t=!1,r=null,i=null;for(let o=0;o<e.length;o++){let s=e[o];if(s.hostDirectives!==null){let a=n.length;r??=new Map,i??=new Map,e_(s,n,r,e),i.set(s,[a,n.length-1])}o===0&&Wt(s)&&(t=!0,n.push(s))}for(let o=t?1:0;o<e.length;o++)n.push(e[o]);return r!==null&&r.forEach((o,s)=>{Vx(s.declaredInputs,o.inputs)}),[n,r,i]}function e_(e,n,t,r){if(e.hostDirectives!==null)for(let i of e.hostDirectives)if(typeof i=="function"){let o=i();for(let s of o)cv(xf(s),n,t,r)}else cv(i,n,t,r)}function cv(e,n,t,r){let i=qa(e.directive);if(e_(i,n,t,r),t.has(i)){let o=t.get(i);dv(o,e.inputs,"input"),dv(o,e.outputs,"output")}else r.includes(i)||(t.set(i,e),n.push(i))}function dv(e,n,t){let r=t==="input"?e.inputs:e.outputs;Object.keys(n).forEach(i=>{let o=n[i];(!r.hasOwnProperty(i)||r[i]===o)&&(r[i]=o)})}function xf(e){return typeof e=="function"?{directive:Le(e),inputs:{},outputs:{}}:{directive:Le(e.directive),inputs:uv(e.inputs),outputs:uv(e.outputs)}}function uv(e){let n={};if(e!==void 0&&e.length>0)for(let t=0;t<e.length;t+=2)n[e[t]]=e[t+1];return n}function Vx(e,n){for(let t in n)if(n.hasOwnProperty(t)){let r=n[t],i=e[t];e[r]=i}}function Bx(e){return Object.getPrototypeOf(e.prototype).constructor}function de(e){let n=Bx(e.type),t=!0,r=[e];for(;n;){let i;if(Wt(e))i=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new _(903,!1);i=n.\u0275dir}if(i){if(t){r.push(i);let s=e;s.inputs=qu(e.inputs),s.declaredInputs=qu(e.declaredInputs),s.outputs=qu(e.outputs);let a=i.hostBindings;a&&$x(e,a);let l=i.viewQuery,c=i.contentQueries;if(l&&Ux(e,l),c&&zx(e,c),jx(e,i),zp(e.outputs,i.outputs),Wt(i)&&i.data.animation){let d=e.data;d.animation=(d.animation||[]).concat(i.data.animation)}}let o=i.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(e),a===de&&(t=!1)}}n=Object.getPrototypeOf(n)}Hx(r)}function jx(e,n){for(let t in n.inputs){if(!n.inputs.hasOwnProperty(t)||e.inputs.hasOwnProperty(t))continue;let r=n.inputs[t];r!==void 0&&(e.inputs[t]=r,e.declaredInputs[t]=n.declaredInputs[t])}}function Hx(e){let n=0,t=null;for(let r=e.length-1;r>=0;r--){let i=e[r];i.hostVars=n+=i.hostVars,i.hostAttrs=Hi(i.hostAttrs,t=Hi(t,i.hostAttrs))}}function qu(e){return e===Zn?{}:e===qe?[]:e}function Ux(e,n){let t=e.viewQuery;t?e.viewQuery=(r,i)=>{n(r,i),t(r,i)}:e.viewQuery=n}function zx(e,n){let t=e.contentQueries;t?e.contentQueries=(r,i,o)=>{n(r,i,o),t(r,i,o)}:e.contentQueries=n}function $x(e,n){let t=e.hostBindings;t?e.hostBindings=(r,i)=>{n(r,i),t(r,i)}:e.hostBindings=n}function t_(e,n,t,r,i,o,s,a){if(t.firstCreatePass){e.mergedAttrs=Hi(e.mergedAttrs,e.attrs);let d=e.tView=Zf(2,e,i,o,s,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,e),d.queries=t.queries.embeddedTView(e))}a&&(e.flags|=a),Gr(e,!1);let l=Wx(t,n,e,r);dl()&&qf(t,n,l,e),Ui(l,n);let c=Sy(l,n,l,e);n[r+be]=c,Kf(n,c),Cx(c,e,n)}function Gx(e,n,t,r,i,o,s,a,l,c,d){let f=t+be,m;return n.firstCreatePass?(m=ei(n,f,4,s||null,a||null),xu()&&Fy(n,e,m,qt(n.consts,c),gy),Ev(n,m)):m=n.data[f],t_(m,e,n,t,r,i,o,l),Uo(m)&&Qf(n,e,m),c!=null&&$l(e,m,d),m}function Yl(e,n,t,r,i,o,s,a,l,c,d){let f=t+be,m;if(n.firstCreatePass){if(m=ei(n,f,4,s||null,a||null),c!=null){let h=qt(n.consts,c);m.localNames=[];for(let p=0;p<h.length;p+=2)m.localNames.push(h[p],-1)}}else m=n.data[f];return t_(m,e,n,t,r,i,o,l),c!=null&&$l(e,m,d),m}function Ot(e,n,t,r,i,o,s,a){let l=F(),c=he(),d=qt(c.consts,o);return Gx(l,c,e,n,t,r,i,d,void 0,s,a),Ot}function Zl(e,n,t,r,i,o,s,a){let l=F(),c=he(),d=qt(c.consts,o);return Yl(l,c,e,n,t,r,i,d,void 0,s,a),Zl}var Wx=qx;function qx(e,n,t,r){return ul(!0),n[ye].createComment("")}var ph=new g("");var Xl=new g("");function n_(){Sd(()=>{let e="";throw new _(600,e)})}var Yx=10;var _t=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Tn);afterRenderManager=u(jl);zonelessEnabled=u(Zo);rootEffectScheduler=u(hl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new E;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Wr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ce(t=>!t))}constructor(){u(pn,{optional:!0})}whenStable(){let t;return new Promise(r=>{t=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{t.unsubscribe()})}_injector=u(Me);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,r){return this.bootstrapImpl(t,r)}bootstrapImpl(t,r,i=k.NULL){return this._injector.get(I).run(()=>{if(re(Q.BootstrapComponentStart),!this._injector.get(fh).done){let D="";throw new _(405,D)}let a=Yn(t),l=this._injector.get(sr),c=new zi(a,l);this.componentTypes.push(t);let{hostElement:d,directives:f,bindings:m}=Zx(r),h=d||c.selector,p=c.create(i,[],h,l.injector,f,m),v=p.location.nativeElement,b=p.injector.get(ph,null);return b?.registerApplication(v),p.onDestroy(()=>{this.detachView(p.hostView),Jo(this.components,p),b?.unregisterApplication(v)}),this._loadComponent(p),re(Q.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){re(Q.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Bl.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw re(Q.ChangeDetectionEnd),new _(101,!1);let t=R(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,R(t),this.afterTick.next(),re(Q.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ne,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<Yx;){re(Q.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{re(Q.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!$o(i))continue;let o=r&&!this.zonelessEnabled?0:1;wy(i,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>$o(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){let r=t;Jo(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(t),this._injector.get(Xl,[]).forEach(i=>i(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Jo(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new _(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function Zx(e){return e===void 0||typeof e=="string"||e instanceof Element?{hostElement:e}:e}function Jo(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function me(e,n,t,r){let i=F(),o=Fi();if(Rn(i,o,n)){let s=he(),a=Wo();fI(a,i,e,n,t,r)}return me}function ue(e,n,t,r,i,o,s,a){Fn("NgControlFlow");let l=F(),c=he(),d=qt(c.consts,o);return Yl(l,c,e,n,t,r,i,d,256,s,a),gh}function gh(e,n,t,r,i,o,s,a){Fn("NgControlFlow");let l=F(),c=he(),d=qt(c.consts,o);return Yl(l,c,e,n,t,r,i,d,512,s,a),gh}function fe(e,n){Fn("NgControlFlow");let t=F(),r=Fi(),i=t[r]!==at?t[r]:-1,o=i!==-1?fv(t,be+i):void 0,s=0;if(Rn(t,r,e)){let a=R(null);try{if(o!==void 0&&OI(o,s),e!==-1){let l=be+e,c=fv(t,l),d=Xx(t[x],l),f=HI(c,d,t),m=th(t,d,n,{dehydratedView:f});rh(c,m,s,Ml(d,f))}}finally{R(a)}}else if(o!==void 0){let a=RI(o,s);a!==void 0&&(a[Ue]=n)}}function fv(e,n){return e[n]}function Xx(e,n){return Ja(e,n)}function lt(e,n,t){let r=F(),i=Fi();if(Rn(r,i,n)){let o=he(),s=Wo();aI(s,r,e,n,r[ye],t)}return lt}function Mf(e,n,t,r,i){Jf(n,e,t,i?"class":"style",r)}function T(e,n,t,r){let i=F(),o=i[x],s=e+be,a=o.firstCreatePass?Ly(s,i,2,n,gy,xu(),t,r):o.data[s];if(Sn(a)){let l=i[ln].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(Ry(c),()=>(hv(e,n,i,a,r),T))}}return hv(e,n,i,a,r),T}function hv(e,n,t,r,i){if(vy(r,t,e,n,r_),Uo(r)){let o=t[x];Qf(o,t,r),Gv(o,r,t)}i!=null&&$l(t,r)}function A(){let e=he(),n=He(),t=yy(n);return e.firstCreatePass&&Vy(e,t),Su(t)&&Tu(),Iu(),t.classesWithoutHost!=null&&Aw(t)&&Mf(e,t,F(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&Nw(t)&&Mf(e,t,F(),t.stylesWithoutHost,!1),A}function Se(e,n,t,r){return T(e,n,t,r),A(),Se}function Re(e,n,t,r){let i=F(),o=i[x],s=e+be,a=o.firstCreatePass?ax(s,o,2,n,t,r):o.data[s];return vy(a,i,e,n,r_),r!=null&&$l(i,a),Re}function Ve(){let e=He(),n=yy(e);return Su(n)&&Tu(),Iu(),Ve}function $e(e,n,t,r){return Re(e,n,t,r),Ve(),$e}var r_=(e,n,t,r,i)=>(ul(!0),Qv(n[ye],r,Lu()));function as(){return F()}function Kt(e,n,t){let r=F(),i=Fi();if(Rn(r,i,n)){let o=he(),s=Wo();py(s,r,e,n,r[ye],t)}return Kt}var Xo=void 0;function Kx(e){let n=Math.floor(Math.abs(e)),t=e.toString().replace(/^[^.]*\.?/,"").length;return n===1&&t===0?1:5}var Qx=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Xo,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Xo,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",Xo,Xo,Xo],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",Kx],Yu=Object.create(null);function bt(e){let n=Jx(e),t=mv(n);if(t)return t;let r=n.split("-")[0];if(t=mv(r),t)return t;if(r==="en")return Qx;throw new _(701,!1)}function mv(e){if(!(e in Yu)){let n=an.ng&&an.ng.common&&an.ng.common.locales&&an.ng.common.locales[e];return n!==void 0&&(Yu[e]=n),n}return Yu[e]}var Oe={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};function Jx(e){return e.toLowerCase().replace(/_/g,"-")}var ls="en-US";var eM=ls;function i_(e){typeof e=="string"&&(eM=e.toLowerCase().replace(/_/g,"-"))}function Te(e,n,t){let r=F(),i=he(),o=He();return tM(i,r,r[ye],o,e,n,t),Te}function Kl(e,n,t){let r=F(),i=he(),o=He();return(o.type&3||t)&&ih(o,i,r,t,r[ye],e,n,Yr(o,r,n)),Kl}function tM(e,n,t,r,i,o,s){let a=!0,l=null;if((r.type&3||s)&&(l??=Yr(r,n,o),ih(r,e,n,s,t,i,o,l)&&(a=!1)),a){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let m=d[f],h=d[f+1];l??=Yr(r,n,o),Al(r,n,m,h,i,l)}if(c&&c.length)for(let f of c)l??=Yr(r,n,o),Al(r,n,f,i,i,l)}}function ke(e=1){return wg(e)}function nM(e,n){let t=null,r=I0(e);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){t=i;continue}if(r===null?ny(e,o,!0):S0(r,o))return i}return t}function Be(e){let n=F()[ot][Ye];if(!n.projection){let t=e?e.length:1,r=n.projection=Xp(t,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=e?nM(o,e):0;s!==null&&(i[s]?i[s].projectionNext=o:r[s]=o,i[s]=o)}o=o.next}}}function W(e,n=0,t,r,i,o){let s=F(),a=he(),l=r?e+1:null;l!==null&&Yl(s,a,l,r,i,o,null,t);let c=ei(a,be+e,16,null,t||null);c.projection===null&&(c.projection=n),Ru();let f=!s[Ni]||Mu();s[ot][Ye].projection[c.projection]===null&&l!==null?rM(s,a,l):f&&!Pl(c)&&K0(a,s,c)}function rM(e,n,t){let r=be+t,i=n.data[r],o=e[r],s=yf(o,i.tView.ssrId),a=th(e,i,void 0,{dehydratedView:s});rh(o,a,0,Ml(i,s))}function ar(e,n,t,r){return Gy(e,n,t,r),ar}function gn(e,n,t){return $y(e,n,t),gn}function pe(e){let n=F(),t=he(),r=sl();Go(r+1);let i=ah(t,r);if(e.dirty&&sg(n)===((i.metadata.flags&2)===2)){if(i.matches===null)e.reset([]);else{let o=qy(n,r);e.reset(o,kv),e.notifyOnChanges()}return!0}return!1}function ge(){return sh(F(),sl())}function Ql(e,n,t,r,i){return Zy(n,Gy(e,t,r,i)),Ql}function Jl(e,n,t,r){return Zy(e,$y(n,t,r)),Jl}function ec(e=1){Go(sl()+e)}function lr(e){let n=Ou();return el(n,be+e)}function gl(e,n){return e<<17|n<<2}function Qr(e){return e>>17&32767}function iM(e){return(e&2)==2}function oM(e,n){return e&131071|n<<17}function Sf(e){return e|2}function $i(e){return(e&131068)>>2}function Zu(e,n){return e&-131069|n<<2}function sM(e){return(e&1)===1}function Tf(e){return e|1}function aM(e,n,t,r,i,o){let s=o?n.classBindings:n.styleBindings,a=Qr(s),l=$i(s);e[r]=t;let c=!1,d;if(Array.isArray(t)){let f=t;d=f[1],(d===null||Si(f,d)>0)&&(c=!0)}else d=t;if(i)if(l!==0){let m=Qr(e[a+1]);e[r+1]=gl(m,a),m!==0&&(e[m+1]=Zu(e[m+1],r)),e[a+1]=oM(e[a+1],r)}else e[r+1]=gl(a,0),a!==0&&(e[a+1]=Zu(e[a+1],r)),a=r;else e[r+1]=gl(l,0),a===0?a=r:e[l+1]=Zu(e[l+1],r),l=r;c&&(e[r+1]=Sf(e[r+1])),pv(e,d,r,!0),pv(e,d,r,!1),lM(n,d,e,r,o),s=gl(a,l),o?n.classBindings=s:n.styleBindings=s}function lM(e,n,t,r,i){let o=i?e.residualClasses:e.residualStyles;o!=null&&typeof n=="string"&&Si(o,n)>=0&&(t[r+1]=Tf(t[r+1]))}function pv(e,n,t,r){let i=e[t+1],o=n===null,s=r?Qr(i):$i(i),a=!1;for(;s!==0&&(a===!1||o);){let l=e[s],c=e[s+1];cM(l,n)&&(a=!0,e[s+1]=r?Tf(c):Sf(c)),s=r?Qr(c):$i(c)}a&&(e[t+1]=r?Sf(i):Tf(i))}function cM(e,n){return e===null||n==null||(Array.isArray(e)?e[1]:e)===n?!0:Array.isArray(e)&&typeof n=="string"?Si(e,n)>=0:!1}var Zt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function dM(e){return e.substring(Zt.key,Zt.keyEnd)}function uM(e){return fM(e),o_(e,s_(e,0,Zt.textEnd))}function o_(e,n){let t=Zt.textEnd;return t===n?-1:(n=Zt.keyEnd=hM(e,Zt.key=n,t),s_(e,n,t))}function fM(e){Zt.key=0,Zt.keyEnd=0,Zt.value=0,Zt.valueEnd=0,Zt.textEnd=e.length}function s_(e,n,t){for(;n<t&&e.charCodeAt(n)<=32;)n++;return n}function hM(e,n,t){for(;n<t&&e.charCodeAt(n)>32;)n++;return n}function cr(e,n,t){return a_(e,n,t,!1),cr}function q(e,n){return a_(e,n,null,!0),q}function Qt(e){pM(DM,mM,e,!0)}function mM(e,n){for(let t=uM(n);t>=0;t=o_(n,t))Xa(e,dM(n),!0)}function a_(e,n,t,r){let i=F(),o=he(),s=il(2);if(o.firstUpdatePass&&c_(o,e,s,r),n!==at&&Rn(i,s,n)){let a=o.data[fn()];d_(o,a,i,i[ye],e,i[s+1]=CM(n,t),r,s)}}function pM(e,n,t,r){let i=he(),o=il(2);i.firstUpdatePass&&c_(i,null,o,r);let s=F();if(t!==at&&Rn(s,o,t)){let a=i.data[fn()];if(u_(a,r)&&!l_(i,o)){let l=r?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(t=$a(l,t||"")),Mf(i,a,s,t,r)}else EM(i,a,s,s[ye],s[o+1],s[o+1]=bM(e,n,t),r,o)}}function l_(e,n){return n>=e.expandoStartIndex}function c_(e,n,t,r){let i=e.data;if(i[t+1]===null){let o=i[fn()],s=l_(e,t);u_(o,r)&&n===null&&!s&&(n=!1),n=gM(i,o,n,r),aM(i,o,n,t,s,r)}}function gM(e,n,t,r){let i=bg(e),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(t=Xu(null,e,n,t,r),t=is(t,n.attrs,r),o=null);else{let s=n.directiveStylingLast;if(s===-1||e[s]!==i)if(t=Xu(i,e,n,t,r),o===null){let l=vM(e,n,r);l!==void 0&&Array.isArray(l)&&(l=Xu(null,e,n,l[1],r),l=is(l,n.attrs,r),yM(e,n,r,l))}else o=_M(e,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),t}function vM(e,n,t){let r=t?n.classBindings:n.styleBindings;if($i(r)!==0)return e[Qr(r)]}function yM(e,n,t,r){let i=t?n.classBindings:n.styleBindings;e[Qr(i)]=r}function _M(e,n,t){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let s=e[o].hostAttrs;r=is(r,s,t)}return is(r,n.attrs,t)}function Xu(e,n,t,r,i){let o=null,s=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<s&&(o=n[a],r=is(r,o.hostAttrs,i),o!==e);)a++;return e!==null&&(t.directiveStylingLast=a),r}function is(e,n,t){let r=t?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?i=s:i===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),Xa(e,s,t?!0:n[++o]))}return e===void 0?null:e}function bM(e,n,t){if(t==null||t==="")return qe;let r=[],i=On(t);if(Array.isArray(i))for(let o=0;o<i.length;o++)e(r,i[o],!0);else if(i instanceof Set)for(let o of i)e(r,o,!0);else if(typeof i=="object")for(let o in i)Object.hasOwn(i,o)&&e(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function DM(e,n,t){let r=String(n);r!==""&&!r.includes(" ")&&Xa(e,r,t)}function EM(e,n,t,r,i,o,s,a){i===at&&(i=qe);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let m=l<i.length?i[l+1]:void 0,h=c<o.length?o[c+1]:void 0,p=null,v;d===f?(l+=2,c+=2,m!==h&&(p=f,v=h)):f===null||d!==null&&d<f?(l+=2,p=d):(c+=2,p=f,v=h),p!==null&&d_(e,n,t,r,p,v,s,a),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function d_(e,n,t,r,i,o,s,a){if(!(n.type&3))return;let l=e.data,c=l[a+1],d=sM(c)?gv(l,n,t,i,$i(c),s):void 0;if(!Fl(d)){Fl(o)||iM(c)&&(o=gv(l,null,t,i,a,s));let f=bu(fn(),t);J0(r,s,f,i,o)}}function gv(e,n,t,r,i,o){let s=n===null,a;for(;i>0;){let l=e[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,m=t[i+1];m===at&&(m=f?qe:void 0);let h=f?Ka(m,r):d===r?m:void 0;if(c&&!Fl(h)&&(h=Ka(l,r)),Fl(h)&&(a=h,s))return a;let p=e[i+1];i=s?Qr(p):$i(p)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=Ka(l,r))}return a}function Fl(e){return e!==void 0}function CM(e,n){return e==null||e===""||(typeof n=="string"?e=e+n:typeof e=="object"&&(e=za(On(e)))),e}function u_(e,n){return(e.flags&(n?8:16))!==0}function ne(e,n=""){let t=F(),r=he(),i=e+be,o=r.firstCreatePass?ei(r,i,1,n,null):r.data[i],s=wM(r,t,o,n);t[i]=s,dl()&&qf(r,t,s,o),Gr(o,!1)}var wM=(e,n,t,r)=>(ul(!0),p0(n[ye],r));function IM(e,n,t,r=""){return Rn(e,Fi(),t)?n+Lo(t)+r:at}function xM(e,n,t,r,i,o=""){let s=pg(),a=Oy(e,s,t,i);return il(2),a?n+Lo(t)+r+Lo(i)+o:at}function Wi(e){return vn("",e),Wi}function vn(e,n,t){let r=F(),i=IM(r,e,n,t);return i!==at&&f_(r,fn(),i),vn}function cs(e,n,t,r,i){let o=F(),s=xM(o,e,n,t,r,i);return s!==at&&f_(o,fn(),s),cs}function f_(e,n,t){let r=bu(n,e);g0(e[ye],r,t)}var h_={};function tc(e){Fn("NgLet");let n=he(),t=F(),r=e+be,i=ei(n,r,128,null,null);return Gr(i,!1),zo(n,t,r,h_),tc}function vh(e){let n=he(),t=F(),r=fn();return zo(n,t,r,e),e}function nc(e){let n=Ou(),t=el(n,be+e);if(t===h_)throw new _(314,!1);return t}function vv(e,n,t){let r=he();r.firstCreatePass&&m_(n,r.data,r.blueprint,Wt(e),t)}function m_(e,n,t,r,i){if(e=Le(e),Array.isArray(e))for(let o=0;o<e.length;o++)m_(e[o],n,t,r,i);else{let o=he(),s=F(),a=He(),l=Pr(e)?e:Le(e.provide),c=pu(e),d=a.providerIndexes&1048575,f=a.directiveStart,m=a.providerIndexes>>20;if(Pr(e)||!e.multi){let h=new Zr(c,i,te,null),p=Qu(l,n,i?d:d+m,f);p===-1?(tf(Il(a,s),o,l),Ku(o,e,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),t.push(h),s.push(h)):(t[p]=h,s[p]=h)}else{let h=Qu(l,n,d+m,f),p=Qu(l,n,d,d+m),v=h>=0&&t[h],b=p>=0&&t[p];if(i&&!b||!i&&!v){tf(Il(a,s),o,l);let D=TM(i?SM:MM,t.length,i,r,c,e);!i&&b&&(t[p].providerFactory=D),Ku(o,e,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,i&&(a.providerIndexes+=1048576),t.push(D),s.push(D)}else{let D=p_(t[i?p:h],c,!i&&r);Ku(o,e,h>-1?h:p,D)}!i&&r&&b&&t[p].componentProviders++}}}function Ku(e,n,t,r){let i=Pr(n),o=ng(n);if(i||o){let l=(o?Le(n.useClass):n).prototype.ngOnDestroy;if(l){let c=e.destroyHooks||(e.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(t);d===-1?c.push(t,[r,l]):c[d+1].push(r,l)}else c.push(t,l)}}}function p_(e,n,t){return t&&e.componentProviders++,e.multi.push(n)-1}function Qu(e,n,t,r){for(let i=t;i<r;i++)if(n[i]===e)return i;return-1}function MM(e,n,t,r,i){return Af(this.multi,[])}function SM(e,n,t,r,i){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=es(r,r[x],this.providerFactory.index,i);s=l.slice(0,a),Af(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Af(o,s);return s}function Af(e,n){for(let t=0;t<e.length;t++){let r=e[t];n.push(r())}return n}function TM(e,n,t,r,i,o){let s=new Zr(e,t,te,null);return s.multi=[],s.index=n,s.componentProviders=0,p_(s,i,r&&!t),s}function tt(e,n){return t=>{t.providersResolver=(r,i)=>vv(r,i?i(e):e,!1),n&&(t.viewProvidersResolver=(r,i)=>vv(r,i?i(n):n,!0))}}function AM(e,n){let t=e[n];return t===at?void 0:t}function NM(e,n,t,r,i,o,s){let a=n+t;return Oy(e,a,i,o)?zI(e,a+2,s?r.call(s,i,o):r(i,o)):AM(e,a+2)}function yh(e,n){let t=he(),r,i=e+be;t.firstCreatePass?(r=RM(n,t.pipeRegistry),t.data[i]=r,r.onDestroy&&(t.destroyHooks??=[]).push(i,r.onDestroy)):r=t.data[i];let o=r.factory||(r.factory=Gn(r.type,!0)),s,a=Qe(te);try{let l=wl(!1),c=o();return wl(l),zo(t,F(),i,c),c}finally{Qe(a)}}function RM(e,n){if(n)for(let t=n.length-1;t>=0;t--){let r=n[t];if(e===r.name)return r}}function _h(e,n,t,r){let i=e+be,o=F(),s=el(o,i);return OM(o,i)?NM(o,mg(),n,s.transform,t,r,s):s.transform(t,r)}function OM(e,n){return e[x].data[n].pure}function ds(e,n){return Gl(e,n)}var g_=(()=>{class e{applicationErrorHandler=u(Tn);appRef=u(_t);taskService=u(Wr);ngZone=u(I);zonelessEnabled=u(Zo);tracing=u(pn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Z;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Fo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Uu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Tg:Vu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Fo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function v_(){return[{provide:sn,useExisting:g_},{provide:I,useClass:Po},{provide:Zo,useValue:!0}]}function kM(){return typeof $localize<"u"&&$localize.locale||ls}var us=new g("",{factory:()=>u(us,{optional:!0,skipSelf:!0})||kM()});var Ih=new g("");function we(e,n){return bo(e,n?.equal)}function ee(e){return up(e)}var rc=class extends Error{dependency;constructor(n){super("Dependency error",{cause:n.error()}),this.name="ResourceDependencyError",this.dependency=n}},ri=class e extends Error{_brand;constructor(n){super(n)}static IDLE=new e("IDLE");static LOADING=new e("LOADING")},FM=e=>e;function dr(e,n){if(typeof e=="function"){let t=Od(e,FM,n?.equal);return y_(t,n?.debugName)}else{let t=Od(e.source,e.computation,e.equal);return y_(t,e.debugName)}}function y_(e,n){let t=e[xe],r=e;return r.set=i=>cp(t,i),r.update=i=>dp(t,i),r.asReadonly=qo.bind(e),r}var bh=class{value;isLoading;constructor(n,t){this.value=n,this.value.set=this.set.bind(this),this.value.update=this.update.bind(this),this.value.asReadonly=qo,this.isLoading=we(()=>this.status()==="loading"||this.status()==="reloading",void 0)}isError=we(()=>this.status()==="error");update(n){this.set(n(ee(this.value)))}isValueDefined=we(()=>this.isError()?!1:this.value()!==void 0);_snapshot;get snapshot(){return this._snapshot??=we(()=>{let n=this.status();return n==="error"?{status:"error",error:this.error()}:{status:n,value:this.value()}})}hasValue(){return this.isValueDefined()}asReadonly(){return this}},fs=class extends bh{loaderFn;equal;debugName;transferCacheKey;pendingTasks;state;extRequest;effectRef;pendingController;resolvePendingTask=void 0;destroyed=!1;unregisterOnDestroy;status;error;transferState;constructor(n,t,r,i,o,s,a,l){if(D_())throw E_();super(we(()=>{let d=this.state().stream?.();if(!d||this.state().status==="loading"&&this.error())return r;if(!Dh(d))throw new ic(this.error());return d.value},{equal:i}),o),this.loaderFn=t,this.equal=i,this.debugName=o,this.transferCacheKey=a;let c=s.get(Ih,void 0,{optional:!0})??{isActive:!1};this.transferState=s.get(Pi,void 0,{optional:!0})??void 0,this.extRequest=dr(()=>{try{return Ch(!0),{request:n(LM),reload:0}}catch(d){return wh(d),d===ri.IDLE?{status:"idle",reload:0}:d===ri.LOADING?{status:"loading",reload:0}:{error:d,reload:0}}finally{Ch(!1)}},void 0),this.state=dr({source:this.extRequest,computation:(d,f)=>{let{request:m,status:h,error:p}=d,v;if(p)h="resolved",v=K({error:hs(p)},void 0);else if(!h)if(f)h=m===void 0?"idle":"loading",f.value.extRequest.request===m&&(v=f.value.stream);else{let b=this.transferState,D=this.transferCacheKey;c.isActive&&D&&b&&m!==void 0&&b.hasKey(D)&&(v=K({value:b.get(D,r)},void 0)),v||(v=l?.(d.request)),l=void 0,h=m===void 0?"idle":v?"resolved":"loading"}return{extRequest:d,status:h,previousStatus:f?__(f.value):"idle",stream:v}}}),this.effectRef=gt(this.loadEffect.bind(this),{injector:s,manualCleanup:!0}),this.pendingTasks=s.get(Vi),this.unregisterOnDestroy=s.get(Ze).onDestroy(()=>this.destroy()),this.status=we(()=>__(this.state()),void 0),this.error=we(()=>{let d=this.state().stream?.();return d&&!Dh(d)?d.error:void 0},void 0)}set(n){if(this.destroyed)return;let t=ee(this.error),r=ee(this.state);if(!t){let i=ee(this.value);if(r.status==="local"&&(this.equal?this.equal(i,n):i===n))return}this.state.set({extRequest:r.extRequest,status:"local",previousStatus:"local",stream:K({value:n},void 0)}),this.abortInProgressLoad()}reload(){let{status:n}=ee(this.state);return n==="idle"||n==="loading"?!1:(this.extRequest.update(({request:t,reload:r})=>({request:t,reload:r+1})),!0)}destroy(){this.destroyed=!0,this.unregisterOnDestroy(),this.effectRef.destroy(),this.abortInProgressLoad(),this.state.set({extRequest:{request:void 0,reload:0},status:"idle",previousStatus:"idle",stream:void 0})}async loadEffect(){let n=this.extRequest(),{status:t,previousStatus:r}=ee(this.state);if(n.request===void 0)return;if(t!=="loading")return;this.abortInProgressLoad();let i=this.resolvePendingTask=this.pendingTasks.add(),{signal:o}=this.pendingController=new AbortController;try{let s=ee(()=>this.loaderFn({params:n.request,abortSignal:o,previous:{status:r}})),a=()=>o.aborted||ee(this.extRequest)!==n;if(At(s)){if(a())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:s});let l=ee(s)}else{let l=await s;if(a())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:l});let c=l?ee(l):void 0}}catch(s){if(wh(s),o.aborted||ee(this.extRequest)!==n)return;this.state.set({extRequest:n,status:"resolved",previousStatus:"error",stream:K({error:hs(s)},void 0)})}finally{i?.(),i=void 0}}abortInProgressLoad(){ee(()=>this.pendingController?.abort()),this.pendingController=void 0,this.resolvePendingTask?.(),this.resolvePendingTask=void 0}};function __(e){switch(e.status){case"loading":return e.extRequest.reload===0?"loading":"reloading";case"resolved":return Dh(e.stream())?"resolved":"error";default:return e.status}}function Dh(e){return e.error===void 0}function hs(e){return PM(e)?e:new Eh(e)}function PM(e){return e instanceof Error||typeof e=="object"&&typeof e.name=="string"&&typeof e.message=="string"}var ic=class extends Error{constructor(n){super(n.message,{cause:n})}},Eh=class extends Error{constructor(n){super(String(n),{cause:n})}};function xh(e){switch(e.status()){case"idle":throw ri.IDLE;case"error":throw new rc(e);case"loading":case"reloading":throw ri.LOADING}return e.value()}var LM={chain:xh},b_=!1;function D_(){return b_}function Ch(e){b_=e}function E_(){return new _(992,!1)}function wh(e){if(e instanceof _&&e.code===992)throw e}var S_=Symbol("InputSignalNode#UNSET"),QM=U(y({},Do),{transformFn:void 0,applyValueToInputSignal(e,n){xr(e,n)}});function T_(e,n){let t=Object.create(QM);t.value=e,t.transformFn=n?.transform;function r(){if(Hn(t),t.value===S_){let i=null;throw new _(-950,i)}return t.value}return r[xe]=t,r}var sc=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Rf(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function C_(e,n){return T_(e,n)}function JM(e){return T_(S_,e)}var Ah=(C_.required=JM,C_);function w_(e,n){return lh(n)}function eS(e,n){return ch(n)}var ps=(w_.required=eS,w_);function I_(e,n){return lh(n)}function tS(e,n){return ch(n)}var A_=(I_.required=tS,I_);var nS=1e4;var M$=nS-1e3;var ct=(()=>{class e{static __NG_ELEMENT_ID__=rS}return e})();function rS(e){return iS(He(),F(),(e&16)===16)}function iS(e,n,t){if(Sn(e)&&!t){let r=Tt(e.index,n);return new or(r,r)}else if(e.type&175){let r=n[ot];return new or(r,n)}return null}var Sh=new g(""),oS=new g("");function ms(e){return!e.moduleRef}function sS(e){let n=ms(e)?e.r3Injector:e.moduleRef.injector,t=n.get(I);return t.run(()=>{ms(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=n.get(Tn),i;if(t.runOutsideAngular(()=>{i=t.onError.subscribe({next:r})}),ms(e)){let o=()=>n.destroy(),s=e.platformInjector.get(Sh);s.add(o),n.onDestroy(()=>{i.unsubscribe(),s.delete(o)})}else{let o=()=>e.moduleRef.destroy(),s=e.platformInjector.get(Sh);s.add(o),e.moduleRef.onDestroy(()=>{Jo(e.allPlatformModules,e.moduleRef),i.unsubscribe(),s.delete(o)})}return lS(r,t,()=>{let o=n.get(Wr),s=o.add(),a=n.get(fh);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(us,ls);if(i_(l||ls),!n.get(oS,!0))return ms(e)?n.get(_t):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(ms(e)){let d=n.get(_t);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return aS?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{o.remove(s)})})})}var aS;function lS(e,n,t){try{let r=t();return ni(r)?r.catch(i=>{throw n.runOutsideAngular(()=>e(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>e(r)),r}}var oc=null;function cS(e=[],n){return k.create({name:n,providers:[{provide:jo,useValue:"platform"},{provide:Sh,useValue:new Set([()=>oc=null])},...e]})}function dS(e=[]){if(oc)return oc;let n=cS(e);return oc=n,n_(),uS(n),n}function uS(e){let n=e.get(fl,null);Ai(e,()=>{n?.forEach(t=>t())})}function N_(e){let{rootComponent:n,appProviders:t,platformProviders:r,platformRef:i}=e;re(Q.BootstrapApplicationStart);try{let o=i?.injector??dS(r),s=[v_(),Ng,...t||[]],a=new rs({providers:s,parent:o,debugName:"",runEnvironmentInitializers:!1});return sS({r3Injector:a.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{re(Q.BootstrapApplicationEnd)}}function Ie(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function gs(e,n=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):n}var Mh=Symbol("NOT_SET"),R_=new Set,fS=U(y({},Do),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Mh,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(e){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Mh&&!gi(this))return this.signal;try{for(let i of this.cleanup??R_)i()}finally{this.cleanup?.clear()}let n=[];e!==void 0&&n.push(e),n.push(this.registerCleanupFn);let t=bn(this),r;try{r=this.userFn.apply(null,n)}finally{Un(this,t)}return(this.value===Mh||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Th=class extends ts{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,t,r,i,o,s=null){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(Ze),s),this.scheduler=i;for(let a of zf){let l=t[a];if(l===void 0)continue;let c=Object.create(fS);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(Hn(c),c.value),c.signal[xe]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let t of n.cleanup??R_)t()}finally{zn(n)}}};function Nh(e,n){let t=n?.injector??u(k),r=t.get(sn),i=t.get(jl),o=t.get(pn,null,{optional:!0});i.impl??=t.get($f);let s=e;typeof s=="function"&&(s={mixedReadWrite:e});let a=t.get(Li,null,{optional:!0}),l=new Th(i.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,r,t,o?.snapshot(null));return i.impl.register(l),l}function ac(e,n){let t=Yn(e),r=n.elementInjector||Ti();return new zi(t).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}var O_=null;function kt(){return O_}function Rh(e){O_??=e}var vs=class{},qi=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=G({token:e,factory:()=>u(k_),providedIn:"platform"})}return e})();var k_=(()=>{class e extends qi{_location;_history;_doc=u(C);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return kt().getBaseHref(this._doc)}onPopState(t){let r=kt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=kt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=G({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function L_(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function F_(e){let n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function ur(e){return e&&e[0]!=="?"?`?${e}`:e}var lc=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=G({token:e,factory:()=>u(mS),providedIn:"root"})}return e})(),hS=new g(""),mS=(()=>{class e extends lc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(C).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return L_(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+ur(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,o){let s=this.prepareExternalUrl(i+ur(o));this._platformLocation.pushState(t,r,s)}replaceState(t,r,i,o){let s=this.prepareExternalUrl(i+ur(o));this._platformLocation.replaceState(t,r,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(S(qi),S(hS,8))};static \u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var cc=(()=>{class e{_subject=new E;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=vS(F_(P_(r))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+ur(r))}normalize(t){return e.stripTrailingSlash(gS(this._basePath,P_(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ur(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ur(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=ur;static joinWithSlash=L_;static stripTrailingSlash=F_;static \u0275fac=function(r){return new(r||e)(S(lc))};static \u0275prov=G({token:e,factory:()=>pS(),providedIn:"root"})}return e})();function pS(){return new cc(S(lc))}function gS(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function P_(e){return e.replace(/\/index\.html$/,"")}function vS(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var Xe=(function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e})(Xe||{}),ae=(function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e})(ae||{}),dt=(function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e})(dt||{}),Ln={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function B_(e){return bt(e)[Oe.LocaleId]}function j_(e,n,t){let r=bt(e),i=[r[Oe.DayPeriodsFormat],r[Oe.DayPeriodsStandalone]],o=Ft(i,n);return Ft(o,t)}function H_(e,n,t){let r=bt(e),i=[r[Oe.DaysFormat],r[Oe.DaysStandalone]],o=Ft(i,n);return Ft(o,t)}function U_(e,n,t){let r=bt(e),i=[r[Oe.MonthsFormat],r[Oe.MonthsStandalone]],o=Ft(i,n);return Ft(o,t)}function z_(e,n){let r=bt(e)[Oe.Eras];return Ft(r,n)}function ys(e,n){let t=bt(e);return Ft(t[Oe.DateFormat],n)}function _s(e,n){let t=bt(e);return Ft(t[Oe.TimeFormat],n)}function bs(e,n){let r=bt(e)[Oe.DateTimeFormat];return Ft(r,n)}function Ds(e,n){let t=bt(e),r=t[Oe.NumberSymbols][n];if(typeof r>"u"){if(n===Ln.CurrencyDecimal)return t[Oe.NumberSymbols][Ln.Decimal];if(n===Ln.CurrencyGroup)return t[Oe.NumberSymbols][Ln.Group]}return r}function $_(e){if(!e[Oe.ExtraData])throw new _(2303,!1)}function G_(e){let n=bt(e);return $_(n),(n[Oe.ExtraData][2]||[]).map(r=>typeof r=="string"?Oh(r):[Oh(r[0]),Oh(r[1])])}function W_(e,n,t){let r=bt(e);$_(r);let i=[r[Oe.ExtraData][0],r[Oe.ExtraData][1]],o=Ft(i,n)||[];return Ft(o,t)||[]}function Ft(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new _(2304,!1)}function Oh(e){let[n,t]=e.split(":");return{hours:+n,minutes:+t}}var _S=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,dc=Object.create(null),bS=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,DS=256;function q_(e,n,t,r){let i=NS(e);ES(n),n=Pn(t,n)||n;let s=[],a;for(;n;)if(a=bS.exec(n),a){s=s.concat(a.slice(1));let d=s.pop();if(!d)break;n=d}else{s.push(n);break}let l=i.getTimezoneOffset();r&&(l=Z_(r,l),i=AS(i,r));let c="";return s.forEach(d=>{let f=SS(d);c+=f?f(i,t,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function ES(e){if(e.length>DS)throw new _(2300,!1)}function pc(e,n,t){let r=new Date(0);return r.setFullYear(e,n,t),r.setHours(0,0,0),r}function Pn(e,n){let t=B_(e);if(dc[t]??=Object.create(null),dc[t][n])return dc[t][n];let r="";switch(n){case"shortDate":r=ys(e,dt.Short);break;case"mediumDate":r=ys(e,dt.Medium);break;case"longDate":r=ys(e,dt.Long);break;case"fullDate":r=ys(e,dt.Full);break;case"shortTime":r=_s(e,dt.Short);break;case"mediumTime":r=_s(e,dt.Medium);break;case"longTime":r=_s(e,dt.Long);break;case"fullTime":r=_s(e,dt.Full);break;case"short":let i=Pn(e,"shortTime"),o=Pn(e,"shortDate");r=uc(bs(e,dt.Short),[i,o]);break;case"medium":let s=Pn(e,"mediumTime"),a=Pn(e,"mediumDate");r=uc(bs(e,dt.Medium),[s,a]);break;case"long":let l=Pn(e,"longTime"),c=Pn(e,"longDate");r=uc(bs(e,dt.Long),[l,c]);break;case"full":let d=Pn(e,"fullTime"),f=Pn(e,"fullDate");r=uc(bs(e,dt.Full),[d,f]);break}return r&&(dc[t][n]=r),r}function uc(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,r){return Object.hasOwn(n,r)?n[r]:t})),e}function Jt(e,n,t="-",r,i){let o="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,o=t));let s=String(e);for(;s.length<n;)s="0"+s;return r&&(s=s.slice(s.length-n)),o+s}function CS(e,n){return Jt(e,3).substring(0,n)}function Fe(e,n,t=0,r=!1,i=!1){return function(o,s){let a=wS(e,o);if((t>0||a>-t)&&(a+=t),e===3)a===0&&t===-12&&(a=12);else if(e===6)return CS(a,n);let l=Ds(s,Ln.MinusSign);return Jt(a,n,l,r,i)}}function wS(e,n){switch(e){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new _(2301,!1)}}function ve(e,n,t=Xe.Format,r=!1){return function(i,o){return IS(i,o,e,n,t,r)}}function IS(e,n,t,r,i,o){switch(t){case 2:return U_(n,i,r)[e.getMonth()];case 1:return H_(n,i,r)[e.getDay()];case 0:let s=e.getHours(),a=e.getMinutes();if(o){let c=G_(n),d=W_(n,i,r),f=c.findIndex(m=>{if(Array.isArray(m)){let[h,p]=m,v=s>=h.hours&&a>=h.minutes,b=s<p.hours||s===p.hours&&a<p.minutes;if(h.hours<p.hours){if(v&&b)return!0}else if(v||b)return!0}else if(m.hours===s&&m.minutes===a)return!0;return!1});if(f!==-1)return d[f]}return j_(n,i,r)[s<12?0:1];case 3:return z_(n,r)[e.getFullYear()<=0?0:1];default:let l=t;throw new _(2302,!1)}}function fc(e){return function(n,t,r){let i=-1*r,o=Ds(t,Ln.MinusSign),s=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case 0:return(i>=0?"+":"")+Jt(s,2,o)+Jt(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+Jt(s,1,o);case 2:return"GMT"+(i>=0?"+":"")+Jt(s,2,o)+":"+Jt(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+Jt(s,2,o)+":"+Jt(Math.abs(i%60),2,o);default:throw new _(2310,!1)}}}var xS=0,mc=4;function MS(e){let n=pc(e,xS,1).getDay();return pc(e,0,1+(n<=mc?mc:mc+7)-n)}function Y_(e){let n=e.getDay(),t=n===0?-3:mc-n;return pc(e.getFullYear(),e.getMonth(),e.getDate()+t)}function kh(e,n=!1){return function(t,r){let i;if(n){let o=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,s=t.getDate();i=1+Math.floor((s+o)/7)}else{let o=Y_(t),s=MS(o.getFullYear()),a=o.getTime()-s.getTime();i=1+Math.round(a/6048e5)}return Jt(i,e,Ds(r,Ln.MinusSign))}}function hc(e,n=!1){return function(t,r){let o=Y_(t).getFullYear();return Jt(o,e,Ds(r,Ln.MinusSign),n)}}var Fh=Object.create(null);function SS(e){if(Fh[e])return Fh[e];let n;switch(e){case"G":case"GG":case"GGG":n=ve(3,ae.Abbreviated);break;case"GGGG":n=ve(3,ae.Wide);break;case"GGGGG":n=ve(3,ae.Narrow);break;case"y":n=Fe(0,1,0,!1,!0);break;case"yy":n=Fe(0,2,0,!0,!0);break;case"yyy":n=Fe(0,3,0,!1,!0);break;case"yyyy":n=Fe(0,4,0,!1,!0);break;case"Y":n=hc(1);break;case"YY":n=hc(2,!0);break;case"YYY":n=hc(3);break;case"YYYY":n=hc(4);break;case"M":case"L":n=Fe(1,1,1);break;case"MM":case"LL":n=Fe(1,2,1);break;case"MMM":n=ve(2,ae.Abbreviated);break;case"MMMM":n=ve(2,ae.Wide);break;case"MMMMM":n=ve(2,ae.Narrow);break;case"LLL":n=ve(2,ae.Abbreviated,Xe.Standalone);break;case"LLLL":n=ve(2,ae.Wide,Xe.Standalone);break;case"LLLLL":n=ve(2,ae.Narrow,Xe.Standalone);break;case"w":n=kh(1);break;case"ww":n=kh(2);break;case"W":n=kh(1,!0);break;case"d":n=Fe(2,1);break;case"dd":n=Fe(2,2);break;case"c":case"cc":n=Fe(7,1);break;case"ccc":n=ve(1,ae.Abbreviated,Xe.Standalone);break;case"cccc":n=ve(1,ae.Wide,Xe.Standalone);break;case"ccccc":n=ve(1,ae.Narrow,Xe.Standalone);break;case"cccccc":n=ve(1,ae.Short,Xe.Standalone);break;case"E":case"EE":case"EEE":n=ve(1,ae.Abbreviated);break;case"EEEE":n=ve(1,ae.Wide);break;case"EEEEE":n=ve(1,ae.Narrow);break;case"EEEEEE":n=ve(1,ae.Short);break;case"a":case"aa":case"aaa":n=ve(0,ae.Abbreviated);break;case"aaaa":n=ve(0,ae.Wide);break;case"aaaaa":n=ve(0,ae.Narrow);break;case"b":case"bb":case"bbb":n=ve(0,ae.Abbreviated,Xe.Standalone,!0);break;case"bbbb":n=ve(0,ae.Wide,Xe.Standalone,!0);break;case"bbbbb":n=ve(0,ae.Narrow,Xe.Standalone,!0);break;case"B":case"BB":case"BBB":n=ve(0,ae.Abbreviated,Xe.Format,!0);break;case"BBBB":n=ve(0,ae.Wide,Xe.Format,!0);break;case"BBBBB":n=ve(0,ae.Narrow,Xe.Format,!0);break;case"h":n=Fe(3,1,-12);break;case"hh":n=Fe(3,2,-12);break;case"H":n=Fe(3,1);break;case"HH":n=Fe(3,2);break;case"m":n=Fe(4,1);break;case"mm":n=Fe(4,2);break;case"s":n=Fe(5,1);break;case"ss":n=Fe(5,2);break;case"S":n=Fe(6,1);break;case"SS":n=Fe(6,2);break;case"SSS":n=Fe(6,3);break;case"Z":case"ZZ":case"ZZZ":n=fc(0);break;case"ZZZZZ":n=fc(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=fc(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=fc(2);break;default:return null}return Fh[e]=n,n}function Z_(e,n){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function TS(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function AS(e,n,t){let i=e.getTimezoneOffset(),o=Z_(n,i);return TS(e,-1*(o-i))}function NS(e){if(V_(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,o=1,s=1]=e.split("-").map(a=>+a);return pc(i,o-1,s)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let r;if(r=e.match(_S))return RS(r)}let n=new Date(e);if(!V_(n))throw new _(2311,!1);return n}function RS(e){let n=new Date(0),t=0,r=0,i=e[8]?n.setUTCFullYear:n.setFullYear,o=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),r=Number(e[9]+e[11])),i.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));let s=Number(e[4]||0)-t,a=Number(e[5]||0)-r,l=Number(e[6]||0),c=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return o.call(n,s,a,l,c),n}function V_(e){return e instanceof Date&&!isNaN(e.valueOf())}var Ph=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(k);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(t,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||e)(te(Rt))};static \u0275dir=M({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[st]})}return e})();function OS(e,n){return new _(2100,!1)}var kS="mediumDate",X_=new g(""),K_=new g(""),Lh=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,r,i){this.locale=t,this.defaultTimezone=r,this.defaultOptions=i}transform(t,r,i,o){if(t==null||t===""||t!==t)return null;try{let s=r??this.defaultOptions?.dateFormat??kS,a=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return q_(t,s,o||this.locale,a)}catch(s){throw OS(e,s.message)}}static \u0275fac=function(r){return new(r||e)(te(us,16),te(X_,24),te(K_,24))};static \u0275pipe=uh({name:"date",type:e,pure:!0})}return e})();function Es(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[i,o]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()===n)return decodeURIComponent(o)}return null}var Vh="browser";function Q_(e){return e===Vh}var Cs=class{_doc;constructor(n){this._doc=n}manager},gc=(()=>{class e extends Cs{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,i,o){return t.addEventListener(r,i,o),()=>this.removeEventListener(t,r,i,o)}removeEventListener(t,r,i,o){return t.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||e)(S(C))};static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})(),_c=new g(""),Uh=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(s=>{s.manager=this});let i=t.filter(s=>!(s instanceof gc));this._plugins=i.slice().reverse();let o=t.find(s=>s instanceof gc);o&&this._plugins.push(o)}addEventListener(t,r,i,o){return this._findPluginFor(r).addEventListener(t,r,i,o)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new _(-5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(S(_c),S(I))};static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})(),Bh="ng-app-id";function J_(e){for(let n of e)n.remove()}function eb(e,n){let t=n.createElement("style");return t.textContent=e,t}function VS(e,n,t,r){let i=e.head?.querySelectorAll(`style[${Bh}="${n}"],link[${Bh}="${n}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(Bh),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function Hh(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var zh=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,i,o={}){this.doc=t,this.appId=r,this.nonce=i,VS(t,r,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,r){for(let i of t)this.addUsage(i,this.inline,eb);r?.forEach(i=>this.addUsage(i,this.external,Hh))}removeStyles(t,r){for(let i of t)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,r,i){let o=r.get(t);o?o.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(t,this.doc)))})}removeUsage(t,r){let i=r.get(t);i&&(i.usage--,i.usage<=0&&(J_(i.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])J_(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(t,eb(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(t,Hh(r,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let r of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of r.elements)o.parentNode===t?o.remove():i.push(o);r.elements=i}}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(S(C),S(nr),S(rr,8),S(qr))};static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})(),jh={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},$h=/%COMP%/g;var nb="%COMP%",BS=`_nghost-${nb}`,jS=`_ngcontent-${nb}`,HS=!0,US=new g("",{factory:()=>HS});function zS(e){return jS.replace($h,e)}function $S(e){return BS.replace($h,e)}function rb(e,n){return n.map(t=>t.replace($h,e))}var Gh=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,r,i,o,s,a,l=null,c=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new ws(t,s,a,this.tracingService)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,r);return i instanceof yc?i.applyToHost(t):i instanceof Is&&i.applyStyles(),i}getOrCreateRenderer(t,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case Xt.Emulated:o=new yc(l,c,r,this.appId,d,s,a,f);break;case Xt.ShadowDom:return new vc(l,t,r,s,a,this.nonce,f,c);case Xt.ExperimentalIsolatedShadowDom:return new vc(l,t,r,s,a,this.nonce,f);default:o=new Is(l,c,r,d,s,a,f);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(S(Uh),S(ti),S(nr),S(US),S(C),S(I),S(rr),S(pn,8))};static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})(),ws=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,i){this.eventManager=n,this.doc=t,this.ngZone=r,this.tracingService=i}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(jh[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(tb(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(tb(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new _(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,i){if(i){t=i+":"+t;let o=jh[i];o?n.setAttributeNS(o,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let i=jh[r];i?n.removeAttributeNS(i,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,i){i&(mn.DashCase|mn.Important)?n.style.setProperty(t,r,i&mn.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){r&mn.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,i){if(typeof n=="string"&&(n=kt().getGlobalEventTarget(this.doc,n),!n))throw new _(-5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,t,o)),this.eventManager.addEventListener(n,t,o,i)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}};function tb(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var vc=class extends ws{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,r,i,o,s,a,l){super(n,i,o,a),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=r.styles;c=rb(r.id,c);for(let f of c){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=f,this.shadowRoot.appendChild(m)}let d=r.getExternalStyles?.();if(d)for(let f of d){let m=Hh(f,i);s&&m.setAttribute("nonce",s),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Is=class extends ws{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,i,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let c=r.styles;this.styles=l?rb(l,c):c,this.styleUrls=r.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Xr.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},yc=class extends Is{contentAttr;hostAttr;constructor(n,t,r,i,o,s,a,l){let c=i+"-"+r.id;super(n,t,r,o,s,a,l,c),this.contentAttr=zS(c),this.hostAttr=$S(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}};var bc=class e extends vs{supportsDOMEvents=!0;static makeCurrent(){Rh(new e)}onAndCancel(n,t,r,i){return n.addEventListener(t,r,i),()=>{n.removeEventListener(t,r,i)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=GS();return t==null?null:WS(t)}resetBaseElement(){xs=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Es(document.cookie,n)}},xs=null;function GS(){return xs=xs||document.head.querySelector("base"),xs?xs.getAttribute("href"):null}function WS(e){return new URL(e,document.baseURI).pathname}var ib=["alt","control","meta","shift"],qS={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},YS={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},ob=(()=>{class e extends Cs{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,i,o){let s=e.parseEventName(r),a=e.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>kt().onAndCancel(t,s.domEventName,a,o))}static parseEventName(t){let r=t.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=e._normalizeKey(r.pop()),s="",a=r.indexOf("code");if(a>-1&&(r.splice(a,1),s="code."),ib.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),s+=c+".")}),s+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=s,l}static matchEventFullKeyCode(t,r){let i=qS[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(i=t.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),ib.forEach(s=>{if(s!==i){let a=YS[s];a(t)&&(o+=s+".")}}),o+=i,o===r)}static eventCallback(t,r,i){return o=>{e.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(S(C))};static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();async function Wh(e,n,t){let r=y({rootComponent:e},ZS(n,t));return N_(r)}function ZS(e,n){return{platformRef:n?.platformRef,appProviders:[...eT,...e?.providers??[]],platformProviders:JS}}function XS(){bc.makeCurrent()}function KS(){return new Je}function QS(){return kf(document),document}var JS=[{provide:qr,useValue:Vh},{provide:fl,useValue:XS,multi:!0},{provide:C,useFactory:QS}];var eT=[{provide:jo,useValue:"root"},{provide:Je,useFactory:KS},{provide:_c,useClass:gc,multi:!0},{provide:_c,useClass:ob,multi:!0},Gh,{provide:ti,useClass:zh},{provide:zh,useExisting:ti},Uh,{provide:Ne,useExisting:Gh},[]];var Pt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let i=t.slice(0,r),o=t.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let i=(n.op==="a"?this.headers.get(t):void 0)||[];i.push(...r),this.headers.set(t,i);break;case"d":let o=n.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var Ec=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Cc=class{encodeKey(n){return sb(n)}encodeValue(n){return sb(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function tT(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var nT=/%(\d[a-f0-9])/gi,rT={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function sb(e){return encodeURIComponent(e).replace(nT,(n,t)=>rT[t]??n)}function Dc(e){return`${e}`}var en=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Cc,n.fromString){if(n.fromObject)throw new _(2805,!1);this.map=tT(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],i=Array.isArray(r)?r.map(Dc):[Dc(r)];this.map.set(t,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(Dc(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],i=r.indexOf(Dc(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function iT(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ab(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function lb(e){return typeof Blob<"u"&&e instanceof Blob}function cb(e){return typeof FormData<"u"&&e instanceof FormData}function oT(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var qh="Content-Type",db="Accept",fb="text/plain",hb="application/json",sT=`${hb}, ${fb}, */*`,ii=class e{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,t,r,i){this.url=t,this.method=n.toUpperCase();let o;if(iT(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new _(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Pt,this.context??=new Ec,!this.params)this.params=new en,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t,l="",c=t.indexOf("#");c!==-1&&(l=t.substring(c),a=t.substring(0,c));let d=a.indexOf("?"),f=d===-1?"?":d<a.length-1?"&":"";this.urlWithParams=a+f+s+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ab(this.body)||lb(this.body)||cb(this.body)||oT(this.body)?this.body:this.body instanceof en?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||cb(this.body)?null:lb(this.body)?this.body.type||null:ab(this.body)?null:typeof this.body=="string"?fb:this.body instanceof en?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?hb:null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,m=n.integrity||this.integrity,h=n.referrerPolicy||this.referrerPolicy,p=n.transferCache??this.transferCache,v=n.timeout??this.timeout,b=n.body!==void 0?n.body:this.body,D=n.withCredentials??this.withCredentials,oe=n.reportProgress??this.reportProgress,nt=n.reportUploadProgress??this.reportUploadProgress,Et=n.reportDownloadProgress??this.reportDownloadProgress,yn=n.headers||this.headers,Pe=n.params||this.params,_n=n.context??this.context;return n.setHeaders!==void 0&&(yn=Object.keys(n.setHeaders).reduce((Bt,jt)=>Bt.set(jt,n.setHeaders[jt]),yn)),n.setParams&&(Pe=Object.keys(n.setParams).reduce((Bt,jt)=>Bt.set(jt,n.setParams[jt]),Pe)),new e(t,r,b,{params:Pe,headers:yn,context:_n,reportProgress:oe,reportUploadProgress:nt,reportDownloadProgress:Et,responseType:i,withCredentials:D,transferCache:p,keepalive:o,cache:a,priority:s,timeout:v,mode:l,redirect:c,credentials:d,referrer:f,integrity:m,referrerPolicy:h})}},hr=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(hr||{}),Yi=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,r="OK"){this.headers=n.headers||new Pt,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},wc=class e extends Yi{constructor(n={}){super(n)}type=hr.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Zi=class e extends Yi{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=hr.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},fr=class extends Yi{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},aT=200;var lT=/^\)\]\}',?\n/,T3=1024*1024,mb=new g("",{factory:()=>null}),Ic=(()=>{class e{fetchImpl=u(Zh,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=u(I);destroyRef=u(Ze);maxResponseSize=u(mb);handle(t){return new z(r=>{let i=new AbortController;this.doRequest(t,i.signal,r).then(Xh,s=>r.error(new fr({error:s})));let o;return t.timeout&&(o=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{o!==void 0&&clearTimeout(o),i.abort()}})}async doRequest(t,r,i){let o=this.createRequestInit(t),s;try{let b=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,y({signal:r},o)));cT(b),i.next({type:hr.Sent}),s=await b}catch(b){i.error(new fr({error:b,status:b.status??0,statusText:b.statusText,url:t.urlWithParams,headers:b.headers}));return}let a=new Pt(s.headers),l=s.statusText,c=s.url||t.urlWithParams,d=s.status,f=null,m=t.reportProgress||t.reportDownloadProgress;if(m&&i.next(new wc({headers:a,status:d,statusText:l,url:c})),s.body){let b=s.headers.get("content-length"),D=b!==null?Number(b):NaN;this.maxResponseSize!==null&&Number.isFinite(D)&&D>this.maxResponseSize&&ub(this.maxResponseSize);let oe=[],nt=s.body.getReader(),Et=0,yn,Pe,_n=typeof Zone<"u"&&Zone.current,Bt=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await nt.cancel(),Bt=!0;break}let{done:Ee,value:Ht}=await nt.read();if(Ee)break;if(oe.push(Ht),Et+=Ht.length,this.maxResponseSize!==null&&Et>this.maxResponseSize&&(await nt.cancel(),ub(this.maxResponseSize)),m){Pe=t.responseType==="text"?(Pe??"")+(yn??=new TextDecoder).decode(Ht,{stream:!0}):void 0;let mi=()=>i.next({type:hr.DownloadProgress,total:Number.isFinite(D)?D:void 0,loaded:Et,partialText:Pe});_n?_n.run(mi):mi()}}}),Bt){i.complete();return}let jt=this.concatChunks(oe,Et);try{let Ee=s.headers.get(qh)??"";f=this.parseBody(t,jt,Ee,d)}catch(Ee){i.error(new fr({error:Ee,headers:new Pt(s.headers),status:s.status,statusText:s.statusText,url:s.url||t.urlWithParams}));return}}d===0&&(d=f?aT:0);let h=d>=200&&d<300,p=s.redirected,v=s.type;h?(i.next(new Zi({body:f,headers:a,status:d,statusText:l,url:c,redirected:p,responseType:v})),i.complete()):i.error(new fr({error:f,headers:a,status:d,statusText:l,url:c,redirected:p,responseType:v}))}parseBody(t,r,i,o){switch(t.responseType){case"json":let s=new TextDecoder().decode(r).replace(lT,"");if(s==="")return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new _(2824,!1);let r={},i;if(i=t.credentials,t.withCredentials&&(i="include"),t.headers.forEach((o,s)=>r[o]=s.join(",")),t.headers.has(db)||(r[db]=sT),!t.headers.has(qh)){let o=t.detectContentTypeHeader();o!==null&&(r[qh]=o)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:i,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,r){let i=new Uint8Array(r),o=0;for(let s of t)i.set(s,o),o+=s.length;return i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),Zh=class{};function Xh(){}function cT(e){e.then(Xh,Xh)}function ub(e){throw new _(-2825,!1)}function dT(e,n){return n(e)}function uT(e,n,t){return(r,i)=>Ai(t,()=>n(r,o=>e(o,i)))}var pb=new g("",{factory:()=>[]}),gb=new g(""),vb=new g("",{factory:()=>!0});var Kh=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=G({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=S(Ic),i},providedIn:"root"})}return e})();var xc=(()=>{class e{backend;injector;chain=null;pendingTasks=u(Vi);contributeToStability=u(vb);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(pb),...this.injector.get(gb,[])]));this.chain=i.reduceRight((o,s)=>uT(o,s,this.injector),dT)}let r=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return ee(()=>r(t,o=>this.backend.handle(o))).pipe(To(i))}else return ee(()=>r(t,i=>this.backend.handle(i)))}static \u0275fac=function(r){return new(r||e)(S(Kh),S(Me))};static \u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qh=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=G({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=S(xc),i},providedIn:"root"})}return e})();function Yh(e,n){return y({body:n},e)}var Ms=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,i={}){let o;if(t instanceof ii)o=t;else{let l;i.headers instanceof Pt?l=i.headers:l=new Pt(i.headers);let c;i.params&&(i.params instanceof en?c=i.params:c=new en({fromObject:i.params})),o=new ii(t,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=We(o).pipe(zd(l=>this.handler.handle(l)));if(t instanceof ii||i.observe==="events")return s;let a=s.pipe(Ce(l=>l instanceof Zi));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(ce(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new _(2806,!1);return l.body}));case"blob":return a.pipe(ce(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new _(2807,!1);return l.body}));case"text":return a.pipe(ce(l=>{if(l.body!==null&&typeof l.body!="string")throw new _(2808,!1);return l.body}));default:return a.pipe(ce(l=>l.body))}case"response":return a;default:throw new _(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new en().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,i={}){return this.request("PATCH",t,Yh(i,r))}post(t,r,i={}){return this.request("POST",t,Yh(i,r))}put(t,r,i={}){return this.request("PUT",t,Yh(i,r))}static \u0275fac=function(r){return new(r||e)(S(Qh))};static \u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var fT=new g("",{factory:()=>!0}),hT="XSRF-TOKEN",mT=new g("",{factory:()=>hT}),pT="X-XSRF-TOKEN",gT=new g("",{factory:()=>pT}),vT=(()=>{class e{cookieName=u(mT);doc=u(C);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Es(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),yb=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=G({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=S(vT),i},providedIn:"root"})}return e})();function yT(e,n){if(!u(fT)||e.method==="GET"||e.method==="HEAD")return n(e);try{let i=u(qi).href,{origin:o}=new URL(i),{origin:s}=new URL(e.url,o);if(o!==s)return n(e)}catch{return n(e)}let t=u(yb).getToken(),r=u(gT);return t!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,t)})),n(e)}function Jh(...e){let n=[Ms,Ic,xc,{provide:Qh,useExisting:xc},{provide:Kh,useFactory:()=>u(Ic)},{provide:pb,useValue:yT,multi:!0}];for(let t of e)n.push(...t.\u0275providers);return Xn(n)}var _T=new g(""),bT="b",DT="h",ET="s",CT="st",wT="u",IT="rt",xT=new g(""),MT=["GET","HEAD"];function ST(e,n){let s=n,{isCacheActive:t}=s,r=wd(s,["isCacheActive"]),{transferCache:i,method:o}=e;return!(!t||i===!1||kT(e)||o==="POST"&&!r.includePostRequests&&!i||o!=="POST"&&!MT.includes(o)||!r.includeRequestsWithAuthHeaders&&AT(e)||RT(e.headers)||OT(e.cache)||r.filter?.(e)===!1)}function TT(e,n,t,r,i,o=!1){if(!o&&!ST(e,n))return null;if(r)throw new _(2803,!1);if(!i){let v=e.url;i=FT(e,v)}let s=t.get(i,null);if(!s)return null;let{[bT]:a,[IT]:l,[DT]:c,[ET]:d,[CT]:f,[wT]:m}=s,h=a;switch(l){case"arraybuffer":h=bb(a);break;case"blob":h=new Blob([bb(a)]);break}let p=new Pt(c);return new Zi({body:h,headers:p,status:d,statusText:f,url:m})}function AT(e){let n=e.headers;return n.has("authorization")||n.has("proxy-authorization")||n.has("cookie")}var NT=new Set(["no-store","private","no-cache"]);function RT(e){let n=e.get("cache-control");return n?n.split(",").some(t=>{let r=t.split("=",1)[0].trim().toLowerCase();return NT.has(r)}):!1}function OT(e){return e==="no-cache"||e==="no-store"}function kT(e){let{withCredentials:n,credentials:t}=e;return n||t==="include"||t==="same-origin"}function _b(e){let n=new URLSearchParams(e instanceof URLSearchParams?e:e.toString());return n.sort(),n.toString()}function FT(e,n){let{params:t,method:r,responseType:i}=e,o=_b(t),s=e.serializeBody();s instanceof URLSearchParams?s=_b(s):typeof s!="string"&&(s="");let a=[r,i,n,s,o].join("\0"),l=LT(a);return l}function bb(e){let n=atob(e);return Uint8Array.from(n,r=>r.charCodeAt(0)).buffer}var PT=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Db;function LT(e){Db??=new TextEncoder;let n=Db.encode(e),t=1779033703,r=3144134277,i=1013904242,o=2773480762,s=1359893119,a=2600822924,l=528734635,c=1541459225,d=n.length*8,f=(n.length+8>>6)+1<<6,m=new Uint8Array(f);m.set(n),m[n.length]=128;let h=new DataView(m.buffer),p=d>>>0,v=d/4294967296>>>0;h.setUint32(f-8,v,!1),h.setUint32(f-4,p,!1);let b=new Uint32Array(64);for(let D=0;D<f;D+=64){for(let Ee=0;Ee<16;Ee++)b[Ee]=h.getUint32(D+Ee*4,!1);for(let Ee=16;Ee<64;Ee++){let Ht=b[Ee-15],mi=((Ht>>>7|Ht<<25)^(Ht>>>18|Ht<<14)^Ht>>>3)>>>0,Bn=b[Ee-2],Cd=((Bn>>>17|Bn<<15)^(Bn>>>19|Bn<<13)^Bn>>>10)>>>0;b[Ee]=b[Ee-16]+mi+b[Ee-7]+Cd>>>0}let oe=t,nt=r,Et=i,yn=o,Pe=s,_n=a,Bt=l,jt=c;for(let Ee=0;Ee<64;Ee++){let Ht=((Pe>>>6|Pe<<26)^(Pe>>>11|Pe<<21)^(Pe>>>25|Pe<<7))>>>0,mi=(Pe&_n^~Pe&Bt)>>>0,Bn=jt+Ht+mi+PT[Ee]+b[Ee]>>>0,Cd=((oe>>>2|oe<<30)^(oe>>>13|oe<<19)^(oe>>>22|oe<<10))>>>0,XE=(oe&nt^oe&Et^nt&Et)>>>0,KE=Cd+XE>>>0;jt=Bt,Bt=_n,_n=Pe,Pe=yn+Bn>>>0,yn=Et,Et=nt,nt=oe,oe=Bn+KE>>>0}t=t+oe>>>0,r=r+nt>>>0,i=i+Et>>>0,o=o+yn>>>0,s=s+Pe>>>0,a=a+_n>>>0,l=l+Bt>>>0,c=c+jt>>>0}return[t,r,i,o,s,a,l,c].map(D=>D.toString(16).padStart(8,"0")).join("")}var Eb=(()=>{let e=Mc("json");return e.arrayBuffer=Mc("arraybuffer"),e.blob=Mc("blob"),e.text=Mc("text"),e})();function Mc(e){return function(t,r){let i=r?.injector??u(k),o=i.get(xT,null,{optional:!0}),s=i.get(Pi,null,{optional:!0}),a=i.get(_T,null,{optional:!0}),l=c=>{if(o&&s&&c){let d=TT(c,o,s,a);if(d)try{let f=d.body,m=r?.parse?r.parse(f):f;return K({value:m})}catch{}}};return new em(i,c=>VT(c,t,e),r?.defaultValue,r?.debugName,r?.parse,r?.equal,l)}}function VT(e,n,t){let r=typeof n=="function"?n(e):n;if(r===void 0)return;typeof r=="string"&&(r={url:r});let i=r.headers instanceof Pt?r.headers:new Pt(r.headers),o=r.params instanceof en?r.params:new en({fromObject:r.params});return new ii(r.method??"GET",r.url,r.body??null,{headers:i,params:o,reportProgress:r.reportProgress,withCredentials:r.withCredentials,keepalive:r.keepalive,cache:r.cache,priority:r.priority,mode:r.mode,redirect:r.redirect,responseType:t,context:r.context,transferCache:r.transferCache,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}var em=class extends fs{client;_headers=dr({source:this.extRequest,computation:()=>{}});_progress=dr({source:this.extRequest,computation:()=>{}});_statusCode=dr({source:this.extRequest,computation:()=>{}});headers=we(()=>this.status()==="resolved"||this.status()==="error"?this._headers():void 0);progress=this._progress.asReadonly();statusCode=this._statusCode.asReadonly();constructor(n,t,r,i,o,s,a){super(t,({params:l,abortSignal:c})=>{let d,f=!1,m=()=>{f=!0,d?.unsubscribe()};c.addEventListener("abort",m);let h=K({value:void 0}),p,v=new Promise(D=>p=D),b=D=>{h.set(D),p?.(h),p=void 0};return d=this.client.request(l).subscribe({next:D=>{switch(D.type){case hr.Response:this._headers.set(D.headers),this._statusCode.set(D.status);try{b({value:o?o(D.body):D.body})}catch(oe){b({error:hs(oe)})}break;case hr.DownloadProgress:this._progress.set(D);break}},error:D=>{D instanceof fr&&(this._headers.set(D.headers),this._statusCode.set(D.status)),b({error:D}),c.removeEventListener("abort",m)},complete:()=>{p&&b({error:new _(991,!1)}),c.removeEventListener("abort",m)}}),f&&d.unsubscribe(),v},r,s,i,n,void 0,a),this.client=n.get(Ms)}set(n){super.set(n),this._headers.set(void 0),this._progress.set(void 0),this._statusCode.set(void 0)}};var Cb=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(S(C))};static \u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ss=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=G({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=S(jT),i},providedIn:"root"})}return e})(),jT=(()=>{class e extends Ss{_doc=u(C);sanitize(t,r){if(r==null)return null;switch(t){case et.NONE:return r;case et.HTML:return Jr(r,"HTML")?On(r):jf(this._doc,String(r)).toString();case et.STYLE:return Jr(r,"Style")?On(r):r;case et.SCRIPT:if(Jr(r,"Script"))return On(r);throw new _(5200,!1);case et.URL:return Jr(r,"URL")?On(r):Vl(String(r));case et.RESOURCE_URL:if(Jr(r,"ResourceURL"))return On(r);throw new _(-5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(t){return Ff(t)}bypassSecurityTrustStyle(t){return Pf(t)}bypassSecurityTrustScript(t){return Lf(t)}bypassSecurityTrustUrl(t){return Vf(t)}bypassSecurityTrustResourceUrl(t){return Bf(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function oi(e){return e.buttons===0||e.detail===0}function si(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var tm;function wb(){if(tm==null){let e=typeof document<"u"?document.head:null;tm=!!(e&&(e.createShadowRoot||e.attachShadow))}return tm}function nm(e){if(wb()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Ts(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}function ut(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var rm;try{rm=typeof Intl<"u"&&Intl.v8BreakIterator}catch{rm=!1}var ie=(()=>{class e{_platformId=u(qr);isBrowser=this._platformId?Q_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||rm)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var As;function Ib(){if(As==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>As=!0}))}finally{As=As||!1}return As}function Xi(e){return Ib()?e:!!e.capture}function Ki(e,n=0){return xb(e)?Number(e):arguments.length===2?n:0}function xb(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function Dt(e){return e instanceof N?e.nativeElement:e}var Mb=new g("cdk-input-modality-detector-options"),Sb={ignoreKeys:[18,17,224,91,16]},Tb=650,im={passive:!0,capture:!0},Ab=(()=>{class e{_platform=u(ie);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ar(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ut(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Tb||(this._modality.next(oi(t)?"keyboard":"mouse"),this._mostRecentTarget=ut(t))};_onTouchstart=t=>{if(si(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ut(t)};constructor(){let t=u(I),r=u(C),i=u(Mb,{optional:!0});if(this._options=y(y({},Sb),i),this.modalityDetected=this._modality.pipe(No(1)),this.modalityChanged=this.modalityDetected.pipe(Oa()),this._platform.isBrowser){let o=u(Ne).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,im),o.listen(r,"mousedown",this._onMousedown,im),o.listen(r,"touchstart",this._onTouchstart,im)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),Ns=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(Ns||{}),Nb=new g("cdk-focus-monitor-default-options"),Sc=Xi({passive:!0,capture:!0}),mr=(()=>{class e{_ngZone=u(I);_platform=u(ie);_inputModalityDetector=u(Ab);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(C);_stopInputModalityDetector=new E;constructor(){let t=u(Nb,{optional:!0});this._detectionMode=t?.detectionMode||Ns.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=ut(t);for(let i=r;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,r=!1){let i=Dt(t);if(!this._platform.isBrowser||i.nodeType!==1)return We();let o=nm(i)||this._document,s=this._elementInfo.get(i);if(s)return r&&(s.checkChildren=!0),s.subject;let a={checkChildren:r,subject:new E,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(t){let r=Dt(t),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(t,r,i){let o=Dt(t),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Ns.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===Ns.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?Tb:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,r){let i=this._elementInfo.get(r),o=ut(t);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(t,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Sc),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Sc)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(wt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Sc),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Sc),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,i){this._setClasses(t,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Tc=new WeakMap,ft=(()=>{class e{_appRef;_injector=u(k);_environmentInjector=u(Me);load(t){let r=this._appRef=this._appRef||this._injector.get(_t),i=Tc.get(r);i||(i={loaders:new Set,refs:[]},Tc.set(r,i),r.onDestroy(()=>{Tc.get(r)?.refs.forEach(o=>o.destroy()),Tc.delete(r)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(ac(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Rb=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})(),Ac;function UT(){if(Ac===void 0&&(Ac=null,typeof window<"u")){let e=window;if(e.trustedTypes!==void 0)try{Ac=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return Ac}function Qi(e){return UT()?.createHTML(e)||e}function Ji(e){return Array.isArray(e)?e:[e]}var Ob=new Set,ai,Nc=(()=>{class e{_platform=u(ie);_nonce=u(rr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):$T}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&zT(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function zT(e,n){if(!Ob.has(e))try{ai||(ai=document.createElement("style"),n&&ai.setAttribute("nonce",n),ai.setAttribute("type","text/css"),document.head.appendChild(ai)),ai.sheet&&(ai.sheet.insertRule(`@media ${e.replace(/[{}]/g,"")} {body{ }}`,0),Ob.add(e))}catch(t){console.error(t)}}function $T(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var om=(()=>{class e{_mediaMatcher=u(Nc);_zone=u(I);_queries=new Map;_destroySubject=new E;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return kb(Ji(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=kb(Ji(t)).map(s=>this._registerQuery(s).observable),o=Ud(i);return o=wi(o.pipe(mt(1)),o.pipe(No(1),So(0))),o.pipe(ce(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let r=this._mediaMatcher.matchMedia(t),o={observable:new z(s=>{let a=l=>this._zone.run(()=>s.next(l));return r.addListener(a),()=>{r.removeListener(a)}}).pipe(it(r),ce(({matches:s})=>({query:t,matches:s})),wt(this._destroySubject)),mql:r};return this._queries.set(t,o),o}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function kb(e){return e.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var GT=(()=>{class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Rc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({providers:[GT]})}return e})();var lm=(()=>{class e{_platform=u(ie);isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return qT(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let r=WT(tA(t));if(r&&(Fb(r)===-1||!this.isVisible(r)))return!1;let i=t.nodeName.toLowerCase(),o=Fb(t);return t.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!JT(t)?!1:i==="audio"?t.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,r){return eA(t)&&!this.isDisabled(t)&&(r?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function WT(e){try{return e.frameElement}catch{return null}}function qT(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects=="function"&&e.getClientRects().length)}function YT(e){let n=e.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function ZT(e){return KT(e)&&e.type=="hidden"}function XT(e){return QT(e)&&e.hasAttribute("href")}function KT(e){return e.nodeName.toLowerCase()=="input"}function QT(e){return e.nodeName.toLowerCase()=="a"}function Vb(e){if(!e.hasAttribute("tabindex")||e.tabIndex===void 0)return!1;let n=e.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Fb(e){if(!Vb(e))return null;let n=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function JT(e){let n=e.nodeName.toLowerCase(),t=n==="input"&&e.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function eA(e){return ZT(e)?!1:YT(e)||XT(e)||e.hasAttribute("contenteditable")||Vb(e)}function tA(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var am=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,r,i,o=!1,s){this._element=n,this._checker=t,this._ngZone=r,this._document=i,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let r=this._getFirstTabbableElement(t);return r?.focus(n),!!r}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let r=0;r<t.length;r++){let i=t[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let r=t.length-1;r>=0;r--){let i=t[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Nt(n,{injector:this._injector})}},Bb=(()=>{class e{_checker=u(lm);_ngZone=u(I);_document=u(C);_injector=u(k);constructor(){u(ft).load(Rb)}create(t,r=!1){return new am(t,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var li=(function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e})(li||{}),Pb="cdk-high-contrast-black-on-white",Lb="cdk-high-contrast-white-on-black",sm="cdk-high-contrast-active",nA=(()=>{class e{_platform=u(ie);_hasCheckedHighContrastMode=!1;_document=u(C);_breakpointSubscription;constructor(){this._breakpointSubscription=u(om).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return li.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let r=this._document.defaultView||window,i=r&&r.getComputedStyle?r.getComputedStyle(t):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return li.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return li.BLACK_ON_WHITE}return li.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(sm,Pb,Lb),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===li.BLACK_ON_WHITE?t.add(sm,Pb):r===li.WHITE_ON_BLACK&&t.add(sm,Lb)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),jb=(()=>{class e{constructor(){u(nA)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[Rc]})}return e})();var rA=200,Oc=class{_letterKeyStream=new E;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new E;selectedItem=this._selectedItem;constructor(n,t){let r=typeof t?.debounceInterval=="number"?t.debounceInterval:rA;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Or(t=>this._pressedLetters.push(t)),So(n),Ce(()=>this._pressedLetters.length>0),ce(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function pr(e,...n){return n.length?n.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var kc=class{_items;_activeItemIndex=K(-1);_activeItem=K(null);_wrap=!1;_typeaheadSubscription=Z.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof An?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):At(n)&&(this._effectRef=gt(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new E;change=new E;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Oc(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||pr(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),r=typeof n=="number"?n:t.indexOf(n),i=t[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let r=1;r<=t.length;r++){let i=(this._activeItemIndex()+n*r+t.length)%t.length,o=t[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=t,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return At(this._items)?this._items():this._items instanceof An?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let r=n.indexOf(t);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Rs=class extends kc{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var zb=new Map,Ge=class e{_appId=u(nr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!=="ng"&&(n+=this._appId);let r=zb.get(n);return r===void 0?r=0:r++,zb.set(n,r),`${n}${t?e._infix+"-":""}${r}`}static \u0275fac=function(t){return new(t||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})};var tn=(function(e){return e[e.NORMAL=0]="NORMAL",e[e.NEGATED=1]="NEGATED",e[e.INVERTED=2]="INVERTED",e})(tn||{}),Fc,ci;function Pc(){if(ci==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ci=!1,ci;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ci=!0;else{let e=Element.prototype.scrollTo;e?ci=!/\{\s*\[native code\]\s*\}/.test(e.toString()):ci=!1}}return ci}function eo(){if(typeof document!="object"||!document)return tn.NORMAL;if(Fc==null){let e=document.createElement("div"),n=e.style;e.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let t=document.createElement("div"),r=t.style;r.width="2px",r.height="1px",e.appendChild(t),document.body.appendChild(e),Fc=tn.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,Fc=e.scrollLeft===0?tn.NEGATED:tn.INVERTED),e.remove()}return Fc}function um(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var to,$b=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function fm(){if(to)return to;if(typeof document!="object"||!document)return to=new Set($b),to;let e=document.createElement("input");return to=new Set($b.filter(n=>(e.setAttribute("type",n),e.type===n))),to}var iA=new g("MATERIAL_ANIMATIONS"),Gb=null;function hm(){return u(iA,{optional:!0})?.animationsDisabled||u(Yo,{optional:!0})==="NoopAnimations"?"di-disabled":(Gb??=u(Nc).matchMedia("(prefers-reduced-motion)").matches,Gb?"reduced-motion":"enabled")}function ht(){return hm()!=="enabled"}function Ae(e){return e==null?"":typeof e=="string"?e:`${e}px`}function no(e){return e!=null&&`${e}`!="false"}var Lt=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(Lt||{}),mm=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Lt.HIDDEN;constructor(n,t,r,i=!1){this._renderer=n,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Wb=Xi({passive:!0,capture:!0}),pm=class{_events=new Map;addHandler(n,t,r,i){let o=this._events.get(t);if(o){let s=o.get(r);s?s.add(i):o.set(r,new Set([i]))}else this._events.set(t,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Wb)})}removeHandler(n,t,r){let i=this._events.get(n);if(!i)return;let o=i.get(t);o&&(o.delete(r),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Wb)))}_delegateEventHandler=n=>{let t=ut(n);t&&this._events.get(n.type)?.forEach((r,i)=>{(i===t||i.contains(t))&&r.forEach(o=>o.handleEvent(n))})}},Os={enterDuration:225,exitDuration:150},oA=800,qb=Xi({passive:!0,capture:!0}),Yb=["mousedown","touchstart"],Zb=["mouseup","mouseleave","touchend","touchcancel"],sA=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})(),ks=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new pm;constructor(n,t,r,i,o){this._target=n,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=Dt(r)),o&&o.get(ft).load(sA)}fadeInRipple(n,t,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=y(y({},Os),r.animation);r.centered&&(n=i.left+i.width/2,t=i.top+i.height/2);let s=r.radius||aA(n,t,i),a=n-i.left,l=t-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),m=f.transitionProperty,h=f.transitionDuration,p=m==="none"||h==="0s"||h==="0s, 0s"||i.width===0&&i.height===0,v=new mm(this,d,r,p);d.style.transform="scale3d(1, 1, 1)",v.state=Lt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=v);let b=null;return!p&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let D=()=>{b&&(b.fallbackTimer=null),clearTimeout(nt),this._finishRippleTransition(v)},oe=()=>this._destroyRipple(v),nt=setTimeout(oe,c+100);d.addEventListener("transitionend",D),d.addEventListener("transitioncancel",oe),b={onTransitionEnd:D,onTransitionCancel:oe,fallbackTimer:nt}}),this._activeRipples.set(v,b),(p||!c)&&this._finishRippleTransition(v),v}fadeOutRipple(n){if(n.state===Lt.FADING_OUT||n.state===Lt.HIDDEN)return;let t=n.element,r=y(y({},Os),n.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",n.state=Lt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=Dt(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Yb.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Zb.forEach(t=>{this._triggerElement.addEventListener(t,this,qb)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Lt.FADING_IN?this._startFadeOutTransition(n):n.state===Lt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=Lt.VISIBLE,!r&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Lt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=oi(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+oA;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!si(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===Lt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Lt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Yb.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(Zb.forEach(t=>n.removeEventListener(t,this,qb)),this._pointerUpEventsRegistered=!1))}};function aA(e,n,t){let r=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),i=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(r*r+i*i)}var gm=new g("mat-ripple-global-options"),Xb=(()=>{class e{_elementRef=u(N);_animationsDisabled=ht();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=u(I),r=u(ie),i=u(gm,{optional:!0}),o=u(k);this._globalOptions=i||{},this._rippleRenderer=new ks(this,t,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:y(y(y({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,r=0,i){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,r,y(y({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,y(y({},this.rippleConfig),t))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&q("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var lA={capture:!0},cA=["focus","mousedown","mouseenter","touchstart"],vm="mat-ripple-loader-uninitialized",ym="mat-ripple-loader-class-name",Kb="mat-ripple-loader-centered",Lc="mat-ripple-loader-disabled",Qb=(()=>{class e{_document=u(C);_animationsDisabled=ht();_globalRippleOptions=u(gm,{optional:!0});_platform=u(ie);_ngZone=u(I);_injector=u(k);_eventCleanups;_hosts=new Map;constructor(){let t=u(Ne).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>cA.map(r=>t.listen(this._document,r,this._onInteraction,lA)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(vm,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(ym))&&t.setAttribute(ym,r.className||""),r.centered&&t.setAttribute(Kb,""),r.disabled&&t.setAttribute(Lc,"")}setDisabled(t,r){let i=this._hosts.get(t);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):r?t.setAttribute(Lc,""):t.removeAttribute(Lc)}_onInteraction=t=>{let r=ut(t);if(r instanceof HTMLElement){let i=r.closest(`[${vm}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(ym)),t.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Os.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??Os.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(Lc),rippleConfig:{centered:t.hasAttribute(Kb),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new ks(a,this._ngZone,r,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(t),this._hosts.set(t,{target:a,renderer:l,hasSetUpEvents:c}),t.removeAttribute(vm)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Vc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
    --mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var dA=["*",[["","progressIndicator",""]]],uA=["*","[progressIndicator]"];function fA(e,n){e&1&&(Re(0,"div",1),W(1,1),Ve())}var hA=new g("MAT_BUTTON_CONFIG");function Jb(e){return e==null?void 0:gs(e)}var _m=(()=>{class e{_elementRef=u(N);_ngZone=u(I);_animationsDisabled=ht();_config=u(hA,{optional:!0});_focusMonitor=u(mr);_cleanupClick;_renderer=u(De);_rippleLoader=u(Qb);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Ah(!1,{transform:Ie});constructor(){u(ft).load(Vc);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,i){r&2&&(me("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Qt(i.color?"mat-"+i.color:""),q("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ie],disabled:[2,"disabled","disabled",Ie],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie],tabIndex:[2,"tabIndex","tabIndex",Jb],_tabindex:[2,"tabindex","_tabindex",Jb],showProgress:[1,"showProgress"]}})}return e})(),bm=(()=>{class e extends _m{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[de],ngContentSelectors:uA,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Be(dA),$e(0,"span",0),W(1),ue(2,fA,2,0,"div",1),$e(3,"span",2)(4,"span",3)),r&2&&(P(2),fe(i.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return e})();var mA=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(C)}),pA=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function eD(e){let n=e?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?pA.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Vt=(()=>{class e{get value(){return this.valueSignal()}valueSignal=K("ltr");change=new J;constructor(){let t=u(mA,{optional:!0});if(t){let r=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(eD(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var _e=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({})}return e})();var Bc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[_e]})}return e})();var gA=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]],[["","progressIndicator",""]]],vA=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]","[progressIndicator]"];function yA(e,n){e&1&&(Re(0,"div",2),W(1,3),Ve())}var tD=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),jc=(()=>{class e extends _m{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=_A(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?tD.get(this._appearance):null,o=tD.get(t);i&&r.remove(...i),r.add(...o),this._appearance=t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[de],ngContentSelectors:vA,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(r,i){r&1&&(Be(gA),$e(0,"span",0),W(1),Re(2,"span",1),W(3,1),Ve(),W(4,2),ue(5,yA,2,0,"div",2),$e(6,"span",3)(7,"span",4)),r&2&&(q("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab),P(5),fe(i.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --mat-progress-spinner-active-indicator-color: var(--mat-button-filled-progress-active-indicator-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return e})();function _A(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var Hc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[Bc,_e]})}return e})();var bA=20,Fs=(()=>{class e{_ngZone=u(I);_platform=u(ie);_renderer=u(Ne).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new E;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let r=this.scrollContainers.get(t);r&&(r.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=bA){return this._platform.isBrowser?new z(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(Na(t)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):We()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(t,r){let i=this.getAncestorScrollContainers(t);return this.scrolled(r).pipe(Ce(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(t){let r=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,t)&&r.push(o)}),r}_targetContainsElement(t,r){let i=Dt(r),o=t.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),rD=(()=>{class e{elementRef=u(N);scrollDispatcher=u(Fs);ngZone=u(I);dir=u(Vt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new E;_renderer=u(De);_cleanupScroll;_elementScrolled=new E;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=i?t.end:t.start),t.right==null&&(t.right=i?t.start:t.end),t.bottom!=null&&(t.top=r.scrollHeight-r.clientHeight-t.bottom),i&&eo()!=tn.NORMAL?(t.left!=null&&(t.right=r.scrollWidth-r.clientWidth-t.left),eo()==tn.INVERTED?t.left=t.right:eo()==tn.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=r.scrollWidth-r.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let r=this.elementRef.nativeElement;Pc()?r.scrollTo(t):(t.top!=null&&(r.scrollTop=t.top),t.left!=null&&(r.scrollLeft=t.left))}measureScrollOffset(t){let r="left",i="right",o=this.elementRef.nativeElement;if(t=="top")return o.scrollTop;if(t=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return t=="start"?t=s?i:r:t=="end"&&(t=s?r:i),s&&eo()==tn.INVERTED?t==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&eo()==tn.NEGATED?t==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return e})(),DA=20,ro=(()=>{class e{_platform=u(ie);_listeners;_viewportSize=null;_change=new E;_document=u(C);constructor(){let t=u(I),r=u(Ne).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,r=this._getWindow(),i=t.documentElement,o=i.getBoundingClientRect(),s=-o.top||t.body?.scrollTop||r.scrollY||i.scrollTop||0,a=-o.left||t.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(t=DA){return t>0?this._change.pipe(Na(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var Uc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({})}return e})(),Dm=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[_e,Uc,_e,Uc]})}return e})();var Ps=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},io=class extends Ps{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,t,r,i,o,s){super(),this.component=n,this.viewContainerRef=t,this.injector=r,this.projectableNodes=i,this.bindings=o||null,this.directives=s||null}},gr=class extends Ps{templateRef;viewContainerRef;context;injector;constructor(n,t,r,i){super(),this.templateRef=n,this.viewContainerRef=t,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Em=class extends Ps{element;constructor(n){super(),this.element=n instanceof N?n.nativeElement:n}},oo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof io)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof gr)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Em)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ls=class extends oo{outletElement;_appRef;_defaultInjector;constructor(n,t,r){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=r}attachComponentPortal(n){let t;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(sr,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||k.NULL,o=i.get(Me,r.injector);t=ac(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),r.attachView(t.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,r=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(r);i!==-1&&t.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let t=n.element;t.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(r,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var Vs=(()=>{class e extends oo{_moduleRef=u(sr,{optional:!0});_document=u(C);_viewContainerRef=u(Rt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new J;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let r=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=r.createComponent(t.component,{index:r.length,injector:t.injector||r.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=t=>{let r=t.element;r.parentNode;let i=this._document.createComment("dom-portal");t.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=(()=>{let t;return function(i){return(t||(t=yt(e)))(i||e)}})();static \u0275dir=M({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[de]})}return e})(),di=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({})}return e})();var iD=Pc();function ao(e){return new zc(e.get(ro),e.get(C))}var zc=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Ae(-this._previousScrollPosition.left),n.style.top=Ae(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,r=n.style,i=t.style,o=r.scrollBehavior||"",s=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),iD&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),iD&&(r.scrollBehavior=o,i.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,r=this._viewportRuler.getViewportSize();return t.scrollHeight>r.height||t.scrollWidth>r.width}};function uD(e,n){return new $c(e.get(Fs),e.get(I),e.get(ro),n)}var $c=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,r,i){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ce(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Bs=class{enable(){}disable(){}attach(){}};function Cm(e,n){return n.some(t=>{let r=e.bottom<t.top,i=e.top>t.bottom,o=e.right<t.left,s=e.left>t.right;return r||i||o||s})}function oD(e,n){return n.some(t=>{let r=e.top<t.top,i=e.bottom>t.bottom,o=e.left<t.left,s=e.right>t.right;return r||i||o||s})}function Zc(e,n){return new Gc(e.get(Fs),e.get(ro),e.get(I),n)}var Gc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,r,i){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Cm(t,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fD=(()=>{class e{_injector=u(k);noop=()=>new Bs;close=t=>uD(this._injector,t);block=()=>ao(this._injector);reposition=t=>Zc(this._injector,t);static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),vr=class{positionStrategy;scrollStrategy=new Bs;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let r of t)n[r]!==void 0&&(this[r]=n[r])}}};var Wc=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var hD=(()=>{class e{_attachedOverlays=[];_document=u(C);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let r=this._attachedOverlays.indexOf(t);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,r,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),mD=(()=>{class e extends hD{_ngZone=u(I);_renderer=u(Ne).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),pD=(()=>{class e extends hD{_platform=u(ie);_ngZone=u(I);_renderer=u(Ne).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=ut(t)};_clickListener=t=>{let r=ut(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,t,l))){if(sD(a.overlayElement,r)||sD(a.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function sD(e,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===e)return!0;r=t&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var gD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return e})(),Xc=(()=>{class e{_platform=u(ie);_containerElement;_document=u(C);_styleLoader=u(ft);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||um()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(t),um()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(gD)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),wm=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,r,i){this._renderer=t,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Im(e){return e&&e.nodeType===1}var so=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new E;_attachments=new E;_detachments=new E;_positionStrategy;_scrollStrategy;_locationChanges=Z.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new E;_outsidePointerEvents=new E;_afterNextRenderRef;constructor(n,t,r,i,o,s,a,l,c,d=!1,f,m){this._portalOutlet=n,this._host=t,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=m,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Nt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=y(y({},this._config),n),this._updateElementSize()}setDirection(n){this._config=U(y({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Ae(this._config.width),n.height=Ae(this._config.height),n.minWidth=Ae(this._config.minWidth),n.minHeight=Ae(this._config.minHeight),n.maxWidth=Ae(this._config.maxWidth),n.maxHeight=Ae(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Im(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new wm(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,r){let i=Ji(t||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Nt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},aD="cdk-overlay-connected-position-bounding-box",CA=/([A-Za-z%]+)$/;function Kc(e,n){return new qc(n,e.get(ro),e.get(C),e.get(ie),e.get(Xc))}var qc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new E;_resizeSubscription=Z.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,r,i,o){this._viewportRuler=t,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(aD),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,i,a),c=this._getOverlayPoint(l,t,a),d=this._getOverlayFit(c,t,r,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:a,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:t})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ui(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(aD),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof N?this._origin.nativeElement:Im(this._origin)?this._origin:null}_getOriginPoint(n,t,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;i=r.originX=="start"?s:a}t.left<0&&(i-=t.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(n,t,r){let i;r.overlayX=="center"?i=-t.width/2:r.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return r.overlayY=="center"?o=-t.height/2:o=r.overlayY=="top"?0:-t.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,t,r,i){let o=cD(t),{x:s,y:a}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(s+=l),c&&(a+=c);let d=0-s,f=s+o.width-r.width,m=0-a,h=a+o.height-r.height,p=this._subtractOverflows(o.width,d,f),v=this._subtractOverflows(o.height,m,h),b=p*v;return{visibleArea:b,isCompletelyWithinViewport:o.width*o.height===b,fitsInViewportVertically:v===o.height,fitsInViewportHorizontally:p==o.width}}_canFitWithFlexibleDimensions(n,t,r){if(this._hasFlexibleDimensions){let i=r.bottom-t.y,o=r.right-t.x,s=lD(this._overlayRef.getConfig().minHeight),a=lD(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=i,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,t,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=cD(t),o=this._viewportRect,s=Math.max(n.x+i.width-o.width,0),a=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,f=0;return i.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?f=l||-a:f=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!wA(this._lastScrollVisibility,r)){let i=new Wc(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,t){let r=this._viewportRect,i=this._isRtl(),o,s,a;if(t.overlayY==="top")s=n.y,o=r.height-s+this._getViewportMarginBottom();else if(t.overlayY==="bottom")a=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-a+this._getViewportMarginTop();else{let h=Math.min(r.bottom-n.y+r.top,n.y),p=this._lastBoundingBoxSize.height;o=h*2,s=n.y-h,o>p&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-p/2)}let l=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,c=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,d,f,m;if(c)m=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let h=Math.min(r.right-n.x+r.left,n.x),p=this._lastBoundingBoxSize.width;d=h*2,f=n.x-h,d>p&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-p/2)}return{top:s,left:f,bottom:a,right:m,width:d,height:o}}_setBoundingBoxStyles(n,t){let r=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;i.width=Ae(r.width),i.height=Ae(r.height),i.top=Ae(r.top)||"auto",i.bottom=Ae(r.bottom)||"auto",i.left=Ae(r.left)||"auto",i.right=Ae(r.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=Ae(o)),s&&(i.maxWidth=Ae(s))}this._lastBoundingBoxSize=r,ui(this._boundingBox.style,i)}_resetBoundingBoxStyles(){ui(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ui(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();ui(r,this._getExactOverlayY(t,n,d)),ui(r,this._getExactOverlayX(t,n,d))}else r.position="static";let a="",l=this._getOffset(t,"x"),c=this._getOffset(t,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),r.transform=a.trim(),s.maxHeight&&(i?r.maxHeight=Ae(s.maxHeight):o&&(r.maxHeight="")),s.maxWidth&&(i?r.maxWidth=Ae(s.maxWidth):o&&(r.maxWidth="")),ui(this._pane.style,r)}_getExactOverlayY(n,t,r){let i={top:"",bottom:""},o=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;i.bottom=`${s-(o.y+this._overlayRect.height)}px`}else i.top=Ae(o.y);return i}_getExactOverlayX(n,t,r){let i={left:"",right:""},o=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;i.right=`${a-(o.x+this._overlayRect.width)}px`}else i.left=Ae(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:oD(n,r),isOriginOutsideView:Cm(n,r),isOverlayClipped:oD(t,r),isOverlayOutsideView:Cm(t,r)}}_subtractOverflows(n,...t){return t.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Ji(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof N)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+t,height:r,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let r=t.getBoundingClientRect();return n&&(t.style.display=""),r}};function ui(e,n){for(let t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}function lD(e){if(typeof e!="number"&&e!=null){let[n,t]=e.split(CA);return!t||t==="px"?parseFloat(n):null}return e||null}function cD(e){return{top:Math.floor(e.top),right:Math.floor(e.right),bottom:Math.floor(e.bottom),left:Math.floor(e.left),width:Math.floor(e.width),height:Math.floor(e.height)}}function wA(e,n){return e===n?!0:e.isOriginClipped===n.isOriginClipped&&e.isOriginOutsideView===n.isOriginOutsideView&&e.isOverlayClipped===n.isOverlayClipped&&e.isOverlayOutsideView===n.isOverlayOutsideView}var dD="cdk-global-overlay-wrapper";function lo(e){return new Yc}var Yc=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(dD),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:s,maxHeight:a}=r,l=(i==="100%"||i==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,f=this._xOffset,m=this._overlayRef.getConfig().direction==="rtl",h="",p="",v="";l?v="flex-start":d==="center"?(v="center",m?p=f:h=f):m?d==="left"||d==="end"?(v="flex-end",h=f):(d==="right"||d==="start")&&(v="flex-start",p=f):d==="left"||d==="start"?(v="flex-start",h=f):(d==="right"||d==="end")&&(v="flex-end",p=f),n.position=this._cssPosition,n.marginLeft=l?"0":h,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":p,t.justifyContent=v,t.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,r=t.style;t.classList.remove(dD),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},vD=(()=>{class e{_injector=u(k);global(){return lo()}flexibleConnectedTo(t){return Kc(this._injector,t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),yD=new g("OVERLAY_DEFAULT_CONFIG");function co(e,n){e.get(ft).load(gD);let t=e.get(Xc),r=e.get(C),i=e.get(Ge),o=e.get(_t),s=e.get(Vt),a=e.get(De,null,{optional:!0})||e.get(Ne).createRenderer(null,null),l=new vr(n),c=e.get(yD,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,!r.body||!("showPopover"in r.body)?l.usePopover=!1:l.usePopover=n?.usePopover??c;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let m=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Im(m)?m.after(f):m?.type==="parent"?m.element.appendChild(f):t.getContainerElement().appendChild(f),new so(new Ls(d,o,e),f,d,l,e.get(I),e.get(mD),r,e.get(cc),e.get(pD),n?.disableAnimations??e.get(Yo,null,{optional:!0})==="NoopAnimations",e.get(Me),a)}var _D=(()=>{class e{scrollStrategies=u(fD);_positionBuilder=u(vD);_injector=u(k);create(t){return co(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var fi=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({providers:[_D],imports:[_e,di,Dm,Dm]})}return e})();function IA(e,n){}var yr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Mm=(()=>{class e extends oo{_elementRef=u(N);_focusTrapFactory=u(Bb);_config;_interactivityChecker=u(lm);_ngZone=u(I);_focusMonitor=u(mr);_renderer=u(De);_changeDetectorRef=u(ct);_injector=u(k);_platform=u(ie);_document=u(C);_portalOutlet;_focusTrapped=new E;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=u(yr,{optional:!0})||new yr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let r=this._ariaLabelledByQueue.indexOf(t);r>-1&&(this._ariaLabelledByQueue.splice(r,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),r}attachTemplatePortal(t){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),r}attachDomPortal=t=>{this._portalOutlet.hasAttached();let r=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),r};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,r){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),s(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",i),s=this._renderer.listen(t,"mousedown",i)})),t.focus(r)}_focusByCssSelector(t,r){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,r)}_trapFocus(t){this._isDestroyed||Nt(()=>{let r=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||r.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,r=null;if(typeof t=="string"?r=this._document.querySelector(t):typeof t=="boolean"?r=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(r=t),this._config.restoreFocus&&r&&typeof r.focus=="function"){let i=Ts(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(r,this._closeInteractionType),this._closeInteractionType=null):r.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,r=Ts();return t===r||t.contains(r)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Ts()))}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["cdk-dialog-container"]],viewQuery:function(r,i){if(r&1&&gn(Vs,7),r&2){let o;pe(o=ge())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(r,i){r&2&&me("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[de],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(r,i){r&1&&Ot(0,IA,0,0,"ng-template",0)},dependencies:[Vs],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return e})(),js=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new E;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(r=>{r.keyCode===27&&!this.disableClose&&!pr(r)&&(r.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let r=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),r.next(n),r.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}},xA=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let e=u(k);return()=>ao(e)}}),MA=new g("DialogData"),SA=new g("DefaultDialogConfig");function TA(e){let n=K(e),t=new J;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var Sm=(()=>{class e{_injector=u(k);_defaultOptions=u(SA,{optional:!0});_parentDialog=u(e,{optional:!0,skipSelf:!0});_overlayContainer=u(Xc);_idGenerator=u(Ge);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;_ariaHiddenElements=new Map;_scrollStrategy=u(xA);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=xo(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(it(void 0)));open(t,r){let i=this._defaultOptions||new yr;r=y(y({},i),r),r.id=r.id||this._idGenerator.getId("cdk-dialog-"),r.id&&this.getDialogById(r.id);let o=this._getOverlayConfig(r),s=co(this._injector,o),a=new js(s,r),l=this._attachContainer(s,a,r);if(a.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(mt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(t,a,l,r),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,!0)),this.afterOpened.next(a),a}closeAll(){xm(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(r=>r.id===t)}ngOnDestroy(){xm(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),xm(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let r=new vr({positionStrategy:t.positionStrategy||lo().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(r.backdropClass=t.backdropClass),r}_attachContainer(t,r,i){let o=i.injector||i.viewContainerRef?.injector,s=[{provide:yr,useValue:i},{provide:js,useValue:r},{provide:so,useValue:t}],a;i.container?typeof i.container=="function"?a=i.container:(a=i.container.type,s.push(...i.container.providers(i))):a=Mm;let l=new io(a,i.viewContainerRef,k.create({parent:o||this._injector,providers:s}));return t.attach(l).instance}_attachDialogContent(t,r,i,o){if(t instanceof vt){let s=this._createInjector(o,r,i,void 0),a={$implicit:o.data,dialogRef:r};o.templateContext&&(a=y(y({},a),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new gr(t,null,a,s))}else{let s=this._createInjector(o,r,i,this._injector),a=i.attachComponentPortal(new io(t,o.viewContainerRef,s,null,o.bindings));r.componentRef=a,r.componentInstance=a.instance}}_createInjector(t,r,i,o){let s=t.injector||t.viewContainerRef?.injector,a=[{provide:MA,useValue:t.data},{provide:js,useValue:r}];return t.providers&&(typeof t.providers=="function"?a.push(...t.providers(r,t,i)):a.push(...t.providers)),t.direction&&(!s||!s.get(Vt,null,{optional:!0}))&&a.push({provide:Vt,useValue:TA(t.direction)}),k.create({parent:s||o,providers:a})}_removeOpenDialog(t,r){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),r&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let r=t.parentElement.children;for(let i=r.length-1;i>-1;i--){let o=r[i];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();function xm(e,n){let t=e.length;for(;t--;)n(e[t])}var bD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({providers:[Sm],imports:[fi,di,jb,di]})}return e})();function AA(e,n){}var ed=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Tm="mdc-dialog--open",DD="mdc-dialog--opening",ED="mdc-dialog--closing",NA=150,RA=75,OA=(()=>{class e extends Mm{_animationStateChanged=new J;_animationsEnabled=!ht();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?wD(this._config.enterAnimationDuration)??NA:0;_exitAnimationDuration=this._animationsEnabled?wD(this._config.exitAnimationDuration)??RA:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(CD,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(DD,Tm)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Tm),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Tm),this._animationsEnabled?(this._hostElement.style.setProperty(CD,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ED)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(DD,ED)}_waitForAnimationToComplete(t,r){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(r,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let r=super.attachComponentPortal(t);return r.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),r}static \u0275fac=(()=>{let t;return function(i){return(t||(t=yt(e)))(i||e)}})();static \u0275cmp=$({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(r,i){r&2&&(Kt("id",i._config.id),me("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),q("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[de],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(r,i){r&1&&(T(0,"div",0)(1,"div",1),Ot(2,AA,0,0,"ng-template",2),A()())},dependencies:[Vs],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return e})(),CD="--mat-dialog-transition-duration";function wD(e){return e==null?null:typeof e=="number"?e:e.endsWith("ms")?Ki(e.substring(0,e.length-2)):e.endsWith("s")?Ki(e.substring(0,e.length-1))*1e3:e==="0"?0:null}var Jc=(function(e){return e[e.OPEN=0]="OPEN",e[e.CLOSING=1]="CLOSING",e[e.CLOSED=2]="CLOSED",e})(Jc||{}),Hs=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new $n(1);_beforeClosed=new $n(1);_result;_closeFallbackTimeout;_state=Jc.OPEN;_closeInteractionType;constructor(n,t,r){this._ref=n,this._config=t,this._containerInstance=r,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),r._animationStateChanged.pipe(Ce(i=>i.state==="opened"),mt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),r._animationStateChanged.pipe(Ce(i=>i.state==="closed"),mt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),En(this.backdropClick(),this.keydownEvents().pipe(Ce(i=>i.keyCode===27&&!this.disableClose&&!pr(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),ID(this,i.type==="keydown"?"keyboard":"mouse"))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Ce(r=>r.state==="closing"),mt(1)).subscribe(r=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),r.totalTime+100)}),this._state=Jc.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=Jc.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ID(e,n,t){return e._closeInteractionType=n,e.close(t)}var kA=new g("MatMdcDialogData"),FA=new g("mat-mdc-dialog-default-options"),PA=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let e=u(k);return()=>ao(e)}}),Us=(()=>{class e{_defaultOptions=u(FA,{optional:!0});_scrollStrategy=u(PA);_parentDialog=u(e,{optional:!0,skipSelf:!0});_idGenerator=u(Ge);_injector=u(k);_dialog=u(Sm);_animationsDisabled=ht();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;dialogConfigClass=ed;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=xo(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(it(void 0)));constructor(){this._dialogRefConstructor=Hs,this._dialogContainerType=OA,this._dialogDataToken=kA}open(t,r){let i;r=y(y({},this._defaultOptions||new ed),r),r.id=r.id||this._idGenerator.getId("mat-mdc-dialog-"),r.scrollStrategy=r.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,U(y({},r),{positionStrategy:lo(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||r.enterAnimationDuration?.toLocaleString()==="0"||r.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:r},{provide:yr,useValue:r}]},templateContext:()=>({dialogRef:i}),providers:(s,a,l)=>(i=new this._dialogRefConstructor(s,r,l),i.updatePosition(r?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:a.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(i);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(r=>r.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let r=t.length;for(;r--;)t[r].close()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})(),xD=(()=>{class e{dialogRef=u(Hs,{optional:!0});_elementRef=u(N);_dialog=u(Us);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=ND(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let r=t._matDialogClose;r&&(this.dialogResult=r.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&ID(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(r,i){r&1&&Te("click",function(s){return i._onButtonClick(s)}),r&2&&me("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[st]})}return e})(),MD=(()=>{class e{_dialogRef=u(Hs,{optional:!0});_elementRef=u(N);_dialog=u(Us);ngOnInit(){this._dialogRef||(this._dialogRef=ND(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e})}return e})(),SD=(()=>{class e extends MD{id=u(Ge).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=yt(e)))(i||e)}})();static \u0275dir=M({type:e,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(r,i){r&2&&Kt("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[de]})}return e})(),TD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[mh([rD])]})}return e})(),AD=(()=>{class e extends MD{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=yt(e)))(i||e)}})();static \u0275dir=M({type:e,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(r,i){r&2&&q("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[de]})}return e})();function ND(e,n){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(r=>r.id===t.id):null}var td=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({providers:[Us],imports:[bD,fi,di,_e]})}return e})();function RD(e){return Error(`Unable to find icon with the name "${e}"`)}function VA(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function OD(e){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`)}function kD(e){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`)}var Vn=class{url;svgText;options;svgElement=null;constructor(n,t,r){this.url=n,this.svgText=t,this.options=r}},PD=(()=>{class e{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,r,i,o){this._httpClient=t,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(t,r,i){return this.addSvgIconInNamespace("",t,r,i)}addSvgIconLiteral(t,r,i){return this.addSvgIconLiteralInNamespace("",t,r,i)}addSvgIconInNamespace(t,r,i,o){return this._addSvgIconConfig(t,r,new Vn(i,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,r,i,o){let s=this._sanitizer.sanitize(et.HTML,i);if(!s)throw kD(i);let a=Qi(s);return this._addSvgIconConfig(t,r,new Vn("",a,o))}addSvgIconSet(t,r){return this.addSvgIconSetInNamespace("",t,r)}addSvgIconSetLiteral(t,r){return this.addSvgIconSetLiteralInNamespace("",t,r)}addSvgIconSetInNamespace(t,r,i){return this._addSvgIconSetConfig(t,new Vn(r,null,i))}addSvgIconSetLiteralInNamespace(t,r,i){let o=this._sanitizer.sanitize(et.HTML,r);if(!o)throw kD(r);let s=Qi(o);return this._addSvgIconSetConfig(t,new Vn("",s,i))}registerFontClassAlias(t,r=t){return this._fontCssClassesByAlias.set(t,r),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let r=this._sanitizer.sanitize(et.RESOURCE_URL,t);if(!r)throw OD(t);let i=this._cachedIconsByUrl.get(r);return i?We(nd(i)):this._loadSvgIconFromConfig(new Vn(t,null)).pipe(Or(o=>this._cachedIconsByUrl.set(r,o)),ce(o=>nd(o)))}getNamedSvgIcon(t,r=""){let i=FD(r,t),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,t),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(r);return s?this._getSvgFromIconSetConfigs(t,s):Hd(RD(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?We(nd(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ce(r=>nd(r)))}_getSvgFromIconSetConfigs(t,r){let i=this._extractIconWithNameFromAnySet(t,r);if(i)return We(i);let o=r.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Ra(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(et.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),We(null)})));return Mo(o).pipe(ce(()=>{let s=this._extractIconWithNameFromAnySet(t,r);if(!s)throw RD(t);return s}))}_extractIconWithNameFromAnySet(t,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Or(r=>t.svgText=r),ce(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?We(null):this._fetchIcon(t).pipe(Or(r=>t.svgText=r))}_extractSvgIconFromSet(t,r,i){let o=t.querySelector(`[id="${r}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,i);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),i);let a=this._svgElementFromString(Qi("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,i)}_svgElementFromString(t){let r=this._document.createElement("DIV");r.innerHTML=t;let i=r.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let r=this._svgElementFromString(Qi("<svg></svg>")),i=t.attributes;for(let o=0;o<i.length;o++){let{name:s,value:a}=i[o];s!=="id"&&r.setAttribute(s,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(t.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(t,r){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),r&&r.viewBox&&t.setAttribute("viewBox",r.viewBox),t}_fetchIcon(t){let{url:r,options:i}=t,o=i?.withCredentials??!1;if(!this._httpClient)throw VA();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let s=this._sanitizer.sanitize(et.RESOURCE_URL,r);if(!s)throw OD(r);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(ce(c=>Qi(c)),To(()=>this._inProgressUrlFetches.delete(s)),Ao());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(t,r,i){return this._svgIconConfigs.set(FD(t,r),i),this}_addSvgIconSetConfig(t,r){let i=this._iconSetConfigs.get(t);return i?i.push(r):this._iconSetConfigs.set(t,[r]),this}_svgElementFromConfig(t){if(!t.svgElement){let r=this._svgElementFromString(t.svgText);this._setSvgAttributes(r,t.options),t.svgElement=r}return t.svgElement}_getIconConfigFromResolvers(t,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,t);if(o)return BA(o)?new Vn(o.url,null,o.options):new Vn(o,null)}}static \u0275fac=function(r){return new(r||e)(S(Ms,8),S(Ss),S(C,8),S(Je))};static \u0275prov=G({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function nd(e){return e.cloneNode(!0)}function FD(e,n){return e+":"+n}function BA(e){return!!(e.url&&e.options)}var jA=["*"],HA=new g("MAT_ICON_DEFAULT_OPTIONS"),UA=new g("mat-icon-location",{providedIn:"root",factory:()=>{let e=u(C),n=e?e.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),LD=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],zA=LD.map(e=>`[${e}]`).join(", "),$A=/^url\(['"]?#(.*?)['"]?\)$/,VD=(()=>{class e{_elementRef=u(N);_iconRegistry=u(PD);_location=u(UA);_errorHandler=u(Je);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let r=this._cleanupFontValue(t);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let r=this._cleanupFontValue(t);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Z.EMPTY;constructor(){let t=u(new sc("aria-hidden"),{optional:!0}),r=u(HA,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let r=t.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,r=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=t.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),r.forEach(i=>t.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let r=this._elementsWithExternalReferences;r&&r.forEach((i,o)=>{i.forEach(s=>{o.setAttribute(s.name,`url('${t}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let r=t.querySelectorAll(zA),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)LD.forEach(s=>{let a=r[o],l=a.getAttribute(s),c=l?l.match($A):null;if(c){let d=i.get(a);d||(d=[],i.set(a,d)),d.push({name:s,value:c[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[r,i]=this._splitIconName(t);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(mt(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(r,i){r&2&&(me("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Qt(i.color?"mat-"+i.color:""),q("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ie],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:jA,decls:1,vars:0,template:function(r,i){r&1&&(Be(),W(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return e})(),BD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[_e]})}return e})();var YA=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ZA=["mat-icon, [matMenuItemIcon]","*"];function XA(e,n){e&1&&(cl(),T(0,"svg",2),Se(1,"polygon",3),A())}var KA=["*"];function QA(e,n){if(e&1){let t=as();Re(0,"div",0),Kl("click",function(){dn(t);let i=ke();return un(i.closed.emit("click"))})("animationstart",function(i){dn(t);let o=ke();return un(o._onAnimationStart(i.animationName))})("animationend",function(i){dn(t);let o=ke();return un(o._onAnimationDone(i.animationName))})("animationcancel",function(i){dn(t);let o=ke();return un(o._onAnimationDone(i.animationName))}),Re(1,"div",1),W(2),Ve()()}if(e&2){let t=ke();Qt(t._classList),q("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Kt("id",t.panelId),me("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Nm=new g("MAT_MENU_PANEL"),zs=(()=>{class e{_elementRef=u(N);_document=u(C);_focusMonitor=u(mr);_parentMenu=u(Nm,{optional:!0});_changeDetectorRef=u(ct);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new E;_focused=new E;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(ft).load(Vc),this._parentMenu?.addItem?.(this)}focus(t,r){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,r):this._getHostElement().focus(r),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),r=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<r.length;i++)r[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(r,i){r&1&&Te("click",function(s){return i._checkDisabled(s)})("mouseenter",function(){return i._handleMouseEnter()}),r&2&&(me("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),q("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",Ie],disableRipple:[2,"disableRipple","disableRipple",Ie]},exportAs:["matMenuItem"],ngContentSelectors:ZA,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(r,i){r&1&&(Be(YA),W(0),T(1,"span",0),W(2,1),A(),Se(3,"div",1),ue(4,XA,2,0,":svg:svg",2)),r&2&&(P(3),lt("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),P(),fe(i._triggersSubmenu?4:-1))},dependencies:[Xb],encapsulation:2})}return e})();var JA=new g("MatMenuContent");var eN=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Am="_mat-menu-enter",rd="_mat-menu-exit",fo=(()=>{class e{_elementRef=u(N);_changeDetectorRef=u(ct);_injector=u(k);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=ht();_allItems;_directDescendantItems=new An;_classList={};_panelAnimationState="void";_animationDone=new E;_isAnimating=K(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let r=this._previousPanelClass,i=y({},this._classList);r&&r.length&&r.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass="";get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new J;close=this.closed;panelId=u(Ge).getId("mat-menu-panel-");constructor(){let t=u(eN);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Rs(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(it(this._directDescendantItems),Ii(t=>En(...t.map(r=>r._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let r=this._keyManager;if(this._panelAnimationState==="enter"&&r.activeItem?._hasFocus()){let i=t.toArray(),o=Math.max(0,Math.min(i.length-1,r.activeItemIndex||0));i[o]&&!i[o].disabled?r.setActiveItem(o):r.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(it(this._directDescendantItems),Ii(r=>En(...r.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let r=t.keyCode,i=this._keyManager;switch(r){case 27:pr(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(r===38||r===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Nt(()=>{let r=this._resolvePanel();if(!r||!r.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&r&&r.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,r=this.yPosition){this._classList=U(y({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":r==="above","mat-menu-below":r==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let r=t===rd;(r||t===Am)&&(r&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(r?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Am||t===rd)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let r=this._resolvePanel();r&&(r.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(rd),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Am:rd)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(it(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(r=>r._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["mat-menu"]],contentQueries:function(r,i,o){if(r&1&&ar(o,JA,5)(o,zs,5)(o,zs,4),r&2){let s;pe(s=ge())&&(i.lazyContent=s.first),pe(s=ge())&&(i._allItems=s),pe(s=ge())&&(i.items=s)}},viewQuery:function(r,i){if(r&1&&gn(vt,5),r&2){let o;pe(o=ge())&&(i.templateRef=o.first)}},hostVars:3,hostBindings:function(r,i){r&2&&me("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Ie],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:Ie(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[tt([{provide:Nm,useExisting:e}])],ngContentSelectors:KA,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(r,i){r&1&&(Be(),Zl(0,QA,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return e})(),tN=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let e=u(k);return()=>Zc(e)}});var uo=new WeakMap,nN=(()=>{class e{_canHaveBackdrop;_element=u(N);_viewContainerRef=u(Rt);_menuItemInstance=u(zs,{optional:!0,self:!0});_dir=u(Vt,{optional:!0});_focusMonitor=u(mr);_ngZone=u(I);_injector=u(k);_scrollStrategy=u(tN);_changeDetectorRef=u(ct);_animationsDisabled=ht();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Z.EMPTY;_menuCloseSubscription=Z.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(r=>{this._destroyMenu(r),(r==="click"||r==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(r)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let r=u(Nm,{optional:!0});this._parentMaterialMenu=r instanceof fo?r:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&uo.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let r=this._menu;if(this._menuOpen||!r)return;this._pendingRemoval?.unsubscribe();let i=uo.get(r);uo.set(r,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(r),s=o.getConfig(),a=s.positionStrategy;this._setPosition(r,a),this._canHaveBackdrop?s.hasBackdrop=r.hasBackdrop==null?!this._triggersSubmenu():r.hasBackdrop:s.hasBackdrop=r.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(r)),r.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),r.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,r.direction=this.dir,t&&r.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),r instanceof fo&&(r._setIsOpen(!0),r._directDescendantItems.changes.pipe(wt(r.close)).subscribe(()=>{a.withLockedPosition(!1).reapplyLastPosition(),a.withLockedPosition(!0)}))}focus(t,r){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,r):this._element.nativeElement.focus(r)}_destroyMenu(t){let r=this._overlayRef,i=this._menu;!r||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof fo&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(mt(1)).subscribe(()=>{r.detach(),uo.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(r.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&uo.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let r=this._getOverlayConfig(t);this._subscribeToPositions(t,r.positionStrategy),this._overlayRef=co(this._injector,r),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof fo&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new vr({positionStrategy:Kc(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,r){t.setPositionClasses&&r.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",s=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(o,s)})})}_setPosition(t,r){let[i,o]=t.xPosition==="before"?["end","start"]:["start","end"],[s,a]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[s,a],[d,f]=[i,o],m=0;if(this._triggersSubmenu()){if(f=i=t.xPosition==="before"?"start":"end",o=d=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let h=this._parentMaterialMenu.items.first;this._parentInnerPadding=h?h._getHostElement().offsetTop:0}m=s==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(l=s==="top"?"bottom":"top",c=a==="top"?"bottom":"top");r.withPositions([{originX:i,originY:l,overlayX:d,overlayY:s,offsetY:m},{originX:o,originY:l,overlayX:f,overlayY:s,offsetY:m},{originX:i,originY:c,overlayX:d,overlayY:a,offsetY:-m},{originX:o,originY:c,overlayX:f,overlayY:a,offsetY:-m}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),r=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:We(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ce(s=>this._menuOpen&&s!==this._menuItemInstance)):We();return En(t,i,o,r)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new gr(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return uo.get(t)===this}_triggerIsAriaDisabled(){return Ie(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(r){oh()};static \u0275dir=M({type:e})}return e})(),jD=(()=>{class e extends nN{_cleanupTouchstart;_hoverSubscription=Z.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new J;onMenuOpen=this.menuOpened;menuClosed=new J;onMenuClose=this.menuClosed;constructor(){super(!0);let t=u(De);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",r=>{si(r)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){oi(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let r=t.keyCode;(r===13||r===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(r===39&&this.dir==="ltr"||r===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(r,i){r&1&&Te("click",function(s){return i._handleClick(s)})("mousedown",function(s){return i._handleMousedown(s)})("keydown",function(s){return i._handleKeydown(s)}),r&2&&me("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[de]})}return e})();var HD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[Bc,fi,_e,Uc]})}return e})();var iN=["*",[["mat-toolbar-row"]]],oN=["*","mat-toolbar-row"],sN=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),UD=(()=>{class e{_elementRef=u(N);_platform=u(ie);_document=u(C);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["mat-toolbar"]],contentQueries:function(r,i,o){if(r&1&&ar(o,sN,5),r&2){let s;pe(s=ge())&&(i._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,i){r&2&&(Qt(i.color?"mat-"+i.color:""),q("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:oN,decls:2,vars:0,template:function(r,i){r&1&&(Be(iN),W(0),W(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return e})();var zD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[_e]})}return e})();var ho={api:"./",appname:"Minecraft server status",production:!0,theme:"azure-blue",serverIp:"85.215.76.190",serverPort:"25565"};var KD=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(r){return new(r||e)(te(De),te(N))};static \u0275dir=M({type:e})}return e})(),lN=(()=>{class e extends KD{static \u0275fac=(()=>{let t;return function(i){return(t||(t=yt(e)))(i||e)}})();static \u0275dir=M({type:e,features:[de]})}return e})(),QD=new g("");var cN={provide:QD,useExisting:$t(()=>md),multi:!0};function dN(){let e=kt()?kt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var uN=new g(""),md=(()=>{class e extends KD{_compositionMode;_composing=!1;constructor(t,r,i){super(t,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!dN())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(r){return new(r||e)(te(De),te(N),te(uN,8))};static \u0275dir=M({type:e,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&Te("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[tt([cN]),de]})}return e})();function Pm(e){return e==null||Lm(e)===0}function Lm(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var pd=new g(""),Vm=new g(""),fN=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Zs=class{static min(n){return hN(n)}static max(n){return mN(n)}static required(n){return JD(n)}static requiredTrue(n){return pN(n)}static email(n){return gN(n)}static minLength(n){return vN(n)}static maxLength(n){return yN(n)}static pattern(n){return _N(n)}static nullValidator(n){return sd()}static compose(n){return oE(n)}static composeAsync(n){return sE(n)}};function hN(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function mN(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function JD(e){return Pm(e.value)?{required:!0}:null}function pN(e){return e.value===!0?null:{required:!0}}function gN(e){return Pm(e.value)||fN.test(e.value)?null:{email:!0}}function vN(e){return n=>{let t=n.value?.length??Lm(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function yN(e){return n=>{let t=n.value?.length??Lm(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function _N(e){if(!e)return sd;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(Pm(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function sd(e){return null}function eE(e){return e!=null}function tE(e){return ni(e)?Ct(e):e}function nE(e){let n={};return e.forEach(t=>{n=t!=null?y(y({},n),t):n}),Object.keys(n).length===0?null:n}function rE(e,n){return n.map(t=>t(e))}function bN(e){return!e.validate}function iE(e){return e.map(n=>bN(n)?n:t=>n.validate(t))}function oE(e){if(!e)return null;let n=e.filter(eE);return n.length==0?null:function(t){return nE(rE(t,n))}}function Bm(e){return e!=null?oE(iE(e)):null}function sE(e){if(!e)return null;let n=e.filter(eE);return n.length==0?null:function(t){let r=rE(t,n).map(tE);return Mo(r).pipe(ce(nE))}}function jm(e){return e!=null?sE(iE(e)):null}function $D(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function aE(e){return e._rawValidators}function lE(e){return e._rawAsyncValidators}function Rm(e){return e?Array.isArray(e)?e:[e]:[]}function ad(e,n){return Array.isArray(e)?e.includes(n):e===n}function GD(e,n){let t=Rm(n);return Rm(e).forEach(i=>{ad(t,i)||t.push(i)}),t}function WD(e,n){return Rm(n).filter(t=>!ad(e,t))}var ld=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Bm(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=jm(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},_r=class extends ld{name;get formDirective(){return null}get path(){return null}};var $s="VALID",id="INVALID",mo="PENDING",Gs="DISABLED",br=class{},cd=class extends br{value;source;constructor(n,t){super(),this.value=n,this.source=t}},qs=class extends br{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Ys=class extends br{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},po=class extends br{status;source;constructor(n,t){super(),this.status=n,this.source=t}},dd=class extends br{source;constructor(n){super(),this.source=n}},hi=class extends br{source;constructor(n){super(),this.source=n}};function Hm(e){return(gd(e)?e.validators:e)||null}function DN(e){return Array.isArray(e)?Bm(e):e||null}function Um(e,n){return(gd(n)?n.asyncValidators:e)||null}function EN(e){return Array.isArray(e)?jm(e):e||null}function gd(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function cE(e,n,t){let r=e.controls;if(!(n?Object.keys(r):r).length)throw new _(1e3,"");if(!uE(r,t))throw new _(1001,"")}function dE(e,n,t){e._forEachChild((r,i)=>{if(t[i]===void 0)throw new _(-1002,"")})}var go=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=K(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return ee(this.statusReactive)}set status(n){ee(()=>this.statusReactive.set(n))}_status=we(()=>this.statusReactive());statusReactive=K(void 0);get valid(){return this.status===$s}get invalid(){return this.status===id}get pending(){return this.status===mo}get disabled(){return this.status===Gs}get enabled(){return this.status!==Gs}errors;get pristine(){return ee(this.pristineReactive)}set pristine(n){ee(()=>this.pristineReactive.set(n))}_pristine=we(()=>this.pristineReactive());pristineReactive=K(!0);get dirty(){return!this.pristine}get touched(){return ee(this.touchedReactive)}set touched(n){ee(()=>this.touchedReactive.set(n))}_touched=we(()=>this.touchedReactive());touchedReactive=K(!1);get untouched(){return!this.touched}_events=new E;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(GD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(GD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(WD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(WD(n,this._rawAsyncValidators))}hasValidator(n){return ad(this._rawValidators,n)}hasAsyncValidator(n){return ad(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(U(y({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new Ys(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),t&&n.emitEvent!==!1&&this._events.next(new Ys(!1,r))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(U(y({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new qs(!1,r))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),t&&n.emitEvent!==!1&&this._events.next(new qs(!0,r))}markAsPending(n={}){this.status=mo;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new po(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(U(y({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Gs,this.errors=null,this._forEachChild(i=>{i.disable(U(y({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new cd(this.value,r)),this._events.next(new po(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=$s,this._forEachChild(r=>{r.enable(U(y({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(U(y({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===$s||this.status===mo)&&this._runAsyncValidator(r,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new cd(this.value,t)),this._events.next(new po(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(U(y({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Gs:$s}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=mo,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let r=tE(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(n,t){let r=t?this.get(t):this;return r?.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new po(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,r)}_initObservables(){this.valueChanges=new J,this.statusChanges=new J}_calculateStatus(){return this._allControlsDisabled()?Gs:this.errors?id:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(mo)?mo:this._anyControlsHaveStatus(id)?id:$s}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,t),i&&this._events.next(new qs(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ys(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){gd(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=DN(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=EN(this._rawAsyncValidators)}_updateHasRequiredValidator(){ee(()=>this._hasRequired.set(this.hasValidator(Zs.required)))}};function uE(e,n){return Object.hasOwn(e,n)}function CN(e){return e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"}function wN(e,n,t,r){switch(t){case"name":e.setAttribute(n,t,r);break;case"disabled":case"readonly":case"required":r?e.setAttribute(n,t,""):e.removeAttribute(n,t);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?e.setAttribute(n,t,r.toString()):e.removeAttribute(n,t);break}}var Om=class{kind;context;control;message;constructor({kind:n,context:t,control:r}){this.kind=n,this.context=t,this.control=r}};var IN=(()=>{class e{_validator=sd;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):sd,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,features:[st]})}return e})();var xN={provide:pd,useExisting:$t(()=>fE),multi:!0};var fE=(()=>{class e extends IN{required;inputName="required";normalizeInput=Ie;createValidator=t=>JD;enabled(t){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=yt(e)))(i||e)}})();static \u0275dir=M({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,i){r&2&&me("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[tt([xN]),de]})}return e})();var MN=new g(""),zm=new g("",{factory:()=>$m}),$m="always";function SN(e,n){return[...n.path,e]}function TN(e,n,t=$m){Gm(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),NN(e,n),ON(e,n),RN(e,n),AN(e,n)}function qD(e,n,t=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),fd(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function ud(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function AN(e,n){if(n.valueAccessor.setDisabledState){let t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Gm(e,n){let t=aE(e);n.validator!==null?e.setValidators($D(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let r=lE(e);n.asyncValidator!==null?e.setAsyncValidators($D(r,n.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let i=()=>e.updateValueAndValidity();ud(n._rawValidators,i),ud(n._rawAsyncValidators,i)}function fd(e,n){let t=!1;if(e!==null){if(n.validator!==null){let i=aE(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.validator);o.length!==i.length&&(t=!0,e.setValidators(o))}}if(n.asyncValidator!==null){let i=lE(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(s=>s!==n.asyncValidator);o.length!==i.length&&(t=!0,e.setAsyncValidators(o))}}}let r=()=>{};return ud(n._rawValidators,r),ud(n._rawAsyncValidators,r),t}function NN(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&hE(e,n)})}function RN(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&hE(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function hE(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function ON(e,n){let t=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function mE(e,n){e==null,Gm(e,n)}function kN(e,n){return fd(e,n)}function FN(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function PN(e){return Object.getPrototypeOf(e.constructor)===lN}function pE(e,n){e._syncPendingControls(),n.forEach(t=>{let r=t.control;r.updateOn==="submit"&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function LN(e,n){if(!n)return null;Array.isArray(n);let t,r,i;return n.forEach(o=>{o.constructor===md?t=o:PN(o)?r=o:i=o}),i||r||t||null}function VN(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}var BN={provide:MN,useFactory:()=>{let e=u(Dr,{self:!0});return{setParseErrors:n=>{e.setParseErrorSource(n)},set onReset(n){e.onReset=n}}}},Dr=class extends ld{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof hi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=LN(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,t,r){super(),this.injector=n,this.renderer=t,this.rawValueAccessors=r,this.injector?.get(Ze)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(ct);if(!this.control||!n)return;let t=n.markForCheck.bind(n);this.subscription=new Z,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof hi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(i=>{this.control?.setValue(i,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(i)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=CN(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof fE))}ngControlUpdate(n,t){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;Object.is(i.value,r.value)||(i.value=r.value,n.setCustomControlModelInput(r.value)),this.bindControlProperty(n,i,"touched",r.touched),this.bindControlProperty(n,i,"dirty",r.dirty),this.bindControlProperty(n,i,"valid",r.valid),this.bindControlProperty(n,i,"invalid",r.invalid),this.bindControlProperty(n,i,"pending",r.pending),this.bindControlProperty(n,i,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(n,i,"required",this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let s=this._convertErrors(o);n.setInputOnDirectives("errors",s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,t,r,i){if(t[r]===i)return;t[r]=i;let o=n.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r==="disabled"||r==="required")&&this.renderer&&wN(this.renderer,n.nativeElement,r,i)}_convertErrors(n){if(n===null)return[];let t=this.control;return Object.entries(n).map(([r,i])=>new Om({context:i,kind:r,control:t}))}setParseErrorSource(n){if(n===void 0)return;let t=null,r=we(()=>{let i=n();return i.length===0?null:i.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>t).bind(this),gt(()=>{t=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},hd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var gE=(()=>{class e extends hd{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(te(Dr,2))};static \u0275dir=M({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&q("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[de]})}return e})(),vE=(()=>{class e extends hd{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(te(_r,10))};static \u0275dir=M({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){r&2&&q("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[de]})}return e})(),vo=class extends go{constructor(n,t,r){super(Hm(t),Um(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){let r=this._find(n);return r||(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,t={}){ee(()=>{dE(this,!0,n),Object.keys(n).forEach(r=>{cE(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this._find(r);i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,U(y({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new hi(this))}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((i,o)=>{r=t(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return uE(this.controls,n)?this.controls[n]:null}};var km=class extends vo{};var jN={provide:_r,useExisting:$t(()=>Wm)},Ws=Promise.resolve(),Wm=(()=>{class e extends _r{callSetDisabledState;get submitted(){return ee(this.submittedReactive)}_submitted=we(()=>this.submittedReactive());submittedReactive=K(!1);_directives=new Set;form;ngSubmit=new J;options;constructor(t,r,i){super(),this.callSetDisabledState=i,this.form=new vo({},Bm(t),jm(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Ws.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Ws.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Ws.then(()=>{let r=this._findContainer(t.path),i=new vo({});mE(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Ws.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){Ws.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),pE(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new dd(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(r){return new(r||e)(te(pd,10),te(Vm,10),te(zm,8))};static \u0275dir=M({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&Te("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[tt([jN]),de]})}return e})();function YD(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function ZD(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var od=class extends go{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,r){super(Hm(t),Um(r,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),gd(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ZD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){ee(()=>{this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new hi(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){YD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){YD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){ZD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var HN=e=>e instanceof od;var yE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var Fm=class extends go{constructor(n,t,r){super(Hm(t),Um(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){Array.isArray(n)?n.forEach(r=>{this.controls.push(r),this._registerControl(r)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,r={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,r={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){ee(()=>{dE(this,!1,n),n.forEach((r,i)=>{cE(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(n.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((r,i)=>{r.reset(n[i],U(y({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new hi(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,r)=>r._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,r)=>{n(t,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var UN=(()=>{class e extends _r{callSetDisabledState;get submitted(){return ee(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=we(()=>this._submittedReactive());_submittedReactive=K(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,r,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(fd(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let r=this.form.get(t.path);return t._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){qD(t.control||null,t,!1),VN(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,r){this.form.get(t.path).setValue(r)}onReset(){this.resetForm()}resetForm(t=void 0,r={}){this.form.reset(t,r),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,pE(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new dd(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,i=this.form.get(t.path);r!==i&&(qD(r||null,t),HN(i)&&t._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);mE(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let r=this.form?.get(t.path);r&&kN(r,t)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Gm(this.form,this),this._oldForm&&fd(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||e)(te(pd,10),te(Vm,10),te(zm,8))};static \u0275dir=M({type:e,features:[de,st]})}return e})();var _E=new g("");var zN={provide:Dr,useExisting:$t(()=>qm)},qm=(()=>{class e extends Dr{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new J;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,r,i,o,s,a,l){super(l,a,o),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(t,r){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,TN(t,this,r))}ngOnChanges(t){this._added||this._setUpControl(),FN(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return SN(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(t){super.ngControlCreate(t)}\u0275ngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static \u0275fac=function(r){return new(r||e)(te(_r,13),te(pd,10),te(Vm,10),te(QD,10),te(_E,8),te(De,8),te(k,8))};static \u0275dir=M({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[tt([zN,BN]),de,st,hh(null)]})}return e})();var $N={provide:_r,useExisting:$t(()=>Xs)},Xs=(()=>{class e extends UN{form=null;ngSubmit=new J;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=yt(e)))(i||e)}})();static \u0275dir=M({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&Te("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[tt([$N]),de]})}return e})();var GN=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({})}return e})();function XD(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var bE=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let i=this._reduceControls(t),o={};return XD(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new vo(i,o)}record(t,r=null){let i=this._reduceControls(t);return new km(i,r)}control(t,r,i){let o={};return this.useNonNullable?(XD(r)?o=r:(o.validators=r,o.asyncValidators=i),new od(t,U(y({},o),{nonNullable:!0}))):new od(t,r,i)}array(t,r,i){let o=t.map(s=>this._createControl(s));return new Fm(o,r,i)}_reduceControls(t){let r={};return Object.keys(t).forEach(i=>{r[i]=this._createControl(t[i])}),r}_createControl(t){if(t instanceof od)return t;if(t instanceof go)return t;if(Array.isArray(t)){let r=t[0],i=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,i,o)}else return this.control(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var DE=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:_E,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:zm,useValue:t.callSetDisabledState??$m}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[GN]})}return e})();var qN=["*"];var YN=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],ZN=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],XN=new g("MAT_CARD_CONFIG"),EE=(()=>{class e{appearance;constructor(){let t=u(XN,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(r,i){r&2&&q("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:qN,decls:1,vars:0,template:function(r,i){r&1&&(Be(),W(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return e})(),CE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return e})();var wE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var IE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:ZN,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(r,i){r&1&&(Be(YN),W(0),Re(1,"div",0),W(2,1),Ve(),W(3,2))},encapsulation:2})}return e})();var xE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[_e]})}return e})();var Ym=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new z(t=>{let r=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ce(t=>t.some(r=>r.target===n)),Fa({bufferSize:1,refCount:!0}),wt(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},ME=(()=>{class e{_cleanupErrorListener;_observers=new Map;_ngZone=u(I);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Ym(i)),this._observers.get(i).observe(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var QN=["notch"],JN=["*"],SE=["iconPrefixContainer"],TE=["textPrefixContainer"],AE=["iconSuffixContainer"],NE=["textSuffixContainer"],eR=["textField"],tR=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],nR=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function rR(e,n){e&1&&Se(0,"span",21)}function iR(e,n){if(e&1&&(T(0,"label",20),W(1,1),ue(2,rR,1,0,"span",21),A()),e&2){let t=ke(2);lt("floating",t._shouldLabelFloat())("monitorResize",t._hasOutline())("id",t._labelId),me("for",t._control.disableAutomaticLabeling?null:t._control.id),P(2),fe(!t.hideRequiredMarker&&t._control.required?2:-1)}}function oR(e,n){if(e&1&&ue(0,iR,3,5,"label",20),e&2){let t=ke();fe(t._hasFloatingLabel()?0:-1)}}function sR(e,n){e&1&&Se(0,"div",7)}function aR(e,n){}function lR(e,n){if(e&1&&Ot(0,aR,0,0,"ng-template",13),e&2){ke(2);let t=lr(1);lt("ngTemplateOutlet",t)}}function cR(e,n){if(e&1&&(T(0,"div",9),ue(1,lR,1,1,null,13),A()),e&2){let t=ke();lt("matFormFieldNotchedOutlineOpen",t._shouldLabelFloat()),P(),fe(t._forceDisplayInfixLabel()?-1:1)}}function dR(e,n){e&1&&(T(0,"div",10,2),W(2,2),A())}function uR(e,n){e&1&&(T(0,"div",11,3),W(2,3),A())}function fR(e,n){}function hR(e,n){if(e&1&&Ot(0,fR,0,0,"ng-template",13),e&2){ke();let t=lr(1);lt("ngTemplateOutlet",t)}}function mR(e,n){e&1&&(T(0,"div",14,4),W(2,4),A())}function pR(e,n){e&1&&(T(0,"div",15,5),W(2,5),A())}function gR(e,n){e&1&&Se(0,"div",16)}function vR(e,n){e&1&&(T(0,"div",18),W(1,6),A())}function yR(e,n){if(e&1&&(T(0,"mat-hint",22),ne(1),A()),e&2){let t=ke(2);lt("id",t._hintLabelId),P(),Wi(t.hintLabel)}}function _R(e,n){if(e&1&&(T(0,"div",19),ue(1,yR,2,2,"mat-hint",22),W(2,7),Se(3,"div",23),W(4,8),A()),e&2){let t=ke();P(),fe(t.hintLabel?1:-1)}}var Ks=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["mat-label"]]})}return e})(),bR=new g("MatError");var Zm=(()=>{class e{align="start";id=u(Ge).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(Kt("id",i.id),me("align",null),q("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return e})(),DR=new g("MatPrefix");var ER=new g("MatSuffix");var VE=new g("FloatingLabelParent"),RE=(()=>{class e{_elementRef=u(N);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(ME);_ngZone=u(I);_parent=u(VE);_resizeSubscription=new Z;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return CR(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&q("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return e})();function CR(e){let n=e;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let r=t.scrollWidth;return t.remove(),r}var OE="mdc-line-ripple--active",vd="mdc-line-ripple--deactivating",kE=(()=>{class e{_elementRef=u(N);_cleanupTransitionEnd;constructor(){let t=u(I),r=u(De);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(vd),t.add(OE)}deactivate(){this._elementRef.nativeElement.classList.add(vd)}_handleTransitionEnd=t=>{let r=this._elementRef.nativeElement.classList,i=r.contains(vd);t.propertyName==="opacity"&&i&&r.remove(OE,vd)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return e})(),FE=(()=>{class e{_elementRef=u(N);_ngZone=u(I);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,r=t.querySelector(".mdc-floating-label");r?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let r=this._notch.nativeElement;!this.open||!t?r.style.width="":r.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,i){if(r&1&&gn(QN,5),r&2){let o;pe(o=ge())&&(i._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,i){r&2&&q("mdc-notched-outline--notched",i.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:JN,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,i){r&1&&(Be(),$e(0,"div",1),Re(1,"div",2,0),W(3),Ve(),$e(4,"div",3))},encapsulation:2})}return e})(),Xm=(()=>{class e{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e})}return e})();var Km=new g("MatFormField"),wR=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),PE="fill",IR="auto",LE="fixed",xR="translateY(-50%)",yd=(()=>{class e{_elementRef=u(N);_changeDetectorRef=u(ct);_platform=u(ie);_idGenerator=u(Ge);_ngZone=u(I);_defaults=u(wR,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ps("iconPrefixContainer");_textPrefixContainerSignal=ps("textPrefixContainer");_iconSuffixContainerSignal=ps("iconSuffixContainer");_textSuffixContainerSignal=ps("textSuffixContainer");_prefixSuffixContainers=we(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=A_(Ks);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=no(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||IR}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let r=t||this._defaults?.appearance||PE;this._appearanceSignal.set(r)}_appearanceSignal=K(PE);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||LE}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||LE}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ht();constructor(){let t=this._defaults,r=u(Vt);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),gt(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=we(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let r=this._control,i="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(i+t.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges.pipe(it([void 0,void 0]),ce(()=>[r.errorState,r.userAriaDescribedBy]),ka(),Ce(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&(this._valueChanges=r.ngControl.valueChanges.pipe(wt(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),En(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Nh({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=we(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let r=this._control?this._control.ngControl:null;return r&&r[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),s&&t.push(s.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||t;i=t.concat(r.filter(s=>s&&!o.includes(s)))}else i=t;this._control.setDescribedByIds(i),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=t?.getBoundingClientRect().width??0,a=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${s+a}px`,h=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,p=`var(--mat-mdc-form-field-label-transform, ${xR} translateX(${h}))`,v=s+a+l+c;return[p,v]}_writeOutlinedLabelStyles(t){if(t!==null){let[r,i]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let r=t.getRootNode();return r&&r!==t}return document.documentElement.contains(t)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["mat-form-field"]],contentQueries:function(r,i,o){if(r&1&&(Ql(o,i._labelChild,Ks,5),ar(o,Xm,5)(o,DR,5)(o,ER,5)(o,bR,5)(o,Zm,5)),r&2){ec();let s;pe(s=ge())&&(i._formFieldControl=s.first),pe(s=ge())&&(i._prefixChildren=s),pe(s=ge())&&(i._suffixChildren=s),pe(s=ge())&&(i._errorChildren=s),pe(s=ge())&&(i._hintChildren=s)}},viewQuery:function(r,i){if(r&1&&(Jl(i._iconPrefixContainerSignal,SE,5)(i._textPrefixContainerSignal,TE,5)(i._iconSuffixContainerSignal,AE,5)(i._textSuffixContainerSignal,NE,5),gn(eR,5)(SE,5)(TE,5)(AE,5)(NE,5)(RE,5)(FE,5)(kE,5)),r&2){ec(4);let o;pe(o=ge())&&(i._textField=o.first),pe(o=ge())&&(i._iconPrefixContainer=o.first),pe(o=ge())&&(i._textPrefixContainer=o.first),pe(o=ge())&&(i._iconSuffixContainer=o.first),pe(o=ge())&&(i._textSuffixContainer=o.first),pe(o=ge())&&(i._floatingLabel=o.first),pe(o=ge())&&(i._notchedOutline=o.first),pe(o=ge())&&(i._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(r,i){r&2&&q("mat-mdc-form-field-label-always-float",i._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",i._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",i._hasIconSuffix)("mat-form-field-invalid",i._control.errorState)("mat-form-field-disabled",i._control.disabled)("mat-form-field-autofilled",i._control.autofilled)("mat-form-field-appearance-fill",i.appearance=="fill")("mat-form-field-appearance-outline",i.appearance=="outline")("mat-form-field-hide-placeholder",i._hasFloatingLabel()&&!i._shouldLabelFloat())("mat-primary",i.color!=="accent"&&i.color!=="warn")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("ng-untouched",i._shouldForward("untouched"))("ng-touched",i._shouldForward("touched"))("ng-pristine",i._shouldForward("pristine"))("ng-dirty",i._shouldForward("dirty"))("ng-valid",i._shouldForward("valid"))("ng-invalid",i._shouldForward("invalid"))("ng-pending",i._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[tt([{provide:Km,useExisting:e},{provide:VE,useExisting:e}])],ngContentSelectors:nR,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(r,i){if(r&1&&(Be(tR),Ot(0,oR,1,1,"ng-template",null,0,ds),T(2,"div",6,1),Te("click",function(s){return i._control.onContainerClick(s)}),ue(4,sR,1,0,"div",7),T(5,"div",8),ue(6,cR,2,2,"div",9),ue(7,dR,3,0,"div",10),ue(8,uR,3,0,"div",11),T(9,"div",12),ue(10,hR,1,1,null,13),W(11),A(),ue(12,mR,3,0,"div",14),ue(13,pR,3,0,"div",15),A(),ue(14,gR,1,0,"div",16),A(),T(15,"div",17),ue(16,vR,2,0,"div",18)(17,_R,5,1,"div",19),A()),r&2){let o;P(2),q("mdc-text-field--filled",!i._hasOutline())("mdc-text-field--outlined",i._hasOutline())("mdc-text-field--no-label",!i._hasFloatingLabel())("mdc-text-field--disabled",i._control.disabled)("mdc-text-field--invalid",i._control.errorState),P(2),fe(!i._hasOutline()&&!i._control.disabled?4:-1),P(2),fe(i._hasOutline()?6:-1),P(),fe(i._hasIconPrefix?7:-1),P(),fe(i._hasTextPrefix?8:-1),P(2),fe(!i._hasOutline()||i._forceDisplayInfixLabel()?10:-1),P(2),fe(i._hasTextSuffix?12:-1),P(),fe(i._hasIconSuffix?13:-1),P(),fe(i._hasOutline()?-1:14),P(),q("mat-mdc-form-field-subscript-dynamic-size",i.subscriptSizing==="dynamic");let s=i._getSubscriptMessageType();P(),fe((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[RE,FE,Ph,kE,Zm],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return e})();var Qs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[Rc,yd,_e]})}return e})();var SR=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return e})(),TR={passive:!0},BE=(()=>{class e{_platform=u(ie);_ngZone=u(I);_renderer=u(Ne).createRenderer(null,null);_styleLoader=u(ft);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return Nr;this._styleLoader.load(SR);let r=Dt(t),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new E,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(s)?(r.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(s)&&(r.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",a,TR)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(t){let r=Dt(t),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((t,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var jE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({})}return e})();var HE=new g("");var UE=new g("MAT_INPUT_VALUE_ACCESSOR");var zE=(()=>{class e{isErrorState(t,r){return!!(t&&t.invalid&&(t.touched||r&&r.submitted))}isSignalErrorState(t){if(!t)return!1;let r=t().invalid(),i=t().touched();return r&&i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})}return e})();var _d=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,t,r,i,o){this._defaultMatcher=n,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o,t?At(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==n&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,r=this.ngControl?this.ngControl.control:null;return n?.isErrorState(r,t)??!1}};var AR=["button","checkbox","file","hidden","image","radio","range","reset","submit"],NR=new g("MAT_INPUT_CONFIG"),$E=(()=>{class e{_elementRef=u(N);_platform=u(ie);ngControl=u(Dr,{optional:!0,self:!0});_autofillMonitor=u(BE);_ngZone=u(I);_formField=u(Km,{optional:!0});_renderer=u(De);_uid=u(Ge).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(NR,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=no(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Zs.required)??!1}set required(t){this._required=no(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&fm().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=no(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>fm().has(t));constructor(){let t=u(Wm,{optional:!0}),r=u(Xs,{optional:!0}),i=u(zE),o=u(UE,{optional:!0,self:!0}),s=u(HE,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();o?At(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new _d(i,s||this.ngControl,r,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&gt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=t,t?r.setAttribute("placeholder",t):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){AR.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,r=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let r=this._elementRef.nativeElement;t.length?r.setAttribute("aria-describedby",t.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let r=t.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=M({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&Te("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(Kt("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),me("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),q("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie]},exportAs:["matInput"],features:[tt([{provide:Xm,useExisting:e}]),st]})}return e})(),GE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[Qs,Qs,jE,_e]})}return e})();function OR(e,n){e&1&&$e(0,"div",2)}var kR=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var qE=(()=>{class e{_elementRef=u(N);_ngZone=u(I);_changeDetectorRef=u(ct);_renderer=u(De);_cleanupTransitionEnd;constructor(){let t=hm(),r=u(kR,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=WE(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=WE(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new J;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=$({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(r,i){r&2&&(me("aria-valuenow",i._isIndeterminate()?null:i.value)("mode",i.mode),Qt("mat-"+i.color),q("_mat-animation-noopable",i._isNoopAnimation)("mdc-linear-progress--animation-ready",!i._isNoopAnimation)("mdc-linear-progress--indeterminate",i._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",gs],bufferValue:[2,"bufferValue","bufferValue",gs],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(r,i){r&1&&(Re(0,"div",0),$e(1,"div",1),ue(2,OR,1,0,"div",2),Ve(),Re(3,"div",3),$e(4,"span",4),Ve(),Re(5,"div",5),$e(6,"span",4),Ve()),r&2&&(P(),cr("flex-basis",i._getBufferBarFlexBasis()),P(),fe(i.mode==="buffer"?2:-1),P(),cr("transform",i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return e})();function WE(e,n=0,t=100){return Math.max(n,Math.min(t,e))}var YE=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=V({type:e});static \u0275inj=L({imports:[_e]})}return e})();var bd=class e{#e=K("");#t=Eb(()=>{if(this.#e())return`https://api.mcsrvstat.us/2/${this.#e()}`});setAddress(n){this.#e.set(n)}getStatus(){return this.#t.value}isLoading(){return this.#t.isLoading}reloadResource(){this.#t.reload()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=w({token:e,factory:e.\u0275fac})};function PR(e,n){if(e&1&&(T(0,"p"),ne(1),Se(2,"mat-progress-bar",8),A()),e&2){let t=ke(2);P(),cs(" Checking Server: ",t.form.value.serverIp,":",t.form.value.serverPort," ")}}function LR(e,n){if(e&1&&(ne(0),yh(1,"date")),e&2){ke(3);let t=nc(18);vn(" at ",_h(1,1,t.debug.cachetime*1e3,"yyyy/MM/dd HH:mm:ss")," ")}}function VR(e,n){if(e&1&&(Se(0,"div",9),T(1,"p"),ne(2," Data will be refreshed every 5 seconds. "),A(),T(3,"p"),ne(4),T(5,"strong"),ne(6),A(),ue(7,LR,2,4),A(),T(8,"p"),ne(9),A(),T(10,"p"),ne(11),Se(12,"br"),ne(13),A()),e&2){let t=ke(2),r=nc(18);cr("background-image",t.headerImage()),P(4),vn(" Status: ",r.ip," is "),P(2),Wi(r.online?"online":"offline"),P(),fe(r.debug.cachetime>0?7:-1),P(2),vn(" Description: ",r.motd.html[0]," "),P(2),vn(" Version: ",r.version," "),P(2),cs(" Players: ",r.players.online,"/",r.players.max," ")}}function BR(e,n){if(e&1&&(T(0,"mat-card",0)(1,"mat-card-content"),ue(2,PR,3,2,"p")(3,VR,14,9),A()()),e&2){let t=ke();P(2),fe(t.isLoading()&&t.isFirstRun?2:3)}}var Dd=class e{#e=u(bE);#t=u(Ss);#n=u(bd);mcStatus=this.#n.getStatus();isLoading=this.#n.isLoading();isFirstRun=!0;interval=0;form;ngOnInit(){this.form=this.#e.group({serverIp:[ho.serverIp],serverPort:[ho.serverPort]})}onSubmit(){this.isFirstRun?(this.isFirstRun=!1,this.loadStatus(),this.startInterval()):(clearInterval(this.interval),this.loadStatus(),this.reloadStatus(),this.startInterval())}loadStatus(){this.#n.setAddress(this.form.value.serverIp+":"+this.form.value.serverPort)}reloadStatus(){this.#n.reloadResource()}startInterval(){this.interval=setInterval(()=>{this.reloadStatus()},5e3)}headerImage(){return this.mcStatus()?this.#t.bypassSecurityTrustStyle(`url('${this.mcStatus()?.icon}')`):""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=$({type:e,selectors:[["app-dashboard"]],decls:20,vars:3,consts:[[1,"w-10/12","md:w-7/12","mx-auto"],["novalidate","",3,"ngSubmit","formGroup"],[1,"flex-col","md:flex-row","flex","gap-5"],[1,"flex-1"],["type","text","matInput","","formControlName","serverIp"],["type","text","matInput","","formControlName","serverPort"],[1,"flex"],["mat-raised-button","",1,"flex-1"],["mode","indeterminate","value","50"],[1,"h-[64px]","w-[64px]"]],template:function(t,r){if(t&1&&(T(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),ne(3,"Options and run"),A()(),T(4,"mat-card-content")(5,"form",1),Te("ngSubmit",function(){return r.onSubmit()}),T(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),ne(9,"Server IP"),A(),Se(10,"input",4),Wl(),A(),T(11,"mat-form-field",3)(12,"mat-label"),ne(13,"Server Port"),A(),Se(14,"input",5),Wl(),A()(),T(15,"div",6)(16,"button",7),ne(17,"RUN/UPDATE"),A()()()()(),tc(18),ue(19,BR,4,1,"mat-card",0)),t&2){P(5),lt("formGroup",r.form),P(5),ql(),P(4),ql(),P(4);let i=vh(r.mcStatus());P(),fe(i?19:-1)}},dependencies:[Hc,jc,xE,EE,wE,IE,CE,td,Qs,yd,Ks,GE,$E,YE,qE,DE,yE,md,gE,vE,Xs,qm,Lh],encapsulation:2})};function jR(e,n){e&1&&(T(0,"h2",11),ne(1,"Overview"),A(),T(2,"mat-dialog-content")(3,"p"),ne(4," Shows the status of a minecraft server. "),Se(5,"br"),ne(6," For demonstration I use as default my own minecraft server. "),A(),T(7,"p"),ne(8,"The data is loaded by "),T(9,"a",12),ne(10,"https://api.mcsrvstat.us/"),A(),ne(11,"."),A()(),T(12,"mat-dialog-actions",13)(13,"button",14),ne(14,"Close"),A()())}var Ed=class e{#e=u(Us);#t=u(Cb);#n=u(C);appname;constructor(){this.appname=ho.appname,this.#t.setTitle(this.appname),this.#n.body.classList.add(`${ho.theme}-theme`)}openDialog(n){this.#e.open(n,{maxWidth:"800px"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=$({type:e,selectors:[["app-root"]],decls:27,vars:2,consts:[["menu","matMenu"],["dialog",""],[1,"justify-between"],[1,"hidden","md:block"],["mat-button","",3,"click"],["mat-button","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["alt","GitHub Repository","src","github-mark.svg",1,"github-link"],[1,"block","md:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["mat-dialog-title",""],["href","https://api.mcsrvstat.us/","target","_blank"],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(t,r){if(t&1){let i=as();T(0,"mat-toolbar",2),ne(1),T(2,"div",3)(3,"button",4),Te("click",function(){dn(i);let s=lr(25);return un(r.openDialog(s))}),ne(4,"Info"),A(),ne(5," | "),T(6,"a",5)(7,"span"),Se(8,"img",6),A(),ne(9," GitHub "),A()(),T(10,"div",7)(11,"button",8)(12,"mat-icon"),ne(13,"more_vert"),A()(),T(14,"mat-menu",null,0)(16,"button",9),Te("click",function(){dn(i);let s=lr(25);return un(r.openDialog(s))}),T(17,"span"),ne(18,"Info"),A()(),T(19,"a",10)(20,"span"),Se(21,"img",6),A(),T(22,"span"),ne(23,"GitHub"),A()()()()(),Ot(24,jR,15,0,"ng-template",null,1,ds),Se(26,"app-dashboard")}if(t&2){let i=lr(15);P(),vn(" ",r.appname," "),P(10),lt("matMenuTriggerFor",i)}},dependencies:[Dd,Hc,jc,bm,td,xD,SD,AD,TD,BD,VD,HD,fo,zs,jD,zD,UD],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0;overflow-y:scroll}mat-card[_ngcontent-%COMP%], mat-progress-bar[_ngcontent-%COMP%]{margin-top:20px}.github-link[_ngcontent-%COMP%]{height:20px;top:4px;padding-right:5px;position:relative}"]})};var ZE={providers:[Hu(),Jh()]};Wh(Ed,ZE).catch(e=>console.error(e));
