var lx=Object.defineProperty,cx=Object.defineProperties;var dx=Object.getOwnPropertyDescriptors;var sh=Object.getOwnPropertySymbols;var ux=Object.prototype.hasOwnProperty,fx=Object.prototype.propertyIsEnumerable;var lh=(e,n,t)=>n in e?lx(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,C=(e,n)=>{for(var t in n||={})ux.call(n,t)&&lh(e,t,n[t]);if(sh)for(var t of sh(n))fx.call(n,t)&&lh(e,t,n[t]);return e},W=(e,n)=>cx(e,dx(n));var ot=null,ls=!1,Sr=1,mx=null,Me=Symbol("SIGNAL");function L(e){let n=ot;return ot=e,n}function cs(){return ot}var Zn={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function En(e){if(ls)throw new Error("");if(ot===null)return;ot.consumerOnSignalRead(e);let n=ot.producersTail;if(n!==void 0&&n.producer===e)return;let t,r=ot.recomputing;if(r&&(t=n!==void 0?n.nextProducer:ot.producers,t!==void 0&&t.producer===e)){ot.producersTail=t,t.lastReadVersion=e.version,t.knownValidAtEpoch=Sr;return}let i=e.consumersTail;if(i!==void 0&&i.consumer===ot&&(!r||i.knownValidAtEpoch===Sr))return;let o=Ci(ot),a={producer:e,consumer:ot,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:Sr,lastReadVersion:e.version,nextConsumer:void 0};ot.producersTail=a,n!==void 0?n.nextProducer=a:ot.producers=a,o&&fh(e,a)}function ch(){Sr++}function Kn(e){if(!(Ci(e)&&!e.dirty)&&!(!e.dirty&&e.lastCleanEpoch===Sr)){if(!e.producerMustRecompute(e)&&!_i(e)){vi(e);return}e.producerRecomputeValue(e),vi(e)}}function Ad(e){if(e.consumers===void 0)return;let n=ls;ls=!0;try{for(let t=e.consumers;t!==void 0;t=t.nextConsumer){let r=t.consumer;r.dirty||px(r)}}finally{ls=n}}function Rd(){return ot?.consumerAllowSignalWrites!==!1}function px(e){e.dirty=!0,Ad(e),e.consumerMarkedDirty?.(e)}function vi(e){e.dirty=!1,e.lastCleanEpoch=Sr}function Sn(e){return e&&dh(e),L(e)}function dh(e){if(e.producersTail?.knownValidAtEpoch===Sr){let n=e.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}e.producersTail=void 0,e.recomputing=!0}function Qn(e,n){L(n),e&&uh(e)}function uh(e){e.recomputing=!1;let n=e.producersTail,t=n!==void 0?n.nextProducer:e.producers;if(t!==void 0){if(Ci(e))do t=kd(t);while(t!==void 0);n!==void 0?n.nextProducer=void 0:e.producers=void 0}}function _i(e){for(let n=e.producers;n!==void 0;n=n.nextProducer){let t=n.producer,r=n.lastReadVersion;if(r!==t.version||(Kn(t),r!==t.version))return!0}return!1}function Jn(e){if(Ci(e)){let n=e.producers;for(;n!==void 0;)n=kd(n)}e.producers=void 0,e.producersTail=void 0,e.consumers=void 0,e.consumersTail=void 0}function fh(e,n){let t=e.consumersTail,r=Ci(e);if(t!==void 0?(n.nextConsumer=t.nextConsumer,t.nextConsumer=n):(n.nextConsumer=void 0,e.consumers=n),n.prevConsumer=t,e.consumersTail=n,!r)for(let i=e.producers;i!==void 0;i=i.nextProducer)fh(i.producer,i)}function kd(e){let n=e.producer,t=e.nextProducer,r=e.nextConsumer,i=e.prevConsumer;if(e.nextConsumer=void 0,e.prevConsumer=void 0,r!==void 0?r.prevConsumer=i:n.consumersTail=i,i!==void 0)i.nextConsumer=r;else if(n.consumers=r,!Ci(n)){let o=n.producers;for(;o!==void 0;)o=kd(o)}return t}function Ci(e){return e.consumerIsAlwaysLive||e.consumers!==void 0}function Eo(e){mx?.(e)}function So(e,n){return Object.is(e,n)}function Io(e,n){let t=Object.create(hx);t.computation=e,n!==void 0&&(t.equal=n);let r=()=>{if(Kn(t),En(t),t.value===Ft)throw t.error;return t.value};return r[Me]=t,Eo(t),r}var Ir=Symbol("UNSET"),Mr=Symbol("COMPUTING"),Ft=Symbol("ERRORED"),hx=W(C({},Zn),{value:Ir,dirty:!0,error:null,equal:So,kind:"computed",producerMustRecompute(e){return e.value===Ir||e.value===Mr},producerRecomputeValue(e){if(e.value===Mr)throw new Error("");let n=e.value;e.value=Mr;let t=Sn(e),r,i=!1;try{r=e.computation(),L(null),i=n!==Ir&&n!==Ft&&r!==Ft&&e.equal(n,r)}catch(o){r=Ft,e.error=o}finally{Qn(e,t)}if(i){e.value=n;return}e.value=r,e.version++}});function gx(){throw new Error}var mh=gx;function ph(e){mh(e)}function Od(e){mh=e}var bx=null;function Fd(e,n){let t=Object.create(Di);t.value=e,n!==void 0&&(t.equal=n);let r=()=>hh(t);return r[Me]=t,Eo(t),[r,a=>er(t,a),a=>ds(t,a)]}function hh(e){return En(e),e.value}function er(e,n){Rd()||ph(e),e.equal(e.value,n)||(e.value=n,yx(e))}function ds(e,n){Rd()||ph(e),er(e,n(e.value))}var Di=W(C({},Zn),{equal:So,value:void 0,kind:"signal"});function yx(e){e.version++,ch(),Ad(e),bx?.(e)}var Pd=W(C({},Zn),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Ld(e){if(e.dirty=!1,e.version>0&&!_i(e))return;e.version++;let n=Sn(e);try{e.cleanup(),e.fn()}finally{Qn(e,n)}}var Vd;function us(){return Vd}function un(e){let n=Vd;return Vd=e,n}var gh=Symbol("NotFound");function xi(e){return e===gh||e?.name==="\u0275NotFound"}function jd(e,n,t){let r=Object.create(vx);r.source=e,r.computation=n,t!=null&&(r.equal=t);let o=()=>{if(Kn(r),En(r),r.value===Ft)throw r.error;return r.value};return o[Me]=r,Eo(r),o}function Bd(e,n){Kn(e),er(e,n),vi(e)}function bh(e,n){if(Kn(e),e.value===Ft)throw e.error;ds(e,n),vi(e)}var vx=W(C({},Zn),{value:Ir,dirty:!0,error:null,equal:So,kind:"linkedSignal",producerMustRecompute(e){return e.value===Ir||e.value===Mr},producerRecomputeValue(e){if(e.value===Mr)throw new Error("");let n=e.value;e.value=Mr;let t=Sn(e),r,i=!1;try{let o=e.source(),a=n!==Ir&&n!==Ft,s=a?{source:e.sourceValue,value:n}:void 0;r=e.computation(o,s),e.sourceValue=o,L(null),i=a&&r!==Ft&&e.equal(n,r)}catch(o){r=Ft,e.error=o}finally{Qn(e,t)}if(i){e.value=n;return}e.value=r,e.version++}});function yh(e){let n=L(null);try{return e()}finally{L(n)}}function q(e){return typeof e=="function"}function fs(e){let t=e(r=>{Error.call(r),r.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ms=fs(e=>function(t){e(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((r,i)=>`${i+1}) ${r.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function Nr(e,n){if(e){let t=e.indexOf(n);0<=t&&e.splice(t,1)}}var te=class e{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let o of t)o.remove(this);else t.remove(this);let{initialTeardown:r}=this;if(q(r))try{r()}catch(o){n=o instanceof ms?o.errors:[o]}let{_finalizers:i}=this;if(i){this._finalizers=null;for(let o of i)try{vh(o)}catch(a){n=n??[],a instanceof ms?n=[...n,...a.errors]:n.push(a)}}if(n)throw new ms(n)}}add(n){var t;if(n&&n!==this)if(this.closed)vh(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}}_hasParent(n){let{_parentage:t}=this;return t===n||Array.isArray(t)&&t.includes(n)}_addParent(n){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n}_removeParent(n){let{_parentage:t}=this;t===n?this._parentage=null:Array.isArray(t)&&Nr(t,n)}remove(n){let{_finalizers:t}=this;t&&Nr(t,n),n instanceof e&&n._removeParent(this)}};te.EMPTY=(()=>{let e=new te;return e.closed=!0,e})();var Hd=te.EMPTY;function ps(e){return e instanceof te||e&&"closed"in e&&q(e.remove)&&q(e.add)&&q(e.unsubscribe)}function vh(e){q(e)?e():e.unsubscribe()}var Zt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var wi={setTimeout(e,n,...t){let{delegate:r}=wi;return r?.setTimeout?r.setTimeout(e,n,...t):setTimeout(e,n,...t)},clearTimeout(e){let{delegate:n}=wi;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function hs(e){wi.setTimeout(()=>{let{onUnhandledError:n}=Zt;if(n)n(e);else throw e})}function Mo(){}var _h=zd("C",void 0,void 0);function Ch(e){return zd("E",void 0,e)}function Dh(e){return zd("N",e,void 0)}function zd(e,n,t){return{kind:e,value:n,error:t}}var Tr=null;function Ei(e){if(Zt.useDeprecatedSynchronousErrorHandling){let n=!Tr;if(n&&(Tr={errorThrown:!1,error:null}),e(),n){let{errorThrown:t,error:r}=Tr;if(Tr=null,t)throw r}}else e()}function xh(e){Zt.useDeprecatedSynchronousErrorHandling&&Tr&&(Tr.errorThrown=!0,Tr.error=e)}var Ar=class extends te{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,ps(n)&&n.add(this)):this.destination=Dx}static create(n,t,r){return new In(n,t,r)}next(n){this.isStopped?$d(Dh(n),this):this._next(n)}error(n){this.isStopped?$d(Ch(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?$d(_h,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},_x=Function.prototype.bind;function Ud(e,n){return _x.call(e,n)}var Gd=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:t}=this;if(t.next)try{t.next(n)}catch(r){gs(r)}}error(n){let{partialObserver:t}=this;if(t.error)try{t.error(n)}catch(r){gs(r)}else gs(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(t){gs(t)}}},In=class extends Ar{constructor(n,t,r){super();let i;if(q(n)||!n)i={next:n??void 0,error:t??void 0,complete:r??void 0};else{let o;this&&Zt.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),i={next:n.next&&Ud(n.next,o),error:n.error&&Ud(n.error,o),complete:n.complete&&Ud(n.complete,o)}):i=n}this.destination=new Gd(i)}};function gs(e){Zt.useDeprecatedSynchronousErrorHandling?xh(e):hs(e)}function Cx(e){throw e}function $d(e,n){let{onStoppedNotification:t}=Zt;t&&wi.setTimeout(()=>t(e,n))}var Dx={closed:!0,next:Mo,error:Cx,complete:Mo};var Si=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Kt(e){return e}function wh(e){return e.length===0?Kt:e.length===1?e[0]:function(t){return e.reduce((r,i)=>i(r),t)}}var U=class e{constructor(n){n&&(this._subscribe=n)}lift(n){let t=new e;return t.source=this,t.operator=n,t}subscribe(n,t,r){let i=wx(n)?n:new In(n,t,r);return Ei(()=>{let{operator:o,source:a}=this;i.add(o?o.call(i,a):a?this._subscribe(i):this._trySubscribe(i))}),i}_trySubscribe(n){try{return this._subscribe(n)}catch(t){n.error(t)}}forEach(n,t){return t=Eh(t),new t((r,i)=>{let o=new In({next:a=>{try{n(a)}catch(s){i(s),o.unsubscribe()}},error:i,complete:r});this.subscribe(o)})}_subscribe(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)}[Si](){return this}pipe(...n){return wh(n)(this)}toPromise(n){return n=Eh(n),new n((t,r)=>{let i;this.subscribe(o=>i=o,o=>r(o),()=>t(i))})}};U.create=e=>new U(e);function Eh(e){var n;return(n=e??Zt.Promise)!==null&&n!==void 0?n:Promise}function xx(e){return e&&q(e.next)&&q(e.error)&&q(e.complete)}function wx(e){return e&&e instanceof Ar||xx(e)&&ps(e)}function Ex(e){return q(e?.lift)}function ee(e){return n=>{if(Ex(n))return n.lift(function(t){try{return e(t,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ne(e,n,t,r,i){return new Wd(e,n,t,r,i)}var Wd=class extends Ar{constructor(n,t,r,i,o,a){super(n),this.onFinalize=o,this.shouldUnsubscribe=a,this._next=t?function(s){try{t(s)}catch(l){n.error(l)}}:super._next,this._error=i?function(s){try{i(s)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=r?function(){try{r()}catch(s){n.error(s)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var Sh=fs(e=>function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var x=class extends U{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let t=new bs(this,this);return t.operator=n,t}_throwIfClosed(){if(this.closed)throw new Sh}next(n){Ei(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let t of this.currentObservers)t.next(n)}})}error(n){Ei(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:t}=this;for(;t.length;)t.shift().error(n)}})}complete(){Ei(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:t,isStopped:r,observers:i}=this;return t||r?Hd:(this.currentObservers=null,i.push(n),new te(()=>{this.currentObservers=null,Nr(i,n)}))}_checkFinalizedStatuses(n){let{hasError:t,thrownError:r,isStopped:i}=this;t?n.error(r):i&&n.complete()}asObservable(){let n=new U;return n.source=this,n}};x.create=(e,n)=>new bs(e,n);var bs=class extends x{constructor(n,t){super(),this.destination=n,this.source=t}next(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.next)===null||r===void 0||r.call(t,n)}error(n){var t,r;(r=(t=this.destination)===null||t===void 0?void 0:t.error)===null||r===void 0||r.call(t,n)}complete(){var n,t;(t=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||t===void 0||t.call(n)}_subscribe(n){var t,r;return(r=(t=this.source)===null||t===void 0?void 0:t.subscribe(n))!==null&&r!==void 0?r:Hd}};var Rr=class extends x{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let t=super._subscribe(n);return!t.closed&&n.next(this._value),t}getValue(){let{hasError:n,thrownError:t,_value:r}=this;if(n)throw t;return this._throwIfClosed(),r}next(n){super.next(this._value=n)}};var No={now(){return(No.delegate||Date).now()},delegate:void 0};var tr=class extends x{constructor(n=1/0,t=1/0,r=No){super(),this._bufferSize=n,this._windowTime=t,this._timestampProvider=r,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,t)}next(n){let{isStopped:t,_buffer:r,_infiniteTimeWindow:i,_timestampProvider:o,_windowTime:a}=this;t||(r.push(n),!i&&r.push(o.now()+a)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let t=this._innerSubscribe(n),{_infiniteTimeWindow:r,_buffer:i}=this,o=i.slice();for(let a=0;a<o.length&&!n.closed;a+=r?1:2)n.next(o[a]);return this._checkFinalizedStatuses(n),t}_trimBuffer(){let{_bufferSize:n,_timestampProvider:t,_buffer:r,_infiniteTimeWindow:i}=this,o=(i?1:2)*n;if(n<1/0&&o<r.length&&r.splice(0,r.length-o),!i){let a=t.now(),s=0;for(let l=1;l<r.length&&r[l]<=a;l+=2)s=l;s&&r.splice(0,s+1)}}};var ys=class extends te{constructor(n,t){super()}schedule(n,t=0){return this}};var To={setInterval(e,n,...t){let{delegate:r}=To;return r?.setInterval?r.setInterval(e,n,...t):setInterval(e,n,...t)},clearInterval(e){let{delegate:n}=To;return(n?.clearInterval||clearInterval)(e)},delegate:void 0};var vs=class extends ys{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var r;if(this.closed)return this;this.state=n;let i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,t)),this.pending=!0,this.delay=t,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(o,this.id,t),this}requestAsyncId(n,t,r=0){return To.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,t,r=0){if(r!=null&&this.delay===r&&this.pending===!1)return t;t!=null&&To.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let r=this._execute(n,t);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let r=!1,i;try{this.work(n)}catch(o){r=!0,i=o||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){let{id:n,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,Nr(r,this),n!=null&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}};var Ii=class e{constructor(n,t=e.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,r){return new this.schedulerActionCtor(this,n).schedule(r,t)}};Ii.now=No.now;var _s=class extends Ii{constructor(n,t=Ii.now){super(n,t),this.actions=[],this._active=!1}flush(n){let{actions:t}=this;if(this._active){t.push(n);return}let r;this._active=!0;do if(r=n.execute(n.state,n.delay))break;while(n=t.shift());if(this._active=!1,r){for(;n=t.shift();)n.unsubscribe();throw r}}};var Ao=new _s(vs),Ih=Ao;var kr=new U(e=>e.complete());function Cs(e){return e&&q(e.schedule)}function qd(e){return e[e.length-1]}function Ds(e){return q(qd(e))?e.pop():void 0}function fn(e){return Cs(qd(e))?e.pop():void 0}function Mh(e,n){return typeof qd(e)=="number"?e.pop():n}function Th(e,n,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(d){try{c(r.next(d))}catch(f){a(f)}}function l(d){try{c(r.throw(d))}catch(f){a(f)}}function c(d){d.done?o(d.value):i(d.value).then(s,l)}c((r=r.apply(e,n||[])).next())})}function Nh(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Or(e){return this instanceof Or?(this.v=e,this):new Or(e)}function Ah(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(e,n||[]),i,o=[];return i=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),i[Symbol.asyncIterator]=function(){return this},i;function a(m){return function(h){return Promise.resolve(h).then(m,f)}}function s(m,h){r[m]&&(i[m]=function(y){return new Promise(function(v,D){o.push([m,y,v,D])>1||l(m,y)})},h&&(i[m]=h(i[m])))}function l(m,h){try{c(r[m](h))}catch(y){p(o[0][3],y)}}function c(m){m.value instanceof Or?Promise.resolve(m.value.v).then(d,f):p(o[0][2],m)}function d(m){l("next",m)}function f(m){l("throw",m)}function p(m,h){m(h),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Rh(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Nh=="function"?Nh(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(o){t[o]=e[o]&&function(a){return new Promise(function(s,l){a=e[o](a),i(s,l,a.done,a.value)})}}function i(o,a,s,l){Promise.resolve(l).then(function(c){o({value:c,done:s})},a)}}var xs=(e=>e&&typeof e.length=="number"&&typeof e!="function");function ws(e){return q(e?.then)}function Es(e){return q(e[Si])}function Ss(e){return Symbol.asyncIterator&&q(e?.[Symbol.asyncIterator])}function Is(e){return new TypeError(`You provided ${e!==null&&typeof e=="object"?"an invalid object":`'${e}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Sx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ms=Sx();function Ns(e){return q(e?.[Ms])}function Ts(e){return Ah(this,arguments,function*(){let t=e.getReader();try{for(;;){let{value:r,done:i}=yield Or(t.read());if(i)return yield Or(void 0);yield yield Or(r)}}finally{t.releaseLock()}})}function As(e){return q(e?.getReader)}function me(e){if(e instanceof U)return e;if(e!=null){if(Es(e))return Ix(e);if(xs(e))return Mx(e);if(ws(e))return Nx(e);if(Ss(e))return kh(e);if(Ns(e))return Tx(e);if(As(e))return Ax(e)}throw Is(e)}function Ix(e){return new U(n=>{let t=e[Si]();if(q(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Mx(e){return new U(n=>{for(let t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function Nx(e){return new U(n=>{e.then(t=>{n.closed||(n.next(t),n.complete())},t=>n.error(t)).then(null,hs)})}function Tx(e){return new U(n=>{for(let t of e)if(n.next(t),n.closed)return;n.complete()})}function kh(e){return new U(n=>{Rx(e,n).catch(t=>n.error(t))})}function Ax(e){return kh(Ts(e))}function Rx(e,n){var t,r,i,o;return Th(this,void 0,void 0,function*(){try{for(t=Rh(e);r=yield t.next(),!r.done;){let a=r.value;if(n.next(a),n.closed)return}}catch(a){i={error:a}}finally{try{r&&!r.done&&(o=t.return)&&(yield o.call(t))}finally{if(i)throw i.error}}n.complete()})}function mt(e,n,t,r=0,i=!1){let o=n.schedule(function(){t(),i?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(o),!i)return o}function Rs(e,n=0){return ee((t,r)=>{t.subscribe(ne(r,i=>mt(r,e,()=>r.next(i),n),()=>mt(r,e,()=>r.complete(),n),i=>mt(r,e,()=>r.error(i),n)))})}function ks(e,n=0){return ee((t,r)=>{r.add(e.schedule(()=>t.subscribe(r),n))})}function Oh(e,n){return me(e).pipe(ks(n),Rs(n))}function Fh(e,n){return me(e).pipe(ks(n),Rs(n))}function Ph(e,n){return new U(t=>{let r=0;return n.schedule(function(){r===e.length?t.complete():(t.next(e[r++]),t.closed||this.schedule())})})}function Lh(e,n){return new U(t=>{let r;return mt(t,n,()=>{r=e[Ms](),mt(t,n,()=>{let i,o;try{({value:i,done:o}=r.next())}catch(a){t.error(a);return}o?t.complete():t.next(i)},0,!0)}),()=>q(r?.return)&&r.return()})}function Os(e,n){if(!e)throw new Error("Iterable cannot be null");return new U(t=>{mt(t,n,()=>{let r=e[Symbol.asyncIterator]();mt(t,n,()=>{r.next().then(i=>{i.done?t.complete():t.next(i.value)})},0,!0)})})}function Vh(e,n){return Os(Ts(e),n)}function jh(e,n){if(e!=null){if(Es(e))return Oh(e,n);if(xs(e))return Ph(e,n);if(ws(e))return Fh(e,n);if(Ss(e))return Os(e,n);if(Ns(e))return Lh(e,n);if(As(e))return Vh(e,n)}throw Is(e)}function Pt(e,n){return n?jh(e,n):me(e)}function et(...e){let n=fn(e);return Pt(e,n)}function Yd(e,n){let t=q(e)?e:()=>e,r=i=>i.error(t());return new U(n?i=>n.schedule(r,0,i):r)}function Bh(e){return e instanceof Date&&!isNaN(e)}function pe(e,n){return ee((t,r)=>{let i=0;t.subscribe(ne(r,o=>{r.next(e.call(n,o,i++))}))})}var{isArray:kx}=Array;function Ox(e,n){return kx(n)?e(...n):e(n)}function Fs(e){return pe(n=>Ox(e,n))}var{isArray:Fx}=Array,{getPrototypeOf:Px,prototype:Lx,keys:Vx}=Object;function Ps(e){if(e.length===1){let n=e[0];if(Fx(n))return{args:n,keys:null};if(jx(n)){let t=Vx(n);return{args:t.map(r=>n[r]),keys:t}}}return{args:e,keys:null}}function jx(e){return e&&typeof e=="object"&&Px(e)===Lx}function Ls(e,n){return e.reduce((t,r,i)=>(t[r]=n[i],t),{})}function Xd(...e){let n=fn(e),t=Ds(e),{args:r,keys:i}=Ps(e);if(r.length===0)return Pt([],n);let o=new U(Bx(r,n,i?a=>Ls(i,a):Kt));return t?o.pipe(Fs(t)):o}function Bx(e,n,t=Kt){return r=>{Hh(n,()=>{let{length:i}=e,o=new Array(i),a=i,s=i;for(let l=0;l<i;l++)Hh(n,()=>{let c=Pt(e[l],n),d=!1;c.subscribe(ne(r,f=>{o[l]=f,d||(d=!0,s--),s||r.next(t(o.slice()))},()=>{--a||r.complete()}))},r)},r)}}function Hh(e,n,t){e?mt(t,e,n):n()}function zh(e,n,t,r,i,o,a,s){let l=[],c=0,d=0,f=!1,p=()=>{f&&!l.length&&!c&&n.complete()},m=y=>c<r?h(y):l.push(y),h=y=>{o&&n.next(y),c++;let v=!1;me(t(y,d++)).subscribe(ne(n,D=>{i?.(D),o?m(D):n.next(D)},()=>{v=!0},void 0,()=>{if(v)try{for(c--;l.length&&c<r;){let D=l.shift();a?mt(n,a,()=>h(D)):h(D)}p()}catch(D){n.error(D)}}))};return e.subscribe(ne(n,m,()=>{f=!0,p()})),()=>{s?.()}}function Mi(e,n,t=1/0){return q(n)?Mi((r,i)=>pe((o,a)=>n(r,o,i,a))(me(e(r,i))),t):(typeof n=="number"&&(t=n),ee((r,i)=>zh(r,i,e,t)))}function Vs(e=1/0){return Mi(Kt,e)}function Uh(){return Vs(1)}function Ni(...e){return Uh()(Pt(e,fn(e)))}function Ro(e){return new U(n=>{me(e()).subscribe(n)})}function ko(...e){let n=Ds(e),{args:t,keys:r}=Ps(e),i=new U(o=>{let{length:a}=t;if(!a){o.complete();return}let s=new Array(a),l=a,c=a;for(let d=0;d<a;d++){let f=!1;me(t[d]).subscribe(ne(o,p=>{f||(f=!0,c--),s[d]=p},()=>l--,void 0,()=>{(!l||!f)&&(c||o.next(r?Ls(r,s):s),o.complete())}))}});return n?i.pipe(Fs(n)):i}function $h(e=0,n,t=Ih){let r=-1;return n!=null&&(Cs(n)?t=n:r=n),new U(i=>{let o=Bh(e)?+e-t.now():e;o<0&&(o=0);let a=0;return t.schedule(function(){i.closed||(i.next(a++),0<=r?this.schedule(void 0,r):i.complete())},o)})}function Mn(...e){let n=fn(e),t=Mh(e,1/0),r=e;return r.length?r.length===1?me(r[0]):Vs(t)(Pt(r,n)):kr}function Ne(e,n){return ee((t,r)=>{let i=0;t.subscribe(ne(r,o=>e.call(n,o,i++)&&r.next(o)))})}function Gh(e){return ee((n,t)=>{let r=!1,i=null,o=null,a=!1,s=()=>{if(o?.unsubscribe(),o=null,r){r=!1;let c=i;i=null,t.next(c)}a&&t.complete()},l=()=>{o=null,a&&t.complete()};n.subscribe(ne(t,c=>{r=!0,i=c,o||me(e(c)).subscribe(o=ne(t,s,l))},()=>{a=!0,(!r||!o||o.closed)&&t.complete()}))})}function js(e,n=Ao){return Gh(()=>$h(e,n))}function Bs(e){return ee((n,t)=>{let r=null,i=!1,o;r=n.subscribe(ne(t,void 0,void 0,a=>{o=me(e(a,Bs(e)(n))),r?(r.unsubscribe(),r=null,o.subscribe(t)):i=!0})),i&&(r.unsubscribe(),r=null,o.subscribe(t))})}function Zd(e,n){return q(n)?Mi(e,n,1):Mi(e,1)}function Oo(e,n=Ao){return ee((t,r)=>{let i=null,o=null,a=null,s=()=>{if(i){i.unsubscribe(),i=null;let c=o;o=null,r.next(c)}};function l(){let c=a+e,d=n.now();if(d<c){i=this.schedule(void 0,c-d),r.add(i);return}s()}t.subscribe(ne(r,c=>{o=c,a=n.now(),i||(i=n.schedule(l,e),r.add(i))},()=>{s(),r.complete()},void 0,()=>{o=i=null}))})}function St(e){return e<=0?()=>kr:ee((n,t)=>{let r=0;n.subscribe(ne(t,i=>{++r<=e&&(t.next(i),e<=r&&t.complete())}))})}function Hs(e,n=Kt){return e=e??Hx,ee((t,r)=>{let i,o=!0;t.subscribe(ne(r,a=>{let s=n(a);(o||!e(i,s))&&(o=!1,i=s,r.next(a))}))})}function Hx(e,n){return e===n}function Fo(e){return ee((n,t)=>{try{n.subscribe(t)}finally{t.add(e)}})}function zs(){return ee((e,n)=>{let t,r=!1;e.subscribe(ne(n,i=>{let o=t;t=i,r&&n.next([o,i]),r=!0}))})}function Po(e={}){let{connector:n=()=>new x,resetOnError:t=!0,resetOnComplete:r=!0,resetOnRefCountZero:i=!0}=e;return o=>{let a,s,l,c=0,d=!1,f=!1,p=()=>{s?.unsubscribe(),s=void 0},m=()=>{p(),a=l=void 0,d=f=!1},h=()=>{let y=a;m(),y?.unsubscribe()};return ee((y,v)=>{c++,!f&&!d&&p();let D=l=l??n();v.add(()=>{c--,c===0&&!f&&!d&&(s=Kd(h,i))}),D.subscribe(v),!a&&c>0&&(a=new In({next:P=>D.next(P),error:P=>{f=!0,p(),s=Kd(m,t,P),D.error(P)},complete:()=>{d=!0,p(),s=Kd(m,r),D.complete()}}),me(y).subscribe(a))})(o)}}function Kd(e,n,...t){if(n===!0){e();return}if(n===!1)return;let r=new In({next:()=>{r.unsubscribe(),e()}});return me(n(...t)).subscribe(r)}function Us(e,n,t){let r,i=!1;return e&&typeof e=="object"?{bufferSize:r=1/0,windowTime:n=1/0,refCount:i=!1,scheduler:t}=e:r=e??1/0,Po({connector:()=>new tr(r,n,t),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}function Lo(e){return Ne((n,t)=>e<=t)}function pt(...e){let n=fn(e);return ee((t,r)=>{(n?Ni(e,t,n):Ni(e,t)).subscribe(r)})}function Ti(e,n){return ee((t,r)=>{let i=null,o=0,a=!1,s=()=>a&&!i&&r.complete();t.subscribe(ne(r,l=>{i?.unsubscribe();let c=0,d=o++;me(e(l,d)).subscribe(i=ne(r,f=>r.next(n?n(l,f,d,c++):f),()=>{i=null,s()}))},()=>{a=!0,s()}))})}function Lt(e){return ee((n,t)=>{me(e).subscribe(ne(t,()=>t.complete(),Mo)),!t.closed&&n.subscribe(t)})}function Fr(e,n,t){let r=q(e)||n||t?{next:e,error:n,complete:t}:e;return r?ee((i,o)=>{var a;(a=r.subscribe)===null||a===void 0||a.call(r);let s=!0;i.subscribe(ne(o,l=>{var c;(c=r.next)===null||c===void 0||c.call(r,l),o.next(l)},()=>{var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),o.complete()},l=>{var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),o.error(l)},()=>{var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Kt}var Ks="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",_=class extends Error{code;constructor(n,t){super(Rn(n,t)),this.code=n}};function zx(e){return`NG0${Math.abs(e)}`}function Rn(e,n){return`${zx(e)}${n?": "+n:""}`}function ue(e){for(let n in e)if(e[n]===ue)return n;throw Error("")}function Zh(e,n){for(let t in n)Object.hasOwn(n,t)&&!Object.hasOwn(e,t)&&(e[t]=n[t])}function Qs(e){if(typeof e=="string")return e;if(Array.isArray(e))return`[${e.map(Qs).join(", ")}]`;if(e==null)return""+e;let n=e.overriddenName||e.name;if(n)return`${n}`;let t=e.toString();if(t==null)return""+t;let r=t.indexOf(`
`);return r>=0?t.slice(0,r):t}function Js(e,n){return e?n?`${e} ${n}`:e:n||""}var Ux=ue({__forward_ref__:ue});function Vt(e){return e.__forward_ref__=Vt,e}function ze(e){return uu(e)?e():e}function uu(e){return typeof e=="function"&&Object.hasOwn(e,Ux)&&e.__forward_ref__===Vt}function K(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function B(e){return{providers:e.providers||[],imports:e.imports||[]}}function el(e){return $x(e,tl)}function $x(e,n){return Object.hasOwn(e,n)&&e[n]||null}function Gx(e){let n=e?.[tl]??null;return n||null}function Jd(e){return e&&Object.hasOwn(e,Gs)?e[Gs]:null}var tl=ue({\u0275prov:ue}),Gs=ue({\u0275inj:ue}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,t){this._desc=n,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=K({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function fu(e){return e&&!!e.\u0275providers}var Uo=ue({\u0275cmp:ue}),$o=ue({\u0275dir:ue}),mu=ue({\u0275pipe:ue});var jo=ue({\u0275fac:ue}),Br=ue({__NG_ELEMENT_ID__:ue}),Wh=ue({__NG_ENV_ID__:ue});function rr(e){return pu(e,"@Component"),e[Uo]||null}function Go(e){return pu(e,"@Directive"),e[$o]||null}function Kh(e){return pu(e,"@Pipe"),e[mu]||null}function pu(e,n){if(e==null)throw new _(-919,!1)}function Wo(e){return typeof e=="string"?e:e==null?"":String(e)}var Qh=ue({ngErrorCode:ue}),Wx=ue({ngErrorMessage:ue}),qx=ue({ngTokenPath:ue});function hu(e,n){return Jh("",-200,n)}function nl(e,n){throw new _(-201,!1)}function Jh(e,n,t){let r=new _(n,e);return r[Qh]=n,r[Wx]=e,t&&(r[qx]=t),r}function Yx(e){return e[Qh]}var eu;function eg(){return eu}function at(e){let n=eu;return eu=e,n}function gu(e,n,t){let r=el(e);if(r&&r.providedIn=="root")return r.value===void 0?r.value=r.factory():r.value;if(t&8)return null;if(n!==void 0)return n;nl(e,"")}var pn=globalThis;var Xx={},Pr=Xx,Zx="__NG_DI_FLAG__",tu=class{injector;constructor(n){this.injector=n}retrieve(n,t){let r=Lr(t)||0;try{return this.injector.get(n,r&8?null:Pr,r)}catch(i){if(xi(i))return i;throw i}}};function Kx(e,n=0){let t=us();if(t===void 0)throw new _(-203,!1);if(t===null)return gu(e,void 0,n);{let r=Qx(n),i=t.retrieve(e,r);if(xi(i)){if(r.optional)return null;throw i}return i}}function A(e,n=0){return(eg()||Kx)(ze(e),n)}function u(e,n){return A(e,Lr(n))}function Lr(e){return typeof e>"u"||typeof e=="number"?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Qx(e){return{optional:!!(e&8),host:!!(e&1),self:!!(e&2),skipSelf:!!(e&4)}}function nu(e){let n=[];for(let t=0;t<e.length;t++){let r=ze(e[t]);if(Array.isArray(r)){if(r.length===0)throw new _(900,!1);let i,o=0;for(let a=0;a<r.length;a++){let s=r[a],l=Jx(s);typeof l=="number"?l===-1?i=s.token:o|=l:i=s}n.push(A(i,o))}else n.push(A(r))}return n}function Jx(e){return e[Zx]}function nr(e,n){let t=Object.hasOwn(e,jo);return t?e[jo]:null}function tg(e,n,t){if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++){let i=e[r],o=n[r];if(t&&(i=t(i),o=t(o)),o!==i)return!1}return!0}function ng(e){return e.flat(Number.POSITIVE_INFINITY)}function rl(e,n){e.forEach(t=>Array.isArray(t)?rl(t,n):n(t))}function bu(e,n,t){n>=e.length?e.push(t):e.splice(n,0,t)}function qo(e,n){return n>=e.length-1?e.pop():e.splice(n,1)[0]}function rg(e,n){let t=[];for(let r=0;r<e;r++)t.push(n);return t}function ig(e,n,t,r){let i=e.length;if(i==n)e.push(t,r);else if(i===1)e.push(r,e[0]),e[0]=t;else{for(i--,e.push(e[i-1],e[i]);i>n;){let o=i-2;e[i]=e[o],i--}e[n]=t,e[n+1]=r}}function il(e,n,t){let r=ki(e,n);return r>=0?e[r|1]=t:(r=~r,ig(e,r,n,t)),r}function ol(e,n){let t=ki(e,n);if(t>=0)return e[t|1]}function ki(e,n){return ew(e,n,1)}function ew(e,n,t){let r=0,i=e.length>>t;for(;i!==r;){let o=r+(i-r>>1),a=e[o<<t];if(n===a)return o<<t;a>n?i=o:r=o+1}return~(i<<t)}var ir={},tt=[],Hr=new g(""),Yo=new g("",-1),yu=new g(""),Ri=class{get(n,t=Pr){if(t===Pr){let i=Jh("",-201);throw i.name="\u0275NotFound",i}return t}};function kn(e){return{\u0275providers:e}}function og(e){return kn([{provide:Hr,multi:!0,useValue:e}])}function ag(...e){return{\u0275providers:vu(!0,e),\u0275fromNgModule:!0}}function vu(e,...n){let t=[],r=new Set,i,o=a=>{t.push(a)};return rl(n,a=>{let s=a;Ws(s,o,[],r)&&(i||=[],i.push(s))}),i!==void 0&&sg(i,o),t}function sg(e,n){for(let t=0;t<e.length;t++){let{ngModule:r,providers:i}=e[t];_u(i,o=>{n(o,r)})}}function Ws(e,n,t,r){if(e=ze(e),!e)return!1;let i=null,o=Jd(e),a=!o&&rr(e);if(!o&&!a){let l=e.ngModule;if(o=Jd(l),o)i=l;else return!1}else{if(a&&!a.standalone)return!1;i=e}let s=r.has(i);if(a){if(s)return!1;if(r.add(i),a.dependencies){let l=typeof a.dependencies=="function"?a.dependencies():a.dependencies;for(let c of l)Ws(c,n,t,r)}}else if(o){if(o.imports!=null&&!s){r.add(i);let c;rl(o.imports,d=>{Ws(d,n,t,r)&&(c||=[],c.push(d))}),c!==void 0&&sg(c,n)}if(!s){let c=nr(i)||(()=>new i);n({provide:i,useFactory:c,deps:tt},i),n({provide:yu,useValue:i,multi:!0},i),n({provide:Hr,useValue:()=>A(i),multi:!0},i)}let l=o.providers;if(l!=null&&!s){let c=e;_u(l,d=>{n(d,c)})}}else return!1;return i!==e&&e.providers!==void 0}function _u(e,n){for(let t of e)fu(t)&&(t=t.\u0275providers),Array.isArray(t)?_u(t,n):n(t)}var tw=ue({provide:String,useValue:ue});function lg(e){return e!==null&&typeof e=="object"&&tw in e}function nw(e){return!!(e&&e.useExisting)}function rw(e){return!!(e&&e.useFactory)}function Vr(e){return typeof e=="function"}function cg(e){return!!e.useClass}var Xo=new g(""),$s={},qh={},Qd;function Oi(){return Qd===void 0&&(Qd=new Ri),Qd}var Ae=class{},jr=class extends Ae{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,t,r,i){super(),this.parent=t,this.source=r,this.scopes=i,iu(n,a=>this.processProvider(a)),this.records.set(Yo,Ai(void 0,this)),i.has("environment")&&this.records.set(Ae,Ai(void 0,this));let o=this.records.get(Xo);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(yu,tt,{self:!0}))}retrieve(n,t){let r=Lr(t)||0;try{return this.get(n,Pr,r)}catch(i){if(xi(i))return i;throw i}}destroy(){Vo(this),this._destroyed=!0;let n=L(null);try{for(let r of this._ngOnDestroyHooks)r.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let r of t)r()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),L(n)}}onDestroy(n){return Vo(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Vo(this);let t=un(this),r=at(void 0),i;try{return n()}finally{un(t),at(r)}}get(n,t=Pr,r){if(Vo(this),Object.hasOwn(n,Wh))return n[Wh](this);let i=Lr(r),o,a=un(this),s=at(void 0);try{if(!(i&4)){let c=this.records.get(n);if(c===void 0){let d=lw(n)&&el(n);d&&this.injectableDefInScope(d)?c=Ai(ru(n),$s):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,i)}let l=i&2?Oi():this.parent;return t=i&8&&t===Pr?null:t,l.get(n,t)}catch(l){let c=Yx(l);throw c===-200||c===-201?new _(c,null):l}finally{at(s),un(a)}}resolveInjectorInitializers(){let n=L(null),t=un(this),r=at(void 0),i;try{let o=this.get(Hr,tt,{self:!0});for(let a of o)a()}finally{un(t),at(r),L(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=ze(n);let t=Vr(n)?n:ze(n&&n.provide),r=ow(n);if(!Vr(n)&&n.multi===!0){let i=this.records.get(t);i||(i=Ai(void 0,$s,!0),i.factory=()=>nu(i.multi),this.records.set(t,i)),t=n,i.multi.push(n)}this.records.set(t,r)}hydrate(n,t,r){let i=L(null);try{if(t.value===qh)throw hu("");return t.value===$s&&(t.value=qh,t.value=t.factory(void 0,r)),typeof t.value=="object"&&t.value&&sw(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{L(i)}}injectableDefInScope(n){if(!n.providedIn)return!1;let t=ze(n.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(n){let t=this._onDestroyHooks.indexOf(n);t!==-1&&this._onDestroyHooks.splice(t,1)}};function ru(e){let n=el(e),t=n!==null?n.factory:nr(e);if(t!==null)return t;if(e instanceof g)throw new _(-204,!1);if(e instanceof Function)return iw(e);throw new _(-204,!1)}function iw(e){if(e.length>0)throw new _(-204,!1);let t=Gx(e);return t!==null?()=>t.factory(e):()=>new e}function ow(e){if(lg(e))return Ai(void 0,e.useValue);{let n=Cu(e);return Ai(n,$s)}}function Cu(e,n,t){let r;if(Vr(e)){let i=ze(e);return nr(i)||ru(i)}else if(lg(e))r=()=>ze(e.useValue);else if(rw(e))r=()=>e.useFactory(...nu(e.deps||[]));else if(nw(e))r=(i,o)=>A(ze(e.useExisting),o!==void 0&&o&8?8:void 0);else{let i=ze(e&&(e.useClass||e.provide));if(aw(e))r=()=>new i(...nu(e.deps));else return nr(i)||ru(i)}return r}function Vo(e){if(e.destroyed)throw new _(-205,!1)}function Ai(e,n,t=!1){return{factory:e,value:n,multi:t?[]:void 0}}function aw(e){return!!e.deps}function sw(e){return e!==null&&typeof e=="object"&&typeof e.ngOnDestroy=="function"}function lw(e){return typeof e=="function"||typeof e=="object"&&e.ngMetadataName==="InjectionToken"}function iu(e,n){for(let t of e)Array.isArray(t)?iu(t,n):t&&fu(t)?iu(t.\u0275providers,n):n(t)}function Fi(e,n){let t;e instanceof jr?(Vo(e),t=e):t=new tu(e);let r,i=un(t),o=at(void 0);try{return n()}finally{un(i),at(o)}}function dg(){return eg()!==void 0||us()!=null}var Qt=0,M=1,R=2,Oe=3,jt=4,Ze=5,Pi=6,Li=7,qe=8,On=9,hn=10,we=11,Vi=12,Du=13,or=14,lt=15,ar=16,zr=17,gn=18,Fn=19,xu=20,Nn=21,al=22,Tn=23,It=24,Ur=25,Pn=26,ji=27,Se=28,ug=1;var $r=7,Zo=8,Gr=9,Ye=10;function Ln(e){return Array.isArray(e)&&typeof e[ug]=="object"}function ht(e){return Array.isArray(e)&&e[ug]===!0}function wu(e){return(e.flags&4)!==0}function Vn(e){return e.componentOffset>-1}function Ko(e){return(e.flags&1)===1}function Jt(e){return!!e.template}function Bi(e){return(e[R]&512)!==0}function Wr(e){return(e[R]&256)===256}var nt=(function(e){return e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL",e[e.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",e})(nt||{});var Eu="svg",fg="math";function Ke(e){for(;Array.isArray(e);)e=e[Qt];return e}function Su(e,n){return Ke(n[e])}function Bt(e,n){return Ke(n[e.index])}function sl(e,n){return e.data[n]}function ll(e,n){return e[n]}function Qo(e,n,t,r){t>=e.data.length&&(e.data[t]=null,e.blueprint[t]=null),n[t]=r}function Ht(e,n){let t=n[e];return Ln(t)?t:t[Qt]}function mg(e){return(e[R]&4)===4}function cl(e){return(e[R]&128)===128}function pg(e){return ht(e[Oe])}function en(e,n){return n==null?null:e[n]}function Iu(e){e[zr]=0}function Mu(e){e[R]&1024||(e[R]|=1024,cl(e)&&qr(e))}function hg(e,n){for(;e>0;)n=n[or],e--;return n}function Jo(e){return!!(e[R]&9216||e[It]?.dirty)}function dl(e){e[hn].changeDetectionScheduler?.notify(8),e[R]&64&&(e[R]|=1024),Jo(e)&&qr(e)}function qr(e){e[hn].changeDetectionScheduler?.notify(0);let n=An(e);for(;n!==null&&!(n[R]&8192||(n[R]|=8192,!cl(n)));)n=An(n)}function ul(e,n){if(Wr(e))throw new _(911,!1);e[Nn]===null&&(e[Nn]=[]),e[Nn].push(n)}function gg(e,n){if(e[Nn]===null)return;let t=e[Nn].indexOf(n);t!==-1&&e[Nn].splice(t,1)}function An(e){let n=e[Oe];return ht(n)?n[Oe]:n}function Nu(e){return e[Li]??=[]}function Tu(e){return e.cleanup??=[]}function bg(e,n,t,r){let i=Nu(n);i.push(t),e.firstCreatePass&&Tu(e).push(r,i.length-1)}var $={lFrame:Ng(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var ou=!1;function yg(){return $.lFrame.elementDepthCount}function vg(){$.lFrame.elementDepthCount++}function Au(){$.lFrame.elementDepthCount--}function Ru(){return $.bindingsEnabled}function ku(){return $.skipHydrationRootTNode!==null}function Ou(e){return $.skipHydrationRootTNode===e}function Fu(){$.skipHydrationRootTNode=null}function V(){return $.lFrame.lView}function ye(){return $.lFrame.tView}function bn(e){return $.lFrame.contextLView=e,e[qe]}function yn(e){return $.lFrame.contextLView=null,e}function Xe(){let e=Pu();for(;e!==null&&e.type===64;)e=e.parent;return e}function Pu(){return $.lFrame.currentTNode}function _g(){let e=$.lFrame,n=e.currentTNode;return e.isParent?n:n.parent}function Yr(e,n){let t=$.lFrame;t.currentTNode=e,t.isParent=n}function Lu(){return $.lFrame.isParent}function Vu(){$.lFrame.isParent=!1}function ju(){return $.lFrame.contextLView}function Bu(){return ou}function Bo(e){let n=ou;return ou=e,n}function Cg(){let e=$.lFrame,n=e.bindingRootIndex;return n===-1&&(n=e.bindingRootIndex=e.tView.bindingStartIndex),n}function Dg(){return $.lFrame.bindingIndex}function xg(e){return $.lFrame.bindingIndex=e}function Hi(){return $.lFrame.bindingIndex++}function fl(e){let n=$.lFrame,t=n.bindingIndex;return n.bindingIndex=n.bindingIndex+e,t}function wg(){return $.lFrame.inI18n}function Eg(e,n){let t=$.lFrame;t.bindingIndex=t.bindingRootIndex=e,ml(n)}function Sg(){return $.lFrame.currentDirectiveIndex}function ml(e){$.lFrame.currentDirectiveIndex=e}function Ig(e){let n=$.lFrame.currentDirectiveIndex;return n===-1?null:e[n]}function pl(){return $.lFrame.currentQueryIndex}function ea(e){$.lFrame.currentQueryIndex=e}function cw(e){let n=e[M];return n.type===2?n.declTNode:n.type===1?e[Ze]:null}function Hu(e,n,t){if(t&4){let i=n,o=e;for(;i=i.parent,i===null&&!(t&1);)if(i=cw(o),i===null||(o=o[or],i.type&10))break;if(i===null)return!1;n=i,e=o}let r=$.lFrame=Mg();return r.currentTNode=n,r.lView=e,!0}function hl(e){let n=Mg(),t=e[M];$.lFrame=n,n.currentTNode=t.firstChild,n.lView=e,n.tView=t,n.contextLView=e,n.bindingIndex=t.bindingStartIndex,n.inI18n=!1}function Mg(){let e=$.lFrame,n=e===null?null:e.child;return n===null?Ng(e):n}function Ng(e){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return e!==null&&(e.child=n),n}function Tg(){let e=$.lFrame;return $.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}var zu=Tg;function gl(){let e=Tg();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Ag(e){return($.lFrame.contextLView=hg(e,$.lFrame.contextLView))[qe]}function vn(){return $.lFrame.selectedIndex}function sr(e){$.lFrame.selectedIndex=e}function ta(){let e=$.lFrame;return sl(e.tView,e.selectedIndex)}function bl(){$.lFrame.currentNamespace=Eu}function Uu(){return $.lFrame.currentNamespace}var Rg=!0;function yl(){return Rg}function vl(e){Rg=e}function au(e,n=null,t=null,r){let i=kg(e,n,t,r);return i.resolveInjectorInitializers(),i}function kg(e,n=null,t=null,r,i=new Set){let o=[t||tt,ag(e)],a;return new jr(o,n||Oi(),a||null,i)}var O=class e{static THROW_IF_NOT_FOUND=Pr;static NULL=new Ri;static create(n,t){if(Array.isArray(n))return au({name:""},t,n,"");{let r=n.name??"";return au({name:r},n.parent,n.providers,r)}}static \u0275prov=K({token:e,providedIn:"any",factory:()=>A(Yo)});static __NG_ELEMENT_ID__=-1},E=new g(""),We=class{static __NG_ELEMENT_ID__=dw;static __NG_ENV_ID__=n=>n},qs=class extends We{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Wr(this._lView)}onDestroy(n){let t=this._lView;return ul(t,n),()=>gg(t,n)}};function dw(){return new qs(V())}var Og=!1,Fg=new g(""),Xr=(()=>{class e{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Rr(!1);debugTaskTracker=u(Fg,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new U(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})(),su=class extends x{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,dg()&&(this.destroyRef=u(We,{optional:!0})??void 0,this.pendingTasks=u(Xr,{optional:!0})??void 0)}emit(n){let t=L(null);try{super.next(n)}finally{L(t)}}subscribe(n,t,r){let i=n,o=t||(()=>null),a=r;if(n&&typeof n=="object"){let l=n;i=l.next?.bind(l),o=l.error?.bind(l),a=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),i&&(i=this.wrapInTimeout(i)),a&&(a=this.wrapInTimeout(a)));let s=super.subscribe({next:i,error:o,complete:a});return n instanceof te&&n.add(s),s}wrapInTimeout(n){return t=>{let r=this.pendingTasks?.add();setTimeout(()=>{try{n(t)}finally{r!==void 0&&this.pendingTasks?.remove(r)}})}}},ae=su;function Ys(...e){}function $u(e){let n,t;function r(){e=Ys;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),n!==void 0&&clearTimeout(n)}catch{}}return n=setTimeout(()=>{e(),r()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{e(),r()})),()=>r()}function Pg(e){return queueMicrotask(()=>e()),()=>{e=Ys}}var Gu="isAngularZone",Ho=Gu+"_ID",uw=0,I=class e{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new ae(!1);onMicrotaskEmpty=new ae(!1);onStable=new ae(!1);onError=new ae(!1);constructor(n){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:r=!1,shouldCoalesceRunChangeDetection:i=!1,scheduleInRootZone:o=Og}=n;if(typeof Zone>"u")throw new _(908,!1);Zone.assertZonePatched();let a=this;a._nesting=0,a._outer=a._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(a._inner=a._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(a._inner=a._inner.fork(Zone.longStackTraceZoneSpec)),a.shouldCoalesceEventChangeDetection=!i&&r,a.shouldCoalesceRunChangeDetection=i,a.callbackScheduled=!1,a.scheduleInRootZone=o,pw(a)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Gu)===!0}static assertInAngularZone(){if(!e.isInAngularZone())throw new _(909,!1)}static assertNotInAngularZone(){if(e.isInAngularZone())throw new _(909,!1)}run(n,t,r){return this._inner.run(n,t,r)}runTask(n,t,r,i){let o=this._inner,a=o.scheduleEventTask("NgZoneEvent: "+i,n,fw,Ys,Ys);try{return o.runTask(a,t,r)}finally{o.cancelTask(a)}}runGuarded(n,t,r){return this._inner.runGuarded(n,t,r)}runOutsideAngular(n){return this._outer.run(n)}},fw={};function Wu(e){if(e._nesting==0&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function mw(e){if(e.isCheckStableRunning||e.callbackScheduled)return;e.callbackScheduled=!0;function n(){$u(()=>{e.callbackScheduled=!1,lu(e),e.isCheckStableRunning=!0,Wu(e),e.isCheckStableRunning=!1})}e.scheduleInRootZone?Zone.root.run(()=>{n()}):e._outer.run(()=>{n()}),lu(e)}function pw(e){let n=()=>{mw(e)},t=uw++;e._inner=e._inner.fork({name:"angular",properties:{[Gu]:!0,[Ho]:t,[Ho+t]:!0},onInvokeTask:(r,i,o,a,s,l)=>{if(hw(l))return r.invokeTask(o,a,s,l);try{return Yh(e),r.invokeTask(o,a,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&a.type==="eventTask"||e.shouldCoalesceRunChangeDetection)&&n(),Xh(e)}},onInvoke:(r,i,o,a,s,l,c)=>{try{return Yh(e),r.invoke(o,a,s,l,c)}finally{e.shouldCoalesceRunChangeDetection&&!e.callbackScheduled&&!gw(l)&&n(),Xh(e)}},onHasTask:(r,i,o,a)=>{r.hasTask(o,a),i===o&&(a.change=="microTask"?(e._hasPendingMicrotasks=a.microTask,lu(e),Wu(e)):a.change=="macroTask"&&(e.hasPendingMacrotasks=a.macroTask))},onHandleError:(r,i,o,a)=>(r.handleError(o,a),e.runOutsideAngular(()=>e.onError.emit(a)),!1)})}function lu(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&e.callbackScheduled===!0?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function Yh(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Xh(e){e._nesting--,Wu(e)}var zo=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new ae;onMicrotaskEmpty=new ae;onStable=new ae;onError=new ae;run(n,t,r){return n.apply(t,r)}runGuarded(n,t,r){return n.apply(t,r)}runOutsideAngular(n){return n()}runTask(n,t,r,i){return n.apply(t,r)}};function hw(e){return Lg(e,"__ignore_ng_zone__")}function gw(e){return Lg(e,"__scheduler_tick__")}function Lg(e,n){return!Array.isArray(e)||e.length!==1?!1:e[0]?.data?.[n]===!0}var st=class{_console=console;handleError(n){this._console.error("ERROR",n)}};function Vg(e){return qu(e)?e:new cu(e)}function qu(e){return e instanceof Error||typeof e=="object"&&e!==null&&typeof e.name=="string"&&typeof e.message=="string"}var cu=class extends Error{constructor(n){super(String(n),{cause:n}),this.name="ErrorBoundaryWrappedError"}},jn=new g("",{factory:()=>{let e=u(I),n=u(Ae),t;return r=>{e.runOutsideAngular(()=>{n.destroyed&&!t?setTimeout(()=>{throw r}):(t??=n.get(st),t.handleError(r))})}}}),jg={provide:Hr,useValue:()=>{let e=u(st,{optional:!0})},multi:!0},bw=new g("",{factory:()=>{let e=u(E).defaultView;if(!e)return;let n=u(jn),t=o=>{n(o.reason),o.preventDefault()},r=o=>{o.error?n(o.error):n(new Error(o.message,{cause:o})),o.preventDefault()},i=()=>{e.addEventListener("unhandledrejection",t),e.addEventListener("error",r)};typeof Zone<"u"?Zone.root.run(i):i(),u(We).onDestroy(()=>{e.removeEventListener("error",r),e.removeEventListener("unhandledrejection",t)})}});function Yu(){return kn([og(()=>{u(bw)})])}function re(e,n){let[t,r,i]=Fd(e,n?.equal),o=t,a=o[Me];return o.set=r,o.update=i,o.asReadonly=na.bind(o),o}function na(){let e=this[Me];if(e.readonlyFn===void 0){let n=()=>this();n[Me]=e,e.readonlyFn=n}return e.readonlyFn}var lr=new g("",{factory:()=>yw}),yw="ng";var _l=new g(""),Zr=new g("",{providedIn:"platform",factory:()=>"unknown"}),ra=new g(""),cr=new g("",{factory:()=>u(E).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});function Xs(){return Object.create(null)}var zi=(()=>{class e{static \u0275prov=K({token:e,providedIn:"root",factory:()=>{let t=new e;return t.store=Bg(u(E),u(lr)),t}});store=Xs();onSerializeCallbacks=Xs();get(t,r){if(!Object.hasOwn(this.store,t))return r;let i=this.store[t];return i!==void 0?i:r}set(t,r){this.store[t]=r}remove(t){delete this.store[t]}hasKey(t){return Object.hasOwn(this.store,t)}get isEmpty(){return Object.keys(this.store).length===0}onSerialize(t,r){this.onSerializeCallbacks[t]=r}toJson(){for(let t in this.onSerializeCallbacks)if(Object.hasOwn(this.onSerializeCallbacks,t))try{this.store[t]=this.onSerializeCallbacks[t]()}catch(r){console.warn("Exception in onSerialize callback: ",r)}return JSON.stringify(this.store).replace(/</g,"\\u003C").replace(/\//g,"\\u002F")}}return e})();function Bg(e,n){let t=e.getElementById(n+"-state");if(t?.tagName==="SCRIPT"&&t.textContent)try{return Object.assign(Xs(),JSON.parse(t.textContent))}catch(r){console.warn("Exception while restoring TransferState for app "+n,r)}return Xs()}var Ui=(()=>{class e{view;node;constructor(t,r){this.view=t,this.node=r}static __NG_ELEMENT_ID__=vw}return e})();function vw(){return new Ui(V(),Xe())}var mn=class{},ia=new g("",{factory:()=>!0});var Xu=new g(""),Cl=(()=>{class e{static \u0275prov=K({token:e,providedIn:"root",factory:()=>new du})}return e})(),du=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let t=n.zone,r=this.queues.get(t);r.has(n)&&(r.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let t=n.zone;this.queues.has(t)||this.queues.set(t,new Set);let r=this.queues.get(t);r.has(n)||r.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[t,r]of this.queues)t===null?n||=this.flushQueue(r):n||=t.run(()=>this.flushQueue(r));n||(this.dirtyEffectCount=0)}}flushQueue(n){let t=!1;for(let r of n)r.dirty&&(this.dirtyEffectCount--,t=!0,r.run());return t}},Zs=class{[Me];constructor(n){this[Me]=n}destroy(){this[Me].destroy()}};function Mt(e,n){let t=n?.injector??u(O),r=n?.manualCleanup!==!0?t.get(We):null,i,o=t.get(Ui,null,{optional:!0}),a=t.get(mn);return o!==null?(i=zg(o.view,a,e),r instanceof qs&&r._lView===o.view&&(r=null)):i=Dw(e,t.get(Cl),a),i.injector=t,r!==null&&(i.onDestroyFns=[r.onDestroy(()=>i.destroy())]),new Zs(i)}var Hg=W(C({},Pd),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let e=Bo(!1);try{Ld(this)}finally{Bo(e)}},cleanup(){if(!this.cleanupFns?.length)return;let e=L(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],L(e)}}}),_w=W(C({},Hg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Jn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.scheduler.remove(this)}}),Cw=W(C({},Hg),{consumerMarkedDirty(){this.view[R]|=8192,qr(this.view),this.notifier.notify(13)},destroy(){if(Jn(this),this.onDestroyFns!==null)for(let e of this.onDestroyFns)e();this.cleanup(),this.view[Tn]?.delete(this)}});function zg(e,n,t){let r=Object.create(Cw);return r.view=e,r.zone=typeof Zone<"u"?Zone.current:null,r.notifier=n,r.userFn=t,r.fn=Ug(r,t),e[Tn]??=new Set,e[Tn].add(r),r.consumerMarkedDirty(r),r}function Dw(e,n,t){let r=Object.create(_w);return r.userFn=e,r.fn=Ug(r,e),r.scheduler=n,r.notifier=t,r.zone=typeof Zone<"u"?Zone.current:null,r.scheduler.add(r),r.notifier.notify(12),r}function Ug(e,n){return()=>{n(t=>(e.cleanupFns??=[]).push(t))}}function gt(e){return typeof e=="function"&&e[Me]!==void 0}var $i=(()=>{class e{internalPendingTasks=u(Xr);scheduler=u(mn);errorHandler=u(jn);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let r=this.add();try{t().catch(this.errorHandler).finally(r)}catch(i){this.errorHandler(i),r()}}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})();var Ul=Symbol("InputSignalNode#UNSET"),Nb=W(C({},Di),{transformFn:void 0,applyValueToInputSignal(e,n){er(e,n)}});function ma(e){return{toString:e}.toString()}var ie=(function(e){return e[e.TemplateCreateStart=0]="TemplateCreateStart",e[e.TemplateCreateEnd=1]="TemplateCreateEnd",e[e.TemplateUpdateStart=2]="TemplateUpdateStart",e[e.TemplateUpdateEnd=3]="TemplateUpdateEnd",e[e.LifecycleHookStart=4]="LifecycleHookStart",e[e.LifecycleHookEnd=5]="LifecycleHookEnd",e[e.OutputStart=6]="OutputStart",e[e.OutputEnd=7]="OutputEnd",e[e.BootstrapApplicationStart=8]="BootstrapApplicationStart",e[e.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",e[e.BootstrapComponentStart=10]="BootstrapComponentStart",e[e.BootstrapComponentEnd=11]="BootstrapComponentEnd",e[e.ChangeDetectionStart=12]="ChangeDetectionStart",e[e.ChangeDetectionEnd=13]="ChangeDetectionEnd",e[e.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",e[e.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",e[e.AfterRenderHooksStart=16]="AfterRenderHooksStart",e[e.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",e[e.ComponentStart=18]="ComponentStart",e[e.ComponentEnd=19]="ComponentEnd",e[e.DeferBlockStateStart=20]="DeferBlockStateStart",e[e.DeferBlockStateEnd=21]="DeferBlockStateEnd",e[e.DynamicComponentStart=22]="DynamicComponentStart",e[e.DynamicComponentEnd=23]="DynamicComponentEnd",e[e.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",e[e.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",e})(ie||{}),Nl=class{previousValue;currentValue;firstChange;constructor(n,t,r){this.previousValue=n,this.currentValue=t,this.firstChange=r}isFirstChange(){return this.firstChange}};function Tb(e,n,t,r){n!==null?n.applyValueToInputSignal(n,r):e[t]=r}var Ab=null,bt=(()=>{Ab=$g;let e=()=>$g;return e.ngInherit=!0,e})();function Fw(){return Ab}function $g(e){return e.type.prototype.ngOnChanges&&(e.setInput=Lw),Pw}function Pw(){let e=Rb(this),n=e?.current;if(n){let t=e.previous;if(t===ir)e.previous=n;else for(let r in n)t[r]=n[r];e.current=null,this.ngOnChanges(n)}}function Lw(e,n,t,r,i){let o=this.declaredInputs[r],a=Rb(e)||Vw(e,{previous:ir,current:null}),s=a.current||(a.current={}),l=a.previous,c=l[o];s[o]=new Nl(c&&c.currentValue,t,l===ir),Tb(e,n,i,t)}var sf="__ngSimpleChanges__";function Rb(e){return Object.hasOwn(e,sf)&&e[sf]||null}function Vw(e,n){return e[sf]=n}var Gg=[];var ce=function(e,n=null,t){for(let r=0;r<Gg.length;r++){let i=Gg[r];i(e,n,t)}};function jw(e,n,t){let{ngOnChanges:r,ngOnInit:i,ngDoCheck:o}=n.type.prototype;if(r){let a=Fw()(n);(t.preOrderHooks??=[]).push(e,a),(t.preOrderCheckHooks??=[]).push(e,a)}i&&(t.preOrderHooks??=[]).push(0-e,i),o&&((t.preOrderHooks??=[]).push(e,o),(t.preOrderCheckHooks??=[]).push(e,o))}function kb(e,n){for(let t=n.directiveStart,r=n.directiveEnd;t<r;t++){let o=e.data[t].type.prototype,{ngAfterContentInit:a,ngAfterContentChecked:s,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;a&&(e.contentHooks??=[]).push(-t,a),s&&((e.contentHooks??=[]).push(t,s),(e.contentCheckHooks??=[]).push(t,s)),l&&(e.viewHooks??=[]).push(-t,l),c&&((e.viewHooks??=[]).push(t,c),(e.viewCheckHooks??=[]).push(t,c)),d!=null&&(e.destroyHooks??=[]).push(t,d)}}function El(e,n,t){Ob(e,n,3,t)}function Sl(e,n,t,r){(e[R]&3)===t&&Ob(e,n,t,r)}function Zu(e,n){let t=e[R];(t&3)===n&&(t&=16383,t+=1,e[R]=t)}function Ob(e,n,t,r){let i=r!==void 0?e[zr]&65535:0,o=r??-1,a=n.length-1,s=0;for(let l=i;l<a;l++)if(typeof n[l+1]=="number"){if(s=n[l],r!=null&&s>=r)break}else n[l]<0&&(e[zr]+=65536),(s<o||o==-1)&&(Bw(e,t,n,l),e[zr]=(e[zr]&4294901760)+l+2),l++}function Wg(e,n){ce(ie.LifecycleHookStart,e,n);let t=L(null);try{n.call(e)}finally{L(t),ce(ie.LifecycleHookEnd,e,n)}}function Bw(e,n,t,r){let i=t[r]<0,o=t[r+1],a=i?-t[r]:t[r],s=e[a];i?e[R]>>14<e[zr]>>16&&(e[R]&3)===n&&(e[R]+=16384,Wg(s,o)):Wg(s,o)}var qi=-1,Jr=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,t,r,i){this.factory=n,this.name=i,this.canSeeViewProviders=t,this.injectImpl=r}};function Hw(e){return(e.flags&8)!==0}function zw(e){return(e.flags&16)!==0}function Uw(e,n,t){let r=0;for(;r<t.length;){let i=t[r];if(typeof i=="number"){if(i!==0)break;r++;let o=t[r++],a=t[r++],s=t[r++];e.setAttribute(n,a,s,o)}else{let o=i,a=t[++r];$w(o)?e.setProperty(n,o,a):e.setAttribute(n,o,a),r++}}return r}function Fb(e){return e===3||e===4||e===6}function $w(e){return e.charCodeAt(0)===64}function Yi(e,n){if(!(n===null||n.length===0))if(e===null||e.length===0)e=n.slice();else{let t=-1;for(let r=0;r<n.length;r++){let i=n[r];typeof i=="number"?t=i:t===0||(t===-1||t===2?qg(e,t,i,null,n[++r]):qg(e,t,i,null,null))}}return e}function qg(e,n,t,r,i){let o=0,a=e.length;if(n===-1)a=-1;else for(;o<e.length;){let s=e[o++];if(typeof s=="number"){if(s===n){a=-1;break}else if(s>n){a=o-1;break}}}for(;o<e.length;){let s=e[o];if(typeof s=="number")break;if(s===t){i!==null&&(e[o+1]=i);return}o++,i!==null&&o++}a!==-1&&(e.splice(a,0,n),o=a+1),e.splice(o++,0,t),i!==null&&e.splice(o++,0,i)}function Pb(e){return e!==qi}function Tl(e){return e&32767}function Gw(e){return e>>16}function Al(e,n){let t=Gw(e),r=n;for(;t>0;)r=r[or],t--;return r}var lf=!0;function Rl(e){let n=lf;return lf=e,n}var Ww=256,Lb=Ww-1,Vb=5,qw=0,_n={};function Yw(e,n,t){let r;typeof t=="string"?r=t.charCodeAt(0)||0:Object.hasOwn(t,Br)&&(r=t[Br]),r==null&&(r=t[Br]=qw++);let i=r&Lb,o=1<<i;n.data[e+(i>>Vb)]|=o}function kl(e,n){let t=jb(e,n);if(t!==-1)return t;let r=n[M];r.firstCreatePass&&(e.injectorIndex=n.length,Ku(r.data,e),Ku(n,null),Ku(r.blueprint,null));let i=Vf(e,n),o=e.injectorIndex;if(Pb(i)){let a=Tl(i),s=Al(i,n),l=s[M].data;for(let c=0;c<8;c++)n[o+c]=s[a+c]|l[a+c]}return n[o+8]=i,o}function Ku(e,n){e.push(0,0,0,0,0,0,0,0,n)}function jb(e,n){return e.injectorIndex===-1||e.parent&&e.parent.injectorIndex===e.injectorIndex||n[e.injectorIndex+8]===null?-1:e.injectorIndex}function Vf(e,n){if(e.parent&&e.parent.injectorIndex!==-1)return e.parent.injectorIndex;let t=0,r=null,i=n;for(;i!==null;){if(r=$b(i),r===null)return qi;if(t++,i=i[or],r.injectorIndex!==-1)return r.injectorIndex|t<<16}return qi}function cf(e,n,t){Yw(e,n,t)}function Xw(e,n){if(n==="class")return e.classes;if(n==="style")return e.styles;let t=e.attrs;if(t){let r=t.length,i=0;for(;i<r;){let o=t[i];if(Fb(o))break;if(o===0)i=i+2;else if(typeof o=="number")for(i++;i<r&&typeof t[i]=="string";)i++;else{if(o===n)return t[i+1];i=i+2}}}return null}function Bb(e,n,t){if(t&8||e!==void 0)return e;nl(n,"NodeInjector")}function Hb(e,n,t,r){if(t&8&&r===void 0&&(r=null),(t&3)===0){let i=e[On],o=at(void 0);try{return i?i.get(n,r,t&8):gu(n,r,t&8)}finally{at(o)}}return Bb(r,n,t)}function zb(e,n,t,r=0,i){if(e!==null){if(n[R]&2048&&!(r&2)){let a=Jw(e,n,t,r,_n);if(a!==_n)return a}let o=Ub(e,n,t,r,_n);if(o!==_n)return o}return Hb(n,t,r,i)}function Ub(e,n,t,r,i){let o=Kw(t);if(typeof o=="function"){if(!Hu(n,e,r))return r&1?Bb(i,t,r):Hb(n,t,r,i);try{let a;if(a=o(r),a==null&&!(r&8))nl(t);else return a}finally{zu()}}else if(typeof o=="number"){let a=null,s=jb(e,n),l=qi,c=r&1?n[lt][Ze]:null;for((s===-1||r&4)&&(l=s===-1?Vf(e,n):n[s+8],l===qi||!Xg(r,!1)?s=-1:(a=n[M],s=Tl(l),n=Al(l,n)));s!==-1;){let d=n[M];if(Yg(o,s,d.data)){let f=Zw(s,n,t,a,r,c);if(f!==_n)return f}l=n[s+8],l!==qi&&Xg(r,n[M].data[s+8]===c)&&Yg(o,s,n)?(a=d,s=Tl(l),n=Al(l,n)):s=-1}}return i}function Zw(e,n,t,r,i,o){let a=n[M],s=a.data[e+8],l=r==null?Vn(s)&&lf:r!=a&&(s.type&3)!==0,c=i&1&&o===s,d=Il(s,a,t,l,c);return d!==null?la(n,a,d,s,i):_n}function Il(e,n,t,r,i){let o=e.providerIndexes,a=n.data,s=o&1048575,l=e.directiveStart,c=e.directiveEnd,d=o>>20,f=r?s:s+d,p=i?s+d:c;for(let m=f;m<p;m++){let h=a[m];if(m<l&&t===h||m>=l&&h.type===t)return m}if(i){let m=a[l];if(m&&Jt(m)&&m.type===t)return l}return null}function la(e,n,t,r,i){let o=e[t],a=n.data;if(o instanceof Jr){let s=o;if(s.resolving)throw hu("");let l=Rl(s.canSeeViewProviders);s.resolving=!0;let c=a[t].type||a[t],d,f=s.injectImpl?at(s.injectImpl):null,p=Hu(e,r,0);try{o=e[t]=s.factory(void 0,i,a,e,r),n.firstCreatePass&&t>=r.directiveStart&&jw(t,a[t],n)}finally{f!==null&&at(f),Rl(l),s.resolving=!1,zu()}}return o}function Kw(e){if(typeof e=="string")return e.charCodeAt(0)||0;let n=Object.hasOwn(e,Br)?e[Br]:void 0;return typeof n=="number"?n>=0?n&Lb:Qw:n}function Yg(e,n,t){let r=1<<e;return!!(t[n+(e>>Vb)]&r)}function Xg(e,n){return!(e&2)&&!(e&1&&n)}var Bn=class{_tNode;_lView;constructor(n,t){this._tNode=n,this._lView=t}get(n,t,r){return zb(this._tNode,this._lView,n,Lr(r),t)}};function Qw(){return new Bn(Xe(),V())}function Tt(e){return ma(()=>{let n=e.prototype.constructor,t=n[jo]||df(n),r=Object.prototype,i=Object.getPrototypeOf(e.prototype).constructor;for(;i&&i!==r;){let o=i[jo]||df(i);if(o&&o!==t)return o;i=Object.getPrototypeOf(i)}return o=>new o})}function df(e){return uu(e)?()=>{let n=df(ze(e));return n&&n()}:nr(e)}function Jw(e,n,t,r,i){let o=e,a=n;for(;o!==null&&a!==null&&a[R]&2048&&!Bi(a);){let s=Ub(o,a,t,r|2,_n);if(s!==_n)return s;r&=-5;let l=o.parent;if(!l){let c=a[xu];if(c){let d=c.get(t,_n,r);if(d!==_n)return d}l=$b(a),a=a[or]}o=l}return i}function $b(e){let n=e[M],t=n.type;return t===2?n.declTNode:t===1?e[Ze]:null}function jf(e){return Xw(Xe(),e)}function S(e){return{token:e.token,providedIn:e.autoProvided===!1?null:"root",factory:e.factory,value:void 0}}function eE(){return Qi(Xe(),V())}function Qi(e,n){return new F(Bt(e,n))}var F=(()=>{class e{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=eE}return e})();function Gb(e){return e instanceof F?e.nativeElement:e}function tE(){return this._results[Symbol.iterator]()}var Hn=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new x}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,t){return this._results.reduce(n,t)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,t){this.dirty=!1;let r=ng(n);(this._changesDetected=!tg(this._results,r,t))&&(this._results=r,this.length=r.length,this.last=r[this.length-1],this.first=r[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=tE};function Wb(e){return(e.flags&128)===128}var Bf=(function(e){return e[e.OnPush=0]="OnPush",e[e.Eager=1]="Eager",e[e.Default=1]="Default",e})(Bf||{}),qb=new Map,nE=0;function rE(){return nE++}function iE(e){qb.set(e[Fn],e)}function uf(e){qb.delete(e[Fn])}var Zg="__ngContext__";function Xi(e,n){Ln(n)?(e[Zg]=n[Fn],iE(n)):e[Zg]=n}function Yb(e){return Zb(e[Vi])}function Xb(e){return Zb(e[jt])}function Zb(e){for(;e!==null&&!ht(e);)e=e[jt];return e}var ff;function Hf(e){ff=e}function Kb(){if(ff!==void 0)return ff;if(typeof document<"u")return document;throw new _(210,!1)}var Qb=!1,Jb=new g("",{factory:()=>Qb});var Kg=new WeakMap;function oE(e,n){if(e==null||typeof e!="object")return;let t=Kg.get(e);t||(t=new WeakSet,Kg.set(e,t)),t.add(n)}var aE=(e,n,t,r)=>{};function sE(e,n,t,r){aE(e,n,t,r)}function $l(e){return(e.flags&32)===32}var lE=()=>null;function ey(e,n,t=!1){return lE(e,n,t)}function ty(e,n){let t=e.contentQueries;if(t!==null){let r=L(null);try{for(let i=0;i<t.length;i+=2){let o=t[i],a=t[i+1];if(a!==-1){let s=e.data[a];ea(o),s.contentQueries(2,n[a],a)}}}finally{L(r)}}}function mf(e,n,t){ea(0);let r=L(null);try{n(e,t)}finally{L(r)}}function ny(e,n,t){if(wu(n)){let r=L(null);try{let i=n.directiveStart,o=n.directiveEnd;for(let a=i;a<o;a++){let s=e.data[a];if(s.contentQueries){let l=t[a];s.contentQueries(1,l,a)}}}finally{L(r)}}}var rn=(function(e){return e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e[e.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",e})(rn||{});var Dl;function cE(){if(Dl===void 0&&(Dl=null,pn.trustedTypes))try{Dl=pn.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return Dl}function Gl(e){return cE()?.createHTML(e)||e}var zn=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Ks})`}},pf=class extends zn{getTypeName(){return"HTML"}},hf=class extends zn{getTypeName(){return"Style"}},gf=class extends zn{getTypeName(){return"Script"}},bf=class extends zn{getTypeName(){return"URL"}},yf=class extends zn{getTypeName(){return"ResourceURL"}};function Cn(e){return e instanceof zn?e.changingThisBreaksApplicationSecurity:e}function ri(e,n){let t=ry(e);if(t!=null&&t!==n){if(t==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${t} (see ${Ks})`)}return t===n}function ry(e){return e instanceof zn&&e.getTypeName()||null}function zf(e){return new pf(e)}function Uf(e){return new hf(e)}function $f(e){return new gf(e)}function Gf(e){return new bf(e)}function Wf(e){return new yf(e)}function dE(e){let n=new _f(e);return uE()?new vf(n):n}var vf=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let t=new window.DOMParser().parseFromString(Gl(n),"text/html").body;return t===null?this.inertDocumentHelper.getInertBodyElement(n):(t.firstChild?.remove(),t)}catch{return null}}},_f=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let t=this.inertDocument.createElement("template");return t.innerHTML=Gl(n),t}};function uE(){try{return!!new window.DOMParser().parseFromString(Gl(""),"text/html")}catch{return!1}}var fE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Wl(e){return e=String(e),e.match(fE)?e:"unsafe:"+e}function $n(e){let n=Object.create(null);for(let t of e.split(","))n[t]=!0;return n}function pa(...e){let n=Object.create(null);for(let t of e)for(let r in t)Object.hasOwn(t,r)&&(n[r]=!0);return n}var iy=$n("area,br,col,hr,img,wbr"),oy=$n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ay=$n("rp,rt"),mE=pa(ay,oy),pE=pa(oy,$n("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),hE=pa(ay,$n("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Qg=pa(iy,pE,hE,mE),sy=$n("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),gE=$n("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),bE=$n("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),yE=pa(sy,gE,bE),vE=$n("script,style,template"),Cf=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let t=n.firstChild,r=!0,i=[];for(;t;){if(t.nodeType===Node.ELEMENT_NODE?r=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,r&&t.firstChild){i.push(t),t=DE(t);continue}for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let o=CE(t);if(o){t=o;break}t=i.pop()}}return this.buf.join("")}startElement(n){let t=Jg(n).toLowerCase();if(!Object.hasOwn(Qg,t))return this.sanitizedSomething=!0,!Object.hasOwn(vE,t);this.buf.push("<"),this.buf.push(t);let r=n.attributes;for(let i=0;i<r.length;i++){let o=r.item(i),a=o.name,s=a.toLowerCase();if(!Object.hasOwn(yE,s)){this.sanitizedSomething=!0;continue}let l=o.value;sy[s]&&(l=Wl(l)),this.buf.push(" ",a,'="',eb(l),'"')}return this.buf.push(">"),!0}endElement(n){let t=Jg(n).toLowerCase();Object.hasOwn(Qg,t)&&!Object.hasOwn(iy,t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(n){this.buf.push(eb(n))}};function _E(e,n){return(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function CE(e){let n=e.nextSibling;if(n&&e!==n.previousSibling)throw ly(n);return n}function DE(e){let n=e.firstChild;if(n&&_E(e,n))throw ly(n);return n}function Jg(e){let n=e.nodeName;return typeof n=="string"?n:"FORM"}function ly(e){return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`)}var xE=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,wE=/([^\#-~ |!])/g;function eb(e){return e.replace(/&/g,"&amp;").replace(xE,function(n){let t=n.charCodeAt(0),r=n.charCodeAt(1);return"&#"+((t-55296)*1024+(r-56320)+65536)+";"}).replace(wE,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var xl;function qf(e,n){let t=null;try{xl=xl||dE(e);let r=n?String(n):"";t=xl.getInertBodyElement(r);let i=5,o=r;do{if(i===0)throw new Error("Failed to sanitize html because the input is unstable");i--,r=o,o=t.innerHTML,t=xl.getInertBodyElement(r)}while(r!==o);let s=new Cf().sanitizeChildren(tb(t)||t);return Gl(s)}finally{if(t){let r=tb(t)||t;for(;r.firstChild;)r.firstChild.remove()}}}function tb(e){return"content"in e&&EE(e)?e.content:null}function EE(e){return e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="TEMPLATE"}function SE(e,n){return e.createText(n)}function IE(e,n,t){e.setValue(n,t)}function cy(e,n,t){return e.createElement(n,t)}function Kr(e,n,t,r,i){e.insertBefore(n,t,r,i)}function dy(e,n,t){e.appendChild(n,t)}function nb(e,n,t,r,i){r!==null?Kr(e,n,t,r,i):dy(e,n,t)}function ME(e,n,t,r){e.removeChild(null,n,t,r)}function NE(e,n,t){e.setAttribute(n,"style",t)}function TE(e,n,t){t===""?e.removeAttribute(n,"class"):e.setAttribute(n,"class",t)}function uy(e,n,t){let{mergedAttrs:r,classes:i,styles:o}=t;r!==null&&Uw(e,n,r),i!==null&&TE(e,n,i),o!==null&&NE(e,n,o)}function AE(e,n,t){let r=e.length;for(;;){let i=e.indexOf(n,t);if(i===-1)return i;if(i===0||e.charCodeAt(i-1)<=32){let o=n.length;if(i+o===r||e.charCodeAt(i+o)<=32)return i}t=i+1}}var fy="ng-template";function RE(e,n,t,r){let i=0;if(r){for(;i<n.length&&typeof n[i]=="string";i+=2)if(n[i]==="class"&&AE(n[i+1].toLowerCase(),t,0)!==-1)return!0}else if(Yf(e))return!1;if(i=n.indexOf(1,i),i>-1){let o;for(;++i<n.length&&typeof(o=n[i])=="string";)if(o.toLowerCase()===t)return!0}return!1}function Yf(e){return e.type===4&&e.value!==fy}function kE(e,n,t){let r=e.type===4&&!t?fy:e.value;return n===r}function OE(e,n,t){let r=4,i=e.attrs,o=i!==null?LE(i):0,a=!1;for(let s=0;s<n.length;s++){let l=n[s];if(typeof l=="number"){if(!a&&!tn(r)&&!tn(l))return!1;if(a&&tn(l))continue;a=!1,r=l|r&1;continue}if(!a)if(r&4){if(r=2|r&1,l!==""&&!kE(e,l,t)||l===""&&n.length===1){if(tn(r))return!1;a=!0}}else if(r&8){if(i===null||!RE(e,i,l,t)){if(tn(r))return!1;a=!0}}else{let c=n[++s],d=FE(l,i,Yf(e),t);if(d===-1){if(tn(r))return!1;a=!0;continue}if(c!==""){let f;if(d>o?f="":f=i[d+1].toLowerCase(),r&2&&c!==f){if(tn(r))return!1;a=!0}}}}return tn(r)||a}function tn(e){return(e&1)===0}function FE(e,n,t,r){if(n===null)return-1;let i=0;if(r||!t){let o=!1;for(;i<n.length;){let a=n[i];if(a===e)return i;if(a===3||a===6)o=!0;else if(a===1||a===2){let s=n[++i];for(;typeof s=="string";)s=n[++i];continue}else{if(a===4)break;if(a===0){i+=4;continue}}i+=o?1:2}return-1}else return VE(n,e)}function my(e,n,t=!1){for(let r=0;r<n.length;r++)if(OE(e,n[r],t))return!0;return!1}function PE(e){let n=e.attrs;if(n!=null){let t=n.indexOf(5);if((t&1)===0)return n[t+1]}return null}function LE(e){for(let n=0;n<e.length;n++){let t=e[n];if(Fb(t))return n}return e.length}function VE(e,n){let t=e.indexOf(4);if(t>-1)for(t++;t<e.length;){let r=e[t];if(typeof r=="number")return-1;if(r===n)return t;t++}return-1}function jE(e,n){e:for(let t=0;t<n.length;t++){let r=n[t];if(e.length===r.length){for(let i=0;i<e.length;i++)if(e[i]!==r[i])continue e;return!0}}return!1}function rb(e,n){return e?":not("+n.trim()+")":n}function BE(e){let n=e[0],t=1,r=2,i="",o=!1;for(;t<e.length;){let a=e[t];if(typeof a=="string")if(r&2){let s=e[++t];i+="["+a+(s.length>0?'="'+s+'"':"")+"]"}else r&8?i+="."+a:r&4&&(i+=" "+a);else i!==""&&!tn(a)&&(n+=rb(o,i),i=""),r=a,o=o||!tn(r);t++}return i!==""&&(n+=rb(o,i)),n}function HE(e){return e.map(BE).join(",")}function zE(e){let n=[],t=[],r=1,i=2;for(;r<e.length;){let o=e[r];if(typeof o=="string")i===2?o!==""&&n.push(o,e[++r]):i===8&&t.push(o);else{if(!tn(i))break;i=o}r++}return t.length&&n.push(1,...t),n}var yt={},Dn=(function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e})(Dn||{}),UE;function Xf(e,n){return UE(e,n)}var ei=new Set;var YV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Df=new WeakMap;function py(e){return e?e[or]??e:null}var Gi=new WeakSet;function $E(e,n,t){let r=Df.get(e);if(!r||r.length===0)return;let i=n.parentNode,o=n.previousSibling,a=py(t);for(let s=r.length-1;s>=0;s--){let{el:l,declarationView:c}=r[s],d=l.parentNode;l===n?(r.splice(s,1),Gi.add(l),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):o&&l===o?(r.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l)):d&&i&&d!==i&&(a===null||c===null||a===c)&&(r.splice(s,1),l.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),l.parentNode?.removeChild(l))}}function GE(e,n,t){let r=py(t),i=Df.get(e);i?i.some(o=>o.el===n)||i.push({el:n,declarationView:r}):Df.set(e,[{el:n,declarationView:r}])}var ql=(function(e){return e[e.CHANGE_DETECTION=0]="CHANGE_DETECTION",e[e.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",e})(ql||{}),on=new g(""),ib=new Set;function Gn(e){ib.has(e)||(ib.add(e),performance?.mark?.("mark_feature_usage",{detail:{feature:e}}))}var Yl=(()=>{class e{impl=null;execute(){this.impl?.execute()}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})(),Zf=[0,1,2,3],Kf=(()=>{class e{ngZone=u(I);scheduler=u(mn);errorHandler=u(st,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(on,{optional:!0})}execute(){let t=this.sequences.size>0;t&&ce(ie.AfterRenderHooksStart),this.executing=!0;for(let r of Zf)for(let i of this.sequences)if(!(i.erroredOrDestroyed||!i.hooks[r]))try{i.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=i.hooks[r];return o(i.pipelinedValue)},i.snapshot))}catch(o){i.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let r of this.sequences)r.afterRun(),r.once&&(this.sequences.delete(r),r.destroy());for(let r of this.deferredRegistrations)this.sequences.add(r);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),t&&ce(ie.AfterRenderHooksEnd)}register(t){let{view:r}=t;r!==void 0?((r[Ur]??=[]).push(t),qr(r),r[R]|=8192):this.executing?this.deferredRegistrations.add(t):this.addSequence(t)}addSequence(t){this.sequences.add(t),this.scheduler.notify(7)}unregister(t){this.executing&&this.sequences.has(t)?(t.erroredOrDestroyed=!0,t.pipelinedValue=void 0,t.once=!0):(this.sequences.delete(t),this.deferredRegistrations.delete(t))}maybeTrace(t,r){return r?r.run(ql.AFTER_NEXT_RENDER,t):t()}static \u0275prov=K({token:e,providedIn:"root",factory:()=>new e})}return e})(),ca=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,t,r,i,o,a=null){this.impl=n,this.hooks=t,this.view=r,this.once=i,this.snapshot=a,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Ur];n&&(this.view[Ur]=n.filter(t=>t!==this))}};function zt(e,n){let t=n?.injector??u(O);return Gn("NgAfterNextRender"),qE(e,t,n,!0)}function WE(e){return e instanceof Function?[void 0,void 0,e,void 0]:[e.earlyRead,e.write,e.mixedReadWrite,e.read]}function qE(e,n,t,r){let i=n.get(Yl);i.impl??=n.get(Kf);let o=n.get(on,null,{optional:!0}),a=t?.manualCleanup!==!0?n.get(We):null,s=n.get(Ui,null,{optional:!0}),l=new ca(i.impl,WE(e),s?.view,r,a,o?.snapshot(null));return i.impl.register(l),l}var hy=new g("",{factory:()=>{let e=u(Ae),n=new Set;return e.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:e}}});function gy(e,n,t){let r=e.get(hy);if(Array.isArray(n))for(let i of n)r.queue.add(i),t?.detachedLeaveAnimationFns?.push(i);else r.queue.add(n),t?.detachedLeaveAnimationFns?.push(n);r.scheduler&&r.scheduler(e)}function YE(e,n){let t=e.get(hy);if(Array.isArray(n))for(let r of n)t.queue.delete(r);else t.queue.delete(n)}function XE(e,n){for(let[t,r]of n)gy(e,r.animateFns)}function ob(e,n,t,r){let i=e?.[Pn]?.enter;n!==null&&i&&i.has(t.index)&&XE(r,i)}function ab(e,n,t,r){try{t.get(Yo)}catch{return r(!1)}let i=e?e[Pn]??={}:void 0;i?.enter?.has(n.index)&&YE(t,i.enter.get(n.index).animateFns);let o=ZE(e,n,i);if(o.size===0&&!(e?Qf(e,n):!1))return r(!1);e&&ei.add(e[Fn]),gy(t,()=>KE(e,n,i,o,r),i)}function ZE(e,n,t){let r=new Map,i=t?.leave;if(i&&i.has(n.index)&&r.set(n.index,i.get(n.index)),e&&i)for(let[o,a]of i){if(r.has(o))continue;let l=e[M].data[o].parent;for(;l;){if(l===n){r.set(o,a);break}l=l.parent}}return r}function KE(e,n,t,r,i){let o=[];if(t&&t.leave)for(let[a]of r){if(!t.leave.has(a))continue;let s=t.leave.get(a);for(let l of s.animateFns){let{promise:c}=l();o.push(c)}t.detachedLeaveAnimationFns=void 0}if(e&&Jf(e,n,o),o.length>0){let a=t||e?.[Pn];if(a){let s=a.running;s&&o.push(s),a.running=Promise.allSettled(o),eS(e,a.running,i)}else Promise.allSettled(o).then(()=>{e&&ei.delete(e[Fn]),i(!0)})}else e&&ei.delete(e[Fn]),i(!1)}function Qf(e,n){if(n.type&12){let r=e[n.index];if(ht(r))for(let i=Ye;i<r.length;i++){let o=r[i];if(o[M].type===2&&QE(o))return!0}}let t=n.child;for(;t;){if(Qf(e,t))return!0;t=t.next}return!1}function QE(e){let n=e[Pn];if(n?.leave&&n.leave.size>0)return!0;let t=e[M].firstChild;for(;t;){if(Qf(e,t))return!0;t=t.next}return!1}function Jf(e,n,t){if(n.type&12){let i=e[n.index];if(ht(i))for(let o=Ye;o<i.length;o++){let a=i[o];a[M].type===2&&JE(a,t)}}let r=n.child;for(;r;)Jf(e,r,t),r=r.next}function JE(e,n){let t=e[Pn];if(t&&t.leave)for(let i of t.leave.values())for(let o of i.animateFns){let{promise:a}=o();n.push(a)}let r=e[M].firstChild;for(;r;)Jf(e,r,n),r=r.next}function eS(e,n,t){n.then(()=>{e[Pn]?.running===n&&(e[Pn].running=void 0,ei.delete(e[Fn])),t(!0)})}function Wi(e,n,t,r,i,o,a,s){if(i!=null){let l,c=!1;ht(i)?l=i:Ln(i)&&(c=!0,i=i[Qt]);let d=Ke(i);e===0&&r!==null?(ob(s,r,o,t),a==null?dy(n,r,d):Kr(n,r,d,a||null,!0)):e===1&&r!==null?(Kr(n,r,d,a||null,!0),$E(o,d,s),Gi.has(d)||ob(s,r,o,t)):e===2?(s?.[Pn]?.leave?.has(o.index)&&GE(o,d,s),Gi.delete(d),ab(s,o,t,f=>{if(Gi.has(d)){Gi.delete(d);return}ME(n,d,c,f)})):e===3&&(Gi.delete(d),ab(s,o,t,()=>{n.destroyNode(d)})),l!=null&&uS(n,e,t,l,o,r,a)}}function tS(e,n){by(e,n),n[Qt]=null,n[Ze]=null}function nS(e,n,t,r,i,o){r[Qt]=i,r[Ze]=n,Xl(e,r,t,1,i,o)}function by(e,n){n[hn].changeDetectionScheduler?.notify(9),Xl(e,n,n[we],2,null,null)}function rS(e){let n=e[Vi];if(!n)return Qu(e[M],e);for(;n;){let t=null;if(Ln(n))t=n[Vi];else{let r=n[Ye];r&&(t=r)}if(!t){for(;n&&!n[jt]&&n!==e;)Ln(n)&&Qu(n[M],n),n=n[Oe];n===null&&(n=e),Ln(n)&&Qu(n[M],n),t=n&&n[jt]}n=t}}function em(e,n){let t=e[Gr],r=t.indexOf(n);t.splice(r,1)}function tm(e,n){if(Wr(n))return;let t=n[we];t.destroyNode&&Xl(e,n,t,3,null,null),rS(n)}function Qu(e,n){if(Wr(n))return;let t=L(null);try{n[R]&=-129,n[R]|=256,n[It]&&Jn(n[It]),oS(e,n),iS(e,n),n[M].type===1&&n[we].destroy();let r=n[ar];if(r!==null&&ht(n[Oe])){r!==n[Oe]&&em(r,n);let i=n[gn];i!==null&&i.detachView(e)}uf(n)}finally{L(t)}}function iS(e,n){let t=e.cleanup,r=n[Li];if(t!==null)for(let a=0;a<t.length-1;a+=2)if(typeof t[a]=="string"){let s=t[a+3];s>=0?r[s]():r[-s].unsubscribe(),a+=2}else{let s=r[t[a+1]];t[a].call(s)}r!==null&&(n[Li]=null);let i=n[Nn];if(i!==null){n[Nn]=null;for(let a=0;a<i.length;a++){let s=i[a];s()}}let o=n[Tn];if(o!==null){n[Tn]=null;for(let a of o)a.destroy()}}function oS(e,n){let t;if(e!=null&&(t=e.destroyHooks)!=null)for(let r=0;r<t.length;r+=2){let i=n[t[r]];if(!(i instanceof Jr)){let o=t[r+1];if(Array.isArray(o))for(let a=0;a<o.length;a+=2){let s=i[o[a]],l=o[a+1];ce(ie.LifecycleHookStart,s,l);try{l.call(s)}finally{ce(ie.LifecycleHookEnd,s,l)}}else{ce(ie.LifecycleHookStart,i,o);try{o.call(i)}finally{ce(ie.LifecycleHookEnd,i,o)}}}}}function yy(e,n,t){if(n===null)throw new _(510,!1);return aS(e,n.parent,t)}function aS(e,n,t){let r=n;for(;r!==null&&r.type&168;)n=r,r=n.parent;if(r===null)return t[Qt];if(Vn(r)){let{encapsulation:i}=e.data[r.directiveStart+r.componentOffset];if(i===rn.None||i===rn.Emulated)return null}return Bt(r,t)}function vy(e,n,t){return lS(e,n,t)}function sS(e,n,t){return e.type&40?Bt(e,t):null}var lS=sS,sb;function nm(e,n,t,r){let i=yy(e,r,n),o=n[we],a=r.parent||n[Ze],s=vy(a,r,n);if(i!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)nb(o,i,t[l],s,!1);else nb(o,i,t,s,!1);sb!==void 0&&sb(o,r,n,t,i)}function aa(e,n){if(n!==null){let t=n.type;if(t&3)return Bt(n,e);if(t&4)return xf(-1,e[n.index]);if(t&8){let r=n.child;if(r!==null)return aa(e,r);{let i=e[n.index];return ht(i)?xf(-1,i):Ke(i)}}else{if(t&128)return aa(e,n.next);if(t&32)return Xf(n,e)()||Ke(e[n.index]);{let r=_y(e,n);if(r!==null){if(Array.isArray(r))return r[0];let i=An(e[lt]);return aa(i,r)}else return aa(e,n.next)}}}return null}function _y(e,n){if(n!==null){let r=e[lt][Ze],i=n.projection;return r.projection[i]}return null}function xf(e,n){let t=Ye+e+1;if(t<n.length){let r=n[t],i=r[M].firstChild;if(i!==null)return aa(r,i)}return n[$r]}function rm(e,n,t,r,i,o,a){for(;t!=null;){let s=r[On];if(t.type===128){t=t.next;continue}let l=r[t.index],c=t.type;if(a&&n===0&&(l&&Xi(Ke(l),r),t.flags|=2),!$l(t))if(c&8)rm(e,n,t.child,r,i,o,!1),Wi(n,e,s,i,l,t,o,r);else if(c&32){let d=Xf(t,r),f;for(;f=d();)Wi(n,e,s,i,f,t,o,r);Wi(n,e,s,i,l,t,o,r)}else c&16?Cy(e,n,r,t,i,o):Wi(n,e,s,i,l,t,o,r);t=a?t.projectionNext:t.next}}function Xl(e,n,t,r,i,o){e.type===3?cS(t,r,n,i,o):rm(t,r,e.firstChild,n,i,o,!1)}function cS(e,n,t,r,i){let a=t[M].firstChild,s=a.next,l=Ke(t[a.index]),c=Ke(t[s.index]),d=s.index+1,f=t[d];if(n===1||n===0)r!==null&&(f&&f.hasChildNodes()?Kr(e,r,f,i,!0):(Kr(e,r,l,i,!0),Kr(e,r,c,i,!0)));else if(n===2){if(f||(f=document.createDocumentFragment(),t[d]=f),l&&l.parentNode===f)return;let p=l;for(;p!==null;){let m=p.nextSibling;if(f.appendChild(p),p===c)break;p=m}}}function dS(e,n,t){let r=n[we],i=yy(e,t,n),o=t.parent||n[Ze],a=vy(o,t,n);Cy(r,0,n,t,i,a)}function Cy(e,n,t,r,i,o){let a=t[lt],l=a[Ze].projection[r.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Wi(n,e,t[On],i,d,r,o,t)}else{let c=l,d=a[Oe];Wb(r)&&(c.flags|=128),rm(e,n,c,d,i,o,!0)}}function uS(e,n,t,r,i,o,a){let s=r[$r],l=Ke(r);if(s!==l&&Wi(n,e,t,o,s,i,a),(r[R]&4)===0)for(let c=Ye;c<r.length;c++){let d=r[c];Xl(d[M],d,e,n,o,s)}}function fS(e,n,t,r,i){if(n)i?e.addClass(t,r):e.removeClass(t,r);else{let o=r.indexOf("-")===-1?void 0:Dn.DashCase;i==null?e.removeStyle(t,r,o):(typeof i=="string"&&i.endsWith("!important")&&(i=i.slice(0,-10),o|=Dn.Important),e.setStyle(t,r,i,o))}}function im(e,n,t,r,i,o,a,s,l,c,d){let f=Se+r,p=f+i,m=mS(f,p),h=typeof c=="function"?c():c;return m[M]={type:e,blueprint:m,template:t,queries:null,viewQuery:s,declTNode:n,data:m.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:p,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof a=="function"?a():a,firstChild:null,schemas:l,consts:h,incompleteFirstPass:!1,ssrId:d}}function mS(e,n){let t=[];for(let r=0;r<n;r++)t.push(r<e?null:yt);return t}function pS(e){let n=e.tView;return n===null||n.incompleteFirstPass?e.tView=im(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts,e.id):n}function om(e,n,t,r,i,o,a,s,l,c,d){let f=n.blueprint.slice();return f[Qt]=i,f[R]=r|4|128|8|64|1024,(c!==null||e&&e[R]&2048)&&(f[R]|=2048),Iu(f),f[Oe]=f[or]=e,f[qe]=t,f[hn]=a||e&&e[hn],f[we]=s||e&&e[we],f[On]=l||e&&e[On]||null,f[Ze]=o,f[Fn]=rE(),f[Pi]=d,f[xu]=c,f[lt]=n.type==2?e[lt]:f,f}function hS(e,n,t){let r=Bt(n,e),i=pS(t),o=e[hn].rendererFactory,a=am(e,om(e,i,null,Dy(t),r,n,null,o.createRenderer(r,t),null,null,null));return e[n.index]=a}function Dy(e){let n=16;return e.signals?n=4096:e.onPush&&(n=64),n}function xy(e,n,t,r){if(t===0)return-1;let i=n.length;for(let o=0;o<t;o++)n.push(r),e.blueprint.push(r),e.data.push(null);return i}function am(e,n){return e[Vi]?e[Du][jt]=n:e[Vi]=n,e[Du]=n,n}function j(e=1){wy(ye(),V(),vn()+e,!1)}function wy(e,n,t,r){if(!r)if((n[R]&3)===3){let o=e.preOrderCheckHooks;o!==null&&El(n,o,t)}else{let o=e.preOrderHooks;o!==null&&Sl(n,o,0,t)}sr(t)}var ha=(function(e){return e[e.None=0]="None",e[e.SignalBased=1]="SignalBased",e[e.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",e})(ha||{});function ti(e,n,t,r){let i=L(null);try{let[o,a,s]=e.inputs[t],l=null;(a&ha.SignalBased)!==0&&(l=n[o][Me]),l!==null&&l.transformFn!==void 0?r=l.transformFn(r):s!==null&&(r=s.call(n,r)),e.setInput!==null?e.setInput(n,l,r,t,o):Tb(n,l,o,r)}finally{L(i)}}function Ey(e,n,t,r,i){let o=vn(),a=r&2;try{sr(-1),a&&n.length>Se&&wy(e,n,Se,!1);let s=a?ie.TemplateUpdateStart:ie.TemplateCreateStart;ce(s,i,t),t(r,i)}finally{sr(o);let s=a?ie.TemplateUpdateEnd:ie.TemplateCreateEnd;ce(s,i,t)}}function sm(e,n,t){DS(e,n,t),(t.flags&64)===64&&xS(e,n,t)}function Zl(e,n,t=Bt){let r=n.localNames;if(r!==null){let i=n.index+1;for(let o=0;o<r.length;o+=2){let a=r[o+1],s=a===-1?t(n,e):e[a];e[i++]=s}}}function gS(e,n,t,r){let o=r.get(Jb,Qb)||t===rn.ShadowDom||t===rn.ExperimentalIsolatedShadowDom,a=e.selectRootElement(n,o);return bS(a),a}function bS(e){yS(e)}var yS=()=>null;function vS(e){return e==="class"?"className":e==="for"?"htmlFor":e==="formaction"?"formAction":e==="innerHtml"?"innerHTML":e==="readonly"?"readOnly":e==="tabindex"?"tabIndex":e}function _S(e,n,t,r,i,o){let a=n[M];if(lm(e,a,n,t,r)){Vn(e)&&CS(n,e.index);return}e.type&3&&(t=vS(t)),Sy(e,n,t,r,i,o)}function Sy(e,n,t,r,i,o){if(e.type&3){let a=Bt(e,n);r=o!=null?o(r,e.value||"",t):r,i.setProperty(a,t,r)}else e.type&12}function CS(e,n){let t=Ht(n,e);t[R]&16||(t[R]|=64)}function DS(e,n,t){let r=t.directiveStart,i=t.directiveEnd;Vn(t)&&hS(n,t,e.data[r+t.componentOffset]),e.firstCreatePass||kl(t,n);let o=t.initialInputs;for(let a=r;a<i;a++){let s=e.data[a],l=la(n,e,a,t);if(Xi(l,n),o!==null&&IS(n,a-r,l,s,t,o),Jt(s)){let c=Ht(t.index,n);c[qe]=la(n,e,a,t)}}}function xS(e,n,t){let r=t.directiveStart,i=t.directiveEnd,o=t.index,a=Sg();try{sr(o);for(let s=r;s<i;s++){let l=e.data[s],c=n[s];ml(s),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&wS(l,c)}}finally{sr(-1),ml(a)}}function wS(e,n){e.hostBindings!==null&&e.hostBindings(1,n)}function Iy(e,n){let t=e.directiveRegistry,r=null;if(t)for(let i=0;i<t.length;i++){let o=t[i];my(n,o.selectors,!1)&&(r??=[],Jt(o)?r.unshift(o):r.push(o))}return r}function ES(e,n,t,r,i,o){let a=Bt(e,n);SS(n[we],a,o,e.value,t,r,i)}function SS(e,n,t,r,i,o,a){if(o==null)a?.(o,r||"",i),e.removeAttribute(n,i,t);else{let s=a==null?Wo(o):a(o,r||"",i);e.setAttribute(n,i,s,t)}}function IS(e,n,t,r,i,o){let a=o[n];if(a!==null)for(let s=0;s<a.length;s+=2){let l=a[s],c=a[s+1];ti(r,t,l,c)}}function My(e,n,t,r,i){let o=Se+t,a=n[M],s=i(a,n,e,r,t);n[o]=s,Yr(e,!0);let l=e.type===2;return l?(uy(n[we],s,e),(yg()===0||Ko(e))&&Xi(s,n),vg()):Xi(s,n),yl()&&(!l||!$l(e))&&nm(a,n,s,e),e}function Ny(e){let n=e;return Lu()?Vu():(n=n.parent,Yr(n,!1)),n}function MS(e,n){let t=e[On];if(!t)return;let r;try{r=t.get(jn,null)}catch{r=null}r?.(n)}function lm(e,n,t,r,i){let o=e.inputs?.[r],a=e.hostDirectiveInputs?.[r],s=!1;if(a)for(let l=0;l<a.length;l+=2){let c=a[l],d=a[l+1],f=n.data[c];ti(f,t[c],d,i),s=!0}if(o)for(let l of o){let c=t[l],d=n.data[l];ti(d,c,r,i),s=!0}return s}function NS(e,n,t,r,i,o){let a=null,s=null,l=null,c=!1,d=e.directiveToIndex.get(r.type);if(typeof d=="number"?a=d:[a,s,l]=d,s!==null&&l!==null&&e.hostDirectiveInputs&&Object.hasOwn(e.hostDirectiveInputs,i)){let f=e.hostDirectiveInputs[i];for(let p=0;p<f.length;p+=2){let m=f[p];if(m>=s&&m<=l){let h=n.data[m],y=f[p+1];ti(h,t[m],y,o),c=!0}else if(m>l)break}}return a!==null&&Object.hasOwn(r.inputs,i)&&(ti(r,t[a],i,o),c=!0),c}function TS(e,n){let t=Ht(n,e),r=t[M];AS(r,t);let i=t[Qt];i!==null&&t[Pi]===null&&(t[Pi]=ey(i,t[On])),ce(ie.ComponentStart);try{cm(r,t,t[qe])}finally{ce(ie.ComponentEnd,t[qe])}}function AS(e,n){for(let t=n.length;t<e.blueprint.length;t++)n.push(e.blueprint[t])}function cm(e,n,t){hl(n);try{let r=e.viewQuery;r!==null&&mf(1,r,t);let i=e.template;i!==null&&Ey(e,n,i,1,t),e.firstCreatePass&&(e.firstCreatePass=!1),n[gn]?.finishViewCreation(e),e.staticContentQueries&&ty(e,n),e.staticViewQueries&&mf(2,e.viewQuery,t);let o=e.components;o!==null&&RS(n,o)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{n[R]&=-5,gl()}}function RS(e,n){for(let t=0;t<n.length;t++)TS(e,n[t])}function dm(e,n,t,r){let i=L(null);try{let o=n.tView,s=e[R]&4096?4096:16,l=om(e,o,t,s,null,n,null,null,r?.injector??null,r?.embeddedViewInjector??null,r?.dehydratedView??null),c=e[n.index];l[ar]=c;let d=e[gn];return d!==null&&(l[gn]=d.createEmbeddedView(o)),cm(o,l,t),l}finally{L(i)}}function Ol(e,n){return!n||n.firstChild===null||Wb(e)}function da(e,n,t,r,i=!1){if(e.type===3){let o=e.firstChild,a=o.next,s=Ke(n[o.index]),l=Ke(n[a.index]),c=s;for(;c!==null&&(r.push(c),c!==l);)c=c.nextSibling;return r}for(;t!==null;){if(t.type===128){t=i?t.projectionNext:t.next;continue}let o=n[t.index];if(o!==null)if(ht(o)){let s=o[$r];s!==o[Qt]&&r.push(Ke(o)),o[R]&4||Ty(o,r),r.push(s)}else r.push(Ke(o));let a=t.type;if(a&8)da(e,n,t.child,r);else if(a&32){let s=Xf(t,n),l;for(;l=s();)r.push(l)}else if(a&16){let s=_y(n,t);if(Array.isArray(s))r.push(...s);else{let l=An(n[lt]);da(l[M],l,s,r,!0)}}t=i?t.projectionNext:t.next}return r}function Ty(e,n){for(let t=Ye;t<e.length;t++){let r=e[t],i=r[M].firstChild;i!==null&&da(r[M],r,i,n)}}function Ay(e){if(e[Ur]!==null){for(let n of e[Ur])n.impl.addSequence(n);e[Ur].length=0}}var Ry=[];function kS(e){return e[It]??OS(e)}function OS(e){let n=Ry.pop()??Object.create(PS);return n.lView=e,n}function FS(e){e.lView[It]!==e&&(e.lView=null,Ry.push(e))}var PS=W(C({},Zn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{qr(e.lView)},consumerOnSignalRead(){this.lView[It]=this}});function LS(e){let n=e[It]??Object.create(VS);return n.lView=e,n}var VS=W(C({},Zn),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:e=>{let n=An(e.lView);for(;n&&!ky(n[M]);)n=An(n);n&&Mu(n)},consumerOnSignalRead(){this.lView[It]=this}});function ky(e){return e.type!==2}function Oy(e){if(e[Tn]===null)return;let n=!0;for(;n;){let t=!1;for(let r of e[Tn])if(r.dirty&&(t=!0,r.zone===null||Zone.current===r.zone?r.run():r.zone.run(()=>r.run()),e[Tn]===null))return;n=t&&!!(e[R]&8192)}}var jS=100;function Fy(e,n=0){let r=e[hn].rendererFactory,i=!1;i||r.begin?.();try{BS(e,n)}finally{i||r.end?.()}}function BS(e,n){let t=Bu();try{Bo(!0),wf(e,n);let r=0;for(;Jo(e);){if(r===jS)throw new _(103,!1);r++,wf(e,1)}}finally{Bo(t)}}function HS(e,n,t,r){if(Wr(n))return;let i=n[R],o=!1,a=!1;hl(n);let s=!0,l=null,c=null;o||(ky(e)?(c=kS(n),l=Sn(c)):cs()===null?(s=!1,c=LS(n),l=Sn(c)):n[It]&&(Jn(n[It]),n[It]=null));try{Iu(n),xg(e.bindingStartIndex),t!==null&&Ey(e,n,t,2,r);let d=(i&3)===3;if(!o)if(d){let m=e.preOrderCheckHooks;m!==null&&El(n,m,null)}else{let m=e.preOrderHooks;m!==null&&Sl(n,m,0,null),Zu(n,0)}if(a||zS(n),Oy(n),Py(n,0),e.contentQueries!==null&&ty(e,n),!o)if(d){let m=e.contentCheckHooks;m!==null&&El(n,m)}else{let m=e.contentHooks;m!==null&&Sl(n,m,1),Zu(n,1)}$S(e,n);let f=e.components;f!==null&&Vy(n,f,0);let p=e.viewQuery;if(p!==null&&mf(2,p,r),!o)if(d){let m=e.viewCheckHooks;m!==null&&El(n,m)}else{let m=e.viewHooks;m!==null&&Sl(n,m,2),Zu(n,2)}if(e.firstUpdatePass===!0&&(e.firstUpdatePass=!1),n[al]){for(let m of n[al])m();n[al]=null}o||(Ay(n),n[R]&=-73)}catch(d){let f=!1,p=d,m=n;for(;m!==null;){if(ht(m)){m=m[Oe];continue}let h=m[ji];if(h)try{let y=n[lt][qe],v=y?.constructor,D={declarationInstance:y,declarationType:v,caughtBy:h};h(Vg(p),D),f=!0;break}catch(y){p=y}m=m[Oe]}if(!f)throw o||qr(n),p}finally{c!==null&&(Qn(c,l),s&&FS(c)),gl()}}function Py(e,n){for(let t=Yb(e);t!==null;t=Xb(t))for(let r=Ye;r<t.length;r++){let i=t[r];Ly(i,n)}}function zS(e){for(let n=Yb(e);n!==null;n=Xb(n)){if(!(n[R]&2))continue;let t=n[Gr];for(let r=0;r<t.length;r++){let i=t[r];Mu(i)}}}function US(e,n,t){ce(ie.ComponentStart);let r=Ht(n,e);try{Ly(r,t)}finally{ce(ie.ComponentEnd,r[qe])}}function Ly(e,n){cl(e)&&wf(e,n)}function wf(e,n){let r=e[M],i=e[R],o=e[It],a=!!(n===0&&i&16);if(a||=!!(i&64&&n===0),a||=!!(i&1024),a||=!!(o?.dirty&&_i(o)),a||=!1,o&&(o.dirty=!1),e[R]&=-9217,a)HS(r,e,r.template,e[qe]);else if(i&8192){let s=L(null);try{Oy(e),Py(e,1);let l=r.components;l!==null&&Vy(e,l,1),Ay(e)}finally{L(s)}}}function Vy(e,n,t){for(let r=0;r<n.length;r++)US(e,n[r],t)}function $S(e,n){let t=e.hostBindingOpCodes;if(t!==null)try{for(let r=0;r<t.length;r++){let i=t[r];if(i<0)sr(~i);else{let o=i,a=t[++r],s=t[++r];Eg(a,o);let l=n[o];ce(ie.HostBindingsUpdateStart,l);try{s(2,l)}finally{ce(ie.HostBindingsUpdateEnd,l)}}}}finally{sr(-1)}}function um(e,n){let t=Bu()?64:1088;for(e[hn].changeDetectionScheduler?.notify(n);e;){e[R]|=t;let r=An(e);if(Bi(e)&&!r)return e;e=r}return null}function jy(e,n,t,r){return[e,!0,0,n,null,r,null,t,null,null]}function GS(e,n){let t=Ye+n;if(t<e.length)return e[t]}function fm(e,n,t,r=!0){let i=n[M];if(qS(i,n,e,t),r){let a=xf(t,e),s=n[we],l=s.parentNode(e[$r]);l!==null&&nS(i,e[Ze],s,n,l,a)}let o=n[Pi];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function WS(e,n){let t=Fl(e,n);return t!==void 0&&tm(t[M],t),t}function Fl(e,n){if(e.length<=Ye)return;let t=Ye+n,r=e[t];if(r){let i=r[ar];i!==null&&i!==e&&em(i,r),n>0&&(e[t-1][jt]=r[jt]);let o=qo(e,Ye+n);tS(r[M],r);let a=o[gn];a!==null&&a.detachView(o[M]),r[Oe]=null,r[jt]=null,r[R]&=-129}return r}function qS(e,n,t,r){let i=Ye+r,o=t.length;r>0&&(t[i-1][jt]=n),r<o-Ye?(n[jt]=t[i],bu(t,Ye+r,n)):(t.push(n),n[jt]=null),n[Oe]=t;let a=n[ar];a!==null&&t!==a&&By(a,n);let s=n[gn];s!==null&&s.insertView(e),dl(n),n[R]|=128}function By(e,n){let t=e[Gr],r=n[Oe];if(Ln(r))e[R]|=2;else{let i=r[Oe][lt];n[lt]!==i&&(e[R]|=2)}t===null?e[Gr]=[n]:t.push(n)}var dr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,t=n[M];return da(t,n,t.firstChild,[])}constructor(n,t){this._lView=n,this._cdRefInjectingView=t}get context(){return this._lView[qe]}set context(n){this._lView[qe]=n}get destroyed(){return Wr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[Oe];if(ht(n)){let t=n[Zo],r=t?t.indexOf(this):-1;r>-1&&(Fl(n,r),qo(t,r))}this._attachedToViewContainer=!1}tm(this._lView[M],this._lView)}onDestroy(n){ul(this._lView,n)}markForCheck(){um(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[R]&=-129}reattach(){dl(this._lView),this._lView[R]|=128}detectChanges(){this._lView[R]|=1024,Fy(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new _(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Bi(this._lView),t=this._lView[ar];t!==null&&!n&&em(t,this._lView),by(this._lView[M],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new _(902,!1);this._appRef=n;let t=Bi(this._lView),r=this._lView[ar];r!==null&&!t&&By(r,this._lView),dl(this._lView)}};var Nt=(()=>{class e{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=YS;constructor(t,r,i){this._declarationLView=t,this._declarationTContainer=r,this.elementRef=i}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,r){return this.createEmbeddedViewImpl(t,r)}createEmbeddedViewImpl(t,r,i){let o=dm(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:r,dehydratedView:i});return new dr(o)}}return e})();function YS(){return Kl(Xe(),V())}function Kl(e,n){return e.type&4?new Nt(n,e,Qi(e,n)):null}function ii(e,n,t,r,i){let o=e.data[n];if(o===null)o=XS(e,n,t,r,i),wg()&&(o.flags|=32);else if(o.type&64){o.type=t,o.value=r,o.attrs=i;let a=_g();o.injectorIndex=a===null?-1:a.injectorIndex}return Yr(o,!0),o}function XS(e,n,t,r,i){let o=Pu(),a=Lu(),s=a?o:o&&o.parent,l=e.data[n]=KS(e,s,t,n,r,i);return ZS(e,l,o,a),l}function ZS(e,n,t,r){e.firstChild===null&&(e.firstChild=n),t!==null&&(r?t.child==null&&n.parent!==null&&(t.child=n):t.next===null&&(t.next=n,n.prev=t))}function KS(e,n,t,r,i,o){let a=n?n.injectorIndex:-1,s=0;return ku()&&(s|=128),{type:t,index:r,insertBeforeIndex:null,injectorIndex:a,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:s,providerIndexes:0,value:i,namespace:Uu(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var QS=()=>null,JS=()=>null;function Ef(e,n){return QS(e,n)}function e0(e,n,t){return JS(e,n,t)}var Hy=class{},Fe=class{},ve=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>t0()};function t0(){let e=V(),n=Xe(),t=Ht(n.index,e);return(Ln(t)?t:e)[we]}var zy=(()=>{class e{static \u0275prov=K({token:e,providedIn:"root",factory:()=>null})}return e})();function Uy(e){return e.debugInfo?.className||e.type.name||null}var Ml={},Pl=class{injector;parentInjector;constructor(n,t){this.injector=n,this.parentInjector=t}get(n,t,r){let i=this.injector.get(n,Ml,r);return i!==Ml||t===Ml?i:this.parentInjector.get(n,t,r)}};function n0(e,n,t){return e[n]=t}function Un(e,n,t){if(t===yt)return!1;let r=e[n];return Object.is(r,t)?!1:(e[n]=t,!0)}function $y(e,n,t,r){let i=Un(e,n,t);return Un(e,n+1,r)||i}function Qr(e,n,t){return function r(i){let o=r.__ngNativeEl__;o!==void 0&&oE(i,o);let a=Vn(e)?Ht(e.index,n):n;um(a,5);let s=n[qe],l=lb(n,s,t,i),c=r.__ngNextListenerFn__;for(;c;)l=lb(n,s,c,i)&&l,c=c.__ngNextListenerFn__;return l}}function lb(e,n,t,r){let i=L(null);try{return ce(ie.OutputStart,n,t),t(r)!==!1}catch(o){return MS(e,o),!1}finally{ce(ie.OutputEnd,n,t),L(i)}}function mm(e,n,t,r,i,o,a,s){let l=Ko(e),c=!1,d=null;if(!r&&l&&(d=i0(n,t,o,e.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=a,d.__ngLastListenerFn__=a,c=!0}else{let f=Bt(e,t),p=r?r(f):f;sE(t,p,o,s),r||(s.__ngNativeEl__=f);let m=i.listen(p,o,s);if(!r0(o)){let h=r?y=>r(Ke(y[e.index])):e.index;Gy(h,n,t,o,s,m,!1)}}return c}function r0(e){return e.startsWith("animation")||e.startsWith("transition")}function i0(e,n,t,r){let i=e.cleanup;if(i!=null)for(let o=0;o<i.length-1;o+=2){let a=i[o];if(a===t&&i[o+1]===r){let s=n[Li],l=i[o+2];return s&&s.length>l?s[l]:null}typeof a=="string"&&(o+=2)}return null}function Gy(e,n,t,r,i,o,a){let s=n.firstCreatePass?Tu(n):null,l=Nu(t),c=l.length;l.push(i,o),s&&s.push(r,e,c,(c+1)*(a?-1:1))}function cb(e,n,t,r,i){let o=null,a=null,s=null,l=!1,c=e.directiveToIndex.get(t.type);if(typeof c=="number"?o=c:[o,a,s]=c,a!==null&&s!==null&&e.hostDirectiveOutputs&&Object.hasOwn(e.hostDirectiveOutputs,r)){let d=e.hostDirectiveOutputs[r];for(let f=0;f<d.length;f+=2){let p=d[f];if(p>=a&&p<=s)l=!0,Ll(e,n,p,d[f+1],r,i);else if(p>s)break}}return Object.hasOwn(t.outputs,r)&&(l=!0,Ll(e,n,o,r,r,i)),l}function Ll(e,n,t,r,i,o){let a=n[t],s=n[M],c=s.data[t].outputs[r],f=a[c].subscribe(o);Gy(e.index,s,n,i,o,f,!0)}function Ql(){o0()}function o0(){let e=V(),n=ye(),t=Xe();if(n.firstCreatePass&&s0(n,t),t.controlDirectiveIndex===-1)return;Gn("NgSignalForms");let r=e[t.controlDirectiveIndex];n.data[t.controlDirectiveIndex].controlDef.create(r,new Vl(e,n,t))}function Jl(){a0()}function a0(){let e=V(),n=ye(),t=ta();if(t.controlDirectiveIndex===-1)return;let r=n.data[t.controlDirectiveIndex].controlDef,i=e[t.controlDirectiveIndex];r.update(i,new Vl(e,n,t))}var Vl=class{lView;tView;tNode;hasPassThrough;constructor(n,t,r){this.lView=n,this.tView=t,this.tNode=r,this.hasPassThrough=!!(r.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return Bt(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,t){let r=this.tView.data[this.tNode.customControlIndex];cb(this.tNode,this.lView,r,n,Qr(this.tNode,this.lView,t))}listenToCustomControlModel(n){let t=this.tNode.flags&1024?"valueChange":"checkedChange",r=this.tView.data[this.tNode.customControlIndex];cb(this.tNode,this.lView,r,t,Qr(this.tNode,this.lView,n))}listenToDom(n,t){mm(this.tNode,this.tView,this.lView,void 0,this.lView[we],n,t,Qr(this.tNode,this.lView,t))}setInputOnDirectives(n,t,r){let i=this.tNode.inputs?.[n],o=this.tNode.hostDirectiveInputs?.[n];if(!i&&!o)return!1;let a=!1;if(i)for(let s of i){if(s===this.tNode.controlDirectiveIndex)continue;let l=this.lView[s],c=this.tView.data[s];(!r||r(ub(l,c,n)))&&(ti(c,l,n,t),a=!0)}if(o)for(let s=0;s<o.length;s+=2){let l=o[s];if(l===this.tNode.controlDirectiveIndex)continue;let c=this.lView[l],d=o[s+1],f=this.tView.data[l];(!r||r(ub(c,f,n)))&&(ti(f,c,d,t),a=!0)}return a}setCustomControlModelInput(n){let t=this.tView.data[this.tNode.customControlIndex],r=this.tNode.flags&1024?"value":"checked";NS(this.tNode,this.tView,this.lView,t,r,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let t=this.tView.data[this.tNode.customControlIndex];return(t.signalFormsInputPresence??=this._buildCustomControlInputCache(t))[n]===!0}_buildCustomControlInputCache(n){let t={};for(let r in n.inputs)t[r]=!0;if(n.hostDirectives!==null){let r=[...n.hostDirectives];for(;r.length>0;){let i=r.shift();if(typeof i!="function"){for(let a in i.inputs)t[i.inputs[a]]=!0;let o=db(i.directive);o!==null&&r.push(...o);continue}for(let o of i()){if(typeof o=="function")continue;if(o.inputs)for(let s=0;s<o.inputs.length;s+=2){let l=o.inputs[s+1]||o.inputs[s];t[l]=!0}let a=db(o.directive);a!==null&&r.push(...a)}}}return t}};function db(e){return typeof e=="function"&&"\u0275dir"in e?e.\u0275dir.hostDirectives??null:null}function ub(e,n,t){if(!n.inputs||!Object.hasOwn(n.inputs,t))return;let[r,i]=n.inputs[t];if((i&ha.SignalBased)!==0){let a=e[r][Me];return a.value===Ul?void 0:a.value}return e[r]}function s0(e,n,t){for(let i=n.directiveStart;i<n.directiveEnd;i++)if(e.data[i].controlDef){n.controlDirectiveIndex=i;break}if(n.controlDirectiveIndex===-1)return;let r=e.data[n.controlDirectiveIndex].controlDef;if(r.passThroughInput&&(n.inputs?.[r.passThroughInput]?.length??0)>1){n.flags|=4096;return}l0(e,n)}function l0(e,n){for(let t=n.directiveStart;t<n.directiveEnd;t++){let r=e.data[t];if(!(n.directiveToIndex&&!n.directiveToIndex.has(r.type))){if(fb(r,"value")){n.flags|=1024,n.customControlIndex=t;return}if(fb(r,"checked")){n.flags|=2048,n.customControlIndex=t;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let t=(r,i)=>{let o=n.hostDirectiveInputs[r],a=n.hostDirectiveOutputs[r+"Change"];if(!o||!a)return!1;for(let s=0;s<o.length;s+=2){let l=o[s];for(let c=0;c<a.length;c+=2){let d=a[c];if(l===d)for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[p,m,h]=f;if(l>=m&&l<=h)return n.flags|=i,n.customControlIndex=p,!0}}}return!1};if(t("value",1024)||t("checked",2048))return}}function fb(e,n){return c0(e,n)&&d0(e,n+"Change")}function c0(e,n){return n in e.inputs}function d0(e,n){return n in e.outputs}var Sf=Symbol("BINDING");var oi=new g("");function jl(e,n,t){let r=t?e.styles:null,i=t?e.classes:null,o=0;if(n!==null)for(let a=0;a<n.length;a++){let s=n[a];if(typeof s=="number")o=s;else if(o==1)i=Js(i,s);else if(o==2){let l=s,c=n[++a];r=Js(r,l+": "+c+";")}}t?e.styles=r:e.stylesWithoutHost=r,t?e.classes=i:e.classesWithoutHost=i}function se(e,n=0){let t=V();if(t===null)return A(e,n);let r=Xe();return zb(r,t,ze(e),n)}function pm(){let e="invalid";throw new Error(e)}function Wy(e,n,t,r,i){let o=r===null?null:{"":-1},a=i(e,t);if(a!==null){let s=a,l=null,c=null;for(let d of a)if(d.resolveHostDirectives!==null){[s,l,c]=d.resolveHostDirectives(a);break}m0(e,n,t,s,o,l,c)}o!==null&&r!==null&&u0(t,r,o)}function u0(e,n,t){let r=e.localNames=[];for(let i=0;i<n.length;i+=2){let o=t[n[i+1]];if(o==null)throw new _(-301,!1);r.push(n[i],o)}}function f0(e,n,t){n.componentOffset=t,(e.components??=[]).push(n.index)}function m0(e,n,t,r,i,o,a){let s=r.length,l=null;for(let p=0;p<s;p++){let m=r[p];l===null&&Jt(m)&&(l=m,f0(e,t,p)),cf(kl(t,n),e,m.type)}v0(t,e.data.length,s),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let p=0;p<s;p++){let m=r[p];m.providersResolver&&m.providersResolver(m)}let c=!1,d=!1,f=xy(e,n,s,null);s>0&&(t.directiveToIndex=new Map);for(let p=0;p<s;p++){let m=r[p];if(t.mergedAttrs=Yi(t.mergedAttrs,m.hostAttrs),h0(e,t,n,f,m),y0(f,m,i),a!==null&&a.has(m)){let[y,v]=a.get(m);t.directiveToIndex.set(m.type,[f,y+t.directiveStart,v+t.directiveStart])}else(o===null||!o.has(m))&&t.directiveToIndex.set(m.type,f);m.contentQueries!==null&&(t.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(t.flags|=64);let h=m.type.prototype;!c&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks??=[]).push(t.index),c=!0),!d&&(h.ngOnChanges||h.ngDoCheck)&&((e.preOrderCheckHooks??=[]).push(t.index),d=!0),f++}p0(e,t,o)}function p0(e,n,t){for(let r=n.directiveStart;r<n.directiveEnd;r++){let i=e.data[r];if(t===null||!t.has(i))mb(0,n,i,r),mb(1,n,i,r),hb(n,r,!1);else{let o=t.get(i);pb(0,n,o,r),pb(1,n,o,r),hb(n,r,!0)}}}function mb(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a;e===0?a=n.inputs??={}:a=n.outputs??={},a[o]??=[],a[o].push(r),qy(n,o)}}function pb(e,n,t,r){let i=e===0?t.inputs:t.outputs;for(let o in i)if(Object.hasOwn(i,o)){let a=i[o],s;e===0?s=n.hostDirectiveInputs??={}:s=n.hostDirectiveOutputs??={},s[a]??=[],s[a].push(r,o),qy(n,a)}}function qy(e,n){n==="class"?e.flags|=8:n==="style"&&(e.flags|=16)}function hb(e,n,t){let{attrs:r,inputs:i,hostDirectiveInputs:o}=e;if(r===null||!t&&i===null||t&&o===null||Yf(e)){e.initialInputs??=[],e.initialInputs.push(null);return}let a=null,s=0;for(;s<r.length;){let l=r[s];if(l===0){s+=4;continue}else if(l===5){s+=2;continue}else if(typeof l=="number")break;if(!t&&Object.hasOwn(i,l)){let c=i[l];for(let d of c)if(d===n){a??=[],a.push(l,r[s+1]);break}}else if(t&&Object.hasOwn(o,l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){a??=[],a.push(c[d+1],r[s+1]);break}}s+=2}e.initialInputs??=[],e.initialInputs.push(a)}function h0(e,n,t,r,i){e.data[r]=i;let o=i.factory||(i.factory=nr(i.type,!0)),a=new Jr(o,Jt(i),se,null);e.blueprint[r]=a,t[r]=a,g0(e,n,r,xy(e,t,i.hostVars,yt),i)}function g0(e,n,t,r,i){let o=i.hostBindings;if(o){let a=e.hostBindingOpCodes;a===null&&(a=e.hostBindingOpCodes=[]);let s=~n.index;b0(a)!=s&&a.push(s),a.push(t,r,o)}}function b0(e){let n=e.length;for(;n>0;){let t=e[--n];if(typeof t=="number"&&t<0)return t}return 0}function y0(e,n,t){if(t){if(n.exportAs)for(let r=0;r<n.exportAs.length;r++)t[n.exportAs[r]]=e;Jt(n)&&(t[""]=e)}}function v0(e,n,t){e.flags|=1,e.directiveStart=n,e.directiveEnd=n+t,e.providerIndexes=n}function Yy(e,n,t,r,i,o,a,s){let l=n[M],c=l.consts,d=en(c,a),f=ii(l,e,t,r,d);return o&&Wy(l,n,f,en(c,s),i),f.mergedAttrs=Yi(f.mergedAttrs,f.attrs),f.attrs!==null&&jl(f,f.attrs,!1),f.mergedAttrs!==null&&jl(f,f.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,f),f}function Xy(e,n){kb(e,n),wu(n)&&e.queries.elementEnd(n)}function _0(e,n,t,r,i,o){let a=n.consts,s=en(a,i),l=ii(n,e,t,r,s);if(l.mergedAttrs=Yi(l.mergedAttrs,l.attrs),o!=null){let c=en(a,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&jl(l,l.attrs,!1),l.mergedAttrs!==null&&jl(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}var Zy=typeof ShadowRoot<"u",C0=typeof Document<"u";function D0(e){return Object.keys(e).map(n=>{let[t,r,i]=e[n],o={propName:t,templateName:n,isSignal:(r&ha.SignalBased)!==0};return i&&(o.transform=i),o})}function x0(e){return Object.keys(e).map(n=>({propName:e[n],templateName:n}))}function w0(e,n,t){let r=n instanceof Ae?n:n?.injector;return r&&e.getStandaloneInjector!==null&&(r=e.getStandaloneInjector(r)||r),r?new Pl(t,r):t}function E0(e){let n=e.get(Fe,null);if(n===null)throw new _(407,!1);let t=e.get(zy,null),r=e.get(mn,null),i=e.get(on,null,{optional:!0});return{rendererFactory:n,sanitizer:t,changeDetectionScheduler:r,ngReflect:!1,tracingService:i}}function S0(e,n,t){let r=Ky(e);return cy(n,r,r==="svg"?Eu:r==="math"?fg:t)}function I0(e){if((e&&"localName"in e&&typeof e.localName=="string"?e.localName:e?.tagName)?.toLowerCase()==="script")throw new _(905,!1)}function Ky(e){return(e.selectors[0][0]||"div").toLowerCase()}var Zi=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=D0(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=x0(this.componentDef.outputs),this.cachedOutputs}constructor(n,t){this.componentDef=n,this.ngModule=t,this.componentType=n.type,this.selector=HE(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!t}create(n,t,r,i,o,a,s,l){ce(ie.DynamicComponentStart);let c=L(null);try{let d=this.componentDef,f=w0(d,i||this.ngModule,n),p=E0(f),m=p.tracingService;return m&&m.componentCreate?m.componentCreate(Uy(d),()=>this.createComponentRef(p,f,t,r,o,a,s,l)):this.createComponentRef(p,f,t,r,o,a,s,l)}finally{L(c)}}createComponentRef(n,t,r,i,o,a,s,l){let c=this.componentDef,d=M0(i,c,a,o,l),f=n.rendererFactory.createRenderer(null,c),p=i?gS(f,i,c.encapsulation,t):S0(c,f,s??null);I0(p);let m=t.get(oi,null),h=N0(p,()=>t.get(E,null)??Kb());m&&m.addHost(h);let y=a?.some(gb)||o?.some(P=>typeof P!="function"&&P.bindings.some(gb)),v=om(null,d,null,512|Dy(c),null,null,n,f,t,null,ey(p,t,!0));m&&Zy&&h instanceof ShadowRoot&&ul(v,()=>{m.removeHost(h)}),v[Se]=p,hl(v);let D=null;try{let P=Yy(Se,v,2,"#host",()=>d.directiveRegistry,!0,0);uy(f,p,P),Xi(p,v),sm(d,v,P),ny(d,P,v),Xy(d,P),r!==void 0&&A0(P,this.ngContentSelectors,r),D=Ht(P.index,v),v[qe]=D[qe],cm(d,v,null)}catch(P){throw D!==null&&uf(D),uf(v),P}finally{ce(ie.DynamicComponentEnd),gl()}return new Bl(this.componentType,v,!!y)}};function M0(e,n,t,r,i){let o=e?["ng-version","22.2.0"]:zE(n.selectors[0]),a=null,s=null,l=0;if(t)for(let f of t)l+=f[Sf].requiredVars,f.create&&(f.targetIdx=0,(a??=[]).push(f)),f.update&&(f.targetIdx=0,(s??=[]).push(f));if(r)for(let f=0;f<r.length;f++){let p=r[f];if(typeof p!="function")for(let m of p.bindings){l+=m[Sf].requiredVars;let h=f+1;m.create&&(m.targetIdx=h,(a??=[]).push(m)),m.update&&(m.targetIdx=h,(s??=[]).push(m))}}let c=[n];if(r)for(let f of r){let p=typeof f=="function"?f:f.type,m=Go(p);c.push(m)}return im(0,null,T0(a,s),1,l,c,null,null,null,[o],null)}function N0(e,n){let t=e.getRootNode?.();return C0&&t instanceof Document?t.head:t&&Zy&&t instanceof ShadowRoot?t:n().head}function T0(e,n){return!e&&!n?null:t=>{if(t&1&&e)for(let r of e)r.create();if(t&2&&n)for(let r of n)r.update()}}function gb(e){let n=e[Sf].kind;return n==="input"||n==="twoWay"}var Bl=class extends Hy{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,t,r){super(),this._rootLView=t,this._hasInputBindings=r,this._tNode=sl(t[M],Se),this.location=Qi(this._tNode,t),this.instance=Ht(this._tNode.index,t)[qe],this.hostView=this.changeDetectorRef=new dr(t,void 0),this.componentType=n}setInput(n,t){this._hasInputBindings;let r=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),t))return;let i=this._rootLView,o=lm(r,i[M],i,n,t);this.previousInputValues.set(n,t);let a=Ht(r.index,i);um(a,1)}get injector(){return new Bn(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function A0(e,n,t){let r=e.projection=[];for(let i=0;i<n.length;i++){let o=t[i];r.push(o!=null&&o.length?Array.from(o):null)}}var Ut=(()=>{class e{static __NG_ELEMENT_ID__=R0}return e})();function R0(){let e=Xe();return Qy(e,V())}var If=class e extends Ut{_lContainer;_hostTNode;_hostLView;constructor(n,t,r){super(),this._lContainer=n,this._hostTNode=t,this._hostLView=r}get element(){return Qi(this._hostTNode,this._hostLView)}get injector(){return new Bn(this._hostTNode,this._hostLView)}get parentInjector(){let n=Vf(this._hostTNode,this._hostLView);if(Pb(n)){let t=Al(n,this._hostLView),r=Tl(n),i=t[M].data[r+8];return new Bn(i,t)}else return new Bn(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let t=bb(this._lContainer);return t!==null&&t[n]||null}get length(){return this._lContainer.length-Ye}createEmbeddedView(n,t,r){let i,o,a;typeof r=="number"?i=r:r!=null&&(i=r.index,o=r.injector,a=r.onError);let s=Ef(this._lContainer,n.ssrId),l=n.createEmbeddedViewImpl(t||{},o,s);return a&&(l._lView[ji]=a),this.insertImpl(l,i,Ol(this._hostTNode,s)),l}createComponent(n,t,r,i,o,a,s){let l,c,d=t||{};l=d.index,r=d.injector,i=d.projectableNodes,o=d.environmentInjector||d.ngModuleRef,a=d.directives,s=d.bindings,c=d.onError;let f=new Zi(rr(n)),p=r||this.parentInjector;if(!o&&f.ngModule==null){let P=this.parentInjector.get(Ae,null);P&&(o=P)}let m=rr(f.componentType??{}),h=Ef(this._lContainer,m?.id??null),y=h?.firstChild??null,v=f.create(p,i,y,o,a,s,this._getHostElementNamespace());return c&&(v.hostView._lView[ji]=c),this.insertImpl(v.hostView,l,Ol(this._hostTNode,h)),v}_getHostElementNamespace(){if(this._hostTNode.type&2){let n=this._hostTNode.parent??this._hostLView[Ze];return n!==null&&n.type&2&&typeof n.value=="string"&&n.value.toLowerCase()==="foreignobject"?null:n?.namespace??null}return this._hostTNode.namespace}insert(n,t){return this.insertImpl(n,t,!0)}insertImpl(n,t,r){let i=n._lView;if(pg(i)){let s=this.indexOf(n);if(s!==-1)this.detach(s);else{let l=i[Oe],c=new e(l,l[Ze],l[Oe]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(t),a=this._lContainer;return fm(a,i,o,r),n.attachToViewContainerRef(),bu(Ju(a),o,n),n}move(n,t){return this.insert(n,t)}indexOf(n){let t=bb(this._lContainer);return t!==null?t.indexOf(n):-1}remove(n){let t=this._adjustIndex(n,-1),r=Fl(this._lContainer,t);r&&(qo(Ju(this._lContainer),t),tm(r[M],r))}detach(n){let t=this._adjustIndex(n,-1),r=Fl(this._lContainer,t);return r&&qo(Ju(this._lContainer),t)!=null?new dr(r):null}_adjustIndex(n,t=0){return n??this.length+t}};function bb(e){return e[Zo]}function Ju(e){return e[Zo]||(e[Zo]=[])}function Qy(e,n){let t,r=n[e.index];return ht(r)?t=r:(t=jy(r,n,null,e),n[e.index]=t,am(n,t)),O0(t,n,e,r),new If(t,e,n)}function k0(e,n){let t=e[we],r=t.createComment(""),i=Bt(n,e),o=t.parentNode(i);return Kr(t,o,r,t.nextSibling(i),!1),r}var O0=L0,F0=()=>!1;function P0(e,n,t){return F0(e,n,t)}function L0(e,n,t,r){if(e[$r])return;let i;t.type&8?i=Ke(r):i=k0(n,t),e[$r]=i}var Mf=class e{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new e(this.queryList)}setDirty(){this.queryList.setDirty()}},Nf=class e{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let t=n.queries;if(t!==null){let r=n.contentQueries!==null?n.contentQueries[0]:t.length,i=[];for(let o=0;o<r;o++){let a=t.getByIndex(o),s=this.queries[a.indexInDeclarationView];i.push(s.clone())}return new e(i)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let t=0;t<this.queries.length;t++)gm(n,t).matches!==null&&this.queries[t].setDirty()}},Hl=class{flags;read;predicate;constructor(n,t,r=null){this.flags=t,this.read=r,typeof n=="string"?this.predicate=z0(n):this.predicate=n}},Tf=class e{queries;constructor(n=[]){this.queries=n}elementStart(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(n,t)}elementEnd(n){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(n)}embeddedTView(n){let t=null;for(let r=0;r<this.length;r++){let i=t!==null?t.length:0,o=this.getByIndex(r).embeddedTView(n,i);o&&(o.indexInDeclarationView=r,t!==null?t.push(o):t=[o])}return t!==null?new e(t):null}template(n,t){for(let r=0;r<this.queries.length;r++)this.queries[r].template(n,t)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Af=class e{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,t=-1){this.metadata=n,this._declarationNodeIndex=t}elementStart(n,t){this.isApplyingToNode(t)&&this.matchTNode(n,t)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,t){this.elementStart(n,t)}embeddedTView(n,t){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,t),new e(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,r=n.parent;for(;r!==null&&r.type&8&&r.index!==t;)r=r.parent;return t===(r!==null?r.index:-1)}return this._appliesToNextNode}matchTNode(n,t){let r=this.metadata.predicate;if(Array.isArray(r))for(let i=0;i<r.length;i++){let o=r[i];this.matchTNodeWithReadOption(n,t,V0(t,o)),this.matchTNodeWithReadOption(n,t,Il(t,n,o,!1,!1))}else r===Nt?t.type&4&&this.matchTNodeWithReadOption(n,t,-1):this.matchTNodeWithReadOption(n,t,Il(t,n,r,!1,!1))}matchTNodeWithReadOption(n,t,r){if(r!==null){let i=this.metadata.read;if(i!==null)if(i===F||i===Ut||i===O||i===Nt&&t.type&4)this.addMatch(t.index,-2);else{let o=Il(t,n,i,!1,!1);o!==null&&this.addMatch(t.index,o)}else this.addMatch(t.index,r)}}addMatch(n,t){this.matches===null?this.matches=[n,t]:this.matches.push(n,t)}};function V0(e,n){let t=e.localNames;if(t!==null){for(let r=0;r<t.length;r+=2)if(t[r]===n)return t[r+1]}return null}function j0(e,n){return e.type&11?Qi(e,n):e.type&4?Kl(e,n):null}function B0(e,n,t,r){return t===-1?j0(n,e):t===-2?H0(e,n,r):la(e,e[M],t,n)}function H0(e,n,t){if(t===F)return Qi(n,e);if(t===Nt)return Kl(n,e);if(t===Ut)return Qy(n,e);if(t===O)return new Bn(n,e)}function Jy(e,n,t,r){let i=n[gn].queries[r];if(i.matches===null){let o=e.data,a=t.matches,s=[];for(let l=0;a!==null&&l<a.length;l+=2){let c=a[l];if(c<0)s.push(null);else{let d=o[c];s.push(B0(n,d,a[l+1],t.metadata.read))}}i.matches=s}return i.matches}function Rf(e,n,t,r){let i=e.queries.getByIndex(t),o=i.matches;if(o!==null){let a=Jy(e,n,i,t);for(let s=0;s<o.length;s+=2){let l=o[s];if(l>0)r.push(a[s/2]);else{let c=o[s+1],d=n[-l];for(let f=Ye;f<d.length;f++){let p=d[f];p[ar]===p[Oe]&&Rf(p[M],p,c,r)}if(d[Gr]!==null){let f=d[Gr];for(let p=0;p<f.length;p++){let m=f[p];Rf(m[M],m,c,r)}}}}}return r}function hm(e,n){return e[gn].queries[n].queryList}function ev(e,n,t){let r=new Hn((t&4)===4);return bg(e,n,r,r.destroy),(n[gn]??=new Nf).queries.push(new Mf(r))-1}function tv(e,n,t){let r=ye();return r.firstCreatePass&&(rv(r,new Hl(e,n,t),-1),(n&2)===2&&(r.staticViewQueries=!0)),ev(r,V(),n)}function nv(e,n,t,r){let i=ye();if(i.firstCreatePass){let o=Xe();rv(i,new Hl(n,t,r),o.index),U0(i,e),(t&2)===2&&(i.staticContentQueries=!0)}return ev(i,V(),t)}function z0(e){return e.split(",").map(n=>n.trim())}function rv(e,n,t){e.queries===null&&(e.queries=new Tf),e.queries.track(new Af(n,t))}function U0(e,n){let t=e.contentQueries||(e.contentQueries=[]),r=t.length?t[t.length-1]:-1;n!==r&&t.push(e.queries.length-1,n)}function gm(e,n){return e.queries.getByIndex(n)}function iv(e,n){let t=e[M],r=gm(t,n);return r.crossesNgTemplate?Rf(t,e,n,[]):Jy(t,e,r,n)}function ov(e,n,t){let r,i=Io(()=>{r._dirtyCounter();let o=$0(r,e);if(n&&o===void 0)throw new _(-951,!1);return o});return r=i[Me],r._dirtyCounter=re(0),r._flatValue=void 0,i}function bm(e){return ov(!0,!1,e)}function ym(e){return ov(!0,!0,e)}function av(e,n){let t=e[Me];t._lView=V(),t._queryIndex=n,t._queryList=hm(t._lView,n),t._queryList.onDirty(()=>t._dirtyCounter.update(r=>r+1))}function $0(e,n){let t=e._lView,r=e._queryIndex;if(t===void 0||r===void 0||t[R]&4)return n?void 0:tt;let i=hm(t,r),o=iv(t,r);return i.reset(o,Gb),n?i.first:i._changesDetected||e._flatValue===void 0?e._flatValue=i.toArray():e._flatValue}function ai(e){return!!e&&typeof e.then=="function"}function vm(e){return!!e&&typeof e.subscribe=="function"}var ur=class{};var ua=class extends ur{injector;instance=null;constructor(n){super();let t=new jr([...n.providers,{provide:ur,useValue:this}],n.parent||Oi(),n.debugName,new Set(["environment"]));this.injector=t,n.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function sv(e,n,t=null){return new ua({providers:e,parent:n,debugName:t,runEnvironmentInitializers:!0}).injector}var G0=(()=>{class e{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let r=vu(!1,t.type),i=r.length>0?sv([r],this._injector,""):null;this.cachedInjectors.set(t,i)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=K({token:e,providedIn:"environment",factory:()=>new e(A(Ae))})}return e})();function Z(e){return ma(()=>{let n=lv(e),t=W(C({},n),{decls:e.decls,vars:e.vars,template:e.template,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,onPush:e.changeDetection!==Bf.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&e.dependencies||null,getStandaloneInjector:n.standalone?i=>i.get(G0).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:e.signals??!1,data:e.data||{},encapsulation:e.encapsulation||rn.Emulated,styles:e.styles||tt,_:null,schemas:e.schemas||null,tView:null,id:""});n.standalone&&Gn("NgStandalone"),cv(t);let r=e.dependencies;return t.directiveDefs=yb(r,W0),t.pipeDefs=yb(r,Kh),t.id=X0(t),t})}function W0(e){return rr(e)||Go(e)}function H(e){return ma(()=>({type:e.type,bootstrap:e.bootstrap||tt,declarations:e.declarations||tt,imports:e.imports||tt,exports:e.exports||tt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function q0(e,n){if(e==null)return ir;let t={};for(let r in e)if(Object.hasOwn(e,r)){let i=e[r],o,a,s,l;Array.isArray(i)?(s=i[0],o=i[1],a=i[2]??o,l=i[3]||null):(o=i,a=i,s=ha.None,l=null),t[o]=[r,s,l],n[o]=a}return t}function Y0(e){if(e==null)return ir;let n={};for(let t in e)Object.hasOwn(e,t)&&(n[e[t]]=t);return n}function T(e){return ma(()=>{let n=lv(e);return cv(n),n})}function _m(e){return{type:e.type,name:e.name,factory:null,pure:e.pure!==!1,standalone:e.standalone??!0,onDestroy:e.type.prototype.ngOnDestroy||null}}function lv(e){let n={};return{type:e.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:n,inputConfig:e.inputs||ir,exportAs:e.exportAs||null,standalone:e.standalone??!0,signals:e.signals===!0,selectors:e.selectors||tt,viewQuery:e.viewQuery||null,features:e.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:q0(e.inputs,n),outputs:Y0(e.outputs),debugInfo:null}}function cv(e){e.features?.forEach(n=>n(e))}function yb(e,n){return e?()=>{let t=typeof e=="function"?e():e,r=[];for(let i of t){let o=n(i);o!==null&&r.push(o)}return r}:null}function X0(e){let n=0,t=typeof e.consts=="function"?"":e.consts,r=[e.selectors,e.ngContentSelectors,e.hostVars,e.hostAttrs,t,e.vars,e.decls,e.encapsulation,e.standalone,e.signals,e.exportAs,JSON.stringify(e.inputs),JSON.stringify(e.outputs),Object.getOwnPropertyNames(e.type.prototype),!!e.contentQueries,!!e.viewQuery];for(let o of r.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}var dv=new g("");var Cm=(()=>{class e{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,r)=>{this.resolve=t,this.reject=r});appInits=u(dv,{optional:!0})??[];injector=u(O);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let i of this.appInits){let o=Fi(this.injector,i);if(ai(o))t.push(o);else if(vm(o)){let a=new Promise((s,l)=>{o.subscribe({complete:s,error:l})});t.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{r()}).catch(i=>{this.reject(i)}),t.length===0&&r(),this.initialized=!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function Dm(e){return n=>{n.controlDef={create:(t,r)=>{t?.\u0275ngControlCreate(r)},update:(t,r)=>{t?.\u0275ngControlUpdate?.(r)},passThroughInput:e}}}function xm(e){let n=t=>{let r=Array.isArray(e);t.hostDirectives===null?(t.resolveHostDirectives=Z0,t.hostDirectives=r?e.map(kf):[e]):r?t.hostDirectives.unshift(...e.map(kf)):t.hostDirectives.unshift(e)};return n.ngInherit=!0,n}function Z0(e){let n=[],t=!1,r=null,i=null;for(let o=0;o<e.length;o++){let a=e[o];if(a.hostDirectives!==null){let s=n.length;r??=new Map,i??=new Map,uv(a,n,r,e),i.set(a,[s,n.length-1])}o===0&&Jt(a)&&(t=!0,n.push(a))}for(let o=t?1:0;o<e.length;o++)n.push(e[o]);return r!==null&&r.forEach((o,a)=>{K0(a.declaredInputs,o.inputs)}),[n,r,i]}function uv(e,n,t,r){if(e.hostDirectives!==null)for(let i of e.hostDirectives)if(typeof i=="function"){let o=i();for(let a of o)vb(kf(a),n,t,r)}else vb(i,n,t,r)}function vb(e,n,t,r){let i=Go(e.directive);if(uv(i,n,t,r),t.has(i)){let o=t.get(i);_b(o,e.inputs,"input"),_b(o,e.outputs,"output")}else r.includes(i)||(t.set(i,e),n.push(i))}function _b(e,n,t){let r=t==="input"?e.inputs:e.outputs;Object.keys(n).forEach(i=>{let o=n[i];(!Object.hasOwn(r,i)||r[i]===o)&&(r[i]=o)})}function kf(e){return typeof e=="function"?{directive:ze(e),inputs:{},outputs:{}}:{directive:ze(e.directive),inputs:Cb(e.inputs),outputs:Cb(e.outputs)}}function Cb(e){let n={};if(e!==void 0&&e.length>0)for(let t=0;t<e.length;t+=2)n[e[t]]=e[t+1];return n}function K0(e,n){for(let t in n)if(Object.hasOwn(n,t)){let r=n[t],i=e[t];e[r]=i}}function Q0(e){return Object.getPrototypeOf(e.prototype).constructor}function he(e){let n=Q0(e.type),t=!0,r=[e];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let i,o=Object.hasOwn(n,Uo)?n[Uo]:void 0,a=Object.hasOwn(n,$o)?n[$o]:void 0;if(Jt(e))i=o??a;else{if(o)throw new _(903,!1);i=a}if(i){if(t){r.push(i);let l=e;l.inputs=ef(e.inputs),l.declaredInputs=ef(e.declaredInputs),l.outputs=ef(e.outputs);let c=i.hostBindings;c&&rI(e,c);let d=i.viewQuery,f=i.contentQueries;if(d&&tI(e,d),f&&nI(e,f),J0(e,i),Zh(e.outputs,i.outputs),Jt(i)&&i.data.animation){let p=e.data;p.animation=(p.animation||[]).concat(i.data.animation)}}let s=i.features;if(s)for(let l=0;l<s.length;l++){let c=s[l];c&&c.ngInherit&&c(e),c===he&&(t=!1)}}n=Object.getPrototypeOf(n)}eI(r)}function J0(e,n){for(let t in n.inputs){if(!Object.hasOwn(n.inputs,t)||Object.hasOwn(e.inputs,t))continue;let r=n.inputs[t];r!==void 0&&(e.inputs[t]=r,e.declaredInputs[t]=n.declaredInputs[t])}}function eI(e){let n=0,t=null;for(let r=e.length-1;r>=0;r--){let i=e[r];i.hostVars=n+=i.hostVars,i.hostAttrs=Yi(i.hostAttrs,t=Yi(t,i.hostAttrs))}}function ef(e){return e===ir?{}:e===tt?[]:e}function tI(e,n){let t=e.viewQuery;t?e.viewQuery=(r,i)=>{n(r,i),t(r,i)}:e.viewQuery=n}function nI(e,n){let t=e.contentQueries;t?e.contentQueries=(r,i,o)=>{n(r,i,o),t(r,i,o)}:e.contentQueries=n}function rI(e,n){let t=e.hostBindings;t?e.hostBindings=(r,i)=>{n(r,i),t(r,i)}:e.hostBindings=n}function fv(e,n,t,r,i,o,a,s){if(t.firstCreatePass){e.mergedAttrs=Yi(e.mergedAttrs,e.attrs);let d=e.tView=im(2,e,i,o,a,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,e),d.queries=t.queries.embeddedTView(e))}s&&(e.flags|=s),Yr(e,!1);let l=oI(t,n,e,r);yl()&&nm(t,n,l,e),Xi(l,n);let c=jy(l,n,l,e);n[r+Se]=c,am(n,c),P0(c,e,n)}function iI(e,n,t,r,i,o,a,s,l,c,d){let f=t+Se,p;return n.firstCreatePass?(p=ii(n,f,4,a||null,s||null),Ru()&&Wy(n,e,p,en(n.consts,c),Iy),kb(n,p)):p=n.data[f],fv(p,e,n,t,r,i,o,l),Ko(p)&&sm(n,e,p),c!=null&&Zl(e,p,d),p}function ec(e,n,t,r,i,o,a,s,l,c,d){let f=t+Se,p;if(n.firstCreatePass){if(p=ii(n,f,4,a||null,s||null),c!=null){let m=en(n.consts,c);p.localNames=[];for(let h=0;h<m.length;h+=2)p.localNames.push(m[h],-1)}}else p=n.data[f];return fv(p,e,n,t,r,i,o,l),c!=null&&Zl(e,p,d),p}function $t(e,n,t,r,i,o,a,s){let l=V(),c=ye(),d=en(c.consts,o);return iI(l,c,e,n,t,r,i,d,void 0,a,s),$t}function tc(e,n,t,r,i,o,a,s){let l=V(),c=ye(),d=en(c.consts,o);return ec(l,c,e,n,t,r,i,d,void 0,a,s),tc}var oI=aI;function aI(e,n,t,r){return vl(!0),n[we].createComment("")}var wm=new g("");var nc=new g("");function mv(){Od(()=>{let e="";throw new _(-600,e)})}var sI=10;var At=(()=>{class e{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(jn);afterRenderManager=u(Yl);zonelessEnabled=u(ia);rootEffectScheduler=u(Cl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new x;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Xr);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(pe(t=>!t))}constructor(){u(on,{optional:!0})}whenStable(){let t;return new Promise(r=>{t=this.isStable.subscribe({next:i=>{i&&r()}})}).finally(()=>{t.unsubscribe()})}_injector=u(Ae);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,r){return this.bootstrapImpl(t,r)}bootstrapImpl(t,r,i=O.NULL){return this._injector.get(I).run(()=>{if(ce(ie.BootstrapComponentStart),!this._injector.get(Cm).done){let D="";throw new _(405,D)}let s=rr(t),l=this._injector.get(ur),c=new Zi(s,l);this.componentTypes.push(t);let{hostElement:d,directives:f,bindings:p}=lI(r),m=d||c.selector,h=c.create(i,[],m,l.injector,f,p),y=h.location.nativeElement,v=h.injector.get(wm,null);return v?.registerApplication(y),h.onDestroy(()=>{this.detachView(h.hostView),sa(this.components,h),v?.unregisterApplication(y)}),this._loadComponent(h),ce(ie.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ce(ie.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ql.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ce(ie.ChangeDetectionEnd),new _(101,!1);let t=L(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,L(t),this.afterTick.next(),ce(ie.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Fe,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<sI;){ce(ie.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ce(ie.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let r=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i}of this.allViews){if(!r&&!Jo(i))continue;let o=r&&!this.zonelessEnabled?0:1;Fy(i,o),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Jo(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let r=t;this._views.push(r),r.attachToAppRef(this)}detachView(t){let r=t;sa(this._views,r),r.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(i){this.internalErrorHandler(i)}this.components.push(t),this._injector.get(nc,[]).forEach(i=>i(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>sa(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new _(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function lI(e){return e===void 0||typeof e=="string"||e instanceof Element?{hostElement:e}:e}function sa(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function _e(e,n,t,r){let i=V(),o=Hi();if(Un(i,o,n)){let a=ye(),s=ta();ES(s,i,e,n,t,r)}return _e}function ge(e,n,t,r,i,o,a,s){Gn("NgControlFlow");let l=V(),c=ye(),d=en(c.consts,o);return ec(l,c,e,n,t,r,i,d,256,a,s),Em}function Em(e,n,t,r,i,o,a,s){return Gn("NgControlFlow"),cI(e,n,t,r,i,o,a,s),Em}function cI(e,n,t,r,i,o,a,s){let l=V(),c=ye(),d=en(c.consts,o);ec(l,c,e,n,t,r,i,d,512,a,s)}function be(e,n){Gn("NgControlFlow");let t=V(),r=Hi(),i=t[r]!==yt?t[r]:-1,o=i!==-1?Db(t,Se+i):void 0,a=0;if(Un(t,r,e)){let s=L(null);try{if(o!==void 0&&WS(o,a),e!==-1){let l=Se+e,c=Db(t,l),d=dI(t[M],l),f=e0(c,d,t),p=dm(t,d,n,{dehydratedView:f});fm(c,p,a,Ol(d,f))}}finally{L(s)}}else if(o!==void 0){let s=GS(o,a);s!==void 0&&(s[qe]=n)}}function Db(e,n){return e[n]}function dI(e,n){return sl(e,n)}function vt(e,n,t){let r=V(),i=Hi();if(Un(r,i,n)){let o=ye(),a=ta();_S(a,r,e,n,r[we],t)}return vt}function Of(e,n,t,r,i){lm(n,e,t,i?"class":"style",r)}function N(e,n,t,r){let i=V(),o=i[M],a=e+Se,s=o.firstCreatePass?Yy(a,i,2,n,Iy,Ru(),t,r):o.data[a];if(Vn(s)){let l=i[hn].tracingService;if(l&&l.componentCreate){let c=o.data[s.directiveStart+s.componentOffset];return l.componentCreate(Uy(c),()=>(xb(e,n,i,s,r),N))}}return xb(e,n,i,s,r),N}function xb(e,n,t,r,i){if(My(r,t,e,n,pv),Ko(r)){let o=t[M];sm(o,t,r),ny(o,r,t)}i!=null&&Zl(t,r)}function k(){let e=ye(),n=Xe(),t=Ny(n);return e.firstCreatePass&&Xy(e,t),Ou(t)&&Fu(),Au(),t.classesWithoutHost!=null&&Hw(t)&&Of(e,t,V(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&zw(t)&&Of(e,t,V(),t.stylesWithoutHost,!1),k}function Ue(e,n,t,r){return N(e,n,t,r),k(),Ue}function Pe(e,n,t,r){let i=V(),o=i[M],a=e+Se,s=o.firstCreatePass?_0(a,o,2,n,t,r):o.data[a];return My(s,i,e,n,pv),r!=null&&Zl(i,s),Pe}function $e(){let e=Xe(),n=Ny(e);return Ou(n)&&Fu(),Au(),$e}function Qe(e,n,t,r){return Pe(e,n,t,r),$e(),Qe}var pv=(e,n,t,r,i)=>(vl(!0),cy(n[we],r,Uu()));function ga(){return V()}function an(e,n,t){let r=V(),i=Hi();if(Un(r,i,n)){let o=ye(),a=ta();Sy(a,r,e,n,r[we],t)}return an}var oa=void 0;function uI(e){let n=Math.floor(Math.abs(e)),t=e.toString().replace(/^[^.]*\.?/,"").length;return n===1&&t===0?1:5}var fI=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],oa,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],oa,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",oa,oa,oa],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",uI],tf=Object.create(null);function Rt(e){let n=mI(e),t=wb(n);if(t)return t;let r=n.split("-")[0];if(t=wb(r),t)return t;if(r==="en")return fI;throw new _(701,!1)}function wb(e){if(!(e in tf)){let n=pn.ng&&pn.ng.common&&pn.ng.common.locales&&pn.ng.common.locales[e];return n!==void 0&&(tf[e]=n),n}return tf[e]}var Le={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};function mI(e){return e.toLowerCase().replace(/_/g,"-")}var ba="en-US";var pI=ba;function hv(e){typeof e=="string"&&(pI=e.toLowerCase().replace(/_/g,"-"))}function Re(e,n,t){let r=V(),i=ye(),o=Xe();return hI(i,r,r[we],o,e,n,t),Re}function rc(e,n,t){let r=V(),i=ye(),o=Xe();return(o.type&3||t)&&mm(o,i,r,t,r[we],e,n,Qr(o,r,n)),rc}function hI(e,n,t,r,i,o,a){let s=!0,l=null;if((r.type&3||a)&&(l??=Qr(r,n,o),mm(r,e,n,a,t,i,o,l)&&(s=!1)),s){let c=r.outputs?.[i],d=r.hostDirectiveOutputs?.[i];if(d&&d.length)for(let f=0;f<d.length;f+=2){let p=d[f],m=d[f+1];l??=Qr(r,n,o),Ll(r,n,p,m,i,l)}if(c&&c.length)for(let f of c)l??=Qr(r,n,o),Ll(r,n,f,i,i,l)}}function Ve(e=1){return Ag(e)}function gI(e,n){let t=null,r=PE(e);for(let i=0;i<n.length;i++){let o=n[i];if(o==="*"){t=i;continue}if(r===null?my(e,o,!0):jE(r,o))return i}return t}function Ge(e){let n=V()[lt][Ze];if(!n.projection){let t=e?e.length:1,r=n.projection=rg(t,null),i=r.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let a=e?gI(o,e):0;a!==null&&(i[a]?i[a].projectionNext=o:r[a]=o,i[a]=o)}o=o.next}}}function Q(e,n=0,t,r,i,o){let a=V(),s=ye(),l=r?e+1:null;l!==null&&ec(a,s,l,r,i,o,null,t);let c=ii(s,Se+e,16,null,t||null);c.projection===null&&(c.projection=n),Vu();let f=!a[Pi]||ku();a[lt][Ze].projection[c.projection]===null&&l!==null?bI(a,s,l):f&&!$l(c)&&dS(s,a,c)}function bI(e,n,t){let r=Se+t,i=n.data[r],o=e[r],a=Ef(o,i.tView.ssrId),s=dm(e,i,void 0,{dehydratedView:a});fm(o,s,0,Ol(i,a))}function fr(e,n,t,r){return nv(e,n,t,r),fr}function xn(e,n,t){return tv(e,n,t),xn}function Ce(e){let n=V(),t=ye(),r=pl();ea(r+1);let i=gm(t,r);if(e.dirty&&mg(n)===((i.metadata.flags&2)===2)){if(i.matches===null)e.reset([]);else{let o=iv(n,r);e.reset(o,Gb),e.notifyOnChanges()}return!0}return!1}function De(){return hm(V(),pl())}function ic(e,n,t,r,i){return av(n,nv(e,t,r,i)),ic}function oc(e,n,t,r){return av(e,tv(n,t,r)),oc}function ac(e=1){ea(pl()+e)}function mr(e){let n=ju();return ll(n,Se+e)}function wl(e,n){return e<<17|n<<2}function ni(e){return e>>17&32767}function yI(e){return(e&2)==2}function vI(e,n){return e&131071|n<<17}function Ff(e){return e|2}function Ki(e){return(e&131068)>>2}function nf(e,n){return e&-131069|n<<2}function _I(e){return(e&1)===1}function Pf(e){return e|1}function CI(e,n,t,r,i,o){let a=o?n.classBindings:n.styleBindings,s=ni(a),l=Ki(a);e[r]=t;let c=!1,d;if(Array.isArray(t)){let f=t;d=f[1],(d===null||ki(f,d)>0)&&(c=!0)}else d=t;if(i)if(l!==0){let p=ni(e[s+1]);e[r+1]=wl(p,s),p!==0&&(e[p+1]=nf(e[p+1],r)),e[s+1]=vI(e[s+1],r)}else e[r+1]=wl(s,0),s!==0&&(e[s+1]=nf(e[s+1],r)),s=r;else e[r+1]=wl(l,0),s===0?s=r:e[l+1]=nf(e[l+1],r),l=r;c&&(e[r+1]=Ff(e[r+1])),Eb(e,d,r,!0),Eb(e,d,r,!1),DI(n,d,e,r,o),a=wl(s,l),o?n.classBindings=a:n.styleBindings=a}function DI(e,n,t,r,i){let o=i?e.residualClasses:e.residualStyles;o!=null&&typeof n=="string"&&ki(o,n)>=0&&(t[r+1]=Pf(t[r+1]))}function Eb(e,n,t,r){let i=e[t+1],o=n===null,a=r?ni(i):Ki(i),s=!1;for(;a!==0&&(s===!1||o);){let l=e[a],c=e[a+1];xI(l,n)&&(s=!0,e[a+1]=r?Pf(c):Ff(c)),a=r?ni(c):Ki(c)}s&&(e[t+1]=r?Ff(i):Pf(i))}function xI(e,n){return e===null||n==null||(Array.isArray(e)?e[1]:e)===n?!0:Array.isArray(e)&&typeof n=="string"?ki(e,n)>=0:!1}var nn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function wI(e){return e.substring(nn.key,nn.keyEnd)}function EI(e){return SI(e),gv(e,bv(e,0,nn.textEnd))}function gv(e,n){let t=nn.textEnd;return t===n?-1:(n=nn.keyEnd=II(e,nn.key=n,t),bv(e,n,t))}function SI(e){nn.key=0,nn.keyEnd=0,nn.value=0,nn.valueEnd=0,nn.textEnd=e.length}function bv(e,n,t){for(;n<t&&e.charCodeAt(n)<=32;)n++;return n}function II(e,n,t){for(;n<t&&e.charCodeAt(n)>32;)n++;return n}function pr(e,n,t){return yv(e,n,t,!1),pr}function J(e,n){return yv(e,n,null,!0),J}function sn(e){NI(FI,MI,e,!0)}function MI(e,n){for(let t=EI(n);t>=0;t=gv(n,t))il(e,wI(n),!0)}function yv(e,n,t,r){let i=V(),o=ye(),a=fl(2);if(o.firstUpdatePass&&_v(o,e,a,r),n!==yt&&Un(i,a,n)){let s=o.data[vn()];Cv(o,s,i,i[we],e,i[a+1]=LI(n,t),r,a)}}function NI(e,n,t,r){let i=ye(),o=fl(2);i.firstUpdatePass&&_v(i,null,o,r);let a=V();if(t!==yt&&Un(a,o,t)){let s=i.data[vn()];if(Dv(s,r)&&!vv(i,o)){let l=r?s.classesWithoutHost:s.stylesWithoutHost;l!==null&&(t=Js(l,t||"")),Of(i,s,a,t,r)}else PI(i,s,a,a[we],a[o+1],a[o+1]=OI(e,n,t),r,o)}}function vv(e,n){return n>=e.expandoStartIndex}function _v(e,n,t,r){let i=e.data;if(i[t+1]===null){let o=i[vn()],a=vv(e,t);Dv(o,r)&&n===null&&!a&&(n=!1),n=TI(i,o,n,r),CI(i,o,n,t,a,r)}}function TI(e,n,t,r){let i=Ig(e),o=r?n.residualClasses:n.residualStyles;if(i===null)(r?n.classBindings:n.styleBindings)===0&&(t=rf(null,e,n,t,r),t=fa(t,n.attrs,r),o=null);else{let a=n.directiveStylingLast;if(a===-1||e[a]!==i)if(t=rf(i,e,n,t,r),o===null){let l=AI(e,n,r);l!==void 0&&Array.isArray(l)&&(l=rf(null,e,n,l[1],r),l=fa(l,n.attrs,r),RI(e,n,r,l))}else o=kI(e,n,r)}return o!==void 0&&(r?n.residualClasses=o:n.residualStyles=o),t}function AI(e,n,t){let r=t?n.classBindings:n.styleBindings;if(Ki(r)!==0)return e[ni(r)]}function RI(e,n,t,r){let i=t?n.classBindings:n.styleBindings;e[ni(i)]=r}function kI(e,n,t){let r,i=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<i;o++){let a=e[o].hostAttrs;r=fa(r,a,t)}return fa(r,n.attrs,t)}function rf(e,n,t,r,i){let o=null,a=t.directiveEnd,s=t.directiveStylingLast;for(s===-1?s=t.directiveStart:s++;s<a&&(o=n[s],r=fa(r,o.hostAttrs,i),o!==e);)s++;return e!==null&&(t.directiveStylingLast=s),r}function fa(e,n,t){let r=t?1:2,i=-1;if(n!==null)for(let o=0;o<n.length;o++){let a=n[o];typeof a=="number"?i=a:i===r&&(Array.isArray(e)||(e=e===void 0?[]:["",e]),il(e,a,t?!0:n[++o]))}return e===void 0?null:e}function OI(e,n,t){if(t==null||t==="")return tt;let r=[],i=Cn(t);if(Array.isArray(i))for(let o=0;o<i.length;o++)e(r,i[o],!0);else if(i instanceof Set)for(let o of i)e(r,o,!0);else if(typeof i=="object")for(let o in i)Object.hasOwn(i,o)&&e(r,o,i[o]);else typeof i=="string"&&n(r,i);return r}function FI(e,n,t){let r=String(n);r!==""&&!r.includes(" ")&&il(e,r,t)}function PI(e,n,t,r,i,o,a,s){i===yt&&(i=tt);let l=0,c=0,d=0<i.length?i[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let p=l<i.length?i[l+1]:void 0,m=c<o.length?o[c+1]:void 0,h=null,y;d===f?(l+=2,c+=2,p!==m&&(h=f,y=m)):f===null||d!==null&&d<f?(l+=2,h=d):(c+=2,h=f,y=m),h!==null&&Cv(e,n,t,r,h,y,a,s),d=l<i.length?i[l]:null,f=c<o.length?o[c]:null}}function Cv(e,n,t,r,i,o,a,s){if(!(n.type&3))return;let l=e.data,c=l[s+1],d=_I(c)?Sb(l,n,t,i,Ki(c),a):void 0;if(!zl(d)){zl(o)||yI(c)&&(o=Sb(l,null,t,i,s,a));let f=Su(vn(),t);fS(r,a,f,i,o)}}function Sb(e,n,t,r,i,o){let a=n===null,s;for(;i>0;){let l=e[i],c=Array.isArray(l),d=c?l[1]:l,f=d===null,p=t[i+1];p===yt&&(p=f?tt:void 0);let m=f?ol(p,r):d===r?p:void 0;if(c&&!zl(m)&&(m=ol(l,r)),zl(m)&&(s=m,a))return s;let h=e[i+1];i=a?ni(h):Ki(h)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(s=ol(l,r))}return s}function zl(e){return e!==void 0}function LI(e,n){return e==null||e===""||(typeof n=="string"?e=Cn(e)+n:typeof e=="object"&&(e=Qs(Cn(e)))),e}function Dv(e,n){return(e.flags&(n?8:16))!==0}function le(e,n=""){let t=V(),r=ye(),i=e+Se,o=r.firstCreatePass?ii(r,i,1,n,null):r.data[i],a=VI(r,t,o,n);t[i]=a,yl()&&nm(r,t,a,o),Yr(o,!1)}var VI=(e,n,t,r)=>(vl(!0),SE(n[we],r));function jI(e,n,t,r=""){return Un(e,Hi(),t)?n+Wo(t)+r:yt}function BI(e,n,t,r,i,o=""){let a=Dg(),s=$y(e,a,t,i);return fl(2),s?n+Wo(t)+r+Wo(i)+o:yt}function Ji(e){return wn("",e),Ji}function wn(e,n,t){let r=V(),i=jI(r,e,n,t);return i!==yt&&xv(r,vn(),i),wn}function ya(e,n,t,r,i){let o=V(),a=BI(o,e,n,t,r,i);return a!==yt&&xv(o,vn(),a),ya}function xv(e,n,t){let r=Su(n,e);IE(e[we],r,t)}var wv={};function sc(e){Gn("NgLet");let n=ye(),t=V(),r=e+Se,i=ii(n,r,128,null,null);return Yr(i,!1),Qo(n,t,r,wv),sc}function Sm(e){let n=ye(),t=V(),r=vn();return Qo(n,t,r,e),e}function lc(e){let n=ju(),t=ll(n,Se+e);if(t===wv)throw new _(314,!1);return t}function Ib(e,n,t){let r=ye();r.firstCreatePass&&Ev(n,r.data,r.blueprint,Jt(e),t)}function Ev(e,n,t,r,i){if(e=ze(e),Array.isArray(e))for(let o=0;o<e.length;o++)Ev(e[o],n,t,r,i);else{let o=ye(),a=V(),s=Xe(),l=Vr(e)?e:ze(e.provide),c=Cu(e),d=s.providerIndexes&1048575,f=s.directiveStart,p=s.providerIndexes>>20;if(Vr(e)||!e.multi){let m=new Jr(c,i,se,null),h=af(l,n,i?d:d+p,f);h===-1?(cf(kl(s,a),o,l),of(o,e,n.length),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),t.push(m),a.push(m)):(t[h]=m,a[h]=m)}else{let m=af(l,n,d+p,f),h=af(l,n,d,d+p),y=m>=0&&t[m],v=h>=0&&t[h];if(i&&!v||!i&&!y){cf(kl(s,a),o,l);let D=UI(i?zI:HI,t.length,i,r,c,e);!i&&v&&(t[h].providerFactory=D),of(o,e,n.length,0),n.push(l),s.directiveStart++,s.directiveEnd++,i&&(s.providerIndexes+=1048576),t.push(D),a.push(D)}else{let D=Sv(t[i?h:m],c,!i&&r);of(o,e,m>-1?m:h,D)}!i&&r&&v&&t[h].componentProviders++}}}function of(e,n,t,r){let i=Vr(n),o=cg(n);if(i||o){let l=(o?ze(n.useClass):n).prototype.ngOnDestroy;if(l){let c=e.destroyHooks||(e.destroyHooks=[]);if(!i&&n.multi){let d=c.indexOf(t);d===-1?c.push(t,[r,l]):c[d+1].push(r,l)}else c.push(t,l)}}}function Sv(e,n,t){return t&&e.componentProviders++,e.multi.push(n)-1}function af(e,n,t,r){for(let i=t;i<r;i++)if(n[i]===e)return i;return-1}function HI(e,n,t,r,i){return Lf(this.multi,[])}function zI(e,n,t,r,i){let o=this.multi,a;if(this.providerFactory){let s=this.providerFactory.componentProviders,l=la(r,r[M],this.providerFactory.index,i);a=l.slice(0,s),Lf(o,a);for(let c=s;c<l.length;c++)a.push(l[c])}else a=[],Lf(o,a);return a}function Lf(e,n){for(let t=0;t<e.length;t++){let r=e[t];n.push(r())}return n}function UI(e,n,t,r,i,o){let a=new Jr(e,t,se,null);return a.multi=[],a.index=n,a.componentProviders=0,Sv(a,i,r&&!t),a}function ct(e,n){return t=>{t.providersResolver=(r,i)=>Ib(r,i?i(e):e,!1),n&&(t.viewProvidersResolver=(r,i)=>Ib(r,i?i(n):n,!0))}}function $I(e,n){let t=e[n];return t===yt?void 0:t}function GI(e,n,t,r,i,o,a){let s=n+t;return $y(e,s,i,o)?n0(e,s+2,a?r.call(a,i,o):r(i,o)):$I(e,s+2)}function Im(e,n){let t=ye(),r,i=e+Se;t.firstCreatePass?(r=WI(n,t.pipeRegistry),t.data[i]=r,r.onDestroy&&(t.destroyHooks??=[]).push(i,r.onDestroy)):r=t.data[i];let o=r.factory||(r.factory=nr(r.type,!0)),a,s=at(se);try{let l=Rl(!1),c=o();return Rl(l),Qo(t,V(),i,c),c}finally{at(s)}}function WI(e,n){if(n)for(let t=n.length-1;t>=0;t--){let r=n[t];if(e===r.name)return r}}function Mm(e,n,t,r){let i=e+Se,o=V(),a=ll(o,i);return qI(o,i)?GI(o,Cg(),n,a.transform,t,r,a):a.transform(t,r)}function qI(e,n){return e[M].data[n].pure}function va(e,n){return Kl(e,n)}var Iv=(()=>{class e{applicationErrorHandler=u(jn);appRef=u(At);taskService=u(Xr);ngZone=u(I);zonelessEnabled=u(ia);tracing=u(on,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new te;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ho):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Xu,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let r=this.useMicrotaskScheduler?Pg:$u;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ho+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(r){this.applicationErrorHandler(r)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function Mv(){return[{provide:mn,useExisting:Iv},{provide:I,useClass:zo},{provide:ia,useValue:!0}]}function YI(){return typeof $localize<"u"&&$localize.locale||ba}var _a=new g("",{factory:()=>u(_a,{optional:!0,skipSelf:!0})||YI()});var Om=new g("");function Te(e,n){return Io(e,n?.equal)}function oe(e){return yh(e)}var cc=class extends Error{dependency;constructor(n){super("Dependency error",{cause:n.error()}),this.name="ResourceDependencyError",this.dependency=n}},si=class e extends Error{_brand;constructor(n){super(n)}static IDLE=new e("IDLE");static LOADING=new e("LOADING")},XI=e=>e;function hr(e,n){if(typeof e=="function"){let t=jd(e,XI,n?.equal);return Nv(t,n?.debugName,n?.set)}else{let t=jd(e.source,e.computation,e.equal);return Nv(t,e.debugName,e.set)}}function Nv(e,n,t){let r=e[Me],i=e;if(t!==void 0){let o=a=>Bd(r,a);i.set=a=>t(a,o),i.update=a=>t(a(oe(e)),o)}else i.set=o=>Bd(r,o),i.update=o=>bh(r,o);return i.asReadonly=na.bind(e),i}var Nm=class{value;isLoading;constructor(n,t){this.value=n,this.value.set=this.set.bind(this),this.value.update=this.update.bind(this),this.value.asReadonly=na,this.isLoading=Te(()=>this.status()==="loading"||this.status()==="reloading",void 0)}isError=Te(()=>this.status()==="error");update(n){this.set(n(oe(this.value)))}isValueDefined=Te(()=>this.isError()?!1:this.value()!==void 0);_snapshot;get snapshot(){return this._snapshot??=Te(()=>{let n=this.status();return n==="error"?{status:"error",error:this.error()}:{status:n,value:this.value()}})}hasValue(){return this.isValueDefined()}asReadonly(){return this}},Ca=class extends Nm{loaderFn;equal;debugName;transferCacheKey;pendingTasks;state;extRequest;effectRef;pendingController;resolvePendingTask=void 0;destroyed=!1;unregisterOnDestroy;status;error;transferState;constructor(n,t,r,i,o,a,s,l){if(Rv())throw kv();super(Te(()=>{let d=this.state().stream?.();if(!d||this.state().status==="loading"&&this.error())return r;if(!Tm(d))throw new dc(this.error());return d.value},{equal:i}),o),this.loaderFn=t,this.equal=i,this.debugName=o,this.transferCacheKey=s;let c=a.get(Om,void 0,{optional:!0})??{isActive:!1};this.transferState=a.get(zi,void 0,{optional:!0})??void 0,this.extRequest=hr(()=>{try{return Rm(!0),{request:n(ZI),reload:0}}catch(d){return km(d),d===si.IDLE?{status:"idle",reload:0}:d===si.LOADING?{status:"loading",reload:0}:{error:d,reload:0}}finally{Rm(!1)}},void 0),this.state=hr({source:this.extRequest,computation:(d,f)=>{let{request:p,status:m,error:h}=d,y;if(h)m="resolved",y=re({error:Da(h)},void 0);else if(!m)if(f)m=p===void 0?"idle":"loading",f.value.extRequest.request===p&&(y=f.value.stream);else{let v=this.transferState,D=this.transferCacheKey;c.isActive&&D&&v&&p!==void 0&&v.hasKey(D)&&(y=re({value:v.get(D,r)},void 0)),y||(y=l?.(d.request)),l=void 0,m=p===void 0?"idle":y?"resolved":"loading"}return{extRequest:d,status:m,previousStatus:f?Tv(f.value):"idle",stream:y}}}),this.effectRef=Mt(this.loadEffect.bind(this),{injector:a,manualCleanup:!0}),this.pendingTasks=a.get($i),this.unregisterOnDestroy=a.get(We).onDestroy(()=>this.destroy()),this.status=Te(()=>Tv(this.state()),void 0),this.error=Te(()=>{let d=this.state().stream?.();return d&&!Tm(d)?d.error:void 0},void 0)}set(n){if(this.destroyed)return;let t=oe(this.error),r=oe(this.state);if(!t){let i=oe(this.value);if(r.status==="local"&&(this.equal?this.equal(i,n):i===n))return}this.state.set({extRequest:r.extRequest,status:"local",previousStatus:"local",stream:re({value:n},void 0)}),this.abortInProgressLoad()}reload(){let{status:n}=oe(this.state);return n==="idle"||n==="loading"?!1:(this.extRequest.update(({request:t,reload:r})=>({request:t,reload:r+1})),!0)}destroy(){this.destroyed=!0,this.unregisterOnDestroy(),this.effectRef.destroy(),this.abortInProgressLoad(),this.state.set({extRequest:{request:void 0,reload:0},status:"idle",previousStatus:"idle",stream:void 0})}async loadEffect(){let n=this.extRequest(),{status:t,previousStatus:r}=oe(this.state);if(n.request===void 0)return;if(t!=="loading")return;this.abortInProgressLoad();let i=this.resolvePendingTask=this.pendingTasks.add(),{signal:o}=this.pendingController=new AbortController;try{let a=oe(()=>this.loaderFn({params:n.request,abortSignal:o,previous:{status:r}})),s=()=>o.aborted||oe(this.extRequest)!==n;if(gt(a)){if(s())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:a});let l=oe(a)}else{let l=await a;if(s())return;this.state.set({extRequest:n,status:"resolved",previousStatus:"resolved",stream:l});let c=l?oe(l):void 0}}catch(a){if(km(a),o.aborted||oe(this.extRequest)!==n)return;this.state.set({extRequest:n,status:"resolved",previousStatus:"error",stream:re({error:Da(a)},void 0)})}finally{i?.(),i=void 0}}abortInProgressLoad(){oe(()=>this.pendingController?.abort()),this.pendingController=void 0,this.resolvePendingTask?.(),this.resolvePendingTask=void 0}};function Tv(e){switch(e.status){case"loading":return e.extRequest.reload===0?"loading":"reloading";case"resolved":return Tm(e.stream())?"resolved":"error";default:return e.status}}function Tm(e){return e.error===void 0}function Da(e){return qu(e)?e:new Am(e)}var dc=class extends Error{constructor(n){super(n.message,{cause:n})}},Am=class extends Error{constructor(n){super(String(n),{cause:n})}};function Fm(e){switch(e.status()){case"idle":throw si.IDLE;case"error":throw new cc(e);case"loading":case"reloading":throw si.LOADING}return e.value()}var ZI={chain:Fm},Av=!1;function Rv(){return Av}function Rm(e){Av=e}function kv(){return new _(992,!1)}function km(e){if(e instanceof _&&e.code===992)throw e}function jv(e,n){let t=Object.create(Nb);t.value=e,t.transformFn=n?.transform;function r(){if(En(t),t.value===Ul){let i=null;throw new _(-950,i)}return t.value}return r[Me]=t,r}var fc=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>jf(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};function Ov(e,n){return jv(e,n)}function fM(e){return jv(Ul,e)}var jm=(Ov.required=fM,Ov);function Fv(e,n){return bm(n)}function mM(e,n){return ym(n)}var wa=(Fv.required=mM,Fv);function Pv(e,n){return bm(n)}function pM(e,n){return ym(n)}var Bv=(Pv.required=pM,Pv);var hM=1e4;var d$=hM-1e3;var dt=(()=>{class e{static __NG_ELEMENT_ID__=gM}return e})();function gM(e){return bM(Xe(),V(),(e&16)===16)}function bM(e,n,t){if(Vn(e)&&!t){let r=Ht(e.index,n);return new dr(r,r)}else if(e.type&175){let r=n[lt];return new dr(r,n)}return null}var Lm=new g(""),yM=new g("");function xa(e){return!e.moduleRef}function vM(e){let n=xa(e)?e.r3Injector:e.moduleRef.injector,t=n.get(I);return t.run(()=>{xa(e)?e.r3Injector.resolveInjectorInitializers():e.moduleRef.resolveInjectorInitializers();let r=n.get(jn),i;if(t.runOutsideAngular(()=>{i=t.onError.subscribe({next:r})}),xa(e)){let o=()=>n.destroy(),a=e.platformInjector.get(Lm);a.add(o),n.onDestroy(()=>{i.unsubscribe(),a.delete(o)})}else{let o=()=>e.moduleRef.destroy(),a=e.platformInjector.get(Lm);a.add(o),e.moduleRef.onDestroy(()=>{sa(e.allPlatformModules,e.moduleRef),i.unsubscribe(),a.delete(o)})}return CM(r,t,()=>{let o=n.get(Xr),a=o.add(),s=n.get(Cm);return s.runInitializers(),s.donePromise.then(()=>{let l=n.get(_a,ba);if(hv(l||ba),!n.get(yM,!0))return xa(e)?n.get(At):(e.allPlatformModules.push(e.moduleRef),e.moduleRef);if(xa(e)){let d=n.get(At);return e.rootComponent!==void 0&&d.bootstrap(e.rootComponent),d}else return _M?.(e.moduleRef,e.allPlatformModules),e.moduleRef}).finally(()=>{o.remove(a)})})})}var _M;function CM(e,n,t){try{let r=t();return ai(r)?r.catch(i=>{throw n.runOutsideAngular(()=>e(i)),i}):r}catch(r){throw n.runOutsideAngular(()=>e(r)),r}}var uc=null;function DM(e=[],n){return O.create({name:n,providers:[{provide:Xo,useValue:"platform"},{provide:Lm,useValue:new Set([()=>uc=null])},...e]})}function xM(e=[]){if(uc)return uc;let n=DM(e);return uc=n,mv(),wM(n),n}function wM(e){let n=e.get(_l,null);Fi(e,()=>{n?.forEach(t=>t())})}function Hv(e){let{rootComponent:n,appProviders:t,platformProviders:r,platformRef:i}=e;ce(ie.BootstrapApplicationStart);try{let o=i?.injector??xM(r),a=[Mv(),jg,...t||[]],s=new ua({providers:a,parent:o,debugName:"",runEnvironmentInitializers:!1});return vM({r3Injector:s.injector,platformInjector:o,rootComponent:n})}catch(o){return Promise.reject(o)}finally{ce(ie.BootstrapApplicationEnd)}}function Ie(e){return typeof e=="boolean"?e:e!=null&&e!=="false"}function Ea(e,n=NaN){return!isNaN(parseFloat(e))&&!isNaN(Number(e))?Number(e):n}var Pm=Symbol("NOT_SET"),zv=new Set,EM=W(C({},Di),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Pm,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(e){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Pm&&!_i(this))return this.signal;try{for(let i of this.cleanup??zv)i()}finally{this.cleanup?.clear()}let n=[];e!==void 0&&n.push(e),n.push(this.registerCleanupFn);let t=Sn(this),r;try{r=this.userFn.apply(null,n)}finally{Qn(this,t)}return(this.value===Pm||!this.equal(this.value,r))&&(this.value=r,this.version++),this.signal}}),Vm=class extends ca{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,t,r,i,o,a=null){super(n,[void 0,void 0,void 0,void 0],r,!1,o.get(We),a),this.scheduler=i;for(let s of Zf){let l=t[s];if(l===void 0)continue;let c=Object.create(EM);c.sequence=this,c.phase=s,c.userFn=l,c.dirty=!0,c.signal=()=>(En(c),c.value),c.signal[Me]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[s]=c,this.hooks[s]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let t of n.cleanup??zv)t()}finally{Jn(n)}}};function Bm(e,n){let t=n?.injector??u(O),r=t.get(mn),i=t.get(Yl),o=t.get(on,null,{optional:!0});i.impl??=t.get(Kf);let a=e;typeof a=="function"&&(a={mixedReadWrite:e});let s=t.get(Ui,null,{optional:!0}),l=new Vm(i.impl,[a.earlyRead,a.write,a.mixedReadWrite,a.read],s?.view,r,t,o?.snapshot(null));return i.impl.register(l),l}function mc(e,n){let t=rr(e),r=n.elementInjector||Oi(),o=new Zi(t).create(r,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings);return n.onError&&(o.hostView._lView[ji]=n.onError),o}var Uv=null;function Gt(){return Uv}function Hm(e){Uv??=e}var Sa=class{},eo=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:()=>u($v),providedIn:"platform"})}return e})();var $v=(()=>{class e extends eo{_location;_history;_doc=u(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Gt().getBaseHref(this._doc)}onPopState(t){let r=Gt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",t,!1),()=>r.removeEventListener("popstate",t)}onHashChange(t){let r=Gt().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",t,!1),()=>r.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,r,i){this._history.pushState(t,r,i)}replaceState(t,r,i){this._history.replaceState(t,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function qv(e,n){return e?n?e.endsWith("/")?n.startsWith("/")?e+n.slice(1):e+n:n.startsWith("/")?e+n:`${e}/${n}`:e:n}function Gv(e){let n=e.search(/#|\?|$/);return e[n-1]==="/"?e.slice(0,n-1)+e.slice(n):e}function gr(e){return e&&e[0]!=="?"?`?${e}`:e}var pc=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:()=>u(IM),providedIn:"root"})}return e})(),SM=new g(""),IM=(()=>{class e extends pc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,r){super(),this._platformLocation=t,this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??u(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return qv(this._baseHref,t)}path(t=!1){let r=this._platformLocation.pathname+gr(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${r}${i}`:r}pushState(t,r,i,o){let a=this.prepareExternalUrl(i+gr(o));this._platformLocation.pushState(t,r,a)}replaceState(t,r,i,o){let a=this.prepareExternalUrl(i+gr(o));this._platformLocation.replaceState(t,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(r){return new(r||e)(A(eo),A(SM,8))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var hc=(()=>{class e{_subject=new x;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let r=this._locationStrategy.getBaseHref();this._basePath=TM(Gv(Wv(r))),this._locationStrategy.onPopState(i=>{let o={url:this.path(!0),pop:!0,state:i.state,type:i.type};i.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,r=""){return this.path()==this.normalize(t+gr(r))}normalize(t){return e.stripTrailingSlash(NM(this._basePath,Wv(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,r="",i=null){this._locationStrategy.pushState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+gr(r)),i)}replaceState(t,r="",i=null){this._locationStrategy.replaceState(i,"",t,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+gr(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",r){this._urlChangeListeners.forEach(i=>i(t,r))}subscribe(t,r,i){return this._subject.subscribe({next:t,error:r??void 0,complete:i??void 0})}static normalizeQueryParams=gr;static joinWithSlash=qv;static stripTrailingSlash=Gv;static \u0275fac=function(r){return new(r||e)(A(pc))};static \u0275prov=K({token:e,factory:()=>MM(),providedIn:"root"})}return e})();function MM(){return new hc(A(pc))}function NM(e,n){if(!e||!n.startsWith(e))return n;let t=n.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:n}function Wv(e){return e.replace(/\/index\.html$/,"")}function TM(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var rt=(function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e})(rt||{}),fe=(function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e})(fe||{}),_t=(function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e})(_t||{}),qn={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Xv(e){return Rt(e)[Le.LocaleId]}function Zv(e,n,t){let r=Rt(e),i=[r[Le.DayPeriodsFormat],r[Le.DayPeriodsStandalone]],o=Wt(i,n);return Wt(o,t)}function Kv(e,n,t){let r=Rt(e),i=[r[Le.DaysFormat],r[Le.DaysStandalone]],o=Wt(i,n);return Wt(o,t)}function Qv(e,n,t){let r=Rt(e),i=[r[Le.MonthsFormat],r[Le.MonthsStandalone]],o=Wt(i,n);return Wt(o,t)}function Jv(e,n){let r=Rt(e)[Le.Eras];return Wt(r,n)}function Ia(e,n){let t=Rt(e);return Wt(t[Le.DateFormat],n)}function Ma(e,n){let t=Rt(e);return Wt(t[Le.TimeFormat],n)}function Na(e,n){let r=Rt(e)[Le.DateTimeFormat];return Wt(r,n)}function Ta(e,n){let t=Rt(e),r=t[Le.NumberSymbols][n];if(typeof r>"u"){if(n===qn.CurrencyDecimal)return t[Le.NumberSymbols][qn.Decimal];if(n===qn.CurrencyGroup)return t[Le.NumberSymbols][qn.Group]}return r}function e_(e){if(!e[Le.ExtraData])throw new _(2303,!1)}function t_(e){let n=Rt(e);return e_(n),(n[Le.ExtraData][2]||[]).map(r=>typeof r=="string"?zm(r):[zm(r[0]),zm(r[1])])}function n_(e,n,t){let r=Rt(e);e_(r);let i=[r[Le.ExtraData][0],r[Le.ExtraData][1]],o=Wt(i,n)||[];return Wt(o,t)||[]}function Wt(e,n){for(let t=n;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new _(2304,!1)}function zm(e){let[n,t]=e.split(":");return{hours:+n,minutes:+t}}var RM=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,gc=Object.create(null),kM=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,OM=256;function r_(e,n,t,r){let i=$M(e);FM(n),n=Wn(t,n)||n;let a=[],s;for(;n;)if(s=kM.exec(n),s){a=a.concat(s.slice(1));let d=a.pop();if(!d)break;n=d}else{a.push(n);break}let l=i.getTimezoneOffset();r&&(l=o_(r,l),i=UM(i,r));let c="";return a.forEach(d=>{let f=HM(d);c+=f?f(i,t,l):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function FM(e){if(e.length>OM)throw new _(2300,!1)}function Cc(e,n,t){let r=new Date(0);return r.setFullYear(e,n,t),r.setHours(0,0,0),r}function Wn(e,n){let t=Xv(e);if(gc[t]??=Object.create(null),gc[t][n])return gc[t][n];let r="";switch(n){case"shortDate":r=Ia(e,_t.Short);break;case"mediumDate":r=Ia(e,_t.Medium);break;case"longDate":r=Ia(e,_t.Long);break;case"fullDate":r=Ia(e,_t.Full);break;case"shortTime":r=Ma(e,_t.Short);break;case"mediumTime":r=Ma(e,_t.Medium);break;case"longTime":r=Ma(e,_t.Long);break;case"fullTime":r=Ma(e,_t.Full);break;case"short":let i=Wn(e,"shortTime"),o=Wn(e,"shortDate");r=bc(Na(e,_t.Short),[i,o]);break;case"medium":let a=Wn(e,"mediumTime"),s=Wn(e,"mediumDate");r=bc(Na(e,_t.Medium),[a,s]);break;case"long":let l=Wn(e,"longTime"),c=Wn(e,"longDate");r=bc(Na(e,_t.Long),[l,c]);break;case"full":let d=Wn(e,"fullTime"),f=Wn(e,"fullDate");r=bc(Na(e,_t.Full),[d,f]);break}return r&&(gc[t][n]=r),r}function bc(e,n){return n&&(e=e.replace(/\{([^}]+)}/g,function(t,r){return Object.hasOwn(n,r)?n[r]:t})),e}function ln(e,n,t="-",r,i){let o="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,o=t));let a=String(e);for(;a.length<n;)a="0"+a;return r&&(a=a.slice(a.length-n)),o+a}function PM(e,n){return ln(e,3).substring(0,n)}function je(e,n,t=0,r=!1,i=!1){return function(o,a){let s=LM(e,o);if((t>0||s>-t)&&(s+=t),e===3)s===0&&t===-12&&(s=12);else if(e===6)return PM(s,n);let l=Ta(a,qn.MinusSign);return ln(s,n,l,r,i)}}function LM(e,n){switch(e){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new _(2301,!1)}}function xe(e,n,t=rt.Format,r=!1){return function(i,o){return VM(i,o,e,n,t,r)}}function VM(e,n,t,r,i,o){switch(t){case 2:return Qv(n,i,r)[e.getMonth()];case 1:return Kv(n,i,r)[e.getDay()];case 0:let a=e.getHours(),s=e.getMinutes();if(o){let c=t_(n),d=n_(n,i,r),f=c.findIndex(p=>{if(Array.isArray(p)){let[m,h]=p,y=a>=m.hours&&s>=m.minutes,v=a<h.hours||a===h.hours&&s<h.minutes;if(m.hours<h.hours){if(y&&v)return!0}else if(y||v)return!0}else if(p.hours===a&&p.minutes===s)return!0;return!1});if(f!==-1)return d[f]}return Zv(n,i,r)[a<12?0:1];case 3:return Jv(n,r)[e.getFullYear()<=0?0:1];default:let l=t;throw new _(2302,!1)}}function yc(e){return function(n,t,r){let i=-1*r,o=Ta(t,qn.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case 0:return(i>=0?"+":"")+ln(a,2,o)+ln(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+ln(a,1,o);case 2:return"GMT"+(i>=0?"+":"")+ln(a,2,o)+":"+ln(Math.abs(i%60),2,o);case 3:return r===0?"Z":(i>=0?"+":"")+ln(a,2,o)+":"+ln(Math.abs(i%60),2,o);default:throw new _(2310,!1)}}}var jM=0,_c=4;function BM(e){let n=Cc(e,jM,1).getDay();return Cc(e,0,1+(n<=_c?_c:_c+7)-n)}function i_(e){let n=e.getDay(),t=n===0?-3:_c-n;return Cc(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Um(e,n=!1){return function(t,r){let i;if(n){let o=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,a=t.getDate();i=1+Math.floor((a+o)/7)}else{let o=i_(t),a=BM(o.getFullYear()),s=o.getTime()-a.getTime();i=1+Math.round(s/6048e5)}return ln(i,e,Ta(r,qn.MinusSign))}}function vc(e,n=!1){return function(t,r){let o=i_(t).getFullYear();return ln(o,e,Ta(r,qn.MinusSign),n)}}var $m=Object.create(null);function HM(e){if($m[e])return $m[e];let n;switch(e){case"G":case"GG":case"GGG":n=xe(3,fe.Abbreviated);break;case"GGGG":n=xe(3,fe.Wide);break;case"GGGGG":n=xe(3,fe.Narrow);break;case"y":n=je(0,1,0,!1,!0);break;case"yy":n=je(0,2,0,!0,!0);break;case"yyy":n=je(0,3,0,!1,!0);break;case"yyyy":n=je(0,4,0,!1,!0);break;case"Y":n=vc(1);break;case"YY":n=vc(2,!0);break;case"YYY":n=vc(3);break;case"YYYY":n=vc(4);break;case"M":case"L":n=je(1,1,1);break;case"MM":case"LL":n=je(1,2,1);break;case"MMM":n=xe(2,fe.Abbreviated);break;case"MMMM":n=xe(2,fe.Wide);break;case"MMMMM":n=xe(2,fe.Narrow);break;case"LLL":n=xe(2,fe.Abbreviated,rt.Standalone);break;case"LLLL":n=xe(2,fe.Wide,rt.Standalone);break;case"LLLLL":n=xe(2,fe.Narrow,rt.Standalone);break;case"w":n=Um(1);break;case"ww":n=Um(2);break;case"W":n=Um(1,!0);break;case"d":n=je(2,1);break;case"dd":n=je(2,2);break;case"c":case"cc":n=je(7,1);break;case"ccc":n=xe(1,fe.Abbreviated,rt.Standalone);break;case"cccc":n=xe(1,fe.Wide,rt.Standalone);break;case"ccccc":n=xe(1,fe.Narrow,rt.Standalone);break;case"cccccc":n=xe(1,fe.Short,rt.Standalone);break;case"E":case"EE":case"EEE":n=xe(1,fe.Abbreviated);break;case"EEEE":n=xe(1,fe.Wide);break;case"EEEEE":n=xe(1,fe.Narrow);break;case"EEEEEE":n=xe(1,fe.Short);break;case"a":case"aa":case"aaa":n=xe(0,fe.Abbreviated);break;case"aaaa":n=xe(0,fe.Wide);break;case"aaaaa":n=xe(0,fe.Narrow);break;case"b":case"bb":case"bbb":n=xe(0,fe.Abbreviated,rt.Standalone,!0);break;case"bbbb":n=xe(0,fe.Wide,rt.Standalone,!0);break;case"bbbbb":n=xe(0,fe.Narrow,rt.Standalone,!0);break;case"B":case"BB":case"BBB":n=xe(0,fe.Abbreviated,rt.Format,!0);break;case"BBBB":n=xe(0,fe.Wide,rt.Format,!0);break;case"BBBBB":n=xe(0,fe.Narrow,rt.Format,!0);break;case"h":n=je(3,1,-12);break;case"hh":n=je(3,2,-12);break;case"H":n=je(3,1);break;case"HH":n=je(3,2);break;case"m":n=je(4,1);break;case"mm":n=je(4,2);break;case"s":n=je(5,1);break;case"ss":n=je(5,2);break;case"S":n=je(6,1);break;case"SS":n=je(6,2);break;case"SSS":n=je(6,3);break;case"Z":case"ZZ":case"ZZZ":n=yc(0);break;case"ZZZZZ":n=yc(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":n=yc(1);break;case"OOOO":case"ZZZZ":case"zzzz":n=yc(2);break;default:return null}return $m[e]=n,n}function o_(e,n){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?n:t}function zM(e,n){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+n),e}function UM(e,n,t){let i=e.getTimezoneOffset(),o=o_(n,i);return zM(e,-1*(o-i))}function $M(e){if(Yv(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,o=1,a=1]=e.split("-").map(s=>+s);return Cc(i,o-1,a)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let r;if(r=e.match(RM))return GM(r)}let n=new Date(e);if(!Yv(n))throw new _(2311,!1);return n}function GM(e){let n=new Date(0),t=0,r=0,i=e[8]?n.setUTCFullYear:n.setFullYear,o=e[8]?n.setUTCHours:n.setHours;e[9]&&(t=Number(e[9]+e[10]),r=Number(e[9]+e[11])),i.call(n,Number(e[1]),Number(e[2])-1,Number(e[3]));let a=Number(e[4]||0)-t,s=Number(e[5]||0)-r,l=Number(e[6]||0),c=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return o.call(n,a,s,l,c),n}function Yv(e){return e instanceof Date&&!isNaN(e.valueOf())}var Gm=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(O);constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let r=this._viewContainerRef;if(this._viewRef&&r.remove(r.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=r.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,r,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,r,i):!1,get:(t,r,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,r,i)}})}static \u0275fac=function(r){return new(r||e)(se(Ut))};static \u0275dir=T({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[bt]})}return e})();function WM(e,n){return new _(2100,!1)}var qM="mediumDate",a_=new g(""),s_=new g(""),Wm=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,r,i){this.locale=t,this.defaultTimezone=r,this.defaultOptions=i}transform(t,r,i,o){if(t==null||t===""||t!==t)return null;try{let a=r??this.defaultOptions?.dateFormat??qM,s=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return r_(t,a,o||this.locale,s)}catch(a){throw WM(e,a.message)}}static \u0275fac=function(r){return new(r||e)(se(_a,16),se(a_,24),se(s_,24))};static \u0275pipe=_m({name:"date",type:e,pure:!0})}return e})();function Aa(e,n){n=encodeURIComponent(n);for(let t of e.split(";")){let r=t.indexOf("="),[i,o]=r==-1?[t,""]:[t.slice(0,r),t.slice(r+1)];if(i.trim()!==n)continue;let a=o;try{a=decodeURIComponent(o)}catch{}return a.length>1&&a[0]==='"'&&a[a.length-1]==='"'&&(a=a.slice(1,-1)),a}return null}var qm="browser";function l_(e){return e===qm}var Ra=class{_doc;constructor(n){this._doc=n}manager},Dc=(()=>{class e extends Ra{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,i,o){return t.addEventListener(r,i,o),()=>this.removeEventListener(t,r,i,o)}removeEventListener(t,r,i,o){return t.removeEventListener(r,i,o)}static \u0275fac=function(r){return new(r||e)(A(E))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),Ec=new g(""),Km=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,r){this._zone=r,t.forEach(a=>{a.manager=this});let i=t.filter(a=>!(a instanceof Dc));this._plugins=i.slice().reverse();let o=t.find(a=>a instanceof Dc);o&&this._plugins.push(o)}addEventListener(t,r,i,o){return this._findPluginFor(r).addEventListener(t,r,i,o)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new _(-5101,!1);return this._eventNameToPlugin.set(t,r),r}static \u0275fac=function(r){return new(r||e)(A(Ec),A(I))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),Ym="ng-app-id";function c_(e){for(let n of e)n.remove()}function d_(e,n){let t=n.createElement("style");return t.textContent=e,t}function KM(e,n,t,r){let i=e.head?.querySelectorAll(`style[${Ym}="${n}"],link[${Ym}="${n}"]`);if(!i||i.length===0)return!1;for(let o of i)o.removeAttribute(Ym),o instanceof HTMLLinkElement?r.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&t.set(o.textContent,{usage:0,elements:[o]});return!0}function Zm(e,n){let t=n.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Qm=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,r,i,o={}){this.doc=t,this.appId=r,this.nonce=i,KM(t,r,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,r){for(let i of t)this.addUsage(i,this.inline,d_);r?.forEach(i=>this.addUsage(i,this.external,Zm))}removeStyles(t,r){for(let i of t)this.removeUsage(i,this.inline);r?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,r,i){let o=r.get(t);o?o.usage++:r.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,i(t,this.doc)))})}removeUsage(t,r){let i=r.get(t);i&&(i.usage--,i.usage<=0&&(c_(i.elements),r.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])c_(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[r,{elements:i}]of this.inline)i.push(this.addElement(t,d_(r,this.doc)));for(let[r,{elements:i}]of this.external)i.push(this.addElement(t,Zm(r,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let r of[...this.inline.values(),...this.external.values()]){let i=[];for(let o of r.elements)o.parentNode===t?o.remove():i.push(o);r.elements=i}}addElement(t,r){return this.nonce&&r.setAttribute("nonce",this.nonce),t.appendChild(r)}static \u0275fac=function(r){return new(r||e)(A(E),A(lr),A(cr,8),A(Zr))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),Xm={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Jm=/%COMP%/g;var f_="%COMP%",QM=`_nghost-${f_}`,JM=`_ngcontent-${f_}`,eN=!0,tN=new g("",{factory:()=>eN}),nN=new g("");function rN(e){return JM.replace(Jm,e)}function iN(e){return QM.replace(Jm,e)}function m_(e,n){return n.map(t=>t.replace(Jm,e))}var ep=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,r,i,o,a,s,l=null,c=null,d=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=c,this.cssVarNamespace=d??"",this.defaultRenderer=new ka(t,a,s,this.tracingService,this.cssVarNamespace)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;let i=this.getOrCreateRenderer(t,r);return i instanceof wc?i.applyToHost(t):i instanceof Oa&&i.applyStyles(),i}getOrCreateRenderer(t,r){let i=this.rendererByCompId,o=i.get(r.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(r.encapsulation){case rn.Emulated:o=new wc(l,c,r,this.appId,d,a,s,f,this.cssVarNamespace);break;case rn.ShadowDom:return new xc(l,t,r,a,s,this.nonce,f,this.cssVarNamespace,c);case rn.ExperimentalIsolatedShadowDom:return new xc(l,t,r,a,s,this.nonce,f,this.cssVarNamespace);default:o=new Oa(l,c,r,d,a,s,f,this.cssVarNamespace);break}i.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(r){return new(r||e)(A(Km),A(oi),A(lr),A(tN),A(E),A(I),A(cr),A(on,8),A(nN,8))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})(),ka=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,t,r,i,o=""){this.eventManager=n,this.doc=t,this.ngZone=r,this.tracingService=i,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,t){return t?this.doc.createElementNS(Xm[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(u_(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){if(n){let i=u_(n)?n.content:n;if(r!=null&&r.parentNode!==i)throw new _(-5106,!1);i.insertBefore(t,r)}}removeChild(n,t){t.remove()}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new _(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,i){if(i){t=i+":"+t;let o=Xm[i];o?n.setAttributeNS(o,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let i=Xm[r];i?n.removeAttributeNS(i,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,i){let o=t.startsWith("--");o&&(t=t.replace("%NS%",this.cssVarNamespace)),o||i&(Dn.DashCase|Dn.Important)?n.style.setProperty(t,r,i&Dn.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){let i=t.startsWith("--");i&&(t=t.replace("%NS%",this.cssVarNamespace)),i||r&Dn.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r,i){if(typeof n=="string"&&(n=Gt().getGlobalEventTarget(this.doc,n),!n))throw new _(-5102,!1);let o=this.decoratePreventDefault(r);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,t,o)),this.eventManager.addEventListener(n,t,o,i)}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;n(t)===!1&&t.preventDefault()}}};function u_(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var xc=class extends ka{hostEl;sharedStylesHost;shadowRoot;constructor(n,t,r,i,o,a,s,l,c){super(n,i,o,s,l),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=r.styles;d=m_(r.id,d).map(p=>p.replace(/%NS%/g,l));for(let p of d){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=p,this.shadowRoot.appendChild(m)}let f=r.getExternalStyles?.();if(f)for(let p of f){let m=Zm(p,i);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(null,t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Oa=class extends ka{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,t,r,i,o,a,s,l,c){super(n,o,a,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let d=r.styles,f=c?m_(c,d):d;this.styles=f.map(p=>p.replace(/%NS%/g,l)),this.styleUrls=r.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ei.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},wc=class extends Oa{contentAttr;hostAttr;constructor(n,t,r,i,o,a,s,l,c){let d=i+"-"+r.id;super(n,t,r,o,a,s,l,c,d),this.contentAttr=rN(d),this.hostAttr=iN(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}};var Sc=class e extends Sa{supportsDOMEvents=!0;static makeCurrent(){Hm(new e)}onAndCancel(n,t,r,i){return n.addEventListener(t,r,i),()=>{n.removeEventListener(t,r,i)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.remove()}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=oN();return t==null?null:aN(t)}resetBaseElement(){Fa=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Aa(document.cookie,n)}},Fa=null;function oN(){return Fa=Fa||document.head.querySelector("base"),Fa?Fa.getAttribute("href"):null}function aN(e){return new URL(e,document.baseURI).pathname}var p_=["alt","control","meta","shift"],sN={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},lN={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},h_=(()=>{class e extends Ra{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,i,o){let a=e.parseEventName(r),s=e.eventCallback(a.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Gt().onAndCancel(t,a.domEventName,s,o))}static parseEventName(t){let r=t.toLowerCase().split("."),i=r.shift();if(r.length===0||!(i==="keydown"||i==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",s=r.indexOf("code");if(s>-1&&(r.splice(s,1),a="code."),p_.forEach(c=>{let d=r.indexOf(c);d>-1&&(r.splice(d,1),a+=c+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=i,l.fullKey=a,l}static matchEventFullKeyCode(t,r){let i=sN[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(i=t.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),p_.forEach(a=>{if(a!==i){let s=lN[a];s(t)&&(o+=a+".")}}),o+=i,o===r)}static eventCallback(t,r,i){return o=>{e.matchEventFullKeyCode(o,t)&&i.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(r){return new(r||e)(A(E))};static \u0275prov=K({token:e,factory:e.\u0275fac})}return e})();async function tp(e,n,t){let r=C({rootComponent:e},cN(n,t));return Hv(r)}function cN(e,n){return{platformRef:n?.platformRef,appProviders:[...pN,...e?.providers??[]],platformProviders:mN}}function dN(){Sc.makeCurrent()}function uN(){return new st}function fN(){return Hf(document),document}var mN=[{provide:Zr,useValue:qm},{provide:_l,useValue:dN,multi:!0},{provide:E,useFactory:fN}];var pN=[{provide:Xo,useValue:"root"},{provide:st,useFactory:uN},{provide:Ec,useClass:Dc,multi:!0},{provide:Ec,useClass:h_,multi:!0},ep,{provide:oi,useClass:Qm},{provide:Qm,useExisting:oi},Km,{provide:Fe,useExisting:ep},[]];var qt=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let i=t.slice(0,r),o=t.slice(r+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.addHeaderEntry(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[t,r]of n.headers.entries())this.headers.set(t,r),this.normalizedNames.set(t,n.normalizedNames.get(t))}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let i=n.op==="a"?(this.headers.get(t)||[]).slice():[];i.push(...r),this.headers.set(t,i);break;case"d":let o=n.value;if(o===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=Array.isArray(o)?o:[o],s=this.headers.get(t);if(!s)return;s=s.filter(l=>a.indexOf(l)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(n,t){let r=n.toLowerCase();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(t):this.headers.set(r,[t])}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),i=n.toLowerCase();this.headers.set(i,r),this.maybeSetNormalizedName(n,i)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var Mc=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},Nc=class{encodeKey(n){return g_(n)}encodeValue(n){return g_(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function hN(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[a,s]=o==-1?[n.decodeKey(i),""]:[n.decodeKey(i.slice(0,o)),n.decodeValue(i.slice(o+1))],l=t.get(a)||[];l.push(s),t.set(a,l)}),t}var gN=/%(\d[a-f0-9])/gi,bN={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function g_(e){return encodeURIComponent(e).replace(gN,(n,t)=>bN[t]??n)}function Ic(e){return`${e}`}var cn=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Nc,n.fromString){if(n.fromObject)throw new _(2805,!1);this.map=hN(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],i=Array.isArray(r)?r.map(Ic):[Ic(r)];this.map.set(t,i)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let i=n[r];Array.isArray(i)?i.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:i,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,t]of this.cloneFrom.map.entries())this.map.set(n,t);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=n.op==="a"?(this.map.get(n.param)||[]).slice():[];t.push(Ic(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=(this.map.get(n.param)||[]).slice(),i=r.indexOf(Ic(n.value));i!==-1&&r.splice(i,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function yN(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function b_(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function y_(e){return typeof Blob<"u"&&e instanceof Blob}function v_(e){return typeof FormData<"u"&&e instanceof FormData}function vN(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var np="Content-Type",__="Accept",x_="text/plain",w_="application/json",_N=`${w_}, ${x_}, */*`,li=class e{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,t,r,i){this.url=t,this.method=n.toUpperCase();let o;if(yN(this.method)||i?(this.body=r!==void 0?r:null,o=i):o=r,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new _(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new qt,this.context??=new Mc,!this.params)this.params=new cn,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let s=t,l="",c=t.indexOf("#");c!==-1&&(l=t.substring(c),s=t.substring(0,c));let d=s.indexOf("?"),f=d===-1?"?":d<s.length-1?"&":"";this.urlWithParams=s+f+a+l}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||b_(this.body)||y_(this.body)||v_(this.body)||vN(this.body)?this.body:this.body instanceof cn?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||v_(this.body)?null:y_(this.body)?this.body.type||null:b_(this.body)?null:typeof this.body=="string"?x_:this.body instanceof cn?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?w_:null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,i=n.responseType||this.responseType,o=n.keepalive??this.keepalive,a=n.priority||this.priority,s=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,p=n.integrity||this.integrity,m=n.referrerPolicy||this.referrerPolicy,h=n.transferCache??this.transferCache,y=n.timeout??this.timeout,v=n.body!==void 0?n.body:this.body,D=n.withCredentials??this.withCredentials,P=n.reportProgress??this.reportProgress,it=n.reportUploadProgress??this.reportUploadProgress,wt=n.reportDownloadProgress??this.reportDownloadProgress,ut=n.headers||this.headers,Be=n.params||this.params,Ot=n.context??this.context;return n.setHeaders!==void 0&&(ut=Object.keys(n.setHeaders).reduce((Et,ft)=>Et.set(ft,n.setHeaders[ft]),ut)),n.setParams&&(Be=Object.keys(n.setParams).reduce((Et,ft)=>Et.set(ft,n.setParams[ft]),Be)),new e(t,r,v,{params:Be,headers:ut,context:Ot,reportProgress:P,reportUploadProgress:it,reportDownloadProgress:wt,responseType:i,withCredentials:D,transferCache:h,keepalive:o,cache:s,priority:a,timeout:y,mode:l,redirect:c,credentials:d,referrer:f,integrity:p,referrerPolicy:m})}},Yn=(function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e})(Yn||{}),to=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,t=200,r="OK"){this.headers=n.headers||new qt,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},Tc=class e extends to{constructor(n={}){super(n)}type=Yn.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},no=class e extends to{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Yn.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},br=class extends to{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},CN=200;var DN=/^\)\]\}',?\n/,m3=1024*1024,E_=new g("",{factory:()=>null}),Ac=(()=>{class e{fetchImpl=u(ip,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=u(I);destroyRef=u(We);maxResponseSize=u(E_);handle(t){return new U(r=>{let i=new AbortController,o=!1,a={next:l=>{l.type===Yn.Response&&(o=!0),r.next(l)},error:l=>{o=!0,r.error(l)},complete:()=>{o=!0,r.complete()}};this.doRequest(t,i.signal,a).then(op,l=>a.error(new br({error:l})));let s;return t.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{i.signal.aborted||i.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{s!==void 0&&clearTimeout(s),!o&&!i.signal.aborted&&i.abort()}})}async doRequest(t,r,i){let o=this.createRequestInit(t),a;try{let v=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,C({signal:r},o)));xN(v),i.next({type:Yn.Sent}),a=await v}catch(v){i.error(new br({error:v,status:v.status??0,statusText:v.statusText,url:t.urlWithParams,headers:v.headers}));return}let s=new qt(a.headers),l=a.statusText,c=a.url||t.urlWithParams,d=a.status,f=null,p=t.reportProgress||t.reportDownloadProgress;if(p&&i.next(new Tc({headers:s,status:d,statusText:l,url:c})),a.body){let v=a.headers.get(np)??"",D=a.headers.get("content-length"),P=D!==null?Number(D):NaN;this.maxResponseSize!==null&&Number.isFinite(P)&&P>this.maxResponseSize&&(await a.body.cancel(),C_(this.maxResponseSize));let it=[],wt=a.body.getReader(),ut=0,Be,Ot,Et=typeof Zone<"u"&&Zone.current,ft=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await wt.cancel(),ft=!0;break}let{done:Y,value:b}=await wt.read();if(Y)break;if(it.push(b),ut+=b.length,this.maxResponseSize!==null&&ut>this.maxResponseSize&&(await wt.cancel(),C_(this.maxResponseSize)),p){Ot=t.responseType==="text"?(Ot??"")+(Be??=D_(v)).decode(b,{stream:!0}):void 0;let X=()=>i.next({type:Yn.DownloadProgress,total:Number.isFinite(P)?P:void 0,loaded:ut,partialText:Ot});Et?Et.run(X):X()}}}),ft){i.complete();return}let w=this.concatChunks(it,ut);try{f=this.parseBody(t,w,v,d)}catch(Y){i.error(new br({error:Y,headers:new qt(a.headers),status:a.status,statusText:a.statusText,url:a.url||t.urlWithParams}));return}}d===0&&(d=f?CN:0);let m=d>=200&&d<300,h=a.redirected,y=a.type;m?(i.next(new no({body:f,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:y})),i.complete()):i.error(new br({error:f,headers:s,status:d,statusText:l,url:c,redirected:h,responseType:y}))}parseBody(t,r,i,o){switch(t.responseType){case"json":let a=new TextDecoder().decode(r).replace(DN,"");if(a==="")return null;try{return JSON.parse(a)}catch(s){if(o<200||o>=300)return a;throw s}case"text":return D_(i).decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new _(2824,!1);let r={},i;if(i=t.credentials,t.withCredentials&&(i="include"),t.headers.forEach((o,a)=>r[o]=a.join(",")),t.headers.has(__)||(r[__]=_N),!t.headers.has(np)){let o=t.detectContentTypeHeader();o!==null&&(r[np]=o)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:i,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,r){let i=new Uint8Array(r),o=0;for(let a of t)i.set(a,o),o+=a.length;return i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),ip=class{};function op(){}function xN(e){e.then(op,op)}function C_(e){throw new _(-2825,!1)}var wN=/charset=\s*["']?([^;"'\s]+)["']?/i;function D_(e){let n=e.match(wN);if(n!==null)try{return new TextDecoder(n[1])}catch{}return new TextDecoder}var EN=new g("",{factory:()=>!0}),SN="XSRF-TOKEN",IN=new g("",{factory:()=>SN}),MN="X-XSRF-TOKEN",NN=new g("",{factory:()=>MN}),TN=(()=>{class e{cookieName=u(IN);doc=u(E);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Aa(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),S_=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=A(TN),i},providedIn:"root"})}return e})();function I_(e,n){if(!u(EN)||e.method==="GET"||e.method==="HEAD")return n(e);try{let i=u(eo).href,{origin:o}=new URL(i),{origin:a}=new URL(e.url,o);if(o!==a)return n(e)}catch{return n(e)}let t=u(S_).getToken(),r=u(NN);return t!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,t)})),n(e)}function AN(e,n){return n(e)}function RN(e,n,t){return(r,i)=>Fi(t,()=>n(r,o=>e(o,i)))}var M_=new g("",{factory:()=>[I_]}),N_=new g(""),T_=new g("",{factory:()=>!0});var ap=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=A(Ac),i},providedIn:"root"})}return e})();var Rc=(()=>{class e{backend;injector;chain=null;pendingTasks=u($i);contributeToStability=u(T_);constructor(t,r){this.backend=t,this.injector=r}handle(t){if(this.chain===null){let i=this.injector.get(kc,null,{skipSelf:!0}),o=i!==null&&this.backend===i,a=this.injector.get(N_,[],o?{self:!0}:void 0),s=Array.from(new Set([...this.injector.get(M_),...a]));this.chain=s.reduceRight((l,c)=>RN(l,c,this.injector),AN)}let r=this.chain;if(this.contributeToStability){let i=this.pendingTasks.add();return oe(()=>r(t,o=>this.backend.handle(o))).pipe(Fo(i))}else return oe(()=>r(t,i=>this.backend.handle(i)))}static \u0275fac=function(r){return new(r||e)(A(ap),A(Ae))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),kc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=A(Rc),i},providedIn:"root"})}return e})();function rp(e,n){return C({body:n},e)}var Pa=(()=>{class e{handler;constructor(t){this.handler=t}request(t,r,i={}){let o;if(t instanceof li)o=t;else{let l;i.headers instanceof qt?l=i.headers:l=new qt(i.headers);let c;i.params&&(i.params instanceof cn?c=i.params:c=new cn({fromObject:i.params})),o=new li(t,r,i.body!==void 0?i.body:null,{headers:l,context:i.context,params:c,reportProgress:i.reportProgress,reportUploadProgress:i.reportUploadProgress,reportDownloadProgress:i.reportDownloadProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let a=et(o).pipe(Zd(l=>this.handler.handle(l)));if(t instanceof li||i.observe==="events")return a;let s=a.pipe(Ne(l=>l instanceof no));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(pe(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new _(2806,!1);return l.body}));case"blob":return s.pipe(pe(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new _(2807,!1);return l.body}));case"text":return s.pipe(pe(l=>{if(l.body!==null&&typeof l.body!="string")throw new _(2808,!1);return l.body}));default:return s.pipe(pe(l=>l.body))}case"response":return s;default:throw new _(2809,!1)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new cn().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,i={}){return this.request("PATCH",t,rp(i,r))}post(t,r,i={}){return this.request("POST",t,rp(i,r))}put(t,r,i={}){return this.request("PUT",t,rp(i,r))}static \u0275fac=function(r){return new(r||e)(A(kc))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function sp(...e){let n=[Pa,Ac,Rc,{provide:kc,useExisting:Rc},{provide:ap,useFactory:()=>u(Ac)},{provide:M_,useValue:I_,multi:!0}];for(let t of e)n.push(...t.\u0275providers);return kn(n)}var kN=new g(""),ON="b",FN="h",PN="s",LN="st",VN="u",jN="rt",BN=new g(""),HN=["GET","HEAD"];function zN(e,n){let{isCacheActive:t,filter:r,includePostRequests:i,includeRequestsWithAuthHeaders:o,includeRequestsWithCredentials:a,includeNonCacheableRequests:s}=n,{transferCache:l,method:c}=e;return!(!t||l===!1||c==="POST"&&!i&&!l||c!=="POST"&&!HN.includes(c)||!o&&$N(e)||!a&&YN(e)||!s&&(WN(e.headers)||qN(e.cache))||r?.(e)===!1)}function UN(e,n,t,r,i,o=!1){if(!o&&!zN(e,n))return null;if(r)throw new _(2803,!1);if(!i){let y=e.url;i=XN(e,y)}let a=t.get(i,null);if(!a)return null;let{[ON]:s,[jN]:l,[FN]:c,[PN]:d,[LN]:f,[VN]:p}=a,m=s;switch(l){case"arraybuffer":m=R_(s);break;case"blob":m=new Blob([R_(s)]);break}let h=new qt(c);return new no({body:m,headers:h,status:d,statusText:f,url:p})}function $N(e){let n=e.headers;return n.has("authorization")||n.has("proxy-authorization")||n.has("cookie")}var GN=new Set(["no-store","private","no-cache"]);function WN(e){let n=e.get("cache-control");return n?n.split(",").some(t=>{let r=t.split("=",1)[0].trim().toLowerCase();return GN.has(r)}):!1}function qN(e){return e==="no-cache"||e==="no-store"}function YN(e){let{withCredentials:n,credentials:t}=e;return n||t==="include"||t==="same-origin"}function A_(e){let n=new URLSearchParams(e instanceof URLSearchParams?e:e.toString());return n.sort(),n.toString()}function XN(e,n){let{params:t,method:r,responseType:i}=e,o=A_(t),a=e.serializeBody();a instanceof URLSearchParams?a=A_(a):typeof a!="string"&&(a="");let s=[r,i,n,a,o].join("\0"),l=KN(s);return l}function R_(e){let n=atob(e);return Uint8Array.from(n,r=>r.charCodeAt(0)).buffer}var ZN=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),k_;function KN(e){k_??=new TextEncoder;let n=k_.encode(e),t=1779033703,r=3144134277,i=1013904242,o=2773480762,a=1359893119,s=2600822924,l=528734635,c=1541459225,d=n.length*8,f=(n.length+8>>6)+1<<6,p=new Uint8Array(f);p.set(n),p[n.length]=128;let m=new DataView(p.buffer),h=d>>>0,y=d/4294967296>>>0;m.setUint32(f-8,y,!1),m.setUint32(f-4,h,!1);let v=new Uint32Array(64);for(let D=0;D<f;D+=64){for(let w=0;w<16;w++)v[w]=m.getUint32(D+w*4,!1);for(let w=16;w<64;w++){let Y=v[w-15],b=((Y>>>7|Y<<25)^(Y>>>18|Y<<14)^Y>>>3)>>>0,X=v[w-2],He=((X>>>17|X<<15)^(X>>>19|X<<13)^X>>>10)>>>0;v[w]=v[w-16]+b+v[w-7]+He>>>0}let P=t,it=r,wt=i,ut=o,Be=a,Ot=s,Et=l,ft=c;for(let w=0;w<64;w++){let Y=((Be>>>6|Be<<26)^(Be>>>11|Be<<21)^(Be>>>25|Be<<7))>>>0,b=(Be&Ot^~Be&Et)>>>0,X=ft+Y+b+ZN[w]+v[w]>>>0,He=((P>>>2|P<<30)^(P>>>13|P<<19)^(P>>>22|P<<10))>>>0,Td=(P&it^P&wt^it&wt)>>>0,sx=He+Td>>>0;ft=Et,Et=Ot,Ot=Be,Be=ut+X>>>0,ut=wt,wt=it,it=P,P=X+sx>>>0}t=t+P>>>0,r=r+it>>>0,i=i+wt>>>0,o=o+ut>>>0,a=a+Be>>>0,s=s+Ot>>>0,l=l+Et>>>0,c=c+ft>>>0}return[t,r,i,o,a,s,l,c].map(D=>D.toString(16).padStart(8,"0")).join("")}var O_=(()=>{let e=Oc("json");return e.arrayBuffer=Oc("arraybuffer"),e.blob=Oc("blob"),e.text=Oc("text"),e})();function Oc(e){return function(t,r){let i=r?.injector??u(O),o=i.get(BN,null,{optional:!0}),a=i.get(zi,null,{optional:!0}),s=i.get(kN,null,{optional:!0}),l=c=>{if(o&&a&&c){let d=UN(c,o,a,s);if(d)try{let f=d.body,p=r?.parse?r.parse(f):f;return re({value:p})}catch{}}};return new lp(i,c=>QN(c,t,e),r?.defaultValue,r?.debugName,r?.parse,r?.equal,l)}}function QN(e,n,t){let r=typeof n=="function"?n(e):n;if(r===void 0)return;typeof r=="string"&&(r={url:r});let i=r.headers instanceof qt?r.headers:new qt(r.headers),o=r.params instanceof cn?r.params:new cn({fromObject:r.params});return new li(r.method??"GET",r.url,r.body??null,{headers:i,params:o,reportProgress:r.reportProgress,withCredentials:r.withCredentials,keepalive:r.keepalive,cache:r.cache,priority:r.priority,mode:r.mode,redirect:r.redirect,responseType:t,context:r.context,transferCache:r.transferCache,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}var lp=class extends Ca{client;_headers=hr({source:this.extRequest,computation:()=>{}});_progress=hr({source:this.extRequest,computation:()=>{}});_statusCode=hr({source:this.extRequest,computation:()=>{}});headers=Te(()=>this.status()==="resolved"||this.status()==="error"?this._headers():void 0);progress=this._progress.asReadonly();statusCode=this._statusCode.asReadonly();constructor(n,t,r,i,o,a,s){super(t,({params:l,abortSignal:c})=>{let d,f=!1,p=()=>{f=!0,d?.unsubscribe()};c.addEventListener("abort",p,{once:!0});let m=re({value:void 0}),h,y=new Promise(D=>h=D),v=D=>{m.set(D),h?.(m),h=void 0};return d=this.client.request(l).subscribe({next:D=>{switch(D.type){case Yn.Response:this._headers.set(D.headers),this._statusCode.set(D.status);try{v({value:o?o(D.body):D.body})}catch(P){v({error:Da(P)})}break;case Yn.DownloadProgress:this._progress.set(D);break}},error:D=>{D instanceof br&&(this._headers.set(D.headers),this._statusCode.set(D.status)),v({error:D}),c.removeEventListener("abort",p)},complete:()=>{h&&v({error:new _(-991,!1)}),c.removeEventListener("abort",p)}}),f&&d.unsubscribe(),y},r,a,i,n,void 0,s),this.client=n.get(Pa)}set(n){super.set(n),this._headers.set(void 0),this._progress.set(void 0),this._statusCode.set(void 0)}};var F_=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(r){return new(r||e)(A(E))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var La=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275prov=K({token:e,factory:function(r){let i=null;return r?i=new(r||e):i=A(eT),i},providedIn:"root"})}return e})(),eT=(()=>{class e extends La{_doc=u(E);sanitize(t,r){if(r==null)return null;switch(t){case nt.NONE:return r;case nt.HTML:return ri(r,"HTML")?Cn(r):qf(this._doc,String(r)).toString();case nt.STYLE:return ri(r,"Style")?Cn(r):r;case nt.SCRIPT:if(ri(r,"Script"))return Cn(r);throw new _(5200,!1);case nt.URL:return ri(r,"URL")?Cn(r):Wl(String(r));case nt.RESOURCE_URL:if(ri(r,"ResourceURL"))return Cn(r);throw new _(-5201,!1);default:throw new _(5202,!1)}}bypassSecurityTrustHtml(t){return zf(t)}bypassSecurityTrustStyle(t){return Uf(t)}bypassSecurityTrustScript(t){return $f(t)}bypassSecurityTrustUrl(t){return Gf(t)}bypassSecurityTrustResourceUrl(t){return Wf(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function ci(e){return e.buttons===0||e.detail===0}function di(e){let n=e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var cp;function P_(){if(cp==null){let e=typeof document<"u"?document.head:null;cp=!!(e&&(e.createShadowRoot||e.attachShadow))}return cp}function dp(e){if(P_()){let n=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Va(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){let n=e.shadowRoot.activeElement;if(n===e)break;e=n}return e}function Ct(e){if(e.composedPath)try{return e.composedPath()[0]}catch{}return e.target}var up;try{up=typeof Intl<"u"&&Intl.v8BreakIterator}catch{up=!1}var de=(()=>{class e{_platformId=u(Zr);isBrowser=this._platformId?l_(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||up)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var ja;function L_(){if(ja==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ja=!0}))}finally{ja=ja||!1}return ja}function ro(e){return L_()?e:!!e.capture}function io(e,n=0){return V_(e)?Number(e):arguments.length===2?n:0}function V_(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function kt(e){return e instanceof F?e.nativeElement:e}var j_=new g("cdk-input-modality-detector-options"),B_={ignoreKeys:[18,17,224,91,16]},H_=650,fp={passive:!0,capture:!0},z_=(()=>{class e{_platform=u(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Rr(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(r=>r===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Ct(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<H_||(this._modality.next(ci(t)?"keyboard":"mouse"),this._mostRecentTarget=Ct(t))};_onTouchstart=t=>{if(di(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Ct(t)};constructor(){let t=u(I),r=u(E),i=u(j_,{optional:!0});if(this._options=C(C({},B_),i),this.modalityDetected=this._modality.pipe(Lo(1)),this.modalityChanged=this.modalityDetected.pipe(Hs()),this._platform.isBrowser){let o=u(Fe).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(r,"keydown",this._onKeydown,fp),o.listen(r,"mousedown",this._onMousedown,fp),o.listen(r,"touchstart",this._onTouchstart,fp)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Ba=(function(e){return e[e.IMMEDIATE=0]="IMMEDIATE",e[e.EVENTUAL=1]="EVENTUAL",e})(Ba||{}),U_=new g("cdk-focus-monitor-default-options"),Fc=ro({passive:!0,capture:!0}),yr=(()=>{class e{_ngZone=u(I);_platform=u(de);_inputModalityDetector=u(z_);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(E);_stopInputModalityDetector=new x;constructor(){let t=u(U_,{optional:!0});this._detectionMode=t?.detectionMode||Ba.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let r=Ct(t);for(let i=r;i;i=i.parentElement)t.type==="focus"?this._onFocus(t,i):this._onBlur(t,i)};monitor(t,r=!1){let i=kt(t);if(!this._platform.isBrowser||i.nodeType!==1)return et();let o=dp(i)||this._document,a=this._elementInfo.get(i);if(a)return r&&(a.checkChildren=!0),a.subject;let s={checkChildren:r,subject:new x,rootNode:o};return this._elementInfo.set(i,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let r=kt(t),i=this._elementInfo.get(r);i&&(i.subject.complete(),this._setClasses(r),this._elementInfo.delete(r),this._removeGlobalListeners(i))}focusVia(t,r,i){let o=kt(t),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,r,l)):(this._setOrigin(r),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((t,r)=>this.stopMonitoring(r))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===Ba.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,r){t.classList.toggle("cdk-focused",!!r),t.classList.toggle("cdk-touch-focused",r==="touch"),t.classList.toggle("cdk-keyboard-focused",r==="keyboard"),t.classList.toggle("cdk-mouse-focused",r==="mouse"),t.classList.toggle("cdk-program-focused",r==="program")}_setOrigin(t,r=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&r,this._detectionMode===Ba.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?H_:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(t,r){let i=this._elementInfo.get(r),o=Ct(t);!i||!i.checkChildren&&r!==o||this._originChanged(r,this._getFocusOrigin(o),i)}_onBlur(t,r){let i=this._elementInfo.get(r);!i||i.checkChildren&&t.relatedTarget instanceof Node&&r.contains(t.relatedTarget)||(this._setClasses(r),this._emitOrigin(i,null))}_emitOrigin(t,r){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(r))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let r=t.rootNode,i=this._rootNodeFocusListenerCount.get(r)||0;i||this._ngZone.runOutsideAngular(()=>{r.addEventListener("focus",this._rootNodeFocusAndBlurListener,Fc),r.addEventListener("blur",this._rootNodeFocusAndBlurListener,Fc)}),this._rootNodeFocusListenerCount.set(r,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Lt(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let r=t.rootNode;if(this._rootNodeFocusListenerCount.has(r)){let i=this._rootNodeFocusListenerCount.get(r);i>1?this._rootNodeFocusListenerCount.set(r,i-1):(r.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Fc),r.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Fc),this._rootNodeFocusListenerCount.delete(r))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,r,i){this._setClasses(t,r),this._emitOrigin(i,r),this._lastFocusOrigin=r}_getClosestElementsInfo(t){let r=[];return this._elementInfo.forEach((i,o)=>{(o===t||i.checkChildren&&o.contains(t))&&r.push([o,i])}),r}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:r,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!r||r===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(r))return!0}return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Pc=new WeakMap,Dt=(()=>{class e{_appRef;_injector=u(O);_environmentInjector=u(Ae);load(t){let r=this._appRef=this._appRef||this._injector.get(At),i=Pc.get(r);i||(i={loaders:new Set,refs:[]},Pc.set(r,i),r.onDestroy(()=>{Pc.get(r)?.refs.forEach(o=>o.destroy()),Pc.delete(r)})),i.loaders.has(t)||(i.loaders.add(t),i.refs.push(mc(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var $_=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return e})(),Lc;function nT(){if(Lc===void 0&&(Lc=null,typeof window<"u")){let e=window;if(e.trustedTypes!==void 0)try{Lc=e.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return Lc}function oo(e){return nT()?.createHTML(e)||e}function ao(e){return Array.isArray(e)?e:[e]}var G_=new Set,ui,Vc=(()=>{class e{_platform=u(de);_nonce=u(cr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):iT}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&rT(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function rT(e,n){if(!G_.has(e))try{ui||(ui=document.createElement("style"),n&&ui.setAttribute("nonce",n),ui.setAttribute("type","text/css"),document.head.appendChild(ui)),ui.sheet&&(ui.sheet.insertRule(`@media ${e.replace(/[{}]/g,"")} {body{ }}`,0),G_.add(e))}catch(t){console.error(t)}}function iT(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var mp=(()=>{class e{_mediaMatcher=u(Vc);_zone=u(I);_queries=new Map;_destroySubject=new x;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return W_(ao(t)).some(i=>this._registerQuery(i).mql.matches)}observe(t){let i=W_(ao(t)).map(a=>this._registerQuery(a).observable),o=Xd(i);return o=Ni(o.pipe(St(1)),o.pipe(Lo(1),Oo(0))),o.pipe(pe(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:c})=>{s.matches=s.matches||l,s.breakpoints[c]=l}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let r=this._mediaMatcher.matchMedia(t),o={observable:new U(a=>{let s=l=>this._zone.run(()=>a.next(l));return r.addListener(s),()=>{r.removeListener(s)}}).pipe(pt(r),pe(({matches:a})=>({query:t,matches:a})),Lt(this._destroySubject)),mql:r};return this._queries.set(t,o),o}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function W_(e){return e.map(n=>n.split(",")).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var oT=(()=>{class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var jc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[oT]})}return e})();var gp=(()=>{class e{_platform=u(de);isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return sT(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let r=aT(hT(t));if(r&&(q_(r)===-1||!this.isVisible(r)))return!1;let i=t.nodeName.toLowerCase(),o=q_(t);return t.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!mT(t)?!1:i==="audio"?t.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,r){return pT(t)&&!this.isDisabled(t)&&(r?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function aT(e){try{return e.frameElement}catch{return null}}function sT(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects=="function"&&e.getClientRects().length)}function lT(e){let n=e.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function cT(e){return uT(e)&&e.type=="hidden"}function dT(e){return fT(e)&&e.hasAttribute("href")}function uT(e){return e.nodeName.toLowerCase()=="input"}function fT(e){return e.nodeName.toLowerCase()=="a"}function Z_(e){if(!e.hasAttribute("tabindex")||e.tabIndex===void 0)return!1;let n=e.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function q_(e){if(!Z_(e))return null;let n=parseInt(e.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function mT(e){let n=e.nodeName.toLowerCase(),t=n==="input"&&e.type;return t==="text"||t==="password"||n==="select"||n==="textarea"}function pT(e){return cT(e)?!1:lT(e)||dT(e)||e.hasAttribute("contenteditable")||Z_(e)}function hT(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var hp=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,r,i,o=!1,a){this._element=n,this._checker=t,this._ngZone=r,this._document=i,this._injector=a,o||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let r=this._getFirstTabbableElement(t);return r?.focus(n),!!r}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary("start");return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary("end");return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let r=0;r<t.length;r++){let i=t[r].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[r]):null;if(i)return i}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let r=t.length-1;r>=0;r--){let i=t[r].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[r]):null;if(i)return i}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){zt(n,{injector:this._injector})}},K_=(()=>{class e{_checker=u(gp);_ngZone=u(I);_document=u(E);_injector=u(O);constructor(){u(Dt).load($_)}create(t,r=!1){return new hp(t,this._checker,this._ngZone,this._document,r,this._injector)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var fi=(function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e})(fi||{}),Y_="cdk-high-contrast-black-on-white",X_="cdk-high-contrast-white-on-black",pp="cdk-high-contrast-active",gT=(()=>{class e{_platform=u(de);_hasCheckedHighContrastMode=!1;_document=u(E);_breakpointSubscription;constructor(){this._breakpointSubscription=u(mp).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return fi.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let r=this._document.defaultView||window,i=r&&r.getComputedStyle?r.getComputedStyle(t):null,o=(i&&i.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return fi.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return fi.BLACK_ON_WHITE}return fi.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(pp,Y_,X_),this._hasCheckedHighContrastMode=!0;let r=this.getHighContrastMode();r===fi.BLACK_ON_WHITE?t.add(pp,Y_):r===fi.WHITE_ON_BLACK&&t.add(pp,X_)}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Q_=(()=>{class e{constructor(){u(gT)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[jc]})}return e})();var bT=200,Bc=class{_letterKeyStream=new x;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new x;selectedItem=this._selectedItem;constructor(n,t){let r=typeof t?.debounceInterval=="number"?t.debounceInterval:bT;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(n),this._setupKeyHandler(r)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let t=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(Fr(t=>this._pressedLetters.push(t)),Oo(n),Ne(()=>this._pressedLetters.length>0),pe(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let r=1;r<this._items.length+1;r++){let i=(this._selectedItemIndex+r)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function vr(e,...n){return n.length?n.some(t=>e[t]):e.altKey||e.shiftKey||e.ctrlKey||e.metaKey}var Hc=class{_items;_activeItemIndex=re(-1);_activeItem=re(null);_wrap=!1;_typeaheadSubscription=te.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,t){this._items=n,n instanceof Hn?this._itemChangesSubscription=n.changes.subscribe(r=>this._itemsChanged(r.toArray())):gt(n)&&(this._effectRef=Mt(()=>this._itemsChanged(n()),{injector:t}))}tabOut=new x;change=new x;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Bc(t,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:r=>this._skipPredicateFn(r)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(r=>{this.setActiveItem(r)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,t=10){return this._pageUpAndDown={enabled:n,delta:t},this}setActiveItem(n){let t=this._activeItem();this.updateActiveItem(n),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(n){let t=n.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(i||vr(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let t=this._getItemsArray(),r=typeof n=="number"?n:t.indexOf(n),i=t[r];this._activeItem.set(i??null),this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let t=this._getItemsArray();for(let r=1;r<=t.length;r++){let i=(this._activeItemIndex()+n*r+t.length)%t.length,o=t[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,t){let r=this._getItemsArray();if(r[n]){for(;this._skipPredicateFn(r[n]);)if(n+=t,!r[n])return;this.setActiveItem(n)}}_getItemsArray(){return gt(this._items)?this._items():this._items instanceof Hn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let t=this._activeItem();if(t){let r=n.indexOf(t);r>-1&&r!==this._activeItemIndex()&&(this._activeItemIndex.set(r),this._typeahead?.setCurrentSelectedItemIndex(r))}}};var Ha=class extends Hc{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var tC=new Map,Je=class e{_appId=u(lr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,t=!1){this._appId!=="ng"&&(n+=this._appId);let r=tC.get(n);return r===void 0?r=0:r++,tC.set(n,r),`${n}${t?e._infix+"-":""}${r}`}static \u0275fac=function(t){return new(t||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})};var dn=(function(e){return e[e.NORMAL=0]="NORMAL",e[e.NEGATED=1]="NEGATED",e[e.INVERTED=2]="INVERTED",e})(dn||{}),zc,mi;function Uc(){if(mi==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return mi=!1,mi;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)mi=!0;else{let e=Element.prototype.scrollTo;e?mi=!/\{\s*\[native code\]\s*\}/.test(e.toString()):mi=!1}}return mi}function so(){if(typeof document!="object"||!document)return dn.NORMAL;if(zc==null){let e=document.createElement("div"),n=e.style;e.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let t=document.createElement("div"),r=t.style;r.width="2px",r.height="1px",e.appendChild(t),document.body.appendChild(e),zc=dn.NORMAL,e.scrollLeft===0&&(e.scrollLeft=1,zc=e.scrollLeft===0?dn.NEGATED:dn.INVERTED),e.remove()}return zc}function vp(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var lo,nC=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function _p(){if(lo)return lo;if(typeof document!="object"||!document)return lo=new Set(nC),lo;let e=document.createElement("input");return lo=new Set(nC.filter(n=>(e.setAttribute("type",n),e.type===n))),lo}var yT=new g("MATERIAL_ANIMATIONS"),rC=null;function Cp(){return u(yT,{optional:!0})?.animationsDisabled||u(ra,{optional:!0})==="NoopAnimations"?"di-disabled":(rC??=u(Vc).matchMedia("(prefers-reduced-motion)").matches,rC?"reduced-motion":"enabled")}function xt(){return Cp()!=="enabled"}function ke(e){return e==null?"":typeof e=="string"?e:`${e}px`}function co(e){return e!=null&&`${e}`!="false"}var Yt=(function(e){return e[e.FADING_IN=0]="FADING_IN",e[e.VISIBLE=1]="VISIBLE",e[e.FADING_OUT=2]="FADING_OUT",e[e.HIDDEN=3]="HIDDEN",e})(Yt||{}),Dp=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Yt.HIDDEN;constructor(n,t,r,i=!1){this._renderer=n,this.element=t,this.config=r,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},iC=ro({passive:!0,capture:!0}),xp=class{_events=new Map;addHandler(n,t,r,i){let o=this._events.get(t);if(o){let a=o.get(r);a?a.add(i):o.set(r,new Set([i]))}else this._events.set(t,new Map([[r,new Set([i])]])),n.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,iC)})}removeHandler(n,t,r){let i=this._events.get(n);if(!i)return;let o=i.get(t);o&&(o.delete(r),o.size===0&&i.delete(t),i.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,iC)))}_delegateEventHandler=n=>{let t=Ct(n);t&&this._events.get(n.type)?.forEach((r,i)=>{(i===t||i.contains(t))&&r.forEach(o=>o.handleEvent(n))})}},za={enterDuration:225,exitDuration:150},vT=800,oC=ro({passive:!0,capture:!0}),aC=["mousedown","touchstart"],sC=["mouseup","mouseleave","touchend","touchcancel"],_T=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.mat-ripple {
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
`],encapsulation:2})}return e})(),Ua=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new xp;constructor(n,t,r,i,o){this._target=n,this._ngZone=t,this._platform=i,i.isBrowser&&(this._containerElement=kt(r)),o&&o.get(Dt).load(_T)}fadeInRipple(n,t,r={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=C(C({},za),r.animation);r.centered&&(n=i.left+i.width/2,t=i.top+i.height/2);let a=r.radius||CT(n,t,i),s=n-i.left,l=t-i.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${s-a}px`,d.style.top=`${l-a}px`,d.style.height=`${a*2}px`,d.style.width=`${a*2}px`,r.color!=null&&(d.style.backgroundColor=r.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),p=f.transitionProperty,m=f.transitionDuration,h=p==="none"||m==="0s"||m==="0s, 0s"||i.width===0&&i.height===0,y=new Dp(this,d,r,h);d.style.transform="scale3d(1, 1, 1)",y.state=Yt.FADING_IN,r.persistent||(this._mostRecentTransientRipple=y);let v=null;return!h&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let D=()=>{v&&(v.fallbackTimer=null),clearTimeout(it),this._finishRippleTransition(y)},P=()=>this._destroyRipple(y),it=setTimeout(P,c+100);d.addEventListener("transitionend",D),d.addEventListener("transitioncancel",P),v={onTransitionEnd:D,onTransitionCancel:P,fallbackTimer:it}}),this._activeRipples.set(y,v),(h||!c)&&this._finishRippleTransition(y),y}fadeOutRipple(n){if(n.state===Yt.FADING_OUT||n.state===Yt.HIDDEN)return;let t=n.element,r=C(C({},za),n.config.animation);t.style.transitionDuration=`${r.exitDuration}ms`,t.style.opacity="0",n.state=Yt.FADING_OUT,(n._animationForciblyDisabledThroughCss||!r.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let t=kt(n);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,aC.forEach(r=>{e._eventManager.addHandler(this._ngZone,r,t,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{sC.forEach(t=>{this._triggerElement.addEventListener(t,this,oC)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Yt.FADING_IN?this._startFadeOutTransition(n):n.state===Yt.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let t=n===this._mostRecentTransientRipple,{persistent:r}=n.config;n.state=Yt.VISIBLE,!r&&(!t||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let t=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Yt.HIDDEN,t!==null&&(n.element.removeEventListener("transitionend",t.onTransitionEnd),n.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),n.element.remove()}_onMousedown(n){let t=ci(n),r=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+vT;!this._target.rippleDisabled&&!t&&!r&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!di(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=n.changedTouches;if(t)for(let r=0;r<t.length;r++)this.fadeInRipple(t[r].clientX,t[r].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let t=n.state===Yt.VISIBLE||n.config.terminateOnPointerUp&&n.state===Yt.FADING_IN;!n.config.persistent&&t&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(aC.forEach(t=>e._eventManager.removeHandler(t,n,this)),this._pointerUpEventsRegistered&&(sC.forEach(t=>n.removeEventListener(t,this,oC)),this._pointerUpEventsRegistered=!1))}};function CT(e,n,t){let r=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),i=Math.max(Math.abs(n-t.top),Math.abs(n-t.bottom));return Math.sqrt(r*r+i*i)}var wp=new g("mat-ripple-global-options"),lC=(()=>{class e{_elementRef=u(F);_animationsDisabled=xt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=u(I),r=u(de),i=u(wp,{optional:!0}),o=u(O);this._globalOptions=i||{},this._rippleRenderer=new Ua(this,t,this._elementRef,r,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:C(C(C({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,r=0,i){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,r,C(C({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,C(C({},this.rippleConfig),t))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(r,i){r&2&&J("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return e})();var DT={capture:!0},xT=["focus","mousedown","mouseenter","touchstart"],Ep="mat-ripple-loader-uninitialized",Sp="mat-ripple-loader-class-name",cC="mat-ripple-loader-centered",$c="mat-ripple-loader-disabled",dC=(()=>{class e{_document=u(E);_animationsDisabled=xt();_globalRippleOptions=u(wp,{optional:!0});_platform=u(de);_ngZone=u(I);_injector=u(O);_eventCleanups;_hosts=new Map;constructor(){let t=u(Fe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>xT.map(r=>t.listen(this._document,r,this._onInteraction,DT)))}ngOnDestroy(){let t=this._hosts.keys();for(let r of t)this.destroyRipple(r);this._eventCleanups.forEach(r=>r())}configureRipple(t,r){t.setAttribute(Ep,this._globalRippleOptions?.namespace??""),(r.className||!t.hasAttribute(Sp))&&t.setAttribute(Sp,r.className||""),r.centered&&t.setAttribute(cC,""),r.disabled&&t.setAttribute($c,"")}setDisabled(t,r){let i=this._hosts.get(t);i?(i.target.rippleDisabled=r,!r&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(t))):r?t.setAttribute($c,""):t.removeAttribute($c)}_onInteraction=t=>{let r=Ct(t);if(r instanceof HTMLElement){let i=r.closest(`[${Ep}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let r=this._document.createElement("span");r.classList.add("mat-ripple",t.getAttribute(Sp)),t.append(r);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??za.enterDuration,a=this._animationsDisabled?0:i?.animation?.exitDuration??za.exitDuration,s={rippleDisabled:this._animationsDisabled||i?.disabled||t.hasAttribute($c),rippleConfig:{centered:t.hasAttribute(cC),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Ua(s,this._ngZone,r,this._platform,this._injector),c=!s.rippleDisabled;c&&l.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:l,hasSetUpEvents:c}),t.removeAttribute(Ep)}destroyRipple(t){let r=this._hosts.get(t);r&&(r.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Gc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["structural-styles"]],decls:0,vars:0,template:function(r,i){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2})}return e})();var wT=new g("MAT_BUTTON_CONFIG");function uC(e){return e==null?void 0:Ea(e)}var Ip=(()=>{class e{_elementRef=u(F);_ngZone=u(I);_animationsDisabled=xt();_config=u(wT,{optional:!0});_focusMonitor=u(yr);_cleanupClick;_renderer=u(ve);_rippleLoader=u(dC);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=jm(!1,{transform:Ie});constructor(){u(Dt).load(Gc);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",r){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,r):this._elementRef.nativeElement.focus(r)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(r,i){r&2&&(_e("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),sn(i.color?"mat-"+i.color:""),J("mat-mdc-button-progress-indicator-shown",i.showProgress())("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Ie],disabled:[2,"disabled","disabled",Ie],ariaDisabled:[2,"aria-disabled","ariaDisabled",Ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie],tabIndex:[2,"tabIndex","tabIndex",uC],_tabindex:[2,"tabindex","_tabindex",uC],showProgress:[1,"showProgress"]}})}return e})(),Mp=(()=>{class e extends Ip{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["*",[["","progressIndicator",""]]],r=["*","[progressIndicator]"];function i(o,a){o&1&&(Pe(0,"div",1),Q(1,1),$e())}return Z({type:e,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[he],ngContentSelectors:r,decls:5,vars:1,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,s){a&1&&(Ge(t),Qe(0,"span",0),Q(1),ge(2,i,2,0,"div",1),Qe(3,"span",2)(4,"span",3)),a&2&&(j(2),be(s.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
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
`],encapsulation:2})})()}return e})();var ET=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(E)}),ST=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function fC(e){let n=e?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?ST.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Xt=(()=>{class e{get value(){return this.valueSignal()}valueSignal=re("ltr");change=new ae;constructor(){let t=u(ET,{optional:!0});if(t){let r=t.body?t.body.dir:null,i=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(fC(r||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Ee=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();var Wc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Ee]})}return e})();var mC=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),qc=(()=>{class e extends Ip{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=IT(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let r=this._elementRef.nativeElement.classList,i=this._appearance?mC.get(this._appearance):null,o=mC.get(t);i&&r.remove(...i),r.add(...o),this._appearance=t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],r=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function i(o,a){o&1&&(Pe(0,"div",2),Q(1,3),$e())}return Z({type:e,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[he],ngContentSelectors:r,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(a,s){a&1&&(Ge(t),Qe(0,"span",0),Q(1),Pe(2,"span",1),Q(3,1),$e(),Q(4,2),ge(5,i,2,0,"div",2),Qe(6,"span",3)(7,"span",4)),a&2&&(J("mdc-button__ripple",!s._isFab)("mdc-fab__ripple",s._isFab),j(5),be(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2})})()}return e})();function IT(e){return e.hasAttribute("mat-raised-button")?"elevated":e.hasAttribute("mat-stroked-button")?"outlined":e.hasAttribute("mat-flat-button")?"filled":e.hasAttribute("mat-button")?"text":null}var Yc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Wc,Ee]})}return e})();var MT=20,$a=(()=>{class e{_ngZone=u(I);_platform=u(de);_renderer=u(Fe).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new x;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let r=this.scrollContainers.get(t);r&&(r.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=MT){return this._platform.isBrowser?new U(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=t>0?this._scrolled.pipe(js(t)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):et()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(t,r){let i=this.getAncestorScrollContainers(t);return this.scrolled(r).pipe(Ne(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(t){let r=[];return this.scrollContainers.forEach((i,o)=>{this._targetContainsElement(o,t)&&r.push(o)}),r}_targetContainsElement(t,r){let i=kt(r),o=t.getElementRef().nativeElement;do if(i==o)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),hC=(()=>{class e{elementRef=u(F);scrollDispatcher=u($a);ngZone=u(I);dir=u(Xt,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new x;_renderer=u(ve);_cleanupScroll;_elementScrolled=new x;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let r=this.elementRef.nativeElement,i=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=i?t.end:t.start),t.right==null&&(t.right=i?t.start:t.end),t.bottom!=null&&(t.top=r.scrollHeight-r.clientHeight-t.bottom),i&&so()!=dn.NORMAL?(t.left!=null&&(t.right=r.scrollWidth-r.clientWidth-t.left),so()==dn.INVERTED?t.left=t.right:so()==dn.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=r.scrollWidth-r.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let r=this.elementRef.nativeElement;Uc()?r.scrollTo(t):(t.top!=null&&(r.scrollTop=t.top),t.left!=null&&(r.scrollLeft=t.left))}measureScrollOffset(t){let r="left",i="right",o=this.elementRef.nativeElement;if(t=="top")return o.scrollTop;if(t=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return t=="start"?t=a?i:r:t=="end"&&(t=a?r:i),a&&so()==dn.INVERTED?t==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&so()==dn.NEGATED?t==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return e})(),NT=20,uo=(()=>{class e{_platform=u(de);_listeners;_viewportSize=null;_change=new x;_document=u(E);constructor(){let t=u(I),r=u(Fe).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=o=>this._change.next(o);this._listeners=[r.listen("window","resize",i),r.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:r,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+r,height:i,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,r=this._getWindow(),i=t.documentElement,o=i.getBoundingClientRect(),a=-o.top||t.body?.scrollTop||r.scrollY||i.scrollTop||0,s=-o.left||t.body?.scrollLeft||r.scrollX||i.scrollLeft||0;return{top:a,left:s}}change(t=NT){return t>0?this._change.pipe(js(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Xc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})(),Np=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Ee,Xc,Ee,Xc]})}return e})();var Ga=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},fo=class extends Ga{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,t,r,i,o,a){super(),this.component=n,this.viewContainerRef=t,this.injector=r,this.projectableNodes=i,this.bindings=o||null,this.directives=a||null}},_r=class extends Ga{templateRef;viewContainerRef;context;injector;constructor(n,t,r,i){super(),this.templateRef=n,this.viewContainerRef=t,this.context=r,this.injector=i}get origin(){return this.templateRef.elementRef}attach(n,t=this.context){return this.context=t,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Tp=class extends Ga{element;constructor(n){super(),this.element=n instanceof F?n.nativeElement:n}},mo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof fo)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof _r)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Tp)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Wa=class extends mo{outletElement;_appRef;_defaultInjector;constructor(n,t,r){super(),this.outletElement=n,this._appRef=t,this._defaultInjector=r}attachComponentPortal(n){let t;if(n.viewContainerRef){let r=n.injector||n.viewContainerRef.injector,i=r.get(ur,null,{optional:!0})||void 0;t=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:r,ngModuleRef:i,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let r=this._appRef,i=n.injector||this._defaultInjector||O.NULL,o=i.get(Ae,r.injector);t=mc(n.component,{elementInjector:i,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),r.attachView(t.hostView),this.setDisposeFn(()=>{r.viewCount>0&&r.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=n,t}attachTemplatePortal(n){let t=n.viewContainerRef,r=t.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return r.rootNodes.forEach(i=>this.outletElement.appendChild(i)),r.detectChanges(),this.setDisposeFn(()=>{let i=t.indexOf(r);i!==-1&&t.remove(i)}),this._attachedPortal=n,r}attachDomPortal=n=>{let t=n.element;t.parentNode;let r=this.outletElement.ownerDocument.createComment("dom-portal");t.parentNode.insertBefore(r,t),this.outletElement.appendChild(t),this._attachedPortal=n,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(t,r)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var qa=(()=>{class e extends mo{_moduleRef=u(ur,{optional:!0});_document=u(E);_viewContainerRef=u(Ut);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new ae;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let r=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,i=r.createComponent(t.component,{index:r.length,injector:t.injector||r.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return r!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=t,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(t){t.setAttachedHost(this);let r=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=r,this.attached.emit(r),r}attachDomPortal=t=>{let r=t.element;r.parentNode;let i=this._document.createComment("dom-portal");t.setAttachedHost(this),r.parentNode.insertBefore(i,r),this._getRootNode().appendChild(r),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(r,i)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Tt(e)))(i||e)}})();static \u0275dir=T({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[he]})}return e})(),pi=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();var gC=Uc();function ho(e){return new Zc(e.get(uo),e.get(E))}var Zc=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,t){this._viewportRuler=n,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ke(-this._previousScrollPosition.left),n.style.top=ke(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,t=this._document.body,r=n.style,i=t.style,o=r.scrollBehavior||"",a=i.scrollBehavior||"";this._isEnabled=!1,r.left=this._previousHTMLStyles.left,r.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),gC&&(r.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),gC&&(r.scrollBehavior=o,i.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,r=this._viewportRuler.getViewportSize();return t.scrollHeight>r.height||t.scrollWidth>r.width}};function xC(e,n){return new Kc(e.get($a),e.get(I),e.get(uo),n)}var Kc=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,t,r,i){this._scrollDispatcher=n,this._ngZone=t,this._viewportRuler=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(Ne(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Ya=class{enable(){}disable(){}attach(){}};function Rp(e,n){return n.some(t=>{let r=e.bottom<t.top,i=e.top>t.bottom,o=e.right<t.left,a=e.left>t.right;return r||i||o||a})}function bC(e,n){return n.some(t=>{let r=e.top<t.top,i=e.bottom>t.bottom,o=e.left<t.left,a=e.right>t.right;return r||i||o||a})}function nd(e,n){return new Qc(e.get($a),e.get(uo),e.get(I),n)}var Qc=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,t,r,i){this._scrollDispatcher=n,this._viewportRuler=t,this._ngZone=r,this._config=i}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:r,height:i}=this._viewportRuler.getViewportSize();Rp(t,[{width:r,height:i,bottom:i,right:r,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},wC=(()=>{class e{_injector=u(O);noop=()=>new Ya;close=t=>xC(this._injector,t);block=()=>ho(this._injector);reposition=t=>nd(this._injector,t);static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),Cr=class{positionStrategy;scrollStrategy=new Ya;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let t=Object.keys(n);for(let r of t)n[r]!==void 0&&(this[r]=n[r])}}};var Jc=class{connectionPair;scrollableViewProperties;constructor(n,t){this.connectionPair=n,this.scrollableViewProperties=t}};var EC=(()=>{class e{_attachedOverlays=[];_document=u(E);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let r=this._attachedOverlays.indexOf(t);r>-1&&this._attachedOverlays.splice(r,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,r,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(r):!0}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),SC=(()=>{class e extends EC{_ngZone=u(I);_renderer=u(Fe).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let r=this._attachedOverlays;for(let i=r.length-1;i>-1;i--){let o=r[i];if(this.canReceiveEvent(o,t,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(t));break}}};static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),IC=(()=>{class e extends EC{_platform=u(de);_ngZone=u(I);_renderer=u(Fe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let r=this._document.body,i={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(r,"pointerdown",this._pointerDownListener,i),o.listen(r,"click",this._clickListener,i),o.listen(r,"auxclick",this._clickListener,i),o.listen(r,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=r.style.cursor,r.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Ct(t)};_clickListener=t=>{let r=Ct(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:r;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,l))){if(yC(s.overlayElement,r)||yC(s.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function yC(e,n){let t=typeof ShadowRoot<"u"&&ShadowRoot,r=n;for(;r;){if(r===e)return!0;r=t&&r instanceof ShadowRoot?r.host:r.parentNode}return!1}var MC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2})}return e})(),rd=(()=>{class e{_platform=u(de);_containerElement;_document=u(E);_styleLoader=u(Dt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||vp()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let o=0;o<i.length;o++)i[o].remove()}let r=this._document.createElement("div");r.classList.add(t),vp()?r.setAttribute("platform","test"):this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._containerElement=r}_loadStyles(){this._styleLoader.load(MC)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),kp=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,t,r,i){this._renderer=t,this._ngZone=r,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Op(e){return e&&e.nodeType===1}var Ap=new Set,po=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new x;_attachments=new x;_detachments=new x;_positionStrategy;_scrollStrategy;_locationChanges=te.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new x;_outsidePointerEvents=new x;_afterNextRenderRef;constructor(n,t,r,i,o,a,s,l,c,d=!1,f,p){this._portalOutlet=n,this._host=t,this._pane=r,this._config=i,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=f,this._renderer=p,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Ap.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=zt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),Ap.delete(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Ap.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=C(C({},this._config),n),this._updateElementSize()}setDirection(n){this._config=W(C({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ke(this._config.width),n.height=ke(this._config.height),n.minWidth=ke(this._config.minWidth),n.minHeight=ke(this._config.minHeight),n.maxWidth=ke(this._config.maxWidth),n.maxHeight=ke(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Op(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new kp(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,t,r){let i=ao(t||[]).filter(o=>!!o);i.length&&(r?n.classList.add(...i):n.classList.remove(...i))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=zt(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(t){if(n)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},vC="cdk-overlay-connected-position-bounding-box",AT=/([A-Za-z%]+)$/;function id(e,n){return new ed(n,e.get(uo),e.get(E),e.get(de),e.get(rd))}var ed=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new x;_resizeSubscription=te.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,t,r,i,o){this._viewportRuler=t,this._document=r,this._platform=i,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(vC),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,t=this._overlayRect,r=this._viewportRect,i=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(n,i,s),c=this._getOverlayPoint(l,t,s),d=this._getOverlayFit(c,t,r,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,c,r)){o.push({position:s,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<d.visibleArea)&&(a={overlayFit:d,overlayPoint:c,originPoint:l,position:s,overlayRect:t})}if(o.length){let s=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,s=c)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&hi(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(vC),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof F?this._origin.nativeElement:Op(this._origin)?this._origin:null}_getOriginPoint(n,t,r){let i;if(r.originX=="center")i=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,s=this._isRtl()?n.left:n.right;i=r.originX=="start"?a:s}t.left<0&&(i-=t.left);let o;return r.originY=="center"?o=n.top+n.height/2:o=r.originY=="top"?n.top:n.bottom,t.top<0&&(o-=t.top),{x:i,y:o}}_getOverlayPoint(n,t,r){let i;r.overlayX=="center"?i=-t.width/2:r.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let o;return r.overlayY=="center"?o=-t.height/2:o=r.overlayY=="top"?0:-t.height,{x:n.x+i,y:n.y+o}}_getOverlayFit(n,t,r,i){let o=CC(t),{x:a,y:s}=n,l=this._getOffset(i,"x"),c=this._getOffset(i,"y");l&&(a+=l),c&&(s+=c);let d=0-a,f=a+o.width-r.width,p=0-s,m=s+o.height-r.height,h=this._subtractOverflows(o.width,d,f),y=this._subtractOverflows(o.height,p,m),v=h*y;return{visibleArea:v,isCompletelyWithinViewport:o.width*o.height===v,fitsInViewportVertically:y===o.height,fitsInViewportHorizontally:h==o.width}}_canFitWithFlexibleDimensions(n,t,r){if(this._hasFlexibleDimensions){let i=r.bottom-t.y,o=r.right-t.x,a=_C(this._overlayRef.getConfig().minHeight),s=_C(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||a!=null&&a<=i,c=n.fitsInViewportHorizontally||s!=null&&s<=o;return l&&c}return!1}_pushOverlayOnScreen(n,t,r){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let i=CC(t),o=this._viewportRect,a=Math.max(n.x+i.width-o.width,0),s=Math.max(n.y+i.height-o.height,0),l=Math.max(o.top-r.top-n.y,0),c=Math.max(o.left-r.left-n.x,0),d=0,f=0;return i.width<=o.width?d=c||-a:d=n.x<this._getViewportMarginStart()?o.left-r.left-n.x:0,i.height<=o.height?f=l||-s:f=n.y<this._getViewportMarginTop()?o.top-r.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,t){if(this._setTransformOrigin(n),this._setOverlayElementStyles(t,n),this._setBoundingBoxStyles(t,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let r=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!RT(this._lastScrollVisibility,r)){let i=new Jc(n,r);this._positionChanges.next(i)}this._lastScrollVisibility=r}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),r,i=n.overlayY;n.overlayX==="center"?r="center":this._isRtl()?r=n.overlayX==="start"?"right":"left":r=n.overlayX==="start"?"left":"right";for(let o=0;o<t.length;o++)t[o].style.transformOrigin=`${r} ${i}`}_calculateBoundingBoxRect(n,t){let r=this._viewportRect,i=this._isRtl(),o,a,s;if(t.overlayY==="top")a=n.y,o=r.height-a+this._getViewportMarginBottom();else if(t.overlayY==="bottom")s=r.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=r.height-s+this._getViewportMarginTop();else{let m=Math.min(r.bottom-n.y+r.top,n.y),h=this._lastBoundingBoxSize.height;o=m*2,a=n.y-m,o>h&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-h/2)}let l=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,c=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,d,f,p;if(c)p=r.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)f=n.x,d=r.right-n.x-this._getViewportMarginEnd();else{let m=Math.min(r.right-n.x+r.left,n.x),h=this._lastBoundingBoxSize.width;d=m*2,f=n.x-m,d>h&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-h/2)}return{top:a,left:f,bottom:s,right:p,width:d,height:o}}_setBoundingBoxStyles(n,t){let r=this._calculateBoundingBoxRect(n,t);!this._isInitialRender&&!this._growAfterOpen&&(r.height=Math.min(r.height,this._lastBoundingBoxSize.height),r.width=Math.min(r.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;i.width=ke(r.width),i.height=ke(r.height),i.top=ke(r.top)||"auto",i.bottom=ke(r.bottom)||"auto",i.left=ke(r.left)||"auto",i.right=ke(r.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",o&&(i.maxHeight=ke(o)),a&&(i.maxWidth=ke(a))}this._lastBoundingBoxSize=r,hi(this._boundingBox.style,i)}_resetBoundingBoxStyles(){hi(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){hi(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,t){let r={},i=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(i){let d=this._viewportRuler.getViewportScrollPosition();hi(r,this._getExactOverlayY(t,n,d)),hi(r,this._getExactOverlayX(t,n,d))}else r.position="static";let s="",l=this._getOffset(t,"x"),c=this._getOffset(t,"y");l&&(s+=`translateX(${l}px) `),c&&(s+=`translateY(${c}px)`),r.transform=s.trim(),a.maxHeight&&(i?r.maxHeight=ke(a.maxHeight):o&&(r.maxHeight="")),a.maxWidth&&(i?r.maxWidth=ke(a.maxWidth):o&&(r.maxWidth="")),hi(this._pane.style,r)}_getExactOverlayY(n,t,r){let i={top:"",bottom:""},o=this._getOverlayPoint(t,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;i.bottom=`${a-(o.y+this._overlayRect.height)}px`}else i.top=ke(o.y);return i}_getExactOverlayX(n,t,r){let i={left:"",right:""},o=this._getOverlayPoint(t,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,r));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;i.right=`${s-(o.x+this._overlayRect.width)}px`}else i.left=ke(o.x);return i}_getScrollVisibility(){let n=this._getOriginRect(),t=this._pane.getBoundingClientRect(),r=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:bC(n,r),isOriginOutsideView:Rp(n,r),isOverlayClipped:bC(t,r),isOverlayOutsideView:Rp(t,r)}}_subtractOverflows(n,...t){return t.reduce((r,i)=>r-Math.max(i,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,r=this._viewportRuler.getViewportScrollPosition();return{top:r.top+this._getViewportMarginTop(),left:r.left+this._getViewportMarginStart(),right:r.left+n-this._getViewportMarginEnd(),bottom:r.top+t-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,t){return t==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ao(n).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof F)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let t=n.width||0,r=n.height||0;return{top:n.y,bottom:n.y+r,left:n.x,right:n.x+t,height:r,width:t}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();n&&(t.style.display="block");let r=t.getBoundingClientRect();return n&&(t.style.display=""),r}};function hi(e,n){for(let t in n)Object.hasOwn(n,t)&&(e[t]=n[t]);return e}function _C(e){if(typeof e!="number"&&e!=null){let[n,t]=e.split(AT);return!t||t==="px"?parseFloat(n):null}return e||null}function CC(e){return{top:Math.floor(e.top),right:Math.floor(e.right),bottom:Math.floor(e.bottom),left:Math.floor(e.left),width:Math.floor(e.width),height:Math.floor(e.height)}}function RT(e,n){return e===n?!0:e.isOriginClipped===n.isOriginClipped&&e.isOriginOutsideView===n.isOriginOutsideView&&e.isOverlayClipped===n.isOverlayClipped&&e.isOverlayOutsideView===n.isOverlayOutsideView}var DC="cdk-global-overlay-wrapper";function go(e){return new td}var td=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let t=n.getConfig();this._overlayRef=n,this._width&&!t.width&&n.updateSize({width:this._width}),this._height&&!t.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(DC),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,r=this._overlayRef.getConfig(),{width:i,height:o,maxWidth:a,maxHeight:s}=r,l=(i==="100%"||i==="100vw")&&(!a||a==="100%"||a==="100vw"),c=(o==="100%"||o==="100vh")&&(!s||s==="100%"||s==="100vh"),d=this._xPosition,f=this._xOffset,p=this._overlayRef.getConfig().direction==="rtl",m="",h="",y="";l?y="flex-start":d==="center"?(y="center",p?h=f:m=f):p?d==="left"||d==="end"?(y="flex-end",m=f):(d==="right"||d==="start")&&(y="flex-start",h=f):d==="left"||d==="start"?(y="flex-start",m=f):(d==="right"||d==="end")&&(y="flex-end",h=f),n.position=this._cssPosition,n.marginLeft=l?"0":m,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":h,t.justifyContent=y,t.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,r=t.style;t.classList.remove(DC),r.justifyContent=r.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},NC=(()=>{class e{_injector=u(O);global(){return go()}flexibleConnectedTo(t){return id(this._injector,t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),TC=new g("OVERLAY_DEFAULT_CONFIG");function bo(e,n){e.get(Dt).load(MC);let t=e.get(rd),r=e.get(E),i=e.get(Je),o=e.get(At),a=e.get(Xt),s=e.get(ve,null,{optional:!0})||e.get(Fe).createRenderer(null,null),l=new Cr(n),c=e.get(TC,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,!r.body||!("showPopover"in r.body)?l.usePopover=!1:l.usePopover=n?.usePopover??c;let d=r.createElement("div"),f=r.createElement("div");d.id=i.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),f.appendChild(d),l.usePopover&&(f.setAttribute("popover","manual"),f.classList.add("cdk-overlay-popover"));let p=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Op(p)?p.after(f):p?.type==="parent"?p.element.appendChild(f):t.getContainerElement().appendChild(f),new po(new Wa(d,o,e),f,d,l,e.get(I),e.get(SC),r,e.get(hc),e.get(IC),n?.disableAnimations??e.get(ra,null,{optional:!0})==="NoopAnimations",e.get(Ae),s)}var AC=(()=>{class e{scrollStrategies=u(wC);_positionBuilder=u(NC);_injector=u(O);create(t){return bo(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var gi=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[AC],imports:[Ee,pi,Np,Np]})}return e})();var Dr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Pp=(()=>{class e extends mo{_elementRef=u(F);_focusTrapFactory=u(K_);_config;_interactivityChecker=u(gp);_ngZone=u(I);_focusMonitor=u(yr);_renderer=u(ve);_changeDetectorRef=u(dt);_injector=u(O);_platform=u(de);_document=u(E);_portalOutlet;_focusTrapped=new x;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=u(Dr,{optional:!0})||new Dr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let r=this._ariaLabelledByQueue.indexOf(t);r>-1&&(this._ariaLabelledByQueue.splice(r,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),r}attachTemplatePortal(t){this._portalOutlet.hasAttached();let r=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),r}attachDomPortal=t=>{this._portalOutlet.hasAttached();let r=this._portalOutlet.attachDomPortal(t);return this._contentAttached(),r};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,r){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),a(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",i),a=this._renderer.listen(t,"mousedown",i)})),t.focus(r)}_focusByCssSelector(t,r){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,r)}_trapFocus(t){this._isDestroyed||zt(()=>{let r=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||r.focus(t);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(t)||this._focusDialogContainer(t);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',t);break;default:this._focusByCssSelector(this._config.autoFocus,t);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,r=null;if(typeof t=="string"?r=this._document.querySelector(t):typeof t=="boolean"?r=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(r=t),this._config.restoreFocus&&r&&typeof r.focus=="function"){let i=Va(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(r,this._closeInteractionType),this._closeInteractionType=null):r.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(t){this._elementRef.nativeElement.focus?.(t)}_containsFocus(){let t=this._elementRef.nativeElement,r=Va();return t===r||t.contains(r)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Va()))}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){function t(r,i){}return Z({type:e,selectors:[["cdk-dialog-container"]],viewQuery:function(i,o){if(i&1&&xn(qa,7),i&2){let a;Ce(a=De())&&(o._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,o){i&2&&_e("id",o._config.id||null)("role",o._config.role)("aria-modal",o._config.ariaModal)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null)},features:[he],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,o){i&1&&$t(0,t,0,0,"ng-template",0)},dependencies:[qa],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return e})(),bi=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new x;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,t){this.overlayRef=n,this.config=t,this.disableClose=t.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(r=>{r.keyCode===27&&!this.disableClose&&!vr(r)&&(r.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(n,t){if(this._canClose(n)){let r=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),r.next(n),r.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",t=""){return this.overlayRef.updateSize({width:n,height:t}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let t=this.config;return!!this.containerInstance&&(!t.closePredicate||t.closePredicate(n,t,this.componentInstance))}},kT=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let e=u(O);return()=>ho(e)}}),OT=new g("DialogData"),FT=new g("DefaultDialogConfig");function PT(e){let n=re(e),t=new ae;return{valueSignal:n,get value(){return n()},change:t,ngOnDestroy(){t.complete()}}}var Lp=(()=>{class e{_injector=u(O);_defaultOptions=u(FT,{optional:!0});_parentDialog=u(e,{optional:!0,skipSelf:!0});_overlayContainer=u(rd);_idGenerator=u(Je);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;_ariaHiddenElements=new Map;_scrollStrategy=u(kT);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ro(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pt(void 0)));open(t,r){let i=this._defaultOptions||new Dr;r=C(C({},i),r),r.id=r.id||this._idGenerator.getId("cdk-dialog-"),r.id&&this.getDialogById(r.id);let o=this._getOverlayConfig(r),a=bo(this._injector,o),s=new bi(a,r),l=this._attachContainer(a,s,r);if(s.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(St(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(t,s,l,r),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){Fp(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(r=>r.id===t)}ngOnDestroy(){Fp(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),Fp(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let r=new Cr({positionStrategy:t.positionStrategy||go().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation,disableAnimations:t.disableAnimations});return t.backdropClass&&(r.backdropClass=t.backdropClass),r}_attachContainer(t,r,i){let o=i.injector||i.viewContainerRef?.injector,a=[{provide:Dr,useValue:i},{provide:bi,useValue:r},{provide:po,useValue:t}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,a.push(...i.container.providers(i))):s=Pp;let l=new fo(s,i.viewContainerRef,O.create({parent:o||this._injector,providers:a}));return t.attach(l).instance}_attachDialogContent(t,r,i,o){if(t instanceof Nt){let a=this._createInjector(o,r,i,void 0),s={$implicit:o.data,dialogRef:r};o.templateContext&&(s=C(C({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new _r(t,null,s,a))}else{let a=this._createInjector(o,r,i,this._injector),s=i.attachComponentPortal(new fo(t,o.viewContainerRef,a,null,o.bindings));r.componentRef=s,r.componentInstance=s.instance}}_createInjector(t,r,i,o){let a=t.injector||t.viewContainerRef?.injector,s=[{provide:OT,useValue:t.data},{provide:bi,useValue:r}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(r,t,i)):s.push(...t.providers)),t.direction&&(!a||!a.get(Xt,null,{optional:!0}))&&s.push({provide:Xt,useValue:PT(t.direction)}),O.create({parent:a||o,providers:s})}_removeOpenDialog(t,r){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,a)=>{o?a.setAttribute("aria-hidden",o):a.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),r&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(t){if(t.parentElement){let r=t.parentElement.children;for(let i=r.length-1;i>-1;i--){let o=r[i];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();function Fp(e,n){let t=e.length;for(;t--;)n(e[t])}var RC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[Lp],imports:[gi,pi,Q_,pi]})}return e})();var sd=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings},Vp="mdc-dialog--open",kC="mdc-dialog--opening",OC="mdc-dialog--closing",LT=150,VT=75,jT=(()=>{class e extends Pp{_animationStateChanged=new ae;_animationsEnabled=!xt();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?PC(this._config.enterAnimationDuration)??LT:0;_exitAnimationDuration=this._animationsEnabled?PC(this._config.exitAnimationDuration)??VT:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(FC,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(kC,Vp)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Vp),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Vp),this._animationsEnabled?(this._hostElement.style.setProperty(FC,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(OC)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(kC,OC)}_waitForAnimationToComplete(t,r){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(r,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let r=super.attachComponentPortal(t);return r.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),r}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Tt(e)))(i||e)}})();static \u0275cmp=(function(){function t(r,i){}return Z({type:e,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,o){i&2&&(an("id",o._config.id),_e("aria-modal",o._config.ariaModal)("role",o._config.role)("aria-labelledby",o._config.ariaLabel?null:o._ariaLabelledByQueue[0])("aria-label",o._config.ariaLabel)("aria-describedby",o._config.ariaDescribedBy||null),J("_mat-animation-noopable",!o._animationsEnabled)("mat-mdc-dialog-container-with-actions",o._actionSectionCount>0))},features:[he],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,o){i&1&&(N(0,"div",0)(1,"div",1),$t(2,t,0,0,"ng-template",2),k()())},dependencies:[qa],styles:[`.mat-mdc-dialog-container {
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
`],encapsulation:2,changeDetection:1})})()}return e})(),FC="--mat-dialog-transition-duration";function PC(e){return e==null?null:typeof e=="number"?e:e.endsWith("ms")?io(e.substring(0,e.length-2)):e.endsWith("s")?io(e.substring(0,e.length-1))*1e3:e==="0"?0:null}var ad=(function(e){return e[e.OPEN=0]="OPEN",e[e.CLOSING=1]="CLOSING",e[e.CLOSED=2]="CLOSED",e})(ad||{}),Xa=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new tr(1);_beforeClosed=new tr(1);_result;_closeFallbackTimeout;_state=ad.OPEN;_closeInteractionType;constructor(n,t,r){this._ref=n,this._config=t,this._containerInstance=r,this.disableClose=t.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),r._animationStateChanged.pipe(Ne(i=>i.state==="opened"),St(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),r._animationStateChanged.pipe(Ne(i=>i.state==="closed"),St(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Mn(this.backdropClick(),this.keydownEvents().pipe(Ne(i=>i.keyCode===27&&!this.disableClose&&!vr(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),LC(this,i.type==="keydown"?"keyboard":"mouse"))})}close(n){let t=this._config.closePredicate;t&&!t(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(Ne(r=>r.state==="closing"),St(1)).subscribe(r=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),r.totalTime+100)}),this._state=ad.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let t=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?t.left(n.left):t.right(n.right):t.centerHorizontally(),n&&(n.top||n.bottom)?n.top?t.top(n.top):t.bottom(n.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",t=""){return this._ref.updateSize(n,t),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=ad.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function LC(e,n,t){return e._closeInteractionType=n,e.close(t)}var BT=new g("MatMdcDialogData"),HT=new g("mat-mdc-dialog-default-options"),zT=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let e=u(O);return()=>ho(e)}}),Za=(()=>{class e{_defaultOptions=u(HT,{optional:!0});_scrollStrategy=u(zT);_parentDialog=u(e,{optional:!0,skipSelf:!0});_idGenerator=u(Je);_injector=u(O);_dialog=u(Lp);_animationsDisabled=xt();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new x;_afterOpenedAtThisLevel=new x;dialogConfigClass=sd;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ro(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(pt(void 0)));constructor(){this._dialogRefConstructor=Xa,this._dialogContainerType=jT,this._dialogDataToken=BT}open(t,r){let i;r=C(C({},this._defaultOptions||new sd),r),r.id=r.id||this._idGenerator.getId("mat-mdc-dialog-"),r.scrollStrategy=r.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,W(C({},r),{positionStrategy:go(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||r.enterAnimationDuration?.toLocaleString()==="0"||r.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:r},{provide:Dr,useValue:r}]},templateContext:()=>({dialogRef:i}),providers:(a,s,l)=>(i=new this._dialogRefConstructor(a,r,l),i.updatePosition(r?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i},{provide:bi,useValue:null}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let a=this.openDialogs.indexOf(i);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(r=>r.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let r=t.length;for(;r--;)t[r].close()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})(),VC=(()=>{class e{dialogRef=u(Xa,{optional:!0});_elementRef=u(F);_dialog=u(Za);ariaLabel;type="button";dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=UC(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let r=t._matDialogClose;r&&(this.dialogResult=r.currentValue)}_onButtonClick(t){this._elementRef.nativeElement.getAttribute("aria-disabled")!=="true"&&LC(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(r,i){r&1&&Re("click",function(a){return i._onButtonClick(a)}),r&2&&_e("aria-label",i.ariaLabel||null)("type",i.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[bt]})}return e})(),jC=(()=>{class e{_dialogRef=u(Xa,{optional:!0});_elementRef=u(F);_dialog=u(Za);ngOnInit(){this._dialogRef||(this._dialogRef=UC(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e})}return e})(),BC=(()=>{class e extends jC{id=u(Je).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Tt(e)))(i||e)}})();static \u0275dir=T({type:e,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(r,i){r&2&&an("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[he]})}return e})(),HC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[xm([hC])]})}return e})(),zC=(()=>{class e extends jC{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Tt(e)))(i||e)}})();static \u0275dir=T({type:e,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(r,i){r&2&&J("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[he]})}return e})();function UC(e,n){let t=e.nativeElement.parentElement;for(;t&&!t.classList.contains("mat-mdc-dialog-container");)t=t.parentElement;return t?n.find(r=>r.id===t.id):null}var ld=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({providers:[Za],imports:[RC,gi,pi,Ee]})}return e})();function $C(e){return Error(`Unable to find icon with the name "${e}"`)}function $T(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function GC(e){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`)}function WC(e){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`)}var Xn=class{url;svgText;options;svgElement=null;constructor(n,t,r){this.url=n,this.svgText=t,this.options=r}},YC=(()=>{class e{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,r,i,o){this._httpClient=t,this._sanitizer=r,this._errorHandler=o,this._document=i}addSvgIcon(t,r,i){return this.addSvgIconInNamespace("",t,r,i)}addSvgIconLiteral(t,r,i){return this.addSvgIconLiteralInNamespace("",t,r,i)}addSvgIconInNamespace(t,r,i,o){return this._addSvgIconConfig(t,r,new Xn(i,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,r,i,o){let a=this._sanitizer.sanitize(nt.HTML,i);if(!a)throw WC(i);let s=oo(a);return this._addSvgIconConfig(t,r,new Xn("",s,o))}addSvgIconSet(t,r){return this.addSvgIconSetInNamespace("",t,r)}addSvgIconSetLiteral(t,r){return this.addSvgIconSetLiteralInNamespace("",t,r)}addSvgIconSetInNamespace(t,r,i){return this._addSvgIconSetConfig(t,new Xn(r,null,i))}addSvgIconSetLiteralInNamespace(t,r,i){let o=this._sanitizer.sanitize(nt.HTML,r);if(!o)throw WC(r);let a=oo(o);return this._addSvgIconSetConfig(t,new Xn("",a,i))}registerFontClassAlias(t,r=t){return this._fontCssClassesByAlias.set(t,r),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=WT(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let r=this._sanitizer.sanitize(nt.RESOURCE_URL,t);if(!r)throw GC(t);let i=this._cachedIconsByUrl.get(r);return i?et(cd(i)):this._loadSvgIconFromConfig(new Xn(t,null)).pipe(Fr(o=>this._cachedIconsByUrl.set(r,o)),pe(o=>cd(o)))}getNamedSvgIcon(t,r=""){let i=qC(r,t),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(r,t),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(r);return a?this._getSvgFromIconSetConfigs(t,a):Yd($C(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?et(cd(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(pe(r=>cd(r)))}_getSvgFromIconSetConfigs(t,r){let i=this._extractIconWithNameFromAnySet(t,r);if(i)return et(i);let o=r.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Bs(s=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(nt.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(c)),et(null)})));return ko(o).pipe(pe(()=>{let a=this._extractIconWithNameFromAnySet(t,r);if(!a)throw $C(t);return a}))}_extractIconWithNameFromAnySet(t,r){for(let i=r.length-1;i>=0;i--){let o=r[i];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Fr(r=>t.svgText=r),pe(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?et(null):this._fetchIcon(t).pipe(Fr(r=>t.svgText=r))}_extractSvgIconFromSet(t,r,i){let o=t.querySelector(`[id="${r}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,i);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),i);let s=this._svgElementFromString(oo("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,i)}_svgElementFromString(t){let r=this._document.createElement("DIV");r.innerHTML=t;let i=r.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let r=this._svgElementFromString(oo("<svg></svg>")),i=t.attributes;for(let o=0;o<i.length;o++){let{name:a,value:s}=i[o];a!=="id"&&r.setAttribute(a,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&r.appendChild(t.childNodes[o].cloneNode(!0));return r}_setSvgAttributes(t,r){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),r&&r.viewBox&&t.setAttribute("viewBox",r.viewBox),t}_fetchIcon(t){let{url:r,options:i}=t,o=i?.withCredentials??!1;if(!this._httpClient)throw $T();if(r==null)throw Error(`Cannot fetch icon from URL "${r}".`);let a=this._sanitizer.sanitize(nt.RESOURCE_URL,r);if(!a)throw GC(r);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(pe(c=>oo(c)),Fo(()=>this._inProgressUrlFetches.delete(a)),Po());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(t,r,i){return this._svgIconConfigs.set(qC(t,r),i),this}_addSvgIconSetConfig(t,r){let i=this._iconSetConfigs.get(t);return i?i.push(r):this._iconSetConfigs.set(t,[r]),this}_svgElementFromConfig(t){if(!t.svgElement){let r=this._svgElementFromString(t.svgText);this._setSvgAttributes(r,t.options),t.svgElement=r}return t.svgElement}_getIconConfigFromResolvers(t,r){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](r,t);if(o)return GT(o)?new Xn(o.url,null,o.options):new Xn(o,null)}}static \u0275fac=function(r){return new(r||e)(A(Pa,8),A(La),A(E,8),A(st))};static \u0275prov=K({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function cd(e){return e.cloneNode(!0)}function qC(e,n){return e+":"+n}function GT(e){return!!(e.url&&e.options)}function WT(e){let n=null,t=!1;return e.fonts&&typeof e.fonts.forEach=="function"&&e.fonts.forEach(r=>{let i=r.family.replace(/['"]/g,"").trim().toLowerCase();(i==="material icons"||i.startsWith("material icons "))&&(t=!0),i.startsWith("material symbols rounded")?n="rounded":i.startsWith("material symbols sharp")?n="sharp":i.startsWith("material symbols")&&(n="outlined")}),[n&&!t?`material-symbols-${n}`:"material-icons","mat-ligature-font"]}var qT=new g("MAT_ICON_DEFAULT_OPTIONS"),YT=new g("mat-icon-location",{providedIn:"root",factory:()=>{let e=u(E),n=e?e.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),XC=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],XT=XC.map(e=>`[${e}]`).join(", "),ZT=/^url\(['"]?#(.*?)['"]?\)$/,ZC=(()=>{class e{_elementRef=u(F);_iconRegistry=u(YC);_location=u(YT);_errorHandler=u(st);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let r=this._cleanupFontValue(t);r!==this._fontSet&&(this._fontSet=r,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let r=this._cleanupFontValue(t);r!==this._fontIcon&&(this._fontIcon=r,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=te.EMPTY;constructor(){let t=u(new fc("aria-hidden"),{optional:!0}),r=u(qT,{optional:!0});r&&(r.color&&(this.color=this._defaultColor=r.color),r.fontSet&&(this.fontSet=r.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let r=t.split(":");switch(r.length){case 1:return["",r[0]];case 2:return r;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let r=this._location.getPathname();r!==this._previousPath&&(this._previousPath=r,this._prependPathToReferences(r))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(r),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,r=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();r--;){let i=t.childNodes[r];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,r=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),r.forEach(i=>t.classList.add(i)),this._previousFontSetClass=r,this.fontIcon!==this._previousFontIconClass&&!r.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let r=this._elementsWithExternalReferences;r&&r.forEach((i,o)=>{i.forEach(a=>{o.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){let r=t.querySelectorAll(XT),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<r.length;o++)XC.forEach(a=>{let s=r[o],l=s.getAttribute(a),c=l?l.match(ZT):null;if(c){let d=i.get(s);d||(d=[],i.set(s,d)),d.push({name:a,value:c[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[r,i]=this._splitIconName(t);r&&(this._svgNamespace=r),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,r).pipe(St(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${r}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){return Z({type:e,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,o){i&2&&(_e("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),sn(o.color?"mat-"+o.color:""),J("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Ie],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(Ge(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2})})()}return e})(),KC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Ee]})}return e})();var Bp=new g("MAT_MENU_PANEL"),Ka=(()=>{class e{_isAnchor;_elementRef=u(F);_document=u(E);_focusMonitor=u(yr);_parentMenu=u(Bp,{optional:!0});_changeDetectorRef=u(dt);role="menuitem";disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new x;_focused=new x;_highlighted=!1;_triggersSubmenu=!1;constructor(){u(Dt).load(Gc),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName==="A"}focus(t,r){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,r):this._getHostElement().focus(r),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?"-1":"0"}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),r=t.querySelectorAll("mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp");for(let i=0;i<r.length;i++)r[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],r=["mat-icon, [matMenuItemIcon]","*"];function i(o,a){o&1&&(bl(),N(0,"svg",2),Ue(1,"polygon",3),k())}return Z({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:12,hostBindings:function(a,s){a&1&&Re("click",function(c){return s._checkDisabled(c)})("mouseenter",function(){return s._handleMouseEnter()}),a&2&&(_e("role",s.role)("tabindex",s._getTabIndex())("aria-disabled",s._getAriaDisabled())("disabled",s._getDisabled()),J("mat-mdc-menu-item-highlighted",s._highlighted)("mat-mdc-menu-item-submenu-trigger",s._triggersSubmenu)("mat-mdc-menu-item-disabled",s.disabled)("mat-mdc-menu-item-disabled-interactive",s.disabledInteractive))},inputs:{role:"role",disabled:[2,"disabled","disabled",Ie],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie],disableRipple:[2,"disableRipple","disableRipple",Ie]},exportAs:["matMenuItem"],ngContentSelectors:r,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(a,s){a&1&&(Ge(t),Q(0),N(1,"span",0),Q(2,1),k(),Ue(3,"div",1),ge(4,i,2,0,":svg:svg",2)),a&2&&(j(3),vt("matRippleDisabled",s.disableRipple||s.disabled)("matRippleTrigger",s._getHostElement()),j(),be(s._triggersSubmenu?4:-1))},dependencies:[lC],encapsulation:2})})()}return e})();var eA=new g("MatMenuContent");var tA=new g("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),jp="_mat-menu-enter",dd="_mat-menu-exit",vo=(()=>{class e{_elementRef=u(F);_changeDetectorRef=u(dt);_injector=u(O);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=xt();_allItems;_directDescendantItems=new Hn;_classList={};_panelAnimationState="void";_animationDone=new x;_isAnimating=re(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let r=this._previousPanelClass,i=C({},this._classList);r&&r.length&&r.split(" ").forEach(o=>{i[o]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass="";get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new ae;close=this.closed;panelId=u(Je).getId("mat-menu-panel-");constructor(){let t=u(tA);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Ha(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(t=>t.disabled&&!t.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(pt(this._directDescendantItems),Ti(t=>Mn(...t.map(r=>r._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let r=this._keyManager;if(this._panelAnimationState==="enter"&&r.activeItem?._hasFocus()){let i=t.toArray(),o=Math.max(0,Math.min(i.length-1,r.activeItemIndex||0));i[o]&&!i[o].disabled?r.setActiveItem(o):r.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(pt(this._directDescendantItems),Ti(r=>Mn(...r.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let r=t.keyCode,i=this._keyManager;switch(r){case 27:vr(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(r===38||r===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=zt(()=>{let r=this._resolvePanel();if(!r||!r.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&r&&r.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,r=this.yPosition){this._classList=W(C({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":r==="above","mat-menu-below":r==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let r=t===dd;(r||t===jp)&&(r&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(r?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===jp||t===dd)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let r=this._resolvePanel();r&&(r.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(dd),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?jp:dd)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(pt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(r=>r._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["*"];function r(i,o){if(i&1){let a=ga();Pe(0,"div",0),rc("click",function(){bn(a);let l=Ve();return yn(l.closed.emit("click"))})("animationstart",function(l){bn(a);let c=Ve();return yn(c._onAnimationStart(l.animationName))})("animationend",function(l){bn(a);let c=Ve();return yn(c._onAnimationDone(l.animationName))})("animationcancel",function(l){bn(a);let c=Ve();return yn(c._onAnimationDone(l.animationName))}),Pe(1,"div",1),Q(2),$e()()}if(i&2){let a=Ve();sn(a._classList),J("mat-menu-panel-animations-disabled",a._animationsDisabled)("mat-menu-panel-exit-animation",a._panelAnimationState==="void")("mat-menu-panel-animating",a._isAnimating()),an("id",a.panelId),_e("aria-label",a.ariaLabel||null)("aria-labelledby",a.ariaLabelledby||null)("aria-describedby",a.ariaDescribedby||null)}}return Z({type:e,selectors:[["mat-menu"]],contentQueries:function(o,a,s){if(o&1&&fr(s,eA,5)(s,Ka,5)(s,Ka,4),o&2){let l;Ce(l=De())&&(a.lazyContent=l.first),Ce(l=De())&&(a._allItems=l),Ce(l=De())&&(a.items=l)}},viewQuery:function(o,a){if(o&1&&xn(Nt,5),o&2){let s;Ce(s=De())&&(a.templateRef=s.first)}},hostVars:3,hostBindings:function(o,a){o&2&&_e("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",Ie],hasBackdrop:[2,"hasBackdrop","hasBackdrop",i=>i==null?null:Ie(i)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[ct([{provide:Bp,useExisting:e}])],ngContentSelectors:t,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(o,a){o&1&&(Ge(),tc(0,r,3,12,"ng-template"))},styles:[`mat-menu {
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
`],encapsulation:2})})()}return e})(),nA=new g("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let e=u(O);return()=>nd(e)}});var yo=new WeakMap,rA=(()=>{class e{_canHaveBackdrop;_element=u(F);_viewContainerRef=u(Ut);_menuItemInstance=u(Ka,{optional:!0,self:!0});_dir=u(Xt,{optional:!0});_focusMonitor=u(yr);_ngZone=u(I);_injector=u(O);_scrollStrategy=u(nA);_changeDetectorRef=u(dt);_animationsDisabled=xt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=te.EMPTY;_menuCloseSubscription=te.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(r=>{this._destroyMenu(r),(r==="click"||r==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(r)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let r=u(Bp,{optional:!0});this._parentMaterialMenu=r instanceof vo?r:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&yo.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let r=this._menu;if(this._menuOpen||!r)return;this._pendingRemoval?.unsubscribe();let i=yo.get(r);yo.set(r,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(r),a=o.getConfig(),s=a.positionStrategy;this._setPosition(r,s),this._canHaveBackdrop?a.hasBackdrop=r.hasBackdrop==null?!this._triggersSubmenu():r.hasBackdrop:a.hasBackdrop=r.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(r)),r.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),r.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,r.direction=this.dir,t&&r.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),r instanceof vo&&(r._setIsOpen(!0),r._directDescendantItems.changes.pipe(Lt(r.close)).subscribe(()=>{s.withLockedPosition(!1).reapplyLastPosition(),s.withLockedPosition(!0)}))}focus(t,r){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,r):this._element.nativeElement.focus(r)}_destroyMenu(t){let r=this._overlayRef,i=this._menu;!r||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof vo&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(St(1)).subscribe(()=>{r.detach(),yo.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(r.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&yo.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let r=this._getOverlayConfig(t);this._subscribeToPositions(t,r.positionStrategy),this._overlayRef=bo(this._injector,r),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof vo&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new Cr({positionStrategy:id(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,r){t.setPositionClasses&&r.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX==="start"?"after":"before",a=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(o,a)})})}_setPosition(t,r){let[i,o]=t.xPosition==="before"?["end","start"]:["start","end"],[a,s]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[l,c]=[a,s],[d,f]=[i,o],p=0;if(this._triggersSubmenu()){if(f=i=t.xPosition==="before"?"start":"end",o=d=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let m=this._parentMaterialMenu.items.first;this._parentInnerPadding=m?m._getHostElement().offsetTop:0}p=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(l=a==="top"?"bottom":"top",c=s==="top"?"bottom":"top");r.withPositions([{originX:i,originY:l,overlayX:d,overlayY:a,offsetY:p},{originX:o,originY:l,overlayX:f,overlayY:a,offsetY:p},{originX:i,originY:c,overlayX:d,overlayY:s,offsetY:-p},{originX:o,originY:c,overlayX:f,overlayY:s,offsetY:-p}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),r=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:et(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Ne(a=>this._menuOpen&&a!==this._menuItemInstance)):et();return Mn(t,i,o,r)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new _r(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return yo.get(t)===this}_triggerIsAriaDisabled(){return Ie(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(r){pm()};static \u0275dir=T({type:e})}return e})(),QC=(()=>{class e extends rA{_cleanupTouchstart;_hoverSubscription=te.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new ae;onMenuOpen=this.menuOpened;menuClosed=new ae;onMenuClose=this.menuClosed;constructor(){super(!0);let t=u(ve);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",r=>{di(r)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){ci(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let r=t.keyCode;(r===13||r===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(r===39&&this.dir==="ltr"||r===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(r,i){r&1&&Re("click",function(a){return i._handleClick(a)})("mousedown",function(a){return i._handleMousedown(a)})("keydown",function(a){return i._handleKeydown(a)}),r&2&&_e("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[he]})}return e})();var JC=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Wc,gi,Ee,Xc]})}return e})();var oA=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),eD=(()=>{class e{_elementRef=u(F);_platform=u(de);_document=u(E);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["*",[["mat-toolbar-row"]]];return Z({type:e,selectors:[["mat-toolbar"]],contentQueries:function(o,a,s){if(o&1&&fr(s,oA,5),o&2){let l;Ce(l=De())&&(a._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,a){o&2&&(sn(a.color?"mat-"+a.color:""),J("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(o,a){o&1&&(Ge(t),Q(0),Q(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2})})()}return e})();var tD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Ee]})}return e})();var _o={api:"./",appname:"Minecraft server status",production:!0,theme:"azure-blue",serverIp:"85.215.76.190",serverPort:"25565"};var cD=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,r){this._renderer=t,this._elementRef=r}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(r){return new(r||e)(se(ve),se(F))};static \u0275dir=T({type:e})}return e})(),sA=(()=>{class e extends cD{static \u0275fac=(()=>{let t;return function(i){return(t||(t=Tt(e)))(i||e)}})();static \u0275dir=T({type:e,features:[he]})}return e})(),dD=new g("");var lA={provide:dD,useExisting:Vt(()=>Cd),multi:!0};function cA(){let e=Gt()?Gt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var dA=new g(""),Cd=(()=>{class e extends cD{_compositionMode;_composing=!1;constructor(t,r,i){super(t,r),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!cA())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(r){return new(r||e)(se(ve),se(F),se(dA,8))};static \u0275dir=T({type:e,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(r,i){r&1&&Re("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},standalone:!1,features:[ct([lA]),he]})}return e})();function Gp(e){return e==null||Wp(e)===0}function Wp(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var Dd=new g(""),qp=new g(""),uA=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,rs=class{static min(n){return fA(n)}static max(n){return mA(n)}static required(n){return uD(n)}static requiredTrue(n){return pA(n)}static email(n){return hA(n)}static minLength(n){return gA(n)}static maxLength(n){return bA(n)}static pattern(n){return yA(n)}static nullValidator(n){return md()}static compose(n){return bD(n)}static composeAsync(n){return yD(n)}};function fA(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function mA(e){return n=>{if(n.value==null||e==null)return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function uD(e){return Gp(e.value)?{required:!0}:null}function pA(e){return e.value===!0?null:{required:!0}}function hA(e){return Gp(e.value)||uA.test(e.value)?null:{email:!0}}function gA(e){return n=>{let t=n.value?.length??Wp(n.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function bA(e){return n=>{let t=n.value?.length??Wp(n.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function yA(e){if(!e)return md;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),r=>{if(Gp(r.value))return null;let i=r.value;return n.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function md(e){return null}function fD(e){return e!=null}function mD(e){return ai(e)?Pt(e):e}function pD(e){let n={};return e.forEach(t=>{n=t!=null?C(C({},n),t):n}),Object.keys(n).length===0?null:n}function hD(e,n){return n.map(t=>t(e))}function vA(e){return!e.validate}function gD(e){return e.map(n=>vA(n)?n:t=>n.validate(t))}function bD(e){if(!e)return null;let n=e.filter(fD);return n.length==0?null:function(t){return pD(hD(t,n))}}function Yp(e){return e!=null?bD(gD(e)):null}function yD(e){if(!e)return null;let n=e.filter(fD);return n.length==0?null:function(t){let r=hD(t,n).map(mD);return ko(r).pipe(pe(pD))}}function Xp(e){return e!=null?yD(gD(e)):null}function nD(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function vD(e){return e._rawValidators}function _D(e){return e._rawAsyncValidators}function Hp(e){return e?Array.isArray(e)?e:[e]:[]}function pd(e,n){return Array.isArray(e)?e.includes(n):e===n}function rD(e,n){let t=Hp(n);return Hp(e).forEach(i=>{pd(t,i)||t.push(i)}),t}function iD(e,n){return Hp(n).filter(t=>!pd(e,t))}var hd=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Yp(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Xp(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},xr=class extends hd{name;get formDirective(){return null}get path(){return null}};var Qa="VALID",ud="INVALID",Co="PENDING",Ja="DISABLED",wr=class{},gd=class extends wr{value;source;constructor(n,t){super(),this.value=n,this.source=t}},ts=class extends wr{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},ns=class extends wr{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},Do=class extends wr{status;source;constructor(n,t){super(),this.status=n,this.source=t}},bd=class extends wr{source;constructor(n){super(),this.source=n}},yi=class extends wr{source;constructor(n){super(),this.source=n}};function Zp(e){return(xd(e)?e.validators:e)||null}function _A(e){return Array.isArray(e)?Yp(e):e||null}function Kp(e,n){return(xd(n)?n.asyncValidators:e)||null}function CA(e){return Array.isArray(e)?Xp(e):e||null}function xd(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function CD(e,n,t){let r=e.controls;if(!(n?Object.keys(r):r).length)throw new _(1e3,"");if(!xD(r,t))throw new _(1001,"")}function DD(e,n,t){e._forEachChild((r,i)=>{if(t[i]===void 0)throw new _(-1002,"")})}var xo=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=re(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return oe(this.statusReactive)}set status(n){oe(()=>this.statusReactive.set(n))}_status=Te(()=>this.statusReactive());statusReactive=re(void 0);get valid(){return this.status===Qa}get invalid(){return this.status===ud}get pending(){return this.status===Co}get disabled(){return this.status===Ja}get enabled(){return this.status!==Ja}errors;get pristine(){return oe(this.pristineReactive)}set pristine(n){oe(()=>this.pristineReactive.set(n))}_pristine=Te(()=>this.pristineReactive());pristineReactive=re(!0);get dirty(){return!this.pristine}get touched(){return oe(this.touchedReactive)}set touched(n){oe(()=>this.touchedReactive.set(n))}_touched=Te(()=>this.touchedReactive());touchedReactive=re(!1);get untouched(){return!this.touched}_events=new x;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(rD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(rD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(iD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(iD(n,this._rawAsyncValidators))}hasValidator(n){return pd(this._rawValidators,n)}hasAsyncValidator(n){return pd(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(W(C({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new ns(!0,r))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:r})}),n.onlySelf||this._parent?._updateTouched(n,r),t&&n.emitEvent!==!1&&this._events.next(new ns(!1,r))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let r=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(W(C({},n),{sourceControl:r})),t&&n.emitEvent!==!1&&this._events.next(new ts(!1,r))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let r=n.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,r),t&&n.emitEvent!==!1&&this._events.next(new ts(!0,r))}markAsPending(n={}){this.status=Co;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Do(this.status,t)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(W(C({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Ja,this.errors=null,this._forEachChild(i=>{i.disable(W(C({},n),{onlySelf:!0}))}),this._updateValue();let r=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new gd(this.value,r)),this._events.next(new Do(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(W(C({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Qa,this._forEachChild(r=>{r.enable(W(C({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(W(C({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n,t){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let r=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Qa||this.status===Co)&&this._runAsyncValidator(r,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new gd(this.value,t)),this._events.next(new Do(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(W(C({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ja:Qa}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=Co,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:n!==!1};let r=mD(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((r,i)=>r&&r._find(i),this)}getError(n,t){let r=t?this.get(t):this;return r?.errors?r.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,r){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||r)&&this._events.next(new Do(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,r)}_initObservables(){this.valueChanges=new ae,this.statusChanges=new ae}_calculateStatus(){return this._allControlsDisabled()?Ja:this.errors?ud:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Co)?Co:this._anyControlsHaveStatus(ud)?ud:Qa}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let r=!this._anyControlsDirty(),i=this.pristine!==r;this.pristine=r,n.onlySelf||this._parent?._updatePristine(n,t),i&&this._events.next(new ts(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new ns(this.touched,t)),n.onlySelf||this._parent?._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){xd(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=_A(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=CA(this._rawAsyncValidators)}_updateHasRequiredValidator(){oe(()=>this._hasRequired.set(this.hasValidator(rs.required)))}};function xD(e,n){return Object.hasOwn(e,n)}function DA(e){return e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"}function xA(e,n,t,r){switch(t){case"name":e.setAttribute(n,t,r);break;case"disabled":case"readonly":case"required":r?e.setAttribute(n,t,""):e.removeAttribute(n,t);break;case"max":case"min":case"minLength":case"maxLength":r!==void 0?e.setAttribute(n,t,r.toString()):e.removeAttribute(n,t);break}}var zp=class{kind;context;control;message;constructor({kind:n,context:t,control:r}){this.kind=n,this.context=t,this.control=r}};var wA=(()=>{class e{_validator=md;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let r=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(r),this._validator=this._enabled?this.createValidator(r):md,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,features:[bt]})}return e})();var EA={provide:Dd,useExisting:Vt(()=>wD),multi:!0};var wD=(()=>{class e extends wA{required;inputName="required";normalizeInput=Ie;createValidator=t=>uD;enabled(t){return t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Tt(e)))(i||e)}})();static \u0275dir=T({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(r,i){r&2&&_e("required",i._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[ct([EA]),he]})}return e})();var SA=new g(""),Qp=new g("",{factory:()=>Jp}),Jp="always";function IA(e,n){return[...n.path,e]}function MA(e,n,t=Jp){eh(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),TA(e,n),RA(e,n),AA(e,n),NA(e,n)}function oD(e,n,t=!0){let r=()=>{};n?.valueAccessor?.registerOnChange(r),n?.valueAccessor?.registerOnTouched(r),vd(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function yd(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function NA(e,n){if(n.valueAccessor.setDisabledState){let t=r=>{n.valueAccessor.setDisabledState(r)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function eh(e,n){let t=vD(e);n.validator!==null?e.setValidators(nD(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let r=_D(e);n.asyncValidator!==null?e.setAsyncValidators(nD(r,n.asyncValidator)):typeof r=="function"&&e.setAsyncValidators([r]);let i=()=>e.updateValueAndValidity();yd(n._rawValidators,i),yd(n._rawAsyncValidators,i)}function vd(e,n){let t=!1;if(e!==null){if(n.validator!==null){let i=vD(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.validator);o.length!==i.length&&(t=!0,e.setValidators(o))}}if(n.asyncValidator!==null){let i=_D(e);if(Array.isArray(i)&&i.length>0){let o=i.filter(a=>a!==n.asyncValidator);o.length!==i.length&&(t=!0,e.setAsyncValidators(o))}}}let r=()=>{};return yd(n._rawValidators,r),yd(n._rawAsyncValidators,r),t}function TA(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&ED(e,n)})}function AA(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&ED(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function ED(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function RA(e,n){let t=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function SD(e,n){e==null,eh(e,n)}function kA(e,n){return vd(e,n)}function OA(e,n){if(!Object.hasOwn(e,"model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function FA(e){return Object.getPrototypeOf(e.constructor)===sA}function ID(e,n){e._syncPendingControls(),n.forEach(t=>{let r=t.control;r.updateOn==="submit"&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function PA(e,n){if(!n)return null;Array.isArray(n);let t,r,i;return n.forEach(o=>{o.constructor===Cd?t=o:FA(o)?r=o:i=o}),i||r||t||null}function LA(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}var VA={provide:SA,useFactory:()=>{let e=u(Er,{self:!0});return{setParseErrors:n=>{e.setParseErrorSource(n)},set onReset(n){e.onReset=n}}}},Er=class extends hd{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof yi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=PA(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,t,r){super(),this.injector=n,this.renderer=t,this.rawValueAccessors=r,this.injector?.get(We)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(dt);if(!this.control||!n)return;let t=n.markForCheck.bind(n);this.subscription=new te,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(r=>{r instanceof yi&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(i=>{this.control?.markAsDirty(),this.control?.setValue(i,{emitModelToViewChange:!1}),this.viewToModelUpdate(i)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=DA(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(i=>i instanceof wD))}ngControlUpdate(n,t){if(!this.isCustomControlBased)return;let r=this.control,i=this.customControlBindings;Object.is(i.value,r.value)||(i.value=r.value,n.setCustomControlModelInput(r.value)),this.bindControlProperty(n,i,"touched",r.touched),this.bindControlProperty(n,i,"dirty",r.dirty),this.bindControlProperty(n,i,"valid",r.valid),this.bindControlProperty(n,i,"invalid",r.invalid),this.bindControlProperty(n,i,"pending",r.pending),this.bindControlProperty(n,i,"disabled",r.disabled),this.shouldBindRequired&&this.bindControlProperty(n,i,"required",this.isRequired);let o=r.errors;if(i.errors!==o){i.errors=o;let a=this._convertErrors(o);n.setInputOnDirectives("errors",a)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,t,r,i){if(t[r]===i)return;t[r]=i;let o=n.setInputOnDirectives(r,i);this.isNativeFormElement&&!o&&(r==="disabled"||r==="required")&&this.renderer&&xA(this.renderer,n.nativeElement,r,i)}_convertErrors(n){if(n===null)return[];let t=this.control;return Object.entries(n).map(([r,i])=>new zp({context:i,kind:r,control:t}))}setParseErrorSource(n){if(n===void 0)return;let t=null,r=Te(()=>{let i=n();return i.length===0?null:i.reduce((o,a)=>(o[a.kind]=a,o),{})});this.parseErrorsValidator=(()=>t).bind(this),Mt(()=>{t=r(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},_d=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var MD=(()=>{class e extends _d{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(se(Er,2))};static \u0275dir=T({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){r&2&&J("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[he]})}return e})(),ND=(()=>{class e extends _d{constructor(t){super(t)}static \u0275fac=function(r){return new(r||e)(se(xr,10))};static \u0275dir=T({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){r&2&&J("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[he]})}return e})(),wo=class extends xo{constructor(n,t,r){super(Zp(t),Kp(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){let r=this._find(n);return r||(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,r={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,r={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,t={}){oe(()=>{DD(this,!0,n),Object.keys(n).forEach(r=>{CD(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(r=>{let i=this._find(r);i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((r,i)=>{r.reset(n?n[i]:null,W(C({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new yi(this))}getRawValue(){return this._reduceChildren({},(n,t,r)=>(n[r]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,r)=>r._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let r=this.controls[t];r&&n(r,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,r]of Object.entries(this.controls))if(this.contains(t)&&n(r))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,r,i)=>((r.enabled||this.disabled)&&(t[i]=r.value),t))}_reduceChildren(n,t){let r=n;return this._forEachChild((i,o)=>{r=t(r,i,o)}),r}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return xD(this.controls,n)?this.controls[n]:null}};var Up=class extends wo{};var jA={provide:xr,useExisting:Vt(()=>th)},es=Promise.resolve(),th=(()=>{class e extends xr{callSetDisabledState;get submitted(){return oe(this.submittedReactive)}_submitted=Te(()=>this.submittedReactive());submittedReactive=re(!1);_directives=new Set;form;ngSubmit=new ae;options;constructor(t,r,i){super(),this.callSetDisabledState=i,this.form=new wo({},Yp(t),Xp(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){es.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){es.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){es.then(()=>{let r=this._findContainer(t.path),i=new wo({});SD(i,t),r.registerControl(t.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){es.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){es.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),ID(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new bd(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(r){return new(r||e)(se(Dd,10),se(qp,10),se(Qp,8))};static \u0275dir=T({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,i){r&1&&Re("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ct([jA]),he]})}return e})();function aD(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function sD(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var fd=class extends xo{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,r){super(Zp(t),Kp(r,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),xd(t)&&(t.nonNullable||t.initialValueIsDefault)&&(sD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){oe(()=>{this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(r=>r(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new yi(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){aD(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){aD(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){sD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var BA=e=>e instanceof fd;var HA=(()=>{class e extends xr{callSetDisabledState;get submitted(){return oe(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=Te(()=>this._submittedReactive());_submittedReactive=re(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,r,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),Object.hasOwn(t,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(vd(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let r=this.form.get(t.path);return t._setupWithForm(r,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){oD(t.control||null,t,!1),LA(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,r){this.form.get(t.path).setValue(r)}onReset(){this.resetForm()}resetForm(t=void 0,r={}){this.form.reset(t,r),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,ID(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new bd(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,i=this.form.get(t.path);r!==i&&(oD(r||null,t),BA(i)&&t._setupWithForm(i,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);SD(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let r=this.form?.get(t.path);r&&kA(r,t)&&r.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){eh(this.form,this),this._oldForm&&vd(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(r){return new(r||e)(se(Dd,10),se(qp,10),se(Qp,8))};static \u0275dir=T({type:e,features:[he,bt]})}return e})(),zA={provide:xr,useExisting:Vt(()=>is)},is=(()=>{class e extends HA{form=null;ngSubmit=new ae;get control(){return this.form}static \u0275fac=(()=>{let t;return function(i){return(t||(t=Tt(e)))(i||e)}})();static \u0275dir=T({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,i){r&1&&Re("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ct([zA]),he]})}return e})();var TD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var $p=class extends xo{constructor(n,t,r){super(Zp(t),Kp(r,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){Array.isArray(n)?n.forEach(r=>{this.controls.push(r),this._registerControl(r)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,r={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,t={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,r={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){oe(()=>{DD(this,!1,n),n.forEach((r,i)=>{CD(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(n,t={}){n!=null&&(n.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((r,i)=>{r.reset(n[i],W(C({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new yi(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,r)=>r._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,r)=>{n(t,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var AD=new g("");var UA={provide:Er,useExisting:Vt(()=>nh)},nh=(()=>{class e extends Er{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new ae;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,r,i,o,a,s,l){super(l,s,o),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(r),this._setAsyncValidators(i)}_setupWithForm(t,r){this.control=t,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,MA(t,this,r))}ngOnChanges(t){this._added||this._setUpControl(),OA(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return IA(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}\u0275ngControlCreate(t){super.ngControlCreate(t)}\u0275ngControlUpdate(t){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(t,!0))}static \u0275fac=function(r){return new(r||e)(se(xr,13),se(Dd,10),se(qp,10),se(dD,10),se(AD,8),se(ve,8),se(O,8))};static \u0275dir=T({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ct([UA,VA]),he,bt,Dm(null)]})}return e})();var $A=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();function lD(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var RD=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let i=this._reduceControls(t),o={};return lD(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new wo(i,o)}record(t,r=null){let i=this._reduceControls(t);return new Up(i,r)}control(t,r,i){let o={};return this.useNonNullable?(lD(r)?o=r:(o.validators=r,o.asyncValidators=i),new fd(t,W(C({},o),{nonNullable:!0}))):new fd(t,r,i)}array(t,r,i){let o=t.map(a=>this._createControl(a));return new $p(o,r,i)}_reduceControls(t){let r={};return Object.keys(t).forEach(i=>{r[i]=this._createControl(t[i])}),r}_createControl(t){if(t instanceof fd)return t;if(t instanceof xo)return t;if(Array.isArray(t)){let r=t[0],i=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,i,o)}else return this.control(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var kD=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:AD,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Qp,useValue:t.callSetDisabledState??Jp}]}}static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[$A]})}return e})();var WA=new g("MAT_CARD_CONFIG"),OD=(()=>{class e{appearance;constructor(){let t=u(WA,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){return Z({type:e,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,o){i&2&&J("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:["*"],decls:1,vars:0,template:function(i,o){i&1&&(Ge(),Q(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2})})()}return e})(),FD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return e})();var PD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return e})();var LD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"];return Z({type:e,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(o,a){o&1&&(Ge(t),Q(0),Pe(1,"div",0),Q(2,1),$e(),Q(3,2))},encapsulation:2})})()}return e})();var VD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Ee]})}return e})();var BD=Symbol("FIELD_TREE");var HD=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),jD=class{reducer;create;brand;[HD];constructor(n,t){this.reducer=n,this.create=t}};function os(e){return typeof e=="function"&&e[BD]===!0}var zD=new g("");var rh=class{_box;_destroyed=new x;_resizeSubject=new x;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new U(t=>{let r=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),r.unsubscribe(),this._elementObservables.delete(n)}}).pipe(Ne(t=>t.some(r=>r.target===n)),Us({bufferSize:1,refCount:!0}),Lt(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},UD=(()=>{class e{_cleanupErrorListener;_observers=new Map;_ngZone=u(I);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,r){let i=r?.box||"content-box";return this._observers.has(i)||this._observers.set(i,new rh(i)),this._observers.get(i).observe(t)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var as=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["mat-label"]]})}return e})(),YA=new g("MatError");var ih=(()=>{class e{align="start";id=u(Je).getId("mat-mdc-hint-");static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(r,i){r&2&&(an("id",i.id),_e("align",null),J("mat-mdc-form-field-hint-end",i.align==="end"))},inputs:{align:"align",id:"id"}})}return e})(),XA=new g("MatPrefix");var ZA=new g("MatSuffix");var ZD=new g("FloatingLabelParent"),$D=(()=>{class e{_elementRef=u(F);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(UD);_ngZone=u(I);_parent=u(ZD);_resizeSubscription=new te;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return KA(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(r,i){r&2&&J("mdc-floating-label--float-above",i.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return e})();function KA(e){let n=e;if(n.offsetParent!==null)return n.scrollWidth;let t=n.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);let r=t.scrollWidth;return t.remove(),r}var GD="mdc-line-ripple--active",wd="mdc-line-ripple--deactivating",WD=(()=>{class e{_elementRef=u(F);_cleanupTransitionEnd;constructor(){let t=u(I),r=u(ve);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=r.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(wd),t.add(GD)}deactivate(){this._elementRef.nativeElement.classList.add(wd)}_handleTransitionEnd=t=>{let r=this._elementRef.nativeElement.classList,i=r.contains(wd);t.propertyName==="opacity"&&i&&r.remove(GD,wd)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return e})(),qD=(()=>{class e{_elementRef=u(F);_ngZone=u(I);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,r=t.querySelector(".mdc-floating-label");r?(t.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(r.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>r.style.transitionDuration="")}))):t.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(t){let r=this._notch.nativeElement;!this.open||!t?r.style.width="":r.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${t}px)`)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["notch"];return Z({type:e,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(o,a){if(o&1&&xn(t,5),o&2){let s;Ce(s=De())&&(a._notch=s.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(o,a){o&2&&J("mdc-notched-outline--notched",a.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(o,a){o&1&&(Ge(),Qe(0,"div",1),Pe(1,"div",2,0),Q(3),$e(),Qe(4,"div",3))},encapsulation:2})})()}return e})(),oh=(()=>{class e{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e})}return e})();var ah=new g("MatFormField"),QA=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),YD="fill",JA="auto",XD="fixed",eR="translateY(-50%)",Ed=(()=>{class e{_elementRef=u(F);_changeDetectorRef=u(dt);_platform=u(de);_idGenerator=u(Je);_ngZone=u(I);_defaults=u(QA,{optional:!0});_currentDirection;_unwrapMaybeSignal(t){return gt(t)?t():t}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=wa("iconPrefixContainer");_textPrefixContainerSignal=wa("textPrefixContainer");_iconSuffixContainerSignal=wa("iconSuffixContainer");_textSuffixContainerSignal=wa("textSuffixContainer");_prefixSuffixContainers=Te(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Bv(as);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=co(t)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||JA}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let r=t||this._defaults?.appearance||YD;this._appearanceSignal.set(r)}_appearanceSignal=re(YD);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||XD}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||XD}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new x;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=xt();constructor(){let t=this._defaults,r=u(Xt);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),Mt(()=>this._currentDirection=r.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=os(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!os(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Te(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(t){let r=this._control,i="mat-mdc-form-field-type-";t&&this._elementRef.nativeElement.classList.remove(i+t.controlType),r.controlType&&this._elementRef.nativeElement.classList.add(i+r.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=r.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=r.stateChanges?.pipe(pt([void 0,void 0]),pe(()=>[this._unwrapMaybeSignal(r.errorState),r.userAriaDescribedBy]),zs(),Ne(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),r.ngControl&&r.ngControl.valueChanges&&!os(r.ngField)&&(this._valueChanges=r.ngControl.valueChanges.pipe(Lt(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Mn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._unwrapMaybeSignal(this._control.focused);t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",t),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",t)}_syncOutlineLabelOffset(){Bm({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Te(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(t){let r=this._control?.ngField||this._control?.ngControl;if(!r)return!1;if(os(r)){let i=r();return t==="valid"?i.valid():t==="dirty"?i.dirty():t==="touched"?i.touched():t==="pending"?i.pending():t==="untouched"?!i.touched():t==="pristine"?!i.dirty():t==="invalid"?!i.valid():!1}else{let i=r;return t==="valid"?i.valid:t==="dirty"?i.dirty:t==="touched"?i.touched:t==="pending"?i.pending:t==="untouched"?i.untouched:t==="pristine"?i.pristine:t==="invalid"?i.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&t.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),a&&t.push(a.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let r=this._control.describedByIds,i;if(r){let o=this._describedByIds||t;i=t.concat(r.filter(a=>a&&!o.includes(a)))}else i=t;this._control.setDescribedByIds(i),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,r=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=t?.getBoundingClientRect().width??0,s=r?.getBoundingClientRect().width??0,l=i?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",f=`${a+s}px`,m=`calc(${d} * (${f} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,h=`var(--mat-mdc-form-field-label-transform, ${eR} translateX(${m}))`,y=a+s+l+c;return[h,y]}_writeOutlinedLabelStyles(t){if(t!==null){let[r,i]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=r),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let r=t.getRootNode();return r&&r!==t}return document.documentElement.contains(t)}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){let t=["iconPrefixContainer"],r=["textPrefixContainer"],i=["iconSuffixContainer"],o=["textSuffixContainer"],a=["textField"],s=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],l=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function c(w,Y){w&1&&Ue(0,"span",21)}function d(w,Y){if(w&1&&(N(0,"label",20),Q(1,1),ge(2,c,1,0,"span",21),k()),w&2){let b=Ve(2);vt("floating",b._shouldLabelFloat())("monitorResize",b._hasOutline())("id",b._labelId),_e("for",b._control.disableAutomaticLabeling?null:b._control.id),j(2),be(!b.hideRequiredMarker&&b._unwrapMaybeSignal(b._control.required)?2:-1)}}function f(w,Y){if(w&1&&ge(0,d,3,5,"label",20),w&2){let b=Ve();be(b._hasFloatingLabel()?0:-1)}}function p(w,Y){w&1&&Ue(0,"div",7)}function m(w,Y){}function h(w,Y){if(w&1&&$t(0,m,0,0,"ng-template",13),w&2){Ve(2);let b=mr(1);vt("ngTemplateOutlet",b)}}function y(w,Y){if(w&1&&(N(0,"div",9),ge(1,h,1,1,null,13),k()),w&2){let b=Ve();vt("matFormFieldNotchedOutlineOpen",b._shouldLabelFloat()),j(),be(b._forceDisplayInfixLabel()?-1:1)}}function v(w,Y){w&1&&(N(0,"div",10,2),Q(2,2),k())}function D(w,Y){w&1&&(N(0,"div",11,3),Q(2,3),k())}function P(w,Y){}function it(w,Y){if(w&1&&$t(0,P,0,0,"ng-template",13),w&2){Ve();let b=mr(1);vt("ngTemplateOutlet",b)}}function wt(w,Y){w&1&&(N(0,"div",14,4),Q(2,4),k())}function ut(w,Y){w&1&&(N(0,"div",15,5),Q(2,5),k())}function Be(w,Y){w&1&&Ue(0,"div",16)}function Ot(w,Y){w&1&&(N(0,"div",18),Q(1,6),k())}function Et(w,Y){if(w&1&&(N(0,"mat-hint",22),le(1),k()),w&2){let b=Ve(2);vt("id",b._hintLabelId),j(),Ji(b.hintLabel)}}function ft(w,Y){if(w&1&&(N(0,"div",19),ge(1,Et,2,2,"mat-hint",22),Q(2,7),Ue(3,"div",23),Q(4,8),k()),w&2){let b=Ve();j(),be(b.hintLabel?1:-1)}}return Z({type:e,selectors:[["mat-form-field"]],contentQueries:function(Y,b,X){if(Y&1&&(ic(X,b._labelChild,as,5),fr(X,oh,5)(X,XA,5)(X,ZA,5)(X,YA,5)(X,ih,5)),Y&2){ac();let He;Ce(He=De())&&(b._formFieldControl=He.first),Ce(He=De())&&(b._prefixChildren=He),Ce(He=De())&&(b._suffixChildren=He),Ce(He=De())&&(b._errorChildren=He),Ce(He=De())&&(b._hintChildren=He)}},viewQuery:function(Y,b){if(Y&1&&(oc(b._iconPrefixContainerSignal,t,5)(b._textPrefixContainerSignal,r,5)(b._iconSuffixContainerSignal,i,5)(b._textSuffixContainerSignal,o,5),xn(a,5)(t,5)(r,5)(i,5)(o,5)($D,5)(qD,5)(WD,5)),Y&2){ac(4);let X;Ce(X=De())&&(b._textField=X.first),Ce(X=De())&&(b._iconPrefixContainer=X.first),Ce(X=De())&&(b._textPrefixContainer=X.first),Ce(X=De())&&(b._iconSuffixContainer=X.first),Ce(X=De())&&(b._textSuffixContainer=X.first),Ce(X=De())&&(b._floatingLabel=X.first),Ce(X=De())&&(b._notchedOutline=X.first),Ce(X=De())&&(b._lineRipple=X.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(Y,b){Y&2&&J("mat-mdc-form-field-label-always-float",b._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",b._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",b._hasIconSuffix)("mat-form-field-invalid",b._unwrapMaybeSignal(b._control.errorState))("mat-form-field-disabled",b._unwrapMaybeSignal(b._control.disabled))("mat-form-field-autofilled",b._unwrapMaybeSignal(b._control.autofilled))("mat-form-field-appearance-fill",b.appearance=="fill")("mat-form-field-appearance-outline",b.appearance=="outline")("mat-form-field-hide-placeholder",b._hasFloatingLabel()&&!b._shouldLabelFloat())("mat-primary",b.color!=="accent"&&b.color!=="warn")("mat-accent",b.color==="accent")("mat-warn",b.color==="warn")("ng-untouched",b._shouldForward("untouched"))("ng-touched",b._shouldForward("touched"))("ng-pristine",b._shouldForward("pristine"))("ng-dirty",b._shouldForward("dirty"))("ng-valid",b._shouldForward("valid"))("ng-invalid",b._shouldForward("invalid"))("ng-pending",b._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ct([{provide:ah,useExisting:e},{provide:ZD,useExisting:e}])],ngContentSelectors:l,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(Y,b){if(Y&1&&(Ge(s),$t(0,f,1,1,"ng-template",null,0,va),N(2,"div",6,1),Re("click",function(He){return b._control.onContainerClick(He)}),ge(4,p,1,0,"div",7),N(5,"div",8),ge(6,y,2,2,"div",9),ge(7,v,3,0,"div",10),ge(8,D,3,0,"div",11),N(9,"div",12),ge(10,it,1,1,null,13),Q(11),k(),ge(12,wt,3,0,"div",14),ge(13,ut,3,0,"div",15),k(),ge(14,Be,1,0,"div",16),k(),N(15,"div",17),ge(16,Ot,2,0,"div",18)(17,ft,5,1,"div",19),k()),Y&2){let X,He=b._unwrapMaybeSignal(b._control.disabled);j(2),J("mdc-text-field--filled",!b._hasOutline())("mdc-text-field--outlined",b._hasOutline())("mdc-text-field--no-label",!b._hasFloatingLabel())("mdc-text-field--disabled",He)("mdc-text-field--invalid",b._unwrapMaybeSignal(b._control.errorState)),j(2),be(!b._hasOutline()&&!He?4:-1),j(2),be(b._hasOutline()?6:-1),j(),be(b._hasIconPrefix?7:-1),j(),be(b._hasTextPrefix?8:-1),j(2),be(!b._hasOutline()||b._forceDisplayInfixLabel()?10:-1),j(2),be(b._hasTextSuffix?12:-1),j(),be(b._hasIconSuffix?13:-1),j(),be(b._hasOutline()?-1:14),j(),J("mat-mdc-form-field-subscript-dynamic-size",b.subscriptSizing==="dynamic");let Td=b._getSubscriptMessageType();j(),be((X=Td)==="error"?16:X==="hint"?17:-1)}},dependencies:[$D,qD,Gm,WD,ih],styles:[`.mdc-text-field {
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
`],encapsulation:2})})()}return e})();var ss=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[jc,Ed,Ee]})}return e})();var nR=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275cmp=Z({type:e,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(r,i){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return e})(),rR={passive:!0},KD=(()=>{class e{_platform=u(de);_ngZone=u(I);_renderer=u(Fe).createRenderer(null,null);_styleLoader=u(Dt);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return kr;this._styleLoader.load(nR);let r=kt(t),i=this._monitoredElements.get(r);if(i)return i.subject;let o=new x,a="cdk-text-field-autofilled",s=c=>{c.animationName==="cdk-text-field-autofill-start"&&!r.classList.contains(a)?(r.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&r.classList.contains(a)&&(r.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(r.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(r,"animationstart",s,rR)));return this._monitoredElements.set(r,{subject:o,unlisten:l}),o}stopMonitoring(t){let r=kt(t),i=this._monitoredElements.get(r);i&&(i.unlisten(),i.subject.complete(),r.classList.remove("cdk-text-field-autofill-monitored"),r.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(r))}ngOnDestroy(){this._monitoredElements.forEach((t,r)=>this.stopMonitoring(r))}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var QD=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({})}return e})();var JD=new g("MAT_INPUT_VALUE_ACCESSOR");var ex=(()=>{class e{isErrorState(t,r){return!!(t&&t.invalid&&(t.touched||r&&r.submitted))}isSignalErrorState(t){if(!t)return!1;let r=t().invalid(),i=t().touched();return r&&i}static \u0275fac=function(r){return new(r||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var Sd=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,t,r,i,o){this._defaultMatcher=n,this._parentFormGroup=r,this._parentForm=i,this._stateChanges=o,t?gt(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==n&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,r=this.ngControl?this.ngControl.control:null;return n?.isErrorState(r,t)??!1}};var iR=["button","checkbox","file","hidden","image","radio","range","reset","submit"],oR=new g("MAT_INPUT_CONFIG"),tx=(()=>{class e{_elementRef=u(F);_platform=u(de);ngControl=u(Er,{optional:!0,self:!0});_autofillMonitor=u(KD);_ngZone=u(I);_formField=u(ah,{optional:!0});_renderer=u(ve);_uid=u(Je).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(oR,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new x;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=co(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(rs.required)??!1}set required(t){this._required=co(t)}_required;get type(){return this._type}set type(t){this._type=t||"text",this._validateType(),!this._isTextarea&&_p().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=co(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(t=>_p().has(t));constructor(){let t=u(th,{optional:!0}),r=u(is,{optional:!0}),i=u(ex),o=u(JD,{optional:!0,self:!0}),a=u(zD,{optional:!0,self:!0}),s=this._elementRef.nativeElement,l=s.nodeName.toLowerCase();o?gt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Sd(i,a||this.ngControl,r,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Mt(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let r=this._elementRef.nativeElement;r.type==="number"?(r.type="text",r.setSelectionRange(0,0),r.type="number"):r.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let r=this._elementRef.nativeElement;this._previousPlaceholder=t,t?r.setAttribute("placeholder",t):r.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){iR.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,r=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&r&&r.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let r=this._elementRef.nativeElement;t.length?r.setAttribute("aria-describedby",t.join(" ")):r.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let r=t.target;!r.value&&r.selectionStart===0&&r.selectionEnd===0&&(r.setSelectionRange(1,1),r.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(r){return new(r||e)};static \u0275dir=T({type:e,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(r,i){r&1&&Re("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),r&2&&(an("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),_e("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),J("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",Ie]},exportAs:["matInput"],features:[ct([{provide:oh,useExisting:e}]),bt]})}return e})(),nx=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[ss,ss,QD,Ee]})}return e})();var sR=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var ix=(()=>{class e{_elementRef=u(F);_ngZone=u(I);_changeDetectorRef=u(dt);_renderer=u(ve);_cleanupTransitionEnd;constructor(){let t=Cp(),r=u(sR,{optional:!0});this._isNoopAnimation=t==="di-disabled",t==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";get value(){return this._value}set value(t){this._value=rx(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=rx(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new ae;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(r){return new(r||e)};static \u0275cmp=(function(){function t(r,i){r&1&&Qe(0,"div",2)}return Z({type:e,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,o){i&2&&(_e("aria-valuenow",o._isIndeterminate()?null:o.value)("mode",o.mode),sn("mat-"+o.color),J("_mat-animation-noopable",o._isNoopAnimation)("mdc-linear-progress--animation-ready",!o._isNoopAnimation)("mdc-linear-progress--indeterminate",o._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ea],bufferValue:[2,"bufferValue","bufferValue",Ea],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,o){i&1&&(Pe(0,"div",0),Qe(1,"div",1),ge(2,t,1,0,"div",2),$e(),Pe(3,"div",3),Qe(4,"span",4),$e(),Pe(5,"div",5),Qe(6,"span",4),$e()),i&2&&(j(),pr("flex-basis",o._getBufferBarFlexBasis()),j(),be(o.mode==="buffer"?2:-1),j(),pr("transform",o._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2})})()}return e})();function rx(e,n=0,t=100){return Math.max(n,Math.min(t,e))}var ox=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=H({type:e});static \u0275inj=B({imports:[Ee]})}return e})();var Id=class e{#e=re("");#t=O_(()=>{if(this.#e())return`https://api.mcsrvstat.us/2/${this.#e()}`});setAddress(n){this.#e.set(n)}getStatus(){return this.#t.value}isLoading(){return this.#t.isLoading}reloadResource(){this.#t.reload()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=S({token:e,factory:e.\u0275fac})};function cR(e,n){if(e&1&&(N(0,"p"),le(1),Ue(2,"mat-progress-bar",8),k()),e&2){let t=Ve(2);j(),ya(" Checking Server: ",t.form.value.serverIp,":",t.form.value.serverPort," ")}}function dR(e,n){if(e&1&&(le(0),Im(1,"date")),e&2){Ve(3);let t=lc(18);wn(" at ",Mm(1,1,t.debug.cachetime*1e3,"yyyy/MM/dd HH:mm:ss")," ")}}function uR(e,n){if(e&1&&(Ue(0,"div",9),N(1,"p"),le(2," Data will be refreshed every 5 seconds. "),k(),N(3,"p"),le(4),N(5,"strong"),le(6),k(),ge(7,dR,2,4),k(),N(8,"p"),le(9),k(),N(10,"p"),le(11),Ue(12,"br"),le(13),k()),e&2){let t=Ve(2),r=lc(18);pr("background-image",t.headerImage()),j(4),wn(" Status: ",r.ip," is "),j(2),Ji(r.online?"online":"offline"),j(),be(r.debug.cachetime>0?7:-1),j(2),wn(" Description: ",r.motd.html[0]," "),j(2),wn(" Version: ",r.version," "),j(2),ya(" Players: ",r.players.online,"/",r.players.max," ")}}function fR(e,n){if(e&1&&(N(0,"mat-card",0)(1,"mat-card-content"),ge(2,cR,3,2,"p")(3,uR,14,9),k()()),e&2){let t=Ve();j(2),be(t.isLoading()&&t.isFirstRun?2:3)}}var Md=class e{#e=u(RD);#t=u(La);#n=u(Id);mcStatus=this.#n.getStatus();isLoading=this.#n.isLoading();isFirstRun=!0;interval=0;form;ngOnInit(){this.form=this.#e.group({serverIp:[_o.serverIp],serverPort:[_o.serverPort]})}onSubmit(){this.isFirstRun?(this.isFirstRun=!1,this.loadStatus(),this.startInterval()):(clearInterval(this.interval),this.loadStatus(),this.reloadStatus(),this.startInterval())}loadStatus(){this.#n.setAddress(this.form.value.serverIp+":"+this.form.value.serverPort)}reloadStatus(){this.#n.reloadResource()}startInterval(){this.interval=setInterval(()=>{this.reloadStatus()},5e3)}headerImage(){return this.mcStatus()?this.#t.bypassSecurityTrustStyle(`url('${this.mcStatus()?.icon}')`):""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=Z({type:e,selectors:[["app-dashboard"]],decls:20,vars:3,consts:[[1,"w-10/12","md:w-7/12","mx-auto"],["novalidate","",3,"ngSubmit","formGroup"],[1,"flex-col","md:flex-row","flex","gap-5"],[1,"flex-1"],["type","text","matInput","","formControlName","serverIp"],["type","text","matInput","","formControlName","serverPort"],[1,"flex"],["mat-raised-button","",1,"flex-1"],["mode","indeterminate","value","50"],[1,"h-[64px]","w-[64px]"]],template:function(t,r){if(t&1&&(N(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),le(3,"Options and run"),k()(),N(4,"mat-card-content")(5,"form",1),Re("ngSubmit",function(){return r.onSubmit()}),N(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),le(9,"Server IP"),k(),N(10,"input",4),Ql(),k()(),N(11,"mat-form-field",3)(12,"mat-label"),le(13,"Server Port"),k(),N(14,"input",5),Ql(),k()()(),N(15,"div",6)(16,"button",7),le(17,"RUN/UPDATE"),k()()()()(),sc(18),ge(19,fR,4,1,"mat-card",0)),t&2){j(5),vt("formGroup",r.form),j(5),Jl(),j(4),Jl(),j(4);let i=Sm(r.mcStatus());j(),be(i?19:-1)}},dependencies:[Yc,qc,VD,OD,PD,LD,FD,ld,ss,Ed,as,nx,tx,ox,ix,kD,TD,Cd,MD,ND,is,nh,Wm],encapsulation:2})};function mR(e,n){e&1&&(N(0,"h2",11),le(1,"Overview"),k(),N(2,"mat-dialog-content")(3,"p"),le(4," Shows the status of a minecraft server. "),Ue(5,"br"),le(6," For demonstration I use as default my own minecraft server. "),k(),N(7,"p"),le(8,"The data is loaded by "),N(9,"a",12),le(10,"https://api.mcsrvstat.us/"),k(),le(11,"."),k()(),N(12,"mat-dialog-actions",13)(13,"button",14),le(14,"Close"),k()())}var Nd=class e{#e=u(Za);#t=u(F_);#n=u(E);appname;constructor(){this.appname=_o.appname,this.#t.setTitle(this.appname),this.#n.body.classList.add(`${_o.theme}-theme`)}openDialog(n){this.#e.open(n,{maxWidth:"800px"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=Z({type:e,selectors:[["app-root"]],decls:27,vars:2,consts:[["menu","matMenu"],["dialog",""],[1,"justify-between"],[1,"hidden","md:block"],["mat-button","",3,"click"],["mat-button","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["alt","GitHub Repository","src","github-mark.svg",1,"github-link"],[1,"block","md:hidden"],["mat-icon-button","",3,"matMenuTriggerFor"],["mat-menu-item","",3,"click"],["mat-menu-item","","href","https://github.com/inpercima/mc-status","aria-label","GitHub Repository","title","Go to project on Github","target","_blank"],["mat-dialog-title",""],["href","https://api.mcsrvstat.us/","target","_blank"],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(t,r){if(t&1){let i=ga();N(0,"mat-toolbar",2),le(1),N(2,"div",3)(3,"button",4),Re("click",function(){bn(i);let a=mr(25);return yn(r.openDialog(a))}),le(4,"Info"),k(),le(5," | "),N(6,"a",5)(7,"span"),Ue(8,"img",6),k(),le(9," GitHub "),k()(),N(10,"div",7)(11,"button",8)(12,"mat-icon"),le(13,"more_vert"),k()(),N(14,"mat-menu",null,0)(16,"button",9),Re("click",function(){bn(i);let a=mr(25);return yn(r.openDialog(a))}),N(17,"span"),le(18,"Info"),k()(),N(19,"a",10)(20,"span"),Ue(21,"img",6),k(),N(22,"span"),le(23,"GitHub"),k()()()()(),$t(24,mR,15,0,"ng-template",null,1,va),Ue(26,"app-dashboard")}if(t&2){let i=mr(15);j(),wn(" ",r.appname," "),j(10),vt("matMenuTriggerFor",i)}},dependencies:[Md,Yc,qc,Mp,ld,VC,BC,zC,HC,KC,ZC,JC,vo,Ka,QC,tD,eD],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0;overflow-y:scroll}mat-card[_ngcontent-%COMP%], mat-progress-bar[_ngcontent-%COMP%]{margin-top:20px}.github-link[_ngcontent-%COMP%]{height:20px;top:4px;padding-right:5px;position:relative}"]})};var ax={providers:[Yu(),sp()]};tp(Nd,ax).catch(e=>console.error(e));
