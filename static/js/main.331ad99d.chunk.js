(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(13),i=n.n(a),r=(n(23),n(17)),o=n(5),d=n(10),l=n(7),j=n(11),u=n(14),h=n(15),b=n(18),O=n(16),x=n(12),p=n(1),g=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={value:"1"},s}return Object(h.a)(n,[{key:"isSelected",value:function(e){return e.props.value===this.state.value}},{key:"selectTab",value:function(e,t){this.setState({value:t}),this.props.onChange(e,t)}},{key:"getHeader",value:function(e){var t=this;return e.map((function(e,n){var s=t.isSelected(e)?m:v;return Object(p.jsx)("span",{className:"tab",onClick:function(n){return t.selectTab(n,e.props.value)},style:0===n?s:Object.assign({},s),children:e.props.header},e.props.value)}))}},{key:"render",value:function(){var e=this,t=this.props.children,n=s.Children.toArray(t);return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:f,children:this.getHeader(n)}),Object(p.jsx)("div",{style:{borderTop:"none"},children:x.a.find(n,(function(t){return e.isSelected(t)}))})]})}}]),n}(s.Component);g.defaultProps={onChange:x.a.noop};var f={display:"flex",overflow:"hidden"},v={padding:"1em 7px",textAlign:"center",fontWeight:"600",letterSpacing:"1px",transition:"all .3s"},m=Object.assign({},v,{borderBottom:"none"});function k(e){var t=e.children,n=e.value;return Object(p.jsx)("div",{className:"".concat("1"===n?"open":"2"===n?"running":"finished"," "),children:t})}var y=function(e){var t,n=e.category,s=e.icon,c=e.getLength;return Object(p.jsxs)("div",{className:"header header-".concat(n),children:[Object(p.jsxs)("h3",{className:"center",children:[Object(p.jsx)("span",{className:"center icon",children:s}),Object(p.jsxs)("span",{children:[(t=n,t.charAt(0).toUpperCase()+t.slice(1))," Tasks"]})]}),Object(p.jsx)("div",{className:"number",children:c(n)})]})},N=function(e){var t,n=e.icon,s=e.category,c=e.getLength;return Object(p.jsxs)("div",{className:"tab-header",children:[Object(p.jsxs)("div",{className:"center",children:[Object(p.jsx)("div",{className:"center icon",children:n}),Object(p.jsx)("span",{children:(t=s,t.charAt(0).toUpperCase()+t.slice(1))})]}),Object(p.jsx)("div",{children:c(s)})]})},S=n(4),T=function(e){var t=e.addTask,n=e.hideForm,c=Object(s.useState)(""),a=Object(o.a)(c,2),i=a[0],r=a[1],d=Object(s.useState)(""),j=Object(o.a)(d,2),u=j[0],h=j[1],b=Object(s.useState)(""),O=Object(o.a)(b,2),x=O[0],g=O[1];return Object(p.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),i?u?(n(),t(i,x,u),r(""),h(""),g("")):alert("please add a time"):alert("please add a task")},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(S.d,{size:15,color:"rgb(40,40,40)"}),Object(p.jsx)("input",{type:"text",placeholder:"New Task",value:i,onChange:function(e){return r(e.target.value)}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(S.d,{size:15,color:"rgb(40,40,40)"}),Object(p.jsx)("input",{type:"text",placeholder:"Details",value:x,onChange:function(e){return g(e.target.value)}})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(S.d,{size:15,color:"rgb(40,40,40)"}),Object(p.jsx)("input",{type:"text",placeholder:"Time",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(p.jsxs)("button",{type:"submit",children:["CREATE ",Object(p.jsx)(l.a,{})]})]})},C=function(e){var t=e.task,n=e.deleteTask,s=e.changeStatus,c=e.status;return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"task",children:[Object(p.jsx)("h3",{children:t.text}),Object(p.jsx)("p",{className:"details",children:t.details}),Object(p.jsxs)("div",{className:"time",children:[Object(p.jsx)(S.c,{}),Object(p.jsx)("p",{children:t.time})]}),Object(p.jsxs)("div",{className:"task-footer",children:[n&&Object(p.jsx)("button",{className:"delete-btn",onClick:function(){return n(t.id)},children:"delete"}),"open"===c&&Object(p.jsxs)("button",{className:"select-btn",onClick:function(){return s(t.id,"running")},children:["select\xa0",Object(p.jsx)(S.b,{})]}),"running"===c&&Object(p.jsxs)("button",{className:"stopped-btn",onClick:function(){return s(t.id,"open")},children:[Object(p.jsx)(S.a,{}),"\xa0stopped"]}),"running"===c&&Object(p.jsxs)("button",{className:"finished-btn",onClick:function(){return s(t.id,"finished")},children:["finished\xa0",Object(p.jsx)(S.b,{})]})]})]})})},L=function(e){var t=e.category,n=e.tasks,c=e.addTask,a=e.changeStatus,i=e.deleteTask,r=Object(s.useState)(!1),d=Object(o.a)(r,2),l=d[0],j=d[1],u=function(){j(!l)};return Object(p.jsxs)("div",{className:"category ".concat(t),children:[n.filter((function(e){return e.status===t})).map((function(e){return Object(p.jsx)(C,{task:e,status:t,deleteTask:i,changeStatus:a},e.id)})),"open"===t&&Object(p.jsx)("button",{onClick:u,className:"round",children:Object(p.jsx)("span",{className:"center",children:Object(p.jsx)(S.e,{size:20})})}),"open"===t&&l&&Object(p.jsx)(T,{addTask:c,hideForm:u})]})},z=[{id:1,text:"Site configuration",details:"Configure the site on the internal clients production environment",time:"Jan 4th",status:"open"},{id:2,text:"New feature",details:"Add the pop-up promotion feature",time:"Jan 15th",status:"open"},{id:3,text:"release the beta version ",details:"to selected internal users",time:"Jan 1st",status:"open"},{id:4,text:"Verification",details:"Verify the expected response times",time:"Feb 2nd",status:"running"},{id:5,text:"Verification",details:"Verify the quote for the next story",time:"Dec 28th",status:"finished"},{id:6,text:"Structure set up",details:"Set up the initial structure of the sites first page",time:"Dec 20th",status:"finished"},{id:7,text:"Approval",details:"Receive the internal clients approval for the structure",time:"Feb 11th",status:"running"},{id:8,text:"Report",details:"Code the reports generated by the site related transactions",time:"Dec 15th",status:"finished"}];var F=function(){var e=Object(s.useState)(z),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("storedTasks"));e.length>0&&c(e)}),[]),Object(s.useEffect)((function(){localStorage.setItem("storedTasks",JSON.stringify(n))}),[n]);var a=function(e,t,n){var s={id:Math.floor(5e3*Math.random()),text:e,details:t,time:n,status:"open"};c((function(e){return[].concat(Object(r.a)(e),[s])}))},i=function(e){c(n.filter((function(t){return t.id!==e})))},u=function(e,t){c(n.map((function(n){return n.id===e&&(n.status=t),n})))},h=function(e){return n.filter((function(t){return t.status===e})).length};return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"large-visible",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{category:"open",getLength:h,icon:Object(p.jsx)(d.a,{size:18})}),Object(p.jsx)(L,{category:"open",tasks:n,addTask:a,changeStatus:u,deleteTask:i})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{category:"running",getLength:h,icon:Object(p.jsx)(l.b,{size:16})}),Object(p.jsx)(L,{category:"running",tasks:n,changeStatus:u})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{category:"finished",getLength:h,icon:Object(p.jsx)(j.a,{size:18})}),Object(p.jsx)(L,{category:"finished",tasks:n,deleteTask:i})]})]}),Object(p.jsx)("div",{className:"small-visible",children:Object(p.jsxs)(g,{children:[Object(p.jsx)(k,{value:"1",header:Object(p.jsx)(N,{icon:Object(p.jsx)(d.a,{}),category:"open",getLength:h}),children:Object(p.jsx)(L,{category:"open",tasks:n,addTask:a,changeStatus:u,deleteTask:i})}),Object(p.jsx)(k,{value:"2",header:Object(p.jsx)(N,{icon:Object(p.jsx)(l.b,{}),category:"running",getLength:h}),children:Object(p.jsx)(L,{category:"running",tasks:n,changeStatus:u})}),Object(p.jsx)(k,{value:"3",header:Object(p.jsx)(N,{icon:Object(p.jsx)(j.a,{size:18}),category:"finished",getLength:h}),children:Object(p.jsx)(L,{category:"finished",tasks:n,deleteTask:i})})]})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),A()}},[[26,1,2]]]);
//# sourceMappingURL=main.331ad99d.chunk.js.map