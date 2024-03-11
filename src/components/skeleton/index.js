import React, { useState, useEffect } from "react";
import "./index.css"; // Import your CSS file

const SkeletonLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  //   // Simulate loading delay
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000); // Change the delay time as needed

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div className="skeleton-container">
      {isLoading ? (
        <div className="skeleton">
          {/* <div className="skeleton-avatar"></div> */}
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </div>
      ) : (
        // Render your actual content here once loading is complete
        <div>
          <h1>Your Content Goes Here</h1>
          <p>Other content...</p>
        </div>
      )}
    </div>
  );
};

export default SkeletonLoading;
