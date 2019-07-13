(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,n){e.exports=n(68)},66:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(33),i=n.n(r),c=n(19),s=n(6),l=n(7),d=n(9),u=n(8),p=n(10),m=n(15),f=n(11),h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},b={color:"#fff",textDecoration:"none"},g=function(){return o.a.createElement("header",{style:h},o.a.createElement("h1",null,"TodoList"),o.a.createElement(m.b,{style:b,to:"/"},"Home")," ","|"," ",o.a.createElement(m.b,{style:b,to:"/about"},"About"))},v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){var e=n.props.todo.isCompleted;return{textDecoration:e?"line-through":"none",backgroundColor:e?"#28A745":"#fbfbfb",padding:"10px",borderBottom:"1px #ccc dotted",color:e?"#fff":"#000",fontStyle:e?"italic":"normal"}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title,a=e.isCompleted;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",{style:{fontSize:"20px"}},o.a.createElement("img",{src:a?"img/tick.png":"img/empty.png",onClick:this.props.markComplete.bind(this,t)})," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),className:"btn btn-danger btn-sm",style:y},"X")))}}]),t}(a.Component),y={cursor:"pointer",float:"right"},k=v,w=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(k,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(a.Component),E=n(36),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.inputChange=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.submitForm=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submitForm,style:{display:"flex"}},o.a.createElement("input",{type:"text",style:{flex:"10",padding:"10px"},name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.inputChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary",style:{flex:"1"}}))}}]),t}(a.Component),O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"TodoList app v1.0.0 It is part of a React crash course"))},j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={hour:(new Date).getHours(),min:(new Date).getMinutes(),sec:(new Date).getSeconds(),day:(new Date).getDay(),date:(new Date).getDate(),month:(new Date).getMonth()},n.displayClock=function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),o=e.getSeconds(),r=e.getDay(),i=e.getDate(),c=e.getMonth();switch(t<10&&(t="0"+t),a<10&&(a="0"+a),o<10&&(o="0"+o),r){case 0:r="SUN";break;case 1:r="MON";break;case 2:r="TUE";break;case 3:r="WED";break;case 4:r="THUR";break;case 5:r="FRI";break;case 6:r="SAT"}switch(c){case 0:c="JAN";break;case 1:c="FEB";break;case 2:c="MAR";break;case 3:c="APR";break;case 4:c="MAY";break;case 5:c="JUN";break;case 6:c="JULY";break;case 7:c="AUG";break;case 8:c="SEP";break;case 9:c="OCT";break;case 10:c="NOV";break;case 11:c="DEC"}n.setState({hour:t,min:a,sec:o,day:r,date:i,month:c})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.displayClock,100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return o.a.createElement("div",{style:S},o.a.createElement("span",{style:{fontSize:"25px",float:"left"}},this.state.hour,":",this.state.min,":",this.state.sec),o.a.createElement("span",{style:{fontSize:"25px",float:"right"}},this.state.day,"-",this.state.date,"-",this.state.month))}}]),t}(a.Component),S={fontFamily:"Orbitron",border:"3px solid #007ACC",borderRadius:"5px",height:"45px"},A=j,x=n(37),D=n.n(x),T=n(13),N=n.n(T),U=(n(66),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.isCompleted=1===t.isCompleted?0:1,1===t.isCompleted?N.a.get("/todos/update.do?id=".concat(e,"&isCompleted=1")).then(function(e){}):N.a.get("/todos/update.do?id=".concat(e,"&isCompleted=0")).then(function(e){})),t})})},n.delTodo=function(e){N.a.get("/todos/delete.do?id=".concat(e)).then(function(t){return n.setState({todos:Object(c.a)(n.state.todos.filter(function(t){return t.id!==e}))})})},n.addTodo=function(e){var t=new FormData;t.append("id",D.a.v4()),t.append("uid",1),t.append("title",e),t.append("isCompleted",0),N.a.post("/todos/add.do",t).then(function(e){console.log(e.data.data),n.setState({todos:[e.data.data].concat(Object(c.a)(n.state.todos))})})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/todos/list.do").then(function(t){e.setState({todos:t.data.data})})}},{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(g,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{addTodo:e.addTodo}),o.a.createElement(w,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}),o.a.createElement(A,null))}}),o.a.createElement(f.a,{path:"/about",component:O}))))}}]),t}(a.Component)),M=(n(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");M?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.f1d761a8.chunk.js.map