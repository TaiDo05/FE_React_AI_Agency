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
            setPortfolioData(Portfolio)
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
                        <button onClick={() => updateCurrentKey('ALL')} className={`${currentKey === 'ALL' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  `} >All</button>
                        <button onClick={() => updateCurrentKey('DESIGN')} className={`${currentKey === 'DESIGN' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  `} >App Design</button>
                        <button onClick={() => updateCurrentKey('DEVELOPER')}  className={`${currentKey === 'DEVELOPER' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  `} >App Developer</button>
                        <button onClick={() => updateCurrentKey('BRANDING')}  className={`${currentKey === 'BRANDING' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  `} >Branding</button>
                        <button onClick={() => updateCurrentKey('SOLUTION')}  className={`${currentKey === 'SOLUTION' ? 'active' : ''} bg-btn text-white fs-5 text-decoration-none text-center rounded-5 py-2 px-4  `} >It Solutions</button>
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