// Projects.js
import React from 'react';

function Projects() {
    return (
        <div id="projects" className="projects-section">
            <pre>
           {` const projects = [
    {
        name: 'AI Powered Financial App',
        tools: ['Express', 'MongoDB', 'OpenAI API', 
        'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
        myRole: 'Backend Developer',
        description: 'Me and my team built an 
        AI-powered financial mobile application. I developed APIs using Express, TypeScript, 
        OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. 
        Built AI assistants using OpenAI's latest model and trained them with our dataset. 
        Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.',
    },
    {
        name: 'Instagram Caption Builder',
        tools: ['React', 'MongoDB', 'GitHub Actions'],
        myRole: 'Full Stack Developer',
        description: 'Developed a web application that helps users generate creative captions for their Instagram posts. The app allows users to input keywords and generate captions based on the latest trends.',
    },
    {
        name: 'Hoboken Meet Up',
        tools: ['React', 'Node.js', 'Express', 'MongoDB'],
        myRole: 'Frontend Developer',
        description: 'Created a platform for local events in Hoboken, allowing users to create and manage meetups. Implemented a user-friendly interface and integrated real-time notifications.',
    },
    {
        name: 'Web Forum',
        tools: ['Flask', 'React', 'PostgreSQL'],
        myRole: 'Full Stack Developer',
        description: 'Built a discussion forum that supports real-time conversations and user interactions. Used Flask for the backend and React for the frontend, providing a seamless user experience.',
    },
];`}
            </pre>
           
        </div>
    );
}

export default Projects;
