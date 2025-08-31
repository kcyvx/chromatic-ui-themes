import { Theme, ThemeColors } from '../types';

/**
 * Génère les variables CSS personnalisées pour un thème
 */
export const generateCSSVariables = (theme: Theme): string => {
  const cssVariables = Object.entries(theme.colors)
    .map(([key, value]) => `  --theme-${key}: ${value};`)
    .join('\n');

  return `:root {\n${cssVariables}\n}`;
};

/**
 * Génère la configuration Tailwind pour un thème
 * Utile pour intégrer les couleurs dans tailwind.config.js
 */
export const generateTailwindConfig = (theme: Theme) => {
  const colors: Record<string, string> = {};
  
  Object.entries(theme.colors).forEach(([key, value]) => {
    colors[key] = value;
  });

  return {
    extend: {
      colors: {
        theme: colors,
      },
    },
  };
};

/**
 * Génère toutes les variables CSS pour plusieurs thèmes
 */
export const generateMultipleThemesCSS = (themes: Theme[]): string => {
  return themes
    .map(theme => {
      const cssVariables = Object.entries(theme.colors)
        .map(([key, value]) => `    --theme-${key}: ${value};`)
        .join('\n');
      
      return `[data-theme="${theme.name}"] {\n${cssVariables}\n}`;
    })
    .join('\n\n');
};

/**
 * Applique un thème au DOM
 */
export const applyThemeToDOM = (theme: Theme): void => {
  const root = document.documentElement;
  
  // Supprimer l'ancien attribut data-theme
  const currentTheme = root.getAttribute('data-theme');
  if (currentTheme) {
    root.removeAttribute('data-theme');
  }
  
  // Ajouter le nouveau thème
  root.setAttribute('data-theme', theme.name);
  
  // Appliquer les variables CSS
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--theme-${key}`, value);
  });
};

/**
 * Convertit une couleur hex en RGB
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Calcule le contraste entre deux couleurs (utile pour l'accessibilité)
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (hex: string): number => {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

/**
 * Vérifie si une couleur respecte les standards d'accessibilité WCAG
 */
export const isAccessible = (foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean => {
  const contrast = getContrastRatio(foreground, background);
  return level === 'AA' ? contrast >= 4.5 : contrast >= 7;
};