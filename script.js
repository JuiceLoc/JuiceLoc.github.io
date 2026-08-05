window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            gsap.to('.hero-screen', {
                scale: 0.7,             // Reducción suave hacia el fondo
                opacity: 0,             // Desvanecimiento gradual
                filter: 'blur(12px)',   // Desenfoque sutil
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-pinned-wrapper',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,        // Sincronización exacta y suave con el scroll
                    pin: true,
                    pinSpacing: false
                }
            });
        }
    });
});