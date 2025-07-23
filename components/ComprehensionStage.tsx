import React, { useState } from 'react';
import { ComprehensionQuestion } from '../types';

interface ComprehensionStageProps {
  questions: ComprehensionQuestion[];
  onComplete: (answers: (number | null)[]) => void;
}

const ComprehensionStage: React.FC<ComprehensionStageProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(answers);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white dark:bg-stone-800 rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-stone-800 dark:text-stone-100 mb-2">Preguntas de Comprensión</h2>
      <p className="text-center text-stone-500 dark:text-stone-400 mb-6">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
      
      <div className="bg-amber-100 dark:bg-stone-700 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold text-stone-700 dark:text-stone-200 text-center">{currentQuestion.questionText}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => {
          const isSelected = answers[currentQuestionIndex] === index;
          return (
            <button
              key={index}
              onClick={() => handleSelectOption(index)}
              className={`p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                isSelected 
                ? 'bg-emerald-500 border-emerald-600 text-white font-bold shadow-md dark:bg-emerald-400 dark:border-emerald-500 dark:text-stone-900' 
                : 'bg-white border-stone-200 hover:bg-amber-50 hover:border-amber-400 dark:bg-stone-900 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-600 dark:hover:border-amber-500'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleNext}
          disabled={answers[currentQuestionIndex] === null}
          className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 disabled:bg-stone-300 disabled:cursor-not-allowed dark:disabled:bg-stone-600 dark:disabled:text-stone-400"
        >
          {isLastQuestion ? 'Continuar al Vocabulario' : 'Siguiente Pregunta'}
        </button>
      </div>
    </div>
  );
};

export default ComprehensionStage;