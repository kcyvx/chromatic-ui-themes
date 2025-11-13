import { Theme } from '../../types';

export const emberDark: Theme = {
  name: 'ember-dark',
  displayName: 'Ember Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Orange braise chaud
    primary: '#FB923C',
    primaryLight: '#FDBA74',
    primaryDark: '#EA580C',
    
    // Couleurs secondaires - Ambre doré
    secondary: '#FBBF24',
    secondaryLight: '#FCD34D',
    secondaryDark: '#D97706',
    
    // Couleurs d'accent - Rouge corail
    accent: '#F87171',
    accentLight: '#FCA5A5',
    accentDark: '#DC2626',
    
    // Couleurs de fond - Noir profond
    background: '#0A0A0A',
    backgroundLight: '#1A1A1A',
    backgroundDark: '#000000',
    
    surface: '#1A1A1A',
    surfaceLight: '#2A2A2A',
    surfaceDark: '#0F0F0F',
    
    // Couleurs de texte - Blanc/gris pour lisibilité
    text: '#FAFAFA',
    textSecondary: '#E5E7EB',
    textMuted: '#9CA3AF',
    textInverse: '#0A0A0A',
    
    // Couleurs de bordure - Gris neutres
    border: '#2A2A2A',
    borderLight: '#3A3A3A',
    borderDark: '#1A1A1A',
    
    // Couleurs d'état - Palette moderne
    success: '#34D399',
    successLight: '#6EE7B7',
    successDark: '#059669',
    
    warning: '#FBBF24',
    warningLight: '#FCD34D',
    warningDark: '#D97706',
    
    error: '#F87171',
    errorLight: '#FCA5A5',
    errorDark: '#DC2626',
    
    info: '#60A5FA',
    infoLight: '#93C5FD',
    infoDark: '#3B82F6',
  },
};