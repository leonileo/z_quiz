const questions = [
    {
        question: "ከሚከተሉት ውስጥ የኢትዮጵያ ባህላዊ የቤት ውስጥ የሙዚቃ መሳሪያ የትኛው ነው?",
        answers: [
            { choice: "ሀ", text: " ፒያኖ", correct: false },
            { choice: "ለ", text: " ጊታር", correct: false },
            { choice: "ሐ", text: " ማሲንቆ", correct: true },
            { choice: "መ", text: " ትራንፔት?", correct: false },
        ]
     },
     {
         question: "የኢትዮጵያ ባህላዊ የቡና ሥነ ሥርዓት ስንት ጊዜ ይፈላል?",
         answers: [
             { choice: "ሀ", text: " አንድ", correct: false },
             { choice: "ለ", text: " አራት", correct: false },
             { choice: "ሐ", text: " ሁለት", correct: false },
             { choice: "መ", text: " ሶስት?", correct: true },
         ]
      },
 
      {
         question: "በአለት በተፈለፈሉ አብያተ ክርስቲያናት የምትታወቀው የኢትዮጵያ ታሪካዊ ከተማ የትኛው ነው?",
         answers: [
             { choice: "ሀ", text: " አዲስ አበባ", correct: false },
             { choice: "ለ", text: " ላሊበላ", correct: true },
             { choice: "ሐ", text: " አክሱም", correct: false },
             { choice: "መ", text: " ጎንደር?", correct: false },
         ]
      },
      {
         question: " በርካታ የኦሎምፒክ የወርቅ ሜዳሊያዎችን ያስገኘው ታዋቂው ኢትዮጵያዊ የረጅም ርቀት ሯጭ ማን ነው?",
         answers: [
             { choice: "ሀ", text: " ኤሊዩድ ኪፕቾጌ", correct: false },
             { choice: "ለ", text: " ሃይለ ገብረስላሴ", correct: true },
             { choice: "ሐ", text: " ዩሴይን ቦልት", correct: false },
             { choice: "መ", text: " ሞ ፋራህ?", correct: false },
         ]
      },
      {
         question: "በሴቶች 10,000 ሜትር የአለም ክብረ ወሰን ያለው የትኛው ኢትዮጵያዊ አትሌት ነው?",
         answers: [
             { choice: "ሀ", text: " ጥሩነሽ ዲባባ", correct: true },
             { choice: "ለ", text: " ፍሎረንስ ግሪፊዝ ጆይነር", correct: false },
             { choice: "ሐ", text: " ሼሊ-አን ፍሬዘር-ፕራይስ", correct: false },
             { choice: "መ", text: " ካስተር ሴሜንያ?", correct: false },
         ]
      },
      {
         question: "የኢትዮጵያ አዲስ አመት ምን ይባላል?",
         answers: [
             { choice: "ሀ", text: " ገና", correct: false },
             { choice: "ለ", text: " ፋሲካ", correct: false },
             { choice: "ሐ", text: " ጥምቀት", correct: false },
             { choice: "መ", text: " እንቁጣጣሽ?", correct: true },
         ]
      },
      {
         question: "በ19ኛው ክፍለ ዘመን ሀገሪቱን በማዘመን የሚታወቁት የኢትዮጵያ ንጉሠ ነገሥት የትኛው ነው?",
         answers: [
             { choice: "ሀ", text: " ዳግማዊ አፄ ምኒልክ", correct: true },
             { choice: "ለ", text: " ዳግማዊ አፄ ኃይለ ሥላሴ", correct: false },
             { choice: "ሐ", text: " ዳግማዊ አፄ ቴዎድሮስ", correct: false },
             { choice: "መ", text: " ዳግማዊ አፄ ዮሐንስ ፬ኛ?", correct: false },
         ]
      },
    ];
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
   
    let currentQuestionIndex = 0;
    let score = 0;
    let vidBtn = document.getElementById("vid");
    let vvidBtn = document.getElementById("vvid");
    let muBtn = document.getElementById("muBtn");
    let opnVidBtn = document.getElementById("opnVid");


    let mute = function(){
        vvidBtn.muted = vvidBtn.muted === true ? false : true;
        muBtn.innerHTML = vvidBtn.muted === true ? "ድምጸ አብራ" : "ድምጸ አጥፋ"
    }


    let opnVid = function()
    {
        vidBtn.style.zIndex = vidBtn.style.zIndex > 1 ? "-1" :"100";
        opnVidBtn.innerHTML = vidBtn.style.zIndex > 1 ? "ጥያቄ አሳይ" : "ቪዲዮ አሳይ"
    }

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
               questionElement.innerHTML = `ከ ${questions.
                   length} ጥያቄዎች ${score} መልሰዋል!`;
                   nextButton.innerHTML = "ድጋሜ ይሞክሩ";
                   prevButton.style.display = "none";
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
