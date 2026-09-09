# Your NGO — Astro + Decap CMS

A minimalist, modern, mobile-friendly website for your NGO. Built with Astro, styled with neutral warm gradients, and powered by Decap CMS for easy content editing.

## Features

- **Zero hosting cost** — Deploys free on Netlify
- **Decap CMS** — Write and publish articles at `yoursite.com/admin`
- **Fast & SEO-friendly** — Static HTML, pre-rendered pages
- **Mobile-first** — Responsive design out of the box
- **Neutral warm gradients** — Minimal, professional aesthetic
- **Blog** — Full article system with tags, dates, and related posts
- **YouTube embed** — Ready for your channel
- **Social links** — Instagram, Twitter/X, Facebook, LinkedIn, YouTube

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 4 |
| CMS | Decap CMS (git-based) |
| Hosting | Netlify (free tier) |
| Styling | Vanilla CSS with CSS variables |
| Domain | GoDaddy (your existing domain) |

## Quick Start

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it `your-ngo-website` (or whatever you prefer)
3. Make it **public** (required for Decap CMS free tier)
4. Upload all files from this project to the repo

### 2. Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub account and select your repo
4. Netlify will auto-detect Astro. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

### 3. Set Up Decap CMS (Content Editor)

1. In your Netlify dashboard, go to **Site settings** → **Identity**
2. Click **Enable Identity**
3. Go to **Services** → **Git Gateway** → **Enable Git Gateway**
4. Under **Registration**, set to **Invite only** (recommended for security)
5. Invite yourself as a user — you'll get an email to set a password
6. Go to `yoursite.netlify.app/admin` and log in

### 4. Connect Your GoDaddy Domain

1. In Netlify, go to **Domain settings** → **Add custom domain**
2. Enter your GoDaddy domain
3. Netlify will show you DNS records to add
4. In GoDaddy DNS Manager:
   - Add a **CNAME** record: `www` → `your-site.netlify.app`
   - Add an **A** record: `@` → `75.2.60.5`
5. Wait 5–30 minutes for DNS to propagate

### 5. Customize Your Site

Replace these placeholders across the project:

| Placeholder | Where | What to change to |
|-------------|-------|-------------------|
| `Your NGO` | `src/components/Navigation.astro`, `src/components/Footer.astro`, `src/pages/index.astro` | Your actual NGO name |
| `yourngo` | `src/components/SocialLinks.astro` | Your social media handles |
| `yourchannel` | `src/components/SocialLinks.astro`, `src/pages/index.astro` | Your YouTube channel |
| `VIDEO_ID` | `src/pages/index.astro` | Your YouTube video ID |
| `your-ngo.netlify.app` | `astro.config.mjs` | Your Netlify URL or custom domain |

## Publishing Articles

### Method 1: Decap CMS (Recommended for non-technical users)

1. Go to `yoursite.com/admin`
2. Log in with your Netlify Identity credentials
3. Click **New Blog Post**
4. Fill in: Title, Description, Date, Author, Tags, Hero Image, Body
5. Click **Publish** → site rebuilds automatically in ~1 minute

### Method 2: Direct Markdown (For developers)

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter (title, description, pubDate, etc.)
3. Write content in Markdown
4. Commit and push to GitHub → Netlify auto-deploys

## Project Structure

```
├── public/
│   ├── admin/
│   │   └── config.yml          # Decap CMS configuration
│   ├── images/                 # Upload images here
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── blog/               # Your articles (Markdown)
│   │   └── config.ts           # Content schema
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Card.astro
│   │   └── SocialLinks.astro
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML wrapper
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── admin.astro         # CMS login page
│   │   └── blog/
│   │       ├── index.astro     # Blog listing
│   │       └── [slug].astro    # Article template
│   └── styles/
│       └── global.css          # Design tokens & utilities
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Adding a Contact Form Later

Netlify Forms are free (100 submissions/month):

1. Add a `<form name="contact" netlify>` to any page
2. Netlify automatically detects and handles it
3. Submissions appear in your Netlify dashboard

## Adding Donations Later

Simply add a button linking to your payment page:

```html
<a href="https://donate.yourngo.org" class="btn btn-primary">Donate Now</a>
```

Or embed Razorpay/Stripe donation widgets directly in any `.astro` page.

## Future Roadmap

| Phase | Feature | Effort |
|-------|---------|--------|
| Now | Launch with blog + socials | Done |
| Month 2 | Add contact form | 10 min |
| Month 3 | Add donation button | 5 min |
| Month 6 | Add photo gallery | 1 hour |
| Month 12 | Add events calendar | 2 hours |
| Year 2 | Migrate to dynamic if needed | Optional |

## Support

- [Astro Docs](https://docs.astro.build)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Docs](https://docs.netlify.com)

---

Built with purpose. Powered by community.
