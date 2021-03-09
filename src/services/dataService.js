import bussData from '../constants/json/buss.json';
import sportsData from '../constants/json/sport.json';
import entData from '../constants/json/ent.json';
import techData from '../constants/json/tech.json';
import generalData from '../constants/json/general.json';

const dataService = (selectedCategory) => {
    switch(selectedCategory) {
        case "general": return generalData;
        case "sports": return sportsData;
        case "technology": return techData;
        case "entertainment": return entData;
        case "business": return bussData;
        default : return generalData;
    }
}
export default dataService;