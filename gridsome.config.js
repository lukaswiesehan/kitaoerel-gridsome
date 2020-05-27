module.exports = {
  siteName: 'Kindertagesstätte Oerel',
  siteUrl: 'https://kita-oerel.de',
  plugins: [
    'gridsome-plugin-robots-txt',
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, 
        config: {
          '/unser-haus': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/team': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/stellen': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/eltern': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/galerie': {
            changefreq: 'weekly',
            priority: 0.7
          },
          '/konzeption': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/kontakt': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/downloads': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/impressum': {
            changefreq: 'weekly',
            priority: 0.7
          }
        }
      }
    }
  ]
}
