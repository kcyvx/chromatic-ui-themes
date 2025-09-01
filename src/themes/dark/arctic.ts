import { Theme } from '../../types';

export const arcticDark: Theme = {
  name: 'arctic-dark',
  displayName: 'Arctic Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Bleu glaciaire lumineux
    primary: '#4fc3f7ff',
    primaryLight: '#8BF6FF',
    primaryDark: '#0288D1',
    
    // Couleurs secondaires - Cyan cristal éclatant
    secondary: '#4DD0E1',
    secondaryLight: '#88FFFF',
    secondaryDark: '#00BCD4',
    
    // Couleurs d'accent - Argent poli lumineux
    accent: '#90A4AE',
    accentLight: '#C1D5E0',
    accentDark: '#607D8B',
    
    // Couleurs de fond - Nuit polaire profonde
    background: '#0F1419',
    backgroundLight: '#1A252F',
    backgroundDark: '#0A0E13',
    surface: '#1A252F',
    surfaceLight: '#263238',
    surfaceDark: '#0F1419',
    
    // Couleurs de texte - Blanc glacé
    text: '#E8F4FD',
    textSecondary: '#B0C4DE',
    textMuted: '#607D8B',
    textInverse: '#0F1419',
    
    // Couleurs de bordure - Tons glacés sombres
    border: '#37474F',
    borderLight: '#455A64',
    borderDark: '#263238',
    
    // Couleurs d'état - Adaptées pour mode sombre
    success: '#69F0AE',
    successLight: '#9CFFB5',
    successDark: '#00C853',
    warning: '#FFFF8D',
    warningLight: '#FFFFBF',
    warningDark: '#FFD600',
    error: '#FF5252',
    errorLight: '#FF8A80',
    errorDark: '#D50000',
    info: '#40C4FF',
    infoLight: '#82F7FF',
    infoDark: '#0091EA',
  },
};