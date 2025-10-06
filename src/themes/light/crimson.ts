import { Theme } from '../../types';

export const crimsonLight: Theme = {
  name: 'crimson-light',
  displayName: 'Crimson Light',
  category: 'light',
  colors: {
    // Couleurs principales - Rouge sang profond (identiques à dark)
    primary: '#DC143C',
    primaryLight: '#FF4D6A',
    primaryDark: '#B8102E',
    
    // Couleurs secondaires - Or sombre (identiques à dark)
    secondary: '#DAA520',
    secondaryLight: '#FFD700',
    secondaryDark: '#B8860B',
    
    // Couleurs d'accent - Violet bordeaux (identiques à dark)
    accent: '#8B0052',
    accentLight: '#B8006D',
    accentDark: '#6B003F',
    
    // Couleurs de fond - Blanc classique
    background: '#F9F9F9',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F5F5F5',
    
    surface: '#FFFFFF',
    surfaceLight: '#FAFAFA',
    surfaceDark: '#F0F0F0',
    
    // Couleurs de texte - Noir classique
    text: '#1A1A1A',
    textSecondary: '#3D3D3D',
    textMuted: '#737373',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure - Gris classique
    border: '#E0E0E0',
    borderLight: '#F0F0F0',
    borderDark: '#CCCCCC',
    
    // Couleurs d'état - Palette claire
    success: '#27AE60',
    successLight: '#2ECC71',
    successDark: '#1E8E4F',
    warning: '#D68910',
    warningLight: '#F39C12',
    warningDark: '#B8750D',
    error: '#C0392B',
    errorLight: '#E74C3C',
    errorDark: '#A02F23',
    info: '#C2185B',
    infoLight: '#E91E63',
    infoDark: '#A0134C',
  },
};