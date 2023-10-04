import 'webextension-polyfill';
import 'construct-style-sheets-polyfill';

import { createRoot } from 'react-dom/client';
import { shadow } from './shadow';

type MountOptions = {
  rootId?: string;
  shadowRootId?: string;
  mountTarget?: HTMLElement;
};

type MountResult = {
  render: (element: JSX.Element) => void;
  unmount: () => void;
};

/**
 * Mounts the extension to the DOM
 *
 * Note: do not destruct the result of this function, it will cause the extension to unmount
 */
export function mount({
  rootId = 'my-extension-root',
  shadowRootId = 'root',
  mountTarget = document.body,
}: MountOptions = {}): MountResult {
  // test if mountTarget exists and is a HTMLElement
  if (!(mountTarget instanceof HTMLElement)) {
    throw new Error('mountTarget must be a HTMLElement');
  }

  const contentRoot = document.createElement('div');
  contentRoot.id = rootId;
  contentRoot.style.display = 'contents';

  mountTarget.append(contentRoot);

  const shadowWrapper = shadow({ contentRoot, shadowRootId });

  return createRoot(shadowWrapper);
}
