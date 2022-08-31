import { BigNumber, ethers, utils } from "ethers";
import { CONTRACTS } from "./contracts-addresses";
import ORACLE from "../abi/Oracle.json";
import { AbiItem } from "web3-utils";
import { ALCHEMY_KEY } from "../secrets";
import { environment } from "../environment";

const nodeMap = {
  harmony: [
    "https://rpc.ankr.com/harmony",
    "https://api.harmony.one",
    "https://api.s0.t.hmny.io",
  ],
  mumbai: ["https://polygon-mumbai.g.alchemy.com/v2/" + ALCHEMY_KEY],
  polygon: [
    "https://polygon-rpc.com",
    "https://rpc-mainnet.matic.network",
    "https://matic-mainnet-archive-rpc.bwarelabs.com",
    "https://rpc.ankr.com/polygon",
  ],
  fuji: ["https://api.avax-test.network/ext/bc/C/rpc"],
  development: ["http://127.0.0.1:9545"],
};

const provider = new ethers.providers.JsonRpcProvider(
  nodeMap[environment.NETWORK][0]
);

var wallet = new ethers.Wallet(environment.PRIVATE_KEY, provider);
const oracle = new ethers.Contract(CONTRACTS.ORACLE, ORACLE.abi, wallet);

export const actualize = async (price: number) => {
  const tx = await oracle.actualize(BigNumber.from((price * 1e18).toString()));
  console.log({ tx });
  const receipt = await tx.wait();
  console.log({ receipt });
};
