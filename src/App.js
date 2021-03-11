import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import { connect } from 'react-redux';
import { setIsSignedIn, setUserName, setCategory } from './redux/actions';
import { createBrowserHistory } from 'history';
import YNRoutes from './routes/YNRoutes';

const history = createBrowserHistory();

const App = props => {
      return (
          <Router history={history} basename={process.env.PUBLIC_URL} >
              <div className="App">
                    <Navigation isSignedIn={props.isSignedIn}/> 
                    <YNRoutes {...props} />
              </div>
          </Router>
        )
}

const mapStateToProps = state => { 
  return {
    isSignedIn : state.localStorage.isSignedIn,
    username : state.localStorage.username ,
    category : state.localStorage.category
  }
}
const mapDispatchToProps = (dispatch) => { 
  return {
    onConnection : (event,username,category) => {
     dispatch(setIsSignedIn(event))
     dispatch(setUserName(username))
     dispatch(setCategory(category))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
