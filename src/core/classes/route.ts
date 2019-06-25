import express from 'express';

interface Routes {
  method: any;
  route: string;
  handler: express.RequestHandler;
  middlewares: string[];
}

const routes: Routes[] = [];

export default class Route {
  private _route: string;
  private _middlewares: string[] = [];

  constructor() {
    this._route = this.constructor.name.toLocaleLowerCase();
  }

  middleware(middlewares: string[], cb: Function) {
    this._middlewares = middlewares;
    cb();
    this._middlewares = [];
  }

  get(route: string, handler: express.RequestHandler) {
    routes.push({
      method: "get",
      route: generate(this._route, route),
      handler: handler,
      middlewares: this._middlewares,
    });
  }

  post(route: string, handler: express.RequestHandler) {
    routes.push({
      method: "post",
      route: generate(this._route, route),
      handler: handler,
      middlewares: this._middlewares,
    });
  }

  static get routes() {
    return routes;
  }
}

function generate(base: string, route: string): string {
  if (route === '/') {
    route = '';
  }

  return '/' + base + '/' + route;
}
