import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="homepage">
            

            {/* Hero Section */}
            <section className="hero">
                <h1>Stay Organized, Achieve More</h1>
                <p>Organize tasks, set priorities, and track your productivity effortlessly.</p>
                <div className="cta-buttons">
                <Link to="/todo" className="btn-primary">Get Started</Link>
                <button className="btn-secondary">Learn More</button>
                </div>
            </section>

            {/* Features Section */}
            <section  className="features">
                <h2>Features</h2>
                <div className="feature-item">Task Management</div>
                <div className="feature-item">Reminders</div>
                <div className="feature-item">Priority Setting</div>
                <div className="feature-item">Progress Tracking</div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="testimonials">
                <h2>What Our Users Say</h2>
                <p>"This app changed my productivity game!" - User A</p>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing">
                <h2>Pricing</h2>
                <div className="pricing-plan">Free</div>
                <div className="pricing-plan">Standard</div>
                <div className="pricing-plan">Premium</div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 ToDoApp</p>
                <div className="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
