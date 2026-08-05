// Esperamos a que todo cargue
window.addEventListener('load', () => {
    // Registrar ScrollTrigger de GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Solo activamos el efecto zoom en pantallas grandes (Escritorio / Laptops)
    ScrollTrigger.matchMedia({
        "(min-width: 901px)": function() {
            const cards = gsap.utils.toArray('.project.card');

            // Asignar z-index decreciente para apilarlas correctamente
            cards.forEach((card, i) => {
                gsap.set(card, { zIndex: cards.length - i });
            });

            // Crear timeline de animación vinculada al scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.work-pinned-wrapper',
                    start: 'top top+=80',
                    end: () => `+=${cards.length * 100}%`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            });

            // Animación de zoom hacia atrás y desvanecimiento
            cards.forEach((card, index) => {
                if (index < cards.length - 1) {
                    tl.to(card, {
                        scale: 0.75,         // Se encoge simulando alejarse (profundidad)
                        opacity: 0,          // Se desvanece
                        filter: 'blur(8px)', // Efecto adicional de desenfoque al alejarse
                        duration: 1,
                        ease: 'power1.inOut'
                    });
                }
            });
        }
    });
});
