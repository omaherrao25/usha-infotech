import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'Usha Infotech',
  titleSuffix: ' | Usha Infotech — IT Solutions, Nashik',
  description: 'Usha Infotech — Nashik\'s trusted IT solutions provider since 2000. Enterprise hardware supply, CCTV surveillance, networking, AMC and IT rentals. Pan-India delivery.',
  url: 'https://usha-infotech.netlify.app',
  image: '/assets/logo.png',
}

export default function SEO({
  title,
  description = defaults.description,
  path = '',
  noIndex = false,
}) {
  const fullTitle = title ? `${title}${defaults.titleSuffix}` : `Usha Infotech | IT Solutions, CCTV, Networking & Rentals — Nashik`
  const canonicalUrl = `${defaults.url}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${defaults.url}${defaults.image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
