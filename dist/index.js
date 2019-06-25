"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = __importDefault(require("./src/core/classes/controller"));
exports.Controller = controller_1.default;
var model_1 = __importDefault(require("./src/core/classes/model"));
exports.Model = model_1.default;
var middleware_1 = __importDefault(require("./src/core/classes/middleware"));
exports.Middleware = middleware_1.default;
var route_1 = __importDefault(require("./src/core/classes/route"));
exports.Route = route_1.default;
var Nost = /** @class */ (function () {
    function Nost() {
        this._models = [];
        this._middlewares = [];
        this._routes = [];
    }
    Object.defineProperty(Nost.prototype, "models", {
        set: function (models) {
            var _this = this;
            models.forEach(function (model) {
                var element = new model();
                if (element instanceof model_1.default) {
                    _this._models.push(element);
                }
                else {
                    throw new Error('Inconpatible class.');
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nost.prototype, "middlewares", {
        set: function (middlewares) {
            var _this = this;
            middlewares.forEach(function (middleware) {
                var element = new middleware();
                if (element instanceof middleware_1.default) {
                    _this._middlewares.push(element);
                }
                else {
                    throw new Error('Inconpatible class.');
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Nost.prototype, "routes", {
        set: function (routes) {
            var _this = this;
            routes.forEach(function (route) {
                var element = new route();
                if (element instanceof route_1.default) {
                    _this._routes.push(element);
                }
                else {
                    throw new Error('Inconpatible class.');
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Nost.prototype.init = function () {
        var app = express_1.default();
        this._middlewares.forEach(function (middleware) {
            middleware.handle();
        });
        this._routes.forEach(function (route) {
            route.handle();
        });
        route_1.default.routes.forEach(function (route) {
            if (route.method === 'get') {
                route.middlewares.forEach(function (middleware) {
                    middleware_1.default.middlewares.forEach(function (element) {
                        if (element.middleware === middleware) {
                            app.get(route.route, element.handler);
                        }
                    });
                });
                app.get(route.route, route.handler);
            }
        });
        console.log(middleware_1.default.middlewares);
        console.log(route_1.default.routes);
        app.listen(8080, function () {
            console.log('App listen on port: 8080!');
        });
    };
    return Nost;
}());
exports.default = Nost;
