import axios from 'axios';
import { clearStore } from '../features/user/userSlice';
import { getUserFromLocalStorage } from './localStorage';

const customFetch = axios.create({
  // baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
  baseURL:'http://localhost:8800/api/v1'
});

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  console.log(user)
  if (user) {
    config.headers['Authorization'] = `Bearer ${user.token}`;
  }
  return config;
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

  // export const fetchAllEmployees = 
  //   const [allEmployees, setAllEmployees] = useState(null)
  // useEffect(()=>{
  //   axios.get('http://localhost:8800/api/v1/auth/getalluser')
  // .then(response => {
  //   setAllEmployees(response.data)
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
  // },[])
  // console.log(allEmployees)
  // return allEmployees;

export default customFetch;
