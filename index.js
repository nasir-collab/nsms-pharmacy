/* ====================================================================
   INDEX.JS - Interactivity for Light Educational Theme
   ==================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Navbar Scroll Effect --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Mobile Menu Toggle --- */
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navClose = document.getElementById('navClose');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    };

    if (navToggle) navToggle.addEventListener('click', toggleMenu);
    if (navClose) navClose.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    /* --- Intersection Observer for Scroll Animations --- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        scrollObserver.observe(el);
    });

    /* --- FAQ Accordion Smooth Toggle --- */
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            
            // Close others
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== this) {
                    otherBtn.parentElement.classList.remove('active');
                }
            });
            
            // Toggle current
            item.classList.toggle('active');
        });
    });

});

/* --- Form Submission Mock --- */
function showFormSuccess() {
    const form = document.getElementById('enquiryForm');
    const successDiv = document.getElementById('formSuccess');
    if (form && successDiv) {
        form.classList.add('hidden');
        successDiv.classList.remove('hidden');
    }
}

function resetForm() {
    const form = document.getElementById('enquiryForm');
    const successDiv = document.getElementById('formSuccess');
    if (form && successDiv) {
        form.reset();
        form.classList.remove('hidden');
        successDiv.classList.add('hidden');
    }
}
