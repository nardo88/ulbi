import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const buildPlugins = (htmlPAth: string): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: htmlPAth,
    }),
    new webpack.ProgressPlugin(),
  ];
};

export default buildPlugins;
