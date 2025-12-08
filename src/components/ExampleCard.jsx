import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ExampleCard.css';

const ExampleCard = ({ example }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="example-card card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
        >
            <div className="example-header">
                <h3>{example.title}</h3>
                <span className="example-category">{example.category}</span>
            </div>

            <p className="example-description">{example.description}</p>

            <div className="example-physics">
                <strong>🔬 Physics Explanation:</strong>
                <p>{example.physics}</p>
            </div>

            {example.didYouKnow && (
                <div className="did-you-know">
                    <strong>💡 Did You Know?</strong>
                    <p>{example.didYouKnow}</p>
                </div>
            )}

            <button
                className="expand-btn"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? '➖ Show Less' : '➕ Show More Details'}
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="example-details"
                    >
                        {example.formula && (
                            <div className="detail-section">
                                <strong>Formula:</strong>
                                <code>{example.formula}</code>
                            </div>
                        )}

                        {example.calculation && (
                            <div className="detail-section">
                                <strong>Calculation:</strong>
                                <p>{example.calculation}</p>
                            </div>
                        )}

                        {example.comparison && typeof example.comparison === 'object' && (
                            <div className="detail-section">
                                <strong>Comparison:</strong>
                                <ul className="comparison-list">
                                    {Object.entries(example.comparison).map(([key, value]) => (
                                        <li key={key}>
                                            <strong>{key}:</strong> {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {example.comparison && typeof example.comparison === 'string' && (
                            <div className="detail-section">
                                <strong>Comparison:</strong>
                                <p>{example.comparison}</p>
                            </div>
                        )}

                        {example.observation && (
                            <div className="detail-section">
                                <strong>Observation:</strong>
                                {Array.isArray(example.observation) ? (
                                    <ul>
                                        {example.observation.map((obs, idx) => (
                                            <li key={idx}>{obs}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{example.observation}</p>
                                )}
                            </div>
                        )}

                        {example.experiment && (
                            <div className="detail-section highlight-section">
                                <strong>🧪 Try This Experiment:</strong>
                                {Array.isArray(example.experiment) ? (
                                    <ol>
                                        {example.experiment.map((step, idx) => (
                                            <li key={idx}>{step}</li>
                                        ))}
                                    </ol>
                                ) : (
                                    <p>{example.experiment}</p>
                                )}
                            </div>
                        )}

                        {example.application && (
                            <div className="detail-section">
                                <strong>Application:</strong>
                                <p>{example.application}</p>
                            </div>
                        )}

                        {example.examples && (
                            <div className="detail-section">
                                <strong>Examples:</strong>
                                <ul>
                                    {example.examples.map((ex, idx) => (
                                        <li key={idx}>{ex}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {example.numbers && typeof example.numbers === 'object' && (
                            <div className="detail-section numbers-section">
                                <strong>📊 By the Numbers:</strong>
                                <ul className="numbers-list">
                                    {Object.entries(example.numbers).map(([key, value]) => (
                                        <li key={key}>
                                            <span className="number-label">{key}:</span>
                                            <span className="number-value">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {example.numbers && typeof example.numbers === 'string' && (
                            <div className="detail-section numbers-section">
                                <strong>📊 By the Numbers:</strong>
                                <p>{example.numbers}</p>
                            </div>
                        )}

                        {example.principle && (
                            <div className="detail-section principle-section">
                                <strong>⚡ Core Principle:</strong>
                                <p>{example.principle}</p>
                            </div>
                        )}

                        {example.curiosity && (
                            <div className="curiosity-box">
                                <strong>🤔 Curious Fact:</strong>
                                <p>{example.curiosity}</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ExampleCard;
