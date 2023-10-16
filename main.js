const questions = [
  {
    question:
      "While preparing to discharge an 8-month-old infant who is recovering from gastroenteritis and dehydration, the nurse teaches the parents about their infants dietary and fluid requirements. The nurse should include which other topics in the teaching session?",
    answers: [
      { text: "Safety guidelines", correct: true },
      { text: "Preparation for surgery", correct: false },
      { text: "Toilet Training", correct: false },
      { text: "Nursery schools", correct: false },
    ],
  },
  {
    question:
      "Nurse Betina should begin screening for lead poisoning when a child reaches which age?",
    answers: [
      { text: "3 months", correct: false },
      { text: "12 months", correct: true },
      { text: "24 months", correct: false },
      { text: "30 months", correct: false },
    ],
  },
  {
    question:
      "When caring for an 11-month-old infant with dehydration and metabolic acidosis, the nurse expects to see which of the following?",
    answers: [
      { text: "Tachypnea", correct: true },
      { text: "Shallow respirations", correct: false },
      { text: "A reduced white blood cell count", correct: false },
      { text: "A decreased platelet count", correct: false },
    ],
  },
  {
    question:
      "After the nurse provides dietary restrictions to the parents of a child with celiac disease, which statement by the parents indicates effective teaching?",
    answers: [
      {
        text: "We’ll follow these instructions until our child has completely grown and developed.”",
        correct: false,
      },
      {
        text: "Well follow these instructions until our child’s symptoms disappear.”",
        correct: false,
      },
      {
        text: "“Our child must maintain these dietary restrictions until adulthood.”",
        correct: false,
      },
      {
        text: "Our child must maintain these dietary restrictions lifelong.”",
        correct: true,
      },
    ],
  },
  {
    question:
      ". A home health nurse is performing a home assessment for safety. Which of the following comments by the patient would indicate a need for further education ",
    answers: [
      {
        text: "I will schedule an appointment with a chimney inspector next week.",
        correct: false,
      },
      {
        text: "Daylight savings is the time to change batteries on the carbon monoxide ",
        correct: false,
      },
      {
        text: "If I feel dizzy when using the heater, I need to have it inspected",
        correct: false,
      },
      {
        text: "When it is cold outside in the winter, I can warm my car up in the garage",
        correct: true,
      },
    ],
  },
  {
    question:
      "During medication administration how can the nurse properly confirm he or she has the right patient?",
    answers: [
      {
        text: ". Ask the patient to state their last name and compared this to the patient's ID arm band.",
        correct: false,
      },
      {
        text: "Ask the patient to state their full name and compare this information to the medication administration record and the patient's ID arm band.",
        correct: false,
      },
      {
        text: ". Ask the patient to state their full name along with their date of birth and compare this information to the medication administration record and the patient's ID arm band. ",
        correct: true,
      },
      {
        text: "Ask the patient to state their full name and compare this to the patient's ID arm band.",
        correct: false,
      },
    ],
  },
  {
    question:
      " The nurse notes in the MAR that the patient was ordered to take Acetazolamide 500 mg. The nurse checks the medication packaging on hand and finds it contains Acetohexamide 500 mg. The nurse is assessing which Rights of Medication Administration, and what should be the next nursing action?",
    answers: [
      {
        text: "Right Route and Right Dosage; hold dose and notify pharmacy",
        correct: false,
      },
      {
        text: " Right Dosage and Right Time; administer the medication on hand",
        correct: false,
      },
      {
        text: "Right Medication and Right Dosage; hold dose and notify pharmacy ",
        correct: true,
      },
      {
        text: "Right Medication and Right Dosage; administer the medication on hand",
        correct: false,
      },
    ],
  },
  {
    question:
      "The doctor writes an order for a medication. The nurse notes the order says to administer 12.5 mg PO. Pharmacy dispenses the nurse with 6.25 mg tablets. How many tablets will the nurse administer and what medication administration right is the nurse assessing?",
    answers: [
      {
        text: "2 tablets, right evaluation",
        correct: false,
      },
      { text: " 2.5 tablets, right calculation", correct: false },
      { text: "2 tablet, right dosage ", correct: true },
      { text: "2.5 tablets, right time", correct: false },
    ],
  },
  {
    question:
      " The patient is ordered to take Warfarin at 1800. Before administration of the medication, the nurse performs the medication administration rights. When checking the “Right Assessment” medication administration right the nurse makes it priority to check what information before administering the Warfarin?",
    answers: [
      {
        text: ". Blood pressure",
        correct: false,
      },
      { text: "PT result", correct: false },
      { text: "PTT result", correct: false },
      { text: "INR result ", correct: true },
    ],
  },
  {
    question:
      ". A patient is scheduled to take three medications at 1000. The nurse confirms the following about each medication: right medication, right dose, right time, and right route. When thinking of the first 5 Rights of Medication Administration what right is the nurse missing?",
    answers: [
      {
        text: "Right Site",
        correct: false,
      },
      { text: "Right Assessment ", correct: false },
      { text: "Right Documentation", correct: false },
      { text: "Right Patient ", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const explainButton = document.getElementById("Explain");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  explainButton.style.display = "none";
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  explainButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
