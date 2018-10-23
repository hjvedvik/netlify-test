module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*/.md',
        route: '/:year/:month/:day/:slug',
        typeName: 'BlogPost'
      }
    }
  ]
}
