import React, { useState, useMemo } from 'react';
import { VocabularyWord } from '../types';

interface VocabularyStageProps {
  vocabulary: VocabularyWord[];
  onComplete: (answers: { word: string; definition: string }[]) => void;
}

const VocabularyStage: React.FC<VocabularyStageProps> = ({ vocabulary, onComplete }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedDefinition, setSelectedDefinition] = useState<string | null>(null);
  const [matches, setMatches] = useState<{ word: string; definition: string }[]>([]);

  const shuffledDefinitions = useMemo(() => 
    [...vocabulary].map(v => v.definition).sort(() => Math.random() - 0.5), 
    [vocabulary]
  );
  
  const remainingWords = vocabulary.filter(v => !matches.some(m => m.word === v.word));
  const remainingDefinitions = shuffledDefinitions.filter(d => !matches.some(m => m.definition === d));

  const [isProcessing, setIsProcessing] = useState(false);
  const handleSelect = (item: string, type: 'word' | 'definition') => {
    if (isProcessing) return;
    let newSelectedWord = type === 'word' ? item : selectedWord;
    let newSelectedDefinition = type === 'definition' ? item : selectedDefinition;

    if (type === 'word') setSelectedWord(item);
    if (type === 'definition') setSelectedDefinition(item);

    if (newSelectedWord && newSelectedDefinition) {
      setIsProcessing(true);
      setTimeout(() => {
        const correctDefinition = vocabulary.find(v => v.word === newSelectedWord)?.definition;
        if (correctDefinition === newSelectedDefinition) {
          setMatches(prev => [...prev, { word: newSelectedWord, definition: newSelectedDefinition }]);
        }
        setSelectedWord(null);
        setSelectedDefinition(null);
        setIsProcessing(false);
      }, 350); // short delay for feedback
    }
  };
  
  const allMatched = matches.length === vocabulary.length;

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-white dark:bg-stone-800 rounded-2xl shadow-xl animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-stone-800 dark:text-stone-100 mb-2">Desafío de Vocabulario</h2>
      <p className="text-center text-stone-500 dark:text-stone-400 mb-6">Uní cada palabra con su significado correcto.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Words Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center text-stone-600 dark:text-stone-300">Palabras</h3>
          {remainingWords.map(({ word }) => {
            const isMatched = matches.some(m => m.word === word);
            return (
              <button
                key={word}
                onClick={() => handleSelect(word, 'word')}
                disabled={isMatched || isProcessing || (selectedWord !== null && selectedWord !== word)}
                className={`w-full p-4 rounded-lg transition-all duration-200 border-2 ${
                  isMatched
                    ? 'bg-emerald-200 border-emerald-400 text-emerald-700 dark:bg-emerald-900 dark:border-emerald-700 dark:text-emerald-200 opacity-60 cursor-not-allowed'
                    : selectedWord === word
                      ? 'bg-blue-500 border-blue-600 text-white font-bold shadow-md dark:bg-blue-400 dark:border-blue-500 dark:text-stone-900'
                      : 'bg-white border-stone-200 hover:bg-amber-50 hover:border-amber-400 dark:bg-stone-900 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-600 dark:hover:border-amber-500'
                } ${isMatched || (selectedWord !== null && selectedWord !== word) || isProcessing ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {word}
              </button>
            );
          })}
        </div>

        {/* Definitions Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center text-stone-600 dark:text-stone-300">Definiciones</h3>
          {remainingDefinitions.map((definition) => {
            const isMatched = matches.some(m => m.definition === definition);
            const isDisabled =
              isMatched ||
              isProcessing ||
              selectedWord === null ||
              (selectedDefinition !== null && selectedDefinition !== definition);
            return (
              <button
                key={definition}
                onClick={() => handleSelect(definition, 'definition')}
                disabled={isDisabled}
                className={`w-full p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                  isMatched
                    ? 'bg-emerald-200 border-emerald-400 text-emerald-700 dark:bg-emerald-900 dark:border-emerald-700 dark:text-emerald-200 opacity-60 cursor-not-allowed'
                    : selectedDefinition === definition
                      ? 'bg-blue-500 border-blue-600 text-white font-bold shadow-md dark:bg-blue-400 dark:border-blue-500 dark:text-stone-900'
                      : 'bg-white border-stone-200 hover:bg-amber-50 hover:border-amber-400 dark:bg-stone-900 dark:border-stone-600 dark:text-stone-300 dark:hover:bg-stone-600 dark:hover:border-amber-500'
                } ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {definition}
              </button>
            );
          })}
        </div>
      </div>
      
       {matches.length > 0 && <div className="mt-8 border-t-2 border-amber-200 dark:border-stone-700 pt-4">
         <h3 className="text-lg font-semibold text-center text-emerald-700 dark:text-emerald-300">Parejas correctas:</h3>
         <ul className="mt-2 text-center text-stone-600 dark:text-stone-300">
           {matches.map(({word, definition}) => <li key={word}><strong>{word}:</strong> {definition}</li>)}
         </ul>
       </div>}

      {allMatched && (
        <div className="mt-8 text-center">
          <button
            onClick={() => onComplete(matches)}
            className="bg-emerald-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-300 transform hover:scale-105 animate-bounce"
          >
            Ver Resultados
          </button>
        </div>
      )}
    </div>
  );
};

export default VocabularyStage;