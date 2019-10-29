function fun1()
{
    //data
    var items=
    {
        'biryani':250,
        'icecream':25,
        'bottle':20,
        'cooldrinks':50,
        //function
        searchingItem(findItem)
        {
            for(x in items)
            {
                if(x==findItem)
                {
                    console.log(findItem+' item is Exist');
                    break;
                }
                else
                    console.log(findItem+' item is Not Exist');
            }
        }
    };
    items.searchingItem('Nons');
}