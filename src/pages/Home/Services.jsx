import { useInView } from "react-intersection-observer";
import TestimonailSlider from "./TestimonialSlider";

const Services = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
    return (
        <>
             <div className="container w-100 d-flex justify-content-center align-items-center flex-column">
            <div  className={`row pt-5 animation ${inView ? 'in-view' : ''}  w-100 fadeup`}>
                <div ref={ref} className="col-md-4 col-12">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center   p-4 rounded-3">
                            <img className="icon-service pb-4" src="/images/service-design.svg" alt="" />
                            <h3 className="color-text ">Application Design</h3>
                            <p className="">Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center  p-4 rounded-3">
                            <img className="icon-service pb-4" src="/images/service-hosting.svg" alt="" />
                            <h3 className="color-text ">Web Hosting</h3>
                            <p className="">Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center  p-4 rounded-3">
                            <img className="icon-service pb-4" src="/images/service-social.svg" alt="" />
                            <h3 className="color-text ">Social Media</h3>
                            <p className="">Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center  p-4 rounded-3">
                            <img className="icon-service pb-4" src="/images/service-seo.svg" alt="" />
                            <h3 className="color-text ">SEO Optimization</h3>
                            <p className="">Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center  p-4 rounded-3">
                            <img className="icon-service pb-4" src="/images/service-cloud.svg" alt="" />
                            <h3 className="color-text ">Cloud Server</h3>
                            <p className="">Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12">
                    <a className="text-decoration-none p-2" href="#">
                        <div className="scale text-center  p-4 rounded-3">
                            <img className="icon-service pb-4" src="/images/service-secure.svg" alt="" />
                            <h3 className="color-text ">Data Secuity</h3>
                            <p className="">Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </a>
                </div>
                
                
            </div>

            <div className="row why-choose py-5 w-100">
                <div className="text-center animation in-view fadeup">
                    <h2 className="color-text fw-normal ">Why Choose Us</h2>
                    <p className="desc-choose">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="col-md-4 col-12">
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div className="text-end">
                            <h4>Experience</h4>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <img className="icon-choose ms-3" src="/images/icon-1.svg" alt="" />
                        </div>
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div className="text-end">
                            <h4>Products</h4>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <img className="icon-choose ms-3" src="/images/icon-2.svg" alt="" />
                        </div>
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div className="text-end">
                            <h4>Approach</h4>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="">
                            <img className="icon-choose ms-3 " src="/images/icon-3.svg" alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
                    <div className="icon-center animation in-view fadeup">
                        <img className="rounded-5" src="/images/features.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div>
                            <img className="icon-choose me-3" src="/images/icon-4.svg" alt="" />
                        </div>
                        <div>
                            <h4>Pricing</h4>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div>
                            <img className="icon-choose me-3" src="/images/icon-5.svg" alt="" />
                        </div>
                        <div>
                            <h4>Delivery</h4>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        
                    </div>
                    <div className="d-flex mb-4 animation in-view fadeup">
                        <div>
                            <img className="icon-choose me-3" src="/images/icon-6.svg" alt="" />
                        </div>
                        <div>
                            <h4>Support</h4>
                            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="row portfolio animation in-view fadeup w-100">
                <div className="text-center py-5 animation in-view fadeup">
                    <h2 className="color-text fw-normal ">Our Portfolio</h2>
                    <p className="desc-choose">Lorem ipsum dolor sit amet</p>
                    <div className="d-flex gap-4 justify-content-center pt-4 flex-wrap"> 
                        <a className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " href="#">All</a>
                        <a className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " href="#">App Design</a>
                        <a className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " href="#">App Developer</a>
                        <a className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " href="#">Branding</a>
                        <a className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " href="#">It Solutions</a>
                    </div>
                </div>
                <div className="col-md-4 col-12 my-2">
                    <a href="#">
                        <div className="overflow-hidden rounded-3">
                            <img className="product-img img-fluid " src="/images/product-1.jpg" alt="" />
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-2">
                    <a href="#">
                        <div className="overflow-hidden rounded-3">
                            <img className="product-img img-fluid " src="/images/product-2.jpg" alt="" />
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-2">
                    <a href="#">
                        <div className="overflow-hidden rounded-3">
                            <img className="product-img img-fluid " src="/images/product-3.jpg" alt="" />
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-2">
                    <a href="#">
                        <div className="overflow-hidden rounded-3">
                            <img className="product-img img-fluid " src="/images/product-4.jpg" alt="" />
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-2">
                    <a href="#">
                        <div className="overflow-hidden rounded-3">
                            <img className="product-img img-fluid " src="/images/product-5.jpg" alt="" />
                        </div>
                    </a>
                </div>
                <div className="col-md-4 col-12 my-2">
                    <a>
                        <div className="overflow-hidden rounded-3">
                            <img className="product-img img-fluid " src="/images/product-6.jpg" alt="" />
                        </div>
                    </a>
                </div>
                
                
                
            </div>

            <div className="row plans w-100">
                <div className="text-center py-5">
                    <h2 className="color-text fw-normal ">Pricing Plans</h2>
                    <p className="desc-choose">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="col-md-4 col-12">
                    <div className="text-center product-img  py-5"> 
                        <h4 className="fs-2">Basic</h4>
                        <p className="price"><span className="dollar">$</span>25</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Unlimited GB Space</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>30 Domain Names</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free SSL</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Daily Backup</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free Templates</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free Email</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>10 Databases</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Unlimited Email Address</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Live Support</p>
                        <a className="bg-btn text-white fs-5 mt-2 d-inline-block text-decoration-none text-center rounded-5  " href="#">Get Quotes</a>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="text-center product-img  py-5"> 
                        <h4 className="fs-2">Basic</h4>
                        <p className="price"><span className="dollar">$</span>25</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Unlimited GB Space</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>30 Domain Names</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free SSL</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Daily Backup</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free Templates</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free Email</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>10 Databases</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Unlimited Email Address</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Live Support</p>
                        <a className="bg-btn text-white fs-5 mt-2 d-inline-block text-decoration-none text-center rounded-5  " href="#">Get Quotes</a>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="text-center product-img  py-5"> 
                        <h4 className="fs-2">Basic</h4>
                        <p className="price"><span className="dollar">$</span>25</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Unlimited GB Space</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>30 Domain Names</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free SSL</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Daily Backup</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free Templates</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Free Email</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>10 Databases</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Unlimited Email Address</p>
                        <p><i className="bi bi-check-circle pe-1 m-0" ></i>Live Support</p>
                        <a  className="bg-btn text-white fs-5 mt-2 d-inline-block text-decoration-none text-center rounded-5  " href="#">Get Quotes</a>
                    </div>
                </div>
            </div>
            <TestimonailSlider></TestimonailSlider>
        </div>
        </>
    );
  };
  
  export default Services;