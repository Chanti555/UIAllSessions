function fun1()
{
    var human1=
    {
            //Data
            name:'Ajay',
            age:22,
            gender:'male',
            height:5.6,
            //Functions
            eating(it)
            {
                console.log(this.name+' love to eat '+it);
            },
            sleeping(time)
            {
                console.log(this.name+' love to sleep '+time+' hours');
            },
            walking(dt)
            {
                console.log(this.name+' love to walk '+dt+' km Distance');
            }
    }
    console.log('Name='+human1.name)
    console.log('Age='+human1.age)
    console.log('Gender='+human1.gender)
    console.log('Height='+human1.height)
    human1.eating('Biryani')
    human1.sleeping(8)
    human1.walking(4)
}