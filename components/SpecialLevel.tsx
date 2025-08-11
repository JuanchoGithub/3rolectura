
import React, { useState } from 'react';
import { QuestData } from '../types';
import ReconstructionStage from './ReconstructionStage';

interface SpecialLevelProps {
  story: QuestData;
  onComplete: () => void;
  onStartReconstruction: () => void;
}

const SpecialLevel: React.FC<SpecialLevelProps> = ({ story, onComplete, onStartReconstruction }) => {
  const [stage, setStage] = useState<'menu' | 'reading' | 'questions' | 'reconstruction'>('menu');
  const [selectedMode, setSelectedMode] = useState<'questions' | 'scenes' | 'sentences' | 'reconstruction' | null>(null);
  const [readingStartTime] = useState(Date.now());
  const [shuffledQuestions] = useState(() => {
    // Separate questions by difficulty
    const easyQuestions = story.comprehensionQuestions.filter(q => q.difficulty === 'easy');
    const mediumQuestions = story.comprehensionQuestions.filter(q => q.difficulty === 'medium');
    const hardQuestions = story.comprehensionQuestions.filter(q => q.difficulty === 'hard');
    
    // Shuffle each difficulty group
    const shuffleArray = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    const shuffledEasy = shuffleArray(easyQuestions);
    const shuffledMedium = shuffleArray(mediumQuestions);
    const shuffledHard = shuffleArray(hardQuestions);
    
    // Create the specific pattern: 5 easy, 2 medium, 3 easy, then random remaining
    const orderedQuestions = [];
    
    // First 5 easy questions
    orderedQuestions.push(...shuffledEasy.slice(0, 5));
    
    // Next 2 medium questions
    orderedQuestions.push(...shuffledMedium.slice(0, 2));
    
    // Next 3 easy questions
    orderedQuestions.push(...shuffledEasy.slice(5, 8));
    
    // Remaining questions (randomly mixed)
    const remaining = [
      ...shuffledEasy.slice(8), // remaining easy
      ...shuffledMedium.slice(2), // remaining medium
      ...shuffledHard // all hard questions
    ];
    
    // Shuffle the remaining questions
    const shuffledRemaining = shuffleArray(remaining);
    orderedQuestions.push(...shuffledRemaining);
    
    return orderedQuestions;
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showStory, setShowStory] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'easy': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'hard': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-stone-400';
    }
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;

  const handleFinishedReading = () => {
    const endTime = Date.now();
    const timeElapsedSeconds = (endTime - readingStartTime) / 1000;
    const wordCount = story.passage.split(/\s+/).length;
    const wpm = timeElapsedSeconds > 0 ? Math.round(wordCount / (timeElapsedSeconds / 60)) : 0;
    
    console.log(`Reading completed in ${timeElapsedSeconds} seconds. WPM: ${wpm}`);
    setStage('questions');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newAnswers);

    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowStory(false); // Hide story when moving to next question
    } else {
      setIsCompleted(true);
    }
  };

  // Menu Stage - Choose between Questions or Reconstruction
  if (stage === 'menu') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-amber-800 dark:text-amber-200 mb-4">{story.title}</h1>
          <p className="text-lg text-gray-600 dark:text-stone-300 mb-8">
            Elegí qué modo querés usar para trabajar con esta historia:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Questions Mode */}
          <div className="bg-blue-50 dark:bg-stone-700 p-6 rounded-lg shadow-md border-2 border-blue-200 dark:border-stone-600 hover:border-blue-400 dark:hover:border-stone-500 transition-all duration-200">
            <div className="text-center">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-3">Modo Preguntas</h3>
              <p className="text-gray-600 dark:text-stone-300 mb-4 text-xs leading-relaxed">
                Respondé 30 preguntas de comprensión sobre la historia.
              </p>
              <button
                onClick={() => {
                  setSelectedMode('questions');
                  setStage('reading');
                }}
                className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 font-semibold transition-all duration-200 text-sm"
              >
                Comenzar Preguntas
              </button>
            </div>
          </div>

          {/* Scene Ordering Mode */}
          <div className="bg-green-50 dark:bg-stone-700 p-6 rounded-lg shadow-md border-2 border-green-200 dark:border-stone-600 hover:border-green-400 dark:hover:border-stone-500 transition-all duration-200">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-3">Ordenar Escenas</h3>
              <p className="text-gray-600 dark:text-stone-300 mb-4 text-xs leading-relaxed">
                Ordená las escenas de la historia cronológicamente.
              </p>
              <button
                onClick={() => {
                  setSelectedMode('scenes');
                  setStage('reading');
                }}
                className="w-full px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 font-semibold transition-all duration-200 text-sm"
              >
                Comenzar Ordenamiento
              </button>
            </div>
          </div>

          {/* Sentence Construction Mode */}
          <div className="bg-orange-50 dark:bg-stone-700 p-6 rounded-lg shadow-md border-2 border-orange-200 dark:border-stone-600 hover:border-orange-400 dark:hover:border-stone-500 transition-all duration-200">
            <div className="text-center">
              <div className="text-4xl mb-4">�</div>
              <h3 className="text-lg font-bold text-orange-800 dark:text-orange-300 mb-3">Construir Oraciones</h3>
              <p className="text-gray-600 dark:text-stone-300 mb-4 text-xs leading-relaxed">
                Armá oraciones seleccionando sujetos, verbos y objetos.
              </p>
              <button
                onClick={() => {
                  setSelectedMode('sentences');
                  setStage('reading');
                }}
                className="w-full px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-600 font-semibold transition-all duration-200 text-sm"
              >
                Comenzar Construcción
              </button>
            </div>
          </div>

          {/* Full Reconstruction Mode */}
          <div className="bg-purple-50 dark:bg-stone-700 p-6 rounded-lg shadow-md border-2 border-purple-200 dark:border-stone-600 hover:border-purple-400 dark:hover:border-stone-500 transition-all duration-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-bold text-purple-800 dark:text-purple-300 mb-3">Reconstrucción Completa</h3>
              <p className="text-gray-600 dark:text-stone-300 mb-4 text-xs leading-relaxed">
                Combiná ambas actividades: ordenar escenas y construir oraciones.
              </p>
              <button
                onClick={() => {
                  setSelectedMode('reconstruction');
                  setStage('reading');
                }}
                className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 font-semibold transition-all duration-200 text-sm"
              >
                Comenzar Reconstrucción
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={onComplete}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 dark:bg-stone-600 dark:text-stone-200 dark:hover:bg-stone-500 transition-all duration-200"
          >
            ← Volver al Menú Principal
          </button>
        </div>
      </div>
    );
  }

  // Reading Stage
  if (stage === 'reading') {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-amber-800 dark:text-amber-200 mb-2">{story.title}</h1>
          <p className="text-lg text-gray-600 dark:text-stone-300 mb-4">
            Leé la historia completa. Al terminar, vas a responder preguntas sobre ella.
          </p>
        </div>

        <div className="bg-amber-50 dark:bg-stone-700 p-8 rounded-lg shadow-md mb-6">
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-stone-200 leading-relaxed whitespace-pre-line">
            {story.passage}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              if (selectedMode === 'questions') {
                handleFinishedReading();
              } else if (selectedMode === 'scenes' || selectedMode === 'sentences' || selectedMode === 'reconstruction') {
                setStage('reconstruction');
              }
            }}
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 font-semibold text-lg shadow-md transition-all duration-200"
          >
            {selectedMode === 'questions' 
              ? 'Ya Terminé de Leer - Comenzar Preguntas'
              : selectedMode === 'scenes'
                ? 'Ya Terminé de Leer - Comenzar Ordenamiento'
                : selectedMode === 'sentences'
                  ? 'Ya Terminé de Leer - Comenzar Construcción'
                  : 'Ya Terminé de Leer - Comenzar Reconstrucción'
            }
          </button>
        </div>
      </div>
    );
  }

  // Completion Stage
  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-stone-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-amber-800 dark:text-amber-200">¡Felicitaciones!</h2>
        <div className="text-center mb-8">
          <p className="text-xl mb-4 dark:text-stone-200">Completaste todas las preguntas sobre "{story.title}"</p>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            Puntuación: {score} de {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={onStartReconstruction}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 font-semibold"
          >
            Continuar a Reconstrucción de Historia
          </button>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 font-semibold"
          >
            Finalizar
          </button>
        </div>
      </div>
    );
  }

  // Reconstruction Stage (for scenes, sentences, or full reconstruction)
  if (stage === 'reconstruction') {
    return (
      <ReconstructionStage 
        story={story} 
        onComplete={onComplete} 
        mode={selectedMode === 'scenes' ? 'scenes' : selectedMode === 'sentences' ? 'sentences' : 'reconstruction'}
      />
    );
  }

  // Questions Stage
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-amber-800 dark:text-amber-200 mb-2">{story.title}</h1>
        <p className="text-lg text-gray-600 dark:text-stone-300">
          Pregunta {currentQuestionIndex + 1} de {totalQuestions}
        </p>
        <div className="w-full bg-gray-200 dark:bg-stone-600 rounded-full h-2 mt-4">
          <div 
            className="bg-amber-600 dark:bg-amber-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Story Panel - Only shows when toggled */}
        {showStory && (
          <div className="w-1/2">
            <div className="bg-amber-50 dark:bg-stone-700 p-6 rounded-lg shadow-md h-96 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-300">Historia para Referencia</h2>
                <button
                  onClick={() => setShowStory(false)}
                  className="px-3 py-1 bg-amber-200 dark:bg-stone-600 text-amber-800 dark:text-stone-200 rounded hover:bg-amber-300 dark:hover:bg-stone-500 text-sm"
                >
                  Ocultar
                </button>
              </div>
              <div className="text-gray-700 dark:text-stone-200 leading-relaxed text-sm whitespace-pre-line">
                {story.passage}
              </div>
            </div>
          </div>
        )}

        {/* Questions Panel */}
        <div className={showStory ? "w-1/2" : "w-full max-w-2xl mx-auto"}>
          <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-md">
            {!showStory && (
              <div className="mb-4">
                <button
                  onClick={() => setShowStory(true)}
                  className="px-4 py-2 bg-amber-100 dark:bg-stone-600 text-amber-800 dark:text-stone-200 rounded-lg hover:bg-amber-200 dark:hover:bg-stone-500 text-sm font-medium"
                >
                  📖 Ver Historia para Referencia
                </button>
              </div>
            )}
            
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty.toUpperCase()}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-stone-200">
              {currentQuestion.questionText}
            </h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className="w-full text-left p-4 border border-gray-200 dark:border-stone-600 rounded-lg hover:bg-amber-50 dark:hover:bg-stone-700 hover:border-amber-300 dark:hover:border-stone-500 transition-all duration-200"
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-gray-100 dark:bg-stone-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 dark:text-stone-200">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-700 dark:text-stone-200">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-stone-400">
                {showStory 
                  ? "Podés consultar la historia y después seleccionar tu respuesta" 
                  : "Hacé clic en 'Ver Historia para Referencia' si necesitás revisar el texto"
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialLevel;
