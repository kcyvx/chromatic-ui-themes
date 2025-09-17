import { Theme } from '../../types';

export const neonLight: Theme = {
  name: 'neon-light',
  displayName: 'Neon Light',
  category: 'light',
  colors: {
    // Couleurs principales - Violet électrique
    primary: '#8B5CF6',
    primaryLight: '#A78BFA',
    primaryDark: '#7C3AED',
    
    // Couleurs secondaires - Cyan néon
    secondary: '#06B6D4',
    secondaryLight: '#67E8F9',
    secondaryDark: '#0891B2',
    
    // Couleurs d'accent - Rose fluo
    accent: '#EC4899',
    accentLight: '#F472B6',
    accentDark: '#DB2777',
    
    // Couleurs de fond - Blanc avec légère teinte néon
    background: '#FAFAFA',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#F3F4F6',
    surface: '#FFFFFF',
    surfaceLight: '#FEFEFE',
    surfaceDark: '#F8FAFC',
    
    // Couleurs de texte
    text: '#1F2937',
    textSecondary: '#374151',
    textMuted: '#6B7280',
    textInverse: '#FFFFFF',
    
    // Couleurs de bordure avec effet néon subtil
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    borderDark: '#D1D5DB',
    
    // Couleurs d'état - Tons néon
    success: '#10B981',
    successLight: '#34D399',
    successDark: '#059669',
    warning: '#F59E0B',
    warningLight: '#FBBF24',
    warningDark: '#D97706',
    error: '#EF4444',
    errorLight: '#F87171',
    errorDark: '#DC2626',
    info: '#3B82F6',
    infoLight: '#60A5FA',
    infoDark: '#2563EB',
  },
};