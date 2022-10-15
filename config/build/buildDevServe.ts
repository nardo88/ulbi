import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const buildDevServe = (options: BuildOptions): DevServerConfiguration => {
  return {
    // порт на котором будет поднят dev server
    port: options.port,
    // при поднятии сервера откроется вкладка в браузере
    open: true,
  };
};

export default buildDevServe;
