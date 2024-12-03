import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';

const app = React.createElement(App)

createRoot(document.getElementById('root')).render(app);
