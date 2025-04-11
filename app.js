let sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euros){
    let euroToDollar = oneEuroIs.USD;
    let conversion = euroToDollar * euros;
    return conversion
}
console.log(fromEuroToDollar(3.5));

module.exports = { sum, fromEuroToDollar };

function fromDollarToYen(dollar) {
    let dollarToEuro= 1 / oneEuroIs.USD;
    let euros = dollar * dollarToEuro;
    let dollarToYen = euros * oneEuroIs.JPY;

    return dollarToYen
}

console.log(fromDollarToYen(3.5));

module.exports = { sum, fromEuroToDollar, fromDollarToYen };

function yenToPound(yen){
let euros = 1 / oneEuroIs.JPY;
let yenes = yen * euros;
let pounds = yenes * oneEuroIs.GBP;

return pounds;
}

console.log(yenToPound(1000));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, yenToPound };

