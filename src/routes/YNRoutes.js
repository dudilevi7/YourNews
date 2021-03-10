import React from 'react';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import MyNews from '../pages/MyNews/MyNews';
import Weather from '../pages/Weather/Weather'
import Corona from '../pages/Corona/Corona'
import Home from '../pages/Home/Home';
import { Route , Switch } from 'react-router-dom';

const YNRoutes = props => {
    return (
        <Switch>
            <Route exact path = '/' render = {routeProps => <Home route = {routeProps} {...props}/>}/>

            <Route exact path = '/Login' render = {routeProps => <Login route = {routeProps} {...props} />}/>

            <Route exact path = '/Register' render = {routeProps => <Register route = {routeProps} {...props} />}/>

            <Route path = '/MyNews' render = {routeProps =>  <MyNews route = {routeProps} {...props} />}/>
            
            <Route exact path = '/Weather' render = {routeProps =>  <Weather route = {routeProps} {...props}/>}/>

            <Route exact path = '/Corona' render = {routeProps =>  <Corona route = {routeProps} {...props}/>}/>
      </Switch>
    )
}
export default YNRoutes;