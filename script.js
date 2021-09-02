const quizData = [
    {
        question: "1 + 1 = ?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b"
    }, 
    {
        question: "1 - 1 = ?",
        a: "3",
        b: "2",
        c: "1",
        d: "0",
        correct: "d"
    },
    {
        question: "1 x 1 = ?",
        a: "10",
        b: "100",
        c: "1",
        d: "1000",
        correct: "c"
    },
    {
        question: "(1 + 1) + (1 + 1) = ?",
        a: "2",
        b: "4",
        c: "6",
        d: "8",
        correct: "b"
    }
]

const questionEl = document.getElementById("question"); /* สร้างตัวแปร คำตอบ */
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answersEls = document.querySelectorAll(".answer");
  

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            return  answerEl.id;
        }
    });

    return undefined;
}

submitBtn.addEventListener("click", () => {
    //เข็คคำตอบ
    const answer = getSelected();
    
    currentQuiz++;

    

    if(answer){
        if (currentQuiz < quizData.length){ //เมื่อคำถามหมด = เสร็จสิ้น
            loadQuiz();
        } else {
            alert("You Finish!!");
        }
    }

});