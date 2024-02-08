import React, { useState } from "react";
import StaticData from "./StaticData";

const SkillList = () => {
  // eslint-disable-next-line
    const [data, setdata ] = useState(StaticData);
    return(
    <>
    <div class="mainContainer" >
   <div class="flex justify-end px-20 py-14">
    <button class="text-white bg-indigo-700 rounded-lg px-7 py-3 text-base border-none cursor-pointer hover:bg-indigo-900">ADD NEW</button>
   </div>
   <div class="mx-32">
    <h2 class="text-3xl p-5">Your Skills</h2>
    <div class="flex justify-center">
    {data?.length>0 ?
     <table class="border-collapse w-full lg:w-5/6">
     <thead>
       <tr >
         <th class="border px-8 py-4 bg-indigo-700 text-black">Skill</th>
         <th class="border px-8 py-4 bg-indigo-700 text-black">Rating</th>
         <th class="border px-8 py-4 bg-indigo-700 text-black">Approval Status</th>
       </tr>
     </thead>
     <tbody>
      
      {data?.map((item) => (
       <tr key={item.id}>
           <td class="border px-8 py-4 bg-blue-500 text-black">{item.skill}</td>
           <td class="border px-8 py-4 bg-blue-500 text-black">{item.rating}</td>
           <td class="border px-8 py-4 bg-blue-500 text-black">{item.approval}</td>
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