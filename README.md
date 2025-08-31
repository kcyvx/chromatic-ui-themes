# Chromatic UI Themes

Une librairie de thèmes React moderne et flexible avec support TypeScript, conçue pour créer des interfaces utilisateur cohérentes et accessibles.

##  Fonctionnalités

-  **5 thèmes lumineux** + **1 thème sombre** (extensible)
-  **Système de couleurs complet** (primaire, secondaire, accent, états, etc.)
-  **Hooks React intuitifs** pour une intégration facile
-  **Classes CSS automatiques** prêtes à l'emploi
-  **Basculement light/dark** en un clic
- ♿ **Outils d'accessibilité** intégrés
-  **Variables CSS personnalisées** pour une flexibilité maximale
-  **TypeScript** support complet

##  Installation

```bash
npm install chromatic-ui-themes
# ou
yarn add chromatic-ui-themes
# ou
pnpm add chromatic-ui-themes
```

##  Utilisation de base

### 1. Configuration initiale

Importez le CSS et configurez le ThemeProvider dans votre application :

```tsx
import React from 'react';
import { ThemeProvider } from 'chromatic-ui-themes';
import 'chromatic-ui-themes/dist/themes.css'; // ⚠️ IMPORTANT : N'oubliez pas cette ligne !

function App() {
  return (
    <ThemeProvider defaultTheme="oceanic-light">
      <div className="min-h-screen bg-background text">
        <h1 className="text-2xl font-bold primary">
          Bienvenue dans Chromatic UI !
        </h1>
        <p className="text-secondary">
          Votre interface avec des thèmes magnifiques.
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### 2. Utilisation des hooks

```tsx
import React from 'react';
import { useTheme, useThemeColors } from 'chromatic-ui-themes';

function MyComponent() {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const colors = useThemeColors();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold primary mb-4">
        Thème actuel : {currentTheme.displayName}
      </h2>
      
      {/* Utilisation directe des couleurs */}
      <div 
        style={{ 
          backgroundColor: colors.primary, 
          color: colors.textInverse 
        }}
        className="p-4 rounded-lg mb-4"
      >
        Boîte avec couleur primaire
      </div>

      {/* Utilisation des classes CSS */}
      <div className="bg-secondary text-inverse p-4 rounded-lg">
        Boîte avec classes CSS automatiques
      </div>
    </div>
  );
}
```

##  Thèmes disponibles

### Thèmes lumineux
- **Oceanic Light** (`oceanic-light`) - Bleu océan rafraîchissant
- **Sakura Light** (`sakura-light`) - Rose cerisier délicat  
- **Forest Light** (`forest-light`) - Vert nature apaisant
- **Sunset Light** (`sunset-light`) - Orange coucher de soleil chaleureux
- **Arctic Light** (`arctic-light`) - Bleu glaciaire cristallin

### Thèmes sombres
- **Arctic Dark** (`arctic-dark`) - Nuit polaire profonde

##  Exemples avancés

### Sélecteur de thèmes simple

```tsx
import React from 'react';
import { useTheme } from 'chromatic-ui-themes';

function ThemeSelector() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="p-4">
      <label className="block text-sm font-medium text-secondary mb-2">
        Choisir un thème :
      </label>
      <select 
        value={currentTheme.name}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-surface border border-color rounded-md px-3 py-2 text focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {availableThemes.map((theme) => (
          <option key={theme.name} value={theme.name}>
            {theme.displayName}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### Basculement Light/Dark avec Arctic

```tsx
import React from 'react';
import { useTheme } from 'chromatic-ui-themes';

function ArcticThemeToggle() {
  const { currentTheme, setTheme, isDarkMode } = useTheme();

  const toggleArcticTheme = () => {
    if (isDarkMode) {
      setTheme('arctic-light');
    } else {
      setTheme('arctic-dark');
    }
  };

  return (
    <button
      onClick={toggleArcticTheme}
      className="bg-primary hover:bg-primary-dark text-inverse px-4 py-2 rounded-lg transition-colors"
    >
      {currentTheme.name === 'arctic-light' ? '🌙' : '☀️'} 
      {currentTheme.name === 'arctic-light' ? ' Mode Sombre' : ' Mode Clair'}
    </button>
  );
}
```

### Sélecteur de thèmes avec aperçu

```tsx
import React from 'react';
import { useTheme } from 'chromatic-ui-themes';

function ThemeGrid() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text mb-4">Choisir votre thème</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {availableThemes.map((theme) => (
          <div
            key={theme.name}
            onClick={() => setTheme(theme.name)}
            className={`
              cursor-pointer p-4 rounded-lg border-2 transition-all
              ${currentTheme.name === theme.name 
                ? 'border-primary bg-primary-light' 
                : 'border-light hover:border-primary'
              }
            `}
          >
            {/* Aperçu des couleurs */}
            <div className="flex space-x-1 mb-2">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: theme.colors.primary }}
              />
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: theme.colors.secondary }}
              />
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: theme.colors.accent }}
              />
            </div>
            
            <h4 className="font-medium text-sm text">
              {theme.displayName}
            </h4>
            <p className="text-xs text-muted mt-1">
              {theme.category === 'light' ? ' Clair' : ' Sombre'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Basculement automatique Light/Dark

```tsx
import React from 'react';
import { useTheme, useToggleDarkMode, useIsDarkMode } from 'chromatic-ui-themes';

function AutoThemeToggle() {
  const toggleDarkMode = useToggleDarkMode();
  const isDark = useIsDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-accent hover:bg-accent-dark text-inverse px-4 py-2 rounded-full transition-all duration-300"
    >
      {isDark ? ' Mode Clair' : ' Mode Sombre'}
    </button>
  );
}
```

##  Classes CSS disponibles

### Couleurs de texte
```css
.primary { color: var(--theme-primary); }
.secondary { color: var(--theme-secondary); }
.accent { color: var(--theme-accent); }
.text { color: var(--theme-text); }
.text-secondary { color: var(--theme-textSecondary); }
.text-muted { color: var(--theme-textMuted); }
.success { color: var(--theme-success); }
.warning { color: var(--theme-warning); }
.error { color: var(--theme-error); }
.info { color: var(--theme-info); }
```

### Couleurs de fond
```css
.bg-primary { background-color: var(--theme-primary); }
.bg-secondary { background-color: var(--theme-secondary); }
.bg-accent { background-color: var(--theme-accent); }
.bg-background { background-color: var(--theme-background); }
.bg-surface { background-color: var(--theme-surface); }
/* ... et toutes les variantes light/dark */
```

### Boutons pré-stylés
```css
.btn-primary /* Bouton primaire avec hover */
.btn-secondary /* Bouton secondaire avec hover */
.btn-outline-primary /* Bouton outline avec hover */
```

### États hover
```css
.hover-primary:hover /* Change la couleur au survol */
.hover-bg-primary:hover /* Change le fond au survol */
```

## 🛠 Hooks disponibles

### `useTheme()`
Hook principal pour gérer les thèmes :
```tsx
const {
  currentTheme,      // Thème actuel
  setTheme,         // Fonction pour changer de thème
  availableThemes,  // Liste des thèmes disponibles
  isDarkMode,       // Boolean : mode sombre actif ?
  toggleDarkMode    // Basculer entre le premier light/dark
} = useTheme();
```

### `useThemeColors()`
Accès direct aux couleurs du thème actuel :
```tsx
const colors = useThemeColors();
// colors.primary, colors.secondary, colors.background, etc.
```

### `useIsDarkMode()`
Vérifier si le mode sombre est actif :
```tsx
const isDark = useIsDarkMode();
```

### `useToggleDarkMode()`
Basculer entre light/dark :
```tsx
const toggleDarkMode = useToggleDarkMode();
```

##  Utilitaires

### Génération de CSS personnalisé
```tsx
import { generateCSSVariables, generateTailwindConfig } from 'chromatic-ui-themes';

// Générer les variables CSS pour un thème
const cssVars = generateCSSVariables(myTheme);

// Générer la config Tailwind
const tailwindConfig = generateTailwindConfig(myTheme);
```

### Outils d'accessibilité
```tsx
import { getContrastRatio, isAccessible } from 'chromatic-ui-themes';

// Vérifier le contraste entre deux couleurs
const contrast = getContrastRatio('#000000', '#FFFFFF'); // 21

// Vérifier l'accessibilité WCAG
const accessible = isAccessible('#000000', '#FFFFFF', 'AA'); // true
```

##  Personnalisation

### Créer un thème personnalisé

```tsx
import { Theme } from 'chromatic-ui-themes';

const myCustomTheme: Theme = {
  name: 'my-theme',
  displayName: 'Mon Thème',
  category: 'light',
  colors: {
    primary: '#FF6B6B',
    primaryLight: '#FF8E8E',
    primaryDark: '#E55555',
    // ... toutes les autres couleurs
  }
};

// Utiliser avec le provider
<ThemeProvider themes={[myCustomTheme]} defaultTheme="my-theme">
  <App />
</ThemeProvider>
```

### Utilisation avec Tailwind CSS

Dans votre `tailwind.config.js` :

```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Variables CSS personnalisées disponibles
        'theme-primary': 'var(--theme-primary)',
        'theme-secondary': 'var(--theme-secondary)',
        'theme-accent': 'var(--theme-accent)',
        // etc.
      }
    }
  }
}
```

## 🔧 Configuration avancée

### Props du ThemeProvider

```tsx
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;           // Thème par défaut
  themes?: Theme[];               // Thèmes personnalisés
}
```

### Exemple complet

```tsx
import React from 'react';
import { ThemeProvider, useTheme } from 'chromatic-ui-themes';
import 'chromatic-ui-themes/dist/themes.css';

function App() {
  return (
    <ThemeProvider defaultTheme="oceanic-light">
      <div className="min-h-screen bg-background">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function Header() {
  return (
    <header className="bg-surface border-b border-color p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold primary">Mon App</h1>
        <ThemeControls />
      </div>
    </header>
  );
}

function ThemeControls() {
  const { setTheme, toggleDarkMode, isDarkMode } = useTheme();
  
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setTheme('sakura-light')}
        className="btn-outline-primary"
      >
        🌸 Sakura
      </button>
      <button
        onClick={() => setTheme('forest-light')}
        className="btn-outline-primary"
      >
        🌲 Forest
      </button>
      <button
        onClick={toggleDarkMode}
        className="btn-primary"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Proposer de nouveaux thèmes
- Améliorer l'accessibilité
- Corriger des bugs
- Améliorer la documentation

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.