# RV Rental Instructions Site

A modern, responsive website providing comprehensive instructions for RV trailer rental usage, maintenance, and cleaning. Built with React and automatically deployed to GitHub Pages using GitHub Actions.

## Features

- **Complete RV Guide**: Step-by-step instructions for all RV systems
- **Modern Design**: Clean, professional interface with smooth animations
- **Mobile Responsive**: Optimized for all device sizes
- **Video Placeholders**: Ready for instructional video integration
- **Logical Organization**: Sections arranged in order of importance and usage
- **Automated Deployment**: CI/CD pipeline with GitHub Actions

## Sections Included

1. **Quick Start Guide** - Essential setup and safety information
2. **Water Systems** - Fresh water, gray water, and black water management
3. **Electrical Systems** - Battery management and appliance usage
4. **Climate Control** - Heating, cooling, and ventilation
5. **Kitchen & Appliances** - Stove, refrigerator, and cooking equipment
6. **Sleeping & Living Areas** - Bed setup and space management
7. **Waste Management** - Proper disposal procedures
8. **Maintenance & Troubleshooting** - Daily checks and common issues
9. **Departure Checklist** - Pre-return procedures

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd rv-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Automated Deployment

This project uses GitHub Actions for continuous deployment. The site is automatically built and deployed to GitHub Pages whenever changes are pushed to the main branch.

### How it Works

1. **Push Changes**: When you push code to the `main` or `master` branch
2. **Automatic Build**: GitHub Actions automatically:
   - Sets up Node.js environment
   - Installs dependencies
   - Builds the React application
   - Deploys to GitHub Pages
3. **Live Site**: Your site is updated at `https://rv.arlint.dev`

### Workflow File

The deployment is configured in `.github/workflows/deploy.yml`:
- Triggers on push to main/master branch
- Uses Node.js 18
- Caches npm dependencies for faster builds
- Deploys to GitHub Pages with custom domain

### Custom Domain Setup

To use the custom domain `rv.arlint.dev`:

1. The `CNAME` file is already configured in the `public` folder
2. Configure your domain DNS settings to point to GitHub Pages:
   - Add a CNAME record: `rv.arlint.dev` → `yourusername.github.io`
3. Enable custom domain in your GitHub repository settings:
   - Go to Settings → Pages
   - Set custom domain to `rv.arlint.dev`
   - Check "Enforce HTTPS"

## Development Workflow

1. **Make Changes**: Edit files in your local development environment
2. **Test Locally**: Run `npm start` to test changes
3. **Commit & Push**: 
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
4. **Automatic Deployment**: GitHub Actions will build and deploy automatically
5. **Verify**: Check your live site at `https://rv.arlint.dev`

## Customization

### Adding Videos

Replace the video placeholders with actual video content:

```jsx
<div className="video-placeholder">
  <iframe 
    src="your-video-url" 
    title="Instruction Video"
    width="100%" 
    height="315"
    frameBorder="0"
    allowFullScreen
  />
</div>
```

### Modifying Content

Edit the `src/App.js` file to customize:
- Section titles and descriptions
- Step-by-step instructions
- Safety warnings and tips
- Contact information

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Uses Inter font family for modern typography

## Technologies Used

- **React 18** - Frontend framework
- **React Icons** - Icon library
- **CSS3** - Styling with modern features
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and intended for RV rental business use.

## Support

For questions or issues, contact the repository owner.

---

**Note**: This site is designed specifically for RV rental instruction and should be customized with your specific trailer model and requirements. 