class Clock {
    constructor(hours, minute, seconds){
    this.hours = hours,
    this.minute = minutes,
    this.seconds = seconds
    }
}

start = function(){
    setInterval(() => {
        this.seconds +=1
        if(this.seconds > 59){
            this.minutes +=1;
            this.seconds === 60
            if(this.minutes > 59){
                this.hours +=1;
                this.minutes === 60
                if(this.hours > 23){
                    this.hours === 24
                }
            }
        }
    }, 1000)
}
setAlert(hours, minutes, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },((hours - this.hours) * 60 * 60 * 1000) + ((minutes - this.minutes) *60 * 1000)+ ((seconds - this.seconds) *1000));
    })
}
//2 tarberak
//setAlert(hours, minutes, seconds) {
  //  const alertTime = new Date();
    //alertTime.setHours(hours);
    //alertTime.setMinutes(minutes);
    //alertTime.setSeconds(seconds);
  
 //   const currentTime = new Date();
    //const timeDiff = alertTime.getTime() - currentTime.getTime();
  
   // if (timeDiff < 0) {
      //return Promise.reject("Invalid alert time");
    //}
  
    //return new Promise((resolve) => {
      //setTimeout(() => {
       // resolve();
      //}, timeDiff);
    //});
  //}

const erroHanlder = (error) => {
    console.log();
}

let clock = new Clock(8, 30, 43)
clock.start();

clock.setAlert(8, 30, 43).then((result) =>{
    console.log("wake up");
}, erroHanlder);

clock.setAlert(8, 31, 10).then((result) =>{
    console.log("have a bath");
},erroHanlder);

clock.setAlert(8, 40, 12).then((result) =>{
    console.log("have a breakfast");
},erroHanlder);

clock.setAlert(8, 45, 14).then((result) =>{
    console.log("get dressed");
},erroHanlder);

clock.setAlert(8, 50, 24).then((result) =>{
    console.log("go to school ");
},erroHanlder);

clock.setAlert(9, 0, 0).then((result) =>{
    console.log("be at school");
})

console.log(clock);
