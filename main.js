//Variable for the tag a
var anchor = document.getElementById('anchor');
//Make a event (click) and function to do when make a click in the tag
anchor.addEventListener('click', function(){
    //Variable for h1
    var name = document.getElementById('mr-js');
    //what would you want to write when de even is true
    name.innerHTML = 'Not good bah!';
})
//To change the tag a 
var a_tag = document.querySelector('a');
//a_tag.innerHTML = "HI";
//click , and something happing
a_tag.addEventListener('click', function(){
    alert('Hello')
})