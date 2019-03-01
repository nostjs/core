const methods: any = {
  get: () => methods.get.name,
  post: () => methods.post.name,
};

const routes: any = [];

export default class Route {
  private METHOD: any;
  private ROUTE: any;
  private MIDDLEWARE: any;
  private CALLBACK: any;

  get methods() {
    return methods;
  }

  set method(method: any) {
    if (methods[method.name]) {
      this.METHOD = methods[method.name];
    } else if (methods[method]) {
      this.METHOD = methods[method];
    }
  }

  set route(route: string) {
    this.ROUTE = route;
  }

  set middleware(middleware: string[]) {
    this.MIDDLEWARE = middleware;
  }

  set callback(callback: string) {
    this.CALLBACK = callback;
  }

  public create() {
    routes.push({
      callback: this.CALLBACK,
      method: this.METHOD,
      middleware: this.MIDDLEWARE,
      route: this.ROUTE,
    });
  }

  static get routes(): any[] {
    return routes;
  }
}
