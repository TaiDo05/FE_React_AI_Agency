const Contact = () => {
    return (
        <>
        <div class="container">
            <div class="text-center py-5">
                <h2 class="color-text fw-normal ">Contact Us</h2>
                <p class="desc-choose">Lorem ipsum dolor sit amet</p>
            </div>
            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="mb-4 address">
                        <p class="m-0">Address:</p>
                        <p class="m-0">11 West Town</p>
                        <p class="m-0">PBo 12345, United States</p>
                    </div>
                    <div class="mb-4 phone">
                        <p class="m-0">Phone:</p>
                        <p class="m-0">+1 1234 56 789</p>
                        <p class="m-0">+1 1234 56 780</p>
                    </div>
                    <div class="mb-4 email">
                        <p class="m-0">Phone:</p>
                        <p class="m-0">info@example.com</p>
                        <p class="m-0">email@example.com</p>
                    </div>
                    
                </div>
                <div class="col-md-8 col-12">
                    <form action="#" method="POST">
                        <div class="row">
                            <div class="col-md-6 col-12 py-3 ">
                                <input type="text" placeholder="Name*"  class="form-input w-100" />
                            </div>
                            <div class="col-md-6 col-12 py-3 ">
                                <input type="text" placeholder="Email*"  class="form-input w-100" />
                            </div>
                            <div class="col-12 mt-4">
                                <input type="text" placeholder="Subject"  class="form-input w-100" />
                            </div>
                            <div class="col-12 mt-4">
                                <textarea rows="6" placeholder="Write your messages*" name="message" id="message" class="form-input w-100"></textarea>
                            </div>
                            <div class="">
                                <button class=" _px-[45px] _py-[13px] bg-btn border-0 text-white  text-center rounded-5 mt-4 d-inline-block">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;