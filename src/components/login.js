import React from "react";
import icon from '../assests/Icon.png';
import '../App.css';
import frame from '../assests/Frame.png';
import loginimg from '../assests/loginimg.png';
import EyeSlashFill from "../assests/EyeSlashFill.png";
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/dashboard');
    };
    return (
        <>
            <section className="banner-sec">
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="image-container">
                                    <div className="icon-image">
                                        <img src={icon} class="img-fluid" alt="icon-image" />
                                        <h5> AProjectO</h5>
                                    </div>
                                    <div className="product-text">
                                        <div className="container">
                                            <div className="image">
                                                <img src={frame} class="img-fluid" alt="product-image" />
                                                <span className=" mt-4">Asite Product System</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="image-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-image">
                                <img src={loginimg} className="img-fluid" alt="login-img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-heading ">
                                <h1>Welcome back, Yash</h1>
                                <p>Welcome back! Please enter your details.</p>
                            </div>
                            <div className="login-form">
                                <form className="mt-3 form-width w-90">

                                    <input type="text" className="email-input mb-2" placeholder="Email" />
                                    <div className="password mt-4">
                                        <div className="input-wrapper">
                                            <input type="password" placeholder="Password" />
                                            <span class="material-symbols-outlined">
                                                visibility_off
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-check mt-4">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Terms & Condition
                                        </label>
                                        <div className="forget-link">
                                            <a href="#">ForgetPassword</a>
                                        </div>
                                    </div>
                                    <div className="login-button mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-link"
                                            onClick={handleLoginClick}
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div className="account-text">
                                        <span>Don't have a account?</span>  <a href="#">Sign Up For Free</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;