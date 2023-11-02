import { TokenMetadata } from "@reach-sh/stdlib/dist/types/shared_impl";

export interface wallet {
  contract(...arg: any): any;
  tokenMetadata(...arg: any): Promise<TokenMetadata>;
  getAddress(): Promise<string>;
  balanceOf(...arg: any): Promise<{ _hex: string; _isBigNumber: true }>;
  networkAccount: {
    addr: string;
    sk: Uint8Array;
  };
  tokenAccepted: (tok: string | number) => Promise<boolean>;
  tokenAccept: (tok: string | number) => Promise<any>;
}
export type version = "v3" | "v4";


