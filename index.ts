import Middleware from "./src/core/classes/Middleware";
import Routes from "./src/core/classes/Routes";
import Express from "./src/core/express";

interface IInit {
  configure: {
    express: {
      port: number,
    },
  };

  modules: any[];
}

export default class Nost {
  public static init(INIT: IInit): void {
    const EXPRESS: any = new Express();
    EXPRESS.configure = INIT.configure.express;

    INIT.modules.forEach((element: any) => {
      const module = new element();
      module.boot();
    });

    EXPRESS.middlewares = Middleware.middlewares;
    // EXPRESS.routes = Routes.routes;
    EXPRESS.listen();
  }

  public static get Middleware() {
    return Middleware;
  }

  public static get Routes() {
    return Routes;
  }
}
