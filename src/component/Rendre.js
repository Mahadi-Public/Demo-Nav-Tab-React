// Rendre.js
import React from "react";
import Home from "./Home"; // Import your Home component
import Profile from "./Profile"; // Import your Profile component
import Contact from "./Contact"; // Import your Contact component

const renderContent = (activeTab) => { 
  switch (activeTab) {
    case 'home':
      return <Home />;
    case 'profile':
      return <Profile />;
    case 'contact':
      return <Contact />;
    default:
      return null;
  }
}

export default renderContent;
