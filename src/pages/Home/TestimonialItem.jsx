const TestimonialItem = (props) => {

    const {img, name, position, quote} = props
    return (
        <>
            <div className="swiper-slide px-3">
                <div className=" p-4 rounded-4 scale ">
                    <div className="d-flex w-100 align-items-center">
                        <img className="scale rounded-circle img-fluid me-3" src={img} alt="" />
                        <div>
                            <h3 className="testimonial-name m-0 color-text">{name}</h3>
                            <p className="">{position}</p>
                            <div className="stars text-warning">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-4">
                            <i className="bi bi-quote quote-left  color-text"></i>
                            {quote}
                            <i className="bi bi-quote quote-right color-text "></i>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TestimonialItem;