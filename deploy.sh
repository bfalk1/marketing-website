#!/bin/bash

# Marketing Website Deployment Script
# This script helps deploy your website to Vercel

echo "🚀 Marketing Website Deployment Helper"
echo "======================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful!"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Modern marketing website"
    echo "✅ Git repository initialized"
else
    echo "📝 Committing changes..."
    git add .
    git commit -m "Update marketing website - $(date)"
fi

echo ""
echo "🎉 Your marketing website is ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub:"
echo "   git remote add origin <your-repo-url>"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "2. Deploy on Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Click 'New Project'"
echo "   - Import your GitHub repository"
echo "   - Vercel will auto-detect Next.js and deploy!"
echo ""
echo "3. Or use Vercel CLI:"
echo "   npm i -g vercel"
echo "   vercel"
echo ""
echo "🌟 Your website will be live at https://your-project.vercel.app"