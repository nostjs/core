import express from 'express';

interface Method {
  method: any;
  route: string;
  cb: express.RequestHandler;
}

export default class Route {
  private base: string;
  middlewares: string[] = [];
  methods: Method[] = [];

  constructor(route: string) {
    this.base = route;
  }

  get(route: string, cb: express.RequestHandler) {
    this.methods.push({
      method: this.get,
      route: generate(this.base, route),
      cb: cb,
    });
  }

  post(route: string, cb: express.RequestHandler) {
    this.methods.push({
      method: 'post',
      route: generate(this.base, route),
      cb: cb,
    });
  }

  set middleware(middlewares: string[]) {
    this.middlewares = middlewares;
  }

  get middleware() {
    return this.middlewares;
  }
}

function generate(base: string, route: string): string {
  const result = (base + route).split('//');

  if (result.length > 0) {
    return result[0];
  } else {
    return result[0];
  }
}
