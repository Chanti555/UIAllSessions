function dosum()
{
    var n1=document.getElementById('t1').value;
    var n2=document.getElementById('t2').value;
    var sum=eval(n1)+eval(n2);
    document.getElementById('t3').value=sum;
}
function dosub()
{
    var n1=document.getElementById('t1').value;
    var n2=document.getElementById('t2').value;
    var sub=eval(n1)-eval(n2);
    document.getElementById('t3').value=sub;
}