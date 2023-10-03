export interface Project {
  assetInfo?: {
    [asset: string]: {
      address: string;
      assetId: string;
      eligiblePoints: number;
    };
  };
  assets: number[];
  expectedUsers: number;
  frequency: number;
  expectedAPY: number;
  admins: string[];
  headerImageBlob?: Blob;
  profileImageBlob?: Blob;
  duration: number;
  ending: number;
  started?: number;
  isActive: boolean;
  hide?: boolean;
  override?: boolean;
  count?: number;
  isToken?: boolean;
  network?: "MainNet" | "TesttNet";
  token?: { value: number };
  info: { _hex: string; _isBigNumber: boolean };
  floor?: { value: number };
  percentage?: { value: number };
  frequency_duration_picker?: number | string;
  socials: { discordLink?: string; twitterLink?: string; youtubeLink?: string };
  dailyRewardAmount?: number;
  isManual?: boolean;
}
interface RetrievedData {
  [address: string]: {
    [projectName: string]: Project;
    // {
    //   assetInfo: {
    //     [assetId: number]: {
    //       address: string;
    //       assetId: number;
    //       eligiblePoints: number;
    //     };
    //   };
    //   assets: number[];
    //   // excludedAccounts: string[];
    //   ending: number;
    //   interestRate: number;
    //   referencePrice: number;
    // };
  };
}

export interface queryTypes {
  assetId: number;
  sellerAddress: string;
  creatorRoyalty: number;
  timestamp: number;
  price: number;
  version: string;
}
export default RetrievedData;
