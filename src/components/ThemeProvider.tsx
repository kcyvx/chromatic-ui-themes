import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeContextValue, ThemeProviderProps } from '../types';
// Import themes directly instead of from index to avoid circular dependency
import { lightThemes } from '../themes/light';
import { darkThemes } from '../themes/dark';

export const ThemeContext = createContext<ThemeContextValue | null>(null);

// Create allThemes locally to avoid circular dependency
const allThemes = [
  ...lightThemes,
  ...darkThemes,
];

const THEME_STORAGE_KEY = 'chromatic-ui-theme';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'oceanic-light',
  themes = allThemes,
}) => {
  // État pour gérer l'hydration
  const [mounted, setMounted] = useState(false);

  // Fonction pour récupérer le thème par défaut (côté serveur safe)
  const getDefaultTheme = (): Theme => {
    const foundTheme = themes.find(theme => theme.name === defaultTheme);
    return foundTheme || themes[0];
  };

  // Fonction pour récupérer le thème depuis localStorage (côté client uniquement)
  const getSavedTheme = (): Theme => {
    if (typeof window === 'undefined') {
      return getDefaultTheme();
    }

    try {
      const savedThemeName = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedThemeName) {
        const savedTheme = themes.find(theme => theme.name === savedThemeName);
        if (savedTheme) {
          return savedTheme;
        }
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
    
    return getDefaultTheme();
  };

  const [currentTheme, setCurrentTheme] = useState<Theme>(getDefaultTheme);
  const [availableThemes] = useState<Theme[]>(themes);

  // Effet pour charger le thème sauvegardé après l'hydration
  useEffect(() => {
    const savedTheme = getSavedTheme();
    setCurrentTheme(savedTheme);
    setMounted(true);
  }, []);

  // Fonction pour changer de thème avec sauvegarde
  const setTheme = (themeName: string) => {
    const foundTheme = availableThemes.find(theme => theme.name === themeName);
    if (foundTheme) {
      setCurrentTheme(foundTheme);
      
      // Sauvegarder dans localStorage seulement côté client
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(THEME_STORAGE_KEY, foundTheme.name);
        } catch (error) {
          console.warn('Failed to save theme to localStorage:', error);
        }
      }
    }
  };

  // Check si mode sombre
  const isDarkMode = currentTheme.category === 'dark';

  // Basculer entre thème correspondant ou premier thème disponible de la catégorie opposée
  const toggleDarkMode = () => {
    const targetCategory = isDarkMode ? 'light' : 'dark';
    
    // Essayer de trouver un thème correspondant de la catégorie opposée
    // En se basant sur le nom de base (sans le suffixe -light ou -dark)
    const currentBaseName = currentTheme.name.replace(/-light$|-dark$/, '');
    const correspondingTheme = availableThemes.find(theme => {
      const themeBaseName = theme.name.replace(/-light$|-dark$/, '');
      return theme.category === targetCategory && themeBaseName === currentBaseName;
    });
    
    // Si un thème correspondant existe, l'utiliser
    if (correspondingTheme) {
      setTheme(correspondingTheme.name);
    } else {
      // Sinon, fallback sur le premier thème de la catégorie opposée
      const fallbackTheme = availableThemes.find(theme => theme.category === targetCategory);
      if (fallbackTheme) {
        setTheme(fallbackTheme.name);
      }
    }
  };

  // Appliquer les couleurs CSS custom properties au DOM et la classe bg-background sur body
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const colors = currentTheme.colors;

    // Appliquer toutes les couleurs comme variables CSS
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });

    // Variables additionnelles pour faciliter l'usage avec Tailwind
    root.style.setProperty('--theme-primary', colors.primary);
    root.style.setProperty('--theme-secondary', colors.secondary);
    root.style.setProperty('--theme-accent', colors.accent);
    root.style.setProperty('--theme-background', colors.background);
    root.style.setProperty('--theme-surface', colors.surface);
    root.style.setProperty('--theme-text', colors.text);

    // Ajouter la classe bg-background au body
    // Nettoyer d'abord toutes les anciennes classes bg-* du thème
    const classesToRemove = Array.from(body.classList).filter(className => 
      className.startsWith('bg-') && className.includes('theme')
    );
    classesToRemove.forEach(className => body.classList.remove(className));
    
    // Ajouter la nouvelle classe
    body.classList.add('bg-background');

    // Fonction de nettoyage pour supprimer la classe quand le composant est démonté
    return () => {
      body.classList.remove('bg-background');
    };
  }, [currentTheme]);

  const contextValue: ThemeContextValue = {
    currentTheme,
    setTheme,
    availableThemes,
    isDarkMode,
    toggleDarkMode,
    // Ajout de l'état mounted pour les composants qui en ont besoin
    mounted,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

