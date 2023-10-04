import { StrictMode } from 'react';
import { HashRouter } from 'react-router-dom';

import { mount } from '../../Core/mount';

import { PopupApp } from './PopupApp';

Promise.resolve()
  .then(() => mount())
  .then((root) => {
    root.render(
      <StrictMode>
        <HashRouter>
          <PopupApp />
        </HashRouter>
      </StrictMode>
    );
  });
