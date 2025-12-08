import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import topics from '../data/topics';
import './Sidebar.css';

const Sidebar = ({ darkMode, setDarkMode }) => {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Dashboard', icon: '🏠' },
        ...topics.map(topic => ({
            path: `/${topic.id}`,
            label: topic.title,
            icon: topic.icon
        }))
    ];

    return (
        <motion.aside
            className="sidebar glass"
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="sidebar-header">
                <h2 className="gradient-text">⚛️ Physics Lab</h2>
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
    );
};

export default Sidebar;
