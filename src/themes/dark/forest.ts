import { Theme } from '../../types';

export const forestDark: Theme = {
  name: 'forest-dark',
  displayName: 'Forest Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Vert forêt lumineux
    primary: '#66BB6A',
    primaryLight: '#98EE99',
    primaryDark: '#2E7D32',
    
    // Couleurs secondaires - Vert sage éclatant
    secondary: '#9CCC65',
    secondaryLight: '#CFFF95',
    secondaryDark: '#689F38',
    
    // Couleurs d'accent - Orange terre chaud
    accent: '#FF8A65',
    accentLight: '#FFBC97',
    accentDark: '#FF7043',
    
    // Couleurs de fond - Nuit forestière
    background: '#0D1A0D',
    backgroundLight: '#1B2A1B',
    backgroundDark: '#0A130A',
    surface: '#1B2A1B',
    surfaceLight: '#263626',
    surfaceDark: '#0D1A0D',
    
    // Couleurs de texte - Vert pâle glacé
    text: '#E8F5E9',
    textSecondary: '#A5D6A7',
    textMuted: '#558B2F',
    textInverse: '#0D1A0D',
    
    // Couleurs de bordure - Tons verts sombres
    border: '#2E4630',
    borderLight: '#3E5C3E',
    borderDark: '#1B2A1B',
    
    // Couleurs d'état adaptées au mode sombre
    success: '#81C784',
    successLight: '#B2FFB5',
    successDark: '#4CAF50',
    warning: '#FFD54F',
    warningLight: '#FFE082',
    warningDark: '#FFA000',
    error: '#E57373',
    errorLight: '#FF8A80',
    errorDark: '#C62828',
    info: '#64B5F6',
    infoLight: '#90CAF9',
    infoDark: '#1976D2',
  },
};