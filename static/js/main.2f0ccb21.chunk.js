(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{23:function(e,t,s){},26:function(e,t,s){"use strict";s.r(t);var n=s(3),c=s.n(n),a=s(13),i=s.n(a),r=(s(23),s(17)),o=s(5),l=s(10),d=s(7),j=s(11),u=s(14),b=s(15),h=s(18),O=s(16),f=s(12),x=s(1),p=function(e){Object(h.a)(s,e);var t=Object(O.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={value:"1"},n}return Object(b.a)(s,[{key:"isSelected",value:function(e){return e.props.value===this.state.value}},{key:"selectTab",value:function(e,t){this.setState({value:t}),this.props.onChange(e,t)}},{key:"getHeader",value:function(e){var t=this;return e.map((function(e,s){var n=t.isSelected(e)?g:v;return Object(x.jsx)("span",{className:"tab",onClick:function(s){return t.selectTab(s,e.props.value)},style:0===s?n:Object.assign({},n),children:e.props.header},e.props.value)}))}},{key:"render",value:function(){var e=this,t=this.props.children,s=n.Children.toArray(t);return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{style:k,children:this.getHeader(s)}),Object(x.jsx)("div",{style:{borderTop:"none"},children:f.a.find(s,(function(t){return e.isSelected(t)}))})]})}}]),s}(n.Component);p.defaultProps={onChange:f.a.noop};var k={display:"flex",overflow:"hidden"},v={padding:"1em 7px",textAlign:"center",fontWeight:"600",letterSpacing:"1px",transition:"all .3s"},g=Object.assign({},v,{borderBottom:"none"});function m(e){var t=e.children,s=e.value;return Object(x.jsx)("div",{className:"".concat("1"===s?"open":"2"===s?"running":"finished"," "),children:t})}var T=s(4),N=function(e){var t=e.addTask,s=e.hideForm,c=Object(n.useState)(""),a=Object(o.a)(c,2),i=a[0],r=a[1],l=Object(n.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],h=Object(n.useState)(""),O=Object(o.a)(h,2),f=O[0],p=O[1];return Object(x.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),i?u?(s(),t(i,f,u),r(""),b(""),p("")):alert("please add a time"):alert("please add a task")},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(T.b,{size:15,color:"rgb(40,40,40)"}),Object(x.jsx)("input",{type:"text",placeholder:"New Task",value:i,onChange:function(e){return r(e.target.value)}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(T.b,{size:15,color:"rgb(40,40,40)"}),Object(x.jsx)("input",{type:"text",placeholder:"Details",value:f,onChange:function(e){return p(e.target.value)}})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(T.b,{size:15,color:"rgb(40,40,40)"}),Object(x.jsx)("input",{type:"text",placeholder:"Time",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(x.jsxs)("button",{type:"submit",children:["CREATE ",Object(x.jsx)(d.a,{})]})]})},y=function(e){var t=e.task,s=e.deleteTask,n=e.selectTask,c=e.stoppedTask,a=e.finishedTask;return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"task",children:[Object(x.jsx)("h3",{children:t.text}),Object(x.jsx)("p",{className:"details",children:t.details}),Object(x.jsxs)("div",{className:"time",children:[Object(x.jsx)(T.a,{}),Object(x.jsx)("p",{children:t.time})]}),Object(x.jsxs)("div",{className:"task-footer",children:[s&&Object(x.jsx)("button",{className:"delete-btn",onClick:function(){return s(t.id)},children:"delete"}),n&&Object(x.jsx)("button",{className:"select-btn",onClick:function(){return n(t.id)},children:"select"}),c&&Object(x.jsx)("button",{className:"stopped-btn",onClick:function(){return c(t.id)},children:"stopped"}),a&&Object(x.jsx)("button",{className:"finished-btn",onClick:function(){return a(t.id)},children:"finished"})]})]},t.id)})},C=function(e){var t=e.tasks,s=e.addTask,c=e.selectTask,a=e.deleteTask,i=Object(n.useState)(!1),r=Object(o.a)(i,2),l=r[0],d=r[1],j=function(){d(!l)};return console.log(t),Object(x.jsxs)("div",{className:"category open",children:[t.filter((function(e){return"open"===e.status})).map((function(e){return Object(x.jsx)(y,{task:e,deleteTask:a,selectTask:c})})),Object(x.jsx)("button",{onClick:j,className:"round",children:Object(x.jsx)("span",{className:"center",children:Object(x.jsx)(T.c,{size:20})})}),l&&Object(x.jsx)(N,{addTask:s,hideForm:j})]})},S=function(e){var t=e.tasks,s=e.finishedTask,n=e.stoppedTask;return Object(x.jsx)("div",{className:"category running",children:t.filter((function(e){return"running"===e.status})).map((function(e){return Object(x.jsx)(y,{task:e,finishedTask:s,stoppedTask:n})}))})},L=function(e){var t=e.tasks,s=e.deleteTask;return Object(x.jsx)("div",{className:"category finished",children:t.filter((function(e){return"finished"===e.status})).map((function(e){return Object(x.jsx)(y,{task:e,deleteTask:s})}))})},z=function(e){var t,s=e.category,n=e.icon,c=e.getLength;return Object(x.jsxs)("div",{className:"header header-".concat(s),children:[Object(x.jsxs)("h3",{className:"center",children:[Object(x.jsx)("span",{className:"center icon",children:n}),Object(x.jsxs)("span",{children:[(t=s,t.charAt(0).toUpperCase()+t.slice(1))," Tasks"]})]}),Object(x.jsx)("div",{className:"number",children:c(s)})]})},A=function(e){var t,s=e.icon,n=e.category,c=e.getLength;return Object(x.jsxs)("div",{className:"tab-header",children:[Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{className:"center icon",children:s}),Object(x.jsx)("span",{children:(t=n,t.charAt(0).toUpperCase()+t.slice(1))})]}),Object(x.jsx)("div",{children:c(n)})]})};var F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],c=t[1];Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("storedTasks"));e&&c(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("storedTasks",JSON.stringify(s))}),[s]);var a=function(e,t,s){console.log("appAddTask",e);var n={id:Math.floor(5e3*Math.random()),text:e,details:t,time:s,status:"open"};c((function(e){return[].concat(Object(r.a)(e),[n])}))},i=function(e){console.log("deleteTask",e),c(s.filter((function(t){return t.id!==e})))},u=function(e){console.log("selectTask",e),c(s.map((function(t){return t.id===e&&(t.status="running"),t})))},b=function(e){console.log("stoppedTask",e),c((function(t){return t.map((function(t){return t.id===e&&(t.status="open"),t}))}))},h=function(e){console.log("finishedTask",e),c((function(t){return t.map((function(t){return t.id===e&&(t.status="finished"),t}))}))},O=function(e){return s.filter((function(t){return t.status===e})).length};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"app",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(z,{category:"open",getLength:O,icon:Object(x.jsx)(l.a,{size:18})}),Object(x.jsx)(C,{tasks:s,addTask:a,selectTask:u,deleteTask:i})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(z,{category:"running",getLength:O,icon:Object(x.jsx)(d.b,{size:16})}),Object(x.jsx)(S,{tasks:s,finishedTask:h,stoppedTask:b})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(z,{category:"finished",getLength:O,icon:Object(x.jsx)(j.a,{size:16})}),Object(x.jsx)(L,{tasks:s,deleteTask:i})]})]}),Object(x.jsx)("div",{className:"tabs",children:Object(x.jsxs)(p,{children:[Object(x.jsx)(m,{value:"1",header:Object(x.jsx)(A,{icon:Object(x.jsx)(l.a,{}),category:"open",getLength:O}),children:Object(x.jsx)(C,{tasks:s,addTask:a,selectTask:u,deleteTask:i})}),Object(x.jsx)(m,{value:"2",header:Object(x.jsx)(A,{icon:Object(x.jsx)(d.b,{}),category:"running",getLength:O}),children:Object(x.jsx)(S,{tasks:s,finishedTask:h,stoppedTask:b})}),Object(x.jsx)(m,{value:"3",header:Object(x.jsx)(A,{icon:Object(x.jsx)(j.a,{}),category:"finished",getLength:O}),children:Object(x.jsx)(L,{tasks:s,deleteTask:i})})]})})]})},E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,27)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),E()}},[[26,1,2]]]);
//# sourceMappingURL=main.2f0ccb21.chunk.js.map