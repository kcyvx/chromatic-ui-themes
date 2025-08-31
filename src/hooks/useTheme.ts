import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeProvider';
import { ThemeContextValue } from '../types';

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// Hook utilitaire pour accéder rapidement aux couleurs du thème actuel
export const useThemeColors = () => {
  const { currentTheme } = useTheme();
  return currentTheme.colors;
};

// Hook utilitaire pour vérifier si on est en mode sombre
export const useIsDarkMode = () => {
  const { isDarkMode } = useTheme();
  return isDarkMode;
};

// Hook utilitaire pour basculer entre light/dark
export const useToggleDarkMode = () => {
  const { toggleDarkMode } = useTheme();
  return toggleDarkMode;
};