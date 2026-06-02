var seconds = 0;
setInterval(function (){
    seconds = seconds + 1;
    document.getElementById("timer").textContent = "you have been here for " + seconds + "seconds!";

} , 1000
);

function checkForm() {

    var name = document.getElementById("name").value
    var guess = document.getElementById("guess").value
    var ok = true

    if ( name == "" ){
    document.getElementById("msg-name").textContent = "please enter your name"
    document.getElementById("msg-name").style.color = "red";

} else{
    document.getElementById("msg-name").textContent = "great name"
    document.getElementById("msg-name").style.color = "green";


}


 if ( guess =="" ){
    document.getElementById("msg-guess").textContent = "please enter your name"
    document.getElementById("msg-guess").style.color = "red";

} else{
    document.getElementById("msg-guess").textContent = "guess"
    document.getElementById("msg-guess").style.color = "green";


}

if (ok ==true){
var lucky= math.floor(math.random()*5 ) + 1

}

if (guess==lucky){
 document.getElementById("result").textContent = "you win" = + name;
    document.getElementById("result").style.color = "green";


    
}

else  {
document.getElementById("result").textContent = "the lucky number was" + lucky
document.getElementById("result").style.color = "navy";
}


}