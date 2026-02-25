# ModernTech Marketing Website

A modern, responsive marketing website built with Next.js, TypeScript, and Tailwind CSS. Designed for easy deployment on Vercel.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Mobile-First**: Responsive navigation and mobile-optimized layouts

## 📋 Sections

1. **Hero Section**: Eye-catching banner with call-to-action
2. **Features**: Key benefits and differentiators
3. **Services**: Detailed service offerings with icons
4. **Testimonials**: Social proof from satisfied customers
5. **Contact**: Contact form and company information
6. **Footer**: Links and company details

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 📦 Deploy on Vercel

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your deployment

### Option 3: Deploy via ZIP Upload

1. Build the project:
```bash
npm run build
```

2. Create a ZIP file of your project
3. Go to Vercel dashboard
4. Click "Add New..." → "Project"
5. Upload your ZIP file

## 🎨 Customization

### Colors
The website uses a blue color scheme defined in `tailwind.config.ts`. To change the primary color:

1. Edit the `primary` color palette in `tailwind.config.ts`
2. The gradient backgrounds can be customized in `globals.css`

### Content
- **Company Name**: Update "ModernTech" in `layout.tsx` and `page.tsx`
- **Services**: Modify the services section in `page.tsx`
- **Testimonials**: Replace with real customer testimonials
- **Contact Info**: Update contact details in the contact section
- **SEO**: Update metadata in `layout.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Inline Tailwind classes
- Custom animations: Defined in `globals.css`

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Touch-friendly buttons and links
- Optimized font sizes and spacing
- Grid layouts that adapt to screen size

## 🔍 SEO Features

- Meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure
- Alt text for images (when added)
- Sitemap generation (automatic with Next.js)

## 🎯 Performance Optimizations

- Next.js automatic code splitting
- Optimized fonts with Google Fonts
- Static export configuration
- Image optimization disabled for static export
- Minimal bundle size with tree shaking

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

For support, email hello@moderntech.com or create an issue in the repository.

---

Built with ❤️ by ModernTech Solutions