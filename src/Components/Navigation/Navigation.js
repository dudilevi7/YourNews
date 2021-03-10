import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

const Navigation = ({ isSignedIn }) => {
	
	let loginLink = <Nav.Item style = {{margin : 10}}>
						<Link to = '/Login' style = {{fontSize : '1.2em',textDecoration:'none'}}>
							{isSignedIn ? 'Logout' : 'Login' }
			            </Link>
			         </Nav.Item>
	let registerLink = !isSignedIn && 	<Nav.Item style = {{margin : 10}}>
											<Link to = '/Register' style = {{fontSize : '1.2em',textDecoration:'none'}}>
												Register
											</Link>
										</Nav.Item>
	let MyNewsLink = isSignedIn && <Nav.Item style = {{margin : 10}}>
										<Link to = '/MyNews' style = {{fontSize : '1.2em',textDecoration:'none'}}>
											MyNews
										</Link>
	 								</Nav.Item>
	let homeLink = !isSignedIn && <Nav.Item style = {{margin : 10}}>
										<Link to = '/' style = {{fontSize : '1.2em',textDecoration:'none'}}>
										HOME
										</Link>
								  </Nav.Item> 
	let weatherLink = isSignedIn && <Nav.Item style = {{margin : 10}}>
										<Link to = '/Weather' style = {{fontSize : '1.2em',textDecoration:'none' ,color:'gold'}}>
										Weather
										</Link>
									</Nav.Item>
	let covidLink = isSignedIn && <Nav.Item style = {{margin : 10}}>
										<Link to = '/Corona' style = {{fontSize : '1.2em',textDecoration:'none' ,color:'red'}}>
											COVID-19
										</Link>
								</Nav.Item>
	return(
			<Nav variant="pills" activeKey="/home">
			                {homeLink}
			                {loginLink}
			              	{registerLink}
			              	{MyNewsLink}
			               	{weatherLink}
							{covidLink}
  			</Nav>
		)
}
export default Navigation;