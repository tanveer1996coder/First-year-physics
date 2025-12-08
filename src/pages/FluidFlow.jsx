import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import { getQuestionsByTopic } from '../data/questions';
import { getExamplesByTopic } from '../data/examples';
import QuestionCard from '../components/QuestionCard';
import ExampleCard from '../components/ExampleCard';
import './TopicPage.css';

const FluidFlow = () => {
    const topic = topics.find(t => t.id === 'fluid-flow');
    const questions = getQuestionsByTopic('fluid-flow');
    const examples = getExamplesByTopic('fluid-flow');
    const [activeTab, setActiveTab] = useState('simulation');
    const [flowType, setFlowType] = useState('streamline');
    const [velocity, setVelocity] = useState(1.5);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 400;

        if (particlesRef.current.length === 0) {
            for (let i = 0; i < 60; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: 0,
                    vy: 0
                });
            }
        }

        const animate = () => {
            ctx.fillStyle = flowType === 'streamline' ? 'rgba(59, 130, 246, 0.05)' : 'rgba(239, 68, 68, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((p, index) => {
                if (flowType === 'streamline') {
                    p.vx = velocity * 15;
                    p.vy = Math.sin(p.x / 60) * 1.5;
                } else {
                    p.vx = velocity * 15 + (Math.random() - 0.5) * 15;
                    p.vy = (Math.random() - 0.5) * 12;
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;
                if (p.y > canvas.height) p.y = Math.random() * canvas.height;
                if (p.y < 0) p.y = Math.random() * canvas.height;

                ctx.beginPath();
                ctx.arc(p.x, p.y, flowType === 'streamline' ? 4 : 3, 0, Math.PI * 2);
                ctx.fillStyle = flowType === 'streamline' ? '#3b82f6' : '#ef4444';
                ctx.globalAlpha = 0.7;
                ctx.fill();
                ctx.globalAlpha = 1;

                if (flowType === 'streamline' && index > 0) {
                    const prev = particlesRef.current[index - 1];
                    ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(prev.x, prev.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.stroke();
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [flowType, velocity]);

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
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                        <div>
                            <h2>Flow Visualization</h2>
                            <canvas ref={canvasRef} style={{ width: '100%', border: '2px solid var(--border)', borderRadius: '0.5rem', background: '#fff' }} />
                        </div>
                        <div className="card">
                            <h3>Controls</h3>
                            <div style={{ marginTop: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '1rem' }}>
                                    <span style={{ fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Flow Type</span>
                                    <select value={flowType} onChange={(e) => setFlowType(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid var(--border)' }}>
                                        <option value="streamline">Streamline (Laminar) Flow</option>
                                        <option value="turbulent">Turbulent Flow</option>
                                    </select>
                                </label>
                                <label style={{ display: 'block', marginTop: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 500 }}>Velocity</span>
                                        <span style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{velocity.toFixed(1)} m/s</span>
                                    </div>
                                    <input type="range" min="0.5" max="3" step="0.1" value={velocity} onChange={(e) => setVelocity(parseFloat(e.target.value))} style={{ width: '100%' }} />
                                </label>
                                <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.5rem' }}>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Current Flow:</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {flowType === 'streamline' ?
                                            '🌊 Smooth, predictable particle paths. Notice how particles follow ordered streamlines.' :
                                            '💨 Chaotic, irregular motion. Particles move unpredictably with eddies and vortices.'}
                                    </p>
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

                        <div className="card highlight-card">
                            <h3>🌊 Streamline (Laminar) Flow</h3>
                            <p className="key-concept">{topic.content.streamlineFlow.definition}</p>
                            <ul className="key-points-list">
                                {topic.content.streamlineFlow.characteristics.map((char, i) => (<li key={i}>{char}</li>))}
                            </ul>
                        </div>

                        <div className="card highlight-card">
                            <h3>💨 Turbulent Flow</h3>
                            <p className="key-concept">{topic.content.turbulentFlow.definition}</p>
                            <ul className="key-points-list">
                                {topic.content.turbulentFlow.characteristics.map((char, i) => (<li key={i}>{char}</li>))}
                            </ul>
                        </div>

                        <div className="card">
                            <h2>Ideal Fluid Conditions</h2>
                            <p>{topic.content.idealFluid.description}</p>
                            <ul className="key-points-list">
                                {topic.content.idealFluid.conditions.map((cond, i) => (<li key={i}>{cond}</li>))}
                            </ul>
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

export default FluidFlow;
