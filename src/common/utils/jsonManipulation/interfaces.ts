export interface savedData {
  assets: string[] | number[];
}

export interface dataSchema {}

export interface jsonSchema {
  [projectName: string]: projectTypes;
}

export interface projectTypes {
  assets?: number[];
  expectedAPY?: number;
  ending?: number;
  isActive?: boolean;
  started?: number;
  projectName?: string;
}

export interface acc {
  account?: account;
}
export interface assets {
  amount: number;
  "asset-id": number;
  deleted: boolean;
  "is-frozen": boolean;
  "opted-in-at-round": number;
}
export interface account {
  address: string;
  amount: number;
  "amount-without-pending-rewards": number;
  assets?: assets[];
  started: number;
}
export interface modifiedAssets extends projectTypes, assets {
  // assets: number[];
}
export interface reducedInterface {
  [projectName: string]: modifiedAssets;
}
