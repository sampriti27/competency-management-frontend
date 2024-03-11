import React from 'react';
import PersonalDetails from './PersonalDetails';
import './App.css';
import Project_Skills from './Projects_Skills';
import Header from './header';
import profile from './profile.jpg';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <img src={profile} alt='Profile'/>
        <div className='doublecontainer'>
          <PersonalDetails />
          <Project_Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
