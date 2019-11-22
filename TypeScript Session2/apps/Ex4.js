//function declaration 
//Called function
function action1() {
    console.log('---doing action1 work---');
}
//Callinig function
action1();
//IIFE code1
//Called function + Callinig function
(function () {
    console.log('---doing action2 work---');
})();
//IIFE code2
//Called function + Callinig function
(function (a, b) {
    console.log('---doing sum work---' + (a + b));
})(10, 1000);
