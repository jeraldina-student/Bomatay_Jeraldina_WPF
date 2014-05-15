alert("Welcome");

//create a js file that will tell us how old we are
//create a variable to hold the person's name
var name = prompt("Type in your name:");

//alert the user
alert("Welcome "+name+"! We have one more question for you.");


//Ask user to tell us year of birth
//Create variable to hold that year
var yearBorn = prompt("What year were you born?");


//console log the answer (for us for checking various things)
 console.log("You were born in "+yearBorn+".");

//Current year and subtract the year they were born
var currentYear = 2014;

//capture the person's age
var age = currentYear - yearBorn -1;

//alert user of their age
alert(name+"you are "+age+" years old.");

//let;s make this mpore complex 
//how old will you be in the future

var yearsMore = prompt("How many years in the future would you like to be?");
var futureAge = age + Number(yearsMore); 
console.log(futureAge);

//make the results "pretty"
console.log("You will be "+futureAge+" in "+yearsMore+"years."); 
/*