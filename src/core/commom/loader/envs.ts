import dotenv from "dotenv";

export default async () => {
  dotenv.config();
  return process.env;
};
