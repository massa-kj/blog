# my-tech-blog

A personal technical blog built with Astro and Tailwind CSS.  
I write about software engineering, programming (e.g., Rust, React ...), and my journey in open source.

> 🚧 The site is live but still under construction.  
> Content and layout are being actively improved.

## Live Site

👉 [https://massa-kj.github.io/blog/](https://massa-kj.github.io/blog/)  

## Tech Stack & Selection Criteria

This blog was intentionally built using cutting-edge front-end tools and techniques that I don't use in my work, but that I wanted to explore in depth.
The selection was based on the following criteria:

- **Learning opportunity** – Tools that offer a lot to learn at a systems or architectural level
- **Future potential** – Technologies with active ecosystems and long-term community support
- **Not used in past work** – To deliberately step outside my current stack and comfort zone
- **Flexible for future replacement** – The site structure and content are decoupled enough to allow migration or refactoring if needed

### Core Stack

- [Astro](https://astro.build/) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Markdown](https://www.markdownguide.org/) - For post writing
- [GitHub Pages](https://pages.github.com/) - Hosting

## Getting Started (for local dev)

```sh
pnpm install
pnpm dev
```

## Articles (Scheduled Writing)

- How I built a shell from scratch in Rust
- My first contributing to VSCode
- AWS QuickSight dashboards explained

## Development Notes

- To add a new section "XXXXX", the following files need to be updated:
  - `src/content/XXXXX/**/*.md`
  - `src/content/config.ts`
  - `src/pages/[lang]/XXXXX.astro`
  - `src/pages/[lang]/XXXXX/*.astro`
  - `src/pages/[lang]/tags/[tag].astro`
  - `src/pages/[lang]/tags/index.astro`
  - `src/utils/share.ts`
