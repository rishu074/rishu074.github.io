# Modern Portfolio Website

A clean, responsive portfolio website built with HTML, Tailwind CSS, and vanilla JavaScript. This portfolio template features a modern design with smooth animations, dark mode support, and full responsiveness.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌓 Dark mode support
- ⚡ Smooth animations and transitions
- 🎯 Interactive project cards
- ⏳ Dynamic timeline for experience
- 📝 Contact form (ready to be connected to a backend)
- 🔍 SEO-friendly structure

## Setup

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio
cd portfolio
```

2. Open `index.html` in your browser to view the website.

## Customization

### Personal Information
1. Open `index.html` and replace the following:
   - "Your Name" with your actual name
   - Update the tagline in the hero section
   - Modify the "About Me" section content
   - Update social media links in the contact section

### Projects
1. Open `script.js` and modify the `projects` array:
```javascript
const projects = [
    {
        name: "Your Project Name",
        description: "Project description",
        techStack: ["Technology1", "Technology2"],
        github: "https://github.com/yourusername/project",
        demo: "https://demo-link.com",
        image: "path/to/project-image.jpg"
    },
    // Add more projects...
];
```

### Experience
1. Update the `experiences` array in `script.js`:
```javascript
const experiences = [
    {
        title: "Your Job Title",
        company: "Company Name",
        period: "Start - End Date",
        description: "Job description"
    },
    // Add more experiences...
];
```

### Skills
1. Modify the skills section in `index.html` to match your skillset.
2. Use Font Awesome icons for skill representations.

### Styling
1. Customize colors by modifying the Tailwind configuration in `index.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#YOUR_COLOR_CODE',
                secondary: '#YOUR_COLOR_CODE',
            }
        }
    }
}
```

## Contact Form Setup
The contact form is currently set up to show an alert on submission. To make it functional:

1. Create a backend endpoint to handle form submissions
2. Modify the form submission handler in `script.js`:
```javascript
document.querySelector('#contact form').addEventListener('submit', async function(e) {
    e.preventDefault();
    // Add your form submission logic here
    // Example:
    // const formData = new FormData(this);
    // await fetch('/api/contact', {
    //     method: 'POST',
    //     body: formData
    // });
});
```

## Deployment
You can deploy this website using any static site hosting service:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## License
This project is open source and available under the [MIT License](LICENSE).

## Contributing
Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request. 