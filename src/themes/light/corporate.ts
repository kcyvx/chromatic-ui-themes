import { Theme } from '../../types';

export const corporateLight: Theme = {
  name: 'corporate-light',
  displayName: 'Corporate Light',
  category: 'light',
  colors: {
    primary: '#2563EB',
    primaryLight: '#60A5FA',
    primaryDark: '#1D4ED8',
    
    secondary: '#64748B',
    secondaryLight: '#94A3B8',
    secondaryDark: '#475569',
    
    accent: '#EA580C',
    accentLight: '#FB923C',
    accentDark: '#C2410C',
    
    // Backgrounds corporates avec plus de contraste
    background: '#F8FAFC',        // Gris très clair
    backgroundLight: '#FFFFFF',   // Blanc pur
    backgroundDark: '#E2E8F0',    // Gris plus marqué
    
    surface: '#FFFFFF',
    surfaceLight: '#FEFEFE',
    surfaceDark: '#E2E8F0',       // Même que backgroundDark pour cohérence
    
    text: '#0F172A',
    textSecondary: '#334155',
    textMuted: '#64748B',
    textInverse: '#FFFFFF',
    
    // Bordures plus visibles
    border: '#CBD5E1',            // Gris moyen
    borderLight: '#E2E8F0',       
    borderDark: '#94A3B8',        // Plus foncé
    
    success: '#059669',
    successLight: '#34D399',
    successDark: '#047857',
    warning: '#D97706',
    warningLight: '#FBBF24',
    warningDark: '#B45309',
    error: '#DC2626',
    errorLight: '#F87171',
    errorDark: '#B91C1C',
    info: '#2563EB',
    infoLight: '#60A5FA',
    infoDark: '#1D4ED8',
  },
};