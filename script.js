// GSAP ScrollTrigger
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

// Función para copiar correo al portapapeles
function copyEmail() {
    const email = document.getElementById('emailText').innerText;
    const tooltip = document.getElementById('copyTooltip');

    navigator.clipboard.writeText(email).then(() => {
        tooltip.innerText = 'Copied!';
        setTimeout(() => {
            tooltip.innerText = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}