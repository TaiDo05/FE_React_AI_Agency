import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SubBanner = () => {
    const [inViewClass, setInViewClass] = useState("");
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

      useEffect(() => {
        if(inView && inViewClass == "") {
            setInViewClass("in-view");
            counterUp();

        }
      }, [inView])

      const counterUp = () => {
        const counters = document.querySelectorAll('[data-toggle="counter-up"]');

        counters.forEach(counter => {
            const target = +counter.innerText;
            const duration = 3000; 
            const delay = 10; 
            const increment = target / (duration / delay);
            let count = 0;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, delay);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
      }

    return (
        <>
        <div ref={ref} class=" sub-banner mt-5 w-100">
            <div class="container">
                <div class="row animation in-view fadeup w-100">
                    <div class="col-md-4 col-12 position-relative">
                        <div class="text-center">
                            <img src="/images/happy-clients.svg" alt="" />
                            <h3 class="counter color-text" data-toggle="counter-up"> 232</h3>
                            <h3 class="color-text">Happy Clients</h3>
                            <p class="text-white">consequuntur quae diredo</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 position-relative">
                        <div class="text-center">
                            <img src="/images/complete-projects.svg" alt="" />
                            <h3 class="counter color-text" data-toggle="counter-up"> 521</h3>
                            <h3 class="color-text">Completed Projects</h3>
                            <p class="text-white">consequuntur quae diredo</p>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-12 position-relative">
                        <div class="text-center">
                            <img src="/images/hours-support.svg" alt="" />
                            <h3 class="counter color-text" data-toggle="counter-up"> 453</h3>
                            <h3 class="color-text">Hours Of Support</h3>
                            <p class="text-white">consequuntur quae diredo</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default SubBanner;