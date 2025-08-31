import { Theme } from '../../types';

export const sakuraLight: Theme = {
  name: 'sakura-light',
  displayName: 'Sakura Light',
  category: 'light',
  colors: {
    // Couleurs principales - Rose cerisier
    primary: '#E91E63',
    primaryLight: '#F06292',
    primaryDark: '#AD1457',
    
    // Couleurs secondaires - Rose poudré
    secondary: '#F8BBD9',
    secondaryLight: '#FCE4EC',
    secondaryDark: '#F48FB1',
    
    // Couleurs d'accent - Violet doux
    accent: '#9C27B0',
    accentLight: '#CE93D8',
    accentDark: '#7B1FA2',
    
    // Couleurs de fond - Blanc rosé
    background: '#FFF8FA',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#FCE4EC',
    surface: '#FFFFFF',
    surfaceLight: '#FFF8FA',
    surfaceDark: '#F8BBD9',
    
    // Couleurs de texte
    text: '#4A148C',
    textSecondary: '#6A1B9A',
    textMuted: '#BA68C8',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure
    border: '#F8BBD9',
    borderLight: '#FCE4EC',
    borderDark: '#F06292',
    
    // Couleurs d'état
    success: '#4CAF50',
    successLight: '#81C784',
    successDark: '#388E3C',
    warning: '#FF9800',
    warningLight: '#FFB74D',
    warningDark: '#F57C00',
    error: '#F44336',
    errorLight: '#EF5350',
    errorDark: '#D32F2F',
    info: '#E91E63',
    infoLight: '#F06292',
    infoDark: '#AD1457',
  },
};