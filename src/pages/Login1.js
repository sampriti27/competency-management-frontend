import React, { useEffect, useState } from 'react';
import { FormRow, FormRowSelect} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { handlesChange } from '../features/user/userSlice';
import { Link } from 'react-router-dom';

const initialState = {
  name:'',
  email: '',
  password: '',
};

function Login1() {
  
  const { isManager, managerOptions} = useSelector((store) => store.user);

  const [values, setValues] = useState(initialState)

  const {user, isLoading} = useSelector((store) => store.user);
  const dispatch = useDispatch();

  
  const [isEmployee, setIsEmployee] = useState("Employee")
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({...values,[name]:value})
  }
  const handleRegisterInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name+" "+value);
    setIsEmployee(value)
    dispatch(handlesChange({ name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password} = values
    if(!email || !password){
      toast.error("Please fill out all fields");
      return;
    }
   else{
    console.log(user)
    dispatch(loginUser({email, password, isEmployee}));
  }
}

  console.log(user)
  useEffect(()=>{
    if(user){
      console.log(user)
      if(user.role === 'Manager' ){
        setTimeout(() => {
            navigate('/');
        }, 2000);
       }
    else if(user.role === 'Employee'){
        setTimeout(() => {
            navigate('/dashboard');
        }, 2000);
    }
    }
  });

  return <Wrapper className='full-page'>
    <form className='form' onSubmit={onSubmit}>
      <h3>Login</h3>
      <FormRow type='email' name='email' value={values.email} handleChange={handleChange}></FormRow>
      <FormRow type='password' name='password' value={values.password} handleChange={handleChange}></FormRow>
        <div>
        <label htmlFor='selectuser' className='selectusertype'>Choose User Type:</label>
        <FormRowSelect
            name='isManager'
            labelText='type'
            value={isManager}
            handleChange={handleRegisterInput}
            list={managerOptions}
          />
        </div>
      <button type='submit' className='btn btn-block' disabled={isLoading}>{isLoading ? 'loading...' : 'submit'}</button>
      <p>Not a member yet?<Link to='/register' className=''>
            Register
          </Link></p>
    </form>
  </Wrapper>
}

export default Login1;