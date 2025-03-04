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
} from "../aave/reservesConfigs";

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
  },
  ReserveAssets: {
    [eFuseNetwork.main]: {
      USDC: "0xc6Bc407706B7140EE8Eef2f86F9504651b63e7f9", // usdbc
      WETH: "0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590", // weth
    },
  },
  EModes: {},
  SupraSValueFeed: {
    [eFuseNetwork.main]: "0x79E94008986d1635A2471e6d538967EBFE70A296",
  },
  SupraAssetIndexes: {
    [eFuseNetwork.main]: {
      USDC: "47",
      BTC: "0",
      WETH: "1",
      CBETH: "2",
    },
  },
};

export default FuseConfig;
