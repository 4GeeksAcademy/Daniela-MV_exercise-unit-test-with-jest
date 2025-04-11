 const { sum } = require('./app.js')
 test('adds 14 + 9 to equal 23',()=>{
     let total = sum(14,9);
     expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    let { fromEuroToDollar } = require('./app.js');

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be 146.26 yenes", function() {
    let { fromDollarToYen } = require('./app.js');


    expect(fromDollarToYen(3.5)).toBe( 511.9158878504673);
})

test("One yen should be 146.26 yenes", function() {
    let { fromDollarToYen } = require('./app.js');


    expect(fromDollarToYen(3.5)).toBe( 511.9158878504673);
})