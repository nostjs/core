const middlewares: any[] = [];

export default class Middleware {
  public readonly class = Middleware;
  private MIDDLEWARE: any;
  private CALLBACK: any;

  set middleware(res: string) {
    this.MIDDLEWARE = res;
  }

  set callback(res: any) {
    this.CALLBACK = res;
  }

  public create() {
    middlewares.push({
      callback: this.CALLBACK,
      middleware: this.MIDDLEWARE,
    });
  }

  public static get middlewares(): any[] {
    return middlewares;
  }
}
