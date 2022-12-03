export interface data {
  address: string;
  amount: number;
  deleted: boolean;
  "is-frozen": boolean;
  "opted-in-at-round": number;
}

export type requesData = Promise<{
  address: string;
  assetId: string | number;
}>;
export type resolvedData = {
  address: string;
  assetId: string | number;
};
