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

function euroToDollar(dollar){
    let euro = 1 / oneEuroIs.USD;
    let dollares = euro * dollar
    return dollares
}
console.log(euroToDollar(7));

// function fromDollarToYen(){
//     let dollar = oneEuroIs.USD;
//     let yen = oneEuroIs.JPY;
//     let oneDollar = undefined,

//     let resultadoEnDollar = (oneDollar * yen) / dollar;

// }

// console.log(fromDollarToYen(12))