import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
// import 'bootstrap-icons/font/bootstrap-icons.css';  // Ensure you have Bootstrap Icons installed and imported

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [isStick, setIsStick] = useState('cs-stick');
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header-fix");
            const navLinks = document.querySelectorAll(".nav-link");
            const scrollTop = document.querySelector(".scroll-top");

            if (header && navLinks && scrollTop) {
                if (window.scrollY > 100) {
                    setIsStick("cs-no-stick");
                    scrollTop.style.transform = "translateY(0px)";
                } else {
                    setIsStick("cs-stick");
                    scrollTop.style.transform = "translateY(100px)";
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`header-fix vw-100 position-fixed z-3 ${isStick} `}>
        <Navbar expanded={expanded} expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img className="img-fluid w-50" src="/images/logo.png" alt="Logo" />
                </Navbar.Brand>
                <button onClick={() => setExpanded(expanded ? false : "expanded")} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="" role="button" >
                        <i class="bi bi-list _text-white" aria-hidden="true" ></i>
                        </span>
                </button>
                {/* <Navbar.Toggle  aria-controls="navbarSupportedContent" onClick={() => setExpanded(expanded ? false : "expanded")} /> */}
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100 align-items-center">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Portfolio</Nav.Link>
                        <Nav.Link href="#">Testimonials</Nav.Link>
                        <Nav.Link href="#">Team</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">About</NavDropdown.Item>
                            <NavDropdown.Item href="#">Pricing</NavDropdown.Item>
                            <NavDropdown.Item href="#">FAQs</NavDropdown.Item>
                            <NavDropdown.Item href="#">Terms & Conditions</NavDropdown.Item>
                            <NavDropdown.Item href="#">Privacy & Policy</NavDropdown.Item>
                            <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
                            <NavDropdown.Item href="#">Blog Detail Page</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">News</Nav.Link>
                        <Button className="bg-btn text-white text-decoration-none text-center rounded-5">Get Quotes</Button>
                        <Button className='bi bi-moon-fill bg-light text-black text-decoration-none text-center rounded-5' />
                            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    );
};

export default CustomNavbar;
