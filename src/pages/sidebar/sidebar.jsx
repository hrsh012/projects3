// src/components/Sidebar.tsx
import React from 'react';  // Import React
import { Outlet, Link } from 'react-router-dom';  // Import necessary components for routing
import Icon from '../../assests/Icon.png';
import notification from '../../assests/notification.png';
import profilepicture from '../../assests/profilepicture.png';
import galleryicon from '../../assests/galleryicon.png';
import chat from "../../assests/chat.png";
import leading from '../../assests/leading.png';
import '../sidebar/sidebar.css'
const Sidebar = () => {
  return (
    <section className='work-info-sec'>
    <div className='container-fluid'>
      <div className="row">
      <div className="layout-container">
    
      <div
                            className="work-info-main col-md-2 col-lg-2 shadow collapse"
                            id="sidebar"
                        >
                            <div className="work-info-text">
                                <img src={leading} alt="icon" />
                                <span>Project</span>
                            </div>
                            <div className="work-info-text">
                                <img src={leading} alt="icon" />
                                <span>Tasks</span>
                            </div>
                            <div className="work-info-text">
                                <img src={galleryicon} alt="icon" />
                                <span>Work logs</span>
                            </div>

                            <div className="work-info-text">
                                <img src={chat} alt="icon" />
                                <span>Performance</span>
                            </div>
                            <div className="work-info-text">
                                <img src={leading} className='settings-icon' alt="icon" />
                                <span>Settings</span>
                            </div>
                        </div>

      {/* Main Content Section */}
      <div className="main-content">
       
        {/* Content Rendered from Routes */}
        <main>
          <Outlet /> {/* This will render the current page based on routing */}
        </main>
      </div>
    </div>
        </div>
        </div>
        </section>
    
  );
};

export default Sidebar;
