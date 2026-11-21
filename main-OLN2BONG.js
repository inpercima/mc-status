var nx=Object.defineProperty,rx=Object.defineProperties;var ix=Object.getOwnPropertyDescriptors;var th=Object.getOwnPropertySymbols;var ox=Object.prototype.hasOwnProperty,ax=Object.prototype.propertyIsEnumerable;var nh=(t,n,e)=>n in t?nx(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||={})ox.call(n,e)&&nh(t,e,n[e]);if(th)for(var e of th(n))ax.call(n,e)&&nh(t,e,n[e]);return t},z=(t,n)=>rx(t,ix(n));var vo=[null],os=[!1],xr=1,sx=null,Te=Symbol("SIGNAL");function N(t){let n=vo[0];return vo[0]=t,n}function as(){return vo[0]}var $n={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function _n(t){if(os[0])throw new Error("");let n=vo[0];if(n===null)return;n.consumerOnSignalRead(t);let e=n.producersTail;if(e!==void 0&&e.producer===t)return;let r,i=n.recomputing;if(i&&(r=e!==void 0?e.nextProducer:n.producers,r!==void 0&&r.producer===t)){n.producersTail=r,r.lastReadVersion=t.version,r.knownValidAtEpoch=xr;return}let o=t.consumersTail;if(o!==void 0&&o.consumer===n&&(!i||o.knownValidAtEpoch===xr))return;let a=hi(n),s={producer:t,consumer:n,nextProducer:r,prevConsumer:void 0,knownValidAtEpoch:xr,lastReadVersion:t.version,nextConsumer:void 0};n.producersTail=s,e!==void 0?e.nextProducer=s:n.producers=s,a&&ah(t,s)}function rh(){xr++}function Gn(t){if(!(hi(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===xr)){if(!t.producerMustRecompute(t)&&!pi(t)){mi(t);return}t.producerRecomputeValue(t),mi(t)}}function Id(t){if(t.consumers===void 0)return;let n=os[0];os[0]=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let r=e.consumer;r.dirty||lx(r)}}finally{os[0]=n}}function Md(){return vo[0]?.consumerAllowSignalWrites!==!1}function lx(t){t.dirty=!0,Id(t),t.consumerMarkedDirty?.(t)}function mi(t){t.dirty=!1,t.lastCleanEpoch=xr}function Cn(t){return t&&ih(t),N(t)}function ih(t){if(t.producersTail?.knownValidAtEpoch===xr){let n=t.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}t.producersTail=void 0,t.recomputing=!0}function Wn(t,n){N(n),t&&oh(t)}function oh(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(hi(t))do e=Nd(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function pi(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,r=n.lastReadVersion;if(r!==e.version||(Gn(e),r!==e.version))return!0}return!1}function qn(t){if(hi(t)){let n=t.producers;for(;n!==void 0;)n=Nd(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function ah(t,n){let e=t.consumersTail,r=hi(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!r)for(let i=t.producers;i!==void 0;i=i.nextProducer)ah(i.producer,i)}function Nd(t){let n=t.producer,e=t.nextProducer,r=t.nextConsumer,i=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!hi(n)){let o=n.producers;for(;o!==void 0;)o=Nd(o)}return e}function hi(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function _o(t){sx?.(t)}function Co(t,n){return Object.is(t,n)}function Do(t,n){let e=Object.create(cx);e.computation=t,n!==void 0&&(e.equal=n);let r=()=>{if(Gn(e),_n(e),e.value===It)throw e.error;return e.value};return r[Te]=e,_o(e),r}var wr=Symbol("UNSET"),Er=Symbol("COMPUTING"),It=Symbol("ERRORED"),cx=z(_({},$n),{value:wr,dirty:!0,error:null,equal:Co,kind:"computed",producerMustRecompute(t){return t.value===wr||t.value===Er},producerRecomputeValue(t){if(t.value===Er)throw new Error("");let n=t.value;t.value=Er;let e=Cn(t),r,i=!1;try{r=t.computation(),N(null),i=n!==wr&&n!==It&&r!==It&&t.equal(n,r),t.error=null}catch(o){r=It,t.error=o}finally{Wn(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function dx(){throw new Error}var sh=dx;function lh(t){sh(t)}function Td(t){sh=t}var ux=null;function Ad(t,n){let e=Object.create(gi);e.value=t,n!==void 0&&(e.equal=n);let r=()=>ch(e);return r[Te]=e,_o(e),[r,a=>Yn(e,a),a=>ss(e,a)]}function ch(t){return _n(t),t.value}function Yn(t,n){Md()||lh(t),t.equal(t.value,n)||(t.value=n,fx(t))}function ss(t,n){Md()||lh(t),Yn(t,n(t.value))}var gi=z(_({},$n),{equal:Co,value:void 0,kind:"signal"});function fx(t){t.version++,rh(),Id(t),ux?.(t)}var Rd=z(_({},$n),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function kd(t){if(t.dirty=!1,t.version>0&&!pi(t))return;t.version++;let n=Cn(t);try{t.cleanup(),t.fn()}finally{Wn(t,n)}}var Od=[void 0];function ls(){return Od[0]}function an(t){let n=Od[0];return Od[0]=t,n}var dh=Symbol("NotFound");function bi(t){return t===dh||t?.name==="\u0275NotFound"}function Fd(t,n,e){let r=Object.create(mx);r.source=t,r.computation=n,e!=null&&(r.equal=e);let o=()=>{if(Gn(r),_n(r),r.value===It)throw r.error;return r.value};return o[Te]=r,_o(r),o}function Pd(t,n){Gn(t),Yn(t,n),mi(t),t.error=null}function uh(t,n){if(Gn(t),t.value===It)throw t.error;ss(t,n),mi(t)}var mx=z(_({},$n),{value:wr,dirty:!0,error:null,equal:Co,kind:"linkedSignal",producerMustRecompute(t){return t.value===wr||t.value===Er},producerRecomputeValue(t){if(t.value===Er)throw new Error("");let n=t.value;t.value=Er;let e=Cn(t),r,i=!1;try{let o=t.source(),a=n!==wr&&n!==It,s=a?{source:t.sourceValue,value:n}:void 0;r=t.computation(o,s),t.sourceValue=o,N(null),i=a&&r!==It&&t.equal(n,r),t.error=null}catch(o){r=It,t.error=o}finally{Wn(t,e)}if(i){t.value=n;return}t.value=r,t.version++}});function fh(t){let n=N(null);try{return t()}finally{N(n)}}function W(t){return typeof t=="function"}function cs(t){let e=t(r=>{Error.call(r),r.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var ds=cs(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Sr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var re=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:r}=this;if(W(r))try{r()}catch(o){n=o instanceof ds?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{mh(o)}catch(a){n=n??[],a instanceof ds?n=[...n,...a.errors]:n.push(a)}}if(n)throw new ds(n)}}add(n){var e;if(n&&n!==this)if(this.closed)mh(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Sr(e,n)}remove(n){let{_finalizers:e}=this;e&&Sr(e,n),n instanceof t&&n._removeParent(this)}};re.EMPTY=(()=>{let t=new re;return t.closed=!0,t})();var Ld=re.EMPTY;function us(t){return t instanceof re||t&&"closed"in t&&W(t.remove)&&W(t.add)&&W(t.unsubscribe)}function mh(t){W(t)?t():t.unsubscribe()}var Ut={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var yi={setTimeout(t,n,...e){let{delegate:r}=yi;return r?.setTimeout?r.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=yi;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function fs(t){yi.setTimeout(()=>{let{onUnhandledError:n}=Ut;if(n)n(t);else throw t})}function xo(){}var ph=Vd("C",void 0,void 0);function hh(t){return Vd("E",void 0,t)}function gh(t){return Vd("N",t,void 0)}function Vd(t,n,e){return{kind:t,value:n,error:e}}var Ir=null;function vi(t){if(Ut.useDeprecatedSynchronousErrorHandling){let n=!Ir;if(n&&(Ir={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:r}=Ir;if(Ir=null,e)throw r}}else t()}function bh(t){Ut.useDeprecatedSynchronousErrorHandling&&Ir&&(Ir.errorThrown=!0,Ir.error=t)}var Mr=class extends re{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,us(n)&&n.add(this)):this.destination=gx}static create(n,e,r){return new Dn(n,e,r)}next(n){this.isStopped?Bd(gh(n),this):this._next(n)}error(n){this.isStopped?Bd(hh(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Bd(ph,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},px=Function.prototype.bind;function jd(t,n){return px.call(t,n)}var Hd=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(r){ms(r)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(r){ms(r)}else ms(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){ms(e)}}},Dn=class extends Mr{constructor(n,e,r){super();let i;if(W(n)||!n)i={next:n??void 0,error:e??void 0,complete:r??void 0};else{let o;this&&Ut.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&jd(n.next,o),error:n.error&&jd(n.error,o),complete:n.complete&&jd(n.complete,o)}):i=n}this.destination=new Hd(i)}};function ms(t){Ut.useDeprecatedSynchronousErrorHandling?bh(t):fs(t)}function hx(t){throw t}function Bd(t,n){let{onStoppedNotification:e}=Ut;e&&yi.setTimeout(()=>e(t,n))}var gx={closed:!0,next:xo,error:hx,complete:xo};var _i=typeof Symbol=="function"&&Symbol.observable||"@@observable";function zt(t){return t}function yh(t){return t.length===0?zt:t.length===1?t[0]:function(e){return t.reduce((r,i)=>i(r),e)}}var U=class t{constructor(n){n&&(this._subscribe=n)}lift(n){let e=new t;return e.source=this,e.operator=n,e}subscribe(n,e,r){let i=yx(n)?n:new Dn(n,e,r);return vi(()=>{let{operator:o,source:a}=this;i.add(o?o.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(e){n.error(e)}}forEach(n,e){return e=vh(e),new e((r,i)=>{let o=new Dn({next:a=>{try{n(a)}catch(s){i(s),o.unsubscribe()}},error:i,complete:r});this.subscribe(o)})}_subscribe(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)}[_i](){return this}pipe(...n){return yh(n)(this)}toPromise(n){return n=vh(n),new n((e,r)=>{let i;this.subscribe(o=>i=o,o=>r(o),()=>e(i))})}};U.create=t=>new U(t);function vh(t){var n;return(n=t??Ut.Promise)!==null&&n!==void 0?n:Promise}function bx(t){return t&&W(t.next)&&W(t.error)&&W(t.complete)}function yx(t){return t&&t instanceof Mr||bx(t)&&us(t)}function vx(t){return W(t?.lift)}function ee(t){return n=>{if(vx(n))return n.lift(function(e){try{return t(e,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function te(t,n,e,r,i){return new Ud(t,n,e,r,i)}var Ud=class extends Mr{constructor(n,e,r,i,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=e?function(s){try{e(s)}catch(l){n.error(l)}}:super._next,this._error=i?function(s){try{i(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var _h=cs(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=class extends U{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let e=new ps(this,this);return e.operator=n,e}_throwIfClosed(){if(this.closed)throw new _h}next(n){vi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(n)}})}error(n){vi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:e}=this;for(;e.length;)e.shift().error(n)}})}complete(){vi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:e,isStopped:r,observers:i}=this;return e||r?Ld:(this.currentObservers=null,i.push(n),new re(()=>{this.currentObservers=null,Sr(i,n)}))}_checkFinalizedStatuses(n){let{hasError:e,thrownError:r,isStopped:i}=this;e?n.error(r):i&&n.complete()}asObservable(){let n=new U;return n.source=this,n}};x.create=(t,n)=>new ps(t,n);var ps=class extends x{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.next)===null||r===void 0||r.call(e,n)}error(n){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.error)===null||r===void 0||r.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,r;return(r=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&r!==void 0?r:Ld}};var Nr=class extends x{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:r}=this;if(n)throw e;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var wo={now(){return(wo.delegate||Date).now()},delegate:void 0};var Xn=class extends x{constructor(n=1/0,e=1/0,r=wo){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:a}=this;e||(r.push(n),!i&&r.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let a=0;a<o.length&&!n.closed;a+=r?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let a=e.now(),s=0;for(let l=1;l<r.length&&r[l]<=a;l+=2)s=l;s&&r.splice(0,s+1)}}};var hs=class extends re{constructor(n,e){super()}schedule(n,e=0){return this}};var Eo={setInterval(t,n,...e){let{delegate:r}=Eo;return r?.setInterval?r.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Eo;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var gs=class extends hs{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,r=0){return Eo.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,e,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return e;e!=null&&Eo.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,e);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Sr(r,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Ci=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,r){return new this.schedulerActionCtor(this,n).schedule(r,e)}};Ci.now=wo.now;var bs=class extends Ci{constructor(n,e=Ci.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,r){for(;n=e.shift();)n.unsubscribe();throw r}}};var So=new bs(gs),Ch=So;var Tr=new U(t=>t.complete());function ys(t){return t&&W(t.schedule)}function zd(t){return t[t.length-1]}function vs(t){return W(zd(t))?t.pop():void 0}function sn(t){return ys(zd(t))?t.pop():void 0}function Dh(t,n){return typeof zd(t)=="number"?t.pop():n}function wh(t,n,e,r){function i(o){return o instanceof e?o:new e(function(a){a(o)})}return new(e||(e=Promise))(function(o,a){function s(d){try{c(r.next(d))}catch(f){a(f)}}function l(d){try{c(r.throw(d))}catch(f){a(f)}}function c(d){d.done?o(d.value):i(d.value).then(s,l)}c((r=r.apply(t,n||[])).next())})}function xh(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ar(t){return this instanceof Ar?(this.v=t,this):new Ar(t)}function Eh(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=e.apply(t,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(m){return function(h){return Promise.resolve(h).then(m,f)}}function s(m,h){r[m]&&(i[m]=function(y){return new Promise(function(C,D){o.push([m,y,C,D])>1||l(m,y)})},h&&(i[m]=h(i[m])))}function l(m,h){try{c(r[m](h))}catch(y){p(o[0][3],y)}}function c(m){m.value instanceof Ar?Promise.resolve(m.value.v).then(d,f):p(o[0][2],m)}function d(m){l("next",m)}function f(m){l("throw",m)}function p(m,h){m(h),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Sh(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof xh=="function"?xh(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(o){e[o]=t[o]&&function(a){return new Promise(function(s,l){a=t[o](a),i(s,l,a.done,a.value)})}}function i(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var _s=(t=>t&&typeof t.length=="number"&&typeof t!="function");function Cs(t){return W(t?.then)}function Ds(t){return W(t[_i])}function xs(t){return Symbol.asyncIterator&&W(t?.[Symbol.asyncIterator])}function ws(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function _x(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Es=_x();function Ss(t){return W(t?.[Es])}function Is(t){return Eh(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:r,done:i}=yield Ar(e.read());if(i)return yield Ar(void 0);yield yield Ar(r)}}finally{e.releaseLock()}})}function Ms(t){return W(t?.getReader)}function pe(t){if(t instanceof U)return t;if(t!=null){if(Ds(t))return Cx(t);if(_s(t))return Dx(t);if(Cs(t))return xx(t);if(xs(t))return Ih(t);if(Ss(t))return wx(t);if(Ms(t))return Ex(t)}throw ws(t)}function Cx(t){return new U(n=>{let e=t[_i]();if(W(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Dx(t){return new U(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function xx(t){return new U(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,fs)})}function wx(t){return new U(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Ih(t){return new U(n=>{Sx(t,n).catch(e=>n.error(e))})}function Ex(t){return Ih(Is(t))}function Sx(t,n){var e,r,i,o;return wh(this,void 0,void 0,function*(){try{for(e=Sh(t);r=yield e.next(),!r.done;){let a=r.value;if(n.next(a),n.closed)return}}catch(a){i={error:a}}finally{try{r&&!r.done&&(o=e.return)&&(yield o.call(e))}finally{if(i)throw i.error}}n.complete()})}function ct(t,n,e,r=0,i=!1){let o=n.schedule(function(){e(),i?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(o),!i)return o}function Ns(t,n=0){return ee((e,r)=>{e.subscribe(te(r,i=>ct(r,t,()=>r.next(i),n),()=>ct(r,t,()=>r.complete(),n),i=>ct(r,t,()=>r.error(i),n)))})}function Ts(t,n=0){return ee((e,r)=>{r.add(t.schedule(()=>e.subscribe(r),n))})}function Mh(t,n){return pe(t).pipe(Ts(n),Ns(n))}function Nh(t,n){return pe(t).pipe(Ts(n),Ns(n))}function Th(t,n){return new U(e=>{let r=0;return n.schedule(function(){r===t.length?e.complete():(e.next(t[r++]),e.closed||this.schedule())})})}function Ah(t,n){return new U(e=>{let r;return ct(e,n,()=>{r=t[Es](),ct(e,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(a){e.error(a);return}o?e.complete():e.next(i)},0,!0)}),()=>W(r?.return)&&r.return()})}function As(t,n){if(!t)throw new Error("Iterable cannot be null");return new U(e=>{ct(e,n,()=>{let r=t[Symbol.asyncIterator]();ct(e,n,()=>{r.next().then(i=>{i.done?e.complete():e.next(i.value)})},0,!0)})})}function Rh(t,n){return As(Is(t),n)}function kh(t,n){if(t!=null){if(Ds(t))return Mh(t,n);if(_s(t))return Th(t,n);if(Cs(t))return Nh(t,n);if(xs(t))return As(t,n);if(Ss(t))return Ah(t,n);if(Ms(t))return Rh(t,n)}throw ws(t)}function Mt(t,n){return n?kh(t,n):pe(t)}function Ke(...t){let n=sn(t);return Mt(t,n)}function $d(t,n){let e=W(t)?t:()=>t,r=i=>i.error(e());return new U(n?i=>n.schedule(r,0,i):r)}function Oh(t){return t instanceof Date&&!isNaN(t)}function ue(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>{r.next(t.call(n,o,i++))}))})}var{isArray:Ix}=Array;function Mx(t,n){return Ix(n)?t(...n):t(n)}function Rs(t){return ue(n=>Mx(t,n))}var{isArray:Nx}=Array,{getPrototypeOf:Tx,prototype:Ax,keys:Rx}=Object;function ks(t){if(t.length===1){let n=t[0];if(Nx(n))return{args:n,keys:null};if(kx(n)){let e=Rx(n);return{args:e.map(r=>n[r]),keys:e}}}return{args:t,keys:null}}function kx(t){return t&&typeof t=="object"&&Tx(t)===Ax}function Os(t,n){return t.reduce((e,r,i)=>(e[r]=n[i],e),{})}function Gd(...t){let n=sn(t),e=vs(t),{args:r,keys:i}=ks(t);if(r.length===0)return Mt([],n);let o=new U(Ox(r,n,i?a=>Os(i,a):zt));return e?o.pipe(Rs(e)):o}function Ox(t,n,e=zt){return r=>{Fh(n,()=>{let{length:i}=t,o=new Array(i),a=i,s=i;for(let l=0;l<i;l++)Fh(n,()=>{let c=Mt(t[l],n),d=!1;c.subscribe(te(r,f=>{o[l]=f,d||(d=!0,s--),s||r.next(e(o.slice()))},()=>{--a||r.complete()}))},r)},r)}}function Fh(t,n,e){t?ct(e,t,n):n()}function Ph(t,n,e,r,i,o,a,s){let l=[],c=0,d=0,f=!1,p=()=>{f&&!l.length&&!c&&n.complete()},m=y=>c<r?h(y):l.push(y),h=y=>{o&&n.next(y),c++;let C=!1;pe(e(y,d++)).subscribe(te(n,D=>{i?.(D),o?m(D):n.next(D)},()=>{C=!0},void 0,()=>{if(C)try{for(c--;l.length&&c<r;){let D=l.shift();a?ct(n,a,()=>h(D)):h(D)}p()}catch(D){n.error(D)}}))};return t.subscribe(te(n,m,()=>{f=!0,p()})),()=>{s?.()}}function Di(t,n,e=1/0){return W(n)?Di((r,i)=>ue((o,a)=>n(r,o,i,a))(pe(t(r,i))),e):(typeof n=="number"&&(e=n),ee((r,i)=>Ph(r,i,t,e)))}function Fs(t=1/0){return Di(zt,t)}function Lh(){return Fs(1)}function xi(...t){return Lh()(Mt(t,sn(t)))}function Io(t){return new U(n=>{pe(t()).subscribe(n)})}function Mo(...t){let n=vs(t),{args:e,keys:r}=ks(t),i=new U(o=>{let{length:a}=e;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let f=!1;pe(e[d]).subscribe(te(o,p=>{f||(f=!0,c--),s[d]=p},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Os(r,s):s),o.complete())}))}});return n?i.pipe(Rs(n)):i}function Vh(t=0,n,e=Ch){let r=-1;return n!=null&&(ys(n)?e=n:r=n),new U(i=>{let o=Oh(t)?+t-e.now():t;o<0&&(o=0);let a=0;return e.schedule(function(){i.closed||(i.next(a++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function xn(...t){let n=sn(t),e=Dh(t,1/0),r=t;return r.length?r.length===1?pe(r[0]):Fs(e)(Mt(r,n)):Tr}function Ne(t,n){return ee((e,r)=>{let i=0;e.subscribe(te(r,o=>t.call(n,o,i++)&&r.next(o)))})}function jh(t){return ee((n,e)=>{let r=!1,i=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,e.next(c)}a&&e.complete()},l=()=>{o=null,a&&e.complete()};n.subscribe(te(e,c=>{r=!0,i=c,o||pe(t(c)).subscribe(o=te(e,s,l))},()=>{a=!0,(!r||!o||o.closed)&&e.complete()}))})}function Ps(t,n=So){return jh(()=>Vh(t,n))}function Ls(t){return ee((n,e)=>{let r=null,i=!1,o;r=n.subscribe(te(e,void 0,void 0,a=>{o=pe(t(a,Ls(t)(n))),r?(r.unsubscribe(),r=null,o.subscribe(e)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(e))})}function Wd(t,n){return W(n)?Di(t,n,1):Di(t,1)}function No(t,n=So){return ee((e,r)=>{let i=null,o=null,a=null,s=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=a+t,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}s()}e.subscribe(te(r,c=>{o=c,a=n.now(),i||(i=n.schedule(l,t),r.add(i))},()=>{s(),r.complete()},void 0,()=>{o=i=null}))})}function vt(t){return t<=0?()=>Tr:ee((n,e)=>{let r=0;n.subscribe(te(e,i=>{++r<=t&&(e.next(i),t<=r&&e.complete())}))})}function Vs(t,n=zt){return t=t??Fx,ee((e,r)=>{let i,o=!0;e.subscribe(te(r,a=>{let s=n(a);(o||!t(i,s))&&(o=!1,i=s,r.next(a))}))})}function Fx(t,n){return t===n}function To(t){return ee((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function js(){return ee((t,n)=>{let e,r=!1;t.subscribe(te(n,i=>{let o=e;e=i,r&&n.next([o,i]),r=!0}))})}function Ao(t={}){let{connector:n=()=>new x,resetOnError:e=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=t;return o=>{let a,s,l,c=0,d=!1,f=!1,p=()=>{s?.unsubscribe(),s=void 0},m=()=>{p(),a=l=void 0,d=f=!1},h=()=>{let y=a;m(),y?.unsubscribe()};return ee((y,C)=>{c++,!f&&!d&&p();let D=l=l??n();C.add(()=>{c--,c===0&&!f&&!d&&(s=qd(h,i))}),D.subscribe(C),!a&&c>0&&(a=new Dn({next:Y=>D.next(Y),error:Y=>{f=!0,p(),s=qd(m,e,Y),D.error(Y)},complete:()=>{d=!0,p(),s=qd(m,r),D.complete()}}),pe(y).subscribe(a))})(o)}}function qd(t,n,...e){if(n===!0){t();return}if(n===!1)return;let r=new Dn({next:()=>{r.unsubscribe(),t()}});return pe(n(...e)).subscribe(r)}function Bs(t,n,e){let r,i=!1;return t&&typeof t=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:e}=t:r=t??1/0,Ao({connector:()=>new Xn(r,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Ro(t){return Ne((n,e)=>t<=e)}function dt(...t){let n=sn(t);return ee((e,r)=>{(n?xi(t,e,n):xi(t,e)).subscribe(r)})}function wi(t,n){return ee((e,r)=>{let i=null,o=0,a=!1,s=()=>a&&!i&&r.complete();e.subscribe(te(r,l=>{i?.unsubscribe();let c=0,d=o++;pe(t(l,d)).subscribe(i=te(r,f=>r.next(n?n(l,f,d,c++):f),()=>{i=null,s()}))},()=>{a=!0,s()}))})}function Nt(t){return ee((n,e)=>{pe(t).subscribe(te(e,()=>e.complete(),xo)),!e.closed&&n.subscribe(e)})}function Rr(t,n,e){let r=W(t)||n||e?{next:t,error:n,complete:e}:t;return r?ee((i,o)=>{var a;(a=r.subscribe)===null||a===void 0||a.call(r);let s=!0;i.subscribe(te(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):zt}var su="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",v=class extends Error{code;constructor(n,e){super(In(n,e)),this.code=n}};function Px(t){return`NG0${Math.abs(t)}`}function In(t,n){return`${Px(t)}${n?": "+n:""}`}function fe(t){for(let n in t)if(t[n]===fe)return n;throw Error("")}function $h(t,n){for(let e in n)Object.hasOwn(n,e)&&!Object.hasOwn(t,e)&&(t[e]=n[e])}function qs(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(qs).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let r=e.indexOf(`
`);return r>=0?e.slice(0,r):e}function Ys(t,n){return t?n?`${t} ${n}`:t:n||""}var Lx=fe({__forward_ref__:fe});function Tt(t){return t.__forward_ref__=Tt,t}function Be(t){return lu(t)?t():t}function lu(t){return typeof t=="function"&&Object.hasOwn(t,Lx)&&t.__forward_ref__===Tt}function Z(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function V(t){return{providers:t.providers||[],imports:t.imports||[]}}function Xs(t){return Vx(t,Zs)}function Vx(t,n){return Object.hasOwn(t,n)&&t[n]||null}function jx(t){let n=t?.[Zs]??null;return n||null}function Xd(t){return t&&Object.hasOwn(t,Us)?t[Us]:null}var Zs=fe({\u0275prov:fe}),Us=fe({\u0275inj:fe}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=Z({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function cu(t){return t&&!!t.\u0275providers}var Vo=fe({\u0275cmp:fe}),jo=fe({\u0275dir:fe}),du=fe({\u0275pipe:fe});var Oo=fe({\u0275fac:fe}),Lr=fe({__NG_ELEMENT_ID__:fe}),Bh=fe({__NG_ENV_ID__:fe});function Kn(t){return uu(t,"@Component"),t[Vo]||null}function Bo(t){return uu(t,"@Directive"),t[jo]||null}function Gh(t){return uu(t,"@Pipe"),t[du]||null}function uu(t,n){if(t==null)throw new v(-919,!1)}function Ho(t){return typeof t=="string"?t:t==null?"":String(t)}var Wh=fe({ngErrorCode:fe}),Bx=fe({ngErrorMessage:fe}),Hx=fe({ngTokenPath:fe});function fu(t,n){return qh("",-200,n)}function Ks(t,n){throw new v(-201,!1)}function qh(t,n,e){let r=new v(n,t);return r[Wh]=n,r[Bx]=t,e&&(r[Hx]=e),r}function Ux(t){return t[Wh]}var Zd;function Yh(){return Zd}function ot(t){let n=Zd;return Zd=t,n}function mu(t,n,e){let r=Xs(t);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(e&8)return null;if(n!==void 0)return n;Ks(t,"")}var cn=globalThis;var zx={},kr=zx,$x="__NG_DI_FLAG__",Kd=class{injector;constructor(n){this.injector=n}retrieve(n,e){let r=Or(e)||0;try{return this.injector.get(n,r&8?null:kr,r)}catch(i){if(bi(i))return i;throw i}}};function Gx(t,n=0){let e=ls();if(e===void 0)throw new v(-203,!1);if(e===null)return mu(t,void 0,n);{let r=Wx(n),i=e.retrieve(t,r);if(bi(i)){if(r.optional)return null;throw i}return i}}function T(t,n=0){return(Yh()||Gx)(Be(t),n)}function u(t,n){return T(t,Or(n))}function Or(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Wx(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Qd(t){let n=[];for(let e=0;e<t.length;e++){let r=Be(t[e]);if(Array.isArray(r)){if(r.length===0)throw new v(900,!1);let i,o=0;for(let a=0;a<r.length;a++){let s=r[a],l=qx(s);typeof l=="number"?l===-1?i=s.token:o|=l:i=s}n.push(T(i,o))}else n.push(T(r))}return n}function qx(t){return t[$x]}function Zn(t,n){let e=Object.hasOwn(t,Oo);return e?t[Oo]:null}function Xh(t,n,e){if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(e&&(i=e(i),o=e(o)),o!==i)return!1}return!0}function Zh(t){return t.flat(Number.POSITIVE_INFINITY)}function Qs(t,n){t.forEach(e=>Array.isArray(e)?Qs(e,n):n(e))}function pu(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function Uo(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function Kh(t,n){let e=[];for(let r=0;r<t;r++)e.push(n);return e}function Qh(t,n,e,r){let i=t.length;if(i==n)t.push(e,r);else if(i===1)t.push(r,t[0]),t[0]=e;else{for(i--,t.push(t[i-1],t[i]);i>n;){let o=i-2;t[i]=t[o],i--}t[n]=e,t[n+1]=r}}function Js(t,n,e){let r=Ii(t,n);return r>=0?t[r|1]=e:(r=~r,Qh(t,r,n,e)),r}function el(t,n){let e=Ii(t,n);if(e>=0)return t[e|1]}function Ii(t,n){return Yx(t,n,1)}function Yx(t,n,e){let r=0,i=t.length>>e;for(;i!==r;){let o=r+(i-r>>1),a=t[o<<e];if(n===a)return o<<e;a>n?i=o:r=o+1}return~(i<<e)}var Qn={},Qe=[],Vr=new g(""),hu=new g("",-1),gu=new g(""),Si=class{get(n,e=kr){if(e===kr){let i=qh("",-201);throw i.name="\u0275NotFound",i}return e}};function Mn(t){return{\u0275providers:t}}function Jh(t){return Mn([{provide:Vr,multi:!0,useValue:t}])}function eg(...t){return{\u0275providers:bu(!0,t),\u0275fromNgModule:!0}}function bu(t,...n){let e=[],r=new Set,i,o=a=>{e.push(a)};return Qs(n,a=>{let s=a;zs(s,o,[],r)&&(i||=[],i.push(s))}),i!==void 0&&tg(i,o),e}function tg(t,n){for(let e=0;e<t.length;e++){let{ngModule:r,providers:i}=t[e];yu(i,o=>{n(o,r)})}}function zs(t,n,e,r){if(t=Be(t),!t)return!1;let i=null,o=Xd(t),a=!o&&Kn(t);if(!o&&!a){let l=t.ngModule;if(o=Xd(l),o)i=l;else return!1}else{if(a&&!a.standalone)return!1;i=t}let s=r.has(i);if(a){if(s)return!1;if(r.add(i),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)zs(c,n,e,r)}}else if(o){if(o.imports!=null&&!s){r.add(i);let c;Qs(o.imports,d=>{zs(d,n,e,r)&&(c||=[],c.push(d))}),c!==void 0&&tg(c,n)}if(!s){let c=Zn(i)||(()=>new i);n({provide:i,useFactory:c,deps:Qe},i),n({provide:gu,useValue:i,multi:!0},i),n({provide:Vr,useValue:()=>T(i),multi:!0},i)}let l=o.providers;if(l!=null&&!s){let c=t;yu(l,d=>{n(d,c)})}}else return!1;return i!==t&&t.providers!==void 0}function yu(t,n){for(let e of t)cu(e)&&(e=e.\u0275providers),Array.isArray(e)?yu(e,n):n(e)}var Xx=fe({provide:String,useValue:fe});function ng(t){return t!==null&&typeof t=="object"&&Xx in t}function Zx(t){return!!(t&&t.useExisting)}function Kx(t){return!!(t&&t.useFactory)}function Fr(t){return typeof t=="function"}function rg(t){return!!t.useClass}var zo=new g(""),Hs={},Hh={},Yd;function Mi(){return Yd===void 0&&(Yd=new Si),Yd}var ke=class{},Pr=class extends ke{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,r,i){super(),this.parent=e,this.source=r,this.scopes=i,eu(n,a=>this.processProvider(a)),this.records.set(hu,Ei(void 0,this)),i.has("environment")&&this.records.set(ke,Ei(void 0,this));let o=this.records.get(zo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(gu,Qe,{self:!0}))}retrieve(n,e){let r=Or(e)||0;try{return this.get(n,kr,r)}catch(i){if(bi(i))return i;throw i}}destroy(){ko(this),this._destroyed=!0;let n=N(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of e)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),N(n)}}onDestroy(n){return ko(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){ko(this);let e=an(this),r=ot(void 0),i;try{return n()}finally{an(e),ot(r)}}get(n,e=kr,r){if(ko(this),Object.hasOwn(n,Bh))return n[Bh](this);let i=Or(r),o,a=an(this),s=ot(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=nw(n)&&Xs(n);d&&this.injectableDefInScope(d)?c=Ei(Jd(n),Hs):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Mi():this.parent;return e=i&8&&e===kr?null:e,l.get(n,e)}catch(l){let c=Ux(l);throw c===-200||c===-201?new v(c,null):l}finally{ot(s),an(a)}}resolveInjectorInitializers(){let n=N(null),e=an(this),r=ot(void 0),i;try{let o=this.get(Vr,Qe,{self:!0});for(let a of o)a()}finally{an(e),ot(r),N(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Be(n);let e=Fr(n)?n:Be(n&&n.provide),r=Jx(n);if(!Fr(n)&&n.multi===!0){let i=this.records.get(e);i||(i=Ei(void 0,Hs,!0),i.factory=()=>Qd(i.multi),this.records.set(e,i)),e=n,i.multi.push(n)}this.records.set(e,r)}hydrate(n,e,r){let i=N(null);try{if(e.value===Hh)throw fu("");return e.value===Hs&&(e.value=Hh,e.value=e.factory(void 0,r)),typeof e.value=="object"&&e.value&&tw(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{N(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Be(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Jd(t){let n=Xs(t),e=n!==null?n.factory:Zn(t);if(e!==null)return e;if(t instanceof g)throw new v(-204,!1);if(t instanceof Function)return Qx(t);throw new v(-204,!1)}function Qx(t){if(t.length>0)throw new v(-204,!1);let e=jx(t);return e!==null?()=>e.factory(t):()=>new t}function Jx(t){if(ng(t))return Ei(void 0,t.useValue);{let n=vu(t);return Ei(n,Hs)}}function vu(t,n,e){let r;if(Fr(t)){let i=Be(t);return Zn(i)||Jd(i)}else if(ng(t))r=()=>Be(t.useValue);else if(Kx(t))r=()=>t.useFactory(...Qd(t.deps||[]));else if(Zx(t))r=(i,o)=>T(Be(t.useExisting),o!==void 0&&o&8?8:void 0);else{let i=Be(t&&(t.useClass||t.provide));if(ew(t))r=()=>new i(...Qd(t.deps));else return Zn(i)||Jd(i)}return r}function ko(t){if(t.destroyed)throw new v(-205,!1)}function Ei(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function ew(t){return!!t.deps}function tw(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function nw(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function eu(t,n){for(let e of t)Array.isArray(e)?eu(e,n):e&&cu(e)?eu(e.\u0275providers,n):n(e)}function Ni(t,n){let e;t instanceof Pr?(ko(t),e=t):e=new Kd(t);let r,i=an(e),o=ot(void 0);try{return n()}finally{an(i),ot(o)}}function ig(){return Yh()!==void 0||ls()!=null}var $t=0,A=1,k=2,Oe=3,At=4,Ge=5,Ti=6,Ai=7,We=8,Nn=9,dn=10,Ee=11,Ri=12,_u=13,Jn=14,Je=15,er=16,jr=17,un=18,$o=19,Cu=20,wn=21,tl=22,En=23,_t=24,Br=25,og=26,ki=27,Se=28,ag=1;var Hr=7,Go=8,Ur=9,et=10;function Tn(t){return Array.isArray(t)&&typeof t[ag]=="object"}function Rt(t){return Array.isArray(t)&&t[ag]===!0}function Du(t){return(t.flags&4)!==0}function An(t){return t.componentOffset>-1}function Wo(t){return(t.flags&1)===1}function fn(t){return!!t.template}function Oi(t){return(t[k]&512)!==0}function zr(t){return(t[k]&256)===256}var tt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t[t.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",t})(tt||{});var xu="svg",sg="math";function Ye(t){for(;Array.isArray(t);)t=t[$t];return t}function wu(t,n){return Ye(n[t])}function kt(t,n){return Ye(n[t.index])}function nl(t,n){return t.data[n]}function rl(t,n){return t[n]}function qo(t,n,e,r){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=r}function Ot(t,n){let e=n[t];return Tn(e)?e:e[$t]}function lg(t){return(t[k]&4)===4}function il(t){return(t[k]&128)===128}function cg(t){return Rt(t[Oe])}function Gt(t,n){return n==null?null:t[n]}function Eu(t){t[jr]=0}function Su(t){t[k]&1024||(t[k]|=1024,il(t)&&$r(t))}function dg(t,n){for(;t>0;)n=n[Jn],t--;return n}function Yo(t){return!!(t[k]&5120||t[_t]?.dirty)}function ol(t){t[dn].changeDetectionScheduler?.notify(8),t[k]&64&&(t[k]|=1024),Yo(t)&&$r(t)}function $r(t){t[dn].changeDetectionScheduler?.notify(0);let n=Sn(t);for(;n!==null&&!(n[k]&4096||(n[k]|=4096,!il(n)));)n=Sn(n)}function al(t,n){if(zr(t))throw new v(911,!1);t[wn]===null&&(t[wn]=[]),t[wn].push(n)}function ug(t,n){if(t[wn]===null)return;let e=t[wn].indexOf(n);e!==-1&&t[wn].splice(e,1)}function Sn(t){let n=t[Oe];return Rt(n)?n[Oe]:n}function Iu(t){return t[Ai]??=[]}function Mu(t){return t.cleanup??=[]}function fg(t,n,e,r){let i=Iu(n);i.push(e),t.firstCreatePass&&Mu(t).push(r,i.length-1)}var $={lFrame:wg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var tu=!1;function mg(){return $.lFrame.elementDepthCount}function pg(){$.lFrame.elementDepthCount++}function Nu(){$.lFrame.elementDepthCount--}function Tu(){return $.bindingsEnabled}function Au(){return $.skipHydrationRootTNode!==null}function Ru(t){return $.skipHydrationRootTNode===t}function ku(){$.skipHydrationRootTNode=null}function P(){return $.lFrame.lView}function ye(){return $.lFrame.tView}function mn(t){return $.lFrame.contextLView=t,t[We]}function pn(t){return $.lFrame.contextLView=null,t}function qe(){let t=Ou();for(;t!==null&&t.type===64;)t=t.parent;return t}function Ou(){return $.lFrame.currentTNode}function hg(){let t=$.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Gr(t,n){let e=$.lFrame;e.currentTNode=t,e.isParent=n}function Fu(){return $.lFrame.isParent}function Pu(){$.lFrame.isParent=!1}function Lu(){return $.lFrame.contextLView}function Vu(){return tu}function Fo(t){let n=tu;return tu=t,n}function gg(){let t=$.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function bg(){return $.lFrame.bindingIndex}function yg(t){return $.lFrame.bindingIndex=t}function Fi(){return $.lFrame.bindingIndex++}function sl(t){let n=$.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function vg(){return $.lFrame.inI18n}function _g(t,n){let e=$.lFrame;e.bindingIndex=e.bindingRootIndex=t,ll(n)}function Cg(){return $.lFrame.currentDirectiveIndex}function ll(t){$.lFrame.currentDirectiveIndex=t}function Dg(t){let n=$.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function cl(){return $.lFrame.currentQueryIndex}function Xo(t){$.lFrame.currentQueryIndex=t}function rw(t){let n=t[A];return n.type===2?n.declTNode:n.type===1?t[Ge]:null}function ju(t,n,e){if(e&4){let i=n,o=t;for(;i=i.parent,i===null&&!(e&1);)if(i=rw(o),i===null||(o=o[Jn],i.type&10))break;if(i===null)return!1;n=i,t=o}let r=$.lFrame=xg();return r.currentTNode=n,r.lView=t,!0}function dl(t){let n=xg(),e=t[A];$.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function xg(){let t=$.lFrame,n=t===null?null:t.child;return n===null?wg(t):n}function wg(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Eg(){let t=$.lFrame;return $.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Bu=Eg;function ul(){let t=Eg();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Sg(t){return($.lFrame.contextLView=dg(t,$.lFrame.contextLView))[We]}function hn(){return $.lFrame.selectedIndex}function tr(t){$.lFrame.selectedIndex=t}function Zo(){let t=$.lFrame;return nl(t.tView,t.selectedIndex)}function fl(){$.lFrame.currentNamespace=xu}function Hu(){return $.lFrame.currentNamespace}var Ig=!0;function ml(){return Ig}function pl(t){Ig=t}function nu(t,n=null,e=null,r){let i=Mg(t,n,e,r);return i.resolveInjectorInitializers(),i}function Mg(t,n=null,e=null,r,i=new Set){let o=[e||Qe,eg(t)],a;return new Pr(o,n||Mi(),a||null,i)}var O=class t{static THROW_IF_NOT_FOUND=kr;static NULL=new Si;static create(n,e){if(Array.isArray(n))return nu({name:""},e,n,"");{let r=n.name??"";return nu({name:r},n.parent,n.providers,r)}}static \u0275prov=Z({token:t,providedIn:"any",factory:()=>T(hu)});static __NG_ELEMENT_ID__=-1},w=new g(""),$e=class{static __NG_ELEMENT_ID__=iw;static __NG_ENV_ID__=n=>n},$s=class extends $e{_lView;constructor(n){super(),this._lView=n}get destroyed(){return zr(this._lView)}onDestroy(n){let e=this._lView;return al(e,n),()=>ug(e,n)}};function iw(){return new $s(P())}var Ng=!1,Tg=new g(""),Wr=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Nr(!1);debugTaskTracker=u(Tg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new U(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=Z({token:t,providedIn:"root",factory:()=>new t})}return t})(),ru=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,ig()&&(this.destroyRef=u($e,{optional:!0})??void 0,this.pendingTasks=u(Wr,{optional:!0})??void 0)}emit(n){let e=N(null);try{super.next(n)}finally{N(e)}}subscribe(n,e,r){let i=n,o=e||(()=>null),a=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:i,error:o,complete:a});return n instanceof re&&n.add(s),s}wrapInTimeout(n){return e=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},ie=ru;function Gs(...t){}function Uu(t){let n,e;function r(){t=Gs;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{t(),r()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),r()})),()=>r()}function Ag(t){return queueMicrotask(()=>t()),()=>{t=Gs}}var Rg="isAngularZone",S=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ie(!1);onMicrotaskEmpty=new ie(!1);onStable=new ie(!1);onError=new ie(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Ng}=n;if(typeof Zone>"u")throw new v(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!i&&r,a.shouldCoalesceRunChangeDetection=i,a.callbackScheduled=!1,a.scheduleInRootZone=o,sw(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Rg)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new v(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new v(909,!1)}run(n,e,r){return this._inner.run(n,e,r)}runTask(n,e,r,i){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+i,n,ow,Gs,Gs);try{return o.runTask(a,e,r)}finally{o.cancelTask(a)}}runGuarded(n,e,r){return this._inner.runGuarded(n,e,r)}runOutsideAngular(n){return this._outer.run(n)}},ow={};function zu(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function aw(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Uu(()=>{t.callbackScheduled=!1,iu(t),t.isCheckStableRunning=!0,zu(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),iu(t)}function sw(t){let n=()=>{aw(t)};t._inner=t._inner.fork({name:"angular",properties:{[Rg]:!0},onInvokeTask:(e,r,i,o,a,s)=>{if(lw(s))return e.invokeTask(i,o,a,s);try{return Uh(t),e.invokeTask(i,o,a,s)}finally{(t.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),zh(t)}},onInvoke:(e,r,i,o,a,s,l)=>{try{return Uh(t),e.invoke(i,o,a,s,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!cw(s)&&n(),zh(t)}},onHasTask:(e,r,i,o)=>{e.hasTask(i,o),r===i&&(o.change=="microTask"?(t._hasPendingMicrotasks=o.microTask,iu(t),zu(t)):o.change=="macroTask"&&(t.hasPendingMacrotasks=o.macroTask))},onHandleError:(e,r,i,o)=>(e.handleError(i,o),t.runOutsideAngular(()=>t.onError.emit(o)),!1)})}function iu(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Uh(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function zh(t){t._nesting--,zu(t)}var Po=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ie;onMicrotaskEmpty=new ie;onStable=new ie;onError=new ie;run(n,e,r){return n.apply(e,r)}runGuarded(n,e,r){return n.apply(e,r)}runOutsideAngular(n){return n()}runTask(n,e,r,i){return n.apply(e,r)}};function lw(t){return kg(t,"__ignore_ng_zone__")}function cw(t){return kg(t,"__scheduler_tick__")}function kg(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var at=class{_console=console;handleError(n){this._console.error("ERROR",n)}};function Og(t){return $u(t)?t:new ou(t)}function $u(t){return t instanceof Error||typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.message=="string"}var ou=class extends Error{constructor(n){super(String(n),{cause:n}),this.name="ErrorBoundaryWrappedError"}},Rn=new g("",{factory:()=>{let t=u(S),n=u(ke),e;return r=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw r}):(e??=n.get(at),e.handleError(r))})}}}),Fg={provide:Vr,useValue:()=>{let t=u(at,{optional:!0})},multi:!0},dw=new g("",{factory:()=>{let t=u(w).defaultView;if(!t)return;let n=u(Rn),e=o=>{n(o.reason),o.preventDefault()},r=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),u($e).onDestroy(()=>{t.removeEventListener("error",r),t.removeEventListener("unhandledrejection",e)})}});function Gu(){return Mn([Jh(()=>{u(dw)})])}function K(t,n){let[e,r,i]=Ad(t,n?.equal),o=e,a=o[Te];return o.set=r,o.update=i,o.asReadonly=Ko.bind(o),o}function Ko(){let t=this[Te];if(t.readonlyFn===void 0){let n=()=>this();n[Te]=t,t.readonlyFn=n}return t.readonlyFn}var nr=new g("",{factory:()=>uw}),uw="ng";var hl=new g(""),qr=new g("",{providedIn:"platform",factory:()=>"unknown"}),Qo=new g(""),rr=new g("",{factory:()=>u(w).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Lo(){return Object.create(null)}var Pi=(()=>{class t{static \u0275prov=Z({token:t,providedIn:"root",factory:()=>{let e=new t;return e.store=Pg(u(w),u(nr)),e}});store=Lo();onSerializeCallbacks=Lo();get(e,r){if(!Object.hasOwn(this.store,e))return r;let i=this.store[e];return i!==void 0?i:r}set(e,r){this.store[e]=r}remove(e){delete this.store[e]}hasKey(e){return Object.hasOwn(this.store,e)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(e,r){this.onSerializeCallbacks[e]=r}toJson(){for(let e in this.onSerializeCallbacks)if(Object.hasOwn(this.onSerializeCallbacks,e))try{this.store[e]=this.onSerializeCallbacks[e]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C").replace(/\//g,"\\u002F")}}return t})();function Pg(t,n){let e=t.getElementById(n+"-state");if(e?.tagName==="SCRIPT"&&e.textContent)try{return Object.assign(Lo(),JSON.parse(e.textContent))}catch(r){console.warn("Exception while restoring TransferState for app "+n,r)}return Lo()}var Li=(()=>{class t{view;node;constructor(e,r){this.view=e,this.node=r}static __NG_ELEMENT_ID__=fw}return t})();function fw(){return new Li(P(),qe())}var ln=class{},Jo=new g("",{factory:()=>!0});var Wu=new g(""),gl=(()=>{class t{static \u0275prov=Z({token:t,providedIn:"root",factory:()=>new au})}return t})(),au=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,r=this.queues.get(e);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let r=this.queues.get(e);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,r]of this.queues)e===null?n||=this.flushQueue(r):n||=e.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,e=!0,r.run());return e}},Ws=class{constructor(n){this[Te]=n}destroy(){this[Te].destroy()}};function Ct(t,n){let e=n?.injector??u(O),r=n?.manualCleanup!==!0?e.get($e):null,i,o=e.get(Li,null,{optional:!0}),a=e.get(ln);return o!==null?(i=Vg(o.view,a,t),r instanceof $s&&r._lView===o.view&&(r=null)):i=hw(t,e.get(gl),a),i.injector=e,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new Ws(i)}var Lg=z(_({},Rd),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Fo(!1);try{kd(this)}finally{Fo(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=N(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],N(t)}}}),mw=z(_({},Lg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(qn(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),pw=z(_({},Lg),{consumerMarkedDirty(){this.view[k]|=4096,$r(this.view),this.notifier.notify(13)},destroy(){if(qn(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[En]?.delete(this)}});function Vg(t,n,e){let r=Object.create(pw);return r.view=t,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.userFn=e,r.fn=jg(r,e),t[En]??=new Set,t[En].add(r),r.consumerMarkedDirty(r),r}function hw(t,n,e){let r=Object.create(mw);return r.userFn=t,r.fn=jg(r,t),r.scheduler=n,r.notifier=e,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function jg(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function st(t){return typeof t=="function"&&t[Te]!==void 0}var Vi=(()=>{class t{internalPendingTasks=u(Wr);scheduler=u(ln);errorHandler=u(Rn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let r=this.add();try{e().catch(this.errorHandler).finally(r)}catch(i){this.errorHandler(i),r()}}static \u0275prov=Z({token:t,providedIn:"root",factory:()=>new t})}return t})();var Vl=Symbol("InputSignalNode#UNSET"),Eb=z(_({},gi),{transformFn:void 0,applyValueToInputSignal(t,n){Yn(t,n)}});function la(t){return{toString:t}.toString()}var ne=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(ne||{}),wl=class{previousValue;currentValue;firstChange;constructor(n,e,r){this.previousValue=n,this.currentValue=e,this.firstChange=r}isFirstChange(){return this.firstChange}};function Sb(t,n,e,r){n!==null?n.applyValueToInputSignal(n,r):t[e]=r}var Ib=null,ut=(()=>{Ib=Bg;let t=()=>Bg;return t.ngInherit=!0,t})();function Mw(){return Ib}function Bg(t){return t.type.prototype.ngOnChanges&&(t.setInput=Tw),Nw}function Nw(){let t=Mb(this),n=t?.current;if(n){let e=t.previous;if(e===Qn)t.previous=n;else for(let r in n)e[r]=n[r];t.current=null,this.ngOnChanges(n)}}function Tw(t,n,e,r,i){let o=this.declaredInputs[r],a=Mb(t)||Aw(t,{previous:Qn,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new wl(c&&c.currentValue,e,l===Qn),Sb(t,n,i,e)}var rf="__ngSimpleChanges__";function Mb(t){return Object.hasOwn(t,rf)&&t[rf]||null}function Aw(t,n){return t[rf]=n}var Hg=[];var ce=function(t,n=null,e){for(let r=0;r<Hg.length;r++){let i=Hg[r];i(t,n,e)}};function Rw(t,n,e){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let a=Mw()(n);(e.preOrderHooks??=[]).push(t,a),(e.preOrderCheckHooks??=[]).push(t,a)}i&&(e.preOrderHooks??=[]).push(0-t,i),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Nb(t,n){for(let e=n.directiveStart,r=n.directiveEnd;e<r;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(t.contentHooks??=[]).push(-e,a),s&&((t.contentHooks??=[]).push(e,s),(t.contentCheckHooks??=[]).push(e,s)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function _l(t,n,e){Tb(t,n,3,e)}function Cl(t,n,e,r){(t[k]&3)===e&&Tb(t,n,e,r)}function qu(t,n){let e=t[k];(e&3)===n&&(e&=8191,e+=1,t[k]=e)}function Tb(t,n,e,r){let i=r!==void 0?t[jr]&65535:0,o=r??-1,a=n.length-1,s=0;for(let l=i;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],r!=null&&s>=r)break}else n[l]<0&&(t[jr]+=65536),(s<o||o==-1)&&(kw(t,e,n,l),t[jr]=(t[jr]&4294901760)+l+2),l++}function Ug(t,n){ce(ne.LifecycleHookStart,t,n);let e=N(null);try{n.call(t)}finally{N(e),ce(ne.LifecycleHookEnd,t,n)}}function kw(t,n,e,r){let i=e[r]<0,o=e[r+1],a=i?-e[r]:e[r],s=t[a];i?t[k]>>13<t[jr]>>16&&(t[k]&3)===n&&(t[k]+=8192,Ug(s,o)):Ug(s,o)}var Hi=-1,Xr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=e,this.injectImpl=r}};function Ow(t){return(t.flags&8)!==0}function Fw(t){return(t.flags&16)!==0}function Pw(t,n,e){let r=0;for(;r<e.length;){let i=e[r];if(typeof i=="number"){if(i!==0)break;r++;let o=e[r++],a=e[r++],s=e[r++];t.setAttribute(n,a,s,o)}else{let o=i,a=e[++r];Lw(o)?t.setProperty(n,o,a):t.setAttribute(n,o,a),r++}}return r}function Ab(t){return t===3||t===4||t===6}function Lw(t){return t.charCodeAt(0)===64}function zi(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?e=i:e===0||(e===-1||e===2?zg(t,e,i,null,n[++r]):zg(t,e,i,null,null))}}return t}function zg(t,n,e,r,i){let o=0,a=t.length;if(n===-1)a=-1;else for(;o<t.length;){let s=t[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<t.length;){let s=t[o];if(typeof s=="number")break;if(s===e){i!==null&&(t[o+1]=i);return}o++,i!==null&&o++}a!==-1&&(t.splice(a,0,n),o=a+1),t.splice(o++,0,e),i!==null&&t.splice(o++,0,i)}function Rb(t){return t!==Hi}function El(t){return t&32767}function Vw(t){return t>>16}function Sl(t,n){let e=Vw(t),r=n;for(;e>0;)r=r[Jn],e--;return r}var of=!0;function Il(t){let n=of;return of=t,n}var jw=256,kb=jw-1,Ob=5,Bw=0,gn={};function Hw(t,n,e){let r;typeof e=="string"?r=e.charCodeAt(0)||0:Object.hasOwn(e,Lr)&&(r=e[Lr]),r==null&&(r=e[Lr]=Bw++);let i=r&kb,o=1<<i;n.data[t+(i>>Ob)]|=o}function Ml(t,n){let e=Fb(t,n);if(e!==-1)return e;let r=n[A];r.firstCreatePass&&(t.injectorIndex=n.length,Yu(r.data,t),Yu(n,null),Yu(r.blueprint,null));let i=Pf(t,n),o=t.injectorIndex;if(Rb(i)){let a=El(i),s=Sl(i,n),l=s[A].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=i,o}function Yu(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Fb(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Pf(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,r=null,i=n;for(;i!==null;){if(r=Bb(i),r===null)return Hi;if(e++,i=i[Jn],r.injectorIndex!==-1)return r.injectorIndex|e<<16}return Hi}function af(t,n,e){Hw(t,n,e)}function Uw(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let r=e.length,i=0;for(;i<r;){let o=e[i];if(Ab(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof e[i]=="string";)i++;else{if(o===n)return e[i+1];i=i+2}}}return null}function Pb(t,n,e){if(e&8||t!==void 0)return t;Ks(n,"NodeInjector")}function Lb(t,n,e,r){if(e&8&&r===void 0&&(r=null),(e&3)===0){let i=t[Nn],o=ot(void 0);try{return i?i.get(n,r,e&8):mu(n,r,e&8)}finally{ot(o)}}return Pb(r,n,e)}function Vb(t,n,e,r=0,i){if(t!==null){if(n[k]&2048&&!(r&2)){let a=Ww(t,n,e,r,gn);if(a!==gn)return a}let o=jb(t,n,e,r,gn);if(o!==gn)return o}return Lb(n,e,r,i)}function jb(t,n,e,r,i){let o=$w(e);if(typeof o=="function"){if(!ju(n,t,r))return r&1?Pb(i,e,r):Lb(n,e,r,i);try{let a;if(a=o(r),a==null&&!(r&8))Ks(e);else return a}finally{Bu()}}else if(typeof o=="number"){let a=null,s=Fb(t,n),l=Hi,c=r&1?n[Je][Ge]:null;for((s===-1||r&4)&&(l=s===-1?Pf(t,n):n[s+8],l===Hi||!Gg(r,!1)?s=-1:(a=n[A],s=El(l),n=Sl(l,n)));s!==-1;){let d=n[A];if($g(o,s,d.data)){let f=zw(s,n,e,a,r,c);if(f!==gn)return f}l=n[s+8],l!==Hi&&Gg(r,n[A].data[s+8]===c)&&$g(o,s,n)?(a=d,s=El(l),n=Sl(l,n)):s=-1}}return i}function zw(t,n,e,r,i,o){let a=n[A],s=a.data[t+8],l=r==null?An(s)&&of:r!=a&&(s.type&3)!==0,c=i&1&&o===s,d=Dl(s,a,e,l,c);return d!==null?ra(n,a,d,s,i):gn}function Dl(t,n,e,r,i){let o=t.providerIndexes,a=n.data,s=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,f=r?s:s+d,p=i?s+d:c;for(let m=f;m<p;m++){let h=a[m];if(m<l&&e===h||m>=l&&h.type===e)return m}if(i){let m=a[l];if(m&&fn(m)&&m.type===e)return l}return null}function ra(t,n,e,r,i){let o=t[e],a=n.data;if(o instanceof Xr){let s=o;if(s.resolving)throw fu("");let l=Il(s.canSeeViewProviders);s.resolving=!0;let c=a[e].type||a[e],d,f=s.injectImpl?ot(s.injectImpl):null,p=ju(t,r,0);try{o=t[e]=s.factory(void 0,i,a,t,r),n.firstCreatePass&&e>=r.directiveStart&&Rw(e,a[e],n)}finally{f!==null&&ot(f),Il(l),s.resolving=!1,Bu()}}return o}function $w(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=Object.hasOwn(t,Lr)?t[Lr]:void 0;return typeof n=="number"?n>=0?n&kb:Gw:n}function $g(t,n,e){let r=1<<t;return!!(e[n+(t>>Ob)]&r)}function Gg(t,n){return!(t&2)&&!(t&1&&n)}var kn=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,r){return Vb(this._tNode,this._lView,n,Or(r),e)}};function Gw(){return new kn(qe(),P())}function xt(t){return la(()=>{let n=t.prototype.constructor,e=n[Oo]||sf(n),r=Object.prototype,i=Object.getPrototypeOf(t.prototype).constructor;for(;i&&i!==r;){let o=i[Oo]||sf(i);if(o&&o!==e)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function sf(t){return lu(t)?()=>{let n=sf(Be(t));return n&&n()}:Zn(t)}function Ww(t,n,e,r,i){let o=t,a=n,s=r&1?n[Je][Ge]:null;for(;o!==null&&a!==null&&a[k]&2048&&!Oi(a);){let l=jb(o,a,e,r|2,gn);if(l!==gn)return l;if(r&=-5,r&1&&o===s)return i;let c=o.parent;if(!c){let d=a[Cu];if(d){let f=d.get(e,gn,r);if(f!==gn)return f}c=Bb(a),a=a[Jn]}o=c}return i}function Bb(t){let n=t[A],e=n.type;return e===2?n.declTNode:e===1?t[Ge]:null}function Lf(t){return Uw(qe(),t)}function E(t){return{token:t.token,providedIn:t.autoProvided===!1?null:"root",factory:t.factory,value:void 0}}function qw(){return qi(qe(),P())}function qi(t,n){return new F(kt(t,n))}var F=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=qw}return t})();function Hb(t){return t instanceof F?t.nativeElement:t}function Yw(){return this._results[Symbol.iterator]()}var On=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let r=Zh(n);(this._changesDetected=!Xh(this._results,r,e))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Yw};function Xw(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw Ub(n);return n}function Zw(t){let n=t.firstChild;if(n&&(n.parentNode!==t||n.previousSibling!==null))throw Ub(n);return n}function Wg(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function Ub(t){return new Error(`Action failed because the element is clobbered: ${t.outerHTML}`)}function zb(t){return(t.flags&128)===128}var Vf=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Vf||{}),$b=new Map,Kw=0;function Qw(){return Kw++}function Jw(t){$b.set(t[$o],t)}function lf(t){$b.delete(t[$o])}var qg="__ngContext__";function $i(t,n){Tn(n)?(t[qg]=n[$o],Jw(n)):t[qg]=n}function Gb(t){return qb(t[Ri])}function Wb(t){return qb(t[At])}function qb(t){for(;t!==null&&!Rt(t);)t=t[At];return t}var cf;function jf(t){cf=t}function Yb(){if(cf!==void 0)return cf;if(typeof document<"u")return document;throw new v(210,!1)}var Xb=!1,Zb=new g("",{factory:()=>Xb});var Yg=new WeakMap;function eE(t,n){if(t==null||typeof t!="object")return;let e=Yg.get(t);e||(e=new WeakSet,Yg.set(t,e)),e.add(n)}var tE=(t,n,e,r)=>{};function nE(t,n,e,r){tE(t,n,e,r)}function jl(t){return(t.flags&32)===32}var rE=()=>null;function Kb(t,n,e=!1){return rE(t,n,e)}function Qb(t,n){let e=t.contentQueries;if(e!==null){let r=N(null);try{for(let i=0;i<e.length;i+=2){let o=e[i],a=e[i+1];if(a!==-1){let s=t.data[a];Xo(o),s.contentQueries(2,n[a],a)}}}finally{N(r)}}}function df(t,n,e){Xo(0);let r=N(null);try{n(t,e)}finally{N(r)}}function Jb(t,n,e){if(Du(n)){let r=N(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let a=i;a<o;a++){let s=t.data[a];if(s.contentQueries){let l=e[a];s.contentQueries(1,l,a)}}}finally{N(r)}}}var Yt=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Yt||{}),Fn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`}},uf=class extends Fn{getTypeName(){return"HTML"}},ff=class extends Fn{getTypeName(){return"Style"}},mf=class extends Fn{getTypeName(){return"Script"}},pf=class extends Fn{getTypeName(){return"URL"}},hf=class extends Fn{getTypeName(){return"ResourceURL"}};function Xt(t){return t instanceof Fn?t.changingThisBreaksApplicationSecurity:t}function Qr(t,n){let e=ey(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${su})`)}return e===n}function ey(t){return t instanceof Fn&&t.getTypeName()||null}function Bf(t){return new uf(t)}function Hf(t){return new ff(t)}function Uf(t){return new mf(t)}function zf(t){return new pf(t)}function $f(t){return new hf(t)}var bl;function iE(){if(bl===void 0&&(bl=null,cn.trustedTypes))try{bl=cn.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch{}return bl}function Bl(t){return iE()?.createHTML(t)||t}function oE(t){let n=new bf(t);return aE()?new gf(n):n}var gf=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Bl(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch{return null}}},bf=class{inertDocument;constructor(n){this.inertDocument=n.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Bl(n),e}};function aE(){try{return!!new window.DOMParser().parseFromString(Bl(""),"text/html")}catch{return!1}}var sE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Hl(t){return t=String(t),t.match(sE)?t:"unsafe:"+t}function Ln(t){let n=Object.create(null);for(let e of t.split(","))n[e]=!0;return n}function ca(...t){let n=Object.create(null);for(let e of t)for(let r in e)Object.hasOwn(e,r)&&(n[r]=!0);return n}var ty=Ln("area,br,col,hr,img,wbr"),ny=Ln("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ry=Ln("rp,rt"),lE=ca(ry,ny),cE=ca(ny,Ln("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),dE=ca(ry,Ln("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Xg=ca(ty,cE,dE,lE),iy=Ln("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),uE=Ln("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),fE=Ln("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),mE=ca(iy,uE,fE),pE=Ln("script,style,template"),yf=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,r=!0,i=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?r=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,r&&e.firstChild){i.push(e),e=Zw(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=Xw(e);if(o){e=o;break}e=i.pop()}}return this.buf.join("")}startElement(n){let e=Wg(n).toLowerCase();if(!Object.hasOwn(Xg,e))return this.sanitizedSomething=!0,!Object.hasOwn(pE,e);this.buf.push("<"),this.buf.push(e);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),a=o.name,s=a.toLowerCase();if(!Object.hasOwn(mE,s)){this.sanitizedSomething=!0;continue}let l=o.value;iy[s]&&(l=Hl(l)),this.buf.push(" ",a,'="',Zg(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=Wg(n).toLowerCase();Object.hasOwn(Xg,e)&&!Object.hasOwn(ty,e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(Zg(n))}},hE=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,gE=/([^\#-~ |!])/g;function Zg(t){return t.replace(/&/g,"&amp;").replace(hE,function(n){let e=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((e-55296)*1024+(r-56320)+65536)+";"}).replace(gE,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var yl;function Gf(t,n){let e=null;try{yl=yl||oE(t);let r=n?String(n):"";e=yl.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=e.innerHTML,Kg(e),e=null,e=yl.getInertBodyElement(r)}while(r!==o);let s=new yf().sanitizeChildren(oy(e)||e);return Bl(s)}finally{e&&Kg(e)}}function Kg(t){let n=oy(t)||t;for(;n.firstChild;)n.firstChild.remove()}function oy(t){return"content"in t&&bE(t)?t.content:null}function bE(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function yE(t,n){return t.createText(n)}function vE(t,n,e){t.setValue(n,e)}function ay(t,n,e){return t.createElement(n,e)}function Yr(t,n,e,r,i){t.insertBefore(n,e,r,i)}function sy(t,n,e){t.appendChild(n,e)}function Qg(t,n,e,r,i){r!==null?Yr(t,n,e,r,i):sy(t,n,e)}function _E(t,n,e,r){t.removeChild(null,n,e,r)}function CE(t,n,e,r,i,o,a){if(o==null)a?.(o,r||"",i),t.removeAttribute(n,i,e);else{let s=a==null?Ho(o):a(o,r||"",i);t.setAttribute(n,i,s,e)}}function DE(t,n,e){t.setAttribute(n,"style",e)}function xE(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function ly(t,n,e){let{mergedAttrs:r,classes:i,styles:o}=e;r!==null&&Pw(t,n,r),i!==null&&xE(t,n,i),o!==null&&DE(t,n,o)}function wE(t,n,e){let r=t.length;for(;;){let i=t.indexOf(n,e);if(i===-1)return i;if(i===0||t.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||t.charCodeAt(i+o)<=32)return i}e=i+1}}var cy="ng-template";function EE(t,n,e,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&wE(n[i+1].toLowerCase(),e,0)!==-1)return!0}else if(Wf(t))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===e)return!0}return!1}function Wf(t){return t.type===4&&t.value!==cy}function SE(t,n,e){let r=t.type===4&&!e?cy:t.value;return n===r}function IE(t,n,e){let r=4,i=t.attrs,o=i!==null?TE(i):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!Wt(r)&&!Wt(l))return!1;if(a&&Wt(l))continue;a=!1,r=l|r&1;continue}if(!a)if(r&4){if(r=2|r&1,l!==""&&!SE(t,l,e)||l===""&&n.length===1){if(Wt(r))return!1;a=!0}}else if(r&8){if(i===null||!EE(t,i,l,e)){if(Wt(r))return!1;a=!0}}else{let c=n[++s],d=ME(l,i,Wf(t),e);if(d===-1){if(Wt(r))return!1;a=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(Wt(r))return!1;a=!0}}}}return Wt(r)||a}function Wt(t){return(t&1)===0}function ME(t,n,e,r){if(n===null)return-1;let i=0;if(r||!e){let o=!1;for(;i<n.length;){let a=n[i];if(a===t)return i;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++i];for(;typeof s=="string";)s=n[++i];continue}else{if(a===4)break;if(a===0){i+=4;continue}}i+=o?1:2}return-1}else return AE(n,t)}function dy(t,n,e=!1){for(let r=0;r<n.length;r++)if(IE(t,n[r],e))return!0;return!1}function NE(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function TE(t){for(let n=0;n<t.length;n++){let e=t[n];if(Ab(e))return n}return t.length}function AE(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let r=t[e];if(typeof r=="number")return-1;if(r===n)return e;e++}return-1}function RE(t,n){e:for(let e=0;e<n.length;e++){let r=n[e];if(t.length===r.length){for(let i=0;i<t.length;i++)if(t[i]!==r[i])continue e;return!0}}return!1}function Jg(t,n){return t?":not("+n.trim()+")":n}function kE(t){let n=t[0],e=1,r=2,i="",o=!1;for(;e<t.length;){let a=t[e];if(typeof a=="string")if(r&2){let s=t[++e];i+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else r&8?i+="."+a:r&4&&(i+=" "+a);else i!==""&&!Wt(a)&&(n+=Jg(o,i),i=""),r=a,o=o||!Wt(r);e++}return i!==""&&(n+=Jg(o,i)),n}function OE(t){return t.map(kE).join(",")}function FE(t){let n=[],e=[],r=1,i=2;for(;r<t.length;){let o=t[r];if(typeof o=="string")i===2?o!==""&&n.push(o,t[++r]):i===8&&e.push(o);else{if(!Wt(i))break;i=o}r++}return e.length&&n.push(1,...e),n}var ft={},bn=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(bn||{}),PE;function qf(t,n){return PE(t,n)}var Yf=new Set;var yV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var vf=new WeakMap;function uy(t){return t?t[Jn]??t:null}var ji=new WeakSet;function LE(t,n,e){let r=vf.get(t);if(!r||r.length===0)return;let i=n.parentNode,o=n.previousSibling,a=uy(e);for(let s=r.length-1;s>=0;s--){let{el:l,declarationView:c}=r[s],d=l.parentNode;l===n?(r.splice(s,1),ji.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&l===o?(r.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&i&&d!==i&&(a===null||c===null||a===c)&&(r.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function VE(t,n,e){let r=uy(e),i=vf.get(t);i?i.some(o=>o.el===n)||i.push({el:n,declarationView:r}):vf.set(t,[{el:n,declarationView:r}])}var Ul=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(Ul||{}),Zt=new g(""),eb=new Set;function Vn(t){eb.has(t)||(eb.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var zl=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=Z({token:t,providedIn:"root",factory:()=>new t})}return t})(),Xf=[0,1,2,3],Zf=(()=>{class t{ngZone=u(S);scheduler=u(ln);errorHandler=u(at,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Zt,{optional:!0})}execute(){let e=this.sequences.size>0;e&&ce(ne.AfterRenderHooksStart),this.executing=!0;for(let r of Xf)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&ce(ne.AfterRenderHooksEnd)}register(e){let{view:r}=e;r!==void 0?((r[Br]??=[]).push(e),$r(r),r[k]|=4096):this.addSequence(e)}addSequence(e){this.executing?this.deferredRegistrations.add(e):this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,r){return r?r.run(Ul.AFTER_NEXT_RENDER,e):e()}static \u0275prov=Z({token:t,providedIn:"root",factory:()=>new t})}return t})(),ia=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,r,i,o,a=null){this.impl=n,this.hooks=e,this.view=r,this.once=i,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Br];n&&(this.view[Br]=n.filter(e=>e!==this))}};function Ft(t,n){let e=n?.injector??u(O);return Vn("NgAfterNextRender"),BE(t,e,n,!0)}function jE(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function BE(t,n,e,r){let i=n.get(zl);i.impl??=n.get(Zf);let o=n.get(Zt,null,{optional:!0}),a=e?.manualCleanup!==!0?n.get($e):null,s=n.get(Li,null,{optional:!0}),l=new ia(i.impl,jE(t),s?.view,r,a,o?.snapshot(null));return i.impl.register(l),l}var _f=null;function tb(t,n,e,r){_f?.maybeQueueEnterAnimation(t,n,e,r)}function nb(t,n,e,r){_f===null?r(!1):_f.runLeaveAnimationsWithCallback(t,n,e,r)}function Bi(t,n,e,r,i,o,a,s){if(i!=null){let l,c=!1;Rt(i)?l=i:Tn(i)&&(c=!0,i=i[$t]);let d=Ye(i);t===0&&r!==null?(tb(s,r,o,e),a==null?sy(n,r,d):Yr(n,r,d,a||null,!0)):t===1&&r!==null?(Yr(n,r,d,a||null,!0),LE(o,d,s),ji.has(d)||tb(s,r,o,e)):t===2?(s?.[og]?.leave?.has(o.index)&&VE(o,d,s),ji.delete(d),nb(s,o,e,f=>{if(ji.has(d)){ji.delete(d);return}_E(n,d,c,f)})):t===3&&(ji.delete(d),nb(s,o,e,()=>{n.destroyNode(d)})),l!=null&&KE(n,t,e,l,o,r,a)}}function HE(t,n){fy(t,n),n[$t]=null,n[Ge]=null}function UE(t,n,e,r,i,o){r[$t]=i,r[Ge]=n,$l(t,r,e,1,i,o)}function fy(t,n){n[dn].changeDetectionScheduler?.notify(9),$l(t,n,n[Ee],2,null,null)}function zE(t){let n=t[Ri];if(!n)return Xu(t[A],t);for(;n;){let e=null;if(Tn(n))e=n[Ri];else{let r=n[et];r&&(e=r)}if(!e){for(;n&&!n[At]&&n!==t;)Tn(n)&&Xu(n[A],n),n=n[Oe];n===null&&(n=t),Tn(n)&&Xu(n[A],n),e=n&&n[At]}n=e}}function Kf(t,n){let e=t[Ur],r=e.indexOf(n);e.splice(r,1)}function Qf(t,n){if(zr(n))return;let e=n[Ee];e.destroyNode&&$l(t,n,e,3,null,null),zE(n)}function Xu(t,n){if(zr(n))return;let e=N(null);try{n[k]&=-129,n[k]|=256,n[_t]&&qn(n[_t]),GE(t,n),$E(t,n),n[A].type===1&&n[Ee].destroy();let r=n[er];if(r!==null&&Rt(n[Oe])){r!==n[Oe]&&Kf(r,n);let i=n[un];i!==null&&i.detachView(t)}lf(n)}finally{N(e)}}function $E(t,n){let e=t.cleanup,r=n[Ai];if(e!==null)for(let a=0;a<e.length-1;a+=2)if(typeof e[a]=="string"){let s=e[a+3];s>=0?r[s]():r[-s].unsubscribe(),a+=2}else{let s=r[e[a+1]];e[a].call(s)}r!==null&&(n[Ai]=null);let i=n[wn];if(i!==null){n[wn]=null;for(let a=0;a<i.length;a++){let s=i[a];s()}}let o=n[En];if(o!==null){n[En]=null;for(let a of o)a.destroy()}}function GE(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let r=0;r<e.length;r+=2){let i=n[e[r]];if(!(i instanceof Xr)){let o=e[r+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=i[o[a]],l=o[a+1];ce(ne.LifecycleHookStart,s,l);try{l.call(s)}finally{ce(ne.LifecycleHookEnd,s,l)}}else{ce(ne.LifecycleHookStart,i,o);try{o.call(i)}finally{ce(ne.LifecycleHookEnd,i,o)}}}}}function my(t,n,e){if(n===null)throw new v(510,!1);return WE(t,n.parent,e)}function WE(t,n,e){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return e[$t];if(An(r)){let{encapsulation:i}=t.data[r.directiveStart+r.componentOffset];if(i===Yt.None||i===Yt.Emulated)return null}return kt(r,e)}function py(t,n,e){return YE(t,n,e)}function qE(t,n,e){return t.type&40?kt(t,e):null}var YE=qE,rb;function Jf(t,n,e,r){let i=my(t,r,n),o=n[Ee],a=r.parent||n[Ge],s=py(a,r,n);if(i!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Qg(o,i,e[l],s,!1);else Qg(o,i,e,s,!1);rb!==void 0&&rb(o,r,n,e,i)}function ta(t,n){if(n!==null){let e=n.type;if(e&3)return kt(n,t);if(e&4)return Cf(-1,t[n.index]);if(e&8){let r=n.child;if(r!==null)return ta(t,r);{let i=t[n.index];return Rt(i)?Cf(-1,i):Ye(i)}}else{if(e&128)return ta(t,n.next);if(e&32)return qf(n,t)()||Ye(t[n.index]);{let r=hy(t,n);if(r!==null){if(Array.isArray(r))return r[0];let i=Sn(t[Je]);return ta(i,r)}else return ta(t,n.next)}}}return null}function hy(t,n){if(n!==null){let r=t[Je][Ge],i=n.projection;return r.projection[i]}return null}function Cf(t,n){let e=et+t+1;if(e<n.length){let r=n[e],i=r[A].firstChild;if(i!==null)return ta(r,i)}return n[Hr]}function em(t,n,e,r,i,o,a){for(;e!=null;){let s=r[Nn];if(e.type===128){e=e.next;continue}let l=r[e.index],c=e.type;if(a&&n===0&&(l&&$i(Ye(l),r),e.flags|=2),!jl(e))if(c&8)em(t,n,e.child,r,i,o,!1),Bi(n,t,s,i,l,e,o,r);else if(c&32){let d=qf(e,r),f;for(;f=d();)Bi(n,t,s,i,f,e,o,r);Bi(n,t,s,i,l,e,o,r)}else c&16?gy(t,n,r,e,i,o):Bi(n,t,s,i,l,e,o,r);e=a?e.projectionNext:e.next}}function $l(t,n,e,r,i,o){t.type===3?XE(e,r,n,i,o):em(e,r,t.firstChild,n,i,o,!1)}function XE(t,n,e,r,i){let a=e[A].firstChild,s=a.next,l=Ye(e[a.index]),c=Ye(e[s.index]),d=s.index+1,f=e[d];if(n===1||n===0)r!==null&&(f&&f.hasChildNodes()?Yr(t,r,f,i,!0):(Yr(t,r,l,i,!0),Yr(t,r,c,i,!0)));else if(n===2){if(f||(f=document.createDocumentFragment(),e[d]=f),l&&l.parentNode===f)return;let p=l;for(;p!==null;){let m=p.nextSibling;if(f.appendChild(p),p===c)break;p=m}}}function ZE(t,n,e){let r=n[Ee],i=my(t,e,n),o=e.parent||n[Ge],a=py(o,e,n);gy(r,0,n,e,i,a)}function gy(t,n,e,r,i,o){let a=e[Je],l=a[Ge].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Bi(n,t,e[Nn],i,d,r,o,e)}else{let c=l,d=a[Oe];zb(r)&&(c.flags|=128),em(t,n,c,d,i,o,!0)}}function KE(t,n,e,r,i,o,a){let s=r[Hr],l=Ye(r);if(s!==l&&Bi(n,t,e,o,s,i,a),(r[k]&4)===0)for(let c=et;c<r.length;c++){let d=r[c];$l(d[A],d,t,n,o,s)}}function QE(t,n,e,r,i){if(n)i?t.addClass(e,r):t.removeClass(e,r);else{let o=r.indexOf("-")===-1?void 0:bn.DashCase;i==null?t.removeStyle(e,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=bn.Important),t.setStyle(e,r,i,o))}}function tm(t,n,e,r,i,o,a,s,l,c,d){let f=Se+r,p=f+i,m=JE(f,p),h=typeof c=="function"?c():c;return m[A]={type:t,blueprint:m,template:e,queries:null,viewQuery:s,declTNode:n,data:m.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1,ssrId:d}}function JE(t,n){let e=[];for(let r=0;r<n;r++)e.push(r<t?null:ft);return e}function eS(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=tm(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function nm(t,n,e,r,i,o,a,s,l,c,d){let f=n.blueprint.slice();return f[$t]=i,f[k]=r|4|128|8|64|1024,(c!==null||t&&t[k]&2048)&&(f[k]|=2048),Eu(f),f[Oe]=f[Jn]=t,f[We]=e,f[dn]=a||t&&t[dn],f[Ee]=s||t&&t[Ee],f[Nn]=l||t&&t[Nn]||null,f[Ge]=o,f[$o]=Qw(),f[Ti]=d,f[Cu]=c,f[Je]=n.type==2?t[Je]:f,f}function tS(t,n,e){let r=kt(n,t),i=eS(e),o=t[dn].rendererFactory,a=rm(t,nm(t,i,null,by(e),r,n,null,o.createRenderer(r,e),null,null,null));return t[n.index]=a}function by(t){let n=16;return t.onPush&&(n=64),n}function yy(t,n,e,r){if(e===0)return-1;let i=n.length;for(let o=0;o<e;o++)n.push(r),t.blueprint.push(r),t.data.push(null);return i}function rm(t,n){return t[Ri]?t[_u][At]=n:t[Ri]=n,t[_u]=n,n}function L(t=1){vy(ye(),P(),hn()+t,!1)}function vy(t,n,e,r){if(!r)if((n[k]&3)===3){let o=t.preOrderCheckHooks;o!==null&&_l(n,o,e)}else{let o=t.preOrderHooks;o!==null&&Cl(n,o,0,e)}tr(e)}var da=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(da||{});function Zr(t,n,e,r){let i=N(null);try{let[o,a,s]=t.inputs[e],l=null;(a&da.SignalBased)!==0&&(l=n[o][Te]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):s!==null&&(r=s.call(n,r)),t.setInput!==null?t.setInput(n,l,r,e,o):Sb(n,l,o,r)}finally{N(i)}}function _y(t,n,e,r,i){let o=hn(),a=r&2;try{tr(-1),a&&n.length>Se&&vy(t,n,Se,!1);let s=a?ne.TemplateUpdateStart:ne.TemplateCreateStart;ce(s,i,e),e(r,i)}finally{tr(o);let s=a?ne.TemplateUpdateEnd:ne.TemplateCreateEnd;ce(s,i,e)}}function im(t,n,e){lS(t,n,e),(e.flags&64)===64&&cS(t,n,e)}function Gl(t,n,e=kt){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let a=r[o+1],s=a===-1?e(n,t):t[a];t[i++]=s}}}function nS(t,n,e,r){let o=r.get(Zb,Xb)||e===Yt.ShadowDom||e===Yt.ExperimentalIsolatedShadowDom,a=t.selectRootElement(n,o);return rS(a),a}function rS(t){iS(t)}var iS=()=>null;function oS(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function aS(t,n,e,r,i,o){let a=n[A];if(om(t,a,n,e,r)){An(t)&&sS(n,t.index);return}t.type&3&&(e=oS(e)),Cy(t,n,e,r,i,o)}function Cy(t,n,e,r,i,o){if(t.type&3){let a=kt(t,n);r=o!=null?o(r,t.value||"",e):r,r=Dy(e,a,r),i.setProperty(a,e,r)}else t.type&12}function Dy(t,n,e,r=!1){return t==="src"&&(n.tagName==="IMG"||n.tagName==="VIDEO")?e==null?r?e:"":Xt(e):e}function sS(t,n){let e=Ot(n,t);e[k]&16||(e[k]|=64)}function lS(t,n,e){let r=e.directiveStart,i=e.directiveEnd;An(e)&&tS(n,e,t.data[r+e.componentOffset]),t.firstCreatePass||Ml(e,n);let o=e.initialInputs;for(let a=r;a<i;a++){let s=t.data[a],l=ra(n,t,a,e);if($i(l,n),o!==null&&fS(n,a-r,l,s,e,o),fn(s)){let c=Ot(e.index,n);c[We]=ra(n,t,a,e)}}}function cS(t,n,e){let r=e.directiveStart,i=e.directiveEnd,o=e.index,a=Cg();try{tr(o);for(let s=r;s<i;s++){let l=t.data[s],c=n[s];ll(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&dS(l,c)}}finally{tr(-1),ll(a)}}function dS(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function xy(t,n){let e=t.directiveRegistry,r=null;if(e)for(let i=0;i<e.length;i++){let o=e[i];dy(n,o.selectors,!1)&&(r??=[],fn(o)?r.unshift(o):r.push(o))}return r}function uS(t,n,e,r,i,o){let a=kt(t,n);r=Dy(e,a,r,!0),CE(n[Ee],a,o,t.value,e,r,i)}function fS(t,n,e,r,i,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Zr(r,e,l,c)}}function wy(t,n,e,r,i){let o=Se+e,a=n[A],s=i(a,n,t,r,e);n[o]=s,Gr(t,!0);let l=t.type===2;return l?(ly(n[Ee],s,t),(mg()===0||Wo(t))&&$i(s,n),pg()):$i(s,n),ml()&&(!l||!jl(t))&&Jf(a,n,s,t),t}function Ey(t){let n=t;return Fu()?Pu():(n=n.parent,Gr(n,!1)),n}function mS(t,n){let e=t[Nn];if(!e)return;let r;try{r=e.get(Rn,null)}catch{r=null}r?.(n)}function om(t,n,e,r,i){let o=t.inputs?.[r],a=t.hostDirectiveInputs?.[r],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],f=n.data[c];Zr(f,e[c],d,i),s=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];Zr(d,c,r,i),s=!0}return s}function pS(t,n,e,r,i,o){let a=null,s=null,l=null,c=!1,d=t.directiveToIndex.get(r.type);if(typeof d=="number"?a=d:[a,s,l]=d,s!==null&&l!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,i)){let f=t.hostDirectiveInputs[i];for(let p=0;p<f.length;p+=2){let m=f[p];if(m>=s&&m<=l){let h=n.data[m],y=f[p+1];Zr(h,e[m],y,o),c=!0}else if(m>l)break}}return a!==null&&Object.hasOwn(r.inputs,i)&&(Zr(r,e[a],i,o),c=!0),c}function hS(t,n){let e=Ot(n,t),r=e[A];gS(r,e);let i=e[$t];i!==null&&e[Ti]===null&&(e[Ti]=Kb(i,e[Nn])),ce(ne.ComponentStart);try{am(r,e,e[We])}finally{ce(ne.ComponentEnd,e[We])}}function gS(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function am(t,n,e){dl(n);try{let r=t.viewQuery;r!==null&&df(1,r,e);let i=t.template;i!==null&&_y(t,n,i,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[un]?.finishViewCreation(t),t.staticContentQueries&&Qb(t,n),t.staticViewQueries&&df(2,t.viewQuery,e);let o=t.components;o!==null&&bS(n,o)}catch(r){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),r}finally{n[k]&=-5,ul()}}function bS(t,n){for(let e=0;e<n.length;e++)hS(t,n[e])}function sm(t,n,e,r){let i=N(null);try{let o=n.tView,a=nm(t,o,e,16,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),s=t[n.index];a[er]=s;let l=t[un];return l!==null&&(a[un]=l.createEmbeddedView(o)),am(o,a,e),a}finally{N(i)}}function Nl(t,n){return!n||n.firstChild===null||zb(t)}function oa(t,n,e,r,i=!1){if(t.type===3){let o=t.firstChild,a=o.next,s=Ye(n[o.index]),l=Ye(n[a.index]),c=s;for(;c!==null&&(r.push(c),c!==l);)c=c.nextSibling;return r}for(;e!==null;){if(e.type===128){e=i?e.projectionNext:e.next;continue}let o=n[e.index];if(o!==null)if(Rt(o)){let s=o[Hr];s!==o[$t]&&r.push(Ye(o)),o[k]&4||Sy(o,r),r.push(s)}else r.push(Ye(o));let a=e.type;if(a&8)oa(t,n,e.child,r);else if(a&32){let s=qf(e,n),l;for(;l=s();)r.push(l)}else if(a&16){let s=hy(n,e);if(Array.isArray(s))r.push(...s);else{let l=Sn(n[Je]);oa(l[A],l,s,r,!0)}}e=i?e.projectionNext:e.next}return r}function Sy(t,n){for(let e=et;e<t.length;e++){let r=t[e],i=r[A].firstChild;i!==null&&oa(r[A],r,i,n)}}function Iy(t){if(t[Br]!==null){for(let n of t[Br])n.impl.addSequence(n);t[Br].length=0}}var My=[];function yS(t){return t[_t]??vS(t)}function vS(t){let n=My.pop()??Object.create(CS);return n.lView=t,n}function _S(t){t.lView[_t]!==t&&(t.lView=null,My.push(t))}var CS=z(_({},$n),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{$r(t.lView)},consumerOnSignalRead(){this.lView[_t]=this}});function DS(t){let n=t[_t]??Object.create(xS);return n.lView=t,n}var xS=z(_({},$n),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=Sn(t.lView);for(;n&&!Ny(n[A]);)n=Sn(n);n&&Su(n)},consumerOnSignalRead(){this.lView[_t]=this}});function Ny(t){return t.type!==2}function Ty(t){if(t[En]===null)return;let n=!0;for(;n;){let e=!1;for(let r of t[En])if(r.dirty&&(e=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()),t[En]===null))return;n=e&&!!(t[k]&4096)}}var wS=100;function Ay(t,n=0){let r=t[dn].rendererFactory,i=!1;i||r.begin?.();try{ES(t,n)}finally{i||r.end?.()}}function ES(t,n){let e=Vu();try{Fo(!0),Df(t,n);let r=0;for(;Yo(t);){if(r===wS)throw new v(103,!1);r++,Df(t,1)}}finally{Fo(e)}}function SS(t,n,e,r){if(zr(n))return;let i=n[k],o=!1,a=!1;dl(n);let s=!0,l=null,c=null;o||(Ny(t)?(c=yS(n),l=Cn(c)):as()===null?(s=!1,c=DS(n),l=Cn(c)):n[_t]&&(qn(n[_t]),n[_t]=null));try{Eu(n),yg(t.bindingStartIndex),e!==null&&_y(t,n,e,2,r);let d=(i&3)===3;if(!o)if(d){let m=t.preOrderCheckHooks;m!==null&&_l(n,m,null)}else{let m=t.preOrderHooks;m!==null&&Cl(n,m,0,null),qu(n,0)}if(a||IS(n),Ty(n),ky(n,0),t.contentQueries!==null&&Qb(t,n),!o)if(d){let m=t.contentCheckHooks;m!==null&&_l(n,m)}else{let m=t.contentHooks;m!==null&&Cl(n,m,1),qu(n,1)}NS(t,n);let f=t.components;f!==null&&Fy(n,f,0);let p=t.viewQuery;if(p!==null&&df(2,p,r),!o)if(d){let m=t.viewCheckHooks;m!==null&&_l(n,m)}else{let m=t.viewHooks;m!==null&&Cl(n,m,2),qu(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[tl]){for(let m of n[tl])m();n[tl]=null}o||(Iy(n),n[k]&=-73)}catch(d){Ry(n,d,o)}finally{c!==null&&(Wn(c,l),s&&_S(c)),ul()}}function Ry(t,n,e){let r=!1,i=n,o=t,a=N(null);try{for(;o!==null;){if(Rt(o)){o=o[Oe];continue}let s=o[ki];if(s)try{let l=t[Je][We],c=l?.constructor,d={declarationInstance:l,declarationType:c,caughtBy:s},f=N(null);try{s(Og(i),d)}finally{N(f)}r=!0;break}catch(l){i=l}o=o[Oe]}}finally{N(a)}if(!r)throw e||$r(t),i}function ky(t,n){for(let e=Gb(t);e!==null;e=Wb(e))for(let r=et;r<e.length;r++){let i=e[r];Oy(i,n)}}function IS(t){for(let n=Gb(t);n!==null;n=Wb(n)){if(!(n[k]&2))continue;let e=n[Ur];for(let r=0;r<e.length;r++){let i=e[r];Su(i)}}}function MS(t,n,e){ce(ne.ComponentStart);let r=Ot(n,t);try{Oy(r,e)}finally{ce(ne.ComponentEnd,r[We])}}function Oy(t,n){il(t)&&Df(t,n)}function Df(t,n){let r=t[A],i=t[k],o=t[_t],a=!!(n===0&&i&16);if(a||=!!(i&64&&n===0),a||=!!(i&1024),a||=!!(o?.dirty&&pi(o)),a||=!1,o&&(o.dirty=!1),t[k]&=-5121,a)SS(r,t,r.template,t[We]);else if(i&4096){let s=N(null);try{try{Ty(t)}catch(c){Ry(t,c,!1)}ky(t,1);let l=r.components;l!==null&&Fy(t,l,1),Iy(t)}finally{N(s)}}}function Fy(t,n,e){for(let r=0;r<n.length;r++)MS(t,n[r],e)}function NS(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let r=0;r<e.length;r++){let i=e[r];if(i<0)tr(~i);else{let o=i,a=e[++r],s=e[++r];_g(a,o);let l=n[o];ce(ne.HostBindingsUpdateStart,l);try{s(2,l)}finally{ce(ne.HostBindingsUpdateEnd,l)}}}}finally{tr(-1)}}function lm(t,n){let e=Vu()?64:1088;for(t[dn].changeDetectionScheduler?.notify(n);t;){t[k]|=e;let r=Sn(t);if(Oi(t)&&!r)return t;t=r}return null}function Py(t,n,e,r){return[t,!0,0,n,null,r,null,e,null,null]}function TS(t,n){let e=et+n;if(e<t.length)return t[e]}function cm(t,n,e,r=!0){let i=n[A];if(RS(i,n,t,e),r){let a=Cf(e,t),s=n[Ee],l=s.parentNode(t[Hr]);l!==null&&UE(i,t[Ge],s,n,l,a)}let o=n[Ti];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function AS(t,n){let e=Tl(t,n);return e!==void 0&&Qf(e[A],e),e}function Tl(t,n){if(t.length<=et)return;let e=et+n,r=t[e];if(r){let i=r[er];i!==null&&i!==t&&Kf(i,r),n>0&&(t[e-1][At]=r[At]);let o=Uo(t,et+n);HE(r[A],r);let a=o[un];a!==null&&a.detachView(o[A]),r[Oe]=null,r[At]=null,r[k]&=-129}return r}function RS(t,n,e,r){let i=et+r,o=e.length;r>0&&(e[i-1][At]=n),r<o-et?(n[At]=e[i],pu(e,et+r,n)):(e.push(n),n[At]=null),n[Oe]=e;let a=n[er];a!==null&&e!==a&&Ly(a,n);let s=n[un];s!==null&&s.insertView(t),ol(n),n[k]|=128}function Ly(t,n){let e=t[Ur],r=n[Oe];if(Tn(r))t[k]|=2;else{let i=r[Oe][Je];n[Je]!==i&&(t[k]|=2)}e===null?t[Ur]=[n]:e.push(n)}var ir=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[A];return oa(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[We]}set context(n){this._lView[We]=n}get destroyed(){return zr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Oe];if(Rt(n)){let e=n[Go],r=e?e.indexOf(this):-1;r>-1&&(Tl(n,r),Uo(e,r))}this._attachedToViewContainer=!1}Qf(this._lView[A],this._lView)}onDestroy(n){al(this._lView,n)}markForCheck(){lm(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[k]&=-129}reattach(){ol(this._lView),this._lView[k]|=128}detectChanges(){this._lView[k]|=1024,Ay(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new v(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Oi(this._lView),e=this._lView[er];e!==null&&!n&&Kf(e,this._lView),fy(this._lView[A],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new v(902,!1);this._appRef=n;let e=Oi(this._lView),r=this._lView[er];r!==null&&!e&&Ly(r,this._lView),ol(this._lView)}};var Dt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=kS;constructor(e,r,i){this._declarationLView=e,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,r){return this.createEmbeddedViewImpl(e,r)}createEmbeddedViewImpl(e,r,i){let o=sm(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:r,dehydratedView:i});return new ir(o)}}return t})();function kS(){return Wl(qe(),P())}function Wl(t,n){return t.type&4?new Dt(n,t,qi(t,n)):null}function Jr(t,n,e,r,i){let o=t.data[n];if(o===null)o=OS(t,n,e,r,i),vg()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=r,o.attrs=i;let a=hg();o.injectorIndex=a===null?-1:a.injectorIndex}return Gr(o,!0),o}function OS(t,n,e,r,i){let o=Ou(),a=Fu(),s=a?o:o&&o.parent,l=t.data[n]=PS(t,s,e,n,r,i);return FS(t,l,o,a),l}function FS(t,n,e,r){t.firstChild===null&&(t.firstChild=n),e!==null&&(r?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function PS(t,n,e,r,i,o){let a=n?n.injectorIndex:-1,s=0;return Au()&&(s|=128),{type:e,index:r,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:i,namespace:Hu(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var LS=()=>null,VS=()=>null;function xf(t,n){return LS(t,n)}function jS(t,n,e){return VS(t,n,e)}var Vy=class{},Fe=class{},ve=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>BS()};function BS(){let t=P(),n=qe(),e=Ot(n.index,t);return(Tn(e)?e:t)[Ee]}var jy=(()=>{class t{static \u0275prov=Z({token:t,providedIn:"root",factory:()=>null})}return t})();function By(t){return t.debugInfo?.className||t.type.name||null}var xl={},Al=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,r){let i=this.injector.get(n,xl,r);return i!==xl||e===xl?i:this.parentInjector.get(n,e,r)}};function HS(t,n,e){return t[n]=e}function Pn(t,n,e){if(e===ft)return!1;let r=t[n];return Object.is(r,e)?!1:(t[n]=e,!0)}function Hy(t,n,e,r){let i=Pn(t,n,e);return Pn(t,n+1,r)||i}function Ui(t,n,e){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&eE(i,o);let a=An(t)?Ot(t.index,n):n;lm(a,5);let s=n[We],l=ib(n,s,e,i),c=r.__ngNextListenerFn__;for(;c;)l=ib(n,s,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function ib(t,n,e,r){let i=N(null);try{return ce(ne.OutputStart,n,e),e(r)!==!1}catch(o){return mS(t,o),!1}finally{ce(ne.OutputEnd,n,e),N(i)}}function Uy(t,n,e,r,i,o,a,s){let l=Wo(t),c=!1,d=null;if(!r&&l&&(d=zS(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let f=kt(t,e),p=r?r(f):f;nE(e,p,o,s),r||(s.__ngNativeEl__=f);let m=i.listen(p,o,s);if(!US(o)){let h=r?y=>r(Ye(y[t.index])):t.index;zy(h,n,e,o,s,m,!1)}}return c}function US(t){return t.startsWith("animation")||t.startsWith("transition")}function zS(t,n,e,r){let i=t.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let a=i[o];if(a===e&&i[o+1]===r){let s=n[Ai],l=i[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function zy(t,n,e,r,i,o,a){let s=n.firstCreatePass?Mu(n):null,l=Iu(e),c=l.length;l.push(i,o),s&&s.push(r,t,c,(c+1)*(a?-1:1))}function ob(t,n,e,r,i){let o=null,a=null,s=null,l=!1,c=t.directiveToIndex.get(e.type);if(typeof c=="number"?o=c:[o,a,s]=c,a!==null&&s!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,r)){let d=t.hostDirectiveOutputs[r];for(let f=0;f<d.length;f+=2){let p=d[f];if(p>=a&&p<=s)l=!0,Rl(t,n,p,d[f+1],r,i);else if(p>s)break}}return Object.hasOwn(e.outputs,r)&&(l=!0,Rl(t,n,o,r,r,i)),l}function Rl(t,n,e,r,i,o){let a=n[e],s=n[A],c=s.data[e].outputs[r],f=a[c].subscribe(o);zy(t.index,s,n,i,o,f,!0)}function ql(){$S()}function $S(){let t=P(),n=ye(),e=qe();if(n.firstCreatePass&&WS(n,e),e.controlDirectiveIndex===-1)return;Vn("NgSignalForms");let r=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(r,new kl(t,n,e))}function Yl(){GS()}function GS(){let t=P(),n=ye(),e=Zo();if(e.controlDirectiveIndex===-1)return;let r=n.data[e.controlDirectiveIndex].controlDef,i=t[e.controlDirectiveIndex];r.update(i,new kl(t,n,e))}var kl=class{lView;tView;tNode;hasPassThrough;constructor(n,e,r){this.lView=n,this.tView=e,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return kt(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){let r=this.tView.data[this.tNode.customControlIndex];ob(this.tNode,this.lView,r,n,Ui(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];ob(this.tNode,this.lView,r,e,Ui(this.tNode,this.lView,n))}setInputOnDirectives(n,e,r){let i=this.tNode.inputs?.[n],o=this.tNode.hostDirectiveInputs?.[n];if(!i&&!o)return!1;let a=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let l=this.lView[s],c=this.tView.data[s];(!r||r(sb(l,c,n),l))&&(Zr(c,l,n,e),a=!0)}if(o)for(let s=0;s<o.length;s+=2){let l=o[s];if(l===this.tNode.controlDirectiveIndex)continue;let c=this.lView[l],d=o[s+1],f=this.tView.data[l];(!r||r(sb(c,f,n),c))&&(Zr(f,c,d,e),a=!0)}return a}setCustomControlModelInput(n){let e=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";pS(this.tNode,this.tView,this.lView,e,r,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[n]===!0}_buildCustomControlInputCache(n){let e={};for(let r in n.inputs)e[r]=!0;if(n.hostDirectives!==null){let r=[...n.hostDirectives];for(;r.length>0;){let i=r.shift();if(typeof i!="function"){for(let a in i.inputs)e[i.inputs[a]]=!0;let o=ab(i.directive);o!==null&&r.push(...o);continue}for(let o of i()){if(typeof o=="function")continue;if(o.inputs)for(let s=0;s<o.inputs.length;s+=2){let l=o.inputs[s+1]||o.inputs[s];e[l]=!0}let a=ab(o.directive);a!==null&&r.push(...a)}}}return e}};function ab(t){return typeof t=="function"&&"\u0275dir"in t?t.\u0275dir.hostDirectives??null:null}function sb(t,n,e){if(!n.inputs||!Object.hasOwn(n.inputs,e))return;let[r,i]=n.inputs[e];if((i&da.SignalBased)!==0){let a=t[r][Te];return a.value===Vl?void 0:a.value}return t[r]}function WS(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++)if(t.data[i].controlDef){n.controlDirectiveIndex=i;break}if(n.controlDirectiveIndex===-1)return;let r=t.data[n.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(n.inputs?.[r.passThroughInput]?.length??0)>1){n.flags|=4096;return}qS(t,n)}function qS(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let r=t.data[e];if(!(n.directiveToIndex&&!n.directiveToIndex.has(r.type))){if(lb(r,"value")){n.flags|=1024,n.customControlIndex=e;return}if(lb(r,"checked")){n.flags|=2048,n.customControlIndex=e;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let e=(r,i)=>{let o=n.hostDirectiveInputs[r],a=n.hostDirectiveOutputs[r+"Change"];if(!o||!a)return!1;for(let s=0;s<o.length;s+=2){let l=o[s];for(let c=0;c<a.length;c+=2){let d=a[c];if(l===d)for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[p,m,h]=f;if(l>=m&&l<=h)return n.flags|=i,n.customControlIndex=p,!0}}}return!1};if(e("value",1024)||e("checked",2048))return}}function lb(t,n){return YS(t,n)&&XS(t,n+"Change")}function YS(t,n){return n in t.inputs}function XS(t,n){return n in t.outputs}var wf=Symbol("BINDING");var ei=new g("");function Ol(t,n,e){let r=e?t.styles:null,i=e?t.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)i=Ys(i,s);else if(o==2){let l=s,c=n[++a];r=Ys(r,l+": "+c+";")}}e?t.styles=r:t.stylesWithoutHost=r,e?t.classes=i:t.classesWithoutHost=i}function ae(t,n=0){let e=P();if(e===null)return T(t,n);let r=qe();return Vb(r,e,Be(t),n)}function dm(){let t="invalid";throw new Error(t)}function $y(t,n,e,r,i){let o=r===null?null:{"":-1},a=i(t,e);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}QS(t,n,e,s,o,l,c)}o!==null&&r!==null&&ZS(e,r,o)}function ZS(t,n,e){let r=t.localNames=[];for(let i=0;i<n.length;i+=2){let o=e[n[i+1]];if(o==null)throw new v(-301,!1);r.push(n[i],o)}}function KS(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function QS(t,n,e,r,i,o,a){let s=r.length,l=null;for(let p=0;p<s;p++){let m=r[p];l===null&&fn(m)&&(l=m,KS(t,e,p)),af(Ml(e,n),t,m.type)}i0(e,t.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let m=r[p];m.providersResolver&&m.providersResolver(m)}let c=!1,d=!1,f=yy(t,n,s,null);s>0&&(e.directiveToIndex=new Map);for(let p=0;p<s;p++){let m=r[p];if(e.mergedAttrs=zi(e.mergedAttrs,m.hostAttrs),e0(t,e,n,f,m),r0(f,m,i),a!==null&&a.has(m)){let[y,C]=a.get(m);e.directiveToIndex.set(m.type,[f,y+e.directiveStart,C+e.directiveStart])}else(o===null||!o.has(m))&&e.directiveToIndex.set(m.type,f);m.contentQueries!==null&&(e.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(e.flags|=64);let h=m.type.prototype;!c&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(h.ngOnChanges||h.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}JS(t,e,o)}function JS(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=t.data[r];if(e===null||!e.has(i))cb(0,n,i,r),cb(1,n,i,r),ub(n,r,!1);else{let o=e.get(i);db(0,n,o,r),db(1,n,o,r),ub(n,r,!0)}}}function cb(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a;t===0?(a=n.inputs??={},Gy(n,o)):a=n.outputs??={},a[o]??=[],a[o].push(r)}}function db(t,n,e,r){let i=t===0?e.inputs:e.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a=i[o],s;t===0?(s=n.hostDirectiveInputs??={},Gy(n,a)):s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(r,o)}}function Gy(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function ub(t,n,e){let{attrs:r,inputs:i,hostDirectiveInputs:o}=t;if(r===null||!e&&i===null||e&&o===null||Wf(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let a=null,s=0;for(;s<r.length;){let l=r[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!e&&Object.hasOwn(i,l)){let c=i[l];for(let d of c)if(d===n){a??=[],a.push(l,r[s+1]);break}}else if(e&&Object.hasOwn(o,l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],r[s+1]);break}}s+=2}t.initialInputs??=[],t.initialInputs.push(a)}function e0(t,n,e,r,i){t.data[r]=i;let o=i.factory||(i.factory=Zn(i.type,!0)),a=new Xr(o,fn(i),ae,null);t.blueprint[r]=a,e[r]=a,t0(t,n,r,yy(t,e,i.hostVars,ft),i)}function t0(t,n,e,r,i){let o=i.hostBindings;if(o){let a=t.hostBindingOpCodes;a===null&&(a=t.hostBindingOpCodes=[]);let s=~n.index;n0(a)!=s&&a.push(s),a.push(e,r,o)}}function n0(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function r0(t,n,e){if(e){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)e[n.exportAs[r]]=t;fn(n)&&(e[""]=t)}}function i0(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function Wy(t,n,e,r,i,o,a,s){let l=n[A],c=l.consts,d=Gt(c,a),f=Jr(l,t,e,r,d);return o&&$y(l,n,f,Gt(c,s),i),f.mergedAttrs=zi(f.mergedAttrs,f.attrs),f.attrs!==null&&Ol(f,f.attrs,!1),f.mergedAttrs!==null&&Ol(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function qy(t,n){Nb(t,n),Du(n)&&t.queries.elementEnd(n)}function o0(t,n,e,r,i,o){let a=n.consts,s=Gt(a,i),l=Jr(n,t,e,r,s);if(l.mergedAttrs=zi(l.mergedAttrs,l.attrs),o!=null){let c=Gt(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Ol(l,l.attrs,!1),l.mergedAttrs!==null&&Ol(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}var ea=void 0;function a0(t){let n=Math.floor(Math.abs(t)),e=t.toString().replace(/^[^.]*\.?/,"").length;return n===1&&e===0?1:5}var s0=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],ea,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],ea,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",ea,ea,ea],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",a0],Zu=Object.create(null);function wt(t){let n=l0(t),e=fb(n);if(e)return e;let r=n.split("-")[0];if(e=fb(r),e)return e;if(r==="en")return s0;throw new v(701,!1)}function fb(t){if(!(t in Zu)){let n=cn.ng&&cn.ng.common&&cn.ng.common.locales&&cn.ng.common.locales[t];return n!==void 0&&(Zu[t]=n),n}return Zu[t]}var Pe={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};function l0(t){return t.toLowerCase().replace(/_/g,"-")}var um="en-US";function c0(){return typeof $localize<"u"&&$localize.locale||um}var ua=new g("",{factory:()=>u(ua,{optional:!0,skipSelf:!0})||c0()});var Yy=typeof ShadowRoot<"u",d0=typeof Document<"u";function u0(t){return Object.keys(t).map(n=>{let[e,r,i]=t[n],o={propName:e,templateName:n,isSignal:(r&da.SignalBased)!==0};return i&&(o.transform=i),o})}function f0(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function m0(t,n,e){let r=n instanceof ke?n:n?.injector;return r&&t.getStandaloneInjector!==null&&(r=t.getStandaloneInjector(r)||r),r?new Al(e,r):e}function p0(t){let n=t.get(Fe,null);if(n===null)throw new v(407,!1);let e=t.get(jy,null),r=t.get(ln,null),i=t.get(Zt,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:r,ngReflect:!1,tracingService:i,locale:t.get(ua,um)}}function h0(t,n,e){let r=Xy(t);return ay(n,r,r==="svg"?xu:r==="math"?sg:e)}function g0(t){if((t&&"localName"in t&&typeof t.localName=="string"?t.localName:t?.tagName)?.toLowerCase()==="script")throw new v(905,!1)}function Xy(t){return(t.selectors[0][0]||"div").toLowerCase()}var Gi=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=u0(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=f0(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=OE(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,r,i,o,a,s,l){ce(ne.DynamicComponentStart);let c=N(null);try{let d=this.componentDef,f=m0(d,i||this.ngModule,n),p=p0(f),m=p.tracingService;return m&&m.componentCreate?m.componentCreate(By(d),()=>this.createComponentRef(p,f,e,r,o,a,s,l)):this.createComponentRef(p,f,e,r,o,a,s,l)}finally{N(c)}}createComponentRef(n,e,r,i,o,a,s,l){let c=this.componentDef,d=b0(i,c,a,o,l),f=n.rendererFactory.createRenderer(null,c),p=i?nS(f,i,c.encapsulation,e):h0(c,f,s??null);g0(p);let m=e.get(ei,null),h=y0(p,()=>e.get(w,null)??Yb());m&&m.addHost(h);let y=a?.some(mb)||o?.some(Y=>typeof Y!="function"&&Y.bindings.some(mb)),C=nm(null,d,null,512|by(c),null,null,n,f,e,null,Kb(p,e,!0));m&&Yy&&h instanceof ShadowRoot&&al(C,()=>{m.removeHost(h)}),C[Se]=p,dl(C);let D=null;try{let Y=Wy(Se,C,2,"#host",()=>d.directiveRegistry,!0,0);ly(f,p,Y),$i(p,C),im(d,C,Y),Jb(d,Y,C),qy(d,Y),r!==void 0&&_0(Y,this.ngContentSelectors,r),D=Ot(Y.index,C),C[We]=D[We],am(d,C,null)}catch(Y){throw D!==null&&lf(D),lf(C),Y}finally{ce(ne.DynamicComponentEnd),ul()}return new Fl(this.componentType,C,!!y)}};function b0(t,n,e,r,i){let o=t?["ng-version","22.3.0"]:FE(n.selectors[0]),a=null,s=null,l=0;if(e)for(let f of e)l+=f[wf].requiredVars,f.create&&(f.targetIdx=0,(a??=[]).push(f)),f.update&&(f.targetIdx=0,(s??=[]).push(f));if(r)for(let f=0;f<r.length;f++){let p=r[f];if(typeof p!="function")for(let m of p.bindings){l+=m[wf].requiredVars;let h=f+1;m.create&&(m.targetIdx=h,(a??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let c=[n];if(r)for(let f of r){let p=typeof f=="function"?f:f.type,m=Bo(p);c.push(m)}return tm(0,null,v0(a,s),1,l,c,null,null,null,[o],null)}function y0(t,n){let e=t.getRootNode?.();return d0&&e instanceof Document?e.head:e&&Yy&&e instanceof ShadowRoot?e:n().head}function v0(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let r of t)r.create();if(e&2&&n)for(let r of n)r.update()}}function mb(t){let n=t[wf].kind;return n==="input"||n==="twoWay"}var Fl=class extends Vy{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,r){super(),this._rootLView=e,this._hasInputBindings=r,this._tNode=nl(e[A],Se),this.location=qi(this._tNode,e),this.instance=Ot(this._tNode.index,e)[We],this.hostView=this.changeDetectorRef=new ir(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let i=this._rootLView,o=om(r,i[A],i,n,e);this.previousInputValues.set(n,e);let a=Ot(r.index,i);lm(a,1)}get injector(){return new kn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function _0(t,n,e){let r=t.projection=[];for(let i=0;i<n.length;i++){let o=e[i];r.push(o!=null&&o.length?Array.from(o):null)}}var Pt=(()=>{class t{static __NG_ELEMENT_ID__=C0}return t})();function C0(){let t=qe();return Zy(t,P())}var Ef=class t extends Pt{_lContainer;_hostTNode;_hostLView;constructor(n,e,r){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=r}get element(){return qi(this._hostTNode,this._hostLView)}get injector(){return new kn(this._hostTNode,this._hostLView)}get parentInjector(){let n=Pf(this._hostTNode,this._hostLView);if(Rb(n)){let e=Sl(n,this._hostLView),r=El(n),i=e[A].data[r+8];return new kn(i,e)}else return new kn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=pb(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-et}createEmbeddedView(n,e,r){let i,o,a;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector,a=r.onError);let s=xf(this._lContainer,n.ssrId),l=n.createEmbeddedViewImpl(e||{},o,s);return a&&(l._lView[ki]=a),this.insertImpl(l,i,Nl(this._hostTNode,s)),l}createComponent(n,e,r,i,o,a,s){let l,c,d=e||{};l=d.index,r=d.injector,i=d.projectableNodes,o=d.environmentInjector||d.ngModuleRef,a=d.directives,s=d.bindings,c=d.onError;let f=new Gi(Kn(n)),p=r||this.parentInjector;if(!o&&f.ngModule==null){let Y=this.parentInjector.get(ke,null);Y&&(o=Y)}let m=Kn(f.componentType??{}),h=xf(this._lContainer,m?.id??null),y=h?.firstChild??null,C=f.create(p,i,y,o,a,s,this._getHostElementNamespace());return c&&(C.hostView._lView[ki]=c),this.insertImpl(C.hostView,l,Nl(this._hostTNode,h)),C}_getHostElementNamespace(){if(this._hostTNode.type&2){let n=this._hostTNode.parent??this._hostLView[Ge];return n!==null&&n.type&2&&typeof n.value=="string"&&n.value.toLowerCase()==="foreignobject"?null:n?.namespace??null}return this._hostTNode.namespace}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,r){let i=n._lView;if(cg(i)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=i[Oe],c=new t(l,l[Ge],l[Oe]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),a=this._lContainer;return cm(a,i,o,r),n.attachToViewContainerRef(),pu(Ku(a),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=pb(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),r=Tl(this._lContainer,e);r&&(Uo(Ku(this._lContainer),e),Qf(r[A],r))}detach(n){let e=this._adjustIndex(n,-1),r=Tl(this._lContainer,e);return r&&Uo(Ku(this._lContainer),e)!=null?new ir(r):null}_adjustIndex(n,e=0){return n??this.length+e}};function pb(t){return t[Go]}function Ku(t){return t[Go]||(t[Go]=[])}function Zy(t,n){let e,r=n[t.index];return Rt(r)?e=r:(e=Py(r,n,null,t),n[t.index]=e,rm(n,e)),x0(e,n,t,r),new Ef(e,t,n)}function D0(t,n){let e=t[Ee],r=e.createComment(""),i=kt(n,t),o=e.parentNode(i);return Yr(e,o,r,e.nextSibling(i),!1),r}var x0=S0,w0=()=>!1;function E0(t,n,e){return w0(t,n,e)}function S0(t,n,e,r){if(t[Hr])return;let i;e.type&8?i=Ye(r):i=D0(n,e),t[Hr]=i}var Sf=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},If=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let r=n.contentQueries!==null?n.contentQueries[0]:e.length,i=[];for(let o=0;o<r;o++){let a=e.getByIndex(o),s=this.queries[a.indexInDeclarationView];i.push(s.clone())}return new t(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)mm(n,e).matches!==null&&this.queries[e].setDirty()}},Pl=class{flags;read;predicate;constructor(n,e,r=null){this.flags=e,this.read=r,typeof n=="string"?this.predicate=A0(n):this.predicate=n}},Mf=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let r=0;r<this.length;r++){let i=e!==null?e.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Nf=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==e;)r=r.parent;return e===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,e,I0(e,o)),this.matchTNodeWithReadOption(n,e,Dl(e,n,o,!1,!1))}else r===Dt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,Dl(e,n,r,!1,!1))}matchTNodeWithReadOption(n,e,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===F||i===Pt||i===O||i===Dt&&e.type&4)this.addMatch(e.index,-2);else{let o=Dl(e,n,i,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,r)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function I0(t,n){let e=t.localNames;if(e!==null){for(let r=0;r<e.length;r+=2)if(e[r]===n)return e[r+1]}return null}function M0(t,n){return t.type&11?qi(t,n):t.type&4?Wl(t,n):null}function N0(t,n,e,r){return e===-1?M0(n,t):e===-2?T0(t,n,r):ra(t,t[A],e,n)}function T0(t,n,e){if(e===F)return qi(n,t);if(e===Dt)return Wl(n,t);if(e===Pt)return Zy(n,t);if(e===O)return new kn(n,t)}function Ky(t,n,e,r){let i=n[un].queries[r];if(i.matches===null){let o=t.data,a=e.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(N0(n,d,a[l+1],e.metadata.read))}}i.matches=s}return i.matches}function Tf(t,n,e,r){let i=t.queries.getByIndex(e),o=i.matches;if(o!==null){let a=Ky(t,n,i,e);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)r.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let f=et;f<d.length;f++){let p=d[f];p[er]===p[Oe]&&Tf(p[A],p,c,r)}if(d[Ur]!==null){let f=d[Ur];for(let p=0;p<f.length;p++){let m=f[p];Tf(m[A],m,c,r)}}}}}return r}function fm(t,n){return t[un].queries[n].queryList}function Qy(t,n,e){let r=new On((e&4)===4);return fg(t,n,r,r.destroy),(n[un]??=new If).queries.push(new Sf(r))-1}function Jy(t,n,e){let r=ye();return r.firstCreatePass&&(tv(r,new Pl(t,n,e),-1),(n&2)===2&&(r.staticViewQueries=!0)),Qy(r,P(),n)}function ev(t,n,e,r){let i=ye();if(i.firstCreatePass){let o=qe();tv(i,new Pl(n,e,r),o.index),R0(i,t),(e&2)===2&&(i.staticContentQueries=!0)}return Qy(i,P(),e)}function A0(t){return t.split(",").map(n=>n.trim())}function tv(t,n,e){t.queries===null&&(t.queries=new Mf),t.queries.track(new Nf(n,e))}function R0(t,n){let e=t.contentQueries||(t.contentQueries=[]),r=e.length?e[e.length-1]:-1;n!==r&&e.push(t.queries.length-1,n)}function mm(t,n){return t.queries.getByIndex(n)}function nv(t,n){let e=t[A],r=mm(e,n);return r.crossesNgTemplate?Tf(e,t,n,[]):Ky(e,t,r,n)}function rv(t,n,e){let r,i=Do(()=>{r._dirtyCounter();let o=k0(r,t);if(n&&o===void 0)throw new v(-951,!1);return o});return r=i[Te],r._dirtyCounter=K(0),r._flatValue=void 0,i}function pm(t){return rv(!0,!1,t)}function hm(t){return rv(!0,!0,t)}function iv(t,n){let e=t[Te];e._lView=P(),e._queryIndex=n,e._queryList=fm(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(r=>r+1))}function k0(t,n){let e=t._lView,r=t._queryIndex;if(e===void 0||r===void 0||e[k]&4)return n?void 0:Qe;let i=fm(e,r),o=nv(e,r);return i.reset(o,Hb),n?i.first:i._changesDetected||t._flatValue===void 0?t._flatValue=i.toArray():t._flatValue}function ti(t){return!!t&&typeof t.then=="function"}function gm(t){return!!t&&typeof t.subscribe=="function"}var or=class{};var aa=class extends or{injector;instance=null;constructor(n){super();let e=new Pr([...n.providers,{provide:or,useValue:this}],n.parent||Mi(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ov(t,n,e=null){return new aa({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var O0=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let r=bu(!1,e.type),i=r.length>0?ov([r],this._injector,""):null;this.cachedInjectors.set(e,i)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Z({token:t,providedIn:"environment",factory:()=>new t(T(ke))})}return t})();function X(t){return la(()=>{let n=av(t),e=z(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==Vf.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(O0).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,data:t.data||{},encapsulation:t.encapsulation||Yt.Emulated,styles:t.styles||Qe,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Vn("NgStandalone"),sv(e);let r=t.dependencies;return e.directiveDefs=hb(r,F0),e.pipeDefs=hb(r,Gh),e.id=V0(e),e})}function F0(t){return Kn(t)||Bo(t)}function B(t){return la(()=>({type:t.type,bootstrap:t.bootstrap||Qe,declarations:t.declarations||Qe,imports:t.imports||Qe,exports:t.exports||Qe,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function P0(t,n){if(t==null)return Qn;let e={};for(let r in t)if(Object.hasOwn(t,r)){let i=t[r],o,a,s,l;Array.isArray(i)?(s=i[0],o=i[1],a=i[2]??o,l=i[3]||null):(o=i,a=i,s=da.None,l=null),e[o]=[r,s,l],n[o]=a}return e}function L0(t){if(t==null)return Qn;let n={};for(let e in t)Object.hasOwn(t,e)&&(n[t[e]]=e);return n}function M(t){return la(()=>{let n=av(t);return sv(n),n})}function bm(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function av(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Qn,exportAs:t.exportAs||null,standalone:t.standalone??!0,selectors:t.selectors||Qe,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:P0(t.inputs,n),outputs:L0(t.outputs),debugInfo:null}}function sv(t){t.features?.forEach(n=>n(t))}function hb(t,n){return t?()=>{let e=typeof t=="function"?t():t,r=[];for(let i of e){let o=n(i);o!==null&&r.push(o)}return r}:null}function V0(t){let n=0,e=typeof t.consts=="function"?"":t.consts,r=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var lv=new g("");var ym=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,r)=>{this.resolve=e,this.reject=r});appInits=u(lv,{optional:!0})??[];injector=u(O);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let i of this.appInits){let o=Ni(this.injector,i);if(ti(o))e.push(o);else if(gm(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});e.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{r()}).catch(i=>{this.reject(i)}),e.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function vm(t){return n=>{n.controlDef={create:(e,r)=>{e?.\u0275ngControlCreate(r)},update:(e,r)=>{e?.\u0275ngControlUpdate?.(r)},passThroughInput:t}}}function _m(t){let n=e=>{let r=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=j0,e.hostDirectives=r?t.map(Af):[t]):r?e.hostDirectives.unshift(...t.map(Af)):e.hostDirectives.unshift(t)};return n.ngInherit=!0,n}function j0(t){let n=[],e=!1,r=null,i=null;for(let o=0;o<t.length;o++){let a=t[o];if(a.hostDirectives!==null){let s=n.length;r??=new Map,i??=new Map,cv(a,n,r,t),i.set(a,[s,n.length-1])}o===0&&fn(a)&&(e=!0,n.push(a))}for(let o=e?1:0;o<t.length;o++)n.push(t[o]);return r!==null&&r.forEach((o,a)=>{B0(a.declaredInputs,o.inputs)}),[n,r,i]}function cv(t,n,e,r){if(t.hostDirectives!==null)for(let i of t.hostDirectives)if(typeof i=="function"){let o=i();for(let a of o)gb(Af(a),n,e,r)}else gb(i,n,e,r)}function gb(t,n,e,r){let i=Bo(t.directive);if(cv(i,n,e,r),e.has(i)){let o=e.get(i);bb(o,t.inputs,"input"),bb(o,t.outputs,"output")}else r.includes(i)||(e.set(i,t),n.push(i))}function bb(t,n,e){let r=e==="input"?t.inputs:t.outputs;Object.keys(n).forEach(i=>{let o=n[i];(!Object.hasOwn(r,i)||r[i]===o)&&(r[i]=o)})}function Af(t){return typeof t=="function"?{directive:Be(t),inputs:{},outputs:{}}:{directive:Be(t.directive),inputs:yb(t.inputs),outputs:yb(t.outputs)}}function yb(t){let n={};if(t!==void 0&&t.length>0)for(let e=0;e<t.length;e+=2)n[t[e]]=t[e+1];return n}function B0(t,n){for(let e in n)if(Object.hasOwn(n,e)){let r=n[e],i=t[e];t[r]=i}}function H0(t){return Object.getPrototypeOf(t.prototype).constructor}function he(t){let n=H0(t.type),e=!0,r=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let i,o=Object.hasOwn(n,Vo)?n[Vo]:void 0,a=Object.hasOwn(n,jo)?n[jo]:void 0;if(fn(t))i=o??a;else{if(o&&t.selectors&&t.selectors.length>0)throw new v(903,!1);i=o??a}if(i){if(e){r.push(i);let l=t;l.inputs=Qu(t.inputs),l.declaredInputs=Qu(t.declaredInputs),l.outputs=Qu(t.outputs);let c=i.hostBindings;c&&W0(t,c);let d=i.viewQuery,f=i.contentQueries;d&&$0(t,d),f&&G0(t,f),U0(t,i),$h(t.outputs,i.outputs);let p=i.data?.animation;if(p){let m=t.data??={};m.animation=(m.animation||[]).concat(p)}}let s=i.features;if(s)for(let l=0;l<s.length;l++){let c=s[l];c&&c.ngInherit&&c(t),c===he&&(e=!1)}}n=Object.getPrototypeOf(n)}z0(r)}function U0(t,n){for(let e in n.inputs){if(!Object.hasOwn(n.inputs,e)||Object.hasOwn(t.inputs,e))continue;let r=n.inputs[e];r!==void 0&&(t.inputs[e]=r,t.declaredInputs[e]=n.declaredInputs[e])}}function z0(t){let n=0,e=null;for(let r=t.length-1;r>=0;r--){let i=t[r];i.hostVars=n+=i.hostVars,i.hostAttrs=zi(i.hostAttrs,e=zi(e,i.hostAttrs))}}function Qu(t){return t===Qn?{}:t===Qe?[]:t}function $0(t,n){let e=t.viewQuery;e?t.viewQuery=(r,i)=>{n(r,i),e(r,i)}:t.viewQuery=n}function G0(t,n){let e=t.contentQueries;e?t.contentQueries=(r,i,o)=>{n(r,i,o),e(r,i,o)}:t.contentQueries=n}function W0(t,n){let e=t.hostBindings;e?t.hostBindings=(r,i)=>{n(r,i),e(r,i)}:t.hostBindings=n}function dv(t,n,e,r,i,o,a,s){if(e.firstCreatePass){t.mergedAttrs=zi(t.mergedAttrs,t.attrs);let d=t.tView=tm(2,t,i,o,a,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}s&&(t.flags|=s),Gr(t,!1);let l=Y0(e,n,t,r);ml()&&Jf(e,n,l,t),$i(l,n);let c=Py(l,n,l,t);n[r+Se]=c,rm(n,c),E0(c,t,n)}function q0(t,n,e,r,i,o,a,s,l,c,d){let f=e+Se,p;return n.firstCreatePass?(p=Jr(n,f,4,a||null,s||null),Tu()&&$y(n,t,p,Gt(n.consts,c),xy),Nb(n,p)):p=n.data[f],dv(p,t,n,e,r,i,o,l),Wo(p)&&im(n,t,p),c!=null&&Gl(t,p,d),p}function Xl(t,n,e,r,i,o,a,s,l,c,d){let f=e+Se,p;if(n.firstCreatePass){if(p=Jr(n,f,4,a||null,s||null),c!=null){let m=Gt(n.consts,c);p.localNames=[];for(let h=0;h<m.length;h+=2)p.localNames.push(m[h],-1)}}else p=n.data[f];return dv(p,t,n,e,r,i,o,l),c!=null&&Gl(t,p,d),p}function Lt(t,n,e,r,i,o,a,s){let l=P(),c=ye(),d=Gt(c.consts,o);return q0(l,c,t,n,e,r,i,d,void 0,a,s),Lt}function Zl(t,n,e,r,i,o,a,s){let l=P(),c=ye(),d=Gt(c.consts,o);return Xl(l,c,t,n,e,r,i,d,void 0,a,s),Zl}var Y0=X0;function X0(t,n,e,r){return pl(!0),n[Ee].createComment("")}var Cm=new g("");var Kl=new g("");function uv(){Td(t=>{let n="";throw new v(-600,n)})}var Z0=10;var Et=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(Rn);afterRenderManager=u(zl);zonelessEnabled=u(Jo);rootEffectScheduler=u(gl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Wr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ue(e=>!e))}constructor(){u(Zt,{optional:!0})}whenStable(){let e;return new Promise(r=>{e=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{e.unsubscribe()})}_injector=u(ke);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,r){return this.bootstrapImpl(e,r)}bootstrapImpl(e,r,i=O.NULL){return this._injector.get(S).run(()=>{if(ce(ne.BootstrapComponentStart),!this._injector.get(ym).done){let D="";throw new v(405,D)}let s=Kn(e),l=this._injector.get(or),c=new Gi(s,l);this.componentTypes.push(e);let{hostElement:d,directives:f,bindings:p}=K0(r),m=d||c.selector,h=c.create(i,[],m,l.injector,f,p),y=h.location.nativeElement,C=h.injector.get(Cm,null);return C?.registerApplication(y),h.onDestroy(()=>{this.detachView(h.hostView),na(this.components,h),C?.unregisterApplication(y)}),this._loadComponent(h),ce(ne.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ce(ne.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Ul.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ce(ne.ChangeDetectionEnd),new v(101,!1);let e=N(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,N(e),this.afterTick.next(),ce(ne.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Fe,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<Z0;){ce(ne.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ce(ne.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!Yo(i))continue;let o=r&&!this.zonelessEnabled?0:1;Ay(i,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>Yo(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let r=e;this._views.push(r),r.attachToAppRef(this)}detachView(e){let r=e;na(this._views,r),r.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(e),this._injector.get(Kl,[]).forEach(i=>i(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>na(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new v(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function K0(t){return t===void 0||typeof t=="string"||t instanceof Element?{hostElement:t}:t}function na(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function _e(t,n,e,r){let i=P(),o=Fi();if(Pn(i,o,n)){let a=ye(),s=Zo();uS(s,i,t,n,e,r)}return _e}function ge(t,n,e,r,i,o,a,s){Vn("NgControlFlow");let l=P(),c=ye(),d=Gt(c.consts,o);return Xl(l,c,t,n,e,r,i,d,256,a,s),Dm}function Dm(t,n,e,r,i,o,a,s){return Vn("NgControlFlow"),Q0(t,n,e,r,i,o,a,s),Dm}function Q0(t,n,e,r,i,o,a,s){let l=P(),c=ye(),d=Gt(c.consts,o);Xl(l,c,t,n,e,r,i,d,512,a,s)}function be(t,n){Vn("NgControlFlow");let e=P(),r=Fi(),i=e[r]!==ft?e[r]:-1,o=i!==-1?vb(e,Se+i):void 0,a=0;if(Pn(e,r,t)){let s=N(null);try{if(o!==void 0&&AS(o,a),t!==-1){let l=Se+t,c=vb(e,l),d=J0(e[A],l),f=jS(c,d,e),p=sm(e,d,n,{dehydratedView:f});cm(c,p,a,Nl(d,f))}}finally{N(s)}}else if(o!==void 0){let s=TS(o,a);s!==void 0&&(s[We]=n)}}function vb(t,n){return t[n]}function J0(t,n){return nl(t,n)}function mt(t,n,e){let r=P(),i=Fi();if(Pn(r,i,n)){let o=ye(),a=Zo();aS(a,r,t,n,r[Ee],e)}return mt}function Rf(t,n,e,r,i){om(n,t,e,i?"class":"style",r)}function I(t,n,e,r){let i=P(),o=i[A],a=t+Se,s=o.firstCreatePass?Wy(a,i,2,n,xy,Tu(),e,r):o.data[a];if(An(s)){let l=i[dn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(By(c),()=>(_b(t,n,i,s,r),I))}}return _b(t,n,i,s,r),I}function _b(t,n,e,r,i){if(wy(r,e,t,n,fv),Wo(r)){let o=e[A];im(o,e,r),Jb(o,r,e)}i!=null&&Gl(e,r)}function R(){let t=ye(),n=qe(),e=Ey(n);return t.firstCreatePass&&qy(t,e),Ru(e)&&ku(),Nu(),e.classesWithoutHost!=null&&Ow(e)&&Rf(t,e,P(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&Fw(e)&&Rf(t,e,P(),e.stylesWithoutHost,!1),R}function He(t,n,e,r){return I(t,n,e,r),R(),He}function Le(t,n,e,r){let i=P(),o=i[A],a=t+Se,s=o.firstCreatePass?o0(a,o,2,n,e,r):o.data[a];return wy(s,i,t,n,fv),r!=null&&Gl(i,s),Le}function Ue(){let t=qe(),n=Ey(t);return Ru(n)&&ku(),Nu(),Ue}function Xe(t,n,e,r){return Le(t,n,e,r),Ue(),Xe}var fv=(t,n,e,r,i)=>(pl(!0),ay(n[Ee],r,Hu()));function fa(){return P()}function Kt(t,n,e){let r=P(),i=Fi();if(Pn(r,i,n)){let o=ye(),a=Zo();Cy(a,r,t,n,r[Ee],e)}return Kt}function Ae(t,n,e){let r=P(),i=ye(),o=qe();return eI(i,r,r[Ee],o,t,n,e),Ae}function Ql(t,n,e){let r=P(),i=ye(),o=qe();return(o.type&3||e)&&Uy(o,i,r,e,r[Ee],t,n,Ui(o,r,n)),Ql}function eI(t,n,e,r,i,o,a){let s=!0,l=null;if((r.type&3||a)&&(l??=Ui(r,n,o),Uy(r,t,n,a,e,i,o,l)&&(s=!1)),s){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let p=d[f],m=d[f+1];l??=Ui(r,n,o),Rl(r,n,p,m,i,l)}if(c&&c.length)for(let f of c)l??=Ui(r,n,o),Rl(r,n,f,i,i,l)}}function Ve(t=1){return Sg(t)}function tI(t,n){let e=null,r=NE(t);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){e=i;continue}if(r===null?dy(t,o,!0):RE(r,o))return i}return e}function ze(t){let n=P()[Je][Ge];if(!n.projection){let e=t?t.length:1,r=n.projection=Kh(e,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=t?tI(o,t):0;a!==null&&(i[a]?i[a].projectionNext=o:r[a]=o,i[a]=o)}o=o.next}}}function Q(t,n=0,e,r,i,o){let a=P(),s=ye(),l=r?t+1:null;l!==null&&Xl(a,s,l,r,i,o,null,e);let c=Jr(s,Se+t,16,null,e||null);c.projection===null&&(c.projection=n),Pu();let f=!a[Ti]||Au();a[Je][Ge].projection[c.projection]===null&&l!==null?nI(a,s,l):f&&!jl(c)&&ZE(s,a,c)}function nI(t,n,e){let r=Se+e,i=n.data[r],o=t[r],a=xf(o,i.tView.ssrId),s=sm(t,i,void 0,{dehydratedView:a});cm(o,s,0,Nl(i,a))}function ar(t,n,e,r){return ev(t,n,e,r),ar}function yn(t,n,e){return Jy(t,n,e),yn}function Ce(t){let n=P(),e=ye(),r=cl();Xo(r+1);let i=mm(e,r);if(t.dirty&&lg(n)===((i.metadata.flags&2)===2)){if(i.matches===null)t.reset([]);else{let o=nv(n,r);t.reset(o,Hb),t.notifyOnChanges()}return!0}return!1}function De(){return fm(P(),cl())}function Jl(t,n,e,r,i){return iv(n,ev(t,e,r,i)),Jl}function ec(t,n,e,r){return iv(t,Jy(n,e,r)),ec}function tc(t=1){Xo(cl()+t)}function sr(t){let n=Lu();return rl(n,Se+t)}function vl(t,n){return t<<17|n<<2}function Kr(t){return t>>17&32767}function rI(t){return(t&2)==2}function iI(t,n){return t&131071|n<<17}function kf(t){return t|2}function Wi(t){return(t&131068)>>2}function Ju(t,n){return t&-131069|n<<2}function oI(t){return(t&1)===1}function Of(t){return t|1}function aI(t,n,e,r,i,o){let a=o?n.classBindings:n.styleBindings,s=Kr(a),l=Wi(a);t[r]=e;let c=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Ii(f,d)>0)&&(c=!0)}else d=e;if(i)if(l!==0){let p=Kr(t[s+1]);t[r+1]=vl(p,s),p!==0&&(t[p+1]=Ju(t[p+1],r)),t[s+1]=iI(t[s+1],r)}else t[r+1]=vl(s,0),s!==0&&(t[s+1]=Ju(t[s+1],r)),s=r;else t[r+1]=vl(l,0),s===0?s=r:t[l+1]=Ju(t[l+1],r),l=r;c&&(t[r+1]=kf(t[r+1])),Cb(t,d,r,!0),Cb(t,d,r,!1),sI(n,d,t,r,o),a=vl(s,l),o?n.classBindings=a:n.styleBindings=a}function sI(t,n,e,r,i){let o=i?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&Ii(o,n)>=0&&(e[r+1]=Of(e[r+1]))}function Cb(t,n,e,r){let i=t[e+1],o=n===null,a=r?Kr(i):Wi(i),s=!1;for(;a!==0&&(s===!1||o);){let l=t[a],c=t[a+1];lI(l,n)&&(s=!0,t[a+1]=r?Of(c):kf(c)),a=r?Kr(c):Wi(c)}s&&(t[e+1]=r?kf(i):Of(i))}function lI(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?Ii(t,n)>=0:!1}var qt={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function cI(t){return t.substring(qt.key,qt.keyEnd)}function dI(t){return uI(t),mv(t,pv(t,0,qt.textEnd))}function mv(t,n){let e=qt.textEnd;return e===n?-1:(n=qt.keyEnd=fI(t,qt.key=n,e),pv(t,n,e))}function uI(t){qt.key=0,qt.keyEnd=0,qt.value=0,qt.valueEnd=0,qt.textEnd=t.length}function pv(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function fI(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function lr(t,n,e){return hv(t,n,e,!1),lr}function J(t,n){return hv(t,n,null,!0),J}function Qt(t){pI(_I,mI,t,!0)}function mI(t,n){for(let e=dI(n);e>=0;e=mv(n,e))Js(t,cI(n),!0)}function hv(t,n,e,r){let i=P(),o=ye(),a=sl(2);if(o.firstUpdatePass&&bv(o,t,a,r),n!==ft&&Pn(i,a,n)){let s=o.data[hn()];yv(o,s,i,i[Ee],t,i[a+1]=DI(n,e),r,a)}}function pI(t,n,e,r){let i=ye(),o=sl(2);i.firstUpdatePass&&bv(i,null,o,r);let a=P();if(e!==ft&&Pn(a,o,e)){let s=i.data[hn()];if(vv(s,r)&&!gv(i,o)){let l=r?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(e=Ys(l,e||"")),Rf(i,s,a,e,r)}else CI(i,s,a,a[Ee],a[o+1],a[o+1]=vI(t,n,e),r,o)}}function gv(t,n){return n>=t.expandoStartIndex}function bv(t,n,e,r){let i=t.data;if(i[e+1]===null){let o=i[hn()],a=gv(t,e);vv(o,r)&&n===null&&!a&&(n=!1),n=hI(i,o,n,r),aI(i,o,n,e,a,r)}}function hI(t,n,e,r){let i=Dg(t),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(e=ef(null,t,n,e,r),e=sa(e,n.attrs,r),o=null);else{let a=n.directiveStylingLast;if(a===-1||t[a]!==i)if(e=ef(i,t,n,e,r),o===null){let l=gI(t,n,r);l!==void 0&&Array.isArray(l)&&(l=ef(null,t,n,l[1],r),l=sa(l,n.attrs,r),bI(t,n,r,l))}else o=yI(t,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),e}function gI(t,n,e){let r=e?n.classBindings:n.styleBindings;if(Wi(r)!==0)return t[Kr(r)]}function bI(t,n,e,r){let i=e?n.classBindings:n.styleBindings;t[Kr(i)]=r}function yI(t,n,e){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let a=t[o].hostAttrs;r=sa(r,a,e)}return sa(r,n.attrs,e)}function ef(t,n,e,r,i){let o=null,a=e.directiveEnd,s=e.directiveStylingLast;for(s===-1?s=e.directiveStart:s++;s<a&&(o=n[s],r=sa(r,o.hostAttrs,i),o!==t);)s++;return t!==null&&(e.directiveStylingLast=s),r}function sa(t,n,e){let r=e?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?i=a:i===r&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Js(t,a,e?!0:n[++o]))}return t===void 0?null:t}function vI(t,n,e){if(e==null||e==="")return Qe;let r=[],i=Xt(e);if(Array.isArray(i))for(let o=0;o<i.length;o++)t(r,i[o],!0);else if(i instanceof Set)for(let o of i)t(r,o,!0);else if(typeof i=="object")for(let o in i)Object.hasOwn(i,o)&&t(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function _I(t,n,e){let r=String(n);r!==""&&!r.includes(" ")&&Js(t,r,e)}function CI(t,n,e,r,i,o,a,s){i===ft&&(i=Qe);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let p=l<i.length?i[l+1]:void 0,m=c<o.length?o[c+1]:void 0,h=null,y;d===f?(l+=2,c+=2,p!==m&&(h=f,y=m)):f===null||d!==null&&d<f?(l+=2,h=d):(c+=2,h=f,y=m),h!==null&&yv(t,n,e,r,h,y,a,s),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function yv(t,n,e,r,i,o,a,s){if(!(n.type&3))return;let l=t.data,c=l[s+1],d=oI(c)?Db(l,n,e,i,Wi(c),a):void 0;if(!Ll(d)){Ll(o)||rI(c)&&(o=Db(l,null,e,i,s,a));let f=wu(hn(),e);QE(r,a,f,i,o)}}function Db(t,n,e,r,i,o){let a=n===null,s;for(;i>0;){let l=t[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,p=e[i+1];p===ft&&(p=f?Qe:void 0);let m=f?el(p,r):d===r?p:void 0;if(c&&!Ll(m)&&(m=el(l,r)),Ll(m)&&(s=m,a))return s;let h=t[i+1];i=a?Kr(h):Wi(h)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=el(l,r))}return s}function Ll(t){return t!==void 0}function DI(t,n){return t==null||t===""||(typeof n=="string"?t=Xt(t)+n:typeof t=="object"&&(t=qs(Xt(t)))),t}function vv(t,n){return(t.flags&(n?8:16))!==0}function se(t,n=""){let e=P(),r=ye(),i=t+Se,o=r.firstCreatePass?Jr(r,i,1,n,null):r.data[i],a=xI(r,e,o,n);e[i]=a,ml()&&Jf(r,e,a,o),Gr(o,!1)}var xI=(t,n,e,r)=>(pl(!0),yE(n[Ee],r));function wI(t,n,e,r=""){return Pn(t,Fi(),e)?n+Ho(e)+r:ft}function EI(t,n,e,r,i,o=""){let a=bg(),s=Hy(t,a,e,i);return sl(2),s?n+Ho(e)+r+Ho(i)+o:ft}function Yi(t){return vn("",t),Yi}function vn(t,n,e){let r=P(),i=wI(r,t,n,e);return i!==ft&&_v(r,hn(),i),vn}function ma(t,n,e,r,i){let o=P(),a=EI(o,t,n,e,r,i);return a!==ft&&_v(o,hn(),a),ma}function _v(t,n,e){let r=wu(n,t);vE(t[Ee],r,e)}var Cv={};function nc(t){Vn("NgLet");let n=ye(),e=P(),r=t+Se,i=Jr(n,r,128,null,null);return Gr(i,!1),qo(n,e,r,Cv),nc}function xm(t){let n=ye(),e=P(),r=hn();return qo(n,e,r,t),t}function rc(t){let n=Lu(),e=rl(n,Se+t);if(e===Cv)throw new v(314,!1);return e}function xb(t,n,e){let r=ye();r.firstCreatePass&&Dv(n,r.data,r.blueprint,fn(t),e)}function Dv(t,n,e,r,i){if(t=Be(t),Array.isArray(t))for(let o=0;o<t.length;o++)Dv(t[o],n,e,r,i);else{let o=ye(),a=P(),s=qe(),l=Fr(t)?t:Be(t.provide),c=vu(t),d=s.providerIndexes&1048575,f=s.directiveStart,p=s.providerIndexes>>20;if(Fr(t)||!t.multi){let m=new Xr(c,i,ae,null),h=nf(l,n,i?d:d+p,f);h===-1?(af(Ml(s,a),o,l),tf(o,t,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),e.push(m),a.push(m)):(e[h]=m,a[h]=m)}else{let m=nf(l,n,d+p,f),h=nf(l,n,d,d+p),y=m>=0&&e[m],C=h>=0&&e[h];if(i&&!C||!i&&!y){af(Ml(s,a),o,l);let D=MI(i?II:SI,e.length,i,r,c,t);!i&&C&&(e[h].providerFactory=D),tf(o,t,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),e.push(D),a.push(D)}else{let D=xv(e[i?h:m],c,!i&&r);tf(o,t,m>-1?m:h,D)}!i&&r&&C&&e[h].componentProviders++}}}function tf(t,n,e,r){let i=Fr(n),o=rg(n);if(i||o){let l=(o?Be(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[r,l]):c[d+1].push(r,l)}else c.push(e,l)}}}function xv(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function nf(t,n,e,r){for(let i=e;i<r;i++)if(n[i]===t)return i;return-1}function SI(t,n,e,r,i){return Ff(this.multi,[])}function II(t,n,e,r,i){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=ra(r,r[A],this.providerFactory.index,i);a=l.slice(0,s),Ff(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Ff(o,a);return a}function Ff(t,n){for(let e=0;e<t.length;e++){let r=t[e];n.push(r())}return n}function MI(t,n,e,r,i,o){let a=new Xr(t,e,ae,null);return a.multi=[],a.index=n,a.componentProviders=0,xv(a,i,r&&!e),a}function lt(t,n){return e=>{e.providersResolver=(r,i)=>xb(r,i?i(t):t,!1),n&&(e.viewProvidersResolver=(r,i)=>xb(r,i?i(n):n,!0))}}function NI(t,n){let e=t[n];return e===ft?void 0:e}function TI(t,n,e,r,i,o,a){let s=n+e;return Hy(t,s,i,o)?HS(t,s+2,a?r.call(a,i,o):r(i,o)):NI(t,s+2)}function wm(t,n){let e=ye(),r,i=t+Se;e.firstCreatePass?(r=AI(n,e.pipeRegistry),e.data[i]=r,r.onDestroy&&(e.destroyHooks??=[]).push(i,r.onDestroy)):r=e.data[i];let o=r.factory||(r.factory=Zn(r.type,!0)),a,s=ot(ae);try{let l=Il(!1),c=o();return Il(l),qo(e,P(),i,c),c}finally{ot(s)}}function AI(t,n){if(n)for(let e=n.length-1;e>=0;e--){let r=n[e];if(t===r.name)return r}}function Em(t,n,e,r){let i=t+Se,o=P(),a=rl(o,i);return RI(o,i)?TI(o,gg(),n,a.transform,e,r,a):a.transform(e,r)}function RI(t,n){return t[A].data[n].pure}function pa(t,n){return Wl(t,n)}var wv=(()=>{class t{applicationErrorHandler=u(Rn);appRef=u(Et);taskService=u(Wr);ngZone=u(S);zonelessEnabled=u(Jo);tracing=u(Zt,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new re;innerNgZone=this.zoneIsDefined?this.ngZone._inner??null:null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Wu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Ag:Uu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.innerNgZone!==null&&this.isInNgZone())}isInNgZone(){let e=Zone.current;for(;e;){if(e===this.innerNgZone)return!0;e=e.parent}return!1}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function Ev(){return[{provide:ln,useExisting:wv},{provide:S,useClass:Po},{provide:Jo,useValue:!0}]}var Tm=new g("");function Ie(t,n){return Do(t,n?.equal)}function q(t){return fh(t)}var ic=class extends Error{dependency;constructor(n){super("Dependency error",{cause:n.error()}),this.name="ResourceDependencyError",this.dependency=n}},ga=(()=>{class t extends Error{_brand;constructor(e){super(e)}static IDLE=new t("IDLE");static LOADING=new t("LOADING")}return t})(),kI=t=>t;function cr(t,n){if(typeof t=="function"){let e=Fd(t,kI,n?.equal);return Sv(e,void 0,n?.set)}else{let e=Fd(t.source,t.computation,t.equal);return Sv(e,void 0,t.set)}}function Sv(t,n,e){let r=t[Te],i=t;if(e!==void 0){let o=a=>Pd(r,a);i.set=a=>e(a,o),i.update=a=>e(a(q(t)),o)}else i.set=o=>Pd(r,o),i.update=o=>uh(r,o);return i.asReadonly=Ko.bind(t),i}var Sm=class{value;isLoading;constructor(n,e){this.value=n,this.value.set=this.set.bind(this),this.value.update=this.update.bind(this),this.value.asReadonly=Ko,this.isLoading=Ie(()=>this.status()==="loading"||this.status()==="reloading",void 0)}isError=Ie(()=>this.status()==="error");update(n){this.set(n(q(this.value)))}isValueDefined=Ie(()=>this.isError()?!1:this.value()!==void 0);_snapshot;get snapshot(){return this._snapshot??=Ie(()=>{let n=this.status();return n==="error"?{status:"error",error:this.error()}:{status:n,value:this.value()}})}hasValue(){return this.isValueDefined()}asReadonly(){return this}},ba=class extends Sm{loaderFn;equal;debugName;transferCacheKey;isStreaming;pendingTasks;state;extRequest;effectRef;pendingController;resolvePendingTask=void 0;destroyed=!1;unregisterOnDestroy;status;error;transferState;constructor(n,e,r,i,o,a,s,l,c=!1){if(Nv())throw Tv();super(Ie(()=>{let p=this.state().stream?.();if(!p||this.state().status==="loading"&&this.error())return r;if(!Im(p))throw new oc(this.error());return p.value},{equal:i}),o),this.loaderFn=e,this.equal=i,this.debugName=o,this.transferCacheKey=s,this.isStreaming=c;let d=a.get(Tm,void 0,{optional:!0})??{isActive:!1};this.transferState=a.get(Pi,void 0,{optional:!0})??void 0;let f=st(n)?n:Ie(()=>{try{return ha(!0),n(PI)}finally{ha(!1)}},void 0);this.extRequest=cr(()=>{try{return ha(!0),{request:f(),reload:0}}catch(p){return Nm(p),p===ga.IDLE?{status:"idle",reload:0}:p===ga.LOADING?{status:"loading",reload:0}:{error:ya(p),reload:0}}finally{ha(!1)}},void 0),this.state=cr({source:this.extRequest,computation:(p,m)=>{let{request:h,status:y,error:C}=p,D;if(C)y="resolved",D=K({error:C},void 0);else if(!y)if(m)y=h===void 0?"idle":"loading",m.value.extRequest.request===h&&(D=m.value.stream);else{let Y=this.transferState,yt=this.transferCacheKey;d.isActive&&yt&&Y&&h!==void 0&&Y.hasKey(yt)&&(D=K({value:Y.get(yt,r)},void 0)),D||(D=l?.(p.request)),l=void 0,y=h===void 0?"idle":D?"resolved":"loading"}return{extRequest:p,status:y,previousStatus:m?Iv(m.value):"idle",stream:D}}}),this.effectRef=Ct(this.loadEffect.bind(this),{injector:a,manualCleanup:!0}),this.pendingTasks=a.get(Vi),this.unregisterOnDestroy=a.get($e).onDestroy(()=>this.destroy()),this.status=Ie(()=>Iv(this.state()),void 0),this.error=Ie(()=>{let p=this.state().stream?.();return p&&!Im(p)?p.error:void 0},void 0)}set(n){if(this.destroyed)return;let e=q(this.error),r=q(this.state);if(!e){let i=q(this.value);if(r.status==="local"&&(this.equal?this.equal(i,n):i===n))return}this.state.set({extRequest:r.extRequest,status:"local",previousStatus:"local",stream:K({value:n},void 0)}),this.abortInProgressLoad()}reload(){let{status:n}=q(this.state);return n==="idle"||n==="loading"?!1:(this.extRequest.update(({request:e,reload:r})=>({request:e,reload:r+1})),!0)}destroy(){this.destroyed=!0,this.unregisterOnDestroy(),this.effectRef.destroy(),this.abortInProgressLoad(),this.state.set({extRequest:{request:void 0,reload:0},status:"idle",previousStatus:"idle",stream:void 0})}async loadEffect(){let n=this.extRequest(),{status:e,previousStatus:r}=q(this.state);if(this.abortInProgressLoad(),n.request===void 0)return;if(e!=="loading")return;let i=this.resolvePendingTask=this.pendingTasks.add(),{signal:o}=this.pendingController=new AbortController;try{let a=q(()=>this.loaderFn({params:n.request,abortSignal:o,previous:{status:r}})),s=()=>o.aborted||q(this.extRequest)!==n;if(st(a)){if(s())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:a});let l=q(a)}else{let l=await a;if(s())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:l});let c=l?q(l):void 0}}catch(a){if(Nm(a),o.aborted||q(this.extRequest)!==n)return;this.state.set({extRequest:n,status:"resolved",previousStatus:"error",stream:K({error:ya(a)},void 0)})}finally{i?.(),i=void 0,!this.isStreaming&&this.pendingController?.signal===o&&(this.pendingController=void 0)}}abortInProgressLoad(){q(()=>this.pendingController?.abort(FI())),this.pendingController=void 0,this.resolvePendingTask?.(),this.resolvePendingTask=void 0}},OI;function FI(){return OI??=new DOMException("The operation was aborted.","AbortError")}function Iv(t){switch(t.status){case"loading":return t.extRequest.reload===0?"loading":"reloading";case"resolved":return Im(t.stream())?"resolved":"error";default:return t.status}}function Im(t){return t.error===void 0}function ya(t){return $u(t)?t:new Mm(t)}var oc=class extends Error{constructor(n){super(n.message,{cause:n})}},Mm=class extends Error{constructor(n){super(String(n),{cause:n})}};function Am(t){switch(t.status()){case"idle":throw ga.IDLE;case"error":throw new ic(t);case"loading":case"reloading":throw ga.LOADING}return t.value()}var PI={chain:Am},Mv=!1;function Nv(){return Mv}function ha(t){Mv=t}function Tv(){return new v(992,!1)}function Nm(t){if(t instanceof v&&t.code===992)throw t}function Pv(t,n){let e=Object.create(Eb);e.value=t,e.transformFn=n?.transform;function r(){if(_n(e),e.value===Vl){let i=null;throw new v(-950,i)}return e.value}return r[Te]=e,r}var sc=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Lf(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Av(t,n){return Pv(t,n)}function QI(t){return Pv(Vl,t)}var Fm=(Av.required=QI,Av);function Rv(t,n){return pm(n)}function JI(t,n){return hm(n)}var _a=(Rv.required=JI,Rv);function kv(t,n){return pm(n)}function eM(t,n){return hm(n)}var Lv=(kv.required=eM,kv);var tM=1e4;var Pz=tM-1e3;var nt=(()=>{class t{static __NG_ELEMENT_ID__=nM}return t})();function nM(t){return rM(qe(),P(),(t&16)===16)}function rM(t,n,e){if(An(t)&&!e){let r=Ot(t.index,n);return new ir(r,r)}else if(t.type&175){let r=n[Je];return new ir(r,n)}return null}var km=new g(""),iM=new g("");function va(t){return!t.moduleRef}function oM(t){let n=va(t)?t.r3Injector:t.moduleRef.injector,e=n.get(S);return e.run(()=>{va(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let r=n.get(Rn),i;if(e.runOutsideAngular(()=>{i=e.onError.subscribe({next:r})}),va(t)){let o=()=>n.destroy(),a=t.platformInjector.get(km);a.add(o),n.onDestroy(()=>{i.unsubscribe(),a.delete(o)})}else{let o=()=>t.moduleRef.destroy(),a=t.platformInjector.get(km);a.add(o),t.moduleRef.onDestroy(()=>{na(t.allPlatformModules,t.moduleRef),i.unsubscribe(),a.delete(o)})}return sM(r,e,()=>{let o=n.get(Wr),a=o.add(),s=n.get(ym);return s.runInitializers(),s.donePromise.then(()=>{if(!n.get(iM,!0))return va(t)?n.get(Et):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(va(t)){let c=n.get(Et);return t.rootComponent!==void 0&&c.bootstrap(t.rootComponent),c}else return aM?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(a)})})})}var aM;function sM(t,n,e){try{let r=e();return ti(r)?r.catch(i=>{throw n.runOutsideAngular(()=>t(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>t(r)),r}}var ac=null;function lM(t=[],n){return O.create({name:n,providers:[{provide:zo,useValue:"platform"},{provide:km,useValue:new Set([()=>ac=null])},...t]})}function cM(t=[]){if(ac)return ac;let n=lM(t);return ac=n,uv(),dM(n),n}function dM(t){let n=t.get(hl,null);Ni(t,()=>{n?.forEach(e=>e())})}function Vv(t){let{rootComponent:n,appProviders:e,platformProviders:r,platformRef:i}=t;ce(ne.BootstrapApplicationStart);try{let o=i?.injector??cM(r),a=[Ev(),Fg,...e||[]],s=new aa({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return oM({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{ce(ne.BootstrapApplicationEnd)}}function Me(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ca(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Rm=Symbol("NOT_SET"),jv=new Set,uM=z(_({},gi),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Rm,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Rm&&!pi(this))return this.signal;try{for(let i of this.cleanup??jv)i()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Cn(this),r;try{r=this.userFn.apply(null,n)}finally{Wn(this,e)}return(this.value===Rm||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Om=class extends ia{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,r,i,o,a=null,s){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get($e),a),this.scheduler=i;for(let l of Xf){let c=e[l];if(c===void 0)continue;let d=Object.create(uM);d.sequence=this,d.phase=l,d.userFn=c,d.dirty=!0,d.signal=()=>(_n(d),d.value),d.signal[Te]=d,d.registerCleanupFn=f=>(d.cleanup??=new Set).add(f),this.nodes[l]=d,this.hooks[l]=f=>d.phaseFn(f)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??jv)e()}finally{qn(n)}}};function Pm(t,n){let e=n?.injector??u(O),r=e.get(ln),i=e.get(zl),o=e.get(Zt,null,{optional:!0});i.impl??=e.get(Zf);let a=t;typeof a=="function"&&(a={mixedReadWrite:t});let s=e.get(Li,null,{optional:!0}),l=new Om(i.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,r,e,o?.snapshot(null),void 0);return i.impl.register(l),l}function lc(t,n){let e=Kn(t),r=n.elementInjector||Mi(),o=new Gi(e).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings);return n.onError&&(o.hostView._lView[ki]=n.onError),o}var Bv=null;function Vt(){return Bv}function Lm(t){Bv??=t}var Da=class{},Xi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=Z({token:t,factory:()=>u(Hv),providedIn:"platform"})}return t})();var Hv=(()=>{class t extends Xi{_location;_history;_doc=u(w);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Vt().getBaseHref(this._doc)}onPopState(e){let r=Vt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",e,!1),()=>r.removeEventListener("popstate",e)}onHashChange(e){let r=Vt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",e,!1),()=>r.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,r,i){this._history.pushState(e,r,i)}replaceState(e,r,i){this._history.replaceState(e,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||t)};static \u0275prov=Z({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function $v(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function Uv(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function dr(t){return t&&t[0]!=="?"?`?${t}`:t}var cc=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(r){return new(r||t)};static \u0275prov=Z({token:t,factory:()=>u(mM),providedIn:"root"})}return t})(),fM=new g(""),mM=(()=>{class t extends cc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,r){super(),this._platformLocation=e,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(w).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return $v(this._baseHref,e)}path(e=!1){let r=this._platformLocation.pathname+dr(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${r}${i}`:r}pushState(e,r,i,o){let a=this.prepareExternalUrl(i+dr(o));this._platformLocation.pushState(e,r,a)}replaceState(e,r,i,o){let a=this.prepareExternalUrl(i+dr(o));this._platformLocation.replaceState(e,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(r){return new(r||t)(T(Xi),T(fM,8))};static \u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dc=(()=>{class t{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let r=this._locationStrategy.getBaseHref();this._basePath=gM(Uv(zv(r))),this._locationStrategy.onPopState(i=>{let o={url:this.path(!0),pop:!0,state:i.state,type:i.type};i.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,r=""){return this.path()==this.normalize(e+dr(r))}normalize(e){return t.stripTrailingSlash(hM(this._basePath,zv(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,r="",i=null){this._locationStrategy.pushState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+dr(r)),i)}replaceState(e,r="",i=null){this._locationStrategy.replaceState(i,"",e,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+dr(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",r){this._urlChangeListeners.forEach(i=>i(e,r))}subscribe(e,r,i){return this._subject.subscribe({next:e,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=dr;static joinWithSlash=$v;static stripTrailingSlash=Uv;static \u0275fac=function(r){return new(r||t)(T(cc))};static \u0275prov=Z({token:t,factory:()=>pM(),providedIn:"root"})}return t})();function pM(){return new dc(T(cc))}function hM(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function zv(t){return t.replace(/\/index\.html$/,"")}function gM(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var rt=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(rt||{}),me=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(me||{}),pt=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(pt||{}),Bn={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Wv(t){return wt(t)[Pe.LocaleId]}function qv(t,n,e){let r=wt(t),i=[r[Pe.DayPeriodsFormat],r[Pe.DayPeriodsStandalone]],o=jt(i,n);return jt(o,e)}function Yv(t,n,e){let r=wt(t),i=[r[Pe.DaysFormat],r[Pe.DaysStandalone]],o=jt(i,n);return jt(o,e)}function Xv(t,n,e){let r=wt(t),i=[r[Pe.MonthsFormat],r[Pe.MonthsStandalone]],o=jt(i,n);return jt(o,e)}function Zv(t,n){let r=wt(t)[Pe.Eras];return jt(r,n)}function xa(t,n){let e=wt(t);return jt(e[Pe.DateFormat],n)}function wa(t,n){let e=wt(t);return jt(e[Pe.TimeFormat],n)}function Ea(t,n){let r=wt(t)[Pe.DateTimeFormat];return jt(r,n)}function Sa(t,n){let e=wt(t),r=e[Pe.NumberSymbols][n];if(typeof r>"u"){if(n===Bn.CurrencyDecimal)return e[Pe.NumberSymbols][Bn.Decimal];if(n===Bn.CurrencyGroup)return e[Pe.NumberSymbols][Bn.Group]}return r}function Kv(t){if(!t[Pe.ExtraData])throw new v(2303,!1)}function Qv(t){let n=wt(t);return Kv(n),(n[Pe.ExtraData][2]||[]).map(r=>typeof r=="string"?Vm(r):[Vm(r[0]),Vm(r[1])])}function Jv(t,n,e){let r=wt(t);Kv(r);let i=[r[Pe.ExtraData][0],r[Pe.ExtraData][1]],o=jt(i,n)||[];return jt(o,e)||[]}function jt(t,n){for(let e=n;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new v(2304,!1)}function Vm(t){let[n,e]=t.split(":");return{hours:+n,minutes:+e}}var yM=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,uc=Object.create(null),vM=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,_M=256;function e_(t,n,e,r){let i=TM(t);CM(n),n=jn(e,n)||n;let a=[],s;for(;n;)if(s=vM.exec(n),s){a=a.concat(s.slice(1));let d=a.pop();if(!d)break;n=d}else{a.push(n);break}let l=i.getTimezoneOffset();r&&(l=n_(r,l),i=NM(i,r));let c="";return a.forEach(d=>{let f=IM(d);c+=f?f(i,e,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function CM(t){if(t.length>_M)throw new v(2300,!1)}function gc(t,n,e){let r=new Date(0);return r.setFullYear(t,n,e),r.setHours(0,0,0),r}function jn(t,n){let e=Wv(t);if(uc[e]??=Object.create(null),uc[e][n])return uc[e][n];let r="";switch(n){case"shortDate":r=xa(t,pt.Short);break;case"mediumDate":r=xa(t,pt.Medium);break;case"longDate":r=xa(t,pt.Long);break;case"fullDate":r=xa(t,pt.Full);break;case"shortTime":r=wa(t,pt.Short);break;case"mediumTime":r=wa(t,pt.Medium);break;case"longTime":r=wa(t,pt.Long);break;case"fullTime":r=wa(t,pt.Full);break;case"short":let i=jn(t,"shortTime"),o=jn(t,"shortDate");r=fc(Ea(t,pt.Short),[i,o]);break;case"medium":let a=jn(t,"mediumTime"),s=jn(t,"mediumDate");r=fc(Ea(t,pt.Medium),[a,s]);break;case"long":let l=jn(t,"longTime"),c=jn(t,"longDate");r=fc(Ea(t,pt.Long),[l,c]);break;case"full":let d=jn(t,"fullTime"),f=jn(t,"fullDate");r=fc(Ea(t,pt.Full),[d,f]);break}return r&&(uc[e][n]=r),r}function fc(t,n){return n&&(t=t.replace(/\{([^}]+)}/g,function(e,r){return Object.hasOwn(n,r)?n[r]:e})),t}function Jt(t,n,e="-",r,i){let o="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,o=e));let a=String(t);for(;a.length<n;)a="0"+a;return r&&(a=a.slice(a.length-n)),o+a}function DM(t,n){return Jt(t,3).substring(0,n)}function je(t,n,e=0,r=!1,i=!1){return function(o,a){let s=xM(t,o);if((e>0||s>-e)&&(s+=e),t===3)s===0&&e===-12&&(s=12);else if(t===6)return DM(s,n);let l=Sa(a,Bn.MinusSign);return Jt(s,n,l,r,i)}}function xM(t,n){switch(t){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new v(2301,!1)}}function xe(t,n,e=rt.Format,r=!1){return function(i,o){return wM(i,o,t,n,e,r)}}function wM(t,n,e,r,i,o){switch(e){case 2:return Xv(n,i,r)[t.getMonth()];case 1:return Yv(n,i,r)[t.getDay()];case 0:let a=t.getHours(),s=t.getMinutes();if(o){let c=Qv(n),d=Jv(n,i,r),f=c.findIndex(p=>{if(Array.isArray(p)){let[m,h]=p,y=a>=m.hours&&s>=m.minutes,C=a<h.hours||a===h.hours&&s<h.minutes;if(m.hours<h.hours){if(y&&C)return!0}else if(y||C)return!0}else if(p.hours===a&&p.minutes===s)return!0;return!1});if(f!==-1)return d[f]}return qv(n,i,r)[a<12?0:1];case 3:return Zv(n,r)[t.getFullYear()<=0?0:1];default:let l=e;throw new v(2302,!1)}}function mc(t){return function(n,e,r){let i=-1*r,o=Sa(e,Bn.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case 0:return(i>=0?"+":"")+Jt(a,2,o)+Jt(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+Jt(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+Jt(a,2,o)+":"+Jt(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+Jt(a,2,o)+":"+Jt(Math.abs(i%60),2,o);default:throw new v(2310,!1)}}}var EM=0,hc=4;function SM(t){let n=gc(t,EM,1).getDay();return gc(t,0,1+(n<=hc?hc:hc+7)-n)}function t_(t){let n=t.getDay(),e=n===0?-3:hc-n;return gc(t.getFullYear(),t.getMonth(),t.getDate()+e)}function jm(t,n=!1){return function(e,r){let i;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,a=e.getDate();i=1+Math.floor((a+o)/7)}else{let o=t_(e),a=SM(o.getFullYear()),s=o.getTime()-a.getTime();i=1+Math.round(s/6048e5)}return Jt(i,t,Sa(r,Bn.MinusSign))}}function pc(t,n=!1){return function(e,r){let o=t_(e).getFullYear();return Jt(o,t,Sa(r,Bn.MinusSign),n)}}var Bm=Object.create(null);function IM(t){if(Bm[t])return Bm[t];let n;switch(t){case"G":case"GG":case"GGG":n=xe(3,me.Abbreviated);break;case"GGGG":n=xe(3,me.Wide);break;case"GGGGG":n=xe(3,me.Narrow);break;case"y":n=je(0,1,0,!1,!0);break;case"yy":n=je(0,2,0,!0,!0);break;case"yyy":n=je(0,3,0,!1,!0);break;case"yyyy":n=je(0,4,0,!1,!0);break;case"Y":n=pc(1);break;case"YY":n=pc(2,!0);break;case"YYY":n=pc(3);break;case"YYYY":n=pc(4);break;case"M":case"L":n=je(1,1,1);break;case"MM":case"LL":n=je(1,2,1);break;case"MMM":n=xe(2,me.Abbreviated);break;case"MMMM":n=xe(2,me.Wide);break;case"MMMMM":n=xe(2,me.Narrow);break;case"LLL":n=xe(2,me.Abbreviated,rt.Standalone);break;case"LLLL":n=xe(2,me.Wide,rt.Standalone);break;case"LLLLL":n=xe(2,me.Narrow,rt.Standalone);break;case"w":n=jm(1);break;case"ww":n=jm(2);break;case"W":n=jm(1,!0);break;case"d":n=je(2,1);break;case"dd":n=je(2,2);break;case"c":case"cc":n=je(7,1);break;case"ccc":n=xe(1,me.Abbreviated,rt.Standalone);break;case"cccc":n=xe(1,me.Wide,rt.Standalone);break;case"ccccc":n=xe(1,me.Narrow,rt.Standalone);break;case"cccccc":n=xe(1,me.Short,rt.Standalone);break;case"E":case"EE":case"EEE":n=xe(1,me.Abbreviated);break;case"EEEE":n=xe(1,me.Wide);break;case"EEEEE":n=xe(1,me.Narrow);break;case"EEEEEE":n=xe(1,me.Short);break;case"a":case"aa":case"aaa":n=xe(0,me.Abbreviated);break;case"aaaa":n=xe(0,me.Wide);break;case"aaaaa":n=xe(0,me.Narrow);break;case"b":case"bb":case"bbb":n=xe(0,me.Abbreviated,rt.Standalone,!0);break;case"bbbb":n=xe(0,me.Wide,rt.Standalone,!0);break;case"bbbbb":n=xe(0,me.Narrow,rt.Standalone,!0);break;case"B":case"BB":case"BBB":n=xe(0,me.Abbreviated,rt.Format,!0);break;case"BBBB":n=xe(0,me.Wide,rt.Format,!0);break;case"BBBBB":n=xe(0,me.Narrow,rt.Format,!0);break;case"h":n=je(3,1,-12);break;case"hh":n=je(3,2,-12);break;case"H":n=je(3,1);break;case"HH":n=je(3,2);break;case"m":n=je(4,1);break;case"mm":n=je(4,2);break;case"s":n=je(5,1);break;case"ss":n=je(5,2);break;case"S":n=je(6,1);break;case"SS":n=je(6,2);break;case"SSS":n=je(6,3);break;case"Z":case"ZZ":case"ZZZ":n=mc(0);break;case"ZZZZZ":n=mc(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=mc(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=mc(2);break;default:return null}return Bm[t]=n,n}function n_(t,n){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?n:e}function MM(t,n){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+n),t}function NM(t,n,e){let i=t.getTimezoneOffset(),o=n_(n,i);return MM(t,-1*(o-i))}function TM(t){if(Gv(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,o=1,a=1]=t.split("-").map(s=>+s);return gc(i,o-1,a)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let r;if(r=t.match(yM))return AM(r)}let n=new Date(t);if(!Gv(n))throw new v(2311,!1);return n}function AM(t){let n=new Date(0),e=0,r=0,i=t[8]?n.setUTCFullYear:n.setFullYear,o=t[8]?n.setUTCHours:n.setHours;t[9]&&(e=Number(t[9]+t[10]),r=Number(t[9]+t[11])),i.call(n,Number(t[1]),Number(t[2])-1,Number(t[3]));let a=Number(t[4]||0)-e,s=Number(t[5]||0)-r,l=Number(t[6]||0),c=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(n,a,s,l,c),n}function Gv(t){return t instanceof Date&&!isNaN(t.valueOf())}var Hm=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(O);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(e,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||t)(ae(Pt))};static \u0275dir=M({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ut]})}return t})();function RM(t,n){return new v(2100,!1)}var kM="mediumDate",r_=new g(""),i_=new g(""),Um=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,r,i){this.locale=e,this.defaultTimezone=r,this.defaultOptions=i}transform(e,r,i,o){if(e==null||e===""||e!==e)return null;try{let a=r??this.defaultOptions?.dateFormat??kM,s=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return e_(e,a,o||this.locale,s)}catch(a){throw RM(t,a.message)}}static \u0275fac=function(r){return new(r||t)(ae(ua,16),ae(r_,24),ae(i_,24))};static \u0275pipe=bm({name:"date",type:t,pure:!0})}return t})();function Ia(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let r=e.indexOf("="),[i,o]=r==-1?[e,""]:[e.slice(0,r),e.slice(r+1)];if(i.trim()!==n)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]==='"'&&a[a.length-1]==='"'&&(a=a.slice(1,-1)),a}return null}var zm="browser";function o_(t){return t===zm}var Ma=class{_doc;constructor(n){this._doc=n}manager},bc=(()=>{class t extends Ma{constructor(e){super(e)}supports(e){return!0}addEventListener(e,r,i,o){return e.addEventListener(r,i,o),()=>this.removeEventListener(e,r,i,o)}removeEventListener(e,r,i,o){return e.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||t)(T(w))};static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})(),_c=new g(""),qm=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,r){this._zone=r,e.forEach(a=>{a.manager=this});let i=e.filter(a=>!(a instanceof bc));this._plugins=i.slice().reverse();let o=e.find(a=>a instanceof bc);o&&this._plugins.push(o)}addEventListener(e,r,i,o){return this._findPluginFor(r).addEventListener(e,r,i,o)}getZone(){return this._zone}_findPluginFor(e){let r=this._eventNameToPlugin.get(e);if(r)return r;if(r=this._plugins.find(o=>o.supports(e)),!r)throw new v(-5101,!1);return this._eventNameToPlugin.set(e,r),r}static \u0275fac=function(r){return new(r||t)(T(_c),T(S))};static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})(),$m="ng-app-id";function a_(t){for(let n of t)n.remove()}function s_(t,n){let e=n.createElement("style");return e.textContent=t,e}function LM(t,n,e,r){let i=t.head?.querySelectorAll(`style[${$m}="${n}"],link[${$m}="${n}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute($m),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Wm(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Ym=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,r,i,o={}){this.doc=e,this.appId=r,this.nonce=i,LM(e,r,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,r){for(let i of e)this.addUsage(i,this.inline,s_);r?.forEach(i=>this.addUsage(i,this.external,Wm))}removeStyles(e,r){for(let i of e)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,r,i){let o=r.get(e);o?o.usage++:r.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(e,this.doc)))})}removeUsage(e,r){let i=r.get(e);i&&(i.usage--,i.usage<=0&&(a_(i.elements),r.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])a_(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(e,s_(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(e,Wm(r,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let r of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of r.elements)o.parentNode===e?o.remove():i.push(o);r.elements=i}}addElement(e,r){return this.nonce&&r.setAttribute("nonce",this.nonce),e.appendChild(r)}static \u0275fac=function(r){return new(r||t)(T(w),T(nr),T(rr,8),T(qr))};static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})(),Gm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Xm=/%COMP%/g;var c_="%COMP%",VM=`_nghost-${c_}`,jM=`_ngcontent-${c_}`,BM=!0,HM=new g("",{factory:()=>BM}),UM=new g("");function zM(t){return jM.replace(Xm,t)}function $M(t){return VM.replace(Xm,t)}function d_(t,n){return n.map(e=>e.replace(Xm,t))}var Zm=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,r,i,o,a,s,l=null,c=null,d=null){this.eventManager=e,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.cssVarNamespace=d??"",this.defaultRenderer=new Na(e,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(e,r){if(!e||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,r);return i instanceof vc?i.applyToHost(e):i instanceof Ta&&i.applyStyles(),i}getOrCreateRenderer(e,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case Yt.Emulated:o=new vc(l,c,r,this.appId,d,a,s,f,this.cssVarNamespace);break;case Yt.ShadowDom:return new yc(l,e,r,a,s,this.nonce,f,this.cssVarNamespace,c);case Yt.ExperimentalIsolatedShadowDom:return new yc(l,e,r,a,s,this.nonce,f,this.cssVarNamespace);default:o=new Ta(l,c,r,d,a,s,f,this.cssVarNamespace);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(r){return new(r||t)(T(qm),T(ei),T(nr),T(HM),T(w),T(S),T(rr),T(Zt,8),T(UM,8))};static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})(),Na=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,r,i,o=""){this.eventManager=n,this.doc=e,this.ngZone=r,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Gm[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(l_(n)?n.content:n).appendChild(e)}insertBefore(n,e,r){if(n){let i=l_(n)?n.content:n;if(r!=null&&r.parentNode!==i)throw new v(-5106,!1);i.insertBefore(e,r)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new v(-5104,!1);return e||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,r,i){if(i){e=i+":"+e;let o=Gm[i];o?n.setAttributeNS(o,e,r):n.setAttribute(e,r)}else n.setAttribute(e,r)}removeAttribute(n,e,r){if(r){let i=Gm[r];i?n.removeAttributeNS(i,e):n.removeAttribute(`${r}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,r,i){let o=e.startsWith("--");o&&(e=e.replace("%NS%",this.cssVarNamespace)),o||i&(bn.DashCase|bn.Important)?n.style.setProperty(e,r,i&bn.Important?"important":""):n.style[e]=r}removeStyle(n,e,r){let i=e.startsWith("--");i&&(e=e.replace("%NS%",this.cssVarNamespace)),i||r&bn.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,r){n!=null&&(n[e]=r)}setValue(n,e){n.nodeValue=e}listen(n,e,r,i){if(typeof n=="string"&&(n=Vt().getGlobalEventTarget(this.doc,n),!n))throw new v(-5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,i)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function l_(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var yc=class extends Na{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,r,i,o,a,s,l,c){super(n,i,o,s,l),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=d_(r.id,d).map(p=>p.replace(/%NS%/g,l));for(let p of d){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=p,this.shadowRoot.appendChild(m)}let f=r.getExternalStyles?.();if(f)for(let p of f){let m=Wm(p,i);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,r){return super.insertBefore(this.nodeOrShadowRoot(n),e,r)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ta=class extends Na{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,r,i,o,a,s,l,c){super(n,o,a,s,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let d=r.styles,f=c?d_(c,d):d;this.styles=f.map(p=>p.replace(/%NS%/g,l)),this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Yf.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},vc=class extends Ta{contentAttr;hostAttr;constructor(n,e,r,i,o,a,s,l,c){let d=i+"-"+r.id;super(n,e,r,o,a,s,l,c,d),this.contentAttr=zM(d),this.hostAttr=$M(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let r=super.createElement(n,e);return super.setAttribute(r,this.contentAttr,""),r}};var Cc=class t extends Da{supportsDOMEvents=!0;static makeCurrent(){Lm(new t)}onAndCancel(n,e,r,i){return n.addEventListener(e,r,i),()=>{n.removeEventListener(e,r,i)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=GM();return e==null?null:WM(e)}resetBaseElement(){Aa=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Ia(document.cookie,n)}},Aa=null;function GM(){return Aa=Aa||document.head.querySelector("base"),Aa?Aa.getAttribute("href"):null}function WM(t){return new URL(t,document.baseURI).pathname}var u_=["alt","control","meta","shift"],qM={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},YM={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},f_=(()=>{class t extends Ma{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,r,i,o){let a=t.parseEventName(r),s=t.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Vt().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let r=e.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(r.pop()),a="",s=r.indexOf("code");if(s>-1&&(r.splice(s,1),a="code."),u_.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),a+=c+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(e,r){let i=qM[e.key]||e.key,o="";return r.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),u_.forEach(a=>{if(a!==i){let s=YM[a];s(e)&&(o+=a+".")}}),o+=i,o===r)}static eventCallback(e,r,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>r(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(r){return new(r||t)(T(w))};static \u0275prov=Z({token:t,factory:t.\u0275fac})}return t})();async function Km(t,n,e){let r=_({rootComponent:t},XM(n,e));return Vv(r)}function XM(t,n){return{platformRef:n?.platformRef,appProviders:[...eN,...t?.providers??[]],platformProviders:JM}}function ZM(){Cc.makeCurrent()}function KM(){return new at}function QM(){return jf(document),document}var JM=[{provide:qr,useValue:zm},{provide:hl,useValue:ZM,multi:!0},{provide:w,useFactory:QM}];var eN=[{provide:zo,useValue:"root"},{provide:at,useFactory:KM},{provide:_c,useClass:bc,multi:!0},{provide:_c,useClass:f_,multi:!0},Zm,{provide:ei,useClass:Ym},{provide:Ym,useExisting:ei},qm,{provide:Fe,useExisting:Zm},[]];var tn=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let r=e.indexOf(":");if(r>0){let i=e.slice(0,r),o=e.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,r)=>{this.addHeaderEntry(r,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,r])=>{this.setHeaderEntries(e,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,r]of n.headers.entries())this.headers.set(e,r),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,e);let i=n.op==="a"?(this.headers.get(e)||[]).slice():[];i.push(...r),this.headers.set(e,i);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(e);if(!s)return;s=s.filter(l=>a.indexOf(l)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(e):this.headers.set(r,[e])}setHeaderEntries(n,e){let r=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var wc=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ec=class{encodeKey(n){return m_(n)}encodeValue(n){return m_(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function tN(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var nN=/[&+#]/g;function m_(t){return encodeURI(t).replace(nN,encodeURIComponent)}function Dc(t){return`${t}`}var en=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ec,n.fromString){if(n.fromObject)throw new v(2805,!1);this.map=tN(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let r=n.fromObject[e],i=Array.isArray(r)?r.map(Dc):[Dc(r)];i.length>0&&this.map.set(e,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{e.push({param:r,value:o,op:"a"})}):e.push({param:r,value:i,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(Dc(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let r=(this.map.get(n.param)||[]).slice(),i=r.indexOf(Dc(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function rN(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function p_(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function h_(t){return typeof Blob<"u"&&t instanceof Blob}function g_(t){return typeof FormData<"u"&&t instanceof FormData}function iN(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Qm="Content-Type",b_="Accept",__="text/plain",C_="application/json",oN=`${C_}, ${__}, */*`,ni=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,r,i){this.url=e,this.method=n.toUpperCase();let o;if(rN(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new v(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new tn,this.context??=new wc,!this.params)this.params=new en,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e,l="",c=e.indexOf("#");c!==-1&&(l=e.substring(c),s=e.substring(0,c));let d=s.indexOf("?"),f=d===-1?"?":d<s.length-1?"&":"";this.urlWithParams=s+f+a+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||p_(this.body)||h_(this.body)||g_(this.body)||iN(this.body)?this.body:this.body instanceof en?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||g_(this.body)?null:h_(this.body)?this.body.type||null:p_(this.body)?null:typeof this.body=="string"?__:this.body instanceof en?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?C_:null}clone(n={}){let e=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,p=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,h=n.transferCache??this.transferCache,y=n.timeout??this.timeout,C=n.body!==void 0?n.body:this.body,D=n.withCredentials??this.withCredentials,Y=n.reportProgress??this.reportProgress,yt=n.reportUploadProgress??this.reportUploadProgress,_r=n.reportDownloadProgress??this.reportDownloadProgress,rn=n.headers||this.headers,Cr=n.params||this.params,Dr=n.context??this.context;return n.setHeaders!==void 0&&(rn=Object.keys(n.setHeaders).reduce((zn,on)=>zn.set(on,n.setHeaders[on]),rn)),n.setParams&&(Cr=Object.keys(n.setParams).reduce((zn,on)=>zn.set(on,n.setParams[on]),Cr)),new t(e,r,C,{params:Cr,headers:rn,context:Dr,reportProgress:Y,reportUploadProgress:yt,reportDownloadProgress:_r,responseType:i,withCredentials:D,transferCache:h,keepalive:o,cache:s,priority:a,timeout:y,mode:l,redirect:c,credentials:d,referrer:f,integrity:p,referrerPolicy:m})}},Hn=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Hn||{}),Zi=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,r="OK"){this.headers=n.headers||new tn,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Sc=class t extends Zi{constructor(n={}){super(n)}type=Hn.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ra=class t extends Zi{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Hn.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},ur=class extends Zi{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},aN=200;var sN=/^\)\]\}',?\n/,j8=1024*1024,D_=new g("",{factory:()=>null}),Ic=(()=>{class t{fetchImpl=u(Jm,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(S);destroyRef=u($e);maxResponseSize=u(D_);handle(e){return new U(r=>{let i=new AbortController,o=!1,a={next:l=>{l.type===Hn.Response&&(o=!0),r.next(l)},error:l=>{o=!0,r.error(l)},complete:()=>{o=!0,r.complete()}};this.doRequest(e,i.signal,a).then(ep,l=>a.error(new ur({error:l})));let s;return e.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{s!==void 0&&clearTimeout(s),!o&&!i.signal.aborted&&i.abort()}})}async doRequest(e,r,i){let o=this.createRequestInit(e),a;try{let C=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,_({signal:r},o)));lN(C),i.next({type:Hn.Sent}),a=await C}catch(C){i.error(new ur({error:C,status:C.status??0,statusText:C.statusText,url:e.urlWithParams,headers:C.headers}));return}let s=new tn(a.headers),l=a.statusText,c=a.url||e.urlWithParams,d=a.status,f=null,p=e.reportProgress||e.reportDownloadProgress;if(p&&i.next(new Sc({headers:s,status:d,statusText:l,url:c})),a.body){let C=a.headers.get(Qm)??"",D=a.headers.get("content-length"),Y=D!==null?Number(D):NaN;this.maxResponseSize!==null&&Number.isFinite(Y)&&Y>this.maxResponseSize&&(await a.body.cancel(),y_(this.maxResponseSize));let yt=[],_r=a.body.getReader(),rn=0,Cr,Dr,zn=typeof Zone<"u"&&Zone.current,on=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await _r.cancel(),on=!0;break}let{done:oe,value:b}=await _r.read();if(oe)break;if(yt.push(b),rn+=b.length,this.maxResponseSize!==null&&rn>this.maxResponseSize&&(await _r.cancel(),y_(this.maxResponseSize)),p){Dr=e.responseType==="text"?(Dr??"")+(Cr??=v_(C)).decode(b,{stream:!0}):void 0;let le=()=>i.next({type:Hn.DownloadProgress,total:Number.isFinite(Y)?Y:void 0,loaded:rn,partialText:Dr});zn?zn.run(le):le()}}}),on){i.complete();return}let j=this.concatChunks(yt,rn);try{f=this.parseBody(e,j,C,d)}catch(oe){i.error(new ur({error:oe,headers:new tn(a.headers),status:a.status,statusText:a.statusText,url:a.url||e.urlWithParams}));return}}d===0&&(d=f?aN:0);let m=d>=200&&d<300,h=a.redirected,y=a.type;m?(i.next(new Ra({body:f,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:y})),i.complete()):i.error(new ur({error:f,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:y}))}parseBody(e,r,i,o){switch(e.responseType){case"json":let a=new TextDecoder().decode(r).replace(sN,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return v_(i).decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new v(2824,!1);let r={},i;if(i=e.credentials,e.withCredentials&&(i="include"),e.headers.forEach((o,a)=>r[o]=a.join(",")),e.headers.has(b_)||(r[b_]=oN),!e.headers.has(Qm)){let o=e.detectContentTypeHeader();o!==null&&(r[Qm]=o)}return{body:e.serializeBody(),method:e.method,headers:r,credentials:i,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,r){let i=new Uint8Array(r),o=0;for(let a of e)i.set(a,o),o+=a.length;return i}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Jm=class{};function ep(){}function lN(t){t.then(ep,ep)}function y_(t){throw new v(-2825,!1)}var cN=/charset=\s*["']?([^;"'\s]+)["']?/i;function v_(t){let n=t.match(cN);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var dN=new g("",{factory:()=>!0}),uN="XSRF-TOKEN",fN=new g("",{factory:()=>uN}),mN="X-XSRF-TOKEN",pN=new g("",{factory:()=>mN}),hN=(()=>{class t{cookieName=u(fN);doc=u(w);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ia(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),x_=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=Z({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(hN),i},providedIn:"root"})}return t})();function w_(t,n){if(!u(dN)||t.method==="GET"||t.method==="HEAD"||t.method==="QUERY")return n(t);try{let i=u(Xi).href,{origin:o}=new URL(i),{origin:a}=new URL(t.url,o);if(o!==a)return n(t)}catch{return n(t)}let e=u(x_).getToken(),r=u(pN);return e!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,e)})),n(t)}function gN(t,n){return n(t)}function bN(t,n,e){return(r,i)=>Ni(e,()=>n(r,o=>t(o,i)))}var E_=new g("",{factory:()=>[w_]}),S_=new g(""),I_=new g("",{factory:()=>!0});var tp=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=Z({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(Ic),i},providedIn:"root"})}return t})();var Mc=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Vi);contributeToStability=u(I_);constructor(e,r){this.backend=e,this.injector=r}handle(e){if(this.chain===null){let i=this.injector.get(Nc,null,{skipSelf:!0}),o=i!==null&&this.backend===i,a=this.injector.get(S_,[],o?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(E_),...a]));this.chain=s.reduceRight((l,c)=>bN(l,c,this.injector),gN)}let r=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();try{return q(()=>r(e,o=>this.backend.handle(o))).pipe(To(i))}catch(o){throw i(),o}}else return q(()=>r(e,i=>this.backend.handle(i)))}static \u0275fac=function(r){return new(r||t)(T(tp),T(ke))};static \u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=Z({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(Mc),i},providedIn:"root"})}return t})();function xc(t,n){return _({body:n},t)}var ka=(()=>{class t{handler;constructor(e){this.handler=e}request(e,r,i={}){let o;if(e instanceof ni)o=e;else{let l;i.headers instanceof tn?l=i.headers:l=new tn(i.headers);let c;i.params&&(i.params instanceof en?c=i.params:c=new en({fromObject:i.params})),o=new ni(e,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=Ke(o).pipe(Wd(l=>this.handler.handle(l)));if(e instanceof ni||i.observe==="events")return a;let s=a.pipe(Ne(l=>l instanceof Ra));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(ue(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new v(2806,!1);return l.body}));case"blob":return s.pipe(ue(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new v(2807,!1);return l.body}));case"text":return s.pipe(ue(l=>{if(l.body!==null&&typeof l.body!="string")throw new v(2808,!1);return l.body}));default:return s.pipe(ue(l=>l.body))}case"response":return s;default:throw new v(2809,!1)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:new en().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,i={}){return this.request("PATCH",e,xc(i,r))}post(e,r,i={}){return this.request("POST",e,xc(i,r))}query(e,r,i={}){return this.request("QUERY",e,xc(i,r))}put(e,r,i={}){return this.request("PUT",e,xc(i,r))}static \u0275fac=function(r){return new(r||t)(T(Nc))};static \u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function np(...t){let n=[ka,Ic,Mc,{provide:Nc,useExisting:Mc},{provide:tp,useFactory:()=>u(Ic)},{provide:E_,useValue:w_,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Mn(n)}var yN=new g("");var vN=new g("");var M_=(()=>{let t=Tc("json");return t.arrayBuffer=Tc("arraybuffer"),t.blob=Tc("blob"),t.text=Tc("text"),t})();function Tc(t){return function(e,r){let i=r?.injector??u(O),o=i.get(vN,null,{optional:!0}),a=i.get(Pi,null,{optional:!0}),s=i.get(yN,null,{optional:!0}),l=c=>{if(o&&a&&c){let d=o.readCache(c,o,a,s);if(d)try{let f=d.body,p=r?.parse?r.parse(f):f;return K({value:p})}catch{}}};return new rp(i,c=>_N(c,e,t),r?.defaultValue,r?.debugName,r?.parse,r?.equal,l)}}function _N(t,n,e){let r=typeof n=="function"?n(t):n;if(r===void 0)return;typeof r=="string"&&(r={url:r});let i=r.headers instanceof tn?r.headers:new tn(r.headers),o=r.params instanceof en?r.params:new en({fromObject:r.params});return new ni(r.method??"GET",r.url,r.body??null,{headers:i,params:o,reportDownloadProgress:r.reportProgress,withCredentials:r.withCredentials,keepalive:r.keepalive,cache:r.cache,priority:r.priority,mode:r.mode,redirect:r.redirect,responseType:e,context:r.context,transferCache:r.transferCache,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}var rp=class extends ba{client;_headers=cr({source:this.extRequest,computation:()=>{}});_progress=cr({source:this.extRequest,computation:()=>{}});_statusCode=cr({source:this.extRequest,computation:()=>{}});headers=Ie(()=>this.status()==="resolved"||this.status()==="error"?this._headers():void 0);progress=this._progress.asReadonly();statusCode=this._statusCode.asReadonly();constructor(n,e,r,i,o,a,s){super(e,({params:l,abortSignal:c})=>{let d,f=!1,p=()=>{f=!0,d?.unsubscribe()};c.addEventListener("abort",p,{once:!0});let m=K({value:void 0}),h,y=new Promise(D=>h=D),C=D=>{m.set(D),h?.(m),h=void 0};return d=this.client.request(l).subscribe({next:D=>{switch(D.type){case Hn.Response:this._headers.set(D.headers),this._statusCode.set(D.status);try{C({value:o?o(D.body):D.body})}catch(Y){C({error:ya(Y)})}break;case Hn.DownloadProgress:this._progress.set(D);break}},error:D=>{D instanceof ur&&(this._headers.set(D.headers),this._statusCode.set(D.status)),C({error:D}),c.removeEventListener("abort",p)},complete:()=>{h&&C({error:new v(-991,!1)}),c.removeEventListener("abort",p)}}),f&&d.unsubscribe(),y},r,a,i,n,void 0,s),this.client=n.get(ka)}set(n){super.set(n),this._headers.set(void 0),this._progress.set(void 0),this._statusCode.set(void 0)}};var N_=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(r){return new(r||t)(T(w))};static \u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Oa=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275prov=Z({token:t,factory:function(r){let i=null;return r?i=new(r||t):i=T(DN),i},providedIn:"root"})}return t})(),DN=(()=>{class t extends Oa{_doc=u(w);sanitize(e,r){if(r==null)return null;switch(e){case tt.NONE:return r;case tt.HTML:return Qr(r,"HTML")?Xt(r):Gf(this._doc,String(r)).toString();case tt.STYLE:return Qr(r,"Style")?Xt(r):r;case tt.SCRIPT:if(Qr(r,"Script"))return Xt(r);throw new v(5200,!1);case tt.URL:return Qr(r,"URL")?Xt(r):Hl(String(r));case tt.RESOURCE_URL:if(Qr(r,"ResourceURL"))return Xt(r);throw new v(-5201,!1);default:throw new v(5202,!1)}}bypassSecurityTrustHtml(e){return Bf(e)}bypassSecurityTrustStyle(e){return Hf(e)}bypassSecurityTrustScript(e){return Uf(e)}bypassSecurityTrustUrl(e){return zf(e)}bypassSecurityTrustResourceUrl(e){return $f(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function ri(t){return t.buttons===0||t.detail===0}function ii(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var ip;function T_(){if(ip==null){let t=typeof document<"u"?document.head:null;ip=!!(t&&(t.createShadowRoot||t.attachShadow))}return ip}function op(t){if(T_()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Fa(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function ht(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var ap;try{ap=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ap=!1}var de=(()=>{class t{_platformId=u(qr);isBrowser=this._platformId?o_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ap)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Pa;function A_(){if(Pa==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Pa=!0}))}finally{Pa=Pa||!1}return Pa}function Ki(t){return A_()?t:!!t.capture}function Qi(t,n=0){return R_(t)?Number(t):arguments.length===2?n:0}function R_(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function St(t){return t instanceof F?t.nativeElement:t}var k_=new g("cdk-input-modality-detector-options"),O_={ignoreKeys:[18,17,224,91,16]},F_=650,sp={passive:!0,capture:!0},P_=(()=>{class t{_platform=u(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Nr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(r=>r===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ht(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<F_||(this._modality.next(ri(e)?"keyboard":"mouse"),this._mostRecentTarget=ht(e))};_onTouchstart=e=>{if(ii(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ht(e)};constructor(){let e=u(S),r=u(w),i=u(k_,{optional:!0});if(this._options=_(_({},O_),i),this.modalityDetected=this._modality.pipe(Ro(1)),this.modalityChanged=this.modalityDetected.pipe(Vs()),this._platform.isBrowser){let o=u(Fe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,sp),o.listen(r,"mousedown",this._onMousedown,sp),o.listen(r,"touchstart",this._onTouchstart,sp)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),La=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(La||{}),L_=new g("cdk-focus-monitor-default-options"),Ac=Ki({passive:!0,capture:!0}),fr=(()=>{class t{_ngZone=u(S);_platform=u(de);_inputModalityDetector=u(P_);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(w);_stopInputModalityDetector=new x;constructor(){let e=u(L_,{optional:!0});this._detectionMode=e?.detectionMode||La.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let r=ht(e);for(let i=r;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,r=!1){let i=St(e);if(!this._platform.isBrowser||i.nodeType!==1)return Ke();let o=op(i)||this._document,a=this._elementInfo.get(i);if(a)return r&&(a.checkChildren=!0),a.subject;let s={checkChildren:r,subject:new x,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let r=St(e),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(e,r,i){let o=St(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===La.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,r){e.classList.toggle("cdk-focused",!!r),e.classList.toggle("cdk-touch-focused",r==="touch"),e.classList.toggle("cdk-keyboard-focused",r==="keyboard"),e.classList.toggle("cdk-mouse-focused",r==="mouse"),e.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(e,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&r,this._detectionMode===La.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?F_:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,r){let i=this._elementInfo.get(r),o=ht(e);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(e,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&e.relatedTarget instanceof Node&&r.contains(e.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(e,r){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(r))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let r=e.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ac),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ac)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Nt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let r=e.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ac),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ac),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,r,i){this._setClasses(e,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(e){let r=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Rc=new WeakMap,gt=(()=>{class t{_appRef;_injector=u(O);_environmentInjector=u(ke);load(e){let r=this._appRef=this._appRef||this._injector.get(Et),i=Rc.get(r);i||(i={loaders:new Set,refs:[]},Rc.set(r,i),r.onDestroy(()=>{Rc.get(r)?.refs.forEach(o=>o.destroy()),Rc.delete(r)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(lc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var V_=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return t})(),kc;function wN(){if(kc===void 0&&(kc=null,typeof window<"u")){let t=window;if(t.trustedTypes!==void 0)try{kc=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return kc}function Ji(t){return wN()?.createHTML(t)||t}function eo(t){return Array.isArray(t)?t:[t]}var j_=new Set,oi,Oc=(()=>{class t{_platform=u(de);_nonce=u(rr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):SN}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&EN(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function EN(t,n){if(!j_.has(t))try{oi||(oi=document.createElement("style"),n&&oi.setAttribute("nonce",n),oi.setAttribute("type","text/css"),document.head.appendChild(oi)),oi.sheet&&(oi.sheet.insertRule(`@media ${t.replace(/[{}]/g,"")} {body{ }}`,0),j_.add(t))}catch(e){console.error(e)}}function SN(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var lp=(()=>{class t{_mediaMatcher=u(Oc);_zone=u(S);_queries=new Map;_destroySubject=new x;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return B_(eo(e)).some(i=>this._registerQuery(i).mql.matches)}observe(e){let i=B_(eo(e)).map(a=>this._registerQuery(a).observable),o=Gd(i);return o=xi(o.pipe(vt(1)),o.pipe(Ro(1),No(0))),o.pipe(ue(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let r=this._mediaMatcher.matchMedia(e),o={observable:new U(a=>{let s=l=>this._zone.run(()=>a.next(l));return r.addListener(s),()=>{r.removeListener(s)}}).pipe(dt(r),ue(({matches:a})=>({query:e,matches:a})),Nt(this._destroySubject)),mql:r};return this._queries.set(e,o),o}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function B_(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var IN=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Fc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({providers:[IN]})}return t})();var up=(()=>{class t{_platform=u(de);isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return NN(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let r=MN(LN(e));if(r&&(H_(r)===-1||!this.isVisible(r)))return!1;let i=e.nodeName.toLowerCase(),o=H_(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!FN(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,r){return PN(e)&&!this.isDisabled(e)&&(r?.ignoreInert||!e.closest?.("[inert]"))&&(r?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function MN(t){try{return t.frameElement}catch{return null}}function NN(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function TN(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function AN(t){return kN(t)&&t.type=="hidden"}function RN(t){return ON(t)&&t.hasAttribute("href")}function kN(t){return t.nodeName.toLowerCase()=="input"}function ON(t){return t.nodeName.toLowerCase()=="a"}function $_(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function H_(t){if(!$_(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function FN(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function PN(t){return AN(t)?!1:TN(t)||RN(t)||t.hasAttribute("contenteditable")||$_(t)}function LN(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var dp=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,r,i,o=!1,a){this._element=n,this._checker=e,this._ngZone=r,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let r=this._getFirstTabbableElement(e);return r?.focus(n),!!r}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=0;r<e.length;r++){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let r=e.length-1;r>=0;r--){let i=e[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Ft(n,{injector:this._injector})}},G_=(()=>{class t{_checker=u(up);_ngZone=u(S);_document=u(w);_injector=u(O);constructor(){u(gt).load(V_)}create(e,r=!1){return new dp(e,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ai=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(ai||{}),U_="cdk-high-contrast-black-on-white",z_="cdk-high-contrast-white-on-black",cp="cdk-high-contrast-active",VN=(()=>{class t{_platform=u(de);_hasCheckedHighContrastMode=!1;_document=u(w);_breakpointSubscription;constructor(){this._breakpointSubscription=u(lp).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return ai.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let r=this._document.defaultView||window,i=r&&r.getComputedStyle?r.getComputedStyle(e):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return ai.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return ai.BLACK_ON_WHITE}return ai.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(cp,U_,z_),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===ai.BLACK_ON_WHITE?e.add(cp,U_):r===ai.WHITE_ON_BLACK&&e.add(cp,z_)}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),W_=(()=>{class t{constructor(){u(VN)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[Fc]})}return t})();var jN=200,Pc=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(n,e){let r=typeof e?.debounceInterval=="number"?e.debounceInterval:jN;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Rr(e=>this._pressedLetters.push(e)),No(n),Ne(()=>this._pressedLetters.length>0),ue(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function mr(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Lc=class{_items;_activeItemIndex=K(-1);_activeItem=K(null);_wrap=!1;_typeaheadSubscription=re.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof On?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):st(n)&&(this._effectRef=Ct(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new x;change=new x;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Pc(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||mr(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),r=typeof n=="number"?n:e.indexOf(n),i=e[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let r=1;r<=e.length;r++){let i=(this._activeItemIndex()+n*r+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=e,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return st(this._items)?this._items():this._items instanceof On?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let r=n.indexOf(e);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Va=class extends Lc{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var X_=new Map,Ze=class t{_appId=u(nr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let r=X_.get(n);return r===void 0?r=0:r++,X_.set(n,r),`${n}${e?t._infix+"-":""}${r}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})};var nn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(nn||{}),Vc,si;function jc(){if(si==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return si=!1,si;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)si=!0;else{let t=Element.prototype.scrollTo;t?si=!/\{\s*\[native code\]\s*\}/.test(t.toString()):si=!1}}return si}function to(){if(typeof document!="object"||!document)return nn.NORMAL;if(Vc==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),r=e.style;r.width="2px",r.height="1px",t.appendChild(e),document.body.appendChild(t),Vc=nn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Vc=t.scrollLeft===0?nn.NEGATED:nn.INVERTED),t.remove()}return Vc}function pp(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var no,Z_=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function hp(){if(no)return no;if(typeof document!="object"||!document)return no=new Set(Z_),no;let t=document.createElement("input");return no=new Set(Z_.filter(n=>(t.setAttribute("type",n),t.type===n))),no}var BN=new g("MATERIAL_ANIMATIONS"),K_=null;function gp(){return u(BN,{optional:!0})?.animationsDisabled||u(Qo,{optional:!0})==="NoopAnimations"?"di-disabled":(K_??=u(Oc).matchMedia("(prefers-reduced-motion)").matches,K_?"reduced-motion":"enabled")}function bt(){return gp()!=="enabled"}function Re(t){return t==null?"":typeof t=="string"?t:`${t}px`}function ro(t){return t!=null&&`${t}`!="false"}var Bt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Bt||{}),bp=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Bt.HIDDEN;constructor(n,e,r,i=!1){this._renderer=n,this.element=e,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Q_=Ki({passive:!0,capture:!0}),yp=class{_events=new Map;addHandler(n,e,r,i){let o=this._events.get(e);if(o){let a=o.get(r);a?a.add(i):o.set(r,new Set([i]))}else this._events.set(e,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Q_)})}removeHandler(n,e,r){let i=this._events.get(n);if(!i)return;let o=i.get(e);o&&(o.delete(r),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Q_)))}_delegateEventHandler=n=>{let e=ht(n);e&&this._events.get(n.type)?.forEach((r,i)=>{(i===e||i.contains(e))&&r.forEach(o=>o.handleEvent(n))})}},ja={enterDuration:225,exitDuration:150},HN=800,J_=Ki({passive:!0,capture:!0}),eC=["mousedown","touchstart"],tC=["mouseup","mouseleave","touchend","touchcancel"],UN=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})(),Ba=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new yp;constructor(n,e,r,i,o){this._target=n,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=St(r)),o&&o.get(gt).load(UN)}fadeInRipple(n,e,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},ja),r.animation);r.centered&&(n=i.left+i.width/2,e=i.top+i.height/2);let a=r.radius||zN(n,e,i),s=n-i.left,l=e-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),p=f.transitionProperty,m=f.transitionDuration,h=p==="none"||m==="0s"||m==="0s, 0s"||i.width===0&&i.height===0,y=new bp(this,d,r,h);d.style.transform="scale3d(1, 1, 1)",y.state=Bt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=y);let C=null;return!h&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let D=()=>{C&&(C.fallbackTimer=null),clearTimeout(yt),this._finishRippleTransition(y)},Y=()=>this._destroyRipple(y),yt=setTimeout(Y,c+100);d.addEventListener("transitionend",D),d.addEventListener("transitioncancel",Y),C={onTransitionEnd:D,onTransitionCancel:Y,fallbackTimer:yt}}),this._activeRipples.set(y,C),(h||!c)&&this._finishRippleTransition(y),y}fadeOutRipple(n){if(n.state===Bt.FADING_OUT||n.state===Bt.HIDDEN)return;let e=n.element,r=_(_({},ja),n.config.animation);e.style.transitionDuration=`${r.exitDuration}ms`,e.style.opacity="0",n.state=Bt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=St(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,eC.forEach(r=>{t._eventManager.addHandler(this._ngZone,r,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{tC.forEach(e=>{this._triggerElement.addEventListener(e,this,J_)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Bt.FADING_IN?this._startFadeOutTransition(n):n.state===Bt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=Bt.VISIBLE,!r&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Bt.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=ri(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+HN;!this._target.rippleDisabled&&!e&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!ii(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let r=0;r<e.length;r++)this.fadeInRipple(e[r].clientX,e[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Bt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Bt.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(eC.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(tC.forEach(e=>n.removeEventListener(e,this,J_)),this._pointerUpEventsRegistered=!1))}};function zN(t,n,e){let r=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(r*r+i*i)}var vp=new g("mat-ripple-global-options"),nC=(()=>{class t{_elementRef=u(F);_animationsDisabled=bt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(S),r=u(de),i=u(vp,{optional:!0}),o=u(O);this._globalOptions=i||{},this._rippleRenderer=new Ba(this,e,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,r=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,r,_(_({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&J("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var $N={capture:!0},GN=["focus","mousedown","mouseenter","touchstart"],_p="mat-ripple-loader-uninitialized",Cp="mat-ripple-loader-class-name",rC="mat-ripple-loader-centered",Bc="mat-ripple-loader-disabled",iC=(()=>{class t{_document=u(w);_animationsDisabled=bt();_globalRippleOptions=u(vp,{optional:!0});_platform=u(de);_ngZone=u(S);_injector=u(O);_eventCleanups;_hosts=new Map;constructor(){let e=u(Fe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>GN.map(r=>e.listen(this._document,r,this._onInteraction,$N)))}ngOnDestroy(){let e=this._hosts.keys();for(let r of e)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(e,r){e.setAttribute(_p,this._globalRippleOptions?.namespace??""),(r.className||!e.hasAttribute(Cp))&&e.setAttribute(Cp,r.className||""),r.centered&&e.setAttribute(rC,""),r.disabled&&e.setAttribute(Bc,"")}setDisabled(e,r){let i=this._hosts.get(e);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):r?e.setAttribute(Bc,""):e.removeAttribute(Bc)}_onInteraction=e=>{let r=ht(e);if(r instanceof HTMLElement){let i=r.closest(`[${_p}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",e.getAttribute(Cp)),e.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??ja.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??ja.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Bc),rippleConfig:{centered:e.hasAttribute(rC),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Ba(s,this._ngZone,r,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:c}),e.removeAttribute(_p)}destroyRipple(e){let r=this._hosts.get(e);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Hc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var WN=new g("MAT_BUTTON_CONFIG");function oC(t){return t==null?void 0:Ca(t)}var Dp=(()=>{class t{_elementRef=u(F);_ngZone=u(S);_animationsDisabled=bt();_config=u(WN,{optional:!0});_focusMonitor=u(fr);_cleanupClick;_renderer=u(ve);_rippleLoader=u(iC);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=Fm(!1,{transform:Me});constructor(){u(gt).load(Hc);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",r){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,i){r&2&&(_e("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Qt(i.color?"mat-"+i.color:""),J("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Me],disabled:[2,"disabled","disabled",Me],ariaDisabled:[2,"aria-disabled","ariaDisabled",Me],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Me],tabIndex:[2,"tabIndex","tabIndex",oC],_tabindex:[2,"tabindex","_tabindex",oC],showProgress:[1,"showProgress"]}})}return t})(),xp=(()=>{class t extends Dp{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=["*",[["","progressIndicator",""]]],r=["*","[progressIndicator]"];function i(o,a){o&1&&(Le(0,"div",1),Q(1,1),Ue())}return X({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[he],ngContentSelectors:r,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,s){a&1&&(ze(e),Xe(0,"span",0),Q(1),ge(2,i,2,0,"div",1),Xe(3,"span",2)(4,"span",3)),a&2&&(L(2),be(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
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
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
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
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
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
`],encapsulation:2})})()}return t})();var qN=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(w)}),YN=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function aC(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?YN.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Ht=(()=>{class t{get value(){return this.valueSignal()}valueSignal=K("ltr");change=new ie;constructor(){let e=u(qN,{optional:!0});if(e){let r=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(aC(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var we=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({})}return t})();var Uc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[we]})}return t})();var sC=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),zc=(()=>{class t extends Dp{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=XN(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?sC.get(this._appearance):null,o=sC.get(e);i&&r.remove(...i),r.add(...o),this._appearance=e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],r=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function i(o,a){o&1&&(Le(0,"div",2),Q(1,3),Ue())}return X({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[he],ngContentSelectors:r,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,s){a&1&&(ze(e),Xe(0,"span",0),Q(1),Le(2,"span",1),Q(3,1),Ue(),Q(4,2),ge(5,i,2,0,"div",2),Xe(6,"span",3)(7,"span",4)),a&2&&(J("mdc-button__ripple",!s._isFab)("mdc-fab__ripple",s._isFab),L(5),be(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
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
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
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
`],encapsulation:2})})()}return t})();function XN(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var $c=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[Uc,we]})}return t})();var ZN=20,Ha=(()=>{class t{_ngZone=u(S);_platform=u(de);_renderer=u(Fe).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ZN){return this._platform.isBrowser?new U(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Ps(e)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ke()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(e,r){let i=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe(Ne(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){let r=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,e)&&r.push(o)}),r}_targetContainsElement(e,r){let i=St(r),o=e.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),cC=(()=>{class t{elementRef=u(F);scrollDispatcher=u(Ha);ngZone=u(S);dir=u(Ht,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=u(ve);_cleanupScroll;_elementScrolled=new x;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=i?e.end:e.start),e.right==null&&(e.right=i?e.start:e.end),e.bottom!=null&&(e.top=r.scrollHeight-r.clientHeight-e.bottom),i&&to()!=nn.NORMAL?(e.left!=null&&(e.right=r.scrollWidth-r.clientWidth-e.left),to()==nn.INVERTED?e.left=e.right:to()==nn.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=r.scrollWidth-r.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let r=this.elementRef.nativeElement;jc()?r.scrollTo(e):(e.top!=null&&(r.scrollTop=e.top),e.left!=null&&(r.scrollLeft=e.left))}measureScrollOffset(e){let r="left",i="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?i:r:e=="end"&&(e=a?r:i),a&&to()==nn.INVERTED?e==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&to()==nn.NEGATED?e==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),KN=20,io=(()=>{class t{_platform=u(de);_listeners;_viewportSize=null;_change=new x;_document=u(w);constructor(){let e=u(S),r=u(Fe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,r=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||r.scrollY||i.scrollTop||0,s=-o.left||e.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:a,left:s}}change(e=KN){return e>0?this._change.pipe(Ps(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var Gc=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({})}return t})(),wp=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[we,Gc,we,Gc]})}return t})();var Ua=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},oo=class extends Ua{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,r,i,o,a){super(),this.component=n,this.viewContainerRef=e,this.injector=r,this.projectableNodes=i,this.bindings=o||null,this.directives=a||null}},pr=class extends Ua{templateRef;viewContainerRef;context;injector;constructor(n,e,r,i){super(),this.templateRef=n,this.viewContainerRef=e,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Ep=class extends Ua{element;constructor(n){super(),this.element=n instanceof F?n.nativeElement:n}},ao=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof oo)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof pr)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ep)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},za=class extends ao{outletElement;_appRef;_defaultInjector;constructor(n,e,r){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=r}attachComponentPortal(n){let e;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(or,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||O.NULL,o=i.get(ke,r.injector);e=lc(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),r.attachView(e.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,r=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=e.indexOf(r);i!==-1&&e.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let e=n.element;e.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(r,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(e,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var $a=(()=>{class t extends ao{_moduleRef=u(or,{optional:!0});_document=u(w);_viewContainerRef=u(Pt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new ie;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let r=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,i=r.createComponent(e.component,{index:r.length,injector:e.injector||r.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return r!==this._viewContainerRef&&this._insertContent(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=e=>{let r=e.element;r.parentNode;let i=this._document.createComment("dom-portal");e.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._insertContent(r),this._attachedPortal=e,super.setDisposeFn(()=>i.parentNode?.replaceChild(r,i))};_insertContent(e){let r=this._viewContainerRef.element.nativeElement;r.nodeType===r.ELEMENT_NODE?r.appendChild(e):r.parentNode?.insertBefore(e,r)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=xt(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[he]})}return t})(),li=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({})}return t})();var dC=jc();function lo(t){return new Wc(t.get(io),t.get(w))}var Wc=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Re(-this._previousScrollPosition.left),n.style.top=Re(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,r=n.style,i=e.style,o=r.scrollBehavior||"",a=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),dC&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),dC&&(r.scrollBehavior=o,i.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,r=this._viewportRuler.getViewportSize();return e.scrollHeight>r.height||e.scrollWidth>r.width}};function bC(t,n){return new qc(t.get(Ha),t.get(S),t.get(io),n)}var qc=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,r,i){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ne(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ga=class{enable(){}disable(){}attach(){}};function Ip(t,n){return n.some(e=>{let r=t.bottom<e.top,i=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return r||i||o||a})}function uC(t,n){return n.some(e=>{let r=t.top<e.top,i=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return r||i||o||a})}function Qc(t,n){return new Yc(t.get(Ha),t.get(io),t.get(S),n)}var Yc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,r,i){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Ip(e,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},yC=(()=>{class t{_injector=u(O);noop=()=>new Ga;close=e=>bC(this._injector,e);block=()=>lo(this._injector);reposition=e=>Qc(this._injector,e);static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),hr=class{positionStrategy;scrollStrategy=new Ga;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let r of e)n[r]!==void 0&&(this[r]=n[r])}}};var Xc=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var vC=(()=>{class t{_attachedOverlays=[];_document=u(w);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let r=this._attachedOverlays.indexOf(e);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,r,i){return i.observers.length<1?!1:e.eventPredicate?e.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),_C=(()=>{class t extends vC{_ngZone=u(S);_renderer=u(Fe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),CC=(()=>{class t extends vC{_platform=u(de);_ngZone=u(S);_renderer=u(Fe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ht(e)};_clickListener=e=>{let r=ht(e),i=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(fC(s.overlayElement,r)||fC(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function fC(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===t)return!0;r=e&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var DC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return t})(),Jc=(()=>{class t{_platform=u(de);_containerElement;_document=u(w);_styleLoader=u(gt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||pp()){let i=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(e),pp()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(DC)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),Mp=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,r,i){this._renderer=e,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Np(t){return t&&t.nodeType===1}var Sp=K([]),so=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(n,e,r,i,o,a,s,l,c,d=!1,f,p){this._portalOutlet=n,this._host=e,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=p,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),q(()=>{Sp.update(r=>r.includes(this)?r:[...r,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ft(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let r=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>r.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),q(()=>{Sp.update(e=>e.filter(r=>r!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,q(()=>{Sp.update(e=>e.filter(r=>r!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=z(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Re(this._config.width),n.height=Re(this._config.height),n.minWidth=Re(this._config.minWidth),n.minHeight=Re(this._config.minHeight),n.maxWidth=Re(this._config.maxWidth),n.maxHeight=Re(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Np(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Mp(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,r){let i=eo(e||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ft(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},mC="cdk-overlay-connected-position-bounding-box",JN=/([A-Za-z%]+)$/;function ed(t,n){return new Zc(n,t.get(io),t.get(w),t.get(de),t.get(Jc))}var Zc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=re.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,r,i,o){this._viewportRuler=e,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(mC),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,i,s),c=this._getOverlayPoint(l,e,s),d=this._getOverlayFit(c,e,r,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ci(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(mC),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:Np(this._origin)?this._origin:null}_getOriginPoint(n,e,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;i=r.originX=="start"?a:s}e.left<0&&(i-=e.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:i,y:o}}_getOverlayPoint(n,e,r){let i;r.overlayX=="center"?i=-e.width/2:r.overlayX==="start"?i=this._isRtl()?-e.width:0:i=this._isRtl()?0:-e.width;let o;return r.overlayY=="center"?o=-e.height/2:o=r.overlayY=="top"?0:-e.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,e,r,i){let o=hC(e),{x:a,y:s}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(a+=l),c&&(s+=c);let d=0-a,f=a+o.width-r.width,p=0-s,m=s+o.height-r.height,h=this._subtractOverflows(o.width,d,f),y=this._subtractOverflows(o.height,p,m),C=h*y;return{visibleArea:C,isCompletelyWithinViewport:o.width*o.height===C,fitsInViewportVertically:y===o.height,fitsInViewportHorizontally:h==o.width}}_canFitWithFlexibleDimensions(n,e,r){if(this._hasFlexibleDimensions){let i=r.bottom-e.y,o=r.right-e.x,a=pC(this._overlayRef.getConfig().minHeight),s=pC(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=i,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=hC(e),o=this._viewportRect,a=Math.max(n.x+i.width-o.width,0),s=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,f=0;return i.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?f=l||-s:f=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!eT(this._lastScrollVisibility,r)){let i=new Xc(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,e){let r=this._viewportRect,i=this._isRtl(),o,a,s;if(e.overlayY==="top")a=n.y,o=r.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-s+this._getViewportMarginTop();else{let m=Math.min(r.bottom-n.y+r.top,n.y),h=this._lastBoundingBoxSize.height;o=m*2,a=n.y-m,o>h&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-h/2)}let l=e.overlayX==="start"&&!i||e.overlayX==="end"&&i,c=e.overlayX==="end"&&!i||e.overlayX==="start"&&i,d,f,p;if(c)p=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let m=Math.min(r.right-n.x+r.left,n.x),h=this._lastBoundingBoxSize.width;d=m*2,f=n.x-m,d>h&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-h/2)}return{top:a,left:f,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,e){let r=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;i.width=Re(r.width),i.height=Re(r.height),i.top=Re(r.top)||"auto",i.bottom=Re(r.bottom)||"auto",i.left=Re(r.left)||"auto",i.right=Re(r.right)||"auto",e.overlayX==="center"?i.alignItems="center":i.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?i.justifyContent="center":i.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=Re(o)),a&&(i.maxWidth=Re(a))}this._lastBoundingBoxSize=r,ci(this._boundingBox.style,i)}_resetBoundingBoxStyles(){ci(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ci(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();ci(r,this._getExactOverlayY(e,n,d)),ci(r,this._getExactOverlayX(e,n,d))}else r.position="static";let s="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),r.transform=s.trim(),a.maxHeight&&(i?r.maxHeight=Re(a.maxHeight):o&&(r.maxHeight="")),a.maxWidth&&(i?r.maxWidth=Re(a.maxWidth):o&&(r.maxWidth="")),ci(this._pane.style,r)}_getExactOverlayY(n,e,r){let i={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;i.bottom=`${a-(o.y+this._overlayRect.height)}px`}else i.top=Re(o.y);return i}_getExactOverlayX(n,e,r){let i={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;i.right=`${s-(o.x+this._overlayRect.width)}px`}else i.left=Re(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:uC(n,r),isOriginOutsideView:Ip(n,r),isOverlayClipped:uC(e,r),isOverlayOutsideView:Ip(e,r)}}_subtractOverflows(n,...e){return e.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&eo(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof F)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+e,height:r,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let r=e.getBoundingClientRect();return n&&(e.style.display=""),r}};function ci(t,n){for(let e in n)Object.hasOwn(n,e)&&(t[e]=n[e]);return t}function pC(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(JN);return!e||e==="px"?parseFloat(n):null}return t||null}function hC(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function eT(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var gC="cdk-global-overlay-wrapper";function co(t){return new Kc}var Kc=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(gC),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:a,maxHeight:s}=r,l=(i==="100%"||i==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,f=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",m="",h="",y="";l?y="flex-start":d==="center"?(y="center",p?h=f:m=f):p?d==="left"||d==="end"?(y="flex-end",m=f):(d==="right"||d==="start")&&(y="flex-start",h=f):d==="left"||d==="start"?(y="flex-start",m=f):(d==="right"||d==="end")&&(y="flex-end",h=f),n.position=this._cssPosition,n.marginLeft=l?"0":m,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":h,e.justifyContent=y,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,r=e.style;e.classList.remove(gC),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},xC=(()=>{class t{_injector=u(O);global(){return co()}flexibleConnectedTo(e){return ed(this._injector,e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),wC=new g("OVERLAY_DEFAULT_CONFIG");function uo(t,n){t.get(gt).load(DC);let e=t.get(Jc),r=t.get(w),i=t.get(Ze),o=t.get(Et),a=t.get(Ht),s=t.get(ve,null,{optional:!0})||t.get(Fe).createRenderer(null,null),l=new hr(n),c=t.get(wC,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!r.body||!("showPopover"in r.body)?l.usePopover=!1:l.usePopover=n?.usePopover??c;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Np(p)?p.after(f):p?.type==="parent"?p.element.appendChild(f):e.getContainerElement().appendChild(f),new so(new za(d,o,t),f,d,l,t.get(S),t.get(_C),r,t.get(dc),t.get(CC),n?.disableAnimations??t.get(Qo,null,{optional:!0})==="NoopAnimations",t.get(ke),s)}var EC=(()=>{class t{scrollStrategies=u(yC);_positionBuilder=u(xC);_injector=u(O);create(e){return uo(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var di=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({providers:[EC],imports:[we,li,wp,wp]})}return t})();var gr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Ap=(()=>{class t extends ao{_elementRef=u(F);_focusTrapFactory=u(G_);_config;_interactivityChecker=u(up);_ngZone=u(S);_focusMonitor=u(fr);_renderer=u(ve);_changeDetectorRef=u(nt);_injector=u(O);_platform=u(de);_document=u(w);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=u(gr,{optional:!0})||new gr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let r=this._ariaLabelledByQueue.indexOf(e);r>-1&&(this._ariaLabelledByQueue.splice(r,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),r}attachTemplatePortal(e){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),r}attachDomPortal=e=>{this._portalOutlet.hasAttached();let r=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),r};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,r){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),a=this._renderer.listen(e,"mousedown",i)})),e.focus(r)}_focusByCssSelector(e,r){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,r)}_trapFocus(e){this._isDestroyed||Ft(()=>{let r=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||r.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,r=null;if(typeof e=="string"?r=this._document.querySelector(e):typeof e=="boolean"?r=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(r=e),this._config.restoreFocus&&r&&typeof r.focus=="function"){let i=Fa(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(r,this._closeInteractionType),this._closeInteractionType=null):r.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,r=Fa();return e===r||e.contains(r)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Fa()))}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){function e(r,i){}return X({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,o){if(i&1&&yn($a,7),i&2){let a;Ce(a=De())&&(o._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,o){i&2&&_e("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[he],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,o){i&1&&Lt(0,e,0,0,"ng-template",0)},dependencies:[$a],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return t})(),ui=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(r=>{r.keyCode===27&&!this.disableClose&&!mr(r)&&(r.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let r=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),r.next(n),r.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},tT=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=u(O);return()=>lo(t)}}),nT=new g("DialogData"),rT=new g("DefaultDialogConfig");function iT(t){let n=K(t),e=new ie;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var Rp=(()=>{class t{_injector=u(O);_defaultOptions=u(rT,{optional:!0});_parentDialog=u(t,{optional:!0,skipSelf:!0});_overlayContainer=u(Jc);_idGenerator=u(Ze);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=u(tT);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Io(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(dt(void 0)));open(e,r){let i=this._defaultOptions||new gr;r=_(_({},i),r),r.id=r.id||this._idGenerator.getId("cdk-dialog-"),r.id&&this.getDialogById(r.id);let o=this._getOverlayConfig(r),a=uo(this._injector,o),s=new ui(a,r),l=this._attachContainer(a,s,r);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(vt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,s,l,r),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Tp(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(r=>r.id===e)}ngOnDestroy(){Tp(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Tp(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let r=new hr({positionStrategy:e.positionStrategy||co().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(r.backdropClass=e.backdropClass),r}_attachContainer(e,r,i){let o=i.injector||i.viewContainerRef?.injector,a=[{provide:gr,useValue:i},{provide:ui,useValue:r},{provide:so,useValue:e}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,a.push(...i.container.providers(i))):s=Ap;let l=new oo(s,i.viewContainerRef,O.create({parent:o||this._injector,providers:a}));return e.attach(l).instance}_attachDialogContent(e,r,i,o){if(e instanceof Dt){let a=this._createInjector(o,r,i,void 0),s={$implicit:o.data,dialogRef:r};o.templateContext&&(s=_(_({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new pr(e,null,s,a))}else{let a=this._createInjector(o,r,i,this._injector),s=i.attachComponentPortal(new oo(e,o.viewContainerRef,a,null,o.bindings));r.componentRef=s,r.componentInstance=s.instance}}_createInjector(e,r,i,o){let a=e.injector||e.viewContainerRef?.injector,s=[{provide:nT,useValue:e.data},{provide:ui,useValue:r}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(r,e,i)):s.push(...e.providers)),e.direction&&(!a||!a.get(Ht,null,{optional:!0}))&&s.push({provide:Ht,useValue:iT(e.direction)}),O.create({parent:a||o,providers:s})}_removeOpenDialog(e,r){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),r&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let r=e.parentElement.children;for(let i=r.length-1;i>-1;i--){let o=r[i];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();function Tp(t,n){let e=t.length;for(;e--;)n(t[e])}var SC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({providers:[Rp],imports:[di,li,W_,li]})}return t})();var rd=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},kp="mdc-dialog--open",IC="mdc-dialog--opening",MC="mdc-dialog--closing",oT=150,aT=75,sT=(()=>{class t extends Ap{_animationStateChanged=new ie;_animationsEnabled=!bt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?TC(this._config.enterAnimationDuration)??oT:0;_exitAnimationDuration=this._animationsEnabled?TC(this._config.exitAnimationDuration)??aT:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(NC,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(IC,kp)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(kp),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(kp),this._animationsEnabled?(this._hostElement.style.setProperty(NC,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(MC)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(IC,MC)}_waitForAnimationToComplete(e,r){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(r,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let r=super.attachComponentPortal(e);return r.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),r}static \u0275fac=(()=>{let e;return function(i){return(e||(e=xt(t)))(i||t)}})();static \u0275cmp=(function(){function e(r,i){}return X({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,o){i&2&&(Kt("id",o._config.id),_e("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),J("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[he],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,o){i&1&&(I(0,"div",0)(1,"div",1),Lt(2,e,0,0,"ng-template",2),R()())},dependencies:[$a],styles:[`.mat-mdc-dialog-container {
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
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
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
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
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
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
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
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
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
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
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
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
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
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
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
`],encapsulation:2,changeDetection:1})})()}return t})(),NC="--mat-dialog-transition-duration";function TC(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?Qi(t.substring(0,t.length-2)):t.endsWith("s")?Qi(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var nd=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(nd||{}),Wa=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Xn(1);_beforeClosed=new Xn(1);_result;_closeFallbackTimeout;_state=nd.OPEN;_closeInteractionType;constructor(n,e,r){this._ref=n,this._config=e,this._containerInstance=r,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),r._animationStateChanged.pipe(Ne(i=>i.state==="opened"),vt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),r._animationStateChanged.pipe(Ne(i=>i.state==="closed"),vt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),xn(this.backdropClick(),this.keydownEvents().pipe(Ne(i=>i.keyCode===27&&!this.disableClose&&!mr(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),AC(this,i.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Ne(r=>r.state==="closing"),vt(1)).subscribe(r=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),r.totalTime+100)}),this._state=nd.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=nd.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function AC(t,n,e){return t._closeInteractionType=n,t.close(e)}var lT=new g("MatMdcDialogData"),cT=new g("mat-mdc-dialog-default-options"),dT=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(O);return()=>lo(t)}}),qa=(()=>{class t{_defaultOptions=u(cT,{optional:!0});_scrollStrategy=u(dT);_parentDialog=u(t,{optional:!0,skipSelf:!0});_idGenerator=u(Ze);_injector=u(O);_dialog=u(Rp);_animationsDisabled=bt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=rd;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Io(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(dt(void 0)));constructor(){this._dialogRefConstructor=Wa,this._dialogContainerType=sT,this._dialogDataToken=lT}open(e,r){let i;r=_(_({},this._defaultOptions||new rd),r),r.id=r.id||this._idGenerator.getId("mat-mdc-dialog-"),r.scrollStrategy=r.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,z(_({},r),{positionStrategy:co(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||r.enterAnimationDuration?.toLocaleString()==="0"||r.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:r},{provide:gr,useValue:r}]},templateContext:()=>({dialogRef:i}),providers:(a,s,l)=>(i=new this._dialogRefConstructor(a,r,l),i.updatePosition(r?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i},{provide:ui,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(i);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(r=>r.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let r=e.length;for(;r--;)e[r].close()}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})(),RC=(()=>{class t{dialogRef=u(Wa,{optional:!0});_elementRef=u(F);_dialog=u(qa);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=LC(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let r=e._matDialogClose;r&&(this.dialogResult=r.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&AC(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(r,i){r&1&&Ae("click",function(a){return i._onButtonClick(a)}),r&2&&_e("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ut]})}return t})(),kC=(()=>{class t{_dialogRef=u(Wa,{optional:!0});_elementRef=u(F);_dialog=u(qa);ngOnInit(){this._dialogRef||(this._dialogRef=LC(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t})}return t})(),OC=(()=>{class t extends kC{id=u(Ze).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=xt(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(r,i){r&2&&Kt("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[he]})}return t})(),FC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[_m([cC])]})}return t})(),PC=(()=>{class t extends kC{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=xt(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(r,i){r&2&&J("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[he]})}return t})();function LC(t,n){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(r=>r.id===e.id):null}var id=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({providers:[qa],imports:[SC,di,li,we]})}return t})();function VC(t){return Error(`Unable to find icon with the name "${t}"`)}function fT(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function jC(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function BC(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Un=class{url;svgText;options;svgElement=null;constructor(n,e,r){this.url=n,this.svgText=e,this.options=r}},UC=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(e,r,i,o){this._httpClient=e,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(e,r,i){return this.addSvgIconInNamespace("",e,r,i)}addSvgIconLiteral(e,r,i){return this.addSvgIconLiteralInNamespace("",e,r,i)}addSvgIconInNamespace(e,r,i,o){return this._addSvgIconConfig(e,r,new Un(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,r,i,o){let a=this._sanitizer.sanitize(tt.HTML,i);if(!a)throw BC(i);let s=Ji(a);return this._addSvgIconConfig(e,r,new Un("",s,o))}addSvgIconSet(e,r){return this.addSvgIconSetInNamespace("",e,r)}addSvgIconSetLiteral(e,r){return this.addSvgIconSetLiteralInNamespace("",e,r)}addSvgIconSetInNamespace(e,r,i){return this._addSvgIconSetConfig(e,new Un(r,null,i))}addSvgIconSetLiteralInNamespace(e,r,i){let o=this._sanitizer.sanitize(tt.HTML,r);if(!o)throw BC(r);let a=Ji(o);return this._addSvgIconSetConfig(e,new Un("",a,i))}registerFontClassAlias(e,r=e){return this._fontCssClassesByAlias.set(e,r),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=pT(this._document),this._defaultFontSetClass}getSvgIconFromUrl(e){let r=this._sanitizer.sanitize(tt.RESOURCE_URL,e);if(!r)throw jC(e);let i=this._cachedIconsByUrl.get(r);return i?Ke(od(i)):this._loadSvgIconFromConfig(new Un(e,null)).pipe(Rr(o=>this._cachedIconsByUrl.set(r,o)),ue(o=>od(o)))}getNamedSvgIcon(e,r=""){let i=HC(r,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(r);return a?this._getSvgFromIconSetConfigs(e,a):$d(VC(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Ke(od(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(ue(r=>od(r)))}_getSvgFromIconSetConfigs(e,r){let i=this._extractIconWithNameFromAnySet(e,r);if(i)return Ke(i);let o=r.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ls(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(tt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Ke(null)})));return Mo(o).pipe(ue(()=>{let a=this._extractIconWithNameFromAnySet(e,r);if(!a)throw VC(e);return a}))}_extractIconWithNameFromAnySet(e,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Rr(r=>e.svgText=r),ue(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Ke(null):this._fetchIcon(e).pipe(Rr(r=>e.svgText=r))}_extractSvgIconFromSet(e,r,i){let o=e.querySelector(`[id="${r}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(Ji("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(e){let r=this._document.createElement("DIV");r.innerHTML=e;let i=r.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let r=this._svgElementFromString(Ji("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o],l=a.toLowerCase();l!=="id"&&!l.startsWith("on")&&r.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(e.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(e,r){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),r&&r.viewBox&&e.setAttribute("viewBox",r.viewBox),e}_fetchIcon(e){let{url:r,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw fT();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let a=this._sanitizer.sanitize(tt.RESOURCE_URL,r);if(!a)throw jC(r);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(ue(c=>Ji(c)),To(()=>this._inProgressUrlFetches.delete(a)),Ao());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,r,i){return this._svgIconConfigs.set(HC(e,r),i),this}_addSvgIconSetConfig(e,r){let i=this._iconSetConfigs.get(e);return i?i.push(r):this._iconSetConfigs.set(e,[r]),this}_svgElementFromConfig(e){if(!e.svgElement){let r=this._svgElementFromString(e.svgText);this._setSvgAttributes(r,e.options),e.svgElement=r}return e.svgElement}_getIconConfigFromResolvers(e,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,e);if(o)return mT(o)?new Un(o.url,null,o.options):new Un(o,null)}}static \u0275fac=function(r){return new(r||t)(T(ka,8),T(Oa),T(w,8),T(at))};static \u0275prov=Z({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function od(t){return t.cloneNode(!0)}function HC(t,n){return t+":"+n}function mT(t){return!!(t.url&&t.options)}function pT(t){let n=null,e=!1;return t.fonts&&typeof t.fonts.forEach=="function"&&t.fonts.forEach(r=>{let i=r.family.replace(/['"]/g,"").trim().toLowerCase();(i==="material icons"||i.startsWith("material icons "))&&(e=!0),i.startsWith("material symbols rounded")?n="rounded":i.startsWith("material symbols sharp")?n="sharp":i.startsWith("material symbols")&&(n="outlined")}),[n&&!e?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var hT=new g("MAT_ICON_DEFAULT_OPTIONS"),gT=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(w),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),zC=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],bT=zC.map(t=>`[${t}]`).join(", "),yT=/^url\(['"]?#(.*?)['"]?\)$/,$C=(()=>{class t{_elementRef=u(F);_iconRegistry=u(UC);_location=u(gT);_errorHandler=u(at);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let r=this._cleanupFontValue(e);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let r=this._cleanupFontValue(e);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=re.EMPTY;constructor(){let e=u(new sc("aria-hidden"),{optional:!0}),r=u(hT,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let r=e.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,r=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=e.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),r.forEach(i=>e.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let r=this._elementsWithExternalReferences,i=e.startsWith("//")?`/.${e}`:e;r&&r.forEach((o,a)=>{o.forEach(s=>{a.setAttribute(s.name,`url('${i}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let r=e.querySelectorAll(bT),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)zC.forEach(a=>{let s=r[o],l=s.getAttribute(a),c=l?l.match(yT):null;if(c){let d=i.get(s);d||(d=[],i.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[r,i]=this._splitIconName(e);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(vt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){return X({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,o){i&2&&(_e("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Qt(o.color?"mat-"+o.color:""),J("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Me],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(ze(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
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
`],encapsulation:2})})()}return t})(),GC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[we]})}return t})();var Fp=new g("MAT_MENU_PANEL"),Ya=(()=>{class t{_isAnchor;_elementRef=u(F);_document=u(w);_focusMonitor=u(fr);_parentMenu=u(Fp,{optional:!0});_changeDetectorRef=u(nt);role="menuitem";disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new x;_focused=new x;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(gt).load(Hc),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName==="A"}focus(e,r){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,r):this._getHostElement().focus(r),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?"-1":"0"}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),r=e.querySelectorAll("mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp");for(let i=0;i<r.length;i++)r[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],r=["mat-icon, [matMenuItemIcon]","*"];function i(o,a){o&1&&(fl(),I(0,"svg",2),He(1,"polygon",3),R())}return X({type:t,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:12,hostBindings:function(a,s){a&1&&Ae("click",function(c){return s._checkDisabled(c)})("mouseenter",function(){return s._handleMouseEnter()}),a&2&&(_e("role",s.role)("tabindex",s._getTabIndex())("aria-disabled",s._getAriaDisabled())("disabled",s._getDisabled()),J("mat-mdc-menu-item-highlighted",s._highlighted)("mat-mdc-menu-item-submenu-trigger",s._triggersSubmenu)("mat-mdc-menu-item-disabled",s.disabled)("mat-mdc-menu-item-disabled-interactive",s.disabledInteractive))},inputs:{role:"role",disabled:[2,"disabled","disabled",Me],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Me],disableRipple:[2,"disableRipple","disableRipple",Me]},exportAs:["matMenuItem"],ngContentSelectors:r,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(a,s){a&1&&(ze(e),Q(0),I(1,"span",0),Q(2,1),R(),He(3,"div",1),ge(4,i,2,0,"svg",2)),a&2&&(L(3),mt("matRippleDisabled",s.disableRipple||s.disabled)("matRippleTrigger",s._getHostElement()),L(),be(s._triggersSubmenu?4:-1))},dependencies:[nC],encapsulation:2})})()}return t})();var DT=new g("MatMenuContent");var xT=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Op="_mat-menu-enter",ad="_mat-menu-exit",mo=(()=>{class t{_elementRef=u(F);_changeDetectorRef=u(nt);_injector=u(O);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=bt();_allItems;_directDescendantItems=new On;_classList={};_panelAnimationState="void";_animationDone=new x;_isAnimating=K(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let r=this._previousPanelClass,i=_({},this._classList);r&&r.length&&r.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass="";get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new ie;close=this.closed;panelId=u(Ze).getId("mat-menu-panel-");constructor(){let e=u(xT);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Va(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(dt(this._directDescendantItems),wi(e=>xn(...e.map(r=>r._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let r=this._keyManager;if(this._panelAnimationState==="enter"&&r.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,r.activeItemIndex||0));i[o]&&!i[o].disabled?r.setActiveItem(o):r.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(dt(this._directDescendantItems),wi(r=>xn(...r.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let r=e.keyCode,i=this._keyManager;switch(r){case 27:mr(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(r===38||r===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(e);return}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ft(()=>{let r=this._resolvePanel();if(!r||!r.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&r&&r.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,r=this.yPosition){this._classList=z(_({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":r==="above","mat-menu-below":r==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let r=e===ad;(r||e===Op)&&(r&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(r?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Op||e===ad)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let r=this._resolvePanel();r&&(r.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ad),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Op:ad)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(dt(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(r=>r._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=["*"];function r(i,o){if(i&1){let a=fa();Le(0,"div",0),Ql("click",function(){mn(a);let l=Ve();return pn(l.closed.emit("click"))})("animationstart",function(l){mn(a);let c=Ve();return pn(c._onAnimationStart(l.animationName))})("animationend",function(l){mn(a);let c=Ve();return pn(c._onAnimationDone(l.animationName))})("animationcancel",function(l){mn(a);let c=Ve();return pn(c._onAnimationDone(l.animationName))}),Le(1,"div",1),Q(2),Ue()()}if(i&2){let a=Ve();Qt(a._classList),J("mat-menu-panel-animations-disabled",a._animationsDisabled)("mat-menu-panel-exit-animation",a._panelAnimationState==="void")("mat-menu-panel-animating",a._isAnimating()),Kt("id",a.panelId),_e("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null)("aria-describedby",a.ariaDescribedby||null)}}return X({type:t,selectors:[["mat-menu"]],contentQueries:function(o,a,s){if(o&1&&ar(s,DT,5)(s,Ya,5)(s,Ya,4),o&2){let l;Ce(l=De())&&(a.lazyContent=l.first),Ce(l=De())&&(a._allItems=l),Ce(l=De())&&(a.items=l)}},viewQuery:function(o,a){if(o&1&&yn(Dt,5),o&2){let s;Ce(s=De())&&(a.templateRef=s.first)}},hostVars:3,hostBindings:function(o,a){o&2&&_e("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Me],hasBackdrop:[2,"hasBackdrop","hasBackdrop",i=>i==null?null:Me(i)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[lt([{provide:Fp,useExisting:t}])],ngContentSelectors:e,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(o,a){o&1&&(ze(),Zl(0,r,3,12,"ng-template"))},styles:[`mat-menu {
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
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
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
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
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
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
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
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
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
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
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
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
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
`],encapsulation:2})})()}return t})(),wT=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(O);return()=>Qc(t)}});var fo=new WeakMap,ET=(()=>{class t{_canHaveBackdrop;_element=u(F);_viewContainerRef=u(Pt);_menuItemInstance=u(Ya,{optional:!0,self:!0});_dir=u(Ht,{optional:!0});_focusMonitor=u(fr);_ngZone=u(S);_injector=u(O);_scrollStrategy=u(wT);_changeDetectorRef=u(nt);_animationsDisabled=bt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=re.EMPTY;_menuCloseSubscription=re.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(r=>{this._destroyMenu(r),(r==="click"||r==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(r)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let r=u(Fp,{optional:!0});this._parentMaterialMenu=r instanceof mo?r:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&fo.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let r=this._menu;if(this._menuOpen||!r)return;this._pendingRemoval?.unsubscribe();let i=fo.get(r);fo.set(r,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(r),a=o.getConfig(),s=a.positionStrategy;this._setPosition(r,s),this._canHaveBackdrop?a.hasBackdrop=r.hasBackdrop==null?!this._triggersSubmenu():r.hasBackdrop:a.hasBackdrop=r.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(r)),r.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),r.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,r.direction=this.dir,e&&r.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),r instanceof mo&&(r._setIsOpen(!0),r._directDescendantItems.changes.pipe(Nt(r.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(e,r){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,r):this._element.nativeElement.focus(r)}_destroyMenu(e){let r=this._overlayRef,i=this._menu;!r||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof mo&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(vt(1)).subscribe(()=>{r.detach(),fo.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(r.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&fo.delete(i),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let r=this._getOverlayConfig(e);this._subscribeToPositions(e,r.positionStrategy),this._overlayRef=uo(this._injector,r),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof mo&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new hr({positionStrategy:ed(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,r){e.setPositionClasses&&r.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",a=i.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a)})})}_setPosition(e,r){let[i,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,s]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[a,s],[d,f]=[i,o],p=0;if(this._triggersSubmenu()){if(f=i=e.xPosition==="before"?"start":"end",o=d=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let m=this._parentMaterialMenu.items.first;this._parentInnerPadding=m?m._getHostElement().offsetTop:0}p=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(l=a==="top"?"bottom":"top",c=s==="top"?"bottom":"top");r.withPositions([{originX:i,originY:l,overlayX:d,overlayY:a,offsetY:p},{originX:o,originY:l,overlayX:f,overlayY:a,offsetY:p},{originX:i,originY:c,overlayX:d,overlayY:s,offsetY:-p},{originX:o,originY:c,overlayX:f,overlayY:s,offsetY:-p}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),r=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:Ke(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ne(a=>this._menuOpen&&a!==this._menuItemInstance)):Ke();return xn(e,i,o,r)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new pr(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return fo.get(e)===this}_triggerIsAriaDisabled(){return Me(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(r){dm()};static \u0275dir=M({type:t})}return t})(),WC=(()=>{class t extends ET{_cleanupTouchstart;_hoverSubscription=re.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new ie;onMenuOpen=this.menuOpened;menuClosed=new ie;onMenuClose=this.menuClosed;constructor(){super(!0);let e=u(ve);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",r=>{ii(r)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){ri(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let r=e.keyCode;(r===13||r===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(r===39&&this.dir==="ltr"||r===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(r,i){r&1&&Ae("click",function(a){return i._handleClick(a)})("mousedown",function(a){return i._handleMousedown(a)})("keydown",function(a){return i._handleKeydown(a)}),r&2&&_e("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[he]})}return t})();var qC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[Uc,di,we,Gc]})}return t})();var IT=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),YC=(()=>{class t{_elementRef=u(F);_platform=u(de);_document=u(w);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=["*",[["mat-toolbar-row"]]];return X({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,a,s){if(o&1&&ar(s,IT,5),o&2){let l;Ce(l=De())&&(a._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,a){o&2&&(Qt(a.color?"mat-"+a.color:""),J("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(o,a){o&1&&(ze(e),Q(0),Q(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
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
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return t})();var XC=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[we]})}return t})();var po={api:"./",appname:"Minecraft server status",production:!0,theme:"azure-blue",serverIp:"85.215.76.190",serverPort:"25565"};var rD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,r){this._renderer=e,this._elementRef=r}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(r){return new(r||t)(ae(ve),ae(F))};static \u0275dir=M({type:t})}return t})(),NT=(()=>{class t extends rD{static \u0275fac=(()=>{let e;return function(i){return(e||(e=xt(t)))(i||t)}})();static \u0275dir=M({type:t,features:[he]})}return t})(),iD=new g("");var TT={provide:iD,useExisting:Tt(()=>bd),multi:!0};function AT(){let t=Vt()?Vt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var RT=new g(""),bd=(()=>{class t extends rD{_compositionMode;_composing=!1;constructor(e,r,i){super(e,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!AT())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(r){return new(r||t)(ae(ve),ae(F),ae(RT,8))};static \u0275dir=M({type:t,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&Ae("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[lt([TT]),he]})}return t})();function Bp(t){return t==null||Hp(t)===0}function Hp(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var yd=new g(""),Up=new g(""),kT=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,es=class{static min(n){return OT(n)}static max(n){return FT(n)}static required(n){return oD(n)}static requiredTrue(n){return PT(n)}static email(n){return LT(n)}static minLength(n){return VT(n)}static maxLength(n){return jT(n)}static pattern(n){return BT(n)}static nullValidator(n){return cd()}static compose(n){return uD(n)}static composeAsync(n){return fD(n)}};function OT(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function FT(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function oD(t){return Bp(t.value)?{required:!0}:null}function PT(t){return t.value===!0?null:{required:!0}}function LT(t){return Bp(t.value)||kT.test(t.value)?null:{email:!0}}function VT(t){return n=>{let e=n.value?.length??Hp(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function jT(t){return n=>{let e=n.value?.length??Hp(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function BT(t){if(!t)return cd;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),r=>{if(Bp(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function cd(t){return null}function aD(t){return t!=null}function sD(t){return ti(t)?Mt(t):t}function lD(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function cD(t,n){return n.map(e=>e(t))}function HT(t){return!t.validate}function dD(t){return t.map(n=>HT(n)?n:e=>n.validate(e))}function uD(t){if(!t)return null;let n=t.filter(aD);return n.length==0?null:function(e){return lD(cD(e,n))}}function zp(t){return t!=null?uD(dD(t)):null}function fD(t){if(!t)return null;let n=t.filter(aD);return n.length==0?null:function(e){let r=cD(e,n).map(sD);return Mo(r).pipe(ue(lD))}}function $p(t){return t!=null?fD(dD(t)):null}function ZC(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function mD(t){return t._rawValidators}function pD(t){return t._rawAsyncValidators}function Pp(t){return t?Array.isArray(t)?t:[t]:[]}function dd(t,n){return Array.isArray(t)?t.includes(n):t===n}function KC(t,n){let e=Pp(n);return Pp(t).forEach(i=>{dd(e,i)||e.push(i)}),e}function QC(t,n){return Pp(n).filter(e=>!dd(t,e))}var ud=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=zp(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=$p(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},br=class extends ud{name;get formDirective(){return null}get path(){return null}};var Xa="VALID",sd="INVALID",ho="PENDING",Za="DISABLED",yr=class{},fd=class extends yr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Qa=class extends yr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Ja=class extends yr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},go=class extends yr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},md=class extends yr{source;constructor(n){super(),this.source=n}},fi=class extends yr{source;constructor(n){super(),this.source=n}};function Gp(t){return(vd(t)?t.validators:t)||null}function UT(t){return Array.isArray(t)?zp(t):t||null}function Wp(t,n){return(vd(n)?n.asyncValidators:t)||null}function zT(t){return Array.isArray(t)?$p(t):t||null}function vd(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function hD(t,n,e){let r=t.controls;if(!(n?Object.keys(r):r).length)throw new v(1e3,"");if(!bD(r,e))throw new v(1001,"")}function gD(t,n,e){t._forEachChild((r,i)=>{if(e[i]===void 0)throw new v(-1002,"")})}var $T=Symbol();var bo=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=K(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this[$T]=!0,this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return q(this.statusReactive)}set status(n){q(()=>this.statusReactive.set(n))}_status=Ie(()=>this.statusReactive());statusReactive=K(void 0);get valid(){return this.status===Xa}get invalid(){return this.status===sd}get pending(){return this.status===ho}get disabled(){return this.status===Za}get enabled(){return this.status!==Za}get errors(){return q(this.errorsReactive)}set errors(n){q(()=>this.errorsReactive.set(n))}_errors=Ie(()=>this.errorsReactive());errorsReactive=K(null);get pristine(){return q(this.pristineReactive)}set pristine(n){q(()=>this.pristineReactive.set(n))}_pristine=Ie(()=>this.pristineReactive());pristineReactive=K(!0);get dirty(){return!this.pristine}get touched(){return q(this.touchedReactive)}set touched(n){q(()=>this.touchedReactive.set(n))}_touched=Ie(()=>this.touchedReactive());touchedReactive=K(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(KC(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(KC(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(QC(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(QC(n,this._rawAsyncValidators))}hasValidator(n){return dd(this._rawValidators,n)}hasAsyncValidator(n){return dd(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(z(_({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new Ja(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),e&&n.emitEvent!==!1&&this._events.next(new Ja(!1,r))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(z(_({},n),{sourceControl:r})),e&&n.emitEvent!==!1&&this._events.next(new Qa(!1,r))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),e&&n.emitEvent!==!1&&this._events.next(new Qa(!0,r))}markAsPending(n={}){this.status=ho;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new go(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(z(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Za,this.errors=null,this._forEachChild(i=>{i.disable(z(_({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new fd(this.value,r)),this._events.next(new go(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(z(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Xa,this._forEachChild(r=>{r.enable(z(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(z(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xa||this.status===ho)&&this._runAsyncValidator(r,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new fd(this.value,e)),this._events.next(new go(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(z(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Za:Xa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ho,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let r=sD(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){let r=e?this.get(e):this;return r?.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new go(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,r)}_initObservables(){this.valueChanges=new ie,this.statusChanges=new ie}_calculateStatus(){return this._allControlsDisabled()?Za:this.errors?sd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ho)?ho:this._anyControlsHaveStatus(sd)?sd:Xa}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,e),i&&this._events.next(new Qa(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ja(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){vd(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=UT(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=zT(this._rawAsyncValidators)}_updateHasRequiredValidator(){q(()=>this._hasRequired.set(this.hasValidator(es.required)))}};function bD(t,n){return Object.hasOwn(t,n)}function GT(t){return t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"}function WT(t,n,e,r){switch(e){case"name":t.setAttribute(n,e,r);break;case"disabled":case"readonly":case"required":r?t.setAttribute(n,e,""):t.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?t.setAttribute(n,e,r.toString()):t.removeAttribute(n,e);break}}var Lp=class{kind;context;control;message;constructor({kind:n,context:e,control:r}){this.kind=n,this.context=e,this.control=r}},qT=new g(""),qp=new g("",{factory:()=>Yp}),Yp="always";function YT(t,n){return[...n.path,t]}function XT(t,n,e=Yp){_d(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),KT(t,n),JT(t,n),QT(t,n),ZT(t,n)}function JC(t,n,e=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),hd(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function pd(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function ZT(t,n){if(n.valueAccessor.setDisabledState){let e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function _d(t,n){let e=mD(t);n.validator!==null?t.setValidators(ZC(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let r=pD(t);n.asyncValidator!==null?t.setAsyncValidators(ZC(r,n.asyncValidator)):typeof r=="function"&&t.setAsyncValidators([r]);let i=()=>t.updateValueAndValidity();pd(n._rawValidators,i),pd(n._rawAsyncValidators,i)}function hd(t,n){let e=!1;if(t!==null){if(n.validator!==null){let i=mD(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.validator);o.length!==i.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let i=pD(t);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.asyncValidator);o.length!==i.length&&(e=!0,t.setAsyncValidators(o))}}}let r=()=>{};return pd(n._rawValidators,r),pd(n._rawAsyncValidators,r),e}function KT(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&yD(t,n)})}function QT(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&yD(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function yD(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function JT(t,n){let e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function vD(t,n){t==null,_d(t,n)}function eA(t,n){return hd(t,n)}function tA(t,n){if(!Object.hasOwn(t,"model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function nA(t){return Object.getPrototypeOf(t.constructor)===NT}function _D(t,n){t._syncPendingControls(),n.forEach(e=>{let r=e.control;r.updateOn==="submit"&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function rA(t,n){if(!n)return null;Array.isArray(n);let e,r,i;return n.forEach(o=>{o.constructor===bd?e=o:nA(o)?r=o:i=o}),i||r||e||null}function iA(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var oA=(()=>{class t{_validator=cd;_onChange;get _enabled(){return this.enabledReactive()}enabledReactive=K(void 0);ngOnChanges(e){if(this.inputName in e){let r=this.normalizeInput(e[this.inputName].currentValue),i=this.enabled(r);this.enabledReactive.set(i),this._validator=i?this.createValidator(r):cd,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,features:[ut]})}return t})();var aA={provide:yd,useExisting:Tt(()=>CD),multi:!0};var CD=(()=>{class t extends oA{required;inputName="required";normalizeInput=Me;createValidator=e=>oD;enabled(e){return e}static \u0275fac=(()=>{let e;return function(i){return(e||(e=xt(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,i){r&2&&_e("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[lt([aA]),he]})}return t})();var sA={provide:qT,useFactory:()=>{let t=u(vr,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}},vr=class extends ud{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof fi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=rA(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(n,e,r){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=r,this.injector?.get($e)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.control,e=this.injector?.get(nt);if(!n||!e)return;_d(n,this);let r=e.markForCheck.bind(e);if(this.subscription=new re,this.subscription.add(()=>this.discardPendingCustomValue(n)),typeof n.registerOnChange=="function"){let i=(o,a)=>{this.discardPendingCustomValue(n),a&&this.viewToModelUpdate(o),r()};n.registerOnChange(i),this.subscription.add(()=>n._unregisterOnChange(i))}this.subscription.add(n.valueChanges.subscribe(r)),this.subscription.add(n.statusChanges.subscribe(r)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=n.events.subscribe(i=>{i instanceof fi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&n.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(i=>{let o=this.control;o&&(o._pendingValue=i,o._pendingChange=!0,o._pendingDirty=!0,this.pendingCustomValue=i,this.hasPendingCustomValue=!0,o.updateOn==="change"&&this.updateControlFromCustom(o))}),n.listenToCustomControlOutput("touch",()=>{let i=this.control;i&&(i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&this.updateControlFromCustom(i),i.updateOn!=="submit"&&i.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=GT(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof CD))}updateControlFromCustom(n){let e=n._pendingValue;n._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=e),n._pendingDirty&&n.markAsDirty(),n.setValue(e,{emitModelToViewChange:!1}),this.viewToModelUpdate(n.value)}discardPendingCustomValue(n){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),n._pendingValue=n.value,n._pendingChange=!1,n._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(n){if(!this.isCustomControlBased)return;let e=this.control,r=this.customControlBindings;if(!e||!r)return;this.hasPendingCustomValue&&!e._pendingChange&&(r.value=this.pendingCustomValue,this.clearPendingCustomValue()),e._status(),e._errors(),Object.is(r.value,e.value)||(this.discardPendingCustomValue(e),r.value=e.value,n.setCustomControlModelInput(e.value)),this.bindControlProperty(n,r,"touched",e.touched),this.bindControlProperty(n,r,"dirty",e.dirty),this.bindControlProperty(n,r,"valid",e.valid),this.bindControlProperty(n,r,"invalid",e.invalid),this.bindControlProperty(n,r,"pending",e.pending),this.bindControlProperty(n,r,"disabled",e.disabled);let i=this.requiredValidatorViaDi;if(i){let a=this.isRequired;n.setInputOnDirectives("required",a,(s,l)=>l!==i&&s!==a)}else this.bindControlProperty(n,r,"required",this.isRequired);let o=e.errors;if(r.errors!==o){r.errors=o;let a=this._convertErrors(o);n.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}bindControlProperty(n,e,r,i){if(e[r]===i)return;e[r]=i;let o=n.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r==="disabled"||r==="required")&&this.renderer&&WT(this.renderer,n.nativeElement,r,i)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([r,i])=>new Lp({context:i,kind:r,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,r=Ie(()=>{let i=n();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=()=>(e=q(r),e),Ct(()=>{let i=r();i!==e&&(e=i,this.control?.updateValueAndValidity({emitEvent:!1}),this.injector?.get(nt)?.markForCheck())},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},gd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var DD=(()=>{class t extends gd{constructor(e){super(e)}static \u0275fac=function(r){return new(r||t)(ae(vr,2))};static \u0275dir=M({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&J("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[he]})}return t})(),xD=(()=>{class t extends gd{constructor(e){super(e)}static \u0275fac=function(r){return new(r||t)(ae(br,10))};static \u0275dir=M({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){r&2&&J("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[he]})}return t})(),yo=class extends bo{constructor(n,e,r){super(Gp(e),Wp(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let r=this._find(n);return r||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){q(()=>{gD(this,!0,n),Object.keys(n).forEach(r=>{hD(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this._find(r);i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,z(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fi(this))}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>r._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,r]of Object.entries(this.controls))if(this.contains(e)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(n,e){let r=n;return this._forEachChild((i,o)=>{r=e(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return bD(this.controls,n)?this.controls[n]:null}};var Vp=class extends yo{};var lA={provide:br,useExisting:Tt(()=>Xp)},Ka=Promise.resolve(),Xp=(()=>{class t extends br{callSetDisabledState;get submitted(){return q(this.submittedReactive)}_submitted=Ie(()=>this.submittedReactive());submittedReactive=K(!1);_directives=new Set;form;ngSubmit=new ie;options;constructor(e,r,i){super(),this.callSetDisabledState=i,this.form=new yo({},zp(e),$p(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ka.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ka.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ka.then(()=>{let r=this._findContainer(e.path),i=new yo({});vD(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ka.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){Ka.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),_D(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new md(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(r){return new(r||t)(ae(yd,10),ae(Up,10),ae(qp,8))};static \u0275dir=M({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&Ae("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[lt([lA]),he]})}return t})();function eD(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function tD(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ld=class extends bo{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,r){super(Gp(e),Wp(r,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),vd(e)&&(e.nonNullable||e.initialValueIsDefault)&&(tD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){q(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new fi(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){eD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){eD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){tD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var cA=t=>t instanceof ld;var dA=(()=>{class t extends br{callSetDisabledState;get submitted(){return q(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Ie(()=>this._submittedReactive());_submittedReactive=K(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,r,i){super(),this.callSetDisabledState=i,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new v(1052,!1);Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(hd(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let r=this.form.get(e.path);if(!r)throw new v(-1055,!1);return e._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){JC(e.control||null,e,!1),iA(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,r){this.form.get(e.path).setValue(r)}onReset(){this.resetForm()}resetForm(e=void 0,r={}){this.form.reset(e,r),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,_D(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new md(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let r=e.control,i=this.form.get(e.path);r!==i&&(JC(r||null,e),cA(i)&&e._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let r=this.form.get(e.path);vD(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let r=this.form?.get(e.path);r&&eA(r,e)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){_d(this.form,this),this._oldForm&&hd(this._oldForm,this)}static \u0275fac=function(r){return new(r||t)(ae(yd,10),ae(Up,10),ae(qp,8))};static \u0275dir=M({type:t,features:[he,ut]})}return t})(),uA={provide:br,useExisting:Tt(()=>ts)},ts=(()=>{class t extends dA{form=null;ngSubmit=new ie;get control(){return this.form}static \u0275fac=(()=>{let e;return function(i){return(e||(e=xt(t)))(i||t)}})();static \u0275dir=M({type:t,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&Ae("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[lt([uA]),he]})}return t})();var wD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var jp=class extends bo{constructor(n,e,r){super(Gp(e),Wp(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(r=>{this.controls.push(r),this._registerControl(r)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,r={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,e={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,r={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){q(()=>{gD(this,!1,n),n.forEach((r,i)=>{hD(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(n.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((r,i)=>{r.reset(n[i],z(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fi(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,r)=>r._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,r)=>{n(e,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var ED=new g("");var fA={provide:vr,useExisting:Tt(()=>Zp)},Zp=(()=>{class t extends vr{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new ie;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,r,i,o,a,s,l){super(l,s,o),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(e,r){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,XT(e,this,r))}ngOnChanges(e){this._added||this._setUpControl(),tA(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return YT(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){if(this.isCustomControlBased){if(!this.control){let r=this.formDirective?.getControl(this);if(!r)return;this.control=r}super.ngControlUpdate(e)}}static \u0275fac=function(r){return new(r||t)(ae(br,13),ae(yd,10),ae(Up,10),ae(iD,10),ae(ED,8),ae(ve,8),ae(O,8))};static \u0275dir=M({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[lt([fA,sA]),he,ut,vm(null)]})}return t})();var mA=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({})}return t})();function nD(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var SD=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,r=null){let i=this._reduceControls(e),o={};return nD(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new yo(i,o)}record(e,r=null){let i=this._reduceControls(e);return new Vp(i,r)}control(e,r,i){let o={};return this.useNonNullable?(nD(r)?o=r:(o.validators=r,o.asyncValidators=i),new ld(e,z(_({},o),{nonNullable:!0}))):new ld(e,r,i)}array(e,r,i){let o=e.map(a=>this._createControl(a));return new jp(o,r,i)}_reduceControls(e){let r={};return Object.keys(e).forEach(i=>{r[i]=this._createControl(e[i])}),r}_createControl(e){if(e instanceof ld)return e;if(e instanceof bo)return e;if(Array.isArray(e)){let r=e[0],i=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(r,i,o)}else return this.control(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var ID=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ED,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:qp,useValue:e.callSetDisabledState??Yp}]}}static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[mA]})}return t})();var hA=new g("MAT_CARD_CONFIG"),MD=(()=>{class t{appearance;constructor(){let e=u(hA,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){return X({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,o){i&2&&J("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(ze(),Q(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
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
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
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
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
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
`],encapsulation:2})})()}return t})(),ND=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var TD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var AD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"];return X({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(o,a){o&1&&(ze(e),Q(0),Le(1,"div",0),Q(2,1),Ue(),Q(3,2))},encapsulation:2})})()}return t})();var RD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[we]})}return t})();var OD=Symbol("FIELD_TREE");var FD=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),kD=class{reducer;create;brand;[FD];constructor(n,e){this.reducer=n,this.create=e}};function ns(t){return typeof t=="function"&&t[OD]===!0}var PD=new g("");var Kp=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new U(e=>{let r=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(ue(e=>e.filter(r=>r.target===n)),Ne(e=>e.length>0),Bs({bufferSize:1,refCount:!0}),Nt(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},LD=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(S);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new Kp(i)),this._observers.get(i).observe(e)}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var rs=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["mat-label"]]})}return t})(),bA=new g("MatError");var Qp=(()=>{class t{align="start";id=u(Ze).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(Kt("id",i.id),_e("align",null),J("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),yA=new g("MatPrefix");var vA=new g("MatSuffix");var $D=new g("FloatingLabelParent"),VD=(()=>{class t{_elementRef=u(F);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(LD);_ngZone=u(S);_parent=u($D);_resizeSubscription=new re;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return _A(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&J("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function _A(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let r=e.scrollWidth;return e.remove(),r}var jD="mdc-line-ripple--active",Cd="mdc-line-ripple--deactivating",BD=(()=>{class t{_elementRef=u(F);_cleanupTransitionEnd;constructor(){let e=u(S),r=u(ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Cd),e.add(jD)}deactivate(){this._elementRef.nativeElement.classList.add(Cd)}_handleTransitionEnd=e=>{let r=this._elementRef.nativeElement.classList,i=r.contains(Cd);e.propertyName==="opacity"&&i&&r.remove(jD,Cd)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),HD=(()=>{class t{_elementRef=u(F);_ngZone=u(S);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,r=e.querySelector(".mdc-floating-label");r?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let r=this._notch.nativeElement;!this.open||!e?r.style.width="":r.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=["notch"];return X({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(o,a){if(o&1&&yn(e,5),o&2){let s;Ce(s=De())&&(a._notch=s.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(o,a){o&2&&J("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(o,a){o&1&&(ze(),Xe(0,"div",1),Le(1,"div",2,0),Q(3),Ue(),Xe(4,"div",3))},encapsulation:2})})()}return t})(),Jp=(()=>{class t{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t})}return t})();var eh=new g("MatFormField"),CA=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),UD="fill",DA="auto",zD="fixed",xA="translateY(-50%)",Dd=(()=>{class t{_elementRef=u(F);_changeDetectorRef=u(nt);_platform=u(de);_idGenerator=u(Ze);_ngZone=u(S);_defaults=u(CA,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return st(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=_a("iconPrefixContainer");_textPrefixContainerSignal=_a("textPrefixContainer");_iconSuffixContainerSignal=_a("iconSuffixContainer");_textSuffixContainerSignal=_a("textSuffixContainer");_prefixSuffixContainers=Ie(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Lv(rs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ro(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||DA}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let r=e||this._defaults?.appearance||UD;this._appearanceSignal.set(r)}_appearanceSignal=K(UD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||zD}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||zD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=bt();constructor(){let e=this._defaults,r=u(Ht);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ct(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=ns(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!ns(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Ie(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let r=this._control,i="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges?.pipe(dt([void 0,void 0]),ue(()=>[this._unwrapMaybeSignal(r.errorState),r.userAriaDescribedBy]),js(),Ne(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&!ns(r.ngField)&&(this._valueChanges=r.ngControl.valueChanges.pipe(Nt(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),xn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Pm({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Ie(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let r=this._control?.ngField||this._control?.ngControl;if(!r)return!1;if(ns(r)){let i=r();return e==="valid"?i.valid():e==="dirty"?i.dirty():e==="touched"?i.touched():e==="pending"?i.pending():e==="untouched"?!i.touched():e==="pristine"?!i.dirty():e==="invalid"?!i.valid():!1}else{let i=r;return e==="valid"?i.valid:e==="dirty"?i.dirty:e==="touched"?i.touched:e==="pending"?i.pending:e==="untouched"?i.untouched:e==="pristine"?i.pristine:e==="invalid"?i.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||e;i=e.concat(r.filter(a=>a&&!o.includes(a)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,h=`var(--mat-mdc-form-field-label-transform, ${xA} translateX(${m}))`,y=a+s+l+c;return[h,y]}_writeOutlinedLabelStyles(e){if(e!==null){let[r,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let r=e.getRootNode();return r&&r!==e}return document.documentElement.contains(e)}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],r=["textPrefixContainer"],i=["iconSuffixContainer"],o=["textSuffixContainer"],a=["textField"],s=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],l=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function c(j,oe){j&1&&He(0,"span",21)}function d(j,oe){if(j&1&&(I(0,"label",20),Q(1,1),ge(2,c,1,0,"span",21),R()),j&2){let b=Ve(2);mt("floating",b._shouldLabelFloat())("monitorResize",b._hasOutline())("id",b._labelId),_e("for",b._control.disableAutomaticLabeling?null:b._control.id),L(2),be(!b.hideRequiredMarker&&b._unwrapMaybeSignal(b._control.required)?2:-1)}}function f(j,oe){if(j&1&&ge(0,d,3,5,"label",20),j&2){let b=Ve();be(b._hasFloatingLabel()?0:-1)}}function p(j,oe){j&1&&He(0,"div",7)}function m(j,oe){}function h(j,oe){if(j&1&&Lt(0,m,0,0,"ng-template",13),j&2){Ve(2);let b=sr(1);mt("ngTemplateOutlet",b)}}function y(j,oe){if(j&1&&(I(0,"div",9),ge(1,h,1,1,null,13),R()),j&2){let b=Ve();mt("matFormFieldNotchedOutlineOpen",b._shouldLabelFloat()),L(),be(b._forceDisplayInfixLabel()?-1:1)}}function C(j,oe){j&1&&(I(0,"div",10,2),Q(2,2),R())}function D(j,oe){j&1&&(I(0,"div",11,3),Q(2,3),R())}function Y(j,oe){}function yt(j,oe){if(j&1&&Lt(0,Y,0,0,"ng-template",13),j&2){Ve();let b=sr(1);mt("ngTemplateOutlet",b)}}function _r(j,oe){j&1&&(I(0,"div",14,4),Q(2,4),R())}function rn(j,oe){j&1&&(I(0,"div",15,5),Q(2,5),R())}function Cr(j,oe){j&1&&He(0,"div",16)}function Dr(j,oe){j&1&&(I(0,"div",18),Q(1,6),R())}function zn(j,oe){if(j&1&&(I(0,"mat-hint",22),se(1),R()),j&2){let b=Ve(2);mt("id",b._hintLabelId),L(),Yi(b.hintLabel)}}function on(j,oe){if(j&1&&(I(0,"div",19),ge(1,zn,2,2,"mat-hint",22),Q(2,7),He(3,"div",23),Q(4,8),R()),j&2){let b=Ve();L(),be(b.hintLabel?1:-1)}}return X({type:t,selectors:[["mat-form-field"]],contentQueries:function(oe,b,le){if(oe&1&&(Jl(le,b._labelChild,rs,5),ar(le,Jp,5)(le,yA,5)(le,vA,5)(le,bA,5)(le,Qp,5)),oe&2){tc();let it;Ce(it=De())&&(b._formFieldControl=it.first),Ce(it=De())&&(b._prefixChildren=it),Ce(it=De())&&(b._suffixChildren=it),Ce(it=De())&&(b._errorChildren=it),Ce(it=De())&&(b._hintChildren=it)}},viewQuery:function(oe,b){if(oe&1&&(ec(b._iconPrefixContainerSignal,e,5)(b._textPrefixContainerSignal,r,5)(b._iconSuffixContainerSignal,i,5)(b._textSuffixContainerSignal,o,5),yn(a,5)(e,5)(r,5)(i,5)(o,5)(VD,5)(HD,5)(BD,5)),oe&2){tc(4);let le;Ce(le=De())&&(b._textField=le.first),Ce(le=De())&&(b._iconPrefixContainer=le.first),Ce(le=De())&&(b._textPrefixContainer=le.first),Ce(le=De())&&(b._iconSuffixContainer=le.first),Ce(le=De())&&(b._textSuffixContainer=le.first),Ce(le=De())&&(b._floatingLabel=le.first),Ce(le=De())&&(b._notchedOutline=le.first),Ce(le=De())&&(b._lineRipple=le.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(oe,b){oe&2&&J("mat-mdc-form-field-label-always-float",b._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",b._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",b._hasIconSuffix)("mat-form-field-invalid",b._unwrapMaybeSignal(b._control.errorState))("mat-form-field-disabled",b._unwrapMaybeSignal(b._control.disabled))("mat-form-field-autofilled",b._unwrapMaybeSignal(b._control.autofilled))("mat-form-field-appearance-fill",b.appearance=="fill")("mat-form-field-appearance-outline",b.appearance=="outline")("mat-form-field-hide-placeholder",b._hasFloatingLabel()&&!b._shouldLabelFloat())("mat-primary",b.color!=="accent"&&b.color!=="warn")("mat-accent",b.color==="accent")("mat-warn",b.color==="warn")("ng-untouched",b._shouldForward("untouched"))("ng-touched",b._shouldForward("touched"))("ng-pristine",b._shouldForward("pristine"))("ng-dirty",b._shouldForward("dirty"))("ng-valid",b._shouldForward("valid"))("ng-invalid",b._shouldForward("invalid"))("ng-pending",b._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[lt([{provide:eh,useExisting:t},{provide:$D,useExisting:t}])],ngContentSelectors:l,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(oe,b){if(oe&1&&(ze(s),Lt(0,f,1,1,"ng-template",null,0,pa),I(2,"div",6,1),Ae("click",function(it){return b._control.onContainerClick(it)}),ge(4,p,1,0,"div",7),I(5,"div",8),ge(6,y,2,2,"div",9),ge(7,C,3,0,"div",10),ge(8,D,3,0,"div",11),I(9,"div",12),ge(10,yt,1,1,null,13),Q(11),R(),ge(12,_r,3,0,"div",14),ge(13,rn,3,0,"div",15),R(),ge(14,Cr,1,0,"div",16),R(),I(15,"div",17),ge(16,Dr,2,0,"div",18)(17,on,5,1,"div",19),R()),oe&2){let le,it=b._unwrapMaybeSignal(b._control.disabled);L(2),J("mdc-text-field--filled",!b._hasOutline())("mdc-text-field--outlined",b._hasOutline())("mdc-text-field--no-label",!b._hasFloatingLabel())("mdc-text-field--disabled",it)("mdc-text-field--invalid",b._unwrapMaybeSignal(b._control.errorState)),L(2),be(!b._hasOutline()&&!it?4:-1),L(2),be(b._hasOutline()?6:-1),L(),be(b._hasIconPrefix?7:-1),L(),be(b._hasTextPrefix?8:-1),L(2),be(!b._hasOutline()||b._forceDisplayInfixLabel()?10:-1),L(2),be(b._hasTextSuffix?12:-1),L(),be(b._hasIconSuffix?13:-1),L(),be(b._hasOutline()?-1:14),L(),J("mat-mdc-form-field-subscript-dynamic-size",b.subscriptSizing==="dynamic");let tx=b._getSubscriptMessageType();L(),be((le=tx)==="error"?16:le==="hint"?17:-1)}},dependencies:[VD,HD,Hm,BD,Qp],styles:[`.mdc-text-field {
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
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
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
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
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
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
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

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
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
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
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
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
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

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
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
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
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
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
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
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
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
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
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
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
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
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
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
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
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
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
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
`],encapsulation:2})})()}return t})();var is=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[Fc,Dd,we]})}return t})();var EA=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275cmp=X({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return t})(),SA={passive:!0},GD=(()=>{class t{_platform=u(de);_ngZone=u(S);_renderer=u(Fe).createRenderer(null,null);_styleLoader=u(gt);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Tr;this._styleLoader.load(EA);let r=St(e),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new x,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(a)?(r.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(a)&&(r.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",s,SA)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(e){let r=St(e),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((e,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var WD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({})}return t})();var qD=new g("MAT_INPUT_VALUE_ACCESSOR");var YD=(()=>{class t{isErrorState(e,r){return!!(e&&e.invalid&&(e.touched||r&&r.submitted))}isSignalErrorState(e){if(!e)return!1;let r=e().invalid(),i=e().touched();return r&&i}static \u0275fac=function(r){return new(r||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})}return t})();var xd=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,r,i,o){this._defaultMatcher=n,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o,e?st(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,r=this.ngControl?this.ngControl.control:null;return n?.isErrorState(r,e)??!1}};var IA=["button","checkbox","file","hidden","image","radio","range","reset","submit"],MA=new g("MAT_INPUT_CONFIG"),XD=(()=>{class t{_elementRef=u(F);_platform=u(de);ngControl=u(vr,{optional:!0,self:!0});_autofillMonitor=u(GD);_ngZone=u(S);_formField=u(eh,{optional:!0});_renderer=u(ve);_uid=u(Ze).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(MA,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ro(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(es.required)??!1}set required(e){this._required=ro(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&hp().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ro(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>hp().has(e));constructor(){let e=u(Xp,{optional:!0}),r=u(ts,{optional:!0}),i=u(YD),o=u(qD,{optional:!0,self:!0}),a=u(PD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,l=s.nodeName.toLowerCase();o?st(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new xd(i,a||this.ngControl,r,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ct(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=e,e?r.setAttribute("placeholder",e):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){IA.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,r=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let r=this._elementRef.nativeElement;e.length?r.setAttribute("aria-describedby",e.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let r=e.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||t)};static \u0275dir=M({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&Ae("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(Kt("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),_e("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),J("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Me]},exportAs:["matInput"],features:[lt([{provide:Jp,useExisting:t}]),ut]})}return t})(),ZD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[is,is,WD,we]})}return t})();var TA=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var QD=(()=>{class t{_elementRef=u(F);_ngZone=u(S);_changeDetectorRef=u(nt);_renderer=u(ve);_cleanupTransitionEnd;constructor(){let e=gp(),r=u(TA,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=KD(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=KD(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ie;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(r){return new(r||t)};static \u0275cmp=(function(){function e(r,i){r&1&&Xe(0,"div",2)}return X({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,o){i&2&&(_e("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),Qt("mat-"+o.color),J("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ca],bufferValue:[2,"bufferValue","bufferValue",Ca],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,o){i&1&&(Le(0,"div",0),Xe(1,"div",1),ge(2,e,1,0,"div",2),Ue(),Le(3,"div",3),Xe(4,"span",4),Ue(),Le(5,"div",5),Xe(6,"span",4),Ue()),i&2&&(L(),lr("flex-basis",o._getBufferBarFlexBasis()),L(),be(o.mode==="buffer"?2:-1),L(),lr("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
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
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
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
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
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
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
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
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
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
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
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
`],encapsulation:2})})()}return t})();function KD(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var JD=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=B({type:t});static \u0275inj=V({imports:[we]})}return t})();var wd=class t{#e=K("");#t=M_(()=>{if(this.#e())return`https://api.mcsrvstat.us/2/${this.#e()}`});setAddress(n){this.#e.set(n)}getStatus(){return this.#t.value}isLoading(){return this.#t.isLoading}reloadResource(){this.#t.reload()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=E({token:t,factory:t.\u0275fac})};function RA(t,n){if(t&1&&(I(0,"p"),se(1),He(2,"mat-progress-bar",8),R()),t&2){let e=Ve(2);L(),ma(" Checking Server: ",e.form.value.serverIp,":",e.form.value.serverPort," ")}}function kA(t,n){if(t&1&&(se(0),wm(1,"date")),t&2){Ve(3);let e=rc(18);vn(" at ",Em(1,1,e.debug.cachetime*1e3,"yyyy/MM/dd HH:mm:ss")," ")}}function OA(t,n){if(t&1&&(He(0,"div",9),I(1,"p"),se(2," Data will be refreshed every 5 seconds. "),R(),I(3,"p"),se(4),I(5,"strong"),se(6),R(),ge(7,kA,2,4),R(),I(8,"p"),se(9),R(),I(10,"p"),se(11),He(12,"br"),se(13),R()),t&2){let e=Ve(2),r=rc(18);lr("background-image",e.headerImage()),L(4),vn(" Status: ",r.ip," is "),L(2),Yi(r.online?"online":"offline"),L(),be(r.debug.cachetime>0?7:-1),L(2),vn(" Description: ",r.motd.html[0]," "),L(2),vn(" Version: ",r.version," "),L(2),ma(" Players: ",r.players.online,"/",r.players.max," ")}}function FA(t,n){if(t&1&&(I(0,"mat-card",0)(1,"mat-card-content"),ge(2,RA,3,2,"p")(3,OA,14,9),R()()),t&2){let e=Ve();L(2),be(e.isLoading()&&e.isFirstRun?2:3)}}var Ed=class t{#e=u(SD);#t=u(Oa);#n=u(wd);mcStatus=this.#n.getStatus();isLoading=this.#n.isLoading();isFirstRun=!0;interval=0;form;ngOnInit(){this.form=this.#e.group({serverIp:[po.serverIp],serverPort:[po.serverPort]})}onSubmit(){this.isFirstRun?(this.isFirstRun=!1,this.loadStatus(),this.startInterval()):(clearInterval(this.interval),this.loadStatus(),this.reloadStatus(),this.startInterval())}loadStatus(){this.#n.setAddress(this.form.value.serverIp+":"+this.form.value.serverPort)}reloadStatus(){this.#n.reloadResource()}startInterval(){this.interval=setInterval(()=>{this.reloadStatus()},5e3)}headerImage(){return this.mcStatus()?this.#t.bypassSecurityTrustStyle(`url('${this.mcStatus()?.icon}')`):""}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=X({type:t,selectors:[["app-dashboard"]],decls:20,vars:3,consts:[[1,"w-10/12","md:w-7/12","mx-auto"],["novalidate","",3,"ngSubmit","formGroup"],[1,"flex-col","md:flex-row","flex","gap-5"],[1,"flex-1"],["type","text","matInput","","formControlName","serverIp"],["type","text","matInput","","formControlName","serverPort"],[1,"flex"],["mat-raised-button","",1,"flex-1"],["mode","indeterminate","value","50"],[1,"h-[64px]","w-[64px]"]],template:function(e,r){if(e&1&&(I(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),se(3,"Options and run"),R()(),I(4,"mat-card-content")(5,"form",1),Ae("ngSubmit",function(){return r.onSubmit()}),I(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),se(9,"Server IP"),R(),I(10,"input",4),ql(),R()(),I(11,"mat-form-field",3)(12,"mat-label"),se(13,"Server Port"),R(),I(14,"input",5),ql(),R()()(),I(15,"div",6)(16,"button",7),se(17,"RUN/UPDATE"),R()()()()(),nc(18),ge(19,FA,4,1,"mat-card",0)),e&2){L(5),mt("formGroup",r.form),L(5),Yl(),L(4),Yl(),L(4);let i=xm(r.mcStatus());L(),be(i?19:-1)}},dependencies:[$c,zc,RD,MD,TD,AD,ND,id,is,Dd,rs,ZD,XD,JD,QD,ID,wD,bd,DD,xD,ts,Zp,Um],encapsulation:2})};function PA(t,n){t&1&&(I(0,"h2",11),se(1,"Overview"),R(),I(2,"mat-dialog-content")(3,"p"),se(4," Shows the status of a minecraft server. "),He(5,"br"),se(6," For demonstration I use as default my own minecraft server. "),R(),I(7,"p"),se(8,"The data is loaded by "),I(9,"a",12),se(10,"https://api.mcsrvstat.us/"),R(),se(11,"."),R()(),I(12,"mat-dialog-actions",13)(13,"button",14),se(14,"Close"),R()())}var Sd=class t{#e=u(qa);#t=u(N_);#n=u(w);appname;constructor(){this.appname=po.appname,this.#t.setTitle(this.appname),this.#n.body.classList.add(`${po.theme}-theme`)}openDialog(n){this.#e.open(n,{maxWidth:"800px"})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=X({type:t,selectors:[["app-root"]],decls:27,vars:2,consts:[["menu","matMenu"],["dialog",""],[1,"justify-between"],[1,"hidden","md:block"],["mat-button","",3,"click"],["mat-button","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["alt","GitHub Repository","src","github-mark.svg",1,"github-link"],[1,"block","md:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["mat-dialog-title",""],["href","https://api.mcsrvstat.us/","target","_blank"],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(e,r){if(e&1){let i=fa();I(0,"mat-toolbar",2),se(1),I(2,"div",3)(3,"button",4),Ae("click",function(){mn(i);let a=sr(25);return pn(r.openDialog(a))}),se(4,"Info"),R(),se(5," | "),I(6,"a",5)(7,"span"),He(8,"img",6),R(),se(9," GitHub "),R()(),I(10,"div",7)(11,"button",8)(12,"mat-icon"),se(13,"more_vert"),R()(),I(14,"mat-menu",null,0)(16,"button",9),Ae("click",function(){mn(i);let a=sr(25);return pn(r.openDialog(a))}),I(17,"span"),se(18,"Info"),R()(),I(19,"a",10)(20,"span"),He(21,"img",6),R(),I(22,"span"),se(23,"GitHub"),R()()()()(),Lt(24,PA,15,0,"ng-template",null,1,pa),He(26,"app-dashboard")}if(e&2){let i=sr(15);L(),vn(" ",r.appname," "),L(10),mt("matMenuTriggerFor",i)}},dependencies:[Ed,$c,zc,xp,id,RC,OC,PC,FC,GC,$C,qC,mo,Ya,WC,XC,YC],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0;overflow-y:scroll}mat-card[_ngcontent-%COMP%], mat-progress-bar[_ngcontent-%COMP%]{margin-top:20px}.github-link[_ngcontent-%COMP%]{height:20px;top:4px;padding-right:5px;position:relative}"]})};var ex={providers:[Gu(),np()]};Km(Sd,ex).catch(t=>console.error(t));
