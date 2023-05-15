import { oneToUsd } from "./services/binance-api";
import { actualize } from "./blockchain/contracts";

const INTERVAL = 5 * 60 * 1000;
const PRICE_DIFF = 0.03; // 3%
const VALID_PERIOD = 4 * 60 * 60 * 1000; // 4 hours

let lastPrice = {
  price: 0,
  lastUpdate: new Date(),
};

const sleep = async (time: number) => {
  return new Promise((res: any) => setTimeout(res, time));
};

const isPriceChanged = (price: number) => {
  return Math.abs((price - lastPrice.price) / lastPrice.price) > PRICE_DIFF;
};

const isDataExpired = () => {
  return new Date().getTime() - lastPrice.lastUpdate.getTime() > VALID_PERIOD;
};

const main = async () => {
  while (true) {
    try {
      await sleep(INTERVAL);
      const price = await oneToUsd();
      console.log({ isPriceChanged: isPriceChanged(price), isDataExpired: isDataExpired() });
      if (isPriceChanged(price) || isDataExpired()) {
        await actualize(price);
        lastPrice.lastUpdate = new Date();
        lastPrice.price = +price;
      }
    } catch (error) {
      console.log("main loop error", error);
    }
  }
};

main();
