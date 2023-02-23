export interface wallet {
  contract(...arg: any): any;
  tokenMetadata(...arg: any): Promise<tokenMetadata>;
  getAddress(): Promise<string>;
  balanceOf(...arg: any): Promise<{ _hex: string; _isBigNumber: true }>;
  networkAccount: {
    addr: string;
    sk: Uint8Array;
  };
  tokenAccepted: (tok: string | number) => Promise<boolean>;
  tokenAccept: (tok: string | number) => Promise<any>;
}

interface tokenMetadata {
  clawback: string;
  creator: string;
  decimals: { _hex: string; _isBigNumber: true } | number;
  defaultFrozen: boolean;
  freeze: string;
  manager: string;
  metadata: any;
  name: string;
  reserve: string;
  supply: { _hex: string; _isBigNumber: true } | number;
  symbol: string;
  url: string;
}