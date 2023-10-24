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
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async (_v2516 ) => {
          const v2516 = stdlib.protect(ctc0, _v2516, null);
        
        const v2517 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v2516, ctc10), null);
        const v2518 = {
          None: 0,
          Some: 1
          }[v2517[0]];
        const v2519 = stdlib.eq(v2518, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2519;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async () => {
        
        
        return v2547;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async (_v2532, _v2533 ) => {
          const v2532 = stdlib.protect(ctc0, _v2532, null);
          const v2533 = stdlib.protect(ctc2, _v2533, null);
        
        const v2534 = [v2532, v2533];
        const v2535 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2534, ctc12), null);
        const v2536 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2537 = stdlib.fromSome(v2535, v2536);
        const v2538 = v2537.claimed;
        
        return v2538;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async (_v2520 ) => {
          const v2520 = stdlib.protect(ctc0, _v2520, null);
        
        const v2521 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v2520, ctc10), null);
        const v2522 = {
          None: 0,
          Some: 1
          }[v2521[0]];
        const v2523 = stdlib.eq(v2522, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2523;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async () => {
        
        
        return v2524;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async () => {
        
        
        return v2540;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async () => {
        
        
        return v2539;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalCurrentAllocatoinToAllUsers = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async () => {
        
        
        return v2524;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalFundsDeposited = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async () => {
        
        
        return v2545;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async () => {
        
        
        return v2541;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async (_v2513 ) => {
          const v2513 = stdlib.protect(ctc0, _v2513, null);
        
        const v2514 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2513, ctc3), null);
        const v2515 = stdlib.fromSome(v2514, stdlib.checkedBigNumberify('./token_v2.rsh:104:58:decimal', stdlib.UInt_max, '0'));
        
        return v2515;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = svs;
      return (await ((async (_v2525, _v2526 ) => {
          const v2525 = stdlib.protect(ctc0, _v2525, null);
          const v2526 = stdlib.protect(ctc2, _v2526, null);
        
        const v2527 = [v2525, v2526];
        const v2528 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2527, ctc12), null);
        const v2529 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2530 = stdlib.fromSome(v2528, v2529);
        const v2531 = v2530.rewards;
        
        return v2531;}))(...args));
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2631 = ctc.selfAddress();
  const v2633 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_addAdmin0_233" (defined at: ./token_v2.rsh:203:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v2636 = stdlib.addressEq(v2631, v2455);
  const v2637 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2631, ctc0), null);
  const v2638 = {
    None: 0,
    Some: 1
    }[v2637[0]];
  const v2639 = stdlib.eq(v2638, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2640 = v2636 ? true : v2639;
  stdlib.assert(v2640, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_addAdmin0_233" (defined at: ./token_v2.rsh:203:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v2647 = ['Admin_addAdmin0_233', v2633];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2647],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:209:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:209:14:decimal', stdlib.UInt_max, '0'), v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2853, ctc0), null);
          ;
          ;
          const v2999 = v2857[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v2999, ctc0, null);
          const v3008 = null;
          const v3009 = await txn1.getOutput('Admin_addAdmin', 'v3008', ctc0, v3008);
          
          const v3016 = v2469.keepGoing;
          const v3017 = v2469.percent;
          const v3024 = {
            bal: v2542,
            keepGoing: v3016,
            percent: v3017,
            totalCurrentAllocatoinToAllUsers: v2524,
            totalFundsDeposited: v2545,
            total_amount_claimed: v2540,
            total_rewards_allcoated: v2543,
            total_users_claim: v2539,
            usersNo: v2541
            };
          const v10964 = v3024;
          const v10966 = v2472;
          const v10967 = v2473;
          const v10968 = v3024.keepGoing;
          if (v10968) {
            const v10969 = v3024.totalCurrentAllocatoinToAllUsers;
            const v10970 = v3024.total_users_claim;
            const v10971 = v3024.total_amount_claimed;
            const v10972 = v3024.usersNo;
            const v10973 = v3024.bal;
            const v10974 = v3024.total_rewards_allcoated;
            const v10975 = v3024.totalFundsDeposited;
            const v10976 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v10977 = v10976[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10983 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v10984 = v10983[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: v2457
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2457
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
          const v3357 = v2854[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3857 = v2854[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4357 = v2854[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4857 = v2854[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5357 = v2854[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5857 = v2854[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6357 = v2854[1];
          
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      undefined /* setApiDetails */;
      const v2863 = stdlib.addressEq(v2853, v2455);
      const v2864 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2853, ctc0), null);
      const v2865 = {
        None: 0,
        Some: 1
        }[v2864[0]];
      const v2866 = stdlib.eq(v2865, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2867 = v2863 ? true : v2866;
      stdlib.assert(v2867, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      ;
      const v2999 = v2857[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v2999, ctc0, null);
      const v3008 = null;
      const v3009 = await txn1.getOutput('Admin_addAdmin', 'v3008', ctc0, v3008);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v2857, v3009), {
          at: './token_v2.rsh:203:11:application',
          fs: ['at ./token_v2.rsh:203:11:application call to [unknown function] (defined at: ./token_v2.rsh:203:11:function exp)', 'at ./token_v2.rsh:212:14:application call to "ret" (defined at: ./token_v2.rsh:210:15:function exp)', 'at ./token_v2.rsh:210:15:application call to [unknown function] (defined at: ./token_v2.rsh:210:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v3016 = v2469.keepGoing;
      const v3017 = v2469.percent;
      const v3024 = {
        bal: v2542,
        keepGoing: v3016,
        percent: v3017,
        totalCurrentAllocatoinToAllUsers: v2524,
        totalFundsDeposited: v2545,
        total_amount_claimed: v2540,
        total_rewards_allcoated: v2543,
        total_users_claim: v2539,
        usersNo: v2541
        };
      const v10964 = v3024;
      const v10966 = v2472;
      const v10967 = v2473;
      const v10968 = v3024.keepGoing;
      if (v10968) {
        const v10969 = v3024.totalCurrentAllocatoinToAllUsers;
        const v10970 = v3024.total_users_claim;
        const v10971 = v3024.total_amount_claimed;
        const v10972 = v3024.usersNo;
        const v10973 = v3024.bal;
        const v10974 = v3024.total_rewards_allcoated;
        const v10975 = v3024.totalFundsDeposited;
        const v10976 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v10977 = v10976[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10983 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v10984 = v10983[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5857 = v2854[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2548 = ctc.selfAddress();
  const v2550 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_deposit0_233" (defined at: ./token_v2.rsh:138:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v2551 = v2550[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2553 = stdlib.addressEq(v2548, v2455);
  const v2554 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2548, ctc0), null);
  const v2555 = {
    None: 0,
    Some: 1
    }[v2554[0]];
  const v2556 = stdlib.eq(v2555, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2557 = v2553 ? true : v2556;
  stdlib.assert(v2557, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_deposit0_233" (defined at: ./token_v2.rsh:138:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v2564 = ['Admin_deposit0_233', v2550];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2564],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:141:10:decimal', stdlib.UInt_max, '0'), [[v2551, v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3357 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v3376 = v3357[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2853, ctc0), null);
          ;
          const v3494 = stdlib.add(v2547, v3376);
          const v3496 = stdlib.Array_set(v2546, '0', v3494);
          const v3497 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3496);
          sim_r.txns.push({
            amt: v3376,
            kind: 'to',
            tok: v2457
            });
          const v3535 = null;
          const v3536 = await txn1.getOutput('Admin_deposit', 'v3535', ctc0, v3535);
          
          const v3543 = v2469.keepGoing;
          const v3544 = v2469.percent;
          const v3551 = stdlib.safeAdd(v2542, v3376);
          const v3552 = stdlib.safeAdd(v2545, v3376);
          const v3553 = {
            bal: v3551,
            keepGoing: v3543,
            percent: v3544,
            totalCurrentAllocatoinToAllUsers: v2524,
            totalFundsDeposited: v3552,
            total_amount_claimed: v2540,
            total_rewards_allcoated: v2543,
            total_users_claim: v2539,
            usersNo: v2541
            };
          const v11216 = v3553;
          const v11218 = v3497;
          const v11219 = v2473;
          const v11220 = v3553.keepGoing;
          if (v11220) {
            const v11221 = v3553.totalCurrentAllocatoinToAllUsers;
            const v11222 = v3553.total_users_claim;
            const v11223 = v3553.total_amount_claimed;
            const v11224 = v3553.usersNo;
            const v11225 = v3553.bal;
            const v11226 = v3553.total_rewards_allcoated;
            const v11227 = v3553.totalFundsDeposited;
            const v11228 = v3497[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11229 = v11228[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11235 = v3497[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11236 = v11235[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: v2457
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2457
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
          const v3857 = v2854[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4357 = v2854[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4857 = v2854[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5357 = v2854[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5857 = v2854[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6357 = v2854[1];
          
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      undefined /* setApiDetails */;
      const v3376 = v3357[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
      const v3377 = stdlib.addressEq(v2853, v2455);
      const v3378 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2853, ctc0), null);
      const v3379 = {
        None: 0,
        Some: 1
        }[v3378[0]];
      const v3380 = stdlib.eq(v3379, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3381 = v3377 ? true : v3380;
      stdlib.assert(v3381, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      ;
      const v3494 = stdlib.add(v2547, v3376);
      const v3496 = stdlib.Array_set(v2546, '0', v3494);
      const v3497 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3496);
      ;
      const v3535 = null;
      const v3536 = await txn1.getOutput('Admin_deposit', 'v3535', ctc0, v3535);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v3357, v3536), {
          at: './token_v2.rsh:138:11:application',
          fs: ['at ./token_v2.rsh:138:11:application call to [unknown function] (defined at: ./token_v2.rsh:138:11:function exp)', 'at ./token_v2.rsh:143:14:application call to "ret" (defined at: ./token_v2.rsh:142:15:function exp)', 'at ./token_v2.rsh:142:15:application call to [unknown function] (defined at: ./token_v2.rsh:142:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v3543 = v2469.keepGoing;
      const v3544 = v2469.percent;
      const v3551 = stdlib.safeAdd(v2542, v3376);
      const v3552 = stdlib.safeAdd(v2545, v3376);
      const v3553 = {
        bal: v3551,
        keepGoing: v3543,
        percent: v3544,
        totalCurrentAllocatoinToAllUsers: v2524,
        totalFundsDeposited: v3552,
        total_amount_claimed: v2540,
        total_rewards_allcoated: v2543,
        total_users_claim: v2539,
        usersNo: v2541
        };
      const v11216 = v3553;
      const v11218 = v3497;
      const v11219 = v2473;
      const v11220 = v3553.keepGoing;
      if (v11220) {
        const v11221 = v3553.totalCurrentAllocatoinToAllUsers;
        const v11222 = v3553.total_users_claim;
        const v11223 = v3553.total_amount_claimed;
        const v11224 = v3553.usersNo;
        const v11225 = v3553.bal;
        const v11226 = v3553.total_rewards_allcoated;
        const v11227 = v3553.totalFundsDeposited;
        const v11228 = v3497[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11229 = v11228[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11235 = v3497[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11236 = v11235[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5857 = v2854[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2605 = ctc.selfAddress();
  const v2607 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v2609 = v2607[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2612 = stdlib.addressEq(v2605, v2455);
  const v2613 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2605, ctc0), null);
  const v2614 = {
    None: 0,
    Some: 1
    }[v2613[0]];
  const v2615 = stdlib.eq(v2614, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2616 = v2612 ? true : v2615;
  stdlib.assert(v2616, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v2620 = stdlib.le(v2609, v2547);
  stdlib.assert(v2620, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v2629 = ['Admin_editUserReward0_233', v2607];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2629],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:195:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:195:14:decimal', stdlib.UInt_max, '0'), v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3357 = v2854[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3857 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v3891 = v3857[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2853, ctc0), null);
          ;
          ;
          const v4056 = v3857[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v4056, ctc1, v3891);
          const v4070 = null;
          const v4071 = await txn1.getOutput('Admin_editUserReward', 'v4070', ctc0, v4070);
          
          const v4079 = v2469.keepGoing;
          const v4080 = v2469.percent;
          const v4087 = {
            bal: v2542,
            keepGoing: v4079,
            percent: v4080,
            totalCurrentAllocatoinToAllUsers: v2524,
            totalFundsDeposited: v2545,
            total_amount_claimed: v2540,
            total_rewards_allcoated: v2543,
            total_users_claim: v2539,
            usersNo: v2541
            };
          const v11468 = v4087;
          const v11470 = v2472;
          const v11471 = v2473;
          const v11472 = v4087.keepGoing;
          if (v11472) {
            const v11473 = v4087.totalCurrentAllocatoinToAllUsers;
            const v11474 = v4087.total_users_claim;
            const v11475 = v4087.total_amount_claimed;
            const v11476 = v4087.usersNo;
            const v11477 = v4087.bal;
            const v11478 = v4087.total_rewards_allcoated;
            const v11479 = v4087.totalFundsDeposited;
            const v11480 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11481 = v11480[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11487 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11488 = v11487[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: v2457
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2457
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
          const v4357 = v2854[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4857 = v2854[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5357 = v2854[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5857 = v2854[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6357 = v2854[1];
          
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      undefined /* setApiDetails */;
      const v3891 = v3857[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
      const v3892 = stdlib.addressEq(v2853, v2455);
      const v3893 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2853, ctc0), null);
      const v3894 = {
        None: 0,
        Some: 1
        }[v3893[0]];
      const v3895 = stdlib.eq(v3894, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3896 = v3892 ? true : v3895;
      stdlib.assert(v3896, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v3900 = stdlib.le(v3891, v2547);
      stdlib.assert(v3900, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      ;
      const v4056 = v3857[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v4056, ctc1, v3891);
      const v4070 = null;
      const v4071 = await txn1.getOutput('Admin_editUserReward', 'v4070', ctc0, v4070);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v3857, v4071), {
          at: './token_v2.rsh:190:11:application',
          fs: ['at ./token_v2.rsh:190:11:application call to [unknown function] (defined at: ./token_v2.rsh:190:11:function exp)', 'at ./token_v2.rsh:198:14:application call to "ret" (defined at: ./token_v2.rsh:196:15:function exp)', 'at ./token_v2.rsh:196:15:application call to [unknown function] (defined at: ./token_v2.rsh:196:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v4079 = v2469.keepGoing;
      const v4080 = v2469.percent;
      const v4087 = {
        bal: v2542,
        keepGoing: v4079,
        percent: v4080,
        totalCurrentAllocatoinToAllUsers: v2524,
        totalFundsDeposited: v2545,
        total_amount_claimed: v2540,
        total_rewards_allcoated: v2543,
        total_users_claim: v2539,
        usersNo: v2541
        };
      const v11468 = v4087;
      const v11470 = v2472;
      const v11471 = v2473;
      const v11472 = v4087.keepGoing;
      if (v11472) {
        const v11473 = v4087.totalCurrentAllocatoinToAllUsers;
        const v11474 = v4087.total_users_claim;
        const v11475 = v4087.total_amount_claimed;
        const v11476 = v4087.usersNo;
        const v11477 = v4087.bal;
        const v11478 = v4087.total_rewards_allcoated;
        const v11479 = v4087.totalFundsDeposited;
        const v11480 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11481 = v11480[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11487 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11488 = v11487[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5857 = v2854[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2695 = ctc.selfAddress();
  const v2697 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v2698 = stdlib.addressEq(v2455, v2695);
  stdlib.assert(v2698, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v2700 = stdlib.eq(v2524, stdlib.checkedBigNumberify('./token_v2.rsh:338:46:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2700, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot end contract When total allocations greater than 0',
    who: 'Admin_endContractAndTransfer'
    });
  const v2705 = ['Admin_endContractAndTransfer0_233', v2697];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2705],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:342:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:342:14:decimal', stdlib.UInt_max, '0'), v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3357 = v2854[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3857 = v2854[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4357 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          ;
          const v4594 = null;
          const v4595 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4594', ctc0, v4594);
          
          const v4602 = v2469.percent;
          const v4609 = {
            bal: v2542,
            keepGoing: false,
            percent: v4602,
            totalCurrentAllocatoinToAllUsers: v2524,
            totalFundsDeposited: v2545,
            total_amount_claimed: v2540,
            total_rewards_allcoated: v2543,
            total_users_claim: v2539,
            usersNo: v2541
            };
          const v11720 = v4609;
          const v11722 = v2472;
          const v11723 = v2473;
          const v11724 = v4609.keepGoing;
          if (v11724) {
            const v11725 = v4609.totalCurrentAllocatoinToAllUsers;
            const v11726 = v4609.total_users_claim;
            const v11727 = v4609.total_amount_claimed;
            const v11728 = v4609.usersNo;
            const v11729 = v4609.bal;
            const v11730 = v4609.total_rewards_allcoated;
            const v11731 = v4609.totalFundsDeposited;
            const v11732 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11733 = v11732[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11739 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11740 = v11739[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: v2457
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2457
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
          const v4857 = v2854[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5357 = v2854[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5857 = v2854[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6357 = v2854[1];
          
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      undefined /* setApiDetails */;
      const v4409 = stdlib.addressEq(v2455, v2853);
      stdlib.assert(v4409, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      const v4411 = stdlib.eq(v2524, stdlib.checkedBigNumberify('./token_v2.rsh:338:46:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4411, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot end contract When total allocations greater than 0',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      ;
      const v4594 = null;
      const v4595 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4594', ctc0, v4594);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v4357, v4595), {
          at: './token_v2.rsh:335:11:application',
          fs: ['at ./token_v2.rsh:335:11:application call to [unknown function] (defined at: ./token_v2.rsh:335:11:function exp)', 'at ./token_v2.rsh:344:14:application call to "ret" (defined at: ./token_v2.rsh:343:15:function exp)', 'at ./token_v2.rsh:343:15:application call to [unknown function] (defined at: ./token_v2.rsh:343:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v4602 = v2469.percent;
      const v4609 = {
        bal: v2542,
        keepGoing: false,
        percent: v4602,
        totalCurrentAllocatoinToAllUsers: v2524,
        totalFundsDeposited: v2545,
        total_amount_claimed: v2540,
        total_rewards_allcoated: v2543,
        total_users_claim: v2539,
        usersNo: v2541
        };
      const v11720 = v4609;
      const v11722 = v2472;
      const v11723 = v2473;
      const v11724 = v4609.keepGoing;
      if (v11724) {
        const v11725 = v4609.totalCurrentAllocatoinToAllUsers;
        const v11726 = v4609.total_users_claim;
        const v11727 = v4609.total_amount_claimed;
        const v11728 = v4609.usersNo;
        const v11729 = v4609.bal;
        const v11730 = v4609.total_rewards_allcoated;
        const v11731 = v4609.totalFundsDeposited;
        const v11732 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11733 = v11732[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11739 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11740 = v11739[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5857 = v2854[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2649 = ctc.selfAddress();
  const v2651 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./token_v2.rsh:217:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v2654 = stdlib.addressEq(v2649, v2455);
  stdlib.assert(v2654, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./token_v2.rsh:217:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v2661 = ['Admin_revokeAdmin0_233', v2651];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2661],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:220:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:220:14:decimal', stdlib.UInt_max, '0'), v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3357 = v2854[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3857 = v2854[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4357 = v2854[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4857 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          ;
          const v5112 = v4857[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v5112, ctc0, undefined /* Nothing */);
          const v5117 = null;
          const v5118 = await txn1.getOutput('Admin_revokeAdmin', 'v5117', ctc0, v5117);
          
          const v5125 = v2469.keepGoing;
          const v5126 = v2469.percent;
          const v5133 = {
            bal: v2542,
            keepGoing: v5125,
            percent: v5126,
            totalCurrentAllocatoinToAllUsers: v2524,
            totalFundsDeposited: v2545,
            total_amount_claimed: v2540,
            total_rewards_allcoated: v2543,
            total_users_claim: v2539,
            usersNo: v2541
            };
          const v11972 = v5133;
          const v11974 = v2472;
          const v11975 = v2473;
          const v11976 = v5133.keepGoing;
          if (v11976) {
            const v11977 = v5133.totalCurrentAllocatoinToAllUsers;
            const v11978 = v5133.total_users_claim;
            const v11979 = v5133.total_amount_claimed;
            const v11980 = v5133.usersNo;
            const v11981 = v5133.bal;
            const v11982 = v5133.total_rewards_allcoated;
            const v11983 = v5133.totalFundsDeposited;
            const v11984 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11985 = v11984[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11991 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11992 = v11991[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: v2457
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2457
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
          const v5357 = v2854[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5857 = v2854[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6357 = v2854[1];
          
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      undefined /* setApiDetails */;
      const v4921 = stdlib.addressEq(v2853, v2455);
      stdlib.assert(v4921, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      ;
      const v5112 = v4857[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v5112, ctc0, undefined /* Nothing */);
      const v5117 = null;
      const v5118 = await txn1.getOutput('Admin_revokeAdmin', 'v5117', ctc0, v5117);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v4857, v5118), {
          at: './token_v2.rsh:217:11:application',
          fs: ['at ./token_v2.rsh:217:11:application call to [unknown function] (defined at: ./token_v2.rsh:217:11:function exp)', 'at ./token_v2.rsh:223:14:application call to "ret" (defined at: ./token_v2.rsh:221:15:function exp)', 'at ./token_v2.rsh:221:15:application call to [unknown function] (defined at: ./token_v2.rsh:221:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5125 = v2469.keepGoing;
      const v5126 = v2469.percent;
      const v5133 = {
        bal: v2542,
        keepGoing: v5125,
        percent: v5126,
        totalCurrentAllocatoinToAllUsers: v2524,
        totalFundsDeposited: v2545,
        total_amount_claimed: v2540,
        total_rewards_allcoated: v2543,
        total_users_claim: v2539,
        usersNo: v2541
        };
      const v11972 = v5133;
      const v11974 = v2472;
      const v11975 = v2473;
      const v11976 = v5133.keepGoing;
      if (v11976) {
        const v11977 = v5133.totalCurrentAllocatoinToAllUsers;
        const v11978 = v5133.total_users_claim;
        const v11979 = v5133.total_amount_claimed;
        const v11980 = v5133.usersNo;
        const v11981 = v5133.bal;
        const v11982 = v5133.total_rewards_allcoated;
        const v11983 = v5133.totalFundsDeposited;
        const v11984 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11985 = v11984[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11991 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11992 = v11991[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5857 = v2854[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2568 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v2569 = v2568[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2571 = v2568[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2577 = stdlib.ge(v2571, v2547);
  const v2580 = stdlib.safeSub(v2547, v2571);
  const v2581 = stdlib.ge(v2580, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2581, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot have an amout that would result to a negative balance',
    who: 'Admin_setReward'
    });
  const v2583 = v2577 ? false : true;
  stdlib.assert(v2583, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Balance has to be greater than Amt',
    who: 'Admin_setReward'
    });
  const v2587 = stdlib.safeAdd(v2524, v2571);
  const v2588 = stdlib.ge(v2547, v2587);
  stdlib.assert(v2588, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Balance has to be greater than total allocation ',
    who: 'Admin_setReward'
    });
  const v2590 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v2569, ctc0), null);
  const v2591 = {
    None: 0,
    Some: 1
    }[v2590[0]];
  const v2592 = stdlib.eq(v2591, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2592, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v2603 = ['Admin_setReward0_233', v2568];
  
  const v2813 = v2577 ? v2571 : stdlib.checkedBigNumberify('./token_v2.rsh:165:35:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2603],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:165:10:decimal', stdlib.UInt_max, '0'), [[v2813, v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3357 = v2854[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3857 = v2854[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4357 = v2854[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4857 = v2854[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5357 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v5430 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
          const v5432 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
          const v5435 = stdlib.ge(v5432, v2547);
          const v5445 = stdlib.safeAdd(v2524, v5432);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v5430, ctc0), null);
          const v5452 = v5435 ? v5432 : stdlib.checkedBigNumberify('./token_v2.rsh:165:35:decimal', stdlib.UInt_max, '0');
          ;
          const v5494 = stdlib.add(v2547, v5452);
          const v5496 = stdlib.Array_set(v2546, '0', v5494);
          const v5497 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5496);
          sim_r.txns.push({
            amt: v5452,
            kind: 'to',
            tok: v2457
            });
          const v5637 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
          const v5639 = v5497[stdlib.checkedBigNumberify('./token_v2.rsh:153:42:application', stdlib.UInt_max, '0')];
          const v5640 = v5639[stdlib.checkedBigNumberify('./token_v2.rsh:153:42:application', stdlib.UInt_max, '0')];
          const v5641 = stdlib.ge(v5432, v5640);
          const v5661 = [v5430, v5637];
          const v5662 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v5661, ctc3), null);
          const v5663 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5664 = stdlib.fromSome(v5662, v5663);
          const v5666 = v5664.claimed;
          const v5667 = v5664.rewards;
          const v5669 = stdlib.safeAdd(v5667, v5432);
          const v5670 = {
            claimed: v5666,
            rewards: v5669
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v5661, ctc3, v5670);
          const v5671 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5430, ctc1), null);
          const v5672 = stdlib.fromSome(v5671, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
          const v5673 = stdlib.safeAdd(v5672, v5432);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5430, ctc1, v5673);
          const v5674 = true;
          const v5675 = await txn1.getOutput('Admin_setReward', 'v5674', ctc9, v5674);
          
          const v5684 = v2469.keepGoing;
          const v5685 = v2469.percent;
          let v5693;
          if (v5641) {
            const v5694 = stdlib.safeAdd(v2542, v5432);
            v5693 = v5694;
            }
          else {
            v5693 = v2542;
            }
          const v5695 = {
            bal: v5693,
            keepGoing: v5684,
            percent: v5685,
            totalCurrentAllocatoinToAllUsers: v5445,
            totalFundsDeposited: v2545,
            total_amount_claimed: v2540,
            total_rewards_allcoated: v2543,
            total_users_claim: v2539,
            usersNo: v2541
            };
          const v12224 = v5695;
          const v12226 = v5497;
          const v12227 = v2473;
          const v12228 = v5695.keepGoing;
          if (v12228) {
            const v12229 = v5695.totalCurrentAllocatoinToAllUsers;
            const v12230 = v5695.total_users_claim;
            const v12231 = v5695.total_amount_claimed;
            const v12232 = v5695.usersNo;
            const v12233 = v5695.bal;
            const v12234 = v5695.total_rewards_allcoated;
            const v12235 = v5695.totalFundsDeposited;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: v2457
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2457
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
          const v5857 = v2854[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6357 = v2854[1];
          
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      undefined /* setApiDetails */;
      const v5430 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
      const v5432 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
      const v5435 = stdlib.ge(v5432, v2547);
      const v5438 = stdlib.safeSub(v2547, v5432);
      const v5439 = stdlib.ge(v5438, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5439, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      const v5441 = v5435 ? false : true;
      stdlib.assert(v5441, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v5445 = stdlib.safeAdd(v2524, v5432);
      const v5446 = stdlib.ge(v2547, v5445);
      stdlib.assert(v5446, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v5448 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v5430, ctc0), null);
      const v5449 = {
        None: 0,
        Some: 1
        }[v5448[0]];
      const v5450 = stdlib.eq(v5449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5450, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v5452 = v5435 ? v5432 : stdlib.checkedBigNumberify('./token_v2.rsh:165:35:decimal', stdlib.UInt_max, '0');
      ;
      const v5494 = stdlib.add(v2547, v5452);
      const v5496 = stdlib.Array_set(v2546, '0', v5494);
      const v5497 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5496);
      ;
      const v5637 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
      const v5639 = v5497[stdlib.checkedBigNumberify('./token_v2.rsh:153:42:application', stdlib.UInt_max, '0')];
      const v5640 = v5639[stdlib.checkedBigNumberify('./token_v2.rsh:153:42:application', stdlib.UInt_max, '0')];
      const v5641 = stdlib.ge(v5432, v5640);
      const v5644 = stdlib.safeSub(v5640, v5432);
      const v5645 = stdlib.ge(v5644, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5645, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      const v5647 = v5641 ? false : true;
      stdlib.assert(v5647, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v5652 = stdlib.ge(v5640, v5445);
      stdlib.assert(v5652, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v5661 = [v5430, v5637];
      const v5662 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v5661, ctc3), null);
      const v5663 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5664 = stdlib.fromSome(v5662, v5663);
      const v5666 = v5664.claimed;
      const v5667 = v5664.rewards;
      const v5669 = stdlib.safeAdd(v5667, v5432);
      const v5670 = {
        claimed: v5666,
        rewards: v5669
        };
      await stdlib.mapSet(map1, ctc22, v5661, ctc3, v5670);
      const v5671 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5430, ctc1), null);
      const v5672 = stdlib.fromSome(v5671, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
      const v5673 = stdlib.safeAdd(v5672, v5432);
      await stdlib.mapSet(map0, ctc6, v5430, ctc1, v5673);
      const v5674 = true;
      const v5675 = await txn1.getOutput('Admin_setReward', 'v5674', ctc9, v5674);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v5357, v5675), {
          at: './token_v2.rsh:152:11:application',
          fs: ['at ./token_v2.rsh:152:11:application call to [unknown function] (defined at: ./token_v2.rsh:152:11:function exp)', 'at ./token_v2.rsh:177:14:application call to "ret" (defined at: ./token_v2.rsh:166:15:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      const v5684 = v2469.keepGoing;
      const v5685 = v2469.percent;
      let v5693;
      if (v5641) {
        const v5694 = stdlib.safeAdd(v2542, v5432);
        v5693 = v5694;
        }
      else {
        v5693 = v2542;
        }
      const v5695 = {
        bal: v5693,
        keepGoing: v5684,
        percent: v5685,
        totalCurrentAllocatoinToAllUsers: v5445,
        totalFundsDeposited: v2545,
        total_amount_claimed: v2540,
        total_rewards_allcoated: v2543,
        total_users_claim: v2539,
        usersNo: v2541
        };
      const v12224 = v5695;
      const v12226 = v5497;
      const v12227 = v2473;
      const v12228 = v5695.keepGoing;
      if (v12228) {
        const v12229 = v5695.totalCurrentAllocatoinToAllUsers;
        const v12230 = v5695.total_users_claim;
        const v12231 = v5695.total_amount_claimed;
        const v12232 = v5695.usersNo;
        const v12233 = v5695.bal;
        const v12234 = v5695.total_rewards_allcoated;
        const v12235 = v5695.totalFundsDeposited;
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
      const v5857 = v2854[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
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
  
  
  const v2446 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2447 = [v2446];
  const v2451 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2452 = stdlib.protect(ctc7, interact.tok, 'for Deployer\'s interact field tok');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2451, v2452],
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
      
      const {data: [v2456, v2457], secs: v2459, time: v2458, didSend: v29, from: v2455 } = txn1;
      
      const v2460 = v2447[stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0')];
      const v2461 = stdlib.Array_set(v2460, '0', stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'));
      const v2462 = stdlib.Array_set(v2447, stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'), v2461);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2457
        });
      ;
      const v2464 = await ctc.getContractInfo();
      
      const v2466 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v2467 = {
        i: v2466,
        sign: true
        };
      const v2468 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v2467,
        totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2469 = v2468;
      const v2470 = v2458;
      const v2472 = v2462;
      const v2473 = stdlib.checkedBigNumberify('./token_v2.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v2512 = v2469.keepGoing;
        
        return v2512;})()) {
        const v2524 = v2469.totalCurrentAllocatoinToAllUsers;
        const v2539 = v2469.total_users_claim;
        const v2540 = v2469.total_amount_claimed;
        const v2541 = v2469.usersNo;
        const v2542 = v2469.bal;
        const v2543 = v2469.total_rewards_allcoated;
        const v2545 = v2469.totalFundsDeposited;
        const v2546 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v2547 = v2546[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v6890 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v6891 = v6890[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2455,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2455,
          tok: v2457
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2457
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
  const {data: [v2456, v2457], secs: v2459, time: v2458, didSend: v29, from: v2455 } = txn1;
  const v2460 = v2447[stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0')];
  const v2461 = stdlib.Array_set(v2460, '0', stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'));
  const v2462 = stdlib.Array_set(v2447, stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'), v2461);
  ;
  ;
  const v2464 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2464), {
    at: './token_v2.rsh:67:27:application',
    fs: ['at ./token_v2.rsh:67:27:application call to [unknown function] (defined at: ./token_v2.rsh:67:27:function exp)', 'at ./token_v2.rsh:67:27:application call to "liftedInteract" (defined at: ./token_v2.rsh:67:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2466 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v2467 = {
    i: v2466,
    sign: true
    };
  const v2468 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v2467,
    totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2469 = v2468;
  let v2470 = v2458;
  let v2472 = v2462;
  let v2473 = stdlib.checkedBigNumberify('./token_v2.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v2512 = v2469.keepGoing;
    
    return v2512;})()) {
    const v2524 = v2469.totalCurrentAllocatoinToAllUsers;
    const v2539 = v2469.total_users_claim;
    const v2540 = v2469.total_amount_claimed;
    const v2541 = v2469.usersNo;
    const v2542 = v2469.bal;
    const v2543 = v2469.total_rewards_allcoated;
    const v2545 = v2469.totalFundsDeposited;
    const v2546 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
    const v2547 = v2546[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn3;
    switch (v2854[0]) {
      case 'Admin_addAdmin0_233': {
        const v2857 = v2854[1];
        undefined /* setApiDetails */;
        const v2863 = stdlib.addressEq(v2853, v2455);
        const v2864 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2853, ctc0), null);
        const v2865 = {
          None: 0,
          Some: 1
          }[v2864[0]];
        const v2866 = stdlib.eq(v2865, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2867 = v2863 ? true : v2866;
        stdlib.assert(v2867, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        ;
        const v2999 = v2857[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v2999, ctc0, null);
        const v3008 = null;
        await txn3.getOutput('Admin_addAdmin', 'v3008', ctc0, v3008);
        const v3016 = v2469.keepGoing;
        const v3017 = v2469.percent;
        const v3024 = {
          bal: v2542,
          keepGoing: v3016,
          percent: v3017,
          totalCurrentAllocatoinToAllUsers: v2524,
          totalFundsDeposited: v2545,
          total_amount_claimed: v2540,
          total_rewards_allcoated: v2543,
          total_users_claim: v2539,
          usersNo: v2541
          };
        const cv2469 = v3024;
        const cv2470 = v2855;
        const cv2472 = v2472;
        const cv2473 = v2473;
        
        v2469 = cv2469;
        v2470 = cv2470;
        v2472 = cv2472;
        v2473 = cv2473;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_233': {
        const v3357 = v2854[1];
        undefined /* setApiDetails */;
        const v3376 = v3357[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
        const v3377 = stdlib.addressEq(v2853, v2455);
        const v3378 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2853, ctc0), null);
        const v3379 = {
          None: 0,
          Some: 1
          }[v3378[0]];
        const v3380 = stdlib.eq(v3379, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3381 = v3377 ? true : v3380;
        stdlib.assert(v3381, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        ;
        const v3494 = stdlib.add(v2547, v3376);
        const v3496 = stdlib.Array_set(v2546, '0', v3494);
        const v3497 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3496);
        ;
        const v3535 = null;
        await txn3.getOutput('Admin_deposit', 'v3535', ctc0, v3535);
        const v3543 = v2469.keepGoing;
        const v3544 = v2469.percent;
        const v3551 = stdlib.safeAdd(v2542, v3376);
        const v3552 = stdlib.safeAdd(v2545, v3376);
        const v3553 = {
          bal: v3551,
          keepGoing: v3543,
          percent: v3544,
          totalCurrentAllocatoinToAllUsers: v2524,
          totalFundsDeposited: v3552,
          total_amount_claimed: v2540,
          total_rewards_allcoated: v2543,
          total_users_claim: v2539,
          usersNo: v2541
          };
        const cv2469 = v3553;
        const cv2470 = v2855;
        const cv2472 = v3497;
        const cv2473 = v2473;
        
        v2469 = cv2469;
        v2470 = cv2470;
        v2472 = cv2472;
        v2473 = cv2473;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_233': {
        const v3857 = v2854[1];
        undefined /* setApiDetails */;
        const v3891 = v3857[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
        const v3892 = stdlib.addressEq(v2853, v2455);
        const v3893 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2853, ctc0), null);
        const v3894 = {
          None: 0,
          Some: 1
          }[v3893[0]];
        const v3895 = stdlib.eq(v3894, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3896 = v3892 ? true : v3895;
        stdlib.assert(v3896, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v3900 = stdlib.le(v3891, v2547);
        stdlib.assert(v3900, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        ;
        const v4056 = v3857[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc8, v4056, ctc1, v3891);
        const v4070 = null;
        await txn3.getOutput('Admin_editUserReward', 'v4070', ctc0, v4070);
        const v4079 = v2469.keepGoing;
        const v4080 = v2469.percent;
        const v4087 = {
          bal: v2542,
          keepGoing: v4079,
          percent: v4080,
          totalCurrentAllocatoinToAllUsers: v2524,
          totalFundsDeposited: v2545,
          total_amount_claimed: v2540,
          total_rewards_allcoated: v2543,
          total_users_claim: v2539,
          usersNo: v2541
          };
        const cv2469 = v4087;
        const cv2470 = v2855;
        const cv2472 = v2472;
        const cv2473 = v2473;
        
        v2469 = cv2469;
        v2470 = cv2470;
        v2472 = cv2472;
        v2473 = cv2473;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_233': {
        const v4357 = v2854[1];
        undefined /* setApiDetails */;
        const v4409 = stdlib.addressEq(v2455, v2853);
        stdlib.assert(v4409, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        const v4411 = stdlib.eq(v2524, stdlib.checkedBigNumberify('./token_v2.rsh:338:46:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4411, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:337:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot end contract When total allocations greater than 0',
          who: 'Deployer'
          });
        ;
        ;
        const v4594 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v4594', ctc0, v4594);
        const v4602 = v2469.percent;
        const v4609 = {
          bal: v2542,
          keepGoing: false,
          percent: v4602,
          totalCurrentAllocatoinToAllUsers: v2524,
          totalFundsDeposited: v2545,
          total_amount_claimed: v2540,
          total_rewards_allcoated: v2543,
          total_users_claim: v2539,
          usersNo: v2541
          };
        const cv2469 = v4609;
        const cv2470 = v2855;
        const cv2472 = v2472;
        const cv2473 = v2473;
        
        v2469 = cv2469;
        v2470 = cv2470;
        v2472 = cv2472;
        v2473 = cv2473;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_233': {
        const v4857 = v2854[1];
        undefined /* setApiDetails */;
        const v4921 = stdlib.addressEq(v2853, v2455);
        stdlib.assert(v4921, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        ;
        const v5112 = v4857[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v5112, ctc0, undefined /* Nothing */);
        const v5117 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v5117', ctc0, v5117);
        const v5125 = v2469.keepGoing;
        const v5126 = v2469.percent;
        const v5133 = {
          bal: v2542,
          keepGoing: v5125,
          percent: v5126,
          totalCurrentAllocatoinToAllUsers: v2524,
          totalFundsDeposited: v2545,
          total_amount_claimed: v2540,
          total_rewards_allcoated: v2543,
          total_users_claim: v2539,
          usersNo: v2541
          };
        const cv2469 = v5133;
        const cv2470 = v2855;
        const cv2472 = v2472;
        const cv2473 = v2473;
        
        v2469 = cv2469;
        v2470 = cv2470;
        v2472 = cv2472;
        v2473 = cv2473;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_233': {
        const v5357 = v2854[1];
        undefined /* setApiDetails */;
        const v5430 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
        const v5432 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
        const v5435 = stdlib.ge(v5432, v2547);
        const v5438 = stdlib.safeSub(v2547, v5432);
        const v5439 = stdlib.ge(v5438, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5439, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        const v5441 = v5435 ? false : true;
        stdlib.assert(v5441, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v5445 = stdlib.safeAdd(v2524, v5432);
        const v5446 = stdlib.ge(v2547, v5445);
        stdlib.assert(v5446, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v5448 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc8, v5430, ctc0), null);
        const v5449 = {
          None: 0,
          Some: 1
          }[v5448[0]];
        const v5450 = stdlib.eq(v5449, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5450, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v5452 = v5435 ? v5432 : stdlib.checkedBigNumberify('./token_v2.rsh:165:35:decimal', stdlib.UInt_max, '0');
        ;
        const v5494 = stdlib.add(v2547, v5452);
        const v5496 = stdlib.Array_set(v2546, '0', v5494);
        const v5497 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5496);
        ;
        const v5637 = v5357[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
        const v5639 = v5497[stdlib.checkedBigNumberify('./token_v2.rsh:153:42:application', stdlib.UInt_max, '0')];
        const v5640 = v5639[stdlib.checkedBigNumberify('./token_v2.rsh:153:42:application', stdlib.UInt_max, '0')];
        const v5641 = stdlib.ge(v5432, v5640);
        const v5644 = stdlib.safeSub(v5640, v5432);
        const v5645 = stdlib.ge(v5644, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5645, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        const v5647 = v5641 ? false : true;
        stdlib.assert(v5647, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v5652 = stdlib.ge(v5640, v5445);
        stdlib.assert(v5652, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v5661 = [v5430, v5637];
        const v5662 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5661, ctc3), null);
        const v5663 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5664 = stdlib.fromSome(v5662, v5663);
        const v5666 = v5664.claimed;
        const v5667 = v5664.rewards;
        const v5669 = stdlib.safeAdd(v5667, v5432);
        const v5670 = {
          claimed: v5666,
          rewards: v5669
          };
        await stdlib.mapSet(map1, ctc16, v5661, ctc3, v5670);
        const v5671 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5430, ctc1), null);
        const v5672 = stdlib.fromSome(v5671, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
        const v5673 = stdlib.safeAdd(v5672, v5432);
        await stdlib.mapSet(map0, ctc8, v5430, ctc1, v5673);
        const v5674 = true;
        await txn3.getOutput('Admin_setReward', 'v5674', ctc17, v5674);
        const v5684 = v2469.keepGoing;
        const v5685 = v2469.percent;
        let v5693;
        if (v5641) {
          const v5694 = stdlib.safeAdd(v2542, v5432);
          v5693 = v5694;
          }
        else {
          v5693 = v2542;
          }
        const v5695 = {
          bal: v5693,
          keepGoing: v5684,
          percent: v5685,
          totalCurrentAllocatoinToAllUsers: v5445,
          totalFundsDeposited: v2545,
          total_amount_claimed: v2540,
          total_rewards_allcoated: v2543,
          total_users_claim: v2539,
          usersNo: v2541
          };
        const cv2469 = v5695;
        const cv2470 = v2855;
        const cv2472 = v5497;
        const cv2473 = v2473;
        
        v2469 = cv2469;
        v2470 = cv2470;
        v2472 = cv2472;
        v2473 = cv2473;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_233': {
        const v5857 = v2854[1];
        undefined /* setApiDetails */;
        const v5960 = v5857[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
        const v5962 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2853, ctc1), null);
        const v5963 = stdlib.fromSome(v5962, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
        const v5966 = stdlib.le(v5960, v2547);
        stdlib.assert(v5966, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5968 = stdlib.ge(v5963, v5960);
        stdlib.assert(v5968, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        ;
        const v6199 = v5857[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
        const v6214 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v2853, ctc0), null);
        const v6215 = {
          None: 0,
          Some: 1
          }[v6214[0]];
        const v6216 = stdlib.eq(v6215, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6217 = [v2853, v6199];
        const v6218 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6217, ctc3), null);
        const v6219 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6220 = stdlib.fromSome(v6218, v6219);
        const v6222 = v6220.claimed;
        const v6223 = v6220.rewards;
        const v6225 = stdlib.safeAdd(v6222, v5960);
        const v6227 = stdlib.safeSub(v6223, v5960);
        const v6228 = {
          claimed: v6225,
          rewards: v6227
          };
        await stdlib.mapSet(map1, ctc16, v6217, ctc3, v6228);
        const v6229 = true;
        await txn3.getOutput('User_claim', 'v6229', ctc17, v6229);
        const v6237 = {
          addr: v2853,
          amount: v5960,
          projectName: v2456
          };
        null;
        if (v6216) {
          const v6294 = stdlib.sub(v2547, v5960);
          const v6296 = stdlib.Array_set(v2546, '0', v6294);
          const v6297 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6296);
          ;
          const v6300 = stdlib.eq(v5963, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
          if (v6300) {
            await stdlib.mapSet(map0, ctc8, v2853, ctc1, undefined /* Nothing */);
            const v6302 = v2469.keepGoing;
            const v6303 = v2469.percent;
            const v6312 = stdlib.safeAdd(v2541, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
            const v6313 = stdlib.safeSub(v2542, v5960);
            const v6314 = stdlib.safeSub(v2524, v5960);
            const v6315 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6316 = stdlib.safeAdd(v2540, v5960);
            const v6317 = {
              bal: v6313,
              keepGoing: v6302,
              percent: v6303,
              totalCurrentAllocatoinToAllUsers: v6314,
              totalFundsDeposited: v2545,
              total_amount_claimed: v6316,
              total_rewards_allcoated: v2543,
              total_users_claim: v6315,
              usersNo: v6312
              };
            const cv2469 = v6317;
            const cv2470 = v2855;
            const cv2472 = v6297;
            const cv2473 = v2473;
            
            v2469 = cv2469;
            v2470 = cv2470;
            v2472 = cv2472;
            v2473 = cv2473;
            
            txn2 = txn3;
            continue;}
          else {
            const v6319 = stdlib.safeSub(v5963, v5960);
            await stdlib.mapSet(map0, ctc8, v2853, ctc1, v6319);
            const v6321 = v2469.keepGoing;
            const v6322 = v2469.percent;
            const v6331 = stdlib.safeAdd(v2541, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
            const v6332 = stdlib.safeSub(v2542, v5960);
            const v6333 = stdlib.safeSub(v2524, v5960);
            const v6334 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6335 = stdlib.safeAdd(v2540, v5960);
            const v6336 = {
              bal: v6332,
              keepGoing: v6321,
              percent: v6322,
              totalCurrentAllocatoinToAllUsers: v6333,
              totalFundsDeposited: v2545,
              total_amount_claimed: v6335,
              total_rewards_allcoated: v2543,
              total_users_claim: v6334,
              usersNo: v6331
              };
            const cv2469 = v6336;
            const cv2470 = v2855;
            const cv2472 = v6297;
            const cv2473 = v2473;
            
            v2469 = cv2469;
            v2470 = cv2470;
            v2472 = cv2472;
            v2473 = cv2473;
            
            txn2 = txn3;
            continue;}}
        else {
          await stdlib.mapSet(map3, ctc8, v2853, ctc0, null);
          const v6245 = stdlib.sub(v2547, v5960);
          const v6247 = stdlib.Array_set(v2546, '0', v6245);
          const v6248 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6247);
          ;
          const v6251 = stdlib.eq(v5963, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
          if (v6251) {
            await stdlib.mapSet(map0, ctc8, v2853, ctc1, undefined /* Nothing */);
            const v6253 = v2469.keepGoing;
            const v6254 = v2469.percent;
            const v6264 = stdlib.safeSub(v2542, v5960);
            const v6265 = stdlib.safeSub(v2524, v5960);
            const v6266 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6267 = stdlib.safeAdd(v2540, v5960);
            const v6268 = {
              bal: v6264,
              keepGoing: v6253,
              percent: v6254,
              totalCurrentAllocatoinToAllUsers: v6265,
              totalFundsDeposited: v2545,
              total_amount_claimed: v6267,
              total_rewards_allcoated: v2543,
              total_users_claim: v6266,
              usersNo: v2541
              };
            const cv2469 = v6268;
            const cv2470 = v2855;
            const cv2472 = v6248;
            const cv2473 = v2473;
            
            v2469 = cv2469;
            v2470 = cv2470;
            v2472 = cv2472;
            v2473 = cv2473;
            
            txn2 = txn3;
            continue;}
          else {
            const v6270 = stdlib.safeSub(v5963, v5960);
            await stdlib.mapSet(map0, ctc8, v2853, ctc1, v6270);
            const v6272 = v2469.keepGoing;
            const v6273 = v2469.percent;
            const v6283 = stdlib.safeSub(v2542, v5960);
            const v6284 = stdlib.safeSub(v2524, v5960);
            const v6285 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6286 = stdlib.safeAdd(v2540, v5960);
            const v6287 = {
              bal: v6283,
              keepGoing: v6272,
              percent: v6273,
              totalCurrentAllocatoinToAllUsers: v6284,
              totalFundsDeposited: v2545,
              total_amount_claimed: v6286,
              total_rewards_allcoated: v2543,
              total_users_claim: v6285,
              usersNo: v2541
              };
            const cv2469 = v6287;
            const cv2470 = v2855;
            const cv2472 = v6248;
            const cv2473 = v2473;
            
            v2469 = cv2469;
            v2470 = cv2470;
            v2472 = cv2472;
            v2473 = cv2473;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_233': {
        const v6357 = v2854[1];
        undefined /* setApiDetails */;
        ;
        ;
        await stdlib.mapSet(map4, ctc8, v2853, ctc0, null);
        const v6840 = null;
        await txn3.getOutput('User_optin', 'v6840', ctc0, v6840);
        const v6847 = v2469.keepGoing;
        const v6848 = v2469.percent;
        const v6855 = {
          bal: v2542,
          keepGoing: v6847,
          percent: v6848,
          totalCurrentAllocatoinToAllUsers: v2524,
          totalFundsDeposited: v2545,
          total_amount_claimed: v2540,
          total_rewards_allcoated: v2543,
          total_users_claim: v2539,
          usersNo: v2541
          };
        const cv2469 = v6855;
        const cv2470 = v2855;
        const cv2472 = v2472;
        const cv2473 = v2473;
        
        v2469 = cv2469;
        v2470 = cv2470;
        v2472 = cv2472;
        v2473 = cv2473;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v6890 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
  const v6891 = v6890[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2663 = ctc.selfAddress();
  const v2665 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2666 = v2665[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2670 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2663, ctc1), null);
  const v2671 = stdlib.fromSome(v2670, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
  const v2674 = stdlib.le(v2666, v2547);
  stdlib.assert(v2674, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v2676 = stdlib.ge(v2671, v2666);
  stdlib.assert(v2676, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v2685 = ['User_claim0_233', v2665];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2685],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:281:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:281:14:decimal', stdlib.UInt_max, '0'), v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3357 = v2854[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3857 = v2854[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4357 = v2854[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4857 = v2854[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5357 = v2854[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5857 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5960 = v5857[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
          const v5962 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2853, ctc1), null);
          const v5963 = stdlib.fromSome(v5962, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          const v6199 = v5857[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
          const v6214 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v2853, ctc0), null);
          const v6215 = {
            None: 0,
            Some: 1
            }[v6214[0]];
          const v6216 = stdlib.eq(v6215, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v6217 = [v2853, v6199];
          const v6218 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v6217, ctc3), null);
          const v6219 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6220 = stdlib.fromSome(v6218, v6219);
          const v6222 = v6220.claimed;
          const v6223 = v6220.rewards;
          const v6225 = stdlib.safeAdd(v6222, v5960);
          const v6227 = stdlib.safeSub(v6223, v5960);
          const v6228 = {
            claimed: v6225,
            rewards: v6227
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v6217, ctc3, v6228);
          const v6229 = true;
          const v6230 = await txn1.getOutput('User_claim', 'v6229', ctc9, v6229);
          
          const v6237 = {
            addr: v2853,
            amount: v5960,
            projectName: v2456
            };
          null;
          if (v6216) {
            const v6294 = stdlib.sub(v2547, v5960);
            const v6296 = stdlib.Array_set(v2546, '0', v6294);
            const v6297 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6296);
            sim_r.txns.push({
              kind: 'from',
              to: v2853,
              tok: v2457
              });
            const v6300 = stdlib.eq(v5963, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
            if (v6300) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2853, ctc1, undefined /* Nothing */);
              const v6302 = v2469.keepGoing;
              const v6303 = v2469.percent;
              const v6312 = stdlib.safeAdd(v2541, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
              const v6313 = stdlib.safeSub(v2542, v5960);
              const v6314 = stdlib.safeSub(v2524, v5960);
              const v6315 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6316 = stdlib.safeAdd(v2540, v5960);
              const v6317 = {
                bal: v6313,
                keepGoing: v6302,
                percent: v6303,
                totalCurrentAllocatoinToAllUsers: v6314,
                totalFundsDeposited: v2545,
                total_amount_claimed: v6316,
                total_rewards_allcoated: v2543,
                total_users_claim: v6315,
                usersNo: v6312
                };
              const v12476 = v6317;
              const v12478 = v6297;
              const v12479 = v2473;
              const v12480 = v6317.keepGoing;
              if (v12480) {
                const v12481 = v6317.totalCurrentAllocatoinToAllUsers;
                const v12482 = v6317.total_users_claim;
                const v12483 = v6317.total_amount_claimed;
                const v12484 = v6317.usersNo;
                const v12485 = v6317.bal;
                const v12486 = v6317.total_rewards_allcoated;
                const v12487 = v6317.totalFundsDeposited;
                const v12488 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12489 = v12488[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12495 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12496 = v12495[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: v2457
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2457
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6319 = stdlib.safeSub(v5963, v5960);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2853, ctc1, v6319);
              const v6321 = v2469.keepGoing;
              const v6322 = v2469.percent;
              const v6331 = stdlib.safeAdd(v2541, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
              const v6332 = stdlib.safeSub(v2542, v5960);
              const v6333 = stdlib.safeSub(v2524, v5960);
              const v6334 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6335 = stdlib.safeAdd(v2540, v5960);
              const v6336 = {
                bal: v6332,
                keepGoing: v6321,
                percent: v6322,
                totalCurrentAllocatoinToAllUsers: v6333,
                totalFundsDeposited: v2545,
                total_amount_claimed: v6335,
                total_rewards_allcoated: v2543,
                total_users_claim: v6334,
                usersNo: v6331
                };
              const v12497 = v6336;
              const v12499 = v6297;
              const v12500 = v2473;
              const v12501 = v6336.keepGoing;
              if (v12501) {
                const v12502 = v6336.totalCurrentAllocatoinToAllUsers;
                const v12503 = v6336.total_users_claim;
                const v12504 = v6336.total_amount_claimed;
                const v12505 = v6336.usersNo;
                const v12506 = v6336.bal;
                const v12507 = v6336.total_rewards_allcoated;
                const v12508 = v6336.totalFundsDeposited;
                const v12509 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12510 = v12509[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12516 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12517 = v12516[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: v2457
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2457
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v2853, ctc0, null);
            const v6245 = stdlib.sub(v2547, v5960);
            const v6247 = stdlib.Array_set(v2546, '0', v6245);
            const v6248 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6247);
            sim_r.txns.push({
              kind: 'from',
              to: v2853,
              tok: v2457
              });
            const v6251 = stdlib.eq(v5963, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
            if (v6251) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2853, ctc1, undefined /* Nothing */);
              const v6253 = v2469.keepGoing;
              const v6254 = v2469.percent;
              const v6264 = stdlib.safeSub(v2542, v5960);
              const v6265 = stdlib.safeSub(v2524, v5960);
              const v6266 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6267 = stdlib.safeAdd(v2540, v5960);
              const v6268 = {
                bal: v6264,
                keepGoing: v6253,
                percent: v6254,
                totalCurrentAllocatoinToAllUsers: v6265,
                totalFundsDeposited: v2545,
                total_amount_claimed: v6267,
                total_rewards_allcoated: v2543,
                total_users_claim: v6266,
                usersNo: v2541
                };
              const v12518 = v6268;
              const v12520 = v6248;
              const v12521 = v2473;
              const v12522 = v6268.keepGoing;
              if (v12522) {
                const v12523 = v6268.totalCurrentAllocatoinToAllUsers;
                const v12524 = v6268.total_users_claim;
                const v12525 = v6268.total_amount_claimed;
                const v12526 = v6268.usersNo;
                const v12527 = v6268.bal;
                const v12528 = v6268.total_rewards_allcoated;
                const v12529 = v6268.totalFundsDeposited;
                const v12530 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12531 = v12530[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12537 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12538 = v12537[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: v2457
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2457
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6270 = stdlib.safeSub(v5963, v5960);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2853, ctc1, v6270);
              const v6272 = v2469.keepGoing;
              const v6273 = v2469.percent;
              const v6283 = stdlib.safeSub(v2542, v5960);
              const v6284 = stdlib.safeSub(v2524, v5960);
              const v6285 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6286 = stdlib.safeAdd(v2540, v5960);
              const v6287 = {
                bal: v6283,
                keepGoing: v6272,
                percent: v6273,
                totalCurrentAllocatoinToAllUsers: v6284,
                totalFundsDeposited: v2545,
                total_amount_claimed: v6286,
                total_rewards_allcoated: v2543,
                total_users_claim: v6285,
                usersNo: v2541
                };
              const v12539 = v6287;
              const v12541 = v6248;
              const v12542 = v2473;
              const v12543 = v6287.keepGoing;
              if (v12543) {
                const v12544 = v6287.totalCurrentAllocatoinToAllUsers;
                const v12545 = v6287.total_users_claim;
                const v12546 = v6287.total_amount_claimed;
                const v12547 = v6287.usersNo;
                const v12548 = v6287.bal;
                const v12549 = v6287.total_rewards_allcoated;
                const v12550 = v6287.totalFundsDeposited;
                const v12551 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12552 = v12551[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12558 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12559 = v12558[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2455,
                  tok: v2457
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2457
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
          const v6357 = v2854[1];
          
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5857 = v2854[1];
      undefined /* setApiDetails */;
      const v5960 = v5857[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
      const v5962 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2853, ctc1), null);
      const v5963 = stdlib.fromSome(v5962, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
      const v5966 = stdlib.le(v5960, v2547);
      stdlib.assert(v5966, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5968 = stdlib.ge(v5963, v5960);
      stdlib.assert(v5968, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      ;
      const v6199 = v5857[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
      const v6214 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v2853, ctc0), null);
      const v6215 = {
        None: 0,
        Some: 1
        }[v6214[0]];
      const v6216 = stdlib.eq(v6215, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6217 = [v2853, v6199];
      const v6218 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v6217, ctc3), null);
      const v6219 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6220 = stdlib.fromSome(v6218, v6219);
      const v6222 = v6220.claimed;
      const v6223 = v6220.rewards;
      const v6225 = stdlib.safeAdd(v6222, v5960);
      const v6227 = stdlib.safeSub(v6223, v5960);
      const v6228 = {
        claimed: v6225,
        rewards: v6227
        };
      await stdlib.mapSet(map1, ctc22, v6217, ctc3, v6228);
      const v6229 = true;
      const v6230 = await txn1.getOutput('User_claim', 'v6229', ctc9, v6229);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v5857, v6230), {
          at: './token_v2.rsh:276:11:application',
          fs: ['at ./token_v2.rsh:276:11:application call to [unknown function] (defined at: ./token_v2.rsh:276:11:function exp)', 'at ./token_v2.rsh:295:14:application call to "ret" (defined at: ./token_v2.rsh:282:15:function exp)', 'at ./token_v2.rsh:282:15:application call to [unknown function] (defined at: ./token_v2.rsh:282:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v6237 = {
        addr: v2853,
        amount: v5960,
        projectName: v2456
        };
      null;
      if (v6216) {
        const v6294 = stdlib.sub(v2547, v5960);
        const v6296 = stdlib.Array_set(v2546, '0', v6294);
        const v6297 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6296);
        ;
        const v6300 = stdlib.eq(v5963, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
        if (v6300) {
          await stdlib.mapSet(map0, ctc6, v2853, ctc1, undefined /* Nothing */);
          const v6302 = v2469.keepGoing;
          const v6303 = v2469.percent;
          const v6312 = stdlib.safeAdd(v2541, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
          const v6313 = stdlib.safeSub(v2542, v5960);
          const v6314 = stdlib.safeSub(v2524, v5960);
          const v6315 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6316 = stdlib.safeAdd(v2540, v5960);
          const v6317 = {
            bal: v6313,
            keepGoing: v6302,
            percent: v6303,
            totalCurrentAllocatoinToAllUsers: v6314,
            totalFundsDeposited: v2545,
            total_amount_claimed: v6316,
            total_rewards_allcoated: v2543,
            total_users_claim: v6315,
            usersNo: v6312
            };
          const v12476 = v6317;
          const v12478 = v6297;
          const v12479 = v2473;
          const v12480 = v6317.keepGoing;
          if (v12480) {
            const v12481 = v6317.totalCurrentAllocatoinToAllUsers;
            const v12482 = v6317.total_users_claim;
            const v12483 = v6317.total_amount_claimed;
            const v12484 = v6317.usersNo;
            const v12485 = v6317.bal;
            const v12486 = v6317.total_rewards_allcoated;
            const v12487 = v6317.totalFundsDeposited;
            const v12488 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12489 = v12488[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12495 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12496 = v12495[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v6319 = stdlib.safeSub(v5963, v5960);
          await stdlib.mapSet(map0, ctc6, v2853, ctc1, v6319);
          const v6321 = v2469.keepGoing;
          const v6322 = v2469.percent;
          const v6331 = stdlib.safeAdd(v2541, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
          const v6332 = stdlib.safeSub(v2542, v5960);
          const v6333 = stdlib.safeSub(v2524, v5960);
          const v6334 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6335 = stdlib.safeAdd(v2540, v5960);
          const v6336 = {
            bal: v6332,
            keepGoing: v6321,
            percent: v6322,
            totalCurrentAllocatoinToAllUsers: v6333,
            totalFundsDeposited: v2545,
            total_amount_claimed: v6335,
            total_rewards_allcoated: v2543,
            total_users_claim: v6334,
            usersNo: v6331
            };
          const v12497 = v6336;
          const v12499 = v6297;
          const v12500 = v2473;
          const v12501 = v6336.keepGoing;
          if (v12501) {
            const v12502 = v6336.totalCurrentAllocatoinToAllUsers;
            const v12503 = v6336.total_users_claim;
            const v12504 = v6336.total_amount_claimed;
            const v12505 = v6336.usersNo;
            const v12506 = v6336.bal;
            const v12507 = v6336.total_rewards_allcoated;
            const v12508 = v6336.totalFundsDeposited;
            const v12509 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12510 = v12509[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12516 = v6297[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12517 = v12516[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map3, ctc6, v2853, ctc0, null);
        const v6245 = stdlib.sub(v2547, v5960);
        const v6247 = stdlib.Array_set(v2546, '0', v6245);
        const v6248 = stdlib.Array_set(v2472, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6247);
        ;
        const v6251 = stdlib.eq(v5963, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
        if (v6251) {
          await stdlib.mapSet(map0, ctc6, v2853, ctc1, undefined /* Nothing */);
          const v6253 = v2469.keepGoing;
          const v6254 = v2469.percent;
          const v6264 = stdlib.safeSub(v2542, v5960);
          const v6265 = stdlib.safeSub(v2524, v5960);
          const v6266 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6267 = stdlib.safeAdd(v2540, v5960);
          const v6268 = {
            bal: v6264,
            keepGoing: v6253,
            percent: v6254,
            totalCurrentAllocatoinToAllUsers: v6265,
            totalFundsDeposited: v2545,
            total_amount_claimed: v6267,
            total_rewards_allcoated: v2543,
            total_users_claim: v6266,
            usersNo: v2541
            };
          const v12518 = v6268;
          const v12520 = v6248;
          const v12521 = v2473;
          const v12522 = v6268.keepGoing;
          if (v12522) {
            const v12523 = v6268.totalCurrentAllocatoinToAllUsers;
            const v12524 = v6268.total_users_claim;
            const v12525 = v6268.total_amount_claimed;
            const v12526 = v6268.usersNo;
            const v12527 = v6268.bal;
            const v12528 = v6268.total_rewards_allcoated;
            const v12529 = v6268.totalFundsDeposited;
            const v12530 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12531 = v12530[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12537 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12538 = v12537[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v6270 = stdlib.safeSub(v5963, v5960);
          await stdlib.mapSet(map0, ctc6, v2853, ctc1, v6270);
          const v6272 = v2469.keepGoing;
          const v6273 = v2469.percent;
          const v6283 = stdlib.safeSub(v2542, v5960);
          const v6284 = stdlib.safeSub(v2524, v5960);
          const v6285 = stdlib.safeAdd(v2539, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6286 = stdlib.safeAdd(v2540, v5960);
          const v6287 = {
            bal: v6283,
            keepGoing: v6272,
            percent: v6273,
            totalCurrentAllocatoinToAllUsers: v6284,
            totalFundsDeposited: v2545,
            total_amount_claimed: v6286,
            total_rewards_allcoated: v2543,
            total_users_claim: v6285,
            usersNo: v2541
            };
          const v12539 = v6287;
          const v12541 = v6248;
          const v12542 = v2473;
          const v12543 = v6287.keepGoing;
          if (v12543) {
            const v12544 = v6287.totalCurrentAllocatoinToAllUsers;
            const v12545 = v6287.total_users_claim;
            const v12546 = v6287.total_amount_claimed;
            const v12547 = v6287.usersNo;
            const v12548 = v6287.bal;
            const v12549 = v6287.total_rewards_allcoated;
            const v12550 = v6287.totalFundsDeposited;
            const v12551 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12552 = v12551[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12558 = v6248[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12559 = v12558[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
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
  
  
  const [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2689 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:325:26:application call to [unknown function] (defined at: ./token_v2.rsh:325:26:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_optin0_233" (defined at: ./token_v2.rsh:325:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2693 = ['User_optin0_233', v2689];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2455, v2456, v2457, v2469, v2472, v2473, v2524, v2539, v2540, v2541, v2542, v2543, v2545, v2546, v2547, v2693],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:327:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:327:14:decimal', stdlib.UInt_max, '0'), v2457]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
      
      switch (v2854[0]) {
        case 'Admin_addAdmin0_233': {
          const v2857 = v2854[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3357 = v2854[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3857 = v2854[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4357 = v2854[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4857 = v2854[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5357 = v2854[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5857 = v2854[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6357 = v2854[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v2853, ctc0, null);
          const v6840 = null;
          const v6841 = await txn1.getOutput('User_optin', 'v6840', ctc0, v6840);
          
          const v6847 = v2469.keepGoing;
          const v6848 = v2469.percent;
          const v6855 = {
            bal: v2542,
            keepGoing: v6847,
            percent: v6848,
            totalCurrentAllocatoinToAllUsers: v2524,
            totalFundsDeposited: v2545,
            total_amount_claimed: v2540,
            total_rewards_allcoated: v2543,
            total_users_claim: v2539,
            usersNo: v2541
            };
          const v12791 = v6855;
          const v12793 = v2472;
          const v12794 = v2473;
          const v12795 = v6855.keepGoing;
          if (v12795) {
            const v12796 = v6855.totalCurrentAllocatoinToAllUsers;
            const v12797 = v6855.total_users_claim;
            const v12798 = v6855.total_amount_claimed;
            const v12799 = v6855.usersNo;
            const v12800 = v6855.bal;
            const v12801 = v6855.total_rewards_allcoated;
            const v12802 = v6855.totalFundsDeposited;
            const v12803 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12804 = v12803[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v12810 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12811 = v12810[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2455,
              tok: v2457
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2457
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
  const {data: [v2854], secs: v2856, time: v2855, didSend: v1646, from: v2853 } = txn1;
  switch (v2854[0]) {
    case 'Admin_addAdmin0_233': {
      const v2857 = v2854[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3357 = v2854[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3857 = v2854[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4357 = v2854[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4857 = v2854[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5357 = v2854[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5857 = v2854[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6357 = v2854[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map4, ctc6, v2853, ctc0, null);
      const v6840 = null;
      const v6841 = await txn1.getOutput('User_optin', 'v6840', ctc0, v6840);
      if (v1646) {
        stdlib.protect(ctc0, await interact.out(v6357, v6841), {
          at: './token_v2.rsh:325:11:application',
          fs: ['at ./token_v2.rsh:325:11:application call to [unknown function] (defined at: ./token_v2.rsh:325:11:function exp)', 'at ./token_v2.rsh:330:14:application call to "ret" (defined at: ./token_v2.rsh:328:15:function exp)', 'at ./token_v2.rsh:328:15:application call to [unknown function] (defined at: ./token_v2.rsh:328:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6847 = v2469.keepGoing;
      const v6848 = v2469.percent;
      const v6855 = {
        bal: v2542,
        keepGoing: v6847,
        percent: v6848,
        totalCurrentAllocatoinToAllUsers: v2524,
        totalFundsDeposited: v2545,
        total_amount_claimed: v2540,
        total_rewards_allcoated: v2543,
        total_users_claim: v2539,
        usersNo: v2541
        };
      const v12791 = v6855;
      const v12793 = v2472;
      const v12794 = v2473;
      const v12795 = v6855.keepGoing;
      if (v12795) {
        const v12796 = v6855.totalCurrentAllocatoinToAllUsers;
        const v12797 = v6855.total_users_claim;
        const v12798 = v6855.total_amount_claimed;
        const v12799 = v6855.usersNo;
        const v12800 = v6855.bal;
        const v12801 = v6855.total_rewards_allcoated;
        const v12802 = v6855.totalFundsDeposited;
        const v12803 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v12804 = v12803[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v12810 = v2472[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v12811 = v12810[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
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
  appApproval: `CCALAAEIAxDUkwHUeijUxQGgjQYEJgYAAQABAQECAQQBAzEYQQlBKGRJIls1ASRbNQIpZCpkUIIWBAJfdMcEDbOGvAQTblc7BBp3QuUEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEgk+QIEbuR2FAR4Stk3BHr+yG0Eis1nCAS79c2OBMfCnNUE3lcEZATtRtumBPMneAQE+W9s4AT5cw4LBPquyLA2GgCOFgBUAkwBdwh1AQYCbgGbAhwBNwGrAIkB6wG7AcsB2wFHCIUA3wDJAfsAawABADYaATULJK8pNAtQIQSvUFA1CyU0ARJEiApuNAsiWzUMNAtXCDE1DYAEVQtlgzQMFlA0DVCwNAyICuU0DSJVjQgJ7AnvCfIIXwhiCGUIbwh5Qv+sNhoBFzULJK8qNAsWUCEHr1BQNQtC/6g2GgE2GgIXNQs1DCSvKzQMNAsWUFAkr1BQNQtC/4qAOQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9KNhoBNQskrycENAtQIQSvUFA1C0L/NDYaATYaAhc2GgMXNQs1DDUNJK+AAQU0DTQMFlA0CxZQUFA1C0L/DTYaATULNAElEkSICXYoKCs0C1CICWIiVSMSFlEHCDUEMRkiEkSABBUffHU0BFCwI0M0ASUSRIgJSjQOFjUEQv/fNhoBNhoCFzULNQw0ASUSRIgJLyEEryghBK8qNAw0CxZQUIgJEogJi1cACDUEQv+vNhoBNQs0ASUSRIgJBSgoJwQ0C1CICPAiVSMSFlEHCDUEQv+LNAElEkSICOY0FhY1BEL/ezQBJRJEiAjWNBQWNQRC/2s0ASUSRIgIxjQVFjUEQv9bNAElEkSICLY0FhY1BEL/SzQBJRJEiAimNBAWNQRC/zs0ASUSRIgIljQTFjUEQv8rNhoBNQs0ASUSRIgIgSSvKCSvKTQLUIgIaogI4zUEQv8KNhoBNhoCFzULNQw0ASUSRIgIWiEEryghBK8qNAw0CxZQUIgIPYgItlcICDUEQv7aNhoBFzYaAhc1CzUMJK+AAQY0DBY0CxZQUDIDUFA1C0L9pYA5AAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/WUxADQdEigoKzEAUIgHwiJVIxIRRCEGKzQNVwEgUCiICB0oNQuACAAAAAAAAAvANAtQsDQLNQQ0EhY0GlcIAVA0GlcJEVA0FhZQNBAWUDQUFlA0ERZQNBUWUDQTFlAyBjUZNRo0GlcIARdBBsk0GoEaWzUWNBqBOls1FTQagSpbNRQ0GoFCWzUTNBoiWzUSNBqBMls1ETQagSJbNRA0GFcAEUk1DyJbNQ40HTQcUDQbFlA0GlA0GFA0FxZQNBYWUDQVFlA0FBZQNBMWUDQSFlA0ERZQNBAWUDQPUDQOFlAlMgY1AjUBKUsBVwB/ZypMV397Zyg0ARY0AhZQZzEZIhJEiAd5NANA/X9C/XI0DSNbNQsxADQdEigoKzEAUIgGsSJVIxIRRDQLNBuIB1woNQyACAAAAAAAAA3PNAxQsDQMNQQ0EjQLCBY0GlcIAVA0GlcJEVA0FhZQNBA0CwgWUDQUFlA0ERZQNBUWUDQTFlAyBjQYNA80DjQLCBZcAFwANRg1GTUaQv7cNAuBIFs1DDEANB0SKCgrMQBQiAY0IlUjEhFENAw0Dg5EIQUpNAtXACBQNAwWiAaHKDULgAgAAAAAAAAP5jQLULA0CzUENBIWNBpXCAFQNBpXCRFQNBYWUDQQFlA0FBZQNBEWUDQVFlA0ExZQMgY1GTUaQv5nNB0xABJENBYiEkQoNQuACAAAAAAAABHyNAtQsDQLNQQ0EhYpUDQaVwkRUDQWFlA0EBZQNBQWUDQRFlA0FRZQNBMWUDIGNRk1GkL+GzEANB0SRCEGKzQNVwEgUIgGCSg1C4AIAAAAAAAAE/00C1CwNAs1BDQSFjQaVwgBUDQaVwkRUDQWFlA0EBZQNBQWUDQRFlA0FRZQNBMWUDIGNRk1GkL9xDQLVwAgNR80CyEHW0k1HjQODzUNNA40HgkiD0Q0DRRENBY0Hgg1DDQONAwPRCgoJwQ0H1CIBPoiVSMSRCI0HjQNTTUWNBg0DzQONBYIFlwAXAA1DTQWNBuIBY40DVcAESJbNQ40HjQODzUPNA40HgkiD0Q0DxRENA40DA9ENB80C1cgCFA1DiEEryghBK8qNA5QiASciAUVNQshCCo0DlA0C1cACDQLJFs0HggWUIgE7iEFKTQfUCSvKCSvKTQfUIgEbogE5xc0HggWiATRIzULgAgAAAAAAAAWKjQLFlEHCFCwNAsWUQcINQQ0D0ECkDQSNB4INQs0CxY0GlcIAVA0GlcJEVA0DBZQNBAWUDQUFlA0ERZQNBUWUDQTFlAyBjQNNRg1GTUaQvyZNAsiWzUeJK8oJK8pMQBQiAP0iARtFzUNNB40Dg5ENA00Hg9EMQA0C1cICFA1DCEEryghBK8qNAxQiAPKiARDNQshCCo0DFA0CyJbNB4IFjQLJFs0HgkWUIgEGSM1C4AIAAAAAAAAGFU0CxZRBwhQsDQLFlEHCDUEMQA0HhZQNBxQNQuABJvIVFA0C1CwKCgnBTEAUIgDbyJVIxJBAb40GDQPNA40HgkWXABcADULNB40GzEAiAPUNA1AAhEhBSkxAFCIA9Q0EjQeCRY0GlcIAVA0GlcJEVA0FjQeCRZQNBAWUDQUNB4IFlA0ERZQNBUjCBZQNBMjCBZQMgY0CzUYNRk1GkL7kyEGJwQxAFAoiANjKDULgAgAAAAAAAAauDQLULA0CzUENBIWNBpXCAFQNBpXCRFQNBYWUDQQFlA0FBZQNBEWUDQVFlA0ExZQMgY1GTUaQvtDMQA1HTQLIls1DDQLVwgeNRw0C4EmWzUbgAQoS8fwNAwWUDQcUDQbFlCwNAyIAyOBEa81CyEJiAMEIjQbMgqIAvSASgAAAAAAAAAAAQAAAAAAAAAFAAAAAAAAAGQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgY0C0lXABEkr1wAXAAiNRc1GDUZNRpC+pyIAqQhCYgCjjYaATULQv9JiAKUNhoBNQtC94MiMTQSRCUxNRJEIjE2EkQiMTcSRIgCdYH6Aa8iIkL630L790L8QDQNVwEwNQtC/I00DVcBEDULQv2uQv6xNBI1C0L9cCEGJwUxAFAoiAINNBg0DzQONB4JFlwAXAA1CzQeNBsxAIgCCzQNQACYIQUpMQBQiAILNBI0HgkWNBpXCAFQNBpXCRFQNBY0HgkWUDQQFlA0FDQeCBZQNBEWUDQVIwgWUDQTFlAyBjQLNRg1GTUaQvnMIQUpMQBQNA00HgkWiAGYNBI0HgkWNBpXCAFQNBpXCRFQNBY0HgkWUDQQFlA0FDQeCBZQNBEWUDQVIwgWUDQTIwgWUDIGNAs1GDUZNRpC+XwhBSkxAFA0DTQeCRaIAUg0EjQeCRY0GlcIAVA0GlcJEVA0FjQeCRZQNBAWUDQUNB4IFlA0ERZQNBUjCBZQNBMWUDIGNAs1GDUZNRpC+S40FzQdiAEdNBhXABEiWzQbNB2IAQsiNBsyCjIJiAFXMRmBBRJEiAEfMgpgMgp4CUk1BjIKiADtQvmUSEy/SIkisgEjshCyB7IIs4kisgEhCrIQshSyEbISs4lC+G5C+XY0DVcBKDULQvnoSIlMCUk1BjIJiACuiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEib5JFlEHCEUETVCJSVcAIDUdSVcgHjUcSYE+WzUbSVdGSjUaSVeQETUYSYGhAVs1F0mBqQFbNRZJgbEBWzUVSYG5AVs1FEmBwQFbNRNJgckBWzUSSYHRAVs1EUmB2QFbNRBJV+ERNQ+B8gFbNQ6JTEm9QP8rSwOIABRC/yNJVwEATCJVTYmxQv8nsUL/FzQGCDUGibwiTgJNNAcINQeJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/xxC/yQxFjQAIwhJNQAJRwM4FDIKEkQ4ECEKEkQ4EU8CEkQ4EhJEibGyFUL+zw==`,
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
    1586: `893`,
    1587: `893`,
    1588: `894`,
    1589: `894`,
    159: `21`,
    1590: `895`,
    1591: `896`,
    1592: `896`,
    1593: `897`,
    1594: `897`,
    1595: `898`,
    1596: `898`,
    1597: `899`,
    1598: `900`,
    1599: `901`,
    16: `2`,
    160: `21`,
    1600: `902`,
    1601: `910`,
    1602: `910`,
    1603: `911`,
    1604: `912`,
    1605: `920`,
    1606: `920`,
    1607: `921`,
    1608: `921`,
    1609: `922`,
    161: `21`,
    1610: `923`,
    1611: `923`,
    1612: `924`,
    1613: `924`,
    1614: `925`,
    1615: `925`,
    1616: `926`,
    1617: `927`,
    1618: `936`,
    1619: `937`,
    162: `21`,
    1620: `938`,
    1621: `938`,
    1622: `939`,
    1623: `939`,
    1624: `940`,
    1625: `941`,
    1626: `941`,
    1627: `941`,
    1628: `942`,
    1629: `943`,
    163: `21`,
    1630: `944`,
    1631: `945`,
    1632: `946`,
    1633: `954`,
    1634: `955`,
    1635: `955`,
    1636: `956`,
    1637: `956`,
    1638: `957`,
    1639: `958`,
    164: `21`,
    1640: `958`,
    1641: `959`,
    1642: `959`,
    1643: `960`,
    1644: `960`,
    1645: `961`,
    1646: `961`,
    1647: `962`,
    1648: `962`,
    1649: `963`,
    165: `21`,
    1650: `964`,
    1651: `965`,
    1652: `965`,
    1653: `966`,
    1654: `966`,
    1655: `967`,
    1656: `967`,
    1657: `968`,
    1658: `968`,
    1659: `969`,
    166: `21`,
    1660: `969`,
    1661: `970`,
    1662: `970`,
    1663: `970`,
    1664: `973`,
    1665: `973`,
    1666: `974`,
    1667: `974`,
    1668: `974`,
    1669: `975`,
    167: `22`,
    1670: `976`,
    1671: `977`,
    1672: `977`,
    1673: `978`,
    1674: `978`,
    1675: `979`,
    1676: `979`,
    1677: `980`,
    1678: `981`,
    1679: `981`,
    168: `22`,
    1680: `982`,
    1681: `982`,
    1682: `983`,
    1683: `983`,
    1684: `984`,
    1685: `985`,
    1686: `986`,
    1687: `987`,
    1688: `992`,
    1689: `992`,
    169: `22`,
    1690: `993`,
    1691: `994`,
    1692: `999`,
    1693: `999`,
    1694: `1000`,
    1695: `1000`,
    1696: `1001`,
    1697: `1002`,
    1698: `1007`,
    1699: `1007`,
    17: `2`,
    170: `23`,
    1700: `1008`,
    1701: `1008`,
    1702: `1009`,
    1703: `1009`,
    1704: `1009`,
    1705: `1010`,
    1706: `1011`,
    1707: `1011`,
    1708: `1012`,
    1709: `1012`,
    171: `23`,
    1710: `1013`,
    1711: `1015`,
    1712: `1016`,
    1713: `1016`,
    1714: `1017`,
    1715: `1018`,
    1716: `1019`,
    1717: `1019`,
    1718: `1020`,
    1719: `1021`,
    172: `23`,
    1720: `1021`,
    1721: `1021`,
    1722: `1022`,
    1723: `1022`,
    1724: `1022`,
    1725: `1023`,
    1726: `1023`,
    1727: `1024`,
    1728: `1024`,
    1729: `1025`,
    173: `23`,
    1730: `1026`,
    1731: `1026`,
    1732: `1027`,
    1733: `1028`,
    1734: `1028`,
    1735: `1029`,
    1736: `1029`,
    1737: `1029`,
    1738: `1030`,
    1739: `1030`,
    174: `23`,
    1740: `1031`,
    1741: `1032`,
    1742: `1033`,
    1743: `1033`,
    1744: `1034`,
    1745: `1035`,
    1746: `1036`,
    1747: `1037`,
    1748: `1037`,
    1749: `1037`,
    175: `23`,
    1750: `1039`,
    1751: `1039`,
    1752: `1040`,
    1753: `1041`,
    1754: `1041`,
    1755: `1042`,
    1756: `1043`,
    1757: `1044`,
    1758: `1045`,
    1759: `1046`,
    176: `23`,
    1760: `1047`,
    1761: `1048`,
    1762: `1049`,
    1763: `1049`,
    1764: `1050`,
    1765: `1051`,
    1766: `1051`,
    1767: `1051`,
    1768: `1052`,
    1769: `1052`,
    177: `23`,
    1770: `1052`,
    1771: `1053`,
    1772: `1054`,
    1773: `1054`,
    1774: `1055`,
    1775: `1056`,
    1776: `1057`,
    1777: `1057`,
    1778: `1057`,
    1779: `1058`,
    178: `23`,
    1780: `1059`,
    1781: `1059`,
    1782: `1060`,
    1783: `1060`,
    1784: `1060`,
    1785: `1060`,
    1786: `1060`,
    1787: `1060`,
    1788: `1060`,
    1789: `1060`,
    179: `23`,
    1790: `1060`,
    1791: `1060`,
    1792: `1061`,
    1793: `1061`,
    1794: `1062`,
    1795: `1063`,
    1796: `1063`,
    1797: `1063`,
    1798: `1064`,
    1799: `1065`,
    18: `2`,
    180: `23`,
    1800: `1066`,
    1801: `1066`,
    1802: `1067`,
    1803: `1068`,
    1804: `1068`,
    1805: `1068`,
    1806: `1069`,
    1807: `1069`,
    1808: `1070`,
    1809: `1070`,
    181: `23`,
    1810: `1071`,
    1811: `1071`,
    1812: `1071`,
    1813: `1072`,
    1814: `1072`,
    1815: `1073`,
    1816: `1073`,
    1817: `1074`,
    1818: `1075`,
    1819: `1075`,
    182: `23`,
    1820: `1077`,
    1821: `1077`,
    1822: `1078`,
    1823: `1079`,
    1824: `1079`,
    1825: `1080`,
    1826: `1080`,
    1827: `1080`,
    1828: `1081`,
    1829: `1082`,
    183: `23`,
    1830: `1082`,
    1831: `1083`,
    1832: `1083`,
    1833: `1083`,
    1834: `1084`,
    1835: `1085`,
    1836: `1085`,
    1837: `1086`,
    1838: `1087`,
    1839: `1088`,
    184: `23`,
    1840: `1088`,
    1841: `1089`,
    1842: `1090`,
    1843: `1091`,
    1844: `1091`,
    1845: `1092`,
    1846: `1093`,
    1847: `1094`,
    1848: `1094`,
    1849: `1095`,
    185: `23`,
    1850: `1096`,
    1851: `1097`,
    1852: `1097`,
    1853: `1098`,
    1854: `1099`,
    1855: `1100`,
    1856: `1100`,
    1857: `1101`,
    1858: `1102`,
    1859: `1103`,
    186: `23`,
    1860: `1103`,
    1861: `1104`,
    1862: `1104`,
    1863: `1105`,
    1864: `1105`,
    1865: `1106`,
    1866: `1106`,
    1867: `1107`,
    1868: `1107`,
    1869: `1108`,
    187: `23`,
    1870: `1108`,
    1871: `1108`,
    1872: `1110`,
    1873: `1110`,
    1874: `1111`,
    1875: `1112`,
    1876: `1113`,
    1877: `1113`,
    1878: `1114`,
    1879: `1115`,
    188: `23`,
    1880: `1117`,
    1881: `1118`,
    1882: `1119`,
    1883: `1120`,
    1884: `1121`,
    1885: `1121`,
    1886: `1122`,
    1887: `1123`,
    1888: `1123`,
    1889: `1123`,
    189: `23`,
    1890: `1124`,
    1891: `1124`,
    1892: `1124`,
    1893: `1125`,
    1894: `1126`,
    1895: `1126`,
    1896: `1127`,
    1897: `1127`,
    1898: `1128`,
    1899: `1128`,
    19: `2`,
    190: `23`,
    1900: `1129`,
    1901: `1130`,
    1902: `1138`,
    1903: `1138`,
    1904: `1139`,
    1905: `1139`,
    1906: `1140`,
    1907: `1141`,
    1908: `1149`,
    1909: `1149`,
    191: `23`,
    1910: `1150`,
    1911: `1150`,
    1912: `1151`,
    1913: `1151`,
    1914: `1151`,
    1915: `1152`,
    1916: `1153`,
    1917: `1153`,
    1918: `1154`,
    1919: `1154`,
    192: `23`,
    1920: `1155`,
    1921: `1157`,
    1922: `1158`,
    1923: `1158`,
    1924: `1159`,
    1925: `1160`,
    1926: `1161`,
    1927: `1161`,
    1928: `1162`,
    1929: `1163`,
    193: `23`,
    1930: `1163`,
    1931: `1163`,
    1932: `1164`,
    1933: `1164`,
    1934: `1164`,
    1935: `1165`,
    1936: `1165`,
    1937: `1166`,
    1938: `1166`,
    1939: `1167`,
    194: `23`,
    1940: `1168`,
    1941: `1168`,
    1942: `1169`,
    1943: `1170`,
    1944: `1170`,
    1945: `1171`,
    1946: `1172`,
    1947: `1173`,
    1948: `1173`,
    1949: `1174`,
    195: `23`,
    1950: `1175`,
    1951: `1176`,
    1952: `1176`,
    1953: `1177`,
    1954: `1178`,
    1955: `1179`,
    1956: `1179`,
    1957: `1180`,
    1958: `1181`,
    1959: `1182`,
    196: `23`,
    1960: `1183`,
    1961: `1183`,
    1962: `1183`,
    1963: `1184`,
    1964: `1185`,
    1965: `1185`,
    1966: `1186`,
    1967: `1186`,
    1968: `1186`,
    1969: `1186`,
    197: `23`,
    1970: `1186`,
    1971: `1186`,
    1972: `1186`,
    1973: `1186`,
    1974: `1186`,
    1975: `1186`,
    1976: `1187`,
    1977: `1187`,
    1978: `1188`,
    1979: `1189`,
    198: `23`,
    1980: `1189`,
    1981: `1189`,
    1982: `1190`,
    1983: `1191`,
    1984: `1192`,
    1985: `1192`,
    1986: `1193`,
    1987: `1194`,
    1988: `1194`,
    1989: `1194`,
    199: `23`,
    1990: `1195`,
    1991: `1195`,
    1992: `1196`,
    1993: `1196`,
    1994: `1197`,
    1995: `1197`,
    1996: `1198`,
    1997: `1199`,
    1998: `1200`,
    1999: `1200`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1201`,
    2001: `1202`,
    2002: `1202`,
    2003: `1203`,
    2004: `1203`,
    2005: `1203`,
    2006: `1203`,
    2007: `1203`,
    2008: `1203`,
    2009: `1204`,
    201: `23`,
    2010: `1204`,
    2011: `1205`,
    2012: `1206`,
    2013: `1209`,
    2014: `1210`,
    2015: `1211`,
    2016: `1211`,
    2017: `1212`,
    2018: `1212`,
    2019: `1213`,
    202: `23`,
    2020: `1214`,
    2021: `1214`,
    2022: `1214`,
    2023: `1215`,
    2024: `1216`,
    2025: `1217`,
    2026: `1218`,
    2027: `1219`,
    2028: `1219`,
    2029: `1219`,
    203: `23`,
    2030: `1220`,
    2031: `1220`,
    2032: `1221`,
    2033: `1221`,
    2034: `1222`,
    2035: `1222`,
    2036: `1223`,
    2037: `1223`,
    2038: `1224`,
    2039: `1225`,
    204: `23`,
    2040: `1226`,
    2041: `1226`,
    2042: `1227`,
    2043: `1227`,
    2044: `1228`,
    2045: `1228`,
    2046: `1229`,
    2047: `1229`,
    2048: `1231`,
    2049: `1231`,
    205: `23`,
    2050: `1232`,
    2051: `1232`,
    2052: `1233`,
    2053: `1233`,
    2054: `1233`,
    2055: `1234`,
    2056: `1234`,
    2057: `1235`,
    2058: `1235`,
    2059: `1235`,
    206: `23`,
    2060: `1236`,
    2061: `1236`,
    2062: `1237`,
    2063: `1238`,
    2064: `1238`,
    2065: `1239`,
    2066: `1240`,
    2067: `1240`,
    2068: `1240`,
    2069: `1241`,
    207: `23`,
    2070: `1241`,
    2071: `1242`,
    2072: `1242`,
    2073: `1243`,
    2074: `1244`,
    2075: `1245`,
    2076: `1245`,
    2077: `1246`,
    2078: `1246`,
    2079: `1246`,
    208: `23`,
    2080: `1247`,
    2081: `1248`,
    2082: `1248`,
    2083: `1249`,
    2084: `1249`,
    2085: `1249`,
    2086: `1250`,
    2087: `1251`,
    2088: `1251`,
    2089: `1252`,
    209: `23`,
    2090: `1252`,
    2091: `1253`,
    2092: `1254`,
    2093: `1255`,
    2094: `1256`,
    2095: `1256`,
    2096: `1257`,
    2097: `1258`,
    2098: `1259`,
    2099: `1259`,
    21: `2`,
    210: `23`,
    2100: `1260`,
    2101: `1260`,
    2102: `1261`,
    2103: `1262`,
    2104: `1263`,
    2105: `1264`,
    2106: `1264`,
    2107: `1265`,
    2108: `1266`,
    2109: `1267`,
    211: `23`,
    2110: `1267`,
    2111: `1268`,
    2112: `1269`,
    2113: `1270`,
    2114: `1271`,
    2115: `1272`,
    2116: `1272`,
    2117: `1273`,
    2118: `1274`,
    2119: `1275`,
    212: `23`,
    2120: `1276`,
    2121: `1277`,
    2122: `1277`,
    2123: `1278`,
    2124: `1278`,
    2125: `1279`,
    2126: `1279`,
    2127: `1280`,
    2128: `1280`,
    2129: `1281`,
    213: `23`,
    2130: `1281`,
    2131: `1282`,
    2132: `1282`,
    2133: `1282`,
    2134: `1285`,
    2135: `1285`,
    2136: `1286`,
    2137: `1286`,
    2138: `1287`,
    2139: `1287`,
    214: `23`,
    2140: `1288`,
    2141: `1289`,
    2142: `1290`,
    2143: `1290`,
    2144: `1290`,
    2145: `1291`,
    2146: `1292`,
    2147: `1292`,
    2148: `1293`,
    2149: `1293`,
    215: `23`,
    2150: `1293`,
    2151: `1293`,
    2152: `1293`,
    2153: `1293`,
    2154: `1293`,
    2155: `1293`,
    2156: `1293`,
    2157: `1293`,
    2158: `1294`,
    2159: `1294`,
    216: `25`,
    2160: `1295`,
    2161: `1296`,
    2162: `1297`,
    2163: `1297`,
    2164: `1298`,
    2165: `1298`,
    2166: `1299`,
    2167: `1299`,
    2168: `1300`,
    2169: `1301`,
    217: `27`,
    2170: `1301`,
    2171: `1302`,
    2172: `1302`,
    2173: `1302`,
    2174: `1303`,
    2175: `1304`,
    2176: `1304`,
    2177: `1305`,
    2178: `1305`,
    2179: `1305`,
    218: `27`,
    2180: `1306`,
    2181: `1307`,
    2182: `1307`,
    2183: `1308`,
    2184: `1309`,
    2185: `1310`,
    2186: `1310`,
    2187: `1311`,
    2188: `1312`,
    2189: `1313`,
    219: `27`,
    2190: `1313`,
    2191: `1314`,
    2192: `1315`,
    2193: `1316`,
    2194: `1316`,
    2195: `1317`,
    2196: `1318`,
    2197: `1319`,
    2198: `1319`,
    2199: `1320`,
    22: `2`,
    220: `28`,
    2200: `1321`,
    2201: `1322`,
    2202: `1322`,
    2203: `1323`,
    2204: `1324`,
    2205: `1325`,
    2206: `1325`,
    2207: `1326`,
    2208: `1326`,
    2209: `1327`,
    221: `28`,
    2210: `1327`,
    2211: `1328`,
    2212: `1328`,
    2213: `1328`,
    2214: `1330`,
    2215: `1330`,
    2216: `1331`,
    2217: `1331`,
    2218: `1332`,
    2219: `1332`,
    222: `30`,
    2220: `1333`,
    2221: `1334`,
    2222: `1335`,
    2223: `1335`,
    2224: `1336`,
    2225: `1336`,
    2226: `1337`,
    2227: `1337`,
    2228: `1337`,
    2229: `1338`,
    223: `31`,
    2230: `1338`,
    2231: `1339`,
    2232: `1339`,
    2233: `1340`,
    2234: `1340`,
    2235: `1341`,
    2236: `1342`,
    2237: `1342`,
    2238: `1343`,
    2239: `1343`,
    224: `32`,
    2240: `1343`,
    2241: `1343`,
    2242: `1343`,
    2243: `1343`,
    2244: `1344`,
    2245: `1344`,
    2246: `1345`,
    2247: `1346`,
    2248: `1347`,
    2249: `1347`,
    225: `33`,
    2250: `1348`,
    2251: `1349`,
    2252: `1349`,
    2253: `1350`,
    2254: `1351`,
    2255: `1352`,
    2256: `1354`,
    2257: `1354`,
    2258: `1355`,
    2259: `1355`,
    226: `33`,
    2260: `1355`,
    2261: `1356`,
    2262: `1356`,
    2263: `1357`,
    2264: `1358`,
    2265: `1358`,
    2266: `1359`,
    2267: `1359`,
    2268: `1360`,
    2269: `1360`,
    227: `34`,
    2270: `1360`,
    2271: `1361`,
    2272: `1363`,
    2273: `1363`,
    2274: `1364`,
    2275: `1364`,
    2276: `1365`,
    2277: `1365`,
    2278: `1365`,
    2279: `1366`,
    228: `35`,
    2280: `1366`,
    2281: `1366`,
    2282: `1366`,
    2283: `1366`,
    2284: `1366`,
    2285: `1366`,
    2286: `1366`,
    2287: `1366`,
    2288: `1366`,
    2289: `1366`,
    229: `35`,
    2290: `1366`,
    2291: `1366`,
    2292: `1366`,
    2293: `1366`,
    2294: `1366`,
    2295: `1366`,
    2296: `1366`,
    2297: `1366`,
    2298: `1366`,
    2299: `1366`,
    23: `2`,
    230: `36`,
    2300: `1366`,
    2301: `1366`,
    2302: `1366`,
    2303: `1366`,
    2304: `1366`,
    2305: `1366`,
    2306: `1366`,
    2307: `1366`,
    2308: `1366`,
    2309: `1366`,
    231: `37`,
    2310: `1366`,
    2311: `1366`,
    2312: `1366`,
    2313: `1366`,
    2314: `1366`,
    2315: `1366`,
    2316: `1366`,
    2317: `1366`,
    2318: `1366`,
    2319: `1366`,
    232: `38`,
    2320: `1366`,
    2321: `1366`,
    2322: `1366`,
    2323: `1366`,
    2324: `1366`,
    2325: `1366`,
    2326: `1366`,
    2327: `1366`,
    2328: `1366`,
    2329: `1366`,
    233: `39`,
    2330: `1366`,
    2331: `1366`,
    2332: `1366`,
    2333: `1366`,
    2334: `1366`,
    2335: `1366`,
    2336: `1366`,
    2337: `1366`,
    2338: `1366`,
    2339: `1366`,
    234: `39`,
    2340: `1366`,
    2341: `1366`,
    2342: `1366`,
    2343: `1366`,
    2344: `1366`,
    2345: `1366`,
    2346: `1366`,
    2347: `1366`,
    2348: `1366`,
    2349: `1366`,
    235: `41`,
    2350: `1366`,
    2351: `1366`,
    2352: `1366`,
    2353: `1366`,
    2354: `1366`,
    2355: `1367`,
    2356: `1367`,
    2357: `1368`,
    2358: `1368`,
    2359: `1369`,
    236: `42`,
    2360: `1370`,
    2361: `1370`,
    2362: `1370`,
    2363: `1371`,
    2364: `1372`,
    2365: `1373`,
    2366: `1373`,
    2367: `1374`,
    2368: `1374`,
    2369: `1375`,
    237: `42`,
    2370: `1376`,
    2371: `1376`,
    2372: `1377`,
    2373: `1377`,
    2374: `1378`,
    2375: `1378`,
    2376: `1379`,
    2377: `1379`,
    2378: `1380`,
    2379: `1380`,
    238: `43`,
    2380: `1380`,
    2381: `1382`,
    2382: `1382`,
    2383: `1382`,
    2384: `1383`,
    2385: `1383`,
    2386: `1384`,
    2387: `1384`,
    2388: `1384`,
    2389: `1385`,
    239: `44`,
    2390: `1385`,
    2391: `1385`,
    2392: `1386`,
    2393: `1386`,
    2394: `1387`,
    2395: `1387`,
    2396: `1387`,
    2397: `1389`,
    2398: `1389`,
    2399: `1389`,
    24: `2`,
    240: `45`,
    2400: `1390`,
    2401: `1390`,
    2402: `1390`,
    2403: `1391`,
    2404: `1391`,
    2405: `1392`,
    2406: `1392`,
    2407: `1392`,
    2408: `1394`,
    2409: `1395`,
    241: `45`,
    2410: `1395`,
    2411: `1396`,
    2412: `1397`,
    2413: `1398`,
    2414: `1399`,
    2415: `1399`,
    2416: `1400`,
    2417: `1401`,
    2418: `1402`,
    2419: `1403`,
    242: `45`,
    2420: `1403`,
    2421: `1404`,
    2422: `1405`,
    2423: `1406`,
    2424: `1407`,
    2425: `1407`,
    2426: `1408`,
    2427: `1409`,
    2428: `1410`,
    2429: `1410`,
    243: `46`,
    2430: `1410`,
    2431: `1411`,
    2432: `1411`,
    2433: `1411`,
    2434: `1412`,
    2435: `1413`,
    2436: `1414`,
    2437: `1415`,
    2438: `1415`,
    2439: `1415`,
    244: `46`,
    2440: `1417`,
    2441: `1417`,
    2442: `1417`,
    2443: `1419`,
    2444: `1419`,
    2445: `1419`,
    2446: `1421`,
    2447: `1421`,
    2448: `1422`,
    2449: `1422`,
    245: `47`,
    2450: `1422`,
    2451: `1423`,
    2452: `1423`,
    2453: `1424`,
    2454: `1424`,
    2455: `1424`,
    2456: `1426`,
    2457: `1426`,
    2458: `1427`,
    2459: `1427`,
    246: `48`,
    2460: `1427`,
    2461: `1428`,
    2462: `1428`,
    2463: `1429`,
    2464: `1429`,
    2465: `1429`,
    2466: `1431`,
    2467: `1431`,
    2468: `1431`,
    2469: `1433`,
    247: `49`,
    2470: `1433`,
    2471: `1434`,
    2472: `1434`,
    2473: `1435`,
    2474: `1435`,
    2475: `1435`,
    2476: `1437`,
    2477: `1437`,
    2478: `1438`,
    2479: `1438`,
    248: `49`,
    2480: `1439`,
    2481: `1439`,
    2482: `1440`,
    2483: `1441`,
    2484: `1442`,
    2485: `1442`,
    2486: `1442`,
    2487: `1443`,
    2488: `1443`,
    2489: `1444`,
    249: `50`,
    2490: `1444`,
    2491: `1445`,
    2492: `1445`,
    2493: `1446`,
    2494: `1446`,
    2495: `1447`,
    2496: `1448`,
    2497: `1449`,
    2498: `1449`,
    2499: `1450`,
    25: `2`,
    250: `50`,
    2500: `1450`,
    2501: `1451`,
    2502: `1451`,
    2503: `1452`,
    2504: `1452`,
    2505: `1454`,
    2506: `1454`,
    2507: `1455`,
    2508: `1455`,
    2509: `1456`,
    251: `51`,
    2510: `1456`,
    2511: `1456`,
    2512: `1457`,
    2513: `1457`,
    2514: `1458`,
    2515: `1458`,
    2516: `1458`,
    2517: `1459`,
    2518: `1459`,
    2519: `1460`,
    252: `51`,
    2520: `1461`,
    2521: `1461`,
    2522: `1462`,
    2523: `1463`,
    2524: `1463`,
    2525: `1463`,
    2526: `1464`,
    2527: `1464`,
    2528: `1465`,
    2529: `1465`,
    253: `51`,
    2530: `1466`,
    2531: `1467`,
    2532: `1468`,
    2533: `1468`,
    2534: `1469`,
    2535: `1469`,
    2536: `1469`,
    2537: `1470`,
    2538: `1471`,
    2539: `1471`,
    254: `52`,
    2540: `1472`,
    2541: `1472`,
    2542: `1472`,
    2543: `1473`,
    2544: `1474`,
    2545: `1474`,
    2546: `1475`,
    2547: `1475`,
    2548: `1476`,
    2549: `1477`,
    255: `52`,
    2550: `1478`,
    2551: `1479`,
    2552: `1479`,
    2553: `1480`,
    2554: `1481`,
    2555: `1482`,
    2556: `1482`,
    2557: `1483`,
    2558: `1483`,
    2559: `1484`,
    256: `53`,
    2560: `1485`,
    2561: `1486`,
    2562: `1487`,
    2563: `1487`,
    2564: `1488`,
    2565: `1489`,
    2566: `1490`,
    2567: `1490`,
    2568: `1491`,
    2569: `1492`,
    257: `53`,
    2570: `1493`,
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
    2580: `1500`,
    2581: `1500`,
    2582: `1501`,
    2583: `1501`,
    2584: `1502`,
    2585: `1502`,
    2586: `1503`,
    2587: `1503`,
    2588: `1503`,
    2589: `1505`,
    259: `53`,
    2590: `1505`,
    2591: `1506`,
    2592: `1507`,
    2593: `1507`,
    2594: `1508`,
    2595: `1509`,
    2596: `1509`,
    2597: `1510`,
    2598: `1510`,
    2599: `1511`,
    26: `2`,
    260: `53`,
    2600: `1512`,
    2601: `1513`,
    2602: `1513`,
    2603: `1513`,
    2604: `1514`,
    2605: `1514`,
    2606: `1515`,
    2607: `1515`,
    2608: `1516`,
    2609: `1517`,
    261: `53`,
    2610: `1518`,
    2611: `1518`,
    2612: `1519`,
    2613: `1519`,
    2614: `1519`,
    2615: `1520`,
    2616: `1521`,
    2617: `1521`,
    2618: `1522`,
    2619: `1522`,
    262: `54`,
    2620: `1522`,
    2621: `1523`,
    2622: `1524`,
    2623: `1524`,
    2624: `1525`,
    2625: `1525`,
    2626: `1526`,
    2627: `1527`,
    2628: `1528`,
    2629: `1529`,
    263: `54`,
    2630: `1529`,
    2631: `1530`,
    2632: `1531`,
    2633: `1532`,
    2634: `1532`,
    2635: `1533`,
    2636: `1533`,
    2637: `1534`,
    2638: `1535`,
    2639: `1536`,
    264: `55`,
    2640: `1537`,
    2641: `1537`,
    2642: `1538`,
    2643: `1539`,
    2644: `1540`,
    2645: `1540`,
    2646: `1541`,
    2647: `1542`,
    2648: `1543`,
    2649: `1544`,
    265: `56`,
    2650: `1545`,
    2651: `1545`,
    2652: `1546`,
    2653: `1547`,
    2654: `1548`,
    2655: `1549`,
    2656: `1550`,
    2657: `1550`,
    2658: `1551`,
    2659: `1551`,
    266: `57`,
    2660: `1552`,
    2661: `1552`,
    2662: `1553`,
    2663: `1553`,
    2664: `1554`,
    2665: `1554`,
    2666: `1555`,
    2667: `1555`,
    2668: `1555`,
    2669: `1557`,
    267: `57`,
    2670: `1557`,
    2671: `1558`,
    2672: `1559`,
    2673: `1559`,
    2674: `1560`,
    2675: `1561`,
    2676: `1561`,
    2677: `1562`,
    2678: `1562`,
    2679: `1563`,
    268: `58`,
    2680: `1564`,
    2681: `1565`,
    2682: `1565`,
    2683: `1565`,
    2684: `1566`,
    2685: `1566`,
    2686: `1567`,
    2687: `1567`,
    2688: `1568`,
    2689: `1569`,
    269: `59`,
    2690: `1570`,
    2691: `1570`,
    2692: `1571`,
    2693: `1571`,
    2694: `1571`,
    2695: `1572`,
    2696: `1573`,
    2697: `1573`,
    2698: `1574`,
    2699: `1574`,
    27: `2`,
    270: `61`,
    2700: `1574`,
    2701: `1575`,
    2702: `1576`,
    2703: `1576`,
    2704: `1577`,
    2705: `1577`,
    2706: `1578`,
    2707: `1579`,
    2708: `1580`,
    2709: `1581`,
    271: `61`,
    2710: `1581`,
    2711: `1582`,
    2712: `1583`,
    2713: `1584`,
    2714: `1584`,
    2715: `1585`,
    2716: `1585`,
    2717: `1586`,
    2718: `1587`,
    2719: `1588`,
    272: `62`,
    2720: `1589`,
    2721: `1589`,
    2722: `1590`,
    2723: `1591`,
    2724: `1592`,
    2725: `1592`,
    2726: `1593`,
    2727: `1594`,
    2728: `1595`,
    2729: `1596`,
    273: `62`,
    2730: `1597`,
    2731: `1597`,
    2732: `1598`,
    2733: `1599`,
    2734: `1600`,
    2735: `1600`,
    2736: `1601`,
    2737: `1601`,
    2738: `1602`,
    2739: `1602`,
    274: `62`,
    2740: `1603`,
    2741: `1603`,
    2742: `1604`,
    2743: `1604`,
    2744: `1605`,
    2745: `1605`,
    2746: `1605`,
    2747: `1607`,
    2748: `1607`,
    2749: `1609`,
    275: `63`,
    2750: `1609`,
    2751: `1610`,
    2752: `1610`,
    2753: `1610`,
    2754: `1611`,
    2755: `1611`,
    2756: `1612`,
    2757: `1612`,
    2758: `1612`,
    2759: `1613`,
    276: `63`,
    2760: `1614`,
    2761: `1616`,
    2762: `1616`,
    2763: `1617`,
    2764: `1617`,
    2765: `1618`,
    2766: `1618`,
    2767: `1618`,
    2768: `1620`,
    2769: `1621`,
    277: `64`,
    2770: `1621`,
    2771: `1622`,
    2772: `1622`,
    2773: `1623`,
    2774: `1623`,
    2775: `1624`,
    2776: `1624`,
    2777: `1624`,
    2778: `1626`,
    2779: `1626`,
    278: `65`,
    2780: `1627`,
    2781: `1627`,
    2782: `1628`,
    2783: `1629`,
    2784: `1631`,
    2785: `1631`,
    2786: `1631`,
    2787: `1633`,
    2788: `1633`,
    2789: `1634`,
    279: `66`,
    2790: `1635`,
    2791: `1635`,
    2792: `1636`,
    2793: `1637`,
    2794: `1639`,
    2795: `1640`,
    2796: `1640`,
    2797: `1641`,
    2798: `1641`,
    2799: `1642`,
    28: `2`,
    280: `66`,
    2800: `1642`,
    2801: `1642`,
    2802: `1643`,
    2803: `1643`,
    2804: `1643`,
    2805: `1645`,
    2806: `1646`,
    2807: `1647`,
    2808: `1648`,
    2809: `1649`,
    281: `66`,
    2810: `1651`,
    2811: `1652`,
    2812: `1652`,
    2813: `1653`,
    2814: `1654`,
    2815: `1654`,
    2816: `1655`,
    2817: `1655`,
    2818: `1656`,
    2819: `1656`,
    282: `66`,
    2820: `1657`,
    2821: `1658`,
    2822: `1660`,
    2823: `1661`,
    2824: `1661`,
    2825: `1662`,
    2826: `1662`,
    2827: `1663`,
    2828: `1663`,
    2829: `1664`,
    283: `66`,
    2830: `1664`,
    2831: `1665`,
    2832: `1665`,
    2833: `1666`,
    2834: `1666`,
    2835: `1667`,
    2836: `1668`,
    2837: `1670`,
    2838: `1670`,
    2839: `1670`,
    284: `66`,
    2840: `1672`,
    2841: `1672`,
    2842: `1672`,
    2843: `1674`,
    2844: `1674`,
    2845: `1675`,
    2846: `1675`,
    2847: `1675`,
    2848: `1676`,
    2849: `1676`,
    285: `66`,
    2850: `1677`,
    2851: `1677`,
    2852: `1677`,
    2853: `1679`,
    2854: `1680`,
    2855: `1682`,
    2856: `1683`,
    2857: `1684`,
    2858: `1685`,
    2859: `1685`,
    286: `66`,
    2860: `1686`,
    2861: `1686`,
    2862: `1687`,
    2863: `1687`,
    2864: `1687`,
    2865: `1688`,
    2866: `1690`,
    2867: `1691`,
    2868: `1692`,
    2869: `1692`,
    287: `66`,
    2870: `1692`,
    2871: `1693`,
    2872: `1694`,
    2873: `1694`,
    2874: `1697`,
    2875: `1697`,
    2876: `1698`,
    2877: `1698`,
    2878: `1699`,
    2879: `1700`,
    288: `66`,
    2880: `1701`,
    2881: `1702`,
    2882: `1702`,
    2883: `1703`,
    2884: `1704`,
    2885: `1704`,
    2886: `1705`,
    2887: `1705`,
    2888: `1706`,
    2889: `1706`,
    289: `66`,
    2890: `1707`,
    2891: `1708`,
    2892: `1709`,
    2893: `1709`,
    2894: `1710`,
    2895: `1711`,
    2896: `1712`,
    2897: `1713`,
    2898: `1713`,
    2899: `1714`,
    29: `2`,
    290: `66`,
    2900: `1715`,
    2901: `1716`,
    2902: `1718`,
    2903: `1719`,
    2904: `1720`,
    2905: `1721`,
    2906: `1721`,
    2907: `1721`,
    2908: `1722`,
    2909: `1722`,
    291: `66`,
    2910: `1723`,
    2911: `1724`,
    2912: `1725`,
    2913: `1727`,
    2914: `1728`,
    2915: `1728`,
    2916: `1728`,
    2917: `1729`,
    2918: `1729`,
    2919: `1730`,
    292: `66`,
    2920: `1731`,
    2921: `1731`,
    2922: `1731`,
    2923: `1732`,
    2924: `1732`,
    2925: `1733`,
    2926: `1734`,
    2927: `1734`,
    2928: `1735`,
    2929: `1736`,
    293: `66`,
    2930: `1736`,
    2931: `1737`,
    2932: `1738`,
    2933: `1738`,
    2934: `1738`,
    2935: `1739`,
    2936: `1739`,
    2937: `1740`,
    2938: `1741`,
    2939: `1741`,
    294: `66`,
    2940: `1741`,
    2941: `1742`,
    2942: `1742`,
    2943: `1743`,
    2944: `1744`,
    2945: `1744`,
    2946: `1744`,
    2947: `1745`,
    2948: `1746`,
    2949: `1746`,
    295: `66`,
    2950: `1747`,
    2951: `1748`,
    2952: `1748`,
    2953: `1748`,
    2954: `1749`,
    2955: `1750`,
    2956: `1750`,
    2957: `1751`,
    2958: `1752`,
    2959: `1752`,
    296: `66`,
    2960: `1752`,
    2961: `1753`,
    2962: `1754`,
    2963: `1754`,
    2964: `1755`,
    2965: `1756`,
    2966: `1756`,
    2967: `1756`,
    2968: `1757`,
    2969: `1758`,
    297: `67`,
    2970: `1758`,
    2971: `1759`,
    2972: `1760`,
    2973: `1760`,
    2974: `1760`,
    2975: `1761`,
    2976: `1762`,
    2977: `1762`,
    2978: `1763`,
    2979: `1764`,
    298: `67`,
    2980: `1764`,
    2981: `1764`,
    2982: `1765`,
    2983: `1766`,
    2984: `1766`,
    2985: `1767`,
    2986: `1768`,
    2987: `1768`,
    2988: `1768`,
    2989: `1769`,
    299: `67`,
    2990: `1770`,
    2991: `1770`,
    2992: `1771`,
    2993: `1772`,
    2994: `1772`,
    2995: `1772`,
    2996: `1773`,
    2997: `1774`,
    2998: `1774`,
    2999: `1775`,
    3: `2`,
    30: `2`,
    300: `69`,
    3000: `1776`,
    3001: `1776`,
    3002: `1776`,
    3003: `1777`,
    3004: `1777`,
    3005: `1778`,
    3006: `1778`,
    3007: `1778`,
    3008: `1779`,
    3009: `1780`,
    301: `69`,
    3010: `1780`,
    3011: `1781`,
    3012: `1783`,
    3013: `1784`,
    3014: `1785`,
    3015: `1786`,
    3016: `1786`,
    3017: `1786`,
    3018: `1787`,
    3019: `1787`,
    302: `69`,
    3020: `1788`,
    3021: `1788`,
    3022: `1788`,
    3023: `1789`,
    3024: `1789`,
    3025: `1789`,
    3026: `1791`,
    3027: `1792`,
    3028: `1792`,
    3029: `1792`,
    303: `70`,
    3030: `1793`,
    3031: `1794`,
    3032: `1795`,
    3033: `1796`,
    3034: `1797`,
    3035: `1799`,
    3036: `1800`,
    3037: `1800`,
    3038: `1800`,
    3039: `1802`,
    304: `71`,
    3040: `1803`,
    3041: `1803`,
    3042: `1803`,
    3043: `1805`,
    3044: `1805`,
    3045: `1806`,
    3046: `1807`,
    3047: `1807`,
    3048: `1808`,
    3049: `1810`,
    305: `71`,
    3050: `1811`,
    3051: `1812`,
    3052: `1812`,
    3053: `1813`,
    3054: `1815`,
    3055: `1815`,
    3056: `1816`,
    3057: `1817`,
    3058: `1817`,
    3059: `1818`,
    306: `73`,
    3060: `1820`,
    3061: `1821`,
    3062: `1821`,
    3063: `1822`,
    3064: `1824`,
    3065: `1825`,
    3066: `1826`,
    3067: `1827`,
    3068: `1828`,
    3069: `1828`,
    307: `74`,
    3070: `1829`,
    3071: `1830`,
    3072: `1831`,
    3073: `1832`,
    3074: `1834`,
    3075: `1834`,
    3076: `1835`,
    3077: `1835`,
    3078: `1836`,
    3079: `1837`,
    308: `75`,
    3080: `1838`,
    3081: `1838`,
    3082: `1838`,
    3083: `1839`,
    3084: `1839`,
    3085: `1839`,
    3086: `1842`,
    3087: `1842`,
    3088: `1843`,
    3089: `1843`,
    309: `76`,
    3090: `1844`,
    3091: `1845`,
    3092: `1846`,
    3093: `1847`,
    3094: `1847`,
    3095: `1848`,
    3096: `1849`,
    3097: `1849`,
    3098: `1850`,
    3099: `1850`,
    31: `2`,
    310: `76`,
    3100: `1851`,
    3101: `1851`,
    3102: `1852`,
    3103: `1853`,
    3104: `1854`,
    3105: `1854`,
    3106: `1855`,
    3107: `1855`,
    3108: `1856`,
    3109: `1857`,
    311: `77`,
    3110: `1858`,
    3111: `1858`,
    3112: `1859`,
    3113: `1859`,
    3114: `1860`,
    3115: `1861`,
    3116: `1862`,
    3117: `1862`,
    3118: `1863`,
    3119: `1864`,
    312: `78`,
    3120: `1865`,
    3121: `1867`,
    3122: `1868`,
    3123: `1868`,
    3124: `1869`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T19","name":"v12904","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3008","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3535","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4070","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4594","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5117","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5674","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6229","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6840","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T21","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v12855","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12861","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12868","type":"address"},{"internalType":"uint256","name":"v12869","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12879","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12887","type":"address"},{"internalType":"address payable","name":"v12888","type":"address"},{"internalType":"uint256","name":"v12889","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12815","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12822","type":"address"},{"internalType":"address payable","name":"v12823","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12827","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalCurrentAllocatoinToAllUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalFundsDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12843","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12848","type":"address"},{"internalType":"address payable","name":"v12849","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12896","type":"uint256"},{"internalType":"address payable","name":"v12897","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v12907","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080604052606062004e0c80380380916200001a826200009c565b6080391262000080576040516200003181620000d2565b608051815260a05161ffff19811681036200008057602082015260c051906001600160a01b03821682036200008057620000709160408201526200019d565b604051613f99908162000e538239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000c357604052565b620000cd62000085565b604052565b606081019081106001600160401b03821117620000c357604052565b604081019081106001600160401b03821117620000c357604052565b608081019081106001600160401b03821117620000c357604052565b601f909101601f19168101906001600160401b03821190821017620000c357604052565b604051906102a082016001600160401b03811183821017620000c357604052565b604051906200017a82620000d2565b565b604051906101e082016001600160401b03811183821017620000c357604052565b6200017a90600080805543600355610280620001b86200014a565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e082015282610200820152826102208201528261024082015282610260820152015262000477565b604051906200025082620000d2565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620002aa575b6040528260005b8281106200029357505050565b82906200029f62000241565b818401520162000286565b620002b462000085565b6200027f565b60405190620002c982620000ee565b60006020838281520152565b60405190620002e482620000ee565b6000602083620002f3620002ba565b81520152565b6040519061012082016001600160401b038111838210176200035a575b6040528161010060009182815282602082015262000333620002d5565b60408201528260608201528260808201528260a08201528260c08201528260e08201520152565b6200036462000085565b62000316565b6040519060a082016001600160401b03811183821017620003d4575b604052816200039462000241565b8152620003a062000262565b6020820152620003af620002ba565b6040820152620003be620002d5565b60608201526080620003cf620002f9565b910152565b620003de62000085565b62000386565b906001811015620003f65760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519060e082016001600160401b0381118382101762000467575b604052600060c08382815282602082015282604082015262000449620002f9565b60608201528260808201526200045e62000262565b60a08201520152565b6200047162000085565b62000428565b6200017a90620004866200036a565b620004a56200049f6200049b60045460ff1690565b1590565b62000665565b60408051338152835160208083019190915284015161ffff191681830152838201516001600160a01b03166060820152909162000648917f19beb4b4ae800ef164657ae1c238d1e90f50effd8bb91dc7502d5d13755b59e090608090a16200051a8451801590811562000658575b5062000686565b6000928382515262000642602092858482510152858382510152805190848101918251526200054a3415620006a7565b608084820160058151526064878251015251916060810192835152620005738784510160019052565b019087825152620005878683510160019052565b51848251015286606082510152866080825101528660a0825101528660c0825101528660e08251015286610100825101526200060c620005fd85620005cb6200040c565b3381529a620005ef8c8a620005e58185015161ffff191690565b61ffff1916910152565b01516001600160a01b031690565b6001600160a01b031689860152565b51606088015243608088015251918251908085830151920151151591620006326200016b565b9588875286015284019015159052565b620006c8565b60a083015260c082015262000b87565b9050600154143862000513565b156200066d57565b60405163100960cb60e01b815260136004820152602490fd5b156200068e57565b60405163100960cb60e01b815260146004820152602490fd5b15620006af57565b60405163100960cb60e01b815260156004820152602490fd5b9190620006d462000262565b926000805b60018110620006e9575050508252565b620006f58184620003e4565b51620007028288620003e4565b526200070f8187620003e4565b5060001981146200072357600101620006d9565b634e487b7160e01b82526011600452602482fd5b506040513d6000823e3d90fd5b90600182811c9216801562000776575b60208310146200076057565b634e487b7160e01b600052602260045260246000fd5b91607f169162000754565b8181106200078d575050565b6000815560010162000781565b620007a760025462000744565b80620007b05750565b601f8111600114620007c457506000600255565b60026000526200080c90601f0160051c60008051602062004dec833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000781565b6000602081208160025555565b620008236200017c565b9060008083528060208401528060408401526200083f620002f9565b60608401526200084e62000262565b60808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152806101808401526200089262000241565b6101a08401526101c0830152565b6101409080518352602081015115156020840152620008dd6040820151604085019060206040918181518051865201518285015201511515910152565b606081015160a0840152608081015160c084015260a081015160e084015260c081015190610100918285015260e08101516101208501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b600182106200094957505050565b60206060826200095d60019487516200091b565b019301910190916200093b565b81516001600160a01b031681526103a0810192916103809060208181015161ffff1916908401526040818101516001600160a01b031690840152620009b860608201516060850190620008a0565b608081015190620009d06101c0928386019062000936565b60a081015161022085015260c081015161024085015260e08101516102608501526101008101516102808501526101208101516102a08501526101408101516102c08501526101608101516102e085015261018081015161030085015262000a436101a08201516103208601906200091b565b0151910152565b90601f821162000a58575050565b6200017a9160026000526020600020906020601f840160051c8301931062000a89575b601f0160051c019062000781565b909150819062000a7b565b80519091906001600160401b03811162000b77575b62000ac18162000abb60025462000744565b62000a4a565b602080601f831160011462000b00575081929360009262000af4575b50508160011b916000199060031b1c191617600255565b01519050388062000add565b6002600052601f1983169490919060008051602062004dec833981519152926000905b87821062000b5e57505083600195961062000b44575b505050811b01600255565b015160001960f88460031b161c1916905538808062000b39565b8060018596829496860151815501950193019062000b23565b62000b8162000085565b62000aa9565b606081019062000b9b602083510151151590565b1562000c9e5762000c986200017a9262000c8992608062000bbb62000819565b82516001600160a01b031681529260208381015161ffff1916908501526040838101516001600160a01b0316908501528051606085015260c060a0840193845184870152015160a085015260608151015160c085015260e08151015160e085015260a08151015161010090818601528151015161012085015280515161014085015260c0815101516101608501525101516101808301528051516101a08301525151516101c082015262000c6f6003600055565b62000c7943600155565b604051928391602083016200096a565b03601f19810183528262000126565b62000a94565b62000d049150600080808062000cca62000cbe865160018060a01b031690565b6001600160a01b031690565b60c08601519082821562000d2d575bf11562000d1d575b6040810151815160a0909201515151916001600160a01b03908116911662000d3f565b6000805562000d136000600155565b6200017a6200079a565b62000d2762000737565b62000ce1565b506108fc62000cd9565b156200008057565b600080916200017a948262000de295604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815262000d83816200010a565b5193165af13d1562000df85762000dd13d6001600160401b03811162000de8575b6040519062000dbe601f8201601f19166020018362000126565b81529182903d6000602084013e62000e20565b506020808251830101910162000e06565b62000d37565b62000df262000085565b62000da4565b62000dd16060809262000e20565b908160209103126200008057518015158103620000805790565b1562000e295790565b80511562000e3957805190602001fd5b60405163100960cb60e01b815260026004820152602490fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630a84e99f1461025c5780631548a30d146102535780631e93b0f11461024a57806336e56ea5146102415780633702d0ce146102385780634ab9f8b31461022f578063523df4f614610226578063544774a91461021d57806355c42a9514610214578063582523cd1461020b578063672422c71461020257806374623535146101f957806374ecfa44146101f057806374f16ec9146101e75780637a2b54dc146101de5780637f0595e2146101d557806383230757146101cc578063883513de146101c357806392cf8bd5146101ba578063a5792424146101b1578063a855bc10146101a8578063aa735d7f1461019f578063ab53f2c614610196578063b87939c71461018d578063bf7df9c314610184578063cd6637a81461017b578063df1a0c7514610172578063f1b1259d146101695763f33c0dce0361000e57610164610f82565b61000e565b50610164610ea6565b50610164610e55565b50610164610e04565b50610164610dd2565b50610164610d2e565b50610164610cb9565b50610164610c69565b50610164610bd3565b50610164610b64565b50610164610b14565b50610164610ac3565b50610164610aa4565b506101646109fe565b506101646109bd565b5061016461092a565b5061016461085a565b50610164610828565b506101646107ba565b506101646106cc565b5061016461068e565b50610164610630565b506101646105c9565b50610164610573565b50610164610535565b506101646104b0565b50610164610466565b50610164610321565b5060203660031901126102d757602060406102756114e8565b6102cb81835161028481611023565b845161028f8161104b565b600081528152858101906102a161158f565b825260043581515260018251525185825101526102bc611656565b90600082525186820152611d06565b01511515604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b038116036102d757565b60409060031901126102d757600435610311816102e8565b9060243561031e816102e8565b90565b50346102d757610458610120610336366102f9565b9061033f6114e8565b916103b86103af61034e611301565b9260018060a01b038095168452602094858501911681526103a96103a2610373613e08565b956103826003600054146131d4565b61039b61038d6110db565b898082518301019101611a4d565b50516102dc565b855161163d565b516102dc565b8383510161163d565b81810190600082515260008383510152805191600161040661040160405195866103e58982019283611cbc565b03966103f9601f19988981018352826110b8565b519020611342565b611cb2565b61040f8161049c565b0361045c5750916104336103f961043f936040955193865193849182019586611cbc565b039081018352826110b8565b01515b5191018190526040519081529081906020820190565b0390f35b9250505051610442565b50346102d75760003660031901126102d7576020600354604051908152f35b50634e487b7160e01b600052602160045260246000fd5b600211156104a657565b6104ae610485565b565b50346102d75760203660031901126102d75760606104e16004356104d3816102e8565b6104db611211565b5061127e565b604080519180516104f18161049c565b835260208101511515602084015201516040820152f35b9190916040806060830194805161051e8161049c565b845260208101511515602085015201511515910152565b50346102d75760203660031901126102d757610458610567600435610559816102e8565b610561611211565b50611446565b60405191829182610508565b5060203660031901126102d757602060a0600435610590816102e8565b6102cb61059b6114e8565b80926105a5611613565b90815190600180881b031690528581019060048251525185825101526102bc611656565b506020806003193601126102d757806004356105e4816102e8565b6102cb6105ef6114e8565b80926105f9611613565b80516001600160a01b0390921690915284810180516000905290518151860152610621611656565b90600082525185820152611d06565b50346102d75760203660031901126102d75761064a61131a565b506080610658600435611342565b61068c6040805192805161066b8161049c565b84526020818101511515818601529101518051604085015201516060830152565bf35b5060003660031901126102d757602060806106a76114e8565b6102cb816106b3611656565b85810190600382515251151585825101526102bc611656565b5060603660031901126102d7576104586107a860c06004356106ed816102e8565b6107a1602435916106fd836102e8565b6107056114e8565b928391610710611211565b9160018060a01b038092168352816020840191168152610771610767604085019260443584526040519461074386611023565b61074b611211565b8652602086019661075a61158f565b88525116855152516102dc565b602084510161163d565b51604082510152610783825160059052565b518582510152610791611656565b9060008252516020820152611d06565b0151151590565b60405191829182901515815260200190565b50346102d75760003660031901126102d7576107d46114e8565b60036000540361080f576102006020916101206108006107f26110db565b858082518301019101611a4d565b01519182910152604051908152f35b60405163100960cb60e01b815260106004820152602490fd5b50346102d75760203660031901126102d75761045861056760043561084c816102e8565b610854611211565b506113cb565b506101c03660031901126102d7576108706114e8565b6040519061087d82611023565b60043582526101a03660231901126102d75761091e9161089b611184565b6108a3613e2a565b81526108ae36613e39565b60208201526108bc36613e88565b60408201526108ca36613ea8565b60608201526108d7613eda565b60808201526108e536613e62565b60a08201526108f336613ef5565b60c082015261090136613f3c565b60e082015261090e613ee7565b6101008201526020820152611d06565b60405160008152602090f35b5060403660031901126102d7576104586107a8606060043561094b816102e8565b6107a16109566114e8565b8092610960611301565b6001600160a01b03918216815260243560208201908152604051919261098583611023565b61098d611301565b8352602083019361099c61158f565b85525116825152516020825101526002825152518582510152610791611656565b5060003660031901126102d75760206102806109d76114e8565b6102cb816109e3611656565b858101906007825152511515610100825101526102bc611656565b50346102d75760203660031901126102d757600435610a1c816102e8565b610a246114e8565b90600360005403610a8b57610458916001610a6260e093610a55610a466110db565b60208082518301019101611a4d565b50828060a01b03166113cb565b51610a6c8161049c565b610a758161049c565b1491018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b50346102d75760003660031901126102d7576020600154604051908152f35b50346102d75760003660031901126102d757610add6114e8565b600360005403610afb576101006020916101c06108006107f26110db565b60405163100960cb60e01b815260086004820152602490fd5b50346102d75760003660031901126102d757610b2e6114e8565b600360005403610b4b5761016060209160c06108006107f26110db565b60405163100960cb60e01b8152600b6004820152602490fd5b50346102d75760203660031901126102d757600435610b82816102e8565b610b8a6114e8565b90600360005403610bba57610458916001610a6261014093610bad610a466110db565b50828060a01b0316611497565b60405163100960cb60e01b8152600a6004820152602490fd5b5060403660031901126102d7576104586107a8610260602435610bf5816102e8565b6107a1610c006114e8565b8092610c0a611301565b60043581526001600160a01b0391821660208201908152604051919290610c3083611023565b610c38611301565b83526020830193610c4761158f565b855251835152511660208251015260068251525160e082510152610791611656565b50346102d75760003660031901126102d757610c836114e8565b600360005403610ca0576101c060209160c06108006107f26110db565b60405163100960cb60e01b8152600e6004820152602490fd5b50346102d757600080600319360112610d2b578054610cd66110db565b906040519283918252602090604082840152835191826040850152815b838110610d1457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610cf3565b80fd5b50346102d75760203660031901126102d757610458610220600435610d52816102e8565b610d5a6114e8565b90610d696003600054146131f4565b610d74610a466110db565b506001600160a01b0316610d878161127e565b51610d918161049c565b610d9a8161049c565b600090600103610dc85750610db060409161127e565b01519182915b01526040519081529081906020820190565b9050918291610db6565b50346102d75760203660031901126102d757610458610567600435610df6816102e8565b610dfe611211565b50611497565b50346102d75760003660031901126102d757610e1e6114e8565b600360005403610e3c576101806020916101006108006107f26110db565b60405163100960cb60e01b8152600c6004820152602490fd5b50346102d75760003660031901126102d757610e6f6114e8565b600360005403610e8d576101e06020916101806108006107f26110db565b60405163100960cb60e01b8152600f6004820152602490fd5b50346102d757610458610240610ebb366102f9565b90610ec46114e8565b91610f076103af610ed3611301565b9260018060a01b038095168452602094858501911681526103a96103a2610ef8613e08565b95610382600360005414613214565b818101906000825152600083835101528051916001610f3461040160405195866103e58982019283611cbc565b610f3d8161049c565b03610f795750604091610f609151906103f9845191826104338882019586611cbc565b0151015191018190526040519081529081906020820190565b91505051610db0565b50346102d75760003660031901126102d757610f9c6114e8565b600360005403610fb9576101a060209160e06108006107f26110db565b60405163100960cb60e01b8152600d6004820152602490fd5b90600182811c92168015611002575b6020831014610fec57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610fe1565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761103e57604052565b61104661100c565b604052565b602081019081106001600160401b0382111761103e57604052565b606081019081106001600160401b0382111761103e57604052565b61012081019081106001600160401b0382111761103e57604052565b60a081019081106001600160401b0382111761103e57604052565b601f909101601f19168101906001600160401b0382119082101761103e57604052565b60405190600082600254916110ef83610fd2565b8083526001938085169081156111635750600114611115575b506104ae925003836110b8565b60026000908152600080516020613f6d83398151915294602093509091905b81831061114b5750506104ae935082010138611108565b85548884018501529485019487945091830191611134565b90506104ae94506020925060ff191682840152151560051b82010138611108565b6040519061012082016001600160401b0381118382101761103e57604052565b604051906102a082016001600160401b0381118382101761103e57604052565b6040519061046082016001600160401b0381118382101761103e57604052565b604051906101e082016001600160401b0381118382101761103e57604052565b604051906104ae82611066565b6040519061121e82611066565b60006040838281528260208201520152565b6001600160a01b0316600090815260096020526040902090565b6001600160a01b0316600090815260086020526040902090565b6001600160a01b0316600090815260056020526040902090565b90611287611211565b9160018060a01b03166000908082526005602052600160ff6040842054166112ae8161049c565b036112f657604092935081526005602052206001604051916112cf83611066565b60ff81548181166112df8161049c565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061130e82611023565b60006020838281520152565b6040519061132782611066565b816000815260006020820152604061133d611301565b910152565b9061134b61131a565b916000908082526006602052600160ff60408420541661136a8161049c565b036112f657604092935081526006602052206040519061138982611066565b60ff81548181166113998161049c565b845260081c16151560208301526002604051916113b583611023565b6001810154835201546020820152604082015290565b906113d4611211565b9160018060a01b03166000908082526007602052600160ff6040842054166113fb8161049c565b036112f6576040929350815260076020522060ff6040519161141c83611066565b548181166114298161049c565b8352818160081c161515602084015260101c161515604082015290565b9061144f611211565b9160018060a01b03166000908082526008602052600160ff6040842054166114768161049c565b036112f6576040929350815260086020522060ff6040519161141c83611066565b906114a0611211565b9160018060a01b03166000908082526009602052600160ff6040842054166114c78161049c565b036112f6576040929350815260096020522060ff6040519161141c83611066565b6114f06111a4565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152806102208401528061024084015280610260840152610280830152565b604051906115898261104b565b60008252565b6040519061159c82611081565b816101006000918281526040516115b28161104b565b83815260208201526040516115c68161104b565b83815260408201526115d6611301565b60608201528260808201526040516115ed8161104b565b83815260a08201526115fd611211565b60c082015261160a611301565b60e08201520152565b6040519061162082611023565b8160405161162d8161104b565b600081528152602061133d61158f565b6001600160a01b039091169052565b600811156104a657565b6040519061166382611023565b8160008152602061133d61158f565b6040519061167f82611081565b8161010060009182815282602082015260405161169b81611023565b6116a3611301565b815283602082015260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b604051906116df8261104b565b8160005b602081106116ef575050565b6020906116fa611211565b81840152016116e3565b61170c6111c4565b9061171561157c565b825261171f611672565b602083015261172c61157c565b6040830152611739611672565b6060830152611746611301565b6080830152611753611672565b60a0830152611760611672565b60c083015261176d61157c565b60e083015261177a611672565b610100830152611788611211565b61012083015260008061014084015280610160840152806101808401526117ad6116d2565b6101a0840152806101c08401526117c2611301565b6101e08401526117d0611301565b6102008401526117de611301565b6102208401526117ec611301565b61024084015280610260840152611801611672565b61028084015261180f611301565b6102a08401526102c0830152611823611301565b6102e0830152611831611301565b61030083015261183f611301565b61032083015261184d611301565b61034083015261185b611211565b6103608301526118696116d2565b610380830152611877611672565b6103a0830152611885611672565b6103c08301526118936116d2565b6103e08301526118a1611672565b6104008301526118af611672565b6104208301526118bd611672565b610440830152565b51906104ae826102e8565b519061ffff19821682036102d757565b801515036102d757565b51906104ae826118e0565b8092910391606083126102d7576040519061190f82611023565b60408294126102d7576040602091815161192881611023565b8151815283820151848201528452015191611942836118e0565b0152565b919091610160818403126102d75761197e61195f611184565b9382518552611970602084016118ea565b6020860152604083016118f5565b604084015260a0810151606084015260c0810151608084015260e081015160a0840152610140610100918281015160c086015261012081015160e0860152015190830152565b91908260609103126102d7576040516119dc81611066565b60408082948051845260208101516020850152015191611942836118e0565b9080601f830112156102d75760405191611a148361104b565b82606092838301928184116102d757915b838310611a3457505050505090565b60208591611a4284866119c4565b815201920191611a25565b906103a0828203126102d757610380611a646111e4565b92611a6e816118c5565b8452611a7c602082016118d0565b6020850152611a8d604082016118c5565b6040850152611a9f8360608301611946565b6060850152611b236101c093611ab7818685016119fb565b608087015261022083015160a087015261024083015160c087015261026083015160e08701526102808301516101008701526102a08301516101208701526102c08301516101408701526102e083015161016087015261030083015161018087015261032083016119c4565b6101a085015201519082015290565b6101c060206104ae9395946101e084019660018060a01b03168452805182850152015180516008811015611c20575b60408401526020810151516001600160a01b031660608401526040810151516080840152606081015180516001600160a01b031660a08501526020015160c08401526080810151151560e084015260a0810151516001600160a01b0316610100848101919091529060c081015180516001600160a01b039081166101208701526020820151166101408601526040015161016085015260e08101518051610180860152602001516001600160a01b03166101a085015201511515910152565b611c28610485565b611b61565b516008811015611c3a5790565b61031e610485565b516001600160a01b031690565b6040519060e082016001600160401b03811183821017611ca5575b604052600060c083828152826020820152826040820152611c89611672565b6060820152826080820152611c9c6116d2565b60a08201520152565b611cad61100c565b611c6a565b5161031e8161049c565b81516001600160a01b039081168252602092830151169181019190915260400190565b906001811015611cf05760051b0190565b634e487b7160e01b600052603260045260246000fd5b90611d0f611704565b611d1d600360005414613234565b6020611d38611d2a6110db565b828082518301019101611a4d565b93611d54611d4f611d4b60045460ff1690565b1590565b613254565b7f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac260405180611d84843383611b32565b0390a1611d9c81518015908115613165575b50613274565b01611da78151611c2d565b611db08161164c565b611f94579260a09160206104ae955101518152611dd5611dd083516102dc565b6102dc565b3303611f7457611de560016135f2565b611def3415613612565b600060206040840195611e13611e0e611e0889516102dc565b336137a4565b613632565b611e4a611e3d611e238651611c42565b6001600160a01b0316600090815260076020526040902090565b805460ff19166001179055565b611e66611e5a611e238651611c42565b805462ff000019169055565b604051600081527f308fe41e99a96b6f1bcf4bf6ea80f80c99dde86f8ef820d0cb0c808b801fe07690602090a101526020610140830151910190815152604060608301611ec6611eba602083510151151590565b60208551019015159052565b51015160408251015260c082015160608251015261018082015160808251015261010080830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f53611f4a611f22611c4f565b95611f36611f3086516102dc565b8861163d565b60208581015161ffff1916908801526103a9565b6040860161163d565b516060840152436080840152608081015182840152015160c0820152613c82565b611de56001611f85610401336113cb565b611f8e8161049c565b146135f2565b6001611fa08251611c2d565b611fa98161164c565b03612193579261216360a09260406104ae965101519060408101918252611fd3611dd085516102dc565b330361217357611fe36001613592565b611fed34156135b2565b600060408086019761201461200f6120058b516102dc565b87515190336137ff565b6135d2565b8151600081527f72580001ed7d8f674e4b0565f23ca77538656f7f34d8b64ab103b125c79cfc2c90602090a101526060612056610140860151845151906131ab565b910190815152604060608501612073611eba602083510151151590565b51015160408251015260c0840151606082510152612099610180850151835151906131ab565b60808251015261010080850151868351015261016085015160c08351015260e085015160e083510152610120850151908251015261210c6121036120db611c4f565b976120ef6120e988516102dc565b8a61163d565b60208781015161ffff1916908a01526103a9565b6040880161163d565b5160608601524360808601526080830151906101c0840151905151019061215e6101a085015161214460406020830151920151151590565b9061214d611204565b948552602085015215156040840152565b613842565b82840152015160c0820152613c82565b611fe36001612184610401336113cb565b61218d8161049c565b14613592565b600261219f8251611c2d565b6121a88161164c565b036122bd579260a09160006060806104ae9751015195608084019687526121d2611dd086516102dc565b3314831461229d576121e46001613512565b6121fa6020885101516101c08701511015613532565b6122043415613552565b604085019661221e612219611e088a516102dc565b613572565b612233611e3d61222e8351611c42565b611264565b51600161224861222e602084015193516102dc565b0155604051600081527f504078f0219ef5ba549ffceb6b588325956f611d1e7eae4973099fbf1181479090602090a1015282610140830151910190815152604060608301611ec6611eba602083510151151590565b6121e460016122ae610401336113cb565b6122b78161049c565b14613512565b60036122c98251611c2d565b6122d28161164c565b036123d457506104ae9260a0916122fa33600180861b036122f385516102dc565b1614613494565b60c082016123098151156134b4565b61231334156134d2565b60006080604085019661233161232c611e088a516102dc565b6134f2565b604051600081527f5093cd962991b9146d95bc500b1b1f37369a5d0dea1bb6c12235465797dbc50b90602090a1015260c061014084015192019182515260006020835101526040606084015101516040835101525160608251015261018082015160808251015261010080830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f53611f4a611f22611c4f565b60046123e08251611c2d565b6123e98161164c565b0361250a579260a091600083806104ae975101519560e0840196875261241c612415611dd087516102dc565b3314613434565b6124263415613454565b8261244d611e236040880199612447612442611e088d516102dc565b613474565b51611c42565b55604051600081527f62689d0e0fbc92016eaed96184114f17cbea58aac30e67012b6d9b62124e244d90602090a1015261014082015190610100809101918251526040606084016124b16124a5602083510151151590565b60208651019015159052565b51015160408351015260c083015160608351015261018083015160808351015280830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f53611f4a611f22611c4f565b60056125198294939451611c2d565b6125228161164c565b03612a19575160c001516101208301819052604001516101c084015111156101408301526104ae9260a0916125666101c083015160406101208701510151906131bf565b5061014084015115612a0f5761257c6000613354565b6125ab61259760c084015160406101208801510151906131ab565b806101608701526101c08401511015613374565b6125db60016125cc6104016125c7611dd06101208a0151611c42565b611497565b6125d58161049c565b14613394565b61014084015115612a0857604061012085015101515b61018085015261260134156133b4565b6128cf60c06080840151926126396101c0860151610180890151016101a09561215e8789015161214460406020830151920151151590565b8488015261266261265d61265060408801516102dc565b6101808a015190336137ff565b6133d4565b61012087015160400180518589018051515191909111156101c08a0152515151905161268d916131bf565b506101c0870151156129fe576126a360006133f4565b6126b98488015151516101608901511115613414565b6126d56126ca610120890151611c42565b6101e089015161163d565b6126f76126e960206101208a015101611c42565b60206101e08a01510161163d565b600061020088015152600060206102008901510152600161274961040161272f61273d6101e08c015160405192839160208301611cbc565b03601f1981018352826110b8565b60208151910120611342565b6127528161049c565b036129f05761281560406127796101e08a015182516103f98161272f602082019485611cbc565b01515b6127a860206102208b019280845251926102408c019384515251015160406101208c01510151906131ab565b6020825101526127e2611e3d6101e08b01516040516127cf8161272f602082019485611cbc565b5190206000526006602052604060002090565b5160016128036101e08b01516040516127cf8161272f602082019485611cbc565b01906020600191805184550151910155565b612829611e3d61222e6101208a0151611c42565b6001612847610401612842611dd06101208c0151611c42565b61127e565b6128508161049c565b036129e657612881604061286e612842611dd06101208c0151611c42565b01515b60406101208a01510151906131ab565b600161289461222e6101208b0151611c42565b0155604051600181527f3fa2a9ad20376241ab4f63624dc480ef2c778669262cd16bab023c1d2fb24cb89080602081015b0390a10160019052565b6101c0840151156129d5576128f361014083015160406101208701510151906131ab565b6102608501525b6102608401519361028081019485515260406060840161292d612921602083510151151590565b60208951019015159052565b51015160408651015261016081015160608651015261018083015160808651015261010080840151858751015261016084015160c08751015260e084015160e0875101526101208401519086510152612984611c4f565b9461299861299285516102dc565b8761163d565b60208481015161ffff1916908701526129b761210360408601516102dc565b516060860152436080860152015182840152015160c0820152613c82565b6101408201516102608501526128fa565b6128816000612871565b61281561020088015161277c565b6126a360016133f4565b60006125f1565b61257c6001613354565b6006612a288294939451611c2d565b612a318161164c565b036130a957612c1a919260e0610260925101516102a08501526001612a586104013361127e565b612a618161049c565b036130a2576040612a713361127e565b01515b6102c0850152612a916102a0850151516101c087015110156132d4565b612aa86102c08501516102a08601515111156132f4565b612ab23415613314565b612aca612ac5611e0860408801516102dc565b613334565b612ad9336102e086015161163d565b612afb612aed60206102a087015101611c42565b60206102e08701510161163d565b6000610300850151526000602061030086015101526001612b3361040161272f61273d6102e089015160405192839160208301611cbc565b612b3c8161049c565b0361309457612be76040612b636102e087015182516103f98161272f602082019485611cbc565b01515b612b9f6020612b85610320890193808552516102a08a015151906131ab565b926103408901938451525101516102a088015151906131bf565b602082510152612bc6611e3d6102e08801516040516127cf8161272f602082019485611cbc565b5160016128036102e08801516040516127cf8161272f602082019485611cbc565b604051600181527fd2c4a5d706d1226ed468054fae98e8814d998076e336e12d0919e676188d678c9080602081016128c5565b610360810190612c2b33835161163d565b6102a0810151516020835101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23612cb36020850193612c80612c71865161ffff191690565b60408351019061ffff19169052565b516040805182516001600160a01b03168152602080840151908201529181015161ffff1916908201529081906060820190565b0390a16001612cc461040133611446565b612ccd8161049c565b03612ee857612d0560808401516101c08501516102a08401515190039061215e6101a087015161214460406020830151920151151590565b906103e08101918252612d2d612d1e60408601516102dc565b6102a083015151903390613652565b6102c0810151612e7a579260a0916104ae94612d57612d4b33611264565b60016000918281550155565b612d6d6101408401516102a083015151906131bf565b90610400810191825152604060608501612d8e6124a5602083510151151590565b510151604083510152612dac60c08501516102a083015151906131bf565b606083510152610180840151608083510152612dd6610100916102a08387015191015151906131ab565b858351015261016084015160c083510152612df460e0850151613188565b60e083510152612e08610120850151613188565b9082510152612e44612e38612e1b611c4f565b96612e2f612e2987516102dc565b8961163d565b5161ffff191690565b61ffff19166020870152565b612e5d612e5460408501516102dc565b6040870161163d565b5160608501524360808501525182840152015160c0820152613c82565b9260a0916104ae94612e8e611e3d33611264565b612ea46102c08201516102a083015151906131bf565b6001612eaf33611264565b0155612ec76101408401516102a083015151906131bf565b90610420810191825152604060608501612d8e6124a5602083510151151590565b612ef4611e3d3361124a565b612f00611e5a3361124a565b612f3360808401516101c08501516102a08401515190039061215e6101a087015161214460406020830151920151151590565b906103808101918252612f4c612d1e60408601516102dc565b6102c0810151613026579260a0916104ae94612f6a612d4b33611264565b612f806101408401516102a083015151906131bf565b906103a0810191825152604060608501612fa16124a5602083510151151590565b510151604083510152612fbf60c08501516102a083015151906131bf565b606083510152610180840151608083510152612fe9610100916102a08387015191015151906131ab565b858351015261016084015160c08351015261300760e0850151613188565b60e0835101526101208401519082510152612e44612e38612e1b611c4f565b9260a0916104ae9461303a611e3d33611264565b6130506102c08201516102a083015151906131bf565b600161305b33611264565b01556130736101408401516102a083015151906131bf565b906103c0810191825152604060608501612fa16124a5602083510151151590565b612be7610300850151612b66565b6000612a74565b6130b560079151611c2d565b6130be8161164c565b146130c857505050565b6104ae9260a0916130d93415613294565b600061028060408401956130f86130f3611e0889516102dc565b6132b4565b613104611e3d33611230565b613110611e5a33611230565b604051600081527fe5fb35ba501ed56f8d9402a027b421f7679c6f1b72b18f7dea2e050230567abc90602090a10152610440610140830151910190815152604060608301611ec6611eba602083510151151590565b90506001541438611d96565b50634e487b7160e01b600052601160045260246000fd5b90600182019182811161319e575b82106102d757565b6131a6613171565b613196565b919082019182811161319e5782106102d757565b9081039081116131cc5790565b61031e613171565b156131db57565b60405163100960cb60e01b815260096004820152602490fd5b156131fb57565b60405163100960cb60e01b815260116004820152602490fd5b1561321b57565b60405163100960cb60e01b815260126004820152602490fd5b1561323b57565b60405163100960cb60e01b815260166004820152602490fd5b1561325b57565b60405163100960cb60e01b815260176004820152602490fd5b1561327b57565b60405163100960cb60e01b815260186004820152602490fd5b1561329b57565b60405163100960cb60e01b815260376004820152602490fd5b156132bb57565b60405163100960cb60e01b815260386004820152602490fd5b156132db57565b60405163100960cb60e01b815260336004820152602490fd5b156132fb57565b60405163100960cb60e01b815260346004820152602490fd5b1561331b57565b60405163100960cb60e01b815260356004820152602490fd5b1561333b57565b60405163100960cb60e01b815260366004820152602490fd5b1561335b57565b60405163100960cb60e01b8152602b6004820152602490fd5b1561337b57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561339b57565b60405163100960cb60e01b8152602d6004820152602490fd5b156133bb57565b60405163100960cb60e01b8152602e6004820152602490fd5b156133db57565b60405163100960cb60e01b8152602f6004820152602490fd5b156133fb57565b60405163100960cb60e01b815260316004820152602490fd5b1561341b57565b60405163100960cb60e01b815260326004820152602490fd5b1561343b57565b60405163100960cb60e01b815260276004820152602490fd5b1561345b57565b60405163100960cb60e01b815260286004820152602490fd5b1561347b57565b60405163100960cb60e01b815260296004820152602490fd5b1561349b57565b60405163100960cb60e01b815260236004820152602490fd5b156134bb57565b602460405163100960cb60e01b8152816004820152fd5b156134d957565b60405163100960cb60e01b815260256004820152602490fd5b156134f957565b60405163100960cb60e01b815260266004820152602490fd5b1561351957565b60405163100960cb60e01b8152601f6004820152602490fd5b1561353957565b60405163100960cb60e01b815260206004820152602490fd5b1561355957565b60405163100960cb60e01b815260216004820152602490fd5b1561357957565b60405163100960cb60e01b815260226004820152602490fd5b1561359957565b60405163100960cb60e01b8152601c6004820152602490fd5b156135b957565b60405163100960cb60e01b8152601d6004820152602490fd5b156135d957565b60405163100960cb60e01b8152601e6004820152602490fd5b156135f957565b60405163100960cb60e01b815260196004820152602490fd5b1561361957565b60405163100960cb60e01b8152601a6004820152602490fd5b1561363957565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526136ce93600093849392849190608081016001600160401b038111828210176136d5575b6040525193165af16136be6136b76136e2565b8092613744565b506020808251830101910161372f565b156102d757565b6136dd61100c565b6136a4565b3d1561372a573d906001600160401b03821161371d575b60405191613711601f8201601f1916602001846110b8565b82523d6000602084013e565b61372561100c565b6136f9565b606090565b908160209103126102d7575161031e816118e0565b1561374c5790565b80511561375b57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b1561377c5790565b80511561378b57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600061031e928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526137e88161109d565b5193165af16136be6137f86136e2565b8092613774565b60009161031e9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526137e88161109d565b919061384c6116d2565b9260005b6001811061385e5750508252565b8061386b60019284611cdf565b516138768288611cdf565b526138818187611cdf565b506000198114613892575b01613850565b61389a613171565b61388c565b506040513d6000823e3d90fd5b8181106138b7575050565b600081556001016138ac565b6138ce600254610fd2565b806138d65750565b601f81116001146138e957506000600255565b600260005261392e90601f0160051c600080516020613f6d833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6138ac565b6000602081208160025555565b6139436111e4565b90600080835280602084015280604084015261395d611672565b606084015261396a6116d2565b60808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152806101808401526139ac611211565b6101a08401526101c0830152565b61014090805183526020810151151560208401526139f7604082015160408501908051805183526020908101518382015260409101511515910152565b606081015160a0840152608081015160c084015260a081015160e084015260c081015190610100918285015260e08101516101208501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b60018210613a6257505050565b6020606082613a746001948751613a35565b01930191019091613a55565b81516001600160a01b031681526103a0810192916103809060208181015161ffff1916908401526040818101516001600160a01b031690840152613acc606082015160608501906139ba565b608081015190613ae26101c09283860190613a50565b60a081015161022085015260c081015161024085015260e08101516102608501526101008101516102808501526101208101516102a08501526101408101516102c08501526101608101516102e0850152610180810151610300850152613b536101a0820151610320860190613a35565b0151910152565b90601f8211613b67575050565b6104ae9160026000526020600020906020601f840160051c83019310613b95575b601f0160051c01906138ac565b9091508190613b88565b80519091906001600160401b038111613c75575b613bc781613bc2600254610fd2565b613b5a565b602080601f8311600114613c035750819293600092613bf8575b50508160011b916000199060031b1c191617600255565b015190503880613be1565b6002600052601f19831694909190600080516020613f6d833981519152926000905b878210613c5d575050836001959610613c44575b505050811b01600255565b015160001960f88460031b161c19169055388080613c39565b80600185968294968601518155019501930190613c25565b613c7d61100c565b613bb3565b6060810190613c95602083510151151590565b15613d8257613d7d6104ae9261272f926080613caf61393b565b92613cc3613cbd84516102dc565b8561163d565b60208381015161ffff191690850152613ce2611f4a60408501516102dc565b8051606085015260c060a0840193845184870152015160a085015260608151015160c085015260e08151015160e085015260a08151015161010090818601528151015161012085015280515161014085015260c0815101516101608501525101516101808301528051516101a08301525151516101c0820152613d656003600055565b613d6e43600155565b60405192839160208301613a80565b613b9f565b613ddc91506000808080613d99611dd086516102dc565b60c086015190828215613dff575bf115613df2575b613dbb60408201516102dc565b60a0613dc783516102dc565b9201515151916001600160a01b031690613652565b60008055613dea6000600155565b6104ae6138c3565b613dfa61389f565b613dae565b506108fc613da7565b60405190613e1582611023565b81613e1e611301565b8152602061133d611301565b6024359060088210156102d757565b60209060431901126102d75760405190613e528261104b565b60443582613e5f826102e8565b52565b60209060e31901126102d75760405190613e7b8261104b565b60e43582613e5f826102e8565b60209060631901126102d75760405190613ea18261104b565b6064358252565b60409060831901126102d75760405190613ec182611023565b81608435613ece816102e8565b8152602060a435910152565b60c435906104ae826118e0565b6101a435906104ae826118e0565b6060906101031901126102d75760405190613f0f82611066565b8161010435613f1d816102e8565b815261012435613f2c816102e8565b6020820152604061014435910152565b6040906101631901126102d75760405190613f5682611023565b61016435825261018435602083611942836102e856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 19980,
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
