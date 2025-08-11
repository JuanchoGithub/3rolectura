import React, { useState } from 'react';
import { QuestData } from '../types';

interface ReconstructionStageProps {
  story: QuestData;
  onComplete: () => void;
  mode?: 'scenes' | 'sentences' | 'reconstruction'; // Add mode prop
}

const ReconstructionStage: React.FC<ReconstructionStageProps> = ({ story, onComplete, mode = 'reconstruction' }) => {
  const [currentMode, setCurrentMode] = useState<'scenes' | 'sentences'>(
    mode === 'reconstruction' ? 'scenes' : mode
  );
  const [sceneOrder, setSceneOrder] = useState<string[]>([]);
  const [builtSentences, setBuiltSentences] = useState<string[]>([]);
  const [selectedParts, setSelectedParts] = useState<{[key: string]: string}>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const reconstruction = story.reconstruction!;

  // Scene ordering functionality
  const handleSceneDrop = (sceneId: string, position: number) => {
    const newOrder = [...sceneOrder];
    const existingIndex = newOrder.indexOf(sceneId);
    
    if (existingIndex > -1) {
      newOrder.splice(existingIndex, 1);
    }
    
    newOrder.splice(position, 0, sceneId);
    setSceneOrder(newOrder);
  };

  const checkSceneOrder = () => {
    const correctOrder = reconstruction.scenes
      .sort((a, b) => a.order - b.order)
      .map(scene => scene.id);
    
    return JSON.stringify(sceneOrder) === JSON.stringify(correctOrder);
  };

  // Sentence building functionality
  const handlePartSelect = (sentenceId: string, partType: string, partId: string) => {
    setSelectedParts(prev => ({
      ...prev,
      [`${sentenceId}-${partType}`]: partId
    }));
  };

  const buildSentence = (sentenceId: string) => {
    const sentence = reconstruction.sentences.find(s => s.id === sentenceId);
    if (!sentence) return '';

    const parts = sentence.structure.map(partId => {
      const subjectPart = reconstruction.parts.subjects.find(s => s.id === partId);
      const verbPart = reconstruction.parts.verbs.find(v => v.id === partId);
      const objectPart = reconstruction.parts.objects.find(o => o.id === partId);
      
      return subjectPart?.text || verbPart?.text || objectPart?.text || '';
    });

    return parts.join(' ');
  };

  const checkSentenceConstruction = () => {
    return reconstruction.sentences.every(sentence => {
      const userSentence = buildSentence(sentence.id);
      return userSentence.toLowerCase().trim() === sentence.text.toLowerCase().trim();
    });
  };

  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-stone-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-800 dark:text-purple-200">¡Excelente trabajo!</h2>
        <div className="text-center mb-8">
          <p className="text-xl mb-4 dark:text-stone-200">Completaste exitosamente la reconstrucción de "{story.title}"</p>
          <p className="text-lg text-gray-600 dark:text-stone-400">
            Demostraste una comprensión profunda de la estructura y elementos clave de la historia.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-lg"
          >
            ¡Finalizar Aventura!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6 text-center">
        {/* Mode title and description */}
        {mode === 'scenes' && (
          <div>
            <h1 className="text-3xl font-bold text-green-800 dark:text-green-200 mb-2">Ordenar Escenas</h1>
            <p className="text-lg text-gray-600 dark:text-stone-400 mb-4">
              Ordená las escenas de la historia cronológicamente
            </p>
          </div>
        )}
        {mode === 'sentences' && (
          <div>
            <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-2">Construir Oraciones</h1>
            <p className="text-lg text-gray-600 dark:text-stone-400 mb-4">
              Armá oraciones seleccionando sujetos, verbos y objetos
            </p>
          </div>
        )}
        {mode === 'reconstruction' && (
          <div>
            <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-2">Reconstrucción de Historia</h1>
            <p className="text-lg text-gray-600 dark:text-stone-400 mb-4">
              Demostrá tu comprensión reconstruyendo la historia
            </p>
          </div>
        )}
        
        {/* Mode selector - only show for full reconstruction mode */}
        {mode === 'reconstruction' && (
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setCurrentMode('scenes')}
              className={`px-6 py-2 rounded-lg font-semibold ${
                currentMode === 'scenes' 
                  ? 'bg-purple-600 text-white dark:bg-purple-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-stone-600 dark:text-stone-200 dark:hover:bg-stone-500'
              }`}
            >
              Ordenar Escenas
            </button>
            <button
              onClick={() => setCurrentMode('sentences')}
              className={`px-6 py-2 rounded-lg font-semibold ${
                currentMode === 'sentences' 
                  ? 'bg-purple-600 text-white dark:bg-purple-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-stone-600 dark:text-stone-200 dark:hover:bg-stone-500'
              }`}
            >
              Construir Oraciones
            </button>
          </div>
        )}
      </div>

      {currentMode === 'scenes' && (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-stone-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-300">
              Arrastrá las escenas para ordenarlas cronológicamente:
            </h3>
            
            {/* Available scenes */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {reconstruction.scenes
                .filter(scene => !sceneOrder.includes(scene.id))
                .map(scene => (
                <div
                  key={scene.id}
                  draggable
                  className="p-3 bg-white dark:bg-stone-600 border border-blue-200 dark:border-stone-500 rounded cursor-move hover:bg-blue-50 dark:hover:bg-stone-500 dark:text-stone-100"
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', scene.id)}
                >
                  {scene.text}
                </div>
              ))}
            </div>

            {/* Drop zones */}
            <div className="space-y-2">
              {Array.from({ length: reconstruction.scenes.length }, (_, index) => (
                <div
                  key={index}
                  className="min-h-16 p-3 border-2 border-dashed border-gray-300 dark:border-stone-500 rounded flex items-center dark:bg-stone-600"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const sceneId = e.dataTransfer.getData('text/plain');
                    handleSceneDrop(sceneId, index);
                  }}
                >
                  <span className="mr-3 font-bold text-gray-500 dark:text-stone-300">{index + 1}.</span>
                  {sceneOrder[index] ? (
                    <div
                      draggable
                      className="flex-1 p-2 bg-white dark:bg-stone-500 border border-blue-200 dark:border-stone-400 rounded cursor-move hover:bg-blue-50 dark:hover:bg-stone-400 dark:text-stone-100"
                      onDragStart={(e) => e.dataTransfer.setData('text/plain', sceneOrder[index])}
                    >
                      {reconstruction.scenes.find(s => s.id === sceneOrder[index])?.text}
                    </div>
                  ) : (
                    <span className="text-gray-400 dark:text-stone-400 italic">Arrastrá una escena aquí</span>
                  )}
                </div>
              ))}
            </div>

            {sceneOrder.length === reconstruction.scenes.length && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    if (checkSceneOrder()) {
                      if (mode === 'scenes') {
                        // For scenes-only mode, complete immediately
                        setIsCompleted(true);
                      } else {
                        // For full reconstruction mode, move to sentences
                        alert('¡Correcto! Ahora pasá a construir oraciones.');
                        setCurrentMode('sentences');
                      }
                    } else {
                      alert('El orden no es correcto. Intentalo de nuevo.');
                    }
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  {mode === 'scenes' ? 'Finalizar Actividad' : 'Verificar Orden'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {currentMode === 'sentences' && (
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-stone-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-300">
              Construí oraciones seleccionando sujetos, verbos y objetos:
            </h3>
            
            {reconstruction.sentences.map(sentence => (
              <div key={sentence.id} className="mb-6 p-4 bg-white dark:bg-stone-600 border border-green-200 dark:border-stone-500 rounded">
                <h4 className="font-semibold mb-3 dark:text-stone-200">Oración {sentence.id.replace('sentence', '')}:</h4>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Subjects */}
                  <div>
                    <h5 className="font-medium text-sm text-gray-600 dark:text-stone-300 mb-2">Sujetos:</h5>
                    {reconstruction.parts.subjects.map(subject => (
                      <button
                        key={subject.id}
                        onClick={() => handlePartSelect(sentence.id, 'subject', subject.id)}
                        className={`block w-full text-left p-2 mb-1 text-sm rounded ${
                          selectedParts[`${sentence.id}-subject`] === subject.id
                            ? 'bg-blue-500 text-white dark:bg-blue-600'
                            : 'bg-gray-100 hover:bg-gray-200 dark:bg-stone-500 dark:hover:bg-stone-400 dark:text-stone-200'
                        }`}
                      >
                        {subject.text}
                      </button>
                    ))}
                  </div>

                  {/* Verbs */}
                  <div>
                    <h5 className="font-medium text-sm text-gray-600 dark:text-stone-300 mb-2">Verbos:</h5>
                    {reconstruction.parts.verbs.map(verb => (
                      <button
                        key={verb.id}
                        onClick={() => handlePartSelect(sentence.id, 'verb', verb.id)}
                        className={`block w-full text-left p-2 mb-1 text-sm rounded ${
                          selectedParts[`${sentence.id}-verb`] === verb.id
                            ? 'bg-blue-500 text-white dark:bg-blue-600'
                            : 'bg-gray-100 hover:bg-gray-200 dark:bg-stone-500 dark:hover:bg-stone-400 dark:text-stone-200'
                        }`}
                      >
                        {verb.text}
                      </button>
                    ))}
                  </div>

                  {/* Objects */}
                  <div>
                    <h5 className="font-medium text-sm text-gray-600 dark:text-stone-300 mb-2">Objetos:</h5>
                    {reconstruction.parts.objects.map(object => (
                      <button
                        key={object.id}
                        onClick={() => handlePartSelect(sentence.id, 'object', object.id)}
                        className={`block w-full text-left p-2 mb-1 text-sm rounded ${
                          selectedParts[`${sentence.id}-object`] === object.id
                            ? 'bg-blue-500 text-white dark:bg-blue-600'
                            : 'bg-gray-100 hover:bg-gray-200 dark:bg-stone-500 dark:hover:bg-stone-400 dark:text-stone-200'
                        }`}
                      >
                        {object.text}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-stone-500 rounded">
                  <strong className="dark:text-stone-200">Tu oración:</strong> <span className="dark:text-stone-200">{buildSentence(sentence.id) || 'Seleccioná las partes...'}</span>
                </div>
              </div>
            ))}

            <div className="text-center mt-6">
              <button
                onClick={() => {
                  if (checkSentenceConstruction()) {
                    setIsCompleted(true);
                  } else {
                    alert('Algunas oraciones no están correctas. Revisá tus selecciones.');
                  }
                }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              >
                {mode === 'sentences' ? 'Finalizar Actividad' : 'Finalizar Reconstrucción'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReconstructionStage;
