// src/components/EducationS.js

import React from 'react';
import AboutPic from '../images/desktop image.jpg'; // Make sure the path to your image is correct

function EducationS() {
    return (
        <div id="educationsidebar">
            <img src={AboutPic} alt="Education Sidebar" className="education-image" />
        </div>
    );
}

export default EducationS;
