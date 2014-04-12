/* Made by
Jeraldina Bomatay
4/10/2014
Assignment: Expressions
 */
 
 
 /* Calculate the tax bracket for year 2013 based on your adjusted gross income.

2013 Tax Brackets (for taxes due April 15, 2014)
Tax rate   Single filers	       Married filing jointly   Married filing separately	Head of household
10%	       Up to $8,925	           Up to $17,850	         Up to $8,925	            Up to $12,750
15%	       $8,926 to $36,250	   $17,851 to $72,500	     $8,926 to $36,250	        $12,751 to $48,600
25%	       $36,251 to $87,850	   $72,501 to $146,400	     $36,251 to $73,200	        $48,601 to $125,450
28%	       $87,851 to $183,250	   $146,401 to $223,050	     $73,201 to $111,525        $125,451 to $203,150
33%	       $183,251 to $398,350	   $223,051 to $398,350	     $111,526 to $199,175	    $203,151 to $398,350
35%	       $398,351 to $400,000    $398,351 to $450,000	     $199,176 to $225,000	    $398,351 to $425,000
39.6%	   $400,001 or more	       $450,001 or more	         $225,001 or more	        $425,001 or more
 */
 

var bracket;
var year = "2013";
var income = prompt("What is your income for " + year + "?");
var standard = prompt("What is your standard deduction? Single, married filing jointly, married filing separately or head of household");
var dependents = prompt("Do you have any dependents? If none write 0");
var exemptions = prompt("Please write your exemptions. If none write 0");

if ("single" === standard) {
	var standard = 10150;
    var grossincome = (income - (standard + dependents + exemptions));
    if (grossincome >= 0 || grossincome < 8925) {
        bracket = "10%";
    }
    if (grossincome >= 8926 && grossincome <= 36250) { 
        bracket = "15%";
    }
    if (grossincome >= 36251 && grossincome <= 87850) { 
        bracket = "25%";
    }
    if (grossincome >= 87851 && grossincome <= 183250) { 
        bracket = "28%";
    }
    if (grossincome >= 183251 && grossincome <= 398350) { 
        bracket = "33%";
    }
    if (grossincome >= 398351 && grossincome <= 400000) { 
        bracket = "35%";
    }
    if (grossincome <= 450001) { 
        bracket = "39.6%";
    }
if ("married filing jointly" === standard) {
	var standard = 20300;
    var grossincome = (income - (standard + dependents + exemptions));
    if (grossincome > 0 && grossincome < 17850) {
        bracket = "10%";
    }
    if (grossincome >= 17851 && grossincome <= 72500) { 
        bracket = "15%";
    }
    if (grossincome > 72501 && grossincome < 146400) { 
        bracket = "25%";
    }
    if (grossincome > 146401 && grossincome < 223050) { 
        bracket = "28%";
    }
    if (grossincome > 223051 && grossincome < 398350) { 
        bracket = "33%";
    }
    if (grossincome > 398351 && grossincome < 450000) { 
        bracket = "35%";
    }
    if (grossincome < 400001); { 
        bracket = "39.6%";
    }
if ("married filing separately" === standard) {
	var standard = 8925;
    var grossincome = (income - (standard + dependents + exemptions));
    if (grossincome > 0 && grossincome < 8925) {
        bracket = "10%";
    }
    if (grossincome > 8926 && grossincome < 36250) { 
        bracket = "15%";
    }
    if (grossincome > 36251 && grossincome < 73200) { 
        bracket = "25%";
    }
    if (grossincome > 73201 && grossincome < 111525) { 
        bracket = "28%";
    }
    if (grossincome > 111526 && grossincome < 199175) { 
        bracket = "33%";
    }
    if (grossincome > 199176 && grossincome < 225000) { 
        bracket = "35%";
    }
    if (grossincome < 225001) { 
        bracket = "39.6%";
    }
if ("head of household" === gender); {
    var standard = 12750;
    var grossincome = (income - (standard + dependents + exemptions));
    if (grossincome > 0 && grossincome < 12750) {
        bracket = "10%";
    }
    if (grossincome > 12751 && grossincome < 48600) { 
        bracket = "15%";
    }
    if (grossincome > 48601 && grossincome < 125450) { 
        bracket = "25%";
    }
    if (grossincome > 125451 && grossincome < 203150) { 
        bracket = "28%";
    }
    if (grossincome > 203151 && grossincome < 398350) { 
        bracket = "33%";
    }
    if (grossincome > 398351 && grossincome < 425000) { 
        bracket = "35%";
    }
    if (grossincome < 425001); { 
        bracket = "39.6%";
    }
}
}
}
}
alert ("Your tax bracket for " + year + " is " + bracket + " . Your adjusted gross income is " + grossincome);