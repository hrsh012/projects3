import React from "react";
import leading from '../../assests/leading.png';
import galleryicon from '../../assests/galleryicon.png';
import chat from '../../assests/chat.png';
import '../details/details.css';
import details from '../../assests/Details.png';
import time from '../../assests/time.png';
import list from '../../assests/list.png';
import Idea from '../../assests/Idea.png';
import pp from '../../assests/pp.png';
import checkmarker from '../../assests/checkmarker.png';
import { Link } from "react-router-dom";
import home3 from '../../assests/home3.svg';


function Details() {
    return (
        <>
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
                                <img src={galleryicon} alt="icon" />
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
                        <div className="project-detail col-md-10">
                            <div className="container">
                                <div className="row ">
                                    <div className="proectss d-flex align-items-center justify-content-between">
                                        <span>Projects / Addodle</span>
                                        <div className="d-flex flex-wrap align-items-center mt-5">
                                            <h3 className="me-3 flex-shrink-1">Timespent</h3>
                                            <h3 className="flex-shrink-1">Deadline</h3>
                                        </div>

                                    </div>
                                    <div className="col-md-12 d-flex align-items-center">
                                        <h6>Addodle</h6>
                                        <img src={details} className="img-fluid ms-3" alt="" />
                                        <div className="track-text  d-flex justify-content-between align-items-start flex-column">
                                            <h5 className="ms-2">ontrack</h5>

                                        </div>

                                    </div>
                                    <div className="table">
                                        <div className="top d-flex  align-items-center justify-content-between">

                                            <div className="main  ">
                                                {/* <img src={Idea} className="img-fluid" alt="Idea" /> */}

                                                <p>Make an Automatic Payment System that enables the design</p>
                                                <strong>#402235 Opened 10 days ago by Yash Ghori</strong> <span>Completed</span><span>Low</span>

                                            </div>
                                            <div className="timer">
                                                <b>00 : 15 : 00</b>
                                                <img src={pp} className="img-fluid" alt="" />
                                                <var>2</var>
                                                <img src={checkmarker} className="img-fluid" alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="table">
                                        <div className="top d-flex  align-items-center justify-content-between">

                                            <div className="main  ">
                                                {/* <img src={Idea} className="img-fluid" alt="Idea" /> */}

                                                <p>Make an Automatic Payment System that enables the design</p>
                                                <strong>#402235 Opened 10 days ago by Yash Ghori</strong> <span>Completed</span><span>Low</span>

                                            </div>
                                            <div className="timer">
                                                <b>00 : 15 : 00</b>
                                                <img src={pp} className="img-fluid" alt="" />
                                                <var>2</var>
                                                <img src={checkmarker} className="img-fluid" alt="" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="table">
                                        <div className="top d-flex  align-items-center justify-content-between">

                                            <div className="main  ">
                                                {/* <img src={Idea} className="img-fluid" alt="Idea" /> */}

                                                <p>Make an Automatic Payment System that enables the design</p>
                                                <strong>#402235 Opened 10 days ago by Yash Ghori</strong> <span>Completed</span><span>Low</span>

                                            </div>
                                            <div className="timer">
                                                <b>00 : 15 : 00</b>
                                                <img src={pp} className="img-fluid" alt="" />
                                                <var>2</var>
                                                <img src={checkmarker} className="img-fluid" alt="" />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="table">
                                        <div className="top d-flex  align-items-center justify-content-between">

                                            <div className="main  ">
                                                {/* <img src={Idea} className="img-fluid" alt="Idea" /> */}

                                                <p>Make an Automatic Payment System that enables the design</p>
                                                <strong>#402235 Opened 10 days ago by Yash Ghori</strong> <span>Completed</span><span>Low</span>

                                            </div>
                                            <div className="timer">
                                                <b>00 : 15 : 00</b>
                                                <img src={pp} className="img-fluid" alt="" />
                                                <var>2</var>
                                                {/* <img src={checkmarker} className="img-fluid" alt="" /> */}
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
export default Details;