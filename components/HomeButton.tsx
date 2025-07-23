import React from 'react';
import { ICONS } from '../constants';

interface HomeButtonProps {
  onClick: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => {
  return (
    <div className="group fixed top-4 right-4 z-50">
      <button
        onClick={onClick}
        className="bg-white p-3 rounded-full shadow-lg text-stone-600 hover:bg-amber-100 hover:text-stone-800 dark:bg-stone-700 dark:text-stone-300 dark:hover:bg-stone-600 dark:hover:text-stone-100 transition-all duration-300 transform hover:scale-110"
        aria-label="Volver al inicio"
      >
        {React.cloneElement(ICONS.HOME, { className: 'w-7 h-7' })}
      </button>
      <div className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-max bg-stone-800 dark:bg-stone-900 text-white text-xs font-bold rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Volver al Inicio
      </div>
    </div>
  );
};

export default HomeButton;