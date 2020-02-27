import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

const production = process.env.NODE_ENV === 'production'

export default {
  input: 'src/js/main.js',
  output: [{
    sourcemap: true,
    format: 'iife',
    name: 'legacy',
    file: 'static/js/main-legacy.js'
  },{
    sourcemap: true,
    format: 'esm',
    name: 'modern',
    file: 'static/js/main.js'
  }],
  plugins: [
    postcss({
      extract: production ? 'layouts/partials/css/main.css' : 'static/css/main.css'
    }),
    resolve({ browser: true }),
    commonjs(),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}
