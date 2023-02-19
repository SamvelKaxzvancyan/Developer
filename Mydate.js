function MyDate(year, month, date, hours, minutes, seconds, ms) {
    this.year = year,
    this.month = month,
    this.date = date,
    this.hours = hours,
    this.minutes = minutes,
    this.seconds = seconds,
    this.ms = ms
    this.getFullYear = function() {
      return this.year
    }
    this.getMonth = function () {
      return this.month
    }
    this.getDate = function() {
      return this.date
    }
    this.getHours = function() {
      return this.hours
    }
    this.getMinutes = function() {
      return this.minutes
    }
    this.getSeconds = function () {
      return this.seconds
    }
    this.getMilliseconds = function() {
      return this.ms
    }
    this.setFullYear = function(value) {
      this.year = value
    }
    this.setMonth = function(value) {
      this.month = value
    }
    this.setDate = function (value) {
      this.date = value
    }
    this.setHours = function(value) {
      this.hours = value
    }
    this.setSeconds = function(value) {
      this.seconds = value
    }
    this.setMilliseconds = function(value) {
      this.ms = value
    }
  }
  
  let date = new MyDate(2023, 2, 19, 4, 27, 35, 1000 )
  date.setFullYear(date.getFullYear() +3 );
  date.setMonth(date.getMonth() +5 );
  date.setDate(date.getDate() +7 );
  date.setHours(date.getHours() +48 );
  date.setSeconds(date.getSeconds() +120 );
  date.setMilliseconds(date.getMilliseconds() +3000 );
  console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
  