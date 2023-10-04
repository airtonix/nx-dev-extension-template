import { Route, Routes } from 'react-router-dom';
import { Welcome } from './Welcome';

export function NewTabApp() {
  return (
    <Routes>
      <Route
        path="/"
        action={async ({ request }) => {
          console.log(request);
          return;
        }}
        element={<Welcome />}
      />
    </Routes>
  );
}
