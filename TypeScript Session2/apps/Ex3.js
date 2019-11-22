//function expression 
var fun1 = function () {
    return 'Welcome1';
};
console.log(fun1());
//arrow function
var fun2 = function () {
    return 'Welcome2';
};
console.log(fun2());
//addition: function expression 
var add1 = function (a, b) {
    return a + b;
};
console.log(add1(10, 100));
//arrow function
var add2 = function (a, b) {
    var c;
    c = a + b;
    return c;
};
console.log(add2(100, 1000));
//arrow function
var add3 = function (a, b) {
    return a + b;
};
console.log(add3(1000, 10000));
//arrow function
var add4 = function (a, b) { return a + b; };
console.log(add4(44, 56));
//arrow function
var inc1 = function (a) { return a + 1; };
console.log(inc1(10));
//arrow function
var inc2 = function (a) { return a + 100; };
console.log(inc2(8));
