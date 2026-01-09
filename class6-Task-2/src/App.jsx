import React, { useState } from "react";

const questions = [
  {
    questionText: "React kisne banaya?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    correctAnswer: "Facebook",
  },
  {
    questionText: "useState kya return karta hai?",
    options: [
      "Sirf Value",
      "Sirf Function",
      "Array [Value, Function]",
      "Object",
    ],
    correctAnswer: "Array [Value, Function]",
  },
  {
    questionText: "Browser mein DOM ka full form kya hai?",
    options: [
      "Data Object Model",
      "Document Object Model",
      "Delete Old Model",
      "Design On Mobile",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    questionText: "React mein Component ka naam kis se shuru hona chahiye?",
    options: ["Small Letter", "Capital Letter", "Number", "Underscore"],
    correctAnswer: "Capital Letter",
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Function to handle the click
  const answerHandler = (Option) => {
    // 1. Check if the answer is correct
    if (Option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // 2. Move to the next question (Always do this!)
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };

  return (
    <div className="bg-black h-screen w-screen text-white flex flex-col items-center">
      {/* Header */}
      <h1 className="font-black text-4xl bg-gray-400 w-full text-center h-fit py-2">
        Mini Quiz Game
      </h1>


      {currentQuestion < questions.length ? (
        <div className="w-[300px] bg-white mt-2 rounded-2xl p-4">
          <h4 className="text-center text-black mt-1">
            Question: {currentQuestion + 1}/{questions.length}
          </h4>

          <h2 className="text-black text-2xl font-extrabold text-center mx-2 my-2">
            {questions[currentQuestion].questionText}
          </h2>

          <div className="flex flex-col gap-2 px-2">
        
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => answerHandler(option)} 
                className="h-10 w-full border-2 border-cyan-500 rounded-md flex items-center justify-start px-3 cursor-pointer hover:bg-cyan-100 active:scale-95 transition"
              >
                <p className="text-black font-semibold">{option}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (

        <div className="w-[300px] bg-gray-200 border-4 border-green-500 mt-6 p-5 text-center">
          <h1 className="text-black font-extrabold text-3xl">Game Over!</h1>
          <h4 className="text-lg text-black mt-2 font-bold">
            Your Score: {score} / {questions.length}
          </h4>
    
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
            }}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded font-bold"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;