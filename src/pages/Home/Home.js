import React, {Component, useEffect} from 'react';
import logo from './logo.png'
import Spinner from 'react-bootstrap/Spinner'
import { easings } from 'react-animation';
import './Home.css';

const Home = ({isSignedIn,route})=> {
	
	const { history } = route;

	useEffect(()=>{
				setTimeout(()=> {
					if (isSignedIn)
						history.push('/MyNews')
					else 
						history.push('/Login')
				},2000)
			},[isSignedIn,history]);

	return (
		<div id = "logo" className = 'ma4 mt0 tc br4'>
			 <div> 
				 <img id ="logoImg" style = {{paddingTop:'5px',animation : `pop-in ${easings.easeOutExpo} 2000ms forwards`}}
							 alt = "logo" src = {logo}/>
			</div>
			<Spinner animation="border"/>
		</div>

	)
}

export default Home;