(this.webpackJsonpyournews=this.webpackJsonpyournews||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/nonImage.1b3aafab.png"},64:function(e,t,a){e.exports=a.p+"static/media/logo.213bf5e2.png"},70:function(e,t,a){e.exports=a(99)},75:function(e,t,a){},76:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),s=a(54),i=(a(75),a(13)),c=a(14),u=a(16),m=a(15),d=a(17),h=(a(76),a(77),a(22)),p=a(29),y=a(5),E=function(e){var t=e.user,a=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Login",style:{fontSize:"1.2em",textDecoration:"none"}},"Login")),n=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Register",style:{fontSize:"1.2em",textDecoration:"none"}},"Register")),o="",l=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/",style:{fontSize:"1.2em",textDecoration:"none"}},"HOME")),s="",i="";return t.isSignedIn&&(a=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Login",style:{fontSize:"1.2em",textDecoration:"none"}},"Logout")),n="",o=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/MyNews",style:{fontSize:"1.2em",textDecoration:"none"}},"MyNews")),l="",s=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Weather",style:{fontSize:"1.2em",textDecoration:"none",color:"gold"}},"Weather")),i=r.a.createElement(y.a.Item,{style:{margin:10}},r.a.createElement(h.b,{to:"/Corona",style:{fontSize:"1.2em",textDecoration:"none",color:"red"}},"COVID-19"))),r.a.createElement(y.a,{variant:"pills",activeKey:"/home"},l,a,n,o,s,i)},g=a(8),f=a(9),v=(a(83),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onUsernameChange=function(e){var t=e.target.value;a.setState({userName:t})},a.onPasswordChange=function(e){var t=e.target.value;a.setState({password:t})},a.onSubmitClick=function(e){e.preventDefault(),fetch("https://pure-sands-27033.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.userName,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id?(a.props.onLoginComplete(e),a.props.history.push("/MyNews")):alert(e)}))},a.onGuestBtnClick=function(){a.props.onLoginComplete("guest"),a.props.history.push("/MyNews")},a.state={userName:"",password:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoginStart()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"loginContainer"},r.a.createElement(g.a,{id:"loginForm"},r.a.createElement("h1",{id:"loginTitle"},"Login"),r.a.createElement(g.a.Group,{controlId:"formBasicEmail"},r.a.createElement(g.a.Label,null,"Username"),r.a.createElement(g.a.Control,{type:"name",placeholder:"Enter name",onChange:function(t){return e.onUsernameChange(t)}})),r.a.createElement(g.a.Group,{controlId:"formBasicPassword"},r.a.createElement(g.a.Label,null,"Password"),r.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:function(t){return e.onPasswordChange(t)}})),r.a.createElement(g.a.Group,{controlId:"formLink"},r.a.createElement(h.b,{to:"/Register"},"Not a member? register here!")),r.a.createElement(f.a,{id:"guestBtn",variant:"dark",onClick:this.onGuestBtnClick},"Enter as Guest"),r.a.createElement(f.a,{id:"signInBtn",variant:"primary",type:"submit",onClick:this.onSubmitClick},"Sign In")))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){var t=e.target.value;a.setState({userName:t})},a.onEmailChange=function(e){var t=e.target.value;a.setState({email:t})},a.onCategoryChange=function(e){var t=e.target.value.toLowerCase();a.setState({category:t})},a.onPasswordChange=function(e){var t=e.target.value;a.setState({password:t});var n=a.state.rePassword;a.matchPasswords(t,n)},a.onRePasswordChange=function(e){var t=e.target.value;a.setState({rePassword:t});var n=a.state.password;a.matchPasswords(n,t)},a.matchPasswords=function(e,t){t===e?(a.setState({matchPasswordText:"Password and Re-Password does match"}),a.setState({matchPassStyle:{color:"green",fontWeight:"bold"}})):(a.setState({matchPasswordText:"Password and Re-Password doesn't match"}),a.setState({matchPassStyle:{color:"red",fontWeight:"bold"}}))},a.onSubmitClick=function(e){if(e.preventDefault(),a.state.userName.length>0&&a.state.email.length>0&&a.state.category.length>0&&a.state.password===a.state.rePassword&&a.state.checkBox)fetch("https://pure-sands-27033.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email.toLowerCase(),password:a.state.password,username:a.state.userName,category:a.state.category})}).then((function(e){return e.json()})).then((function(e){"ERROR"===e.severity?"users_username_key"===e.constraint?alert("The username is exist"):"login_email_key"===e.constraint?alert("The email is exist"):alert(e.detail):(a.props.onRegisterComplete(e),a.props.history.push("/MyNews"))}));else{var t="";0===a.state.userName.length&&(t+="Enter an valid name \n"),0===a.state.email.length&&(t+="Enter an valid email \n"),a.state.category||(t+="Select a category \n"),a.state.checkBox||(t+="Accept the conditions & terms box \n"),alert(t)}},a.state={userName:"",email:"",password:"",rePassword:"",checkBox:!1,matchPasswordText:"",matchPassStyle:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement(g.a,{style:{padding:"30px",borderRadius:"3px",border:"1px solid #ccc",margin:"10px"}},r.a.createElement("h1",null,"Register"),r.a.createElement(g.a.Group,{controlId:"formName"},r.a.createElement(g.a.Label,null,"Username"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Enter username",onChange:this.onNameChange}),r.a.createElement(g.a.Text,{className:"text-muted"},"Advice : what is your nickname ? add something ;)")),r.a.createElement(g.a.Group,{controlId:"formBasicEmail"},r.a.createElement(g.a.Label,null,"Email address"),r.a.createElement(g.a.Control,{type:"email",placeholder:"Enter email",onChange:this.onEmailChange}),r.a.createElement(g.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(g.a.Label,null,"Category"),r.a.createElement(g.a.Control,{as:"select",multiple:!0,onChange:this.onCategoryChange},r.a.createElement("option",null,"General"),r.a.createElement("option",null,"Sports"),r.a.createElement("option",null,"Entertainment"),r.a.createElement("option",null,"Technology"),r.a.createElement("option",null,"Business")),r.a.createElement(g.a.Text,{className:"text-muted"},"It's your news! choose your specific category")),r.a.createElement(g.a.Group,{controlId:"formPassword"},r.a.createElement(g.a.Label,null,"Password"),r.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:this.onPasswordChange})),r.a.createElement(g.a.Group,{controlId:"formRepatPassword"},r.a.createElement(g.a.Label,null,"Re-Password"),r.a.createElement(g.a.Control,{type:"password",placeholder:"Password",onChange:this.onRePasswordChange}),r.a.createElement(g.a.Text,{style:this.state.matchPassStyle,className:"text"},this.state.matchPasswordText)),r.a.createElement(g.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(g.a.Check,{type:"checkbox",label:"I have read all conditions & terms",onClick:function(){return e.setState({checkBox:!e.state.checkBox})}})),r.a.createElement(f.a,{style:{width:"100%"},variant:"primary",type:"submit",onClick:this.onSubmitClick},"Sign Up")))}}]),t}(n.Component),b=a(28),w=a(27),S=a(51),k=a(3),x=a(12),T=a(30),I=a.n(T);a(84);var O=function(e){var t=e.news,a=e.isSignedIn,o=e.onLoginBtnClick,l=e.category,s=Object(n.useState)(!1),i=Object(S.a)(s,2),c=i[0],u=i[1],m=Object(n.useState)(0),d=Object(S.a)(m,2),h=d[0],p=d[1],y=Object(n.useState)(""),E=Object(S.a)(y,2),g=E[0],v=E[1],C=function(){return u(!1)},b=function(e){p(e),u(!0)},w=I.a;if(!t){for(var T=[],O=function(e){T.push(r.a.createElement(k.a,{id:"cardContainer",key:e},r.a.createElement(k.a.Img,{id:"cardImg",variant:"top",src:w}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{id:"cardTitle"},"Title #",e," - ",l," "),!0===a?r.a.createElement("div",{id:"buttons"},r.a.createElement(f.a,{variant:"primary",style:{cursor:"pointer"},onClick:function(){return b(e)}},"Summary"),r.a.createElement(f.a,{variant:"outline-success",style:{margin:"10px"},onClick:function(){return window.open("https://api.whatsapp.com/send?text=Title_"+e,"_blank").focus()}},"Share via Whatsapp")):r.a.createElement("div",{id:"buttons"},r.a.createElement(f.a,{variant:"primary",style:{cursor:"pointer"},onClick:function(){v("Full articles are available for registered friends only"),b(e)}},"Summary"),r.a.createElement(f.a,{variant:"outline-success",style:{margin:"10px"},onClick:function(){v("You can't share in guest mode"),b(e)}},"Share via Whatsapp")))))},j=1;j<11;j++)O(j);return r.a.createElement("div",{id:"cardsModalContainer"},!0===a?r.a.createElement(x.a,{id:"modal",show:c,onHide:C,size:"lg",animation:"true"},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,{style:{textAlign:"center"}},"title # ",h)),r.a.createElement(x.a.Body,null,r.a.createElement("h3",{style:{color:"gray",fontSize:"11px",textAlign:"right"}},"Dudi Levi",r.a.createElement("br",null)),r.a.createElement("img",{src:w,style:{width:"100%"},alt:"YourNews"}),r.a.createElement("p",{style:{textAlign:"center"}},"This is demo verison! "),r.a.createElement("div",{style:{color:"gray",fontSize:"11px"}},"YourNews",r.a.createElement("br",null),"08/06/2020")),r.a.createElement(x.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:C},"Close"),r.a.createElement(f.a,{variant:"primary",style:{marginBlock:"10px"}},"To article"),r.a.createElement(f.a,{variant:"outline-success",onClick:function(){return window.open("https://api.whatsapp.com/send?text=Title_"+h,"_blank").focus()}},"Share via Whatsapp"))):r.a.createElement(x.a,{show:c,onHide:C},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"YourNews")),r.a.createElement(x.a.Body,null,r.a.createElement("p",null,g)),r.a.createElement(x.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:C},"Close"),r.a.createElement(f.a,{variant:"primary",onClick:function(){return o("login")}},"Login"),r.a.createElement(f.a,{variant:"dark",onClick:function(){return o("register")}},"Register"))),r.a.createElement("div",{id:"cardsContainer"},T))}for(var N=[],L=5;L<t.length;L++)N.push(t[L]);var D=N.map((function(e,t){return N[t].urlToImage&&(w=N[t].urlToImage),r.a.createElement(k.a,{id:"cardContainer",key:t},r.a.createElement(k.a.Img,{id:"cardImg",variant:"top",src:w}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,{id:"cardTitle"},N[t].title),!0===a?r.a.createElement("div",{id:"buttons"},r.a.createElement(f.a,{variant:"primary",style:{cursor:"pointer"},onClick:function(){return b(t)}},"Summary"),r.a.createElement(f.a,{variant:"outline-success",style:{margin:"10px"},onClick:function(){return window.open("https://api.whatsapp.com/send?text="+N[t].url,"_blank").focus()}},"Share via Whatsapp")):r.a.createElement("div",{id:"buttons"},r.a.createElement(f.a,{variant:"primary",style:{cursor:"pointer"},onClick:function(){v("Full articles are available for registered friends only"),b(t)}},"Summary"),r.a.createElement(f.a,{variant:"outline-success",style:{margin:"10px"},onClick:function(){v("You can't share in guest mode"),b(t)}},"Share via Whatsapp"))))}));return w=N[h].urlToImage?N[h].urlToImage:I.a,r.a.createElement("div",{id:"cardsModalContainer"},!0===a?r.a.createElement(x.a,{id:"modal",show:c,onHide:C,size:"lg",animation:"true"},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,{style:{textAlign:"center"}},N[h].title)),r.a.createElement(x.a.Body,null,r.a.createElement("h3",{style:{color:"gray",fontSize:"11px",textAlign:"right"}},N[h].author,r.a.createElement("br",null)),r.a.createElement("img",{src:w,style:{width:"100%"},alt:"YourNews"}),r.a.createElement("p",{style:{textAlign:"center"}},N[h].description),r.a.createElement("div",{style:{color:"gray",fontSize:"11px"}},N[h].source.name,r.a.createElement("br",null),N[h].publishedAt)),r.a.createElement(x.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:C},"Close"),r.a.createElement(f.a,{variant:"primary",onClick:function(){return window.open(N[h].url,"_blank").focus()},style:{marginBlock:"10px"}},"To article"),r.a.createElement(f.a,{variant:"outline-success",onClick:function(){return window.open("https://api.whatsapp.com/send?text="+N[h].url,"_blank").focus()}},"Share via Whatsapp"))):r.a.createElement(x.a,{show:c,onHide:C},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement(x.a.Title,null,"YourNews")),r.a.createElement(x.a.Body,null,r.a.createElement("p",null,g)),r.a.createElement(x.a.Footer,null,r.a.createElement(f.a,{variant:"secondary",onClick:C},"Close"),r.a.createElement(f.a,{variant:"primary",onClick:function(){return o("login")}},"Login"),r.a.createElement(f.a,{variant:"dark",onClick:function(){return o("register")}},"Register"))),r.a.createElement("div",{id:"cardsContainer"},D))},j=(a(85),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.onCloseToast=function(){a.setState({toastDisplay:!1})},a.onSelectCategory=function(e){var t=a.state.url+e,n=new Request(t);fetch(n).then((function(e){return e.json()})).then((function(e){a._isMounted&&a.setState({data:e})})),a.setState({category:e})},a.onLoginBtnClick=function(e){"login"===e?a.props.history.push("/Login"):a.props.history.push("/Register")},a.state={category:"general",apiKey:"abc72145994a45f19cd1781fe040f011",url:"https://newsapi.org/v2/top-headlines?country=il&apiKey=abc72145994a45f19cd1781fe040f011&category=",data:{},toastDisplay:!0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.props.user.category,a=this.state.url+t,n=new Request(a);fetch(n).then((function(e){return e.json()})).then((function(t){e._isMounted})).catch((function(e){alert("Demo verison *problem with server")}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(this.props.user.isSignedIn||this.props.history.push("/"),!this.state.data.articles)return r.a.createElement("div",{id:"myNewsContainer"},r.a.createElement(w.a,{id:"toastDisplay",show:this.state.toastDisplay,onClose:this.onCloseToast},r.a.createElement(w.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"YourNews"),r.a.createElement("small",null,"now")),!0===this.props.user.isSignedIn?r.a.createElement(w.a.Body,null,"Hello, ",this.props.user.username," ! your'e logged in."):r.a.createElement(w.a.Body,null,"Hello, ",this.props.user.username," ! your'e in limited version.")),r.a.createElement(b.a,{id:"mainArticles"},r.a.createElement(b.a.Item,null,r.a.createElement("img",{id:"mainImg",src:I.a,alt:"slide"}),r.a.createElement(b.a.Caption,null,r.a.createElement("h3",{id:"mainTitles"},"This is demo display"),r.a.createElement("p",{id:"mainDesc"},"Error in NewsAPI Source , working only in localhost"))),r.a.createElement(b.a.Item,null,r.a.createElement("img",{id:"mainImg",src:I.a,alt:"slide"}),r.a.createElement(b.a.Caption,{onClick:function(){return e.props.history.push("/Weather")}},r.a.createElement("h3",{id:"mainTitles"},"Hey ",this.props.user.username," ! check the weather today"),r.a.createElement("p",{id:"mainDesc"},"You can search any city from every point of the earth . click on me!")))),r.a.createElement("div",{id:"navContainer",style:{margin:"20px"}},!0===this.props.user.isSignedIn?r.a.createElement(y.a,{id:"navGroup",variant:"pills",defaultActiveKey:this.props.user.category,onSelect:this.onSelectCategory},r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"general"},"General")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"sports"},"Sports")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"technology"},"Technology")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"entertainment"},"Entertainment")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"business"},"Business"))):r.a.createElement(y.a,{id:"navGroup",variant:"pills",defaultActiveKey:this.props.user.category,onSelect:this.onSelectCategory},r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"general"},"General")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"sports",disabled:!0},"Sports")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"technology",disabled:!0},"Technology")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"entertainment",disabled:!0},"Entertainment")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"business",disabled:!0},"Business")))),r.a.createElement(O,{category:this.state.category,news:this.state.data.articles,isSignedIn:this.props.user.isSignedIn,onLoginBtnClick:this.onLoginBtnClick}));for(var t=this.state.data.articles,a=(I.a,[]),n=0;n<5;n++)a.push(t[n]);var o=a.map((function(e,n){var o=I.a;return a[n].urlToImage&&(o=a[n].urlToImage),r.a.createElement(b.a.Item,{onClick:function(){return window.open(t[n].url,"_blank").focus()},key:n},r.a.createElement("img",{id:"mainImg",src:o,alt:"slide"}),r.a.createElement(b.a.Caption,null,r.a.createElement("h3",{id:"mainTitles"},a[n].title),r.a.createElement("p",{id:"mainDesc"},a[n].description)))}));return r.a.createElement("div",{id:"myNewsContainer"},r.a.createElement(w.a,{id:"toastDisplay",show:this.state.toastDisplay,onClose:this.onCloseToast},r.a.createElement(w.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},"YourNews"),r.a.createElement("small",null,"now")),!0===this.props.user.isSignedIn?r.a.createElement(w.a.Body,null,"Hello, ",this.props.user.username," ! your'e logged in."):r.a.createElement(w.a.Body,null,"Hello, ",this.props.user.username," ! your'e in limited version.",r.a.createElement("br",null),r.a.createElement("a",{href:"Login"}," Login now"))),r.a.createElement(b.a,{id:"mainArticles"},o),r.a.createElement("div",{id:"navContainer",style:{margin:"20px"}},!0===this.props.user.isSignedIn?r.a.createElement(y.a,{id:"navGroup",variant:"pills",defaultActiveKey:this.props.user.category,onSelect:this.onSelectCategory},r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"general"},"General")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"sports"},"Sports")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"technology"},"Technology")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"entertainment"},"Entertainment")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"business"},"Business"))):r.a.createElement(y.a,{id:"navGroup",variant:"pills",defaultActiveKey:this.props.user.category,onSelect:this.onSelectCategory},r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"general"},"General")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"sports",disabled:!0},"Sports")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"technology",disabled:!0},"Technology")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"entertainment",disabled:!0},"Entertainment")),r.a.createElement(y.a.Item,null,r.a.createElement(y.a.Link,{eventKey:"business",disabled:!0},"Business")))),r.a.createElement(O,{news:this.state.data.articles,isSignedIn:this.props.user.isSignedIn,onLoginBtnClick:this.onLoginBtnClick}))}}]),t}(n.Component)),N=(a(86),a(31)),L=function(e){switch(new Date(e).getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat";default:return""}},D=function(){var e=(new Date).getHours();return e>6&&e<19?"Day":"Night"},B=function(e){return e<10&&(e="0"+e),"https://developer.accuweather.com/sites/default/files/"+e+"-s.png"},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).fetchFiveDaysArray=function(){var e="https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+ +a.props.currentSelectedCityKey+"?apikey="+a.props.apiKey+"&metric=true",t=new Request(e);fetch(t).then((function(e){return e.json()})).then((function(e){var t,n=e.DailyForecasts,r=[],o=[],l=[],s=[],i=[];for(var c in n){"0"===c&&"Night"===D()?r.push(B(n[c].Night.Icon)):r.push(B(n[c].Day.Icon)),o.push(L(n[c].Date)),l.push((t=n[c].Date,new Date(t).getDate()+"/"+(new Date(t).getMonth()+1)));var u=n[c].Temperature.Minimum.Value,m=n[c].Temperature.Maximum.Value;s.push(u),i.push(m)}a.setState({iconsByDay:r}),a.setState({days:o}),a.setState({shortDates:l}),a.setState({minTempsArray:s}),a.setState({maxTempsArray:i})}))},a.state={days:[],shortDates:[],minTempsArray:[],maxTempsArray:[],iconsByDay:{}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchFiveDaysArray()}},{key:"componentDidUpdate",value:function(e,t){this.props.currentSelectedCityKey!==e.currentSelectedCityKey&&this.fetchFiveDaysArray()}},{key:"render",value:function(){var e=this,t=this.state.shortDates.map((function(t,a){return r.a.createElement(k.a,{style:{width:"12rem",marginTop:"15px",marginRight:"10px"},key:a},r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Title,null,e.state.days[a]),e.state.shortDates[a]),r.a.createElement(k.a.Body,null,r.a.createElement("img",{src:e.state.iconsByDay[a],alt:"icon"}),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(k.a.Text,{style:{color:"#ccc",marginRight:"3px"}},e.state.minTempsArray[a]+"\xb0"),r.a.createElement(k.a.Text,{style:{color:"gray"}},e.state.maxTempsArray[a]+"\xb0"))))}));return r.a.createElement("div",{className:"row justify-content-center"},t)}}]),t}(n.Component),K=a(50),A=a.n(K),H=a(69),P=(a(88),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).promiseOptions=function(e){return new Promise((function(t){setTimeout((function(){t(a.filterCities(e))}),1500)}))},a.onSelect=function(e){a.props.onSelectCity(e)},a.state={selectedCityKey:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"filterCities",value:function(e){var t,a,n,r;return A.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=new Request("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=V5FfcZrrJ0SQGbZSnLx3JSJZ0AuMWfng&q="+e),a=[],0===e.length){o.next=16;break}return o.prev=3,o.next=6,A.a.awrap(fetch(t));case 6:return n=o.sent,o.next=9,A.a.awrap(n.json());case 9:r=o.sent,a=r.filter((function(e){return"City"===e.Type})).map((function(e){return{value:e.LocalizedName,label:e.LocalizedName+" , "+e.Country.LocalizedName,key:e.Key,country:e.Country.LocalizedName}})),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(3),console.log("server requests is limited");case 16:return o.abrupt("return",a.filter((function(t){return t.label.toLowerCase().includes(e.toLowerCase())})));case 17:case"end":return o.stop()}}),null,null,[[3,13]])}},{key:"render",value:function(){return this.props.currentCity?!0===this.props.isSignedIn?r.a.createElement("div",{id:"selectCityInput"},r.a.createElement(H.a,{id:"selectBox",cacheOptions:!0,defaultOptions:!0,defaultInputValue:this.props.currentCity,loadOptions:this.promiseOptions,onChange:this.onSelect,placeholder:"Enter a city"})):r.a.createElement("div",{id:"selectCityInput"},"For multiple weather location options - login ",r.a.createElement("a",{href:"/Login"},"here")):r.a.createElement("h1",null,"loading...")}}]),t}(n.Component)),M=a(89),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.onRefreshClick=function(){var e=new Date;a.setState({todayDate:e.toDateString()}),a.setState({currTime:e.toLocaleTimeString()}),M.getCurrentPosition((function(e,t){if(e)throw e;var n=t.coords.latitude,r=t.coords.longitude,o="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="+a.state.apiKey+"&q="+n+","+r,l=new Request(o);fetch(l).then((function(e){return e.json()})).then((function(e){a._isMounted&&(a.setState({currentSelectedCityKey:e.Key}),a.fetchCurrentTemperature(),a.setState({city:e.LocalizedName}),a.setState({country:e.Country.LocalizedName}))}))}))},a.fetchCurrentTemperature=function(){var e="https://dataservice.accuweather.com/currentconditions/v1/"+a.state.currentSelectedCityKey+"?apikey="+a.state.apiKey+"&metric=true",t=new Request(e);fetch(t).then((function(e){return e.json()})).then((function(e){a.setState({temp:e[0].Temperature.Metric.Value+"\xb0"}),a.setState({description:e[0].WeatherText});var t=e[0].WeatherIcon;t<10&&(t="0"+t),a.setState({iconURL:"https://developer.accuweather.com/sites/default/files/"+t+"-s.png"})}))},a.onSelectCity=function(e){a.setState({currentSelectedCityKey:e.key,city:e.value,country:e.country})},a.state={todayDate:"",description:"",city:"",country:"",temp:"",currTime:"",apiKey:"6OwPQ2hmTrq3buEVnQrF2UddMVhyYun2",currentSelectedCityKey:"",iconURL:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.onRefreshClick()}},{key:"componentDidUpdate",value:function(e,t){this.state.currentSelectedCityKey!==t.currentSelectedCityKey&&this.fetchCurrentTemperature()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return this.props.user.isSignedIn||this.props.history.push("/Login"),this.state.currTime&&this.state.currentSelectedCityKey?r.a.createElement("div",{id:"weatherContainer"},r.a.createElement(P,{currentCity:this.state.city,onSelectCity:this.onSelectCity,isSignedIn:this.props.user.isSignedIn}),r.a.createElement("div",{id:"mainWeather"},r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,r.a.createElement("h1",{style:{fontSize:55}}," ",this.state.temp," "),r.a.createElement(k.a.Text,null,this.state.description)),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,r.a.createElement("div",null,r.a.createElement("img",{src:this.state.iconURL,alt:"icon"})),this.state.city+" , "+this.state.country),r.a.createElement(k.a.Text,null,this.state.todayDate+" | "+this.state.currTime)))),r.a.createElement(R,{apiKey:this.state.apiKey,currentSelectedCityKey:this.state.currentSelectedCityKey})):r.a.createElement(N.a,{animation:"border"})}}]),t}(n.Component),_=(a(94),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e)))._isMounted=!1,a.fetchCountry=function(){var e=new Request("https://api.covid19api.com/summary");fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.Countries[81];a.setState({country:t.Country,totalCases:t.TotalConfirmed,newCases:t.NewConfirmed,totalDeaths:t.TotalDeaths,newDeaths:t.NewDeaths,newRecorverd:t.NewRecovered,totalRecovered:t.TotalRecovered,global:e.Global})})).catch((function(e){console.log(e)}))},a.state={country:"",totalDeaths:"",newDeaths:"",totalCases:"",newCases:"",totalRecovered:"",newRecorverd:"",global:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchCountry()}},{key:"render",value:function(){return this.state.country?r.a.createElement("div",{id:"mainCovid"},r.a.createElement("h1",{id:"countryTitle"},this.state.country),r.a.createElement("div",{id:"stats"},r.a.createElement(k.a,{bg:"dark",text:"white"},r.a.createElement(k.a.Header,{style:{fontWeight:"bold"}},"Total cases"),r.a.createElement(k.a.Body,null,this.state.totalCases)),r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"New cases"),r.a.createElement(k.a.Body,null,this.state.newCases>0?"+"+this.state.newCases:0)),r.a.createElement(k.a,{bg:"danger",text:"white"},r.a.createElement(k.a.Header,{style:{fontWeight:"bold"}},"Total deaths"),r.a.createElement(k.a.Body,null,this.state.totalDeaths)),r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"New deaths"),r.a.createElement(k.a.Body,null,this.state.newDeaths>0?"+"+this.state.newDeaths:0)),r.a.createElement(k.a,{bg:"success",text:"white"},r.a.createElement(k.a.Header,{style:{fontWeight:"bold"}},"Total Recorverd"),r.a.createElement(k.a.Body,null,this.state.totalRecovered)),r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"New Recorverd"),r.a.createElement(k.a.Body,null,this.state.newRecorverd>0?"+"+this.state.newRecorverd:0)),r.a.createElement(k.a,{bg:"primary",text:"white"},r.a.createElement(k.a.Header,{style:{fontWeight:"bold"}},"Active cases"),r.a.createElement(k.a.Body,null,this.state.totalCases-this.state.totalRecovered))),r.a.createElement("h1",{id:"countryTitle"},"World"),r.a.createElement("div",{id:"stats"},r.a.createElement(k.a,{bg:"dark",text:"white"},r.a.createElement(k.a.Header,{style:{fontWeight:"bold"}},"Total cases"),r.a.createElement(k.a.Body,null,this.state.global.TotalConfirmed)),r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"New cases"),r.a.createElement(k.a.Body,null,this.state.global.NewConfirmed>0?"+"+this.state.global.NewConfirmed:0)),r.a.createElement(k.a,{bg:"danger",text:"white"},r.a.createElement(k.a.Header,{style:{fontWeight:"bold"}},"Total deaths"),r.a.createElement(k.a.Body,null,this.state.global.TotalDeaths)),r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"New deaths"),r.a.createElement(k.a.Body,null,this.state.global.NewDeaths>0?"+"+this.state.global.NewDeaths:0)),r.a.createElement(k.a,{bg:"success",text:"white"},r.a.createElement(k.a.Header,{style:{fontWeight:"bold"}},"Total Recorverd"),r.a.createElement(k.a.Body,null,this.state.global.TotalRecovered)),r.a.createElement(k.a,null,r.a.createElement(k.a.Header,null,"New Recorverd"),r.a.createElement(k.a.Body,null,this.state.global.NewRecovered>0?"+"+this.state.global.NewRecovered:0)),r.a.createElement(k.a,{bg:"primary",text:"white"},r.a.createElement(k.a.Header,{bg:"primary",text:"white",style:{fontWeight:"bold"}},"Active cases"),r.a.createElement(k.a.Body,null,this.state.global.TotalConfirmed-this.state.global.TotalRecovered)))):r.a.createElement(N.a,{animation:"border"})}}]),t}(n.Component)),W=a(64),z=a.n(W),F=a(65),U=(a(95),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){!0===e.props.user.isSignedIn?e.props.history.push("/MyNews"):e.props.history.push("/Login")}),2e3)}},{key:"render",value:function(){return r.a.createElement("div",{id:"logo",className:"ma4 mt0 tc br4"},r.a.createElement("div",null,r.a.createElement("img",{id:"logoImg",style:{paddingTop:"5px",animation:"pop-in ".concat(F.easings.easeOutExpo," 2000ms forwards")},alt:"logo",src:z.a})),r.a.createElement(N.a,{animation:"border"}))}}]),t}(n.Component)),Y=a(48),q=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onLogOutClick=function(){},e.onLoginStart=function(){e.props.onConnection(!1,"","")},e.onRegisterComplete=function(t){e.props.onConnection(!0,t.username,t.category)},e.onLoginComplete=function(t){console.log(t),"guest"===t?e.props.onConnection("guest","guest","general"):e.props.onConnection(!0,t.username,t.category)},e.state={user:{username:"",category:""}},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{history:p.b,basename:"/yournews"},r.a.createElement("div",{className:"App"},r.a.createElement(E,{onLogOutClick:this.onLogOutClick,user:this.props}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(U,Object.assign({user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Login",render:function(t){return r.a.createElement(v,Object.assign({onLoginStart:e.onLoginStart,onLoginComplete:e.onLoginComplete,user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Register",render:function(t){return r.a.createElement(C,Object.assign({onRegisterComplete:e.onRegisterComplete,user:e.props},t))}}),r.a.createElement(p.a,{path:"/MyNews",render:function(t){return r.a.createElement(j,Object.assign({user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Weather",render:function(t){return r.a.createElement(G,Object.assign({user:e.props},t))}}),r.a.createElement(p.a,{exact:!0,path:"/Corona",render:function(t){return r.a.createElement(_,Object.assign({user:e.props},t))}}))))}}]),t}(n.Component),V=Object(Y.b)((function(e){return{isSignedIn:e.localStorage.isSignedIn,username:e.localStorage.username,category:e.localStorage.category}}),(function(e){return{onConnection:function(t,a,n){e({type:"CHANGE_IS_SIGN_IN",payload:t}),e(function(e){return{type:"CHANGE_USERNAME",payload:e}}(a)),e(function(e){return{type:"CHANGE_CATEGORY",payload:e}}(n))}}}))(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(67),Q=a.n(J),Z=a(21),$=a(36),X={isSignedIn:"",username:"",category:""},ee={key:"root",storage:Q.a,whitelist:["localStorage"]},te=Object(Z.c)({localStorage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_IS_SIGN_IN":return Object.assign({},e,{isSignedIn:t.payload});case"CHANGE_USERNAME":return Object.assign({},e,{username:t.payload});case"CHANGE_CATEGORY":return Object.assign({},e,{category:t.payload});default:return e}}}),ae=Object($.a)(ee,te),ne=a(68),re=Object(s.createLogger)(),oe=Object(Z.d)(ae,Object(Z.a)(re)),le=Object($.b)(oe);l.a.render(r.a.createElement(Y.a,{store:oe},r.a.createElement(ne.a,{persistor:le},r.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[70,1,2]]]);
//# sourceMappingURL=main.e55af495.chunk.js.map