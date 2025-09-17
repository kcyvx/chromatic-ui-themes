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
    
    // Couleurs de fond - Nuances polaires contrastées
    background: '#F0F8FF',        // Bleu très pâle (Alice Blue)
    backgroundLight: '#FFFFFF',   // Blanc pur
    backgroundDark: '#E3F2FD',    // Bleu glacé plus prononcé
    
    surface: '#FFFFFF',
    surfaceLight: '#F8FBFF',      // Blanc avec soupçon de bleu
    surfaceDark: '#ECEFF1',       // Gris-bleu froid
    
    // Couleurs de texte
    text: '#263238',
    textSecondary: '#455A64',
    textMuted: '#90A4AE',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure - Plus contrastées
    border: '#B3E5FC',            // Bleu clair plus visible
    borderLight: '#E1F5FE',       // Très léger
    borderDark: '#81D4FA',        // Plus marqué
    
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