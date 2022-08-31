import { environment } from "../environment";
const NETWORK_DATA: Record<
  string,
  {
    ORACLE: string;
  }
> = {
  harmony: {
    ORACLE: "0x7A8cc3F696Dd789d9b16F46A14dAA1F6e3f4C218",
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
