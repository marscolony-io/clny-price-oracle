import { environment } from "../environment";
const NETWORK_DATA: Record<
  string,
  {
    ORACLE: string;
  }
> = {
  harmony: {
    ORACLE: "0xCf8411efc10157B5E6DA758B79f5d5D35f115a2A",
  },
  polygon: {
    ORACLE: "",
  },
  mumbai: {
    ORACLE: "",
  },
  fuji: {
    ORACLE: "",
  },
  development: {
    ORACLE: "0x4ce78a876e783761F002De0EDB68f6406e0D18fF",
  },
};

export const CONTRACTS = NETWORK_DATA[environment.NETWORK];
