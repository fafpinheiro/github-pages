import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ACF Peacekeeper`,
    description: `Portfolio and Research Knowledge Base for ACF Peacekeeper`,
    author: `@acfpeacekeeper`,
    siteUrl: `https://acfpeacekeeper.github.io`,
  },
  // More complex projects might use 'gatsby-plugin-graphql-codegen' here
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./assets/images/",
      },
      __key: "images",
    },
    // In a real app, you'd add 'gatsby-source-filesystem' for markdown posts here
  ],
};

export default config;