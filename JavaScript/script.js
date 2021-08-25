let text2 = document.getElementById("result");
let text1 = document.getElementById("textDisplay");
let plus = document.getElementById("plus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let mainContent = "";
let subContent = "";
let firstOperation = null;

function BtnClickedHandler(x) {
    switch (x) {
        case '+':
            // operationCalled('+');
            mainContent+="+";
            displayConent();
            console.log("+");
            break;
        case '-':
            // operationCalled('-');
            mainContent+="-";
            displayConent();
            console.log("-");
            break;
        case '*':
            // operationCalled('*');
            mainContent+="*";
            displayConent();
            console.log("*");
            break;
        case '/':
            // operationCalled('/');
            mainContent+="/";
            displayConent();
            console.log("/");
            break;
        case '7':
            mainContent+="7";
            displayConent();
            console.log("seven");
            break;
        case '8':
            mainContent+="8";
            displayConent();
            console.log("eight");
            break;
        case '9':
            mainContent+="9";
            displayConent();
            console.log("nine");
            break;
        case '4':
            mainContent+="4";
            displayConent();
            console.log("four");
            break;
        case '5':
            mainContent+="5";
            displayConent();
            console.log("five");
            break;
        case '6':
            mainContent+="6";
            displayConent();
            console.log("six");
            break;
        case '1':
            mainContent+="1";
            displayConent();
            console.log("One");
            break;
        case '2':
            mainContent+="2";
            displayConent();
            console.log("two");
            break;
        case '3':
            mainContent+="3";
            displayConent();
            console.log("three");
            break;
        case '0':
            mainContent+="0";
            displayConent();
            console.log("zero");
            break;
        case '.':
            mainContent+=".";
            displayConent();
            console.log("dot");
            break;
        case 'c':
            mainContent = "";
            displayConent();
            console.log("clear");
            break;
        case '=':
            operationCalled('=');
            console.log("equal");
            break;
    }

}
function operationCalled(operation){
    console.log("Operation Called: "+operation);
    switch(operation){
        case "=":
            break;
    }

}

function displayConent(){
    text1.innerHTML = mainContent;
}