import { debounce } from 'lodash-es';
import { twind, config, cssom, observe, stringify } from '../Services/Theme';

type ShadowOptions = {
  contentRoot: HTMLElement;
  shadowRootId?: string;
};

export function shadow({ contentRoot, shadowRootId = 'root' }: ShadowOptions) {
  // test if contentRoot exists and is a HTMLElement
  if (!(contentRoot instanceof HTMLElement)) {
    throw new Error('contentRoot must be a HTMLElement');
  }

  const shadowRoot = contentRoot.attachShadow({ mode: 'open' });
  const sheet = cssom(new CSSStyleSheet());

  // shadowRoot.adoptedStyleSheet bug in firefox
  // see: https://bugzilla.mozilla.org/show_bug.cgi?id=1827104
  if (navigator?.userAgent.includes('Firefox')) {
    const style = document.createElement('style');
    const debouncedSyncCss = debounce(() => {
      style.textContent += stringify(sheet.target);
    }, 100);

    const originalSheetInsert = sheet.insert;
    (sheet.insert as typeof originalSheetInsert) = (...params) => {
      originalSheetInsert(...params);
      debouncedSyncCss();
    };
    shadowRoot.appendChild(style);
  } else {
    shadowRoot.adoptedStyleSheets = [sheet.target];
  }

  const tw = twind(config, sheet);
  observe(tw, shadowRoot);

  const shadowWrapper = document.createElement('div');
  shadowWrapper.id = shadowRootId;
  shadowWrapper.style.display = 'contents';
  shadowRoot.appendChild(shadowWrapper);

  return shadowWrapper;
}
