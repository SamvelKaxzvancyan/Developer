class Error {
    constructor(massage){
    this.massage = massage;
    this.name = "Error";
    }
}

class VehicleError extends Error{
    constructor(massage){
        super(massage)
        this.name = "VehicleError";
    }
}

class Vehicle{
waterLimit = 250;

  carLimit(value){
    if(value > this.waterLimit){
        throw new VehicleError ("limit is" + this.waterLimit, )
    }
    if(value < 100 ){
        throw new VehicleError ("you dont need at least 150 to ride")
    }
    this.limit = value;
  }
}

let waterLimit = new CarWaterLimit();
try {
    waterlimit.carLimit(250);
} catch (error) {
    console.log(error.name);
    console.log(error.massage);
    waterlimit.carLimit(185)
}finally{
    console.log(waterLimit);
}

class Lightcar extends Vehicle {
    gasmax = 140;
    
    carMax(value){
        if(value > this.gasmax){
            throw new VehicleError(this.gasmax)
        }
        if(value < 0){
            throw new VehicleError("empty")
        }
        this.max = value;
    }
}

let gasmax = new CarGasMax();
try {
    gasmax.carMax(140)
} catch (error) {
    console.log(error.name);
    console.log(error.massage);
    gasmax.carMax(error.max);
}finally{
    console.log(gasmax);
}

class Truck extends Vehicle {
    benzlimitation = 300;

    carLimitation(value){
        if(value > this.benzlimitation){
            throw new VehicleError (this.benzlimitation)
        }
        if(value < 0 ){
            throw new VehicleError ("you cant go")
        }
        this.limitation = value;
    }
}

let benzlimitation = new carbenzLimitation();
try {
    benzlimitation.carLimitation(300)
} catch (error) {
    console.log(error instanceof VehicleError);
    console.log(error.name);
    benzlimitation.carLimitation(235);
}finally{
    console.log(benzlimitation);
}




