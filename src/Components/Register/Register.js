import React , {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName : '',
			email : '',
			password : '',
			rePassword : '',
			checkBox : false,
			matchPasswordText : '',
			matchPassStyle: {

			}
		}
	}
	onNameChange = (event)=> {
		var uname = event.target.value;
		this.setState({userName : uname})
	}
	onEmailChange = (event) => {
		var email = event.target.value;
		this.setState({email : email})
	}
	onCategoryChange = (event)=> {
		var category = event.target.value.toLowerCase();
		this.setState({category : category})
	}
	onPasswordChange = (event) => {
		var password = event.target.value;
		this.setState({password : password})
		var rePassword = this.state.rePassword;
		this.matchPasswords(password, rePassword)
	}
	
	onRePasswordChange = (event) => {
		var rePassword = event.target.value;
		this.setState({rePassword : rePassword});
		var password = this.state.password;
		this.matchPasswords(password, rePassword)
	}
	matchPasswords = (password,rePassword) => {
		if (rePassword === password){
			this.setState({matchPasswordText : "Password and Re-Password does match"});
			this.setState({matchPassStyle : {
				color : 'green',
				fontWeight: 'bold'
			}})
		}else {
			this.setState({matchPasswordText : "Password and Re-Password doesn't match"});
				this.setState({matchPassStyle : {
				color : 'red',
				fontWeight: 'bold'
			}})
		}
	}
	onSubmitClick = (event) => {
		event.preventDefault();
		if (this.state.userName.length>0 && this.state.email.length > 0 && this.state.category.length>0
		 && this.state.password === this.state.rePassword && this.state.checkBox){
			 	fetch('https://pure-sands-27033.herokuapp.com/register',{
				method : 'post',
				headers : {'Content-Type': 'application/json'},
				body : JSON.stringify({
					email: this.state.email.toLowerCase(),
					password : this.state.password,
					username : this.state.userName,
					category : this.state.category
				}) 
			})
			.then(response => response.json())
			.then(data => {
				if(data.severity === 'ERROR'){
					if(data.constraint === "users_username_key")
						alert("The username is exist");
					else if (data.constraint === "login_email_key")
						alert("The email is exist");
					else alert (data.detail);
				}
				else { //data is an user
				this.props.onRegisterComplete(data);
				this.props.history.push('/MyNews')
				}
			});
			
		}else {
			let errorsText = '';
			if (this.state.userName.length === 0) errorsText +='Enter an valid name \n';
			if (this.state.email.length === 0) errorsText += 'Enter an valid email \n';
			if (!this.state.category) errorsText += 'Select a category \n';
			if (!this.state.checkBox) errorsText += 'Accept the conditions & terms box \n';
			alert(errorsText)
		}

	}
	render(){
		return(
				<div className="row align-items-center justify-content-center">
						<Form style = {{padding: '30px' ,borderRadius : '3px',border : '1px solid #ccc', margin : '10px'}}>
						<h1>Register</h1>
							  <Form.Group controlId="formName">
							    <Form.Label>Username</Form.Label>
							    <Form.Control type="text" placeholder="Enter username" onChange = {this.onNameChange}/>
							    <Form.Text className="text-muted">
							      Advice : what is your nickname ? add something ;)
							    </Form.Text>
							  </Form.Group>
							  <Form.Group controlId="formBasicEmail">
							    <Form.Label>Email address</Form.Label>
							    <Form.Control type="email" placeholder="Enter email" onChange = {this.onEmailChange}  />
							    <Form.Text className="text-muted">
							      We'll never share your email with anyone else.
							    </Form.Text>
							  </Form.Group>
							      <Form.Group controlId="exampleForm.ControlSelect1">
								    <Form.Label>Category</Form.Label>
								    <Form.Control as="select" multiple onChange={this.onCategoryChange}>
								      <option>General</option>
								      <option>Sports</option>
								      <option>Entertainment</option>
								      <option>Technology</option>
								      <option>Business</option>
								    </Form.Control>
								<Form.Text className="text-muted">
							      It's your news! choose your specific category
							    </Form.Text>
								  </Form.Group>
							  <Form.Group controlId="formPassword">
							    <Form.Label>Password</Form.Label>
							    <Form.Control type="password" placeholder="Password" onChange = {this.onPasswordChange} />
							  </Form.Group>
							  <Form.Group controlId="formRepatPassword">
							    <Form.Label>Re-Password</Form.Label>
							    <Form.Control type="password" placeholder="Password" onChange = {this.onRePasswordChange} />
							     <Form.Text style = {this.state.matchPassStyle}className="text">
							     	{this.state.matchPasswordText}
							    </Form.Text>
							  </Form.Group>
							  <Form.Group controlId="formBasicCheckbox">
							    <Form.Check type="checkbox" label="I have read all conditions & terms" onClick = {()=>this.setState({
							    	checkBox : !this.state.checkBox
							    })} />
							  </Form.Group>
							  <Button style = {{width : '100%'}}variant="primary" type="submit" onClick = {this.onSubmitClick} >
							    Sign Up
							  </Button>
						</Form>
					</div>
				);
	}
}
export default Register;