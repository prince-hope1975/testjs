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
  count?: number;
  info: { _hex: string; _isBigNumber: boolean };
  floor?: { value: number };
  percentage?: { value: number };
  frequency_duration_picker?: number | string;
  socials: { discordLink?: string; twitterLink?: string; youtubeLink?: string };
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

export default RetrievedData;
