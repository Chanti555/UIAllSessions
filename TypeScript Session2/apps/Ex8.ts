//Here b is called as Rest parameter
function shownumbers(a,...b)
{
    console.log('a='+a);
    console.log('b='+b);
}
shownumbers(1,2);
shownumbers(11,2,3,4,5);