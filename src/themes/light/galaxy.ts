import { Theme } from '../../types';

export const galaxyLight: Theme = {
  name: 'galaxy-light',
  displayName: 'Galaxy Light',
  category: 'light',
  colors: {
    // Violet éclatant cohérent avec la version dark
    primary: '#7C3AED',           // Violet vif
    primaryLight: '#A78BFA',      // Violet clair
    primaryDark: '#5B21B6',       // Violet profond
    
    // Indigo secondaire moderne
    secondary: '#6366F1',         // Indigo vif
    secondaryLight: '#818CF8',    
    secondaryDark: '#4F46E5',     
    
    // Accent rose-violet
    accent: '#EC4899',            // Rose moderne
    accentLight: '#F472B6',       
    accentDark: '#DB2777',        
    
    // Backgrounds blancs/clairs
    background: '#FFFFFF',        // Blanc pur
    backgroundLight: '#FAFAFA',   // Blanc cassé très léger
    backgroundDark: '#F5F5F5',    // Gris très clair
    
    surface: '#FFFFFF',           // Surface blanche
    surfaceLight: '#FAFAFA',      // Surface légèrement grise
    surfaceDark: '#F9FAFB',       // Surface avec teinte subtile
    
    // Textes optimisés pour lisibilité sur fond clair
    text: '#111827',              // Presque noir
    textSecondary: '#4B5563',     // Gris foncé
    textMuted: '#6B7280',         // Gris moyen (bien plus lisible)
    textInverse: '#FFFFFF',       // Blanc pour contraste
    
    // Borders cohérentes et subtiles
    border: '#E5E7EB',            // Gris clair
    borderLight: '#F3F4F6',       // Gris très clair
    borderDark: '#D1D5DB',        // Gris moyen
    
    // Status colors modernes (identiques à dark)
    success: '#34D399',           
    successLight: '#6EE7B7',      
    successDark: '#059669',       
    
    warning: '#FBBF24',           
    warningLight: '#FCD34D',      
    warningDark: '#D97706',       
    
    error: '#F87171',             
    errorLight: '#FCA5A5',        
    errorDark: '#DC2626',         
    
    info: '#60A5FA',              
    infoLight: '#93C5FD',         
    infoDark: '#2563EB',          
  },
};