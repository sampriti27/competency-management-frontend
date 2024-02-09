import React, { useState } from 'react';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isManager: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  const toggleManager = () => {
    setValues({...values, isManager: !values.isManager});
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
      <div className='logopos'>
        <Logo className='logosiz'/>
      </div>
        <h3>{values.isManager ? 'Manager Login' : 'Employee Login'}</h3>
        <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>
        <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block'>Login</button>
        <p>
          {values.isManager ? 'Are you an Employee?' : 'Are you a Project Manager?'}
          <button type='button' onClick={toggleManager} className='manager-btn'>
            {values.isManager ? 'Employee Login':'Manager login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register