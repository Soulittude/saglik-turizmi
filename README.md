This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
saglik-turizmi
├─ eslint.config.mjs
├─ next-i18next.config.js
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ badges
│  │  ├─ iso-9001.png
│  │  └─ jci.png
│  ├─ clinics
│  │  ├─ acibadem-bursa.jpg
│  │  ├─ acibadem-fulya.jpg
│  │  ├─ ege-saglik.jpg
│  │  ├─ liv-ankara.jpg
│  │  ├─ medical-park-antalya.jpg
│  │  └─ medical-park-goztepe.jpg
│  ├─ locales
│  │  ├─ en
│  │  │  └─ common.json
│  │  └─ tr
│  │     └─ common.json
│  └─ placeholders
│     ├─ after-placeholder.jpg
│     └─ before-placeholder.jpg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ clinic
│  │  │  └─ [id]
│  │  │     └─ page.tsx
│  │  ├─ clinics
│  │  │  └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ BeforeAfterGallery.tsx
│  │  ├─ BookingModal.tsx
│  │  ├─ CertificateBadges.tsx
│  │  ├─ ClinicCard.tsx
│  │  ├─ ClinicDetail.tsx
│  │  ├─ GoogleMaps.tsx
│  │  ├─ LanguageSwitcher.tsx
│  │  ├─ Layout.tsx
│  │  ├─ LoadingSkeleton.tsx
│  │  ├─ SearchFilters.tsx
│  │  ├─ ServiceList.tsx
│  │  └─ WhatsAppButton.tsx
│  ├─ lib
│  │  └─ data.ts
│  └─ types
│     └─ index.ts
└─ tsconfig.json

```
