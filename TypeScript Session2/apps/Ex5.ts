let sum1=function(a:number,b:number):void
{
    let c:number=a+b;
    console.log('Sum is:'+c);
    console.log('Sum of '+a+' and '+b+' is:'+c);
    //template literals
    console.log(`Sum of ${a} and ${b} is:${c}`);
}
sum1(100,23);
let printMyName=(x:string):void=>
{
    console.log(`My Name is: ${x}`);
}
printMyName('Chanti')
printMyName('James')
