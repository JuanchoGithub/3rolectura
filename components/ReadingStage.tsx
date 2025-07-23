import React, { useEffect, useState } from 'react';
import { QuestData } from '../types';
import { ICONS } from '../constants';

interface ReadingStageProps {
  questData: QuestData;
  onFinishedReading: () => void;
}

const ReadingStage: React.FC<ReadingStageProps> = ({ questData, onFinishedReading }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-stone-800 rounded-2xl shadow-xl animate-fade-in">
      <div className="flex justify-between items-center mb-4 border-b-2 border-amber-200 dark:border-stone-700 pb-4">
        <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100">{questData.title}</h2>
        <div className="flex items-center gap-2 text-lg font-semibold text-emerald-600 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-900/50 px-4 py-2 rounded-full">
          {React.cloneElement(ICONS.CLOCK, { className: 'h-6 w-6' })}
          <span>{formatTime(elapsedTime)}</span>
        </div>
      </div>
      <div className="text-xl text-stone-700 dark:text-stone-300 leading-relaxed text-justify mb-8">
        <p>{questData.passage}</p>
      </div>
      <div className="text-center">
        <button
          onClick={onFinishedReading}
          className="flex items-center justify-center mx-auto gap-3 bg-emerald-500 dark:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105"
        >
          {React.cloneElement(ICONS.CHECK_CIRCLE, { className: 'w-6 h-6' })}
          <span>¡Terminé de leer!</span>
        </button>
      </div>
    </div>
  );
};

export default ReadingStage;