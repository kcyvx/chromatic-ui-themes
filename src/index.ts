// Styles CSS
import './themes.css';

// Types
export type { Theme, ThemeColors, ThemeContextValue, ThemeProviderProps, ThemeCategory } from './types';

// Components
export { ThemeProvider, ThemeContext } from './components/ThemeProvider';

// Hooks
export { useTheme, useThemeColors, useIsDarkMode, useToggleDarkMode } from './hooks/useTheme';

// Light Themes
export {
  oceanicLight,
  sakuraLight,
  forestLight,
  sunsetLight,
  arcticLight,
  lightThemes
} from './themes/light';

// Dark Themes
export {
  arcticDark,
  darkThemes
} from './themes/dark';

// Utils
export {
  generateCSSVariables,
  generateTailwindConfig,
  generateMultipleThemesCSS,
  applyThemeToDOM,
  hexToRgb,
  getContrastRatio,
  isAccessible
} from './utils';

// All themes - maintenant importé depuis themes/index.ts
export { allThemes } from './themes';

// Default export avec tous les thèmes
export { default } from './themes';

