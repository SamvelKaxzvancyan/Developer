let score = 0;
let a = +prompt("Երբ է Հայասատանը ընդունել Քրիստոնեությունը որպես կրոն?")
if(a ===301) {
    alert("ճիշտ ես անցիր առաջ");
    score++;
}else{
    alert("Սխալ ես փորձիր ևս մեկ անգամ")
}

let b = +prompt("Երբ է հիմնադրվել Երևան է?")
if(b ===782){
    alert("ճիշտ ես անցիր առաջ")
    score++;
}else{
    alert("Սխալ ես փորձիր ևս մեկ անգամ")
}

let c = +prompt("Որ թվականին է վախճանվել Հովաննես Թումանյանը?")
if(c === 1923){
    alert("ճիշտ ես անցիր առաջ")
    score++;
}else{
    alert("Սխալ ես փորձիր ևս մեկ անգամ")
}

let d = +prompt("Երբ է ստեղծվել Հայոց Այբուբենը?")
if(d === 405){
    alert("ճիշտ ես անցիր առաջ")
    score++;
}else{
    alert("Սխալ ես փորձիր ևս մեկ անգամ")
}

let e = +prompt("Երբ է ստեղծվել JavaScript")
if(e ===1995){
    score++;
}else{
    alert("Սխալ ես փորձիր ևս մեկ անգամ")
}

if(score === 0){
    alert("Դուք չունեք ճիշտ պատասխան")
}else if(score === 1){
    alert("Դուք ունեք մեկ ճիշտ պատասխան")
}else if(score === 2){
    alert("Դուք ունեք երկու ճիշտ պատասխան")
}else if(score === 3){
    alert("Դուք ունեք երեք ճիշտ պատասխան")
}else if(score === 4){
    alert("Դուք ունեք չորս ճիշտ պատասխան")
}else if(score === 5){
    alert("Դուք ունեք հինգ ճիշտ պատասխան և դուք համարվում եք հաղթող շնորհավորում ենք")
}
