function showEmpInfo()
{
    var emp=
    [
        {id:1,name:'Ajay',salary:45000,pic:'1.jpg'},
        {id:2,name:'Varun',salary:35000,pic:'2.jpg'},
        {id:3,name:'Teja',salary:25000,pic:'3.jpg'},
    ];
    console.log(emp);
    var t='';
    t=t+'<tr><th>ID</th>';
    t=t+'<th>NAME</th>';
    t=t+'<th>SALARY</th>';
    t=t+'<th>IMAGE</th></tr>';
    for(var i=0;i<emp.length;i++)
    {
        t=t+'<tr>';
        t=t+'<td>'+emp[i].id+'</td>';
        t=t+'<td>'+emp[i].name+'</td>';
        t=t+'<td>'+emp[i].salary+'</td>';
        t=t+"<td><img src="+emp[i].pic+" height='50px' width='50px'></td>";
        t=t+'</tr>';
    }
    document.getElementById('tab1').innerHTML=t;
}