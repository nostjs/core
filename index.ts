import express from 'express';

import Controller from "./src/core/classes/controller";
import Model from "./src/core/classes/model";
import Middleware from "./src/core/classes/middleware";
import Route from "./src/core/classes/route";

const models: Model[] = [];
const middlewares: Middleware[] = [];
const routes: Route[] = [];

function init() {
  const app = express();

  routes.forEach((route) => {
    route.methods.forEach(element => {
      switch (element.method) {
        case route.get:
          app.get(element.route, element.cb);
          break;
        case route.post:
          app.post(element.route, element.cb);
          break;
      }
    });
    
    app.get("");

    /* 
    app.get(route.get, (req, res, next) => {

    });

    app.post(route.post, (req, res, next) => {

    });
     */
  });

  app.listen(8080, () => {
    console.log('App listen on port: 8080!');
  });
}

export default {
  init,
  models,
  middlewares,
  routes,
}

export {
  Controller,
  Model,
  Middleware,
  Route,
};