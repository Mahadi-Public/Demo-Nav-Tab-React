
// const Dashboard = () => {
//   return (
//     <>
//     <Tabs
//         defaultActiveKey="profile"
//         id="uncontrolled-tab-example"
//         className="mb-3"
//         >
//         <Tab eventKey="home" title="Home">
//             Tab content for Home
//         </Tab>
//         <Tab eventKey="profile" title="Profile">
//             Tab content for Profile
//         </Tab>
//         <Tab eventKey="contact" title="Contact" disabled>
//             Tab content for Contact
//         </Tab>
//     </Tabs>
//     </>
//   )
// }

// export default Dashboard;



// Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import renderContent from './Rendre';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <div className="dashboard-container">
      <Sidebar changeTab={handleTabChange} activeTab={activeTab} />
      {renderContent(activeTab)} {/* Pass activeTab as parameter to renderContent */}
    </div>
  );
};

export default Dashboard;
