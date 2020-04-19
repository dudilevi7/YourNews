//const apiKey = "6OwPQ2hmTrq3buEVnQrF2UddMVhyYun2";
const apiKey = "V5FfcZrrJ0SQGbZSnLx3JSJZ0AuMWfng";
const baseURL = "http://dataservice.accuweather.com/";
const baseForecast = "forecasts/v1/daily/5day/";
const baseCurrentConditions = "currentconditions/v1/"
const baseAutoComplete = "locations/v1/cities/autocomplete"
const baseByLocation = "";

export const getForecastURL = (currentCityKey) => {

    return '';
}

export const getIconURL = (icon) => {
    if (icon<10) icon = "0"+ icon;
    let iconURL = "https://developer.accuweather.com/sites/default/files/"+icon+"-s.png";
    return iconURL;
}

export const getAutoCompleteURL = (query) =>{
    var url = baseURL+baseAutoComplete+"?apikey="+apiKey+"&q="+query;
    return url;
}