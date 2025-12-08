import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QuestionCard.css';

const QuestionCard = ({ question }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleAnswer = (index) => {
        setSelectedAnswer(index);
        setShowExplanation(true);
    };

    const isCorrect = selectedAnswer === question.correct;

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'basic': return '#10b981';
            case 'intermediate': return '#f59e0b';
            case 'advanced': return '#ef4444';
            default: return '#6366f1';
        }
    };

    return (
        <motion.div
            className="question-card card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
        >
            <div className="question-header">
                <span
                    className="difficulty-badge"
                    style={{ background: getDifficultyColor(question.difficulty) }}
                >
                    {question.difficulty}
                </span>
                <span className="question-type">{question.type}</span>
            </div>

            <h4 className="question-text">{question.question}</h4>

            {question.type === 'multiple-choice' && (
                <div className="options-list">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-button ${selectedAnswer === index
                                    ? index === question.correct
                                        ? 'correct'
                                        : 'incorrect'
                                    : ''
                                }`}
                            onClick={() => handleAnswer(index)}
                            disabled={selectedAnswer !== null}
                        >
                            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                            <span className="option-text">{option}</span>
                            {selectedAnswer !== null && index === question.correct && (
                                <span className="check-mark">✓</span>
                            )}
                            {selectedAnswer === index && index !== question.correct && (
                                <span className="cross-mark">✗</span>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {question.type === 'true-false' && (
                <div className="true-false-options">
                    <button
                        className={`tf-button ${selectedAnswer === true ? (question.correct === true ? 'correct' : 'incorrect') : ''}`}
                        onClick={() => { setSelectedAnswer(true); setShowExplanation(true); }}
                        disabled={selectedAnswer !== null}
                    >
                        True
                    </button>
                    <button
                        className={`tf-button ${selectedAnswer === false ? (question.correct === false ? 'correct' : 'incorrect') : ''}`}
                        onClick={() => { setSelectedAnswer(false); setShowExplanation(true); }}
                        disabled={selectedAnswer !== null}
                    >
                        False
                    </button>
                </div>
            )}

            {question.type === 'calculation' && (
                <div className="calculation-section">
                    <button
                        className="show-solution-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? '➖ Hide Solution' : '➕ Show Solution'}
                    </button>
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="solution-steps"
                            >
                                <div className="solution-item">
                                    <strong>Given:</strong> {question.solution.given}
                                </div>
                                <div className="solution-item">
                                    <strong>Formula:</strong> <code>{question.solution.formula}</code>
                                </div>
                                {question.solution.calculation && (
                                    <div className="solution-item">
                                        <strong>Calculation:</strong> <code>{question.solution.calculation}</code>
                                    </div>
                                )}
                                <div className="solution-item answer-highlight">
                                    <strong>Answer:</strong> {question.solution.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {question.type === 'conceptual' && (
                <div className="conceptual-section">
                    <button
                        className="show-solution-btn"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? '➖ Hide Answer' : '➕ Show Answer'}
                    </button>
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="conceptual-answer"
                            >
                                <p>{question.answer}</p>
                                {question.keyPoints && (
                                    <div className="key-points">
                                        <strong>Key Points:</strong>
                                        <ul>
                                            {question.keyPoints.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            <AnimatePresence>
                {showExplanation && selectedAnswer !== null && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={`explanation ${isCorrect ? 'correct-explanation' : 'incorrect-explanation'}`}
                    >
                        <h5>{isCorrect ? '✅ Correct!' : ' Incorrect'}</h5>
                        <p>{question.explanation}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {selectedAnswer !== null && (
                <button
                    className="try-again-btn"
                    onClick={() => {
                        setSelectedAnswer(null);
                        setShowExplanation(false);
                    }}
                >
                    🔄 Try Again
                </button>
            )}
        </motion.div>
    );
};

export default QuestionCard;
