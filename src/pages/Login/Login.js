import React , {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link }from 'react-router-dom';
import './Login.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : '',
			password : ''
		}
	}
	componentDidMount() {
		this.props.onConnection(false,"","");
	}
	onUsernameChange = (event )=> {
		let input = event.target.value;
		this.setState({userName : input});
	}
	onPasswordChange = (event)=> {
		let input = event.target.value;
		this.setState({password : input});
	}
	onSubmitClick = (event) => {
		event.preventDefault();
		fetch('https://pure-sands-27033.herokuapp.com/signin',{
			method : 'post',
			headers : {'Content-Type': 'application/json'},
			body : JSON.stringify({
				username: this.state.userName,
				password : this.state.password
			}) 
		})
		.then(response => response.json())
		.then(data => {
			if (data.id){ 	
				this.props.onConnection(true,data.username,data.category);
				this.props.route.history.push('/MyNews');
			}else { 
				alert(data);
			}
		}).catch(err=>{
			alert(err);
		});
		
	}
		onGuestBtnClick = () => {
				this.props.onConnection("guest","guest","general");
				this.props.route.history.push('/MyNews');
		}

		render() {
			return(
				<div id = "loginContainer">
						<Form id="loginForm">
							<h1 id = "loginTitle">Login</h1>
							  <Form.Group controlId="formBasicEmail">
							    <Form.Label>Username</Form.Label>
							    <Form.Control type="name" placeholder="Enter name" onChange = {event => this.onUsernameChange(event)} />
							  </Form.Group>

							  <Form.Group controlId="formBasicPassword">
							    <Form.Label>Password</Form.Label>
							    <Form.Control type="password" placeholder="Password"  onChange = {event => this.onPasswordChange(event)}/>
							  </Form.Group>
							  <Form.Group controlId="formLink">
							  	<Link to = "/Register">Not a member? register here!</Link>
							  </Form.Group>
							 	<Button id = "guestBtn" variant="dark" onClick = {this.onGuestBtnClick}>
									Enter as Guest
								</Button>
								<Button id = "signInBtn" variant="primary" type="submit" onClick = {this.onSubmitClick}>
									Sign In
								</Button>
						</Form>
					</div>
				)
		}
}
export default Login;