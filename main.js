//Variable for the tag a
var anchor = document.getElementById('anchor');
//Make a event (click) and function to do when make a click in the tag
anchor.addEventListener('click', function(){
    //Variable for h1
    //what would you want to write when de even is true
    var name = document.getElementById('mr-js');
    name.innerHTML = 'Not good bah!';
})
//To change the tag a 
var a_tag = document.getElementById('active');
//a_tag.innerHTML = "HI";
//click , and something happing
a_tag.addEventListener('click', function(){
    var name2 = document.getElementById('mr-js');
    name2.innerHTML = "Soy Mr Javascript";
})