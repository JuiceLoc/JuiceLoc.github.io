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

// Lógica de copiar correo con feedback emergente
function copyEmail() {
    const email = document.getElementById('emailText').innerText;
    const toast = document.getElementById('copyToast');

    navigator.clipboard.writeText(email).then(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}