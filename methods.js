//lenght կբերի hello world-ի տաոերի քանակը։
//toUpperCase բոլոր բառերի  տառերը կդարծնի Մեծատառ:
//toLowerCase բոլոր բառերի  տառերը կդարծնի փոքռաատառ:
//replace Այն թույլ է տալիս փոխարինել տողի ենթատողը մեկ այլ ենթատողի հետ:
//chartAt Այն թույլ է տալիս տալ ինդեքս charAt-ին և դրա շնորհիվ այն կբերի տված ինդեքսում գտնվող բառի տառը։
//repeat Այն թույլ է տալիս տված տողը մի քանի անգամ կրկնել և վերջում բերել նոր տող։
//search Այն թույլ է տալիս ման գալ տրված տողը իսկ եթե չի գտնում ապա տալիս է -1։
//split Այն թույլ է տալիս որոշակի սահմանով տողը բաժանել ենթատողերի զանգվածի և վերադարձնել այդ զանգվածը:
//toString Այն թույլ է տալիս փողել object stringi կամ number stringi և վերադարձնում է այդ տողի արժեքը։
//slice Այն թույլ է տալիս տալ ինդեքս և այն կվերադարձնի տողը այն տեղից որտեղ որ գտնվում է այդ ինդեքսը։Մեր դեպքում կբերի WORLD Է։
//substring  Այն թույլ է տալիս վերադարձնել տողի հատվածը երկու ինդեքսների միջև ներառյակ սկզբի ինդեքսը բայց ոչ վերջինը։

let str = ("hello world")
console.log(str.length);

let str2 = "Hello World";
str = str.toLowerCase().replace( function(firstLetter) {
    return firstLetter.toLowerCase();
});

console.log(str);

let str3 = "hello world";
str = str.toUpperCase();

console.log(str);


console.log(str);

let str4 = "Hello World";
let firstChar = str.charAt(0);

console.log(firstChar);

let str5 = "Hello";
let repeatedStr = str.repeat(3);

console.log(repeatedStr);

let str6 = "Hello World";
let index = str.search(/World/);

console.log(index);

let str7 = "Hello World";
let words = str.split(" ");

console.log(words);

//այստեղ պետք է վերադարցներ stringov բայց չգիտեմ ինչի չարեց։
let number = 42;
let str8 = number.toString();

console.log(str);

let str9 = "Hello World";
let substr = str.slice(6);

console.log(substr);

let str10 = "Hello World";
let substr1 = str.substring(6, 11);

console.log(substr);
