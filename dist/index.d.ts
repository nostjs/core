import Controller from "./src/core/classes/controller";
import Model from "./src/core/classes/model";
import Middleware from "./src/core/classes/middleware";
import Route from "./src/core/classes/route";
declare function init(): void;
declare const _default: {
    init: typeof init;
    models: Model[];
    middlewares: Middleware[];
    routes: Route[];
};
export default _default;
export { Controller, Model, Middleware, Route, };
