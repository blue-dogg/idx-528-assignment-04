const name="Tong";

console.log(name);

let age="25";

console.log(age);

console.log(age*5);

const last_name="Yang";

var full_name=(name + ", " + last_name);

console.log(full_name);

//Full name is required to be last name, first.

var fruits = [
    "Apples",
    "Oranges",
    "Pears",
    "Bananas",
    "Cherries",
]

if(fruits.length<5){
    console.log("Only a few fruits!");
}else if(fruits.length>5){
    console.log("Nice list of fruits.");
}else if(fruits.length=5){
    console.log("FRUUUITS!!");
}

var price=(fruits[0]);

switch(price){
    case "Apples":
       console.log("$0.99");
       break;
    case "Oranges":
       console.log("$1.05");
       break;
    case "Pears":
       console.log("$1.50");
       break;
    case "Bananas":
       console.log("$0.49");
       break;
    case "Cherries":
       console.log("$3.01");
}

