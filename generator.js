function* generator(questions) {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        yield question;
    }
}


class milionerquestion {
    constructor(playername) {
        this.playername = playername;
        const question = [
            new Question("Հարց 1: Ով է ստեղծել Java script-ը?", new Answer(["a) Брендан Эйх", "b) Джеймс Гослинг", "c) Гвидо ван Россум", "d) Бьёрн Страуструп"])),
            new Question("Հարց 2: Երբ է ստեղծվել JavaScript?", new Answer(["a) 1995", "b) 1900", "c) 1931", "d) 1998"])),
            new Question("Հարց 4: JavaScript-ում ինչ նշանով եք կառուցում զանգված?", new Answer(["a) =>", "b) <=", "c) <=>", "d) />"])),
            new Question("Հարց 4: JavaScript-ում ինչ նշանով եք կառուցում զանգված?", new Answer(["a) []", "b) ()", "c) {}", "d)<>"])),
            new Question("Հարց 5: JavaScript-ում ինչ գործողություն է անում Concat()-ը?", new Answer(["a) օգնում է գրանցվել 2 կամ 2-ից ավելի տողերով ", "b) օգնում է զանգահարել տիրույթում առկա յուրաքանչյուր ասպեկտի համար հատկանիշ", "c) օգնում է վերադարձնել տողի չափը ", "d) օգնում է վերադարձնել անհատականությունը տվյալ ցուցանիշով"]))
        ]
        const randomIndex = Math.floor(Math.random() * this.questions.length);
    }
    play(){
        this.askQuestion();
    }
    askQuestion(){
        const question = this.questions.next();
        let answer = prompt(question.value.question);
        if(answer==='help'){
            answer = prompt(Help.half(question.value.answer))
        }
        if(answer === question.value.answer.options[0]){
            alert(`Դուք ճիշտ եք `)

            this.askQuestion();
        }else{
     this.gameOver()
        }
    }
    finish(){
        if(answer === question.value.harc.harc[0]){
            alert(`Դուք վերջացրեցիք խաղը և վաստակեցիք ձեր հավաքած միավորները շնորհավորում ենք` )
        }
    }
    gameOver(){
        if(answer != question.value.answer.options[0]){
            alert("Դուք սխալ եք և դուք պարտվեցիք")
        }
    }
    harc(){
        if(answer === question.value.answer.options[0]){
            alert(`Ուզում եք շարունակել խաղը?
             a) այո b) ոչ`);
        }
        if(answer === a){
            this.question.next();
        }else{
            this.finish()
        }
    }
}
class Question {
    constructor(question,answer){
        this.question = question;
        this.answer = answer;
    }
}

class Answer {
    options=[];
    constructor(options){
        this.options = options
    }

}
class Help {
    static half(anwser){
        const result = [];
        result.push(anwser.options[0])
        const randIndex = Math.floor(Math.random()*anwser.options.length+1)
        result.push(anwser.options[randIndex]);
        return  result
    }
}


class Harc {
    harc = [];
    constructor(harc){
        this.harc = harc;
    }
}


let game = new Game("StartMilioner");
