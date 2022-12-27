import webpack from 'webpack'
import buildDevServe from './buildDevServe'
import buildLoaders from './buildLoaders'
import buildPlugins from './buildPlugins'
import buildResolvers from './buildResolvers'
import { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev, apiUrl } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(paths.html, isDev, apiUrl),

    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServe(options) : undefined,
  }
}
