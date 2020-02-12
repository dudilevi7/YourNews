import React , {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : '',
			password : ''
		}
	}
	componentDidMount() {
		this.props.onLoginStart();
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
			if (data.id){ //if data is user
				// var url = new URL("http://localhost:3000/saveuser"),
				// params = {username : data.username}
				// url.search = new URLSearchParams(params).toString();
				// fetch(url, {
				// 	  method: "get",
				// 	  headers: {
				// 	    'Accept': 'application/json',
				// 	    'Content-Type': 'application/json',
				// 	    'Cache': 'no-cache'
				// 	  },
				// 	  withCredentials: true
				// 	})
				// .then(response => console.log(response))			
				this.props.onLoginComplete(data);
				this.props.history.push('/MyNews');
			}else { //data is error
				alert(data);
			}
		});
		
	}


		render() {
			
			return(
				<div className="row align-items-center justify-content-center">
						<Form style = {{padding: '10px' ,border : '1px solid #ccc', margin : '10px'}}>
						<h1>Login</h1>
							  <Form.Group controlId="formBasicEmail">
							    <Form.Label>Username</Form.Label>
							    <Form.Control type="name" placeholder="Enter name" onChange = {event => this.onUsernameChange(event)} />
							  </Form.Group>

							  <Form.Group controlId="formBasicPassword">
							    <Form.Label>Password</Form.Label>
							    <Form.Control type="password" placeholder="Password"  onChange = {event => this.onPasswordChange(event)}/>
							  </Form.Group>
							  <Button variant="primary" type="submit" onClick = {this.onSubmitClick}>
							    Submit
							  </Button>
						</Form>
					</div>
				)
		}
}
export default Login;