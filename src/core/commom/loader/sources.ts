import fs from "fs";

async function load(path: string) {
  const IMPORTS: any = {};

  fs.readdirSync(path).map((file) => {
    IMPORTS[file] = import(path + file);
  });

  for (const key in IMPORTS) {
    if (IMPORTS.hasOwnProperty(key)) {
      const element = IMPORTS[key];

      await element.then((res: any) => {
        if (res.default.name === key.split(".")[0]) {
          IMPORTS[key] = res;
        } else {
          throw new Error(`
            The file name is different from the class name.\n
            file name: ${key.split(".")[0]}
            class name: ${res.default.name}
          `);
        }
      });
    }
  }

  return IMPORTS;
}

export default async () => ({
  controllers: await load(process.cwd() + "/build/src/controllers/"),
  models: await load(process.cwd() + "/build/src/models/"),
  middlewares: await load(process.cwd() + "/build/src/middlewares/"),
  routes: await load(process.cwd() + "/build/src/routes/"),
});
