// Central themes export file to avoid circular dependencies
export * from './light';
export * from './dark';

import { lightThemes } from './light';
import { darkThemes } from './dark';

export const allThemes = [
  ...lightThemes,
  ...darkThemes,
];

// Default export
export default allThemes;