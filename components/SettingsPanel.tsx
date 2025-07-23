import React from 'react';
import { useSettings, Theme, Font } from '../context/SettingsContext';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings } = useSettings();

  if (!isOpen) return null;

  const handleThemeChange = (theme: Theme) => {
    updateSettings({ theme });
  };

  const handleFontChange = (font: Font) => {
    updateSettings({ font });
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSettings({ fontSize: parseFloat(event.target.value) });
  }

  const RadioGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div>
        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">{label}</label>
        <div className="flex items-center space-x-2 bg-stone-100 dark:bg-stone-700 p-1 rounded-lg">
            {children}
        </div>
    </div>
  );
  
  const RadioOption: React.FC<{ value: string, selectedValue: string, onChange: (value: any) => void, children: React.ReactNode }> = ({ value, selectedValue, onChange, children }) => (
    <button
        onClick={() => onChange(value)}
        className={`w-full text-center px-4 py-2 text-sm font-semibold rounded-md transition-colors ${selectedValue === value ? 'bg-emerald-500 text-white shadow' : 'text-stone-600 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-600'}`}
    >
        {children}
    </button>
  );


  return (
    <div className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center" onClick={onClose}>
      <div 
        className="bg-white dark:bg-stone-800 rounded-2xl shadow-2xl p-6 w-full max-w-sm m-4 animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-stone-200 dark:border-stone-700 pb-3 mb-5">
            <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100">Ajustes de Lectura</h2>
            <button onClick={onClose} className="text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

        <div className="space-y-6">
            <RadioGroup label="Paleta de Colores">
                <RadioOption value="light" selectedValue={settings.theme} onChange={handleThemeChange}>Claro</RadioOption>
                <RadioOption value="dark" selectedValue={settings.theme} onChange={handleThemeChange}>Oscuro</RadioOption>
                <RadioOption value="system" selectedValue={settings.theme} onChange={handleThemeChange}>Sistema</RadioOption>
            </RadioGroup>

            <RadioGroup label="Tipo de Letra">
                <RadioOption value="default" selectedValue={settings.font} onChange={handleFontChange}>Clásica</RadioOption>
                <RadioOption value="lexend" selectedValue={settings.font} onChange={handleFontChange}>Accesible</RadioOption>
            </RadioGroup>
            
            <div>
                <label htmlFor="fontSize" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Tamaño de Letra <span className="font-normal text-stone-500 dark:text-stone-400">({Math.round(settings.fontSize * 100)}%)</span>
                </label>
                <input
                    id="fontSize"
                    type="range"
                    min="0.8"
                    max="1.5"
                    step="0.1"
                    value={settings.fontSize}
                    onChange={handleSizeChange}
                    className="w-full h-2 bg-stone-200 dark:bg-stone-600 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
