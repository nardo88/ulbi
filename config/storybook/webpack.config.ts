/* eslint-disable no-param-reassign */
import path from 'path'
import webpack, { RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

/**
 * Здесь все просто. Вы по дефолту возвращаем функцию которая в качестве аргумента принимает
 * объект, один ключ которого является конфиг webpack для StoryBook. Внутри этой функции
 * мы будем модернизировать этот конфиг и в итоге его возвращаем
 */
export default ({ config }: { config: webpack.Configuration }) => {
  // создаем объект в котором определим путь до папки проекта
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    // Здесь опишем путь до папки src
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  // добавляем в конфиг путь до папки src что бы у нас работали абсолютные пути
  config.resolve?.modules?.push(paths.src)
  // добавляем расширения что бы мы могли использовать TypeScript
  config.resolve?.extensions?.push('.ts', '.tsx')
  // добавляем конфиг для использования CSS/SCSS
  config.module?.rules?.push(buildCssLoader(true))
  // добавляем настроку обработки SVG
  // @ts-ignore
  config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  // @ts-ignore
  config.module?.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  return config
}