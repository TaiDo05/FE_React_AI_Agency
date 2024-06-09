import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  useEffect ( () => {
    const observerOptions = {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    window.addEventListener('DOMContentLoaded', (event) => {
    
    const sections = Array.from(document.querySelectorAll(".animation"));
    console.log(sections);
    for (let section of sections) {
    observer.observe(section);
    }
    
    });
  }, []);

  return (
    <>
          <header>
        <div className="header-fix vw-100 position-fixed z-3 ">
            <nav className="navbar navbar-expand-lg navbar-dark   ">
                <div className="container">
                <a className="navbar-brand me-0 mw " href="#">
                    <img className="img-fluid w-50" src="/images/logo.png" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse W-100" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2  mb-lg-0 d-flex justify-content-between w-100 align-items-center">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Testimonails</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Team</a>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="dropdown"></div>
                                <a className="nav-link dropbtn " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu <i className="bi bi-chevron-down "  ></i>
                                </a>
                                <div className="dropdown-content">
                                  <a href="#">About</a>
                                  <a href="#">Pricing</a>
                                  <a href="#">FAQs</a>
                                  <a href="#">Terms & Conditions</a>
                                  <a href="#">Privacy & Policy</a>
                                  <a href="#">Blogs</a>
                                  <a href="#">Bolg Detail Page</a>
                                </div>
                           
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">News</a>
                        </li>
                        <li>
                            <a className="bg-btn text-white text-decoration-none text-center rounded-5  " href="#">Get Quotes</a>
                        </li>
                        <li className="nav-item">
                            <button className="moon  m-3 border-0 d-flex justify-content-center align-items-center rounded-circle">
                                <i className="bi bi-moon-fill"></i>
                            </button>
                        </li>
                    </ul>
                    
                </div>
                </div>
            </nav>
        </div>
        
    </header>
    <div className="main vw-100 overflow-hidden">
      <Outlet />
    </div>
      <footer>
        <div className=" sub-banner mt-5">
            <div className="container ">
                <div className="row position-relative w-100">
                    <div className="col-md-4 col-12 p-0">
                        <div className="px-3">
                            <img className="img-fluid w-50" src="/images/logo.png" alt="" />
                            <p className="text-white mt-4 lh-lg">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                            <h4 className="color-text">Follow us</h4>
                            <div className="text-white mt-4 d-flex gap-4">
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
                                        <p className="m-0">101 West Town , PBO 12345, United States</p>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center text-white ">
                                        <i className="bi bi-telephone-inbound-fill pe-1"></i>
                                        <p className="m-0">+1 1234 56 789</p>
                                    </li>
                                    <li className="mb-2 d-flex align-items-center text-white ">
                                        <i className="bi bi-envelope-fill pe-1"></i>
                                        <p className="m-0">contact@example.com</p>
                                    </li>
                                </ul>
                                <h4 className="color-text mb-3">Newsletter</h4>
                                <p className="text-white">Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                                <div className="position-relative d-flex align-items-center">
                                    <input type="text" className="rounded-5 py-3 ps-4 w-100" placeholder="Email Address" />
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