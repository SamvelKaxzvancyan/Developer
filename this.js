function Teacher(name,surname,subject) {
this.name = name;
this.surname = surname;
this.subject = subject
this.salary = 0;
let setSalary = function (amount){
  this.salary = amount;  
};
this.setSalary = function (amount){
   if(amount<45000) {
   console.log("no funds");
   }else{  
    setSalary(amount);
   }


};
}


function School(name) {
if(!new.target) {
   console.log("wrong call");
 };
this.name = name;
this.teachers = [];
this.isOpen = false
this.open = function(){
  if (this.teachers.length>3){
    this.isOpen = true
  }else{
    console.log("not allowed");
  }
};
this.getName = function() {
    return this.name;
 };
this.addMathTeacher = function (name,surName) {
    const teacher = new Teacher(name, surName, "Math");
    teacher.setSalary(50000);
    this.teachers[this.teachers.length] = teacher;
 };
this.addPhisicsTeacher = function (name, surName){
    const teacher = new Teacher(name,surName, "Physics");
    teacher.salary(48000)
    this.teachers[this.teachers.length] = teacher;
 };
this.addRussianTeacher = function (name,surName,){
    const teacher = new Teacher(name, surName, "Russian");
    teacher.salary(51000)
   this.teachers[this.teachers.length] = teacher;
 } ;
this.addArmenianTeacher = function (name,surname){
    const teacher = new Teacher(name,surName, "Armenian");
    teacher.salary(53000)
    this.teachers[this.teachers.lenght] = teacher;
 };
this.addHistoryTeacher = function (name,surName){
    const teacher = new Teacher(name,surName, "History")
    teacher.salary(56000)
    this.teachers[this.teachers.lenght] = teacher;
 };
}


let number33 = new School("Տնտեսագիտական վարժարան");

number33.open()
console.log(number33.isOpen);
number33.addMathTeacher("Armine", "Hakobyan",);
number33.open()
console.log(number33.isOpen);
number33.addPhisicsTeacher("Hermine", "Iskandaryan");
number33.open()
console.log(number33.isOpen);
number33.addRussianTeacher("Zara", "Genrikovna");
number33.open()
console.log(number33.isOpen);
number33.addArmenianTeacher("Lina", "Zobyan");
number33.open()
console.log(number33.isOpen);
number33.addHistoryTeacher("Liana", "Grigoryan")
number33.open()
console.log(number33.isOpen);

console.log(number33,teachers);


function Role(name,surName, job ){
this.name = name;
this.surName = surName;
this.job = job;
this.salary = 45000

}

function Primary(name){
if(!new.target) {
    console.log("wrong call");
  };
this.name = name
this.mains = [];
this.isAccept = false
this.accept = function(){
   if (tհis.general.salary<130000){
     this.isAccept = true
   }else{
    console.log("not accept")
   }
 };
 this.getName = function() {
  return this.name;
 };
 this.addDirector = function(name, surName){
  const general = new Role(name, surName, "Director")
  general.salary(125000)
  this.mains[this.mains.length] = main;
 };
 this.addSecretary = function(name, surName){
  const general= new Role(name, surName, "Secretary")
  general.salary(115000)
  this.mains[this.mains.length] = main;  
 };
 this.addManager = function(name, surName){
  const general = new Role(name, surName)
  general.salary(100000)
  this.mains[this.mains.length] = main;
 };
 this.addOrganizer = function(name, surName){
  const general = new Role(name, surName)
  general.salary(95000)
  this.mains[this.mains.length] = main;
 };
}

let general = new Primary("Գլխավորություն")

general.addDirector("Ani", "Chaxoyan")
general.addSecretary("Diana", "Papazyan")
general.addManager("Lusine", "Kasemyan")
general.addOrganizer("Hermine", "Manukyan")

console.log(general, mains);
