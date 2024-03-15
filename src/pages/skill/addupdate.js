import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

const DeleteConfirmation = ({ open, onClose, onConfirm }) => {
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

      return(
        <Modal
      open={open}
      onClose={onClose}
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
          onChange={handleChangeCert}
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
            onChange={handleChangePn}
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
          name="rating"
          value={formData.rating}
          onChange={handleChangePrg}
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
      );
};
export default addupdate;