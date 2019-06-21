export default class Middleware {
  middleware: string;

  constructor(middleware: string) {
    this.middleware = middleware;
  }

  handle(cb: () => boolean) {
    if (cb()) {
      
    } else {
      
    }
  }
}
