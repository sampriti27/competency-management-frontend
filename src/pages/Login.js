import React, { useState } from 'react';
import { FormRow} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';

const initialState = {
  email: '',
  password: '',
  isManager: false,
};


function Login() {

  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}:${value}`);
    setValues({...values,[name]:value});
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const {email, password, isManager} = values
    if(!email || !password){
      toast.error("Please fill out all fields");
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      toast.warning("Invalid email address")
    }
    else{
      toast.success("Successfully Logged in")
    }
    console.log(isManager);
    console.log(e.target);
  }
  // const toggleManager = () => {
  //   setValues({...values, isManager: !values.isManager});
  //   console.log(values.isManager)
  // }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
      {/* <div className='logopos'>
        <Logo className='logosiz'/>
      </div> */}
        <h3>Login</h3>
        <FormRow type="text" name="email" value={values.email} handleChange={handleChange}/>
        <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
        <label htmlFor='selectuser' className='selectusertype'>Choose User Type:</label>
        <select name="Select User Type" id='selectuser'>
          <option value={values.isManager}>Manager</option>
          <option value={!values.isManager}>Employee</option>
        </select>
        <button type='submit' className='btn btn-block'>Login</button>
        <p>
          <button type='button' className='manager-btn'>
            forgot password?
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login