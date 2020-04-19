import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom';
const Navigation = ({user}) =>{
	
	let loginLink = <Nav.Item style = {{margin : 10}}>
						<Link to = '/Login' style = {{fontSize : '1.2em',textDecoration:'none'}}>
						Login
			            </Link>
			         </Nav.Item>
	let registerLink = <Nav.Item style = {{margin : 10}}>
							<Link to = '/Register' style = {{fontSize : '1.2em',textDecoration:'none'}}>
								Register
			            	</Link>
			            </Nav.Item>
	let MyNewsLink = ""
	let homeLink = <Nav.Item style = {{margin : 10}}>
						<Link to = '/' style = {{fontSize : '1.2em',textDecoration:'none'}}>
						HOME
			            </Link>
			         </Nav.Item> 
	let weatherLink = ""
	if (user.isSignedIn) {
		loginLink = 
			<Nav.Item style = {{margin : 10}}>
							<Link to = '/Login' style = {{fontSize : '1.2em',textDecoration:'none'}}>
							Logout
				           </Link>
			</Nav.Item>
		registerLink = "";
		MyNewsLink = 
			<Nav.Item style = {{margin : 10}}>
							<Link to = '/MyNews' style = {{fontSize : '1.2em',textDecoration:'none'}}>
							MyNews
				           </Link>
			</Nav.Item>
		homeLink = "";
		weatherLink = 
		<Nav.Item style = {{margin : 10}}>
						<Link to = '/Weather' style = {{fontSize : '1.2em',textDecoration:'none' ,color:'gold'}}>
						Weather
			            </Link>
		</Nav.Item>
	}
	return(
				 <Nav
				 		 variant="pills"
			              activeKey="/home"

			            >
			              
			                {homeLink}
			                {loginLink}
			              	{registerLink}
			              	{MyNewsLink}
			               	{weatherLink}
  			</Nav>


		)
}
export default Navigation;