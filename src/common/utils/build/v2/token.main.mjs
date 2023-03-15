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
    total_amount_claimed: ctc3,
    total_rewards_allcoated: ctc3,
    total_users_claim: ctc3,
    usersNo: ctc3
    });
  const ctc8 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Data({
    None: ctc10,
    Some: ctc3
    });
  const ctc12 = stdlib.T_Data({
    None: ctc10,
    Some: ctc10
    });
  const map0_ctc = ctc11;
  
  const map1_ctc = ctc12;
  
  const map2_ctc = ctc12;
  
  const map3_ctc = ctc12;
  
  
  const Info_Admins = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async (_v2400 ) => {
          const v2400 = stdlib.protect(ctc0, _v2400, null);
        
        const v2401 = stdlib.protect(map1_ctc, await viewlib.viewMapRef(1, ctc0, v2400, ctc10), null);
        const v2402 = {
          None: 0,
          Some: 1
          }[v2401[0]];
        const v2403 = stdlib.eq(v2402, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2403;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_balance = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async () => {
        
        
        return v2414;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_opted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async (_v2404 ) => {
          const v2404 = stdlib.protect(ctc0, _v2404, null);
        
        const v2405 = stdlib.protect(map3_ctc, await viewlib.viewMapRef(3, ctc0, v2404, ctc10), null);
        const v2406 = {
          None: 0,
          Some: 1
          }[v2405[0]];
        const v2407 = stdlib.eq(v2406, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        
        return v2407;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_rewards = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async (_v2397 ) => {
          const v2397 = stdlib.protect(ctc0, _v2397, null);
        
        const v2398 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, ctc0, v2397, ctc3), null);
        const v2399 = stdlib.fromSome(v2398, stdlib.checkedBigNumberify('./token.rsh:83:53:decimal', stdlib.UInt_max, '0'));
        
        return v2399;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAllocatedFunds = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async () => {
        
        
        return v2412;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalAmountClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async () => {
        
        
        return v2409;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalClaimed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async () => {
        
        
        return v2408;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Info_totalOptedIn = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = svs;
      return (await ((async () => {
        
        
        return v2410;}))(...args));
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
        opted: {
          decode: Info_opted,
          dom: [ctc0],
          rng: ctc4
          },
        rewards: {
          decode: Info_rewards,
          dom: [ctc0],
          rng: ctc3
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
        totalOptedIn: {
          decode: Info_totalOptedIn,
          dom: [],
          rng: ctc3
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc7, ctc9, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8, ctc3]
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc3, ctc3]);
  return {
    mapDataTy: ctc4
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc13,
    Admin_deposit0_130: ctc14,
    Admin_editUserReward0_130: ctc15,
    Admin_endContractAndTransfer0_130: ctc16,
    Admin_revokeAdmin0_130: ctc13,
    Admin_setReward0_130: ctc15,
    User_claim0_130: ctc14,
    User_claimAll0_130: ctc16,
    User_optin0_130: ctc16
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2480 = ctc.selfAddress();
  const v2482 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:164:34:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_addAdmin0_130" (defined at: ./token.rsh:164:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_addAdmin'
    });
  const v2485 = stdlib.addressEq(v2480, v2359);
  const v2486 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v2480, ctc0), null);
  const v2487 = {
    None: 0,
    Some: 1
    }[v2486[0]];
  const v2488 = stdlib.eq(v2487, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2489 = v2485 ? true : v2488;
  stdlib.assert(v2489, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:164:34:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_addAdmin0_130" (defined at: ./token.rsh:164:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'You Are unable to register another Admin',
    who: 'Admin_addAdmin'
    });
  const v2496 = ['Admin_addAdmin0_130', v2482];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2496],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:170:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:170:14:decimal', stdlib.UInt_max, '0'), v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_addAdmin"
            });
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc4, v2716, ctc0), null);
          ;
          ;
          const v2861 = v2720[stdlib.checkedBigNumberify('./token.rsh:164:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, ctc4, v2861, ctc0, null);
          const v2870 = null;
          const v2871 = await txn1.getOutput('Admin_addAdmin', 'v2870', ctc0, v2870);
          
          const v2878 = v2373.keepGoing;
          const v2879 = v2373.percent;
          const v2884 = {
            bal: v2411,
            keepGoing: v2878,
            percent: v2879,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v2410
            };
          const v10264 = v2884;
          const v10266 = v2376;
          const v10267 = v2377;
          const v10268 = v2884.keepGoing;
          if (v10268) {
            const v10269 = v2884.total_users_claim;
            const v10270 = v2884.total_amount_claimed;
            const v10271 = v2884.usersNo;
            const v10272 = v2884.bal;
            const v10273 = v2884.total_rewards_allcoated;
            const v10274 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10275 = v10274[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10280 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10281 = v10280[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: v2361
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2361
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      undefined /* setApiDetails */;
      const v2726 = stdlib.addressEq(v2716, v2359);
      const v2727 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v2716, ctc0), null);
      const v2728 = {
        None: 0,
        Some: 1
        }[v2727[0]];
      const v2729 = stdlib.eq(v2728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v2730 = v2726 ? true : v2729;
      stdlib.assert(v2730, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:164:34:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'You Are unable to register another Admin',
        who: 'Admin_addAdmin'
        });
      ;
      ;
      const v2861 = v2720[stdlib.checkedBigNumberify('./token.rsh:164:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, ctc4, v2861, ctc0, null);
      const v2870 = null;
      const v2871 = await txn1.getOutput('Admin_addAdmin', 'v2870', ctc0, v2870);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v2720, v2871), {
          at: './token.rsh:164:11:application',
          fs: ['at ./token.rsh:164:11:application call to [unknown function] (defined at: ./token.rsh:164:11:function exp)', 'at ./token.rsh:173:14:application call to "ret" (defined at: ./token.rsh:171:15:function exp)', 'at ./token.rsh:171:15:application call to [unknown function] (defined at: ./token.rsh:171:15:function exp)'],
          msg: 'out',
          who: 'Admin_addAdmin'
          });
        }
      else {
        }
      
      const v2878 = v2373.keepGoing;
      const v2879 = v2373.percent;
      const v2884 = {
        bal: v2411,
        keepGoing: v2878,
        percent: v2879,
        total_amount_claimed: v2409,
        total_rewards_allcoated: v2412,
        total_users_claim: v2408,
        usersNo: v2410
        };
      const v10264 = v2884;
      const v10266 = v2376;
      const v10267 = v2377;
      const v10268 = v2884.keepGoing;
      if (v10268) {
        const v10269 = v2884.total_users_claim;
        const v10270 = v2884.total_amount_claimed;
        const v10271 = v2884.usersNo;
        const v10272 = v2884.bal;
        const v10273 = v2884.total_rewards_allcoated;
        const v10274 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10275 = v10274[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10280 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10281 = v10280[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc14,
    Admin_deposit0_130: ctc13,
    Admin_editUserReward0_130: ctc15,
    Admin_endContractAndTransfer0_130: ctc16,
    Admin_revokeAdmin0_130: ctc14,
    Admin_setReward0_130: ctc15,
    User_claim0_130: ctc13,
    User_claimAll0_130: ctc16,
    User_optin0_130: ctc16
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2415 = ctc.selfAddress();
  const v2417 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:100:32:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_deposit0_130" (defined at: ./token.rsh:100:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_deposit'
    });
  const v2418 = v2417[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2420 = stdlib.addressEq(v2415, v2359);
  const v2421 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v2415, ctc0), null);
  const v2422 = {
    None: 0,
    Some: 1
    }[v2421[0]];
  const v2423 = stdlib.eq(v2422, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2424 = v2420 ? true : v2423;
  stdlib.assert(v2424, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:101:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:100:32:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_deposit0_130" (defined at: ./token.rsh:100:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_deposit'
    });
  const v2431 = ['Admin_deposit0_130', v2417];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2431],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:103:10:decimal', stdlib.UInt_max, '0'), [[v2418, v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_deposit"
            });
          const v3266 = v3247[stdlib.checkedBigNumberify('./token.rsh:100:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc4, v2716, ctc0), null);
          ;
          const v3383 = stdlib.add(v2414, v3266);
          const v3385 = stdlib.Array_set(v2413, '0', v3383);
          const v3386 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:70:37:dot', stdlib.UInt_max, '0'), v3385);
          sim_r.txns.push({
            amt: v3266,
            kind: 'to',
            tok: v2361
            });
          const v3422 = null;
          const v3423 = await txn1.getOutput('Admin_deposit', 'v3422', ctc0, v3422);
          
          const v3430 = v2373.keepGoing;
          const v3431 = v2373.percent;
          const v3436 = stdlib.safeAdd(v2411, v3266);
          const v3437 = {
            bal: v3436,
            keepGoing: v3430,
            percent: v3431,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v2410
            };
          const v10498 = v3437;
          const v10500 = v3386;
          const v10501 = v2377;
          const v10502 = v3437.keepGoing;
          if (v10502) {
            const v10503 = v3437.total_users_claim;
            const v10504 = v3437.total_amount_claimed;
            const v10505 = v3437.usersNo;
            const v10506 = v3437.bal;
            const v10507 = v3437.total_rewards_allcoated;
            const v10508 = v3386[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10509 = v10508[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10514 = v3386[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10515 = v10514[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: v2361
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2361
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      undefined /* setApiDetails */;
      const v3266 = v3247[stdlib.checkedBigNumberify('./token.rsh:100:10:spread', stdlib.UInt_max, '0')];
      const v3267 = stdlib.addressEq(v2716, v2359);
      const v3268 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v2716, ctc0), null);
      const v3269 = {
        None: 0,
        Some: 1
        }[v3268[0]];
      const v3270 = stdlib.eq(v3269, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3271 = v3267 ? true : v3270;
      stdlib.assert(v3271, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:101:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:100:32:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_deposit'
        });
      ;
      const v3383 = stdlib.add(v2414, v3266);
      const v3385 = stdlib.Array_set(v2413, '0', v3383);
      const v3386 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:70:37:dot', stdlib.UInt_max, '0'), v3385);
      ;
      const v3422 = null;
      const v3423 = await txn1.getOutput('Admin_deposit', 'v3422', ctc0, v3422);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v3247, v3423), {
          at: './token.rsh:100:11:application',
          fs: ['at ./token.rsh:100:11:application call to [unknown function] (defined at: ./token.rsh:100:11:function exp)', 'at ./token.rsh:105:14:application call to "ret" (defined at: ./token.rsh:104:15:function exp)', 'at ./token.rsh:104:15:application call to [unknown function] (defined at: ./token.rsh:104:15:function exp)'],
          msg: 'out',
          who: 'Admin_deposit'
          });
        }
      else {
        }
      
      const v3430 = v2373.keepGoing;
      const v3431 = v2373.percent;
      const v3436 = stdlib.safeAdd(v2411, v3266);
      const v3437 = {
        bal: v3436,
        keepGoing: v3430,
        percent: v3431,
        total_amount_claimed: v2409,
        total_rewards_allcoated: v2412,
        total_users_claim: v2408,
        usersNo: v2410
        };
      const v10498 = v3437;
      const v10500 = v3386;
      const v10501 = v2377;
      const v10502 = v3437.keepGoing;
      if (v10502) {
        const v10503 = v3437.total_users_claim;
        const v10504 = v3437.total_amount_claimed;
        const v10505 = v3437.usersNo;
        const v10506 = v3437.bal;
        const v10507 = v3437.total_rewards_allcoated;
        const v10508 = v3386[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10509 = v10508[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10514 = v3386[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10515 = v10514[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc14,
    Admin_deposit0_130: ctc15,
    Admin_editUserReward0_130: ctc13,
    Admin_endContractAndTransfer0_130: ctc16,
    Admin_revokeAdmin0_130: ctc14,
    Admin_setReward0_130: ctc13,
    User_claim0_130: ctc15,
    User_claimAll0_130: ctc16,
    User_optin0_130: ctc16
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2454 = ctc.selfAddress();
  const v2456 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_editUserReward0_130" (defined at: ./token.rsh:151:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_editUserReward'
    });
  const v2458 = v2456[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2461 = stdlib.addressEq(v2454, v2359);
  const v2462 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v2454, ctc0), null);
  const v2463 = {
    None: 0,
    Some: 1
    }[v2462[0]];
  const v2464 = stdlib.eq(v2463, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v2465 = v2461 ? true : v2464;
  stdlib.assert(v2465, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_editUserReward0_130" (defined at: ./token.rsh:151:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Only Admins can deposit',
    who: 'Admin_editUserReward'
    });
  const v2469 = stdlib.le(v2458, v2414);
  stdlib.assert(v2469, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_editUserReward0_130" (defined at: ./token.rsh:151:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Can only edit what is in the contract',
    who: 'Admin_editUserReward'
    });
  const v2478 = ['Admin_editUserReward0_130', v2456];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2478],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:156:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:156:14:decimal', stdlib.UInt_max, '0'), v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_editUserReward"
            });
          const v3808 = v3774[stdlib.checkedBigNumberify('./token.rsh:151:10:spread', stdlib.UInt_max, '1')];
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, ctc4, v2716, ctc0), null);
          ;
          ;
          const v3967 = v3774[stdlib.checkedBigNumberify('./token.rsh:151:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, ctc4, v3967, ctc1, v3808);
          const v3981 = null;
          const v3982 = await txn1.getOutput('Admin_editUserReward', 'v3981', ctc0, v3981);
          
          const v3990 = v2373.keepGoing;
          const v3991 = v2373.percent;
          const v3996 = {
            bal: v2411,
            keepGoing: v3990,
            percent: v3991,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v2410
            };
          const v10732 = v3996;
          const v10734 = v2376;
          const v10735 = v2377;
          const v10736 = v3996.keepGoing;
          if (v10736) {
            const v10737 = v3996.total_users_claim;
            const v10738 = v3996.total_amount_claimed;
            const v10739 = v3996.usersNo;
            const v10740 = v3996.bal;
            const v10741 = v3996.total_rewards_allcoated;
            const v10742 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10743 = v10742[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10748 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10749 = v10748[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: v2361
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2361
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      undefined /* setApiDetails */;
      const v3808 = v3774[stdlib.checkedBigNumberify('./token.rsh:151:10:spread', stdlib.UInt_max, '1')];
      const v3809 = stdlib.addressEq(v2716, v2359);
      const v3810 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc4, v2716, ctc0), null);
      const v3811 = {
        None: 0,
        Some: 1
        }[v3810[0]];
      const v3812 = stdlib.eq(v3811, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v3813 = v3809 ? true : v3812;
      stdlib.assert(v3813, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Only Admins can deposit',
        who: 'Admin_editUserReward'
        });
      const v3817 = stdlib.le(v3808, v2414);
      stdlib.assert(v3817, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Can only edit what is in the contract',
        who: 'Admin_editUserReward'
        });
      ;
      ;
      const v3967 = v3774[stdlib.checkedBigNumberify('./token.rsh:151:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map0, ctc4, v3967, ctc1, v3808);
      const v3981 = null;
      const v3982 = await txn1.getOutput('Admin_editUserReward', 'v3981', ctc0, v3981);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v3774, v3982), {
          at: './token.rsh:151:11:application',
          fs: ['at ./token.rsh:151:11:application call to [unknown function] (defined at: ./token.rsh:151:11:function exp)', 'at ./token.rsh:159:14:application call to "ret" (defined at: ./token.rsh:157:15:function exp)', 'at ./token.rsh:157:15:application call to [unknown function] (defined at: ./token.rsh:157:15:function exp)'],
          msg: 'out',
          who: 'Admin_editUserReward'
          });
        }
      else {
        }
      
      const v3990 = v2373.keepGoing;
      const v3991 = v2373.percent;
      const v3996 = {
        bal: v2411,
        keepGoing: v3990,
        percent: v3991,
        total_amount_claimed: v2409,
        total_rewards_allcoated: v2412,
        total_users_claim: v2408,
        usersNo: v2410
        };
      const v10732 = v3996;
      const v10734 = v2376;
      const v10735 = v2377;
      const v10736 = v3996.keepGoing;
      if (v10736) {
        const v10737 = v3996.total_users_claim;
        const v10738 = v3996.total_amount_claimed;
        const v10739 = v3996.usersNo;
        const v10740 = v3996.bal;
        const v10741 = v3996.total_rewards_allcoated;
        const v10742 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10743 = v10742[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10748 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10749 = v10748[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc14,
    Admin_deposit0_130: ctc15,
    Admin_editUserReward0_130: ctc16,
    Admin_endContractAndTransfer0_130: ctc13,
    Admin_revokeAdmin0_130: ctc14,
    Admin_setReward0_130: ctc16,
    User_claim0_130: ctc15,
    User_claimAll0_130: ctc13,
    User_optin0_130: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2558 = ctc.selfAddress();
  const v2560 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:280:44:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_130" (defined at: ./token.rsh:280:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_endContractAndTransfer'
    });
  const v2561 = stdlib.addressEq(v2359, v2558);
  stdlib.assert(v2561, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:280:44:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_endContractAndTransfer0_130" (defined at: ./token.rsh:280:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Cannot end contract without being Deployer',
    who: 'Admin_endContractAndTransfer'
    });
  const v2566 = ['Admin_endContractAndTransfer0_130', v2560];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2566],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:283:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:283:14:decimal', stdlib.UInt_max, '0'), v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_endContractAndTransfer"
            });
          ;
          ;
          const v4528 = null;
          const v4529 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4528', ctc0, v4528);
          
          const v4536 = v2373.percent;
          const v4541 = {
            bal: v2411,
            keepGoing: false,
            percent: v4536,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v2410
            };
          const v10966 = v4541;
          const v10968 = v2376;
          const v10969 = v2377;
          const v10970 = v4541.keepGoing;
          if (v10970) {
            const v10971 = v4541.total_users_claim;
            const v10972 = v4541.total_amount_claimed;
            const v10973 = v4541.usersNo;
            const v10974 = v4541.bal;
            const v10975 = v4541.total_rewards_allcoated;
            const v10976 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10977 = v10976[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v10982 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v10983 = v10982[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: v2361
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2361
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      undefined /* setApiDetails */;
      const v4353 = stdlib.addressEq(v2359, v2716);
      stdlib.assert(v4353, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:280:44:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Cannot end contract without being Deployer',
        who: 'Admin_endContractAndTransfer'
        });
      ;
      ;
      const v4528 = null;
      const v4529 = await txn1.getOutput('Admin_endContractAndTransfer', 'v4528', ctc0, v4528);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v4301, v4529), {
          at: './token.rsh:280:11:application',
          fs: ['at ./token.rsh:280:11:application call to [unknown function] (defined at: ./token.rsh:280:11:function exp)', 'at ./token.rsh:285:14:application call to "ret" (defined at: ./token.rsh:284:15:function exp)', 'at ./token.rsh:284:15:application call to [unknown function] (defined at: ./token.rsh:284:15:function exp)'],
          msg: 'out',
          who: 'Admin_endContractAndTransfer'
          });
        }
      else {
        }
      
      const v4536 = v2373.percent;
      const v4541 = {
        bal: v2411,
        keepGoing: false,
        percent: v4536,
        total_amount_claimed: v2409,
        total_rewards_allcoated: v2412,
        total_users_claim: v2408,
        usersNo: v2410
        };
      const v10966 = v4541;
      const v10968 = v2376;
      const v10969 = v2377;
      const v10970 = v4541.keepGoing;
      if (v10970) {
        const v10971 = v4541.total_users_claim;
        const v10972 = v4541.total_amount_claimed;
        const v10973 = v4541.usersNo;
        const v10974 = v4541.bal;
        const v10975 = v4541.total_rewards_allcoated;
        const v10976 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10977 = v10976[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v10982 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v10983 = v10982[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc4]);
  const ctc14 = stdlib.T_Tuple([ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc13,
    Admin_deposit0_130: ctc14,
    Admin_editUserReward0_130: ctc15,
    Admin_endContractAndTransfer0_130: ctc16,
    Admin_revokeAdmin0_130: ctc13,
    Admin_setReward0_130: ctc15,
    User_claim0_130: ctc14,
    User_claimAll0_130: ctc16,
    User_optin0_130: ctc16
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2498 = ctc.selfAddress();
  const v2500 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:178:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_revokeAdmin0_130" (defined at: ./token.rsh:178:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_revokeAdmin'
    });
  const v2503 = stdlib.addressEq(v2498, v2359);
  stdlib.assert(v2503, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:179:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:178:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_revokeAdmin0_130" (defined at: ./token.rsh:178:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Only the Deployer can revoke Admin Rights',
    who: 'Admin_revokeAdmin'
    });
  const v2510 = ['Admin_revokeAdmin0_130', v2500];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2510],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:181:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:181:14:decimal', stdlib.UInt_max, '0'), v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_revokeAdmin"
            });
          ;
          ;
          const v5071 = v4828[stdlib.checkedBigNumberify('./token.rsh:178:10:spread', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 1, ctc4, v5071, ctc0, undefined /* Nothing */);
          const v5076 = null;
          const v5077 = await txn1.getOutput('Admin_revokeAdmin', 'v5076', ctc0, v5076);
          
          const v5084 = v2373.keepGoing;
          const v5085 = v2373.percent;
          const v5090 = {
            bal: v2411,
            keepGoing: v5084,
            percent: v5085,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v2410
            };
          const v11200 = v5090;
          const v11202 = v2376;
          const v11203 = v2377;
          const v11204 = v5090.keepGoing;
          if (v11204) {
            const v11205 = v5090.total_users_claim;
            const v11206 = v5090.total_amount_claimed;
            const v11207 = v5090.usersNo;
            const v11208 = v5090.bal;
            const v11209 = v5090.total_rewards_allcoated;
            const v11210 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11211 = v11210[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11216 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11217 = v11216[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: v2361
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2361
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      undefined /* setApiDetails */;
      const v4890 = stdlib.addressEq(v2716, v2359);
      stdlib.assert(v4890, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:179:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:178:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Only the Deployer can revoke Admin Rights',
        who: 'Admin_revokeAdmin'
        });
      ;
      ;
      const v5071 = v4828[stdlib.checkedBigNumberify('./token.rsh:178:10:spread', stdlib.UInt_max, '0')];
      await stdlib.mapSet(map1, ctc4, v5071, ctc0, undefined /* Nothing */);
      const v5076 = null;
      const v5077 = await txn1.getOutput('Admin_revokeAdmin', 'v5076', ctc0, v5076);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v4828, v5077), {
          at: './token.rsh:178:11:application',
          fs: ['at ./token.rsh:178:11:application call to [unknown function] (defined at: ./token.rsh:178:11:function exp)', 'at ./token.rsh:184:14:application call to "ret" (defined at: ./token.rsh:182:15:function exp)', 'at ./token.rsh:182:15:application call to [unknown function] (defined at: ./token.rsh:182:15:function exp)'],
          msg: 'out',
          who: 'Admin_revokeAdmin'
          });
        }
      else {
        }
      
      const v5084 = v2373.keepGoing;
      const v5085 = v2373.percent;
      const v5090 = {
        bal: v2411,
        keepGoing: v5084,
        percent: v5085,
        total_amount_claimed: v2409,
        total_rewards_allcoated: v2412,
        total_users_claim: v2408,
        usersNo: v2410
        };
      const v11200 = v5090;
      const v11202 = v2376;
      const v11203 = v2377;
      const v11204 = v5090.keepGoing;
      if (v11204) {
        const v11205 = v5090.total_users_claim;
        const v11206 = v5090.total_amount_claimed;
        const v11207 = v5090.usersNo;
        const v11208 = v5090.bal;
        const v11209 = v5090.total_rewards_allcoated;
        const v11210 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v11211 = v11210[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11216 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v11217 = v11216[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc14,
    Admin_deposit0_130: ctc15,
    Admin_editUserReward0_130: ctc13,
    Admin_endContractAndTransfer0_130: ctc16,
    Admin_revokeAdmin0_130: ctc14,
    Admin_setReward0_130: ctc13,
    User_claim0_130: ctc15,
    User_claimAll0_130: ctc16,
    User_optin0_130: ctc16
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2435 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:113:40:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_setReward0_130" (defined at: ./token.rsh:113:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'Admin_setReward'
    });
  const v2436 = v2435[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2437 = v2435[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2440 = stdlib.gt(v2437, v2411);
  const v2441 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc4, v2436, ctc0), null);
  const v2442 = {
    None: 0,
    Some: 1
    }[v2441[0]];
  const v2443 = stdlib.eq(v2442, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2443, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:113:40:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp)', 'at ./token.rsh:70:37:application call to "runAdmin_setReward0_130" (defined at: ./token.rsh:113:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'The user needs to opt in first',
    who: 'Admin_setReward'
    });
  const v2452 = ['Admin_setReward0_130', v2435];
  
  const v2657 = v2440 ? v2437 : stdlib.checkedBigNumberify('./token.rsh:118:35:decimal', stdlib.UInt_max, '0');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2452],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:118:10:decimal', stdlib.UInt_max, '0'), [[v2657, v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Admin_setReward"
            });
          const v5426 = v5355[stdlib.checkedBigNumberify('./token.rsh:113:10:spread', stdlib.UInt_max, '0')];
          const v5427 = v5355[stdlib.checkedBigNumberify('./token.rsh:113:10:spread', stdlib.UInt_max, '1')];
          const v5428 = stdlib.gt(v5427, v2411);
          stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, ctc4, v5426, ctc0), null);
          const v5433 = v5428 ? v5427 : stdlib.checkedBigNumberify('./token.rsh:118:35:decimal', stdlib.UInt_max, '0');
          ;
          const v5491 = stdlib.add(v2414, v5433);
          const v5493 = stdlib.Array_set(v2413, '0', v5491);
          const v5494 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:70:37:dot', stdlib.UInt_max, '0'), v5493);
          sim_r.txns.push({
            amt: v5433,
            kind: 'to',
            tok: v2361
            });
          const v5629 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v5426, ctc1), null);
          const v5630 = stdlib.fromSome(v5629, stdlib.checkedBigNumberify('./token.rsh:120:60:decimal', stdlib.UInt_max, '0'));
          const v5634 = stdlib.safeAdd(v5630, v5427);
          await stdlib.simMapSet(sim_r, 0, ctc4, v5426, ctc1, v5634);
          const v5635 = true;
          const v5636 = await txn1.getOutput('Admin_setReward', 'v5635', ctc7, v5635);
          
          const v5644 = v2373.keepGoing;
          const v5645 = v2373.percent;
          let v5650;
          if (v5428) {
            const v5651 = stdlib.safeAdd(v2411, v5427);
            v5650 = v5651;
            }
          else {
            v5650 = v2411;
            }
          const v5652 = {
            bal: v5650,
            keepGoing: v5644,
            percent: v5645,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v2410
            };
          const v11434 = v5652;
          const v11436 = v5494;
          const v11437 = v2377;
          const v11438 = v5652.keepGoing;
          if (v11438) {
            const v11439 = v5652.total_users_claim;
            const v11440 = v5652.total_amount_claimed;
            const v11441 = v5652.usersNo;
            const v11442 = v5652.bal;
            const v11443 = v5652.total_rewards_allcoated;
            const v11444 = v5494[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11445 = v11444[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v11450 = v5494[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11451 = v11450[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: v2361
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2361
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      undefined /* setApiDetails */;
      const v5426 = v5355[stdlib.checkedBigNumberify('./token.rsh:113:10:spread', stdlib.UInt_max, '0')];
      const v5427 = v5355[stdlib.checkedBigNumberify('./token.rsh:113:10:spread', stdlib.UInt_max, '1')];
      const v5428 = stdlib.gt(v5427, v2411);
      const v5429 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc4, v5426, ctc0), null);
      const v5430 = {
        None: 0,
        Some: 1
        }[v5429[0]];
      const v5431 = stdlib.eq(v5430, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v5431, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:113:40:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'The user needs to opt in first',
        who: 'Admin_setReward'
        });
      const v5433 = v5428 ? v5427 : stdlib.checkedBigNumberify('./token.rsh:118:35:decimal', stdlib.UInt_max, '0');
      ;
      const v5491 = stdlib.add(v2414, v5433);
      const v5493 = stdlib.Array_set(v2413, '0', v5491);
      const v5494 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:70:37:dot', stdlib.UInt_max, '0'), v5493);
      ;
      const v5629 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v5426, ctc1), null);
      const v5630 = stdlib.fromSome(v5629, stdlib.checkedBigNumberify('./token.rsh:120:60:decimal', stdlib.UInt_max, '0'));
      const v5634 = stdlib.safeAdd(v5630, v5427);
      await stdlib.mapSet(map0, ctc4, v5426, ctc1, v5634);
      const v5635 = true;
      const v5636 = await txn1.getOutput('Admin_setReward', 'v5635', ctc7, v5635);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v5355, v5636), {
          at: './token.rsh:113:11:application',
          fs: ['at ./token.rsh:113:11:application call to [unknown function] (defined at: ./token.rsh:113:11:function exp)', 'at ./token.rsh:123:16:application call to "ret" (defined at: ./token.rsh:119:15:function exp)', 'at ./token.rsh:119:15:application call to [unknown function] (defined at: ./token.rsh:119:15:function exp)'],
          msg: 'out',
          who: 'Admin_setReward'
          });
        }
      else {
        }
      
      const v5644 = v2373.keepGoing;
      const v5645 = v2373.percent;
      let v5650;
      if (v5428) {
        const v5651 = stdlib.safeAdd(v2411, v5427);
        v5650 = v5651;
        }
      else {
        v5650 = v2411;
        }
      const v5652 = {
        bal: v5650,
        keepGoing: v5644,
        percent: v5645,
        total_amount_claimed: v2409,
        total_rewards_allcoated: v2412,
        total_users_claim: v2408,
        usersNo: v2410
        };
      const v11434 = v5652;
      const v11436 = v5494;
      const v11437 = v2377;
      const v11438 = v5652.keepGoing;
      if (v11438) {
        const v11439 = v5652.total_users_claim;
        const v11440 = v5652.total_amount_claimed;
        const v11441 = v5652.usersNo;
        const v11442 = v5652.bal;
        const v11443 = v5652.total_rewards_allcoated;
        const v11444 = v5494[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v11445 = v11444[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v11450 = v5494[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v11451 = v11450[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        ;
        ;
        return;
        }
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc6, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc7,
    Admin_deposit0_130: ctc8,
    Admin_editUserReward0_130: ctc9,
    Admin_endContractAndTransfer0_130: ctc10,
    Admin_revokeAdmin0_130: ctc7,
    Admin_setReward0_130: ctc9,
    User_claim0_130: ctc8,
    User_claimAll0_130: ctc10,
    User_optin0_130: ctc10
    });
  const ctc12 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false
    });
  
  
  const v2350 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2351 = [v2350];
  const v2355 = stdlib.protect(ctc4, interact.projectName, 'for Deployer\'s interact field projectName');
  const v2356 = stdlib.protect(ctc5, interact.tok, 'for Deployer\'s interact field tok');
  
  const txn1 = await (ctc.sendrecv({
    args: [v2355, v2356],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./token.rsh:57:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc5],
    pay: [stdlib.checkedBigNumberify('./token.rsh:57:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2360, v2361], secs: v2363, time: v2362, didSend: v29, from: v2359 } = txn1;
      
      const v2364 = v2351[stdlib.checkedBigNumberify('./token.rsh:57:12:dot', stdlib.UInt_max, '0')];
      const v2365 = stdlib.Array_set(v2364, '0', stdlib.checkedBigNumberify('./token.rsh:57:12:dot', stdlib.UInt_max, '0'));
      const v2366 = stdlib.Array_set(v2351, stdlib.checkedBigNumberify('./token.rsh:57:12:dot', stdlib.UInt_max, '0'), v2365);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2361
        });
      ;
      const v2368 = await ctc.getContractInfo();
      
      const v2370 = {
        i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
        scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
        };
      const v2371 = {
        i: v2370,
        sign: true
        };
      const v2372 = {
        bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        keepGoing: true,
        percent: v2371,
        total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v2373 = v2372;
      const v2374 = v2362;
      const v2376 = v2366;
      const v2377 = stdlib.checkedBigNumberify('./token.rsh:51:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v2396 = v2373.keepGoing;
        
        return v2396;})()) {
        const v2408 = v2373.total_users_claim;
        const v2409 = v2373.total_amount_claimed;
        const v2410 = v2373.usersNo;
        const v2411 = v2373.bal;
        const v2412 = v2373.total_rewards_allcoated;
        const v2413 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v2414 = v2413[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        const v7479 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v7480 = v7479[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2359,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2359,
          tok: v2361
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v2361
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
    tys: [ctc4, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v2360, v2361], secs: v2363, time: v2362, didSend: v29, from: v2359 } = txn1;
  const v2364 = v2351[stdlib.checkedBigNumberify('./token.rsh:57:12:dot', stdlib.UInt_max, '0')];
  const v2365 = stdlib.Array_set(v2364, '0', stdlib.checkedBigNumberify('./token.rsh:57:12:dot', stdlib.UInt_max, '0'));
  const v2366 = stdlib.Array_set(v2351, stdlib.checkedBigNumberify('./token.rsh:57:12:dot', stdlib.UInt_max, '0'), v2365);
  ;
  ;
  const v2368 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.notify(v2368), {
    at: './token.rsh:59:27:application',
    fs: ['at ./token.rsh:59:27:application call to [unknown function] (defined at: ./token.rsh:59:27:function exp)', 'at ./token.rsh:59:27:application call to "liftedInteract" (defined at: ./token.rsh:59:27:application)'],
    msg: 'notify',
    who: 'Deployer'
    });
  
  const v2370 = {
    i: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    scale: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100')
    };
  const v2371 = {
    i: v2370,
    sign: true
    };
  const v2372 = {
    bal: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    keepGoing: true,
    percent: v2371,
    total_amount_claimed: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_rewards_allcoated: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    total_users_claim: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    usersNo: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v2373 = v2372;
  let v2374 = v2362;
  let v2376 = v2366;
  let v2377 = stdlib.checkedBigNumberify('./token.rsh:51:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn2 = txn1;
  while (await (async () => {
    const v2396 = v2373.keepGoing;
    
    return v2396;})()) {
    const v2408 = v2373.total_users_claim;
    const v2409 = v2373.total_amount_claimed;
    const v2410 = v2373.usersNo;
    const v2411 = v2373.bal;
    const v2412 = v2373.total_rewards_allcoated;
    const v2413 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
    const v2414 = v2413[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn3;
    switch (v2717[0]) {
      case 'Admin_addAdmin0_130': {
        const v2720 = v2717[1];
        undefined /* setApiDetails */;
        const v2726 = stdlib.addressEq(v2716, v2359);
        const v2727 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc6, v2716, ctc0), null);
        const v2728 = {
          None: 0,
          Some: 1
          }[v2727[0]];
        const v2729 = stdlib.eq(v2728, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v2730 = v2726 ? true : v2729;
        stdlib.assert(v2730, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:165:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:164:34:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:164:34:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'You Are unable to register another Admin',
          who: 'Deployer'
          });
        ;
        ;
        const v2861 = v2720[stdlib.checkedBigNumberify('./token.rsh:164:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, ctc6, v2861, ctc0, null);
        const v2870 = null;
        await txn3.getOutput('Admin_addAdmin', 'v2870', ctc0, v2870);
        const v2878 = v2373.keepGoing;
        const v2879 = v2373.percent;
        const v2884 = {
          bal: v2411,
          keepGoing: v2878,
          percent: v2879,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v2410
          };
        const cv2373 = v2884;
        const cv2374 = v2718;
        const cv2376 = v2376;
        const cv2377 = v2377;
        
        v2373 = cv2373;
        v2374 = cv2374;
        v2376 = cv2376;
        v2377 = cv2377;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_deposit0_130': {
        const v3247 = v2717[1];
        undefined /* setApiDetails */;
        const v3266 = v3247[stdlib.checkedBigNumberify('./token.rsh:100:10:spread', stdlib.UInt_max, '0')];
        const v3267 = stdlib.addressEq(v2716, v2359);
        const v3268 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc6, v2716, ctc0), null);
        const v3269 = {
          None: 0,
          Some: 1
          }[v3268[0]];
        const v3270 = stdlib.eq(v3269, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3271 = v3267 ? true : v3270;
        stdlib.assert(v3271, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:101:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:100:32:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:100:32:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        ;
        const v3383 = stdlib.add(v2414, v3266);
        const v3385 = stdlib.Array_set(v2413, '0', v3383);
        const v3386 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:70:37:dot', stdlib.UInt_max, '0'), v3385);
        ;
        const v3422 = null;
        await txn3.getOutput('Admin_deposit', 'v3422', ctc0, v3422);
        const v3430 = v2373.keepGoing;
        const v3431 = v2373.percent;
        const v3436 = stdlib.safeAdd(v2411, v3266);
        const v3437 = {
          bal: v3436,
          keepGoing: v3430,
          percent: v3431,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v2410
          };
        const cv2373 = v3437;
        const cv2374 = v2718;
        const cv2376 = v3386;
        const cv2377 = v2377;
        
        v2373 = cv2373;
        v2374 = cv2374;
        v2376 = cv2376;
        v2377 = cv2377;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_editUserReward0_130': {
        const v3774 = v2717[1];
        undefined /* setApiDetails */;
        const v3808 = v3774[stdlib.checkedBigNumberify('./token.rsh:151:10:spread', stdlib.UInt_max, '1')];
        const v3809 = stdlib.addressEq(v2716, v2359);
        const v3810 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, ctc6, v2716, ctc0), null);
        const v3811 = {
          None: 0,
          Some: 1
          }[v3810[0]];
        const v3812 = stdlib.eq(v3811, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v3813 = v3809 ? true : v3812;
        stdlib.assert(v3813, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Only Admins can deposit',
          who: 'Deployer'
          });
        const v3817 = stdlib.le(v3808, v2414);
        stdlib.assert(v3817, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:153:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:151:45:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:151:45:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Can only edit what is in the contract',
          who: 'Deployer'
          });
        ;
        ;
        const v3967 = v3774[stdlib.checkedBigNumberify('./token.rsh:151:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map0, ctc6, v3967, ctc1, v3808);
        const v3981 = null;
        await txn3.getOutput('Admin_editUserReward', 'v3981', ctc0, v3981);
        const v3990 = v2373.keepGoing;
        const v3991 = v2373.percent;
        const v3996 = {
          bal: v2411,
          keepGoing: v3990,
          percent: v3991,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v2410
          };
        const cv2373 = v3996;
        const cv2374 = v2718;
        const cv2376 = v2376;
        const cv2377 = v2377;
        
        v2373 = cv2373;
        v2374 = cv2374;
        v2376 = cv2376;
        v2377 = cv2377;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_endContractAndTransfer0_130': {
        const v4301 = v2717[1];
        undefined /* setApiDetails */;
        const v4353 = stdlib.addressEq(v2359, v2716);
        stdlib.assert(v4353, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:281:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:280:44:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:280:44:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Cannot end contract without being Deployer',
          who: 'Deployer'
          });
        ;
        ;
        const v4528 = null;
        await txn3.getOutput('Admin_endContractAndTransfer', 'v4528', ctc0, v4528);
        const v4536 = v2373.percent;
        const v4541 = {
          bal: v2411,
          keepGoing: false,
          percent: v4536,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v2410
          };
        const cv2373 = v4541;
        const cv2374 = v2718;
        const cv2376 = v2376;
        const cv2377 = v2377;
        
        v2373 = cv2373;
        v2374 = cv2374;
        v2376 = cv2376;
        v2377 = cv2377;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_revokeAdmin0_130': {
        const v4828 = v2717[1];
        undefined /* setApiDetails */;
        const v4890 = stdlib.addressEq(v2716, v2359);
        stdlib.assert(v4890, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:179:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:178:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:178:37:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Only the Deployer can revoke Admin Rights',
          who: 'Deployer'
          });
        ;
        ;
        const v5071 = v4828[stdlib.checkedBigNumberify('./token.rsh:178:10:spread', stdlib.UInt_max, '0')];
        await stdlib.mapSet(map1, ctc6, v5071, ctc0, undefined /* Nothing */);
        const v5076 = null;
        await txn3.getOutput('Admin_revokeAdmin', 'v5076', ctc0, v5076);
        const v5084 = v2373.keepGoing;
        const v5085 = v2373.percent;
        const v5090 = {
          bal: v2411,
          keepGoing: v5084,
          percent: v5085,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v2410
          };
        const cv2373 = v5090;
        const cv2374 = v2718;
        const cv2376 = v2376;
        const cv2377 = v2377;
        
        v2373 = cv2373;
        v2374 = cv2374;
        v2376 = cv2376;
        v2377 = cv2377;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Admin_setReward0_130': {
        const v5355 = v2717[1];
        undefined /* setApiDetails */;
        const v5426 = v5355[stdlib.checkedBigNumberify('./token.rsh:113:10:spread', stdlib.UInt_max, '0')];
        const v5427 = v5355[stdlib.checkedBigNumberify('./token.rsh:113:10:spread', stdlib.UInt_max, '1')];
        const v5428 = stdlib.gt(v5427, v2411);
        const v5429 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, ctc6, v5426, ctc0), null);
        const v5430 = {
          None: 0,
          Some: 1
          }[v5429[0]];
        const v5431 = stdlib.eq(v5430, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v5431, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:113:40:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:113:40:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'The user needs to opt in first',
          who: 'Deployer'
          });
        const v5433 = v5428 ? v5427 : stdlib.checkedBigNumberify('./token.rsh:118:35:decimal', stdlib.UInt_max, '0');
        ;
        const v5491 = stdlib.add(v2414, v5433);
        const v5493 = stdlib.Array_set(v2413, '0', v5491);
        const v5494 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:70:37:dot', stdlib.UInt_max, '0'), v5493);
        ;
        const v5629 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v5426, ctc1), null);
        const v5630 = stdlib.fromSome(v5629, stdlib.checkedBigNumberify('./token.rsh:120:60:decimal', stdlib.UInt_max, '0'));
        const v5634 = stdlib.safeAdd(v5630, v5427);
        await stdlib.mapSet(map0, ctc6, v5426, ctc1, v5634);
        const v5635 = true;
        await txn3.getOutput('Admin_setReward', 'v5635', ctc12, v5635);
        const v5644 = v2373.keepGoing;
        const v5645 = v2373.percent;
        let v5650;
        if (v5428) {
          const v5651 = stdlib.safeAdd(v2411, v5427);
          v5650 = v5651;
          }
        else {
          v5650 = v2411;
          }
        const v5652 = {
          bal: v5650,
          keepGoing: v5644,
          percent: v5645,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v2410
          };
        const cv2373 = v5652;
        const cv2374 = v2718;
        const cv2376 = v5494;
        const cv2377 = v2377;
        
        v2373 = cv2373;
        v2374 = cv2374;
        v2376 = cv2376;
        v2377 = cv2377;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'User_claim0_130': {
        const v5882 = v2717[1];
        undefined /* setApiDetails */;
        const v5968 = v5882[stdlib.checkedBigNumberify('./token.rsh:237:10:spread', stdlib.UInt_max, '0')];
        const v5969 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2716, ctc1), null);
        const v5970 = stdlib.fromSome(v5969, stdlib.checkedBigNumberify('./token.rsh:238:56:decimal', stdlib.UInt_max, '0'));
        const v5973 = stdlib.le(v5968, v2414);
        stdlib.assert(v5973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Cannot withdraw less than balance',
          who: 'Deployer'
          });
        const v5975 = stdlib.ge(v5970, v5968);
        stdlib.assert(v5975, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Cannot withdraw less than allocated',
          who: 'Deployer'
          });
        ;
        ;
        const v6236 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2716, ctc0), null);
        const v6237 = {
          None: 0,
          Some: 1
          }[v6236[0]];
        const v6238 = stdlib.eq(v6237, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v6239 = true;
        await txn3.getOutput('User_claim', 'v6239', ctc12, v6239);
        const v6246 = {
          addr: v2716,
          amount: v5968,
          projectName: v2360
          };
        null;
        if (v6238) {
          const v6278 = stdlib.sub(v2414, v5968);
          const v6280 = stdlib.Array_set(v2413, '0', v6278);
          const v6281 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:255:32:application', stdlib.UInt_max, '0'), v6280);
          ;
          await stdlib.mapSet(map0, ctc6, v2716, ctc1, undefined /* Nothing */);
          const v6283 = v2373.keepGoing;
          const v6284 = v2373.percent;
          const v6291 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:259:56:decimal', stdlib.UInt_max, '1'));
          const v6292 = stdlib.safeSub(v2411, v5968);
          const v6293 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:261:52:decimal', stdlib.UInt_max, '1'));
          const v6294 = stdlib.safeAdd(v2409, v5968);
          const v6295 = {
            bal: v6292,
            keepGoing: v6283,
            percent: v6284,
            total_amount_claimed: v6294,
            total_rewards_allcoated: v2412,
            total_users_claim: v6293,
            usersNo: v6291
            };
          const cv2373 = v6295;
          const cv2374 = v2718;
          const cv2376 = v6281;
          const cv2377 = v2377;
          
          v2373 = cv2373;
          v2374 = cv2374;
          v2376 = cv2376;
          v2377 = cv2377;
          
          txn2 = txn3;
          continue;}
        else {
          await stdlib.mapSet(map2, ctc6, v2716, ctc0, null);
          const v6254 = stdlib.sub(v2414, v5968);
          const v6256 = stdlib.Array_set(v2413, '0', v6254);
          const v6257 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:255:32:application', stdlib.UInt_max, '0'), v6256);
          ;
          await stdlib.mapSet(map0, ctc6, v2716, ctc1, undefined /* Nothing */);
          const v6259 = v2373.keepGoing;
          const v6260 = v2373.percent;
          const v6268 = stdlib.safeSub(v2411, v5968);
          const v6269 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:261:52:decimal', stdlib.UInt_max, '1'));
          const v6270 = stdlib.safeAdd(v2409, v5968);
          const v6271 = {
            bal: v6268,
            keepGoing: v6259,
            percent: v6260,
            total_amount_claimed: v6270,
            total_rewards_allcoated: v2412,
            total_users_claim: v6269,
            usersNo: v2410
            };
          const cv2373 = v6271;
          const cv2374 = v2718;
          const cv2376 = v6257;
          const cv2377 = v2377;
          
          v2373 = cv2373;
          v2374 = cv2374;
          v2376 = cv2376;
          v2377 = cv2377;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'User_claimAll0_130': {
        const v6409 = v2717[1];
        undefined /* setApiDetails */;
        const v6511 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc6, v2716, ctc1), null);
        const v6512 = stdlib.fromSome(v6511, stdlib.checkedBigNumberify('./token.rsh:190:56:decimal', stdlib.UInt_max, '0'));
        const v6514 = {
          None: 0,
          Some: 1
          }[v6511[0]];
        const v6515 = stdlib.eq(v6514, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v6515, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Cannot claim because you have not earned reward',
          who: 'Deployer'
          });
        const v6519 = stdlib.le(v6512, v2414);
        stdlib.assert(v6519, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./token.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
          msg: 'Cannot claim more than the balance in the contract',
          who: 'Deployer'
          });
        ;
        ;
        const v6837 = stdlib.gt(v2414, v6512);
        const v6838 = v6837 ? v6512 : v2414;
        const v6841 = stdlib.ge(v6512, v2414);
        if (v6841) {
          null;
          const v6842 = false;
          await txn3.getOutput('User_claimAll', 'v6842', ctc12, v6842);
          const v6849 = v2373.keepGoing;
          const v6850 = v2373.percent;
          const v6855 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:207:57:decimal', stdlib.UInt_max, '1'));
          const v6856 = {
            bal: v2411,
            keepGoing: v6849,
            percent: v6850,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v6855
            };
          const cv2373 = v6856;
          const cv2374 = v2718;
          const cv2376 = v2376;
          const cv2377 = v2377;
          
          v2373 = cv2373;
          v2374 = cv2374;
          v2376 = cv2376;
          v2377 = cv2377;
          
          txn2 = txn3;
          continue;}
        else {
          const v6858 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc6, v2716, ctc0), null);
          const v6859 = {
            None: 0,
            Some: 1
            }[v6858[0]];
          const v6860 = stdlib.eq(v6859, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v6860) {
            const v6892 = true;
            await txn3.getOutput('User_claimAll', 'v6892', ctc12, v6892);
            const v6903 = stdlib.sub(v2414, v6838);
            const v6905 = stdlib.Array_set(v2413, '0', v6903);
            const v6906 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:225:37:application', stdlib.UInt_max, '0'), v6905);
            ;
            await stdlib.mapSet(map0, ctc6, v2716, ctc1, undefined /* Nothing */);
            const v6908 = v2373.keepGoing;
            const v6909 = v2373.percent;
            const v6914 = stdlib.safeSub(v2411, v6838);
            const v6915 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:230:54:decimal', stdlib.UInt_max, '1'));
            const v6916 = stdlib.safeAdd(v2409, v6838);
            const v6917 = {
              bal: v6914,
              keepGoing: v6908,
              percent: v6909,
              total_amount_claimed: v6916,
              total_rewards_allcoated: v2412,
              total_users_claim: v6915,
              usersNo: v2410
              };
            const cv2373 = v6917;
            const cv2374 = v2718;
            const cv2376 = v6906;
            const cv2377 = v2377;
            
            v2373 = cv2373;
            v2374 = cv2374;
            v2376 = cv2376;
            v2377 = cv2377;
            
            txn2 = txn3;
            continue;}
          else {
            const v6862 = true;
            await txn3.getOutput('User_claimAll', 'v6862', ctc12, v6862);
            const v6868 = {
              addr: v2716,
              amount: v6838,
              projectName: v2360
              };
            null;
            await stdlib.mapSet(map2, ctc6, v2716, ctc0, null);
            const v6875 = stdlib.sub(v2414, v6838);
            const v6877 = stdlib.Array_set(v2413, '0', v6875);
            const v6878 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:214:37:application', stdlib.UInt_max, '0'), v6877);
            ;
            await stdlib.mapSet(map0, ctc6, v2716, ctc1, undefined /* Nothing */);
            const v6880 = v2373.keepGoing;
            const v6881 = v2373.percent;
            const v6886 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:218:34:decimal', stdlib.UInt_max, '1'));
            const v6887 = stdlib.safeSub(v2411, v6838);
            const v6888 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:220:54:decimal', stdlib.UInt_max, '1'));
            const v6889 = stdlib.safeAdd(v2409, v6838);
            const v6890 = {
              bal: v6887,
              keepGoing: v6880,
              percent: v6881,
              total_amount_claimed: v6889,
              total_rewards_allcoated: v2412,
              total_users_claim: v6888,
              usersNo: v6886
              };
            const cv2373 = v6890;
            const cv2374 = v2718;
            const cv2376 = v6878;
            const cv2377 = v2377;
            
            v2373 = cv2373;
            v2374 = cv2374;
            v2376 = cv2376;
            v2377 = cv2377;
            
            txn2 = txn3;
            continue;}}
        break;
        }
      case 'User_optin0_130': {
        const v6936 = v2717[1];
        undefined /* setApiDetails */;
        ;
        ;
        await stdlib.mapSet(map3, ctc6, v2716, ctc0, null);
        const v7448 = null;
        await txn3.getOutput('User_optin', 'v7448', ctc0, v7448);
        const v7455 = v2373.keepGoing;
        const v7456 = v2373.percent;
        const v7461 = {
          bal: v2411,
          keepGoing: v7455,
          percent: v7456,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v2410
          };
        const cv2373 = v7461;
        const cv2374 = v2718;
        const cv2376 = v2376;
        const cv2377 = v2377;
        
        v2373 = cv2373;
        v2374 = cv2374;
        v2376 = cv2376;
        v2377 = cv2377;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  const v7479 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
  const v7480 = v7479[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc16 = stdlib.T_Tuple([]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc14,
    Admin_deposit0_130: ctc13,
    Admin_editUserReward0_130: ctc15,
    Admin_endContractAndTransfer0_130: ctc16,
    Admin_revokeAdmin0_130: ctc14,
    Admin_setReward0_130: ctc15,
    User_claim0_130: ctc13,
    User_claimAll0_130: ctc16,
    User_optin0_130: ctc16
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2530 = ctc.selfAddress();
  const v2532 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to "runUser_claim0_130" (defined at: ./token.rsh:237:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_claim'
    });
  const v2533 = v2532[stdlib.checkedBigNumberify('./token.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2535 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2530, ctc1), null);
  const v2536 = stdlib.fromSome(v2535, stdlib.checkedBigNumberify('./token.rsh:238:56:decimal', stdlib.UInt_max, '0'));
  const v2539 = stdlib.le(v2533, v2414);
  stdlib.assert(v2539, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to "runUser_claim0_130" (defined at: ./token.rsh:237:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Cannot withdraw less than balance',
    who: 'User_claim'
    });
  const v2541 = stdlib.ge(v2536, v2533);
  stdlib.assert(v2541, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to "runUser_claim0_130" (defined at: ./token.rsh:237:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Cannot withdraw less than allocated',
    who: 'User_claim'
    });
  const v2548 = ['User_claim0_130', v2532];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2548],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:242:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:242:14:decimal', stdlib.UInt_max, '0'), v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claim"
            });
          const v5968 = v5882[stdlib.checkedBigNumberify('./token.rsh:237:10:spread', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v2716, ctc1), null);
          ;
          ;
          const v6236 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc4, v2716, ctc0), null);
          const v6237 = {
            None: 0,
            Some: 1
            }[v6236[0]];
          const v6238 = stdlib.eq(v6237, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          const v6239 = true;
          const v6240 = await txn1.getOutput('User_claim', 'v6239', ctc7, v6239);
          
          const v6246 = {
            addr: v2716,
            amount: v5968,
            projectName: v2360
            };
          null;
          if (v6238) {
            const v6278 = stdlib.sub(v2414, v5968);
            const v6280 = stdlib.Array_set(v2413, '0', v6278);
            const v6281 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:255:32:application', stdlib.UInt_max, '0'), v6280);
            sim_r.txns.push({
              kind: 'from',
              to: v2716,
              tok: v2361
              });
            await stdlib.simMapSet(sim_r, 0, ctc4, v2716, ctc1, undefined /* Nothing */);
            const v6283 = v2373.keepGoing;
            const v6284 = v2373.percent;
            const v6291 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:259:56:decimal', stdlib.UInt_max, '1'));
            const v6292 = stdlib.safeSub(v2411, v5968);
            const v6293 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:261:52:decimal', stdlib.UInt_max, '1'));
            const v6294 = stdlib.safeAdd(v2409, v5968);
            const v6295 = {
              bal: v6292,
              keepGoing: v6283,
              percent: v6284,
              total_amount_claimed: v6294,
              total_rewards_allcoated: v2412,
              total_users_claim: v6293,
              usersNo: v6291
              };
            const v11668 = v6295;
            const v11670 = v6281;
            const v11671 = v2377;
            const v11672 = v6295.keepGoing;
            if (v11672) {
              const v11673 = v6295.total_users_claim;
              const v11674 = v6295.total_amount_claimed;
              const v11675 = v6295.usersNo;
              const v11676 = v6295.bal;
              const v11677 = v6295.total_rewards_allcoated;
              const v11678 = v6281[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              const v11679 = v11678[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v11684 = v6281[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              const v11685 = v11684[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2359,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v2359,
                tok: v2361
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2361
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 2, ctc4, v2716, ctc0, null);
            const v6254 = stdlib.sub(v2414, v5968);
            const v6256 = stdlib.Array_set(v2413, '0', v6254);
            const v6257 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:255:32:application', stdlib.UInt_max, '0'), v6256);
            sim_r.txns.push({
              kind: 'from',
              to: v2716,
              tok: v2361
              });
            await stdlib.simMapSet(sim_r, 0, ctc4, v2716, ctc1, undefined /* Nothing */);
            const v6259 = v2373.keepGoing;
            const v6260 = v2373.percent;
            const v6268 = stdlib.safeSub(v2411, v5968);
            const v6269 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:261:52:decimal', stdlib.UInt_max, '1'));
            const v6270 = stdlib.safeAdd(v2409, v5968);
            const v6271 = {
              bal: v6268,
              keepGoing: v6259,
              percent: v6260,
              total_amount_claimed: v6270,
              total_rewards_allcoated: v2412,
              total_users_claim: v6269,
              usersNo: v2410
              };
            const v11686 = v6271;
            const v11688 = v6257;
            const v11689 = v2377;
            const v11690 = v6271.keepGoing;
            if (v11690) {
              const v11691 = v6271.total_users_claim;
              const v11692 = v6271.total_amount_claimed;
              const v11693 = v6271.usersNo;
              const v11694 = v6271.bal;
              const v11695 = v6271.total_rewards_allcoated;
              const v11696 = v6257[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              const v11697 = v11696[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v11702 = v6257[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              const v11703 = v11702[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2359,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v2359,
                tok: v2361
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2361
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      undefined /* setApiDetails */;
      const v5968 = v5882[stdlib.checkedBigNumberify('./token.rsh:237:10:spread', stdlib.UInt_max, '0')];
      const v5969 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2716, ctc1), null);
      const v5970 = stdlib.fromSome(v5969, stdlib.checkedBigNumberify('./token.rsh:238:56:decimal', stdlib.UInt_max, '0'));
      const v5973 = stdlib.le(v5968, v2414);
      stdlib.assert(v5973, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:239:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Cannot withdraw less than balance',
        who: 'User_claim'
        });
      const v5975 = stdlib.ge(v5970, v5968);
      stdlib.assert(v5975, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:240:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:237:29:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:237:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Cannot withdraw less than allocated',
        who: 'User_claim'
        });
      ;
      ;
      const v6236 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc4, v2716, ctc0), null);
      const v6237 = {
        None: 0,
        Some: 1
        }[v6236[0]];
      const v6238 = stdlib.eq(v6237, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v6239 = true;
      const v6240 = await txn1.getOutput('User_claim', 'v6239', ctc7, v6239);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v5882, v6240), {
          at: './token.rsh:237:11:application',
          fs: ['at ./token.rsh:237:11:application call to [unknown function] (defined at: ./token.rsh:237:11:function exp)', 'at ./token.rsh:247:14:application call to "ret" (defined at: ./token.rsh:243:15:function exp)', 'at ./token.rsh:243:15:application call to [unknown function] (defined at: ./token.rsh:243:15:function exp)'],
          msg: 'out',
          who: 'User_claim'
          });
        }
      else {
        }
      
      const v6246 = {
        addr: v2716,
        amount: v5968,
        projectName: v2360
        };
      null;
      if (v6238) {
        const v6278 = stdlib.sub(v2414, v5968);
        const v6280 = stdlib.Array_set(v2413, '0', v6278);
        const v6281 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:255:32:application', stdlib.UInt_max, '0'), v6280);
        ;
        await stdlib.mapSet(map0, ctc4, v2716, ctc1, undefined /* Nothing */);
        const v6283 = v2373.keepGoing;
        const v6284 = v2373.percent;
        const v6291 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:259:56:decimal', stdlib.UInt_max, '1'));
        const v6292 = stdlib.safeSub(v2411, v5968);
        const v6293 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:261:52:decimal', stdlib.UInt_max, '1'));
        const v6294 = stdlib.safeAdd(v2409, v5968);
        const v6295 = {
          bal: v6292,
          keepGoing: v6283,
          percent: v6284,
          total_amount_claimed: v6294,
          total_rewards_allcoated: v2412,
          total_users_claim: v6293,
          usersNo: v6291
          };
        const v11668 = v6295;
        const v11670 = v6281;
        const v11671 = v2377;
        const v11672 = v6295.keepGoing;
        if (v11672) {
          const v11673 = v6295.total_users_claim;
          const v11674 = v6295.total_amount_claimed;
          const v11675 = v6295.usersNo;
          const v11676 = v6295.bal;
          const v11677 = v6295.total_rewards_allcoated;
          const v11678 = v6281[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          const v11679 = v11678[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v11684 = v6281[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          const v11685 = v11684[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map2, ctc4, v2716, ctc0, null);
        const v6254 = stdlib.sub(v2414, v5968);
        const v6256 = stdlib.Array_set(v2413, '0', v6254);
        const v6257 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:255:32:application', stdlib.UInt_max, '0'), v6256);
        ;
        await stdlib.mapSet(map0, ctc4, v2716, ctc1, undefined /* Nothing */);
        const v6259 = v2373.keepGoing;
        const v6260 = v2373.percent;
        const v6268 = stdlib.safeSub(v2411, v5968);
        const v6269 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:261:52:decimal', stdlib.UInt_max, '1'));
        const v6270 = stdlib.safeAdd(v2409, v5968);
        const v6271 = {
          bal: v6268,
          keepGoing: v6259,
          percent: v6260,
          total_amount_claimed: v6270,
          total_rewards_allcoated: v2412,
          total_users_claim: v6269,
          usersNo: v2410
          };
        const v11686 = v6271;
        const v11688 = v6257;
        const v11689 = v2377;
        const v11690 = v6271.keepGoing;
        if (v11690) {
          const v11691 = v6271.total_users_claim;
          const v11692 = v6271.total_amount_claimed;
          const v11693 = v6271.usersNo;
          const v11694 = v6271.bal;
          const v11695 = v6271.total_rewards_allcoated;
          const v11696 = v6257[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          const v11697 = v11696[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v11702 = v6257[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          const v11703 = v11702[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
      return;
      break;
      }
    }
  
  
  };
export async function _User_claimAll3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _User_claimAll3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _User_claimAll3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc14,
    Admin_deposit0_130: ctc15,
    Admin_editUserReward0_130: ctc16,
    Admin_endContractAndTransfer0_130: ctc13,
    Admin_revokeAdmin0_130: ctc14,
    Admin_setReward0_130: ctc16,
    User_claim0_130: ctc15,
    User_claimAll0_130: ctc13,
    User_optin0_130: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2512 = ctc.selfAddress();
  const v2514 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to "runUser_claimAll0_130" (defined at: ./token.rsh:189:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_claimAll'
    });
  const v2515 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2512, ctc1), null);
  const v2516 = stdlib.fromSome(v2515, stdlib.checkedBigNumberify('./token.rsh:190:56:decimal', stdlib.UInt_max, '0'));
  const v2518 = {
    None: 0,
    Some: 1
    }[v2515[0]];
  const v2519 = stdlib.eq(v2518, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2519, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to "runUser_claimAll0_130" (defined at: ./token.rsh:189:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Cannot claim because you have not earned reward',
    who: 'User_claimAll'
    });
  const v2523 = stdlib.le(v2516, v2414);
  stdlib.assert(v2523, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./token.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to "runUser_claimAll0_130" (defined at: ./token.rsh:189:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'Cannot claim more than the balance in the contract',
    who: 'User_claimAll'
    });
  const v2528 = ['User_claimAll0_130', v2514];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2528],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:201:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:201:14:decimal', stdlib.UInt_max, '0'), v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_claimAll"
            });
          const v6511 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, ctc4, v2716, ctc1), null);
          const v6512 = stdlib.fromSome(v6511, stdlib.checkedBigNumberify('./token.rsh:190:56:decimal', stdlib.UInt_max, '0'));
          ;
          ;
          const v6837 = stdlib.gt(v2414, v6512);
          const v6838 = v6837 ? v6512 : v2414;
          const v6841 = stdlib.ge(v6512, v2414);
          if (v6841) {
            null;
            const v6842 = false;
            const v6843 = await txn1.getOutput('User_claimAll', 'v6842', ctc7, v6842);
            
            const v6849 = v2373.keepGoing;
            const v6850 = v2373.percent;
            const v6855 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:207:57:decimal', stdlib.UInt_max, '1'));
            const v6856 = {
              bal: v2411,
              keepGoing: v6849,
              percent: v6850,
              total_amount_claimed: v2409,
              total_rewards_allcoated: v2412,
              total_users_claim: v2408,
              usersNo: v6855
              };
            const v11920 = v6856;
            const v11922 = v2376;
            const v11923 = v2377;
            const v11924 = v6856.keepGoing;
            if (v11924) {
              const v11925 = v6856.total_users_claim;
              const v11926 = v6856.total_amount_claimed;
              const v11927 = v6856.usersNo;
              const v11928 = v6856.bal;
              const v11929 = v6856.total_rewards_allcoated;
              const v11930 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              const v11931 = v11930[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              const v11936 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              const v11937 = v11936[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v2359,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v2359,
                tok: v2361
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v2361
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v6858 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, ctc4, v2716, ctc0), null);
            const v6859 = {
              None: 0,
              Some: 1
              }[v6858[0]];
            const v6860 = stdlib.eq(v6859, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            if (v6860) {
              const v6892 = true;
              const v6893 = await txn1.getOutput('User_claimAll', 'v6892', ctc7, v6892);
              
              const v6903 = stdlib.sub(v2414, v6838);
              const v6905 = stdlib.Array_set(v2413, '0', v6903);
              const v6906 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:225:37:application', stdlib.UInt_max, '0'), v6905);
              sim_r.txns.push({
                kind: 'from',
                to: v2716,
                tok: v2361
                });
              await stdlib.simMapSet(sim_r, 0, ctc4, v2716, ctc1, undefined /* Nothing */);
              const v6908 = v2373.keepGoing;
              const v6909 = v2373.percent;
              const v6914 = stdlib.safeSub(v2411, v6838);
              const v6915 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:230:54:decimal', stdlib.UInt_max, '1'));
              const v6916 = stdlib.safeAdd(v2409, v6838);
              const v6917 = {
                bal: v6914,
                keepGoing: v6908,
                percent: v6909,
                total_amount_claimed: v6916,
                total_rewards_allcoated: v2412,
                total_users_claim: v6915,
                usersNo: v2410
                };
              const v11938 = v6917;
              const v11940 = v6906;
              const v11941 = v2377;
              const v11942 = v6917.keepGoing;
              if (v11942) {
                const v11943 = v6917.total_users_claim;
                const v11944 = v6917.total_amount_claimed;
                const v11945 = v6917.usersNo;
                const v11946 = v6917.bal;
                const v11947 = v6917.total_rewards_allcoated;
                const v11948 = v6906[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                const v11949 = v11948[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v11954 = v6906[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                const v11955 = v11954[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2359,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2359,
                  tok: v2361
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2361
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v6862 = true;
              const v6863 = await txn1.getOutput('User_claimAll', 'v6862', ctc7, v6862);
              
              const v6868 = {
                addr: v2716,
                amount: v6838,
                projectName: v2360
                };
              null;
              await stdlib.simMapSet(sim_r, 2, ctc4, v2716, ctc0, null);
              const v6875 = stdlib.sub(v2414, v6838);
              const v6877 = stdlib.Array_set(v2413, '0', v6875);
              const v6878 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:214:37:application', stdlib.UInt_max, '0'), v6877);
              sim_r.txns.push({
                kind: 'from',
                to: v2716,
                tok: v2361
                });
              await stdlib.simMapSet(sim_r, 0, ctc4, v2716, ctc1, undefined /* Nothing */);
              const v6880 = v2373.keepGoing;
              const v6881 = v2373.percent;
              const v6886 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:218:34:decimal', stdlib.UInt_max, '1'));
              const v6887 = stdlib.safeSub(v2411, v6838);
              const v6888 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:220:54:decimal', stdlib.UInt_max, '1'));
              const v6889 = stdlib.safeAdd(v2409, v6838);
              const v6890 = {
                bal: v6887,
                keepGoing: v6880,
                percent: v6881,
                total_amount_claimed: v6889,
                total_rewards_allcoated: v2412,
                total_users_claim: v6888,
                usersNo: v6886
                };
              const v11956 = v6890;
              const v11958 = v6878;
              const v11959 = v2377;
              const v11960 = v6890.keepGoing;
              if (v11960) {
                const v11961 = v6890.total_users_claim;
                const v11962 = v6890.total_amount_claimed;
                const v11963 = v6890.usersNo;
                const v11964 = v6890.bal;
                const v11965 = v6890.total_rewards_allcoated;
                const v11966 = v6878[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                const v11967 = v11966[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                sim_r.isHalt = false;
                }
              else {
                const v11972 = v6878[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                const v11973 = v11972[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v2359,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v2359,
                  tok: v2361
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v2361
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      undefined /* setApiDetails */;
      const v6511 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, ctc4, v2716, ctc1), null);
      const v6512 = stdlib.fromSome(v6511, stdlib.checkedBigNumberify('./token.rsh:190:56:decimal', stdlib.UInt_max, '0'));
      const v6514 = {
        None: 0,
        Some: 1
        }[v6511[0]];
      const v6515 = stdlib.eq(v6514, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v6515, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:192:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Cannot claim because you have not earned reward',
        who: 'User_claimAll'
        });
      const v6519 = stdlib.le(v6512, v2414);
      stdlib.assert(v6519, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./token.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./token.rsh:189:29:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:189:29:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)', 'at ./token.rsh:81:14:application call to [unknown function] (defined at: ./token.rsh:81:14:function exp)'],
        msg: 'Cannot claim more than the balance in the contract',
        who: 'User_claimAll'
        });
      ;
      ;
      const v6837 = stdlib.gt(v2414, v6512);
      const v6838 = v6837 ? v6512 : v2414;
      const v6841 = stdlib.ge(v6512, v2414);
      if (v6841) {
        null;
        const v6842 = false;
        const v6843 = await txn1.getOutput('User_claimAll', 'v6842', ctc7, v6842);
        if (v1439) {
          stdlib.protect(ctc0, await interact.out(v6409, v6843), {
            at: './token.rsh:189:11:application',
            fs: ['at ./token.rsh:189:11:application call to [unknown function] (defined at: ./token.rsh:189:11:function exp)', 'at ./token.rsh:206:16:application call to "ret" (defined at: ./token.rsh:202:15:function exp)', 'at ./token.rsh:202:15:application call to [unknown function] (defined at: ./token.rsh:202:15:function exp)'],
            msg: 'out',
            who: 'User_claimAll'
            });
          }
        else {
          }
        
        const v6849 = v2373.keepGoing;
        const v6850 = v2373.percent;
        const v6855 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:207:57:decimal', stdlib.UInt_max, '1'));
        const v6856 = {
          bal: v2411,
          keepGoing: v6849,
          percent: v6850,
          total_amount_claimed: v2409,
          total_rewards_allcoated: v2412,
          total_users_claim: v2408,
          usersNo: v6855
          };
        const v11920 = v6856;
        const v11922 = v2376;
        const v11923 = v2377;
        const v11924 = v6856.keepGoing;
        if (v11924) {
          const v11925 = v6856.total_users_claim;
          const v11926 = v6856.total_amount_claimed;
          const v11927 = v6856.usersNo;
          const v11928 = v6856.bal;
          const v11929 = v6856.total_rewards_allcoated;
          const v11930 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          const v11931 = v11930[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          return;
          }
        else {
          const v11936 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          const v11937 = v11936[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      else {
        const v6858 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, ctc4, v2716, ctc0), null);
        const v6859 = {
          None: 0,
          Some: 1
          }[v6858[0]];
        const v6860 = stdlib.eq(v6859, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        if (v6860) {
          const v6892 = true;
          const v6893 = await txn1.getOutput('User_claimAll', 'v6892', ctc7, v6892);
          if (v1439) {
            stdlib.protect(ctc0, await interact.out(v6409, v6893), {
              at: './token.rsh:189:11:application',
              fs: ['at ./token.rsh:189:11:application call to [unknown function] (defined at: ./token.rsh:189:11:function exp)', 'at ./token.rsh:224:16:application call to "ret" (defined at: ./token.rsh:202:15:function exp)', 'at ./token.rsh:202:15:application call to [unknown function] (defined at: ./token.rsh:202:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v6903 = stdlib.sub(v2414, v6838);
          const v6905 = stdlib.Array_set(v2413, '0', v6903);
          const v6906 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:225:37:application', stdlib.UInt_max, '0'), v6905);
          ;
          await stdlib.mapSet(map0, ctc4, v2716, ctc1, undefined /* Nothing */);
          const v6908 = v2373.keepGoing;
          const v6909 = v2373.percent;
          const v6914 = stdlib.safeSub(v2411, v6838);
          const v6915 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:230:54:decimal', stdlib.UInt_max, '1'));
          const v6916 = stdlib.safeAdd(v2409, v6838);
          const v6917 = {
            bal: v6914,
            keepGoing: v6908,
            percent: v6909,
            total_amount_claimed: v6916,
            total_rewards_allcoated: v2412,
            total_users_claim: v6915,
            usersNo: v2410
            };
          const v11938 = v6917;
          const v11940 = v6906;
          const v11941 = v2377;
          const v11942 = v6917.keepGoing;
          if (v11942) {
            const v11943 = v6917.total_users_claim;
            const v11944 = v6917.total_amount_claimed;
            const v11945 = v6917.usersNo;
            const v11946 = v6917.bal;
            const v11947 = v6917.total_rewards_allcoated;
            const v11948 = v6906[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11949 = v11948[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v11954 = v6906[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11955 = v11954[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}
        else {
          const v6862 = true;
          const v6863 = await txn1.getOutput('User_claimAll', 'v6862', ctc7, v6862);
          if (v1439) {
            stdlib.protect(ctc0, await interact.out(v6409, v6863), {
              at: './token.rsh:189:11:application',
              fs: ['at ./token.rsh:189:11:application call to [unknown function] (defined at: ./token.rsh:189:11:function exp)', 'at ./token.rsh:209:16:application call to "ret" (defined at: ./token.rsh:202:15:function exp)', 'at ./token.rsh:202:15:application call to [unknown function] (defined at: ./token.rsh:202:15:function exp)'],
              msg: 'out',
              who: 'User_claimAll'
              });
            }
          else {
            }
          
          const v6868 = {
            addr: v2716,
            amount: v6838,
            projectName: v2360
            };
          null;
          await stdlib.mapSet(map2, ctc4, v2716, ctc0, null);
          const v6875 = stdlib.sub(v2414, v6838);
          const v6877 = stdlib.Array_set(v2413, '0', v6875);
          const v6878 = stdlib.Array_set(v2376, stdlib.checkedBigNumberify('./token.rsh:214:37:application', stdlib.UInt_max, '0'), v6877);
          ;
          await stdlib.mapSet(map0, ctc4, v2716, ctc1, undefined /* Nothing */);
          const v6880 = v2373.keepGoing;
          const v6881 = v2373.percent;
          const v6886 = stdlib.safeAdd(v2410, stdlib.checkedBigNumberify('./token.rsh:218:34:decimal', stdlib.UInt_max, '1'));
          const v6887 = stdlib.safeSub(v2411, v6838);
          const v6888 = stdlib.safeAdd(v2408, stdlib.checkedBigNumberify('./token.rsh:220:54:decimal', stdlib.UInt_max, '1'));
          const v6889 = stdlib.safeAdd(v2409, v6838);
          const v6890 = {
            bal: v6887,
            keepGoing: v6880,
            percent: v6881,
            total_amount_claimed: v6889,
            total_rewards_allcoated: v2412,
            total_users_claim: v6888,
            usersNo: v6886
            };
          const v11956 = v6890;
          const v11958 = v6878;
          const v11959 = v2377;
          const v11960 = v6890.keepGoing;
          if (v11960) {
            const v11961 = v6890.total_users_claim;
            const v11962 = v6890.total_amount_claimed;
            const v11963 = v6890.usersNo;
            const v11964 = v6890.bal;
            const v11965 = v6890.total_rewards_allcoated;
            const v11966 = v6878[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11967 = v11966[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            return;
            }
          else {
            const v11972 = v6878[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v11973 = v11972[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
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
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc6 = stdlib.T_Token;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Object({
    i: ctc1,
    scale: ctc1
    });
  const ctc9 = stdlib.T_Object({
    i: ctc8,
    sign: ctc7
    });
  const ctc10 = stdlib.T_Object({
    bal: ctc1,
    keepGoing: ctc7,
    percent: ctc9,
    total_amount_claimed: ctc1,
    total_rewards_allcoated: ctc1,
    total_users_claim: ctc1,
    usersNo: ctc1
    });
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc7]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc13 = stdlib.T_Tuple([]);
  const ctc14 = stdlib.T_Tuple([ctc4]);
  const ctc15 = stdlib.T_Tuple([ctc1]);
  const ctc16 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc17 = stdlib.T_Data({
    Admin_addAdmin0_130: ctc14,
    Admin_deposit0_130: ctc15,
    Admin_editUserReward0_130: ctc16,
    Admin_endContractAndTransfer0_130: ctc13,
    Admin_revokeAdmin0_130: ctc14,
    Admin_setReward0_130: ctc16,
    User_claim0_130: ctc15,
    User_claimAll0_130: ctc13,
    User_optin0_130: ctc13
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true
    });
  
  const map2_ctc = ctc3;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true
    });
  
  const map3_ctc = ctc3;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true
    });
  
  
  const [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1]);
  const v2552 = stdlib.protect(ctc13, await interact.in(), {
    at: './token.rsh:1:23:application',
    fs: ['at ./token.rsh:270:26:application call to [unknown function] (defined at: ./token.rsh:270:26:function exp)', 'at ./token.rsh:70:37:application call to "runUser_optin0_130" (defined at: ./token.rsh:270:10:function exp)', 'at ./token.rsh:70:37:application call to [unknown function] (defined at: ./token.rsh:70:37:function exp)'],
    msg: 'in',
    who: 'User_optin'
    });
  const v2556 = ['User_optin0_130', v2552];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2359, v2360, v2361, v2373, v2376, v2377, v2408, v2409, v2410, v2411, v2412, v2413, v2414, v2556],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc17],
    pay: [stdlib.checkedBigNumberify('./token.rsh:272:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./token.rsh:272:14:decimal', stdlib.UInt_max, '0'), v2361]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      
      const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
      
      switch (v2717[0]) {
        case 'Admin_addAdmin0_130': {
          const v2720 = v2717[1];
          
          break;
          }
        case 'Admin_deposit0_130': {
          const v3247 = v2717[1];
          
          break;
          }
        case 'Admin_editUserReward0_130': {
          const v3774 = v2717[1];
          
          break;
          }
        case 'Admin_endContractAndTransfer0_130': {
          const v4301 = v2717[1];
          
          break;
          }
        case 'Admin_revokeAdmin0_130': {
          const v4828 = v2717[1];
          
          break;
          }
        case 'Admin_setReward0_130': {
          const v5355 = v2717[1];
          
          break;
          }
        case 'User_claim0_130': {
          const v5882 = v2717[1];
          
          break;
          }
        case 'User_claimAll0_130': {
          const v6409 = v2717[1];
          
          break;
          }
        case 'User_optin0_130': {
          const v6936 = v2717[1];
          sim_r.txns.push({
            kind: 'api',
            who: "User_optin"
            });
          ;
          ;
          await stdlib.simMapSet(sim_r, 3, ctc4, v2716, ctc0, null);
          const v7448 = null;
          const v7449 = await txn1.getOutput('User_optin', 'v7448', ctc0, v7448);
          
          const v7455 = v2373.keepGoing;
          const v7456 = v2373.percent;
          const v7461 = {
            bal: v2411,
            keepGoing: v7455,
            percent: v7456,
            total_amount_claimed: v2409,
            total_rewards_allcoated: v2412,
            total_users_claim: v2408,
            usersNo: v2410
            };
          const v12190 = v7461;
          const v12192 = v2376;
          const v12193 = v2377;
          const v12194 = v7461.keepGoing;
          if (v12194) {
            const v12195 = v7461.total_users_claim;
            const v12196 = v7461.total_amount_claimed;
            const v12197 = v7461.usersNo;
            const v12198 = v7461.bal;
            const v12199 = v7461.total_rewards_allcoated;
            const v12200 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v12201 = v12200[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.isHalt = false;
            }
          else {
            const v12206 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            const v12207 = v12206[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v2359,
              tok: v2361
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v2361
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
    tys: [ctc4, ctc5, ctc6, ctc10, ctc12, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc11, ctc1, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [v2717], secs: v2719, time: v2718, didSend: v1439, from: v2716 } = txn1;
  switch (v2717[0]) {
    case 'Admin_addAdmin0_130': {
      const v2720 = v2717[1];
      return;
      break;
      }
    case 'Admin_deposit0_130': {
      const v3247 = v2717[1];
      return;
      break;
      }
    case 'Admin_editUserReward0_130': {
      const v3774 = v2717[1];
      return;
      break;
      }
    case 'Admin_endContractAndTransfer0_130': {
      const v4301 = v2717[1];
      return;
      break;
      }
    case 'Admin_revokeAdmin0_130': {
      const v4828 = v2717[1];
      return;
      break;
      }
    case 'Admin_setReward0_130': {
      const v5355 = v2717[1];
      return;
      break;
      }
    case 'User_claim0_130': {
      const v5882 = v2717[1];
      return;
      break;
      }
    case 'User_claimAll0_130': {
      const v6409 = v2717[1];
      return;
      break;
      }
    case 'User_optin0_130': {
      const v6936 = v2717[1];
      undefined /* setApiDetails */;
      ;
      ;
      await stdlib.mapSet(map3, ctc4, v2716, ctc0, null);
      const v7448 = null;
      const v7449 = await txn1.getOutput('User_optin', 'v7448', ctc0, v7448);
      if (v1439) {
        stdlib.protect(ctc0, await interact.out(v6936, v7449), {
          at: './token.rsh:270:11:application',
          fs: ['at ./token.rsh:270:11:application call to [unknown function] (defined at: ./token.rsh:270:11:function exp)', 'at ./token.rsh:275:14:application call to "ret" (defined at: ./token.rsh:273:15:function exp)', 'at ./token.rsh:273:15:application call to [unknown function] (defined at: ./token.rsh:273:15:function exp)'],
          msg: 'out',
          who: 'User_optin'
          });
        }
      else {
        }
      
      const v7455 = v2373.keepGoing;
      const v7456 = v2373.percent;
      const v7461 = {
        bal: v2411,
        keepGoing: v7455,
        percent: v7456,
        total_amount_claimed: v2409,
        total_rewards_allcoated: v2412,
        total_users_claim: v2408,
        usersNo: v2410
        };
      const v12190 = v7461;
      const v12192 = v2376;
      const v12193 = v2377;
      const v12194 = v7461.keepGoing;
      if (v12194) {
        const v12195 = v7461.total_users_claim;
        const v12196 = v7461.total_amount_claimed;
        const v12197 = v7461.usersNo;
        const v12198 = v7461.bal;
        const v12199 = v7461.total_rewards_allcoated;
        const v12200 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v12201 = v12200[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        return;
        }
      else {
        const v12206 = v2376[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
        const v12207 = v12206[stdlib.checkedBigNumberify('./token.rsh:98:31:application', stdlib.UInt_max, '0')];
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
export async function User_claimAll(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for User_claimAll expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for User_claimAll expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _User_claimAll3(ctcTop, interact);}
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
    impure: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64)byte`, `User_claim(uint64)byte`, `User_claimAll()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64))void`, `_reachp_2((uint64,(byte,byte[40])))void`],
    pure: [`Info_Admins(address)byte`, `Info_balance()uint64`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`],
    sigs: [`Admin_addAdmin(address)void`, `Admin_deposit(uint64)void`, `Admin_editUserReward(address,uint64)void`, `Admin_endContractAndTransfer()void`, `Admin_revokeAdmin(address)void`, `Admin_setReward(address,uint64)byte`, `Info_Admins(address)byte`, `Info_balance()uint64`, `Info_opted(address)byte`, `Info_rewards(address)uint64`, `Info_totalAllocatedFunds()uint64`, `Info_totalAmountClaimed()uint64`, `Info_totalClaimed()uint64`, `Info_totalOptedIn()uint64`, `User_claim(uint64)byte`, `User_claimAll()byte`, `User_optin()void`, `_reachp_0((uint64,byte[30],uint64))void`, `_reachp_2((uint64,(byte,byte[40])))void`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAJAAEIA9STAdR6IKCNBgQmBgABAAEBAQIBAwSbyFRQMRhBCBcoZEkiWzUBJFs1AilkKmRQghMEAl90xwQTblc7BBp3QuUEGoMdBQQihEwmBCgTBPIEKTen9gQpi1oQBD75YpoESCT5AgRu5HYUBHhK2TcEev7IbQSGzek/BJPLlY0E7JZ+KgTzJ3gEBPlzDgsE+q7IsDYaAI4TAFUBMgdgAVYA8QG3AgcBdwEiAYcAhgGnAZcB7wDUB3AAvgBrAAEANhoBNQskryk0C1Akr1BQNQslNAESRIgJrjQLIls1DDQLVwgpNQ2ABFJBZ4c0DBZQNA1QsDQMiAoXNA0iVY0JCSoJLQkwB0kHTAdPB1kHXAdfQv+rNhoBFzULJK8qNAsWUDIDUFA1C0L/pzYaATYaAhc1CzUMJK8rNAw0CxZQUFA1C0L/jIAxAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9UNhoBNQskr4ABBDQLUCSvUFA1C0L/PjYaATYaAhc1CzUMJK+AAQU0DDQLFlBQUDULQv8hNhoBNQs0ASUSRIgIyigoKjQLUIgItiJVIxIWUQcINQQxGSISRIAEFR98dTQEULAjQzQBJRJEiAieNA4WNQRC/982GgE1CzQBJRJEiAiJKCgnBDQLUIgIdCJVIxIWUQcINQRC/7s2GgE1CzQBJRJEiAhlJK8oJK8pNAtQiAhOiAjINQRC/5o0ASUSRIgISTQQFjUEQv+KNAElEkSICDk0ExY1BEL/ejQBJRJEiAgpNBQWNQRC/2o0ASUSRIgIGTQSFjUEQv9agDEAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/iM2GgEXNQskr4ABBjQLFlAyA1BQNQtC/guAMQAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L90zEANBsSKCgqMQBQiAdwIlUjEhFEIQUqNA1XASBQKIgHwSg1C4AIAAAAAAAACzY0C1CwNAs1BDQRFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjUXNRg0GFcIARdBBn80GIEqWzUUNBiBGls1EzQYgTJbNRI0GCJbNRE0GIEiWzUQNBZXABFJNQ8iWzUONBs0GlA0GRZQNBhQNBZQNBUWUDQUFlA0ExZQNBIWUDQRFlA0EBZQNA9QNA4WUCUyBjUCNQEpSwFXAH9nKkxXf1tnKDQBFjQCFlBnMRkiEkSIBzc0A0D990L96jQNI1s1CzEANBsSKCgqMQBQiAZ9IlUjEhFENAs0GYgHGig1DIAIAAAAAAAADV40DFCwNAw1BDQRNAsIFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjQWNA80DjQLCBZcAFwANRY1FzUYQv79NAshBls1DDEANBsSKCgqMQBQiAYLIlUjEhFENAw0Dg5EIQQpNAtXACBQNAwWiAZUKDULgAgAAAAAAAAPjTQLULA0CzUENBEWNBhXCAFQNBhXCRFQNBMWUDQQFlA0FBZQNBIWUDIGNRc1GEL+kDQbMQASRCg1C4AIAAAAAAAAEbA0C1CwNAs1BDQRFilQNBhXCRFQNBMWUDQQFlA0FBZQNBIWUDIGNRc1GEL+UTEANBsSRCEFKjQNVwEgUIgF1Cg1C4AIAAAAAAAAE9Q0C1CwNAs1BDQRFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjUXNRhC/gI0C1cAIDUNNAshBltJNQw0EQ01HCgoJwQ0DVCIBQciVSMSRCI0DDQcTUk1CzQZiAWeIQQpNA1QJK8oJK8pNA1QiATiiAVcFzQMCBaIBTsjNQ2ACAAAAAAAABYDNA0WUQcIULA0DRZRBwg1BDQcQQKsNBE0DAg1DTQNFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjQWNA80DjQLCBZcAFwANRY1FzUYQv1TNA0jW0k1CzQODkQkrygkrykxAFCIBF+IBNkXNAsPRCM1DIAIAAAAAAAAGF80DBZRBwhQsDQMFlEHCDUEMQA0CxZQNBpQNQwnBTQMULAoKCsxAFCIBCAiVSMSQQIXNAs0GTEAiARwIQQpMQBQiAR5NBE0CwkWNBhXCAFQNBhXCRFQNBM0CwgWUDQQFlA0FCMIFlA0EiMIFlAyBjQWNA80DjQLCRZcAFwANRY1FzUYQvyiKCSvKTEAUIgDuzUMJK80DIgELxc1CzQMIlUjEkQ0CzQODkQ0DjQLNA40Cw1NNQw0CzQOD0EB6IAE/955KDQLFlCwIjULgAgAAAAAAAAaujQLFlEHCFCwNAsWUQcINQQ0ERY0GFcIAVA0GFcJEVA0ExZQNBAWUDQUFlA0EiMIFlAyBjUXNRhC/BkhBScEMQBQKIgDlSg1C4AIAAAAAAAAHRg0C1CwNAs1BDQRFjQYVwgBUDQYVwkRUDQTFlA0EBZQNBQWUDQSFlAyBjUXNRhC+9ExADUbNAsiWzUMNAtXCB41GjQLgSZbNRmABChLx/A0DBZQNBpQNBkWULA0DIgDWYERrzULIQeIA0UiNBkyCogDE4A6AAAAAAAAAAABAAAAAAAAAAUAAAAAAAAAZAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIGNAtJVwARJK9cAFwAIjUVNRY1FzUYQvs6iALqIQeIAt82GgE1C0L/WYgC2jYaATULQviXIjE0EkQlMTUSRCIxNhJEIjE3EkSIAruB2gGvIiJC+2dC/GxC/Kg0DVcBKDULQvztQv2ZQv5HQv7NNBE1DUL9VCEFKzEAUCiIAlw0CzQZMQCIAk8hBCkxAFCIAlg0ETQLCRY0GFcIAVA0GFcJEVA0EzQLCBZQNBAWUDQUIwgWUDQSFlAyBjQWNA80DjQLCRZcAFwANRY1FzUYQvqDKCgrMQBQiAGdIlUjEkEAbyM1C4AIAAAAAAAAGuw0CxZRBwhQsDQLFlEHCDUENAw0GTEAiAHQIQQpMQBQiAHZNBE0DAkWNBhXCAFQNBhXCRFQNBM0DAgWUDQQFlA0FCMIFlA0EhZQMgY0FjQPNA40DAkWXABcADUWNRc1GEL6BCM1C4AIAAAAAAAAGs40CxZRBwhQsDQLFlEHCDUEMQA0DBZQNBpQNQsnBTQLULAhBSsxAFAoiAFTNAw0GTEAiAFGIQQpMQBQiAFPNBE0DAkWNBhXCAFQNBhXCRFQNBM0DAgWUDQQFlA0FCMIFlA0EiMIFlAyBjQWNA80DjQMCRZcAFwANRY1FzUYQvl4NBU0G4gBGjQWVwARIls0GTQbiADmIjQZMgoyCYgBSTEZgQUSRIgBETIKYDIKeAlJNQYyCogA6kL5yEhMv0iJIrIBI7IQsgeyCLOJIrIBIQiyELIUshGyErOJQvjAQvmqNA1XASg1C0L6EUiJTAlJNQYyCYgAq4kJSUH/7kk1BjEWNAAjCEk1AAlHAjgHMgoSRDgQIxJEOAgSRIm+SRZRBwhFBE1QiUlXACA1G0lXIB41GkmBPls1GUlXRjo1GElXgBE1FkmBkQFbNRVJgZkBWzUUSYGhAVs1E0mBqQFbNRJJgbEBWzURSYG5AVs1EElXwRE1D4HSAVs1DomxQv9MTEm9QP81SwOIABtC/y28Ik4CTTQHCDUHiUlXAQBMIlVNibFC/xo0Bgg1BokjNQOJSSISTDQCEhFEiTQGNAdKD0H/KkL/MjEWNAAjCEk1AAlHAzgUMgoSRDgQIQgSRDgRTwISRDgSEkSJsbIVQv7d`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `477`,
    1001: `477`,
    1002: `477`,
    1003: `478`,
    1004: `478`,
    1005: `478`,
    1006: `480`,
    1007: `480`,
    1008: `481`,
    1009: `482`,
    101: `21`,
    1010: `483`,
    1011: `483`,
    1012: `484`,
    1013: `484`,
    1014: `485`,
    1015: `485`,
    1016: `486`,
    1017: `488`,
    1018: `489`,
    1019: `490`,
    102: `21`,
    1020: `491`,
    1021: `491`,
    1022: `492`,
    1023: `493`,
    1024: `493`,
    1025: `493`,
    1026: `494`,
    1027: `495`,
    1028: `496`,
    1029: `497`,
    103: `21`,
    1030: `498`,
    1031: `499`,
    1032: `507`,
    1033: `507`,
    1034: `508`,
    1035: `508`,
    1036: `509`,
    1037: `509`,
    1038: `509`,
    1039: `512`,
    104: `21`,
    1040: `513`,
    1041: `513`,
    1042: `514`,
    1043: `514`,
    1044: `514`,
    1045: `514`,
    1046: `514`,
    1047: `514`,
    1048: `514`,
    1049: `514`,
    105: `21`,
    1050: `514`,
    1051: `514`,
    1052: `515`,
    1053: `515`,
    1054: `516`,
    1055: `517`,
    1056: `518`,
    1057: `518`,
    1058: `519`,
    1059: `519`,
    106: `21`,
    1060: `520`,
    1061: `520`,
    1062: `521`,
    1063: `521`,
    1064: `522`,
    1065: `523`,
    1066: `524`,
    1067: `524`,
    1068: `525`,
    1069: `525`,
    107: `21`,
    1070: `525`,
    1071: `526`,
    1072: `527`,
    1073: `527`,
    1074: `528`,
    1075: `528`,
    1076: `528`,
    1077: `529`,
    1078: `530`,
    1079: `530`,
    108: `21`,
    1080: `531`,
    1081: `532`,
    1082: `533`,
    1083: `533`,
    1084: `534`,
    1085: `535`,
    1086: `536`,
    1087: `536`,
    1088: `537`,
    1089: `538`,
    109: `21`,
    1090: `539`,
    1091: `539`,
    1092: `540`,
    1093: `541`,
    1094: `542`,
    1095: `542`,
    1096: `543`,
    1097: `543`,
    1098: `544`,
    1099: `544`,
    11: `2`,
    110: `21`,
    1100: `545`,
    1101: `545`,
    1102: `546`,
    1103: `546`,
    1104: `547`,
    1105: `548`,
    1106: `549`,
    1107: `549`,
    1108: `550`,
    1109: `550`,
    111: `21`,
    1110: `551`,
    1111: `551`,
    1112: `552`,
    1113: `552`,
    1114: `553`,
    1115: `553`,
    1116: `554`,
    1117: `554`,
    1118: `554`,
    1119: `556`,
    112: `21`,
    1120: `556`,
    1121: `557`,
    1122: `557`,
    1123: `558`,
    1124: `559`,
    1125: `559`,
    1126: `560`,
    1127: `560`,
    1128: `561`,
    1129: `561`,
    113: `21`,
    1130: `562`,
    1131: `564`,
    1132: `565`,
    1133: `566`,
    1134: `567`,
    1135: `567`,
    1136: `568`,
    1137: `569`,
    1138: `569`,
    1139: `569`,
    114: `21`,
    1140: `570`,
    1141: `571`,
    1142: `572`,
    1143: `573`,
    1144: `574`,
    1145: `575`,
    1146: `583`,
    1147: `583`,
    1148: `584`,
    1149: `584`,
    115: `21`,
    1150: `585`,
    1151: `586`,
    1152: `595`,
    1153: `595`,
    1154: `596`,
    1155: `597`,
    1156: `597`,
    1157: `598`,
    1158: `598`,
    1159: `598`,
    116: `21`,
    1160: `599`,
    1161: `600`,
    1162: `600`,
    1163: `601`,
    1164: `602`,
    1165: `602`,
    1166: `602`,
    1167: `603`,
    1168: `604`,
    1169: `604`,
    117: `21`,
    1170: `605`,
    1171: `605`,
    1172: `605`,
    1173: `605`,
    1174: `605`,
    1175: `605`,
    1176: `605`,
    1177: `605`,
    1178: `605`,
    1179: `605`,
    118: `21`,
    1180: `606`,
    1181: `606`,
    1182: `607`,
    1183: `608`,
    1184: `609`,
    1185: `609`,
    1186: `610`,
    1187: `610`,
    1188: `611`,
    1189: `611`,
    119: `21`,
    1190: `612`,
    1191: `613`,
    1192: `613`,
    1193: `614`,
    1194: `614`,
    1195: `614`,
    1196: `615`,
    1197: `616`,
    1198: `616`,
    1199: `617`,
    12: `2`,
    120: `21`,
    1200: `617`,
    1201: `617`,
    1202: `618`,
    1203: `619`,
    1204: `619`,
    1205: `620`,
    1206: `621`,
    1207: `622`,
    1208: `622`,
    1209: `623`,
    121: `21`,
    1210: `624`,
    1211: `625`,
    1212: `625`,
    1213: `626`,
    1214: `627`,
    1215: `628`,
    1216: `628`,
    1217: `629`,
    1218: `630`,
    1219: `631`,
    122: `21`,
    1220: `631`,
    1221: `632`,
    1222: `632`,
    1223: `633`,
    1224: `633`,
    1225: `634`,
    1226: `634`,
    1227: `634`,
    1228: `636`,
    1229: `636`,
    123: `21`,
    1230: `637`,
    1231: `637`,
    1232: `638`,
    1233: `639`,
    1234: `647`,
    1235: `648`,
    1236: `648`,
    1237: `649`,
    1238: `649`,
    1239: `649`,
    124: `21`,
    1240: `649`,
    1241: `649`,
    1242: `649`,
    1243: `649`,
    1244: `649`,
    1245: `649`,
    1246: `649`,
    1247: `650`,
    1248: `650`,
    1249: `651`,
    125: `21`,
    1250: `652`,
    1251: `653`,
    1252: `653`,
    1253: `654`,
    1254: `654`,
    1255: `655`,
    1256: `655`,
    1257: `656`,
    1258: `657`,
    1259: `658`,
    126: `21`,
    1260: `659`,
    1261: `659`,
    1262: `660`,
    1263: `660`,
    1264: `660`,
    1265: `661`,
    1266: `662`,
    1267: `662`,
    1268: `663`,
    1269: `664`,
    127: `21`,
    1270: `665`,
    1271: `665`,
    1272: `666`,
    1273: `667`,
    1274: `668`,
    1275: `668`,
    1276: `669`,
    1277: `670`,
    1278: `671`,
    1279: `671`,
    128: `21`,
    1280: `672`,
    1281: `673`,
    1282: `674`,
    1283: `674`,
    1284: `675`,
    1285: `675`,
    1286: `676`,
    1287: `676`,
    1288: `677`,
    1289: `677`,
    129: `21`,
    1290: `677`,
    1291: `679`,
    1292: `679`,
    1293: `680`,
    1294: `680`,
    1295: `681`,
    1296: `682`,
    1297: `691`,
    1298: `691`,
    1299: `692`,
    13: `2`,
    130: `21`,
    1300: `693`,
    1301: `693`,
    1302: `694`,
    1303: `694`,
    1304: `694`,
    1305: `695`,
    1306: `696`,
    1307: `696`,
    1308: `696`,
    1309: `697`,
    131: `21`,
    1310: `698`,
    1311: `698`,
    1312: `699`,
    1313: `699`,
    1314: `699`,
    1315: `699`,
    1316: `699`,
    1317: `699`,
    1318: `699`,
    1319: `699`,
    132: `21`,
    1320: `699`,
    1321: `699`,
    1322: `700`,
    1323: `700`,
    1324: `701`,
    1325: `702`,
    1326: `703`,
    1327: `703`,
    1328: `704`,
    1329: `704`,
    133: `21`,
    1330: `705`,
    1331: `705`,
    1332: `706`,
    1333: `707`,
    1334: `707`,
    1335: `708`,
    1336: `708`,
    1337: `708`,
    1338: `709`,
    1339: `710`,
    134: `21`,
    1340: `710`,
    1341: `711`,
    1342: `711`,
    1343: `711`,
    1344: `712`,
    1345: `713`,
    1346: `713`,
    1347: `714`,
    1348: `715`,
    1349: `716`,
    135: `21`,
    1350: `716`,
    1351: `717`,
    1352: `718`,
    1353: `719`,
    1354: `719`,
    1355: `720`,
    1356: `721`,
    1357: `722`,
    1358: `722`,
    1359: `723`,
    136: `21`,
    1360: `724`,
    1361: `725`,
    1362: `725`,
    1363: `726`,
    1364: `726`,
    1365: `727`,
    1366: `727`,
    1367: `728`,
    1368: `728`,
    1369: `728`,
    137: `21`,
    1370: `730`,
    1371: `730`,
    1372: `731`,
    1373: `731`,
    1374: `731`,
    1375: `732`,
    1376: `732`,
    1377: `733`,
    1378: `733`,
    1379: `734`,
    138: `21`,
    1380: `734`,
    1381: `735`,
    1382: `736`,
    1383: `737`,
    1384: `737`,
    1385: `738`,
    1386: `738`,
    1387: `739`,
    1388: `740`,
    1389: `740`,
    139: `21`,
    1390: `742`,
    1391: `743`,
    1392: `744`,
    1393: `744`,
    1394: `745`,
    1395: `745`,
    1396: `746`,
    1397: `747`,
    1398: `747`,
    1399: `747`,
    14: `2`,
    140: `21`,
    1400: `748`,
    1401: `749`,
    1402: `750`,
    1403: `751`,
    1404: `752`,
    1405: `760`,
    1406: `761`,
    1407: `761`,
    1408: `762`,
    1409: `762`,
    141: `21`,
    1410: `763`,
    1411: `764`,
    1412: `765`,
    1413: `765`,
    1414: `766`,
    1415: `766`,
    1416: `767`,
    1417: `767`,
    1418: `767`,
    1419: `771`,
    142: `21`,
    1420: `771`,
    1421: `772`,
    1422: `773`,
    1423: `773`,
    1424: `774`,
    1425: `775`,
    1426: `776`,
    1427: `777`,
    1428: `778`,
    1429: `779`,
    143: `21`,
    1430: `780`,
    1431: `781`,
    1432: `781`,
    1433: `782`,
    1434: `783`,
    1435: `783`,
    1436: `783`,
    1437: `784`,
    1438: `784`,
    1439: `784`,
    144: `21`,
    1440: `785`,
    1441: `786`,
    1442: `786`,
    1443: `787`,
    1444: `788`,
    1445: `789`,
    1446: `789`,
    1447: `789`,
    1448: `790`,
    1449: `791`,
    145: `21`,
    1450: `791`,
    1451: `792`,
    1452: `792`,
    1453: `792`,
    1454: `792`,
    1455: `792`,
    1456: `792`,
    1457: `792`,
    1458: `792`,
    1459: `792`,
    146: `21`,
    1460: `792`,
    1461: `793`,
    1462: `793`,
    1463: `794`,
    1464: `795`,
    1465: `795`,
    1466: `795`,
    1467: `796`,
    1468: `797`,
    1469: `798`,
    147: `21`,
    1470: `798`,
    1471: `799`,
    1472: `800`,
    1473: `800`,
    1474: `800`,
    1475: `801`,
    1476: `801`,
    1477: `802`,
    1478: `802`,
    1479: `803`,
    148: `21`,
    1480: `803`,
    1481: `803`,
    1482: `804`,
    1483: `804`,
    1484: `805`,
    1485: `805`,
    1486: `806`,
    1487: `807`,
    1488: `807`,
    1489: `809`,
    149: `21`,
    1490: `809`,
    1491: `810`,
    1492: `811`,
    1493: `811`,
    1494: `812`,
    1495: `812`,
    1496: `812`,
    1497: `813`,
    1498: `814`,
    1499: `814`,
    15: `2`,
    150: `21`,
    1500: `815`,
    1501: `815`,
    1502: `815`,
    1503: `816`,
    1504: `817`,
    1505: `817`,
    1506: `818`,
    1507: `819`,
    1508: `820`,
    1509: `820`,
    151: `22`,
    1510: `821`,
    1511: `822`,
    1512: `823`,
    1513: `823`,
    1514: `824`,
    1515: `825`,
    1516: `826`,
    1517: `826`,
    1518: `827`,
    1519: `828`,
    152: `22`,
    1520: `829`,
    1521: `829`,
    1522: `830`,
    1523: `830`,
    1524: `831`,
    1525: `831`,
    1526: `832`,
    1527: `832`,
    1528: `833`,
    1529: `833`,
    153: `22`,
    1530: `834`,
    1531: `835`,
    1532: `836`,
    1533: `836`,
    1534: `837`,
    1535: `837`,
    1536: `838`,
    1537: `838`,
    1538: `839`,
    1539: `839`,
    154: `23`,
    1540: `840`,
    1541: `840`,
    1542: `841`,
    1543: `841`,
    1544: `841`,
    1545: `843`,
    1546: `843`,
    1547: `844`,
    1548: `845`,
    1549: `846`,
    155: `23`,
    1550: `847`,
    1551: `847`,
    1552: `848`,
    1553: `848`,
    1554: `849`,
    1555: `850`,
    1556: `858`,
    1557: `859`,
    1558: `861`,
    1559: `862`,
    156: `23`,
    1560: `863`,
    1561: `864`,
    1562: `865`,
    1563: `865`,
    1564: `866`,
    1565: `867`,
    1566: `867`,
    1567: `867`,
    1568: `868`,
    1569: `868`,
    157: `23`,
    1570: `868`,
    1571: `869`,
    1572: `870`,
    1573: `870`,
    1574: `871`,
    1575: `872`,
    1576: `880`,
    1577: `881`,
    1578: `881`,
    1579: `882`,
    158: `23`,
    1580: `882`,
    1581: `882`,
    1582: `882`,
    1583: `882`,
    1584: `882`,
    1585: `882`,
    1586: `882`,
    1587: `882`,
    1588: `882`,
    1589: `883`,
    159: `23`,
    1590: `883`,
    1591: `884`,
    1592: `885`,
    1593: `885`,
    1594: `885`,
    1595: `886`,
    1596: `887`,
    1597: `888`,
    1598: `888`,
    1599: `889`,
    16: `2`,
    160: `23`,
    1600: `890`,
    1601: `890`,
    1602: `890`,
    1603: `891`,
    1604: `891`,
    1605: `892`,
    1606: `892`,
    1607: `893`,
    1608: `893`,
    1609: `894`,
    161: `23`,
    1610: `895`,
    1611: `896`,
    1612: `896`,
    1613: `897`,
    1614: `898`,
    1615: `898`,
    1616: `899`,
    1617: `899`,
    1618: `900`,
    1619: `900`,
    162: `23`,
    1620: `901`,
    1621: `902`,
    1622: `905`,
    1623: `906`,
    1624: `907`,
    1625: `908`,
    1626: `908`,
    1627: `909`,
    1628: `910`,
    1629: `910`,
    163: `23`,
    1630: `910`,
    1631: `911`,
    1632: `912`,
    1633: `913`,
    1634: `914`,
    1635: `915`,
    1636: `915`,
    1637: `915`,
    1638: `916`,
    1639: `916`,
    164: `23`,
    1640: `918`,
    1641: `918`,
    1642: `919`,
    1643: `919`,
    1644: `920`,
    1645: `920`,
    1646: `920`,
    1647: `921`,
    1648: `921`,
    1649: `922`,
    165: `23`,
    1650: `923`,
    1651: `923`,
    1652: `924`,
    1653: `925`,
    1654: `925`,
    1655: `925`,
    1656: `926`,
    1657: `926`,
    1658: `927`,
    1659: `927`,
    166: `23`,
    1660: `928`,
    1661: `929`,
    1662: `930`,
    1663: `930`,
    1664: `931`,
    1665: `931`,
    1666: `931`,
    1667: `932`,
    1668: `933`,
    1669: `933`,
    167: `23`,
    1670: `934`,
    1671: `934`,
    1672: `934`,
    1673: `935`,
    1674: `936`,
    1675: `936`,
    1676: `937`,
    1677: `937`,
    1678: `938`,
    1679: `939`,
    168: `23`,
    1680: `940`,
    1681: `941`,
    1682: `941`,
    1683: `942`,
    1684: `943`,
    1685: `944`,
    1686: `944`,
    1687: `945`,
    1688: `946`,
    1689: `947`,
    169: `23`,
    1690: `948`,
    1691: `949`,
    1692: `949`,
    1693: `950`,
    1694: `951`,
    1695: `952`,
    1696: `953`,
    1697: `954`,
    1698: `954`,
    1699: `955`,
    17: `2`,
    170: `23`,
    1700: `955`,
    1701: `956`,
    1702: `956`,
    1703: `957`,
    1704: `957`,
    1705: `958`,
    1706: `958`,
    1707: `959`,
    1708: `960`,
    1709: `961`,
    171: `23`,
    1710: `961`,
    1711: `962`,
    1712: `962`,
    1713: `963`,
    1714: `963`,
    1715: `964`,
    1716: `964`,
    1717: `965`,
    1718: `965`,
    1719: `966`,
    172: `23`,
    1720: `966`,
    1721: `966`,
    1722: `969`,
    1723: `970`,
    1724: `971`,
    1725: `972`,
    1726: `973`,
    1727: `973`,
    1728: `974`,
    1729: `975`,
    173: `23`,
    1730: `975`,
    1731: `975`,
    1732: `976`,
    1733: `976`,
    1734: `977`,
    1735: `978`,
    1736: `979`,
    1737: `979`,
    1738: `980`,
    1739: `980`,
    174: `23`,
    1740: `980`,
    1741: `981`,
    1742: `982`,
    1743: `982`,
    1744: `983`,
    1745: `983`,
    1746: `984`,
    1747: `985`,
    1748: `986`,
    1749: `987`,
    175: `23`,
    1750: `988`,
    1751: `996`,
    1752: `996`,
    1753: `997`,
    1754: `997`,
    1755: `998`,
    1756: `999`,
    1757: `1007`,
    1758: `1007`,
    1759: `1008`,
    176: `23`,
    1760: `1008`,
    1761: `1009`,
    1762: `1009`,
    1763: `1010`,
    1764: `1010`,
    1765: `1011`,
    1766: `1012`,
    1767: `1013`,
    1768: `1013`,
    1769: `1014`,
    177: `23`,
    1770: `1014`,
    1771: `1015`,
    1772: `1015`,
    1773: `1016`,
    1774: `1017`,
    1775: `1017`,
    1776: `1017`,
    1777: `1018`,
    1778: `1018`,
    1779: `1018`,
    178: `23`,
    1780: `1018`,
    1781: `1018`,
    1782: `1018`,
    1783: `1019`,
    1784: `1019`,
    1785: `1020`,
    1786: `1021`,
    1787: `1022`,
    1788: `1024`,
    1789: `1025`,
    179: `23`,
    1790: `1025`,
    1791: `1026`,
    1792: `1026`,
    1793: `1026`,
    1794: `1026`,
    1795: `1026`,
    1796: `1026`,
    1797: `1026`,
    1798: `1026`,
    1799: `1026`,
    18: `2`,
    180: `23`,
    1800: `1026`,
    1801: `1027`,
    1802: `1027`,
    1803: `1028`,
    1804: `1029`,
    1805: `1029`,
    1806: `1029`,
    1807: `1030`,
    1808: `1031`,
    1809: `1032`,
    181: `23`,
    1810: `1032`,
    1811: `1033`,
    1812: `1034`,
    1813: `1034`,
    1814: `1034`,
    1815: `1035`,
    1816: `1035`,
    1817: `1036`,
    1818: `1036`,
    1819: `1037`,
    182: `23`,
    1820: `1038`,
    1821: `1038`,
    1822: `1039`,
    1823: `1039`,
    1824: `1039`,
    1825: `1040`,
    1826: `1041`,
    1827: `1041`,
    1828: `1042`,
    1829: `1042`,
    183: `23`,
    1830: `1042`,
    1831: `1043`,
    1832: `1044`,
    1833: `1044`,
    1834: `1045`,
    1835: `1046`,
    1836: `1047`,
    1837: `1047`,
    1838: `1048`,
    1839: `1049`,
    184: `23`,
    1840: `1050`,
    1841: `1050`,
    1842: `1051`,
    1843: `1052`,
    1844: `1053`,
    1845: `1053`,
    1846: `1054`,
    1847: `1055`,
    1848: `1056`,
    1849: `1057`,
    185: `23`,
    1850: `1058`,
    1851: `1058`,
    1852: `1059`,
    1853: `1059`,
    1854: `1060`,
    1855: `1060`,
    1856: `1061`,
    1857: `1061`,
    1858: `1061`,
    1859: `1064`,
    186: `23`,
    1860: `1064`,
    1861: `1065`,
    1862: `1065`,
    1863: `1066`,
    1864: `1066`,
    1865: `1067`,
    1866: `1068`,
    1867: `1069`,
    1868: `1069`,
    1869: `1069`,
    187: `23`,
    1870: `1070`,
    1871: `1071`,
    1872: `1071`,
    1873: `1072`,
    1874: `1072`,
    1875: `1072`,
    1876: `1072`,
    1877: `1072`,
    1878: `1072`,
    1879: `1072`,
    188: `23`,
    1880: `1072`,
    1881: `1072`,
    1882: `1072`,
    1883: `1073`,
    1884: `1073`,
    1885: `1074`,
    1886: `1075`,
    1887: `1076`,
    1888: `1076`,
    1889: `1077`,
    189: `23`,
    1890: `1077`,
    1891: `1078`,
    1892: `1078`,
    1893: `1079`,
    1894: `1080`,
    1895: `1080`,
    1896: `1081`,
    1897: `1081`,
    1898: `1081`,
    1899: `1082`,
    19: `2`,
    190: `23`,
    1900: `1083`,
    1901: `1083`,
    1902: `1084`,
    1903: `1084`,
    1904: `1084`,
    1905: `1085`,
    1906: `1086`,
    1907: `1086`,
    1908: `1087`,
    1909: `1088`,
    191: `23`,
    1910: `1089`,
    1911: `1089`,
    1912: `1090`,
    1913: `1091`,
    1914: `1092`,
    1915: `1092`,
    1916: `1093`,
    1917: `1094`,
    1918: `1095`,
    1919: `1095`,
    192: `23`,
    1920: `1096`,
    1921: `1097`,
    1922: `1098`,
    1923: `1098`,
    1924: `1099`,
    1925: `1099`,
    1926: `1100`,
    1927: `1100`,
    1928: `1101`,
    1929: `1101`,
    193: `23`,
    1930: `1101`,
    1931: `1103`,
    1932: `1103`,
    1933: `1104`,
    1934: `1104`,
    1935: `1105`,
    1936: `1105`,
    1937: `1106`,
    1938: `1107`,
    1939: `1108`,
    194: `25`,
    1940: `1108`,
    1941: `1109`,
    1942: `1109`,
    1943: `1110`,
    1944: `1110`,
    1945: `1110`,
    1946: `1111`,
    1947: `1111`,
    1948: `1112`,
    1949: `1112`,
    195: `27`,
    1950: `1113`,
    1951: `1113`,
    1952: `1114`,
    1953: `1115`,
    1954: `1115`,
    1955: `1116`,
    1956: `1116`,
    1957: `1116`,
    1958: `1116`,
    1959: `1116`,
    196: `27`,
    1960: `1116`,
    1961: `1117`,
    1962: `1117`,
    1963: `1118`,
    1964: `1119`,
    1965: `1120`,
    1966: `1120`,
    1967: `1121`,
    1968: `1122`,
    1969: `1122`,
    197: `27`,
    1970: `1123`,
    1971: `1124`,
    1972: `1125`,
    1973: `1127`,
    1974: `1127`,
    1975: `1128`,
    1976: `1128`,
    1977: `1128`,
    1978: `1129`,
    1979: `1129`,
    198: `28`,
    1980: `1130`,
    1981: `1131`,
    1982: `1131`,
    1983: `1132`,
    1984: `1132`,
    1985: `1133`,
    1986: `1133`,
    1987: `1133`,
    1988: `1134`,
    1989: `1136`,
    199: `28`,
    1990: `1136`,
    1991: `1137`,
    1992: `1137`,
    1993: `1138`,
    1994: `1138`,
    1995: `1138`,
    1996: `1139`,
    1997: `1139`,
    1998: `1139`,
    1999: `1139`,
    2: `2`,
    20: `2`,
    200: `30`,
    2000: `1139`,
    2001: `1139`,
    2002: `1139`,
    2003: `1139`,
    2004: `1139`,
    2005: `1139`,
    2006: `1139`,
    2007: `1139`,
    2008: `1139`,
    2009: `1139`,
    201: `31`,
    2010: `1139`,
    2011: `1139`,
    2012: `1139`,
    2013: `1139`,
    2014: `1139`,
    2015: `1139`,
    2016: `1139`,
    2017: `1139`,
    2018: `1139`,
    2019: `1139`,
    202: `32`,
    2020: `1139`,
    2021: `1139`,
    2022: `1139`,
    2023: `1139`,
    2024: `1139`,
    2025: `1139`,
    2026: `1139`,
    2027: `1139`,
    2028: `1139`,
    2029: `1139`,
    203: `33`,
    2030: `1139`,
    2031: `1139`,
    2032: `1139`,
    2033: `1139`,
    2034: `1139`,
    2035: `1139`,
    2036: `1139`,
    2037: `1139`,
    2038: `1139`,
    2039: `1139`,
    204: `33`,
    2040: `1139`,
    2041: `1139`,
    2042: `1139`,
    2043: `1139`,
    2044: `1139`,
    2045: `1139`,
    2046: `1139`,
    2047: `1139`,
    2048: `1139`,
    2049: `1139`,
    205: `34`,
    2050: `1139`,
    2051: `1139`,
    2052: `1139`,
    2053: `1139`,
    2054: `1139`,
    2055: `1139`,
    2056: `1140`,
    2057: `1140`,
    2058: `1141`,
    2059: `1141`,
    206: `35`,
    2060: `1142`,
    2061: `1143`,
    2062: `1143`,
    2063: `1143`,
    2064: `1144`,
    2065: `1145`,
    2066: `1146`,
    2067: `1146`,
    2068: `1147`,
    2069: `1147`,
    207: `36`,
    2070: `1148`,
    2071: `1149`,
    2072: `1149`,
    2073: `1150`,
    2074: `1150`,
    2075: `1151`,
    2076: `1151`,
    2077: `1152`,
    2078: `1152`,
    2079: `1153`,
    208: `37`,
    2080: `1153`,
    2081: `1153`,
    2082: `1155`,
    2083: `1155`,
    2084: `1155`,
    2085: `1156`,
    2086: `1156`,
    2087: `1157`,
    2088: `1157`,
    2089: `1157`,
    209: `38`,
    2090: `1158`,
    2091: `1158`,
    2092: `1158`,
    2093: `1159`,
    2094: `1159`,
    2095: `1160`,
    2096: `1160`,
    2097: `1160`,
    2098: `1162`,
    2099: `1162`,
    21: `2`,
    210: `39`,
    2100: `1162`,
    2101: `1163`,
    2102: `1163`,
    2103: `1163`,
    2104: `1164`,
    2105: `1164`,
    2106: `1165`,
    2107: `1165`,
    2108: `1165`,
    2109: `1167`,
    211: `39`,
    2110: `1168`,
    2111: `1168`,
    2112: `1169`,
    2113: `1170`,
    2114: `1171`,
    2115: `1172`,
    2116: `1172`,
    2117: `1173`,
    2118: `1174`,
    2119: `1175`,
    212: `41`,
    2120: `1176`,
    2121: `1176`,
    2122: `1177`,
    2123: `1178`,
    2124: `1179`,
    2125: `1180`,
    2126: `1180`,
    2127: `1181`,
    2128: `1182`,
    2129: `1183`,
    213: `42`,
    2130: `1183`,
    2131: `1183`,
    2132: `1184`,
    2133: `1184`,
    2134: `1184`,
    2135: `1185`,
    2136: `1186`,
    2137: `1187`,
    2138: `1188`,
    2139: `1188`,
    214: `42`,
    2140: `1188`,
    2141: `1190`,
    2142: `1190`,
    2143: `1190`,
    2144: `1192`,
    2145: `1192`,
    2146: `1192`,
    2147: `1194`,
    2148: `1194`,
    2149: `1195`,
    215: `43`,
    2150: `1195`,
    2151: `1195`,
    2152: `1196`,
    2153: `1196`,
    2154: `1197`,
    2155: `1197`,
    2156: `1197`,
    2157: `1199`,
    2158: `1199`,
    2159: `1199`,
    216: `44`,
    2160: `1201`,
    2161: `1201`,
    2162: `1201`,
    2163: `1203`,
    2164: `1203`,
    2165: `1203`,
    2166: `1205`,
    2167: `1205`,
    2168: `1206`,
    2169: `1206`,
    217: `45`,
    2170: `1207`,
    2171: `1207`,
    2172: `1207`,
    2173: `1209`,
    2174: `1209`,
    2175: `1210`,
    2176: `1211`,
    2177: `1211`,
    2178: `1212`,
    2179: `1213`,
    218: `45`,
    2180: `1214`,
    2181: `1214`,
    2182: `1214`,
    2183: `1215`,
    2184: `1215`,
    2185: `1217`,
    2186: `1217`,
    2187: `1218`,
    2188: `1218`,
    2189: `1219`,
    219: `45`,
    2190: `1219`,
    2191: `1219`,
    2192: `1220`,
    2193: `1220`,
    2194: `1221`,
    2195: `1222`,
    2196: `1222`,
    2197: `1223`,
    2198: `1224`,
    2199: `1224`,
    22: `2`,
    220: `46`,
    2200: `1224`,
    2201: `1225`,
    2202: `1225`,
    2203: `1226`,
    2204: `1226`,
    2205: `1227`,
    2206: `1228`,
    2207: `1229`,
    2208: `1229`,
    2209: `1230`,
    221: `46`,
    2210: `1230`,
    2211: `1230`,
    2212: `1231`,
    2213: `1232`,
    2214: `1232`,
    2215: `1233`,
    2216: `1233`,
    2217: `1233`,
    2218: `1234`,
    2219: `1235`,
    222: `47`,
    2220: `1235`,
    2221: `1236`,
    2222: `1236`,
    2223: `1237`,
    2224: `1238`,
    2225: `1239`,
    2226: `1240`,
    2227: `1240`,
    2228: `1241`,
    2229: `1242`,
    223: `48`,
    2230: `1243`,
    2231: `1243`,
    2232: `1244`,
    2233: `1245`,
    2234: `1246`,
    2235: `1247`,
    2236: `1248`,
    2237: `1248`,
    2238: `1249`,
    2239: `1250`,
    224: `49`,
    2240: `1251`,
    2241: `1251`,
    2242: `1252`,
    2243: `1252`,
    2244: `1253`,
    2245: `1253`,
    2246: `1254`,
    2247: `1254`,
    2248: `1255`,
    2249: `1255`,
    225: `49`,
    2250: `1256`,
    2251: `1257`,
    2252: `1258`,
    2253: `1258`,
    2254: `1259`,
    2255: `1259`,
    2256: `1260`,
    2257: `1260`,
    2258: `1261`,
    2259: `1261`,
    226: `50`,
    2260: `1262`,
    2261: `1262`,
    2262: `1263`,
    2263: `1263`,
    2264: `1263`,
    2265: `1266`,
    2266: `1267`,
    2267: `1268`,
    2268: `1269`,
    2269: `1269`,
    227: `50`,
    2270: `1270`,
    2271: `1271`,
    2272: `1271`,
    2273: `1271`,
    2274: `1272`,
    2275: `1273`,
    2276: `1274`,
    2277: `1275`,
    2278: `1276`,
    2279: `1276`,
    228: `51`,
    2280: `1276`,
    2281: `1277`,
    2282: `1278`,
    2283: `1278`,
    2284: `1279`,
    2285: `1279`,
    2286: `1279`,
    2287: `1279`,
    2288: `1279`,
    2289: `1279`,
    229: `51`,
    2290: `1279`,
    2291: `1279`,
    2292: `1279`,
    2293: `1279`,
    2294: `1280`,
    2295: `1280`,
    2296: `1281`,
    2297: `1282`,
    2298: `1282`,
    2299: `1282`,
    23: `2`,
    230: `51`,
    2300: `1283`,
    2301: `1284`,
    2302: `1285`,
    2303: `1285`,
    2304: `1286`,
    2305: `1287`,
    2306: `1287`,
    2307: `1287`,
    2308: `1288`,
    2309: `1288`,
    231: `52`,
    2310: `1289`,
    2311: `1289`,
    2312: `1291`,
    2313: `1291`,
    2314: `1292`,
    2315: `1292`,
    2316: `1293`,
    2317: `1293`,
    2318: `1293`,
    2319: `1294`,
    232: `52`,
    2320: `1294`,
    2321: `1295`,
    2322: `1296`,
    2323: `1296`,
    2324: `1297`,
    2325: `1298`,
    2326: `1298`,
    2327: `1298`,
    2328: `1299`,
    2329: `1299`,
    233: `53`,
    2330: `1300`,
    2331: `1300`,
    2332: `1301`,
    2333: `1302`,
    2334: `1303`,
    2335: `1303`,
    2336: `1304`,
    2337: `1304`,
    2338: `1304`,
    2339: `1305`,
    234: `53`,
    2340: `1306`,
    2341: `1306`,
    2342: `1307`,
    2343: `1307`,
    2344: `1307`,
    2345: `1308`,
    2346: `1309`,
    2347: `1309`,
    2348: `1310`,
    2349: `1310`,
    235: `53`,
    2350: `1311`,
    2351: `1312`,
    2352: `1313`,
    2353: `1314`,
    2354: `1314`,
    2355: `1315`,
    2356: `1316`,
    2357: `1317`,
    2358: `1317`,
    2359: `1318`,
    236: `53`,
    2360: `1319`,
    2361: `1320`,
    2362: `1321`,
    2363: `1322`,
    2364: `1322`,
    2365: `1323`,
    2366: `1324`,
    2367: `1325`,
    2368: `1325`,
    2369: `1326`,
    237: `53`,
    2370: `1326`,
    2371: `1327`,
    2372: `1327`,
    2373: `1328`,
    2374: `1328`,
    2375: `1329`,
    2376: `1329`,
    2377: `1330`,
    2378: `1331`,
    2379: `1332`,
    238: `53`,
    2380: `1332`,
    2381: `1333`,
    2382: `1333`,
    2383: `1334`,
    2384: `1334`,
    2385: `1335`,
    2386: `1335`,
    2387: `1336`,
    2388: `1336`,
    2389: `1337`,
    239: `54`,
    2390: `1337`,
    2391: `1337`,
    2392: `1339`,
    2393: `1340`,
    2394: `1340`,
    2395: `1341`,
    2396: `1341`,
    2397: `1341`,
    2398: `1341`,
    2399: `1341`,
    24: `2`,
    240: `54`,
    2400: `1341`,
    2401: `1341`,
    2402: `1341`,
    2403: `1341`,
    2404: `1341`,
    2405: `1342`,
    2406: `1342`,
    2407: `1343`,
    2408: `1344`,
    2409: `1344`,
    241: `55`,
    2410: `1344`,
    2411: `1345`,
    2412: `1346`,
    2413: `1347`,
    2414: `1347`,
    2415: `1348`,
    2416: `1349`,
    2417: `1349`,
    2418: `1349`,
    2419: `1350`,
    242: `56`,
    2420: `1350`,
    2421: `1351`,
    2422: `1351`,
    2423: `1352`,
    2424: `1352`,
    2425: `1353`,
    2426: `1354`,
    2427: `1355`,
    2428: `1355`,
    2429: `1356`,
    243: `57`,
    2430: `1357`,
    2431: `1357`,
    2432: `1358`,
    2433: `1358`,
    2434: `1359`,
    2435: `1359`,
    2436: `1360`,
    2437: `1361`,
    2438: `1363`,
    2439: `1363`,
    244: `57`,
    2440: `1364`,
    2441: `1365`,
    2442: `1365`,
    2443: `1366`,
    2444: `1367`,
    2445: `1368`,
    2446: `1368`,
    2447: `1368`,
    2448: `1369`,
    2449: `1369`,
    245: `58`,
    2450: `1371`,
    2451: `1371`,
    2452: `1372`,
    2453: `1372`,
    2454: `1373`,
    2455: `1373`,
    2456: `1373`,
    2457: `1374`,
    2458: `1374`,
    2459: `1375`,
    246: `59`,
    2460: `1376`,
    2461: `1376`,
    2462: `1377`,
    2463: `1378`,
    2464: `1378`,
    2465: `1378`,
    2466: `1379`,
    2467: `1379`,
    2468: `1380`,
    2469: `1380`,
    247: `61`,
    2470: `1381`,
    2471: `1382`,
    2472: `1383`,
    2473: `1383`,
    2474: `1384`,
    2475: `1384`,
    2476: `1384`,
    2477: `1385`,
    2478: `1386`,
    2479: `1386`,
    248: `61`,
    2480: `1387`,
    2481: `1387`,
    2482: `1387`,
    2483: `1388`,
    2484: `1389`,
    2485: `1389`,
    2486: `1390`,
    2487: `1390`,
    2488: `1391`,
    2489: `1392`,
    249: `62`,
    2490: `1393`,
    2491: `1394`,
    2492: `1394`,
    2493: `1395`,
    2494: `1396`,
    2495: `1397`,
    2496: `1397`,
    2497: `1398`,
    2498: `1399`,
    2499: `1400`,
    25: `2`,
    250: `62`,
    2500: `1401`,
    2501: `1402`,
    2502: `1402`,
    2503: `1403`,
    2504: `1404`,
    2505: `1405`,
    2506: `1406`,
    2507: `1407`,
    2508: `1407`,
    2509: `1408`,
    251: `62`,
    2510: `1408`,
    2511: `1409`,
    2512: `1409`,
    2513: `1410`,
    2514: `1410`,
    2515: `1411`,
    2516: `1411`,
    2517: `1412`,
    2518: `1413`,
    2519: `1414`,
    252: `63`,
    2520: `1414`,
    2521: `1415`,
    2522: `1415`,
    2523: `1416`,
    2524: `1416`,
    2525: `1417`,
    2526: `1417`,
    2527: `1418`,
    2528: `1418`,
    2529: `1419`,
    253: `63`,
    2530: `1419`,
    2531: `1419`,
    2532: `1421`,
    2533: `1421`,
    2534: `1423`,
    2535: `1423`,
    2536: `1424`,
    2537: `1424`,
    2538: `1424`,
    2539: `1425`,
    254: `64`,
    2540: `1425`,
    2541: `1426`,
    2542: `1426`,
    2543: `1426`,
    2544: `1427`,
    2545: `1428`,
    2546: `1430`,
    2547: `1430`,
    2548: `1431`,
    2549: `1431`,
    255: `65`,
    2550: `1432`,
    2551: `1432`,
    2552: `1432`,
    2553: `1434`,
    2554: `1435`,
    2555: `1435`,
    2556: `1436`,
    2557: `1436`,
    2558: `1437`,
    2559: `1437`,
    256: `66`,
    2560: `1438`,
    2561: `1438`,
    2562: `1438`,
    2563: `1440`,
    2564: `1440`,
    2565: `1441`,
    2566: `1441`,
    2567: `1442`,
    2568: `1443`,
    2569: `1445`,
    257: `66`,
    2570: `1445`,
    2571: `1445`,
    2572: `1447`,
    2573: `1447`,
    2574: `1448`,
    2575: `1449`,
    2576: `1449`,
    2577: `1450`,
    2578: `1451`,
    2579: `1453`,
    258: `66`,
    2580: `1454`,
    2581: `1454`,
    2582: `1455`,
    2583: `1455`,
    2584: `1456`,
    2585: `1456`,
    2586: `1456`,
    2587: `1457`,
    2588: `1457`,
    2589: `1457`,
    259: `66`,
    2590: `1459`,
    2591: `1460`,
    2592: `1461`,
    2593: `1462`,
    2594: `1463`,
    2595: `1465`,
    2596: `1466`,
    2597: `1466`,
    2598: `1467`,
    2599: `1468`,
    26: `2`,
    260: `66`,
    2600: `1468`,
    2601: `1469`,
    2602: `1469`,
    2603: `1470`,
    2604: `1470`,
    2605: `1471`,
    2606: `1472`,
    2607: `1474`,
    2608: `1475`,
    2609: `1475`,
    261: `66`,
    2610: `1476`,
    2611: `1476`,
    2612: `1477`,
    2613: `1477`,
    2614: `1478`,
    2615: `1478`,
    2616: `1479`,
    2617: `1479`,
    2618: `1480`,
    2619: `1480`,
    262: `66`,
    2620: `1481`,
    2621: `1482`,
    2622: `1484`,
    2623: `1484`,
    2624: `1484`,
    2625: `1486`,
    2626: `1486`,
    2627: `1486`,
    2628: `1488`,
    2629: `1488`,
    263: `66`,
    2630: `1489`,
    2631: `1489`,
    2632: `1489`,
    2633: `1490`,
    2634: `1490`,
    2635: `1491`,
    2636: `1491`,
    2637: `1491`,
    2638: `1493`,
    2639: `1494`,
    264: `66`,
    2640: `1496`,
    2641: `1497`,
    2642: `1498`,
    2643: `1499`,
    2644: `1499`,
    2645: `1500`,
    2646: `1500`,
    2647: `1501`,
    2648: `1501`,
    2649: `1501`,
    265: `66`,
    2650: `1502`,
    2651: `1504`,
    2652: `1505`,
    2653: `1506`,
    2654: `1506`,
    2655: `1506`,
    2656: `1507`,
    2657: `1508`,
    2658: `1508`,
    2659: `1511`,
    266: `66`,
    2660: `1511`,
    2661: `1512`,
    2662: `1512`,
    2663: `1513`,
    2664: `1514`,
    2665: `1515`,
    2666: `1516`,
    2667: `1516`,
    2668: `1517`,
    2669: `1518`,
    267: `66`,
    2670: `1518`,
    2671: `1519`,
    2672: `1519`,
    2673: `1520`,
    2674: `1520`,
    2675: `1521`,
    2676: `1522`,
    2677: `1523`,
    2678: `1523`,
    2679: `1524`,
    268: `66`,
    2680: `1525`,
    2681: `1526`,
    2682: `1527`,
    2683: `1527`,
    2684: `1528`,
    2685: `1529`,
    2686: `1530`,
    2687: `1532`,
    2688: `1533`,
    2689: `1534`,
    269: `66`,
    2690: `1535`,
    2691: `1535`,
    2692: `1535`,
    2693: `1536`,
    2694: `1536`,
    2695: `1537`,
    2696: `1538`,
    2697: `1539`,
    2698: `1541`,
    2699: `1542`,
    27: `2`,
    270: `66`,
    2700: `1542`,
    2701: `1542`,
    2702: `1543`,
    2703: `1543`,
    2704: `1544`,
    2705: `1545`,
    2706: `1545`,
    2707: `1545`,
    2708: `1546`,
    2709: `1546`,
    271: `66`,
    2710: `1547`,
    2711: `1548`,
    2712: `1548`,
    2713: `1549`,
    2714: `1550`,
    2715: `1550`,
    2716: `1551`,
    2717: `1552`,
    2718: `1552`,
    2719: `1552`,
    272: `66`,
    2720: `1553`,
    2721: `1553`,
    2722: `1554`,
    2723: `1555`,
    2724: `1555`,
    2725: `1555`,
    2726: `1556`,
    2727: `1556`,
    2728: `1557`,
    2729: `1558`,
    273: `66`,
    2730: `1558`,
    2731: `1558`,
    2732: `1559`,
    2733: `1560`,
    2734: `1560`,
    2735: `1561`,
    2736: `1562`,
    2737: `1562`,
    2738: `1562`,
    2739: `1563`,
    274: `66`,
    2740: `1564`,
    2741: `1564`,
    2742: `1565`,
    2743: `1566`,
    2744: `1566`,
    2745: `1566`,
    2746: `1567`,
    2747: `1568`,
    2748: `1568`,
    2749: `1569`,
    275: `66`,
    2750: `1570`,
    2751: `1570`,
    2752: `1570`,
    2753: `1571`,
    2754: `1572`,
    2755: `1572`,
    2756: `1573`,
    2757: `1574`,
    2758: `1574`,
    2759: `1574`,
    276: `67`,
    2760: `1575`,
    2761: `1576`,
    2762: `1576`,
    2763: `1577`,
    2764: `1578`,
    2765: `1578`,
    2766: `1578`,
    2767: `1579`,
    2768: `1580`,
    2769: `1580`,
    277: `67`,
    2770: `1581`,
    2771: `1582`,
    2772: `1582`,
    2773: `1582`,
    2774: `1583`,
    2775: `1583`,
    2776: `1584`,
    2777: `1584`,
    2778: `1584`,
    2779: `1585`,
    278: `67`,
    2780: `1586`,
    2781: `1586`,
    2782: `1587`,
    2783: `1589`,
    2784: `1590`,
    2785: `1590`,
    2786: `1590`,
    2787: `1592`,
    2788: `1593`,
    2789: `1594`,
    279: `69`,
    2790: `1595`,
    2791: `1595`,
    2792: `1595`,
    2793: `1596`,
    2794: `1596`,
    2795: `1597`,
    2796: `1597`,
    2797: `1597`,
    2798: `1598`,
    2799: `1598`,
    28: `2`,
    280: `69`,
    2800: `1598`,
    2801: `1600`,
    2802: `1601`,
    2803: `1602`,
    2804: `1602`,
    2805: `1603`,
    2806: `1605`,
    2807: `1605`,
    2808: `1606`,
    2809: `1607`,
    281: `69`,
    2810: `1607`,
    2811: `1608`,
    2812: `1610`,
    2813: `1611`,
    2814: `1611`,
    2815: `1611`,
    2816: `1612`,
    2817: `1613`,
    2818: `1614`,
    2819: `1615`,
    282: `70`,
    2820: `1616`,
    2821: `1618`,
    2822: `1619`,
    2823: `1619`,
    2824: `1619`,
    2825: `1621`,
    2826: `1621`,
    2827: `1622`,
    2828: `1623`,
    2829: `1623`,
    283: `71`,
    2830: `1624`,
    2831: `1626`,
    2832: `1627`,
    2833: `1627`,
    2834: `1628`,
    2835: `1630`,
    2836: `1631`,
    2837: `1632`,
    2838: `1633`,
    2839: `1634`,
    284: `71`,
    2840: `1634`,
    2841: `1635`,
    2842: `1636`,
    2843: `1637`,
    2844: `1638`,
    2845: `1640`,
    2846: `1640`,
    2847: `1641`,
    2848: `1641`,
    2849: `1642`,
    285: `73`,
    2850: `1643`,
    2851: `1644`,
    2852: `1644`,
    2853: `1644`,
    2854: `1645`,
    2855: `1645`,
    2856: `1645`,
    2857: `1648`,
    2858: `1648`,
    2859: `1649`,
    286: `74`,
    2860: `1649`,
    2861: `1650`,
    2862: `1651`,
    2863: `1652`,
    2864: `1653`,
    2865: `1653`,
    2866: `1654`,
    2867: `1655`,
    2868: `1655`,
    2869: `1656`,
    287: `75`,
    2870: `1656`,
    2871: `1657`,
    2872: `1657`,
    2873: `1658`,
    2874: `1659`,
    2875: `1660`,
    2876: `1660`,
    2877: `1661`,
    2878: `1661`,
    2879: `1662`,
    288: `76`,
    2880: `1663`,
    2881: `1664`,
    2882: `1664`,
    2883: `1665`,
    2884: `1665`,
    2885: `1666`,
    2886: `1667`,
    2887: `1668`,
    2888: `1668`,
    2889: `1669`,
    289: `76`,
    2890: `1670`,
    2891: `1671`,
    2892: `1673`,
    2893: `1674`,
    2894: `1674`,
    2895: `1675`,
    29: `2`,
    290: `77`,
    291: `78`,
    292: `79`,
    293: `79`,
    294: `80`,
    295: `81`,
    296: `82`,
    297: `82`,
    298: `83`,
    299: `83`,
    3: `2`,
    30: `2`,
    300: `83`,
    301: `85`,
    302: `85`,
    303: `85`,
    304: `86`,
    305: `86`,
    306: `86`,
    307: `87`,
    308: `88`,
    309: `88`,
    31: `2`,
    310: `89`,
    311: `89`,
    312: `91`,
    313: `92`,
    314: `93`,
    315: `94`,
    316: `94`,
    317: `95`,
    318: `95`,
    319: `96`,
    32: `2`,
    320: `97`,
    321: `98`,
    322: `99`,
    323: `100`,
    324: `100`,
    325: `101`,
    326: `101`,
    327: `101`,
    328: `104`,
    329: `104`,
    33: `4`,
    330: `104`,
    331: `104`,
    332: `104`,
    333: `104`,
    334: `104`,
    335: `104`,
    336: `104`,
    337: `104`,
    338: `104`,
    339: `104`,
    34: `4`,
    340: `104`,
    341: `104`,
    342: `104`,
    343: `104`,
    344: `104`,
    345: `104`,
    346: `104`,
    347: `104`,
    348: `104`,
    349: `104`,
    35: `5`,
    350: `104`,
    351: `104`,
    352: `104`,
    353: `104`,
    354: `104`,
    355: `104`,
    356: `104`,
    357: `104`,
    358: `104`,
    359: `104`,
    36: `5`,
    360: `104`,
    361: `104`,
    362: `104`,
    363: `104`,
    364: `104`,
    365: `104`,
    366: `104`,
    367: `104`,
    368: `104`,
    369: `104`,
    37: `5`,
    370: `104`,
    371: `104`,
    372: `104`,
    373: `104`,
    374: `104`,
    375: `104`,
    376: `104`,
    377: `104`,
    378: `104`,
    379: `105`,
    38: `6`,
    380: `105`,
    381: `106`,
    382: `106`,
    383: `106`,
    384: `108`,
    385: `108`,
    386: `108`,
    387: `109`,
    388: `109`,
    389: `111`,
    39: `7`,
    390: `112`,
    391: `113`,
    392: `113`,
    393: `113`,
    394: `114`,
    395: `114`,
    396: `115`,
    397: `116`,
    398: `117`,
    399: `118`,
    4: `2`,
    40: `8`,
    400: `119`,
    401: `120`,
    402: `120`,
    403: `121`,
    404: `121`,
    405: `121`,
    406: `123`,
    407: `123`,
    408: `123`,
    409: `124`,
    41: `9`,
    410: `124`,
    411: `124`,
    412: `125`,
    413: `126`,
    414: `126`,
    415: `127`,
    416: `127`,
    417: `129`,
    418: `130`,
    419: `131`,
    42: `10`,
    420: `131`,
    421: `131`,
    422: `132`,
    423: `132`,
    424: `133`,
    425: `133`,
    426: `134`,
    427: `135`,
    428: `136`,
    429: `137`,
    43: `11`,
    430: `138`,
    431: `138`,
    432: `139`,
    433: `139`,
    434: `139`,
    435: `141`,
    436: `141`,
    437: `141`,
    438: `142`,
    439: `142`,
    44: `11`,
    440: `144`,
    441: `144`,
    442: `145`,
    443: `146`,
    444: `147`,
    445: `150`,
    446: `150`,
    447: `150`,
    448: `152`,
    449: `153`,
    45: `12`,
    450: `154`,
    451: `155`,
    452: `155`,
    453: `156`,
    454: `157`,
    455: `157`,
    456: `157`,
    457: `158`,
    458: `159`,
    459: `160`,
    46: `13`,
    460: `161`,
    461: `162`,
    462: `163`,
    463: `163`,
    464: `163`,
    465: `164`,
    466: `164`,
    467: `166`,
    468: `166`,
    469: `167`,
    47: `14`,
    470: `168`,
    471: `169`,
    472: `172`,
    473: `172`,
    474: `172`,
    475: `172`,
    476: `172`,
    477: `172`,
    478: `173`,
    479: `173`,
    48: `14`,
    480: `174`,
    481: `175`,
    482: `177`,
    483: `178`,
    484: `181`,
    485: `181`,
    486: `182`,
    487: `183`,
    488: `184`,
    489: `187`,
    49: `15`,
    490: `187`,
    491: `187`,
    492: `188`,
    493: `188`,
    494: `189`,
    495: `190`,
    496: `190`,
    497: `191`,
    498: `191`,
    499: `191`,
    5: `2`,
    50: `16`,
    500: `193`,
    501: `193`,
    502: `193`,
    503: `194`,
    504: `194`,
    505: `196`,
    506: `196`,
    507: `197`,
    508: `198`,
    509: `199`,
    51: `17`,
    510: `202`,
    511: `202`,
    512: `202`,
    513: `204`,
    514: `205`,
    515: `206`,
    516: `206`,
    517: `207`,
    518: `207`,
    519: `208`,
    52: `18`,
    520: `209`,
    521: `209`,
    522: `209`,
    523: `210`,
    524: `211`,
    525: `212`,
    526: `213`,
    527: `214`,
    528: `215`,
    529: `215`,
    53: `19`,
    530: `215`,
    531: `216`,
    532: `216`,
    533: `217`,
    534: `217`,
    535: `217`,
    536: `219`,
    537: `219`,
    538: `219`,
    539: `220`,
    54: `21`,
    540: `220`,
    541: `222`,
    542: `222`,
    543: `223`,
    544: `224`,
    545: `225`,
    546: `228`,
    547: `228`,
    548: `228`,
    549: `229`,
    55: `21`,
    550: `230`,
    551: `232`,
    552: `233`,
    553: `234`,
    554: `235`,
    555: `236`,
    556: `236`,
    557: `237`,
    558: `238`,
    559: `238`,
    56: `21`,
    560: `238`,
    561: `239`,
    562: `239`,
    563: `239`,
    564: `240`,
    565: `240`,
    566: `241`,
    567: `241`,
    568: `241`,
    569: `244`,
    57: `21`,
    570: `244`,
    571: `245`,
    572: `246`,
    573: `247`,
    574: `250`,
    575: `250`,
    576: `250`,
    577: `251`,
    578: `251`,
    579: `252`,
    58: `21`,
    580: `253`,
    581: `253`,
    582: `254`,
    583: `254`,
    584: `254`,
    585: `257`,
    586: `257`,
    587: `258`,
    588: `259`,
    589: `260`,
    59: `21`,
    590: `263`,
    591: `263`,
    592: `263`,
    593: `264`,
    594: `264`,
    595: `265`,
    596: `266`,
    597: `266`,
    598: `267`,
    599: `267`,
    6: `2`,
    60: `21`,
    600: `267`,
    601: `270`,
    602: `270`,
    603: `271`,
    604: `272`,
    605: `273`,
    606: `276`,
    607: `276`,
    608: `276`,
    609: `277`,
    61: `21`,
    610: `277`,
    611: `278`,
    612: `279`,
    613: `279`,
    614: `280`,
    615: `280`,
    616: `280`,
    617: `283`,
    618: `283`,
    619: `284`,
    62: `21`,
    620: `285`,
    621: `286`,
    622: `289`,
    623: `289`,
    624: `289`,
    625: `290`,
    626: `290`,
    627: `291`,
    628: `292`,
    629: `292`,
    63: `21`,
    630: `293`,
    631: `293`,
    632: `293`,
    633: `296`,
    634: `296`,
    635: `296`,
    636: `296`,
    637: `296`,
    638: `296`,
    639: `296`,
    64: `21`,
    640: `296`,
    641: `296`,
    642: `296`,
    643: `296`,
    644: `296`,
    645: `296`,
    646: `296`,
    647: `296`,
    648: `296`,
    649: `296`,
    65: `21`,
    650: `296`,
    651: `296`,
    652: `296`,
    653: `296`,
    654: `296`,
    655: `296`,
    656: `296`,
    657: `296`,
    658: `296`,
    659: `296`,
    66: `21`,
    660: `296`,
    661: `296`,
    662: `296`,
    663: `296`,
    664: `296`,
    665: `296`,
    666: `296`,
    667: `296`,
    668: `296`,
    669: `296`,
    67: `21`,
    670: `296`,
    671: `296`,
    672: `296`,
    673: `296`,
    674: `296`,
    675: `296`,
    676: `296`,
    677: `296`,
    678: `296`,
    679: `296`,
    68: `21`,
    680: `296`,
    681: `296`,
    682: `296`,
    683: `296`,
    684: `297`,
    685: `297`,
    686: `298`,
    687: `298`,
    688: `298`,
    689: `300`,
    69: `21`,
    690: `300`,
    691: `300`,
    692: `301`,
    693: `302`,
    694: `302`,
    695: `304`,
    696: `305`,
    697: `306`,
    698: `306`,
    699: `306`,
    7: `2`,
    70: `21`,
    700: `307`,
    701: `307`,
    702: `308`,
    703: `309`,
    704: `310`,
    705: `310`,
    706: `311`,
    707: `312`,
    708: `313`,
    709: `313`,
    71: `21`,
    710: `314`,
    711: `314`,
    712: `314`,
    713: `317`,
    714: `317`,
    715: `317`,
    716: `317`,
    717: `317`,
    718: `317`,
    719: `317`,
    72: `21`,
    720: `317`,
    721: `317`,
    722: `317`,
    723: `317`,
    724: `317`,
    725: `317`,
    726: `317`,
    727: `317`,
    728: `317`,
    729: `317`,
    73: `21`,
    730: `317`,
    731: `317`,
    732: `317`,
    733: `317`,
    734: `317`,
    735: `317`,
    736: `317`,
    737: `317`,
    738: `317`,
    739: `317`,
    74: `21`,
    740: `317`,
    741: `317`,
    742: `317`,
    743: `317`,
    744: `317`,
    745: `317`,
    746: `317`,
    747: `317`,
    748: `317`,
    749: `317`,
    75: `21`,
    750: `317`,
    751: `317`,
    752: `317`,
    753: `317`,
    754: `317`,
    755: `317`,
    756: `317`,
    757: `317`,
    758: `317`,
    759: `317`,
    76: `21`,
    760: `317`,
    761: `317`,
    762: `317`,
    763: `317`,
    764: `318`,
    765: `318`,
    766: `319`,
    767: `319`,
    768: `319`,
    769: `321`,
    77: `21`,
    770: `321`,
    771: `322`,
    772: `322`,
    773: `323`,
    774: `325`,
    775: `326`,
    776: `327`,
    777: `328`,
    778: `328`,
    779: `329`,
    78: `21`,
    780: `330`,
    781: `330`,
    782: `330`,
    783: `331`,
    784: `332`,
    785: `333`,
    786: `334`,
    787: `335`,
    788: `336`,
    789: `345`,
    79: `21`,
    790: `345`,
    791: `346`,
    792: `347`,
    793: `347`,
    794: `348`,
    795: `348`,
    796: `348`,
    797: `349`,
    798: `350`,
    799: `351`,
    8: `2`,
    80: `21`,
    800: `351`,
    801: `351`,
    802: `352`,
    803: `353`,
    804: `353`,
    805: `354`,
    806: `354`,
    807: `354`,
    808: `354`,
    809: `354`,
    81: `21`,
    810: `354`,
    811: `354`,
    812: `354`,
    813: `354`,
    814: `354`,
    815: `355`,
    816: `355`,
    817: `356`,
    818: `357`,
    819: `358`,
    82: `21`,
    820: `358`,
    821: `359`,
    822: `359`,
    823: `360`,
    824: `360`,
    825: `361`,
    826: `362`,
    827: `362`,
    828: `363`,
    829: `363`,
    83: `21`,
    830: `363`,
    831: `364`,
    832: `365`,
    833: `365`,
    834: `366`,
    835: `366`,
    836: `366`,
    837: `367`,
    838: `368`,
    839: `368`,
    84: `21`,
    840: `369`,
    841: `370`,
    842: `371`,
    843: `371`,
    844: `372`,
    845: `373`,
    846: `374`,
    847: `374`,
    848: `375`,
    849: `376`,
    85: `21`,
    850: `377`,
    851: `377`,
    852: `378`,
    853: `379`,
    854: `380`,
    855: `380`,
    856: `381`,
    857: `381`,
    858: `382`,
    859: `382`,
    86: `21`,
    860: `384`,
    861: `384`,
    862: `385`,
    863: `385`,
    864: `385`,
    865: `386`,
    866: `387`,
    867: `387`,
    868: `387`,
    869: `388`,
    87: `21`,
    870: `388`,
    871: `389`,
    872: `389`,
    873: `390`,
    874: `391`,
    875: `391`,
    876: `392`,
    877: `392`,
    878: `393`,
    879: `393`,
    88: `21`,
    880: `394`,
    881: `395`,
    882: `395`,
    883: `396`,
    884: `396`,
    885: `397`,
    886: `397`,
    887: `398`,
    888: `399`,
    889: `399`,
    89: `21`,
    890: `400`,
    891: `400`,
    892: `401`,
    893: `402`,
    894: `403`,
    895: `403`,
    896: `404`,
    897: `404`,
    898: `405`,
    899: `405`,
    9: `2`,
    90: `21`,
    900: `406`,
    901: `407`,
    902: `407`,
    903: `408`,
    904: `408`,
    905: `409`,
    906: `409`,
    907: `409`,
    908: `410`,
    909: `411`,
    91: `21`,
    910: `411`,
    911: `412`,
    912: `413`,
    913: `414`,
    914: `414`,
    915: `416`,
    916: `416`,
    917: `417`,
    918: `417`,
    919: `418`,
    92: `21`,
    920: `419`,
    921: `419`,
    922: `420`,
    923: `421`,
    924: `422`,
    925: `422`,
    926: `423`,
    927: `424`,
    928: `424`,
    929: `425`,
    93: `21`,
    930: `426`,
    931: `426`,
    932: `427`,
    933: `428`,
    934: `429`,
    935: `429`,
    936: `430`,
    937: `431`,
    938: `432`,
    939: `432`,
    94: `21`,
    940: `433`,
    941: `434`,
    942: `435`,
    943: `435`,
    944: `436`,
    945: `437`,
    946: `438`,
    947: `438`,
    948: `439`,
    949: `440`,
    95: `21`,
    950: `441`,
    951: `441`,
    952: `442`,
    953: `443`,
    954: `444`,
    955: `444`,
    956: `445`,
    957: `446`,
    958: `446`,
    959: `447`,
    96: `21`,
    960: `448`,
    961: `449`,
    962: `450`,
    963: `450`,
    964: `452`,
    965: `452`,
    966: `453`,
    967: `453`,
    968: `454`,
    969: `455`,
    97: `21`,
    970: `455`,
    971: `456`,
    972: `456`,
    973: `456`,
    974: `457`,
    975: `458`,
    976: `459`,
    977: `460`,
    978: `460`,
    979: `460`,
    98: `21`,
    980: `461`,
    981: `462`,
    982: `463`,
    983: `463`,
    984: `464`,
    985: `465`,
    986: `465`,
    987: `466`,
    988: `467`,
    989: `468`,
    99: `21`,
    990: `469`,
    991: `469`,
    992: `470`,
    993: `471`,
    994: `472`,
    995: `474`,
    996: `474`,
    997: `474`,
    998: `476`,
    999: `476`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 218,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"internalType":"struct T14","name":"v12284","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes30","name":"elem1","type":"bytes30"},{"internalType":"address payable","name":"elem2","type":"address"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_addAdmin0_130","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Admin_deposit0_130","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_editUserReward0_130","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_130","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_revokeAdmin0_130","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_setReward0_130","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_User_claim0_130","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_130","type":"bool"},{"internalType":"bool","name":"_User_optin0_130","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2870","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3422","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3981","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4528","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5076","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5635","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6239","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6842","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6862","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6892","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7448","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes30","name":"projectName","type":"bytes30"}],"indexed":false,"internalType":"struct T16","name":"v0","type":"tuple"}],"name":"claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"insufficient","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v12235","type":"address"}],"name":"Admin_addAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12241","type":"uint256"}],"name":"Admin_deposit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12248","type":"address"},{"internalType":"uint256","name":"v12249","type":"uint256"}],"name":"Admin_editUserReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Admin_endContractAndTransfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12259","type":"address"}],"name":"Admin_revokeAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12266","type":"address"},{"internalType":"uint256","name":"v12267","type":"uint256"}],"name":"Admin_setReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12211","type":"address"}],"name":"Info_Admins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12217","type":"address"}],"name":"Info_opted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"v12221","type":"address"}],"name":"Info_rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAllocatedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalAmountClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Info_totalOptedIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"v12273","type":"uint256"}],"name":"User_claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_claimAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"User_optin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_3Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_addAdmin0_130","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_Admin_deposit0_130","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_editUserReward0_130","type":"tuple"},{"internalType":"bool","name":"_Admin_endContractAndTransfer0_130","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"}],"internalType":"struct T2","name":"_Admin_revokeAdmin0_130","type":"tuple"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Admin_setReward0_130","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"_User_claim0_130","type":"tuple"},{"internalType":"bool","name":"_User_claimAll0_130","type":"bool"},{"internalType":"bool","name":"_User_optin0_130","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v12287","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608060405260606200467880380380916200001a826200009c565b6080391262000080576040516200003181620000d2565b608051815260a05161ffff19811681036200008057602082015260c051906001600160a01b038216820362000080576200007091604082015262000198565b6040516138ba908162000d9e8239f35b600080fd5b50634e487b7160e01b600052604160045260246000fd5b6080601f91909101601f19168101906001600160401b03821190821017620000c357604052565b620000cd62000085565b604052565b606081019081106001600160401b03821117620000c357604052565b604081019081106001600160401b03821117620000c357604052565b60e081019081106001600160401b03821117620000c357604052565b608081019081106001600160401b03821117620000c357604052565b601f909101601f19168101906001600160401b03821190821017620000c357604052565b6040519061024082016001600160401b03811183821017620000c357604052565b604051906200019682620000d2565b565b6200019690600080805543600355610220620001b362000166565b8281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201528261016082015282610180820152826101a0820152826101c0820152826101e08201528261020082015201526200040f565b604051906200023682620000d2565b60006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000290575b6040528260005b8281106200027957505050565b82906200028562000227565b81840152016200026c565b6200029a62000085565b62000265565b60405190620002af82620000ee565b60006020838281520152565b60405190620002ca82620000ee565b6000602083620002d9620002a0565b81520152565b60405190620002ee826200010a565b8160c060009182815282602082015262000307620002bb565b60408201528260608201528260808201528260a08201520152565b6040519060a082016001600160401b038111838210176200038c575b604052816200034c62000227565b81526200035862000248565b602082015262000367620002a0565b604082015262000376620002bb565b6060820152608062000387620002df565b910152565b6200039662000085565b6200033e565b906001811015620003ae5760051b0190565b634e487b7160e01b600052603260045260246000fd5b60405190620003d3826200010a565b600060c083828152826020820152826040820152620003f1620002df565b60608201528260808201526200040662000248565b60a08201520152565b62000196906200041e62000322565b6200043d620004376200043360045460ff1690565b1590565b620005ee565b60408051338152835160208083019190915284015161ffff191681830152838201516001600160a01b031660608201529091620005d1917f19beb4b4ae800ef164657ae1c238d1e90f50effd8bb91dc7502d5d13755b59e090608090a1620004b284518015908115620005e1575b506200060f565b60009283825152620005cb60209285848251015285838251015280519084810191825152620004e2341562000630565b6080848201600581515260648782510152519160608101928351526200050b8784510160019052565b0190878251526200051f8683510160019052565b51848251015286606082510152866080825101528660a0825101528660c08251015262000595620005868562000554620003c4565b3381529a620005788c8a6200056e8185015161ffff191690565b61ffff1916910152565b01516001600160a01b031690565b6001600160a01b031689860152565b51606088015243608088015251918251908085830151920151151591620005bb62000187565b9588875286015284019015159052565b62000651565b60a083015260c082015262000aea565b90506001541438620004ab565b15620005f657565b60405163100960cb60e01b8152600f6004820152602490fd5b156200061757565b60405163100960cb60e01b815260106004820152602490fd5b156200063857565b60405163100960cb60e01b815260116004820152602490fd5b91906200065d62000248565b926000805b6001811062000672575050508252565b6200067e81846200039c565b516200068b82886200039c565b526200069881876200039c565b506000198114620006ac5760010162000662565b634e487b7160e01b82526011600452602482fd5b506040513d6000823e3d90fd5b90600182811c92168015620006ff575b6020831014620006e957565b634e487b7160e01b600052602260045260246000fd5b91607f1691620006dd565b81811062000716575050565b600081556001016200070a565b62000730600254620006cd565b80620007395750565b601f81116001146200074d57506000600255565b60026000526200079590601f0160051c60008051602062004658833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6200070a565b6000602081208160025555565b604051906101a082016001600160401b0381118382101762000831575b60405281610180600091828152826020820152826040820152620007e2620002df565b6060820152620007f162000248565b60808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201526200082762000227565b6101608201520152565b6200083b62000085565b620007bf565b60408091805184526020810151602085015201511515910152565b906000905b600182106200086f57505050565b602060608262000883600194875162000841565b0193019101909162000861565b81516001600160a01b03168152610320810192916103009060208181015161ffff1916908401526040818101516001600160a01b031690840152620009336060820151606085019060c06101009180518452602081015115156020850152602060408201518181518051604089015201516060870152015115156080850152606081015160a085015260808101518285015260a081015160e08501520151910152565b6080810151906200094b61018092838601906200085c565b60a08101516101e085015260c081015161020085015260e0810151610220850152610100810151610240850152610120810151610260850152610140810151610280850152620009a66101608201516102a086019062000841565b0151910152565b90601f8211620009bb575050565b620001969160026000526020600020906020601f840160051c83019310620009ec575b601f0160051c01906200070a565b9091508190620009de565b80519091906001600160401b03811162000ada575b62000a248162000a1e600254620006cd565b620009ad565b602080601f831160011462000a63575081929360009262000a57575b50508160011b916000199060031b1c191617600255565b01519050388062000a40565b6002600052601f1983169490919060008051602062004658833981519152926000905b87821062000ac157505083600195961062000aa7575b505050811b01600255565b015160001960f88460031b161c1916905538808062000a9c565b8060018596829496860151815501950193019062000a86565b62000ae462000085565b62000a0c565b606081019062000afe602083510151151590565b1562000be95762000be3620001969262000bd492608062000b1e620007a2565b82516001600160a01b031681529260208381015161ffff1916908501526040838101516001600160a01b0316908501528051606085015260c060a0840193845184870152015160a085015260a08151015160c085015260608151015160e085015260c08151015161010085015280515161012085015251015161014083015280515161016083015251515161018082015262000bba6003600055565b62000bc443600155565b6040519283916020830162000890565b03601f19810183528262000142565b620009f7565b62000c4f9150600080808062000c1562000c09865160018060a01b031690565b6001600160a01b031690565b60c08601519082821562000c78575bf11562000c68575b6040810151815160a0909201515151916001600160a01b03908116911662000c8a565b6000805562000c5e6000600155565b6200019662000723565b62000c72620006c0565b62000c2c565b506108fc62000c24565b156200008057565b6000809162000196948262000d2d95604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815262000cce8162000126565b5193165af13d1562000d435762000d1c3d6001600160401b03811162000d33575b6040519062000d09601f8201601f19166020018362000142565b81529182903d6000602084013e62000d6b565b506020808251830101910162000d51565b62000c82565b62000d3d62000085565b62000cef565b62000d1c6060809262000d6b565b908160209103126200008057518015158103620000805790565b1562000d745790565b80511562000d8457805190602001fd5b60405163100960cb60e01b815260026004820152602490fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630a84e99f1461020c5780630bda4657146102035780631e93b0f1146101fa57806336e56ea5146101f15780633702d0ce146101e85780634ab9f8b3146101df578063523df4f6146101d657806355c42a95146101cd578063672422c7146101c457806374623535146101bb57806374f16ec9146101b25780637a2b54dc146101a95780637f0595e2146101a05780638323075714610197578063883513de1461018e57806392cf8bd514610185578063a57924241461017c578063a5928cf514610173578063a8d65f201461016a578063ab53f2c614610161578063c568a57c14610158578063c5d86f6f1461014f578063cd6637a814610146578063e0590c9a1461013d5763f33c0dce0361000e57610138610b6d565b61000e565b50610138610b29565b50610138610ad9565b50610138610aa7565b506101386109c9565b50610138610954565b506101386108d8565b50610138610897565b50610138610828565b506101386107d7565b50610138610786565b50610138610767565b506101386106d0565b5061013861068f565b506101386105ea565b506101386105b8565b5061013861054a565b5061013861050c565b506101386104a5565b5061013861044f565b50610138610411565b5061013861038c565b50610138610342565b5061013861028b565b5060203660031901126102695760206040610225611008565b61025d81610231611156565b60043581515285810190600182515251858251015261024e61119e565b906000825251868201526117a8565b01511515604051908152f35b600080fd5b6001600160a01b031690565b6001600160a01b0381160361026957565b5034610269576020366003190112610269576103346101406004356102af8161027a565b6102b7611008565b906102c6600360005414612b4b565b6102e06102d1610cc5565b60208082518301019101611506565b506001600160a01b03166102f381610e68565b516102fd81610378565b61030681610378565b600090600103610338575061031c604091610e68565b01519182915b01526040519081529081906020820190565b0390f35b9050918291610322565b5034610269576000366003190112610269576020600354604051908152f35b50634e487b7160e01b600052602160045260246000fd5b6002111561038257565b61038a610361565b565b50346102695760203660031901126102695760606103bd6004356103af8161027a565b6103b7610dfb565b50610e68565b604080519180516103cd81610378565b835260208101511515602084015201516040820152f35b919091604080606083019480516103fa81610378565b845260208101511515602085015201511515910152565b5034610269576020366003190112610269576103346104436004356104358161027a565b61043d610dfb565b50610fb7565b604051918291826103e4565b50602036600319011261026957602060a060043561046c8161027a565b61025d610477611008565b8092610481611156565b90815190600180881b0316905285810190600482515251858251015261024e61119e565b5060208060031936011261026957806004356104c08161027a565b61025d6104cb611008565b80926104d5611156565b80516001600160a01b03909216909152848101805160009052905181518601526104fd61119e565b906000825251858201526117a8565b5060003660031901126102695760206080610525611008565b61025d8161053161119e565b858101906003825152511515858251015261024e61119e565b503461026957600036600319011261026957610564611008565b60036000540361059f576101c0602091610100610590610582610cc5565b858082518301019101611506565b01519182910152604051908152f35b60405163100960cb60e01b8152600e6004820152602490fd5b5034610269576020366003190112610269576103346104436004356105dc8161027a565b6105e4610dfb565b50610f66565b5060403660031901126102695761033461067d606060043561060b8161027a565b610676610616611008565b809261062061109a565b6001600160a01b03918216815260243560208201908152909161064161371e565b925116825152516020825101526020810190600282515251858251015261066661119e565b90600082525160208201526117a8565b0151151590565b60405191829182901515815260200190565b5060003660031901126102695760206102206106a9611008565b61025d816106b561119e565b8581019060088251525115156101208251015261024e61119e565b5034610269576020366003190112610269576004356106ee8161027a565b6106f6611008565b9060036000540361074e5761033491600161072560e0936107186102d1610cc5565b50828060a01b0316610eeb565b5161072f81610378565b61073881610378565b1491018190526040519081529081906020820190565b60405163100960cb60e01b815260076004820152602490fd5b5034610269576000366003190112610269576020600154604051908152f35b5034610269576000366003190112610269576107a0611008565b6003600054036107be57610100602091610180610590610582610cc5565b60405163100960cb60e01b815260086004820152602490fd5b5034610269576000366003190112610269576107f1611008565b60036000540361080f57610160602091610140610590610582610cc5565b60405163100960cb60e01b8152600b6004820152602490fd5b5034610269576020366003190112610269576004356108468161027a565b61084e611008565b9060036000540361087e57610334916001610725610120936108716102d1610cc5565b50828060a01b0316610fb7565b60405163100960cb60e01b815260096004820152602490fd5b5060003660031901126102695760206102006108b1611008565b61025d816108bd61119e565b8581019060078251525115156101008251015261024e61119e565b5060403660031901126102695761033461067d60c06004356108f98161027a565b610676610904611008565b809261090e61109a565b6001600160a01b03918216815260243560208201908152909161092f61371e565b925116825152516020825101526020810190600582515251858251015261066661119e565b5034610269576000806003193601126109c6578054610971610cc5565b906040519283918252602090604082840152835191826040850152815b8381106109af57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161098e565b80fd5b506101a0366003190112610269576109df611008565b604051906109ec82610c0e565b600435825261018036602319011261026957610a9b91610a0a610d6e565b610a12613740565b8152610a1d3661374f565b6020820152610a2b3661379b565b6040820152610a39366137dd565b6060820152610a46613844565b6080820152610a5436613775565b60a0820152610a623661380f565b60c0820152610a70366137bb565b60e0820152610a7d613851565b610100820152610a8b61385f565b61012082015260208201526117a8565b60405160008152602090f35b503461026957602036600319011261026957610334610443600435610acb8161027a565b610ad3610dfb565b50610eeb565b503461026957600036600319011261026957610af3611008565b600360005403610b105761018060209160e0610590610582610cc5565b60405163100960cb60e01b8152600c6004820152602490fd5b5060203660031901126102695760206101e0610b43611008565b61025d81610b4f611156565b6004358151528581019060068251525160e08251015261024e61119e565b503461026957600036600319011261026957610b87611008565b600360005403610ba4576101a060209160c0610590610582610cc5565b60405163100960cb60e01b8152600d6004820152602490fd5b90600182811c92168015610bed575b6020831014610bd757565b634e487b7160e01b600052602260045260246000fd5b91607f1691610bcc565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610c2957604052565b610c31610bf7565b604052565b606081019081106001600160401b03821117610c2957604052565b602081019081106001600160401b03821117610c2957604052565b60e081019081106001600160401b03821117610c2957604052565b60a081019081106001600160401b03821117610c2957604052565b601f909101601f19168101906001600160401b03821190821017610c2957604052565b6040519060008260025491610cd983610bbd565b808352600193808516908115610d4d5750600114610cff575b5061038a92500383610ca2565b6002600090815260008051602061386e83398151915294602093509091905b818310610d3557505061038a935082010138610cf2565b85548884018501529485019487945091830191610d1e565b905061038a94506020925060ff191682840152151560051b82010138610cf2565b6040519061014082016001600160401b03811183821017610c2957604052565b6040519061024082016001600160401b03811183821017610c2957604052565b6040519061034082016001600160401b03811183821017610c2957604052565b604051906101a082016001600160401b03811183821017610c2957604052565b6040519061038a82610c36565b60405190610e0882610c36565b60006040838281528260208201520152565b6001600160a01b0316600090815260086020526040902090565b6001600160a01b0316600090815260076020526040902090565b6001600160a01b0316600090815260056020526040902090565b90610e71610dfb565b9160018060a01b03166000908082526005602052600160ff604084205416610e9881610378565b03610ee05760409293508152600560205220600160405191610eb983610c36565b60ff8154818116610ec981610378565b855260081c16151560208401520154604082015290565b508083526020830152565b90610ef4610dfb565b9160018060a01b03166000908082526006602052600160ff604084205416610f1b81610378565b03610ee0576040929350815260066020522060ff60405191610f3c83610c36565b54818116610f4981610378565b8352818160081c161515602084015260101c161515604082015290565b90610f6f610dfb565b9160018060a01b03166000908082526007602052600160ff604084205416610f9681610378565b03610ee0576040929350815260076020522060ff60405191610f3c83610c36565b90610fc0610dfb565b9160018060a01b03166000908082526008602052600160ff604084205416610fe781610378565b03610ee0576040929350815260086020522060ff60405191610f3c83610c36565b611010610d8e565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152610220830152565b6040519061109482610c51565b60008252565b604051906110a782610c0e565b60006020838281520152565b6040519061014082016001600160401b03811183821017611149575b604052816101206000918281526040516110e881610c51565b83815260208201526040516110fc81610c51565b838152604082015261110c61109a565b606082015282608082015261111f611087565b60a082015261112c61109a565b60c0820152611139611087565b60e0820152826101008201520152565b611151610bf7565b6110cf565b6040519061116382610c0e565b8160405161117081610c51565b60008152815260206111806110b3565b910152565b6001600160a01b039091169052565b6009111561038257565b604051906111ab82610c0e565b816000815260206111806110b3565b604051906111c782610c6c565b8160c06000918281528260208201526040516111e281610c0e565b6111ea61109a565b815283602082015260408201528260608201528260808201528260a08201520152565b611215610dae565b9061121e611087565b82526112286111ba565b6020830152611235611087565b60408301526112426111ba565b606083015261124f61109a565b608083015261125c6111ba565b60a08301526112696111ba565b60c0830152611276611087565b60e08301526112836111ba565b61010083015261129161109a565b6101208301526000610140830152600061016083015260006101808301526112b76111ba565b6101a08301526112c5611087565b6101c08301526112d3610dfb565b6101e08301526112e16111ba565b6102008301526112ef6111ba565b6102208301526112fd610dfb565b6102408301526000610260830152600061028083015261131b6111ba565b6102a0830152611329610dfb565b6102c08301526113376111ba565b6102e08301526113456111ba565b6103008301526113536111ba565b610320830152565b519061038a8261027a565b519061ffff198216820361026957565b8015150361026957565b809291039160608312610269576040519061139a82610c0e565b604082941261026957604060209181516113b381610c0e565b81518152838201518482015284520151916113cd83611376565b0152565b91909161012081840312610269576040519060c0906101009060e084016001600160401b03811185821017611452575b604052611429849682518652602083015161141b81611376565b602087015260408301611380565b604085015260a0810151606085015282810151608085015260e081015160a08501520151910152565b61145a610bf7565b611401565b919082606091031261026957604051606081016001600160401b038111828210176114a7575b604052604080829480518452602081015160208501520151916113cd83611376565b6114af610bf7565b611485565b9080601f8301121561026957604051916114cd83610c51565b826060928383019281841161026957915b8383106114ed57505050505090565b602085916114fb848661145f565b8152019201916114de565b90610320828203126102695761030061151d610dce565b926115278161135b565b845261153560208201611366565b60208501526115466040820161135b565b604085015261155883606083016113d1565b60608501526115c461018093611570818685016114b4565b60808701526101e083015160a087015261020083015160c087015261022083015160e08701526102408301516101008701526102608301516101208701526102808301516101408701526102a0830161145f565b61016085015201519082015290565b9060098210156115e05752565b6115e8610361565b52565b80516001600160a01b03168252602090810151910152565b6101a0602061038a9395946101c084019660018060a01b0316845280518285015201516116346040840182516115d3565b6020810151516001600160a01b031660608401526040810151516080840152611665606082015160a08501906115eb565b6080810151151560e084015260a0810151516001600160a01b031661010084810191909152906116bd60c0820151926116a461012094858801906115eb565b60e0830151516101608701528201511515610180860152565b01511515910152565b5160098110156116d35790565b6116db610361565b90565b516001600160a01b031690565b805460ff19166001179055565b6040519061170582610c51565b8160005b60208110611715575050565b602090611720610dfb565b8184015201611709565b6040519061173782610c6c565b600060c0838281528260208201528260408201526117536111ba565b60608201528260808201526117666116f8565b60a08201520152565b516116db81610378565b81516001600160a01b031681526020808301519082015260409182015161ffff19169181019190915260600190565b906117b161120d565b916000906117c26003835414612b6b565b6117ca610cc5565b926117df602094858082518301019101611506565b926117fb6117f66117f260045460ff1690565b1590565b612b8b565b846040937fb212047171f573087bd7daffa4c27e0281c01018b089f7487c3ab5d443db17d285518061182e843383611603565b0390a161184681518015908115612adc575b50612bab565b0161185181516116c6565b61185a81611194565b611a1e57926119d061038a97936119d8938860a098975101518652611887611882885161026e565b61026e565b33036119f9576118976001612f09565b6118a13415612f29565b88848801926118c16118bc6118b6865161026e565b336130bb565b612f49565b6118f06118eb6118d18a516116de565b6001600160a01b0316600090815260066020526040902090565b6116eb565b61190c6119006118d18a516116de565b805462ff000019169055565b8551600081527f63f09a12717a6921aee33bbdbad28ef608c50bc67da0a70d015667fd74608fa990602090a1015287610120870151950194855152826060870161196761195c8b83510151151590565b8b8951019015159052565b510151838651015260e086015160608651015261014086015160808651015260c0860151878651015261010086015160c0865101526119ca6119a761172a565b986119bb6119b5895161026e565b8b611185565b8088015161ffff1916908a0152565b5161026e565b908601611185565b516060840152436080840152608081015182840152015160c0820152613599565b6118976001611a0f611a0a33610eeb565b61176f565b611a1881610378565b14612f09565b9394919590611a2d85516116c6565b94611a3786611194565b6001958603611bf75784611a679151015195858401968752611a5c611882895161026e565b3303611bdc57612ea9565b611a713415612ec9565b83808701978851611a819061026e565b875151611a8e9133613116565b611a9790612ee9565b8151600081527f01b557faac41283a3359a8efad82a2fb79974b3811fa661621112feac62d777a90602090a10152610120850151845151611ad791612b22565b9060600190815152826060860183815101611af29051151590565b835190151590850152510151838251015260e085015181516060015261014085015181516080015260c0850151815160a00152610100850151815160c00152611b3961172a565b958551611b459061026e565b611b4f9088611185565b8286015161ffff19168784015251611b669061026e565b611b7290878501611185565b51606086015243608086015260808401519261018085015190515101916101608501518183820151910151611ba690151590565b92611baf610dee565b94855284015290151590820152611bc591613180565b60a083015260a0015160c082015261038a90613599565b611be8611a0a33610eeb565b611bf181610378565b14612ea9565b6002611c0982999394979599516116c6565b611c1281611194565b03611d255760a095936119d89360608a99979461038a9b826119d0965101519460808a01958652611c466118828c5161026e565b3303611d0657611c5581612e29565b611c6a82875101516101808d01511015612e49565b611c743415612e69565b611cb4611ca3898d0197611c93611c8e6118b68b5161026e565b612e89565b611ca86118eb611ca383516116de565b610e4e565b5193840151935161026e565b01558551600081527f274ba5981513683856326dfd649fc309158f9f146a0f5d1c85fe416aa6aa3ded90602090a1015286610120870151950194855152826060870161196761195c8b83510151151590565b611c5581611d16611a0a33610eeb565b611d1f81610378565b14612e29565b90926003611d3383516116c6565b611d3c81611194565b03611e1b57505061038a9594926119d060a095936119d893611d6f336001808b1b03611d688a5161026e565b1614612dc9565b611d793415612de9565b80608085890193611d95611d906118b6875161026e565b612e09565b8651600081527f58f11bbb5621330c2c986cfa278167e74070200852390f5a2cbf158b593522fb90602090a1015260c061012088015196019586515288865101528260608701510151838651015260e086015160608651015261014086015160808651015260c0860151878651015261010086015160c0865101526119ca6119a761172a565b6004611e2783516116c6565b611e3081611194565b03611f395750926119d060a095936119d893878061038a9b9a985101519260e08801938452611e6c611e656118828b5161026e565b3314612d6b565b611e763415612d8b565b82611e9c6118d1888c0196611e96611e916118b68a5161026e565b612dab565b516116de565b558551600081527f5f22b15058e89c3d25c017f7d29425a9760841d30a21a325d7e53938c1c9ebfb90602090a1015261012086015194610100809101958651528360608801611efc611ef18c83510151151590565b8c8a51019015159052565b510151848751015260e087015160608751015261014087015160808751015260c0870151888751015286015160c0865101526119ca6119a761172a565b9391969294906005611f4b82516116c6565b611f5481611194565b036121d35760c090510151906101208481830193808552015190880190815110928561014098611f898a860196879015159052565b611fb489611fa5611a0a611fa061188288516116de565b610fb7565b611fae81610378565b14612d0b565b8551156121cc578183510151955b61016086810197885299611fd63415612d2b565b888d019d8e51611fe59061026e565b8951611ff19133613116565b611ffa90612d4b565b8551612005906116de565b61200e90610e4e565b612017906116eb565b818651612023906116de565b61202c9061026e565b61203590610e68565b61203e9061176f565b61204781610378565b14600014936120c69260c0926120cc966121c357506120838c6120756120706118828c516116de565b610e68565b01515b888a51015190612b22565b90612091611ca38a516116de565b01558a51600181527f2c4300bc7f4cf9ad3c0a50710841a1ce5559a36a8cfaaac3a9265cc04bb3d18490602090a10160019052565b51151590565b156121b5576120e092519151015190612b22565b6101808201525b6101809586820151916101a0019182515283606089018681510161210b9051151590565b845190151590880152510151848351015260e088015182516060015287015181516080015260c0870151815160a00152610100870151815160c0015261214f61172a565b97875161215b9061026e565b612165908a611185565b8488015161ffff1916898601525161217c9061026e565b61218890898501611185565b516060880152436080880152608086015194860151905101928501518183820151910151611ba690151590565b5050516101808201526120e7565b61208390612078565b8b95611fc2565b60066121e4829997949699516116c6565b6121ed81611194565b0361252a5760e090510151916101c0820192808452519561221661018089019788511015612c8b565b88612223611a0a33610e68565b61222c81610378565b03612521575061224c8561223f33610e68565b01515b8451511115612cab565b6122563415612ccb565b8487019061226f61226a6118b6845161026e565b612ceb565b8551600181527f452ab1a81050731f6f48f56e5b6499febd9becc38795a7167df5de71f94644d090602090a160016101e0918201528201976122b2338a51611185565b835151858a51015260008051602061388e8339815191526122fa868a019a6122ee6122e08d5161ffff191690565b8a8351019061ffff19169052565b51885191829182611779565b0390a1612309611a0a33610f66565b61231281610378565b036124415780516123229061026e565b8351513361232f92612f69565b61233833610e4e565b6123489060016000918281550155565b61012087015183515161235a91612b36565b9161022001918251528460608801858151016123769051151590565b845190151590870152510151858351015260e087015183515161239891612b22565b82516060015261014087015182516080015260c08701516123b890612aff565b825160a001526101008701516123cd90612aff565b825160c001526123db61172a565b9787516123e79061026e565b6123f1908a611185565b5161ffff191688850152516124059061026e565b61241190888601611185565b516060870152436080870152608085015193519051519003916101608501518183820151910151611ba690151590565b61244a33610e34565b612453906116eb565b61245c33610e34565b805462ff00001916905580516124719061026e565b8351513361247e92612f69565b61248733610e4e565b6124979060016000918281550155565b6101208701518351516124a991612b36565b9161020001918251528460608801858151016124c59051151590565b845190151590870152510151858351015260e08701518351516124e791612b22565b82516060015261014087015182516080015260c087015161250790612aff565b825160a00152610100870151825160c001526123db61172a565b61224c90612242565b600761253d8299959897949399516116c6565b61254681611194565b03612a09575061255533610e68565b836102408901918083525161256981610378565b61257281610378565b036129fb576125a2846125938784510151935b6102608c019485525161176f565b61259c81610378565b14612c0b565b80516125b661018088019182511015612c2b565b6125c03415612c4b565b858701946125d96125d46118b6885161026e565b612c6b565b815183519190828111156129f55750815b6102808c019283528351116126e35750505061038a97936119d89361020060a09897947f98466a02b4f346c6df500218540796dcdc48e95956b3854f55ba27c765e983516126466119d096518851918291829190602083019252565b0390a18551600081527f08086a19909dc075c5965e5f877920077169e90789d9a412fb9fa1417062841b90602090a101526102a0610120870151950194855152826060870161269b61195c8b83510151151590565b510151838651015260e086015160608651015261014086015160808651015260c086015187865101526126d2610100870151612aff565b60c0865101526119ca6119a761172a565b919798959993925093506126f9611a0a33610f66565b61270281610378565b03612867578451600181527f7b965284fec77df9b4e0bdf08c429d874aed59a9cfa7545c00e6e8bd6f359d5590602090a1610200016127419060019052565b865161274c9061026e565b82513361275892612f69565b61276133610e4e565b6127719060016000918281550155565b610120860151825161278291612b36565b90610300019081515283606087018481510161279e9051151590565b835190151590860152510151848251015260e086015182516127bf91612b22565b81516060015261014086015181516080015260c08601516127df90612aff565b815160a00152610100860151815160c001526127f961172a565b9686516128059061026e565b61280f9089611185565b8684015161ffff19165b61ffff1916848901525161282c9061026e565b61283890888601611185565b5160608701524360808701526080850151935190519003916101608501518183820151910151611ba690151590565b8451600181527f01fbaee23a05c907229b6c54308fc01d01db213aafb0d155d3e90e7a800d4e7b90602090a1610200016128a19060019052565b6102c0810196338851906128b491611185565b825188518501528684018051895161ffff1990911690870152975185516128dc819282611779565b0360008051602061388e83398151915291a16128f733610e34565b612900906116eb565b61290933610e34565b805462ff000019169055805161291e9061026e565b83513361292a92612f69565b61293333610e4e565b6129439060016000918281550155565b610120870151835161295491612b36565b916102e001918251528460608801858151016129709051151590565b845190151590870152510151858351015260e0870151835161299191612b22565b82516060015261014087015182516080015260c08701516129b190612aff565b825160a001526101008701516129c690612aff565b825160c001526129d461172a565b9787516129e09061026e565b6129ea908a611185565b5161ffff1916612819565b916125ea565b6125a2846125938593612585565b600891929594979350612a1c90516116c6565b612a2581611194565b14612a33575b505050505050565b612ad1956119d06119d89260a096612a4b3415612bcb565b61022084880192612a67612a626118b6865161026e565b612beb565b612a736118eb33610e1a565b612a7f61190033610e1a565b8551600081527ff6b8d54e320a0f31d4aae66ed80e912e28115d9624bafc1855b909a17576480a90602090a10152610320610120870151950194855152826060870161196761195c8b83510151151590565b388080808080612a2b565b90506001541438611840565b50634e487b7160e01b600052601160045260246000fd5b906001820191828111612b15575b821061026957565b612b1d612ae8565b612b0d565b9190820191828111612b1557821061026957565b908103908111612b435790565b6116db612ae8565b15612b5257565b60405163100960cb60e01b8152600a6004820152602490fd5b15612b7257565b60405163100960cb60e01b815260126004820152602490fd5b15612b9257565b60405163100960cb60e01b815260136004820152602490fd5b15612bb257565b60405163100960cb60e01b815260146004820152602490fd5b15612bd257565b60405163100960cb60e01b815260306004820152602490fd5b15612bf257565b60405163100960cb60e01b815260316004820152602490fd5b15612c1257565b60405163100960cb60e01b8152602c6004820152602490fd5b15612c3257565b60405163100960cb60e01b8152602d6004820152602490fd5b15612c5257565b60405163100960cb60e01b8152602e6004820152602490fd5b15612c7257565b60405163100960cb60e01b8152602f6004820152602490fd5b15612c9257565b60405163100960cb60e01b815260286004820152602490fd5b15612cb257565b60405163100960cb60e01b815260296004820152602490fd5b15612cd257565b60405163100960cb60e01b8152602a6004820152602490fd5b15612cf257565b60405163100960cb60e01b8152602b6004820152602490fd5b15612d1257565b60405163100960cb60e01b815260256004820152602490fd5b15612d3257565b60405163100960cb60e01b815260266004820152602490fd5b15612d5257565b60405163100960cb60e01b815260276004820152602490fd5b15612d7257565b60405163100960cb60e01b815260226004820152602490fd5b15612d9257565b60405163100960cb60e01b815260236004820152602490fd5b15612db257565b602460405163100960cb60e01b8152816004820152fd5b15612dd057565b60405163100960cb60e01b8152601f6004820152602490fd5b15612df057565b60405163100960cb60e01b815260206004820152602490fd5b15612e1057565b60405163100960cb60e01b815260216004820152602490fd5b15612e3057565b60405163100960cb60e01b8152601b6004820152602490fd5b15612e5057565b60405163100960cb60e01b8152601c6004820152602490fd5b15612e7057565b60405163100960cb60e01b8152601d6004820152602490fd5b15612e9057565b60405163100960cb60e01b8152601e6004820152602490fd5b15612eb057565b60405163100960cb60e01b815260186004820152602490fd5b15612ed057565b60405163100960cb60e01b815260196004820152602490fd5b15612ef057565b60405163100960cb60e01b8152601a6004820152602490fd5b15612f1057565b60405163100960cb60e01b815260156004820152602490fd5b15612f3057565b60405163100960cb60e01b815260166004820152602490fd5b15612f5057565b60405163100960cb60e01b815260176004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152612fe593600093849392849190608081016001600160401b03811182821017612fec575b6040525193165af1612fd5612fce612ff9565b809261305b565b5060208082518301019101613046565b1561026957565b612ff4610bf7565b612fbb565b3d15613041573d906001600160401b038211613034575b60405191613028601f8201601f191660200184610ca2565b82523d6000602084013e565b61303c610bf7565b613010565b606090565b9081602091031261026957516116db81611376565b156130635790565b80511561307257805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156130935790565b8051156130a257805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60006116db928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152826064820152606481526130ff81610c87565b5193165af1612fd561310f612ff9565b809261308b565b6000916116db9383809360405160208101936323b872dd60e01b855260018060a01b0380931660248301523060448301526064820152606481526130ff81610c87565b90600181101561316a5760051b0190565b634e487b7160e01b600052603260045260246000fd5b919061318a6116f8565b9260005b6001811061319c5750508252565b806131a960019284613159565b516131b48288613159565b526131bf8187613159565b5060001981146131d0575b0161318e565b6131d8612ae8565b6131ca565b506040513d6000823e3d90fd5b8181106131f5575050565b600081556001016131ea565b61320c600254610bbd565b806132145750565b601f811160011461322757506000600255565b600260005261326c90601f0160051c60008051602061386e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6131ea565b6000602081208160025555565b604051906101a082016001600160401b03811183821017613301575b604052816101806000918281528260208201528260408201526132b66111ba565b60608201526132c36116f8565b60808201528260a08201528260c08201528260e08201528261010082015282610120820152826101408201526132f7610dfb565b6101608201520152565b613309610bf7565b613295565b60408091805184526020810151602085015201511515910152565b906000905b6001821061333b57505050565b602060608261334d600194875161330e565b0193019101909161332e565b81516001600160a01b03168152610320810192916103009060208181015161ffff1916908401526040818101516001600160a01b0316908401526133fb6060820151606085019060c06101009180518452602081015115156020850152602060408201518181518051604089015201516060870152015115156080850152606081015160a085015260808101518285015260a081015160e08501520151910152565b6080810151906134116101809283860190613329565b60a08101516101e085015260c081015161020085015260e081015161022085015261010081015161024085015261012081015161026085015261014081015161028085015261346a6101608201516102a086019061330e565b0151910152565b90601f821161347e575050565b61038a9160026000526020600020906020601f840160051c830193106134ac575b601f0160051c01906131ea565b909150819061349f565b80519091906001600160401b03811161358c575b6134de816134d9600254610bbd565b613471565b602080601f831160011461351a575081929360009261350f575b50508160011b916000199060031b1c191617600255565b0151905038806134f8565b6002600052601f1983169490919060008051602061386e833981519152926000905b87821061357457505083600195961061355b575b505050811b01600255565b015160001960f88460031b161c19169055388080613550565b8060018596829496860151815501950193019061353c565b613594610bf7565b6134ca565b60608101906135ac602083510151151590565b156136985761369361038a926136859260806135c6613279565b926135da6135d4845161026e565b85611185565b60208381015161ffff1916908501526136026135f9604085015161026e565b60408601611185565b8051606085015260c060a0840193845184870152015160a085015260a08151015160c085015260608151015160e085015260c08151015161010085015280515161012085015251015161014083015280515161016083015251515161018082015261366d6003600055565b61367643600155565b60405192839160208301613359565b03601f198101835282610ca2565b6134b6565b6136f2915060008080806136af611882865161026e565b60c086015190828215613715575bf115613708575b6136d1604082015161026e565b60a06136dd835161026e565b9201515151916001600160a01b031690612f69565b600080556137006000600155565b61038a613201565b6137106131dd565b6136c4565b506108fc6136bd565b6040519061372b82610c0e565b8161373461109a565b815260206111806110b3565b60243590600982101561026957565b6020906043190112610269576040519061376882610c51565b604435826115e88261027a565b60209060e3190112610269576040519061378e82610c51565b60e435826115e88261027a565b602090606319011261026957604051906137b482610c51565b6064358252565b60209061014319011261026957604051906137d582610c51565b610144358252565b604090608319011261026957604051906137f682610c0e565b816084356138038161027a565b8152602060a435910152565b604090610103190112610269576040519061382982610c0e565b81610104356138378161027a565b8152602061012435910152565b60c4359061038a82611376565b610164359061038a82611376565b610184359061038a8261137656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0a8804e0c8b7a13171d7d6d0b8388bfd3b16bed84cac10f9276a3659d382ce23a164736f6c6343000811000a405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace`,
  BytecodeLen: 18040,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './token.rsh:295:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './token.rsh:70:37:after expr stmt semicolon',
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
  "User_claimAll": User_claimAll,
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
    claimAll: User_claimAll,
    optin: User_optin
    }
  };
