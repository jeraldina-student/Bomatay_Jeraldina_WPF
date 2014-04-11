/* Made by
Jeraldina Bomatay
4/10/2014
Assignment: Expressions
 */
 
 
 /* FIND BMR  for a healthy weight
Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years )
Men: BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
 */
 
var bmr;
var gender = prompt("Are you male or female?");
var weight = prompt("How many pounds do you weigh?");
var height = prompt("What is your height in inches?");
var age = prompt("What is your age?");



if ("female" === gender) {
    bmr = 655+ (4.35 * weight) + (4.7 * height) - (4.7 * age);
}
if ("male" === gender) {
    bmr =  66+ (6.23 * weight) + (12.7 * height) - (6.8 * age); 
    
}   
alert ("Your bmr is " + bmr );