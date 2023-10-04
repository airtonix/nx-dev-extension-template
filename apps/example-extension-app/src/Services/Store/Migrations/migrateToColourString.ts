import { ExtensionOptions } from '../types';

export function migrateToColourString(
  savedOptions: ExtensionOptions,
  currentDefaults: ExtensionOptions
) {
  // Perhaps it was renamed
  if (savedOptions.color) {
    savedOptions.colorString = savedOptions.color;
    delete savedOptions.color;
  }
}
