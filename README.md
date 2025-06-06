# Modern Portfolio Website

A fully responsive, modern portfolio website built with React, TypeScript, and Tailwind CSS. Perfect for showcasing your skills, projects, and professional experience to potential employers.

## Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode
- 📱 Fully responsive
- ⚡ Smooth animations with Framer Motion
- 📧 Working contact form with EmailJS
- 🔍 SEO optimized
- 🎯 Easy to customize
- 🚀 Fast performance

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- React Scroll

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Customization

1. Update personal information:
   - Edit social media links in `src/components/sections/Hero.tsx`
   - Modify project details in `src/components/sections/Projects.tsx`
   - Update skills in `src/components/sections/Skills.tsx`
   - Change experience details in `src/components/sections/Experience.tsx`
   - Edit education information in `src/components/sections/Education.tsx`

2. Replace images:
   - Add your profile photo as `public/profile-photo.jpg`
   - Add project screenshots in `public/projects/`

3. Update colors and styling:
   - Modify `tailwind.config.js` for theme customization
   - Edit individual component styles as needed

### Deployment

#### Deploy to Vercel

1. Create a Vercel account if you haven't already
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Deploy:
   ```bash
   vercel
   ```

#### Deploy to GitHub Pages

1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. Add deployment script to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

## SEO Optimization

The portfolio includes basic SEO optimization:
- Meta tags for description and keywords
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Mobile responsiveness

## Performance Optimization

- Lazy loading of images
- Code splitting
- Optimized animations
- Minified assets

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
