module.exports = {
  globDirectory: 'public/',
  globPatterns: ['**/*.{css,js}'],
  swDest: 'public/sw.js',
  mode: process.env.NODE_ENV,
  clientsClaim: true,
  skipWaiting: true
}
