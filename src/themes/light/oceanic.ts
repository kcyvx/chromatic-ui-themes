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
    
    secondary: '#17A2B8',
    secondaryLight: '#5BC0DE',
    secondaryDark: '#117A8B',
    
    accent: '#FF6B6B',
    accentLight: '#FF8E8E',
    accentDark: '#E55555',
    
    // Backgrounds océaniques avec gradient subtil
    background: '#F0F9FF',        // Bleu ciel très pâle
    backgroundLight: '#FFFFFF',   // Blanc pur
    backgroundDark: '#E0F2FE',    // Bleu ciel plus marqué
    
    surface: '#FFFFFF',
    surfaceLight: '#F8FCFF',      // Blanc avec nuance océan
    surfaceDark: '#E6F3FF',       // Bleu très clair
    
    text: '#1A365D',
    textSecondary: '#2D5A87',
    textMuted: '#68A3D9',
    textInverse: '#FFFFFF',
    
    // Bordures océaniques plus contrastées
    border: '#7DD3FC',            // Bleu ciel moyen
    borderLight: '#BAE6FD',       // Plus clair
    borderDark: '#38BDF8',        // Plus foncé
    
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
