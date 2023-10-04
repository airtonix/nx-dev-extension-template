import { Route, Routes } from 'react-router-dom';
import { Options } from './Options';

export function OptionsApp() {
  return (
    <Routes>
      <Route path="/" element={<Options />} />
    </Routes>
  );
}
