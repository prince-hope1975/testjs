// Automatically generated with Reach 0.1.13 (88e48902)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (88e48902)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc3 = stdlib.T_Struct([['addr', ctc0], ['amount', ctc1], ['projectName', ctc2]]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '200'));
  return {
    claimed: [ctc3],
    insufficient: [ctc1],
    newReward: [ctc0, ctc4],
    notify: [ctc5, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    i: ctc3,
    scale: ctc3
    });
  const ctc6 = stdlib.T_Object({
    i: ctc5,
    sign: ctc4
    });
  const ctc7 = stdlib.T_Object({
    bal: ctc3,
    keepGoing: ctc4,
    percent: ctc6,
    totalCurrentAllocatoinToAllUsers: ctc3,
    totalFundsDeposited: ctc3,
    total_amount_claimed: ctc3,
    total_rewards_allcoated: ctc3,
    total_users_claim: ctc3,
    usersNo: ctc3
    });
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc12 = stdlib.T_Object({
    claimed: ctc3,
    rewards: ctc3
    });
  const ctc13 = stdlib.T_Data({
    None: ctc10,
    Some: ctc3
    });
  const ctc14 = stdlib.T_Data({
    None: ctc10,
    Some: ctc12
    });
  const ctc15 = stdlib.T_Data({
    None: ctc10,
    Some: ctc10
    });
  const map0_ctc = ctc13;
  
  const map1_ctc = ctc14;
  
  const map2_ctc = ctc15;
  
  const map3_ctc = ctc15;
  
  const map4_ctc = ctc15;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async (_v2506 ) => {
          const v2506 = stdlib.protect(ctc0, _v2506, null);
        
        const v2507 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v2506, ctc10), null);
        const v2508 = {
          None: 0,
          Some: 1
          }[v2507[0]];
        const v2509 = stdlib.eq(v2508, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2509;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async () => {
        
        
        return v2537;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async (_v2522, _v2523 ) => {
          const v2522 = stdlib.protect(ctc0, _v2522, null);
          const v2523 = stdlib.protect(ctc2, _v2523, null);
        
        const v2524 = [v2522, v2523];
        const v2525 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2524, ctc12), null);
        const v2526 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2527 = stdlib.fromSome(v2525, v2526);
        const v2528 = v2527.claimed;
        
        return v2528;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async (_v2510 ) => {
          const v2510 = stdlib.protect(ctc0, _v2510, null);
        
        const v2511 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v2510, ctc10), null);
        const v2512 = {
          None: 0,
          Some: 1
          }[v2511[0]];
        const v2513 = stdlib.eq(v2512, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2513;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async () => {
        
        
        return v2514;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async () => {
        
        
        return v2530;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async () => {
        
        
        return v2529;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalCurrentAllocatoinToAllUsers = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async () => {
        
        
        return v2514;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalFundsDeposited = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async () => {
        
        
        return v2535;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async () => {
        
        
        return v2531;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async (_v2503 ) => {
          const v2503 = stdlib.protect(ctc0, _v2503, null);
        
        const v2504 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2503, ctc3), null);
        const v2505 = stdlib.fromSome(v2504, stdlib.checkedBigNumberify('./token_v2.rsh:104:58:decimal', stdlib.UInt_max, '0'));
        
        return v2505;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = svs;
      return (await ((async (_v2515, _v2516 ) => {
          const v2515 = stdlib.protect(ctc0, _v2515, null);
          const v2516 = stdlib.protect(ctc2, _v2516, null);
        
        const v2517 = [v2515, v2516];
        const v2518 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2517, ctc12), null);
        const v2519 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2520 = stdlib.fromSome(v2518, v2519);
        const v2521 = v2520.rewards;
        
        return v2521;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        Admins: {
          decode: Info_Admins,
          dom: [ctc0],
          rng: ctc4
          },
        balance: {
          decode: Info_balance,
          dom: [],
          rng: ctc3
          },
        claimed: {
          decode: Info_claimed,
          dom: [ctc0, ctc2],
          rng: ctc3
          },
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc4
          },
        totalAllocatedFunds: {
          decode: Info_totalAllocatedFunds,
          dom: [],
          rng: ctc3
          },
        totalAmountClaimed: {
          decode: Info_totalAmountClaimed,
          dom: [],
          rng: ctc3
          },
        totalClaimed: {
          decode: Info_totalClaimed,
          dom: [],
          rng: ctc3
          },
        totalCurrentAllocatoinToAllUsers: {
          decode: Info_totalCurrentAllocatoinToAllUsers,
          dom: [],
          rng: ctc3
          },
        totalFundsDeposited: {
          decode: Info_totalFundsDeposited,
          dom: [],
          rng: ctc3
          },
        totalOptedIn: {
          decode: Info_totalOptedIn,
          dom: [],
          rng: ctc3
          },
        totalRewards: {
          decode: Info_totalRewards,
          dom: [ctc0],
          rng: ctc3
          },
        userReward: {
          decode: Info_userReward,
          dom: [ctc0, ctc2],
          rng: ctc3
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc7, ctc9, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc5, ctc5, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function _Admin_addAdmin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_addAdmin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_addAdmin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc15,
    Admin_deposit0_233: ctc16,
    Admin_editUserReward0_233: ctc17,
    Admin_endContractAndTransfer0_233: ctc18,
    Admin_revokeAdmin0_233: ctc15,
    Admin_setReward0_233: ctc19,
    User_claim0_233: ctc20,
    User_optin0_233: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2620 = ctc.selfAddress();
  const v2622 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_addAdmin0_233" (defined at: ./token_v2.rsh:203:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v2625 = stdlib.addressEq(v2620, v2445);
  const v2626 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2620, ctc0), null);
  const v2627 = {
    None: 0,
    Some: 1
    }[v2626[0]];
  const v2628 = stdlib.eq(v2627, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2629 = v2625 ? true : v2628;
  stdlib.assert(v2629, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_addAdmin0_233" (defined at: ./token_v2.rsh:203:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v2636 = ['Admin_addAdmin0_233', v2622];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2636],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:209:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:209:14:decimal', stdlib.UInt_max, '0'), v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2841, ctc0), null);
          ;
          ;
          const v2986 = v2845[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v2986, ctc0, null);
          const v2995 = null;
          const v2996 = await txn1.getOutput('Admin_addAdmin', 'v2995', ctc0, v2995);
          
          const v3003 = v2459.keepGoing;
          const v3004 = v2459.percent;
          const v3011 = {
            bal: v2532,
            keepGoing: v3003,
            percent: v3004,
            totalCurrentAllocatoinToAllUsers: v2514,
            totalFundsDeposited: v2535,
            total_amount_claimed: v2530,
            total_rewards_allcoated: v2533,
            total_users_claim: v2529,
            usersNo: v2531
            };
          const v10936 = v3011;
          const v10938 = v2462;
          const v10939 = v2463;
          const v10940 = v3011.keepGoing;
          if (v10940) {
            const v10941 = v3011.totalCurrentAllocatoinToAllUsers;
            const v10942 = v3011.total_users_claim;
            const v10943 = v3011.total_amount_claimed;
            const v10944 = v3011.usersNo;
            const v10945 = v3011.bal;
            const v10946 = v3011.total_rewards_allcoated;
            const v10947 = v3011.totalFundsDeposited;
            const v10948 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v10949 = v10948[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10955 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v10956 = v10955[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: v2447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      undefined /* setApiDetails */;
      const v2851 = stdlib.addressEq(v2841, v2445);
      const v2852 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2841, ctc0), null);
      const v2853 = {
        None: 0,
        Some: 1
        }[v2852[0]];
      const v2854 = stdlib.eq(v2853, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2855 = v2851 ? true : v2854;
      stdlib.assert(v2855, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      ;
      const v2986 = v2845[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v2986, ctc0, null);
      const v2995 = null;
      const v2996 = await txn1.getOutput('Admin_addAdmin', 'v2995', ctc0, v2995);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v2845, v2996), {
          at: './token_v2.rsh:203:11:application',
          fs: ['at ./token_v2.rsh:203:11:application call to [unknown function] (defined at: ./token_v2.rsh:203:11:function exp)', 'at ./token_v2.rsh:212:14:application call to "ret" (defined at: ./token_v2.rsh:210:15:function exp)', 'at ./token_v2.rsh:210:15:application call to [unknown function] (defined at: ./token_v2.rsh:210:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v3003 = v2459.keepGoing;
      const v3004 = v2459.percent;
      const v3011 = {
        bal: v2532,
        keepGoing: v3003,
        percent: v3004,
        totalCurrentAllocatoinToAllUsers: v2514,
        totalFundsDeposited: v2535,
        total_amount_claimed: v2530,
        total_rewards_allcoated: v2533,
        total_users_claim: v2529,
        usersNo: v2531
        };
      const v10936 = v3011;
      const v10938 = v2462;
      const v10939 = v2463;
      const v10940 = v3011.keepGoing;
      if (v10940) {
        const v10941 = v3011.totalCurrentAllocatoinToAllUsers;
        const v10942 = v3011.total_users_claim;
        const v10943 = v3011.total_amount_claimed;
        const v10944 = v3011.usersNo;
        const v10945 = v3011.bal;
        const v10946 = v3011.total_rewards_allcoated;
        const v10947 = v3011.totalFundsDeposited;
        const v10948 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v10949 = v10948[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10955 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v10956 = v10955[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_deposit3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_deposit3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_deposit3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc16,
    Admin_deposit0_233: ctc15,
    Admin_editUserReward0_233: ctc17,
    Admin_endContractAndTransfer0_233: ctc18,
    Admin_revokeAdmin0_233: ctc16,
    Admin_setReward0_233: ctc19,
    User_claim0_233: ctc20,
    User_optin0_233: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2538 = ctc.selfAddress();
  const v2540 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_deposit0_233" (defined at: ./token_v2.rsh:138:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v2541 = v2540[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2543 = stdlib.addressEq(v2538, v2445);
  const v2544 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2538, ctc0), null);
  const v2545 = {
    None: 0,
    Some: 1
    }[v2544[0]];
  const v2546 = stdlib.eq(v2545, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2547 = v2543 ? true : v2546;
  stdlib.assert(v2547, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_deposit0_233" (defined at: ./token_v2.rsh:138:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v2554 = ['Admin_deposit0_233', v2540];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2554],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:141:10:decimal', stdlib.UInt_max, '0'), [[v2541, v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v3362 = v3343[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2841, ctc0), null);
          ;
          const v3479 = stdlib.add(v2537, v3362);
          const v3481 = stdlib.Array_set(v2536, '0', v3479);
          const v3482 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3481);
          sim_r.txns.push({
            amt: v3362,
            kind: 'to',
            tok: v2447
            });
          const v3520 = null;
          const v3521 = await txn1.getOutput('Admin_deposit', 'v3520', ctc0, v3520);
          
          const v3528 = v2459.keepGoing;
          const v3529 = v2459.percent;
          const v3536 = stdlib.safeAdd(v2532, v3362);
          const v3537 = stdlib.safeAdd(v2535, v3362);
          const v3538 = {
            bal: v3536,
            keepGoing: v3528,
            percent: v3529,
            totalCurrentAllocatoinToAllUsers: v2514,
            totalFundsDeposited: v3537,
            total_amount_claimed: v2530,
            total_rewards_allcoated: v2533,
            total_users_claim: v2529,
            usersNo: v2531
            };
          const v11188 = v3538;
          const v11190 = v3482;
          const v11191 = v2463;
          const v11192 = v3538.keepGoing;
          if (v11192) {
            const v11193 = v3538.totalCurrentAllocatoinToAllUsers;
            const v11194 = v3538.total_users_claim;
            const v11195 = v3538.total_amount_claimed;
            const v11196 = v3538.usersNo;
            const v11197 = v3538.bal;
            const v11198 = v3538.total_rewards_allcoated;
            const v11199 = v3538.totalFundsDeposited;
            const v11200 = v3482[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11201 = v11200[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11207 = v3482[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11208 = v11207[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: v2447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      undefined /* setApiDetails */;
      const v3362 = v3343[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
      const v3363 = stdlib.addressEq(v2841, v2445);
      const v3364 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2841, ctc0), null);
      const v3365 = {
        None: 0,
        Some: 1
        }[v3364[0]];
      const v3366 = stdlib.eq(v3365, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3367 = v3363 ? true : v3366;
      stdlib.assert(v3367, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      ;
      const v3479 = stdlib.add(v2537, v3362);
      const v3481 = stdlib.Array_set(v2536, '0', v3479);
      const v3482 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3481);
      ;
      const v3520 = null;
      const v3521 = await txn1.getOutput('Admin_deposit', 'v3520', ctc0, v3520);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v3343, v3521), {
          at: './token_v2.rsh:138:11:application',
          fs: ['at ./token_v2.rsh:138:11:application call to [unknown function] (defined at: ./token_v2.rsh:138:11:function exp)', 'at ./token_v2.rsh:143:14:application call to "ret" (defined at: ./token_v2.rsh:142:15:function exp)', 'at ./token_v2.rsh:142:15:application call to [unknown function] (defined at: ./token_v2.rsh:142:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v3528 = v2459.keepGoing;
      const v3529 = v2459.percent;
      const v3536 = stdlib.safeAdd(v2532, v3362);
      const v3537 = stdlib.safeAdd(v2535, v3362);
      const v3538 = {
        bal: v3536,
        keepGoing: v3528,
        percent: v3529,
        totalCurrentAllocatoinToAllUsers: v2514,
        totalFundsDeposited: v3537,
        total_amount_claimed: v2530,
        total_rewards_allcoated: v2533,
        total_users_claim: v2529,
        usersNo: v2531
        };
      const v11188 = v3538;
      const v11190 = v3482;
      const v11191 = v2463;
      const v11192 = v3538.keepGoing;
      if (v11192) {
        const v11193 = v3538.totalCurrentAllocatoinToAllUsers;
        const v11194 = v3538.total_users_claim;
        const v11195 = v3538.total_amount_claimed;
        const v11196 = v3538.usersNo;
        const v11197 = v3538.bal;
        const v11198 = v3538.total_rewards_allcoated;
        const v11199 = v3538.totalFundsDeposited;
        const v11200 = v3482[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11201 = v11200[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11207 = v3482[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11208 = v11207[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_editUserReward3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_editUserReward3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_editUserReward3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc16,
    Admin_deposit0_233: ctc17,
    Admin_editUserReward0_233: ctc15,
    Admin_endContractAndTransfer0_233: ctc18,
    Admin_revokeAdmin0_233: ctc16,
    Admin_setReward0_233: ctc19,
    User_claim0_233: ctc20,
    User_optin0_233: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2594 = ctc.selfAddress();
  const v2596 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v2598 = v2596[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2601 = stdlib.addressEq(v2594, v2445);
  const v2602 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2594, ctc0), null);
  const v2603 = {
    None: 0,
    Some: 1
    }[v2602[0]];
  const v2604 = stdlib.eq(v2603, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2605 = v2601 ? true : v2604;
  stdlib.assert(v2605, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v2609 = stdlib.le(v2598, v2537);
  stdlib.assert(v2609, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v2618 = ['Admin_editUserReward0_233', v2596];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2618],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:195:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:195:14:decimal', stdlib.UInt_max, '0'), v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v3875 = v3841[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2841, ctc0), null);
          ;
          ;
          const v4039 = v3841[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v4039, ctc1, v3875);
          const v4053 = null;
          const v4054 = await txn1.getOutput('Admin_editUserReward', 'v4053', ctc0, v4053);
          
          const v4062 = v2459.keepGoing;
          const v4063 = v2459.percent;
          const v4070 = {
            bal: v2532,
            keepGoing: v4062,
            percent: v4063,
            totalCurrentAllocatoinToAllUsers: v2514,
            totalFundsDeposited: v2535,
            total_amount_claimed: v2530,
            total_rewards_allcoated: v2533,
            total_users_claim: v2529,
            usersNo: v2531
            };
          const v11440 = v4070;
          const v11442 = v2462;
          const v11443 = v2463;
          const v11444 = v4070.keepGoing;
          if (v11444) {
            const v11445 = v4070.totalCurrentAllocatoinToAllUsers;
            const v11446 = v4070.total_users_claim;
            const v11447 = v4070.total_amount_claimed;
            const v11448 = v4070.usersNo;
            const v11449 = v4070.bal;
            const v11450 = v4070.total_rewards_allcoated;
            const v11451 = v4070.totalFundsDeposited;
            const v11452 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11453 = v11452[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11459 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11460 = v11459[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: v2447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      undefined /* setApiDetails */;
      const v3875 = v3841[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
      const v3876 = stdlib.addressEq(v2841, v2445);
      const v3877 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2841, ctc0), null);
      const v3878 = {
        None: 0,
        Some: 1
        }[v3877[0]];
      const v3879 = stdlib.eq(v3878, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3880 = v3876 ? true : v3879;
      stdlib.assert(v3880, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v3884 = stdlib.le(v3875, v2537);
      stdlib.assert(v3884, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      ;
      const v4039 = v3841[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v4039, ctc1, v3875);
      const v4053 = null;
      const v4054 = await txn1.getOutput('Admin_editUserReward', 'v4053', ctc0, v4053);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v3841, v4054), {
          at: './token_v2.rsh:190:11:application',
          fs: ['at ./token_v2.rsh:190:11:application call to [unknown function] (defined at: ./token_v2.rsh:190:11:function exp)', 'at ./token_v2.rsh:198:14:application call to "ret" (defined at: ./token_v2.rsh:196:15:function exp)', 'at ./token_v2.rsh:196:15:application call to [unknown function] (defined at: ./token_v2.rsh:196:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v4062 = v2459.keepGoing;
      const v4063 = v2459.percent;
      const v4070 = {
        bal: v2532,
        keepGoing: v4062,
        percent: v4063,
        totalCurrentAllocatoinToAllUsers: v2514,
        totalFundsDeposited: v2535,
        total_amount_claimed: v2530,
        total_rewards_allcoated: v2533,
        total_users_claim: v2529,
        usersNo: v2531
        };
      const v11440 = v4070;
      const v11442 = v2462;
      const v11443 = v2463;
      const v11444 = v4070.keepGoing;
      if (v11444) {
        const v11445 = v4070.totalCurrentAllocatoinToAllUsers;
        const v11446 = v4070.total_users_claim;
        const v11447 = v4070.total_amount_claimed;
        const v11448 = v4070.usersNo;
        const v11449 = v4070.bal;
        const v11450 = v4070.total_rewards_allcoated;
        const v11451 = v4070.totalFundsDeposited;
        const v11452 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11453 = v11452[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11459 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11460 = v11459[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_endContractAndTransfer3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_endContractAndTransfer3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_endContractAndTransfer3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc16,
    Admin_deposit0_233: ctc17,
    Admin_editUserReward0_233: ctc18,
    Admin_endContractAndTransfer0_233: ctc15,
    Admin_revokeAdmin0_233: ctc16,
    Admin_setReward0_233: ctc19,
    User_claim0_233: ctc20,
    User_optin0_233: ctc15
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2684 = ctc.selfAddress();
  const v2686 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v2687 = stdlib.addressEq(v2445, v2684);
  stdlib.assert(v2687, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v2689 = stdlib.eq(v2514, stdlib.checkedBigNumberify('./token_v2.rsh:338:46:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2689, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot end contract When total allocations greater than 0',
    who: 'Admin_endContractAndTransfer'
    });
  const v2694 = ['Admin_endContractAndTransfer0_233', v2686];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2694],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:342:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:342:14:decimal', stdlib.UInt_max, '0'), v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          ;
          const v4575 = null;
          const v4576 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4575', ctc0, v4575);
          
          const v4583 = v2459.percent;
          const v4590 = {
            bal: v2532,
            keepGoing: false,
            percent: v4583,
            totalCurrentAllocatoinToAllUsers: v2514,
            totalFundsDeposited: v2535,
            total_amount_claimed: v2530,
            total_rewards_allcoated: v2533,
            total_users_claim: v2529,
            usersNo: v2531
            };
          const v11692 = v4590;
          const v11694 = v2462;
          const v11695 = v2463;
          const v11696 = v4590.keepGoing;
          if (v11696) {
            const v11697 = v4590.totalCurrentAllocatoinToAllUsers;
            const v11698 = v4590.total_users_claim;
            const v11699 = v4590.total_amount_claimed;
            const v11700 = v4590.usersNo;
            const v11701 = v4590.bal;
            const v11702 = v4590.total_rewards_allcoated;
            const v11703 = v4590.totalFundsDeposited;
            const v11704 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11705 = v11704[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11711 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11712 = v11711[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: v2447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      undefined /* setApiDetails */;
      const v4391 = stdlib.addressEq(v2445, v2841);
      stdlib.assert(v4391, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      const v4393 = stdlib.eq(v2514, stdlib.checkedBigNumberify('./token_v2.rsh:338:46:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4393, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot end contract When total allocations greater than 0',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      ;
      const v4575 = null;
      const v4576 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4575', ctc0, v4575);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v4339, v4576), {
          at: './token_v2.rsh:335:11:application',
          fs: ['at ./token_v2.rsh:335:11:application call to [unknown function] (defined at: ./token_v2.rsh:335:11:function exp)', 'at ./token_v2.rsh:344:14:application call to "ret" (defined at: ./token_v2.rsh:343:15:function exp)', 'at ./token_v2.rsh:343:15:application call to [unknown function] (defined at: ./token_v2.rsh:343:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v4583 = v2459.percent;
      const v4590 = {
        bal: v2532,
        keepGoing: false,
        percent: v4583,
        totalCurrentAllocatoinToAllUsers: v2514,
        totalFundsDeposited: v2535,
        total_amount_claimed: v2530,
        total_rewards_allcoated: v2533,
        total_users_claim: v2529,
        usersNo: v2531
        };
      const v11692 = v4590;
      const v11694 = v2462;
      const v11695 = v2463;
      const v11696 = v4590.keepGoing;
      if (v11696) {
        const v11697 = v4590.totalCurrentAllocatoinToAllUsers;
        const v11698 = v4590.total_users_claim;
        const v11699 = v4590.total_amount_claimed;
        const v11700 = v4590.usersNo;
        const v11701 = v4590.bal;
        const v11702 = v4590.total_rewards_allcoated;
        const v11703 = v4590.totalFundsDeposited;
        const v11704 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11705 = v11704[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11711 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11712 = v11711[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_revokeAdmin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_revokeAdmin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_revokeAdmin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc1]);
  const ctc17 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc18 = stdlib.T_Tuple([]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc15,
    Admin_deposit0_233: ctc16,
    Admin_editUserReward0_233: ctc17,
    Admin_endContractAndTransfer0_233: ctc18,
    Admin_revokeAdmin0_233: ctc15,
    Admin_setReward0_233: ctc19,
    User_claim0_233: ctc20,
    User_optin0_233: ctc18
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2638 = ctc.selfAddress();
  const v2640 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./token_v2.rsh:217:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v2643 = stdlib.addressEq(v2638, v2445);
  stdlib.assert(v2643, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./token_v2.rsh:217:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v2650 = ['Admin_revokeAdmin0_233', v2640];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2650],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:220:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:220:14:decimal', stdlib.UInt_max, '0'), v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          ;
          const v5091 = v4837[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v5091, ctc0, undefined /* Nothing */);
          const v5096 = null;
          const v5097 = await txn1.getOutput('Admin_revokeAdmin', 'v5096', ctc0, v5096);
          
          const v5104 = v2459.keepGoing;
          const v5105 = v2459.percent;
          const v5112 = {
            bal: v2532,
            keepGoing: v5104,
            percent: v5105,
            totalCurrentAllocatoinToAllUsers: v2514,
            totalFundsDeposited: v2535,
            total_amount_claimed: v2530,
            total_rewards_allcoated: v2533,
            total_users_claim: v2529,
            usersNo: v2531
            };
          const v11944 = v5112;
          const v11946 = v2462;
          const v11947 = v2463;
          const v11948 = v5112.keepGoing;
          if (v11948) {
            const v11949 = v5112.totalCurrentAllocatoinToAllUsers;
            const v11950 = v5112.total_users_claim;
            const v11951 = v5112.total_amount_claimed;
            const v11952 = v5112.usersNo;
            const v11953 = v5112.bal;
            const v11954 = v5112.total_rewards_allcoated;
            const v11955 = v5112.totalFundsDeposited;
            const v11956 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11957 = v11956[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11963 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11964 = v11963[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: v2447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      undefined /* setApiDetails */;
      const v4901 = stdlib.addressEq(v2841, v2445);
      stdlib.assert(v4901, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      ;
      const v5091 = v4837[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v5091, ctc0, undefined /* Nothing */);
      const v5096 = null;
      const v5097 = await txn1.getOutput('Admin_revokeAdmin', 'v5096', ctc0, v5096);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v4837, v5097), {
          at: './token_v2.rsh:217:11:application',
          fs: ['at ./token_v2.rsh:217:11:application call to [unknown function] (defined at: ./token_v2.rsh:217:11:function exp)', 'at ./token_v2.rsh:223:14:application call to "ret" (defined at: ./token_v2.rsh:221:15:function exp)', 'at ./token_v2.rsh:221:15:application call to [unknown function] (defined at: ./token_v2.rsh:221:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5104 = v2459.keepGoing;
      const v5105 = v2459.percent;
      const v5112 = {
        bal: v2532,
        keepGoing: v5104,
        percent: v5105,
        totalCurrentAllocatoinToAllUsers: v2514,
        totalFundsDeposited: v2535,
        total_amount_claimed: v2530,
        total_rewards_allcoated: v2533,
        total_users_claim: v2529,
        usersNo: v2531
        };
      const v11944 = v5112;
      const v11946 = v2462;
      const v11947 = v2463;
      const v11948 = v5112.keepGoing;
      if (v11948) {
        const v11949 = v5112.totalCurrentAllocatoinToAllUsers;
        const v11950 = v5112.total_users_claim;
        const v11951 = v5112.total_amount_claimed;
        const v11952 = v5112.usersNo;
        const v11953 = v5112.bal;
        const v11954 = v5112.total_rewards_allcoated;
        const v11955 = v5112.totalFundsDeposited;
        const v11956 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11957 = v11956[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11963 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11964 = v11963[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Admin_setReward3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Admin_setReward3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Admin_setReward3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc16,
    Admin_deposit0_233: ctc17,
    Admin_editUserReward0_233: ctc18,
    Admin_endContractAndTransfer0_233: ctc19,
    Admin_revokeAdmin0_233: ctc16,
    Admin_setReward0_233: ctc15,
    User_claim0_233: ctc20,
    User_optin0_233: ctc19
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc8]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2558 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v2559 = v2558[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2561 = v2558[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2567 = stdlib.gt(v2561, v2537);
  const v2570 = stdlib.safeSub(v2537, v2561);
  const v2571 = stdlib.ge(v2570, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2571, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot have an amout that would result to a negative balance',
    who: 'Admin_setReward'
    });
  stdlib.assert(v2567, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Balance has to be greater than Amt',
    who: 'Admin_setReward'
    });
  const v2576 = stdlib.safeAdd(v2514, v2561);
  const v2577 = stdlib.ge(v2537, v2576);
  stdlib.assert(v2577, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Balance has to be greater than total allocation ',
    who: 'Admin_setReward'
    });
  const v2579 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v2559, ctc0), null);
  const v2580 = {
    None: 0,
    Some: 1
    }[v2579[0]];
  const v2581 = stdlib.eq(v2580, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2581, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v2592 = ['Admin_setReward0_233', v2558];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2592],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:165:10:decimal', stdlib.UInt_max, '0'), [[v2561, v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v5408 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
          const v5410 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
          const v5422 = stdlib.safeAdd(v2514, v5410);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v5408, ctc0), null);
          ;
          const v5471 = stdlib.add(v2537, v5410);
          const v5473 = stdlib.Array_set(v2536, '0', v5471);
          const v5474 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5473);
          sim_r.txns.push({
            amt: v5410,
            kind: 'to',
            tok: v2447
            });
          const v5614 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
          const v5616 = v5474[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
          const v5617 = v5616[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
          const v5637 = [v5408, v5614];
          const v5638 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v5637, ctc3), null);
          const v5639 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5640 = stdlib.fromSome(v5638, v5639);
          const v5642 = v5640.claimed;
          const v5643 = v5640.rewards;
          const v5645 = stdlib.safeAdd(v5643, v5410);
          const v5646 = {
            claimed: v5642,
            rewards: v5645
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v5637, ctc3, v5646);
          const v5647 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5408, ctc1), null);
          const v5648 = stdlib.fromSome(v5647, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
          const v5649 = stdlib.safeAdd(v5648, v5410);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5408, ctc1, v5649);
          const v5650 = true;
          const v5651 = await txn1.getOutput('Admin_setReward', 'v5650', ctc9, v5650);
          
          const v5660 = v2459.keepGoing;
          const v5661 = v2459.percent;
          const v5670 = stdlib.safeAdd(v2532, v5410);
          const v5671 = {
            bal: v5670,
            keepGoing: v5660,
            percent: v5661,
            totalCurrentAllocatoinToAllUsers: v5422,
            totalFundsDeposited: v2535,
            total_amount_claimed: v2530,
            total_rewards_allcoated: v2533,
            total_users_claim: v2529,
            usersNo: v2531
            };
          const v12196 = v5671;
          const v12198 = v5474;
          const v12199 = v2463;
          const v12200 = v5671.keepGoing;
          if (v12200) {
            const v12201 = v5671.totalCurrentAllocatoinToAllUsers;
            const v12202 = v5671.total_users_claim;
            const v12203 = v5671.total_amount_claimed;
            const v12204 = v5671.usersNo;
            const v12205 = v5671.bal;
            const v12206 = v5671.total_rewards_allcoated;
            const v12207 = v5671.totalFundsDeposited;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: v2447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      undefined /* setApiDetails */;
      const v5408 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
      const v5410 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
      const v5413 = stdlib.gt(v5410, v2537);
      const v5416 = stdlib.safeSub(v2537, v5410);
      const v5417 = stdlib.ge(v5416, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5417, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      stdlib.assert(v5413, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v5422 = stdlib.safeAdd(v2514, v5410);
      const v5423 = stdlib.ge(v2537, v5422);
      stdlib.assert(v5423, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v5425 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v5408, ctc0), null);
      const v5426 = {
        None: 0,
        Some: 1
        }[v5425[0]];
      const v5427 = stdlib.eq(v5426, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5427, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      ;
      const v5471 = stdlib.add(v2537, v5410);
      const v5473 = stdlib.Array_set(v2536, '0', v5471);
      const v5474 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5473);
      ;
      const v5614 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
      const v5616 = v5474[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
      const v5617 = v5616[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
      const v5618 = stdlib.gt(v5410, v5617);
      const v5621 = stdlib.safeSub(v5617, v5410);
      const v5622 = stdlib.ge(v5621, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5622, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      stdlib.assert(v5618, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v5628 = stdlib.ge(v5617, v5422);
      stdlib.assert(v5628, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v5637 = [v5408, v5614];
      const v5638 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v5637, ctc3), null);
      const v5639 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5640 = stdlib.fromSome(v5638, v5639);
      const v5642 = v5640.claimed;
      const v5643 = v5640.rewards;
      const v5645 = stdlib.safeAdd(v5643, v5410);
      const v5646 = {
        claimed: v5642,
        rewards: v5645
        };
      await stdlib.mapSet(map1, ctc22, v5637, ctc3, v5646);
      const v5647 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5408, ctc1), null);
      const v5648 = stdlib.fromSome(v5647, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
      const v5649 = stdlib.safeAdd(v5648, v5410);
      await stdlib.mapSet(map0, ctc6, v5408, ctc1, v5649);
      const v5650 = true;
      const v5651 = await txn1.getOutput('Admin_setReward', 'v5650', ctc9, v5650);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v5335, v5651), {
          at: './token_v2.rsh:152:11:application',
          fs: ['at ./token_v2.rsh:152:11:application call to [unknown function] (defined at: ./token_v2.rsh:152:11:function exp)', 'at ./token_v2.rsh:177:14:application call to "ret" (defined at: ./token_v2.rsh:166:15:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      const v5660 = v2459.keepGoing;
      const v5661 = v2459.percent;
      const v5670 = stdlib.safeAdd(v2532, v5410);
      const v5671 = {
        bal: v5670,
        keepGoing: v5660,
        percent: v5661,
        totalCurrentAllocatoinToAllUsers: v5422,
        totalFundsDeposited: v2535,
        total_amount_claimed: v2530,
        total_rewards_allcoated: v2533,
        total_users_claim: v2529,
        usersNo: v2531
        };
      const v12196 = v5671;
      const v12198 = v5474;
      const v12199 = v2463;
      const v12200 = v5671.keepGoing;
      if (v12200) {
        const v12201 = v5671.totalCurrentAllocatoinToAllUsers;
        const v12202 = v5671.total_users_claim;
        const v12203 = v5671.total_amount_claimed;
        const v12204 = v5671.usersNo;
        const v12205 = v5671.bal;
        const v12206 = v5671.total_rewards_allcoated;
        const v12207 = v5671.totalFundsDeposited;
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      return;
      break;
      }
    }
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc7 = stdlib.T_Token;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8, ctc1]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc8, ctc7, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc15 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc9,
    Admin_deposit0_233: ctc10,
    Admin_editUserReward0_233: ctc11,
    Admin_endContractAndTransfer0_233: ctc12,
    Admin_revokeAdmin0_233: ctc9,
    Admin_setReward0_233: ctc13,
    User_claim0_233: ctc14,
    User_optin0_233: ctc12
    });
  const ctc16 = stdlib.T_Tuple([ctc8, ctc7]);
  const ctc17 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false
    });
  
  
  const v2436 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2437 = [v2436];
  const v2441 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2442 = stdlib.protect(ctc7, interact.tok, 'for Deployer\'s interact field tok');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2441, v2442],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc7],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:65:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2446, v2447], secs: v2449, time: v2448, didSend: v29, from: v2445 } = txn1;
      
      const v2450 = v2437[stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0')];
      const v2451 = stdlib.Array_set(v2450, '0', stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'));
      const v2452 = stdlib.Array_set(v2437, stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'), v2451);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2447
        });
      ;
      const v2454 = await ctc.getContractInfo();
      
      const v2456 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v2457 = {
        i: v2456,
        sign: true
        };
      const v2458 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v2457,
        totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2459 = v2458;
      const v2460 = v2448;
      const v2462 = v2452;
      const v2463 = stdlib.checkedBigNumberify('./token_v2.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v2502 = v2459.keepGoing;
        
        return v2502;})()) {
        const v2514 = v2459.totalCurrentAllocatoinToAllUsers;
        const v2529 = v2459.total_users_claim;
        const v2530 = v2459.total_amount_claimed;
        const v2531 = v2459.usersNo;
        const v2532 = v2459.bal;
        const v2533 = v2459.total_rewards_allcoated;
        const v2535 = v2459.totalFundsDeposited;
        const v2536 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v2537 = v2536[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v6862 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v6863 = v6862[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2445,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2445,
          tok: v2447
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2447
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v2446, v2447], secs: v2449, time: v2448, didSend: v29, from: v2445 } = txn1;
  const v2450 = v2437[stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0')];
  const v2451 = stdlib.Array_set(v2450, '0', stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'));
  const v2452 = stdlib.Array_set(v2437, stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'), v2451);
  ;
  ;
  const v2454 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2454), {
    at: './token_v2.rsh:67:27:application',
    fs: ['at ./token_v2.rsh:67:27:application call to [unknown function] (defined at: ./token_v2.rsh:67:27:function exp)', 'at ./token_v2.rsh:67:27:application call to "liftedInteract" (defined at: ./token_v2.rsh:67:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2456 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v2457 = {
    i: v2456,
    sign: true
    };
  const v2458 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v2457,
    totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2459 = v2458;
  let v2460 = v2448;
  let v2462 = v2452;
  let v2463 = stdlib.checkedBigNumberify('./token_v2.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v2502 = v2459.keepGoing;
    
    return v2502;})()) {
    const v2514 = v2459.totalCurrentAllocatoinToAllUsers;
    const v2529 = v2459.total_users_claim;
    const v2530 = v2459.total_amount_claimed;
    const v2531 = v2459.usersNo;
    const v2532 = v2459.bal;
    const v2533 = v2459.total_rewards_allcoated;
    const v2535 = v2459.totalFundsDeposited;
    const v2536 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
    const v2537 = v2536[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn3;
    switch (v2842[0]) {
      case 'Admin_addAdmin0_233': {
        const v2845 = v2842[1];
        undefined /* setApiDetails */;
        const v2851 = stdlib.addressEq(v2841, v2445);
        const v2852 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2841, ctc0), null);
        const v2853 = {
          None: 0,
          Some: 1
          }[v2852[0]];
        const v2854 = stdlib.eq(v2853, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2855 = v2851 ? true : v2854;
        stdlib.assert(v2855, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        ;
        const v2986 = v2845[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v2986, ctc0, null);
        const v2995 = null;
        await txn3.getOutput('Admin_addAdmin', 'v2995', ctc0, v2995);
        const v3003 = v2459.keepGoing;
        const v3004 = v2459.percent;
        const v3011 = {
          bal: v2532,
          keepGoing: v3003,
          percent: v3004,
          totalCurrentAllocatoinToAllUsers: v2514,
          totalFundsDeposited: v2535,
          total_amount_claimed: v2530,
          total_rewards_allcoated: v2533,
          total_users_claim: v2529,
          usersNo: v2531
          };
        const cv2459 = v3011;
        const cv2460 = v2843;
        const cv2462 = v2462;
        const cv2463 = v2463;
        
        v2459 = cv2459;
        v2460 = cv2460;
        v2462 = cv2462;
        v2463 = cv2463;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_233': {
        const v3343 = v2842[1];
        undefined /* setApiDetails */;
        const v3362 = v3343[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
        const v3363 = stdlib.addressEq(v2841, v2445);
        const v3364 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2841, ctc0), null);
        const v3365 = {
          None: 0,
          Some: 1
          }[v3364[0]];
        const v3366 = stdlib.eq(v3365, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3367 = v3363 ? true : v3366;
        stdlib.assert(v3367, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        ;
        const v3479 = stdlib.add(v2537, v3362);
        const v3481 = stdlib.Array_set(v2536, '0', v3479);
        const v3482 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3481);
        ;
        const v3520 = null;
        await txn3.getOutput('Admin_deposit', 'v3520', ctc0, v3520);
        const v3528 = v2459.keepGoing;
        const v3529 = v2459.percent;
        const v3536 = stdlib.safeAdd(v2532, v3362);
        const v3537 = stdlib.safeAdd(v2535, v3362);
        const v3538 = {
          bal: v3536,
          keepGoing: v3528,
          percent: v3529,
          totalCurrentAllocatoinToAllUsers: v2514,
          totalFundsDeposited: v3537,
          total_amount_claimed: v2530,
          total_rewards_allcoated: v2533,
          total_users_claim: v2529,
          usersNo: v2531
          };
        const cv2459 = v3538;
        const cv2460 = v2843;
        const cv2462 = v3482;
        const cv2463 = v2463;
        
        v2459 = cv2459;
        v2460 = cv2460;
        v2462 = cv2462;
        v2463 = cv2463;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_233': {
        const v3841 = v2842[1];
        undefined /* setApiDetails */;
        const v3875 = v3841[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
        const v3876 = stdlib.addressEq(v2841, v2445);
        const v3877 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2841, ctc0), null);
        const v3878 = {
          None: 0,
          Some: 1
          }[v3877[0]];
        const v3879 = stdlib.eq(v3878, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3880 = v3876 ? true : v3879;
        stdlib.assert(v3880, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v3884 = stdlib.le(v3875, v2537);
        stdlib.assert(v3884, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        ;
        const v4039 = v3841[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc8, v4039, ctc1, v3875);
        const v4053 = null;
        await txn3.getOutput('Admin_editUserReward', 'v4053', ctc0, v4053);
        const v4062 = v2459.keepGoing;
        const v4063 = v2459.percent;
        const v4070 = {
          bal: v2532,
          keepGoing: v4062,
          percent: v4063,
          totalCurrentAllocatoinToAllUsers: v2514,
          totalFundsDeposited: v2535,
          total_amount_claimed: v2530,
          total_rewards_allcoated: v2533,
          total_users_claim: v2529,
          usersNo: v2531
          };
        const cv2459 = v4070;
        const cv2460 = v2843;
        const cv2462 = v2462;
        const cv2463 = v2463;
        
        v2459 = cv2459;
        v2460 = cv2460;
        v2462 = cv2462;
        v2463 = cv2463;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_233': {
        const v4339 = v2842[1];
        undefined /* setApiDetails */;
        const v4391 = stdlib.addressEq(v2445, v2841);
        stdlib.assert(v4391, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        const v4393 = stdlib.eq(v2514, stdlib.checkedBigNumberify('./token_v2.rsh:338:46:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4393, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot end contract When total allocations greater than 0',
          who: 'Deployer'
          });
        ;
        ;
        const v4575 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v4575', ctc0, v4575);
        const v4583 = v2459.percent;
        const v4590 = {
          bal: v2532,
          keepGoing: false,
          percent: v4583,
          totalCurrentAllocatoinToAllUsers: v2514,
          totalFundsDeposited: v2535,
          total_amount_claimed: v2530,
          total_rewards_allcoated: v2533,
          total_users_claim: v2529,
          usersNo: v2531
          };
        const cv2459 = v4590;
        const cv2460 = v2843;
        const cv2462 = v2462;
        const cv2463 = v2463;
        
        v2459 = cv2459;
        v2460 = cv2460;
        v2462 = cv2462;
        v2463 = cv2463;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_233': {
        const v4837 = v2842[1];
        undefined /* setApiDetails */;
        const v4901 = stdlib.addressEq(v2841, v2445);
        stdlib.assert(v4901, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        ;
        const v5091 = v4837[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v5091, ctc0, undefined /* Nothing */);
        const v5096 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v5096', ctc0, v5096);
        const v5104 = v2459.keepGoing;
        const v5105 = v2459.percent;
        const v5112 = {
          bal: v2532,
          keepGoing: v5104,
          percent: v5105,
          totalCurrentAllocatoinToAllUsers: v2514,
          totalFundsDeposited: v2535,
          total_amount_claimed: v2530,
          total_rewards_allcoated: v2533,
          total_users_claim: v2529,
          usersNo: v2531
          };
        const cv2459 = v5112;
        const cv2460 = v2843;
        const cv2462 = v2462;
        const cv2463 = v2463;
        
        v2459 = cv2459;
        v2460 = cv2460;
        v2462 = cv2462;
        v2463 = cv2463;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_233': {
        const v5335 = v2842[1];
        undefined /* setApiDetails */;
        const v5408 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
        const v5410 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
        const v5413 = stdlib.gt(v5410, v2537);
        const v5416 = stdlib.safeSub(v2537, v5410);
        const v5417 = stdlib.ge(v5416, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5417, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        stdlib.assert(v5413, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v5422 = stdlib.safeAdd(v2514, v5410);
        const v5423 = stdlib.ge(v2537, v5422);
        stdlib.assert(v5423, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v5425 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc8, v5408, ctc0), null);
        const v5426 = {
          None: 0,
          Some: 1
          }[v5425[0]];
        const v5427 = stdlib.eq(v5426, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5427, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        ;
        const v5471 = stdlib.add(v2537, v5410);
        const v5473 = stdlib.Array_set(v2536, '0', v5471);
        const v5474 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5473);
        ;
        const v5614 = v5335[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
        const v5616 = v5474[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
        const v5617 = v5616[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
        const v5618 = stdlib.gt(v5410, v5617);
        const v5621 = stdlib.safeSub(v5617, v5410);
        const v5622 = stdlib.ge(v5621, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5622, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        stdlib.assert(v5618, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v5628 = stdlib.ge(v5617, v5422);
        stdlib.assert(v5628, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v5637 = [v5408, v5614];
        const v5638 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5637, ctc3), null);
        const v5639 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5640 = stdlib.fromSome(v5638, v5639);
        const v5642 = v5640.claimed;
        const v5643 = v5640.rewards;
        const v5645 = stdlib.safeAdd(v5643, v5410);
        const v5646 = {
          claimed: v5642,
          rewards: v5645
          };
        await stdlib.mapSet(map1, ctc16, v5637, ctc3, v5646);
        const v5647 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5408, ctc1), null);
        const v5648 = stdlib.fromSome(v5647, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
        const v5649 = stdlib.safeAdd(v5648, v5410);
        await stdlib.mapSet(map0, ctc8, v5408, ctc1, v5649);
        const v5650 = true;
        await txn3.getOutput('Admin_setReward', 'v5650', ctc17, v5650);
        const v5660 = v2459.keepGoing;
        const v5661 = v2459.percent;
        const v5670 = stdlib.safeAdd(v2532, v5410);
        const v5671 = {
          bal: v5670,
          keepGoing: v5660,
          percent: v5661,
          totalCurrentAllocatoinToAllUsers: v5422,
          totalFundsDeposited: v2535,
          total_amount_claimed: v2530,
          total_rewards_allcoated: v2533,
          total_users_claim: v2529,
          usersNo: v2531
          };
        const cv2459 = v5671;
        const cv2460 = v2843;
        const cv2462 = v5474;
        const cv2463 = v2463;
        
        v2459 = cv2459;
        v2460 = cv2460;
        v2462 = cv2462;
        v2463 = cv2463;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_233': {
        const v5833 = v2842[1];
        undefined /* setApiDetails */;
        const v5935 = v5833[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
        const v5937 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2841, ctc1), null);
        const v5938 = stdlib.fromSome(v5937, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
        const v5941 = stdlib.le(v5935, v2537);
        stdlib.assert(v5941, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5943 = stdlib.ge(v5938, v5935);
        stdlib.assert(v5943, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        ;
        const v6173 = v5833[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
        const v6188 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v2841, ctc0), null);
        const v6189 = {
          None: 0,
          Some: 1
          }[v6188[0]];
        const v6190 = stdlib.eq(v6189, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6191 = [v2841, v6173];
        const v6192 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6191, ctc3), null);
        const v6193 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6194 = stdlib.fromSome(v6192, v6193);
        const v6196 = v6194.claimed;
        const v6197 = v6194.rewards;
        const v6199 = stdlib.safeAdd(v6196, v5935);
        const v6201 = stdlib.safeSub(v6197, v5935);
        const v6202 = {
          claimed: v6199,
          rewards: v6201
          };
        await stdlib.mapSet(map1, ctc16, v6191, ctc3, v6202);
        const v6203 = true;
        await txn3.getOutput('User_claim', 'v6203', ctc17, v6203);
        const v6211 = {
          addr: v2841,
          amount: v5935,
          projectName: v2446
          };
        null;
        if (v6190) {
          const v6268 = stdlib.sub(v2537, v5935);
          const v6270 = stdlib.Array_set(v2536, '0', v6268);
          const v6271 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6270);
          ;
          const v6274 = stdlib.eq(v5938, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
          if (v6274) {
            await stdlib.mapSet(map0, ctc8, v2841, ctc1, undefined /* Nothing */);
            const v6276 = v2459.keepGoing;
            const v6277 = v2459.percent;
            const v6286 = stdlib.safeAdd(v2531, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
            const v6287 = stdlib.safeSub(v2532, v5935);
            const v6288 = stdlib.safeSub(v2514, v5935);
            const v6289 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6290 = stdlib.safeAdd(v2530, v5935);
            const v6291 = {
              bal: v6287,
              keepGoing: v6276,
              percent: v6277,
              totalCurrentAllocatoinToAllUsers: v6288,
              totalFundsDeposited: v2535,
              total_amount_claimed: v6290,
              total_rewards_allcoated: v2533,
              total_users_claim: v6289,
              usersNo: v6286
              };
            const cv2459 = v6291;
            const cv2460 = v2843;
            const cv2462 = v6271;
            const cv2463 = v2463;
            
            v2459 = cv2459;
            v2460 = cv2460;
            v2462 = cv2462;
            v2463 = cv2463;
            
            txn2 = txn3;
            continue;}
          else {
            const v6293 = stdlib.safeSub(v5938, v5935);
            await stdlib.mapSet(map0, ctc8, v2841, ctc1, v6293);
            const v6295 = v2459.keepGoing;
            const v6296 = v2459.percent;
            const v6305 = stdlib.safeAdd(v2531, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
            const v6306 = stdlib.safeSub(v2532, v5935);
            const v6307 = stdlib.safeSub(v2514, v5935);
            const v6308 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6309 = stdlib.safeAdd(v2530, v5935);
            const v6310 = {
              bal: v6306,
              keepGoing: v6295,
              percent: v6296,
              totalCurrentAllocatoinToAllUsers: v6307,
              totalFundsDeposited: v2535,
              total_amount_claimed: v6309,
              total_rewards_allcoated: v2533,
              total_users_claim: v6308,
              usersNo: v6305
              };
            const cv2459 = v6310;
            const cv2460 = v2843;
            const cv2462 = v6271;
            const cv2463 = v2463;
            
            v2459 = cv2459;
            v2460 = cv2460;
            v2462 = cv2462;
            v2463 = cv2463;
            
            txn2 = txn3;
            continue;}}
        else {
          await stdlib.mapSet(map3, ctc8, v2841, ctc0, null);
          const v6219 = stdlib.sub(v2537, v5935);
          const v6221 = stdlib.Array_set(v2536, '0', v6219);
          const v6222 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6221);
          ;
          const v6225 = stdlib.eq(v5938, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
          if (v6225) {
            await stdlib.mapSet(map0, ctc8, v2841, ctc1, undefined /* Nothing */);
            const v6227 = v2459.keepGoing;
            const v6228 = v2459.percent;
            const v6238 = stdlib.safeSub(v2532, v5935);
            const v6239 = stdlib.safeSub(v2514, v5935);
            const v6240 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6241 = stdlib.safeAdd(v2530, v5935);
            const v6242 = {
              bal: v6238,
              keepGoing: v6227,
              percent: v6228,
              totalCurrentAllocatoinToAllUsers: v6239,
              totalFundsDeposited: v2535,
              total_amount_claimed: v6241,
              total_rewards_allcoated: v2533,
              total_users_claim: v6240,
              usersNo: v2531
              };
            const cv2459 = v6242;
            const cv2460 = v2843;
            const cv2462 = v6222;
            const cv2463 = v2463;
            
            v2459 = cv2459;
            v2460 = cv2460;
            v2462 = cv2462;
            v2463 = cv2463;
            
            txn2 = txn3;
            continue;}
          else {
            const v6244 = stdlib.safeSub(v5938, v5935);
            await stdlib.mapSet(map0, ctc8, v2841, ctc1, v6244);
            const v6246 = v2459.keepGoing;
            const v6247 = v2459.percent;
            const v6257 = stdlib.safeSub(v2532, v5935);
            const v6258 = stdlib.safeSub(v2514, v5935);
            const v6259 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6260 = stdlib.safeAdd(v2530, v5935);
            const v6261 = {
              bal: v6257,
              keepGoing: v6246,
              percent: v6247,
              totalCurrentAllocatoinToAllUsers: v6258,
              totalFundsDeposited: v2535,
              total_amount_claimed: v6260,
              total_rewards_allcoated: v2533,
              total_users_claim: v6259,
              usersNo: v2531
              };
            const cv2459 = v6261;
            const cv2460 = v2843;
            const cv2462 = v6222;
            const cv2463 = v2463;
            
            v2459 = cv2459;
            v2460 = cv2460;
            v2462 = cv2462;
            v2463 = cv2463;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_233': {
        const v6331 = v2842[1];
        undefined /* setApiDetails */;
        ;
        ;
        await stdlib.mapSet(map4, ctc8, v2841, ctc0, null);
        const v6812 = null;
        await txn3.getOutput('User_optin', 'v6812', ctc0, v6812);
        const v6819 = v2459.keepGoing;
        const v6820 = v2459.percent;
        const v6827 = {
          bal: v2532,
          keepGoing: v6819,
          percent: v6820,
          totalCurrentAllocatoinToAllUsers: v2514,
          totalFundsDeposited: v2535,
          total_amount_claimed: v2530,
          total_rewards_allcoated: v2533,
          total_users_claim: v2529,
          usersNo: v2531
          };
        const cv2459 = v6827;
        const cv2460 = v2843;
        const cv2462 = v2462;
        const cv2463 = v2463;
        
        v2459 = cv2459;
        v2460 = cv2460;
        v2462 = cv2462;
        v2463 = cv2463;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v6862 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
  const v6863 = v6862[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  };
export async function _User_claim3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_claim3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_claim3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([]);
  const ctc20 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc16,
    Admin_deposit0_233: ctc17,
    Admin_editUserReward0_233: ctc18,
    Admin_endContractAndTransfer0_233: ctc19,
    Admin_revokeAdmin0_233: ctc16,
    Admin_setReward0_233: ctc20,
    User_claim0_233: ctc15,
    User_optin0_233: ctc19
    });
  const ctc22 = stdlib.T_Tuple([ctc6, ctc8]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2652 = ctc.selfAddress();
  const v2654 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2655 = v2654[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2659 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2652, ctc1), null);
  const v2660 = stdlib.fromSome(v2659, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
  const v2663 = stdlib.le(v2655, v2537);
  stdlib.assert(v2663, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v2665 = stdlib.ge(v2660, v2655);
  stdlib.assert(v2665, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v2674 = ['User_claim0_233', v2654];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2674],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:281:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:281:14:decimal', stdlib.UInt_max, '0'), v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5935 = v5833[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
          const v5937 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2841, ctc1), null);
          const v5938 = stdlib.fromSome(v5937, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          const v6173 = v5833[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
          const v6188 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v2841, ctc0), null);
          const v6189 = {
            None: 0,
            Some: 1
            }[v6188[0]];
          const v6190 = stdlib.eq(v6189, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v6191 = [v2841, v6173];
          const v6192 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v6191, ctc3), null);
          const v6193 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6194 = stdlib.fromSome(v6192, v6193);
          const v6196 = v6194.claimed;
          const v6197 = v6194.rewards;
          const v6199 = stdlib.safeAdd(v6196, v5935);
          const v6201 = stdlib.safeSub(v6197, v5935);
          const v6202 = {
            claimed: v6199,
            rewards: v6201
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v6191, ctc3, v6202);
          const v6203 = true;
          const v6204 = await txn1.getOutput('User_claim', 'v6203', ctc9, v6203);
          
          const v6211 = {
            addr: v2841,
            amount: v5935,
            projectName: v2446
            };
          null;
          if (v6190) {
            const v6268 = stdlib.sub(v2537, v5935);
            const v6270 = stdlib.Array_set(v2536, '0', v6268);
            const v6271 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6270);
            sim_r.txns.push({
              kind: 'from',
              to: v2841,
              tok: v2447
              });
            const v6274 = stdlib.eq(v5938, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
            if (v6274) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2841, ctc1, undefined /* Nothing */);
              const v6276 = v2459.keepGoing;
              const v6277 = v2459.percent;
              const v6286 = stdlib.safeAdd(v2531, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
              const v6287 = stdlib.safeSub(v2532, v5935);
              const v6288 = stdlib.safeSub(v2514, v5935);
              const v6289 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6290 = stdlib.safeAdd(v2530, v5935);
              const v6291 = {
                bal: v6287,
                keepGoing: v6276,
                percent: v6277,
                totalCurrentAllocatoinToAllUsers: v6288,
                totalFundsDeposited: v2535,
                total_amount_claimed: v6290,
                total_rewards_allcoated: v2533,
                total_users_claim: v6289,
                usersNo: v6286
                };
              const v12448 = v6291;
              const v12450 = v6271;
              const v12451 = v2463;
              const v12452 = v6291.keepGoing;
              if (v12452) {
                const v12453 = v6291.totalCurrentAllocatoinToAllUsers;
                const v12454 = v6291.total_users_claim;
                const v12455 = v6291.total_amount_claimed;
                const v12456 = v6291.usersNo;
                const v12457 = v6291.bal;
                const v12458 = v6291.total_rewards_allcoated;
                const v12459 = v6291.totalFundsDeposited;
                const v12460 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12461 = v12460[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12467 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12468 = v12467[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: v2447
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6293 = stdlib.safeSub(v5938, v5935);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2841, ctc1, v6293);
              const v6295 = v2459.keepGoing;
              const v6296 = v2459.percent;
              const v6305 = stdlib.safeAdd(v2531, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
              const v6306 = stdlib.safeSub(v2532, v5935);
              const v6307 = stdlib.safeSub(v2514, v5935);
              const v6308 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6309 = stdlib.safeAdd(v2530, v5935);
              const v6310 = {
                bal: v6306,
                keepGoing: v6295,
                percent: v6296,
                totalCurrentAllocatoinToAllUsers: v6307,
                totalFundsDeposited: v2535,
                total_amount_claimed: v6309,
                total_rewards_allcoated: v2533,
                total_users_claim: v6308,
                usersNo: v6305
                };
              const v12469 = v6310;
              const v12471 = v6271;
              const v12472 = v2463;
              const v12473 = v6310.keepGoing;
              if (v12473) {
                const v12474 = v6310.totalCurrentAllocatoinToAllUsers;
                const v12475 = v6310.total_users_claim;
                const v12476 = v6310.total_amount_claimed;
                const v12477 = v6310.usersNo;
                const v12478 = v6310.bal;
                const v12479 = v6310.total_rewards_allcoated;
                const v12480 = v6310.totalFundsDeposited;
                const v12481 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12482 = v12481[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12488 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12489 = v12488[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: v2447
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v2841, ctc0, null);
            const v6219 = stdlib.sub(v2537, v5935);
            const v6221 = stdlib.Array_set(v2536, '0', v6219);
            const v6222 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6221);
            sim_r.txns.push({
              kind: 'from',
              to: v2841,
              tok: v2447
              });
            const v6225 = stdlib.eq(v5938, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
            if (v6225) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2841, ctc1, undefined /* Nothing */);
              const v6227 = v2459.keepGoing;
              const v6228 = v2459.percent;
              const v6238 = stdlib.safeSub(v2532, v5935);
              const v6239 = stdlib.safeSub(v2514, v5935);
              const v6240 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6241 = stdlib.safeAdd(v2530, v5935);
              const v6242 = {
                bal: v6238,
                keepGoing: v6227,
                percent: v6228,
                totalCurrentAllocatoinToAllUsers: v6239,
                totalFundsDeposited: v2535,
                total_amount_claimed: v6241,
                total_rewards_allcoated: v2533,
                total_users_claim: v6240,
                usersNo: v2531
                };
              const v12490 = v6242;
              const v12492 = v6222;
              const v12493 = v2463;
              const v12494 = v6242.keepGoing;
              if (v12494) {
                const v12495 = v6242.totalCurrentAllocatoinToAllUsers;
                const v12496 = v6242.total_users_claim;
                const v12497 = v6242.total_amount_claimed;
                const v12498 = v6242.usersNo;
                const v12499 = v6242.bal;
                const v12500 = v6242.total_rewards_allcoated;
                const v12501 = v6242.totalFundsDeposited;
                const v12502 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12503 = v12502[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12509 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12510 = v12509[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: v2447
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6244 = stdlib.safeSub(v5938, v5935);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2841, ctc1, v6244);
              const v6246 = v2459.keepGoing;
              const v6247 = v2459.percent;
              const v6257 = stdlib.safeSub(v2532, v5935);
              const v6258 = stdlib.safeSub(v2514, v5935);
              const v6259 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6260 = stdlib.safeAdd(v2530, v5935);
              const v6261 = {
                bal: v6257,
                keepGoing: v6246,
                percent: v6247,
                totalCurrentAllocatoinToAllUsers: v6258,
                totalFundsDeposited: v2535,
                total_amount_claimed: v6260,
                total_rewards_allcoated: v2533,
                total_users_claim: v6259,
                usersNo: v2531
                };
              const v12511 = v6261;
              const v12513 = v6222;
              const v12514 = v2463;
              const v12515 = v6261.keepGoing;
              if (v12515) {
                const v12516 = v6261.totalCurrentAllocatoinToAllUsers;
                const v12517 = v6261.total_users_claim;
                const v12518 = v6261.total_amount_claimed;
                const v12519 = v6261.usersNo;
                const v12520 = v6261.bal;
                const v12521 = v6261.total_rewards_allcoated;
                const v12522 = v6261.totalFundsDeposited;
                const v12523 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12524 = v12523[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12530 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12531 = v12530[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2445,
                  tok: v2447
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      undefined /* setApiDetails */;
      const v5935 = v5833[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
      const v5937 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2841, ctc1), null);
      const v5938 = stdlib.fromSome(v5937, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
      const v5941 = stdlib.le(v5935, v2537);
      stdlib.assert(v5941, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5943 = stdlib.ge(v5938, v5935);
      stdlib.assert(v5943, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      ;
      const v6173 = v5833[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
      const v6188 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v2841, ctc0), null);
      const v6189 = {
        None: 0,
        Some: 1
        }[v6188[0]];
      const v6190 = stdlib.eq(v6189, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6191 = [v2841, v6173];
      const v6192 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v6191, ctc3), null);
      const v6193 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6194 = stdlib.fromSome(v6192, v6193);
      const v6196 = v6194.claimed;
      const v6197 = v6194.rewards;
      const v6199 = stdlib.safeAdd(v6196, v5935);
      const v6201 = stdlib.safeSub(v6197, v5935);
      const v6202 = {
        claimed: v6199,
        rewards: v6201
        };
      await stdlib.mapSet(map1, ctc22, v6191, ctc3, v6202);
      const v6203 = true;
      const v6204 = await txn1.getOutput('User_claim', 'v6203', ctc9, v6203);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v5833, v6204), {
          at: './token_v2.rsh:276:11:application',
          fs: ['at ./token_v2.rsh:276:11:application call to [unknown function] (defined at: ./token_v2.rsh:276:11:function exp)', 'at ./token_v2.rsh:295:14:application call to "ret" (defined at: ./token_v2.rsh:282:15:function exp)', 'at ./token_v2.rsh:282:15:application call to [unknown function] (defined at: ./token_v2.rsh:282:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v6211 = {
        addr: v2841,
        amount: v5935,
        projectName: v2446
        };
      null;
      if (v6190) {
        const v6268 = stdlib.sub(v2537, v5935);
        const v6270 = stdlib.Array_set(v2536, '0', v6268);
        const v6271 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6270);
        ;
        const v6274 = stdlib.eq(v5938, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
        if (v6274) {
          await stdlib.mapSet(map0, ctc6, v2841, ctc1, undefined /* Nothing */);
          const v6276 = v2459.keepGoing;
          const v6277 = v2459.percent;
          const v6286 = stdlib.safeAdd(v2531, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
          const v6287 = stdlib.safeSub(v2532, v5935);
          const v6288 = stdlib.safeSub(v2514, v5935);
          const v6289 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6290 = stdlib.safeAdd(v2530, v5935);
          const v6291 = {
            bal: v6287,
            keepGoing: v6276,
            percent: v6277,
            totalCurrentAllocatoinToAllUsers: v6288,
            totalFundsDeposited: v2535,
            total_amount_claimed: v6290,
            total_rewards_allcoated: v2533,
            total_users_claim: v6289,
            usersNo: v6286
            };
          const v12448 = v6291;
          const v12450 = v6271;
          const v12451 = v2463;
          const v12452 = v6291.keepGoing;
          if (v12452) {
            const v12453 = v6291.totalCurrentAllocatoinToAllUsers;
            const v12454 = v6291.total_users_claim;
            const v12455 = v6291.total_amount_claimed;
            const v12456 = v6291.usersNo;
            const v12457 = v6291.bal;
            const v12458 = v6291.total_rewards_allcoated;
            const v12459 = v6291.totalFundsDeposited;
            const v12460 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12461 = v12460[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12467 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12468 = v12467[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v6293 = stdlib.safeSub(v5938, v5935);
          await stdlib.mapSet(map0, ctc6, v2841, ctc1, v6293);
          const v6295 = v2459.keepGoing;
          const v6296 = v2459.percent;
          const v6305 = stdlib.safeAdd(v2531, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
          const v6306 = stdlib.safeSub(v2532, v5935);
          const v6307 = stdlib.safeSub(v2514, v5935);
          const v6308 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6309 = stdlib.safeAdd(v2530, v5935);
          const v6310 = {
            bal: v6306,
            keepGoing: v6295,
            percent: v6296,
            totalCurrentAllocatoinToAllUsers: v6307,
            totalFundsDeposited: v2535,
            total_amount_claimed: v6309,
            total_rewards_allcoated: v2533,
            total_users_claim: v6308,
            usersNo: v6305
            };
          const v12469 = v6310;
          const v12471 = v6271;
          const v12472 = v2463;
          const v12473 = v6310.keepGoing;
          if (v12473) {
            const v12474 = v6310.totalCurrentAllocatoinToAllUsers;
            const v12475 = v6310.total_users_claim;
            const v12476 = v6310.total_amount_claimed;
            const v12477 = v6310.usersNo;
            const v12478 = v6310.bal;
            const v12479 = v6310.total_rewards_allcoated;
            const v12480 = v6310.totalFundsDeposited;
            const v12481 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12482 = v12481[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12488 = v6271[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12489 = v12488[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map3, ctc6, v2841, ctc0, null);
        const v6219 = stdlib.sub(v2537, v5935);
        const v6221 = stdlib.Array_set(v2536, '0', v6219);
        const v6222 = stdlib.Array_set(v2462, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6221);
        ;
        const v6225 = stdlib.eq(v5938, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
        if (v6225) {
          await stdlib.mapSet(map0, ctc6, v2841, ctc1, undefined /* Nothing */);
          const v6227 = v2459.keepGoing;
          const v6228 = v2459.percent;
          const v6238 = stdlib.safeSub(v2532, v5935);
          const v6239 = stdlib.safeSub(v2514, v5935);
          const v6240 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6241 = stdlib.safeAdd(v2530, v5935);
          const v6242 = {
            bal: v6238,
            keepGoing: v6227,
            percent: v6228,
            totalCurrentAllocatoinToAllUsers: v6239,
            totalFundsDeposited: v2535,
            total_amount_claimed: v6241,
            total_rewards_allcoated: v2533,
            total_users_claim: v6240,
            usersNo: v2531
            };
          const v12490 = v6242;
          const v12492 = v6222;
          const v12493 = v2463;
          const v12494 = v6242.keepGoing;
          if (v12494) {
            const v12495 = v6242.totalCurrentAllocatoinToAllUsers;
            const v12496 = v6242.total_users_claim;
            const v12497 = v6242.total_amount_claimed;
            const v12498 = v6242.usersNo;
            const v12499 = v6242.bal;
            const v12500 = v6242.total_rewards_allcoated;
            const v12501 = v6242.totalFundsDeposited;
            const v12502 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12503 = v12502[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12509 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12510 = v12509[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v6244 = stdlib.safeSub(v5938, v5935);
          await stdlib.mapSet(map0, ctc6, v2841, ctc1, v6244);
          const v6246 = v2459.keepGoing;
          const v6247 = v2459.percent;
          const v6257 = stdlib.safeSub(v2532, v5935);
          const v6258 = stdlib.safeSub(v2514, v5935);
          const v6259 = stdlib.safeAdd(v2529, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6260 = stdlib.safeAdd(v2530, v5935);
          const v6261 = {
            bal: v6257,
            keepGoing: v6246,
            percent: v6247,
            totalCurrentAllocatoinToAllUsers: v6258,
            totalFundsDeposited: v2535,
            total_amount_claimed: v6260,
            total_rewards_allcoated: v2533,
            total_users_claim: v6259,
            usersNo: v2531
            };
          const v12511 = v6261;
          const v12513 = v6222;
          const v12514 = v2463;
          const v12515 = v6261.keepGoing;
          if (v12515) {
            const v12516 = v6261.totalCurrentAllocatoinToAllUsers;
            const v12517 = v6261.total_users_claim;
            const v12518 = v6261.total_amount_claimed;
            const v12519 = v6261.usersNo;
            const v12520 = v6261.bal;
            const v12521 = v6261.total_rewards_allcoated;
            const v12522 = v6261.totalFundsDeposited;
            const v12523 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12524 = v12523[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12530 = v6222[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12531 = v12530[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_optin3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_optin3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_optin3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Object({
    claimed: ctc1,
    rewards: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc8 = stdlib.T_Token;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc11 = stdlib.T_Object({
    i: ctc10,
    sign: ctc9
    });
  const ctc12 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc9,
    percent: ctc11,
    totalCurrentAllocatoinToAllUsers: ctc1,
    totalFundsDeposited: ctc1,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc1]);
  const ctc18 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc19 = stdlib.T_Tuple([ctc6, ctc8, ctc1]);
  const ctc20 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc21 = stdlib.T_Data({
    Admin_addAdmin0_233: ctc16,
    Admin_deposit0_233: ctc17,
    Admin_editUserReward0_233: ctc18,
    Admin_endContractAndTransfer0_233: ctc15,
    Admin_revokeAdmin0_233: ctc16,
    Admin_setReward0_233: ctc19,
    User_claim0_233: ctc20,
    User_optin0_233: ctc15
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc5;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true
    });
  
  
  const [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2678 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:325:26:application call to [unknown function] (defined at: ./token_v2.rsh:325:26:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_optin0_233" (defined at: ./token_v2.rsh:325:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2682 = ['User_optin0_233', v2678];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2445, v2446, v2447, v2459, v2462, v2463, v2514, v2529, v2530, v2531, v2532, v2533, v2535, v2536, v2537, v2682],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:327:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:327:14:decimal', stdlib.UInt_max, '0'), v2447]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
      
      switch (v2842[0]) {
        case 'Admin_addAdmin0_233': {
          const v2845 = v2842[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3343 = v2842[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3841 = v2842[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4339 = v2842[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4837 = v2842[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5335 = v2842[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5833 = v2842[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6331 = v2842[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v2841, ctc0, null);
          const v6812 = null;
          const v6813 = await txn1.getOutput('User_optin', 'v6812', ctc0, v6812);
          
          const v6819 = v2459.keepGoing;
          const v6820 = v2459.percent;
          const v6827 = {
            bal: v2532,
            keepGoing: v6819,
            percent: v6820,
            totalCurrentAllocatoinToAllUsers: v2514,
            totalFundsDeposited: v2535,
            total_amount_claimed: v2530,
            total_rewards_allcoated: v2533,
            total_users_claim: v2529,
            usersNo: v2531
            };
          const v12763 = v6827;
          const v12765 = v2462;
          const v12766 = v2463;
          const v12767 = v6827.keepGoing;
          if (v12767) {
            const v12768 = v6827.totalCurrentAllocatoinToAllUsers;
            const v12769 = v6827.total_users_claim;
            const v12770 = v6827.total_amount_claimed;
            const v12771 = v6827.usersNo;
            const v12772 = v6827.bal;
            const v12773 = v6827.total_rewards_allcoated;
            const v12774 = v6827.totalFundsDeposited;
            const v12775 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12776 = v12775[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v12782 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12783 = v12782[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2445,
              tok: v2447
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2447
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1, ctc21],
    waitIfNotPresent: false
    }));
  const {data: [v2842], secs: v2844, time: v2843, didSend: v1638, from: v2841 } = txn1;
  switch (v2842[0]) {
    case 'Admin_addAdmin0_233': {
      const v2845 = v2842[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3343 = v2842[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3841 = v2842[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4339 = v2842[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4837 = v2842[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5335 = v2842[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5833 = v2842[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6331 = v2842[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map4, ctc6, v2841, ctc0, null);
      const v6812 = null;
      const v6813 = await txn1.getOutput('User_optin', 'v6812', ctc0, v6812);
      if (v1638) {
        stdlib.protect(ctc0, await interact.out(v6331, v6813), {
          at: './token_v2.rsh:325:11:application',
          fs: ['at ./token_v2.rsh:325:11:application call to [unknown function] (defined at: ./token_v2.rsh:325:11:function exp)', 'at ./token_v2.rsh:330:14:application call to "ret" (defined at: ./token_v2.rsh:328:15:function exp)', 'at ./token_v2.rsh:328:15:application call to [unknown function] (defined at: ./token_v2.rsh:328:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6819 = v2459.keepGoing;
      const v6820 = v2459.percent;
      const v6827 = {
        bal: v2532,
        keepGoing: v6819,
        percent: v6820,
        totalCurrentAllocatoinToAllUsers: v2514,
        totalFundsDeposited: v2535,
        total_amount_claimed: v2530,
        total_rewards_allcoated: v2533,
        total_users_claim: v2529,
        usersNo: v2531
        };
      const v12763 = v6827;
      const v12765 = v2462;
      const v12766 = v2463;
      const v12767 = v6827.keepGoing;
      if (v12767) {
        const v12768 = v6827.totalCurrentAllocatoinToAllUsers;
        const v12769 = v6827.total_users_claim;
        const v12770 = v6827.total_amount_claimed;
        const v12771 = v6827.usersNo;
        const v12772 = v6827.bal;
        const v12773 = v6827.total_rewards_allcoated;
        const v12774 = v6827.totalFundsDeposited;
        const v12775 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v12776 = v12775[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v12782 = v2462[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v12783 = v12782[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Admin_addAdmin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_addAdmin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_addAdmin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_addAdmin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_deposit3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_editUserReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_editUserReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_editUserReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_editUserReward3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_endContractAndTransfer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_endContractAndTransfer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_endContractAndTransfer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_endContractAndTransfer3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_revokeAdmin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_revokeAdmin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_revokeAdmin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_revokeAdmin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Admin_setReward(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin_setReward expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin_setReward expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Admin_setReward3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_claim(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_claim expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_claim expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _User_claim3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function User_optin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_optin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_optin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _User_optin3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64))void`, `_reachp_2((uint64,(byte,byte[48])))void`],
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalCurrentAllocatoinToAllUsers()uint64`, `Info_totalFundsDeposited()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_claimed(address,uint64)uint64`, `Info_opted(address)byte`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalCurrentAllocatoinToAllUsers()uint64`, `Info_totalFundsDeposited()uint64`, `Info_totalOptedIn()uint64`, `Info_totalRewards(address)uint64`, `Info_userReward(address,uint64)uint64`, `User_claim(uint64,uint64)byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64))void`, `_reachp_2((uint64,(byte,byte[48])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCALAAEIAxDUkwHUeijUxQGgjQYEJgYAAQABAQECAQQBAzEYQQkmKGRJIls1ASRbNQIpZCpkUIIWBAJfdMcEDbOGvAQTblc7BBp3QuUEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEgk+QIEbuR2FAR4Stk3BHr+yG0Eis1nCAS79c2OBMfCnNUE3lcEZATtRtumBPMneAQE+W9s4AT5cw4LBPquyLA2GgCOFgBUAkwBdwhaAQYCbgGbAhwBNwGrAIkB6wG7AcsB2wFHCGoA3wDJAfsAawABADYaATULJK8pNAtQIQSvUFA1CyU0ARJEiApMNAsiWzUMNAtXCDE1DYAEVQtlgzQMFlA0DVCwNAyICsM0DSJVjQgJygnNCdAIRAhHCEoIVAheQv+sNhoBFzULJK8qNAsWUCEHr1BQNQtC/6g2GgE2GgIXNQs1DCSvKzQMNAsWUFAkr1BQNQtC/4qAOQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9KNhoBNQskrycENAtQIQSvUFA1C0L/NDYaATYaAhc2GgMXNQs1DDUNJK+AAQU0DTQMFlA0CxZQUFA1C0L/DTYaATULNAElEkSICVQoKCs0C1CICUAiVSMSFlEHCDUEMRkiEkSABBUffHU0BFCwI0M0ASUSRIgJKDQOFjUEQv/fNhoBNhoCFzULNQw0ASUSRIgJDSEEryghBK8qNAw0CxZQUIgI8IgJaVcACDUEQv+vNhoBNQs0ASUSRIgI4ygoJwQ0C1CICM4iVSMSFlEHCDUEQv+LNAElEkSICMQ0FhY1BEL/ezQBJRJEiAi0NBQWNQRC/2s0ASUSRIgIpDQVFjUEQv9bNAElEkSICJQ0FhY1BEL/SzQBJRJEiAiENBAWNQRC/zs0ASUSRIgIdDQTFjUEQv8rNhoBNQs0ASUSRIgIXySvKCSvKTQLUIgISIgIwTUEQv8KNhoBNhoCFzULNQw0ASUSRIgIOCEEryghBK8qNAw0CxZQUIgIG4gIlFcICDUEQv7aNhoBFzYaAhc1CzUMJK+AAQY0DBY0CxZQUDIDUFA1C0L9pYA5AAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/WUxADQdEigoKzEAUIgHoCJVIxIRRCEGKzQNVwEgUCiIB/soNQuACAAAAAAAAAuzNAtQsDQLNQQ0EhY0GlcIAVA0GlcJEVA0FhZQNBAWUDQUFlA0ERZQNBUWUDQTFlAyBjUZNRo0GlcIARdBBqc0GoEaWzUWNBqBOls1FTQagSpbNRQ0GoFCWzUTNBoiWzUSNBqBMls1ETQagSJbNRA0GFcAEUk1DyJbNQ40HTQcUDQbFlA0GlA0GFA0FxZQNBYWUDQVFlA0FBZQNBMWUDQSFlA0ERZQNBAWUDQPUDQOFlAlMgY1AjUBKUsBVwB/ZypMV397Zyg0ARY0AhZQZzEZIhJEiAdXNANA/X9C/XI0DSNbNQsxADQdEigoKzEAUIgGjyJVIxIRRDQLNBuIBzooNQyACAAAAAAAAA3ANAxQsDQMNQQ0EjQLCBY0GlcIAVA0GlcJEVA0FhZQNBA0CwgWUDQUFlA0ERZQNBUWUDQTFlAyBjQYNA80DjQLCBZcAFwANRg1GTUaQv7cNAuBIFs1DDEANB0SKCgrMQBQiAYSIlUjEhFENAw0Dg5EIQUpNAtXACBQNAwWiAZlKDULgAgAAAAAAAAP1TQLULA0CzUENBIWNBpXCAFQNBpXCRFQNBYWUDQQFlA0FBZQNBEWUDQVFlA0ExZQMgY1GTUaQv5nNB0xABJENBYiEkQoNQuACAAAAAAAABHfNAtQsDQLNQQ0EhYpUDQaVwkRUDQWFlA0EBZQNBQWUDQRFlA0FRZQNBMWUDIGNRk1GkL+GzEANB0SRCEGKzQNVwEgUIgF5yg1C4AIAAAAAAAAE+g0C1CwNAs1BDQSFjQaVwgBUDQaVwkRUDQWFlA0EBZQNBQWUDQRFlA0FRZQNBMWUDIGNRk1GkL9xDQLVwAgNR40CyEHWzUNNA40DQkiD0Q0DTQODUQ0FjQNCDUMNA40DA9EKCgnBDQeUIgE3CJVIxJENBg0DzQONA0IFlwAXAA1FjQNNBuIBXg0FlcAESJbSTUONA0JIg9ENA00Dg1ENA40DA9ENB40C1cgCFA1DiEEryghBK8qNA5QiASMiAUFNQshCCo0DlA0C1cACDQLJFs0DQgWUIgE3iEFKTQeUCSvKCSvKTQeUIgEXogE1xc0DQgWiATBIzULgAgAAAAAAAAWEjQLFlEHCFCwNAsWUQcINQQ0EjQNCBY0GlcIAVA0GlcJEVA0DBZQNBAWUDQUFlA0ERZQNBUWUDQTFlAyBjQWNRg1GTUaQvy0NAsiWzUeJK8oJK8pMQBQiAPtiARmFzUNNB40Dg5ENA00Hg9EMQA0C1cICFA1DCEEryghBK8qNAxQiAPDiAQ8NQshCCo0DFA0CyJbNB4IFjQLJFs0HgkWUIgEEiM1C4AIAAAAAAAAGDs0CxZRBwhQsDQLFlEHCDUEMQA0HhZQNBxQNQuABJvIVFA0C1CwKCgnBTEAUIgDaCJVIxJBAbc0GDQPNA40HgkWXABcADULNB40GzEAiAPNNA1AAgohBSkxAFCIA800EjQeCRY0GlcIAVA0GlcJEVA0FjQeCRZQNBAWUDQUNB4IFlA0ERZQNBUjCBZQNBMjCBZQMgY0CzUYNRk1GkL7riEGJwQxAFAoiANcKDULgAgAAAAAAAAanDQLULA0CzUENBIWNBpXCAFQNBpXCRFQNBYWUDQQFlA0FBZQNBEWUDQVFlA0ExZQMgY1GTUaQvteMQA1HTQLIls1DDQLVwgeNRw0C4EmWzUbgAQoS8fwNAwWUDQcUDQbFlCwNAyIAxyBEa81CyEJiAL9IjQbMgqIAu2ASgAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAGQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgY0C0lXABEkr1wAXAAiNRc1GDUZNRpC+reIAp0hCYgChzYaATULQv9JiAKNNhoBNQtC954iMTQSRCUxNRJEIjE2EkQiMTcSRIgCboH6Aa8iIkL6+kL8EkL8WzQNVwEwNQtC/Kg0DVcBEDULQv2uQv6xIQYnBTEAUCiIAg00GDQPNA40HgkWXABcADULNB40GzEAiAILNA1AAJghBSkxAFCIAgs0EjQeCRY0GlcIAVA0GlcJEVA0FjQeCRZQNBAWUDQUNB4IFlA0ERZQNBUjCBZQNBMWUDIGNAs1GDUZNRpC+e4hBSkxAFA0DTQeCRaIAZg0EjQeCRY0GlcIAVA0GlcJEVA0FjQeCRZQNBAWUDQUNB4IFlA0ERZQNBUjCBZQNBMjCBZQMgY0CzUYNRk1GkL5niEFKTEAUDQNNB4JFogBSDQSNB4JFjQaVwgBUDQaVwkRUDQWNB4JFlA0EBZQNBQ0HggWUDQRFlA0FSMIFlA0ExZQMgY0CzUYNRk1GkL5UDQXNB2IAR00GFcAESJbNBs0HYgBCyI0GzIKMgmIAVcxGYEFEkSIAR8yCmAyCngJSTUGMgqIAO1C+bZITL9IiSKyASOyELIHsgiziSKyASEKshCyFLIRshKziUL4kEL5mDQNVwEoNQtC+gpIiUwJSTUGMgmIAK6JCUlB/+5JNQYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJvkkWUQcIRQRNUIlJVwAgNR1JVyAeNRxJgT5bNRtJV0ZKNRpJV5ARNRhJgaEBWzUXSYGpAVs1FkmBsQFbNRVJgbkBWzUUSYHBAVs1E0mByQFbNRJJgdEBWzURSYHZAVs1EElX4RE1D4HyAVs1DolMSb1A/ytLA4gAFEL/I0lXAQBMIlVNibFC/yexQv8XNAYINQaJvCJOAk00Bwg1B4kjNQOJSSISTDQCEhFEiTQGNAdKD0H/HEL/JDEWNAAjCEk1AAlHAzgUMgoSRDgQIQoSRDgRTwISRDgSEkSJsbIVQv7P`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `487`,
    1001: `489`,
    1002: `489`,
    1003: `490`,
    1004: `490`,
    1005: `490`,
    1006: `491`,
    1007: `492`,
    1008: `492`,
    1009: `492`,
    101: `21`,
    1010: `493`,
    1011: `493`,
    1012: `494`,
    1013: `494`,
    1014: `495`,
    1015: `496`,
    1016: `496`,
    1017: `497`,
    1018: `497`,
    1019: `498`,
    102: `21`,
    1020: `498`,
    1021: `499`,
    1022: `500`,
    1023: `500`,
    1024: `501`,
    1025: `501`,
    1026: `502`,
    1027: `502`,
    1028: `503`,
    1029: `504`,
    103: `21`,
    1030: `504`,
    1031: `505`,
    1032: `505`,
    1033: `506`,
    1034: `506`,
    1035: `507`,
    1036: `508`,
    1037: `508`,
    1038: `509`,
    1039: `509`,
    104: `21`,
    1040: `510`,
    1041: `511`,
    1042: `512`,
    1043: `512`,
    1044: `513`,
    1045: `513`,
    1046: `514`,
    1047: `514`,
    1048: `515`,
    1049: `516`,
    105: `21`,
    1050: `516`,
    1051: `517`,
    1052: `517`,
    1053: `518`,
    1054: `518`,
    1055: `519`,
    1056: `520`,
    1057: `520`,
    1058: `521`,
    1059: `521`,
    106: `21`,
    1060: `522`,
    1061: `522`,
    1062: `522`,
    1063: `523`,
    1064: `524`,
    1065: `524`,
    1066: `525`,
    1067: `526`,
    1068: `527`,
    1069: `527`,
    107: `21`,
    1070: `529`,
    1071: `529`,
    1072: `530`,
    1073: `530`,
    1074: `531`,
    1075: `532`,
    1076: `532`,
    1077: `533`,
    1078: `534`,
    1079: `535`,
    108: `21`,
    1080: `535`,
    1081: `536`,
    1082: `537`,
    1083: `537`,
    1084: `538`,
    1085: `539`,
    1086: `539`,
    1087: `540`,
    1088: `541`,
    1089: `542`,
    109: `21`,
    1090: `542`,
    1091: `543`,
    1092: `544`,
    1093: `545`,
    1094: `545`,
    1095: `546`,
    1096: `547`,
    1097: `548`,
    1098: `548`,
    1099: `549`,
    11: `2`,
    110: `21`,
    1100: `550`,
    1101: `551`,
    1102: `551`,
    1103: `552`,
    1104: `553`,
    1105: `554`,
    1106: `554`,
    1107: `555`,
    1108: `556`,
    1109: `557`,
    111: `21`,
    1110: `557`,
    1111: `558`,
    1112: `559`,
    1113: `560`,
    1114: `560`,
    1115: `561`,
    1116: `562`,
    1117: `563`,
    1118: `563`,
    1119: `564`,
    112: `21`,
    1120: `565`,
    1121: `565`,
    1122: `566`,
    1123: `567`,
    1124: `568`,
    1125: `569`,
    1126: `569`,
    1127: `571`,
    1128: `571`,
    1129: `572`,
    113: `21`,
    1130: `572`,
    1131: `573`,
    1132: `574`,
    1133: `574`,
    1134: `575`,
    1135: `575`,
    1136: `575`,
    1137: `576`,
    1138: `577`,
    1139: `578`,
    114: `21`,
    1140: `579`,
    1141: `579`,
    1142: `579`,
    1143: `580`,
    1144: `581`,
    1145: `582`,
    1146: `582`,
    1147: `583`,
    1148: `584`,
    1149: `584`,
    115: `21`,
    1150: `585`,
    1151: `586`,
    1152: `587`,
    1153: `588`,
    1154: `588`,
    1155: `589`,
    1156: `590`,
    1157: `591`,
    1158: `593`,
    1159: `593`,
    116: `21`,
    1160: `593`,
    1161: `595`,
    1162: `595`,
    1163: `596`,
    1164: `596`,
    1165: `596`,
    1166: `597`,
    1167: `597`,
    1168: `597`,
    1169: `599`,
    117: `21`,
    1170: `599`,
    1171: `600`,
    1172: `601`,
    1173: `602`,
    1174: `602`,
    1175: `603`,
    1176: `603`,
    1177: `604`,
    1178: `604`,
    1179: `605`,
    118: `21`,
    1180: `607`,
    1181: `608`,
    1182: `609`,
    1183: `610`,
    1184: `610`,
    1185: `611`,
    1186: `612`,
    1187: `612`,
    1188: `612`,
    1189: `613`,
    119: `21`,
    1190: `614`,
    1191: `615`,
    1192: `616`,
    1193: `617`,
    1194: `618`,
    1195: `626`,
    1196: `626`,
    1197: `627`,
    1198: `627`,
    1199: `628`,
    12: `2`,
    120: `21`,
    1200: `628`,
    1201: `628`,
    1202: `631`,
    1203: `632`,
    1204: `632`,
    1205: `633`,
    1206: `633`,
    1207: `633`,
    1208: `633`,
    1209: `633`,
    121: `21`,
    1210: `633`,
    1211: `633`,
    1212: `633`,
    1213: `633`,
    1214: `633`,
    1215: `634`,
    1216: `634`,
    1217: `635`,
    1218: `636`,
    1219: `637`,
    122: `21`,
    1220: `637`,
    1221: `638`,
    1222: `638`,
    1223: `639`,
    1224: `639`,
    1225: `640`,
    1226: `640`,
    1227: `641`,
    1228: `642`,
    1229: `643`,
    123: `21`,
    1230: `643`,
    1231: `644`,
    1232: `644`,
    1233: `644`,
    1234: `645`,
    1235: `646`,
    1236: `646`,
    1237: `647`,
    1238: `647`,
    1239: `647`,
    124: `21`,
    1240: `648`,
    1241: `649`,
    1242: `649`,
    1243: `650`,
    1244: `651`,
    1245: `652`,
    1246: `652`,
    1247: `653`,
    1248: `653`,
    1249: `654`,
    125: `21`,
    1250: `655`,
    1251: `656`,
    1252: `657`,
    1253: `657`,
    1254: `658`,
    1255: `659`,
    1256: `660`,
    1257: `660`,
    1258: `661`,
    1259: `662`,
    126: `21`,
    1260: `663`,
    1261: `663`,
    1262: `664`,
    1263: `665`,
    1264: `666`,
    1265: `666`,
    1266: `667`,
    1267: `668`,
    1268: `669`,
    1269: `669`,
    127: `21`,
    1270: `670`,
    1271: `670`,
    1272: `671`,
    1273: `671`,
    1274: `672`,
    1275: `672`,
    1276: `673`,
    1277: `673`,
    1278: `674`,
    1279: `675`,
    128: `21`,
    1280: `676`,
    1281: `676`,
    1282: `677`,
    1283: `677`,
    1284: `678`,
    1285: `678`,
    1286: `679`,
    1287: `679`,
    1288: `680`,
    1289: `680`,
    129: `21`,
    1290: `681`,
    1291: `681`,
    1292: `681`,
    1293: `683`,
    1294: `683`,
    1295: `684`,
    1296: `684`,
    1297: `685`,
    1298: `686`,
    1299: `686`,
    13: `2`,
    130: `21`,
    1300: `687`,
    1301: `687`,
    1302: `688`,
    1303: `688`,
    1304: `689`,
    1305: `691`,
    1306: `692`,
    1307: `693`,
    1308: `694`,
    1309: `694`,
    131: `21`,
    1310: `695`,
    1311: `696`,
    1312: `696`,
    1313: `696`,
    1314: `697`,
    1315: `698`,
    1316: `699`,
    1317: `700`,
    1318: `701`,
    1319: `702`,
    132: `21`,
    1320: `710`,
    1321: `710`,
    1322: `711`,
    1323: `711`,
    1324: `712`,
    1325: `713`,
    1326: `722`,
    1327: `722`,
    1328: `723`,
    1329: `724`,
    133: `21`,
    1330: `724`,
    1331: `725`,
    1332: `725`,
    1333: `725`,
    1334: `726`,
    1335: `727`,
    1336: `727`,
    1337: `728`,
    1338: `729`,
    1339: `729`,
    134: `21`,
    1340: `729`,
    1341: `730`,
    1342: `731`,
    1343: `731`,
    1344: `732`,
    1345: `732`,
    1346: `732`,
    1347: `732`,
    1348: `732`,
    1349: `732`,
    135: `21`,
    1350: `732`,
    1351: `732`,
    1352: `732`,
    1353: `732`,
    1354: `733`,
    1355: `733`,
    1356: `734`,
    1357: `735`,
    1358: `736`,
    1359: `736`,
    136: `21`,
    1360: `737`,
    1361: `737`,
    1362: `738`,
    1363: `738`,
    1364: `739`,
    1365: `740`,
    1366: `740`,
    1367: `741`,
    1368: `741`,
    1369: `741`,
    137: `21`,
    1370: `742`,
    1371: `743`,
    1372: `743`,
    1373: `744`,
    1374: `744`,
    1375: `744`,
    1376: `745`,
    1377: `746`,
    1378: `746`,
    1379: `747`,
    138: `21`,
    1380: `748`,
    1381: `749`,
    1382: `749`,
    1383: `750`,
    1384: `751`,
    1385: `752`,
    1386: `752`,
    1387: `753`,
    1388: `754`,
    1389: `755`,
    139: `21`,
    1390: `755`,
    1391: `756`,
    1392: `757`,
    1393: `758`,
    1394: `758`,
    1395: `759`,
    1396: `760`,
    1397: `761`,
    1398: `761`,
    1399: `762`,
    14: `2`,
    140: `21`,
    1400: `763`,
    1401: `764`,
    1402: `764`,
    1403: `765`,
    1404: `765`,
    1405: `766`,
    1406: `766`,
    1407: `767`,
    1408: `767`,
    1409: `767`,
    141: `21`,
    1410: `769`,
    1411: `769`,
    1412: `770`,
    1413: `770`,
    1414: `771`,
    1415: `772`,
    1416: `780`,
    1417: `780`,
    1418: `781`,
    1419: `782`,
    142: `21`,
    1420: `783`,
    1421: `791`,
    1422: `792`,
    1423: `792`,
    1424: `793`,
    1425: `793`,
    1426: `793`,
    1427: `793`,
    1428: `793`,
    1429: `793`,
    143: `21`,
    1430: `793`,
    1431: `793`,
    1432: `793`,
    1433: `793`,
    1434: `794`,
    1435: `794`,
    1436: `795`,
    1437: `796`,
    1438: `797`,
    1439: `797`,
    144: `21`,
    1440: `798`,
    1441: `798`,
    1442: `799`,
    1443: `799`,
    1444: `800`,
    1445: `801`,
    1446: `802`,
    1447: `803`,
    1448: `803`,
    1449: `804`,
    145: `21`,
    1450: `804`,
    1451: `804`,
    1452: `805`,
    1453: `806`,
    1454: `806`,
    1455: `807`,
    1456: `808`,
    1457: `809`,
    1458: `809`,
    1459: `810`,
    146: `21`,
    1460: `811`,
    1461: `812`,
    1462: `812`,
    1463: `813`,
    1464: `814`,
    1465: `815`,
    1466: `815`,
    1467: `816`,
    1468: `817`,
    1469: `818`,
    147: `21`,
    1470: `818`,
    1471: `819`,
    1472: `820`,
    1473: `821`,
    1474: `821`,
    1475: `822`,
    1476: `823`,
    1477: `824`,
    1478: `824`,
    1479: `825`,
    148: `21`,
    1480: `825`,
    1481: `826`,
    1482: `826`,
    1483: `827`,
    1484: `827`,
    1485: `827`,
    1486: `829`,
    1487: `829`,
    1488: `830`,
    1489: `830`,
    149: `21`,
    1490: `831`,
    1491: `832`,
    1492: `841`,
    1493: `841`,
    1494: `842`,
    1495: `843`,
    1496: `843`,
    1497: `844`,
    1498: `844`,
    1499: `844`,
    15: `2`,
    150: `21`,
    1500: `845`,
    1501: `846`,
    1502: `846`,
    1503: `846`,
    1504: `847`,
    1505: `848`,
    1506: `848`,
    1507: `849`,
    1508: `849`,
    1509: `849`,
    151: `21`,
    1510: `849`,
    1511: `849`,
    1512: `849`,
    1513: `849`,
    1514: `849`,
    1515: `849`,
    1516: `849`,
    1517: `850`,
    1518: `850`,
    1519: `851`,
    152: `21`,
    1520: `852`,
    1521: `853`,
    1522: `853`,
    1523: `854`,
    1524: `854`,
    1525: `855`,
    1526: `855`,
    1527: `856`,
    1528: `857`,
    1529: `857`,
    153: `21`,
    1530: `858`,
    1531: `858`,
    1532: `858`,
    1533: `859`,
    1534: `860`,
    1535: `860`,
    1536: `861`,
    1537: `861`,
    1538: `861`,
    1539: `862`,
    154: `21`,
    1540: `863`,
    1541: `863`,
    1542: `864`,
    1543: `865`,
    1544: `866`,
    1545: `866`,
    1546: `867`,
    1547: `868`,
    1548: `869`,
    1549: `869`,
    155: `21`,
    1550: `870`,
    1551: `871`,
    1552: `872`,
    1553: `872`,
    1554: `873`,
    1555: `874`,
    1556: `875`,
    1557: `875`,
    1558: `876`,
    1559: `877`,
    156: `21`,
    1560: `878`,
    1561: `878`,
    1562: `879`,
    1563: `880`,
    1564: `881`,
    1565: `881`,
    1566: `882`,
    1567: `882`,
    1568: `883`,
    1569: `883`,
    157: `21`,
    1570: `884`,
    1571: `884`,
    1572: `884`,
    1573: `886`,
    1574: `886`,
    1575: `887`,
    1576: `887`,
    1577: `887`,
    1578: `888`,
    1579: `888`,
    158: `21`,
    1580: `889`,
    1581: `889`,
    1582: `890`,
    1583: `890`,
    1584: `891`,
    1585: `892`,
    1586: `892`,
    1587: `893`,
    1588: `893`,
    1589: `894`,
    159: `21`,
    1590: `894`,
    1591: `895`,
    1592: `896`,
    1593: `897`,
    1594: `898`,
    1595: `906`,
    1596: `906`,
    1597: `907`,
    1598: `907`,
    1599: `908`,
    16: `2`,
    160: `21`,
    1600: `909`,
    1601: `917`,
    1602: `917`,
    1603: `918`,
    1604: `918`,
    1605: `919`,
    1606: `920`,
    1607: `920`,
    1608: `921`,
    1609: `921`,
    161: `21`,
    1610: `922`,
    1611: `922`,
    1612: `923`,
    1613: `924`,
    1614: `933`,
    1615: `934`,
    1616: `935`,
    1617: `935`,
    1618: `936`,
    1619: `936`,
    162: `21`,
    1620: `937`,
    1621: `938`,
    1622: `938`,
    1623: `938`,
    1624: `939`,
    1625: `940`,
    1626: `941`,
    1627: `942`,
    1628: `943`,
    1629: `951`,
    163: `21`,
    1630: `951`,
    1631: `952`,
    1632: `952`,
    1633: `953`,
    1634: `953`,
    1635: `954`,
    1636: `954`,
    1637: `955`,
    1638: `956`,
    1639: `957`,
    164: `21`,
    1640: `957`,
    1641: `958`,
    1642: `958`,
    1643: `959`,
    1644: `959`,
    1645: `960`,
    1646: `960`,
    1647: `961`,
    1648: `961`,
    1649: `962`,
    165: `21`,
    1650: `962`,
    1651: `962`,
    1652: `965`,
    1653: `965`,
    1654: `966`,
    1655: `966`,
    1656: `966`,
    1657: `967`,
    1658: `968`,
    1659: `969`,
    166: `21`,
    1660: `970`,
    1661: `970`,
    1662: `971`,
    1663: `971`,
    1664: `972`,
    1665: `973`,
    1666: `974`,
    1667: `975`,
    1668: `980`,
    1669: `980`,
    167: `22`,
    1670: `981`,
    1671: `981`,
    1672: `982`,
    1673: `983`,
    1674: `988`,
    1675: `988`,
    1676: `989`,
    1677: `989`,
    1678: `990`,
    1679: `991`,
    168: `22`,
    1680: `996`,
    1681: `996`,
    1682: `997`,
    1683: `997`,
    1684: `998`,
    1685: `998`,
    1686: `998`,
    1687: `999`,
    1688: `1000`,
    1689: `1000`,
    169: `22`,
    1690: `1001`,
    1691: `1001`,
    1692: `1002`,
    1693: `1004`,
    1694: `1005`,
    1695: `1005`,
    1696: `1006`,
    1697: `1007`,
    1698: `1008`,
    1699: `1008`,
    17: `2`,
    170: `23`,
    1700: `1009`,
    1701: `1010`,
    1702: `1010`,
    1703: `1010`,
    1704: `1011`,
    1705: `1011`,
    1706: `1011`,
    1707: `1012`,
    1708: `1012`,
    1709: `1013`,
    171: `23`,
    1710: `1013`,
    1711: `1014`,
    1712: `1015`,
    1713: `1015`,
    1714: `1016`,
    1715: `1017`,
    1716: `1017`,
    1717: `1018`,
    1718: `1018`,
    1719: `1018`,
    172: `23`,
    1720: `1019`,
    1721: `1019`,
    1722: `1020`,
    1723: `1021`,
    1724: `1022`,
    1725: `1022`,
    1726: `1023`,
    1727: `1024`,
    1728: `1025`,
    1729: `1026`,
    173: `23`,
    1730: `1026`,
    1731: `1026`,
    1732: `1028`,
    1733: `1028`,
    1734: `1029`,
    1735: `1030`,
    1736: `1030`,
    1737: `1031`,
    1738: `1032`,
    1739: `1033`,
    174: `23`,
    1740: `1034`,
    1741: `1035`,
    1742: `1036`,
    1743: `1037`,
    1744: `1038`,
    1745: `1038`,
    1746: `1039`,
    1747: `1040`,
    1748: `1040`,
    1749: `1040`,
    175: `23`,
    1750: `1041`,
    1751: `1041`,
    1752: `1041`,
    1753: `1042`,
    1754: `1043`,
    1755: `1043`,
    1756: `1044`,
    1757: `1045`,
    1758: `1046`,
    1759: `1046`,
    176: `23`,
    1760: `1046`,
    1761: `1047`,
    1762: `1048`,
    1763: `1048`,
    1764: `1049`,
    1765: `1049`,
    1766: `1049`,
    1767: `1049`,
    1768: `1049`,
    1769: `1049`,
    177: `23`,
    1770: `1049`,
    1771: `1049`,
    1772: `1049`,
    1773: `1049`,
    1774: `1050`,
    1775: `1050`,
    1776: `1051`,
    1777: `1052`,
    1778: `1052`,
    1779: `1052`,
    178: `23`,
    1780: `1053`,
    1781: `1054`,
    1782: `1055`,
    1783: `1055`,
    1784: `1056`,
    1785: `1057`,
    1786: `1057`,
    1787: `1057`,
    1788: `1058`,
    1789: `1058`,
    179: `23`,
    1790: `1059`,
    1791: `1059`,
    1792: `1060`,
    1793: `1060`,
    1794: `1061`,
    1795: `1062`,
    1796: `1063`,
    1797: `1063`,
    1798: `1064`,
    1799: `1064`,
    18: `2`,
    180: `23`,
    1800: `1064`,
    1801: `1065`,
    1802: `1066`,
    1803: `1066`,
    1804: `1067`,
    1805: `1067`,
    1806: `1067`,
    1807: `1068`,
    1808: `1069`,
    1809: `1069`,
    181: `23`,
    1810: `1070`,
    1811: `1071`,
    1812: `1072`,
    1813: `1072`,
    1814: `1073`,
    1815: `1074`,
    1816: `1075`,
    1817: `1075`,
    1818: `1076`,
    1819: `1077`,
    182: `23`,
    1820: `1078`,
    1821: `1078`,
    1822: `1079`,
    1823: `1080`,
    1824: `1081`,
    1825: `1081`,
    1826: `1082`,
    1827: `1083`,
    1828: `1084`,
    1829: `1084`,
    183: `23`,
    1830: `1085`,
    1831: `1086`,
    1832: `1087`,
    1833: `1087`,
    1834: `1088`,
    1835: `1088`,
    1836: `1089`,
    1837: `1089`,
    1838: `1090`,
    1839: `1090`,
    184: `23`,
    1840: `1091`,
    1841: `1091`,
    1842: `1092`,
    1843: `1092`,
    1844: `1092`,
    1845: `1094`,
    1846: `1094`,
    1847: `1095`,
    1848: `1096`,
    1849: `1097`,
    185: `23`,
    1850: `1097`,
    1851: `1098`,
    1852: `1099`,
    1853: `1101`,
    1854: `1102`,
    1855: `1103`,
    1856: `1104`,
    1857: `1105`,
    1858: `1105`,
    1859: `1106`,
    186: `23`,
    1860: `1107`,
    1861: `1107`,
    1862: `1107`,
    1863: `1108`,
    1864: `1108`,
    1865: `1108`,
    1866: `1109`,
    1867: `1110`,
    1868: `1110`,
    1869: `1111`,
    187: `23`,
    1870: `1111`,
    1871: `1112`,
    1872: `1112`,
    1873: `1113`,
    1874: `1114`,
    1875: `1122`,
    1876: `1122`,
    1877: `1123`,
    1878: `1123`,
    1879: `1124`,
    188: `23`,
    1880: `1125`,
    1881: `1133`,
    1882: `1133`,
    1883: `1134`,
    1884: `1134`,
    1885: `1135`,
    1886: `1135`,
    1887: `1135`,
    1888: `1136`,
    1889: `1137`,
    189: `23`,
    1890: `1137`,
    1891: `1138`,
    1892: `1138`,
    1893: `1139`,
    1894: `1141`,
    1895: `1142`,
    1896: `1142`,
    1897: `1143`,
    1898: `1144`,
    1899: `1145`,
    19: `2`,
    190: `23`,
    1900: `1145`,
    1901: `1146`,
    1902: `1147`,
    1903: `1147`,
    1904: `1147`,
    1905: `1148`,
    1906: `1148`,
    1907: `1148`,
    1908: `1149`,
    1909: `1149`,
    191: `23`,
    1910: `1150`,
    1911: `1150`,
    1912: `1151`,
    1913: `1152`,
    1914: `1152`,
    1915: `1153`,
    1916: `1154`,
    1917: `1154`,
    1918: `1155`,
    1919: `1156`,
    192: `23`,
    1920: `1157`,
    1921: `1157`,
    1922: `1158`,
    1923: `1159`,
    1924: `1160`,
    1925: `1160`,
    1926: `1161`,
    1927: `1162`,
    1928: `1163`,
    1929: `1163`,
    193: `23`,
    1930: `1164`,
    1931: `1165`,
    1932: `1166`,
    1933: `1167`,
    1934: `1167`,
    1935: `1167`,
    1936: `1168`,
    1937: `1169`,
    1938: `1169`,
    1939: `1170`,
    194: `23`,
    1940: `1170`,
    1941: `1170`,
    1942: `1170`,
    1943: `1170`,
    1944: `1170`,
    1945: `1170`,
    1946: `1170`,
    1947: `1170`,
    1948: `1170`,
    1949: `1171`,
    195: `23`,
    1950: `1171`,
    1951: `1172`,
    1952: `1173`,
    1953: `1173`,
    1954: `1173`,
    1955: `1174`,
    1956: `1175`,
    1957: `1176`,
    1958: `1176`,
    1959: `1177`,
    196: `23`,
    1960: `1178`,
    1961: `1178`,
    1962: `1178`,
    1963: `1179`,
    1964: `1179`,
    1965: `1180`,
    1966: `1180`,
    1967: `1181`,
    1968: `1181`,
    1969: `1182`,
    197: `23`,
    1970: `1183`,
    1971: `1184`,
    1972: `1184`,
    1973: `1185`,
    1974: `1186`,
    1975: `1186`,
    1976: `1187`,
    1977: `1187`,
    1978: `1187`,
    1979: `1187`,
    198: `23`,
    1980: `1187`,
    1981: `1187`,
    1982: `1188`,
    1983: `1188`,
    1984: `1189`,
    1985: `1190`,
    1986: `1193`,
    1987: `1194`,
    1988: `1195`,
    1989: `1195`,
    199: `23`,
    1990: `1196`,
    1991: `1196`,
    1992: `1197`,
    1993: `1198`,
    1994: `1198`,
    1995: `1198`,
    1996: `1199`,
    1997: `1200`,
    1998: `1201`,
    1999: `1202`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1203`,
    2001: `1203`,
    2002: `1203`,
    2003: `1204`,
    2004: `1204`,
    2005: `1205`,
    2006: `1205`,
    2007: `1206`,
    2008: `1206`,
    2009: `1207`,
    201: `23`,
    2010: `1207`,
    2011: `1208`,
    2012: `1209`,
    2013: `1210`,
    2014: `1210`,
    2015: `1211`,
    2016: `1211`,
    2017: `1212`,
    2018: `1212`,
    2019: `1213`,
    202: `23`,
    2020: `1213`,
    2021: `1215`,
    2022: `1215`,
    2023: `1216`,
    2024: `1216`,
    2025: `1217`,
    2026: `1217`,
    2027: `1217`,
    2028: `1218`,
    2029: `1218`,
    203: `23`,
    2030: `1219`,
    2031: `1219`,
    2032: `1219`,
    2033: `1220`,
    2034: `1220`,
    2035: `1221`,
    2036: `1222`,
    2037: `1222`,
    2038: `1223`,
    2039: `1224`,
    204: `23`,
    2040: `1224`,
    2041: `1224`,
    2042: `1225`,
    2043: `1225`,
    2044: `1226`,
    2045: `1226`,
    2046: `1227`,
    2047: `1228`,
    2048: `1229`,
    2049: `1229`,
    205: `23`,
    2050: `1230`,
    2051: `1230`,
    2052: `1230`,
    2053: `1231`,
    2054: `1232`,
    2055: `1232`,
    2056: `1233`,
    2057: `1233`,
    2058: `1233`,
    2059: `1234`,
    206: `23`,
    2060: `1235`,
    2061: `1235`,
    2062: `1236`,
    2063: `1236`,
    2064: `1237`,
    2065: `1238`,
    2066: `1239`,
    2067: `1240`,
    2068: `1240`,
    2069: `1241`,
    207: `23`,
    2070: `1242`,
    2071: `1243`,
    2072: `1243`,
    2073: `1244`,
    2074: `1244`,
    2075: `1245`,
    2076: `1246`,
    2077: `1247`,
    2078: `1248`,
    2079: `1248`,
    208: `23`,
    2080: `1249`,
    2081: `1250`,
    2082: `1251`,
    2083: `1251`,
    2084: `1252`,
    2085: `1253`,
    2086: `1254`,
    2087: `1255`,
    2088: `1256`,
    2089: `1256`,
    209: `23`,
    2090: `1257`,
    2091: `1258`,
    2092: `1259`,
    2093: `1260`,
    2094: `1261`,
    2095: `1261`,
    2096: `1262`,
    2097: `1262`,
    2098: `1263`,
    2099: `1263`,
    21: `2`,
    210: `23`,
    2100: `1264`,
    2101: `1264`,
    2102: `1265`,
    2103: `1265`,
    2104: `1266`,
    2105: `1266`,
    2106: `1266`,
    2107: `1269`,
    2108: `1269`,
    2109: `1270`,
    211: `23`,
    2110: `1270`,
    2111: `1271`,
    2112: `1271`,
    2113: `1272`,
    2114: `1273`,
    2115: `1274`,
    2116: `1274`,
    2117: `1274`,
    2118: `1275`,
    2119: `1276`,
    212: `23`,
    2120: `1276`,
    2121: `1277`,
    2122: `1277`,
    2123: `1277`,
    2124: `1277`,
    2125: `1277`,
    2126: `1277`,
    2127: `1277`,
    2128: `1277`,
    2129: `1277`,
    213: `23`,
    2130: `1277`,
    2131: `1278`,
    2132: `1278`,
    2133: `1279`,
    2134: `1280`,
    2135: `1281`,
    2136: `1281`,
    2137: `1282`,
    2138: `1282`,
    2139: `1283`,
    214: `23`,
    2140: `1283`,
    2141: `1284`,
    2142: `1285`,
    2143: `1285`,
    2144: `1286`,
    2145: `1286`,
    2146: `1286`,
    2147: `1287`,
    2148: `1288`,
    2149: `1288`,
    215: `23`,
    2150: `1289`,
    2151: `1289`,
    2152: `1289`,
    2153: `1290`,
    2154: `1291`,
    2155: `1291`,
    2156: `1292`,
    2157: `1293`,
    2158: `1294`,
    2159: `1294`,
    216: `25`,
    2160: `1295`,
    2161: `1296`,
    2162: `1297`,
    2163: `1297`,
    2164: `1298`,
    2165: `1299`,
    2166: `1300`,
    2167: `1300`,
    2168: `1301`,
    2169: `1302`,
    217: `27`,
    2170: `1303`,
    2171: `1303`,
    2172: `1304`,
    2173: `1305`,
    2174: `1306`,
    2175: `1306`,
    2176: `1307`,
    2177: `1308`,
    2178: `1309`,
    2179: `1309`,
    218: `27`,
    2180: `1310`,
    2181: `1310`,
    2182: `1311`,
    2183: `1311`,
    2184: `1312`,
    2185: `1312`,
    2186: `1312`,
    2187: `1314`,
    2188: `1314`,
    2189: `1315`,
    219: `27`,
    2190: `1315`,
    2191: `1316`,
    2192: `1316`,
    2193: `1317`,
    2194: `1318`,
    2195: `1319`,
    2196: `1319`,
    2197: `1320`,
    2198: `1320`,
    2199: `1321`,
    22: `2`,
    220: `28`,
    2200: `1321`,
    2201: `1321`,
    2202: `1322`,
    2203: `1322`,
    2204: `1323`,
    2205: `1323`,
    2206: `1324`,
    2207: `1324`,
    2208: `1325`,
    2209: `1326`,
    221: `28`,
    2210: `1326`,
    2211: `1327`,
    2212: `1327`,
    2213: `1327`,
    2214: `1327`,
    2215: `1327`,
    2216: `1327`,
    2217: `1328`,
    2218: `1328`,
    2219: `1329`,
    222: `30`,
    2220: `1330`,
    2221: `1331`,
    2222: `1331`,
    2223: `1332`,
    2224: `1333`,
    2225: `1333`,
    2226: `1334`,
    2227: `1335`,
    2228: `1336`,
    2229: `1338`,
    223: `31`,
    2230: `1338`,
    2231: `1339`,
    2232: `1339`,
    2233: `1339`,
    2234: `1340`,
    2235: `1340`,
    2236: `1341`,
    2237: `1342`,
    2238: `1342`,
    2239: `1343`,
    224: `32`,
    2240: `1343`,
    2241: `1344`,
    2242: `1344`,
    2243: `1344`,
    2244: `1345`,
    2245: `1347`,
    2246: `1347`,
    2247: `1348`,
    2248: `1348`,
    2249: `1349`,
    225: `33`,
    2250: `1349`,
    2251: `1349`,
    2252: `1350`,
    2253: `1350`,
    2254: `1350`,
    2255: `1350`,
    2256: `1350`,
    2257: `1350`,
    2258: `1350`,
    2259: `1350`,
    226: `33`,
    2260: `1350`,
    2261: `1350`,
    2262: `1350`,
    2263: `1350`,
    2264: `1350`,
    2265: `1350`,
    2266: `1350`,
    2267: `1350`,
    2268: `1350`,
    2269: `1350`,
    227: `34`,
    2270: `1350`,
    2271: `1350`,
    2272: `1350`,
    2273: `1350`,
    2274: `1350`,
    2275: `1350`,
    2276: `1350`,
    2277: `1350`,
    2278: `1350`,
    2279: `1350`,
    228: `35`,
    2280: `1350`,
    2281: `1350`,
    2282: `1350`,
    2283: `1350`,
    2284: `1350`,
    2285: `1350`,
    2286: `1350`,
    2287: `1350`,
    2288: `1350`,
    2289: `1350`,
    229: `35`,
    2290: `1350`,
    2291: `1350`,
    2292: `1350`,
    2293: `1350`,
    2294: `1350`,
    2295: `1350`,
    2296: `1350`,
    2297: `1350`,
    2298: `1350`,
    2299: `1350`,
    23: `2`,
    230: `36`,
    2300: `1350`,
    2301: `1350`,
    2302: `1350`,
    2303: `1350`,
    2304: `1350`,
    2305: `1350`,
    2306: `1350`,
    2307: `1350`,
    2308: `1350`,
    2309: `1350`,
    231: `37`,
    2310: `1350`,
    2311: `1350`,
    2312: `1350`,
    2313: `1350`,
    2314: `1350`,
    2315: `1350`,
    2316: `1350`,
    2317: `1350`,
    2318: `1350`,
    2319: `1350`,
    232: `38`,
    2320: `1350`,
    2321: `1350`,
    2322: `1350`,
    2323: `1350`,
    2324: `1350`,
    2325: `1350`,
    2326: `1350`,
    2327: `1350`,
    2328: `1351`,
    2329: `1351`,
    233: `39`,
    2330: `1352`,
    2331: `1352`,
    2332: `1353`,
    2333: `1354`,
    2334: `1354`,
    2335: `1354`,
    2336: `1355`,
    2337: `1356`,
    2338: `1357`,
    2339: `1357`,
    234: `39`,
    2340: `1358`,
    2341: `1358`,
    2342: `1359`,
    2343: `1360`,
    2344: `1360`,
    2345: `1361`,
    2346: `1361`,
    2347: `1362`,
    2348: `1362`,
    2349: `1363`,
    235: `41`,
    2350: `1363`,
    2351: `1364`,
    2352: `1364`,
    2353: `1364`,
    2354: `1366`,
    2355: `1366`,
    2356: `1366`,
    2357: `1367`,
    2358: `1367`,
    2359: `1368`,
    236: `42`,
    2360: `1368`,
    2361: `1368`,
    2362: `1369`,
    2363: `1369`,
    2364: `1369`,
    2365: `1370`,
    2366: `1370`,
    2367: `1371`,
    2368: `1371`,
    2369: `1371`,
    237: `42`,
    2370: `1373`,
    2371: `1373`,
    2372: `1373`,
    2373: `1374`,
    2374: `1374`,
    2375: `1374`,
    2376: `1375`,
    2377: `1375`,
    2378: `1376`,
    2379: `1376`,
    238: `43`,
    2380: `1376`,
    2381: `1378`,
    2382: `1379`,
    2383: `1379`,
    2384: `1380`,
    2385: `1381`,
    2386: `1382`,
    2387: `1383`,
    2388: `1383`,
    2389: `1384`,
    239: `44`,
    2390: `1385`,
    2391: `1386`,
    2392: `1387`,
    2393: `1387`,
    2394: `1388`,
    2395: `1389`,
    2396: `1390`,
    2397: `1391`,
    2398: `1391`,
    2399: `1392`,
    24: `2`,
    240: `45`,
    2400: `1393`,
    2401: `1394`,
    2402: `1394`,
    2403: `1394`,
    2404: `1395`,
    2405: `1395`,
    2406: `1395`,
    2407: `1396`,
    2408: `1397`,
    2409: `1398`,
    241: `45`,
    2410: `1399`,
    2411: `1399`,
    2412: `1399`,
    2413: `1401`,
    2414: `1401`,
    2415: `1401`,
    2416: `1403`,
    2417: `1403`,
    2418: `1403`,
    2419: `1405`,
    242: `45`,
    2420: `1405`,
    2421: `1406`,
    2422: `1406`,
    2423: `1406`,
    2424: `1407`,
    2425: `1407`,
    2426: `1408`,
    2427: `1408`,
    2428: `1408`,
    2429: `1410`,
    243: `46`,
    2430: `1410`,
    2431: `1411`,
    2432: `1411`,
    2433: `1411`,
    2434: `1412`,
    2435: `1412`,
    2436: `1413`,
    2437: `1413`,
    2438: `1413`,
    2439: `1415`,
    244: `46`,
    2440: `1415`,
    2441: `1415`,
    2442: `1417`,
    2443: `1417`,
    2444: `1418`,
    2445: `1418`,
    2446: `1419`,
    2447: `1419`,
    2448: `1420`,
    2449: `1421`,
    245: `47`,
    2450: `1422`,
    2451: `1422`,
    2452: `1422`,
    2453: `1423`,
    2454: `1423`,
    2455: `1424`,
    2456: `1424`,
    2457: `1425`,
    2458: `1425`,
    2459: `1426`,
    246: `48`,
    2460: `1426`,
    2461: `1427`,
    2462: `1428`,
    2463: `1429`,
    2464: `1429`,
    2465: `1430`,
    2466: `1430`,
    2467: `1431`,
    2468: `1431`,
    2469: `1432`,
    247: `49`,
    2470: `1432`,
    2471: `1434`,
    2472: `1434`,
    2473: `1435`,
    2474: `1435`,
    2475: `1436`,
    2476: `1436`,
    2477: `1436`,
    2478: `1437`,
    2479: `1437`,
    248: `49`,
    2480: `1438`,
    2481: `1438`,
    2482: `1438`,
    2483: `1439`,
    2484: `1439`,
    2485: `1440`,
    2486: `1441`,
    2487: `1441`,
    2488: `1442`,
    2489: `1443`,
    249: `50`,
    2490: `1443`,
    2491: `1443`,
    2492: `1444`,
    2493: `1444`,
    2494: `1445`,
    2495: `1445`,
    2496: `1446`,
    2497: `1447`,
    2498: `1448`,
    2499: `1448`,
    25: `2`,
    250: `50`,
    2500: `1449`,
    2501: `1449`,
    2502: `1449`,
    2503: `1450`,
    2504: `1451`,
    2505: `1451`,
    2506: `1452`,
    2507: `1452`,
    2508: `1452`,
    2509: `1453`,
    251: `51`,
    2510: `1454`,
    2511: `1454`,
    2512: `1455`,
    2513: `1455`,
    2514: `1456`,
    2515: `1457`,
    2516: `1458`,
    2517: `1459`,
    2518: `1459`,
    2519: `1460`,
    252: `51`,
    2520: `1461`,
    2521: `1462`,
    2522: `1462`,
    2523: `1463`,
    2524: `1463`,
    2525: `1464`,
    2526: `1465`,
    2527: `1466`,
    2528: `1467`,
    2529: `1467`,
    253: `51`,
    2530: `1468`,
    2531: `1469`,
    2532: `1470`,
    2533: `1470`,
    2534: `1471`,
    2535: `1472`,
    2536: `1473`,
    2537: `1474`,
    2538: `1475`,
    2539: `1475`,
    254: `52`,
    2540: `1476`,
    2541: `1477`,
    2542: `1478`,
    2543: `1478`,
    2544: `1479`,
    2545: `1479`,
    2546: `1480`,
    2547: `1480`,
    2548: `1481`,
    2549: `1481`,
    255: `52`,
    2550: `1482`,
    2551: `1482`,
    2552: `1483`,
    2553: `1483`,
    2554: `1483`,
    2555: `1485`,
    2556: `1485`,
    2557: `1486`,
    2558: `1487`,
    2559: `1487`,
    256: `53`,
    2560: `1488`,
    2561: `1489`,
    2562: `1489`,
    2563: `1490`,
    2564: `1490`,
    2565: `1491`,
    2566: `1492`,
    2567: `1493`,
    2568: `1493`,
    2569: `1493`,
    257: `53`,
    2570: `1494`,
    2571: `1494`,
    2572: `1495`,
    2573: `1495`,
    2574: `1496`,
    2575: `1497`,
    2576: `1498`,
    2577: `1498`,
    2578: `1499`,
    2579: `1499`,
    258: `53`,
    2580: `1499`,
    2581: `1500`,
    2582: `1501`,
    2583: `1501`,
    2584: `1502`,
    2585: `1502`,
    2586: `1502`,
    2587: `1503`,
    2588: `1504`,
    2589: `1504`,
    259: `53`,
    2590: `1505`,
    2591: `1505`,
    2592: `1506`,
    2593: `1507`,
    2594: `1508`,
    2595: `1509`,
    2596: `1509`,
    2597: `1510`,
    2598: `1511`,
    2599: `1512`,
    26: `2`,
    260: `53`,
    2600: `1512`,
    2601: `1513`,
    2602: `1513`,
    2603: `1514`,
    2604: `1515`,
    2605: `1516`,
    2606: `1517`,
    2607: `1517`,
    2608: `1518`,
    2609: `1519`,
    261: `53`,
    2610: `1520`,
    2611: `1520`,
    2612: `1521`,
    2613: `1522`,
    2614: `1523`,
    2615: `1524`,
    2616: `1525`,
    2617: `1525`,
    2618: `1526`,
    2619: `1527`,
    262: `54`,
    2620: `1528`,
    2621: `1529`,
    2622: `1530`,
    2623: `1530`,
    2624: `1531`,
    2625: `1531`,
    2626: `1532`,
    2627: `1532`,
    2628: `1533`,
    2629: `1533`,
    263: `54`,
    2630: `1534`,
    2631: `1534`,
    2632: `1535`,
    2633: `1535`,
    2634: `1535`,
    2635: `1537`,
    2636: `1537`,
    2637: `1538`,
    2638: `1539`,
    2639: `1539`,
    264: `55`,
    2640: `1540`,
    2641: `1541`,
    2642: `1541`,
    2643: `1542`,
    2644: `1542`,
    2645: `1543`,
    2646: `1544`,
    2647: `1545`,
    2648: `1545`,
    2649: `1545`,
    265: `56`,
    2650: `1546`,
    2651: `1546`,
    2652: `1547`,
    2653: `1547`,
    2654: `1548`,
    2655: `1549`,
    2656: `1550`,
    2657: `1550`,
    2658: `1551`,
    2659: `1551`,
    266: `57`,
    2660: `1551`,
    2661: `1552`,
    2662: `1553`,
    2663: `1553`,
    2664: `1554`,
    2665: `1554`,
    2666: `1554`,
    2667: `1555`,
    2668: `1556`,
    2669: `1556`,
    267: `57`,
    2670: `1557`,
    2671: `1557`,
    2672: `1558`,
    2673: `1559`,
    2674: `1560`,
    2675: `1561`,
    2676: `1561`,
    2677: `1562`,
    2678: `1563`,
    2679: `1564`,
    268: `58`,
    2680: `1564`,
    2681: `1565`,
    2682: `1565`,
    2683: `1566`,
    2684: `1567`,
    2685: `1568`,
    2686: `1569`,
    2687: `1569`,
    2688: `1570`,
    2689: `1571`,
    269: `59`,
    2690: `1572`,
    2691: `1572`,
    2692: `1573`,
    2693: `1574`,
    2694: `1575`,
    2695: `1576`,
    2696: `1577`,
    2697: `1577`,
    2698: `1578`,
    2699: `1579`,
    27: `2`,
    270: `61`,
    2700: `1580`,
    2701: `1580`,
    2702: `1581`,
    2703: `1581`,
    2704: `1582`,
    2705: `1582`,
    2706: `1583`,
    2707: `1583`,
    2708: `1584`,
    2709: `1584`,
    271: `61`,
    2710: `1585`,
    2711: `1585`,
    2712: `1585`,
    2713: `1587`,
    2714: `1587`,
    2715: `1589`,
    2716: `1589`,
    2717: `1590`,
    2718: `1590`,
    2719: `1590`,
    272: `62`,
    2720: `1591`,
    2721: `1591`,
    2722: `1592`,
    2723: `1592`,
    2724: `1592`,
    2725: `1593`,
    2726: `1594`,
    2727: `1596`,
    2728: `1596`,
    2729: `1597`,
    273: `62`,
    2730: `1597`,
    2731: `1598`,
    2732: `1598`,
    2733: `1598`,
    2734: `1600`,
    2735: `1601`,
    2736: `1601`,
    2737: `1602`,
    2738: `1602`,
    2739: `1603`,
    274: `62`,
    2740: `1603`,
    2741: `1604`,
    2742: `1604`,
    2743: `1604`,
    2744: `1606`,
    2745: `1606`,
    2746: `1607`,
    2747: `1607`,
    2748: `1608`,
    2749: `1609`,
    275: `63`,
    2750: `1611`,
    2751: `1611`,
    2752: `1611`,
    2753: `1613`,
    2754: `1613`,
    2755: `1614`,
    2756: `1615`,
    2757: `1615`,
    2758: `1616`,
    2759: `1617`,
    276: `63`,
    2760: `1619`,
    2761: `1620`,
    2762: `1620`,
    2763: `1621`,
    2764: `1621`,
    2765: `1622`,
    2766: `1622`,
    2767: `1622`,
    2768: `1623`,
    2769: `1623`,
    277: `64`,
    2770: `1623`,
    2771: `1625`,
    2772: `1626`,
    2773: `1627`,
    2774: `1628`,
    2775: `1629`,
    2776: `1631`,
    2777: `1632`,
    2778: `1632`,
    2779: `1633`,
    278: `65`,
    2780: `1634`,
    2781: `1634`,
    2782: `1635`,
    2783: `1635`,
    2784: `1636`,
    2785: `1636`,
    2786: `1637`,
    2787: `1638`,
    2788: `1640`,
    2789: `1641`,
    279: `66`,
    2790: `1641`,
    2791: `1642`,
    2792: `1642`,
    2793: `1643`,
    2794: `1643`,
    2795: `1644`,
    2796: `1644`,
    2797: `1645`,
    2798: `1645`,
    2799: `1646`,
    28: `2`,
    280: `66`,
    2800: `1646`,
    2801: `1647`,
    2802: `1648`,
    2803: `1650`,
    2804: `1650`,
    2805: `1650`,
    2806: `1652`,
    2807: `1652`,
    2808: `1652`,
    2809: `1654`,
    281: `66`,
    2810: `1654`,
    2811: `1655`,
    2812: `1655`,
    2813: `1655`,
    2814: `1656`,
    2815: `1656`,
    2816: `1657`,
    2817: `1657`,
    2818: `1657`,
    2819: `1659`,
    282: `66`,
    2820: `1660`,
    2821: `1662`,
    2822: `1663`,
    2823: `1664`,
    2824: `1665`,
    2825: `1665`,
    2826: `1666`,
    2827: `1666`,
    2828: `1667`,
    2829: `1667`,
    283: `66`,
    2830: `1667`,
    2831: `1668`,
    2832: `1670`,
    2833: `1671`,
    2834: `1672`,
    2835: `1672`,
    2836: `1672`,
    2837: `1673`,
    2838: `1674`,
    2839: `1674`,
    284: `66`,
    2840: `1677`,
    2841: `1677`,
    2842: `1678`,
    2843: `1678`,
    2844: `1679`,
    2845: `1680`,
    2846: `1681`,
    2847: `1682`,
    2848: `1682`,
    2849: `1683`,
    285: `66`,
    2850: `1684`,
    2851: `1684`,
    2852: `1685`,
    2853: `1685`,
    2854: `1686`,
    2855: `1686`,
    2856: `1687`,
    2857: `1688`,
    2858: `1689`,
    2859: `1689`,
    286: `66`,
    2860: `1690`,
    2861: `1691`,
    2862: `1692`,
    2863: `1693`,
    2864: `1693`,
    2865: `1694`,
    2866: `1695`,
    2867: `1696`,
    2868: `1698`,
    2869: `1699`,
    287: `66`,
    2870: `1700`,
    2871: `1701`,
    2872: `1701`,
    2873: `1701`,
    2874: `1702`,
    2875: `1702`,
    2876: `1703`,
    2877: `1704`,
    2878: `1705`,
    2879: `1707`,
    288: `66`,
    2880: `1708`,
    2881: `1708`,
    2882: `1708`,
    2883: `1709`,
    2884: `1709`,
    2885: `1710`,
    2886: `1711`,
    2887: `1711`,
    2888: `1711`,
    2889: `1712`,
    289: `66`,
    2890: `1712`,
    2891: `1713`,
    2892: `1714`,
    2893: `1714`,
    2894: `1715`,
    2895: `1716`,
    2896: `1716`,
    2897: `1717`,
    2898: `1718`,
    2899: `1718`,
    29: `2`,
    290: `66`,
    2900: `1718`,
    2901: `1719`,
    2902: `1719`,
    2903: `1720`,
    2904: `1721`,
    2905: `1721`,
    2906: `1721`,
    2907: `1722`,
    2908: `1722`,
    2909: `1723`,
    291: `66`,
    2910: `1724`,
    2911: `1724`,
    2912: `1724`,
    2913: `1725`,
    2914: `1726`,
    2915: `1726`,
    2916: `1727`,
    2917: `1728`,
    2918: `1728`,
    2919: `1728`,
    292: `66`,
    2920: `1729`,
    2921: `1730`,
    2922: `1730`,
    2923: `1731`,
    2924: `1732`,
    2925: `1732`,
    2926: `1732`,
    2927: `1733`,
    2928: `1734`,
    2929: `1734`,
    293: `66`,
    2930: `1735`,
    2931: `1736`,
    2932: `1736`,
    2933: `1736`,
    2934: `1737`,
    2935: `1738`,
    2936: `1738`,
    2937: `1739`,
    2938: `1740`,
    2939: `1740`,
    294: `66`,
    2940: `1740`,
    2941: `1741`,
    2942: `1742`,
    2943: `1742`,
    2944: `1743`,
    2945: `1744`,
    2946: `1744`,
    2947: `1744`,
    2948: `1745`,
    2949: `1746`,
    295: `66`,
    2950: `1746`,
    2951: `1747`,
    2952: `1748`,
    2953: `1748`,
    2954: `1748`,
    2955: `1749`,
    2956: `1750`,
    2957: `1750`,
    2958: `1751`,
    2959: `1752`,
    296: `66`,
    2960: `1752`,
    2961: `1752`,
    2962: `1753`,
    2963: `1754`,
    2964: `1754`,
    2965: `1755`,
    2966: `1756`,
    2967: `1756`,
    2968: `1756`,
    2969: `1757`,
    297: `67`,
    2970: `1757`,
    2971: `1758`,
    2972: `1758`,
    2973: `1758`,
    2974: `1759`,
    2975: `1760`,
    2976: `1760`,
    2977: `1761`,
    2978: `1763`,
    2979: `1764`,
    298: `67`,
    2980: `1765`,
    2981: `1766`,
    2982: `1766`,
    2983: `1766`,
    2984: `1767`,
    2985: `1767`,
    2986: `1768`,
    2987: `1768`,
    2988: `1768`,
    2989: `1769`,
    299: `67`,
    2990: `1769`,
    2991: `1769`,
    2992: `1771`,
    2993: `1772`,
    2994: `1772`,
    2995: `1772`,
    2996: `1773`,
    2997: `1774`,
    2998: `1775`,
    2999: `1776`,
    3: `2`,
    30: `2`,
    300: `69`,
    3000: `1777`,
    3001: `1779`,
    3002: `1780`,
    3003: `1780`,
    3004: `1780`,
    3005: `1782`,
    3006: `1783`,
    3007: `1783`,
    3008: `1783`,
    3009: `1785`,
    301: `69`,
    3010: `1785`,
    3011: `1786`,
    3012: `1787`,
    3013: `1787`,
    3014: `1788`,
    3015: `1790`,
    3016: `1791`,
    3017: `1792`,
    3018: `1792`,
    3019: `1793`,
    302: `69`,
    3020: `1795`,
    3021: `1795`,
    3022: `1796`,
    3023: `1797`,
    3024: `1797`,
    3025: `1798`,
    3026: `1800`,
    3027: `1801`,
    3028: `1801`,
    3029: `1802`,
    303: `70`,
    3030: `1804`,
    3031: `1805`,
    3032: `1806`,
    3033: `1807`,
    3034: `1808`,
    3035: `1808`,
    3036: `1809`,
    3037: `1810`,
    3038: `1811`,
    3039: `1812`,
    304: `71`,
    3040: `1814`,
    3041: `1814`,
    3042: `1815`,
    3043: `1815`,
    3044: `1816`,
    3045: `1817`,
    3046: `1818`,
    3047: `1818`,
    3048: `1818`,
    3049: `1819`,
    305: `71`,
    3050: `1819`,
    3051: `1819`,
    3052: `1822`,
    3053: `1822`,
    3054: `1823`,
    3055: `1823`,
    3056: `1824`,
    3057: `1825`,
    3058: `1826`,
    3059: `1827`,
    306: `73`,
    3060: `1827`,
    3061: `1828`,
    3062: `1829`,
    3063: `1829`,
    3064: `1830`,
    3065: `1830`,
    3066: `1831`,
    3067: `1831`,
    3068: `1832`,
    3069: `1833`,
    307: `74`,
    3070: `1834`,
    3071: `1834`,
    3072: `1835`,
    3073: `1835`,
    3074: `1836`,
    3075: `1837`,
    3076: `1838`,
    3077: `1838`,
    3078: `1839`,
    3079: `1839`,
    308: `75`,
    3080: `1840`,
    3081: `1841`,
    3082: `1842`,
    3083: `1842`,
    3084: `1843`,
    3085: `1844`,
    3086: `1845`,
    3087: `1847`,
    3088: `1848`,
    3089: `1848`,
    309: `76`,
    3090: `1849`,
    31: `2`,
    310: `76`,
    311: `77`,
    312: `78`,
    313: `79`,
    314: `79`,
    315: `80`,
    316: `81`,
    317: `82`,
    318: `83`,
    319: `83`,
    32: `2`,
    320: `84`,
    321: `84`,
    322: `84`,
    323: `86`,
    324: `86`,
    325: `86`,
    326: `87`,
    327: `87`,
    328: `87`,
    329: `88`,
    33: `2`,
    330: `89`,
    331: `89`,
    332: `90`,
    333: `90`,
    334: `92`,
    335: `93`,
    336: `94`,
    337: `95`,
    338: `95`,
    339: `96`,
    34: `4`,
    340: `96`,
    341: `97`,
    342: `98`,
    343: `99`,
    344: `100`,
    345: `101`,
    346: `102`,
    347: `103`,
    348: `104`,
    349: `104`,
    35: `4`,
    350: `105`,
    351: `105`,
    352: `105`,
    353: `108`,
    354: `108`,
    355: `108`,
    356: `108`,
    357: `108`,
    358: `108`,
    359: `108`,
    36: `5`,
    360: `108`,
    361: `108`,
    362: `108`,
    363: `108`,
    364: `108`,
    365: `108`,
    366: `108`,
    367: `108`,
    368: `108`,
    369: `108`,
    37: `5`,
    370: `108`,
    371: `108`,
    372: `108`,
    373: `108`,
    374: `108`,
    375: `108`,
    376: `108`,
    377: `108`,
    378: `108`,
    379: `108`,
    38: `5`,
    380: `108`,
    381: `108`,
    382: `108`,
    383: `108`,
    384: `108`,
    385: `108`,
    386: `108`,
    387: `108`,
    388: `108`,
    389: `108`,
    39: `6`,
    390: `108`,
    391: `108`,
    392: `108`,
    393: `108`,
    394: `108`,
    395: `108`,
    396: `108`,
    397: `108`,
    398: `108`,
    399: `108`,
    4: `2`,
    40: `7`,
    400: `108`,
    401: `108`,
    402: `108`,
    403: `108`,
    404: `108`,
    405: `108`,
    406: `108`,
    407: `108`,
    408: `108`,
    409: `108`,
    41: `8`,
    410: `108`,
    411: `108`,
    412: `109`,
    413: `109`,
    414: `110`,
    415: `110`,
    416: `110`,
    417: `112`,
    418: `112`,
    419: `112`,
    42: `9`,
    420: `113`,
    421: `113`,
    422: `115`,
    423: `116`,
    424: `117`,
    425: `117`,
    426: `118`,
    427: `118`,
    428: `119`,
    429: `120`,
    43: `10`,
    430: `120`,
    431: `121`,
    432: `122`,
    433: `123`,
    434: `124`,
    435: `124`,
    436: `125`,
    437: `125`,
    438: `125`,
    439: `127`,
    44: `11`,
    440: `127`,
    441: `127`,
    442: `128`,
    443: `128`,
    444: `128`,
    445: `129`,
    446: `130`,
    447: `130`,
    448: `130`,
    449: `131`,
    45: `11`,
    450: `132`,
    451: `132`,
    452: `133`,
    453: `133`,
    454: `134`,
    455: `134`,
    456: `136`,
    457: `137`,
    458: `138`,
    459: `138`,
    46: `12`,
    460: `138`,
    461: `139`,
    462: `139`,
    463: `140`,
    464: `140`,
    465: `141`,
    466: `142`,
    467: `143`,
    468: `143`,
    469: `144`,
    47: `13`,
    470: `145`,
    471: `146`,
    472: `147`,
    473: `148`,
    474: `148`,
    475: `149`,
    476: `149`,
    477: `149`,
    478: `151`,
    479: `151`,
    48: `14`,
    480: `151`,
    481: `152`,
    482: `152`,
    483: `154`,
    484: `154`,
    485: `155`,
    486: `156`,
    487: `157`,
    488: `160`,
    489: `160`,
    49: `14`,
    490: `160`,
    491: `162`,
    492: `163`,
    493: `164`,
    494: `165`,
    495: `165`,
    496: `166`,
    497: `167`,
    498: `167`,
    499: `167`,
    5: `2`,
    50: `15`,
    500: `168`,
    501: `169`,
    502: `170`,
    503: `171`,
    504: `172`,
    505: `173`,
    506: `173`,
    507: `173`,
    508: `174`,
    509: `174`,
    51: `16`,
    510: `176`,
    511: `176`,
    512: `177`,
    513: `178`,
    514: `179`,
    515: `182`,
    516: `182`,
    517: `182`,
    518: `182`,
    519: `182`,
    52: `17`,
    520: `182`,
    521: `183`,
    522: `183`,
    523: `184`,
    524: `185`,
    525: `187`,
    526: `188`,
    527: `191`,
    528: `191`,
    529: `192`,
    53: `18`,
    530: `193`,
    531: `194`,
    532: `197`,
    533: `197`,
    534: `197`,
    535: `198`,
    536: `198`,
    537: `199`,
    538: `200`,
    539: `200`,
    54: `19`,
    540: `201`,
    541: `201`,
    542: `201`,
    543: `203`,
    544: `203`,
    545: `203`,
    546: `204`,
    547: `204`,
    548: `204`,
    549: `205`,
    55: `21`,
    550: `206`,
    551: `206`,
    552: `207`,
    553: `207`,
    554: `209`,
    555: `209`,
    556: `210`,
    557: `211`,
    558: `212`,
    559: `215`,
    56: `21`,
    560: `215`,
    561: `215`,
    562: `216`,
    563: `216`,
    564: `217`,
    565: `219`,
    566: `220`,
    567: `220`,
    568: `221`,
    569: `222`,
    57: `21`,
    570: `223`,
    571: `223`,
    572: `224`,
    573: `224`,
    574: `225`,
    575: `226`,
    576: `227`,
    577: `228`,
    578: `228`,
    579: `228`,
    58: `21`,
    580: `229`,
    581: `229`,
    582: `229`,
    583: `230`,
    584: `230`,
    585: `230`,
    586: `231`,
    587: `231`,
    588: `232`,
    589: `232`,
    59: `21`,
    590: `232`,
    591: `234`,
    592: `234`,
    593: `234`,
    594: `235`,
    595: `235`,
    596: `237`,
    597: `237`,
    598: `238`,
    599: `239`,
    6: `2`,
    60: `21`,
    600: `240`,
    601: `243`,
    602: `243`,
    603: `243`,
    604: `245`,
    605: `246`,
    606: `247`,
    607: `247`,
    608: `248`,
    609: `248`,
    61: `21`,
    610: `249`,
    611: `250`,
    612: `250`,
    613: `250`,
    614: `251`,
    615: `252`,
    616: `253`,
    617: `254`,
    618: `255`,
    619: `256`,
    62: `21`,
    620: `256`,
    621: `256`,
    622: `257`,
    623: `257`,
    624: `258`,
    625: `258`,
    626: `258`,
    627: `261`,
    628: `261`,
    629: `262`,
    63: `21`,
    630: `263`,
    631: `264`,
    632: `267`,
    633: `267`,
    634: `267`,
    635: `268`,
    636: `268`,
    637: `269`,
    638: `270`,
    639: `270`,
    64: `21`,
    640: `271`,
    641: `271`,
    642: `271`,
    643: `274`,
    644: `274`,
    645: `275`,
    646: `276`,
    647: `277`,
    648: `280`,
    649: `280`,
    65: `21`,
    650: `280`,
    651: `281`,
    652: `281`,
    653: `282`,
    654: `283`,
    655: `283`,
    656: `284`,
    657: `284`,
    658: `284`,
    659: `287`,
    66: `21`,
    660: `287`,
    661: `288`,
    662: `289`,
    663: `290`,
    664: `293`,
    665: `293`,
    666: `293`,
    667: `294`,
    668: `294`,
    669: `295`,
    67: `21`,
    670: `296`,
    671: `296`,
    672: `297`,
    673: `297`,
    674: `297`,
    675: `300`,
    676: `300`,
    677: `301`,
    678: `302`,
    679: `303`,
    68: `21`,
    680: `306`,
    681: `306`,
    682: `306`,
    683: `307`,
    684: `307`,
    685: `308`,
    686: `309`,
    687: `309`,
    688: `310`,
    689: `310`,
    69: `21`,
    690: `310`,
    691: `313`,
    692: `313`,
    693: `314`,
    694: `315`,
    695: `316`,
    696: `319`,
    697: `319`,
    698: `319`,
    699: `320`,
    7: `2`,
    70: `21`,
    700: `320`,
    701: `321`,
    702: `322`,
    703: `322`,
    704: `323`,
    705: `323`,
    706: `323`,
    707: `326`,
    708: `326`,
    709: `327`,
    71: `21`,
    710: `328`,
    711: `329`,
    712: `332`,
    713: `332`,
    714: `332`,
    715: `333`,
    716: `333`,
    717: `334`,
    718: `335`,
    719: `335`,
    72: `21`,
    720: `336`,
    721: `336`,
    722: `336`,
    723: `338`,
    724: `338`,
    725: `338`,
    726: `339`,
    727: `339`,
    728: `341`,
    729: `341`,
    73: `21`,
    730: `342`,
    731: `343`,
    732: `344`,
    733: `347`,
    734: `347`,
    735: `347`,
    736: `348`,
    737: `349`,
    738: `351`,
    739: `352`,
    74: `21`,
    740: `353`,
    741: `354`,
    742: `355`,
    743: `355`,
    744: `356`,
    745: `357`,
    746: `357`,
    747: `357`,
    748: `358`,
    749: `358`,
    75: `21`,
    750: `358`,
    751: `359`,
    752: `359`,
    753: `360`,
    754: `360`,
    755: `360`,
    756: `362`,
    757: `362`,
    758: `362`,
    759: `363`,
    76: `21`,
    760: `363`,
    761: `363`,
    762: `364`,
    763: `365`,
    764: `365`,
    765: `366`,
    766: `366`,
    767: `368`,
    768: `368`,
    769: `369`,
    77: `21`,
    770: `370`,
    771: `371`,
    772: `374`,
    773: `374`,
    774: `374`,
    775: `375`,
    776: `375`,
    777: `376`,
    778: `378`,
    779: `379`,
    78: `21`,
    780: `379`,
    781: `380`,
    782: `381`,
    783: `382`,
    784: `382`,
    785: `383`,
    786: `383`,
    787: `384`,
    788: `385`,
    789: `386`,
    79: `21`,
    790: `387`,
    791: `387`,
    792: `387`,
    793: `388`,
    794: `388`,
    795: `388`,
    796: `389`,
    797: `389`,
    798: `389`,
    799: `390`,
    8: `2`,
    80: `21`,
    800: `390`,
    801: `391`,
    802: `391`,
    803: `391`,
    804: `393`,
    805: `393`,
    806: `393`,
    807: `394`,
    808: `395`,
    809: `395`,
    81: `21`,
    810: `395`,
    811: `396`,
    812: `397`,
    813: `397`,
    814: `398`,
    815: `398`,
    816: `400`,
    817: `401`,
    818: `402`,
    819: `402`,
    82: `21`,
    820: `402`,
    821: `403`,
    822: `403`,
    823: `404`,
    824: `405`,
    825: `405`,
    826: `406`,
    827: `407`,
    828: `408`,
    829: `409`,
    83: `21`,
    830: `409`,
    831: `410`,
    832: `411`,
    833: `412`,
    834: `412`,
    835: `413`,
    836: `413`,
    837: `413`,
    838: `416`,
    839: `416`,
    84: `21`,
    840: `416`,
    841: `416`,
    842: `416`,
    843: `416`,
    844: `416`,
    845: `416`,
    846: `416`,
    847: `416`,
    848: `416`,
    849: `416`,
    85: `21`,
    850: `416`,
    851: `416`,
    852: `416`,
    853: `416`,
    854: `416`,
    855: `416`,
    856: `416`,
    857: `416`,
    858: `416`,
    859: `416`,
    86: `21`,
    860: `416`,
    861: `416`,
    862: `416`,
    863: `416`,
    864: `416`,
    865: `416`,
    866: `416`,
    867: `416`,
    868: `416`,
    869: `416`,
    87: `21`,
    870: `416`,
    871: `416`,
    872: `416`,
    873: `416`,
    874: `416`,
    875: `416`,
    876: `416`,
    877: `416`,
    878: `416`,
    879: `416`,
    88: `21`,
    880: `416`,
    881: `416`,
    882: `416`,
    883: `416`,
    884: `416`,
    885: `416`,
    886: `416`,
    887: `416`,
    888: `416`,
    889: `416`,
    89: `21`,
    890: `416`,
    891: `416`,
    892: `416`,
    893: `416`,
    894: `416`,
    895: `416`,
    896: `416`,
    897: `417`,
    898: `417`,
    899: `418`,
    9: `2`,
    90: `21`,
    900: `418`,
    901: `418`,
    902: `420`,
    903: `420`,
    904: `421`,
    905: `421`,
    906: `422`,
    907: `424`,
    908: `425`,
    909: `426`,
    91: `21`,
    910: `427`,
    911: `427`,
    912: `428`,
    913: `429`,
    914: `429`,
    915: `429`,
    916: `430`,
    917: `431`,
    918: `432`,
    919: `433`,
    92: `21`,
    920: `434`,
    921: `435`,
    922: `444`,
    923: `444`,
    924: `445`,
    925: `446`,
    926: `446`,
    927: `447`,
    928: `447`,
    929: `447`,
    93: `21`,
    930: `448`,
    931: `449`,
    932: `450`,
    933: `450`,
    934: `450`,
    935: `451`,
    936: `452`,
    937: `452`,
    938: `453`,
    939: `453`,
    94: `21`,
    940: `453`,
    941: `453`,
    942: `453`,
    943: `453`,
    944: `453`,
    945: `453`,
    946: `453`,
    947: `453`,
    948: `454`,
    949: `454`,
    95: `21`,
    950: `455`,
    951: `456`,
    952: `457`,
    953: `457`,
    954: `458`,
    955: `458`,
    956: `459`,
    957: `459`,
    958: `460`,
    959: `461`,
    96: `21`,
    960: `461`,
    961: `462`,
    962: `462`,
    963: `462`,
    964: `463`,
    965: `464`,
    966: `464`,
    967: `465`,
    968: `465`,
    969: `465`,
    97: `21`,
    970: `466`,
    971: `467`,
    972: `467`,
    973: `468`,
    974: `469`,
    975: `470`,
    976: `470`,
    977: `471`,
    978: `472`,
    979: `473`,
    98: `21`,
    980: `473`,
    981: `474`,
    982: `475`,
    983: `476`,
    984: `476`,
    985: `477`,
    986: `478`,
    987: `479`,
    988: `479`,
    989: `480`,
    99: `21`,
    990: `481`,
    991: `482`,
    992: `482`,
    993: `483`,
    994: `484`,
    995: `485`,
    996: `485`,
    997: `486`,
    998: `486`,
    999: `487`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 250,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T19","name":"v12876","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2995","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3520","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4053","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4575","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5096","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5650","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6203","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6812","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T21","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v12827","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12833","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12840","type":"address"},{"internalType":"uint256","name":"v12841","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12851","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12859","type":"address"},{"internalType":"address payable","name":"v12860","type":"address"},{"internalType":"uint256","name":"v12861","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12787","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12794","type":"address"},{"internalType":"address payable","name":"v12795","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12799","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalCurrentAllocatoinToAllUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalFundsDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12815","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12820","type":"address"},{"internalType":"address payable","name":"v12821","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12868","type":"uint256"},{"internalType":"address payable","name":"v12869","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v12879","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080604052606062004d6580380380916200001a826200009c565b6080391262000080576040516200003181620000d2565b608051815260a05161ffff19811681036200008057602082015260c051906001600160a01b03821682036200008057620000709160408201526200019d565b604051613ef2908162000e538239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000c357604052565b620000cd62000085565b604052565b606081019081106001600160401b03821117620000c357604052565b604081019081106001600160401b03821117620000c357604052565b608081019081106001600160401b03821117620000c357604052565b601f909101601f19168101906001600160401b03821190821017620000c357604052565b604051906102a082016001600160401b03811183821017620000c357604052565b604051906200017a82620000d2565b565b604051906101e082016001600160401b03811183821017620000c357604052565b6200017a90600080805543600355610280620001b86200014a565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e082015282610200820152826102208201528261024082015282610260820152015262000477565b604051906200025082620000d2565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620002aa575b6040528260005b8281106200029357505050565b82906200029f62000241565b818401520162000286565b620002b462000085565b6200027f565b60405190620002c982620000ee565b60006020838281520152565b60405190620002e482620000ee565b6000602083620002f3620002ba565b81520152565b6040519061012082016001600160401b038111838210176200035a575b6040528161010060009182815282602082015262000333620002d5565b60408201528260608201528260808201528260a08201528260c08201528260e08201520152565b6200036462000085565b62000316565b6040519060a082016001600160401b03811183821017620003d4575b604052816200039462000241565b8152620003a062000262565b6020820152620003af620002ba565b6040820152620003be620002d5565b60608201526080620003cf620002f9565b910152565b620003de62000085565b62000386565b906001811015620003f65760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519060e082016001600160401b0381118382101762000467575b604052600060c08382815282602082015282604082015262000449620002f9565b60608201528260808201526200045e62000262565b60a08201520152565b6200047162000085565b62000428565b6200017a90620004866200036a565b620004a56200049f6200049b60045460ff1690565b1590565b62000665565b60408051338152835160208083019190915284015161ffff191681830152838201516001600160a01b03166060820152909162000648917f19beb4b4ae800ef164657ae1c238d1e90f50effd8bb91dc7502d5d13755b59e090608090a16200051a8451801590811562000658575b5062000686565b6000928382515262000642602092858482510152858382510152805190848101918251526200054a3415620006a7565b608084820160058151526064878251015251916060810192835152620005738784510160019052565b019087825152620005878683510160019052565b51848251015286606082510152866080825101528660a0825101528660c0825101528660e08251015286610100825101526200060c620005fd85620005cb6200040c565b3381529a620005ef8c8a620005e58185015161ffff191690565b61ffff1916910152565b01516001600160a01b031690565b6001600160a01b031689860152565b51606088015243608088015251918251908085830151920151151591620006326200016b565b9588875286015284019015159052565b620006c8565b60a083015260c082015262000b87565b9050600154143862000513565b156200066d57565b60405163100960cb60e01b815260136004820152602490fd5b156200068e57565b60405163100960cb60e01b815260146004820152602490fd5b15620006af57565b60405163100960cb60e01b815260156004820152602490fd5b9190620006d462000262565b926000805b60018110620006e9575050508252565b620006f58184620003e4565b51620007028288620003e4565b526200070f8187620003e4565b5060001981146200072357600101620006d9565b634e487b7160e01b82526011600452602482fd5b506040513d6000823e3d90fd5b90600182811c9216801562000776575b60208310146200076057565b634e487b7160e01b600052602260045260246000fd5b91607f169162000754565b8181106200078d575050565b6000815560010162000781565b620007a760025462000744565b80620007b05750565b601f8111600114620007c457506000600255565b60026000526200080c90601f0160051c60008051602062004d45833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000781565b6000602081208160025555565b620008236200017c565b9060008083528060208401528060408401526200083f620002f9565b60608401526200084e62000262565b60808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152806101808401526200089262000241565b6101a08401526101c0830152565b6101409080518352602081015115156020840152620008dd6040820151604085019060206040918181518051865201518285015201511515910152565b606081015160a0840152608081015160c084015260a081015160e084015260c081015190610100918285015260e08101516101208501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b600182106200094957505050565b60206060826200095d60019487516200091b565b019301910190916200093b565b81516001600160a01b031681526103a0810192916103809060208181015161ffff1916908401526040818101516001600160a01b031690840152620009b860608201516060850190620008a0565b608081015190620009d06101c0928386019062000936565b60a081015161022085015260c081015161024085015260e08101516102608501526101008101516102808501526101208101516102a08501526101408101516102c08501526101608101516102e085015261018081015161030085015262000a436101a08201516103208601906200091b565b0151910152565b90601f821162000a58575050565b6200017a9160026000526020600020906020601f840160051c8301931062000a89575b601f0160051c019062000781565b909150819062000a7b565b80519091906001600160401b03811162000b77575b62000ac18162000abb60025462000744565b62000a4a565b602080601f831160011462000b00575081929360009262000af4575b50508160011b916000199060031b1c191617600255565b01519050388062000add565b6002600052601f1983169490919060008051602062004d45833981519152926000905b87821062000b5e57505083600195961062000b44575b505050811b01600255565b015160001960f88460031b161c1916905538808062000b39565b8060018596829496860151815501950193019062000b23565b62000b8162000085565b62000aa9565b606081019062000b9b602083510151151590565b1562000c9e5762000c986200017a9262000c8992608062000bbb62000819565b82516001600160a01b031681529260208381015161ffff1916908501526040838101516001600160a01b0316908501528051606085015260c060a0840193845184870152015160a085015260608151015160c085015260e08151015160e085015260a08151015161010090818601528151015161012085015280515161014085015260c0815101516101608501525101516101808301528051516101a08301525151516101c082015262000c6f6003600055565b62000c7943600155565b604051928391602083016200096a565b03601f19810183528262000126565b62000a94565b62000d049150600080808062000cca62000cbe865160018060a01b031690565b6001600160a01b031690565b60c08601519082821562000d2d575bf11562000d1d575b6040810151815160a0909201515151916001600160a01b03908116911662000d3f565b6000805562000d136000600155565b6200017a6200079a565b62000d2762000737565b62000ce1565b506108fc62000cd9565b156200008057565b600080916200017a948262000de295604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815262000d83816200010a565b5193165af13d1562000df85762000dd13d6001600160401b03811162000de8575b6040519062000dbe601f8201601f19166020018362000126565b81529182903d6000602084013e62000e20565b506020808251830101910162000e06565b62000d37565b62000df262000085565b62000da4565b62000dd16060809262000e20565b908160209103126200008057518015158103620000805790565b1562000e295790565b80511562000e3957805190602001fd5b60405163100960cb60e01b815260026004820152602490fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630a84e99f1461025c5780631548a30d146102535780631e93b0f11461024a57806336e56ea5146102415780633702d0ce146102385780634ab9f8b31461022f578063523df4f614610226578063544774a91461021d57806355c42a9514610214578063582523cd1461020b578063672422c71461020257806374623535146101f957806374ecfa44146101f057806374f16ec9146101e75780637a2b54dc146101de5780637f0595e2146101d557806383230757146101cc578063883513de146101c357806392cf8bd5146101ba578063a5792424146101b1578063a855bc10146101a8578063aa735d7f1461019f578063ab53f2c614610196578063b87939c71461018d578063bf7df9c314610184578063cd6637a81461017b578063df1a0c7514610172578063f1b1259d146101695763f33c0dce0361000e57610164610f82565b61000e565b50610164610ea6565b50610164610e55565b50610164610e04565b50610164610dd2565b50610164610d2e565b50610164610cb9565b50610164610c69565b50610164610bd3565b50610164610b64565b50610164610b14565b50610164610ac3565b50610164610aa4565b506101646109fe565b506101646109bd565b5061016461092a565b5061016461085a565b50610164610828565b506101646107ba565b506101646106cc565b5061016461068e565b50610164610630565b506101646105c9565b50610164610573565b50610164610535565b506101646104b0565b50610164610466565b50610164610321565b5060203660031901126102d757602060406102756114e8565b6102cb81835161028481611023565b845161028f8161104b565b600081528152858101906102a161158f565b825260043581515260018251525185825101526102bc611656565b90600082525186820152611ceb565b01511515604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b038116036102d757565b60409060031901126102d757600435610311816102e8565b9060243561031e816102e8565b90565b50346102d757610458610120610336366102f9565b9061033f6114e8565b916103b86103af61034e611301565b9260018060a01b038095168452602094858501911681526103a96103a2610373613d61565b9561038260036000541461312d565b61039b61038d6110db565b898082518301019101611a32565b50516102dc565b855161163d565b516102dc565b8383510161163d565b81810190600082515260008383510152805191600161040661040160405195866103e58982019283611ca1565b03966103f9601f19988981018352826110b8565b519020611342565b611c97565b61040f8161049c565b0361045c5750916104336103f961043f936040955193865193849182019586611ca1565b039081018352826110b8565b01515b5191018190526040519081529081906020820190565b0390f35b9250505051610442565b50346102d75760003660031901126102d7576020600354604051908152f35b50634e487b7160e01b600052602160045260246000fd5b600211156104a657565b6104ae610485565b565b50346102d75760203660031901126102d75760606104e16004356104d3816102e8565b6104db611211565b5061127e565b604080519180516104f18161049c565b835260208101511515602084015201516040820152f35b9190916040806060830194805161051e8161049c565b845260208101511515602085015201511515910152565b50346102d75760203660031901126102d757610458610567600435610559816102e8565b610561611211565b50611446565b60405191829182610508565b5060203660031901126102d757602060a0600435610590816102e8565b6102cb61059b6114e8565b80926105a5611613565b90815190600180881b031690528581019060048251525185825101526102bc611656565b506020806003193601126102d757806004356105e4816102e8565b6102cb6105ef6114e8565b80926105f9611613565b80516001600160a01b0390921690915284810180516000905290518151860152610621611656565b90600082525185820152611ceb565b50346102d75760203660031901126102d75761064a61131a565b506080610658600435611342565b61068c6040805192805161066b8161049c565b84526020818101511515818601529101518051604085015201516060830152565bf35b5060003660031901126102d757602060806106a76114e8565b6102cb816106b3611656565b85810190600382515251151585825101526102bc611656565b5060603660031901126102d7576104586107a860c06004356106ed816102e8565b6107a1602435916106fd836102e8565b6107056114e8565b928391610710611211565b9160018060a01b038092168352816020840191168152610771610767604085019260443584526040519461074386611023565b61074b611211565b8652602086019661075a61158f565b88525116855152516102dc565b602084510161163d565b51604082510152610783825160059052565b518582510152610791611656565b9060008252516020820152611ceb565b0151151590565b60405191829182901515815260200190565b50346102d75760003660031901126102d7576107d46114e8565b60036000540361080f576102006020916101206108006107f26110db565b858082518301019101611a32565b01519182910152604051908152f35b60405163100960cb60e01b815260106004820152602490fd5b50346102d75760203660031901126102d75761045861056760043561084c816102e8565b610854611211565b506113cb565b506101c03660031901126102d7576108706114e8565b6040519061087d82611023565b60043582526101a03660231901126102d75761091e9161089b611184565b6108a3613d83565b81526108ae36613d92565b60208201526108bc36613de1565b60408201526108ca36613e01565b60608201526108d7613e33565b60808201526108e536613dbb565b60a08201526108f336613e4e565b60c082015261090136613e95565b60e082015261090e613e40565b6101008201526020820152611ceb565b60405160008152602090f35b5060403660031901126102d7576104586107a8606060043561094b816102e8565b6107a16109566114e8565b8092610960611301565b6001600160a01b03918216815260243560208201908152604051919261098583611023565b61098d611301565b8352602083019361099c61158f565b85525116825152516020825101526002825152518582510152610791611656565b5060003660031901126102d75760206102806109d76114e8565b6102cb816109e3611656565b858101906007825152511515610100825101526102bc611656565b50346102d75760203660031901126102d757600435610a1c816102e8565b610a246114e8565b90600360005403610a8b57610458916001610a6260e093610a55610a466110db565b60208082518301019101611a32565b50828060a01b03166113cb565b51610a6c8161049c565b610a758161049c565b1491018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b50346102d75760003660031901126102d7576020600154604051908152f35b50346102d75760003660031901126102d757610add6114e8565b600360005403610afb576101006020916101c06108006107f26110db565b60405163100960cb60e01b815260086004820152602490fd5b50346102d75760003660031901126102d757610b2e6114e8565b600360005403610b4b5761016060209160c06108006107f26110db565b60405163100960cb60e01b8152600b6004820152602490fd5b50346102d75760203660031901126102d757600435610b82816102e8565b610b8a6114e8565b90600360005403610bba57610458916001610a6261014093610bad610a466110db565b50828060a01b0316611497565b60405163100960cb60e01b8152600a6004820152602490fd5b5060403660031901126102d7576104586107a8610260602435610bf5816102e8565b6107a1610c006114e8565b8092610c0a611301565b60043581526001600160a01b0391821660208201908152604051919290610c3083611023565b610c38611301565b83526020830193610c4761158f565b855251835152511660208251015260068251525160e082510152610791611656565b50346102d75760003660031901126102d757610c836114e8565b600360005403610ca0576101c060209160c06108006107f26110db565b60405163100960cb60e01b8152600e6004820152602490fd5b50346102d757600080600319360112610d2b578054610cd66110db565b906040519283918252602090604082840152835191826040850152815b838110610d1457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610cf3565b80fd5b50346102d75760203660031901126102d757610458610220600435610d52816102e8565b610d5a6114e8565b90610d6960036000541461314d565b610d74610a466110db565b506001600160a01b0316610d878161127e565b51610d918161049c565b610d9a8161049c565b600090600103610dc85750610db060409161127e565b01519182915b01526040519081529081906020820190565b9050918291610db6565b50346102d75760203660031901126102d757610458610567600435610df6816102e8565b610dfe611211565b50611497565b50346102d75760003660031901126102d757610e1e6114e8565b600360005403610e3c576101806020916101006108006107f26110db565b60405163100960cb60e01b8152600c6004820152602490fd5b50346102d75760003660031901126102d757610e6f6114e8565b600360005403610e8d576101e06020916101806108006107f26110db565b60405163100960cb60e01b8152600f6004820152602490fd5b50346102d757610458610240610ebb366102f9565b90610ec46114e8565b91610f076103af610ed3611301565b9260018060a01b038095168452602094858501911681526103a96103a2610ef8613d61565b9561038260036000541461316d565b818101906000825152600083835101528051916001610f3461040160405195866103e58982019283611ca1565b610f3d8161049c565b03610f795750604091610f609151906103f9845191826104338882019586611ca1565b0151015191018190526040519081529081906020820190565b91505051610db0565b50346102d75760003660031901126102d757610f9c6114e8565b600360005403610fb9576101a060209160e06108006107f26110db565b60405163100960cb60e01b8152600d6004820152602490fd5b90600182811c92168015611002575b6020831014610fec57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610fe1565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761103e57604052565b61104661100c565b604052565b602081019081106001600160401b0382111761103e57604052565b606081019081106001600160401b0382111761103e57604052565b61012081019081106001600160401b0382111761103e57604052565b60a081019081106001600160401b0382111761103e57604052565b601f909101601f19168101906001600160401b0382119082101761103e57604052565b60405190600082600254916110ef83610fd2565b8083526001938085169081156111635750600114611115575b506104ae925003836110b8565b60026000908152600080516020613ec683398151915294602093509091905b81831061114b5750506104ae935082010138611108565b85548884018501529485019487945091830191611134565b90506104ae94506020925060ff191682840152151560051b82010138611108565b6040519061012082016001600160401b0381118382101761103e57604052565b604051906102a082016001600160401b0381118382101761103e57604052565b604051906103e082016001600160401b0381118382101761103e57604052565b604051906101e082016001600160401b0381118382101761103e57604052565b604051906104ae82611066565b6040519061121e82611066565b60006040838281528260208201520152565b6001600160a01b0316600090815260096020526040902090565b6001600160a01b0316600090815260086020526040902090565b6001600160a01b0316600090815260056020526040902090565b90611287611211565b9160018060a01b03166000908082526005602052600160ff6040842054166112ae8161049c565b036112f657604092935081526005602052206001604051916112cf83611066565b60ff81548181166112df8161049c565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061130e82611023565b60006020838281520152565b6040519061132782611066565b816000815260006020820152604061133d611301565b910152565b9061134b61131a565b916000908082526006602052600160ff60408420541661136a8161049c565b036112f657604092935081526006602052206040519061138982611066565b60ff81548181166113998161049c565b845260081c16151560208301526002604051916113b583611023565b6001810154835201546020820152604082015290565b906113d4611211565b9160018060a01b03166000908082526007602052600160ff6040842054166113fb8161049c565b036112f6576040929350815260076020522060ff6040519161141c83611066565b548181166114298161049c565b8352818160081c161515602084015260101c161515604082015290565b9061144f611211565b9160018060a01b03166000908082526008602052600160ff6040842054166114768161049c565b036112f6576040929350815260086020522060ff6040519161141c83611066565b906114a0611211565b9160018060a01b03166000908082526009602052600160ff6040842054166114c78161049c565b036112f6576040929350815260096020522060ff6040519161141c83611066565b6114f06111a4565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152806102208401528061024084015280610260840152610280830152565b604051906115898261104b565b60008252565b6040519061159c82611081565b816101006000918281526040516115b28161104b565b83815260208201526040516115c68161104b565b83815260408201526115d6611301565b60608201528260808201526040516115ed8161104b565b83815260a08201526115fd611211565b60c082015261160a611301565b60e08201520152565b6040519061162082611023565b8160405161162d8161104b565b600081528152602061133d61158f565b6001600160a01b039091169052565b600811156104a657565b6040519061166382611023565b8160008152602061133d61158f565b6040519061167f82611081565b8161010060009182815282602082015260405161169b81611023565b6116a3611301565b815283602082015260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b604051906116df8261104b565b8160005b602081106116ef575050565b6020906116fa611211565b81840152016116e3565b61170c6111c4565b9061171561157c565b825261171f611672565b602083015261172c61157c565b6040830152611739611672565b6060830152611746611301565b6080830152611753611672565b60a0830152611760611672565b60c083015261176d61157c565b60e083015261177a611672565b610100830152611788611211565b610120830152600061014083015261179e6116d2565b6101608301526117ac611301565b6101808301526117ba611301565b6101a08301526117c8611301565b6101c08301526117d6611301565b6101e08301526117e4611672565b6102008301526117f2611301565b6102208301526000610240830152611808611301565b610260830152611816611301565b610280830152611824611301565b6102a0830152611832611301565b6102c0830152611840611211565b6102e083015261184e6116d2565b61030083015261185c611672565b61032083015261186a611672565b6103408301526118786116d2565b610360830152611886611672565b610380830152611894611672565b6103a08301526118a2611672565b6103c0830152565b51906104ae826102e8565b519061ffff19821682036102d757565b801515036102d757565b51906104ae826118c5565b8092910391606083126102d757604051906118f482611023565b60408294126102d7576040602091815161190d81611023565b8151815283820151848201528452015191611927836118c5565b0152565b919091610160818403126102d757611963611944611184565b9382518552611955602084016118cf565b6020860152604083016118da565b604084015260a0810151606084015260c0810151608084015260e081015160a0840152610140610100918281015160c086015261012081015160e0860152015190830152565b91908260609103126102d7576040516119c181611066565b60408082948051845260208101516020850152015191611927836118c5565b9080601f830112156102d757604051916119f98361104b565b82606092838301928184116102d757915b838310611a1957505050505090565b60208591611a2784866119a9565b815201920191611a0a565b906103a0828203126102d757610380611a496111e4565b92611a53816118aa565b8452611a61602082016118b5565b6020850152611a72604082016118aa565b6040850152611a84836060830161192b565b6060850152611b086101c093611a9c818685016119e0565b608087015261022083015160a087015261024083015160c087015261026083015160e08701526102808301516101008701526102a08301516101208701526102c08301516101408701526102e083015161016087015261030083015161018087015261032083016119a9565b6101a085015201519082015290565b6101c060206104ae9395946101e084019660018060a01b03168452805182850152015180516008811015611c05575b60408401526020810151516001600160a01b031660608401526040810151516080840152606081015180516001600160a01b031660a08501526020015160c08401526080810151151560e084015260a0810151516001600160a01b0316610100848101919091529060c081015180516001600160a01b039081166101208701526020820151166101408601526040015161016085015260e08101518051610180860152602001516001600160a01b03166101a085015201511515910152565b611c0d610485565b611b46565b516008811015611c1f5790565b61031e610485565b516001600160a01b031690565b6040519060e082016001600160401b03811183821017611c8a575b604052600060c083828152826020820152826040820152611c6e611672565b6060820152826080820152611c816116d2565b60a08201520152565b611c9261100c565b611c4f565b5161031e8161049c565b81516001600160a01b039081168252602092830151169181019190915260400190565b906001811015611cd55760051b0190565b634e487b7160e01b600052603260045260246000fd5b90611cf4611704565b611d0260036000541461318d565b6020611d1d611d0f6110db565b828082518301019101611a32565b93611d39611d34611d3060045460ff1690565b1590565b6131ad565b7f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac260405180611d69843383611b17565b0390a1611d81815180159081156130be575b506131cd565b01611d8c8151611c12565b611d958161164c565b611f79579260a09160206104ae955101518152611dba611db583516102dc565b6102dc565b3303611f5957611dca600161354b565b611dd4341561356b565b600060206040840195611df8611df3611ded89516102dc565b336136fd565b61358b565b611e2f611e22611e088651611c27565b6001600160a01b0316600090815260076020526040902090565b805460ff19166001179055565b611e4b611e3f611e088651611c27565b805462ff000019169055565b604051600081527f62898bb9259d4b908f14df3969dd44a21fdc192f433eed1a5dc9d68e9848cdfe90602090a101526020610140830151910190815152604060608301611eab611e9f602083510151151590565b60208551019015159052565b51015160408251015260c082015160608251015261018082015160808251015261010080830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f38611f2f611f07611c34565b95611f1b611f1586516102dc565b8861163d565b60208581015161ffff1916908801526103a9565b6040860161163d565b516060840152436080840152608081015182840152015160c0820152613bdb565b611dca6001611f6a610401336113cb565b611f738161049c565b1461354b565b6001611f858251611c12565b611f8e8161164c565b03612178579261214860a09260406104ae965101519060408101918252611fb8611db585516102dc565b330361215857611fc860016134eb565b611fd2341561350b565b6000604080860197611ff9611ff4611fea8b516102dc565b8751519033613758565b61352b565b8151600081527f37a780fa23ed43a56ee01fbf1f950798c14d15e150ed3337469ec703956187a090602090a10152606061203b61014086015184515190613104565b910190815152604060608501612058611e9f602083510151151590565b51015160408251015260c084015160608251015261207e61018085015183515190613104565b60808251015261010080850151868351015261016085015160c08351015260e085015160e08351015261012085015190825101526120f16120e86120c0611c34565b976120d46120ce88516102dc565b8a61163d565b60208781015161ffff1916908a01526103a9565b6040880161163d565b5160608601524360808601526080830151906101c084015190515101906121436101a085015161212960406020830151920151151590565b90612132611204565b948552602085015215156040840152565b61379b565b82840152015160c0820152613bdb565b611fc86001612169610401336113cb565b6121728161049c565b146134eb565b60026121848251611c12565b61218d8161164c565b036122a2579260a09160006060806104ae9751015195608084019687526121b7611db586516102dc565b33148314612282576121c9600161346b565b6121df6020885101516101c0870151101561348b565b6121e934156134ab565b60408501966122036121fe611ded8a516102dc565b6134cb565b612218611e226122138351611c27565b611264565b51600161222d612213602084015193516102dc565b0155604051600081527fa8674922884a585d71ecac06863c6c523c03dd4347afea43dbc2e14c870fd19290602090a1015282610140830151910190815152604060608301611eab611e9f602083510151151590565b6121c96001612293610401336113cb565b61229c8161049c565b1461346b565b60036122ae8251611c12565b6122b78161164c565b036123b957506104ae9260a0916122df33600180861b036122d885516102dc565b16146133ed565b60c082016122ee81511561340d565b6122f8341561342b565b600060806040850196612316612311611ded8a516102dc565b61344b565b604051600081527ffed2422275015bdc1cb35f22b02c7458c492f75f90ffc279551a5e92fb9d897090602090a1015260c061014084015192019182515260006020835101526040606084015101516040835101525160608251015261018082015160808251015261010080830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f38611f2f611f07611c34565b60046123c58251611c12565b6123ce8161164c565b036124ef579260a091600083806104ae975101519560e084019687526124016123fa611db587516102dc565b331461338d565b61240b34156133ad565b82612432611e08604088019961242c612427611ded8d516102dc565b6133cd565b51611c27565b55604051600081527f286740bf3bc37fde397d9eb84d078144789467979ac731bbad4dc1fea97c5c1590602090a10152610140820151906101008091019182515260406060840161249661248a602083510151151590565b60208651019015159052565b51015160408351015260c083015160608351015261018083015160808351015280830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f38611f2f611f07611c34565b60056124fe8294939451611c12565b6125078161164c565b0361297e579261287760c060a0936125e360406125ab600161259c610401612597611db56101206104ae9f8f906125808f8e9061255b826125909551015180888801526101c083019e8f5191015190613118565b506125708d60408888015101519051106132ad565b0151604085850151015190613104565b806101408401528a5110156132cd565b0151611c27565b611497565b6125a58161049c565b146132ed565b6125b5341561330d565b6080860151905160406101208a0151015101906121436101a088015161212960406020830151920151151590565b61016087015261261261260d6125fc60408701516102dc565b60406101208a015101519033613758565b61332d565b61262d61016087015151516040610120890151015190613118565b506126496040610120880151015161016088015151511061334d565b6126616101608701515151610140880151111561336d565b61267d612672610120880151611c27565b61018088015161163d565b61269f612691602061012089015101611c27565b60206101808901510161163d565b60006101a087015152600060206101a0880151015260016126f16104016126d76126e56101808b015160405192839160208301611ca1565b03601f1981018352826110b8565b60208151910120611342565b6126fa8161049c565b03612970576127bd604061272161018089015182516103f9816126d7602082019485611ca1565b01515b61275060206101c08a019280845251926101e08b019384515251015160406101208b0151015190613104565b60208251015261278a611e226101808a0151604051612777816126d7602082019485611ca1565b5190206000526006602052604060002090565b5160016127ab6101808a0151604051612777816126d7602082019485611ca1565b01906020600191805184550151910155565b6127d1611e22612213610120890151611c27565b60016127ef6104016127ea611db56101208b0151611c27565b61127e565b6127f88161049c565b036129665761282960406128166127ea611db56101208b0151611c27565b01515b6040610120890151015190613104565b600161283c6122136101208a0151611c27565b0155604051600181527ffd2843c34a593f57ad3b4d59cc37de7587b73595db28ff68e8e0139266f018549080602081015b0390a10160019052565b6101606128936101408301516040610120870151015190613104565b936102008101948551526040606084016128c06128b4602083510151151590565b60208951019015159052565b5101516040865101526101408101516060865101526101808301516080865101526101008084015185875101528284015160c08751015260e084015160e0875101526101208401519086510152612915611c34565b9461292961292385516102dc565b8761163d565b60208481015161ffff1916908701526129486120e860408601516102dc565b516060860152436080860152015182840152015160c0820152613bdb565b6128296000612819565b6127bd6101a0870151612724565b600661298d8294939451611c12565b6129968161164c565b0361300257612b73919260e06102609251015161022085015260016129bd6104013361127e565b6129c68161049c565b03612ffb5760406129d63361127e565b01515b6102408501526129f6610220850151516101c0870151101561322d565b612a0d61024085015161022086015151111561324d565b612a17341561326d565b612a2f612a2a611ded60408801516102dc565b61328d565b612a3c338386015161163d565b612a5c612a50602061022087015101611c27565b6020848701510161163d565b6000610280850151526000602061028086015101526001612a926104016126d76126e58689015160405192839160208301611ca1565b612a9b8161049c565b03612fed57612b406040612ac08487015182516103f9816126d7602082019485611ca1565b01515b612afc6020612ae26102a0890193808552516102208a01515190613104565b926102c08901938451525101516102208801515190613118565b602082510152612b21611e2285880151604051612777816126d7602082019485611ca1565b5160016127ab85880151604051612777816126d7602082019485611ca1565b604051600181527f93969cf80ff5ef6d24fae81f537215bed4b21e8a44d4bb9def06ef6dc3159b2690806020810161286d565b6102e0810190612b8433835161163d565b610220810151516020835101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23612c0c6020850193612bd9612bca865161ffff191690565b60408351019061ffff19169052565b516040805182516001600160a01b03168152602080840151908201529181015161ffff1916908201529081906060820190565b0390a16001612c1d61040133611446565b612c268161049c565b03612e4157612c5e60808401516101c0850151610220840151519003906121436101a087015161212960406020830151920151151590565b906103608101918252612c86612c7760408601516102dc565b610220830151519033906135ab565b610240810151612dd3579260a0916104ae94612cb0612ca433611264565b60016000918281550155565b612cc66101408401516102208301515190613118565b90610380810191825152604060608501612ce761248a602083510151151590565b510151604083510152612d0560c08501516102208301515190613118565b606083510152610180840151608083510152612d2f61010091610220838701519101515190613104565b858351015261016084015160c083510152612d4d60e08501516130e1565b60e083510152612d616101208501516130e1565b9082510152612d9d612d91612d74611c34565b96612d88612d8287516102dc565b8961163d565b5161ffff191690565b61ffff19166020870152565b612db6612dad60408501516102dc565b6040870161163d565b5160608501524360808501525182840152015160c0820152613bdb565b9260a0916104ae94612de7611e2233611264565b612dfd6102408201516102208301515190613118565b6001612e0833611264565b0155612e206101408401516102208301515190613118565b906103a0810191825152604060608501612ce761248a602083510151151590565b612e4d611e223361124a565b612e59611e3f3361124a565b612e8c60808401516101c0850151610220840151519003906121436101a087015161212960406020830151920151151590565b906103008101918252612ea5612c7760408601516102dc565b610240810151612f7f579260a0916104ae94612ec3612ca433611264565b612ed96101408401516102208301515190613118565b90610320810191825152604060608501612efa61248a602083510151151590565b510151604083510152612f1860c08501516102208301515190613118565b606083510152610180840151608083510152612f4261010091610220838701519101515190613104565b858351015261016084015160c083510152612f6060e08501516130e1565b60e0835101526101208401519082510152612d9d612d91612d74611c34565b9260a0916104ae94612f93611e2233611264565b612fa96102408201516102208301515190613118565b6001612fb433611264565b0155612fcc6101408401516102208301515190613118565b90610340810191825152604060608501612efa61248a602083510151151590565b612b40610280850151612ac3565b60006129d9565b61300e60079151611c12565b6130178161164c565b1461302157505050565b6104ae9260a09161303234156131ed565b6000610280604084019561305161304c611ded89516102dc565b61320d565b61305d611e2233611230565b613069611e3f33611230565b604051600081527f310059f3aab339bf37a3eb24cec4749f542f50a8b8ec106f2427ed705987946a90602090a101526103c0610140830151910190815152604060608301611eab611e9f602083510151151590565b90506001541438611d7b565b50634e487b7160e01b600052601160045260246000fd5b9060018201918281116130f7575b82106102d757565b6130ff6130ca565b6130ef565b91908201918281116130f75782106102d757565b9081039081116131255790565b61031e6130ca565b1561313457565b60405163100960cb60e01b815260096004820152602490fd5b1561315457565b60405163100960cb60e01b815260116004820152602490fd5b1561317457565b60405163100960cb60e01b815260126004820152602490fd5b1561319457565b60405163100960cb60e01b815260166004820152602490fd5b156131b457565b60405163100960cb60e01b815260176004820152602490fd5b156131d457565b60405163100960cb60e01b815260186004820152602490fd5b156131f457565b60405163100960cb60e01b815260376004820152602490fd5b1561321457565b60405163100960cb60e01b815260386004820152602490fd5b1561323457565b60405163100960cb60e01b815260336004820152602490fd5b1561325457565b60405163100960cb60e01b815260346004820152602490fd5b1561327457565b60405163100960cb60e01b815260356004820152602490fd5b1561329457565b60405163100960cb60e01b815260366004820152602490fd5b156132b457565b60405163100960cb60e01b8152602b6004820152602490fd5b156132d457565b60405163100960cb60e01b8152602c6004820152602490fd5b156132f457565b60405163100960cb60e01b8152602d6004820152602490fd5b1561331457565b60405163100960cb60e01b8152602e6004820152602490fd5b1561333457565b60405163100960cb60e01b8152602f6004820152602490fd5b1561335457565b60405163100960cb60e01b815260316004820152602490fd5b1561337457565b60405163100960cb60e01b815260326004820152602490fd5b1561339457565b60405163100960cb60e01b815260276004820152602490fd5b156133b457565b60405163100960cb60e01b815260286004820152602490fd5b156133d457565b60405163100960cb60e01b815260296004820152602490fd5b156133f457565b60405163100960cb60e01b815260236004820152602490fd5b1561341457565b602460405163100960cb60e01b8152816004820152fd5b1561343257565b60405163100960cb60e01b815260256004820152602490fd5b1561345257565b60405163100960cb60e01b815260266004820152602490fd5b1561347257565b60405163100960cb60e01b8152601f6004820152602490fd5b1561349257565b60405163100960cb60e01b815260206004820152602490fd5b156134b257565b60405163100960cb60e01b815260216004820152602490fd5b156134d257565b60405163100960cb60e01b815260226004820152602490fd5b156134f257565b60405163100960cb60e01b8152601c6004820152602490fd5b1561351257565b60405163100960cb60e01b8152601d6004820152602490fd5b1561353257565b60405163100960cb60e01b8152601e6004820152602490fd5b1561355257565b60405163100960cb60e01b815260196004820152602490fd5b1561357257565b60405163100960cb60e01b8152601a6004820152602490fd5b1561359257565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b03938416602483015260448083019590955293815261362793600093849392849190608081016001600160401b0381118282101761362e575b6040525193165af161361761361061363b565b809261369d565b5060208082518301019101613688565b156102d757565b61363661100c565b6135fd565b3d15613683573d906001600160401b038211613676575b6040519161366a601f8201601f1916602001846110b8565b82523d6000602084013e565b61367e61100c565b613652565b606090565b908160209103126102d7575161031e816118c5565b156136a55790565b8051156136b457805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156136d55790565b8051156136e457805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600061031e928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526137418161109d565b5193165af161361761375161363b565b80926136cd565b60009161031e9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526137418161109d565b91906137a56116d2565b9260005b600181106137b75750508252565b806137c460019284611cc4565b516137cf8288611cc4565b526137da8187611cc4565b5060001981146137eb575b016137a9565b6137f36130ca565b6137e5565b506040513d6000823e3d90fd5b818110613810575050565b60008155600101613805565b613827600254610fd2565b8061382f5750565b601f811160011461384257506000600255565b600260005261388790601f0160051c600080516020613ec6833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf613805565b6000602081208160025555565b61389c6111e4565b9060008083528060208401528060408401526138b6611672565b60608401526138c36116d2565b60808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152613905611211565b6101a08401526101c0830152565b6101409080518352602081015115156020840152613950604082015160408501908051805183526020908101518382015260409101511515910152565b606081015160a0840152608081015160c084015260a081015160e084015260c081015190610100918285015260e08101516101208501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b600182106139bb57505050565b60206060826139cd600194875161398e565b019301910190916139ae565b81516001600160a01b031681526103a0810192916103809060208181015161ffff1916908401526040818101516001600160a01b031690840152613a2560608201516060850190613913565b608081015190613a3b6101c092838601906139a9565b60a081015161022085015260c081015161024085015260e08101516102608501526101008101516102808501526101208101516102a08501526101408101516102c08501526101608101516102e0850152610180810151610300850152613aac6101a082015161032086019061398e565b0151910152565b90601f8211613ac0575050565b6104ae9160026000526020600020906020601f840160051c83019310613aee575b601f0160051c0190613805565b9091508190613ae1565b80519091906001600160401b038111613bce575b613b2081613b1b600254610fd2565b613ab3565b602080601f8311600114613b5c5750819293600092613b51575b50508160011b916000199060031b1c191617600255565b015190503880613b3a565b6002600052601f19831694909190600080516020613ec6833981519152926000905b878210613bb6575050836001959610613b9d575b505050811b01600255565b015160001960f88460031b161c19169055388080613b92565b80600185968294968601518155019501930190613b7e565b613bd661100c565b613b0c565b6060810190613bee602083510151151590565b15613cdb57613cd66104ae926126d7926080613c08613894565b92613c1c613c1684516102dc565b8561163d565b60208381015161ffff191690850152613c3b611f2f60408501516102dc565b8051606085015260c060a0840193845184870152015160a085015260608151015160c085015260e08151015160e085015260a08151015161010090818601528151015161012085015280515161014085015260c0815101516101608501525101516101808301528051516101a08301525151516101c0820152613cbe6003600055565b613cc743600155565b604051928391602083016139d9565b613af8565b613d3591506000808080613cf2611db586516102dc565b60c086015190828215613d58575bf115613d4b575b613d1460408201516102dc565b60a0613d2083516102dc565b9201515151916001600160a01b0316906135ab565b60008055613d436000600155565b6104ae61381c565b613d536137f8565b613d07565b506108fc613d00565b60405190613d6e82611023565b81613d77611301565b8152602061133d611301565b6024359060088210156102d757565b60209060431901126102d75760405190613dab8261104b565b60443582613db8826102e8565b52565b60209060e31901126102d75760405190613dd48261104b565b60e43582613db8826102e8565b60209060631901126102d75760405190613dfa8261104b565b6064358252565b60409060831901126102d75760405190613e1a82611023565b81608435613e27816102e8565b8152602060a435910152565b60c435906104ae826118c5565b6101a435906104ae826118c5565b6060906101031901126102d75760405190613e6882611066565b8161010435613e76816102e8565b815261012435613e85816102e8565b6020820152604061014435910152565b6040906101631901126102d75760405190613eaf82611023565b61016435825261018435602083611927836102e856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 19813,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './token_v2.rsh:354:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './token_v2.rsh:85:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin_addAdmin": Admin_addAdmin,
  "Admin_deposit": Admin_deposit,
  "Admin_editUserReward": Admin_editUserReward,
  "Admin_endContractAndTransfer": Admin_endContractAndTransfer,
  "Admin_revokeAdmin": Admin_revokeAdmin,
  "Admin_setReward": Admin_setReward,
  "Deployer": Deployer,
  "User_claim": User_claim,
  "User_optin": User_optin
  };
export const _APIs = {
  Admin: {
    addAdmin: Admin_addAdmin,
    deposit: Admin_deposit,
    editUserReward: Admin_editUserReward,
    endContractAndTransfer: Admin_endContractAndTransfer,
    revokeAdmin: Admin_revokeAdmin,
    setReward: Admin_setReward
    },
  User: {
    claim: User_claim,
    optin: User_optin
    }
  };
