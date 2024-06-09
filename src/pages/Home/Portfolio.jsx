import { useEffect, useState } from "react";

const Portfolio = () => {
    const [PortfolioData, setPortfolioData] = useState([]);
    const [currentKey, setCurrentKey] = useState('ALL');
    const Portfolio = [
        {
            category: "DESIGN",
            img: "/images/product-1.jpg"
        },
        {
            category: "DEVELOPER",
            img: "/images/product-2.jpg"
        },
        {
            category: "BRANDING",
            img: "/images/product-3.jpg"
        },
        {
            category: "SOLUTION",
            img: "/images/product-4.jpg"
        },
        {
            category: "DESIGN",
            img: "/images/product-5.jpg"
        },
    ];

    useEffect(() => {
        console.log(currentKey);
        if(currentKey === 'ALL') {
            setPortfolioData(Portfolio.slice(0,2))
        }
        else {
            const filter = Portfolio.filter((item) => {
                return item.category === currentKey;
            })
            setPortfolioData(filter)
        }
        
      },[currentKey]);

    const updateCurrentKey = (text) => {
        setCurrentKey(text)
      }

    return (
    <>
    <div className="row portfolio animation in-view fadeup w-100">
                <div className="text-center py-5 animation in-view fadeup">
                    <h2 className="color-text fw-normal ">Our Portfolio</h2>
                    <p className="desc-choose">Lorem ipsum dolor sit amet</p>
                    <div className="d-flex gap-4 justify-content-center pt-4 flex-wrap"> 
                        <span onClick={() => updateCurrentKey('ALL')} className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " >All</span>
                        <span onClick={() => updateCurrentKey('DESIGN')} className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " >App Design</span>
                        <a onClick={() => updateCurrentKey('DEVELOPER')}  className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " >App Developer</a>
                        <a onClick={() => updateCurrentKey('BRANDING')}  className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " >Branding</a>
                        <a onClick={() => updateCurrentKey('SOLUTION')}  className="bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  " >It Solutions</a>
                    </div>
                </div>

                {PortfolioData.map( (item) => (
                    <div className="col-md-4 col-12 my-2">
                        <a href="#">
                            <div className="overflow-hidden rounded-3">
                                <img className="product-img img-fluid " src={item.img} alt="" />
                            </div>
                        </a>
                    </div>
                ))}
                
                
                
                
            </div>
    </>
    )
}

export default Portfolio;