# GoodBuildIt Landing Page & Waitlist

A high-conversion, consumer-grade Web3 landing page for GoodBuild (`goodbuildit.xyz`) designed according to the specifications in `style_guide.txt`.

## Features
- **Visual Anchors**: Hand-crafted inline SVG icons and a 2-column interactive preview canvas representing the conversational prompt-to-dApp builder.
- **Brand System Compliance**: Follows the `#592e81` (Violet), `#ff85d9` (Pink pop), `#1a0d26` (Violet Ink), and `#f3eef8` (Tint) palette with `Unbounded`, `Inter`, and `JetBrains Mono` fonts.
- **Zero-Dependency**: Standalone HTML5/CSS3/Vanilla JS file that works instantly on GitHub Pages with no build step required (`index.html`).
- **Referral Query Attribution**: Automatically captures `?ref=promoterName` (or `?promoter=...`) from the URL and persists it in `localStorage`.
- **Lead Collection**: Stores leads with their attributed promoter and timestamps. Ready to connect to any webhook, Lark Base, or Google Sheet.

## Deploying to GitHub Pages
1. Push this folder to a GitHub repository (e.g. `username/goodbuildit` or a `gh-pages` branch).
2. Go to **Settings > Pages** in your GitHub repository.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo>/` in under 60 seconds.
