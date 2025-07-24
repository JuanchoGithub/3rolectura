

import React, { useState } from 'react';
import { ICONS } from '../constants';
import { BEGINNER_QUESTS } from '../constants/stories/beginner';
import { INTERMEDIATE_QUESTS } from '../constants/stories/intermediate';
import { ADVANCED_QUESTS } from '../constants/stories/advanced';
import HomeButton from './HomeButton';

interface StartScreenProps {
  onStart: (level: number, storyIndex?: number) => void;
  completedStories?: { [level: number]: number[] };
}


const LEVELS = [
  {
    num: 1,
    name: 'Nivel 1',
    color: 'emerald',
    subtitle: 'Aventura Clásica',
    quests: BEGINNER_QUESTS,
  },
  {
    num: 2,
    name: 'Nivel 2',
    color: 'blue',
    subtitle: 'Desafío Mayor',
    quests: INTERMEDIATE_QUESTS,
  },
  {
    num: 3,
    name: 'Nivel 3',
    color: 'purple',
    subtitle: 'Maestría en Comprensión',
    quests: ADVANCED_QUESTS,
  },
];

const StartScreen: React.FC<StartScreenProps> = ({ onStart, completedStories }) => {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  if (selectedLevel) {
    const levelObj = LEVELS.find(l => l.num === selectedLevel)!;
    const completed = completedStories?.[levelObj.num] || [];
    return (
      <div className="text-center p-8 flex flex-col items-center">
        <div className="fixed top-4 left-4 z-50">
          <HomeButton onClick={() => setSelectedLevel(null)} />
        </div>
        <h2 className={`text-3xl font-bold mb-2 text-${levelObj.color}-700 dark:text-${levelObj.color}-300`}>{levelObj.name}</h2>
        <p className="mb-6 text-lg text-stone-600 dark:text-stone-300">{levelObj.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          <div
            className={`flex flex-col items-center justify-center border-2 border-dashed border-${levelObj.color}-400 rounded-lg p-6 cursor-pointer hover:bg-${levelObj.color}-50 dark:hover:bg-${levelObj.color}-900 transition mb-4`}
            onClick={() => onStart(levelObj.num)}
          >
            <span className={`text-${levelObj.color}-500 dark:text-${levelObj.color}-300 text-2xl mb-2 font-bold`}>Aleatorio / Siguiente</span>
            <span className="text-sm text-gray-500">Dejá que el juego elija la historia por vos</span>
          </div>
          {levelObj.quests.map((q, idx) => {
            const isCompleted = completed.includes(idx);
            return (
              <div
                key={q.title}
                className={`flex flex-col items-center border-2 border-${levelObj.color}-400 rounded-lg p-6 cursor-pointer hover:bg-${levelObj.color}-100 dark:hover:bg-${levelObj.color}-900 transition relative ${isCompleted ? 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-400 dark:border-yellow-500 shadow-gold' : ''}`}
                onClick={() => onStart(levelObj.num, idx)}
              >
                <span className={`text-${levelObj.color}-700 dark:text-${levelObj.color}-200 text-lg font-bold mb-2 flex items-center gap-2`}>
                  {q.title}
                  {isCompleted && <span title="Completado" className="ml-1">✨</span>}
                </span>
                <span className="text-xs text-gray-500 mb-2">Historia #{idx + 1}</span>
                <span className="text-sm text-stone-700 dark:text-stone-200 line-clamp-3">{q.passage.slice(0, 120)}...</span>
                {isCompleted && <div className="absolute top-2 right-2 text-yellow-400 text-xl" title="Completado">★</div>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center p-8 flex flex-col items-center">
      <div className="text-emerald-500 dark:text-emerald-400 mb-4">{React.cloneElement(ICONS.BOOK_OPEN, { className: "w-24 h-24" })}</div>
      <h1 className="text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">Aventura de Lectura</h1>
      <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mb-8">
        ¡Bienvenido, aventurero! En esta biblioteca mágica, desbloquearás mundos nuevos leyendo pasajes, respondiendo preguntas y completando desafíos.
      </p>
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-stone-700 dark:text-stone-200 mb-4">Seleccioná tu nivel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LEVELS.map(level => (
            <button
              key={level.num}
              onClick={() => setSelectedLevel(level.num)}
              className={`group bg-white dark:bg-stone-800 border-2 border-${level.color}-500 dark:border-${level.color}-400 text-${level.color}-600 dark:text-${level.color}-300 font-bold py-4 px-6 rounded-lg shadow-md hover:bg-${level.color}-500 hover:text-white dark:hover:bg-${level.color}-400 dark:hover:text-stone-900 transition-all duration-300 transform hover:scale-105`}
            >
              <span className="text-xl">{level.name}</span>
              <span className="block text-sm font-normal opacity-80 group-hover:text-white dark:group-hover:text-stone-900">{level.subtitle}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartScreen;