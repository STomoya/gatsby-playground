
module.exports = {
  siteMetadata: {
    title: "playing",
    description: "sample site for playing around with gatsby",
    author: 'STomoya',
    copyright_year: 2020
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ]
}
