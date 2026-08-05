window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function() {
            gsap.to('.hero-screen', {
                scale: 0.7,
                opacity: 0,
                filter: 'blur(12px)',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-pinned-wrapper',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                    pinSpacing: false
                }
            });
        }
    });
});