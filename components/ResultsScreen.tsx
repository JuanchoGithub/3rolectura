import React from 'react';
import { PlayerStats } from '../types';
import { ICONS } from '../constants';

interface ResultsScreenProps {
  stats: PlayerStats;
  onPlayAgain: () => void;
  unlockedLevel2: boolean;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ stats, onPlayAgain, unlockedLevel2 }) => {
  const comprehensionAccuracy = stats.comprehensionTotal > 0 
    ? Math.round((stats.comprehensionCorrect / stats.comprehensionTotal) * 100) 
    : 0;

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white dark:bg-stone-800 rounded-2xl shadow-xl text-center animate-fade-in">
      <h2 className="text-4xl font-bold text-stone-800 dark:text-stone-100 mb-2">¡Misión Cumplida!</h2>
      <p className="text-lg text-stone-500 dark:text-stone-400 mb-6">Acá está tu resumen de la aventura:</p>

      {unlockedLevel2 && (
        <div className="bg-yellow-100 border-2 border-yellow-400 text-yellow-800 dark:bg-yellow-900/50 dark:border-yellow-600 dark:text-yellow-200 p-4 rounded-lg mb-6 animate-bounce">
            <div className="flex items-center justify-center gap-3">
                {React.cloneElement(ICONS.TROPHY, {className: "w-8 h-8"})}
                <div className="text-left">
                    <h3 className="font-bold text-lg">¡Felicitaciones!</h3>
                    <p>Con 5 victorias perfectas, ¡desbloqueaste el Nivel 2! ¿Listo para un desafío mayor?</p>
                </div>
            </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-amber-100 dark:bg-stone-700 p-6 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-300 mb-2">
            {React.cloneElement(ICONS.STAR, { className: 'w-8 h-8 text-yellow-500' })}
            <h3 className="text-2xl font-bold">Puntaje Total</h3>
          </div>
          <p className="text-5xl font-bold text-emerald-500 dark:text-emerald-400">{stats.totalScore}</p>
        </div>
        <div className="bg-amber-100 dark:bg-stone-700 p-6 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-300 mb-2">
            {React.cloneElement(ICONS.CLOCK, { className: 'w-8 h-8' })}
            <h3 className="text-2xl font-bold">Velocidad</h3>
          </div>
          <p className="text-5xl font-bold text-blue-500 dark:text-blue-400">{stats.wpm} <span className="text-2xl">PPM</span></p>
          <p className="text-sm text-stone-500 dark:text-stone-400">(Palabras por Minuto)</p>
        </div>
        <div className="bg-amber-100 dark:bg-stone-700 p-6 rounded-lg">
           <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-300 mb-2">
            {React.cloneElement(ICONS.CHECK_CIRCLE, { className: 'w-8 h-8' })}
            <h3 className="text-2xl font-bold">Comprensión</h3>
          </div>
          <p className="text-3xl font-bold text-green-500 dark:text-green-400">{comprehensionAccuracy}%</p>
          <p className="text-sm text-stone-500 dark:text-stone-400">({stats.comprehensionCorrect}/{stats.comprehensionTotal} correctas)</p>
        </div>
        <div className="bg-amber-100 dark:bg-stone-700 p-6 rounded-lg">
          <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-300 mb-2">
            {React.cloneElement(ICONS.BOOK_OPEN, { className: 'w-8 h-8' })}
            <h3 className="text-2xl font-bold">Vocabulario</h3>
          </div>
          <p className="text-3xl font-bold text-purple-500 dark:text-purple-400">{stats.vocabularyCorrect}/{stats.vocabularyTotal}</p>
           <p className="text-sm text-stone-500 dark:text-stone-400">parejas correctas</p>
        </div>
      </div>

      <button
        onClick={onPlayAgain}
        className="flex items-center justify-center mx-auto gap-3 bg-emerald-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105"
      >
        {React.cloneElement(ICONS.SPARKLES, { className: 'w-6 h-6' })}
        <span>Jugar Otra Vez</span>
      </button>
    </div>
  );
};

export default ResultsScreen;