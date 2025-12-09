# Content Management Guide

This guide explains how to manage your portfolio content through Supabase.

## Quick Access

1. Go to your Supabase project dashboard: https://supabase.com/dashboard
2. Select your project
3. Navigate to "Table Editor" or "SQL Editor"

## Managing Projects

### View All Projects
```sql
SELECT * FROM projects ORDER BY display_order;
```

### Add a New Project
```sql
INSERT INTO projects (
  title,
  description,
  tech_stack,
  github_link,
  live_demo_link,
  category,
  featured,
  display_order
) VALUES (
  'Project Title',
  'Detailed description of what this project does and the problems it solves.',
  ARRAY['React', 'TypeScript', 'Supabase'],
  'https://github.com/ved-1234/project-name',
  'https://project-demo.com',
  'Web Development',
  true,
  1
);
```

### Update a Project
```sql
UPDATE projects
SET
  description = 'Updated description',
  tech_stack = ARRAY['React', 'Node.js', 'PostgreSQL'],
  featured = true
WHERE title = 'Project Title';
```

### Delete a Project
```sql
DELETE FROM projects WHERE title = 'Old Project';
```

### Change Project Display Order
```sql
UPDATE projects SET display_order = 1 WHERE title = 'Featured Project';
UPDATE projects SET display_order = 2 WHERE title = 'Second Project';
```

## Managing Skills

### View All Skills
```sql
SELECT * FROM skills ORDER BY category, display_order;
```

### Add a New Skill
```sql
INSERT INTO skills (name, proficiency, category, display_order)
VALUES ('Next.js', 85, 'Frontend', 5);
```

### Update Skill Proficiency
```sql
UPDATE skills SET proficiency = 90 WHERE name = 'React';
```

### Delete a Skill
```sql
DELETE FROM skills WHERE name = 'Old Technology';
```

## Managing Certifications

### View All Certifications
```sql
SELECT * FROM certifications ORDER BY issue_date DESC;
```

### Add a New Certification
```sql
INSERT INTO certifications (
  title,
  issuer,
  issue_date,
  credential_url,
  description,
  display_order
) VALUES (
  'AWS Solutions Architect',
  'Amazon Web Services',
  '2024-06-15',
  'https://aws.amazon.com/verification/ABC123',
  'Professional certification for designing distributed systems on AWS',
  1
);
```

### Update a Certification
```sql
UPDATE certifications
SET credential_url = 'https://new-url.com'
WHERE title = 'Certification Title';
```

### Delete a Certification
```sql
DELETE FROM certifications WHERE title = 'Old Certification';
```

## Skill Categories

Current categories in use:
- `Frontend`: HTML/CSS, JavaScript, React, TypeScript, etc.
- `Backend`: Node.js, Python, APIs, etc.
- `Database`: MongoDB, PostgreSQL, etc.
- `AI/ML`: Machine Learning, TensorFlow, etc.
- `Tools`: Git/GitHub, Docker, etc.

## Project Categories

Current categories in use:
- `Web Development`: Full-stack applications, websites, etc.
- `AI/ML`: Machine learning models, data science projects, etc.

You can add new categories by simply using them in your INSERT statements.

## Tips for Content Management

### Display Order
- Lower numbers appear first
- Use increments of 10 (10, 20, 30) to make it easy to insert items in between later

### Featured Projects
- Set `featured = true` for your best 3-5 projects
- Featured projects stand out with a special badge

### Tech Stack
- Keep tech stack arrays concise (3-6 items)
- Use well-known technology names
- Order by importance/relevance

### Proficiency Levels
- 90-100%: Expert level
- 80-89%: Advanced
- 70-79%: Intermediate
- 60-69%: Basic knowledge

### Links
- Always use full URLs (https://...)
- Test links before adding
- Use NULL if no link available (for optional fields)

## Backup Your Data

### Export All Data
```sql
-- Export projects
SELECT * FROM projects;

-- Export skills
SELECT * FROM skills;

-- Export certifications
SELECT * FROM certifications;
```

Copy the results and save them in a JSON or CSV file for backup.

## Restore/Bulk Import

If you need to import multiple items at once, use multiple INSERT statements:

```sql
INSERT INTO projects (title, description, tech_stack, github_link, category, featured, display_order)
VALUES
  ('Project 1', 'Description 1', ARRAY['React'], 'https://github.com/...', 'Web Development', true, 1),
  ('Project 2', 'Description 2', ARRAY['Python'], 'https://github.com/...', 'AI/ML', false, 2),
  ('Project 3', 'Description 3', ARRAY['Node.js'], 'https://github.com/...', 'Web Development', false, 3);
```

## Need Help?

- Check Supabase documentation: https://supabase.com/docs
- Review the database schema in the main README.md
- All tables have Row Level Security enabled with public read access

---

Remember: Changes to the database are reflected immediately on your portfolio website!
