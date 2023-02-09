let school = {
number: 33,
name: "Tntesagitakanvarjaran",
kind: "highschool",
mains: {
director: "Chaxoyan",
managers: [Kasemyan, Papazyan]
},
teachers: [{
    history: [Grigoryan,Manukyan],
    russian: "Genrikovna",
    mathematics: "Hakobyan",
    geometry: "Hakobyan",
    geography: "Suqiasyan",
    economic: "Kurxinyan",
    armenian: "Zobyan",
    chemistry: "Macoyan",
    franch: "Qocharyan",
    physics: "Iskandaryan",
    english: "Poxosyan",
    biology: "Grigoryan",
    miltary: "Taqvoryan",
    informatics: "Hambardumyan",
    physical: "Ara"    
}],
 classes:[{
 fiveg: "10",
 sixg: "12",
 seveng: "18",
 eightg: "11",
 nineg: "17",
 tena: "20",
 tenb: "18",
 tenc: "21",
 elevena: "23",
 elevenb: "17",
 elevenc: "19",
 twelvea: "20",
 twelveb: "18",
 twelvec: "17",
 }],
 aboutschool: [{
teacherssalary: "40000",
classtimes: "7",
classstartes: "9.00",
classfinish: "3.00",
floors: "2",
classrooms: "32",
physicalclassroom: "1",
chemistryclassroom: "1",
biologyclassroom: "1",
canteen: "1",
library: "1",
hall: "1",
informaticsclassroom: "1",
teachersroom: "1",
directorroom: "1",
managersroom: "1",
meetingroom: "1",
 }],
}
function makeMains(director,managers){
return{
director,
managers
}
}

function makeTeachers( history, russian, mathematics, geometry, geography, economic, armenian, chemistry, franch, physics, english, biology, miltary, informatics, physical){
return{
    history,
    russian,
    mathematics,
    geometry,
    geography,
    economic,
    armenian,
    chemistry,
    franch,
    physics,
    english,
    biology,
    miltary,
    informatics,
    physical
}
}
console.log(history, russian, mathematics, geometry, geography, economic, armenian, chemistry, franch, physics, english, biology, miltary, informatics, physical)

function makeClasses(fiveg, sixg, seveng,eightg, nineg, tena, tenb, tenc, elevena, elevenb,elevenc, twelvea, twelveb, twelvec){
return{
    fiveg,
    sixg, 
    seveng,
    eightg,
    nineg, 
     tena, 
     tenb, 
     tenc,
    elevena,
    elevenb,
    elevenc,
    twelvea,
    twelveb,
    twelvec
}
}
console.log(fiveg, sixg, seveng, eightg, nineg, tena, tenb, teng, elevena, elevenb, elevenc, twelvea, twelveb, twelvec)

function makeAboutschool(teacherssalary, classtimes, classstartes, classfinish, floors, classrooms, physicalclassroom, chemistryclassroom, biologyclassroom, canteen , library, hall, informaticsclassroom, teachersroom, directorroom, managersroom,  meetingroom,){
return{
    teacherssalary,
    classtimes,
    classstartes,
    classfinish, 
    floors,
    classrooms,
    physicalclassroom,
    chemistryclassroom,
    biologyclassroom,
    canteen ,
    library,
    hall,
    informaticsclassroom,
    teachersroom,
    directorroom,
    managersroom,
    meetingroom
}
}
console.log(teacherssalary, classtimes, classstartes, classfinish, floors, classrooms, physicalclassroom, chemistryclassroom, biologyclassroom, canteen, library, hall, informaticsclassroom, teachersroom, directorroom, managersroom, meetingroom)