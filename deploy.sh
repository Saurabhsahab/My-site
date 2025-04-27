#!/usr/bin/env sh

# Stop the script on errors
set -e

# Build your project
npm run build

# Support for React Router (SPA fallback)
cp dist/index.html dist/404.html

# Move into the build directory
cd dist

# Avoid GitHub Pages ignoring files that start with "_"
touch .nojekyll

# Initialize a new Git repo in dist (force overwrite each time)
git init
git checkout -B main
git add -A
git commit -m "Deploy to GitHub Pages"

# Push to your GitHub repo's gh-pages branch
git push -f git@github.com:Saurabhsahab/My-site.git main:gh-pages

# Return to the root directory
cd -
echo "✅ Deployment completed! Your site should be live soon."