import React from "react";
import './App.css';
import profile from './profile.jpg';

function PersonalDetails(){
    const data={
        "id":1234,
        "fname":"abcdefgh",
        "lname":"ijklmno",
        "contact":1234345232,
        "email":"abcd@gmail.com",
        "gender":"Male",
        "dob":"24-09-2000"
    };
    const data1={
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
            <header>
                <h2>CMS</h2>
                <h3 className='headEmp'>Employee Details</h3>
            </header>
            <div className="container">
            <img src={profile} alt='Profile'/>
            <div className="doublecontainer"> 
                <h3>Personal Details</h3>
                <div className="id">
                    <p>
                        <strong>Employee ID</strong><br/>
                        {data.id}
                    </p>
                </div>
                <div className="fname">
                    <p>
                        <strong>First Name</strong><br/>
                        {data.fname}
                    </p>
                </div>
                <div className="lname">
                    <p>
                        <strong>Last Name</strong><br/>
                        {data.lname}
                    </p>
                </div>
                <div className="gender"> 
                    <p>
                        <strong>Gender</strong><br/>
                        {data.gender}
                    </p>
                </div>
                <div className="dob">
                    <p>
                        <strong>DOB</strong><br/>
                        {data.dob}
                    </p>
                </div>
                <div className="contact">
                    <p>
                        <strong>Contact</strong><br/>
                        {data.contact}
                    </p>
                </div>
                <div className="email">
                    <p>
                        <strong>Email Address</strong><br/>
                        {data.email}
                    </p>
                </div>

                <h3>Work Data</h3>
            <div className="skills">
                <p>
                    <strong>Skills</strong><br/>
                    {data1.Skills}
                </p>
            </div>
            <div className="projects">
                <p>
                    <strong>Projects</strong><br/>
                    {data1.Projects}
                </p>
            </div>
            </div>
            </div>
        </section>
    );
}
export default PersonalDetails;