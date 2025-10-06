import { Theme } from '../../types';

export const radiantLight: Theme = {
  name: 'radiant-light',
  displayName: 'Radiant Light',
  category: 'light',
  colors: {
    // Couleurs principales - Jaune électrique adapté
    primary: '#D4E600',
    primaryLight: '#ECFF00',
    primaryDark: '#BFD000',
    
    // Couleurs secondaires - Violet profond
    secondary: '#8855FF',
    secondaryLight: '#A988FF',
    secondaryDark: '#6633E0',
    
    // Couleurs d'accent - Rose vibrant
    accent: '#FF0080',
    accentLight: '#FF4DA6',
    accentDark: '#E0006B',
    
    // Couleurs de fond - Blanc pur avec nuances
    background: '#F9F9F9',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F5F5F5',
    surface: '#FAFAFA',
    surfaceLight: '#FFFFFF',
    surfaceDark: '#F0F0F0',
    
    // Couleurs de texte - Noir profond et teintes
    text: '#0A0A0A',
    textSecondary: '#2A2A2A',
    textMuted: '#666666',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure - Gris clairs
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    borderDark: '#CCCCCC',
    
    // Couleurs d'état - Palette vibrante adaptée
    success: '#00CC88',
    successLight: '#00E599',
    successDark: '#00B377',
    warning: '#E6A300',
    warningLight: '#FFB800',
    warningDark: '#CC9000',
    error: '#E02952',
    errorLight: '#FF3366',
    errorDark: '#CC1F42',
    info: '#00B8E6',
    infoLight: '#00CCFF',
    infoDark: '#00A6CC',
  },
};