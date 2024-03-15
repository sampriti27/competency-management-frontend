import React, { useEffect, useState } from "react";
import StaticData from "./StaticData";
import { Box, Modal } from "@mui/material";
import DeleteConfirmation from "./DeleteConfirmation";
import { createSkill, deleteSkill, getSkillList, updateSkill} from "./SkillApi";


const SkillList = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600, // Adjusted width
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: '2px solid rgb(108 99 255)', // Border color
    borderRadius: '8px', // Border radius
  };

  const inputStyle = {
    backgroundColor: '#f3f4f6', // Background color for input space
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    marginBottom: '16px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: 'rgb(108 99 255)', // Background color for button
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 20px',
    cursor: 'pointer',
    float: 'right', // Align to the right
  };

// eslint-disable-next-line
  const [data, setData] = useState(StaticData);
  // eslint-disable-next-line
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  // eslint-disable-next-line
  const [skillToDelete, setSkillToDelete] = useState(null);

  const [isupdate, setisupdate] = React.useState(false);


  useEffect(()=>{

   getSkillList(1).then((response)=>{
    console.log(response)
    if(response)

    setData(response.data)
   })
  },[])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateModal = (data) =>{
console.log(data)
setisupdate(true)




setFormData((prevState) => ({
  ...prevState,
 ...data
}));
handleOpen()
  }
  // State for form data
  const [formData, setFormData] = useState({
    up_certificate:"",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const name = e.target.value;
    console.log(formData)
    setFormData((prevState) => ({
      ...prevState,
      skill_name: name
    }));
  };
  const handleChangePn = (e) => {
    const name = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      prj_name: name
    }));
  };
  const handleChangePd = (e) => {
    const name = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      prj_desc: name
    }));
  };
  const handleChangeCert = (e) => {
    const certificateAvailable = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      is_cert: certificateAvailable
    }));
  };
  const handleChangePrg = (e) => {
    const rating = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      skill_level: rating
    }));
  };
  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
console.log("999999",file)
    setFormData((prevState) => ({
      ...prevState,
      up_certificate: file?.name,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form data to your data array or handle it as needed
    console.log(formData);
    if(isupdate){
      updateSkill(formData?.id,formData).then((res)=>{
          console.log(res)})
          getSkillList(1).then((response)=>{
            console.log(response)
            if(response)
        
            setData(response.data)
           })
    }
    else{
    const skilldata = formData;
    skilldata.approval_status = 'pending';
    skilldata.employee_id = 1;
    skilldata.is_cert = (skilldata.is_cert === "true");
    createSkill(formData).then((res)=>{
      console.log(res)
      getSkillList(1).then((response)=>{
        console.log(response)
        if(response)
    
        setData(response.data)
       })
    })
  }
    // Clear form fields
    setFormData({
      skill_name: "",
      up_certificate: null,
      skill_level: "",
    });
    getSkillList(1).then((response)=>{
      console.log(response)
      if(response)
  
      setData(response.data)
     })
    handleClose(); // Close the modal
  };
  const handleDeleteConfirmation = (id) => {
    setSkillToDelete(id);
    setDeleteConfirmation(true);
  };

  const handleDelete = () => {
    setData(data.filter(item => item.id !== skillToDelete));
    deleteSkill(skillToDelete)
    // deleteSkill(skillToDelete).then((response)=>{
      
    // })
    setDeleteConfirmation(false);
  };

  const handleCloseConfirmation = () => {
    setDeleteConfirmation(false);
    setSkillToDelete(null);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="m-4 flex justify-end">
            <button
              className="text-white bg-indigo-500 rounded-lg px-3 py-2 text-base border-none cursor-pointer hover:bg-indigo-950 mb-4 sm:mb-6"
              onClick={handleOpen}
            >
              ADD NEW
            </button>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span style={{ textDecoration: "underline" }}>Your Skills</span>
          </h2>
          <div className="flex justify-center">
            {data?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg shadow-md p-4 relative"
                    style={{ width: "280px", height: "200px" }}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {item.skill_name}
                    </h3>
                    <p className="text-gray-900 mb-2">Skill level: {item.skill_level}</p>
                    <p className="text-gray-900">
                      Approval Status: {item.approval_status}
                    </p>
                    <div className="absolute bottom-4 right-4 space-x-2">
                      <button className="text-white bg-indigo-500 rounded px-3 py-1 hover:bg-indigo-950"   onClick={()=>updateModal(item)}>
                        Update 
                      </button>
                      <button className="text-white bg-pink-500 rounded px-3 py-1 hover:bg-rose-950" onClick={() => handleDeleteConfirmation(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h3 className="text-lg font-semibold mb-2">
                No Skills available
              </h3>
            )}
          </div>
        </div>

   <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '16px' }}>ADD NEW SKILL</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="skill_name"
          value={formData.skill_name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="certificateAvailable">Certificate available:</label>
        <select
          id="certificateAvailable"
          name="is_cert"
          value={formData.is_cert}
          onChange={handleChangeCert}
          required
          style={inputStyle}
        >
          <option value="">Select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      {formData.is_cert === "true" && (
        <div>
          <label htmlFor="certificate">Certificate:</label>
          <input
            type="file"
            id="certificate"
            name="up_certificate"
            // value={formData.up_certificate}
            onChange={handleFileChange}
            required
            style={inputStyle}
          />
        </div>
      )}
      {formData.is_cert === "false"  && (
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="prj_name"
            value={formData.prj_name}
            onChange={handleChangePn}
            required
            style={inputStyle}
          />
        </div>
      )}
      {formData.is_cert === "false"  && (
        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="prj_desc"
            value={formData.prj_desc}
            onChange={handleChangePd}
            required
            style={inputStyle}
          />
        </div>
      )}
      <div>
        <label htmlFor="rating">Skill level:</label>
        <select
          id="rating"
          name="skill_level"
          value={formData.skill_level}
          onChange={handleChangePrg}
          required
          style={inputStyle}
        >
          <option value="">Select</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <button type="submit" style={buttonStyle}>Add</button>
    </form>
  </Box>
</Modal>
<DeleteConfirmation
          open={deleteConfirmation}
          onClose={handleCloseConfirmation}
          onConfirm={handleDelete}
        />



        
      </div>
    </>
  );
};

export default SkillList;