import React, { useState, useCallback, useEffect } from 'react';
import { GameState, QuestData, PlayerStats, QuestLevel } from './types';
import StartScreen from './components/StartScreen';
import ReadingStage from './components/ReadingStage';
import ComprehensionStage from './components/ComprehensionStage';
import VocabularyStage from './components/VocabularyStage';
import ResultsScreen from './components/ResultsScreen';
import SpecialLevel from './components/SpecialLevel';
import ReconstructionStage from './components/ReconstructionStage';
import { ICONS } from './constants';
import { BEGINNER_QUESTS } from './constants/stories/beginner';
import { INTERMEDIATE_QUESTS } from './constants/stories/intermediate';
import { ADVANCED_QUESTS } from './constants/stories/advanced';
import { sapoQuest } from './constants/stories/sapo';
import { enriqueQuest } from './constants/stories/enrique';
import HomeButton from './components/HomeButton';
import SettingsPanel from './components/SettingsPanel';

const LOCAL_STORAGE_KEY_L1 = 'readingQuestPerfectScoresL1';


// Cookie helpers
function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}
function getCookie(name: string): string | null {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, null as string | null);
}

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.NOT_STARTED);
  const [questData, setQuestData] = useState<QuestData | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [readingStartTime, setReadingStartTime] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState(1);
  const [currentSpecialStory, setCurrentSpecialStory] = useState<QuestData | null>(null);
  
  const [perfectScoresL1, setPerfectScoresL1] = useState(0);

  const [justUnlockedL2, setJustUnlockedL2] = useState(false);
  // Track completed stories per level
  const [completedStories, setCompletedStories] = useState<{ [level: number]: number[] }>({});
  // Load completed stories from cookies on mount
  useEffect(() => {
    const obj: { [level: number]: number[] } = {};
    [1,2,3].forEach(level => {
      const val = getCookie('completedStoriesL' + level);
      if (val) {
        try {
          obj[level] = JSON.parse(val);
        } catch {}
      }
    });
    setCompletedStories(obj);
  }, []);
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


const startNewQuest = useCallback((level: number, storyIndex?: number) => {
  // Handle special level (4) with multiple stories
  if (level === 4) {
    let selectedStory: QuestData;
    
    if (typeof storyIndex === 'number') {
      // Direct story selection
      if (storyIndex === 0) {
        selectedStory = sapoQuest;
      } else if (storyIndex === 1) {
        selectedStory = enriqueQuest;
      } else {
        // Fallback to first story
        selectedStory = sapoQuest;
      }
    } else {
      // Random selection between the two special stories
      selectedStory = Math.random() < 0.5 ? sapoQuest : enriqueQuest;
    }
    
    setCurrentSpecialStory(selectedStory);
    setPlayerStats(null);
    setGameState(GameState.SPECIAL_LEVEL);
    return;
  }

  let quests: QuestData[];
  switch(level) {
      case 1:
          quests = BEGINNER_QUESTS;
          break;
      case 2:
          quests = INTERMEDIATE_QUESTS;
          break;
      case 3:
          quests = ADVANCED_QUESTS;
          break;
      default:
          quests = BEGINNER_QUESTS;
  }
  if (quests.length === 0) {
    setError(`La biblioteca de aventuras para el Nivel ${level} está vacía.`);
    setGameState(GameState.ERROR);
    return;
  }
  let selectedQuest: QuestData;
  if (typeof storyIndex === 'number' && storyIndex >= 0 && storyIndex < quests.length) {
    selectedQuest = quests[storyIndex];
  } else {
    // Only pick from uncompleted stories
    const completed = completedStories[level] || [];
    const uncompletedIndices = quests.map((_, idx) => idx).filter(idx => !completed.includes(idx));
    let pickIdx: number;
    if (uncompletedIndices.length > 0) {
      pickIdx = uncompletedIndices[Math.floor(Math.random() * uncompletedIndices.length)];
    } else {
      // fallback: all completed, pick any
      pickIdx = Math.floor(Math.random() * quests.length);
    }
    selectedQuest = quests[pickIdx];
  }
  setDifficulty(level);
  setQuestData(selectedQuest);
  setPlayerStats(null);
  setJustUnlockedL2(false);
  setGameState(GameState.READING);
  setReadingStartTime(Date.now());
}, [completedStories]);

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
    questData.comprehensionQuestions.forEach((q: { correctAnswerIndex: number }, index: number) => {
      if (answers[index] === q.correctAnswerIndex) {
        correctCount++;
      }
    });
    
    setPlayerStats((prevStats: PlayerStats | null) => ({
        ...prevStats!,
        comprehensionCorrect: correctCount,
        totalScore: prevStats!.totalScore + correctCount * 150 + prevStats!.wpm,
    }));

    setGameState(GameState.VOCABULARY);
  };
  
  const handleVocabularyComplete = (matches: { word: string; definition: string }[]) => {
    if (!questData || !playerStats) return;

    const correctVocabularyCount = matches.length;
    const finalStats: PlayerStats = {
      ...playerStats,
      vocabularyCorrect: correctVocabularyCount,
      totalScore: playerStats.totalScore + correctVocabularyCount * 50,
    };
    setPlayerStats(finalStats);

    // Mark story as completed in cookies
    if (questData && typeof questData.title === 'string') {
      // Find story index in its level
      let level = difficulty;
      let quests: QuestData[] = [];
      if (level === 1) quests = BEGINNER_QUESTS;
      if (level === 2) quests = INTERMEDIATE_QUESTS;
      if (level === 3) quests = ADVANCED_QUESTS;
      const idx = quests.findIndex(q => q.title === questData.title);
      if (idx !== -1) {
        setCompletedStories(prev => {
          const arr = prev[level] ? Array.from(new Set([...prev[level], idx])) : [idx];
          setCookie('completedStoriesL' + level, JSON.stringify(arr));
          return { ...prev, [level]: arr };
        });
      }
    }

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
  
  const showHomeButton = [GameState.READING, GameState.COMPREHENSION, GameState.VOCABULARY, GameState.SPECIAL_LEVEL, GameState.RECONSTRUCTION].includes(gameState);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.NOT_STARTED:
        return <StartScreen onStart={startNewQuest} completedStories={completedStories} />;
      case GameState.READING:
        return questData && <ReadingStage questData={questData} onFinishedReading={handleFinishedReading} />;
      case GameState.COMPREHENSION:
        return questData && <ComprehensionStage questions={questData.comprehensionQuestions} onComplete={handleComprehensionComplete} />;
      case GameState.VOCABULARY:
         return questData && <VocabularyStage vocabulary={questData.vocabulary} onComplete={handleVocabularyComplete} />;
      case GameState.RESULTS:
        return playerStats && <ResultsScreen stats={playerStats} onPlayAgain={handleGoHome} unlockedLevel2={justUnlockedL2} />;
      case GameState.SPECIAL_LEVEL:
        return currentSpecialStory && <SpecialLevel 
          story={currentSpecialStory}
          onComplete={handleGoHome} 
          onStartReconstruction={() => setGameState(GameState.RECONSTRUCTION)} 
        />;
      case GameState.RECONSTRUCTION:
        return currentSpecialStory && <ReconstructionStage story={currentSpecialStory} onComplete={handleGoHome} />;
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