// src/components/Layout.tsx
import React from 'react'; // Make sure this import is here if you're using React < 17
import { Outlet, Link } from 'react-router-dom';

import Icon from '../../assests/Icon.png';
import notification from '../../assests/notification.png';
import profilepicture from '../../assests/profilepicture.png';
import bell from '../../assests/bell.svg';
import '../navbar/navbar.css';

const Layout = () => {
  return (
    <div>
      {/* Navbar Section */}
      <section className="navv-sec">
                <nav className="navbar navbar-expand-lg bg-white rounded shadow">
                    <div className="container-fluid">
                        <img src={Icon} alt="icon" />
                        <a className="navbar-brand" href="/dashboard">AProjectO</a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#sidebar"
                            aria-controls="sidebar"
                            aria-expanded="false"
                            aria-label="Toggle sidebar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <form className="input-form d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search For Anything...."
                                    aria-label="Search"
                                />
                                <img src={bell} alt="icon" />
                            </form>
                            <div className="profile-text">
                                <span>Anima Agarwal</span>
                                <h6>Up, India</h6>
                            </div>
                            <div className="profile-image">
                                <img src={profilepicture} alt="icon" />
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

      {/* Main Content */}
      <main>
        <Outlet /> {/* This renders the content of the route being visited */}
      </main>
    </div>
  );
};

export default Layout;
