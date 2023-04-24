class MyDate {
    _year = 2022
    _month = 11
    _date = 21
    _hour = 48
    _minute  = 24
    _second = 120
    _milisecond = 3000

    set year(value){
        this._year = value
    }
    get year(){
        return this._year
    }

    set month(value){
        this._month = value
        let monthDays = [30, 29, 28, 31]
        while (value > this.monthDays[this.month]) {
            this.fullyear++;;
             value -= this.monthDays[this.month];}
    }
    get month(){
        return this._month
    }

    set date(value){
        this._date = value
        const addMonth = parseInt(value / 30);
        this.date = value % 30;
        this.Month(this.Month() + addMonth);
    }
    get date(){
        return this._date
    }

    set hour(value){
        this._hour = value
        const addDate = parseInt(value / 24);
        this.Hours = value % 24;
        this.Date(this.Date() + addDate);
    }
    get hour(){
        return this._hour
    }

    set minute(value){
        this._minute = value
        const addHour = parseInt(value / 60);
        this.Minutes = value % 60;
        this.Hours(this.Hours() + addHour);
    }
    get minute(){
        return this._minute
    }

    set second(value){
        this._second = value
        const addMinute = parseInt(value / 60);
        this.Second = value % 60;
        this.Minutes(this.Minutes() + addMinute);
    }
    get second(){
        return this._second
    }

    set milisecond(value){
        this._milisecond = value
        const addSecond = parseInt(value / 1000);
        this.Millisecond = value % 1000;
        this.Seconds(this.Seconds() + addSecond)
    }
    get milisecond(){
        return this._milisecond
    }
};


let n = new MyDate(2022, 7, 10, 24, 48 , 60, 1000)
console.log(n);
