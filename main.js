// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Typing Animation with faster speed
const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 20,
    loop: true,
    backDelay: 1000
});

// Project Data
const projects = [
    {
        title: "E-Commerce Website",
        category: "dev",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600",
        link: "#"
    },
    {
        title: "Short Film",
        category: "video",
        image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=600",
        link: "#"
    },
    {
        title: "Mobile App UI",
        category: "design",
        image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=600",
        link: "#"
    },
    {
        title: "Portfolio Website",
        category: "dev",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600",
        link: "#"
    },
    {
        title: "Music Video",
        category: "video",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600",
        link: "#"
    },
    {
        title: "Brand Identity",
        category: "design",
        image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=600",
        link: "#"
    }
];

// Populate Projects with animation
function populateProjects(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);
    
    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.2}s`;
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
}

// Filter Projects
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        populateProjects(btn.dataset.filter);
    });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize Projects
populateProjects();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});