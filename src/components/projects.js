
function Projects() {
    const projects = [
        {
            name: 'AI Powered Financial App',
            tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer', 'Joi', 'Puppeteer', 'EC2', 'PM2', 'Nginx'],
            myRole: 'Backend Developer',
            description: 'AI-powered financial mobile application with APIs using Express, TypeScript, OpenAI, AWS, and MongoDB. The app includes AI assistants, OTP via AWS SES, and text-to-speech using AWS Transcribe.',
        },
        {
            name: 'Instagram Caption Builder',
            tools: ['React', 'MongoDB', 'GitHub Actions'],
            myRole: 'Full Stack Developer',
            description: 'Web app to generate creative Instagram captions based on keywords and latest trends.',
        },
        {
            name: 'Web Forum',
            tools: ['Flask', 'React', 'PostgreSQL'],
            myRole: 'Full Stack Developer',
            description: 'Built a discussion forum that supports real-time conversations and user interactions. Used Flask for the backend and React for the frontend, providing a seamless user experience.',
        }
    ];

    return (
        <div id="projects" className="projects-section">
            {projects.map((project, index) => (
                <div key={index} className={`project project-${index + 1}`}>
                    <h3>{project.name}</h3>
                    <p><strong>Tools:</strong> {project.tools.join(', ')}</p>
                    <p><strong>Role:</strong> {project.myRole}</p>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
