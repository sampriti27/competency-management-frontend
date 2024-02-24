import React, { useState } from "react";
import StaticData from "./StaticData";
import '../../assets/css/index.css'

const SkillList = () => {
  // eslint-disable-next-line
    const [data, setdata ] = useState(StaticData);
    return(
    <>
    <div className="mainContainer" >
   <div className="flex justify-end px-20 py-14">
    <button className="text-white pur rounded-lg px-7 py-3 text-base border-none cursor-pointer ">ADD NEW</button>
   </div>
   <div className="mx-32">
    <h2 className="text-3xl p-5">Your Skills</h2>
    <div className="flex justify-center">
    {data?.length>0 ?
     <table className="border-collapse w-full lg:w-5/6">
     <thead>
       <tr >
         <th className="border px-8 py-4 ple ">Skill</th>
         <th className="border px-8 py-4 ple ">Rating</th>
         <th className="border px-8 py-4 ple ">Approval Status</th>
       </tr>
     </thead>
     <tbody>
      
      {data?.map((item) => (
       <tr key={item.id}>
           <td className="border px-8 py-4 pur">{item.skill}</td>
           <td className="border px-8 py-4 pur">{item.rating}</td>
           <td className="border px-8 py-4 pur">{item.approval}</td>
       </tr>
      ))}
     </tbody>
   </table>
    :
    
    <>
    <h3>No Skills available</h3>
    </>
    }
   


</div>
   </div>
 </div>
        </>
    )
}

export default SkillList;