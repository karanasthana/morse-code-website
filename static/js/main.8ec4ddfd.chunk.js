(this["webpackJsonpmorse-code-website"]=this["webpackJsonpmorse-code-website"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/background.589a73a1.jpg"},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(3),r=n.n(i),s=(n(14),n(4)),c=n(5),l=n(1),d=n(8),h=n(7),u=(n(15),n(6)),m=n.n(u),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).morseCodes={0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--..",".":".-.-.-",",":"--..--","?":"..--..","!":"-.-.--","-":"-....-","/":"-..-.","@":".--.-.","(":"-.--.",")":"-.--.-"},o.state={name:""},o.onChangeText=function(e){var t=e.target.value;o.setState({name:t});var n=o.getMorseCode(t);o.setState({morseCode:n})},o.getMorseCode=function(e){for(var t=e,n="",a=0;a<t.length;a++){var i=t.charAt(a);n+=(" "===i?"\xa0\xa0\xa0":"."===i?"\xa0\xa0\xa0\xa0\xa0\xa0\xa0":o.morseCodes[i])||""}return n},o.onChangeText=o.onChangeText.bind(Object(l.a)(o)),o.getMorseCode=o.getMorseCode.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{backgroundImage:"url(".concat(m.a,")"),width:"100vw",height:"100vh"}},a.a.createElement("div",{style:{position:"absolute",top:"15vh",justifyContent:"center",width:"100%",display:"flex"}},a.a.createElement("input",{style:{height:"4rem",width:"auto",minWidth:"250px",maxWidth:"80vw",fontSize:"4rem"},onChange:this.onChangeText})),a.a.createElement("div",{style:{position:"absolute",bottom:"15vh",justifyContent:"center",width:"100%",display:"flex"}},a.a.createElement("div",{style:{minHeight:"4rem",width:"auto",minWidth:"250px",maxWidth:"80vw",fontSize:"3rem",backgroundColor:"black",color:"white"}},this.state.morseCode)),a.a.createElement("div",{style:{position:"absolute",bottom:0,backgroundColor:"white",width:"100%",justifyContent:"center",display:"flex",fontStyle:"italic"}},"\xa9 Karan Asthana \xa9"))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8ec4ddfd.chunk.js.map