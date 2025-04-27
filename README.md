
# Saurabh Upadhayay - Software Development Engineer Portfolio

A professional portfolio showcasing Saurabh Upadhayay's experience, skills, education, and achievements.

## Overview

This portfolio website presents my professional experience at LambdaTest, Fi, Masai, and other organizations, along with my educational background, certifications, and technical expertise.

## Features

- Responsive design optimized for all devices
- Interactive experience timeline
- Skills and expertise visualization
- Education and certification details
- Project showcase
- Contact information

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion for animations
- React Router with HashRouter for GitHub Pages compatibility

## Local Development

1. Clone the repository
```bash
git clone https://github.com/Saurabh-Upadhayay/My-site.git
cd My-site
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment to GitHub Pages

### Method 1: Using the deployment script

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

### Method 2: Manual deployment

1. Build the project
```bash
npm run build
```

2. Deploy using gh-pages package
```bash
npm install --save-dev gh-pages
npx gh-pages -d dist
```

### Method 3: GitHub Actions

You can also set up GitHub Actions for automatic deployment. Add a workflow file in `.github/workflows/deploy.yml` with appropriate configuration.

## License

MIT License
