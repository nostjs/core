import express from "express";

const app = express();

interface IConfigure {
  readonly port: number;
}

export default class Express {
  private PORT: any;
  private MIDDLEWARES: any;
  private ROUTES: any;

  constructor() {
    this.PORT = process.env.EXPRESS_PORT;
  }

  set configure(configure: IConfigure) {
    this.PORT = configure.port;
  }

  set middlewares(middleware: string) {
    this.MIDDLEWARES.push(middleware);
  }

  set routes(route: string) {
    this.ROUTES.push(route);
  }

  public listen() {
    for (const route in this.ROUTES) {
      if (this.ROUTES[route].method === "get") {
        for (const key of this.MIDDLEWARES) {
          for (const item in this.MIDDLEWARES[key]) {
            if (this.MIDDLEWARES[key][item][this.ROUTES[route].middleware]) {
              app.get(this.ROUTES[route].route, (req: any, res: any, next: any) => {
                this.MIDDLEWARES[key][item][this.ROUTES[route].middleware](req, res, next);
              });
            }
          }
        }

        app.get(this.ROUTES[route].route, (req: any, res: any) => {
          this.ROUTES[route].callback(req, res);
        });
      }
    }

    app.listen(this.PORT, () => {
      console.log(`App listen on port: ${this.PORT}`);
    });
  }
}
