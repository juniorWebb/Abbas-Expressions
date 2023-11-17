const watcher = document.querySelector(".hamburger"); 
const sections = document.querySelectorAll(".section"); 

const observerOptions = {
  root: null,
  threshold: 0.25,
  rootMargin: "-50px 0px 0px 0px",
}

const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    } 
    entry.target.classList.toggle("section");
    observer.unobserve(entry.target);
  })
}, observerOptions);

sections.forEach(section => observer.observe(section))
 ;
