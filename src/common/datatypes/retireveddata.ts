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
  network?: "MainNet" | "TestNet";
  version?: "v3" | "v4";
  token?: { value: number };
  info: { _hex: string; _isBigNumber: boolean };
  floor?: { value: number };
  percentage?: { value: number };
  frequency_duration_picker?: number | string;
  socials: { discordLink?: string; twitterLink?: string; youtubeLink?: string };
  dailyRewardAmount?: number;
  isManual?: boolean;
  paymentActivated?: boolean;
  backendType?: backendType;
}
type backendType="multi-mint"|"mono-mint"
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
