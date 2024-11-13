import React from "react";
import Icon from '../assests/Icon.png';
import notification from "../assests/notification.png";
import profilepicture from '../assests/profilepicture.png';
import '../profile/profile.css';
import leading from '../assests/leading.png';
import galleryicon from '../assests/galleryicon.png';
import Document from '../assests/Document.png';
import chat from '../assests/chat.png';
import Avatar from '../assests/Avatar.png';
import user from '../assests/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Imagem from '../assests/Imagem.png';
import man from '../assests/man.png';
import man2 from '../assests/man2.png';
import lady from '../assests/lady.png';
import girl3 from '../assests/girl3.png';
import man3 from '../assests/man3.png';
import pumpkin from '../assests/pumpkin.png';
import circle from '../assests/circle.png';
import { Link } from "react-router-dom";
import home3 from '../assests/home3.svg';

function Profile() {
    return (
        <>
            {/* <section className="navv-sec">
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
                            className="work-info-main col-md-2 col-lg-2 shadow collapse "
                            id="sidebar"
                        >
                             <div className="work-info-text">
                           <img src={home3} alt="icon" style={{ marginLeft: '7px' }} />

                                <Link to="/dashboard">
                                    <span style={{ color: 'black' }}>Home</span>
                                </Link>
                            </div>
                            <div className="work-info-text">
                                <img src={leading} alt="icon" />
                                <a href="/projects">
                                    <span style={{ color: 'black' }}>Project</span>
                                </a>
                            </div>
                            <div className="work-info-text">
                                <img src={galleryicon} alt="icon" />
                                <a href="/task">
                                    <span style={{ color: 'black' }}>Tasks</span>
                                </a>
                            </div>
                            <div className="work-info-text">
                                <img src={galleryicon} alt="icon" />
                                <a href="/worklog">
                                    <span style={{ color: 'black' }}>Worklogs</span>
                                </a>
                            </div>
                            <div className="work-info-text">
                                <img src={chat} alt="icon" />
                                <a href="/user">
                                    <span style={{ color: 'black' }}>performance</span>
                                </a>
                            </div>
                            <div className="work-info-text">
                                <img src={leading} className='settings-icon' alt="icon" />
                                <span>Settings</span>
                            </div>
                        </div>
                        <div className="profile-sec col-md-10">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 col-lg-3 col-sm-12 col-xs-12">
                                        <div className="profile-content">
                                            <img src={Avatar} alt="icon" />
                                            <h1>Yash Gori</h1>
                                            <span>Ahmedabad, Gujarat</span>
                                            <span>India</span>
                                            <div className="hr mt-2"></div>
                                            <div className="profile-text">
                                                <FontAwesomeIcon icon={faUser} className="fauser" />
                                                <h4 className="mt-1">Ui-intern</h4>
                                            </div>
                                            <div className="profile-text">
                                                <FontAwesomeIcon icon={faUser} className="fauser" />
                                                <h4 className="mt-1">Ui-intern</h4>
                                            </div>
                                            <div className="hr mt-2"></div>
                                            <div className="profile-text">
                                                <FontAwesomeIcon icon={faUser} className="fauser" />
                                                <h4 className="mt-1">Ui-intern</h4>
                                            </div>
                                            <div className="profile-text">
                                                <FontAwesomeIcon icon={faUser} className="fauser" />
                                                <h4 className="mt-1">Ui-intern</h4>
                                            </div>
                                            <div className="profile-text">
                                                <FontAwesomeIcon icon={faUser} className="fauser" />
                                                <h4 className="mt-1">Ui-intern</h4>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-7 col-lg-5 col-sm-12 col-xs-12">
                                        <div className="ui-developer">
                                            <div className="ui-text">
                                                <span>inicio Profile</span>
                                                <h1>UI Developer</h1>
                                                <p>Lorem Ispum is the best sentence in the world of dummy text </p>
                                                <div className="worked-text d-flex justify-content-between align-items-center flex-wrap">
                                                    <h5 className="title">Worked with</h5>
                                                    <h4>View All</h4>
                                                </div>
                                                <div className="main-img-sec d-flex flex-wrap justify-content-between">
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={Imagem} alt="icon" className="img-fluid" />
                                                        <h3>Addodle</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={man} alt="icon" className="img-fluid" />
                                                        <h3>Marketplace</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={man2} alt="icon" className="img-fluid" />
                                                        <h3>Von Dracula</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={lady} alt="icon" className="img-fluid" />
                                                        <h3>Akali Jin</h3>
                                                    </div>
                                                </div>

                                                <div className="main-img-sec d-flex flex-wrap justify-content-between">
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={Imagem} alt="icon" className="img-fluid" />
                                                        <h3>Addodle</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={man} alt="icon" className="img-fluid" />
                                                        <h3>Marketplace</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={man2} alt="icon" className="img-fluid" />
                                                        <h3>Von Dracula</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={lady} alt="icon" className="img-fluid" />
                                                        <h3>Akali Jin</h3>
                                                    </div>
                                                </div>
                                                <div className="main-img-sec d-flex flex-wrap justify-content-between">
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={Imagem} alt="icon" className="img-fluid" />
                                                        <h3>Addodle</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={man} alt="icon" className="img-fluid" />
                                                        <h3>Marketplace</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={man2} alt="icon" className="img-fluid" />
                                                        <h3>Von Dracula</h3>
                                                    </div>
                                                    <div className="profile-images text-center mb-3">
                                                        <img src={lady} alt="icon" className="img-fluid" />
                                                        <h3>Akali Jin</h3>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-7 col-lg-4 col-sm-12 col-xs-12">
                                        <div className="projects1">
                                            <div className="projects-content d-flex flex-column flex-md-row justify-content-between align-items-start flex-wrap">
                                                <h5 className="title">Projects</h5>
                                                <h4>View All</h4>


                                                <div className="project-images d-flex flex-wrap justify-content-center w-100">
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={girl3} alt="icon" className="img-fluid" />
                                                        <h3>Emo stuff</h3>
                                                    </div>
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={man3} alt="icon" className="img-fluid" />
                                                        <h3>Tim Burton</h3>
                                                    </div>
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={pumpkin} alt="icon" className="img-fluid" />
                                                        <h3>Halloween!</h3>
                                                    </div>
                                                </div>

                                                <div className="project-images d-flex flex-wrap justify-content-center w-100">
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={girl3} alt="icon" className="img-fluid" />
                                                        <h3>Emo stuff</h3>
                                                    </div>
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={man3} alt="icon" className="img-fluid" />
                                                        <h3>Tim Burton</h3>
                                                    </div>
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={pumpkin} alt="icon" className="img-fluid" />
                                                        <h3>Halloween!</h3>
                                                    </div>
                                                </div>

                                                <div className="project-images d-flex flex-wrap justify-content-center w-100">
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={girl3} alt="icon" className="img-fluid" />
                                                        <h3>Emo stuff</h3>
                                                    </div>
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={man3} alt="icon" className="img-fluid" />
                                                        <h3>Tim Burton</h3>
                                                    </div>
                                                    <div className="first-image text-center mb-3 col-12 col-sm-6 col-md-4">
                                                        <img src={pumpkin} alt="icon" className="img-fluid" />
                                                        <h3>Akali Jin</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                            <div className="projects1">
                                                <div className="projects-content d-flex justify-content-between align-items-center flex-wrap">
                                                    <h5 className="title">Total Work Done</h5>

                                                    <div className="dropdown">
                                                        <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            This week
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                        </ul>
                                                    </div>


                                                    <div className=" col-md-12 circle-image d-flex justify-content-center align-items-center">
                                                        <img src={circle} alt="icon" className="img-fluid" />
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
export default Profile;