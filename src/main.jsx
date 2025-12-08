import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('[main.jsx] Starting to execute');
console.log('[main.jsx] React import:', typeof StrictMode);
console.log('[main.jsx] createRoot import:', typeof createRoot);

const rootElement = document.getElementById('root');
console.log('[main.jsx] Root element:', rootElement);

try {
    console.log('[main.jsx] Creating React root...');
    const root = createRoot(rootElement);
    console.log('[main.jsx] Rendering app...');
    root.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
    console.log('[main.jsx] Render complete!');
} catch (error) {
    console.error('[main.jsx] ERROR during render:', error);
}
