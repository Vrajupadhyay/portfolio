// Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-12 w-12"></div> */}
      <span className="loading loading-infinity loading-lg h-24 w-24"></span>
    </div>
  );
};

export default Loader;
