import { environment } from "../environment";
const NETWORK_DATA: Record<
  string,
  {
    ORACLE: string;
  }
> = {
  harmony: {
    ORACLE: "0xb015af54dc3cbea9c7075d15603245f9a1c5fa09",
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
