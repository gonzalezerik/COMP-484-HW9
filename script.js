
// Part 1: Date Display

var currentDate = new Date();

var currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed, so we add 1
var currentDay = currentDate.getDate();
var currentYear = currentDate.getFullYear();

// Add leading zeros if the month or day is less than 10

if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
}
if (currentDay < 10) {
    currentDay = "0" + currentDay;
}

// concatenating the final string.
var dateMessage = "Today is " + currentMonth + "/" + currentDay + "/" + currentYear;
document.getElementById("dateOutput").innerHTML = dateMessage;


// Part 2: Number Conversion
var strValOne = "88";         
var strValTwo = "250";         
var decVal = "3.14";           
var wordVal = "javascript";    

// Convert, check, and create sentences for each variable
// Number() object to convert the string
var convertedOne = Number(strValOne);

//concatenate a string together
var resultSentenceOne = "Original: '" + strValOne + "' &rarr; Converted: " + convertedOne + " &rarr; isNaN: " + Number.isNaN(convertedOne) + " &rarr; isInteger: " + Number.isInteger(convertedOne) + "<br>";

var convertedTwo = Number(strValTwo);
var resultSentenceTwo = "Original: '" + strValTwo + "' &rarr; Converted: " + convertedTwo + " &rarr; isNaN: " + Number.isNaN(convertedTwo) + " &rarr; isInteger: " + Number.isInteger(convertedTwo) + "<br>";

var convertedDecimal = Number(decVal);
var resultSentenceDecimal = "Original: '" + decVal + "' &rarr; Converted: " + convertedDecimal + " &rarr; isNaN: " + Number.isNaN(convertedDecimal) + " &rarr; isInteger: " + Number.isInteger(convertedDecimal) + "<br>";

var convertedWord = Number(wordVal);
var resultSentenceWord = "Original: '" + wordVal + "' &rarr; Converted: " + convertedWord + " &rarr; isNaN: " + Number.isNaN(convertedWord) + " &rarr; isInteger: " + Number.isInteger(convertedWord) + "<br>";

//Combine and display results
var finalConversionOutput = resultSentenceOne + resultSentenceTwo + resultSentenceDecimal + resultSentenceWord;
document.getElementById("numberConversionOutput").innerHTML = finalConversionOutput;



// Part 3: Math & Formatting


var mealCost = 45.50;
var tipRate = 0.20; // 20% tip
var taxRate = 0.08; // 8% tax

//Perform calculations

var taxAmount = mealCost * taxRate;
var tipAmount = mealCost * tipRate;
var totalCost = mealCost + taxAmount + tipAmount;

//toFixed(2) and build a string
// += to  add onto the string
var mathResults = "<p>Meal Cost: $" + mealCost.toFixed(2) + "</p>";
mathResults += "<p>Tax (8%): $" + taxAmount.toFixed(2) + "</p>";
mathResults += "<p>Tip (20%): $" + tipAmount.toFixed(2) + "</p>";
mathResults += "<p><strong>Total Bill: $" + totalCost.toFixed(2) + "</strong></p>";

//Display the results
document.getElementById("mathOutput").innerHTML = mathResults;


// Part 4: Conditionals


var conditionalMessages = "";

// Condition 1: Checking if a value is NaN
if (Number.isNaN(convertedWord)) {
    
    conditionalMessages += "<p>Check 1: The value '" + wordVal + "' is definitely not a number!</p>";
} else {
    conditionalMessages += "<p>Check 1: The value '" + wordVal + "' successfully converted to a number.</p>";
}

// Condition 2: Checking a greater than
// If the restaurant bill is over $50, output a specific message.
if (totalCost > 50) {
    conditionalMessages += "<p>Check 2: Your total of $" + totalCost.toFixed(2) + " is quite expensive! Hope the food was good.</p>";
} else {
    conditionalMessages += "<p>Check 2: Your total of $" + totalCost.toFixed(2) + " is a great deal for a meal out.</p>";
}

// Append the conditional messages to the new 4th section in the DOM
document.getElementById("conditionalsOutput").innerHTML = conditionalMessages;