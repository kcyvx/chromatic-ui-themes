import { Theme } from '../../types';

export const sunsetDark: Theme = {
  name: 'sunset-dark',
  displayName: 'Sunset Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Orange coucher de soleil adapté
    primary: '#FFB74D',
    primaryLight: '#FFCC02',
    primaryDark: '#FF6F00',

    // Couleurs secondaires - Rouge corail plus lumineux
    secondary: '#FF8A65',
    secondaryLight: '#FFAB91',
    secondaryDark: '#FF5722',

    // Couleurs d'accent - Violet crépuscule adapté
    accent: '#9575CD',
    accentLight: '#B39DDB',
    accentDark: '#673AB7',

    // Couleurs de fond - Tons sombres avec nuances chaudes
    background: '#1A0F0A',
    backgroundLight: '#2D1B14',
    backgroundDark: '#0F0804',

    surface: '#2D1B14',
    surfaceLight: '#3E2820',
    surfaceDark: '#1F1209',

    // Couleurs de texte - Claires avec nuances chaudes
    text: '#FFF4E6',
    textSecondary: '#F5E6D3',
    textMuted: '#D7C4B0',
    textInverse: '#3E2723',

    // Couleurs de bordure - Versions sombres
    border: '#5D4037',
    borderLight: '#6D4C41',
    borderDark: '#4E2D26',

    // Couleurs d'état - Ajustées pour le contraste sombre
    success: '#9CCC65',
    successLight: '#AED581',
    successDark: '#8BC34A',

    warning: '#FFD54F',
    warningLight: '#FFECB3',
    warningDark: '#FFC107',

    error: '#EF5350',
    errorLight: '#FF7961',
    errorDark: '#F44336',

    info: '#64B5F6',
    infoLight: '#90CAF9',
    infoDark: '#2196F3',
  },
};