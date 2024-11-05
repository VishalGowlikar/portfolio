import React from 'react';

function Info() {
  return (
    <div className="simple-box">
      <pre>
{`const coder = {
            name: 'Vishal Gowlikar',
                skills: ['React', 'NextJS', 
    'Redux', 
    'Express', 
    'NestJS', 
    'MySql', 
    'MongoDB',
     'Docker',
      'AWS'],
        hardWorker: true,
          quickLearner: true,
           problemSolver: true,
             hireable: function() {
    return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
    );
  }
};`}
      </pre>
    </div>
  );
}

export default Info;
