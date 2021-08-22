var text1 = document.getElementById("textDisplay");
var text2 = document.getElementById("result");
var plus = document.getElementById("plus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var clear = document.getElementById("clear");
var equal = document.getElementById("equal");
var mainContent = "";
var subContent = "";

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
            mainContent+="7=0";
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
}
function displayConent(){
    text1.innerHTML = mainContent;
}