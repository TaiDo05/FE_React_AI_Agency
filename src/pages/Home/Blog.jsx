const Blog = () => {
    const blog = [
        {
            img : "images/blog-1.jpg",
            category : "Domain & Hosting",
            title : "How to host website on any hosting provider?",
            author: "William Bla",
            date: "Feb 1, 2022"

        },
        {
            img : "images/blog-2.jpg",
            category : "Domain & Hosting",
            title : "How to host website on any hosting provider?",
            author: "William Bla",
            date: "Feb 1, 2022"

        },
        {
            img : "images/blog-3.jpg",
            category : "Domain & Hosting",
            title : "How to host website on any hosting provider?",
            author: "William Bla",
            date: "Feb 1, 2022"

        },
    ]
    return(
        <>
        <div className="blog">
            <div className="container">
                <div className="text-center pt-5">
                    <h2 className="color-text fw-normal ">Blogs</h2>
                    <p className="desc-choose">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="row py-5">
                    {blog.map( (item) => (
                        <div className="col-md-4  col-12">
                                <div className="blog-items _shadow-lg rounded-3">
                                <img className="w-100 rounded-3" src={item.img} alt="" />
                                <div className="px-4 py-3">
                                    <p className="m-1">{item.category}</p>
                                    <h3 className="color-text fw-normal fs-4">{item.title}</h3>
                                    <p className="m-0">{item.author}</p>
                                    <p className="date m-0 ">{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}    
                    
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;