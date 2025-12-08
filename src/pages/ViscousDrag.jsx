import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import { getQuestionsByTopic } from '../data/questions';
import { getExamplesByTopic } from '../data/examples';
import QuestionCard from '../components/QuestionCard';
import ExampleCard from '../components/ExampleCard';
import './TopicPage.css';

const ViscousDrag = () => {
    const topic = topics.find(t => t.id === 'viscous-drag');
    const questions = getQuestionsByTopic('viscous-drag');
    const examples = getExamplesByTopic('viscous-drag');

    // Simulation state
    const [radius, setRadius] = useState(0.01); // meters
    const [velocity, setVelocity] = useState(1.0); // m/s
    const [fluidType, setFluidType] = useState('Water');
    const [isPlaying, setIsPlaying] = useState(false);

    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    // Get viscosity from topic data
    const getViscosity = (fluid) => {
        const fluidData = topic.content.viscosityTable.find(f => f.material === fluid);
        return fluidData ? parseFloat(fluidData.viscosity) * 1e-3 : 0.801e-3;
    };

    // Calculate drag force using Stokes' Law
    const calculateDragForce = () => {
        const eta = getViscosity(fluidType);
        const F = 6 * Math.PI * eta * radius * velocity;
        return F;
    };

    const dragForce = calculateDragForce();

    // Canvas animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = 400;

        let sphereX = 50;
        let sphereY = canvas.height / 2;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw fluid background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0, 'rgba(99, 102, 241, 0.1)');
            gradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw flow lines
            ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
            ctx.lineWidth = 2;
            for (let y = 50; y < canvas.height; y += 50) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Draw sphere
            const sphereRadius = Math.max(20, Math.min(60, radius * 3000));
            ctx.beginPath();
            ctx.arc(sphereX, sphereY, sphereRadius, 0, Math.PI * 2);
            ctx.fillStyle = '#ec4899';
            ctx.fill();
            ctx.strokeStyle = '#f472b6';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Draw drag force arrow
            const arrowLength = Math.min(dragForce * 50000, 150);
            ctx.beginPath();
            ctx.moveTo(sphereX + sphereRadius, sphereY);
            ctx.lineTo(sphereX + sphereRadius + arrowLength, sphereY);
            ctx.strokeStyle = '#14b8a6';
            ctx.lineWidth = 4;
            ctx.stroke();

            // Arrow head
            ctx.beginPath();
            ctx.moveTo(sphereX + sphereRadius + arrowLength, sphereY);
            ctx.lineTo(sphereX + sphereRadius + arrowLength - 10, sphereY - 7);
            ctx.lineTo(sphereX + sphereRadius + arrowLength - 10, sphereY + 7);
            ctx.closePath();
            ctx.fillStyle = '#14b8a6';
            ctx.fill();

            // Label
            ctx.fillStyle = '#14b8a6';
            ctx.font = 'bold 14px Inter';
            ctx.fillText('F_drag', sphereX + sphereRadius + arrowLength / 2 - 20, sphereY - 15);

            // Move sphere if playing
            if (isPlaying) {
                sphereX += velocity * 20;
                if (sphereX > canvas.width + sphereRadius) {
                    sphereX = -sphereRadius;
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [radius, velocity, fluidType, isPlaying, dragForce]);

    const [activeTab, setActiveTab] = useState('simulation');

    return (
        <div className="topic-page">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="topic-header">
                    <span className="topic-icon-large">{topic.icon}</span>
                    <div>
                        <h1>{topic.title}</h1>
                        <p className="topic-section-label">Section {topic.section}</p>
                    </div>
                </div>
            </motion.div>

            <div className="topic-tabs">
                <button
                    className={`tab ${activeTab === 'simulation' ? 'active' : ''}`}
                    onClick={() => setActiveTab('simulation')}
                >
                    🧪 Interactive Simulation
                </button>
                <button
                    className={`tab ${activeTab === 'theory' ? 'active' : ''}`}
                    onClick={() => setActiveTab('theory')}
                >
                    📚 Theory & Concepts
                </button>
                <button
                    className={`tab ${activeTab === 'examples' ? 'active' : ''}`}
                    onClick={() => setActiveTab('examples')}
                >
                    🌍 Real-Life Examples
                </button>
                <button
                    className={`tab ${activeTab === 'questions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('questions')}
                >
                    ❓ Practice Questions
                </button>
            </div>

            {/* SIMULATION TAB */}
            {activeTab === 'simulation' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="tab-content"
                >
                    <div className="simulation-grid">
                        <div className="simulation-canvas-container card">
                            <h3>Stokes' Law Visualization</h3>
                            <canvas ref={canvasRef} className="simulation-canvas"></canvas>
                            <div className="simulation-controls">
                                <button onClick={() => setIsPlaying(!isPlaying)}>
                                    {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                                </button>
                            </div>
                        </div>

                        <div className="simulation-controls-panel card">
                            <h3>Parameters</h3>

                            <div className="control-group">
                                <label>
                                    <span>Fluid Type</span>
                                    <span className="value-display">{fluidType}</span>
                                </label>
                                <select
                                    value={fluidType}
                                    onChange={(e) => setFluidType(e.target.value)}
                                >
                                    {topic.content.viscosityTable.map(fluid => (
                                        <option key={fluid.material} value={fluid.material}>
                                            {fluid.material} (η = {fluid.viscosity})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="control-group">
                                <label>
                                    <span>Sphere Radius</span>
                                    <span className="value-display">{(radius * 1000).toFixed(1)} mm</span>
                                </label>
                                <input
                                    type="range"
                                    min="0.001"
                                    max="0.05"
                                    step="0.001"
                                    value={radius}
                                    onChange={(e) => setRadius(parseFloat(e.target.value))}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <span>Velocity</span>
                                    <span className="value-display">{velocity.toFixed(2)} m/s</span>
                                </label>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="5"
                                    step="0.1"
                                    value={velocity}
                                    onChange={(e) => setVelocity(parseFloat(e.target.value))}
                                />
                            </div>

                            <div className="results-panel">
                                <h4>Calculated Results</h4>
                                <div className="result-item">
                                    <span>Viscosity (η):</span>
                                    <span className="gradient-text">{(getViscosity(fluidType) * 1000).toFixed(3)} × 10⁻³ Pa·s</span>
                                </div>
                                <div className="result-item">
                                    <span>Drag Force:</span>
                                    <span className="gradient-text">{dragForce.toExponential(3)} N</span>
                                </div>
                                <div className="formula-display">
                                    <code>F = 6πηrv</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* THEORY TAB */}
            {activeTab === 'theory' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="tab-content"
                >
                    <div className="theory-content">
                        <div className="card">
                            <h2>Introduction</h2>
                            <p>{topic.content.introduction}</p>
                        </div>

                        <div className="card highlight-card">
                            <h3>💡 Key Concept</h3>
                            <p className="key-concept">{topic.content.mainConcept}</p>
                        </div>

                        <div className="card">
                            <h2>Stokes' Law</h2>
                            <p>{topic.content.stokesLaw.description}</p>
                            <div className="formula-card">
                                <div className="formula-large">{topic.content.stokesLaw.formula}</div>
                                <div className="variables-list">
                                    <h4>Where:</h4>
                                    {Object.entries(topic.content.stokesLaw.variables).map(([symbol, description]) => (
                                        <div key={symbol} className="variable-item">
                                            <span className="variable-symbol">{symbol}</span>
                                            <span className="variable-desc">{description}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="note"><strong>Note:</strong> {topic.content.stokesLaw.note}</p>
                        </div>

                        <div className="card">
                            <h2>📋 Viscosity of Common Substances</h2>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Material</th>
                                            <th>Viscosity (η)</th>
                                            <th>Unit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topic.content.viscosityTable.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.material}</td>
                                                <td>{item.viscosity}</td>
                                                <td>{item.unit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="card">
                            <h2>🎯 Key Points</h2>
                            <ul className="key-points-list">
                                {topic.keyPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* EXAMPLES TAB */}
            {activeTab === 'examples' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="tab-content"
                >
                    <div className="examples-grid">
                        {examples.map(example => (
                            <ExampleCard key={example.id} example={example} />
                        ))}
                    </div>
                </motion.div>
            )}

            {/* QUESTIONS TAB */}
            {activeTab === 'questions' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="tab-content"
                >
                    <div className="questions-list">
                        {questions.map(question => (
                            <QuestionCard key={question.id} question={question} />
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ViscousDrag;
