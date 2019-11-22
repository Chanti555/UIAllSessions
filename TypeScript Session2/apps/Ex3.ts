//function expression 
let fun1=function()
{
    return 'Welcome1';
}
console.log(fun1())
//arrow function
let fun2=()=>
{
    return'Welcome2';
};
console.log(fun2())
//addition: function expression 
let add1=function(a,b)
{
    return a+b;
}
console.log(add1(10,100));
//arrow function
let add2=(a,b)=>
{
    let c:number;
    c=a+b;
    return c;
}
console.log(add2(100,1000))
//arrow function
let add3=(a,b)=>
{
    return a+b;
}
console.log(add3(1000,10000))
//arrow function with single line body
let add4=(a,b)=>a+b;
console.log(add4(44,56));
//arrow function 
let inc1=(a)=>a+1;
console.log(inc1(10));
//arrow function with single parameter
let inc2=a=>a+100;
console.log(inc2(8));