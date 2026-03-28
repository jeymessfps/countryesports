document.querySelectorAll('nav a').forEach(link=>{

link.addEventListener('click',e=>{

e.preventDefault();

document.querySelector(link.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});


tsParticles.load("particles-bg",{

particles:{

number:{
value:100
},

color:{
value:"#ffffff"
},

links:{
enable:true,
distance:160,
color:"#ffffff",
opacity:0.2
},

move:{
enable:true,
speed:1
},

size:{
value:{min:1,max:3}
},

opacity:{
value:0.4
}

}

});

// ATIVAR GSAP
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".hero h1", {
  y: 80,
  opacity: 0,
  duration: 1,
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// CARDS (efeito profissional)
gsap.from(".player-card", {
  scrollTrigger: {
    trigger: ".player-card",
    start: "top 80%",
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});

// LIDERANÇA
gsap.from(".leader-card", {
  scrollTrigger: {
    trigger: ".leaders",
    start: "top 80%",
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2
});