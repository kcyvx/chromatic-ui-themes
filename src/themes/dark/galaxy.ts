import { Theme } from '../../types';

export const galaxyDark: Theme = {
  name: 'galaxy-dark',
  displayName: 'Galaxy Dark',
  category: 'dark',
  colors: {
    // Violet éclatant et moderne
    primary: '#AB65FF',           // Violet vif mais pas agressif
    primaryLight: '#C4B5FD',      // Violet clair doux
    primaryDark: '#7C3AED',       // Violet intense
    
    // Bleu-violet secondaire cohérent
    secondary: '#818CF8',         // Indigo moderne
    secondaryLight: '#A5B4FC',    
    secondaryDark: '#6366F1',     
    
    // Accent rose-violet
    accent: '#F472B6',            // Rose moderne
    accentLight: '#F9A8D4',       
    accentDark: '#EC4899',        
    
    // Backgrounds avec noir pur
    background: '#000000',        // Noir pur comme demandé
    backgroundLight: '#0A0A0A',   // Très légèrement gris
    backgroundDark: '#000000',    // Noir pur aussi
    
    surface: '#111111',           // Surface légèrement grise
    surfaceLight: '#1A1A1A',      // Surface élevée
    surfaceDark: '#080808',       // Surface basse
    
    // Textes optimisés pour lisibilité
    text: '#F3F4F6',              // Blanc cassé pour confort visuel
    textSecondary: '#D1D5DB',     // Gris clair
    textMuted: '#9CA3AF',         // Gris moyen (bien plus lisible)
    textInverse: '#0F0F0F',       // Presque noir pour contraste
    
    // Borders cohérentes avec le thème
    border: '#27272A',            // Gris foncé subtil
    borderLight: '#3F3F46',       // Gris moyen
    borderDark: '#18181B',        // Gris très foncé
    
    // Status colors modernes
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