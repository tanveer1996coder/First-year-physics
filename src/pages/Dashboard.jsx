import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="page-title">
                    Welcome to <span className="gradient-text">Physics Lab</span>
                </h1>
                <p className="page-subtitle">
                    Master Fluid Mechanics through interactive simulations and real-world applications
                </p>
            </motion.div>

            <div className="topics-grid">
                {topics.map((topic, index) => (
                    <motion.div
                        key={topic.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <Link to={`/${topic.id}`} className="topic-card card">
                            <div className="topic-icon animate-float">{topic.icon}</div>
                            <div className="topic-header">
                                <span className="topic-section">Section {topic.section}</span>
                                <h3>{topic.title}</h3>
                            </div>
                            <p className="topic-description">{topic.description}</p>
                            <div className="topic-footer">
                                <span className="topic-link">Explore →</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="info-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div className="info-card card">
                    <h2>📚 What You'll Learn</h2>
                    <ul className="feature-list">
                        <li>✨ Interactive simulations for each physics concept</li>
                        <li>🧪 Real-world examples and applications</li>
                        <li>📝 Practice questions with detailed explanations</li>
                        <li>💡 Conceptual understanding through visualization</li>
                        <li>🎯 Progressive difficulty levels</li>
                    </ul>
                </div>

                <div className="info-card card">
                    <h2>🚀 How to Use</h2>
                    <ol className="steps-list">
                        <li>Select a topic from the sidebar or cards above</li>
                        <li>Read the theory and key concepts</li>
                        <li>Interact with the simulations by adjusting parameters</li>
                        <li>Explore real-life examples to deepen understanding</li>
                        <li>Test your knowledge with practice questions</li>
                    </ol>
                </div>
            </motion.div>

            <motion.div
                className="stats-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="stat-card card">
                    <div className="stat-number gradient-text">{topics.length}</div>
                    <div className="stat-label">Topics Covered</div>
                </div>
                <div className="stat-card card">
                    <div className="stat-number gradient-text">30+</div>
                    <div className="stat-label">Practice Questions</div>
                </div>
                <div className="stat-card card">
                    <div className="stat-number gradient-text">20+</div>
                    <div className="stat-label">Real-Life Examples</div>
                </div>
                <div className="stat-card card">
                    <div className="stat-number gradient-text">{topics.length}</div>
                    <div className="stat-label">Interactive Simulations</div>
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;

