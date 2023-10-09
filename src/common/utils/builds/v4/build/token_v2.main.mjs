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
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async (_v2426 ) => {
          const v2426 = stdlib.protect(ctc0, _v2426, null);
        
        const v2427 = stdlib.protect(map2_ctc, await viewlib.viewMapRef(2, ctc0, v2426, ctc10), null);
        const v2428 = {
          None: 0,
          Some: 1
          }[v2427[0]];
        const v2429 = stdlib.eq(v2428, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2429;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async () => {
        
        
        return v2457;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_claimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async (_v2442, _v2443 ) => {
          const v2442 = stdlib.protect(ctc0, _v2442, null);
          const v2443 = stdlib.protect(ctc2, _v2443, null);
        
        const v2444 = [v2442, v2443];
        const v2445 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2444, ctc12), null);
        const v2446 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2447 = stdlib.fromSome(v2445, v2446);
        const v2448 = v2447.claimed;
        
        return v2448;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async (_v2430 ) => {
          const v2430 = stdlib.protect(ctc0, _v2430, null);
        
        const v2431 = stdlib.protect(map4_ctc, await viewlib.viewMapRef(4, ctc0, v2430, ctc10), null);
        const v2432 = {
          None: 0,
          Some: 1
          }[v2431[0]];
        const v2433 = stdlib.eq(v2432, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2433;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async () => {
        
        
        return v2434;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async () => {
        
        
        return v2450;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async () => {
        
        
        return v2449;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalCurrentAllocatoinToAllUsers = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async () => {
        
        
        return v2434;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalFundsDeposited = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async () => {
        
        
        return v2455;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async () => {
        
        
        return v2451;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalRewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async (_v2423 ) => {
          const v2423 = stdlib.protect(ctc0, _v2423, null);
        
        const v2424 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2423, ctc3), null);
        const v2425 = stdlib.fromSome(v2424, stdlib.checkedBigNumberify('./token_v2.rsh:104:58:decimal', stdlib.UInt_max, '0'));
        
        return v2425;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_userReward = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = svs;
      return (await ((async (_v2435, _v2436 ) => {
          const v2435 = stdlib.protect(ctc0, _v2435, null);
          const v2436 = stdlib.protect(ctc2, _v2436, null);
        
        const v2437 = [v2435, v2436];
        const v2438 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc11, v2437, ctc12), null);
        const v2439 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v2440 = stdlib.fromSome(v2438, v2439);
        const v2441 = v2440.rewards;
        
        return v2441;}))(...args));
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2540 = ctc.selfAddress();
  const v2542 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_addAdmin0_233" (defined at: ./token_v2.rsh:203:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v2545 = stdlib.addressEq(v2540, v2365);
  const v2546 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2540, ctc0), null);
  const v2547 = {
    None: 0,
    Some: 1
    }[v2546[0]];
  const v2548 = stdlib.eq(v2547, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2549 = v2545 ? true : v2548;
  stdlib.assert(v2549, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_addAdmin0_233" (defined at: ./token_v2.rsh:203:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v2556 = ['Admin_addAdmin0_233', v2542];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2556],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:209:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:209:14:decimal', stdlib.UInt_max, '0'), v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2757, ctc0), null);
          ;
          ;
          const v2900 = v2761[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v2900, ctc0, null);
          const v2909 = null;
          const v2910 = await txn1.getOutput('Admin_addAdmin', 'v2909', ctc0, v2909);
          
          const v2917 = v2379.keepGoing;
          const v2918 = v2379.percent;
          const v2925 = {
            bal: v2452,
            keepGoing: v2917,
            percent: v2918,
            totalCurrentAllocatoinToAllUsers: v2434,
            totalFundsDeposited: v2455,
            total_amount_claimed: v2450,
            total_rewards_allcoated: v2453,
            total_users_claim: v2449,
            usersNo: v2451
            };
          const v10820 = v2925;
          const v10822 = v2382;
          const v10823 = v2383;
          const v10824 = v2925.keepGoing;
          if (v10824) {
            const v10825 = v2925.totalCurrentAllocatoinToAllUsers;
            const v10826 = v2925.total_users_claim;
            const v10827 = v2925.total_amount_claimed;
            const v10828 = v2925.usersNo;
            const v10829 = v2925.bal;
            const v10830 = v2925.total_rewards_allcoated;
            const v10831 = v2925.totalFundsDeposited;
            const v10832 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v10833 = v10832[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10839 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v10840 = v10839[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: v2367
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2367
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
          const v3255 = v2758[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3749 = v2758[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4243 = v2758[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4737 = v2758[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5231 = v2758[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5725 = v2758[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6219 = v2758[1];
          
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      undefined /* setApiDetails */;
      const v2767 = stdlib.addressEq(v2757, v2365);
      const v2768 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2757, ctc0), null);
      const v2769 = {
        None: 0,
        Some: 1
        }[v2768[0]];
      const v2770 = stdlib.eq(v2769, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2771 = v2767 ? true : v2770;
      stdlib.assert(v2771, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      ;
      const v2900 = v2761[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v2900, ctc0, null);
      const v2909 = null;
      const v2910 = await txn1.getOutput('Admin_addAdmin', 'v2909', ctc0, v2909);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v2761, v2910), {
          at: './token_v2.rsh:203:11:application',
          fs: ['at ./token_v2.rsh:203:11:application call to [unknown function] (defined at: ./token_v2.rsh:203:11:function exp)', 'at ./token_v2.rsh:212:14:application call to "ret" (defined at: ./token_v2.rsh:210:15:function exp)', 'at ./token_v2.rsh:210:15:application call to [unknown function] (defined at: ./token_v2.rsh:210:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v2917 = v2379.keepGoing;
      const v2918 = v2379.percent;
      const v2925 = {
        bal: v2452,
        keepGoing: v2917,
        percent: v2918,
        totalCurrentAllocatoinToAllUsers: v2434,
        totalFundsDeposited: v2455,
        total_amount_claimed: v2450,
        total_rewards_allcoated: v2453,
        total_users_claim: v2449,
        usersNo: v2451
        };
      const v10820 = v2925;
      const v10822 = v2382;
      const v10823 = v2383;
      const v10824 = v2925.keepGoing;
      if (v10824) {
        const v10825 = v2925.totalCurrentAllocatoinToAllUsers;
        const v10826 = v2925.total_users_claim;
        const v10827 = v2925.total_amount_claimed;
        const v10828 = v2925.usersNo;
        const v10829 = v2925.bal;
        const v10830 = v2925.total_rewards_allcoated;
        const v10831 = v2925.totalFundsDeposited;
        const v10832 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v10833 = v10832[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10839 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v10840 = v10839[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5725 = v2758[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2458 = ctc.selfAddress();
  const v2460 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_deposit0_233" (defined at: ./token_v2.rsh:138:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v2461 = v2460[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2463 = stdlib.addressEq(v2458, v2365);
  const v2464 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2458, ctc0), null);
  const v2465 = {
    None: 0,
    Some: 1
    }[v2464[0]];
  const v2466 = stdlib.eq(v2465, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2467 = v2463 ? true : v2466;
  stdlib.assert(v2467, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_deposit0_233" (defined at: ./token_v2.rsh:138:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v2474 = ['Admin_deposit0_233', v2460];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2474],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:141:10:decimal', stdlib.UInt_max, '0'), [[v2461, v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3255 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v3274 = v3255[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2757, ctc0), null);
          ;
          const v3389 = stdlib.add(v2457, v3274);
          const v3391 = stdlib.Array_set(v2456, '0', v3389);
          const v3392 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3391);
          sim_r.txns.push({
            amt: v3274,
            kind: 'to',
            tok: v2367
            });
          const v3430 = null;
          const v3431 = await txn1.getOutput('Admin_deposit', 'v3430', ctc0, v3430);
          
          const v3438 = v2379.keepGoing;
          const v3439 = v2379.percent;
          const v3446 = stdlib.safeAdd(v2452, v3274);
          const v3447 = stdlib.safeAdd(v2455, v3274);
          const v3448 = {
            bal: v3446,
            keepGoing: v3438,
            percent: v3439,
            totalCurrentAllocatoinToAllUsers: v2434,
            totalFundsDeposited: v3447,
            total_amount_claimed: v2450,
            total_rewards_allcoated: v2453,
            total_users_claim: v2449,
            usersNo: v2451
            };
          const v11072 = v3448;
          const v11074 = v3392;
          const v11075 = v2383;
          const v11076 = v3448.keepGoing;
          if (v11076) {
            const v11077 = v3448.totalCurrentAllocatoinToAllUsers;
            const v11078 = v3448.total_users_claim;
            const v11079 = v3448.total_amount_claimed;
            const v11080 = v3448.usersNo;
            const v11081 = v3448.bal;
            const v11082 = v3448.total_rewards_allcoated;
            const v11083 = v3448.totalFundsDeposited;
            const v11084 = v3392[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11085 = v11084[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11091 = v3392[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11092 = v11091[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: v2367
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2367
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
          const v3749 = v2758[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4243 = v2758[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4737 = v2758[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5231 = v2758[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5725 = v2758[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6219 = v2758[1];
          
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      undefined /* setApiDetails */;
      const v3274 = v3255[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
      const v3275 = stdlib.addressEq(v2757, v2365);
      const v3276 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2757, ctc0), null);
      const v3277 = {
        None: 0,
        Some: 1
        }[v3276[0]];
      const v3278 = stdlib.eq(v3277, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3279 = v3275 ? true : v3278;
      stdlib.assert(v3279, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      ;
      const v3389 = stdlib.add(v2457, v3274);
      const v3391 = stdlib.Array_set(v2456, '0', v3389);
      const v3392 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3391);
      ;
      const v3430 = null;
      const v3431 = await txn1.getOutput('Admin_deposit', 'v3430', ctc0, v3430);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v3255, v3431), {
          at: './token_v2.rsh:138:11:application',
          fs: ['at ./token_v2.rsh:138:11:application call to [unknown function] (defined at: ./token_v2.rsh:138:11:function exp)', 'at ./token_v2.rsh:143:14:application call to "ret" (defined at: ./token_v2.rsh:142:15:function exp)', 'at ./token_v2.rsh:142:15:application call to [unknown function] (defined at: ./token_v2.rsh:142:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v3438 = v2379.keepGoing;
      const v3439 = v2379.percent;
      const v3446 = stdlib.safeAdd(v2452, v3274);
      const v3447 = stdlib.safeAdd(v2455, v3274);
      const v3448 = {
        bal: v3446,
        keepGoing: v3438,
        percent: v3439,
        totalCurrentAllocatoinToAllUsers: v2434,
        totalFundsDeposited: v3447,
        total_amount_claimed: v2450,
        total_rewards_allcoated: v2453,
        total_users_claim: v2449,
        usersNo: v2451
        };
      const v11072 = v3448;
      const v11074 = v3392;
      const v11075 = v2383;
      const v11076 = v3448.keepGoing;
      if (v11076) {
        const v11077 = v3448.totalCurrentAllocatoinToAllUsers;
        const v11078 = v3448.total_users_claim;
        const v11079 = v3448.total_amount_claimed;
        const v11080 = v3448.usersNo;
        const v11081 = v3448.bal;
        const v11082 = v3448.total_rewards_allcoated;
        const v11083 = v3448.totalFundsDeposited;
        const v11084 = v3392[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11085 = v11084[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11091 = v3392[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11092 = v11091[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5725 = v2758[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2514 = ctc.selfAddress();
  const v2516 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v2518 = v2516[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2521 = stdlib.addressEq(v2514, v2365);
  const v2522 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2514, ctc0), null);
  const v2523 = {
    None: 0,
    Some: 1
    }[v2522[0]];
  const v2524 = stdlib.eq(v2523, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2525 = v2521 ? true : v2524;
  stdlib.assert(v2525, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v2529 = stdlib.le(v2518, v2457);
  stdlib.assert(v2529, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_editUserReward0_233" (defined at: ./token_v2.rsh:190:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v2538 = ['Admin_editUserReward0_233', v2516];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2538],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:195:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:195:14:decimal', stdlib.UInt_max, '0'), v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3255 = v2758[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3749 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v3783 = v3749[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc6, v2757, ctc0), null);
          ;
          ;
          const v3945 = v3749[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc6, v3945, ctc1, v3783);
          const v3959 = null;
          const v3960 = await txn1.getOutput('Admin_editUserReward', 'v3959', ctc0, v3959);
          
          const v3968 = v2379.keepGoing;
          const v3969 = v2379.percent;
          const v3976 = {
            bal: v2452,
            keepGoing: v3968,
            percent: v3969,
            totalCurrentAllocatoinToAllUsers: v2434,
            totalFundsDeposited: v2455,
            total_amount_claimed: v2450,
            total_rewards_allcoated: v2453,
            total_users_claim: v2449,
            usersNo: v2451
            };
          const v11324 = v3976;
          const v11326 = v2382;
          const v11327 = v2383;
          const v11328 = v3976.keepGoing;
          if (v11328) {
            const v11329 = v3976.totalCurrentAllocatoinToAllUsers;
            const v11330 = v3976.total_users_claim;
            const v11331 = v3976.total_amount_claimed;
            const v11332 = v3976.usersNo;
            const v11333 = v3976.bal;
            const v11334 = v3976.total_rewards_allcoated;
            const v11335 = v3976.totalFundsDeposited;
            const v11336 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11337 = v11336[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11343 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11344 = v11343[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: v2367
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2367
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
          const v4243 = v2758[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4737 = v2758[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5231 = v2758[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5725 = v2758[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6219 = v2758[1];
          
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      undefined /* setApiDetails */;
      const v3783 = v3749[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
      const v3784 = stdlib.addressEq(v2757, v2365);
      const v3785 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2757, ctc0), null);
      const v3786 = {
        None: 0,
        Some: 1
        }[v3785[0]];
      const v3787 = stdlib.eq(v3786, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3788 = v3784 ? true : v3787;
      stdlib.assert(v3788, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v3792 = stdlib.le(v3783, v2457);
      stdlib.assert(v3792, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      ;
      const v3945 = v3749[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc6, v3945, ctc1, v3783);
      const v3959 = null;
      const v3960 = await txn1.getOutput('Admin_editUserReward', 'v3959', ctc0, v3959);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v3749, v3960), {
          at: './token_v2.rsh:190:11:application',
          fs: ['at ./token_v2.rsh:190:11:application call to [unknown function] (defined at: ./token_v2.rsh:190:11:function exp)', 'at ./token_v2.rsh:198:14:application call to "ret" (defined at: ./token_v2.rsh:196:15:function exp)', 'at ./token_v2.rsh:196:15:application call to [unknown function] (defined at: ./token_v2.rsh:196:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v3968 = v2379.keepGoing;
      const v3969 = v2379.percent;
      const v3976 = {
        bal: v2452,
        keepGoing: v3968,
        percent: v3969,
        totalCurrentAllocatoinToAllUsers: v2434,
        totalFundsDeposited: v2455,
        total_amount_claimed: v2450,
        total_rewards_allcoated: v2453,
        total_users_claim: v2449,
        usersNo: v2451
        };
      const v11324 = v3976;
      const v11326 = v2382;
      const v11327 = v2383;
      const v11328 = v3976.keepGoing;
      if (v11328) {
        const v11329 = v3976.totalCurrentAllocatoinToAllUsers;
        const v11330 = v3976.total_users_claim;
        const v11331 = v3976.total_amount_claimed;
        const v11332 = v3976.usersNo;
        const v11333 = v3976.bal;
        const v11334 = v3976.total_rewards_allcoated;
        const v11335 = v3976.totalFundsDeposited;
        const v11336 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11337 = v11336[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11343 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11344 = v11343[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5725 = v2758[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2604 = ctc.selfAddress();
  const v2606 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v2607 = stdlib.addressEq(v2365, v2604);
  stdlib.assert(v2607, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_endContractAndTransfer0_233" (defined at: ./token_v2.rsh:335:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v2612 = ['Admin_endContractAndTransfer0_233', v2606];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2612],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:338:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:338:14:decimal', stdlib.UInt_max, '0'), v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3255 = v2758[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3749 = v2758[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4243 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          ;
          const v4475 = null;
          const v4476 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4475', ctc0, v4475);
          
          const v4483 = v2379.percent;
          const v4490 = {
            bal: v2452,
            keepGoing: false,
            percent: v4483,
            totalCurrentAllocatoinToAllUsers: v2434,
            totalFundsDeposited: v2455,
            total_amount_claimed: v2450,
            total_rewards_allcoated: v2453,
            total_users_claim: v2449,
            usersNo: v2451
            };
          const v11576 = v4490;
          const v11578 = v2382;
          const v11579 = v2383;
          const v11580 = v4490.keepGoing;
          if (v11580) {
            const v11581 = v4490.totalCurrentAllocatoinToAllUsers;
            const v11582 = v4490.total_users_claim;
            const v11583 = v4490.total_amount_claimed;
            const v11584 = v4490.usersNo;
            const v11585 = v4490.bal;
            const v11586 = v4490.total_rewards_allcoated;
            const v11587 = v4490.totalFundsDeposited;
            const v11588 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11589 = v11588[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11595 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11596 = v11595[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: v2367
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2367
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
          const v4737 = v2758[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5231 = v2758[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5725 = v2758[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6219 = v2758[1];
          
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      undefined /* setApiDetails */;
      const v4295 = stdlib.addressEq(v2365, v2757);
      stdlib.assert(v4295, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      ;
      const v4475 = null;
      const v4476 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4475', ctc0, v4475);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v4243, v4476), {
          at: './token_v2.rsh:335:11:application',
          fs: ['at ./token_v2.rsh:335:11:application call to [unknown function] (defined at: ./token_v2.rsh:335:11:function exp)', 'at ./token_v2.rsh:340:14:application call to "ret" (defined at: ./token_v2.rsh:339:15:function exp)', 'at ./token_v2.rsh:339:15:application call to [unknown function] (defined at: ./token_v2.rsh:339:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v4483 = v2379.percent;
      const v4490 = {
        bal: v2452,
        keepGoing: false,
        percent: v4483,
        totalCurrentAllocatoinToAllUsers: v2434,
        totalFundsDeposited: v2455,
        total_amount_claimed: v2450,
        total_rewards_allcoated: v2453,
        total_users_claim: v2449,
        usersNo: v2451
        };
      const v11576 = v4490;
      const v11578 = v2382;
      const v11579 = v2383;
      const v11580 = v4490.keepGoing;
      if (v11580) {
        const v11581 = v4490.totalCurrentAllocatoinToAllUsers;
        const v11582 = v4490.total_users_claim;
        const v11583 = v4490.total_amount_claimed;
        const v11584 = v4490.usersNo;
        const v11585 = v4490.bal;
        const v11586 = v4490.total_rewards_allcoated;
        const v11587 = v4490.totalFundsDeposited;
        const v11588 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11589 = v11588[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11595 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11596 = v11595[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5725 = v2758[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2558 = ctc.selfAddress();
  const v2560 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./token_v2.rsh:217:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v2563 = stdlib.addressEq(v2558, v2365);
  stdlib.assert(v2563, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_revokeAdmin0_233" (defined at: ./token_v2.rsh:217:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v2570 = ['Admin_revokeAdmin0_233', v2560];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2570],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:220:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:220:14:decimal', stdlib.UInt_max, '0'), v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3255 = v2758[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3749 = v2758[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4243 = v2758[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4737 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          ;
          const v4987 = v4737[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 2, ctc6, v4987, ctc0, undefined /* Nothing */);
          const v4992 = null;
          const v4993 = await txn1.getOutput('Admin_revokeAdmin', 'v4992', ctc0, v4992);
          
          const v5000 = v2379.keepGoing;
          const v5001 = v2379.percent;
          const v5008 = {
            bal: v2452,
            keepGoing: v5000,
            percent: v5001,
            totalCurrentAllocatoinToAllUsers: v2434,
            totalFundsDeposited: v2455,
            total_amount_claimed: v2450,
            total_rewards_allcoated: v2453,
            total_users_claim: v2449,
            usersNo: v2451
            };
          const v11828 = v5008;
          const v11830 = v2382;
          const v11831 = v2383;
          const v11832 = v5008.keepGoing;
          if (v11832) {
            const v11833 = v5008.totalCurrentAllocatoinToAllUsers;
            const v11834 = v5008.total_users_claim;
            const v11835 = v5008.total_amount_claimed;
            const v11836 = v5008.usersNo;
            const v11837 = v5008.bal;
            const v11838 = v5008.total_rewards_allcoated;
            const v11839 = v5008.totalFundsDeposited;
            const v11840 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11841 = v11840[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11847 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v11848 = v11847[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: v2367
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2367
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
          const v5231 = v2758[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5725 = v2758[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6219 = v2758[1];
          
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      undefined /* setApiDetails */;
      const v4799 = stdlib.addressEq(v2757, v2365);
      stdlib.assert(v4799, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      ;
      const v4987 = v4737[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map2, ctc6, v4987, ctc0, undefined /* Nothing */);
      const v4992 = null;
      const v4993 = await txn1.getOutput('Admin_revokeAdmin', 'v4992', ctc0, v4992);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v4737, v4993), {
          at: './token_v2.rsh:217:11:application',
          fs: ['at ./token_v2.rsh:217:11:application call to [unknown function] (defined at: ./token_v2.rsh:217:11:function exp)', 'at ./token_v2.rsh:223:14:application call to "ret" (defined at: ./token_v2.rsh:221:15:function exp)', 'at ./token_v2.rsh:221:15:application call to [unknown function] (defined at: ./token_v2.rsh:221:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5000 = v2379.keepGoing;
      const v5001 = v2379.percent;
      const v5008 = {
        bal: v2452,
        keepGoing: v5000,
        percent: v5001,
        totalCurrentAllocatoinToAllUsers: v2434,
        totalFundsDeposited: v2455,
        total_amount_claimed: v2450,
        total_rewards_allcoated: v2453,
        total_users_claim: v2449,
        usersNo: v2451
        };
      const v11828 = v5008;
      const v11830 = v2382;
      const v11831 = v2383;
      const v11832 = v5008.keepGoing;
      if (v11832) {
        const v11833 = v5008.totalCurrentAllocatoinToAllUsers;
        const v11834 = v5008.total_users_claim;
        const v11835 = v5008.total_amount_claimed;
        const v11836 = v5008.usersNo;
        const v11837 = v5008.bal;
        const v11838 = v5008.total_rewards_allcoated;
        const v11839 = v5008.totalFundsDeposited;
        const v11840 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11841 = v11840[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11847 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v11848 = v11847[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5725 = v2758[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2478 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v2479 = v2478[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2481 = v2478[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v2487 = stdlib.gt(v2481, v2457);
  const v2490 = stdlib.safeSub(v2457, v2481);
  const v2491 = stdlib.ge(v2490, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2491, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot have an amout that would result to a negative balance',
    who: 'Admin_setReward'
    });
  stdlib.assert(v2487, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Balance has to be greater than Amt',
    who: 'Admin_setReward'
    });
  const v2496 = stdlib.safeAdd(v2434, v2481);
  const v2497 = stdlib.ge(v2457, v2496);
  stdlib.assert(v2497, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Balance has to be greater than total allocation ',
    who: 'Admin_setReward'
    });
  const v2499 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v2479, ctc0), null);
  const v2500 = {
    None: 0,
    Some: 1
    }[v2499[0]];
  const v2501 = stdlib.eq(v2500, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2501, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to "runAdmin_setReward0_233" (defined at: ./token_v2.rsh:152:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v2512 = ['Admin_setReward0_233', v2478];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2512],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:165:10:decimal', stdlib.UInt_max, '0'), [[v2481, v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3255 = v2758[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3749 = v2758[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4243 = v2758[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4737 = v2758[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5231 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v5302 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
          const v5304 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
          const v5316 = stdlib.safeAdd(v2434, v5304);
          stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, ctc6, v5302, ctc0), null);
          ;
          const v5365 = stdlib.add(v2457, v5304);
          const v5367 = stdlib.Array_set(v2456, '0', v5365);
          const v5368 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5367);
          sim_r.txns.push({
            amt: v5304,
            kind: 'to',
            tok: v2367
            });
          const v5506 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
          const v5508 = v5368[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
          const v5509 = v5508[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
          const v5529 = [v5302, v5506];
          const v5530 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v5529, ctc3), null);
          const v5531 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v5532 = stdlib.fromSome(v5530, v5531);
          const v5534 = v5532.claimed;
          const v5535 = v5532.rewards;
          const v5537 = stdlib.safeAdd(v5535, v5304);
          const v5538 = {
            claimed: v5534,
            rewards: v5537
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v5529, ctc3, v5538);
          const v5539 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v5302, ctc1), null);
          const v5540 = stdlib.fromSome(v5539, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
          const v5541 = stdlib.safeAdd(v5540, v5304);
          await stdlib.simMapSet(sim_r, 0, ctc6, v5302, ctc1, v5541);
          const v5542 = true;
          const v5543 = await txn1.getOutput('Admin_setReward', 'v5542', ctc9, v5542);
          
          const v5552 = v2379.keepGoing;
          const v5553 = v2379.percent;
          const v5562 = stdlib.safeAdd(v2452, v5304);
          const v5563 = {
            bal: v5562,
            keepGoing: v5552,
            percent: v5553,
            totalCurrentAllocatoinToAllUsers: v5316,
            totalFundsDeposited: v2455,
            total_amount_claimed: v2450,
            total_rewards_allcoated: v2453,
            total_users_claim: v2449,
            usersNo: v2451
            };
          const v12080 = v5563;
          const v12082 = v5368;
          const v12083 = v2383;
          const v12084 = v5563.keepGoing;
          if (v12084) {
            const v12085 = v5563.totalCurrentAllocatoinToAllUsers;
            const v12086 = v5563.total_users_claim;
            const v12087 = v5563.total_amount_claimed;
            const v12088 = v5563.usersNo;
            const v12089 = v5563.bal;
            const v12090 = v5563.total_rewards_allcoated;
            const v12091 = v5563.totalFundsDeposited;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: v2367
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2367
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
          const v5725 = v2758[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6219 = v2758[1];
          
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      undefined /* setApiDetails */;
      const v5302 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
      const v5304 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
      const v5307 = stdlib.gt(v5304, v2457);
      const v5310 = stdlib.safeSub(v2457, v5304);
      const v5311 = stdlib.ge(v5310, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5311, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      stdlib.assert(v5307, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v5316 = stdlib.safeAdd(v2434, v5304);
      const v5317 = stdlib.ge(v2457, v5316);
      stdlib.assert(v5317, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v5319 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc6, v5302, ctc0), null);
      const v5320 = {
        None: 0,
        Some: 1
        }[v5319[0]];
      const v5321 = stdlib.eq(v5320, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5321, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      ;
      const v5365 = stdlib.add(v2457, v5304);
      const v5367 = stdlib.Array_set(v2456, '0', v5365);
      const v5368 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5367);
      ;
      const v5506 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
      const v5508 = v5368[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
      const v5509 = v5508[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
      const v5510 = stdlib.gt(v5304, v5509);
      const v5513 = stdlib.safeSub(v5509, v5304);
      const v5514 = stdlib.ge(v5513, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5514, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Cannot have an amout that would result to a negative balance',
        who: 'Admin_setReward'
        });
      stdlib.assert(v5510, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Balance has to be greater than Amt',
        who: 'Admin_setReward'
        });
      const v5520 = stdlib.ge(v5509, v5316);
      stdlib.assert(v5520, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
        msg: 'Balance has to be greater than total allocation ',
        who: 'Admin_setReward'
        });
      const v5529 = [v5302, v5506];
      const v5530 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v5529, ctc3), null);
      const v5531 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v5532 = stdlib.fromSome(v5530, v5531);
      const v5534 = v5532.claimed;
      const v5535 = v5532.rewards;
      const v5537 = stdlib.safeAdd(v5535, v5304);
      const v5538 = {
        claimed: v5534,
        rewards: v5537
        };
      await stdlib.mapSet(map1, ctc22, v5529, ctc3, v5538);
      const v5539 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5302, ctc1), null);
      const v5540 = stdlib.fromSome(v5539, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
      const v5541 = stdlib.safeAdd(v5540, v5304);
      await stdlib.mapSet(map0, ctc6, v5302, ctc1, v5541);
      const v5542 = true;
      const v5543 = await txn1.getOutput('Admin_setReward', 'v5542', ctc9, v5542);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v5231, v5543), {
          at: './token_v2.rsh:152:11:application',
          fs: ['at ./token_v2.rsh:152:11:application call to [unknown function] (defined at: ./token_v2.rsh:152:11:function exp)', 'at ./token_v2.rsh:177:14:application call to "ret" (defined at: ./token_v2.rsh:166:15:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      const v5552 = v2379.keepGoing;
      const v5553 = v2379.percent;
      const v5562 = stdlib.safeAdd(v2452, v5304);
      const v5563 = {
        bal: v5562,
        keepGoing: v5552,
        percent: v5553,
        totalCurrentAllocatoinToAllUsers: v5316,
        totalFundsDeposited: v2455,
        total_amount_claimed: v2450,
        total_rewards_allcoated: v2453,
        total_users_claim: v2449,
        usersNo: v2451
        };
      const v12080 = v5563;
      const v12082 = v5368;
      const v12083 = v2383;
      const v12084 = v5563.keepGoing;
      if (v12084) {
        const v12085 = v5563.totalCurrentAllocatoinToAllUsers;
        const v12086 = v5563.total_users_claim;
        const v12087 = v5563.total_amount_claimed;
        const v12088 = v5563.usersNo;
        const v12089 = v5563.bal;
        const v12090 = v5563.total_rewards_allcoated;
        const v12091 = v5563.totalFundsDeposited;
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
      const v5725 = v2758[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
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
  
  
  const v2356 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2357 = [v2356];
  const v2361 = stdlib.protect(ctc6, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2362 = stdlib.protect(ctc7, interact.tok, 'for Deployer\'s interact field tok');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2361, v2362],
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
      
      const {data: [v2366, v2367], secs: v2369, time: v2368, didSend: v29, from: v2365 } = txn1;
      
      const v2370 = v2357[stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0')];
      const v2371 = stdlib.Array_set(v2370, '0', stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'));
      const v2372 = stdlib.Array_set(v2357, stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'), v2371);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2367
        });
      ;
      const v2374 = await ctc.getContractInfo();
      
      const v2376 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v2377 = {
        i: v2376,
        sign: true
        };
      const v2378 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v2377,
        totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2379 = v2378;
      const v2380 = v2368;
      const v2382 = v2372;
      const v2383 = stdlib.checkedBigNumberify('./token_v2.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v2422 = v2379.keepGoing;
        
        return v2422;})()) {
        const v2434 = v2379.totalCurrentAllocatoinToAllUsers;
        const v2449 = v2379.total_users_claim;
        const v2450 = v2379.total_amount_claimed;
        const v2451 = v2379.usersNo;
        const v2452 = v2379.bal;
        const v2453 = v2379.total_rewards_allcoated;
        const v2455 = v2379.totalFundsDeposited;
        const v2456 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v2457 = v2456[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v6746 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v6747 = v6746[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2365,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2365,
          tok: v2367
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2367
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
  const {data: [v2366, v2367], secs: v2369, time: v2368, didSend: v29, from: v2365 } = txn1;
  const v2370 = v2357[stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0')];
  const v2371 = stdlib.Array_set(v2370, '0', stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'));
  const v2372 = stdlib.Array_set(v2357, stdlib.checkedBigNumberify('./token_v2.rsh:65:12:dot', stdlib.UInt_max, '0'), v2371);
  ;
  ;
  const v2374 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2374), {
    at: './token_v2.rsh:67:27:application',
    fs: ['at ./token_v2.rsh:67:27:application call to [unknown function] (defined at: ./token_v2.rsh:67:27:function exp)', 'at ./token_v2.rsh:67:27:application call to "liftedInteract" (defined at: ./token_v2.rsh:67:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2376 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v2377 = {
    i: v2376,
    sign: true
    };
  const v2378 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v2377,
    totalCurrentAllocatoinToAllUsers: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    totalFundsDeposited: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2379 = v2378;
  let v2380 = v2368;
  let v2382 = v2372;
  let v2383 = stdlib.checkedBigNumberify('./token_v2.rsh:59:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v2422 = v2379.keepGoing;
    
    return v2422;})()) {
    const v2434 = v2379.totalCurrentAllocatoinToAllUsers;
    const v2449 = v2379.total_users_claim;
    const v2450 = v2379.total_amount_claimed;
    const v2451 = v2379.usersNo;
    const v2452 = v2379.bal;
    const v2453 = v2379.total_rewards_allcoated;
    const v2455 = v2379.totalFundsDeposited;
    const v2456 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
    const v2457 = v2456[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc15],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn3;
    switch (v2758[0]) {
      case 'Admin_addAdmin0_233': {
        const v2761 = v2758[1];
        undefined /* setApiDetails */;
        const v2767 = stdlib.addressEq(v2757, v2365);
        const v2768 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2757, ctc0), null);
        const v2769 = {
          None: 0,
          Some: 1
          }[v2768[0]];
        const v2770 = stdlib.eq(v2769, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2771 = v2767 ? true : v2770;
        stdlib.assert(v2771, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:204:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:203:34:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:203:34:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        ;
        const v2900 = v2761[stdlib.checkedBigNumberify('./token_v2.rsh:203:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v2900, ctc0, null);
        const v2909 = null;
        await txn3.getOutput('Admin_addAdmin', 'v2909', ctc0, v2909);
        const v2917 = v2379.keepGoing;
        const v2918 = v2379.percent;
        const v2925 = {
          bal: v2452,
          keepGoing: v2917,
          percent: v2918,
          totalCurrentAllocatoinToAllUsers: v2434,
          totalFundsDeposited: v2455,
          total_amount_claimed: v2450,
          total_rewards_allcoated: v2453,
          total_users_claim: v2449,
          usersNo: v2451
          };
        const cv2379 = v2925;
        const cv2380 = v2759;
        const cv2382 = v2382;
        const cv2383 = v2383;
        
        v2379 = cv2379;
        v2380 = cv2380;
        v2382 = cv2382;
        v2383 = cv2383;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_233': {
        const v3255 = v2758[1];
        undefined /* setApiDetails */;
        const v3274 = v3255[stdlib.checkedBigNumberify('./token_v2.rsh:138:10:spread', stdlib.UInt_max, '0')];
        const v3275 = stdlib.addressEq(v2757, v2365);
        const v3276 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2757, ctc0), null);
        const v3277 = {
          None: 0,
          Some: 1
          }[v3276[0]];
        const v3278 = stdlib.eq(v3277, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3279 = v3275 ? true : v3278;
        stdlib.assert(v3279, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:138:32:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:138:32:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        ;
        const v3389 = stdlib.add(v2457, v3274);
        const v3391 = stdlib.Array_set(v2456, '0', v3389);
        const v3392 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v3391);
        ;
        const v3430 = null;
        await txn3.getOutput('Admin_deposit', 'v3430', ctc0, v3430);
        const v3438 = v2379.keepGoing;
        const v3439 = v2379.percent;
        const v3446 = stdlib.safeAdd(v2452, v3274);
        const v3447 = stdlib.safeAdd(v2455, v3274);
        const v3448 = {
          bal: v3446,
          keepGoing: v3438,
          percent: v3439,
          totalCurrentAllocatoinToAllUsers: v2434,
          totalFundsDeposited: v3447,
          total_amount_claimed: v2450,
          total_rewards_allcoated: v2453,
          total_users_claim: v2449,
          usersNo: v2451
          };
        const cv2379 = v3448;
        const cv2380 = v2759;
        const cv2382 = v3392;
        const cv2383 = v2383;
        
        v2379 = cv2379;
        v2380 = cv2380;
        v2382 = cv2382;
        v2383 = cv2383;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_233': {
        const v3749 = v2758[1];
        undefined /* setApiDetails */;
        const v3783 = v3749[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '1')];
        const v3784 = stdlib.addressEq(v2757, v2365);
        const v3785 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc8, v2757, ctc0), null);
        const v3786 = {
          None: 0,
          Some: 1
          }[v3785[0]];
        const v3787 = stdlib.eq(v3786, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3788 = v3784 ? true : v3787;
        stdlib.assert(v3788, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:191:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v3792 = stdlib.le(v3783, v2457);
        stdlib.assert(v3792, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:190:45:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:190:45:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        ;
        const v3945 = v3749[stdlib.checkedBigNumberify('./token_v2.rsh:190:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc8, v3945, ctc1, v3783);
        const v3959 = null;
        await txn3.getOutput('Admin_editUserReward', 'v3959', ctc0, v3959);
        const v3968 = v2379.keepGoing;
        const v3969 = v2379.percent;
        const v3976 = {
          bal: v2452,
          keepGoing: v3968,
          percent: v3969,
          totalCurrentAllocatoinToAllUsers: v2434,
          totalFundsDeposited: v2455,
          total_amount_claimed: v2450,
          total_rewards_allcoated: v2453,
          total_users_claim: v2449,
          usersNo: v2451
          };
        const cv2379 = v3976;
        const cv2380 = v2759;
        const cv2382 = v2382;
        const cv2383 = v2383;
        
        v2379 = cv2379;
        v2380 = cv2380;
        v2382 = cv2382;
        v2383 = cv2383;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_233': {
        const v4243 = v2758[1];
        undefined /* setApiDetails */;
        const v4295 = stdlib.addressEq(v2365, v2757);
        stdlib.assert(v4295, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:336:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:335:44:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:335:44:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        ;
        const v4475 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v4475', ctc0, v4475);
        const v4483 = v2379.percent;
        const v4490 = {
          bal: v2452,
          keepGoing: false,
          percent: v4483,
          totalCurrentAllocatoinToAllUsers: v2434,
          totalFundsDeposited: v2455,
          total_amount_claimed: v2450,
          total_rewards_allcoated: v2453,
          total_users_claim: v2449,
          usersNo: v2451
          };
        const cv2379 = v4490;
        const cv2380 = v2759;
        const cv2382 = v2382;
        const cv2383 = v2383;
        
        v2379 = cv2379;
        v2380 = cv2380;
        v2382 = cv2382;
        v2383 = cv2383;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_233': {
        const v4737 = v2758[1];
        undefined /* setApiDetails */;
        const v4799 = stdlib.addressEq(v2757, v2365);
        stdlib.assert(v4799, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:217:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:217:37:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        ;
        const v4987 = v4737[stdlib.checkedBigNumberify('./token_v2.rsh:217:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map2, ctc8, v4987, ctc0, undefined /* Nothing */);
        const v4992 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v4992', ctc0, v4992);
        const v5000 = v2379.keepGoing;
        const v5001 = v2379.percent;
        const v5008 = {
          bal: v2452,
          keepGoing: v5000,
          percent: v5001,
          totalCurrentAllocatoinToAllUsers: v2434,
          totalFundsDeposited: v2455,
          total_amount_claimed: v2450,
          total_rewards_allcoated: v2453,
          total_users_claim: v2449,
          usersNo: v2451
          };
        const cv2379 = v5008;
        const cv2380 = v2759;
        const cv2382 = v2382;
        const cv2383 = v2383;
        
        v2379 = cv2379;
        v2380 = cv2380;
        v2382 = cv2382;
        v2383 = cv2383;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_233': {
        const v5231 = v2758[1];
        undefined /* setApiDetails */;
        const v5302 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '0')];
        const v5304 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '2')];
        const v5307 = stdlib.gt(v5304, v2457);
        const v5310 = stdlib.safeSub(v2457, v5304);
        const v5311 = stdlib.ge(v5310, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5311, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        stdlib.assert(v5307, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v5316 = stdlib.safeAdd(v2434, v5304);
        const v5317 = stdlib.ge(v2457, v5316);
        stdlib.assert(v5317, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v5319 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, ctc8, v5302, ctc0), null);
        const v5320 = {
          None: 0,
          Some: 1
          }[v5319[0]];
        const v5321 = stdlib.eq(v5320, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5321, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:163:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:152:49:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:152:49:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        ;
        const v5365 = stdlib.add(v2457, v5304);
        const v5367 = stdlib.Array_set(v2456, '0', v5365);
        const v5368 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:85:37:dot', stdlib.UInt_max, '0'), v5367);
        ;
        const v5506 = v5231[stdlib.checkedBigNumberify('./token_v2.rsh:152:10:spread', stdlib.UInt_max, '1')];
        const v5508 = v5368[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
        const v5509 = v5508[stdlib.checkedBigNumberify('./token_v2.rsh:153:41:application', stdlib.UInt_max, '0')];
        const v5510 = stdlib.gt(v5304, v5509);
        const v5513 = stdlib.safeSub(v5509, v5304);
        const v5514 = stdlib.ge(v5513, stdlib.checkedBigNumberify('./token_v2.rsh:155:31:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v5514, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Cannot have an amout that would result to a negative balance',
          who: 'Deployer'
          });
        stdlib.assert(v5510, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:158:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Balance has to be greater than Amt',
          who: 'Deployer'
          });
        const v5520 = stdlib.ge(v5509, v5316);
        stdlib.assert(v5520, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:166:15:application call to [unknown function] (defined at: ./token_v2.rsh:166:15:function exp)'],
          msg: 'Balance has to be greater than total allocation ',
          who: 'Deployer'
          });
        const v5529 = [v5302, v5506];
        const v5530 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v5529, ctc3), null);
        const v5531 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v5532 = stdlib.fromSome(v5530, v5531);
        const v5534 = v5532.claimed;
        const v5535 = v5532.rewards;
        const v5537 = stdlib.safeAdd(v5535, v5304);
        const v5538 = {
          claimed: v5534,
          rewards: v5537
          };
        await stdlib.mapSet(map1, ctc16, v5529, ctc3, v5538);
        const v5539 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v5302, ctc1), null);
        const v5540 = stdlib.fromSome(v5539, stdlib.checkedBigNumberify('./token_v2.rsh:175:60:decimal', stdlib.UInt_max, '0'));
        const v5541 = stdlib.safeAdd(v5540, v5304);
        await stdlib.mapSet(map0, ctc8, v5302, ctc1, v5541);
        const v5542 = true;
        await txn3.getOutput('Admin_setReward', 'v5542', ctc17, v5542);
        const v5552 = v2379.keepGoing;
        const v5553 = v2379.percent;
        const v5562 = stdlib.safeAdd(v2452, v5304);
        const v5563 = {
          bal: v5562,
          keepGoing: v5552,
          percent: v5553,
          totalCurrentAllocatoinToAllUsers: v5316,
          totalFundsDeposited: v2455,
          total_amount_claimed: v2450,
          total_rewards_allcoated: v2453,
          total_users_claim: v2449,
          usersNo: v2451
          };
        const cv2379 = v5563;
        const cv2380 = v2759;
        const cv2382 = v5368;
        const cv2383 = v2383;
        
        v2379 = cv2379;
        v2380 = cv2380;
        v2382 = cv2382;
        v2383 = cv2383;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_233': {
        const v5725 = v2758[1];
        undefined /* setApiDetails */;
        const v5825 = v5725[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
        const v5827 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc8, v2757, ctc1), null);
        const v5828 = stdlib.fromSome(v5827, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
        const v5831 = stdlib.le(v5825, v2457);
        stdlib.assert(v5831, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5833 = stdlib.ge(v5828, v5825);
        stdlib.assert(v5833, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        ;
        const v6061 = v5725[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
        const v6076 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc8, v2757, ctc0), null);
        const v6077 = {
          None: 0,
          Some: 1
          }[v6076[0]];
        const v6078 = stdlib.eq(v6077, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6079 = [v2757, v6061];
        const v6080 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc16, v6079, ctc3), null);
        const v6081 = {
          claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v6082 = stdlib.fromSome(v6080, v6081);
        const v6084 = v6082.claimed;
        const v6085 = v6082.rewards;
        const v6087 = stdlib.safeAdd(v6084, v5825);
        const v6089 = stdlib.safeSub(v6085, v5825);
        const v6090 = {
          claimed: v6087,
          rewards: v6089
          };
        await stdlib.mapSet(map1, ctc16, v6079, ctc3, v6090);
        const v6091 = true;
        await txn3.getOutput('User_claim', 'v6091', ctc17, v6091);
        const v6099 = {
          addr: v2757,
          amount: v5825,
          projectName: v2366
          };
        null;
        if (v6078) {
          const v6156 = stdlib.sub(v2457, v5825);
          const v6158 = stdlib.Array_set(v2456, '0', v6156);
          const v6159 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6158);
          ;
          const v6162 = stdlib.eq(v5828, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
          if (v6162) {
            await stdlib.mapSet(map0, ctc8, v2757, ctc1, undefined /* Nothing */);
            const v6164 = v2379.keepGoing;
            const v6165 = v2379.percent;
            const v6174 = stdlib.safeAdd(v2451, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
            const v6175 = stdlib.safeSub(v2452, v5825);
            const v6176 = stdlib.safeSub(v2434, v5825);
            const v6177 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6178 = stdlib.safeAdd(v2450, v5825);
            const v6179 = {
              bal: v6175,
              keepGoing: v6164,
              percent: v6165,
              totalCurrentAllocatoinToAllUsers: v6176,
              totalFundsDeposited: v2455,
              total_amount_claimed: v6178,
              total_rewards_allcoated: v2453,
              total_users_claim: v6177,
              usersNo: v6174
              };
            const cv2379 = v6179;
            const cv2380 = v2759;
            const cv2382 = v6159;
            const cv2383 = v2383;
            
            v2379 = cv2379;
            v2380 = cv2380;
            v2382 = cv2382;
            v2383 = cv2383;
            
            txn2 = txn3;
            continue;}
          else {
            const v6181 = stdlib.safeSub(v5828, v5825);
            await stdlib.mapSet(map0, ctc8, v2757, ctc1, v6181);
            const v6183 = v2379.keepGoing;
            const v6184 = v2379.percent;
            const v6193 = stdlib.safeAdd(v2451, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
            const v6194 = stdlib.safeSub(v2452, v5825);
            const v6195 = stdlib.safeSub(v2434, v5825);
            const v6196 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6197 = stdlib.safeAdd(v2450, v5825);
            const v6198 = {
              bal: v6194,
              keepGoing: v6183,
              percent: v6184,
              totalCurrentAllocatoinToAllUsers: v6195,
              totalFundsDeposited: v2455,
              total_amount_claimed: v6197,
              total_rewards_allcoated: v2453,
              total_users_claim: v6196,
              usersNo: v6193
              };
            const cv2379 = v6198;
            const cv2380 = v2759;
            const cv2382 = v6159;
            const cv2383 = v2383;
            
            v2379 = cv2379;
            v2380 = cv2380;
            v2382 = cv2382;
            v2383 = cv2383;
            
            txn2 = txn3;
            continue;}}
        else {
          await stdlib.mapSet(map3, ctc8, v2757, ctc0, null);
          const v6107 = stdlib.sub(v2457, v5825);
          const v6109 = stdlib.Array_set(v2456, '0', v6107);
          const v6110 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6109);
          ;
          const v6113 = stdlib.eq(v5828, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
          if (v6113) {
            await stdlib.mapSet(map0, ctc8, v2757, ctc1, undefined /* Nothing */);
            const v6115 = v2379.keepGoing;
            const v6116 = v2379.percent;
            const v6126 = stdlib.safeSub(v2452, v5825);
            const v6127 = stdlib.safeSub(v2434, v5825);
            const v6128 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6129 = stdlib.safeAdd(v2450, v5825);
            const v6130 = {
              bal: v6126,
              keepGoing: v6115,
              percent: v6116,
              totalCurrentAllocatoinToAllUsers: v6127,
              totalFundsDeposited: v2455,
              total_amount_claimed: v6129,
              total_rewards_allcoated: v2453,
              total_users_claim: v6128,
              usersNo: v2451
              };
            const cv2379 = v6130;
            const cv2380 = v2759;
            const cv2382 = v6110;
            const cv2383 = v2383;
            
            v2379 = cv2379;
            v2380 = cv2380;
            v2382 = cv2382;
            v2383 = cv2383;
            
            txn2 = txn3;
            continue;}
          else {
            const v6132 = stdlib.safeSub(v5828, v5825);
            await stdlib.mapSet(map0, ctc8, v2757, ctc1, v6132);
            const v6134 = v2379.keepGoing;
            const v6135 = v2379.percent;
            const v6145 = stdlib.safeSub(v2452, v5825);
            const v6146 = stdlib.safeSub(v2434, v5825);
            const v6147 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
            const v6148 = stdlib.safeAdd(v2450, v5825);
            const v6149 = {
              bal: v6145,
              keepGoing: v6134,
              percent: v6135,
              totalCurrentAllocatoinToAllUsers: v6146,
              totalFundsDeposited: v2455,
              total_amount_claimed: v6148,
              total_rewards_allcoated: v2453,
              total_users_claim: v6147,
              usersNo: v2451
              };
            const cv2379 = v6149;
            const cv2380 = v2759;
            const cv2382 = v6110;
            const cv2383 = v2383;
            
            v2379 = cv2379;
            v2380 = cv2380;
            v2382 = cv2382;
            v2383 = cv2383;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_233': {
        const v6219 = v2758[1];
        undefined /* setApiDetails */;
        ;
        ;
        await stdlib.mapSet(map4, ctc8, v2757, ctc0, null);
        const v6696 = null;
        await txn3.getOutput('User_optin', 'v6696', ctc0, v6696);
        const v6703 = v2379.keepGoing;
        const v6704 = v2379.percent;
        const v6711 = {
          bal: v2452,
          keepGoing: v6703,
          percent: v6704,
          totalCurrentAllocatoinToAllUsers: v2434,
          totalFundsDeposited: v2455,
          total_amount_claimed: v2450,
          total_rewards_allcoated: v2453,
          total_users_claim: v2449,
          usersNo: v2451
          };
        const cv2379 = v6711;
        const cv2380 = v2759;
        const cv2382 = v2382;
        const cv2383 = v2383;
        
        v2379 = cv2379;
        v2380 = cv2380;
        v2382 = cv2382;
        v2383 = cv2383;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v6746 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
  const v6747 = v6746[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2572 = ctc.selfAddress();
  const v2574 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2575 = v2574[stdlib.checkedBigNumberify('./token_v2.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2579 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2572, ctc1), null);
  const v2580 = stdlib.fromSome(v2579, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
  const v2583 = stdlib.le(v2575, v2457);
  stdlib.assert(v2583, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v2585 = stdlib.ge(v2580, v2575);
  stdlib.assert(v2585, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_claim0_233" (defined at: ./token_v2.rsh:276:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v2594 = ['User_claim0_233', v2574];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2594],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:281:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:281:14:decimal', stdlib.UInt_max, '0'), v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3255 = v2758[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3749 = v2758[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4243 = v2758[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4737 = v2758[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5231 = v2758[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5725 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5825 = v5725[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
          const v5827 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc6, v2757, ctc1), null);
          const v5828 = stdlib.fromSome(v5827, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          const v6061 = v5725[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
          const v6076 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc6, v2757, ctc0), null);
          const v6077 = {
            None: 0,
            Some: 1
            }[v6076[0]];
          const v6078 = stdlib.eq(v6077, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v6079 = [v2757, v6061];
          const v6080 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc22, v6079, ctc3), null);
          const v6081 = {
            claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          const v6082 = stdlib.fromSome(v6080, v6081);
          const v6084 = v6082.claimed;
          const v6085 = v6082.rewards;
          const v6087 = stdlib.safeAdd(v6084, v5825);
          const v6089 = stdlib.safeSub(v6085, v5825);
          const v6090 = {
            claimed: v6087,
            rewards: v6089
            };
          await stdlib.simMapSet(sim_r, 1, ctc22, v6079, ctc3, v6090);
          const v6091 = true;
          const v6092 = await txn1.getOutput('User_claim', 'v6091', ctc9, v6091);
          
          const v6099 = {
            addr: v2757,
            amount: v5825,
            projectName: v2366
            };
          null;
          if (v6078) {
            const v6156 = stdlib.sub(v2457, v5825);
            const v6158 = stdlib.Array_set(v2456, '0', v6156);
            const v6159 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6158);
            sim_r.txns.push({
              kind: 'from',
              to: v2757,
              tok: v2367
              });
            const v6162 = stdlib.eq(v5828, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
            if (v6162) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2757, ctc1, undefined /* Nothing */);
              const v6164 = v2379.keepGoing;
              const v6165 = v2379.percent;
              const v6174 = stdlib.safeAdd(v2451, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
              const v6175 = stdlib.safeSub(v2452, v5825);
              const v6176 = stdlib.safeSub(v2434, v5825);
              const v6177 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6178 = stdlib.safeAdd(v2450, v5825);
              const v6179 = {
                bal: v6175,
                keepGoing: v6164,
                percent: v6165,
                totalCurrentAllocatoinToAllUsers: v6176,
                totalFundsDeposited: v2455,
                total_amount_claimed: v6178,
                total_rewards_allcoated: v2453,
                total_users_claim: v6177,
                usersNo: v6174
                };
              const v12332 = v6179;
              const v12334 = v6159;
              const v12335 = v2383;
              const v12336 = v6179.keepGoing;
              if (v12336) {
                const v12337 = v6179.totalCurrentAllocatoinToAllUsers;
                const v12338 = v6179.total_users_claim;
                const v12339 = v6179.total_amount_claimed;
                const v12340 = v6179.usersNo;
                const v12341 = v6179.bal;
                const v12342 = v6179.total_rewards_allcoated;
                const v12343 = v6179.totalFundsDeposited;
                const v12344 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12345 = v12344[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12351 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12352 = v12351[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: v2367
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2367
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6181 = stdlib.safeSub(v5828, v5825);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2757, ctc1, v6181);
              const v6183 = v2379.keepGoing;
              const v6184 = v2379.percent;
              const v6193 = stdlib.safeAdd(v2451, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
              const v6194 = stdlib.safeSub(v2452, v5825);
              const v6195 = stdlib.safeSub(v2434, v5825);
              const v6196 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6197 = stdlib.safeAdd(v2450, v5825);
              const v6198 = {
                bal: v6194,
                keepGoing: v6183,
                percent: v6184,
                totalCurrentAllocatoinToAllUsers: v6195,
                totalFundsDeposited: v2455,
                total_amount_claimed: v6197,
                total_rewards_allcoated: v2453,
                total_users_claim: v6196,
                usersNo: v6193
                };
              const v12353 = v6198;
              const v12355 = v6159;
              const v12356 = v2383;
              const v12357 = v6198.keepGoing;
              if (v12357) {
                const v12358 = v6198.totalCurrentAllocatoinToAllUsers;
                const v12359 = v6198.total_users_claim;
                const v12360 = v6198.total_amount_claimed;
                const v12361 = v6198.usersNo;
                const v12362 = v6198.bal;
                const v12363 = v6198.total_rewards_allcoated;
                const v12364 = v6198.totalFundsDeposited;
                const v12365 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12366 = v12365[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12372 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12373 = v12372[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: v2367
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2367
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            await stdlib.simMapSet(sim_r, 3, ctc6, v2757, ctc0, null);
            const v6107 = stdlib.sub(v2457, v5825);
            const v6109 = stdlib.Array_set(v2456, '0', v6107);
            const v6110 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6109);
            sim_r.txns.push({
              kind: 'from',
              to: v2757,
              tok: v2367
              });
            const v6113 = stdlib.eq(v5828, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
            if (v6113) {
              await stdlib.simMapSet(sim_r, 0, ctc6, v2757, ctc1, undefined /* Nothing */);
              const v6115 = v2379.keepGoing;
              const v6116 = v2379.percent;
              const v6126 = stdlib.safeSub(v2452, v5825);
              const v6127 = stdlib.safeSub(v2434, v5825);
              const v6128 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6129 = stdlib.safeAdd(v2450, v5825);
              const v6130 = {
                bal: v6126,
                keepGoing: v6115,
                percent: v6116,
                totalCurrentAllocatoinToAllUsers: v6127,
                totalFundsDeposited: v2455,
                total_amount_claimed: v6129,
                total_rewards_allcoated: v2453,
                total_users_claim: v6128,
                usersNo: v2451
                };
              const v12374 = v6130;
              const v12376 = v6110;
              const v12377 = v2383;
              const v12378 = v6130.keepGoing;
              if (v12378) {
                const v12379 = v6130.totalCurrentAllocatoinToAllUsers;
                const v12380 = v6130.total_users_claim;
                const v12381 = v6130.total_amount_claimed;
                const v12382 = v6130.usersNo;
                const v12383 = v6130.bal;
                const v12384 = v6130.total_rewards_allcoated;
                const v12385 = v6130.totalFundsDeposited;
                const v12386 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12387 = v12386[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12393 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12394 = v12393[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: v2367
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2367
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6132 = stdlib.safeSub(v5828, v5825);
              await stdlib.simMapSet(sim_r, 0, ctc6, v2757, ctc1, v6132);
              const v6134 = v2379.keepGoing;
              const v6135 = v2379.percent;
              const v6145 = stdlib.safeSub(v2452, v5825);
              const v6146 = stdlib.safeSub(v2434, v5825);
              const v6147 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
              const v6148 = stdlib.safeAdd(v2450, v5825);
              const v6149 = {
                bal: v6145,
                keepGoing: v6134,
                percent: v6135,
                totalCurrentAllocatoinToAllUsers: v6146,
                totalFundsDeposited: v2455,
                total_amount_claimed: v6148,
                total_rewards_allcoated: v2453,
                total_users_claim: v6147,
                usersNo: v2451
                };
              const v12395 = v6149;
              const v12397 = v6110;
              const v12398 = v2383;
              const v12399 = v6149.keepGoing;
              if (v12399) {
                const v12400 = v6149.totalCurrentAllocatoinToAllUsers;
                const v12401 = v6149.total_users_claim;
                const v12402 = v6149.total_amount_claimed;
                const v12403 = v6149.usersNo;
                const v12404 = v6149.bal;
                const v12405 = v6149.total_rewards_allcoated;
                const v12406 = v6149.totalFundsDeposited;
                const v12407 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12408 = v12407[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v12414 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                const v12415 = v12414[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2365,
                  tok: v2367
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2367
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
          const v6219 = v2758[1];
          
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5725 = v2758[1];
      undefined /* setApiDetails */;
      const v5825 = v5725[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '0')];
      const v5827 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2757, ctc1), null);
      const v5828 = stdlib.fromSome(v5827, stdlib.checkedBigNumberify('./token_v2.rsh:277:56:decimal', stdlib.UInt_max, '0'));
      const v5831 = stdlib.le(v5825, v2457);
      stdlib.assert(v5831, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:278:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5833 = stdlib.ge(v5828, v5825);
      stdlib.assert(v5833, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token_v2.rsh:279:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token_v2.rsh:276:38:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:276:38:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)', 'at ./token_v2.rsh:102:14:application call to [unknown function] (defined at: ./token_v2.rsh:102:14:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      ;
      const v6061 = v5725[stdlib.checkedBigNumberify('./token_v2.rsh:276:10:spread', stdlib.UInt_max, '1')];
      const v6076 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v2757, ctc0), null);
      const v6077 = {
        None: 0,
        Some: 1
        }[v6076[0]];
      const v6078 = stdlib.eq(v6077, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6079 = [v2757, v6061];
      const v6080 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc22, v6079, ctc3), null);
      const v6081 = {
        claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        rewards: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v6082 = stdlib.fromSome(v6080, v6081);
      const v6084 = v6082.claimed;
      const v6085 = v6082.rewards;
      const v6087 = stdlib.safeAdd(v6084, v5825);
      const v6089 = stdlib.safeSub(v6085, v5825);
      const v6090 = {
        claimed: v6087,
        rewards: v6089
        };
      await stdlib.mapSet(map1, ctc22, v6079, ctc3, v6090);
      const v6091 = true;
      const v6092 = await txn1.getOutput('User_claim', 'v6091', ctc9, v6091);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v5725, v6092), {
          at: './token_v2.rsh:276:11:application',
          fs: ['at ./token_v2.rsh:276:11:application call to [unknown function] (defined at: ./token_v2.rsh:276:11:function exp)', 'at ./token_v2.rsh:295:14:application call to "ret" (defined at: ./token_v2.rsh:282:15:function exp)', 'at ./token_v2.rsh:282:15:application call to [unknown function] (defined at: ./token_v2.rsh:282:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v6099 = {
        addr: v2757,
        amount: v5825,
        projectName: v2366
        };
      null;
      if (v6078) {
        const v6156 = stdlib.sub(v2457, v5825);
        const v6158 = stdlib.Array_set(v2456, '0', v6156);
        const v6159 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6158);
        ;
        const v6162 = stdlib.eq(v5828, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
        if (v6162) {
          await stdlib.mapSet(map0, ctc6, v2757, ctc1, undefined /* Nothing */);
          const v6164 = v2379.keepGoing;
          const v6165 = v2379.percent;
          const v6174 = stdlib.safeAdd(v2451, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
          const v6175 = stdlib.safeSub(v2452, v5825);
          const v6176 = stdlib.safeSub(v2434, v5825);
          const v6177 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6178 = stdlib.safeAdd(v2450, v5825);
          const v6179 = {
            bal: v6175,
            keepGoing: v6164,
            percent: v6165,
            totalCurrentAllocatoinToAllUsers: v6176,
            totalFundsDeposited: v2455,
            total_amount_claimed: v6178,
            total_rewards_allcoated: v2453,
            total_users_claim: v6177,
            usersNo: v6174
            };
          const v12332 = v6179;
          const v12334 = v6159;
          const v12335 = v2383;
          const v12336 = v6179.keepGoing;
          if (v12336) {
            const v12337 = v6179.totalCurrentAllocatoinToAllUsers;
            const v12338 = v6179.total_users_claim;
            const v12339 = v6179.total_amount_claimed;
            const v12340 = v6179.usersNo;
            const v12341 = v6179.bal;
            const v12342 = v6179.total_rewards_allcoated;
            const v12343 = v6179.totalFundsDeposited;
            const v12344 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12345 = v12344[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12351 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12352 = v12351[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v6181 = stdlib.safeSub(v5828, v5825);
          await stdlib.mapSet(map0, ctc6, v2757, ctc1, v6181);
          const v6183 = v2379.keepGoing;
          const v6184 = v2379.percent;
          const v6193 = stdlib.safeAdd(v2451, stdlib.checkedBigNumberify('./token_v2.rsh:312:56:decimal', stdlib.UInt_max, '1'));
          const v6194 = stdlib.safeSub(v2452, v5825);
          const v6195 = stdlib.safeSub(v2434, v5825);
          const v6196 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6197 = stdlib.safeAdd(v2450, v5825);
          const v6198 = {
            bal: v6194,
            keepGoing: v6183,
            percent: v6184,
            totalCurrentAllocatoinToAllUsers: v6195,
            totalFundsDeposited: v2455,
            total_amount_claimed: v6197,
            total_rewards_allcoated: v2453,
            total_users_claim: v6196,
            usersNo: v6193
            };
          const v12353 = v6198;
          const v12355 = v6159;
          const v12356 = v2383;
          const v12357 = v6198.keepGoing;
          if (v12357) {
            const v12358 = v6198.totalCurrentAllocatoinToAllUsers;
            const v12359 = v6198.total_users_claim;
            const v12360 = v6198.total_amount_claimed;
            const v12361 = v6198.usersNo;
            const v12362 = v6198.bal;
            const v12363 = v6198.total_rewards_allcoated;
            const v12364 = v6198.totalFundsDeposited;
            const v12365 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12366 = v12365[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12372 = v6159[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12373 = v12372[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        await stdlib.mapSet(map3, ctc6, v2757, ctc0, null);
        const v6107 = stdlib.sub(v2457, v5825);
        const v6109 = stdlib.Array_set(v2456, '0', v6107);
        const v6110 = stdlib.Array_set(v2382, stdlib.checkedBigNumberify('./token_v2.rsh:303:32:application', stdlib.UInt_max, '0'), v6109);
        ;
        const v6113 = stdlib.eq(v5828, stdlib.checkedBigNumberify('./token_v2.rsh:305:23:decimal', stdlib.UInt_max, '0'));
        if (v6113) {
          await stdlib.mapSet(map0, ctc6, v2757, ctc1, undefined /* Nothing */);
          const v6115 = v2379.keepGoing;
          const v6116 = v2379.percent;
          const v6126 = stdlib.safeSub(v2452, v5825);
          const v6127 = stdlib.safeSub(v2434, v5825);
          const v6128 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6129 = stdlib.safeAdd(v2450, v5825);
          const v6130 = {
            bal: v6126,
            keepGoing: v6115,
            percent: v6116,
            totalCurrentAllocatoinToAllUsers: v6127,
            totalFundsDeposited: v2455,
            total_amount_claimed: v6129,
            total_rewards_allcoated: v2453,
            total_users_claim: v6128,
            usersNo: v2451
            };
          const v12374 = v6130;
          const v12376 = v6110;
          const v12377 = v2383;
          const v12378 = v6130.keepGoing;
          if (v12378) {
            const v12379 = v6130.totalCurrentAllocatoinToAllUsers;
            const v12380 = v6130.total_users_claim;
            const v12381 = v6130.total_amount_claimed;
            const v12382 = v6130.usersNo;
            const v12383 = v6130.bal;
            const v12384 = v6130.total_rewards_allcoated;
            const v12385 = v6130.totalFundsDeposited;
            const v12386 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12387 = v12386[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12393 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12394 = v12393[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v6132 = stdlib.safeSub(v5828, v5825);
          await stdlib.mapSet(map0, ctc6, v2757, ctc1, v6132);
          const v6134 = v2379.keepGoing;
          const v6135 = v2379.percent;
          const v6145 = stdlib.safeSub(v2452, v5825);
          const v6146 = stdlib.safeSub(v2434, v5825);
          const v6147 = stdlib.safeAdd(v2449, stdlib.checkedBigNumberify('./token_v2.rsh:316:52:decimal', stdlib.UInt_max, '1'));
          const v6148 = stdlib.safeAdd(v2450, v5825);
          const v6149 = {
            bal: v6145,
            keepGoing: v6134,
            percent: v6135,
            totalCurrentAllocatoinToAllUsers: v6146,
            totalFundsDeposited: v2455,
            total_amount_claimed: v6148,
            total_rewards_allcoated: v2453,
            total_users_claim: v6147,
            usersNo: v2451
            };
          const v12395 = v6149;
          const v12397 = v6110;
          const v12398 = v2383;
          const v12399 = v6149.keepGoing;
          if (v12399) {
            const v12400 = v6149.totalCurrentAllocatoinToAllUsers;
            const v12401 = v6149.total_users_claim;
            const v12402 = v6149.total_amount_claimed;
            const v12403 = v6149.usersNo;
            const v12404 = v6149.bal;
            const v12405 = v6149.total_rewards_allcoated;
            const v12406 = v6149.totalFundsDeposited;
            const v12407 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12408 = v12407[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v12414 = v6110[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12415 = v12414[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
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
  
  
  const [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc6, ctc7, ctc8, ctc12, ctc14, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc13, ctc1]);
  const v2598 = stdlib.protect(ctc15, await interact.in(), {
    at: './token_v2.rsh:1:23:application',
    fs: ['at ./token_v2.rsh:325:26:application call to [unknown function] (defined at: ./token_v2.rsh:325:26:function exp)', 'at ./token_v2.rsh:85:37:application call to "runUser_optin0_233" (defined at: ./token_v2.rsh:325:10:function exp)', 'at ./token_v2.rsh:85:37:application call to [unknown function] (defined at: ./token_v2.rsh:85:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2602 = ['User_optin0_233', v2598];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2365, v2366, v2367, v2379, v2382, v2383, v2434, v2449, v2450, v2451, v2452, v2453, v2455, v2456, v2457, v2602],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc21],
    pay: [stdlib.checkedBigNumberify('./token_v2.rsh:327:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token_v2.rsh:327:14:decimal', stdlib.UInt_max, '0'), v2367]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
      
      switch (v2758[0]) {
        case 'Admin_addAdmin0_233': {
          const v2761 = v2758[1];
          
          break;
          }
        case 'Admin_deposit0_233': {
          const v3255 = v2758[1];
          
          break;
          }
        case 'Admin_editUserReward0_233': {
          const v3749 = v2758[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_233': {
          const v4243 = v2758[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_233': {
          const v4737 = v2758[1];
          
          break;
          }
        case 'Admin_setReward0_233': {
          const v5231 = v2758[1];
          
          break;
          }
        case 'User_claim0_233': {
          const v5725 = v2758[1];
          
          break;
          }
        case 'User_optin0_233': {
          const v6219 = v2758[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 4, ctc6, v2757, ctc0, null);
          const v6696 = null;
          const v6697 = await txn1.getOutput('User_optin', 'v6696', ctc0, v6696);
          
          const v6703 = v2379.keepGoing;
          const v6704 = v2379.percent;
          const v6711 = {
            bal: v2452,
            keepGoing: v6703,
            percent: v6704,
            totalCurrentAllocatoinToAllUsers: v2434,
            totalFundsDeposited: v2455,
            total_amount_claimed: v2450,
            total_rewards_allcoated: v2453,
            total_users_claim: v2449,
            usersNo: v2451
            };
          const v12647 = v6711;
          const v12649 = v2382;
          const v12650 = v2383;
          const v12651 = v6711.keepGoing;
          if (v12651) {
            const v12652 = v6711.totalCurrentAllocatoinToAllUsers;
            const v12653 = v6711.total_users_claim;
            const v12654 = v6711.total_amount_claimed;
            const v12655 = v6711.usersNo;
            const v12656 = v6711.bal;
            const v12657 = v6711.total_rewards_allcoated;
            const v12658 = v6711.totalFundsDeposited;
            const v12659 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12660 = v12659[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v12666 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            const v12667 = v12666[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2365,
              tok: v2367
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2367
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
  const {data: [v2758], secs: v2760, time: v2759, didSend: v1574, from: v2757 } = txn1;
  switch (v2758[0]) {
    case 'Admin_addAdmin0_233': {
      const v2761 = v2758[1];
      return;
      break;
      }
    case 'Admin_deposit0_233': {
      const v3255 = v2758[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_233': {
      const v3749 = v2758[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_233': {
      const v4243 = v2758[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_233': {
      const v4737 = v2758[1];
      return;
      break;
      }
    case 'Admin_setReward0_233': {
      const v5231 = v2758[1];
      return;
      break;
      }
    case 'User_claim0_233': {
      const v5725 = v2758[1];
      return;
      break;
      }
    case 'User_optin0_233': {
      const v6219 = v2758[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map4, ctc6, v2757, ctc0, null);
      const v6696 = null;
      const v6697 = await txn1.getOutput('User_optin', 'v6696', ctc0, v6696);
      if (v1574) {
        stdlib.protect(ctc0, await interact.out(v6219, v6697), {
          at: './token_v2.rsh:325:11:application',
          fs: ['at ./token_v2.rsh:325:11:application call to [unknown function] (defined at: ./token_v2.rsh:325:11:function exp)', 'at ./token_v2.rsh:330:14:application call to "ret" (defined at: ./token_v2.rsh:328:15:function exp)', 'at ./token_v2.rsh:328:15:application call to [unknown function] (defined at: ./token_v2.rsh:328:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v6703 = v2379.keepGoing;
      const v6704 = v2379.percent;
      const v6711 = {
        bal: v2452,
        keepGoing: v6703,
        percent: v6704,
        totalCurrentAllocatoinToAllUsers: v2434,
        totalFundsDeposited: v2455,
        total_amount_claimed: v2450,
        total_rewards_allcoated: v2453,
        total_users_claim: v2449,
        usersNo: v2451
        };
      const v12647 = v6711;
      const v12649 = v2382;
      const v12650 = v2383;
      const v12651 = v6711.keepGoing;
      if (v12651) {
        const v12652 = v6711.totalCurrentAllocatoinToAllUsers;
        const v12653 = v6711.total_users_claim;
        const v12654 = v6711.total_amount_claimed;
        const v12655 = v6711.usersNo;
        const v12656 = v6711.bal;
        const v12657 = v6711.total_rewards_allcoated;
        const v12658 = v6711.totalFundsDeposited;
        const v12659 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v12660 = v12659[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v12666 = v2382[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
        const v12667 = v12666[stdlib.checkedBigNumberify('./token_v2.rsh:136:31:application', stdlib.UInt_max, '0')];
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
  appApproval: `CCALAAEIAxDUkwHUeijUxQGgjQYEJgYAAQABAQECAQQBAzEYQQkhKGRJIls1ASRbNQIpZCpkUIIWBAJfdMcEDbOGvAQTblc7BBp3QuUEIoRMJgQpN6f2BCmLWhAEMxobPgQ++WKaBEgk+QIEbuR2FAR4Stk3BHr+yG0Eis1nCAS79c2OBMfCnNUE3lcEZATtRtumBPMneAQE+W9s4AT5cw4LBPquyLA2GgCOFgBUAkwBdwhVAQYCbgGbAhwBNwGrAIkB6wG7AcsB2wFHCGUA3wDJAfsAawABADYaATULJK8pNAtQIQSvUFA1CyU0ARJEiApHNAsiWzUMNAtXCDE1DYAEVQtlgzQMFlA0DVCwNAyICr40DSJVjQgJxQnICcsIPwhCCEUITwhZQv+sNhoBFzULJK8qNAsWUCEHr1BQNQtC/6g2GgE2GgIXNQs1DCSvKzQMNAsWUFAkr1BQNQtC/4qAOQAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9KNhoBNQskrycENAtQIQSvUFA1C0L/NDYaATYaAhc2GgMXNQs1DDUNJK+AAQU0DTQMFlA0CxZQUFA1C0L/DTYaATULNAElEkSICU8oKCs0C1CICTsiVSMSFlEHCDUEMRkiEkSABBUffHU0BFCwI0M0ASUSRIgJIzQOFjUEQv/fNhoBNhoCFzULNQw0ASUSRIgJCCEEryghBK8qNAw0CxZQUIgI64gJZFcACDUEQv+vNhoBNQs0ASUSRIgI3igoJwQ0C1CICMkiVSMSFlEHCDUEQv+LNAElEkSICL80FhY1BEL/ezQBJRJEiAivNBQWNQRC/2s0ASUSRIgInzQVFjUEQv9bNAElEkSICI80FhY1BEL/SzQBJRJEiAh/NBAWNQRC/zs0ASUSRIgIbzQTFjUEQv8rNhoBNQs0ASUSRIgIWiSvKCSvKTQLUIgIQ4gIvDUEQv8KNhoBNhoCFzULNQw0ASUSRIgIMyEEryghBK8qNAw0CxZQUIgIFogIj1cICDUEQv7aNhoBFzYaAhc1CzUMJK+AAQY0DBY0CxZQUDIDUFA1C0L9pYA5AAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/WUxADQdEigoKzEAUIgHmyJVIxIRRCEGKzQNVwEgUCiIB/YoNQuACAAAAAAAAAtdNAtQsDQLNQQ0EhY0GlcIAVA0GlcJEVA0FhZQNBAWUDQUFlA0ERZQNBUWUDQTFlAyBjUZNRo0GlcIARdBBqI0GoEaWzUWNBqBOls1FTQagSpbNRQ0GoFCWzUTNBoiWzUSNBqBMls1ETQagSJbNRA0GFcAEUk1DyJbNQ40HTQcUDQbFlA0GlA0GFA0FxZQNBYWUDQVFlA0FBZQNBMWUDQSFlA0ERZQNBAWUDQPUDQOFlAlMgY1AjUBKUsBVwB/ZypMV397Zyg0ARY0AhZQZzEZIhJEiAdSNANA/X9C/XI0DSNbNQsxADQdEigoKzEAUIgGiiJVIxIRRDQLNBuIBzUoNQyACAAAAAAAAA1mNAxQsDQMNQQ0EjQLCBY0GlcIAVA0GlcJEVA0FhZQNBA0CwgWUDQUFlA0ERZQNBUWUDQTFlAyBjQYNA80DjQLCBZcAFwANRg1GTUaQv7cNAuBIFs1DDEANB0SKCgrMQBQiAYNIlUjEhFENAw0Dg5EIQUpNAtXACBQNAwWiAZgKDULgAgAAAAAAAAPdzQLULA0CzUENBIWNBpXCAFQNBpXCRFQNBYWUDQQFlA0FBZQNBEWUDQVFlA0ExZQMgY1GTUaQv5nNB0xABJEKDULgAgAAAAAAAARezQLULA0CzUENBIWKVA0GlcJEVA0FhZQNBAWUDQUFlA0ERZQNBUWUDQTFlAyBjUZNRpC/iAxADQdEkQhBis0DVcBIFCIBecoNQuACAAAAAAAABOANAtQsDQLNQQ0EhY0GlcIAVA0GlcJEVA0FhZQNBAWUDQUFlA0ERZQNBUWUDQTFlAyBjUZNRpC/ck0C1cAIDUeNAshB1s1DTQONA0JIg9ENA00Dg1ENBY0DQg1DDQONAwPRCgoJwQ0HlCIBNwiVSMSRDQYNA80DjQNCBZcAFwANRY0DTQbiAV4NBZXABEiW0k1DjQNCSIPRDQNNA4NRDQONAwPRDQeNAtXIAhQNQ4hBK8oIQSvKjQOUIgEjIgFBTULIQgqNA5QNAtXAAg0CyRbNA0IFlCIBN4hBSk0HlAkrygkryk0HlCIBF6IBNcXNA0IFogEwSM1C4AIAAAAAAAAFaY0CxZRBwhQsDQLFlEHCDUENBI0DQgWNBpXCAFQNBpXCRFQNAwWUDQQFlA0FBZQNBEWUDQVFlA0ExZQMgY0FjUYNRk1GkL8uTQLIls1HiSvKCSvKTEAUIgD7YgEZhc1DTQeNA4ORDQNNB4PRDEANAtXCAhQNQwhBK8oIQSvKjQMUIgDw4gEPDULIQgqNAxQNAsiWzQeCBY0CyRbNB4JFlCIBBIjNQuACAAAAAAAABfLNAsWUQcIULA0CxZRBwg1BDEANB4WUDQcUDULgASbyFRQNAtQsCgoJwUxAFCIA2giVSMSQQG3NBg0DzQONB4JFlwAXAA1CzQeNBsxAIgDzTQNQAIKIQUpMQBQiAPNNBI0HgkWNBpXCAFQNBpXCRFQNBY0HgkWUDQQFlA0FDQeCBZQNBEWUDQVIwgWUDQTIwgWUDIGNAs1GDUZNRpC+7MhBicEMQBQKIgDXCg1C4AIAAAAAAAAGig0C1CwNAs1BDQSFjQaVwgBUDQaVwkRUDQWFlA0EBZQNBQWUDQRFlA0FRZQNBMWUDIGNRk1GkL7YzEANR00CyJbNQw0C1cIHjUcNAuBJls1G4AEKEvH8DQMFlA0HFA0GxZQsDQMiAMcgRGvNQshCYgC/SI0GzIKiALtgEoAAAAAAAAAAAEAAAAAAAAABQAAAAAAAABkAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIGNAtJVwARJK9cAFwAIjUXNRg1GTUaQvq8iAKdIQmIAoc2GgE1C0L/SYgCjTYaATULQvejIjE0EkQlMTUSRCIxNhJEIjE3EkSIAm6B+gGvIiJC+v9C/BdC/Fs0DVcBMDULQvyoNA1XARA1C0L9rkL+sSEGJwUxAFAoiAINNBg0DzQONB4JFlwAXAA1CzQeNBsxAIgCCzQNQACYIQUpMQBQiAILNBI0HgkWNBpXCAFQNBpXCRFQNBY0HgkWUDQQFlA0FDQeCBZQNBEWUDQVIwgWUDQTFlAyBjQLNRg1GTUaQvnzIQUpMQBQNA00HgkWiAGYNBI0HgkWNBpXCAFQNBpXCRFQNBY0HgkWUDQQFlA0FDQeCBZQNBEWUDQVIwgWUDQTIwgWUDIGNAs1GDUZNRpC+aMhBSkxAFA0DTQeCRaIAUg0EjQeCRY0GlcIAVA0GlcJEVA0FjQeCRZQNBAWUDQUNB4IFlA0ERZQNBUjCBZQNBMWUDIGNAs1GDUZNRpC+VU0FzQdiAEdNBhXABEiWzQbNB2IAQsiNBsyCjIJiAFXMRmBBRJEiAEfMgpgMgp4CUk1BjIKiADtQvm7SEy/SIkisgEjshCyB7IIs4kisgEhCrIQshSyEbISs4lC+JVC+Z00DVcBKDULQvoPSIlMCUk1BjIJiACuiQlJQf/uSTUGMRY0ACMISTUACUcCOAcyChJEOBAjEkQ4CBJEib5JFlEHCEUETVCJSVcAIDUdSVcgHjUcSYE+WzUbSVdGSjUaSVeQETUYSYGhAVs1F0mBqQFbNRZJgbEBWzUVSYG5AVs1FEmBwQFbNRNJgckBWzUSSYHRAVs1EUmB2QFbNRBJV+ERNQ+B8gFbNQ6JTEm9QP8rSwOIABRC/yNJVwEATCJVTYmxQv8nsUL/FzQGCDUGibwiTgJNNAcINQeJIzUDiUkiEkw0AhIRRIk0BjQHSg9B/xxC/yQxFjQAIwhJNQAJRwM4FDIKEkQ4ECEKEkQ4EU8CEkQ4EhJEibGyFUL+zw==`,
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
    1417: `781`,
    1418: `781`,
    1419: `782`,
    142: `21`,
    1420: `782`,
    1421: `782`,
    1422: `782`,
    1423: `782`,
    1424: `782`,
    1425: `782`,
    1426: `782`,
    1427: `782`,
    1428: `782`,
    1429: `783`,
    143: `21`,
    1430: `783`,
    1431: `784`,
    1432: `785`,
    1433: `786`,
    1434: `786`,
    1435: `787`,
    1436: `787`,
    1437: `788`,
    1438: `788`,
    1439: `789`,
    144: `21`,
    1440: `790`,
    1441: `791`,
    1442: `792`,
    1443: `792`,
    1444: `793`,
    1445: `793`,
    1446: `793`,
    1447: `794`,
    1448: `795`,
    1449: `795`,
    145: `21`,
    1450: `796`,
    1451: `797`,
    1452: `798`,
    1453: `798`,
    1454: `799`,
    1455: `800`,
    1456: `801`,
    1457: `801`,
    1458: `802`,
    1459: `803`,
    146: `21`,
    1460: `804`,
    1461: `804`,
    1462: `805`,
    1463: `806`,
    1464: `807`,
    1465: `807`,
    1466: `808`,
    1467: `809`,
    1468: `810`,
    1469: `810`,
    147: `21`,
    1470: `811`,
    1471: `812`,
    1472: `813`,
    1473: `813`,
    1474: `814`,
    1475: `814`,
    1476: `815`,
    1477: `815`,
    1478: `816`,
    1479: `816`,
    148: `21`,
    1480: `816`,
    1481: `818`,
    1482: `818`,
    1483: `819`,
    1484: `819`,
    1485: `820`,
    1486: `821`,
    1487: `830`,
    1488: `830`,
    1489: `831`,
    149: `21`,
    1490: `832`,
    1491: `832`,
    1492: `833`,
    1493: `833`,
    1494: `833`,
    1495: `834`,
    1496: `835`,
    1497: `835`,
    1498: `835`,
    1499: `836`,
    15: `2`,
    150: `21`,
    1500: `837`,
    1501: `837`,
    1502: `838`,
    1503: `838`,
    1504: `838`,
    1505: `838`,
    1506: `838`,
    1507: `838`,
    1508: `838`,
    1509: `838`,
    151: `21`,
    1510: `838`,
    1511: `838`,
    1512: `839`,
    1513: `839`,
    1514: `840`,
    1515: `841`,
    1516: `842`,
    1517: `842`,
    1518: `843`,
    1519: `843`,
    152: `21`,
    1520: `844`,
    1521: `844`,
    1522: `845`,
    1523: `846`,
    1524: `846`,
    1525: `847`,
    1526: `847`,
    1527: `847`,
    1528: `848`,
    1529: `849`,
    153: `21`,
    1530: `849`,
    1531: `850`,
    1532: `850`,
    1533: `850`,
    1534: `851`,
    1535: `852`,
    1536: `852`,
    1537: `853`,
    1538: `854`,
    1539: `855`,
    154: `21`,
    1540: `855`,
    1541: `856`,
    1542: `857`,
    1543: `858`,
    1544: `858`,
    1545: `859`,
    1546: `860`,
    1547: `861`,
    1548: `861`,
    1549: `862`,
    155: `21`,
    1550: `863`,
    1551: `864`,
    1552: `864`,
    1553: `865`,
    1554: `866`,
    1555: `867`,
    1556: `867`,
    1557: `868`,
    1558: `869`,
    1559: `870`,
    156: `21`,
    1560: `870`,
    1561: `871`,
    1562: `871`,
    1563: `872`,
    1564: `872`,
    1565: `873`,
    1566: `873`,
    1567: `873`,
    1568: `875`,
    1569: `875`,
    157: `21`,
    1570: `876`,
    1571: `876`,
    1572: `876`,
    1573: `877`,
    1574: `877`,
    1575: `878`,
    1576: `878`,
    1577: `879`,
    1578: `879`,
    1579: `880`,
    158: `21`,
    1580: `881`,
    1581: `881`,
    1582: `882`,
    1583: `882`,
    1584: `883`,
    1585: `883`,
    1586: `884`,
    1587: `885`,
    1588: `886`,
    1589: `887`,
    159: `21`,
    1590: `895`,
    1591: `895`,
    1592: `896`,
    1593: `896`,
    1594: `897`,
    1595: `898`,
    1596: `906`,
    1597: `906`,
    1598: `907`,
    1599: `907`,
    16: `2`,
    160: `21`,
    1600: `908`,
    1601: `909`,
    1602: `909`,
    1603: `910`,
    1604: `910`,
    1605: `911`,
    1606: `911`,
    1607: `912`,
    1608: `913`,
    1609: `922`,
    161: `21`,
    1610: `923`,
    1611: `924`,
    1612: `924`,
    1613: `925`,
    1614: `925`,
    1615: `926`,
    1616: `927`,
    1617: `927`,
    1618: `927`,
    1619: `928`,
    162: `21`,
    1620: `929`,
    1621: `930`,
    1622: `931`,
    1623: `932`,
    1624: `940`,
    1625: `940`,
    1626: `941`,
    1627: `941`,
    1628: `942`,
    1629: `942`,
    163: `21`,
    1630: `943`,
    1631: `943`,
    1632: `944`,
    1633: `945`,
    1634: `946`,
    1635: `946`,
    1636: `947`,
    1637: `947`,
    1638: `948`,
    1639: `948`,
    164: `21`,
    1640: `949`,
    1641: `949`,
    1642: `950`,
    1643: `950`,
    1644: `951`,
    1645: `951`,
    1646: `951`,
    1647: `954`,
    1648: `954`,
    1649: `955`,
    165: `21`,
    1650: `955`,
    1651: `955`,
    1652: `956`,
    1653: `957`,
    1654: `958`,
    1655: `959`,
    1656: `959`,
    1657: `960`,
    1658: `960`,
    1659: `961`,
    166: `21`,
    1660: `962`,
    1661: `963`,
    1662: `964`,
    1663: `969`,
    1664: `969`,
    1665: `970`,
    1666: `970`,
    1667: `971`,
    1668: `972`,
    1669: `977`,
    167: `22`,
    1670: `977`,
    1671: `978`,
    1672: `978`,
    1673: `979`,
    1674: `980`,
    1675: `985`,
    1676: `985`,
    1677: `986`,
    1678: `986`,
    1679: `987`,
    168: `22`,
    1680: `987`,
    1681: `987`,
    1682: `988`,
    1683: `989`,
    1684: `989`,
    1685: `990`,
    1686: `990`,
    1687: `991`,
    1688: `993`,
    1689: `994`,
    169: `22`,
    1690: `994`,
    1691: `995`,
    1692: `996`,
    1693: `997`,
    1694: `997`,
    1695: `998`,
    1696: `999`,
    1697: `999`,
    1698: `999`,
    1699: `1000`,
    17: `2`,
    170: `23`,
    1700: `1000`,
    1701: `1000`,
    1702: `1001`,
    1703: `1001`,
    1704: `1002`,
    1705: `1002`,
    1706: `1003`,
    1707: `1004`,
    1708: `1004`,
    1709: `1005`,
    171: `23`,
    1710: `1006`,
    1711: `1006`,
    1712: `1007`,
    1713: `1007`,
    1714: `1007`,
    1715: `1008`,
    1716: `1008`,
    1717: `1009`,
    1718: `1010`,
    1719: `1011`,
    172: `23`,
    1720: `1011`,
    1721: `1012`,
    1722: `1013`,
    1723: `1014`,
    1724: `1015`,
    1725: `1015`,
    1726: `1015`,
    1727: `1017`,
    1728: `1017`,
    1729: `1018`,
    173: `23`,
    1730: `1019`,
    1731: `1019`,
    1732: `1020`,
    1733: `1021`,
    1734: `1022`,
    1735: `1023`,
    1736: `1024`,
    1737: `1025`,
    1738: `1026`,
    1739: `1027`,
    174: `23`,
    1740: `1027`,
    1741: `1028`,
    1742: `1029`,
    1743: `1029`,
    1744: `1029`,
    1745: `1030`,
    1746: `1030`,
    1747: `1030`,
    1748: `1031`,
    1749: `1032`,
    175: `23`,
    1750: `1032`,
    1751: `1033`,
    1752: `1034`,
    1753: `1035`,
    1754: `1035`,
    1755: `1035`,
    1756: `1036`,
    1757: `1037`,
    1758: `1037`,
    1759: `1038`,
    176: `23`,
    1760: `1038`,
    1761: `1038`,
    1762: `1038`,
    1763: `1038`,
    1764: `1038`,
    1765: `1038`,
    1766: `1038`,
    1767: `1038`,
    1768: `1038`,
    1769: `1039`,
    177: `23`,
    1770: `1039`,
    1771: `1040`,
    1772: `1041`,
    1773: `1041`,
    1774: `1041`,
    1775: `1042`,
    1776: `1043`,
    1777: `1044`,
    1778: `1044`,
    1779: `1045`,
    178: `23`,
    1780: `1046`,
    1781: `1046`,
    1782: `1046`,
    1783: `1047`,
    1784: `1047`,
    1785: `1048`,
    1786: `1048`,
    1787: `1049`,
    1788: `1049`,
    1789: `1050`,
    179: `23`,
    1790: `1051`,
    1791: `1052`,
    1792: `1052`,
    1793: `1053`,
    1794: `1053`,
    1795: `1053`,
    1796: `1054`,
    1797: `1055`,
    1798: `1055`,
    1799: `1056`,
    18: `2`,
    180: `23`,
    1800: `1056`,
    1801: `1056`,
    1802: `1057`,
    1803: `1058`,
    1804: `1058`,
    1805: `1059`,
    1806: `1060`,
    1807: `1061`,
    1808: `1061`,
    1809: `1062`,
    181: `23`,
    1810: `1063`,
    1811: `1064`,
    1812: `1064`,
    1813: `1065`,
    1814: `1066`,
    1815: `1067`,
    1816: `1067`,
    1817: `1068`,
    1818: `1069`,
    1819: `1070`,
    182: `23`,
    1820: `1070`,
    1821: `1071`,
    1822: `1072`,
    1823: `1073`,
    1824: `1073`,
    1825: `1074`,
    1826: `1075`,
    1827: `1076`,
    1828: `1076`,
    1829: `1077`,
    183: `23`,
    1830: `1077`,
    1831: `1078`,
    1832: `1078`,
    1833: `1079`,
    1834: `1079`,
    1835: `1080`,
    1836: `1080`,
    1837: `1081`,
    1838: `1081`,
    1839: `1081`,
    184: `23`,
    1840: `1083`,
    1841: `1083`,
    1842: `1084`,
    1843: `1085`,
    1844: `1086`,
    1845: `1086`,
    1846: `1087`,
    1847: `1088`,
    1848: `1090`,
    1849: `1091`,
    185: `23`,
    1850: `1092`,
    1851: `1093`,
    1852: `1094`,
    1853: `1094`,
    1854: `1095`,
    1855: `1096`,
    1856: `1096`,
    1857: `1096`,
    1858: `1097`,
    1859: `1097`,
    186: `23`,
    1860: `1097`,
    1861: `1098`,
    1862: `1099`,
    1863: `1099`,
    1864: `1100`,
    1865: `1100`,
    1866: `1101`,
    1867: `1101`,
    1868: `1102`,
    1869: `1103`,
    187: `23`,
    1870: `1111`,
    1871: `1111`,
    1872: `1112`,
    1873: `1112`,
    1874: `1113`,
    1875: `1114`,
    1876: `1122`,
    1877: `1122`,
    1878: `1123`,
    1879: `1123`,
    188: `23`,
    1880: `1124`,
    1881: `1124`,
    1882: `1124`,
    1883: `1125`,
    1884: `1126`,
    1885: `1126`,
    1886: `1127`,
    1887: `1127`,
    1888: `1128`,
    1889: `1130`,
    189: `23`,
    1890: `1131`,
    1891: `1131`,
    1892: `1132`,
    1893: `1133`,
    1894: `1134`,
    1895: `1134`,
    1896: `1135`,
    1897: `1136`,
    1898: `1136`,
    1899: `1136`,
    19: `2`,
    190: `23`,
    1900: `1137`,
    1901: `1137`,
    1902: `1137`,
    1903: `1138`,
    1904: `1138`,
    1905: `1139`,
    1906: `1139`,
    1907: `1140`,
    1908: `1141`,
    1909: `1141`,
    191: `23`,
    1910: `1142`,
    1911: `1143`,
    1912: `1143`,
    1913: `1144`,
    1914: `1145`,
    1915: `1146`,
    1916: `1146`,
    1917: `1147`,
    1918: `1148`,
    1919: `1149`,
    192: `23`,
    1920: `1149`,
    1921: `1150`,
    1922: `1151`,
    1923: `1152`,
    1924: `1152`,
    1925: `1153`,
    1926: `1154`,
    1927: `1155`,
    1928: `1156`,
    1929: `1156`,
    193: `23`,
    1930: `1156`,
    1931: `1157`,
    1932: `1158`,
    1933: `1158`,
    1934: `1159`,
    1935: `1159`,
    1936: `1159`,
    1937: `1159`,
    1938: `1159`,
    1939: `1159`,
    194: `23`,
    1940: `1159`,
    1941: `1159`,
    1942: `1159`,
    1943: `1159`,
    1944: `1160`,
    1945: `1160`,
    1946: `1161`,
    1947: `1162`,
    1948: `1162`,
    1949: `1162`,
    195: `23`,
    1950: `1163`,
    1951: `1164`,
    1952: `1165`,
    1953: `1165`,
    1954: `1166`,
    1955: `1167`,
    1956: `1167`,
    1957: `1167`,
    1958: `1168`,
    1959: `1168`,
    196: `23`,
    1960: `1169`,
    1961: `1169`,
    1962: `1170`,
    1963: `1170`,
    1964: `1171`,
    1965: `1172`,
    1966: `1173`,
    1967: `1173`,
    1968: `1174`,
    1969: `1175`,
    197: `23`,
    1970: `1175`,
    1971: `1176`,
    1972: `1176`,
    1973: `1176`,
    1974: `1176`,
    1975: `1176`,
    1976: `1176`,
    1977: `1177`,
    1978: `1177`,
    1979: `1178`,
    198: `23`,
    1980: `1179`,
    1981: `1182`,
    1982: `1183`,
    1983: `1184`,
    1984: `1184`,
    1985: `1185`,
    1986: `1185`,
    1987: `1186`,
    1988: `1187`,
    1989: `1187`,
    199: `23`,
    1990: `1187`,
    1991: `1188`,
    1992: `1189`,
    1993: `1190`,
    1994: `1191`,
    1995: `1192`,
    1996: `1192`,
    1997: `1192`,
    1998: `1193`,
    1999: `1193`,
    2: `2`,
    20: `2`,
    200: `23`,
    2000: `1194`,
    2001: `1194`,
    2002: `1195`,
    2003: `1195`,
    2004: `1196`,
    2005: `1196`,
    2006: `1197`,
    2007: `1198`,
    2008: `1199`,
    2009: `1199`,
    201: `23`,
    2010: `1200`,
    2011: `1200`,
    2012: `1201`,
    2013: `1201`,
    2014: `1202`,
    2015: `1202`,
    2016: `1204`,
    2017: `1204`,
    2018: `1205`,
    2019: `1205`,
    202: `23`,
    2020: `1206`,
    2021: `1206`,
    2022: `1206`,
    2023: `1207`,
    2024: `1207`,
    2025: `1208`,
    2026: `1208`,
    2027: `1208`,
    2028: `1209`,
    2029: `1209`,
    203: `23`,
    2030: `1210`,
    2031: `1211`,
    2032: `1211`,
    2033: `1212`,
    2034: `1213`,
    2035: `1213`,
    2036: `1213`,
    2037: `1214`,
    2038: `1214`,
    2039: `1215`,
    204: `23`,
    2040: `1215`,
    2041: `1216`,
    2042: `1217`,
    2043: `1218`,
    2044: `1218`,
    2045: `1219`,
    2046: `1219`,
    2047: `1219`,
    2048: `1220`,
    2049: `1221`,
    205: `23`,
    2050: `1221`,
    2051: `1222`,
    2052: `1222`,
    2053: `1222`,
    2054: `1223`,
    2055: `1224`,
    2056: `1224`,
    2057: `1225`,
    2058: `1225`,
    2059: `1226`,
    206: `23`,
    2060: `1227`,
    2061: `1228`,
    2062: `1229`,
    2063: `1229`,
    2064: `1230`,
    2065: `1231`,
    2066: `1232`,
    2067: `1232`,
    2068: `1233`,
    2069: `1233`,
    207: `23`,
    2070: `1234`,
    2071: `1235`,
    2072: `1236`,
    2073: `1237`,
    2074: `1237`,
    2075: `1238`,
    2076: `1239`,
    2077: `1240`,
    2078: `1240`,
    2079: `1241`,
    208: `23`,
    2080: `1242`,
    2081: `1243`,
    2082: `1244`,
    2083: `1245`,
    2084: `1245`,
    2085: `1246`,
    2086: `1247`,
    2087: `1248`,
    2088: `1249`,
    2089: `1250`,
    209: `23`,
    2090: `1250`,
    2091: `1251`,
    2092: `1251`,
    2093: `1252`,
    2094: `1252`,
    2095: `1253`,
    2096: `1253`,
    2097: `1254`,
    2098: `1254`,
    2099: `1255`,
    21: `2`,
    210: `23`,
    2100: `1255`,
    2101: `1255`,
    2102: `1258`,
    2103: `1258`,
    2104: `1259`,
    2105: `1259`,
    2106: `1260`,
    2107: `1260`,
    2108: `1261`,
    2109: `1262`,
    211: `23`,
    2110: `1263`,
    2111: `1263`,
    2112: `1263`,
    2113: `1264`,
    2114: `1265`,
    2115: `1265`,
    2116: `1266`,
    2117: `1266`,
    2118: `1266`,
    2119: `1266`,
    212: `23`,
    2120: `1266`,
    2121: `1266`,
    2122: `1266`,
    2123: `1266`,
    2124: `1266`,
    2125: `1266`,
    2126: `1267`,
    2127: `1267`,
    2128: `1268`,
    2129: `1269`,
    213: `23`,
    2130: `1270`,
    2131: `1270`,
    2132: `1271`,
    2133: `1271`,
    2134: `1272`,
    2135: `1272`,
    2136: `1273`,
    2137: `1274`,
    2138: `1274`,
    2139: `1275`,
    214: `23`,
    2140: `1275`,
    2141: `1275`,
    2142: `1276`,
    2143: `1277`,
    2144: `1277`,
    2145: `1278`,
    2146: `1278`,
    2147: `1278`,
    2148: `1279`,
    2149: `1280`,
    215: `23`,
    2150: `1280`,
    2151: `1281`,
    2152: `1282`,
    2153: `1283`,
    2154: `1283`,
    2155: `1284`,
    2156: `1285`,
    2157: `1286`,
    2158: `1286`,
    2159: `1287`,
    216: `25`,
    2160: `1288`,
    2161: `1289`,
    2162: `1289`,
    2163: `1290`,
    2164: `1291`,
    2165: `1292`,
    2166: `1292`,
    2167: `1293`,
    2168: `1294`,
    2169: `1295`,
    217: `27`,
    2170: `1295`,
    2171: `1296`,
    2172: `1297`,
    2173: `1298`,
    2174: `1298`,
    2175: `1299`,
    2176: `1299`,
    2177: `1300`,
    2178: `1300`,
    2179: `1301`,
    218: `27`,
    2180: `1301`,
    2181: `1301`,
    2182: `1303`,
    2183: `1303`,
    2184: `1304`,
    2185: `1304`,
    2186: `1305`,
    2187: `1305`,
    2188: `1306`,
    2189: `1307`,
    219: `27`,
    2190: `1308`,
    2191: `1308`,
    2192: `1309`,
    2193: `1309`,
    2194: `1310`,
    2195: `1310`,
    2196: `1310`,
    2197: `1311`,
    2198: `1311`,
    2199: `1312`,
    22: `2`,
    220: `28`,
    2200: `1312`,
    2201: `1313`,
    2202: `1313`,
    2203: `1314`,
    2204: `1315`,
    2205: `1315`,
    2206: `1316`,
    2207: `1316`,
    2208: `1316`,
    2209: `1316`,
    221: `28`,
    2210: `1316`,
    2211: `1316`,
    2212: `1317`,
    2213: `1317`,
    2214: `1318`,
    2215: `1319`,
    2216: `1320`,
    2217: `1320`,
    2218: `1321`,
    2219: `1322`,
    222: `30`,
    2220: `1322`,
    2221: `1323`,
    2222: `1324`,
    2223: `1325`,
    2224: `1327`,
    2225: `1327`,
    2226: `1328`,
    2227: `1328`,
    2228: `1328`,
    2229: `1329`,
    223: `31`,
    2230: `1329`,
    2231: `1330`,
    2232: `1331`,
    2233: `1331`,
    2234: `1332`,
    2235: `1332`,
    2236: `1333`,
    2237: `1333`,
    2238: `1333`,
    2239: `1334`,
    224: `32`,
    2240: `1336`,
    2241: `1336`,
    2242: `1337`,
    2243: `1337`,
    2244: `1338`,
    2245: `1338`,
    2246: `1338`,
    2247: `1339`,
    2248: `1339`,
    2249: `1339`,
    225: `33`,
    2250: `1339`,
    2251: `1339`,
    2252: `1339`,
    2253: `1339`,
    2254: `1339`,
    2255: `1339`,
    2256: `1339`,
    2257: `1339`,
    2258: `1339`,
    2259: `1339`,
    226: `33`,
    2260: `1339`,
    2261: `1339`,
    2262: `1339`,
    2263: `1339`,
    2264: `1339`,
    2265: `1339`,
    2266: `1339`,
    2267: `1339`,
    2268: `1339`,
    2269: `1339`,
    227: `34`,
    2270: `1339`,
    2271: `1339`,
    2272: `1339`,
    2273: `1339`,
    2274: `1339`,
    2275: `1339`,
    2276: `1339`,
    2277: `1339`,
    2278: `1339`,
    2279: `1339`,
    228: `35`,
    2280: `1339`,
    2281: `1339`,
    2282: `1339`,
    2283: `1339`,
    2284: `1339`,
    2285: `1339`,
    2286: `1339`,
    2287: `1339`,
    2288: `1339`,
    2289: `1339`,
    229: `35`,
    2290: `1339`,
    2291: `1339`,
    2292: `1339`,
    2293: `1339`,
    2294: `1339`,
    2295: `1339`,
    2296: `1339`,
    2297: `1339`,
    2298: `1339`,
    2299: `1339`,
    23: `2`,
    230: `36`,
    2300: `1339`,
    2301: `1339`,
    2302: `1339`,
    2303: `1339`,
    2304: `1339`,
    2305: `1339`,
    2306: `1339`,
    2307: `1339`,
    2308: `1339`,
    2309: `1339`,
    231: `37`,
    2310: `1339`,
    2311: `1339`,
    2312: `1339`,
    2313: `1339`,
    2314: `1339`,
    2315: `1339`,
    2316: `1339`,
    2317: `1339`,
    2318: `1339`,
    2319: `1339`,
    232: `38`,
    2320: `1339`,
    2321: `1339`,
    2322: `1339`,
    2323: `1340`,
    2324: `1340`,
    2325: `1341`,
    2326: `1341`,
    2327: `1342`,
    2328: `1343`,
    2329: `1343`,
    233: `39`,
    2330: `1343`,
    2331: `1344`,
    2332: `1345`,
    2333: `1346`,
    2334: `1346`,
    2335: `1347`,
    2336: `1347`,
    2337: `1348`,
    2338: `1349`,
    2339: `1349`,
    234: `39`,
    2340: `1350`,
    2341: `1350`,
    2342: `1351`,
    2343: `1351`,
    2344: `1352`,
    2345: `1352`,
    2346: `1353`,
    2347: `1353`,
    2348: `1353`,
    2349: `1355`,
    235: `41`,
    2350: `1355`,
    2351: `1355`,
    2352: `1356`,
    2353: `1356`,
    2354: `1357`,
    2355: `1357`,
    2356: `1357`,
    2357: `1358`,
    2358: `1358`,
    2359: `1358`,
    236: `42`,
    2360: `1359`,
    2361: `1359`,
    2362: `1360`,
    2363: `1360`,
    2364: `1360`,
    2365: `1362`,
    2366: `1362`,
    2367: `1362`,
    2368: `1363`,
    2369: `1363`,
    237: `42`,
    2370: `1363`,
    2371: `1364`,
    2372: `1364`,
    2373: `1365`,
    2374: `1365`,
    2375: `1365`,
    2376: `1367`,
    2377: `1368`,
    2378: `1368`,
    2379: `1369`,
    238: `43`,
    2380: `1370`,
    2381: `1371`,
    2382: `1372`,
    2383: `1372`,
    2384: `1373`,
    2385: `1374`,
    2386: `1375`,
    2387: `1376`,
    2388: `1376`,
    2389: `1377`,
    239: `44`,
    2390: `1378`,
    2391: `1379`,
    2392: `1380`,
    2393: `1380`,
    2394: `1381`,
    2395: `1382`,
    2396: `1383`,
    2397: `1383`,
    2398: `1383`,
    2399: `1384`,
    24: `2`,
    240: `45`,
    2400: `1384`,
    2401: `1384`,
    2402: `1385`,
    2403: `1386`,
    2404: `1387`,
    2405: `1388`,
    2406: `1388`,
    2407: `1388`,
    2408: `1390`,
    2409: `1390`,
    241: `45`,
    2410: `1390`,
    2411: `1392`,
    2412: `1392`,
    2413: `1392`,
    2414: `1394`,
    2415: `1394`,
    2416: `1395`,
    2417: `1395`,
    2418: `1395`,
    2419: `1396`,
    242: `45`,
    2420: `1396`,
    2421: `1397`,
    2422: `1397`,
    2423: `1397`,
    2424: `1399`,
    2425: `1399`,
    2426: `1400`,
    2427: `1400`,
    2428: `1400`,
    2429: `1401`,
    243: `46`,
    2430: `1401`,
    2431: `1402`,
    2432: `1402`,
    2433: `1402`,
    2434: `1404`,
    2435: `1404`,
    2436: `1404`,
    2437: `1406`,
    2438: `1406`,
    2439: `1407`,
    244: `46`,
    2440: `1407`,
    2441: `1408`,
    2442: `1408`,
    2443: `1409`,
    2444: `1410`,
    2445: `1411`,
    2446: `1411`,
    2447: `1411`,
    2448: `1412`,
    2449: `1412`,
    245: `47`,
    2450: `1413`,
    2451: `1413`,
    2452: `1414`,
    2453: `1414`,
    2454: `1415`,
    2455: `1415`,
    2456: `1416`,
    2457: `1417`,
    2458: `1418`,
    2459: `1418`,
    246: `48`,
    2460: `1419`,
    2461: `1419`,
    2462: `1420`,
    2463: `1420`,
    2464: `1421`,
    2465: `1421`,
    2466: `1423`,
    2467: `1423`,
    2468: `1424`,
    2469: `1424`,
    247: `49`,
    2470: `1425`,
    2471: `1425`,
    2472: `1425`,
    2473: `1426`,
    2474: `1426`,
    2475: `1427`,
    2476: `1427`,
    2477: `1427`,
    2478: `1428`,
    2479: `1428`,
    248: `49`,
    2480: `1429`,
    2481: `1430`,
    2482: `1430`,
    2483: `1431`,
    2484: `1432`,
    2485: `1432`,
    2486: `1432`,
    2487: `1433`,
    2488: `1433`,
    2489: `1434`,
    249: `50`,
    2490: `1434`,
    2491: `1435`,
    2492: `1436`,
    2493: `1437`,
    2494: `1437`,
    2495: `1438`,
    2496: `1438`,
    2497: `1438`,
    2498: `1439`,
    2499: `1440`,
    25: `2`,
    250: `50`,
    2500: `1440`,
    2501: `1441`,
    2502: `1441`,
    2503: `1441`,
    2504: `1442`,
    2505: `1443`,
    2506: `1443`,
    2507: `1444`,
    2508: `1444`,
    2509: `1445`,
    251: `51`,
    2510: `1446`,
    2511: `1447`,
    2512: `1448`,
    2513: `1448`,
    2514: `1449`,
    2515: `1450`,
    2516: `1451`,
    2517: `1451`,
    2518: `1452`,
    2519: `1452`,
    252: `51`,
    2520: `1453`,
    2521: `1454`,
    2522: `1455`,
    2523: `1456`,
    2524: `1456`,
    2525: `1457`,
    2526: `1458`,
    2527: `1459`,
    2528: `1459`,
    2529: `1460`,
    253: `51`,
    2530: `1461`,
    2531: `1462`,
    2532: `1463`,
    2533: `1464`,
    2534: `1464`,
    2535: `1465`,
    2536: `1466`,
    2537: `1467`,
    2538: `1467`,
    2539: `1468`,
    254: `52`,
    2540: `1468`,
    2541: `1469`,
    2542: `1469`,
    2543: `1470`,
    2544: `1470`,
    2545: `1471`,
    2546: `1471`,
    2547: `1472`,
    2548: `1472`,
    2549: `1472`,
    255: `52`,
    2550: `1474`,
    2551: `1474`,
    2552: `1475`,
    2553: `1476`,
    2554: `1476`,
    2555: `1477`,
    2556: `1478`,
    2557: `1478`,
    2558: `1479`,
    2559: `1479`,
    256: `53`,
    2560: `1480`,
    2561: `1481`,
    2562: `1482`,
    2563: `1482`,
    2564: `1482`,
    2565: `1483`,
    2566: `1483`,
    2567: `1484`,
    2568: `1484`,
    2569: `1485`,
    257: `53`,
    2570: `1486`,
    2571: `1487`,
    2572: `1487`,
    2573: `1488`,
    2574: `1488`,
    2575: `1488`,
    2576: `1489`,
    2577: `1490`,
    2578: `1490`,
    2579: `1491`,
    258: `53`,
    2580: `1491`,
    2581: `1491`,
    2582: `1492`,
    2583: `1493`,
    2584: `1493`,
    2585: `1494`,
    2586: `1494`,
    2587: `1495`,
    2588: `1496`,
    2589: `1497`,
    259: `53`,
    2590: `1498`,
    2591: `1498`,
    2592: `1499`,
    2593: `1500`,
    2594: `1501`,
    2595: `1501`,
    2596: `1502`,
    2597: `1502`,
    2598: `1503`,
    2599: `1504`,
    26: `2`,
    260: `53`,
    2600: `1505`,
    2601: `1506`,
    2602: `1506`,
    2603: `1507`,
    2604: `1508`,
    2605: `1509`,
    2606: `1509`,
    2607: `1510`,
    2608: `1511`,
    2609: `1512`,
    261: `53`,
    2610: `1513`,
    2611: `1514`,
    2612: `1514`,
    2613: `1515`,
    2614: `1516`,
    2615: `1517`,
    2616: `1518`,
    2617: `1519`,
    2618: `1519`,
    2619: `1520`,
    262: `54`,
    2620: `1520`,
    2621: `1521`,
    2622: `1521`,
    2623: `1522`,
    2624: `1522`,
    2625: `1523`,
    2626: `1523`,
    2627: `1524`,
    2628: `1524`,
    2629: `1524`,
    263: `54`,
    2630: `1526`,
    2631: `1526`,
    2632: `1527`,
    2633: `1528`,
    2634: `1528`,
    2635: `1529`,
    2636: `1530`,
    2637: `1530`,
    2638: `1531`,
    2639: `1531`,
    264: `55`,
    2640: `1532`,
    2641: `1533`,
    2642: `1534`,
    2643: `1534`,
    2644: `1534`,
    2645: `1535`,
    2646: `1535`,
    2647: `1536`,
    2648: `1536`,
    2649: `1537`,
    265: `56`,
    2650: `1538`,
    2651: `1539`,
    2652: `1539`,
    2653: `1540`,
    2654: `1540`,
    2655: `1540`,
    2656: `1541`,
    2657: `1542`,
    2658: `1542`,
    2659: `1543`,
    266: `57`,
    2660: `1543`,
    2661: `1543`,
    2662: `1544`,
    2663: `1545`,
    2664: `1545`,
    2665: `1546`,
    2666: `1546`,
    2667: `1547`,
    2668: `1548`,
    2669: `1549`,
    267: `57`,
    2670: `1550`,
    2671: `1550`,
    2672: `1551`,
    2673: `1552`,
    2674: `1553`,
    2675: `1553`,
    2676: `1554`,
    2677: `1554`,
    2678: `1555`,
    2679: `1556`,
    268: `58`,
    2680: `1557`,
    2681: `1558`,
    2682: `1558`,
    2683: `1559`,
    2684: `1560`,
    2685: `1561`,
    2686: `1561`,
    2687: `1562`,
    2688: `1563`,
    2689: `1564`,
    269: `59`,
    2690: `1565`,
    2691: `1566`,
    2692: `1566`,
    2693: `1567`,
    2694: `1568`,
    2695: `1569`,
    2696: `1569`,
    2697: `1570`,
    2698: `1570`,
    2699: `1571`,
    27: `2`,
    270: `61`,
    2700: `1571`,
    2701: `1572`,
    2702: `1572`,
    2703: `1573`,
    2704: `1573`,
    2705: `1574`,
    2706: `1574`,
    2707: `1574`,
    2708: `1576`,
    2709: `1576`,
    271: `61`,
    2710: `1578`,
    2711: `1578`,
    2712: `1579`,
    2713: `1579`,
    2714: `1579`,
    2715: `1580`,
    2716: `1580`,
    2717: `1581`,
    2718: `1581`,
    2719: `1581`,
    272: `62`,
    2720: `1582`,
    2721: `1583`,
    2722: `1585`,
    2723: `1585`,
    2724: `1586`,
    2725: `1586`,
    2726: `1587`,
    2727: `1587`,
    2728: `1587`,
    2729: `1589`,
    273: `62`,
    2730: `1590`,
    2731: `1590`,
    2732: `1591`,
    2733: `1591`,
    2734: `1592`,
    2735: `1592`,
    2736: `1593`,
    2737: `1593`,
    2738: `1593`,
    2739: `1595`,
    274: `62`,
    2740: `1595`,
    2741: `1596`,
    2742: `1596`,
    2743: `1597`,
    2744: `1598`,
    2745: `1600`,
    2746: `1600`,
    2747: `1600`,
    2748: `1602`,
    2749: `1602`,
    275: `63`,
    2750: `1603`,
    2751: `1604`,
    2752: `1604`,
    2753: `1605`,
    2754: `1606`,
    2755: `1608`,
    2756: `1609`,
    2757: `1609`,
    2758: `1610`,
    2759: `1610`,
    276: `63`,
    2760: `1611`,
    2761: `1611`,
    2762: `1611`,
    2763: `1612`,
    2764: `1612`,
    2765: `1612`,
    2766: `1614`,
    2767: `1615`,
    2768: `1616`,
    2769: `1617`,
    277: `64`,
    2770: `1618`,
    2771: `1620`,
    2772: `1621`,
    2773: `1621`,
    2774: `1622`,
    2775: `1623`,
    2776: `1623`,
    2777: `1624`,
    2778: `1624`,
    2779: `1625`,
    278: `65`,
    2780: `1625`,
    2781: `1626`,
    2782: `1627`,
    2783: `1629`,
    2784: `1630`,
    2785: `1630`,
    2786: `1631`,
    2787: `1631`,
    2788: `1632`,
    2789: `1632`,
    279: `66`,
    2790: `1633`,
    2791: `1633`,
    2792: `1634`,
    2793: `1634`,
    2794: `1635`,
    2795: `1635`,
    2796: `1636`,
    2797: `1637`,
    2798: `1639`,
    2799: `1639`,
    28: `2`,
    280: `66`,
    2800: `1639`,
    2801: `1641`,
    2802: `1641`,
    2803: `1641`,
    2804: `1643`,
    2805: `1643`,
    2806: `1644`,
    2807: `1644`,
    2808: `1644`,
    2809: `1645`,
    281: `66`,
    2810: `1645`,
    2811: `1646`,
    2812: `1646`,
    2813: `1646`,
    2814: `1648`,
    2815: `1649`,
    2816: `1651`,
    2817: `1652`,
    2818: `1653`,
    2819: `1654`,
    282: `66`,
    2820: `1654`,
    2821: `1655`,
    2822: `1655`,
    2823: `1656`,
    2824: `1656`,
    2825: `1656`,
    2826: `1657`,
    2827: `1659`,
    2828: `1660`,
    2829: `1661`,
    283: `66`,
    2830: `1661`,
    2831: `1661`,
    2832: `1662`,
    2833: `1663`,
    2834: `1663`,
    2835: `1666`,
    2836: `1666`,
    2837: `1667`,
    2838: `1667`,
    2839: `1668`,
    284: `66`,
    2840: `1669`,
    2841: `1670`,
    2842: `1671`,
    2843: `1671`,
    2844: `1672`,
    2845: `1673`,
    2846: `1673`,
    2847: `1674`,
    2848: `1674`,
    2849: `1675`,
    285: `66`,
    2850: `1675`,
    2851: `1676`,
    2852: `1677`,
    2853: `1678`,
    2854: `1678`,
    2855: `1679`,
    2856: `1680`,
    2857: `1681`,
    2858: `1682`,
    2859: `1682`,
    286: `66`,
    2860: `1683`,
    2861: `1684`,
    2862: `1685`,
    2863: `1687`,
    2864: `1688`,
    2865: `1689`,
    2866: `1690`,
    2867: `1690`,
    2868: `1690`,
    2869: `1691`,
    287: `66`,
    2870: `1691`,
    2871: `1692`,
    2872: `1693`,
    2873: `1694`,
    2874: `1696`,
    2875: `1697`,
    2876: `1697`,
    2877: `1697`,
    2878: `1698`,
    2879: `1698`,
    288: `66`,
    2880: `1699`,
    2881: `1700`,
    2882: `1700`,
    2883: `1700`,
    2884: `1701`,
    2885: `1701`,
    2886: `1702`,
    2887: `1703`,
    2888: `1703`,
    2889: `1704`,
    289: `66`,
    2890: `1705`,
    2891: `1705`,
    2892: `1706`,
    2893: `1707`,
    2894: `1707`,
    2895: `1707`,
    2896: `1708`,
    2897: `1708`,
    2898: `1709`,
    2899: `1710`,
    29: `2`,
    290: `66`,
    2900: `1710`,
    2901: `1710`,
    2902: `1711`,
    2903: `1711`,
    2904: `1712`,
    2905: `1713`,
    2906: `1713`,
    2907: `1713`,
    2908: `1714`,
    2909: `1715`,
    291: `66`,
    2910: `1715`,
    2911: `1716`,
    2912: `1717`,
    2913: `1717`,
    2914: `1717`,
    2915: `1718`,
    2916: `1719`,
    2917: `1719`,
    2918: `1720`,
    2919: `1721`,
    292: `66`,
    2920: `1721`,
    2921: `1721`,
    2922: `1722`,
    2923: `1723`,
    2924: `1723`,
    2925: `1724`,
    2926: `1725`,
    2927: `1725`,
    2928: `1725`,
    2929: `1726`,
    293: `66`,
    2930: `1727`,
    2931: `1727`,
    2932: `1728`,
    2933: `1729`,
    2934: `1729`,
    2935: `1729`,
    2936: `1730`,
    2937: `1731`,
    2938: `1731`,
    2939: `1732`,
    294: `66`,
    2940: `1733`,
    2941: `1733`,
    2942: `1733`,
    2943: `1734`,
    2944: `1735`,
    2945: `1735`,
    2946: `1736`,
    2947: `1737`,
    2948: `1737`,
    2949: `1737`,
    295: `66`,
    2950: `1738`,
    2951: `1739`,
    2952: `1739`,
    2953: `1740`,
    2954: `1741`,
    2955: `1741`,
    2956: `1741`,
    2957: `1742`,
    2958: `1743`,
    2959: `1743`,
    296: `66`,
    2960: `1744`,
    2961: `1745`,
    2962: `1745`,
    2963: `1745`,
    2964: `1746`,
    2965: `1746`,
    2966: `1747`,
    2967: `1747`,
    2968: `1747`,
    2969: `1748`,
    297: `67`,
    2970: `1749`,
    2971: `1749`,
    2972: `1750`,
    2973: `1752`,
    2974: `1753`,
    2975: `1754`,
    2976: `1755`,
    2977: `1755`,
    2978: `1755`,
    2979: `1756`,
    298: `67`,
    2980: `1756`,
    2981: `1757`,
    2982: `1757`,
    2983: `1757`,
    2984: `1758`,
    2985: `1758`,
    2986: `1758`,
    2987: `1760`,
    2988: `1761`,
    2989: `1761`,
    299: `67`,
    2990: `1761`,
    2991: `1762`,
    2992: `1763`,
    2993: `1764`,
    2994: `1765`,
    2995: `1766`,
    2996: `1768`,
    2997: `1769`,
    2998: `1769`,
    2999: `1769`,
    3: `2`,
    30: `2`,
    300: `69`,
    3000: `1771`,
    3001: `1772`,
    3002: `1772`,
    3003: `1772`,
    3004: `1774`,
    3005: `1774`,
    3006: `1775`,
    3007: `1776`,
    3008: `1776`,
    3009: `1777`,
    301: `69`,
    3010: `1779`,
    3011: `1780`,
    3012: `1781`,
    3013: `1781`,
    3014: `1782`,
    3015: `1784`,
    3016: `1784`,
    3017: `1785`,
    3018: `1786`,
    3019: `1786`,
    302: `69`,
    3020: `1787`,
    3021: `1789`,
    3022: `1790`,
    3023: `1790`,
    3024: `1791`,
    3025: `1793`,
    3026: `1794`,
    3027: `1795`,
    3028: `1796`,
    3029: `1797`,
    303: `70`,
    3030: `1797`,
    3031: `1798`,
    3032: `1799`,
    3033: `1800`,
    3034: `1801`,
    3035: `1803`,
    3036: `1803`,
    3037: `1804`,
    3038: `1804`,
    3039: `1805`,
    304: `71`,
    3040: `1806`,
    3041: `1807`,
    3042: `1807`,
    3043: `1807`,
    3044: `1808`,
    3045: `1808`,
    3046: `1808`,
    3047: `1811`,
    3048: `1811`,
    3049: `1812`,
    305: `71`,
    3050: `1812`,
    3051: `1813`,
    3052: `1814`,
    3053: `1815`,
    3054: `1816`,
    3055: `1816`,
    3056: `1817`,
    3057: `1818`,
    3058: `1818`,
    3059: `1819`,
    306: `73`,
    3060: `1819`,
    3061: `1820`,
    3062: `1820`,
    3063: `1821`,
    3064: `1822`,
    3065: `1823`,
    3066: `1823`,
    3067: `1824`,
    3068: `1824`,
    3069: `1825`,
    307: `74`,
    3070: `1826`,
    3071: `1827`,
    3072: `1827`,
    3073: `1828`,
    3074: `1828`,
    3075: `1829`,
    3076: `1830`,
    3077: `1831`,
    3078: `1831`,
    3079: `1832`,
    308: `75`,
    3080: `1833`,
    3081: `1834`,
    3082: `1836`,
    3083: `1837`,
    3084: `1837`,
    3085: `1838`,
    309: `76`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T19","name":"v12760","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2909","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3430","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3959","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4475","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4992","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5542","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6091","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6696","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T21","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v12711","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12717","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12724","type":"address"},{"internalType":"uint256","name":"v12725","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12735","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12743","type":"address"},{"internalType":"address payable","name":"v12744","type":"address"},{"internalType":"uint256","name":"v12745","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12671","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12678","type":"address"},{"internalType":"address payable","name":"v12679","type":"address"}],"name":"Info_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12683","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalCurrentAllocatoinToAllUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalFundsDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12699","type":"address"}],"name":"Info_totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12704","type":"address"},{"internalType":"address payable","name":"v12705","type":"address"}],"name":"Info_userReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12752","type":"uint256"},{"internalType":"address payable","name":"v12753","type":"address"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"addr","type":"uint256"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"uint256","name":"_claimed","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_4Ref","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T3","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T10","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_addAdmin0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Admin_deposit0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T6","name":"_Admin_editUserReward0_233","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_233","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T4","name":"_Admin_revokeAdmin0_233","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T8","name":"_Admin_setReward0_233","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T9","name":"_User_claim0_233","type":"tuple"},{"internalType":"bool","name":"_User_optin0_233","type":"bool"}],"internalType":"struct T10","name":"elem1","type":"tuple"}],"internalType":"struct T11","name":"v12763","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080604052606062004d3a80380380916200001a826200009c565b6080391262000080576040516200003181620000d2565b608051815260a05161ffff19811681036200008057602082015260c051906001600160a01b03821682036200008057620000709160408201526200019d565b604051613ec7908162000e538239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000c357604052565b620000cd62000085565b604052565b606081019081106001600160401b03821117620000c357604052565b604081019081106001600160401b03821117620000c357604052565b608081019081106001600160401b03821117620000c357604052565b601f909101601f19168101906001600160401b03821190821017620000c357604052565b604051906102a082016001600160401b03811183821017620000c357604052565b604051906200017a82620000d2565b565b604051906101e082016001600160401b03811183821017620000c357604052565b6200017a90600080805543600355610280620001b86200014a565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e082015282610200820152826102208201528261024082015282610260820152015262000477565b604051906200025082620000d2565b60006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620002aa575b6040528260005b8281106200029357505050565b82906200029f62000241565b818401520162000286565b620002b462000085565b6200027f565b60405190620002c982620000ee565b60006020838281520152565b60405190620002e482620000ee565b6000602083620002f3620002ba565b81520152565b6040519061012082016001600160401b038111838210176200035a575b6040528161010060009182815282602082015262000333620002d5565b60408201528260608201528260808201528260a08201528260c08201528260e08201520152565b6200036462000085565b62000316565b6040519060a082016001600160401b03811183821017620003d4575b604052816200039462000241565b8152620003a062000262565b6020820152620003af620002ba565b6040820152620003be620002d5565b60608201526080620003cf620002f9565b910152565b620003de62000085565b62000386565b906001811015620003f65760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519060e082016001600160401b0381118382101762000467575b604052600060c08382815282602082015282604082015262000449620002f9565b60608201528260808201526200045e62000262565b60a08201520152565b6200047162000085565b62000428565b6200017a90620004866200036a565b620004a56200049f6200049b60045460ff1690565b1590565b62000665565b60408051338152835160208083019190915284015161ffff191681830152838201516001600160a01b03166060820152909162000648917f19beb4b4ae800ef164657ae1c238d1e90f50effd8bb91dc7502d5d13755b59e090608090a16200051a8451801590811562000658575b5062000686565b6000928382515262000642602092858482510152858382510152805190848101918251526200054a3415620006a7565b608084820160058151526064878251015251916060810192835152620005738784510160019052565b019087825152620005878683510160019052565b51848251015286606082510152866080825101528660a0825101528660c0825101528660e08251015286610100825101526200060c620005fd85620005cb6200040c565b3381529a620005ef8c8a620005e58185015161ffff191690565b61ffff1916910152565b01516001600160a01b031690565b6001600160a01b031689860152565b51606088015243608088015251918251908085830151920151151591620006326200016b565b9588875286015284019015159052565b620006c8565b60a083015260c082015262000b87565b9050600154143862000513565b156200066d57565b60405163100960cb60e01b815260136004820152602490fd5b156200068e57565b60405163100960cb60e01b815260146004820152602490fd5b15620006af57565b60405163100960cb60e01b815260156004820152602490fd5b9190620006d462000262565b926000805b60018110620006e9575050508252565b620006f58184620003e4565b51620007028288620003e4565b526200070f8187620003e4565b5060001981146200072357600101620006d9565b634e487b7160e01b82526011600452602482fd5b506040513d6000823e3d90fd5b90600182811c9216801562000776575b60208310146200076057565b634e487b7160e01b600052602260045260246000fd5b91607f169162000754565b8181106200078d575050565b6000815560010162000781565b620007a760025462000744565b80620007b05750565b601f8111600114620007c457506000600255565b60026000526200080c90601f0160051c60008051602062004d1a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf62000781565b6000602081208160025555565b620008236200017c565b9060008083528060208401528060408401526200083f620002f9565b60608401526200084e62000262565b60808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152806101808401526200089262000241565b6101a08401526101c0830152565b6101409080518352602081015115156020840152620008dd6040820151604085019060206040918181518051865201518285015201511515910152565b606081015160a0840152608081015160c084015260a081015160e084015260c081015190610100918285015260e08101516101208501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b600182106200094957505050565b60206060826200095d60019487516200091b565b019301910190916200093b565b81516001600160a01b031681526103a0810192916103809060208181015161ffff1916908401526040818101516001600160a01b031690840152620009b860608201516060850190620008a0565b608081015190620009d06101c0928386019062000936565b60a081015161022085015260c081015161024085015260e08101516102608501526101008101516102808501526101208101516102a08501526101408101516102c08501526101608101516102e085015261018081015161030085015262000a436101a08201516103208601906200091b565b0151910152565b90601f821162000a58575050565b6200017a9160026000526020600020906020601f840160051c8301931062000a89575b601f0160051c019062000781565b909150819062000a7b565b80519091906001600160401b03811162000b77575b62000ac18162000abb60025462000744565b62000a4a565b602080601f831160011462000b00575081929360009262000af4575b50508160011b916000199060031b1c191617600255565b01519050388062000add565b6002600052601f1983169490919060008051602062004d1a833981519152926000905b87821062000b5e57505083600195961062000b44575b505050811b01600255565b015160001960f88460031b161c1916905538808062000b39565b8060018596829496860151815501950193019062000b23565b62000b8162000085565b62000aa9565b606081019062000b9b602083510151151590565b1562000c9e5762000c986200017a9262000c8992608062000bbb62000819565b82516001600160a01b031681529260208381015161ffff1916908501526040838101516001600160a01b0316908501528051606085015260c060a0840193845184870152015160a085015260608151015160c085015260e08151015160e085015260a08151015161010090818601528151015161012085015280515161014085015260c0815101516101608501525101516101808301528051516101a08301525151516101c082015262000c6f6003600055565b62000c7943600155565b604051928391602083016200096a565b03601f19810183528262000126565b62000a94565b62000d049150600080808062000cca62000cbe865160018060a01b031690565b6001600160a01b031690565b60c08601519082821562000d2d575bf11562000d1d575b6040810151815160a0909201515151916001600160a01b03908116911662000d3f565b6000805562000d136000600155565b6200017a6200079a565b62000d2762000737565b62000ce1565b506108fc62000cd9565b156200008057565b600080916200017a948262000de295604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815262000d83816200010a565b5193165af13d1562000df85762000dd13d6001600160401b03811162000de8575b6040519062000dbe601f8201601f19166020018362000126565b81529182903d6000602084013e62000e20565b506020808251830101910162000e06565b62000d37565b62000df262000085565b62000da4565b62000dd16060809262000e20565b908160209103126200008057518015158103620000805790565b1562000e295790565b80511562000e3957805190602001fd5b60405163100960cb60e01b815260026004820152602490fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630a84e99f1461025c5780631548a30d146102535780631e93b0f11461024a57806336e56ea5146102415780633702d0ce146102385780634ab9f8b31461022f578063523df4f614610226578063544774a91461021d57806355c42a9514610214578063582523cd1461020b578063672422c71461020257806374623535146101f957806374ecfa44146101f057806374f16ec9146101e75780637a2b54dc146101de5780637f0595e2146101d557806383230757146101cc578063883513de146101c357806392cf8bd5146101ba578063a5792424146101b1578063a855bc10146101a8578063aa735d7f1461019f578063ab53f2c614610196578063b87939c71461018d578063bf7df9c314610184578063cd6637a81461017b578063df1a0c7514610172578063f1b1259d146101695763f33c0dce0361000e57610164610f82565b61000e565b50610164610ea6565b50610164610e55565b50610164610e04565b50610164610dd2565b50610164610d2e565b50610164610cb9565b50610164610c69565b50610164610bd3565b50610164610b64565b50610164610b14565b50610164610ac3565b50610164610aa4565b506101646109fe565b506101646109bd565b5061016461092a565b5061016461085a565b50610164610828565b506101646107ba565b506101646106cc565b5061016461068e565b50610164610630565b506101646105c9565b50610164610573565b50610164610535565b506101646104b0565b50610164610466565b50610164610321565b5060203660031901126102d757602060406102756114e8565b6102cb81835161028481611023565b845161028f8161104b565b600081528152858101906102a161158f565b825260043581515260018251525185825101526102bc611656565b90600082525186820152611ceb565b01511515604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b038116036102d757565b60409060031901126102d757600435610311816102e8565b9060243561031e816102e8565b90565b50346102d757610458610120610336366102f9565b9061033f6114e8565b916103b86103af61034e611301565b9260018060a01b038095168452602094858501911681526103a96103a2610373613d36565b95610382600360005414613122565b61039b61038d6110db565b898082518301019101611a32565b50516102dc565b855161163d565b516102dc565b8383510161163d565b81810190600082515260008383510152805191600161040661040160405195866103e58982019283611ca1565b03966103f9601f19988981018352826110b8565b519020611342565b611c97565b61040f8161049c565b0361045c5750916104336103f961043f936040955193865193849182019586611ca1565b039081018352826110b8565b01515b5191018190526040519081529081906020820190565b0390f35b9250505051610442565b50346102d75760003660031901126102d7576020600354604051908152f35b50634e487b7160e01b600052602160045260246000fd5b600211156104a657565b6104ae610485565b565b50346102d75760203660031901126102d75760606104e16004356104d3816102e8565b6104db611211565b5061127e565b604080519180516104f18161049c565b835260208101511515602084015201516040820152f35b9190916040806060830194805161051e8161049c565b845260208101511515602085015201511515910152565b50346102d75760203660031901126102d757610458610567600435610559816102e8565b610561611211565b50611446565b60405191829182610508565b5060203660031901126102d757602060a0600435610590816102e8565b6102cb61059b6114e8565b80926105a5611613565b90815190600180881b031690528581019060048251525185825101526102bc611656565b506020806003193601126102d757806004356105e4816102e8565b6102cb6105ef6114e8565b80926105f9611613565b80516001600160a01b0390921690915284810180516000905290518151860152610621611656565b90600082525185820152611ceb565b50346102d75760203660031901126102d75761064a61131a565b506080610658600435611342565b61068c6040805192805161066b8161049c565b84526020818101511515818601529101518051604085015201516060830152565bf35b5060003660031901126102d757602060806106a76114e8565b6102cb816106b3611656565b85810190600382515251151585825101526102bc611656565b5060603660031901126102d7576104586107a860c06004356106ed816102e8565b6107a1602435916106fd836102e8565b6107056114e8565b928391610710611211565b9160018060a01b038092168352816020840191168152610771610767604085019260443584526040519461074386611023565b61074b611211565b8652602086019661075a61158f565b88525116855152516102dc565b602084510161163d565b51604082510152610783825160059052565b518582510152610791611656565b9060008252516020820152611ceb565b0151151590565b60405191829182901515815260200190565b50346102d75760003660031901126102d7576107d46114e8565b60036000540361080f576102006020916101206108006107f26110db565b858082518301019101611a32565b01519182910152604051908152f35b60405163100960cb60e01b815260106004820152602490fd5b50346102d75760203660031901126102d75761045861056760043561084c816102e8565b610854611211565b506113cb565b506101c03660031901126102d7576108706114e8565b6040519061087d82611023565b60043582526101a03660231901126102d75761091e9161089b611184565b6108a3613d58565b81526108ae36613d67565b60208201526108bc36613db6565b60408201526108ca36613dd6565b60608201526108d7613e08565b60808201526108e536613d90565b60a08201526108f336613e23565b60c082015261090136613e6a565b60e082015261090e613e15565b6101008201526020820152611ceb565b60405160008152602090f35b5060403660031901126102d7576104586107a8606060043561094b816102e8565b6107a16109566114e8565b8092610960611301565b6001600160a01b03918216815260243560208201908152604051919261098583611023565b61098d611301565b8352602083019361099c61158f565b85525116825152516020825101526002825152518582510152610791611656565b5060003660031901126102d75760206102806109d76114e8565b6102cb816109e3611656565b858101906007825152511515610100825101526102bc611656565b50346102d75760203660031901126102d757600435610a1c816102e8565b610a246114e8565b90600360005403610a8b57610458916001610a6260e093610a55610a466110db565b60208082518301019101611a32565b50828060a01b03166113cb565b51610a6c8161049c565b610a758161049c565b1491018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b50346102d75760003660031901126102d7576020600154604051908152f35b50346102d75760003660031901126102d757610add6114e8565b600360005403610afb576101006020916101c06108006107f26110db565b60405163100960cb60e01b815260086004820152602490fd5b50346102d75760003660031901126102d757610b2e6114e8565b600360005403610b4b5761016060209160c06108006107f26110db565b60405163100960cb60e01b8152600b6004820152602490fd5b50346102d75760203660031901126102d757600435610b82816102e8565b610b8a6114e8565b90600360005403610bba57610458916001610a6261014093610bad610a466110db565b50828060a01b0316611497565b60405163100960cb60e01b8152600a6004820152602490fd5b5060403660031901126102d7576104586107a8610260602435610bf5816102e8565b6107a1610c006114e8565b8092610c0a611301565b60043581526001600160a01b0391821660208201908152604051919290610c3083611023565b610c38611301565b83526020830193610c4761158f565b855251835152511660208251015260068251525160e082510152610791611656565b50346102d75760003660031901126102d757610c836114e8565b600360005403610ca0576101c060209160c06108006107f26110db565b60405163100960cb60e01b8152600e6004820152602490fd5b50346102d757600080600319360112610d2b578054610cd66110db565b906040519283918252602090604082840152835191826040850152815b838110610d1457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610cf3565b80fd5b50346102d75760203660031901126102d757610458610220600435610d52816102e8565b610d5a6114e8565b90610d69600360005414613142565b610d74610a466110db565b506001600160a01b0316610d878161127e565b51610d918161049c565b610d9a8161049c565b600090600103610dc85750610db060409161127e565b01519182915b01526040519081529081906020820190565b9050918291610db6565b50346102d75760203660031901126102d757610458610567600435610df6816102e8565b610dfe611211565b50611497565b50346102d75760003660031901126102d757610e1e6114e8565b600360005403610e3c576101806020916101006108006107f26110db565b60405163100960cb60e01b8152600c6004820152602490fd5b50346102d75760003660031901126102d757610e6f6114e8565b600360005403610e8d576101e06020916101806108006107f26110db565b60405163100960cb60e01b8152600f6004820152602490fd5b50346102d757610458610240610ebb366102f9565b90610ec46114e8565b91610f076103af610ed3611301565b9260018060a01b038095168452602094858501911681526103a96103a2610ef8613d36565b95610382600360005414613162565b818101906000825152600083835101528051916001610f3461040160405195866103e58982019283611ca1565b610f3d8161049c565b03610f795750604091610f609151906103f9845191826104338882019586611ca1565b0151015191018190526040519081529081906020820190565b91505051610db0565b50346102d75760003660031901126102d757610f9c6114e8565b600360005403610fb9576101a060209160e06108006107f26110db565b60405163100960cb60e01b8152600d6004820152602490fd5b90600182811c92168015611002575b6020831014610fec57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610fe1565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761103e57604052565b61104661100c565b604052565b602081019081106001600160401b0382111761103e57604052565b606081019081106001600160401b0382111761103e57604052565b61012081019081106001600160401b0382111761103e57604052565b60a081019081106001600160401b0382111761103e57604052565b601f909101601f19168101906001600160401b0382119082101761103e57604052565b60405190600082600254916110ef83610fd2565b8083526001938085169081156111635750600114611115575b506104ae925003836110b8565b60026000908152600080516020613e9b83398151915294602093509091905b81831061114b5750506104ae935082010138611108565b85548884018501529485019487945091830191611134565b90506104ae94506020925060ff191682840152151560051b82010138611108565b6040519061012082016001600160401b0381118382101761103e57604052565b604051906102a082016001600160401b0381118382101761103e57604052565b604051906103e082016001600160401b0381118382101761103e57604052565b604051906101e082016001600160401b0381118382101761103e57604052565b604051906104ae82611066565b6040519061121e82611066565b60006040838281528260208201520152565b6001600160a01b0316600090815260096020526040902090565b6001600160a01b0316600090815260086020526040902090565b6001600160a01b0316600090815260056020526040902090565b90611287611211565b9160018060a01b03166000908082526005602052600160ff6040842054166112ae8161049c565b036112f657604092935081526005602052206001604051916112cf83611066565b60ff81548181166112df8161049c565b855260081c16151560208401520154604082015290565b508083526020830152565b6040519061130e82611023565b60006020838281520152565b6040519061132782611066565b816000815260006020820152604061133d611301565b910152565b9061134b61131a565b916000908082526006602052600160ff60408420541661136a8161049c565b036112f657604092935081526006602052206040519061138982611066565b60ff81548181166113998161049c565b845260081c16151560208301526002604051916113b583611023565b6001810154835201546020820152604082015290565b906113d4611211565b9160018060a01b03166000908082526007602052600160ff6040842054166113fb8161049c565b036112f6576040929350815260076020522060ff6040519161141c83611066565b548181166114298161049c565b8352818160081c161515602084015260101c161515604082015290565b9061144f611211565b9160018060a01b03166000908082526008602052600160ff6040842054166114768161049c565b036112f6576040929350815260086020522060ff6040519161141c83611066565b906114a0611211565b9160018060a01b03166000908082526009602052600160ff6040842054166114c78161049c565b036112f6576040929350815260096020522060ff6040519161141c83611066565b6114f06111a4565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152806102208401528061024084015280610260840152610280830152565b604051906115898261104b565b60008252565b6040519061159c82611081565b816101006000918281526040516115b28161104b565b83815260208201526040516115c68161104b565b83815260408201526115d6611301565b60608201528260808201526040516115ed8161104b565b83815260a08201526115fd611211565b60c082015261160a611301565b60e08201520152565b6040519061162082611023565b8160405161162d8161104b565b600081528152602061133d61158f565b6001600160a01b039091169052565b600811156104a657565b6040519061166382611023565b8160008152602061133d61158f565b6040519061167f82611081565b8161010060009182815282602082015260405161169b81611023565b6116a3611301565b815283602082015260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b604051906116df8261104b565b8160005b602081106116ef575050565b6020906116fa611211565b81840152016116e3565b61170c6111c4565b9061171561157c565b825261171f611672565b602083015261172c61157c565b6040830152611739611672565b6060830152611746611301565b6080830152611753611672565b60a0830152611760611672565b60c083015261176d61157c565b60e083015261177a611672565b610100830152611788611211565b610120830152600061014083015261179e6116d2565b6101608301526117ac611301565b6101808301526117ba611301565b6101a08301526117c8611301565b6101c08301526117d6611301565b6101e08301526117e4611672565b6102008301526117f2611301565b6102208301526000610240830152611808611301565b610260830152611816611301565b610280830152611824611301565b6102a0830152611832611301565b6102c0830152611840611211565b6102e083015261184e6116d2565b61030083015261185c611672565b61032083015261186a611672565b6103408301526118786116d2565b610360830152611886611672565b610380830152611894611672565b6103a08301526118a2611672565b6103c0830152565b51906104ae826102e8565b519061ffff19821682036102d757565b801515036102d757565b51906104ae826118c5565b8092910391606083126102d757604051906118f482611023565b60408294126102d7576040602091815161190d81611023565b8151815283820151848201528452015191611927836118c5565b0152565b919091610160818403126102d757611963611944611184565b9382518552611955602084016118cf565b6020860152604083016118da565b604084015260a0810151606084015260c0810151608084015260e081015160a0840152610140610100918281015160c086015261012081015160e0860152015190830152565b91908260609103126102d7576040516119c181611066565b60408082948051845260208101516020850152015191611927836118c5565b9080601f830112156102d757604051916119f98361104b565b82606092838301928184116102d757915b838310611a1957505050505090565b60208591611a2784866119a9565b815201920191611a0a565b906103a0828203126102d757610380611a496111e4565b92611a53816118aa565b8452611a61602082016118b5565b6020850152611a72604082016118aa565b6040850152611a84836060830161192b565b6060850152611b086101c093611a9c818685016119e0565b608087015261022083015160a087015261024083015160c087015261026083015160e08701526102808301516101008701526102a08301516101208701526102c08301516101408701526102e083015161016087015261030083015161018087015261032083016119a9565b6101a085015201519082015290565b6101c060206104ae9395946101e084019660018060a01b03168452805182850152015180516008811015611c05575b60408401526020810151516001600160a01b031660608401526040810151516080840152606081015180516001600160a01b031660a08501526020015160c08401526080810151151560e084015260a0810151516001600160a01b0316610100848101919091529060c081015180516001600160a01b039081166101208701526020820151166101408601526040015161016085015260e08101518051610180860152602001516001600160a01b03166101a085015201511515910152565b611c0d610485565b611b46565b516008811015611c1f5790565b61031e610485565b516001600160a01b031690565b6040519060e082016001600160401b03811183821017611c8a575b604052600060c083828152826020820152826040820152611c6e611672565b6060820152826080820152611c816116d2565b60a08201520152565b611c9261100c565b611c4f565b5161031e8161049c565b81516001600160a01b039081168252602092830151169181019190915260400190565b906001811015611cd55760051b0190565b634e487b7160e01b600052603260045260246000fd5b90611cf4611704565b611d02600360005414613182565b6020611d1d611d0f6110db565b828082518301019101611a32565b93611d39611d34611d3060045460ff1690565b1590565b6131a2565b7f2c4e00e8071bb3e5d40aafdd6153361f6cffad90541762b533335e65a3e7cac260405180611d69843383611b17565b0390a1611d81815180159081156130b3575b506131c2565b01611d8c8151611c12565b611d958161164c565b611f79579260a09160206104ae955101518152611dba611db583516102dc565b6102dc565b3303611f5957611dca6001613520565b611dd43415613540565b600060206040840195611df8611df3611ded89516102dc565b336136d2565b613560565b611e2f611e22611e088651611c27565b6001600160a01b0316600090815260076020526040902090565b805460ff19166001179055565b611e4b611e3f611e088651611c27565b805462ff000019169055565b604051600081527f3667eb13c481f6f9bf1515760f9b81a4214414a8e446ce069a8fc233abdeb22a90602090a101526020610140830151910190815152604060608301611eab611e9f602083510151151590565b60208551019015159052565b51015160408251015260c082015160608251015261018082015160808251015261010080830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f38611f2f611f07611c34565b95611f1b611f1586516102dc565b8861163d565b60208581015161ffff1916908801526103a9565b6040860161163d565b516060840152436080840152608081015182840152015160c0820152613bb0565b611dca6001611f6a610401336113cb565b611f738161049c565b14613520565b6001611f858251611c12565b611f8e8161164c565b03612178579261214860a09260406104ae965101519060408101918252611fb8611db585516102dc565b330361215857611fc860016134c0565b611fd234156134e0565b6000604080860197611ff9611ff4611fea8b516102dc565b875151903361372d565b613500565b8151600081527fa03872813cb281db17bd6bbbc4c59cfdddad80921ea17ba8b4e338dbd40d05f190602090a10152606061203b610140860151845151906130f9565b910190815152604060608501612058611e9f602083510151151590565b51015160408251015260c084015160608251015261207e610180850151835151906130f9565b60808251015261010080850151868351015261016085015160c08351015260e085015160e08351015261012085015190825101526120f16120e86120c0611c34565b976120d46120ce88516102dc565b8a61163d565b60208781015161ffff1916908a01526103a9565b6040880161163d565b5160608601524360808601526080830151906101c084015190515101906121436101a085015161212960406020830151920151151590565b90612132611204565b948552602085015215156040840152565b613770565b82840152015160c0820152613bb0565b611fc86001612169610401336113cb565b6121728161049c565b146134c0565b60026121848251611c12565b61218d8161164c565b036122a2579260a09160006060806104ae9751015195608084019687526121b7611db586516102dc565b33148314612282576121c96001613440565b6121df6020885101516101c08701511015613460565b6121e93415613480565b60408501966122036121fe611ded8a516102dc565b6134a0565b612218611e226122138351611c27565b611264565b51600161222d612213602084015193516102dc565b0155604051600081527fd366d5cdc702a5629268f7f45c87995f6962c1fcf5abf34cc4e4f3109e54250f90602090a1015282610140830151910190815152604060608301611eab611e9f602083510151151590565b6121c96001612293610401336113cb565b61229c8161049c565b14613440565b60036122ae8251611c12565b6122b78161164c565b036123ae57506104ae9260a0916122df33600180861b036122d885516102dc565b16146133e2565b6122e93415613402565b600060806040840195612307612302611ded89516102dc565b613420565b604051600081527f3c67cec8254757b25b2f2dbf73f263ad9bc3780f730cc0affd053e57ff81ea9490602090a1015260c0610140830151910190815152600060208251015260406060830151015160408251015260c082015160608251015261018082015160808251015261010080830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f38611f2f611f07611c34565b60046123ba8251611c12565b6123c38161164c565b036124e4579260a091600083806104ae975101519560e084019687526123f66123ef611db587516102dc565b3314613382565b61240034156133a2565b82612427611e08604088019961242161241c611ded8d516102dc565b6133c2565b51611c27565b55604051600081527fd14763d4f6377079ace5e1581168a26e7838afa7711ae99b3f340873cfc241b190602090a10152610140820151906101008091019182515260406060840161248b61247f602083510151151590565b60208651019015159052565b51015160408351015260c083015160608351015261018083015160808351015280830151848351015261016083015160c08351015260e083015160e0835101526101208301519082510152611f38611f2f611f07611c34565b60056124f38294939451611c12565b6124fc8161164c565b03612973579261286c60c060a0936125d860406125a0600161259161040161258c611db56101206104ae9f8f906125758f8e90612550826125859551015180888801526101c083019e8f519101519061310d565b506125658d60408888015101519051106132a2565b01516040858501510151906130f9565b806101408401528a5110156132c2565b0151611c27565b611497565b61259a8161049c565b146132e2565b6125aa3415613302565b6080860151905160406101208a0151015101906121436101a088015161212960406020830151920151151590565b6101608701526126076126026125f160408701516102dc565b60406101208a01510151903361372d565b613322565b6126226101608701515151604061012089015101519061310d565b5061263e60406101208801510151610160880151515110613342565b61265661016087015151516101408801511115613362565b612672612667610120880151611c27565b61018088015161163d565b612694612686602061012089015101611c27565b60206101808901510161163d565b60006101a087015152600060206101a0880151015260016126e66104016126cc6126da6101808b015160405192839160208301611ca1565b03601f1981018352826110b8565b60208151910120611342565b6126ef8161049c565b03612965576127b2604061271661018089015182516103f9816126cc602082019485611ca1565b01515b61274560206101c08a019280845251926101e08b019384515251015160406101208b01510151906130f9565b60208251015261277f611e226101808a015160405161276c816126cc602082019485611ca1565b5190206000526006602052604060002090565b5160016127a06101808a015160405161276c816126cc602082019485611ca1565b01906020600191805184550151910155565b6127c6611e22612213610120890151611c27565b60016127e46104016127df611db56101208b0151611c27565b61127e565b6127ed8161049c565b0361295b5761281e604061280b6127df611db56101208b0151611c27565b01515b60406101208901510151906130f9565b60016128316122136101208a0151611c27565b0155604051600181527f3c2ea575759630c73141dd550d46efd4405afbcfad691e390e61a822bd8da2289080602081015b0390a10160019052565b61016061288861014083015160406101208701510151906130f9565b936102008101948551526040606084016128b56128a9602083510151151590565b60208951019015159052565b5101516040865101526101408101516060865101526101808301516080865101526101008084015185875101528284015160c08751015260e084015160e087510152610120840151908651015261290a611c34565b9461291e61291885516102dc565b8761163d565b60208481015161ffff19169087015261293d6120e860408601516102dc565b516060860152436080860152015182840152015160c0820152613bb0565b61281e600061280e565b6127b26101a0870151612719565b60066129828294939451611c12565b61298b8161164c565b03612ff757612b68919260e06102609251015161022085015260016129b26104013361127e565b6129bb8161049c565b03612ff05760406129cb3361127e565b01515b6102408501526129eb610220850151516101c08701511015613222565b612a02610240850151610220860151511115613242565b612a0c3415613262565b612a24612a1f611ded60408801516102dc565b613282565b612a31338386015161163d565b612a51612a45602061022087015101611c27565b6020848701510161163d565b6000610280850151526000602061028086015101526001612a876104016126cc6126da8689015160405192839160208301611ca1565b612a908161049c565b03612fe257612b356040612ab58487015182516103f9816126cc602082019485611ca1565b01515b612af16020612ad76102a0890193808552516102208a015151906130f9565b926102c0890193845152510151610220880151519061310d565b602082510152612b16611e228588015160405161276c816126cc602082019485611ca1565b5160016127a08588015160405161276c816126cc602082019485611ca1565b604051600181527f318f89d55ce6dda2aaf6b46c6143f1a3a307db51d3e9b70ffeb3549b86bf350f908060208101612862565b6102e0810190612b7933835161163d565b610220810151516020835101527f0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23612c016020850193612bce612bbf865161ffff191690565b60408351019061ffff19169052565b516040805182516001600160a01b03168152602080840151908201529181015161ffff1916908201529081906060820190565b0390a16001612c1261040133611446565b612c1b8161049c565b03612e3657612c5360808401516101c0850151610220840151519003906121436101a087015161212960406020830151920151151590565b906103608101918252612c7b612c6c60408601516102dc565b61022083015151903390613580565b610240810151612dc8579260a0916104ae94612ca5612c9933611264565b60016000918281550155565b612cbb610140840151610220830151519061310d565b90610380810191825152604060608501612cdc61247f602083510151151590565b510151604083510152612cfa60c0850151610220830151519061310d565b606083510152610180840151608083510152612d24610100916102208387015191015151906130f9565b858351015261016084015160c083510152612d4260e08501516130d6565b60e083510152612d566101208501516130d6565b9082510152612d92612d86612d69611c34565b96612d7d612d7787516102dc565b8961163d565b5161ffff191690565b61ffff19166020870152565b612dab612da260408501516102dc565b6040870161163d565b5160608501524360808501525182840152015160c0820152613bb0565b9260a0916104ae94612ddc611e2233611264565b612df2610240820151610220830151519061310d565b6001612dfd33611264565b0155612e15610140840151610220830151519061310d565b906103a0810191825152604060608501612cdc61247f602083510151151590565b612e42611e223361124a565b612e4e611e3f3361124a565b612e8160808401516101c0850151610220840151519003906121436101a087015161212960406020830151920151151590565b906103008101918252612e9a612c6c60408601516102dc565b610240810151612f74579260a0916104ae94612eb8612c9933611264565b612ece610140840151610220830151519061310d565b90610320810191825152604060608501612eef61247f602083510151151590565b510151604083510152612f0d60c0850151610220830151519061310d565b606083510152610180840151608083510152612f37610100916102208387015191015151906130f9565b858351015261016084015160c083510152612f5560e08501516130d6565b60e0835101526101208401519082510152612d92612d86612d69611c34565b9260a0916104ae94612f88611e2233611264565b612f9e610240820151610220830151519061310d565b6001612fa933611264565b0155612fc1610140840151610220830151519061310d565b90610340810191825152604060608501612eef61247f602083510151151590565b612b35610280850151612ab8565b60006129ce565b61300360079151611c12565b61300c8161164c565b1461301657505050565b6104ae9260a09161302734156131e2565b60006102806040840195613046613041611ded89516102dc565b613202565b613052611e2233611230565b61305e611e3f33611230565b604051600081527f8fb0e0bb3dad0c21f662c75dd4c9eac2eb9635ac4623769cf9bf0c7e7291df9290602090a101526103c0610140830151910190815152604060608301611eab611e9f602083510151151590565b90506001541438611d7b565b50634e487b7160e01b600052601160045260246000fd5b9060018201918281116130ec575b82106102d757565b6130f46130bf565b6130e4565b91908201918281116130ec5782106102d757565b90810390811161311a5790565b61031e6130bf565b1561312957565b60405163100960cb60e01b815260096004820152602490fd5b1561314957565b60405163100960cb60e01b815260116004820152602490fd5b1561316957565b60405163100960cb60e01b815260126004820152602490fd5b1561318957565b60405163100960cb60e01b815260166004820152602490fd5b156131a957565b60405163100960cb60e01b815260176004820152602490fd5b156131c957565b60405163100960cb60e01b815260186004820152602490fd5b156131e957565b60405163100960cb60e01b815260366004820152602490fd5b1561320957565b60405163100960cb60e01b815260376004820152602490fd5b1561322957565b60405163100960cb60e01b815260326004820152602490fd5b1561324957565b60405163100960cb60e01b815260336004820152602490fd5b1561326957565b60405163100960cb60e01b815260346004820152602490fd5b1561328957565b60405163100960cb60e01b815260356004820152602490fd5b156132a957565b60405163100960cb60e01b8152602a6004820152602490fd5b156132c957565b60405163100960cb60e01b8152602b6004820152602490fd5b156132e957565b60405163100960cb60e01b8152602c6004820152602490fd5b1561330957565b60405163100960cb60e01b8152602d6004820152602490fd5b1561332957565b60405163100960cb60e01b8152602e6004820152602490fd5b1561334957565b60405163100960cb60e01b815260306004820152602490fd5b1561336957565b60405163100960cb60e01b815260316004820152602490fd5b1561338957565b60405163100960cb60e01b815260266004820152602490fd5b156133a957565b60405163100960cb60e01b815260276004820152602490fd5b156133c957565b60405163100960cb60e01b815260286004820152602490fd5b156133e957565b60405163100960cb60e01b815260236004820152602490fd5b1561340957565b602460405163100960cb60e01b8152816004820152fd5b1561342757565b60405163100960cb60e01b815260256004820152602490fd5b1561344757565b60405163100960cb60e01b8152601f6004820152602490fd5b1561346757565b60405163100960cb60e01b815260206004820152602490fd5b1561348757565b60405163100960cb60e01b815260216004820152602490fd5b156134a757565b60405163100960cb60e01b815260226004820152602490fd5b156134c757565b60405163100960cb60e01b8152601c6004820152602490fd5b156134e757565b60405163100960cb60e01b8152601d6004820152602490fd5b1561350757565b60405163100960cb60e01b8152601e6004820152602490fd5b1561352757565b60405163100960cb60e01b815260196004820152602490fd5b1561354757565b60405163100960cb60e01b8152601a6004820152602490fd5b1561356757565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526135fc93600093849392849190608081016001600160401b03811182821017613603575b6040525193165af16135ec6135e5613610565b8092613672565b506020808251830101910161365d565b156102d757565b61360b61100c565b6135d2565b3d15613658573d906001600160401b03821161364b575b6040519161363f601f8201601f1916602001846110b8565b82523d6000602084013e565b61365361100c565b613627565b606090565b908160209103126102d7575161031e816118c5565b1561367a5790565b80511561368957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156136aa5790565b8051156136b957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b600061031e928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526137168161109d565b5193165af16135ec613726613610565b80926136a2565b60009161031e9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526137168161109d565b919061377a6116d2565b9260005b6001811061378c5750508252565b8061379960019284611cc4565b516137a48288611cc4565b526137af8187611cc4565b5060001981146137c0575b0161377e565b6137c86130bf565b6137ba565b506040513d6000823e3d90fd5b8181106137e5575050565b600081556001016137da565b6137fc600254610fd2565b806138045750565b601f811160011461381757506000600255565b600260005261385c90601f0160051c600080516020613e9b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6137da565b6000602081208160025555565b6138716111e4565b90600080835280602084015280604084015261388b611672565b60608401526138986116d2565b60808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152806101808401526138da611211565b6101a08401526101c0830152565b6101409080518352602081015115156020840152613925604082015160408501908051805183526020908101518382015260409101511515910152565b606081015160a0840152608081015160c084015260a081015160e084015260c081015190610100918285015260e08101516101208501520151910152565b60408091805184526020810151602085015201511515910152565b906000905b6001821061399057505050565b60206060826139a26001948751613963565b01930191019091613983565b81516001600160a01b031681526103a0810192916103809060208181015161ffff1916908401526040818101516001600160a01b0316908401526139fa606082015160608501906138e8565b608081015190613a106101c0928386019061397e565b60a081015161022085015260c081015161024085015260e08101516102608501526101008101516102808501526101208101516102a08501526101408101516102c08501526101608101516102e0850152610180810151610300850152613a816101a0820151610320860190613963565b0151910152565b90601f8211613a95575050565b6104ae9160026000526020600020906020601f840160051c83019310613ac3575b601f0160051c01906137da565b9091508190613ab6565b80519091906001600160401b038111613ba3575b613af581613af0600254610fd2565b613a88565b602080601f8311600114613b315750819293600092613b26575b50508160011b916000199060031b1c191617600255565b015190503880613b0f565b6002600052601f19831694909190600080516020613e9b833981519152926000905b878210613b8b575050836001959610613b72575b505050811b01600255565b015160001960f88460031b161c19169055388080613b67565b80600185968294968601518155019501930190613b53565b613bab61100c565b613ae1565b6060810190613bc3602083510151151590565b15613cb057613cab6104ae926126cc926080613bdd613869565b92613bf1613beb84516102dc565b8561163d565b60208381015161ffff191690850152613c10611f2f60408501516102dc565b8051606085015260c060a0840193845184870152015160a085015260608151015160c085015260e08151015160e085015260a08151015161010090818601528151015161012085015280515161014085015260c0815101516101608501525101516101808301528051516101a08301525151516101c0820152613c936003600055565b613c9c43600155565b604051928391602083016139ae565b613acd565b613d0a91506000808080613cc7611db586516102dc565b60c086015190828215613d2d575bf115613d20575b613ce960408201516102dc565b60a0613cf583516102dc565b9201515151916001600160a01b031690613580565b60008055613d186000600155565b6104ae6137f1565b613d286137cd565b613cdc565b506108fc613cd5565b60405190613d4382611023565b81613d4c611301565b8152602061133d611301565b6024359060088210156102d757565b60209060431901126102d75760405190613d808261104b565b60443582613d8d826102e8565b52565b60209060e31901126102d75760405190613da98261104b565b60e43582613d8d826102e8565b60209060631901126102d75760405190613dcf8261104b565b6064358252565b60409060831901126102d75760405190613def82611023565b81608435613dfc816102e8565b8152602060a435910152565b60c435906104ae826118c5565b6101a435906104ae826118c5565b6060906101031901126102d75760405190613e3d82611066565b8161010435613e4b816102e8565b815261012435613e5a816102e8565b6020820152604061014435910152565b6040906101631901126102d75760405190613e8482611023565b61016435825261018435602083611927836102e856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 19770,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './token_v2.rsh:350:11:after expr stmt semicolon',
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
