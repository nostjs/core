const models: any = {};
const envs: any = {};

export default class Main {
  get models() {
    return models;
  }

  public ENV(env: string) {
    if (envs[env]) {
      return envs[env];
    } else {
      throw new Error(`${env} environment is empty.`);
    }
  }
}

function model(name: string, val: any) {
  models[name] = val;
}

function ENV(env: string, val: any) {
  envs[env] = val;
}

export {
  ENV,
  model,
};
