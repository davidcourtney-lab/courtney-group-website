# The Courtney Group website

Source for [davidgcourtney.com](https://davidgcourtney.com), the website of The Courtney Group (Dr David Courtney, Queen's University Belfast).

Built with [Astro](https://astro.build) and hosted free on Cloudflare Pages. Every change pushed to `main` rebuilds and publishes the site automatically.

## Adding a news post (no code)

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open **courtney-group-website**, then **News**, then **Add an entry**.
3. Fill in the title, date and one-line summary, pick one or more tags, add a photo and write the post.
4. Click **Save**. The site updates within a couple of minutes.
5. Open the post on the site and click **Share on LinkedIn** to post it to your profile.

Team members are added the same way under **Team**, including their favourite film.

## Editing in code

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

| What | Where |
| --- | --- |
| News posts | `src/content/news/*.md` |
| Team members | `src/content/team/*.md` |
| Publications | `src/data/publications.ts` |
| Site name, email, profile links | `src/data/site.ts` |
| Openly licensed science images | `src/data/science-images.json` (downloaded at build time by `scripts/fetch-science-images.mjs`) |

No AI-generated images are used on this site. Every science image is listed with its source and licence on the `/credits/` page.

## Hosting

Cloudflare Pages settings: build command `npm run build`, output directory `dist`, Node 22.
