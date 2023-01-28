export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  entry: string // путь до файла входа
  build: string // путь до файла сборки (бандл)
  html: string // путь до шаблона html
  src: string // путь до точки входа для абсолютных путей
  // указываем пути для плагина copy-webpack-plugin
  locales: string // откуда копируем
  buildLocales: string // куда копируем
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  apiUrl: string
}

export interface BuildEnv {
  mode: BuildMode // тип сборки
  port: number // порт для dev server
  apiUrl: string
}
