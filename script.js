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

// Función para copiar correo desde el botón CTA Neón
function copyEmailCTA() {
    const email = 'alejandro.j.bejarano.999@gmail.com';
    const btn = document.getElementById('ctaEmailBtn');
    const btnText = document.getElementById('ctaBtnText');

    navigator.clipboard.writeText(email).then(() => {
        btn.classList.add('copied');
        btnText.innerText = 'EMAIL COPIED!';

        setTimeout(() => {
            btn.classList.remove('copied');
            btnText.innerText = 'COPY EMAIL ADDRESS';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}