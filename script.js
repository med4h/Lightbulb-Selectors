// Write your code here 

//go back and study/review

// using querySelector to grab each of the light bulbs from HTML
let bulb1 = document.querySelector('#lightbulb1');
let bulb2 = document.querySelector('#lightbulb2');
let bulb3 = document.querySelector('#lightbulb3');

//using querySelector to grab 'h3' or 'class = subtitle' for HTML
let subtitle = document.querySelector('.subtitle');

//creating a variable called 'count' with an initial value of 0
let count = 0;

//create an addEvent that responds to a 'click' for each lightbulb
//When you 'click' the bulb it will add 1 to the count & update string with new count value
bulb1.addEventListener('click', function() {
    count++
    
    //update the string in html using .innerHTML & include updated value using 'count' variable
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times` 
    this.classList.toggle('active')
});
bulb2.addEventListener('click', function() {
    count++
    
    //update the string in html using .innerHTML & include updated value using 'count' variable
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
    this.classList.toggle('active')
});
bulb3.addEventListener('click', function() {
    count++
    
    //update the string in html using .innerHTML & include updated value using 'count' variable
    subtitle.innerHTML = `You've clicked the lightbulbs ${count} times`
    this.classList.toggle('active')
});