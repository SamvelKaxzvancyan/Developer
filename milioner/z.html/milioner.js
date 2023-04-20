function* generator(questions) {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        yield question;
    }
}


class Game {
    constructor(playername) {
        this.playername = playername;
        this.score = 0;
        this.questionElement = document.getElementById("question");
        this.answers = document.getElementsByClassName("answerItem");
        this.halfElement = document.getElementsByClassName("half");
        this.phoneElement = document.getElementById("phone");
        this.audienceElement = document.getElementById("audience")
        this.scoreElement = document.getElementById("scoretext")
        const question = [
            new Question("Հարց 1: Ով է ստեղծել Java script-ը?", new Answer(["Брендан Эйх", "Джеймс Гослинг", "Гвидо ван Россум", "Бьёрн Страуструп"])),
            new Question("Հարց 2: Երբ է ստեղծվել JavaScript?", new Answer(["1995", "1900", "1931", "1998"])),
            new Question("Հարց 4: JavaScript-ում ինչպես է գրվում arrow function?", new Answer(["=>", "<=", "<=>", "/>"])),
            new Question("Հարց 4: JavaScript-ում ինչ նշանով եք կառուցում զանգված?", new Answer(["[]", "()", "{}", "<>"])),
            new Question("Հարց 5: JavaScript-ում ինչ գործողություն է անում Concat()-ը?", new Answer([" օգնում է գրանցվել 2 կամ 2-ից ավելի տողերով", "օգնում է զանգահարել տիրույթում առկա յուրաքանչյուր ասպեկտի համար հատկանիշ", "օգնում է վերադարձնել տողի չափը ", "օգնում է վերադարձնել անհատականությունը տվյալ ցուցանիշով"]))
        ]
        this.handleListeners();
    }
    handleListeners() {
        for (const iterator of this.answers) {
            iterator.addEventListener("click", () => {
                this.checkAnswer(iterator.innerHTML);
            })
        }
        this.halfElement.addEventListener("click", () => {
            const half = Help.half(this.currentQuestion.value.answer);
            console.log(half);
            for (const iterator of this.answers) {
                if (half.indexOf(iterator.innerHTML) === -1) {
                    iterator.parentNode.classList.add("hide")
                }
            }
        })
        this.phoneElement.addEventListener("click", () => {
            alert("Ընկերը նախընտրում է տարբերակ" + this.currentQuestion[0])
        })
        this.audienceElement.addEventListener("click", () => {
            alert("Ժողովուրդը նախընտրում է տարբերակ" + this.currentQuestion[0])
        })
    }
    checkAnswer(answer) {
        if (answer === this.currentQuestion.value.answer.options[0]) {
            this.askQuestion();
            setInterval(() => {
                document.getElementById("answerItem").style.backgroundColor = "Green"
            }, 3000);
        } else {
            setInterval(() => {
                document.getElementById("answerItem").style.backgroundColor = "Red"
            }, 3000);
            this.gameOver()
        }

    }

    play() {
        this.askQuestion();
        const playButton = document.getElementById("play");
    }
    reset() {
        for (const iterator of this.answers) {
            if (answerItem.parentNode.classList.contains("hide")) {
                answerItem.parentNode.classList.remove("hide")
            }
        }
    }
    askQuestion() {
        this.reset()
        this.currentQuestion = this.questions.next();
        this.questionElement.innerHTML = this.currentQuestion.value.question;
        console.log(this.currentQuestion.value);
        const indexes = [];
        do {
            const i = Math.floor(Math.random() * 4);
            if (indexes.indexOf(i) === -1) {
                indexes.push(i)
            }
        } while (indexes.length < 4);
        for (let i = 0; i < 4; i++) {
            this.answers[i].innerHTML = this.currentQuestion.value.answer.options[indexes[i]]
        }
    }
    finish() {
        
    }
    gameOver() {
        if (!this.currentQuestion.value.answer.options[0]) {
            return window.location.href = "./z.html"
        }
    }
    score() {
        if (this.answer === this.currentQuestion.value.answer.options[0]) {
            this.score++;
        } else {
            this.score = 0 / 5;
        }
    }
}
class Question {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

class Answer {
    options = [];
    constructor(options) {
        this.options = options
    }

}
class Help {
    static half(anwser) {
        const result = [];
        result.push(anwser.options[0])
        const randIndex = Math.floor(Math.random() * anwser.options.length + 1)
        result.push(anwser.options[randIndex]);
        return result
    }
}

class Score {
    score = [];
    constructor(score) {
        this.score = score;
        this.score += 1;
        this.score += 2;
        this.score += 3;
        this.score += 4;
        this.score += 5;
    }
}

const milioner = new Game("PlayerName");
milioner.play()

