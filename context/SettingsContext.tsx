import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export type Theme = 'light' | 'dark' | 'system';
export type Font = 'default' | 'lexend';

interface Settings {
  theme: Theme;
  font: Font;
  fontSize: number; // multiplier e.g., 0.8, 1, 1.2
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
  theme: 'system',
  font: 'lexend',
  fontSize: 1,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const storedSettings = localStorage.getItem('readingQuestSettings');
      return storedSettings ? JSON.parse(storedSettings) : defaultSettings;
    } catch (error) {
      console.error('Failed to parse settings from localStorage', error);
      return defaultSettings;
    }
  });

  const applySystemTheme = useCallback(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('readingQuestSettings', JSON.stringify(settings));

    // Theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // Cleanup previous listener if theme changes from 'system'
    mediaQuery.removeEventListener('change', applySystemTheme);
    
    if (settings.theme === 'system') {
      applySystemTheme();
      mediaQuery.addEventListener('change', applySystemTheme);
    } else {
      if (settings.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    // Font family
    if (settings.font === 'lexend') {
        document.body.classList.add('font-lexend');
    } else {
        document.body.classList.remove('font-lexend');
    }

    // Font size
    document.documentElement.style.setProperty('--font-scale', settings.fontSize.toString());


    return () => mediaQuery.removeEventListener('change', applySystemTheme);
  }, [settings, applySystemTheme]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};