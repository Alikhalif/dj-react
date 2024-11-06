import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    homepage: {
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#4a90e2',
        color: 'white',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    nav: {
        display: 'flex',
        gap: '1rem',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        transition: 'color 0.3s',
    },
    navLinkHover: {
        color: '#cde5ff',
    },
};

function Header() {
    return (
        <div style={styles.homepage}>
            {/* Header */}
            <header style={styles.header}>
                <div style={styles.logo}>ToDoApp</div>
                <nav style={styles.nav}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                    <a href="#" style={styles.navLink}>About</a>
                    <a href="#" style={styles.navLink}>Contact</a>
                    <Link to="/todo" style={styles.navLink}>Start</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;
