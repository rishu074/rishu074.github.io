// Project data
const projects = [
    {
        name: "Zenetic",
        description: "A thoughtfully designed personal productivity application with features for task management, journaling, and behavioral pattern analysis. Built with EJS and Express, focusing on mindfulness and personal growth.",
        techStack: ["EJS", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/rishu074/Zenetic",
        demo: null,
        image: "https://github.com/rishu074/Zenetic/raw/main/screenshots/login_page.png"
    },
    {
        name: "MultiEgg-Pterodactyl",
        description: "A modern Pterodactyl egg designed for DNxRG free hosting service. Features automated deployment scripts and container management for various game servers.",
        techStack: ["Docker", "JavaScript", "Pterodactyl", "Bash"],
        github: "https://github.com/rishu074/MultiEgg-Pterodactyl",
        demo: null,
        image: "https://raw.githubusercontent.com/pterodactyl/panel/develop/public/assets/svgs/pterodactyl.svg"
    },
    {
        name: "CDN System (cdn2.0)",
        description: "New version of CDN system with multi-domain support and FTP capabilities. Built with TypeScript for improved functionality and maintainability.",
        techStack: ["TypeScript", "Node.js", "FTP", "Networking"],
        github: "https://github.com/rishu074/cdn2.0",
        demo: null,
        image: "https://cdn-icons-png.flaticon.com/512/1373/1373326.png"
    },
    {
        name: "Pterodactyl_SU",
        description: "All-in-one Pterodactyl script with features like SWAP installation, panel migrations, database creation, wing migrations, and daemon backups. Fixes common issues like 0 CPU and RAM bugs.",
        techStack: ["Shell", "Bash", "Server Management"],
        github: "https://github.com/rishu074/Pterodactyl_SU",
        demo: null,
        image: "https://cdn-icons-png.flaticon.com/512/919/919837.png"
    },
    {
        name: "BDAgent & BDClient",
        description: "Backup and management system consisting of a Go-based agent (BDAgent) for server operations and a Go client (BDClient) for system monitoring and control.",
        techStack: ["Go", "TypeScript", "Backend", "System Tools"],
        github: "https://github.com/rishu074/BDAgent",
        demo: null,
        image: "https://cdn-icons-png.flaticon.com/512/6119/6119533.png"
    },
    {
        name: "Serverfiles-DNxRG",
        description: "Collection of server configuration files and management scripts for DNxRG hosting service. Includes setup scripts and deployment configurations.",
        techStack: ["JavaScript", "Shell", "Server Config", "Automation"],
        github: "https://github.com/rishu074/Serverfiles-DNxRG",
        demo: null,
        image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
    }
];

// Experience data
const experiences = [
    {
        title: "System Administrator",
        company: "HyzenCloud Game Server Hosting",
        period: "2024",
        description: "Managed game server infrastructure and developed automation tools. Key responsibilities included server deployment, monitoring, and maintenance. Implemented Docker containers for game servers and developed custom management scripts."
    },
    {
        title: "Full Stack Developer",
        company: "HyzenCloud",
        period: "2024",
        description: "Developed and maintained web applications for server management and user services. Created custom solutions for content delivery and user management using Node.js and TypeScript."
    },
    {
        title: "Backend Developer",
        company: "Independent Projects",
        period: "2021 - Present",
        description: "Building backend applications and tools focusing on system automation and web services. Worked with various technologies including Node.js, Go, and shell scripting."
    }
];

// Populate projects
function populateProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        // Add special styling for Zenetic project
        if (project.name === "Zenetic") {
            card.className = 'bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 border-2 border-primary scale-105 relative';
            // Add a subtle glow effect
            card.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.2)';
        } else {
            card.className = 'bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300';
        }
        
        card.innerHTML = `
            <div class="h-48 bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-4 ${project.name === 'Zenetic' ? 'border-b-2 border-primary' : ''}">
                <img src="${project.image}" alt="${project.name}" class="h-full w-auto object-contain">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 ${project.name === 'Zenetic' ? 'text-primary' : ''}">${project.name}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.techStack.map(tech => `
                        <span class="px-3 py-1 ${project.name === 'Zenetic' ? 'bg-blue-200 dark:bg-blue-800' : 'bg-blue-100 dark:bg-blue-900'} text-blue-800 dark:text-blue-200 rounded-full text-sm">
                            ${tech}
                        </span>
                    `).join('')}
                </div>
                <div class="flex gap-4">
                    <a href="${project.github}" target="_blank" class="text-primary hover:text-blue-700">
                        <i class="fab fa-github mr-2"></i>GitHub
                    </a>
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="text-primary hover:text-blue-700">
                            <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
            ${project.name === 'Zenetic' ? '<div class="absolute top-0 right-0 m-4"><i class="fas fa-star text-primary text-xl"></i></div>' : ''}
        `;
        
        projectsContainer.appendChild(card);
    });
}

// Populate experience timeline
function populateExperience() {
    const timelineContainer = document.querySelector('.timeline');
    
    experiences.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'relative pl-8 pb-8 border-l-2 border-primary last:pb-0';
        
        item.innerHTML = `
            <div class="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full"></div>
            <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 class="text-xl font-bold">${exp.title}</h3>
                <p class="text-primary font-semibold">${exp.company}</p>
                <p class="text-gray-600 dark:text-gray-400">${exp.period}</p>
                <p class="mt-2">${exp.description}</p>
            </div>
        `;
        
        timelineContainer.appendChild(item);
    });
}

// Handle contact form submission
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submission functionality to be implemented!');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateExperience();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 