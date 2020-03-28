function a() {   
    alert('A!');
    function b(){
        alert('B!'); 
    }
    return b();
}

var s = a();
alert('break');
s();

/*The code above will execute 'A!', then 'B!', then 'break' and will return undefined (but not in the alert method). Things to have in mind: 
when assigning the variable with (), var s = a() , basically you're executing the function. Also, when executing the funtion like s(), the function will return the value that the previous call has returned. As the function doesn't return any value, the default value is undefined.*/


function a() {
    alert('A!');
    function b(){
        alert('B!'); 
    }
    return b;
}

var s = a();
alert('break');
s();

/*The code above will execute 'A!', then 'break', then 'B!'. The function above will execute the "alert('A') block" and then it will return a reference to the function b(). So, when s(); is executed, it will return the value that it was previously return tof the fuction, which is a reference for the method b(), then the "alert('B!')" is executed. */