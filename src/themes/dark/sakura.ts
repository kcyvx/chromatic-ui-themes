import { Theme } from '../../types';

export const sakuraDark: Theme = {
  name: 'sakura-dark',
  displayName: 'Sakura Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Rose cerisier adapté pour le sombre
    primary: '#F06292',
    primaryLight: '#F8BBD9',
    primaryDark: '#E91E63',

    // Couleurs secondaires - Rose poudré adapté
    secondary: '#CE93D8',
    secondaryLight: '#E1BEE7',
    secondaryDark: '#BA68C8',

    // Couleurs d'accent - Violet doux plus lumineux
    accent: '#CE93D8',
    accentLight: '#E1BEE7',
    accentDark: '#9C27B0',

    // Couleurs de fond - Tons sombres avec nuances violettes
    background: '#1A0E1F',
    backgroundLight: '#2D1B3D',
    backgroundDark: '#0F0711',

    surface: '#2D1B3D',
    surfaceLight: '#3E2749',
    surfaceDark: '#1F1428',

    // Couleurs de texte - Claires avec nuances roses/violettes
    text: '#F8E8F5',
    textSecondary: '#E8D0E8',
    textMuted: '#C8A8D8',
    textInverse: '#4A148C',

    // Couleurs de bordure - Versions sombres
    border: '#4A2C54',
    borderLight: '#5D3A68',
    borderDark: '#3A1F42',

    // Couleurs d'état - Ajustées pour le contraste sombre
    success: '#66BB6A',
    successLight: '#81C784',
    successDark: '#4CAF50',

    warning: '#FFB74D',
    warningLight: '#FFCC02',
    warningDark: '#FF9800',

    error: '#EF5350',
    errorLight: '#FF7961',
    errorDark: '#F44336',

    info: '#F06292',
    infoLight: '#F8BBD9',
    infoDark: '#E91E63',
  },
};