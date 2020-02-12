import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
var geolocation = require('geolocation');

class Weather extends Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			todayDate : '',
			description : '',
			city : '',
			country: '',
			temp : '',
			currTime : ''
		}
	}
	componentDidMount(){
		this._isMounted = true;
		this.onRefreshClick();
	}
	componentWillUnmount(){
		this._isMounted = false;
	}
	onRefreshClick = () => {
		let date = new Date();
		this.setState({todayDate : date.toDateString()});
		this.setState({currTime : date.toLocaleTimeString()})
		
		//get current poistion from user -> fetch details about the weather in that poistion
		geolocation.getCurrentPosition((err, position) => {
				  if (err) throw err
				  else {
				  	let lat = position.coords.latitude;
					let lng = position.coords.longitude;
					var weatherApi = "5a5f8d8e37a6bd6f84d80adc804e0da0";
				    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&units=metric&appid="+weatherApi;
				    var req = new Request(url);
				    fetch(req)
				    .then(response => response.json())
				    .then(data=> {
				    	if (this._isMounted){
				     		this.setState({city: data.name});
				     		this.setState({country : data.sys.country});
				     		this.setState({temp : data.main.temp + "°"});
				     		this.setState({description : data.weather[0].main})
				     		}
				    	});
				  	}
				})
	}
    render() {
    	if (!this.props.isSignedIn) {
			this.props.history.push('/Login');
			}
		if (!this.state.currTime) return <Spinner animation="border" />;
			return (
				<div className="row align-items-center justify-content-center">
					<Card style = {{width : '35%'}}>
					  <Card.Header>
					  	<h1 style = {{fontSize:75}}> {this.state.temp} </h1>
					  	<Card.Text>{this.state.description}</Card.Text>
					  </Card.Header>
					  <Card.Body>
					    <Card.Title>{this.state.city + ' , '+this.state.country}</Card.Title>
					    <Card.Text>
					      {this.state.todayDate + ' | '+this.state.currTime}
					    </Card.Text>
					    <Button variant="warning" onClick = {this.onRefreshClick}>Refresh</Button>
					  </Card.Body>
					</Card>
				</div>
				);
		}
}
export default Weather;