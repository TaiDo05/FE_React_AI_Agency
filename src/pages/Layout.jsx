import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

const Layout = () => {
    

    return (
        <>
            <CustomNavbar />
            <div className="main vw-100 overflow-hidden">
                <Outlet />
            </div>
            <footer>
                <div className=" sub-banner mt-5">
                    <div className="container px-2 ">
                        <div className="row position-relative w-100">
                            <div className="col-md-4 col-12 p-0">
                                <div className="px-3">
                                    <img className="img-fluid w-50" src="/images/logo.png" alt="" />
                                    <p className="text-white mt-4 lh-lg">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                                    <h4 className="color-text">Follow us</h4>
                                    <div className="text-white my-4 d-flex gap-4">
                                        <a><i className="bi bi-twitter"></i></a>
                                        <a><i className="bi bi-facebook"></i></a>
                                        <a><i className="bi bi-linkedin"></i></a>
                                        <a><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <div className="row">
                                    <div className="col-md-3 col-12 ">
                                        <h4 className="color-text mb-3">Services</h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Web Design</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">App Developemnt</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">App Developemnt</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Domain Adn Hosting</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Seo Optimization</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Social Media
                                            </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-12 ">
                                        <h4 className="color-text mb-3">Information</h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">
                                                About</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Pricing</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Team</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Portfolio</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">FAQs</a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Team
                                            </a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Blogs
                                            </a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Blog Details
                                            </a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Coming Soon
                                            </a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Terms & Conditions
                                            </a></li>
                                            <li className="mb-2"><a className="fw-normal text-white text-decoration-none" href="#">Privacy Policy
                                            </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-12 ">
                                        <h4 className="color-text mb-3">Contacts</h4>
                                        <ul className="list-unstyled">
                                            <li className="mb-2 d-flex align-items-center text-white ">
                                                <i className="bi bi-geo-alt-fill  pe-1"></i>
                                                <p className="m-0 text-white">101 West Town , PBO 12345, United States</p>
                                            </li>
                                            <li className="mb-2 d-flex align-items-center text-white ">
                                                <i className="bi bi-telephone-inbound-fill pe-1"></i>
                                                <p className="m-0 text-white">+1 1234 56 789</p>
                                            </li>
                                            <li className="mb-2 d-flex align-items-center text-white ">
                                                <i className="bi bi-envelope-fill pe-1"></i>
                                                <p className="m-0 text-white">contact@example.com</p>
                                            </li>
                                        </ul>
                                        <h4 className="color-text mb-3">Newsletter</h4>
                                        <p className="text-white">Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        <div className="position-relative d-flex align-items-center">
                                            <input type="text" className="rounded-5 py-3 border-0 bg-white ps-4 w-100" placeholder="Email Address" />
                                            <button className="send position-absolute  rounded-circle bg-primary border-0 d-flex justify-content-center align-items-center">
                                                <i className="bi bi-send-fill text-white "></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll">
                    <div className="scroll-top rounded-circle d-flex justify-content-center align-items-center  bg-btn ">
                        <span className="animation-ping"></span>
                        <a href="#"><i className="bi bi-chevron-up text-white fs-5"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Layout;