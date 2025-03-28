import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NotFound from './not-found.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <App />
    {/* <NotFound /> */}
  </StrictMode>
);
