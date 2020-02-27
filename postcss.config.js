const production = !process.env.ROLLUP_WATCH

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(production
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['./layouts/**/*.html'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }),
          require('cssnano')
        ]
      : [])
  ]
}
