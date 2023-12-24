import { ZOD_PROJECT } from "../zod";

const dummyData = {
  admin: "AdminUser",
  project: "SampleProject",
  project_display_name: "ProjectDisplayName",
  contract: 123456,
  decimals: 6,
  createdAt: new Date(),
  assets: [1, 2, 3],
  active: true,
  hide: false,
  paymentActivated: true,
  network: "MainNet",
  percent: 80,
  poolBalance: 1000,
  profileImage: "path/to/profile/image.jpg",
  headerImage: "path/to/header/image.jpg",
  poolType: "mono-mint",
  assetInfo: {
    asset1: {
      address: "0x1234567890abcdef",
      assetId: "assetId1",
      eligiblePoints: 50,
      reward: 0,
      collected: 0,
    },
    asset2: {
      address: "0xabcdef1234567890",
      assetId: "assetId2",
      eligiblePoints: 30,
      reward: 0,
      collected: 0,
    },
  },
  type: "token",
  token: 123,
  rewardType: "manual",
  dailyReward: 50,
};

// Example usage:
const parsedData = ZOD_PROJECT.parse(dummyData);
console.log(parsedData);
