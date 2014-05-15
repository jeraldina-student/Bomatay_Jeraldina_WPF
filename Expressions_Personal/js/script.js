/* Jeraldina Bomatay
May 15 2014
Assignment: Expressions */

/* Personal - how much gas do you consume on a weekly basis.

- determine gas mileage consumption
- Find:
   * car mpg   
   * cost of gas
   * miles for commute
   * parking
   * miles for going to church

how many miles per gallon does your car consume?
mpg

What is the current rate for gas?
gasPrice

How many miles do you commute to work on a  weekly basis?
workMiles

What is the weekly cost of parking
parking

Enter number of miles to weekly activity?
miscActivity
 */

var mileage = Array();

mileage['mpg'] = prompt("What is the mpg rate for your car?");
mileage['gasPrice'] = prompt("What is the current price for gas per gallon");
mileage['workMiles'] = prompt("How many miles do you commute to work on a weekly basis?");
mileage['parking'] = prompt("What is the weekly cost of parking?");
mileage['miscActivity'] = prompt("Do you have a weekly activity? Please enter the number of miles to said weekly activity. Ex: Church, gym etc..");

var totalMiles = mileage['workMiles'] + mileage['miscActivity'];
console.log("You commute "+totalMiles+" miles and spend $"+mileage['parking']+" on parking.");

var commutePrice = (totalMiles/mileage['mpg']) * mileage['gasPrice'] + (mileage['parking']);
alert("Your total commute spending is "+commutePrice+" on a weekly basis.");
console.log("You are spending "+commutePrice+" commuting on a weekly basis.");









