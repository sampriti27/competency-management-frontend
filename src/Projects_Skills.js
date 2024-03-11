import React from "react";
import './App.css';

function Project_Skills(){
    const data={
        "Projects":
        <ul>
            <li>First Project</li>
            <li>Second Project</li>
            <li>Third Project</li>
            <li>Fourth Project</li>
        </ul>,
        "Skills":
        <ul>
            <li>First Skill</li>
            <li>Second Skill</li>
            <li>Third Skill</li>
            <li>Fourth Skill</li>
        </ul>
    }
    return(
        <section>
            <h3>Work Data</h3>
            <div className="skills">
                <p>
                    <strong>Skills</strong><br/>
                    {data.Skills}
                </p>
            </div>
            <div className="projects">
                <p>
                    <strong>Projects</strong><br/>
                    {data.Projects}
                </p>
            </div>
        </section>
    );
}
 
export default Project_Skills;