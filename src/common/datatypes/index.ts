export interface JSONSchema {
  assetIds: number[] | string[];
}
export interface data {
  assetId: string | number;
  address: null | string;
}
export interface NFTOwner {
  data: data[];
}
