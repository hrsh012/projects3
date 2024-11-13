import React from "react";
import Icon from '../assests/Icon.png';
import notification from '../assests/notification.png';
import profilepicture from '../assests/profilepicture.png';
import '../pages/projects.css';
import leading from '../assests/leading.png';
import galleryicon from '../assests/galleryicon.png';
import Document from '../assests/Document.png';
import chat from '../assests/chat.png';
import profiles from '../assests/profiles.png';
import issues from '../assests/issues.png';
import pagination from '../assests/pagination.png';
import filesicon from '../assests/filesicon.png';
import { Link } from "react-router-dom";
import logs from '../assests/logs.png';
import groupimg from '../assests/groupimg.svg';
import folder from '../assests/folder.svg';
import home3 from '../assests/home3.svg';



function Project() {
    return (
        <>
            {/* <section className="navbar-sec">
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
                                <img src={notification} alt="icon" />
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
            </section> */}
            <section className="work-info-section">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="work-info-main col-md-2 shadow collapse"
                            id="sidebar"
                        >
                           <div className="work-info-text">
                           <img src={home3} alt="icon" style={{ marginLeft: '7px' }} />

                                <Link to="/dashboard">
                                <span style={{ color: 'black',  marginLeft: '7px' }}>Home</span>
                                </Link>
                            </div>
                            <div className="work-info-text">
                                <img src={leading} alt="icon" />
                                <Link to="/projects">
                                    <span style={{ color: 'black' }}>projects</span>
                                </Link>
                            </div>
                            <div className="work-info-text">
                                <img src={galleryicon} alt="icon" />
                                <Link to="/task">
                                    <span style={{ color: 'black' }}>Tasks</span>
                                </Link>
                            </div>
                            <div className="work-info-text">
                            <img src={logs} alt="icon" />
                                <Link to="/worklog">
                                    <span style={{ color: 'black' }}>Worklogs</span>
                                </Link>
                            </div>
                            <div className="work-info-text">
                                <img src={chat} alt="icon" />
                                <Link to="/user">
                                    <span style={{ color: 'black' }}>performance</span>
                                </Link>
                            </div>
                            <div className="work-info-text">
                                <img src={leading} className='settings-icon' alt="icon" />
                                <span>Settings</span>
                            </div>
                        </div>
                        <div className="projects-sec col-md-10">
                            <div className="container">
                                <div className="project-row">
                                    <div className="project-text mt-3">
                                        <span>Project</span>
                                    </div>
                                    <div className="project-inputfield mt-3 col-md-3">
                                        <input className="form-control me-2" type="search" placeholder="Search For Anything...." aria-label="Search " />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 mb-2 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title-container d-flex justify-content-between align-items-center flex-wrap">
                                                    <h5 className="card-title">Adoddle</h5>
                                                    <div className="completed-button">
                                                        <button type="button">
                                                            <span >completed</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card-p">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                                <div className="red-color-text">
                                                    <span>Deadline :  05 APRIL 2023</span>
                                                </div>
                                                <div className="card-title-container mt-3 d-flex flex-column flex-sm-row align-items-center flex-wrap">
                                                    <img src={profiles} alt="icon" />
                                                    <button type="button" className="btn mt-2 mt-sm-0 ms-2">
                                                        <img src={folder} alt="icon" /> <span>Issues</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12  mb-2 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title-container d-flex justify-content-between align-items-center flex-wrap">

                                                    <h5 className="card-title">Adoddle</h5>
                                                    <div className="completed-button">
                                                        <button type="button">
                                                            <span >completed</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card-p">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                                <div className="red-color-text">
                                                    <span>Deadline :  05 APRIL 2023</span>
                                                </div>
                                                <div className="card-title-container mt-3 d-flex flex-column flex-sm-row align-items-center flex-wrap">
                                                    <img src={profiles} alt="icon" />
                                                    <button type="button" className="btn mt-2 mt-sm-0 ms-2">
                                                    <img src={folder} alt="icon" />  <span>Issues</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 mb-2 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title-container d-flex justify-content-between align-items-center flex-wrap">
                                                    <h5 className="card-title">Adoddle</h5>
                                                    <div className="completed-button">
                                                        <button type="button">
                                                            <span >completed</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card-p">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                                <div className="red-color-text">
                                                    <span>Deadline :  05 APRIL 2023</span>
                                                </div>
                                                <div className="card-title-container mt-3 d-flex flex-column flex-sm-row align-items-center flex-wrap">
                                                    <img src={groupimg} alt="icon" />
                                                    <button type="button" className="btn mt-2 mt-sm-0 ms-2">
                                                    <img src={folder} alt="icon" />  <span>Issues</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 mb-2 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title-container d-flex justify-content-between align-items-center flex-wrap">
                                                    <h5 className="card-title">Adoddle</h5>
                                                    <div className="completed-button">
                                                        <button type="button">
                                                            <span >completed</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card-p">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                                <div className="red-color-text">
                                                    <span>Deadline :  05 APRIL 2023</span>
                                                </div>
                                                <div className="card-title-container mt-3 d-flex flex-column flex-sm-row align-items-center flex-wrap">
                                                <img src={groupimg} alt="icon" />
                                                    <button type="button" className="btn mt-2 mt-sm-0 ms-2">
                                                    <img src={folder} alt="icon" />  <span>Issues</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 mb-2 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title-container d-flex justify-content-between align-items-center flex-wrap">
                                                    <h5 className="card-title">Adoddle</h5>
                                                    <div className="completed-button">
                                                        <button type="button">
                                                            <span >completed</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card-p">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                                <div className="red-color-text">
                                                    <span>Deadline :  05 APRIL 2023</span>
                                                </div>
                                                <div className="card-title-container mt-3 d-flex flex-column flex-sm-row align-items-center flex-wrap">
                                                <img src={groupimg} alt="icon" />
                                                    <button type="button" className="btn mt-2 mt-sm-0 ms-2">
                                                    <img src={folder} alt="icon" />  <span>Issues</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12 mb-2 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-title-container d-flex justify-content-between align-items-center flex-wrap">
                                                    <h5 className="card-title">Adoddle</h5>
                                                    <div className="completed-button">
                                                        <button type="button">
                                                            <span >completed</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="card-p">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    </p>
                                                </div>
                                                <div className="red-color-text">
                                                    <span>Deadline :  05 APRIL 2023</span>
                                                </div>
                                                <div className="card-title-container mt-3 d-flex flex-column flex-sm-row align-items-center flex-wrap">
                                                <img src={groupimg} alt="icon" />
                                                    <button type="button" className="btn mt-2 mt-sm-0 ms-2">
                                                    <img src={folder} alt="icon" />  <span>Issues</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="paginaton d-flex justify-content-end mt-5">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
export default Project;

