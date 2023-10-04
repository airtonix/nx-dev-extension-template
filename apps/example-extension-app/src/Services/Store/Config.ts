import OptionsSync from 'webext-options-sync';

import type { ExtensionOptions } from './types';
import { defaults } from './defaults';
import { migrateToColourString } from './Migrations/migrateToColourString';

export const OptionsStorage = new OptionsSync<ExtensionOptions>({
  defaults,

  // List of functions that are called when the extension is updated
  migrations: [
    migrateToColourString,

    // Integrated utility that drops any properties that don't appear in the defaults
    OptionsSync.migrations.removeUnused,
  ],
});

window.optionsStorage = OptionsStorage;
