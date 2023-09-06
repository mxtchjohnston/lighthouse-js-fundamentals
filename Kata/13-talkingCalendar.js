const talkingCalendar = function (date) {
    const components = date.split("/");
    const months = {
       "01":"January",
       "02":"February",
       "03":"March",
       "04":"April",
       "05":"May",
       "06":"June",
       "07":"July",
       "08":"August",
       "09":"September",
       "10":"October",
       "11":"November",
       "12":"December"
    };

    const days = {
        "01":"1st",
        "02":"2nd",
        "03":"3rd",
        "04":"4th",
        "05":"5th",
        "06":"6th",
        "07":"7th",
        "08":"8th",
        "09":"9th",
        "10":"10th",
        "11":"11th",
        "12":"12th",
        "13":"13th",
        "14":"14th",
        "15":"15th",
        "16":"16th",
        "17":"17th",
        "18":"18th",
        "19":"19th",
        "20":"20th",
        "21":"21st",
        "22":"22nd",
        "23":"23rd",
        "24":"24th",
        "25":"25th",
        "26":"26th",
        "27":"27th",
        "28":"28th",
        "29":"29th",
        "30":"30th",
        "31":"31st"
    };

    return `${months[components[1]]} ${days[components[2]]}, ${components[0]}`; //why moment.js exists
  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));