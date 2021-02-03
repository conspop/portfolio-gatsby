module.exports = {
  siteMetadata: {
    title: "Seb Beitel - Portfolio",
    description: "Portfolio site for Sebastien Beitel",
    url: "https://sebbeitel.dev",
    image: "/Seb-Beitel.png"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
  ],
};
