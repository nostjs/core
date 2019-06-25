import express from 'express';

interface Middlewares {
  middleware: string;
  handler: express.RequestHandler;
}

const middlewares: Middlewares[] = [];

export default class Middleware {
  private _middleware: string;

  constructor() {
    this._middleware = this.constructor.name.toLocaleLowerCase();
  }

  middleware(handler: express.RequestHandler) {
    middlewares.push({
      middleware: this._middleware,
      handler: handler,
    });
  }

  static get middlewares() {
    return middlewares;
  }
}
