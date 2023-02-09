function Teacher(name,surname, subject,) {
this.name = name;
this.surname = surname;
this.subject = subject
this.salary = 0;
let setSalary = function (amount){
  this.salary = amount;  
  };
 }
this.setSalary = function (amount){
   if(amount<45000) {
   console.log("no funds");
   }else{  
    setSalary(amount);
   }
 };



function School(name) {
if(!new.target) {
   console.log("wrong call");
 };
this.name = name;
this.teachers = [];
this.open = function(){
  if (this.teachers.length>3){
    this.isOpen = true
  }else{
    console.log("not allowed")
  }
};

this.getName = function() {
    return this.name;
 };
this.addMathTeacher = function (name,surName) {
    const teacher = new Teacher(name, surname, "Math");
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

number33.addMathTeacher("Armine", "Hakobyan",);
number33.open()
number33.addPhisicsTeacher("Hermine", "Iskandaryan");
numver33.open()
number33.addRussianTeacher("Zara", "Genrikovna");
number33.open()
number33.addArmenianTeacher("Lina", "Zobyan");
number33.open()
number33.addHistoryTeacher("Liana", "Grigoryan")
number33.open()


number33.teachers[1].setSalary(60000)
console.log(number33,teachers);

function Main(name, surName, role){
this.name = name ;
this.surName = surName;
this.role = role

};

function Primary(name) {
    this.name = name;
    this.mains= [];
    this.pay= function(){     
    }
     if (role.salary<130000){
       this.pay = ("accept")
     }else{
     console.log("not accept")
    }
this.getName = function() {
    return this.name;
 };
this.addDirector = function (name, surName){
   const role = new  Main(name,surName, "Director");
   role.salary(125000)
   this.mains(this.mains.lenght) = main;
 } ;
this.addSecretary = function (name, surName){
   const role = new Main(name, surName, "Secretary")
   role.salary(10000) 
   this.mains(this.mains.lenght) = main;
 };
 this.addManager = function(name, surName){
   const role = new Main(name, surName, "Manager")
   role.salary(95000) 
   this.mains(this.mains.lenght) = main; 
 };
 }


let high = new Primary("Գլխավորություն")

high.addDirector("Ani", "Chaxoyan");
high.addSecretary("Diana", "Papazyan");
high.addManager('Meri', "Kasemyan")

console.log(high,mains)