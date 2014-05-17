/* Jeraldina Bomatay
May 15 2014
Assignment: Expressions */

/* Malcolm Gladwell's book, Outliers, says that in order to gain mastery of a skill one must spend 10,00 hours in practice.
We shall apply this same logic to practicing javascript and other web languages

What web language do you want to learn? 
=webLang

How many hours have you spent up to this point learning this new language?
hoursStudy

You have ______ of hours left to study webLang
hoursStudy - 10000 = hoursLeft

console.log (hoursLeft / 8) / (7) / 52)

Would you like to learn a new web language? Name the new web language you want to learn.
newLang

How many hours a week would you like to spend learning this new language
(10000/hoursLearning) / 52

hoursLearning 
yrsLearn


If you continue learning +newLang+ +hourslearning+ a week you will spend +yearslearn+ years learning +newLang

It will take you ___ years learning newLanf and learning weblang  */

var learnLang = Array();

learnLang['webLang'] = prompt("What web language do you want to learn?");
learnLang['hoursStudy'] = prompt("How many hours have you spent up to this point learning this new language?");

var hoursLeft = hoursStudy - 10000;
var yearsLeft = (hoursLeft / 8) / (7) / 52;
console.log ("Assuming you spend 8 hours a day learning "+webLang+" you have "+yearsLeft+" to master this language.");

learnLang['newLang'] = prompt("Would you like to learn a new web language? Name the new web language you want to learn.");

learnLang['hoursLearning'] = prompt("How many hours a week would you like to spend learning "+newLang+"?");
var yrsLearn = (10000/hoursLearning) / 52;










