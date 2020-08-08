(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[2],{41:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return u})),r.d(t,"c",(function(){return h})),r.d(t,"b",(function(){return l}));var n=r(9),o=r(44),a=r(42),i=function(e){var t=l();t.completedClues.some((function(t){return t===e}))||(t.currentClue=e,t.completedClues=[].concat(Object(o.a)(t.completedClues),[e]),h(t))},s=function(){var e=l(),t=a.a.findIndex((function(t){return t.id===e.currentClue}));if(a.a.length>t+1)return a.a[t+1].id},u=function(e){var t=l();t.name=e,h(t)},c={name:null,progress:[],completedClues:[],instrumentUnlocked:!1},h=function(e){localStorage.setItem("clue-data",JSON.stringify(e))},l=function(){var e=JSON.parse(localStorage.getItem("clue-data")||"{}");return Object(n.a)(Object(n.a)({},c),e)}},42:function(e,t,r){"use strict";t.a=[{id:"eb8dd419-2569-4dde-b13b-1e31134184d4",type:"basic",clue:"Travel to the nearest Black Bean Temple where two spoons meet. There you will find a clue to the whereabouts of the first **magic gem**. Word around town is that you may even find something there to increase your stamina",question:"What is another name for this place?",answers:["caribou","coffee"],successMessage:"[7950 Penn Ave S, Bloomington, MN 55431](https://goo.gl/maps/vpSBssmodBDa4Ezr7)",webAnswer:!0,hint:"Building number of your favorite place to go in the morning"},{id:"1f24fa80-6332-4ce6-87d8-cb00ce022226",type:"basic",clue:"A once a strong and proud warrior now reduced to a mere ornament. Remains defiled, she lost more than just her honor. ",question:"What was she?",answers:["bear"],webAnswer:!0,hint:"Animal"},{id:"f0266dbb-b101-4078-9954-a6df942f5831",type:"basic",clue:"Legends tell of a woodland beast who travelled so very far, passing many mountains, rivers, and trees...beyond the sun and over the horizon. Beneath his path, a great bounty, now sold to this very day in this temple.",question:"How many trees did he pass on his journey?",answers:["11"],webAnswer:!0,hint:"His story was memorialized on the walls within the Temple of the Black Bean. There he is depicted in the middle of his journey. Though it was very hard, I eventually made it home."},{id:"31a874c0-1a05-45ea-82e2-ea79adcf03a3",type:"basic",clue:"Filled with new wisdom and vigor, you are now ready to embark on a journey to three locations. Each one will provide you with an **key** which will guide you to one of the **magic gems**.",question:null,answers:[],webAnswer:!0,hint:null},{id:"435c10bc-8546-4d15-8a86-270f4a335a77",type:"basic",clue:"Deep within the metropolis lies a wondrous place full of Nature\u2019s beauty and splendor. There you will find a wise Sorceress living there who will be able to aid you on your adventure.\r\n\r\nJin, **Mu**, **Shui**, Huo, Tu",question:"Enter the name of the place:",image:"fiveelements",answers:["wood","lake"],webAnswer:!0,successMessage:"[6710 Lake Shore Dr S, Richfield, MN 55423](https://goo.gl/maps/jN9Vs2FVRDYEjpjJA)",hint:"This great sanctuary reserves a safe location for the old world to live on, safe from the ever growing threat of humanity."},{id:"5aa10399-b215-4b90-bf48-49482790ab89",type:"basic",clue:"The temple here is closed, but you can still find a wealth of information just near the entrance.",question:"They say this place is A _____ in the Middle of the City.",image:"fiveelements",answers:["marsh"],webAnswer:!0,hint:"Look for an area near the entrance that has a roof, but only two walls."},{id:"7205280c-56f8-4910-8cde-db69277f030b",type:"basic",clue:'Here in this sanctuary for nature, we remember all those who fought to protect it. Follow the shortest path, keep the water to your left. As you travel through it, you will find many resting points which pay tribute to these individuals. One among them once said, \r\n\r\n"Savour the Past\r\nLive for today\r\nLook forward to the future"',question:"What was their name?",answers:["dorothy","holstrom"],webAnswer:!0,hint:"Start at the entrance and follow the recommended path, look closely at each resting place along the way."},{id:"6e533cb1-63ef-4939-9f92-57220d63ad82",type:"basic",clue:"Legends tell of a benevolent Sorceress who once lived in this wooded sanctuary. They say she returns to assist those in need who are pure of heart. If the stories are true, she rests in at the heart of wood lake.",question:"Find her and ask for her aid.",answers:[],webAnswer:!1,hint:"If only there was some way you could walk across the water to the middle of the lake."},{id:"c9fbc8bf-620a-4d29-b5fc-cbe77acb9ebf",type:"basic",clue:"That place where you met your true love, though far from you now, there are many like it here.",question:"What is this place called?",answers:["gamestop"],successMessage:"[34 W 66th St, Richfield, MN 55423](https://goo.gl/maps/urUjK9xuyW9orvpU9)",webAnswer:!0,hint:"A market place for amusements, somewhere next to a rainbow."},{id:"cf6e3e8b-ab3d-494d-a912-f91f494c4e96",type:"basic",clue:"Here in this grand bazaar of amusements awaits one of the three **keys** that will aid you in your quest. Worry not, brave hero...there are many in this land who would see to your success. ",question:"See the store merchant and ask them for that which was left for you to **pick up**.",image:"barcode",answers:["711719519065"],webAnswer:!0,hint:"Enter the barcode number for the item you picked up. If you didn\u2019t get something, try the Help Whistle in your inventory."},{id:"75beaf1b-66d2-44a4-95fb-2867ebbae0c6",type:"basic",clue:"Nice work. There is yet one more **key** you must obtain. Lucky for you, it is very near. Like...if you were playing hot or cold, you could say you are **hot**.",question:"What numerals rest above the enterance?",answers:["26"],webAnswer:!0,successMessage:"[26 W 66th St, Richfield, MN 55423](https://goo.gl/maps/5YSNsk3ED3kuFtf87)",hint:'Your sorceress actually knows the "Hot or Cold" spell. Ask her to try it out.'},{id:"2c2bf8ed-3e80-4da7-8d74-b6dce1f76b1a",type:"basic",clue:"Your final **key** awaits you here. Speak with the merchant and tell them your name, they will have it for you in what they call a **pull box**. Since you are out there working hard trying to save the prince, this one is on the house.",question:"Confirm You have received it by entering the names of the two individuals represented on the front of the **key**",answers:["gambit","rogue"],webAnswer:!0,hint:"Try the Help Whistle in your inventory if you are having trouble."},{id:"c1bf0873-02ad-4f14-8858-9fa25a8583f2",type:"artifacts-obtained",clue:"Now that you possess all three **keys**, you can enter the Echo Temple where you will find the gems. To enter the temple, you must return home and carry with you all three artificacts. When you walk through the door, you will not be in your real home, but an echo of itself in another plane of existence. Prepare yourself for the final trial",question:null,answers:[],webAnswer:!1}]},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(10);var o=r(17);function a(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},50:function(e,t,r){e.exports=r(55)},51:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var s=e[a](i),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,u,"next",e)}function u(e){n(i,o,a,s,u,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return o}))},52:function(e,t,r){"use strict";var n=r(14),o=r(0),a=r.n(o),i=r(41);t.a=function(e){var t=Object(o.useState)(),r=Object(n.a)(t,2),s=r[0],u=r[1],c=Object(o.useState)(null),h=Object(n.a)(c,2),l=h[0],f=h[1];Object(o.useEffect)((function(){var e=Object(i.b)().name;e&&y(e)&&(u(e),f(!0))}),[]);var d=function(e){u(e.target.value)},y=function(e){return e&&e.toLowerCase().includes("daniella")},p=function(e){y(s)?(Object(i.d)(s),f(!0)):f(!1)};return a.a.createElement("div",{className:"Gate"},l?null:a.a.createElement("div",{className:"center"},a.a.createElement("p",null,"To begin, enter your name"),a.a.createElement("input",{type:"test",onChange:d}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("button",{onClick:p,className:"primary"},"Enter")),!1===l&&a.a.createElement("div",null,"You are not the true hero. Only the chosen adventurer may enter."),!0===l&&e.children)}},55:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=b(i,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var h=u(e,t,r);if("normal"===h.type){if(n=r.done?"completed":"suspendedYield",h.arg===c)continue;return{value:h.arg,done:r.done}}"throw"===h.type&&(n="completed",r.method="throw",r.arg=h.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=s;var c={};function h(){}function l(){}function f(){}var d={};d[o]=function(){return this};var y=Object.getPrototypeOf,p=y&&y(y(E([])));p&&p!==t&&r.call(p,o)&&(d=p);var w=f.prototype=h.prototype=Object.create(d);function m(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function v(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,s){var c=u(e[o],e,a);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"===typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,i,s)}),(function(e){n("throw",e,i,s)})):t.resolve(l).then((function(e){h.value=e,i(h)}),(function(e){return n("throw",e,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function g(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function E(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return l.prototype=w.constructor=f,f.constructor=l,f[i]=l.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},m(v.prototype),v.prototype[a]=function(){return this},e.AsyncIterator=v,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new v(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},m(w),w[i]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,c):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},56:function(e,t,r){"use strict";if("undefined"===typeof window)throw new Error("[TalkJS] The TalkJS JavaScript SDK only works in browsers (and not, for example, in Node.js)");var n,o,a,i,s;n=window,o=document,a=[],(s=o.createElement("script")).async=1,s.src="https://cdn.talkjs.com/talk.js",o.head.appendChild(s),i=n.Promise,n.Talk={v:3,ready:{then:function(e){if(i)return new i((function(t,r){a.push([e,t,r])}));a.push([e])},catch:function(){return i&&new i},c:a}};var u=window.Talk;t.a=u},75:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return i}));var n=r(56),o=function(){return new n.a.User({id:"123456",name:"Hero",email:"hero@test.com",photoUrl:"https://i.imgur.com/9M8gvLW.png",welcomeMessage:"Help will come to those who ask for it."})},a=function(){return new n.a.User({id:"654321",name:"Old Woman",email:"wisewoman@test.com",photoUrl:"https://i.imgur.com/urprSoj.png",welcomeMessage:"Welcome!"})},i=function(e,t){window.talkSession||(window.talkSession=new n.a.Session({appId:"tKuSoSds",me:e}));var r=n.a.oneOnOneId(e,t),o=window.talkSession.getOrCreateConversation(r);return o.setParticipant(e),o.setParticipant(t),window.talkSession.createInbox({selected:o})}}}]);
//# sourceMappingURL=2.1b7fd66e.chunk.js.map