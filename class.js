class MyDate {
    constructor(name, year, month, date, hour, minute, second, millisecond, ){
        this.name = name;
        this.year = year;
        this.month = month;
        this.date = date;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond
        this.monthDays = [31, 29, 28, 30]
    }
};

class Year extends MyDate {
    constructor(year) { 
        super(MyDate);
       this.getFullyear = function(){
        return this.year;
       }
       this.setFullyear = function(value){
       this.year = value;
       }
    }
 };


class Month extends MyDate {
    constructor(month){
        super(month);
       this.getMonth = function(){
        return this.month;
       }
        let MonthDays =[29, 30, 31, 28]
       this.setMonth = function(value){
       while (value > this.monthDays[this.month]) {
        this.fullyear++;;
         value -= this.monthDays[this.month];}
       }
    }
 };


class Date extends MyDate {
    constructor(date){
        super(date);
        this.getDate = function(){
         return this.date;
        }
        this.setDate = function(value){
        const addMonth = parseInt(value / 30);
    this.date = value % 30;
    this.Month(this.Month() + addMonth);
        }
    }
};

class Hour extends MyDate {
    constructor(hours) {
        super(hours);
        this.getHours = function(){
            return this.hours;
        }
        this.setHours = function(value){
        const addDate = parseInt(value / 24);
        this.Hours = value % 24;
        this.Date(this.Date() + addDate);
        }
    }
};

class Minute extends MyDate {
    constructor(minute){
        super(minute);
        this.getMinutes = function(){
            return this.minute;
        }
        this.setMinute = function(value){ 
            const addHour = parseInt(value / 60);
            this.Minutes = value % 60;
            this.Hours(this.Hours() + addHour);
        }
    }
};

class Second extends MyDate {
    constructor(second){
        super(second);
        this.getSeconds = function(){
            return this.second;
        }
        this.setSecond = function(value){
            const addMinute = parseInt(value / 60);
            this.Second = value % 60;
            this.Minutes(this.Minutes() + addMinute);
        }
    }
};

class Millisecond extends MyDate {
    constructor(millisecond){
        super(millisecond);
       this.getMillisecond = function(){
            return this.millisecond;
       } 
       thi.setMillisecond = function(value){ 
        const addSecond = parseInt(value / 1000);
        this.Millisecond = value % 1000;
        this.Seconds(this.Seconds() + addSecond)
       }
    }
};


let d = new MyDate(2022, 2022, 11, 21, 48, 24, 120, 3000)
//kodi verjin 116 121 toxere chi ashxatum talise e vor d is not function: Nayev d console.log aneluc 2022 : year berelu texe berum e 2022 : name dranic heto nor year
//d.setFullYear(d.getFullYear() + 3);
//d.setMonth(d.getMonth() + 15);
//d.setDate(d.getDate() + 6);
//d.setHours(d.getHour() + 24);
//d.setSeconds(d.getSecond() + 120);
//d.setMilliseconds(d.getMillisecond() + 3000)
console.log(d);
