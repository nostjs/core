import Controller from "./src/core/classes/controller";
import * as Main from "./src/core/classes/Main";
import Model from "./src/core/classes/model";
import Middleware from "./src/core/classes/route";
import Route from "./src/core/classes/route";

import * as loader from "./src/core/commom/loader";
import * as service from "./src/core/services";

export default class Nost {
  public init() {

    loader.envs().then((object) => {
      for (const key in object) {
        if (process.env.hasOwnProperty(key)) {
          Main.ENV(key, process.env[key]);
        }
      }
    });

    loader.sources().then((object) => {
      for (const key in object.models) {
        if (object.models.hasOwnProperty(key)) {
          const element = new object.models[key].default();
          const model = element.model(element.boot());

          for (const name in model) {
            if (model.hasOwnProperty(name)) {
              Main.model(name, model[name]);
            }
          }
        }
      }
    });
  }
}

export {
  Controller,
  Model,
  Middleware,
  Route,
};

/*
await Promise.all([
  loader.sources.controllers(),

  // loader.sources.middlewares(),
  // loader.sources.routes(),
]).then((res) => {
  res.map((object) => {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = new object[key].default();
        element.boot();
      }
    }
  });
});
*/

/*
const models: any = {};

await loader.models().then((res) => {
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        const element = new res[key].default();
        const model = element.model(element.boot());

        for (const name in model) {
          if (model.hasOwnProperty(name)) {
            models[name] = model[name];
          }
        }
      }
    }
  }, (err) => {
    //
  });

  await loader.routes().then((res) => {
    for (const key in res) {
      if (res.hasOwnProperty(key)) {
        const element = new res[key].default();
        // const route = new element.default();
        element.boot();
        // console.log(route);
      }
    }
  });

  await Promise.all([
    service.express(),
    service.mongoose(),
  ]).then((res) => {
    // console.log(res);
  }, (err) => {
    //
  });
*/
