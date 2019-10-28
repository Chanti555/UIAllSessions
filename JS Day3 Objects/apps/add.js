function fun1()
{
   var person1=
   {
        //Data
        num1:10,
        num2:20,
        //Function
        sum()
        {
            console.log('Sum is:'+(this.num1+this.num2))
        },
   };
   console.log('Number1='+person1.num1)
   console.log('Number2='+person1.num2)
   person1.sum()
}