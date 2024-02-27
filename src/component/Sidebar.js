// Sidebar.js
import React from 'react';
import { SiOpenai } from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { LiaRobotSolid } from "react-icons/lia";
import { LuSettings2 } from "react-icons/lu";

const Sidebar = ({ changeTab, activeTab }) => {
  const handleTabChange = (eventKey) => {
    changeTab(eventKey);
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title"><SiOpenai /></h2>
      <ul className="sidebar-menu">
        <li
          className={activeTab === 'home' ? 'sidebar-menu-item active' : 'sidebar-menu-item'}
          onClick={() => handleTabChange('home')}
        >
          <span className="sidebar-text">Playground</span>
          <TbBrandPowershell />
        </li>
        <li
          className={activeTab === 'profile' ? 'sidebar-menu-item active' : 'sidebar-menu-item'}
          onClick={() => handleTabChange('profile')}
        >
          <span className="sidebar-text">Assistants</span>
          <LiaRobotSolid />
        </li>
        <li
          className={activeTab === 'contact' ? 'sidebar-menu-item active' : 'sidebar-menu-item'}
          onClick={() => handleTabChange('contact')}
        >
          <span className="sidebar-text">Fine-tuning</span>
          <LuSettings2 />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
