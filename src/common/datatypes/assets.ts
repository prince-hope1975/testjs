export type singleAssetInput = {
  address: string;
};
export type checkedData = {
  project1: {
    assets: number[];
    assetInfo: {
      assetId: number;
      address: string;
    }[];
    excludedAccounts: string[];
    interestRate: number;
    intervalInSecs: number;
    referencePrice: number;
  };
  project2?: {
    assets: number[];
    assetInfo: {
      assetId: number;
      address: string;
    }[];
    excludedAccounts: string[];
    interestRate: number;
    intervalInSecs: number;
    referencePrice: number;
  };
};
