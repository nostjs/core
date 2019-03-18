export default class Routes {
  private readonly class = Routes;
  private ROUTES: any = {};

  public prefix(route: string, middleware: string[], cb: any): void {
    this.routes[route] = [middleware, cb];
  }

  get routes() {
    return this.ROUTES;
  }
}

/*
class Prefix {
  let PREFIX: string = "/";

  private routes: object[] = [];

  public set setPrefix(prefix: any) {
    PREFIX = prefix;
  }

  public prefix(route: string, middleware: string[], cb: any): void {
    this.PREFIXES.push([route, middleware, cb]);
  }
}

class Route {
  let CALLBACK: any;
  let MIDDLEWARE: string[];
  let METHOD: string;
  let ROUTE: string;
  public PREFIXES: any[] = [];

  get route() {
    const CREATE = () => {
      this.routes.push({
        callback: CALLBACK,
        method: METHOD,
        middleware: MIDDLEWARE,
        route: ROUTE,
      });
    };

    return {
      get: (route: string, middleware: string[], callback: any) => {
        METHOD = "GET";
        ROUTE = PREFIX + route;
        MIDDLEWARE = middleware;
        CALLBACK = callback;
        CREATE();
      },
      post: (route: string, middleware: string[], callback: any) => {
        METHOD = "POST";
        ROUTE = PREFIX + route;
        MIDDLEWARE = middleware;
        CALLBACK = callback;
        CREATE();
      },
    };
  }
}
*/
