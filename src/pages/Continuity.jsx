import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import { getQuestionsByTopic } from '../data/questions';
import { getExamplesByTopic } from '../data/examples';
import QuestionCard from '../components/QuestionCard';
import ExampleCard from '../components/ExampleCard';
import './TopicPage.css';

const Continuity = () => {
    const topic = topics.find(t => t.id === 'equation-of-continuity');
    const questions = getQuestionsByTopic('equation-of-continuity');
    const examples = getExamplesByTopic('equation-of-continuity');
    const [activeTab, setActiveTab] = useState('simulation');
    const [area1, setArea1] = useState(20);
    const [velocity1, setVelocity1] = useState(2);
    const canvasRef = useRef(null);
    const animationRef = useRef(null);

    const area2 = 10;
    const velocity2 = (area1 * velocity1) / area2;
    const flowRate = area1 * velocity1;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 400;

        const particles1 = [];
        const particles2 = [];
        for (let i = 0; i < 30; i++) {
            particles1.push({ y: Math.random() * 80 + 160, progress: Math.random() });
            particles2.push({ y: Math.random() * 40 + 180, progress: Math.random() });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw pipe sections
            // Wider section
            ctx.fillStyle = '#dbeafe';
            ctx.fillRect(0, 150, 250, 100);
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 3;
            ctx.strokeRect(0, 150, 250, 100);

            // Narrower section
            ctx.fillStyle = '#fee2e2';
            ctx.fillRect(350, 170, 250, 60);
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 3;
            ctx.strokeRect(350, 170, 250, 60);

            // Transition
            ctx.fillStyle = '#f3f4f6';
            ctx.beginPath();
            ctx.moveTo(250, 150);
            ctx.lineTo(350, 170);
            ctx.lineTo(350, 230);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Labels
            ctx.fillStyle = '#1e40af';
            ctx.font = 'bold 14px Inter';
            ctx.fillText(`A₁ = ${area1} cm²`, 80, 140);
            ctx.fillText(`v₁ = ${velocity1.toFixed(1)} m/s`, 80, 270);

            ctx.fillStyle = '#991b1b';
            ctx.fillText(`A₂ = ${area2} cm²`, 420, 160);
            ctx.fillText(`v₂ = ${velocity2.toFixed(1)} m/s`, 420, 250);

            // Animate particles
            particles1.forEach(p => {
                p.progress += velocity1 / 100;
                if (p.progress > 1) p.progress = 0;
                const x = p.progress * 250;
                ctx.beginPath();
                ctx.arc(x, p.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#3b82f6';
                ctx.fill();
            });

            particles2.forEach(p => {
                p.progress += velocity2 / 100;
                if (p.progress > 1) p.progress = 0;
                const x = 350 + p.progress * 250;
                ctx.beginPath();
                ctx.arc(x, p.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = '#ef4444';
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [area1, velocity1, area2, velocity2]);

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
                    <h2>Pipe Flow Visualization</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Watch how fluid velocity changes as the pipe narrows. Notice: A₁v₁ = A₂v₂</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                        <div>
                            <canvas ref={canvasRef} style={{ width: '100%', border: '2px solid var(--border)', borderRadius: '0.5rem', background: '#fff' }} />
                        </div>
                        <div className="card">
                            <h3>Controls</h3>
                            <div style={{ marginTop: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 500 }}>Area 1 (A₁)</span>
                                        <span style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{area1} cm²</span>
                                    </div>
                                    <input type="range" min="10" max="30" step="1" value={area1} onChange={(e) => setArea1(parseFloat(e.target.value))} style={{ width: '100%' }} />
                                </label>
                                <label style={{ display: 'block', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: 500 }}>Velocity 1 (v₁)</span>
                                        <span style={{ color: 'var(--primary)', fontFamily: 'monospace' }}>{velocity1.toFixed(1)} m/s</span>
                                    </div>
                                    <input type="range" min="0.5" max="4" step="0.1" value={velocity1} onChange={(e) => setVelocity1(parseFloat(e.target.value))} style={{ width: '100%' }} />
                                </label>
                                <div style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '0.5rem', marginTop: '1rem' }}>
                                    <h4 style={{ marginBottom: '0.75rem' }}>Calculations</h4>
                                    <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                                        <div><strong>Area 2:</strong> {area2} cm² (fixed)</div>
                                        <div><strong>Velocity 2:</strong> {velocity2.toFixed(2)} m/s</div>
                                        <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'white', borderRadius: '0.25rem' }}>
                                            <strong>Flow Rate:</strong> {flowRate.toFixed(1)} cm³/s
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        💡 Notice: As the pipe narrows (A decreases), velocity increases to maintain constant flow rate!
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

                        <div className="card highlight-card">
                            <h3>💧 Equation of Continuity Derivation</h3>
                            <p>{topic.content.derivation.description}</p>

                            <div className="derivation-steps">
                                <div className="step">
                                    <p><strong>Step 1:</strong> {topic.content.derivation.step1}</p>
                                </div>
                                <div className="step">
                                    <p><strong>Step 2:</strong> {topic.content.derivation.step2}</p>
                                    <div className="formula-box">{topic.content.derivation.step3}</div>
                                </div>
                                <div className="step">
                                    <p>{topic.content.derivation.conservation}</p>
                                    <div className="formula-box">{topic.content.derivation.equation1}</div>
                                    <div className="formula-box">{topic.content.derivation.equation2}</div>
                                </div>
                            </div>

                            <p className="key-concept">{topic.content.derivation.finalForm}</p>
                            <div className="formula-card">
                                <div className="formula-large">{topic.content.derivation.continuityEquation}</div>
                            </div>
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

export default Continuity;
