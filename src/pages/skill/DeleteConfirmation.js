import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

const DeleteConfirmation = ({ open, onClose, onConfirm }) => {
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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '16px' }}>Confirm Deletion</h2>
        <p>Are you sure?Do you want to delete this skill?</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <button onClick={onConfirm} style={buttonStyle}>Yes</button>
          <button onClick={onClose} style={{ ...buttonStyle, backgroundColor: '#0369a1' }}>No</button>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmation;
