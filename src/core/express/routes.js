const walker = require("../commom/walker");

module.exports = (app) => {
	walker(process.cwd() + "/src/routes", (walker) => {
		let path = walker.split("/");

		path.splice(0, path.indexOf("routes") + 1);
		path = path.filter(e => e !== "index.js");
		
		let routes = "/";

		if (path.length > 0) {
			path.forEach((route) => {
				routes += route + "/";
			});

			require(walker)({
				get: (func) => {
					app.get(routes, func);
				}
			});
		} else {
			require(walker)({
				get: (route, func) => {
					app.get(route, func);
				}
			});
		}
	});
};