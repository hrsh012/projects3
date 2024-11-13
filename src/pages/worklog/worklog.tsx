import React from "react";
import '../worklog/worklog.css';
import leading from '../../assests/leading.png';
import galleryicon from '../../assests/galleryicon.png';
import chat from '../../assests/chat.png';
import staticlley from '../../assests/staticlley.png';
import africangirl from '../../assests/africangirl.png';
import { Link } from 'react-router-dom';
import logs from '../../assests/logs.png';
import home3 from '../../assests/home3.svg';

function Worklog() {
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



                        <div className="work-logs col-md-5 col-lg-6  col-sm-6">
                            <div className="work-logs-content">
                                <div className="work-logs-item mt-5">
                                    <span>05 Nov 2022</span>
                                    <p>Make an Automatic Payment system that enables the device</p>
                                </div>
                                <div className="work-logs-item">
                                    <span>05 Nov 2022</span>
                                    <p>Make an Automatic Payment system that enables the device</p>
                                </div>
                                <div className="work-logs-item">
                                    <span>05 Nov 2022</span>
                                    <p>Make an Automatic Payment system that enables the device</p>
                                </div>
                                <div className="work-logs-item">
                                    <span>05 Nov 2022</span>
                                    <p>Make an Automatic Payment system that enables the device</p>
                                </div>
                                <div className="work-logs-item">
                                    <span>05 Nov 2022</span>
                                    <p>Make an Automatic Payment system that enables the device</p>
                                </div>
                            </div>
                        </div>
                        <div className="chart col-md-4 col-lg-3  col-sm-6">
                            <div className="chart-main">
                                <h1>Total Worklog</h1>
                                <div className="chart-img">
                                    <img src={staticlley} alt="static-img" className="img-fluid" />
                                </div>

                            </div>
                            <div className="notfication-main d-flex justify-content-between align-items-start flex-column">
                                <div className="notification-header d-flex flex-column flex-lg-row justify-content-between w-100">
                                    <span className="notification-text">Notification</span>
                                    <span className="view-all">View all</span>
                                </div>

                                <div className="notification-img">
                                    <img src={africangirl} alt="African Girl" />
                                    <div className="text-container">
                                        <h6>Ellie joined team developers</h6>
                                        <h5>04 April, 2021 | 04:00 PM</h5>
                                    </div>


                                </div>
                                <div className="notification-img">
                                    <img src={africangirl} alt="African Girl" />
                                    <div className="text-container">
                                        <h6>Jenny joined team HR</h6>
                                        <h5>04 April, 2021 | 04:00 PM</h5>
                                    </div>


                                </div>
                                <div className="notification-img">
                                    <img src={africangirl} alt="African Girl" />
                                    <div className="text-container">
                                        <h6>Ellie joined team developers</h6>
                                        <h5>04 April, 2021 | 04:00 PM</h5>
                                    </div>


                                </div>
                                <div className="notification-img">
                                    <img src={africangirl} alt="African Girl" />
                                    <div className="text-container">
                                        <h6>Ellie joined team developers</h6>
                                        <h5>04 April, 2021 | 04:00 PM</h5>
                                    </div>


                                </div>
                                <div className="notification-img">
                                    <img src={africangirl} alt="African Girl" />
                                    <div className="text-container">
                                        <h6>Ellie joined team developers</h6>
                                        <h5>04 April, 2021 | 04:00 PM</h5>
                                    </div>


                                </div>
                                <div className="notification-img">
                                    <img src={africangirl} alt="African Girl" />
                                    <div className="text-container">
                                        <h6>Ellie joined team developers</h6>
                                        <h5>04 April, 2021 | 04:00 PM</h5>
                                    </div>


                                </div>
                                <div className="notification-img">
                                    <img src={africangirl} alt="African Girl" />
                                    <div className="text-container">
                                        <h6>Ellie joined team developers</h6>
                                        <h5>04 April, 2021 | 04:00 PM</h5>
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
export default Worklog;