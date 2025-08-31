import { Theme } from '../../types';

export const forestLight: Theme = {
  name: 'forest-light',
  displayName: 'Forest Light',
  category: 'light',
  colors: {
    // Couleurs principales - Vert forêt
    primary: '#2E7D32',
    primaryLight: '#66BB6A',
    primaryDark: '#1B5E20',
    
    // Couleurs secondaires - Vert sage
    secondary: '#689F38',
    secondaryLight: '#9CCC65',
    secondaryDark: '#33691E',
    
    // Couleurs d'accent - Orange terre
    accent: '#FF7043',
    accentLight: '#FFAB91',
    accentDark: '#D84315',
    
    // Couleurs de fond - Blanc naturel
    background: '#F9FFF9',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#E8F5E8',
    surface: '#FFFFFF',
    surfaceLight: '#F9FFF9',
    surfaceDark: '#E8F5E8',
    
    // Couleurs de texte
    text: '#1B5E20',
    textSecondary: '#2E7D32',
    textMuted: '#81C784',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure
    border: '#C8E6C9',
    borderLight: '#E8F5E8',
    borderDark: '#A5D6A7',
    
    // Couleurs d'état
    success: '#4CAF50',
    successLight: '#81C784',
    successDark: '#388E3C',
    warning: '#FFC107',
    warningLight: '#FFECB3',
    warningDark: '#F57F17',
    error: '#F44336',
    errorLight: '#FFCDD2',
    errorDark: '#C62828',
    info: '#2196F3',
    infoLight: '#BBDEFB',
    infoDark: '#0D47A1',
  },
};