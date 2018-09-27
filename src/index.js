// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let countCoints = {};
    while (currency) {
        if (currency > 10000){
            countCoints.error = "You are rich, my friend! We don't have so much coins for exchange";
            break;
        } else if (currency > 49 && currency < 10001) {
            countCoints["H"] = parseInt(currency/50, 10);
            currency = currency - countCoints["H"]*50;
        } else if (currency > 24 && currency < 50) {
            countCoints["Q"] = parseInt(currency/25, 10);
            currency = currency - countCoints["Q"]*25;
        } else if (currency > 9 && currency < 25) {
            countCoints["D"] = parseInt(currency/10, 10);
            currency = currency - countCoints["D"]*10;
        } else if (currency > 4 && currency < 10) {
            countCoints["N"] =  parseInt(currency/5, 5);
            currency = currency - countCoints["N"]*5;
        }else if (currency > 0 && currency < 5) {
            countCoints["P"] = currency;
            currency = currency - countCoints["P"];
        } else {
            break;
        }
    }

    return countCoints;
}
