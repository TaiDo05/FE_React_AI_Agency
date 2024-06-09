const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
    },
    
    breakpoints: {

        320: {
          slidesPerView: 1,
        },

        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
  });

  const swiperCompany = new Swiper('.slideCompany', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 5,
    breakpoints: {

        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },

        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },

        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
    }
  });

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

for (let section of sections) {
observer.observe(section);
}

});

document.addEventListener("DOMContentLoaded", () => {
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
});


window.addEventListener('scroll', function() {
  let header = document.querySelector(".header-fix")
  let navLink = document.querySelectorAll(".nav-link")
  const scrollTop = document.querySelector(".scroll-top")
  if (window.scrollY > 100) { // Thay đổi số pixel tùy ý bạn muốn
      header.style.background = "white"
      navLink.forEach(element => {
        element.style.color = "black";
      });
      scrollTop.style.transform = "translateY(0px)"
      
  } else {
    header.style.background = "none"
    navLink.forEach(element => {
      element.style.color = "white";
    });
    scrollTop.style.transform = "translateY(100px)"
  }
});
const box = document.querySelectorAll(".scale")
const text = document.querySelectorAll("p")
const subtext = document.querySelectorAll("h4")
const moon = document.querySelector(".moon");
const testimonial = document.querySelectorAll(".shado")
const getPrice = document.querySelectorAll(".plans .product-img")
const body = document.querySelector("body")
const blog = document.querySelectorAll(".blog-items")
moon.addEventListener("click", function () {
  if(!moon.classList.contains("dark")) {
    body.style.background = "black"
    text.forEach(element => {
      element.style.color = "white"
    });
    subtext.forEach(element => {
      element.style.color = "white"
    });
    box.forEach(element => {
      element.style.background = "black"
      element.classList.add("boxshadow")
    });
    getPrice.forEach(element => {
      element.style.background = "black"
      element.classList.add("boxshadow")
    });
    testimonial.forEach(element => {
      element.style.background = "black"
      element.classList.add("boxshadow")
    });
    blog.forEach(element => {
      element.style.background = "black"
      element.classList.add("boxshadow")
    });
  }else {
    body.style.background = "white"
    text.forEach(element => {
      element.style.color = "black"
    });
    subtext.forEach(element => {
      element.style.color = "black"
    });
    box.forEach(element => {
      element.style.background = "white"
      element.classList.remove("boxshadow")
    });
    getPrice.forEach(element => {
      element.style.background = "white"
      element.classList.remove("boxshadow")
    });
    testimonial.forEach(element => {
      element.style.background = "white"
      element.classList.remove("boxshadow")
      element.classList.add("scale")
    });
    blog.forEach(element => {
      element.style.background = "white"
      element.classList.remove("boxshadow")
    });
  }
  moon.classList.toggle("dark")

})



