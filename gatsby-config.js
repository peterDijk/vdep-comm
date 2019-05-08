const languages = require("./src/lib/languages");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Communicatie over Grenzen`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Communicatie over Grenzen`,
        short_name: `vdep-cog`,
        start_url: `/`,
        background_color: `#00AEED`,
        theme_color: `#7CC04E`,
        display: `minimal-ui`,
        icon: `src/images/VDEP_Vignet_Logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `communicatie-over-grenzen`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({
          node,
          key,
          value
        }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here

      }
    },
    // google analytics toevoegen
    // google tag manager
    // mUI Grid system - Grid - Hidden - Grow
  ],
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9010",
        secure: false,
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    );
  },
};
