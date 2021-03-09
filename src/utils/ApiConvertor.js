
const apiKey = "V5FfcZrrJ0SQGbZSnLx3JSJZ0AuMWfng";
const baseURL = "https://dataservice.accuweather.com/";
const baseAutoComplete = "locations/v1/cities/autocomplete"


export const getIconURL = (icon) => {
    if (icon<10) icon = "0"+ icon;
    let iconURL = "https://developer.accuweather.com/sites/default/files/"+icon+"-s.png";
    return iconURL;
}

export const getAutoCompleteURL = (query) =>{
    var url = baseURL+baseAutoComplete+"?apikey="+apiKey+"&q="+query;
    return url;
}