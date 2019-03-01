const middlewares: any = [];

export default class Middleware {
  private MIDDLEWARE: any;
  private CALLBACK: any;

  set middleware(middleware: string) {
    this.MIDDLEWARE = middleware;
  }

  set callback(callback: any) {
    this.CALLBACK = callback;
  }

  public create() {
    middlewares.push({
      callback: this.CALLBACK,
      middleware: this.MIDDLEWARE,
    });
  }

  static get middlewares(): any[] {
    return middlewares;
  }
}
