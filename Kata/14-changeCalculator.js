const calculateChange = function (total, cash) {
    let change = cash - total;
    const denominations = {
        "twentyDollar": 2000,
        "tenDollar": 1000,
        "fiveDollar": 500,
        "twoDollar": 200,
        "oneDollar": 100,
        "quarter": 25,
        "dime": 10,
        "nickel": 5,
        "penny": 1
    };

    let changeGiven = {};
    
    for (denom in denominations) { //seems to garantee in order enumeration, not certain
        // change removing the remainder and divding by the amount to give the amount of bills for this denomination
        let amt = (change - (change % denominations[denom])) / denominations[denom];
        if (amt > 0){ 
            changeGiven[denom] = amt;
            change -= (amt * denominations[denom]); //removing this amount from the pool
        }
    }
    return changeGiven;
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));