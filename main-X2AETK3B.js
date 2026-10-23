var ax=Object.defineProperty,sx=Object.defineProperties;var lx=Object.getOwnPropertyDescriptors;var ih=Object.getOwnPropertySymbols;var cx=Object.prototype.hasOwnProperty,dx=Object.prototype.propertyIsEnumerable;var oh=(e,n,t)=>n in e?ax(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,C=(e,n)=>{for(var t in n||={})cx.call(n,t)&&oh(e,t,n[t]);if(ih)for(var t of ih(n))dx.call(n,t)&&oh(e,t,n[t]);return e},W=(e,n)=>sx(e,lx(n));var Co=[null],os=[!1],xr=1,ux=null,Me=Symbol("SIGNAL");function k(e){let n=Co[0];return Co[0]=e,n}function as(){return Co[0]}var qn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function wn(e){if(os[0])throw new Error("");let n=Co[0];if(n===null)return;n.consumerOnSignalRead(e);let t=n.producersTail;if(t!==void 0&&t.producer===e)return;let r,i=n.recomputing;if(i&&(r=t!==void 0?t.nextProducer:n.producers,r!==void 0&&r.producer===e)){n.producersTail=r,r.lastReadVersion=e.version,r.knownValidAtEpoch=xr;return}let o=e.consumersTail;if(o!==void 0&&o.consumer===n&&(!i||o.knownValidAtEpoch===xr))return;let a=gi(n),s={producer:e,consumer:n,nextProducer:r,prevConsumer:void 0,knownValidAtEpoch:xr,lastReadVersion:e.version,nextConsumer:void 0};n.producersTail=s,t!==void 0?t.nextProducer=s:n.producers=s,a&&ch(e,s)}function ah(){xr++}function Yn(e){if(!(gi(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===xr)){if(!e.producerMustRecompute(e)&&!hi(e)){pi(e);return}e.producerRecomputeValue(e),pi(e)}}function Id(e){if(e.consumers===void 0)return;let n=os[0];os[0]=!0;try{for(let t=e.consumers;t!==void 0;t=t.nextConsumer){let r=t.consumer;r.dirty||fx(r)}}finally{os[0]=n}}function Md(){return Co[0]?.consumerAllowSignalWrites!==!1}function fx(e){e.dirty=!0,Id(e),e.consumerMarkedDirty?.(e)}function pi(e){e.dirty=!1,e.lastCleanEpoch=xr}function En(e){return e&&sh(e),k(e)}function sh(e){if(e.producersTail?.knownValidAtEpoch===xr){let n=e.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}e.producersTail=void 0,e.recomputing=!0}function Xn(e,n){k(n),e&&lh(e)}function lh(e){e.recomputing=!1;let n=e.producersTail,t=n!==void 0?n.nextProducer:e.producers;if(t!==void 0){if(gi(e))do t=Nd(t);while(t!==void 0);n!==void 0?n.nextProducer=void 0:e.producers=void 0}}function hi(e){for(let n=e.producers;n!==void 0;n=n.nextProducer){let t=n.producer,r=n.lastReadVersion;if(r!==t.version||(Yn(t),r!==t.version))return!0}return!1}function Zn(e){if(gi(e)){let n=e.producers;for(;n!==void 0;)n=Nd(n)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function ch(e,n){let t=e.consumersTail,r=gi(e);if(t!==void 0?(n.nextConsumer=t.nextConsumer,t.nextConsumer=n):(n.nextConsumer=void 0,e.consumers=n),n.prevConsumer=t,e.consumersTail=n,!r)for(let i=e.producers;i!==void 0;i=i.nextProducer)ch(i.producer,i)}function Nd(e){let n=e.producer,t=e.nextProducer,r=e.nextConsumer,i=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!gi(n)){let o=n.producers;for(;o!==void 0;)o=Nd(o)}return t}function gi(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Do(e){ux?.(e)}function xo(e,n){return Object.is(e,n)}function wo(e,n){let t=Object.create(mx);t.computation=e,n!==void 0&&(t.equal=n);let r=()=>{if(Yn(t),wn(t),t.value===kt)throw t.error;return t.value};return r[Me]=t,Do(t),r}var wr=Symbol("UNSET"),Er=Symbol("COMPUTING"),kt=Symbol("ERRORED"),mx=W(C({},qn),{value:wr,dirty:!0,error:null,equal:xo,kind:"computed",producerMustRecompute(e){return e.value===wr||e.value===Er},producerRecomputeValue(e){if(e.value===Er)throw new Error("");let n=e.value;e.value=Er;let t=En(e),r,i=!1;try{r=e.computation(),k(null),i=n!==wr&&n!==kt&&r!==kt&&e.equal(n,r)}catch(o){r=kt,e.error=o}finally{Xn(e,t)}if(i){e.value=n;return}e.value=r,e.version++}});function px(){throw new Error}var dh=px;function uh(e){dh(e)}function Td(e){dh=e}var hx=null;function Ad(e,n){let t=Object.create(bi);t.value=e,n!==void 0&&(t.equal=n);let r=()=>fh(t);return r[Me]=t,Do(t),[r,a=>Kn(t,a),a=>ss(t,a)]}function fh(e){return wn(e),e.value}function Kn(e,n){Md()||uh(e),e.equal(e.value,n)||(e.value=n,gx(e))}function ss(e,n){Md()||uh(e),Kn(e,n(e.value))}var bi=W(C({},qn),{equal:xo,value:void 0,kind:"signal"});function gx(e){e.version++,ah(),Id(e),hx?.(e)}var Rd=W(C({},qn),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function kd(e){if(e.dirty=!1,e.version>0&&!hi(e))return;e.version++;let n=En(e);try{e.cleanup(),e.fn()}finally{Xn(e,n)}}var Od=[void 0];function ls(){return Od[0]}function un(e){let n=Od[0];return Od[0]=e,n}var mh=Symbol("NotFound");function yi(e){return e===mh||e?.name==="\u0275NotFound"}function Fd(e,n,t){let r=Object.create(bx);r.source=e,r.computation=n,t!=null&&(r.equal=t);let o=()=>{if(Yn(r),wn(r),r.value===kt)throw r.error;return r.value};return o[Me]=r,Do(r),o}function Pd(e,n){Yn(e),Kn(e,n),pi(e)}function ph(e,n){if(Yn(e),e.value===kt)throw e.error;ss(e,n),pi(e)}var bx=W(C({},qn),{value:wr,dirty:!0,error:null,equal:xo,kind:"linkedSignal",producerMustRecompute(e){return e.value===wr||e.value===Er},producerRecomputeValue(e){if(e.value===Er)throw new Error("");let n=e.value;e.value=Er;let t=En(e),r,i=!1;try{let o=e.source(),a=n!==wr&&n!==kt,s=a?{source:e.sourceValue,value:n}:void 0;r=e.computation(o,s),e.sourceValue=o,k(null),i=a&&r!==kt&&e.equal(n,r)}catch(o){r=kt,e.error=o}finally{Xn(e,t)}if(i){e.value=n;return}e.value=r,e.version++}});function hh(e){let n=k(null);try{return e()}finally{k(n)}}function q(e){return typeof e=="function"}function cs(e){let t=e(r=>{Error.call(r),r.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ds=cs(e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Sr(e,n){if(e){let t=e.indexOf(n);0<=t&&e.splice(t,1)}}var oe=class e{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:r}=this;if(q(r))try{r()}catch(o){n=o instanceof ds?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{gh(o)}catch(a){n=n??[],a instanceof ds?n=[...n,...a.errors]:n.push(a)}}if(n)throw new ds(n)}}add(n){var t;if(n&&n!==this)if(this.closed)gh(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}}_hasParent(n){let{_parentage:t}=this;return t===n||Array.isArray(t)&&t.includes(n)}_addParent(n){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n}_removeParent(n){let{_parentage:t}=this;t===n?this._parentage=null:Array.isArray(t)&&Sr(t,n)}remove(n){let{_finalizers:t}=this;t&&Sr(t,n),n instanceof e&&n._removeParent(this)}};oe.EMPTY=(()=>{let e=new oe;return e.closed=!0,e})();var Ld=oe.EMPTY;function us(e){return e instanceof oe||e&&"closed"in e&&q(e.remove)&&q(e.add)&&q(e.unsubscribe)}function gh(e){q(e)?e():e.unsubscribe()}var Xt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var vi={setTimeout(e,n,...t){let{delegate:r}=vi;return r?.setTimeout?r.setTimeout(e,n,...t):setTimeout(e,n,...t)},clearTimeout(e){let{delegate:n}=vi;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function fs(e){vi.setTimeout(()=>{let{onUnhandledError:n}=Xt;if(n)n(e);else throw e})}function Eo(){}var bh=Vd("C",void 0,void 0);function yh(e){return Vd("E",void 0,e)}function vh(e){return Vd("N",e,void 0)}function Vd(e,n,t){return{kind:e,value:n,error:t}}var Ir=null;function _i(e){if(Xt.useDeprecatedSynchronousErrorHandling){let n=!Ir;if(n&&(Ir={errorThrown:!1,error:null}),e(),n){let{errorThrown:t,error:r}=Ir;if(Ir=null,t)throw r}}else e()}function _h(e){Xt.useDeprecatedSynchronousErrorHandling&&Ir&&(Ir.errorThrown=!0,Ir.error=e)}var Mr=class extends oe{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,us(n)&&n.add(this)):this.destination=_x}static create(n,t,r){return new Sn(n,t,r)}next(n){this.isStopped?Bd(vh(n),this):this._next(n)}error(n){this.isStopped?Bd(yh(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Bd(bh,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},yx=Function.prototype.bind;function jd(e,n){return yx.call(e,n)}var Hd=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:t}=this;if(t.next)try{t.next(n)}catch(r){ms(r)}}error(n){let{partialObserver:t}=this;if(t.error)try{t.error(n)}catch(r){ms(r)}else ms(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(t){ms(t)}}},Sn=class extends Mr{constructor(n,t,r){super();let i;if(q(n)||!n)i={next:n??void 0,error:t??void 0,complete:r??void 0};else{let o;this&&Xt.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&jd(n.next,o),error:n.error&&jd(n.error,o),complete:n.complete&&jd(n.complete,o)}):i=n}this.destination=new Hd(i)}};function ms(e){Xt.useDeprecatedSynchronousErrorHandling?_h(e):fs(e)}function vx(e){throw e}function Bd(e,n){let{onStoppedNotification:t}=Xt;t&&vi.setTimeout(()=>t(e,n))}var _x={closed:!0,next:Eo,error:vx,complete:Eo};var Ci=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Zt(e){return e}function Ch(e){return e.length===0?Zt:e.length===1?e[0]:function(t){return e.reduce((r,i)=>i(r),t)}}var z=class e{constructor(n){n&&(this._subscribe=n)}lift(n){let t=new e;return t.source=this,t.operator=n,t}subscribe(n,t,r){let i=Dx(n)?n:new Sn(n,t,r);return _i(()=>{let{operator:o,source:a}=this;i.add(o?o.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(t){n.error(t)}}forEach(n,t){return t=Dh(t),new t((r,i)=>{let o=new Sn({next:a=>{try{n(a)}catch(s){i(s),o.unsubscribe()}},error:i,complete:r});this.subscribe(o)})}_subscribe(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)}[Ci](){return this}pipe(...n){return Ch(n)(this)}toPromise(n){return n=Dh(n),new n((t,r)=>{let i;this.subscribe(o=>i=o,o=>r(o),()=>t(i))})}};z.create=e=>new z(e);function Dh(e){var n;return(n=e??Xt.Promise)!==null&&n!==void 0?n:Promise}function Cx(e){return e&&q(e.next)&&q(e.error)&&q(e.complete)}function Dx(e){return e&&e instanceof Mr||Cx(e)&&us(e)}function xx(e){return q(e?.lift)}function ne(e){return n=>{if(xx(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function re(e,n,t,r,i){return new Ud(e,n,t,r,i)}var Ud=class extends Mr{constructor(n,t,r,i,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=t?function(s){try{t(s)}catch(l){n.error(l)}}:super._next,this._error=i?function(s){try{i(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var xh=cs(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=class extends z{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let t=new ps(this,this);return t.operator=n,t}_throwIfClosed(){if(this.closed)throw new xh}next(n){_i(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let t of this.currentObservers)t.next(n)}})}error(n){_i(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:t}=this;for(;t.length;)t.shift().error(n)}})}complete(){_i(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:t,isStopped:r,observers:i}=this;return t||r?Ld:(this.currentObservers=null,i.push(n),new oe(()=>{this.currentObservers=null,Sr(i,n)}))}_checkFinalizedStatuses(n){let{hasError:t,thrownError:r,isStopped:i}=this;t?n.error(r):i&&n.complete()}asObservable(){let n=new z;return n.source=this,n}};x.create=(e,n)=>new ps(e,n);var ps=class extends x{constructor(n,t){super(),this.destination=n,this.source=t}next(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.next)===null||r===void 0||r.call(t,n)}error(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.error)===null||r===void 0||r.call(t,n)}complete(){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||t===void 0||t.call(n)}_subscribe(n){var t,r;return(r=(t=this.source)===null||t===void 0?void 0:t.subscribe(n))!==null&&r!==void 0?r:Ld}};var Nr=class extends x{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let t=super._subscribe(n);return!t.closed&&n.next(this._value),t}getValue(){let{hasError:n,thrownError:t,_value:r}=this;if(n)throw t;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var So={now(){return(So.delegate||Date).now()},delegate:void 0};var Qn=class extends x{constructor(n=1/0,t=1/0,r=So){super(),this._bufferSize=n,this._windowTime=t,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,t)}next(n){let{isStopped:t,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:a}=this;t||(r.push(n),!i&&r.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let t=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let a=0;a<o.length&&!n.closed;a+=r?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),t}_trimBuffer(){let{_bufferSize:n,_timestampProvider:t,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let a=t.now(),s=0;for(let l=1;l<r.length&&r[l]<=a;l+=2)s=l;s&&r.splice(0,s+1)}}};var hs=class extends oe{constructor(n,t){super()}schedule(n,t=0){return this}};var Io={setInterval(e,n,...t){let{delegate:r}=Io;return r?.setInterval?r.setInterval(e,n,...t):setInterval(e,n,...t)},clearInterval(e){let{delegate:n}=Io;return(n?.clearInterval||clearInterval)(e)},delegate:void 0};var gs=class extends hs{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,t)),this.pending=!0,this.delay=t,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,t),this}requestAsyncId(n,t,r=0){return Io.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,t,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return t;t!=null&&Io.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,t);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,Sr(r,this),n!=null&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}};var Di=class e{constructor(n,t=e.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,r){return new this.schedulerActionCtor(this,n).schedule(r,t)}};Di.now=So.now;var bs=class extends Di{constructor(n,t=Di.now){super(n,t),this.actions=[],this._active=!1}flush(n){let{actions:t}=this;if(this._active){t.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=t.shift());if(this._active=!1,r){for(;n=t.shift();)n.unsubscribe();throw r}}};var Mo=new bs(gs),wh=Mo;var Tr=new z(e=>e.complete());function ys(e){return e&&q(e.schedule)}function zd(e){return e[e.length-1]}function vs(e){return q(zd(e))?e.pop():void 0}function fn(e){return ys(zd(e))?e.pop():void 0}function Eh(e,n){return typeof zd(e)=="number"?e.pop():n}function Ih(e,n,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(d){try{c(r.next(d))}catch(u){a(u)}}function l(d){try{c(r.throw(d))}catch(u){a(u)}}function c(d){d.done?o(d.value):i(d.value).then(s,l)}c((r=r.apply(e,n||[])).next())})}function Sh(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ar(e){return this instanceof Ar?(this.v=e,this):new Ar(e)}function Mh(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(m){return function(h){return Promise.resolve(h).then(m,u)}}function s(m,h){r[m]&&(i[m]=function(y){return new Promise(function(v,D){o.push([m,y,v,D])>1||l(m,y)})},h&&(i[m]=h(i[m])))}function l(m,h){try{c(r[m](h))}catch(y){p(o[0][3],y)}}function c(m){m.value instanceof Ar?Promise.resolve(m.value.v).then(d,u):p(o[0][2],m)}function d(m){l("next",m)}function u(m){l("throw",m)}function p(m,h){m(h),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Nh(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Sh=="function"?Sh(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(a){return new Promise(function(s,l){a=e[o](a),i(s,l,a.done,a.value)})}}function i(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var _s=(e=>e&&typeof e.length=="number"&&typeof e!="function");function Cs(e){return q(e?.then)}function Ds(e){return q(e[Ci])}function xs(e){return Symbol.asyncIterator&&q(e?.[Symbol.asyncIterator])}function ws(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function wx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Es=wx();function Ss(e){return q(e?.[Es])}function Is(e){return Mh(this,arguments,function*(){let t=e.getReader();try{for(;;){let{value:r,done:i}=yield Ar(t.read());if(i)return yield Ar(void 0);yield yield Ar(r)}}finally{t.releaseLock()}})}function Ms(e){return q(e?.getReader)}function me(e){if(e instanceof z)return e;if(e!=null){if(Ds(e))return Ex(e);if(_s(e))return Sx(e);if(Cs(e))return Ix(e);if(xs(e))return Th(e);if(Ss(e))return Mx(e);if(Ms(e))return Nx(e)}throw ws(e)}function Ex(e){return new z(n=>{let t=e[Ci]();if(q(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Sx(e){return new z(n=>{for(let t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function Ix(e){return new z(n=>{e.then(t=>{n.closed||(n.next(t),n.complete())},t=>n.error(t)).then(null,fs)})}function Mx(e){return new z(n=>{for(let t of e)if(n.next(t),n.closed)return;n.complete()})}function Th(e){return new z(n=>{Tx(e,n).catch(t=>n.error(t))})}function Nx(e){return Th(Is(e))}function Tx(e,n){var t,r,i,o;return Ih(this,void 0,void 0,function*(){try{for(t=Nh(e);r=yield t.next(),!r.done;){let a=r.value;if(n.next(a),n.closed)return}}catch(a){i={error:a}}finally{try{r&&!r.done&&(o=t.return)&&(yield o.call(t))}finally{if(i)throw i.error}}n.complete()})}function ft(e,n,t,r=0,i=!1){let o=n.schedule(function(){t(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function Ns(e,n=0){return ne((t,r)=>{t.subscribe(re(r,i=>ft(r,e,()=>r.next(i),n),()=>ft(r,e,()=>r.complete(),n),i=>ft(r,e,()=>r.error(i),n)))})}function Ts(e,n=0){return ne((t,r)=>{r.add(e.schedule(()=>t.subscribe(r),n))})}function Ah(e,n){return me(e).pipe(Ts(n),Ns(n))}function Rh(e,n){return me(e).pipe(Ts(n),Ns(n))}function kh(e,n){return new z(t=>{let r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function Oh(e,n){return new z(t=>{let r;return ft(t,n,()=>{r=e[Es](),ft(t,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(a){t.error(a);return}o?t.complete():t.next(i)},0,!0)}),()=>q(r?.return)&&r.return()})}function As(e,n){if(!e)throw new Error("Iterable cannot be null");return new z(t=>{ft(t,n,()=>{let r=e[Symbol.asyncIterator]();ft(t,n,()=>{r.next().then(i=>{i.done?t.complete():t.next(i.value)})},0,!0)})})}function Fh(e,n){return As(Is(e),n)}function Ph(e,n){if(e!=null){if(Ds(e))return Ah(e,n);if(_s(e))return kh(e,n);if(Cs(e))return Rh(e,n);if(xs(e))return As(e,n);if(Ss(e))return Oh(e,n);if(Ms(e))return Fh(e,n)}throw ws(e)}function Ot(e,n){return n?Ph(e,n):me(e)}function Je(...e){let n=fn(e);return Ot(e,n)}function $d(e,n){let t=q(e)?e:()=>e,r=i=>i.error(t());return new z(n?i=>n.schedule(r,0,i):r)}function Lh(e){return e instanceof Date&&!isNaN(e)}function pe(e,n){return ne((t,r)=>{let i=0;t.subscribe(re(r,o=>{r.next(e.call(n,o,i++))}))})}var{isArray:Ax}=Array;function Rx(e,n){return Ax(n)?e(...n):e(n)}function Rs(e){return pe(n=>Rx(e,n))}var{isArray:kx}=Array,{getPrototypeOf:Ox,prototype:Fx,keys:Px}=Object;function ks(e){if(e.length===1){let n=e[0];if(kx(n))return{args:n,keys:null};if(Lx(n)){let t=Px(n);return{args:t.map(r=>n[r]),keys:t}}}return{args:e,keys:null}}function Lx(e){return e&&typeof e=="object"&&Ox(e)===Fx}function Os(e,n){return e.reduce((t,r,i)=>(t[r]=n[i],t),{})}function Gd(...e){let n=fn(e),t=vs(e),{args:r,keys:i}=ks(e);if(r.length===0)return Ot([],n);let o=new z(Vx(r,n,i?a=>Os(i,a):Zt));return t?o.pipe(Rs(t)):o}function Vx(e,n,t=Zt){return r=>{Vh(n,()=>{let{length:i}=e,o=new Array(i),a=i,s=i;for(let l=0;l<i;l++)Vh(n,()=>{let c=Ot(e[l],n),d=!1;c.subscribe(re(r,u=>{o[l]=u,d||(d=!0,s--),s||r.next(t(o.slice()))},()=>{--a||r.complete()}))},r)},r)}}function Vh(e,n,t){e?ft(t,e,n):n()}function jh(e,n,t,r,i,o,a,s){let l=[],c=0,d=0,u=!1,p=()=>{u&&!l.length&&!c&&n.complete()},m=y=>c<r?h(y):l.push(y),h=y=>{o&&n.next(y),c++;let v=!1;me(t(y,d++)).subscribe(re(n,D=>{i?.(D),o?m(D):n.next(D)},()=>{v=!0},void 0,()=>{if(v)try{for(c--;l.length&&c<r;){let D=l.shift();a?ft(n,a,()=>h(D)):h(D)}p()}catch(D){n.error(D)}}))};return e.subscribe(re(n,m,()=>{u=!0,p()})),()=>{s?.()}}function xi(e,n,t=1/0){return q(n)?xi((r,i)=>pe((o,a)=>n(r,o,i,a))(me(e(r,i))),t):(typeof n=="number"&&(t=n),ne((r,i)=>jh(r,i,e,t)))}function Fs(e=1/0){return xi(Zt,e)}function Bh(){return Fs(1)}function wi(...e){return Bh()(Ot(e,fn(e)))}function No(e){return new z(n=>{me(e()).subscribe(n)})}function To(...e){let n=vs(e),{args:t,keys:r}=ks(e),i=new z(o=>{let{length:a}=t;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let u=!1;me(t[d]).subscribe(re(o,p=>{u||(u=!0,c--),s[d]=p},()=>l--,void 0,()=>{(!l||!u)&&(c||o.next(r?Os(r,s):s),o.complete())}))}});return n?i.pipe(Rs(n)):i}function Hh(e=0,n,t=wh){let r=-1;return n!=null&&(ys(n)?t=n:r=n),new z(i=>{let o=Lh(e)?+e-t.now():e;o<0&&(o=0);let a=0;return t.schedule(function(){i.closed||(i.next(a++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function In(...e){let n=fn(e),t=Eh(e,1/0),r=e;return r.length?r.length===1?me(r[0]):Fs(t)(Ot(r,n)):Tr}function Ne(e,n){return ne((t,r)=>{let i=0;t.subscribe(re(r,o=>e.call(n,o,i++)&&r.next(o)))})}function Uh(e){return ne((n,t)=>{let r=!1,i=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,t.next(c)}a&&t.complete()},l=()=>{o=null,a&&t.complete()};n.subscribe(re(t,c=>{r=!0,i=c,o||me(e(c)).subscribe(o=re(t,s,l))},()=>{a=!0,(!r||!o||o.closed)&&t.complete()}))})}function Ps(e,n=Mo){return Uh(()=>Hh(e,n))}function Ls(e){return ne((n,t)=>{let r=null,i=!1,o;r=n.subscribe(re(t,void 0,void 0,a=>{o=me(e(a,Ls(e)(n))),r?(r.unsubscribe(),r=null,o.subscribe(t)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(t))})}function Wd(e,n){return q(n)?xi(e,n,1):xi(e,1)}function Ao(e,n=Mo){return ne((t,r)=>{let i=null,o=null,a=null,s=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=a+e,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}s()}t.subscribe(re(r,c=>{o=c,a=n.now(),i||(i=n.schedule(l,e),r.add(i))},()=>{s(),r.complete()},void 0,()=>{o=i=null}))})}function wt(e){return e<=0?()=>Tr:ne((n,t)=>{let r=0;n.subscribe(re(t,i=>{++r<=e&&(t.next(i),e<=r&&t.complete())}))})}function Vs(e,n=Zt){return e=e??jx,ne((t,r)=>{let i,o=!0;t.subscribe(re(r,a=>{let s=n(a);(o||!e(i,s))&&(o=!1,i=s,r.next(a))}))})}function jx(e,n){return e===n}function Ro(e){return ne((n,t)=>{try{n.subscribe(t)}finally{t.add(e)}})}function js(){return ne((e,n)=>{let t,r=!1;e.subscribe(re(n,i=>{let o=t;t=i,r&&n.next([o,i]),r=!0}))})}function ko(e={}){let{connector:n=()=>new x,resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=e;return o=>{let a,s,l,c=0,d=!1,u=!1,p=()=>{s?.unsubscribe(),s=void 0},m=()=>{p(),a=l=void 0,d=u=!1},h=()=>{let y=a;m(),y?.unsubscribe()};return ne((y,v)=>{c++,!u&&!d&&p();let D=l=l??n();v.add(()=>{c--,c===0&&!u&&!d&&(s=qd(h,i))}),D.subscribe(v),!a&&c>0&&(a=new Sn({next:R=>D.next(R),error:R=>{u=!0,p(),s=qd(m,t,R),D.error(R)},complete:()=>{d=!0,p(),s=qd(m,r),D.complete()}}),me(y).subscribe(a))})(o)}}function qd(e,n,...t){if(n===!0){e();return}if(n===!1)return;let r=new Sn({next:()=>{r.unsubscribe(),e()}});return me(n(...t)).subscribe(r)}function Bs(e,n,t){let r,i=!1;return e&&typeof e=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:t}=e:r=e??1/0,ko({connector:()=>new Qn(r,n,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Oo(e){return Ne((n,t)=>e<=t)}function mt(...e){let n=fn(e);return ne((t,r)=>{(n?wi(e,t,n):wi(e,t)).subscribe(r)})}function Ei(e,n){return ne((t,r)=>{let i=null,o=0,a=!1,s=()=>a&&!i&&r.complete();t.subscribe(re(r,l=>{i?.unsubscribe();let c=0,d=o++;me(e(l,d)).subscribe(i=re(r,u=>r.next(n?n(l,u,d,c++):u),()=>{i=null,s()}))},()=>{a=!0,s()}))})}function Ft(e){return ne((n,t)=>{me(e).subscribe(re(t,()=>t.complete(),Eo)),!t.closed&&n.subscribe(t)})}function Rr(e,n,t){let r=q(e)||n||t?{next:e,error:n,complete:t}:e;return r?ne((i,o)=>{var a;(a=r.subscribe)===null||a===void 0||a.call(r);let s=!0;i.subscribe(re(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Zt}var su="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",_=class extends Error{code;constructor(n,t){super(An(n,t)),this.code=n}};function Bx(e){return`NG0${Math.abs(e)}`}function An(e,n){return`${Bx(e)}${n?": "+n:""}`}function ue(e){for(let n in e)if(e[n]===ue)return n;throw Error("")}function qh(e,n){for(let t in n)Object.hasOwn(n,t)&&!Object.hasOwn(e,t)&&(e[t]=n[t])}function Ys(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(Ys).join(", ")}]`;if(e==null)return""+e;let n=e.overriddenName||e.name;if(n)return`${n}`;let t=e.toString();if(t==null)return""+t;let r=t.indexOf(`
`);return r>=0?t.slice(0,r):t}function Xs(e,n){return e?n?`${e} ${n}`:e:n||""}var Hx=ue({__forward_ref__:ue});function Pt(e){return e.__forward_ref__=Pt,e}function Ue(e){return lu(e)?e():e}function lu(e){return typeof e=="function"&&Object.hasOwn(e,Hx)&&e.__forward_ref__===Pt}function K(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function B(e){return{providers:e.providers||[],imports:e.imports||[]}}function Zs(e){return Ux(e,Ks)}function Ux(e,n){return Object.hasOwn(e,n)&&e[n]||null}function zx(e){let n=e?.[Ks]??null;return n||null}function Xd(e){return e&&Object.hasOwn(e,Us)?e[Us]:null}var Ks=ue({\u0275prov:ue}),Us=ue({\u0275inj:ue}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,t){this._desc=n,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=K({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function cu(e){return e&&!!e.\u0275providers}var Bo=ue({\u0275cmp:ue}),Ho=ue({\u0275dir:ue}),du=ue({\u0275pipe:ue});var Po=ue({\u0275fac:ue}),Lr=ue({__NG_ELEMENT_ID__:ue}),zh=ue({__NG_ENV_ID__:ue});function er(e){return uu(e,"@Component"),e[Bo]||null}function Uo(e){return uu(e,"@Directive"),e[Ho]||null}function Yh(e){return uu(e,"@Pipe"),e[du]||null}function uu(e,n){if(e==null)throw new _(-919,!1)}function zo(e){return typeof e=="string"?e:e==null?"":String(e)}var Xh=ue({ngErrorCode:ue}),$x=ue({ngErrorMessage:ue}),Gx=ue({ngTokenPath:ue});function fu(e,n){return Zh("",-200,n)}function Qs(e,n){throw new _(-201,!1)}function Zh(e,n,t){let r=new _(n,e);return r[Xh]=n,r[$x]=e,t&&(r[Gx]=t),r}function Wx(e){return e[Xh]}var Zd;function Kh(){return Zd}function ot(e){let n=Zd;return Zd=e,n}function mu(e,n,t){let r=Zs(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(t&8)return null;if(n!==void 0)return n;Qs(e,"")}var pn=globalThis;var qx={},kr=qx,Yx="__NG_DI_FLAG__",Kd=class{injector;constructor(n){this.injector=n}retrieve(n,t){let r=Or(t)||0;try{return this.injector.get(n,r&8?null:kr,r)}catch(i){if(yi(i))return i;throw i}}};function Xx(e,n=0){let t=ls();if(t===void 0)throw new _(-203,!1);if(t===null)return mu(e,void 0,n);{let r=Zx(n),i=t.retrieve(e,r);if(yi(i)){if(r.optional)return null;throw i}return i}}function T(e,n=0){return(Kh()||Xx)(Ue(e),n)}function f(e,n){return T(e,Or(n))}function Or(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Zx(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function Qd(e){let n=[];for(let t=0;t<e.length;t++){let r=Ue(e[t]);if(Array.isArray(r)){if(r.length===0)throw new _(900,!1);let i,o=0;for(let a=0;a<r.length;a++){let s=r[a],l=Kx(s);typeof l=="number"?l===-1?i=s.token:o|=l:i=s}n.push(T(i,o))}else n.push(T(r))}return n}function Kx(e){return e[Yx]}function Jn(e,n){let t=Object.hasOwn(e,Po);return t?e[Po]:null}function Qh(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],o=n[r];if(t&&(i=t(i),o=t(o)),o!==i)return!1}return!0}function Jh(e){return e.flat(Number.POSITIVE_INFINITY)}function Js(e,n){e.forEach(t=>Array.isArray(t)?Js(t,n):n(t))}function pu(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function $o(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function eg(e,n){let t=[];for(let r=0;r<e;r++)t.push(n);return t}function tg(e,n,t,r){let i=e.length;if(i==n)e.push(t,r);else if(i===1)e.push(r,e[0]),e[0]=t;else{for(i--,e.push(e[i-1],e[i]);i>n;){let o=i-2;e[i]=e[o],i--}e[n]=t,e[n+1]=r}}function el(e,n,t){let r=Mi(e,n);return r>=0?e[r|1]=t:(r=~r,tg(e,r,n,t)),r}function tl(e,n){let t=Mi(e,n);if(t>=0)return e[t|1]}function Mi(e,n){return Qx(e,n,1)}function Qx(e,n,t){let r=0,i=e.length>>t;for(;i!==r;){let o=r+(i-r>>1),a=e[o<<t];if(n===a)return o<<t;a>n?i=o:r=o+1}return~(i<<t)}var tr={},et=[],Vr=new g(""),hu=new g("",-1),gu=new g(""),Ii=class{get(n,t=kr){if(t===kr){let i=Zh("",-201);throw i.name="\u0275NotFound",i}return t}};function Rn(e){return{\u0275providers:e}}function ng(e){return Rn([{provide:Vr,multi:!0,useValue:e}])}function rg(...e){return{\u0275providers:bu(!0,e),\u0275fromNgModule:!0}}function bu(e,...n){let t=[],r=new Set,i,o=a=>{t.push(a)};return Js(n,a=>{let s=a;zs(s,o,[],r)&&(i||=[],i.push(s))}),i!==void 0&&ig(i,o),t}function ig(e,n){for(let t=0;t<e.length;t++){let{ngModule:r,providers:i}=e[t];yu(i,o=>{n(o,r)})}}function zs(e,n,t,r){if(e=Ue(e),!e)return!1;let i=null,o=Xd(e),a=!o&&er(e);if(!o&&!a){let l=e.ngModule;if(o=Xd(l),o)i=l;else return!1}else{if(a&&!a.standalone)return!1;i=e}let s=r.has(i);if(a){if(s)return!1;if(r.add(i),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)zs(c,n,t,r)}}else if(o){if(o.imports!=null&&!s){r.add(i);let c;Js(o.imports,d=>{zs(d,n,t,r)&&(c||=[],c.push(d))}),c!==void 0&&ig(c,n)}if(!s){let c=Jn(i)||(()=>new i);n({provide:i,useFactory:c,deps:et},i),n({provide:gu,useValue:i,multi:!0},i),n({provide:Vr,useValue:()=>T(i),multi:!0},i)}let l=o.providers;if(l!=null&&!s){let c=e;yu(l,d=>{n(d,c)})}}else return!1;return i!==e&&e.providers!==void 0}function yu(e,n){for(let t of e)cu(t)&&(t=t.\u0275providers),Array.isArray(t)?yu(t,n):n(t)}var Jx=ue({provide:String,useValue:ue});function og(e){return e!==null&&typeof e=="object"&&Jx in e}function ew(e){return!!(e&&e.useExisting)}function tw(e){return!!(e&&e.useFactory)}function Fr(e){return typeof e=="function"}function ag(e){return!!e.useClass}var Go=new g(""),Hs={},$h={},Yd;function Ni(){return Yd===void 0&&(Yd=new Ii),Yd}var ke=class{},Pr=class extends ke{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,t,r,i){super(),this.parent=t,this.source=r,this.scopes=i,eu(n,a=>this.processProvider(a)),this.records.set(hu,Si(void 0,this)),i.has("environment")&&this.records.set(ke,Si(void 0,this));let o=this.records.get(Go);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(gu,et,{self:!0}))}retrieve(n,t){let r=Or(t)||0;try{return this.get(n,kr,r)}catch(i){if(yi(i))return i;throw i}}destroy(){Fo(this),this._destroyed=!0;let n=k(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of t)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),k(n)}}onDestroy(n){return Fo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Fo(this);let t=un(this),r=ot(void 0),i;try{return n()}finally{un(t),ot(r)}}get(n,t=kr,r){if(Fo(this),Object.hasOwn(n,zh))return n[zh](this);let i=Or(r),o,a=un(this),s=ot(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=aw(n)&&Zs(n);d&&this.injectableDefInScope(d)?c=Si(Jd(n),Hs):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Ni():this.parent;return t=i&8&&t===kr?null:t,l.get(n,t)}catch(l){let c=Wx(l);throw c===-200||c===-201?new _(c,null):l}finally{ot(s),un(a)}}resolveInjectorInitializers(){let n=k(null),t=un(this),r=ot(void 0),i;try{let o=this.get(Vr,et,{self:!0});for(let a of o)a()}finally{un(t),ot(r),k(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=Ue(n);let t=Fr(n)?n:Ue(n&&n.provide),r=rw(n);if(!Fr(n)&&n.multi===!0){let i=this.records.get(t);i||(i=Si(void 0,Hs,!0),i.factory=()=>Qd(i.multi),this.records.set(t,i)),t=n,i.multi.push(n)}this.records.set(t,r)}hydrate(n,t,r){let i=k(null);try{if(t.value===$h)throw fu("");return t.value===Hs&&(t.value=$h,t.value=t.factory(void 0,r)),typeof t.value=="object"&&t.value&&ow(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{k(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let t=Ue(n.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(n){let t=this._onDestroyHooks.indexOf(n);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Jd(e){let n=Zs(e),t=n!==null?n.factory:Jn(e);if(t!==null)return t;if(e instanceof g)throw new _(-204,!1);if(e instanceof Function)return nw(e);throw new _(-204,!1)}function nw(e){if(e.length>0)throw new _(-204,!1);let t=zx(e);return t!==null?()=>t.factory(e):()=>new e}function rw(e){if(og(e))return Si(void 0,e.useValue);{let n=vu(e);return Si(n,Hs)}}function vu(e,n,t){let r;if(Fr(e)){let i=Ue(e);return Jn(i)||Jd(i)}else if(og(e))r=()=>Ue(e.useValue);else if(tw(e))r=()=>e.useFactory(...Qd(e.deps||[]));else if(ew(e))r=(i,o)=>T(Ue(e.useExisting),o!==void 0&&o&8?8:void 0);else{let i=Ue(e&&(e.useClass||e.provide));if(iw(e))r=()=>new i(...Qd(e.deps));else return Jn(i)||Jd(i)}return r}function Fo(e){if(e.destroyed)throw new _(-205,!1)}function Si(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function iw(e){return!!e.deps}function ow(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function aw(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function eu(e,n){for(let t of e)Array.isArray(t)?eu(t,n):t&&cu(t)?eu(t.\u0275providers,n):n(t)}function Ti(e,n){let t;e instanceof Pr?(Fo(e),t=e):t=new Kd(e);let r,i=un(t),o=ot(void 0);try{return n()}finally{un(i),ot(o)}}function sg(){return Kh()!==void 0||ls()!=null}var Kt=0,A=1,O=2,Oe=3,Lt=4,Xe=5,Ai=6,Ri=7,qe=8,kn=9,hn=10,Ee=11,ki=12,_u=13,nr=14,st=15,rr=16,jr=17,gn=18,Wo=19,Cu=20,Mn=21,nl=22,Nn=23,Et=24,Br=25,lg=26,Oi=27,Se=28,cg=1;var Hr=7,qo=8,Ur=9,tt=10;function On(e){return Array.isArray(e)&&typeof e[cg]=="object"}function Vt(e){return Array.isArray(e)&&e[cg]===!0}function Du(e){return(e.flags&4)!==0}function Fn(e){return e.componentOffset>-1}function Yo(e){return(e.flags&1)===1}function Qt(e){return!!e.template}function Fi(e){return(e[O]&512)!==0}function zr(e){return(e[O]&256)===256}var nt=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e[e.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",e})(nt||{});var xu="svg",dg="math";function Ze(e){for(;Array.isArray(e);)e=e[Kt];return e}function wu(e,n){return Ze(n[e])}function jt(e,n){return Ze(n[e.index])}function rl(e,n){return e.data[n]}function il(e,n){return e[n]}function Xo(e,n,t,r){t>=e.data.length&&(e.data[t]=null,e.blueprint[t]=null),n[t]=r}function Bt(e,n){let t=n[e];return On(t)?t:t[Kt]}function ug(e){return(e[O]&4)===4}function ol(e){return(e[O]&128)===128}function fg(e){return Vt(e[Oe])}function Jt(e,n){return n==null?null:e[n]}function Eu(e){e[jr]=0}function Su(e){e[O]&1024||(e[O]|=1024,ol(e)&&$r(e))}function mg(e,n){for(;e>0;)n=n[nr],e--;return n}function Zo(e){return!!(e[O]&9216||e[Et]?.dirty)}function al(e){e[hn].changeDetectionScheduler?.notify(8),e[O]&64&&(e[O]|=1024),Zo(e)&&$r(e)}function $r(e){e[hn].changeDetectionScheduler?.notify(0);let n=Tn(e);for(;n!==null&&!(n[O]&8192||(n[O]|=8192,!ol(n)));)n=Tn(n)}function sl(e,n){if(zr(e))throw new _(911,!1);e[Mn]===null&&(e[Mn]=[]),e[Mn].push(n)}function pg(e,n){if(e[Mn]===null)return;let t=e[Mn].indexOf(n);t!==-1&&e[Mn].splice(t,1)}function Tn(e){let n=e[Oe];return Vt(n)?n[Oe]:n}function Iu(e){return e[Ri]??=[]}function Mu(e){return e.cleanup??=[]}function hg(e,n,t,r){let i=Iu(n);i.push(t),e.firstCreatePass&&Mu(e).push(r,i.length-1)}var $={lFrame:Ig(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var tu=!1;function gg(){return $.lFrame.elementDepthCount}function bg(){$.lFrame.elementDepthCount++}function Nu(){$.lFrame.elementDepthCount--}function Tu(){return $.bindingsEnabled}function Au(){return $.skipHydrationRootTNode!==null}function Ru(e){return $.skipHydrationRootTNode===e}function ku(){$.skipHydrationRootTNode=null}function V(){return $.lFrame.lView}function ye(){return $.lFrame.tView}function bn(e){return $.lFrame.contextLView=e,e[qe]}function yn(e){return $.lFrame.contextLView=null,e}function Ye(){let e=Ou();for(;e!==null&&e.type===64;)e=e.parent;return e}function Ou(){return $.lFrame.currentTNode}function yg(){let e=$.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}function Gr(e,n){let t=$.lFrame;t.currentTNode=e,t.isParent=n}function Fu(){return $.lFrame.isParent}function Pu(){$.lFrame.isParent=!1}function Lu(){return $.lFrame.contextLView}function Vu(){return tu}function Lo(e){let n=tu;return tu=e,n}function vg(){let e=$.lFrame,n=e.bindingRootIndex;return n===-1&&(n=e.bindingRootIndex=e.tView.bindingStartIndex),n}function _g(){return $.lFrame.bindingIndex}function Cg(e){return $.lFrame.bindingIndex=e}function Pi(){return $.lFrame.bindingIndex++}function ll(e){let n=$.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function Dg(){return $.lFrame.inI18n}function xg(e,n){let t=$.lFrame;t.bindingIndex=t.bindingRootIndex=e,cl(n)}function wg(){return $.lFrame.currentDirectiveIndex}function cl(e){$.lFrame.currentDirectiveIndex=e}function Eg(e){let n=$.lFrame.currentDirectiveIndex;return n===-1?null:e[n]}function dl(){return $.lFrame.currentQueryIndex}function Ko(e){$.lFrame.currentQueryIndex=e}function sw(e){let n=e[A];return n.type===2?n.declTNode:n.type===1?e[Xe]:null}function ju(e,n,t){if(t&4){let i=n,o=e;for(;i=i.parent,i===null&&!(t&1);)if(i=sw(o),i===null||(o=o[nr],i.type&10))break;if(i===null)return!1;n=i,e=o}let r=$.lFrame=Sg();return r.currentTNode=n,r.lView=e,!0}function ul(e){let n=Sg(),t=e[A];$.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function Sg(){let e=$.lFrame,n=e===null?null:e.child;return n===null?Ig(e):n}function Ig(e){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=n),n}function Mg(){let e=$.lFrame;return $.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var Bu=Mg;function fl(){let e=Mg();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Ng(e){return($.lFrame.contextLView=mg(e,$.lFrame.contextLView))[qe]}function vn(){return $.lFrame.selectedIndex}function ir(e){$.lFrame.selectedIndex=e}function Qo(){let e=$.lFrame;return rl(e.tView,e.selectedIndex)}function ml(){$.lFrame.currentNamespace=xu}function Hu(){return $.lFrame.currentNamespace}var Tg=!0;function pl(){return Tg}function hl(e){Tg=e}function nu(e,n=null,t=null,r){let i=Ag(e,n,t,r);return i.resolveInjectorInitializers(),i}function Ag(e,n=null,t=null,r,i=new Set){let o=[t||et,rg(e)],a;return new Pr(o,n||Ni(),a||null,i)}var P=class e{static THROW_IF_NOT_FOUND=kr;static NULL=new Ii;static create(n,t){if(Array.isArray(n))return nu({name:""},t,n,"");{let r=n.name??"";return nu({name:r},n.parent,n.providers,r)}}static \u0275prov=K({token:e,providedIn:"any",factory:()=>T(hu)});static __NG_ELEMENT_ID__=-1},E=new g(""),We=class{static __NG_ELEMENT_ID__=lw;static __NG_ENV_ID__=n=>n},$s=class extends We{_lView;constructor(n){super(),this._lView=n}get destroyed(){return zr(this._lView)}onDestroy(n){let t=this._lView;return sl(t,n),()=>pg(t,n)}};function lw(){return new $s(V())}var Rg=!1,kg=new g(""),Wr=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Nr(!1);debugTaskTracker=f(kg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new z(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})(),ru=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,sg()&&(this.destroyRef=f(We,{optional:!0})??void 0,this.pendingTasks=f(Wr,{optional:!0})??void 0)}emit(n){let t=k(null);try{super.next(n)}finally{k(t)}}subscribe(n,t,r){let i=n,o=t||(()=>null),a=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:i,error:o,complete:a});return n instanceof oe&&n.add(s),s}wrapInTimeout(n){return t=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(t)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},ae=ru;function Gs(...e){}function Uu(e){let n,t;function r(){e=Gs;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{e(),r()})),()=>r()}function Og(e){return queueMicrotask(()=>e()),()=>{e=Gs}}var zu="isAngularZone",Vo=zu+"_ID",cw=0,I=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ae(!1);onMicrotaskEmpty=new ae(!1);onStable=new ae(!1);onError=new ae(!1);constructor(n){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Rg}=n;if(typeof Zone>"u")throw new _(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!i&&r,a.shouldCoalesceRunChangeDetection=i,a.callbackScheduled=!1,a.scheduleInRootZone=o,fw(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(zu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new _(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new _(909,!1)}run(n,t,r){return this._inner.run(n,t,r)}runTask(n,t,r,i){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+i,n,dw,Gs,Gs);try{return o.runTask(a,t,r)}finally{o.cancelTask(a)}}runGuarded(n,t,r){return this._inner.runGuarded(n,t,r)}runOutsideAngular(n){return this._outer.run(n)}},dw={};function $u(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function uw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function n(){Uu(()=>{e.callbackScheduled=!1,iu(e),e.isCheckStableRunning=!0,$u(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{n()}):e._outer.run(()=>{n()}),iu(e)}function fw(e){let n=()=>{uw(e)},t=cw++;e._inner=e._inner.fork({name:"angular",properties:{[zu]:!0,[Vo]:t,[Vo+t]:!0},onInvokeTask:(r,i,o,a,s,l)=>{if(mw(l))return r.invokeTask(o,a,s,l);try{return Gh(e),r.invokeTask(o,a,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&n(),Wh(e)}},onInvoke:(r,i,o,a,s,l,c)=>{try{return Gh(e),r.invoke(o,a,s,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!pw(l)&&n(),Wh(e)}},onHasTask:(r,i,o,a)=>{r.hasTask(o,a),i===o&&(a.change=="microTask"?(e._hasPendingMicrotasks=a.microTask,iu(e),$u(e)):a.change=="macroTask"&&(e.hasPendingMacrotasks=a.macroTask))},onHandleError:(r,i,o,a)=>(r.handleError(o,a),e.runOutsideAngular(()=>e.onError.emit(a)),!1)})}function iu(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Gh(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Wh(e){e._nesting--,$u(e)}var jo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ae;onMicrotaskEmpty=new ae;onStable=new ae;onError=new ae;run(n,t,r){return n.apply(t,r)}runGuarded(n,t,r){return n.apply(t,r)}runOutsideAngular(n){return n()}runTask(n,t,r,i){return n.apply(t,r)}};function mw(e){return Fg(e,"__ignore_ng_zone__")}function pw(e){return Fg(e,"__scheduler_tick__")}function Fg(e,n){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[n]===!0}var at=class{_console=console;handleError(n){this._console.error("ERROR",n)}};function Pg(e){return Gu(e)?e:new ou(e)}function Gu(e){return e instanceof Error||typeof e=="object"&&e!==null&&typeof e.name=="string"&&typeof e.message=="string"}var ou=class extends Error{constructor(n){super(String(n),{cause:n}),this.name="ErrorBoundaryWrappedError"}},Pn=new g("",{factory:()=>{let e=f(I),n=f(ke),t;return r=>{e.runOutsideAngular(()=>{n.destroyed&&!t?setTimeout(()=>{throw r}):(t??=n.get(at),t.handleError(r))})}}}),Lg={provide:Vr,useValue:()=>{let e=f(at,{optional:!0})},multi:!0},hw=new g("",{factory:()=>{let e=f(E).defaultView;if(!e)return;let n=f(Pn),t=o=>{n(o.reason),o.preventDefault()},r=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{e.addEventListener("unhandledrejection",t),e.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),f(We).onDestroy(()=>{e.removeEventListener("error",r),e.removeEventListener("unhandledrejection",t)})}});function Wu(){return Rn([ng(()=>{f(hw)})])}function J(e,n){let[t,r,i]=Ad(e,n?.equal),o=t,a=o[Me];return o.set=r,o.update=i,o.asReadonly=Jo.bind(o),o}function Jo(){let e=this[Me];if(e.readonlyFn===void 0){let n=()=>this();n[Me]=e,e.readonlyFn=n}return e.readonlyFn}var or=new g("",{factory:()=>gw}),gw="ng";var gl=new g(""),qr=new g("",{providedIn:"platform",factory:()=>"unknown"}),ea=new g(""),ar=new g("",{factory:()=>f(E).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Ws(){return Object.create(null)}var Li=(()=>{class e{static \u0275prov=K({token:e,providedIn:"root",factory:()=>{let t=new e;return t.store=Vg(f(E),f(or)),t}});store=Ws();onSerializeCallbacks=Ws();get(t,r){if(!Object.hasOwn(this.store,t))return r;let i=this.store[t];return i!==void 0?i:r}set(t,r){this.store[t]=r}remove(t){delete this.store[t]}hasKey(t){return Object.hasOwn(this.store,t)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(t,r){this.onSerializeCallbacks[t]=r}toJson(){for(let t in this.onSerializeCallbacks)if(Object.hasOwn(this.onSerializeCallbacks,t))try{this.store[t]=this.onSerializeCallbacks[t]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C").replace(/\//g,"\\u002F")}}return e})();function Vg(e,n){let t=e.getElementById(n+"-state");if(t?.tagName==="SCRIPT"&&t.textContent)try{return Object.assign(Ws(),JSON.parse(t.textContent))}catch(r){console.warn("Exception while restoring TransferState for app "+n,r)}return Ws()}var Vi=(()=>{class e{view;node;constructor(t,r){this.view=t,this.node=r}static __NG_ELEMENT_ID__=bw}return e})();function bw(){return new Vi(V(),Ye())}var mn=class{},ta=new g("",{factory:()=>!0});var qu=new g(""),bl=(()=>{class e{static \u0275prov=K({token:e,providedIn:"root",factory:()=>new au})}return e})(),au=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let t=n.zone,r=this.queues.get(t);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let t=n.zone;this.queues.has(t)||this.queues.set(t,new Set);let r=this.queues.get(t);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[t,r]of this.queues)t===null?n||=this.flushQueue(r):n||=t.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let t=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,t=!0,r.run());return t}},qs=class{[Me];constructor(n){this[Me]=n}destroy(){this[Me].destroy()}};function St(e,n){let t=n?.injector??f(P),r=n?.manualCleanup!==!0?t.get(We):null,i,o=t.get(Vi,null,{optional:!0}),a=t.get(mn);return o!==null?(i=Bg(o.view,a,e),r instanceof $s&&r._lView===o.view&&(r=null)):i=_w(e,t.get(bl),a),i.injector=t,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new qs(i)}var jg=W(C({},Rd),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=Lo(!1);try{kd(this)}finally{Lo(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=k(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],k(e)}}}),yw=W(C({},jg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Zn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}}),vw=W(C({},jg),{consumerMarkedDirty(){this.view[O]|=8192,$r(this.view),this.notifier.notify(13)},destroy(){if(Zn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[Nn]?.delete(this)}});function Bg(e,n,t){let r=Object.create(vw);return r.view=e,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.userFn=t,r.fn=Hg(r,t),e[Nn]??=new Set,e[Nn].add(r),r.consumerMarkedDirty(r),r}function _w(e,n,t){let r=Object.create(yw);return r.userFn=e,r.fn=Hg(r,e),r.scheduler=n,r.notifier=t,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Hg(e,n){return()=>{n(t=>(e.cleanupFns??=[]).push(t))}}function pt(e){return typeof e=="function"&&e[Me]!==void 0}var ji=(()=>{class e{internalPendingTasks=f(Wr);scheduler=f(mn);errorHandler=f(Pn);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let r=this.add();try{t().catch(this.errorHandler).finally(r)}catch(i){this.errorHandler(i),r()}}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})();var jl=Symbol("InputSignalNode#UNSET"),Ib=W(C({},bi),{transformFn:void 0,applyValueToInputSignal(e,n){Kn(e,n)}});function da(e){return{toString:e}.toString()}var ie=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(ie||{}),El=class{previousValue;currentValue;firstChange;constructor(n,t,r){this.previousValue=n,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}};function Mb(e,n,t,r){n!==null?n.applyValueToInputSignal(n,r):e[t]=r}var Nb=null,ht=(()=>{Nb=Ug;let e=()=>Ug;return e.ngInherit=!0,e})();function kw(){return Nb}function Ug(e){return e.type.prototype.ngOnChanges&&(e.setInput=Fw),Ow}function Ow(){let e=Tb(this),n=e?.current;if(n){let t=e.previous;if(t===tr)e.previous=n;else for(let r in n)t[r]=n[r];e.current=null,this.ngOnChanges(n)}}function Fw(e,n,t,r,i){let o=this.declaredInputs[r],a=Tb(e)||Pw(e,{previous:tr,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new El(c&&c.currentValue,t,l===tr),Mb(e,n,i,t)}var of="__ngSimpleChanges__";function Tb(e){return Object.hasOwn(e,of)&&e[of]||null}function Pw(e,n){return e[of]=n}var zg=[];var ce=function(e,n=null,t){for(let r=0;r<zg.length;r++){let i=zg[r];i(e,n,t)}};function Lw(e,n,t){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let a=kw()(n);(t.preOrderHooks??=[]).push(e,a),(t.preOrderCheckHooks??=[]).push(e,a)}i&&(t.preOrderHooks??=[]).push(0-e,i),o&&((t.preOrderHooks??=[]).push(e,o),(t.preOrderCheckHooks??=[]).push(e,o))}function Ab(e,n){for(let t=n.directiveStart,r=n.directiveEnd;t<r;t++){let o=e.data[t].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(e.contentHooks??=[]).push(-t,a),s&&((e.contentHooks??=[]).push(t,s),(e.contentCheckHooks??=[]).push(t,s)),l&&(e.viewHooks??=[]).push(-t,l),c&&((e.viewHooks??=[]).push(t,c),(e.viewCheckHooks??=[]).push(t,c)),d!=null&&(e.destroyHooks??=[]).push(t,d)}}function Cl(e,n,t){Rb(e,n,3,t)}function Dl(e,n,t,r){(e[O]&3)===t&&Rb(e,n,t,r)}function Yu(e,n){let t=e[O];(t&3)===n&&(t&=16383,t+=1,e[O]=t)}function Rb(e,n,t,r){let i=r!==void 0?e[jr]&65535:0,o=r??-1,a=n.length-1,s=0;for(let l=i;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],r!=null&&s>=r)break}else n[l]<0&&(e[jr]+=65536),(s<o||o==-1)&&(Vw(e,t,n,l),e[jr]=(e[jr]&4294901760)+l+2),l++}function $g(e,n){ce(ie.LifecycleHookStart,e,n);let t=k(null);try{n.call(e)}finally{k(t),ce(ie.LifecycleHookEnd,e,n)}}function Vw(e,n,t,r){let i=t[r]<0,o=t[r+1],a=i?-t[r]:t[r],s=e[a];i?e[O]>>14<e[jr]>>16&&(e[O]&3)===n&&(e[O]+=16384,$g(s,o)):$g(s,o)}var Ui=-1,Xr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,t,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=t,this.injectImpl=r}};function jw(e){return(e.flags&8)!==0}function Bw(e){return(e.flags&16)!==0}function Hw(e,n,t){let r=0;for(;r<t.length;){let i=t[r];if(typeof i=="number"){if(i!==0)break;r++;let o=t[r++],a=t[r++],s=t[r++];e.setAttribute(n,a,s,o)}else{let o=i,a=t[++r];Uw(o)?e.setProperty(n,o,a):e.setAttribute(n,o,a),r++}}return r}function kb(e){return e===3||e===4||e===6}function Uw(e){return e.charCodeAt(0)===64}function $i(e,n){if(!(n===null||n.length===0))if(e===null||e.length===0)e=n.slice();else{let t=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?t=i:t===0||(t===-1||t===2?Gg(e,t,i,null,n[++r]):Gg(e,t,i,null,null))}}return e}function Gg(e,n,t,r,i){let o=0,a=e.length;if(n===-1)a=-1;else for(;o<e.length;){let s=e[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<e.length;){let s=e[o];if(typeof s=="number")break;if(s===t){i!==null&&(e[o+1]=i);return}o++,i!==null&&o++}a!==-1&&(e.splice(a,0,n),o=a+1),e.splice(o++,0,t),i!==null&&e.splice(o++,0,i)}function Ob(e){return e!==Ui}function Sl(e){return e&32767}function zw(e){return e>>16}function Il(e,n){let t=zw(e),r=n;for(;t>0;)r=r[nr],t--;return r}var af=!0;function Ml(e){let n=af;return af=e,n}var $w=256,Fb=$w-1,Pb=5,Gw=0,_n={};function Ww(e,n,t){let r;typeof t=="string"?r=t.charCodeAt(0)||0:Object.hasOwn(t,Lr)&&(r=t[Lr]),r==null&&(r=t[Lr]=Gw++);let i=r&Fb,o=1<<i;n.data[e+(i>>Pb)]|=o}function Nl(e,n){let t=Lb(e,n);if(t!==-1)return t;let r=n[A];r.firstCreatePass&&(e.injectorIndex=n.length,Xu(r.data,e),Xu(n,null),Xu(r.blueprint,null));let i=Lf(e,n),o=e.injectorIndex;if(Ob(i)){let a=Sl(i),s=Il(i,n),l=s[A].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=i,o}function Xu(e,n){e.push(0,0,0,0,0,0,0,0,n)}function Lb(e,n){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||n[e.injectorIndex+8]===null?-1:e.injectorIndex}function Lf(e,n){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let t=0,r=null,i=n;for(;i!==null;){if(r=Ub(i),r===null)return Ui;if(t++,i=i[nr],r.injectorIndex!==-1)return r.injectorIndex|t<<16}return Ui}function sf(e,n,t){Ww(e,n,t)}function qw(e,n){if(n==="class")return e.classes;if(n==="style")return e.styles;let t=e.attrs;if(t){let r=t.length,i=0;for(;i<r;){let o=t[i];if(kb(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof t[i]=="string";)i++;else{if(o===n)return t[i+1];i=i+2}}}return null}function Vb(e,n,t){if(t&8||e!==void 0)return e;Qs(n,"NodeInjector")}function jb(e,n,t,r){if(t&8&&r===void 0&&(r=null),(t&3)===0){let i=e[kn],o=ot(void 0);try{return i?i.get(n,r,t&8):mu(n,r,t&8)}finally{ot(o)}}return Vb(r,n,t)}function Bb(e,n,t,r=0,i){if(e!==null){if(n[O]&2048&&!(r&2)){let a=Kw(e,n,t,r,_n);if(a!==_n)return a}let o=Hb(e,n,t,r,_n);if(o!==_n)return o}return jb(n,t,r,i)}function Hb(e,n,t,r,i){let o=Xw(t);if(typeof o=="function"){if(!ju(n,e,r))return r&1?Vb(i,t,r):jb(n,t,r,i);try{let a;if(a=o(r),a==null&&!(r&8))Qs(t);else return a}finally{Bu()}}else if(typeof o=="number"){let a=null,s=Lb(e,n),l=Ui,c=r&1?n[st][Xe]:null;for((s===-1||r&4)&&(l=s===-1?Lf(e,n):n[s+8],l===Ui||!qg(r,!1)?s=-1:(a=n[A],s=Sl(l),n=Il(l,n)));s!==-1;){let d=n[A];if(Wg(o,s,d.data)){let u=Yw(s,n,t,a,r,c);if(u!==_n)return u}l=n[s+8],l!==Ui&&qg(r,n[A].data[s+8]===c)&&Wg(o,s,n)?(a=d,s=Sl(l),n=Il(l,n)):s=-1}}return i}function Yw(e,n,t,r,i,o){let a=n[A],s=a.data[e+8],l=r==null?Fn(s)&&af:r!=a&&(s.type&3)!==0,c=i&1&&o===s,d=xl(s,a,t,l,c);return d!==null?oa(n,a,d,s,i):_n}function xl(e,n,t,r,i){let o=e.providerIndexes,a=n.data,s=o&1048575,l=e.directiveStart,c=e.directiveEnd,d=o>>20,u=r?s:s+d,p=i?s+d:c;for(let m=u;m<p;m++){let h=a[m];if(m<l&&t===h||m>=l&&h.type===t)return m}if(i){let m=a[l];if(m&&Qt(m)&&m.type===t)return l}return null}function oa(e,n,t,r,i){let o=e[t],a=n.data;if(o instanceof Xr){let s=o;if(s.resolving)throw fu("");let l=Ml(s.canSeeViewProviders);s.resolving=!0;let c=a[t].type||a[t],d,u=s.injectImpl?ot(s.injectImpl):null,p=ju(e,r,0);try{o=e[t]=s.factory(void 0,i,a,e,r),n.firstCreatePass&&t>=r.directiveStart&&Lw(t,a[t],n)}finally{u!==null&&ot(u),Ml(l),s.resolving=!1,Bu()}}return o}function Xw(e){if(typeof e=="string")return e.charCodeAt(0)||0;let n=Object.hasOwn(e,Lr)?e[Lr]:void 0;return typeof n=="number"?n>=0?n&Fb:Zw:n}function Wg(e,n,t){let r=1<<e;return!!(t[n+(e>>Pb)]&r)}function qg(e,n){return!(e&2)&&!(e&1&&n)}var Ln=class{_tNode;_lView;constructor(n,t){this._tNode=n,this._lView=t}get(n,t,r){return Bb(this._tNode,this._lView,n,Or(r),t)}};function Zw(){return new Ln(Ye(),V())}function Mt(e){return da(()=>{let n=e.prototype.constructor,t=n[Po]||lf(n),r=Object.prototype,i=Object.getPrototypeOf(e.prototype).constructor;for(;i&&i!==r;){let o=i[Po]||lf(i);if(o&&o!==t)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function lf(e){return lu(e)?()=>{let n=lf(Ue(e));return n&&n()}:Jn(e)}function Kw(e,n,t,r,i){let o=e,a=n;for(;o!==null&&a!==null&&a[O]&2048&&!Fi(a);){let s=Hb(o,a,t,r|2,_n);if(s!==_n)return s;r&=-5;let l=o.parent;if(!l){let c=a[Cu];if(c){let d=c.get(t,_n,r);if(d!==_n)return d}l=Ub(a),a=a[nr]}o=l}return i}function Ub(e){let n=e[A],t=n.type;return t===2?n.declTNode:t===1?e[Xe]:null}function Vf(e){return qw(Ye(),e)}function S(e){return{token:e.token,providedIn:e.autoProvided===!1?null:"root",factory:e.factory,value:void 0}}function Qw(){return Yi(Ye(),V())}function Yi(e,n){return new L(jt(e,n))}var L=(()=>{class e{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Qw}return e})();function zb(e){return e instanceof L?e.nativeElement:e}function Jw(){return this._results[Symbol.iterator]()}var Vn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,t){return this._results.reduce(n,t)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,t){this.dirty=!1;let r=Jh(n);(this._changesDetected=!Qh(this._results,r,t))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Jw};function $b(e){return(e.flags&128)===128}var jf=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(jf||{}),Gb=new Map,eE=0;function tE(){return eE++}function nE(e){Gb.set(e[Wo],e)}function cf(e){Gb.delete(e[Wo])}var Yg="__ngContext__";function Gi(e,n){On(n)?(e[Yg]=n[Wo],nE(n)):e[Yg]=n}function Wb(e){return Yb(e[ki])}function qb(e){return Yb(e[Lt])}function Yb(e){for(;e!==null&&!Vt(e);)e=e[Lt];return e}var df;function Bf(e){df=e}function Xb(){if(df!==void 0)return df;if(typeof document<"u")return document;throw new _(210,!1)}var Zb=!1,Kb=new g("",{factory:()=>Zb});var Xg=new WeakMap;function rE(e,n){if(e==null||typeof e!="object")return;let t=Xg.get(e);t||(t=new WeakSet,Xg.set(e,t)),t.add(n)}var iE=(e,n,t,r)=>{};function oE(e,n,t,r){iE(e,n,t,r)}function Bl(e){return(e.flags&32)===32}var aE=()=>null;function Qb(e,n,t=!1){return aE(e,n,t)}function Jb(e,n){let t=e.contentQueries;if(t!==null){let r=k(null);try{for(let i=0;i<t.length;i+=2){let o=t[i],a=t[i+1];if(a!==-1){let s=e.data[a];Ko(o),s.contentQueries(2,n[a],a)}}}finally{k(r)}}}function uf(e,n,t){Ko(0);let r=k(null);try{n(e,t)}finally{k(r)}}function ey(e,n,t){if(Du(n)){let r=k(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let a=i;a<o;a++){let s=e.data[a];if(s.contentQueries){let l=t[a];s.contentQueries(1,l,a)}}}finally{k(r)}}}var nn=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(nn||{}),jn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`}},ff=class extends jn{getTypeName(){return"HTML"}},mf=class extends jn{getTypeName(){return"Style"}},pf=class extends jn{getTypeName(){return"Script"}},hf=class extends jn{getTypeName(){return"URL"}},gf=class extends jn{getTypeName(){return"ResourceURL"}};function rn(e){return e instanceof jn?e.changingThisBreaksApplicationSecurity:e}function Qr(e,n){let t=ty(e);if(t!=null&&t!==n){if(t==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${t} (see ${su})`)}return t===n}function ty(e){return e instanceof jn&&e.getTypeName()||null}function Hf(e){return new ff(e)}function Uf(e){return new mf(e)}function zf(e){return new pf(e)}function $f(e){return new hf(e)}function Gf(e){return new gf(e)}var yl;function sE(){if(yl===void 0&&(yl=null,pn.trustedTypes))try{yl=pn.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return yl}function Hl(e){return sE()?.createHTML(e)||e}function lE(e){let n=new yf(e);return cE()?new bf(n):n}var bf=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let t=new window.DOMParser().parseFromString(Hl(n),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(n):(t.firstChild?.remove(),t)}catch{return null}}},yf=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let t=this.inertDocument.createElement("template");return t.innerHTML=Hl(n),t}};function cE(){try{return!!new window.DOMParser().parseFromString(Hl(""),"text/html")}catch{return!1}}var dE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Ul(e){return e=String(e),e.match(dE)?e:"unsafe:"+e}function Hn(e){let n=Object.create(null);for(let t of e.split(","))n[t]=!0;return n}function ua(...e){let n=Object.create(null);for(let t of e)for(let r in t)Object.hasOwn(t,r)&&(n[r]=!0);return n}var ny=Hn("area,br,col,hr,img,wbr"),ry=Hn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),iy=Hn("rp,rt"),uE=ua(iy,ry),fE=ua(ry,Hn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),mE=ua(iy,Hn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Zg=ua(ny,fE,mE,uE),oy=Hn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),pE=Hn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),hE=Hn("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),gE=ua(oy,pE,hE),bE=Hn("script,style,template"),vf=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let t=n.firstChild,r=!0,i=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?r=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,r&&t.firstChild){i.push(t),t=_E(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=vE(t);if(o){t=o;break}t=i.pop()}}return this.buf.join("")}startElement(n){let t=Kg(n).toLowerCase();if(!Object.hasOwn(Zg,t))return this.sanitizedSomething=!0,!Object.hasOwn(bE,t);this.buf.push("<"),this.buf.push(t);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),a=o.name,s=a.toLowerCase();if(!Object.hasOwn(gE,s)){this.sanitizedSomething=!0;continue}let l=o.value;oy[s]&&(l=Ul(l)),this.buf.push(" ",a,'="',Qg(l),'"')}return this.buf.push(">"),!0}endElement(n){let t=Kg(n).toLowerCase();Object.hasOwn(Zg,t)&&!Object.hasOwn(ny,t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(n){this.buf.push(Qg(n))}};function yE(e,n){return(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function vE(e){let n=e.nextSibling;if(n&&e!==n.previousSibling)throw ay(n);return n}function _E(e){let n=e.firstChild;if(n&&yE(e,n))throw ay(n);return n}function Kg(e){let n=e.nodeName;return typeof n=="string"?n:"FORM"}function ay(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var CE=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,DE=/([^\#-~ |!])/g;function Qg(e){return e.replace(/&/g,"&amp;").replace(CE,function(n){let t=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((t-55296)*1024+(r-56320)+65536)+";"}).replace(DE,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var vl;function Wf(e,n){let t=null;try{vl=vl||lE(e);let r=n?String(n):"";t=vl.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=t.innerHTML,t=vl.getInertBodyElement(r)}while(r!==o);let s=new vf().sanitizeChildren(Jg(t)||t);return Hl(s)}finally{if(t){let r=Jg(t)||t;for(;r.firstChild;)r.firstChild.remove()}}}function Jg(e){return"content"in e&&xE(e)?e.content:null}function xE(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function wE(e,n){return e.createText(n)}function EE(e,n,t){e.setValue(n,t)}function sy(e,n,t){return e.createElement(n,t)}function Yr(e,n,t,r,i){e.insertBefore(n,t,r,i)}function ly(e,n,t){e.appendChild(n,t)}function eb(e,n,t,r,i){r!==null?Yr(e,n,t,r,i):ly(e,n,t)}function SE(e,n,t,r){e.removeChild(null,n,t,r)}function IE(e,n,t){e.setAttribute(n,"style",t)}function ME(e,n,t){t===""?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}function cy(e,n,t){let{mergedAttrs:r,classes:i,styles:o}=t;r!==null&&Hw(e,n,r),i!==null&&ME(e,n,i),o!==null&&IE(e,n,o)}function NE(e,n,t){let r=e.length;for(;;){let i=e.indexOf(n,t);if(i===-1)return i;if(i===0||e.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||e.charCodeAt(i+o)<=32)return i}t=i+1}}var dy="ng-template";function TE(e,n,t,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&NE(n[i+1].toLowerCase(),t,0)!==-1)return!0}else if(qf(e))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===t)return!0}return!1}function qf(e){return e.type===4&&e.value!==dy}function AE(e,n,t){let r=e.type===4&&!t?dy:e.value;return n===r}function RE(e,n,t){let r=4,i=e.attrs,o=i!==null?FE(i):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!en(r)&&!en(l))return!1;if(a&&en(l))continue;a=!1,r=l|r&1;continue}if(!a)if(r&4){if(r=2|r&1,l!==""&&!AE(e,l,t)||l===""&&n.length===1){if(en(r))return!1;a=!0}}else if(r&8){if(i===null||!TE(e,i,l,t)){if(en(r))return!1;a=!0}}else{let c=n[++s],d=kE(l,i,qf(e),t);if(d===-1){if(en(r))return!1;a=!0;continue}if(c!==""){let u;if(d>o?u="":u=i[d+1].toLowerCase(),r&2&&c!==u){if(en(r))return!1;a=!0}}}}return en(r)||a}function en(e){return(e&1)===0}function kE(e,n,t,r){if(n===null)return-1;let i=0;if(r||!t){let o=!1;for(;i<n.length;){let a=n[i];if(a===e)return i;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++i];for(;typeof s=="string";)s=n[++i];continue}else{if(a===4)break;if(a===0){i+=4;continue}}i+=o?1:2}return-1}else return PE(n,e)}function uy(e,n,t=!1){for(let r=0;r<n.length;r++)if(RE(e,n[r],t))return!0;return!1}function OE(e){let n=e.attrs;if(n!=null){let t=n.indexOf(5);if((t&1)===0)return n[t+1]}return null}function FE(e){for(let n=0;n<e.length;n++){let t=e[n];if(kb(t))return n}return e.length}function PE(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){let r=e[t];if(typeof r=="number")return-1;if(r===n)return t;t++}return-1}function LE(e,n){e:for(let t=0;t<n.length;t++){let r=n[t];if(e.length===r.length){for(let i=0;i<e.length;i++)if(e[i]!==r[i])continue e;return!0}}return!1}function tb(e,n){return e?":not("+n.trim()+")":n}function VE(e){let n=e[0],t=1,r=2,i="",o=!1;for(;t<e.length;){let a=e[t];if(typeof a=="string")if(r&2){let s=e[++t];i+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else r&8?i+="."+a:r&4&&(i+=" "+a);else i!==""&&!en(a)&&(n+=tb(o,i),i=""),r=a,o=o||!en(r);t++}return i!==""&&(n+=tb(o,i)),n}function jE(e){return e.map(VE).join(",")}function BE(e){let n=[],t=[],r=1,i=2;for(;r<e.length;){let o=e[r];if(typeof o=="string")i===2?o!==""&&n.push(o,e[++r]):i===8&&t.push(o);else{if(!en(i))break;i=o}r++}return t.length&&n.push(1,...t),n}var gt={},Cn=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(Cn||{}),HE;function Yf(e,n){return HE(e,n)}var Xf=new Set;var VV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var _f=new WeakMap;function fy(e){return e?e[nr]??e:null}var Bi=new WeakSet;function UE(e,n,t){let r=_f.get(e);if(!r||r.length===0)return;let i=n.parentNode,o=n.previousSibling,a=fy(t);for(let s=r.length-1;s>=0;s--){let{el:l,declarationView:c}=r[s],d=l.parentNode;l===n?(r.splice(s,1),Bi.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&l===o?(r.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&i&&d!==i&&(a===null||c===null||a===c)&&(r.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function zE(e,n,t){let r=fy(t),i=_f.get(e);i?i.some(o=>o.el===n)||i.push({el:n,declarationView:r}):_f.set(e,[{el:n,declarationView:r}])}var zl=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(zl||{}),on=new g(""),nb=new Set;function Un(e){nb.has(e)||(nb.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var $l=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})(),Zf=[0,1,2,3],Kf=(()=>{class e{ngZone=f(I);scheduler=f(mn);errorHandler=f(at,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){f(on,{optional:!0})}execute(){let t=this.sequences.size>0;t&&ce(ie.AfterRenderHooksStart),this.executing=!0;for(let r of Zf)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&ce(ie.AfterRenderHooksEnd)}register(t){let{view:r}=t;r!==void 0?((r[Br]??=[]).push(t),$r(r),r[O]|=8192):this.addSequence(t)}addSequence(t){this.executing?this.deferredRegistrations.add(t):this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,r){return r?r.run(zl.AFTER_NEXT_RENDER,t):t()}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})(),aa=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,t,r,i,o,a=null){this.impl=n,this.hooks=t,this.view=r,this.once=i,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Br];n&&(this.view[Br]=n.filter(t=>t!==this))}};function Ht(e,n){let t=n?.injector??f(P);return Un("NgAfterNextRender"),GE(e,t,n,!0)}function $E(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function GE(e,n,t,r){let i=n.get($l);i.impl??=n.get(Kf);let o=n.get(on,null,{optional:!0}),a=t?.manualCleanup!==!0?n.get(We):null,s=n.get(Vi,null,{optional:!0}),l=new aa(i.impl,$E(e),s?.view,r,a,o?.snapshot(null));return i.impl.register(l),l}var Cf=null;function rb(e,n,t,r){Cf?.maybeQueueEnterAnimation(e,n,t,r)}function ib(e,n,t,r){Cf===null?r(!1):Cf.runLeaveAnimationsWithCallback(e,n,t,r)}function Hi(e,n,t,r,i,o,a,s){if(i!=null){let l,c=!1;Vt(i)?l=i:On(i)&&(c=!0,i=i[Kt]);let d=Ze(i);e===0&&r!==null?(rb(s,r,o,t),a==null?ly(n,r,d):Yr(n,r,d,a||null,!0)):e===1&&r!==null?(Yr(n,r,d,a||null,!0),UE(o,d,s),Bi.has(d)||rb(s,r,o,t)):e===2?(s?.[lg]?.leave?.has(o.index)&&zE(o,d,s),Bi.delete(d),ib(s,o,t,u=>{if(Bi.has(d)){Bi.delete(d);return}SE(n,d,c,u)})):e===3&&(Bi.delete(d),ib(s,o,t,()=>{n.destroyNode(d)})),l!=null&&nS(n,e,t,l,o,r,a)}}function WE(e,n){my(e,n),n[Kt]=null,n[Xe]=null}function qE(e,n,t,r,i,o){r[Kt]=i,r[Xe]=n,Gl(e,r,t,1,i,o)}function my(e,n){n[hn].changeDetectionScheduler?.notify(9),Gl(e,n,n[Ee],2,null,null)}function YE(e){let n=e[ki];if(!n)return Zu(e[A],e);for(;n;){let t=null;if(On(n))t=n[ki];else{let r=n[tt];r&&(t=r)}if(!t){for(;n&&!n[Lt]&&n!==e;)On(n)&&Zu(n[A],n),n=n[Oe];n===null&&(n=e),On(n)&&Zu(n[A],n),t=n&&n[Lt]}n=t}}function Qf(e,n){let t=e[Ur],r=t.indexOf(n);t.splice(r,1)}function Jf(e,n){if(zr(n))return;let t=n[Ee];t.destroyNode&&Gl(e,n,t,3,null,null),YE(n)}function Zu(e,n){if(zr(n))return;let t=k(null);try{n[O]&=-129,n[O]|=256,n[Et]&&Zn(n[Et]),ZE(e,n),XE(e,n),n[A].type===1&&n[Ee].destroy();let r=n[rr];if(r!==null&&Vt(n[Oe])){r!==n[Oe]&&Qf(r,n);let i=n[gn];i!==null&&i.detachView(e)}cf(n)}finally{k(t)}}function XE(e,n){let t=e.cleanup,r=n[Ri];if(t!==null)for(let a=0;a<t.length-1;a+=2)if(typeof t[a]=="string"){let s=t[a+3];s>=0?r[s]():r[-s].unsubscribe(),a+=2}else{let s=r[t[a+1]];t[a].call(s)}r!==null&&(n[Ri]=null);let i=n[Mn];if(i!==null){n[Mn]=null;for(let a=0;a<i.length;a++){let s=i[a];s()}}let o=n[Nn];if(o!==null){n[Nn]=null;for(let a of o)a.destroy()}}function ZE(e,n){let t;if(e!=null&&(t=e.destroyHooks)!=null)for(let r=0;r<t.length;r+=2){let i=n[t[r]];if(!(i instanceof Xr)){let o=t[r+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=i[o[a]],l=o[a+1];ce(ie.LifecycleHookStart,s,l);try{l.call(s)}finally{ce(ie.LifecycleHookEnd,s,l)}}else{ce(ie.LifecycleHookStart,i,o);try{o.call(i)}finally{ce(ie.LifecycleHookEnd,i,o)}}}}}function py(e,n,t){if(n===null)throw new _(510,!1);return KE(e,n.parent,t)}function KE(e,n,t){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return t[Kt];if(Fn(r)){let{encapsulation:i}=e.data[r.directiveStart+r.componentOffset];if(i===nn.None||i===nn.Emulated)return null}return jt(r,t)}function hy(e,n,t){return JE(e,n,t)}function QE(e,n,t){return e.type&40?jt(e,t):null}var JE=QE,ob;function em(e,n,t,r){let i=py(e,r,n),o=n[Ee],a=r.parent||n[Xe],s=hy(a,r,n);if(i!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)eb(o,i,t[l],s,!1);else eb(o,i,t,s,!1);ob!==void 0&&ob(o,r,n,t,i)}function ra(e,n){if(n!==null){let t=n.type;if(t&3)return jt(n,e);if(t&4)return Df(-1,e[n.index]);if(t&8){let r=n.child;if(r!==null)return ra(e,r);{let i=e[n.index];return Vt(i)?Df(-1,i):Ze(i)}}else{if(t&128)return ra(e,n.next);if(t&32)return Yf(n,e)()||Ze(e[n.index]);{let r=gy(e,n);if(r!==null){if(Array.isArray(r))return r[0];let i=Tn(e[st]);return ra(i,r)}else return ra(e,n.next)}}}return null}function gy(e,n){if(n!==null){let r=e[st][Xe],i=n.projection;return r.projection[i]}return null}function Df(e,n){let t=tt+e+1;if(t<n.length){let r=n[t],i=r[A].firstChild;if(i!==null)return ra(r,i)}return n[Hr]}function tm(e,n,t,r,i,o,a){for(;t!=null;){let s=r[kn];if(t.type===128){t=t.next;continue}let l=r[t.index],c=t.type;if(a&&n===0&&(l&&Gi(Ze(l),r),t.flags|=2),!Bl(t))if(c&8)tm(e,n,t.child,r,i,o,!1),Hi(n,e,s,i,l,t,o,r);else if(c&32){let d=Yf(t,r),u;for(;u=d();)Hi(n,e,s,i,u,t,o,r);Hi(n,e,s,i,l,t,o,r)}else c&16?by(e,n,r,t,i,o):Hi(n,e,s,i,l,t,o,r);t=a?t.projectionNext:t.next}}function Gl(e,n,t,r,i,o){e.type===3?eS(t,r,n,i,o):tm(t,r,e.firstChild,n,i,o,!1)}function eS(e,n,t,r,i){let a=t[A].firstChild,s=a.next,l=Ze(t[a.index]),c=Ze(t[s.index]),d=s.index+1,u=t[d];if(n===1||n===0)r!==null&&(u&&u.hasChildNodes()?Yr(e,r,u,i,!0):(Yr(e,r,l,i,!0),Yr(e,r,c,i,!0)));else if(n===2){if(u||(u=document.createDocumentFragment(),t[d]=u),l&&l.parentNode===u)return;let p=l;for(;p!==null;){let m=p.nextSibling;if(u.appendChild(p),p===c)break;p=m}}}function tS(e,n,t){let r=n[Ee],i=py(e,t,n),o=t.parent||n[Xe],a=hy(o,t,n);by(r,0,n,t,i,a)}function by(e,n,t,r,i,o){let a=t[st],l=a[Xe].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Hi(n,e,t[kn],i,d,r,o,t)}else{let c=l,d=a[Oe];$b(r)&&(c.flags|=128),tm(e,n,c,d,i,o,!0)}}function nS(e,n,t,r,i,o,a){let s=r[Hr],l=Ze(r);if(s!==l&&Hi(n,e,t,o,s,i,a),(r[O]&4)===0)for(let c=tt;c<r.length;c++){let d=r[c];Gl(d[A],d,e,n,o,s)}}function rS(e,n,t,r,i){if(n)i?e.addClass(t,r):e.removeClass(t,r);else{let o=r.indexOf("-")===-1?void 0:Cn.DashCase;i==null?e.removeStyle(t,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=Cn.Important),e.setStyle(t,r,i,o))}}function nm(e,n,t,r,i,o,a,s,l,c,d){let u=Se+r,p=u+i,m=iS(u,p),h=typeof c=="function"?c():c;return m[A]={type:e,blueprint:m,template:t,queries:null,viewQuery:s,declTNode:n,data:m.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1,ssrId:d}}function iS(e,n){let t=[];for(let r=0;r<n;r++)t.push(r<e?null:gt);return t}function oS(e){let n=e.tView;return n===null||n.incompleteFirstPass?e.tView=nm(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function rm(e,n,t,r,i,o,a,s,l,c,d){let u=n.blueprint.slice();return u[Kt]=i,u[O]=r|4|128|8|64|1024,(c!==null||e&&e[O]&2048)&&(u[O]|=2048),Eu(u),u[Oe]=u[nr]=e,u[qe]=t,u[hn]=a||e&&e[hn],u[Ee]=s||e&&e[Ee],u[kn]=l||e&&e[kn]||null,u[Xe]=o,u[Wo]=tE(),u[Ai]=d,u[Cu]=c,u[st]=n.type==2?e[st]:u,u}function aS(e,n,t){let r=jt(n,e),i=oS(t),o=e[hn].rendererFactory,a=im(e,rm(e,i,null,yy(t),r,n,null,o.createRenderer(r,t),null,null,null));return e[n.index]=a}function yy(e){let n=16;return e.signals?n=4096:e.onPush&&(n=64),n}function vy(e,n,t,r){if(t===0)return-1;let i=n.length;for(let o=0;o<t;o++)n.push(r),e.blueprint.push(r),e.data.push(null);return i}function im(e,n){return e[ki]?e[_u][Lt]=n:e[ki]=n,e[_u]=n,n}function j(e=1){_y(ye(),V(),vn()+e,!1)}function _y(e,n,t,r){if(!r)if((n[O]&3)===3){let o=e.preOrderCheckHooks;o!==null&&Cl(n,o,t)}else{let o=e.preOrderHooks;o!==null&&Dl(n,o,0,t)}ir(t)}var fa=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(fa||{});function Zr(e,n,t,r){let i=k(null);try{let[o,a,s]=e.inputs[t],l=null;(a&fa.SignalBased)!==0&&(l=n[o][Me]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):s!==null&&(r=s.call(n,r)),e.setInput!==null?e.setInput(n,l,r,t,o):Mb(n,l,o,r)}finally{k(i)}}function Cy(e,n,t,r,i){let o=vn(),a=r&2;try{ir(-1),a&&n.length>Se&&_y(e,n,Se,!1);let s=a?ie.TemplateUpdateStart:ie.TemplateCreateStart;ce(s,i,t),t(r,i)}finally{ir(o);let s=a?ie.TemplateUpdateEnd:ie.TemplateCreateEnd;ce(s,i,t)}}function om(e,n,t){mS(e,n,t),(t.flags&64)===64&&pS(e,n,t)}function Wl(e,n,t=jt){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let a=r[o+1],s=a===-1?t(n,e):e[a];e[i++]=s}}}function sS(e,n,t,r){let o=r.get(Kb,Zb)||t===nn.ShadowDom||t===nn.ExperimentalIsolatedShadowDom,a=e.selectRootElement(n,o);return lS(a),a}function lS(e){cS(e)}var cS=()=>null;function dS(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function uS(e,n,t,r,i,o){let a=n[A];if(am(e,a,n,t,r)){Fn(e)&&fS(n,e.index);return}e.type&3&&(t=dS(t)),Dy(e,n,t,r,i,o)}function Dy(e,n,t,r,i,o){if(e.type&3){let a=jt(e,n);r=o!=null?o(r,e.value||"",t):r,r=xy(t,a,r),i.setProperty(a,t,r)}else e.type&12}function xy(e,n,t){return e==="src"&&(n.tagName==="IMG"||n.tagName==="VIDEO")?t==null?"":rn(t):t}function fS(e,n){let t=Bt(n,e);t[O]&16||(t[O]|=64)}function mS(e,n,t){let r=t.directiveStart,i=t.directiveEnd;Fn(t)&&aS(n,t,e.data[r+t.componentOffset]),e.firstCreatePass||Nl(t,n);let o=t.initialInputs;for(let a=r;a<i;a++){let s=e.data[a],l=oa(n,e,a,t);if(Gi(l,n),o!==null&&yS(n,a-r,l,s,t,o),Qt(s)){let c=Bt(t.index,n);c[qe]=oa(n,e,a,t)}}}function pS(e,n,t){let r=t.directiveStart,i=t.directiveEnd,o=t.index,a=wg();try{ir(o);for(let s=r;s<i;s++){let l=e.data[s],c=n[s];cl(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&hS(l,c)}}finally{ir(-1),cl(a)}}function hS(e,n){e.hostBindings!==null&&e.hostBindings(1,n)}function wy(e,n){let t=e.directiveRegistry,r=null;if(t)for(let i=0;i<t.length;i++){let o=t[i];uy(n,o.selectors,!1)&&(r??=[],Qt(o)?r.unshift(o):r.push(o))}return r}function gS(e,n,t,r,i,o){let a=jt(e,n);r=xy(t,a,r),bS(n[Ee],a,o,e.value,t,r,i)}function bS(e,n,t,r,i,o,a){if(o==null)a?.(o,r||"",i),e.removeAttribute(n,i,t);else{let s=a==null?zo(o):a(o,r||"",i);e.setAttribute(n,i,s,t)}}function yS(e,n,t,r,i,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];Zr(r,t,l,c)}}function Ey(e,n,t,r,i){let o=Se+t,a=n[A],s=i(a,n,e,r,t);n[o]=s,Gr(e,!0);let l=e.type===2;return l?(cy(n[Ee],s,e),(gg()===0||Yo(e))&&Gi(s,n),bg()):Gi(s,n),pl()&&(!l||!Bl(e))&&em(a,n,s,e),e}function Sy(e){let n=e;return Fu()?Pu():(n=n.parent,Gr(n,!1)),n}function vS(e,n){let t=e[kn];if(!t)return;let r;try{r=t.get(Pn,null)}catch{r=null}r?.(n)}function am(e,n,t,r,i){let o=e.inputs?.[r],a=e.hostDirectiveInputs?.[r],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],u=n.data[c];Zr(u,t[c],d,i),s=!0}if(o)for(let l of o){let c=t[l],d=n.data[l];Zr(d,c,r,i),s=!0}return s}function _S(e,n,t,r,i,o){let a=null,s=null,l=null,c=!1,d=e.directiveToIndex.get(r.type);if(typeof d=="number"?a=d:[a,s,l]=d,s!==null&&l!==null&&e.hostDirectiveInputs&&Object.hasOwn(e.hostDirectiveInputs,i)){let u=e.hostDirectiveInputs[i];for(let p=0;p<u.length;p+=2){let m=u[p];if(m>=s&&m<=l){let h=n.data[m],y=u[p+1];Zr(h,t[m],y,o),c=!0}else if(m>l)break}}return a!==null&&Object.hasOwn(r.inputs,i)&&(Zr(r,t[a],i,o),c=!0),c}function CS(e,n){let t=Bt(n,e),r=t[A];DS(r,t);let i=t[Kt];i!==null&&t[Ai]===null&&(t[Ai]=Qb(i,t[kn])),ce(ie.ComponentStart);try{sm(r,t,t[qe])}finally{ce(ie.ComponentEnd,t[qe])}}function DS(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])}function sm(e,n,t){ul(n);try{let r=e.viewQuery;r!==null&&uf(1,r,t);let i=e.template;i!==null&&Cy(e,n,i,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),n[gn]?.finishViewCreation(e),e.staticContentQueries&&Jb(e,n),e.staticViewQueries&&uf(2,e.viewQuery,t);let o=e.components;o!==null&&xS(n,o)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{n[O]&=-5,fl()}}function xS(e,n){for(let t=0;t<n.length;t++)CS(e,n[t])}function lm(e,n,t,r){let i=k(null);try{let o=n.tView,s=e[O]&4096?4096:16,l=rm(e,o,t,s,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=e[n.index];l[rr]=c;let d=e[gn];return d!==null&&(l[gn]=d.createEmbeddedView(o)),sm(o,l,t),l}finally{k(i)}}function Tl(e,n){return!n||n.firstChild===null||$b(e)}function sa(e,n,t,r,i=!1){if(e.type===3){let o=e.firstChild,a=o.next,s=Ze(n[o.index]),l=Ze(n[a.index]),c=s;for(;c!==null&&(r.push(c),c!==l);)c=c.nextSibling;return r}for(;t!==null;){if(t.type===128){t=i?t.projectionNext:t.next;continue}let o=n[t.index];if(o!==null)if(Vt(o)){let s=o[Hr];s!==o[Kt]&&r.push(Ze(o)),o[O]&4||Iy(o,r),r.push(s)}else r.push(Ze(o));let a=t.type;if(a&8)sa(e,n,t.child,r);else if(a&32){let s=Yf(t,n),l;for(;l=s();)r.push(l)}else if(a&16){let s=gy(n,t);if(Array.isArray(s))r.push(...s);else{let l=Tn(n[st]);sa(l[A],l,s,r,!0)}}t=i?t.projectionNext:t.next}return r}function Iy(e,n){for(let t=tt;t<e.length;t++){let r=e[t],i=r[A].firstChild;i!==null&&sa(r[A],r,i,n)}}function My(e){if(e[Br]!==null){for(let n of e[Br])n.impl.addSequence(n);e[Br].length=0}}var Ny=[];function wS(e){return e[Et]??ES(e)}function ES(e){let n=Ny.pop()??Object.create(IS);return n.lView=e,n}function SS(e){e.lView[Et]!==e&&(e.lView=null,Ny.push(e))}var IS=W(C({},qn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{$r(e.lView)},consumerOnSignalRead(){this.lView[Et]=this}});function MS(e){let n=e[Et]??Object.create(NS);return n.lView=e,n}var NS=W(C({},qn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let n=Tn(e.lView);for(;n&&!Ty(n[A]);)n=Tn(n);n&&Su(n)},consumerOnSignalRead(){this.lView[Et]=this}});function Ty(e){return e.type!==2}function Ay(e){if(e[Nn]===null)return;let n=!0;for(;n;){let t=!1;for(let r of e[Nn])if(r.dirty&&(t=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()),e[Nn]===null))return;n=t&&!!(e[O]&8192)}}var TS=100;function Ry(e,n=0){let r=e[hn].rendererFactory,i=!1;i||r.begin?.();try{AS(e,n)}finally{i||r.end?.()}}function AS(e,n){let t=Vu();try{Lo(!0),xf(e,n);let r=0;for(;Zo(e);){if(r===TS)throw new _(103,!1);r++,xf(e,1)}}finally{Lo(t)}}function RS(e,n,t,r){if(zr(n))return;let i=n[O],o=!1,a=!1;ul(n);let s=!0,l=null,c=null;o||(Ty(e)?(c=wS(n),l=En(c)):as()===null?(s=!1,c=MS(n),l=En(c)):n[Et]&&(Zn(n[Et]),n[Et]=null));try{Eu(n),Cg(e.bindingStartIndex),t!==null&&Cy(e,n,t,2,r);let d=(i&3)===3;if(!o)if(d){let m=e.preOrderCheckHooks;m!==null&&Cl(n,m,null)}else{let m=e.preOrderHooks;m!==null&&Dl(n,m,0,null),Yu(n,0)}if(a||kS(n),Ay(n),ky(n,0),e.contentQueries!==null&&Jb(e,n),!o)if(d){let m=e.contentCheckHooks;m!==null&&Cl(n,m)}else{let m=e.contentHooks;m!==null&&Dl(n,m,1),Yu(n,1)}FS(e,n);let u=e.components;u!==null&&Fy(n,u,0);let p=e.viewQuery;if(p!==null&&uf(2,p,r),!o)if(d){let m=e.viewCheckHooks;m!==null&&Cl(n,m)}else{let m=e.viewHooks;m!==null&&Dl(n,m,2),Yu(n,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),n[nl]){for(let m of n[nl])m();n[nl]=null}o||(My(n),n[O]&=-73)}catch(d){let u=!1,p=d,m=n;for(;m!==null;){if(Vt(m)){m=m[Oe];continue}let h=m[Oi];if(h)try{let y=n[st][qe],v=y?.constructor,D={declarationInstance:y,declarationType:v,caughtBy:h},R=k(null);try{h(Pg(p),D)}finally{k(R)}u=!0;break}catch(y){p=y}m=m[Oe]}if(!u)throw o||$r(n),p}finally{c!==null&&(Xn(c,l),s&&SS(c)),fl()}}function ky(e,n){for(let t=Wb(e);t!==null;t=qb(t))for(let r=tt;r<t.length;r++){let i=t[r];Oy(i,n)}}function kS(e){for(let n=Wb(e);n!==null;n=qb(n)){if(!(n[O]&2))continue;let t=n[Ur];for(let r=0;r<t.length;r++){let i=t[r];Su(i)}}}function OS(e,n,t){ce(ie.ComponentStart);let r=Bt(n,e);try{Oy(r,t)}finally{ce(ie.ComponentEnd,r[qe])}}function Oy(e,n){ol(e)&&xf(e,n)}function xf(e,n){let r=e[A],i=e[O],o=e[Et],a=!!(n===0&&i&16);if(a||=!!(i&64&&n===0),a||=!!(i&1024),a||=!!(o?.dirty&&hi(o)),a||=!1,o&&(o.dirty=!1),e[O]&=-9217,a)RS(r,e,r.template,e[qe]);else if(i&8192){let s=k(null);try{Ay(e),ky(e,1);let l=r.components;l!==null&&Fy(e,l,1),My(e)}finally{k(s)}}}function Fy(e,n,t){for(let r=0;r<n.length;r++)OS(e,n[r],t)}function FS(e,n){let t=e.hostBindingOpCodes;if(t!==null)try{for(let r=0;r<t.length;r++){let i=t[r];if(i<0)ir(~i);else{let o=i,a=t[++r],s=t[++r];xg(a,o);let l=n[o];ce(ie.HostBindingsUpdateStart,l);try{s(2,l)}finally{ce(ie.HostBindingsUpdateEnd,l)}}}}finally{ir(-1)}}function cm(e,n){let t=Vu()?64:1088;for(e[hn].changeDetectionScheduler?.notify(n);e;){e[O]|=t;let r=Tn(e);if(Fi(e)&&!r)return e;e=r}return null}function Py(e,n,t,r){return[e,!0,0,n,null,r,null,t,null,null]}function PS(e,n){let t=tt+n;if(t<e.length)return e[t]}function dm(e,n,t,r=!0){let i=n[A];if(VS(i,n,e,t),r){let a=Df(t,e),s=n[Ee],l=s.parentNode(e[Hr]);l!==null&&qE(i,e[Xe],s,n,l,a)}let o=n[Ai];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function LS(e,n){let t=Al(e,n);return t!==void 0&&Jf(t[A],t),t}function Al(e,n){if(e.length<=tt)return;let t=tt+n,r=e[t];if(r){let i=r[rr];i!==null&&i!==e&&Qf(i,r),n>0&&(e[t-1][Lt]=r[Lt]);let o=$o(e,tt+n);WE(r[A],r);let a=o[gn];a!==null&&a.detachView(o[A]),r[Oe]=null,r[Lt]=null,r[O]&=-129}return r}function VS(e,n,t,r){let i=tt+r,o=t.length;r>0&&(t[i-1][Lt]=n),r<o-tt?(n[Lt]=t[i],pu(t,tt+r,n)):(t.push(n),n[Lt]=null),n[Oe]=t;let a=n[rr];a!==null&&t!==a&&Ly(a,n);let s=n[gn];s!==null&&s.insertView(e),al(n),n[O]|=128}function Ly(e,n){let t=e[Ur],r=n[Oe];if(On(r))e[O]|=2;else{let i=r[Oe][st];n[st]!==i&&(e[O]|=2)}t===null?e[Ur]=[n]:t.push(n)}var sr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,t=n[A];return sa(t,n,t.firstChild,[])}constructor(n,t){this._lView=n,this._cdRefInjectingView=t}get context(){return this._lView[qe]}set context(n){this._lView[qe]=n}get destroyed(){return zr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Oe];if(Vt(n)){let t=n[qo],r=t?t.indexOf(this):-1;r>-1&&(Al(n,r),$o(t,r))}this._attachedToViewContainer=!1}Jf(this._lView[A],this._lView)}onDestroy(n){sl(this._lView,n)}markForCheck(){cm(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[O]&=-129}reattach(){al(this._lView),this._lView[O]|=128}detectChanges(){this._lView[O]|=1024,Ry(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new _(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Fi(this._lView),t=this._lView[rr];t!==null&&!n&&Qf(t,this._lView),my(this._lView[A],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new _(902,!1);this._appRef=n;let t=Fi(this._lView),r=this._lView[rr];r!==null&&!t&&Ly(r,this._lView),al(this._lView)}};var It=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=jS;constructor(t,r,i){this._declarationLView=t,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,r){return this.createEmbeddedViewImpl(t,r)}createEmbeddedViewImpl(t,r,i){let o=lm(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:r,dehydratedView:i});return new sr(o)}}return e})();function jS(){return ql(Ye(),V())}function ql(e,n){return e.type&4?new It(n,e,Yi(e,n)):null}function Jr(e,n,t,r,i){let o=e.data[n];if(o===null)o=BS(e,n,t,r,i),Dg()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=r,o.attrs=i;let a=yg();o.injectorIndex=a===null?-1:a.injectorIndex}return Gr(o,!0),o}function BS(e,n,t,r,i){let o=Ou(),a=Fu(),s=a?o:o&&o.parent,l=e.data[n]=US(e,s,t,n,r,i);return HS(e,l,o,a),l}function HS(e,n,t,r){e.firstChild===null&&(e.firstChild=n),t!==null&&(r?t.child==null&&n.parent!==null&&(t.child=n):t.next===null&&(t.next=n,n.prev=t))}function US(e,n,t,r,i,o){let a=n?n.injectorIndex:-1,s=0;return Au()&&(s|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:i,namespace:Hu(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var zS=()=>null,$S=()=>null;function wf(e,n){return zS(e,n)}function GS(e,n,t){return $S(e,n,t)}var Vy=class{},Fe=class{},ve=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>WS()};function WS(){let e=V(),n=Ye(),t=Bt(n.index,e);return(On(t)?t:e)[Ee]}var jy=(()=>{class e{static \u0275prov=K({token:e,providedIn:"root",factory:()=>null})}return e})();function By(e){return e.debugInfo?.className||e.type.name||null}var wl={},Rl=class{injector;parentInjector;constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,r){let i=this.injector.get(n,wl,r);return i!==wl||t===wl?i:this.parentInjector.get(n,t,r)}};function qS(e,n,t){return e[n]=t}function Bn(e,n,t){if(t===gt)return!1;let r=e[n];return Object.is(r,t)?!1:(e[n]=t,!0)}function Hy(e,n,t,r){let i=Bn(e,n,t);return Bn(e,n+1,r)||i}function zi(e,n,t){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&rE(i,o);let a=Fn(e)?Bt(e.index,n):n;cm(a,5);let s=n[qe],l=ab(n,s,t,i),c=r.__ngNextListenerFn__;for(;c;)l=ab(n,s,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function ab(e,n,t,r){let i=k(null);try{return ce(ie.OutputStart,n,t),t(r)!==!1}catch(o){return vS(e,o),!1}finally{ce(ie.OutputEnd,n,t),k(i)}}function Uy(e,n,t,r,i,o,a,s){let l=Yo(e),c=!1,d=null;if(!r&&l&&(d=XS(n,t,o,e.index)),d!==null){let u=d.__ngLastListenerFn__||d;u.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let u=jt(e,t),p=r?r(u):u;oE(t,p,o,s),r||(s.__ngNativeEl__=u);let m=i.listen(p,o,s);if(!YS(o)){let h=r?y=>r(Ze(y[e.index])):e.index;zy(h,n,t,o,s,m,!1)}}return c}function YS(e){return e.startsWith("animation")||e.startsWith("transition")}function XS(e,n,t,r){let i=e.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let a=i[o];if(a===t&&i[o+1]===r){let s=n[Ri],l=i[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function zy(e,n,t,r,i,o,a){let s=n.firstCreatePass?Mu(n):null,l=Iu(t),c=l.length;l.push(i,o),s&&s.push(r,e,c,(c+1)*(a?-1:1))}function sb(e,n,t,r,i){let o=null,a=null,s=null,l=!1,c=e.directiveToIndex.get(t.type);if(typeof c=="number"?o=c:[o,a,s]=c,a!==null&&s!==null&&e.hostDirectiveOutputs&&Object.hasOwn(e.hostDirectiveOutputs,r)){let d=e.hostDirectiveOutputs[r];for(let u=0;u<d.length;u+=2){let p=d[u];if(p>=a&&p<=s)l=!0,kl(e,n,p,d[u+1],r,i);else if(p>s)break}}return Object.hasOwn(t.outputs,r)&&(l=!0,kl(e,n,o,r,r,i)),l}function kl(e,n,t,r,i,o){let a=n[t],s=n[A],c=s.data[t].outputs[r],u=a[c].subscribe(o);zy(e.index,s,n,i,o,u,!0)}function Yl(){ZS()}function ZS(){let e=V(),n=ye(),t=Ye();if(n.firstCreatePass&&QS(n,t),t.controlDirectiveIndex===-1)return;Un("NgSignalForms");let r=e[t.controlDirectiveIndex];n.data[t.controlDirectiveIndex].controlDef.create(r,new Ol(e,n,t))}function Xl(){KS()}function KS(){let e=V(),n=ye(),t=Qo();if(t.controlDirectiveIndex===-1)return;let r=n.data[t.controlDirectiveIndex].controlDef,i=e[t.controlDirectiveIndex];r.update(i,new Ol(e,n,t))}var Ol=class{lView;tView;tNode;hasPassThrough;constructor(n,t,r){this.lView=n,this.tView=t,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return jt(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,t){let r=this.tView.data[this.tNode.customControlIndex];sb(this.tNode,this.lView,r,n,zi(this.tNode,this.lView,t))}listenToCustomControlModel(n){let t=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];sb(this.tNode,this.lView,r,t,zi(this.tNode,this.lView,n))}setInputOnDirectives(n,t,r){let i=this.tNode.inputs?.[n],o=this.tNode.hostDirectiveInputs?.[n];if(!i&&!o)return!1;let a=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let l=this.lView[s],c=this.tView.data[s];(!r||r(cb(l,c,n)))&&(Zr(c,l,n,t),a=!0)}if(o)for(let s=0;s<o.length;s+=2){let l=o[s];if(l===this.tNode.controlDirectiveIndex)continue;let c=this.lView[l],d=o[s+1],u=this.tView.data[l];(!r||r(cb(c,u,n)))&&(Zr(u,c,d,t),a=!0)}return a}setCustomControlModelInput(n){let t=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";_S(this.tNode,this.tView,this.lView,t,r,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let t=this.tView.data[this.tNode.customControlIndex];return(t.signalFormsInputPresence??=this._buildCustomControlInputCache(t))[n]===!0}_buildCustomControlInputCache(n){let t={};for(let r in n.inputs)t[r]=!0;if(n.hostDirectives!==null){let r=[...n.hostDirectives];for(;r.length>0;){let i=r.shift();if(typeof i!="function"){for(let a in i.inputs)t[i.inputs[a]]=!0;let o=lb(i.directive);o!==null&&r.push(...o);continue}for(let o of i()){if(typeof o=="function")continue;if(o.inputs)for(let s=0;s<o.inputs.length;s+=2){let l=o.inputs[s+1]||o.inputs[s];t[l]=!0}let a=lb(o.directive);a!==null&&r.push(...a)}}}return t}};function lb(e){return typeof e=="function"&&"\u0275dir"in e?e.\u0275dir.hostDirectives??null:null}function cb(e,n,t){if(!n.inputs||!Object.hasOwn(n.inputs,t))return;let[r,i]=n.inputs[t];if((i&fa.SignalBased)!==0){let a=e[r][Me];return a.value===jl?void 0:a.value}return e[r]}function QS(e,n,t){for(let i=n.directiveStart;i<n.directiveEnd;i++)if(e.data[i].controlDef){n.controlDirectiveIndex=i;break}if(n.controlDirectiveIndex===-1)return;let r=e.data[n.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(n.inputs?.[r.passThroughInput]?.length??0)>1){n.flags|=4096;return}JS(e,n)}function JS(e,n){for(let t=n.directiveStart;t<n.directiveEnd;t++){let r=e.data[t];if(!(n.directiveToIndex&&!n.directiveToIndex.has(r.type))){if(db(r,"value")){n.flags|=1024,n.customControlIndex=t;return}if(db(r,"checked")){n.flags|=2048,n.customControlIndex=t;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let t=(r,i)=>{let o=n.hostDirectiveInputs[r],a=n.hostDirectiveOutputs[r+"Change"];if(!o||!a)return!1;for(let s=0;s<o.length;s+=2){let l=o[s];for(let c=0;c<a.length;c+=2){let d=a[c];if(l===d)for(let u of n.directiveToIndex.values()){if(!Array.isArray(u))continue;let[p,m,h]=u;if(l>=m&&l<=h)return n.flags|=i,n.customControlIndex=p,!0}}}return!1};if(t("value",1024)||t("checked",2048))return}}function db(e,n){return e0(e,n)&&t0(e,n+"Change")}function e0(e,n){return n in e.inputs}function t0(e,n){return n in e.outputs}var Ef=Symbol("BINDING");var ei=new g("");function Fl(e,n,t){let r=t?e.styles:null,i=t?e.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)i=Xs(i,s);else if(o==2){let l=s,c=n[++a];r=Xs(r,l+": "+c+";")}}t?e.styles=r:e.stylesWithoutHost=r,t?e.classes=i:e.classesWithoutHost=i}function se(e,n=0){let t=V();if(t===null)return T(e,n);let r=Ye();return Bb(r,t,Ue(e),n)}function um(){let e="invalid";throw new Error(e)}function $y(e,n,t,r,i){let o=r===null?null:{"":-1},a=i(e,t);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}i0(e,n,t,s,o,l,c)}o!==null&&r!==null&&n0(t,r,o)}function n0(e,n,t){let r=e.localNames=[];for(let i=0;i<n.length;i+=2){let o=t[n[i+1]];if(o==null)throw new _(-301,!1);r.push(n[i],o)}}function r0(e,n,t){n.componentOffset=t,(e.components??=[]).push(n.index)}function i0(e,n,t,r,i,o,a){let s=r.length,l=null;for(let p=0;p<s;p++){let m=r[p];l===null&&Qt(m)&&(l=m,r0(e,t,p)),sf(Nl(t,n),e,m.type)}d0(t,e.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let m=r[p];m.providersResolver&&m.providersResolver(m)}let c=!1,d=!1,u=vy(e,n,s,null);s>0&&(t.directiveToIndex=new Map);for(let p=0;p<s;p++){let m=r[p];if(t.mergedAttrs=$i(t.mergedAttrs,m.hostAttrs),a0(e,t,n,u,m),c0(u,m,i),a!==null&&a.has(m)){let[y,v]=a.get(m);t.directiveToIndex.set(m.type,[u,y+t.directiveStart,v+t.directiveStart])}else(o===null||!o.has(m))&&t.directiveToIndex.set(m.type,u);m.contentQueries!==null&&(t.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(t.flags|=64);let h=m.type.prototype;!c&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks??=[]).push(t.index),c=!0),!d&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(t.index),d=!0),u++}o0(e,t,o)}function o0(e,n,t){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=e.data[r];if(t===null||!t.has(i))ub(0,n,i,r),ub(1,n,i,r),mb(n,r,!1);else{let o=t.get(i);fb(0,n,o,r),fb(1,n,o,r),mb(n,r,!0)}}}function ub(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a;e===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(r),Gy(n,o)}}function fb(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a=i[o],s;e===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(r,o),Gy(n,a)}}function Gy(e,n){n==="class"?e.flags|=8:n==="style"&&(e.flags|=16)}function mb(e,n,t){let{attrs:r,inputs:i,hostDirectiveInputs:o}=e;if(r===null||!t&&i===null||t&&o===null||qf(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let a=null,s=0;for(;s<r.length;){let l=r[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!t&&Object.hasOwn(i,l)){let c=i[l];for(let d of c)if(d===n){a??=[],a.push(l,r[s+1]);break}}else if(t&&Object.hasOwn(o,l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],r[s+1]);break}}s+=2}e.initialInputs??=[],e.initialInputs.push(a)}function a0(e,n,t,r,i){e.data[r]=i;let o=i.factory||(i.factory=Jn(i.type,!0)),a=new Xr(o,Qt(i),se,null);e.blueprint[r]=a,t[r]=a,s0(e,n,r,vy(e,t,i.hostVars,gt),i)}function s0(e,n,t,r,i){let o=i.hostBindings;if(o){let a=e.hostBindingOpCodes;a===null&&(a=e.hostBindingOpCodes=[]);let s=~n.index;l0(a)!=s&&a.push(s),a.push(t,r,o)}}function l0(e){let n=e.length;for(;n>0;){let t=e[--n];if(typeof t=="number"&&t<0)return t}return 0}function c0(e,n,t){if(t){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)t[n.exportAs[r]]=e;Qt(n)&&(t[""]=e)}}function d0(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function Wy(e,n,t,r,i,o,a,s){let l=n[A],c=l.consts,d=Jt(c,a),u=Jr(l,e,t,r,d);return o&&$y(l,n,u,Jt(c,s),i),u.mergedAttrs=$i(u.mergedAttrs,u.attrs),u.attrs!==null&&Fl(u,u.attrs,!1),u.mergedAttrs!==null&&Fl(u,u.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,u),u}function qy(e,n){Ab(e,n),Du(n)&&e.queries.elementEnd(n)}function u0(e,n,t,r,i,o){let a=n.consts,s=Jt(a,i),l=Jr(n,e,t,r,s);if(l.mergedAttrs=$i(l.mergedAttrs,l.attrs),o!=null){let c=Jt(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&Fl(l,l.attrs,!1),l.mergedAttrs!==null&&Fl(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}var Yy=typeof ShadowRoot<"u",f0=typeof Document<"u";function m0(e){return Object.keys(e).map(n=>{let[t,r,i]=e[n],o={propName:t,templateName:n,isSignal:(r&fa.SignalBased)!==0};return i&&(o.transform=i),o})}function p0(e){return Object.keys(e).map(n=>({propName:e[n],templateName:n}))}function h0(e,n,t){let r=n instanceof ke?n:n?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new Rl(t,r):t}function g0(e){let n=e.get(Fe,null);if(n===null)throw new _(407,!1);let t=e.get(jy,null),r=e.get(mn,null),i=e.get(on,null,{optional:!0});return{rendererFactory:n,sanitizer:t,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function b0(e,n,t){let r=Xy(e);return sy(n,r,r==="svg"?xu:r==="math"?dg:t)}function y0(e){if((e&&"localName"in e&&typeof e.localName=="string"?e.localName:e?.tagName)?.toLowerCase()==="script")throw new _(905,!1)}function Xy(e){return(e.selectors[0][0]||"div").toLowerCase()}var Wi=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=m0(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=p0(this.componentDef.outputs),this.cachedOutputs}constructor(n,t){this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=jE(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!t}create(n,t,r,i,o,a,s,l){ce(ie.DynamicComponentStart);let c=k(null);try{let d=this.componentDef,u=h0(d,i||this.ngModule,n),p=g0(u),m=p.tracingService;return m&&m.componentCreate?m.componentCreate(By(d),()=>this.createComponentRef(p,u,t,r,o,a,s,l)):this.createComponentRef(p,u,t,r,o,a,s,l)}finally{k(c)}}createComponentRef(n,t,r,i,o,a,s,l){let c=this.componentDef,d=v0(i,c,a,o,l),u=n.rendererFactory.createRenderer(null,c),p=i?sS(u,i,c.encapsulation,t):b0(c,u,s??null);y0(p);let m=t.get(ei,null),h=_0(p,()=>t.get(E,null)??Xb());m&&m.addHost(h);let y=a?.some(pb)||o?.some(R=>typeof R!="function"&&R.bindings.some(pb)),v=rm(null,d,null,512|yy(c),null,null,n,u,t,null,Qb(p,t,!0));m&&Yy&&h instanceof ShadowRoot&&sl(v,()=>{m.removeHost(h)}),v[Se]=p,ul(v);let D=null;try{let R=Wy(Se,v,2,"#host",()=>d.directiveRegistry,!0,0);cy(u,p,R),Gi(p,v),om(d,v,R),ey(d,R,v),qy(d,R),r!==void 0&&D0(R,this.ngContentSelectors,r),D=Bt(R.index,v),v[qe]=D[qe],sm(d,v,null)}catch(R){throw D!==null&&cf(D),cf(v),R}finally{ce(ie.DynamicComponentEnd),fl()}return new Pl(this.componentType,v,!!y)}};function v0(e,n,t,r,i){let o=e?["ng-version","22.2.3"]:BE(n.selectors[0]),a=null,s=null,l=0;if(t)for(let u of t)l+=u[Ef].requiredVars,u.create&&(u.targetIdx=0,(a??=[]).push(u)),u.update&&(u.targetIdx=0,(s??=[]).push(u));if(r)for(let u=0;u<r.length;u++){let p=r[u];if(typeof p!="function")for(let m of p.bindings){l+=m[Ef].requiredVars;let h=u+1;m.create&&(m.targetIdx=h,(a??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let c=[n];if(r)for(let u of r){let p=typeof u=="function"?u:u.type,m=Uo(p);c.push(m)}return nm(0,null,C0(a,s),1,l,c,null,null,null,[o],null)}function _0(e,n){let t=e.getRootNode?.();return f0&&t instanceof Document?t.head:t&&Yy&&t instanceof ShadowRoot?t:n().head}function C0(e,n){return!e&&!n?null:t=>{if(t&1&&e)for(let r of e)r.create();if(t&2&&n)for(let r of n)r.update()}}function pb(e){let n=e[Ef].kind;return n==="input"||n==="twoWay"}var Pl=class extends Vy{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,t,r){super(),this._rootLView=t,this._hasInputBindings=r,this._tNode=rl(t[A],Se),this.location=Yi(this._tNode,t),this.instance=Bt(this._tNode.index,t)[qe],this.hostView=this.changeDetectorRef=new sr(t,void 0),this.componentType=n}setInput(n,t){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),t))return;let i=this._rootLView,o=am(r,i[A],i,n,t);this.previousInputValues.set(n,t);let a=Bt(r.index,i);cm(a,1)}get injector(){return new Ln(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function D0(e,n,t){let r=e.projection=[];for(let i=0;i<n.length;i++){let o=t[i];r.push(o!=null&&o.length?Array.from(o):null)}}var Ut=(()=>{class e{static __NG_ELEMENT_ID__=x0}return e})();function x0(){let e=Ye();return Zy(e,V())}var Sf=class e extends Ut{_lContainer;_hostTNode;_hostLView;constructor(n,t,r){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=r}get element(){return Yi(this._hostTNode,this._hostLView)}get injector(){return new Ln(this._hostTNode,this._hostLView)}get parentInjector(){let n=Lf(this._hostTNode,this._hostLView);if(Ob(n)){let t=Il(n,this._hostLView),r=Sl(n),i=t[A].data[r+8];return new Ln(i,t)}else return new Ln(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let t=hb(this._lContainer);return t!==null&&t[n]||null}get length(){return this._lContainer.length-tt}createEmbeddedView(n,t,r){let i,o,a;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector,a=r.onError);let s=wf(this._lContainer,n.ssrId),l=n.createEmbeddedViewImpl(t||{},o,s);return a&&(l._lView[Oi]=a),this.insertImpl(l,i,Tl(this._hostTNode,s)),l}createComponent(n,t,r,i,o,a,s){let l,c,d=t||{};l=d.index,r=d.injector,i=d.projectableNodes,o=d.environmentInjector||d.ngModuleRef,a=d.directives,s=d.bindings,c=d.onError;let u=new Wi(er(n)),p=r||this.parentInjector;if(!o&&u.ngModule==null){let R=this.parentInjector.get(ke,null);R&&(o=R)}let m=er(u.componentType??{}),h=wf(this._lContainer,m?.id??null),y=h?.firstChild??null,v=u.create(p,i,y,o,a,s,this._getHostElementNamespace());return c&&(v.hostView._lView[Oi]=c),this.insertImpl(v.hostView,l,Tl(this._hostTNode,h)),v}_getHostElementNamespace(){if(this._hostTNode.type&2){let n=this._hostTNode.parent??this._hostLView[Xe];return n!==null&&n.type&2&&typeof n.value=="string"&&n.value.toLowerCase()==="foreignobject"?null:n?.namespace??null}return this._hostTNode.namespace}insert(n,t){return this.insertImpl(n,t,!0)}insertImpl(n,t,r){let i=n._lView;if(fg(i)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=i[Oe],c=new e(l,l[Xe],l[Oe]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(t),a=this._lContainer;return dm(a,i,o,r),n.attachToViewContainerRef(),pu(Ku(a),o,n),n}move(n,t){return this.insert(n,t)}indexOf(n){let t=hb(this._lContainer);return t!==null?t.indexOf(n):-1}remove(n){let t=this._adjustIndex(n,-1),r=Al(this._lContainer,t);r&&($o(Ku(this._lContainer),t),Jf(r[A],r))}detach(n){let t=this._adjustIndex(n,-1),r=Al(this._lContainer,t);return r&&$o(Ku(this._lContainer),t)!=null?new sr(r):null}_adjustIndex(n,t=0){return n??this.length+t}};function hb(e){return e[qo]}function Ku(e){return e[qo]||(e[qo]=[])}function Zy(e,n){let t,r=n[e.index];return Vt(r)?t=r:(t=Py(r,n,null,e),n[e.index]=t,im(n,t)),E0(t,n,e,r),new Sf(t,e,n)}function w0(e,n){let t=e[Ee],r=t.createComment(""),i=jt(n,e),o=t.parentNode(i);return Yr(t,o,r,t.nextSibling(i),!1),r}var E0=M0,S0=()=>!1;function I0(e,n,t){return S0(e,n,t)}function M0(e,n,t,r){if(e[Hr])return;let i;t.type&8?i=Ze(r):i=w0(n,t),e[Hr]=i}var If=class e{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},Mf=class e{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let t=n.queries;if(t!==null){let r=n.contentQueries!==null?n.contentQueries[0]:t.length,i=[];for(let o=0;o<r;o++){let a=t.getByIndex(o),s=this.queries[a.indexInDeclarationView];i.push(s.clone())}return new e(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let t=0;t<this.queries.length;t++)mm(n,t).matches!==null&&this.queries[t].setDirty()}},Ll=class{flags;read;predicate;constructor(n,t,r=null){this.flags=t,this.read=r,typeof n=="string"?this.predicate=k0(n):this.predicate=n}},Nf=class e{queries;constructor(n=[]){this.queries=n}elementStart(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,t)}elementEnd(n){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(n)}embeddedTView(n){let t=null;for(let r=0;r<this.length;r++){let i=t!==null?t.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,t!==null?t.push(o):t=[o])}return t!==null?new e(t):null}template(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,t)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Tf=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,t=-1){this.metadata=n,this._declarationNodeIndex=t}elementStart(n,t){this.isApplyingToNode(t)&&this.matchTNode(n,t)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,t){this.elementStart(n,t)}embeddedTView(n,t){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,t),new e(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==t;)r=r.parent;return t===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,t){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,t,N0(t,o)),this.matchTNodeWithReadOption(n,t,xl(t,n,o,!1,!1))}else r===It?t.type&4&&this.matchTNodeWithReadOption(n,t,-1):this.matchTNodeWithReadOption(n,t,xl(t,n,r,!1,!1))}matchTNodeWithReadOption(n,t,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===L||i===Ut||i===P||i===It&&t.type&4)this.addMatch(t.index,-2);else{let o=xl(t,n,i,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,r)}}addMatch(n,t){this.matches===null?this.matches=[n,t]:this.matches.push(n,t)}};function N0(e,n){let t=e.localNames;if(t!==null){for(let r=0;r<t.length;r+=2)if(t[r]===n)return t[r+1]}return null}function T0(e,n){return e.type&11?Yi(e,n):e.type&4?ql(e,n):null}function A0(e,n,t,r){return t===-1?T0(n,e):t===-2?R0(e,n,r):oa(e,e[A],t,n)}function R0(e,n,t){if(t===L)return Yi(n,e);if(t===It)return ql(n,e);if(t===Ut)return Zy(n,e);if(t===P)return new Ln(n,e)}function Ky(e,n,t,r){let i=n[gn].queries[r];if(i.matches===null){let o=e.data,a=t.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(A0(n,d,a[l+1],t.metadata.read))}}i.matches=s}return i.matches}function Af(e,n,t,r){let i=e.queries.getByIndex(t),o=i.matches;if(o!==null){let a=Ky(e,n,i,t);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)r.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let u=tt;u<d.length;u++){let p=d[u];p[rr]===p[Oe]&&Af(p[A],p,c,r)}if(d[Ur]!==null){let u=d[Ur];for(let p=0;p<u.length;p++){let m=u[p];Af(m[A],m,c,r)}}}}}return r}function fm(e,n){return e[gn].queries[n].queryList}function Qy(e,n,t){let r=new Vn((t&4)===4);return hg(e,n,r,r.destroy),(n[gn]??=new Mf).queries.push(new If(r))-1}function Jy(e,n,t){let r=ye();return r.firstCreatePass&&(tv(r,new Ll(e,n,t),-1),(n&2)===2&&(r.staticViewQueries=!0)),Qy(r,V(),n)}function ev(e,n,t,r){let i=ye();if(i.firstCreatePass){let o=Ye();tv(i,new Ll(n,t,r),o.index),O0(i,e),(t&2)===2&&(i.staticContentQueries=!0)}return Qy(i,V(),t)}function k0(e){return e.split(",").map(n=>n.trim())}function tv(e,n,t){e.queries===null&&(e.queries=new Nf),e.queries.track(new Tf(n,t))}function O0(e,n){let t=e.contentQueries||(e.contentQueries=[]),r=t.length?t[t.length-1]:-1;n!==r&&t.push(e.queries.length-1,n)}function mm(e,n){return e.queries.getByIndex(n)}function nv(e,n){let t=e[A],r=mm(t,n);return r.crossesNgTemplate?Af(t,e,n,[]):Ky(t,e,r,n)}function rv(e,n,t){let r,i=wo(()=>{r._dirtyCounter();let o=F0(r,e);if(n&&o===void 0)throw new _(-951,!1);return o});return r=i[Me],r._dirtyCounter=J(0),r._flatValue=void 0,i}function pm(e){return rv(!0,!1,e)}function hm(e){return rv(!0,!0,e)}function iv(e,n){let t=e[Me];t._lView=V(),t._queryIndex=n,t._queryList=fm(t._lView,n),t._queryList.onDirty(()=>t._dirtyCounter.update(r=>r+1))}function F0(e,n){let t=e._lView,r=e._queryIndex;if(t===void 0||r===void 0||t[O]&4)return n?void 0:et;let i=fm(t,r),o=nv(t,r);return i.reset(o,zb),n?i.first:i._changesDetected||e._flatValue===void 0?e._flatValue=i.toArray():e._flatValue}function ti(e){return!!e&&typeof e.then=="function"}function gm(e){return!!e&&typeof e.subscribe=="function"}var lr=class{};var la=class extends lr{injector;instance=null;constructor(n){super();let t=new Pr([...n.providers,{provide:lr,useValue:this}],n.parent||Ni(),n.debugName,new Set(["environment"]));this.injector=t,n.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function ov(e,n,t=null){return new la({providers:e,parent:n,debugName:t,runEnvironmentInitializers:!0}).injector}var P0=(()=>{class e{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let r=bu(!1,t.type),i=r.length>0?ov([r],this._injector,""):null;this.cachedInjectors.set(t,i)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=K({token:e,providedIn:"environment",factory:()=>new e(T(ke))})}return e})();function Z(e){return da(()=>{let n=av(e),t=W(C({},n),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection!==jf.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(P0).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||nn.Emulated,styles:e.styles||et,_:null,schemas:e.schemas||null,tView:null,id:""});n.standalone&&Un("NgStandalone"),sv(t);let r=e.dependencies;return t.directiveDefs=gb(r,L0),t.pipeDefs=gb(r,Yh),t.id=B0(t),t})}function L0(e){return er(e)||Uo(e)}function H(e){return da(()=>({type:e.type,bootstrap:e.bootstrap||et,declarations:e.declarations||et,imports:e.imports||et,exports:e.exports||et,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function V0(e,n){if(e==null)return tr;let t={};for(let r in e)if(Object.hasOwn(e,r)){let i=e[r],o,a,s,l;Array.isArray(i)?(s=i[0],o=i[1],a=i[2]??o,l=i[3]||null):(o=i,a=i,s=fa.None,l=null),t[o]=[r,s,l],n[o]=a}return t}function j0(e){if(e==null)return tr;let n={};for(let t in e)Object.hasOwn(e,t)&&(n[e[t]]=t);return n}function N(e){return da(()=>{let n=av(e);return sv(n),n})}function bm(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone??!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function av(e){let n={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputConfig:e.inputs||tr,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||et,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:V0(e.inputs,n),outputs:j0(e.outputs),debugInfo:null}}function sv(e){e.features?.forEach(n=>n(e))}function gb(e,n){return e?()=>{let t=typeof e=="function"?e():e,r=[];for(let i of t){let o=n(i);o!==null&&r.push(o)}return r}:null}function B0(e){let n=0,t=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,t,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var lv=new g("");var ym=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r});appInits=f(lv,{optional:!0})??[];injector=f(P);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let i of this.appInits){let o=Ti(this.injector,i);if(ti(o))t.push(o);else if(gm(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});t.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(i=>{this.reject(i)}),t.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function vm(e){return n=>{n.controlDef={create:(t,r)=>{t?.\u0275ngControlCreate(r)},update:(t,r)=>{t?.\u0275ngControlUpdate?.(r)},passThroughInput:e}}}function _m(e){let n=t=>{let r=Array.isArray(e);t.hostDirectives===null?(t.resolveHostDirectives=H0,t.hostDirectives=r?e.map(Rf):[e]):r?t.hostDirectives.unshift(...e.map(Rf)):t.hostDirectives.unshift(e)};return n.ngInherit=!0,n}function H0(e){let n=[],t=!1,r=null,i=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.hostDirectives!==null){let s=n.length;r??=new Map,i??=new Map,cv(a,n,r,e),i.set(a,[s,n.length-1])}o===0&&Qt(a)&&(t=!0,n.push(a))}for(let o=t?1:0;o<e.length;o++)n.push(e[o]);return r!==null&&r.forEach((o,a)=>{U0(a.declaredInputs,o.inputs)}),[n,r,i]}function cv(e,n,t,r){if(e.hostDirectives!==null)for(let i of e.hostDirectives)if(typeof i=="function"){let o=i();for(let a of o)bb(Rf(a),n,t,r)}else bb(i,n,t,r)}function bb(e,n,t,r){let i=Uo(e.directive);if(cv(i,n,t,r),t.has(i)){let o=t.get(i);yb(o,e.inputs,"input"),yb(o,e.outputs,"output")}else r.includes(i)||(t.set(i,e),n.push(i))}function yb(e,n,t){let r=t==="input"?e.inputs:e.outputs;Object.keys(n).forEach(i=>{let o=n[i];(!Object.hasOwn(r,i)||r[i]===o)&&(r[i]=o)})}function Rf(e){return typeof e=="function"?{directive:Ue(e),inputs:{},outputs:{}}:{directive:Ue(e.directive),inputs:vb(e.inputs),outputs:vb(e.outputs)}}function vb(e){let n={};if(e!==void 0&&e.length>0)for(let t=0;t<e.length;t+=2)n[e[t]]=e[t+1];return n}function U0(e,n){for(let t in n)if(Object.hasOwn(n,t)){let r=n[t],i=e[t];e[r]=i}}function z0(e){return Object.getPrototypeOf(e.prototype).constructor}function he(e){let n=z0(e.type),t=!0,r=[e];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let i,o=Object.hasOwn(n,Bo)?n[Bo]:void 0,a=Object.hasOwn(n,Ho)?n[Ho]:void 0;if(Qt(e))i=o??a;else{if(o)throw new _(903,!1);i=a}if(i){if(t){r.push(i);let l=e;l.inputs=Qu(e.inputs),l.declaredInputs=Qu(e.declaredInputs),l.outputs=Qu(e.outputs);let c=i.hostBindings;c&&Y0(e,c);let d=i.viewQuery,u=i.contentQueries;if(d&&W0(e,d),u&&q0(e,u),$0(e,i),qh(e.outputs,i.outputs),Qt(i)&&i.data.animation){let p=e.data;p.animation=(p.animation||[]).concat(i.data.animation)}}let s=i.features;if(s)for(let l=0;l<s.length;l++){let c=s[l];c&&c.ngInherit&&c(e),c===he&&(t=!1)}}n=Object.getPrototypeOf(n)}G0(r)}function $0(e,n){for(let t in n.inputs){if(!Object.hasOwn(n.inputs,t)||Object.hasOwn(e.inputs,t))continue;let r=n.inputs[t];r!==void 0&&(e.inputs[t]=r,e.declaredInputs[t]=n.declaredInputs[t])}}function G0(e){let n=0,t=null;for(let r=e.length-1;r>=0;r--){let i=e[r];i.hostVars=n+=i.hostVars,i.hostAttrs=$i(i.hostAttrs,t=$i(t,i.hostAttrs))}}function Qu(e){return e===tr?{}:e===et?[]:e}function W0(e,n){let t=e.viewQuery;t?e.viewQuery=(r,i)=>{n(r,i),t(r,i)}:e.viewQuery=n}function q0(e,n){let t=e.contentQueries;t?e.contentQueries=(r,i,o)=>{n(r,i,o),t(r,i,o)}:e.contentQueries=n}function Y0(e,n){let t=e.hostBindings;t?e.hostBindings=(r,i)=>{n(r,i),t(r,i)}:e.hostBindings=n}function dv(e,n,t,r,i,o,a,s){if(t.firstCreatePass){e.mergedAttrs=$i(e.mergedAttrs,e.attrs);let d=e.tView=nm(2,e,i,o,a,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,e),d.queries=t.queries.embeddedTView(e))}s&&(e.flags|=s),Gr(e,!1);let l=Z0(t,n,e,r);pl()&&em(t,n,l,e),Gi(l,n);let c=Py(l,n,l,e);n[r+Se]=c,im(n,c),I0(c,e,n)}function X0(e,n,t,r,i,o,a,s,l,c,d){let u=t+Se,p;return n.firstCreatePass?(p=Jr(n,u,4,a||null,s||null),Tu()&&$y(n,e,p,Jt(n.consts,c),wy),Ab(n,p)):p=n.data[u],dv(p,e,n,t,r,i,o,l),Yo(p)&&om(n,e,p),c!=null&&Wl(e,p,d),p}function Zl(e,n,t,r,i,o,a,s,l,c,d){let u=t+Se,p;if(n.firstCreatePass){if(p=Jr(n,u,4,a||null,s||null),c!=null){let m=Jt(n.consts,c);p.localNames=[];for(let h=0;h<m.length;h+=2)p.localNames.push(m[h],-1)}}else p=n.data[u];return dv(p,e,n,t,r,i,o,l),c!=null&&Wl(e,p,d),p}function zt(e,n,t,r,i,o,a,s){let l=V(),c=ye(),d=Jt(c.consts,o);return X0(l,c,e,n,t,r,i,d,void 0,a,s),zt}function Kl(e,n,t,r,i,o,a,s){let l=V(),c=ye(),d=Jt(c.consts,o);return Zl(l,c,e,n,t,r,i,d,void 0,a,s),Kl}var Z0=K0;function K0(e,n,t,r){return hl(!0),n[Ee].createComment("")}var Cm=new g("");var Ql=new g("");function uv(){Td(e=>{let n="";throw new _(-600,n)})}var Q0=10;var Nt=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=f(Pn);afterRenderManager=f($l);zonelessEnabled=f(ta);rootEffectScheduler=f(bl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=f(Wr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(pe(t=>!t))}constructor(){f(on,{optional:!0})}whenStable(){let t;return new Promise(r=>{t=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{t.unsubscribe()})}_injector=f(ke);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,r){return this.bootstrapImpl(t,r)}bootstrapImpl(t,r,i=P.NULL){return this._injector.get(I).run(()=>{if(ce(ie.BootstrapComponentStart),!this._injector.get(ym).done){let D="";throw new _(405,D)}let s=er(t),l=this._injector.get(lr),c=new Wi(s,l);this.componentTypes.push(t);let{hostElement:d,directives:u,bindings:p}=J0(r),m=d||c.selector,h=c.create(i,[],m,l.injector,u,p),y=h.location.nativeElement,v=h.injector.get(Cm,null);return v?.registerApplication(y),h.onDestroy(()=>{this.detachView(h.hostView),ia(this.components,h),v?.unregisterApplication(y)}),this._loadComponent(h),ce(ie.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ce(ie.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(zl.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ce(ie.ChangeDetectionEnd),new _(101,!1);let t=k(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,k(t),this.afterTick.next(),ce(ie.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Fe,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<Q0;){ce(ie.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ce(ie.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!Zo(i))continue;let o=r&&!this.zonelessEnabled?0:1;Ry(i,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Zo(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){let r=t;ia(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(t),this._injector.get(Ql,[]).forEach(i=>i(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>ia(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new _(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function J0(e){return e===void 0||typeof e=="string"||e instanceof Element?{hostElement:e}:e}function ia(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function _e(e,n,t,r){let i=V(),o=Pi();if(Bn(i,o,n)){let a=ye(),s=Qo();gS(s,i,e,n,t,r)}return _e}function ge(e,n,t,r,i,o,a,s){Un("NgControlFlow");let l=V(),c=ye(),d=Jt(c.consts,o);return Zl(l,c,e,n,t,r,i,d,256,a,s),Dm}function Dm(e,n,t,r,i,o,a,s){return Un("NgControlFlow"),eI(e,n,t,r,i,o,a,s),Dm}function eI(e,n,t,r,i,o,a,s){let l=V(),c=ye(),d=Jt(c.consts,o);Zl(l,c,e,n,t,r,i,d,512,a,s)}function be(e,n){Un("NgControlFlow");let t=V(),r=Pi(),i=t[r]!==gt?t[r]:-1,o=i!==-1?_b(t,Se+i):void 0,a=0;if(Bn(t,r,e)){let s=k(null);try{if(o!==void 0&&LS(o,a),e!==-1){let l=Se+e,c=_b(t,l),d=tI(t[A],l),u=GS(c,d,t),p=lm(t,d,n,{dehydratedView:u});dm(c,p,a,Tl(d,u))}}finally{k(s)}}else if(o!==void 0){let s=PS(o,a);s!==void 0&&(s[qe]=n)}}function _b(e,n){return e[n]}function tI(e,n){return rl(e,n)}function bt(e,n,t){let r=V(),i=Pi();if(Bn(r,i,n)){let o=ye(),a=Qo();uS(a,r,e,n,r[Ee],t)}return bt}function kf(e,n,t,r,i){am(n,e,t,i?"class":"style",r)}function M(e,n,t,r){let i=V(),o=i[A],a=e+Se,s=o.firstCreatePass?Wy(a,i,2,n,wy,Tu(),t,r):o.data[a];if(Fn(s)){let l=i[hn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(By(c),()=>(Cb(e,n,i,s,r),M))}}return Cb(e,n,i,s,r),M}function Cb(e,n,t,r,i){if(Ey(r,t,e,n,fv),Yo(r)){let o=t[A];om(o,t,r),ey(o,r,t)}i!=null&&Wl(t,r)}function F(){let e=ye(),n=Ye(),t=Sy(n);return e.firstCreatePass&&qy(e,t),Ru(t)&&ku(),Nu(),t.classesWithoutHost!=null&&jw(t)&&kf(e,t,V(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&Bw(t)&&kf(e,t,V(),t.stylesWithoutHost,!1),F}function ze(e,n,t,r){return M(e,n,t,r),F(),ze}function Pe(e,n,t,r){let i=V(),o=i[A],a=e+Se,s=o.firstCreatePass?u0(a,o,2,n,t,r):o.data[a];return Ey(s,i,e,n,fv),r!=null&&Wl(i,s),Pe}function $e(){let e=Ye(),n=Sy(e);return Ru(n)&&ku(),Nu(),$e}function Ke(e,n,t,r){return Pe(e,n,t,r),$e(),Ke}var fv=(e,n,t,r,i)=>(hl(!0),sy(n[Ee],r,Hu()));function ma(){return V()}function an(e,n,t){let r=V(),i=Pi();if(Bn(r,i,n)){let o=ye(),a=Qo();Dy(a,r,e,n,r[Ee],t)}return an}var na=void 0;function nI(e){let n=Math.floor(Math.abs(e)),t=e.toString().replace(/^[^.]*\.?/,"").length;return n===1&&t===0?1:5}var rI=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],na,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],na,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",na,na,na],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",nI],Ju=Object.create(null);function Tt(e){let n=iI(e),t=Db(n);if(t)return t;let r=n.split("-")[0];if(t=Db(r),t)return t;if(r==="en")return rI;throw new _(701,!1)}function Db(e){if(!(e in Ju)){let n=pn.ng&&pn.ng.common&&pn.ng.common.locales&&pn.ng.common.locales[e];return n!==void 0&&(Ju[e]=n),n}return Ju[e]}var Le={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};function iI(e){return e.toLowerCase().replace(/_/g,"-")}var pa="en-US";var oI=pa;function mv(e){typeof e=="string"&&(oI=e.toLowerCase().replace(/_/g,"-"))}function Ae(e,n,t){let r=V(),i=ye(),o=Ye();return aI(i,r,r[Ee],o,e,n,t),Ae}function Jl(e,n,t){let r=V(),i=ye(),o=Ye();return(o.type&3||t)&&Uy(o,i,r,t,r[Ee],e,n,zi(o,r,n)),Jl}function aI(e,n,t,r,i,o,a){let s=!0,l=null;if((r.type&3||a)&&(l??=zi(r,n,o),Uy(r,e,n,a,t,i,o,l)&&(s=!1)),s){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let u=0;u<d.length;u+=2){let p=d[u],m=d[u+1];l??=zi(r,n,o),kl(r,n,p,m,i,l)}if(c&&c.length)for(let u of c)l??=zi(r,n,o),kl(r,n,u,i,i,l)}}function Ve(e=1){return Ng(e)}function sI(e,n){let t=null,r=OE(e);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){t=i;continue}if(r===null?uy(e,o,!0):LE(r,o))return i}return t}function Ge(e){let n=V()[st][Xe];if(!n.projection){let t=e?e.length:1,r=n.projection=eg(t,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=e?sI(o,e):0;a!==null&&(i[a]?i[a].projectionNext=o:r[a]=o,i[a]=o)}o=o.next}}}function ee(e,n=0,t,r,i,o){let a=V(),s=ye(),l=r?e+1:null;l!==null&&Zl(a,s,l,r,i,o,null,t);let c=Jr(s,Se+e,16,null,t||null);c.projection===null&&(c.projection=n),Pu();let u=!a[Ai]||Au();a[st][Xe].projection[c.projection]===null&&l!==null?lI(a,s,l):u&&!Bl(c)&&tS(s,a,c)}function lI(e,n,t){let r=Se+t,i=n.data[r],o=e[r],a=wf(o,i.tView.ssrId),s=lm(e,i,void 0,{dehydratedView:a});dm(o,s,0,Tl(i,a))}function cr(e,n,t,r){return ev(e,n,t,r),cr}function Dn(e,n,t){return Jy(e,n,t),Dn}function Ce(e){let n=V(),t=ye(),r=dl();Ko(r+1);let i=mm(t,r);if(e.dirty&&ug(n)===((i.metadata.flags&2)===2)){if(i.matches===null)e.reset([]);else{let o=nv(n,r);e.reset(o,zb),e.notifyOnChanges()}return!0}return!1}function De(){return fm(V(),dl())}function ec(e,n,t,r,i){return iv(n,ev(e,t,r,i)),ec}function tc(e,n,t,r){return iv(e,Jy(n,t,r)),tc}function nc(e=1){Ko(dl()+e)}function dr(e){let n=Lu();return il(n,Se+e)}function _l(e,n){return e<<17|n<<2}function Kr(e){return e>>17&32767}function cI(e){return(e&2)==2}function dI(e,n){return e&131071|n<<17}function Of(e){return e|2}function qi(e){return(e&131068)>>2}function ef(e,n){return e&-131069|n<<2}function uI(e){return(e&1)===1}function Ff(e){return e|1}function fI(e,n,t,r,i,o){let a=o?n.classBindings:n.styleBindings,s=Kr(a),l=qi(a);e[r]=t;let c=!1,d;if(Array.isArray(t)){let u=t;d=u[1],(d===null||Mi(u,d)>0)&&(c=!0)}else d=t;if(i)if(l!==0){let p=Kr(e[s+1]);e[r+1]=_l(p,s),p!==0&&(e[p+1]=ef(e[p+1],r)),e[s+1]=dI(e[s+1],r)}else e[r+1]=_l(s,0),s!==0&&(e[s+1]=ef(e[s+1],r)),s=r;else e[r+1]=_l(l,0),s===0?s=r:e[l+1]=ef(e[l+1],r),l=r;c&&(e[r+1]=Of(e[r+1])),xb(e,d,r,!0),xb(e,d,r,!1),mI(n,d,e,r,o),a=_l(s,l),o?n.classBindings=a:n.styleBindings=a}function mI(e,n,t,r,i){let o=i?e.residualClasses:e.residualStyles;o!=null&&typeof n=="string"&&Mi(o,n)>=0&&(t[r+1]=Ff(t[r+1]))}function xb(e,n,t,r){let i=e[t+1],o=n===null,a=r?Kr(i):qi(i),s=!1;for(;a!==0&&(s===!1||o);){let l=e[a],c=e[a+1];pI(l,n)&&(s=!0,e[a+1]=r?Ff(c):Of(c)),a=r?Kr(c):qi(c)}s&&(e[t+1]=r?Of(i):Ff(i))}function pI(e,n){return e===null||n==null||(Array.isArray(e)?e[1]:e)===n?!0:Array.isArray(e)&&typeof n=="string"?Mi(e,n)>=0:!1}var tn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function hI(e){return e.substring(tn.key,tn.keyEnd)}function gI(e){return bI(e),pv(e,hv(e,0,tn.textEnd))}function pv(e,n){let t=tn.textEnd;return t===n?-1:(n=tn.keyEnd=yI(e,tn.key=n,t),hv(e,n,t))}function bI(e){tn.key=0,tn.keyEnd=0,tn.value=0,tn.valueEnd=0,tn.textEnd=e.length}function hv(e,n,t){for(;n<t&&e.charCodeAt(n)<=32;)n++;return n}function yI(e,n,t){for(;n<t&&e.charCodeAt(n)>32;)n++;return n}function ur(e,n,t){return gv(e,n,t,!1),ur}function te(e,n){return gv(e,n,null,!0),te}function sn(e){_I(SI,vI,e,!0)}function vI(e,n){for(let t=gI(n);t>=0;t=pv(n,t))el(e,hI(n),!0)}function gv(e,n,t,r){let i=V(),o=ye(),a=ll(2);if(o.firstUpdatePass&&yv(o,e,a,r),n!==gt&&Bn(i,a,n)){let s=o.data[vn()];vv(o,s,i,i[Ee],e,i[a+1]=MI(n,t),r,a)}}function _I(e,n,t,r){let i=ye(),o=ll(2);i.firstUpdatePass&&yv(i,null,o,r);let a=V();if(t!==gt&&Bn(a,o,t)){let s=i.data[vn()];if(_v(s,r)&&!bv(i,o)){let l=r?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(t=Xs(l,t||"")),kf(i,s,a,t,r)}else II(i,s,a,a[Ee],a[o+1],a[o+1]=EI(e,n,t),r,o)}}function bv(e,n){return n>=e.expandoStartIndex}function yv(e,n,t,r){let i=e.data;if(i[t+1]===null){let o=i[vn()],a=bv(e,t);_v(o,r)&&n===null&&!a&&(n=!1),n=CI(i,o,n,r),fI(i,o,n,t,a,r)}}function CI(e,n,t,r){let i=Eg(e),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(t=tf(null,e,n,t,r),t=ca(t,n.attrs,r),o=null);else{let a=n.directiveStylingLast;if(a===-1||e[a]!==i)if(t=tf(i,e,n,t,r),o===null){let l=DI(e,n,r);l!==void 0&&Array.isArray(l)&&(l=tf(null,e,n,l[1],r),l=ca(l,n.attrs,r),xI(e,n,r,l))}else o=wI(e,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),t}function DI(e,n,t){let r=t?n.classBindings:n.styleBindings;if(qi(r)!==0)return e[Kr(r)]}function xI(e,n,t,r){let i=t?n.classBindings:n.styleBindings;e[Kr(i)]=r}function wI(e,n,t){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let a=e[o].hostAttrs;r=ca(r,a,t)}return ca(r,n.attrs,t)}function tf(e,n,t,r,i){let o=null,a=t.directiveEnd,s=t.directiveStylingLast;for(s===-1?s=t.directiveStart:s++;s<a&&(o=n[s],r=ca(r,o.hostAttrs,i),o!==e);)s++;return e!==null&&(t.directiveStylingLast=s),r}function ca(e,n,t){let r=t?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?i=a:i===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),el(e,a,t?!0:n[++o]))}return e===void 0?null:e}function EI(e,n,t){if(t==null||t==="")return et;let r=[],i=rn(t);if(Array.isArray(i))for(let o=0;o<i.length;o++)e(r,i[o],!0);else if(i instanceof Set)for(let o of i)e(r,o,!0);else if(typeof i=="object")for(let o in i)Object.hasOwn(i,o)&&e(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function SI(e,n,t){let r=String(n);r!==""&&!r.includes(" ")&&el(e,r,t)}function II(e,n,t,r,i,o,a,s){i===gt&&(i=et);let l=0,c=0,d=0<i.length?i[0]:null,u=0<o.length?o[0]:null;for(;d!==null||u!==null;){let p=l<i.length?i[l+1]:void 0,m=c<o.length?o[c+1]:void 0,h=null,y;d===u?(l+=2,c+=2,p!==m&&(h=u,y=m)):u===null||d!==null&&d<u?(l+=2,h=d):(c+=2,h=u,y=m),h!==null&&vv(e,n,t,r,h,y,a,s),d=l<i.length?i[l]:null,u=c<o.length?o[c]:null}}function vv(e,n,t,r,i,o,a,s){if(!(n.type&3))return;let l=e.data,c=l[s+1],d=uI(c)?wb(l,n,t,i,qi(c),a):void 0;if(!Vl(d)){Vl(o)||cI(c)&&(o=wb(l,null,t,i,s,a));let u=wu(vn(),t);rS(r,a,u,i,o)}}function wb(e,n,t,r,i,o){let a=n===null,s;for(;i>0;){let l=e[i],c=Array.isArray(l),d=c?l[1]:l,u=d===null,p=t[i+1];p===gt&&(p=u?et:void 0);let m=u?tl(p,r):d===r?p:void 0;if(c&&!Vl(m)&&(m=tl(l,r)),Vl(m)&&(s=m,a))return s;let h=e[i+1];i=a?Kr(h):qi(h)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=tl(l,r))}return s}function Vl(e){return e!==void 0}function MI(e,n){return e==null||e===""||(typeof n=="string"?e=rn(e)+n:typeof e=="object"&&(e=Ys(rn(e)))),e}function _v(e,n){return(e.flags&(n?8:16))!==0}function le(e,n=""){let t=V(),r=ye(),i=e+Se,o=r.firstCreatePass?Jr(r,i,1,n,null):r.data[i],a=NI(r,t,o,n);t[i]=a,pl()&&em(r,t,a,o),Gr(o,!1)}var NI=(e,n,t,r)=>(hl(!0),wE(n[Ee],r));function TI(e,n,t,r=""){return Bn(e,Pi(),t)?n+zo(t)+r:gt}function AI(e,n,t,r,i,o=""){let a=_g(),s=Hy(e,a,t,i);return ll(2),s?n+zo(t)+r+zo(i)+o:gt}function Xi(e){return xn("",e),Xi}function xn(e,n,t){let r=V(),i=TI(r,e,n,t);return i!==gt&&Cv(r,vn(),i),xn}function ha(e,n,t,r,i){let o=V(),a=AI(o,e,n,t,r,i);return a!==gt&&Cv(o,vn(),a),ha}function Cv(e,n,t){let r=wu(n,e);EE(e[Ee],r,t)}var Dv={};function rc(e){Un("NgLet");let n=ye(),t=V(),r=e+Se,i=Jr(n,r,128,null,null);return Gr(i,!1),Xo(n,t,r,Dv),rc}function xm(e){let n=ye(),t=V(),r=vn();return Xo(n,t,r,e),e}function ic(e){let n=Lu(),t=il(n,Se+e);if(t===Dv)throw new _(314,!1);return t}function Eb(e,n,t){let r=ye();r.firstCreatePass&&xv(n,r.data,r.blueprint,Qt(e),t)}function xv(e,n,t,r,i){if(e=Ue(e),Array.isArray(e))for(let o=0;o<e.length;o++)xv(e[o],n,t,r,i);else{let o=ye(),a=V(),s=Ye(),l=Fr(e)?e:Ue(e.provide),c=vu(e),d=s.providerIndexes&1048575,u=s.directiveStart,p=s.providerIndexes>>20;if(Fr(e)||!e.multi){let m=new Xr(c,i,se,null),h=rf(l,n,i?d:d+p,u);h===-1?(sf(Nl(s,a),o,l),nf(o,e,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),t.push(m),a.push(m)):(t[h]=m,a[h]=m)}else{let m=rf(l,n,d+p,u),h=rf(l,n,d,d+p),y=m>=0&&t[m],v=h>=0&&t[h];if(i&&!v||!i&&!y){sf(Nl(s,a),o,l);let D=OI(i?kI:RI,t.length,i,r,c,e);!i&&v&&(t[h].providerFactory=D),nf(o,e,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),t.push(D),a.push(D)}else{let D=wv(t[i?h:m],c,!i&&r);nf(o,e,m>-1?m:h,D)}!i&&r&&v&&t[h].componentProviders++}}}function nf(e,n,t,r){let i=Fr(n),o=ag(n);if(i||o){let l=(o?Ue(n.useClass):n).prototype.ngOnDestroy;if(l){let c=e.destroyHooks||(e.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(t);d===-1?c.push(t,[r,l]):c[d+1].push(r,l)}else c.push(t,l)}}}function wv(e,n,t){return t&&e.componentProviders++,e.multi.push(n)-1}function rf(e,n,t,r){for(let i=t;i<r;i++)if(n[i]===e)return i;return-1}function RI(e,n,t,r,i){return Pf(this.multi,[])}function kI(e,n,t,r,i){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=oa(r,r[A],this.providerFactory.index,i);a=l.slice(0,s),Pf(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Pf(o,a);return a}function Pf(e,n){for(let t=0;t<e.length;t++){let r=e[t];n.push(r())}return n}function OI(e,n,t,r,i,o){let a=new Xr(e,t,se,null);return a.multi=[],a.index=n,a.componentProviders=0,wv(a,i,r&&!t),a}function lt(e,n){return t=>{t.providersResolver=(r,i)=>Eb(r,i?i(e):e,!1),n&&(t.viewProvidersResolver=(r,i)=>Eb(r,i?i(n):n,!0))}}function FI(e,n){let t=e[n];return t===gt?void 0:t}function PI(e,n,t,r,i,o,a){let s=n+t;return Hy(e,s,i,o)?qS(e,s+2,a?r.call(a,i,o):r(i,o)):FI(e,s+2)}function wm(e,n){let t=ye(),r,i=e+Se;t.firstCreatePass?(r=LI(n,t.pipeRegistry),t.data[i]=r,r.onDestroy&&(t.destroyHooks??=[]).push(i,r.onDestroy)):r=t.data[i];let o=r.factory||(r.factory=Jn(r.type,!0)),a,s=ot(se);try{let l=Ml(!1),c=o();return Ml(l),Xo(t,V(),i,c),c}finally{ot(s)}}function LI(e,n){if(n)for(let t=n.length-1;t>=0;t--){let r=n[t];if(e===r.name)return r}}function Em(e,n,t,r){let i=e+Se,o=V(),a=il(o,i);return VI(o,i)?PI(o,vg(),n,a.transform,t,r,a):a.transform(t,r)}function VI(e,n){return e[A].data[n].pure}function ga(e,n){return ql(e,n)}var Ev=(()=>{class e{applicationErrorHandler=f(Pn);appRef=f(Nt);taskService=f(Wr);ngZone=f(I);zonelessEnabled=f(ta);tracing=f(on,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new oe;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Vo):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(f(qu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Og:Uu;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Vo+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function Sv(){return[{provide:mn,useExisting:Ev},{provide:I,useClass:jo},{provide:ta,useValue:!0}]}function jI(){return typeof $localize<"u"&&$localize.locale||pa}var ba=new g("",{factory:()=>f(ba,{optional:!0,skipSelf:!0})||jI()});var Am=new g("");function Te(e,n){return wo(e,n?.equal)}function Q(e){return hh(e)}var oc=class extends Error{dependency;constructor(n){super("Dependency error",{cause:n.error()}),this.name="ResourceDependencyError",this.dependency=n}},ni=class e extends Error{_brand;constructor(n){super(n)}static IDLE=new e("IDLE");static LOADING=new e("LOADING")},BI=e=>e;function fr(e,n){if(typeof e=="function"){let t=Fd(e,BI,n?.equal);return Iv(t,n?.debugName,n?.set)}else{let t=Fd(e.source,e.computation,e.equal);return Iv(t,e.debugName,e.set)}}function Iv(e,n,t){let r=e[Me],i=e;if(t!==void 0){let o=a=>Pd(r,a);i.set=a=>t(a,o),i.update=a=>t(a(Q(e)),o)}else i.set=o=>Pd(r,o),i.update=o=>ph(r,o);return i.asReadonly=Jo.bind(e),i}var Sm=class{value;isLoading;constructor(n,t){this.value=n,this.value.set=this.set.bind(this),this.value.update=this.update.bind(this),this.value.asReadonly=Jo,this.isLoading=Te(()=>this.status()==="loading"||this.status()==="reloading",void 0)}isError=Te(()=>this.status()==="error");update(n){this.set(n(Q(this.value)))}isValueDefined=Te(()=>this.isError()?!1:this.value()!==void 0);_snapshot;get snapshot(){return this._snapshot??=Te(()=>{let n=this.status();return n==="error"?{status:"error",error:this.error()}:{status:n,value:this.value()}})}hasValue(){return this.isValueDefined()}asReadonly(){return this}},ya=class extends Sm{loaderFn;equal;debugName;transferCacheKey;pendingTasks;state;extRequest;effectRef;pendingController;resolvePendingTask=void 0;destroyed=!1;unregisterOnDestroy;status;error;transferState;constructor(n,t,r,i,o,a,s,l){if(Tv())throw Av();super(Te(()=>{let d=this.state().stream?.();if(!d||this.state().status==="loading"&&this.error())return r;if(!Im(d))throw new ac(this.error());return d.value},{equal:i}),o),this.loaderFn=t,this.equal=i,this.debugName=o,this.transferCacheKey=s;let c=a.get(Am,void 0,{optional:!0})??{isActive:!1};this.transferState=a.get(Li,void 0,{optional:!0})??void 0,this.extRequest=fr(()=>{try{return Nm(!0),{request:n(HI),reload:0}}catch(d){return Tm(d),d===ni.IDLE?{status:"idle",reload:0}:d===ni.LOADING?{status:"loading",reload:0}:{error:d,reload:0}}finally{Nm(!1)}},void 0),this.state=fr({source:this.extRequest,computation:(d,u)=>{let{request:p,status:m,error:h}=d,y;if(h)m="resolved",y=J({error:va(h)},void 0);else if(!m)if(u)m=p===void 0?"idle":"loading",u.value.extRequest.request===p&&(y=u.value.stream);else{let v=this.transferState,D=this.transferCacheKey;c.isActive&&D&&v&&p!==void 0&&v.hasKey(D)&&(y=J({value:v.get(D,r)},void 0)),y||(y=l?.(d.request)),l=void 0,m=p===void 0?"idle":y?"resolved":"loading"}return{extRequest:d,status:m,previousStatus:u?Mv(u.value):"idle",stream:y}}}),this.effectRef=St(this.loadEffect.bind(this),{injector:a,manualCleanup:!0}),this.pendingTasks=a.get(ji),this.unregisterOnDestroy=a.get(We).onDestroy(()=>this.destroy()),this.status=Te(()=>Mv(this.state()),void 0),this.error=Te(()=>{let d=this.state().stream?.();return d&&!Im(d)?d.error:void 0},void 0)}set(n){if(this.destroyed)return;let t=Q(this.error),r=Q(this.state);if(!t){let i=Q(this.value);if(r.status==="local"&&(this.equal?this.equal(i,n):i===n))return}this.state.set({extRequest:r.extRequest,status:"local",previousStatus:"local",stream:J({value:n},void 0)}),this.abortInProgressLoad()}reload(){let{status:n}=Q(this.state);return n==="idle"||n==="loading"?!1:(this.extRequest.update(({request:t,reload:r})=>({request:t,reload:r+1})),!0)}destroy(){this.destroyed=!0,this.unregisterOnDestroy(),this.effectRef.destroy(),this.abortInProgressLoad(),this.state.set({extRequest:{request:void 0,reload:0},status:"idle",previousStatus:"idle",stream:void 0})}async loadEffect(){let n=this.extRequest(),{status:t,previousStatus:r}=Q(this.state);if(n.request===void 0)return;if(t!=="loading")return;this.abortInProgressLoad();let i=this.resolvePendingTask=this.pendingTasks.add(),{signal:o}=this.pendingController=new AbortController;try{let a=Q(()=>this.loaderFn({params:n.request,abortSignal:o,previous:{status:r}})),s=()=>o.aborted||Q(this.extRequest)!==n;if(pt(a)){if(s())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:a});let l=Q(a)}else{let l=await a;if(s())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:l});let c=l?Q(l):void 0}}catch(a){if(Tm(a),o.aborted||Q(this.extRequest)!==n)return;this.state.set({extRequest:n,status:"resolved",previousStatus:"error",stream:J({error:va(a)},void 0)})}finally{i?.(),i=void 0}}abortInProgressLoad(){Q(()=>this.pendingController?.abort()),this.pendingController=void 0,this.resolvePendingTask?.(),this.resolvePendingTask=void 0}};function Mv(e){switch(e.status){case"loading":return e.extRequest.reload===0?"loading":"reloading";case"resolved":return Im(e.stream())?"resolved":"error";default:return e.status}}function Im(e){return e.error===void 0}function va(e){return Gu(e)?e:new Mm(e)}var ac=class extends Error{constructor(n){super(n.message,{cause:n})}},Mm=class extends Error{constructor(n){super(String(n),{cause:n})}};function Rm(e){switch(e.status()){case"idle":throw ni.IDLE;case"error":throw new oc(e);case"loading":case"reloading":throw ni.LOADING}return e.value()}var HI={chain:Rm},Nv=!1;function Tv(){return Nv}function Nm(e){Nv=e}function Av(){return new _(992,!1)}function Tm(e){if(e instanceof _&&e.code===992)throw e}function Lv(e,n){let t=Object.create(Ib);t.value=e,t.transformFn=n?.transform;function r(){if(wn(t),t.value===jl){let i=null;throw new _(-950,i)}return t.value}return r[Me]=t,r}var lc=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Vf(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Rv(e,n){return Lv(e,n)}function rM(e){return Lv(jl,e)}var Pm=(Rv.required=rM,Rv);function kv(e,n){return pm(n)}function iM(e,n){return hm(n)}var Ca=(kv.required=iM,kv);function Ov(e,n){return pm(n)}function oM(e,n){return hm(n)}var Vv=(Ov.required=oM,Ov);var aM=1e4;var e$=aM-1e3;var ct=(()=>{class e{static __NG_ELEMENT_ID__=sM}return e})();function sM(e){return lM(Ye(),V(),(e&16)===16)}function lM(e,n,t){if(Fn(e)&&!t){let r=Bt(e.index,n);return new sr(r,r)}else if(e.type&175){let r=n[st];return new sr(r,n)}return null}var Om=new g(""),cM=new g("");function _a(e){return!e.moduleRef}function dM(e){let n=_a(e)?e.r3Injector:e.moduleRef.injector,t=n.get(I);return t.run(()=>{_a(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=n.get(Pn),i;if(t.runOutsideAngular(()=>{i=t.onError.subscribe({next:r})}),_a(e)){let o=()=>n.destroy(),a=e.platformInjector.get(Om);a.add(o),n.onDestroy(()=>{i.unsubscribe(),a.delete(o)})}else{let o=()=>e.moduleRef.destroy(),a=e.platformInjector.get(Om);a.add(o),e.moduleRef.onDestroy(()=>{ia(e.allPlatformModules,e.moduleRef),i.unsubscribe(),a.delete(o)})}return fM(r,t,()=>{let o=n.get(Wr),a=o.add(),s=n.get(ym);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(ba,pa);if(mv(l||pa),!n.get(cM,!0))return _a(e)?n.get(Nt):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(_a(e)){let d=n.get(Nt);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return uM?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{o.remove(a)})})})}var uM;function fM(e,n,t){try{let r=t();return ti(r)?r.catch(i=>{throw n.runOutsideAngular(()=>e(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>e(r)),r}}var sc=null;function mM(e=[],n){return P.create({name:n,providers:[{provide:Go,useValue:"platform"},{provide:Om,useValue:new Set([()=>sc=null])},...e]})}function pM(e=[]){if(sc)return sc;let n=mM(e);return sc=n,uv(),hM(n),n}function hM(e){let n=e.get(gl,null);Ti(e,()=>{n?.forEach(t=>t())})}function jv(e){let{rootComponent:n,appProviders:t,platformProviders:r,platformRef:i}=e;ce(ie.BootstrapApplicationStart);try{let o=i?.injector??pM(r),a=[Sv(),Lg,...t||[]],s=new la({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return dM({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{ce(ie.BootstrapApplicationEnd)}}function Ie(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Da(e,n=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):n}var km=Symbol("NOT_SET"),Bv=new Set,gM=W(C({},bi),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:km,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(e){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==km&&!hi(this))return this.signal;try{for(let i of this.cleanup??Bv)i()}finally{this.cleanup?.clear()}let n=[];e!==void 0&&n.push(e),n.push(this.registerCleanupFn);let t=En(this),r;try{r=this.userFn.apply(null,n)}finally{Xn(this,t)}return(this.value===km||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Fm=class extends aa{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,t,r,i,o,a=null,s){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(We),a),this.scheduler=i;for(let l of Zf){let c=t[l];if(c===void 0)continue;let d=Object.create(gM);d.sequence=this,d.phase=l,d.userFn=c,d.dirty=!0,d.signal=()=>(wn(d),d.value),d.signal[Me]=d,d.registerCleanupFn=u=>(d.cleanup??=new Set).add(u),this.nodes[l]=d,this.hooks[l]=u=>d.phaseFn(u)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let t of n.cleanup??Bv)t()}finally{Zn(n)}}};function Lm(e,n){let t=n?.injector??f(P),r=t.get(mn),i=t.get($l),o=t.get(on,null,{optional:!0});i.impl??=t.get(Kf);let a=e;typeof a=="function"&&(a={mixedReadWrite:e});let s=t.get(Vi,null,{optional:!0}),l=new Fm(i.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,r,t,o?.snapshot(null),void 0);return i.impl.register(l),l}function cc(e,n){let t=er(e),r=n.elementInjector||Ni(),o=new Wi(t).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings);return n.onError&&(o.hostView._lView[Oi]=n.onError),o}var Hv=null;function $t(){return Hv}function Vm(e){Hv??=e}var xa=class{},Zi=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:()=>f(Uv),providedIn:"platform"})}return e})();var Uv=(()=>{class e extends Zi{_location;_history;_doc=f(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return $t().getBaseHref(this._doc)}onPopState(t){let r=$t().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=$t().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function Gv(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function zv(e){let n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function mr(e){return e&&e[0]!=="?"?`?${e}`:e}var dc=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:()=>f(yM),providedIn:"root"})}return e})(),bM=new g(""),yM=(()=>{class e extends dc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??f(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return Gv(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+mr(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,o){let a=this.prepareExternalUrl(i+mr(o));this._platformLocation.pushState(t,r,a)}replaceState(t,r,i,o){let a=this.prepareExternalUrl(i+mr(o));this._platformLocation.replaceState(t,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(T(Zi),T(bM,8))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var uc=(()=>{class e{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=CM(zv($v(r))),this._locationStrategy.onPopState(i=>{let o={url:this.path(!0),pop:!0,state:i.state,type:i.type};i.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+mr(r))}normalize(t){return e.stripTrailingSlash(_M(this._basePath,$v(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+mr(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+mr(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=mr;static joinWithSlash=Gv;static stripTrailingSlash=zv;static \u0275fac=function(r){return new(r||e)(T(dc))};static \u0275prov=K({token:e,factory:()=>vM(),providedIn:"root"})}return e})();function vM(){return new uc(T(dc))}function _M(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function $v(e){return e.replace(/\/index\.html$/,"")}function CM(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var rt=(function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e})(rt||{}),fe=(function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e})(fe||{}),yt=(function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e})(yt||{}),$n={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function qv(e){return Tt(e)[Le.LocaleId]}function Yv(e,n,t){let r=Tt(e),i=[r[Le.DayPeriodsFormat],r[Le.DayPeriodsStandalone]],o=Gt(i,n);return Gt(o,t)}function Xv(e,n,t){let r=Tt(e),i=[r[Le.DaysFormat],r[Le.DaysStandalone]],o=Gt(i,n);return Gt(o,t)}function Zv(e,n,t){let r=Tt(e),i=[r[Le.MonthsFormat],r[Le.MonthsStandalone]],o=Gt(i,n);return Gt(o,t)}function Kv(e,n){let r=Tt(e)[Le.Eras];return Gt(r,n)}function wa(e,n){let t=Tt(e);return Gt(t[Le.DateFormat],n)}function Ea(e,n){let t=Tt(e);return Gt(t[Le.TimeFormat],n)}function Sa(e,n){let r=Tt(e)[Le.DateTimeFormat];return Gt(r,n)}function Ia(e,n){let t=Tt(e),r=t[Le.NumberSymbols][n];if(typeof r>"u"){if(n===$n.CurrencyDecimal)return t[Le.NumberSymbols][$n.Decimal];if(n===$n.CurrencyGroup)return t[Le.NumberSymbols][$n.Group]}return r}function Qv(e){if(!e[Le.ExtraData])throw new _(2303,!1)}function Jv(e){let n=Tt(e);return Qv(n),(n[Le.ExtraData][2]||[]).map(r=>typeof r=="string"?jm(r):[jm(r[0]),jm(r[1])])}function e_(e,n,t){let r=Tt(e);Qv(r);let i=[r[Le.ExtraData][0],r[Le.ExtraData][1]],o=Gt(i,n)||[];return Gt(o,t)||[]}function Gt(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new _(2304,!1)}function jm(e){let[n,t]=e.split(":");return{hours:+n,minutes:+t}}var xM=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,fc=Object.create(null),wM=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,EM=256;function t_(e,n,t,r){let i=FM(e);SM(n),n=zn(t,n)||n;let a=[],s;for(;n;)if(s=wM.exec(n),s){a=a.concat(s.slice(1));let d=a.pop();if(!d)break;n=d}else{a.push(n);break}let l=i.getTimezoneOffset();r&&(l=r_(r,l),i=OM(i,r));let c="";return a.forEach(d=>{let u=RM(d);c+=u?u(i,t,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function SM(e){if(e.length>EM)throw new _(2300,!1)}function bc(e,n,t){let r=new Date(0);return r.setFullYear(e,n,t),r.setHours(0,0,0),r}function zn(e,n){let t=qv(e);if(fc[t]??=Object.create(null),fc[t][n])return fc[t][n];let r="";switch(n){case"shortDate":r=wa(e,yt.Short);break;case"mediumDate":r=wa(e,yt.Medium);break;case"longDate":r=wa(e,yt.Long);break;case"fullDate":r=wa(e,yt.Full);break;case"shortTime":r=Ea(e,yt.Short);break;case"mediumTime":r=Ea(e,yt.Medium);break;case"longTime":r=Ea(e,yt.Long);break;case"fullTime":r=Ea(e,yt.Full);break;case"short":let i=zn(e,"shortTime"),o=zn(e,"shortDate");r=mc(Sa(e,yt.Short),[i,o]);break;case"medium":let a=zn(e,"mediumTime"),s=zn(e,"mediumDate");r=mc(Sa(e,yt.Medium),[a,s]);break;case"long":let l=zn(e,"longTime"),c=zn(e,"longDate");r=mc(Sa(e,yt.Long),[l,c]);break;case"full":let d=zn(e,"fullTime"),u=zn(e,"fullDate");r=mc(Sa(e,yt.Full),[d,u]);break}return r&&(fc[t][n]=r),r}function mc(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,r){return Object.hasOwn(n,r)?n[r]:t})),e}function ln(e,n,t="-",r,i){let o="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,o=t));let a=String(e);for(;a.length<n;)a="0"+a;return r&&(a=a.slice(a.length-n)),o+a}function IM(e,n){return ln(e,3).substring(0,n)}function je(e,n,t=0,r=!1,i=!1){return function(o,a){let s=MM(e,o);if((t>0||s>-t)&&(s+=t),e===3)s===0&&t===-12&&(s=12);else if(e===6)return IM(s,n);let l=Ia(a,$n.MinusSign);return ln(s,n,l,r,i)}}function MM(e,n){switch(e){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new _(2301,!1)}}function xe(e,n,t=rt.Format,r=!1){return function(i,o){return NM(i,o,e,n,t,r)}}function NM(e,n,t,r,i,o){switch(t){case 2:return Zv(n,i,r)[e.getMonth()];case 1:return Xv(n,i,r)[e.getDay()];case 0:let a=e.getHours(),s=e.getMinutes();if(o){let c=Jv(n),d=e_(n,i,r),u=c.findIndex(p=>{if(Array.isArray(p)){let[m,h]=p,y=a>=m.hours&&s>=m.minutes,v=a<h.hours||a===h.hours&&s<h.minutes;if(m.hours<h.hours){if(y&&v)return!0}else if(y||v)return!0}else if(p.hours===a&&p.minutes===s)return!0;return!1});if(u!==-1)return d[u]}return Yv(n,i,r)[a<12?0:1];case 3:return Kv(n,r)[e.getFullYear()<=0?0:1];default:let l=t;throw new _(2302,!1)}}function pc(e){return function(n,t,r){let i=-1*r,o=Ia(t,$n.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case 0:return(i>=0?"+":"")+ln(a,2,o)+ln(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+ln(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+ln(a,2,o)+":"+ln(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+ln(a,2,o)+":"+ln(Math.abs(i%60),2,o);default:throw new _(2310,!1)}}}var TM=0,gc=4;function AM(e){let n=bc(e,TM,1).getDay();return bc(e,0,1+(n<=gc?gc:gc+7)-n)}function n_(e){let n=e.getDay(),t=n===0?-3:gc-n;return bc(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Bm(e,n=!1){return function(t,r){let i;if(n){let o=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,a=t.getDate();i=1+Math.floor((a+o)/7)}else{let o=n_(t),a=AM(o.getFullYear()),s=o.getTime()-a.getTime();i=1+Math.round(s/6048e5)}return ln(i,e,Ia(r,$n.MinusSign))}}function hc(e,n=!1){return function(t,r){let o=n_(t).getFullYear();return ln(o,e,Ia(r,$n.MinusSign),n)}}var Hm=Object.create(null);function RM(e){if(Hm[e])return Hm[e];let n;switch(e){case"G":case"GG":case"GGG":n=xe(3,fe.Abbreviated);break;case"GGGG":n=xe(3,fe.Wide);break;case"GGGGG":n=xe(3,fe.Narrow);break;case"y":n=je(0,1,0,!1,!0);break;case"yy":n=je(0,2,0,!0,!0);break;case"yyy":n=je(0,3,0,!1,!0);break;case"yyyy":n=je(0,4,0,!1,!0);break;case"Y":n=hc(1);break;case"YY":n=hc(2,!0);break;case"YYY":n=hc(3);break;case"YYYY":n=hc(4);break;case"M":case"L":n=je(1,1,1);break;case"MM":case"LL":n=je(1,2,1);break;case"MMM":n=xe(2,fe.Abbreviated);break;case"MMMM":n=xe(2,fe.Wide);break;case"MMMMM":n=xe(2,fe.Narrow);break;case"LLL":n=xe(2,fe.Abbreviated,rt.Standalone);break;case"LLLL":n=xe(2,fe.Wide,rt.Standalone);break;case"LLLLL":n=xe(2,fe.Narrow,rt.Standalone);break;case"w":n=Bm(1);break;case"ww":n=Bm(2);break;case"W":n=Bm(1,!0);break;case"d":n=je(2,1);break;case"dd":n=je(2,2);break;case"c":case"cc":n=je(7,1);break;case"ccc":n=xe(1,fe.Abbreviated,rt.Standalone);break;case"cccc":n=xe(1,fe.Wide,rt.Standalone);break;case"ccccc":n=xe(1,fe.Narrow,rt.Standalone);break;case"cccccc":n=xe(1,fe.Short,rt.Standalone);break;case"E":case"EE":case"EEE":n=xe(1,fe.Abbreviated);break;case"EEEE":n=xe(1,fe.Wide);break;case"EEEEE":n=xe(1,fe.Narrow);break;case"EEEEEE":n=xe(1,fe.Short);break;case"a":case"aa":case"aaa":n=xe(0,fe.Abbreviated);break;case"aaaa":n=xe(0,fe.Wide);break;case"aaaaa":n=xe(0,fe.Narrow);break;case"b":case"bb":case"bbb":n=xe(0,fe.Abbreviated,rt.Standalone,!0);break;case"bbbb":n=xe(0,fe.Wide,rt.Standalone,!0);break;case"bbbbb":n=xe(0,fe.Narrow,rt.Standalone,!0);break;case"B":case"BB":case"BBB":n=xe(0,fe.Abbreviated,rt.Format,!0);break;case"BBBB":n=xe(0,fe.Wide,rt.Format,!0);break;case"BBBBB":n=xe(0,fe.Narrow,rt.Format,!0);break;case"h":n=je(3,1,-12);break;case"hh":n=je(3,2,-12);break;case"H":n=je(3,1);break;case"HH":n=je(3,2);break;case"m":n=je(4,1);break;case"mm":n=je(4,2);break;case"s":n=je(5,1);break;case"ss":n=je(5,2);break;case"S":n=je(6,1);break;case"SS":n=je(6,2);break;case"SSS":n=je(6,3);break;case"Z":case"ZZ":case"ZZZ":n=pc(0);break;case"ZZZZZ":n=pc(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=pc(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=pc(2);break;default:return null}return Hm[e]=n,n}function r_(e,n){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function kM(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function OM(e,n,t){let i=e.getTimezoneOffset(),o=r_(n,i);return kM(e,-1*(o-i))}function FM(e){if(Wv(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,o=1,a=1]=e.split("-").map(s=>+s);return bc(i,o-1,a)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let r;if(r=e.match(xM))return PM(r)}let n=new Date(e);if(!Wv(n))throw new _(2311,!1);return n}function PM(e){let n=new Date(0),t=0,r=0,i=e[8]?n.setUTCFullYear:n.setFullYear,o=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),r=Number(e[9]+e[11])),i.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));let a=Number(e[4]||0)-t,s=Number(e[5]||0)-r,l=Number(e[6]||0),c=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return o.call(n,a,s,l,c),n}function Wv(e){return e instanceof Date&&!isNaN(e.valueOf())}var Um=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=f(P);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(t,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||e)(se(Ut))};static \u0275dir=N({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[ht]})}return e})();function LM(e,n){return new _(2100,!1)}var VM="mediumDate",i_=new g(""),o_=new g(""),zm=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,r,i){this.locale=t,this.defaultTimezone=r,this.defaultOptions=i}transform(t,r,i,o){if(t==null||t===""||t!==t)return null;try{let a=r??this.defaultOptions?.dateFormat??VM,s=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return t_(t,a,o||this.locale,s)}catch(a){throw LM(e,a.message)}}static \u0275fac=function(r){return new(r||e)(se(ba,16),se(i_,24),se(o_,24))};static \u0275pipe=bm({name:"date",type:e,pure:!0})}return e})();function Ma(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[i,o]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()!==n)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]==='"'&&a[a.length-1]==='"'&&(a=a.slice(1,-1)),a}return null}var $m="browser";function a_(e){return e===$m}var Na=class{_doc;constructor(n){this._doc=n}manager},yc=(()=>{class e extends Na{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,i,o){return t.addEventListener(r,i,o),()=>this.removeEventListener(t,r,i,o)}removeEventListener(t,r,i,o){return t.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||e)(T(E))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),Cc=new g(""),Ym=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(a=>{a.manager=this});let i=t.filter(a=>!(a instanceof yc));this._plugins=i.slice().reverse();let o=t.find(a=>a instanceof yc);o&&this._plugins.push(o)}addEventListener(t,r,i,o){return this._findPluginFor(r).addEventListener(t,r,i,o)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new _(-5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(T(Cc),T(I))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),Gm="ng-app-id";function s_(e){for(let n of e)n.remove()}function l_(e,n){let t=n.createElement("style");return t.textContent=e,t}function UM(e,n,t,r){let i=e.head?.querySelectorAll(`style[${Gm}="${n}"],link[${Gm}="${n}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(Gm),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function qm(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Xm=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,i,o={}){this.doc=t,this.appId=r,this.nonce=i,UM(t,r,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,r){for(let i of t)this.addUsage(i,this.inline,l_);r?.forEach(i=>this.addUsage(i,this.external,qm))}removeStyles(t,r){for(let i of t)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,r,i){let o=r.get(t);o?o.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(t,this.doc)))})}removeUsage(t,r){let i=r.get(t);i&&(i.usage--,i.usage<=0&&(s_(i.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])s_(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(t,l_(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(t,qm(r,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let r of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of r.elements)o.parentNode===t?o.remove():i.push(o);r.elements=i}}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(T(E),T(or),T(ar,8),T(qr))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),Wm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Zm=/%COMP%/g;var d_="%COMP%",zM=`_nghost-${d_}`,$M=`_ngcontent-${d_}`,GM=!0,WM=new g("",{factory:()=>GM}),qM=new g("");function YM(e){return $M.replace(Zm,e)}function XM(e){return zM.replace(Zm,e)}function u_(e,n){return n.map(t=>t.replace(Zm,e))}var Km=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,r,i,o,a,s,l=null,c=null,d=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.cssVarNamespace=d??"",this.defaultRenderer=new Ta(t,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,r);return i instanceof _c?i.applyToHost(t):i instanceof Aa&&i.applyStyles(),i}getOrCreateRenderer(t,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,u=this.tracingService;switch(r.encapsulation){case nn.Emulated:o=new _c(l,c,r,this.appId,d,a,s,u,this.cssVarNamespace);break;case nn.ShadowDom:return new vc(l,t,r,a,s,this.nonce,u,this.cssVarNamespace,c);case nn.ExperimentalIsolatedShadowDom:return new vc(l,t,r,a,s,this.nonce,u,this.cssVarNamespace);default:o=new Aa(l,c,r,d,a,s,u,this.cssVarNamespace);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(T(Ym),T(ei),T(or),T(WM),T(E),T(I),T(ar),T(on,8),T(qM,8))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),Ta=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,i,o=""){this.eventManager=n,this.doc=t,this.ngZone=r,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Wm[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(c_(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){if(n){let i=c_(n)?n.content:n;if(r!=null&&r.parentNode!==i)throw new _(-5106,!1);i.insertBefore(t,r)}}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new _(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,i){if(i){t=i+":"+t;let o=Wm[i];o?n.setAttributeNS(o,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let i=Wm[r];i?n.removeAttributeNS(i,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,i){let o=t.startsWith("--");o&&(t=t.replace("%NS%",this.cssVarNamespace)),o||i&(Cn.DashCase|Cn.Important)?n.style.setProperty(t,r,i&Cn.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){let i=t.startsWith("--");i&&(t=t.replace("%NS%",this.cssVarNamespace)),i||r&Cn.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,i){if(typeof n=="string"&&(n=$t().getGlobalEventTarget(this.doc,n),!n))throw new _(-5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,t,o)),this.eventManager.addEventListener(n,t,o,i)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}};function c_(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var vc=class extends Ta{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,r,i,o,a,s,l,c){super(n,i,o,s,l),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=u_(r.id,d).map(p=>p.replace(/%NS%/g,l));for(let p of d){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=p,this.shadowRoot.appendChild(m)}let u=r.getExternalStyles?.();if(u)for(let p of u){let m=qm(p,i);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Aa=class extends Ta{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,i,o,a,s,l,c){super(n,o,a,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let d=r.styles,u=c?u_(c,d):d;this.styles=u.map(p=>p.replace(/%NS%/g,l)),this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Xf.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},_c=class extends Aa{contentAttr;hostAttr;constructor(n,t,r,i,o,a,s,l,c){let d=i+"-"+r.id;super(n,t,r,o,a,s,l,c,d),this.contentAttr=YM(d),this.hostAttr=XM(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}};var Dc=class e extends xa{supportsDOMEvents=!0;static makeCurrent(){Vm(new e)}onAndCancel(n,t,r,i){return n.addEventListener(t,r,i),()=>{n.removeEventListener(t,r,i)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=ZM();return t==null?null:KM(t)}resetBaseElement(){Ra=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Ma(document.cookie,n)}},Ra=null;function ZM(){return Ra=Ra||document.head.querySelector("base"),Ra?Ra.getAttribute("href"):null}function KM(e){return new URL(e,document.baseURI).pathname}var f_=["alt","control","meta","shift"],QM={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},JM={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},m_=(()=>{class e extends Na{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,i,o){let a=e.parseEventName(r),s=e.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>$t().onAndCancel(t,a.domEventName,s,o))}static parseEventName(t){let r=t.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",s=r.indexOf("code");if(s>-1&&(r.splice(s,1),a="code."),f_.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),a+=c+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(t,r){let i=QM[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(i=t.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),f_.forEach(a=>{if(a!==i){let s=JM[a];s(t)&&(o+=a+".")}}),o+=i,o===r)}static eventCallback(t,r,i){return o=>{e.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(T(E))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();async function Qm(e,n,t){let r=C({rootComponent:e},eN(n,t));return jv(r)}function eN(e,n){return{platformRef:n?.platformRef,appProviders:[...oN,...e?.providers??[]],platformProviders:iN}}function tN(){Dc.makeCurrent()}function nN(){return new at}function rN(){return Bf(document),document}var iN=[{provide:qr,useValue:$m},{provide:gl,useValue:tN,multi:!0},{provide:E,useFactory:rN}];var oN=[{provide:Go,useValue:"root"},{provide:at,useFactory:nN},{provide:Cc,useClass:yc,multi:!0},{provide:Cc,useClass:m_,multi:!0},Km,{provide:ei,useClass:Xm},{provide:Xm,useExisting:ei},Ym,{provide:Fe,useExisting:Km},[]];var Wt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let i=t.slice(0,r),o=t.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[t,r]of n.headers.entries())this.headers.set(t,r),this.normalizedNames.set(t,n.normalizedNames.get(t))}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let i=n.op==="a"?(this.headers.get(t)||[]).slice():[];i.push(...r),this.headers.set(t,i);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(t);if(!s)return;s=s.filter(l=>a.indexOf(l)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var wc=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Ec=class{encodeKey(n){return p_(n)}encodeValue(n){return p_(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function aN(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=t.get(a)||[];l.push(s),t.set(a,l)}),t}var sN=/[&+#]/g;function p_(e){return encodeURI(e).replace(sN,encodeURIComponent)}function xc(e){return`${e}`}var cn=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Ec,n.fromString){if(n.fromObject)throw new _(2805,!1);this.map=aN(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],i=Array.isArray(r)?r.map(xc):[xc(r)];this.map.set(t,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,t]of this.cloneFrom.map.entries())this.map.set(n,t);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=n.op==="a"?(this.map.get(n.param)||[]).slice():[];t.push(xc(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=(this.map.get(n.param)||[]).slice(),i=r.indexOf(xc(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function lN(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function h_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function g_(e){return typeof Blob<"u"&&e instanceof Blob}function b_(e){return typeof FormData<"u"&&e instanceof FormData}function cN(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var Jm="Content-Type",y_="Accept",C_="text/plain",D_="application/json",dN=`${D_}, ${C_}, */*`,ri=class e{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,t,r,i){this.url=t,this.method=n.toUpperCase();let o;if(lN(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new _(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Wt,this.context??=new wc,!this.params)this.params=new cn,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let s=t,l="",c=t.indexOf("#");c!==-1&&(l=t.substring(c),s=t.substring(0,c));let d=s.indexOf("?"),u=d===-1?"?":d<s.length-1?"&":"";this.urlWithParams=s+u+a+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||h_(this.body)||g_(this.body)||b_(this.body)||cN(this.body)?this.body:this.body instanceof cn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||b_(this.body)?null:g_(this.body)?this.body.type||null:h_(this.body)?null:typeof this.body=="string"?C_:this.body instanceof cn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?D_:null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,u=n.referrer??this.referrer,p=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,h=n.transferCache??this.transferCache,y=n.timeout??this.timeout,v=n.body!==void 0?n.body:this.body,D=n.withCredentials??this.withCredentials,R=n.reportProgress??this.reportProgress,it=n.reportUploadProgress??this.reportUploadProgress,Dt=n.reportDownloadProgress??this.reportDownloadProgress,dt=n.headers||this.headers,Be=n.params||this.params,Rt=n.context??this.context;return n.setHeaders!==void 0&&(dt=Object.keys(n.setHeaders).reduce((xt,ut)=>xt.set(ut,n.setHeaders[ut]),dt)),n.setParams&&(Be=Object.keys(n.setParams).reduce((xt,ut)=>xt.set(ut,n.setParams[ut]),Be)),new e(t,r,v,{params:Be,headers:dt,context:Rt,reportProgress:R,reportUploadProgress:it,reportDownloadProgress:Dt,responseType:i,withCredentials:D,transferCache:h,keepalive:o,cache:s,priority:a,timeout:y,mode:l,redirect:c,credentials:d,referrer:u,integrity:p,referrerPolicy:m})}},Gn=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(Gn||{}),Ki=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,r="OK"){this.headers=n.headers||new Wt,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Sc=class e extends Ki{constructor(n={}){super(n)}type=Gn.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Qi=class e extends Ki{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Gn.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},pr=class extends Ki{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},uN=200;var fN=/^\)\]\}',?\n/,r3=1024*1024,x_=new g("",{factory:()=>null}),Ic=(()=>{class e{fetchImpl=f(tp,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=f(I);destroyRef=f(We);maxResponseSize=f(x_);handle(t){return new z(r=>{let i=new AbortController,o=!1,a={next:l=>{l.type===Gn.Response&&(o=!0),r.next(l)},error:l=>{o=!0,r.error(l)},complete:()=>{o=!0,r.complete()}};this.doRequest(t,i.signal,a).then(np,l=>a.error(new pr({error:l})));let s;return t.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{s!==void 0&&clearTimeout(s),!o&&!i.signal.aborted&&i.abort()}})}async doRequest(t,r,i){let o=this.createRequestInit(t),a;try{let v=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,C({signal:r},o)));mN(v),i.next({type:Gn.Sent}),a=await v}catch(v){i.error(new pr({error:v,status:v.status??0,statusText:v.statusText,url:t.urlWithParams,headers:v.headers}));return}let s=new Wt(a.headers),l=a.statusText,c=a.url||t.urlWithParams,d=a.status,u=null,p=t.reportProgress||t.reportDownloadProgress;if(p&&i.next(new Sc({headers:s,status:d,statusText:l,url:c})),a.body){let v=a.headers.get(Jm)??"",D=a.headers.get("content-length"),R=D!==null?Number(D):NaN;this.maxResponseSize!==null&&Number.isFinite(R)&&R>this.maxResponseSize&&(await a.body.cancel(),v_(this.maxResponseSize));let it=[],Dt=a.body.getReader(),dt=0,Be,Rt,xt=typeof Zone<"u"&&Zone.current,ut=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await Dt.cancel(),ut=!0;break}let{done:Y,value:b}=await Dt.read();if(Y)break;if(it.push(b),dt+=b.length,this.maxResponseSize!==null&&dt>this.maxResponseSize&&(await Dt.cancel(),v_(this.maxResponseSize)),p){Rt=t.responseType==="text"?(Rt??"")+(Be??=__(v)).decode(b,{stream:!0}):void 0;let X=()=>i.next({type:Gn.DownloadProgress,total:Number.isFinite(R)?R:void 0,loaded:dt,partialText:Rt});xt?xt.run(X):X()}}}),ut){i.complete();return}let w=this.concatChunks(it,dt);try{u=this.parseBody(t,w,v,d)}catch(Y){i.error(new pr({error:Y,headers:new Wt(a.headers),status:a.status,statusText:a.statusText,url:a.url||t.urlWithParams}));return}}d===0&&(d=u?uN:0);let m=d>=200&&d<300,h=a.redirected,y=a.type;m?(i.next(new Qi({body:u,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:y})),i.complete()):i.error(new pr({error:u,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:y}))}parseBody(t,r,i,o){switch(t.responseType){case"json":let a=new TextDecoder().decode(r).replace(fN,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return __(i).decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new _(2824,!1);let r={},i;if(i=t.credentials,t.withCredentials&&(i="include"),t.headers.forEach((o,a)=>r[o]=a.join(",")),t.headers.has(y_)||(r[y_]=dN),!t.headers.has(Jm)){let o=t.detectContentTypeHeader();o!==null&&(r[Jm]=o)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:i,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,r){let i=new Uint8Array(r),o=0;for(let a of t)i.set(a,o),o+=a.length;return i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),tp=class{};function np(){}function mN(e){e.then(np,np)}function v_(e){throw new _(-2825,!1)}var pN=/charset=\s*["']?([^;"'\s]+)["']?/i;function __(e){let n=e.match(pN);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var hN=new g("",{factory:()=>!0}),gN="XSRF-TOKEN",bN=new g("",{factory:()=>gN}),yN="X-XSRF-TOKEN",vN=new g("",{factory:()=>yN}),_N=(()=>{class e{cookieName=f(bN);doc=f(E);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Ma(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),w_=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=T(_N),i},providedIn:"root"})}return e})();function E_(e,n){if(!f(hN)||e.method==="GET"||e.method==="HEAD")return n(e);try{let i=f(Zi).href,{origin:o}=new URL(i),{origin:a}=new URL(e.url,o);if(o!==a)return n(e)}catch{return n(e)}let t=f(w_).getToken(),r=f(vN);return t!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,t)})),n(e)}function CN(e,n){return n(e)}function DN(e,n,t){return(r,i)=>Ti(t,()=>n(r,o=>e(o,i)))}var S_=new g("",{factory:()=>[E_]}),I_=new g(""),M_=new g("",{factory:()=>!0});var rp=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=T(Ic),i},providedIn:"root"})}return e})();var Mc=(()=>{class e{backend;injector;chain=null;pendingTasks=f(ji);contributeToStability=f(M_);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let i=this.injector.get(Nc,null,{skipSelf:!0}),o=i!==null&&this.backend===i,a=this.injector.get(I_,[],o?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(S_),...a]));this.chain=s.reduceRight((l,c)=>DN(l,c,this.injector),CN)}let r=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return Q(()=>r(t,o=>this.backend.handle(o))).pipe(Ro(i))}else return Q(()=>r(t,i=>this.backend.handle(i)))}static \u0275fac=function(r){return new(r||e)(T(rp),T(ke))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Nc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=T(Mc),i},providedIn:"root"})}return e})();function ep(e,n){return C({body:n},e)}var ka=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,i={}){let o;if(t instanceof ri)o=t;else{let l;i.headers instanceof Wt?l=i.headers:l=new Wt(i.headers);let c;i.params&&(i.params instanceof cn?c=i.params:c=new cn({fromObject:i.params})),o=new ri(t,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=Je(o).pipe(Wd(l=>this.handler.handle(l)));if(t instanceof ri||i.observe==="events")return a;let s=a.pipe(Ne(l=>l instanceof Qi));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(pe(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new _(2806,!1);return l.body}));case"blob":return s.pipe(pe(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new _(2807,!1);return l.body}));case"text":return s.pipe(pe(l=>{if(l.body!==null&&typeof l.body!="string")throw new _(2808,!1);return l.body}));default:return s.pipe(pe(l=>l.body))}case"response":return s;default:throw new _(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new cn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,i={}){return this.request("PATCH",t,ep(i,r))}post(t,r,i={}){return this.request("POST",t,ep(i,r))}put(t,r,i={}){return this.request("PUT",t,ep(i,r))}static \u0275fac=function(r){return new(r||e)(T(Nc))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function ip(...e){let n=[ka,Ic,Mc,{provide:Nc,useExisting:Mc},{provide:rp,useFactory:()=>f(Ic)},{provide:S_,useValue:E_,multi:!0}];for(let t of e)n.push(...t.\u0275providers);return Rn(n)}var xN=new g(""),wN="b",EN="h",SN="s",IN="st",MN="u",NN="rt",TN=new g(""),AN=["GET","HEAD"];function RN(e,n){let{isCacheActive:t,filter:r,includePostRequests:i,includeRequestsWithAuthHeaders:o,includeRequestsWithCredentials:a,includeNonCacheableRequests:s}=n,{transferCache:l,method:c}=e;return!(!t||l===!1||c==="POST"&&!i&&!l||c!=="POST"&&!AN.includes(c)||!o&&ON(e)||!a&&VN(e)||!s&&(PN(e.headers)||LN(e.cache))||r?.(e)===!1)}function kN(e,n,t,r,i,o=!1){if(!o&&!RN(e,n))return null;if(r)throw new _(2803,!1);if(!i){let y=e.url;i=jN(e,y)}let a=t.get(i,null);if(!a)return null;let{[wN]:s,[NN]:l,[EN]:c,[SN]:d,[IN]:u,[MN]:p}=a,m=s;switch(l){case"arraybuffer":m=T_(s);break;case"blob":m=new Blob([T_(s)]);break}let h=new Wt(c);return new Qi({body:m,headers:h,status:d,statusText:u,url:p})}function ON(e){let n=e.headers;return n.has("authorization")||n.has("proxy-authorization")||n.has("cookie")}var FN=new Set(["no-store","private","no-cache"]);function PN(e){let n=e.get("cache-control");return n?n.split(",").some(t=>{let r=t.split("=",1)[0].trim().toLowerCase();return FN.has(r)}):!1}function LN(e){return e==="no-cache"||e==="no-store"}function VN(e){let{withCredentials:n,credentials:t}=e;return n||t==="include"||t==="same-origin"}function N_(e){let n=new URLSearchParams(e instanceof URLSearchParams?e:e.toString());return n.sort(),n.toString()}function jN(e,n){let{params:t,method:r,responseType:i}=e,o=N_(t),a=e.serializeBody();a instanceof URLSearchParams?a=N_(a):typeof a!="string"&&(a="");let s=[r,i,n,a,o].join("\0"),l=HN(s);return l}function T_(e){let n=atob(e);return Uint8Array.from(n,r=>r.charCodeAt(0)).buffer}var BN=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),A_;function HN(e){A_??=new TextEncoder;let n=A_.encode(e),t=1779033703,r=3144134277,i=1013904242,o=2773480762,a=1359893119,s=2600822924,l=528734635,c=1541459225,d=n.length*8,u=(n.length+8>>6)+1<<6,p=new Uint8Array(u);p.set(n),p[n.length]=128;let m=new DataView(p.buffer),h=d>>>0,y=d/4294967296>>>0;m.setUint32(u-8,y,!1),m.setUint32(u-4,h,!1);let v=new Uint32Array(64);for(let D=0;D<u;D+=64){for(let w=0;w<16;w++)v[w]=m.getUint32(D+w*4,!1);for(let w=16;w<64;w++){let Y=v[w-15],b=((Y>>>7|Y<<25)^(Y>>>18|Y<<14)^Y>>>3)>>>0,X=v[w-2],He=((X>>>17|X<<15)^(X>>>19|X<<13)^X>>>10)>>>0;v[w]=v[w-16]+b+v[w-7]+He>>>0}let R=t,it=r,Dt=i,dt=o,Be=a,Rt=s,xt=l,ut=c;for(let w=0;w<64;w++){let Y=((Be>>>6|Be<<26)^(Be>>>11|Be<<21)^(Be>>>25|Be<<7))>>>0,b=(Be&Rt^~Be&xt)>>>0,X=ut+Y+b+BN[w]+v[w]>>>0,He=((R>>>2|R<<30)^(R>>>13|R<<19)^(R>>>22|R<<10))>>>0,Sd=(R&it^R&Dt^it&Dt)>>>0,ox=He+Sd>>>0;ut=xt,xt=Rt,Rt=Be,Be=dt+X>>>0,dt=Dt,Dt=it,it=R,R=X+ox>>>0}t=t+R>>>0,r=r+it>>>0,i=i+Dt>>>0,o=o+dt>>>0,a=a+Be>>>0,s=s+Rt>>>0,l=l+xt>>>0,c=c+ut>>>0}return[t,r,i,o,a,s,l,c].map(D=>D.toString(16).padStart(8,"0")).join("")}var R_=(()=>{let e=Tc("json");return e.arrayBuffer=Tc("arraybuffer"),e.blob=Tc("blob"),e.text=Tc("text"),e})();function Tc(e){return function(t,r){let i=r?.injector??f(P),o=i.get(TN,null,{optional:!0}),a=i.get(Li,null,{optional:!0}),s=i.get(xN,null,{optional:!0}),l=c=>{if(o&&a&&c){let d=kN(c,o,a,s);if(d)try{let u=d.body,p=r?.parse?r.parse(u):u;return J({value:p})}catch{}}};return new op(i,c=>UN(c,t,e),r?.defaultValue,r?.debugName,r?.parse,r?.equal,l)}}function UN(e,n,t){let r=typeof n=="function"?n(e):n;if(r===void 0)return;typeof r=="string"&&(r={url:r});let i=r.headers instanceof Wt?r.headers:new Wt(r.headers),o=r.params instanceof cn?r.params:new cn({fromObject:r.params});return new ri(r.method??"GET",r.url,r.body??null,{headers:i,params:o,reportDownloadProgress:r.reportProgress,withCredentials:r.withCredentials,keepalive:r.keepalive,cache:r.cache,priority:r.priority,mode:r.mode,redirect:r.redirect,responseType:t,context:r.context,transferCache:r.transferCache,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}var op=class extends ya{client;_headers=fr({source:this.extRequest,computation:()=>{}});_progress=fr({source:this.extRequest,computation:()=>{}});_statusCode=fr({source:this.extRequest,computation:()=>{}});headers=Te(()=>this.status()==="resolved"||this.status()==="error"?this._headers():void 0);progress=this._progress.asReadonly();statusCode=this._statusCode.asReadonly();constructor(n,t,r,i,o,a,s){super(t,({params:l,abortSignal:c})=>{let d,u=!1,p=()=>{u=!0,d?.unsubscribe()};c.addEventListener("abort",p,{once:!0});let m=J({value:void 0}),h,y=new Promise(D=>h=D),v=D=>{m.set(D),h?.(m),h=void 0};return d=this.client.request(l).subscribe({next:D=>{switch(D.type){case Gn.Response:this._headers.set(D.headers),this._statusCode.set(D.status);try{v({value:o?o(D.body):D.body})}catch(R){v({error:va(R)})}break;case Gn.DownloadProgress:this._progress.set(D);break}},error:D=>{D instanceof pr&&(this._headers.set(D.headers),this._statusCode.set(D.status)),v({error:D}),c.removeEventListener("abort",p)},complete:()=>{h&&v({error:new _(-991,!1)}),c.removeEventListener("abort",p)}}),u&&d.unsubscribe(),y},r,a,i,n,void 0,s),this.client=n.get(ka)}set(n){super.set(n),this._headers.set(void 0),this._progress.set(void 0),this._statusCode.set(void 0)}};var k_=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(T(E))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Oa=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=T($N),i},providedIn:"root"})}return e})(),$N=(()=>{class e extends Oa{_doc=f(E);sanitize(t,r){if(r==null)return null;switch(t){case nt.NONE:return r;case nt.HTML:return Qr(r,"HTML")?rn(r):Wf(this._doc,String(r)).toString();case nt.STYLE:return Qr(r,"Style")?rn(r):r;case nt.SCRIPT:if(Qr(r,"Script"))return rn(r);throw new _(5200,!1);case nt.URL:return Qr(r,"URL")?rn(r):Ul(String(r));case nt.RESOURCE_URL:if(Qr(r,"ResourceURL"))return rn(r);throw new _(-5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(t){return Hf(t)}bypassSecurityTrustStyle(t){return Uf(t)}bypassSecurityTrustScript(t){return zf(t)}bypassSecurityTrustUrl(t){return $f(t)}bypassSecurityTrustResourceUrl(t){return Gf(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function ii(e){return e.buttons===0||e.detail===0}function oi(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var ap;function O_(){if(ap==null){let e=typeof document<"u"?document.head:null;ap=!!(e&&(e.createShadowRoot||e.attachShadow))}return ap}function sp(e){if(O_()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Fa(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}function vt(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var lp;try{lp=typeof Intl<"u"&&Intl.v8BreakIterator}catch{lp=!1}var de=(()=>{class e{_platformId=f(qr);isBrowser=this._platformId?a_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||lp)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Pa;function F_(){if(Pa==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Pa=!0}))}finally{Pa=Pa||!1}return Pa}function Ji(e){return F_()?e:!!e.capture}function eo(e,n=0){return P_(e)?Number(e):arguments.length===2?n:0}function P_(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function At(e){return e instanceof L?e.nativeElement:e}var L_=new g("cdk-input-modality-detector-options"),V_={ignoreKeys:[18,17,224,91,16]},j_=650,cp={passive:!0,capture:!0},B_=(()=>{class e{_platform=f(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Nr(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=vt(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<j_||(this._modality.next(ii(t)?"keyboard":"mouse"),this._mostRecentTarget=vt(t))};_onTouchstart=t=>{if(oi(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=vt(t)};constructor(){let t=f(I),r=f(E),i=f(L_,{optional:!0});if(this._options=C(C({},V_),i),this.modalityDetected=this._modality.pipe(Oo(1)),this.modalityChanged=this.modalityDetected.pipe(Vs()),this._platform.isBrowser){let o=f(Fe).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,cp),o.listen(r,"mousedown",this._onMousedown,cp),o.listen(r,"touchstart",this._onTouchstart,cp)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),La=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(La||{}),H_=new g("cdk-focus-monitor-default-options"),Ac=Ji({passive:!0,capture:!0}),hr=(()=>{class e{_ngZone=f(I);_platform=f(de);_inputModalityDetector=f(B_);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=f(E);_stopInputModalityDetector=new x;constructor(){let t=f(H_,{optional:!0});this._detectionMode=t?.detectionMode||La.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=vt(t);for(let i=r;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,r=!1){let i=At(t);if(!this._platform.isBrowser||i.nodeType!==1)return Je();let o=sp(i)||this._document,a=this._elementInfo.get(i);if(a)return r&&(a.checkChildren=!0),a.subject;let s={checkChildren:r,subject:new x,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let r=At(t),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(t,r,i){let o=At(t),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===La.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===La.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?j_:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,r){let i=this._elementInfo.get(r),o=vt(t);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(t,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ac),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ac)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ft(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ac),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ac),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,i){this._setClasses(t,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Rc=new WeakMap,_t=(()=>{class e{_appRef;_injector=f(P);_environmentInjector=f(ke);load(t){let r=this._appRef=this._appRef||this._injector.get(Nt),i=Rc.get(r);i||(i={loaders:new Set,refs:[]},Rc.set(r,i),r.onDestroy(()=>{Rc.get(r)?.refs.forEach(o=>o.destroy()),Rc.delete(r)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(cc(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var U_=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return e})(),kc;function WN(){if(kc===void 0&&(kc=null,typeof window<"u")){let e=window;if(e.trustedTypes!==void 0)try{kc=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return kc}function to(e){return WN()?.createHTML(e)||e}function no(e){return Array.isArray(e)?e:[e]}var z_=new Set,ai,Oc=(()=>{class e{_platform=f(de);_nonce=f(ar,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):YN}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&qN(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function qN(e,n){if(!z_.has(e))try{ai||(ai=document.createElement("style"),n&&ai.setAttribute("nonce",n),ai.setAttribute("type","text/css"),document.head.appendChild(ai)),ai.sheet&&(ai.sheet.insertRule(`@media ${e.replace(/[{}]/g,"")} {body{ }}`,0),z_.add(e))}catch(t){console.error(t)}}function YN(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var dp=(()=>{class e{_mediaMatcher=f(Oc);_zone=f(I);_queries=new Map;_destroySubject=new x;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return $_(no(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=$_(no(t)).map(a=>this._registerQuery(a).observable),o=Gd(i);return o=wi(o.pipe(wt(1)),o.pipe(Oo(1),Ao(0))),o.pipe(pe(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let r=this._mediaMatcher.matchMedia(t),o={observable:new z(a=>{let s=l=>this._zone.run(()=>a.next(l));return r.addListener(s),()=>{r.removeListener(s)}}).pipe(mt(r),pe(({matches:a})=>({query:t,matches:a})),Ft(this._destroySubject)),mql:r};return this._queries.set(t,o),o}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function $_(e){return e.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var XN=(()=>{class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Fc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[XN]})}return e})();var mp=(()=>{class e{_platform=f(de);isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return KN(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let r=ZN(oT(t));if(r&&(G_(r)===-1||!this.isVisible(r)))return!1;let i=t.nodeName.toLowerCase(),o=G_(t);return t.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!rT(t)?!1:i==="audio"?t.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,r){return iT(t)&&!this.isDisabled(t)&&(r?.ignoreInert||!t.closest?.("[inert]"))&&(r?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function ZN(e){try{return e.frameElement}catch{return null}}function KN(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects=="function"&&e.getClientRects().length)}function QN(e){let n=e.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function JN(e){return tT(e)&&e.type=="hidden"}function eT(e){return nT(e)&&e.hasAttribute("href")}function tT(e){return e.nodeName.toLowerCase()=="input"}function nT(e){return e.nodeName.toLowerCase()=="a"}function Y_(e){if(!e.hasAttribute("tabindex")||e.tabIndex===void 0)return!1;let n=e.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function G_(e){if(!Y_(e))return null;let n=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function rT(e){let n=e.nodeName.toLowerCase(),t=n==="input"&&e.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function iT(e){return JN(e)?!1:QN(e)||eT(e)||e.hasAttribute("contenteditable")||Y_(e)}function oT(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var fp=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,r,i,o=!1,a){this._element=n,this._checker=t,this._ngZone=r,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let r=this._getFirstTabbableElement(t);return r?.focus(n),!!r}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let r=0;r<t.length;r++){let i=t[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let r=t.length-1;r>=0;r--){let i=t[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Ht(n,{injector:this._injector})}},X_=(()=>{class e{_checker=f(mp);_ngZone=f(I);_document=f(E);_injector=f(P);constructor(){f(_t).load(U_)}create(t,r=!1){return new fp(t,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var si=(function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e})(si||{}),W_="cdk-high-contrast-black-on-white",q_="cdk-high-contrast-white-on-black",up="cdk-high-contrast-active",aT=(()=>{class e{_platform=f(de);_hasCheckedHighContrastMode=!1;_document=f(E);_breakpointSubscription;constructor(){this._breakpointSubscription=f(dp).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return si.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let r=this._document.defaultView||window,i=r&&r.getComputedStyle?r.getComputedStyle(t):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return si.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return si.BLACK_ON_WHITE}return si.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(up,W_,q_),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===si.BLACK_ON_WHITE?t.add(up,W_):r===si.WHITE_ON_BLACK&&t.add(up,q_)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Z_=(()=>{class e{constructor(){f(aT)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Fc]})}return e})();var sT=200,Pc=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(n,t){let r=typeof t?.debounceInterval=="number"?t.debounceInterval:sT;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Rr(t=>this._pressedLetters.push(t)),Ao(n),Ne(()=>this._pressedLetters.length>0),pe(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function gr(e,...n){return n.length?n.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var Lc=class{_items;_activeItemIndex=J(-1);_activeItem=J(null);_wrap=!1;_typeaheadSubscription=oe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof Vn?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):pt(n)&&(this._effectRef=St(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new x;change=new x;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Pc(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||gr(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),r=typeof n=="number"?n:t.indexOf(n),i=t[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let r=1;r<=t.length;r++){let i=(this._activeItemIndex()+n*r+t.length)%t.length,o=t[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=t,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return pt(this._items)?this._items():this._items instanceof Vn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let r=n.indexOf(t);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Va=class extends Lc{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var J_=new Map,Qe=class e{_appId=f(or);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!=="ng"&&(n+=this._appId);let r=J_.get(n);return r===void 0?r=0:r++,J_.set(n,r),`${n}${t?e._infix+"-":""}${r}`}static \u0275fac=function(t){return new(t||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})};var dn=(function(e){return e[e.NORMAL=0]="NORMAL",e[e.NEGATED=1]="NEGATED",e[e.INVERTED=2]="INVERTED",e})(dn||{}),Vc,li;function jc(){if(li==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return li=!1,li;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)li=!0;else{let e=Element.prototype.scrollTo;e?li=!/\{\s*\[native code\]\s*\}/.test(e.toString()):li=!1}}return li}function ro(){if(typeof document!="object"||!document)return dn.NORMAL;if(Vc==null){let e=document.createElement("div"),n=e.style;e.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let t=document.createElement("div"),r=t.style;r.width="2px",r.height="1px",e.appendChild(t),document.body.appendChild(e),Vc=dn.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,Vc=e.scrollLeft===0?dn.NEGATED:dn.INVERTED),e.remove()}return Vc}function gp(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var io,eC=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function bp(){if(io)return io;if(typeof document!="object"||!document)return io=new Set(eC),io;let e=document.createElement("input");return io=new Set(eC.filter(n=>(e.setAttribute("type",n),e.type===n))),io}var lT=new g("MATERIAL_ANIMATIONS"),tC=null;function yp(){return f(lT,{optional:!0})?.animationsDisabled||f(ea,{optional:!0})==="NoopAnimations"?"di-disabled":(tC??=f(Oc).matchMedia("(prefers-reduced-motion)").matches,tC?"reduced-motion":"enabled")}function Ct(){return yp()!=="enabled"}function Re(e){return e==null?"":typeof e=="string"?e:`${e}px`}function oo(e){return e!=null&&`${e}`!="false"}var qt=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(qt||{}),vp=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=qt.HIDDEN;constructor(n,t,r,i=!1){this._renderer=n,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},nC=Ji({passive:!0,capture:!0}),_p=class{_events=new Map;addHandler(n,t,r,i){let o=this._events.get(t);if(o){let a=o.get(r);a?a.add(i):o.set(r,new Set([i]))}else this._events.set(t,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,nC)})}removeHandler(n,t,r){let i=this._events.get(n);if(!i)return;let o=i.get(t);o&&(o.delete(r),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,nC)))}_delegateEventHandler=n=>{let t=vt(n);t&&this._events.get(n.type)?.forEach((r,i)=>{(i===t||i.contains(t))&&r.forEach(o=>o.handleEvent(n))})}},ja={enterDuration:225,exitDuration:150},cT=800,rC=Ji({passive:!0,capture:!0}),iC=["mousedown","touchstart"],oC=["mouseup","mouseleave","touchend","touchcancel"],dT=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return e})(),Ba=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new _p;constructor(n,t,r,i,o){this._target=n,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=At(r)),o&&o.get(_t).load(dT)}fadeInRipple(n,t,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},ja),r.animation);r.centered&&(n=i.left+i.width/2,t=i.top+i.height/2);let a=r.radius||uT(n,t,i),s=n-i.left,l=t-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let u=window.getComputedStyle(d),p=u.transitionProperty,m=u.transitionDuration,h=p==="none"||m==="0s"||m==="0s, 0s"||i.width===0&&i.height===0,y=new vp(this,d,r,h);d.style.transform="scale3d(1, 1, 1)",y.state=qt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=y);let v=null;return!h&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let D=()=>{v&&(v.fallbackTimer=null),clearTimeout(it),this._finishRippleTransition(y)},R=()=>this._destroyRipple(y),it=setTimeout(R,c+100);d.addEventListener("transitionend",D),d.addEventListener("transitioncancel",R),v={onTransitionEnd:D,onTransitionCancel:R,fallbackTimer:it}}),this._activeRipples.set(y,v),(h||!c)&&this._finishRippleTransition(y),y}fadeOutRipple(n){if(n.state===qt.FADING_OUT||n.state===qt.HIDDEN)return;let t=n.element,r=C(C({},ja),n.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",n.state=qt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=At(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,iC.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{oC.forEach(t=>{this._triggerElement.addEventListener(t,this,rC)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===qt.FADING_IN?this._startFadeOutTransition(n):n.state===qt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=qt.VISIBLE,!r&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=qt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=ii(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+cT;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!oi(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===qt.VISIBLE||n.config.terminateOnPointerUp&&n.state===qt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(iC.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(oC.forEach(t=>n.removeEventListener(t,this,rC)),this._pointerUpEventsRegistered=!1))}};function uT(e,n,t){let r=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),i=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(r*r+i*i)}var Cp=new g("mat-ripple-global-options"),aC=(()=>{class e{_elementRef=f(L);_animationsDisabled=Ct();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=f(I),r=f(de),i=f(Cp,{optional:!0}),o=f(P);this._globalOptions=i||{},this._rippleRenderer=new Ba(this,t,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,r=0,i){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,r,C(C({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),t))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&te("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var fT={capture:!0},mT=["focus","mousedown","mouseenter","touchstart"],Dp="mat-ripple-loader-uninitialized",xp="mat-ripple-loader-class-name",sC="mat-ripple-loader-centered",Bc="mat-ripple-loader-disabled",lC=(()=>{class e{_document=f(E);_animationsDisabled=Ct();_globalRippleOptions=f(Cp,{optional:!0});_platform=f(de);_ngZone=f(I);_injector=f(P);_eventCleanups;_hosts=new Map;constructor(){let t=f(Fe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>mT.map(r=>t.listen(this._document,r,this._onInteraction,fT)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(Dp,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(xp))&&t.setAttribute(xp,r.className||""),r.centered&&t.setAttribute(sC,""),r.disabled&&t.setAttribute(Bc,"")}setDisabled(t,r){let i=this._hosts.get(t);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):r?t.setAttribute(Bc,""):t.removeAttribute(Bc)}_onInteraction=t=>{let r=vt(t);if(r instanceof HTMLElement){let i=r.closest(`[${Dp}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(xp)),t.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??ja.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??ja.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute(Bc),rippleConfig:{centered:t.hasAttribute(sC),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Ba(s,this._ngZone,r,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:l,hasSetUpEvents:c}),t.removeAttribute(Dp)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Hc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return e})();var pT=new g("MAT_BUTTON_CONFIG");function cC(e){return e==null?void 0:Da(e)}var wp=(()=>{class e{_elementRef=f(L);_ngZone=f(I);_animationsDisabled=Ct();_config=f(pT,{optional:!0});_focusMonitor=f(hr);_cleanupClick;_renderer=f(ve);_rippleLoader=f(lC);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=Pm(!1,{transform:Ie});constructor(){f(_t).load(Hc);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,i){r&2&&(_e("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),sn(i.color?"mat-"+i.color:""),te("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ie],disabled:[2,"disabled","disabled",Ie],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie],tabIndex:[2,"tabIndex","tabIndex",cC],_tabindex:[2,"tabindex","_tabindex",cC],showProgress:[1,"showProgress"]}})}return e})(),Ep=(()=>{class e extends wp{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["*",[["","progressIndicator",""]]],r=["*","[progressIndicator]"];function i(o,a){o&1&&(Pe(0,"div",1),ee(1,1),$e())}return Z({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[he],ngContentSelectors:r,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,s){a&1&&(Ge(t),Ke(0,"span",0),ee(1),ge(2,i,2,0,"div",1),Ke(3,"span",2)(4,"span",3)),a&2&&(j(2),be(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return e})();var hT=new g("cdk-dir-doc",{providedIn:"root",factory:()=>f(E)}),gT=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function dC(e){let n=e?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?gT.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Yt=(()=>{class e{get value(){return this.valueSignal()}valueSignal=J("ltr");change=new ae;constructor(){let t=f(hT,{optional:!0});if(t){let r=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(dC(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var we=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();var Uc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[we]})}return e})();var uC=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),zc=(()=>{class e extends wp{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=bT(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?uC.get(this._appearance):null,o=uC.get(t);i&&r.remove(...i),r.add(...o),this._appearance=t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],r=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function i(o,a){o&1&&(Pe(0,"div",2),ee(1,3),$e())}return Z({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[he],ngContentSelectors:r,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,s){a&1&&(Ge(t),Ke(0,"span",0),ee(1),Pe(2,"span",1),ee(3,1),$e(),ee(4,2),ge(5,i,2,0,"div",2),Ke(6,"span",3)(7,"span",4)),a&2&&(te("mdc-button__ripple",!s._isFab)("mdc-fab__ripple",s._isFab),j(5),be(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})})()}return e})();function bT(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var $c=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Uc,we]})}return e})();var yT=20,Ha=(()=>{class e{_ngZone=f(I);_platform=f(de);_renderer=f(Fe).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let r=this.scrollContainers.get(t);r&&(r.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=yT){return this._platform.isBrowser?new z(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(Ps(t)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Je()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(t,r){let i=this.getAncestorScrollContainers(t);return this.scrolled(r).pipe(Ne(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(t){let r=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,t)&&r.push(o)}),r}_targetContainsElement(t,r){let i=At(r),o=t.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),mC=(()=>{class e{elementRef=f(L);scrollDispatcher=f(Ha);ngZone=f(I);dir=f(Yt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=f(ve);_cleanupScroll;_elementScrolled=new x;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=i?t.end:t.start),t.right==null&&(t.right=i?t.start:t.end),t.bottom!=null&&(t.top=r.scrollHeight-r.clientHeight-t.bottom),i&&ro()!=dn.NORMAL?(t.left!=null&&(t.right=r.scrollWidth-r.clientWidth-t.left),ro()==dn.INVERTED?t.left=t.right:ro()==dn.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=r.scrollWidth-r.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let r=this.elementRef.nativeElement;jc()?r.scrollTo(t):(t.top!=null&&(r.scrollTop=t.top),t.left!=null&&(r.scrollLeft=t.left))}measureScrollOffset(t){let r="left",i="right",o=this.elementRef.nativeElement;if(t=="top")return o.scrollTop;if(t=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return t=="start"?t=a?i:r:t=="end"&&(t=a?r:i),a&&ro()==dn.INVERTED?t==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&ro()==dn.NEGATED?t==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return e})(),vT=20,ao=(()=>{class e{_platform=f(de);_listeners;_viewportSize=null;_change=new x;_document=f(E);constructor(){let t=f(I),r=f(Fe).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,r=this._getWindow(),i=t.documentElement,o=i.getBoundingClientRect(),a=-o.top||t.body?.scrollTop||r.scrollY||i.scrollTop||0,s=-o.left||t.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:a,left:s}}change(t=vT){return t>0?this._change.pipe(Ps(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Gc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})(),Sp=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[we,Gc,we,Gc]})}return e})();var Ua=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},so=class extends Ua{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,t,r,i,o,a){super(),this.component=n,this.viewContainerRef=t,this.injector=r,this.projectableNodes=i,this.bindings=o||null,this.directives=a||null}},br=class extends Ua{templateRef;viewContainerRef;context;injector;constructor(n,t,r,i){super(),this.templateRef=n,this.viewContainerRef=t,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Ip=class extends Ua{element;constructor(n){super(),this.element=n instanceof L?n.nativeElement:n}},lo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof so)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof br)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Ip)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},za=class extends lo{outletElement;_appRef;_defaultInjector;constructor(n,t,r){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=r}attachComponentPortal(n){let t;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(lr,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||P.NULL,o=i.get(ke,r.injector);t=cc(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),r.attachView(t.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,r=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(r);i!==-1&&t.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let t=n.element;t.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(r,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var $a=(()=>{class e extends lo{_moduleRef=f(lr,{optional:!0});_document=f(E);_viewContainerRef=f(Ut);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new ae;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let r=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=r.createComponent(t.component,{index:r.length,injector:t.injector||r.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=t=>{let r=t.element;r.parentNode;let i=this._document.createComment("dom-portal");t.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(e)))(i||e)}})();static \u0275dir=N({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[he]})}return e})(),ci=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();var pC=jc();function uo(e){return new Wc(e.get(ao),e.get(E))}var Wc=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Re(-this._previousScrollPosition.left),n.style.top=Re(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,r=n.style,i=t.style,o=r.scrollBehavior||"",a=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),pC&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),pC&&(r.scrollBehavior=o,i.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,r=this._viewportRuler.getViewportSize();return t.scrollHeight>r.height||t.scrollWidth>r.width}};function CC(e,n){return new qc(e.get(Ha),e.get(I),e.get(ao),n)}var qc=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,r,i){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ne(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ga=class{enable(){}disable(){}attach(){}};function Np(e,n){return n.some(t=>{let r=e.bottom<t.top,i=e.top>t.bottom,o=e.right<t.left,a=e.left>t.right;return r||i||o||a})}function hC(e,n){return n.some(t=>{let r=e.top<t.top,i=e.bottom>t.bottom,o=e.left<t.left,a=e.right>t.right;return r||i||o||a})}function Qc(e,n){return new Yc(e.get(Ha),e.get(ao),e.get(I),n)}var Yc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,r,i){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Np(t,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},DC=(()=>{class e{_injector=f(P);noop=()=>new Ga;close=t=>CC(this._injector,t);block=()=>uo(this._injector);reposition=t=>Qc(this._injector,t);static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),yr=class{positionStrategy;scrollStrategy=new Ga;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let r of t)n[r]!==void 0&&(this[r]=n[r])}}};var Xc=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var xC=(()=>{class e{_attachedOverlays=[];_document=f(E);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let r=this._attachedOverlays.indexOf(t);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,r,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),wC=(()=>{class e extends xC{_ngZone=f(I);_renderer=f(Fe).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),EC=(()=>{class e extends xC{_platform=f(de);_ngZone=f(I);_renderer=f(Fe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=vt(t)};_clickListener=t=>{let r=vt(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,l))){if(gC(s.overlayElement,r)||gC(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function gC(e,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===e)return!0;r=t&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var SC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return e})(),Jc=(()=>{class e{_platform=f(de);_containerElement;_document=f(E);_styleLoader=f(_t);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||gp()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(t),gp()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(SC)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Tp=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,r,i){this._renderer=t,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Ap(e){return e&&e.nodeType===1}var Mp=J([]),co=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(n,t,r,i,o,a,s,l,c,d=!1,u,p){this._portalOutlet=n,this._host=t,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=u,this._renderer=p,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Q(()=>{Mp.update(r=>r.includes(this)?r:[...r,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ht(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let r=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>r.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),Q(()=>{Mp.update(t=>t.filter(r=>r!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Q(()=>{Mp.update(t=>t.filter(r=>r!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=C(C({},this._config),n),this._updateElementSize()}setDirection(n){this._config=W(C({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Re(this._config.width),n.height=Re(this._config.height),n.minWidth=Re(this._config.minWidth),n.minHeight=Re(this._config.minHeight),n.maxWidth=Re(this._config.maxWidth),n.maxHeight=Re(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Ap(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Tp(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,r){let i=no(t||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ht(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},bC="cdk-overlay-connected-position-bounding-box",CT=/([A-Za-z%]+)$/;function ed(e,n){return new Zc(n,e.get(ao),e.get(E),e.get(de),e.get(Jc))}var Zc=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=oe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,r,i,o){this._viewportRuler=t,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(bC),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,i,s),c=this._getOverlayPoint(l,t,s),d=this._getOverlayFit(c,t,r,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:s,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:t})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&di(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(bC),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof L?this._origin.nativeElement:Ap(this._origin)?this._origin:null}_getOriginPoint(n,t,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;i=r.originX=="start"?a:s}t.left<0&&(i-=t.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(n,t,r){let i;r.overlayX=="center"?i=-t.width/2:r.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return r.overlayY=="center"?o=-t.height/2:o=r.overlayY=="top"?0:-t.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,t,r,i){let o=vC(t),{x:a,y:s}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(a+=l),c&&(s+=c);let d=0-a,u=a+o.width-r.width,p=0-s,m=s+o.height-r.height,h=this._subtractOverflows(o.width,d,u),y=this._subtractOverflows(o.height,p,m),v=h*y;return{visibleArea:v,isCompletelyWithinViewport:o.width*o.height===v,fitsInViewportVertically:y===o.height,fitsInViewportHorizontally:h==o.width}}_canFitWithFlexibleDimensions(n,t,r){if(this._hasFlexibleDimensions){let i=r.bottom-t.y,o=r.right-t.x,a=yC(this._overlayRef.getConfig().minHeight),s=yC(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=i,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,t,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=vC(t),o=this._viewportRect,a=Math.max(n.x+i.width-o.width,0),s=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,u=0;return i.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?u=l||-s:u=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:u},{x:n.x+d,y:n.y+u}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!DT(this._lastScrollVisibility,r)){let i=new Xc(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,t){let r=this._viewportRect,i=this._isRtl(),o,a,s;if(t.overlayY==="top")a=n.y,o=r.height-a+this._getViewportMarginBottom();else if(t.overlayY==="bottom")s=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-s+this._getViewportMarginTop();else{let m=Math.min(r.bottom-n.y+r.top,n.y),h=this._lastBoundingBoxSize.height;o=m*2,a=n.y-m,o>h&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-h/2)}let l=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,c=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,d,u,p;if(c)p=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)u=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let m=Math.min(r.right-n.x+r.left,n.x),h=this._lastBoundingBoxSize.width;d=m*2,u=n.x-m,d>h&&!this._isInitialRender&&!this._growAfterOpen&&(u=n.x-h/2)}return{top:a,left:u,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,t){let r=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;i.width=Re(r.width),i.height=Re(r.height),i.top=Re(r.top)||"auto",i.bottom=Re(r.bottom)||"auto",i.left=Re(r.left)||"auto",i.right=Re(r.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=Re(o)),a&&(i.maxWidth=Re(a))}this._lastBoundingBoxSize=r,di(this._boundingBox.style,i)}_resetBoundingBoxStyles(){di(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){di(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();di(r,this._getExactOverlayY(t,n,d)),di(r,this._getExactOverlayX(t,n,d))}else r.position="static";let s="",l=this._getOffset(t,"x"),c=this._getOffset(t,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),r.transform=s.trim(),a.maxHeight&&(i?r.maxHeight=Re(a.maxHeight):o&&(r.maxHeight="")),a.maxWidth&&(i?r.maxWidth=Re(a.maxWidth):o&&(r.maxWidth="")),di(this._pane.style,r)}_getExactOverlayY(n,t,r){let i={top:"",bottom:""},o=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;i.bottom=`${a-(o.y+this._overlayRect.height)}px`}else i.top=Re(o.y);return i}_getExactOverlayX(n,t,r){let i={left:"",right:""},o=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;i.right=`${s-(o.x+this._overlayRect.width)}px`}else i.left=Re(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hC(n,r),isOriginOutsideView:Np(n,r),isOverlayClipped:hC(t,r),isOverlayOutsideView:Np(t,r)}}_subtractOverflows(n,...t){return t.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&no(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof L)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+t,height:r,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let r=t.getBoundingClientRect();return n&&(t.style.display=""),r}};function di(e,n){for(let t in n)Object.hasOwn(n,t)&&(e[t]=n[t]);return e}function yC(e){if(typeof e!="number"&&e!=null){let[n,t]=e.split(CT);return!t||t==="px"?parseFloat(n):null}return e||null}function vC(e){return{top:Math.floor(e.top),right:Math.floor(e.right),bottom:Math.floor(e.bottom),left:Math.floor(e.left),width:Math.floor(e.width),height:Math.floor(e.height)}}function DT(e,n){return e===n?!0:e.isOriginClipped===n.isOriginClipped&&e.isOriginOutsideView===n.isOriginOutsideView&&e.isOverlayClipped===n.isOverlayClipped&&e.isOverlayOutsideView===n.isOverlayOutsideView}var _C="cdk-global-overlay-wrapper";function fo(e){return new Kc}var Kc=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(_C),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:a,maxHeight:s}=r,l=(i==="100%"||i==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,u=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",m="",h="",y="";l?y="flex-start":d==="center"?(y="center",p?h=u:m=u):p?d==="left"||d==="end"?(y="flex-end",m=u):(d==="right"||d==="start")&&(y="flex-start",h=u):d==="left"||d==="start"?(y="flex-start",m=u):(d==="right"||d==="end")&&(y="flex-end",h=u),n.position=this._cssPosition,n.marginLeft=l?"0":m,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":h,t.justifyContent=y,t.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,r=t.style;t.classList.remove(_C),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},IC=(()=>{class e{_injector=f(P);global(){return fo()}flexibleConnectedTo(t){return ed(this._injector,t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),MC=new g("OVERLAY_DEFAULT_CONFIG");function mo(e,n){e.get(_t).load(SC);let t=e.get(Jc),r=e.get(E),i=e.get(Qe),o=e.get(Nt),a=e.get(Yt),s=e.get(ve,null,{optional:!0})||e.get(Fe).createRenderer(null,null),l=new yr(n),c=e.get(MC,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!r.body||!("showPopover"in r.body)?l.usePopover=!1:l.usePopover=n?.usePopover??c;let d=r.createElement("div"),u=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),u.appendChild(d),l.usePopover&&(u.setAttribute("popover","manual"),u.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Ap(p)?p.after(u):p?.type==="parent"?p.element.appendChild(u):t.getContainerElement().appendChild(u),new co(new za(d,o,e),u,d,l,e.get(I),e.get(wC),r,e.get(uc),e.get(EC),n?.disableAnimations??e.get(ea,null,{optional:!0})==="NoopAnimations",e.get(ke),s)}var NC=(()=>{class e{scrollStrategies=f(DC);_positionBuilder=f(IC);_injector=f(P);create(t){return mo(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var ui=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[NC],imports:[we,ci,Sp,Sp]})}return e})();var vr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var kp=(()=>{class e extends lo{_elementRef=f(L);_focusTrapFactory=f(X_);_config;_interactivityChecker=f(mp);_ngZone=f(I);_focusMonitor=f(hr);_renderer=f(ve);_changeDetectorRef=f(ct);_injector=f(P);_platform=f(de);_document=f(E);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=f(vr,{optional:!0})||new vr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let r=this._ariaLabelledByQueue.indexOf(t);r>-1&&(this._ariaLabelledByQueue.splice(r,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),r}attachTemplatePortal(t){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),r}attachDomPortal=t=>{this._portalOutlet.hasAttached();let r=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),r};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,r){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),a(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",i),a=this._renderer.listen(t,"mousedown",i)})),t.focus(r)}_focusByCssSelector(t,r){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,r)}_trapFocus(t){this._isDestroyed||Ht(()=>{let r=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||r.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,r=null;if(typeof t=="string"?r=this._document.querySelector(t):typeof t=="boolean"?r=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(r=t),this._config.restoreFocus&&r&&typeof r.focus=="function"){let i=Fa(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(r,this._closeInteractionType),this._closeInteractionType=null):r.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,r=Fa();return t===r||t.contains(r)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Fa()))}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){function t(r,i){}return Z({type:e,selectors:[["cdk-dialog-container"]],viewQuery:function(i,o){if(i&1&&Dn($a,7),i&2){let a;Ce(a=De())&&(o._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,o){i&2&&_e("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[he],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,o){i&1&&zt(0,t,0,0,"ng-template",0)},dependencies:[$a],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return e})(),fi=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(r=>{r.keyCode===27&&!this.disableClose&&!gr(r)&&(r.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let r=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),r.next(n),r.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}},xT=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let e=f(P);return()=>uo(e)}}),wT=new g("DialogData"),ET=new g("DefaultDialogConfig");function ST(e){let n=J(e),t=new ae;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var Op=(()=>{class e{_injector=f(P);_defaultOptions=f(ET,{optional:!0});_parentDialog=f(e,{optional:!0,skipSelf:!0});_overlayContainer=f(Jc);_idGenerator=f(Qe);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=f(xT);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=No(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(mt(void 0)));open(t,r){let i=this._defaultOptions||new vr;r=C(C({},i),r),r.id=r.id||this._idGenerator.getId("cdk-dialog-"),r.id&&this.getDialogById(r.id);let o=this._getOverlayConfig(r),a=mo(this._injector,o),s=new fi(a,r),l=this._attachContainer(a,s,r);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(wt(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(t,s,l,r),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Rp(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(r=>r.id===t)}ngOnDestroy(){Rp(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Rp(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let r=new yr({positionStrategy:t.positionStrategy||fo().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(r.backdropClass=t.backdropClass),r}_attachContainer(t,r,i){let o=i.injector||i.viewContainerRef?.injector,a=[{provide:vr,useValue:i},{provide:fi,useValue:r},{provide:co,useValue:t}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,a.push(...i.container.providers(i))):s=kp;let l=new so(s,i.viewContainerRef,P.create({parent:o||this._injector,providers:a}));return t.attach(l).instance}_attachDialogContent(t,r,i,o){if(t instanceof It){let a=this._createInjector(o,r,i,void 0),s={$implicit:o.data,dialogRef:r};o.templateContext&&(s=C(C({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new br(t,null,s,a))}else{let a=this._createInjector(o,r,i,this._injector),s=i.attachComponentPortal(new so(t,o.viewContainerRef,a,null,o.bindings));r.componentRef=s,r.componentInstance=s.instance}}_createInjector(t,r,i,o){let a=t.injector||t.viewContainerRef?.injector,s=[{provide:wT,useValue:t.data},{provide:fi,useValue:r}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(r,t,i)):s.push(...t.providers)),t.direction&&(!a||!a.get(Yt,null,{optional:!0}))&&s.push({provide:Yt,useValue:ST(t.direction)}),P.create({parent:a||o,providers:s})}_removeOpenDialog(t,r){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),r&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let r=t.parentElement.children;for(let i=r.length-1;i>-1;i--){let o=r[i];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function Rp(e,n){let t=e.length;for(;t--;)n(e[t])}var TC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[Op],imports:[ui,ci,Z_,ci]})}return e})();var rd=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Fp="mdc-dialog--open",AC="mdc-dialog--opening",RC="mdc-dialog--closing",IT=150,MT=75,NT=(()=>{class e extends kp{_animationStateChanged=new ae;_animationsEnabled=!Ct();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?OC(this._config.enterAnimationDuration)??IT:0;_exitAnimationDuration=this._animationsEnabled?OC(this._config.exitAnimationDuration)??MT:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(kC,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(AC,Fp)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Fp),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Fp),this._animationsEnabled?(this._hostElement.style.setProperty(kC,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(RC)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(AC,RC)}_waitForAnimationToComplete(t,r){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(r,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let r=super.attachComponentPortal(t);return r.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),r}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(e)))(i||e)}})();static \u0275cmp=(function(){function t(r,i){}return Z({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,o){i&2&&(an("id",o._config.id),_e("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),te("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[he],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,o){i&1&&(M(0,"div",0)(1,"div",1),zt(2,t,0,0,"ng-template",2),F()())},dependencies:[$a],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})})()}return e})(),kC="--mat-dialog-transition-duration";function OC(e){return e==null?null:typeof e=="number"?e:e.endsWith("ms")?eo(e.substring(0,e.length-2)):e.endsWith("s")?eo(e.substring(0,e.length-1))*1e3:e==="0"?0:null}var nd=(function(e){return e[e.OPEN=0]="OPEN",e[e.CLOSING=1]="CLOSING",e[e.CLOSED=2]="CLOSED",e})(nd||{}),Wa=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Qn(1);_beforeClosed=new Qn(1);_result;_closeFallbackTimeout;_state=nd.OPEN;_closeInteractionType;constructor(n,t,r){this._ref=n,this._config=t,this._containerInstance=r,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),r._animationStateChanged.pipe(Ne(i=>i.state==="opened"),wt(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),r._animationStateChanged.pipe(Ne(i=>i.state==="closed"),wt(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),In(this.backdropClick(),this.keydownEvents().pipe(Ne(i=>i.keyCode===27&&!this.disableClose&&!gr(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),FC(this,i.type==="keydown"?"keyboard":"mouse"))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Ne(r=>r.state==="closing"),wt(1)).subscribe(r=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),r.totalTime+100)}),this._state=nd.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=nd.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function FC(e,n,t){return e._closeInteractionType=n,e.close(t)}var TT=new g("MatMdcDialogData"),AT=new g("mat-mdc-dialog-default-options"),RT=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let e=f(P);return()=>uo(e)}}),qa=(()=>{class e{_defaultOptions=f(AT,{optional:!0});_scrollStrategy=f(RT);_parentDialog=f(e,{optional:!0,skipSelf:!0});_idGenerator=f(Qe);_injector=f(P);_dialog=f(Op);_animationsDisabled=Ct();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=rd;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=No(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(mt(void 0)));constructor(){this._dialogRefConstructor=Wa,this._dialogContainerType=NT,this._dialogDataToken=TT}open(t,r){let i;r=C(C({},this._defaultOptions||new rd),r),r.id=r.id||this._idGenerator.getId("mat-mdc-dialog-"),r.scrollStrategy=r.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,W(C({},r),{positionStrategy:fo(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||r.enterAnimationDuration?.toLocaleString()==="0"||r.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:r},{provide:vr,useValue:r}]},templateContext:()=>({dialogRef:i}),providers:(a,s,l)=>(i=new this._dialogRefConstructor(a,r,l),i.updatePosition(r?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i},{provide:fi,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(i);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(r=>r.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let r=t.length;for(;r--;)t[r].close()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),PC=(()=>{class e{dialogRef=f(Wa,{optional:!0});_elementRef=f(L);_dialog=f(qa);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=HC(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let r=t._matDialogClose;r&&(this.dialogResult=r.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&FC(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(r,i){r&1&&Ae("click",function(a){return i._onButtonClick(a)}),r&2&&_e("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[ht]})}return e})(),LC=(()=>{class e{_dialogRef=f(Wa,{optional:!0});_elementRef=f(L);_dialog=f(qa);ngOnInit(){this._dialogRef||(this._dialogRef=HC(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e})}return e})(),VC=(()=>{class e extends LC{id=f(Qe).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(e)))(i||e)}})();static \u0275dir=N({type:e,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(r,i){r&2&&an("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[he]})}return e})(),jC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[_m([mC])]})}return e})(),BC=(()=>{class e extends LC{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(e)))(i||e)}})();static \u0275dir=N({type:e,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(r,i){r&2&&te("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[he]})}return e})();function HC(e,n){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(r=>r.id===t.id):null}var id=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[qa],imports:[TC,ui,ci,we]})}return e})();function UC(e){return Error(`Unable to find icon with the name "${e}"`)}function OT(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function zC(e){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`)}function $C(e){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`)}var Wn=class{url;svgText;options;svgElement=null;constructor(n,t,r){this.url=n,this.svgText=t,this.options=r}},WC=(()=>{class e{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,r,i,o){this._httpClient=t,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(t,r,i){return this.addSvgIconInNamespace("",t,r,i)}addSvgIconLiteral(t,r,i){return this.addSvgIconLiteralInNamespace("",t,r,i)}addSvgIconInNamespace(t,r,i,o){return this._addSvgIconConfig(t,r,new Wn(i,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,r,i,o){let a=this._sanitizer.sanitize(nt.HTML,i);if(!a)throw $C(i);let s=to(a);return this._addSvgIconConfig(t,r,new Wn("",s,o))}addSvgIconSet(t,r){return this.addSvgIconSetInNamespace("",t,r)}addSvgIconSetLiteral(t,r){return this.addSvgIconSetLiteralInNamespace("",t,r)}addSvgIconSetInNamespace(t,r,i){return this._addSvgIconSetConfig(t,new Wn(r,null,i))}addSvgIconSetLiteralInNamespace(t,r,i){let o=this._sanitizer.sanitize(nt.HTML,r);if(!o)throw $C(r);let a=to(o);return this._addSvgIconSetConfig(t,new Wn("",a,i))}registerFontClassAlias(t,r=t){return this._fontCssClassesByAlias.set(t,r),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=PT(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let r=this._sanitizer.sanitize(nt.RESOURCE_URL,t);if(!r)throw zC(t);let i=this._cachedIconsByUrl.get(r);return i?Je(od(i)):this._loadSvgIconFromConfig(new Wn(t,null)).pipe(Rr(o=>this._cachedIconsByUrl.set(r,o)),pe(o=>od(o)))}getNamedSvgIcon(t,r=""){let i=GC(r,t),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,t),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(r);return a?this._getSvgFromIconSetConfigs(t,a):$d(UC(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Je(od(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(pe(r=>od(r)))}_getSvgFromIconSetConfigs(t,r){let i=this._extractIconWithNameFromAnySet(t,r);if(i)return Je(i);let o=r.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ls(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(nt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),Je(null)})));return To(o).pipe(pe(()=>{let a=this._extractIconWithNameFromAnySet(t,r);if(!a)throw UC(t);return a}))}_extractIconWithNameFromAnySet(t,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Rr(r=>t.svgText=r),pe(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Je(null):this._fetchIcon(t).pipe(Rr(r=>t.svgText=r))}_extractSvgIconFromSet(t,r,i){let o=t.querySelector(`[id="${r}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(to("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(t){let r=this._document.createElement("DIV");r.innerHTML=t;let i=r.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let r=this._svgElementFromString(to("<svg></svg>")),i=t.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o],l=a.toLowerCase();l!=="id"&&!l.startsWith("on")&&r.setAttribute(a,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(t.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(t,r){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),r&&r.viewBox&&t.setAttribute("viewBox",r.viewBox),t}_fetchIcon(t){let{url:r,options:i}=t,o=i?.withCredentials??!1;if(!this._httpClient)throw OT();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let a=this._sanitizer.sanitize(nt.RESOURCE_URL,r);if(!a)throw zC(r);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(pe(c=>to(c)),Ro(()=>this._inProgressUrlFetches.delete(a)),ko());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(t,r,i){return this._svgIconConfigs.set(GC(t,r),i),this}_addSvgIconSetConfig(t,r){let i=this._iconSetConfigs.get(t);return i?i.push(r):this._iconSetConfigs.set(t,[r]),this}_svgElementFromConfig(t){if(!t.svgElement){let r=this._svgElementFromString(t.svgText);this._setSvgAttributes(r,t.options),t.svgElement=r}return t.svgElement}_getIconConfigFromResolvers(t,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,t);if(o)return FT(o)?new Wn(o.url,null,o.options):new Wn(o,null)}}static \u0275fac=function(r){return new(r||e)(T(ka,8),T(Oa),T(E,8),T(at))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function od(e){return e.cloneNode(!0)}function GC(e,n){return e+":"+n}function FT(e){return!!(e.url&&e.options)}function PT(e){let n=null,t=!1;return e.fonts&&typeof e.fonts.forEach=="function"&&e.fonts.forEach(r=>{let i=r.family.replace(/['"]/g,"").trim().toLowerCase();(i==="material icons"||i.startsWith("material icons "))&&(t=!0),i.startsWith("material symbols rounded")?n="rounded":i.startsWith("material symbols sharp")?n="sharp":i.startsWith("material symbols")&&(n="outlined")}),[n&&!t?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var LT=new g("MAT_ICON_DEFAULT_OPTIONS"),VT=new g("mat-icon-location",{providedIn:"root",factory:()=>{let e=f(E),n=e?e.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),qC=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],jT=qC.map(e=>`[${e}]`).join(", "),BT=/^url\(['"]?#(.*?)['"]?\)$/,YC=(()=>{class e{_elementRef=f(L);_iconRegistry=f(WC);_location=f(VT);_errorHandler=f(at);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let r=this._cleanupFontValue(t);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let r=this._cleanupFontValue(t);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=oe.EMPTY;constructor(){let t=f(new lc("aria-hidden"),{optional:!0}),r=f(LT,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let r=t.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,r=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=t.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),r.forEach(i=>t.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let r=this._elementsWithExternalReferences,i=t.startsWith("//")?`/.${t}`:t;r&&r.forEach((o,a)=>{o.forEach(s=>{a.setAttribute(s.name,`url('${i}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let r=t.querySelectorAll(jT),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)qC.forEach(a=>{let s=r[o],l=s.getAttribute(a),c=l?l.match(BT):null;if(c){let d=i.get(s);d||(d=[],i.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[r,i]=this._splitIconName(t);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(wt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){return Z({type:e,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,o){i&2&&(_e("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),sn(o.color?"mat-"+o.color:""),te("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ie],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(Ge(),ee(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})})()}return e})(),XC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[we]})}return e})();var Lp=new g("MAT_MENU_PANEL"),Ya=(()=>{class e{_isAnchor;_elementRef=f(L);_document=f(E);_focusMonitor=f(hr);_parentMenu=f(Lp,{optional:!0});_changeDetectorRef=f(ct);role="menuitem";disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new x;_focused=new x;_highlighted=!1;_triggersSubmenu=!1;constructor(){f(_t).load(Hc),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName==="A"}focus(t,r){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,r):this._getHostElement().focus(r),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?"-1":"0"}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),r=t.querySelectorAll("mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp");for(let i=0;i<r.length;i++)r[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],r=["mat-icon, [matMenuItemIcon]","*"];function i(o,a){o&1&&(ml(),M(0,"svg",2),ze(1,"polygon",3),F())}return Z({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:12,hostBindings:function(a,s){a&1&&Ae("click",function(c){return s._checkDisabled(c)})("mouseenter",function(){return s._handleMouseEnter()}),a&2&&(_e("role",s.role)("tabindex",s._getTabIndex())("aria-disabled",s._getAriaDisabled())("disabled",s._getDisabled()),te("mat-mdc-menu-item-highlighted",s._highlighted)("mat-mdc-menu-item-submenu-trigger",s._triggersSubmenu)("mat-mdc-menu-item-disabled",s.disabled)("mat-mdc-menu-item-disabled-interactive",s.disabledInteractive))},inputs:{role:"role",disabled:[2,"disabled","disabled",Ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie],disableRipple:[2,"disableRipple","disableRipple",Ie]},exportAs:["matMenuItem"],ngContentSelectors:r,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(a,s){a&1&&(Ge(t),ee(0),M(1,"span",0),ee(2,1),F(),ze(3,"div",1),ge(4,i,2,0,"svg",2)),a&2&&(j(3),bt("matRippleDisabled",s.disableRipple||s.disabled)("matRippleTrigger",s._getHostElement()),j(),be(s._triggersSubmenu?4:-1))},dependencies:[aC],encapsulation:2})})()}return e})();var $T=new g("MatMenuContent");var GT=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Pp="_mat-menu-enter",ad="_mat-menu-exit",ho=(()=>{class e{_elementRef=f(L);_changeDetectorRef=f(ct);_injector=f(P);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Ct();_allItems;_directDescendantItems=new Vn;_classList={};_panelAnimationState="void";_animationDone=new x;_isAnimating=J(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let r=this._previousPanelClass,i=C({},this._classList);r&&r.length&&r.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass="";get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new ae;close=this.closed;panelId=f(Qe).getId("mat-menu-panel-");constructor(){let t=f(GT);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Va(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(t=>t.disabled&&!t.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(mt(this._directDescendantItems),Ei(t=>In(...t.map(r=>r._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let r=this._keyManager;if(this._panelAnimationState==="enter"&&r.activeItem?._hasFocus()){let i=t.toArray(),o=Math.max(0,Math.min(i.length-1,r.activeItemIndex||0));i[o]&&!i[o].disabled?r.setActiveItem(o):r.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(mt(this._directDescendantItems),Ei(r=>In(...r.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let r=t.keyCode,i=this._keyManager;switch(r){case 27:gr(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(r===38||r===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ht(()=>{let r=this._resolvePanel();if(!r||!r.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&r&&r.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,r=this.yPosition){this._classList=W(C({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":r==="above","mat-menu-below":r==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let r=t===ad;(r||t===Pp)&&(r&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(r?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Pp||t===ad)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let r=this._resolvePanel();r&&(r.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ad),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Pp:ad)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(mt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(r=>r._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["*"];function r(i,o){if(i&1){let a=ma();Pe(0,"div",0),Jl("click",function(){bn(a);let l=Ve();return yn(l.closed.emit("click"))})("animationstart",function(l){bn(a);let c=Ve();return yn(c._onAnimationStart(l.animationName))})("animationend",function(l){bn(a);let c=Ve();return yn(c._onAnimationDone(l.animationName))})("animationcancel",function(l){bn(a);let c=Ve();return yn(c._onAnimationDone(l.animationName))}),Pe(1,"div",1),ee(2),$e()()}if(i&2){let a=Ve();sn(a._classList),te("mat-menu-panel-animations-disabled",a._animationsDisabled)("mat-menu-panel-exit-animation",a._panelAnimationState==="void")("mat-menu-panel-animating",a._isAnimating()),an("id",a.panelId),_e("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null)("aria-describedby",a.ariaDescribedby||null)}}return Z({type:e,selectors:[["mat-menu"]],contentQueries:function(o,a,s){if(o&1&&cr(s,$T,5)(s,Ya,5)(s,Ya,4),o&2){let l;Ce(l=De())&&(a.lazyContent=l.first),Ce(l=De())&&(a._allItems=l),Ce(l=De())&&(a.items=l)}},viewQuery:function(o,a){if(o&1&&Dn(It,5),o&2){let s;Ce(s=De())&&(a.templateRef=s.first)}},hostVars:3,hostBindings:function(o,a){o&2&&_e("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Ie],hasBackdrop:[2,"hasBackdrop","hasBackdrop",i=>i==null?null:Ie(i)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[lt([{provide:Lp,useExisting:e}])],ngContentSelectors:t,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(o,a){o&1&&(Ge(),Kl(0,r,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return e})(),WT=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let e=f(P);return()=>Qc(e)}});var po=new WeakMap,qT=(()=>{class e{_canHaveBackdrop;_element=f(L);_viewContainerRef=f(Ut);_menuItemInstance=f(Ya,{optional:!0,self:!0});_dir=f(Yt,{optional:!0});_focusMonitor=f(hr);_ngZone=f(I);_injector=f(P);_scrollStrategy=f(WT);_changeDetectorRef=f(ct);_animationsDisabled=Ct();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=oe.EMPTY;_menuCloseSubscription=oe.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(r=>{this._destroyMenu(r),(r==="click"||r==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(r)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let r=f(Lp,{optional:!0});this._parentMaterialMenu=r instanceof ho?r:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&po.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let r=this._menu;if(this._menuOpen||!r)return;this._pendingRemoval?.unsubscribe();let i=po.get(r);po.set(r,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(r),a=o.getConfig(),s=a.positionStrategy;this._setPosition(r,s),this._canHaveBackdrop?a.hasBackdrop=r.hasBackdrop==null?!this._triggersSubmenu():r.hasBackdrop:a.hasBackdrop=r.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(r)),r.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),r.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,r.direction=this.dir,t&&r.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),r instanceof ho&&(r._setIsOpen(!0),r._directDescendantItems.changes.pipe(Ft(r.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(t,r){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,r):this._element.nativeElement.focus(r)}_destroyMenu(t){let r=this._overlayRef,i=this._menu;!r||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof ho&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(wt(1)).subscribe(()=>{r.detach(),po.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(r.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&po.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let r=this._getOverlayConfig(t);this._subscribeToPositions(t,r.positionStrategy),this._overlayRef=mo(this._injector,r),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof ho&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new yr({positionStrategy:ed(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,r){t.setPositionClasses&&r.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",a=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(o,a)})})}_setPosition(t,r){let[i,o]=t.xPosition==="before"?["end","start"]:["start","end"],[a,s]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[a,s],[d,u]=[i,o],p=0;if(this._triggersSubmenu()){if(u=i=t.xPosition==="before"?"start":"end",o=d=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let m=this._parentMaterialMenu.items.first;this._parentInnerPadding=m?m._getHostElement().offsetTop:0}p=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(l=a==="top"?"bottom":"top",c=s==="top"?"bottom":"top");r.withPositions([{originX:i,originY:l,overlayX:d,overlayY:a,offsetY:p},{originX:o,originY:l,overlayX:u,overlayY:a,offsetY:p},{originX:i,originY:c,overlayX:d,overlayY:s,offsetY:-p},{originX:o,originY:c,overlayX:u,overlayY:s,offsetY:-p}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),r=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:Je(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ne(a=>this._menuOpen&&a!==this._menuItemInstance)):Je();return In(t,i,o,r)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new br(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return po.get(t)===this}_triggerIsAriaDisabled(){return Ie(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(r){um()};static \u0275dir=N({type:e})}return e})(),ZC=(()=>{class e extends qT{_cleanupTouchstart;_hoverSubscription=oe.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new ae;onMenuOpen=this.menuOpened;menuClosed=new ae;onMenuClose=this.menuClosed;constructor(){super(!0);let t=f(ve);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",r=>{oi(r)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){ii(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let r=t.keyCode;(r===13||r===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(r===39&&this.dir==="ltr"||r===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(r,i){r&1&&Ae("click",function(a){return i._handleClick(a)})("mousedown",function(a){return i._handleMousedown(a)})("keydown",function(a){return i._handleKeydown(a)}),r&2&&_e("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[he]})}return e})();var KC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Uc,ui,we,Gc]})}return e})();var XT=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),QC=(()=>{class e{_elementRef=f(L);_platform=f(de);_document=f(E);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["*",[["mat-toolbar-row"]]];return Z({type:e,selectors:[["mat-toolbar"]],contentQueries:function(o,a,s){if(o&1&&cr(s,XT,5),o&2){let l;Ce(l=De())&&(a._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,a){o&2&&(sn(a.color?"mat-"+a.color:""),te("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(o,a){o&1&&(Ge(t),ee(0),ee(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return e})();var JC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[we]})}return e})();var go={api:"./",appname:"Minecraft server status",production:!0,theme:"azure-blue",serverIp:"85.215.76.190",serverPort:"25565"};var sD=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(r){return new(r||e)(se(ve),se(L))};static \u0275dir=N({type:e})}return e})(),KT=(()=>{class e extends sD{static \u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(e)))(i||e)}})();static \u0275dir=N({type:e,features:[he]})}return e})(),lD=new g("");var QT={provide:lD,useExisting:Pt(()=>bd),multi:!0};function JT(){let e=$t()?$t().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var eA=new g(""),bd=(()=>{class e extends sD{_compositionMode;_composing=!1;constructor(t,r,i){super(t,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!JT())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(r){return new(r||e)(se(ve),se(L),se(eA,8))};static \u0275dir=N({type:e,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&Ae("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[lt([QT]),he]})}return e})();function Up(e){return e==null||zp(e)===0}function zp(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var yd=new g(""),$p=new g(""),tA=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,es=class{static min(n){return nA(n)}static max(n){return rA(n)}static required(n){return cD(n)}static requiredTrue(n){return iA(n)}static email(n){return oA(n)}static minLength(n){return aA(n)}static maxLength(n){return sA(n)}static pattern(n){return lA(n)}static nullValidator(n){return cd()}static compose(n){return hD(n)}static composeAsync(n){return gD(n)}};function nA(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function rA(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function cD(e){return Up(e.value)?{required:!0}:null}function iA(e){return e.value===!0?null:{required:!0}}function oA(e){return Up(e.value)||tA.test(e.value)?null:{email:!0}}function aA(e){return n=>{let t=n.value?.length??zp(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function sA(e){return n=>{let t=n.value?.length??zp(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function lA(e){if(!e)return cd;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(Up(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function cd(e){return null}function dD(e){return e!=null}function uD(e){return ti(e)?Ot(e):e}function fD(e){let n={};return e.forEach(t=>{n=t!=null?C(C({},n),t):n}),Object.keys(n).length===0?null:n}function mD(e,n){return n.map(t=>t(e))}function cA(e){return!e.validate}function pD(e){return e.map(n=>cA(n)?n:t=>n.validate(t))}function hD(e){if(!e)return null;let n=e.filter(dD);return n.length==0?null:function(t){return fD(mD(t,n))}}function Gp(e){return e!=null?hD(pD(e)):null}function gD(e){if(!e)return null;let n=e.filter(dD);return n.length==0?null:function(t){let r=mD(t,n).map(uD);return To(r).pipe(pe(fD))}}function Wp(e){return e!=null?gD(pD(e)):null}function eD(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function bD(e){return e._rawValidators}function yD(e){return e._rawAsyncValidators}function Vp(e){return e?Array.isArray(e)?e:[e]:[]}function dd(e,n){return Array.isArray(e)?e.includes(n):e===n}function tD(e,n){let t=Vp(n);return Vp(e).forEach(i=>{dd(t,i)||t.push(i)}),t}function nD(e,n){return Vp(n).filter(t=>!dd(e,t))}var ud=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Gp(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Wp(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},_r=class extends ud{name;get formDirective(){return null}get path(){return null}};var Xa="VALID",sd="INVALID",bo="PENDING",Za="DISABLED",Cr=class{},fd=class extends Cr{value;source;constructor(n,t){super(),this.value=n,this.source=t}},Qa=class extends Cr{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Ja=class extends Cr{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},yo=class extends Cr{status;source;constructor(n,t){super(),this.status=n,this.source=t}},md=class extends Cr{source;constructor(n){super(),this.source=n}},mi=class extends Cr{source;constructor(n){super(),this.source=n}};function qp(e){return(vd(e)?e.validators:e)||null}function dA(e){return Array.isArray(e)?Gp(e):e||null}function Yp(e,n){return(vd(n)?n.asyncValidators:e)||null}function uA(e){return Array.isArray(e)?Wp(e):e||null}function vd(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function vD(e,n,t){let r=e.controls;if(!(n?Object.keys(r):r).length)throw new _(1e3,"");if(!CD(r,t))throw new _(1001,"")}function _D(e,n,t){e._forEachChild((r,i)=>{if(t[i]===void 0)throw new _(-1002,"")})}var vo=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=J(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return Q(this.statusReactive)}set status(n){Q(()=>this.statusReactive.set(n))}_status=Te(()=>this.statusReactive());statusReactive=J(void 0);get valid(){return this.status===Xa}get invalid(){return this.status===sd}get pending(){return this.status===bo}get disabled(){return this.status===Za}get enabled(){return this.status!==Za}errors;get pristine(){return Q(this.pristineReactive)}set pristine(n){Q(()=>this.pristineReactive.set(n))}_pristine=Te(()=>this.pristineReactive());pristineReactive=J(!0);get dirty(){return!this.pristine}get touched(){return Q(this.touchedReactive)}set touched(n){Q(()=>this.touchedReactive.set(n))}_touched=Te(()=>this.touchedReactive());touchedReactive=J(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(tD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(tD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(nD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(nD(n,this._rawAsyncValidators))}hasValidator(n){return dd(this._rawValidators,n)}hasAsyncValidator(n){return dd(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(W(C({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new Ja(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),t&&n.emitEvent!==!1&&this._events.next(new Ja(!1,r))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(W(C({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new Qa(!1,r))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),t&&n.emitEvent!==!1&&this._events.next(new Qa(!0,r))}markAsPending(n={}){this.status=bo;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yo(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(W(C({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Za,this.errors=null,this._forEachChild(i=>{i.disable(W(C({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new fd(this.value,r)),this._events.next(new yo(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(C({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Xa,this._forEachChild(r=>{r.enable(W(C({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(W(C({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xa||this.status===bo)&&this._runAsyncValidator(r,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new fd(this.value,t)),this._events.next(new yo(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(W(C({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Za:Xa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=bo,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let r=uD(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(n,t){let r=t?this.get(t):this;return r?.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new yo(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,r)}_initObservables(){this.valueChanges=new ae,this.statusChanges=new ae}_calculateStatus(){return this._allControlsDisabled()?Za:this.errors?sd:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(bo)?bo:this._anyControlsHaveStatus(sd)?sd:Xa}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,t),i&&this._events.next(new Qa(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ja(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){vd(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=dA(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=uA(this._rawAsyncValidators)}_updateHasRequiredValidator(){Q(()=>this._hasRequired.set(this.hasValidator(es.required)))}};function CD(e,n){return Object.hasOwn(e,n)}function fA(e){return e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"}function mA(e,n,t,r){switch(t){case"name":e.setAttribute(n,t,r);break;case"disabled":case"readonly":case"required":r?e.setAttribute(n,t,""):e.removeAttribute(n,t);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?e.setAttribute(n,t,r.toString()):e.removeAttribute(n,t);break}}var jp=class{kind;context;control;message;constructor({kind:n,context:t,control:r}){this.kind=n,this.context=t,this.control=r}};var pA=(()=>{class e{_validator=cd;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):cd,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,features:[ht]})}return e})();var hA={provide:yd,useExisting:Pt(()=>DD),multi:!0};var DD=(()=>{class e extends pA{required;inputName="required";normalizeInput=Ie;createValidator=t=>cD;enabled(t){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(e)))(i||e)}})();static \u0275dir=N({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,i){r&2&&_e("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[lt([hA]),he]})}return e})();var gA=new g(""),Xp=new g("",{factory:()=>Zp}),Zp="always";function bA(e,n){return[...n.path,e]}function yA(e,n,t=Zp){Kp(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),_A(e,n),DA(e,n),CA(e,n),vA(e,n)}function rD(e,n,t=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),hd(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function pd(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function vA(e,n){if(n.valueAccessor.setDisabledState){let t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Kp(e,n){let t=bD(e);n.validator!==null?e.setValidators(eD(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let r=yD(e);n.asyncValidator!==null?e.setAsyncValidators(eD(r,n.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let i=()=>e.updateValueAndValidity();pd(n._rawValidators,i),pd(n._rawAsyncValidators,i)}function hd(e,n){let t=!1;if(e!==null){if(n.validator!==null){let i=bD(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.validator);o.length!==i.length&&(t=!0,e.setValidators(o))}}if(n.asyncValidator!==null){let i=yD(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.asyncValidator);o.length!==i.length&&(t=!0,e.setAsyncValidators(o))}}}let r=()=>{};return pd(n._rawValidators,r),pd(n._rawAsyncValidators,r),t}function _A(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&xD(e,n)})}function CA(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&xD(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function xD(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function DA(e,n){let t=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function wD(e,n){e==null,Kp(e,n)}function xA(e,n){return hd(e,n)}function wA(e,n){if(!Object.hasOwn(e,"model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function EA(e){return Object.getPrototypeOf(e.constructor)===KT}function ED(e,n){e._syncPendingControls(),n.forEach(t=>{let r=t.control;r.updateOn==="submit"&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function SA(e,n){if(!n)return null;Array.isArray(n);let t,r,i;return n.forEach(o=>{o.constructor===bd?t=o:EA(o)?r=o:i=o}),i||r||t||null}function IA(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}var MA={provide:gA,useFactory:()=>{let e=f(Dr,{self:!0});return{setParseErrors:n=>{e.setParseErrorSource(n)},set onReset(n){e.onReset=n}}}},Dr=class extends ud{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof mi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=SA(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,t,r){super(),this.injector=n,this.renderer=t,this.rawValueAccessors=r,this.injector?.get(We)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(ct);if(!this.control||!n)return;let t=n.markForCheck.bind(n);this.subscription=new oe,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof mi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(i=>{this.control?.markAsDirty(),this.control?.setValue(i,{emitModelToViewChange:!1}),this.viewToModelUpdate(i)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=fA(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof DD))}ngControlUpdate(n,t){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;Object.is(i.value,r.value)||(i.value=r.value,n.setCustomControlModelInput(r.value)),this.bindControlProperty(n,i,"touched",r.touched),this.bindControlProperty(n,i,"dirty",r.dirty),this.bindControlProperty(n,i,"valid",r.valid),this.bindControlProperty(n,i,"invalid",r.invalid),this.bindControlProperty(n,i,"pending",r.pending),this.bindControlProperty(n,i,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(n,i,"required",this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let a=this._convertErrors(o);n.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,t,r,i){if(t[r]===i)return;t[r]=i;let o=n.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r==="disabled"||r==="required")&&this.renderer&&mA(this.renderer,n.nativeElement,r,i)}_convertErrors(n){if(n===null)return[];let t=this.control;return Object.entries(n).map(([r,i])=>new jp({context:i,kind:r,control:t}))}setParseErrorSource(n){if(n===void 0)return;let t=null,r=Te(()=>{let i=n();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>t).bind(this),St(()=>{t=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},gd=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var SD=(()=>{class e extends gd{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(se(Dr,2))};static \u0275dir=N({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&te("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[he]})}return e})(),ID=(()=>{class e extends gd{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(se(_r,10))};static \u0275dir=N({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){r&2&&te("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[he]})}return e})(),_o=class extends vo{constructor(n,t,r){super(qp(t),Yp(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){let r=this._find(n);return r||(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,t={}){Q(()=>{_D(this,!0,n),Object.keys(n).forEach(r=>{vD(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this._find(r);i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,W(C({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new mi(this))}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((i,o)=>{r=t(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return CD(this.controls,n)?this.controls[n]:null}};var Bp=class extends _o{};var NA={provide:_r,useExisting:Pt(()=>Qp)},Ka=Promise.resolve(),Qp=(()=>{class e extends _r{callSetDisabledState;get submitted(){return Q(this.submittedReactive)}_submitted=Te(()=>this.submittedReactive());submittedReactive=J(!1);_directives=new Set;form;ngSubmit=new ae;options;constructor(t,r,i){super(),this.callSetDisabledState=i,this.form=new _o({},Gp(t),Wp(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Ka.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Ka.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Ka.then(()=>{let r=this._findContainer(t.path),i=new _o({});wD(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Ka.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){Ka.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),ED(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new md(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(r){return new(r||e)(se(yd,10),se($p,10),se(Xp,8))};static \u0275dir=N({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&Ae("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[lt([NA]),he]})}return e})();function iD(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function oD(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var ld=class extends vo{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,r){super(qp(t),Yp(r,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),vd(t)&&(t.nonNullable||t.initialValueIsDefault)&&(oD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){Q(()=>{this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new mi(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){iD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){iD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){oD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var TA=e=>e instanceof ld;var AA=(()=>{class e extends _r{callSetDisabledState;get submitted(){return Q(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Te(()=>this._submittedReactive());_submittedReactive=J(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,r,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){if(!this.form)throw new _(1052,!1);Object.hasOwn(t,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(hd(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let r=this.form.get(t.path);return t._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){rD(t.control||null,t,!1),IA(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,r){this.form.get(t.path).setValue(r)}onReset(){this.resetForm()}resetForm(t=void 0,r={}){this.form.reset(t,r),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,ED(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new md(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,i=this.form.get(t.path);r!==i&&(rD(r||null,t),TA(i)&&t._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);wD(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let r=this.form?.get(t.path);r&&xA(r,t)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Kp(this.form,this),this._oldForm&&hd(this._oldForm,this)}static \u0275fac=function(r){return new(r||e)(se(yd,10),se($p,10),se(Xp,8))};static \u0275dir=N({type:e,features:[he,ht]})}return e})(),RA={provide:_r,useExisting:Pt(()=>ts)},ts=(()=>{class e extends AA{form=null;ngSubmit=new ae;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Mt(e)))(i||e)}})();static \u0275dir=N({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&Ae("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[lt([RA]),he]})}return e})();var MD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var Hp=class extends vo{constructor(n,t,r){super(qp(t),Yp(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){Array.isArray(n)?n.forEach(r=>{this.controls.push(r),this._registerControl(r)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,r={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,r={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){Q(()=>{_D(this,!1,n),n.forEach((r,i)=>{vD(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(n.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((r,i)=>{r.reset(n[i],W(C({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new mi(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,r)=>r._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,r)=>{n(t,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var ND=new g("");var kA={provide:Dr,useExisting:Pt(()=>Jp)},Jp=(()=>{class e extends Dr{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new ae;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,r,i,o,a,s,l){super(l,s,o),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(t,r){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,yA(t,this,r))}ngOnChanges(t){this._added||this._setUpControl(),wA(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return bA(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(t){super.ngControlCreate(t)}\u0275ngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static \u0275fac=function(r){return new(r||e)(se(_r,13),se(yd,10),se($p,10),se(lD,10),se(ND,8),se(ve,8),se(P,8))};static \u0275dir=N({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[lt([kA,MA]),he,ht,vm(null)]})}return e})();var OA=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();function aD(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var TD=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let i=this._reduceControls(t),o={};return aD(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new _o(i,o)}record(t,r=null){let i=this._reduceControls(t);return new Bp(i,r)}control(t,r,i){let o={};return this.useNonNullable?(aD(r)?o=r:(o.validators=r,o.asyncValidators=i),new ld(t,W(C({},o),{nonNullable:!0}))):new ld(t,r,i)}array(t,r,i){let o=t.map(a=>this._createControl(a));return new Hp(o,r,i)}_reduceControls(t){let r={};return Object.keys(t).forEach(i=>{r[i]=this._createControl(t[i])}),r}_createControl(t){if(t instanceof ld)return t;if(t instanceof vo)return t;if(Array.isArray(t)){let r=t[0],i=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,i,o)}else return this.control(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var AD=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ND,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Xp,useValue:t.callSetDisabledState??Zp}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[OA]})}return e})();var PA=new g("MAT_CARD_CONFIG"),RD=(()=>{class e{appearance;constructor(){let t=f(PA,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){return Z({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,o){i&2&&te("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(Ge(),ee(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})})()}return e})(),kD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return e})();var OD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var FD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"];return Z({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(o,a){o&1&&(Ge(t),ee(0),Pe(1,"div",0),ee(2,1),$e(),ee(3,2))},encapsulation:2})})()}return e})();var PD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[we]})}return e})();var VD=Symbol("FIELD_TREE");var jD=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),LD=class{reducer;create;brand;[jD];constructor(n,t){this.reducer=n,this.create=t}};function ns(e){return typeof e=="function"&&e[VD]===!0}var BD=new g("");var eh=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new z(t=>{let r=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ne(t=>t.some(r=>r.target===n)),Bs({bufferSize:1,refCount:!0}),Ft(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},HD=(()=>{class e{_cleanupErrorListener;_observers=new Map;_ngZone=f(I);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new eh(i)),this._observers.get(i).observe(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var rs=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["mat-label"]]})}return e})(),VA=new g("MatError");var th=(()=>{class e{align="start";id=f(Qe).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(an("id",i.id),_e("align",null),te("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return e})(),jA=new g("MatPrefix");var BA=new g("MatSuffix");var YD=new g("FloatingLabelParent"),UD=(()=>{class e{_elementRef=f(L);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=f(HD);_ngZone=f(I);_parent=f(YD);_resizeSubscription=new oe;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return HA(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&te("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return e})();function HA(e){let n=e;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let r=t.scrollWidth;return t.remove(),r}var zD="mdc-line-ripple--active",_d="mdc-line-ripple--deactivating",$D=(()=>{class e{_elementRef=f(L);_cleanupTransitionEnd;constructor(){let t=f(I),r=f(ve);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(_d),t.add(zD)}deactivate(){this._elementRef.nativeElement.classList.add(_d)}_handleTransitionEnd=t=>{let r=this._elementRef.nativeElement.classList,i=r.contains(_d);t.propertyName==="opacity"&&i&&r.remove(zD,_d)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return e})(),GD=(()=>{class e{_elementRef=f(L);_ngZone=f(I);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,r=t.querySelector(".mdc-floating-label");r?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let r=this._notch.nativeElement;!this.open||!t?r.style.width="":r.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["notch"];return Z({type:e,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(o,a){if(o&1&&Dn(t,5),o&2){let s;Ce(s=De())&&(a._notch=s.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(o,a){o&2&&te("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(o,a){o&1&&(Ge(),Ke(0,"div",1),Pe(1,"div",2,0),ee(3),$e(),Ke(4,"div",3))},encapsulation:2})})()}return e})(),nh=(()=>{class e{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e})}return e})();var rh=new g("MatFormField"),UA=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),WD="fill",zA="auto",qD="fixed",$A="translateY(-50%)",Cd=(()=>{class e{_elementRef=f(L);_changeDetectorRef=f(ct);_platform=f(de);_idGenerator=f(Qe);_ngZone=f(I);_defaults=f(UA,{optional:!0});_currentDirection;_unwrapMaybeSignal(t){return pt(t)?t():t}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ca("iconPrefixContainer");_textPrefixContainerSignal=Ca("textPrefixContainer");_iconSuffixContainerSignal=Ca("iconSuffixContainer");_textSuffixContainerSignal=Ca("textSuffixContainer");_prefixSuffixContainers=Te(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Vv(rs);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=oo(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||zA}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let r=t||this._defaults?.appearance||WD;this._appearanceSignal.set(r)}_appearanceSignal=J(WD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||qD}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||qD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ct();constructor(){let t=this._defaults,r=f(Yt);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),St(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=ns(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!ns(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Te(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let r=this._control,i="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(i+t.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges?.pipe(mt([void 0,void 0]),pe(()=>[this._unwrapMaybeSignal(r.errorState),r.userAriaDescribedBy]),js(),Ne(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&!ns(r.ngField)&&(this._valueChanges=r.ngControl.valueChanges.pipe(Ft(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),In(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._unwrapMaybeSignal(this._control.focused);t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Lm({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Te(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(t){let r=this._control?.ngField||this._control?.ngControl;if(!r)return!1;if(ns(r)){let i=r();return t==="valid"?i.valid():t==="dirty"?i.dirty():t==="touched"?i.touched():t==="pending"?i.pending():t==="untouched"?!i.touched():t==="pristine"?!i.dirty():t==="invalid"?!i.valid():!1}else{let i=r;return t==="valid"?i.valid:t==="dirty"?i.dirty:t==="touched"?i.touched:t==="pending"?i.pending:t==="untouched"?i.untouched:t==="pristine"?i.pristine:t==="invalid"?i.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||t;i=t.concat(r.filter(a=>a&&!o.includes(a)))}else i=t;this._control.setDescribedByIds(i),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",u=`${a+s}px`,m=`calc(${d} * (${u} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,h=`var(--mat-mdc-form-field-label-transform, ${$A} translateX(${m}))`,y=a+s+l+c;return[h,y]}_writeOutlinedLabelStyles(t){if(t!==null){let[r,i]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let r=t.getRootNode();return r&&r!==t}return document.documentElement.contains(t)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["iconPrefixContainer"],r=["textPrefixContainer"],i=["iconSuffixContainer"],o=["textSuffixContainer"],a=["textField"],s=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],l=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function c(w,Y){w&1&&ze(0,"span",21)}function d(w,Y){if(w&1&&(M(0,"label",20),ee(1,1),ge(2,c,1,0,"span",21),F()),w&2){let b=Ve(2);bt("floating",b._shouldLabelFloat())("monitorResize",b._hasOutline())("id",b._labelId),_e("for",b._control.disableAutomaticLabeling?null:b._control.id),j(2),be(!b.hideRequiredMarker&&b._unwrapMaybeSignal(b._control.required)?2:-1)}}function u(w,Y){if(w&1&&ge(0,d,3,5,"label",20),w&2){let b=Ve();be(b._hasFloatingLabel()?0:-1)}}function p(w,Y){w&1&&ze(0,"div",7)}function m(w,Y){}function h(w,Y){if(w&1&&zt(0,m,0,0,"ng-template",13),w&2){Ve(2);let b=dr(1);bt("ngTemplateOutlet",b)}}function y(w,Y){if(w&1&&(M(0,"div",9),ge(1,h,1,1,null,13),F()),w&2){let b=Ve();bt("matFormFieldNotchedOutlineOpen",b._shouldLabelFloat()),j(),be(b._forceDisplayInfixLabel()?-1:1)}}function v(w,Y){w&1&&(M(0,"div",10,2),ee(2,2),F())}function D(w,Y){w&1&&(M(0,"div",11,3),ee(2,3),F())}function R(w,Y){}function it(w,Y){if(w&1&&zt(0,R,0,0,"ng-template",13),w&2){Ve();let b=dr(1);bt("ngTemplateOutlet",b)}}function Dt(w,Y){w&1&&(M(0,"div",14,4),ee(2,4),F())}function dt(w,Y){w&1&&(M(0,"div",15,5),ee(2,5),F())}function Be(w,Y){w&1&&ze(0,"div",16)}function Rt(w,Y){w&1&&(M(0,"div",18),ee(1,6),F())}function xt(w,Y){if(w&1&&(M(0,"mat-hint",22),le(1),F()),w&2){let b=Ve(2);bt("id",b._hintLabelId),j(),Xi(b.hintLabel)}}function ut(w,Y){if(w&1&&(M(0,"div",19),ge(1,xt,2,2,"mat-hint",22),ee(2,7),ze(3,"div",23),ee(4,8),F()),w&2){let b=Ve();j(),be(b.hintLabel?1:-1)}}return Z({type:e,selectors:[["mat-form-field"]],contentQueries:function(Y,b,X){if(Y&1&&(ec(X,b._labelChild,rs,5),cr(X,nh,5)(X,jA,5)(X,BA,5)(X,VA,5)(X,th,5)),Y&2){nc();let He;Ce(He=De())&&(b._formFieldControl=He.first),Ce(He=De())&&(b._prefixChildren=He),Ce(He=De())&&(b._suffixChildren=He),Ce(He=De())&&(b._errorChildren=He),Ce(He=De())&&(b._hintChildren=He)}},viewQuery:function(Y,b){if(Y&1&&(tc(b._iconPrefixContainerSignal,t,5)(b._textPrefixContainerSignal,r,5)(b._iconSuffixContainerSignal,i,5)(b._textSuffixContainerSignal,o,5),Dn(a,5)(t,5)(r,5)(i,5)(o,5)(UD,5)(GD,5)($D,5)),Y&2){nc(4);let X;Ce(X=De())&&(b._textField=X.first),Ce(X=De())&&(b._iconPrefixContainer=X.first),Ce(X=De())&&(b._textPrefixContainer=X.first),Ce(X=De())&&(b._iconSuffixContainer=X.first),Ce(X=De())&&(b._textSuffixContainer=X.first),Ce(X=De())&&(b._floatingLabel=X.first),Ce(X=De())&&(b._notchedOutline=X.first),Ce(X=De())&&(b._lineRipple=X.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(Y,b){Y&2&&te("mat-mdc-form-field-label-always-float",b._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",b._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",b._hasIconSuffix)("mat-form-field-invalid",b._unwrapMaybeSignal(b._control.errorState))("mat-form-field-disabled",b._unwrapMaybeSignal(b._control.disabled))("mat-form-field-autofilled",b._unwrapMaybeSignal(b._control.autofilled))("mat-form-field-appearance-fill",b.appearance=="fill")("mat-form-field-appearance-outline",b.appearance=="outline")("mat-form-field-hide-placeholder",b._hasFloatingLabel()&&!b._shouldLabelFloat())("mat-primary",b.color!=="accent"&&b.color!=="warn")("mat-accent",b.color==="accent")("mat-warn",b.color==="warn")("ng-untouched",b._shouldForward("untouched"))("ng-touched",b._shouldForward("touched"))("ng-pristine",b._shouldForward("pristine"))("ng-dirty",b._shouldForward("dirty"))("ng-valid",b._shouldForward("valid"))("ng-invalid",b._shouldForward("invalid"))("ng-pending",b._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[lt([{provide:rh,useExisting:e},{provide:YD,useExisting:e}])],ngContentSelectors:l,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(Y,b){if(Y&1&&(Ge(s),zt(0,u,1,1,"ng-template",null,0,ga),M(2,"div",6,1),Ae("click",function(He){return b._control.onContainerClick(He)}),ge(4,p,1,0,"div",7),M(5,"div",8),ge(6,y,2,2,"div",9),ge(7,v,3,0,"div",10),ge(8,D,3,0,"div",11),M(9,"div",12),ge(10,it,1,1,null,13),ee(11),F(),ge(12,Dt,3,0,"div",14),ge(13,dt,3,0,"div",15),F(),ge(14,Be,1,0,"div",16),F(),M(15,"div",17),ge(16,Rt,2,0,"div",18)(17,ut,5,1,"div",19),F()),Y&2){let X,He=b._unwrapMaybeSignal(b._control.disabled);j(2),te("mdc-text-field--filled",!b._hasOutline())("mdc-text-field--outlined",b._hasOutline())("mdc-text-field--no-label",!b._hasFloatingLabel())("mdc-text-field--disabled",He)("mdc-text-field--invalid",b._unwrapMaybeSignal(b._control.errorState)),j(2),be(!b._hasOutline()&&!He?4:-1),j(2),be(b._hasOutline()?6:-1),j(),be(b._hasIconPrefix?7:-1),j(),be(b._hasTextPrefix?8:-1),j(2),be(!b._hasOutline()||b._forceDisplayInfixLabel()?10:-1),j(2),be(b._hasTextSuffix?12:-1),j(),be(b._hasIconSuffix?13:-1),j(),be(b._hasOutline()?-1:14),j(),te("mat-mdc-form-field-subscript-dynamic-size",b.subscriptSizing==="dynamic");let Sd=b._getSubscriptMessageType();j(),be((X=Sd)==="error"?16:X==="hint"?17:-1)}},dependencies:[UD,GD,Um,$D,th],styles:[`.mdc-text-field {
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
`],encapsulation:2})})()}return e})();var is=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Fc,Cd,we]})}return e})();var WA=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return e})(),qA={passive:!0},XD=(()=>{class e{_platform=f(de);_ngZone=f(I);_renderer=f(Fe).createRenderer(null,null);_styleLoader=f(_t);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return Tr;this._styleLoader.load(WA);let r=At(t),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new x,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(a)?(r.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(a)&&(r.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",s,qA)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(t){let r=At(t),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((t,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var ZD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();var KD=new g("MAT_INPUT_VALUE_ACCESSOR");var QD=(()=>{class e{isErrorState(t,r){return!!(t&&t.invalid&&(t.touched||r&&r.submitted))}isSignalErrorState(t){if(!t)return!1;let r=t().invalid(),i=t().touched();return r&&i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Dd=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,t,r,i,o){this._defaultMatcher=n,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o,t?pt(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==n&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,r=this.ngControl?this.ngControl.control:null;return n?.isErrorState(r,t)??!1}};var YA=["button","checkbox","file","hidden","image","radio","range","reset","submit"],XA=new g("MAT_INPUT_CONFIG"),JD=(()=>{class e{_elementRef=f(L);_platform=f(de);ngControl=f(Dr,{optional:!0,self:!0});_autofillMonitor=f(XD);_ngZone=f(I);_formField=f(rh,{optional:!0});_renderer=f(ve);_uid=f(Qe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=f(XA,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=oo(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(es.required)??!1}set required(t){this._required=oo(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&bp().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=oo(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>bp().has(t));constructor(){let t=f(Qp,{optional:!0}),r=f(ts,{optional:!0}),i=f(QD),o=f(KD,{optional:!0,self:!0}),a=f(BD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,l=s.nodeName.toLowerCase();o?pt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Dd(i,a||this.ngControl,r,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&St(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=t,t?r.setAttribute("placeholder",t):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){YA.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,r=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let r=this._elementRef.nativeElement;t.length?r.setAttribute("aria-describedby",t.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let r=t.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=N({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&Ae("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(an("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),_e("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),te("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie]},exportAs:["matInput"],features:[lt([{provide:nh,useExisting:e}]),ht]})}return e})(),ex=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[is,is,ZD,we]})}return e})();var KA=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var nx=(()=>{class e{_elementRef=f(L);_ngZone=f(I);_changeDetectorRef=f(ct);_renderer=f(ve);_cleanupTransitionEnd;constructor(){let t=yp(),r=f(KA,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=tx(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=tx(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ae;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){function t(r,i){r&1&&Ke(0,"div",2)}return Z({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,o){i&2&&(_e("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),sn("mat-"+o.color),te("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Da],bufferValue:[2,"bufferValue","bufferValue",Da],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,o){i&1&&(Pe(0,"div",0),Ke(1,"div",1),ge(2,t,1,0,"div",2),$e(),Pe(3,"div",3),Ke(4,"span",4),$e(),Pe(5,"div",5),Ke(6,"span",4),$e()),i&2&&(j(),ur("flex-basis",o._getBufferBarFlexBasis()),j(),be(o.mode==="buffer"?2:-1),j(),ur("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})})()}return e})();function tx(e,n=0,t=100){return Math.max(n,Math.min(t,e))}var rx=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[we]})}return e})();var xd=class e{#e=J("");#t=R_(()=>{if(this.#e())return`https://api.mcsrvstat.us/2/${this.#e()}`});setAddress(n){this.#e.set(n)}getStatus(){return this.#t.value}isLoading(){return this.#t.isLoading}reloadResource(){this.#t.reload()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})};function JA(e,n){if(e&1&&(M(0,"p"),le(1),ze(2,"mat-progress-bar",8),F()),e&2){let t=Ve(2);j(),ha(" Checking Server: ",t.form.value.serverIp,":",t.form.value.serverPort," ")}}function eR(e,n){if(e&1&&(le(0),wm(1,"date")),e&2){Ve(3);let t=ic(18);xn(" at ",Em(1,1,t.debug.cachetime*1e3,"yyyy/MM/dd HH:mm:ss")," ")}}function tR(e,n){if(e&1&&(ze(0,"div",9),M(1,"p"),le(2," Data will be refreshed every 5 seconds. "),F(),M(3,"p"),le(4),M(5,"strong"),le(6),F(),ge(7,eR,2,4),F(),M(8,"p"),le(9),F(),M(10,"p"),le(11),ze(12,"br"),le(13),F()),e&2){let t=Ve(2),r=ic(18);ur("background-image",t.headerImage()),j(4),xn(" Status: ",r.ip," is "),j(2),Xi(r.online?"online":"offline"),j(),be(r.debug.cachetime>0?7:-1),j(2),xn(" Description: ",r.motd.html[0]," "),j(2),xn(" Version: ",r.version," "),j(2),ha(" Players: ",r.players.online,"/",r.players.max," ")}}function nR(e,n){if(e&1&&(M(0,"mat-card",0)(1,"mat-card-content"),ge(2,JA,3,2,"p")(3,tR,14,9),F()()),e&2){let t=Ve();j(2),be(t.isLoading()&&t.isFirstRun?2:3)}}var wd=class e{#e=f(TD);#t=f(Oa);#n=f(xd);mcStatus=this.#n.getStatus();isLoading=this.#n.isLoading();isFirstRun=!0;interval=0;form;ngOnInit(){this.form=this.#e.group({serverIp:[go.serverIp],serverPort:[go.serverPort]})}onSubmit(){this.isFirstRun?(this.isFirstRun=!1,this.loadStatus(),this.startInterval()):(clearInterval(this.interval),this.loadStatus(),this.reloadStatus(),this.startInterval())}loadStatus(){this.#n.setAddress(this.form.value.serverIp+":"+this.form.value.serverPort)}reloadStatus(){this.#n.reloadResource()}startInterval(){this.interval=setInterval(()=>{this.reloadStatus()},5e3)}headerImage(){return this.mcStatus()?this.#t.bypassSecurityTrustStyle(`url('${this.mcStatus()?.icon}')`):""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=Z({type:e,selectors:[["app-dashboard"]],decls:20,vars:3,consts:[[1,"w-10/12","md:w-7/12","mx-auto"],["novalidate","",3,"ngSubmit","formGroup"],[1,"flex-col","md:flex-row","flex","gap-5"],[1,"flex-1"],["type","text","matInput","","formControlName","serverIp"],["type","text","matInput","","formControlName","serverPort"],[1,"flex"],["mat-raised-button","",1,"flex-1"],["mode","indeterminate","value","50"],[1,"h-[64px]","w-[64px]"]],template:function(t,r){if(t&1&&(M(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),le(3,"Options and run"),F()(),M(4,"mat-card-content")(5,"form",1),Ae("ngSubmit",function(){return r.onSubmit()}),M(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),le(9,"Server IP"),F(),M(10,"input",4),Yl(),F()(),M(11,"mat-form-field",3)(12,"mat-label"),le(13,"Server Port"),F(),M(14,"input",5),Yl(),F()()(),M(15,"div",6)(16,"button",7),le(17,"RUN/UPDATE"),F()()()()(),rc(18),ge(19,nR,4,1,"mat-card",0)),t&2){j(5),bt("formGroup",r.form),j(5),Xl(),j(4),Xl(),j(4);let i=xm(r.mcStatus());j(),be(i?19:-1)}},dependencies:[$c,zc,PD,RD,OD,FD,kD,id,is,Cd,rs,ex,JD,rx,nx,AD,MD,bd,SD,ID,ts,Jp,zm],encapsulation:2})};function rR(e,n){e&1&&(M(0,"h2",11),le(1,"Overview"),F(),M(2,"mat-dialog-content")(3,"p"),le(4," Shows the status of a minecraft server. "),ze(5,"br"),le(6," For demonstration I use as default my own minecraft server. "),F(),M(7,"p"),le(8,"The data is loaded by "),M(9,"a",12),le(10,"https://api.mcsrvstat.us/"),F(),le(11,"."),F()(),M(12,"mat-dialog-actions",13)(13,"button",14),le(14,"Close"),F()())}var Ed=class e{#e=f(qa);#t=f(k_);#n=f(E);appname;constructor(){this.appname=go.appname,this.#t.setTitle(this.appname),this.#n.body.classList.add(`${go.theme}-theme`)}openDialog(n){this.#e.open(n,{maxWidth:"800px"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=Z({type:e,selectors:[["app-root"]],decls:27,vars:2,consts:[["menu","matMenu"],["dialog",""],[1,"justify-between"],[1,"hidden","md:block"],["mat-button","",3,"click"],["mat-button","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["alt","GitHub Repository","src","github-mark.svg",1,"github-link"],[1,"block","md:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["mat-dialog-title",""],["href","https://api.mcsrvstat.us/","target","_blank"],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(t,r){if(t&1){let i=ma();M(0,"mat-toolbar",2),le(1),M(2,"div",3)(3,"button",4),Ae("click",function(){bn(i);let a=dr(25);return yn(r.openDialog(a))}),le(4,"Info"),F(),le(5," | "),M(6,"a",5)(7,"span"),ze(8,"img",6),F(),le(9," GitHub "),F()(),M(10,"div",7)(11,"button",8)(12,"mat-icon"),le(13,"more_vert"),F()(),M(14,"mat-menu",null,0)(16,"button",9),Ae("click",function(){bn(i);let a=dr(25);return yn(r.openDialog(a))}),M(17,"span"),le(18,"Info"),F()(),M(19,"a",10)(20,"span"),ze(21,"img",6),F(),M(22,"span"),le(23,"GitHub"),F()()()()(),zt(24,rR,15,0,"ng-template",null,1,ga),ze(26,"app-dashboard")}if(t&2){let i=dr(15);j(),xn(" ",r.appname," "),j(10),bt("matMenuTriggerFor",i)}},dependencies:[wd,$c,zc,Ep,id,PC,VC,BC,jC,XC,YC,KC,ho,Ya,ZC,JC,QC],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0;overflow-y:scroll}mat-card[_ngcontent-%COMP%], mat-progress-bar[_ngcontent-%COMP%]{margin-top:20px}.github-link[_ngcontent-%COMP%]{height:20px;top:4px;padding-right:5px;position:relative}"]})};var ix={providers:[Wu(),ip()]};Qm(Ed,ix).catch(e=>console.error(e));
