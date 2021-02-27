(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),s=n.n(c),i=(n(13),n(2)),o=n(3),l=n(5),d=n(4),u=(n(14),n(7),n(15),n(0));var j=function(e){var t=e.value,n=e.inputChange;return Object(u.jsx)("div",{style:{marginTop:"25px"},children:Object(u.jsx)("input",{type:"text",class:"form-control",id:"searchBar",placeholder:"Enter name",value:t,name:"searchInput",onChange:n})})};var h=function(e){var t=e.children,n=e.inputChange,a=e.value;return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{children:"Employee Directory"}),Object(u.jsx)("p",{style:{textAlign:"center"},children:"Click on the the arrows to sort information or use the search bar to narrow results by name"})]})}),Object(u.jsxs)("div",{className:"sizing",children:[Object(u.jsx)(j,{inputChange:n,value:a}),t]})]})};n(17);var m=function(e){var t=e.source,n=e.firstName,a=e.lastName,r=e.email,c=e.dob;return Object(u.jsxs)("div",{className:"row employeeRow",children:[Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("img",{src:t,alt:"employee",className:"employeePic"})})}),Object(u.jsxs)("p",{className:"col-md-3 textCenter",children:[n," ",a]}),Object(u.jsx)("p",{className:"col-md-3 textCenter",children:r}),Object(u.jsx)("p",{className:"col-md-3 textCenter",children:c})]})},p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:this.props.data.map((function(e){return Object(u.jsx)(m,{source:e.picture.large,firstName:e.name.first,lastName:e.name.last,email:e.email,dob:new Date(e.dob.date).toLocaleDateString("en-US").split("/").join("-")})}))})}}]),n}(r.a.Component);n(18);var b=function(){return Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("div",{className:"spinner-border",role:"status",children:Object(u.jsx)("span",{className:"sr-only",children:"Loading..."})})})};var f=function(e){var t=e.sort,n=e.icon;return Object(u.jsxs)("div",{className:"row top",children:[Object(u.jsx)("p",{className:"col-md-3 center categories",style:{borderLeftStyle:"none"},children:"Image"}),Object(u.jsxs)("p",{className:"col-md-3 center categories",children:["Name",Object(u.jsx)("span",{onClick:function(){return t()},children:n})]}),Object(u.jsx)("p",{className:"col-md-3 center categories",children:"Email"}),Object(u.jsx)("p",{className:"col-md-3 center categories",children:"DOB"})]})},x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[],isLoaded:!1,counter:0,searchInput:""},e.sort=function(){var t=e.state.data.sort((function(e,t){var n=e.name.first.toUpperCase(),a=t.name.first.toUpperCase();return n<a?-1:n>a?1:0}));0===e.state.counter&&e.setState({data:t,counter:1}),1===e.state.counter&&e.setState({data:t.reverse(),counter:0})},e.inputChange=function(t){var n=t.target.value;console.log(n),e.setState({searchInput:n})},e.dataFilter=function(){return e.state.data.filter((function(t){return t.name.first.toLowerCase().includes(e.state.searchInput.toLowerCase())}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){for(var e=this,t=[],n=0;n<16;n++)fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(n){var a=n.results;t.push(a[0]),e.setState({data:t})}));this.setState({isLoaded:!0})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.searchInput;return!1===this.state.isLoaded||16!==t.length?Object(u.jsxs)(h,{children:[Object(u.jsx)("h3",{style:{textAlign:"Center"},children:"Fetching data..."}),Object(u.jsx)("br",{}),Object(u.jsx)(b,{})]}):Object(u.jsxs)(h,{inputChange:this.inputChange,value:n,children:[Object(u.jsx)(f,{sort:this.sort,icon:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-up",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{"fill-rule":"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})}),Object(u.jsx)(p,{data:this.dataFilter()})]})}}]),n}(a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(19);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.2b71958f.chunk.js.map