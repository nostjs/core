import Controller from "./src/core/classes/controller";
import Model from "./src/core/classes/model";
import Middleware from "./src/core/classes/middleware";
import Route from "./src/core/classes/route";
export default class Nost {
    private _models;
    private _middlewares;
    private _routes;
    models: any[];
    middlewares: any[];
    routes: any[];
    init(): void;
}
export { Controller, Model, Middleware, Route, };
