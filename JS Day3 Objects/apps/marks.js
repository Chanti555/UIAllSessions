function fun1()
{
    var student1=
    {
        //data
        marks:[70,60,80,90,40,50],
        //function
        totalMarks()
        {
            var tot=this.marks.reduce(function(mark,t)
                {
                   return t=t+mark;       
                }
            );
            console.log('Total subject marks are:'+tot);
        },
    }
    student1.totalMarks();

}