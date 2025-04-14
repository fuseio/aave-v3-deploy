import {
  eBaseNetwork,
  eFuseNetwork,
  IAaveConfiguration,
} from "./../../helpers/types";
import AaveMarket from "../aave";
import { ZERO_ADDRESS } from "../../helpers";
import {
  strategyUSDC,
  strategyWETH,
  strategyCBETH,
  strategyUSDT,
  strategyWBTC,
  strategyWFUSE,
} from "./reservesConfigs";

export const FuseConfig: IAaveConfiguration = {
  ...AaveMarket,
  MarketId: "Fuse Aave Market",
  ATokenNamePrefix: "Fuse",
  StableDebtTokenNamePrefix: "Fuse",
  VariableDebtTokenNamePrefix: "Fuse",
  SymbolPrefix: "Fuse",
  ProviderId: 37,
  ReservesConfig: {
    USDC: strategyUSDC,
    WETH: strategyWETH,
    WFUSE: strategyWFUSE,
  },
  ReserveAssets: {
    [eFuseNetwork.main]: {
      USDC: "0xc6Bc407706B7140EE8Eef2f86F9504651b63e7f9", // usdbc
      WETH: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590", // weth
      WFUSE: "0x0BE9e53fd7EDaC9F859882AfdDa116645287C629"
      // WBTC: "0x4F85400195a87dFD92bCa1922068609998bccAEe", // wbtc
      // USDT: "0xB28E5B891C20400277D46fd815Fa57BCFd0813C0", // usdt
      // MKR: "0x912cbDb01d553a3909a3C273BC55ca852efC298F",
    },
  },
  EModes: {},
  SupraSValueFeed: {
    [eFuseNetwork.main]: "0x79E94008986d1635A2471e6d538967EBFE70A296",
  },
  SupraAssetIndexes: {
    [eFuseNetwork.main]: {
      // USDC: "89",
      // WBTC: "0",
      // WETH: "1",
      // USDT: "48",
      // MKR: "11",
    },
  },
};

export default FuseConfig;
