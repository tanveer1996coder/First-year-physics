import { useState, useEffect, useRef } from 'react';

const TerminalVelocitySimulation = ({ topic }) => {
    const [radius, setRadius] = useState(0.0001); //  meters (0.1mm)
    const [isPlaying, setIsPlaying] = useState(false);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const [dropletY, setDropletY] = useState(50);
    const [velocity, setVelocity] = useState(0);

    const eta = 19e-6; // Air viscosity
    const rho = 1000; // Water density
    const g = 9.8;

    // Calculate terminal velocity
    const terminalVel = (2 * g * radius * radius * rho) / (9 * eta);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = 500;

        let y = dropletY;
        let v = velocity;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            //  Background gradient
            const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            bgGradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
            bgGradient.addColorStop(1, 'rgba(99, 102, 241, 0.1)');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw droplet
            const dropletRadius = Math.max(10, Math.min(30, radius * 100000));
            ctx.beginPath();
            ctx.arc(canvas.width / 2, y, dropletRadius, 0, Math.PI * 2);
            const dropletGrad = ctx.createRadialGradient(canvas.width / 2, y, 0, canvas.width / 2, y, dropletRadius);
            dropletGrad.addColorStop(0, '#60a5fa');
            dropletGrad.addColorStop(1, '#3b82f6');
            ctx.fillStyle = dropletGrad;
            ctx.fill();

            // Draw forces
            const weightArrow = Math.min(100, 50);
            const dragArrow = Math.min(100, (v / terminalVel) * 50);

            // Weight (down)
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, y);
            ctx.lineTo(canvas.width / 2, y + weightArrow);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 12px Inter';
            ctx.fillText('Weight', canvas.width / 2 + 15, y + 40);

            // Drag (up)
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, y);
            ctx.lineTo(canvas.width / 2, y - dragArrow);
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.fillStyle = '#10b981';
            ctx.fillText('Drag', canvas.width / 2 + 15, y - 30);

            // Velocity indicator
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 14px Inter';
            ctx.fillText(`Velocity: ${v.toFixed(3)} m/s`, 20, 30);
            ctx.fillText(`Terminal: ${terminalVel.toFixed(3)} m/s`, 20, 50);
            ctx.fillText(`Progress: ${((v / terminalVel) * 100).toFixed(1)}%`, 20, 70);

            if (isPlaying) {
                // Update physics
                const drag = 6 * Math.PI * eta * radius * v;
                const mass = (4 / 3) * Math.PI * Math.pow(radius, 3) * rho;
                const weight = mass * g;
                const netForce = weight - drag;
                const acceleration = netForce / mass;

                v += acceleration * 0.016;
                y += v * 2;

                if (y > canvas.height - dropletRadius) {
                    y = 50;
                    v = 0;
                }
            }

            setDropletY(y);
            setVelocity(v);

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [radius, isPlaying, dropletY, velocity, terminalVel]);

    return (
        <div className="simulation-grid">
            <div className="simulation-canvas-container card">
                <h3>Terminal Velocity Visualization</h3>
                <p className="text-secondary">Watch a water droplet accelerate until drag force equals weight</p>
                <canvas ref={canvasRef} className="simulation-canvas"></canvas>
                <div className="simulation-controls">
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                    </button>
                    <button onClick={() => { setDropletY(50); setVelocity(0); }}>
                        🔄 Reset
                    </button>
                </div>
            </div>

            <div className="simulation-controls-panel card">
                <h3>Parameters</h3>

                <div className="control-group">
                    <label>
                        <span>Droplet Radius</span>
                        <span className="value-display">{(radius * 1000000).toFixed(1)} μm</span>
                    </label>
                    <input type="range" min="0.00001" max="0.0005" step="0.00001"
                        value={radius} onChange={(e) => setRadius(parseFloat(e.target.value))} />
                </div>

                <div className="results-panel">
                    <h4>Calculated Results</h4>
                    <div className="result-item">
                        <span>Terminal Velocity:</span>
                        <span className="gradient-text">{terminalVel.toFixed(4)} m/s</span>
                    </div>
                    <div className="result-item">
                        <span>Current Velocity:</span>
                        <span className="gradient-text">{velocity.toFixed(4)} m/s</span>
                    </div>
                    <div className="result-item">
                        <span>% of Terminal:</span>
                        <span className="gradient-text">{((velocity / terminalVel) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="formula-display">
                        <code>v_t = (2gr²ρ)/(9η)</code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalVelocitySimulation;
