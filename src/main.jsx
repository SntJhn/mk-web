import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import '@fontsource/roboto';
import '@fontsource/outfit';
import '@fontsource/anton';
import '@fontsource/urbanist';
import '@fontsource/amaranth';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
