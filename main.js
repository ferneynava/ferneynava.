const wrapper = document.querySelector(".container");
const card = document.querySelector(".card");
const imagen_perfil = document.querySelector(".imagen_perfil");
const namee = document.querySelector(".name");
const rect = wrapper.getBoundingClientRect();
const mitadWidth = rect.width/2;
const mitadHeight = rect.height/2;

wrapper.addEventListener("mousemove", (event) =>{
        card.style.transition = "none";
        imagen_perfil.style.transition = "none";
        namee.style.transition = "none";

        const offSetX = event.offsetX;
        const offSetY = event.offsetY;
        
        const rotationX = ((offSetX - mitadWidth) / mitadWidth) * 9;
        const rotationY = ((offSetY - mitadHeight) / mitadHeight) * 9;

        card.style.transform = "rotateX("+ rotationX + "deg) rotateY("+ rotationY + "deg)";
        imagen_perfil.style.transform = "rotateX("+ rotationX + "deg) rotateY("+ rotationY + "deg)";
        namee.style.transform = "rotateX("+ rotationX + "deg) rotateY("+ rotationY + "deg)";
})

wrapper.addEventListener("mouseleave", () => {
        card.style.transition = "transform .5s ease-in-out";
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        imagen_perfil.style.transition= "transform .5s ease-in-out";
        imagen_perfil.style.transform = "rotateX(0deg) rotateY(0deg)";
        namee.style.transition= "transform .5s ease-in-out";
        namee.style.transform = "rotateX(0deg) rotateY(0deg)";
})
// window.addEventListener("deviceorientation", (event) => {
//         const alpha = event.alpha;
//         const beta = event.alpha;
//         const gamma = event.gamma;

//         const rotationX = ((beta - mitadWidth) / mitadWidth) * 10;
//         const rotationY = ((gamma - mitadHeight) / mitadHeight) * 10;

//         ticket.style.transform = "rotateX("+ rotationX + "deg) rotateY("+ rotationY + "deg)";
        
// })