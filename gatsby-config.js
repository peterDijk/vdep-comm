module.exports = {
  siteMetadata: {
    title: `Communicatie over Grenzen`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Communicatie over Grenzen`,
        short_name: `vdep-cog`,
        start_url: `/`,
        background_color: `#00AEED`,
        theme_color: `#7CC04E`,
        display: `minimal-ui`,
        icon: `src/images/vdep-vignet.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "DRUPAL",
        // This is the field under which it's accessible
        fieldName: "drupal",
        // URL to query from
        url: "https://drupal.communicatieovergrenzen.nl/graphql",
        // headers: {
        //   // Learn about environment variables: https://gatsby.dev/env-vars
        //   Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        // },
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://demo.wpgraphql.com/graphql`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
