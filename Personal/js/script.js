/* Personal - how much gas do you consume on a weekly basis.

- determine gas mileage consumption
- Find:
   * car mpg   
   * cost of gas
   * miles for commute
   * miles for going to church

how many miles per gallon does your car consume?
mpg

(gasPrice / mpg )  * weeklyCommute

What is the current rate for gas?
gasPrice

How many miles do you commute to work on a  weekly basis?
workMiles

What is the weekly cost of parking
parking

Enter number of miles to weekly activity?
miscActivity

workMiles+parking+miscActivity = weeklyCommute */

var mpg = prompt("What is the mpg rate for your car?");
var gasPrice = prompt("What is the current price for gas per gallon");
var workMiles = prompt("How many miles do you commute to work on a weekly basis?");
var parking = prompt("What is the weekly cost of parking?");
var miscActivity = prompt("Do you have a weekly activity? Please enter the number of miles to said weekly activity. Ex: Church, gym etc..");
var weeklyCommute = workMiles + parking + miscActivity;
console.log("You commute "+weeklyCommute+"miles.");


var commutePrice = weeklyCommute * (gasPrice/mpg);

alert("You are spending "+commutePrice+" commuting on a weekly basis.");
console.log("You are spending "+commutePrice+" commuting on a weekly basis.");









