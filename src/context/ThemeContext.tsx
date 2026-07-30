import React, { createContext, useState, useContext, useEffect } from 'react';
import { mmkvStorage } from '../redux/mmkvStorage';

type ThemeColors = {
  background: string;
  text: string;
  card: string;
  input: string;
  muted: string;
  border: string;
  icon: string;
};

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: ThemeColors;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = 'theme_dark_mode';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved theme preference on mount
  useEffect(() => {
    (async () => {
      try {
        const saved = await mmkvStorage.getItem(THEME_KEY);
        if (saved === 'true') {
          setIsDarkMode(true);
        }
      } catch {
        // fallback: keep default false
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      mmkvStorage.setItem(THEME_KEY, String(newValue));
      return newValue;
    });
  };

  const colors: ThemeColors = {
    background: isDarkMode ? '#151515' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    card: isDarkMode ? '#2A2A2A' : '#f9f9f9',
    input: isDarkMode ? '#2A2A2A' : '#F5F6FA',
    muted: isDarkMode ? '#A0A0A0' : '#8F959E',
    border: isDarkMode ? '#3A3A3A' : '#E5E5E5',
    icon: isDarkMode ? '#FFFFFF' : '#1D1E20',
  };

  // Don't render children until theme is loaded to avoid flash
  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
