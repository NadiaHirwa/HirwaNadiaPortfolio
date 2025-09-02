# Nadia Hirwa - Portfolio Website

A modern, responsive portfolio website showcasing my skills in Data Analysis, Machine Learning, Web Development, and IoT solutions.

## 🚀 Live Demo

[View Live Portfolio](https://hirwa-repository.vercel.app)

## ✨ Features

- **Responsive Design** - Optimized for all devices
- **Modern UI/UX** - Clean and professional interface
- **Dark/Light Theme** - Toggle between themes
- **Interactive Animations** - Smooth hover effects and transitions
- **Timeline Layout** - Professional experience and education display
- **Project Showcase** - 6 featured projects with detailed descriptions
- **Contact Form** - Easy way for visitors to get in touch

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.jsx      # About me section
│   ├── AwardsSection.jsx     # Awards & certifications
│   ├── ContactSection.jsx    # Contact form
│   ├── EducationSection.jsx  # Education timeline
│   ├── ExperienceSection.jsx # Work experience
│   ├── HeroSection.jsx       # Landing section
│   ├── Navbar.jsx           # Navigation bar
│   ├── ProjectsSection.jsx   # Featured projects
│   ├── SkillsSection.jsx     # Technical skills
│   └── ui/                   # Reusable UI components
├── pages/
│   ├── Home.jsx             # Main page
│   └── NotFound.jsx         # 404 page
└── main.jsx                 # App entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NadiaHirwa/HirwaRepository.git
   cd HirwaRepository
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📱 Sections

### 🏠 Hero Section
- Professional introduction
- Call-to-action buttons
- Animated background effects

### 👋 About Section
- Personal introduction
- Core competencies
- Skills overview with icons

### 💼 Experience Section
- Professional work history
- Timeline layout with alternating cards
- Detailed role descriptions

### 🎓 Education Section
- Academic background
- University and secondary education
- Degree information

### 🏆 Awards & Certifications
- Professional certifications
- Awards and achievements
- View certificate links

### 🛠️ Skills Section
- Technical skills showcase
- Programming languages
- Tools and technologies

### 🚀 Projects Section
- 6 featured projects
- Interactive project cards
- Technology tags
- Live demo and GitHub links

### 📞 Contact Section
- Contact form
- Social media links
- Resume download

## 🎨 Customization

### Adding New Projects

1. Open `src/components/ProjectsSection.jsx`
2. Add new project object to the `projects` array:
   ```javascript
   {
     id: 7,
     title: "Your Project Title",
     description: "Project description",
     image: "/projects/project7.png",
     tags: ["React", "Node.js", "MongoDB"],
     demoUrl: "https://your-demo-url.com",
     githubUrl: "https://github.com/your-username/project",
   }
   ```
3. Add corresponding image to `public/projects/`

### Updating Experience

1. Open `src/components/ExperienceSection.jsx`
2. Modify the `experiences` array with your work history

### Changing Colors/Themes

1. Open `tailwind.config.js`
2. Modify the color palette in the `theme` section

## 📸 Screenshots

### Desktop View
- Clean, professional layout
- Side-by-side timeline for experience
- Grid layout for projects

### Mobile View
- Responsive design
- Touch-friendly navigation
- Optimized for small screens

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📧 Contact

**Nadia Hirwa**
- Email: irahirnad22@gmail.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@NadiaHirwa](https://github.com/NadiaHirwa)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

---

⭐ **Star this repository if you found it helpful!**