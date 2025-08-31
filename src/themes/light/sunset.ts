import { Theme } from '../../types';

export const sunsetLight: Theme = {
  name: 'sunset-light',
  displayName: 'Sunset Light',
  category: 'light',
  colors: {
    // Couleurs principales - Orange coucher de soleil
    primary: '#FF6F00',
    primaryLight: '#FFB74D',
    primaryDark: '#E65100',
    
    // Couleurs secondaires - Rouge corail
    secondary: '#FF5722',
    secondaryLight: '#FF8A65',
    secondaryDark: '#D84315',
    
    // Couleurs d'accent - Violet crépuscule
    accent: '#673AB7',
    accentLight: '#9575CD',
    accentDark: '#512DA8',
    
    // Couleurs de fond - Blanc chaud
    background: '#FFFAF7',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#FFF3E0',
    surface: '#FFFFFF',
    surfaceLight: '#FFFAF7',
    surfaceDark: '#FFF3E0',
    
    // Couleurs de texte
    text: '#3E2723',
    textSecondary: '#5D4037',
    textMuted: '#A1887F',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure
    border: '#FFCC02',
    borderLight: '#FFF8E1',
    borderDark: '#FFB300',
    
    // Couleurs d'état
    success: '#8BC34A',
    successLight: '#AED581',
    successDark: '#689F38',
    warning: '#FFC107',
    warningLight: '#FFD54F',
    warningDark: '#FF8F00',
    error: '#F44336',
    errorLight: '#EF5350',
    errorDark: '#C62828',
    info: '#2196F3',
    infoLight: '#64B5F6',
    infoDark: '#1976D2',
  },
};