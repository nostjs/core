import fs from "fs";
import path from "path";

function walker(dir: string, callback: any) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walker(dirPath, callback) : callback(path.join(dir, f));
  });
}

export default walker;
