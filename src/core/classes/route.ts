import Main from "./Main";

export default class Route extends Main {
  private PATH: string = "/";
  private ROUTES: any[] = [];
  private PREFIX: any[] = [];

  get route() {
    return {
      get: (path: string) => {
        this.ROUTES.push(this.PATH + path);
      },
      post: (path: string) => {
        this.ROUTES.push(this.PATH + path);
      },
    };
  }

  public prefix(prefix: string, callback: any): void {
    this.PREFIX.push([prefix, callback]);
  }
}
