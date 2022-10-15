export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string; // путь до файла входа
  build: string; // путь до файла сборки (бандл)
  html: string; // путь до шаблона html
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
}
