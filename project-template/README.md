# Adding a new project

1. Pick a short, URL-friendly slug for the project, e.g. `weather-app`.
2. Create an image folder: `public/images/projects/weather-app/`.
   - Add `cover.jpg` (the thumbnail shown on the homepage) and any process images
     (`process-1.jpg`, `process-2.jpg`, ...).
3. Copy `template.md` from this folder into `src/content/projects/weather-app.md`.
4. Fill in the frontmatter at the top:
   - `title` — project name.
   - `summary` — one or two sentences shown on the homepage card.
   - `coverImage` — path to the image you added, e.g. `/images/projects/weather-app/cover.jpg`.
   - `coverImageAlt` — describes the cover image for screen readers.
   - `tags` — a list of technologies or categories, e.g. `["Python", "Machine Learning"]`.
   - `date` — when the project was made (`YYYY-MM-DD`).
   - `featured` — `true` to show it in the "Featured Projects" section on the homepage,
     `false` to have it appear under "More Projects" instead.
   - `order` — lower numbers appear first among featured projects.
5. Write the body of the file: an introduction, then a "process" section with headings,
   paragraphs, and `![alt text](/images/projects/weather-app/process-1.jpg)` images wherever
   you want to show a step, with an optional italic caption underneath.
6. Save the file — the dev server will hot-reload and the project appears automatically on the
   homepage and at `/projects/weather-app`.

No other code changes are needed to add a project.
