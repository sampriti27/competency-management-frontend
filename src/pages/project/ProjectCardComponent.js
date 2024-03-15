import React from "react";

const ProjectCardComponent = ({item}) =>{

return(
    <div
        key={item.id}
        className=" rounded-lg shadow-md p-6 flex-row"
      >
        <h3 className="text-lg font-bold mb-2">Project Name: <span className="font-normal">{item.titl}</span></h3>
        <p className="text-gray-900 mb-2"><span className="font-bold">Position:</span> {item.position}</p>
        <p className="text-gray-900 mb-2"><span className="font-bold">Techstack:</span> {item.techstack}</p>
        <p className="text-gray-900 mb-2"><span className="font-bold">Project status:</span> {item.prjstatus}</p>
        <p className="text-gray-900 mb-2"><span className="font-bold">Type:</span> {item.type}</p>
      {item.status &&  <p className="text-gray-900"><span className="font-bold">Approval Status:  </span > <span className="font-semibold">{item.status}</span></p> 
      }
      </div>
)

}

export default ProjectCardComponent;