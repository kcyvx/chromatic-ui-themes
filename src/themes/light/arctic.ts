import { Theme } from '../../types';

export const arcticLight: Theme = {
  name: 'arctic-light',
  displayName: 'Arctic Light',
  category: 'light',
  colors: {
    // Couleurs principales - Bleu glaciaire
    primary: '#01579B',
    primaryLight: '#4FC3F7',
    primaryDark: '#00366B',
    
    // Couleurs secondaires - Cyan cristal
    secondary: '#00BCD4',
    secondaryLight: '#4DD0E1',
    secondaryDark: '#00838F',
    
    // Couleurs d'accent - Argent brillant
    accent: '#607D8B',
    accentLight: '#90A4AE',
    accentDark: '#455A64',
    
    // Couleurs de fond - Blanc polaire
    background: '#FAFAFA',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F5F5F5',
    surface: '#FFFFFF',
    surfaceLight: '#FAFAFA',
    surfaceDark: '#F5F5F5',
    
    // Couleurs de texte
    text: '#263238',
    textSecondary: '#455A64',
    textMuted: '#90A4AE',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure
    border: '#E0F2F1',
    borderLight: '#F1F8E9',
    borderDark: '#B2DFDB',
    
    // Couleurs d'état
    success: '#00C853',
    successLight: '#69F0AE',
    successDark: '#00A043',
    warning: '#FFD600',
    warningLight: '#FFFF8D',
    warningDark: '#C6A700',
    error: '#D50000',
    errorLight: '#FF5252',
    errorDark: '#B71C1C',
    info: '#0091EA',
    infoLight: '#40C4FF',
    infoDark: '#006DB3',
  },
};