<button id="clock" onclick="wakeUp()">
hello
</button>
<p id="raj">

</p>

var z= [Math.floor(Math.random()*5)+1];
//creates a random number from 1-5 with the *5 and +1//
var z= parseInt(z);
//makes z into an integer//
var x = z*1000
// new var that makes the value into miliseconds//
function wakeUp(){
setTimeout(function() {
//this sets up the timeout function with in another function, 
document.getElementById('raj').innerHTML= "WAKE UP!"
//displays wake up in raj p element//
}, x);
}
