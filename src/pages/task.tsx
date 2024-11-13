import React from "react";
import Icon from '../assests/Icon.png';
import notification from "../assests/notification.png";
import profilepicture from '../assests/profilepicture.png';
import leading from '../assests/leading.png';
import galleryicon from '../assests/galleryicon.png';
import chat from '../assests/chat.png';
import '../pages/task/task.css';
import frame1 from '../assests/frame1.png'
import attachment from '../assests/attachment.png';
import { Link } from "react-router-dom";
import logs from '../assests/logs.png';
import bell from '../assests/bell.svg';
import add from '../assests/add.svg';
import home3 from '../assests/home3.svg';


function Task() {
    return (
        <>
            <section className="work-info-section" >
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
                                <img src={leading} className="settings-icon" alt="icon" />
                                <span>Settings</span>
                            </div>
                        </div>
                        <div className="tasks-sec col-md-10">
                            <div className="container">
                                <div className="row">
                                    <h1>Tasks</h1>
                                    <div className="background">
                                        <span>Overview</span>
                                        <h3>Edit or modify all card as you want</h3>
                                        <div className="divider"></div>
                                        <div className="col-md-4 mt-5">
                                            <div className="field d-flex mt-2">
                                                <input
                                                    className="form-control"
                                                    type="search"
                                                    placeholder="Search Projects...."
                                                    aria-label="Search"
                                                />
                                                <div className="dropdown ms-4">
                                                    <button
                                                        className="btn btn-secondary dropdown-toggle"
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        List View
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-dark">
                                                        <li><a className="dropdown-item active" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Backlog</h5>

                                                        <button>+</button>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                                Food Research
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Food design is required for our new project
                                                                let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={add} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>

                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                            Usability Testing
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Food design is required for our new project
                                                                let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={frame1} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                            Food Research
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Food design is required for our new project
                                                                let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={add} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">In progress</h5>

                                                        <button>+</button>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                            User interface
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Design new user interface design for 
                                                            food delivery app  let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={frame1} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                            Usability Testing
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Food design is required for our new project
                                                            let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                            User Feedback
                                                                <img src={add} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                            User Feedback
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Perform the user survey and take necessary 
                                                            steps to solve their problem with existing one
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={add} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Completed</h5>

                                                        <button>+</button>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                            Mind Mapping
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Food design is required for our new project
                                                                let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={add} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                                Food Research
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Food design is required for our new project
                                                                let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={add} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>
                                                        <div className="bg mt-3">
                                                            <h5 className="card-text d-flex justify-content-between mt-3">
                                                            User Feedback
                                                                <span className="ms-auto">12 Days</span>
                                                            </h5>

                                                            <p className="card-p">Food design is required for our new project
                                                                let’s research the best practices.
                                                            </p>

                                                            <h5 className="card-text d-flex justify-content-between align-items-center flex-wrap">
                                                                Food Research
                                                                <img src={add} alt="frame" className="ms-2" />
                                                            </h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


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
export default Task;
