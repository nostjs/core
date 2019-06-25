import express from 'express';

import Controller from "./src/core/classes/controller";
import Model from "./src/core/classes/model";
import Middleware from "./src/core/classes/middleware";
import Route from "./src/core/classes/route";

export default class Nost {
  private _models: any[] = [];
  private _middlewares: any[] = [];
  private _routes: any[] = [];

  set models(models: any[]) {
    models.forEach((model) => {
      const element = new model();
      if (element instanceof Model) {
        this._models.push(element);
      } else {
        throw new Error('Inconpatible class.');
      }
    });
  }

  set middlewares(middlewares: any[]) {
    middlewares.forEach((middleware) => {
      const element = new middleware();
      if (element instanceof Middleware) {
        this._middlewares.push(element);
      } else {
        throw new Error('Inconpatible class.');
      }
    });
  }

  set routes(routes: any[]) {
    routes.forEach((route) => {
      const element = new route();
      if (element instanceof Route) {
        this._routes.push(element);
      } else {
        throw new Error('Inconpatible class.');
      }
    });
  }

  init() {
    const app = express();

    this._middlewares.forEach((middleware) => {
      middleware.handle();
    });

    this._routes.forEach((route) => {
      route.handle();
    });

    Route.routes.forEach((route) => {
      if (route.method === 'get') {
        route.middlewares.forEach((middleware) => {
         Middleware.middlewares.forEach((element) => {
           if (element.middleware === middleware) {
            app.get(route.route, element.handler);
           }
         });
        });

        app.get(route.route, route.handler);
      }
    });

    console.log(Middleware.middlewares);
    console.log(Route.routes);

    app.listen(8080, () => {
      console.log('App listen on port: 8080!');
    });
  }
}

export {
  Controller,
  Model,
  Middleware,
  Route,
};