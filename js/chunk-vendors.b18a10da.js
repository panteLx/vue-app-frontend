(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),o=n("59ed"),i=n("40d5"),s=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?s(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),o=n("c65b"),i=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=c(t),l)try{return f(e,t)}catch(n){}if(u(e,t))return s(!o(i.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0cfb":function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("cc12");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),o=r.String;e.exports=function(e){try{return o(e)}catch(t){return"Object"}}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,n){var r=n("da84"),o=n("3a9b"),i=r.TypeError;e.exports=function(e,t){if(o(t,e))return e;throw i("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),o=n("7b0b"),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),o=r("iterator"),i=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){i=!0}};a[o]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),o=r.TypeError;e.exports=function(e){if(void 0==e)throw o("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d3b7");function r(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var s=e.apply(t,n);function a(e){r(s,o,i,a,c,"next",e)}function c(e){r(s,o,i,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return d})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return f})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return O}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],s=e[n++],a=e[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,s=i?e[o+1]:0,a=o+2<e.length,c=a?e[o+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let f=(15&s)<<2|c>>6,d=63&c;a||(d=64,i||(f=64)),r.push(n[u],n[l],n[f],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,s=i?n[e.charAt(o)]:0;++o;const a=o<e.length,c=a?n[e.charAt(o)]:64;++o;const u=o<e.length,l=u?n[e.charAt(o)]:64;if(++o,null==t||null==s||null==c||null==l)throw Error();const f=t<<2|s>>4;if(r.push(f),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function l(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="FirebaseError";class p extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=h,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,v.prototype.create)}}class v{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?m(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new p(r,s,n);return a}}function m(e,t){return e.replace(g,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const g=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function y(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(_(n)&&_(i)){if(!y(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function _(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function O(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function I(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=k(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=S),void 0===r.error&&(r.error=S),void 0===r.complete&&(r.complete=S);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function S(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),o=n("0366"),i=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),f=n("9a1f"),d=n("35a1"),h=n("2a62"),p=r.TypeError,v=function(e,t){this.stopped=e,this.result=t},m=v.prototype;e.exports=function(e,t,n){var r,g,b,y,_,w,O,I=n&&n.that,E=!(!n||!n.AS_ENTRIES),j=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),S=o(t,I),T=function(e){return r&&h(r,"normal",e),new v(!0,e)},x=function(e){return E?(s(e),k?S(e[0],e[1],T):S(e[0],e[1])):k?S(e,T):S(e)};if(j)r=e;else{if(g=d(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(b=0,y=u(e);y>b;b++)if(_=x(e[b]),_&&l(m,_))return _;return new v(!1)}r=f(e,g)}w=r.next;while(!(O=i(w,r)).done){try{_=x(O.value)}catch(C){h(r,"throw",C)}if("object"==typeof _&&_&&l(m,_))return _}return new v(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},"23e7":function(e,t,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,f,d,h,p,v=e.target,m=e.global,g=e.stat;if(l=m?r:g?r[v]||a(v,{}):(r[v]||{}).prototype,l)for(f in t){if(h=t[f],e.noTargetGet?(p=o(l,f),d=p&&p.value):d=l[f],n=u(m?f:v+(g?".":"#")+f,e.forced),!n&&void 0!==d){if(typeof h==typeof d)continue;c(h,d)}(e.sham||d&&d.sham)&&i(h,"sham",!0),s(l,f,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var o="firebase",i="9.6.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(o,i,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),o=n("9bf2"),i=n("b622"),s=n("83ab"),a=i("species");e.exports=function(e){var t=r(e),n=o.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),o=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var s,a;o(e);try{if(s=i(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return o(s),n}},"2ba4":function(e,t,n){var r=n("40d5"),o=Function.prototype,i=o.apply,s=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(i):function(){return s.apply(i,arguments)})},"2cf4":function(e,t,n){var r,o,i,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),f=n("1a2d"),d=n("d039"),h=n("1be4"),p=n("f36a"),v=n("cc12"),m=n("d6d6"),g=n("1cdc"),b=n("605d"),y=a.setImmediate,_=a.clearImmediate,w=a.process,O=a.Dispatch,I=a.Function,E=a.MessageChannel,j=a.String,k=0,S={},T="onreadystatechange";try{r=a.location}catch(P){}var x=function(e){if(f(S,e)){var t=S[e];delete S[e],t()}},C=function(e){return function(){x(e)}},R=function(e){x(e.data)},A=function(e){a.postMessage(j(e),r.protocol+"//"+r.host)};y&&_||(y=function(e){m(arguments.length,1);var t=l(e)?e:I(e),n=p(arguments,1);return S[++k]=function(){c(t,void 0,n)},o(k),k},_=function(e){delete S[e]},b?o=function(e){w.nextTick(C(e))}:O&&O.now?o=function(e){O.now(C(e))}:E&&!g?(i=new E,s=i.port2,i.port1.onmessage=R,o=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(A)?(o=A,a.addEventListener("message",R,!1)):o=T in v("script")?function(e){h.appendChild(v("script"))[T]=function(){h.removeChild(this),x(e)}}:function(e){setTimeout(C(e),0)}),e.exports={set:y,clear:_}},"2d00":function(e,t,n){var r,o,i=n("da84"),s=n("342f"),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),o=n("dc4a"),i=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return o(e,a)||o(e,"@@iterator")||i[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),o=n("aed9"),i=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!o?Object.defineProperties:function(e,t){s(e);var n,r=a(t),o=c(t),u=o.length,l=0;while(u>l)i.f(e,n=o[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),o=n("1626"),i=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||o(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("abc5");const o="devtools-plugin:setup",i="plugin:settings:set";class s{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const i in e.settings){const t=e.settings[i];n[i]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let o=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(o,t)}catch(s){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}o=e}},t&&t.on(i,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function a(e,t){const n=Object(r["b"])(),i=Object(r["a"])(),a=r["c"]&&e.enableEarlyProxy;if(!i||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new s(e,i):null,o=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:e,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}else i.emit(o,e,t)}},"3f8c":function(e,t){e.exports={}},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"44ad":function(e,t,n){var r=n("da84"),o=n("e330"),i=n("d039"),s=n("c6b6"),a=r.Object,c=o("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),i=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),o=n("5087"),i=n("b622"),s=i("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[s])?t:o(n)}},"485a":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!s(r=o(n,e)))return r;if(i(n=e.valueOf)&&!s(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!s(r=o(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),o=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),o=n("23cb"),i=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c),l=o(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),o=n("68ee"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return X})),n.d(t,"b",(function(){return s}));var r=n("7a23"),o=n("3f4e"),i="store";function s(e){return void 0===e&&(e=null),Object(r["m"])(null!==e?e:i)}function a(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function c(e){return null!==e&&"object"===typeof e}function u(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function f(e,t){return function(){return e(t)}}function d(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function h(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;v(e,n,[],e._modules.root,!0),p(e,n,t)}function p(e,t,n){var o=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};a(i,(function(t,n){s[n]=f(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=Object(r["t"])({data:t}),e.strict&&w(e),o&&n&&e._withCommit((function(){o.data=null}))}function v(e,t,n,r,o){var i=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!i&&!o){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=m(e,s,n);r.forEachMutation((function(t,n){var r=s+n;b(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,o=t.handler||t;y(e,r,o,u)})),r.forEachGetter((function(t,n){var r=s+n;_(e,r,t,u)})),r.forEachChild((function(r,i){v(e,t,n.concat(i),r,o)}))}function m(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=I(n,r,o),s=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?e.commit:function(n,r,o){var i=I(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return O(e.state,n)}}}),o}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function b(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function y(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return u(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function _(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function w(e){Object(r["B"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function I(e,t,n){return c(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var E="vuex bindings",j="vuex:mutations",k="vuex:actions",S="vuex",T=0;function x(e,t){Object(o["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:j,label:"Vuex Mutations",color:C}),n.addTimelineLayer({id:k,label:"Vuex Actions",color:C}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===S)if(n.filter){var r=[];M(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[L(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId;g(t,r),n.state=D(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),t._withCommit((function(){n.set(t._state.data,o,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:j,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=T++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:k,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},o=Date.now()-e._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var C=8702998,R=6710886,A=16777215,P={label:"namespaced",textColor:A,backgroundColor:R};function N(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function L(e,t){return{id:t||"root",label:N(t),tags:e.namespaced?[P]:[],children:Object.keys(e._children).map((function(n){return L(e._children[n],t+n+"/")}))}}function M(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[P]:[]}),Object.keys(t._children).forEach((function(o){M(e,t._children[o],n,r+o+"/")}))}function D(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=U(t);o.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?N(e):e,editable:!1,value:V((function(){return i[e]}))}}))}return o}function U(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var o=t,i=r.pop();r.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[i]=V((function(){return e[n]}))}else t[n]=V((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,o){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return o===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function V(e){try{return e()}catch(t){return t}}var $=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},z={namespaced:{configurable:!0}};z.namespaced.get=function(){return!!this._rawModule.namespaced},$.prototype.addChild=function(e,t){this._children[e]=t},$.prototype.removeChild=function(e){delete this._children[e]},$.prototype.getChild=function(e){return this._children[e]},$.prototype.hasChild=function(e){return e in this._children},$.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},$.prototype.forEachChild=function(e){a(this._children,e)},$.prototype.forEachGetter=function(e){this._rawModule.getters&&a(this._rawModule.getters,e)},$.prototype.forEachAction=function(e){this._rawModule.actions&&a(this._rawModule.actions,e)},$.prototype.forEachMutation=function(e){this._rawModule.mutations&&a(this._rawModule.mutations,e)},Object.defineProperties($.prototype,z);var B=function(e){this.register([],e,!1)};function W(e,t,n){if(K(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");W(e.concat(r),t.getChild(r),n.modules[r])}}B.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},B.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},B.prototype.update=function(e){W([],this.root,e)},B.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),K(e,t);var o=new $(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&a(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},B.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},B.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var H={assert:function(e){return"function"===typeof e},expected:"function"},G={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},q={getters:H,mutations:H,actions:G};function K(e,t){Object.keys(q).forEach((function(n){if(t[n]){var r=q[n];a(t[n],(function(t,o){l(r.assert(t),J(e,n,o,t,r.expected))}))}}))}function J(e,t,n,r,o){var i=t+" should be "+o+' but "'+t+"."+n+'"';return e.length>0&&(i+=' in module "'+e.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function X(e){return new Y(e)}var Y=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var o=t.strict;void 0===o&&(o=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new B(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return u.call(s,e,t,n)},this.strict=o;var f=this._modules.root.state;v(this,f,[],this._modules.root),p(this,f),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};Y.prototype.install=function(e,t){e.provide(t||i,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&x(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},Y.prototype.commit=function(e,t,n){var r=this,o=I(e,t,n),i=o.type,s=o.payload,a=o.options,c={type:i,payload:s},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},Y.prototype.dispatch=function(e,t){var n=this,r=I(e,t),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+o)},Y.prototype.subscribe=function(e,t){return d(e,this._subscribers,t)},Y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return d(n,this._actionSubscribers,t)},Y.prototype.watch=function(e,t,n){var o=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(r["B"])((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},Y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),v(this,this.state,e,this._modules.get(e),n.preserveState),p(this,this.state)},Y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),h(this)},Y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},Y.prototype.hotUpdate=function(e){this._modules.update(e),h(this,!0)},Y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Y.prototype,Q);te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=ne(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e)){if(o in this.$store.getters)return this.$store.getters[o];console.error("[vuex] unknown getter: "+o)}},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=ne(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function Z(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||c(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5692:function(e,t,n){var r=n("c430"),o=n("c6cd");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),o=n("e330"),i=n("241c"),s=n("7418"),a=n("825a"),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),o=n("f5df"),i=r.String;e.exports=function(e){if("Symbol"===o(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return G})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return $})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return q})),n.d(t,"f",(function(){return J}));var r=n("22e5"),o=n("e691"),i=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.16",l=new o["b"]("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",v="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",b="@firebase/database",y="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",I="@firebase/installations-compat",E="@firebase/messaging",j="@firebase/messaging-compat",k="@firebase/performance",S="@firebase/performance-compat",T="@firebase/remote-config",x="@firebase/remote-config-compat",C="@firebase/storage",R="@firebase/storage-compat",A="@firebase/firestore",P="@firebase/firestore-compat",N="firebase",L="9.6.6",M="[DEFAULT]",D={[c]:"fire-core",[f]:"fire-core-compat",[h]:"fire-analytics",[d]:"fire-analytics-compat",[v]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[b]:"fire-rtdb",[y]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[I]:"fire-iid-compat",[E]:"fire-fcm",[j]:"fire-fcm-compat",[k]:"fire-perf",[S]:"fire-perf-compat",[T]:"fire-rc",[x]:"fire-rc-compat",[C]:"fire-gcs",[R]:"fire-gcs-compat",[A]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},U=new Map,F=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(F.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of U.values())V(n,e);return!0}function z(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},W=new i["b"]("app","Firebase",B);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=L;function q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!==typeof o||!o)throw W.create("bad-app-name",{appName:String(o)});const s=U.get(o);if(s){if(Object(i["f"])(e,s.options)&&Object(i["f"])(n,s.config))return s;throw W.create("duplicate-app",{appName:o})}const a=new r["b"](o);for(const r of F.values())a.addComponent(r);const c=new H(e,n,a);return U.set(o,c),c}function K(e=M){const t=U.get(e);if(!t)throw W.create("no-app",{appName:e});return t}function J(e,t,n){var o;let i=null!==(o=D[e])&&void 0!==o?o:e;n&&(i+="-"+n);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new r["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){$(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),J(c,u,e),J(c,u,"esm2017"),J("fire-js","")}X("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("0d51"),s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),o=n("1a2d"),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),o=n("da84");e.exports="process"==r(o.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),o=n("e330"),i=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),f=n("44ad"),d=Object.assign,h=Object.defineProperty,p=o([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=o}))?function(e,t){var n=l(e),o=arguments.length,s=1,d=c.f,h=u.f;while(o>s){var v,m=f(arguments[s++]),g=d?p(a(m),d(m)):a(m),b=g.length,y=0;while(b>y)v=g[y++],r&&!i(h,m,v)||(n[v]=m[v])}return n}:d},"68ee":function(e,t,n){var r=n("e330"),o=n("d039"),i=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],f=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,h=r(d.exec),p=!d.exec(u),v=function(e){if(!i(e))return!1;try{return f(u,l,e),!0}catch(t){return!1}},m=function(e){if(!i(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!h(d,c(e))}catch(t){return!0}};m.sham=!0,e.exports=!f||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?m:v},"69f3":function(e,t,n){var r,o,i,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),f=n("1a2d"),d=n("c6cd"),h=n("f772"),p=n("d012"),v="Object already initialized",m=a.TypeError,g=a.WeakMap,b=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var _=d.state||(d.state=new g),w=c(_.get),O=c(_.has),I=c(_.set);r=function(e,t){if(O(_,e))throw new m(v);return t.facade=e,I(_,e,t),t},o=function(e){return w(_,e)||{}},i=function(e){return O(_,e)}}else{var E=h("state");p[E]=!0,r=function(e,t){if(f(e,E))throw new m(v);return t.facade=e,l(e,E,t),t},o=function(e){return f(e,E)?e[E]:{}},i=function(e){return f(e,E)}}e.exports={set:r,get:o,has:i,enforce:b,getterFor:y}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return W})),n.d(t,"c",(function(){return nt}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const o="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,i=e=>o?Symbol(e):"_vr_"+e,s=i("rvlm"),a=i("rvd"),c=i("r"),u=i("rl"),l=i("rvl"),f="undefined"!==typeof window;function d(e){return e.__esModule||o&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function p(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}const v=()=>{};const m=/\/$/,g=e=>e.replace(m,"");function b(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),o=e(i)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=k(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&O(t.matched[r],n.matched[o])&&I(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function I(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E(e[n],t[n]))return!1;return!0}function E(e,t){return Array.isArray(e)?j(e,t):Array.isArray(t)?j(t,e):e===t}function j(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],1!==s&&"."!==i){if(".."!==i)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var S,T;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function x(e){if(!e)if(f){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const C=/^[^#]+#/;function R(e,t){return e.replace(C,"#")+t}function A(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=A(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+o}function $(e,t,n,r){let o=[],i=[],s=null;const a=({state:i})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(i){if(n.value=a,t.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function c(){s=n.value}function u(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:P()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:f}}function z(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?P():null}}function B(e){const{history:t,location:n}=window,r={value:V(e,n)},o={value:t.state};function i(r,i,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=h({},t.state,z(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,s,!0),r.value=e}function a(e,n){const s=h({},o.value,t.state,{forward:e,scroll:P()});i(s.current,s,!0);const a=h({},z(r.value,e,null),{position:s.position+1},n);i(e,a,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:a,replace:s}}function W(e){e=x(e);const t=B(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=h({location:"",base:e,go:r,createHref:R.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function H(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=i("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return h(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t),r=[];let o=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;i.push({name:e,repeatable:n,optional:a});const f=c||Q;if(f!==Q){s+=10;try{new RegExp(`(${f})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+u.message)}}let d=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),o+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:s,optional:a}=e,c=i in t?t[i]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:i,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=ne(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const oe={type:0,value:""},ie=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function f(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ie.test(a)?d():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function ae(e,t,n){const r=te(se(e.path),n);const o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ce(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(h({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let f,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(f=ae(t,n,u),r?r.alias.push(f):(d=d||f,d!==f&&d.alias.push(f),o&&e.name&&!de(f)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)i(e[t],f,r&&r.children[t])}r=r||f,c(f)}return d?()=>{s(d)}:v}function s(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let o,i,s,a={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw X(1,{location:e});s=o.record.name,a=h(ue(t.params,o.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),i=o.stringify(a)}else if("path"in e)i=e.path,o=n.find(e=>e.re.test(i)),o&&(a=o.parse(i),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!o)throw X(1,{location:e,currentLocation:t});s=o.record.name,a=h({},t.params,e.params),i=o.stringify(a)}const c=[];let u=o;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:i,params:a,matched:c,meta:he(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>i(e)),{addRoute:i,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,me=/&/g,ge=/\//g,be=/=/g,ye=/\?/g,_e=/\+/g,we=/%5B/g,Oe=/%5D/g,Ie=/%5E/g,Ee=/%60/g,je=/%7B/g,ke=/%7C/g,Se=/%7D/g,Te=/%20/g;function xe(e){return encodeURI(""+e).replace(ke,"|").replace(we,"[").replace(Oe,"]")}function Ce(e){return xe(e).replace(je,"{").replace(Se,"}").replace(Ie,"^")}function Re(e){return xe(e).replace(_e,"%2B").replace(Te,"+").replace(ve,"%23").replace(me,"%26").replace(Ee,"`").replace(je,"{").replace(Se,"}").replace(Ie,"^")}function Ae(e){return Re(e).replace(be,"%3D")}function Pe(e){return xe(e).replace(ve,"%23").replace(ye,"%3F")}function Ne(e){return null==e?"":Pe(e).replace(ge,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(_e," "),n=e.indexOf("="),i=Le(n<0?e:e.slice(0,n)),s=n<0?null:Le(e.slice(n+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(s)}else t[i]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Ae(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=Array.isArray(r)?r.map(e=>e&&Re(e)):[r&&Re(r)];o.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):H(e)?a(X(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),s())},u=e.call(r&&r.instances[o],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function $e(e,t,n,r){const o=[];for(const i of e)for(const e in i.components){let s=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(ze(s)){const a=s.__vccOpts||s,c=a[t];c&&o.push(Ve(c,n,r,i,e))}else{let a=s();0,o.push(()=>a.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const s=d(o)?o.default:o;i.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Ve(c,n,r,i,e)()}))}}return o}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Be(e){const t=Object(r["m"])(c),n=Object(r["m"])(u),o=Object(r["b"])(()=>t.resolve(Object(r["z"])(e.to))),i=Object(r["b"])(()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const s=i.findIndex(O.bind(null,r));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&i[i.length-1].path!==a?i.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["b"])(()=>i.value>-1&&qe(n.params,o.value.params)),a=Object(r["b"])(()=>i.value>-1&&i.value===n.matched.length-1&&I(n.params,o.value.params));function l(n={}){return Ge(n)?t[Object(r["z"])(e.replace)?"replace":"push"](Object(r["z"])(e.to)).catch(v):Promise.resolve()}return{route:o,href:Object(r["b"])(()=>o.value.href),isActive:s,isExactActive:a,navigate:l}}const We=Object(r["j"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Be,setup(e,{slots:t}){const n=Object(r["t"])(Be(e)),{options:o}=Object(r["m"])(c),i=Object(r["b"])(()=>({[Je(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Object(r["l"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),He=We;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qe(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some((e,t)=>e!==o[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["j"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=Object(r["m"])(l),i=Object(r["b"])(()=>e.route||o.value),c=Object(r["m"])(a,0),u=Object(r["b"])(()=>i.value.matched[c]);Object(r["s"])(a,c+1),Object(r["s"])(s,u),Object(r["s"])(l,i);const f=Object(r["u"])();return Object(r["B"])(()=>[f.value,u.value,e.name],([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&O(t,o)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const o=i.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:o});const l=s.props[e.name],d=l?!0===l?o.params:"function"===typeof l?l(o):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},v=Object(r["l"])(a,h({},d,t,{onVnodeUnmounted:p,ref:f}));return Ye(n.default,{Component:v,route:o})||v}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Xe;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Me,o=e.stringifyQuery||De,i=e.history;const s=Fe(),a=Fe(),d=Fe(),m=Object(r["x"])(q);let g=q;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),O=p.bind(null,Ne),I=p.bind(null,Le);function E(e,n){let r,o;return G(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function j(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map(e=>e.record)}function T(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=h({},r||m.value),"string"===typeof e){const o=b(n,e,r.path),s=t.resolve({path:o.path},r),a=i.createHref(o.fullPath);return h(o,s,{params:I(s.params),hash:Le(o.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=h({},e,{path:b(n,e.path,r.path).path});else{const t=h({},e.params);for(const e in t)null==t[e]&&delete t[e];s=h({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(I(a.params));const u=y(o,h({},e,{hash:Ce(c),path:a.path})),l=i.createHref(u);return h({fullPath:u,hash:c,query:o===De?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function C(e){return"string"===typeof e?b(n,e,m.value.path):h({},e)}function R(e,t){if(g!==e)return X(8,{from:t,to:e})}function A(e){return V(e)}function M(e){return A(h(C(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=g=x(e),r=m.value,i=e.state,s=e.force,a=!0===e.replace,c=F(n);if(c)return V(h(C(c),{state:i,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(o,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):z(u,r)).catch(e=>Y(e)?e:ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(h(C(e.to),{state:i,force:s,replace:a}),t||u)}else e=W(u,r,!0,a,i);return B(u,r,e),e})}function $(e,t){const n=R(e,t);return n?Promise.reject(n):Promise.resolve()}function z(e,t){let n;const[r,o,i]=tt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=$.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=$e(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$e(i,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function B(e,t,n){for(const r of d.list())r(e,t,n)}function W(e,t,n,r,o){const s=R(e,t);if(s)return s;const a=t===q,c=f?history.state:{};n&&(r||a?i.replace(e.fullPath,h({scroll:a&&c&&c.scroll},o)):i.push(e.fullPath,o)),m.value=e,re(e,t,n,a),ne()}let H;function K(){H=i.listen((e,t,n)=>{const r=x(e),o=F(r);if(o)return void V(h(o,{replace:!0}),r).catch(v);g=r;const s=m.value;f&&D(L(s.fullPath,n.delta),P()),z(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===S.pop&&i.go(-1,!1)}).catch(v),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||W(r,s,!1),e&&(n.delta?i.go(-n.delta,!1):n.type===S.pop&&Y(e,20)&&i.go(-1,!1)),B(r,s,e)}).catch(v)})}let J,Q=Fe(),Z=Fe();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&m.value!==q?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){J||(J=!0,K(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function re(t,n,o,i){const{scrollBehavior:s}=e;if(!f||!s)return Promise.resolve();const a=!o&&U(L(t.fullPath,0))||(i||!o)&&history.state&&history.state.scroll||null;return Object(r["n"])().then(()=>s(t,n,a)).then(e=>e&&N(e)).catch(e=>ee(e,t,n))}const oe=e=>i.go(e);let ie;const se=new Set,ae={currentRoute:m,addRoute:E,removeRoute:j,hasRoute:T,getRoutes:k,resolve:x,options:e,push:A,replace:M,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["z"])(m)}),f&&!ie&&m.value===q&&(ie=!0,A(i.location).catch(e=>{0}));const n={};for(const i in q)n[i]=Object(r["b"])(()=>m.value[i]);e.provide(c,t),e.provide(u,Object(r["t"])(n)),e.provide(l,m);const o=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=q,H&&H(),m.value=q,ie=!1,J=!1),o()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const i=t.matched[s];i&&(e.matched.find(e=>O(e,i))?r.push(i):n.push(i));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||o.push(a))}return[n,r,o]}function nt(){return Object(r["m"])(c)}},"6eeb":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,f=u.get,d=u.enforce,h=String(String).split("String");(e.exports=function(e,t,n,c){var u,f=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:t;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||l&&n.name!==m)&&s(n,"name",m),u=d(n),u.source||(u.source=h.join("string"==typeof m?m:""))),e!==r?(f?!v&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||c(this)}))},7156:function(e,t,n){var r=n("1626"),o=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var s,a;return i&&r(s=t.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&i(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7a23":function(e,t,n){"use strict";n.d(t,"t",(function(){return Ie})),n.d(t,"u",(function(){return Ue})),n.d(t,"x",(function(){return Fe})),n.d(t,"z",(function(){return ze})),n.d(t,"y",(function(){return r["L"]})),n.d(t,"a",(function(){return yr})),n.d(t,"b",(function(){return _o})),n.d(t,"d",(function(){return Rr})),n.d(t,"e",(function(){return Br})),n.d(t,"f",(function(){return Cr})),n.d(t,"g",(function(){return Dr})),n.d(t,"h",(function(){return zr})),n.d(t,"i",(function(){return Ur})),n.d(t,"j",(function(){return tn})),n.d(t,"k",(function(){return ro})),n.d(t,"l",(function(){return wo})),n.d(t,"m",(function(){return Ut})),n.d(t,"n",(function(){return lt})),n.d(t,"o",(function(){return sn})),n.d(t,"p",(function(){return an})),n.d(t,"q",(function(){return yn})),n.d(t,"r",(function(){return jr})),n.d(t,"s",(function(){return Dt})),n.d(t,"v",(function(){return Jr})),n.d(t,"w",(function(){return vr})),n.d(t,"B",(function(){return Vt})),n.d(t,"C",(function(){return Tt})),n.d(t,"D",(function(){return er})),n.d(t,"c",(function(){return Ti})),n.d(t,"A",(function(){return wi})),n.d(t,"E",(function(){return Ei}));var r=n("9ff4");let o;const i=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&o&&(this.parent=o,this.index=(o.scopes||(o.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(i.push(this),o=this)}off(){this.active&&(i.pop(),o=i[i.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||o,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&v)>0,l=e=>(e.n&v)>0,f=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=v},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];u(o)&&!l(o)?o.delete(e):t[n++]=o,o.w&=~v,o.n&=~v}t.length=n}},h=new WeakMap;let p=0,v=1;const m=30,g=[];let b;const y=Symbol(""),_=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!g.length||!g.includes(this))try{return g.push(b=this),k(),v=1<<++p,p<=m?f(this):O(this),this.fn()}finally{p<=m&&d(this),v=1<<--p,S(),g.pop();const e=g.length;b=e>0?g[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function j(){E.push(I),I=!1}function k(){E.push(I),I=!0}function S(){const e=E.pop();I=void 0===e||e}function T(e,t,n){if(!x())return;let r=h.get(e);r||h.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=c());const i=void 0;C(o,i)}function x(){return I&&void 0!==b}function C(e,t){let n=!1;p<=m?l(e)||(e.n|=v,n=!u(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e))}function R(e,t,n,o,i,s){const a=h.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=o)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"set":Object(r["t"])(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(c(e))}}function A(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==b||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=Object(r["H"])("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),L=V(),M=V(!1,!0),D=V(!0),U=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Re(this);for(let t=0,o=this.length;t<o;t++)T(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){j();const n=Re(this)[t].apply(this,e);return S(),n}}),e}function V(e=!1,t=!1){return function(n,o,i){if("__v_isReactive"===o)return!e;if("__v_isReadonly"===o)return e;if("__v_isShallow"===o)return t;if("__v_raw"===o&&i===(e?t?_e:ye:t?be:ge).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(U,o))return Reflect.get(U,o,i);const a=Reflect.get(n,o,i);if(Object(r["E"])(o)?N.has(o):P(o))return a;if(e||T(n,"get",o),t)return a;if(De(a)){const e=!s||!Object(r["s"])(o);return e?a.value:a}return Object(r["v"])(a)?e?je(a):Ie(a):a}}const $=B(),z=B(!0);function B(e=!1){return function(t,n,o,i){let s=t[n];if(Te(s)&&De(s)&&!De(o))return!1;if(!e&&!Te(o)&&(xe(o)||(o=Re(o),s=Re(s)),!Object(r["o"])(t)&&De(s)&&!De(o)))return s.value=o,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,o,i);return t===Re(i)&&(a?Object(r["j"])(o,s)&&R(t,"set",n,o,s):R(t,"add",n,o)),c}}function W(e,t){const n=Object(r["k"])(e,t),o=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&R(e,"delete",t,void 0,o),i}function H(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&N.has(t)||T(e,"has",t),n}function G(e){return T(e,"iterate",Object(r["o"])(e)?"length":y),Reflect.ownKeys(e)}const q={get:L,set:$,deleteProperty:W,has:H,ownKeys:G},K={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},J=Object(r["h"])({},q,{get:M,set:z}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const o=Re(e),i=Re(t);t!==i&&!n&&T(o,"get",t),!n&&T(o,"get",i);const{has:s}=Y(o),a=r?X:n?Ne:Pe;return s.call(o,t)?a(e.get(t)):s.call(o,i)?a(e.get(i)):void(e!==o&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Re(n),o=Re(e);return e!==o&&!t&&T(r,"has",e),!t&&T(r,"has",o),e===o?n.has(e):n.has(e)||n.has(o)}function ee(e,t=!1){return e=e["__v_raw"],!t&&T(Re(e),"iterate",y),Reflect.get(e,"size",e)}function te(e){e=Re(e);const t=Re(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function ne(e,t){t=Re(t);const n=Re(this),{has:o,get:i}=Y(n);let s=o.call(n,e);s||(e=Re(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function re(e){const t=Re(this),{has:n,get:r}=Y(t);let o=n.call(t,e);o||(e=Re(e),o=n.call(t,e));const i=r?r.call(t,e):void 0,s=t.delete(e);return o&&R(t,"delete",e,void 0,i),s}function oe(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function ie(e,t){return function(n,r){const o=this,i=o["__v_raw"],s=Re(i),a=t?X:e?Ne:Pe;return!e&&T(s,"iterate",y),i.forEach((e,t)=>n.call(r,a(e),a(t),o))}}function se(e,t,n){return function(...o){const i=this["__v_raw"],s=Re(i),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=i[e](...o),f=n?X:t?Ne:Pe;return!t&&T(s,"iterate",u?_:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[f(e[0]),f(e[1])]:f(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:oe,forEach:ie(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:oe,forEach:ie(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:ie(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach(o=>{e[o]=se(o,!1,!1),n[o]=se(o,!0,!1),t[o]=se(o,!1,!0),r[o]=se(o,!0,!0)}),[e,n,t,r]}const[ue,le,fe,de]=ce();function he(e,t){const n=t?e?de:fe:e?le:ue;return(t,o,i)=>"__v_isReactive"===o?!e:"__v_isReadonly"===o?e:"__v_raw"===o?t:Reflect.get(Object(r["k"])(n,o)&&o in t?n:t,o,i)}const pe={get:he(!1,!1)},ve={get:he(!1,!0)},me={get:he(!0,!1)};const ge=new WeakMap,be=new WeakMap,ye=new WeakMap,_e=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["O"])(e))}function Ie(e){return Te(e)?e:ke(e,!1,q,pe,ge)}function Ee(e){return ke(e,!1,J,ve,be)}function je(e){return ke(e,!0,K,me,ye)}function ke(e,t,n,o,i){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=i.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?o:n);return i.set(e,c),c}function Se(e){return Te(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return Se(e)||Te(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Ae(e){return Object(r["g"])(e,"__v_skip",!0),e}const Pe=e=>Object(r["v"])(e)?Ie(e):e,Ne=e=>Object(r["v"])(e)?je(e):e;function Le(e){x()&&(e=Re(e),e.dep||(e.dep=c()),C(e.dep))}function Me(e,t){e=Re(e),e.dep&&A(e.dep)}function De(e){return Boolean(e&&!0===e.__v_isRef)}function Ue(e){return Ve(e,!1)}function Fe(e){return Ve(e,!0)}function Ve(e,t){return De(e)?e:new $e(e,t)}class $e{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:Pe(e)}get value(){return Le(this),this._value}set value(e){e=this.__v_isShallow?e:Re(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Pe(e),Me(this,e))}}function ze(e){return De(e)?e.value:e}const Be={get:(e,t,n)=>ze(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return De(o)&&!De(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function We(e){return Se(e)?e:new Proxy(e,Be)}class He{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Me(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Re(this);return Le(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let o,i;const s=Object(r["p"])(e);s?(o=e,i=r["d"]):(o=e.get,i=e.set);const a=new He(o,i,s||!i,n);return a}Promise.resolve();function qe(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){Je(i,t,n)}return o}function Ke(e,t,n,o){if(Object(r["p"])(e)){const i=qe(e,t,n,o);return i&&Object(r["y"])(i)&&i.catch(e=>{Je(e,t,n)}),i}const i=[];for(let r=0;r<e.length;r++)i.push(Ke(e[r],t,n,o));return i}function Je(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const o=t.proxy,i=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,i))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void qe(s,null,10,[e,o,i])}Xe(e,n,o,r)}function Xe(e,t,n,r=!0){console.error(e)}let Ye=!1,Qe=!1;const Ze=[];let et=0;const tt=[];let nt=null,rt=0;const ot=[];let it=null,st=0;const at=Promise.resolve();let ct=null,ut=null;function lt(e){const t=ct||at;return e?t.then(this?e.bind(this):e):t}function ft(e){let t=et+1,n=Ze.length;while(t<n){const r=t+n>>>1,o=_t(Ze[r]);o<e?t=r+1:n=r}return t}function dt(e){Ze.length&&Ze.includes(e,Ye&&e.allowRecurse?et+1:et)||e===ut||(null==e.id?Ze.push(e):Ze.splice(ft(e.id),0,e),ht())}function ht(){Ye||Qe||(Qe=!0,ct=at.then(wt))}function pt(e){const t=Ze.indexOf(e);t>et&&Ze.splice(t,1)}function vt(e,t,n,o){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?o+1:o)||n.push(e),ht()}function mt(e){vt(e,nt,tt,rt)}function gt(e){vt(e,it,ot,st)}function bt(e,t=null){if(tt.length){for(ut=t,nt=[...new Set(tt)],tt.length=0,rt=0;rt<nt.length;rt++)nt[rt]();nt=null,rt=0,ut=null,bt(e,t)}}function yt(e){if(ot.length){const e=[...new Set(ot)];if(ot.length=0,it)return void it.push(...e);for(it=e,it.sort((e,t)=>_t(e)-_t(t)),st=0;st<it.length;st++)it[st]();it=null,st=0}}const _t=e=>null==e.id?1/0:e.id;function wt(e){Qe=!1,Ye=!0,bt(e),Ze.sort((e,t)=>_t(e)-_t(t));r["d"];try{for(et=0;et<Ze.length;et++){const e=Ze[et];e&&!1!==e.active&&qe(e,null,14)}}finally{et=0,Ze.length=0,yt(e),Ye=!1,ct=null,(Ze.length||tt.length||ot.length)&&wt(e)}}new Set;new Map;function Ot(e,t,...n){const o=e.vnode.props||r["b"];let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in o){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=o[e]||r["b"];s?i=n.map(e=>e.trim()):t&&(i=n.map(r["N"]))}let c;let u=o[c=Object(r["M"])(t)]||o[c=Object(r["M"])(Object(r["e"])(t))];!u&&s&&(u=o[c=Object(r["M"])(Object(r["l"])(t))]),u&&Ke(u,e,6,i);const l=o[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Ke(l,e,6,i)}}function It(e,t,n=!1){const o=t.emitsCache,i=o.get(e);if(void 0!==i)return i;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const o=e=>{const n=It(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),o.set(e,a),a):(o.set(e,null),null)}function Et(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let jt=null,kt=null;function St(e){const t=jt;return jt=e,kt=e&&e.type.__scopeId||null,t}function Tt(e,t=jt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Tr(-1);const o=St(t),i=e(...n);return St(o),r._d&&Tr(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function xt(e){const{type:t,vnode:n,proxy:o,withProxy:i,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:f,renderCache:d,data:h,setupState:p,ctx:v,inheritAttrs:m}=e;let g,b;const y=St(e);try{if(4&n.shapeFlag){const e=i||o;g=Wr(f.call(e,e,d,s,p,h,v)),b=u}else{const e=t;0,g=Wr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),b=t.props?u:Ct(u)}}catch(w){Ir.length=0,Je(w,e,1),g=Ur(wr)}let _=g;if(b&&!1!==m){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(r["u"])&&(b=Rt(b,a)),_=$r(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_,St(y),g}const Ct=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},Rt=(e,t)=>{const n={};for(const o in e)Object(r["u"])(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function At(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||Pt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Pt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Et(u,n))return!0}}return!1}function Pt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Et(n,i))return!0}return!1}function Nt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Lt=e=>e.__isSuspense;function Mt(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):gt(e)}function Dt(e,t){if(no){let n=no.provides;const r=no.parent&&no.parent.provides;r===n&&(n=no.provides=Object.create(r)),n[e]=t}else 0}function Ut(e,t,n=!1){const o=no||jt;if(o){const i=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(o.proxy):t}else 0}const Ft={};function Vt(e,t,n){return $t(e,t,n)}function $t(e,t,{immediate:n,deep:o,flush:i,onTrack:s,onTrigger:a}=r["b"]){const c=no;let u,l,f=!1,d=!1;if(De(e)?(u=()=>e.value,f=xe(e)):Se(e)?(u=()=>e,o=!0):Object(r["o"])(e)?(d=!0,f=e.some(Se),u=()=>e.map(e=>De(e)?e.value:Se(e)?Wt(e):Object(r["p"])(e)?qe(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>qe(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Ke(e,c,3,[h])}:r["d"],t&&o){const e=u;u=()=>Wt(e())}let h=e=>{l=g.onStop=()=>{qe(e,c,4)}};if(uo)return h=r["d"],t?n&&Ke(t,c,3,[u(),d?[]:void 0,h]):u(),r["d"];let p=d?[]:Ft;const v=()=>{if(g.active)if(t){const e=g.run();(o||f||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),Ke(t,c,3,[e,p===Ft?void 0:p,h]),p=e)}else g.run()};let m;v.allowRecurse=!!t,m="sync"===i?v:"post"===i?()=>ar(v,c&&c.suspense):()=>{!c||c.isMounted?mt(v):v()};const g=new w(u,m);return t?n?v():p=g.run():"post"===i?ar(g.run.bind(g),c&&c.suspense):g.run(),()=>{g.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,g)}}function zt(e,t,n){const o=this.proxy,i=Object(r["D"])(e)?e.includes(".")?Bt(o,e):()=>o[e]:e.bind(o,o);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=no;oo(this);const c=$t(i,s.bind(o),n);return a?oo(a):io(),c}function Bt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Wt(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),De(e))Wt(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)Wt(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{Wt(e,t)});else if(Object(r["x"])(e))for(const n in e)Wt(e[n],t);return e}function Ht(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vn(()=>{e.isMounted=!0}),bn(()=>{e.isUnmounting=!0}),e}const Gt=[Function,Array],qt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},setup(e,{slots:t}){const n=ro(),r=Ht();let o;return()=>{const i=t.default&&en(t.default(),!0);if(!i||!i.length)return;const s=Re(e),{mode:a}=s;const c=i[0];if(r.isLeaving)return Yt(c);const u=Qt(c);if(!u)return Yt(c);const l=Xt(u,s,r,n);Zt(u,l);const f=n.subTree,d=f&&Qt(f);let h=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===o?o=e:e!==o&&(o=e,h=!0)}if(d&&d.type!==wr&&(!Pr(u,d)||h)){const e=Xt(d,s,r,n);if(Zt(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Yt(c);"in-out"===a&&u.type!==wr&&(e.delayLeave=(e,t,n)=>{const o=Jt(r,d);o[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},Kt=qt;function Jt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Xt(e,t,n,r){const{appear:o,mode:i,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:v,onAppear:m,onAfterAppear:g,onAppearCancelled:b}=t,y=String(e.key),_=Jt(n,e),w=(e,t)=>{e&&Ke(e,r,9,t)},O={mode:i,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!o)return;r=v||a}t._leaveCb&&t._leaveCb(!0);const i=_[y];i&&Pr(e,i)&&i.el._leaveCb&&i.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,i=l;if(!n.isMounted){if(!o)return;t=m||c,r=g||u,i=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?i:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const o=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(f,[t]);let i=!1;const s=t._leaveCb=n=>{i||(i=!0,r(),w(n?p:h,[t]),t._leaveCb=void 0,_[o]===e&&delete _[o])};_[o]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return Xt(e,t,n,r)}};return O}function Yt(e){if(rn(e))return e=$r(e),e.children=null,e}function Qt(e){return rn(e)?e.children?e.children[0]:void 0:e}function Zt(e,t){6&e.shapeFlag&&e.component?Zt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function en(e,t=!1){let n=[],r=0;for(let o=0;o<e.length;o++){const i=e[o];i.type===yr?(128&i.patchFlag&&r++,n=n.concat(en(i.children,t))):(t||i.type!==wr)&&n.push(i)}if(r>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function tn(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const nn=e=>!!e.type.__asyncLoader;const rn=e=>e.type.__isKeepAlive;RegExp,RegExp;function on(e,t){return Object(r["o"])(e)?e.some(e=>on(e,t)):Object(r["D"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function sn(e,t){cn(e,"a",t)}function an(e,t){cn(e,"da",t)}function cn(e,t,n=no){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(dn(t,r,n),n){let e=n.parent;while(e&&e.parent)rn(e.parent.vnode)&&un(r,t,n,e),e=e.parent}}function un(e,t,n,o){const i=dn(t,e,o,!0);yn(()=>{Object(r["K"])(o[t],i)},n)}function ln(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function fn(e){return 128&e.shapeFlag?e.ssContent:e}function dn(e,t,n=no,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;j(),oo(n);const o=Ke(t,n,e,r);return io(),S(),o});return r?o.unshift(i):o.push(i),i}}const hn=e=>(t,n=no)=>(!uo||"sp"===e)&&dn(e,t,n),pn=hn("bm"),vn=hn("m"),mn=hn("bu"),gn=hn("u"),bn=hn("bum"),yn=hn("um"),_n=hn("sp"),wn=hn("rtg"),On=hn("rtc");function In(e,t=no){dn("ec",e,t)}let En=!0;function jn(e){const t=xn(e),n=e.proxy,o=e.ctx;En=!1,t.beforeCreate&&Sn(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:c,provide:u,inject:l,created:f,beforeMount:d,mounted:h,beforeUpdate:p,updated:v,activated:m,deactivated:g,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:w,render:O,renderTracked:I,renderTriggered:E,errorCaptured:j,serverPrefetch:k,expose:S,inheritAttrs:T,components:x,directives:C,filters:R}=t,A=null;if(l&&kn(l,o,A,e.appContext.config.unwrapInjectedRef),a)for(const N in a){const e=a[N];Object(r["p"])(e)&&(o[N]=e.bind(n))}if(i){0;const t=i.call(n,n);0,Object(r["v"])(t)&&(e.data=Ie(t))}if(En=!0,s)for(const N in s){const e=s[N],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const i=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=_o({get:t,set:i});Object.defineProperty(o,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Tn(c[r],o,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{Dt(t,e[t])})}function P(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(f&&Sn(f,e,"c"),P(pn,d),P(vn,h),P(mn,p),P(gn,v),P(sn,m),P(an,g),P(In,j),P(On,I),P(wn,E),P(bn,y),P(yn,w),P(_n,k),Object(r["o"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=T&&(e.inheritAttrs=T),x&&(e.components=x),C&&(e.directives=C)}function kn(e,t,n=r["d"],o=!1){Object(r["o"])(e)&&(e=Nn(e));for(const i in e){const n=e[i];let s;s=Object(r["v"])(n)?"default"in n?Ut(n.from||i,n.default,!0):Ut(n.from||i):Ut(n),De(s)&&o?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}function Sn(e,t,n){Ke(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tn(e,t,n,o){const i=o.includes(".")?Bt(n,o):()=>n[o];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&Vt(i,n)}else if(Object(r["p"])(e))Vt(i,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>Tn(e,t,n,o));else{const o=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(o)&&Vt(i,o,e)}else 0}function xn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let c;return a?c=a:o.length||n||r?(c={},o.length&&o.forEach(e=>Cn(c,e,s,!0)),Cn(c,t,s)):c=t,i.set(t,c),c}function Cn(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Cn(e,i,n,!0),o&&o.forEach(t=>Cn(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Rn[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Rn={data:An,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:Ln,created:Ln,beforeMount:Ln,mounted:Ln,beforeUpdate:Ln,updated:Ln,beforeDestroy:Ln,beforeUnmount:Ln,destroyed:Ln,unmounted:Ln,activated:Ln,deactivated:Ln,errorCaptured:Ln,serverPrefetch:Ln,components:Mn,directives:Mn,watch:Dn,provide:An,inject:Pn};function An(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Pn(e,t){return Mn(Nn(e),Nn(t))}function Nn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ln(e,t){return e?[...new Set([].concat(e,t))]:t}function Mn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Dn(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Ln(e[r],t[r]);return n}function Un(e,t,n,o=!1){const i={},s={};Object(r["g"])(s,Nr,1),e.propsDefaults=Object.create(null),Vn(e,t,i,s);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=o?i:Ee(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Fn(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,c=Re(i),[u]=e.propsOptions;let l=!1;if(!(o||a>0)||16&a){let o;Vn(e,t,i,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(o=Object(r["l"])(s))!==s&&Object(r["k"])(t,o))||(u?!n||void 0===n[s]&&void 0===n[o]||(i[s]=$n(u,c,s,void 0,e,!0)):delete i[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let a=n[o];const f=t[a];if(u)if(Object(r["k"])(s,a))f!==s[a]&&(s[a]=f,l=!0);else{const t=Object(r["e"])(a);i[t]=$n(u,c,t,f,e,!1)}else f!==s[a]&&(s[a]=f,l=!0)}}l&&R(e,"set","$attrs")}function Vn(e,t,n,o){const[i,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let f;i&&Object(r["k"])(i,f=Object(r["e"])(u))?s&&s.includes(f)?(a||(a={}))[f]=l:n[f]=l:Et(e.emitsOptions,u)||u in o&&l===o[u]||(o[u]=l,c=!0)}if(s){const t=Re(n),o=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=$n(i,t,c,o[c],e,!Object(r["k"])(o,c))}}return c}function $n(e,t,n,o,i,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===o){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=i;n in r?o=r[n]:(oo(i),o=r[n]=e.call(null,t),io())}else o=e}a[0]&&(s&&!e?o=!1:!a[1]||""!==o&&o!==Object(r["l"])(n)||(o=!0))}return o}function zn(e,t,n=!1){const o=t.propsCache,i=o.get(e);if(i)return i;const s=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const o=e=>{u=!0;const[n,o]=zn(e,t,!0);Object(r["h"])(a,n),o&&c.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!s&&!u)return o.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let f=0;f<s.length;f++){0;const e=Object(r["e"])(s[f]);Bn(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(Bn(t)){const n=s[e],o=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(o){const e=Gn(Boolean,o.type),n=Gn(String,o.type);o[0]=e>-1,o[1]=n<0||e<n,(e>-1||Object(r["k"])(o,"default"))&&c.push(t)}}}}const l=[a,c];return o.set(e,l),l}function Bn(e){return"$"!==e[0]}function Wn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Hn(e,t){return Wn(e)===Wn(t)}function Gn(e,t){return Object(r["o"])(t)?t.findIndex(t=>Hn(t,e)):Object(r["p"])(t)&&Hn(t,e)?0:-1}const qn=e=>"_"===e[0]||"$stable"===e,Kn=e=>Object(r["o"])(e)?e.map(Wr):[Wr(e)],Jn=(e,t,n)=>{const r=Tt((...e)=>Kn(t(...e)),n);return r._c=!1,r},Xn=(e,t,n)=>{const o=e._ctx;for(const i in e){if(qn(i))continue;const n=e[i];if(Object(r["p"])(n))t[i]=Jn(i,n,o);else if(null!=n){0;const e=Kn(n);t[i]=()=>e}}},Yn=(e,t)=>{const n=Kn(t);e.slots.default=()=>n},Qn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Re(t),Object(r["g"])(t,"_",n)):Xn(t,e.slots={})}else e.slots={},t&&Yn(e,t);Object(r["g"])(e.slots,Nr,1)},Zn=(e,t,n)=>{const{vnode:o,slots:i}=e;let s=!0,a=r["b"];if(32&o.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(i,t),n||1!==e||delete i._):(s=!t.$stable,Xn(t,i)),a=t}else t&&(Yn(e,t),a={default:1});if(s)for(const r in i)qn(r)||r in a||delete i[r]};function er(e,t){const n=jt;if(null===n)return e;const o=n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&Wt(n),i.push({dir:e,instance:o,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function tr(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let c=a.dir[r];c&&(j(),Ke(c,n,8,[e.el,a,e,t]),S())}}function nr(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rr=0;function or(e,t){return function(n,o=null){null==o||Object(r["v"])(o)||(o=null);const i=nr(),s=new Set;let a=!1;const c=i.app={_uid:rr++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:Oo,get config(){return i.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(r,s,u){if(!a){const l=Ur(n,o);return l.appContext=i,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,go(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c}};return c}}function ir(e,t,n,o,i=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>ir(e,t&&(Object(r["o"])(t)?t[s]:t),n,o,i));if(nn(o)&&!i)return;const s=4&o.shapeFlag?go(o.component)||o.component.proxy:o.el,a=i?null:s,{i:c,r:u}=e;const l=t&&t.r,f=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(f[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):De(l)&&(l.value=null)),Object(r["p"])(u))qe(u,c,12,[a,f]);else{const t=Object(r["D"])(u),o=De(u);if(t||o){const o=()=>{if(e.f){const n=t?f[u]:u.value;i?Object(r["o"])(n)&&Object(r["K"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?f[u]=[s]:(u.value=[s],e.k&&(f[e.k]=u.value))}else t?(f[u]=a,Object(r["k"])(d,u)&&(d[u]=a)):De(u)&&(u.value=a,e.k&&(f[e.k]=a))};a?(o.id=-1,ar(o,n)):o()}else 0}}function sr(){}const ar=Mt;function cr(e){return ur(e)}function ur(e,t){sr();const n=Object(r["i"])();n.__VUE__=!0;const{insert:o,remove:i,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:f,parentNode:d,nextSibling:h,setScopeId:p=r["d"],cloneNode:v,insertStaticContent:m}=e,g=(e,t,n,r=null,o=null,i=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Pr(e,t)&&(r=K(e),B(e,o,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:f}=t;switch(u){case _r:b(e,t,n,r);break;case wr:y(e,t,n,r);break;case Or:null==e&&_(t,n,r,s);break;case yr:P(e,t,n,r,o,i,s,a,c);break;default:1&f?E(e,t,n,r,o,i,s,a,c):6&f?N(e,t,n,r,o,i,s,a,c):(64&f||128&f)&&u.process(e,t,n,r,o,i,s,a,c,X)}null!=l&&o&&ir(l,e&&e.ref,i,t||e,!t)},b=(e,t,n,r)=>{if(null==e)o(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},y=(e,t,n,r)=>{null==e?o(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},O=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=h(e),o(e,n,r),e=i;o(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=h(e),i(e),e=n;i(t)},E=(e,t,n,r,o,i,s,a,c)=>{s=s||"svg"===t.type,null==e?k(t,n,r,o,i,s,a,c):C(e,t,o,i,s,a,c)},k=(e,t,n,i,c,u,l,d)=>{let h,p;const{type:m,props:g,shapeFlag:b,transition:y,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==v&&-1===_)h=e.el=v(e.el);else{if(h=e.el=a(e.type,u,g&&g.is,g),8&b?f(h,e.children):16&b&&x(e.children,h,null,i,c,u&&"foreignObject"!==m,l,d),w&&tr(e,null,i,"created"),g){for(const t in g)"value"===t||Object(r["z"])(t)||s(h,t,null,g[t],u,e.children,i,c,q);"value"in g&&s(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Kr(p,i,e)}T(h,e,e.scopeId,l,i)}w&&tr(e,null,i,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(h),o(h,t,n),((p=g&&g.onVnodeMounted)||O||w)&&ar(()=>{p&&Kr(p,i,e),O&&y.enter(h),w&&tr(e,null,i,"mounted")},c)},T=(e,t,n,r,o)=>{if(n&&p(e,n),r)for(let i=0;i<r.length;i++)p(e,r[i]);if(o){let n=o.subTree;if(t===n){const t=o.vnode;T(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},x=(e,t,n,r,o,i,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Hr(e[u]):Wr(e[u]);g(null,c,t,n,r,o,i,s,a)}},C=(e,t,n,o,i,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||r["b"],v=t.props||r["b"];let m;n&&lr(n,!1),(m=v.onVnodeBeforeUpdate)&&Kr(m,n,t,e),h&&tr(t,e,n,"beforeUpdate"),n&&lr(n,!0);const g=i&&"foreignObject"!==t.type;if(d?R(e.dynamicChildren,d,u,n,o,g,a):c||F(e,t,u,null,n,o,g,a,!1),l>0){if(16&l)A(u,t,p,v,n,o,i);else if(2&l&&p.class!==v.class&&s(u,"class",null,v.class,i),4&l&&s(u,"style",p.style,v.style,i),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=v[a];l===c&&"value"!==a||s(u,a,c,l,i,e.children,n,o,q)}}1&l&&e.children!==t.children&&f(u,t.children)}else c||null!=d||A(u,t,p,v,n,o,i);((m=v.onVnodeUpdated)||h)&&ar(()=>{m&&Kr(m,n,t,e),h&&tr(t,e,n,"updated")},o)},R=(e,t,n,r,o,i,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===yr||!Pr(c,u)||70&c.shapeFlag)?d(c.el):n;g(c,u,l,null,r,o,i,s,!0)}},A=(e,t,n,o,i,a,c)=>{if(n!==o){for(const u in o){if(Object(r["z"])(u))continue;const l=o[u],f=n[u];l!==f&&"value"!==u&&s(e,u,f,l,c,t.children,i,a,q)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in o||s(e,u,n[u],null,c,t.children,i,a,q);"value"in o&&s(e,"value",n.value,o.value)}},P=(e,t,n,r,i,s,a,u,l)=>{const f=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:v}=t;v&&(u=u?u.concat(v):v),null==e?(o(f,n,r),o(d,n,r),x(t.children,n,d,i,s,a,u,l)):h>0&&64&h&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,n,i,s,a,u),(null!=t.key||i&&t===i.subTree)&&fr(e,t,!0)):F(e,t,n,d,i,s,a,u,l)},N=(e,t,n,r,o,i,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,r,s,c):L(t,n,r,o,i,s,c):M(e,t,c)},L=(e,t,n,r,o,i,s)=>{const a=e.component=to(e,r,o);if(rn(e)&&(a.ctx.renderer=X),lo(a),a.asyncDep){if(o&&o.registerDep(a,D),!e.el){const e=a.subTree=Ur(wr);y(null,e,t,n)}}else D(a,e,t,n,o,i,s)},M=(e,t,n)=>{const r=t.component=e.component;if(At(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,pt(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,o,i,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:o,u:c,parent:u,vnode:l}=e,f=n;0,lr(e,!1),n?(n.el=l.el,U(e,n,a)):n=l,o&&Object(r["n"])(o),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Kr(t,u,n,l),lr(e,!0);const h=xt(e);0;const p=e.subTree;e.subTree=h,g(p,h,d(p.el),K(p),e,i,s),n.el=h.el,null===f&&Nt(e,h.el),c&&ar(c,i),(t=n.props&&n.props.onVnodeUpdated)&&ar(()=>Kr(t,u,n,l),i)}else{let a;const{el:c,props:u}=t,{bm:l,m:f,parent:d}=e,h=nn(t);if(lr(e,!1),l&&Object(r["n"])(l),!h&&(a=u&&u.onVnodeBeforeMount)&&Kr(a,d,t),lr(e,!0),c&&Q){const n=()=>{e.subTree=xt(e),Q(c,e.subTree,e,i,null)};h?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=xt(e);0,g(null,r,n,o,e,i,s),t.el=r.el}if(f&&ar(f,i),!h&&(a=u&&u.onVnodeMounted)){const e=t;ar(()=>Kr(a,d,e),i)}256&t.shapeFlag&&e.a&&ar(e.a,i),e.isMounted=!0,t=n=o=null}},u=e.effect=new w(c,()=>dt(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,lr(e,!0),l()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Fn(e,t.props,r,n),Zn(e,t.children,n),j(),bt(void 0,e.update),S()},F=(e,t,n,r,o,i,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void $(u,d,n,r,o,i,s,a,c);if(256&h)return void V(u,d,n,r,o,i,s,a,c)}8&p?(16&l&&q(u,o,i),d!==u&&f(n,d)):16&l?16&p?$(u,d,n,r,o,i,s,a,c):q(u,o,i,!0):(8&l&&f(n,""),16&p&&x(d,n,r,o,i,s,a,c))},V=(e,t,n,o,i,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,f=t.length,d=Math.min(l,f);let h;for(h=0;h<d;h++){const r=t[h]=u?Hr(t[h]):Wr(t[h]);g(e[h],r,n,null,i,s,a,c,u)}l>f?q(e,i,s,!0,!1,d):x(t,n,o,i,s,a,c,u,d)},$=(e,t,n,o,i,s,a,c,u)=>{let l=0;const f=t.length;let d=e.length-1,h=f-1;while(l<=d&&l<=h){const r=e[l],o=t[l]=u?Hr(t[l]):Wr(t[l]);if(!Pr(r,o))break;g(r,o,n,null,i,s,a,c,u),l++}while(l<=d&&l<=h){const r=e[d],o=t[h]=u?Hr(t[h]):Wr(t[h]);if(!Pr(r,o))break;g(r,o,n,null,i,s,a,c,u),d--,h--}if(l>d){if(l<=h){const e=h+1,r=e<f?t[e].el:o;while(l<=h)g(null,t[l]=u?Hr(t[l]):Wr(t[l]),n,r,i,s,a,c,u),l++}}else if(l>h)while(l<=d)B(e[l],i,s,!0),l++;else{const p=l,v=l,m=new Map;for(l=v;l<=h;l++){const e=t[l]=u?Hr(t[l]):Wr(t[l]);null!=e.key&&m.set(e.key,l)}let b,y=0;const _=h-v+1;let w=!1,O=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=d;l++){const r=e[l];if(y>=_){B(r,i,s,!0);continue}let o;if(null!=r.key)o=m.get(r.key);else for(b=v;b<=h;b++)if(0===I[b-v]&&Pr(r,t[b])){o=b;break}void 0===o?B(r,i,s,!0):(I[o-v]=l+1,o>=O?O=o:w=!0,g(r,t[o],n,null,i,s,a,c,u),y++)}const E=w?dr(I):r["a"];for(b=E.length-1,l=_-1;l>=0;l--){const e=v+l,r=t[e],d=e+1<f?t[e+1].el:o;0===I[l]?g(null,r,n,d,i,s,a,c,u):w&&(b<0||l!==E[b]?z(r,n,d,2):b--)}}},z=(e,t,n,r,i=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void z(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,X);if(a===yr){o(s,t,n);for(let e=0;e<u.length;e++)z(u[e],t,n,r);return void o(e.anchor,t,n)}if(a===Or)return void O(e,t,n);const f=2!==r&&1&l&&c;if(f)if(0===r)c.beforeEnter(s),o(s,t,n),ar(()=>c.enter(s),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>o(s,t,n),u=()=>{e(s,()=>{a(),i&&i()})};r?r(s,a,u):u()}else o(s,t,n)},B=(e,t,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:d}=e;if(null!=a&&ir(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&d,p=!nn(e);let v;if(p&&(v=s&&s.onVnodeBeforeUnmount)&&Kr(v,t,e),6&l)G(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&tr(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,o,X,r):u&&(i!==yr||f>0&&64&f)?q(u,t,n,!1,!0):(i===yr&&384&f||!o&&16&l)&&q(c,t,n),r&&W(e)}(p&&(v=s&&s.onVnodeUnmounted)||h)&&ar(()=>{v&&Kr(v,t,e),h&&tr(e,null,t,"unmounted")},n)},W=e=>{const{type:t,el:n,anchor:r,transition:o}=e;if(t===yr)return void H(n,r);if(t===Or)return void I(e);const s=()=>{i(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&e.shapeFlag&&o&&!o.persisted){const{leave:t,delayLeave:r}=o,i=()=>t(n,s);r?r(e.el,s,i):i()}else s()},H=(e,t)=>{let n;while(e!==t)n=h(e),i(e),e=n;i(t)},G=(e,t,n)=>{const{bum:o,scope:i,update:s,subTree:a,um:c}=e;o&&Object(r["n"])(o),i.stop(),s&&(s.active=!1,B(a,e,t,n)),c&&ar(c,t),ar(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},q=(e,t,n,r=!1,o=!1,i=0)=>{for(let s=i;s<e.length;s++)B(e[s],t,n,r,o)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():h(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&B(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),yt(),t._vnode=e},X={p:g,um:B,m:z,r:W,mt:L,mc:x,pc:F,pbc:R,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(X)),{render:J,hydrate:Y,createApp:or(J,Y)}}function lr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fr(e,t,n=!1){const o=e.children,i=t.children;if(Object(r["o"])(o)&&Object(r["o"])(i))for(let r=0;r<o.length;r++){const e=o[r];let t=i[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[r]=Hr(i[r]),t.el=e.el),n||fr(e,t))}}function dr(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(o=n[n.length-1],e[o]<c){t[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,e[n[a]]<c?i=a+1:s=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=t[s];return n}const hr=e=>e.__isTeleport;const pr="components";function vr(e,t){return gr(pr,e,!0,t)||e}const mr=Symbol();function gr(e,t,n=!0,o=!1){const i=jt||no;if(i){const n=i.type;if(e===pr){const e=bo(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=br(i[e]||n[e],t)||br(i.appContext[e],t);return!s&&o?n:s}}function br(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const yr=Symbol(void 0),_r=Symbol(void 0),wr=Symbol(void 0),Or=Symbol(void 0),Ir=[];let Er=null;function jr(e=!1){Ir.push(Er=e?null:[])}function kr(){Ir.pop(),Er=Ir[Ir.length-1]||null}let Sr=1;function Tr(e){Sr+=e}function xr(e){return e.dynamicChildren=Sr>0?Er||r["a"]:null,kr(),Sr>0&&Er&&Er.push(e),e}function Cr(e,t,n,r,o,i){return xr(Dr(e,t,n,r,o,i,!0))}function Rr(e,t,n,r,o){return xr(Ur(e,t,n,r,o,!0))}function Ar(e){return!!e&&!0===e.__v_isVNode}function Pr(e,t){return e.type===t.type&&e.key===t.key}const Nr="__vInternal",Lr=({key:e})=>null!=e?e:null,Mr=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["D"])(e)||De(e)||Object(r["p"])(e)?{i:jt,r:e,k:t,f:!!n}:e:null;function Dr(e,t=null,n=null,o=0,i=null,s=(e===yr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lr(t),ref:t&&Mr(t),scopeId:kt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Gr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Sr>0&&!a&&Er&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Er.push(u),u}const Ur=Fr;function Fr(e,t=null,n=null,o=0,i=null,s=!1){if(e&&e!==mr||(e=wr),Ar(e)){const r=$r(e,t,!0);return n&&Gr(r,n),r}if(yo(e)&&(e=e.__vccOpts),t){t=Vr(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(Ce(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:Lt(e)?128:hr(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return Dr(e,t,n,o,i,a,s,!0)}function Vr(e){return e?Ce(e)||Nr in e?Object(r["h"])({},e):e:null}function $r(e,t,n=!1){const{props:o,ref:i,patchFlag:s,children:a}=e,c=t?qr(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Lr(c),ref:t&&t.ref?n&&i?Object(r["o"])(i)?i.concat(Mr(t)):[i,Mr(t)]:Mr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==yr?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$r(e.ssContent),ssFallback:e.ssFallback&&$r(e.ssFallback),el:e.el,anchor:e.anchor};return u}function zr(e=" ",t=0){return Ur(_r,null,e,t)}function Br(e="",t=!1){return t?(jr(),Rr(wr,null,e)):Ur(wr,null,e)}function Wr(e){return null==e||"boolean"===typeof e?Ur(wr):Object(r["o"])(e)?Ur(yr,null,e.slice()):"object"===typeof e?Hr(e):Ur(_r,null,String(e))}function Hr(e){return null===e.el||e.memo?e:$r(e)}function Gr(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&o){const n=t.default;return void(n&&(n._c&&(n._d=!1),Gr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Nr in t?3===r&&jt&&(1===jt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=jt}}else Object(r["p"])(t)?(t={default:t,_ctx:jt},n=32):(t=String(t),64&o?(n=16,t=[zr(t)]):n=8);e.children=t,e.shapeFlag|=n}function qr(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=Object(r["I"])([t.class,o.class]));else if("style"===e)t.style=Object(r["J"])([t.style,o.style]);else if(Object(r["w"])(e)){const n=t[e],i=o[e];!i||n===i||Object(r["o"])(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=o[e])}return t}function Kr(e,t,n,r=null){Ke(e,t,7,[n,r])}function Jr(e,t,n,o){let i;const s=n&&n[o];if(Object(r["o"])(e)||Object(r["D"])(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[o]=i),i}const Xr=e=>e?so(e)?go(e)||e.proxy:Xr(e.parent):null,Yr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xr(e.parent),$root:e=>Xr(e.root),$emit:e=>e.emit,$options:e=>xn(e),$forceUpdate:e=>()=>dt(e.update),$nextTick:e=>lt.bind(e.proxy),$watch:e=>zt.bind(e)}),Qr={get({_:e},t){const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=1,o[t];if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];En&&(a[t]=0)}}const f=Yr[t];let d,h;return f?("$attrs"===t&&T(e,"get",t),f(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(h=u.config.globalProperties,Object(r["k"])(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(o,a)||Object(r["k"])(Yr,a)||Object(r["k"])(i.config.globalProperties,a)}};const Zr=nr();let eo=0;function to(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||Zr,a={uid:eo++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zn(o,i),emitsOptions:It(o,i),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:o.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ot.bind(null,a),e.ce&&e.ce(a),a}let no=null;const ro=()=>no||jt,oo=e=>{no=e,e.scope.on()},io=()=>{no&&no.scope.off(),no=null};function so(e){return 4&e.vnode.shapeFlag}let ao,co,uo=!1;function lo(e,t=!1){uo=t;const{props:n,children:r}=e.vnode,o=so(e);Un(e,n,o,t),Qn(e,r);const i=o?fo(e,t):void 0;return uo=!1,i}function fo(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ae(new Proxy(e.ctx,Qr));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?mo(e):null;oo(e),j();const i=qe(o,e,0,[e.props,n]);if(S(),io(),Object(r["y"])(i)){if(i.then(io,io),t)return i.then(n=>{ho(e,n,t)}).catch(t=>{Je(t,e,0)});e.asyncDep=i}else ho(e,i,t)}else po(e,t)}function ho(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=We(t)),po(e,n)}function po(e,t,n){const o=e.type;if(!e.render){if(!t&&ao&&!o.render){const t=o.template;if(t){0;const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:a}=o,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},i),a);o.render=ao(t,c)}}e.render=o.render||r["d"],co&&co(e)}oo(e),j(),jn(e),S(),io()}function vo(e){return new Proxy(e.attrs,{get(t,n){return T(e,"get","$attrs"),t[n]}})}function mo(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=vo(e))},slots:e.slots,emit:e.emit,expose:t}}function go(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(We(Ae(e.exposed)),{get(t,n){return n in t?t[n]:n in Yr?Yr[n](e):void 0}}))}function bo(e){return Object(r["p"])(e)&&e.displayName||e.name}function yo(e){return Object(r["p"])(e)&&"__vccOpts"in e}const _o=(e,t)=>Ge(e,t,uo);function wo(e,t,n){const o=arguments.length;return 2===o?Object(r["v"])(t)&&!Object(r["o"])(t)?Ar(t)?Ur(e,null,[t]):Ur(e,t):Ur(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&Ar(n)&&(n=[n]),Ur(e,t,n))}Symbol("");const Oo="3.2.29",Io="http://www.w3.org/2000/svg",Eo="undefined"!==typeof document?document:null,jo=Eo&&Eo.createElement("template"),ko={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?Eo.createElementNS(Io,e):Eo.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:e=>Eo.createTextNode(e),createComment:e=>Eo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Eo.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(t.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{jo.innerHTML=r?`<svg>${e}</svg>`:e;const o=jo.content;if(r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function So(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function To(e,t,n){const o=e.style,i=Object(r["D"])(n);if(n&&!i){for(const e in n)Co(o,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Co(o,e,"")}else{const r=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const xo=/\s*!important$/;function Co(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Co(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const o=Po(e,t);xo.test(n)?e.setProperty(Object(r["l"])(o),n.replace(xo,""),"important"):e[o]=n}}const Ro=["Webkit","Moz","ms"],Ao={};function Po(e,t){const n=Ao[t];if(n)return n;let o=Object(r["e"])(t);if("filter"!==o&&o in e)return Ao[t]=o;o=Object(r["f"])(o);for(let r=0;r<Ro.length;r++){const n=Ro[r]+o;if(n in e)return Ao[t]=n}return t}const No="http://www.w3.org/1999/xlink";function Lo(e,t,n,o,i){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(No,t.slice(6,t.length)):e.setAttributeNS(No,t,n);else{const o=Object(r["C"])(t);null==n||o&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Mo(e,t,n,o,i,s,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,i,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const o=typeof e[t];if("boolean"===o)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===o)return e[t]="",void e.removeAttribute(t);if("number"===o){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Do=Date.now,Uo=!1;if("undefined"!==typeof window){Do()>document.createEvent("Event").timeStamp&&(Do=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Uo=!!(e&&Number(e[1])<=53)}let Fo=0;const Vo=Promise.resolve(),$o=()=>{Fo=0},zo=()=>Fo||(Vo.then($o),Fo=Do());function Bo(e,t,n,r){e.addEventListener(t,n,r)}function Wo(e,t,n,r){e.removeEventListener(t,n,r)}function Ho(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[n,a]=qo(t);if(r){const s=i[t]=Ko(r,o);Bo(e,n,s,a)}else s&&(Wo(e,n,s,a),i[t]=void 0)}}const Go=/(?:Once|Passive|Capture)$/;function qo(e){let t;if(Go.test(e)){let n;t={};while(n=e.match(Go))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Ko(e,t){const n=e=>{const r=e.timeStamp||Do();(Uo||r>=n.attached-1)&&Ke(Jo(e,n.value),t,5,[e])};return n.value=e,n.attached=zo(),n}function Jo(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Xo=/^on[a-z]/,Yo=(e,t,n,o,i=!1,s,a,c,u)=>{"class"===t?So(e,o,i):"style"===t?To(e,n,o):Object(r["w"])(t)?Object(r["u"])(t)||Ho(e,t,n,o,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Qo(e,t,o,i))?Mo(e,t,o,s,a,c,u):("true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),Lo(e,t,o,i))};function Qo(e,t,n,o){return o?"innerHTML"===t||"textContent"===t||!!(t in e&&Xo.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Xo.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Zo="transition",ei="animation",ti=(e,{slots:t})=>wo(Kt,ii(e),t);ti.displayName="Transition";const ni={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ri=(ti.props=Object(r["h"])({},Kt.props,ni),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),oi=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function ii(e){const t={};for(const r in e)r in ni||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:o,duration:i,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:f=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:h=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,v=si(i),m=v&&v[0],g=v&&v[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:I=b,onAppear:E=y,onAppearCancelled:j=_}=t,k=(e,t,n)=>{ui(e,t?f:c),ui(e,t?l:a),n&&n()},S=(e,t)=>{ui(e,p),ui(e,h),t&&t()},T=e=>(t,n)=>{const r=e?E:y,i=()=>k(t,e,n);ri(r,[t,i]),li(()=>{ui(t,e?u:s),ci(t,e?f:c),oi(r)||di(t,o,m,i)})};return Object(r["h"])(t,{onBeforeEnter(e){ri(b,[e]),ci(e,s),ci(e,a)},onBeforeAppear(e){ri(I,[e]),ci(e,u),ci(e,l)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){const n=()=>S(e,t);ci(e,d),mi(),ci(e,h),li(()=>{ui(e,d),ci(e,p),oi(w)||di(e,o,g,n)}),ri(w,[e,n])},onEnterCancelled(e){k(e,!1),ri(_,[e])},onAppearCancelled(e){k(e,!0),ri(j,[e])},onLeaveCancelled(e){S(e),ri(O,[e])}})}function si(e){if(null==e)return null;if(Object(r["v"])(e))return[ai(e.enter),ai(e.leave)];{const t=ai(e);return[t,t]}}function ai(e){const t=Object(r["N"])(e);return t}function ci(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function ui(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function li(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fi=0;function di(e,t,n,r){const o=e._endId=++fi,i=()=>{o===e._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=hi(e,t);if(!s)return r();const u=s+"end";let l=0;const f=()=>{e.removeEventListener(u,d),i()},d=t=>{t.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},a+1),e.addEventListener(u,d)}function hi(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),o=r(Zo+"Delay"),i=r(Zo+"Duration"),s=pi(o,i),a=r(ei+"Delay"),c=r(ei+"Duration"),u=pi(a,c);let l=null,f=0,d=0;t===Zo?s>0&&(l=Zo,f=s,d=i.length):t===ei?u>0&&(l=ei,f=u,d=c.length):(f=Math.max(s,u),l=f>0?s>u?Zo:ei:null,d=l?l===Zo?i.length:c.length:0);const h=l===Zo&&/\b(transform|all)(,|$)/.test(n[Zo+"Property"]);return{type:l,timeout:f,propCount:d,hasTransform:h}}function pi(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>vi(t)+vi(e[n])))}function vi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function mi(){return document.body.offsetHeight}new WeakMap,new WeakMap;const gi=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function bi(e){e.target.composing=!0}function yi(e){const t=e.target;t.composing&&(t.composing=!1,_i(t,"input"))}function _i(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const wi={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=gi(i);const s=o||i.props&&"number"===i.props.type;Bo(e,t?"change":"input",t=>{if(t.target.composing)return;let o=e.value;n?o=o.trim():s&&(o=Object(r["N"])(o)),e._assign(o)}),n&&Bo(e,"change",()=>{e.value=e.value.trim()}),t||(Bo(e,"compositionstart",bi),Bo(e,"compositionend",yi),Bo(e,"change",yi))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:i}},s){if(e._assign=gi(s),e.composing)return;if(document.activeElement===e){if(n)return;if(o&&e.value.trim()===t)return;if((i||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const Oi=["ctrl","shift","alt","meta"],Ii={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Oi.some(n=>e[n+"Key"]&&!t.includes(n))},Ei=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Ii[t[e]];if(r&&r(n,t))return}return e(n,...r)};const ji=Object(r["h"])({patchProp:Yo},ko);let ki;function Si(){return ki||(ki=cr(ji))}const Ti=(...e)=>{const t=Si().createApp(...e);const{mount:n}=t;return t.mount=e=>{const o=xi(e);if(!o)return;const i=t._component;Object(r["p"])(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function xi(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),o=n("1d80"),i=r.Object;e.exports=function(e){return i(o(e))}},"7c73":function(e,t,n){var r,o=n("825a"),i=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),f=">",d="<",h="prototype",p="script",v=l("IE_PROTO"),m=function(){},g=function(e){return d+p+f+e+d+"/"+p+f},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var e=s.length;while(e--)delete _[h][s[e]];return _()};a[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[h]=o(e),n=new m,m[h]=null,n[v]=e):n=_(),void 0===t?n:i.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),o=n("c65b"),i=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),f=n("d44e"),d=n("9112"),h=n("6eeb"),p=n("b622"),v=n("3f8c"),m=n("ae93"),g=s.PROPER,b=s.CONFIGURABLE,y=m.IteratorPrototype,_=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",I="values",E="entries",j=function(){return this};e.exports=function(e,t,n,s,p,m,k){c(n,t,s);var S,T,x,C=function(e){if(e===p&&L)return L;if(!_&&e in P)return P[e];switch(e){case O:return function(){return new n(this,e)};case I:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",A=!1,P=e.prototype,N=P[w]||P["@@iterator"]||p&&P[p],L=!_&&N||C(p),M="Array"==t&&P.entries||N;if(M&&(S=u(M.call(new e)),S!==Object.prototype&&S.next&&(i||u(S)===y||(l?l(S,y):a(S[w])||h(S,w,j)),f(S,R,!0,!0),i&&(v[R]=j))),g&&p==I&&N&&N.name!==I&&(!i&&b?d(P,"name",I):(A=!0,L=function(){return o(N,this)})),p)if(T={values:C(I),keys:m?L:C(O),entries:C(E)},k)for(x in T)(_||A||!(x in P))&&h(P,x,T[x]);else r({target:t,proto:!0,forced:_||A},T);return i&&!k||P[w]===L||h(P,w,L,{name:p}),v[t]=L,T}},"7f9a":function(e,t,n){var r=n("da84"),o=n("1626"),i=n("8925"),s=r.WeakMap;e.exports=o(s)&&/native code/.test(i(s))},"825a":function(e,t,n){var r=n("da84"),o=n("861d"),i=r.String,s=r.TypeError;e.exports=function(e){if(o(e))return e;throw s(i(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),o=n("1626"),i=n("c6cd"),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},"90e3":function(e,t,n){var r=n("e330"),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},9112:function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),o=n("1626"),i=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(A){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new x(r||[]);return i._invoke=j(e,n,s),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}e.wrap=u;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function b(){}var y={};c(y,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(C([])));w&&w!==n&&r.call(w,i)&&(y=w);var O=b.prototype=m.prototype=Object.create(y);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,i,s,a){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(f).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function j(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return R()}n.method=o,n.arg=i;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,s=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=b,c(O,"constructor",b),c(b,"constructor",g),g.displayName=c(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},I(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var s=new E(u(t,n,r,o),i);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},I(O),c(O,a,"Generator"),c(O,i,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(i(n))return s(o(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),o=n("83ab"),i=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,d="enumerable",h="configurable",p="writable";t.f=o?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=f(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,o=n("7c73"),i=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=o(r,{next:i(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return oe})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return P})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return U})),n.d(t,"q",(function(){return i})),n.d(t,"r",(function(){return m})),n.d(t,"s",(function(){return q})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return $})),n.d(t,"w",(function(){return T})),n.d(t,"x",(function(){return G})),n.d(t,"y",(function(){return z})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return g})),n.d(t,"B",(function(){return M})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return F})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return y})),n.d(t,"G",(function(){return _})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return h})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return R})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return ie})),n.d(t,"O",(function(){return H}));const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=F(r)?d(r):u(r);if(o)for(const e in o)t[e]=o[e]}return t}return F(e)||$(e)?e:void 0}const l=/;(?![^(]*\))/g,f=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(f);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function h(e){let t="";if(F(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",v="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),g=r(v);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=N(e),r=N(t),n||r)return!(!n||!r)&&b(e,t);if(n=$(e),r=$(t),n||r){if(!n||!r)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>y(e,t))}const w=e=>null==e?"":N(e)||$(e)&&(e.toString===B||!U(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!$(t)||N(t)||G(t)?t:String(t),I={},E=[],j=()=>{},k=()=>!1,S=/^on[^a-z]/,T=e=>S.test(e),x=e=>e.startsWith("onUpdate:"),C=Object.assign,R=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,P=(e,t)=>A.call(e,t),N=Array.isArray,L=e=>"[object Map]"===W(e),M=e=>"[object Set]"===W(e),D=e=>e instanceof Date,U=e=>"function"===typeof e,F=e=>"string"===typeof e,V=e=>"symbol"===typeof e,$=e=>null!==e&&"object"===typeof e,z=e=>$(e)&&U(e.then)&&U(e.catch),B=Object.prototype.toString,W=e=>B.call(e),H=e=>W(e).slice(8,-1),G=e=>"[object Object]"===W(e),q=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,Y=J(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Q=/\B([A-Z])/g,Z=J(e=>e.replace(Q,"-$1").toLowerCase()),ee=J(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=J(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},oe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ie=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let se;const ae=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),o=n("d9b5");e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(e,t,n){"use strict";var r=n("23e7"),o=n("c430"),i=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),f=n("6eeb"),d=!!i&&s((function(){i.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!o&&c(i)){var h=a("Promise").prototype["finally"];i.prototype["finally"]!==h&&f(i.prototype,"finally",h,{unsafe:!0})}},ab36:function(e,t,n){var r=n("861d"),o=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&o(e,"cause",t.cause)}},abc5:function(e,t,n){"use strict";(function(e){function r(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));const i="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var r,o,i,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),f=n("b622"),d=n("c430"),h=f("iterator"),p=!1;[].keys&&(i=[].keys(),"next"in i?(o=u(u(i)),o!==Object.prototype&&(r=o)):p=!0);var v=void 0==r||s((function(){var e={};return r[h].call(e)!==e}));v?r={}:d&&(r=c(r)),a(r[h])||l(r,h,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),o=n("d039");e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),o=n("f5df");e.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),o=n("5e77").EXISTS,i=n("e330"),s=n("9bf2").f,a=Function.prototype,c=i(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(u.exec),f="name";r&&!o&&s(a,f,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b575:function(e,t,n){var r,o,i,s,a,c,u,l,f=n("da84"),d=n("0366"),h=n("06cf").f,p=n("2cf4").set,v=n("1cdc"),m=n("d4c3"),g=n("a4b4"),b=n("605d"),y=f.MutationObserver||f.WebKitMutationObserver,_=f.document,w=f.process,O=f.Promise,I=h(f,"queueMicrotask"),E=I&&I.value;E||(r=function(){var e,t;b&&(e=w.domain)&&e.exit();while(o){t=o.fn,o=o.next;try{t()}catch(n){throw o?s():i=void 0,n}}i=void 0,e&&e.enter()},v||b||g||!y||!_?!m&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=d(u.then,u),s=function(){l(r)}):b?s=function(){w.nextTick(r)}:(p=d(p,f),s=function(){p(r)}):(a=!0,c=_.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};i&&(i.next=t),o||(o=t,s()),i=t}},b622:function(e,t,n){var r=n("da84"),o=n("5692"),i=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=o("wks"),l=r.Symbol,f=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!i(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&i(l,e)?u[e]=l[e]:u[e]=c&&f?f(t):d(t)}return u[e]}},b980:function(e,t,n){var r=n("d039"),o=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},c04e:function(e,t,n){var r=n("da84"),o=n("c65b"),i=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,f=u("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,r=a(e,f);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t,n){var r=n("40d5"),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},c6b6:function(e,t,n){var r=n("e330"),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},c770:function(e,t,n){var r=n("e330"),o=r("".replace),i=function(e){return String(Error(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(i);e.exports=function(e,t){if(a&&"string"==typeof e)while(t--)e=o(e,s,"");return e}},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),o=n("1a2d"),i=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(t.length>u)o(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),o=n("861d"),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),o=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},cdf9:function(e,t,n){var r=n("825a"),o=n("861d"),i=n("f069");e.exports=function(e,t){if(r(e),o(t)&&t.constructor===e)return t;var n=i.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),o=n("1626"),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),o=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),o=n("6eeb"),i=n("b041");r||o(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,o=n("1a2d"),i=n("b622"),s=i("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!o(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),o=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==o.Pebble},d6d6:function(e,t,n){var r=n("da84"),o=r.TypeError;e.exports=function(e,t){if(e<t)throw o("Not enough arguments");return e}},d9b5:function(e,t,n){var r=n("da84"),o=n("d066"),i=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&s(t.prototype,c(e))}},d9e2:function(e,t,n){var r=n("23e7"),o=n("da84"),i=n("2ba4"),s=n("e5cb"),a="WebAssembly",c=o[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=s(e,t,u),r({global:!0,forced:u},n)},f=function(e,t){if(c&&c[e]){var n={};n[e]=s(a+"."+e,t,u),r({target:a,stat:!0,forced:u},n)}};l("Error",(function(e){return function(t){return i(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return i(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return i(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return i(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return i(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return i(e,this,arguments)}})),l("URIError",(function(e){return function(t){return i(e,this,arguments)}})),f("CompileError",(function(e){return function(t){return i(e,this,arguments)}})),f("LinkError",(function(e){return function(t){return i(e,this,arguments)}})),f("RuntimeError",(function(e){return function(t){return i(e,this,arguments)}}))},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},e163:function(e,t,n){var r=n("da84"),o=n("1a2d"),i=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,f=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(o(t,u))return t[u];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof l?f:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),o=n("44d2"),i=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),f="Array Iterator",d=s.set,h=s.getterFor(f);e.exports=c(Array,"Array",(function(e,t){d(this,{type:f,target:r(e),index:0,kind:t})}),(function(){var e=h(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=i.Arguments=i.Array;if(o("keys"),o("values"),o("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(v){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var o in t)r(e,o,t[o],n);return e}},e330:function(e,t,n){var r=n("40d5"),o=Function.prototype,i=o.bind,s=o.call,a=r&&i.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e5cb:function(e,t,n){"use strict";var r=n("d066"),o=n("1a2d"),i=n("9112"),s=n("3a9b"),a=n("d2bb"),c=n("e893"),u=n("7156"),l=n("e391"),f=n("ab36"),d=n("c770"),h=n("b980"),p=n("c430");e.exports=function(e,t,n,v){var m=v?2:1,g=e.split("."),b=g[g.length-1],y=r.apply(null,g);if(y){var _=y.prototype;if(!p&&o(_,"cause")&&delete _.cause,!n)return y;var w=r("Error"),O=t((function(e,t){var n=l(v?t:e,void 0),r=v?new y(e):new y;return void 0!==n&&i(r,"message",n),h&&i(r,"stack",d(r.stack,2)),this&&s(_,this)&&u(r,this,O),arguments.length>m&&f(r,arguments[m]),r}));if(O.prototype=_,"Error"!==b&&(a?a(O,w):c(O,w,{name:!0})),c(O,y),!p)try{_.name!==b&&i(_,"name",b),_.constructor=O}catch(I){}return O}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return f}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function f(e,t){for(const n of r){let r=null;t&&t.level&&(r=i[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:i,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,o,i,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),f=n("c65b"),d=n("fea9"),h=n("6eeb"),p=n("e2cc"),v=n("d2bb"),m=n("d44e"),g=n("2626"),b=n("59ed"),y=n("1626"),_=n("861d"),w=n("19aa"),O=n("8925"),I=n("2266"),E=n("1c7e"),j=n("4840"),k=n("2cf4").set,S=n("b575"),T=n("cdf9"),x=n("44de"),C=n("f069"),R=n("e667"),A=n("01b4"),P=n("69f3"),N=n("94ca"),L=n("b622"),M=n("6069"),D=n("605d"),U=n("2d00"),F=L("species"),V="Promise",$=P.getterFor(V),z=P.set,B=P.getterFor(V),W=d&&d.prototype,H=d,G=W,q=u.TypeError,K=u.document,J=u.process,X=C.f,Y=X,Q=!!(K&&K.createEvent&&u.dispatchEvent),Z=y(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,oe=2,ie=1,se=2,ae=!1,ce=N(V,(function(){var e=O(H),t=e!==String(H);if(!t&&66===U)return!0;if(c&&!G["finally"])return!0;if(U>=51&&/native code/.test(e))return!1;var n=new H((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},o=n.constructor={};return o[F]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&M&&!Z})),ue=ce||!E((function(e){H.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!_(e)||!y(t=e.then))&&t},fe=function(e,t){var n,r,o,i=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&me(t),t.rejection=ie),!0===a?n=i:(l&&l.enter(),n=a(i),l&&(l.exit(),o=!0)),n===e.promise?u(q("Promise-chain cycle")):(r=le(n))?f(r,n,c,u):c(n)):u(i)}catch(d){l&&!o&&l.exit(),u(d)}},de=function(e,t){e.notified||(e.notified=!0,S((function(){var n,r=e.reactions;while(n=r.get())fe(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},he=function(e,t,n){var r,o;Q?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(o=u["on"+e])?o(r):e===ee&&x("Unhandled promise rejection",n)},pe=function(e){f(k,u,(function(){var t,n=e.facade,r=e.value,o=ve(e);if(o&&(t=R((function(){D?J.emit("unhandledRejection",r,n):he(ee,n,r)})),e.rejection=D||ve(e)?se:ie,t.error))throw t.value}))},ve=function(e){return e.rejection!==ie&&!e.parent},me=function(e){f(k,u,(function(){var t=e.facade;D?J.emit("rejectionHandled",t):he(te,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},be=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=oe,de(e,!0))},ye=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw q("Promise can't be resolved itself");var r=le(t);r?S((function(){var n={done:!1};try{f(r,t,ge(ye,n,e),ge(be,n,e))}catch(o){be(n,o,e)}})):(e.value=t,e.state=re,de(e,!1))}catch(o){be({done:!1},o,e)}}};if(ce&&(H=function(e){w(this,G),b(e),f(r,this);var t=$(this);try{e(ge(ye,t),ge(be,t))}catch(n){be(t,n)}},G=H.prototype,r=function(e){z(this,{type:V,done:!1,notified:!1,parent:!1,reactions:new A,rejection:!1,state:ne,value:void 0})},r.prototype=p(G,{then:function(e,t){var n=B(this),r=X(j(this,H));return n.parent=!0,r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=D?J.domain:void 0,n.state==ne?n.reactions.add(r):S((function(){fe(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r,t=$(e);this.promise=e,this.resolve=ge(ye,t),this.reject=ge(be,t)},C.f=X=function(e){return e===H||e===i?new o(e):Y(e)},!c&&y(d)&&W!==Object.prototype)){s=W.then,ae||(h(W,"then",(function(e,t){var n=this;return new H((function(e,t){f(s,n,e,t)})).then(e,t)}),{unsafe:!0}),h(W,"catch",G["catch"],{unsafe:!0}));try{delete W.constructor}catch(_e){}v&&v(W,G)}a({global:!0,wrap:!0,forced:ce},{Promise:H}),m(H,V,!1,!0),g(V),i=l(V),a({target:V,stat:!0,forced:ce},{reject:function(e){var t=X(this);return f(t.reject,void 0,e),t.promise}}),a({target:V,stat:!0,forced:c||ce},{resolve:function(e){return T(c&&this===i?H:this,e)}}),a({target:V,stat:!0,forced:ue},{all:function(e){var t=this,n=X(t),r=n.resolve,o=n.reject,i=R((function(){var n=b(t.resolve),i=[],s=0,a=1;I(e,(function(e){var c=s++,u=!1;a++,f(n,t,e).then((function(e){u||(u=!0,i[c]=e,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(e){var t=this,n=X(t),r=n.reject,o=R((function(){var o=b(t.resolve);I(e,(function(e){f(o,t,e).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),o=n("56ef"),i=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=o(t),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];r(e,f)||n&&r(n,f)||c(e,f,u(t,f))}}},e95a:function(e,t,n){var r=n("b622"),o=n("3f8c"),i=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||s[i]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return lr})),n.d(t,"c",(function(){return ft})),n.d(t,"d",(function(){return ct})),n.d(t,"e",(function(){return dt})),n.d(t,"f",(function(){return lt}));var r=n("1fd5"),o=n("589b");function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),f=new s["b"]("@firebase/auth");function d(e,...t){f.logLevel<=s["a"].ERROR&&f.error(`Auth (${o["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function v(e,t,n){const o=Object.assign(Object.assign({},u()),{[t]:n}),i=new r["b"]("auth","Firebase",o);return i.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw m(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(o["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if(Object(r["f"])(o,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const i=n.initialize({options:t});return i}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function j(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(j()||Object(r["j"])()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["m"])()||Object(r["n"])()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,o,i={}){return M(e,i,async()=>{let i={},s={};o&&("GET"===t?s=o:i={body:JSON.stringify(o)});const a=Object(r["o"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function M(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},A),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw V(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",i);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw v(e,a,s);h(e,a)}}catch(i){if(i instanceof r["c"])throw i;h(e,"network-request-failed")}}async function D(e,t,n,r,o={}){const i=await L(e,t,n,r,o);return"mfaPendingCredential"in i&&h(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?C(e.config,o):`${e.config.apiScheme}://${o}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=p(e,t,r);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function z(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t=!1){const n=Object(r["h"])(e),o=await n.getIdToken(t),i=G(o);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:o,authTime:B(H(i.auth_time)),issuedAtTime:B(H(i.iat)),expirationTime:B(H(i.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function G(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",i),null}}function q(e){const t=G(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r["c"]&&J(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),o=await K(e,z(n,{idToken:r}));g(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const s=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Y(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(e,f)}async function Z(e){const t=Object(r["h"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["o"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,s=U(e,o,"/v1/token","key="+i),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(g("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,f=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,h=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:I}=t;g(y&&I,e,"internal-error");const E=re.fromJSON(this.name,I);g("string"===typeof y,e,"internal-error"),oe(l,e.name),oe(f,e.name),g("boolean"===typeof _,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),oe(d,e.name),oe(h,e.name),oe(p,e.name),oe(v,e.name),oe(m,e.name),oe(b,e.name);const j=new ie({uid:y,auth:e,email:f,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:b});return O&&Array.isArray(O)&&(j.providerData=O.map(e=>Object.assign({},e))),v&&(j._redirectEventId=v),j}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const o=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(o),o}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,o),this.fullPersistenceKey=ce("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let o=r[0]||w(ae);const i=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(i);if(t){const n=ie._fromJSON(e,t);u!==o&&(s=n),o=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(i,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==o)try{await e._remove(i)}catch(c){}})),new ue(o,e,n)):new ue(o,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(ve(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function fe(e=Object(r["i"])()){return/firefox\//i.test(e)}function de(e=Object(r["i"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(r["i"])()){return/crios\//i.test(e)}function pe(e=Object(r["i"])()){return/iemobile/i.test(e)}function ve(e=Object(r["i"])()){return/android/i.test(e)}function me(e=Object(r["i"])()){return/blackberry/i.test(e)}function ge(e=Object(r["i"])()){return/webos/i.test(e)}function be(e=Object(r["i"])()){return/iphone|ipad|ipod/i.test(e)}function ye(e=Object(r["i"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return Object(r["l"])()&&10===document.documentMode}function we(e=Object(r["i"])()){return be(e)||ve(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["i"])());break;case"Worker":n=`${le(Object(r["i"])())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o["a"]}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null===n||void 0===n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);r&&r!==o||!(null===i||void 0===i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["h"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return g(i,this,"internal-error"),i.then(()=>o(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function je(e){return Object(r["h"])(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["e"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function Re(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Se{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ae(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ae(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ce(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Te(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="http://localhost";class Le extends Se{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Le(n,r);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:Ne,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["o"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function Ue(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Fe={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),Fe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Se{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new $e({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Be(e){const t=Object(r["p"])(Object(r["g"])(e))["link"],n=t?Object(r["p"])(Object(r["g"])(t))["deep_link_id"]:null,o=Object(r["p"])(Object(r["g"])(e))["deep_link_id"],i=o?Object(r["p"])(Object(r["g"])(o))["link"]:null;return i||o||n||t||e}class We{constructor(e){var t,n,o,i,s,a;const c=Object(r["p"])(Object(r["g"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,f=ze(null!==(o=c["mode"])&&void 0!==o?o:null);g(u&&l&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=l,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Be(e);try{return new We(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(){this.providerId=He.PROVIDER_ID}static credential(e,t){return Ae._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=We.parseLink(t);return g(n,"argument-error"),Ae._fromEmailAndCode(e,n.code,n.tenantId)}}He.PROVIDER_ID="password",He.EMAIL_PASSWORD_SIGN_IN_METHOD="password",He.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends Ge{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends qe{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends qe{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends qe{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qe(e,t){return D(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await ie._fromIdTokenResponse(e,n,r),i=et(n),s=new Ze({user:o,providerId:i,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends r["c"]{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await K(e,nt(r,o,t,e),n);g(i.idToken,r,"internal-error");const s=G(i.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&h(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(e,t,n=!1){const r="signIn",o=await nt(e,r,t),i=await Ze._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function st(e,t){return it(je(e),t)}async function at(e,t,n){const r=je(e),o=await Qe(r,{returnSecureToken:!0,email:t,password:n}),i=await Ze._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(i.user),i}function ct(e,t,n){return st(Object(r["h"])(e),He.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const o=Object(r["h"])(e),i=await o.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},a=await K(o,ut(o.auth,s));o.displayName=a.displayName||null,o.photoURL=a.photoUrl||null;const c=o.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=o.displayName,c.photoURL=o.photoURL),await o._updateTokensIfNecessary(a)}function ft(e,t,n,o){return Object(r["h"])(e).onAuthStateChanged(t,n,o)}function dt(e){return Object(r["h"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function pt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const vt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vt,"1"),this.storage.removeItem(vt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){const e=Object(r["i"])();return de(e)||be(e)}const bt=1e3,yt=10;class _t extends mt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);_e()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,yt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_t.type="LOCAL";const wt=_t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends mt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ot.type="SESSION";const It=Ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new jt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(i).map(async e=>e(t.origin,o)),a=await Et(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.receivers=[];class St{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((s,a)=>{const c=kt("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(u),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function xt(e){Tt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return"undefined"!==typeof Tt()["WorkerGlobalScope"]&&"function"===typeof Tt()["importScripts"]}async function Rt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function At(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Pt(){return Ct()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="firebaseLocalStorageDb",Lt=1,Mt="firebaseLocalStorage",Dt="fbase_key";class Ut{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ft(e,t){return e.transaction([Mt],t?"readwrite":"readonly").objectStore(Mt)}function Vt(){const e=indexedDB.deleteDatabase(Nt);return new Ut(e).toPromise()}function $t(){const e=indexedDB.open(Nt,Lt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Mt,{keyPath:Dt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Mt)?t(n):(n.close(),await Vt(),t(await $t()))})})}async function zt(e,t,n){const r=Ft(e,!0).put({[Dt]:t,value:n});return new Ut(r).toPromise()}async function Bt(e,t){const n=Ft(e,!1).get(t),r=await new Ut(n).toPromise();return void 0===r?null:r.value}function Wt(e,t){const n=Ft(e,!0).delete(t);return new Ut(n).toPromise()}const Ht=800,Gt=3;class qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await $t()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Gt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ct()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jt._getInstance(Pt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rt(),!this.activeServiceWorker)return;this.sender=new St(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&At()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $t();return await zt(e,vt,"1"),await Wt(e,vt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Bt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ft(e,!1).getAll();return new Ut(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qt.type="LOCAL";const Kt=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function Xt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Qt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Yt().appendChild(r)})}function Zt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Zt("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const en="recaptcha";async function tn(e,t,n){var r;const o=await n.verify();try{let i;if(g("string"===typeof o,e,"argument-error"),g(n.type===en,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){g("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await Jt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(e){this.providerId=nn.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,t){return tn(this.auth,e,Object(r["h"])(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return nn.credentialFromTaggedObject(t)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$e._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.PROVIDER_ID="phone",nn.PHONE_SIGN_IN_METHOD="phone";class on extends Se{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function sn(e){return it(e.auth,new on(e),e.bypassAuthState)}function an(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),ot(n,new on(e),e.bypassAuthState)}async function cn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),rt(n,new on(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:s}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return cn;case"reauthViaPopup":case"reauthViaRedirect":return an;default:h(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new x(2e3,1e4);class fn extends un{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,fn.currentPopupAction&&fn.currentPopupAction.cancel(),fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=kt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,ln.get())};e()}}fn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn="pendingRedirect",hn=new Map;class pn extends un{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await vn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return this.bypassAuthState||hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function vn(e,t){const n=gn(t),r=mn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function mn(e){return w(e._redirectPersistence)}function gn(e){return ce(dn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t,n=!1){const r=je(e),o=rn(r,t),i=new pn(r,o,n),s=await i.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=6e5;class _n{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!In(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!On(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yn&&this.cachedEventUids.clear(),this.cachedEventUids.has(wn(e))}saveEventToCache(e){this.cachedEventUids.add(wn(e)),this.lastProcessedEventTime=Date.now()}}function wn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function On({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function In(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kn=/^https?/;async function Sn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await En(e);for(const r of t)try{if(Tn(r))return}catch(n){}h(e,"unauthorized-domain")}function Tn(e){const t=E(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!kn.test(n))return!1;if(jn.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new x(3e4,6e4);function Cn(){const e=Tt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Rn(e){return new Promise((t,n)=>{var r,o,i;function s(){Cn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Cn(),n(p(e,"network-request-failed"))},timeout:xn.get()})}if(null===(o=null===(r=Tt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Tt().gapi)||void 0===i?void 0:i.load)){const t=Zt("iframefcb");return Tt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Qt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw An=null,e})}let An=null;function Pn(e){return An=An||Rn(e),An}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new x(5e3,15e3),Ln="__/auth/iframe",Mn="emulator/auth/iframe",Dn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Un=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,Mn):`https://${e.config.authDomain}/${Ln}`,i={apiKey:t.apiKey,appName:e.name,v:o["a"]},s=Un.get(e.config.apiHost);s&&(i.eid=s);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${Object(r["o"])(i).slice(1)}`}async function Vn(e){const t=await Pn(e),n=Tt().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Fn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=p(e,"network-request-failed"),i=Tt().setTimeout(()=>{r(o)},Nn.get());function s(){Tt().clearTimeout(i),n(t)}t.ping(s).then(s,()=>{r(o)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zn=500,Bn=600,Wn="_blank",Hn="http://localhost";class Gn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qn(e,t,n,o=zn,i=Bn){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$n),{width:o.toString(),height:i.toString(),top:s,left:a}),l=Object(r["i"])().toLowerCase();n&&(c=he(l)?Wn:n),fe(l)&&(t=t||Hn,u.scrollbars="yes");const f=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(l)&&"_self"!==c)return Kn(t||"",c),new Gn(null);const d=window.open(t||"",c,f);g(d,e,"popup-blocked");try{d.focus()}catch(h){}return new Gn(d)}function Kn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="__/auth/handler",Xn="emulator/auth/handler";function Yn(e,t,n,i,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o["a"],eventId:s};if(t instanceof Ge){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["k"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof qe){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Qn(e)}?${Object(r["o"])(u).slice(1)}`}function Qn({config:e}){return e.emulator?C(e,Xn):`https://${e.authDomain}/${Jn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class er{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=It,this._completeRedirectFn=bn}async _openPopup(e,t,n,r){var o;y(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=Yn(e,t,n,E(),r);return qn(e,i,kt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),xt(Yn(e,t,n,E(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Vn(e),n=new _n(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Zn,{type:Zn},n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zn];void 0!==o&&t(!!o),h(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||be()}}const tr=er;class nr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class rr extends nr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rr(e)}_finalizeEnroll(e,t,n){return pt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Xt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class or{constructor(){}static assertion(e){return rr._fromCredential(e)}}or.FACTOR_ID="phone";var ir="@firebase/auth",sr="0.19.8";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ur(e){Object(o["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:o,authDomain:i}=r.options;return(t=>{g(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:t.name});const r={apiKey:o,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},s=new Ee(t,r);return I(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(o["c"])(new a["a"]("auth-internal",e=>{const t=je(e.getProvider("auth").getImmediate());return(e=>new ar(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(o["f"])(ir,sr,cr(e)),Object(o["f"])(ir,sr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e=Object(o["d"])()){const t=Object(o["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:tr,persistence:[Kt,wt,It]})}ur("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),o=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new o(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),o=n("00ee"),i=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),f=function(e,t){try{return e[t]}catch(n){}};e.exports=o?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=f(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),o=n("90e3"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},fc6a:function(e,t,n){var r=n("44ad"),o=n("1d80");e.exports=function(e){return r(o(e))}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.b18a10da.js.map