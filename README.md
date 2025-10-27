# PawLink Landing Page

A beautiful, responsive landing page for PawLink - the world's first AI-driven social wearable for pets. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌍 **Bilingual Support** - English and Chinese translations
- 📱 **Responsive Design** - Mobile-first approach with smooth animations
- 🎨 **Modern UI** - Glassmorphism effects, gradient backgrounds, and neon accents
- ⚡ **Performance Optimized** - Fast loading with Next.js optimizations
- 🎬 **Video Background** - Hero section with autoplay video support
- 🎭 **Smooth Animations** - Framer Motion powered interactions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pawlink-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your actual values.

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── layout.tsx      # Locale-specific layout
│   │   └── page.tsx        # Home page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── TechnologySection.tsx
│   ├── TeamSection.tsx
│   ├── DownloadSection.tsx
│   └── SectionContainer.tsx
├── messages/               # Translation files
│   ├── en.json
│   └── zh.json
├── public/                 # Static assets
│   ├── videos/
│   ├── images/
│   └── icons/
└── ...config files
```

## Customization

### Adding New Sections

1. Create a new component in `components/`
2. Import and add it to `app/[locale]/page.tsx`
3. Add translations to `messages/en.json` and `messages/zh.json`

### Updating Content

All text content is managed through translation files:
- `messages/en.json` - English content
- `messages/zh.json` - Chinese content

### Styling

The design system uses Tailwind CSS with custom utilities:
- Custom colors: `neon-blue`, `neon-green`, `warm-*`
- Glass effects: `.glass`, `.glass-dark`
- Animations: `.animate-float`, `.animate-glow`

### Adding Team Members

Update the `TeamSection.tsx` component to include additional team members. The current implementation shows a single founder with placeholders for expansion.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Assets

### Video Requirements

- Format: MP4
- Location: `public/videos/hero-video.mp4`
- Recommended: 1920x1080, H.264 codec
- Duration: 10-30 seconds loop

### Images

Place your images in the `public/images/` directory:
- Team photos
- Product mockups
- Logo variations

## Performance

The site is optimized for performance with:
- Next.js Image optimization
- Lazy loading for below-the-fold content
- Optimized animations
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to PawLink. All rights reserved.

## Support

For questions or support, contact:
- Email: hello@pawlink.com
- GitHub Issues: [Create an issue](https://github.com/your-org/pawlink-landing/issues)

