import dotenv from "dotenv";
import { cleanEnv, str, num } from "envalid";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

export type Environment = {
  PORT: number;
  NETWORK: string;
  PRIVATE_KEY: string;
};

export const environment = cleanEnv(process.env, {
  NETWORK: str({
    choices: ["harmony", "mumbai", "polygon", "fuji", "development"],
  }),
  PORT: num({ default: 8000 }),
  PRIVATE_KEY: str({
    default: "fd2c8d061a7bd49fdb394879349f8fe555636f168df44e7364a29a36bcecd2d1",
  }),
});
