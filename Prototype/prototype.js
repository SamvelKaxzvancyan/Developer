let nature = {
  name: "nature",
}


let land = {
name: "land",
length: 250, 
witdth: 150,
humus: true,
__proto__: nature
};


let sprout = {
  name: "sprout",
  root: true,
  leaves: true,
  __proto__: land
  }


let tree = {
name: "tree",
root: true,
branches: true,
leaves: true,
fruit: true,
__proto__: sprout
};


let animal = {
  name: "animal",
  eat(food){

  },
  walk(){
  
  },
}

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
__proto__: animal
};

let pregnancy = {
  day: 39,
  __proto__:  squirrel
  };
  
  let kids = {
    weight: 15,
    numberkids: 5,
    __proto__: pregnancy
    }

let characterization = {
  name: "characterization",
  __proto__: kids
}

  
let fullsize = {
name: "fullsize",
legth: 23,
__proto__: characterization
};

let tail = {
name: "tail",
legth: 15,
weight: 30,
__proto__:  fullsize
};


squirrel.eat("nut")
console.log(tail, tree);
