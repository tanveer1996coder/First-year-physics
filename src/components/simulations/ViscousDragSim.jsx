import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Simulation.css';

const ViscousDragSim = () => {
    const [radius, setRadius] = useState(0.005);
    const [velocity, setVelocity] = useState(0.5);
    const [fluidType, setFluidType] = useState('water');
    const [isRunning, setIsRunning] = useState(false);

    const fluids = {
        air: { name: 'Air', viscosity: 0.000018, color: '#e0f2fe' },
        water: { name: 'Water', viscosity: 0.000801, color: '#3b82f6' },
        oil: { name: 'Oil', viscosity: 0.1, color: '#fbbf24' },
        glycerin: { name: 'Glycerin', viscosity: 0.629, color: '#f59e0b' }
    };

    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const spherePos = useRef({ x: 50, y: 200 });
    const currentVelocity = useRef(velocity);

    const calculateDragForce = () => {
        const eta = fluids[fluidType].viscosity;
        return 6 * Math.PI * eta * radius * currentVelocity.current;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, fluids[fluidType].color + '40');
            gradient.addColorStop(1, fluids[fluidType].color + '80');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            if (isRunning) {
                ctx.strokeStyle = fluids[fluidType].color + '60';
                ctx.lineWidth = 2;
                for (let i = 0; i < 5; i++) {
                    const y = (height / 6) * (i + 1);
                    ctx.beginPath();
                    ctx.moveTo(spherePos.current.x - 100, y);
                    const offset = Math.sin(Date.now() / 500 + i) * 10;
                    ctx.bezierCurveTo(
                        spherePos.current.x - 50, y + offset,
                        spherePos.current.x + 50, y - offset,
                        spherePos.current.x + 100, y
                    );
                    ctx.stroke();
                }
            }

            const radiusPixels = Math.max(radius * 4000, 10);
            ctx.beginPath();
            ctx.arc(spherePos.current.x, spherePos.current.y, radiusPixels, 0, Math.PI * 2);
            ctx.fillStyle = '#60a5fa';
            ctx.fill();
            ctx.strokeStyle = '#1e40af';
            ctx.lineWidth = 2;
            ctx.stroke();

            if (isRunning) {
                spherePos.current.x += currentVelocity.current * 20;
                if (spherePos.current.x > width + 50) {
                    spherePos.current.x = -50;
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [radius, fluidType, isRunning]);

    useEffect(() => {
        currentVelocity.current = velocity;
    }, [velocity]);

    const dragForce = calculateDragForce();
    const eta = fluids[fluidType].viscosity;

    return (
        <div className="simulation-container">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="simulation-content">
                <h2>🌊 Viscous Drag Simulation</h2>
                <p className="simulation-description">Interactive demonstration of Stokes' Law: F = 6πηrv</p>

                <div className="simulation-layout">
                    <div className="canvas-container">
                        <canvas ref={canvasRef} width={600} height={400} style={{ border: '2px solid var(--border)', borderRadius: '0.5rem', background: '#f8fafc' }} />
                        <div className="simulation-controls-bottom">
                            <button className={`sim-button ${isRunning ? 'stop' : 'start'}`} onClick={() => setIsRunning(!isRunning)}>
                                {isRunning ? '⏸ Pause' : '▶ Start'}
                            </button>
                            <button className="sim-button reset" onClick={() => { spherePos.current = { x: 50, y: 200 }; setIsRunning(false); }}>
                                🔄 Reset
                            </button>
                        </div>
                    </div>

                    <div className="controls-panel">
                        <div className="control-group">
                            <label>
                                <span className="control-label">Sphere Radius</span>
                                <span className="control-value">{(radius * 1000).toFixed(1)} mm</span>
                            </label>
                            <input type="range" min="0.001" max="0.01" step="0.0001" value={radius} onChange={(e) => setRadius(parseFloat(e.target.value))} className="slider" />
                        </div>

                        <div className="control-group">
                            <label>
                                <span className="control-label">Velocity</span>
                                <span className="control-value">{velocity.toFixed(2)} m/s</span>
                            </label>
                            <input type="range" min="0.1" max="2" step="0.1" value={velocity} onChange={(e) => setVelocity(parseFloat(e.target.value))} className="slider" />
                        </div>

                        <div className="control-group">
                            <label className="control-label">Fluid Type</label>
                            <select value={fluidType} onChange={(e) => setFluidType(e.target.value)} className="fluid-select">
                                {Object.entries(fluids).map(([key, fluid]) => (
                                    <option key={key} value={key}>{fluid.name} (η = {fluid.viscosity.toExponential(2)} Pa·s)</option>
                                ))}
                            </select>
                        </div>

                        <div className="results-panel">
                            <h3>📊 Calculations</h3>
                            <div className="result-item">
                                <span className="result-label">Viscosity (η):</span>
                                <span className="result-value">{eta.toExponential(3)} Pa·s</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">Radius  (r):</span>
                                <span className="result-value">{radius.toFixed(4)} m</span>
                            </div>
                            <div className="result-item">
                                <span className="result-label">Velocity (v):</span>
                                <span className="result-value">{currentVelocity.current.toFixed(2)} m/s</span>
                            </div>
                            <div className="result-item highlight">
                                <span className="result-label">Drag Force (F):</span>
                                <span className="result-value">{dragForce.toExponential(3)} N</span>
                            </div>
                            <div className="formula-display">
                                <code>F = 6πηrv</code>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ViscousDragSim;
