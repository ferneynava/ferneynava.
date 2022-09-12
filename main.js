const card = document.querySelector(".wrapper__card");
const imagen_perfil = document.querySelector(".wrapper__image");
const rect = document.body.getBoundingClientRect();
const mitadWidth = rect.width/2;
const mitadHeight =rect.height/2;

window.addEventListener("mousemove", (event) => {
        card.style.transition = "none";
        imagen_perfil.style.transition = "none";

        const offSetX = event.pageX;
        const offSetY = event.pageY;

         const rotationX = ((offSetX -  mitadWidth) /  mitadWidth) * 22;
         const rotationY = ((offSetY -  mitadHeight) / mitadWidth) * 22;

        card.style.transform = "rotateX("+ rotationX + "deg) rotateY("+ rotationY + "deg)";
        imagen_perfil.style.transform = "rotateX("+ rotationX + "deg) rotateY("+ rotationY + "deg)";
        
})

window.addEventListener("mouseout", () => {
        card.style.transition = "transform .5s ease-in-out";
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        
        imagen_perfil.style.transition = "transform .5s ease-in-out";
        imagen_perfil.style.transform = "rotateX(0deg) rotateY(0deg)";
})
