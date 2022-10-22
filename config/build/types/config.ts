export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string; // путь до файла входа
  build: string; // путь до файла сборки (бандл)
  html: string; // путь до шаблона html
  src: string; // путь до точки входа для абсолютных путей
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode; // тип сборки
  port: number; // порт для dev server
}
