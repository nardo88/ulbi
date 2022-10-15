import path from 'path'
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const config:webpack.Configuration = {
  // mode - определяет тип сборки development - для разработки production - для прода
  // разница в том, что для прода файл минифицирован
  mode: "development",
  // entry - точка входа прилодения
  entry: path.resolve(__dirname, "src", "index.ts"),
  // output - настройка результата (что и куда будет генерироваться)
  output: {
    // название файла
    filename: "[name].[contenthash].js",
    // куда файл будет сохраняться
    path: path.resolve(__dirname, "build"),
    // clean - будут ли удаляться предыдущие файлы при прошлых сборках
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
  
  module: {
    rules: [
      // loader для обработки TypeScript
      {
        // регулярка для поиска файлов
        test: /\.tsx?$/,
        use: "ts-loader", // какой лоадер используем
        exclude: /node_modules/, // где не ищем
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config
