// UpdateSkillModal.js
import React from "react";
import { Box, Modal } from "@mui/material";

const UpdateModal = ({ open, onClose, selectedSkill, onSubmit, onChange }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400, // Adjusted width
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: '2px solid #0369a1', // Border color
    borderRadius: '8px', // Border radius
  };

  const buttonStyle = {
    backgroundColor: '#0369a1', // Background color for button
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 20px',
    cursor: 'pointer',
    marginRight: '8px',
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="update-modal-title"
      aria-describedby="update-modal-description"
    >
      <Box sx={style}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '16px' }}>Update Skill</h2>
        {selectedSkill && (
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={selectedSkill.name}
                onChange={onChange}
                required
                style={{ padding: '8px 12px', marginBottom: '16px', width: '100%', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label htmlFor="certificateAvailable">Certificate available:</label>
              <select
                id="certificateAvailable"
                name="certificateAvailable"
                value={selectedSkill.certificateAvailable}
                onChange={onChange}
                required
                style={{ padding: '8px 12px', marginBottom: '16px', width: '100%', boxSizing: 'border-box' }}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            {/* Additional fields as per your requirement */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <button type="submit" style={buttonStyle}>Update</button>
              <button onClick={onClose} style={{ ...buttonStyle, backgroundColor: '#0369a1' }}>Cancel</button>
            </div>
          </form>
        )}
      </Box>
    </Modal>
  );
};

export default UpdateModal;
