import Middleware from "./src/core/commom/Middleware";
import Route from "./src/core/commom/Route";
import Express from "./src/core/express";

interface IInit {
  configure: {
    express: {
      port: any,
    },
  };

  modules: any[];
}

class Nost {
  public static middleware(middleware: string, callback: any): void {
    const m = new Middleware();
    m.middleware = middleware;
    m.callback = callback;
    m.create();
  }

  static get route() {
    const r = new Route();

    const ROUTE = (method: any, route: string, middlewares: string[], callback: any) => {
      r.method = method;
      r.route = route;
      r.middleware = middlewares;
      r.callback = callback;
      r.create();
    };

    return {
      get: (route: string, middlewares: string[], callback: any) => {
        return ROUTE(r.methods.get, route, middlewares, callback);
      },
      post: (route: string, middlewares: string[], callback: any) => {
        return ROUTE(r.methods.post, route, middlewares, callback);
      },
    };
  }

  private EXPRESS: any;

  public init(init: IInit): void {
    this.EXPRESS = new Express();
    this.EXPRESS.configure = init.configure.express;

    init.modules.forEach((element: any) => {
      const module = new element();
      module.boot();
    });

    this.EXPRESS.middlewares = Middleware.middlewares;
    this.EXPRESS.routes = Route.routes;
    this.EXPRESS.listen();
  }
}

Nost.route.get("/", [], () => {
  console.log("");
});
