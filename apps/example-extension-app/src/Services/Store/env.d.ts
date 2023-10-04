import { OptionsSync } from 'webext-options-sync';

// type that allows optionsSync on the window object
declare global {
  interface Window {
    optionsStorage: OptionsSync;
  }
}
