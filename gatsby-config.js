module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Cameron Chapman',
    description: 'Full stack software engineer',
    keywords: 'personal website, software engineer, engineer, full stack, kansas city',
    url: 'http://cameron-c-chapman.github.io/'
  }
};
