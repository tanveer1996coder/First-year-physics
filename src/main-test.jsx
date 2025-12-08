import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

console.log('main.jsx is loading');
console.log('React:', typeof React !== 'undefined' ? 'loaded' : 'not loaded');
console.log('createRoot:', typeof createRoot);

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

try {
    createRoot(rootElement).render(
        <invoke name="StrictMode">
            <div style={{ color: 'white', padding: '50px', fontSize: '24px' }}>
                <h1>Test - React is working!</h1>
                <p>If you see this, React is rendering correctly.</p>
            </div>
        </StrictMode>,
    );
    console.log('Render successful');
} catch (error) {
    console.error('Render error:', error);
}
