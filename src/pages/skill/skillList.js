import React, { useState } from "react";
import StaticData from "./StaticData";
import { Box, Modal } from "@mui/material";
import DeleteConfirmation from "./DeleteConfirmation";


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
    border: '2px solid #0369a1', // Border color
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
    backgroundColor: '#0369a1', // Background color for button
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    certificate: null,
    rating: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'rating' ? Math.max(0, Math.min(5, value)) : value, // Ensuring rating is between 0 and 5
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      certificate: file,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form data to your data array or handle it as needed
    console.log(formData);
    // Clear form fields
    setFormData({
      name: "",
      certificate: null,
      rating: "",
    });
    handleClose(); // Close the modal
  };
  const handleDeleteConfirmation = (id) => {
    setSkillToDelete(id);
    setDeleteConfirmation(true);
  };

  const handleDelete = () => {
    setData(data.filter(item => item.id !== skillToDelete));
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
              className="text-white bg-sky-700 rounded-lg px-7 py-3 text-base border-none cursor-pointer hover:bg-sky-950 mb-4 sm:mb-6"
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
                      {item.skill}
                    </h3>
                    <p className="text-gray-900 mb-2">Skill level: {item.level}</p>
                    <p className="text-gray-900">
                      Approval Status: {item.approval}
                    </p>
                    <div className="absolute bottom-4 right-4 space-x-2">
                      <button className="text-white bg-sky-700 rounded px-3 py-1 hover:bg-sky-950">
                        Update
                      </button>
                      <button className="text-white bg-sky-700 rounded px-3 py-1 hover:bg-sky-950" onClick={() => handleDeleteConfirmation(item.id)}>
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="certificateAvailable">Certificate available:</label>
        <select
          id="certificateAvailable"
          name="certificateAvailable"
          value={formData.certificateAvailable}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {formData.certificateAvailable === 'yes' && (
        <div>
          <label htmlFor="certificate">Certificate:</label>
          <input
            type="file"
            id="certificate"
            name="certificate"
            onChange={handleFileChange}
            required
            style={inputStyle}
          />
        </div>
      )}
      {formData.certificateAvailable === 'no' && (
        <div>
          <label htmlFor="projectName">Project Name:</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
      )}
      {formData.certificateAvailable === 'no' && (
        <div>
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
      )}
      <div>
        <label htmlFor="rating">Skill level:</label>
        <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
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
