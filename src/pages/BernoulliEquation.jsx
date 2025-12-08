import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import { getQuestionsByTopic } from '../data/questions';
import { getExamplesByTopic } from '../data/examples';
import QuestionCard from '../components/QuestionCard';
import ExampleCard from '../components/ExampleCard';
import './TopicPage.css';

const BernoulliEquation = () => {
    const topic = topics.find(t => t.id === 'bernoulli-equation');
    const questions = getQuestionsByTopic('bernoulli-equation');
    const examples = getExamplesByTopic('bernoulli-equation');
    const [activeTab, setActiveTab] = useState('simulation');
    const [waterHeight, setWaterHeight] = useState(8);
    const [isRunning, setIsRunning] = useState(false);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const currentHeight = useRef(waterHeight);
    const waterParticles = useRef([]);

    const g = 9.8;
    const effluxVelocity = Math.sqrt(2 * g * currentHeight.current);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 400;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw tank
            const tankX = 100;
            const tankY = 50;
            const tankWidth = 150;
            const maxHeight = 300;
            const currentWaterHeight = (currentHeight.current / 10) * maxHeight;

            ctx.fillStyle = '#f0f9ff';
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 3;
            ctx.strokeRect(tankX, tankY, tankWidth, maxHeight);

            // Draw water
            ctx.fillStyle = '#3b82f6';
            ctx.fillRect(tankX, tankY + (maxHeight - currentWaterHeight), tankWidth, currentWaterHeight);

            // Draw water level line
            ctx.strokeStyle = '#1e40af';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(tankX, tankY + (maxHeight - currentWaterHeight));
            ctx.lineTo(tankX + tankWidth, tankY + (maxHeight - currentWaterHeight));
            ctx.stroke();
            ctx.setLineDash([]);

            // Height label
            ctx.fillStyle = '#1e40af';
            ctx.font = 'bold 14px Inter';
            ctx.fillText(`h = ${currentHeight.current.toFixed(1)} m`, tankX + tankWidth + 20, tankY + (maxHeight - currentWaterHeight));

            // Draw orifice
            const orificeY = tankY + maxHeight - 20;
            ctx.fillStyle = '#ef4444';
            ctx.fillRect(tankX + tankWidth, orificeY, 3, 20);

            // Calculate and display efflux velocity
            const v = Math.sqrt(2 * g * currentHeight.current);
            ctx.fillStyle = '#22c55e';
            ctx.font = 'bold 12px Inter';
            ctx.fillText(`v = ${v.toFixed(2)} m/s`, tankX + tankWidth + 50, orificeY + 100);

            // Water stream
            if (isRunning && currentHeight.current > 0.5) {
                // Add new particles
                if (Math.random() < 0.3) {
                    waterParticles.current.push({
                        x: tankX + tankWidth + 3,
                        y: orificeY + 10,
                        vx: v * 30,
                        vy: 0
                    });
                }

                // Update and draw particles
                waterParticles.current = waterParticles.current.filter(p => {
                    p.vy += 0.5; // gravity
                    p.x += p.vx;
                    p.y += p.vy;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = '#3b82f6';
                    ctx.fill();

                    return p.x < canvas.width && p.y < canvas.height;
                });

                // Decrease water level slowly
                currentHeight.current = Math.max(0, currentHeight.current - 0.005);
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isRunning]);

    return (
        <div className="topic-page">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="topic-header">
                    <span className="topic-icon-large">{topic.icon}</span>
                    <div>
                        <h1>{topic.title}</h1>
                        <p className="topic-section-label">Section {topic.section}</p>
                    </div>
                </div>
            </motion.div>

            <div className="topic-tabs">
                <button className={`tab ${activeTab === 'simulation' ? 'active' : ''}`} onClick={() => setActiveTab('simulation')}>
                    🧪 Interactive Simulation
                </button>
                <button className={`tab ${activeTab === 'theory' ? 'active' : ''}`} onClick={() => setActiveTab('theory')}>
                    📚 Theory & Concepts
                </button>
                <button className={`tab ${activeTab === 'examples' ? 'active' : ''}`} onClick={() => setActiveTab('examples')}>
                    🌍 Real-Life Examples
                </button>
                <button className={`tab ${activeTab === 'questions' ? 'active' : ''}`} onClick={() => setActiveTab('questions')}>
                    ❓ Practice Questions
                </button>
            </div>

            {activeTab === 'simulation' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-content">
                    <h2>Torricelli's Theorem - Water Tank Drainage</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Watch how water exits the tank with velocity: v = √(2gh)</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                        <div>
                            <canvas ref={canvasRef} style={{ width: '100%', border: '2px solid var(--border)', borderRadius: '0.5rem', background: '#fff' }} />
                            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                <button onClick={() => setIsRunning(!isRunning)} style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', background: isRunning ? '#f59e0b' : '#10b981', color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                                    {isRunning ? '⏸ Pause' : '▶ Start'}
                                </button>
                                <button onClick={() => { currentHeight.current = waterHeight; waterParticles.current = []; setIsRunning(false); }} style={{ padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', background: '#6366f1', color: 'white', fontWeight: 500, cursor: 'pointer' }}>
                                    🔄 Reset
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <h3>Controls</h3>
                            <div style={{ marginTop: '1.5rem' }}>
                                <label style={{ display: 'block' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 500 }}>Water Height (h)</span>
                                        <span style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{waterHeight.toFixed(1)} m</span>
                                    </div>
                                    <input type="range" min="1" max="10" step="0.5" value={waterHeight} onChange={(e) => { setWaterHeight(parseFloat(e.target.value)); currentHeight.current = parseFloat(e.target.value); }} style={{ width: '100%' }} />
                                </label>
                                <div style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.5rem', marginTop: '1.5rem' }}>
                                    <h4 style={{ marginBottom: '0.75rem' }}>Calculations</h4>
                                    <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                                        <div><strong>Gravity (g):</strong> {g} m/s²</div>
                                        <div><strong>Height (h):</strong> {currentHeight.current.toFixed(2)} m</div>
                                        <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'white', borderRadius: '0.25rem' }}>
                                            <strong>Efflux Velocity (v):</strong> {effluxVelocity.toFixed(2)} m/s
                                        </div>
                                        <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                            <code style={{ display: 'block', textAlign: 'center', padding: '0.5rem', background: 'rgba(0,0,0,0.05)', borderRadius: '0.25rem' }}>
                                                v = √(2gh)
                                            </code>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        💡 Notice: Greater height = Greater exit velocity
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'theory' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-content">
                    <div className="theory-content">
                        <div className="card">
                            <h2>Introduction</h2>
                            <p>{topic.content.introduction}</p>
                        </div>

                        <div className="card">
                            <h2>Derivation of Bernoulli's Equation</h2>
                            <p>{topic.content.derivation.description}</p>
                            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.5rem' }}>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{topic.content.derivation.workUpper}</p>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{topic.content.derivation.workLower}</p>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{topic.content.derivation.netWork}</p>
                            </div>
                            <p style={{ marginTop: '1rem' }}>{topic.content.derivation.explanation}</p>
                        </div>

                        <div className="card">
                            <h2>Energy Consideration</h2>
                            <p>{topic.content.energyConsideration.description}</p>
                            <div className="formula-display" style={{ marginTop: '1rem' }}>
                                <code>{topic.content.energyConsideration.kineticEnergy}</code>
                            </div>
                            <div className="formula-display" style={{ marginTop: '0.5rem' }}>
                                <code>{topic.content.energyConsideration.potentialEnergy}</code>
                            </div>
                            <p style={{ marginTop: '1rem' }}>{topic.content.energyConsideration.conservation}</p>
                        </div>

                        <div className="card highlight-card">
                            <h2>🌊 Bernoulli's Equation</h2>
                            <p className="key-concept">{topic.content.finalEquation.note}</p>
                            <div className="formula-card" style={{ marginTop: '1rem' }}>
                                <div className="formula-large">{topic.content.finalEquation.standard}</div>
                                <p style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1.2rem', color: 'var(--primary)' }}>
                                    {topic.content.finalEquation.general}
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <h2>{topic.content.speedPressureRelation.title}</h2>
                            <p>{topic.content.speedPressureRelation.description}</p>
                            <div className="formula-display" style={{ marginTop: '1rem' }}>
                                <code>{topic.content.speedPressureRelation.equation}</code>
                            </div>
                            <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.5rem' }}>
                                <p style={{ color: 'var(--text-secondary)' }}>{topic.content.speedPressureRelation.example}</p>
                            </div>
                            <p style={{ marginTop: '1rem' }}>{topic.content.speedPressureRelation.conclusion}</p>
                            <div className="highlight-box" style={{ marginTop: '1rem', padding: '1rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))', borderRadius: '0.5rem', borderLeft: '4px solid var(--primary)' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{topic.content.keyPrinciple.statement}</p>
                            </div>
                        </div>

                        <div className="card">
                            <h2>✈️ Applications of Bernoulli's Principle</h2>
                            <ul className="key-points-list">
                                {topic.content.keyPrinciple.applications.map((app, index) => (<li key={index}>{app}</li>))}
                            </ul>
                        </div>

                        <div className="card highlight-card">
                            <h2>💧 {topic.applications.torriciellisTheorem.title}</h2>
                            <p>{topic.applications.torriciellisTheorem.description}</p>
                            <div className="formula-display" style={{ marginTop: '1rem' }}>
                                <code>{topic.applications.torriciellisTheorem.equation}</code>
                            </div>
                            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>{topic.applications.torriciellisTheorem.atmosphericPressure}</p>
                            <p style={{ marginTop: '0.5rem' }}>{topic.applications.torriciellisTheorem.simplified}</p>
                            <div className="formula-card" style={{ marginTop: '1rem' }}>
                                <div className="formula-large">{topic.applications.torriciellisTheorem.finalFormula}</div>
                            </div>
                            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{topic.applications.torriciellisTheorem.statement}</p>
                            <div className="highlight-box" style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '0.5rem', borderLeft: '4px solid #22c55e' }}>
                                <p style={{ fontWeight: '500' }}>{topic.applications.torriciellisTheorem.theorem}</p>
                            </div>
                            <p style={{ marginTop: '1rem' }}>{topic.applications.torriciellisTheorem.observation}</p>
                            <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{topic.applications.practicalNote}</p>
                        </div>

                        <div className="card">
                            <h2>🎯 Key Points</h2>
                            <ul className="key-points-list">
                                {topic.keyPoints.map((point, index) => (<li key={index}>{point}</li>))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}

            {activeTab === 'examples' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-content">
                    <div className="examples-grid">
                        {examples.map(example => (<ExampleCard key={example.id} example={example} />))}
                    </div>
                </motion.div>
            )}

            {activeTab === 'questions' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tab-content">
                    <div className="questions-list">
                        {questions.map(question => (<QuestionCard key={question.id} question={question} />))}
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default BernoulliEquation;
