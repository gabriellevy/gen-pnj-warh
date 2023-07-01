import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './comp/App'
import { PersoProvider } from './utils/contexte/perso'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <PersoProvider>
      <App />
    </PersoProvider>
);
