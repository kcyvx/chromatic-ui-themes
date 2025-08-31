export interface ThemeColors {
  // Couleurs principales
  primary: string;
  primaryLight: string;
  primaryDark: string;
  
  // Couleurs secondaires
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  
  // Couleurs d'accent
  accent: string;
  accentLight: string;
  accentDark: string;
  
  // Couleurs de fond
  background: string;
  backgroundLight: string;
  backgroundDark: string;
  surface: string;
  surfaceLight: string;
  surfaceDark: string;
  
  // Couleurs de texte
  text: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;
  
  // Couleurs de bordure
  border: string;
  borderLight: string;
  borderDark: string;
  
  // Couleurs d'état
  success: string;
  successLight: string;
  successDark: string;
  warning: string;
  warningLight: string;
  warningDark: string;
  error: string;
  errorLight: string;
  errorDark: string;
  info: string;
  infoLight: string;
  infoDark: string;
}

export interface Theme {
  name: string;
  displayName: string;
  category: 'light' | 'dark';
  colors: ThemeColors;
}

export interface ThemeContextValue {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  availableThemes: Theme[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export type ThemeCategory = 'light' | 'dark';

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  themes?: Theme[];
}