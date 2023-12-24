import { z } from "zod";

export const AssetInfoSchema = z.object({
  address: z.string(),
  assetId: z.string().or(z.number()),
  eligiblePoints: z.number().default(0),
  reward: z.number().default(0).optional(),
  collected: z.number().default(0).optional(),
});
export const multiAssetSchema = z.object({
  eligiblePoints: z.number(),
  count: z.number().default(0),
  reward: z.number().default(0).optional(),
  collected: z.number().default(0).optional(),
});
export type T_multiAssetSchema = typeof multiAssetSchema._type;
export const multiMintAssetInfoSchema = z.record(z.record(multiAssetSchema));
// multiMintAssetInfoSchema.parse({
//   hello: {
//     hi: {
//       collected: 1,
//       count: 1,
//       eligiblePoints: 1,
//       reward: 1,
//     },
//   },
// } as typeof multiMintAssetInfoSchema._type);

export const ZOD_PROJECT = z
  .object({
    id: z.string().optional(),
    admin: z.string(),
    project: z.string(),
    project_display_name: z.string().optional(),

    contract: z.number(),
    decimals: z.number().default(6).optional(),

    createdAt: z.any().default(new Date()).optional(),

    assets: z.array(z.number()),

    active: z.boolean().default(true),
    hide: z.boolean().optional().default(false),
    paymentActivated: z.boolean().optional().default(true),

    network: z.enum(["TestNet", "MainNet"]).default("MainNet"),
    percent: z.number().lt(101).gt(0).default(100),
    poolBalance: z.number(),

    profileImage: z.string().optional(),
    headerImage: z.string().optional(),
  })
  .and(
    z
      .object({
        poolType: z.literal("mono-mint"),
        assetInfo: z.record(AssetInfoSchema).optional(),
      })
      .or(
        z.object({
          poolType: z.literal("multi-mint"),
          assetInfo: multiMintAssetInfoSchema.optional(),
        })
      )
  )
  .and(
    z
      .object({
        type: z.literal("token"),
        token: z.number(),
      })
      .or(
        z.object({
          type: z.literal("algo"),
        })
      )
  )
  .and(
    z
      .object({
        rewardType: z.literal("manual"),
        dailyReward: z.number(),
      })
      .or(
        z.object({
          rewardType: z.literal("floor"),
          overrideFloor: z.boolean().optional(),
          floor: z.number(),
        })
      )
  );

//   const d=ZOD_PROJECT.parse({})

export type ProjectType = typeof ZOD_PROJECT._type;
