document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll with IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for interest items
                if (entry.target.classList.contains('interest-item')) {
                    const delay = Array.from(entry.target.parentNode.children)
                        .indexOf(entry.target) * 100;
                    entry.target.style.transitionDelay = `${delay}ms`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '20px'
    });

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    // Add hover effects for interest items
    document.querySelectorAll('.interest-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Add touch ripple effect for mobile
    document.querySelectorAll('.contact-button').forEach(button => {
        button.addEventListener('touchstart', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Handle mobile menu toggle if needed
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Add smooth scroll behavior for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize page with fade-in effect
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = '0';
        setTimeout(() => {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }

    // Handle WhatsApp button click analytics
    const whatsappButton = document.querySelector('a[href*="wa.me"]');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            // You can add analytics tracking here if needed
            console.log('WhatsApp button clicked');
        });
    }

    // Add touch feedback for mobile devices
    document.querySelectorAll('.interest-item, .contact-button').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Optimize performance for mobile devices
    let resizeTimer;
    window.addEventListener('resize', () => {
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    });
});