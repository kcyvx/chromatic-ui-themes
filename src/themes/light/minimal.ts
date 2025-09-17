
import { Theme } from '../../types';

export const minimalLight: Theme = {
  name: 'minimal-light',
  displayName: 'Minimal Light',
  category: 'light',
  colors: {
    primary: '#000000',
    primaryLight: '#404040',
    primaryDark: '#000000',
    
    secondary: '#6B7280',
    secondaryLight: '#9CA3AF',
    secondaryDark: '#4B5563',
    
    accent: '#7C3AED',
    accentLight: '#A78BFA',
    accentDark: '#6D28D9',
    
    // Backgrounds minimalistes avec contraste clair
    background: '#FAFAFA',        // Gris très léger
    backgroundLight: '#FFFFFF',   // Blanc pur
    backgroundDark: '#F0F0F0',    // Gris clair mais visible
    
    surface: '#FFFFFF',
    surfaceLight: '#FFFFFF',
    surfaceDark: '#F5F5F5',       // Gris très clair
    
    text: '#000000',
    textSecondary: '#374151',
    textMuted: '#9CA3AF',
    textInverse: '#FFFFFF',
    
    // Bordures minimalistes mais visibles
    border: '#D1D5DB',            // Gris moyen
    borderLight: '#E5E7EB',       
    borderDark: '#9CA3AF',        // Plus marqué
    
    success: '#10B981',
    successLight: '#34D399',
    successDark: '#059669',
    warning: '#F59E0B',
    warningLight: '#FBBF24',
    warningDark: '#D97706',
    error: '#EF4444',
    errorLight: '#F87171',
    errorDark: '#DC2626',
    info: '#6B7280',
    infoLight: '#9CA3AF',
    infoDark: '#4B5563',
  },
};