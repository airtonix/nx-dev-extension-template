import { StrictMode } from 'react';
import { HashRouter } from 'react-router-dom';

import { mount } from '../../Core/mount';

import { NewTabApp } from './NewTabApp';

Promise.resolve()
  .then(() => mount())
  .then((root) => {
    root.render(
      <StrictMode>
        <HashRouter>
          <NewTabApp />
        </HashRouter>
      </StrictMode>
    );
  });
