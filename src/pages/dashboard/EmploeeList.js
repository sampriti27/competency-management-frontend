// import React, { useEffect, useState } from 'react';
// import { fetchAllEmployees } from '../../utils/axios';


// const EmploeeList = () => {
//   console.log(fetchAllEmployees);
//   // const [allEmployees, setAllEmployees] = useState(null)
//   // useEffect(()=>{
//   //   axios.get('http://localhost:8800/api/v1/auth/getalluser')
//   // .then(response => {
//   //   setAllEmployees(response.data)
//   // })
//   // .catch(error => {
//   //   console.error('Error:', error);
//   // });
//   // },[])

//   return (
//     <div className=''>
//         <div className='bg-primary text-center text-white'><h2>Emploee List</h2></div>
//         {allEmployees?.map((item) => (
//        <div key={item.id} className='bg-danger'>
//         <div className='row mx-1'>
//           <div className='col-6 bg-primary'>
//             <div className='text-center'><h4>{item.name}</h4></div>
//           </div>
//           <div className='col-6 bg-primary'>
//             <div className='text-center'><h4>{item.name}</h4></div>
//           </div>
//         </div>
//        </div>
//       ))}
//     </div>
//   )
// }

// export default EmploeeList