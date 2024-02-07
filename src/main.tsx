import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/main.scss';
import 'normalize.css';
import App from '@/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
