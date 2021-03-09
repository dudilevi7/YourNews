import React , {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import covidData from '../../constants/json/covid.json'
import './Corona.css';

class Corona extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = { 
            country : '',
            totalDeaths : '',
            newDeaths : '',
            totalCases : '',
            newCases : '',
            totalRecovered : '',
            newRecorverd : '',
            global : ''
         };
    }
    componentDidMount() {
        this._isMounted = true;
        this.fetchCountry();
    }
    fetchCountry = () =>{
        var url = "https://api.covid19api.com/summary";
        var req = new Request(url)
        fetch(req)
        .then(res => res.json())
        .then(data =>
            {
                let countries = data.Countries;
                let obj = countries[81]
                this.setState({
                    country : obj.Country,
                    totalCases : obj.TotalConfirmed ,
                    newCases : obj.NewConfirmed,
                    totalDeaths : obj.TotalDeaths,
                    newDeaths : obj.NewDeaths,
                    newRecorverd : obj.NewRecovered,
                    totalRecovered : obj.TotalRecovered,
                    global : data.Global
                })
            }).catch(error=>{
                let data = covidData;
                 this.setState({
                    country : "Israel",
                    totalCases : data.Israel.TotalConfirmed ,
                    newCases : data.Israel.NewConfirmed,
                    totalDeaths : data.Israel.TotalDeaths,
                    newDeaths : data.Israel.NewDeaths,
                    newRecorverd : data.Israel.NewRecovered,
                    totalRecovered : data.Israel.TotalRecovered,
                    global : data.Global
                })
            });
    }
    render() {
        if(!this.state.country) return <Spinner animation = "border"/>
        return (
            <div id = "mainCovid">
                <h1 id = "countryTitle">{this.state.country}</h1>
                    <div id = "stats">
                            <Card bg = "dark" text = "white">
                                <Card.Header style = {{fontWeight : 'bold'}}>Total cases</Card.Header>
                                <Card.Body>{this.state.totalCases}</Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>New cases</Card.Header>
                                <Card.Body>{
                                this.state.newCases > 0 ? '+'+this.state.newCases : 0}</Card.Body>
                            </Card>
                            <Card bg = "danger" text = "white">
                                <Card.Header style = {{fontWeight : 'bold'}}>Total deaths</Card.Header>
                                <Card.Body>{this.state.totalDeaths}</Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>New deaths</Card.Header>
                                <Card.Body>{
                                this.state.newDeaths > 0 ? '+'+this.state.newDeaths : 0}</Card.Body>
                            </Card>
                            <Card bg = "success" text = "white">
                                <Card.Header style = {{fontWeight : 'bold'}}>Total Recorverd</Card.Header>
                                <Card.Body>{this.state.totalRecovered}</Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>New Recorverd</Card.Header>
                                <Card.Body>{
                                this.state.newRecorverd > 0 ? '+'+this.state.newRecorverd : 0}</Card.Body>
                            </Card>
                            <Card bg = "primary" text = "white">
                                <Card.Header style = {{fontWeight:'bold'}}>Active cases</Card.Header>
                                <Card.Body>{
                                    this.state.totalCases - this.state.totalRecovered
                                }</Card.Body>
                            </Card>
                           
                    </div>
                    <h1 id = "countryTitle">World</h1>
                    <div id = "stats">
                            <Card bg = "dark" text = "white">
                                <Card.Header style = {{fontWeight : 'bold'}}>Total cases</Card.Header>
                                <Card.Body>{this.state.global.TotalConfirmed}</Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>New cases</Card.Header>
                                <Card.Body>{
                                this.state.global.NewConfirmed > 0 ? '+'+ this.state.global.NewConfirmed : 0}</Card.Body>
                            </Card>
                            <Card bg = "danger" text = "white">
                                <Card.Header style = {{fontWeight : 'bold'}}>Total deaths</Card.Header>
                                <Card.Body>{this.state.global.TotalDeaths}</Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>New deaths</Card.Header>
                                <Card.Body>{
                                this.state.global.NewDeaths > 0 ? '+'+this.state.global.NewDeaths : 0}</Card.Body>
                            </Card>
                            <Card bg = "success" text = "white">
                                <Card.Header style = {{fontWeight : 'bold'}}>Total Recorverd</Card.Header>
                                <Card.Body>{this.state.global.TotalRecovered}</Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>New Recorverd</Card.Header>
                                <Card.Body>{
                                this.state.global.NewRecovered > 0 ? '+'+this.state.global.NewRecovered : 0}</Card.Body>
                            </Card>
                            <Card bg = "primary" text = "white">
                                <Card.Header bg = "primary" text = "white" style = {{fontWeight:'bold'}}>Active cases</Card.Header>
                                <Card.Body>{
                                    this.state.global.TotalConfirmed - this.state.global.TotalRecovered
                                }</Card.Body>
                            </Card>
                           
                    </div>
             </div>
           
        );
    }
}

export default Corona;