import { Route, Routes } from 'react-router-dom';
import { Popup } from './Popup';

export function PopupApp() {
  return (
    <Routes>
      <Route path="/" element={<Popup />} />
    </Routes>
  );
}
