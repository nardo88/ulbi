import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

const buildDevServe = (options: BuildOptions): DevServerConfiguration => {
  return {
    // порт на котором будет поднят dev server
    port: options.port,
    // при поднятии сервера откроется вкладка в браузере
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}

export default buildDevServe
