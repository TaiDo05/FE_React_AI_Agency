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
        <div class="blog">
            <div class="container">
                <div class="text-center pt-5">
                    <h2 class="color-text fw-normal ">Blogs</h2>
                    <p class="desc-choose">Lorem ipsum dolor sit amet</p>
                </div>
                <div class="row py-5">
                    {blog.map( (item) => (
                        <div class="col-md-4 col-12">
                                <div class="blog-items rounded-3">
                                <img class="w-100 rounded-3" src={item.img} alt="" />
                                <div class="px-4 py-3">
                                    <p class="m-1">{item.category}</p>
                                    <h3 class="color-text fw-normal fs-4">{item.title}</h3>
                                    <p class="m-0">{item.author}</p>
                                    <p class="date m-0 ">{item.date}</p>
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