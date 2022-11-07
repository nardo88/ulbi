import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // абсолютные пути в приоритете
    preferAbsolute: true,
    // Здесь указываем пути точек входа
    modules: [options.paths.src, 'node_modules'],
    // Главный файл в модулях
    mainFiles: ['index'],
    // Псевдоним начальной точки
    alias: {},
  }
}

export default buildResolvers
