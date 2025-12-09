# Ved Chaudhari - Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Responsive Design**: Mobile-first design that works beautifully on all devices
- **Dark Theme**: Professional dark theme with orange accents
- **Dynamic Content**: Projects, skills, and certifications managed through Supabase database
- **Smooth Navigation**: Smooth scrolling between sections
- **Interactive UI**: Hover effects, transitions, and animations
- **Easy to Update**: Add/edit/remove content directly from the Supabase database

## Sections

1. **Home**: Hero section with introduction and call-to-action buttons
2. **About**: Personal information and education details
3. **Skills**: Technical skills organized by category with proficiency levels
4. **Projects**: Portfolio projects with filtering by category (Web Development, AI/ML)
5. **Certifications**: Professional certifications and achievements
6. **Contact**: Contact form and social media links

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Deployment**: Ready for deployment on any static hosting platform

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Managing Content

All content is stored in Supabase and can be easily updated without touching the code.

### Adding a New Project

Use the Supabase SQL Editor or client library to insert a new project:

```sql
INSERT INTO projects (title, description, tech_stack, github_link, live_demo_link, category, featured, display_order)
VALUES (
  'My New Project',
  'Project description here',
  ARRAY['React', 'Node.js', 'MongoDB'],
  'https://github.com/ved-1234/my-project',
  'https://demo.example.com',
  'Web Development',
  true,
  1
);
```

### Adding a New Skill

```sql
INSERT INTO skills (name, proficiency, category, display_order)
VALUES ('Docker', 85, 'Tools', 13);
```

### Adding a New Certification

```sql
INSERT INTO certifications (title, issuer, issue_date, credential_url, display_order)
VALUES (
  '',
  'Meta',
  '2024-03-15',
  'https://coursera.org/verify/example',
  5
);
```

## Database Schema

### Projects Table
- `id`: UUID (primary key)
- `title`: Project name
- `description`: Project description
- `tech_stack`: Array of technologies used
- `github_link`: GitHub repository URL
- `live_demo_link`: Live demo URL
- `category`: Project category (Web Development, AI/ML, etc.)
- `image_url`: Project screenshot URL (optional)
- `featured`: Boolean to mark featured projects
- `display_order`: Order in which to display

### Skills Table
- `id`: UUID (primary key)
- `name`: Skill name
- `proficiency`: Skill level (0-100)
- `category`: Skill category (Frontend, Backend, AI/ML, etc.)
- `display_order`: Order in which to display

### Certifications Table
- `id`: UUID (primary key)
- `title`: Certification name
- `issuer`: Issuing organization
- `issue_date`: Date certification was issued
- `credential_url`: Link to credential
- `description`: Additional details
- `display_order`: Order in which to display

## Customization

To customize the portfolio for your needs:

1. Update personal information in `src/components/Hero.tsx` and `src/components/About.tsx`
2. Update social media links in navigation and contact sections
3. Modify color scheme in Tailwind CSS classes (currently using orange/yellow accents)
4. Add your profile image or customize the letter avatar

## Performance

- Optimized bundle size
- Lazy loading for images
- Efficient database queries
- Responsive images for different screen sizes

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with passion by Ved Chaudhari
