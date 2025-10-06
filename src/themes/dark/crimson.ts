import { Theme } from '../../types';

export const crimsonDark: Theme = {
  name: 'crimson-dark',
  displayName: 'Crimson Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Rouge sang profond
    primary: '#DC143C',
    primaryLight: '#FF4D6A',
    primaryDark: '#B8102E',
    
    // Couleurs secondaires - Or sombre
    secondary: '#DAA520',
    secondaryLight: '#FFD700',
    secondaryDark: '#B8860B',
    
    // Couleurs d'accent - Violet bordeaux
    accent: '#8B0052',
    accentLight: '#B8006D',
    accentDark: '#6B003F',
    
    // Couleurs de fond - Noir classique
    background: '#0A0A0A',
    backgroundLight: '#1A1A1A',
    backgroundDark: '#000000',
    surface: '#1A1A1A',
    surfaceLight: '#2A2A2A',
    surfaceDark: '#0F0F0F',
    
    // Couleurs de texte - Blanc classique
    text: '#FFFFFF',
    textSecondary: '#E0E0E0',
    textMuted: '#999999',
    textInverse: '#000000',
    
    // Couleurs de bordure - Gris classique
    border: '#2A2A2A',
    borderLight: '#3A3A3A',
    borderDark: '#1A1A1A',
    
    // Couleurs d'état - Palette sombre intense
    success: '#2ECC71',
    successLight: '#58D68D',
    successDark: '#27AE60',
    warning: '#F39C12',
    warningLight: '#F5B041',
    warningDark: '#D68910',
    error: '#E74C3C',
    errorLight: '#EC7063',
    errorDark: '#C0392B',
    info: '#E91E63',
    infoLight: '#F06292',
    infoDark: '#C2185B',
  },
};