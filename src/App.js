import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Router, Route , Switch } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyNews from './Components/MyNews/MyNews';
import Weather from './Components/Weather/Weather'
import Corona from './Components/Corona/Corona'
import Home from './Components/Home/Home';

import { connect } from 'react-redux';
import { setIsSignedIn, setUserName, setCategory } from './actions';

const mapStateToProps = state => { //takes the state from localStorage of the persist
  return {
    isSignedIn : state.localStorage.isSignedIn,
    username : state.localStorage.username ,
    category : state.localStorage.category
  }
}
const mapDispatchToProps = (dispatch) => { //push the new state with dispatch(action(filed))
  return {
    onConnection :(event,username,category) => {
     dispatch(setIsSignedIn(event))
     dispatch(setUserName(username))
     dispatch(setCategory(category))
    }
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      user : {
        username : '',
        category : ''
      }
    }
  }

  
  onLogOutClick = ()=>{
   // this.props.onConnection(false);
  }
  onLoginStart = ()=> {
    this.props.onConnection(false,"","");
  }
  onRegisterComplete = (data)=> {
    this.props.onConnection(true,data.username,data.category);
  }
  onLoginComplete = (data)=> {
    console.log(data)
      if (data === "guest"){
        this.props.onConnection("guest","guest","general");
      }else
      this.props.onConnection(true,data.username,data.category);
  }
    render(){
    return (
      <BrowserRouter history = {Router} basename={process.env.PUBLIC_URL}>
        
          <div className="App">
            <Navigation onLogOutClick = {this.onLogOutClick} user = {this.props}/> 
            <Switch>
              <Route exact path = '/' render = {(props)=> <Home user = {this.props} {...props}/>}/>

              <Route exact path = '/Login' render = {(props)=>  <Login onLoginStart = {this.onLoginStart} onLoginComplete = {this.onLoginComplete} 
              user = {this.props} {...props}/>}/>

              <Route exact path = '/Register' render = {(props)=>  <Register onRegisterComplete = {this.onRegisterComplete} 
              user = {this.props} {...props}/>}/>

              <Route path = '/MyNews' render = {(props)=>  <MyNews 
              user = {this.props} {...props}/>}/>
              
              <Route exact path = '/Weather' render = {(props)=>  <Weather user = {this.props}{...props}/>}/>

              <Route exact path = '/Corona' render = {(props)=>  <Corona user = {this.props}{...props}/>}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
