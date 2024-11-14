import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

function Links() {
    return (
        <div className="Links" style={{ textAlign: 'center', padding: '20px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '8px' }}>
            <p id='fuck'>
                Hello!,<br/> This is Vishal, <br/>  I'm a Web Developer.
            </p>

            {/* Social Media Icons */}
            <div className="social-icons" style={{ margin: '20px 0' }}>
                <a href="https://github.com/VishalGowlikar" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <FaGithub style={{ fontSize: '24px', color: 'white' }} />
                </a>
                <a href="https://www.linkedin.com/in/vishal-gowlikar-235b20204/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    <FaLinkedin style={{ fontSize: '24px', color: 'white' }} />
                </a>
            </div>

            {/* Buttons */}
            <div className="buttons" style={{ marginTop: '20px' }}>
                <button type='button' className='primarybtn'>Contact Me</button>
                <button className='secondarybtn' >
                <a href="https://www.linkedin.com/in/vishal-gowlikar-235b20204/overlay/1729549076664/single-media-viewer/?type=DOCUMENT&profileId=ACoAADQip0kBzOZM5cM7jCgg-bxO1HCpIm2Vvpo" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                <FaDownload style={{ fontSize: '14px', color: 'white' }} />
                </a>Resume</button>
            </div>
        </div>
    );
}



export default Links;
