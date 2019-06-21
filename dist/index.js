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
var models = [];
var middlewares = [];
var routes = [];
function init() {
    var app = express_1.default();
    routes.forEach(function (route) {
        route.methods.forEach(function (element) {
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
    app.listen(8080, function () {
        console.log('App listen on port: 8080!');
    });
}
exports.default = {
    init: init,
    models: models,
    middlewares: middlewares,
    routes: routes,
};
