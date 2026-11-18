# GoodBuild — Developer Preview & Early Access Portal

[![Built on Celo](https://img.shields.io/badge/Blockchain-Celo-1f9d6b?style=flat-square&logo=celo)](https://celo.org/)
[![Status](https://img.shields.io/badge/Status-Early%20Access%20Preview-592e81?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> Official public onboarding registry and developer preview portal for **GoodBuild** (`goodbuildit.xyz`) — the AI-powered prompt-to-dApp builder on the Celo network.

---

## Overview

GoodBuild enables developers, creators, and students to describe smart contracts and frontend decentralized applications using plain natural language, compiling them directly into audited OpenZeppelin building blocks deployable on Celo Mainnet and Celo Sepolia testnet.

This repository hosts the official lightweight web client, visual preview engine, and waitlist attribution pipeline.

---

## Architectural Highlights

- **Visual Preview Canvas**: Live client-side preview engine demonstrating prompt-to-Solidity compilation with zero external bundle overhead.
- **Self-Custody Design Pattern**: Non-custodial workflow; private keys remain strictly on the user's connected wallet (MiniPay, Valora, MetaMask).
- **Campaign Attribution System**: Native query attribution engine supporting multi-channel partner distribution (`?ref=<id>`) with client-side persistence.
- **Zero-Build Architecture**: Pure standards-compliant HTML5/CSS3/ES6 designed for high-availability edge delivery via GitHub Pages and CDN distributions.

---

## Partner & Ambassador Attribution

To track referral attribution across ecosystem partners and student campus ambassadors, append the target identifier to the entry URL:

```text
https://<domain>/?ref=<partner_id>
```

Attribution state is automatically synchronized across user sessions and associated with incoming access requests.

---

## Deployment & Hosting

This application is optimized for edge deployment on **GitHub Pages**, **Cloudflare Pages**, or any static CDN.

### Deploying to GitHub Pages (Under 2 Minutes)

1. **Create Repository**: Create a new GitHub repository (e.g. `goodbuild-portal`).
2. **Push Workspace**:
   ```bash
   git init
   git add .
   git commit -m "feat: initialize GoodBuild early access portal"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - In your repository, navigate to **Settings** > **Pages** (under the "Code and automation" sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and directory `/ (root)`.
   - Click **Save**.
4. **Live URL**: GitHub Actions will automatically deploy your site within 60 seconds to:
   ```text
   https://<your-username>.github.io/<your-repo-name>/
   ```

---

## Security & Privacy

GoodBuild does not capture or transmit private keys, seed phrases, or sensitive wallet secrets. All waitlist credentials are held under strict client privacy protocols.

© 2024 GoodBuild Protocol. Built on Celo.
