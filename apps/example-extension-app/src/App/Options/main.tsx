import { StrictMode } from 'react';
import { HashRouter } from 'react-router-dom';

import { mount } from '../../Core/mount';

import { OptionsApp } from './OptionsApp';

Promise.resolve()
  .then(() => mount())
  .then((root) => {
    root.render(
      <StrictMode>
        <HashRouter>
          <OptionsApp />
        </HashRouter>
      </StrictMode>
    );
  });
