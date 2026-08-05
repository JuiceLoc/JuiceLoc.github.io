window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de Zoom-out al estilo Rockstar Games para la portada inicial
    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            gsap.to('.hero-screen', {
                scale: 0.65,            // Se aleja en el eje Z
                opacity: 0,             // Se desvanece
                filter: 'blur(10px)',   // Desenfoque de cámara en movimiento
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: '.hero-pinned-wrapper',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.5,         // Animación fluida atada a la rueda del ratón
                    pin: true,          // Mantiene fija la portada mientras hace la animación
                    pinSpacing: false   // Permite que el resto del sitio suba naturalmente
                }
            });
        }
    });
});
