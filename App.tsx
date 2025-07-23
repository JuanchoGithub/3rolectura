import React, { useState, useCallback, useEffect } from 'react';
import { GameState, QuestData, PlayerStats } from './types';
import StartScreen from './components/StartScreen';
import ReadingStage from './components/ReadingStage';
import ComprehensionStage from './components/ComprehensionStage';
import VocabularyStage from './components/VocabularyStage';
import ResultsScreen from './components/ResultsScreen';
import { ICONS, ALL_QUESTS, ALL_QUESTS_LEVEL_2, ALL_QUESTS_LEVEL_3 } from './constants';
import HomeButton from './components/HomeButton';
import SettingsPanel from './components/SettingsPanel';

const LOCAL_STORAGE_KEY_L1 = 'readingQuestPerfectScoresL1';


const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.NOT_STARTED);
  const [questData, setQuestData] = useState<QuestData | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [readingStartTime, setReadingStartTime] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState(1);
  
  const [perfectScoresL1, setPerfectScoresL1] = useState(0);

  const [justUnlockedL2, setJustUnlockedL2] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const savedScoreL1 = localStorage.getItem(LOCAL_STORAGE_KEY_L1);
      if (savedScoreL1) {
        setPerfectScoresL1(parseInt(savedScoreL1, 10));
      }
    } catch (e) {
      console.error("Could not access localStorage:", e);
    }
  }, []);

  const startNewQuest = useCallback((level: number) => {
    let quests;
    switch(level) {
        case 1:
            quests = ALL_QUESTS;
            break;
        case 2:
            quests = ALL_QUESTS_LEVEL_2;
            break;
        case 3:
            quests = ALL_QUESTS_LEVEL_3;
            break;
        default:
            quests = ALL_QUESTS;
    }
    
    if (quests.length === 0) {
      setError(`La biblioteca de aventuras para el Nivel ${level} está vacía.`);
      setGameState(GameState.ERROR);
      return;
    }
    
    const randomIndex = Math.floor(Math.random() * quests.length);
    const selectedQuest = quests[randomIndex];
    
    setDifficulty(level);
    setQuestData(selectedQuest);
    setPlayerStats(null);
    setJustUnlockedL2(false);
    setGameState(GameState.READING);
    setReadingStartTime(Date.now());
  }, []);

  const handleFinishedReading = () => {
    if (!readingStartTime || !questData) return;
    const endTime = Date.now();
    const timeElapsedSeconds = (endTime - readingStartTime) / 1000;
    const wordCount = questData.passage.split(/\s+/).length;
    const wpm = timeElapsedSeconds > 0 ? Math.round(wordCount / (timeElapsedSeconds / 60)) : 0;

    setPlayerStats({
      wpm: wpm,
      comprehensionCorrect: 0,
      comprehensionTotal: questData.comprehensionQuestions.length,
      vocabularyCorrect: 0,
      vocabularyTotal: questData.vocabulary.length,
      totalScore: 0,
    });
    setGameState(GameState.COMPREHENSION);
  };

  const handleComprehensionComplete = (answers: (number | null)[]) => {
    if (!questData || !playerStats) return;

    let correctCount = 0;
    questData.comprehensionQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswerIndex) {
        correctCount++;
      }
    });
    
    setPlayerStats(prevStats => ({
        ...prevStats!,
        comprehensionCorrect: correctCount,
        totalScore: prevStats!.totalScore + correctCount * 150 + prevStats!.wpm,
    }));

    setGameState(GameState.VOCABULARY);
  };
  
  const handleVocabularyComplete = (matches: { word: string; definition: string }[]) => {
    if (!questData || !playerStats) return;

    const correctVocabularyCount = matches.length;
    const finalStats = {
      ...playerStats,
      vocabularyCorrect: correctVocabularyCount,
      totalScore: playerStats.totalScore + correctVocabularyCount * 50,
    };
    setPlayerStats(finalStats);

    const isPerfect = finalStats.comprehensionCorrect === finalStats.comprehensionTotal && finalStats.vocabularyCorrect === finalStats.vocabularyTotal;

    if (isPerfect) {
        if (difficulty === 1) {
            const newScore = perfectScoresL1 + 1;
            setPerfectScoresL1(newScore);
             try {
                localStorage.setItem(LOCAL_STORAGE_KEY_L1, newScore.toString());
            } catch (e) { console.error("Could not save to localStorage:", e); }
            
            if (newScore === 5) {
                setJustUnlockedL2(true);
            }
        }
    }
    
    setGameState(GameState.RESULTS);
  };

  const handleGoHome = () => {
      setGameState(GameState.NOT_STARTED);
      setError(null);
  };
  
  const showHomeButton = [GameState.READING, GameState.COMPREHENSION, GameState.VOCABULARY].includes(gameState);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.NOT_STARTED:
        return <StartScreen onStart={startNewQuest} />;
      case GameState.READING:
        return questData && <ReadingStage questData={questData} onFinishedReading={handleFinishedReading} />;
      case GameState.COMPREHENSION:
        return questData && <ComprehensionStage questions={questData.comprehensionQuestions} onComplete={handleComprehensionComplete} />;
      case GameState.VOCABULARY:
         return questData && <VocabularyStage vocabulary={questData.vocabulary} onComplete={handleVocabularyComplete} />;
      case GameState.RESULTS:
        return playerStats && <ResultsScreen stats={playerStats} onPlayAgain={handleGoHome} unlockedLevel2={justUnlockedL2} />;
      case GameState.ERROR:
        return (
          <div className="text-center p-8 bg-red-100 border-2 border-red-500 rounded-lg dark:bg-red-900/50 dark:border-red-600">
            <div className="text-red-500 mx-auto mb-4 dark:text-red-400">{React.cloneElement(ICONS.X_CIRCLE, {className: "w-16 h-16"})}</div>
            <h2 className="text-2xl font-bold text-red-800 dark:text-red-200">¡Oh no! Algo salió mal.</h2>
            <p className="text-red-700 mt-2 mb-6 dark:text-red-300">{error}</p>
            <button onClick={handleGoHome} className="bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500">
              Volver al Inicio
            </button>
          </div>
        );
      default:
        return <StartScreen onStart={startNewQuest} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      {showHomeButton && <HomeButton onClick={handleGoHome} />}
      <div className="group fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="bg-white p-3 rounded-full shadow-lg text-stone-600 hover:bg-amber-100 hover:text-stone-800 dark:bg-stone-700 dark:text-stone-300 dark:hover:bg-stone-600 dark:hover:text-stone-100 transition-all duration-300 transform hover:scale-110"
          aria-label="Abrir ajustes"
        >
          {React.cloneElement(ICONS.SETTINGS, { className: 'w-7 h-7' })}
        </button>
        <div className="absolute top-1/2 -translate-y-1/2 left-full ml-2 w-max bg-stone-800 dark:bg-stone-900 text-white text-xs font-bold rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ajustes
        </div>
      </div>


      <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

      <main className="w-full">
        {renderGameState()}
      </main>
    </div>
  );
};

export default App;