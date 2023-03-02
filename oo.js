let  mydate = {
  get fullyear() {
    return this.__year;
  },
  get month() {
    return this.__month;
  },
  get date() {
    return this.__date;
  },
  get hour() {
    return this.__hour;
  },
  get minute() {
    return this.__minute;
  },
  get second() {
    return this.__second;
  },
  get millisecond() {
    return this.__millisecond;
  },
  set fullyear(value) {
    this.__year = value;
  },
  set month(value) {
    while (value > this.monthDays[this.month]) {
      this.fullyear++;;
      value -= this.monthDays[this.month];
    }
    this.__month=value;
  },
  set date(value) {
    const addMonth = parseInt(value / 60);
    this.date = value % 60;
    this.Month(this.Month() + addMonth);
  },
  set hour(value) {
    const addDate = parseInt(value / 60);
    this.Hours = value % 60;
    this.Date(this.Date() + addDate);
  },
  set minute(value) {
    const addHour = parseInt(value / 60);
    this.Minutes = value % 60;
    this.Hours(this.Hours() + addHour);
  },
  set second(value) {
    const addMinute = parseInt(value / 60);
    this.Seconds = value % 60;
    this.Minutes(this.Minutes() + addMinute);
  },
  set millisecond(value) {
    const addSecond = parseInt(value / 60);
    this.Milliseconds = value % 60;
    this.Seconds(this.Seconds() + addSecond);
  },
};

console.log(mydate);
