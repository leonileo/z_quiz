const questions = [
    {
       question: "ዘውድ የት ይገኛል?",
       answers: [
           { choice: "A", text: "23", correct: false },
           { choice: "B", text: "22", correct: true },
           { choice: "C", text: "24", correct: false },
           { choice: "D", text: "25", correct: false },
       ]
    },
    {
       question: "Which is largest animal in the world?",
       answers: [
           { choice: "A", text: "Shark", correct: false },
           { choice: "B", text: "Gobi", correct: false },
           { choice: "C", text: "Sahara", correct: false },
           { choice: "D", text: "Antarctica", correct: true },
       ] 
    },
    {
       question: "Which is the smallest continent in the world?",
       answers: [
           { choice: "A", text: "Asia", correct: false },
           { choice: "B", text: "Austrsalia", correct: true },
           { choice: "C", text: "Arctic", correct: false },
           { choice: "D", text: "Africa", correct: false },
       ]
    },
    {
       question: "Which is the smallest continent in the world?",
       answers: [
           { choice: "A", text: "Asia", correct: false },
           { choice: "B", text: "Austrsalia", correct: true },
           { choice: "C", text: "Arctic", correct: false },
           { choice: "D", text: "Africa", correct: false },
       ]
    },
    ];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
   
    let currentQuestionIndex = 0;
    let score = 0;
   
     function startQuiz(){
       currentQuestionIndex =0;
       score = 0;
       prevButton.innerHTML = "ተመለስ";
       nextButton.innerHTML = "ቀጣይ ገጵ";
       showQuestion();
      }
   
      function showQuestion(){
       resetState();
       let currentQuestion = questions[currentQuestionIndex];
       let questionNo = currentQuestionIndex + 1;
       if(currentQuestionIndex > 0){
            prevButton.style.display = "block"
        }
        else{
            prevButton.style.display = "none"
        }
       questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
   
       currentQuestion.answers.forEach(answer => {
        //buttons
           const button = document.createElement("span");
           button.innerHTML = `<span id="sp" disabled>${answer.choice}</span> <span id="text"> ${answer.text}</span>`;
           button.classList.add("btn");
           answerButtons.appendChild(button);
           
           if(answer.correct){
                button.dataset.correct = answer.correct;
           }
           button.addEventListener("click", selectAnswer);
       });
      }
   
      function resetState(){
          while(answerButtons.firstChild){
              answerButtons.removeChild(answerButtons.firstChild);
          }
         }
   
          function selectAnswer(e){
           const selectBtn = e.target;
           const isCorrect = selectBtn.dataset.correct === "true";
            
           if (isCorrect){
            selectBtn.classList.add("correct");
            score++;
            }else{
                selectBtn.classList.add("incorrect");
            }
           Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct ==="true"){
                   button.classList.add("correct");
                   }
                   button.disabled = true;
              });
          }
           function showscore(){
               resetState();
               questionElement.innerHTML = `You scored ${score} out of ${questions.
                   length}!`;
                   nextButton.innerHTML = "play Again";
            }
           function handlePrevButton(){
                if(currentQuestionIndex > 0){
                    currentQuestionIndex--;
                    showQuestion();
                }
           }
           
           function handleNextButton(){
                currentQuestionIndex++;
                if(currentQuestionIndex < questions.length){
                   showQuestion();
                }else{
                   showscore();
                }
           }
   
           prevButton.addEventListener("click",()=>{
                if(currentQuestionIndex < questions.length){
                    handlePrevButton();
                }else{
                    startQuiz();
                }
           });
   
           nextButton.addEventListener("click",()=>{
               if(currentQuestionIndex < questions.length){
                handleNextButton();
               }else{
                   startQuiz();
               }
           });
           startQuiz();
