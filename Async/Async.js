class Clock {
    constructor(hours, minutes, seconds){
        this.hours = hours,
        this.minutes = minutes,
        this.seconds = seconds
    }
    static delay(s) {
        return new Promise((resolve) => {
        setTimeout(() => {
        resolve()
        }, s * 1000)
        })
        }
    
    async update(hours, minutes, seconds) {
        setInterval(() => {
            if(this.seconds > 59) {
                this.minutes +=1;
               this.minutes = 1;
            }
            if(this.minutes > 59) {
                this.hours +=1;
               this.minutes = 0;
            }
            if(this.hours > 23){
                this.hours = 0;
                return
            }
            console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
        }, 1000)
    }
    
    async start(){
        while(true){
            await Clock.delay(1);
            this.seconds++;
            this.update()
        }
    }
    
    async setAlert(hours, minutes, seconds){
        await Clock.delay((hours- this.hours)*3600 +(minutes -this.minutes)*60 + (seconds - this.seconds))
        while (!confirm ("wakeup")) {
            await Clock.delay(5)
        }
    }
    

}


let clock = new Clock(8, 30, 23)
clock.start();
clock.setAlert(8, 30, 28 )
