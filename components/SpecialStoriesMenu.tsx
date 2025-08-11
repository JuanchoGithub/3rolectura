import React, { useState } from 'react';
import { sapoQuest } from '../constants/stories/sapo';
import { enriqueQuest } from '../constants/stories/enrique';
import { QuestData } from '../types';
import SpecialLevel from './SpecialLevel';

interface SpecialStoriesMenuProps {
  onComplete: () => void;
  onStartReconstruction: () => void;
}

const SpecialStoriesMenu: React.FC<SpecialStoriesMenuProps> = ({ onComplete, onStartReconstruction }) => {
  const [selectedStory, setSelectedStory] = useState<QuestData | null>(null);

  const stories = [sapoQuest, enriqueQuest];

  if (selectedStory) {
    return (
      <SpecialLevel 
        story={selectedStory}
        onComplete={() => setSelectedStory(null)} 
        onStartReconstruction={onStartReconstruction} 
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-amber-800 mb-4">Nivel Especial</h1>
        <p className="text-lg text-gray-600 mb-8">
          Elegí qué historia querés explorar:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {stories.map((story, index) => (
          <div 
            key={story.title}
            className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg shadow-md border-2 border-amber-200 hover:border-amber-400 transition-all duration-200"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">
                {index === 0 ? '🐸' : '💎'}
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">{story.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed h-20 overflow-hidden">
                {story.passage.substring(0, 150)}...
              </p>
              <button
                onClick={() => setSelectedStory(story)}
                className="w-full px-4 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-semibold transition-all duration-200"
              >
                Seleccionar Esta Historia
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all duration-200"
        >
          ← Volver al Menú Principal
        </button>
      </div>
    </div>
  );
};

export default SpecialStoriesMenu;
