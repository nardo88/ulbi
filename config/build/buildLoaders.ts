import webpack from "webpack";
const buildLoaders = (): webpack.RuleSetRule[] => {
 
  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [
    typeScriptLoader,
    sassLoader
  ];
};

export default buildLoaders;
