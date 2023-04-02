const arr = [1, 3,5]
const rowIndex = [1, 3, 5, 7, 9, 11];

let color1 = ("");

function update(){
    for (let i = 0; i < arr.length; i++){
        for(let index = 0; index < rowIndex.length; index++){
        color1 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        document.body.firstElementChild.childNodes[arr[i]].childNodes[rowIndex[index]].style.background = color1;
        console.log(color1);
        }
    }
}
setInterval(()=> {
    update();
}, 50)

