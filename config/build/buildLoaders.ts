import webpack from "webpack";
const buildLoaders = (): webpack.RuleSetRule[] => {
  // так как поочередность объявления лоадеров имеет значение,
  // каждый лоадер помещаем в переменную и в массиве уже указываем
  // эти переменные для удобства
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [typeScriptLoader];
};

export default buildLoaders;
