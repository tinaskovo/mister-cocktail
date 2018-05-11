const { environment } = require('@rails/webpacker')

// Bootstrap 3 has a dependency over jQuery:
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

const cssLoader = environment.loaders.get('css')
const sassLoader = environment.loaders.get('sass')
const postcssLoader = cssLoader.use.find(loader => loader.loader === 'postcss-loader')
const postcssLoader2 = sassLoader.use.find(loader => loader.loader === 'postcss-loader')

delete postcssLoader.options.config
delete postcssLoader2.options.config



module.exports = environment
