import { Theme } from '../../types';

export const neonDark: Theme = {
  name: 'neon-dark',
  displayName: 'Neon Dark',
  category: 'dark',
  colors: {
    // Couleurs principales - Violet électrique lumineux
    primary: '#A78BFA',
    primaryLight: '#C4B5FD',
    primaryDark: '#8B5CF6',
    
    // Couleurs secondaires - Cyan néon brillant
    secondary: '#22D3EE',
    secondaryLight: '#67E8F9',
    secondaryDark: '#06B6D4',
    
    // Couleurs d'accent - Rose fluo éclatant
    accent: '#F472B6',
    accentLight: '#F9A8D4',
    accentDark: '#EC4899',
    
    // Couleurs de fond - Noir profond avec nuances
    background: '#0F0F23',
    backgroundLight: '#1A1A3A',
    backgroundDark: '#050514',
    surface: '#1A1A3A',
    surfaceLight: '#252550',
    surfaceDark: '#0F0F23',
    
    // Couleurs de texte - Blanc et néon
    text: '#F8FAFC',
    textSecondary: '#E2E8F0',
    textMuted: '#94A3B8',
    textInverse: '#0F0F23',
    
    // Couleurs de bordure avec effet néon
    border: '#334155',
    borderLight: '#475569',
    borderDark: '#1E293B',
    
    // Couleurs d'état - Versions néon sombres
    success: '#22C55E',
    successLight: '#4ADE80',
    successDark: '#16A34A',
    warning: '#EAB308',
    warningLight: '#FDE047',
    warningDark: '#CA8A04',
    error: '#F87171',
    errorLight: '#FCA5A5',
    errorDark: '#EF4444',
    info: '#60A5FA',
    infoLight: '#93C5FD',
    infoDark: '#3B82F6',
  },
};