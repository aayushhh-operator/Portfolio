import React from 'react';
import './NavBar.css';

const NavBar = () => {
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-links">
                    <li>
                        <a href="#top"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}>
                            Home
                        </a>
                    </li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Me</a></li>
                    <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a></li>
                    <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
                    <li><a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>Achievements</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                    <li><a href="https://drive.google.com/file/d/1dUjDYnCshzaFVrXqF0EDVLZq-xGHnZBR/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
