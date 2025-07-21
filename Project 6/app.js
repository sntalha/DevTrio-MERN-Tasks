//JavaScript Task #2

// Question #1

function currencyChecker(currency,amount) {
    var exhangeRate = 277;
    switch (currency) {
        case "pkr":
            return amount * exhangeRate;
            break;
        case "usd":
            return amount / exhangeRate;
            break;
        default:
            console.log("Invalid Currency");
            break;
    }
}

var inUSD = currencyChecker("pkr",1);
console.log(inUSD);

var inPKR = currencyChecker("usd",277);
console.log(inPKR);

// Question #2

var students = ["Ali", "Ahmed", "Talha"];
console.log(students);

students.push("Humza");
console.log(students);

students.pop();
console.log(students);

students.unshift("Humza");
console.log(students);

students.shift("Humza");
console.log(students);

students.push("Humza", "Umer", "Reyan");
console.log(students);

students.splice(3, 1);
console.log(students);

students.splice(0, 3);
console.log(students);

// Question #3

function capitalizedString(str) {
    var words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
var cap = capitalizedString("welcome to the javascript course");
console.log(cap);

// Question #4

var sentence = "The quick brown fox jumps over the lazy dog";

// a)

var lazyToActive = sentence.replace("lazy", "active");
console.log(lazyToActive);

// b)

var foxIndex = sentence.indexOf("fox");
var fox = sentence.slice(foxIndex, foxIndex + 3);
console.log(fox);
