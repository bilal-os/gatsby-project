
 

module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "en",
    title: "John Doe",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: '123BIL@l789',
          database: 'Students'
        },
        queries: [
          {
            statement: 'SELECT * FROM testimonials',
            idFieldName: 'ID',
            name: 'testimonials'
          }
        ]
      }
    } 
    ,
  ],
}
