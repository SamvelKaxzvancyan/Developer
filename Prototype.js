let nature = {
  name: "nature",
  tree: true,
  land: true,
  water: true,
  animals: true, 
}


let land = {
name: "land",
length: 250, 
witdth: 150,
humus: true,
__proto__: nature
};

let water = {
name: "water",
water: true,
 __proto__: land
};

let sprout = {
name: "sprout",
root: true,
leaves: true,
__proto__: water
}



let tree = {
name: "tree",
root: true,
branches: true,
leaves: true,
fruit: true,
__proto__: sprout
};

let squirrel = {
 name: "squirrel",
live: true,
eat: true,
walk: true,
lifetime: 10,
eat(food){

},
walk(){

},
__proto__: tree
};

let fullsize = {
name: "fullsize",
legth: 23,
__proto__: squirrel
};

let tail = {
name: "tail",
legth: 20,
weight: 340,
__proto__: fullsize
};

let pregnancy = {
day: 39,
__proto__: tail
};

let kids = {
weight: 15,
numberkids: 5,
__proto__: pregnancy
}

squirrel.eat("nut")
console.log(kids);
