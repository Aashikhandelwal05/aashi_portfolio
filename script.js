// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    
    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero buttons smooth scroll
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        if (button.getAttribute('href').startsWith('#')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Enhanced Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add specific animation classes based on element type
                if (element.classList.contains('skill-category')) {
                    element.classList.add('animate');
                } else if (element.classList.contains('project-card')) {
                    element.classList.add('animate');
                } else if (element.classList.contains('timeline-item')) {
                    element.classList.add('animate');
                } else if (element.classList.contains('main-education')) {
                    element.classList.add('animate');
                } else if (element.classList.contains('cert-item')) {
                    element.classList.add('animate');
                } else {
                    element.classList.add('fade-in-up');
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation with staggered delays
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        observer.observe(element);
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        observer.observe(element);
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.3}s`;
        observer.observe(element);
    });

    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        observer.observe(element);
    });

    // Observe other elements
    const otherAnimatedElements = document.querySelectorAll(
        '.about-content, .main-education, .contact-item'
    );
    
    otherAnimatedElements.forEach(element => {
        observer.observe(element);
    });

    // Enhanced skill tags hover effect with staggered animation
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        // Add initial animation delay
        tag.style.animationDelay = `${index * 0.05}s`;
        
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(3deg)';
            this.style.boxShadow = '0 5px 15px rgba(139, 38, 53, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    });

    // Enhanced project cards with 3D hover effect
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(10deg) rotateY(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(26, 26, 26, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(26, 26, 26, 0.08)';
        });
        
        // Add mouse movement parallax effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 8;
            const rotateY = (centerX - x) / 8;
            
            this.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });

    // Add floating animation to certification icons
    const certIcons = document.querySelectorAll('.cert-item i');
    certIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
        icon.classList.add('float-animation');
    });

    // Contact form handling
    const contactForm = document.querySelector('.message-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Create mailto link
            const subject = `Message from ${firstName} ${lastName}`;
            const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            const mailtoLink = `mailto:aashikhandelwal05@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Thank you for your message! Your email client should open now.', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--dark-red)' : 'var(--licorice)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Enhanced typing animation for hero title with realistic effect
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        element.style.borderRight = '2px solid var(--dark-red)';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                // Vary speed for more natural typing
                const randomSpeed = speed + Math.random() * 50;
                setTimeout(type, randomSpeed);
            } else {
                // Blinking cursor effect
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }
        
        type();
    }

    // Initialize enhanced typing animation
    setTimeout(() => {
        const heroName = document.querySelector('.hero-name');
        if (heroName) {
            const originalText = heroName.textContent;
            typeWriter(heroName, originalText, 120);
        }
    }, 1500);

    // Enhanced parallax effect for multiple sections
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const skills = document.querySelector('.skills');
        const experience = document.querySelector('.experience');
        
        // Hero parallax
        if (hero) {
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Skills section parallax
        if (skills) {
            const skillsTop = skills.offsetTop;
            const skillsRate = (scrolled - skillsTop) * 0.1;
            skills.style.backgroundPosition = `center ${skillsRate}px`;
        }
        
        // Experience section parallax
        if (experience) {
            const expTop = experience.offsetTop;
            const expRate = (scrolled - expTop) * 0.05;
            experience.style.backgroundPosition = `center ${expRate}px`;
        }
    });

    // Skills section counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat');
        
        counters.forEach(counter => {
            const text = counter.textContent;
            const match = text.match(/(\d+)/);
            
            if (match) {
                const number = parseInt(match[1]);
                const duration = 2000;
                const increment = number / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    
                    counter.textContent = text.replace(/\d+/, Math.floor(current));
                }, 16);
            }
        });
    }

    // Trigger counter animation when skills section is visible
    const skillsSection = document.querySelector('.projects');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillsObserver.observe(skillsSection);
    }

    // Add subtle mouse movement effect to project cards
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });

    // Add cursor trail effect
    let mouseTrail = [];
    const trailLength = 20;
    
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({ x: e.clientX, y: e.clientY });
        
        if (mouseTrail.length > trailLength) {
            mouseTrail.shift();
        }
        
        updateTrail();
    });
    
    function updateTrail() {
        const existingTrail = document.querySelectorAll('.mouse-trail');
        existingTrail.forEach(dot => dot.remove());
        
        mouseTrail.forEach((point, index) => {
            const dot = document.createElement('div');
            dot.className = 'mouse-trail';
            dot.style.cssText = `
                position: fixed;
                width: ${index * 2}px;
                height: ${index * 2}px;
                background: var(--khaki);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${point.x}px;
                top: ${point.y}px;
                transform: translate(-50%, -50%);
                opacity: ${index / trailLength * 0.5};
                transition: all 0.1s ease-out;
            `;
            
            document.body.appendChild(dot);
            
            setTimeout(() => {
                if (dot.parentNode) {
                    dot.remove();
                }
            }, 100);
        });
    }

    // Add progressive loading animation
    function initProgressiveAnimations() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                section.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }

    // Enhanced page load animations
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Add entrance animation to hero elements
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        const heroButtons = document.querySelector('.hero-buttons');
        const heroPhoto = document.querySelector('.hero-profile-image');
        
        if (heroPhoto) {
            heroPhoto.style.transform = 'scale(0) rotate(180deg)';
            setTimeout(() => {
                heroPhoto.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                heroPhoto.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        }
        
        [heroTitle, heroSubtitle, heroDescription, heroButtons].forEach((element, index) => {
            if (element) {
                element.style.opacity = '0';
                element.style.transform = 'translateX(-50px)';
                setTimeout(() => {
                    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0)';
                }, 800 + (index * 200));
            }
        });
    });

    console.log('Aashi Portfolio: All scripts loaded successfully! ✨');
});