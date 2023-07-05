// Define the questions and answers
var questions = [
    {
      question: "What is Homer Simpson's favorite food?",
      answer: "Donuts"
    },
    {
      question: "What are Marge's twin sisters called?",
      answer: "Patty and Selma"
    },
    {
      question: "Who is Bart's evil twin?",
      answer: "Hugo"
    },
    {
      question: "What instruments does Lisa play?",
      answer: "Saxophone"
    },
    {
      question: "Who did Maggie Simpson shoot?",
      answer: "Mr. Burns"
    }
  ];
  
  // Function to check the user's answer
  function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      return "Correct!";
    } else {
      return "Incorrect. The correct answer is: " + correctAnswer;
    }
  }
  
  // Main function to run the quiz
  function runQuiz() {

    localStorage.setItem("SimpsonQuizAnswer", JSON.stringify("Answer"));
    localStorage.getItem("Answer")
    var score = 0;
  
    // Iterate over each question
    for (var i = 0; i < questions.length; i++) {
      var userAnswer = prompt(questions[i].question);
      var result = checkAnswer(userAnswer, questions[i].answer);
  
      // Display the result for each question
      alert(result);
  
      // Increase the score if the answer is correct
      if (result === "Correct!") {
        score++;
      }
    }
  
    // Display the final score
    alert("Quiz completed! Your score is: " + score + "/" + questions.length);
  }
  
  // Run the quiz

  //add button and event listener. 
  
  

  //HAVE THIS WORK CHECKED BY SOMEONE ELSE ------------------------------------------------ SAM OR JESS-----