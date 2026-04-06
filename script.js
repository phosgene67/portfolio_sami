// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Load Projects (example)
function loadProjects() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of your project',
            image: 'images/placeholder.png',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Description of your project',
            image: 'images/placeholder.png',
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Description of your project',
            image: 'images/placeholder.png',
            link: '#'
        }
    ];

    const container = document.querySelector('.projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}">View Project</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

// Add scroll animation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
