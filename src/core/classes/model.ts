import mongoose from "mongoose";

export default class Model {
  public schema(schema: mongoose.SchemaDefinition) {
    const SCHEMA = new mongoose.Schema(schema);
    return SCHEMA;
  }

  protected model(schema: mongoose.Schema) {
    return {
      [this.constructor.name]: mongoose.model(this.constructor.name, schema),
    };
  }
}
