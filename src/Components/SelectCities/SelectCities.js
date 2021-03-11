import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { getAutoCompleteURL } from '../../utils/ApiConvertor';
import './SelectCities.css';

class SelectCities extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedCityKey : ''
         };
    }
    componentDidMount() {
        
    }
   async filterCities (inputValue) {
        const url = new Request (getAutoCompleteURL(inputValue))
        let citiesArr = [];

        if (inputValue.length !== 0){
            try {
                const request = await fetch(url);
                const cities = await request.json();
                citiesArr = cities.filter(cityElem => cityElem.Type ==='City')
                .map(city =>({value :  city.LocalizedName , label :  city.LocalizedName+" , "+city.Country.LocalizedName ,key : city.Key ,country : city.Country.LocalizedName }));
            } catch (error) {
                console.log("server requests is limited")
            }
            

        }
        
        return citiesArr.filter(i => {
            return i.label.toLowerCase().includes(inputValue.toLowerCase())
         }
        );
      };
      
    promiseOptions = inputValue =>
        new Promise(resolve => {
          setTimeout(() => {
              resolve(this.filterCities(inputValue));
          }, 1500);
        });
    onSelect =  city => {
       this.props.onSelectCity(city);
    }
    render() {
        if (!this.props.currentCity) return <h1>loading...</h1>
        if (this.props.isSignedIn === true)
        return ( 
            <div id = "selectCityInput">
               <AsyncSelect id="selectBox"
                cacheOptions 
                defaultOptions
                defaultInputValue = {this.props.currentCity}
                loadOptions={this.promiseOptions}
                onChange = {this.onSelect}
                placeholder="Enter a city" /> 
               </div>
        );
        else 
        return <div id = "selectCityInput">For multiple weather location options - login&nbsp;<Link to= "/Login">here</Link></div>
    }
}

export default SelectCities;