import bussData from '../constants/json/buss';
import sportsData from '../constants/json/sport';
import entData from '../constants/json/ent';
import techData from '../constants/json/tech';
import generalData from '../constants/json/general';

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