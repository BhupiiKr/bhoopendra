# Academic Portfolio

A responsive Next.js portfolio for a Computer Science / AI academic profile.

## Before publishing
Search for and replace:
- `your.email@example.com` with your real email address (in `app/page.tsx`)
- `https://www.linkedin.com/` with your LinkedIn profile URL
- The generic publication notes with verified authors, venue, year, DOI and publication links
- `https://example.vercel.app` in `app/layout.tsx` with your eventual Vercel domain
- Any research or education wording that needs to be more precise

The project descriptions are written as research summaries/directions. Confirm the current status of each project and paper before publishing.

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload the contents of this folder.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Next.js** and leave the build settings at their defaults.
5. Click **Deploy**.
6. Add your final domain in the Vercel project settings if desired.

No API keys or environment variables are required for this static portfolio.
