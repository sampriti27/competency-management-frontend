import React from "react";

const ProjectCardComponent = ({item}) =>{

return(
    <div
        key={item.id}
        className="relative rounded-lg shadow-md p-6 flex-row"
      >
        <h3 className="text-lg font-bold mb-2">Project Name: <span className="font-normal">{item.name}</span></h3>
        <p className="text-gray-900 mb-2"><span className="font-bold">Description:</span> {item.description}</p>
        <p className="text-gray-900"><span className="font-bold">Required Skill:</span> {item.skillreq}</p>
      {item.status ?  <p className="text-gray-900"><span className="font-bold">Approval Status:  </span > <span className="font-semibold">{item.status}</span></p> :
      <div className="flex justify-end mt-4">
      <button
                  
                  className="text-white bg-sky-700 rounded px-4 py-2  bottom-4 right-4 hover:bg-sky-950 transition duration-300"
                >
                  Apply
                </button>
                </div>}
      </div>
)

}

export default ProjectCardComponent;