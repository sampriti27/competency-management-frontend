import React from "react";
import Header from "./header";
import icons from 'glyphicons';

const empDash = () => {
  return (
    <>
      <Header />
      <div className="empDash">
        <h2 className="greeting">Hi Garvit</h2>
        <h2 className="dashHead">Dashboard</h2>
        <div className="basicInfo">
          <div className="subSection">
            <div class="circle">
              <div class="outer-circle1"></div>
              <div class="inner-circle">
                <h2 style={{ marginLeft: "38%", marginTop: "26%" }}>10</h2>
                <h6 style={{ marginLeft: "8%" }}>Projects Allocated</h6>
              </div>
              <div class="box box-top-left"></div>
              <div class="box box-bottom-left"></div>
              <div class="box box-bottom-right"></div>
              <div class="box box-top-right"></div>
            </div>
          </div>
          <div className="subSection">
            <div class="circle">
              <div class="outer-circle2"></div>
              <div class="inner-circle">
                <h2 style={{ marginLeft: "41%", marginTop: "26%" }}>10</h2>
                <h6 style={{ marginLeft: "13%" }}>Skills Registered</h6>
              </div>
              <div class="box box-top-left"></div>
              <div class="box box-bottom-left"></div>
              <div class="box box-bottom-right"></div>
              <div class="box box-top-right"></div>
            </div>
          </div>
          <div className="subSection">
            <div class="circle">
              <div class="outer-circle3"></div>
              <div class="inner-circle">
                <h2 style={{ marginLeft: "41%", marginTop: "26%" }}>10</h2>
                <h6 style={{ marginLeft: "13%" }}>Skills Approved</h6>
              </div>
              <div class="box box-top-left"></div>
              <div class="box box-bottom-left"></div>
              <div class="box box-bottom-right"></div>
              <div class="box box-top-right"></div>
            </div>
          </div>
        </div>
        <div className="skillSetRating">
          <div>
            <h3 style={{borderBottom: '1px solid black', marginBottom: '2%'}}>Skills</h3>
          </div>

            <div className="skillList">
          <table>
            <tr>
              <th>#</th>
              <th>Skiils Acquired</th>
              <th>Skills Rating</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Agile Development</td>
              <td style={{textAlign: 'left', paddingLeft: '9.5%'}}>{icons.star} {icons.star} {icons.star} {icons.star} {icons.star}</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Web Development</td>
              <td style={{textAlign: 'left', paddingLeft: '9.5%'}}>{icons.star} {icons.star} {icons.star}</td>
            </tr>
          </table>
          </div>
          <button type="button" className="dashAddSkillBtn">Add More Skill {icons.arrowR}</button>
        </div>

        <div className="updates">
            <h5 style={{borderBottom: '1px solid black', marginBottom: '3%', paddingBottom: '4%'}}>Updates</h5>
            <table style={{color: 'grey'}}>
                <tr>
                    <td>{icons.speaker} 1 Skill is pending for your Approval</td>
                </tr>
                <tr>
                    <td>{icons.speaker} Your Web Development Skill is approved with a rating of 3 stars</td>
                </tr>
            </table>

        </div>
        </div>
        
    </>
  );
};

export default empDash;
