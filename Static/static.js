class Flower {
    static price = 0
constructor(name, count, color,){
this.name = name
this.count = count
this.color = color
Flower.price += this.count
 }
}

class Rose extends Flower{
    constructor(name, count, color){
        super(name, count, color)        
    }
}

class Tulip extends Flower{
    constructor(name, count, color){
        super(name, count, color)
    }
}

class Clove extends Flower{
    constructor(name, count, color){
        super(name, count, color)
    }
}

let rosebuqeit = new Rose("rose", 22, "red")
let tulipbuqiet = new Tulip("tulip", 24, "white")
let clovebuqeit = new Clove("clove", 13, "yellow")
console.log(Flower.price);


class Vehicle {
    priceAmount = 0;
    colorAmount = 0;
    motorAmount = 0;
    energyAmount = 0;
    waterlimit = 0;
    speedlimit = 0;
    gaslimit = 0
    set priceAmount(value){
        if (value < 13000)
        console.log(notprice);
        this.priceAmount = value;
        }

        get priceAmount(){
            return this.priceAmount;
        }

    set energyAmount(value){
        if (value > 5000)
        console.log(takecar);
        this.energyAmount = value;
    }

    get energyAmount(){
        return this.energyAmount
    }

    #cheackgas(value){
        if (value < 100)
        console.log(eleka);
        if(value === 200)
        console.log(full);
    }

    #checkspeed(value){
        if(value < 100)
        console.log(krasaragnas);
        if(value > 260){
            console.log(limit);
        }
    }

    #checkwater(value){
        if(value < 0)
        console.log(false);
        if(value > 100)
        console.log(true);
    } 

    constructor(name, color, kind, power){
    this.name = name,
    this.color = color,
    this.kind = kind,
    this.power = power 
    }
}

let vehicle = new Vehicle();
Vehicle.priceAmount = (12000)
Vehicle.colorAmount = (2500)
Vehicle.motorAmount = (5700)
Vehicle.energyAmount = (8000)
Vehicle.#checkwater()
Vehicle.#waterlimit = (200)
Vehicle.#checkspeed()
Vehicle.#speedlimit = (260)
Vehicle.#checkgas()
Vehicle.#gaslimit = (125)


class Lightcar extends Vehicle{
       wheelAmount = 0;
       lightAmount = 0;
       caroil = 0;
       carbenz = 0

    set wheelAmount(value){
        if (value < 1500)
        console.log(donttakewheel);
    }
    
    get wheelAmount(){
        return this.wheelAmount;
    }

    #checkbenz(){
        if(value > 100)
        console.log(full);
        if(value < 100){
            console.log(empty);
        }
    }

    #checkoil(value){
        if(value > 0)
        console.log(full)
        if(value === 0)
        console.log(empty);
    }

    constructor(name){
        super(name, color, kind, power)
    }
}
let bmw = new Lightcar();
Lightcar.wheelAmount = (1500)
Lightcar.lightAmount = (1000)
Lightcar.#checkoil()
Lightcar.#checkcaroil(125)
Lightcar.#checkbenz()
Lightcar.#checkcarbenz = (130)

class Truck extends Vehicle{
    carweight = 0;
    radioAmount = 0;
    cartire = 0
    cargolimit = 0

    set radioAmount(value){
        if (value < 500)
        console.log(vercraavelitanke);
    }        

    #checltire(){
        if(value > 4)
        console.log(stop);
        if(valye < 4)
        console.log(countinue);
    }

    #checkcargo(){
        if(value > 100)
        console.log(go);
        if(value < 100)
        console.log(qiche);
    }

    constructor(name){
    super(name, color, kind, power)
    }
}
let ford = new Truck();
Truck.carweight = (1200)
Truck.radioAmount = (500)
Truck.#checktire()
Truck.#checkcartire = (4)
Truck.#checkcargo()
Truck.#checkcargolimit = (300)

class Array {
    constructor(name){
        this.name = name;
        
    }
}

class ArraySum extends Array{
    constructor(name){
        super(name)
    }
    sum(){

    

       let result = 0
       for (let i = 0; i < this.length; i++) {
         if(typeof this[i] ==="number")
            result += this[i]
       }
        return result
    }
}

let arraysum = ArraySum(1, 2, 5, 6, 7, 8, 9, 10, 14, 13,)
console.log(ArraySum);

String.prototype.toUpper = function(){
    console.log("London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.[1] It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.[9] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval  boundaries".toUpper());
}
