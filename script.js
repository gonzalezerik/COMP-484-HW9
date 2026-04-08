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

// 1st if/else statement 
var wordCheckMsg = "";
if (Number.isNaN(convertedWord)) {
    wordCheckMsg = "<p><em>Note: The value '" + wordVal + "' is not a valid number.</em></p>";
} else {
    wordCheckMsg = "<p><em>Note: The value '" + wordVal + "' is a valid number.</em></p>";
}

//Combine and display results
var finalConversionOutput = resultSentenceOne + resultSentenceTwo + resultSentenceDecimal + resultSentenceWord + wordCheckMsg;
document.getElementById("numberConversionOutput").innerHTML = finalConversionOutput;



// Part 3: Math & Formatting (Option C: Large numbers)

var totalPopulation = 8100000000;
var yearlyIncrease = 75000000; 
var yearsToProject = 5;

//Perform calculations 

var totalIncrease = yearlyIncrease * yearsToProject;
var futurePopulation = totalPopulation + totalIncrease;

// EXTRA CREDIT: Ternary Operator 
// Syntax: condition ? trueValue : falseValue
var growthStatus = yearlyIncrease > 0 ? "Positive" : "Negative";

//toLocaleString() and build a string
// += to add onto the string
var mathResults = "<p>Current Population: " + totalPopulation.toLocaleString() + "</p>";
mathResults += "<p>Yearly Growth: " + yearlyIncrease.toLocaleString() + " (" + growthStatus + ")</p>";
mathResults += "<p>Increase over 5 years: " + totalIncrease.toLocaleString() + "</p>";
mathResults += "<p><strong>Projected Population: " + futurePopulation.toLocaleString() + "</strong></p>";

// 2nd if/else statement 
if (futurePopulation > 8400000000) {
    mathResults += "<p><em>Message: This is a huge number!</em></p>";
} else {
    mathResults += "<p><em>Message: it wasnt too bad!</em></p>";
}

//Display the results
document.getElementById("mathOutput").innerHTML = mathResults;