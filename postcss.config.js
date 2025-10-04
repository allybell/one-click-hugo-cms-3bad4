module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      browsers: "last 2 versions"
    }),
    require("postcss-custom-media"),
    require('@fullhuman/postcss-purgecss').default({
        content: ['site/hugo_stats.json'],
        defaultExtractor: content => {
          const els = JSON.parse(content).htmlElements;
          return [
            ...(els.tags || []),
            ...(els.classes || []),
            ...(els.ids || []),
          ];
        },
        // https://purgecss.com/safelisting.html
        safelist: ["menu-open"]
      }),
    require('autoprefixer')({
      browsers: ['last 2 versions']
    }),
  ]
};