import { useState } from 'react';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import { getQuestionsByTopic } from '../data/questions';
import { getExamplesByTopic } from '../data/examples';
import QuestionCard from '../components/QuestionCard';
import ExampleCard from '../components/ExampleCard';
import TerminalVelocitySimulation from '../components/TerminalVelocitySimulation';
import './TopicPage.css';

const TerminalVelocity = () => {
    const topic = topics.find(t => t.id === 'terminal-velocity');
    const questions = getQuestionsByTopic('terminal-velocity');
    const examples = getExamplesByTopic('terminal-velocity');
    const [activeTab, setActiveTab] = useState('simulation');

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
                    <TerminalVelocitySimulation topic={topic} />
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
                            <h3>💡 Key Concept</h3>
                            <p className="key-concept">{topic.content.mainConcept}</p>
                        </div>

                        <div className="card">
                            <h2>Terminal Velocity Formula</h2>
                            <p>{topic.content.terminalVelocity.description}</p>
                            <div className="formula-card">
                                <div className="formula-large">{topic.content.terminalVelocity.formula}</div>
                                <div className="formula-large">{topic.content.terminalVelocity.alternateForm}</div>
                                <div className="variables-list">
                                    <h4>Where:</h4>
                                    {Object.entries(topic.content.terminalVelocity.variables).map(([symbol, description]) => (
                                        <div key={symbol} className="variable-item">
                                            <span className="variable-symbol">{symbol}</span>
                                            <span className="variable-desc">{description}</span>
                                        </div>
                                    ))}
                                </div>
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

export default TerminalVelocity;
