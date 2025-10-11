import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@fontsource/montserrat/800.css'; // ExtraBold
import '@fontsource/poppins/600.css'; // SemiBold
import '@fontsource/inter/400.css'; // Regular
import { useThemeStore } from './store/themeStore';

// Initialize theme on app start
useThemeStore.getState().init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
