
// Question#1

var age = prompt("Enter your age: ");

if (age <= 12) {
    alert("Your ticket price: $8")
} else if (age >= 13 && age <= 59) {
    alert("Your ticket price: $12")
} else {
    alert("Your ticket price: $10")
}

// Question#2

var order = +prompt("Our Coffee Shop's Menu: \n 1. Espresso: $3 \n 2. Cappuccino: $4 \n 3. Latte: $5 \n 4. Mocha: $6 \n Enter your option (1-4): ");

switch (order) {
    case 1:
        alert("Your Order: Espresso \n Price: $3")
        break;
    case 2:
        alert("Your Order: Cappuccino \n Price: $4")
        break;
    case 3:
        alert("Your Order: Latte \n Price: $5")
        break;
    case 4:
        alert("Your Order: Mocha \n Price: $6")
        break;
    default:
        alert("Invalid Option.")
        break;
}

// Question#3

var n = prompt("Enter the value of n for sum of n numbers: ");
var sum = 0;
for (let i = 0; i <= n; i++) {
    sum += i;
}
alert(`Sum = ${sum}`);

// Question#4

var grade = prompt("Enter your grade: ");
var extra = prompt("Have you participated in extracurricular activities?: ")

switch (grade) {
    case "A":
        extra == "Yes" ? alert("You are awarded a full scholarship") : (extra == "No" ? alert("You are awarded a half scholarship") : alert("Invalid Information! "));
        break;
    case "B":
        extra == "Yes" ? alert("You are awarded a half scholarship") : (extra == "No" ? alert("You are awarded a quarter scholarship"): alert("Invalid Information!"));
        break;
    case "C":
        alert("You are not eligible for scholarship");
        break;
    default:
        alert("Invalid Information!")
        break;
}

// Question#5

var tableNo = prompt("Enter the table number: ");
var range = prompt("Enter table range: ");

for (let i = 1; i <= range; i++) {
    console.log(tableNo, " x ", i, " = ", tableNo * i); 
}