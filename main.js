// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Enhanced Typing Animation
const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 2000,
    startDelay: 500,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100
});

// Hero Background Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Floating CV Functionality
const floatingCV = document.getElementById('floatingCV');
let cvExpanded = false;

floatingCV.addEventListener('click', (e) => {
    e.stopPropagation();
    cvExpanded = !cvExpanded;
    floatingCV.classList.toggle('expanded', cvExpanded);
});

// Close CV when clicking outside
document.addEventListener('click', (e) => {
    if (!floatingCV.contains(e.target) && cvExpanded) {
        cvExpanded = false;
        floatingCV.classList.remove('expanded');
    }
});

// Enhanced Project Data
const projects = [
    {
        title: "Printer E-Commerce Website",
        category: "web",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
        techStack: "HTML, CSS, JavaScript",
        description: "A static, responsive e-commerce site showcasing printers with smooth navigation and interactive product displays.",
        features: [
            "Responsive design for all devices",
            "Interactive product galleries",
            "Smooth navigation animations",
            "Modern UI/UX design"
        ]
    },
    {
        title: "Land Management System",
        category: "desktop",
        image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
        techStack: "Python (CLI)",
        description: "A command-line application for managing land records with comprehensive CRUD operations.",
        features: [
            "Complete CRUD operations",
            "Advanced search functionality",
            "Data validation and error handling",
            "User-friendly CLI interface"
        ]
    },
    {
        title: "Teacher Management System",
        category: "desktop",
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
        techStack: "Java Swing, MySQL",
        description: "Desktop application for managing teacher data and schedules with secure admin access.",
        features: [
            "GUI with form validation",
            "Secure admin authentication",
            "Teacher data management",
            "Schedule management system"
        ]
    },
    {
        title: "E-Classroom Database",
        category: "database",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
        techStack: "Oracle SQL Plus",
        description: "Normalized database design for online classroom management with optimized performance.",
        features: [
            "Normalized database structure",
            "Complex relationship definitions",
            "Optimized query performance",
            "Comprehensive data modeling"
        ]
    },
    {
        title: "Smart Irrigation System",
        category: "iot",
        image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=600",
        techStack: "C++, Arduino UNO, Soil Moisture Sensor",
        description: "Automatic irrigation system using soil sensors with LCD display and buzzer integration.",
        features: [
            "Automated soil moisture detection",
            "Arduino C++ programming",
            "LCD display integration",
            "Alert system with buzzer"
        ]
    },
    {
        title: "Movie Streaming Platform",
        category: "web",
        image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
        techStack: "JSP, Servlets, Java EE",
        description: "Full-stack movie site with user authentication and admin panels for content management.",
        features: [
            "User authentication system",
            "Admin content management",
            "Session and cookie handling",
            "Responsive movie catalog"
        ]
    },
    {
        title: "NYC 311 Data Analysis",
        category: "database",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
        techStack: "Python, Pandas, Matplotlib, Seaborn",
        description: "Comprehensive data analysis of 300k+ NYC service requests with trend visualization.",
        features: [
            "Large dataset processing",
            "Statistical analysis",
            "Data visualization",
            "Trend identification"
        ]
    }
];

// Populate Projects with enhanced animation
function populateProjects(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="tech-stack">${project.techStack}</div>
                <div class="description">${project.description}</div>
                <ul class="project-features">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="project-links">
                    <a href="#" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        <span>View Project</span>
                    </a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Enhanced Filter Projects
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Filter projects
        populateProjects(btn.dataset.filter);
    });
});

// Enhanced Navigation
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Enhanced Scroll Effects with Performance Optimization
let ticking = false;
let scrollDirection = 'down';

function updateScrollEffects() {
    const scrollTop = window.pageYOffset;
    
    // Determine scroll direction
    scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop;
    
    // Navbar scroll effect
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar based on scroll direction
    if (scrollTop > 200) {
        if (scrollDirection === 'up') {
            navbar.classList.remove('hide');
        } else {
            navbar.classList.add('hide');
        }
    } else {
        navbar.classList.remove('hide');
    }
    
    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (scrollTop > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Section reveal/hide animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrollTop + windowHeight > sectionTop + 100 && scrollTop < sectionTop + sectionHeight - 100) {
            section.classList.add('reveal');
            section.classList.remove('hide');
        } else if (scrollTop > sectionTop + sectionHeight || scrollTop + windowHeight < sectionTop) {
            section.classList.remove('reveal');
            section.classList.add('hide');
        }
    });
    
    updateTimelineProgress();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        requestAnimationFrame(updateTimelineProgress);
        ticking = true;
    }
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');
const body = document.body;

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinksContainer.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        body.style.overflow = 'auto';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Contact Form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    
    // Show loading state
    btnText.textContent = 'Sending...';
    btnIcon.className = 'fas fa-spinner fa-spin';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Hide form and show success message
        contactForm.style.display = 'none';
        formSuccess.classList.add('show');
        
        // Reset form after showing success
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'flex';
            formSuccess.classList.remove('show');
            
            // Reset button state
            btnText.textContent = 'Send Message';
            btnIcon.className = 'fas fa-paper-plane btn-icon';
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
        }, 4000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        
        // Reset button state on error
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fas fa-paper-plane btn-icon';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        
        alert('There was an error sending your message. Please try again.');
    }
});

// Enhanced Skills Animation
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 100);
            });
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe skills section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Timeline Animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const timeline = entry.target;
            timeline.classList.add('animate');
            
            // Animate timeline items with staggered delay
            const timelineItems = timeline.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 300);
            });
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe timeline container
const timelineContainer = document.querySelector('.timeline');
if (timelineContainer) {
    timelineObserver.observe(timelineContainer);
}

// Enhanced Timeline Scroll Progress
function updateTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    
    if (timeline) {
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineTop = timelineRect.top;
        const timelineHeight = timelineRect.height;
        
        // Calculate progress - starts when timeline enters viewport, completes when it exits
        let progress = 0;
        
        if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
            // Timeline is in viewport
            const viewportProgress = Math.max(0, Math.min(1, (windowHeight - timelineTop) / (windowHeight + timelineHeight * 0.5)));
            progress = viewportProgress;
        }
        
        // Update CSS custom property for timeline line height
        timeline.style.setProperty('--timeline-progress', `${progress * 100}%`);
    }
}

// Initialize Projects
populateProjects();

// Initialize section animations
window.addEventListener('load', () => {
    // Show home section immediately
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('reveal');
    }
    
    // Trigger initial scroll effects
    updateScrollEffects();
});

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        navToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
        body.style.overflow = 'auto';
        
        // Close floating CV
        if (cvExpanded) {
            cvExpanded = false;
            floatingCV.classList.remove('expanded');
        }
    }
});

// Focus Management for Accessibility
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

navLinksContainer.addEventListener('keydown', (e) => {
    const focusableContent = navLinksContainer.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];

    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }
});

// Enhanced CV Button Interactions
document.querySelectorAll('.cv-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Add click animation
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 2000); // Delay until loading screen finishes
    }
});

// Enhanced Intersection Observer for Contact Items
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const contactItems = entry.target.querySelectorAll('.contact-item, .contact-form-section');
            contactItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe contact section
const contactSection = document.querySelector('.contact');
if (contactSection) {
    contactObserver.observe(contactSection);
}

// Initialize contact items with hidden state
document.querySelectorAll('.contact-item, .contact-form-section').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
});

// Enhanced Section Title Animation
const observeTitles = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-title');
        }
    });
}, { 
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.section-title').forEach(title => {
    observeTitles.observe(title);
});

// Add CSS for title animation
const style = document.createElement('style');
style.textContent = `
    .section-title {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .section-title.animate-title {
        opacity: 1;
        transform: translateY(0);
    }
    
    .section-title.animate-title::after {
        animation: lineExpand 1s ease-out 0.5s forwards;
        transform-origin: center;
        transform: scaleX(0);
    }
    
    .timeline::before {
        height: var(--timeline-progress, 0%);
    }
    
    @keyframes lineExpand {
        to {
            transform: scaleX(1);
        }
    }
`;
document.head.appendChild(style);

// Performance Monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}