import React, { useState, useEffect } from "react";
// import axios from "axios"; // Use axios or any other HTTP client library
// import Styles from "./styles/Profile.css";
import "../../assets/css/profile.css";
import profile from "../../assets/images/profile1.png";
import Skeleton from "../skeleton/index";
const ProfilePage = () => {
  const [user, setUser] = useState("vk");
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({}); // Track edited user data

  // setUser("vk");

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get("/api/user/profile");
  //     setUser(response.data);
  //     // Set editedUser as well so that we can revert back to original values if needed
  //     setEditedUser(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  const handleEdit = () => {
    setIsEditing(true);
  };

  // demo
  const handleSave = async () => {
    console.log("done");
  };
  // const handleSave = async () => {
  //   try {
  //     await axios.put("/api/user/profile", editedUser);
  //     setIsEditing(false);
  //     // Refetch user data after saving changes
  //     fetchUserData();
  //   } catch (error) {
  //     console.error("Error updating user data:", error);
  //   }
  // };

  const handleCancel = () => {
    // Revert back to original user data
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen">
        <div
          className="glass"
          style={{ width: "100%", height: "100vh", paddingTop: "3em" }}
        >
          {/* <img src={user.avatar} alt="Profile Avatar" /> */}
          <div className="profile-edit">
            {!isEditing && (
              <button onClick={handleEdit} className="profile-edit-btn">
                Edit Profile
              </button>
            )}
          </div>
          <div className="profile-align">
            <div>
              <img src={profile} className="img-profile" />
            </div>
            {/* <h1>{user.name}</h1>
          <p>{user.email}</p> */}
            <div>
              <h1>Vasanthakumar J</h1>
              <h3>#is_cns</h3>
              {/* <p>abc@gmail.com</p> */}
            </div>
          </div>
          {/* </div>
      </div> */}
          {/* <div className="profile-body"> */}
          {isEditing ? (
            <div>
              <h2>Edit Profile</h2>
              <form onSubmit={handleSave} className="profile-editpage">
                <div>
                  <label className="formsLabel">Name: </label>
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                    className="formInput"
                  />
                </div>
                <div>
                  <label className="formsLabel">Email: </label>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                    className="formInput"
                  />
                </div>
                <div>
                  {/* Add more fields for editing */}
                  <button type="submit" className="formBtn">
                    Save
                  </button>
                  <button
                    type="button"
                    className="formBtn"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="profile-bio">
              <div className="profile-bio-skills">
                <h2>Skills</h2>
                <Skeleton />
              </div>
              <div className="profile-bio-certifications">
                <h2>certifications</h2>
                <Skeleton />
              </div>

              {/* <p>{user.bio}</p> */}
              {/* Display other profile details */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
