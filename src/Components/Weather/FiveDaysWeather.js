import React, {Component}   from "react";
import Card from "react-bootstrap/Card";
import { getSpecificDay, getShortDate, getIsDayOrNight } from "../../utils/DateConvertor";
import { getIconURL } from "../../utils/ApiConvertor";


class FiveDaysWeather extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          days : [],
          shortDates : [],
          minTempsArray : [],
          maxTempsArray : [],
          iconsByDay : {} 
         };
    }
    componentDidMount(){
        this.fetchFiveDaysArray();
    }
    componentDidUpdate(prevProps, prevState) {
		if (this.props.currentSelectedCityKey !== prevProps.currentSelectedCityKey) {
		  this.fetchFiveDaysArray();
		}
	  }
    fetchFiveDaysArray = () =>{
        var url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+
        + this.props.currentSelectedCityKey+"?apikey="+this.props.apiKey+"&metric=true"
        var req = new Request(url);
        fetch(req)
        .then(res => res.json())
        .then(data => {
            let dailyForeArr = data.DailyForecasts;
            let icons = [];
            let daysArr = [];
            let shortDatesArr =[];
            let minTempsArr = [];
            let maxTempsArr = [];
            for (let i in dailyForeArr){
                if (i === '0' && getIsDayOrNight() === 'Night') {
                    icons.push(getIconURL(dailyForeArr[i].Night.Icon))
                }else {
                   icons.push(getIconURL(dailyForeArr[i].Day.Icon))
                } 
                   // this.setState({days : this.state.days.push())});
                   daysArr.push(getSpecificDay(dailyForeArr[i].Date));
                    //this.setState({shortDates : this.state.shortDates.push(getShortDate(dailyForeArr[i].Date))});
                    shortDatesArr.push(getShortDate(dailyForeArr[i].Date));
                    let minTemp = dailyForeArr[i].Temperature.Minimum.Value;
                    let maxTemp = dailyForeArr[i].Temperature.Maximum.Value;
                    minTempsArr.push(minTemp);
                    maxTempsArr.push(maxTemp);
            }
        
            this.setState({iconsByDay : icons})
            this.setState({days : daysArr})
            this.setState({shortDates : shortDatesArr})
            this.setState({minTempsArray : minTempsArr})
            this.setState({maxTempsArray : maxTempsArr})
        });
    }
    render() {
        const daysWeatherArr = this.state.shortDates.map((user,i) => {
                return  ( 
                <Card style={{ width: '12rem' , marginTop : '15px',marginRight : '10px'}} key ={i}>
                    <Card.Header>
                    <Card.Title>{this.state.days[i]}</Card.Title>
                        {this.state.shortDates[i] }
                    </Card.Header>
                    <Card.Body>
                    <img src = {this.state.iconsByDay[i]} alt = 'icon'></img>
                    <div className = "row justify-content-center">
                        <Card.Text style = {{color : '#ccc', marginRight : '3px'}}>
                              {this.state.minTempsArray[i] + "°" }
                        </Card.Text>
                        <Card.Text style = {{color : 'gray'}}>
                              {this.state.maxTempsArray[i] +"°"}
                        </Card.Text>
                    </div>
                    </Card.Body>
                </Card>
            )}
        );
        return (
            <div className = "row justify-content-center">
              {daysWeatherArr}
            </div>
        );
    }
}

export default FiveDaysWeather;