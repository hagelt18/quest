(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[9],{185:function(t,e,n){"use strict";n.d(e,"c",(function(){return L})),n.d(e,"a",(function(){return W})),n.d(e,"b",(function(){return j}));var r=n(186),o=n.n(r),i=n(0),a=n.n(i),s=n(7),u=n.n(s),c=n(15),l=n.n(c),p=n(187),f=n.n(p);function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?w(t):e}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],A=["Db","Eb","Gb","Ab","Bb"],P={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},k=/([a-g])([#b]?)(\d+)/;var O=o()(12,128).reduce((function(t,e){return t[e]=function(t){var e=(t-12)%12,n=Math.floor((t-12)/12),r=I[e];return{note:"".concat(r).concat(n),pitchName:r,octave:n,midiNumber:t,isAccidental:A.includes(r)}}(e),t}),{});function S(t){var e=O[t];if(!e)throw Error("Invalid MIDI number");return e}var M=o()(12,128).filter((function(t){return!S(t).isAccidental})),j={fromNote:function(t){if(!t)throw Error("Invalid note argument");var e=k.exec(t.toLowerCase());if(!e)throw Error("Invalid note argument");var n=E(e,4),r=n[1],o=n[2],i=n[3],a="".concat(r.toUpperCase()).concat(o),s=P[a];if(null==s)throw Error("Invalid note argument");return 12+s+12*parseInt(i,10)},getAttributes:S,MIN_MIDI_NUMBER:12,MAX_MIDI_NUMBER:127,NATURAL_MIDI_NUMBERS:M},T=function(t){function e(){var t,n;h(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return v(w(n=R(this,(t=m(e)).call.apply(t,[this].concat(o)))),"onPlayNoteInput",(function(){n.props.onPlayNoteInput(n.props.midiNumber)})),v(w(n),"onStopNoteInput",(function(){n.props.onStopNoteInput(n.props.midiNumber)})),n}return _(e,t),y(e,[{key:"getAbsoluteKeyPosition",value:function(t){var e=j.getAttributes(t),n=e.octave,r=e.pitchName;return this.props.pitchPositions[r]+7*n}},{key:"getRelativeKeyPosition",value:function(t){return this.getAbsoluteKeyPosition(t)-this.getAbsoluteKeyPosition(this.props.noteRange.first)}},{key:"render",value:function(){var t=this.props,e=t.naturalKeyWidth,n=t.accidentalWidthRatio,r=t.midiNumber,o=t.gliss,i=t.useTouchEvents,s=t.accidental,u=t.active,c=t.disabled,p=t.children;return a.a.createElement("div",{className:l()("ReactPiano__Key",{"ReactPiano__Key--accidental":s,"ReactPiano__Key--natural":!s,"ReactPiano__Key--disabled":c,"ReactPiano__Key--active":u}),style:{left:D(this.getRelativeKeyPosition(r)*e),width:D(s?n*e:e)},onMouseDown:i?null:this.onPlayNoteInput,onMouseUp:i?null:this.onStopNoteInput,onMouseEnter:o?this.onPlayNoteInput:null,onMouseLeave:this.onStopNoteInput,onTouchStart:i?this.onPlayNoteInput:null,onTouchCancel:i?this.onStopNoteInput:null,onTouchEnd:i?this.onStopNoteInput:null},a.a.createElement("div",{className:"ReactPiano__NoteLabelContainer"},p))}}]),e}(a.a.Component);function D(t){return"".concat(100*t,"%")}v(T,"propTypes",{midiNumber:u.a.number.isRequired,naturalKeyWidth:u.a.number.isRequired,gliss:u.a.bool.isRequired,useTouchEvents:u.a.bool.isRequired,accidental:u.a.bool.isRequired,active:u.a.bool.isRequired,disabled:u.a.bool.isRequired,onPlayNoteInput:u.a.func.isRequired,onStopNoteInput:u.a.func.isRequired,accidentalWidthRatio:u.a.number.isRequired,pitchPositions:u.a.object.isRequired,children:u.a.node}),v(T,"defaultProps",{accidentalWidthRatio:.65,pitchPositions:{C:0,Db:.55,D:1,Eb:1.8,E:2,F:3,Gb:3.5,G:4,Ab:4.7,A:5,Bb:5.85,B:6}});var q=function(t){function e(){return h(this,e),R(this,m(e).apply(this,arguments))}return _(e,t),y(e,[{key:"getMidiNumbers",value:function(){return o()(this.props.noteRange.first,this.props.noteRange.last+1)}},{key:"getNaturalKeyCount",value:function(){return this.getMidiNumbers().filter((function(t){return!j.getAttributes(t).isAccidental})).length}},{key:"getNaturalKeyWidth",value:function(){return 1/this.getNaturalKeyCount()}},{key:"getWidth",value:function(){return this.props.width?this.props.width:"100%"}},{key:"getHeight",value:function(){if(!this.props.width)return"100%";var t=this.props.width*this.getNaturalKeyWidth();return"".concat(t/this.props.keyWidthToHeight,"px")}},{key:"render",value:function(){var t=this,e=this.getNaturalKeyWidth();return a.a.createElement("div",{className:l()("ReactPiano__Keyboard",this.props.className),style:{width:this.getWidth(),height:this.getHeight()}},this.getMidiNumbers().map((function(n){var r=j.getAttributes(n),o=(r.note,r.isAccidental),i=!t.props.disabled&&t.props.activeNotes.includes(n);return a.a.createElement(T,{naturalKeyWidth:e,midiNumber:n,noteRange:t.props.noteRange,active:i,accidental:o,disabled:t.props.disabled,onPlayNoteInput:t.props.onPlayNoteInput,onStopNoteInput:t.props.onStopNoteInput,gliss:t.props.gliss,useTouchEvents:t.props.useTouchEvents,key:n},t.props.disabled?null:t.props.renderNoteLabel({isActive:i,isAccidental:o,midiNumber:n}))})))}}]),e}(a.a.Component);function z(t){return"number"===typeof t&&j.NATURAL_MIDI_NUMBERS.includes(t)}v(q,"propTypes",{noteRange:function(t,e,n){var r=t[e],o=r.first,i=r.last;if(!o||!i)return new Error("Invalid prop ".concat(e," supplied to ").concat(n,". ").concat(e," must be an object with .first and .last values."));if(!z(o)||!z(i))return new Error("Invalid prop ".concat(e," supplied to ").concat(n,". ").concat(e," values must be valid MIDI numbers, and should not be accidentals (sharp or flat notes)."));if(o>=i)return new Error("Invalid prop ".concat(e," supplied to ").concat(n,". ").concat(e,".first must be smaller than ").concat(e,".last."))},activeNotes:u.a.arrayOf(u.a.number),onPlayNoteInput:u.a.func.isRequired,onStopNoteInput:u.a.func.isRequired,renderNoteLabel:u.a.func.isRequired,keyWidthToHeight:u.a.number.isRequired,className:u.a.string,disabled:u.a.bool,gliss:u.a.bool,useTouchEvents:u.a.bool,width:u.a.number}),v(q,"defaultProps",{disabled:!1,gliss:!1,useTouchEvents:!1,keyWidthToHeight:.33,renderNoteLabel:function(){}});var C=function(t){function e(){var t,n;h(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return v(w(n=R(this,(t=m(e)).call.apply(t,[this].concat(o)))),"state",{isMouseDown:!1,useTouchEvents:!1}),v(w(n),"handleNoteChanges",(function(t){var e=t.prevActiveNotes,r=t.nextActiveNotes;if(!n.props.disabled){var o=f()(e,r);f()(r,e).forEach((function(t){n.props.playNote(t)})),o.forEach((function(t){n.props.stopNote(t)}))}})),v(w(n),"getMidiNumberForKey",(function(t){if(!n.props.keyboardShortcuts)return null;var e=n.props.keyboardShortcuts.find((function(e){return e.key===t}));return e&&e.midiNumber})),v(w(n),"getKeyForMidiNumber",(function(t){if(!n.props.keyboardShortcuts)return null;var e=n.props.keyboardShortcuts.find((function(e){return e.midiNumber===t}));return e&&e.key})),v(w(n),"onKeyDown",(function(t){if(!(t.ctrlKey||t.metaKey||t.shiftKey)){var e=n.getMidiNumberForKey(t.key);e&&n.onPlayNoteInput(e)}})),v(w(n),"onKeyUp",(function(t){var e=n.getMidiNumberForKey(t.key);e&&n.onStopNoteInput(e)})),v(w(n),"onPlayNoteInput",(function(t){n.props.disabled||n.props.onPlayNoteInput(t,n.props.activeNotes)})),v(w(n),"onStopNoteInput",(function(t){n.props.disabled||n.props.onStopNoteInput(t,n.props.activeNotes)})),v(w(n),"onMouseDown",(function(){n.setState({isMouseDown:!0})})),v(w(n),"onMouseUp",(function(){n.setState({isMouseDown:!1})})),v(w(n),"onTouchStart",(function(){n.setState({useTouchEvents:!0})})),v(w(n),"renderNoteLabel",(function(t){var e=t.midiNumber,r=t.isActive,o=t.isAccidental,i=n.getKeyForMidiNumber(e);return n.props.renderNoteLabel({keyboardShortcut:i,midiNumber:e,isActive:r,isAccidental:o})})),n}return _(e,t),y(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}},{key:"componentDidUpdate",value:function(t,e){this.props.activeNotes!==t.activeNotes&&this.handleNoteChanges({prevActiveNotes:t.activeNotes||[],nextActiveNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){return a.a.createElement("div",{style:{width:"100%",height:"100%"},onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.onTouchStart,"data-testid":"container"},a.a.createElement(q,{noteRange:this.props.noteRange,onPlayNoteInput:this.onPlayNoteInput,onStopNoteInput:this.onStopNoteInput,activeNotes:this.props.activeNotes,className:this.props.className,disabled:this.props.disabled,width:this.props.width,keyWidthToHeight:this.props.keyWidthToHeight,gliss:this.state.isMouseDown,useTouchEvents:this.state.useTouchEvents,renderNoteLabel:this.renderNoteLabel}))}}]),e}(a.a.Component);v(C,"propTypes",{noteRange:u.a.object.isRequired,activeNotes:u.a.arrayOf(u.a.number.isRequired).isRequired,playNote:u.a.func.isRequired,stopNote:u.a.func.isRequired,onPlayNoteInput:u.a.func.isRequired,onStopNoteInput:u.a.func.isRequired,renderNoteLabel:u.a.func.isRequired,className:u.a.string,disabled:u.a.bool,width:u.a.number,keyWidthToHeight:u.a.number,keyboardShortcuts:u.a.arrayOf(u.a.shape({key:u.a.string.isRequired,midiNumber:u.a.number.isRequired}))}),v(C,"defaultProps",{renderNoteLabel:function(t){var e=t.keyboardShortcut,n=(t.midiNumber,t.isActive),r=t.isAccidental;return e?a.a.createElement("div",{className:l()("ReactPiano__NoteLabel",{"ReactPiano__NoteLabel--active":n,"ReactPiano__NoteLabel--accidental":r,"ReactPiano__NoteLabel--natural":!r})},e):null}});var L=function(t){function e(){var t,n;h(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return v(w(n=R(this,(t=m(e)).call.apply(t,[this].concat(o)))),"state",{activeNotes:n.props.activeNotes||[]}),v(w(n),"handlePlayNoteInput",(function(t){n.setState((function(e){return n.props.onPlayNoteInput&&n.props.onPlayNoteInput(t,{prevActiveNotes:e.activeNotes}),e.activeNotes.includes(t)?null:{activeNotes:e.activeNotes.concat(t)}}))})),v(w(n),"handleStopNoteInput",(function(t){n.setState((function(e){return n.props.onStopNoteInput&&n.props.onStopNoteInput(t,{prevActiveNotes:n.state.activeNotes}),{activeNotes:e.activeNotes.filter((function(e){return t!==e}))}}))})),n}return _(e,t),y(e,[{key:"componentDidUpdate",value:function(t){t.activeNotes!==this.props.activeNotes&&this.state.activeNotes!==this.props.activeNotes&&this.setState({activeNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){var t=this.props,e=(t.activeNotes,t.onPlayNoteInput,t.onStopNoteInput,N(t,["activeNotes","onPlayNoteInput","onStopNoteInput"]));return a.a.createElement(C,b({activeNotes:this.state.activeNotes,onPlayNoteInput:this.handlePlayNoteInput,onStopNoteInput:this.handleStopNoteInput},e))}}]),e}(a.a.Component);v(L,"propTypes",{noteRange:u.a.object.isRequired,activeNotes:u.a.arrayOf(u.a.number.isRequired),playNote:u.a.func.isRequired,stopNote:u.a.func.isRequired,onPlayNoteInput:u.a.func,onStopNoteInput:u.a.func,renderNoteLabel:u.a.func,className:u.a.string,disabled:u.a.bool,width:u.a.number,keyWidthToHeight:u.a.number,keyboardShortcuts:u.a.arrayOf(u.a.shape({key:u.a.string.isRequired,midiNumber:u.a.number.isRequired}))});var W={create:function(t){for(var e=t.firstNote,n=t.lastNote,r=t.keyboardConfig,o=e,i=0,a=[];i<r.length&&o<=n;){var s=r[i];j.getAttributes(o).isAccidental?a.push({key:s.flat,midiNumber:o}):(a.push({key:s.natural,midiNumber:o}),i+=1),o+=1}return a},BOTTOM_ROW:[{natural:"z",flat:"a",sharp:"s"},{natural:"x",flat:"s",sharp:"d"},{natural:"c",flat:"d",sharp:"f"},{natural:"v",flat:"f",sharp:"g"},{natural:"b",flat:"g",sharp:"h"},{natural:"n",flat:"h",sharp:"j"},{natural:"m",flat:"j",sharp:"k"},{natural:",",flat:"k",sharp:"l"},{natural:".",flat:"l",sharp:";"},{natural:"/",flat:";",sharp:"'"}],HOME_ROW:[{natural:"a",flat:"q",sharp:"w"},{natural:"s",flat:"w",sharp:"e"},{natural:"d",flat:"e",sharp:"r"},{natural:"f",flat:"r",sharp:"t"},{natural:"g",flat:"t",sharp:"y"},{natural:"h",flat:"y",sharp:"u"},{natural:"j",flat:"u",sharp:"i"},{natural:"k",flat:"i",sharp:"o"},{natural:"l",flat:"o",sharp:"p"},{natural:";",flat:"p",sharp:"["},{natural:"'",flat:"[",sharp:"]"}],QWERTY_ROW:[{natural:"q",flat:"1",sharp:"2"},{natural:"w",flat:"2",sharp:"3"},{natural:"e",flat:"3",sharp:"4"},{natural:"r",flat:"4",sharp:"5"},{natural:"t",flat:"5",sharp:"6"},{natural:"y",flat:"6",sharp:"7"},{natural:"u",flat:"7",sharp:"8"},{natural:"i",flat:"8",sharp:"9"},{natural:"o",flat:"9",sharp:"0"},{natural:"p",flat:"0",sharp:"-"},{natural:"[",flat:"-",sharp:"="}]}},186:function(t,e){t.exports=function(t,e,n){if(null!=t&&"number"!=typeof t)throw new Error("start must be a number or null");if(null!=e&&"number"!=typeof e)throw new Error("stop must be a number or null");if(null!=n&&"number"!=typeof n)throw new Error("step must be a number or null");null==e&&(e=t||0,t=0);null==n&&(n=e>t?1:-1);for(var r=[],o=t<e;o?t<e:t>e;t+=n)r.push(t);return r}},187:function(t,e,n){(function(e){var n=/^\[object .+?Constructor\]$/,r="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();function a(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function s(t,e){return!!(t?t.length:0)&&function(t,e,n){if(e!==e)return function(t,e,n,r){var o=t.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,l,n);var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,0)>-1}function u(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function c(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function l(t){return t!==t}function p(t,e){return t.has(e)}var f=Array.prototype,h=Function.prototype,d=Object.prototype,y=i["__core-js_shared__"],v=function(){var t=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),b=h.toString,_=d.hasOwnProperty,m=d.toString,g=RegExp("^"+b.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),N=i.Symbol,w=d.propertyIsEnumerable,R=f.splice,E=N?N.isConcatSpreadable:void 0,I=Math.max,A=z(i,"Map"),P=z(Object,"create");function k(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function O(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function S(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function M(t){var e=-1,n=t?t.length:0;for(this.__data__=new S;++e<n;)this.add(t[e])}function j(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!==n&&r!==r)return o;return-1}function T(t,e,n,r){var o,i=-1,a=s,c=!0,l=t.length,f=[],h=e.length;if(!l)return f;n&&(e=function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(o=n,function(t){return o(t)}))),r?(a=u,c=!1):e.length>=200&&(a=p,c=!1,e=new M(e));t:for(;++i<l;){var d=t[i],y=n?n(d):d;if(d=r||0!==d?d:0,c&&y===y){for(var v=h;v--;)if(e[v]===y)continue t;f.push(d)}else a(e,y,r)||f.push(d)}return f}function D(t){return!(!B(t)||(e=t,v&&v in e))&&(H(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?g:n).test(function(t){if(null!=t){try{return b.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t));var e}function q(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function z(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return D(n)?n:void 0}function C(t){return x(t)||function(t){return U(t)&&_.call(t,"callee")&&(!w.call(t,"callee")||"[object Arguments]"==m.call(t))}(t)||!!(E&&t&&t[E])}k.prototype.clear=function(){this.__data__=P?P(null):{}},k.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},k.prototype.get=function(t){var e=this.__data__;if(P){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return _.call(e,t)?e[t]:void 0},k.prototype.has=function(t){var e=this.__data__;return P?void 0!==e[t]:_.call(e,t)},k.prototype.set=function(t,e){return this.__data__[t]=P&&void 0===e?"__lodash_hash_undefined__":e,this},O.prototype.clear=function(){this.__data__=[]},O.prototype.delete=function(t){var e=this.__data__,n=j(e,t);return!(n<0)&&(n==e.length-1?e.pop():R.call(e,n,1),!0)},O.prototype.get=function(t){var e=this.__data__,n=j(e,t);return n<0?void 0:e[n][1]},O.prototype.has=function(t){return j(this.__data__,t)>-1},O.prototype.set=function(t,e){var n=this.__data__,r=j(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},S.prototype.clear=function(){this.__data__={hash:new k,map:new(A||O),string:new k}},S.prototype.delete=function(t){return q(this,t).delete(t)},S.prototype.get=function(t){return q(this,t).get(t)},S.prototype.has=function(t){return q(this,t).has(t)},S.prototype.set=function(t,e){return q(this,t).set(t,e),this},M.prototype.add=M.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},M.prototype.has=function(t){return this.__data__.has(t)};var L,W,K=(L=function(t,e){return U(t)?T(t,function t(e,n,r,o,i){var a=-1,s=e.length;for(r||(r=C),i||(i=[]);++a<s;){var u=e[a];n>0&&r(u)?n>1?t(u,n-1,r,o,i):c(i,u):o||(i[i.length]=u)}return i}(e,1,U,!0)):[]},W=I(void 0===W?L.length-1:W,0),function(){for(var t=arguments,e=-1,n=I(t.length-W,0),r=Array(n);++e<n;)r[e]=t[W+e];e=-1;for(var o=Array(W+1);++e<W;)o[e]=t[e];return o[W]=r,a(L,this,o)});var x=Array.isArray;function F(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!H(t)}function U(t){return function(t){return!!t&&"object"==typeof t}(t)&&F(t)}function H(t){var e=B(t)?m.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function B(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=K}).call(this,n(25))},202:function(t,e,n){},203:function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=n(0),c=n(204),l={width:"100%",height:"100%",padding:0,border:0};function p(t){return t.clientWidth}function f(t){return t.clientHeight}t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getHeight,n=void 0===e?f:e,h=t.getWidth,d=void 0===h?p:h,y=t.containerStyle,v=void 0===y?l:y,b=t.className,_=void 0===b?null:b,m=t.elementResize,g=void 0!==m&&m;return function(t){return function(e){function l(){var t,e,r;i(this,l);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return e=r=a(this,(t=l.__proto__||Object.getPrototypeOf(l)).call.apply(t,[this].concat(s))),r.state={},r.updateDimensions=function(){var t=r.refs.container,e=d(t),o=n(t);e===r.state.containerWidth&&o===r.state.containerHeight||r.setState({containerWidth:e,containerHeight:o})},r.onResize=function(){r.rqf||(r.rqf=r.getWindow().requestAnimationFrame((function(){r.rqf=null,r.updateDimensions()})))},a(r,e)}return s(l,e),o(l,[{key:"getWindow",value:function(){return this.refs.container&&this.refs.container.ownerDocument.defaultView||window}},{key:"componentDidMount",value:function(){if(!this.refs.container)throw new Error("Cannot find container div");this.updateDimensions(),g?c(this.refs.container,this.updateDimensions):this.getWindow().addEventListener("resize",this.onResize,!1)}},{key:"componentWillUnmount",value:function(){this.getWindow().removeEventListener("resize",this.onResize)}},{key:"getWrappedInstance",value:function(){this.refs.wrappedInstance}},{key:"render",value:function(){var e=this.state,n=e.containerWidth,o=e.containerHeight;return n||o||console.warn("Wrapper div has no height or width, try overriding style with `containerStyle` option"),u.createElement("div",{className:_,style:v,ref:"container"},(n||o)&&u.createElement(t,r({},this.state,this.props,{updateDimensions:this.updateDimensions,ref:"wrappedInstance"})))}}]),l}(u.Component)}}},204:function(t,e){var n=function(){var t=this,e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||function(e){return t.setTimeout(e,20)};return function(t){return e(t)}}(),r=function(){var t=this.cancelAnimationFrame||this.mozCancelAnimationFrame||this.webkitCancelAnimationFrame||this.clearTimeout;return function(e){return t(e)}}();function o(t){var e=t.target||t.srcElement;e.__resizeRAF__&&r(e.__resizeRAF__),e.__resizeRAF__=n((function(){var n=e.__resizeTrigger__;n.__resizeListeners__.forEach((function(e){e.call(n,t)}))}))}e=function(t,e){var n,r=this.document,i=r.attachEvent;if("undefined"!==typeof navigator&&(n=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!t.__resizeListeners__)if(t.__resizeListeners__=[],i)t.__resizeTrigger__=t,t.attachEvent("onresize",o);else{"static"===getComputedStyle(t).position&&(t.style.position="relative");var a=t.__resizeTrigger__=r.createElement("object");a.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),a.setAttribute("class","resize-sensor"),a.__resizeElement__=t,a.onload=function(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",o)},a.type="text/html",n&&t.appendChild(a),a.data="about:blank",n||t.appendChild(a)}t.__resizeListeners__.push(e)};t.exports="undefined"===typeof window?e:e.bind(window),t.exports.unbind=function(t,e){var n=document.attachEvent;e?t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1):t.__resizeListeners__=[],t.__resizeListeners__.length||(n?t.detachEvent("onresize",o):(t.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",o),delete t.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,t.__resizeTrigger__=!t.removeChild(t.__resizeTrigger__)),delete t.__resizeListeners__)}},58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(59);var u={position:"relative"},c=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.setRef=n.setRef.bind(n),n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidUpdate",value:function(t){!t.active&&this.props.active&&(0,s.confetti)(this.container,this.props.config)}},{key:"setRef",value:function(t){this.container=t}},{key:"render",value:function(){return a.default.createElement("div",{className:this.props.className,style:u,ref:this.setRef})}}]),e}(i.Component);e.default=c},59:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.confetti=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},a,s(e)),u=n.elementCount,c=n.colors,l=n.width,p=n.height,f=n.perspective,h=n.angle,d=n.spread,y=n.startVelocity,v=n.decay,b=n.dragFriction,_=n.duration,m=n.stagger,g=n.random;t.style.perspective=f;var N=r(t,u,c,l,p),w=N.map((function(t){return{element:t,physics:o(h,d,y,g)}}));return i(t,w,b,v,_,m)};function r(t,e,n,r,o){return Array.from({length:e}).map((function(e,i){var a=document.createElement("div"),s=n[i%n.length];return a.style["background-color"]=s,a.style.width=r,a.style.height=o,a.style.position="absolute",a.style.willChange="transform, opacity",a.style.visibility="hidden",t.appendChild(a),a}))}function o(t,e,n,r){var o=t*(Math.PI/180),i=e*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*r(),wobbleSpeed:.1+.1*r(),velocity:.5*n+r()*n,angle2D:-o+(.5*i-r()*i),angle3D:-Math.PI/4+r()*(Math.PI/2),tiltAngle:r()*Math.PI,tiltAngleSpeed:.1+.3*r()}}function i(t,e,n,r,o,i){var a=void 0;return new Promise((function(s){requestAnimationFrame((function u(c){a||(a=c);var l=c-a,p=a===c?0:(c-a)/o;e.slice(0,Math.ceil(l/i)).forEach((function(t){!function(t,e,n,r){t.physics.x+=Math.cos(t.physics.angle2D)*t.physics.velocity,t.physics.y+=Math.sin(t.physics.angle2D)*t.physics.velocity,t.physics.z+=Math.sin(t.physics.angle3D)*t.physics.velocity,t.physics.wobble+=t.physics.wobbleSpeed,r?t.physics.velocity*=r:t.physics.velocity-=t.physics.velocity*n,t.physics.y+=3,t.physics.tiltAngle+=t.physics.tiltAngleSpeed;var o=t.physics,i=o.x,a=o.y,s=o.z,u=o.tiltAngle,c=o.wobble,l="translate3d("+(i+10*Math.cos(c))+"px, "+(a+10*Math.sin(c))+"px, "+s+"px) rotate3d(1, 1, 1, "+u+"rad)";t.element.style.visibility="visible",t.element.style.transform=l,t.element.style.opacity=1-e}(t,p,n,r)})),c-a<o?requestAnimationFrame(u):(e.forEach((function(e){if(e.element.parentNode===t)return t.removeChild(e.element)})),s())}))}))}var a={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function s(t){return!t.stagger&&t.delay&&(t.stagger=t.delay),t}}}]);
//# sourceMappingURL=9.9097c6c2.chunk.js.map