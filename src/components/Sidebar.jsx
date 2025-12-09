import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import './Sidebar.css';

const Sidebar = ({ darkMode, setDarkMode }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);

    const navItems = [
        { path: '/', label: 'Dashboard', icon: '🏠' },
        ...topics.map(topic => ({
            path: `/${topic.id}`,
            label: topic.title,
            icon: topic.icon
        }))
    ];

    return (
        <>
            <button
                className="mobile-toggle"
                onClick={toggleSidebar}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={closeSidebar}
                />
            )}

            <motion.aside
                className={`sidebar glass ${isOpen ? 'open' : ''}`}
            >
                <div className="sidebar-header">
                    <div className="header-top">
                        <h2 className="gradient-text">⚛️ Physics Lab</h2>
                        <button
                            className="close-sidebar"
                            onClick={closeSidebar}
                            aria-label="Close navigation"
                        >
                            ✕
                        </button>
                    </div>
                    <p className="sidebar-subtitle">Fluid Mechanics Interactive</p>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={item.path}
                                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={closeSidebar}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button
                        className="theme-toggle"
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? '☀️' : '🌙'} {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <p className="footer-text">Made with ❤️ for learning</p>
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;
