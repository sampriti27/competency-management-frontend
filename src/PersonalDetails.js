import React from "react";
import './App.css';

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
    return(
        <section>
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
        </section>
    );
}
export default PersonalDetails;