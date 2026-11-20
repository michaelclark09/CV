# Michael Clark – CV site

A one-page CV website. Plain HTML, CSS and a little JavaScript: no build step, no dependencies.

## Structure

```
index.html              Page content and markup
assets/css/styles.css   All styling (tokens, layout, components, responsive, print)
assets/js/main.js       Print button and footer year (the page works without it)
assets/img/favicon.svg  Browser tab icon
```

## Editing

- **Content:** edit the text in `index.html`.
- **Colours and fonts:** change the custom properties at the top of `assets/css/styles.css`.
- **Skill ratings:** change `data-level` (1–5) and the matching `aria-label` on each `.rating`.
- **Phone / LinkedIn:** uncomment the lines in the contact list in `index.html`.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Deploy to GitHub Pages

1. Create a public repository named `yourusername.github.io`.
2. Upload the contents of this folder (keep the `assets` folder structure).
3. In the repository, go to **Settings → Pages**. Under "Build and deployment", choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. The site goes live at `https://yourusername.github.io` within a few minutes.
5. Uncomment the `og:url` and `canonical` tags in `index.html` and set them to that address.
