let x = +prompt('First value')
if(x == number ){
    brake;
}
else if{
    x = +prompt("Unable to perform this operation Enter number")
}
console.log(`x = ${x}`);

let action = new Action("+", "-", "*", "%") 
if(action == "+" || action == "-" || action == "*" || action == "%"){
    break}
else if{
    action = +prompt("Unable to perform this operation Enter one of the following characters +, -, *, % ")
}
console.log(`action = ${action}`);

let y  = +prompt("Second value")
if(y == number ){
    brake;
}
else if{
    y = +prompt("Unable to perform this operation Enter number")
}
console.log(`y = ${y}`)

let result = 0
switch (action) {
    case "+":
        result = x + y;
        break;
    case "-":
        break;
    case "*":
        break;
    case "%":
        break;
    default:
        break;
}
+alert(` ${x}  ${action}  ${y} ${result} `)
