import React from 'react';
import { ICONS } from '../constants';

interface StartScreenProps {
  onStart: (level: number) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {

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
          <button
            onClick={() => onStart(1)}
            className="group bg-white dark:bg-stone-800 border-2 border-emerald-500 dark:border-emerald-400 text-emerald-600 dark:text-emerald-300 font-bold py-4 px-6 rounded-lg shadow-md hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-stone-900 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-xl">Nivel 1</span>
            <span className="block text-sm font-normal opacity-80 group-hover:text-emerald-100 dark:group-hover:text-emerald-900">Aventura Clásica</span>
          </button>
          <button
            onClick={() => onStart(2)}
            className="group bg-white dark:bg-stone-800 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-300 font-bold py-4 px-6 rounded-lg shadow-md hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-stone-900 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-xl">Nivel 2</span>
            <span className="block text-sm font-normal opacity-80 group-hover:text-blue-100 dark:group-hover:text-blue-900">Desafío Mayor</span>
          </button>
           <button
            onClick={() => onStart(3)}
            className="group bg-white dark:bg-stone-800 border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-300 font-bold py-4 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-400 dark:hover:text-stone-900"
          >
            <span className="text-xl">Nivel 3</span>
            <span className="block text-sm font-normal opacity-80 group-hover:text-purple-100 dark:group-hover:text-purple-900">
              Maestría en Comprensión
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;