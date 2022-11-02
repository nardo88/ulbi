import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

const buildPlugins = (
  htmlPAth: string,
  isDev: boolean
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: htmlPAth,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
};

export default buildPlugins;
