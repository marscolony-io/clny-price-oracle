import { BINANCE_KEY, BINANCE_SECRET_KEY } from "../secrets";

const Binance = require("node-binance-api");

const binance = new Binance().options({
  APIKEY: BINANCE_KEY,
  APISECRET: BINANCE_SECRET_KEY,
});

export const oneToUsd = async (): Promise<number> => {
  let ticker = await binance.prices();
  console.log(new Date(), ticker["ONEUSDT"]);
  return +ticker["ONEUSDT"];
};
