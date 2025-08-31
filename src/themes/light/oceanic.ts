import { Theme } from '../../types';

export const oceanicLight: Theme = {
  name: 'oceanic-light',
  displayName: 'Oceanic Light',
  category: 'light',
  colors: {
    // Couleurs principales - Bleu océan
    primary: '#0077BE',
    primaryLight: '#4A9FD9',
    primaryDark: '#005A8A',
    
    // Couleurs secondaires - Turquoise
    secondary: '#17A2B8',
    secondaryLight: '#5BC0DE',
    secondaryDark: '#117A8B',
    
    // Couleurs d'accent - Corail
    accent: '#FF6B6B',
    accentLight: '#FF8E8E',
    accentDark: '#E55555',
    
    // Couleurs de fond - Blanc cassé avec nuances océan
    background: '#FAFCFF',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F0F8FF',
    surface: '#FFFFFF',
    surfaceLight: '#FAFCFF',
    surfaceDark: '#F0F8FF',
    
    // Couleurs de texte
    text: '#1A365D',
    textSecondary: '#2D5A87',
    textMuted: '#68A3D9',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure
    border: '#B3D9FF',
    borderLight: '#D6ECFF',
    borderDark: '#87CEEB',
    
    // Couleurs d'état
    success: '#28A745',
    successLight: '#71DD8A',
    successDark: '#1E7E34',
    warning: '#FFC107',
    warningLight: '#FFD54F',
    warningDark: '#FF8F00',
    error: '#DC3545',
    errorLight: '#FF6B6B',
    errorDark: '#B21E2F',
    info: '#17A2B8',
    infoLight: '#5BC0DE',
    infoDark: '#117A8B',
  },
};