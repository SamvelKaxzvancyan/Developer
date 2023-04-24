let str = ""

for (let i = 0; i < 10; i++) {
    for (let j = 10 - i; j < 10; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);

let str2 = "";
for (let i = 0; i < 10; i++) {
    for (let j = 10 - i; j < 10; j++) {
        str2 += "";
    }
    for (j = 0; j < 10 - i; j++) {
        str2 += "*";
    }
    str2 += "\n"
}
console.log(str2);

let str3 = "";

for (let i = 0; i < 10; i++) {
    for (let j = 10; j < 10 - i; j++) {
        str3 += "";
    }
    for (j = 0; j < 10 - i; j++) {
        str3 += "*"
    }
    str3 += "\n"
}
console.log(str3);

let str4 = "";

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10 - i; j++) {
        str4 += "";
        for (j = 0; j < i + 1; j++) {
            str4 = "*";
        }
        str4 = "\n";
    }
}
console.log(str4);

let str5 = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        str5 = ""
        for (j = 0; j < i + 1; j++) {
            str5 = "*";
        }
        str3 += "\n"
    }
}

let str6 = "";

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3 - i; j++) {
        str6 += "";
    }
    for (j = 0; j < i + 1; j++) {
        str6 += "*";
    }
    str6 += "\n"
}
for (let i = 0; j < 4; i++) {
    for (j = 0; j < 3 - i; j++) {
        str6 += "";
    }
    for (j = 0; j < i + 1; j++) {
        str6 += "*";
    }
    str6 += "\n"
}
for (let i = 2; i < 5; i++) {
    for (j = 0; j < 4 - i; j++) {
        str6 += "";
    }
    for (j = 0; j < i + 1; j++) {
        str6 += "\n";
    }
}
console.log(str6);
