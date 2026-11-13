# Portfolio

A personal portfolio site built with [Astro](https://astro.build). Each project is a markdown
file with images, so adding a new one doesn't require touching any code.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                      |
| :------------------- | :------------------------------------------- |
| `npm install`         | Install dependencies                         |
| `npm run dev`         | Start the local dev server at `localhost:4321` |
| `npm run build`       | Build the production site to `./dist/`       |
| `npm run preview`     | Preview the production build locally         |

## Project structure

```text
/
├── project-template/          # Copy this to add a new project — see project-template/README.md
├── public/
│   └── images/projects/       # Cover + process images, one folder per project
├── src/
│   ├── components/
│   │   └── ProjectCard.astro  # The homepage thumbnail card
│   ├── content/
│   │   └── projects/          # One .md file per project (this is your data)
│   ├── content.config.ts      # Schema for a project entry
│   ├── layouts/
│   │   └── BaseLayout.astro   # Shared page shell (header/footer/nav)
│   ├── pages/
│   │   ├── index.astro        # Homepage — featured + other projects grid
│   │   ├── about.astro        # About / contact page
│   │   └── projects/
│   │       └── [slug].astro   # Project detail page template
│   └── styles/
│       └── global.css
```

## Adding a new project

See [project-template/README.md](./project-template/README.md) for the full walkthrough. In short:

1. Add your images to `public/images/projects/<slug>/`.
2. Copy `project-template/template.md` to `src/content/projects/<slug>.md` and fill it in.
3. Save — it shows up on the homepage automatically.

Any file in `src/content/projects/`, for example `holoform.md`, is a filled-in example to copy from.

## Before you publish

- Replace "Your Name" and the contact links in [src/layouts/BaseLayout.astro](./src/layouts/BaseLayout.astro)
  and [src/pages/about.astro](./src/pages/about.astro).
- Swap `public/favicon.svg` for your own icon if you'd like.

## Deploying

This is a static site — `npm run build` outputs plain HTML/CSS/JS to `./dist/`, which can be
hosted for free on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or
[GitHub Pages](https://docs.astro.build/en/guides/deploy/github/). Vercel/Netlify are the easiest:
connect the repo and they auto-detect Astro.

## TODO

- Add an explanation of what IT development is.
- Personalise project journals.
- Add more project journals.
- Add a more personal flare to the layout.
