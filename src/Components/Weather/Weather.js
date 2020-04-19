import React, {Component} from 'react';
import './Weather.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import FiveDaysWeather from './FiveDaysWeather';
import SelectCities from '../SelectCities/SelectCities';
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
			currTime : '',
			apiKey : '6OwPQ2hmTrq3buEVnQrF2UddMVhyYun2',
			currentSelectedCityKey : '',
			iconURL : ''
		}
	}
	componentDidMount(){
		this._isMounted = true;
		this.onRefreshClick();
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.currentSelectedCityKey !== prevState.currentSelectedCityKey) {
		  this.fetchCurrentTemperature();
		}
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
					var url = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey="
					+this.state.apiKey+"&q="+lat+","+lng;
				    var req = new Request(url);
				    fetch(req)
				    .then(response => response.json())
				    .then(data=> {
				    	if (this._isMounted){
							this.setState({currentSelectedCityKey : data.Key})
							this.fetchCurrentTemperature();
				     		this.setState({city: data.LocalizedName});
				     		this.setState({country : data.Country.LocalizedName});
				     		// this.setState({temp : data.main.temp + "°"});
				     		}
				    	});
				  	}
		})
	}
	fetchCurrentTemperature = () => {
		var url = "http://dataservice.accuweather.com/currentconditions/v1/"+
		this.state.currentSelectedCityKey+"?apikey="+this.state.apiKey+"&metric=true";
		var req = new Request(url);
		fetch(req)
		.then(response => response.json())
		.then(data => {
			;
			this.setState({temp : data[0].Temperature.Metric.Value + "°"});
			this.setState({description : data[0].WeatherText})
			let icon = data[0].WeatherIcon;
			if (icon<10) icon = "0"+ icon;
			this.setState({iconURL : "https://developer.accuweather.com/sites/default/files/"+icon+"-s.png"})
		})
	}
	onSelectCity = (city) => {
		this.setState({
			currentSelectedCityKey : city.key,
			city : city.value,
			country : city.country
		});
		
	}
    render() {
    	if (!this.props.user.isSignedIn) {
			this.props.history.push('/Login');
			}
		if (!this.state.currTime || !this.state.currentSelectedCityKey) return <Spinner animation="border" />;
			return (
					<div id = "weatherContainer">
						<SelectCities currentCity = {this.state.city} onSelectCity={this.onSelectCity}/>
						<div id = "mainWeather">
							<Card style = {{width : '23rem' }}>
							<Card.Header>
								<h1 style = {{fontSize:55}}> {this.state.temp} </h1>
								<Card.Text>
									{this.state.description}
								</Card.Text>
							</Card.Header>
							<Card.Body>
								<Card.Title><div> 
									<img src = {this.state.iconURL} alt = 'icon'/>
								</div>{this.state.city + ' , '+this.state.country}</Card.Title>
								<Card.Text>
								{this.state.todayDate + ' | '+this.state.currTime}
								</Card.Text>
							</Card.Body>
							</Card>
							
						</div>
							<FiveDaysWeather apiKey = {this.state.apiKey} currentSelectedCityKey = {this.state.currentSelectedCityKey}/>
					</div>
				);
		}
}
export default Weather;