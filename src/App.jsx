import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ViscousDrag from './pages/ViscousDrag';
import TerminalVelocity from './pages/TerminalVelocity';
import FluidFlow from './pages/FluidFlow';
import Continuity from './pages/Continuity';
import BernoulliEquation from './pages/BernoulliEquation';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <Router>
            <div className={`app ${darkMode ? 'dark' : 'light'}`}>
                <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/viscous-drag" element={<ViscousDrag />} />
                        <Route path="/terminal-velocity" element={<TerminalVelocity />} />
                        <Route path="/fluid-flow" element={<FluidFlow />} />
                        <Route path="/continuity" element={<Continuity />} />
                        <Route path="/bernoulli-equation" element={<BernoulliEquation />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
