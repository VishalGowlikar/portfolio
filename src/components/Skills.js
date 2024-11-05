// Skills.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faNodeJs, faPython, faGit, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFire } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';

function Skills() {
    useEffect(() => {
        const interval = setInterval(() => {
            const skills = document.querySelectorAll('.skill-item');
            skills.forEach(skill => {
                skill.style.transform = `translateX(${Math.random() * 10}px)`;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="skills">
            <h2>SKILLS</h2>
            
            <ul className="skills-list">
                <li className="skill-item">
                    <FontAwesomeIcon icon={faJs} /> JavaScript
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faJava} /> JAVA
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faPython} /> Python
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faGit} /> GIT
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faUpwork} /> Agile
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faReact} /> React
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faJs} /> flask
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faJs} /> Express.js
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faPython} /> Pandas,pytorch
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faHtml5} /> HTML
                </li>
                
                <li className="skill-item">
                    <FontAwesomeIcon icon={faNodeJs} /> Node.js
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faDatabase} /> SQL
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faFire} /> FireBase
                </li>
                <li className="skill-item">
                    <FontAwesomeIcon icon={faDatabase} /> MongoDB
                </li>
                
            </ul>
        </div>
    );
}

export default Skills;
