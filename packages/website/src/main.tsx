// Modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@owl-systems/ui-kit/styles.css';

// Global Imports
import './index.css';

// Local Imports
import { HeyCenterExperience } from './experiences';

// Run App
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeyCenterExperience />
  </StrictMode>,
);
