export const getSpecificDay = date => {
    var day = new Date(date).getDay();
    switch(day) {
        case 0 : return 'Sun';
        case 1 : return 'Mon';
        case 2 : return 'Tue';
        case 3 : return 'Wed';
        case 4 : return 'Thu';
        case 5 : return 'Fri';
        case 6 : return 'Sat';
        default : return "";
    }
};

export const getShortDate = date => {
    var day = new Date(date).getDate();
    var month = new Date(date).getMonth() + 1;

    return day+'/'+month;
};
export const getIsDayOrNight = () => {
    var hour = new Date().getHours();
    if (hour>6 && hour<19)  return 'Day';
    else return 'Night';
}