import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Router, Route , Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyNews from './Components/MyNews/MyNews';
import Weather from './Components/Weather/Weather'
import Home from './Components/Home/Home';
class App extends Component {
  constructor () {
    super();
    this.state = {
      page : 'Login',
      isSignedIn : false,
      user : {
        username : '',
        category : ''
      }
    }
  }
 
  onLogOutClick = ()=>{
    // var url = new URL("http://localhost:3000/logout");
    //     fetch(url,{
    //       credentials: 'include'
    //     })
    //     .then(response => console.log(response))
  }
  onLoginStart = ()=> {
    this.setState({isSignedIn:false})
  }
  onRegisterComplete = (data)=> {
    this.setState(Object.assign(this.state.user, {username : data.username}))
    this.setState(Object.assign(this.state.user, {category : data.category}))
    this.setState({isSignedIn : true});
  }
  onLoginComplete = (data)=> {
      this.setState(Object.assign(this.state.user, {username : data.username}))
      this.setState(Object.assign(this.state.user, {category : data.category}))
      this.setState({isSignedIn : true});
  }
    render(){
    return (
      <BrowserRouter history = {Router} basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Navigation onLogOutClick = {this.onLogOutClick} isSignedIn = {this.state.isSignedIn}/> 
            <Switch>
              <Route exact path = '/' render = {(props)=> <Home isSignedIn = {this.state.isSignedIn} {...props}/>}/>
              <Route exact path = '/Login' render = {(props)=>  <Login onLoginStart = {this.onLoginStart} onLoginComplete = {this.onLoginComplete} 
              isSignedIn = {this.state.isSignedIn} {...props}/>}/>
              <Route exact path = '/Register' render = {(props)=>  <Register onRegisterComplete = {this.onRegisterComplete} 
              isSignedIn = {this.state.isSignedIn} {...props}/>}/>
              <Route path = '/MyNews' render = {(props)=>  <MyNews isSignedIn = {this.state.isSignedIn} 
              userName = {this.state.user.username} category = {this.state.user.category} {...props}/>}/>
              <Route exact path = '/Weather' render = {(props)=>  <Weather isSignedIn = {this.state.isSignedIn} 
              userName = {this.state.user.username} {...props}/>}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
