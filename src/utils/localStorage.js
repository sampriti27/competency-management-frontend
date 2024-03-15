// import  Axios  from "axios";
export const addUserToLocalStorage = (user) => {
  console.log(JSON.stringify(user))
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };
  
  export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('user');
    console.log(result)
    // const user = result ? JSON.parse(result) : null;
    const user  = result
    return user;
  };

  // export const getUserFromLocalStorage1 = (email) => {
  //   Axios.get('http://localhost:8800/api/v1/auth/user', {email:email})
  //   .then((response) => {
  //     const result = response.existingUser;
  //     const user = result ? JSON.parse(result) : null;
  //     return user;
  //   }
  //   );
  // }



