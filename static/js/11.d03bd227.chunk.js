(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[11],{227:function(e,t,n){"use strict";n.r(t);var i=n(44),o=n(14),r=n(0),a=n.n(r),u=n(187),s=n(66),m=(n(204),n(67)),d=n(68),c=n(72),l=n(70),h=n(205),b=n.n(h),f=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,this.props.children({containerWidth:this.props.containerWidth,containerHeight:this.props.containerHeight}))}}]),n}(a.a.Component),N=b()()(f),p=n(55),y=n(2),w=n(69),v=n(50);t.default=function(){var e=Object(y.f)(),t=Object(r.useState)(""),n=Object(o.a)(t,2),m=n[0],d=n[1],c=Object(r.useState)([]),l=Object(o.a)(c,2),h=l[0],b=l[1],f=Object(r.useState)(!1),g=Object(o.a)(f,2),A=g[0],k=g[1],C=u.b.fromNote("c5"),E=u.b.fromNote("b5"),j={instrumentName:"acoustic_grand_piano",noteRange:{first:C,last:E},keyboardShortcutOffset:0},O=(u.a.create({firstNote:C,lastNote:E,keyboardConfig:u.a.HOME_ROW}),new(window.AudioContext||window.webkitAudioContext));return Object(r.useEffect)((function(){A&&Object(s.a)(w.b,130)}),[A]),a.a.createElement("div",{className:"Piano Page"},a.a.createElement("button",{style:{fontSize:"14px"},onClick:function(){e.goBack()}},"\ud83e\udc44 Back"),a.a.createElement(s.b,{audioContext:O,instrumentName:j.instrumentName,hostname:"https://d1pzp51pvbm36p.cloudfront.net",render:function(e){var t=e.isLoading,n=e.playNote,o=e.stopNote;e.stopAllNotes;return a.a.createElement("div",null,a.a.createElement("div",{className:"mt-4"},a.a.createElement(N,null,(function(e){var r=e.containerWidth;return a.a.createElement("div",null,t&&a.a.createElement("h3",null,"Loading..."),a.a.createElement(u.c,{noteRange:j.noteRange,playNote:function(e){n(e),function(e){var t=w.a.find((function(t){return t.midiNumber===e})),n=t&&t.note,o=Object(i.a)(h);o.push(n),o.length>8&&(o=o.slice(1,9)),b(o),d(n),"A5 G5 F# G5 G5 F5 E5 F5"===o.join(" ")&&k(!0)}(e)},stopNote:o,disabled:t,width:r}))}))))}}),a.a.createElement("div",null,m),a.a.createElement("div",null,A&&a.a.createElement("div",null,a.a.createElement("h2",null,"DODEEDODODODOO"),a.a.createElement(v.a,null))),a.a.createElement(p.a,{active:A}))}},41:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return c}));var i=n(9),o=n(44),r=n(42),a=function(e){var t=c();t.completedClues.some((function(t){return t===e}))||(t.currentClue=e,t.completedClues=[].concat(Object(o.a)(t.completedClues),[e]),d(t))},u=function(){var e=c(),t=r.a.findIndex((function(t){return t.id===e.currentClue}));if(r.a.length>t+1)return r.a[t+1].id},s=function(e){var t=c();t.name=e,d(t)},m={name:null,progress:[],completedClues:[],instrumentUnlocked:!1},d=function(e){localStorage.setItem("clue-data",JSON.stringify(e))},c=function(){var e=JSON.parse(localStorage.getItem("clue-data")||"{}");return Object(i.a)(Object(i.a)({},m),e)}},42:function(e,t,n){"use strict";t.a=[{id:"eb8dd419-2569-4dde-b13b-1e31134184d4",type:"basic",clue:"Travel to the nearest Black Bean Temple where two spoons meet. There you will find a clue to the whereabouts of the first **magic gem**. Word around town is that you may even find something there to increase your stamina",question:"What is another name for this place?",answers:["caribou","coffee"],successMessage:"[7950 Penn Ave S, Bloomington, MN 55431](https://goo.gl/maps/vpSBssmodBDa4Ezr7)",webAnswer:!0,hint:"Building number of your favorite place to go in the morning"},{id:"1f24fa80-6332-4ce6-87d8-cb00ce022226",type:"basic",clue:"A once a strong and proud warrior now reduced to a mere ornament. Remains defiled, she lost more than just her honor. ",question:"What was she?",answers:["bear"],webAnswer:!0,hint:"Animal"},{id:"f0266dbb-b101-4078-9954-a6df942f5831",type:"basic",clue:"Legends tell of a woodland beast who travelled so very far, passing many mountains, rivers, and trees...beyond the sun and over the horizon. Beneath his path, a great bounty, now sold to this very day in this temple.",question:"How many trees did he pass on his journey?",answers:["11"],webAnswer:!0,hint:"His story was memorialized on the walls within the Temple of the Black Bean. There he is depicted in the middle of his journey. Though it was very hard, I eventually made it home."},{id:"31a874c0-1a05-45ea-82e2-ea79adcf03a3",type:"basic",clue:"Filled with new wisdom and vigor, you are now ready to embark on a journey to three locations. Each one will provide you with an **key** which will guide you to one of the **magic gems**.",question:null,answers:[],webAnswer:!0,hint:null},{id:"435c10bc-8546-4d15-8a86-270f4a335a77",type:"basic",clue:"Deep within the metropolis lies a wondrous place full of Nature\u2019s beauty and splendor. There you will find a wise Sorceress living there who will be able to aid you on your adventure.\r\n\r\nJin, **Mu**, **Shui**, Huo, Tu",question:"Enter the name of the place:",image:"fiveelements",answers:["wood","lake"],webAnswer:!0,successMessage:"[6710 Lake Shore Dr S, Richfield, MN 55423](https://goo.gl/maps/jN9Vs2FVRDYEjpjJA)",hint:"This great sanctuary reserves a safe location for the old world to live on, safe from the ever growing threat of humanity."},{id:"5aa10399-b215-4b90-bf48-49482790ab89",type:"basic",clue:"The temple here is closed, but you can still find a wealth of information just near the entrance.",question:"They say this place is A _____ in the Middle of the City.",image:"fiveelements",answers:["marsh"],webAnswer:!0,hint:"Look for an area near the entrance that has a roof, but only two walls."},{id:"7205280c-56f8-4910-8cde-db69277f030b",type:"basic",clue:'Here in this sanctuary for nature, we remember all those who fought to protect it. Follow the shortest path, keep the water to your left. As you travel through it, you will find many resting points which pay tribute to these individuals. One among them once said, \r\n\r\n"Savour the Past\r\nLive for today\r\nLook forward to the future"',question:"What was their name?",answers:["dorothy","holstrom"],webAnswer:!0,hint:"Start at the entrance and follow the recommended path, look closely at each resting place along the way."},{id:"6e533cb1-63ef-4939-9f92-57220d63ad82",type:"basic",clue:"Legends tell of a benevolent Sorceress who once lived in this wooded sanctuary. They say she returns to assist those in need who are pure of heart. If the stories are true, she rests in at the heart of wood lake. Find her and ask for her aid.",question:"",answers:["yentihw"],webAnswer:!0,hint:"If only there was some way you could walk across the water to the middle of the lake."},{id:"c9fbc8bf-620a-4d29-b5fc-cbe77acb9ebf",type:"basic",clue:"That place where you met your true love, though far from you now, there are many like it here.",question:"What is this place called?",answers:["gamestop"],successMessage:"[34 W 66th St, Richfield, MN 55423](https://goo.gl/maps/urUjK9xuyW9orvpU9)",webAnswer:!0,hint:"A market place for amusements, somewhere next to a rainbow."},{id:"cf6e3e8b-ab3d-494d-a912-f91f494c4e96",type:"basic",clue:"Here in this grand bazaar of amusements awaits one of the three **keys** that will aid you in your quest. Worry not, brave hero...there are many in this land who would see to your success. ",question:"See the store merchant and ask them for that which was left for you to **pick up**.",image:"barcode",answers:["711719519065"],webAnswer:!0,hint:"Enter the barcode number for the item you picked up. If you didn\u2019t get something, try the Help Whistle in your inventory."},{id:"75beaf1b-66d2-44a4-95fb-2867ebbae0c6",type:"basic",clue:"Nice work. There is yet one more **key** you must obtain. Lucky for you, it is very near. Like...if you were playing hot or cold, you could say you are **hot**.",question:"What numerals rest above the enterance?",answers:["26"],webAnswer:!0,successMessage:"[26 W 66th St, Richfield, MN 55423](https://goo.gl/maps/5YSNsk3ED3kuFtf87)",hint:'Your sorceress actually knows the "Hot or Cold" spell. Ask her to try it out.'},{id:"2c2bf8ed-3e80-4da7-8d74-b6dce1f76b1a",type:"basic",clue:"Your final **key** awaits you here. Speak with the merchant and tell them your name, they will have it for you in what they call a **pull box**. Since you are out there working hard trying to save the prince, this one is on the house.",question:"Confirm You have received it by entering the names of the two individuals represented on the front of the **key**",answers:["gambit","rogue"],webAnswer:!0,hint:"Try the Help Whistle in your inventory if you are having trouble."},{id:"c1bf0873-02ad-4f14-8858-9fa25a8583f2",type:"gem-clue",clue:"Now that you possess all three **keys**, you can enter the Echo Temple where you will find the gems. To enter the temple, you must return home and carry with you all three artificacts. When you walk through the door, you will not be in your real home, but an echo of itself in another plane of existence. Prepare yourself for the final trial",question:"Collect the three **magic gems** and enter them below",answers:["orange","lightblue","purple"],successMessage:"Congratulations! You have collected all of the magic gems and you are now ready to face the wizard and save the prince! Go forth brave hero, to the Evil Wizard's Tower/\r\n [821 S Marquette Ave, Minneapolis, MN 55402](https://goo.gl/maps/pXPHWCUb7yCcu2QJA)",webAnswer:!0}]},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){return new Promise((function(t){return setTimeout(t,e)}))}},50:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(8),a=n(41),u=n(42);t.a=function(e){var t=e.primary,n=Object(a.a)();if(!n)return null;var i=u.a[0].id===n;return o.a.createElement(r.b,{to:"/clue/".concat(n)},o.a.createElement("button",{className:"center ".concat(t?"primary":"")},i?"Start":"Continue"))}},55:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(59),a=n.n(r);t.a=function(e){var t=e.active;return o.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},o.a.createElement(a.a,{active:t,config:{spread:120,angle:90}}))}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var i=n(46),o=n.n(i),r=n(86),a=n(47),u=n(21),s=n(67),m=n(68),d=n(72),c=n(70),l=n(0),h=n.n(l),b=n(87),f=n.n(b),N=n(49),p=function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).loadInstrument=function(e){i.setState({instrument:null}),f.a.instrument(i.props.audioContext,e,{format:i.props.format,soundfont:i.props.soundfont,nameToUrl:function(e,t,n){return"".concat(i.props.hostname,"/").concat(t,"/").concat(e,"-").concat(n,".js")}}).then((function(e){i.setState({instrument:e})}))},i.playNote=function(e){i.resumeAudio().then((function(){var t=i.state.instrument.play(e);i.setState({activeAudioNodes:Object.assign({},i.state.activeAudioNodes,Object(u.a)({},e,t))})}))},i.stopNote=function(e){i.resumeAudio().then((function(){i.state.activeAudioNodes[e]&&(i.state.activeAudioNodes[e].stop(),i.setState({activeAudioNodes:Object.assign({},i.state.activeAudioNodes,Object(u.a)({},e,null))}))}))},i.resumeAudio=function(){return"suspended"===i.props.audioContext.state?i.props.audioContext.resume():Promise.resolve()},i.stopAllNotes=function(){i.props.audioContext.resume().then((function(){Object.values(i.state.activeAudioNodes).forEach((function(e){e&&e.stop()})),i.setState({activeAudioNodes:{}})}))},i.state={activeAudioNodes:{},instrument:null},i}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadInstrument(this.props.instrumentName)}},{key:"componentDidUpdate",value:function(e,t){if(e.instrumentName!==this.props.instrumentName&&this.loadInstrument(this.props.instrumentName),t.instrument!==this.state.instrument){if(!this.props.onLoad)return;this.props.onLoad({playNote:this.playNote,stopNote:this.stopNote,stopAllNotes:this.stopAllNotes})}}},{key:"render",value:function(){return this.props.render?this.props.render({isLoading:!this.state.instrument,playNote:this.playNote,stopNote:this.stopNote,stopAllNotes:this.stopAllNotes}):null}}]),n}(h.a.Component);p.defaultProps={format:"mp3",soundfont:"MusyngKite",instrumentName:"acoustic_grand_piano"},t.b=p;var y=function(){var e=Object(a.a)(o.a.mark((function e(t,n){var i,a,u,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.instrument(new AudioContext,"acoustic_grand_piano");case 2:i=e.sent,a=Object(r.a)(t),e.prev=4,a.s();case 6:if((u=a.n()).done){e.next=13;break}return s=u.value,i.play(s),e.next=11,Object(N.a)(n);case 11:e.next=6;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[4,15,18,21]])})));return function(t,n){return e.apply(this,arguments)}}()},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var i=[79,78,75,69,68,76,80,84],o=[{midiNumber:127,note:"G9"},{midiNumber:126,note:"F#"},{midiNumber:125,note:"F9"},{midiNumber:124,note:"E9"},{midiNumber:123,note:"D#"},{midiNumber:122,note:"D9"},{midiNumber:121,note:"C#"},{midiNumber:120,note:"C9"},{midiNumber:119,note:"B8"},{midiNumber:118,note:"A#"},{midiNumber:117,note:"A8"},{midiNumber:116,note:"G#"},{midiNumber:115,note:"G8"},{midiNumber:114,note:"F#"},{midiNumber:113,note:"F8"},{midiNumber:112,note:"E8"},{midiNumber:111,note:"D#"},{midiNumber:110,note:"D8"},{midiNumber:109,note:"C#"},{midiNumber:108,note:"C8"},{midiNumber:107,note:"B7"},{midiNumber:106,note:"A#"},{midiNumber:105,note:"A7"},{midiNumber:104,note:"G#"},{midiNumber:103,note:"G7"},{midiNumber:102,note:"F#"},{midiNumber:101,note:"F7"},{midiNumber:100,note:"E7"},{midiNumber:99,note:"D#"},{midiNumber:98,note:"D7"},{midiNumber:97,note:"C#"},{midiNumber:96,note:"C7"},{midiNumber:95,note:"B6"},{midiNumber:94,note:"A#"},{midiNumber:93,note:"A6"},{midiNumber:92,note:"G#"},{midiNumber:91,note:"G6"},{midiNumber:90,note:"F#"},{midiNumber:89,note:"F6"},{midiNumber:88,note:"E6"},{midiNumber:87,note:"D#"},{midiNumber:86,note:"D6"},{midiNumber:85,note:"C#"},{midiNumber:84,note:"C6"},{midiNumber:83,note:"B5"},{midiNumber:82,note:"A#"},{midiNumber:81,note:"A5"},{midiNumber:80,note:"G#"},{midiNumber:79,note:"G5"},{midiNumber:78,note:"F#"},{midiNumber:77,note:"F5"},{midiNumber:76,note:"E5"},{midiNumber:75,note:"D#"},{midiNumber:74,note:"D5"},{midiNumber:73,note:"C#"},{midiNumber:72,note:"C5"},{midiNumber:71,note:"B4"},{midiNumber:70,note:"A#"},{midiNumber:69,note:"A4"},{midiNumber:68,note:"G#"},{midiNumber:67,note:"G4"},{midiNumber:66,note:"F#"},{midiNumber:65,note:"F4"},{midiNumber:64,note:"E4"},{midiNumber:63,note:"D#"},{midiNumber:62,note:"D4"},{midiNumber:61,note:"C#"},{midiNumber:60,note:"C4"},{midiNumber:59,note:"B3"},{midiNumber:58,note:"A#"},{midiNumber:57,note:"A3"},{midiNumber:56,note:"G#"},{midiNumber:55,note:"G3"},{midiNumber:54,note:"F#"},{midiNumber:53,note:"F3"},{midiNumber:52,note:"E3"},{midiNumber:51,note:"D#"},{midiNumber:50,note:"D3"},{midiNumber:49,note:"C#"},{midiNumber:48,note:"C3"},{midiNumber:47,note:"B2"},{midiNumber:46,note:"A#"},{midiNumber:45,note:"A2"},{midiNumber:44,note:"G#"},{midiNumber:43,note:"G2"},{midiNumber:42,note:"F#"},{midiNumber:41,note:"F2"},{midiNumber:40,note:"E2"},{midiNumber:39,note:"D#"},{midiNumber:38,note:"D2"},{midiNumber:37,note:"C#"},{midiNumber:36,note:"C2"},{midiNumber:35,note:"B1"},{midiNumber:34,note:"A#"},{midiNumber:33,note:"A1"},{midiNumber:32,note:"G#"},{midiNumber:31,note:"G1"},{midiNumber:30,note:"F#"},{midiNumber:29,note:"F1"},{midiNumber:28,note:"E1"},{midiNumber:27,note:"D#"},{midiNumber:26,note:"D1"},{midiNumber:25,note:"C#"},{midiNumber:24,note:"C1"},{midiNumber:23,note:"B0"},{midiNumber:22,note:"A#"},{midiNumber:21,note:"A0"},{midiNumber:20,note:""},{midiNumber:19,note:""},{midiNumber:18,note:""},{midiNumber:17,note:""},{midiNumber:16,note:""},{midiNumber:15,note:""},{midiNumber:14,note:""},{midiNumber:13,note:""},{midiNumber:12,note:""},{midiNumber:11,note:""},{midiNumber:10,note:""},{midiNumber:9,note:""},{midiNumber:8,note:""},{midiNumber:7,note:""},{midiNumber:6,note:""},{midiNumber:5,note:""},{midiNumber:4,note:""},{midiNumber:3,note:""},{midiNumber:2,note:""},{midiNumber:1,note:""},{midiNumber:0,note:""}]}}]);
//# sourceMappingURL=11.d03bd227.chunk.js.map