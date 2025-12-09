# Setup Guide for Ved's Portfolio

Welcome! This guide will help you get your portfolio up and running.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## What's Already Done

Your portfolio comes with:
- Modern dark theme with orange accents
- All 6 sections: Home, About, Skills, Projects, Certifications, Contact
- Supabase database integration
- Sample data (projects, skills, certifications)
- Fully responsive design
- Smooth scrolling and animations

## Customization Checklist

### 1. Update Personal Information

Edit these files to personalize your portfolio:

**Hero Section** (`src/components/Hero.tsx`):
- Update name, title, and description
- Verify GitHub and LinkedIn URLs

**About Section** (`src/components/About.tsx`):
- Update the description paragraphs
- Verify GPA and education details
- Update the "Download CV" link when you have a CV ready

**Contact Section** (`src/components/Contact.tsx`):
- Update email address (currently placeholder)
- Update location if needed
- The contact form is ready but you may want to add backend handling

### 2. Add Your Profile Picture (Optional)

You can replace the letter avatar with your photo:

In `src/components/Hero.tsx`, replace:
```tsx
<div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-8xl font-bold text-orange-500 border-4 border-orange-500/30">
  V
</div>
```

With:
```tsx
<img
  src="/path-to-your-image.jpg"
  alt="Ved Chaudhari"
  className="w-full h-full object-cover rounded-full border-4 border-orange-500/30"
/>
```

### 3. Update Your Content in Supabase

The portfolio loads data from Supabase. Here's how to update it:

**Access Supabase:**
1. Go to https://supabase.com/dashboard
2. Your project: eatxzmvzondnsqoogkkr
3. Go to "SQL Editor"

**Update Your Projects:**
- Delete sample projects
- Add your real projects using the SQL queries in `CONTENT_MANAGEMENT.md`

**Update Your Skills:**
- Modify skill proficiency levels to match your actual expertise
- Add any skills you have that aren't listed
- Remove skills you don't have

**Update Your Certifications:**
- Replace sample certifications with your real ones
- Make sure dates and credential URLs are correct

Example SQL to clear and add your own data:
```sql
-- Clear sample data
DELETE FROM projects;
DELETE FROM skills;
DELETE FROM certifications;

-- Add your actual data
-- (See CONTENT_MANAGEMENT.md for detailed examples)
```

### 4. Configure Contact Form (Optional Enhancement)

The contact form currently just shows a success message. To make it functional:

**Option A: Use EmailJS**
1. Sign up at https://www.emailjs.com/
2. Install EmailJS: `npm install @emailjs/browser`
3. Update `src/components/Contact.tsx` to send emails

**Option B: Use a Supabase Edge Function**
1. Create an edge function to handle form submissions
2. Store messages in a Supabase table
3. Get email notifications

**Option C: Use Formspree or Similar**
1. Sign up at https://formspree.io/
2. Update form action to point to your Formspree endpoint

### 5. Add Project Images (Optional)

To add screenshots to your projects:

1. Upload images to a hosting service (Supabase Storage, Cloudinary, etc.)
2. Update the `image_url` field in your projects table
3. Images will automatically appear in the project cards

### 6. Social Media Links

Verify all social media links are correct:
- GitHub: https://github.com/ved-1234/
- LinkedIn: https://www.linkedin.com/in/vedchaudhari
- Email: Update in Contact section

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Your site will be live in minutes!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to https://netlify.com
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Other Options

- GitHub Pages
- AWS Amplify
- Firebase Hosting
- Any static hosting service

## Testing Before Deployment

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

3. **Check responsiveness:**
   - Test on mobile (use browser dev tools)
   - Test on tablet
   - Test on desktop

4. **Verify all links:**
   - Social media links
   - GitHub project links
   - Certification credential URLs
   - Navigation smooth scrolling

## Maintenance

### Adding New Projects

Whenever you complete a new project:
1. Go to Supabase SQL Editor
2. Run INSERT query (see CONTENT_MANAGEMENT.md)
3. Changes appear immediately on your site!

### Updating Skills

As you learn new technologies or improve existing skills:
1. Add new skills or update proficiency levels
2. Changes are instant!

### Analytics (Optional)

To track visitors:
1. Sign up for Google Analytics
2. Add the tracking code to `index.html`
3. Or use Vercel/Netlify built-in analytics

## Need Help?

- **Database Issues**: Check `CONTENT_MANAGEMENT.md`
- **Styling**: All styles use Tailwind CSS
- **Components**: Each section is in `src/components/`
- **Documentation**: See `README.md`

## Pro Tips

1. **Keep content fresh**: Update projects and skills regularly
2. **Optimize images**: Compress images before uploading
3. **SEO**: Consider adding meta tags for better search visibility
4. **Performance**: Use `npm run build` to check bundle size
5. **Backup**: Export your Supabase data periodically

---

You're all set! Your portfolio is production-ready and easy to maintain.

Good luck with your job search and projects!
