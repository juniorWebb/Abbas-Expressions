const faders = document.querySelectorAll(".fade, .fade-in, .fade-up, .links-up, .card-up");

appearOptions = {
  threshold : 0.5,
}

 const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry =>{
    if (!entry.isIntersecting) {
      return;
    } else{
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
 }, appearOptions)

 
faders.forEach(fader => appearOnScroll.observe(fader))