(this.webpackJsonpyournews=this.webpackJsonpyournews||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/nonImage.1b3aafab.png"},64:function(e,t,a){e.exports=a.p+"static/media/logo.213bf5e2.png"},70:function(e,t,a){e.exports=a(99)},75:function(e,t,a){},76:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),i=a(54),l=(a(75),a(11)),c=a(12),u=a(14),m=a(13),d=a(15),h=(a(76),a(77),a(21)),p=a(28),y=a(8),g=function(e){var t=e.user,a=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Login",style:{fontSize:"1.2em",textDecoration:"none"}},"Login")),n=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Register",style:{fontSize:"1.2em",textDecoration:"none"}},"Register")),o="",s=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/",style:{fontSize:"1.2em",textDecoration:"none"}},"HOME")),i="",l="";return t.isSignedIn&&(a=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Login",style:{fontSize:"1.2em",textDecoration:"none"}},"Logout")),n="",o=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/MyNews",style:{fontSize:"1.2em",textDecoration:"none"}},"MyNews")),s="",i=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Weather",style:{fontSize:"1.2em",textDecoration:"none",color:"gold"}},"Weather")),l=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Corona",style:{fontSize:"1.2em",textDecoration:"none",color:"red"}},"COVID-19"))),r.a.createElement(y.a,{variant:"pills",activeKey:"/home"},s,a,n,o,i,l)},E=a(7),f=a(17),v=(a(83),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onUsernameChange=function(e){var t=e.target.value;a.setState({userName:t})},a.onPasswordChange=function(e){var t=e.target.value;a.setState({password:t})},a.onSubmitClick=function(e){e.preventDefault(),fetch("https://pure-sands-27033.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.userName,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.onLoginComplete(e),a.props.history.push("/MyNews")):alert(e)}))},a.onGuestBtnClick=function(){a.props.onLoginComplete("guest"),a.props.history.push("/MyNews")},a.state={userName:"",password:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoginStart()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"loginContainer"},r.a.createElement(E.a,{id:"loginForm"},r.a.createElement("h1",{id:"loginTitle"},"Login"),r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,null,"Username"),r.a.createElement(E.a.Control,{type:"name",placeholder:"Enter name",onChange:function(t){return e.onUsernameChange(t)}})),r.a.createElement(E.a.Group,{controlId:"formBasicPassword"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{type:"password",placeholder:"Password",onChange:function(t){return e.onPasswordChange(t)}})),r.a.createElement(E.a.Group,{controlId:"formLink"},r.a.createElement(h.b,{to:"/Register"},"Not a member? register here!")),r.a.createElement(f.a,{id:"guestBtn",variant:"dark",onClick:this.onGuestBtnClick},"Enter as Guest"),r.a.createElement(f.a,{id:"signInBtn",variant:"primary",type:"submit",onClick:this.onSubmitClick},"Sign In")))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){var t=e.target.value;a.setState({userName:t})},a.onEmailChange=function(e){var t=e.target.value;a.setState({email:t})},a.onCategoryChange=function(e){var t=e.target.value.toLowerCase();a.setState({category:t})},a.onPasswordChange=function(e){var t=e.target.value;a.setState({password:t});var n=a.state.rePassword;a.matchPasswords(t,n)},a.onRePasswordChange=function(e){var t=e.target.value;a.setState({rePassword:t});var n=a.state.password;a.matchPasswords(n,t)},a.matchPasswords=function(e,t){t===e?(a.setState({matchPasswordText:"Password and Re-Password does match"}),a.setState({matchPassStyle:{color:"green",fontWeight:"bold"}})):(a.setState({matchPasswordText:"Password and Re-Password doesn't match"}),a.setState({matchPassStyle:{color:"red",fontWeight:"bold"}}))},a.onSubmitClick=function(e){if(e.preventDefault(),a.state.userName.length>0&&a.state.email.length>0&&a.state.category.length>0&&a.state.password===a.state.rePassword&&a.state.checkBox)fetch("https://pure-sands-27033.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email.toLowerCase(),password:a.state.password,username:a.state.userName,category:a.state.category})}).then((function(e){return e.json()})).then((function(e){"ERROR"===e.severity?"users_username_key"===e.constraint?alert("The username is exist"):"login_email_key"===e.constraint?alert("The email is exist"):alert(e.detail):(a.props.onRegisterComplete(e),a.props.history.push("/MyNews"))}));else{var t="";0===a.state.userName.length&&(t+="Enter an valid name \n"),0===a.state.email.length&&(t+="Enter an valid email \n"),a.state.category||(t+="Select a category \n"),a.state.checkBox||(t+="Accept the conditions & terms box \n"),alert(t)}},a.state={userName:"",email:"",password:"",rePassword:"",checkBox:!1,matchPasswordText:"",matchPassStyle:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement(E.a,{style:{padding:"30px",borderRadius:"3px",border:"1px solid #ccc",margin:"10px"}},r.a.createElement("h1",null,"Register"),r.a.createElement(E.a.Group,{controlId:"formName"},r.a.createElement(E.a.Label,null,"Username"),r.a.createElement(E.a.Control,{type:"text",placeholder:"Enter username",onChange:this.onNameChange}),r.a.createElement(E.a.Text,{className:"text-muted"},"Advice : what is your nickname ? add something ;)")),r.a.createElement(E.a.Group,{controlId:"formBasicEmail"},r.a.createElement(E.a.Label,null,"Email address"),r.a.createElement(E.a.Control,{type:"email",placeholder:"Enter email",onChange:this.onEmailChange}),r.a.createElement(E.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(E.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(E.a.Label,null,"Category"),r.a.createElement(E.a.Control,{as:"select",multiple:!0,onChange:this.onCategoryChange},r.a.createElement("option",null,"General"),r.a.createElement("option",null,"Sports"),r.a.createElement("option",null,"Entertainment"),r.a.createElement("option",null,"Technology"),r.a.createElement("option",null,"Business")),r.a.createElement(E.a.Text,{className:"text-muted"},"It's your news! choose your specific category")),r.a.createElement(E.a.Group,{controlId:"formPassword"},r.a.createElement(E.a.Label,null,"Password"),r.a.createElement(E.a.Control,{type:"password",placeholder:"Password",onChange:this.onPasswordChange})),r.a.createElement(E.a.Group,{controlId:"formRepatPassword"},r.a.createElement(E.a.Label,null,"Re-Password"),r.a.createElement(E.a.Control,{type:"password",placeholder:"Password",onChange:this.onRePasswordChange}),r.a.createElement(E.a.Text,{style:this.state.matchPassStyle,className:"text"},this.state.matchPasswordText)),r.a.createElement(E.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(E.a.Check,{type:"checkbox",label:"I have read all conditions & terms",onClick:function(){return e.setState({checkBox:!e.state.checkBox})}})),r.a.createElement(f.a,{style:{width:"100%"},variant:"primary",type:"submit",onClick:this.onSubmitClick},"Sign Up")))}}]),t}(n.Component),b=a(50),w=a(27),S=a(40),k=a(51),x=a(3),O=a(24),j=a(32),T=a.n(j);a(84);var I=function(e){for(var t=e.news,a=e.isSignedIn,o=e.onLoginBtnClick,s=Object(n.useState)(!1),i=Object(k.a)(s,2),l=i[0],c=i[1],u=Object(n.useState)(0),m=Object(k.a)(u,2),d=m[0],h=m[1],p=Object(n.useState)(""),y=Object(k.a)(p,2),g=y[0],E=y[1],v=function(){return c(!1)},C=function(e){h(e),c(!0)},b=T.a,w=[],S=5;S<t.length;S++)w.push(t[S]);var j=w.map((function(e,t){return w[t].urlToImage&&(b=w[t].urlToImage),r.a.createElement(x.a,{id:"cardContainer",key:t},r.a.createElement(x.a.Img,{id:"cardImg",variant:"top",src:b}),r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,{id:"cardTitle"},w[t].title),!0===a?r.a.createElement("div",{id:"buttons"},r.a.createElement(f.a,{variant:"primary",style:{cursor:"pointer"},onClick:function(){return C(t)}},"Summary"),r.a.createElement(f.a,{variant:"outline-success",style:{margin:"10px"},onClick:function(){return window.open("https://api.whatsapp.com/send?text="+w[t].url,"_blank").focus()}},"Share via Whatsapp")):r.a.createElement("div",{id:"buttons"},r.a.createElement(f.a,{variant:"primary",style:{cursor:"pointer"},onClick:function(){E("Full articles are available for registered friends only"),C(t)}},"Summary"),r.a.createElement(f.a,{variant:"outline-success",style:{margin:"10px"},onClick:function(){E("You can't share in guest mode"),C(t)}},"Share via Whatsapp"))))}));return b=w[d].urlToImage?w[d].urlToImage:T.a,r.a.createElement("div",{id:"cardsModalContainer"},!0===a?r.a.createElement(O.a,{id:"modal",show:l,onHide:v,size:"lg",animation:"true"},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,{style:{textAlign:"center"}},w[d].title)),r.a.createElement(O.a.Body,null,r.a.createElement("h3",{style:{color:"gray",fontSize:"11px",textAlign:"right"}},w[d].author,r.a.createElement("br",null)),r.a.createElement("img",{src:b,style:{width:"100%"},alt:"YourNews"}),r.a.createElement("p",{style:{textAlign:"center"}},w[d].description),r.a.createElement("div",{style:{color:"gray",fontSize:"11px"}},w[d].source.name,r.a.createElement("br",null),w[d].publishedAt)),r.a.createElement(O.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:v},"Close"),r.a.createElement(f.a,{variant:"primary",onClick:function(){return window.open(w[d].url,"_blank").focus()},style:{marginBlock:"10px"}},"To article"),r.a.createElement(f.a,{variant:"outline-success",onClick:function(){return window.open("https://api.whatsapp.com/send?text="+w[d].url,"_blank").focus()}},"Share via Whatsapp"))):r.a.createElement(O.a,{show:l,onHide:v},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,"YourNews")),r.a.createElement(O.a.Body,null,r.a.createElement("p",null,g)),r.a.createElement(O.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:v},"Close"),r.a.createElement(f.a,{variant:"primary",onClick:function(){return o("login")}},"Login"),r.a.createElement(f.a,{variant:"dark",onClick:function(){return o("register")}},"Register"))),r.a.createElement("div",{id:"cardsContainer"},j))},N=(a(85),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.onCloseToast=function(){a.setState({toastDisplay:!1})},a.onSelectCategory=function(e){var t=a.state.url+e,n=new Request(t);fetch(n).then((function(e){return e.json()})).then((function(e){a._isMounted&&a.setState({data:e})}))},a.onLoginBtnClick=function(e){"login"===e?a.props.history.push("/Login"):a.props.history.push("/Register")},a.state={category:"",apiKey:"abc72145994a45f19cd1781fe040f011",url:"https://newsapi.org/v2/top-headlines?country=il&apiKey=abc72145994a45f19cd1781fe040f011&category=",data:{},toastDisplay:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props.user.category,a=this.state.url+t,n=new Request(a);fetch(n).then((function(e){return e.json()})).then((function(t){e._isMounted&&e.setState({data:t})})).catch((function(t){alert("Server is too busy now "),e.props.history.push("/Corona")}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){if(this.props.user.isSignedIn||this.props.history.push("/"),!this.state.data.articles)return r.a.createElement(w.a,{animation:"border"});for(var e=this.state.data.articles,t=(T.a,[]),a=0;a<5;a++)t.push(e[a]);var n=t.map((function(a,n){var o=T.a;return t[n].urlToImage&&(o=t[n].urlToImage),r.a.createElement(b.a.Item,{onClick:function(){return window.open(e[n].url,"_blank").focus()},key:n},r.a.createElement("img",{id:"mainImg",src:o,alt:"slide"}),r.a.createElement(b.a.Caption,null,r.a.createElement("h3",{id:"mainTitles"},t[n].title),r.a.createElement("p",{id:"mainDesc"},t[n].description)))}));return r.a.createElement("div",{id:"myNewsContainer"},r.a.createElement(S.a,{id:"toastDisplay",show:this.state.toastDisplay,onClose:this.onCloseToast},r.a.createElement(S.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"YourNews"),r.a.createElement("small",null,"now")),!0===this.props.user.isSignedIn?r.a.createElement(S.a.Body,null,"Hello, ",this.props.user.username," ! your'e logged in."):r.a.createElement(S.a.Body,null,"Hello, ",this.props.user.username," ! your'e in limited version.",r.a.createElement("br",null),r.a.createElement("a",{href:"Login"}," Login now"))),r.a.createElement(b.a,{id:"mainArticles"},n),r.a.createElement("div",{id:"navContainer",style:{margin:"20px"}},!0===this.props.user.isSignedIn?r.a.createElement(y.a,{id:"navGroup",variant:"pills",defaultActiveKey:this.props.user.category,onSelect:this.onSelectCategory},r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"general"},"General")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"sports"},"Sports")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"technology"},"Technology")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"entertainment"},"Entertainment")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"business"},"Business"))):r.a.createElement(y.a,{id:"navGroup",variant:"pills",defaultActiveKey:this.props.user.category,onSelect:this.onSelectCategory},r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"general"},"General")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"sports",disabled:!0},"Sports")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"technology",disabled:!0},"Technology")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"entertainment",disabled:!0},"Entertainment")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"business",disabled:!0},"Business")))),r.a.createElement(I,{news:this.state.data.articles,isSignedIn:this.props.user.isSignedIn,onLoginBtnClick:this.onLoginBtnClick}))}}]),t}(n.Component)),L=(a(86),function(e){switch(new Date(e).getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";default:return""}}),D=function(){var e=(new Date).getHours();return e>6&&e<19?"Day":"Night"},R=function(e){return e<10&&(e="0"+e),"https://developer.accuweather.com/sites/default/files/"+e+"-s.png"},B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).fetchFiveDaysArray=function(){var e="https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+ +a.props.currentSelectedCityKey+"?apikey="+a.props.apiKey+"&metric=true",t=new Request(e);fetch(t).then((function(e){return e.json()})).then((function(e){var t,n=e.DailyForecasts,r=[],o=[],s=[],i=[],l=[];for(var c in n){"0"===c&&"Night"===D()?r.push(R(n[c].Night.Icon)):r.push(R(n[c].Day.Icon)),o.push(L(n[c].Date)),s.push((t=n[c].Date,new Date(t).getDate()+"/"+(new Date(t).getMonth()+1)));var u=n[c].Temperature.Minimum.Value,m=n[c].Temperature.Maximum.Value;i.push(u),l.push(m)}a.setState({iconsByDay:r}),a.setState({days:o}),a.setState({shortDates:s}),a.setState({minTempsArray:i}),a.setState({maxTempsArray:l})}))},a.state={days:[],shortDates:[],minTempsArray:[],maxTempsArray:[],iconsByDay:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchFiveDaysArray()}},{key:"componentDidUpdate",value:function(e,t){this.props.currentSelectedCityKey!==e.currentSelectedCityKey&&this.fetchFiveDaysArray()}},{key:"render",value:function(){var e=this,t=this.state.shortDates.map((function(t,a){return r.a.createElement(x.a,{style:{width:"12rem",marginTop:"15px",marginRight:"10px"},key:a},r.a.createElement(x.a.Header,null,r.a.createElement(x.a.Title,null,e.state.days[a]),e.state.shortDates[a]),r.a.createElement(x.a.Body,null,r.a.createElement("img",{src:e.state.iconsByDay[a],alt:"icon"}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(x.a.Text,{style:{color:"#ccc",marginRight:"3px"}},e.state.minTempsArray[a]+"\xb0"),r.a.createElement(x.a.Text,{style:{color:"gray"}},e.state.maxTempsArray[a]+"\xb0"))))}));return r.a.createElement("div",{className:"row justify-content-center"},t)}}]),t}(n.Component),P=a(49),K=a.n(P),M=a(69),A=(a(88),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).promiseOptions=function(e){return new Promise((function(t){setTimeout((function(){t(a.filterCities(e))}),1500)}))},a.onSelect=function(e){a.props.onSelectCity(e)},a.state={selectedCityKey:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"filterCities",value:function(e){var t,a,n,r;return K.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=new Request("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=V5FfcZrrJ0SQGbZSnLx3JSJZ0AuMWfng&q="+e),a=[],0===e.length){o.next=16;break}return o.prev=3,o.next=6,K.a.awrap(fetch(t));case 6:return n=o.sent,o.next=9,K.a.awrap(n.json());case 9:r=o.sent,a=r.filter((function(e){return"City"===e.Type})).map((function(e){return{value:e.LocalizedName,label:e.LocalizedName+" , "+e.Country.LocalizedName,key:e.Key,country:e.Country.LocalizedName}})),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(3),console.log("server requests is limited");case 16:return o.abrupt("return",a.filter((function(t){return t.label.toLowerCase().includes(e.toLowerCase())})));case 17:case"end":return o.stop()}}),null,null,[[3,13]])}},{key:"render",value:function(){return this.props.currentCity?!0===this.props.isSignedIn?r.a.createElement("div",{id:"selectCityInput"},r.a.createElement(M.a,{id:"selectBox",cacheOptions:!0,defaultOptions:!0,defaultInputValue:this.props.currentCity,loadOptions:this.promiseOptions,onChange:this.onSelect,placeholder:"Enter a city"})):r.a.createElement("div",{id:"selectCityInput"},"For multiple weather location options - login ",r.a.createElement("a",{href:"/Login"},"here")):r.a.createElement("h1",null,"loading...")}}]),t}(n.Component)),H=a(89),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.onRefreshClick=function(){var e=new Date;a.setState({todayDate:e.toDateString()}),a.setState({currTime:e.toLocaleTimeString()}),H.getCurrentPosition((function(e,t){if(e)throw e;var n=t.coords.latitude,r=t.coords.longitude,o="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="+a.state.apiKey+"&q="+n+","+r,s=new Request(o);fetch(s).then((function(e){return e.json()})).then((function(e){a._isMounted&&(a.setState({currentSelectedCityKey:e.Key}),a.fetchCurrentTemperature(),a.setState({city:e.LocalizedName}),a.setState({country:e.Country.LocalizedName}))}))}))},a.fetchCurrentTemperature=function(){var e="https://dataservice.accuweather.com/currentconditions/v1/"+a.state.currentSelectedCityKey+"?apikey="+a.state.apiKey+"&metric=true",t=new Request(e);fetch(t).then((function(e){return e.json()})).then((function(e){a.setState({temp:e[0].Temperature.Metric.Value+"\xb0"}),a.setState({description:e[0].WeatherText});var t=e[0].WeatherIcon;t<10&&(t="0"+t),a.setState({iconURL:"https://developer.accuweather.com/sites/default/files/"+t+"-s.png"})}))},a.onSelectCity=function(e){a.setState({currentSelectedCityKey:e.key,city:e.value,country:e.country})},a.state={todayDate:"",description:"",city:"",country:"",temp:"",currTime:"",apiKey:"6OwPQ2hmTrq3buEVnQrF2UddMVhyYun2",currentSelectedCityKey:"",iconURL:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.onRefreshClick()}},{key:"componentDidUpdate",value:function(e,t){this.state.currentSelectedCityKey!==t.currentSelectedCityKey&&this.fetchCurrentTemperature()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return this.props.user.isSignedIn||this.props.history.push("/Login"),this.state.currTime&&this.state.currentSelectedCityKey?r.a.createElement("div",{id:"weatherContainer"},r.a.createElement(A,{currentCity:this.state.city,onSelectCity:this.onSelectCity,isSignedIn:this.props.user.isSignedIn}),r.a.createElement("div",{id:"mainWeather"},r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,r.a.createElement("h1",{style:{fontSize:55}}," ",this.state.temp," "),r.a.createElement(x.a.Text,null,this.state.description)),r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,null,r.a.createElement("div",null,r.a.createElement("img",{src:this.state.iconURL,alt:"icon"})),this.state.city+" , "+this.state.country),r.a.createElement(x.a.Text,null,this.state.todayDate+" | "+this.state.currTime)))),r.a.createElement(B,{apiKey:this.state.apiKey,currentSelectedCityKey:this.state.currentSelectedCityKey})):r.a.createElement(w.a,{animation:"border"})}}]),t}(n.Component),_=(a(94),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.fetchCountry=function(){var e=new Request("https://api.covid19api.com/summary");fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.Countries[81];a.setState({country:t.Country,totalCases:t.TotalConfirmed,newCases:t.NewConfirmed,totalDeaths:t.TotalDeaths,newDeaths:t.NewDeaths,newRecorverd:t.NewRecovered,totalRecovered:t.TotalRecovered,global:e.Global})})).catch((function(e){console.log(e)}))},a.state={country:"",totalDeaths:"",newDeaths:"",totalCases:"",newCases:"",totalRecovered:"",newRecorverd:"",global:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchCountry()}},{key:"render",value:function(){return this.state.country?r.a.createElement("div",{id:"mainCovid"},r.a.createElement("h1",{id:"countryTitle"},this.state.country),r.a.createElement("div",{id:"stats"},r.a.createElement(x.a,{bg:"dark",text:"white"},r.a.createElement(x.a.Header,{style:{fontWeight:"bold"}},"Total cases"),r.a.createElement(x.a.Body,null,this.state.totalCases)),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,"New cases"),r.a.createElement(x.a.Body,null,this.state.newCases>0?"+"+this.state.newCases:0)),r.a.createElement(x.a,{bg:"danger",text:"white"},r.a.createElement(x.a.Header,{style:{fontWeight:"bold"}},"Total deaths"),r.a.createElement(x.a.Body,null,this.state.totalDeaths)),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,"New deaths"),r.a.createElement(x.a.Body,null,this.state.newDeaths>0?"+"+this.state.newDeaths:0)),r.a.createElement(x.a,{bg:"success",text:"white"},r.a.createElement(x.a.Header,{style:{fontWeight:"bold"}},"Total Recorverd"),r.a.createElement(x.a.Body,null,this.state.totalRecovered)),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,"New Recorverd"),r.a.createElement(x.a.Body,null,this.state.newRecorverd>0?"+"+this.state.newRecorverd:0)),r.a.createElement(x.a,{bg:"primary",text:"white"},r.a.createElement(x.a.Header,{style:{fontWeight:"bold"}},"Active cases"),r.a.createElement(x.a.Body,null,this.state.totalCases-this.state.totalRecovered))),r.a.createElement("h1",{id:"countryTitle"},"World"),r.a.createElement("div",{id:"stats"},r.a.createElement(x.a,{bg:"dark",text:"white"},r.a.createElement(x.a.Header,{style:{fontWeight:"bold"}},"Total cases"),r.a.createElement(x.a.Body,null,this.state.global.TotalConfirmed)),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,"New cases"),r.a.createElement(x.a.Body,null,this.state.global.NewConfirmed>0?"+"+this.state.global.NewConfirmed:0)),r.a.createElement(x.a,{bg:"danger",text:"white"},r.a.createElement(x.a.Header,{style:{fontWeight:"bold"}},"Total deaths"),r.a.createElement(x.a.Body,null,this.state.global.TotalDeaths)),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,"New deaths"),r.a.createElement(x.a.Body,null,this.state.global.NewDeaths>0?"+"+this.state.global.NewDeaths:0)),r.a.createElement(x.a,{bg:"success",text:"white"},r.a.createElement(x.a.Header,{style:{fontWeight:"bold"}},"Total Recorverd"),r.a.createElement(x.a.Body,null,this.state.global.TotalRecovered)),r.a.createElement(x.a,null,r.a.createElement(x.a.Header,null,"New Recorverd"),r.a.createElement(x.a.Body,null,this.state.global.NewRecovered>0?"+"+this.state.global.NewRecovered:0)),r.a.createElement(x.a,{bg:"primary",text:"white"},r.a.createElement(x.a.Header,{bg:"primary",text:"white",style:{fontWeight:"bold"}},"Active cases"),r.a.createElement(x.a.Body,null,this.state.global.TotalConfirmed-this.state.global.TotalRecovered)))):r.a.createElement(w.a,{animation:"border"})}}]),t}(n.Component)),W=a(64),z=a.n(W),U=a(65),F=(a(95),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){!0===e.props.user.isSignedIn?e.props.history.push("/MyNews"):e.props.history.push("/Login")}),2e3)}},{key:"render",value:function(){return r.a.createElement("div",{id:"logo",className:"ma4 mt0 tc br4"},r.a.createElement("div",null,r.a.createElement("img",{id:"logoImg",style:{paddingTop:"5px",animation:"pop-in ".concat(U.easings.easeOutExpo," 2000ms forwards")},alt:"logo",src:z.a})),r.a.createElement(w.a,{animation:"border"}))}}]),t}(n.Component)),q=a(47),V=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onLogOutClick=function(){},e.onLoginStart=function(){e.props.onConnection(!1,"","")},e.onRegisterComplete=function(t){e.props.onConnection(!0,t.username,t.category)},e.onLoginComplete=function(t){console.log(t),"guest"===t?e.props.onConnection("guest","guest","general"):e.props.onConnection(!0,t.username,t.category)},e.state={user:{username:"",category:""}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{history:p.b,basename:"/yournews"},r.a.createElement("div",{className:"App"},r.a.createElement(g,{onLogOutClick:this.onLogOutClick,user:this.props}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(F,Object.assign({user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Login",render:function(t){return r.a.createElement(v,Object.assign({onLoginStart:e.onLoginStart,onLoginComplete:e.onLoginComplete,user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Register",render:function(t){return r.a.createElement(C,Object.assign({onRegisterComplete:e.onRegisterComplete,user:e.props},t))}}),r.a.createElement(p.a,{path:"/MyNews",render:function(t){return r.a.createElement(N,Object.assign({user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Weather",render:function(t){return r.a.createElement(G,Object.assign({user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Corona",render:function(t){return r.a.createElement(_,Object.assign({user:e.props},t))}}))))}}]),t}(n.Component),J=Object(q.b)((function(e){return{isSignedIn:e.localStorage.isSignedIn,username:e.localStorage.username,category:e.localStorage.category}}),(function(e){return{onConnection:function(t,a,n){e({type:"CHANGE_IS_SIGN_IN",payload:t}),e(function(e){return{type:"CHANGE_USERNAME",payload:e}}(a)),e(function(e){return{type:"CHANGE_CATEGORY",payload:e}}(n))}}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(67),Q=a.n(Y),Z=a(20),$=a(34),X={isSignedIn:"",username:"",category:""},ee={key:"root",storage:Q.a,whitelist:["localStorage"]},te=Object(Z.c)({localStorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_IS_SIGN_IN":return Object.assign({},e,{isSignedIn:t.payload});case"CHANGE_USERNAME":return Object.assign({},e,{username:t.payload});case"CHANGE_CATEGORY":return Object.assign({},e,{category:t.payload});default:return e}}}),ae=Object($.a)(ee,te),ne=a(68),re=Object(i.createLogger)(),oe=Object(Z.d)(ae,Object(Z.a)(re)),se=Object($.b)(oe);s.a.render(r.a.createElement(q.a,{store:oe},r.a.createElement(ne.a,{persistor:se},r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.7bfba4e6.chunk.js.map